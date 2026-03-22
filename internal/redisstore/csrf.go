package redisstore

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"errors"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/redis/go-redis/v9"
)

const csrfTokenTTL = 5 * time.Minute

// csrfKey returns the Redis key for a CSRF token.
func csrfKey(campaignID uuid.UUID, token string) string {
	return fmt.Sprintf("csrf:%s:%s", campaignID.String(), token)
}

// CreateCSRFToken generates a new single-use CSRF token for the given campaign,
// stores it in Redis with a 5-minute TTL, and returns the token string.
func (c *Client) CreateCSRFToken(ctx context.Context, campaignID uuid.UUID) (string, error) {
	b := make([]byte, 32)
	if _, err := rand.Read(b); err != nil {
		return "", fmt.Errorf("generating CSRF token: %w", err)
	}
	token := hex.EncodeToString(b)

	if err := c.rdb.Set(ctx, csrfKey(campaignID, token), "1", csrfTokenTTL).Err(); err != nil {
		return "", fmt.Errorf("storing CSRF token: %w", err)
	}
	return token, nil
}

// ValidateAndConsumeCSRFToken checks whether the given token exists for the campaign
// and atomically deletes it (single-use). Returns true if the token was valid.
func (c *Client) ValidateAndConsumeCSRFToken(ctx context.Context, campaignID uuid.UUID, token string) (bool, error) {
	if token == "" {
		return false, nil
	}
	key := csrfKey(campaignID, token)

	// GETDEL atomically retrieves and removes the key; returns redis.Nil if absent.
	val, err := c.rdb.GetDel(ctx, key).Result()
	if errors.Is(err, redis.Nil) {
		return false, nil
	}
	if err != nil {
		return false, fmt.Errorf("consuming CSRF token: %w", err)
	}
	return val == "1", nil
}
