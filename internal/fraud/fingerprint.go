package fraud

// NormaliseFingerprint sanitises a client-supplied fingerprint for storage.
// In v1 we store fingerprints for future analysis only — no blocking.
// Returns an empty string for blank input.
func NormaliseFingerprint(fp string) string {
	if len(fp) > 256 {
		return fp[:256]
	}
	return fp
}
