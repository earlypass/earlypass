package domain_test

import (
	"testing"

	"github.com/earlypass/earlypass/internal/domain"
)

func TestCampaignSettings_MatchesOrigin(t *testing.T) {
	t.Parallel()

	tests := []struct {
		name          string
		productURL    string
		requestOrigin string
		want          bool
	}{
		{
			name:          "exact origin match",
			productURL:    "https://example.com",
			requestOrigin: "https://example.com",
			want:          true,
		},
		{
			name:          "origin derived from full product URL with path",
			productURL:    "https://example.com/product/signup",
			requestOrigin: "https://example.com",
			want:          true,
		},
		{
			name:          "case insensitive match",
			productURL:    "https://example.com/product",
			requestOrigin: "HTTPS://EXAMPLE.COM",
			want:          true,
		},
		{
			name:          "trailing slash on request origin stripped",
			productURL:    "https://example.com/product",
			requestOrigin: "https://example.com/",
			want:          true,
		},
		{
			name:          "port preserved",
			productURL:    "http://localhost:3000/app",
			requestOrigin: "http://localhost:3000",
			want:          true,
		},
		{
			name:          "different subdomain rejected",
			productURL:    "https://example.com/product",
			requestOrigin: "https://app.example.com",
			want:          false,
		},
		{
			name:          "different scheme rejected",
			productURL:    "https://example.com/product",
			requestOrigin: "http://example.com",
			want:          false,
		},
		{
			name:          "different domain rejected",
			productURL:    "https://example.com/product",
			requestOrigin: "https://evil.com",
			want:          false,
		},
		{
			name:          "empty product URL rejects all",
			productURL:    "",
			requestOrigin: "https://example.com",
			want:          false,
		},
		{
			name:          "empty request origin rejected",
			productURL:    "https://example.com/product",
			requestOrigin: "",
			want:          false,
		},
		{
			name:          "port mismatch rejected",
			productURL:    "http://localhost:3000/app",
			requestOrigin: "http://localhost:8080",
			want:          false,
		},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			s := domain.CampaignSettings{ProductURL: tc.productURL}
			got := s.MatchesOrigin(tc.requestOrigin)
			if got != tc.want {
				t.Errorf("MatchesOrigin(%q) with product_url=%q = %v, want %v",
					tc.requestOrigin, tc.productURL, got, tc.want)
			}
		})
	}
}
