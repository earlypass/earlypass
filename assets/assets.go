// Package assets embeds the EarlyPass brand assets (logo, etc.) for serving
// from the Go binary at /assets/*.
package assets

import "embed"

//go:embed logo.svg logo.png
// FS contains the embedded brand assets.
var FS embed.FS
