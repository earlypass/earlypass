package fraud_test

import (
	"testing"

	"github.com/earlypass/earlypass/internal/fraud"
)

func TestIsDisposableEmail(t *testing.T) {
	t.Parallel()

	tests := []struct {
		name  string
		email string
		want  bool
	}{
		{name: "known disposable domain", email: "user@mailinator.com", want: true},
		{name: "known disposable domain uppercase", email: "USER@MAILINATOR.COM", want: true},
		{name: "known disposable domain mixed case", email: "User@Mailinator.Com", want: true},
		{name: "real gmail address", email: "user@gmail.com", want: false},
		{name: "real company address", email: "albert@acme.com", want: false},
		{name: "no @ sign", email: "notanemail", want: false},
		{name: "empty string", email: "", want: false},
		{name: "trashmail disposable", email: "test@trashmail.com", want: true},
		{name: "yopmail disposable", email: "anything@yopmail.com", want: true},
		{name: "subdomain of real domain", email: "user@mail.gmail.com", want: false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			got := fraud.IsDisposableEmail(tt.email)
			if got != tt.want {
				t.Errorf("IsDisposableEmail(%q) = %v, want %v", tt.email, got, tt.want)
			}
		})
	}
}
