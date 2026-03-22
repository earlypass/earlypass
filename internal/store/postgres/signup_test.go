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

func TestSignupStore_Create(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	t.Run("happy path", func(t *testing.T) {
		sg := newTestSignup(t, campaign.ID, "user@example.com")
		if _, err := ss.Create(ctx, sg); err != nil {
			t.Fatalf("Create: %v", err)
		}
	})

	t.Run("duplicate email in same campaign returns ErrConflict", func(t *testing.T) {
		sg1 := newTestSignup(t, campaign.ID, "dup@example.com")
		if _, err := ss.Create(ctx, sg1); err != nil {
			t.Fatalf("first Create: %v", err)
		}

		sg2 := newTestSignup(t, campaign.ID, "dup@example.com")
		_, err := ss.Create(ctx, sg2)
		if !errors.Is(err, store.ErrConflict) {
			t.Errorf("want ErrConflict, got %v", err)
		}
	})
}

func TestSignupStore_GetByID(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	t.Run("found", func(t *testing.T) {
		sg := newTestSignup(t, campaign.ID, "getbyid@example.com")
		if _, err := ss.Create(ctx, sg); err != nil {
			t.Fatalf("Create: %v", err)
		}

		got, err := ss.GetByID(ctx, sg.ID)
		if err != nil {
			t.Fatalf("GetByID: %v", err)
		}
		if got.ID != sg.ID {
			t.Errorf("ID = %v, want %v", got.ID, sg.ID)
		}
		if got.Email != sg.Email {
			t.Errorf("Email = %q, want %q", got.Email, sg.Email)
		}
		if got.ReferralCode != sg.ReferralCode {
			t.Errorf("ReferralCode = %q, want %q", got.ReferralCode, sg.ReferralCode)
		}
	})

	t.Run("not found returns ErrNotFound", func(t *testing.T) {
		_, err := ss.GetByID(ctx, uuid.New())
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestSignupStore_GetByCampaignAndEmail(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	sg := newTestSignup(t, campaign.ID, "lookup@example.com")
	if _, err := ss.Create(ctx, sg); err != nil {
		t.Fatalf("Create: %v", err)
	}

	t.Run("found", func(t *testing.T) {
		got, err := ss.GetByCampaignAndEmail(ctx, campaign.ID, "lookup@example.com")
		if err != nil {
			t.Fatalf("GetByCampaignAndEmail: %v", err)
		}
		if got.ID != sg.ID {
			t.Errorf("ID = %v, want %v", got.ID, sg.ID)
		}
	})

	t.Run("wrong email returns ErrNotFound", func(t *testing.T) {
		_, err := ss.GetByCampaignAndEmail(ctx, campaign.ID, "no@example.com")
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestSignupStore_GetByCampaignAndReferralCode(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	sg := newTestSignup(t, campaign.ID, "refcode@example.com")
	if _, err := ss.Create(ctx, sg); err != nil {
		t.Fatalf("Create: %v", err)
	}

	t.Run("found", func(t *testing.T) {
		got, err := ss.GetByCampaignAndReferralCode(ctx, campaign.ID, sg.ReferralCode)
		if err != nil {
			t.Fatalf("GetByCampaignAndReferralCode: %v", err)
		}
		if got.ID != sg.ID {
			t.Errorf("ID = %v, want %v", got.ID, sg.ID)
		}
	})

	t.Run("wrong code returns ErrNotFound", func(t *testing.T) {
		_, err := ss.GetByCampaignAndReferralCode(ctx, campaign.ID, "XXXXXXXX")
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestSignupStore_ListByCampaign(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	for i, email := range []string{"a@example.com", "b@example.com", "c@example.com"} {
		sg := newTestSignup(t, campaign.ID, email)
		// BasePosition is assigned atomically by the database.
		// Verify the positions after creation.
		created, err := ss.Create(ctx, sg)
		if err != nil {
			t.Fatalf("Create signup %d: %v", i, err)
		}
		// Verify the position was assigned correctly.
		if created.BasePosition != i+1 {
			t.Errorf("position = %d, want %d", created.BasePosition, i+1)
		}
	}

	t.Run("returns all in position order", func(t *testing.T) {
		list, err := ss.ListByCampaign(ctx, campaign.ID)
		if err != nil {
			t.Fatalf("ListByCampaign: %v", err)
		}
		if len(list) != 3 {
			t.Fatalf("len = %d, want 3", len(list))
		}
		for i, sg := range list {
			if sg.BasePosition != i+1 {
				t.Errorf("[%d] BasePosition = %d, want %d", i, sg.BasePosition, i+1)
			}
		}
	})

	t.Run("empty campaign returns empty slice", func(t *testing.T) {
		emptyCampaign := newTestCampaign(t)
		if err := cs.Create(ctx, emptyCampaign); err != nil {
			t.Fatalf("Create empty campaign: %v", err)
		}

		list, err := ss.ListByCampaign(ctx, emptyCampaign.ID)
		if err != nil {
			t.Fatalf("ListByCampaign: %v", err)
		}
		if len(list) != 0 {
			t.Errorf("expected empty list, got %d items", len(list))
		}
	})
}

func TestSignupStore_CountByCampaign(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	count, err := ss.CountByCampaign(ctx, campaign.ID)
	if err != nil {
		t.Fatalf("CountByCampaign: %v", err)
	}
	if count != 0 {
		t.Errorf("count = %d, want 0", count)
	}

	sg := newTestSignup(t, campaign.ID, "count@example.com")
	if _, err = ss.Create(ctx, sg); err != nil {
		t.Fatalf("Create: %v", err)
	}

	count, err = ss.CountByCampaign(ctx, campaign.ID)
	if err != nil {
		t.Fatalf("CountByCampaign: %v", err)
	}
	if count != 1 {
		t.Errorf("count = %d, want 1", count)
	}
}

func TestSignupStore_CountByCampaign_ExcludesInvited(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	// Create and verify 2 signups so they are eligible for invites.
	for _, email := range []string{"cnt-inv-a@example.com", "cnt-inv-b@example.com"} {
		sg := newTestSignup(t, campaign.ID, email)
		created, err := ss.Create(ctx, sg)
		if err != nil {
			t.Fatalf("Create signup: %v", err)
		}
		if err := ss.UpdateVerified(ctx, created.ID); err != nil {
			t.Fatalf("UpdateVerified: %v", err)
		}
	}

	count, err := ss.CountByCampaign(ctx, campaign.ID)
	if err != nil {
		t.Fatalf("CountByCampaign: %v", err)
	}
	if count != 2 {
		t.Errorf("before invite: count = %d, want 2", count)
	}

	// Invite top 1 — count should drop to 1.
	if _, err := ss.InviteTopN(ctx, campaign.ID, 1); err != nil {
		t.Fatalf("InviteTopN: %v", err)
	}

	count, err = ss.CountByCampaign(ctx, campaign.ID)
	if err != nil {
		t.Fatalf("CountByCampaign after invite: %v", err)
	}
	if count != 1 {
		t.Errorf("after invite: count = %d, want 1", count)
	}
}

func TestSignupStore_GetAdjustedPosition(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	// Create and verify 3 signups (A at pos 1, B at pos 2, C at pos 3).
	emails := []string{"adj-a@example.com", "adj-b@example.com", "adj-c@example.com"}
	ids := make([]uuid.UUID, len(emails))
	for i, email := range emails {
		sg := newTestSignup(t, campaign.ID, email)
		created, err := ss.Create(ctx, sg)
		if err != nil {
			t.Fatalf("Create signup %s: %v", email, err)
		}
		if err := ss.UpdateVerified(ctx, created.ID); err != nil {
			t.Fatalf("UpdateVerified %s: %v", email, err)
		}
		ids[i] = created.ID
	}

	t.Run("before any invites positions are 1,2,3", func(t *testing.T) {
		for i, want := range []int{1, 2, 3} {
			pos, err := ss.GetAdjustedPosition(ctx, campaign.ID, ids[i])
			if err != nil {
				t.Fatalf("GetAdjustedPosition[%d]: %v", i, err)
			}
			if pos != want {
				t.Errorf("signup[%d]: adjusted position = %d, want %d", i, pos, want)
			}
		}
	})

	// Invite A (position 1) — B should become 1, C should become 2.
	if _, err := ss.InviteTopN(ctx, campaign.ID, 1); err != nil {
		t.Fatalf("InviteTopN: %v", err)
	}

	t.Run("after inviting A, B is 1 and C is 2", func(t *testing.T) {
		posB, err := ss.GetAdjustedPosition(ctx, campaign.ID, ids[1])
		if err != nil {
			t.Fatalf("GetAdjustedPosition B: %v", err)
		}
		if posB != 1 {
			t.Errorf("B adjusted position = %d, want 1", posB)
		}

		posC, err := ss.GetAdjustedPosition(ctx, campaign.ID, ids[2])
		if err != nil {
			t.Fatalf("GetAdjustedPosition C: %v", err)
		}
		if posC != 2 {
			t.Errorf("C adjusted position = %d, want 2", posC)
		}
	})
}

func TestSignupStore_ListLeaderboard_ExcludesInvited(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	var createdIDs []uuid.UUID
	for _, email := range []string{"lb-inv-a@example.com", "lb-inv-b@example.com", "lb-inv-c@example.com"} {
		sg := newTestSignup(t, campaign.ID, email)
		created, err := ss.Create(ctx, sg)
		if err != nil {
			t.Fatalf("Create signup: %v", err)
		}
		if err := ss.UpdateVerified(ctx, created.ID); err != nil {
			t.Fatalf("UpdateVerified: %v", err)
		}
		createdIDs = append(createdIDs, created.ID)
	}

	entries, err := ss.ListLeaderboard(ctx, campaign.ID, 10)
	if err != nil {
		t.Fatalf("ListLeaderboard: %v", err)
	}
	if len(entries) != 3 {
		t.Fatalf("before invite: len = %d, want 3", len(entries))
	}

	// Invite top 1.
	invited, err := ss.InviteTopN(ctx, campaign.ID, 1)
	if err != nil {
		t.Fatalf("InviteTopN: %v", err)
	}
	if len(invited) != 1 {
		t.Fatalf("invited count = %d, want 1", len(invited))
	}
	invitedID := invited[0].ID

	entries, err = ss.ListLeaderboard(ctx, campaign.ID, 10)
	if err != nil {
		t.Fatalf("ListLeaderboard after invite: %v", err)
	}
	if len(entries) != 2 {
		t.Fatalf("after invite: len = %d, want 2", len(entries))
	}
	for _, e := range entries {
		if e.ID == invitedID {
			t.Errorf("invited signup %s should not appear in leaderboard", invitedID)
		}
	}
}

func TestSignupStore_NextPosition(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	t.Run("empty campaign returns 1", func(t *testing.T) {
		pos, err := ss.NextPosition(ctx, campaign.ID)
		if err != nil {
			t.Fatalf("NextPosition: %v", err)
		}
		if pos != 1 {
			t.Errorf("pos = %d, want 1", pos)
		}
	})

	t.Run("increments after insert", func(t *testing.T) {
		sg := newTestSignup(t, campaign.ID, "pos@example.com")
		// BasePosition is assigned atomically by the database.
		_, err := ss.Create(ctx, sg)
		if err != nil {
			t.Fatalf("Create: %v", err)
		}

		pos, err := ss.NextPosition(ctx, campaign.ID)
		if err != nil {
			t.Fatalf("NextPosition: %v", err)
		}
		if pos != 2 {
			t.Errorf("pos = %d, want 2", pos)
		}
	})
}

func TestSignupStore_UpdateVerified(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	token := "mytoken123"
	sg := newTestSignup(t, campaign.ID, "verify@example.com")
	sg.VerificationToken = &token
	if _, err := ss.Create(ctx, sg); err != nil {
		t.Fatalf("Create: %v", err)
	}

	if err := ss.UpdateVerified(ctx, sg.ID); err != nil {
		t.Fatalf("UpdateVerified: %v", err)
	}

	got, err := ss.GetByID(ctx, sg.ID)
	if err != nil {
		t.Fatalf("GetByID: %v", err)
	}
	if !got.EmailVerified {
		t.Error("expected EmailVerified = true")
	}
	if got.VerificationToken != nil {
		t.Error("expected VerificationToken = nil after verification")
	}
	if got.Status != domain.SignupStatusVerified {
		t.Errorf("Status = %q, want verified", got.Status)
	}

	t.Run("non-existent returns ErrNotFound", func(t *testing.T) {
		err := ss.UpdateVerified(ctx, uuid.New())
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestSignupStore_UpdateReferralCount(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	sg := newTestSignup(t, campaign.ID, "refcount@example.com")
	if _, err := ss.Create(ctx, sg); err != nil {
		t.Fatalf("Create: %v", err)
	}

	if err := ss.UpdateReferralCount(ctx, sg.ID, 3, 3); err != nil {
		t.Fatalf("UpdateReferralCount: %v", err)
	}

	got, err := ss.GetByID(ctx, sg.ID)
	if err != nil {
		t.Fatalf("GetByID: %v", err)
	}
	if got.ReferralCount != 3 {
		t.Errorf("ReferralCount = %d, want 3", got.ReferralCount)
	}
	if got.BonusPoints != 3 {
		t.Errorf("BonusPoints = %d, want 3", got.BonusPoints)
	}

	t.Run("non-existent returns ErrNotFound", func(t *testing.T) {
		err := ss.UpdateReferralCount(ctx, uuid.New(), 1, 1)
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestSignupStore_IncrementReferralCount(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	sg := newTestSignup(t, campaign.ID, "atomicref@example.com")
	if _, err := ss.Create(ctx, sg); err != nil {
		t.Fatalf("Create: %v", err)
	}

	t.Run("first increment", func(t *testing.T) {
		newCount, newBonus, err := ss.IncrementReferralCount(ctx, sg.ID, 2.0)
		if err != nil {
			t.Fatalf("IncrementReferralCount: %v", err)
		}
		if newCount != 1 {
			t.Errorf("newCount = %d, want 1", newCount)
		}
		// bonus_points = 1 * 2.0 = 2
		if newBonus != 2 {
			t.Errorf("newBonus = %d, want 2", newBonus)
		}
	})

	t.Run("second increment", func(t *testing.T) {
		newCount, newBonus, err := ss.IncrementReferralCount(ctx, sg.ID, 2.0)
		if err != nil {
			t.Fatalf("IncrementReferralCount: %v", err)
		}
		if newCount != 2 {
			t.Errorf("newCount = %d, want 2", newCount)
		}
		// bonus_points = 2 * 2.0 = 4
		if newBonus != 4 {
			t.Errorf("newBonus = %d, want 4", newBonus)
		}
	})

	t.Run("not found returns ErrNotFound", func(t *testing.T) {
		_, _, err := ss.IncrementReferralCount(ctx, uuid.New(), 1.0)
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

// --- fixture helpers ---

func newTestSignup(t *testing.T, campaignID uuid.UUID, email string) domain.Signup {
	t.Helper()
	code, err := domain.GenerateReferralCode()
	if err != nil {
		t.Fatalf("GenerateReferralCode: %v", err)
	}
	now := time.Now().UTC().Truncate(time.Millisecond)
	return domain.Signup{
		ID:           uuid.New(),
		CampaignID:   campaignID,
		Email:        email,
		ReferralCode: code,
		BasePosition: 0, // Database assigns atomically on Create
		IPAddress:    "127.0.0.1",
		Fingerprint:  "test-fingerprint",
		Status:       domain.SignupStatusPending,
		CreatedAt:    now,
		UpdatedAt:    now,
	}
}

// --- invite token tests ---

func TestInviteTopN_GeneratesTokens(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	// Create and verify two signups so they become eligible for InviteTopN.
	for i, email := range []string{uniqueEmail("token-gen-a"), uniqueEmail("token-gen-b")} {
		sg := newTestSignup(t, campaign.ID, email)
		created, err := ss.Create(ctx, sg)
		if err != nil {
			t.Fatalf("Create signup %d: %v", i, err)
		}
		if err = ss.UpdateVerified(ctx, created.ID); err != nil {
			t.Fatalf("UpdateVerified signup %d: %v", i, err)
		}
	}

	invited, err := ss.InviteTopN(ctx, campaign.ID, 2)
	if err != nil {
		t.Fatalf("InviteTopN: %v", err)
	}
	if len(invited) != 2 {
		t.Fatalf("invited count = %d, want 2", len(invited))
	}

	// All invited signups should have a non-nil, non-empty invite token.
	tokens := make(map[string]struct{})
	for _, sg := range invited {
		if sg.InviteToken == nil || *sg.InviteToken == "" {
			t.Errorf("signup %s: invite_token is nil or empty", sg.ID)
			continue
		}
		tokens[*sg.InviteToken] = struct{}{}
	}

	// Tokens must be unique.
	if len(tokens) != 2 {
		t.Errorf("expected 2 unique tokens, got %d", len(tokens))
	}
}

func TestGetByInviteToken(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	// Create a verified signup and invite it.
	sg := newTestSignup(t, campaign.ID, uniqueEmail("get-invite-token"))
	created, err := ss.Create(ctx, sg)
	if err != nil {
		t.Fatalf("Create: %v", err)
	}
	if err = ss.UpdateVerified(ctx, created.ID); err != nil {
		t.Fatalf("UpdateVerified: %v", err)
	}
	invited, err := ss.InviteTopN(ctx, campaign.ID, 1)
	if err != nil {
		t.Fatalf("InviteTopN: %v", err)
	}
	if len(invited) != 1 || invited[0].InviteToken == nil {
		t.Fatalf("expected 1 invited signup with token")
	}
	token := *invited[0].InviteToken

	t.Run("happy path returns active signup", func(t *testing.T) {
		got, err := ss.GetByInviteToken(ctx, token)
		if err != nil {
			t.Fatalf("GetByInviteToken: %v", err)
		}
		if got.ID != invited[0].ID {
			t.Errorf("ID = %v, want %v", got.ID, invited[0].ID)
		}
		if got.InviteTokenRedeemedAt != nil {
			t.Errorf("expected token not redeemed yet")
		}
	})

	t.Run("missing token returns ErrNotFound", func(t *testing.T) {
		_, err := ss.GetByInviteToken(ctx, "nonexistenttoken")
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})

	t.Run("returns redeemed signup without error", func(t *testing.T) {
		// Redeem first.
		_, err := ss.RedeemInviteToken(ctx, token)
		if err != nil {
			t.Fatalf("RedeemInviteToken: %v", err)
		}

		// GetByInviteToken should still return the signup (redeemed or not).
		got, err := ss.GetByInviteToken(ctx, token)
		if err != nil {
			t.Fatalf("GetByInviteToken after redeem: %v", err)
		}
		if got.InviteTokenRedeemedAt == nil {
			t.Errorf("expected redeemed_at to be set")
		}
	})
}

func TestRedeemInviteToken(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	// Create and invite a signup.
	sg := newTestSignup(t, campaign.ID, uniqueEmail("redeem-token"))
	created, err := ss.Create(ctx, sg)
	if err != nil {
		t.Fatalf("Create: %v", err)
	}
	if err = ss.UpdateVerified(ctx, created.ID); err != nil {
		t.Fatalf("UpdateVerified: %v", err)
	}
	invited, err := ss.InviteTopN(ctx, campaign.ID, 1)
	if err != nil {
		t.Fatalf("InviteTopN: %v", err)
	}
	if len(invited) != 1 || invited[0].InviteToken == nil {
		t.Fatalf("expected 1 invited signup with token")
	}
	token := *invited[0].InviteToken

	t.Run("happy path marks redeemed", func(t *testing.T) {
		redeemed, err := ss.RedeemInviteToken(ctx, token)
		if err != nil {
			t.Fatalf("RedeemInviteToken: %v", err)
		}
		if redeemed.InviteTokenRedeemedAt == nil {
			t.Errorf("expected invite_token_redeemed_at to be set")
		}
	})

	t.Run("idempotent — second call returns same redeemed_at", func(t *testing.T) {
		first, err := ss.RedeemInviteToken(ctx, token)
		if err != nil {
			t.Fatalf("first redeem: %v", err)
		}
		second, err := ss.RedeemInviteToken(ctx, token)
		if err != nil {
			t.Fatalf("second redeem: %v", err)
		}
		if first.InviteTokenRedeemedAt == nil || second.InviteTokenRedeemedAt == nil {
			t.Fatal("expected both to have redeemed_at")
		}
		if !first.InviteTokenRedeemedAt.Equal(*second.InviteTokenRedeemedAt) {
			t.Errorf("redeemed_at changed on second call: %v vs %v",
				first.InviteTokenRedeemedAt, second.InviteTokenRedeemedAt)
		}
	})

	t.Run("missing token returns ErrNotFound", func(t *testing.T) {
		_, err := ss.RedeemInviteToken(ctx, "bogustoken")
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestSignupStore_ListInvitedByCampaign(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ss := db.Signups()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	// Create and verify 3 signups, then invite all of them.
	emails := []string{
		uniqueEmail("list-inv-a"),
		uniqueEmail("list-inv-b"),
		uniqueEmail("list-inv-c"),
	}
	for _, email := range emails {
		sg := newTestSignup(t, campaign.ID, email)
		created, err := ss.Create(ctx, sg)
		if err != nil {
			t.Fatalf("Create signup %s: %v", email, err)
		}
		if err = ss.UpdateVerified(ctx, created.ID); err != nil {
			t.Fatalf("UpdateVerified %s: %v", email, err)
		}
	}
	invited, err := ss.InviteTopN(ctx, campaign.ID, 3)
	if err != nil {
		t.Fatalf("InviteTopN: %v", err)
	}
	if len(invited) != 3 {
		t.Fatalf("expected 3 invited signups, got %d", len(invited))
	}

	t.Run("no search returns all with invite_token populated", func(t *testing.T) {
		signups, total, err := ss.ListInvitedByCampaign(ctx, campaign.ID, 10, 0, "")
		if err != nil {
			t.Fatalf("ListInvitedByCampaign: %v", err)
		}
		if total != 3 {
			t.Errorf("total = %d, want 3", total)
		}
		if len(signups) != 3 {
			t.Errorf("len = %d, want 3", len(signups))
		}
		for _, sg := range signups {
			if sg.InviteToken == nil || *sg.InviteToken == "" {
				t.Errorf("signup %s: invite_token is nil or empty", sg.ID)
			}
		}
	})

	// Pick the first invited signup's token for search tests.
	token := *invited[0].InviteToken
	tokenPrefix := token[:8]

	t.Run("search by invite_token prefix returns matching signup", func(t *testing.T) {
		signups, total, err := ss.ListInvitedByCampaign(ctx, campaign.ID, 10, 0, tokenPrefix)
		if err != nil {
			t.Fatalf("ListInvitedByCampaign with search: %v", err)
		}
		if total != 1 {
			t.Errorf("total = %d, want 1", total)
		}
		if len(signups) != 1 {
			t.Fatalf("len = %d, want 1", len(signups))
		}
		if signups[0].ID != invited[0].ID {
			t.Errorf("got signup %v, want %v", signups[0].ID, invited[0].ID)
		}
	})

	t.Run("search by email prefix returns matching signup", func(t *testing.T) {
		// The first 8 chars of the first invited email are unique enough.
		emailPrefix := emails[0][:8]
		signups, total, err := ss.ListInvitedByCampaign(ctx, campaign.ID, 10, 0, emailPrefix)
		if err != nil {
			t.Fatalf("ListInvitedByCampaign email search: %v", err)
		}
		if total < 1 {
			t.Errorf("total = %d, want >= 1", total)
		}
		found := false
		for _, sg := range signups {
			if sg.Email == emails[0] {
				found = true
			}
		}
		if !found {
			t.Errorf("expected email %q in results", emails[0])
		}
	})

	t.Run("search with no match returns empty with total 0", func(t *testing.T) {
		signups, total, err := ss.ListInvitedByCampaign(ctx, campaign.ID, 10, 0, "zzznomatch")
		if err != nil {
			t.Fatalf("ListInvitedByCampaign no-match: %v", err)
		}
		if total != 0 {
			t.Errorf("total = %d, want 0", total)
		}
		if len(signups) != 0 {
			t.Errorf("len = %d, want 0", len(signups))
		}
	})

	t.Run("pagination limits results", func(t *testing.T) {
		signups, total, err := ss.ListInvitedByCampaign(ctx, campaign.ID, 1, 0, "")
		if err != nil {
			t.Fatalf("ListInvitedByCampaign paginated: %v", err)
		}
		if total != 3 {
			t.Errorf("total = %d, want 3 (full count regardless of page)", total)
		}
		if len(signups) != 1 {
			t.Errorf("len = %d, want 1 (limited by page size)", len(signups))
		}
	})
}
