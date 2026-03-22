package domain

import "testing"

func TestCalcViralCoefficient(t *testing.T) {
	cases := []struct {
		name           string
		totalSignups   int
		totalReferrals int
		want           float64
	}{
		{"no signups", 0, 0, 0},
		{"no referrals", 10, 0, 0},
		{"perfect viral", 10, 10, 1.0},
		{"partial viral", 10, 5, 0.5},
		{"super viral", 5, 15, 3.0},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			got := CalcViralCoefficient(tc.totalSignups, tc.totalReferrals)
			if got != tc.want {
				t.Errorf("CalcViralCoefficient(%d, %d) = %v, want %v",
					tc.totalSignups, tc.totalReferrals, got, tc.want)
			}
		})
	}
}
