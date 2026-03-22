// Package outbox implements the transactional outbox processor.
// A Processor polls the email_outbox table and delivers pending emails via
// Resend, using per-row idempotency keys to prevent duplicate sends on retry.
package outbox

import (
	"context"
	"log/slog"
	"time"

	"github.com/google/uuid"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
	"go.opentelemetry.io/otel/trace"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/email"
	"github.com/earlypass/earlypass/internal/observability"
)

const instrumentationName = "github.com/earlypass/earlypass/internal/outbox"

// outboxStore is the subset of store.EmailOutboxStore that the processor needs.
// Using a minimal interface keeps the processor decoupled from pgx and makes
// it easy to mock in unit tests.
type outboxStore interface {
	ListPending(ctx context.Context, limit int) ([]domain.EmailOutbox, error)
	MarkSent(ctx context.Context, id uuid.UUID, sentAt time.Time) error
	MarkFailed(ctx context.Context, id uuid.UUID, lastError string) error
	UpdateRetry(ctx context.Context, id uuid.UUID, retryCount int, lastError string, nextRetryAt time.Time) error
}

const (
	defaultPollInterval = 5 * time.Second
	defaultBatchSize    = 100
	defaultMaxRetries   = 5
	maxBackoff          = 15 * time.Minute
)

// Processor polls the email outbox and delivers emails via Resend.
type Processor struct {
	store    outboxStore
	sender   email.IdempotentSender
	metrics  *observability.Metrics // nil-safe: checked before use
	logger   *slog.Logger
	interval time.Duration
	batch    int
	maxRetry int
	notify   chan struct{}
	done     chan struct{}
}

// NewProcessor creates a new Processor with default settings.
// s must satisfy store.EmailOutboxStore (verified at the call site in main).
// metrics may be nil; if so, no metrics are recorded.
func NewProcessor(s outboxStore, sender email.IdempotentSender, metrics *observability.Metrics, logger *slog.Logger) *Processor {
	return &Processor{
		store:    s,
		sender:   sender,
		metrics:  metrics,
		logger:   logger,
		interval: defaultPollInterval,
		batch:    defaultBatchSize,
		maxRetry: defaultMaxRetries,
		notify:   make(chan struct{}, 1),
		done:     make(chan struct{}),
	}
}

// Run starts the polling loop and blocks until ctx is cancelled.
// Call this in a goroutine: go processor.Run(ctx).
func (p *Processor) Run(ctx context.Context) {
	defer close(p.done)

	ticker := time.NewTicker(p.interval)
	defer ticker.Stop()

	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			p.process(ctx)
		case <-p.notify:
			p.process(ctx)
		}
	}
}

// Notify wakes the processor immediately to deliver newly queued emails.
// Safe to call from multiple goroutines; drops the signal if a wake is already pending.
func (p *Processor) Notify() {
	select {
	case p.notify <- struct{}{}:
	default:
	}
}

// Shutdown waits for the current processing batch to finish.
// Call this after cancelling the context passed to Run.
func (p *Processor) Shutdown() {
	<-p.done
}

func (p *Processor) process(ctx context.Context) {
	tracer := otel.Tracer(instrumentationName)
	ctx, span := tracer.Start(ctx, "outbox.process", trace.WithSpanKind(trace.SpanKindInternal))
	defer span.End()

	items, err := p.store.ListPending(ctx, p.batch)
	if err != nil {
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		p.logger.Error("outbox: listing pending emails", slog.Any("error", err))
		return
	}

	span.SetAttributes(attribute.Int("outbox.batch_size", len(items)))

	if p.metrics != nil {
		p.metrics.SetOutboxPending(ctx, int64(len(items)))
	}

	for _, item := range items {
		if ctx.Err() != nil {
			return
		}
		p.deliver(ctx, tracer, item)
	}
}

func (p *Processor) deliver(ctx context.Context, tracer trace.Tracer, item domain.EmailOutbox) {
	ctx, span := tracer.Start(ctx, "outbox.deliver",
		trace.WithSpanKind(trace.SpanKindInternal),
		trace.WithAttributes(
			attribute.String("outbox.id", item.ID.String()),
			attribute.String("outbox.to", item.ToAddr),
			attribute.Int("outbox.retry_count", item.RetryCount),
		),
	)
	defer span.End()

	err := p.sender.SendWithIdempotencyKey(
		ctx,
		item.ToAddr,
		item.Subject,
		item.HTMLBody,
		item.TextBody,
		item.IdempotencyKey.String(),
	)
	if err == nil {
		if markErr := p.store.MarkSent(ctx, item.ID, time.Now().UTC()); markErr != nil {
			span.RecordError(markErr)
			p.logger.Error("outbox: marking email sent",
				slog.String("id", item.ID.String()),
				slog.Any("error", markErr),
			)
		}
		if p.metrics != nil {
			p.metrics.RecordEmailSent(ctx, "sent")
		}
		p.logger.Info("outbox: email delivered",
			slog.String("id", item.ID.String()),
			slog.String("to", item.ToAddr),
		)
		return
	}

	span.RecordError(err)
	p.logger.Warn("outbox: email delivery failed",
		slog.String("id", item.ID.String()),
		slog.String("to", item.ToAddr),
		slog.Int("retry_count", item.RetryCount),
		slog.Any("error", err),
	)

	nextRetry := item.RetryCount + 1
	if nextRetry >= p.maxRetry {
		span.SetStatus(codes.Error, "permanently failed")
		if markErr := p.store.MarkFailed(ctx, item.ID, err.Error()); markErr != nil {
			span.RecordError(markErr)
			p.logger.Error("outbox: marking email failed",
				slog.String("id", item.ID.String()),
				slog.Any("error", markErr),
			)
		}
		if p.metrics != nil {
			p.metrics.RecordEmailSent(ctx, "failed")
		}
		p.logger.Error("outbox: email permanently failed",
			slog.String("id", item.ID.String()),
			slog.String("to", item.ToAddr),
			slog.Int("attempts", nextRetry),
		)
		return
	}

	nextRetryAt := time.Now().Add(backoff(nextRetry)).UTC()
	if markErr := p.store.UpdateRetry(ctx, item.ID, nextRetry, err.Error(), nextRetryAt); markErr != nil {
		span.RecordError(markErr)
		p.logger.Error("outbox: updating retry",
			slog.String("id", item.ID.String()),
			slog.Any("error", markErr),
		)
	}
}

// backoff returns the delay before the nth retry attempt.
// Formula: min(30s × 2^(n-1), 15min).
func backoff(retryCount int) time.Duration {
	d := 30 * time.Second
	for i := 1; i < retryCount; i++ {
		d *= 2
		if d > maxBackoff {
			return maxBackoff
		}
	}
	if d > maxBackoff {
		return maxBackoff
	}
	return d
}
