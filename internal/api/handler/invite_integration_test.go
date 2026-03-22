//go:build integration

package handler_test

import (
	"context"
	"net/http"
	"testing"

	"github.com/google/uuid"
)

// inviteTokenForSignup is a test helper that creates a campaign, creates+verifies
// a signup, invites it, and returns the invite token and server.
func setupInvitedSignup(t *testing.T) (*testServer, string, string) {
	t.Helper()
	ts := newTestServer(t)
	accountKey, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Invite Token Test"))

	// Activate the campaign so signups can be created.
	auth := map[string]string{"Authorization": "Bearer " + accountKey}
	resp := ts.do(t, http.MethodPatch, "/api/v1/campaigns/"+campaignID,
		map[string]any{"status": "active"}, auth)
	discard(resp)

	// Create a signup.
	email := "invitee-" + uuid.New().String()[:8] + "@example.com"
	resp = ts.doSignup(t, campaignID, map[string]any{"email": email}, nil)
	discard(resp)

	// Verify the signup.
	token := ts.verificationToken(t, campaignID, email)
	resp = ts.do(t, http.MethodGet, "/api/v1/verify/"+token, nil, nil)
	discard(resp)

	// Invite the signup.
	resp = ts.do(t, http.MethodPost, "/api/v1/campaigns/"+campaignID+"/signups/invite",
		map[string]any{"count": 1}, auth)
	if resp.StatusCode != http.StatusOK {
		discard(resp)
		t.Fatalf("invite signups: status = %d, want 200", resp.StatusCode)
	}
	discard(resp)

	// Fetch the invite token from the DB.
	sg, err := ts.signups.GetByCampaignAndEmail(context.Background(),
		uuid.MustParse(campaignID), email)
	if err != nil {
		t.Fatalf("fetching invited signup: %v", err)
	}
	if sg.InviteToken == nil {
		t.Fatalf("signup has no invite token after InviteTopN")
	}
	return ts, *sg.InviteToken, campaignID
}

// ── GET /api/v1/invites/{token} ───────────────────────────────────────────────

func TestGetInviteToken_Active(t *testing.T) {
	ts, token, _ := setupInvitedSignup(t)

	resp := ts.do(t, http.MethodGet, "/api/v1/invites/"+token, nil, nil)
	if resp.StatusCode != http.StatusOK {
		discard(resp)
		t.Fatalf("status = %d, want 200", resp.StatusCode)
	}

	var result map[string]any
	decode(t, resp, &result)

	if result["signup_id"] == nil {
		t.Error("expected signup_id in response")
	}
	if result["campaign_id"] == nil {
		t.Error("expected campaign_id in response")
	}
	if result["email"] == nil {
		t.Error("expected email in response")
	}
	if result["invited_at"] == nil {
		t.Error("expected invited_at in response")
	}
	if got := result["status"].(string); got != "active" {
		t.Errorf("status = %q, want active", got)
	}
	if result["redeemed_at"] != nil {
		t.Error("expected redeemed_at to be nil for active token")
	}
}

func TestGetInviteToken_Redeemed(t *testing.T) {
	ts, token, _ := setupInvitedSignup(t)

	// Redeem first.
	resp := ts.do(t, http.MethodPost, "/api/v1/invites/"+token+"/redeem", nil, nil)
	if resp.StatusCode != http.StatusOK {
		discard(resp)
		t.Fatalf("redeem: status = %d, want 200", resp.StatusCode)
	}
	discard(resp)

	// Now GET should show redeemed.
	resp = ts.do(t, http.MethodGet, "/api/v1/invites/"+token, nil, nil)
	if resp.StatusCode != http.StatusOK {
		discard(resp)
		t.Fatalf("get after redeem: status = %d, want 200", resp.StatusCode)
	}

	var result map[string]any
	decode(t, resp, &result)

	if got := result["status"].(string); got != "redeemed" {
		t.Errorf("status = %q, want redeemed", got)
	}
	if result["redeemed_at"] == nil {
		t.Error("expected redeemed_at to be set for redeemed token")
	}
}

func TestGetInviteToken_NotFound(t *testing.T) {
	ts := newTestServer(t)

	resp := ts.do(t, http.MethodGet, "/api/v1/invites/nonexistenttoken", nil, nil)
	if resp.StatusCode != http.StatusNotFound {
		discard(resp)
		t.Fatalf("status = %d, want 404", resp.StatusCode)
	}
	discard(resp)
}

// ── POST /api/v1/invites/{token}/redeem ──────────────────────────────────────

func TestRedeemInviteToken_HappyPath(t *testing.T) {
	ts, token, _ := setupInvitedSignup(t)

	resp := ts.do(t, http.MethodPost, "/api/v1/invites/"+token+"/redeem", nil, nil)
	if resp.StatusCode != http.StatusOK {
		discard(resp)
		t.Fatalf("status = %d, want 200", resp.StatusCode)
	}

	var result map[string]any
	decode(t, resp, &result)

	if got := result["status"].(string); got != "redeemed" {
		t.Errorf("status = %q, want redeemed", got)
	}
	if result["redeemed_at"] == nil {
		t.Error("expected redeemed_at to be set")
	}
	if result["signup_id"] == nil {
		t.Error("expected signup_id in response")
	}
}

func TestRedeemInviteToken_Idempotent(t *testing.T) {
	ts, token, _ := setupInvitedSignup(t)

	// First redeem.
	resp := ts.do(t, http.MethodPost, "/api/v1/invites/"+token+"/redeem", nil, nil)
	if resp.StatusCode != http.StatusOK {
		discard(resp)
		t.Fatalf("first redeem: status = %d, want 200", resp.StatusCode)
	}
	var first map[string]any
	decode(t, resp, &first)

	// Second redeem — should return 200 with same redeemed_at.
	resp = ts.do(t, http.MethodPost, "/api/v1/invites/"+token+"/redeem", nil, nil)
	if resp.StatusCode != http.StatusOK {
		discard(resp)
		t.Fatalf("second redeem: status = %d, want 200", resp.StatusCode)
	}
	var second map[string]any
	decode(t, resp, &second)

	if first["redeemed_at"] != second["redeemed_at"] {
		t.Errorf("redeemed_at changed on second call: %v vs %v",
			first["redeemed_at"], second["redeemed_at"])
	}
	if got := second["status"].(string); got != "redeemed" {
		t.Errorf("second status = %q, want redeemed", got)
	}
}

func TestRedeemInviteToken_NotFound(t *testing.T) {
	ts := newTestServer(t)

	resp := ts.do(t, http.MethodPost, "/api/v1/invites/bogustoken/redeem", nil, nil)
	if resp.StatusCode != http.StatusNotFound {
		discard(resp)
		t.Fatalf("status = %d, want 404", resp.StatusCode)
	}
	discard(resp)
}
