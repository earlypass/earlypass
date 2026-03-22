package dashboard_test

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log/slog"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync"
	"testing"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/dashboard"
	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// ---------------------------------------------------------------------------
// Mock AccountAPIKeyStore
// ---------------------------------------------------------------------------

type mockAPIKeyStore struct {
	mu        sync.Mutex
	keys      []domain.AccountAPIKey
	createErr error
	listErr   error
	revokeErr error

	revokedIDs []uuid.UUID
}

func (m *mockAPIKeyStore) Create(_ context.Context, k domain.AccountAPIKey) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	if m.createErr != nil {
		return m.createErr
	}
	m.keys = append(m.keys, k)
	return nil
}

func (m *mockAPIKeyStore) GetByRawKey(_ context.Context, _ string) (domain.AccountAPIKey, error) {
	return domain.AccountAPIKey{}, store.ErrNotFound
}

func (m *mockAPIKeyStore) ListByAccount(_ context.Context, _ uuid.UUID) ([]domain.AccountAPIKey, error) {
	m.mu.Lock()
	defer m.mu.Unlock()
	if m.listErr != nil {
		return nil, m.listErr
	}
	out := make([]domain.AccountAPIKey, len(m.keys))
	copy(out, m.keys)
	return out, nil
}

func (m *mockAPIKeyStore) Revoke(_ context.Context, id uuid.UUID) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	if m.revokeErr != nil {
		return m.revokeErr
	}
	for i, k := range m.keys {
		if k.ID == id {
			now := time.Now()
			m.keys[i].RevokedAt = &now
			m.revokedIDs = append(m.revokedIDs, id)
			return nil
		}
	}
	return store.ErrNotFound
}

func (m *mockAPIKeyStore) TouchLastUsed(_ context.Context, _ uuid.UUID, _ time.Time) error {
	return nil
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

func newAPIKeyRequest(t *testing.T, d *dashboard.Dashboard, accountID uuid.UUID, method, path, slug string, body []byte) *http.Request {
	t.Helper()
	token, err := dashboard.IssueToken(accountID, []byte("test-secret"))
	if err != nil {
		t.Fatalf("IssueToken: %v", err)
	}

	var req *http.Request
	if body != nil {
		req = httptest.NewRequest(method, path, bytes.NewReader(body))
		req.Header.Set("Content-Type", "application/json")
	} else {
		req = httptest.NewRequest(method, path, nil)
	}
	req.AddCookie(&http.Cookie{Name: "ep_auth", Value: token})

	rctx := chi.NewRouteContext()
	rctx.URLParams.Add("slug", slug)
	// Extract id from path if present (e.g. /api-keys/{id})
	parts := strings.Split(path, "/")
	if len(parts) > 0 {
		rctx.URLParams.Add("id", parts[len(parts)-1])
	}
	req = req.WithContext(context.WithValue(req.Context(), chi.RouteCtxKey, rctx))

	var finalReq *http.Request
	mw := d.CookieAuthMiddleware(http.HandlerFunc(func(_ http.ResponseWriter, r *http.Request) {
		finalReq = r
	}))
	rr := httptest.NewRecorder()
	mw.ServeHTTP(rr, req)
	if finalReq == nil {
		t.Fatalf("CookieAuthMiddleware rejected the request (status %d)", rr.Code)
	}
	return finalReq
}

func newDashboardWithAPIKeys(accountID uuid.UUID, slug string, apiKeys *mockAPIKeyStore) *dashboard.Dashboard {
	campaign := domain.Campaign{
		ID:        uuid.New(),
		AccountID: accountID,
		Slug:      slug,
	}
	return &dashboard.Dashboard{
		JWTSecret: []byte("test-secret"),
		Campaigns: &mockCampaignStore{campaign: campaign},
		Signups:   &stubSignupStore{},
		APIKeys:   apiKeys,
		Logger:    slog.Default(),
	}
}

// ---------------------------------------------------------------------------
// ListAPIKeys tests
// ---------------------------------------------------------------------------

func TestListAPIKeys_ReturnsActiveKeys(t *testing.T) {
	t.Parallel()

	accountID := uuid.New()
	slug := "my-campaign"
	now := time.Now().UTC().Truncate(time.Second)
	revokedAt := now.Add(-1 * time.Hour)

	apiKeys := &mockAPIKeyStore{
		keys: []domain.AccountAPIKey{
			{ID: uuid.New(), AccountID: accountID, Name: "prod", CreatedAt: now},
			{ID: uuid.New(), AccountID: accountID, Name: "old", CreatedAt: now.Add(-time.Hour), RevokedAt: &revokedAt},
		},
	}
	d := newDashboardWithAPIKeys(accountID, slug, apiKeys)
	req := newAPIKeyRequest(t, d, accountID, http.MethodGet, fmt.Sprintf("/dashboard/api/%s/api-keys", slug), slug, nil)

	rr := httptest.NewRecorder()
	d.ListAPIKeys(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d: %s", rr.Code, rr.Body.String())
	}

	var result []map[string]any
	if err := json.Unmarshal(rr.Body.Bytes(), &result); err != nil {
		t.Fatalf("parsing response: %v", err)
	}
	if len(result) != 1 {
		t.Errorf("expected 1 active key, got %d", len(result))
	}
	if result[0]["name"] != "prod" {
		t.Errorf("unexpected key name: %v", result[0]["name"])
	}
}

// ---------------------------------------------------------------------------
// CreateAPIKey tests
// ---------------------------------------------------------------------------

func TestCreateAPIKey_HappyPath(t *testing.T) {
	t.Parallel()

	accountID := uuid.New()
	slug := "my-campaign"
	apiKeys := &mockAPIKeyStore{}
	d := newDashboardWithAPIKeys(accountID, slug, apiKeys)

	body, _ := json.Marshal(map[string]string{"name": "my key"})
	req := newAPIKeyRequest(t, d, accountID, http.MethodPost, fmt.Sprintf("/dashboard/api/%s/api-keys", slug), slug, body)

	rr := httptest.NewRecorder()
	d.CreateAPIKey(rr, req)

	if rr.Code != http.StatusCreated {
		t.Fatalf("expected 201, got %d: %s", rr.Code, rr.Body.String())
	}

	var resp map[string]any
	if err := json.Unmarshal(rr.Body.Bytes(), &resp); err != nil {
		t.Fatalf("parsing response: %v", err)
	}
	apiKey, ok := resp["api_key"].(string)
	if !ok || !strings.HasPrefix(apiKey, "ep_acc_") {
		t.Errorf("expected ep_acc_ prefixed api_key, got: %v", resp["api_key"])
	}
	if resp["name"] != "my key" {
		t.Errorf("unexpected name in response: %v", resp["name"])
	}
	if len(apiKeys.keys) != 1 {
		t.Errorf("expected 1 key persisted, got %d", len(apiKeys.keys))
	}
}

func TestCreateAPIKey_EmptyName_Returns400(t *testing.T) {
	t.Parallel()

	accountID := uuid.New()
	slug := "my-campaign"
	apiKeys := &mockAPIKeyStore{}
	d := newDashboardWithAPIKeys(accountID, slug, apiKeys)

	body, _ := json.Marshal(map[string]string{"name": "  "})
	req := newAPIKeyRequest(t, d, accountID, http.MethodPost, fmt.Sprintf("/dashboard/api/%s/api-keys", slug), slug, body)

	rr := httptest.NewRecorder()
	d.CreateAPIKey(rr, req)

	if rr.Code != http.StatusBadRequest {
		t.Errorf("expected 400, got %d", rr.Code)
	}
}

func TestCreateAPIKey_StoreError_Returns500(t *testing.T) {
	t.Parallel()

	accountID := uuid.New()
	slug := "my-campaign"
	apiKeys := &mockAPIKeyStore{createErr: errors.New("db down")}
	d := newDashboardWithAPIKeys(accountID, slug, apiKeys)

	body, _ := json.Marshal(map[string]string{"name": "key"})
	req := newAPIKeyRequest(t, d, accountID, http.MethodPost, fmt.Sprintf("/dashboard/api/%s/api-keys", slug), slug, body)

	rr := httptest.NewRecorder()
	d.CreateAPIKey(rr, req)

	if rr.Code != http.StatusInternalServerError {
		t.Errorf("expected 500, got %d", rr.Code)
	}
}

// ---------------------------------------------------------------------------
// RevokeAPIKey tests
// ---------------------------------------------------------------------------

func TestRevokeAPIKey_HappyPath(t *testing.T) {
	t.Parallel()

	accountID := uuid.New()
	slug := "my-campaign"
	keyID := uuid.New()
	apiKeys := &mockAPIKeyStore{
		keys: []domain.AccountAPIKey{
			{ID: keyID, AccountID: accountID, Name: "prod", CreatedAt: time.Now()},
		},
	}
	d := newDashboardWithAPIKeys(accountID, slug, apiKeys)

	path := fmt.Sprintf("/dashboard/api/%s/api-keys/%s", slug, keyID)
	req := newAPIKeyRequest(t, d, accountID, http.MethodDelete, path, slug, nil)
	// Override the id param to match the actual key ID.
	rctx := chi.NewRouteContext()
	rctx.URLParams.Add("slug", slug)
	rctx.URLParams.Add("id", keyID.String())
	req = req.WithContext(context.WithValue(req.Context(), chi.RouteCtxKey, rctx))

	rr := httptest.NewRecorder()
	d.RevokeAPIKey(rr, req)

	if rr.Code != http.StatusNoContent {
		t.Fatalf("expected 204, got %d: %s", rr.Code, rr.Body.String())
	}
	if len(apiKeys.revokedIDs) != 1 || apiKeys.revokedIDs[0] != keyID {
		t.Errorf("expected key %s to be revoked", keyID)
	}
}

func TestRevokeAPIKey_NotOwned_Returns404(t *testing.T) {
	t.Parallel()

	accountID := uuid.New()
	slug := "my-campaign"
	someOtherKeyID := uuid.New()
	apiKeys := &mockAPIKeyStore{} // account has no keys
	d := newDashboardWithAPIKeys(accountID, slug, apiKeys)

	path := fmt.Sprintf("/dashboard/api/%s/api-keys/%s", slug, someOtherKeyID)
	req := newAPIKeyRequest(t, d, accountID, http.MethodDelete, path, slug, nil)
	rctx := chi.NewRouteContext()
	rctx.URLParams.Add("slug", slug)
	rctx.URLParams.Add("id", someOtherKeyID.String())
	req = req.WithContext(context.WithValue(req.Context(), chi.RouteCtxKey, rctx))

	rr := httptest.NewRecorder()
	d.RevokeAPIKey(rr, req)

	if rr.Code != http.StatusNotFound {
		t.Errorf("expected 404, got %d", rr.Code)
	}
}

func TestRevokeAPIKey_InvalidID_Returns400(t *testing.T) {
	t.Parallel()

	accountID := uuid.New()
	slug := "my-campaign"
	apiKeys := &mockAPIKeyStore{}
	d := newDashboardWithAPIKeys(accountID, slug, apiKeys)

	path := fmt.Sprintf("/dashboard/api/%s/api-keys/not-a-uuid", slug)
	req := newAPIKeyRequest(t, d, accountID, http.MethodDelete, path, slug, nil)
	rctx := chi.NewRouteContext()
	rctx.URLParams.Add("slug", slug)
	rctx.URLParams.Add("id", "not-a-uuid")
	req = req.WithContext(context.WithValue(req.Context(), chi.RouteCtxKey, rctx))

	rr := httptest.NewRecorder()
	d.RevokeAPIKey(rr, req)

	if rr.Code != http.StatusBadRequest {
		t.Errorf("expected 400, got %d", rr.Code)
	}
}
