package domain

import (
	"strings"
	"testing"
	"time"
)

func TestNewMagicLinkToken_Format(t *testing.T) {
	token, err := NewMagicLinkToken("user@example.com", nil, 15*time.Minute)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if token.Token == "" {
		t.Error("expected non-empty token")
	}
	if len(token.Token) < 40 {
		t.Errorf("expected token length >= 40, got %d", len(token.Token))
	}
	if token.Email != "user@example.com" {
		t.Errorf("expected email %q, got %q", "user@example.com", token.Email)
	}
	if token.OAuthState != nil {
		t.Error("expected nil OAuthState for REST flow")
	}
	if token.UsedAt != nil {
		t.Error("expected nil UsedAt for new token")
	}
	// OTP code must be exactly 6 digits.
	if len(token.Code) != 6 {
		t.Errorf("expected 6-digit code, got %q (len=%d)", token.Code, len(token.Code))
	}
	for _, c := range token.Code {
		if c < '0' || c > '9' {
			t.Errorf("expected all digits in code, got %q", token.Code)
			break
		}
	}
	// Session token must be non-empty.
	if token.SessionToken == "" {
		t.Error("expected non-empty session token")
	}
	if len(token.SessionToken) < 40 {
		t.Errorf("expected session token length >= 40, got %d", len(token.SessionToken))
	}
}

func TestNewMagicLinkToken_Expiry(t *testing.T) {
	ttl := 15 * time.Minute
	before := time.Now()
	token, err := NewMagicLinkToken("user@example.com", nil, ttl)
	if err != nil {
		t.Fatal(err)
	}
	after := time.Now()

	if token.ExpiresAt.Before(before.Add(ttl - time.Second)) {
		t.Errorf("ExpiresAt %v is before expected minimum %v", token.ExpiresAt, before.Add(ttl))
	}
	if token.ExpiresAt.After(after.Add(ttl + time.Second)) {
		t.Errorf("ExpiresAt %v is after expected maximum %v", token.ExpiresAt, after.Add(ttl))
	}
}

func TestMagicLinkToken_IsExpired(t *testing.T) {
	past := MagicLinkToken{ExpiresAt: time.Now().Add(-1 * time.Minute)}
	if !past.IsExpired() {
		t.Error("expected IsExpired() == true for past token")
	}

	future := MagicLinkToken{ExpiresAt: time.Now().Add(10 * time.Minute)}
	if future.IsExpired() {
		t.Error("expected IsExpired() == false for future token")
	}
}

func TestMagicLinkToken_IsUsed(t *testing.T) {
	now := time.Now()
	used := MagicLinkToken{UsedAt: &now}
	if !used.IsUsed() {
		t.Error("expected IsUsed() == true when UsedAt is set")
	}

	unused := MagicLinkToken{}
	if unused.IsUsed() {
		t.Error("expected IsUsed() == false when UsedAt is nil")
	}
}

func TestMagicLinkToken_IsOAuthFlow(t *testing.T) {
	restToken := MagicLinkToken{}
	if restToken.IsOAuthFlow() {
		t.Error("expected IsOAuthFlow() == false for REST token")
	}

	oauthToken := MagicLinkToken{OAuthState: &OAuthState{ClientID: "test-client"}}
	if !oauthToken.IsOAuthFlow() {
		t.Error("expected IsOAuthFlow() == true when OAuthState is set")
	}
}

func TestNewMagicLinkToken_OAuthFlow(t *testing.T) {
	oauthState := &OAuthState{
		ClientID:            "test-client",
		RedirectURI:         "https://example.com/callback",
		CodeChallenge:       "abc123",
		CodeChallengeMethod: "S256",
		State:               "random-state",
	}
	token, err := NewMagicLinkToken("user@example.com", oauthState, 15*time.Minute)
	if err != nil {
		t.Fatal(err)
	}
	if token.OAuthState == nil {
		t.Fatal("expected non-nil OAuthState")
	}
	if token.OAuthState.ClientID != "test-client" {
		t.Errorf("expected ClientID %q, got %q", "test-client", token.OAuthState.ClientID)
	}
}

func TestNewMagicLinkToken_Uniqueness(t *testing.T) {
	t1, err := NewMagicLinkToken("user@example.com", nil, 15*time.Minute)
	if err != nil {
		t.Fatal(err)
	}
	t2, err := NewMagicLinkToken("user@example.com", nil, 15*time.Minute)
	if err != nil {
		t.Fatal(err)
	}
	if t1.Token == t2.Token {
		t.Error("expected unique internal tokens for consecutive calls")
	}
	if t1.SessionToken == t2.SessionToken {
		t.Error("expected unique session tokens for consecutive calls")
	}
	if strings.Contains(t1.Token, "+") || strings.Contains(t1.Token, "/") {
		t.Error("expected URL-safe (base64url) token without + or /")
	}
	if strings.Contains(t1.SessionToken, "+") || strings.Contains(t1.SessionToken, "/") {
		t.Error("expected URL-safe (base64url) session token without + or /")
	}
}
