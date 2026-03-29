// Package store defines the persistence interfaces for EarlyPass.
// Each interface is implemented by a concrete backend (currently PostgreSQL).
package store

import (
	"context"
	"time"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/google/uuid"
	"github.com/jackc/pgx/v5"
)

// CampaignStore manages Campaign persistence.
type CampaignStore interface {
	// Create persists a new Campaign. Returns ErrSlugConflict if the slug is
	// taken (caller should generate a new slug and retry), or ErrConflict if
	// the account already has a campaign with the same name.
	Create(ctx context.Context, c domain.Campaign) error

	// GetByID fetches a Campaign by primary key. Returns ErrNotFound if absent.
	GetByID(ctx context.Context, id uuid.UUID) (domain.Campaign, error)

	// GetBySlug fetches a Campaign by its URL slug. Returns ErrNotFound if absent.
	GetBySlug(ctx context.Context, slug string) (domain.Campaign, error)

	// Update persists changes to an existing Campaign.
	Update(ctx context.Context, c domain.Campaign) error

	// Delete removes a Campaign and all its dependent rows (cascade).
	Delete(ctx context.Context, id uuid.UUID) error

	// ListByAccount returns campaigns owned by the given account, with pagination.
	ListByAccount(ctx context.Context, accountID uuid.UUID, limit, offset int) ([]domain.Campaign, error)

	// CountActive returns the total number of campaigns with status=active across all accounts.
	CountActive(ctx context.Context) (int64, error)
}

// SignupStore manages Signup persistence.
type SignupStore interface {
	// Create persists a new Signup. Returns the signup with its assigned
	// base_position filled in. Returns ErrConflict if the email is already
	// registered for this campaign.
	Create(ctx context.Context, s domain.Signup) (domain.Signup, error)

	// GetByID fetches a Signup by primary key. Returns ErrNotFound if absent.
	GetByID(ctx context.Context, id uuid.UUID) (domain.Signup, error)

	// GetByCampaignAndEmail fetches a Signup by campaign + email.
	// Returns ErrNotFound if absent.
	GetByCampaignAndEmail(ctx context.Context, campaignID uuid.UUID, email string) (domain.Signup, error)

	// GetByCampaignAndReferralCode fetches a Signup by campaign + referral code.
	// Returns ErrNotFound if absent.
	GetByCampaignAndReferralCode(ctx context.Context, campaignID uuid.UUID, code string) (domain.Signup, error)

	// ExistsByCampaignAndBaseEmail returns true if any signup in the campaign
	// shares the same base email (plus-tag stripped) as baseEmail.
	// Used to prevent multiple plus-address variants from each earning a referral.
	ExistsByCampaignAndBaseEmail(ctx context.Context, campaignID uuid.UUID, baseEmail string) (bool, error)

	// ListByCampaign returns all signups for a campaign ordered by base_position ASC.
	ListByCampaign(ctx context.Context, campaignID uuid.UUID) ([]domain.Signup, error)

	// CountByCampaign returns the number of non-invited signups for a campaign
	// (i.e. the current waiting queue length).
	CountByCampaign(ctx context.Context, campaignID uuid.UUID) (int, error)

	// GetAdjustedPosition returns the 1-based queue position of a signup
	// excluding any signups with status 'invited'. This is the position
	// shown to waiting users after others have been invited.
	// Returns ErrNotFound if the signup does not exist.
	GetAdjustedPosition(ctx context.Context, campaignID, signupID uuid.UUID) (int, error)

	// NextPosition returns the next available base_position for a campaign
	// (i.e. current max + 1, or 1 if no signups exist yet).
	NextPosition(ctx context.Context, campaignID uuid.UUID) (int, error)

	// UpdateVerified marks a signup's email as verified and clears the verification token.
	UpdateVerified(ctx context.Context, id uuid.UUID) error

	// UpdateReferralCount sets a signup's referral_count and bonus_points.
	UpdateReferralCount(ctx context.Context, id uuid.UUID, count, bonusPoints int) error

	// GetByVerificationToken fetches a Signup by its email verification token.
	// Returns ErrNotFound if absent or the token has been cleared.
	GetByVerificationToken(ctx context.Context, token string) (domain.Signup, error)

	// ListByCampaignPaginated returns a paginated list of signups for a campaign,
	// ordered by base_position ASC.
	ListByCampaignPaginated(ctx context.Context, campaignID uuid.UUID, limit, offset int) ([]domain.Signup, error)

	// ListLeaderboard returns the top signups for a campaign ranked by effective
	// position (base_position - bonus_points) ascending. Limit caps results.
	ListLeaderboard(ctx context.Context, campaignID uuid.UUID, limit int) ([]domain.Signup, error)

	// CountVerifiedByCampaign returns the number of email-verified signups.
	CountVerifiedByCampaign(ctx context.Context, campaignID uuid.UUID) (int, error)

	// CountTodayByCampaign returns the number of signups created today (UTC).
	CountTodayByCampaign(ctx context.Context, campaignID uuid.UUID) (int, error)

	// SumReferralsByCampaign returns the total number of referrals across all signups.
	SumReferralsByCampaign(ctx context.Context, campaignID uuid.UUID) (int, error)

	// ListByCampaignFiltered returns a filtered, sorted, paginated list of signups
	// for the dashboard. It also returns the total count matching the filter.
	ListByCampaignFiltered(ctx context.Context, campaignID uuid.UUID, filter domain.SignupFilter) ([]domain.Signup, int, error)

	// TimeseriesByCampaign returns daily signup counts for the last `days` days,
	// including days with zero signups (for chart rendering).
	TimeseriesByCampaign(ctx context.Context, campaignID uuid.UUID, days int) ([]domain.DailyCount, error)

	// InviteTopN marks the top N verified (and not yet invited) signups as invited,
	// ordered by effective position ascending. Sets invited_at to now().
	// Returns the newly invited signups. If fewer than N are eligible, all eligible
	// ones are invited and no error is returned.
	InviteTopN(ctx context.Context, campaignID uuid.UUID, count int) ([]domain.Signup, error)

	// CountInvitedByCampaign returns the number of invited signups for a campaign.
	CountInvitedByCampaign(ctx context.Context, campaignID uuid.UUID) (int, error)

	// ListInvitedByCampaign returns invited signups for a campaign ordered by
	// invited_at DESC, with pagination. search filters by email or invite_token
	// prefix (pass "" to return all).
	ListInvitedByCampaign(ctx context.Context, campaignID uuid.UUID, limit, offset int, search string) ([]domain.Signup, int, error)

	// IncrementReferralCount atomically increments referral_count by 1 and
	// recalculates bonus_points based on the campaign's boost weight.
	// Returns the new referral_count and bonus_points. Returns ErrNotFound if absent.
	IncrementReferralCount(ctx context.Context, id uuid.UUID, boostWeight float64) (int, int, error)

	// GetStatsBatch returns all campaign stats in a single query.
	GetStatsBatch(ctx context.Context, campaignID uuid.UUID) (domain.CampaignStats, error)

	// GetByInviteToken fetches a Signup by its invite token.
	// Returns ErrNotFound if the token does not exist or is expired (>30 days).
	// Returns the signup regardless of whether it has been redeemed.
	GetByInviteToken(ctx context.Context, token string) (domain.Signup, error)

	// RedeemInviteToken atomically marks an invite token as redeemed (idempotent).
	// Returns the signup. Returns ErrNotFound if token does not exist or is expired.
	// If already redeemed, returns the signup with the existing redeemed_at timestamp.
	RedeemInviteToken(ctx context.Context, token string) (domain.Signup, error)

	// UpdateStatus sets the status of a signup. Used by the email-verification
	// workflow to expire signups whose 48-hour window has elapsed.
	UpdateStatus(ctx context.Context, id uuid.UUID, status domain.SignupStatus) error
}

// WebhookStore manages webhook endpoint and delivery persistence.
type WebhookStore interface {
	// CreateEndpoint persists a new WebhookEndpoint.
	CreateEndpoint(ctx context.Context, e domain.WebhookEndpoint) error

	// ListEndpoints returns all active endpoints for a campaign.
	ListEndpoints(ctx context.Context, campaignID uuid.UUID) ([]domain.WebhookEndpoint, error)

	// DeleteEndpoint removes a webhook endpoint by ID.
	DeleteEndpoint(ctx context.Context, id uuid.UUID) error

	// CreateDelivery persists a new pending WebhookDelivery.
	CreateDelivery(ctx context.Context, d domain.WebhookDelivery) error

	// UpdateDelivery persists delivery outcome (status, attempts, response_status, next_retry_at).
	UpdateDelivery(ctx context.Context, d domain.WebhookDelivery) error

	// ListPendingDeliveries returns deliveries that are due for (re)delivery,
	// ordered by next_retry_at ASC. Limit caps the result set.
	ListPendingDeliveries(ctx context.Context, limit int) ([]domain.WebhookDelivery, error)

	// CountPendingDeliveries returns the total number of webhook deliveries with status=pending.
	CountPendingDeliveries(ctx context.Context) (int64, error)

	// ListRecentDeliveriesByCampaign returns the most recent webhook deliveries
	// for all endpoints belonging to the campaign, joined with endpoint URL.
	ListRecentDeliveriesByCampaign(ctx context.Context, campaignID uuid.UUID, limit int) ([]domain.DeliveryRecord, error)
}

// AccountStore manages Account persistence.
type AccountStore interface {
	// GetOrCreateByEmail creates an account on first use, returns existing on subsequent calls.
	// The bool indicates whether the account was newly created.
	GetOrCreateByEmail(ctx context.Context, email string) (domain.Account, bool, error)

	// GetByID fetches an account by primary key. Returns ErrNotFound if absent.
	GetByID(ctx context.Context, id uuid.UUID) (domain.Account, error)

	// GetByEmail fetches an account by email. Returns ErrNotFound if absent.
	GetByEmail(ctx context.Context, email string) (domain.Account, error)
}

// MagicLinkStore manages magic link token persistence.
type MagicLinkStore interface {
	// Create persists a new MagicLinkToken.
	Create(ctx context.Context, t domain.MagicLinkToken) error

	// Get fetches a token by its internal token value. Returns ErrNotFound if absent.
	Get(ctx context.Context, token string) (domain.MagicLinkToken, error)

	// GetBySessionToken fetches a token by its session token.
	// Returns ErrNotFound if absent.
	GetBySessionToken(ctx context.Context, sessionToken string) (domain.MagicLinkToken, error)

	// MarkUsed atomically marks the token as used.
	// Returns ErrNotFound if token does not exist or has already been used (single-use guarantee).
	MarkUsed(ctx context.Context, token string, at time.Time) error

	// DeleteExpired removes tokens whose expiry has passed.
	DeleteExpired(ctx context.Context) error
}

// AccountAPIKeyStore manages account API key persistence.
type AccountAPIKeyStore interface {
	// Create persists a new AccountAPIKey.
	Create(ctx context.Context, k domain.AccountAPIKey) error

	// GetByRawKey looks up an active key by its SHA-256 hash (O(1) lookup).
	// Returns ErrNotFound if no active key matches.
	GetByRawKey(ctx context.Context, rawKey string) (domain.AccountAPIKey, error)

	// ListByAccount returns all keys for the given account ordered by created_at DESC.
	ListByAccount(ctx context.Context, accountID uuid.UUID) ([]domain.AccountAPIKey, error)

	// Revoke marks a key as revoked by setting revoked_at.
	Revoke(ctx context.Context, id uuid.UUID) error

	// TouchLastUsed updates last_used_at for a key.
	TouchLastUsed(ctx context.Context, id uuid.UUID, at time.Time) error
}

// OAuthStore manages OAuth 2.1 authorization codes and access tokens.
type OAuthStore interface {
	// CreateCode persists a new OAuthAuthorizationCode.
	CreateCode(ctx context.Context, c domain.OAuthAuthorizationCode) error

	// GetCode fetches an authorization code. Returns ErrNotFound if absent.
	GetCode(ctx context.Context, code string) (domain.OAuthAuthorizationCode, error)

	// MarkCodeUsed atomically marks an authorization code as used.
	// Returns ErrNotFound if the code does not exist or has already been used.
	MarkCodeUsed(ctx context.Context, code string, at time.Time) error

	// CreateToken persists a new OAuthAccessToken.
	CreateToken(ctx context.Context, t domain.OAuthAccessToken) error

	// GetByTokenHash fetches an unexpired access token by its SHA-256 hash.
	// Returns ErrNotFound if absent or expired.
	GetByTokenHash(ctx context.Context, hash string) (domain.OAuthAccessToken, error)

	// DeleteExpiredTokens removes access tokens whose expiry has passed.
	DeleteExpiredTokens(ctx context.Context) error
}

// EmailOutboxStore manages transactional email outbox persistence.
// Rows are inserted inside business transactions so a rollback also removes
// the queued email. The background processor calls ListPending and delivers
// via Resend, using each row's IdempotencyKey to prevent duplicate sends.
type EmailOutboxStore interface {
	// Create inserts a new outbox row using the pool (outside any transaction).
	Create(ctx context.Context, e domain.EmailOutbox) error

	// CreateWithTx inserts a new outbox row inside an existing pgx transaction,
	// making the email send atomic with the surrounding business logic.
	CreateWithTx(ctx context.Context, tx pgx.Tx, e domain.EmailOutbox) error

	// ListPending returns up to limit rows whose status is 'pending' and whose
	// next_retry_at is null or in the past, ordered by created_at ASC.
	ListPending(ctx context.Context, limit int) ([]domain.EmailOutbox, error)

	// MarkSent sets status='sent' and records the delivery time.
	MarkSent(ctx context.Context, id uuid.UUID, sentAt time.Time) error

	// MarkFailed sets status='failed' and records the final error message.
	MarkFailed(ctx context.Context, id uuid.UUID, lastError string) error

	// UpdateRetry increments retry_count, records the error, and sets the next
	// retry time for exponential backoff.
	UpdateRetry(ctx context.Context, id uuid.UUID, retryCount int, lastError string, nextRetryAt time.Time) error
}

// Sentinel errors returned by store implementations.

// ErrNotFound is returned when the requested record does not exist.
var ErrNotFound = storeError("not found")

// ErrConflict is returned when a uniqueness constraint would be violated.
var ErrConflict = storeError("conflict")

// ErrSlugConflict is returned when a campaign slug uniqueness constraint is violated.
// Callers should generate a new slug and retry the operation.
var ErrSlugConflict = storeError("slug conflict")

// ErrUnauthorized is returned when credential verification fails.
var ErrUnauthorized = storeError("unauthorized")

// storeError is a simple unexported error type so callers can use errors.Is.
type storeError string

func (e storeError) Error() string { return string(e) }
