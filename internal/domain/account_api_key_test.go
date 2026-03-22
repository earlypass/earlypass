package domain

import (
	"crypto/sha256"
	"encoding/hex"
	"strings"
	"testing"

	"github.com/google/uuid"
)

func TestNewAccountAPIKey_Prefix(t *testing.T) {
	accountID := uuid.New()
	_, rawKey, err := NewAccountAPIKey(accountID, "My Key")
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if !strings.HasPrefix(rawKey, "ep_acc_") {
		t.Errorf("expected raw key to start with 'ep_acc_', got %q", rawKey)
	}
}

func TestNewAccountAPIKey_SHA256RoundTrip(t *testing.T) {
	accountID := uuid.New()
	key, rawKey, err := NewAccountAPIKey(accountID, "My Key")
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	h := sha256.Sum256([]byte(rawKey))
	expected := hex.EncodeToString(h[:])
	if key.KeyHash != expected {
		t.Errorf("expected KeyHash to be SHA-256 hex of rawKey, got %q", key.KeyHash)
	}
}

func TestNewAccountAPIKey_Fields(t *testing.T) {
	accountID := uuid.New()
	key, _, err := NewAccountAPIKey(accountID, "Test Key")
	if err != nil {
		t.Fatal(err)
	}

	if key.AccountID != accountID {
		t.Errorf("expected AccountID %v, got %v", accountID, key.AccountID)
	}
	if key.Name != "Test Key" {
		t.Errorf("expected Name %q, got %q", "Test Key", key.Name)
	}
	if key.ID.String() == "" {
		t.Error("expected non-empty ID")
	}
	if key.CreatedAt.IsZero() {
		t.Error("expected non-zero CreatedAt")
	}
	if key.RevokedAt != nil {
		t.Error("expected nil RevokedAt for new key")
	}
	if key.LastUsedAt != nil {
		t.Error("expected nil LastUsedAt for new key")
	}
}

func TestAccountAPIKey_IsActive(t *testing.T) {
	key := AccountAPIKey{}
	if !key.IsActive() {
		t.Error("expected IsActive() == true when RevokedAt is nil")
	}
}

func TestNewAccountAPIKey_Uniqueness(t *testing.T) {
	accountID := uuid.New()
	k1, raw1, err := NewAccountAPIKey(accountID, "Key 1")
	if err != nil {
		t.Fatal(err)
	}
	k2, raw2, err := NewAccountAPIKey(accountID, "Key 2")
	if err != nil {
		t.Fatal(err)
	}
	if k1.ID == k2.ID {
		t.Error("expected unique IDs")
	}
	if raw1 == raw2 {
		t.Error("expected unique raw keys")
	}
	if k1.KeyHash == k2.KeyHash {
		t.Error("expected unique key hashes")
	}
}
