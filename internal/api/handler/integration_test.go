//go:build integration

package handler_test

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"log/slog"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"runtime"
	"testing"
	"time"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/jackc/pgx/v5/stdlib"
	"github.com/pressly/goose/v3"
	"github.com/redis/go-redis/v9"
	"github.com/testcontainers/testcontainers-go"
	tcpostgres "github.com/testcontainers/testcontainers-go/modules/postgres"
	tcredis "github.com/testcontainers/testcontainers-go/modules/redis"
	"github.com/testcontainers/testcontainers-go/wait"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/api"
	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/email"
	"github.com/earlypass/earlypass/internal/store"
	pgstore "github.com/earlypass/earlypass/internal/store/postgres"
)

// syncOutboxStore implements store.EmailOutboxStore for tests.
// It delivers emails synchronously to a CapturingSender on Create/CreateWithTx,
// bypassing the background outbox processor so tests can inspect emails immediately.
type syncOutboxStore struct {
	sender *email.CapturingSender
}

func (s *syncOutboxStore) Create(ctx context.Context, e domain.EmailOutbox) error {
	return s.sender.SendWithIdempotencyKey(ctx, e.ToAddr, e.Subject, e.HTMLBody, e.TextBody, e.IdempotencyKey.String())
}

func (s *syncOutboxStore) CreateWithTx(ctx context.Context, _ pgx.Tx, e domain.EmailOutbox) error {
	return s.sender.SendWithIdempotencyKey(ctx, e.ToAddr, e.Subject, e.HTMLBody, e.TextBody, e.IdempotencyKey.String())
}

func (s *syncOutboxStore) ListPending(_ context.Context, _ int) ([]domain.EmailOutbox, error) {
	return nil, nil
}

func (s *syncOutboxStore) MarkSent(_ context.Context, _ uuid.UUID, _ time.Time) error { return nil }

func (s *syncOutboxStore) MarkFailed(_ context.Context, _ uuid.UUID, _ string) error { return nil }

func (s *syncOutboxStore) UpdateRetry(_ context.Context, _ uuid.UUID, _ int, _ string, _ time.Time) error {
	return nil
}

var (
	sharedPGContainer    *tcpostgres.PostgresContainer
	sharedRedisContainer *tcredis.RedisContainer
	sharedDB             *pgstore.DB
	sharedRedisAddr      string
)

func TestMain(m *testing.M) {
	ctx := context.Background()

	var err error
	sharedPGContainer, err = tcpostgres.Run(ctx,
		"postgres:16-alpine",
		tcpostgres.WithDatabase("earlypass_test"),
		tcpostgres.WithUsername("ep"),
		tcpostgres.WithPassword("ep"),
		testcontainers.WithWaitStrategy(
			wait.ForLog("database system is ready to accept connections").WithOccurrence(2),
		),
	)
	if err != nil {
		log.Fatalf("starting postgres container: %v", err)
	}

	pgDSN, err := sharedPGContainer.ConnectionString(ctx, "sslmode=disable")
	if err != nil {
		log.Fatalf("getting postgres connection string: %v", err)
	}

	if err = runMigrations(pgDSN); err != nil {
		log.Fatalf("running migrations: %v", err)
	}

	sharedDB, err = pgstore.New(ctx, pgDSN)
	if err != nil {
		log.Fatalf("opening postgres store: %v", err)
	}

	sharedRedisContainer, err = tcredis.Run(ctx, "redis:7-alpine")
	if err != nil {
		log.Fatalf("starting redis container: %v", err)
	}

	sharedRedisAddr, err = sharedRedisContainer.Endpoint(ctx, "")
	if err != nil {
		log.Fatalf("getting redis endpoint: %v", err)
	}

	code := m.Run()

	sharedDB.Close()
	_ = sharedPGContainer.Terminate(ctx)
	_ = sharedRedisContainer.Terminate(ctx)
	os.Exit(code)
}

// testServer bundles the httptest.Server and helper fields used across tests.
type testServer struct {
	*httptest.Server
	signups    store.SignupStore
	signInTokens store.SignInTokenStore
	emails     *email.CapturingSender
}

// do performs an HTTP request against the test server and returns the response.
func (ts *testServer) do(t *testing.T, method, path string, body any, headers map[string]string) *http.Response {
	t.Helper()
	var bodyReader io.Reader
	if body != nil {
		b, err := json.Marshal(body)
		if err != nil {
			t.Fatalf("marshalling request body: %v", err)
		}
		bodyReader = bytes.NewReader(b)
	}
	req, err := http.NewRequestWithContext(context.Background(), method, ts.URL+path, bodyReader)
	if err != nil {
		t.Fatalf("building request: %v", err)
	}
	if body != nil {
		req.Header.Set("Content-Type", "application/json")
	}
	for k, v := range headers {
		req.Header.Set(k, v)
	}
	resp, err := ts.Client().Do(req)
	if err != nil {
		t.Fatalf("request %s %s: %v", method, path, err)
	}
	return resp
}

// decode reads and JSON-decodes the response body into v.
func decode(t *testing.T, resp *http.Response, v any) {
	t.Helper()
	defer resp.Body.Close()
	if err := json.NewDecoder(resp.Body).Decode(v); err != nil {
		t.Fatalf("decoding response: %v", err)
	}
}

// discard reads and discards the response body.
func discard(resp *http.Response) {
	defer resp.Body.Close()
	_, _ = io.Copy(io.Discard, resp.Body)
}

// doSignup makes a POST request to the given campaign's signup endpoint,
// automatically fetching and including a valid CSRF token.
// Falls back to a placeholder token if the CSRF endpoint is unavailable
// (e.g. the campaign does not exist), so campaign-not-found tests still work.
func (ts *testServer) doSignup(t *testing.T, campaignID string, body any, extraHeaders map[string]string) *http.Response {
	t.Helper()
	// Fetch a CSRF token for this campaign.
	csrfResp := ts.do(t, http.MethodGet, "/api/v1/campaigns/"+campaignID+"/csrf-token", nil, nil)
	var token string
	if csrfResp.StatusCode == http.StatusOK {
		var data struct {
			Token string `json:"token"`
		}
		if err := json.NewDecoder(csrfResp.Body).Decode(&data); err == nil {
			token = data.Token
		}
		csrfResp.Body.Close()
	} else {
		csrfResp.Body.Close()
		token = "invalid-test-token"
	}
	headers := map[string]string{"X-CSRF-Token": token}
	for k, v := range extraHeaders {
		headers[k] = v
	}
	return ts.do(t, http.MethodPost, "/api/v1/campaigns/"+campaignID+"/signups", body, headers)
}

// newTestServer returns a running httptest.Server wrapping the full application
// router backed by the shared Postgres and Redis containers. A fresh router and
// Redis client are created per test to prevent in-memory state leaks.
func newTestServer(t *testing.T) *testServer {
	return newTestServerWithTrustedProxies(t, nil)
}

// newTestServerWithTrustedProxies is like newTestServer but configures trusted proxy CIDRs.
// Pass a non-loopback range (e.g. "10.0.0.0/8") to enable IP-based self-referral checks
// while still using RemoteAddr for loopback clients.
func newTestServerWithTrustedProxies(t *testing.T, trustedProxies []string) *testServer {
	t.Helper()

	redisClient := redis.NewClient(&redis.Options{Addr: sharedRedisAddr})
	t.Cleanup(func() { _ = redisClient.Close() })

	capturingSender := &email.CapturingSender{}

	deps := api.Dependencies{
		CampaignStore:      sharedDB.Campaigns(),
		SignupStore:        sharedDB.Signups(),
		WebhookStore:       sharedDB.Webhooks(),
		AccountStore:       sharedDB.Accounts(),
		SignInTokenStore:     sharedDB.SignInTokens(),
		AccountAPIKeyStore: sharedDB.AccountAPIKeys(),
		OAuthStore:         sharedDB.OAuth(),
		DBPinger:           sharedDB,
		RedisClient:        redisClient,
		EmailOutboxStore:   &syncOutboxStore{sender: capturingSender},
		TrustedProxies:     trustedProxies,
		Logger:             slog.New(slog.NewTextHandler(io.Discard, nil)),
	}

	router := api.NewRouter(deps)

	srv := httptest.NewServer(router)
	t.Cleanup(srv.Close)

	return &testServer{Server: srv, signups: sharedDB.Signups(), signInTokens: sharedDB.SignInTokens(), emails: capturingSender}
}

// uniqueName appends a short UUID suffix to base to prevent slug collisions
// when multiple tests share the same database.
func uniqueName(base string) string {
	return base + " " + uuid.New().String()[:8]
}

// verificationToken fetches the email verification token for the given campaign+email from the DB.
// Returns the token or fails the test.
func (ts *testServer) verificationToken(t *testing.T, campaignID, emailAddr string) string {
	t.Helper()
	sg, err := ts.signups.GetByCampaignAndEmail(
		context.Background(),
		uuid.MustParse(campaignID),
		emailAddr,
	)
	if err != nil {
		t.Fatalf("fetching signup for verification token: %v", err)
	}
	if sg.VerificationToken == nil {
		t.Fatal("signup has no verification token — already verified?")
	}
	return *sg.VerificationToken
}

func runMigrations(dsn string) error {
	cfg, err := pgxpool.ParseConfig(dsn)
	if err != nil {
		return fmt.Errorf("parsing dsn: %w", err)
	}
	sqlDB := stdlib.OpenDB(*cfg.ConnConfig)
	defer func() { _ = sqlDB.Close() }()
	if err = goose.SetDialect("postgres"); err != nil {
		return fmt.Errorf("goose dialect: %w", err)
	}
	if err = goose.Up(sqlDB, migrationsDir()); err != nil {
		return fmt.Errorf("goose up: %w", err)
	}
	return nil
}

func migrationsDir() string {
	_, file, _, ok := runtime.Caller(0)
	if !ok {
		panic("runtime.Caller failed: cannot determine migrations directory")
	}
	// This file: internal/api/handler/integration_test.go → root is 3 levels up.
	return filepath.Join(filepath.Dir(file), "..", "..", "..", "migrations")
}

// createCampaignWithAuth is a test helper that creates an account, obtains an
// account API key, and creates a campaign owned by that account. Returns the
// account API key, campaign JSON map, and campaign ID string.
func createCampaignWithAuth(t *testing.T, ts *testServer, name string) (string, map[string]any, string) {
	t.Helper()
	accountKey := createAccountAndKey(t)
	auth := map[string]string{"Authorization": "Bearer " + accountKey}
	resp := ts.do(t, http.MethodPost, "/api/v1/campaigns", map[string]any{"name": name}, auth)
	if resp.StatusCode != http.StatusCreated {
		discard(resp)
		t.Fatalf("createCampaignWithAuth: status = %d, want 201", resp.StatusCode)
	}
	var campaign map[string]any
	decode(t, resp, &campaign)
	id := campaign["id"].(string)
	return accountKey, campaign, id
}

// ── Campaign CRUD ────────────────────────────────────────────────────────────

func TestIntegration_CreateCampaign(t *testing.T) {
	ts := newTestServer(t)
	accountKey := createAccountAndKey(t)
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	body := map[string]any{"name": uniqueName("Test Campaign")}
	resp := ts.do(t, http.MethodPost, "/api/v1/campaigns", body, auth)
	defer discard(resp)

	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("status = %d, want 201", resp.StatusCode)
	}

	var result map[string]any
	decode(t, resp, &result)

	// Response is now just the Campaign object (no api_key or dashboard_secret).
	if result["id"] == nil {
		t.Error("expected campaign id in response")
	}
	if result["slug"] == nil {
		t.Error("expected slug in response")
	}
}

func TestIntegration_CreateCampaign_NoAuth(t *testing.T) {
	ts := newTestServer(t)

	resp := ts.do(t, http.MethodPost, "/api/v1/campaigns", map[string]any{"name": uniqueName("Unauth")}, nil)
	defer discard(resp)

	if resp.StatusCode != http.StatusUnauthorized {
		t.Fatalf("status = %d, want 401", resp.StatusCode)
	}
}

func TestIntegration_CreateCampaign_EmptyName(t *testing.T) {
	ts := newTestServer(t)
	accountKey := createAccountAndKey(t)
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	resp := ts.do(t, http.MethodPost, "/api/v1/campaigns", map[string]any{"name": ""}, auth)
	defer discard(resp)

	if resp.StatusCode != http.StatusBadRequest {
		t.Fatalf("status = %d, want 400", resp.StatusCode)
	}
}

func TestIntegration_GetCampaign(t *testing.T) {
	ts := newTestServer(t)
	accountKey, _, id := createCampaignWithAuth(t, ts, uniqueName("Get Test"))

	// Fetch.
	resp := ts.do(t, http.MethodGet, "/api/v1/campaigns/"+id, nil, map[string]string{
		"Authorization": "Bearer " + accountKey,
	})
	defer discard(resp)

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("status = %d, want 200", resp.StatusCode)
	}
}

func TestIntegration_GetCampaign_NoAuth(t *testing.T) {
	ts := newTestServer(t)
	_, _, id := createCampaignWithAuth(t, ts, uniqueName("Auth Test"))

	// Fetch without auth.
	resp := ts.do(t, http.MethodGet, "/api/v1/campaigns/"+id, nil, nil)
	defer discard(resp)

	if resp.StatusCode != http.StatusUnauthorized {
		t.Fatalf("status = %d, want 401", resp.StatusCode)
	}
}

func TestIntegration_DeleteCampaign(t *testing.T) {
	ts := newTestServer(t)
	accountKey, _, id := createCampaignWithAuth(t, ts, uniqueName("Delete Test"))

	resp := ts.do(t, http.MethodDelete, "/api/v1/campaigns/"+id, nil, map[string]string{
		"Authorization": "Bearer " + accountKey,
	})
	discard(resp)

	if resp.StatusCode != http.StatusNoContent {
		t.Fatalf("status = %d, want 204", resp.StatusCode)
	}
}

// ── Signup Flow ──────────────────────────────────────────────────────────────

func TestIntegration_CreateSignup(t *testing.T) {
	ts := newTestServer(t)
	_, _, id := createCampaignWithAuth(t, ts, uniqueName("Signup Test"))

	// Sign up (public endpoint — no auth required).
	body := map[string]any{"email": "alice@example.com"}
	resp := ts.doSignup(t, id, body, nil)
	defer discard(resp)

	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("status = %d, want 201", resp.StatusCode)
	}
}

func TestIntegration_CreateSignup_DisposableEmail(t *testing.T) {
	ts := newTestServer(t)
	_, _, id := createCampaignWithAuth(t, ts, uniqueName("Fraud Test"))

	resp := ts.doSignup(t, id,
		map[string]any{"email": "hacker@mailinator.com"}, nil)
	defer discard(resp)

	if resp.StatusCode != http.StatusUnprocessableEntity {
		t.Fatalf("status = %d, want 422", resp.StatusCode)
	}
}

func TestIntegration_CreateSignup_DuplicateEmail(t *testing.T) {
	ts := newTestServer(t)
	_, _, id := createCampaignWithAuth(t, ts, uniqueName("Dupe Test"))

	// First signup.
	resp := ts.doSignup(t, id,
		map[string]any{"email": "bob@example.com"}, nil)
	discard(resp)

	// Duplicate.
	resp = ts.doSignup(t, id,
		map[string]any{"email": "bob@example.com"}, nil)
	defer discard(resp)

	if resp.StatusCode != http.StatusConflict {
		t.Fatalf("status = %d, want 409", resp.StatusCode)
	}
}

func TestIntegration_CreateSignup_CampaignNotFound(t *testing.T) {
	ts := newTestServer(t)

	resp := ts.doSignup(t, "00000000-0000-0000-0000-000000000000",
		map[string]any{"email": "nobody@example.com"}, nil)
	defer discard(resp)

	if resp.StatusCode != http.StatusBadRequest {
		t.Fatalf("status = %d, want 400", resp.StatusCode)
	}
}

// ── Leaderboard & Stats ──────────────────────────────────────────────────────

func TestIntegration_GetLeaderboard(t *testing.T) {
	ts := newTestServer(t)
	_, _, id := createCampaignWithAuth(t, ts, uniqueName("Leaderboard Test"))

	// Leaderboard is public.
	resp := ts.do(t, http.MethodGet, "/api/v1/campaigns/"+id+"/leaderboard", nil, nil)
	defer discard(resp)

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("status = %d, want 200", resp.StatusCode)
	}
}

func TestIntegration_GetStats(t *testing.T) {
	ts := newTestServer(t)
	accountKey, _, id := createCampaignWithAuth(t, ts, uniqueName("Stats Test"))

	resp := ts.do(t, http.MethodGet, "/api/v1/campaigns/"+id+"/stats", nil, map[string]string{
		"Authorization": "Bearer " + accountKey,
	})
	defer discard(resp)

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("status = %d, want 200", resp.StatusCode)
	}
}

// ── Webhooks ─────────────────────────────────────────────────────────────────

func TestIntegration_WebhookCRUD(t *testing.T) {
	ts := newTestServer(t)
	accountKey, _, id := createCampaignWithAuth(t, ts, uniqueName("Webhook Test"))
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	// Create webhook.
	wh := map[string]any{
		"url":    "https://example.com/hook",
		"events": []string{"signup.created", "referral.converted"},
	}
	resp := ts.do(t, http.MethodPost, "/api/v1/campaigns/"+id+"/webhooks", wh, auth)
	if resp.StatusCode != http.StatusCreated {
		discard(resp)
		t.Fatalf("create webhook: status = %d, want 201", resp.StatusCode)
	}
	var whResp map[string]any
	decode(t, resp, &whResp)
	whID := whResp["id"].(string)

	// List webhooks.
	resp = ts.do(t, http.MethodGet, "/api/v1/campaigns/"+id+"/webhooks", nil, auth)
	if resp.StatusCode != http.StatusOK {
		discard(resp)
		t.Fatalf("list webhooks: status = %d, want 200", resp.StatusCode)
	}
	discard(resp)

	// Delete webhook.
	resp = ts.do(t, http.MethodDelete, "/api/v1/campaigns/"+id+"/webhooks/"+whID, nil, auth)
	discard(resp)
	if resp.StatusCode != http.StatusNoContent {
		t.Fatalf("delete webhook: status = %d, want 204", resp.StatusCode)
	}
}

// ── Widget Data ───────────────────────────────────────────────────────────────

func TestIntegration_GetWidgetData(t *testing.T) {
	ts := newTestServer(t)
	_, campaign, _ := createCampaignWithAuth(t, ts, uniqueName("Widget Test"))
	slug := campaign["slug"].(string)

	// Widget endpoint is public.
	resp := ts.do(t, http.MethodGet, "/api/v1/w/"+slug, nil, nil)
	defer discard(resp)

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("status = %d, want 200", resp.StatusCode)
	}
}

// ── Health ────────────────────────────────────────────────────────────────────

func TestIntegration_Health(t *testing.T) {
	ts := newTestServer(t)

	resp := ts.do(t, http.MethodGet, "/healthz", nil, nil)

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("status = %d, want 200", resp.StatusCode)
	}

	var body struct {
		Status     string `json:"status"`
		Components struct {
			Database string `json:"database"`
			Redis    string `json:"redis"`
		} `json:"components"`
	}
	decode(t, resp, &body)

	if body.Status != "ok" {
		t.Fatalf("status = %q, want ok", body.Status)
	}
	if body.Components.Database != "ok" {
		t.Fatalf("components.database = %q, want ok", body.Components.Database)
	}
	if body.Components.Redis != "ok" {
		t.Fatalf("components.redis = %q, want ok", body.Components.Redis)
	}

	traceID := resp.Header.Get("X-Trace-ID")
	_ = traceID // present when OTel is configured; noop provider omits it
}

// ── Idempotency ───────────────────────────────────────────────────────────────

func TestIntegration_Idempotency_SameKeyReturnsSameResponse(t *testing.T) {
	ts := newTestServer(t)
	_, _, id := createCampaignWithAuth(t, ts, uniqueName("Idem Test"))

	headers := map[string]string{"Idempotency-Key": "test-key-abc123"}

	// First request.
	resp1 := ts.doSignup(t, id,
		map[string]any{"email": "idem@example.com"}, headers)
	var body1 map[string]any
	decode(t, resp1, &body1)

	// Second request with same key — should return same response.
	resp2 := ts.doSignup(t, id,
		map[string]any{"email": "idem@example.com"}, headers)
	var body2 map[string]any
	decode(t, resp2, &body2)

	if resp1.StatusCode != resp2.StatusCode {
		t.Errorf("status mismatch: first=%d second=%d", resp1.StatusCode, resp2.StatusCode)
	}
}

// ── Email Verification ────────────────────────────────────────────────────────

func TestIntegration_VerifyEmail_ValidToken(t *testing.T) {
	ts := newTestServer(t)

	// Create campaign.
	accountKey, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Verify Test"))

	// Sign up.
	resp := ts.doSignup(t, campaignID,
		map[string]any{"email": "verify@example.com"}, nil)
	discard(resp)
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("signup status = %d, want 201", resp.StatusCode)
	}

	// Get verification token directly from DB.
	token := ts.verificationToken(t, campaignID, "verify@example.com")

	// Hit the verify endpoint — expect a redirect (302) to /verified.
	// Use a client that doesn't follow redirects.
	noRedirectClient := &http.Client{
		CheckRedirect: func(_ *http.Request, _ []*http.Request) error {
			return http.ErrUseLastResponse
		},
	}
	verifyReq, err := http.NewRequestWithContext(context.Background(), http.MethodGet, ts.URL+"/api/v1/verify/"+token, nil)
	if err != nil {
		t.Fatalf("building verify request: %v", err)
	}
	verifyResp, err := noRedirectClient.Do(verifyReq)
	if err != nil {
		t.Fatalf("verify request: %v", err)
	}
	defer verifyResp.Body.Close()

	if verifyResp.StatusCode != http.StatusFound {
		t.Fatalf("verify status = %d, want 302", verifyResp.StatusCode)
	}
	if loc := verifyResp.Header.Get("Location"); loc != "/verified" {
		t.Errorf("Location = %q, want %q", loc, "/verified")
	}

	// Confirm the signup is now verified in the DB.
	sg, dbErr := ts.signups.GetByCampaignAndEmail(context.Background(), uuid.MustParse(campaignID), "verify@example.com")
	if dbErr != nil {
		t.Fatalf("fetching signup after verify: %v", dbErr)
	}
	if !sg.EmailVerified {
		t.Error("expected EmailVerified = true after verification")
	}
	if sg.VerificationToken != nil {
		t.Error("expected VerificationToken to be cleared after verification")
	}

	// The API should also reflect verified status.
	resp = ts.do(t, http.MethodGet, "/api/v1/campaigns/"+campaignID+"/signups/"+sg.ID.String(), nil,
		map[string]string{"Authorization": "Bearer " + accountKey})
	var signupResp map[string]any
	decode(t, resp, &signupResp)
	if signupResp["email_verified"] != true {
		t.Errorf("API email_verified = %v, want true", signupResp["email_verified"])
	}
}

func TestIntegration_VerifyEmail_InvalidToken(t *testing.T) {
	ts := newTestServer(t)

	resp := ts.do(t, http.MethodGet, "/api/v1/verify/invalid-token-that-does-not-exist", nil, nil)
	defer discard(resp)

	if resp.StatusCode != http.StatusNotFound {
		t.Fatalf("status = %d, want 404", resp.StatusCode)
	}
}

func TestIntegration_VerifyEmail_AlreadyUsedToken(t *testing.T) {
	ts := newTestServer(t)

	// Create campaign + signup.
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Reuse Token Test"))

	resp := ts.doSignup(t, campaignID,
		map[string]any{"email": "reuse@example.com"}, nil)
	discard(resp)

	token := ts.verificationToken(t, campaignID, "reuse@example.com")

	noRedirectClient := &http.Client{
		CheckRedirect: func(_ *http.Request, _ []*http.Request) error {
			return http.ErrUseLastResponse
		},
	}

	// First verify — succeeds.
	verifyReq, _ := http.NewRequestWithContext(context.Background(), http.MethodGet, ts.URL+"/api/v1/verify/"+token, nil)
	verifyResp, _ := noRedirectClient.Do(verifyReq)
	discard(verifyResp)

	// Second verify with same token — should be 404 (token cleared).
	verifyReq2, _ := http.NewRequestWithContext(context.Background(), http.MethodGet, ts.URL+"/api/v1/verify/"+token, nil)
	verifyResp2, err := noRedirectClient.Do(verifyReq2)
	if err != nil {
		t.Fatalf("second verify request: %v", err)
	}
	defer verifyResp2.Body.Close()

	if verifyResp2.StatusCode != http.StatusNotFound {
		t.Fatalf("second verify status = %d, want 404", verifyResp2.StatusCode)
	}
}

// ── Referral Chain ───────────────────────────────────────────────────────────

func TestIntegration_ReferralChain(t *testing.T) {
	ts := newTestServer(t)

	// Create campaign.
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Referral Test"))

	// A signs up first (position 1). Use a distinct IP so that B and C's signups
	// (from different IPs) are not blocked by the IP-based self-referral check.
	var signupA map[string]any
	resp := ts.doSignup(t, campaignID,
		map[string]any{"email": "alice@example.com"}, map[string]string{"X-Real-IP": "10.0.1.1"})
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("signup A status = %d, want 201", resp.StatusCode)
	}
	decode(t, resp, &signupA)

	aRefCode := signupA["referral_code"].(string)
	aBasePos := int(signupA["base_position"].(float64))
	if aBasePos != 1 {
		t.Errorf("A base_position = %d, want 1", aBasePos)
	}
	if int(signupA["referral_count"].(float64)) != 0 {
		t.Errorf("A referral_count = %v, want 0", signupA["referral_count"])
	}

	// B signs up using A's referral code. Different IP → not an IP-based self-referral.
	resp = ts.doSignup(t, campaignID,
		map[string]any{"email": "bob@example.com", "referral_code": aRefCode},
		map[string]string{"X-Real-IP": "10.0.1.2"})
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("signup B status = %d, want 201", resp.StatusCode)
	}
	discard(resp)

	// Verify A's referral_count has been incremented.
	sgA, err := ts.signups.GetByCampaignAndEmail(context.Background(), uuid.MustParse(campaignID), "alice@example.com")
	if err != nil {
		t.Fatalf("fetching A after referral: %v", err)
	}
	if sgA.ReferralCount != 1 {
		t.Errorf("A referral_count = %d, want 1", sgA.ReferralCount)
	}
	if sgA.BonusPoints < 1 {
		t.Errorf("A bonus_points = %d, want >= 1", sgA.BonusPoints)
	}

	// A's effective position should be better (or at least not worse) than base.
	if sgA.EffectivePosition() > sgA.BasePosition {
		t.Errorf("A effective_position %d > base_position %d — referral should help", sgA.EffectivePosition(), sgA.BasePosition)
	}

	// C signs up using A's referral code. Different IP → not an IP-based self-referral.
	resp = ts.doSignup(t, campaignID,
		map[string]any{"email": "carol@example.com", "referral_code": aRefCode},
		map[string]string{"X-Real-IP": "10.0.1.3"})
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("signup C status = %d, want 201", resp.StatusCode)
	}
	discard(resp)

	// A should now have 2 referrals.
	sgA2, err := ts.signups.GetByCampaignAndEmail(context.Background(), uuid.MustParse(campaignID), "alice@example.com")
	if err != nil {
		t.Fatalf("fetching A after second referral: %v", err)
	}
	if sgA2.ReferralCount != 2 {
		t.Errorf("A referral_count = %d, want 2", sgA2.ReferralCount)
	}

	// Leaderboard should rank A first (highest referral count).
	resp = ts.do(t, http.MethodGet, "/api/v1/campaigns/"+campaignID+"/leaderboard", nil, nil)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("leaderboard status = %d, want 200", resp.StatusCode)
	}
	var lb map[string]any
	decode(t, resp, &lb)
	entries := lb["entries"].([]any)
	if len(entries) == 0 {
		t.Fatal("leaderboard is empty, expected A at rank 1")
	}
	top := entries[0].(map[string]any)
	if top["referral_code"].(string) != aRefCode {
		t.Errorf("leaderboard rank 1 referral_code = %q, want %q", top["referral_code"], aRefCode)
	}
	if int(top["referral_count"].(float64)) != 2 {
		t.Errorf("leaderboard rank 1 referral_count = %v, want 2", top["referral_count"])
	}

	// Email should be masked (first char + "***" + domain).
	masked := top["email_masked"].(string)
	if len(masked) == 0 {
		t.Error("leaderboard email_masked is empty")
	}
	if masked == "alice@example.com" {
		t.Error("leaderboard email_masked is not masked")
	}
}

func TestIntegration_SelfReferralBlocked(t *testing.T) {
	ts := newTestServer(t)

	// Create campaign.
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Self-Referral Test"))

	// Alice signs up.
	var signupA map[string]any
	resp := ts.doSignup(t, campaignID,
		map[string]any{"email": "self@example.com"}, nil)
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("signup A status = %d, want 201", resp.StatusCode)
	}
	decode(t, resp, &signupA)
	aRefCode := signupA["referral_code"].(string)

	// Alice tries to refer herself (same email, different signup would be a conflict anyway).
	// The self-referral should be silently ignored — Bob signs up with Alice's code.
	// But if the SAME email tries to sign up again, it's a 409 Conflict.
	resp = ts.doSignup(t, campaignID,
		map[string]any{"email": "self@example.com", "referral_code": aRefCode}, nil)
	defer discard(resp)
	// Email conflict — 409 is expected here (same email, same campaign).
	if resp.StatusCode != http.StatusConflict {
		t.Fatalf("self-referral (same email) status = %d, want 409", resp.StatusCode)
	}

	// alice's referral_count must still be 0 (no credit from self-referral).
	sgA, err := ts.signups.GetByCampaignAndEmail(context.Background(), uuid.MustParse(campaignID), "self@example.com")
	if err != nil {
		t.Fatalf("fetching self signup: %v", err)
	}
	if sgA.ReferralCount != 0 {
		t.Errorf("self-referral credited: referral_count = %d, want 0", sgA.ReferralCount)
	}
}

func TestIntegration_SelfReferralBlocked_CrossEmail(t *testing.T) {
	// Use a trusted-proxy range that does NOT include the loopback address used by
	// httptest.Server (127.0.0.1). This means:
	//   • trustedProxies is non-empty → IP-based self-referral check is enabled.
	//   • RemoteAddr (127.0.0.1) is not a trusted proxy → RealIP falls back to RemoteAddr.
	//   • Both signups share the same loopback RemoteAddr → IP-based blocking fires.
	ts := newTestServerWithTrustedProxies(t, []string{"10.0.0.0/8"})

	// Create campaign.
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Cross Self-Referral Test"))

	// Alice signs up — no X-Real-IP header, so IP comes from RemoteAddr (loopback).
	// Both signups share the same loopback IP, triggering IP-based self-referral blocking.
	var signupA map[string]any
	resp := ts.doSignup(t, campaignID,
		map[string]any{"email": "alice2@example.com"}, nil)
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("signup A status = %d, want 201", resp.StatusCode)
	}
	decode(t, resp, &signupA)
	aRefCode := signupA["referral_code"].(string)

	// Bob signs up using Alice's referral code — same loopback IP within 10 min.
	// Self-referral by IP should be blocked: Bob's signup succeeds (201) but
	// Alice gets no credit.
	var signupB map[string]any
	resp = ts.doSignup(t, campaignID,
		map[string]any{"email": "bob2@example.com", "referral_code": aRefCode}, nil)
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("signup B status = %d, want 201", resp.StatusCode)
	}
	decode(t, resp, &signupB)

	// Alice should NOT get credit (IP-based self-referral).
	sgA, err := ts.signups.GetByCampaignAndEmail(context.Background(), uuid.MustParse(campaignID), "alice2@example.com")
	if err != nil {
		t.Fatalf("fetching A after IP self-referral: %v", err)
	}
	if sgA.ReferralCount != 0 {
		t.Errorf("IP self-referral credited: A referral_count = %d, want 0", sgA.ReferralCount)
	}
}

func TestIntegration_DuplicateReferral(t *testing.T) {
	ts := newTestServer(t)

	// Create campaign.
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Duplicate Ref Test"))

	// Alice signs up. Use a distinct IP so Bob's signup (from a different IP)
	// is not blocked by the IP-based self-referral check.
	var signupA map[string]any
	resp := ts.doSignup(t, campaignID,
		map[string]any{"email": "alice3@example.com"}, map[string]string{"X-Real-IP": "10.0.2.1"})
	decode(t, resp, &signupA)
	aRefCode := signupA["referral_code"].(string)

	// Bob signs up via Alice's code. Different IP → legitimate referral.
	resp = ts.doSignup(t, campaignID,
		map[string]any{"email": "bob3@example.com", "referral_code": aRefCode},
		map[string]string{"X-Real-IP": "10.0.2.2"})
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("signup B status = %d, want 201", resp.StatusCode)
	}
	discard(resp)

	// Bob tries to sign up again with the same email (same campaign).
	// This must be a 409 Conflict — duplicate email, not credited again.
	resp = ts.doSignup(t, campaignID,
		map[string]any{"email": "bob3@example.com", "referral_code": aRefCode},
		map[string]string{"X-Real-IP": "10.0.2.2"})
	defer discard(resp)
	if resp.StatusCode != http.StatusConflict {
		t.Fatalf("duplicate signup status = %d, want 409", resp.StatusCode)
	}

	// Alice should only have 1 referral (not 2).
	sgA, err := ts.signups.GetByCampaignAndEmail(context.Background(), uuid.MustParse(campaignID), "alice3@example.com")
	if err != nil {
		t.Fatalf("fetching A: %v", err)
	}
	if sgA.ReferralCount != 1 {
		t.Errorf("A referral_count = %d, want 1 (duplicate should not be credited)", sgA.ReferralCount)
	}
}

func TestIntegration_WidgetData_IncludesEffectivePosition(t *testing.T) {
	ts := newTestServer(t)

	// Create campaign.
	_, campaign, campaignID := createCampaignWithAuth(t, ts, uniqueName("Widget Position Test"))
	slug := campaign["slug"].(string)

	// A "before" signup so Alice lands at position 2. This lets us verify that
	// referral bonuses can move Alice ahead of "before5" in the adjusted queue.
	resp := ts.doSignup(t, campaignID,
		map[string]any{"email": "before5@example.com"}, map[string]string{"X-Real-IP": "10.0.4.0"})
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("before signup status = %d, want 201", resp.StatusCode)
	}
	discard(resp)

	// Alice signs up at position 2.
	var signupA map[string]any
	resp = ts.doSignup(t, campaignID,
		map[string]any{"email": "alice5@example.com"}, map[string]string{"X-Real-IP": "10.0.4.1"})
	decode(t, resp, &signupA)
	aRefCode := signupA["referral_code"].(string)

	// Bob and Charlie both sign up via Alice's code from distinct IPs.
	// Two referrals give Alice bonus_points=2, effective_sort=0 — ahead of
	// "before5" at effective_sort=1. Adjusted position becomes 1 < base 2.
	for _, ip := range []string{"10.0.4.2", "10.0.4.3"} {
		email := "ref5-" + ip + "@example.com"
		r := ts.doSignup(t, campaignID,
			map[string]any{"email": email, "referral_code": aRefCode},
			map[string]string{"X-Real-IP": ip})
		if r.StatusCode != http.StatusCreated {
			t.Fatalf("referrer signup (ip=%s) status = %d, want 201", ip, r.StatusCode)
		}
		discard(r)
	}

	// Widget data for Alice should show adjusted effective_position < base_position.
	resp = ts.do(t, http.MethodGet,
		"/api/v1/w/"+slug+"?email=alice5@example.com", nil, nil)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("widget data status = %d, want 200", resp.StatusCode)
	}
	var wd map[string]any
	decode(t, resp, &wd)

	signup := wd["signup"].(map[string]any)
	effective := int(signup["effective_position"].(float64))
	base := int(signup["base_position"].(float64))
	if effective >= base {
		t.Errorf("after 2 referrals: effective_position (%d) should be < base_position (%d)", effective, base)
	}
}

// ── Widget / Invite interaction ───────────────────────────────────────────────

// verifyAndInvite is a helper that verifies a signup by email, then invites the
// top 1 eligible signup for the campaign. Returns the invite response body.
func verifyAndInviteTop(t *testing.T, ts *testServer, campaignID, accountKey, email string) {
	t.Helper()
	token := ts.verificationToken(t, campaignID, email)
	noRedir := &http.Client{CheckRedirect: func(_ *http.Request, _ []*http.Request) error {
		return http.ErrUseLastResponse
	}}
	req, _ := http.NewRequestWithContext(context.Background(), http.MethodGet, ts.URL+"/api/v1/verify/"+token, nil)
	resp, err := noRedir.Do(req)
	if err != nil {
		t.Fatalf("verify request: %v", err)
	}
	discard(resp)

	auth := map[string]string{"Authorization": "Bearer " + accountKey}
	r := ts.do(t, http.MethodPost, "/api/v1/campaigns/"+campaignID+"/signups/invite",
		map[string]any{"count": 1}, auth)
	if r.StatusCode != http.StatusOK {
		t.Fatalf("invite status = %d, want 200", r.StatusCode)
	}
	discard(r)
}

func TestIntegration_Widget_AdjustedPosition_ExcludesInvited(t *testing.T) {
	ts := newTestServer(t)
	accountKey, campaign, campaignID := createCampaignWithAuth(t, ts, uniqueName("Adj Pos Test"))
	slug := campaign["slug"].(string)

	// "first" signs up at position 1, "second" at position 2.
	for _, p := range []struct{ email, ip string }{
		{"first-adj@example.com", "10.0.9.1"},
		{"second-adj@example.com", "10.0.9.2"},
	} {
		r := ts.doSignup(t, campaignID,
			map[string]any{"email": p.email}, map[string]string{"X-Real-IP": p.ip})
		if r.StatusCode != http.StatusCreated {
			t.Fatalf("signup %s: status = %d, want 201", p.email, r.StatusCode)
		}
		discard(r)
	}

	// Before invite: second's adjusted position = 2.
	resp := ts.do(t, http.MethodGet,
		"/api/v1/w/"+slug+"?email=second-adj@example.com", nil, nil)
	var wd map[string]any
	decode(t, resp, &wd)
	posBefore := int(wd["signup"].(map[string]any)["effective_position"].(float64))
	if posBefore != 2 {
		t.Errorf("before invite: second adjusted position = %d, want 2", posBefore)
	}

	// Invite "first" (must verify first).
	verifyAndInviteTop(t, ts, campaignID, accountKey, "first-adj@example.com")

	// After invite: second's adjusted position should be 1.
	resp = ts.do(t, http.MethodGet,
		"/api/v1/w/"+slug+"?email=second-adj@example.com", nil, nil)
	decode(t, resp, &wd)
	posAfter := int(wd["signup"].(map[string]any)["effective_position"].(float64))
	if posAfter != 1 {
		t.Errorf("after invite: second adjusted position = %d, want 1", posAfter)
	}
}

func TestIntegration_Widget_TotalSignups_ExcludesInvited(t *testing.T) {
	ts := newTestServer(t)
	accountKey, campaign, campaignID := createCampaignWithAuth(t, ts, uniqueName("Total Invites Test"))
	slug := campaign["slug"].(string)

	for _, p := range []struct{ email, ip string }{
		{"total-inv-a@example.com", "10.0.10.1"},
		{"total-inv-b@example.com", "10.0.10.2"},
	} {
		r := ts.doSignup(t, campaignID,
			map[string]any{"email": p.email}, map[string]string{"X-Real-IP": p.ip})
		if r.StatusCode != http.StatusCreated {
			t.Fatalf("signup %s: status = %d, want 201", p.email, r.StatusCode)
		}
		discard(r)
	}

	resp := ts.do(t, http.MethodGet, "/api/v1/w/"+slug, nil, nil)
	var wd map[string]any
	decode(t, resp, &wd)
	if got := int(wd["total_signups"].(float64)); got != 2 {
		t.Errorf("before invite: total_signups = %d, want 2", got)
	}

	verifyAndInviteTop(t, ts, campaignID, accountKey, "total-inv-a@example.com")

	resp = ts.do(t, http.MethodGet, "/api/v1/w/"+slug, nil, nil)
	decode(t, resp, &wd)
	if got := int(wd["total_signups"].(float64)); got != 1 {
		t.Errorf("after invite: total_signups = %d, want 1", got)
	}
}

func TestIntegration_Widget_InvitedStatus(t *testing.T) {
	ts := newTestServer(t)
	accountKey, campaign, campaignID := createCampaignWithAuth(t, ts, uniqueName("Invited Status Test"))
	slug := campaign["slug"].(string)

	resp := ts.doSignup(t, campaignID,
		map[string]any{"email": "invited-status@example.com"}, nil)
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("signup status = %d, want 201", resp.StatusCode)
	}
	discard(resp)

	verifyAndInviteTop(t, ts, campaignID, accountKey, "invited-status@example.com")

	resp = ts.do(t, http.MethodGet,
		"/api/v1/w/"+slug+"?email=invited-status@example.com", nil, nil)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("widget status = %d, want 200", resp.StatusCode)
	}
	var wd map[string]any
	decode(t, resp, &wd)

	signup := wd["signup"].(map[string]any)
	if status := signup["status"].(string); status != "invited" {
		t.Errorf("signup status = %q, want %q", status, "invited")
	}
}

func TestIntegration_Leaderboard_ExcludesInvited(t *testing.T) {
	ts := newTestServer(t)
	accountKey, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Leaderboard Invite Test"))
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	for _, p := range []struct{ email, ip string }{
		{"lb-inv-first@example.com", "10.0.11.1"},
		{"lb-inv-second@example.com", "10.0.11.2"},
	} {
		r := ts.doSignup(t, campaignID,
			map[string]any{"email": p.email}, map[string]string{"X-Real-IP": p.ip})
		if r.StatusCode != http.StatusCreated {
			t.Fatalf("signup %s: status = %d, want 201", p.email, r.StatusCode)
		}
		discard(r)
	}

	// Verify "first" so they're eligible, then invite them.
	token := ts.verificationToken(t, campaignID, "lb-inv-first@example.com")
	noRedir := &http.Client{CheckRedirect: func(_ *http.Request, _ []*http.Request) error {
		return http.ErrUseLastResponse
	}}
	req, _ := http.NewRequestWithContext(context.Background(), http.MethodGet, ts.URL+"/api/v1/verify/"+token, nil)
	verifyResp, err := noRedir.Do(req)
	if err != nil {
		t.Fatalf("verify: %v", err)
	}
	discard(verifyResp)

	r := ts.do(t, http.MethodPost, "/api/v1/campaigns/"+campaignID+"/signups/invite",
		map[string]any{"count": 1}, auth)
	if r.StatusCode != http.StatusOK {
		t.Fatalf("invite status = %d, want 200", r.StatusCode)
	}
	discard(r)

	// Leaderboard should contain only "second".
	resp := ts.do(t, http.MethodGet, "/api/v1/campaigns/"+campaignID+"/leaderboard", nil, nil)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("leaderboard status = %d, want 200", resp.StatusCode)
	}
	var lb map[string]any
	decode(t, resp, &lb)
	entries := lb["entries"].([]any)
	if len(entries) != 1 {
		t.Fatalf("leaderboard len = %d, want 1", len(entries))
	}
	if rc := entries[0].(map[string]any)["referral_code"]; rc == nil {
		t.Error("leaderboard entry has no referral_code")
	}
}

// ── Invite ───────────────────────────────────────────────────────────────────

func TestIntegration_InviteSignups_HappyPath(t *testing.T) {
	ts := newTestServer(t)

	// Create campaign and get account key.
	accountKey, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Invite Test"))
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	// Create and verify two signups so they are eligible for invites.
	for i, email := range []string{"inv1@example.com", "inv2@example.com"} {
		resp := ts.doSignup(t, campaignID,
			map[string]any{"email": email}, nil)
		discard(resp)
		if resp.StatusCode != http.StatusCreated {
			t.Fatalf("signup %d status = %d, want 201", i, resp.StatusCode)
		}

		token := ts.verificationToken(t, campaignID, email)
		noRedirect := &http.Client{CheckRedirect: func(_ *http.Request, _ []*http.Request) error {
			return http.ErrUseLastResponse
		}}
		verifyReq, _ := http.NewRequestWithContext(context.Background(), http.MethodGet, ts.URL+"/api/v1/verify/"+token, nil)
		verifyResp, err := noRedirect.Do(verifyReq)
		if err != nil {
			t.Fatalf("verify request: %v", err)
		}
		discard(verifyResp)
	}

	// Invite top 1.
	resp := ts.do(t, http.MethodPost, "/api/v1/campaigns/"+campaignID+"/signups/invite",
		map[string]any{"count": 1}, auth)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("invite status = %d, want 200", resp.StatusCode)
	}

	var inviteResp map[string]any
	decode(t, resp, &inviteResp)

	if got := int(inviteResp["invited"].(float64)); got != 1 {
		t.Errorf("invited = %d, want 1", got)
	}
	if got := int(inviteResp["total_invited"].(float64)); got != 1 {
		t.Errorf("total_invited = %d, want 1", got)
	}

	// Invite remaining — should pick up the second signup only.
	resp = ts.do(t, http.MethodPost, "/api/v1/campaigns/"+campaignID+"/signups/invite",
		map[string]any{"count": 10}, auth)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("second invite status = %d, want 200", resp.StatusCode)
	}
	decode(t, resp, &inviteResp)

	if got := int(inviteResp["invited"].(float64)); got != 1 {
		t.Errorf("second invited = %d, want 1 (only one eligible)", got)
	}
	if got := int(inviteResp["total_invited"].(float64)); got != 2 {
		t.Errorf("second total_invited = %d, want 2", got)
	}
}

func TestIntegration_InviteSignups_ZeroEligible(t *testing.T) {
	ts := newTestServer(t)

	accountKey, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Invite Zero Test"))
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	// No signups yet — invite should succeed with 0 invited.
	resp := ts.do(t, http.MethodPost, "/api/v1/campaigns/"+campaignID+"/signups/invite",
		map[string]any{"count": 5}, auth)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("status = %d, want 200", resp.StatusCode)
	}

	var inviteResp map[string]any
	decode(t, resp, &inviteResp)

	if got := int(inviteResp["invited"].(float64)); got != 0 {
		t.Errorf("invited = %d, want 0", got)
	}
}

func TestIntegration_InviteSignups_NoAuth(t *testing.T) {
	ts := newTestServer(t)

	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Invite Auth Test"))

	resp := ts.do(t, http.MethodPost, "/api/v1/campaigns/"+campaignID+"/signups/invite",
		map[string]any{"count": 1}, nil)
	defer discard(resp)

	if resp.StatusCode != http.StatusUnauthorized {
		t.Fatalf("status = %d, want 401", resp.StatusCode)
	}
}

func TestIntegration_InviteSignups_InvalidCount(t *testing.T) {
	ts := newTestServer(t)

	accountKey, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Invite Count Test"))
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	resp := ts.do(t, http.MethodPost, "/api/v1/campaigns/"+campaignID+"/signups/invite",
		map[string]any{"count": 0}, auth)
	defer discard(resp)

	if resp.StatusCode != http.StatusBadRequest {
		t.Fatalf("status = %d, want 400", resp.StatusCode)
	}
}

func TestIntegration_InviteSignups_InvitedStatusVisibleInList(t *testing.T) {
	ts := newTestServer(t)

	accountKey, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Invite Status Test"))
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	// Create and verify one signup.
	resp := ts.doSignup(t, campaignID,
		map[string]any{"email": "status@example.com"}, nil)
	discard(resp)

	token := ts.verificationToken(t, campaignID, "status@example.com")
	noRedirect := &http.Client{CheckRedirect: func(_ *http.Request, _ []*http.Request) error {
		return http.ErrUseLastResponse
	}}
	verifyReq, _ := http.NewRequestWithContext(context.Background(), http.MethodGet, ts.URL+"/api/v1/verify/"+token, nil)
	verifyResp, err := noRedirect.Do(verifyReq)
	if err != nil {
		t.Fatalf("verify: %v", err)
	}
	discard(verifyResp)

	// Invite.
	resp = ts.do(t, http.MethodPost, "/api/v1/campaigns/"+campaignID+"/signups/invite",
		map[string]any{"count": 1}, auth)
	discard(resp)

	// List signups — the invited one should have status=invited and invited_at set.
	resp = ts.do(t, http.MethodGet, "/api/v1/campaigns/"+campaignID+"/signups", nil, auth)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("list status = %d, want 200", resp.StatusCode)
	}

	var listResp map[string]any
	decode(t, resp, &listResp)

	signups := listResp["signups"].([]any)
	if len(signups) != 1 {
		t.Fatalf("got %d signups, want 1", len(signups))
	}

	sg := signups[0].(map[string]any)
	if got := sg["status"].(string); got != "invited" {
		t.Errorf("status = %q, want invited", got)
	}
	if sg["invited_at"] == nil {
		t.Error("expected invited_at to be set after invite")
	}
}
