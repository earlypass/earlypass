// Package main is the entry point for the EarlyPass API server.
package main

import (
	"context"
	"errors"
	"fmt"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"syscall"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/jackc/pgx/v5/stdlib"
	"github.com/pressly/goose/v3"
	"github.com/redis/go-redis/v9"

	"github.com/earlypass/earlypass/internal/api"
	"github.com/earlypass/earlypass/internal/config"
	"github.com/earlypass/earlypass/internal/email"
	"github.com/earlypass/earlypass/internal/observability"
	"github.com/earlypass/earlypass/internal/outbox"
	"github.com/earlypass/earlypass/internal/store/postgres"
	"github.com/earlypass/earlypass/migrations"
)

func main() {
	logger := slog.New(slog.NewJSONHandler(os.Stdout, nil))

	cfg, err := config.Load()
	if err != nil {
		logger.Error("invalid configuration", slog.String("error", err.Error()))
		os.Exit(1)
	}

	// Initialise OpenTelemetry. The shutdown function flushes pending spans/metrics.
	otelShutdown, err := observability.Setup(context.Background(), "earlypass", cfg.OTELExporterEndpoint)
	if err != nil {
		logger.Error("initialising opentelemetry", slog.String("error", err.Error()))
		os.Exit(1)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	// Connect to PostgreSQL.
	db, err := postgres.New(ctx, cfg.DatabaseURL)
	if err != nil {
		logger.Error("connecting to postgres", slog.String("error", err.Error()))
		os.Exit(1)
	}
	defer db.Close()

	// Apply any pending migrations before serving traffic.
	if err := runMigrations(ctx, cfg.DatabaseURL, logger); err != nil {
		logger.Error("running migrations", slog.String("error", err.Error()))
		os.Exit(1)
	}

	// Connect to Redis.
	redisOpts, err := redis.ParseURL(cfg.RedisURL)
	if err != nil {
		logger.Error("parsing redis URL", slog.String("error", err.Error()))
		os.Exit(1)
	}
	redisClient := redis.NewClient(redisOpts)
	defer func() {
		if err := redisClient.Close(); err != nil {
			logger.Warn("closing redis client", slog.String("error", err.Error()))
		}
	}()

	if err = redisClient.Ping(context.Background()).Err(); err != nil {
		logger.Error("connecting to redis", slog.String("error", err.Error()))
		os.Exit(1)
	}

	// Build email sender — use Resend if API key is configured, no-op otherwise.
	// The sender is used only by the outbox processor; handlers write to the outbox table.
	var emailSender email.IdempotentSender
	if cfg.ResendAPIKey != "" && cfg.EmailFrom != "" {
		emailSender = email.NewClient(cfg.ResendAPIKey, cfg.EmailFrom)
		logger.Info("email sender configured", slog.String("from", cfg.EmailFrom))
	} else if cfg.DevMode {
		emailSender = email.LogSender{Logger: logger}
		logger.Warn("email not configured — dev mode: emails will be printed to the log")
	} else {
		emailSender = email.NoopSender{}
		logger.Warn("email not configured — RESEND_API_KEY or EMAIL_FROM missing; emails will be discarded")
	}

	// Derive dashboard JWT secret from config (or leave nil for random per-process key).
	var dashJWTSecret []byte
	if cfg.DashboardJWTSecret != "" {
		dashJWTSecret = []byte(cfg.DashboardJWTSecret)
	}

	// Parse trusted proxy CIDRs from config.
	var trustedProxies []string
	if cfg.TrustedProxies != "" {
		for _, cidr := range strings.Split(cfg.TrustedProxies, ",") {
			if trimmed := strings.TrimSpace(cidr); trimmed != "" {
				trustedProxies = append(trustedProxies, trimmed)
			}
		}
	}

	// Register application metrics — must be called after observability.Setup so the
	// global MeterProvider is already configured.
	metrics, err := observability.NewMetrics()
	if err != nil {
		logger.Error("registering metrics", slog.String("error", err.Error()))
		os.Exit(1)
	}

	// Outbox processor — delivers emails from the outbox table via Resend.
	emailOutboxStore := db.EmailOutbox()
	outboxProcessor := outbox.NewProcessor(emailOutboxStore, emailSender, metrics, logger)

	router := api.NewRouter(api.Dependencies{
		CampaignStore:      db.Campaigns(),
		SignupStore:        db.Signups(),
		WebhookStore:       db.Webhooks(),
		AccountStore:       db.Accounts(),
		MagicLinkStore:     db.MagicLinks(),
		AccountAPIKeyStore: db.AccountAPIKeys(),
		OAuthStore:         db.OAuth(),
		EmailOutboxStore:   emailOutboxStore,
		Metrics:            metrics,
		DBPinger:           db,
		RedisClient:        redisClient,
		BaseURL:            cfg.BaseURL,
		DashboardJWTSecret: dashJWTSecret,
		DevMode:            cfg.DevMode,
		TrustedProxies:     trustedProxies,
		Logger:             logger,
	})

	srv := &http.Server{
		Addr:              fmt.Sprintf(":%d", cfg.Port),
		Handler:           router,
		ReadHeaderTimeout: 10 * time.Second,
	}

	// Background context for cleanup goroutines — cancelled on shutdown.
	cleanupCtx, cleanupCancel := context.WithCancel(context.Background())
	defer cleanupCancel()

	// Start outbox processor — polls email_outbox and delivers via Resend.
	go outboxProcessor.Run(cleanupCtx)
	defer outboxProcessor.Shutdown()

	// Periodic cleanup of expired tokens (runs every hour).
	go func() {
		ticker := time.NewTicker(1 * time.Hour)
		defer ticker.Stop()
		for {
			select {
			case <-ticker.C:
				if err := db.MagicLinks().DeleteExpired(cleanupCtx); err != nil {
					logger.Warn("cleanup: deleting expired magic link tokens", slog.String("error", err.Error()))
				}
				if err := db.OAuth().DeleteExpiredTokens(cleanupCtx); err != nil {
					logger.Warn("cleanup: deleting expired oauth tokens", slog.String("error", err.Error()))
				}
			case <-cleanupCtx.Done():
				return
			}
		}
	}()

	// Periodic gauge metrics — poll DB for current counts every 30s so that
	// earlypass_active_campaigns and earlypass_webhook_pending are always visible
	// in Prometheus (gauges only emit when Record() is called).
	go func() {
		ticker := time.NewTicker(30 * time.Second)
		defer ticker.Stop()
		// Emit once immediately on startup so Prometheus sees a value right away.
		recordGaugeMetrics(cleanupCtx, db, metrics, logger)
		for {
			select {
			case <-ticker.C:
				recordGaugeMetrics(cleanupCtx, db, metrics, logger)
			case <-cleanupCtx.Done():
				return
			}
		}
	}()

	// Start server in background.
	serverErr := make(chan error, 1)
	go func() {
		logger.Info("server starting", slog.Int("port", cfg.Port))
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			serverErr <- err
		}
	}()

	// Wait for shutdown signal or server error.
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGTERM, syscall.SIGINT)

	select {
	case err := <-serverErr:
		logger.Error("server error", slog.String("error", err.Error()))
		os.Exit(1)
	case sig := <-quit:
		logger.Info("shutting down", slog.String("signal", sig.String()))
	}

	shutdownCtx, shutdownCancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer shutdownCancel()

	if err := srv.Shutdown(shutdownCtx); err != nil {
		logger.Error("graceful shutdown failed", slog.String("error", err.Error()))
		os.Exit(1)
	}

	// Flush OTel telemetry before exit.
	if err := otelShutdown(shutdownCtx); err != nil {
		logger.Warn("otel shutdown", slog.String("error", err.Error()))
	}

	logger.Info("server stopped")
}

// recordGaugeMetrics queries current DB counts and records them as OTel gauges.
// Called periodically so Prometheus always has a fresh value to scrape.
func recordGaugeMetrics(ctx context.Context, db *postgres.DB, m *observability.Metrics, logger *slog.Logger) {
	if m == nil {
		return
	}

	activeCampaigns, err := db.Campaigns().CountActive(ctx)
	if err != nil {
		logger.Warn("metrics: counting active campaigns", slog.String("error", err.Error()))
	} else {
		m.SetActiveCampaigns(ctx, activeCampaigns)
	}

	pendingWebhooks, err := db.Webhooks().CountPendingDeliveries(ctx)
	if err != nil {
		logger.Warn("metrics: counting pending webhook deliveries", slog.String("error", err.Error()))
	} else {
		m.SetWebhookPending(ctx, pendingWebhooks)
	}
}

// runMigrations applies any pending goose migrations before the server starts.
// It opens a short-lived *sql.DB connection, runs goose up, then closes it.
func runMigrations(ctx context.Context, databaseURL string, logger *slog.Logger) error {
	cfg, err := pgxpool.ParseConfig(databaseURL)
	if err != nil {
		return fmt.Errorf("parsing database URL: %w", err)
	}

	sqlDB := stdlib.OpenDB(*cfg.ConnConfig)
	defer func() { _ = sqlDB.Close() }()

	provider, err := goose.NewProvider(goose.DialectPostgres, sqlDB, migrations.FS)
	if err != nil {
		return fmt.Errorf("creating goose provider: %w", err)
	}

	if _, err := provider.Up(ctx); err != nil {
		return fmt.Errorf("applying migrations: %w", err)
	}

	logger.Info("database migrations applied")
	return nil
}
