package config_test

import (
	"testing"

	"github.com/earlypass/earlypass/internal/config"
)

// Note: t.Setenv mutates global env state, so these subtests must NOT use
// t.Parallel() — Go 1.26 enforces this at runtime.
func TestLoad_RequiredFields(t *testing.T) {
	t.Run("fails without DATABASE_URL", func(t *testing.T) {
		t.Setenv("DATABASE_URL", "")
		t.Setenv("REDIS_URL", "redis://localhost:6379")

		_, err := config.Load()
		if err == nil {
			t.Fatal("expected error when DATABASE_URL is missing")
		}
	})

	t.Run("fails without REDIS_URL", func(t *testing.T) {
		t.Setenv("DATABASE_URL", "postgres://localhost/test")
		t.Setenv("REDIS_URL", "")

		_, err := config.Load()
		if err == nil {
			t.Fatal("expected error when REDIS_URL is missing")
		}
	})

	t.Run("succeeds with required fields", func(t *testing.T) {
		t.Setenv("DATABASE_URL", "postgres://localhost/test")
		t.Setenv("REDIS_URL", "redis://localhost:6379")
		t.Setenv("PORT", "")

		cfg, err := config.Load()
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if cfg.Port != 3000 {
			t.Fatalf("expected default port 3000, got %d", cfg.Port)
		}
	})

	t.Run("reads PORT from env", func(t *testing.T) {
		t.Setenv("DATABASE_URL", "postgres://localhost/test")
		t.Setenv("REDIS_URL", "redis://localhost:6379")
		t.Setenv("PORT", "9999")

		cfg, err := config.Load()
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if cfg.Port != 9999 {
			t.Fatalf("expected port 9999, got %d", cfg.Port)
		}
	})

	t.Run("returns error for invalid PORT", func(t *testing.T) {
		t.Setenv("DATABASE_URL", "postgres://localhost/test")
		t.Setenv("REDIS_URL", "redis://localhost:6379")
		t.Setenv("PORT", "not-a-number")

		_, err := config.Load()
		if err == nil {
			t.Fatal("expected error for invalid PORT")
		}
	})
}
