package middleware

import "net/http"

// CORS returns a middleware that sets permissive CORS headers on every response.
// This is necessary for the embedded widget, which is served from arbitrary
// third-party origins and makes fetch() calls to the API.
//
// Only the public endpoints are expected to receive cross-origin requests, but
// applying the header globally is safe because authenticated endpoints require
// a Bearer token that cannot be forged cross-origin (browsers block it).
func CORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, Idempotency-Key, X-CSRF-Token")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}
