package domain

import (
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"time"
)

// OAuthState carries the MCP client's OAuth parameters through the magic link flow.
// Present only when the magic link was initiated from the OAuth authorize page.
type OAuthState struct {
	ClientID            string
	RedirectURI         string
	CodeChallenge       string
	CodeChallengeMethod string
	State               string
}

// MagicLinkToken is a single-use token sent via email for passwordless authentication.
type MagicLinkToken struct {
	Token      string
	Email      string
	OAuthState *OAuthState // nil = REST flow; non-nil = OAuth/MCP flow
	ExpiresAt  time.Time
	UsedAt     *time.Time
}

// IsExpired reports whether the token has passed its expiry time.
func (t MagicLinkToken) IsExpired() bool { return time.Now().After(t.ExpiresAt) }

// IsUsed reports whether the token has already been consumed.
func (t MagicLinkToken) IsUsed() bool { return t.UsedAt != nil }

// IsOAuthFlow reports whether this token was created for an OAuth flow.
func (t MagicLinkToken) IsOAuthFlow() bool { return t.OAuthState != nil }

// NewMagicLinkToken generates a single-use token valid for ttl duration.
// oauth may be nil (REST flow) or populated (OAuth/MCP flow).
func NewMagicLinkToken(email string, oauth *OAuthState, ttl time.Duration) (MagicLinkToken, error) {
	b := make([]byte, 32)
	if _, err := rand.Read(b); err != nil {
		return MagicLinkToken{}, fmt.Errorf("generating token: %w", err)
	}
	return MagicLinkToken{
		Token:      base64.RawURLEncoding.EncodeToString(b),
		Email:      email,
		OAuthState: oauth,
		ExpiresAt:  time.Now().UTC().Add(ttl),
	}, nil
}
