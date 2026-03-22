package domain

import "github.com/google/uuid"

// ReferralStats summarises referral activity for a single signup.
type ReferralStats struct {
	SignupID      uuid.UUID
	ReferralCount int
	BonusPoints   int
	EffectivePos  int
}

// CampaignReferralSummary contains aggregate referral metrics for a campaign.
type CampaignReferralSummary struct {
	CampaignID      uuid.UUID
	TotalSignups    int
	TotalReferrals  int
	ViralCoefficient float64 // average referrals per signup
}

// CalcViralCoefficient computes the viral coefficient (K-factor) for a campaign.
// K = total referrals / total signups. Returns 0 when there are no signups.
func CalcViralCoefficient(totalSignups, totalReferrals int) float64 {
	if totalSignups == 0 {
		return 0
	}
	return float64(totalReferrals) / float64(totalSignups)
}
