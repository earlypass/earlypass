package middleware

import (
	"context"
	"net/http"
)

type requestContextKey struct{}

// InjectRequest is a middleware that stores the *http.Request in the context,
// making it accessible to strict handlers via RequestFromContext.
func InjectRequest(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx := context.WithValue(r.Context(), requestContextKey{}, r)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

// RequestFromContext retrieves the *http.Request stored by InjectRequest.
// Returns nil if not present.
func RequestFromContext(ctx context.Context) *http.Request {
	r, _ := ctx.Value(requestContextKey{}).(*http.Request)
	return r
}
