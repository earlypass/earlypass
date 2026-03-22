// Package widget embeds the compiled EarlyPass widget bundle for serving
// from the Go binary.
package widget

import (
	"crypto/sha256"
	_ "embed"
	"encoding/hex"
)

//go:embed dist/widget.js
// JS is the compiled widget bundle, embedded at build time.
var JS []byte

// Hash is the first 8 hex characters of the SHA-256 of the widget bundle.
// Used to construct cache-busted URLs: /widget.v{Hash}.js
var Hash = func() string {
	sum := sha256.Sum256(JS)
	return hex.EncodeToString(sum[:])[:8]
}()
