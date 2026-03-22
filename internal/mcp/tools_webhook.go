package mcp

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/mark3labs/mcp-go/mcp"
	mcpserver "github.com/mark3labs/mcp-go/server"

	"github.com/earlypass/earlypass/internal/domain"
)

func registerWebhookTools(s *mcpserver.MCPServer, deps Dependencies) {
	s.AddTool(
		mcp.NewTool("manage_webhook",
			mcp.WithDescription("Create, list, or delete webhook endpoints for a campaign. Webhooks fire on events like signup.created or referral.converted. Example: manage_webhook(campaign_id='...', action='create', url='https://example.com/hook', events=['signup.created'])."),
			mcp.WithString("campaign_id",
				mcp.Required(),
				mcp.Description("UUID of the campaign."),
			),
			mcp.WithString("action",
				mcp.Required(),
				mcp.Description("Operation to perform: create a new endpoint, list existing endpoints, or delete an endpoint."),
				mcp.Enum("create", "list", "delete"),
			),
			mcp.WithString("url",
				mcp.Description("HTTPS endpoint URL to receive webhook POSTs. Required for action=create."),
			),
			mcp.WithArray("events",
				mcp.Description("Event types to subscribe to. Required for action=create. Allowed values: signup.created, referral.converted, email.verified."),
				mcp.WithStringEnumItems([]string{"signup.created", "referral.converted", "email.verified"}),
			),
			mcp.WithString("webhook_id",
				mcp.Description("UUID of the webhook endpoint to delete. Required for action=delete."),
			),
		),
		func(ctx context.Context, req mcp.CallToolRequest) (*mcp.CallToolResult, error) {
			idStr := mcp.ParseString(req, "campaign_id", "")
			if idStr == "" {
				return mcp.NewToolResultError("campaign_id is required"), nil
			}

			id, err := uuid.Parse(idStr)
			if err != nil {
				return mcp.NewToolResultError("campaign_id must be a valid UUID"), nil
			}

			if _, err := checkCampaignOwnership(ctx, deps, id); err != nil {
				deps.Logger.ErrorContext(ctx, "manage_webhook ownership check failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(err.Error()), nil
			}

			action := mcp.ParseString(req, "action", "")
			if action == "" {
				return mcp.NewToolResultError("action is required"), nil
			}

			switch action {
			case "list":
				return handleWebhookListDirect(ctx, deps, id, idStr)
			case "create":
				return handleWebhookCreateDirect(ctx, deps, req, id, idStr)
			case "delete":
				return handleWebhookDeleteDirect(ctx, deps, req, id, idStr)
			default:
				return mcp.NewToolResultError(fmt.Sprintf("unknown action %q: must be create, list, or delete", action)), nil
			}
		},
	)
}

func handleWebhookListDirect(ctx context.Context, deps Dependencies, campaignID uuid.UUID, campaignIDStr string) (*mcp.CallToolResult, error) {
	endpoints, err := deps.WebhookStore.ListEndpoints(ctx, campaignID)
	if err != nil {
		deps.Logger.ErrorContext(ctx, "manage_webhook list failed", "campaign_id", campaignIDStr, "error", err.Error())
		return mcp.NewToolResultError(fmt.Sprintf("list webhooks: %s", err.Error())), nil
	}

	type endpointItem struct {
		ID         string   `json:"id"`
		CampaignID string   `json:"campaign_id"`
		URL        string   `json:"url"`
		Events     []string `json:"events"`
		Active     bool     `json:"active"`
		CreatedAt  string   `json:"created_at"`
	}

	items := make([]endpointItem, len(endpoints))
	for i, e := range endpoints {
		events := make([]string, len(e.Events))
		for j, ev := range e.Events {
			events[j] = string(ev)
		}
		items[i] = endpointItem{
			ID:         e.ID.String(),
			CampaignID: e.CampaignID.String(),
			URL:        e.URL,
			Events:     events,
			Active:     e.Active,
			CreatedAt:  e.CreatedAt.String(),
		}
	}

	result := map[string]any{"endpoints": items}

	data, err := json.Marshal(result)
	if err != nil {
		return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
	}

	return mcp.NewToolResultText(string(data)), nil
}

func handleWebhookCreateDirect(ctx context.Context, deps Dependencies, req mcp.CallToolRequest, campaignID uuid.UUID, campaignIDStr string) (*mcp.CallToolResult, error) {
	webhookURL := mcp.ParseString(req, "url", "")
	if webhookURL == "" {
		return mcp.NewToolResultError("url is required for action=create"), nil
	}

	eventsRaw := mcp.ParseArgument(req, "events", nil)
	var events []string

	if eventsRaw != nil {
		switch v := eventsRaw.(type) {
		case []any:
			for _, e := range v {
				if s, ok := e.(string); ok {
					events = append(events, s)
				}
			}
		case []string:
			events = v
		case string:
			events = strings.Split(v, ",")
		}
	}

	if len(events) == 0 {
		return mcp.NewToolResultError("events is required for action=create"), nil
	}

	eventTypes := make([]domain.WebhookEventType, len(events))
	for i, e := range events {
		eventTypes[i] = domain.WebhookEventType(e)
	}

	endpoint := domain.WebhookEndpoint{
		ID:         uuid.New(),
		CampaignID: campaignID,
		URL:        webhookURL,
		Events:     eventTypes,
		Active:     true,
		CreatedAt:  time.Now().UTC(),
	}

	if err := deps.WebhookStore.CreateEndpoint(ctx, endpoint); err != nil {
		deps.Logger.ErrorContext(ctx, "manage_webhook create failed", "campaign_id", campaignIDStr, "error", err.Error())
		return mcp.NewToolResultError(fmt.Sprintf("create webhook: %s", err.Error())), nil
	}

	resultEvents := make([]string, len(endpoint.Events))
	for i, ev := range endpoint.Events {
		resultEvents[i] = string(ev)
	}

	result := map[string]any{
		"id":          endpoint.ID.String(),
		"campaign_id": endpoint.CampaignID.String(),
		"url":         endpoint.URL,
		"events":      resultEvents,
		"active":      endpoint.Active,
		"created_at":  endpoint.CreatedAt.String(),
	}

	data, err := json.Marshal(result)
	if err != nil {
		return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
	}

	return mcp.NewToolResultText(string(data)), nil
}

func handleWebhookDeleteDirect(ctx context.Context, deps Dependencies, req mcp.CallToolRequest, _ uuid.UUID, campaignIDStr string) (*mcp.CallToolResult, error) {
	webhookIDStr := mcp.ParseString(req, "webhook_id", "")
	if webhookIDStr == "" {
		return mcp.NewToolResultError("webhook_id is required for action=delete"), nil
	}

	webhookID, err := uuid.Parse(webhookIDStr)
	if err != nil {
		return mcp.NewToolResultError("webhook_id must be a valid UUID"), nil
	}

	if err := deps.WebhookStore.DeleteEndpoint(ctx, webhookID); err != nil {
		deps.Logger.ErrorContext(ctx, "manage_webhook delete failed", "campaign_id", campaignIDStr, "webhook_id", webhookIDStr, "error", err.Error())
		return mcp.NewToolResultError(fmt.Sprintf("delete webhook: %s", err.Error())), nil
	}

	data, err := json.Marshal(map[string]string{"deleted": webhookIDStr})
	if err != nil {
		return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
	}

	return mcp.NewToolResultText(string(data)), nil
}
