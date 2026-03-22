package postgres

import (
	"context"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// AccountAPIKeyStore implements store.AccountAPIKeyStore against PostgreSQL.
type AccountAPIKeyStore struct {
	pool *pgxpool.Pool
}

// Create persists a new AccountAPIKey.
func (s *AccountAPIKeyStore) Create(ctx context.Context, k domain.AccountAPIKey) error {
	_, err := s.pool.Exec(ctx,
		`INSERT INTO account_api_keys (id, account_id, key_hash, name, created_at)
		 VALUES ($1, $2, $3, $4, $5)`,
		k.ID, k.AccountID, k.KeyHash, k.Name, k.CreatedAt,
	)
	if err != nil {
		return fmt.Errorf("inserting account api key: %w", err)
	}
	return nil
}

// GetByRawKey looks up an active key by its SHA-256 hash (O(1) direct lookup).
// Returns ErrNotFound if no active key matches.
func (s *AccountAPIKeyStore) GetByRawKey(ctx context.Context, rawKey string) (domain.AccountAPIKey, error) {
	h := sha256.Sum256([]byte(rawKey))
	hash := hex.EncodeToString(h[:])
	row := s.pool.QueryRow(ctx,
		`SELECT id, account_id, key_hash, name, last_used_at, created_at, revoked_at
		 FROM account_api_keys WHERE key_hash = $1 AND revoked_at IS NULL`,
		hash,
	)
	k, err := scanAccountAPIKey(row)
	if err != nil {
		return domain.AccountAPIKey{}, fmt.Errorf("looking up account api key: %w", mapNotFound(err))
	}
	return k, nil
}

// ListByAccount returns all keys for the given account ordered by created_at DESC.
func (s *AccountAPIKeyStore) ListByAccount(ctx context.Context, accountID uuid.UUID) ([]domain.AccountAPIKey, error) {
	rows, err := s.pool.Query(ctx,
		`SELECT id, account_id, key_hash, name, last_used_at, created_at, revoked_at
		 FROM account_api_keys WHERE account_id = $1 ORDER BY created_at DESC`,
		accountID,
	)
	if err != nil {
		return nil, fmt.Errorf("listing account api keys: %w", err)
	}
	defer rows.Close()

	var keys []domain.AccountAPIKey
	for rows.Next() {
		k, err := scanAccountAPIKey(rows)
		if err != nil {
			return nil, err
		}
		keys = append(keys, k)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterating account api keys: %w", err)
	}
	return keys, nil
}

// Revoke marks a key as revoked by setting revoked_at to now.
func (s *AccountAPIKeyStore) Revoke(ctx context.Context, id uuid.UUID) error {
	tag, err := s.pool.Exec(ctx,
		`UPDATE account_api_keys SET revoked_at = NOW() WHERE id = $1 AND revoked_at IS NULL`,
		id,
	)
	if err != nil {
		return fmt.Errorf("revoking account api key: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return store.ErrNotFound
	}
	return nil
}

// TouchLastUsed updates last_used_at for the given key.
func (s *AccountAPIKeyStore) TouchLastUsed(ctx context.Context, id uuid.UUID, at time.Time) error {
	_, err := s.pool.Exec(ctx,
		`UPDATE account_api_keys SET last_used_at = $2 WHERE id = $1`,
		id, at,
	)
	if err != nil {
		return fmt.Errorf("touching last used at: %w", err)
	}
	return nil
}

func scanAccountAPIKey(row rowScanner) (domain.AccountAPIKey, error) {
	var k domain.AccountAPIKey
	var lastUsedAt *time.Time
	var revokedAt *time.Time

	err := row.Scan(
		&k.ID, &k.AccountID, &k.KeyHash, &k.Name,
		&lastUsedAt, &k.CreatedAt, &revokedAt,
	)
	if err != nil {
		return domain.AccountAPIKey{}, fmt.Errorf("scanning account api key: %w", mapNotFound(err))
	}
	k.LastUsedAt = lastUsedAt
	k.RevokedAt = revokedAt
	k.CreatedAt = k.CreatedAt.UTC()
	return k, nil
}

// Ensure AccountAPIKeyStore satisfies the store.AccountAPIKeyStore interface at compile time.
var _ store.AccountAPIKeyStore = (*AccountAPIKeyStore)(nil)
