package middleware

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestRealIP_NoTrustedProxies(t *testing.T) {
	r := httptest.NewRequest(http.MethodGet, "/", nil)
	r.RemoteAddr = "203.0.113.10:12345"
	r.Header.Set("X-Real-IP", "1.2.3.4")
	r.Header.Set("X-Forwarded-For", "5.6.7.8")

	ip := RealIP(r, nil)
	if ip != "203.0.113.10" {
		t.Errorf("expected RemoteAddr IP 203.0.113.10, got %q", ip)
	}
}

func TestRealIP_NoTrustedProxies_EmptySlice(t *testing.T) {
	r := httptest.NewRequest(http.MethodGet, "/", nil)
	r.RemoteAddr = "203.0.113.10:12345"
	r.Header.Set("X-Real-IP", "1.2.3.4")

	ip := RealIP(r, []string{})
	if ip != "203.0.113.10" {
		t.Errorf("expected RemoteAddr IP 203.0.113.10, got %q", ip)
	}
}

func TestRealIP_TrustedProxy_XRealIP(t *testing.T) {
	r := httptest.NewRequest(http.MethodGet, "/", nil)
	r.RemoteAddr = "10.0.0.1:12345"
	r.Header.Set("X-Real-IP", "203.0.113.42")

	ip := RealIP(r, []string{"10.0.0.0/8"})
	if ip != "203.0.113.42" {
		t.Errorf("expected X-Real-IP 203.0.113.42, got %q", ip)
	}
}

func TestRealIP_TrustedProxy_XForwardedFor(t *testing.T) {
	r := httptest.NewRequest(http.MethodGet, "/", nil)
	r.RemoteAddr = "10.0.0.1:12345"
	r.Header.Set("X-Forwarded-For", "203.0.113.42, 10.0.0.1")

	ip := RealIP(r, []string{"10.0.0.0/8"})
	if ip != "203.0.113.42" {
		t.Errorf("expected X-Forwarded-For first IP 203.0.113.42, got %q", ip)
	}
}

func TestRealIP_UntrustedProxy(t *testing.T) {
	r := httptest.NewRequest(http.MethodGet, "/", nil)
	r.RemoteAddr = "203.0.113.10:12345"
	r.Header.Set("X-Real-IP", "1.2.3.4")

	ip := RealIP(r, []string{"10.0.0.0/8"})
	if ip != "203.0.113.10" {
		t.Errorf("expected RemoteAddr IP 203.0.113.10 (untrusted proxy), got %q", ip)
	}
}

func TestRealIP_TrustedProxy_InvalidXRealIP_FallsBackToXForwardedFor(t *testing.T) {
	r := httptest.NewRequest(http.MethodGet, "/", nil)
	r.RemoteAddr = "10.0.0.1:12345"
	r.Header.Set("X-Real-IP", "not-an-ip")
	r.Header.Set("X-Forwarded-For", "203.0.113.99")

	ip := RealIP(r, []string{"10.0.0.0/8"})
	if ip != "203.0.113.99" {
		t.Errorf("expected X-Forwarded-For 203.0.113.99, got %q", ip)
	}
}

func TestRealIP_TrustedProxy_NoHeaders_FallsBackToRemoteAddr(t *testing.T) {
	r := httptest.NewRequest(http.MethodGet, "/", nil)
	r.RemoteAddr = "10.0.0.1:12345"

	ip := RealIP(r, []string{"10.0.0.0/8"})
	if ip != "10.0.0.1" {
		t.Errorf("expected RemoteAddr IP 10.0.0.1, got %q", ip)
	}
}

func TestRealIP_RemoteAddrWithoutPort(t *testing.T) {
	r := httptest.NewRequest(http.MethodGet, "/", nil)
	r.RemoteAddr = "203.0.113.10"

	ip := RealIP(r, nil)
	if ip != "203.0.113.10" {
		t.Errorf("expected 203.0.113.10, got %q", ip)
	}
}

func TestIsTrustedProxy_ValidCIDR(t *testing.T) {
	if !isTrustedProxy("10.0.0.5", []string{"10.0.0.0/8"}) {
		t.Error("expected 10.0.0.5 to be trusted in 10.0.0.0/8")
	}
}

func TestIsTrustedProxy_OutsideCIDR(t *testing.T) {
	if isTrustedProxy("192.168.1.1", []string{"10.0.0.0/8"}) {
		t.Error("expected 192.168.1.1 to NOT be trusted in 10.0.0.0/8")
	}
}

func TestIsTrustedProxy_InvalidCIDR(t *testing.T) {
	// Invalid CIDR should be skipped, result in not-trusted.
	if isTrustedProxy("10.0.0.1", []string{"not-a-cidr"}) {
		t.Error("expected invalid CIDR to be skipped and return false")
	}
}

func TestIsTrustedProxy_InvalidIP(t *testing.T) {
	if isTrustedProxy("not-an-ip", []string{"10.0.0.0/8"}) {
		t.Error("expected invalid IP to return false")
	}
}
