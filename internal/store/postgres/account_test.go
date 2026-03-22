//go:build integration

package postgres_test

import (
	"context"
	"errors"
	"sync"
	"testing"

	"github.com/earlypass/earlypass/internal/store"
)

func TestAccountStore_GetOrCreateByEmail(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	as := db.Accounts()

	t.Run("creates account on first call", func(t *testing.T) {
		email := uniqueEmail("create-first")
		a, created, err := as.GetOrCreateByEmail(ctx, email)
		if err != nil {
			t.Fatalf("GetOrCreateByEmail: %v", err)
		}
		if !created {
			t.Error("want created=true, got false")
		}
		if a.Email != email {
			t.Errorf("want email %q, got %q", email, a.Email)
		}
		if a.ID.String() == "" {
			t.Error("want non-empty ID")
		}
	})

	t.Run("returns existing account on second call", func(t *testing.T) {
		email := uniqueEmail("create-second")
		a1, created1, err := as.GetOrCreateByEmail(ctx, email)
		if err != nil {
			t.Fatalf("first call: %v", err)
		}
		if !created1 {
			t.Error("first call: want created=true")
		}

		a2, created2, err := as.GetOrCreateByEmail(ctx, email)
		if err != nil {
			t.Fatalf("second call: %v", err)
		}
		if created2 {
			t.Error("second call: want created=false, got true")
		}
		if a1.ID != a2.ID {
			t.Errorf("want same ID, got %v vs %v", a1.ID, a2.ID)
		}
	})

	t.Run("concurrent calls only create one row", func(t *testing.T) {
		email := uniqueEmail("concurrent")
		const n = 5
		var (
			wg      sync.WaitGroup
			mu      sync.Mutex
			created int
		)
		wg.Add(n)
		for range n {
			go func() {
				defer wg.Done()
				_, c, err := as.GetOrCreateByEmail(ctx, email)
				if err != nil {
					return
				}
				if c {
					mu.Lock()
					created++
					mu.Unlock()
				}
			}()
		}
		wg.Wait()
		if created != 1 {
			t.Errorf("want exactly 1 create, got %d", created)
		}
	})
}

func TestAccountStore_GetByID(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	as := db.Accounts()

	t.Run("found", func(t *testing.T) {
		email := uniqueEmail("get-by-id")
		a, _, err := as.GetOrCreateByEmail(ctx, email)
		if err != nil {
			t.Fatalf("creating account: %v", err)
		}
		got, err := as.GetByID(ctx, a.ID)
		if err != nil {
			t.Fatalf("GetByID: %v", err)
		}
		if got.ID != a.ID || got.Email != email {
			t.Errorf("want {%v, %q}, got {%v, %q}", a.ID, email, got.ID, got.Email)
		}
	})

	t.Run("not found", func(t *testing.T) {
		_, err := as.GetByID(ctx, nonExistentUUID())
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestAccountStore_GetByEmail(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	as := db.Accounts()

	t.Run("found", func(t *testing.T) {
		email := uniqueEmail("get-by-email")
		_, _, err := as.GetOrCreateByEmail(ctx, email)
		if err != nil {
			t.Fatalf("creating account: %v", err)
		}
		got, err := as.GetByEmail(ctx, email)
		if err != nil {
			t.Fatalf("GetByEmail: %v", err)
		}
		if got.Email != email {
			t.Errorf("want %q, got %q", email, got.Email)
		}
	})

	t.Run("not found", func(t *testing.T) {
		_, err := as.GetByEmail(ctx, "nonexistent@example.com")
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}
