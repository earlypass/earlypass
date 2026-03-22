// Package mcp implements the hosted MCP server for EarlyPass, providing AI-accessible
// tools and resources for managing campaigns, signups, and webhooks.
package mcp

import (
	"context"
	"errors"
	"fmt"
	"log/slog"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/api/middleware"
	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// Dependencies holds all dependencies for the hosted MCP server.
type Dependencies struct {
	CampaignStore store.CampaignStore
	SignupStore   store.SignupStore
	WebhookStore  store.WebhookStore
	AccountStore  store.AccountStore
	// BaseURL is the public base URL of the API server used to build widget script tags.
	// Example: "https://www.earlypass.com" (no trailing slash).
	BaseURL string
	Logger  *slog.Logger
}

// accountFromContext retrieves the authenticated account from the context.
// Returns an error if the account is missing (should not happen if MCPAuth middleware is applied).
func accountFromContext(ctx context.Context) (domain.Account, error) {
	account, ok := middleware.AccountFromContext(ctx)
	if !ok {
		return domain.Account{}, errors.New("authentication required: no account in context")
	}
	return account, nil
}

// checkCampaignOwnership fetches a campaign by ID and verifies it belongs to the account
// extracted from the context. Returns the campaign on success or an error.
func checkCampaignOwnership(ctx context.Context, deps Dependencies, campaignID uuid.UUID) (domain.Campaign, error) {
	account, err := accountFromContext(ctx)
	if err != nil {
		return domain.Campaign{}, err
	}

	campaign, err := deps.CampaignStore.GetByID(ctx, campaignID)
	if err != nil {
		if errors.Is(err, store.ErrNotFound) {
			return domain.Campaign{}, fmt.Errorf("campaign not found or access denied")
		}
		return domain.Campaign{}, fmt.Errorf("get campaign: %w", err)
	}

	if campaign.AccountID != account.ID {
		return domain.Campaign{}, fmt.Errorf("campaign not found or access denied")
	}

	return campaign, nil
}
