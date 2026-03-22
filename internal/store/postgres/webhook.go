package postgres

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// WebhookStore implements store.WebhookStore against PostgreSQL.
type WebhookStore struct {
	pool *pgxpool.Pool
}

// CreateEndpoint persists a new WebhookEndpoint.
func (s *WebhookStore) CreateEndpoint(ctx context.Context, e domain.WebhookEndpoint) error {
	events := make([]string, len(e.Events))
	for i, ev := range e.Events {
		events[i] = string(ev)
	}

	_, err := s.pool.Exec(ctx, `
		INSERT INTO webhook_endpoints (id, campaign_id, url, secret, events, active, created_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7)`,
		e.ID, e.CampaignID, e.URL, e.Secret, events, e.Active, e.CreatedAt,
	)
	if err != nil {
		return fmt.Errorf("inserting webhook endpoint: %w", err)
	}
	return nil
}

// ListEndpoints returns all webhook endpoints for a campaign.
func (s *WebhookStore) ListEndpoints(ctx context.Context, campaignID uuid.UUID) ([]domain.WebhookEndpoint, error) {
	rows, err := s.pool.Query(ctx,
		`SELECT id, campaign_id, url, secret, events, active, created_at
		 FROM webhook_endpoints WHERE campaign_id = $1`,
		campaignID)
	if err != nil {
		return nil, fmt.Errorf("listing webhook endpoints: %w", err)
	}
	defer rows.Close()

	var endpoints []domain.WebhookEndpoint
	for rows.Next() {
		var e domain.WebhookEndpoint
		var eventStrs []string
		if err = rows.Scan(&e.ID, &e.CampaignID, &e.URL, &e.Secret, &eventStrs, &e.Active, &e.CreatedAt); err != nil {
			return nil, fmt.Errorf("scanning webhook endpoint row: %w", err)
		}
		e.Events = make([]domain.WebhookEventType, len(eventStrs))
		for i, ev := range eventStrs {
			e.Events[i] = domain.WebhookEventType(ev)
		}
		e.CreatedAt = e.CreatedAt.UTC()
		endpoints = append(endpoints, e)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterating webhook endpoint rows: %w", err)
	}
	return endpoints, nil
}

// DeleteEndpoint removes a webhook endpoint by ID.
func (s *WebhookStore) DeleteEndpoint(ctx context.Context, id uuid.UUID) error {
	tag, err := s.pool.Exec(ctx, `DELETE FROM webhook_endpoints WHERE id = $1`, id)
	if err != nil {
		return fmt.Errorf("deleting webhook endpoint: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return store.ErrNotFound
	}
	return nil
}

// CreateDelivery persists a new pending WebhookDelivery.
func (s *WebhookStore) CreateDelivery(ctx context.Context, d domain.WebhookDelivery) error {
	payload, err := json.Marshal(d.Payload)
	if err != nil {
		return fmt.Errorf("marshalling webhook payload: %w", err)
	}

	_, err = s.pool.Exec(ctx, `
		INSERT INTO webhook_deliveries
			(id, webhook_endpoint_id, event_type, payload, response_status, attempts, next_retry_at, status, created_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
		d.ID, d.WebhookEndpointID, string(d.EventType), payload,
		d.ResponseStatus, d.Attempts, d.NextRetryAt, string(d.Status), d.CreatedAt,
	)
	if err != nil {
		return fmt.Errorf("inserting webhook delivery: %w", err)
	}
	return nil
}

// UpdateDelivery persists delivery outcome for a WebhookDelivery.
func (s *WebhookStore) UpdateDelivery(ctx context.Context, d domain.WebhookDelivery) error {
	tag, err := s.pool.Exec(ctx, `
		UPDATE webhook_deliveries
		SET response_status = $1, attempts = $2, next_retry_at = $3, status = $4
		WHERE id = $5`,
		d.ResponseStatus, d.Attempts, d.NextRetryAt, string(d.Status), d.ID,
	)
	if err != nil {
		return fmt.Errorf("updating webhook delivery: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return store.ErrNotFound
	}
	return nil
}

// ListRecentDeliveriesByCampaign returns the most recent webhook deliveries for
// all endpoints belonging to the given campaign, joined with the endpoint URL.
func (s *WebhookStore) ListRecentDeliveriesByCampaign(ctx context.Context, campaignID uuid.UUID, limit int) ([]domain.DeliveryRecord, error) {
	rows, err := s.pool.Query(ctx, `
		SELECT wd.id, wd.webhook_endpoint_id, we.url, wd.event_type,
		       wd.response_status, wd.attempts, wd.status, wd.created_at
		FROM webhook_deliveries wd
		JOIN webhook_endpoints  we ON wd.webhook_endpoint_id = we.id
		WHERE we.campaign_id = $1
		ORDER BY wd.created_at DESC
		LIMIT $2`,
		campaignID, limit,
	)
	if err != nil {
		return nil, fmt.Errorf("listing recent deliveries by campaign: %w", err)
	}
	defer rows.Close()

	var records []domain.DeliveryRecord
	for rows.Next() {
		var r domain.DeliveryRecord
		var statusStr, eventTypeStr string
		var responseStatus *int
		if err = rows.Scan(
			&r.ID, &r.WebhookEndpointID, &r.EndpointURL, &eventTypeStr,
			&responseStatus, &r.Attempts, &statusStr, &r.CreatedAt,
		); err != nil {
			return nil, fmt.Errorf("scanning delivery record: %w", err)
		}
		r.EventType = domain.WebhookEventType(eventTypeStr)
		r.Status = domain.WebhookDeliveryStatus(statusStr)
		r.ResponseStatus = responseStatus
		r.CreatedAt = r.CreatedAt.UTC()
		records = append(records, r)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterating delivery records: %w", err)
	}
	return records, nil
}

// ListPendingDeliveries returns deliveries due for (re)delivery, ordered by next_retry_at ASC.
func (s *WebhookStore) ListPendingDeliveries(ctx context.Context, limit int) ([]domain.WebhookDelivery, error) {
	rows, err := s.pool.Query(ctx, `
		SELECT id, webhook_endpoint_id, event_type, payload, response_status, attempts, next_retry_at, status, created_at
		FROM webhook_deliveries
		WHERE status = 'pending' AND (next_retry_at IS NULL OR next_retry_at <= NOW())
		ORDER BY next_retry_at ASC NULLS FIRST
		LIMIT $1`,
		limit)
	if err != nil {
		return nil, fmt.Errorf("listing pending webhook deliveries: %w", err)
	}
	defer rows.Close()

	var deliveries []domain.WebhookDelivery
	for rows.Next() {
		d, err := scanDelivery(rows)
		if err != nil {
			return nil, fmt.Errorf("scanning delivery row: %w", err)
		}
		deliveries = append(deliveries, d)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterating delivery rows: %w", err)
	}
	return deliveries, nil
}

// CountPendingDeliveries returns the total number of webhook_deliveries with status='pending'.
func (s *WebhookStore) CountPendingDeliveries(ctx context.Context) (int64, error) {
	var n int64
	err := s.pool.QueryRow(ctx, `SELECT COUNT(*) FROM webhook_deliveries WHERE status = 'pending'`).Scan(&n)
	if err != nil {
		return 0, fmt.Errorf("counting pending webhook deliveries: %w", err)
	}
	return n, nil
}

// --- scanner ---

func scanDelivery(row rowScanner) (domain.WebhookDelivery, error) {
	var d domain.WebhookDelivery
	var statusStr, eventTypeStr string
	var payloadRaw []byte
	var responseStatus *int
	var nextRetryAt *time.Time
	var nextRetryPg pgtype.Timestamptz

	err := row.Scan(
		&d.ID, &d.WebhookEndpointID, &eventTypeStr, &payloadRaw,
		&responseStatus, &d.Attempts, &nextRetryPg, &statusStr, &d.CreatedAt,
	)
	if err != nil {
		return domain.WebhookDelivery{}, fmt.Errorf("scanning delivery: %w", err)
	}

	if nextRetryPg.Valid {
		t := nextRetryPg.Time.UTC()
		nextRetryAt = &t
	}

	if payloadRaw != nil {
		if err = json.Unmarshal(payloadRaw, &d.Payload); err != nil {
			return domain.WebhookDelivery{}, fmt.Errorf("unmarshalling webhook payload: %w", err)
		}
	}

	d.EventType = domain.WebhookEventType(eventTypeStr)
	d.Status = domain.WebhookDeliveryStatus(statusStr)
	d.ResponseStatus = responseStatus
	d.NextRetryAt = nextRetryAt
	d.CreatedAt = d.CreatedAt.UTC()
	return d, nil
}
