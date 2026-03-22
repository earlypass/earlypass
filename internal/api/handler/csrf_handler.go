package handler

import (
	"context"
	"errors"
	"fmt"
	"log/slog"
	"net/http"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/api/middleware"
	"github.com/earlypass/earlypass/internal/store"
)

// GetCsrfToken handles GET /api/v1/campaigns/{id}/csrf-token.
// Public endpoint — returns a single-use CSRF token for the given campaign.
// The widget must include this token in X-CSRF-Token when calling CreateSignup.
func (s *Server) GetCsrfToken(ctx context.Context, req generated.GetCsrfTokenRequestObject) (generated.GetCsrfTokenResponseObject, error) {
	campaign, err := s.campaigns.GetByID(ctx, req.Id)
	if err != nil {
		if errors.Is(err, store.ErrNotFound) {
			return generated.GetCsrfToken404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "fetching campaign for csrf token", slog.String("error", err.Error()))
		return nil, fmt.Errorf("fetching campaign: %w", err)
	}

	// Enforce origin restriction only when ProductURL is configured.
	r := middleware.RequestFromContext(ctx)
	if r != nil && campaign.Settings.ProductURL != "" && !campaign.Settings.MatchesOrigin(extractOrigin(r, s.trustedProxies)) {
		return generated.GetCsrfToken403ApplicationProblemPlusJSONResponse{
			ForbiddenApplicationProblemPlusJSONResponse: problemForbidden("origin not allowed"),
		}, nil
	}

	token, err := s.csrfTokenStore.CreateCSRFToken(ctx, campaign.ID)
	if err != nil {
		s.logger.ErrorContext(ctx, "creating CSRF token", slog.String("error", err.Error()))
		return nil, fmt.Errorf("creating CSRF token: %w", err)
	}

	return generated.GetCsrfToken200JSONResponse{Token: token}, nil
}

// extractOrigin returns the normalized origin of the HTTP request.
// For cross-origin requests the browser sets the Origin header; for same-origin
// requests (no Origin header) we derive it from the request's scheme and Host.
// When the request arrives from a trusted proxy, X-Forwarded-Proto is used to
// determine the scheme instead of r.TLS (which is nil behind TLS-terminating proxies).
func extractOrigin(r *http.Request, trustedProxies []string) string {
	if origin := r.Header.Get("Origin"); origin != "" {
		return origin
	}
	// Same-origin request — derive origin from Host + scheme.
	scheme := "https"
	if r.TLS == nil {
		// Behind a TLS-terminating proxy, r.TLS is nil even for HTTPS traffic.
		// Trust X-Forwarded-Proto only when the request comes from a known proxy.
		if proto := r.Header.Get("X-Forwarded-Proto"); proto != "" && middleware.IsTrustedProxy(r, trustedProxies) {
			scheme = proto
		} else {
			scheme = "http"
		}
	}
	return scheme + "://" + r.Host
}
