package dashboard_test

import (
	"net/http"
	"net/http/httptest"
	"testing"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/dashboard"
)

func TestIssueAndParseToken(t *testing.T) {
	secret := []byte("super-secret-test-key-1234567890")
	accountID := uuid.New()

	tokenStr, err := dashboard.IssueToken(accountID, secret)
	if err != nil {
		t.Fatalf("IssueToken: %v", err)
	}
	if tokenStr == "" {
		t.Fatal("expected non-empty token string")
	}

	claims, err := dashboard.ParseToken(tokenStr, secret)
	if err != nil {
		t.Fatalf("ParseToken: %v", err)
	}
	if claims.AccountID != accountID {
		t.Errorf("account ID mismatch: got %v, want %v", claims.AccountID, accountID)
	}
	if claims.ExpiresAt == nil {
		t.Fatal("expected non-nil expiry")
	}
	// Token TTL is 7 days; check it's at least 6 days away.
	if time.Until(claims.ExpiresAt.Time) < 6*24*time.Hour {
		t.Errorf("expected token to expire in ~7 days, got %v", claims.ExpiresAt.Time)
	}
}

func TestParseToken_WrongSecret(t *testing.T) {
	secret := []byte("super-secret-test-key-1234567890")
	accountID := uuid.New()

	tokenStr, err := dashboard.IssueToken(accountID, secret)
	if err != nil {
		t.Fatalf("IssueToken: %v", err)
	}

	_, err = dashboard.ParseToken(tokenStr, []byte("wrong-secret"))
	if err == nil {
		t.Fatal("expected error for wrong secret, got nil")
	}
}

func TestParseToken_Expired(t *testing.T) {
	secret := []byte("super-secret-test-key-1234567890")
	accountID := uuid.New()

	// Manually craft an expired token.
	claims := dashboard.Claims{
		AccountID: accountID,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(-1 * time.Hour)),
			IssuedAt:  jwt.NewNumericDate(time.Now().Add(-2 * time.Hour)),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &claims)
	tokenStr, err := token.SignedString(secret)
	if err != nil {
		t.Fatalf("signing expired token: %v", err)
	}

	_, err = dashboard.ParseToken(tokenStr, secret)
	if err == nil {
		t.Fatal("expected error for expired token, got nil")
	}
}

func TestSetAndClearCookie(t *testing.T) {
	w := httptest.NewRecorder()
	dashboard.SetCookie(w, "test-token", false)

	resp := w.Result()
	cookies := resp.Cookies()
	if len(cookies) == 0 {
		t.Fatal("expected at least one Set-Cookie header")
	}
	var found *http.Cookie
	for _, c := range cookies {
		if c.Name == "ep_auth" {
			found = c
			break
		}
	}
	if found == nil {
		t.Fatal("ep_auth cookie not set")
	}
	if found.Value != "test-token" {
		t.Errorf("cookie value mismatch: got %q, want %q", found.Value, "test-token")
	}
	if !found.HttpOnly {
		t.Error("expected HttpOnly cookie")
	}

	// Now clear it.
	w2 := httptest.NewRecorder()
	dashboard.ClearCookie(w2)
	resp2 := w2.Result()
	cookies2 := resp2.Cookies()
	var cleared *http.Cookie
	for _, c := range cookies2 {
		if c.Name == "ep_auth" {
			cleared = c
			break
		}
	}
	if cleared == nil {
		t.Fatal("expected ClearCookie to set ep_auth header")
	}
	if cleared.MaxAge != -1 {
		t.Errorf("expected MaxAge -1, got %d", cleared.MaxAge)
	}
}

func TestGenerateJWTSecret(t *testing.T) {
	s1, err := dashboard.GenerateJWTSecret()
	if err != nil {
		t.Fatalf("GenerateJWTSecret: %v", err)
	}
	if len(s1) != 32 {
		t.Errorf("expected 32-byte secret, got %d", len(s1))
	}

	s2, err := dashboard.GenerateJWTSecret()
	if err != nil {
		t.Fatalf("GenerateJWTSecret (second call): %v", err)
	}
	if string(s1) == string(s2) {
		t.Error("expected different secrets on each call")
	}
}

func TestAccountIDFromContext_Missing(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/", nil)
	_, ok := dashboard.AccountIDFromContext(req.Context())
	if ok {
		t.Error("expected AccountIDFromContext to return false for bare context")
	}
}
