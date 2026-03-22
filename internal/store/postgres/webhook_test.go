//go:build integration

package postgres_test

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

func TestWebhookStore_Endpoints(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ws := db.Webhooks()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	endpoint := newTestEndpoint(t, campaign.ID)

	t.Run("create endpoint", func(t *testing.T) {
		if err := ws.CreateEndpoint(ctx, endpoint); err != nil {
			t.Fatalf("CreateEndpoint: %v", err)
		}
	})

	t.Run("list endpoints", func(t *testing.T) {
		list, err := ws.ListEndpoints(ctx, campaign.ID)
		if err != nil {
			t.Fatalf("ListEndpoints: %v", err)
		}
		if len(list) != 1 {
			t.Fatalf("len = %d, want 1", len(list))
		}
		if list[0].ID != endpoint.ID {
			t.Errorf("ID = %v, want %v", list[0].ID, endpoint.ID)
		}
		if len(list[0].Events) != 2 {
			t.Errorf("Events len = %d, want 2", len(list[0].Events))
		}
	})

	t.Run("delete endpoint", func(t *testing.T) {
		if err := ws.DeleteEndpoint(ctx, endpoint.ID); err != nil {
			t.Fatalf("DeleteEndpoint: %v", err)
		}

		list, err := ws.ListEndpoints(ctx, campaign.ID)
		if err != nil {
			t.Fatalf("ListEndpoints after delete: %v", err)
		}
		if len(list) != 0 {
			t.Errorf("expected empty list, got %d", len(list))
		}
	})

	t.Run("delete non-existent returns ErrNotFound", func(t *testing.T) {
		err := ws.DeleteEndpoint(ctx, uuid.New())
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestWebhookStore_Deliveries(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ws := db.Webhooks()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	endpoint := newTestEndpoint(t, campaign.ID)
	if err := ws.CreateEndpoint(ctx, endpoint); err != nil {
		t.Fatalf("CreateEndpoint: %v", err)
	}

	delivery := newTestDelivery(t, endpoint.ID)

	t.Run("create delivery", func(t *testing.T) {
		if err := ws.CreateDelivery(ctx, delivery); err != nil {
			t.Fatalf("CreateDelivery: %v", err)
		}
	})

	t.Run("list pending deliveries", func(t *testing.T) {
		list, err := ws.ListPendingDeliveries(ctx, 10)
		if err != nil {
			t.Fatalf("ListPendingDeliveries: %v", err)
		}
		if len(list) == 0 {
			t.Fatal("expected at least one pending delivery")
		}
		found := false
		for _, d := range list {
			if d.ID == delivery.ID {
				found = true
				break
			}
		}
		if !found {
			t.Errorf("delivery %v not in pending list", delivery.ID)
		}
	})

	t.Run("update delivery status", func(t *testing.T) {
		status := 200
		delivery.ResponseStatus = &status
		delivery.Attempts = 1
		delivery.Status = domain.WebhookDeliveryStatusDelivered
		if err := ws.UpdateDelivery(ctx, delivery); err != nil {
			t.Fatalf("UpdateDelivery: %v", err)
		}

		// Delivered deliveries should not appear in pending list.
		list, err := ws.ListPendingDeliveries(ctx, 10)
		if err != nil {
			t.Fatalf("ListPendingDeliveries: %v", err)
		}
		for _, d := range list {
			if d.ID == delivery.ID {
				t.Error("delivered delivery should not appear in pending list")
			}
		}
	})

	t.Run("update non-existent returns ErrNotFound", func(t *testing.T) {
		phantom := newTestDelivery(t, endpoint.ID)
		phantom.ID = uuid.New()
		err := ws.UpdateDelivery(ctx, phantom)
		if !errors.Is(err, store.ErrNotFound) {
			t.Errorf("want ErrNotFound, got %v", err)
		}
	})
}

func TestWebhookStore_ListPendingDeliveries_FutureRetry(t *testing.T) {
	db := testDB(t)
	ctx := context.Background()
	cs := db.Campaigns()
	ws := db.Webhooks()

	campaign := newTestCampaign(t)
	if err := cs.Create(ctx, campaign); err != nil {
		t.Fatalf("Create campaign: %v", err)
	}

	endpoint := newTestEndpoint(t, campaign.ID)
	if err := ws.CreateEndpoint(ctx, endpoint); err != nil {
		t.Fatalf("CreateEndpoint: %v", err)
	}

	// Create a delivery with a next_retry_at in the future.
	future := time.Now().UTC().Add(time.Hour)
	delivery := newTestDelivery(t, endpoint.ID)
	delivery.NextRetryAt = &future
	if err := ws.CreateDelivery(ctx, delivery); err != nil {
		t.Fatalf("CreateDelivery: %v", err)
	}

	list, err := ws.ListPendingDeliveries(ctx, 10)
	if err != nil {
		t.Fatalf("ListPendingDeliveries: %v", err)
	}
	for _, d := range list {
		if d.ID == delivery.ID {
			t.Error("future-retry delivery should not appear in pending list yet")
		}
	}
}

// --- fixture helpers ---

func newTestEndpoint(t *testing.T, campaignID uuid.UUID) domain.WebhookEndpoint {
	t.Helper()
	return domain.WebhookEndpoint{
		ID:         uuid.New(),
		CampaignID: campaignID,
		URL:        "https://example.com/webhook",
		Secret:     "secret123",
		Events:     []domain.WebhookEventType{domain.EventSignupCreated, domain.EventReferralConverted},
		Active:     true,
		CreatedAt:  time.Now().UTC().Truncate(time.Millisecond),
	}
}

func newTestDelivery(t *testing.T, endpointID uuid.UUID) domain.WebhookDelivery {
	t.Helper()
	return domain.WebhookDelivery{
		ID:                uuid.New(),
		WebhookEndpointID: endpointID,
		EventType:         domain.EventSignupCreated,
		Payload:           map[string]any{"email": "test@example.com"},
		Attempts:          0,
		Status:            domain.WebhookDeliveryStatusPending,
		CreatedAt:         time.Now().UTC().Truncate(time.Millisecond),
	}
}

func TestWebhookStore_ListRecentDeliveriesByCampaign(t *testing.T) {
db := testDB(t)
ctx := context.Background()
cs := db.Campaigns()
ws := db.Webhooks()

campaign := newTestCampaign(t)
if err := cs.Create(ctx, campaign); err != nil {
t.Fatalf("Create campaign: %v", err)
}

endpoint := newTestEndpoint(t, campaign.ID)
if err := ws.CreateEndpoint(ctx, endpoint); err != nil {
t.Fatalf("CreateEndpoint: %v", err)
}

t.Run("empty for new campaign", func(t *testing.T) {
records, err := ws.ListRecentDeliveriesByCampaign(ctx, campaign.ID, 10)
if err != nil {
t.Fatalf("ListRecentDeliveriesByCampaign: %v", err)
}
if len(records) != 0 {
t.Errorf("want 0 for new campaign, got %d", len(records))
}
})

// Create two deliveries.
d1 := newTestDelivery(t, endpoint.ID)
d1.Status = domain.WebhookDeliveryStatusDelivered
statusCode := 200
d1.ResponseStatus = &statusCode
if err := ws.CreateDelivery(ctx, d1); err != nil {
t.Fatalf("CreateDelivery d1: %v", err)
}

d2 := newTestDelivery(t, endpoint.ID)
d2.Status = domain.WebhookDeliveryStatusFailed
if err := ws.CreateDelivery(ctx, d2); err != nil {
t.Fatalf("CreateDelivery d2: %v", err)
}

t.Run("returns recent deliveries", func(t *testing.T) {
records, err := ws.ListRecentDeliveriesByCampaign(ctx, campaign.ID, 10)
if err != nil {
t.Fatalf("ListRecentDeliveriesByCampaign: %v", err)
}
if len(records) < 2 {
t.Errorf("want >= 2 records, got %d", len(records))
}
for _, r := range records {
if r.WebhookEndpointID != endpoint.ID {
t.Errorf("record endpoint ID = %v, want %v", r.WebhookEndpointID, endpoint.ID)
}
}
})

t.Run("respects limit", func(t *testing.T) {
records, err := ws.ListRecentDeliveriesByCampaign(ctx, campaign.ID, 1)
if err != nil {
t.Fatalf("ListRecentDeliveriesByCampaign limit=1: %v", err)
}
if len(records) != 1 {
t.Errorf("want 1 record with limit=1, got %d", len(records))
}
})

t.Run("empty for unknown campaign", func(t *testing.T) {
records, err := ws.ListRecentDeliveriesByCampaign(ctx, uuid.New(), 10)
if err != nil {
t.Fatalf("ListRecentDeliveriesByCampaign unknown: %v", err)
}
if len(records) != 0 {
t.Errorf("want 0 for unknown campaign, got %d", len(records))
}
})
}
