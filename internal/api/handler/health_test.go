package handler_test

import (
	"context"
	"encoding/json"
	"errors"
	"io"
	"log/slog"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/api/handler"
)

// stubPinger is a test double for DBPinger / RedisPinger.
type stubPinger struct{ err error }

func (s stubPinger) Ping(_ context.Context) error { return s.err }

func newHealthServer(dbErr, redisErr error) *handler.Server {
	logger := slog.New(slog.NewTextHandler(io.Discard, nil))
	return handler.NewServer(
		nil, nil, nil, nil, nil, nil, nil,
		nil, nil, nil, nil,
		stubPinger{dbErr},
		stubPinger{redisErr},
		nil, // metrics — nil is safe; health handler does not record metrics
		"", nil, false, false, logger,
	)
}

func TestGetHealth_AllOK(t *testing.T) {
	t.Parallel()

	srv := newHealthServer(nil, nil)
	resp, err := srv.GetHealth(context.Background(), generated.GetHealthRequestObject{})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	rec := httptest.NewRecorder()
	if visitErr := resp.VisitGetHealthResponse(rec); visitErr != nil {
		t.Fatalf("visit error: %v", visitErr)
	}

	if rec.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d", rec.Code)
	}

	var body map[string]any
	if err := json.NewDecoder(rec.Body).Decode(&body); err != nil {
		t.Fatalf("decode: %v", err)
	}
	if body["status"] != "ok" {
		t.Fatalf("expected status=ok, got %q", body["status"])
	}
	components, ok := body["components"].(map[string]any)
	if !ok {
		t.Fatalf("expected components object, got %T", body["components"])
	}
	if components["database"] != "ok" {
		t.Fatalf("expected database=ok, got %q", components["database"])
	}
	if components["redis"] != "ok" {
		t.Fatalf("expected redis=ok, got %q", components["redis"])
	}
}

func TestGetHealth_DBError(t *testing.T) {
	t.Parallel()

	srv := newHealthServer(errors.New("connection refused"), nil)
	resp, err := srv.GetHealth(context.Background(), generated.GetHealthRequestObject{})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	rec := httptest.NewRecorder()
	_ = resp.VisitGetHealthResponse(rec)

	var body map[string]any
	_ = json.NewDecoder(rec.Body).Decode(&body)

	if body["status"] != "degraded" {
		t.Fatalf("expected status=degraded, got %q", body["status"])
	}
	components := body["components"].(map[string]any)
	if components["database"] != "error" {
		t.Fatalf("expected database=error, got %q", components["database"])
	}
}
