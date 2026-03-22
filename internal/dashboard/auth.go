// Package dashboard provides the HTTP handlers, middleware, and static file
// server for the campaign admin dashboard.
package dashboard

import (
	"context"
	"crypto/rand"
	"errors"
	"fmt"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"github.com/google/uuid"
)

const (
	cookieName = "ep_auth"
	tokenTTL   = 7 * 24 * time.Hour // 7 days
)

// contextKey is the unexported type used to store values in request context.
type contextKey int

const accountIDKey contextKey = iota

// Claims holds the dashboard JWT claims.
type Claims struct {
	AccountID uuid.UUID `json:"account_id"`
	jwt.RegisteredClaims
}

// IssueToken signs a new dashboard JWT for the given account.
func IssueToken(accountID uuid.UUID, secret []byte) (string, error) {
	claims := Claims{
		AccountID: accountID,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(tokenTTL)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &claims)
	signed, err := token.SignedString(secret)
	if err != nil {
		return "", fmt.Errorf("signing dashboard token: %w", err)
	}
	return signed, nil
}

// ParseToken validates a signed dashboard JWT and returns its claims.
func ParseToken(tokenStr string, secret []byte) (Claims, error) {
	var claims Claims
	token, err := jwt.ParseWithClaims(tokenStr, &claims, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", t.Header["alg"])
		}
		return secret, nil
	})
	if err != nil {
		return Claims{}, fmt.Errorf("parsing dashboard token: %w", err)
	}
	if !token.Valid {
		return Claims{}, errors.New("invalid dashboard token")
	}
	return claims, nil
}

// SetCookie writes the dashboard auth cookie to the response.
func SetCookie(w http.ResponseWriter, tokenStr string, secure bool) {
	http.SetCookie(w, &http.Cookie{
		Name:     cookieName,
		Value:    tokenStr,
		Path:     "/",
		MaxAge:   int(tokenTTL.Seconds()),
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
		Secure:   secure,
	})
}

// ClearCookie removes the dashboard auth cookie.
func ClearCookie(w http.ResponseWriter) {
	http.SetCookie(w, &http.Cookie{
		Name:     cookieName,
		Value:    "",
		Path:     "/",
		MaxAge:   -1,
		HttpOnly: true,
	})
}

// extractToken reads the dashboard auth cookie from the request.
func extractToken(r *http.Request) (string, error) {
	cookie, err := r.Cookie(cookieName)
	if err != nil {
		return "", errors.New("no dashboard auth cookie")
	}
	return cookie.Value, nil
}

// AccountIDFromContext returns the authenticated account ID stored in ctx.
func AccountIDFromContext(ctx context.Context) (uuid.UUID, bool) {
	id, ok := ctx.Value(accountIDKey).(uuid.UUID)
	return id, ok
}

// withAccountID attaches the account ID to ctx.
func withAccountID(ctx context.Context, id uuid.UUID) context.Context {
	return context.WithValue(ctx, accountIDKey, id)
}

// GenerateJWTSecret creates a cryptographically random 32-byte secret.
func GenerateJWTSecret() ([]byte, error) {
	b := make([]byte, 32)
	if _, err := rand.Read(b); err != nil {
		return nil, fmt.Errorf("generating JWT secret: %w", err)
	}
	return b, nil
}
