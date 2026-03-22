package domain

import (
	"testing"
)

func TestNewAccount_ValidEmail(t *testing.T) {
	a, err := NewAccount("user@example.com")
	if err != nil {
		t.Fatalf("expected no error for valid email, got %v", err)
	}
	if a.Email != "user@example.com" {
		t.Errorf("expected email %q, got %q", "user@example.com", a.Email)
	}
	if a.ID.String() == "" {
		t.Error("expected non-empty ID")
	}
	if a.CreatedAt.IsZero() {
		t.Error("expected non-zero CreatedAt")
	}
	if a.UpdatedAt.IsZero() {
		t.Error("expected non-zero UpdatedAt")
	}
}

func TestNewAccount_InvalidEmail(t *testing.T) {
	_, err := NewAccount("not-an-email")
	if err == nil {
		t.Fatal("expected error for invalid email, got nil")
	}
}

func TestNewAccount_EmptyEmail(t *testing.T) {
	_, err := NewAccount("")
	if err == nil {
		t.Fatal("expected error for empty email, got nil")
	}
}

func TestNewAccount_IDUniqueness(t *testing.T) {
	a1, err := NewAccount("alice@example.com")
	if err != nil {
		t.Fatal(err)
	}
	a2, err := NewAccount("bob@example.com")
	if err != nil {
		t.Fatal(err)
	}
	if a1.ID == a2.ID {
		t.Error("expected unique IDs for different accounts")
	}
}
