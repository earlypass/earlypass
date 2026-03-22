package mcp

import (
	"context"
	"encoding/json"
	"strings"
	"testing"

	"github.com/google/uuid"
	"github.com/mark3labs/mcp-go/mcp"

	"github.com/earlypass/earlypass/internal/domain"
)

// mockSignupStoreWithLeaderboard extends mockSignupStore with a working ListLeaderboard.
type mockSignupStoreWithLeaderboard struct {
	mockSignupStore
	leaderboard []domain.Signup
	leaderboardErr error
}

func (m *mockSignupStoreWithLeaderboard) ListLeaderboard(_ context.Context, _ uuid.UUID, limit int) ([]domain.Signup, error) {
	if m.leaderboardErr != nil {
		return nil, m.leaderboardErr
	}
	if limit > len(m.leaderboard) {
		return m.leaderboard, nil
	}
	return m.leaderboard[:limit], nil
}

func TestMaskEmail_MCP(t *testing.T) {
	t.Parallel()

	cases := []struct {
		name  string
		email string
		want  string
	}{
		{
			name:  "standard email",
			email: "alice@example.com",
			want:  "a***@example.com",
		},
		{
			name:  "single char local",
			email: "a@example.com",
			want:  "a***@example.com",
		},
		{
			name:  "two char local",
			email: "ab@example.com",
			want:  "a***@example.com",
		},
		{
			name:  "long local part",
			email: "verylongname@example.com",
			want:  "v***@example.com",
		},
		{
			name:  "no @ sign returns unchanged",
			email: "notanemail",
			want:  "notanemail",
		},
		{
			name:  "empty string returns unchanged",
			email: "",
			want:  "",
		},
	}

	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			got := maskEmail(tc.email)
			if got != tc.want {
				t.Errorf("maskEmail(%q) = %q, want %q", tc.email, got, tc.want)
			}
		})
	}
}

func TestGetLeaderboard_HappyPath(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	campaign := newTestCampaign(account.ID, "My Campaign")

	leaderboard := []domain.Signup{
		{
			ID:            uuid.New(),
			CampaignID:    campaign.ID,
			Email:         "alice@example.com",
			ReferralCode:  "ABC12345",
			ReferralCount: 5,
			BasePosition:  1,
			BonusPoints:   5,
			Status:        domain.SignupStatusVerified,
		},
		{
			ID:            uuid.New(),
			CampaignID:    campaign.ID,
			Email:         "bob@example.com",
			ReferralCode:  "XYZ99999",
			ReferralCount: 3,
			BasePosition:  2,
			BonusPoints:   3,
			Status:        domain.SignupStatusVerified,
		},
	}

	signupStore := &mockSignupStoreWithLeaderboard{
		mockSignupStore: mockSignupStore{byInviteToken: make(map[string]domain.Signup)},
		leaderboard:     leaderboard,
	}

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		SignupStore:   signupStore,
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name: "get_leaderboard",
			Arguments: map[string]any{
				"campaign_id": campaign.ID.String(),
				"limit":       10,
			},
		},
	})
	if err != nil {
		t.Fatalf("CallTool error: %v", err)
	}
	if result.IsError {
		t.Fatalf("tool returned error: %v", result.Content)
	}

	if len(result.Content) == 0 {
		t.Fatal("expected non-empty content")
	}

	var payload map[string]any
	text := result.Content[0].(mcp.TextContent).Text
	if err := json.Unmarshal([]byte(text), &payload); err != nil {
		t.Fatalf("unmarshal result: %v", err)
	}

	entries, ok := payload["entries"].([]any)
	if !ok {
		t.Fatalf("expected entries array, got %T", payload["entries"])
	}
	if len(entries) != 2 {
		t.Errorf("expected 2 entries, got %d", len(entries))
	}

	// Verify first entry has expected fields.
	first := entries[0].(map[string]any)
	if first["rank"].(float64) != 1 {
		t.Errorf("first entry rank = %v, want 1", first["rank"])
	}
	if first["referral_code"].(string) != "ABC12345" {
		t.Errorf("first entry referral_code = %v, want ABC12345", first["referral_code"])
	}
	if first["referral_count"].(float64) != 5 {
		t.Errorf("first entry referral_count = %v, want 5", first["referral_count"])
	}
	// Email should be masked.
	emailMasked := first["email_masked"].(string)
	if !strings.HasPrefix(emailMasked, "a***") {
		t.Errorf("email_masked = %q, expected to start with a***", emailMasked)
	}
}

func TestGetLeaderboard_MissingCampaignID(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	deps := Dependencies{
		CampaignStore: newMockCampaignStore(),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "get_leaderboard",
			Arguments: map[string]any{},
		},
	})
	if err != nil {
		t.Fatalf("CallTool error: %v", err)
	}
	if !result.IsError {
		t.Fatal("expected tool to return an error for missing campaign_id")
	}
}

func TestGetLeaderboard_InvalidCampaignID(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	deps := Dependencies{
		CampaignStore: newMockCampaignStore(),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name: "get_leaderboard",
			Arguments: map[string]any{
				"campaign_id": "not-a-uuid",
			},
		},
	})
	if err != nil {
		t.Fatalf("CallTool error: %v", err)
	}
	if !result.IsError {
		t.Fatal("expected tool to return error for invalid campaign_id")
	}
}

func TestGetLeaderboard_WrongOwner(t *testing.T) {
	t.Parallel()

	owner := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	other := domain.Account{ID: uuid.New(), Email: "other@example.com"}
	campaign := newTestCampaign(owner.ID, "Owner's Campaign")

	signupStore := &mockSignupStoreWithLeaderboard{
		mockSignupStore: mockSignupStore{byInviteToken: make(map[string]domain.Signup)},
		leaderboard:     nil,
	}

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		SignupStore:   signupStore,
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(other)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name: "get_leaderboard",
			Arguments: map[string]any{
				"campaign_id": campaign.ID.String(),
			},
		},
	})
	if err != nil {
		t.Fatalf("CallTool error: %v", err)
	}
	if !result.IsError {
		t.Fatal("expected tool to return error for cross-account access")
	}
}

func TestGetWidgetEmbed_HappyPath(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	campaign := newTestCampaign(account.ID, "My Campaign")

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		Logger:        nopLoggerInternal(),
		BaseURL:       "https://api.earlypass.app",
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name: "get_widget_embed",
			Arguments: map[string]any{
				"campaign_id": campaign.ID.String(),
			},
		},
	})
	if err != nil {
		t.Fatalf("CallTool error: %v", err)
	}
	if result.IsError {
		t.Fatalf("tool returned error: %v", result.Content)
	}

	text := result.Content[0].(mcp.TextContent).Text
	if !strings.Contains(text, campaign.Slug) {
		t.Errorf("embed snippet missing campaign slug %q, got:\n%s", campaign.Slug, text)
	}
	if !strings.Contains(text, "https://api.earlypass.app") {
		t.Errorf("embed snippet missing base URL, got:\n%s", text)
	}
	if !strings.Contains(text, "<script") {
		t.Errorf("embed snippet missing <script> tag, got:\n%s", text)
	}
}

func TestGetWidgetEmbed_WrongOwner(t *testing.T) {
	t.Parallel()

	owner := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	other := domain.Account{ID: uuid.New(), Email: "other@example.com"}
	campaign := newTestCampaign(owner.ID, "Owner's Campaign")

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		Logger:        nopLoggerInternal(),
		BaseURL:       "https://api.earlypass.app",
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(other)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name: "get_widget_embed",
			Arguments: map[string]any{
				"campaign_id": campaign.ID.String(),
			},
		},
	})
	if err != nil {
		t.Fatalf("CallTool error: %v", err)
	}
	if !result.IsError {
		t.Fatal("expected error for cross-account access")
	}
}

func TestGetWidgetEmbed_MissingCampaignID(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	deps := Dependencies{
		CampaignStore: newMockCampaignStore(),
		Logger:        nopLoggerInternal(),
		BaseURL:       "https://api.earlypass.app",
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "get_widget_embed",
			Arguments: map[string]any{},
		},
	})
	if err != nil {
		t.Fatalf("CallTool error: %v", err)
	}
	if !result.IsError {
		t.Fatal("expected error for missing campaign_id")
	}
}
