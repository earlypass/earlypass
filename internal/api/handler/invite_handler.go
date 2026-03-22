package handler

import (
	"context"
	"errors"
	"fmt"
	"log/slog"

	openapi_types "github.com/oapi-codegen/runtime/types"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// GetInviteToken handles GET /api/v1/invites/{token}.
// Returns invite token details with status "active" or "redeemed".
// Returns 404 if the token does not exist or has expired (>30 days).
func (s *Server) GetInviteToken(ctx context.Context, req generated.GetInviteTokenRequestObject) (generated.GetInviteTokenResponseObject, error) {
	sg, err := s.signups.GetByInviteToken(ctx, req.Token)
	if err != nil {
		if errors.Is(err, store.ErrNotFound) {
			return generated.GetInviteToken404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("invite token not found or expired"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "fetching invite token", slog.String("error", err.Error()))
		return nil, fmt.Errorf("fetching invite token: %w", err)
	}

	return generated.GetInviteToken200JSONResponse(domainSignupToInviteTokenResponse(sg)), nil
}

// RedeemInviteToken handles POST /api/v1/invites/{token}/redeem.
// Marks the token as redeemed (idempotent). Returns 404 if not found or expired.
func (s *Server) RedeemInviteToken(ctx context.Context, req generated.RedeemInviteTokenRequestObject) (generated.RedeemInviteTokenResponseObject, error) {
	sg, err := s.signups.RedeemInviteToken(ctx, req.Token)
	if err != nil {
		if errors.Is(err, store.ErrNotFound) {
			return generated.RedeemInviteToken404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("invite token not found or expired"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "redeeming invite token", slog.String("error", err.Error()))
		return nil, fmt.Errorf("redeeming invite token: %w", err)
	}

	if s.metrics != nil {
		s.metrics.RecordInviteRedeemed(ctx, sg.CampaignID.String())
	}
	return generated.RedeemInviteToken200JSONResponse(domainSignupToInviteTokenResponse(sg)), nil
}

// domainSignupToInviteTokenResponse converts a domain.Signup (with invite token) to InviteTokenResponse.
// Status is "active" if not yet redeemed, "redeemed" if InviteTokenRedeemedAt is set.
func domainSignupToInviteTokenResponse(sg domain.Signup) generated.InviteTokenResponse {
	status := generated.InviteTokenResponseStatusActive
	if sg.InviteTokenRedeemedAt != nil {
		status = generated.InviteTokenResponseStatusRedeemed
	}

	resp := generated.InviteTokenResponse{
		SignupId:   openapi_types.UUID(sg.ID),
		CampaignId: openapi_types.UUID(sg.CampaignID),
		Email:      openapi_types.Email(sg.Email),
		Status:     status,
		RedeemedAt: sg.InviteTokenRedeemedAt,
	}
	if sg.InvitedAt != nil {
		resp.InvitedAt = *sg.InvitedAt
	}
	return resp
}
