package dashboard_test

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/dashboard"
	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// ---------------------------------------------------------------------------
// Mock stores
// ---------------------------------------------------------------------------

type mockCampaignStore struct {
	campaign domain.Campaign
}

func (m *mockCampaignStore) Create(_ context.Context, _ domain.Campaign) error { return nil }
func (m *mockCampaignStore) GetByID(_ context.Context, _ uuid.UUID) (domain.Campaign, error) {
	return m.campaign, nil
}

func (m *mockCampaignStore) GetBySlug(_ context.Context, slug string) (domain.Campaign, error) {
	if m.campaign.Slug == slug {
		return m.campaign, nil
	}
	return domain.Campaign{}, store.ErrNotFound
}
func (m *mockCampaignStore) Update(_ context.Context, _ domain.Campaign) error { return nil }
func (m *mockCampaignStore) Delete(_ context.Context, _ uuid.UUID) error       { return nil }
func (m *mockCampaignStore) ListByAccount(_ context.Context, _ uuid.UUID, _, _ int) ([]domain.Campaign, error) {
	return nil, nil
}
func (m *mockCampaignStore) CountActive(_ context.Context) (int64, error) { return 0, nil }

// stubSignupStore is a minimal SignupStore stub for handler tests.
// Only ListInvitedByCampaign is exercised by ListInvited.
type stubSignupStore struct {
	signups []domain.Signup
	total   int
	err     error
	// capture the last call args for assertion
	lastSearch string
}

func (s *stubSignupStore) ListInvitedByCampaign(_ context.Context, _ uuid.UUID, _, _ int, search string) ([]domain.Signup, int, error) {
	s.lastSearch = search
	if s.err != nil {
		return nil, 0, s.err
	}
	// Simple in-memory filtering matching the store behaviour (prefix, case-insensitive).
	if search == "" {
		return s.signups, s.total, nil
	}
	lower := strings.ToLower(search)
	var filtered []domain.Signup
	for _, sg := range s.signups {
		tokenMatch := sg.InviteToken != nil && strings.HasPrefix(*sg.InviteToken, lower)
		emailMatch := strings.HasPrefix(strings.ToLower(sg.Email), lower)
		if tokenMatch || emailMatch {
			filtered = append(filtered, sg)
		}
	}
	return filtered, len(filtered), nil
}

// Satisfy the remaining store.SignupStore interface with no-op stubs.
func (s *stubSignupStore) Create(_ context.Context, sg domain.Signup) (domain.Signup, error) {
	return sg, nil
}

func (s *stubSignupStore) GetByID(_ context.Context, _ uuid.UUID) (domain.Signup, error) {
	return domain.Signup{}, store.ErrNotFound
}

func (s *stubSignupStore) GetByCampaignAndEmail(_ context.Context, _ uuid.UUID, _ string) (domain.Signup, error) {
	return domain.Signup{}, store.ErrNotFound
}

func (s *stubSignupStore) GetByCampaignAndReferralCode(_ context.Context, _ uuid.UUID, _ string) (domain.Signup, error) {
	return domain.Signup{}, store.ErrNotFound
}

func (s *stubSignupStore) ExistsByCampaignAndBaseEmail(_ context.Context, _ uuid.UUID, _ string) (bool, error) {
	return false, nil
}

func (s *stubSignupStore) ListByCampaign(_ context.Context, _ uuid.UUID) ([]domain.Signup, error) {
	return nil, nil
}
func (s *stubSignupStore) CountByCampaign(_ context.Context, _ uuid.UUID) (int, error) { return 0, nil }
func (s *stubSignupStore) GetAdjustedPosition(_ context.Context, _, _ uuid.UUID) (int, error) {
	return 0, nil
}
func (s *stubSignupStore) NextPosition(_ context.Context, _ uuid.UUID) (int, error) { return 1, nil }
func (s *stubSignupStore) UpdateVerified(_ context.Context, _ uuid.UUID) error      { return nil }
func (s *stubSignupStore) UpdateReferralCount(_ context.Context, _ uuid.UUID, _, _ int) error {
	return nil
}

func (s *stubSignupStore) GetByVerificationToken(_ context.Context, _ string) (domain.Signup, error) {
	return domain.Signup{}, store.ErrNotFound
}

func (s *stubSignupStore) ListByCampaignPaginated(_ context.Context, _ uuid.UUID, _, _ int) ([]domain.Signup, error) {
	return nil, nil
}

func (s *stubSignupStore) ListLeaderboard(_ context.Context, _ uuid.UUID, _ int) ([]domain.Signup, error) {
	return nil, nil
}

func (s *stubSignupStore) CountVerifiedByCampaign(_ context.Context, _ uuid.UUID) (int, error) {
	return 0, nil
}

func (s *stubSignupStore) CountTodayByCampaign(_ context.Context, _ uuid.UUID) (int, error) {
	return 0, nil
}

func (s *stubSignupStore) SumReferralsByCampaign(_ context.Context, _ uuid.UUID) (int, error) {
	return 0, nil
}

func (s *stubSignupStore) ListByCampaignFiltered(_ context.Context, _ uuid.UUID, _ domain.SignupFilter) ([]domain.Signup, int, error) {
	return nil, 0, nil
}

func (s *stubSignupStore) TimeseriesByCampaign(_ context.Context, _ uuid.UUID, _ int) ([]domain.DailyCount, error) {
	return nil, nil
}

func (s *stubSignupStore) InviteTopN(_ context.Context, _ uuid.UUID, _ int) ([]domain.Signup, error) {
	return nil, nil
}

func (s *stubSignupStore) CountInvitedByCampaign(_ context.Context, _ uuid.UUID) (int, error) {
	return 0, nil
}

func (s *stubSignupStore) IncrementReferralCount(_ context.Context, _ uuid.UUID, _ float64) (int, int, error) {
	return 0, 0, nil
}

func (s *stubSignupStore) GetStatsBatch(_ context.Context, _ uuid.UUID) (domain.CampaignStats, error) {
	return domain.CampaignStats{}, nil
}

func (s *stubSignupStore) GetByInviteToken(_ context.Context, _ string) (domain.Signup, error) {
	return domain.Signup{}, store.ErrNotFound
}

func (s *stubSignupStore) RedeemInviteToken(_ context.Context, _ string) (domain.Signup, error) {
	return domain.Signup{}, store.ErrNotFound
}

func (s *stubSignupStore) UpdateStatus(_ context.Context, _ uuid.UUID, _ domain.SignupStatus) error {
	return nil
}

// ---------------------------------------------------------------------------
// Test helpers
// ---------------------------------------------------------------------------

// newListInvitedRequest builds an authenticated request with the given query string.
// It issues a real JWT and uses CookieAuthMiddleware so the account ID is injected.
func newListInvitedRequest(t *testing.T, d *dashboard.Dashboard, accountID uuid.UUID, slug, query string) *http.Request {
	t.Helper()
	token, err := dashboard.IssueToken(accountID, []byte("test-secret"))
	if err != nil {
		t.Fatalf("IssueToken: %v", err)
	}

	path := fmt.Sprintf("/dashboard/api/%s/invited", slug)
	if query != "" {
		path += "?" + query
	}
	req := httptest.NewRequest(http.MethodGet, path, nil)
	req.AddCookie(&http.Cookie{Name: "ep_auth", Value: token})

	// Inject chi URL params.
	rctx := chi.NewRouteContext()
	rctx.URLParams.Add("slug", slug)
	req = req.WithContext(context.WithValue(req.Context(), chi.RouteCtxKey, rctx))

	// Run through CookieAuthMiddleware to attach the account ID to context.
	var finalReq *http.Request
	middleware := d.CookieAuthMiddleware(http.HandlerFunc(func(_ http.ResponseWriter, r *http.Request) {
		finalReq = r
	}))
	rr := httptest.NewRecorder()
	middleware.ServeHTTP(rr, req)
	if finalReq == nil {
		t.Fatalf("CookieAuthMiddleware rejected the request (status %d)", rr.Code)
	}
	return finalReq
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

func TestListInvited_ReturnsInviteTokenFields(t *testing.T) {
	t.Parallel()

	accountID := uuid.New()
	campaignID := uuid.New()
	slug := "test-campaign"
	now := time.Now().UTC().Truncate(time.Second)
	redeemedAt := now.Add(-1 * time.Hour)
	token := "abcdef1234567890abcdef1234567890abcdef12"

	signups := []domain.Signup{
		{
			ID:                    uuid.New(),
			CampaignID:            campaignID,
			Email:                 "alice@example.com",
			InvitedAt:             &now,
			InviteToken:           &token,
			InviteTokenRedeemedAt: &redeemedAt,
			Status:                domain.SignupStatusInvited,
		},
	}

	stub := &stubSignupStore{signups: signups, total: 1}
	d := &dashboard.Dashboard{
		JWTSecret: []byte("test-secret"),
		Campaigns: &mockCampaignStore{campaign: domain.Campaign{
			ID:        campaignID,
			Slug:      slug,
			AccountID: accountID,
		}},
		Signups: stub,
	}

	req := newListInvitedRequest(t, d, accountID, slug, "")
	rr := httptest.NewRecorder()
	d.ListInvited(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("status = %d, want 200; body: %s", rr.Code, rr.Body.String())
	}

	var body struct {
		Signups []struct {
			InviteToken           *string    `json:"invite_token"`
			InviteTokenRedeemedAt *time.Time `json:"invite_token_redeemed_at"`
		} `json:"signups"`
		Total int `json:"total"`
	}
	if err := json.NewDecoder(rr.Body).Decode(&body); err != nil {
		t.Fatalf("decode body: %v", err)
	}

	if body.Total != 1 {
		t.Errorf("total = %d, want 1", body.Total)
	}
	if len(body.Signups) != 1 {
		t.Fatalf("len(signups) = %d, want 1", len(body.Signups))
	}

	sg := body.Signups[0]
	if sg.InviteToken == nil || *sg.InviteToken != token {
		t.Errorf("invite_token = %v, want %q", sg.InviteToken, token)
	}
	if sg.InviteTokenRedeemedAt == nil {
		t.Errorf("invite_token_redeemed_at is nil, want a timestamp")
	}
}

func TestListInvited_PassesSearchToStore(t *testing.T) {
	t.Parallel()

	accountID := uuid.New()
	campaignID := uuid.New()
	slug := "search-campaign"
	token := "ff00aa1234567890ff00aa1234567890ff00aa12"
	now := time.Now().UTC()

	signups := []domain.Signup{
		{
			ID:          uuid.New(),
			CampaignID:  campaignID,
			Email:       "bob@example.com",
			InvitedAt:   &now,
			InviteToken: &token,
			Status:      domain.SignupStatusInvited,
		},
	}
	stub := &stubSignupStore{signups: signups, total: 1}
	d := &dashboard.Dashboard{
		JWTSecret: []byte("test-secret"),
		Campaigns: &mockCampaignStore{campaign: domain.Campaign{
			ID:        campaignID,
			Slug:      slug,
			AccountID: accountID,
		}},
		Signups: stub,
	}

	req := newListInvitedRequest(t, d, accountID, slug, "search=ff00aa")
	rr := httptest.NewRecorder()
	d.ListInvited(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("status = %d, want 200; body: %s", rr.Code, rr.Body.String())
	}
	if stub.lastSearch != "ff00aa" {
		t.Errorf("store received search = %q, want %q", stub.lastSearch, "ff00aa")
	}

	var body struct {
		Signups []struct {
			InviteToken *string `json:"invite_token"`
		} `json:"signups"`
		Total int `json:"total"`
	}
	if err := json.NewDecoder(rr.Body).Decode(&body); err != nil {
		t.Fatalf("decode body: %v", err)
	}
	if body.Total != 1 {
		t.Errorf("total = %d, want 1", body.Total)
	}
}

func TestListInvited_EmptySearch_ReturnsAll(t *testing.T) {
	t.Parallel()

	accountID := uuid.New()
	campaignID := uuid.New()
	slug := "empty-search-campaign"

	stub := &stubSignupStore{signups: nil, total: 0}
	d := &dashboard.Dashboard{
		JWTSecret: []byte("test-secret"),
		Campaigns: &mockCampaignStore{campaign: domain.Campaign{
			ID:        campaignID,
			Slug:      slug,
			AccountID: accountID,
		}},
		Signups: stub,
	}

	req := newListInvitedRequest(t, d, accountID, slug, "")
	rr := httptest.NewRecorder()
	d.ListInvited(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("status = %d, want 200", rr.Code)
	}
	if stub.lastSearch != "" {
		t.Errorf("store received search = %q, want empty string", stub.lastSearch)
	}
}
