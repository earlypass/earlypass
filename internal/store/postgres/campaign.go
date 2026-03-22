package postgres

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// CampaignStore implements store.CampaignStore against PostgreSQL.
type CampaignStore struct {
	pool *pgxpool.Pool
}

const campaignColumns = `id, name, slug,
	settings, max_signups, status, created_at, updated_at, account_id`

// slugConstraintName is the PostgreSQL constraint name for the campaigns.slug UNIQUE index.
const slugConstraintName = "campaigns_slug_key"

// Create persists a new Campaign.
// Returns store.ErrSlugConflict if the slug is already taken (caller should
// generate a new slug and retry). Returns store.ErrConflict if the account
// already owns a campaign with the same name.
func (s *CampaignStore) Create(ctx context.Context, c domain.Campaign) error {
	settings, err := json.Marshal(c.Settings)
	if err != nil {
		return fmt.Errorf("marshalling campaign settings: %w", err)
	}

	_, err = s.pool.Exec(ctx, `
		INSERT INTO campaigns
			(id, name, slug,
			 settings, max_signups, status, created_at, updated_at, account_id)
		VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
		c.ID, c.Name, c.Slug,
		settings, c.MaxSignups, string(c.Status),
		c.CreatedAt, c.UpdatedAt, c.AccountID,
	)
	if err != nil {
		if isUniqueViolation(err) {
			if pgConstraintName(err) == slugConstraintName {
				return store.ErrSlugConflict
			}
			return store.ErrConflict
		}
		return fmt.Errorf("inserting campaign: %w", err)
	}
	return nil
}

// GetByID fetches a Campaign by primary key.
func (s *CampaignStore) GetByID(ctx context.Context, id uuid.UUID) (domain.Campaign, error) {
	row := s.pool.QueryRow(ctx,
		`SELECT `+campaignColumns+` FROM campaigns WHERE id = $1`, id)
	c, err := scanCampaign(row)
	if err != nil {
		return domain.Campaign{}, fmt.Errorf("fetching campaign by id: %w", mapNotFound(err))
	}
	return c, nil
}

// GetBySlug fetches a Campaign by URL slug.
func (s *CampaignStore) GetBySlug(ctx context.Context, slug string) (domain.Campaign, error) {
	row := s.pool.QueryRow(ctx,
		`SELECT `+campaignColumns+` FROM campaigns WHERE slug = $1`, slug)
	c, err := scanCampaign(row)
	if err != nil {
		return domain.Campaign{}, fmt.Errorf("fetching campaign by slug: %w", mapNotFound(err))
	}
	return c, nil
}

// Update persists changes to an existing Campaign.
// Returns store.ErrConflict if the new name is already used by another campaign
// in the same account.
func (s *CampaignStore) Update(ctx context.Context, c domain.Campaign) error {
	settings, err := json.Marshal(c.Settings)
	if err != nil {
		return fmt.Errorf("marshalling campaign settings: %w", err)
	}

	tag, err := s.pool.Exec(ctx, `
		UPDATE campaigns
		SET name = $1, slug = $2, settings = $3, max_signups = $4,
		    status = $5, account_id = $6, updated_at = NOW()
		WHERE id = $7`,
		c.Name, c.Slug, settings, c.MaxSignups, string(c.Status), c.AccountID, c.ID,
	)
	if err != nil {
		if isUniqueViolation(err) {
			return store.ErrConflict
		}
		return fmt.Errorf("updating campaign: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return store.ErrNotFound
	}
	return nil
}

// Delete removes a Campaign by ID.
func (s *CampaignStore) Delete(ctx context.Context, id uuid.UUID) error {
	tag, err := s.pool.Exec(ctx, `DELETE FROM campaigns WHERE id = $1`, id)
	if err != nil {
		return fmt.Errorf("deleting campaign: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return store.ErrNotFound
	}
	return nil
}

// --- scanner ---

// rowScanner is satisfied by both pgx.Row and pgx.Rows.
type rowScanner interface {
	Scan(dest ...any) error
}

func scanCampaign(row rowScanner) (domain.Campaign, error) {
	var c domain.Campaign
	var statusStr string
	var settingsRaw []byte
	var maxSignups *int

	err := row.Scan(
		&c.ID, &c.Name, &c.Slug,
		&settingsRaw, &maxSignups, &statusStr,
		&c.CreatedAt, &c.UpdatedAt, &c.AccountID,
	)
	if err != nil {
		return domain.Campaign{}, fmt.Errorf("scanning campaign: %w", err)
	}

	if err = json.Unmarshal(settingsRaw, &c.Settings); err != nil {
		return domain.Campaign{}, fmt.Errorf("unmarshalling campaign settings: %w", err)
	}

	c.Status = domain.CampaignStatus(statusStr)
	c.MaxSignups = maxSignups
	c.CreatedAt = c.CreatedAt.UTC()
	c.UpdatedAt = c.UpdatedAt.UTC()
	return c, nil
}

// ListByAccount returns campaigns owned by the given account with pagination.
func (s *CampaignStore) ListByAccount(ctx context.Context, accountID uuid.UUID, limit, offset int) ([]domain.Campaign, error) {
	rows, err := s.pool.Query(ctx,
		`SELECT `+campaignColumns+` FROM campaigns WHERE account_id = $1 ORDER BY created_at DESC LIMIT $2 OFFSET $3`,
		accountID, limit, offset,
	)
	if err != nil {
		return nil, fmt.Errorf("listing campaigns by account: %w", err)
	}
	defer rows.Close()

	var campaigns []domain.Campaign
	for rows.Next() {
		c, err := scanCampaign(rows)
		if err != nil {
			return nil, err
		}
		campaigns = append(campaigns, c)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterating campaigns by account: %w", err)
	}
	return campaigns, nil
}

// CountActive returns the number of campaigns with status='active' across all accounts.
func (s *CampaignStore) CountActive(ctx context.Context) (int64, error) {
	var n int64
	err := s.pool.QueryRow(ctx, `SELECT COUNT(*) FROM campaigns WHERE status = 'active'`).Scan(&n)
	if err != nil {
		return 0, fmt.Errorf("counting active campaigns: %w", err)
	}
	return n, nil
}

// Ensure CampaignStore satisfies the store.CampaignStore interface at compile time.
var _ store.CampaignStore = (*CampaignStore)(nil)
