package domain

import (
	"time"

	"github.com/google/uuid"
)

// WebhookEventType identifies the kind of event dispatched to webhook endpoints.
type WebhookEventType string

// WebhookEvent type constants for the events a subscriber can receive.
const (
	EventSignupCreated     WebhookEventType = "signup.created"
	EventReferralConverted WebhookEventType = "referral.converted"
	EventEmailVerified     WebhookEventType = "email.verified"
	EventSignupInvited     WebhookEventType = "signup.invited"
)

// WebhookDeliveryStatus represents the current state of a delivery attempt.
type WebhookDeliveryStatus string

// WebhookDelivery status constants.
const (
	WebhookDeliveryStatusPending   WebhookDeliveryStatus = "pending"
	WebhookDeliveryStatusDelivered WebhookDeliveryStatus = "delivered"
	WebhookDeliveryStatusFailed    WebhookDeliveryStatus = "failed"
)

// WebhookEndpoint is a subscriber URL registered for a campaign's events.
type WebhookEndpoint struct {
	ID         uuid.UUID
	CampaignID uuid.UUID
	URL        string
	Secret     string //nolint:gosec // webhook signing secret stored at rest
	Events     []WebhookEventType
	Active     bool
	CreatedAt  time.Time
}

// WebhookDelivery tracks a single delivery attempt for a WebhookEndpoint.
type WebhookDelivery struct {
	ID                uuid.UUID
	WebhookEndpointID uuid.UUID
	EventType         WebhookEventType
	Payload           map[string]any
	ResponseStatus    *int
	Attempts          int
	NextRetryAt       *time.Time
	Status            WebhookDeliveryStatus
	CreatedAt         time.Time
}
