// Package oauth implements OAuth 2.1 endpoints for EarlyPass (RFC 8414, RFC 7591, PKCE).
package oauth

import (
	"encoding/json"
	"fmt"
	"html/template"
	"log/slog"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/email"
	"github.com/earlypass/earlypass/internal/redisstore"
	"github.com/earlypass/earlypass/internal/store"
)

const (
	magicLinkRateLimit    = 3
	magicLinkRateLimitTTL = 10 * time.Minute
	magicLinkTTL          = 15 * time.Minute
	oauthCodeTTL          = 5 * time.Minute
	oauthClientRedisTTL   = 24 * time.Hour
)

// Handler holds OAuth 2.1 handler dependencies.
type Handler struct {
	accounts    store.AccountStore
	magicLinks  store.MagicLinkStore
	oauthStore  store.OAuthStore
	emailOutbox store.EmailOutboxStore
	redisStore  *redisstore.Client
	baseURL     string
	logger      *slog.Logger
}

// HandlerDeps contains the dependencies for the OAuth handler.
type HandlerDeps struct {
	Accounts    store.AccountStore
	MagicLinks  store.MagicLinkStore
	OAuthStore  store.OAuthStore
	EmailOutbox store.EmailOutboxStore
	RedisStore  *redisstore.Client
	BaseURL     string
	Logger      *slog.Logger
}

// NewHandler creates a new OAuth handler with the given dependencies.
func NewHandler(deps HandlerDeps) *Handler {
	return &Handler{
		accounts:    deps.Accounts,
		magicLinks:  deps.MagicLinks,
		oauthStore:  deps.OAuthStore,
		emailOutbox: deps.EmailOutbox,
		redisStore:  deps.RedisStore,
		baseURL:     deps.BaseURL,
		logger:      deps.Logger,
	}
}

// oauthServerMetadata is the RFC 8414 metadata document.
type oauthServerMetadata struct {
	Issuer                            string   `json:"issuer"`
	AuthorizationEndpoint             string   `json:"authorization_endpoint"`
	TokenEndpoint                     string   `json:"token_endpoint"`
	RegistrationEndpoint              string   `json:"registration_endpoint"`
	ResponseTypesSupported            []string `json:"response_types_supported"`
	GrantTypesSupported               []string `json:"grant_types_supported"`
	CodeChallengeMethodsSupported     []string `json:"code_challenge_methods_supported"`
}

// Metadata handles GET /.well-known/oauth-authorization-server.
func (h *Handler) Metadata(w http.ResponseWriter, _ *http.Request) {
	meta := oauthServerMetadata{
		Issuer:                        h.baseURL,
		AuthorizationEndpoint:         h.baseURL + "/oauth/authorize",
		TokenEndpoint:                 h.baseURL + "/oauth/token",
		RegistrationEndpoint:          h.baseURL + "/oauth/register",
		ResponseTypesSupported:        []string{"code"},
		GrantTypesSupported:           []string{"authorization_code"},
		CodeChallengeMethodsSupported: []string{"S256"},
	}
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(meta)
}

// clientRegistration is the request/response body for client registration.
type clientRegistration struct {
	ClientID     string   `json:"client_id,omitempty"`
	ClientName   string   `json:"client_name"`
	RedirectURIs []string `json:"redirect_uris"`
}

// Register handles POST /oauth/register (RFC 7591 dynamic client registration).
func (h *Handler) Register(w http.ResponseWriter, r *http.Request) {
	var req clientRegistration
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	if len(req.RedirectURIs) == 0 {
		http.Error(w, "redirect_uris is required", http.StatusBadRequest)
		return
	}

	// Validate redirect URIs — must be HTTPS or localhost.
	for _, uri := range req.RedirectURIs {
		u, err := url.Parse(uri)
		if err != nil {
			http.Error(w, fmt.Sprintf("invalid redirect_uri %q: %v", uri, err), http.StatusBadRequest)
			return
		}
		if u.Scheme != "https" && u.Hostname() != "localhost" && u.Hostname() != "127.0.0.1" {
			http.Error(w, fmt.Sprintf("redirect_uri %q must be HTTPS or localhost", uri), http.StatusBadRequest)
			return
		}
	}

	clientID := uuid.New().String()
	resp := clientRegistration{
		ClientID:     clientID,
		ClientName:   req.ClientName,
		RedirectURIs: req.RedirectURIs,
	}

	raw, err := json.Marshal(resp)
	if err != nil {
		h.logger.Error("marshalling client registration", slog.String("error", err.Error()))
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	key := "oauth:client:" + clientID
	if err = h.redisStore.Set(r.Context(), key, string(raw), oauthClientRedisTTL); err != nil {
		h.logger.Error("storing client registration", slog.String("error", err.Error()))
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	_, _ = w.Write(raw)
}

// AuthorizeGET handles GET /oauth/authorize — renders the email login form.
func (h *Handler) AuthorizeGET(w http.ResponseWriter, r *http.Request) {
	q := r.URL.Query()
	clientID := q.Get("client_id")
	redirectURI := q.Get("redirect_uri")
	codeChallenge := q.Get("code_challenge")
	codeChallengeMethod := q.Get("code_challenge_method")
	state := q.Get("state")

	if clientID == "" || redirectURI == "" || codeChallenge == "" {
		http.Error(w, "missing required parameters: client_id, redirect_uri, code_challenge", http.StatusBadRequest)
		return
	}

	// Look up client in Redis.
	reg, err := h.lookupClient(r, clientID, redirectURI)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	_ = reg

	data := map[string]string{
		"ClientID":            clientID,
		"RedirectURI":         redirectURI,
		"CodeChallenge":       codeChallenge,
		"CodeChallengeMethod": codeChallengeMethod,
		"State":               state,
	}

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err = authorizeFormTmpl.Execute(w, data); err != nil {
		h.logger.Error("rendering authorize form", slog.String("error", err.Error()))
	}
}

// AuthorizePOST handles POST /oauth/authorize — accepts email, creates magic link.
func (h *Handler) AuthorizePOST(w http.ResponseWriter, r *http.Request) {
	if err := r.ParseForm(); err != nil {
		http.Error(w, "invalid form data", http.StatusBadRequest)
		return
	}

	emailAddr := strings.TrimSpace(r.FormValue("email"))
	clientID := r.FormValue("client_id")
	redirectURI := r.FormValue("redirect_uri")
	codeChallenge := r.FormValue("code_challenge")
	codeChallengeMethod := r.FormValue("code_challenge_method")
	state := r.FormValue("state")

	if emailAddr == "" {
		http.Error(w, "email is required", http.StatusBadRequest)
		return
	}

	// Rate limit magic link requests per email.
	rateKey := "magic-link-rate:" + emailAddr
	count, err := h.redisStore.Incr(r.Context(), rateKey, magicLinkRateLimitTTL)
	if err != nil {
		h.logger.Error("rate limit check", slog.String("error", err.Error()))
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	if count > magicLinkRateLimit {
		http.Error(w, "too many magic link requests — try again later", http.StatusTooManyRequests)
		return
	}

	oauthState := &domain.OAuthState{
		ClientID:            clientID,
		RedirectURI:         redirectURI,
		CodeChallenge:       codeChallenge,
		CodeChallengeMethod: codeChallengeMethod,
		State:               state,
	}

	token, err := domain.NewMagicLinkToken(emailAddr, oauthState, magicLinkTTL)
	if err != nil {
		h.logger.Error("generating magic link token", slog.String("error", err.Error()))
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	if err = h.magicLinks.Create(r.Context(), token); err != nil {
		h.logger.Error("storing magic link token", slog.String("error", err.Error()))
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}

	verifyURL := h.baseURL + "/api/v1/auth/verify?token=" + url.QueryEscape(token.Token)
	htmlBody, _, err := email.MagicLinkEmail(verifyURL)
	if err != nil {
		h.logger.Error("rendering magic link email", slog.String("error", err.Error()))
	} else if h.emailOutbox != nil {
		outboxEmail := domain.EmailOutbox{
			ID:             uuid.New(),
			IdempotencyKey: uuid.New(),
			ToAddr:         emailAddr,
			Subject:        "Your EarlyPass sign-in link",
			HTMLBody:       htmlBody,
			CreatedAt:      time.Now().UTC(),
		}
		if createErr := h.emailOutbox.Create(r.Context(), outboxEmail); createErr != nil {
			h.logger.Error("queuing magic link email", slog.String("error", createErr.Error()))
		}
	}

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err = checkInboxTmpl.Execute(w, nil); err != nil {
		h.logger.Error("rendering check inbox page", slog.String("error", err.Error()))
	}
}

// tokenRequest is the body for POST /oauth/token.
type tokenRequest struct {
	GrantType    string `json:"grant_type"`
	Code         string `json:"code"`
	RedirectURI  string `json:"redirect_uri"`
	ClientID     string `json:"client_id"`
	CodeVerifier string `json:"code_verifier"`
}

// tokenResponse is the body returned by POST /oauth/token.
type tokenResponse struct {
	AccessToken string `json:"access_token"` //nolint:gosec // this is the token returned to the OAuth client, not a stored secret
	TokenType   string `json:"token_type"`
	ExpiresIn   int    `json:"expires_in"`
	Scope       string `json:"scope"`
}

// Token handles POST /oauth/token — exchanges an authorization code for an access token.
func (h *Handler) Token(w http.ResponseWriter, r *http.Request) {
	// Support both JSON and form-encoded requests per RFC 6749.
	var req tokenRequest
	contentType := r.Header.Get("Content-Type")
	if strings.Contains(contentType, "application/x-www-form-urlencoded") {
		if err := r.ParseForm(); err != nil {
			writeOAuthError(w, "invalid_request", "invalid form body")
			return
		}
		req = tokenRequest{
			GrantType:    r.FormValue("grant_type"),
			Code:         r.FormValue("code"),
			RedirectURI:  r.FormValue("redirect_uri"),
			ClientID:     r.FormValue("client_id"),
			CodeVerifier: r.FormValue("code_verifier"),
		}
	} else {
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			writeOAuthError(w, "invalid_request", "invalid request body")
			return
		}
	}

	if req.GrantType != "authorization_code" {
		writeOAuthError(w, "unsupported_grant_type", "only authorization_code is supported")
		return
	}
	if req.Code == "" || req.CodeVerifier == "" {
		writeOAuthError(w, "invalid_request", "code and code_verifier are required")
		return
	}

	code, err := h.oauthStore.GetCode(r.Context(), req.Code)
	if err != nil {
		writeOAuthError(w, "invalid_grant", "invalid or unknown authorization code")
		return
	}
	if code.IsExpired() {
		writeOAuthError(w, "invalid_grant", "authorization code has expired")
		return
	}
	if code.IsUsed() {
		writeOAuthError(w, "invalid_grant", "authorization code has already been used")
		return
	}
	if code.RedirectURI != req.RedirectURI {
		writeOAuthError(w, "invalid_grant", "redirect_uri mismatch")
		return
	}
	if !domain.VerifyCodeChallenge(req.CodeVerifier, code.CodeChallenge) {
		writeOAuthError(w, "invalid_grant", "PKCE code_verifier verification failed")
		return
	}

	now := time.Now().UTC()
	if err = h.oauthStore.MarkCodeUsed(r.Context(), req.Code, now); err != nil {
		writeOAuthError(w, "invalid_grant", "authorization code has already been used")
		return
	}

	accessToken, rawToken, err := domain.NewOAuthAccessToken(code.AccountID, code.ClientID, code.Scope, 24*time.Hour)
	if err != nil {
		h.logger.Error("generating access token", slog.String("error", err.Error()))
		writeOAuthError(w, "server_error", "failed to generate access token")
		return
	}

	if err = h.oauthStore.CreateToken(r.Context(), accessToken); err != nil {
		h.logger.Error("storing access token", slog.String("error", err.Error()))
		writeOAuthError(w, "server_error", "failed to store access token")
		return
	}

	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(tokenResponse{
		AccessToken: rawToken,
		TokenType:   "Bearer",
		ExpiresIn:   86400,
		Scope:       code.Scope,
	})
}

// lookupClient fetches a registered OAuth client from Redis and validates redirect_uri.
func (h *Handler) lookupClient(r *http.Request, clientID, redirectURI string) (*clientRegistration, error) {
	key := "oauth:client:" + clientID
	raw, err := h.redisStore.Get(r.Context(), key)
	if err != nil {
		return nil, fmt.Errorf("looking up client: %w", err)
	}
	if raw == "" {
		return nil, fmt.Errorf("unknown client_id %q", clientID)
	}

	var reg clientRegistration
	if err = json.Unmarshal([]byte(raw), &reg); err != nil {
		return nil, fmt.Errorf("parsing client registration: %w", err)
	}

	// Validate redirect_uri against registered URIs.
	found := false
	for _, u := range reg.RedirectURIs {
		if u == redirectURI {
			found = true
			break
		}
	}
	if !found {
		return nil, fmt.Errorf("redirect_uri %q does not match any registered URI", redirectURI)
	}
	return &reg, nil
}

// writeOAuthError writes an RFC 6749 error response.
func writeOAuthError(w http.ResponseWriter, errCode, description string) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusBadRequest)
	_ = json.NewEncoder(w).Encode(map[string]string{
		"error":             errCode,
		"error_description": description,
	})
}

// authorizeFormTmpl is the HTML form for the OAuth authorize flow.
var authorizeFormTmpl = template.Must(template.New("authorize").Parse(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sign in to EarlyPass</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f9fafb; margin: 0; padding: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
  .card { background: #fff; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,.1); padding: 48px 40px; max-width: 400px; width: 100%; }
  .logo { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
  .logo img { height: 32px; }
  .logo span { font-size: 20px; font-weight: 700; color: #6366f1; }
  h1 { font-size: 20px; font-weight: 600; color: #111827; margin: 0 0 8px; }
  p { color: #6b7280; font-size: 14px; margin: 0 0 24px; }
  label { display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 6px; }
  input[type=email] { width: 100%; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 15px; outline: none; }
  input[type=email]:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,.15); }
  button { width: 100%; background: #6366f1; color: #fff; border: none; padding: 12px; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; margin-top: 16px; }
  button:hover { background: #4f46e5; }
</style>
</head>
<body>
<div class="card">
  <div class="logo"><img src="/assets/logo.svg" alt="EarlyPass"><span>EarlyPass</span></div>
  <h1>Sign in</h1>
  <p>Enter your email to receive a sign-in link. No password required.</p>
  <form method="POST" action="/oauth/authorize">
    <input type="hidden" name="client_id" value="{{.ClientID}}">
    <input type="hidden" name="redirect_uri" value="{{.RedirectURI}}">
    <input type="hidden" name="code_challenge" value="{{.CodeChallenge}}">
    <input type="hidden" name="code_challenge_method" value="{{.CodeChallengeMethod}}">
    <input type="hidden" name="state" value="{{.State}}">
    <label for="email">Email address</label>
    <input type="email" id="email" name="email" placeholder="you@example.com" required autofocus>
    <button type="submit">Send sign-in link</button>
  </form>
</div>
</body>
</html>`))

// checkInboxTmpl is the HTML page shown after submitting the email.
var checkInboxTmpl = template.Must(template.New("check-inbox").Parse(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Check your inbox — EarlyPass</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f9fafb; margin: 0; padding: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
  .card { background: #fff; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,.1); padding: 48px 40px; max-width: 400px; width: 100%; text-align: center; }
  .icon { font-size: 48px; margin-bottom: 16px; }
  .logo { display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 16px; }
  .logo img { height: 28px; }
  .logo span { font-size: 18px; font-weight: 700; color: #6366f1; }
  h1 { font-size: 20px; font-weight: 600; color: #111827; margin: 0 0 8px; }
  p { color: #6b7280; font-size: 14px; margin: 0; line-height: 1.6; }
</style>
</head>
<body>
<div class="card">
  <div class="logo"><img src="/assets/logo.svg" alt="EarlyPass"><span>EarlyPass</span></div>
  <div class="icon">&#128231;</div>
  <h1>Check your inbox</h1>
  <p>We sent a sign-in link to your email address.<br>Click the link in the email to continue.<br><br>The link expires in 15 minutes.</p>
</div>
</body>
</html>`))
