package domain

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"time"

	"github.com/google/uuid"
)

// OAuthAuthorizationCode is a short-lived PKCE authorization code.
type OAuthAuthorizationCode struct {
	Code                string
	AccountID           uuid.UUID
	ClientID            string
	RedirectURI         string
	CodeChallenge       string
	CodeChallengeMethod string
	Scope               string
	ExpiresAt           time.Time
	UsedAt              *time.Time
}

// IsExpired reports whether the authorization code has expired.
func (c OAuthAuthorizationCode) IsExpired() bool { return time.Now().After(c.ExpiresAt) }

// IsUsed reports whether the authorization code has been consumed.
func (c OAuthAuthorizationCode) IsUsed() bool { return c.UsedAt != nil }

// VerifyCodeChallenge verifies that SHA-256(verifier) == challenge (base64url, no padding).
func VerifyCodeChallenge(verifier, challenge string) bool {
	h := sha256.Sum256([]byte(verifier))
	got := base64.RawURLEncoding.EncodeToString(h[:])
	return got == challenge
}

// NewOAuthAuthorizationCode generates a new authorization code.
func NewOAuthAuthorizationCode(
	accountID uuid.UUID,
	clientID, redirectURI, codeChallenge, codeChallengeMethod, scope string,
	ttl time.Duration,
) (OAuthAuthorizationCode, error) {
	b := make([]byte, 32)
	if _, err := rand.Read(b); err != nil {
		return OAuthAuthorizationCode{}, fmt.Errorf("generating code: %w", err)
	}
	return OAuthAuthorizationCode{
		Code:                base64.RawURLEncoding.EncodeToString(b),
		AccountID:           accountID,
		ClientID:            clientID,
		RedirectURI:         redirectURI,
		CodeChallenge:       codeChallenge,
		CodeChallengeMethod: codeChallengeMethod,
		Scope:               scope,
		ExpiresAt:           time.Now().UTC().Add(ttl),
	}, nil
}

// OAuthAccessToken is a short-lived OAuth access token (SHA-256 hashed for storage).
type OAuthAccessToken struct {
	TokenHash string // SHA-256 hex of the raw token
	AccountID uuid.UUID
	ClientID  string
	Scope     string
	ExpiresAt time.Time
	CreatedAt time.Time
}

// IsExpired reports whether the access token has expired.
func (t OAuthAccessToken) IsExpired() bool { return time.Now().After(t.ExpiresAt) }

// NewOAuthAccessToken generates a new access token.
// Returns (token struct, raw token string shown to the client).
// TokenHash is SHA-256 hex of the raw token.
func NewOAuthAccessToken(accountID uuid.UUID, clientID, scope string, ttl time.Duration) (OAuthAccessToken, string, error) {
	b := make([]byte, 32)
	if _, err := rand.Read(b); err != nil {
		return OAuthAccessToken{}, "", fmt.Errorf("generating token: %w", err)
	}
	rawToken := base64.RawURLEncoding.EncodeToString(b)
	h := sha256.Sum256([]byte(rawToken))
	tokenHash := fmt.Sprintf("%x", h)
	now := time.Now().UTC()
	return OAuthAccessToken{
		TokenHash: tokenHash,
		AccountID: accountID,
		ClientID:  clientID,
		Scope:     scope,
		ExpiresAt: now.Add(ttl),
		CreatedAt: now,
	}, rawToken, nil
}
