package handler

import (
	"fmt"
	"net/http"

	emailTemplates "github.com/earlypass/earlypass/internal/email"
)

// EmailPreviewHandler serves GET /v1/internal/email-preview/{template}.
//
// It is a dev-only endpoint that returns a rendered HTML email for browser
// inspection. It must NOT be registered in production (DevMode gate in router).
//
// Supported template names:
//   - verification
//   - welcome
//   - referral
//   - signin_code
//   - invite
//
// Query parameters:
//   - campaign_name: campaign display name (default: "Acme Launch")
//   - product_url:   product URL used in the invite CTA (default: "https://your-product.example.com")
func EmailPreviewHandler(w http.ResponseWriter, r *http.Request) {
	tmplName := r.PathValue("template")

	campaignName := r.URL.Query().Get("campaign_name")
	if campaignName == "" {
		campaignName = "Acme Launch"
	}

	productURL := r.URL.Query().Get("product_url")
	if productURL == "" {
		productURL = "https://your-product.example.com"
	}

	const exampleURL = "https://example.com/verify/example-token-abc123"
	const exampleRefLink = "https://example.com?ref=ABC12345"

	var (
		htmlBody string
		err      error
	)

	switch tmplName {
	case "verification":
		htmlBody, _, err = emailTemplates.VerificationEmail(campaignName, exampleURL)
	case "welcome":
		htmlBody, _, err = emailTemplates.WelcomeEmail(campaignName, exampleRefLink, 42)
	case "referral":
		htmlBody, _, err = emailTemplates.ReferralNotificationEmail(campaignName, "Alex", exampleRefLink, 5, 37)
	case "signin_code":
		htmlBody, _, err = emailTemplates.SignInCodeEmail("123456")
	case "invite":
		htmlBody, _, err = emailTemplates.InviteEmail(campaignName, productURL, "")
	default:
		http.Error(w, fmt.Sprintf("unknown template %q — valid: verification, welcome, referral, signin_code, invite", tmplName), http.StatusBadRequest)
		return
	}

	if err != nil {
		http.Error(w, fmt.Sprintf("rendering template: %v", err), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	// htmlBody is generated from our own server-side templates — safe to write.
	_, _ = w.Write([]byte(htmlBody)) //nolint:gosec // template output is safe; no user input in template
}
