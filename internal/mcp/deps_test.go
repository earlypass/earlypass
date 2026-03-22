package mcp

import (
	"context"
	"errors"
	"io"
	"log/slog"
	"testing"
	"time"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/api/middleware"
	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// mockCampaignStore is a minimal in-memory CampaignStore for unit tests.
type mockCampaignStore struct {
	campaigns map[uuid.UUID]domain.Campaign
}

func (m *mockCampaignStore) Create(_ context.Context, c domain.Campaign) error {
	m.campaigns[c.ID] = c
	return nil
}

func (m *mockCampaignStore) GetByID(_ context.Context, id uuid.UUID) (domain.Campaign, error) {
	c, ok := m.campaigns[id]
	if !ok {
		return domain.Campaign{}, store.ErrNotFound
	}
	return c, nil
}

func (m *mockCampaignStore) GetBySlug(_ context.Context, slug string) (domain.Campaign, error) {
	for _, c := range m.campaigns {
		if c.Slug == slug {
			return c, nil
		}
	}
	return domain.Campaign{}, store.ErrNotFound
}

func (m *mockCampaignStore) Update(_ context.Context, c domain.Campaign) error {
	if _, ok := m.campaigns[c.ID]; !ok {
		return store.ErrNotFound
	}
	m.campaigns[c.ID] = c
	return nil
}

func (m *mockCampaignStore) Delete(_ context.Context, id uuid.UUID) error {
	if _, ok := m.campaigns[id]; !ok {
		return store.ErrNotFound
	}
	delete(m.campaigns, id)
	return nil
}

func (m *mockCampaignStore) ListByAccount(_ context.Context, accountID uuid.UUID, limit, offset int) ([]domain.Campaign, error) {
	var result []domain.Campaign
	for _, c := range m.campaigns {
		if c.AccountID == accountID {
			result = append(result, c)
		}
	}
	end := offset + limit
	if offset >= len(result) {
		return nil, nil
	}
	if end > len(result) {
		end = len(result)
	}
	return result[offset:end], nil
}

func (m *mockCampaignStore) CountActive(_ context.Context) (int64, error) {
	var n int64
	for _, c := range m.campaigns {
		if c.Status == domain.CampaignStatusActive {
			n++
		}
	}
	return n, nil
}

// newMockCampaignStore returns a mockCampaignStore pre-seeded with the given campaigns.
func newMockCampaignStore(campaigns ...domain.Campaign) *mockCampaignStore {
	m := &mockCampaignStore{campaigns: make(map[uuid.UUID]domain.Campaign)}
	for _, c := range campaigns {
		m.campaigns[c.ID] = c
	}
	return m
}

// nopLoggerInternal returns a no-op logger.
func nopLoggerInternal() *slog.Logger {
	return slog.New(slog.NewTextHandler(io.Discard, nil))
}

// contextWithAccount injects an account into a context (mimicking auth middleware).
func contextWithAccount(account domain.Account) context.Context {
	return middleware.WithAccount(context.Background(), account)
}

func TestCheckCampaignOwnership_OwnCampaign(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "owner@example.com", CreatedAt: time.Now(), UpdatedAt: time.Now()}
	campaign := domain.Campaign{
		ID:        uuid.New(),
		Name:      "My Campaign",
		Slug:      "my-campaign",
		AccountID: account.ID,
		Status:    domain.CampaignStatusActive,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		Logger:        nopLoggerInternal(),
	}

	ctx := contextWithAccount(account)

	got, err := checkCampaignOwnership(ctx, deps, campaign.ID)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if got.ID != campaign.ID {
		t.Errorf("got campaign ID %v, want %v", got.ID, campaign.ID)
	}
}

func TestCheckCampaignOwnership_DifferentAccount(t *testing.T) {
	t.Parallel()

	owner := domain.Account{ID: uuid.New(), Email: "owner@example.com", CreatedAt: time.Now(), UpdatedAt: time.Now()}
	other := domain.Account{ID: uuid.New(), Email: "other@example.com", CreatedAt: time.Now(), UpdatedAt: time.Now()}

	campaign := domain.Campaign{
		ID:        uuid.New(),
		Name:      "Owner's Campaign",
		Slug:      "owner-campaign",
		AccountID: owner.ID,
		Status:    domain.CampaignStatusActive,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		Logger:        nopLoggerInternal(),
	}

	// Authenticate as the other account (not the owner).
	ctx := contextWithAccount(other)

	_, err := checkCampaignOwnership(ctx, deps, campaign.ID)
	if err == nil {
		t.Fatal("expected error for cross-account access, got nil")
	}
	if !errors.Is(err, errors.New("campaign not found or access denied")) && err.Error() != "campaign not found or access denied" {
		t.Logf("error message: %v", err)
	}
}

func TestCheckCampaignOwnership_CampaignNotFound(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "user@example.com", CreatedAt: time.Now(), UpdatedAt: time.Now()}

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(), // empty store
		Logger:        nopLoggerInternal(),
	}

	ctx := contextWithAccount(account)

	_, err := checkCampaignOwnership(ctx, deps, uuid.New())
	if err == nil {
		t.Fatal("expected error for missing campaign, got nil")
	}
}

func TestCheckCampaignOwnership_NoAccountInContext(t *testing.T) {
	t.Parallel()

	campaign := domain.Campaign{
		ID:        uuid.New(),
		AccountID: uuid.New(),
		Status:    domain.CampaignStatusActive,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		Logger:        nopLoggerInternal(),
	}

	// No account in context.
	ctx := context.Background()

	_, err := checkCampaignOwnership(ctx, deps, campaign.ID)
	if err == nil {
		t.Fatal("expected error for missing account in context, got nil")
	}
}
