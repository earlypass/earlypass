# Contributing to EarlyPass

Thank you for your interest in contributing to EarlyPass! This document explains how to get involved.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold these standards.

## Getting Started

### Prerequisites

- [mise](https://mise.jdx.dev/) — manages Go 1.26 + Node 22
- [kind](https://kind.sigs.k8s.io/) — local Kubernetes cluster
- [ctlptl](https://github.com/tilt-dev/ctlptl) — cluster + local registry manager
- [tilt](https://tilt.dev/) — dev environment orchestrator
- [kubectl](https://kubernetes.io/docs/tasks/tools/) and [helm](https://helm.sh/)
- [Docker](https://docs.docker.com/get-docker/)

### Setup

```bash
# Install Go and Node via mise
mise install

# Create the local Kind cluster (once)
make cluster-up

# Start the full stack with hot-reload
make dev
```

See [README.md](README.md) for full setup instructions.

## How to Contribute

### Reporting Bugs

1. Search [existing issues](https://github.com/earlypass/earlypass/issues) first.
2. If not found, open a [bug report](https://github.com/earlypass/earlypass/issues/new?template=bug_report.md).
3. Include reproduction steps, expected vs actual behavior, and environment details.

### Suggesting Features

1. Search [existing issues](https://github.com/earlypass/earlypass/issues) first.
2. Open a [feature request](https://github.com/earlypass/earlypass/issues/new?template=feature_request.md) with a clear use case.

### Submitting Code Changes

1. Fork the repository and create a branch from `main`:
   ```bash
   git checkout -b feat/my-feature
   ```
2. Make your changes following the [development workflow](#development-workflow).
3. Ensure all checks pass:
   ```bash
   make check   # vet + lint + unit tests
   make test-integration  # integration tests
   ```
4. Open a pull request.

## Development Workflow

### Project Structure

```
internal/
  api/         — HTTP router, middleware, handlers (generated types from openapi.yaml)
  domain/      — Core business logic (no HTTP/DB dependencies)
  store/        — Store interfaces and PostgreSQL implementations
  fraud/        — Disposable email and IP rate limiting
  email/        — Resend integration
  dashboard/    — Dashboard auth and embedded static assets
cmd/
  server/       — Main binary
migrations/     — goose SQL migrations
widget/         — Vanilla TypeScript widget (esbuild)
dashboard/      — Preact + htm SPA
```

### Key Commands

| Command | Description |
|---------|-------------|
| `make build` | Compile the server binary |
| `make test` | Run unit tests |
| `make test-integration` | Run integration tests (needs Docker) |
| `make check` | vet + lint + unit tests (run before every commit) |
| `make lint` | Run golangci-lint |
| `make generate` | Regenerate Go types from `api/openapi.yaml` |
| `make migrate` | Run pending DB migrations |

### Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add campaign pause/resume
fix: handle duplicate signup gracefully
docs: update self-hosting guide
chore: bump Go to 1.26.1
test: add integration tests for invite flow
```

### API Changes

The `api/openapi.yaml` file is the **source of truth** for all API endpoints. To add or modify an endpoint:

1. Update `api/openapi.yaml`
2. Run `make generate` to regenerate Go types
3. Implement the handler in `internal/api/handler/`
4. Add tests

### Database Changes

Migrations live in `migrations/001_schema.sql` (single file during pre-deployment development). Add new SQL at the end and run `make migrate`.

## Pull Request Guidelines

- Keep PRs focused — one feature or fix per PR.
- Include tests for new functionality.
- Update documentation when changing public APIs or configuration.
- Ensure `make check` passes before requesting review.
- Describe your changes clearly in the PR description (what, why, and how to test).

## Security

For security vulnerabilities, please see [SECURITY.md](SECURITY.md). **Do not open a public issue for security bugs.**

## License

By contributing, you agree that your contributions will be licensed under the same [Business Source License 1.1](LICENSE) as the project.
