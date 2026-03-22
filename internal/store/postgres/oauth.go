package postgres

import (
	"context"
	"fmt"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// OAuthStore implements store.OAuthStore against PostgreSQL.
type OAuthStore struct {
	pool *pgxpool.Pool
}

// CreateCode persists a new OAuthAuthorizationCode.
func (s *OAuthStore) CreateCode(ctx context.Context, c domain.OAuthAuthorizationCode) error {
	_, err := s.pool.Exec(ctx,
		`INSERT INTO oauth_authorization_codes
		 (code, account_id, client_id, redirect_uri, code_challenge, code_challenge_method, scope, expires_at)
		 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
		c.Code, c.AccountID, c.ClientID, c.RedirectURI,
		c.CodeChallenge, c.CodeChallengeMethod, c.Scope, c.ExpiresAt,
	)
	if err != nil {
		return fmt.Errorf("inserting oauth authorization code: %w", err)
	}
	return nil
}

// GetCode fetches an authorization code by its value.
func (s *OAuthStore) GetCode(ctx context.Context, code string) (domain.OAuthAuthorizationCode, error) {
	row := s.pool.QueryRow(ctx,
		`SELECT code, account_id, client_id, redirect_uri,
		        code_challenge, code_challenge_method, scope, expires_at, used_at
		 FROM oauth_authorization_codes WHERE code = $1`,
		code,
	)
	return scanOAuthCode(row)
}

// MarkCodeUsed atomically marks an authorization code as used.
// Returns ErrNotFound if the code does not exist or has already been used.
func (s *OAuthStore) MarkCodeUsed(ctx context.Context, code string, at time.Time) error {
	tag, err := s.pool.Exec(ctx,
		`UPDATE oauth_authorization_codes SET used_at = $2
		 WHERE code = $1 AND used_at IS NULL`,
		code, at,
	)
	if err != nil {
		return fmt.Errorf("marking oauth code used: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return store.ErrNotFound
	}
	return nil
}

// CreateToken persists a new OAuthAccessToken.
func (s *OAuthStore) CreateToken(ctx context.Context, t domain.OAuthAccessToken) error {
	_, err := s.pool.Exec(ctx,
		`INSERT INTO oauth_access_tokens (token_hash, account_id, client_id, scope, expires_at, created_at)
		 VALUES ($1, $2, $3, $4, $5, $6)`,
		t.TokenHash, t.AccountID, t.ClientID, t.Scope, t.ExpiresAt, t.CreatedAt,
	)
	if err != nil {
		return fmt.Errorf("inserting oauth access token: %w", err)
	}
	return nil
}

// GetByTokenHash fetches an unexpired access token by its SHA-256 hash.
// Returns ErrNotFound if absent or expired.
func (s *OAuthStore) GetByTokenHash(ctx context.Context, hash string) (domain.OAuthAccessToken, error) {
	row := s.pool.QueryRow(ctx,
		`SELECT token_hash, account_id, client_id, scope, expires_at, created_at
		 FROM oauth_access_tokens
		 WHERE token_hash = $1 AND expires_at > NOW()`,
		hash,
	)
	return scanOAuthAccessToken(row)
}

// DeleteExpiredTokens removes access tokens whose expiry has passed.
func (s *OAuthStore) DeleteExpiredTokens(ctx context.Context) error {
	_, err := s.pool.Exec(ctx, `DELETE FROM oauth_access_tokens WHERE expires_at < NOW()`)
	if err != nil {
		return fmt.Errorf("deleting expired oauth access tokens: %w", err)
	}
	return nil
}

func scanOAuthCode(row rowScanner) (domain.OAuthAuthorizationCode, error) {
	var c domain.OAuthAuthorizationCode
	var usedAt *time.Time

	err := row.Scan(
		&c.Code, &c.AccountID, &c.ClientID, &c.RedirectURI,
		&c.CodeChallenge, &c.CodeChallengeMethod, &c.Scope, &c.ExpiresAt, &usedAt,
	)
	if err != nil {
		return domain.OAuthAuthorizationCode{}, fmt.Errorf("scanning oauth code: %w", mapNotFound(err))
	}
	c.ExpiresAt = c.ExpiresAt.UTC()
	c.UsedAt = usedAt
	return c, nil
}

func scanOAuthAccessToken(row rowScanner) (domain.OAuthAccessToken, error) {
	var t domain.OAuthAccessToken

	err := row.Scan(&t.TokenHash, &t.AccountID, &t.ClientID, &t.Scope, &t.ExpiresAt, &t.CreatedAt)
	if err != nil {
		return domain.OAuthAccessToken{}, fmt.Errorf("scanning oauth access token: %w", mapNotFound(err))
	}
	t.ExpiresAt = t.ExpiresAt.UTC()
	t.CreatedAt = t.CreatedAt.UTC()
	return t, nil
}

// Ensure OAuthStore satisfies the store.OAuthStore interface at compile time.
var _ store.OAuthStore = (*OAuthStore)(nil)
