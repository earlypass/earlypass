//go:build integration

package postgres_test

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

func newTestOAuthCode(t *testing.T, accountID uuid.UUID) domain.OAuthAuthorizationCode {
	t.Helper()
	code, err := domain.NewOAuthAuthorizationCode(
		accountID,
		"client-test",
		"https://example.com/cb",
		"challenge-abc",
		"S256",
		"campaigns:read campaigns:write",
		5*time.Minute,
	)
	if err != nil {
		t.Fatalf("NewOAuthAuthorizationCode: %v", err)
	}
	return code
}

func TestOAuthStore_CreateAndGetCode(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	oauthStore := db.OAuth()
	acct := newTestAccount(t)

	t.Run("create and retrieve code", func(t *testing.T) {
		code := newTestOAuthCode(t, acct.ID)
		if err := oauthStore.CreateCode(ctx, code); err != nil {
			t.Fatalf("CreateCode: %v", err)
		}
		got, err := oauthStore.GetCode(ctx, code.Code)
		if err != nil {
			t.Fatalf("GetCode: %v", err)
		}
		if got.Code != code.Code {
			t.Errorf("want code %q, got %q", code.Code, got.Code)
		}
		if got.AccountID != acct.ID {
			t.Errorf("want AccountID %v, got %v", acct.ID, got.AccountID)
		}
		if got.IsUsed() {
			t.Error("want unused code")
		}
		if got.IsExpired() {
			t.Error("want non-expired code")
		}
	})

	t.Run("unknown code returns ErrNotFound", func(t *testing.T) {
		_, err := oauthStore.GetCode(ctx, "nonexistent-code")
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestOAuthStore_MarkCodeUsed(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	oauthStore := db.OAuth()
	acct := newTestAccount(t)

	t.Run("marks code as used", func(t *testing.T) {
		code := newTestOAuthCode(t, acct.ID)
		_ = oauthStore.CreateCode(ctx, code)

		if err := oauthStore.MarkCodeUsed(ctx, code.Code, time.Now()); err != nil {
			t.Fatalf("MarkCodeUsed: %v", err)
		}
		got, _ := oauthStore.GetCode(ctx, code.Code)
		if !got.IsUsed() {
			t.Error("want IsUsed=true")
		}
	})

	t.Run("second MarkCodeUsed returns ErrNotFound (single-use)", func(t *testing.T) {
		code := newTestOAuthCode(t, acct.ID)
		_ = oauthStore.CreateCode(ctx, code)
		_ = oauthStore.MarkCodeUsed(ctx, code.Code, time.Now())

		err := oauthStore.MarkCodeUsed(ctx, code.Code, time.Now())
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound on second use, got %v", err)
		}
	})
}

func TestOAuthStore_CreateAndGetToken(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	oauthStore := db.OAuth()
	acct := newTestAccount(t)

	t.Run("create and retrieve by hash", func(t *testing.T) {
		tok, _, err := domain.NewOAuthAccessToken(acct.ID, "client-test", "campaigns:read campaigns:write", 24*time.Hour)
		if err != nil {
			t.Fatalf("NewOAuthAccessToken: %v", err)
		}
		if err = oauthStore.CreateToken(ctx, tok); err != nil {
			t.Fatalf("CreateToken: %v", err)
		}
		got, err := oauthStore.GetByTokenHash(ctx, tok.TokenHash)
		if err != nil {
			t.Fatalf("GetByTokenHash: %v", err)
		}
		if got.TokenHash != tok.TokenHash {
			t.Errorf("want hash %q, got %q", tok.TokenHash, got.TokenHash)
		}
		if got.AccountID != acct.ID {
			t.Errorf("want AccountID %v, got %v", acct.ID, got.AccountID)
		}
	})

	t.Run("expired token returns ErrNotFound", func(t *testing.T) {
		tok, _, _ := domain.NewOAuthAccessToken(acct.ID, "client-test", "campaigns:read", -1*time.Second)
		_ = oauthStore.CreateToken(ctx, tok)

		_, err := oauthStore.GetByTokenHash(ctx, tok.TokenHash)
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound for expired token, got %v", err)
		}
	})

	t.Run("unknown hash returns ErrNotFound", func(t *testing.T) {
		_, err := oauthStore.GetByTokenHash(ctx, "deadbeef")
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestOAuthStore_DeleteExpiredTokens(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	oauthStore := db.OAuth()
	acct := newTestAccount(t)

	tok, _, _ := domain.NewOAuthAccessToken(acct.ID, "client-test", "campaigns:read", -1*time.Second)
	_ = oauthStore.CreateToken(ctx, tok)

	if err := oauthStore.DeleteExpiredTokens(ctx); err != nil {
		t.Fatalf("DeleteExpiredTokens: %v", err)
	}

	_, err := oauthStore.GetByTokenHash(ctx, tok.TokenHash)
	if !errors.Is(err, store.ErrNotFound) {
		t.Errorf("want ErrNotFound after deletion, got %v", err)
	}
}
