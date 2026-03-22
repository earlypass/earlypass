//go:build integration

package handler_test

import (
	"net/http"
	"net/url"
	"strings"
	"testing"
	"time"
)

// TestEmail_SignupSendsVerification asserts that creating a signup triggers a
// verification email to the signup address with campaign-specific content.
func TestEmail_SignupSendsVerification(t *testing.T) {
	ts := newTestServer(t)
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Verify Campaign"))

	ts.emails.Reset()
	resp := ts.doSignup(t, campaignID, map[string]any{"email": "verify-me@example.com"}, nil)
	discard(resp)
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("want 201, got %d", resp.StatusCode)
	}

	sent := ts.emails.Sent()
	if len(sent) != 1 {
		t.Fatalf("want 1 email, got %d", len(sent))
	}
	e := sent[0]
	if e.To != "verify-me@example.com" {
		t.Errorf("To: want %q, got %q", "verify-me@example.com", e.To)
	}
	if !strings.Contains(e.Subject, "Confirm") {
		t.Errorf("Subject: want to contain %q, got %q", "Confirm", e.Subject)
	}
	if !strings.Contains(e.HTML, "<!DOCTYPE html>") {
		t.Error("HTML: want shared layout (<!DOCTYPE html>)")
	}
	if !strings.Contains(e.HTML, "Confirm your spot") {
		t.Error("HTML: want verification CTA text")
	}
	if e.Text == "" {
		t.Error("Text: want non-empty plain-text body")
	}
}

// TestEmail_VerifyEmailSendsWelcome asserts that confirming an email sends a
// welcome email with referral link and queue position.
func TestEmail_VerifyEmailSendsWelcome(t *testing.T) {
	ts := newTestServer(t)
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Welcome Campaign"))

	resp := ts.doSignup(t, campaignID, map[string]any{"email": "welcome@example.com"}, nil)
	discard(resp)
	token := ts.verificationToken(t, campaignID, "welcome@example.com")

	ts.emails.Reset()
	resp = ts.do(t, http.MethodGet, "/api/v1/verify/"+token, nil, nil)
	discard(resp)

	// Welcome email is sent from an async goroutine; wait for it.
	if !ts.emails.WaitForCount(1, 2*time.Second) {
		t.Fatalf("want 1 welcome email within 2s, got %d", len(ts.emails.Sent()))
	}
	sent := ts.emails.Sent()
	if len(sent) != 1 {
		t.Fatalf("want 1 welcome email, got %d", len(sent))
	}
	e := sent[0]
	if e.To != "welcome@example.com" {
		t.Errorf("To: want %q, got %q", "welcome@example.com", e.To)
	}
	if !strings.Contains(e.Subject, "waitlist") {
		t.Errorf("Subject: want to contain %q, got %q", "waitlist", e.Subject)
	}
	if !strings.Contains(e.HTML, "<!DOCTYPE html>") {
		t.Error("HTML: want shared layout (<!DOCTYPE html>)")
	}
	if e.Text == "" {
		t.Error("Text: want non-empty plain-text body")
	}
}

// TestEmail_ReferralSendsNotification asserts that a signup with a valid
// referral code sends two emails: a verification to the new signup and a
// referral notification to the referrer.
func TestEmail_ReferralSendsNotification(t *testing.T) {
	ts := newTestServer(t)
	_, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Referral Campaign"))

	// Create the referrer.
	resp := ts.doSignup(t, campaignID, map[string]any{"email": "referrer@example.com"}, nil)
	var referrerBody struct {
		ReferralCode string `json:"referral_code"`
	}
	decode(t, resp, &referrerBody)
	if referrerBody.ReferralCode == "" {
		t.Fatal("want non-empty referral_code in signup response")
	}

	ts.emails.Reset()

	// New signup using the referral code.
	resp = ts.doSignup(t, campaignID,
		map[string]any{"email": "referred@example.com", "referral_code": referrerBody.ReferralCode}, nil)
	discard(resp)
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("want 201, got %d", resp.StatusCode)
	}

	sent := ts.emails.Sent()
	if len(sent) != 2 {
		t.Fatalf("want 2 emails (verification + referral notification), got %d", len(sent))
	}

	toAddrs := map[string]bool{}
	for _, e := range sent {
		toAddrs[e.To] = true
		if !strings.Contains(e.HTML, "<!DOCTYPE html>") {
			t.Errorf("email to %s: want shared layout (<!DOCTYPE html>)", e.To)
		}
	}
	if !toAddrs["referred@example.com"] {
		t.Error("want verification email to referred@example.com")
	}
	if !toAddrs["referrer@example.com"] {
		t.Error("want referral notification to referrer@example.com")
	}
}

// TestEmail_MagicLinkAPI asserts that POST /api/v1/auth/magic-link sends a
// styled magic link email.
func TestEmail_MagicLinkAPI(t *testing.T) {
	ts := newTestServer(t)
	ts.emails.Reset()

	resp := ts.do(t, http.MethodPost, "/api/v1/auth/magic-link",
		map[string]any{"email": "login@example.com"}, nil)
	discard(resp)
	if resp.StatusCode != http.StatusAccepted {
		t.Fatalf("want 202, got %d", resp.StatusCode)
	}

	sent := ts.emails.Sent()
	if len(sent) != 1 {
		t.Fatalf("want 1 email, got %d", len(sent))
	}
	e := sent[0]
	if e.To != "login@example.com" {
		t.Errorf("To: want %q, got %q", "login@example.com", e.To)
	}
	if !strings.Contains(strings.ToLower(e.Subject), "sign-in") {
		t.Errorf("Subject: want to contain %q, got %q", "sign-in", e.Subject)
	}
	if !strings.Contains(e.HTML, "<!DOCTYPE html>") {
		t.Error("HTML: want shared layout (<!DOCTYPE html>)")
	}
	if !strings.Contains(e.HTML, "Sign in to EarlyPass") {
		t.Error("HTML: want magic link CTA text")
	}
	if !strings.Contains(e.HTML, "15 minutes") {
		t.Error("HTML: want expiry notice")
	}
	if e.Text == "" {
		t.Error("Text: want non-empty plain-text body")
	}
}

// TestEmail_DashboardLogin asserts that POST /dashboard/login sends a styled
// magic link email via the dashboard handler.
func TestEmail_DashboardLogin(t *testing.T) {
	ts := newTestServer(t)
	ts.emails.Reset()

	formBody := url.Values{"email": {"dashboard@example.com"}}.Encode()
	req, err := http.NewRequest(http.MethodPost, ts.URL+"/dashboard/login",
		strings.NewReader(formBody))
	if err != nil {
		t.Fatalf("building request: %v", err)
	}
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	resp, err := ts.Client().Do(req)
	if err != nil {
		t.Fatalf("POST /dashboard/login: %v", err)
	}
	discard(resp)

	sent := ts.emails.Sent()
	if len(sent) != 1 {
		t.Fatalf("want 1 email, got %d", len(sent))
	}
	e := sent[0]
	if e.To != "dashboard@example.com" {
		t.Errorf("To: want %q, got %q", "dashboard@example.com", e.To)
	}
	if !strings.Contains(strings.ToLower(e.Subject), "sign-in") {
		t.Errorf("Subject: want to contain %q, got %q", "sign-in", e.Subject)
	}
	if !strings.Contains(e.HTML, "<!DOCTYPE html>") {
		t.Error("HTML: want shared layout (<!DOCTYPE html>)")
	}
	if !strings.Contains(e.HTML, "Sign in to EarlyPass") {
		t.Error("HTML: want magic link CTA text")
	}
}

// TestEmail_InviteTopN asserts that inviting signups sends styled invite emails
// to all newly invited addresses. Emails are sent asynchronously so the test
// waits up to 2 s for them to arrive.
func TestEmail_InviteTopN(t *testing.T) {
	ts := newTestServer(t)
	accountKey, _, campaignID := createCampaignWithAuth(t, ts, uniqueName("Invite Campaign"))
	auth := map[string]string{"Authorization": "Bearer " + accountKey}

	// Create and verify two signups so they become eligible for invite.
	inviteAddrs := []string{"invitee1@example.com", "invitee2@example.com"}
	for _, addr := range inviteAddrs {
		resp := ts.doSignup(t, campaignID, map[string]any{"email": addr}, nil)
		discard(resp)
		token := ts.verificationToken(t, campaignID, addr)
		resp = ts.do(t, http.MethodGet, "/api/v1/verify/"+token, nil, nil)
		discard(resp)
	}

	// Flush all setup emails (2 verification + 2 async welcome) before the invite.
	// WaitForCount(4) ensures the handlePostVerification goroutines finish before
	// Reset clears the slate, preventing welcome emails from leaking into invite assertions.
	ts.emails.WaitForCount(4, 2*time.Second)
	ts.emails.Reset()

	resp := ts.do(t, http.MethodPost, "/api/v1/campaigns/"+campaignID+"/signups/invite",
		map[string]any{"count": 2}, auth)
	discard(resp)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("want 200, got %d", resp.StatusCode)
	}

	// Invite emails are fire-and-forget — wait for the goroutine to deliver them.
	if !ts.emails.WaitForCount(2, 2*time.Second) {
		t.Fatalf("want 2 invite emails within 2s, got %d", len(ts.emails.Sent()))
	}

	sent := ts.emails.Sent()
	toAddrs := map[string]bool{}
	for _, e := range sent {
		toAddrs[e.To] = true
		if !strings.Contains(e.Subject, "early access") {
			t.Errorf("Subject: want to contain %q, got %q", "early access", e.Subject)
		}
		if !strings.Contains(e.HTML, "<!DOCTYPE html>") {
			t.Errorf("email to %s: want shared layout (<!DOCTYPE html>)", e.To)
		}
	}
	for _, addr := range inviteAddrs {
		if !toAddrs[addr] {
			t.Errorf("want invite email to %q", addr)
		}
	}
}
