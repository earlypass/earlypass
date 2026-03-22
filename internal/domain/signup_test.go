package domain

import (
	"testing"
	"time"

	"github.com/google/uuid"
)

func TestGenerateReferralCode(t *testing.T) {
	t.Run("produces 8-character string", func(t *testing.T) {
		code, err := GenerateReferralCode()
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if len(code) != referralCodeLength {
			t.Errorf("len = %d, want %d", len(code), referralCodeLength)
		}
	})

	t.Run("only alphanumeric characters", func(t *testing.T) {
		code, err := GenerateReferralCode()
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		for _, ch := range code {
			if !isAlphanumeric(ch) {
				t.Errorf("non-alphanumeric character %q in code %q", ch, code)
			}
		}
	})

	t.Run("generates unique codes", func(t *testing.T) {
		seen := make(map[string]struct{})
		for i := range 100 {
			code, err := GenerateReferralCode()
			if err != nil {
				t.Fatalf("iteration %d: unexpected error: %v", i, err)
			}
			if _, dup := seen[code]; dup {
				t.Errorf("duplicate code %q at iteration %d", code, i)
			}
			seen[code] = struct{}{}
		}
	})
}

func TestSignupEffectivePosition(t *testing.T) {
	cases := []struct {
		name         string
		base         int
		bonusPoints  int
		wantEffective int
	}{
		{"no referrals", 10, 0, 10},
		{"some referrals", 10, 3, 7},
		{"referrals exceed base", 3, 5, 1},
		{"exactly at one", 5, 4, 1},
		{"clamped to 1", 1, 10, 1},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			s := &Signup{BasePosition: tc.base, BonusPoints: tc.bonusPoints}
			got := s.EffectivePosition()
			if got != tc.wantEffective {
				t.Errorf("EffectivePosition() = %d, want %d", got, tc.wantEffective)
			}
		})
	}
}

func TestSignupRecalcBonusPoints(t *testing.T) {
	s := &Signup{ReferralCount: 5}
	s.RecalcBonusPoints(2.0)
	if s.BonusPoints != 10 {
		t.Errorf("BonusPoints = %d, want 10", s.BonusPoints)
	}

	s.RecalcBonusPoints(1.5)
	if s.BonusPoints != 7 {
		t.Errorf("BonusPoints = %d, want 7", s.BonusPoints)
	}
}

func TestSignupValidate(t *testing.T) {
	validSignup := func() *Signup {
		return &Signup{
			CampaignID:   uuid.New(),
			Email:        "user@example.com",
			ReferralCode: "ABCD1234",
			BasePosition: 1,
			Status:       SignupStatusPending,
			CreatedAt:    time.Now(),
			UpdatedAt:    time.Now(),
		}
	}

	t.Run("valid signup passes", func(t *testing.T) {
		if err := validSignup().Validate(); err != nil {
			t.Errorf("unexpected error: %v", err)
		}
	})

	t.Run("missing campaign_id", func(t *testing.T) {
		s := validSignup()
		s.CampaignID = uuid.Nil
		if err := s.Validate(); err == nil {
			t.Error("expected error for missing campaign_id")
		}
	})

	t.Run("missing email", func(t *testing.T) {
		s := validSignup()
		s.Email = ""
		if err := s.Validate(); err == nil {
			t.Error("expected error for missing email")
		}
	})

	t.Run("invalid email", func(t *testing.T) {
		s := validSignup()
		s.Email = "not-an-email"
		if err := s.Validate(); err == nil {
			t.Error("expected error for invalid email")
		}
	})

	t.Run("missing referral code", func(t *testing.T) {
		s := validSignup()
		s.ReferralCode = ""
		if err := s.Validate(); err == nil {
			t.Error("expected error for missing referral_code")
		}
	})

}

// isAlphanumeric reports whether r is in [A-Za-z0-9].
func isAlphanumeric(r rune) bool {
	return (r >= 'A' && r <= 'Z') || (r >= 'a' && r <= 'z') || (r >= '0' && r <= '9')
}
