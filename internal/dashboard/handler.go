package dashboard

import (
	"encoding/csv"
	"encoding/json"
	"errors"
	"fmt"
	"io/fs"
	"log/slog"
	"net/http"
	"net/mail"
	"net/url"
	"strconv"
	"strings"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/api/problem"
	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/email"
	"github.com/earlypass/earlypass/internal/store"
)

// Dashboard holds the dependencies and configuration needed by all dashboard
// HTTP handlers.
type Dashboard struct {
	JWTSecret    []byte //nolint:gosec // signing key, not a credential leak
	Secure       bool   // set true when serving over HTTPS
	Campaigns    store.CampaignStore
	Signups      store.SignupStore
	Webhooks     store.WebhookStore
	AccountStore store.AccountStore
	MagicLinks   store.MagicLinkStore
	APIKeys      store.AccountAPIKeyStore
	EmailOutbox  store.EmailOutboxStore
	// BaseURL is the public base URL (no trailing slash) used to build verify links in emails.
	BaseURL string
	// SignupModeClosed restricts account creation to pre-existing accounts.
	// When true, magic links are only sent to emails that already have an account.
	SignupModeClosed bool
	Logger           *slog.Logger
}

// CookieAuthMiddleware validates the dashboard auth cookie and attaches the
// authenticated account ID to the request context.
func (d *Dashboard) CookieAuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		tokenStr, err := extractToken(r)
		if err != nil {
			problem.Write(w, http.StatusUnauthorized, "unauthorized", "Unauthorized", "dashboard authentication required")
			return
		}
		claims, err := ParseToken(tokenStr, d.JWTSecret)
		if err != nil {
			ClearCookie(w, d.Secure)
			problem.Write(w, http.StatusUnauthorized, "unauthorized", "Unauthorized", "invalid or expired dashboard session")
			return
		}
		ctx := withAccountID(r.Context(), claims.AccountID)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

// ---------------------------------------------------------------------------
// Magic link login flow
// ---------------------------------------------------------------------------

const authPageCSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #f8f9fa; --surface: #ffffff; --border: #e2e8f0;
    --primary: #4f46e5; --primary-hover: #4338ca;
    --text: #1e293b; --muted: #64748b; --radius: 8px;
  }
  body { font-family: system-ui, -apple-system, sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }
  .header { background: var(--surface); border-bottom: 1px solid var(--border); padding: 0 24px; display: flex; align-items: center; height: 56px; }
  .logo { display: flex; align-items: center; gap: 8px; height: 28px; text-decoration: none; }
  .logo-text { font-weight: 700; font-size: 16px; color: var(--primary); }
  .card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 32px; width: 100%; max-width: 400px; margin: 80px auto; }
  h1 { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
  .subtitle { font-size: 14px; color: var(--muted); margin-bottom: 24px; line-height: 1.5; }
  label { display: block; font-size: 12px; font-weight: 600; color: var(--muted); margin-bottom: 6px; }
  input[type=email] { width: 100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px; font-size: 14px; background: var(--surface); color: var(--text); outline: none; margin-bottom: 16px; }
  input[type=email]:focus { border-color: var(--primary); box-shadow: 0 0 0 3px #e0e7ff; }
  input[type=text].otp { width: 100%; padding: 12px; border: 1px solid var(--border); border-radius: 6px; font-size: 28px; font-weight: 700; letter-spacing: 12px; text-align: center; background: var(--surface); color: var(--text); outline: none; margin-bottom: 16px; }
  input[type=text].otp:focus { border-color: var(--primary); box-shadow: 0 0 0 3px #e0e7ff; }
  .btn { display: block; width: 100%; padding: 10px; border-radius: 6px; font-size: 14px; font-weight: 500; cursor: pointer; border: none; background: var(--primary); color: #fff; transition: background 0.1s; }
  .btn:hover { background: var(--primary-hover); }
  .note { font-size: 13px; color: var(--muted); margin-top: 16px; text-align: center; }
  .error { font-size: 13px; color: #dc2626; background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 8px 12px; margin-bottom: 16px; }
  a { color: var(--primary); }
  .icon { font-size: 48px; margin-bottom: 16px; text-align: center; }
`

const loginHTMLOpen = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Sign in – EarlyPass</title>
<style>` + authPageCSS + `</style>
</head>
<body>
<div class="header"><a class="logo" href="/"><img src="/assets/logo.svg" alt="" height="28"><span class="logo-text">EarlyPass</span></a></div>
<div class="card">
  <h1>Sign in to EarlyPass</h1>
  <p class="subtitle">Enter your email and we'll send you a 6-digit sign-in code. No password required.</p>
  <form method="POST" action="/dashboard/login">
    <label for="email">Email address</label>
    <input type="email" id="email" name="email" required placeholder="you@example.com" autofocus>
    <button class="btn" type="submit">Send sign-in code</button>
  </form>
</div>
</body></html>`

const loginHTMLClosed = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Sign in – EarlyPass</title>
<style>` + authPageCSS + `</style>
</head>
<body>
<div class="header"><a class="logo" href="/"><img src="/assets/logo.svg" alt="" height="28"><span class="logo-text">EarlyPass</span></a></div>
<div class="card">
  <h1>Sign in to EarlyPass</h1>
  <p class="subtitle">This instance is invite-only. Enter the email you were invited with and we'll send you a 6-digit sign-in code.</p>
  <form method="POST" action="/dashboard/login">
    <label for="email">Email address</label>
    <input type="email" id="email" name="email" required placeholder="you@example.com" autofocus>
    <button class="btn" type="submit">Send sign-in code</button>
  </form>
</div>
</body></html>`

// otpFormHTML returns the HTML page that prompts the user to enter the 6-digit sign-in code.
// errMsg is shown above the input when non-empty (e.g. on a wrong-code retry).
func otpFormHTML(errMsg string) string {
	errBlock := ""
	if errMsg != "" {
		errBlock = `<div class="error">` + errMsg + `</div>`
	}
	return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Enter sign-in code – EarlyPass</title>
<style>` + authPageCSS + `</style>
</head>
<body>
<div class="header"><a class="logo" href="/"><img src="/assets/logo.svg" alt="" height="28"><span class="logo-text">EarlyPass</span></a></div>
<div class="card">
  <h1>Check your inbox</h1>
  <p class="subtitle">We sent a 6-digit sign-in code to your email. Enter it below — the code expires in 15 minutes and only works in this browser.</p>
  ` + errBlock + `
  <form method="POST" action="/dashboard/verify">
    <label for="code">Sign-in code</label>
    <input type="text" id="code" name="code" class="otp" required placeholder="000000" maxlength="6" pattern="[0-9]{6}" inputmode="numeric" autofocus autocomplete="one-time-code">
    <button class="btn" type="submit">Sign in</button>
  </form>
  <p class="note"><a href="/dashboard/login">← Use a different email</a></p>
</div>
</body></html>`
}

const closedModeErrorHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Account not found – EarlyPass</title>
<style>` + authPageCSS + `</style>
</head>
<body>
<div class="header"><a class="logo" href="/"><img src="/assets/logo.svg" alt="" height="28"><span class="logo-text">EarlyPass</span></a></div>
<div class="card" style="text-align:center">
  <div class="icon">🚫</div>
  <h1>Account not found</h1>
  <p class="subtitle" style="margin-top:12px">This instance is invite-only and no account was found for that email address. Please use the email you were invited with.</p>
  <p class="note" style="margin-top:24px"><a href="/dashboard/login">← Try a different email</a></p>
</div>
</body></html>`

// otpSessionCookieName is the cookie used to bind the OTP to the requesting browser session.
const otpSessionCookieName = "ep_otp_session"

// LoginGET handles GET /dashboard/login — renders the email input form.
// Redirects already-authenticated users to the dashboard.
func (d *Dashboard) LoginGET(w http.ResponseWriter, r *http.Request) {
	if tokenStr, err := extractToken(r); err == nil {
		if _, err = ParseToken(tokenStr, d.JWTSecret); err == nil {
			http.Redirect(w, r, "/dashboard/", http.StatusFound)
			return
		}
	}
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if d.SignupModeClosed {
		_, _ = w.Write([]byte(loginHTMLClosed))
	} else {
		_, _ = w.Write([]byte(loginHTMLOpen))
	}
}

// LogoutPOST handles POST /dashboard/logout — clears the auth cookie and redirects to login.
func (d *Dashboard) LogoutPOST(w http.ResponseWriter, r *http.Request) {
	ClearCookie(w, d.Secure)
	http.Redirect(w, r, "/dashboard/login", http.StatusFound)
}

// LoginPOST handles POST /dashboard/login — validates email, creates OTP, sends code email.
func (d *Dashboard) LoginPOST(w http.ResponseWriter, r *http.Request) {
	if err := r.ParseForm(); err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", "invalid form data")
		return
	}
	emailAddr := strings.TrimSpace(r.FormValue("email"))
	if _, err := mail.ParseAddress(emailAddr); err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", "invalid email address")
		return
	}

	// In closed mode, only send sign-in codes to existing accounts.
	if d.SignupModeClosed {
		if _, err := d.AccountStore.GetByEmail(r.Context(), emailAddr); err != nil {
			d.Logger.InfoContext(r.Context(), "closed mode: dashboard login for unknown email", slog.String("email", emailAddr))
			w.Header().Set("Content-Type", "text/html; charset=utf-8")
			w.WriteHeader(http.StatusForbidden)
			_, _ = w.Write([]byte(closedModeErrorHTML))
			return
		}
	}

	tok, err := domain.NewMagicLinkToken(emailAddr, nil, 15*time.Minute)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "creating dashboard OTP token", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}
	if err = d.MagicLinks.Create(r.Context(), tok); err != nil {
		d.Logger.ErrorContext(r.Context(), "storing dashboard OTP token", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	// Bind this sign-in attempt to the current browser by storing the session token
	// in an HttpOnly cookie. The OTP code can only be redeemed by a request that
	// presents this cookie, preventing an attacker who only has the emailed code
	// from using it outside this browser session.
	http.SetCookie(w, &http.Cookie{
		Name:     otpSessionCookieName,
		Value:    tok.SessionToken,
		Path:     "/dashboard",
		MaxAge:   900, // 15 minutes — matches the OTP TTL
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
		Secure:   d.Secure,
	})

	htmlBody, textBody, err := email.MagicLinkEmail(tok.Code)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "rendering sign-in code email", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	if d.EmailOutbox != nil {
		outboxEmail := domain.EmailOutbox{
			ID:             uuid.New(),
			IdempotencyKey: uuid.New(),
			ToAddr:         emailAddr,
			Subject:        "Your EarlyPass sign-in code",
			HTMLBody:       htmlBody,
			TextBody:       textBody,
			CreatedAt:      time.Now().UTC(),
		}
		if createErr := d.EmailOutbox.Create(r.Context(), outboxEmail); createErr != nil {
			d.Logger.WarnContext(r.Context(), "queuing dashboard sign-in code email",
				slog.String("email", emailAddr),
				slog.String("error", createErr.Error()),
			)
			// Do not reveal queue failure to the user — always proceed to the code entry page.
		}
	}

	http.Redirect(w, r, "/dashboard/verify", http.StatusSeeOther)
}

// VerifyGET handles GET /dashboard/verify — shows the OTP code entry form.
// The session cookie set during LoginPOST must be present; otherwise the user
// is redirected to the login page.
func (d *Dashboard) VerifyGET(w http.ResponseWriter, r *http.Request) {
	_, err := r.Cookie(otpSessionCookieName)
	if err != nil {
		// No session cookie — redirect back to login.
		http.Redirect(w, r, "/dashboard/login", http.StatusFound)
		return
	}
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	_, _ = w.Write([]byte(otpFormHTML("")))
}

// VerifyPOST handles POST /dashboard/verify — validates the OTP code and issues a JWT cookie.
func (d *Dashboard) VerifyPOST(w http.ResponseWriter, r *http.Request) {
	sessionCookie, err := r.Cookie(otpSessionCookieName)
	if err != nil {
		// No session cookie — code cannot be used outside the requesting browser.
		http.Redirect(w, r, "/dashboard/login", http.StatusFound)
		return
	}
	sessionToken := sessionCookie.Value

	if err = r.ParseForm(); err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", "invalid form data")
		return
	}
	code := strings.TrimSpace(r.FormValue("code"))
	if len(code) != 6 {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		_, _ = w.Write([]byte(otpFormHTML("Please enter the 6-digit code from your email.")))
		return
	}
	for _, c := range code {
		if c < '0' || c > '9' {
			w.Header().Set("Content-Type", "text/html; charset=utf-8")
			_, _ = w.Write([]byte(otpFormHTML("The code must contain only digits.")))
			return
		}
	}

	tok, err := d.MagicLinks.GetBySessionToken(r.Context(), sessionToken)
	if err != nil {
		if errors.Is(err, store.ErrNotFound) {
			// Session not found — may have expired or already been used; restart.
			http.Redirect(w, r, "/dashboard/login", http.StatusFound)
			return
		}
		d.Logger.ErrorContext(r.Context(), "fetching OTP token by session", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	if tok.IsExpired() {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		_, _ = w.Write([]byte(otpFormHTML("This code has expired. <a href=\"/dashboard/login\">Request a new one.</a>")))
		return
	}
	if tok.IsUsed() {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		_, _ = w.Write([]byte(otpFormHTML("This code has already been used. <a href=\"/dashboard/login\">Request a new one.</a>")))
		return
	}

	if tok.Code != code {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		_, _ = w.Write([]byte(otpFormHTML("Incorrect code. Please try again.")))
		return
	}

	if err = d.MagicLinks.MarkUsed(r.Context(), tok.Token, time.Now().UTC()); err != nil {
		if errors.Is(err, store.ErrNotFound) {
			// Race: another request just used this token.
			w.Header().Set("Content-Type", "text/html; charset=utf-8")
			_, _ = w.Write([]byte(otpFormHTML("This code has already been used. <a href=\"/dashboard/login\">Request a new one.</a>")))
			return
		}
		d.Logger.ErrorContext(r.Context(), "marking OTP token used", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	// Clear the OTP session cookie — it has served its purpose.
	http.SetCookie(w, &http.Cookie{
		Name:     otpSessionCookieName,
		Value:    "",
		Path:     "/dashboard",
		MaxAge:   -1,
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
		Secure:   d.Secure,
	})

	var account domain.Account
	if d.SignupModeClosed {
		var getErr error
		account, getErr = d.AccountStore.GetByEmail(r.Context(), tok.Email)
		if getErr != nil {
			problem.Write(w, http.StatusForbidden, "forbidden", "Forbidden", "this instance is invite-only")
			return
		}
	} else {
		var createErr error
		account, _, createErr = d.AccountStore.GetOrCreateByEmail(r.Context(), tok.Email)
		if createErr != nil {
			d.Logger.ErrorContext(r.Context(), "getting/creating account for dashboard login",
				slog.String("email", tok.Email), slog.String("error", createErr.Error()))
			problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
			return
		}
	}

	jwtStr, err := IssueToken(account.ID, d.JWTSecret)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "issuing dashboard jwt", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	SetCookie(w, jwtStr, d.Secure)
	http.Redirect(w, r, "/dashboard/", http.StatusFound)
}

// ---------------------------------------------------------------------------
// Static file server
// ---------------------------------------------------------------------------

// serveStaticFile serves a file from the embedded static FS with cache headers.
func serveStaticFile(w http.ResponseWriter, r *http.Request, p string) {
	if p == "/" || p == "" {
		p = "/index.html"
	}
	// Hashed JS bundles (app.{8-char-hex}.js) are content-addressed and can be
	// cached forever. Everything else (index.html, plain app.js in dev, CSS) uses
	// no-store so deploys take effect immediately.
	if strings.HasPrefix(p, "/app.") && strings.HasSuffix(p, ".js") && p != "/app.js" {
		w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
	} else if strings.HasSuffix(p, ".js") || strings.HasSuffix(p, ".html") || strings.HasSuffix(p, ".css") {
		w.Header().Set("Cache-Control", "no-store")
	}
	sub, err := fs.Sub(staticFS, "static")
	if err != nil {
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	http.ServeFileFS(w, r, sub, p)
}

// homeHandler serves the account home SPA at /dashboard/ and its static assets.
func (d *Dashboard) homeHandler(w http.ResponseWriter, r *http.Request) {
	p := strings.TrimPrefix(r.URL.Path, "/dashboard")
	serveStaticFile(w, r, p)
}

// staticHandler serves the embedded dashboard SPA for a specific campaign slug.
func (d *Dashboard) staticHandler(w http.ResponseWriter, r *http.Request) {
	slug := chi.URLParam(r, "slug")
	p := strings.TrimPrefix(r.URL.Path, "/dashboard/"+slug)
	serveStaticFile(w, r, p)
}

// ---------------------------------------------------------------------------
// JSON helpers
// ---------------------------------------------------------------------------

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	if err := json.NewEncoder(w).Encode(v); err != nil {
		// Response headers already written; best effort.
		return
	}
}

func readJSON(r *http.Request, v any) error {
	if err := json.NewDecoder(r.Body).Decode(v); err != nil {
		return fmt.Errorf("decoding request body: %w", err)
	}
	return nil
}

// mustAccountAndCampaign resolves the account from context and the campaign by
// slug URL param, verifying ownership. Returns false and writes an error response
// on failure.
func (d *Dashboard) mustAccountAndCampaign(w http.ResponseWriter, r *http.Request) (domain.Campaign, bool) {
	accountID, ok := AccountIDFromContext(r.Context())
	if !ok {
		problem.Write(w, http.StatusUnauthorized, "unauthorized", "Unauthorized", "")
		return domain.Campaign{}, false
	}
	slug := chi.URLParam(r, "slug")
	if slug == "" {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", "missing campaign slug")
		return domain.Campaign{}, false
	}
	campaign, err := d.Campaigns.GetBySlug(r.Context(), slug)
	if err != nil {
		if errors.Is(err, store.ErrNotFound) {
			problem.Write(w, http.StatusNotFound, "not-found", "Not Found", "campaign not found")
			return domain.Campaign{}, false
		}
		d.Logger.ErrorContext(r.Context(), "fetching campaign by slug", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return domain.Campaign{}, false
	}
	if campaign.AccountID != accountID {
		problem.Write(w, http.StatusForbidden, "forbidden", "Forbidden", "access denied")
		return domain.Campaign{}, false
	}
	return campaign, true
}

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------

// GetStats handles GET /v1/dashboard/{slug}/stats.
func (d *Dashboard) GetStats(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}

	stats, err := d.Signups.GetStatsBatch(r.Context(), campaign.ID)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "getting campaign stats batch", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	writeJSON(w, http.StatusOK, map[string]any{
		"total_signups":     stats.TotalSignups,
		"verified_signups":  stats.VerifiedSignups,
		"today_signups":     stats.TodaySignups,
		"invited_signups":   stats.InvitedSignups,
		"referral_rate":     stats.ReferralRate,
		"viral_coefficient": stats.ViralCoefficient,
	})
}

// ---------------------------------------------------------------------------
// Timeseries
// ---------------------------------------------------------------------------

// GetTimeseries handles GET /v1/dashboard/{slug}/timeseries?days=30.
func (d *Dashboard) GetTimeseries(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}

	days := 30
	if q := r.URL.Query().Get("days"); q != "" {
		if v, err := strconv.Atoi(q); err == nil && v > 0 && v <= 365 {
			days = v
		}
	}

	ts, err := d.Signups.TimeseriesByCampaign(r.Context(), campaign.ID, days)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "fetching timeseries", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	type point struct {
		Date  string `json:"date"`
		Count int    `json:"count"`
	}
	result := make([]point, len(ts))
	for i, dc := range ts {
		result[i] = point{Date: dc.Date.Format(time.DateOnly), Count: dc.Count}
	}
	writeJSON(w, http.StatusOK, result)
}

// ---------------------------------------------------------------------------
// Signups
// ---------------------------------------------------------------------------

// signupResponse is the JSON representation of a signup for the dashboard.
type signupResponse struct {
	ID                uuid.UUID `json:"id"`
	Email             string    `json:"email"`
	Status            string    `json:"status"`
	BasePosition      int       `json:"base_position"`
	EffectivePosition int       `json:"effective_position"`
	ReferralCount     int       `json:"referral_count"`
	ReferralCode      string    `json:"referral_code"`
	CreatedAt         time.Time `json:"created_at"`
}

func toSignupResponse(s domain.Signup) signupResponse {
	return signupResponse{
		ID:                s.ID,
		Email:             s.Email,
		Status:            string(s.Status),
		BasePosition:      s.BasePosition,
		EffectivePosition: s.EffectivePosition(),
		ReferralCount:     s.ReferralCount,
		ReferralCode:      s.ReferralCode,
		CreatedAt:         s.CreatedAt,
	}
}

// ListSignups handles GET /v1/dashboard/{slug}/signups with filter/sort/pagination.
func (d *Dashboard) ListSignups(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}

	q := r.URL.Query()
	page, _ := strconv.Atoi(q.Get("page"))
	if page < 1 {
		page = 1
	}
	limit, _ := strconv.Atoi(q.Get("limit"))
	if limit < 1 || limit > 200 {
		limit = 50
	}

	filter := domain.SignupFilter{
		Status: q.Get("status"),
		Search: q.Get("search"),
		Sort:   q.Get("sort"),
		Limit:  limit,
		Offset: (page - 1) * limit,
	}

	signups, total, err := d.Signups.ListByCampaignFiltered(r.Context(), campaign.ID, filter)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "listing signups", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	result := make([]signupResponse, len(signups))
	for i, s := range signups {
		result[i] = toSignupResponse(s)
	}

	writeJSON(w, http.StatusOK, map[string]any{
		"signups": result,
		"total":   total,
		"page":    page,
		"limit":   limit,
	})
}

// ExportSignupsCSV handles GET /v1/dashboard/{slug}/signups/export.csv.
func (d *Dashboard) ExportSignupsCSV(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}

	filter := domain.SignupFilter{Limit: 10000, Offset: 0}
	signups, _, err := d.Signups.ListByCampaignFiltered(r.Context(), campaign.ID, filter)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "exporting signups", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	w.Header().Set("Content-Type", "text/csv")
	w.Header().Set("Content-Disposition", "attachment; filename=\"signups.csv\"")

	cw := csv.NewWriter(w)
	defer func() {
		cw.Flush()
		if flushErr := cw.Error(); flushErr != nil {
			d.Logger.ErrorContext(r.Context(), "flushing csv writer", slog.String("error", flushErr.Error()))
		}
	}()
	if err = cw.Write([]string{"id", "email", "status", "referral_code", "referral_count", "base_position", "effective_position", "invite_token", "created_at"}); err != nil {
		d.Logger.ErrorContext(r.Context(), "writing csv header", slog.String("error", err.Error()))
		return
	}
	for _, s := range signups {
		inviteToken := ""
		if s.InviteToken != nil {
			inviteToken = *s.InviteToken
		}
		row := []string{
			s.ID.String(), s.Email, string(s.Status),
			s.ReferralCode, strconv.Itoa(s.ReferralCount),
			strconv.Itoa(s.BasePosition), strconv.Itoa(s.EffectivePosition()),
			inviteToken, s.CreatedAt.Format(time.RFC3339),
		}
		if err = cw.Write(row); err != nil {
			d.Logger.ErrorContext(r.Context(), "writing csv row", slog.String("error", err.Error()))
			return
		}
	}
}

// ---------------------------------------------------------------------------
// Leaderboard
// ---------------------------------------------------------------------------

// GetLeaderboard handles GET /v1/dashboard/{slug}/leaderboard.
func (d *Dashboard) GetLeaderboard(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}

	signups, err := d.Signups.ListLeaderboard(r.Context(), campaign.ID, 50)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "fetching leaderboard", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	result := make([]signupResponse, len(signups))
	for i, s := range signups {
		result[i] = toSignupResponse(s)
	}
	writeJSON(w, http.StatusOK, result)
}

// ---------------------------------------------------------------------------
// Webhooks
// ---------------------------------------------------------------------------

// ListWebhooks handles GET /v1/dashboard/{slug}/webhooks.
func (d *Dashboard) ListWebhooks(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}
	endpoints, err := d.Webhooks.ListEndpoints(r.Context(), campaign.ID)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "listing webhooks", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}
	if endpoints == nil {
		endpoints = []domain.WebhookEndpoint{}
	}
	type endpointJSON struct {
		ID        uuid.UUID `json:"id"`
		URL       string    `json:"url"`
		Events    []string  `json:"events"`
		Active    bool      `json:"active"`
		CreatedAt time.Time `json:"created_at"`
	}
	result := make([]endpointJSON, len(endpoints))
	for i, e := range endpoints {
		evts := make([]string, len(e.Events))
		for j, ev := range e.Events {
			evts[j] = string(ev)
		}
		result[i] = endpointJSON{
			ID:        e.ID,
			URL:       e.URL,
			Events:    evts,
			Active:    e.Active,
			CreatedAt: e.CreatedAt,
		}
	}
	writeJSON(w, http.StatusOK, result)
}

// CreateWebhook handles POST /v1/dashboard/{slug}/webhooks.
func (d *Dashboard) CreateWebhook(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}

	var body struct {
		URL    string   `json:"url"`
		Secret string   `json:"secret"` //nolint:gosec // webhook signing secret provided by the admin
		Events []string `json:"events"`
	}
	if err := readJSON(r, &body); err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", err.Error())
		return
	}
	if body.URL == "" {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", "url is required")
		return
	}
	if len(body.Events) == 0 {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", "at least one event is required")
		return
	}

	events := make([]domain.WebhookEventType, len(body.Events))
	for i, ev := range body.Events {
		events[i] = domain.WebhookEventType(ev)
	}

	endpoint := domain.WebhookEndpoint{
		ID:         uuid.New(),
		CampaignID: campaign.ID,
		URL:        body.URL,
		Secret:     body.Secret,
		Events:     events,
		Active:     true,
		CreatedAt:  time.Now().UTC(),
	}
	if err := d.Webhooks.CreateEndpoint(r.Context(), endpoint); err != nil {
		d.Logger.ErrorContext(r.Context(), "creating webhook endpoint", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}
	writeJSON(w, http.StatusCreated, map[string]any{
		"id":         endpoint.ID,
		"url":        endpoint.URL,
		"events":     body.Events,
		"active":     endpoint.Active,
		"created_at": endpoint.CreatedAt,
	})
}

// DeleteWebhook handles DELETE /v1/dashboard/{slug}/webhooks/{id}.
func (d *Dashboard) DeleteWebhook(w http.ResponseWriter, r *http.Request) {
	_, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}
	id, err := uuid.Parse(chi.URLParam(r, "id"))
	if err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", "invalid webhook id")
		return
	}
	if err = d.Webhooks.DeleteEndpoint(r.Context(), id); err != nil {
		if errors.Is(err, store.ErrNotFound) {
			problem.Write(w, http.StatusNotFound, "not-found", "Not Found", "webhook not found")
			return
		}
		d.Logger.ErrorContext(r.Context(), "deleting webhook", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

// ListDeliveries handles GET /v1/dashboard/{slug}/deliveries.
func (d *Dashboard) ListDeliveries(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}
	records, err := d.Webhooks.ListRecentDeliveriesByCampaign(r.Context(), campaign.ID, 50)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "listing deliveries", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}
	if records == nil {
		records = []domain.DeliveryRecord{}
	}
	type deliveryJSON struct {
		ID                uuid.UUID `json:"id"`
		WebhookEndpointID uuid.UUID `json:"webhook_endpoint_id"`
		EndpointURL       string    `json:"endpoint_url"`
		EventType         string    `json:"event_type"`
		ResponseStatus    *int      `json:"response_status"`
		Attempts          int       `json:"attempts"`
		Status            string    `json:"status"`
		CreatedAt         time.Time `json:"created_at"`
	}
	result := make([]deliveryJSON, len(records))
	for i, rec := range records {
		result[i] = deliveryJSON{
			ID:                rec.ID,
			WebhookEndpointID: rec.WebhookEndpointID,
			EndpointURL:       rec.EndpointURL,
			EventType:         string(rec.EventType),
			ResponseStatus:    rec.ResponseStatus,
			Attempts:          rec.Attempts,
			Status:            string(rec.Status),
			CreatedAt:         rec.CreatedAt,
		}
	}
	writeJSON(w, http.StatusOK, result)
}

// ---------------------------------------------------------------------------
// Settings
// ---------------------------------------------------------------------------

// GetSettings handles GET /v1/dashboard/{slug}/settings.
func (d *Dashboard) GetSettings(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{
		"id":           campaign.ID,
		"name":         campaign.Name,
		"slug":         campaign.Slug,
		"status":       string(campaign.Status),
		"boost_weight": campaign.Settings.BoostWeight,
		"max_signups":  campaign.MaxSignups,
		"product_url":  campaign.Settings.ProductURL,
		"invite_url":   campaign.Settings.InviteURL,
		"base_url":     d.BaseURL,
	})
}

// UpdateSettings handles PATCH /v1/dashboard/{slug}/settings.
func (d *Dashboard) UpdateSettings(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}

	var body struct {
		Name        *string  `json:"name"`
		Status      *string  `json:"status"`
		BoostWeight *float64 `json:"boost_weight"`
		MaxSignups  *int     `json:"max_signups"`
		ProductURL  *string  `json:"product_url"`
		InviteURL   *string  `json:"invite_url"`
	}
	if err := readJSON(r, &body); err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", err.Error())
		return
	}

	updated := campaign
	if body.Name != nil {
		updated.Name = *body.Name
	}
	if body.Status != nil {
		updated.Status = domain.CampaignStatus(*body.Status)
	}
	if body.BoostWeight != nil {
		updated.Settings.BoostWeight = *body.BoostWeight
	}
	if body.MaxSignups != nil {
		updated.MaxSignups = body.MaxSignups
	}
	if body.ProductURL != nil {
		updated.Settings.ProductURL = *body.ProductURL
	}
	if body.InviteURL != nil {
		updated.Settings.InviteURL = *body.InviteURL
	}
	if err := updated.Validate(); err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", err.Error())
		return
	}
	if err := d.Campaigns.Update(r.Context(), updated); err != nil {
		d.Logger.ErrorContext(r.Context(), "updating campaign settings", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{
		"id":           updated.ID,
		"name":         updated.Name,
		"status":       string(updated.Status),
		"boost_weight": updated.Settings.BoostWeight,
		"max_signups":  updated.MaxSignups,
		"product_url":  updated.Settings.ProductURL,
		"invite_url":   updated.Settings.InviteURL,
	})
}

// ---------------------------------------------------------------------------
// API Keys
// ---------------------------------------------------------------------------

// apiKeyInfo is the JSON shape returned for a single API key (no raw key value).
type apiKeyInfo struct {
	ID         uuid.UUID  `json:"id"`
	Name       string     `json:"name"`
	CreatedAt  time.Time  `json:"created_at"`
	LastUsedAt *time.Time `json:"last_used_at"`
}

// ListAPIKeys handles GET /dashboard/api/{slug}/api-keys.
// Returns all active keys for the account (raw key values are never returned).
func (d *Dashboard) ListAPIKeys(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}
	keys, err := d.APIKeys.ListByAccount(r.Context(), campaign.AccountID)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "listing api keys", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}
	result := make([]apiKeyInfo, 0, len(keys))
	for _, k := range keys {
		if k.IsActive() {
			result = append(result, apiKeyInfo{
				ID:         k.ID,
				Name:       k.Name,
				CreatedAt:  k.CreatedAt,
				LastUsedAt: k.LastUsedAt,
			})
		}
	}
	writeJSON(w, http.StatusOK, result)
}

// CreateAPIKey handles POST /dashboard/api/{slug}/api-keys.
// Generates a new named key and returns the raw value once.
func (d *Dashboard) CreateAPIKey(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}
	ctx := r.Context()

	var body struct {
		Name string `json:"name"`
	}
	if err := readJSON(r, &body); err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", err.Error())
		return
	}
	name := strings.TrimSpace(body.Name)
	if name == "" {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", "name is required")
		return
	}

	newKey, rawKey, err := domain.NewAccountAPIKey(campaign.AccountID, name)
	if err != nil {
		d.Logger.ErrorContext(ctx, "generating api key", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}
	if err := d.APIKeys.Create(ctx, newKey); err != nil {
		d.Logger.ErrorContext(ctx, "persisting api key", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	writeJSON(w, http.StatusCreated, map[string]any{
		"id":         newKey.ID,
		"name":       newKey.Name,
		"created_at": newKey.CreatedAt,
		"api_key":    rawKey,
	})
}

// RevokeAPIKey handles DELETE /dashboard/api/{slug}/api-keys/{id}.
// Verifies ownership then revokes the key.
func (d *Dashboard) RevokeAPIKey(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}
	ctx := r.Context()

	keyID, err := uuid.Parse(chi.URLParam(r, "id"))
	if err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", "invalid key id")
		return
	}

	// Verify the key belongs to this account before revoking.
	keys, err := d.APIKeys.ListByAccount(ctx, campaign.AccountID)
	if err != nil {
		d.Logger.ErrorContext(ctx, "listing api keys for revoke", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}
	found := false
	for _, k := range keys {
		if k.ID == keyID {
			found = true
			break
		}
	}
	if !found {
		problem.Write(w, http.StatusNotFound, "not-found", "Not Found", "api key not found")
		return
	}

	if err := d.APIKeys.Revoke(ctx, keyID); err != nil {
		if errors.Is(err, store.ErrNotFound) {
			problem.Write(w, http.StatusNotFound, "not-found", "Not Found", "api key not found or already revoked")
			return
		}
		d.Logger.ErrorContext(ctx, "revoking api key", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

// ---------------------------------------------------------------------------
// Access / Invite
// ---------------------------------------------------------------------------

// InviteTopN handles POST /v1/dashboard/{slug}/invite — marks the top N verified signups
// as invited and sends each of them an invite email asynchronously.
func (d *Dashboard) InviteTopN(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}

	var body struct {
		Count int `json:"count"`
	}
	if err := readJSON(r, &body); err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", err.Error())
		return
	}
	if body.Count <= 0 {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", "count must be greater than 0")
		return
	}
	if body.Count > 10000 {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", "count must not exceed 10000")
		return
	}

	invited, err := d.Signups.InviteTopN(r.Context(), campaign.ID, body.Count)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "inviting top N signups", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	totalInvited, err := d.Signups.CountInvitedByCampaign(r.Context(), campaign.ID)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "counting invited signups", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	// Queue invite emails in the outbox — non-blocking, best-effort.
	if d.EmailOutbox != nil && len(invited) > 0 {
		subject := "You're in — " + campaign.Name + " early access"
		for _, sg := range invited {
			inviteLink := dashboardBuildInviteLink(campaign.Settings.InviteLinkBase(), sg.InviteToken)
			htmlBody, textBody, renderErr := email.InviteEmail(campaign.Name, campaign.Settings.ProductURL, inviteLink)
			if renderErr != nil {
				d.Logger.ErrorContext(r.Context(), "rendering invite email template",
					slog.String("signup_id", sg.ID.String()),
					slog.String("error", renderErr.Error()),
				)
				continue
			}
			outboxEmail := domain.EmailOutbox{
				ID:             uuid.New(),
				IdempotencyKey: uuid.New(),
				ToAddr:         sg.Email,
				Subject:        subject,
				HTMLBody:       htmlBody,
				TextBody:       textBody,
				CreatedAt:      time.Now().UTC(),
			}
			if createErr := d.EmailOutbox.Create(r.Context(), outboxEmail); createErr != nil {
				d.Logger.ErrorContext(r.Context(), "queuing invite email",
					slog.String("signup_id", sg.ID.String()),
					slog.String("email", sg.Email),
					slog.String("error", createErr.Error()),
				)
			}
		}
	}

	writeJSON(w, http.StatusOK, map[string]any{
		"invited":       len(invited),
		"total_invited": totalInvited,
	})
}

// ListInvited handles GET /v1/dashboard/{slug}/invited — returns paginated invited signups.
func (d *Dashboard) ListInvited(w http.ResponseWriter, r *http.Request) {
	campaign, ok := d.mustAccountAndCampaign(w, r)
	if !ok {
		return
	}

	limit := 50
	offset := 0
	if q := r.URL.Query().Get("limit"); q != "" {
		if v, err := strconv.Atoi(q); err == nil && v > 0 && v <= 200 {
			limit = v
		}
	}
	if q := r.URL.Query().Get("offset"); q != "" {
		if v, err := strconv.Atoi(q); err == nil && v >= 0 {
			offset = v
		}
	}
	search := r.URL.Query().Get("search")

	signups, total, err := d.Signups.ListInvitedByCampaign(r.Context(), campaign.ID, limit, offset, search)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "listing invited signups", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}

	type invitedResponse struct {
		ID                    uuid.UUID  `json:"id"`
		Email                 string     `json:"email"`
		EffectivePosition     int        `json:"effective_position"`
		ReferralCount         int        `json:"referral_count"`
		InvitedAt             *time.Time `json:"invited_at"`
		InviteToken           *string    `json:"invite_token"`
		InviteTokenRedeemedAt *time.Time `json:"invite_token_redeemed_at"`
	}
	result := make([]invitedResponse, len(signups))
	for i, sg := range signups {
		result[i] = invitedResponse{
			ID:                    sg.ID,
			Email:                 sg.Email,
			EffectivePosition:     sg.EffectivePosition(),
			ReferralCount:         sg.ReferralCount,
			InvitedAt:             sg.InvitedAt,
			InviteToken:           sg.InviteToken,
			InviteTokenRedeemedAt: sg.InviteTokenRedeemedAt,
		}
	}
	writeJSON(w, http.StatusOK, map[string]any{
		"signups": result,
		"total":   total,
		"limit":   limit,
		"offset":  offset,
	})
}

// ---------------------------------------------------------------------------
// Account-level campaign endpoints
// ---------------------------------------------------------------------------

// campaignSummary is the JSON shape returned by the account-level campaign list.
type campaignSummary struct {
	ID        uuid.UUID `json:"id"`
	Name      string    `json:"name"`
	Slug      string    `json:"slug"`
	Status    string    `json:"status"`
	CreatedAt time.Time `json:"created_at"`
}

// ListAccountCampaigns handles GET /v1/dashboard/campaigns — lists all campaigns
// owned by the authenticated account.
func (d *Dashboard) ListAccountCampaigns(w http.ResponseWriter, r *http.Request) {
	accountID, ok := AccountIDFromContext(r.Context())
	if !ok {
		problem.Write(w, http.StatusUnauthorized, "unauthorized", "Unauthorized", "")
		return
	}
	campaigns, err := d.Campaigns.ListByAccount(r.Context(), accountID, 50, 0)
	if err != nil {
		d.Logger.ErrorContext(r.Context(), "listing account campaigns", slog.String("error", err.Error()))
		problem.Write(w, http.StatusInternalServerError, "internal", "Internal Server Error", "")
		return
	}
	result := make([]campaignSummary, len(campaigns))
	for i, c := range campaigns {
		result[i] = campaignSummary{
			ID:        c.ID,
			Name:      c.Name,
			Slug:      c.Slug,
			Status:    string(c.Status),
			CreatedAt: c.CreatedAt,
		}
	}
	writeJSON(w, http.StatusOK, result)
}

// CreateCampaignJSON handles POST /v1/dashboard/campaigns — creates a new campaign
// for the authenticated account and returns its summary as JSON.
func (d *Dashboard) CreateCampaignJSON(w http.ResponseWriter, r *http.Request) {
	accountID, ok := AccountIDFromContext(r.Context())
	if !ok {
		problem.Write(w, http.StatusUnauthorized, "unauthorized", "Unauthorized", "")
		return
	}
	var body struct {
		Name       string `json:"name"`
		ProductURL string `json:"product_url"`
	}
	if err := readJSON(r, &body); err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", err.Error())
		return
	}
	campaign, err := domain.NewCampaign(strings.TrimSpace(body.Name))
	if err != nil {
		problem.Write(w, http.StatusBadRequest, "bad-request", "Bad Request", err.Error())
		return
	}
	campaign.Settings.ProductURL = body.ProductURL
	campaign.AccountID = accountID
	if err = d.Campaigns.Create(r.Context(), campaign); err != nil {
		msg := "failed to create campaign"
		if errors.Is(err, store.ErrConflict) {
			msg = "a campaign with that name already exists"
		} else {
			d.Logger.ErrorContext(r.Context(), "creating campaign from dashboard", slog.String("error", err.Error()))
		}
		problem.Write(w, http.StatusUnprocessableEntity, "unprocessable", "Unprocessable Entity", msg)
		return
	}
	writeJSON(w, http.StatusCreated, campaignSummary{
		ID:        campaign.ID,
		Name:      campaign.Name,
		Slug:      campaign.Slug,
		Status:    string(campaign.Status),
		CreatedAt: campaign.CreatedAt,
	})
}

// ---------------------------------------------------------------------------
// Route registration
// ---------------------------------------------------------------------------

// Setup registers all dashboard routes on the provided chi router.
func (d *Dashboard) Setup(r chi.Router) {
	// OTP login/verify/logout — no auth required
	r.Get("/dashboard/login", d.LoginGET)
	r.Post("/dashboard/login", d.LoginPOST)
	r.Get("/dashboard/verify", d.VerifyGET)
	r.Post("/dashboard/verify", d.VerifyPOST)
	r.Post("/dashboard/logout", d.LogoutPOST)

	// Account home SPA at /dashboard/ — auth handled by the SPA (401 → redirect to login)
	r.Get("/dashboard/", d.homeHandler)
	// Static assets for the home SPA loaded via relative URLs (./app.{hash}.js, ./vendor/...).
	// {version} captures any suffix (e.g. "abc12345.js" or plain "js" in dev watch mode).
	r.Get("/dashboard/app.{version}", d.homeHandler)
	r.Get("/dashboard/vendor/*", d.homeHandler)

	// Static file serving per campaign slug (no auth required for static assets)
	r.Get("/dashboard/{slug}/", d.staticHandler)
	r.Get("/dashboard/{slug}/*", d.staticHandler)

	// Dashboard API — account-level endpoints (no campaign slug)
	r.With(d.CookieAuthMiddleware).Get("/dashboard/api/campaigns", d.ListAccountCampaigns)
	r.With(d.CookieAuthMiddleware).Post("/dashboard/api/campaigns", d.CreateCampaignJSON)

	// Dashboard API — all behind cookie auth middleware, scoped by campaign slug
	r.Route("/dashboard/api/{slug}", func(r chi.Router) {
		r.Use(d.CookieAuthMiddleware)

		r.Get("/stats", d.GetStats)
		r.Get("/timeseries", d.GetTimeseries)
		r.Get("/leaderboard", d.GetLeaderboard)
		r.Get("/settings", d.GetSettings)
		r.Patch("/settings", d.UpdateSettings)

		r.Get("/signups", d.ListSignups)
		r.Get("/signups/export.csv", d.ExportSignupsCSV)

		r.Post("/invite", d.InviteTopN)
		r.Get("/invited", d.ListInvited)

		r.Get("/webhooks", d.ListWebhooks)
		r.Post("/webhooks", d.CreateWebhook)
		r.Delete("/webhooks/{id}", d.DeleteWebhook)
		r.Get("/deliveries", d.ListDeliveries)

		r.Get("/api-keys", d.ListAPIKeys)
		r.Post("/api-keys", d.CreateAPIKey)
		r.Delete("/api-keys/{id}", d.RevokeAPIKey)
	})
}

// dashboardBuildInviteLink constructs a personalised invite URL by appending ?invite=<token>
// to productURL. Returns an empty string if productURL is empty, unparseable, or token is nil.
func dashboardBuildInviteLink(productURL string, token *string) string {
	if productURL == "" || token == nil || *token == "" {
		return ""
	}
	u, err := url.Parse(productURL)
	if err != nil {
		return ""
	}
	q := u.Query()
	q.Set("invite", *token)
	u.RawQuery = q.Encode()
	return u.String()
}
