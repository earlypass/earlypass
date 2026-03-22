// Package middleware contains HTTP middleware for EarlyPass.
package middleware

import (
	"context"

	"github.com/earlypass/earlypass/internal/domain"
)

type contextKey struct{}

type accountContextKey struct{}

// WithCampaign returns a new context with the authenticated campaign attached.
func WithCampaign(ctx context.Context, c domain.Campaign) context.Context {
	return context.WithValue(ctx, contextKey{}, c)
}

// CampaignFromContext retrieves the campaign from the context.
// Returns the campaign and true if present, zero value and false otherwise.
func CampaignFromContext(ctx context.Context) (domain.Campaign, bool) {
	c, ok := ctx.Value(contextKey{}).(domain.Campaign)
	return c, ok
}

// WithAccount returns a new context with the authenticated account attached.
func WithAccount(ctx context.Context, a domain.Account) context.Context {
	return context.WithValue(ctx, accountContextKey{}, a)
}

// AccountFromContext retrieves the account from the context.
// Returns the account and true if present, zero value and false otherwise.
func AccountFromContext(ctx context.Context) (domain.Account, bool) {
	a, ok := ctx.Value(accountContextKey{}).(domain.Account)
	return a, ok
}
