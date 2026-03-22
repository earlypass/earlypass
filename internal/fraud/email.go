// Package fraud provides disposable-email detection and signup rate limiting.
package fraud

import (
	_ "embed"
	"strings"
)

//go:embed disposable_domains.txt
var disposableDomainsRaw string

// disposableDomains is the set of known disposable email domains.
var disposableDomains map[string]struct{}

func init() {
	lines := strings.Split(disposableDomainsRaw, "\n")
	disposableDomains = make(map[string]struct{}, len(lines))
	for _, line := range lines {
		d := strings.TrimSpace(strings.ToLower(line))
		if d == "" || strings.HasPrefix(d, "#") {
			continue
		}
		disposableDomains[d] = struct{}{}
	}
}

// IsDisposableEmail reports whether the email address uses a known disposable domain.
func IsDisposableEmail(email string) bool {
	at := strings.LastIndex(email, "@")
	if at < 0 {
		return false
	}
	domain := strings.ToLower(email[at+1:])
	_, ok := disposableDomains[domain]
	return ok
}
