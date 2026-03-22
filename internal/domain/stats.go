package domain

// CampaignStats holds aggregate stats for a campaign.
type CampaignStats struct {
	TotalSignups     int     `json:"total_signups"`
	VerifiedSignups  int     `json:"verified_signups"`
	TodaySignups     int     `json:"today_signups"`
	TotalReferrals   int     `json:"total_referrals"`
	InvitedSignups   int     `json:"invited_signups"`
	ReferralRate     float64 `json:"referral_rate"`
	ViralCoefficient float64 `json:"viral_coefficient"`
}