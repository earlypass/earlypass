//go:build integration

package handler_test

import (
	"net/http"
	"testing"
)

// ── UpdateCampaign ───────────────────────────────────────────────────────────

func TestIntegration_UpdateCampaign_HappyPath(t *testing.T) {
	ts := newTestServer(t)
	accountKey, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Update Test"))
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	resp := ts.do(t, http.MethodPatch, "/api/v1/campaigns/"+campaignID,
		map[string]any{
			"status":   "paused",
			"settings": map[string]any{"product_url": "https://example.com"},
		}, auth)
	if resp.StatusCode != http.StatusOK {
		discard(resp)
		t.Fatalf("status = %d, want 200", resp.StatusCode)
	}

	var body map[string]any
	decode(t, resp, &body)
	if body["status"].(string) != "paused" {
		t.Errorf("status = %q, want paused", body["status"])
	}
}

func TestIntegration_UpdateCampaign_NoAuth(t *testing.T) {
	ts := newTestServer(t)
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Update NoAuth"))

	resp := ts.do(t, http.MethodPatch, "/api/v1/campaigns/"+campaignID,
		map[string]any{"status": "paused"}, nil)
	defer discard(resp)

	if resp.StatusCode != http.StatusUnauthorized {
		t.Fatalf("status = %d, want 401", resp.StatusCode)
	}
}

func TestIntegration_UpdateCampaign_WrongAccount(t *testing.T) {
	ts := newTestServer(t)
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Update Cross-Account"))

	// A different account tries to update the campaign.
	otherKey := createAccountAndKey(t)
	auth := map[string]string{"Authorization": "Bearer " + otherKey}

	resp := ts.do(t, http.MethodPatch, "/api/v1/campaigns/"+campaignID,
		map[string]any{"status": "paused"}, auth)
	defer discard(resp)

	if resp.StatusCode != http.StatusForbidden {
		t.Fatalf("status = %d, want 403", resp.StatusCode)
	}
}

func TestIntegration_UpdateCampaign_InvalidProductURL(t *testing.T) {
	ts := newTestServer(t)
	accountKey, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Update Invalid URL"))
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	resp := ts.do(t, http.MethodPatch, "/api/v1/campaigns/"+campaignID,
		map[string]any{
			"settings": map[string]any{"product_url": "://bad url"},
		}, auth)
	defer discard(resp)

	if resp.StatusCode != http.StatusBadRequest {
		t.Fatalf("status = %d, want 400", resp.StatusCode)
	}
}

func TestIntegration_UpdateCampaign_NotFound(t *testing.T) {
	ts := newTestServer(t)
	accountKey := createAccountAndKey(t)
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	resp := ts.do(t, http.MethodPatch, "/api/v1/campaigns/00000000-0000-0000-0000-000000000000",
		map[string]any{"status": "paused"}, auth)
	defer discard(resp)

	if resp.StatusCode != http.StatusNotFound {
		t.Fatalf("status = %d, want 404", resp.StatusCode)
	}
}

func TestIntegration_UpdateCampaign_UpdatesName(t *testing.T) {
	ts := newTestServer(t)
	accountKey, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Name Change Test"))
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	newName := uniqueName("Updated Campaign Name")
	resp := ts.do(t, http.MethodPatch, "/api/v1/campaigns/"+campaignID,
		map[string]any{
			"name":     newName,
			"settings": map[string]any{"product_url": "https://example.com"},
		}, auth)
	if resp.StatusCode != http.StatusOK {
		discard(resp)
		t.Fatalf("status = %d, want 200", resp.StatusCode)
	}

	var body map[string]any
	decode(t, resp, &body)
	if body["name"].(string) != newName {
		t.Errorf("name = %q, want %q", body["name"], newName)
	}
}

// ── DeleteCampaign ───────────────────────────────────────────────────────────

func TestIntegration_DeleteCampaign_WrongAccount(t *testing.T) {
	ts := newTestServer(t)
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Delete Cross-Account"))

	otherKey := createAccountAndKey(t)
	auth := map[string]string{"Authorization": "Bearer " + otherKey}

	resp := ts.do(t, http.MethodDelete, "/api/v1/campaigns/"+campaignID, nil, auth)
	defer discard(resp)

	if resp.StatusCode != http.StatusForbidden {
		t.Fatalf("status = %d, want 403", resp.StatusCode)
	}
}

// ── GetCampaign ──────────────────────────────────────────────────────────────

func TestIntegration_GetCampaign_WrongAccount(t *testing.T) {
	ts := newTestServer(t)
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Get Cross-Account"))

	otherKey := createAccountAndKey(t)
	auth := map[string]string{"Authorization": "Bearer " + otherKey}

	resp := ts.do(t, http.MethodGet, "/api/v1/campaigns/"+campaignID, nil, auth)
	defer discard(resp)

	if resp.StatusCode != http.StatusForbidden {
		t.Fatalf("status = %d, want 403", resp.StatusCode)
	}
}

// ── GetCampaignStats ─────────────────────────────────────────────────────────

func TestIntegration_GetCampaignStats_NoAuth(t *testing.T) {
	ts := newTestServer(t)
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Stats NoAuth"))

	resp := ts.do(t, http.MethodGet, "/api/v1/campaigns/"+campaignID+"/stats", nil, nil)
	defer discard(resp)

	if resp.StatusCode != http.StatusUnauthorized {
		t.Fatalf("status = %d, want 401", resp.StatusCode)
	}
}

func TestIntegration_GetCampaignStats_WrongAccount(t *testing.T) {
	ts := newTestServer(t)
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Stats Cross-Account"))

	otherKey := createAccountAndKey(t)
	auth := map[string]string{"Authorization": "Bearer " + otherKey}

	resp := ts.do(t, http.MethodGet, "/api/v1/campaigns/"+campaignID+"/stats", nil, auth)
	defer discard(resp)

	if resp.StatusCode != http.StatusForbidden {
		t.Fatalf("status = %d, want 403", resp.StatusCode)
	}
}

func TestIntegration_GetCampaignStats_NotFound(t *testing.T) {
	ts := newTestServer(t)
	accountKey := createAccountAndKey(t)
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	resp := ts.do(t, http.MethodGet, "/api/v1/campaigns/00000000-0000-0000-0000-000000000000/stats", nil, auth)
	defer discard(resp)

	if resp.StatusCode != http.StatusNotFound {
		t.Fatalf("status = %d, want 404", resp.StatusCode)
	}
}

// ── CreateCampaign conflict ───────────────────────────────────────────────────

func TestIntegration_CreateCampaign_Conflict(t *testing.T) {
	ts := newTestServer(t)
	name := uniqueName("Conflict Campaign")
	accountKey, _, _ := createCampaignWithAuth(t, ts, name)
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	// Attempt to create a second campaign with the same name.
	resp := ts.do(t, http.MethodPost, "/api/v1/campaigns",
		map[string]any{"name": name}, auth)
	defer discard(resp)

	if resp.StatusCode != http.StatusConflict {
		t.Fatalf("status = %d, want 409", resp.StatusCode)
	}
}
