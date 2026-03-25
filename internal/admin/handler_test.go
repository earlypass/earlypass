package admin_test

import (
	"context"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/earlypass/earlypass/internal/admin"
	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
	"github.com/google/uuid"
	"io"
	"log/slog"
)

// stubAccountStore is a minimal in-memory AccountStore for testing.
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
	a := domain.Account{
		ID:        uuid.New(),
		Email:     email,
		CreatedAt: time.Now().UTC(),
		UpdatedAt: time.Now().UTC(),
	}
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

func newTestRouter(apiKey string) (http.Handler, *stubAccountStore) {
	accounts := newStubAccountStore()
	logger := slog.New(slog.NewTextHandler(io.Discard, nil))
	h := admin.NewHandler(accounts, logger)
	router := admin.NewRouter(apiKey, h)
	return router, accounts
}

// --- Bearer auth middleware tests ---

func TestBearerAuth_MissingToken(t *testing.T) {
	t.Parallel()
	router, _ := newTestRouter("secret123")

	req := httptest.NewRequest(http.MethodPost, "/admin/v1/accounts", strings.NewReader(`{"email":"a@b.com"}`))
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusUnauthorized {
		t.Fatalf("expected 401, got %d", rec.Code)
	}
}

func TestBearerAuth_WrongToken(t *testing.T) {
	t.Parallel()
	router, _ := newTestRouter("secret123")

	req := httptest.NewRequest(http.MethodPost, "/admin/v1/accounts", strings.NewReader(`{"email":"a@b.com"}`))
	req.Header.Set("Authorization", "Bearer wrong-key")
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusUnauthorized {
		t.Fatalf("expected 401, got %d", rec.Code)
	}
}

func TestBearerAuth_CorrectToken(t *testing.T) {
	t.Parallel()
	router, _ := newTestRouter("secret123")

	req := httptest.NewRequest(http.MethodPost, "/admin/v1/accounts", strings.NewReader(`{"email":"user@example.com"}`))
	req.Header.Set("Authorization", "Bearer secret123")
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusCreated {
		t.Fatalf("expected 201, got %d; body: %s", rec.Code, rec.Body.String())
	}
}

// --- CreateAccount tests ---

func TestCreateAccount_Success(t *testing.T) {
	t.Parallel()
	router, _ := newTestRouter("key")

	req := httptest.NewRequest(http.MethodPost, "/admin/v1/accounts", strings.NewReader(`{"email":"new@example.com"}`))
	req.Header.Set("Authorization", "Bearer key")
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusCreated {
		t.Fatalf("expected 201, got %d; body: %s", rec.Code, rec.Body.String())
	}

	var resp map[string]any
	if err := json.NewDecoder(rec.Body).Decode(&resp); err != nil {
		t.Fatalf("decode: %v", err)
	}
	if resp["email"] != "new@example.com" {
		t.Fatalf("expected email=new@example.com, got %v", resp["email"])
	}
	if resp["created"] != true {
		t.Fatalf("expected created=true, got %v", resp["created"])
	}
	if resp["id"] == "" {
		t.Fatal("expected non-empty id")
	}
}

func TestCreateAccount_Idempotent(t *testing.T) {
	t.Parallel()
	router, _ := newTestRouter("key")

	body := `{"email":"repeat@example.com"}`

	// First call — creates.
	req := httptest.NewRequest(http.MethodPost, "/admin/v1/accounts", strings.NewReader(body))
	req.Header.Set("Authorization", "Bearer key")
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusCreated {
		t.Fatalf("first call: expected 201, got %d", rec.Code)
	}

	var first map[string]any
	_ = json.NewDecoder(rec.Body).Decode(&first)

	// Second call — returns existing.
	req2 := httptest.NewRequest(http.MethodPost, "/admin/v1/accounts", strings.NewReader(body))
	req2.Header.Set("Authorization", "Bearer key")
	req2.Header.Set("Content-Type", "application/json")
	rec2 := httptest.NewRecorder()
	router.ServeHTTP(rec2, req2)

	if rec2.Code != http.StatusOK {
		t.Fatalf("second call: expected 200, got %d", rec2.Code)
	}

	var second map[string]any
	_ = json.NewDecoder(rec2.Body).Decode(&second)

	if second["created"] != false {
		t.Fatalf("expected created=false on second call, got %v", second["created"])
	}
	if second["id"] != first["id"] {
		t.Fatalf("expected same ID on repeat, got %v vs %v", second["id"], first["id"])
	}
}

func TestCreateAccount_InvalidEmail(t *testing.T) {
	t.Parallel()
	router, _ := newTestRouter("key")

	req := httptest.NewRequest(http.MethodPost, "/admin/v1/accounts", strings.NewReader(`{"email":"not-an-email"}`))
	req.Header.Set("Authorization", "Bearer key")
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusBadRequest {
		t.Fatalf("expected 400, got %d; body: %s", rec.Code, rec.Body.String())
	}
}

func TestCreateAccount_InvalidJSON(t *testing.T) {
	t.Parallel()
	router, _ := newTestRouter("key")

	req := httptest.NewRequest(http.MethodPost, "/admin/v1/accounts", strings.NewReader(`not json`))
	req.Header.Set("Authorization", "Bearer key")
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusBadRequest {
		t.Fatalf("expected 400, got %d; body: %s", rec.Code, rec.Body.String())
	}
}

func TestCreateAccount_EmptyEmail(t *testing.T) {
	t.Parallel()
	router, _ := newTestRouter("key")

	req := httptest.NewRequest(http.MethodPost, "/admin/v1/accounts", strings.NewReader(`{"email":""}`))
	req.Header.Set("Authorization", "Bearer key")
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusBadRequest {
		t.Fatalf("expected 400, got %d; body: %s", rec.Code, rec.Body.String())
	}
}

// --- Healthz test ---

func TestHealthz(t *testing.T) {
	t.Parallel()
	router, _ := newTestRouter("key")

	req := httptest.NewRequest(http.MethodGet, "/admin/v1/healthz", nil)
	req.Header.Set("Authorization", "Bearer key")
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d", rec.Code)
	}
}
