package email

import (
	"bytes"
	"embed"
	"fmt"
	"html/template"
	texttemplate "text/template"
)

//go:embed templates/*.html templates/*.txt
var templateFS embed.FS

// templateData is a shared data carrier for all email templates.
type templateData struct {
	CampaignName  string
	Email         string
	FirstName     string       // referrer's first name for personalisation
	VerifyURL     string       // verification link
	ReferralLink  string       // the signup's shareable referral URL
	ReferralCount int          // how many referrals the signup has
	Position      int          // effective queue position
	FromName      string       // visible sender name (e.g. "EarlyPass")
	ProductURL    string       // product URL used in invite email CTA
	InviteLink    string       // personalised invite link including ?invite=<token>
	AccentColor   template.CSS // hex colour used in header and button; defaults to #6366f1
}

// VerificationEmail returns the HTML and plain-text bodies for the verification email.
func VerificationEmail(campaignName, verifyURL string) (html, text string, err error) {
	return render("verification", templateData{
		CampaignName: campaignName,
		VerifyURL:    verifyURL,
	})
}

// WelcomeEmail returns the HTML and plain-text bodies for the post-verification welcome email.
func WelcomeEmail(campaignName, referralLink string, position int) (html, text string, err error) {
	return render("welcome", templateData{
		CampaignName: campaignName,
		ReferralLink: referralLink,
		Position:     position,
	})
}

// ReferralNotificationEmail returns the HTML and plain-text bodies for the referral notification.
// firstName is the referrer's given name used to personalise the greeting and subject line.
func ReferralNotificationEmail(campaignName, firstName, referralLink string, referralCount, position int) (html, text string, err error) {
	return render("referral", templateData{
		CampaignName:  campaignName,
		FirstName:     firstName,
		ReferralLink:  referralLink,
		ReferralCount: referralCount,
		Position:      position,
		AccentColor:   "#059669",
	})
}

// InviteEmail returns the HTML and plain-text bodies for the access-granted invite email.
// productURL is the base CTA link destination (may be empty — template handles it gracefully).
// inviteLink is the personalised URL including the invite token query param (e.g. ?invite=<token>).
// If inviteLink is non-empty it takes precedence over productURL in the template CTA.
func InviteEmail(campaignName, productURL, inviteLink string) (html, text string, err error) {
	return render("invite", templateData{
		CampaignName: campaignName,
		ProductURL:   productURL,
		InviteLink:   inviteLink,
	})
}

// MagicLinkEmail returns the HTML and plain-text bodies for the magic sign-in link email.
// verifyURL is the full URL the user should click to authenticate.
func MagicLinkEmail(verifyURL string) (html, text string, err error) {
	return render("magic_link", templateData{
		VerifyURL: verifyURL,
	})
}

// render loads and executes the named HTML and text templates from the embedded FS.
func render(name string, data templateData) (string, string, error) {
	if data.AccentColor == "" {
		data.AccentColor = "#6366f1"
	}

	layoutSrc, err := templateFS.ReadFile("templates/layout.html")
	if err != nil {
		return "", "", fmt.Errorf("reading layout template: %w", err)
	}
	htmlSrc, err := templateFS.ReadFile(fmt.Sprintf("templates/%s.html", name))
	if err != nil {
		return "", "", fmt.Errorf("reading html template %q: %w", name, err)
	}
	ht, err := template.New("layout").Parse(string(layoutSrc))
	if err != nil {
		return "", "", fmt.Errorf("parsing layout template: %w", err)
	}
	if _, err = ht.Parse(string(htmlSrc)); err != nil {
		return "", "", fmt.Errorf("parsing html template %q: %w", name, err)
	}
	var hb bytes.Buffer
	if err = ht.Execute(&hb, data); err != nil {
		return "", "", fmt.Errorf("executing html template %q: %w", name, err)
	}

	txtSrc, err := templateFS.ReadFile(fmt.Sprintf("templates/%s.txt", name))
	if err != nil {
		return "", "", fmt.Errorf("reading text template %q: %w", name, err)
	}
	tt, err := texttemplate.New(name).Parse(string(txtSrc))
	if err != nil {
		return "", "", fmt.Errorf("parsing text template %q: %w", name, err)
	}
	var tb bytes.Buffer
	if err = tt.Execute(&tb, data); err != nil {
		return "", "", fmt.Errorf("executing text template %q: %w", name, err)
	}

	return hb.String(), tb.String(), nil
}
