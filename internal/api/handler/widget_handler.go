package handler

import (
	"context"
	"errors"
	"fmt"
	"log/slog"
	"strings"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/api/middleware"
	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// GetWidgetData handles GET /v1/w/{slug}.
// Public endpoint — returns campaign info, leaderboard, and optionally a signup's position.
func (s *Server) GetWidgetData(ctx context.Context, req generated.GetWidgetDataRequestObject) (generated.GetWidgetDataResponseObject, error) {
	campaign, err := s.campaigns.GetBySlug(ctx, req.Slug)
	if err != nil {
		if errors.Is(err, store.ErrNotFound) {
			return generated.GetWidgetData404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "fetching campaign by slug", slog.String("error", err.Error()))
		return nil, fmt.Errorf("fetching campaign: %w", err)
	}

	// Enforce origin restriction only when ProductURL is configured.
	r := middleware.RequestFromContext(ctx)
	if r != nil && campaign.Settings.ProductURL != "" && !campaign.Settings.MatchesOrigin(extractOrigin(r, s.trustedProxies)) {
		return generated.GetWidgetData403ApplicationProblemPlusJSONResponse{
			ForbiddenApplicationProblemPlusJSONResponse: problemForbidden("origin not allowed"),
		}, nil
	}

	total, err := s.signups.CountByCampaign(ctx, campaign.ID)
	if err != nil {
		s.logger.ErrorContext(ctx, "counting signups for widget", slog.String("error", err.Error()))
		return nil, fmt.Errorf("counting signups: %w", err)
	}

	wd := generated.WidgetData{
		CampaignId:   campaign.ID,
		CampaignName: campaign.Name,
		Slug:         campaign.Slug,
		TotalSignups: total,
	}

	// If an email param is provided, include the signup's position data.
	if req.Params.Email != nil {
		email := strings.ToLower(strings.TrimSpace(string(*req.Params.Email)))
		sg, sgErr := s.signups.GetByCampaignAndEmail(ctx, campaign.ID, email)
		if sgErr == nil {
			apiSg := s.buildWidgetSignup(ctx, campaign.ID, sg)
			wd.Signup = &apiSg
		}
	} else if req.Params.ReferralCode != nil {
		// Also support lookup by referral code.
		sg, sgErr := s.signups.GetByCampaignAndReferralCode(ctx, campaign.ID, *req.Params.ReferralCode)
		if sgErr == nil {
			apiSg := s.buildWidgetSignup(ctx, campaign.ID, sg)
			wd.Signup = &apiSg
		}
	}

	return generated.GetWidgetData200JSONResponse(wd), nil
}

// buildWidgetSignup converts a domain.Signup to the API type with an adjusted
// effective position that excludes invited users from the queue count.
func (s *Server) buildWidgetSignup(ctx context.Context, campaignID uuid.UUID, sg domain.Signup) generated.Signup {
	apiSg := domainSignupToAPI(sg)
	if sg.Status != domain.SignupStatusInvited {
		adjusted, err := s.signups.GetAdjustedPosition(ctx, campaignID, sg.ID)
		if err == nil {
			apiSg.EffectivePosition = adjusted
		}
	}
	return apiSg
}


