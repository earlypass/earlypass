package postgres

import (
	"context"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/earlypass/earlypass/internal/domain"
)

// EmailOutboxStore implements store.EmailOutboxStore against PostgreSQL.
type EmailOutboxStore struct {
	pool *pgxpool.Pool
}

const insertEmailOutbox = `
INSERT INTO email_outbox (id, idempotency_key, to_addr, subject, html_body, text_body, status, retry_count, created_at)
VALUES ($1, $2, $3, $4, $5, $6, 'pending', 0, $7)`

// Create inserts a new outbox row using the pool (outside any transaction).
func (s *EmailOutboxStore) Create(ctx context.Context, e domain.EmailOutbox) error {
	_, err := s.pool.Exec(ctx, insertEmailOutbox,
		e.ID, e.IdempotencyKey, e.ToAddr, e.Subject, e.HTMLBody, e.TextBody, e.CreatedAt,
	)
	if err != nil {
		return fmt.Errorf("inserting email outbox row: %w", err)
	}
	return nil
}

// CreateWithTx inserts a new outbox row inside an existing pgx transaction.
func (s *EmailOutboxStore) CreateWithTx(ctx context.Context, tx pgx.Tx, e domain.EmailOutbox) error {
	_, err := tx.Exec(ctx, insertEmailOutbox,
		e.ID, e.IdempotencyKey, e.ToAddr, e.Subject, e.HTMLBody, e.TextBody, e.CreatedAt,
	)
	if err != nil {
		return fmt.Errorf("inserting email outbox row in tx: %w", err)
	}
	return nil
}

// ListPending returns up to limit rows with status='pending' and next_retry_at
// null or in the past, ordered by created_at ASC.
func (s *EmailOutboxStore) ListPending(ctx context.Context, limit int) ([]domain.EmailOutbox, error) {
	rows, err := s.pool.Query(ctx, `
		SELECT id, idempotency_key, to_addr, subject, html_body, text_body,
		       status, retry_count, last_error, next_retry_at, created_at, sent_at
		FROM email_outbox
		WHERE status = 'pending'
		  AND (next_retry_at IS NULL OR next_retry_at <= NOW())
		ORDER BY created_at ASC
		LIMIT $1`,
		limit,
	)
	if err != nil {
		return nil, fmt.Errorf("querying pending email outbox rows: %w", err)
	}
	defer rows.Close()

	var items []domain.EmailOutbox
	for rows.Next() {
		item, err := scanEmailOutbox(rows)
		if err != nil {
			return nil, fmt.Errorf("scanning email outbox row: %w", err)
		}
		items = append(items, item)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterating email outbox rows: %w", err)
	}
	return items, nil
}

// MarkSent sets status='sent' and records the delivery timestamp.
func (s *EmailOutboxStore) MarkSent(ctx context.Context, id uuid.UUID, sentAt time.Time) error {
	tag, err := s.pool.Exec(ctx,
		`UPDATE email_outbox SET status = 'sent', sent_at = $1 WHERE id = $2`,
		sentAt, id,
	)
	if err != nil {
		return fmt.Errorf("marking email outbox row sent: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return fmt.Errorf("email outbox row not found: %s", id)
	}
	return nil
}

// MarkFailed sets status='failed' and records the terminal error message.
func (s *EmailOutboxStore) MarkFailed(ctx context.Context, id uuid.UUID, lastError string) error {
	tag, err := s.pool.Exec(ctx,
		`UPDATE email_outbox SET status = 'failed', last_error = $1 WHERE id = $2`,
		lastError, id,
	)
	if err != nil {
		return fmt.Errorf("marking email outbox row failed: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return fmt.Errorf("email outbox row not found: %s", id)
	}
	return nil
}

// UpdateRetry records a failed delivery attempt with backoff scheduling.
func (s *EmailOutboxStore) UpdateRetry(ctx context.Context, id uuid.UUID, retryCount int, lastError string, nextRetryAt time.Time) error {
	tag, err := s.pool.Exec(ctx,
		`UPDATE email_outbox SET retry_count = $1, last_error = $2, next_retry_at = $3 WHERE id = $4`,
		retryCount, lastError, nextRetryAt, id,
	)
	if err != nil {
		return fmt.Errorf("updating email outbox retry: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return fmt.Errorf("email outbox row not found: %s", id)
	}
	return nil
}

// --- scanner ---

type emailOutboxScanner interface {
	Scan(dest ...any) error
}

func scanEmailOutbox(row emailOutboxScanner) (domain.EmailOutbox, error) {
	var e domain.EmailOutbox
	var statusStr string
	var lastError *string
	var nextRetryPg pgtype.Timestamptz
	var sentAtPg pgtype.Timestamptz

	err := row.Scan(
		&e.ID, &e.IdempotencyKey, &e.ToAddr, &e.Subject, &e.HTMLBody, &e.TextBody,
		&statusStr, &e.RetryCount, &lastError, &nextRetryPg, &e.CreatedAt, &sentAtPg,
	)
	if err != nil {
		return domain.EmailOutbox{}, fmt.Errorf("scanning email outbox: %w", err)
	}

	e.Status = domain.EmailOutboxStatus(statusStr)
	e.LastError = lastError
	e.CreatedAt = e.CreatedAt.UTC()

	if nextRetryPg.Valid {
		t := nextRetryPg.Time.UTC()
		e.NextRetryAt = &t
	}
	if sentAtPg.Valid {
		t := sentAtPg.Time.UTC()
		e.SentAt = &t
	}

	return e, nil
}
