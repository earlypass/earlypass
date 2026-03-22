//go:build integration

package handler_test

import (
	"context"
	"net/http"
	"testing"
	"time"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/domain"
)

// --- auth tests ---

func TestRequestMagicLink(t *testing.T) {
	ts := newTestServer(t)

	t.Run("valid email returns 202", func(t *testing.T) {
		resp := ts.do(t, http.MethodPost, "/api/v1/auth/magic-link",
			map[string]string{"email": "valid@example.com"}, nil)
		discard(resp)
		if resp.StatusCode != http.StatusAccepted {
			t.Errorf("want 202, got %d", resp.StatusCode)
		}
	})

	t.Run("invalid email returns 400 or 422", func(t *testing.T) {
		resp := ts.do(t, http.MethodPost, "/api/v1/auth/magic-link",
			map[string]string{"email": "not-an-email"}, nil)
		discard(resp)
		// oapi-codegen validates email format at parse time → 400;
		// handler validation of malformed-but-parseable strings → 422.
		if resp.StatusCode != http.StatusBadRequest && resp.StatusCode != http.StatusUnprocessableEntity {
			t.Errorf("want 400 or 422, got %d", resp.StatusCode)
		}
	})
}

func TestVerifyMagicLink_RESTFlow(t *testing.T) {
	ts := newTestServer(t)
	ctx := context.Background()
	email := "verify-rest-" + uuid.New().String()[:8] + "@example.com"

	// Create token directly — simulates "email clicked".
	tok, err := domain.NewMagicLinkToken(email, nil, 15*time.Minute)
	if err != nil {
		t.Fatalf("NewMagicLinkToken: %v", err)
	}
	if err = sharedDB.MagicLinks().Create(ctx, tok); err != nil {
		t.Fatalf("Create magic link token: %v", err)
	}

	// Verify → should return 200 with API key.
	resp := ts.do(t, http.MethodGet, "/api/v1/auth/verify?token="+tok.Token, nil, nil)
	var body struct {
		Account *struct {
			Email string `json:"email"`
		} `json:"account"`
		APIKey *string `json:"api_key"`
		Note   *string `json:"note"`
	}
	decode(t, resp, &body)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("want 200, got %d", resp.StatusCode)
	}
	if body.APIKey == nil || *body.APIKey == "" {
		t.Error("want non-empty api_key in response")
	}
	if body.Account == nil || body.Account.Email != email {
		t.Errorf("want account.email %q", email)
	}
	if body.Note == nil || *body.Note == "" {
		t.Error("want non-empty note")
	}

	// Second verify with same token → 400 (single-use).
	resp2 := ts.do(t, http.MethodGet, "/api/v1/auth/verify?token="+tok.Token, nil, nil)
	discard(resp2)
	if resp2.StatusCode != http.StatusBadRequest {
		t.Errorf("want 400 on second use, got %d", resp2.StatusCode)
	}
}

func TestVerifyMagicLink_Errors(t *testing.T) {
	ts := newTestServer(t)
	ctx := context.Background()

	t.Run("unknown token returns 400", func(t *testing.T) {
		resp := ts.do(t, http.MethodGet, "/api/v1/auth/verify?token=unknowntoken", nil, nil)
		discard(resp)
		if resp.StatusCode != http.StatusBadRequest {
			t.Errorf("want 400, got %d", resp.StatusCode)
		}
	})

	t.Run("expired token returns 400", func(t *testing.T) {
		email := "expired-" + uuid.New().String()[:8] + "@example.com"
		tok, _ := domain.NewMagicLinkToken(email, nil, -1*time.Second)
		_ = sharedDB.MagicLinks().Create(ctx, tok)

		resp := ts.do(t, http.MethodGet, "/api/v1/auth/verify?token="+tok.Token, nil, nil)
		discard(resp)
		if resp.StatusCode != http.StatusBadRequest {
			t.Errorf("want 400 for expired token, got %d", resp.StatusCode)
		}
	})

	t.Run("already-used token returns 400", func(t *testing.T) {
		email := "used-" + uuid.New().String()[:8] + "@example.com"
		tok, _ := domain.NewMagicLinkToken(email, nil, 15*time.Minute)
		_ = sharedDB.MagicLinks().Create(ctx, tok)
		_ = sharedDB.MagicLinks().MarkUsed(ctx, tok.Token, time.Now())

		resp := ts.do(t, http.MethodGet, "/api/v1/auth/verify?token="+tok.Token, nil, nil)
		discard(resp)
		if resp.StatusCode != http.StatusBadRequest {
			t.Errorf("want 400 for used token, got %d", resp.StatusCode)
		}
	})
}

// --- account tests ---

func TestGetMe(t *testing.T) {
	ts := newTestServer(t)
	apiKey := createAccountAndKey(t)

	t.Run("with valid account key returns 200", func(t *testing.T) {
		resp := ts.do(t, http.MethodGet, "/api/v1/accounts/me", nil,
			map[string]string{"Authorization": "Bearer " + apiKey})
		var body struct {
			Email string `json:"email"`
		}
		decode(t, resp, &body)
		if resp.StatusCode != http.StatusOK {
			t.Errorf("want 200, got %d", resp.StatusCode)
		}
		if body.Email == "" {
			t.Error("want non-empty email")
		}
	})

	t.Run("without token returns 401", func(t *testing.T) {
		resp := ts.do(t, http.MethodGet, "/api/v1/accounts/me", nil, nil)
		discard(resp)
		if resp.StatusCode != http.StatusUnauthorized {
			t.Errorf("want 401, got %d", resp.StatusCode)
		}
	})
}

func TestCreateAndListAPIKeys(t *testing.T) {
	ts := newTestServer(t)
	apiKey := createAccountAndKey(t)
	auth := map[string]string{"Authorization": "Bearer " + apiKey}

	t.Run("create returns key once", func(t *testing.T) {
		resp := ts.do(t, http.MethodPost, "/api/v1/accounts/me/api-keys",
			map[string]string{"name": "My Key"}, auth)
		var body struct {
			ID     string `json:"id"`
			Name   string `json:"name"`
			APIKey string `json:"api_key"`
		}
		decode(t, resp, &body)
		if resp.StatusCode != http.StatusCreated {
			t.Errorf("want 201, got %d", resp.StatusCode)
		}
		if body.APIKey == "" {
			t.Error("want non-empty api_key")
		}
		if body.Name != "My Key" {
			t.Errorf("want name %q, got %q", "My Key", body.Name)
		}

		// New key must also work as auth.
		resp2 := ts.do(t, http.MethodGet, "/api/v1/accounts/me", nil,
			map[string]string{"Authorization": "Bearer " + body.APIKey})
		discard(resp2)
		if resp2.StatusCode != http.StatusOK {
			t.Errorf("new API key auth: want 200, got %d", resp2.StatusCode)
		}
	})

	t.Run("list returns keys without raw values", func(t *testing.T) {
		resp := ts.do(t, http.MethodGet, "/api/v1/accounts/me/api-keys", nil, auth)
		var body []map[string]any
		decode(t, resp, &body)
		if resp.StatusCode != http.StatusOK {
			t.Errorf("want 200, got %d", resp.StatusCode)
		}
		if len(body) == 0 {
			t.Error("want at least one key in list")
		}
		// api_key must not be present in list response.
		for _, k := range body {
			if _, ok := k["api_key"]; ok {
				t.Error("list response must not include raw api_key values")
			}
		}
	})
}

func TestRevokeAPIKey(t *testing.T) {
	ts := newTestServer(t)
	apiKey := createAccountAndKey(t)
	auth := map[string]string{"Authorization": "Bearer " + apiKey}

	// Create a second key to revoke.
	resp := ts.do(t, http.MethodPost, "/api/v1/accounts/me/api-keys",
		map[string]string{"name": "Revoke Me"}, auth)
	var created struct {
		ID     string `json:"id"`
		APIKey string `json:"api_key"`
	}
	decode(t, resp, &created)

	t.Run("revoke succeeds with 204", func(t *testing.T) {
		resp := ts.do(t, http.MethodDelete, "/api/v1/accounts/me/api-keys/"+created.ID, nil, auth)
		discard(resp)
		if resp.StatusCode != http.StatusNoContent {
			t.Errorf("want 204, got %d", resp.StatusCode)
		}
	})

	t.Run("revoked key no longer authenticates", func(t *testing.T) {
		resp := ts.do(t, http.MethodGet, "/api/v1/accounts/me", nil,
			map[string]string{"Authorization": "Bearer " + created.APIKey})
		discard(resp)
		if resp.StatusCode != http.StatusUnauthorized {
			t.Errorf("want 401 for revoked key, got %d", resp.StatusCode)
		}
	})

	t.Run("revoke unknown key returns 404", func(t *testing.T) {
		resp := ts.do(t, http.MethodDelete, "/api/v1/accounts/me/api-keys/"+uuid.New().String(), nil, auth)
		discard(resp)
		if resp.StatusCode != http.StatusNotFound && resp.StatusCode != http.StatusForbidden {
			t.Errorf("want 404 or 403, got %d", resp.StatusCode)
		}
	})
}

func TestListMyCampaigns(t *testing.T) {
	ts := newTestServer(t)
	apiKey := createAccountAndKey(t)
	auth := map[string]string{"Authorization": "Bearer " + apiKey}

	// Create a campaign using the account key (should auto-link account_id).
	resp := ts.do(t, http.MethodPost, "/api/v1/campaigns",
		map[string]string{"name": uniqueName("My Campaign")}, auth)
	discard(resp)
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("want 201 creating campaign, got %d", resp.StatusCode)
	}

	resp = ts.do(t, http.MethodGet, "/api/v1/accounts/me/campaigns", nil, auth)
	var body struct {
		Campaigns []struct {
			ID string `json:"id"`
		} `json:"campaigns"`
	}
	decode(t, resp, &body)

	if resp.StatusCode != http.StatusOK {
		t.Errorf("want 200, got %d", resp.StatusCode)
	}
	if len(body.Campaigns) == 0 {
		t.Error("want at least one campaign in list")
	}
}

// --- test helpers ---

// createAccountAndKey creates a fresh account via magic link and returns its API key.
// Uses the store directly to avoid depending on email delivery.
func createAccountAndKey(t *testing.T) string {
	t.Helper()
	ts := newTestServer(t)
	ctx := context.Background()
	email := "acct-" + uuid.New().String()[:8] + "@example.com"

	tok, err := domain.NewMagicLinkToken(email, nil, 15*time.Minute)
	if err != nil {
		t.Fatalf("NewMagicLinkToken: %v", err)
	}
	if err = sharedDB.MagicLinks().Create(ctx, tok); err != nil {
		t.Fatalf("Create magic link: %v", err)
	}

	resp := ts.do(t, http.MethodGet, "/api/v1/auth/verify?token="+tok.Token, nil, nil)
	var body struct {
		APIKey *string `json:"api_key"`
	}
	decode(t, resp, &body)
	if body.APIKey == nil || *body.APIKey == "" {
		t.Fatal("want api_key in verify response")
	}
	return *body.APIKey
}
