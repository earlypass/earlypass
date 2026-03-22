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

func TestCampaignStore_Create(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()

	t.Run("happy path", func(t *testing.T) {
		c := newTestCampaign(t)
		if err := cs.Create(ctx, c); err != nil {
			t.Fatalf("Create: %v", err)
		}
	})

	t.Run("duplicate slug returns ErrSlugConflict", func(t *testing.T) {
		c1 := newTestCampaign(t)
		c1.Slug = "dup-slug-" + uuid.New().String()[:8]
		if err := cs.Create(ctx, c1); err != nil {
			t.Fatalf("first Create: %v", err)
		}

		c2 := newTestCampaign(t)
		c2.Slug = c1.Slug
		err := cs.Create(ctx, c2)
		if !errors.Is(err, store.ErrSlugConflict) {
			t.Errorf("want ErrSlugConflict, got %v", err)
		}
	})

	t.Run("duplicate name same account returns ErrConflict", func(t *testing.T) {
		acct, _, err := db.Accounts().GetOrCreateByEmail(ctx, uniqueEmail("dup-name-same-acct"))
		if err != nil {
			t.Fatalf("creating test account: %v", err)
		}
		sharedName := "Duplicate Name " + uuid.New().String()[:8]

		c1 := newTestCampaign(t)
		c1.AccountID = acct.ID
		c1.Name = sharedName
		if err := cs.Create(ctx, c1); err != nil {
			t.Fatalf("first Create: %v", err)
		}

		c2 := newTestCampaign(t)
		c2.AccountID = acct.ID
		c2.Name = sharedName
		if gotErr := cs.Create(ctx, c2); !errors.Is(gotErr, store.ErrConflict) {
			t.Errorf("want ErrConflict for duplicate name in same account, got %v", gotErr)
		}
	})

	t.Run("same name different accounts succeeds", func(t *testing.T) {
		sharedName := "Shared Name " + uuid.New().String()[:8]

		acct1, _, err := db.Accounts().GetOrCreateByEmail(ctx, uniqueEmail("diff-acct-1"))
		if err != nil {
			t.Fatalf("creating test account 1: %v", err)
		}
		acct2, _, err := db.Accounts().GetOrCreateByEmail(ctx, uniqueEmail("diff-acct-2"))
		if err != nil {
			t.Fatalf("creating test account 2: %v", err)
		}

		c1 := newTestCampaign(t)
		c1.AccountID = acct1.ID
		c1.Name = sharedName
		if err := cs.Create(ctx, c1); err != nil {
			t.Fatalf("Create for account 1: %v", err)
		}

		c2 := newTestCampaign(t)
		c2.AccountID = acct2.ID
		c2.Name = sharedName
		if err := cs.Create(ctx, c2); err != nil {
			t.Errorf("Create for account 2 with same name should succeed, got %v", err)
		}
	})
}

func TestCampaignStore_GetByID(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()

	t.Run("found", func(t *testing.T) {
		c := newTestCampaign(t)
		if err := cs.Create(ctx, c); err != nil {
			t.Fatalf("Create: %v", err)
		}

		got, err := cs.GetByID(ctx, c.ID)
		if err != nil {
			t.Fatalf("GetByID: %v", err)
		}
		if got.ID != c.ID {
			t.Errorf("ID = %v, want %v", got.ID, c.ID)
		}
		if got.Name != c.Name {
			t.Errorf("Name = %q, want %q", got.Name, c.Name)
		}
		if got.Settings.BoostWeight != c.Settings.BoostWeight {
			t.Errorf("BoostWeight = %v, want %v", got.Settings.BoostWeight, c.Settings.BoostWeight)
		}
		if got.AccountID != c.AccountID {
			t.Errorf("AccountID = %v, want %v", got.AccountID, c.AccountID)
		}
	})

	t.Run("not found returns ErrNotFound", func(t *testing.T) {
		_, err := cs.GetByID(ctx, uuid.New())
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestCampaignStore_GetBySlug(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()

	c := newTestCampaign(t)
	if err := cs.Create(ctx, c); err != nil {
		t.Fatalf("Create: %v", err)
	}

	t.Run("found", func(t *testing.T) {
		got, err := cs.GetBySlug(ctx, c.Slug)
		if err != nil {
			t.Fatalf("GetBySlug: %v", err)
		}
		if got.ID != c.ID {
			t.Errorf("ID = %v, want %v", got.ID, c.ID)
		}
	})

	t.Run("not found returns ErrNotFound", func(t *testing.T) {
		_, err := cs.GetBySlug(ctx, "no-such-slug")
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestCampaignStore_Update(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()

	c := newTestCampaign(t)
	if err := cs.Create(ctx, c); err != nil {
		t.Fatalf("Create: %v", err)
	}

	t.Run("updates name and status", func(t *testing.T) {
		c.Name = "Updated Name"
		c.Status = domain.CampaignStatusActive
		if err := cs.Update(ctx, c); err != nil {
			t.Fatalf("Update: %v", err)
		}

		got, err := cs.GetByID(ctx, c.ID)
		if err != nil {
			t.Fatalf("GetByID after update: %v", err)
		}
		if got.Name != "Updated Name" {
			t.Errorf("Name = %q, want %q", got.Name, "Updated Name")
		}
		if got.Status != domain.CampaignStatusActive {
			t.Errorf("Status = %q, want active", got.Status)
		}
	})

	t.Run("non-existent returns ErrNotFound", func(t *testing.T) {
		phantom := newTestCampaign(t)
		err := cs.Update(ctx, phantom)
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestCampaignStore_Delete(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()

	t.Run("deletes existing campaign", func(t *testing.T) {
		c := newTestCampaign(t)
		if err := cs.Create(ctx, c); err != nil {
			t.Fatalf("Create: %v", err)
		}

		if err := cs.Delete(ctx, c.ID); err != nil {
			t.Fatalf("Delete: %v", err)
		}

		_, err := cs.GetByID(ctx, c.ID)
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("after delete, want ErrNotFound, got %v", err)
		}
	})

	t.Run("non-existent returns ErrNotFound", func(t *testing.T) {
		err := cs.Delete(ctx, uuid.New())
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestCampaignStore_ListByAccount(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()

	// Create a dedicated account for this test so we can verify ownership isolation.
	acct, _, err := db.Accounts().GetOrCreateByEmail(ctx, uniqueEmail("list-by-account"))
	if err != nil {
		t.Fatalf("creating test account: %v", err)
	}

	// Create two campaigns under this account.
	c1, _ := domain.NewCampaign("List Test Campaign " + uuid.New().String()[:8])
	c1.AccountID = acct.ID
	c2, _ := domain.NewCampaign("List Test Campaign " + uuid.New().String()[:8])
	c2.AccountID = acct.ID

	if err := cs.Create(ctx, c1); err != nil {
		t.Fatalf("creating c1: %v", err)
	}
	if err := cs.Create(ctx, c2); err != nil {
		t.Fatalf("creating c2: %v", err)
	}

	t.Run("returns campaigns for account", func(t *testing.T) {
		campaigns, err := cs.ListByAccount(ctx, acct.ID, 10, 0)
		if err != nil {
			t.Fatalf("ListByAccount: %v", err)
		}
		if len(campaigns) < 2 {
			t.Errorf("want at least 2 campaigns, got %d", len(campaigns))
		}
		for _, c := range campaigns {
			if c.AccountID != acct.ID {
				t.Errorf("campaign %v has wrong account_id %v, want %v", c.ID, c.AccountID, acct.ID)
			}
		}
	})

	t.Run("returns empty slice for unknown account", func(t *testing.T) {
		campaigns, err := cs.ListByAccount(ctx, nonExistentUUID(), 10, 0)
		if err != nil {
			t.Fatalf("ListByAccount: %v", err)
		}
		if len(campaigns) != 0 {
			t.Errorf("want 0 campaigns for unknown account, got %d", len(campaigns))
		}
	})

	t.Run("respects limit and offset", func(t *testing.T) {
		// Fetch only 1 with limit=1.
		page1, err := cs.ListByAccount(ctx, acct.ID, 1, 0)
		if err != nil {
			t.Fatalf("ListByAccount page1: %v", err)
		}
		if len(page1) != 1 {
			t.Errorf("want 1 campaign with limit=1, got %d", len(page1))
		}

		// Fetch the second one with offset=1.
		page2, err := cs.ListByAccount(ctx, acct.ID, 1, 1)
		if err != nil {
			t.Fatalf("ListByAccount page2: %v", err)
		}
		if len(page2) != 1 {
			t.Errorf("want 1 campaign with limit=1 offset=1, got %d", len(page2))
		}
		if page1[0].ID == page2[0].ID {
			t.Error("page1 and page2 should have different campaigns")
		}
	})
}

// --- fixture helpers ---

// newTestCampaign creates a campaign with a valid account_id for testing.
func newTestCampaign(t *testing.T) domain.Campaign {
	t.Helper()
	db := testDB(t)
	// Create a real account so the NOT NULL FK constraint is satisfied.
	acct, _, err := db.Accounts().GetOrCreateByEmail(context.Background(), uniqueEmail("campaign-owner"))
	if err != nil {
		t.Fatalf("creating test account for campaign: %v", err)
	}
	now := time.Now().UTC().Truncate(time.Millisecond)
	return domain.Campaign{
		ID:        uuid.New(),
		Name:      "Test Campaign " + uuid.New().String()[:8],
		Slug:      "slug-" + uuid.New().String()[:8],
		Settings:  domain.DefaultCampaignSettings(),
		Status:    domain.CampaignStatusActive,
		AccountID: acct.ID,
		CreatedAt: now,
		UpdatedAt: now,
	}
}
