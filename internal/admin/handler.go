// Package admin provides the admin API, served on a separate port.
// The admin API is intended for internal/ops use only and should not be
// exposed to the public internet. It is authenticated via a single shared
// ADMIN_API_KEY bearer token.
package admin

import (
	"encoding/json"
	"log/slog"
	"net/http"
	"net/mail"
	"strings"

	"github.com/go-chi/chi/v5"

	"github.com/earlypass/earlypass/internal/api/problem"
	"github.com/earlypass/earlypass/internal/store"
)

// Handler holds admin API dependencies.
type Handler struct {
	accounts store.AccountStore
	logger   *slog.Logger
}

// NewHandler creates a new admin API handler.
func NewHandler(accounts store.AccountStore, logger *slog.Logger) *Handler {
	return &Handler{
		accounts: accounts,
		logger:   logger,
	}
}

// NewRouter builds the admin chi router with bearer-token auth middleware.
func NewRouter(apiKey string, h *Handler) http.Handler {
	r := chi.NewRouter()
	r.Use(bearerAuth(apiKey))

	r.Post("/admin/v1/accounts", h.CreateAccount)
	r.Get("/admin/v1/healthz", h.Healthz)

	return r
}

// createAccountRequest is the JSON body for POST /admin/v1/accounts.
type createAccountRequest struct {
	Email string `json:"email"`
}

// createAccountResponse is the JSON response for POST /admin/v1/accounts.
type createAccountResponse struct {
	ID      string `json:"id"`
	Email   string `json:"email"`
	Created bool   `json:"created"`
}

// CreateAccount handles POST /admin/v1/accounts.
// Idempotent: creates the account if it doesn't exist, returns the existing one otherwise.
func (h *Handler) CreateAccount(w http.ResponseWriter, r *http.Request) {
	var req createAccountRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", "invalid JSON body")
		return
	}

	email := strings.ToLower(strings.TrimSpace(req.Email))
	if _, err := mail.ParseAddress(email); err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", "invalid email address")
		return
	}

	account, created, err := h.accounts.GetOrCreateByEmail(r.Context(), email)
	if err != nil {
		h.logger.ErrorContext(r.Context(), "admin: creating account", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal-error", "Internal Server Error", "")
		return
	}

	status := http.StatusOK
	if created {
		status = http.StatusCreated
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(createAccountResponse{
		ID:      account.ID.String(),
		Email:   account.Email,
		Created: created,
	})
}

// Healthz handles GET /admin/v1/healthz.
func (h *Handler) Healthz(w http.ResponseWriter, _ *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	_, _ = w.Write([]byte(`{"status":"ok"}`))
}

// bearerAuth returns middleware that validates the Authorization: Bearer <key> header.
func bearerAuth(apiKey string) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			auth := r.Header.Get("Authorization")
			const prefix = "Bearer "
			if !strings.HasPrefix(auth, prefix) {
				problem.Write(w, http.StatusUnauthorized, "unauthorized", "Unauthorized", "Bearer token required")
				return
			}
			token := strings.TrimSpace(auth[len(prefix):])
			if token != apiKey {
				problem.Write(w, http.StatusUnauthorized, "unauthorized", "Unauthorized", "invalid admin API key")
				return
			}
			next.ServeHTTP(w, r)
		})
	}
}
