package domain

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"time"

	"github.com/google/uuid"
)

// AccountAPIKey is a long-lived API key scoped to an account.
type AccountAPIKey struct {
	ID         uuid.UUID
	AccountID  uuid.UUID
	KeyHash    string // SHA-256 hex of the raw key
	Name       string
	LastUsedAt *time.Time
	CreatedAt  time.Time
	RevokedAt  *time.Time
}

// IsActive reports whether the key has not been revoked.
func (k AccountAPIKey) IsActive() bool { return k.RevokedAt == nil }

// NewAccountAPIKey generates a new API key for the given account.
// Returns (key struct with SHA-256 hash, raw key string shown once to the user).
// Key format: "ep_acc_<32-byte-base64url>"
func NewAccountAPIKey(accountID uuid.UUID, name string) (AccountAPIKey, string, error) {
	b := make([]byte, 32)
	if _, err := rand.Read(b); err != nil {
		return AccountAPIKey{}, "", fmt.Errorf("generating key: %w", err)
	}
	rawKey := "ep_acc_" + base64.RawURLEncoding.EncodeToString(b)
	h := sha256.Sum256([]byte(rawKey))
	keyHash := hex.EncodeToString(h[:])
	now := time.Now().UTC()
	return AccountAPIKey{
		ID:        uuid.New(),
		AccountID: accountID,
		KeyHash:   keyHash,
		Name:      name,
		CreatedAt: now,
	}, rawKey, nil
}
