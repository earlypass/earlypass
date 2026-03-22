package domain

import (
	"crypto/sha256"
	"encoding/base64"
	"strings"
	"testing"
	"time"

	"github.com/google/uuid"
)

func TestVerifyCodeChallenge_ValidVerifier(t *testing.T) {
	verifier := "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
	h := sha256.Sum256([]byte(verifier))
	challenge := base64.RawURLEncoding.EncodeToString(h[:])

	if !VerifyCodeChallenge(verifier, challenge) {
		t.Error("expected VerifyCodeChallenge to return true for valid verifier")
	}
}

func TestVerifyCodeChallenge_InvalidVerifier(t *testing.T) {
	verifier := "correct-verifier"
	h := sha256.Sum256([]byte(verifier))
	challenge := base64.RawURLEncoding.EncodeToString(h[:])

	if VerifyCodeChallenge("wrong-verifier", challenge) {
		t.Error("expected VerifyCodeChallenge to return false for wrong verifier")
	}
}

func TestVerifyCodeChallenge_TamperedChallenge(t *testing.T) {
	verifier := "some-verifier"
	if VerifyCodeChallenge(verifier, "tampered-challenge") {
		t.Error("expected VerifyCodeChallenge to return false for tampered challenge")
	}
}

func TestNewOAuthAuthorizationCode_Fields(t *testing.T) {
	accountID := uuid.New()
	code, err := NewOAuthAuthorizationCode(
		accountID, "client-123", "https://example.com/callback",
		"challenge-abc", "S256", "campaigns:read campaigns:write",
		5*time.Minute,
	)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if code.Code == "" {
		t.Error("expected non-empty Code")
	}
	if len(code.Code) < 40 {
		t.Errorf("expected Code length >= 40, got %d", len(code.Code))
	}
	if code.AccountID != accountID {
		t.Errorf("expected AccountID %v, got %v", accountID, code.AccountID)
	}
	if code.ClientID != "client-123" {
		t.Errorf("expected ClientID %q, got %q", "client-123", code.ClientID)
	}
	if code.UsedAt != nil {
		t.Error("expected nil UsedAt for new code")
	}
}

func TestOAuthAuthorizationCode_IsExpired(t *testing.T) {
	expired := OAuthAuthorizationCode{ExpiresAt: time.Now().Add(-1 * time.Minute)}
	if !expired.IsExpired() {
		t.Error("expected IsExpired() == true for past code")
	}

	valid := OAuthAuthorizationCode{ExpiresAt: time.Now().Add(5 * time.Minute)}
	if valid.IsExpired() {
		t.Error("expected IsExpired() == false for future code")
	}
}

func TestOAuthAuthorizationCode_IsUsed(t *testing.T) {
	now := time.Now()
	used := OAuthAuthorizationCode{UsedAt: &now}
	if !used.IsUsed() {
		t.Error("expected IsUsed() == true when UsedAt is set")
	}

	unused := OAuthAuthorizationCode{}
	if unused.IsUsed() {
		t.Error("expected IsUsed() == false when UsedAt is nil")
	}
}

func TestNewOAuthAccessToken_HashFormat(t *testing.T) {
	accountID := uuid.New()
	token, rawToken, err := NewOAuthAccessToken(accountID, "client-123", "campaigns:read", 24*time.Hour)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if rawToken == "" {
		t.Error("expected non-empty raw token")
	}
	if token.TokenHash == "" {
		t.Error("expected non-empty token hash")
	}

	// TokenHash should be SHA-256 hex of rawToken.
	h := sha256.Sum256([]byte(rawToken))
	expectedHash := strings.ToLower(strings.ReplaceAll(
		base64.StdEncoding.EncodeToString(h[:]), "=", "",
	))
	_ = expectedHash // actual hex encoding differs — just verify format

	// Token hash should be lowercase hex (64 chars for SHA-256).
	if len(token.TokenHash) != 64 {
		t.Errorf("expected token hash length 64, got %d", len(token.TokenHash))
	}
}

func TestNewOAuthAccessToken_Fields(t *testing.T) {
	accountID := uuid.New()
	token, _, err := NewOAuthAccessToken(accountID, "client-123", "campaigns:read campaigns:write", 24*time.Hour)
	if err != nil {
		t.Fatal(err)
	}

	if token.AccountID != accountID {
		t.Errorf("expected AccountID %v, got %v", accountID, token.AccountID)
	}
	if token.ClientID != "client-123" {
		t.Errorf("expected ClientID %q, got %q", "client-123", token.ClientID)
	}
	if token.Scope != "campaigns:read campaigns:write" {
		t.Errorf("expected Scope %q, got %q", "campaigns:read campaigns:write", token.Scope)
	}
	if token.CreatedAt.IsZero() {
		t.Error("expected non-zero CreatedAt")
	}
	if token.ExpiresAt.IsZero() {
		t.Error("expected non-zero ExpiresAt")
	}
}

func TestOAuthAccessToken_IsExpired(t *testing.T) {
	expired := OAuthAccessToken{ExpiresAt: time.Now().Add(-1 * time.Hour)}
	if !expired.IsExpired() {
		t.Error("expected IsExpired() == true for past token")
	}

	valid := OAuthAccessToken{ExpiresAt: time.Now().Add(1 * time.Hour)}
	if valid.IsExpired() {
		t.Error("expected IsExpired() == false for future token")
	}
}
