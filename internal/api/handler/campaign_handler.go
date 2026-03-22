package handler

import (
	"context"
	"errors"
	"fmt"
	"log/slog"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/api/middleware"
	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// errCampaignUnauthorized is returned by resolveCampaign when no account is in context.
var errCampaignUnauthorized = errors.New("authentication required")

// errCampaignForbidden is returned by resolveCampaign when the campaign belongs to a different account.
var errCampaignForbidden = errors.New("access denied")

// resolveCampaign returns the authenticated campaign for a given campaign ID.
// Requires account-level auth (account in context). Verifies campaign ownership.
// Returns errCampaignUnauthorized, errCampaignForbidden, store.ErrNotFound, or a
// wrapped store error; callers check with errors.Is.
func (s *Server) resolveCampaign(ctx context.Context, campaignID uuid.UUID) (domain.Campaign, error) {
	account, ok := middleware.AccountFromContext(ctx)
	if !ok {
		return domain.Campaign{}, errCampaignUnauthorized
	}

	campaign, err := s.campaigns.GetByID(ctx, campaignID)
	if err != nil {
		return domain.Campaign{}, fmt.Errorf("resolving campaign: %w", err)
	}
	if campaign.AccountID != account.ID {
		return domain.Campaign{}, errCampaignForbidden
	}
	return campaign, nil
}

// maxSlugRetries is the maximum number of slug-collision retries during campaign creation.
const maxSlugRetries = 5

// CreateCampaign handles POST /v1/campaigns.
// Requires account-level authentication — the campaign is linked to the authenticated account.
func (s *Server) CreateCampaign(ctx context.Context, req generated.CreateCampaignRequestObject) (generated.CreateCampaignResponseObject, error) {
	account, ok := middleware.AccountFromContext(ctx)
	if !ok {
		return generated.CreateCampaign401ApplicationProblemPlusJSONResponse{
			UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized("authentication required"),
		}, nil
	}

	if req.Body == nil {
		return generated.CreateCampaign400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("request body is required"),
		}, nil
	}

	campaign, err := domain.NewCampaign(req.Body.Name)
	if err != nil {
		return generated.CreateCampaign400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest(err.Error()),
		}, nil
	}

	campaign.Settings.ProductURL = req.Body.ProductUrl // oapi-codegen lowercases URL → Url
	campaign.AccountID = account.ID

	for range maxSlugRetries {
		storeErr := s.campaigns.Create(ctx, campaign)
		if storeErr == nil {
			return generated.CreateCampaign201JSONResponse(domainCampaignToAPI(campaign)), nil
		}
		if errors.Is(storeErr, store.ErrSlugConflict) {
			// Slug collision: generate a fresh slug and retry.
			newSlug, slugErr := domain.GenerateCampaignSlug()
			if slugErr != nil {
				s.logger.ErrorContext(ctx, "generating campaign slug", slog.String("error", slugErr.Error()))
				return nil, fmt.Errorf("generating campaign slug: %w", slugErr)
			}
			campaign.Slug = newSlug
			continue
		}
		if errors.Is(storeErr, store.ErrConflict) {
			return generated.CreateCampaign409ApplicationProblemPlusJSONResponse{
				ConflictApplicationProblemPlusJSONResponse: problemConflict("a campaign with this name already exists"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "creating campaign", slog.String("error", storeErr.Error()))
		return nil, fmt.Errorf("creating campaign: %w", storeErr)
	}

	// All retries exhausted — astronomically unlikely with 36^10 slug space.
	s.logger.ErrorContext(ctx, "creating campaign: slug collision after retries", slog.Int("attempts", maxSlugRetries))
	return nil, fmt.Errorf("creating campaign: could not generate unique slug after %d attempts", maxSlugRetries)
}

// GetCampaign handles GET /v1/campaigns/{id}.
func (s *Server) GetCampaign(ctx context.Context, req generated.GetCampaignRequestObject) (generated.GetCampaignResponseObject, error) {
	campaign, err := s.resolveCampaign(ctx, req.Id)
	if err != nil {
		switch {
		case errors.Is(err, errCampaignUnauthorized):
			return generated.GetCampaign401ApplicationProblemPlusJSONResponse{
				UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized(err.Error()),
			}, nil
		case errors.Is(err, errCampaignForbidden):
			return generated.GetCampaign403ApplicationProblemPlusJSONResponse{
				ForbiddenApplicationProblemPlusJSONResponse: problemForbidden(err.Error()),
			}, nil
		case errors.Is(err, store.ErrNotFound):
			return generated.GetCampaign404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		default:
			s.logger.ErrorContext(ctx, "resolving campaign", slog.String("error", err.Error()))
			return nil, err
		}
	}

	return generated.GetCampaign200JSONResponse(domainCampaignToAPI(campaign)), nil
}

// UpdateCampaign handles PATCH /v1/campaigns/{id}.
func (s *Server) UpdateCampaign(ctx context.Context, req generated.UpdateCampaignRequestObject) (generated.UpdateCampaignResponseObject, error) {
	campaign, err := s.resolveCampaign(ctx, req.Id)
	if err != nil {
		switch {
		case errors.Is(err, errCampaignUnauthorized):
			return generated.UpdateCampaign401ApplicationProblemPlusJSONResponse{
				UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized(err.Error()),
			}, nil
		case errors.Is(err, errCampaignForbidden):
			return generated.UpdateCampaign403ApplicationProblemPlusJSONResponse{
				ForbiddenApplicationProblemPlusJSONResponse: problemForbidden(err.Error()),
			}, nil
		case errors.Is(err, store.ErrNotFound):
			return generated.UpdateCampaign404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		default:
			s.logger.ErrorContext(ctx, "resolving campaign", slog.String("error", err.Error()))
			return nil, err
		}
	}

	if req.Body == nil {
		return generated.UpdateCampaign400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("request body is required"),
		}, nil
	}

	// Apply updates.
	if req.Body.Name != nil {
		campaign.Name = *req.Body.Name
	}
	if req.Body.Status != nil {
		campaign.Status = domain.CampaignStatus(*req.Body.Status)
	}
	if req.Body.Settings != nil && req.Body.Settings.BoostWeight != nil {
		campaign.Settings.BoostWeight = *req.Body.Settings.BoostWeight
	}
	if req.Body.MaxSignups != nil {
		campaign.MaxSignups = req.Body.MaxSignups
	}
	if req.Body.Settings != nil && req.Body.Settings.ProductUrl != nil {
		campaign.Settings.ProductURL = *req.Body.Settings.ProductUrl // oapi-codegen lowercases URL → Url
	}

	if err := campaign.Validate(); err != nil {
		return generated.UpdateCampaign400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest(err.Error()),
		}, nil
	}

	if err := s.campaigns.Update(ctx, campaign); err != nil {
		if errors.Is(err, store.ErrNotFound) {
			return generated.UpdateCampaign404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		}
		if errors.Is(err, store.ErrConflict) {
			return generated.UpdateCampaign409ApplicationProblemPlusJSONResponse{
				ConflictApplicationProblemPlusJSONResponse: problemConflict("a campaign with this name already exists"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "updating campaign", slog.String("error", err.Error()))
		return nil, fmt.Errorf("updating campaign: %w", err)
	}

	// Re-fetch to get the server-side updated_at set by the UPDATE.
	updated, err := s.campaigns.GetByID(ctx, campaign.ID)
	if err != nil {
		s.logger.ErrorContext(ctx, "fetching updated campaign", slog.String("error", err.Error()))
		return nil, fmt.Errorf("fetching updated campaign: %w", err)
	}

	return generated.UpdateCampaign200JSONResponse(domainCampaignToAPI(updated)), nil
}

// DeleteCampaign handles DELETE /v1/campaigns/{id}.
func (s *Server) DeleteCampaign(ctx context.Context, req generated.DeleteCampaignRequestObject) (generated.DeleteCampaignResponseObject, error) {
	_, err := s.resolveCampaign(ctx, req.Id)
	if err != nil {
		switch {
		case errors.Is(err, errCampaignUnauthorized):
			return generated.DeleteCampaign401ApplicationProblemPlusJSONResponse{
				UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized(err.Error()),
			}, nil
		case errors.Is(err, errCampaignForbidden):
			return generated.DeleteCampaign403ApplicationProblemPlusJSONResponse{
				ForbiddenApplicationProblemPlusJSONResponse: problemForbidden(err.Error()),
			}, nil
		case errors.Is(err, store.ErrNotFound):
			return generated.DeleteCampaign404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		default:
			s.logger.ErrorContext(ctx, "resolving campaign", slog.String("error", err.Error()))
			return nil, err
		}
	}

	if err := s.campaigns.Delete(ctx, req.Id); err != nil {
		if errors.Is(err, store.ErrNotFound) {
			return generated.DeleteCampaign404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "deleting campaign", slog.String("error", err.Error()))
		return nil, fmt.Errorf("deleting campaign: %w", err)
	}

	return generated.DeleteCampaign204Response{}, nil
}

// domainCampaignToAPI converts a domain.Campaign to the generated API Campaign type.
func domainCampaignToAPI(c domain.Campaign) generated.Campaign {
	settings := generated.CampaignSettings{
		BoostWeight: &c.Settings.BoostWeight,
		ProductUrl:  &c.Settings.ProductURL,
	}
	return generated.Campaign{
		Id:         c.ID,
		Name:       c.Name,
		Slug:       c.Slug,
		Status:     generated.CampaignStatus(c.Status),
		Settings:   settings,
		MaxSignups: c.MaxSignups,
		CreatedAt:  c.CreatedAt,
		UpdatedAt:  c.UpdatedAt,
	}
}
