package fraud_test

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/fraud"
)

// stubLimiter is a simple in-memory stub for IPRateLimiter.
type stubLimiter struct {
	counts map[string]int64
	err    error
}

func newStubLimiter() *stubLimiter {
	return &stubLimiter{counts: make(map[string]int64)}
}

func (s *stubLimiter) Incr(_ context.Context, key string, _ time.Duration) (int64, error) {
	if s.err != nil {
		return 0, s.err
	}
	s.counts[key]++
	return s.counts[key], nil
}

func TestCheckIPSignupRate(t *testing.T) {
	t.Parallel()

	t.Run("allows first five signups", func(t *testing.T) {
		t.Parallel()
		campaignID := uuid.New()
		limiter := newStubLimiter()
		for i := range 5 {
			blocked, err := fraud.CheckIPSignupRate(context.Background(), limiter, "1.2.3.4", campaignID)
			if err != nil {
				t.Fatalf("attempt %d: unexpected error: %v", i+1, err)
			}
			if blocked {
				t.Errorf("attempt %d: expected not blocked, got blocked", i+1)
			}
		}
	})

	t.Run("blocks sixth signup from same IP", func(t *testing.T) {
		t.Parallel()
		campaignID := uuid.New()
		limiter := newStubLimiter()
		for range 5 {
			_, _ = fraud.CheckIPSignupRate(context.Background(), limiter, "1.2.3.4", campaignID)
		}
		blocked, err := fraud.CheckIPSignupRate(context.Background(), limiter, "1.2.3.4", campaignID)
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if !blocked {
			t.Error("expected blocked on sixth attempt, got not blocked")
		}
	})

	t.Run("different IPs have independent counters", func(t *testing.T) {
		t.Parallel()
		campaignID := uuid.New()
		limiter := newStubLimiter()
		// Exhaust IP A.
		for range 5 {
			_, _ = fraud.CheckIPSignupRate(context.Background(), limiter, "1.1.1.1", campaignID)
		}
		// IP B should still be allowed.
		blocked, err := fraud.CheckIPSignupRate(context.Background(), limiter, "2.2.2.2", campaignID)
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if blocked {
			t.Error("expected IP B to be allowed, got blocked")
		}
	})

	t.Run("redis error is non-fatal and allows request", func(t *testing.T) {
		t.Parallel()
		campaignID := uuid.New()
		limiter := &stubLimiter{counts: make(map[string]int64), err: errors.New("redis down")}
		blocked, err := fraud.CheckIPSignupRate(context.Background(), limiter, "1.2.3.4", campaignID)
		if err == nil {
			t.Fatal("expected error, got nil")
		}
		if blocked {
			t.Error("expected not blocked on redis error, got blocked")
		}
	})
}
