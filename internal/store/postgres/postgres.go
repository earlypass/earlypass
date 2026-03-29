// Package postgres provides PostgreSQL-backed implementations of the store
// interfaces using pgx/v5 and pgxpool for connection pooling.
package postgres

import (
	"context"
	"errors"
	"fmt"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/earlypass/earlypass/internal/store"
)

// DB wraps a pgxpool.Pool and provides access to all store implementations.
type DB struct {
	pool *pgxpool.Pool
}

// New opens a connection pool to the given DSN and pings it.
// OTel query tracing is enabled automatically when a tracer provider is
// registered; if the global provider is the noop default, no spans are emitted.
func New(ctx context.Context, dsn string) (*DB, error) {
	cfg, err := pgxpool.ParseConfig(dsn)
	if err != nil {
		return nil, fmt.Errorf("parsing postgres DSN: %w", err)
	}
	cfg.ConnConfig.Tracer = newQueryTracer()

	pool, err := pgxpool.NewWithConfig(ctx, cfg)
	if err != nil {
		return nil, fmt.Errorf("creating pgxpool: %w", err)
	}
	if err = pool.Ping(ctx); err != nil {
		pool.Close()
		return nil, fmt.Errorf("pinging postgres: %w", err)
	}
	return &DB{pool: pool}, nil
}

// Ping checks connectivity to the underlying PostgreSQL cluster.
func (db *DB) Ping(ctx context.Context) error {
	if err := db.pool.Ping(ctx); err != nil {
		return fmt.Errorf("postgres ping: %w", err)
	}
	return nil
}

// Close releases the connection pool.
func (db *DB) Close() {
	db.pool.Close()
}

// Campaigns returns the CampaignStore implementation.
func (db *DB) Campaigns() *CampaignStore {
	return &CampaignStore{pool: db.pool}
}

// Signups returns the SignupStore implementation.
func (db *DB) Signups() *SignupStore {
	return &SignupStore{pool: db.pool}
}

// Webhooks returns the WebhookStore implementation.
func (db *DB) Webhooks() *WebhookStore {
	return &WebhookStore{pool: db.pool}
}

// Accounts returns the AccountStore implementation.
func (db *DB) Accounts() *AccountStore {
	return &AccountStore{pool: db.pool}
}

// SignInTokens returns the SignInTokenStore implementation.
func (db *DB) SignInTokens() *SignInTokenStore {
	return &SignInTokenStore{pool: db.pool}
}

// AccountAPIKeys returns the AccountAPIKeyStore implementation.
func (db *DB) AccountAPIKeys() *AccountAPIKeyStore {
	return &AccountAPIKeyStore{pool: db.pool}
}

// OAuth returns the OAuthStore implementation.
func (db *DB) OAuth() *OAuthStore {
	return &OAuthStore{pool: db.pool}
}

// EmailOutbox returns the EmailOutboxStore implementation.
func (db *DB) EmailOutbox() *EmailOutboxStore {
	return &EmailOutboxStore{pool: db.pool}
}

// Pool exposes the underlying connection pool for callers that need to start
// an explicit pgx.Tx spanning multiple stores (e.g. transactional outbox writes).
func (db *DB) Pool() *pgxpool.Pool {
	return db.pool
}

// --- internal helpers ---

// pgErrCode extracts the Postgres error code from an error, if present.
func pgErrCode(err error) string {
	var pgErr *pgconn.PgError
	if errors.As(err, &pgErr) {
		return pgErr.Code
	}
	return ""
}

// pgConstraintName extracts the constraint name from a Postgres error, if present.
func pgConstraintName(err error) string {
	var pgErr *pgconn.PgError
	if errors.As(err, &pgErr) {
		return pgErr.ConstraintName
	}
	return ""
}

// isUniqueViolation returns true for Postgres error code 23505.
func isUniqueViolation(err error) bool {
	return pgErrCode(err) == "23505"
}

// mapNotFound returns store.ErrNotFound when err is pgx.ErrNoRows.
func mapNotFound(err error) error {
	if errors.Is(err, pgx.ErrNoRows) {
		return store.ErrNotFound
	}
	return err
}
