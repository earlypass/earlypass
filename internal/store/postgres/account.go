package postgres

import (
	"context"
	"fmt"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// AccountStore implements store.AccountStore against PostgreSQL.
type AccountStore struct {
	pool *pgxpool.Pool
}

// GetOrCreateByEmail creates an account on first use, returns existing on subsequent calls.
// Uses an INSERT ... ON CONFLICT DO NOTHING pattern inside a transaction to avoid race conditions.
func (s *AccountStore) GetOrCreateByEmail(ctx context.Context, email string) (domain.Account, bool, error) {
	tx, err := s.pool.Begin(ctx)
	if err != nil {
		return domain.Account{}, false, fmt.Errorf("beginning transaction: %w", err)
	}
	defer func() { _ = tx.Rollback(ctx) }()

	// Try to insert; ignore conflict on email unique constraint.
	tag, err := tx.Exec(ctx,
		`INSERT INTO accounts (email) VALUES ($1) ON CONFLICT (email) DO NOTHING`,
		email,
	)
	if err != nil {
		return domain.Account{}, false, fmt.Errorf("upserting account: %w", err)
	}
	created := tag.RowsAffected() == 1

	// Now fetch the account (regardless of whether we just inserted or it existed).
	row := tx.QueryRow(ctx,
		`SELECT id, email, created_at, updated_at FROM accounts WHERE email = $1`,
		email,
	)
	a, err := scanAccount(row)
	if err != nil {
		return domain.Account{}, false, fmt.Errorf("fetching account after upsert: %w", mapNotFound(err))
	}

	if err = tx.Commit(ctx); err != nil {
		return domain.Account{}, false, fmt.Errorf("committing account upsert: %w", err)
	}
	return a, created, nil
}

// GetByID fetches an account by primary key.
func (s *AccountStore) GetByID(ctx context.Context, id uuid.UUID) (domain.Account, error) {
	row := s.pool.QueryRow(ctx,
		`SELECT id, email, created_at, updated_at FROM accounts WHERE id = $1`,
		id,
	)
	a, err := scanAccount(row)
	if err != nil {
		return domain.Account{}, fmt.Errorf("fetching account by id: %w", mapNotFound(err))
	}
	return a, nil
}

// GetByEmail fetches an account by email address.
func (s *AccountStore) GetByEmail(ctx context.Context, email string) (domain.Account, error) {
	row := s.pool.QueryRow(ctx,
		`SELECT id, email, created_at, updated_at FROM accounts WHERE email = $1`,
		email,
	)
	a, err := scanAccount(row)
	if err != nil {
		return domain.Account{}, fmt.Errorf("fetching account by email: %w", mapNotFound(err))
	}
	return a, nil
}

func scanAccount(row rowScanner) (domain.Account, error) {
	var a domain.Account
	err := row.Scan(&a.ID, &a.Email, &a.CreatedAt, &a.UpdatedAt)
	if err != nil {
		return domain.Account{}, fmt.Errorf("scanning account: %w", err)
	}
	a.CreatedAt = a.CreatedAt.UTC()
	a.UpdatedAt = a.UpdatedAt.UTC()
	return a, nil
}

// Ensure AccountStore satisfies the store.AccountStore interface at compile time.
var _ store.AccountStore = (*AccountStore)(nil)
