// Package pages embeds static HTML pages served by the application.
package pages

import _ "embed"

// VerifiedHTML is the email confirmation success page served at GET /verified.
//
//go:embed verified.html
var VerifiedHTML []byte
