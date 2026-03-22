//go:build integration

package postgres_test

import (
	"context"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"runtime"
	"testing"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/jackc/pgx/v5/stdlib"
	"github.com/pressly/goose/v3"
	"github.com/testcontainers/testcontainers-go"
	tcpostgres "github.com/testcontainers/testcontainers-go/modules/postgres"
	"github.com/testcontainers/testcontainers-go/wait"

	"github.com/earlypass/earlypass/internal/store/postgres"
)

var (
	sharedContainer *tcpostgres.PostgresContainer
	sharedDB        *postgres.DB
)

func TestMain(m *testing.M) {
	ctx := context.Background()

	var err error
	sharedContainer, err = tcpostgres.Run(ctx,
		"postgres:16-alpine",
		tcpostgres.WithDatabase("earlypass_test"),
		tcpostgres.WithUsername("ep"),
		tcpostgres.WithPassword("ep"),
		testcontainers.WithWaitStrategy(
			wait.ForLog("database system is ready to accept connections").WithOccurrence(2),
		),
	)
	if err != nil {
		log.Fatalf("starting postgres container: %v", err)
	}

	dsn, err := sharedContainer.ConnectionString(ctx, "sslmode=disable")
	if err != nil {
		log.Fatalf("getting connection string: %v", err)
	}

	if err = applyMigrations(dsn); err != nil {
		log.Fatalf("running migrations: %v", err)
	}

	sharedDB, err = postgres.New(ctx, dsn)
	if err != nil {
		log.Fatalf("opening test DB: %v", err)
	}

	code := m.Run()

	sharedDB.Close()
	_ = sharedContainer.Terminate(ctx)
	os.Exit(code)
}

// testDB returns the shared DB instance. Store tests use unique UUIDs in
// fixtures, so no truncation is needed between tests.
func testDB(t *testing.T) *postgres.DB {
	t.Helper()
	return sharedDB
}

// applyMigrations runs all goose migrations from the repo's migrations directory.
func applyMigrations(dsn string) error {
	cfg, err := pgxpool.ParseConfig(dsn)
	if err != nil {
		return fmt.Errorf("parsing dsn: %w", err)
	}

	sqlDB := stdlib.OpenDB(*cfg.ConnConfig)
	defer func() { _ = sqlDB.Close() }()

	if err = goose.SetDialect("postgres"); err != nil {
		return fmt.Errorf("setting goose dialect: %w", err)
	}
	if err = goose.Up(sqlDB, repoMigrationsDir()); err != nil {
		return fmt.Errorf("running goose up: %w", err)
	}
	return nil
}

// repoMigrationsDir returns the absolute path to the repo's migrations directory.
// This file lives at .../internal/store/postgres/testhelper_test.go so the
// migrations directory is four levels up.
func repoMigrationsDir() string {
	_, file, _, _ := runtime.Caller(0)
	return filepath.Join(filepath.Dir(file), "..", "..", "..", "migrations")
}

// uniqueEmail returns a unique email address for tests to avoid conflicts.
func uniqueEmail(tag string) string {
	return tag + "-" + uuid.New().String()[:8] + "@example.com"
}

// nonExistentUUID returns a UUID that is guaranteed not to exist in the database.
func nonExistentUUID() uuid.UUID {
	return uuid.New()
}
