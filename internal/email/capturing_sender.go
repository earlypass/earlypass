package email

import (
	"context"
	"sync"
	"time"
)

// CapturedEmail is a record of a single email captured by CapturingSender.
type CapturedEmail struct {
	To             string
	Subject        string
	HTML           string
	Text           string
	IdempotencyKey string
}

// CapturingSender records all sent emails in memory.
// It is safe for concurrent use and intended for use in tests.
type CapturingSender struct {
	mu   sync.Mutex
	sent []CapturedEmail
}

// Send records the email and returns nil.
func (s *CapturingSender) Send(ctx context.Context, toAddr, subject, htmlBody, textBody string) error {
	return s.SendWithIdempotencyKey(ctx, toAddr, subject, htmlBody, textBody, "")
}

// SendWithIdempotencyKey records the email (including idempotency key) and returns nil.
func (s *CapturingSender) SendWithIdempotencyKey(_ context.Context, toAddr, subject, htmlBody, textBody, idempotencyKey string) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.sent = append(s.sent, CapturedEmail{
		To:             toAddr,
		Subject:        subject,
		HTML:           htmlBody,
		Text:           textBody,
		IdempotencyKey: idempotencyKey,
	})
	return nil
}

// Sent returns a snapshot of all captured emails.
func (s *CapturingSender) Sent() []CapturedEmail {
	s.mu.Lock()
	defer s.mu.Unlock()
	out := make([]CapturedEmail, len(s.sent))
	copy(out, s.sent)
	return out
}

// Reset clears all captured emails.
func (s *CapturingSender) Reset() {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.sent = nil
}

// WaitForCount blocks until at least n emails have been captured or the timeout
// elapses. Returns true if the target count was reached.
func (s *CapturingSender) WaitForCount(n int, timeout time.Duration) bool {
	deadline := time.Now().Add(timeout)
	for time.Now().Before(deadline) {
		s.mu.Lock()
		count := len(s.sent)
		s.mu.Unlock()
		if count >= n {
			return true
		}
		time.Sleep(5 * time.Millisecond)
	}
	return false
}
