package mcp

import (
	"context"
	"time"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// mockSignupStore is a minimal in-memory SignupStore for unit tests.
// Only the methods exercised by the invite token tools are implemented;
// all others panic to surface accidental calls.
type mockSignupStore struct {
	byInviteToken map[string]domain.Signup
	redeemErr     error
}

func newMockSignupStore(signups ...domain.Signup) *mockSignupStore {
	m := &mockSignupStore{byInviteToken: make(map[string]domain.Signup)}
	for _, s := range signups {
		if s.InviteToken != nil {
			m.byInviteToken[*s.InviteToken] = s
		}
	}
	return m
}

func (m *mockSignupStore) GetByInviteToken(_ context.Context, token string) (domain.Signup, error) {
	s, ok := m.byInviteToken[token]
	if !ok {
		return domain.Signup{}, store.ErrNotFound
	}
	return s, nil
}

func (m *mockSignupStore) RedeemInviteToken(_ context.Context, token string) (domain.Signup, error) {
	if m.redeemErr != nil {
		return domain.Signup{}, m.redeemErr
	}
	s, ok := m.byInviteToken[token]
	if !ok {
		return domain.Signup{}, store.ErrNotFound
	}
	if s.InviteTokenRedeemedAt == nil {
		now := time.Now().UTC()
		s.InviteTokenRedeemedAt = &now
		m.byInviteToken[token] = s
	}
	return s, nil
}

// --- unimplemented stubs (panic on unexpected calls) ---

func (m *mockSignupStore) Create(_ context.Context, _ domain.Signup) (domain.Signup, error) {
	panic("mockSignupStore.Create not implemented")
}
func (m *mockSignupStore) GetByID(_ context.Context, _ uuid.UUID) (domain.Signup, error) {
	panic("mockSignupStore.GetByID not implemented")
}
func (m *mockSignupStore) GetByCampaignAndEmail(_ context.Context, _ uuid.UUID, _ string) (domain.Signup, error) {
	panic("mockSignupStore.GetByCampaignAndEmail not implemented")
}
func (m *mockSignupStore) GetByCampaignAndReferralCode(_ context.Context, _ uuid.UUID, _ string) (domain.Signup, error) {
	panic("mockSignupStore.GetByCampaignAndReferralCode not implemented")
}
func (m *mockSignupStore) ExistsByCampaignAndBaseEmail(_ context.Context, _ uuid.UUID, _ string) (bool, error) {
	panic("mockSignupStore.ExistsByCampaignAndBaseEmail not implemented")
}
func (m *mockSignupStore) ListByCampaign(_ context.Context, _ uuid.UUID) ([]domain.Signup, error) {
	panic("mockSignupStore.ListByCampaign not implemented")
}
func (m *mockSignupStore) CountByCampaign(_ context.Context, _ uuid.UUID) (int, error) {
	panic("mockSignupStore.CountByCampaign not implemented")
}
func (m *mockSignupStore) GetAdjustedPosition(_ context.Context, _, _ uuid.UUID) (int, error) {
	panic("mockSignupStore.GetAdjustedPosition not implemented")
}
func (m *mockSignupStore) NextPosition(_ context.Context, _ uuid.UUID) (int, error) {
	panic("mockSignupStore.NextPosition not implemented")
}
func (m *mockSignupStore) UpdateVerified(_ context.Context, _ uuid.UUID) error {
	panic("mockSignupStore.UpdateVerified not implemented")
}
func (m *mockSignupStore) UpdateReferralCount(_ context.Context, _ uuid.UUID, _, _ int) error {
	panic("mockSignupStore.UpdateReferralCount not implemented")
}
func (m *mockSignupStore) GetByVerificationToken(_ context.Context, _ string) (domain.Signup, error) {
	panic("mockSignupStore.GetByVerificationToken not implemented")
}
func (m *mockSignupStore) ListByCampaignPaginated(_ context.Context, _ uuid.UUID, _, _ int) ([]domain.Signup, error) {
	panic("mockSignupStore.ListByCampaignPaginated not implemented")
}
func (m *mockSignupStore) ListLeaderboard(_ context.Context, _ uuid.UUID, _ int) ([]domain.Signup, error) {
	panic("mockSignupStore.ListLeaderboard not implemented")
}
func (m *mockSignupStore) CountVerifiedByCampaign(_ context.Context, _ uuid.UUID) (int, error) {
	panic("mockSignupStore.CountVerifiedByCampaign not implemented")
}
func (m *mockSignupStore) CountTodayByCampaign(_ context.Context, _ uuid.UUID) (int, error) {
	panic("mockSignupStore.CountTodayByCampaign not implemented")
}
func (m *mockSignupStore) SumReferralsByCampaign(_ context.Context, _ uuid.UUID) (int, error) {
	panic("mockSignupStore.SumReferralsByCampaign not implemented")
}
func (m *mockSignupStore) ListByCampaignFiltered(_ context.Context, _ uuid.UUID, _ domain.SignupFilter) ([]domain.Signup, int, error) {
	panic("mockSignupStore.ListByCampaignFiltered not implemented")
}
func (m *mockSignupStore) TimeseriesByCampaign(_ context.Context, _ uuid.UUID, _ int) ([]domain.DailyCount, error) {
	panic("mockSignupStore.TimeseriesByCampaign not implemented")
}
func (m *mockSignupStore) InviteTopN(_ context.Context, _ uuid.UUID, _ int) ([]domain.Signup, error) {
	panic("mockSignupStore.InviteTopN not implemented")
}
func (m *mockSignupStore) CountInvitedByCampaign(_ context.Context, _ uuid.UUID) (int, error) {
	panic("mockSignupStore.CountInvitedByCampaign not implemented")
}
func (m *mockSignupStore) ListInvitedByCampaign(_ context.Context, _ uuid.UUID, _, _ int, _ string) ([]domain.Signup, int, error) {
	panic("mockSignupStore.ListInvitedByCampaign not implemented")
}
func (m *mockSignupStore) IncrementReferralCount(_ context.Context, _ uuid.UUID, _ float64) (int, int, error) {
	panic("mockSignupStore.IncrementReferralCount not implemented")
}
func (m *mockSignupStore) GetStatsBatch(_ context.Context, _ uuid.UUID) (domain.CampaignStats, error) {
	panic("mockSignupStore.GetStatsBatch not implemented")
}

func (m *mockSignupStore) UpdateStatus(_ context.Context, _ uuid.UUID, _ domain.SignupStatus) error {
	panic("mockSignupStore.UpdateStatus not implemented")
}
