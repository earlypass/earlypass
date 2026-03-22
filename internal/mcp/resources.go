package mcp

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/google/uuid"
	"github.com/mark3labs/mcp-go/mcp"
	mcpserver "github.com/mark3labs/mcp-go/server"
)

func registerResources(s *mcpserver.MCPServer, deps Dependencies) {
	s.AddResourceTemplate(
		mcp.NewResourceTemplate(
			"campaign://{id}",
			"Campaign details",
			mcp.WithTemplateDescription("Full campaign metadata including name, slug, status, and settings."),
			mcp.WithTemplateMIMEType("application/json"),
		),
		func(ctx context.Context, req mcp.ReadResourceRequest) ([]mcp.ResourceContents, error) {
			id, err := extractIDFromURI(req.Params.URI, "campaign://")
			if err != nil {
				return nil, fmt.Errorf("invalid resource URI: %w", err)
			}

			campaignID, err := uuid.Parse(id)
			if err != nil {
				return nil, fmt.Errorf("invalid campaign ID in URI: %w", err)
			}

			campaign, err := checkCampaignOwnership(ctx, deps, campaignID)
			if err != nil {
				deps.Logger.ErrorContext(ctx, "resource campaign://{id} failed", "id", id, "error", err.Error())
				return nil, fmt.Errorf("get campaign: %w", err)
			}

			result := map[string]any{
				"id":          campaign.ID.String(),
				"name":        campaign.Name,
				"slug":        campaign.Slug,
				"status":      string(campaign.Status),
				"boost_weight": campaign.Settings.BoostWeight,
				"created_at":  campaign.CreatedAt.String(),
				"updated_at":  campaign.UpdatedAt.String(),
			}

			data, jsonErr := json.Marshal(result)
			if jsonErr != nil {
				return nil, fmt.Errorf("encode campaign: %w", jsonErr)
			}

			return []mcp.ResourceContents{
				mcp.TextResourceContents{
					URI:      req.Params.URI,
					MIMEType: "application/json",
					Text:     string(data),
				},
			}, nil
		},
	)

	s.AddResourceTemplate(
		mcp.NewResourceTemplate(
			"campaign://{id}/signups",
			"Campaign signups",
			mcp.WithTemplateDescription("First 50 signups for a campaign including email, position, and referral data."),
			mcp.WithTemplateMIMEType("application/json"),
		),
		func(ctx context.Context, req mcp.ReadResourceRequest) ([]mcp.ResourceContents, error) {
			rawID, err := extractIDFromURI(req.Params.URI, "campaign://")
			if err != nil {
				return nil, fmt.Errorf("invalid resource URI: %w", err)
			}

			// Strip trailing /signups to get the campaign ID.
			idStr := strings.TrimSuffix(rawID, "/signups")

			campaignID, err := uuid.Parse(idStr)
			if err != nil {
				return nil, fmt.Errorf("invalid campaign ID in URI: %w", err)
			}

			if _, err := checkCampaignOwnership(ctx, deps, campaignID); err != nil {
				deps.Logger.ErrorContext(ctx, "resource campaign://{id}/signups failed", "id", idStr, "error", err.Error())
				return nil, fmt.Errorf("campaign access: %w", err)
			}

			signups, apiErr := deps.SignupStore.ListByCampaignPaginated(ctx, campaignID, 50, 0)
			if apiErr != nil {
				deps.Logger.ErrorContext(ctx, "resource campaign://{id}/signups list failed", "id", idStr, "error", apiErr.Error())
				return nil, fmt.Errorf("list signups: %w", apiErr)
			}

			items := make([]map[string]any, len(signups))
			for i, su := range signups {
				items[i] = signupToMap(su)
			}

			data, jsonErr := json.Marshal(items)
			if jsonErr != nil {
				return nil, fmt.Errorf("encode signups: %w", jsonErr)
			}

			return []mcp.ResourceContents{
				mcp.TextResourceContents{
					URI:      req.Params.URI,
					MIMEType: "application/json",
					Text:     string(data),
				},
			}, nil
		},
	)

	s.AddResourceTemplate(
		mcp.NewResourceTemplate(
			"campaign://{id}/leaderboard",
			"Campaign leaderboard",
			mcp.WithTemplateDescription("Top 10 referrers for a campaign ranked by referral count."),
			mcp.WithTemplateMIMEType("application/json"),
		),
		func(ctx context.Context, req mcp.ReadResourceRequest) ([]mcp.ResourceContents, error) {
			rawID, err := extractIDFromURI(req.Params.URI, "campaign://")
			if err != nil {
				return nil, fmt.Errorf("invalid resource URI: %w", err)
			}

			// Strip trailing /leaderboard to get the campaign ID.
			idStr := strings.TrimSuffix(rawID, "/leaderboard")

			campaignID, err := uuid.Parse(idStr)
			if err != nil {
				return nil, fmt.Errorf("invalid campaign ID in URI: %w", err)
			}

			if _, err := checkCampaignOwnership(ctx, deps, campaignID); err != nil {
				deps.Logger.ErrorContext(ctx, "resource campaign://{id}/leaderboard failed", "id", idStr, "error", err.Error())
				return nil, fmt.Errorf("campaign access: %w", err)
			}

			entries, apiErr := deps.SignupStore.ListLeaderboard(ctx, campaignID, 10)
			if apiErr != nil {
				deps.Logger.ErrorContext(ctx, "resource campaign://{id}/leaderboard list failed", "id", idStr, "error", apiErr.Error())
				return nil, fmt.Errorf("get leaderboard: %w", apiErr)
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

			data, jsonErr := json.Marshal(items)
			if jsonErr != nil {
				return nil, fmt.Errorf("encode leaderboard: %w", jsonErr)
			}

			return []mcp.ResourceContents{
				mcp.TextResourceContents{
					URI:      req.Params.URI,
					MIMEType: "application/json",
					Text:     string(data),
				},
			}, nil
		},
	)
}

// extractIDFromURI strips the scheme prefix and returns the path component.
// For "campaign://abc-123" with prefix "campaign://" it returns "abc-123".
func extractIDFromURI(uri, prefix string) (string, error) {
	if !strings.HasPrefix(uri, prefix) {
		return "", fmt.Errorf("URI %q does not start with %q", uri, prefix)
	}

	id := strings.TrimPrefix(uri, prefix)
	if id == "" {
		return "", fmt.Errorf("URI %q has empty ID", uri)
	}

	return id, nil
}
