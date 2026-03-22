package handler

import (
	"testing"
)

func TestBuildInviteLink(t *testing.T) {
	token := "tok123"
	emptyToken := ""
	tests := []struct {
		name       string
		productURL string
		token      *string
		want       string
	}{
		{
			name:       "empty product URL returns empty",
			productURL: "",
			token:      &token,
			want:       "",
		},
		{
			name:       "nil token returns empty",
			productURL: "https://myproduct.com",
			token:      nil,
			want:       "",
		},
		{
			name:       "empty token returns empty",
			productURL: "https://myproduct.com",
			token:      &emptyToken,
			want:       "",
		},
		{
			name:       "plain URL gets invite param appended",
			productURL: "https://myproduct.com",
			token:      &token,
			want:       "https://myproduct.com?invite=tok123",
		},
		{
			name:       "URL with existing query params merges correctly",
			productURL: "https://myproduct.com?utm_source=twitter",
			token:      &token,
			want:       "https://myproduct.com?invite=tok123&utm_source=twitter",
		},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			got := buildInviteLink(tc.productURL, tc.token)
			if got != tc.want {
				t.Errorf("buildInviteLink() = %q, want %q", got, tc.want)
			}
		})
	}
}
