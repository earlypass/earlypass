// Package domain contains core business logic types used by the dashboard.
package domain

import (
	"time"

	"github.com/google/uuid"
)

// DailyCount represents the number of signups on a single day.
type DailyCount struct {
	Date  time.Time
	Count int
}

// SignupFilter controls filtering, sorting, and pagination for the dashboard
// signups listing endpoint.
type SignupFilter struct {
	// Status filters by signup status. Empty string means all statuses.
	Status string
	// Search is a partial, case-insensitive email match. Empty means no filter.
	Search string
	// Sort controls the ordering: "date" (default), "position", or "referrals".
	Sort   string
	Limit  int
	Offset int
}

// DeliveryRecord combines a webhook delivery with the endpoint URL for the
// dashboard delivery log view.
type DeliveryRecord struct {
	ID                uuid.UUID
	WebhookEndpointID uuid.UUID
	EndpointURL       string
	EventType         WebhookEventType
	ResponseStatus    *int
	Attempts          int
	Status            WebhookDeliveryStatus
	CreatedAt         time.Time
}
