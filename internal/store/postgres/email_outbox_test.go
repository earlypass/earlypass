//go:build integration

package postgres_test

import (
	"context"
	"testing"
	"time"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/domain"
)

func newTestOutbox(to string) domain.EmailOutbox {
	return domain.EmailOutbox{
		ID:             uuid.New(),
		IdempotencyKey: uuid.New(),
		ToAddr:         to,
		Subject:        "Test Subject",
		HTMLBody:       "<p>Hello</p>",
		TextBody:       "Hello",
		CreatedAt:      time.Now().UTC().Truncate(time.Millisecond),
	}
}

func TestEmailOutboxStore_CreateAndListPending(t *testing.T) {
	ctx := context.Background()
	s := testDB(t).EmailOutbox()

	e := newTestOutbox(uniqueEmail("outbox-create"))
	if err := s.Create(ctx, e); err != nil {
		t.Fatalf("Create: %v", err)
	}

	pending, err := s.ListPending(ctx, 100)
	if err != nil {
		t.Fatalf("ListPending: %v", err)
	}

	var found bool
	for _, row := range pending {
		if row.ID == e.ID {
			found = true
			if row.ToAddr != e.ToAddr {
				t.Errorf("ToAddr: got %q, want %q", row.ToAddr, e.ToAddr)
			}
			if row.IdempotencyKey != e.IdempotencyKey {
				t.Errorf("IdempotencyKey: got %v, want %v", row.IdempotencyKey, e.IdempotencyKey)
			}
			if row.Status != domain.EmailOutboxStatusPending {
				t.Errorf("Status: got %q, want pending", row.Status)
			}
			if row.RetryCount != 0 {
				t.Errorf("RetryCount: got %d, want 0", row.RetryCount)
			}
			if row.LastError != nil {
				t.Errorf("LastError: want nil, got %v", *row.LastError)
			}
			if row.SentAt != nil {
				t.Errorf("SentAt: want nil, got %v", *row.SentAt)
			}
		}
	}
	if !found {
		t.Error("created outbox row not found in ListPending")
	}
}

func TestEmailOutboxStore_MarkSent(t *testing.T) {
	ctx := context.Background()
	s := testDB(t).EmailOutbox()

	e := newTestOutbox(uniqueEmail("outbox-sent"))
	if err := s.Create(ctx, e); err != nil {
		t.Fatalf("Create: %v", err)
	}

	sentAt := time.Now().UTC().Truncate(time.Millisecond)
	if err := s.MarkSent(ctx, e.ID, sentAt); err != nil {
		t.Fatalf("MarkSent: %v", err)
	}

	// Should not appear in ListPending
	pending, err := s.ListPending(ctx, 100)
	if err != nil {
		t.Fatalf("ListPending: %v", err)
	}
	for _, row := range pending {
		if row.ID == e.ID {
			t.Error("sent row should not appear in ListPending")
		}
	}
}

func TestEmailOutboxStore_MarkFailed(t *testing.T) {
	ctx := context.Background()
	s := testDB(t).EmailOutbox()

	e := newTestOutbox(uniqueEmail("outbox-fail"))
	if err := s.Create(ctx, e); err != nil {
		t.Fatalf("Create: %v", err)
	}

	if err := s.MarkFailed(ctx, e.ID, "permanent error"); err != nil {
		t.Fatalf("MarkFailed: %v", err)
	}

	pending, err := s.ListPending(ctx, 100)
	if err != nil {
		t.Fatalf("ListPending: %v", err)
	}
	for _, row := range pending {
		if row.ID == e.ID {
			t.Error("failed row should not appear in ListPending")
		}
	}
}

func TestEmailOutboxStore_UpdateRetry(t *testing.T) {
	ctx := context.Background()
	s := testDB(t).EmailOutbox()

	e := newTestOutbox(uniqueEmail("outbox-retry"))
	if err := s.Create(ctx, e); err != nil {
		t.Fatalf("Create: %v", err)
	}

	// Schedule retry far in the future — should not appear in ListPending
	future := time.Now().Add(1 * time.Hour).UTC()
	if err := s.UpdateRetry(ctx, e.ID, 1, "transient error", future); err != nil {
		t.Fatalf("UpdateRetry: %v", err)
	}

	pending, err := s.ListPending(ctx, 100)
	if err != nil {
		t.Fatalf("ListPending: %v", err)
	}
	for _, row := range pending {
		if row.ID == e.ID {
			t.Error("retried row with future next_retry_at should not appear in ListPending")
		}
	}
}

func TestEmailOutboxStore_ListPending_DueRetry(t *testing.T) {
	ctx := context.Background()
	s := testDB(t).EmailOutbox()

	e := newTestOutbox(uniqueEmail("outbox-due-retry"))
	if err := s.Create(ctx, e); err != nil {
		t.Fatalf("Create: %v", err)
	}

	// Schedule retry in the past — should appear in ListPending
	past := time.Now().Add(-1 * time.Minute).UTC()
	if err := s.UpdateRetry(ctx, e.ID, 1, "transient error", past); err != nil {
		t.Fatalf("UpdateRetry: %v", err)
	}

	pending, err := s.ListPending(ctx, 100)
	if err != nil {
		t.Fatalf("ListPending: %v", err)
	}
	var found bool
	for _, row := range pending {
		if row.ID == e.ID {
			found = true
			if row.RetryCount != 1 {
				t.Errorf("RetryCount: got %d, want 1", row.RetryCount)
			}
			if row.LastError == nil || *row.LastError != "transient error" {
				t.Errorf("LastError: got %v, want 'transient error'", row.LastError)
			}
		}
	}
	if !found {
		t.Error("due-retry row not found in ListPending")
	}
}

func TestEmailOutboxStore_CreateWithTx_Commit(t *testing.T) {
	ctx := context.Background()
	db := testDB(t)
	s := db.EmailOutbox()

	tx, err := db.Pool().Begin(ctx)
	if err != nil {
		t.Fatalf("Begin: %v", err)
	}

	e := newTestOutbox(uniqueEmail("outbox-tx-commit"))
	if err := s.CreateWithTx(ctx, tx, e); err != nil {
		_ = tx.Rollback(ctx)
		t.Fatalf("CreateWithTx: %v", err)
	}
	if err := tx.Commit(ctx); err != nil {
		t.Fatalf("Commit: %v", err)
	}

	pending, err := s.ListPending(ctx, 100)
	if err != nil {
		t.Fatalf("ListPending: %v", err)
	}
	var found bool
	for _, row := range pending {
		if row.ID == e.ID {
			found = true
		}
	}
	if !found {
		t.Error("committed transactional row not found in ListPending")
	}
}

func TestEmailOutboxStore_CreateWithTx_Rollback(t *testing.T) {
	ctx := context.Background()
	db := testDB(t)
	s := db.EmailOutbox()

	tx, err := db.Pool().Begin(ctx)
	if err != nil {
		t.Fatalf("Begin: %v", err)
	}

	e := newTestOutbox(uniqueEmail("outbox-tx-rollback"))
	if err := s.CreateWithTx(ctx, tx, e); err != nil {
		_ = tx.Rollback(ctx)
		t.Fatalf("CreateWithTx: %v", err)
	}
	if err := tx.Rollback(ctx); err != nil {
		t.Fatalf("Rollback: %v", err)
	}

	// Row must NOT appear after rollback
	pending, err := s.ListPending(ctx, 100)
	if err != nil {
		t.Fatalf("ListPending: %v", err)
	}
	for _, row := range pending {
		if row.ID == e.ID {
			t.Error("rolled-back row must not appear in ListPending")
		}
	}
}

func TestEmailOutboxStore_MarkSent_NotFound(t *testing.T) {
	ctx := context.Background()
	s := testDB(t).EmailOutbox()

	err := s.MarkSent(ctx, nonExistentUUID(), time.Now().UTC())
	if err == nil {
		t.Error("expected error for non-existent row, got nil")
	}
}

func TestEmailOutboxStore_MarkFailed_NotFound(t *testing.T) {
	ctx := context.Background()
	s := testDB(t).EmailOutbox()

	err := s.MarkFailed(ctx, nonExistentUUID(), "error")
	if err == nil {
		t.Error("expected error for non-existent row, got nil")
	}
}
