# DECISIONS.md — Locked Architectural Decisions

These decisions are finalized. The AI agent should follow them without deviation. If a situation arises that isn't covered here, add a note in the relevant task file and flag for Albert's review.

---

| # | Decision | Choice | Rationale |
|---|----------|--------|-----------|
| 0 | **Go version** | Go 1.26 | Latest stable. Use idiomatic Go and recent language additions (range-over-func, enhanced type inference, etc.) where they improve clarity. |
| 0b | **Tool management** | `go tool` (built-in, Go 1.24+) | Tools tracked in `go.mod` via `go get -tool`. No separate install steps in CI. Invoke as `go tool <name>`. |
| 1 | **Go router** | `chi` + stdlib `net/http` | Minimal, no magic, great middleware ecosystem. Go 1.22+ handles path params natively. |
| 2 | **OpenAPI approach** | Spec-first with `oapi-codegen` | `api/openapi.yaml` is the single source of truth. Generates Go types + server interface. Never write server types by hand. |
| 3 | **DB migrations** | `pressly/goose` | SQL-based migrations, no DSL, simple CLI. Single fat migration file (`migrations/001_schema.sql`) while pre-deployment; switch to numbered files when live deployments require it. |
| 4 | **DB driver** | `pgx/v5` + `pgxpool` | No ORM. Raw SQL. Connection pooling built-in. |
| 5 | **Signup workflow** | Inline goroutines in handler | Signup side-effects (verification email, referral credit, welcome email, leaderboard cache invalidation) run as fire-and-forget goroutines using `context.WithoutCancel` to decouple from request lifetime while preserving trace context. |
| 6 | **Dashboard frontend** | Preact + htm + esbuild | TypeScript, compiled via esbuild (no Webpack/Vite). ES modules + importmap. Embeds via `embed.FS`. Avoid React (too heavy). uPlot for charts (< 40KB). |
| 7 | **Widget bundler** | esbuild | Fast, zero-config, single IIFE output. No Webpack, no Vite. |
| 8 | **Widget approach** | Vanilla TS → IIFE via esbuild, Shadow DOM | Isolates styles. No framework runtime. Target < 20KB gzipped. Custom element: `<early-pass>`. Auto-injects via `<script data-campaign="...">`. |
| 9 | **Auth model** | Dual auth: campaign API keys + account-level OAuth 2.1 | Campaign API keys (`ep_` prefix, bcrypt-hashed) for embedding the widget. Account API keys (`ep_acc_` prefix, SHA-256 hashed, last_used_at tracked) and OAuth 2.1 access tokens (SHA-256 hashed, 24h TTL) for the dashboard and MCP. Accounts are passwordless — login via magic link email only. |
| 10 | **Multi-tenancy** | Single DB, `campaign_id` on every table | Simple, sufficient at this scale. No per-tenant schemas. Every campaign belongs to an account. |
| 11 | **Queue position** | `base_position - (referrals * boost_weight)`, clamped to 1 | Clear, predictable, easy to explain to users. `boost_weight` is configurable per campaign (default: 1). Expression index on `(base_position - bonus_points)` for efficient leaderboard ranking. |
| 12 | **Idempotency** | Client-supplied `Idempotency-Key` header, stored in Redis, 24h TTL | Standard pattern. Applied to all POST/PATCH endpoints. |
| 13 | **Rate limiting** | Token bucket per IP, direct Redis via `go-redis/redis_rate` | Direct Redis is fine here. Global: 300 req/min per IP. Fraud-layer: 5 signups per IP per campaign per hour. Forwarded headers only trusted from `TRUSTED_PROXIES` CIDR list. |
| 14 | **Webhook delivery** | Direct HTTP dispatch with exponential backoff, max 3 retries | Decoupled from request path. Reliable delivery without a separate queue broker. |
| 15 | **MCP transport** | Streamable HTTP at `/mcp` | Embedded in main API server. Uses `mark3labs/mcp-go`. Auth is account-level only — campaign-scoped keys are rejected. OAuth 2.1 discovery headers served at `/mcp`. stdio transport dropped (was pre-embed). |
| 16 | **Referral code format** | Custom crypto/rand, 8 chars, alphanumeric | Short enough for URLs, low collision probability at expected scale. Implemented in `domain.GenerateReferralCode()` using rejection sampling — no external nanoid library. |
| 17 | **Email provider** | Resend (`resend/resend-go`) | Good deliverability, clean Go SDK, developer-friendly. Sender interface supports NoopSender and LogSender for dev/test. |
| 19 | **Charts (dashboard)** | uPlot | Tiny (< 40KB), fast canvas-based rendering. No Chart.js (heavier). |
| 20 | **Error responses** | RFC 7807 Problem Details (`application/problem+json`) | Standard, machine-readable errors. Base URI: `https://earlypass.dev/errors/`. |
| 21 | **Structured logging** | `slog` (stdlib) | No external logging library needed. JSON output. Trace ID in every log line. X-Trace-ID response header from OTEL span context. |
| 22 | **Config loading** | Environment variables only | No config files in production. `internal/config/` reads from env with validation on startup. |
| 23 | **Test containers** | `testcontainers-go` | Real Postgres + Redis for integration tests. No mocks for the store layer. Shared container per package (set up in `TestMain`). |
| 23b | **Testing mandate** | Unit + integration tests required for all meaningful changes | Domain logic → unit tests. Store methods + API handlers → integration tests (real DB/Redis). There is no such thing as too many tests. Coverage targets: 90%+ domain/store, 80%+ handlers. |
| 23c | **CI gates** | `go vet` + `golangci-lint` + unit tests + integration tests | All must pass on every push. CI uses `go tool golangci-lint` — no external installs. |
| 24 | **Container runtime** | Distroless base image | Minimal attack surface. Multi-stage Docker build. Final image target < 30MB. |
| 25 | **Observability** | OpenTelemetry SDK, OTLP export to collector, Jaeger for traces, Prometheus metrics | OTEL is the standard. Instrument everything from day one. Metric export interval: 30s. Composite propagator: TraceContext + Baggage. |
| 26 | **Account model** | Passwordless accounts, magic link login only | No passwords stored anywhere. Login flow: email → magic link token (with optional OAuth PKCE state in JSONB) → account session. Accounts own campaigns (one-to-many). Slug globally unique; campaign name unique per account. |
| 27 | **OAuth 2.1** | Authorization Code + PKCE, account-scoped tokens | Used by MCP clients and dashboard. Authorization codes: 5-min TTL, single-use. Access tokens: 24h TTL, SHA-256 hashed. No implicit flow. No client secrets for public clients. |
| 28 | **Campaign settings** | JSONB column (`settings`) on `campaigns` table | Holds `BoostWeight` (float64, default 1.0) and `ProductURL` (validated URL origin, used as CTA in invite emails). Avoids schema migrations for new per-campaign config. |
