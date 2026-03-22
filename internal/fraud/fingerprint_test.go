package fraud_test

import (
	"strings"
	"testing"

	"github.com/earlypass/earlypass/internal/fraud"
)

func TestNormaliseFingerprint(t *testing.T) {
	t.Parallel()

	t.Run("short fingerprint returned unchanged", func(t *testing.T) {
		t.Parallel()
		fp := "abc123"
		got := fraud.NormaliseFingerprint(fp)
		if got != fp {
			t.Errorf("got %q, want %q", got, fp)
		}
	})

	t.Run("empty string returned unchanged", func(t *testing.T) {
		t.Parallel()
		got := fraud.NormaliseFingerprint("")
		if got != "" {
			t.Errorf("got %q, want empty", got)
		}
	})

	t.Run("exactly 256 chars returned unchanged", func(t *testing.T) {
		t.Parallel()
		fp := strings.Repeat("a", 256)
		got := fraud.NormaliseFingerprint(fp)
		if got != fp {
			t.Errorf("len(got) = %d, want 256", len(got))
		}
	})

	t.Run("longer than 256 chars is truncated to 256", func(t *testing.T) {
		t.Parallel()
		fp := strings.Repeat("x", 300)
		got := fraud.NormaliseFingerprint(fp)
		if len(got) != 256 {
			t.Errorf("len(got) = %d, want 256", len(got))
		}
		if got != fp[:256] {
			t.Errorf("got unexpected value after truncation")
		}
	})

	t.Run("255 chars returned unchanged", func(t *testing.T) {
		t.Parallel()
		fp := strings.Repeat("b", 255)
		got := fraud.NormaliseFingerprint(fp)
		if len(got) != 255 {
			t.Errorf("len(got) = %d, want 255", len(got))
		}
	})
}
