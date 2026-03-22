package handler

import (
	"context"
	"errors"
	"fmt"
	"log/slog"
	"time"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
	"github.com/google/uuid"
)

// ListWebhooks handles GET /v1/campaigns/{id}/webhooks.
func (s *Server) ListWebhooks(ctx context.Context, req generated.ListWebhooksRequestObject) (generated.ListWebhooksResponseObject, error) {
	campaign, err := s.resolveCampaign(ctx, req.Id)
	if err != nil {
		switch {
		case errors.Is(err, errCampaignUnauthorized):
			return generated.ListWebhooks401ApplicationProblemPlusJSONResponse{
				UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized(err.Error()),
			}, nil
		case errors.Is(err, errCampaignForbidden):
			return generated.ListWebhooks403ApplicationProblemPlusJSONResponse{
				ForbiddenApplicationProblemPlusJSONResponse: problemForbidden(err.Error()),
			}, nil
		case errors.Is(err, store.ErrNotFound):
			return generated.ListWebhooks404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		default:
			s.logger.ErrorContext(ctx, "resolving campaign for webhooks", slog.String("error", err.Error()))
			return nil, err
		}
	}

	endpoints, err := s.webhooks.ListEndpoints(ctx, campaign.ID)
	if err != nil {
		s.logger.ErrorContext(ctx, "listing webhooks", slog.String("error", err.Error()))
		return nil, fmt.Errorf("listing webhooks: %w", err)
	}

	apiEndpoints := make([]generated.WebhookEndpoint, len(endpoints))
	for i, e := range endpoints {
		apiEndpoints[i] = domainWebhookToAPI(e)
	}

	return generated.ListWebhooks200JSONResponse{Endpoints: apiEndpoints}, nil
}

// CreateWebhook handles POST /v1/campaigns/{id}/webhooks.
func (s *Server) CreateWebhook(ctx context.Context, req generated.CreateWebhookRequestObject) (generated.CreateWebhookResponseObject, error) {
	campaign, err := s.resolveCampaign(ctx, req.Id)
	if err != nil {
		switch {
		case errors.Is(err, errCampaignUnauthorized):
			return generated.CreateWebhook401ApplicationProblemPlusJSONResponse{
				UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized(err.Error()),
			}, nil
		case errors.Is(err, errCampaignForbidden), errors.Is(err, store.ErrNotFound):
			// Treat not-found as forbidden for create operations (don't reveal existence).
			return generated.CreateWebhook403ApplicationProblemPlusJSONResponse{
				ForbiddenApplicationProblemPlusJSONResponse: problemForbidden("access denied"),
			}, nil
		default:
			s.logger.ErrorContext(ctx, "resolving campaign for create webhook", slog.String("error", err.Error()))
			return nil, err
		}
	}

	if req.Body == nil {
		return generated.CreateWebhook400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("request body is required"),
		}, nil
	}

	if req.Body.Url == "" {
		return generated.CreateWebhook400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("url is required"),
		}, nil
	}

	if len(req.Body.Events) == 0 {
		return generated.CreateWebhook400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("at least one event type is required"),
		}, nil
	}

	events := make([]domain.WebhookEventType, len(req.Body.Events))
	for i, e := range req.Body.Events {
		events[i] = domain.WebhookEventType(e)
	}

	secret := ""
	if req.Body.Secret != nil {
		secret = *req.Body.Secret
	}

	endpoint := domain.WebhookEndpoint{
		ID:         uuid.New(),
		CampaignID: campaign.ID,
		URL:        req.Body.Url,
		Secret:     secret,
		Events:     events,
		Active:     true,
		CreatedAt:  time.Now().UTC(),
	}

	if err := s.webhooks.CreateEndpoint(ctx, endpoint); err != nil {
		s.logger.ErrorContext(ctx, "creating webhook endpoint", slog.String("error", err.Error()))
		return nil, fmt.Errorf("creating webhook: %w", err)
	}

	return generated.CreateWebhook201JSONResponse(domainWebhookToAPI(endpoint)), nil
}

// DeleteWebhook handles DELETE /v1/campaigns/{id}/webhooks/{wid}.
func (s *Server) DeleteWebhook(ctx context.Context, req generated.DeleteWebhookRequestObject) (generated.DeleteWebhookResponseObject, error) {
	_, err := s.resolveCampaign(ctx, req.Id)
	if err != nil {
		switch {
		case errors.Is(err, errCampaignUnauthorized):
			return generated.DeleteWebhook401ApplicationProblemPlusJSONResponse{
				UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized(err.Error()),
			}, nil
		case errors.Is(err, errCampaignForbidden):
			return generated.DeleteWebhook403ApplicationProblemPlusJSONResponse{
				ForbiddenApplicationProblemPlusJSONResponse: problemForbidden(err.Error()),
			}, nil
		case errors.Is(err, store.ErrNotFound):
			return generated.DeleteWebhook404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		default:
			s.logger.ErrorContext(ctx, "resolving campaign for delete webhook", slog.String("error", err.Error()))
			return nil, err
		}
	}

	if err := s.webhooks.DeleteEndpoint(ctx, req.Wid); err != nil {
		if errors.Is(err, store.ErrNotFound) {
			return generated.DeleteWebhook404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("webhook endpoint not found"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "deleting webhook", slog.String("error", err.Error()))
		return nil, fmt.Errorf("deleting webhook: %w", err)
	}

	return generated.DeleteWebhook204Response{}, nil
}

func domainWebhookToAPI(e domain.WebhookEndpoint) generated.WebhookEndpoint {
	events := make([]generated.WebhookEndpointEvents, len(e.Events))
	for i, ev := range e.Events {
		events[i] = generated.WebhookEndpointEvents(ev)
	}
	return generated.WebhookEndpoint{
		Id:         e.ID,
		CampaignId: e.CampaignID,
		Url:        e.URL,
		Events:     events,
		Active:     e.Active,
		CreatedAt:  e.CreatedAt,
	}
}
