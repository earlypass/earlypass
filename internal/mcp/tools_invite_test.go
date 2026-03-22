package mcp

import (
	"encoding/json"
	"testing"
	"time"

	"github.com/google/uuid"
	"github.com/mark3labs/mcp-go/mcp"

	"github.com/earlypass/earlypass/internal/domain"
)

// newInviteTestFixture returns an account, campaign owned by it, and a signup with an invite token.
func newInviteTestFixture() (domain.Account, domain.Campaign, domain.Signup, string) {
	account := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	campaign := newTestCampaign(account.ID, "Invite Test Campaign")
	token := uuid.New().String()
	now := time.Now().UTC()

	sg := domain.Signup{
		ID:           uuid.New(),
		CampaignID:   campaign.ID,
		Email:        "user@example.com",
		ReferralCode: "REFINVT1",
		Status:       domain.SignupStatusInvited,
		InviteToken:  &token,
		InvitedAt:    &now,
		CreatedAt:    now,
		UpdatedAt:    now,
	}

	return account, campaign, sg, token
}

func TestGetInviteToken_Active(t *testing.T) {
	t.Parallel()

	account, campaign, sg, token := newInviteTestFixture()

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		SignupStore:   newMockSignupStore(sg),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "get_invite_token",
			Arguments: map[string]any{"token": token},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if result.IsError {
		t.Fatalf("unexpected tool error: %v", result.Content)
	}

	var got map[string]any
	if err := json.Unmarshal([]byte(result.Content[0].(mcp.TextContent).Text), &got); err != nil {
		t.Fatalf("unmarshal result: %v", err)
	}

	if got["status"] != "active" {
		t.Errorf("status = %v, want active", got["status"])
	}
	if got["email"] != sg.Email {
		t.Errorf("email = %v, want %v", got["email"], sg.Email)
	}
	if got["signup_id"] != sg.ID.String() {
		t.Errorf("signup_id = %v, want %v", got["signup_id"], sg.ID.String())
	}
	if got["campaign_id"] != campaign.ID.String() {
		t.Errorf("campaign_id = %v, want %v", got["campaign_id"], campaign.ID.String())
	}
}

func TestGetInviteToken_Redeemed(t *testing.T) {
	t.Parallel()

	account, campaign, sg, token := newInviteTestFixture()
	redeemedAt := time.Now().UTC()
	sg.InviteTokenRedeemedAt = &redeemedAt

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		SignupStore:   newMockSignupStore(sg),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "get_invite_token",
			Arguments: map[string]any{"token": token},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if result.IsError {
		t.Fatalf("unexpected tool error: %v", result.Content)
	}

	var got map[string]any
	if err := json.Unmarshal([]byte(result.Content[0].(mcp.TextContent).Text), &got); err != nil {
		t.Fatalf("unmarshal result: %v", err)
	}

	if got["status"] != "redeemed" {
		t.Errorf("status = %v, want redeemed", got["status"])
	}
}

func TestGetInviteToken_NotFound(t *testing.T) {
	t.Parallel()

	account, campaign, _, _ := newInviteTestFixture()

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		SignupStore:   newMockSignupStore(), // empty
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "get_invite_token",
			Arguments: map[string]any{"token": uuid.New().String()},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if !result.IsError {
		t.Error("expected tool error for unknown token, got success")
	}
}

func TestGetInviteToken_WrongAccount(t *testing.T) {
	t.Parallel()

	_, campaign, sg, token := newInviteTestFixture()
	other := domain.Account{ID: uuid.New(), Email: "other@example.com"}

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		SignupStore:   newMockSignupStore(sg),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(other) // different account

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "get_invite_token",
			Arguments: map[string]any{"token": token},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if !result.IsError {
		t.Error("expected tool error for wrong account, got success")
	}
}

func TestGetInviteToken_MissingToken(t *testing.T) {
	t.Parallel()

	account, campaign, _, _ := newInviteTestFixture()

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		SignupStore:   newMockSignupStore(),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "get_invite_token",
			Arguments: map[string]any{"token": ""},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if !result.IsError {
		t.Error("expected tool error for empty token, got success")
	}
}

func TestRedeemInviteToken_HappyPath(t *testing.T) {
	t.Parallel()

	account, campaign, sg, token := newInviteTestFixture()

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		SignupStore:   newMockSignupStore(sg),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "redeem_invite_token",
			Arguments: map[string]any{"token": token},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if result.IsError {
		t.Fatalf("unexpected tool error: %v", result.Content)
	}

	var got map[string]any
	if err := json.Unmarshal([]byte(result.Content[0].(mcp.TextContent).Text), &got); err != nil {
		t.Fatalf("unmarshal result: %v", err)
	}

	if got["email"] != sg.Email {
		t.Errorf("email = %v, want %v", got["email"], sg.Email)
	}
	if got["invite_token_redeemed_at"] == nil || got["invite_token_redeemed_at"] == "" {
		t.Error("invite_token_redeemed_at should be set after redemption")
	}
}

func TestRedeemInviteToken_Idempotent(t *testing.T) {
	t.Parallel()

	account, campaign, sg, token := newInviteTestFixture()
	redeemedAt := time.Now().UTC().Add(-5 * time.Minute)
	sg.InviteTokenRedeemedAt = &redeemedAt // already redeemed

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		SignupStore:   newMockSignupStore(sg),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	// First call.
	result1, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "redeem_invite_token",
			Arguments: map[string]any{"token": token},
		},
	})
	if err != nil {
		t.Fatalf("first call: %v", err)
	}
	if result1.IsError {
		t.Fatalf("first call unexpected error: %v", result1.Content)
	}

	// Second call — must also succeed.
	result2, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "redeem_invite_token",
			Arguments: map[string]any{"token": token},
		},
	})
	if err != nil {
		t.Fatalf("second call: %v", err)
	}
	if result2.IsError {
		t.Fatalf("second call unexpected error: %v", result2.Content)
	}

	// Both calls must return the same redeemed_at.
	var r1, r2 map[string]any
	_ = json.Unmarshal([]byte(result1.Content[0].(mcp.TextContent).Text), &r1)
	_ = json.Unmarshal([]byte(result2.Content[0].(mcp.TextContent).Text), &r2)
	if r1["invite_token_redeemed_at"] != r2["invite_token_redeemed_at"] {
		t.Errorf("redeemed_at changed between calls: %v vs %v",
			r1["invite_token_redeemed_at"], r2["invite_token_redeemed_at"])
	}
}

func TestRedeemInviteToken_NotFound(t *testing.T) {
	t.Parallel()

	account, campaign, _, _ := newInviteTestFixture()

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		SignupStore:   newMockSignupStore(), // empty
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "redeem_invite_token",
			Arguments: map[string]any{"token": uuid.New().String()},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if !result.IsError {
		t.Error("expected tool error for unknown token, got success")
	}
}

func TestRedeemInviteToken_WrongAccount(t *testing.T) {
	t.Parallel()

	_, campaign, sg, token := newInviteTestFixture()
	other := domain.Account{ID: uuid.New(), Email: "other@example.com"}

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		SignupStore:   newMockSignupStore(sg),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(other)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "redeem_invite_token",
			Arguments: map[string]any{"token": token},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if !result.IsError {
		t.Error("expected tool error for wrong account, got success")
	}
}
