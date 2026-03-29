package domain

import (
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"math/big"
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
// Instead of embedding the token in a clickable URL, the user receives a 6-digit
// OTP code (Code) that must be entered on the page that requested it. The
// SessionToken is stored in a cookie on that page, binding the verification to
// the original browser session so an attacker with only the email code cannot
// use it without also controlling the requesting page.
type MagicLinkToken struct {
	Token        string      // Internal DB primary key (never sent to the user)
	Code         string      // 6-digit OTP sent via email
	SessionToken string      //nolint:gosec // not a credential; opaque binding token stored in a browser cookie / returned to API caller
	Email        string
	OAuthState   *OAuthState // nil = REST flow; non-nil = OAuth/MCP flow
	ExpiresAt    time.Time
	UsedAt       *time.Time
}

// IsExpired reports whether the token has passed its expiry time.
func (t MagicLinkToken) IsExpired() bool { return time.Now().After(t.ExpiresAt) }

// IsUsed reports whether the token has already been consumed.
func (t MagicLinkToken) IsUsed() bool { return t.UsedAt != nil }

// IsOAuthFlow reports whether this token was created for an OAuth flow.
func (t MagicLinkToken) IsOAuthFlow() bool { return t.OAuthState != nil }

// NewMagicLinkToken generates a single-use token valid for ttl duration.
// It produces a random internal token (primary key), a 6-digit OTP code to
// be emailed to the user, and a session token to be stored in the requesting
// browser/client so that the code can only be redeemed from the same session.
// oauth may be nil (REST flow) or populated (OAuth/MCP flow).
func NewMagicLinkToken(email string, oauth *OAuthState, ttl time.Duration) (MagicLinkToken, error) {
	// Internal token — primary key, never sent to user.
	b := make([]byte, 32)
	if _, err := rand.Read(b); err != nil {
		return MagicLinkToken{}, fmt.Errorf("generating token: %w", err)
	}

	// Session token — stored in a browser cookie / returned to the API caller.
	s := make([]byte, 32)
	if _, err := rand.Read(s); err != nil {
		return MagicLinkToken{}, fmt.Errorf("generating session token: %w", err)
	}

	// 6-digit OTP code — sent via email.
	n, err := rand.Int(rand.Reader, big.NewInt(1_000_000))
	if err != nil {
		return MagicLinkToken{}, fmt.Errorf("generating OTP code: %w", err)
	}
	code := fmt.Sprintf("%06d", n.Int64())

	return MagicLinkToken{
		Token:        base64.RawURLEncoding.EncodeToString(b),
		Code:         code,
		SessionToken: base64.RawURLEncoding.EncodeToString(s),
		Email:        email,
		OAuthState:   oauth,
		ExpiresAt:    time.Now().UTC().Add(ttl),
	}, nil
}
