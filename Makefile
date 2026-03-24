# EarlyPass Makefile
# All targets work without any extra setup — Go is managed via mise.
# mise sets up PATH automatically so `go` resolves correctly.

.PHONY: build build-widget build-dashboard build-dashboard-dev test test-integration vet lint check \
        generate migrate migrate-down migrate-reset dev dev-full dev-down dev-reset clean

MISE := $(shell which mise 2>/dev/null || echo /home/node/.local/bin/mise)
export PATH := $(shell $(MISE) bin-paths 2>/dev/null | tr '\n' ':')$(PATH)

BINARY      := bin/server
DATABASE_URL ?= postgres://earlypass:earlypass@localhost:5432/earlypass?sslmode=disable

## build: Compile the API server binary (builds JS bundles first).
build: build-widget build-dashboard
	go build -o $(BINARY) ./cmd/server

## build-widget: Build the JS widget via esbuild.
build-widget:
	cd widget && npm ci && npm run build

## build-dashboard: Build the dashboard SPA via esbuild (production, hashed, no source maps).
build-dashboard:
	cd dashboard && npm ci && npm run build

## build-dashboard-dev: Build the dashboard SPA with inline source maps (dev only, no hashing).
build-dashboard-dev:
	cd dashboard && npm ci && node scripts/build.js --dev

## test: Run unit tests.
test:
	go test ./...

## test-integration: Run integration tests (requires Docker for testcontainers).
test-integration:
	go test -tags=integration -timeout=120s ./...

## vet: Run go vet.
vet:
	go vet ./...

## lint: Run golangci-lint via go tool.
lint:
	go tool golangci-lint run

## check: Run vet + lint + unit tests. Must be green before every commit.
check: vet lint test

## generate: Regenerate Go types from api/openapi.yaml.
generate:
	bash scripts/generate.sh

## migrate: Run all pending DB migrations (goose up).
migrate:
	go tool goose -dir migrations postgres "$(DATABASE_URL)" up

## migrate-down: Roll back the last DB migration.
migrate-down:
	go tool goose -dir migrations postgres "$(DATABASE_URL)" down

## migrate-reset: Drop all tables and re-run all migrations from scratch (dev only).
migrate-reset:
	go tool goose -dir migrations postgres "$(DATABASE_URL)" reset
	go tool goose -dir migrations postgres "$(DATABASE_URL)" up

## dev: Start postgres + redis, run migrations, and launch the app with hot-reload (air).
dev:
	docker compose -f docker-compose.dev.yml up -d && $(MAKE) migrate && air

## dev-full: Start all services (including o11y), run migrations, and launch air.
dev-full:
	docker compose -f docker-compose.dev.yml --profile o11y up -d && $(MAKE) migrate && OTEL_EXPORTER_OTLP_ENDPOINT=localhost:4317 air

## dev-down: Stop all dev containers (including profiled services).
dev-down:
	docker compose -f docker-compose.dev.yml --profile o11y down

## dev-reset: Stop all dev containers and wipe volumes (fresh DB).
dev-reset:
	docker compose -f docker-compose.dev.yml --profile o11y down -v

## clean: Remove build artifacts.
clean:
	rm -rf bin/ widget/dist/ dashboard/dist/ coverage.out coverage.html
