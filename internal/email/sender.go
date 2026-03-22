package email

import (
	"context"
	"fmt"
	"log/slog"

	resend "github.com/resend/resend-go/v2"
)

// Ensure Client implements IdempotentSender at compile time.
var _ IdempotentSender = (*Client)(nil)

// Sender is the interface for sending transactional email.
// Inject this interface rather than the concrete type so handlers remain testable.
type Sender interface {
	// Send sends an email with HTML and plain text bodies.
	// toAddr, subject, htmlBody, textBody are all required.
	Send(ctx context.Context, toAddr, subject, htmlBody, textBody string) error
}

// IdempotentSender extends Sender with idempotency-key support.
// The outbox processor uses this interface so that retries do not produce
// duplicate emails — Resend deduplicates based on the key for 24 hours.
type IdempotentSender interface {
	Sender
	// SendWithIdempotencyKey sends an email and passes idempotencyKey to Resend
	// as the Idempotency-Key request header.
	SendWithIdempotencyKey(ctx context.Context, toAddr, subject, htmlBody, textBody, idempotencyKey string) error
}

// Client is the Resend-backed email sender.
type Client struct {
	client  *resend.Client
	fromAddr string
}

// NewClient creates a new Resend-backed email client.
// apiKey is the Resend API key. fromAddr is the From: address for all outgoing mail.
func NewClient(apiKey, fromAddr string) *Client {
	return &Client{
		client:  resend.NewClient(apiKey),
		fromAddr: fromAddr,
	}
}

// Send sends an email via Resend.
func (c *Client) Send(ctx context.Context, toAddr, subject, htmlBody, textBody string) error {
	return c.SendWithIdempotencyKey(ctx, toAddr, subject, htmlBody, textBody, "")
}

// SendWithIdempotencyKey sends an email via Resend with an optional idempotency key.
// If idempotencyKey is non-empty, Resend deduplicates requests with the same key for 24 hours.
func (c *Client) SendWithIdempotencyKey(_ context.Context, toAddr, subject, htmlBody, textBody, idempotencyKey string) error {
	params := &resend.SendEmailRequest{
		From:    c.fromAddr,
		To:      []string{toAddr},
		Subject: subject,
		Html:    htmlBody,
		Text:    textBody,
	}
	var opts *resend.SendEmailOptions
	if idempotencyKey != "" {
		opts = &resend.SendEmailOptions{IdempotencyKey: idempotencyKey}
	}
	_, err := c.client.Emails.SendWithOptions(context.Background(), params, opts)
	if err != nil {
		return fmt.Errorf("sending email to %s: %w", toAddr, err)
	}
	return nil
}

// NoopSender is a no-op Sender that discards all emails.
// Useful in tests or when no email config is provided.
type NoopSender struct{}

// Send implements Sender (discards the email silently).
func (NoopSender) Send(_ context.Context, _, _, _, _ string) error { return nil }

// SendWithIdempotencyKey implements IdempotentSender (discards the email silently).
func (NoopSender) SendWithIdempotencyKey(_ context.Context, _, _, _, _, _ string) error {
	return nil
}

// LogSender is a dev-only Sender that prints emails to a slog.Logger instead of
// delivering them. Use it in development when no Resend credentials are configured.
type LogSender struct {
	Logger *slog.Logger
}

// Send logs the email (to, subject, text body) at INFO level.
func (s LogSender) Send(ctx context.Context, toAddr, subject, htmlBody, textBody string) error {
	return s.SendWithIdempotencyKey(ctx, toAddr, subject, htmlBody, textBody, "")
}

// SendWithIdempotencyKey logs the email at INFO level (idempotency key included for traceability).
func (s LogSender) SendWithIdempotencyKey(_ context.Context, toAddr, subject, _, textBody, idempotencyKey string) error {
	s.Logger.Info("📧 email (dev)",
		slog.String("to", toAddr),
		slog.String("subject", subject),
		slog.String("body", textBody),
		slog.String("idempotency_key", idempotencyKey),
	)
	return nil
}
