// Package api wires together the HTTP router, middleware, and handlers.
package api //nolint:revive // "api" is idiomatic; revive's var-naming disagrees.

import (
	"context"
	"crypto/sha256"
	"errors"
	"fmt"
	"log/slog"
	"net/http"
	"strings"
	"time"

	"github.com/go-chi/chi/v5"
	chimw "github.com/go-chi/chi/v5/middleware"
	"github.com/go-redis/redis_rate/v10"
	"github.com/oapi-codegen/runtime/strictmiddleware/nethttp"
	"github.com/redis/go-redis/v9"
	"github.com/riandyrn/otelchi"
	"go.opentelemetry.io/otel/trace"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/api/handler"
	"github.com/earlypass/earlypass/internal/api/middleware"
	"github.com/earlypass/earlypass/internal/api/problem"
	"github.com/earlypass/earlypass/internal/dashboard"
	"github.com/earlypass/earlypass/internal/fraud"
	internalmcp "github.com/earlypass/earlypass/internal/mcp"
	"github.com/earlypass/earlypass/internal/oauth"
	"github.com/earlypass/earlypass/internal/observability"
	"github.com/earlypass/earlypass/internal/pages"
	"github.com/earlypass/earlypass/internal/redisstore"
	"github.com/earlypass/earlypass/internal/store"
	widget "github.com/earlypass/earlypass/widget"
	mcpgoserver "github.com/mark3labs/mcp-go/server"
)

// Dependencies holds all dependencies needed to build the router.
type Dependencies struct {
	CampaignStore      store.CampaignStore
	SignupStore        store.SignupStore
	WebhookStore       store.WebhookStore
	AccountStore       store.AccountStore
	MagicLinkStore     store.MagicLinkStore
	AccountAPIKeyStore store.AccountAPIKeyStore
	OAuthStore         store.OAuthStore
	RedisClient        *redis.Client
	// DBPinger is used by the health handler to check database connectivity.
	DBPinger         handler.DBPinger
	EmailOutboxStore store.EmailOutboxStore
	// Metrics holds the application-level OTel metric instruments.
	// If nil, no metrics are recorded.
	Metrics *observability.Metrics
	// BaseURL is the public base URL used to build links in emails.
	// Example: "https://www.earlypass.com" (no trailing slash).
	// Defaults to an empty string; verify links will be relative in that case.
	BaseURL string
	// DashboardJWTSecret is the HMAC-SHA256 key used to sign dashboard auth cookies.
	// If nil a random per-process secret is generated on first use.
	DashboardJWTSecret []byte
	// SecureCookies controls whether dashboard auth cookies are Secure-flagged.
	// Set true in production (HTTPS).
	SecureCookies bool
	// TrustedProxies is the list of CIDR ranges trusted to set X-Real-IP / X-Forwarded-For.
	TrustedProxies []string
	// DevMode enables dev-only endpoints (e.g. email preview).
	// Never set this in production.
	DevMode bool
	Logger  *slog.Logger
}

// publicOperations are operation IDs that do not require Bearer authentication.
// These must match the PascalCase IDs emitted by oapi-codegen in api.gen.go
// (e.g. `middleware(handler, "CreateCampaign")`).
var publicOperations = map[string]bool{
	"GetHealth":      true,
	"GetOpenAPISpec": true,
	// Signup flow is public — widget embeds are unauthenticated.
	"CreateSignup":   true,
	"VerifyEmail":    true,
	"GetLeaderboard": true,
	"GetWidgetData":  true,
	"GetCsrfToken":   true,
	// Auth endpoints — no token required to request or verify a magic link.
	"RequestMagicLink": true,
	"VerifyMagicLink":  true,
	// Invite token endpoints — no auth required; token itself is the credential.
	"GetInviteToken":    true,
	"RedeemInviteToken": true,
}

// optionalAuthOperations are public operations that still attempt to authenticate
// if a Bearer token is present. Auth is tried but not required — the request
// proceeds even without a token or with an invalid one.
var optionalAuthOperations = map[string]bool{}

// NewRouter constructs and returns the application chi router.
func NewRouter(deps Dependencies) http.Handler {
	r := chi.NewRouter()

	// Global middleware.
	r.Use(otelchi.Middleware("earlypass")) // OTel spans per request, named by chi route pattern
	r.Use(traceIDHeader)                   // X-Trace-ID response header
	r.Use(chimw.RequestID)
	r.Use(requestLogger(deps.Logger))
	r.Use(chimw.Recoverer)
	r.Use(middleware.InjectRequest)
	r.Use(middleware.CORS)
	r.Use(chimw.RequestSize(1 << 20)) // 1 MB body limit

	// Redis-backed services.
	redisStore := redisstore.New(deps.RedisClient)
	rateLimiter := redis_rate.NewLimiter(deps.RedisClient)

	// Rate limiters.
	globalRL := middleware.RateLimit(rateLimiter, middleware.RateLimitConfig{RequestsPerMinute: 300}, "global")

	// Apply a permissive global rate limit to all routes.
	r.Use(globalRL)

	// Idempotency middleware.
	idempotency := middleware.Idempotency(redisStore)
	r.Use(idempotency)

	// Server (business logic).
	srv := handler.NewServer(
		deps.CampaignStore,
		deps.SignupStore,
		deps.WebhookStore,
		deps.AccountStore,
		deps.MagicLinkStore,
		deps.AccountAPIKeyStore,
		deps.OAuthStore,
		redisStore, // fraud.IPRateLimiter
		redisStore, // handler.CSRFTokenStore
		redisStore, // handler.MagicLinkRateLimiter
		deps.EmailOutboxStore,
		deps.DBPinger,
		redisPingerAdapter{deps.RedisClient},
		deps.Metrics,
		deps.BaseURL,
		deps.TrustedProxies,
		deps.DevMode,
		deps.Logger,
	)

	// Strict middleware: auth per operation.
	authMiddleware := buildAuthMiddleware(deps.AccountStore, deps.AccountAPIKeyStore, deps.OAuthStore, deps.Logger)

	// Create strict handler.
	strictHandler := generated.NewStrictHandlerWithOptions(srv, []generated.StrictMiddlewareFunc{authMiddleware}, generated.StrictHTTPServerOptions{
		RequestErrorHandlerFunc:  requestErrorHandler(deps.Logger),
		ResponseErrorHandlerFunc: responseErrorHandler(deps.Logger),
	})

	// Register all routes via generated helper.
	generated.HandlerFromMux(strictHandler, r)

	// Serve the widget bundle under /widget/.
	// /widget/widget.js        — short cache (1 min) for easy rollouts
	// /widget/widget.v{hash}.js — immutable long cache (1 year) for CDN/browser caching
	versionedPath := fmt.Sprintf("/widget/widget.v%s.js", widget.Hash)
	serveWidget := func(w http.ResponseWriter, _ *http.Request, cacheControl string) {
		w.Header().Set("Content-Type", "application/javascript; charset=utf-8")
		w.Header().Set("Cache-Control", cacheControl)
		_, _ = w.Write(widget.JS)
	}
	r.Get("/widget/widget.js", func(w http.ResponseWriter, r *http.Request) {
		serveWidget(w, r, "public, max-age=60")
	})
	r.Get(versionedPath, func(w http.ResponseWriter, r *http.Request) {
		serveWidget(w, r, "public, max-age=31536000, immutable")
	})

	// Email verification success page — redirect target for GET /v1/verify/{token}.
	r.Get("/verified", func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		_, _ = w.Write(pages.VerifiedHTML)
	})

	// Dev-only: email preview endpoint.
	// Disabled in production (DevMode must be explicitly set).
	if deps.DevMode {
		deps.Logger.Warn("DEV MODE: email preview endpoint enabled at /api/v1/internal/email-preview/{template}")
		r.Get("/api/v1/internal/email-preview/{template}", handler.EmailPreviewHandler)
	}

	// Dashboard — JWT secret is either supplied by the caller or generated randomly.
	jwtSecret := deps.DashboardJWTSecret
	if len(jwtSecret) == 0 {
		var err error
		jwtSecret, err = dashboard.GenerateJWTSecret()
		if err != nil {
			// GenerateJWTSecret only fails if the OS entropy pool is exhausted —
			// that's unrecoverable; panic is appropriate here.
			panic(fmt.Sprintf("failed to generate dashboard JWT secret: %v", err))
		}
		deps.Logger.Warn("dashboard JWT secret not configured — using a random per-process secret; sessions won't survive restarts")
	}

	dash := &dashboard.Dashboard{
		JWTSecret:    jwtSecret,
		Secure:       deps.SecureCookies,
		Campaigns:    deps.CampaignStore,
		Signups:      deps.SignupStore,
		Webhooks:     deps.WebhookStore,
		AccountStore: deps.AccountStore,
		MagicLinks:   deps.MagicLinkStore,
		APIKeys:      deps.AccountAPIKeyStore,
		EmailOutbox:  deps.EmailOutboxStore,
		BaseURL:      deps.BaseURL,
		Logger:       deps.Logger,
	}
	dash.Setup(r)

	// MCP endpoint — Streamable HTTP, account-level auth only.
	mcpDeps := internalmcp.Dependencies{
		CampaignStore: deps.CampaignStore,
		SignupStore:   deps.SignupStore,
		WebhookStore:  deps.WebhookStore,
		AccountStore:  deps.AccountStore,
		BaseURL:       deps.BaseURL,
		Logger:        deps.Logger,
	}
	mcpSrv := internalmcp.NewServer(mcpDeps)
	mcpStreamable := mcpgoserver.NewStreamableHTTPServer(mcpSrv,
		mcpgoserver.WithEndpointPath("/mcp"),
	)
	mcpAuthMiddleware := middleware.MCPAuth(middleware.MCPAuthConfig{
		AccountStore:       deps.AccountStore,
		AccountAPIKeyStore: deps.AccountAPIKeyStore,
		OAuthStore:         deps.OAuthStore,
		BaseURL:            deps.BaseURL,
		Logger:             deps.Logger,
	})
	r.Mount("/mcp", mcpAuthMiddleware(mcpStreamable))

	// OAuth 2.1 endpoints — mounted outside the chi router on a top-level mux
	// so they follow RFC conventions (not /v1/ prefix).
	oauthHandler := oauth.NewHandler(oauth.HandlerDeps{
		Accounts:    deps.AccountStore,
		MagicLinks:  deps.MagicLinkStore,
		OAuthStore:  deps.OAuthStore,
		EmailOutbox: deps.EmailOutboxStore,
		RedisStore:  redisStore,
		BaseURL:     deps.BaseURL,
		Logger:      deps.Logger,
	})

	mux := http.NewServeMux()
	mux.Handle("/", r)
	mux.HandleFunc("GET /.well-known/oauth-authorization-server", oauthHandler.Metadata)
	mux.HandleFunc("POST /oauth/register", oauthHandler.Register)
	mux.HandleFunc("GET /oauth/authorize", oauthHandler.AuthorizeGET)
	mux.HandleFunc("POST /oauth/authorize", oauthHandler.AuthorizePOST)
	mux.HandleFunc("POST /oauth/token", oauthHandler.Token)

	// Legacy redirects — preserve backward compatibility for old paths.
	// /widget.js → /widget/widget.js (301 permanent)
	mux.HandleFunc("/widget.js", func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, "/widget/widget.js", http.StatusMovedPermanently)
	})
	// /v1/* → /api/v1/* (301 permanent)
	mux.HandleFunc("/v1/", func(w http.ResponseWriter, r *http.Request) {
		http.Redirect(w, r, "/api"+r.URL.RequestURI(), http.StatusMovedPermanently)
	})

	return middleware.CORS(mux)
}

// buildAuthMiddleware returns a StrictMiddlewareFunc that handles two token types:
//   - "ep_acc_" prefix → account API key (SHA-256 O(1) lookup)
//   - anything else → OAuth access token (SHA-256 hash lookup)
//
// For public operations, it passes through immediately.
func buildAuthMiddleware(
	accounts store.AccountStore,
	accountAPIKeys store.AccountAPIKeyStore,
	oauthStore store.OAuthStore,
	logger *slog.Logger,
) generated.StrictMiddlewareFunc {
	return func(f nethttp.StrictHTTPHandlerFunc, operationID string) nethttp.StrictHTTPHandlerFunc {
		// Purely public operations: no auth attempted.
		if publicOperations[operationID] {
			return f
		}

		optional := optionalAuthOperations[operationID]

		return func(ctx context.Context, w http.ResponseWriter, r *http.Request, req interface{}) (interface{}, error) {
			// Skip if already authenticated (e.g. by HTTP middleware).
			if _, ok := middleware.AccountFromContext(ctx); ok {
				return f(ctx, w, r, req)
			}

			rawKey := extractBearer(r)
			if rawKey == "" {
				if optional {
					// No token provided — proceed without auth context.
					return f(ctx, w, r, req)
				}
				problem.Write(w, http.StatusUnauthorized, "missing-credentials",
					"Missing credentials", "Authorization header with Bearer token is required")
				return nil, nil //nolint:nilnil // response already written; return nil to suppress double-write
			}

			switch {
			case strings.HasPrefix(rawKey, "ep_acc_"):
				// Account API key — SHA-256 direct lookup.
				key, err := accountAPIKeys.GetByRawKey(ctx, rawKey)
				if err != nil {
					if errors.Is(err, store.ErrNotFound) {
						problem.Write(w, http.StatusUnauthorized, "invalid-credentials",
							"Invalid credentials", "The provided API key is invalid")
						return nil, nil //nolint:nilnil // response already written
					}
					logger.ErrorContext(ctx, "account api key lookup", slog.String("op", operationID), slog.String("error", err.Error()))
					problem.Write(w, http.StatusInternalServerError, "internal-error",
						"Internal server error", "An unexpected error occurred")
					return nil, nil //nolint:nilnil // response already written
				}
				// Fire-and-forget last-used update — do not block the request.
				go func() {
					touchCtx := context.WithoutCancel(ctx)
					if err := accountAPIKeys.TouchLastUsed(touchCtx, key.ID, time.Now().UTC()); err != nil {
						logger.WarnContext(touchCtx, "touching account api key last_used_at", slog.String("error", err.Error()))
					}
				}()
				account, err := accounts.GetByID(ctx, key.AccountID)
				if err != nil {
					if errors.Is(err, store.ErrNotFound) {
						problem.Write(w, http.StatusUnauthorized, "invalid-credentials",
							"Invalid credentials", "Account not found")
						return nil, nil //nolint:nilnil // response already written
					}
					logger.ErrorContext(ctx, "account lookup", slog.String("op", operationID), slog.String("error", err.Error()))
					problem.Write(w, http.StatusInternalServerError, "internal-error",
						"Internal server error", "An unexpected error occurred")
					return nil, nil //nolint:nilnil // response already written
				}
				ctx = middleware.WithAccount(ctx, account)

			default:
				// OAuth access token — SHA-256 hash lookup.
				h := sha256.Sum256([]byte(rawKey))
				hash := fmt.Sprintf("%x", h[:])
				token, err := oauthStore.GetByTokenHash(ctx, hash)
				if err != nil {
					if errors.Is(err, store.ErrNotFound) {
						problem.Write(w, http.StatusUnauthorized, "invalid-credentials",
							"Invalid credentials", "The provided token is invalid or expired")
						return nil, nil //nolint:nilnil // response already written
					}
					logger.ErrorContext(ctx, "oauth token lookup", slog.String("op", operationID), slog.String("error", err.Error()))
					problem.Write(w, http.StatusInternalServerError, "internal-error",
						"Internal server error", "An unexpected error occurred")
					return nil, nil //nolint:nilnil // response already written
				}
				account, err := accounts.GetByID(ctx, token.AccountID)
				if err != nil {
					if errors.Is(err, store.ErrNotFound) {
						problem.Write(w, http.StatusUnauthorized, "invalid-credentials",
							"Invalid credentials", "Account not found")
						return nil, nil //nolint:nilnil // response already written
					}
					logger.ErrorContext(ctx, "account lookup from oauth token", slog.String("op", operationID), slog.String("error", err.Error()))
					problem.Write(w, http.StatusInternalServerError, "internal-error",
						"Internal server error", "An unexpected error occurred")
					return nil, nil //nolint:nilnil // response already written
				}
				ctx = middleware.WithAccount(ctx, account)
			}

			return f(ctx, w, r, req)
		}
	}
}

// extractBearer extracts the token from "Authorization: Bearer <token>".
func extractBearer(r *http.Request) string {
	auth := r.Header.Get("Authorization")
	const prefix = "Bearer "
	if !strings.HasPrefix(auth, prefix) {
		return ""
	}
	return strings.TrimSpace(auth[len(prefix):])
}

// traceIDHeader is a middleware that writes the active OTel trace ID into the
// X-Trace-ID response header so clients can correlate requests with Jaeger traces.
func traceIDHeader(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if sc := trace.SpanFromContext(r.Context()).SpanContext(); sc.IsValid() {
			w.Header().Set("X-Trace-ID", sc.TraceID().String())
		}
		next.ServeHTTP(w, r)
	})
}

// requestLogger returns a chi middleware that logs each request using slog.
// The active OTel trace ID is included in every log line.
func requestLogger(logger *slog.Logger) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			start := time.Now()
			ww := chimw.NewWrapResponseWriter(w, r.ProtoMajor)
			next.ServeHTTP(ww, r)

			attrs := []any{
				slog.String("method", r.Method),
				slog.String("path", r.URL.Path),
				slog.Int("status", ww.Status()),
				slog.Duration("duration", time.Since(start)),
				slog.String("request_id", chimw.GetReqID(r.Context())),
			}
			if sc := trace.SpanFromContext(r.Context()).SpanContext(); sc.IsValid() {
				attrs = append(attrs, slog.String("trace_id", sc.TraceID().String()))
			}
			logger.InfoContext(r.Context(), "request", attrs...)
		})
	}
}

// requestErrorHandler handles request parsing errors.
func requestErrorHandler(logger *slog.Logger) func(w http.ResponseWriter, r *http.Request, err error) {
	return func(w http.ResponseWriter, r *http.Request, err error) {
		logger.WarnContext(r.Context(), "request parse error", slog.String("error", err.Error()))
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad request", err.Error())
	}
}

// responseErrorHandler handles internal errors from handlers.
func responseErrorHandler(logger *slog.Logger) func(w http.ResponseWriter, r *http.Request, err error) {
	return func(w http.ResponseWriter, r *http.Request, err error) {
		logger.ErrorContext(r.Context(), "handler error", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal-error", "Internal server error", "An unexpected error occurred")
	}
}

// redisPingerAdapter adapts *redis.Client to handler.RedisPinger.
type redisPingerAdapter struct{ c *redis.Client }

func (a redisPingerAdapter) Ping(ctx context.Context) error {
	if err := a.c.Ping(ctx).Err(); err != nil {
		return fmt.Errorf("redis ping: %w", err)
	}
	return nil
}

// compile-time checks.
var (
	_ fraud.IPRateLimiter          = (*redisstore.Client)(nil)
	_ handler.CSRFTokenStore       = (*redisstore.Client)(nil)
	_ handler.MagicLinkRateLimiter = (*redisstore.Client)(nil)
	_ handler.RedisPinger          = redisPingerAdapter{}
)
