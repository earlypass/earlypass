package handler_test

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/earlypass/earlypass/internal/api/handler"
)

func TestEmailPreviewHandler_Invite(t *testing.T) {
	t.Parallel()

	t.Run("no query params uses placeholder product URL", func(t *testing.T) {
		t.Parallel()

		req := httptest.NewRequest(http.MethodGet, "/v1/internal/email-preview/invite", nil)
		req.SetPathValue("template", "invite")
		rec := httptest.NewRecorder()

		handler.EmailPreviewHandler(rec, req)

		if rec.Code != http.StatusOK {
			t.Fatalf("expected 200, got %d: %s", rec.Code, rec.Body.String())
		}
		body := rec.Body.String()
		if !strings.Contains(body, "Acme Launch") {
			t.Errorf("body does not contain default campaign name")
		}
		if !strings.Contains(body, "Get started") {
			t.Errorf("body does not contain CTA button — placeholder product URL should make it visible")
		}
	})

	t.Run("explicit product_url appears in CTA", func(t *testing.T) {
		t.Parallel()

		req := httptest.NewRequest(http.MethodGet, "/v1/internal/email-preview/invite?product_url=https://myapp.com", nil)
		req.SetPathValue("template", "invite")
		rec := httptest.NewRecorder()

		handler.EmailPreviewHandler(rec, req)

		if rec.Code != http.StatusOK {
			t.Fatalf("expected 200, got %d: %s", rec.Code, rec.Body.String())
		}
		body := rec.Body.String()
		if !strings.Contains(body, "https://myapp.com") {
			t.Errorf("body does not contain the provided product URL")
		}
		if !strings.Contains(body, "Get started") {
			t.Errorf("body does not contain CTA button")
		}
	})

	t.Run("explicit campaign_name appears in output", func(t *testing.T) {
		t.Parallel()

		req := httptest.NewRequest(http.MethodGet, "/v1/internal/email-preview/invite?campaign_name=MyStartup", nil)
		req.SetPathValue("template", "invite")
		rec := httptest.NewRecorder()

		handler.EmailPreviewHandler(rec, req)

		if rec.Code != http.StatusOK {
			t.Fatalf("expected 200, got %d: %s", rec.Code, rec.Body.String())
		}
		if !strings.Contains(rec.Body.String(), "MyStartup") {
			t.Errorf("body does not contain the provided campaign name")
		}
	})
}

func TestEmailPreviewHandler_UnknownTemplate(t *testing.T) {
	t.Parallel()

	req := httptest.NewRequest(http.MethodGet, "/v1/internal/email-preview/bogus", nil)
	req.SetPathValue("template", "bogus")
	rec := httptest.NewRecorder()

	handler.EmailPreviewHandler(rec, req)

	if rec.Code != http.StatusBadRequest {
		t.Fatalf("expected 400, got %d", rec.Code)
	}
	if !strings.Contains(rec.Body.String(), "invite") {
		t.Errorf("error message should list 'invite' as a valid template")
	}
}
