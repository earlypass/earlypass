package fraud

import (
	"context"
	"fmt"
	"time"

	"github.com/google/uuid"
)


const (
	// maxSignupsPerIPPerCampaignPerHour is the maximum number of signups allowed
	// from a single IP for a given campaign within one hour.
	maxSignupsPerIPPerCampaignPerHour = 5
	signupRateTTL                     = time.Hour
)

// IPRateLimiter is the interface for the Redis counter used in fraud rate limiting.
type IPRateLimiter interface {
	Incr(ctx context.Context, key string, ttl time.Duration) (int64, error)
}

// CheckIPSignupRate increments the signup counter for the given IP+campaign pair
// and reports whether the request should be blocked.
// Returns true (blocked) when the counter exceeds maxSignupsPerIPPerCampaignPerHour.
func CheckIPSignupRate(ctx context.Context, limiter IPRateLimiter, ip string, campaignID uuid.UUID) (bool, error) {
	key := fmt.Sprintf("fraud:signup:%s:%s", campaignID.String(), ip)
	count, err := limiter.Incr(ctx, key, signupRateTTL)
	if err != nil {
		// Redis errors are non-fatal — allow the request through.
		return false, fmt.Errorf("fraud IP rate check: %w", err)
	}
	return count > maxSignupsPerIPPerCampaignPerHour, nil
}
