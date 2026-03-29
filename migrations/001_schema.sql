-- +goose Up
-- +goose StatementBegin

CREATE TYPE campaign_status AS ENUM ('pending', 'active', 'paused', 'full');
CREATE TYPE signup_status AS ENUM ('pending', 'verified', 'rejected', 'expired', 'invited');
CREATE TYPE webhook_delivery_status AS ENUM ('pending', 'delivered', 'failed');

CREATE TABLE campaigns (
    id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name                  TEXT NOT NULL,
    slug                  TEXT NOT NULL UNIQUE,
    settings              JSONB NOT NULL DEFAULT '{}',
    max_signups           INTEGER,
    status                campaign_status NOT NULL DEFAULT 'pending',
    created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE signups (
    id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    campaign_id        UUID NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
    email              TEXT NOT NULL,
    email_verified     BOOLEAN NOT NULL DEFAULT FALSE,
    verification_token TEXT,
    referral_code      TEXT NOT NULL UNIQUE,
    referred_by        UUID REFERENCES signups(id) ON DELETE SET NULL,
    referral_count     INTEGER NOT NULL DEFAULT 0,
    base_position      INTEGER NOT NULL,
    bonus_points       INTEGER NOT NULL DEFAULT 0,
    ip_address         TEXT NOT NULL DEFAULT '',
    fingerprint        TEXT NOT NULL DEFAULT '',
    metadata           JSONB NOT NULL DEFAULT '{}',
    status             signup_status NOT NULL DEFAULT 'pending',
    invited_at         TIMESTAMPTZ,
    invite_token              TEXT,
    invite_token_redeemed_at  TIMESTAMPTZ,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE webhook_endpoints (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    campaign_id UUID NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
    url         TEXT NOT NULL,
    secret      TEXT NOT NULL,
    events      TEXT[] NOT NULL DEFAULT '{}',
    active      BOOLEAN NOT NULL DEFAULT TRUE,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE webhook_deliveries (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    webhook_endpoint_id UUID NOT NULL REFERENCES webhook_endpoints(id) ON DELETE CASCADE,
    event_type          TEXT NOT NULL,
    payload             JSONB NOT NULL DEFAULT '{}',
    response_status     INTEGER,
    attempts            INTEGER NOT NULL DEFAULT 0,
    next_retry_at       TIMESTAMPTZ,
    status              webhook_delivery_status NOT NULL DEFAULT 'pending',
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_signups_campaign_position  ON signups(campaign_id, base_position);
CREATE UNIQUE INDEX idx_signups_campaign_email ON signups(campaign_id, email);
CREATE INDEX idx_signups_referral_code      ON signups(referral_code);
CREATE INDEX idx_signups_referred_by        ON signups(referred_by);
CREATE INDEX idx_signups_verification_token ON signups(verification_token) WHERE verification_token IS NOT NULL;
CREATE UNIQUE INDEX idx_signups_invite_token ON signups(invite_token) WHERE invite_token IS NOT NULL;
CREATE INDEX idx_webhook_endpoints_campaign ON webhook_endpoints(campaign_id);
CREATE INDEX idx_webhook_deliveries_status  ON webhook_deliveries(status, next_retry_at) WHERE status = 'pending';
-- Expression index for leaderboard sort: ORDER BY (base_position - bonus_points) ASC, base_position ASC
CREATE INDEX idx_signups_leaderboard ON signups (campaign_id, (base_position - bonus_points) ASC, base_position ASC) WHERE status IN ('pending', 'verified', 'invited');

-- Triggers
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER campaigns_updated_at
    BEFORE UPDATE ON campaigns
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER signups_updated_at
    BEFORE UPDATE ON signups
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Accounts (passwordless auth only)
CREATE TABLE accounts (
  id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  email      TEXT        NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TRIGGER accounts_updated_at
  BEFORE UPDATE ON accounts
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Sign-in tokens for REST auth and OAuth/MCP flow.
-- Authentication is OTP-based: a 6-digit code (code) is emailed to the user
-- and a session token (session_token) is stored in the requesting browser/client.
-- The code can only be redeemed by presenting the matching session_token, so
-- an attacker with only the emailed code cannot use it without also controlling
-- the requesting session.
CREATE TABLE signin_tokens (
  token         TEXT        PRIMARY KEY,
  code          TEXT        NOT NULL CHECK (code ~ '^[0-9]{6}$'),
  session_token TEXT        NOT NULL CHECK (session_token <> ''),
  email         TEXT        NOT NULL,
  oauth_state   JSONB,
  expires_at    TIMESTAMPTZ NOT NULL,
  used_at       TIMESTAMPTZ
);
CREATE INDEX idx_signin_tokens_email ON signin_tokens(email);
CREATE UNIQUE INDEX idx_signin_tokens_session ON signin_tokens(session_token);

-- key_hash stores SHA-256 hex of the raw key (not bcrypt)
CREATE TABLE account_api_keys (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id   UUID        NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  key_hash     TEXT        NOT NULL UNIQUE,
  name         TEXT        NOT NULL DEFAULT 'Default',
  last_used_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  revoked_at   TIMESTAMPTZ
);
CREATE INDEX idx_account_api_keys_account ON account_api_keys(account_id);

-- OAuth 2.1 authorization codes (PKCE, single-use, 5 min TTL)
CREATE TABLE oauth_authorization_codes (
  code                  TEXT        PRIMARY KEY,
  account_id            UUID        NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  client_id             TEXT        NOT NULL,
  redirect_uri          TEXT        NOT NULL,
  code_challenge        TEXT        NOT NULL,
  code_challenge_method TEXT        NOT NULL DEFAULT 'S256',
  scope                 TEXT        NOT NULL DEFAULT 'campaigns:read campaigns:write',
  expires_at            TIMESTAMPTZ NOT NULL,
  used_at               TIMESTAMPTZ
);
CREATE INDEX idx_oauth_codes_account ON oauth_authorization_codes(account_id);

-- OAuth access tokens (24h TTL, SHA-256 hashed)
CREATE TABLE oauth_access_tokens (
  token_hash TEXT        PRIMARY KEY,
  account_id UUID        NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  client_id  TEXT        NOT NULL,
  scope      TEXT        NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_oauth_tokens_account ON oauth_access_tokens(account_id);

-- Link campaigns to accounts (required — every campaign must belong to an account)
ALTER TABLE campaigns ADD COLUMN account_id UUID NOT NULL REFERENCES accounts(id) ON DELETE CASCADE;
CREATE INDEX idx_campaigns_account ON campaigns(account_id);
-- Campaign name uniqueness is per-account; slugs remain globally unique.
ALTER TABLE campaigns ADD CONSTRAINT campaigns_account_id_name_key UNIQUE (account_id, name);

-- Transactional email outbox: rows inserted inside business transactions; a
-- background processor polls and delivers via Resend using idempotency_key to
-- prevent duplicate delivery on retry.
CREATE TYPE email_outbox_status AS ENUM ('pending', 'sent', 'failed');

CREATE TABLE email_outbox (
    id               UUID              PRIMARY KEY DEFAULT gen_random_uuid(),
    idempotency_key  UUID              NOT NULL UNIQUE DEFAULT gen_random_uuid(),
    to_addr          TEXT              NOT NULL,
    subject          TEXT              NOT NULL,
    html_body        TEXT              NOT NULL,
    text_body        TEXT              NOT NULL DEFAULT '',
    status           email_outbox_status NOT NULL DEFAULT 'pending',
    retry_count      INTEGER           NOT NULL DEFAULT 0,
    last_error       TEXT,
    next_retry_at    TIMESTAMPTZ,
    created_at       TIMESTAMPTZ       NOT NULL DEFAULT NOW(),
    sent_at          TIMESTAMPTZ
);

CREATE INDEX idx_email_outbox_pending
    ON email_outbox (status, next_retry_at)
    WHERE status = 'pending';

-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin

DROP INDEX IF EXISTS idx_email_outbox_pending;
DROP TABLE IF EXISTS email_outbox;
DROP TYPE IF EXISTS email_outbox_status;

ALTER TABLE campaigns DROP COLUMN IF EXISTS account_id;
DROP INDEX IF EXISTS idx_campaigns_account;
ALTER TABLE campaigns DROP CONSTRAINT IF EXISTS campaigns_account_id_name_key;
DROP TABLE IF EXISTS oauth_access_tokens;
DROP TABLE IF EXISTS oauth_authorization_codes;
DROP TABLE IF EXISTS account_api_keys;
DROP TABLE IF EXISTS signin_tokens;
DROP TRIGGER IF EXISTS accounts_updated_at ON accounts;
DROP TABLE IF EXISTS accounts;

DROP TRIGGER IF EXISTS signups_updated_at ON signups;
DROP TRIGGER IF EXISTS campaigns_updated_at ON campaigns;
DROP FUNCTION IF EXISTS set_updated_at();
DROP INDEX IF EXISTS idx_signups_invite_token;
DROP INDEX IF EXISTS idx_signups_leaderboard;
DROP TABLE IF EXISTS webhook_deliveries;
DROP TABLE IF EXISTS webhook_endpoints;
DROP TABLE IF EXISTS signups;
DROP TABLE IF EXISTS campaigns;
DROP TYPE IF EXISTS webhook_delivery_status;
DROP TYPE IF EXISTS signup_status;
DROP TYPE IF EXISTS campaign_status;

-- +goose StatementEnd
