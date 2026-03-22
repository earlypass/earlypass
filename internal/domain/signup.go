package domain

import (
	"crypto/rand"
	"errors"
	"fmt"
	"strings"
	"time"

	"github.com/google/uuid"
)

// SignupStatus represents the verification state of a signup.
type SignupStatus string

// Signup status constants.
const (
	SignupStatusPending  SignupStatus = "pending"
	SignupStatusVerified SignupStatus = "verified"
	SignupStatusRejected SignupStatus = "rejected"
	// SignupStatusExpired is set by the email verification workflow when the
	// 48-hour verification window closes without the user confirming their email.
	SignupStatusExpired SignupStatus = "expired"
	// SignupStatusInvited is set when a campaign owner grants this signup early access.
	SignupStatusInvited SignupStatus = "invited"
)

// referralCodeAlphabet is URL-safe, case-sensitive, unambiguous characters.
const referralCodeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const referralCodeLength = 8

// Signup represents a single signup entry.
type Signup struct {
	ID                uuid.UUID
	CampaignID        uuid.UUID
	Email             string
	EmailVerified     bool
	VerificationToken *string
	ReferralCode      string
	ReferredBy        *uuid.UUID
	ReferralCount     int
	BasePosition      int
	BonusPoints       int
	IPAddress         string
	Fingerprint       string
	Metadata          map[string]any
	Status                   SignupStatus
	InvitedAt                *time.Time
	InviteToken              *string
	InviteTokenRedeemedAt    *time.Time
	CreatedAt                time.Time
	UpdatedAt                time.Time
}

// EffectivePosition returns the adjusted queue position after referral bonuses.
// Formula: base_position - bonus_points, clamped to a minimum of 1.
func (s *Signup) EffectivePosition() int {
	pos := s.BasePosition - s.BonusPoints
	if pos < 1 {
		return 1
	}
	return pos
}

// RecalcBonusPoints updates BonusPoints based on the campaign boost weight.
// Call this whenever ReferralCount changes.
func (s *Signup) RecalcBonusPoints(boostWeight float64) {
	s.BonusPoints = int(float64(s.ReferralCount) * boostWeight)
}

// Validate checks business-rule invariants on a Signup.
func (s *Signup) Validate() error {
	if s.CampaignID == uuid.Nil {
		return errors.New("campaign_id is required")
	}
	if s.Email == "" {
		return errors.New("email is required")
	}
	if !isValidEmail(s.Email) {
		return errors.New("email is invalid")
	}
	if s.ReferralCode == "" {
		return errors.New("referral_code is required")
	}
	return nil
}

// GenerateReferralCode produces a cryptographically random 8-character
// alphanumeric code suitable for use in referral URLs.
func GenerateReferralCode() (string, error) {
	// Use rejection sampling to avoid modulo bias.
	// alphabet length = 62; we want uniform distribution over [0, 62).
	// We use 6 bits (values 0–63) and reject values >= 62.
	const mask = byte(0x3F) // 6-bit mask

	result := make([]byte, referralCodeLength)
	buf := make([]byte, referralCodeLength*3) // extra bytes for rejection

	filled := 0
	for filled < referralCodeLength {
		if _, err := rand.Read(buf); err != nil {
			return "", fmt.Errorf("generating referral code: %w", err)
		}
		for _, b := range buf {
			idx := b & mask
			if int(idx) < len(referralCodeAlphabet) {
				result[filled] = referralCodeAlphabet[idx]
				filled++
				if filled == referralCodeLength {
					break
				}
			}
		}
	}

	return string(result), nil
}

// --- helpers ---

// isValidEmail performs a basic structural check on an email address.
// Full RFC 5321 validation is intentionally not done here — use the email
// verification flow to confirm deliverability.
func isValidEmail(email string) bool {
	at := strings.LastIndex(email, "@")
	if at <= 0 || at == len(email)-1 {
		return false
	}
	domain := email[at+1:]
	return strings.Contains(domain, ".")
}
