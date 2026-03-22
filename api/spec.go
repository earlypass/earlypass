//nolint:revive // "api" is an idiomatic package name for the spec; not meaningless.
package api

import _ "embed"

// Spec is the raw OpenAPI YAML specification.
//
//go:embed openapi.yaml
var Spec []byte
