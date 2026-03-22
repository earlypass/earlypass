//go:build integration

package postgres_test

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

func TestMagicLinkStore_Create_Get(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	ms := db.MagicLinks()

	t.Run("create and get REST token", func(t *testing.T) {
		tok, err := domain.NewMagicLinkToken(uniqueEmail("ml-rest"), nil, 15*time.Minute)
		if err != nil {
			t.Fatalf("NewMagicLinkToken: %v", err)
		}
		if err = ms.Create(ctx, tok); err != nil {
			t.Fatalf("Create: %v", err)
		}
		got, err := ms.Get(ctx, tok.Token)
		if err != nil {
			t.Fatalf("Get: %v", err)
		}
		if got.Token != tok.Token || got.Email != tok.Email {
			t.Errorf("token mismatch: want %q/%q, got %q/%q", tok.Token, tok.Email, got.Token, got.Email)
		}
		if got.OAuthState != nil {
			t.Error("want nil OAuthState for REST token")
		}
		if got.IsUsed() {
			t.Error("want unused token")
		}
		if got.IsExpired() {
			t.Error("want non-expired token")
		}
	})

	t.Run("create and get OAuth token", func(t *testing.T) {
		oauth := &domain.OAuthState{
			ClientID:            "client-123",
			RedirectURI:         "https://example.com/callback",
			CodeChallenge:       "challenge-abc",
			CodeChallengeMethod: "S256",
			State:               "state-xyz",
		}
		tok, err := domain.NewMagicLinkToken(uniqueEmail("ml-oauth"), oauth, 15*time.Minute)
		if err != nil {
			t.Fatalf("NewMagicLinkToken: %v", err)
		}
		if err = ms.Create(ctx, tok); err != nil {
			t.Fatalf("Create: %v", err)
		}
		got, err := ms.Get(ctx, tok.Token)
		if err != nil {
			t.Fatalf("Get: %v", err)
		}
		if !got.IsOAuthFlow() {
			t.Fatal("want IsOAuthFlow=true")
		}
		if got.OAuthState.ClientID != "client-123" {
			t.Errorf("want ClientID %q, got %q", "client-123", got.OAuthState.ClientID)
		}
		if got.OAuthState.State != "state-xyz" {
			t.Errorf("want State %q, got %q", "state-xyz", got.OAuthState.State)
		}
	})

	t.Run("get unknown token returns ErrNotFound", func(t *testing.T) {
		_, err := ms.Get(ctx, "nonexistent-token-abc")
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestMagicLinkStore_MarkUsed(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	ms := db.MagicLinks()

	t.Run("marks token as used", func(t *testing.T) {
		tok, _ := domain.NewMagicLinkToken(uniqueEmail("ml-mark"), nil, 15*time.Minute)
		_ = ms.Create(ctx, tok)

		now := time.Now().UTC()
		if err := ms.MarkUsed(ctx, tok.Token, now); err != nil {
			t.Fatalf("MarkUsed: %v", err)
		}
		got, _ := ms.Get(ctx, tok.Token)
		if !got.IsUsed() {
			t.Error("want IsUsed=true after MarkUsed")
		}
	})

	t.Run("second MarkUsed returns ErrNotFound (single-use)", func(t *testing.T) {
		tok, _ := domain.NewMagicLinkToken(uniqueEmail("ml-single"), nil, 15*time.Minute)
		_ = ms.Create(ctx, tok)
		_ = ms.MarkUsed(ctx, tok.Token, time.Now())

		err := ms.MarkUsed(ctx, tok.Token, time.Now())
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound on second use, got %v", err)
		}
	})

	t.Run("unknown token returns ErrNotFound", func(t *testing.T) {
		err := ms.MarkUsed(ctx, "ghost-token", time.Now())
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestMagicLinkStore_DeleteExpired(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	ms := db.MagicLinks()

	// Create an already-expired token by using a negative TTL.
	tok, _ := domain.NewMagicLinkToken(uniqueEmail("ml-expired"), nil, -1*time.Second)
	_ = ms.Create(ctx, tok)

	if err := ms.DeleteExpired(ctx); err != nil {
		t.Fatalf("DeleteExpired: %v", err)
	}

	_, err := ms.Get(ctx, tok.Token)
	if !errors.Is(err, store.ErrNotFound) {
		t.Errorf("want ErrNotFound after deletion, got %v", err)
	}
}
