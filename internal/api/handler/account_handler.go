package handler

import (
	"context"
	"fmt"
	"log/slog"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/api/middleware"
	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// GetMe handles GET /v1/accounts/me.
func (s *Server) GetMe(ctx context.Context, _ generated.GetMeRequestObject) (generated.GetMeResponseObject, error) {
	account, ok := middleware.AccountFromContext(ctx)
	if !ok {
		return generated.GetMe401ApplicationProblemPlusJSONResponse{
			UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized("authentication required"),
		}, nil
	}
	return generated.GetMe200JSONResponse(domainAccountToAPI(account)), nil
}

// ListAPIKeys handles GET /v1/accounts/me/api-keys.
func (s *Server) ListAPIKeys(ctx context.Context, _ generated.ListAPIKeysRequestObject) (generated.ListAPIKeysResponseObject, error) {
	account, ok := middleware.AccountFromContext(ctx)
	if !ok {
		return generated.ListAPIKeys401ApplicationProblemPlusJSONResponse{
			UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized("authentication required"),
		}, nil
	}

	keys, err := s.accountAPIKeys.ListByAccount(ctx, account.ID)
	if err != nil {
		s.logger.ErrorContext(ctx, "listing api keys", slog.String("error", err.Error()))
		return nil, fmt.Errorf("listing api keys: %w", err)
	}

	result := make([]generated.APIKeyInfo, 0, len(keys))
	for _, k := range keys {
		result = append(result, domainAPIKeyToInfo(k))
	}
	return generated.ListAPIKeys200JSONResponse(result), nil
}

// CreateAPIKey handles POST /v1/accounts/me/api-keys.
func (s *Server) CreateAPIKey(ctx context.Context, req generated.CreateAPIKeyRequestObject) (generated.CreateAPIKeyResponseObject, error) {
	account, ok := middleware.AccountFromContext(ctx)
	if !ok {
		return generated.CreateAPIKey401ApplicationProblemPlusJSONResponse{
			UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized("authentication required"),
		}, nil
	}

	if req.Body == nil {
		return generated.CreateAPIKey401ApplicationProblemPlusJSONResponse{
			UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized("request body is required"),
		}, nil
	}

	apiKey, rawKey, err := domain.NewAccountAPIKey(account.ID, req.Body.Name)
	if err != nil {
		s.logger.ErrorContext(ctx, "generating api key", slog.String("error", err.Error()))
		return nil, fmt.Errorf("generating api key: %w", err)
	}

	if storeErr := s.accountAPIKeys.Create(ctx, apiKey); storeErr != nil {
		s.logger.ErrorContext(ctx, "storing api key", slog.String("error", storeErr.Error()))
		return nil, fmt.Errorf("storing api key: %w", storeErr)
	}

	return generated.CreateAPIKey201JSONResponse{
		Id:        &apiKey.ID,
		Name:      &apiKey.Name,
		ApiKey:    &rawKey,
		CreatedAt: &apiKey.CreatedAt,
	}, nil
}

// RevokeAPIKey handles DELETE /v1/accounts/me/api-keys/{key_id}.
func (s *Server) RevokeAPIKey(ctx context.Context, req generated.RevokeAPIKeyRequestObject) (generated.RevokeAPIKeyResponseObject, error) {
	account, ok := middleware.AccountFromContext(ctx)
	if !ok {
		return generated.RevokeAPIKey401ApplicationProblemPlusJSONResponse{
			UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized("authentication required"),
		}, nil
	}

	// Verify the key belongs to the authenticated account by listing account's keys.
	keys, err := s.accountAPIKeys.ListByAccount(ctx, account.ID)
	if err != nil {
		s.logger.ErrorContext(ctx, "listing api keys for revoke", slog.String("error", err.Error()))
		return nil, fmt.Errorf("listing api keys: %w", err)
	}

	keyID := uuid.UUID(req.KeyId)
	found := false
	for _, k := range keys {
		if k.ID == keyID {
			found = true
			break
		}
	}
	if !found {
		return generated.RevokeAPIKey403ApplicationProblemPlusJSONResponse{
			ForbiddenApplicationProblemPlusJSONResponse: problemForbidden("access denied"),
		}, nil
	}

	if revokeErr := s.accountAPIKeys.Revoke(ctx, keyID); revokeErr != nil {
		if isNotFound(revokeErr) {
			return generated.RevokeAPIKey404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("api key not found"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "revoking api key", slog.String("error", revokeErr.Error()))
		return nil, fmt.Errorf("revoking api key: %w", revokeErr)
	}

	return generated.RevokeAPIKey204Response{}, nil
}

// ListMyCampaigns handles GET /v1/accounts/me/campaigns.
func (s *Server) ListMyCampaigns(ctx context.Context, req generated.ListMyCampaignsRequestObject) (generated.ListMyCampaignsResponseObject, error) {
	account, ok := middleware.AccountFromContext(ctx)
	if !ok {
		return generated.ListMyCampaigns401ApplicationProblemPlusJSONResponse{
			UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized("authentication required"),
		}, nil
	}

	limit := 20
	offset := 0
	if req.Params.Limit != nil {
		limit = *req.Params.Limit
	}
	if req.Params.Offset != nil {
		offset = *req.Params.Offset
	}

	campaigns, err := s.campaigns.ListByAccount(ctx, account.ID, limit, offset)
	if err != nil {
		s.logger.ErrorContext(ctx, "listing campaigns by account", slog.String("error", err.Error()))
		return nil, fmt.Errorf("listing campaigns: %w", err)
	}

	apiCampaigns := make([]generated.Campaign, 0, len(campaigns))
	for _, c := range campaigns {
		apiCampaigns = append(apiCampaigns, domainCampaignToAPI(c))
	}

	total := len(apiCampaigns)
	return generated.ListMyCampaigns200JSONResponse{
		Campaigns: &apiCampaigns,
		Total:     &total,
		Limit:     &limit,
		Offset:    &offset,
	}, nil
}

// domainAccountToAPI converts a domain.Account to the generated API Account type.
func domainAccountToAPI(a domain.Account) generated.Account {
	return generated.Account{
		Id:        &a.ID,
		Email:     &a.Email,
		CreatedAt: &a.CreatedAt,
	}
}

// domainAPIKeyToInfo converts a domain.AccountAPIKey to the generated APIKeyInfo type.
func domainAPIKeyToInfo(k domain.AccountAPIKey) generated.APIKeyInfo {
	return generated.APIKeyInfo{
		Id:         &k.ID,
		Name:       &k.Name,
		CreatedAt:  &k.CreatedAt,
		LastUsedAt: k.LastUsedAt,
		RevokedAt:  k.RevokedAt,
	}
}

// Ensure store.ErrNotFound is referenced (avoids import cycle issues).
var _ = store.ErrNotFound
