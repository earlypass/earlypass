package handler

import (
	"testing"
)

func TestMaskEmail(t *testing.T) {
	t.Parallel()

	cases := []struct {
		name  string
		email string
		want  string
	}{
		{
			name:  "standard email",
			email: "alice@example.com",
			want:  "a***@example.com",
		},
		{
			name:  "single char local part",
			email: "a@example.com",
			want:  "a***@example.com",
		},
		{
			name:  "two char local part",
			email: "ab@example.com",
			want:  "a***@example.com",
		},
		{
			name:  "long local part",
			email: "verylongname@example.com",
			want:  "v***@example.com",
		},
		{
			name:  "no @ returns placeholder",
			email: "notanemail",
			want:  "***",
		},
		{
			name:  "@ at start returns placeholder",
			email: "@example.com",
			want:  "***",
		},
		{
			name:  "subdomain in domain",
			email: "user@mail.example.com",
			want:  "u***@mail.example.com",
		},
		{
			name:  "empty string returns placeholder",
			email: "",
			want:  "***",
		},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			got := maskEmail(tc.email)
			if got != tc.want {
				t.Errorf("maskEmail(%q) = %q, want %q", tc.email, got, tc.want)
			}
		})
	}
}
