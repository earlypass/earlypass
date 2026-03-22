package handler

import (
	"context"
	"errors"
	"fmt"
	"log/slog"
	"strings"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/api/middleware"
	"github.com/earlypass/earlypass/internal/store"
)

// GetLeaderboard handles GET /v1/campaigns/{id}/leaderboard.
// Public endpoint — no auth required.
func (s *Server) GetLeaderboard(ctx context.Context, req generated.GetLeaderboardRequestObject) (generated.GetLeaderboardResponseObject, error) {
	campaign, err := s.campaigns.GetByID(ctx, req.Id)
	if err != nil {
		if isNotFound(err) {
			return generated.GetLeaderboard404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "fetching campaign for leaderboard", slog.String("error", err.Error()))
		return nil, fmt.Errorf("fetching campaign: %w", err)
	}

	// Enforce origin restriction only when ProductURL is configured.
	r := middleware.RequestFromContext(ctx)
	if r != nil && campaign.Settings.ProductURL != "" && !campaign.Settings.MatchesOrigin(extractOrigin(r, s.trustedProxies)) {
		return generated.GetLeaderboard403ApplicationProblemPlusJSONResponse{
			ForbiddenApplicationProblemPlusJSONResponse: problemForbidden("origin not allowed"),
		}, nil
	}

	limit := 10
	if req.Params.Limit != nil {
		limit = *req.Params.Limit
		if limit > 100 {
			limit = 100
		}
	}

	top, err := s.signups.ListLeaderboard(ctx, req.Id, limit)
	if err != nil {
		s.logger.ErrorContext(ctx, "listing leaderboard", slog.String("error", err.Error()))
		return nil, fmt.Errorf("listing leaderboard: %w", err)
	}

	entries := make([]generated.LeaderboardEntry, len(top))
	for i, sg := range top {
		masked := maskEmail(sg.Email)
		entries[i] = generated.LeaderboardEntry{
			Rank:              i + 1,
			ReferralCode:      sg.ReferralCode,
			ReferralCount:     sg.ReferralCount,
			EffectivePosition: sg.EffectivePosition(),
			EmailMasked:       &masked,
		}
	}

	return generated.GetLeaderboard200JSONResponse{Entries: entries}, nil
}

// maskEmail masks the local part of an email address for display.
// e.g. "alice@example.com" → "a***@example.com"
func maskEmail(email string) string {
	at := strings.LastIndex(email, "@")
	if at <= 0 {
		return "***"
	}
	local := email[:at]
	domain := email[at:]
	if len(local) <= 1 {
		return local + "***" + domain
	}
	return string(local[0]) + "***" + domain
}

// isNotFound reports whether the error is a store not-found error.
func isNotFound(err error) bool {
	return errors.Is(err, store.ErrNotFound)
}
