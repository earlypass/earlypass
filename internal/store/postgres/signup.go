package postgres

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/earlypass/earlypass/internal/domain"
	"github.com/earlypass/earlypass/internal/store"
)

// SignupStore implements store.SignupStore against PostgreSQL.
type SignupStore struct {
	pool *pgxpool.Pool
}

const signupColumns = `id, campaign_id, email, email_verified, verification_token,
	referral_code, referred_by, referral_count, base_position, bonus_points,
	ip_address, fingerprint, metadata, status, invited_at, invite_token, invite_token_redeemed_at,
	created_at, updated_at`

// Create persists a new Signup.
func (s *SignupStore) Create(ctx context.Context, sg domain.Signup) (domain.Signup, error) {
	metadata, err := json.Marshal(sg.Metadata)
	if err != nil {
		return domain.Signup{}, fmt.Errorf("marshalling signup metadata: %w", err)
	}

	// Atomic position: subquery runs inside the INSERT, no race possible.
	// Params: $1=id $2=campaign_id $3=email $4=email_verified $5=verification_token
	//         $6=referral_code $7=referred_by $8=referral_count $9=bonus_points
	//         $10=ip_address $11=fingerprint $12=metadata $13=status $14=created_at $15=updated_at
	var assignedPos int
	err = s.pool.QueryRow(ctx, `
		INSERT INTO signups
			(id, campaign_id, email, email_verified, verification_token,
			 referral_code, referred_by, referral_count, base_position, bonus_points,
			 ip_address, fingerprint, metadata, status, created_at, updated_at)
		VALUES (
			$1, $2, $3, $4, $5, $6, $7, $8,
			(SELECT COALESCE(MAX(base_position), 0) + 1 FROM signups WHERE campaign_id = $2),
			$9, $10, $11, $12, $13, $14, $15
		)
		RETURNING base_position`,
		sg.ID, sg.CampaignID, sg.Email, sg.EmailVerified, sg.VerificationToken,
		sg.ReferralCode, sg.ReferredBy, sg.ReferralCount,
		sg.BonusPoints, sg.IPAddress, sg.Fingerprint, metadata, string(sg.Status),
		sg.CreatedAt, sg.UpdatedAt,
	).Scan(&assignedPos)

	if err != nil {
		if isUniqueViolation(err) {
			return domain.Signup{}, store.ErrConflict
		}
		return domain.Signup{}, fmt.Errorf("inserting signup: %w", err)
	}

	sg.BasePosition = assignedPos
	return sg, nil
}

// GetByID fetches a Signup by primary key.
func (s *SignupStore) GetByID(ctx context.Context, id uuid.UUID) (domain.Signup, error) {
	row := s.pool.QueryRow(ctx,
		`SELECT `+signupColumns+` FROM signups WHERE id = $1`, id)
	sg, err := scanSignup(row)
	if err != nil {
		return domain.Signup{}, fmt.Errorf("fetching signup by id: %w", mapNotFound(err))
	}
	return sg, nil
}

// GetByCampaignAndEmail fetches a Signup by campaign + email.
func (s *SignupStore) GetByCampaignAndEmail(ctx context.Context, campaignID uuid.UUID, email string) (domain.Signup, error) {
	row := s.pool.QueryRow(ctx,
		`SELECT `+signupColumns+` FROM signups WHERE campaign_id = $1 AND email = $2`,
		campaignID, email)
	sg, err := scanSignup(row)
	if err != nil {
		return domain.Signup{}, fmt.Errorf("fetching signup by campaign+email: %w", mapNotFound(err))
	}
	return sg, nil
}

// ExistsByCampaignAndBaseEmail returns true if any signup in the campaign
// shares the same base email (plus-tag stripped) as baseEmail.
// baseEmail must already be normalized (plus-tag stripped, lowercased).
func (s *SignupStore) ExistsByCampaignAndBaseEmail(ctx context.Context, campaignID uuid.UUID, baseEmail string) (bool, error) {
	var exists bool
	err := s.pool.QueryRow(ctx,
		`SELECT EXISTS (
			SELECT 1 FROM signups
			WHERE campaign_id = $1
			  AND regexp_replace(lower(email), '\+[^@]*', '') = $2
		)`,
		campaignID, baseEmail,
	).Scan(&exists)
	if err != nil {
		return false, fmt.Errorf("checking base email existence: %w", err)
	}
	return exists, nil
}

// GetByCampaignAndReferralCode fetches a Signup by campaign + referral code.
func (s *SignupStore) GetByCampaignAndReferralCode(ctx context.Context, campaignID uuid.UUID, code string) (domain.Signup, error) {
	row := s.pool.QueryRow(ctx,
		`SELECT `+signupColumns+` FROM signups WHERE campaign_id = $1 AND referral_code = $2`,
		campaignID, code)
	sg, err := scanSignup(row)
	if err != nil {
		return domain.Signup{}, fmt.Errorf("fetching signup by campaign+referral_code: %w", mapNotFound(err))
	}
	return sg, nil
}

// ListByCampaign returns all signups for a campaign ordered by position.
func (s *SignupStore) ListByCampaign(ctx context.Context, campaignID uuid.UUID) ([]domain.Signup, error) {
	rows, err := s.pool.Query(ctx,
		`SELECT `+signupColumns+` FROM signups WHERE campaign_id = $1 ORDER BY base_position ASC`,
		campaignID)
	if err != nil {
		return nil, fmt.Errorf("listing signups by campaign: %w", err)
	}
	defer rows.Close()

	var signups []domain.Signup
	for rows.Next() {
		sg, err := scanSignup(rows)
		if err != nil {
			return nil, fmt.Errorf("scanning signup row: %w", err)
		}
		signups = append(signups, sg)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterating signup rows: %w", err)
	}
	return signups, nil
}

// CountByCampaign returns the number of non-invited signups for a campaign
// (the current waiting queue length).
func (s *SignupStore) CountByCampaign(ctx context.Context, campaignID uuid.UUID) (int, error) {
	var count int
	err := s.pool.QueryRow(ctx,
		`SELECT COUNT(*) FROM signups WHERE campaign_id = $1 AND status != 'invited'`, campaignID).Scan(&count)
	if err != nil {
		return 0, fmt.Errorf("counting signups: %w", err)
	}
	return count, nil
}

// GetAdjustedPosition returns the 1-based queue position of the given signup
// excluding any signups with status 'invited'.
func (s *SignupStore) GetAdjustedPosition(ctx context.Context, campaignID, signupID uuid.UUID) (int, error) {
	var pos int
	err := s.pool.QueryRow(ctx, `
		SELECT COUNT(*) + 1
		FROM signups s2
		JOIN signups s1 ON s1.id = $2
		WHERE s2.campaign_id = $1
		  AND s2.status != 'invited'
		  AND s2.id != $2
		  AND (
		    (s2.base_position - s2.bonus_points) < (s1.base_position - s1.bonus_points)
		    OR (
		      (s2.base_position - s2.bonus_points) = (s1.base_position - s1.bonus_points)
		      AND s2.base_position < s1.base_position
		    )
		  )`,
		campaignID, signupID,
	).Scan(&pos)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return 0, store.ErrNotFound
		}
		return 0, fmt.Errorf("getting adjusted position: %w", err)
	}
	return pos, nil
}

// NextPosition returns the next available base_position for a campaign.
func (s *SignupStore) NextPosition(ctx context.Context, campaignID uuid.UUID) (int, error) {
	var maxPos *int
	err := s.pool.QueryRow(ctx,
		`SELECT MAX(base_position) FROM signups WHERE campaign_id = $1`, campaignID).Scan(&maxPos)
	if err != nil {
		return 0, fmt.Errorf("getting next position: %w", err)
	}
	if maxPos == nil {
		return 1, nil
	}
	return *maxPos + 1, nil
}

// UpdateVerified marks a signup's email as verified and clears the verification token.
func (s *SignupStore) UpdateVerified(ctx context.Context, id uuid.UUID) error {
	tag, err := s.pool.Exec(ctx,
		`UPDATE signups SET email_verified = TRUE, verification_token = NULL, status = 'verified', updated_at = NOW() WHERE id = $1`,
		id)
	if err != nil {
		return fmt.Errorf("updating signup verified: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return store.ErrNotFound
	}
	return nil
}

// IncrementReferralCount atomically increments referral_count by 1 and
// recalculates bonus_points based on the campaign's boost weight.
// Returns the new referral_count and bonus_points. Returns ErrNotFound if absent.
func (s *SignupStore) IncrementReferralCount(ctx context.Context, id uuid.UUID, boostWeight float64) (int, int, error) {
	var newCount, newBonus int
	err := s.pool.QueryRow(ctx, `
		UPDATE signups
		SET referral_count = referral_count + 1,
		    bonus_points   = (referral_count + 1) * $1,
		    updated_at     = NOW()
		WHERE id = $2
		RETURNING referral_count, bonus_points`,
		boostWeight, id,
	).Scan(&newCount, &newBonus)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return 0, 0, store.ErrNotFound
		}
		return 0, 0, fmt.Errorf("incrementing referral count: %w", err)
	}
	return newCount, newBonus, nil
}

// UpdateStatus sets the status of a signup. Used by the email-verification
// workflow to expire signups whose 48-hour window has elapsed.
func (s *SignupStore) UpdateStatus(ctx context.Context, id uuid.UUID, status domain.SignupStatus) error {
	tag, err := s.pool.Exec(ctx,
		`UPDATE signups SET status = $1, updated_at = NOW() WHERE id = $2`,
		string(status), id)
	if err != nil {
		return fmt.Errorf("updating signup status: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return store.ErrNotFound
	}
	return nil
}

// UpdateReferralCount sets a signup's referral_count and bonus_points.
func (s *SignupStore) UpdateReferralCount(ctx context.Context, id uuid.UUID, count, bonusPoints int) error {
	tag, err := s.pool.Exec(ctx,
		`UPDATE signups SET referral_count = $1, bonus_points = $2, updated_at = NOW() WHERE id = $3`,
		count, bonusPoints, id)
	if err != nil {
		return fmt.Errorf("updating referral count: %w", err)
	}
	if tag.RowsAffected() == 0 {
		return store.ErrNotFound
	}
	return nil
}

// GetByVerificationToken fetches a Signup by its email verification token.
func (s *SignupStore) GetByVerificationToken(ctx context.Context, token string) (domain.Signup, error) {
	row := s.pool.QueryRow(ctx,
		`SELECT `+signupColumns+` FROM signups WHERE verification_token = $1`, token)
	sg, err := scanSignup(row)
	if err != nil {
		return domain.Signup{}, fmt.Errorf("fetching signup by verification token: %w", mapNotFound(err))
	}
	return sg, nil
}

// ListByCampaignPaginated returns a paginated list of signups.
func (s *SignupStore) ListByCampaignPaginated(ctx context.Context, campaignID uuid.UUID, limit, offset int) ([]domain.Signup, error) {
	rows, err := s.pool.Query(ctx,
		`SELECT `+signupColumns+` FROM signups WHERE campaign_id = $1 ORDER BY base_position ASC LIMIT $2 OFFSET $3`,
		campaignID, limit, offset)
	if err != nil {
		return nil, fmt.Errorf("listing signups paginated: %w", err)
	}
	defer rows.Close()

	var signups []domain.Signup
	for rows.Next() {
		sg, scanErr := scanSignup(rows)
		if scanErr != nil {
			return nil, fmt.Errorf("scanning signup row: %w", scanErr)
		}
		signups = append(signups, sg)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterating signup rows: %w", err)
	}
	return signups, nil
}

// ListLeaderboard returns top non-invited signups sorted by effective position (base_position - bonus_points).
func (s *SignupStore) ListLeaderboard(ctx context.Context, campaignID uuid.UUID, limit int) ([]domain.Signup, error) {
	rows, err := s.pool.Query(ctx,
		`SELECT `+signupColumns+`
		 FROM signups
		 WHERE campaign_id = $1
		   AND status != 'invited'
		 ORDER BY (base_position - bonus_points) ASC, base_position ASC
		 LIMIT $2`,
		campaignID, limit)
	if err != nil {
		return nil, fmt.Errorf("listing leaderboard: %w", err)
	}
	defer rows.Close()

	var signups []domain.Signup
	for rows.Next() {
		sg, scanErr := scanSignup(rows)
		if scanErr != nil {
			return nil, fmt.Errorf("scanning signup row: %w", scanErr)
		}
		signups = append(signups, sg)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterating leaderboard rows: %w", err)
	}
	return signups, nil
}

// CountVerifiedByCampaign returns the number of verified signups.
func (s *SignupStore) CountVerifiedByCampaign(ctx context.Context, campaignID uuid.UUID) (int, error) {
	var count int
	err := s.pool.QueryRow(ctx,
		`SELECT COUNT(*) FROM signups WHERE campaign_id = $1 AND email_verified = TRUE`, campaignID).Scan(&count)
	if err != nil {
		return 0, fmt.Errorf("counting verified signups: %w", err)
	}
	return count, nil
}

// CountTodayByCampaign returns the number of signups created today (UTC).
func (s *SignupStore) CountTodayByCampaign(ctx context.Context, campaignID uuid.UUID) (int, error) {
	var count int
	err := s.pool.QueryRow(ctx,
		`SELECT COUNT(*) FROM signups WHERE campaign_id = $1 AND created_at >= CURRENT_DATE`, campaignID).Scan(&count)
	if err != nil {
		return 0, fmt.Errorf("counting today's signups: %w", err)
	}
	return count, nil
}

// SumReferralsByCampaign returns the total referral count across all signups.
func (s *SignupStore) SumReferralsByCampaign(ctx context.Context, campaignID uuid.UUID) (int, error) {
	var total *int
	err := s.pool.QueryRow(ctx,
		`SELECT SUM(referral_count) FROM signups WHERE campaign_id = $1`, campaignID).Scan(&total)
	if err != nil {
		return 0, fmt.Errorf("summing referrals: %w", err)
	}
	if total == nil {
		return 0, nil
	}
	return *total, nil
}

// GetStatsBatch returns all campaign stats in a single query.
// Uses PostgreSQL's FILTER clause for conditional counts.
func (s *SignupStore) GetStatsBatch(ctx context.Context, campaignID uuid.UUID) (domain.CampaignStats, error) {
	var stats domain.CampaignStats
	err := s.pool.QueryRow(ctx, `
		SELECT
			COUNT(*) AS total,
			COUNT(*) FILTER (WHERE email_verified) AS verified,
			COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE) AS today,
			COALESCE(SUM(referral_count), 0) AS total_referrals,
			COUNT(*) FILTER (WHERE status = 'invited') AS invited
		FROM signups
		WHERE campaign_id = $1`,
		campaignID,
	).Scan(&stats.TotalSignups, &stats.VerifiedSignups, &stats.TodaySignups, &stats.TotalReferrals, &stats.InvitedSignups)
	if err != nil {
		return domain.CampaignStats{}, fmt.Errorf("getting stats batch: %w", err)
	}
	if stats.TotalSignups > 0 {
		stats.ReferralRate = float64(stats.TotalReferrals) / float64(stats.TotalSignups)
		stats.ViralCoefficient = stats.ReferralRate
	}
	return stats, nil
}

// ListByCampaignFiltered returns a filtered, sorted, paginated signup list
// along with the total count of matching rows (for pagination).
func (s *SignupStore) ListByCampaignFiltered(ctx context.Context, campaignID uuid.UUID, filter domain.SignupFilter) ([]domain.Signup, int, error) { //nolint:cyclop // complex filter building is inherently branchy
	args := []any{campaignID}
	where := []string{"campaign_id = $1"}

	if filter.Status != "" {
		args = append(args, filter.Status)
		where = append(where, fmt.Sprintf("status = $%d", len(args)))
	}
	if filter.Search != "" {
		args = append(args, "%"+strings.ToLower(filter.Search)+"%")
		where = append(where, fmt.Sprintf("LOWER(email) LIKE $%d", len(args)))
	}

	whereClause := strings.Join(where, " AND ")

	var orderClause string
	switch filter.Sort {
	case "position":
		orderClause = "(base_position - bonus_points) ASC, base_position ASC"
	case "referrals":
		orderClause = "referral_count DESC, base_position ASC"
	default:
		orderClause = "created_at DESC"
	}

	// Total count.
	var total int
	countQuery := fmt.Sprintf("SELECT COUNT(*) FROM signups WHERE %s", whereClause)
	if err := s.pool.QueryRow(ctx, countQuery, args...).Scan(&total); err != nil {
		return nil, 0, fmt.Errorf("counting filtered signups: %w", err)
	}

	// Paginated rows.
	limit := filter.Limit
	if limit <= 0 {
		limit = 50
	}
	offset := filter.Offset
	if offset < 0 {
		offset = 0
	}

	args = append(args, limit, offset)
	dataQuery := fmt.Sprintf(
		"SELECT %s FROM signups WHERE %s ORDER BY %s LIMIT $%d OFFSET $%d",
		signupColumns, whereClause, orderClause, len(args)-1, len(args),
	)
	rows, err := s.pool.Query(ctx, dataQuery, args...)
	if err != nil {
		return nil, 0, fmt.Errorf("listing filtered signups: %w", err)
	}
	defer rows.Close()

	var signups []domain.Signup
	for rows.Next() {
		sg, scanErr := scanSignup(rows)
		if scanErr != nil {
			return nil, 0, fmt.Errorf("scanning signup row: %w", scanErr)
		}
		signups = append(signups, sg)
	}
	if err = rows.Err(); err != nil {
		return nil, 0, fmt.Errorf("iterating filtered signup rows: %w", err)
	}
	return signups, total, nil
}

// TimeseriesByCampaign returns daily signup counts for the last `days` days
// (including days with zero signups), ordered oldest first.
func (s *SignupStore) TimeseriesByCampaign(ctx context.Context, campaignID uuid.UUID, days int) ([]domain.DailyCount, error) {
	if days <= 0 {
		days = 30
	}
	rows, err := s.pool.Query(ctx, `
		WITH dates AS (
			SELECT generate_series(
				(CURRENT_DATE - ($2 - 1) * INTERVAL '1 day'),
				CURRENT_DATE,
				INTERVAL '1 day'
			)::date AS day
		),
		counts AS (
			SELECT DATE(created_at AT TIME ZONE 'UTC') AS day, COUNT(*) AS cnt
			FROM signups
			WHERE campaign_id = $1
			  AND created_at >= CURRENT_DATE - ($2 - 1) * INTERVAL '1 day'
			GROUP BY DATE(created_at AT TIME ZONE 'UTC')
		)
		SELECT d.day, COALESCE(c.cnt, 0) AS count
		FROM dates d
		LEFT JOIN counts c ON c.day = d.day
		ORDER BY d.day ASC`,
		campaignID, days,
	)
	if err != nil {
		return nil, fmt.Errorf("querying timeseries: %w", err)
	}
	defer rows.Close()

	var result []domain.DailyCount
	for rows.Next() {
		var dc domain.DailyCount
		var day time.Time
		var count int64
		if scanErr := rows.Scan(&day, &count); scanErr != nil {
			return nil, fmt.Errorf("scanning timeseries row: %w", scanErr)
		}
		dc.Date = day.UTC()
		dc.Count = int(count)
		result = append(result, dc)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterating timeseries rows: %w", err)
	}
	return result, nil
}

// --- scanner ---

func scanSignup(row rowScanner) (domain.Signup, error) {
	var sg domain.Signup
	var statusStr string
	var metadataRaw []byte
	var verificationToken *string
	var referredBy *uuid.UUID
	var invitedAt *time.Time
	var inviteToken *string
	var inviteTokenRedeemedAt *time.Time

	err := row.Scan(
		&sg.ID, &sg.CampaignID, &sg.Email, &sg.EmailVerified, &verificationToken,
		&sg.ReferralCode, &referredBy, &sg.ReferralCount, &sg.BasePosition, &sg.BonusPoints,
		&sg.IPAddress, &sg.Fingerprint, &metadataRaw, &statusStr,
		&invitedAt, &inviteToken, &inviteTokenRedeemedAt,
		&sg.CreatedAt, &sg.UpdatedAt,
	)
	if err != nil {
		return domain.Signup{}, fmt.Errorf("scanning signup: %w", err)
	}

	if metadataRaw != nil {
		if err = json.Unmarshal(metadataRaw, &sg.Metadata); err != nil {
			return domain.Signup{}, fmt.Errorf("unmarshalling signup metadata: %w", err)
		}
	}

	sg.VerificationToken = verificationToken
	sg.ReferredBy = referredBy
	sg.Status = domain.SignupStatus(statusStr)
	if invitedAt != nil {
		t := invitedAt.UTC()
		sg.InvitedAt = &t
	}
	sg.InviteToken = inviteToken
	if inviteTokenRedeemedAt != nil {
		t := inviteTokenRedeemedAt.UTC()
		sg.InviteTokenRedeemedAt = &t
	}
	sg.CreatedAt = sg.CreatedAt.UTC()
	sg.UpdatedAt = sg.UpdatedAt.UTC()
	return sg, nil
}

// InviteTopN marks the top N verified, non-invited signups as invited (by effective
// position ascending) and returns them. Already-invited signups are skipped.
func (s *SignupStore) InviteTopN(ctx context.Context, campaignID uuid.UUID, count int) ([]domain.Signup, error) {
	if count <= 0 {
		return nil, nil
	}
	rows, err := s.pool.Query(ctx, `
		WITH candidates AS (
			SELECT id
			FROM signups
			WHERE campaign_id = $1
			  AND status = 'verified'
			ORDER BY (base_position - bonus_points) ASC, base_position ASC
			LIMIT $2
		),
		updated AS (
			UPDATE signups
			SET status = 'invited',
			    invited_at = NOW(),
			    invite_token = replace(gen_random_uuid()::text || gen_random_uuid()::text, '-', '')
			WHERE id IN (SELECT id FROM candidates)
			RETURNING `+signupColumns+`
		)
		SELECT `+signupColumns+` FROM updated
		ORDER BY (base_position - bonus_points) ASC, base_position ASC`,
		campaignID, count,
	)
	if err != nil {
		return nil, fmt.Errorf("inviting top N signups: %w", err)
	}
	defer rows.Close()

	var signups []domain.Signup
	for rows.Next() {
		sg, scanErr := scanSignup(rows)
		if scanErr != nil {
			return nil, fmt.Errorf("scanning invited signup: %w", scanErr)
		}
		signups = append(signups, sg)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterating invited signup rows: %w", err)
	}
	return signups, nil
}

// CountInvitedByCampaign returns the number of invited signups for a campaign.
func (s *SignupStore) CountInvitedByCampaign(ctx context.Context, campaignID uuid.UUID) (int, error) {
	var count int
	err := s.pool.QueryRow(ctx,
		`SELECT COUNT(*) FROM signups WHERE campaign_id = $1 AND status = 'invited'`,
		campaignID,
	).Scan(&count)
	if err != nil {
		return 0, fmt.Errorf("counting invited signups: %w", err)
	}
	return count, nil
}

// ListInvitedByCampaign returns invited signups ordered by invited_at DESC with pagination.
// search filters by email prefix or invite_token prefix (case-insensitive). Pass "" for no filter.
func (s *SignupStore) ListInvitedByCampaign(ctx context.Context, campaignID uuid.UUID, limit, offset int, search string) ([]domain.Signup, int, error) {
	args := []any{campaignID}
	where := "campaign_id = $1 AND status = 'invited'"
	if search != "" {
		pattern := strings.ToLower(search) + "%"
		args = append(args, pattern)
		where += fmt.Sprintf(" AND (LOWER(email) LIKE $%d OR invite_token LIKE $%d)", len(args), len(args))
	}

	var total int
	if err := s.pool.QueryRow(ctx,
		fmt.Sprintf("SELECT COUNT(*) FROM signups WHERE %s", where),
		args...,
	).Scan(&total); err != nil {
		return nil, 0, fmt.Errorf("counting invited signups for list: %w", err)
	}

	dataArgs := append(args, limit, offset)
	rows, err := s.pool.Query(ctx,
		fmt.Sprintf(
			"SELECT %s FROM signups WHERE %s ORDER BY invited_at DESC LIMIT $%d OFFSET $%d",
			signupColumns, where, len(dataArgs)-1, len(dataArgs),
		),
		dataArgs...,
	)
	if err != nil {
		return nil, 0, fmt.Errorf("listing invited signups: %w", err)
	}
	defer rows.Close()

	var signups []domain.Signup
	for rows.Next() {
		sg, scanErr := scanSignup(rows)
		if scanErr != nil {
			return nil, 0, fmt.Errorf("scanning invited signup: %w", scanErr)
		}
		signups = append(signups, sg)
	}
	if err = rows.Err(); err != nil {
		return nil, 0, fmt.Errorf("iterating invited signup rows: %w", err)
	}
	return signups, total, nil
}

// GetByInviteToken fetches a Signup by its invite token.
// Returns ErrNotFound if the token does not exist or is expired (>30 days from invited_at).
// Returns the signup regardless of whether it has been redeemed.
func (s *SignupStore) GetByInviteToken(ctx context.Context, token string) (domain.Signup, error) {
	row := s.pool.QueryRow(ctx,
		`SELECT `+signupColumns+`
		 FROM signups
		 WHERE invite_token = $1
		   AND invited_at > NOW() - INTERVAL '30 days'`,
		token,
	)
	sg, err := scanSignup(row)
	if err != nil {
		return domain.Signup{}, fmt.Errorf("fetching signup by invite token: %w", mapNotFound(err))
	}
	return sg, nil
}

// RedeemInviteToken atomically marks an invite token as redeemed (idempotent).
// Returns the signup. Returns ErrNotFound if token does not exist or is expired.
// If already redeemed, returns the signup with the existing redeemed_at timestamp.
func (s *SignupStore) RedeemInviteToken(ctx context.Context, token string) (domain.Signup, error) {
	row := s.pool.QueryRow(ctx,
		`UPDATE signups
		 SET invite_token_redeemed_at = COALESCE(invite_token_redeemed_at, NOW())
		 WHERE invite_token = $1
		   AND invited_at > NOW() - INTERVAL '30 days'
		 RETURNING `+signupColumns,
		token,
	)
	sg, err := scanSignup(row)
	if err != nil {
		return domain.Signup{}, fmt.Errorf("redeeming invite token: %w", mapNotFound(err))
	}
	return sg, nil
}
