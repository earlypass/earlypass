package domain

import (
	"crypto/rand"
	"errors"
	"fmt"
	"strings"
	"time"
	"unicode"

	"github.com/google/uuid"
)

// CampaignStatus represents the lifecycle state of a campaign.
type CampaignStatus string

// Campaign status constants.
const (
	CampaignStatusPending CampaignStatus = "pending"
	CampaignStatusActive  CampaignStatus = "active"
	CampaignStatusPaused  CampaignStatus = "paused"
	CampaignStatusFull    CampaignStatus = "full"
)

// CampaignSettings holds configurable campaign behaviour.
type CampaignSettings struct {
	// BoostWeight controls how many queue positions each referral is worth.
	// Effective position = base_position - (referral_count * boost_weight).
	// Default: 1.0
	BoostWeight float64 `json:"boost_weight"`
	// ProductURL is the URL of the product page. Used as the CTA link in invite
	// emails and to derive the allowed origin for widget API requests — only
	// requests whose Origin matches scheme://host of this URL are accepted.
	ProductURL string `json:"product_url,omitempty"`
}

// DefaultCampaignSettings returns sensible defaults.
func DefaultCampaignSettings() CampaignSettings {
	return CampaignSettings{
		BoostWeight: 1.0,
	}
}

// Campaign represents an EarlyPass signup campaign.
type Campaign struct {
	ID              uuid.UUID
	Name            string
	Slug            string
	Settings        CampaignSettings
	MaxSignups      *int
	Status          CampaignStatus
	AccountID       uuid.UUID // required — every campaign must belong to an account
	CreatedAt       time.Time
	UpdatedAt       time.Time
}

// NewCampaign creates a new Campaign with default settings and a random slug.
// The campaign's AccountID must be set by the caller before persisting.
// If the slug collides on insert, callers should invoke GenerateCampaignSlug
// to assign a fresh slug and retry.
func NewCampaign(name string) (Campaign, error) {
	if err := validateCampaignName(name); err != nil {
		return Campaign{}, err
	}

	slug, err := GenerateCampaignSlug()
	if err != nil {
		return Campaign{}, err
	}

	now := time.Now().UTC()
	return Campaign{
		ID:        uuid.New(),
		Name:      name,
		Slug:      slug,
		Settings:  DefaultCampaignSettings(),
		// Campaigns are active immediately on creation.
		Status:    CampaignStatusActive,
		CreatedAt: now,
		UpdatedAt: now,
	}, nil
}

// Validate checks business-rule invariants on an existing Campaign.
func (c *Campaign) Validate() error {
	if err := validateCampaignName(c.Name); err != nil {
		return err
	}
	if c.Slug == "" {
		return errors.New("slug is required")
	}
	if c.Settings.ProductURL == "" {
		return fmt.Errorf("settings.product_url: required")
	}
	if _, err := parseOrigin(c.Settings.ProductURL); err != nil {
		return fmt.Errorf("settings.product_url: must be a valid URL (e.g. https://example.com)")
	}
	return nil
}

// --- helpers ---

// slugAlphabet is URL-safe, lowercase alphanumeric characters for campaign slugs.
const slugAlphabet = "abcdefghijklmnopqrstuvwxyz0123456789"

const slugLength = 10

// GenerateCampaignSlug produces a cryptographically random 10-character
// lowercase alphanumeric slug suitable for use in campaign URLs.
// Slugs are globally unique and not derived from the campaign name.
func GenerateCampaignSlug() (string, error) {
	// Use rejection sampling to avoid modulo bias.
	// alphabet length = 36; we use 6 bits (values 0–63) and reject >= 36.
	const mask = byte(0x3F) // 6-bit mask

	result := make([]byte, slugLength)
	buf := make([]byte, slugLength*3) // extra bytes for rejection

	filled := 0
	for filled < slugLength {
		if _, err := rand.Read(buf); err != nil {
			return "", fmt.Errorf("generating campaign slug: %w", err)
		}
		for _, b := range buf {
			idx := b & mask
			if int(idx) < len(slugAlphabet) {
				result[filled] = slugAlphabet[idx]
				filled++
				if filled == slugLength {
					break
				}
			}
		}
	}

	return string(result), nil
}

func validateCampaignName(name string) error {
	name = strings.TrimSpace(name)
	if name == "" {
		return errors.New("name is required")
	}
	if len(name) > 200 {
		return errors.New("name must be 200 characters or fewer")
	}
	for _, r := range name {
		if !unicode.IsPrint(r) {
			return errors.New("name contains non-printable characters")
		}
	}
	return nil
}
