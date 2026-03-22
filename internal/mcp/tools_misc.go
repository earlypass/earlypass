package mcp

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/google/uuid"
	"github.com/mark3labs/mcp-go/mcp"
	mcpserver "github.com/mark3labs/mcp-go/server"
)

func registerMiscTools(s *mcpserver.MCPServer, deps Dependencies) {
	s.AddTool(
		mcp.NewTool("get_leaderboard",
			mcp.WithDescription("Get the top referrers for a campaign ranked by referral count. Returns masked emails, referral codes, and effective queue positions."),
			mcp.WithString("campaign_id",
				mcp.Required(),
				mcp.Description("UUID of the campaign."),
			),
			mcp.WithNumber("limit",
				mcp.Description("Number of top referrers to return. Default: 10, max: 100."),
				mcp.DefaultNumber(10),
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
				deps.Logger.ErrorContext(ctx, "get_leaderboard ownership check failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(err.Error()), nil
			}

			limit := mcp.ParseInt(req, "limit", 10)
			if limit <= 0 || limit > 100 {
				limit = 10
			}

			entries, err := deps.SignupStore.ListLeaderboard(ctx, id, limit)
			if err != nil {
				deps.Logger.ErrorContext(ctx, "get_leaderboard failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(fmt.Sprintf("get leaderboard: %s", err.Error())), nil
			}

			type leaderboardEntry struct {
				Rank              int    `json:"rank"`
				ReferralCode      string `json:"referral_code"`
				ReferralCount     int    `json:"referral_count"`
				EffectivePosition int    `json:"effective_position"`
				EmailMasked       string `json:"email_masked,omitempty"`
			}

			items := make([]leaderboardEntry, len(entries))
			for i, su := range entries {
				items[i] = leaderboardEntry{
					Rank:              i + 1,
					ReferralCode:      su.ReferralCode,
					ReferralCount:     su.ReferralCount,
					EffectivePosition: su.EffectivePosition(),
					EmailMasked:       maskEmail(su.Email),
				}
			}

			result := map[string]any{"entries": items}

			data, err := json.Marshal(result)
			if err != nil {
				return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
			}

			return mcp.NewToolResultText(string(data)), nil
		},
	)

	s.AddTool(
		mcp.NewTool("get_widget_embed",
			mcp.WithDescription("Get the HTML <script> tag to embed the EarlyPass widget on any web page. Returns the embed snippet plus documentation of optional visual attributes (accent color, dark mode) that can be added to the tag."),
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

			campaign, err := checkCampaignOwnership(ctx, deps, id)
			if err != nil {
				deps.Logger.ErrorContext(ctx, "get_widget_embed ownership check failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(err.Error()), nil
			}

			snippet := fmt.Sprintf(
				"<!-- EarlyPass widget for campaign: %s -->\n<script src=\"%s/widget.js\" data-campaign=\"%s\" async></script>\n<!-- Optional attributes (add to the <script> tag above):\n     data-accent=\"#6366f1\"   — primary accent color (any CSS color value; default: #6366f1)\n     data-theme=\"dark\"       — enable dark mode (omit for light mode)\n-->",
				campaign.Name,
				deps.BaseURL,
				campaign.Slug,
			)

			return mcp.NewToolResultText(snippet), nil
		},
	)
}

// maskEmail returns a partially redacted email address, e.g. "j***@example.com".
func maskEmail(email string) string {
	for i, ch := range email {
		if ch == '@' {
			if i <= 1 {
				return email[:i] + "***" + email[i:]
			}
			return email[:1] + "***" + email[i:]
		}
	}
	return email
}
