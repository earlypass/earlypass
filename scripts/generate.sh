#!/usr/bin/env bash
# generate.sh — Regenerate Go types from api/openapi.yaml via oapi-codegen.
# Called by `make generate`.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

mkdir -p "${REPO_ROOT}/internal/api/generated"

go tool oapi-codegen \
  --config "${REPO_ROOT}/oapi-codegen.yaml" \
  "${REPO_ROOT}/api/openapi.yaml"

echo "✓ Generated internal/api/generated/api.gen.go"
