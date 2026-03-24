# CLAUDE.md — Instructions for Claude Code

This file is your guide for working on EarlyPass autonomously. Read it at the start of every session.

---

## Project Overview

EarlyPass is a drop-in viral waitlist widget. Founders embed a `<script>` tag and get referral tracking, leaderboard, milestone rewards, and analytics. API-first, open-source (BSL), SaaS + self-hosted.

**Repo:** `github.com/earlypass/earlypass`
**Module:** `github.com/earlypass/earlypass`
**Go version:** 1.26 — use idiomatic Go. Take advantage of recent language additions (range-over-func, enhanced type inference, etc.) where they improve clarity.
**Tool management:** mise (`mise.toml` in the project root). Run `mise install` once to get Go 1.26 and Node 22. The Makefile sets up PATH automatically — all `make` targets work without any extra setup. For raw shell commands use `mise exec -- <cmd>` (e.g. `mise exec -- go test ./...`).

---

## Keep These Files Up to Date

**This is a standing rule — never forget it.**

After every phase (and after any significant structural or API change), update:
- **`CLAUDE.md`** — keep commands, repo structure, env vars, and any agent instructions current
- **`README.md`** — keep the getting-started steps, tech stack, and feature list accurate

If you change the project structure, add a new env var, add a new make target, or change the public API in a meaningful way — update both files in the same commit. Don't leave them stale.

---

## Rules

- **Run `make check` before every commit** — vet + lint + tests must all be green. Never commit broken code.
- **Commit frequently** — small, focused commits with conventional messages (`feat:`, `fix:`, `docs:`, `chore:`, `test:`)
- **Don't make the architectural decisions in `DECISIONS.md` ad-hoc** — they're already locked. Follow them.
- **Log your choices** — when you pick a library or approach not in the decisions list, add a comment or note explaining why
- **Never log secrets** — always hash API keys (bcrypt), validate all input
- **RFC 7807 problem details** for all error responses
- **Keep `CLAUDE.md` and `README.md` up to date** — update them in the same commit whenever structure, commands, env vars, or public API changes

---

## Key Commands

### Prerequisites

Docker Desktop installed:
```bash
brew install --cask docker
```

### Daily dev workflow

```bash
make dev            # postgres + redis + migrate + air (lightweight)
                    # API: http://localhost:3000
make dev-full       # all services (o11y + widget testbed) + migrate + air
                    # Jaeger:         http://localhost:16686
                    # Grafana:        http://localhost:3001
                    # Prometheus:     http://localhost:9090
                    # Widget testbed: http://localhost:4000
make dev-down       # stop all containers
make dev-reset      # stop + wipe all volumes (fresh DB)
```

### Other commands

```bash
make build          # Build Go binary
make test           # Unit tests
make test-integration  # Integration tests (needs Docker/testcontainers)
make vet            # go vet ./...
make lint           # golangci-lint via go tool
make check          # vet + lint + test (run this before every commit)
make generate       # Run oapi-codegen (OpenAPI → Go types)
make migrate        # Run DB migrations (goose up) — works against port-forwarded postgres
make migrate-down   # Roll back last migration
make build-widget   # Build JS widget (esbuild)
make build-mcp      # Build MCP server binary
```

**`make check` must be green before every commit.** No exceptions.

### Tools via `go tool`

All Go tools (linters, code generators, etc.) are managed via Go's built-in tool tracking (`go.mod` `tool` directives). Use `go tool <name>` — no separate install steps needed.

```bash
go tool golangci-lint run   # linter
go tool oapi-codegen ...    # OpenAPI codegen
go tool goose ...           # DB migrations
```

To add a new tool: `go get -tool github.com/some/tool@latest`

---

## Repo Structure

```
earlypass/
├── cmd/
│   ├── server/          # Main Go binary (API + dashboard + embedded widget)
│   └── mcp/             # MCP server binary
├── internal/
│   ├── api/             # Router wiring (router.go + dependencies struct)
│   │   ├── generated/   # oapi-codegen output — DO NOT edit; regenerate with `make generate`
│   │   ├── handler/     # One file per resource + server.go (StrictServerInterface)
│   │   ├── middleware/  # BearerAuth, RateLimit, Idempotency, InjectRequest, context helpers
│   │   └── problem/     # RFC 7807 problem details writer
│   ├── domain/          # Core business logic (no HTTP/DB dependencies)
│   ├── store/           # Store interfaces (store.go)
│   │   └── postgres/    # pgx/v5 implementations, one file per store
│   ├── redisstore/      # Redis-backed state: idempotency keys, fraud IP counters
│   ├── email/           # Resend integration
│   ├── webhook/         # Webhook dispatch
│   ├── fraud/           # Disposable email (5185 domains), IP rate limiting, fingerprinting
│   ├── dashboard/       # Dashboard auth handler + embedded static assets
│   └── config/          # Config loading from env vars
├── api/
│   ├── openapi.yaml     # OpenAPI 3.0 spec — source of truth for all endpoints
│   └── spec.go          # Embeds openapi.yaml for runtime serving at GET /v1/openapi.yaml
├── migrations/          # goose SQL migrations (single file: 001_schema.sql)
├── widget/              # Vanilla JS widget (esbuild)
├── dashboard/           # Preact + htm dashboard (embedded in binary)
├── helm/
│   └── earlypass/       # Self-hosting Helm chart (published to oci://ghcr.io/earlypass/charts/earlypass)
├── dev/                 # Dev infrastructure configs (mounted by docker-compose.dev.yml)
│   ├── otel-collector.yaml, prometheus.yml, prometheus-rules/
│   ├── grafana/         # Datasources, dashboard provider, dashboard JSON
│   ├── widget-testbed.py, Dockerfile.widget-testbed  # Widget embed testing
├── docker-compose.dev.yml  # Dev infrastructure (postgres, redis, observability)
├── .air.toml            # Hot-reload config for air
├── Dockerfile           # Multi-stage production Dockerfile (distroless, < 30MB)
├── scripts/             # generate.sh (oapi-codegen runner), gh (GitHub CLI wrapper), git (git wrapper)
├── mise.toml            # Tool versions (Go 1.26, Node 22)
├── CLAUDE.md            # This file
├── DECISIONS.md         # Locked architectural decisions — follow these
├── Makefile
└── go.mod
```

---

## Known Patterns & Pitfalls

Things that have caused CI failures before — read these before writing new code or tests.

**PostgreSQL store access**
The `*postgres.DB` type exposes stores via methods, not standalone constructors:
```go
db, _ := postgres.New(ctx, dsn)
campaigns := db.Campaigns()   // *postgres.CampaignStore
signups   := db.Signups()     // *postgres.SignupStore — includes InviteTopN, CountInvitedByCampaign, ListInvitedByCampaign
milestones := db.Milestones() // *postgres.MilestoneStore
webhooks  := db.Webhooks()    // *postgres.WebhookStore
```
There is no `pgstore.NewCampaignStore(db)` — that pattern doesn't exist.

**Signup statuses**
Valid values for `domain.SignupStatus`: `pending`, `verified`, `rejected`, `expired`, `invited`.
All statuses including `SignupStatusInvited` are defined in `migrations/001_schema.sql` (the single migration file). Do not add new status values without updating that file.

**Router constructor**
`api.NewRouter` takes a `api.Dependencies` struct, not individual arguments:
```go
router := api.NewRouter(api.Dependencies{
    CampaignStore: db.Campaigns(),
    RedisClient:   redisClient,
    Logger:        logger,
    // ...
})
```

**Generated code is committed**
`internal/api/generated/` is committed to git (not gitignored). After running `make generate`, commit the output. Do not add it back to `.gitignore`.

**Public vs authenticated endpoints**
The `publicOperations` map in `internal/api/router.go` controls which operation IDs skip Bearer auth. When adding a new public endpoint, add its operation ID there.

**Important:** The keys must use **PascalCase** (e.g. `"CreateCampaign"`), which is what oapi-codegen emits in the generated strict middleware call:
```go
handler = middleware(handler, "CreateCampaign")  // PascalCase
```
The `api/openapi.yaml` uses camelCase (`operationId: createCampaign`), but oapi-codegen converts these to PascalCase in Go. Do **not** copy the camelCase value from the YAML directly into the map — it will silently fail and every request will get a 401.

**Shared testcontainer pattern**
Integration tests use a single shared container per package, set up in `TestMain`. Tests don't truncate data between runs because each test creates fixtures with unique UUIDs. Follow this pattern in all new integration test packages:
```go
var (
    sharedContainer *tcpostgres.PostgresContainer
    sharedDB        *postgres.DB
)

func TestMain(m *testing.M) {
    // spin up container once, run all tests, terminate
}

func testDB(t *testing.T) *postgres.DB {
    t.Helper()
    return sharedDB
}
```
See `internal/store/postgres/testhelper_test.go` and `internal/api/handler/integration_test.go` for reference.

**Referral code generation**
`domain.GenerateReferralCode()` (in `internal/domain/signup.go`) generates 8-char alphanumeric codes using crypto/rand rejection sampling. There is no external nanoid library — do not add one.

**Domain split**
The binary serves only app concerns — the marketing site lives in the separate `earlypass-web` repo (Astro, deployed to GitHub Pages at `www.earlypass.app`).

**Path-based routing** (all under `api.earlypass.app`)
- `/api/v1/...` — REST API (oapi-codegen routes, OAuth verify)
- `/dashboard/...` — Dashboard SPA + auth + dashboard JSON API at `/dashboard/api/...`
- `/widget/widget.js`, `/widget/widget.v{hash}.js` — Widget JS bundle
- `/mcp` — MCP Streamable HTTP endpoint
- `/healthz`, `/oauth/...`, `/.well-known/...` — root-level (no prefix)
- Legacy 301 redirects in place: `/widget.js` → `/widget/widget.js`, `/v1/*` → `/api/v1/*`

When embedding the widget, point `src` to `/widget/widget.js` (or the versioned path for immutable caching).


**Check before creating**
Before writing a new file (especially tests), check whether one already exists:
```bash
find . -name "*integration*" -o -name "*_test.go" | grep <package>
```
Stale tests with outdated API signatures cause CI failures that are hard to spot locally.

---

## Architectural Decisions

All key decisions are in `DECISIONS.md`. Read it before writing any code. The big ones:

- **Router:** `chi` + `net/http` (no heavy frameworks)
- **OpenAPI:** spec-first with `oapi-codegen` (`api/openapi.yaml` is source of truth)
- **DB migrations:** `goose` — **single fat migration file** (`migrations/001_schema.sql`). While in pre-deployment development, keep all schema changes in this one file instead of adding new numbered migrations. When the project has real deployments that need live migration, switch to the standard numbered-file approach and document that decision here.
- **DB driver:** `pgx/v5` directly (no ORM)
- **Auth:** API keys per campaign, hashed with bcrypt — no user accounts in v1
- **Dashboard frontend:** Preact + htm (no build step), embedded in Go binary via `embed.FS`
- **Widget bundler:** esbuild, IIFE bundle, < 20KB gzipped
- **Queue position:** `base_position - (referrals * boost_weight)`, clamped to 1
- **Idempotency:** `Idempotency-Key` header, stored in Redis, 24h TTL
- **Rate limiting:** Token bucket per IP via Redis directly (`go-redis/redis_rate`)
- **Webhooks:** Direct HTTP dispatch, exponential backoff, 3 retries
- **Access granting:** `InviteTopN` is a single atomic CTE (`UPDATE…RETURNING`) — no separate select+update. Invite emails are fire-and-forget goroutines (skipped silently if `EmailSender` is nil). `ProductURL` in `CampaignSettings` drives the CTA link in invite emails.

---

## Environment Variables

```bash
DATABASE_URL         # PostgreSQL connection string
REDIS_URL            # Redis connection string
RESEND_API_KEY       # Resend transactional email
EMAIL_FROM           # From address for transactional email (e.g. noreply@earlypass.app)
BASE_URL             # Public base URL of the API server — used to build links in emails
                     # Example: "https://api.earlypass.app" (no trailing slash)
                     # Optional; links will be relative paths if not set
DASHBOARD_JWT_SECRET # HMAC-SHA256 key for signing dashboard auth cookies (hex or UTF-8 string).
                     # If unset a random per-process key is generated — sessions won't survive restarts
                     # and won't work across multiple instances. Required for production.
DEV_MODE             # Set to "true" to enable dev-only endpoints (email preview at
                     # GET /v1/internal/email-preview/{template}). Never set in production.
TRUSTED_PROXIES      # Comma-separated list of CIDR ranges trusted to set X-Real-IP and
                     # X-Forwarded-For headers (e.g. "10.0.0.0/8,172.16.0.0/12").
                     # If empty (default), forwarded headers are ignored and RemoteAddr
                     # is always used for rate limiting and fraud detection.
PORT                 # HTTP port (default: 3000)
OTEL_EXPORTER_OTLP_ENDPOINT  # OTLP collector endpoint
```

---

## Testing Standards

Every meaningful change needs tests. There is no such thing as too many tests.

### Unit tests
- Domain logic, fraud checks, position calculation, referral math, email rendering
- No DB/Redis — pure functions, fast
- File convention: `foo_test.go` alongside `foo.go`

### Integration tests
- **Every store method** must have an integration test against real Postgres (testcontainers-go)
- **Every API endpoint** must have an integration test (httptest + real DB + real Redis)
- Use build tag `//go:build integration` and run with `make test-integration`
- Integration tests are not optional — they are the primary correctness signal

### What needs tests
- Any new domain logic → unit test
- Any new store method → integration test
- Any new API endpoint → integration test (happy path + key error cases)
- Any bug fix → regression test first, then fix
- Any referral/position calculation change → unit test covering the edge cases

### Coverage
- Domain and store layers: target 90%+
- API handlers: target 80%+
- Run `go test -coverprofile=coverage.out ./...` and review before marking a phase done

### Widget tests
- Playwright smoke tests for the widget embed flow

---

## Claude Code Skills

The following skills from `everything-claude-code` are available and should be used proactively:

| Skill | When to use |
|-------|-------------|
| `everything-claude-code:golang-testing` | Writing new tests, TDD setup, coverage gaps |
| `everything-claude-code:golang-patterns` | Idiomatic Go patterns, interface design, error handling |
| `everything-claude-code:go-review` | After writing or modifying any Go code |
| `everything-claude-code:go-test` | Enforce TDD — writes tests first, then implementation |
| `everything-claude-code:go-build` | When `go build`, `go vet`, or golangci-lint fails |
| `everything-claude-code:security-review` | New auth code, input handling, API keys, secrets |
| `everything-claude-code:tdd` | New features or bug fixes — scaffold interface + tests before code |

Use the `Skill` tool to invoke: e.g. `Skill("everything-claude-code:go-review")`.

---

## Git Workflow

- Branch from `main`
- Branch names: `phase/01-foundations`, `phase/02-data-model`, `feat/...`, `fix/...`
- PR per phase (or per logical chunk within a phase)
- Squash merge to main
- CI must be green before merge
- Tag releases: `v0.1.0`, `v0.2.0`, etc. after each completed phase

## GitHub CI

CI runs on every push and PR via `.github/workflows/ci.yml`. It runs:

1. `go vet ./...`
2. `go tool golangci-lint run`
3. `go test ./...` (unit tests)
4. `go test -tags=integration ./...` (integration tests, with Docker services)
5. Widget build (`npm ci && npm run build`)
6. Docker build (no push)

CI must be green. If CI is red, fix it before continuing with other work.

---

## Communication

When you need Albert's input:
1. Set the task file status to `waiting-review`
2. Add a clear `## Agent Notes` section in the task file with what needs review
3. Commit + push the task file update
4. Stop and wait — don't continue with the next phase
