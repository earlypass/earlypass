package handler

import (
	"context"
	"errors"
	"fmt"
	"log/slog"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/store"
)

// GetCampaignStats handles GET /v1/campaigns/{id}/stats.
func (s *Server) GetCampaignStats(ctx context.Context, req generated.GetCampaignStatsRequestObject) (generated.GetCampaignStatsResponseObject, error) {
	campaign, err := s.resolveCampaign(ctx, req.Id)
	if err != nil {
		switch {
		case errors.Is(err, errCampaignUnauthorized):
			return generated.GetCampaignStats401ApplicationProblemPlusJSONResponse{
				UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized(err.Error()),
			}, nil
		case errors.Is(err, errCampaignForbidden):
			return generated.GetCampaignStats403ApplicationProblemPlusJSONResponse{
				ForbiddenApplicationProblemPlusJSONResponse: problemForbidden(err.Error()),
			}, nil
		case errors.Is(err, store.ErrNotFound):
			return generated.GetCampaignStats404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		default:
			s.logger.ErrorContext(ctx, "resolving campaign for stats", slog.String("error", err.Error()))
			return nil, err
		}
	}

	// Use batch query instead of 5 separate queries
	stats, err := s.signups.GetStatsBatch(ctx, campaign.ID)
	if err != nil {
		if errors.Is(err, store.ErrNotFound) {
			return generated.GetCampaignStats404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "getting campaign stats batch", slog.String("error", err.Error()))
		return nil, fmt.Errorf("getting campaign stats batch: %w", err)
	}

	return generated.GetCampaignStats200JSONResponse{
		TotalSignups:     stats.TotalSignups,
		VerifiedSignups:  stats.VerifiedSignups,
		TodaySignups:     stats.TodaySignups,
		ReferralRate:     stats.ReferralRate,
		ViralCoefficient: stats.ViralCoefficient,
	}, nil
}
