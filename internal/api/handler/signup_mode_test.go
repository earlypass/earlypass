package handler_test

import (
	"context"
	"io"
	"log/slog"
	"net/http"
	"net/http/httptest"
	"testing"
	"time"

	openapi_types "github.com/oapi-codegen/runtime/types"

	"github.com/jackc/pgx/v5"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/api/handler"
	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
	"github.com/google/uuid"
)

// --- Stubs ---

// stubAccountStore is an in-memory AccountStore for unit tests.
type stubAccountStore struct {
	accounts map[string]domain.Account
}

func newStubAccountStore() *stubAccountStore {
	return &stubAccountStore{accounts: make(map[string]domain.Account)}
}

func (s *stubAccountStore) GetOrCreateByEmail(_ context.Context, email string) (domain.Account, bool, error) {
	if a, ok := s.accounts[email]; ok {
		return a, false, nil
	}
	a := domain.Account{ID: uuid.New(), Email: email, CreatedAt: time.Now().UTC(), UpdatedAt: time.Now().UTC()}
	s.accounts[email] = a
	return a, true, nil
}

func (s *stubAccountStore) GetByID(_ context.Context, id uuid.UUID) (domain.Account, error) {
	for _, a := range s.accounts {
		if a.ID == id {
			return a, nil
		}
	}
	return domain.Account{}, store.ErrNotFound
}

func (s *stubAccountStore) GetByEmail(_ context.Context, email string) (domain.Account, error) {
	if a, ok := s.accounts[email]; ok {
		return a, nil
	}
	return domain.Account{}, store.ErrNotFound
}

// stubSignInTokenStore is an in-memory SignInTokenStore.
type stubSignInTokenStore struct {
	tokens map[string]domain.SignInToken
}

func newStubSignInTokenStore() *stubSignInTokenStore {
	return &stubSignInTokenStore{tokens: make(map[string]domain.SignInToken)}
}

func (s *stubSignInTokenStore) Create(_ context.Context, t domain.SignInToken) error {
	s.tokens[t.Token] = t
	return nil
}

func (s *stubSignInTokenStore) Get(_ context.Context, token string) (domain.SignInToken, error) {
	if t, ok := s.tokens[token]; ok {
		return t, nil
	}
	return domain.SignInToken{}, store.ErrNotFound
}

func (s *stubSignInTokenStore) GetBySessionToken(_ context.Context, sessionToken string) (domain.SignInToken, error) {
	for _, t := range s.tokens {
		if t.SessionToken == sessionToken {
			return t, nil
		}
	}
	return domain.SignInToken{}, store.ErrNotFound
}

func (s *stubSignInTokenStore) MarkUsed(_ context.Context, token string, at time.Time) error {
	if t, ok := s.tokens[token]; ok {
		t.UsedAt = &at
		s.tokens[token] = t
		return nil
	}
	return store.ErrNotFound
}

func (s *stubSignInTokenStore) DeleteExpired(_ context.Context) error { return nil }

// stubEmailOutbox captures queued emails.
type stubEmailOutbox struct {
	emails []domain.EmailOutbox
}

func (s *stubEmailOutbox) Create(_ context.Context, e domain.EmailOutbox) error {
	s.emails = append(s.emails, e)
	return nil
}

func (s *stubEmailOutbox) CreateWithTx(_ context.Context, _ pgx.Tx, _ domain.EmailOutbox) error {
	return nil
}

func (s *stubEmailOutbox) ListPending(_ context.Context, _ int) ([]domain.EmailOutbox, error) {
	return nil, nil
}

func (s *stubEmailOutbox) MarkSent(_ context.Context, _ uuid.UUID, _ time.Time) error {
	return nil
}

func (s *stubEmailOutbox) MarkFailed(_ context.Context, _ uuid.UUID, _ string) error {
	return nil
}

func (s *stubEmailOutbox) UpdateRetry(_ context.Context, _ uuid.UUID, _ int, _ string, _ time.Time) error {
	return nil
}

// stubAccountAPIKeyStore is an in-memory AccountAPIKeyStore.
type stubAccountAPIKeyStore struct {
	keys []domain.AccountAPIKey
}

func (s *stubAccountAPIKeyStore) Create(_ context.Context, k domain.AccountAPIKey) error {
	s.keys = append(s.keys, k)
	return nil
}

func (s *stubAccountAPIKeyStore) GetByRawKey(_ context.Context, _ string) (domain.AccountAPIKey, error) {
	return domain.AccountAPIKey{}, store.ErrNotFound
}

func (s *stubAccountAPIKeyStore) ListByAccount(_ context.Context, _ uuid.UUID) ([]domain.AccountAPIKey, error) {
	return nil, nil
}

func (s *stubAccountAPIKeyStore) Revoke(_ context.Context, _ uuid.UUID) error { return nil }

func (s *stubAccountAPIKeyStore) TouchLastUsed(_ context.Context, _ uuid.UUID, _ time.Time) error {
	return nil
}

// stubRateLimiter always allows requests.
type stubRateLimiter struct{}

func (s stubRateLimiter) Incr(_ context.Context, _ string, _ time.Duration) (int64, error) {
	return 1, nil
}

// --- Helpers ---

func newSignupModeServer(accounts *stubAccountStore, signInTokens *stubSignInTokenStore, outbox *stubEmailOutbox, closed bool) *handler.Server {
	logger := slog.New(slog.NewTextHandler(io.Discard, nil))
	return handler.NewServer(
		nil,                       // campaigns
		nil,                       // signups
		nil,                       // webhooks
		accounts,                  // accounts
		signInTokens,                // signInTokens
		&stubAccountAPIKeyStore{}, // accountAPIKeys
		nil,                       // oauthStore
		nil,                       // fraudLimiter
		nil,                       // csrfTokenStore
		stubRateLimiter{},         // signInRateLimiter
		outbox,                    // emailOutbox
		stubPinger{},              // dbPinger
		stubPinger{},              // redisPinger
		nil,                       // metrics
		"http://localhost:3000",   // baseURL
		nil,                       // trustedProxies
		false,                     // devMode
		closed,                  // signupModeClosed
		logger,
	)
}

// --- Tests: RequestSignInCode ---

func TestRequestSignInCode_OpenMode_SendsEmail(t *testing.T) {
	t.Parallel()

	accounts := newStubAccountStore()
	signInTokens := newStubSignInTokenStore()
	outbox := &stubEmailOutbox{}
	srv := newSignupModeServer(accounts, signInTokens, outbox, false)

	resp, err := srv.RequestSignInCode(context.Background(), generated.RequestSignInCodeRequestObject{
		Body: &generated.RequestSignInCodeJSONRequestBody{
			Email: openapi_types.Email("new@example.com"),
		},
	})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	rec := httptest.NewRecorder()
	if visitErr := resp.VisitRequestSignInCodeResponse(rec); visitErr != nil {
		t.Fatalf("visit error: %v", visitErr)
	}

	if rec.Code != http.StatusAccepted {
		t.Fatalf("expected 202, got %d", rec.Code)
	}

	// Email should be sent even for unknown accounts in open mode.
	if len(outbox.emails) != 1 {
		t.Fatalf("expected 1 email queued, got %d", len(outbox.emails))
	}
	if outbox.emails[0].ToAddr != "new@example.com" {
		t.Fatalf("expected email to new@example.com, got %q", outbox.emails[0].ToAddr)
	}
}

func TestRequestSignInCode_ClosedMode_RejectsUnknownEmail(t *testing.T) {
	t.Parallel()

	accounts := newStubAccountStore()
	signInTokens := newStubSignInTokenStore()
	outbox := &stubEmailOutbox{}
	srv := newSignupModeServer(accounts, signInTokens, outbox, true)

	resp, err := srv.RequestSignInCode(context.Background(), generated.RequestSignInCodeRequestObject{
		Body: &generated.RequestSignInCodeJSONRequestBody{
			Email: openapi_types.Email("unknown@example.com"),
		},
	})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	rec := httptest.NewRecorder()
	if visitErr := resp.VisitRequestSignInCodeResponse(rec); visitErr != nil {
		t.Fatalf("visit error: %v", visitErr)
	}

	// Should still return 202 (no user enumeration).
	if rec.Code != http.StatusAccepted {
		t.Fatalf("expected 202, got %d", rec.Code)
	}

	// But no email should be sent.
	if len(outbox.emails) != 0 {
		t.Fatalf("expected 0 emails queued in closed mode for unknown email, got %d", len(outbox.emails))
	}

	// And no sign-in token should be created.
	if len(signInTokens.tokens) != 0 {
		t.Fatalf("expected 0 sign-in tokens in closed mode for unknown email, got %d", len(signInTokens.tokens))
	}
}

func TestRequestSignInCode_ClosedMode_SendsForKnownEmail(t *testing.T) {
	t.Parallel()

	accounts := newStubAccountStore()
	// Pre-create the account.
	accounts.accounts["known@example.com"] = domain.Account{
		ID: uuid.New(), Email: "known@example.com",
		CreatedAt: time.Now().UTC(), UpdatedAt: time.Now().UTC(),
	}
	signInTokens := newStubSignInTokenStore()
	outbox := &stubEmailOutbox{}
	srv := newSignupModeServer(accounts, signInTokens, outbox, true)

	resp, err := srv.RequestSignInCode(context.Background(), generated.RequestSignInCodeRequestObject{
		Body: &generated.RequestSignInCodeJSONRequestBody{
			Email: openapi_types.Email("known@example.com"),
		},
	})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	rec := httptest.NewRecorder()
	if visitErr := resp.VisitRequestSignInCodeResponse(rec); visitErr != nil {
		t.Fatalf("visit error: %v", visitErr)
	}

	if rec.Code != http.StatusAccepted {
		t.Fatalf("expected 202, got %d", rec.Code)
	}

	// Email should be sent for known accounts.
	if len(outbox.emails) != 1 {
		t.Fatalf("expected 1 email queued, got %d", len(outbox.emails))
	}

	// Magic link token should be created.
	if len(signInTokens.tokens) != 1 {
		t.Fatalf("expected 1 sign-in token, got %d", len(signInTokens.tokens))
	}
}

// --- Tests: VerifySignInCode ---

func TestVerifySignInCode_OpenMode_CreatesAccount(t *testing.T) {
	t.Parallel()

	accounts := newStubAccountStore()
	signInTokens := newStubSignInTokenStore()

	// Create a valid token.
	tok, _ := domain.NewSignInToken("new@example.com", nil, 15*time.Minute)
	signInTokens.tokens[tok.Token] = tok

	srv := newSignupModeServer(accounts, signInTokens, &stubEmailOutbox{}, false)

	resp, err := srv.VerifySignInCode(context.Background(), generated.VerifySignInCodeRequestObject{
		Body: &generated.SignInCodeVerifyRequest{
			SessionToken: tok.SessionToken,
			Code:         tok.Code,
		},
	})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	rec := httptest.NewRecorder()
	if visitErr := resp.VisitVerifySignInCodeResponse(rec); visitErr != nil {
		t.Fatalf("visit error: %v", visitErr)
	}

	// Should return 200 with account + API key.
	if rec.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d; body: %s", rec.Code, rec.Body.String())
	}

	// Account should have been created.
	if _, err := accounts.GetByEmail(context.Background(), "new@example.com"); err != nil {
		t.Fatalf("account should have been created: %v", err)
	}
}

func TestVerifySignInCode_ClosedMode_RejectsUnknownAccount(t *testing.T) {
	t.Parallel()

	accounts := newStubAccountStore()
	signInTokens := newStubSignInTokenStore()

	// Create a valid token for an email that has no account.
	tok, _ := domain.NewSignInToken("unknown@example.com", nil, 15*time.Minute)
	signInTokens.tokens[tok.Token] = tok

	srv := newSignupModeServer(accounts, signInTokens, &stubEmailOutbox{}, true)

	resp, err := srv.VerifySignInCode(context.Background(), generated.VerifySignInCodeRequestObject{
		Body: &generated.SignInCodeVerifyRequest{
			SessionToken: tok.SessionToken,
			Code:         tok.Code,
		},
	})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	rec := httptest.NewRecorder()
	if visitErr := resp.VisitVerifySignInCodeResponse(rec); visitErr != nil {
		t.Fatalf("visit error: %v", visitErr)
	}

	// Should return 400 — account doesn't exist in closed mode.
	if rec.Code != http.StatusBadRequest {
		t.Fatalf("expected 400, got %d; body: %s", rec.Code, rec.Body.String())
	}
}

func TestVerifySignInCode_ClosedMode_AcceptsExistingAccount(t *testing.T) {
	t.Parallel()

	accounts := newStubAccountStore()
	accounts.accounts["existing@example.com"] = domain.Account{
		ID: uuid.New(), Email: "existing@example.com",
		CreatedAt: time.Now().UTC(), UpdatedAt: time.Now().UTC(),
	}
	signInTokens := newStubSignInTokenStore()

	tok, _ := domain.NewSignInToken("existing@example.com", nil, 15*time.Minute)
	signInTokens.tokens[tok.Token] = tok

	srv := newSignupModeServer(accounts, signInTokens, &stubEmailOutbox{}, true)

	resp, err := srv.VerifySignInCode(context.Background(), generated.VerifySignInCodeRequestObject{
		Body: &generated.SignInCodeVerifyRequest{
			SessionToken: tok.SessionToken,
			Code:         tok.Code,
		},
	})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	rec := httptest.NewRecorder()
	if visitErr := resp.VisitVerifySignInCodeResponse(rec); visitErr != nil {
		t.Fatalf("visit error: %v", visitErr)
	}

	// Should succeed — account exists.
	if rec.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d; body: %s", rec.Code, rec.Body.String())
	}
}
