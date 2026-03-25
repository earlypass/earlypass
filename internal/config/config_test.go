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

	t.Run("reads ADMIN_API_KEY from env", func(t *testing.T) {
		t.Setenv("DATABASE_URL", "postgres://localhost/test")
		t.Setenv("REDIS_URL", "redis://localhost:6379")
		t.Setenv("ADMIN_API_KEY", "test-admin-key")
		t.Setenv("PORT", "")

		cfg, err := config.Load()
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if cfg.AdminAPIKey != "test-admin-key" {
			t.Fatalf("expected AdminAPIKey=test-admin-key, got %q", cfg.AdminAPIKey)
		}
	})

	t.Run("ADMIN_PORT defaults to 3001", func(t *testing.T) {
		t.Setenv("DATABASE_URL", "postgres://localhost/test")
		t.Setenv("REDIS_URL", "redis://localhost:6379")
		t.Setenv("ADMIN_PORT", "")
		t.Setenv("PORT", "")

		cfg, err := config.Load()
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if cfg.AdminPort != 3001 {
			t.Fatalf("expected AdminPort=3001, got %d", cfg.AdminPort)
		}
	})

	t.Run("reads custom ADMIN_PORT", func(t *testing.T) {
		t.Setenv("DATABASE_URL", "postgres://localhost/test")
		t.Setenv("REDIS_URL", "redis://localhost:6379")
		t.Setenv("ADMIN_PORT", "4001")
		t.Setenv("PORT", "")

		cfg, err := config.Load()
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if cfg.AdminPort != 4001 {
			t.Fatalf("expected AdminPort=4001, got %d", cfg.AdminPort)
		}
	})

	t.Run("returns error for invalid ADMIN_PORT", func(t *testing.T) {
		t.Setenv("DATABASE_URL", "postgres://localhost/test")
		t.Setenv("REDIS_URL", "redis://localhost:6379")
		t.Setenv("ADMIN_PORT", "not-a-number")

		_, err := config.Load()
		if err == nil {
			t.Fatal("expected error for invalid ADMIN_PORT")
		}
	})
}

func TestSignupMode(t *testing.T) {
	t.Run("defaults to open", func(t *testing.T) {
		t.Setenv("DATABASE_URL", "postgres://localhost/test")
		t.Setenv("REDIS_URL", "redis://localhost:6379")
		t.Setenv("SIGNUP_MODE", "")
		t.Setenv("PORT", "")
		t.Setenv("ADMIN_PORT", "")

		cfg, err := config.Load()
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if cfg.SignupMode != config.SignupModeOpen {
			t.Fatalf("expected SignupMode=open, got %q", cfg.SignupMode)
		}
		if cfg.SignupMode.IsClosed() {
			t.Fatal("open mode should not be closed")
		}
	})

	t.Run("parses closed", func(t *testing.T) {
		t.Setenv("DATABASE_URL", "postgres://localhost/test")
		t.Setenv("REDIS_URL", "redis://localhost:6379")
		t.Setenv("SIGNUP_MODE", "closed")
		t.Setenv("PORT", "")
		t.Setenv("ADMIN_PORT", "")

		cfg, err := config.Load()
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if cfg.SignupMode != config.SignupModeClosed {
			t.Fatalf("expected SignupMode=closed, got %q", cfg.SignupMode)
		}
		if !cfg.SignupMode.IsClosed() {
			t.Fatal("closed mode should be closed")
		}
	})

	t.Run("case insensitive", func(t *testing.T) {
		t.Setenv("DATABASE_URL", "postgres://localhost/test")
		t.Setenv("REDIS_URL", "redis://localhost:6379")
		t.Setenv("SIGNUP_MODE", "CLOSED")
		t.Setenv("PORT", "")
		t.Setenv("ADMIN_PORT", "")

		cfg, err := config.Load()
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if cfg.SignupMode != config.SignupModeClosed {
			t.Fatalf("expected SignupMode=closed for 'CLOSED', got %q", cfg.SignupMode)
		}
	})

	t.Run("unknown value defaults to open", func(t *testing.T) {
		t.Setenv("DATABASE_URL", "postgres://localhost/test")
		t.Setenv("REDIS_URL", "redis://localhost:6379")
		t.Setenv("SIGNUP_MODE", "something-else")
		t.Setenv("PORT", "")
		t.Setenv("ADMIN_PORT", "")

		cfg, err := config.Load()
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if cfg.SignupMode != config.SignupModeOpen {
			t.Fatalf("expected SignupMode=open for unknown value, got %q", cfg.SignupMode)
		}
	})
}
