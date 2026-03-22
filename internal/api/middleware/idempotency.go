package middleware

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/earlypass/earlypass/internal/api/problem"
)

const idempotencyTTL = 24 * time.Hour

// IdempotencyStore is the Redis interface used for storing idempotency entries.
type IdempotencyStore interface {
	Get(ctx context.Context, key string) (string, error)
	Set(ctx context.Context, key, value string, ttl time.Duration) error
}

// cachedResponse holds a serialised HTTP response for idempotency replay.
type cachedResponse struct {
	Status  int               `json:"status"`
	Headers map[string]string `json:"headers"`
	Body    []byte            `json:"body"`
}

// Idempotency is a middleware that honours the Idempotency-Key header on
// POST and PATCH requests. Duplicate requests (same key, method, path) within
// 24 hours receive the cached original response.
//
// store must implement simple get/set semantics backed by Redis (or any KV).
func Idempotency(store IdempotencyStore) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			// Only POST and PATCH qualify for idempotency handling.
			if r.Method != http.MethodPost && r.Method != http.MethodPatch {
				next.ServeHTTP(w, r)
				return
			}

			idempKey := strings.TrimSpace(r.Header.Get("Idempotency-Key"))
			if idempKey == "" {
				next.ServeHTTP(w, r)
				return
			}

			// Namespace: method + path + idempotency-key
			redisKey := fmt.Sprintf("idem:%s:%s:%s", r.Method, r.URL.Path, idempKey)

			// --- Check cache ---
			cached, err := store.Get(r.Context(), redisKey)
			if err == nil && cached != "" {
				var cr cachedResponse
				if jsonErr := json.Unmarshal([]byte(cached), &cr); jsonErr == nil {
					// Replay cached response.
					for k, v := range cr.Headers {
						w.Header().Set(k, v)
					}
					w.Header().Set("Idempotency-Replayed", "true")
					w.WriteHeader(cr.Status)
					_, _ = w.Write(cr.Body)
					return
				}
			}

			// --- Execute and capture response ---
			rec := newResponseRecorder(w)
			next.ServeHTTP(rec, r)

			// Only cache successful (2xx) responses.
			if rec.status >= 200 && rec.status < 300 {
				cr := cachedResponse{
					Status:  rec.status,
					Headers: captureHeaders(rec.Header()),
					Body:    rec.body.Bytes(),
				}
				data, jsonErr := json.Marshal(cr)
				if jsonErr == nil {
					_ = store.Set(r.Context(), redisKey, string(data), idempotencyTTL)
				}
			}
		})
	}
}

// responseRecorder wraps http.ResponseWriter to capture status + body.
type responseRecorder struct {
	http.ResponseWriter
	status int
	body   bytes.Buffer
}

func newResponseRecorder(w http.ResponseWriter) *responseRecorder {
	return &responseRecorder{ResponseWriter: w, status: http.StatusOK}
}

func (r *responseRecorder) WriteHeader(status int) {
	r.status = status
	r.ResponseWriter.WriteHeader(status)
}

func (r *responseRecorder) Write(b []byte) (int, error) {
	r.body.Write(b) //nolint:errcheck // best-effort capture; bytes.Buffer.Write never returns an error
	n, err := r.ResponseWriter.Write(b)
	if err != nil {
		return n, fmt.Errorf("writing response: %w", err)
	}
	return n, nil
}

// captureHeaders copies the relevant response headers for caching.
func captureHeaders(h http.Header) map[string]string {
	out := make(map[string]string)
	for _, key := range []string{"Content-Type", "Location"} {
		if v := h.Get(key); v != "" {
			out[key] = v
		}
	}
	return out
}

// idempotencyProblemWriter is used to write errors without importing from handler.
var _ = problem.Write // ensure import is used
