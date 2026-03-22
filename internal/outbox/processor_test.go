package outbox

import (
	"context"
	"errors"
	"log/slog"
	"sync"
	"testing"
	"time"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/domain"
)

// --- fakes ---

type fakeStore struct {
	mu      sync.Mutex
	pending []domain.EmailOutbox
	sent    []uuid.UUID
	failed  []uuid.UUID
	retries []retryRecord
}

type retryRecord struct {
	id          uuid.UUID
	retryCount  int
	nextRetryAt time.Time
}

func (s *fakeStore) push(e domain.EmailOutbox) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.pending = append(s.pending, e)
}

func (s *fakeStore) ListPending(_ context.Context, limit int) ([]domain.EmailOutbox, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	out := make([]domain.EmailOutbox, 0)
	for _, e := range s.pending {
		if e.Status == domain.EmailOutboxStatusPending {
			out = append(out, e)
		}
		if len(out) >= limit {
			break
		}
	}
	return out, nil
}

func (s *fakeStore) MarkSent(_ context.Context, id uuid.UUID, _ time.Time) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.sent = append(s.sent, id)
	for i, e := range s.pending {
		if e.ID == id {
			s.pending[i].Status = domain.EmailOutboxStatusSent
		}
	}
	return nil
}

func (s *fakeStore) MarkFailed(_ context.Context, id uuid.UUID, _ string) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.failed = append(s.failed, id)
	for i, e := range s.pending {
		if e.ID == id {
			s.pending[i].Status = domain.EmailOutboxStatusFailed
		}
	}
	return nil
}

func (s *fakeStore) UpdateRetry(_ context.Context, id uuid.UUID, retryCount int, _ string, nextRetryAt time.Time) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.retries = append(s.retries, retryRecord{id: id, retryCount: retryCount, nextRetryAt: nextRetryAt})
	return nil
}

type fakeSender struct {
	mu             sync.Mutex
	err            error
	calls          []string // idempotency keys passed
	sendErrOnCalls int      // return error for the first N calls
	callCount      int
}

func (f *fakeSender) Send(ctx context.Context, toAddr, subject, htmlBody, textBody string) error {
	return f.SendWithIdempotencyKey(ctx, toAddr, subject, htmlBody, textBody, "")
}

func (f *fakeSender) SendWithIdempotencyKey(_ context.Context, _, _, _, _, idempotencyKey string) error {
	f.mu.Lock()
	defer f.mu.Unlock()
	f.calls = append(f.calls, idempotencyKey)
	f.callCount++
	if f.sendErrOnCalls > 0 && f.callCount <= f.sendErrOnCalls {
		return f.err
	}
	return nil
}

func newItem(retryCount int) domain.EmailOutbox {
	return domain.EmailOutbox{
		ID:             uuid.New(),
		IdempotencyKey: uuid.New(),
		ToAddr:         "test@example.com",
		Subject:        "hello",
		HTMLBody:       "<p>hi</p>",
		TextBody:       "hi",
		Status:         domain.EmailOutboxStatusPending,
		RetryCount:     retryCount,
		CreatedAt:      time.Now().UTC(),
	}
}

func newTestProcessor(s *fakeStore, sender *fakeSender) *Processor {
	return &Processor{
		store:    s,
		sender:   sender,
		logger:   slog.Default(),
		interval: defaultPollInterval,
		batch:    defaultBatchSize,
		maxRetry: defaultMaxRetries,
		notify:   make(chan struct{}, 1),
		done:     make(chan struct{}),
	}
}

// --- tests ---

func TestProcessor_SuccessfulDelivery(t *testing.T) {
	s := &fakeStore{}
	sender := &fakeSender{}
	p := newTestProcessor(s, sender)

	item := newItem(0)
	s.push(item)

	p.process(context.Background())

	if len(s.sent) != 1 || s.sent[0] != item.ID {
		t.Errorf("expected item to be marked sent, got sent=%v", s.sent)
	}
	if len(sender.calls) != 1 || sender.calls[0] != item.IdempotencyKey.String() {
		t.Errorf("idempotency key not passed to sender: calls=%v", sender.calls)
	}
}

func TestProcessor_FailureIncreasesRetry(t *testing.T) {
	s := &fakeStore{}
	sender := &fakeSender{err: errors.New("transient"), sendErrOnCalls: 99}
	p := newTestProcessor(s, sender)

	item := newItem(0)
	s.push(item)

	p.process(context.Background())

	if len(s.sent) != 0 {
		t.Error("item should not be marked sent on failure")
	}
	if len(s.retries) != 1 {
		t.Fatalf("expected 1 retry record, got %d", len(s.retries))
	}
	if s.retries[0].retryCount != 1 {
		t.Errorf("retryCount: got %d, want 1", s.retries[0].retryCount)
	}
	if s.retries[0].nextRetryAt.IsZero() {
		t.Error("nextRetryAt should be set")
	}
}

func TestProcessor_MaxRetriesMarksFailed(t *testing.T) {
	s := &fakeStore{}
	sender := &fakeSender{err: errors.New("permanent"), sendErrOnCalls: 99}
	p := newTestProcessor(s, sender)

	// item already at maxRetries-1; next failure should mark failed
	item := newItem(defaultMaxRetries - 1)
	s.push(item)

	p.process(context.Background())

	if len(s.failed) != 1 || s.failed[0] != item.ID {
		t.Errorf("expected item to be marked failed, got failed=%v", s.failed)
	}
	if len(s.retries) != 0 {
		t.Error("should not schedule retry after max retries")
	}
}

func TestProcessor_IdempotencyKeyPassedToSender(t *testing.T) {
	s := &fakeStore{}
	sender := &fakeSender{}
	p := newTestProcessor(s, sender)

	item := newItem(0)
	s.push(item)

	p.process(context.Background())

	if len(sender.calls) == 0 {
		t.Fatal("sender not called")
	}
	if sender.calls[0] != item.IdempotencyKey.String() {
		t.Errorf("idempotency key: got %q, want %q", sender.calls[0], item.IdempotencyKey.String())
	}
}

func TestProcessor_ContextCancellationStopsLoop(_ *testing.T) {
	s := &fakeStore{}
	sender := &fakeSender{}
	p := newTestProcessor(s, sender)
	p.interval = 10 * time.Millisecond

	ctx, cancel := context.WithCancel(context.Background())
	go p.Run(ctx)

	time.Sleep(25 * time.Millisecond)
	cancel()
	p.Shutdown() // should return without hanging
}

func TestProcessor_NotifyWakesImmediately(t *testing.T) {
	s := &fakeStore{}
	sender := &fakeSender{}
	p := newTestProcessor(s, sender)
	p.interval = 1 * time.Hour // long interval so only Notify can trigger processing

	item := newItem(0)
	s.push(item)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	go p.Run(ctx)
	p.Notify()

	deadline := time.Now().Add(500 * time.Millisecond)
	for time.Now().Before(deadline) {
		s.mu.Lock()
		sentLen := len(s.sent)
		s.mu.Unlock()
		if sentLen > 0 {
			return
		}
		time.Sleep(5 * time.Millisecond)
	}
	t.Error("processor did not wake via Notify within 500ms")
}

func TestBackoff(t *testing.T) {
	cases := []struct {
		retryCount int
		want       time.Duration
	}{
		{1, 30 * time.Second},
		{2, 60 * time.Second},
		{3, 120 * time.Second},
		{4, 240 * time.Second},
		{10, maxBackoff},
	}
	for _, tc := range cases {
		got := backoff(tc.retryCount)
		if got != tc.want {
			t.Errorf("backoff(%d) = %v, want %v", tc.retryCount, got, tc.want)
		}
	}
}
