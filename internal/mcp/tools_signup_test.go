package mcp

import (
	"testing"
	"time"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/domain"
)

func TestSignupToMap_InviteFields_WhenInvited(t *testing.T) {
	t.Parallel()

	now := time.Now().UTC()
	redeemedAt := now.Add(-30 * time.Minute)
	token := "abc123def456abc123def456abc123def456abc1"

	sg := domain.Signup{
		ID:                    uuid.New(),
		CampaignID:            uuid.New(),
		Email:                 "alice@example.com",
		ReferralCode:          "REF12345",
		Status:                domain.SignupStatusInvited,
		InvitedAt:             &now,
		InviteToken:           &token,
		InviteTokenRedeemedAt: &redeemedAt,
		CreatedAt:             now,
	}

	m := signupToMap(sg)

	if v, ok := m["invited_at"]; !ok || v == "" {
		t.Errorf("invited_at missing or empty, got %v", v)
	}
	if v, ok := m["invite_token"]; !ok {
		t.Error("invite_token missing from map")
	} else if v != token {
		t.Errorf("invite_token = %v, want %q", v, token)
	}
	if v, ok := m["invite_token_redeemed_at"]; !ok || v == "" {
		t.Errorf("invite_token_redeemed_at missing or empty, got %v", v)
	}
}

func TestSignupToMap_InviteFields_WhenNotInvited(t *testing.T) {
	t.Parallel()

	now := time.Now().UTC()
	sg := domain.Signup{
		ID:           uuid.New(),
		CampaignID:   uuid.New(),
		Email:        "bob@example.com",
		ReferralCode: "REF99999",
		Status:       domain.SignupStatusVerified,
		CreatedAt:    now,
		// InvitedAt, InviteToken, InviteTokenRedeemedAt all nil
	}

	m := signupToMap(sg)

	if _, ok := m["invited_at"]; ok {
		t.Error("invited_at should be absent for non-invited signup")
	}
	if _, ok := m["invite_token"]; ok {
		t.Error("invite_token should be absent for non-invited signup")
	}
	if _, ok := m["invite_token_redeemed_at"]; ok {
		t.Error("invite_token_redeemed_at should be absent for non-invited signup")
	}
}

func TestSignupToMap_InviteToken_NotRedeemedYet(t *testing.T) {
	t.Parallel()

	now := time.Now().UTC()
	token := "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef"

	sg := domain.Signup{
		ID:                    uuid.New(),
		CampaignID:            uuid.New(),
		Email:                 "carol@example.com",
		ReferralCode:          "REFAAAAA",
		Status:                domain.SignupStatusInvited,
		InvitedAt:             &now,
		InviteToken:           &token,
		InviteTokenRedeemedAt: nil, // not yet redeemed
		CreatedAt:             now,
	}

	m := signupToMap(sg)

	if _, ok := m["invite_token"]; !ok {
		t.Error("invite_token should be present")
	}
	if _, ok := m["invite_token_redeemed_at"]; ok {
		t.Error("invite_token_redeemed_at should be absent when not redeemed")
	}
}

func TestDomainSignupsToCSV_IncludesInviteToken(t *testing.T) {
	t.Parallel()

	now := time.Now().UTC()
	token := "csvtoken1234567890csvtoken1234567890csv1"

	signups := []domain.Signup{
		{
			ID:           uuid.New(),
			CampaignID:   uuid.New(),
			Email:        "dave@example.com",
			ReferralCode: "REFCSV01",
			Status:       domain.SignupStatusInvited,
			InviteToken:  &token,
			CreatedAt:    now,
		},
		{
			ID:           uuid.New(),
			CampaignID:   uuid.New(),
			Email:        "eve@example.com",
			ReferralCode: "REFCSV02",
			Status:       domain.SignupStatusVerified,
			InviteToken:  nil, // no token
			CreatedAt:    now,
		},
	}

	csv := domainSignupsToCSV(signups)

	// Header must include invite_token column.
	if !containsField(csv, "invite_token") {
		t.Errorf("CSV header missing invite_token column:\n%s", csv)
	}

	// First row should contain the token value.
	if !containsField(csv, token) {
		t.Errorf("CSV body missing token %q:\n%s", token, csv)
	}
}

// containsField is a simple substring check for CSV content assertions.
func containsField(csv, field string) bool {
	for _, line := range splitLines(csv) {
		for _, col := range splitComma(line) {
			if col == field {
				return true
			}
		}
	}
	return false
}

func splitLines(s string) []string {
	var lines []string
	start := 0
	for i, c := range s {
		if c == '\n' {
			lines = append(lines, s[start:i])
			start = i + 1
		}
	}
	if start < len(s) {
		lines = append(lines, s[start:])
	}
	return lines
}

func splitComma(s string) []string {
	var fields []string
	start := 0
	for i, c := range s {
		if c == ',' {
			fields = append(fields, s[start:i])
			start = i + 1
		}
	}
	fields = append(fields, s[start:])
	return fields
}
