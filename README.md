# EarlyPass

<img src="assets/logo.svg" alt="EarlyPass" width="120" />

> Drop-in viral waitlist widget with referral mechanics, leaderboard, and analytics.

Add a viral waitlist to any site in 5 minutes. Referral tracking, milestone rewards, leaderboard, analytics, and access granting — built API-first so human founders and AI agents can manage campaigns programmatically.

**Open-source (Business Source License).** Free to self-host.

> **Work in progress — not production ready.** This project is under active development. APIs may change, features may be incomplete, and it has not been hardened for production use. Use at your own risk.

---

## Quick Start (Self-Hosted)

**Docker Compose (recommended):**
```bash
curl -O https://www.earlypass.app/docker-compose.yml
export DASHBOARD_JWT_SECRET=$(openssl rand -hex 32)
docker compose up -d
```

**Single container** (bring your own Postgres + Redis):
```bash
docker run -d -p 3000:3000 \
  -e DATABASE_URL="postgres://user:pass@host:5432/earlypass" \
  -e REDIS_URL="redis://host:6379" \
  -e DASHBOARD_JWT_SECRET="$(openssl rand -hex 32)" \
  ghcr.io/earlypass/earlypass:latest
```

**Kubernetes (Helm):**
```bash
helm install earlypass oci://ghcr.io/earlypass/charts/earlypass \
  --set secrets.databaseUrl="postgres://..." \
  --set secrets.dashboardJwtSecret="$(openssl rand -hex 32)"
```

See the [self-hosting guide](https://www.earlypass.app/docs/self-hosting) for full setup instructions.

## Embed the Widget

```html
<script src="https://earlypass.example.com/widget/widget.js"
  data-campaign="your-campaign-slug">
</script>
```

> **Domain restriction:** If you set a `product_url` on your campaign, the widget will only accept signups from that origin. Requests from other origins are rejected with 403. Leave `product_url` empty to allow embeds from any origin.

## MCP Server

EarlyPass exposes a hosted [Model Context Protocol](https://modelcontextprotocol.io/) server at `/mcp`, enabling AI agents and MCP clients (Cursor, Claude Desktop, MCP Inspector, etc.) to manage waitlist campaigns programmatically.

### Connecting

Point your MCP client at:
```
https://your-earlypass-domain.com/mcp
```

The endpoint uses **MCP Streamable HTTP** transport. Authentication is via OAuth 2.1 (PKCE) — clients that support dynamic client registration (e.g. MCP Inspector, Claude Desktop) will discover and complete the flow automatically using:
```
GET /.well-known/oauth-authorization-server
POST /oauth/register     (dynamic client registration — RFC 7591)
GET  /oauth/authorize
POST /oauth/token
```

Alternatively, pass an account API key (`ep_acc_...`) as a Bearer token for non-interactive use:
```
Authorization: Bearer ep_acc_your_key_here
```

### Available Tools

| Tool | Description |
|------|-------------|
| `list_campaigns` | List all campaigns for the authenticated account |
| `create_campaign` | Create a new waitlist campaign |
| `get_campaign` | Get campaign details by ID |
| `update_campaign` | Update campaign settings |
| `get_campaign_stats` | Get signup counts, referral totals, and daily breakdown |
| `list_signups` | List signups for a campaign with pagination and status filter |
| `export_signups` | Export all signups as JSON or CSV (up to 10,000 rows) |
| `invite_signups` | Grant access to the top N verified signups (sends invite emails) |
| `get_invite_token` | Check whether an invite token is `active` or `redeemed` |
| `redeem_invite_token` | Mark an invite token as redeemed (idempotent) |
| `manage_webhook` | Create, list, or delete webhook endpoints for a campaign |
| `get_leaderboard` | Get top referrers ranked by referral count |
| `get_widget_embed` | Get the `<script>` embed snippet for a campaign |

All tools require account-level authentication and enforce campaign ownership — you can only operate on campaigns belonging to your account.

---

## Access Granting & Invite Tokens

When you invite signups via `POST /api/v1/campaigns/{id}/signups/invite`, each invitee receives an email with a personalised link containing `?invite=<token>`. Your product backend can verify and redeem these tokens:

```
GET  /api/v1/invites/{token}        → { status: "active"|"redeemed", email, ... }
POST /api/v1/invites/{token}/redeem → marks token redeemed (idempotent)
```

Tokens expire 30 days after the invite is sent. No Bearer auth required — the token is the credential.

---

## Local Development

### Prerequisites

- [mise](https://mise.jdx.dev/) — manages Go 1.26 + Node 22
- [kind](https://kind.sigs.k8s.io/) — local Kubernetes cluster (`brew install kind`)
- [ctlptl](https://github.com/tilt-dev/ctlptl) — cluster + local registry manager (`brew install tilt-dev/tap/ctlptl`)
- [tilt](https://tilt.dev/) — dev environment orchestrator (`brew install tilt`)
- [kubectl](https://kubernetes.io/docs/tasks/tools/) and [helm](https://helm.sh/) (used internally by Tilt)

```bash
mise install       # installs Go 1.26 + Node 22
```

### One-time cluster setup

```bash
make cluster-up    # creates the Kind cluster (only needed once)
```

### Start the full stack

```bash
make dev           # runs tilt up — starts all services in Kubernetes
```

Open the Tilt UI at http://localhost:10350 to monitor all resources. The Go app is rebuilt and redeployed automatically when `.go` files change.

- API: http://localhost:3000/api/v1/
- Dashboard: http://localhost:3000/dashboard/
- Widget: http://localhost:3000/widget/widget.js
- MCP: http://localhost:3000/mcp
- Jaeger tracing UI: http://localhost:16686
- Prometheus: http://localhost:9090
- Grafana dashboards: http://localhost:3001

### Individual commands

```bash
make build          # compile the server binary → bin/server
make build-widget   # bundle the JS widget → widget/dist/widget.js

make test               # unit tests
make test-integration   # integration tests (needs Docker)
make check              # vet + lint + unit tests — run before every commit

make generate       # regenerate Go types from api/openapi.yaml
make migrate        # run pending DB migrations
make migrate-down   # roll back the last migration
```

### Health check

```bash
curl localhost:3000/healthz
# → {"status":"ok","components":{"database":"ok","redis":"ok"}}
```

### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | yes | PostgreSQL connection string |
| `REDIS_URL` | yes | Redis connection string |
| `EMAIL_FROM` | no | From address for transactional email |
| `RESEND_API_KEY` | no | Resend API key (leave empty to disable email) |
| `BASE_URL` | no | Public base URL used to build links in emails, e.g. `https://api.earlypass.app` (no trailing slash) |
| `DASHBOARD_JWT_SECRET` | no | HMAC-SHA256 key for dashboard auth cookies (`openssl rand -hex 32`). Random per-process key used if unset — sessions won't survive restarts |
| `DEV_MODE` | no | Set to `true` to enable dev-only endpoints (email preview). Never set in production |
| `TRUSTED_PROXIES` | no | Comma-separated CIDR ranges trusted to set `X-Real-IP`/`X-Forwarded-For`, e.g. `10.0.0.0/8` |
| `PORT` | no | HTTP port (default: `3000`) |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | no | OTLP collector endpoint for traces |
| `ADMIN_API_KEY` | no | Bearer token for the admin API. Admin API disabled if unset |
| `ADMIN_PORT` | no | Admin API port (default: `3001`). Should be firewalled in production |
| `SIGNUP_MODE` | no | `open` (default) or `closed`. Closed mode restricts sign-up to pre-existing accounts |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| API server | Go 1.26, chi router |
| Database | PostgreSQL 16 (pgx/v5, no ORM) |
| Cache / rate limiting | Redis 7 (go-redis) |
| Observability | OpenTelemetry → OTLP → Jaeger (traces) + Prometheus + Grafana (metrics) |
| Widget | Vanilla TypeScript, esbuild IIFE, Shadow DOM, < 20KB gzipped |
| Dashboard | Preact + htm (no build step), embedded in Go binary |
| MCP server | mark3labs/mcp-go (stdio + SSE/streamable HTTP) |
| Deployment | Docker / Docker Compose / Kubernetes (Helm chart) |

## Documentation

| Guide | Description |
|-------|-------------|
| [Getting Started](https://www.earlypass.app/docs/getting-started) | Create a campaign, embed the widget, invite users |
| [Widget Reference](https://www.earlypass.app/docs/widget) | Data attributes, theming, dark mode |
| [API Reference](https://www.earlypass.app/docs/api) | Interactive REST docs (Scalar) |
| [MCP Server](https://www.earlypass.app/docs/mcp) | Claude Desktop & Cursor integration |

## License

[Business Source License 1.1](./LICENSE) — free to self-host, competing SaaS offering not permitted. Converts to Apache 2.0 on 2030-03-02.
