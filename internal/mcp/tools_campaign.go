package mcp

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"

	"github.com/google/uuid"
	"github.com/mark3labs/mcp-go/mcp"
	mcpserver "github.com/mark3labs/mcp-go/server"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

func registerCampaignTools(s *mcpserver.MCPServer, deps Dependencies) {
	s.AddTool(
		mcp.NewTool("list_campaigns",
			mcp.WithDescription("List all campaigns belonging to the authenticated account."),
			mcp.WithNumber("limit",
				mcp.Description("Maximum number of campaigns to return. Default: 20."),
				mcp.DefaultNumber(20),
			),
			mcp.WithNumber("offset",
				mcp.Description("Number of campaigns to skip for pagination. Default: 0."),
				mcp.DefaultNumber(0),
			),
		),
		func(ctx context.Context, req mcp.CallToolRequest) (*mcp.CallToolResult, error) {
			account, err := accountFromContext(ctx)
			if err != nil {
				return mcp.NewToolResultError(err.Error()), nil
			}

			limit := mcp.ParseInt(req, "limit", 20)
			if limit <= 0 || limit > 100 {
				limit = 20
			}

			offset := mcp.ParseInt(req, "offset", 0)
			if offset < 0 {
				offset = 0
			}

			campaigns, err := deps.CampaignStore.ListByAccount(ctx, account.ID, limit, offset)
			if err != nil {
				deps.Logger.ErrorContext(ctx, "list_campaigns failed", "error", err.Error())
				return mcp.NewToolResultError(fmt.Sprintf("list campaigns: %s", err.Error())), nil
			}

			type campaignItem struct {
				ID          string  `json:"id"`
				Name        string  `json:"name"`
				Slug        string  `json:"slug"`
				Status      string  `json:"status"`
				BoostWeight float64 `json:"boost_weight"`
				ProductURL  string  `json:"product_url,omitempty"`
				InviteURL   string  `json:"invite_url,omitempty"`
				MaxSignups  *int    `json:"max_signups,omitempty"`
				CreatedAt   string  `json:"created_at"`
			}

			items := make([]campaignItem, len(campaigns))
			for i, c := range campaigns {
				items[i] = campaignItem{
					ID:          c.ID.String(),
					Name:        c.Name,
					Slug:        c.Slug,
					Status:      string(c.Status),
					BoostWeight: c.Settings.BoostWeight,
					ProductURL:  c.Settings.ProductURL,
					InviteURL:   c.Settings.InviteURL,
					MaxSignups:  c.MaxSignups,
					CreatedAt:   c.CreatedAt.String(),
				}
			}

			data, err := json.Marshal(items)
			if err != nil {
				return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
			}

			return mcp.NewToolResultText(string(data)), nil
		},
	)

	s.AddTool(
		mcp.NewTool("create_campaign",
			mcp.WithDescription("Create a new EarlyPass campaign under the authenticated account. Returns the full campaign configuration."),
			mcp.WithString("name",
				mcp.Required(),
				mcp.Description("Campaign display name, e.g. 'My App Launch'. Maximum 200 characters."),
			),
			mcp.WithString("product_url",
				mcp.Description("URL of the product that invited users are directed to. Used as the CTA link in invite emails."),
			),
			mcp.WithString("invite_url",
				mcp.Description("Optional. Overrides product_url as the base for invite links in emails. Useful for directing invited users to a redemption page."),
			),
			mcp.WithNumber("boost_weight",
				mcp.Description("Queue position boost per referral. Each referral moves the signup up by this many positions. Default: 1.0."),
			),
			mcp.WithNumber("max_signups",
				mcp.Description("Maximum number of signups allowed. Omit or set to 0 for no cap."),
			),
		),
		func(ctx context.Context, req mcp.CallToolRequest) (*mcp.CallToolResult, error) {
			account, err := accountFromContext(ctx)
			if err != nil {
				return mcp.NewToolResultError(err.Error()), nil
			}

			name := mcp.ParseString(req, "name", "")
			if name == "" {
				return mcp.NewToolResultError("name is required"), nil
			}

			campaign, err := domain.NewCampaign(name)
			if err != nil {
				return mcp.NewToolResultError(err.Error()), nil
			}

			campaign.AccountID = account.ID

			if productURL := mcp.ParseString(req, "product_url", ""); productURL != "" {
				campaign.Settings.ProductURL = productURL
			}
			if inviteURL := mcp.ParseString(req, "invite_url", ""); inviteURL != "" {
				campaign.Settings.InviteURL = inviteURL
			}

			if boostWeight := mcp.ParseFloat64(req, "boost_weight", -1); boostWeight >= 0 {
				campaign.Settings.BoostWeight = boostWeight
			}

			if maxSignups := mcp.ParseInt(req, "max_signups", 0); maxSignups > 0 {
				ms := maxSignups
				campaign.MaxSignups = &ms
			}

			if err := deps.CampaignStore.Create(ctx, campaign); err != nil {
				if errors.Is(err, store.ErrConflict) {
					return mcp.NewToolResultError("a campaign with this name already exists"), nil
				}
				deps.Logger.ErrorContext(ctx, "create_campaign failed", "error", err.Error())
				return mcp.NewToolResultError(fmt.Sprintf("create campaign: %s", err.Error())), nil
			}

			result := map[string]any{
				"id":           campaign.ID.String(),
				"name":         campaign.Name,
				"slug":         campaign.Slug,
				"status":       string(campaign.Status),
				"boost_weight": campaign.Settings.BoostWeight,
				"product_url":  campaign.Settings.ProductURL,
				"invite_url":   campaign.Settings.InviteURL,
				"max_signups":  campaign.MaxSignups,
				"created_at":   campaign.CreatedAt.String(),
				"updated_at":   campaign.UpdatedAt.String(),
			}

			data, err := json.Marshal(result)
			if err != nil {
				return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
			}

			return mcp.NewToolResultText(string(data)), nil
		},
	)

	s.AddTool(
		mcp.NewTool("get_campaign",
			mcp.WithDescription("Retrieve metadata for a campaign by its ID: name, slug, status, settings, and timestamps. For signup counts and viral metrics use get_campaign_stats instead."),
			mcp.WithString("campaign_id",
				mcp.Required(),
				mcp.Description("UUID of the campaign to retrieve."),
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

			campaign, err := checkCampaignOwnership(ctx, deps, id)
			if err != nil {
				deps.Logger.ErrorContext(ctx, "get_campaign failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(err.Error()), nil
			}

			result := map[string]any{
				"id":           campaign.ID.String(),
				"name":         campaign.Name,
				"slug":         campaign.Slug,
				"status":       string(campaign.Status),
				"boost_weight": campaign.Settings.BoostWeight,
				"product_url":  campaign.Settings.ProductURL,
				"invite_url":   campaign.Settings.InviteURL,
				"max_signups":  campaign.MaxSignups,
				"created_at":   campaign.CreatedAt.String(),
				"updated_at":   campaign.UpdatedAt.String(),
			}

			data, err := json.Marshal(result)
			if err != nil {
				return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
			}

			return mcp.NewToolResultText(string(data)), nil
		},
	)

	s.AddTool(
		mcp.NewTool("update_campaign",
			mcp.WithDescription("Update an existing campaign's configuration. Only fields that are provided will be changed — omit a field to leave it unchanged."),
			mcp.WithString("campaign_id",
				mcp.Required(),
				mcp.Description("UUID of the campaign to update."),
			),
			mcp.WithString("name",
				mcp.Description("New campaign display name. Maximum 200 characters."),
			),
			mcp.WithString("status",
				mcp.Description("Campaign status: 'active' to accept signups, 'paused' to stop accepting new signups."),
				mcp.Enum("active", "paused"),
			),
			mcp.WithString("product_url",
				mcp.Description("URL of the product that invited users are directed to. Used as the CTA link in invite emails."),
			),
			mcp.WithString("invite_url",
				mcp.Description("Optional. Overrides product_url as the base for invite links in emails. Set to empty string to clear."),
			),
			mcp.WithNumber("boost_weight",
				mcp.Description("Queue position boost per referral. Each referral moves the signup up by this many positions. Must be >= 0."),
			),
			mcp.WithNumber("max_signups",
				mcp.Description("Maximum number of signups allowed. Set to 0 to remove the cap. Omit to leave unchanged."),
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

			campaign, err := checkCampaignOwnership(ctx, deps, id)
			if err != nil {
				deps.Logger.ErrorContext(ctx, "update_campaign ownership check failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(err.Error()), nil
			}

			// Apply partial updates — only mutate fields that were explicitly provided.
			// Sentinel values: empty string = not provided, -1.0 = not provided for floats,
			// noMaxSignupsSentinel = not provided for max_signups.
			const noMaxSignupsSentinel = -9999

			updated := campaign

			if name := mcp.ParseString(req, "name", ""); name != "" {
				updated.Name = name
			}

			if status := mcp.ParseString(req, "status", ""); status != "" {
				switch domain.CampaignStatus(status) {
				case domain.CampaignStatusActive, domain.CampaignStatusPaused:
					updated.Status = domain.CampaignStatus(status)
				case domain.CampaignStatusPending, domain.CampaignStatusFull:
					return mcp.NewToolResultError(fmt.Sprintf("status %q cannot be set directly: must be 'active' or 'paused'", status)), nil
				default:
					return mcp.NewToolResultError(fmt.Sprintf("invalid status %q: must be 'active' or 'paused'", status)), nil
				}
			}

			if productURL := mcp.ParseString(req, "product_url", ""); productURL != "" {
				updated.Settings.ProductURL = productURL
			}
			// invite_url: empty string clears it, absent means unchanged.
			if inviteURL, ok := req.GetArguments()["invite_url"]; ok {
				if s, isStr := inviteURL.(string); isStr {
					updated.Settings.InviteURL = s
				}
			}

			if boostWeight := mcp.ParseFloat64(req, "boost_weight", -1); boostWeight >= 0 {
				updated.Settings.BoostWeight = boostWeight
			}

			if maxSignups := mcp.ParseInt(req, "max_signups", noMaxSignupsSentinel); maxSignups != noMaxSignupsSentinel {
				if maxSignups <= 0 {
					updated.MaxSignups = nil
				} else {
					ms := maxSignups
					updated.MaxSignups = &ms
				}
			}

			if err := updated.Validate(); err != nil {
				return mcp.NewToolResultError(err.Error()), nil
			}

			if err := deps.CampaignStore.Update(ctx, updated); err != nil {
				deps.Logger.ErrorContext(ctx, "update_campaign failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(fmt.Sprintf("update campaign: %s", err.Error())), nil
			}

			result := map[string]any{
				"id":           updated.ID.String(),
				"name":         updated.Name,
				"slug":         updated.Slug,
				"status":       string(updated.Status),
				"boost_weight": updated.Settings.BoostWeight,
				"product_url":  updated.Settings.ProductURL,
				"invite_url":   updated.Settings.InviteURL,
				"max_signups":  updated.MaxSignups,
				"created_at":   updated.CreatedAt.String(),
				"updated_at":   updated.UpdatedAt.String(),
			}

			data, err := json.Marshal(result)
			if err != nil {
				return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
			}

			return mcp.NewToolResultText(string(data)), nil
		},
	)

	s.AddTool(
		mcp.NewTool("get_campaign_stats",
			mcp.WithDescription("Get analytics for a campaign: total signups, verified signups, viral coefficient, referral rate, and today's signup count."),
			mcp.WithString("campaign_id",
				mcp.Required(),
				mcp.Description("UUID of the campaign."),
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
				deps.Logger.ErrorContext(ctx, "get_campaign_stats failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(err.Error()), nil
			}

			stats, err := deps.SignupStore.GetStatsBatch(ctx, id)
			if err != nil {
				deps.Logger.ErrorContext(ctx, "get_campaign_stats batch failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(fmt.Sprintf("get campaign stats: %s", err.Error())), nil
			}

			data, err := json.Marshal(stats)
			if err != nil {
				return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
			}

			return mcp.NewToolResultText(string(data)), nil
		},
	)
}
