package mcp

import (
	"context"
	"encoding/json"
	"strings"
	"testing"
	"time"

	"github.com/google/uuid"
	"github.com/mark3labs/mcp-go/client"
	"github.com/mark3labs/mcp-go/client/transport"
	"github.com/mark3labs/mcp-go/mcp"

	"github.com/earlypass/earlypass/internal/domain"
)

// newInProcessClient creates a connected in-process MCP client using the given dependencies.
func newInProcessClient(t *testing.T, deps Dependencies) *client.Client {
	t.Helper()

	srv := NewServer(deps)
	tr := transport.NewInProcessTransport(srv)

	ctx, cancel := context.WithCancel(context.Background())
	t.Cleanup(cancel)
	t.Cleanup(func() { _ = tr.Close() })

	if err := tr.Start(ctx); err != nil {
		t.Fatalf("transport start: %v", err)
	}

	c := client.NewClient(tr)

	var initReq mcp.InitializeRequest
	initReq.Params.ProtocolVersion = mcp.LATEST_PROTOCOL_VERSION
	if _, err := c.Initialize(ctx, initReq); err != nil {
		t.Fatalf("client initialize: %v", err)
	}

	return c
}

// newTestCampaign builds a Campaign owned by the given account with the given name.
func newTestCampaign(accountID uuid.UUID, name string) domain.Campaign {
	now := time.Now().UTC()
	settings := domain.DefaultCampaignSettings()
	settings.ProductURL = "https://example.com/product"
	return domain.Campaign{
		ID:        uuid.New(),
		Name:      name,
		Slug:      strings.ToLower(strings.ReplaceAll(name, " ", "-")),
		AccountID: accountID,
		Status:    domain.CampaignStatusActive,
		Settings:  settings,
		CreatedAt: now,
		UpdatedAt: now,
	}
}

func TestGetCampaign_IncludesAllFields(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	maxSignups := 50
	campaign := newTestCampaign(account.ID, "My Campaign")
	campaign.Settings.ProductURL = "https://example.com/product"
	campaign.Settings.BoostWeight = 2.5
	campaign.MaxSignups = &maxSignups

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "get_campaign",
			Arguments: map[string]any{"campaign_id": campaign.ID.String()},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if result.IsError {
		t.Fatalf("tool returned error: %v", result.Content)
	}

	var got map[string]any
	text := result.Content[0].(mcp.TextContent).Text
	if err := json.Unmarshal([]byte(text), &got); err != nil {
		t.Fatalf("unmarshal result: %v", err)
	}

	if got["product_url"] != "https://example.com/product" {
		t.Errorf("product_url = %v, want %q", got["product_url"], "https://example.com/product")
	}
	if got["boost_weight"] != 2.5 {
		t.Errorf("boost_weight = %v, want 2.5", got["boost_weight"])
	}
	if got["max_signups"] == nil {
		t.Error("max_signups should be present, got nil")
	}
}

func TestListCampaigns_IncludesSettingsFields(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	campaign := newTestCampaign(account.ID, "My Campaign")
	campaign.Settings.ProductURL = "https://product.example.com"
	campaign.Settings.BoostWeight = 3.0

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name:      "list_campaigns",
			Arguments: map[string]any{},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if result.IsError {
		t.Fatalf("tool returned error: %v", result.Content)
	}

	var items []map[string]any
	text := result.Content[0].(mcp.TextContent).Text
	if err := json.Unmarshal([]byte(text), &items); err != nil {
		t.Fatalf("unmarshal result: %v", err)
	}

	if len(items) != 1 {
		t.Fatalf("got %d items, want 1", len(items))
	}

	item := items[0]
	if item["product_url"] != "https://product.example.com" {
		t.Errorf("product_url = %v, want %q", item["product_url"], "https://product.example.com")
	}
	if item["boost_weight"] != 3.0 {
		t.Errorf("boost_weight = %v, want 3.0", item["boost_weight"])
	}
}

func TestCreateCampaign_WithInitialSettings(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	store := newMockCampaignStore()

	deps := Dependencies{
		CampaignStore: store,
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name: "create_campaign",
			Arguments: map[string]any{
				"name":         "Launch Campaign",
				"product_url":  "https://launch.example.com",
				"boost_weight": 2.0,
				"max_signups":  100,
			},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if result.IsError {
		t.Fatalf("tool returned error: %v", result.Content)
	}

	var got map[string]any
	text := result.Content[0].(mcp.TextContent).Text
	if err := json.Unmarshal([]byte(text), &got); err != nil {
		t.Fatalf("unmarshal result: %v", err)
	}

	if got["product_url"] != "https://launch.example.com" {
		t.Errorf("product_url = %v, want %q", got["product_url"], "https://launch.example.com")
	}
	if got["boost_weight"] != 2.0 {
		t.Errorf("boost_weight = %v, want 2.0", got["boost_weight"])
	}
	if got["max_signups"] == nil {
		t.Error("max_signups should be set, got nil")
	}
}

func TestUpdateCampaign_UpdateSettings(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	campaign := newTestCampaign(account.ID, "Original Name")

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name: "update_campaign",
			Arguments: map[string]any{
				"campaign_id":  campaign.ID.String(),
				"name":         "Updated Name",
				"product_url":  "https://updated.example.com",
				"boost_weight": 3.0,
				"max_signups":  200,
			},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if result.IsError {
		t.Fatalf("tool returned error: %v", result.Content)
	}

	var got map[string]any
	text := result.Content[0].(mcp.TextContent).Text
	if err := json.Unmarshal([]byte(text), &got); err != nil {
		t.Fatalf("unmarshal result: %v", err)
	}

	if got["name"] != "Updated Name" {
		t.Errorf("name = %v, want %q", got["name"], "Updated Name")
	}
	if got["product_url"] != "https://updated.example.com" {
		t.Errorf("product_url = %v, want %q", got["product_url"], "https://updated.example.com")
	}
	if got["boost_weight"] != 3.0 {
		t.Errorf("boost_weight = %v, want 3.0", got["boost_weight"])
	}
	if got["max_signups"] == nil {
		t.Error("max_signups should be set, got nil")
	}
}

func TestUpdateCampaign_RemoveMaxSignups(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	maxSignups := 100
	campaign := newTestCampaign(account.ID, "Capped Campaign")
	campaign.MaxSignups = &maxSignups

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name: "update_campaign",
			Arguments: map[string]any{
				"campaign_id": campaign.ID.String(),
				"max_signups": 0, // 0 means remove cap
			},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if result.IsError {
		t.Fatalf("tool returned error: %v", result.Content)
	}

	var got map[string]any
	text := result.Content[0].(mcp.TextContent).Text
	if err := json.Unmarshal([]byte(text), &got); err != nil {
		t.Fatalf("unmarshal result: %v", err)
	}

	if _, ok := got["max_signups"]; ok && got["max_signups"] != nil {
		t.Errorf("max_signups should be nil after removal, got %v", got["max_signups"])
	}
}

func TestUpdateCampaign_PauseAndResume(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	campaign := newTestCampaign(account.ID, "Active Campaign")

	store := newMockCampaignStore(campaign)
	deps := Dependencies{
		CampaignStore: store,
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	// Pause the campaign.
	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name: "update_campaign",
			Arguments: map[string]any{
				"campaign_id": campaign.ID.String(),
				"status":      "paused",
			},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if result.IsError {
		t.Fatalf("tool returned error: %v", result.Content)
	}

	var got map[string]any
	text := result.Content[0].(mcp.TextContent).Text
	if err := json.Unmarshal([]byte(text), &got); err != nil {
		t.Fatalf("unmarshal result: %v", err)
	}
	if got["status"] != "paused" {
		t.Errorf("status = %v, want 'paused'", got["status"])
	}
}

func TestUpdateCampaign_CrossAccountDenied(t *testing.T) {
	t.Parallel()

	owner := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	other := domain.Account{ID: uuid.New(), Email: "other@example.com"}
	campaign := newTestCampaign(owner.ID, "Owner Campaign")

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(other) // authenticated as the wrong account

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name: "update_campaign",
			Arguments: map[string]any{
				"campaign_id": campaign.ID.String(),
				"name":        "Hijacked Name",
			},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if !result.IsError {
		t.Fatal("expected error for cross-account update, got success")
	}
}

func TestUpdateCampaign_InvalidStatus(t *testing.T) {
	t.Parallel()

	account := domain.Account{ID: uuid.New(), Email: "owner@example.com"}
	campaign := newTestCampaign(account.ID, "My Campaign")

	deps := Dependencies{
		CampaignStore: newMockCampaignStore(campaign),
		Logger:        nopLoggerInternal(),
	}

	c := newInProcessClient(t, deps)
	ctx := contextWithAccount(account)

	result, err := c.CallTool(ctx, mcp.CallToolRequest{
		Params: mcp.CallToolParams{
			Name: "update_campaign",
			Arguments: map[string]any{
				"campaign_id": campaign.ID.String(),
				"status":      "deleted", // invalid
			},
		},
	})
	if err != nil {
		t.Fatalf("call tool: %v", err)
	}
	if !result.IsError {
		t.Fatal("expected error for invalid status, got success")
	}
}
