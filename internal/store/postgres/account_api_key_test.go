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

func newTestAccount(t *testing.T) domain.Account {
	t.Helper()
	db := testDB(t)
	a, _, err := db.Accounts().GetOrCreateByEmail(context.Background(), uniqueEmail("acct"))
	if err != nil {
		t.Fatalf("creating test account: %v", err)
	}
	return a
}

func TestAccountAPIKeyStore_CreateAndGet(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	ks := db.AccountAPIKeys()
	acct := newTestAccount(t)

	t.Run("active key is found by raw key", func(t *testing.T) {
		k, rawKey, err := domain.NewAccountAPIKey(acct.ID, "Test Key")
		if err != nil {
			t.Fatalf("NewAccountAPIKey: %v", err)
		}
		if err = ks.Create(ctx, k); err != nil {
			t.Fatalf("Create: %v", err)
		}
		got, err := ks.GetByRawKey(ctx, rawKey)
		if err != nil {
			t.Fatalf("GetByRawKey: %v", err)
		}
		if got.ID != k.ID {
			t.Errorf("want ID %v, got %v", k.ID, got.ID)
		}
		if got.AccountID != acct.ID {
			t.Errorf("want AccountID %v, got %v", acct.ID, got.AccountID)
		}
	})

	t.Run("wrong raw key returns ErrNotFound", func(t *testing.T) {
		k, _, err := domain.NewAccountAPIKey(acct.ID, "Key For Wrong Test")
		if err != nil {
			t.Fatalf("NewAccountAPIKey: %v", err)
		}
		_ = ks.Create(ctx, k)

		_, err = ks.GetByRawKey(ctx, "ep_acc_wrongkey")
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestAccountAPIKeyStore_Revoke(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	ks := db.AccountAPIKeys()
	acct := newTestAccount(t)

	t.Run("revoked key not returned by GetByRawKey", func(t *testing.T) {
		k, rawKey, err := domain.NewAccountAPIKey(acct.ID, "Revoke Me")
		if err != nil {
			t.Fatalf("NewAccountAPIKey: %v", err)
		}
		_ = ks.Create(ctx, k)

		if err = ks.Revoke(ctx, k.ID); err != nil {
			t.Fatalf("Revoke: %v", err)
		}

		_, err = ks.GetByRawKey(ctx, rawKey)
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound for revoked key, got %v", err)
		}
	})

	t.Run("revoke non-existent returns ErrNotFound", func(t *testing.T) {
		err := ks.Revoke(ctx, nonExistentUUID())
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestAccountAPIKeyStore_ListByAccount(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	ks := db.AccountAPIKeys()
	acct := newTestAccount(t)

	k1, _, _ := domain.NewAccountAPIKey(acct.ID, "Key One")
	k2, _, _ := domain.NewAccountAPIKey(acct.ID, "Key Two")
	_ = ks.Create(ctx, k1)
	_ = ks.Create(ctx, k2)

	keys, err := ks.ListByAccount(ctx, acct.ID)
	if err != nil {
		t.Fatalf("ListByAccount: %v", err)
	}
	if len(keys) < 2 {
		t.Errorf("want at least 2 keys, got %d", len(keys))
	}
}

func TestAccountAPIKeyStore_TouchLastUsed(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	ks := db.AccountAPIKeys()
	acct := newTestAccount(t)

	k, _, _ := domain.NewAccountAPIKey(acct.ID, "Touch Me")
	_ = ks.Create(ctx, k)

	now := time.Now().UTC().Truncate(time.Second)
	if err := ks.TouchLastUsed(ctx, k.ID, now); err != nil {
		t.Fatalf("TouchLastUsed: %v", err)
	}

	keys, _ := ks.ListByAccount(ctx, acct.ID)
	for _, key := range keys {
		if key.ID == k.ID {
			if key.LastUsedAt == nil {
				t.Error("want LastUsedAt set, got nil")
			}
			return
		}
	}
	t.Error("key not found in list")
}
