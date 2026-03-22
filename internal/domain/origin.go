package domain

import (
	"fmt"
	"net/url"
	"strings"
)

// parseOrigin extracts and normalizes the "scheme://host[:port]" from a full URL.
// Used internally to derive the allowed origin from a campaign's ProductURL.
func parseOrigin(rawURL string) (string, error) {
	u, err := url.Parse(rawURL)
	if err != nil {
		return "", fmt.Errorf("parsing origin URL: %w", err)
	}
	if u.Scheme != "https" && u.Scheme != "http" {
		return "", nil // not a web URL — MatchesOrigin will return false
	}
	if u.Host == "" {
		return "", nil
	}
	return strings.ToLower(u.Scheme + "://" + u.Host), nil
}

// MatchesOrigin reports whether the given HTTP Origin header value matches
// the origin derived from this campaign's ProductURL. Comparison is case-insensitive.
func (s CampaignSettings) MatchesOrigin(requestOrigin string) bool {
	origin, err := parseOrigin(s.ProductURL)
	if err != nil || origin == "" {
		return false
	}
	normalized := strings.ToLower(strings.TrimRight(requestOrigin, "/"))
	return normalized == origin
}
