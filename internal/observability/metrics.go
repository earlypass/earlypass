package observability

import (
	"context"
	"fmt"

	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/metric"
)

const instrumentationName = "github.com/earlypass/earlypass"

// Metrics holds the application-level OTel metric instruments.
// Metric names omit the "earlypass_" prefix because the OTel collector
// Prometheus exporter adds the "earlypass" namespace, yielding
// earlypass_<name> in Prometheus.
type Metrics struct {
	// Business / product counters
	SignupsTotal             metric.Int64Counter
	ReferralConversionsTotal metric.Int64Counter
	EmailVerificationsTotal  metric.Int64Counter
	InvitesSentTotal         metric.Int64Counter
	InviteReedemsTotal       metric.Int64Counter
	SignupDuplicatesRejected metric.Int64Counter

	// Email & webhook pipeline
	EmailSentTotal         metric.Int64Counter
	WebhookDeliveriesTotal metric.Int64Counter

	// Security / fraud
	FraudBlocksTotal      metric.Int64Counter
	SignInRequestsTotal metric.Int64Counter

	// Queues (gauges)
	OutboxPending   metric.Int64Gauge
	WebhookPending  metric.Int64Gauge
	ActiveCampaigns metric.Int64Gauge
}

// NewMetrics registers and returns all application metric instruments.
// It is safe to call before the global TracerProvider is configured — the
// instruments will be no-ops until a real provider is registered.
func NewMetrics() (*Metrics, error) {
	meter := otel.Meter(instrumentationName)

	signups, err := meter.Int64Counter(
		"signups_total",
		metric.WithDescription("Total signups created, labelled by campaign, status (pending/…), and source (direct/referral)"),
	)
	if err != nil {
		return nil, fmt.Errorf("signups_total: %w", err)
	}

	referrals, err := meter.Int64Counter(
		"referral_conversions_total",
		metric.WithDescription("Referral conversions: signups that were credited to a referrer upon email verification"),
	)
	if err != nil {
		return nil, fmt.Errorf("referral_conversions_total: %w", err)
	}

	verifications, err := meter.Int64Counter(
		"email_verifications_total",
		metric.WithDescription("Email verifications completed, labelled by campaign and source (direct/referral)"),
	)
	if err != nil {
		return nil, fmt.Errorf("email_verifications_total: %w", err)
	}

	invitesSent, err := meter.Int64Counter(
		"invites_sent_total",
		metric.WithDescription("Total invite slots sent to signups"),
	)
	if err != nil {
		return nil, fmt.Errorf("invites_sent_total: %w", err)
	}

	inviteRedeems, err := meter.Int64Counter(
		"invite_redeems_total",
		metric.WithDescription("Total invite tokens redeemed by recipients"),
	)
	if err != nil {
		return nil, fmt.Errorf("invite_redeems_total: %w", err)
	}

	duplicates, err := meter.Int64Counter(
		"signup_duplicates_rejected_total",
		metric.WithDescription("Signup attempts rejected because the email was already registered"),
	)
	if err != nil {
		return nil, fmt.Errorf("signup_duplicates_rejected_total: %w", err)
	}

	emailSent, err := meter.Int64Counter(
		"email_sent_total",
		metric.WithDescription("Emails dispatched by the outbox processor, labelled by status (sent/failed)"),
	)
	if err != nil {
		return nil, fmt.Errorf("email_sent_total: %w", err)
	}

	webhooks, err := meter.Int64Counter(
		"webhook_deliveries_total",
		metric.WithDescription("Webhook delivery attempts, labelled by status (delivered/failed)"),
	)
	if err != nil {
		return nil, fmt.Errorf("webhook_deliveries_total: %w", err)
	}

	fraudBlocks, err := meter.Int64Counter(
		"fraud_blocks_total",
		metric.WithDescription("Signup attempts blocked by fraud checks, labelled by reason"),
	)
	if err != nil {
		return nil, fmt.Errorf("fraud_blocks_total: %w", err)
	}

	signInRequests, err := meter.Int64Counter(
		"auth_signin_requests_total",
		metric.WithDescription("Sign-in code requests, labelled by result (sent/rate_limited)"),
	)
	if err != nil {
		return nil, fmt.Errorf("auth_signin_requests_total: %w", err)
	}

	outboxPending, err := meter.Int64Gauge(
		"outbox_pending",
		metric.WithDescription("Number of emails currently waiting in the outbox queue"),
	)
	if err != nil {
		return nil, fmt.Errorf("outbox_pending: %w", err)
	}

	webhookPending, err := meter.Int64Gauge(
		"webhook_pending",
		metric.WithDescription("Number of webhook deliveries currently waiting to be dispatched"),
	)
	if err != nil {
		return nil, fmt.Errorf("webhook_pending: %w", err)
	}

	activeCampaigns, err := meter.Int64Gauge(
		"active_campaigns",
		metric.WithDescription("Number of campaigns with status=active"),
	)
	if err != nil {
		return nil, fmt.Errorf("active_campaigns: %w", err)
	}

	return &Metrics{
		SignupsTotal:             signups,
		ReferralConversionsTotal: referrals,
		EmailVerificationsTotal:  verifications,
		InvitesSentTotal:         invitesSent,
		InviteReedemsTotal:       inviteRedeems,
		SignupDuplicatesRejected: duplicates,
		EmailSentTotal:           emailSent,
		WebhookDeliveriesTotal:   webhooks,
		FraudBlocksTotal:         fraudBlocks,
		SignInRequestsTotal:      signInRequests,
		OutboxPending:            outboxPending,
		WebhookPending:           webhookPending,
		ActiveCampaigns:          activeCampaigns,
	}, nil
}

// --- business / product ---

// RecordSignup increments the signups counter.
// source is "direct" or "referral".
func (m *Metrics) RecordSignup(ctx context.Context, campaignID, status, source string) {
	m.SignupsTotal.Add(ctx, 1,
		metric.WithAttributes(attrCampaignID(campaignID), attrStatus(status), attrSource(source)),
	)
}

// RecordReferralConversion increments the referral conversions counter.
func (m *Metrics) RecordReferralConversion(ctx context.Context, campaignID string) {
	m.ReferralConversionsTotal.Add(ctx, 1,
		metric.WithAttributes(attrCampaignID(campaignID)),
	)
}

// RecordEmailVerification increments the email verifications counter.
// source is "direct" or "referral".
func (m *Metrics) RecordEmailVerification(ctx context.Context, campaignID, source string) {
	m.EmailVerificationsTotal.Add(ctx, 1,
		metric.WithAttributes(attrCampaignID(campaignID), attrSource(source)),
	)
}

// RecordInvitesSent increments the invites sent counter by count.
func (m *Metrics) RecordInvitesSent(ctx context.Context, campaignID string, count int64) {
	if count <= 0 {
		return
	}
	m.InvitesSentTotal.Add(ctx, count,
		metric.WithAttributes(attrCampaignID(campaignID)),
	)
}

// RecordInviteRedeemed increments the invite redeems counter.
func (m *Metrics) RecordInviteRedeemed(ctx context.Context, campaignID string) {
	m.InviteReedemsTotal.Add(ctx, 1,
		metric.WithAttributes(attrCampaignID(campaignID)),
	)
}

// RecordSignupDuplicateRejected increments the duplicate signup rejections counter.
func (m *Metrics) RecordSignupDuplicateRejected(ctx context.Context, campaignID string) {
	m.SignupDuplicatesRejected.Add(ctx, 1,
		metric.WithAttributes(attrCampaignID(campaignID)),
	)
}

// --- email & webhook pipeline ---

// RecordEmailSent increments the email sent counter.
// status is "sent" or "failed".
func (m *Metrics) RecordEmailSent(ctx context.Context, status string) {
	m.EmailSentTotal.Add(ctx, 1,
		metric.WithAttributes(attrStatus(status)),
	)
}

// RecordWebhookDelivery increments the webhook deliveries counter.
// status is "delivered" or "failed".
func (m *Metrics) RecordWebhookDelivery(ctx context.Context, status string) {
	m.WebhookDeliveriesTotal.Add(ctx, 1,
		metric.WithAttributes(attrStatus(status)),
	)
}

// --- security / fraud ---

// RecordFraudBlock increments the fraud blocks counter.
// reason is "disposable_email", "ip_rate_limit", etc.
func (m *Metrics) RecordFraudBlock(ctx context.Context, reason string) {
	m.FraudBlocksTotal.Add(ctx, 1,
		metric.WithAttributes(attrReason(reason)),
	)
}

// RecordSignInRequest increments the sign-in code requests counter.
// result is "sent" or "rate_limited".
func (m *Metrics) RecordSignInRequest(ctx context.Context, result string) {
	m.SignInRequestsTotal.Add(ctx, 1,
		metric.WithAttributes(attrResult(result)),
	)
}

// --- gauges ---

// SetOutboxPending records the current outbox queue depth.
func (m *Metrics) SetOutboxPending(ctx context.Context, count int64) {
	m.OutboxPending.Record(ctx, count)
}

// SetWebhookPending records the current webhook queue depth.
func (m *Metrics) SetWebhookPending(ctx context.Context, count int64) {
	m.WebhookPending.Record(ctx, count)
}

// SetActiveCampaigns records the current number of active campaigns.
func (m *Metrics) SetActiveCampaigns(ctx context.Context, count int64) {
	m.ActiveCampaigns.Record(ctx, count)
}
