package domain

import (
	"strings"
	"testing"

	"github.com/google/uuid"
)

func TestNewCampaign(t *testing.T) {
	t.Run("happy path", func(t *testing.T) {
		c, err := NewCampaign("My Awesome Waitlist")
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}

		if c.ID.String() == "" {
			t.Error("expected non-empty ID")
		}
		if c.Name != "My Awesome Waitlist" {
			t.Errorf("name = %q, want %q", c.Name, "My Awesome Waitlist")
		}
		// Slug must be non-empty, random (not derived from name), and match the slug alphabet.
		if c.Slug == "" {
			t.Error("expected non-empty slug")
		}
		if len(c.Slug) != slugLength {
			t.Errorf("slug length = %d, want %d", len(c.Slug), slugLength)
		}
		for _, r := range c.Slug {
			if !strings.ContainsRune(slugAlphabet, r) {
				t.Errorf("slug %q contains unexpected character %q", c.Slug, r)
			}
		}
		if c.Slug == "my-awesome-waitlist" {
			t.Error("slug must not be derived from campaign name")
		}
		if c.Status != CampaignStatusActive {
			t.Errorf("status = %q, want %q", c.Status, CampaignStatusActive)
		}
		if c.Settings.BoostWeight != 1.0 {
			t.Errorf("boost_weight = %v, want 1.0", c.Settings.BoostWeight)
		}
		// AccountID is zero value — caller must set it before persisting.
	})

	t.Run("empty name returns error", func(t *testing.T) {
		_, err := NewCampaign("")
		if err == nil {
			t.Error("expected error for empty name")
		}
	})

	t.Run("whitespace-only name returns error", func(t *testing.T) {
		_, err := NewCampaign("   ")
		if err == nil {
			t.Error("expected error for whitespace-only name")
		}
	})

	t.Run("name too long returns error", func(t *testing.T) {
		_, err := NewCampaign(strings.Repeat("a", 201))
		if err == nil {
			t.Error("expected error for name > 200 chars")
		}
	})

	t.Run("two campaigns have different IDs", func(t *testing.T) {
		c1, err := NewCampaign("Campaign A")
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		c2, err := NewCampaign("Campaign B")
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if c1.ID == c2.ID {
			t.Error("two campaigns should have different IDs")
		}
	})

	t.Run("two campaigns have different slugs", func(t *testing.T) {
		c1, err := NewCampaign("My Campaign")
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		c2, err := NewCampaign("My Campaign")
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if c1.Slug == c2.Slug {
			t.Error("two campaigns should almost certainly have different slugs")
		}
	})
}

func TestGenerateCampaignSlug(t *testing.T) {
	t.Run("returns correct length", func(t *testing.T) {
		slug, err := GenerateCampaignSlug()
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if len(slug) != slugLength {
			t.Errorf("slug length = %d, want %d", len(slug), slugLength)
		}
	})

	t.Run("uses only slug alphabet characters", func(t *testing.T) {
		slug, err := GenerateCampaignSlug()
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		for _, r := range slug {
			if !strings.ContainsRune(slugAlphabet, r) {
				t.Errorf("slug %q contains unexpected character %q", slug, r)
			}
		}
	})

	t.Run("generates unique slugs", func(t *testing.T) {
		seen := make(map[string]struct{}, 100)
		for i := 0; i < 100; i++ {
			slug, err := GenerateCampaignSlug()
			if err != nil {
				t.Fatalf("unexpected error at iteration %d: %v", i, err)
			}
			if _, dup := seen[slug]; dup {
				t.Errorf("duplicate slug generated: %q", slug)
			}
			seen[slug] = struct{}{}
		}
	})
}

func TestCampaignValidate(t *testing.T) {
validCampaign := func() Campaign {
return Campaign{
ID:        uuid.New(),
Name:      "My Campaign",
Slug:      "my-campaign",
Status:    CampaignStatusActive,
AccountID: uuid.New(),
Settings: CampaignSettings{
BoostWeight: 1.0,
ProductURL:  "https://example.com",
},
}
}

t.Run("valid campaign passes", func(t *testing.T) {
c := validCampaign()
if err := c.Validate(); err != nil {
t.Errorf("unexpected error: %v", err)
}
})

t.Run("empty name returns error", func(t *testing.T) {
c := validCampaign()
c.Name = ""
if err := c.Validate(); err == nil {
t.Error("expected error for empty name")
}
})

t.Run("name too long returns error", func(t *testing.T) {
c := validCampaign()
c.Name = strings.Repeat("a", 201)
if err := c.Validate(); err == nil {
t.Error("expected error for name > 200 chars")
}
})

t.Run("empty slug returns error", func(t *testing.T) {
c := validCampaign()
c.Slug = ""
if err := c.Validate(); err == nil {
t.Error("expected error for empty slug")
}
})

t.Run("empty product_url returns error", func(t *testing.T) {
c := validCampaign()
c.Settings.ProductURL = ""
if err := c.Validate(); err == nil {
t.Error("expected error for empty product_url")
}
})

t.Run("invalid product_url returns error", func(t *testing.T) {
c := validCampaign()
c.Settings.ProductURL = "://bad url"
if err := c.Validate(); err == nil {
t.Error("expected error for unparseable product_url")
}
})

t.Run("valid product_url with path passes", func(t *testing.T) {
c := validCampaign()
c.Settings.ProductURL = "https://example.com/waitlist"
if err := c.Validate(); err != nil {
t.Errorf("unexpected error for valid URL with path: %v", err)
}
})
}

func TestDefaultCampaignSettings(t *testing.T) {
s := DefaultCampaignSettings()
if s.BoostWeight != 1.0 {
t.Errorf("default BoostWeight = %v, want 1.0", s.BoostWeight)
}
if s.ProductURL != "" {
t.Errorf("default ProductURL = %q, want empty", s.ProductURL)
}
}

func TestCampaignValidate_InviteURL(t *testing.T) {
	validCampaign := func() Campaign {
		return Campaign{
			ID:        uuid.New(),
			Name:      "My Campaign",
			Slug:      "my-campaign",
			Status:    CampaignStatusActive,
			AccountID: uuid.New(),
			Settings: CampaignSettings{
				BoostWeight: 1.0,
				ProductURL:  "https://example.com",
			},
		}
	}

	t.Run("empty invite_url passes", func(t *testing.T) {
		c := validCampaign()
		c.Settings.InviteURL = ""
		if err := c.Validate(); err != nil {
			t.Errorf("unexpected error: %v", err)
		}
	})

	t.Run("valid invite_url passes", func(t *testing.T) {
		c := validCampaign()
		c.Settings.InviteURL = "https://api.earlypass.app/invite"
		if err := c.Validate(); err != nil {
			t.Errorf("unexpected error: %v", err)
		}
	})

	t.Run("invalid invite_url returns error", func(t *testing.T) {
		c := validCampaign()
		c.Settings.InviteURL = "://bad url"
		if err := c.Validate(); err == nil {
			t.Error("expected error for invalid invite_url")
		}
	})
}

func TestInviteLinkBase(t *testing.T) {
	t.Run("returns invite_url when set", func(t *testing.T) {
		s := CampaignSettings{
			ProductURL: "https://product.com",
			InviteURL:  "https://api.earlypass.app/invite",
		}
		if got := s.InviteLinkBase(); got != "https://api.earlypass.app/invite" {
			t.Errorf("InviteLinkBase() = %q, want invite_url", got)
		}
	})

	t.Run("falls back to product_url when invite_url empty", func(t *testing.T) {
		s := CampaignSettings{
			ProductURL: "https://product.com",
			InviteURL:  "",
		}
		if got := s.InviteLinkBase(); got != "https://product.com" {
			t.Errorf("InviteLinkBase() = %q, want product_url", got)
		}
	})

	t.Run("returns empty when both empty", func(t *testing.T) {
		s := CampaignSettings{}
		if got := s.InviteLinkBase(); got != "" {
			t.Errorf("InviteLinkBase() = %q, want empty", got)
		}
	})
}

func TestNewCampaign_NonPrintableNameReturnsError(t *testing.T) {
_, err := NewCampaign("bad\x00name")
if err == nil {
t.Error("expected error for name containing non-printable characters")
}
}

func TestNewCampaign_MaxLengthNamePasses(t *testing.T) {
_, err := NewCampaign(strings.Repeat("a", 200))
if err != nil {
t.Errorf("unexpected error for 200-char name: %v", err)
}
}
