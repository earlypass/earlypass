package domain

import (
	"errors"
	"net/mail"
	"time"

	"github.com/google/uuid"
)

// Account represents a registered EarlyPass user (passwordless).
type Account struct {
	ID        uuid.UUID
	Email     string
	CreatedAt time.Time
	UpdatedAt time.Time
}

// NewAccount validates the email format and returns an Account with a generated ID.
func NewAccount(email string) (Account, error) {
	if _, err := mail.ParseAddress(email); err != nil {
		return Account{}, errors.New("invalid email address")
	}
	now := time.Now().UTC()
	return Account{
		ID:        uuid.New(),
		Email:     email,
		CreatedAt: now,
		UpdatedAt: now,
	}, nil
}
