// Package config loads and validates application configuration from environment variables.
package config

import (
	"errors"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// SignupMode controls who can create new dashboard/API accounts.
type SignupMode string

const (
	// SignupModeOpen allows anyone to create an account (default).
	SignupModeOpen SignupMode = "open"
	// SignupModeClosed restricts account creation to pre-existing accounts only.
	// Use the admin API to provision accounts before users can sign in.
	SignupModeClosed SignupMode = "closed"
)

// Config holds all application configuration loaded from environment variables.
type Config struct {
	DatabaseURL          string
	RedisURL             string
	ResendAPIKey         string
	EmailFrom            string
	// BaseURL is the public base URL of the API server used to build links in emails.
	// Example: "https://www.earlypass.com" (no trailing slash).
	// Optional — if not set, links in emails will be relative paths only.
	BaseURL string
	// DashboardJWTSecret is the HMAC-SHA256 key used to sign dashboard auth cookies.
	// If empty a random per-process secret is generated (dev-friendly, but sessions
	// won't survive a restart and won't work across multiple instances).
	DashboardJWTSecret string
	// DevMode enables dev-only endpoints such as the email preview endpoint.
	// Set DEV_MODE=true in environment. Never enable in production.
	DevMode bool
	// TrustedProxies is a comma-separated list of CIDR ranges trusted to set
	// X-Real-IP and X-Forwarded-For (e.g. "10.0.0.0/8,172.16.0.0/12").
	// If empty, forwarded headers are ignored and RemoteAddr is always used.
	TrustedProxies string
	Port                 int
	OTELExporterEndpoint string

	// AdminAPIKey is the Bearer token required to access the admin API.
	// The admin API is always available when this key is set.
	// If empty the admin API is disabled and a warning is logged.
	AdminAPIKey string
	// AdminPort is the port for the admin API server (default: 3001).
	// The admin API runs on a separate port so it can be firewalled in production.
	AdminPort int

	// SignupMode controls who can create new accounts.
	// "open" (default): anyone can sign up via magic link.
	// "closed": only pre-existing accounts receive magic links.
	SignupMode SignupMode
}

// Load reads configuration from environment variables and validates required fields.
// It returns an error if any required field is missing.
func Load() (Config, error) {
	cfg := Config{
		DatabaseURL:          os.Getenv("DATABASE_URL"),
		RedisURL:             os.Getenv("REDIS_URL"),
		ResendAPIKey:         os.Getenv("RESEND_API_KEY"),
		EmailFrom:            os.Getenv("EMAIL_FROM"),
		BaseURL:              os.Getenv("BASE_URL"),
		DashboardJWTSecret:   os.Getenv("DASHBOARD_JWT_SECRET"),
		DevMode:              os.Getenv("DEV_MODE") == "true",
		TrustedProxies:       os.Getenv("TRUSTED_PROXIES"),
		OTELExporterEndpoint: os.Getenv("OTEL_EXPORTER_OTLP_ENDPOINT"),
		AdminAPIKey:          os.Getenv("ADMIN_API_KEY"),
	}

	var errs []error

	if cfg.DatabaseURL == "" {
		errs = append(errs, errors.New("DATABASE_URL is required"))
	}
	if cfg.RedisURL == "" {
		errs = append(errs, errors.New("REDIS_URL is required"))
	}

	var err error
	cfg.Port, err = envInt("PORT", 3000)
	if err != nil {
		errs = append(errs, err)
	}

	cfg.AdminPort, err = envInt("ADMIN_PORT", 3001)
	if err != nil {
		errs = append(errs, err)
	}

	cfg.SignupMode = parseSignupMode(os.Getenv("SIGNUP_MODE"))

	return cfg, errors.Join(errs...)
}

func envInt(key string, defaultVal int) (int, error) {
	raw := os.Getenv(key)
	if raw == "" {
		return defaultVal, nil
	}
	v, err := strconv.Atoi(raw)
	if err != nil {
		return 0, fmt.Errorf("%s must be an integer: %w", key, err)
	}
	return v, nil
}

// parseSignupMode converts a raw string to a SignupMode, defaulting to open.
func parseSignupMode(raw string) SignupMode {
	switch strings.ToLower(strings.TrimSpace(raw)) {
	case "closed":
		return SignupModeClosed
	default:
		return SignupModeOpen
	}
}

// IsClosed reports whether the signup mode restricts account creation.
func (m SignupMode) IsClosed() bool {
	return m == SignupModeClosed
}
