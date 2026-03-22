package mcp

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/google/uuid"
	"github.com/mark3labs/mcp-go/mcp"
	mcpserver "github.com/mark3labs/mcp-go/server"

	"github.com/earlypass/earlypass/internal/domain"
)


const (
	exportPageSize = 500
	exportMaxRows  = 10_000
)

// signupToMap converts a domain.Signup to a map for JSON serialisation.
func signupToMap(s domain.Signup) map[string]any {
	m := map[string]any{
		"id":                 s.ID.String(),
		"campaign_id":        s.CampaignID.String(),
		"email":              s.Email,
		"email_verified":     s.EmailVerified,
		"referral_code":      s.ReferralCode,
		"base_position":      s.BasePosition,
		"effective_position": s.EffectivePosition(),
		"referral_count":     s.ReferralCount,
		"status":             string(s.Status),
		"created_at":         s.CreatedAt.String(),
	}
	if s.ReferredBy != nil {
		m["referred_by"] = s.ReferredBy.String()
	}
	if s.InvitedAt != nil {
		m["invited_at"] = s.InvitedAt.String()
	}
	if s.InviteToken != nil {
		m["invite_token"] = *s.InviteToken
	}
	if s.InviteTokenRedeemedAt != nil {
		m["invite_token_redeemed_at"] = s.InviteTokenRedeemedAt.String()
	}
	return m
}

func registerSignupTools(s *mcpserver.MCPServer, deps Dependencies) {
	s.AddTool(
		mcp.NewTool("list_signups",
			mcp.WithDescription("List signups for a campaign with pagination. Returns emails, positions, referral counts, and statuses. Use export_signups to get all signups at once."),
			mcp.WithString("campaign_id",
				mcp.Required(),
				mcp.Description("UUID of the campaign."),
			),
			mcp.WithNumber("limit",
				mcp.Description("Maximum number of signups to return. Default: 20, max: 500."),
				mcp.DefaultNumber(20),
			),
			mcp.WithNumber("offset",
				mcp.Description("Number of signups to skip for pagination. Default: 0."),
				mcp.DefaultNumber(0),
			),
			mcp.WithString("status",
				mcp.Description("Filter by signup status: pending, verified, rejected, expired, or invited. Omit to return all."),
				mcp.Enum("pending", "verified", "rejected", "expired", "invited"),
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
				deps.Logger.ErrorContext(ctx, "list_signups ownership check failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(err.Error()), nil
			}

			limit := mcp.ParseInt(req, "limit", 20)
			if limit <= 0 || limit > 500 {
				limit = 20
			}

			offset := mcp.ParseInt(req, "offset", 0)
			if offset < 0 {
				offset = 0
			}

			statusFilter := mcp.ParseString(req, "status", "")

			var signups []domain.Signup
			var total int

			if statusFilter != "" {
				filter := domain.SignupFilter{
					Status: statusFilter,
					Limit:  limit,
					Offset: offset,
				}
				var filteredErr error
				signups, total, filteredErr = deps.SignupStore.ListByCampaignFiltered(ctx, id, filter)
				if filteredErr != nil {
					deps.Logger.ErrorContext(ctx, "list_signups filtered failed", "campaign_id", idStr, "error", filteredErr.Error())
					return mcp.NewToolResultError(filteredErr.Error()), nil
				}
			} else {
				paged, pagedErr := deps.SignupStore.ListByCampaignPaginated(ctx, id, limit, offset)
				if pagedErr != nil {
					deps.Logger.ErrorContext(ctx, "list_signups paginated failed", "campaign_id", idStr, "error", pagedErr.Error())
					return mcp.NewToolResultError(pagedErr.Error()), nil
				}
				signups = paged
				count, countErr := deps.SignupStore.CountByCampaign(ctx, id)
				if countErr != nil {
					deps.Logger.ErrorContext(ctx, "list_signups count failed", "campaign_id", idStr, "error", countErr.Error())
					return mcp.NewToolResultError(countErr.Error()), nil
				}
				total = count
			}

			items := make([]map[string]any, len(signups))
			for i, su := range signups {
				items[i] = signupToMap(su)
			}

			result := map[string]any{
				"signups": items,
				"total":   total,
			}

			data, err := json.Marshal(result)
			if err != nil {
				return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
			}

			return mcp.NewToolResultText(string(data)), nil
		},
	)

	s.AddTool(
		mcp.NewTool("export_signups",
			mcp.WithDescription("Export all signups for a campaign. Paginates automatically through up to 10,000 rows. Returns JSON array or CSV. Use format='csv' for spreadsheet imports."),
			mcp.WithString("campaign_id",
				mcp.Required(),
				mcp.Description("UUID of the campaign."),
			),
			mcp.WithString("format",
				mcp.Description("Output format: json (default) or csv."),
				mcp.Enum("json", "csv"),
				mcp.DefaultString("json"),
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
				deps.Logger.ErrorContext(ctx, "export_signups ownership check failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(err.Error()), nil
			}

			format := mcp.ParseString(req, "format", "json")

			var all []domain.Signup
			offset := 0
			truncated := false

			total, err := deps.SignupStore.CountByCampaign(ctx, id)
			if err != nil {
				deps.Logger.ErrorContext(ctx, "export_signups count failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(err.Error()), nil
			}

			for {
				page, pageErr := deps.SignupStore.ListByCampaignPaginated(ctx, id, exportPageSize, offset)
				if pageErr != nil {
					deps.Logger.ErrorContext(ctx, "export_signups page failed", "campaign_id", idStr, "offset", offset, "error", pageErr.Error())
					return mcp.NewToolResultError(pageErr.Error()), nil
				}

				all = append(all, page...)
				offset += len(page)

				if offset >= exportMaxRows {
					truncated = true
					all = all[:exportMaxRows]
					break
				}

				if offset >= total || len(page) == 0 {
					break
				}
			}

			warning := ""
			if truncated {
				warning = fmt.Sprintf("\n// WARNING: export truncated at %d rows. Use the API directly for full dataset.", exportMaxRows)
			}

			if format == "csv" {
				return mcp.NewToolResultText(domainSignupsToCSV(all) + warning), nil
			}

			items := make([]map[string]any, len(all))
			for i, su := range all {
				items[i] = signupToMap(su)
			}

			data, err := json.Marshal(items)
			if err != nil {
				return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
			}

			return mcp.NewToolResultText(string(data) + warning), nil
		},
	)

	s.AddTool(
		mcp.NewTool("invite_signups",
			mcp.WithDescription("Grant access to the top N verified signups by queue position (referral leaders first). Sends invite emails automatically. Already-invited signups are skipped — safe to call multiple times. Example: invite_signups(campaign_id='...', count=50)."),
			mcp.WithString("campaign_id",
				mcp.Required(),
				mcp.Description("UUID of the campaign."),
			),
			mcp.WithNumber("count",
				mcp.Required(),
				mcp.Description("Number of signups to invite. Must be between 1 and 10,000."),
				mcp.Min(1),
				mcp.Max(10000),
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
				deps.Logger.ErrorContext(ctx, "invite_signups ownership check failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(err.Error()), nil
			}

			count := mcp.ParseInt(req, "count", 0)
			if count < 1 || count > 10000 {
				return mcp.NewToolResultError("count must be between 1 and 10000"), nil
			}

			invited, err := deps.SignupStore.InviteTopN(ctx, id, count)
			if err != nil {
				deps.Logger.ErrorContext(ctx, "invite_signups failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(fmt.Sprintf("invite signups: %s", err.Error())), nil
			}

			totalInvited, err := deps.SignupStore.CountInvitedByCampaign(ctx, id)
			if err != nil {
				deps.Logger.ErrorContext(ctx, "invite_signups count failed", "campaign_id", idStr, "error", err.Error())
				return mcp.NewToolResultError(fmt.Sprintf("count invited: %s", err.Error())), nil
			}

			result := map[string]any{
				"invited":       len(invited),
				"total_invited": totalInvited,
			}

			data, err := json.Marshal(result)
			if err != nil {
				return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
			}

			return mcp.NewToolResultText(string(data)), nil
		},
	)
}

func registerInviteTools(s *mcpserver.MCPServer, deps Dependencies) {
	s.AddTool(
		mcp.NewTool("get_invite_token",
			mcp.WithDescription("Check the status of an invite token. Returns 'active' if the token is valid and unused, or 'redeemed' if it has already been used. Returns an error if the token is not found or expired (>30 days old)."),
			mcp.WithString("token",
				mcp.Required(),
				mcp.Description("The invite token UUID to look up."),
			),
		),
		func(ctx context.Context, req mcp.CallToolRequest) (*mcp.CallToolResult, error) {
			token := mcp.ParseString(req, "token", "")
			if token == "" {
				return mcp.NewToolResultError("token is required"), nil
			}

			sg, err := deps.SignupStore.GetByInviteToken(ctx, token)
			if err != nil {
				deps.Logger.ErrorContext(ctx, "get_invite_token fetch failed", "token", token, "error", err.Error())
				return mcp.NewToolResultError("invite token not found or expired"), nil
			}

			if _, err := checkCampaignOwnership(ctx, deps, sg.CampaignID); err != nil {
				deps.Logger.ErrorContext(ctx, "get_invite_token ownership check failed", "campaign_id", sg.CampaignID.String(), "error", err.Error())
				return mcp.NewToolResultError(err.Error()), nil
			}

			status := "active"
			if sg.InviteTokenRedeemedAt != nil {
				status = "redeemed"
			}

			result := map[string]any{
				"signup_id":   sg.ID.String(),
				"campaign_id": sg.CampaignID.String(),
				"email":       sg.Email,
				"status":      status,
				"invited_at":  sg.InvitedAt,
				"redeemed_at": sg.InviteTokenRedeemedAt,
			}

			data, err := json.Marshal(result)
			if err != nil {
				return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
			}

			return mcp.NewToolResultText(string(data)), nil
		},
	)

	s.AddTool(
		mcp.NewTool("redeem_invite_token",
			mcp.WithDescription("Redeem an invite token, marking the invited user as having accepted. Idempotent — safe to call multiple times. Returns the signup details. Returns an error if the token is not found or expired (>30 days old)."),
			mcp.WithString("token",
				mcp.Required(),
				mcp.Description("The invite token UUID to redeem."),
			),
		),
		func(ctx context.Context, req mcp.CallToolRequest) (*mcp.CallToolResult, error) {
			token := mcp.ParseString(req, "token", "")
			if token == "" {
				return mcp.NewToolResultError("token is required"), nil
			}

			// Fetch first to verify campaign ownership before mutating.
			sg, err := deps.SignupStore.GetByInviteToken(ctx, token)
			if err != nil {
				deps.Logger.ErrorContext(ctx, "redeem_invite_token fetch failed", "token", token, "error", err.Error())
				return mcp.NewToolResultError("invite token not found or expired"), nil
			}

			if _, err := checkCampaignOwnership(ctx, deps, sg.CampaignID); err != nil {
				deps.Logger.ErrorContext(ctx, "redeem_invite_token ownership check failed", "campaign_id", sg.CampaignID.String(), "error", err.Error())
				return mcp.NewToolResultError(err.Error()), nil
			}

			sg, err = deps.SignupStore.RedeemInviteToken(ctx, token)
			if err != nil {
				deps.Logger.ErrorContext(ctx, "redeem_invite_token failed", "token", token, "error", err.Error())
				return mcp.NewToolResultError(fmt.Sprintf("redeem invite token: %s", err.Error())), nil
			}

			data, err := json.Marshal(signupToMap(sg))
			if err != nil {
				return mcp.NewToolResultError(fmt.Sprintf("encode result: %s", err.Error())), nil
			}

			return mcp.NewToolResultText(string(data)), nil
		},
	)
}

func domainSignupsToCSV(signups []domain.Signup) string {
	var sb strings.Builder
	sb.WriteString("id,email,status,referral_code,base_position,effective_position,referral_count,invite_token,created_at\n")

	for _, s := range signups {
		inviteToken := ""
		if s.InviteToken != nil {
			inviteToken = *s.InviteToken
		}
		fmt.Fprintf(&sb, "%s,%s,%s,%s,%d,%d,%d,%s,%s\n",
			s.ID.String(), s.Email, string(s.Status), s.ReferralCode,
			s.BasePosition, s.EffectivePosition(), s.ReferralCount,
			inviteToken, s.CreatedAt.String(),
		)
	}

	return sb.String()
}
