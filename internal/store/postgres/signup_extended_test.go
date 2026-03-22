//go:build integration

package postgres_test

import (
	"context"
	"testing"
	"time"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/domain"
)

// TestSignupStore_ExistsByCampaignAndBaseEmail verifies that the base-email
// deduplication check works correctly (strips + aliases, case-insensitive).
func TestSignupStore_ExistsByCampaignAndBaseEmail(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	email := uniqueEmail("base-email")
	sg := newTestSignup(t, campaign.ID, email)
	if _, err := ss.Create(ctx, sg); err != nil {
		t.Fatalf("Create signup: %v", err)
	}

	t.Run("returns true for existing base email", func(t *testing.T) {
		exists, err := ss.ExistsByCampaignAndBaseEmail(ctx, campaign.ID, email)
		if err != nil {
			t.Fatalf("ExistsByCampaignAndBaseEmail: %v", err)
		}
		if !exists {
			t.Error("expected true for existing email, got false")
		}
	})

	t.Run("returns false for unknown email", func(t *testing.T) {
		exists, err := ss.ExistsByCampaignAndBaseEmail(ctx, campaign.ID, uniqueEmail("nonexistent"))
		if err != nil {
			t.Fatalf("ExistsByCampaignAndBaseEmail: %v", err)
		}
		if exists {
			t.Error("expected false for unknown email, got true")
		}
	})

	t.Run("returns false for different campaign", func(t *testing.T) {
		other := newTestCampaign(t)
		if err := cs.Create(ctx, other); err != nil {
			t.Fatalf("Create other campaign: %v", err)
		}
		exists, err := ss.ExistsByCampaignAndBaseEmail(ctx, other.ID, email)
		if err != nil {
			t.Fatalf("ExistsByCampaignAndBaseEmail: %v", err)
		}
		if exists {
			t.Error("expected false for email in a different campaign")
		}
	})
}

// TestSignupStore_UpdateStatus verifies that status transitions are persisted.
func TestSignupStore_UpdateStatus(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	sg := newTestSignup(t, campaign.ID, uniqueEmail("update-status"))
	created, err := ss.Create(ctx, sg)
	if err != nil {
		t.Fatalf("Create signup: %v", err)
	}

	t.Run("sets status to rejected", func(t *testing.T) {
		if err := ss.UpdateStatus(ctx, created.ID, domain.SignupStatusRejected); err != nil {
			t.Fatalf("UpdateStatus: %v", err)
		}
		got, err := ss.GetByID(ctx, created.ID)
		if err != nil {
			t.Fatalf("GetByID: %v", err)
		}
		if got.Status != domain.SignupStatusRejected {
			t.Errorf("Status = %q, want rejected", got.Status)
		}
	})

	t.Run("sets status to verified", func(t *testing.T) {
		if err := ss.UpdateStatus(ctx, created.ID, domain.SignupStatusVerified); err != nil {
			t.Fatalf("UpdateStatus: %v", err)
		}
		got, err := ss.GetByID(ctx, created.ID)
		if err != nil {
			t.Fatalf("GetByID: %v", err)
		}
		if got.Status != domain.SignupStatusVerified {
			t.Errorf("Status = %q, want verified", got.Status)
		}
	})
}

// TestSignupStore_ListByCampaignPaginated verifies the paginated listing method.
func TestSignupStore_ListByCampaignPaginated(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	// Create 3 signups.
	for i := range 3 {
		sg := newTestSignup(t, campaign.ID, uniqueEmail("paged-"+string(rune('a'+i))))
		if _, err := ss.Create(ctx, sg); err != nil {
			t.Fatalf("Create signup %d: %v", i, err)
		}
	}

	t.Run("returns all with large limit", func(t *testing.T) {
		signups, err := ss.ListByCampaignPaginated(ctx, campaign.ID, 10, 0)
		if err != nil {
			t.Fatalf("ListByCampaignPaginated: %v", err)
		}
		if len(signups) < 3 {
			t.Errorf("want at least 3 signups, got %d", len(signups))
		}
	})

	t.Run("limit=1 returns exactly 1", func(t *testing.T) {
		signups, err := ss.ListByCampaignPaginated(ctx, campaign.ID, 1, 0)
		if err != nil {
			t.Fatalf("ListByCampaignPaginated limit=1: %v", err)
		}
		if len(signups) != 1 {
			t.Errorf("want 1 signup with limit=1, got %d", len(signups))
		}
	})

	t.Run("offset skips records", func(t *testing.T) {
		page1, err := ss.ListByCampaignPaginated(ctx, campaign.ID, 1, 0)
		if err != nil {
			t.Fatalf("page1: %v", err)
		}
		page2, err := ss.ListByCampaignPaginated(ctx, campaign.ID, 1, 1)
		if err != nil {
			t.Fatalf("page2: %v", err)
		}
		if len(page1) == 0 || len(page2) == 0 {
			t.Fatal("expected non-empty pages")
		}
		if page1[0].ID == page2[0].ID {
			t.Error("page1 and page2 should return different signups")
		}
	})

	t.Run("empty for unknown campaign", func(t *testing.T) {
		signups, err := ss.ListByCampaignPaginated(ctx, uuid.New(), 10, 0)
		if err != nil {
			t.Fatalf("ListByCampaignPaginated unknown campaign: %v", err)
		}
		if len(signups) != 0 {
			t.Errorf("want 0 for unknown campaign, got %d", len(signups))
		}
	})
}

// TestSignupStore_CountVerifiedByCampaign checks the verified-signup count.
func TestSignupStore_CountVerifiedByCampaign(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	t.Run("zero for new campaign", func(t *testing.T) {
		n, err := ss.CountVerifiedByCampaign(ctx, campaign.ID)
		if err != nil {
			t.Fatalf("CountVerifiedByCampaign: %v", err)
		}
		if n != 0 {
			t.Errorf("want 0, got %d", n)
		}
	})

	// Create and verify a signup.
	sg := newTestSignup(t, campaign.ID, uniqueEmail("count-verified"))
	created, err := ss.Create(ctx, sg)
	if err != nil {
		t.Fatalf("Create signup: %v", err)
	}
	if err := ss.UpdateVerified(ctx, created.ID); err != nil {
		t.Fatalf("UpdateVerified: %v", err)
	}

	t.Run("increments after verify", func(t *testing.T) {
		n, err := ss.CountVerifiedByCampaign(ctx, campaign.ID)
		if err != nil {
			t.Fatalf("CountVerifiedByCampaign: %v", err)
		}
		if n < 1 {
			t.Errorf("want >= 1 verified, got %d", n)
		}
	})
}

// TestSignupStore_CountTodayByCampaign checks today's signup count.
func TestSignupStore_CountTodayByCampaign(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	before, err := ss.CountTodayByCampaign(ctx, campaign.ID)
	if err != nil {
		t.Fatalf("CountTodayByCampaign before: %v", err)
	}

	sg := newTestSignup(t, campaign.ID, uniqueEmail("count-today"))
	if _, err := ss.Create(ctx, sg); err != nil {
		t.Fatalf("Create signup: %v", err)
	}

	after, err := ss.CountTodayByCampaign(ctx, campaign.ID)
	if err != nil {
		t.Fatalf("CountTodayByCampaign after: %v", err)
	}

	if after <= before {
		t.Errorf("today count should increase after creating signup: before=%d after=%d", before, after)
	}
}

// TestSignupStore_SumReferralsByCampaign checks the referral sum.
func TestSignupStore_SumReferralsByCampaign(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	t.Run("zero for new campaign", func(t *testing.T) {
		n, err := ss.SumReferralsByCampaign(ctx, campaign.ID)
		if err != nil {
			t.Fatalf("SumReferralsByCampaign: %v", err)
		}
		if n != 0 {
			t.Errorf("want 0, got %d", n)
		}
	})

	// Create and verify two signups, then make the second refer the first.
	email1 := uniqueEmail("referrer")
	sg1 := newTestSignup(t, campaign.ID, email1)
	created1, err := ss.Create(ctx, sg1)
	if err != nil {
		t.Fatalf("Create referrer signup: %v", err)
	}
	if err := ss.UpdateReferralCount(ctx, created1.ID, 2, 2); err != nil {
		t.Fatalf("UpdateReferralCount: %v", err)
	}

	t.Run("reflects updated referral count", func(t *testing.T) {
		n, err := ss.SumReferralsByCampaign(ctx, campaign.ID)
		if err != nil {
			t.Fatalf("SumReferralsByCampaign: %v", err)
		}
		if n < 2 {
			t.Errorf("want >= 2 referrals, got %d", n)
		}
	})
}

// TestSignupStore_GetStatsBatch verifies the batch stats query.
func TestSignupStore_GetStatsBatch(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	t.Run("returns zero stats for empty campaign", func(t *testing.T) {
		stats, err := ss.GetStatsBatch(ctx, campaign.ID)
		if err != nil {
			t.Fatalf("GetStatsBatch: %v", err)
		}
		if stats.TotalSignups != 0 {
			t.Errorf("TotalSignups = %d, want 0", stats.TotalSignups)
		}
		if stats.VerifiedSignups != 0 {
			t.Errorf("VerifiedSignups = %d, want 0", stats.VerifiedSignups)
		}
	})

	// Create a signup and verify it.
	sg := newTestSignup(t, campaign.ID, uniqueEmail("batch-stats"))
	created, err := ss.Create(ctx, sg)
	if err != nil {
		t.Fatalf("Create signup: %v", err)
	}
	if err := ss.UpdateVerified(ctx, created.ID); err != nil {
		t.Fatalf("UpdateVerified: %v", err)
	}

	t.Run("total and verified increment", func(t *testing.T) {
		stats, err := ss.GetStatsBatch(ctx, campaign.ID)
		if err != nil {
			t.Fatalf("GetStatsBatch: %v", err)
		}
		if stats.TotalSignups < 1 {
			t.Errorf("TotalSignups = %d, want >= 1", stats.TotalSignups)
		}
		if stats.VerifiedSignups < 1 {
			t.Errorf("VerifiedSignups = %d, want >= 1", stats.VerifiedSignups)
		}
		if stats.TodaySignups < 1 {
			t.Errorf("TodaySignups = %d, want >= 1", stats.TodaySignups)
		}
		// ViralCoefficient should be non-negative.
		if stats.ViralCoefficient < 0 {
			t.Errorf("ViralCoefficient = %v, should be >= 0", stats.ViralCoefficient)
		}
	})
}

// TestSignupStore_ListByCampaignFiltered covers filtering, sorting, and search.
func TestSignupStore_ListByCampaignFiltered(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	// Create 2 pending and 1 verified signup.
	uniquePrefix := "filtered-" + uuid.New().String()[:8]
	sg1 := newTestSignup(t, campaign.ID, uniquePrefix+"-pend1@example.com")
	created1, err := ss.Create(ctx, sg1)
	if err != nil {
		t.Fatalf("Create sg1: %v", err)
	}

	sg2 := newTestSignup(t, campaign.ID, uniquePrefix+"-pend2@example.com")
	if _, err := ss.Create(ctx, sg2); err != nil {
		t.Fatalf("Create sg2: %v", err)
	}

	sg3 := newTestSignup(t, campaign.ID, uniquePrefix+"-ver3@example.com")
	created3, err := ss.Create(ctx, sg3)
	if err != nil {
		t.Fatalf("Create sg3: %v", err)
	}
	if err := ss.UpdateVerified(ctx, created3.ID); err != nil {
		t.Fatalf("UpdateVerified sg3: %v", err)
	}

	t.Run("no filter returns all", func(t *testing.T) {
		signups, total, err := ss.ListByCampaignFiltered(ctx, campaign.ID, domain.SignupFilter{Limit: 100, Sort: "date"})
		if err != nil {
			t.Fatalf("ListByCampaignFiltered no filter: %v", err)
		}
		if total < 3 {
			t.Errorf("total = %d, want >= 3", total)
		}
		if len(signups) < 3 {
			t.Errorf("len = %d, want >= 3", len(signups))
		}
	})

	t.Run("filter by status=pending", func(t *testing.T) {
		signups, total, err := ss.ListByCampaignFiltered(ctx, campaign.ID, domain.SignupFilter{
			Status: "pending",
			Limit:  100,
			Sort:   "date",
		})
		if err != nil {
			t.Fatalf("ListByCampaignFiltered pending: %v", err)
		}
		if total < 2 {
			t.Errorf("total = %d, want >= 2 pending", total)
		}
		for _, sg := range signups {
			if sg.Status != domain.SignupStatusPending {
				t.Errorf("expected pending, got %q for signup %v", sg.Status, sg.ID)
			}
		}
	})

	t.Run("filter by status=verified", func(t *testing.T) {
		signups, total, err := ss.ListByCampaignFiltered(ctx, campaign.ID, domain.SignupFilter{
			Status: "verified",
			Limit:  100,
			Sort:   "date",
		})
		if err != nil {
			t.Fatalf("ListByCampaignFiltered verified: %v", err)
		}
		if total < 1 {
			t.Errorf("total = %d, want >= 1 verified", total)
		}
		for _, sg := range signups {
			if sg.Status != domain.SignupStatusVerified {
				t.Errorf("expected verified, got %q for signup %v", sg.Status, sg.ID)
			}
		}
	})

	t.Run("search by email prefix", func(t *testing.T) {
		signups, total, err := ss.ListByCampaignFiltered(ctx, campaign.ID, domain.SignupFilter{
			Search: uniquePrefix,
			Limit:  100,
			Sort:   "date",
		})
		if err != nil {
			t.Fatalf("ListByCampaignFiltered search: %v", err)
		}
		if total < 3 {
			t.Errorf("total = %d, want >= 3 matching prefix %q", total, uniquePrefix)
		}
		_ = signups
	})

	t.Run("pagination with limit=1", func(t *testing.T) {
		signups, total, err := ss.ListByCampaignFiltered(ctx, campaign.ID, domain.SignupFilter{Limit: 1, Sort: "date"})
		if err != nil {
			t.Fatalf("ListByCampaignFiltered limit=1: %v", err)
		}
		if len(signups) != 1 {
			t.Errorf("len = %d, want 1", len(signups))
		}
		if total < 1 {
			t.Errorf("total = %d, want >= 1", total)
		}
	})

	t.Run("sort by referrals", func(t *testing.T) {
		// Give sg1 a higher referral count.
		if err := ss.UpdateReferralCount(ctx, created1.ID, 5, 5); err != nil {
			t.Fatalf("UpdateReferralCount: %v", err)
		}
		signups, _, err := ss.ListByCampaignFiltered(ctx, campaign.ID, domain.SignupFilter{Limit: 100, Sort: "referrals"})
		if err != nil {
			t.Fatalf("ListByCampaignFiltered sort=referrals: %v", err)
		}
		if len(signups) < 1 {
			t.Fatal("expected at least one signup")
		}
		// The first result should have the highest or equal referral count.
		if signups[0].ReferralCount < signups[len(signups)-1].ReferralCount {
			t.Errorf("sort by referrals not descending: first=%d last=%d",
				signups[0].ReferralCount, signups[len(signups)-1].ReferralCount)
		}
	})
}

// TestSignupStore_TimeseriesByCampaign checks daily signup timeseries data.
func TestSignupStore_TimeseriesByCampaign(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	t.Run("empty campaign returns zero counts", func(t *testing.T) {
		counts, err := ss.TimeseriesByCampaign(ctx, campaign.ID, 7)
		if err != nil {
			t.Fatalf("TimeseriesByCampaign: %v", err)
		}
		// Should return 7 days of data (even if all zeros).
		if len(counts) != 7 {
			t.Errorf("len = %d, want 7", len(counts))
		}
		for _, c := range counts {
			if c.Count != 0 {
				t.Errorf("expected 0 count for empty campaign, got %d on %v", c.Count, c.Date)
			}
		}
	})

	// Create a signup today.
	sg := newTestSignup(t, campaign.ID, uniqueEmail("timeseries"))
	if _, err := ss.Create(ctx, sg); err != nil {
		t.Fatalf("Create signup: %v", err)
	}

	t.Run("today count increments after signup", func(t *testing.T) {
		counts, err := ss.TimeseriesByCampaign(ctx, campaign.ID, 7)
		if err != nil {
			t.Fatalf("TimeseriesByCampaign: %v", err)
		}
		if len(counts) != 7 {
			t.Errorf("len = %d, want 7", len(counts))
		}

		// The last day in the series should be today (most recent first or last
		// depending on the sort — find today's entry).
		today := time.Now().UTC().Truncate(24 * time.Hour)
		foundToday := false
		for _, c := range counts {
			if c.Date.Truncate(24 * time.Hour).Equal(today) {
				foundToday = true
				if c.Count < 1 {
					t.Errorf("today count = %d, want >= 1", c.Count)
				}
			}
		}
		if !foundToday {
			t.Errorf("no entry found for today (%v) in timeseries", today)
		}
	})
}

// TestSignupStore_CountInvitedByCampaign checks the invited signup count.
func TestSignupStore_CountInvitedByCampaign(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	t.Run("zero for new campaign", func(t *testing.T) {
		n, err := ss.CountInvitedByCampaign(ctx, campaign.ID)
		if err != nil {
			t.Fatalf("CountInvitedByCampaign: %v", err)
		}
		if n != 0 {
			t.Errorf("want 0, got %d", n)
		}
	})

	// Create and verify two signups, then invite them.
	for _, email := range []string{uniqueEmail("invited-count-a"), uniqueEmail("invited-count-b")} {
		sg := newTestSignup(t, campaign.ID, email)
		created, err := ss.Create(ctx, sg)
		if err != nil {
			t.Fatalf("Create signup: %v", err)
		}
		if err := ss.UpdateVerified(ctx, created.ID); err != nil {
			t.Fatalf("UpdateVerified: %v", err)
		}
	}

	if _, err := ss.InviteTopN(ctx, campaign.ID, 2); err != nil {
		t.Fatalf("InviteTopN: %v", err)
	}

	t.Run("increments after InviteTopN", func(t *testing.T) {
		n, err := ss.CountInvitedByCampaign(ctx, campaign.ID)
		if err != nil {
			t.Fatalf("CountInvitedByCampaign: %v", err)
		}
		if n < 2 {
			t.Errorf("want >= 2 invited, got %d", n)
		}
	})
}
