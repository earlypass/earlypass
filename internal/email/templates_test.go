package email_test

import (
	"strings"
	"testing"

	"github.com/earlypass/earlypass/internal/email"
)

func TestVerificationEmail(t *testing.T) {
	t.Parallel()

	html, text, err := email.VerificationEmail("Acme Launch", "https://example.com/verify/abc123")
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	// HTML must contain key parts.
	mustContain(t, "html", html, "Acme Launch")
	mustContain(t, "html", html, "https://example.com/verify/abc123")
	mustContain(t, "html", html, "Confirm your spot")

	// Plain text must also have the verify URL.
	mustContain(t, "text", text, "https://example.com/verify/abc123")
	mustContain(t, "text", text, "Acme Launch")
}

func TestWelcomeEmail(t *testing.T) {
	t.Parallel()

	html, text, err := email.WelcomeEmail("Acme Launch", "https://example.com?ref=CODE42", 7)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	mustContain(t, "html", html, "Acme Launch")
	mustContain(t, "html", html, "#7")
	mustContain(t, "html", html, "https://example.com?ref=CODE42")
	mustContain(t, "html", html, "right now")
	mustContain(t, "html", html, "Positions are live")

	mustContain(t, "text", text, "#7")
	mustContain(t, "text", text, "https://example.com?ref=CODE42")
	mustContain(t, "text", text, "right now")
	mustContain(t, "text", text, "position is live")
}

func TestReferralNotificationEmail(t *testing.T) {
	t.Parallel()

	html, text, err := email.ReferralNotificationEmail("Acme Launch", "Jane", "https://example.com?ref=CODE42", 3, 4)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	mustContain(t, "html", html, "Acme Launch")
	mustContain(t, "html", html, "Jane")
	mustContain(t, "html", html, "3")
	mustContain(t, "html", html, "#4")
	mustContain(t, "html", html, "https://example.com?ref=CODE42")
	mustContain(t, "html", html, "right now")
	mustContain(t, "html", html, "Positions are live")

	mustContain(t, "text", text, "Jane")
	mustContain(t, "text", text, "3")
	mustContain(t, "text", text, "#4")
	mustContain(t, "text", text, "right now")
	mustContain(t, "text", text, "position is live")
}

func TestInviteEmail_WithProductURL(t *testing.T) {
	t.Parallel()

	html, text, err := email.InviteEmail("Acme Launch", "https://myapp.com/start", "")
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	mustContain(t, "html", html, "Acme Launch")
	mustContain(t, "html", html, "https://myapp.com/start")
	mustContain(t, "html", html, "Get started")

	mustContain(t, "text", text, "Acme Launch")
	mustContain(t, "text", text, "https://myapp.com/start")
}

func TestInviteEmail_EmptyProductURL(t *testing.T) {
	t.Parallel()

	html, text, err := email.InviteEmail("Acme Launch", "", "")
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	mustContain(t, "html", html, "Acme Launch")
	mustNotContain(t, "html", html, `href=""`)

	mustContain(t, "text", text, "Acme Launch")
}

func TestMagicLinkEmail(t *testing.T) {
	t.Parallel()

	html, text, err := email.MagicLinkEmail("123456")
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	mustContain(t, "html", html, "123456")
	mustContain(t, "html", html, "sign-in code")
	mustContain(t, "html", html, "15 minutes")
	mustContain(t, "html", html, "EarlyPass") // branding header

	mustContain(t, "text", text, "123456")
}

func TestLayoutConsistency(t *testing.T) {
	t.Parallel()

	// All HTML emails should share the same base layout structure.
	htmls := map[string]func() (string, string, error){
		"verification": func() (string, string, error) {
			return email.VerificationEmail("Acme", "https://example.com/v")
		},
		"welcome": func() (string, string, error) {
			return email.WelcomeEmail("Acme", "https://example.com?ref=X", 1)
		},
		"referral": func() (string, string, error) {
			return email.ReferralNotificationEmail("Acme", "Jane", "https://example.com?ref=X", 1, 1)
		},
		"invite": func() (string, string, error) {
			return email.InviteEmail("Acme", "https://myapp.com", "")
		},
		"magic_link": func() (string, string, error) {
			return email.MagicLinkEmail("123456")
		},
	}

	sharedMarkers := []string{
		"<!DOCTYPE html>",
		`<meta charset="UTF-8">`,
		`class="wrapper"`,
		`class="header"`,
		`class="footer"`,
		"Sent by EarlyPass",
	}

	for tmplName, fn := range htmls {
		t.Run(tmplName, func(t *testing.T) {
			t.Parallel()
			html, _, err := fn()
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}
			for _, marker := range sharedMarkers {
				mustContain(t, "html("+tmplName+")", html, marker)
			}
		})
	}
}

func TestReferralEmailAccentColor(t *testing.T) {
	t.Parallel()

	html, _, err := email.ReferralNotificationEmail("Acme", "Jane", "https://example.com?ref=X", 2, 3)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	mustContain(t, "html", html, "#059669")
}

func mustNotContain(t *testing.T, label, body, substr string) {
	t.Helper()
	if strings.Contains(body, substr) {
		t.Errorf("%s must not contain %q", label, substr)
	}
}

func mustContain(t *testing.T, label, body, substr string) {
	t.Helper()
	if !strings.Contains(body, substr) {
		t.Errorf("%s does not contain %q", label, substr)
	}
}
