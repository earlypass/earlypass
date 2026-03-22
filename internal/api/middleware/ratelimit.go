package middleware

import (
	"fmt"
	"net"
	"net/http"
	"strings"

	"github.com/earlypass/earlypass/internal/api/problem"
	"github.com/go-redis/redis_rate/v10"
)

// RateLimitConfig specifies the rate limit for a given middleware instance.
type RateLimitConfig struct {
	// RequestsPerMinute is the token-bucket rate (refill per minute).
	RequestsPerMinute int
	// TrustedProxies is a list of CIDR ranges allowed to set X-Real-IP / X-Forwarded-For.
	// If nil/empty, forwarded headers are ignored.
	TrustedProxies []string
}

// RateLimit returns a middleware that applies a per-IP token-bucket rate limit.
// limiter is a redis_rate.Limiter backed by Redis.
// key is a label used to namespace the Redis keys (e.g. "signup", "read", "api").
func RateLimit(limiter *redis_rate.Limiter, cfg RateLimitConfig, key string) func(http.Handler) http.Handler {
	limit := redis_rate.PerMinute(cfg.RequestsPerMinute)
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			ip := RealIP(r, cfg.TrustedProxies)
			redisKey := fmt.Sprintf("rl:%s:%s", key, ip)

			res, err := limiter.Allow(r.Context(), redisKey, limit)
			if err != nil {
				// Redis errors are non-fatal — degrade gracefully.
				next.ServeHTTP(w, r)
				return
			}

			w.Header().Set("X-RateLimit-Limit", fmt.Sprint(cfg.RequestsPerMinute))
			w.Header().Set("X-RateLimit-Remaining", fmt.Sprint(res.Remaining))

			if res.Allowed == 0 {
				w.Header().Set("Retry-After", fmt.Sprint(int(res.ResetAfter.Seconds())+1))
				problem.Write(w, http.StatusTooManyRequests,
					"rate-limit-exceeded",
					"Rate limit exceeded",
					"Too many requests — please slow down",
				)
				return
			}

			next.ServeHTTP(w, r)
		})
	}
}

// RealIP extracts the real client IP. Forwarded headers are only trusted
// when RemoteAddr is within a trusted proxy CIDR. Exported so other packages can use it.
func RealIP(r *http.Request, trustedProxies []string) string {
	remoteIP, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		remoteIP = r.RemoteAddr
	}
	if !isTrustedProxy(remoteIP, trustedProxies) {
		return remoteIP
	}
	if ip := r.Header.Get("X-Real-IP"); net.ParseIP(strings.TrimSpace(ip)) != nil {
		return strings.TrimSpace(ip)
	}
	if fwd := r.Header.Get("X-Forwarded-For"); fwd != "" {
		first := strings.TrimSpace(strings.SplitN(fwd, ",", 2)[0])
		if net.ParseIP(first) != nil {
			return first
		}
	}
	return remoteIP
}

// IsTrustedProxy reports whether the request's remote address is within one of the
// trusted proxy CIDRs. Exported so other packages (e.g. handler) can reuse the check.
func IsTrustedProxy(r *http.Request, cidrs []string) bool {
	remoteIP, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		remoteIP = r.RemoteAddr
	}
	return isTrustedProxy(remoteIP, cidrs)
}

func isTrustedProxy(ip string, cidrs []string) bool {
	parsed := net.ParseIP(ip)
	if parsed == nil {
		return false
	}
	for _, cidr := range cidrs {
		_, network, err := net.ParseCIDR(cidr)
		if err != nil {
			continue
		}
		if network.Contains(parsed) {
			return true
		}
	}
	return false
}
