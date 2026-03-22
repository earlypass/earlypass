// Package redisstore provides Redis-backed implementations used across EarlyPass.
package redisstore

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/redis/go-redis/v9"
)

// Client wraps a go-redis client, exposing simple get/set operations used by
// the idempotency middleware and fraud rate limiter.
type Client struct {
	rdb *redis.Client
}

// New creates a new Client from the given redis.Client.
func New(rdb *redis.Client) *Client {
	return &Client{rdb: rdb}
}

// NewFromURL creates a new Client from a Redis URL string.
func NewFromURL(url string) (*Client, error) {
	opts, err := redis.ParseURL(url)
	if err != nil {
		return nil, fmt.Errorf("parsing redis URL: %w", err)
	}
	return New(redis.NewClient(opts)), nil
}

// Redis returns the underlying redis.Client (needed for redis_rate).
func (c *Client) Redis() *redis.Client {
	return c.rdb
}

// Get retrieves a string value by key. Returns ("", nil) when the key is absent.
func (c *Client) Get(ctx context.Context, key string) (string, error) {
	val, err := c.rdb.Get(ctx, key).Result()
	if errors.Is(err, redis.Nil) {
		return "", nil
	}
	if err != nil {
		return "", fmt.Errorf("redis GET %q: %w", key, err)
	}
	return val, nil
}

// Set stores a string value with a TTL.
func (c *Client) Set(ctx context.Context, key, value string, ttl time.Duration) error {
	if err := c.rdb.Set(ctx, key, value, ttl).Err(); err != nil {
		return fmt.Errorf("redis SET %q: %w", key, err)
	}
	return nil
}

// Incr increments an integer counter and sets a TTL if it is the first increment.
// Returns the new value.
func (c *Client) Incr(ctx context.Context, key string, ttl time.Duration) (int64, error) {
	pipe := c.rdb.Pipeline()
	incrCmd := pipe.Incr(ctx, key)
	pipe.Expire(ctx, key, ttl)
	if _, err := pipe.Exec(ctx); err != nil {
		return 0, fmt.Errorf("redis INCR pipeline %q: %w", key, err)
	}
	return incrCmd.Val(), nil
}

// Del removes one or more keys. Missing keys are silently ignored.
func (c *Client) Del(ctx context.Context, keys ...string) error {
	if len(keys) == 0 {
		return nil
	}
	if err := c.rdb.Del(ctx, keys...).Err(); err != nil {
		return fmt.Errorf("redis DEL: %w", err)
	}
	return nil
}

