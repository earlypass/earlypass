// Package handler contains HTTP handlers, one file per resource.
package handler

import (
	"bytes"
	"context"
	"log/slog"
	"time"

	apispec "github.com/earlypass/earlypass/api"
	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/fraud"
	"github.com/earlypass/earlypass/internal/observability"
	"github.com/earlypass/earlypass/internal/store"
	"github.com/google/uuid"
)

// CSRFTokenStore creates and validates single-use CSRF tokens.
type CSRFTokenStore interface {
	CreateCSRFToken(ctx context.Context, campaignID uuid.UUID) (string, error)
	ValidateAndConsumeCSRFToken(ctx context.Context, campaignID uuid.UUID, token string) (bool, error)
}

// SignInRateLimiter is the interface used for sign-in rate limiting.
type SignInRateLimiter interface {
	Incr(ctx context.Context, key string, ttl time.Duration) (int64, error)
}

// Server implements generated.StrictServerInterface and holds all handler dependencies.
type Server struct {
	campaigns            store.CampaignStore
	signups              store.SignupStore
	webhooks             store.WebhookStore
	accounts             store.AccountStore
	signInTokens           store.SignInTokenStore
	accountAPIKeys       store.AccountAPIKeyStore
	oauthStore           store.OAuthStore
	fraudLimiter         fraud.IPRateLimiter
	csrfTokenStore       CSRFTokenStore
	signInRateLimiter SignInRateLimiter
	emailOutbox          store.EmailOutboxStore
	dbPinger             DBPinger
	redisPinger          RedisPinger
	metrics              *observability.Metrics
	// baseURL is the public base URL of the API server, used to build verification links.
	// Example: "https://www.earlypass.com" (no trailing slash).
	baseURL string
	// trustedProxies is the list of CIDR ranges trusted to set X-Real-IP / X-Forwarded-For.
	trustedProxies []string
	// devMode logs sign-in codes to the terminal instead of requiring a real email delivery.
	devMode bool
	// signupModeClosed restricts account creation to pre-existing accounts.
	signupModeClosed bool
	logger           *slog.Logger
}

// NewServer creates a new Server with all required dependencies.
func NewServer(
	campaigns store.CampaignStore,
	signups store.SignupStore,
	webhooks store.WebhookStore,
	accounts store.AccountStore,
	signInTokens store.SignInTokenStore,
	accountAPIKeys store.AccountAPIKeyStore,
	oauthStore store.OAuthStore,
	fraudLimiter fraud.IPRateLimiter,
	csrfTokenStore CSRFTokenStore,
	signInRateLimiter SignInRateLimiter,
	emailOutbox store.EmailOutboxStore,
	dbPinger DBPinger,
	redisPinger RedisPinger,
	metrics *observability.Metrics,
	baseURL string,
	trustedProxies []string,
	devMode bool,
	signupModeClosed bool,
	logger *slog.Logger,
) *Server {
	return &Server{
		campaigns:            campaigns,
		signups:              signups,
		webhooks:             webhooks,
		accounts:             accounts,
		signInTokens:           signInTokens,
		accountAPIKeys:       accountAPIKeys,
		oauthStore:           oauthStore,
		fraudLimiter:         fraudLimiter,
		csrfTokenStore:       csrfTokenStore,
		signInRateLimiter: signInRateLimiter,
		emailOutbox:          emailOutbox,
		dbPinger:             dbPinger,
		redisPinger:          redisPinger,
		metrics:              metrics,
		baseURL:              baseURL,
		trustedProxies:       trustedProxies,
		devMode:              devMode,
		signupModeClosed:     signupModeClosed,
		logger:               logger,
	}
}

// Compile-time assertion that *Server implements StrictServerInterface.
var _ generated.StrictServerInterface = (*Server)(nil)

// GetHealth handles GET /healthz.
// It performs lightweight pings against each component and returns component-level status.
func (s *Server) GetHealth(ctx context.Context, _ generated.GetHealthRequestObject) (generated.GetHealthResponseObject, error) {
	dbStatus := "ok"
	if err := s.dbPinger.Ping(ctx); err != nil {
		s.logger.WarnContext(ctx, "healthz: database ping failed", slog.String("error", err.Error()))
		dbStatus = "error"
	}

	redisStatus := "ok"
	if err := s.redisPinger.Ping(ctx); err != nil {
		s.logger.WarnContext(ctx, "healthz: redis ping failed", slog.String("error", err.Error()))
		redisStatus = "error"
	}

	overallStatus := "ok"
	if dbStatus != "ok" || redisStatus != "ok" {
		overallStatus = "degraded"
	}

	return generated.GetHealth200JSONResponse{
		Status: overallStatus,
		Components: generated.HealthComponentStatus{
			Database: dbStatus,
			Redis:    redisStatus,
		},
	}, nil
}

// GetOpenAPISpec handles GET /v1/openapi.yaml.
func (s *Server) GetOpenAPISpec(_ context.Context, _ generated.GetOpenAPISpecRequestObject) (generated.GetOpenAPISpecResponseObject, error) {
	spec := apispec.Spec
	return generated.GetOpenAPISpec200ApplicationyamlResponse{
		Body:          bytes.NewReader(spec),
		ContentLength: int64(len(spec)),
	}, nil
}
