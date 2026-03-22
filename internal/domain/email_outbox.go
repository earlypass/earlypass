package domain

import (
	"time"

	"github.com/google/uuid"
)

// EmailOutboxStatus represents the delivery state of an outbox email.
type EmailOutboxStatus string

const (
	// EmailOutboxStatusPending means the email is queued and has not yet been delivered.
	EmailOutboxStatusPending EmailOutboxStatus = "pending"
	// EmailOutboxStatusSent means the email was successfully delivered via Resend.
	EmailOutboxStatusSent EmailOutboxStatus = "sent"
	// EmailOutboxStatusFailed means the email exhausted all retry attempts and will not be retried.
	EmailOutboxStatusFailed EmailOutboxStatus = "failed"
)

// EmailOutbox represents a queued email waiting to be delivered by the outbox processor.
// Rows are inserted within database transactions alongside business logic so that a
// transaction rollback also removes the email — preventing orphaned sends.
type EmailOutbox struct {
	ID             uuid.UUID
	IdempotencyKey uuid.UUID // passed to Resend as Idempotency-Key; prevents duplicate delivery on retry
	ToAddr         string
	Subject        string
	HTMLBody       string
	TextBody       string
	Status         EmailOutboxStatus
	RetryCount     int
	LastError      *string
	NextRetryAt    *time.Time
	CreatedAt      time.Time
	SentAt         *time.Time
}
