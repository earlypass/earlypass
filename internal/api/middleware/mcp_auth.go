package middleware

import (
	"context"
	"crypto/sha256"
	"errors"
	"fmt"
	"log/slog"
	"net/http"
	"strings"
	"time"

	"github.com/earlypass/earlypass/internal/store"
)

// MCPAuthConfig holds dependencies for the MCPAuth middleware.
type MCPAuthConfig struct {
	AccountStore       store.AccountStore
	AccountAPIKeyStore store.AccountAPIKeyStore
	OAuthStore         store.OAuthStore
	// BaseURL is used to construct the oauth-authorization-server Link header.
	BaseURL string
	Logger  *slog.Logger
}

// MCPAuth returns a standard http middleware that enforces account-level authentication
// on the MCP endpoint. It accepts account API keys (ep_acc_ prefix) and OAuth access tokens.
// Campaign-scoped API keys are rejected. Unauthenticated requests receive a 401 with the
// appropriate discovery headers for the MCP OAuth flow.
func MCPAuth(cfg MCPAuthConfig) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			rawKey := extractBearerFromRequest(r)
			if rawKey == "" {
				writeMCPUnauthorized(w, cfg.BaseURL, "missing credentials")
				return
			}

			ctx, ok := resolveAccountToken(r.Context(), rawKey, cfg, w)
			if !ok {
				return
			}

			next.ServeHTTP(w, r.WithContext(ctx))
		})
	}
}

// resolveAccountToken validates rawKey and, on success, returns a context with the account
// injected and ok=true. On failure it writes the appropriate HTTP response and returns ok=false.
func resolveAccountToken(ctx context.Context, rawKey string, cfg MCPAuthConfig, w http.ResponseWriter) (context.Context, bool) {
	switch {
	case strings.HasPrefix(rawKey, "ep_acc_"):
		// Account API key — direct lookup.
		key, err := cfg.AccountAPIKeyStore.GetByRawKey(ctx, rawKey)
		if err != nil {
			if errors.Is(err, store.ErrNotFound) {
				writeMCPUnauthorized(w, cfg.BaseURL, "invalid credentials")
				return ctx, false
			}
			cfg.Logger.ErrorContext(ctx, "mcp auth: account api key lookup", slog.String("error", err.Error()))
			http.Error(w, "internal server error", http.StatusInternalServerError)
			return ctx, false
		}

		// Fire-and-forget last-used update.
		go func() {
			touchCtx := context.WithoutCancel(ctx)
			if err := cfg.AccountAPIKeyStore.TouchLastUsed(touchCtx, key.ID, time.Now().UTC()); err != nil {
				cfg.Logger.WarnContext(touchCtx, "mcp auth: touching account api key last_used_at", slog.String("error", err.Error()))
			}
		}()

		account, err := cfg.AccountStore.GetByID(ctx, key.AccountID)
		if err != nil {
			if errors.Is(err, store.ErrNotFound) {
				writeMCPUnauthorized(w, cfg.BaseURL, "invalid credentials")
				return ctx, false
			}
			cfg.Logger.ErrorContext(ctx, "mcp auth: account lookup", slog.String("error", err.Error()))
			http.Error(w, "internal server error", http.StatusInternalServerError)
			return ctx, false
		}

		return WithAccount(ctx, account), true

	default:
		// OAuth access token — SHA-256 hash lookup.
		h := sha256.Sum256([]byte(rawKey))
		hash := fmt.Sprintf("%x", h[:])

		token, err := cfg.OAuthStore.GetByTokenHash(ctx, hash)
		if err != nil {
			if errors.Is(err, store.ErrNotFound) {
				writeMCPUnauthorized(w, cfg.BaseURL, "invalid or expired token")
				return ctx, false
			}
			cfg.Logger.ErrorContext(ctx, "mcp auth: oauth token lookup", slog.String("error", err.Error()))
			http.Error(w, "internal server error", http.StatusInternalServerError)
			return ctx, false
		}

		account, err := cfg.AccountStore.GetByID(ctx, token.AccountID)
		if err != nil {
			if errors.Is(err, store.ErrNotFound) {
				writeMCPUnauthorized(w, cfg.BaseURL, "invalid credentials")
				return ctx, false
			}
			cfg.Logger.ErrorContext(ctx, "mcp auth: account lookup from oauth token", slog.String("error", err.Error()))
			http.Error(w, "internal server error", http.StatusInternalServerError)
			return ctx, false
		}

		return WithAccount(ctx, account), true
	}
}

// writeMCPUnauthorized writes a 401 response with the headers required by the MCP OAuth discovery spec.
func writeMCPUnauthorized(w http.ResponseWriter, baseURL, detail string) {
	wwwAuth := `Bearer realm="EarlyPass", error="unauthorized"`
	if detail != "" {
		wwwAuth = fmt.Sprintf(`Bearer realm="EarlyPass", error="unauthorized", error_description=%q`, detail)
	}

	w.Header().Set("WWW-Authenticate", wwwAuth)

	if baseURL != "" {
		w.Header().Set("Link", fmt.Sprintf(`<%s/.well-known/oauth-authorization-server>; rel="oauth-authorization-server"`, baseURL))
	}

	http.Error(w, "401 unauthorized", http.StatusUnauthorized)
}

// extractBearerFromRequest extracts the token from "Authorization: Bearer <token>".
func extractBearerFromRequest(r *http.Request) string {
	auth := r.Header.Get("Authorization")
	const prefix = "Bearer "
	if !strings.HasPrefix(auth, prefix) {
		return ""
	}
	return strings.TrimSpace(auth[len(prefix):])
}
