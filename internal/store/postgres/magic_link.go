package postgres

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// MagicLinkStore implements store.MagicLinkStore against PostgreSQL.
type MagicLinkStore struct {
	pool *pgxpool.Pool
}

// oauthStateJSON is the JSON representation of domain.OAuthState for JSONB storage.
type oauthStateJSON struct {
	ClientID            string `json:"client_id"`
	RedirectURI         string `json:"redirect_uri"`
	CodeChallenge       string `json:"code_challenge"`
	CodeChallengeMethod string `json:"code_challenge_method"`
	State               string `json:"state"`
}

// Create persists a new MagicLinkToken.
func (s *MagicLinkStore) Create(ctx context.Context, t domain.MagicLinkToken) error {
	var oauthStateRaw []byte
	if t.OAuthState != nil {
		raw, err := json.Marshal(oauthStateJSON{
			ClientID:            t.OAuthState.ClientID,
			RedirectURI:         t.OAuthState.RedirectURI,
			CodeChallenge:       t.OAuthState.CodeChallenge,
			CodeChallengeMethod: t.OAuthState.CodeChallengeMethod,
			State:               t.OAuthState.State,
		})
		if err != nil {
			return fmt.Errorf("marshalling oauth state: %w", err)
		}
		oauthStateRaw = raw
	}

	_, err := s.pool.Exec(ctx,
		`INSERT INTO magic_link_tokens (token, code, session_token, email, oauth_state, expires_at)
		 VALUES ($1, $2, $3, $4, $5, $6)`,
		t.Token, t.Code, t.SessionToken, t.Email, oauthStateRaw, t.ExpiresAt,
	)
	if err != nil {
		return fmt.Errorf("inserting magic link token: %w", err)
	}
	return nil
}

// Get fetches a token by its internal token value.
func (s *MagicLinkStore) Get(ctx context.Context, token string) (domain.MagicLinkToken, error) {
	row := s.pool.QueryRow(ctx,
		`SELECT token, code, session_token, email, oauth_state, expires_at, used_at
		 FROM magic_link_tokens WHERE token = $1`,
		token,
	)
	return scanMagicLinkToken(row)
}

// GetBySessionToken fetches a token by its session token.
func (s *MagicLinkStore) GetBySessionToken(ctx context.Context, sessionToken string) (domain.MagicLinkToken, error) {
	row := s.pool.QueryRow(ctx,
		`SELECT token, code, session_token, email, oauth_state, expires_at, used_at
		 FROM magic_link_tokens WHERE session_token = $1`,
		sessionToken,
	)
	return scanMagicLinkToken(row)
}

// MarkUsed atomically marks the token as used.
// Returns ErrNotFound if the token does not exist or has already been used.
func (s *MagicLinkStore) MarkUsed(ctx context.Context, token string, at time.Time) error {
	tag, err := s.pool.Exec(ctx,
		`UPDATE magic_link_tokens SET used_at = $2
		 WHERE token = $1 AND used_at IS NULL`,
		token, at,
	)
	if err != nil {
		return fmt.Errorf("marking magic link token used: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return store.ErrNotFound
	}
	return nil
}

// DeleteExpired removes tokens whose expiry has passed.
func (s *MagicLinkStore) DeleteExpired(ctx context.Context) error {
	_, err := s.pool.Exec(ctx, `DELETE FROM magic_link_tokens WHERE expires_at < NOW()`)
	if err != nil {
		return fmt.Errorf("deleting expired magic link tokens: %w", err)
	}
	return nil
}

func scanMagicLinkToken(row rowScanner) (domain.MagicLinkToken, error) {
	var t domain.MagicLinkToken
	var oauthStateRaw []byte
	var usedAt *time.Time

	err := row.Scan(&t.Token, &t.Code, &t.SessionToken, &t.Email, &oauthStateRaw, &t.ExpiresAt, &usedAt)
	if err != nil {
		return domain.MagicLinkToken{}, fmt.Errorf("scanning magic link token: %w", mapNotFound(err))
	}

	if len(oauthStateRaw) > 0 {
		var js oauthStateJSON
		if err = json.Unmarshal(oauthStateRaw, &js); err != nil {
			return domain.MagicLinkToken{}, fmt.Errorf("unmarshalling oauth state: %w", err)
		}
		t.OAuthState = &domain.OAuthState{
			ClientID:            js.ClientID,
			RedirectURI:         js.RedirectURI,
			CodeChallenge:       js.CodeChallenge,
			CodeChallengeMethod: js.CodeChallengeMethod,
			State:               js.State,
		}
	}

	t.ExpiresAt = t.ExpiresAt.UTC()
	t.UsedAt = usedAt
	return t, nil
}

// Ensure MagicLinkStore satisfies the store.MagicLinkStore interface at compile time.
var _ store.MagicLinkStore = (*MagicLinkStore)(nil)
