package handler

import (
	"context"
	"fmt"
	"log/slog"
	"net/mail"
	"net/url"
	"time"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/domain"
	emailtemplates "github.com/earlypass/earlypass/internal/email"
)

const (
	magicLinkRateMax = 3
	magicLinkRateTTL = 10 * time.Minute
	magicLinkTokenTTL = 15 * time.Minute
	oauthCodeTTL     = 5 * time.Minute
)

// RequestMagicLink handles POST /v1/auth/magic-link.
func (s *Server) RequestMagicLink(ctx context.Context, req generated.RequestMagicLinkRequestObject) (generated.RequestMagicLinkResponseObject, error) {
	if req.Body == nil {
		return generated.RequestMagicLink422ApplicationProblemPlusJSONResponse{
			UnprocessableEntityApplicationProblemPlusJSONResponse: problemUnprocessable("request body is required"),
		}, nil
	}

	emailAddr := string(req.Body.Email)
	if _, err := mail.ParseAddress(emailAddr); err != nil {
		return generated.RequestMagicLink422ApplicationProblemPlusJSONResponse{
			UnprocessableEntityApplicationProblemPlusJSONResponse: problemUnprocessable("invalid email address"),
		}, nil
	}

	// Rate limit: max 3 magic link requests per email per 10 minutes.
	rateKey := "magic-link-rate:" + emailAddr
	count, err := s.magicLinkRateLimiter.Incr(ctx, rateKey, magicLinkRateTTL)
	if err != nil {
		s.logger.ErrorContext(ctx, "magic link rate limit check", slog.String("error", err.Error()))
		return nil, fmt.Errorf("rate limit check: %w", err)
	}
	if count > magicLinkRateMax {
		if s.metrics != nil {
			s.metrics.RecordMagicLinkRequest(ctx, "rate_limited")
		}
		return generated.RequestMagicLink429ApplicationProblemPlusJSONResponse{
			TooManyRequestsApplicationProblemPlusJSONResponse: problemTooManyRequests("too many magic link requests — try again in 10 minutes"),
		}, nil
	}

	// In closed mode, only send magic links to existing accounts.
	// Always return the same response regardless — no user enumeration.
	if s.signupModeClosed {
		if _, err := s.accounts.GetByEmail(ctx, emailAddr); err != nil {
			if s.metrics != nil {
				s.metrics.RecordMagicLinkRequest(ctx, "closed_rejected")
			}
			s.logger.InfoContext(ctx, "closed mode: magic link request for unknown email", slog.String("email", emailAddr))
			msg := "If an account exists for this email, a sign-in link has been sent."
			return generated.RequestMagicLink202JSONResponse{
				Message: &msg,
			}, nil
		}
	}

	token, err := domain.NewMagicLinkToken(emailAddr, nil, magicLinkTokenTTL)
	if err != nil {
		s.logger.ErrorContext(ctx, "generating magic link token", slog.String("error", err.Error()))
		return nil, fmt.Errorf("generating token: %w", err)
	}

	if err = s.magicLinks.Create(ctx, token); err != nil {
		s.logger.ErrorContext(ctx, "storing magic link token", slog.String("error", err.Error()))
		return nil, fmt.Errorf("storing token: %w", err)
	}

	verifyURL := s.baseURL + "/api/v1/auth/verify?token=" + url.QueryEscape(token.Token)

	if s.devMode {
		s.logger.WarnContext(ctx, "DEV MODE — magic link (not sent via email)", slog.String("url", verifyURL))
	}

	htmlBody, textBody, renderErr := emailtemplates.MagicLinkEmail(verifyURL)
	if renderErr != nil {
		s.logger.ErrorContext(ctx, "rendering magic link email", slog.String("error", renderErr.Error()))
	} else if s.emailOutbox != nil {
		outboxEmail := domain.EmailOutbox{
			ID:             uuid.New(),
			IdempotencyKey: uuid.New(),
			ToAddr:         emailAddr,
			Subject:        "Your EarlyPass sign-in link",
			HTMLBody:       htmlBody,
			TextBody:       textBody,
			CreatedAt:      time.Now().UTC(),
		}
		if createErr := s.emailOutbox.Create(ctx, outboxEmail); createErr != nil {
			s.logger.ErrorContext(ctx, "queuing magic link email", slog.String("error", createErr.Error()))
		}
	}

	if s.metrics != nil {
		s.metrics.RecordMagicLinkRequest(ctx, "sent")
	}
	msg := "If an account exists for this email, a sign-in link has been sent."
	return generated.RequestMagicLink202JSONResponse{
		Message: &msg,
	}, nil
}

// VerifyMagicLink handles GET /v1/auth/verify.
func (s *Server) VerifyMagicLink(ctx context.Context, req generated.VerifyMagicLinkRequestObject) (generated.VerifyMagicLinkResponseObject, error) {
	tokenStr := req.Params.Token

	t, err := s.magicLinks.Get(ctx, tokenStr)
	if err != nil {
		if isNotFound(err) {
			return generated.VerifyMagicLink400ApplicationProblemPlusJSONResponse{
				BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("invalid or unknown magic link token"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "getting magic link token", slog.String("error", err.Error()))
		return nil, fmt.Errorf("getting token: %w", err)
	}

	if t.IsExpired() {
		return generated.VerifyMagicLink400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("link expired — request a new one"),
		}, nil
	}
	if t.IsUsed() {
		return generated.VerifyMagicLink400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("link already used"),
		}, nil
	}

	// Atomically mark the token as used (single-use guarantee).
	now := time.Now().UTC()
	if err = s.magicLinks.MarkUsed(ctx, tokenStr, now); err != nil {
		if isNotFound(err) {
			// Race condition: another request already used this token.
			return generated.VerifyMagicLink400ApplicationProblemPlusJSONResponse{
				BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("link already used"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "marking magic link token used", slog.String("error", err.Error()))
		return nil, fmt.Errorf("marking token used: %w", err)
	}

	var account domain.Account
	if s.signupModeClosed {
		var getErr error
		account, getErr = s.accounts.GetByEmail(ctx, t.Email)
		if getErr != nil {
			// Account doesn't exist and closed mode — reject.
			return generated.VerifyMagicLink400ApplicationProblemPlusJSONResponse{
				BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("account not found — this instance is invite-only"),
			}, nil
		}
	} else {
		var createErr error
		account, _, createErr = s.accounts.GetOrCreateByEmail(ctx, t.Email)
		if createErr != nil {
			s.logger.ErrorContext(ctx, "getting or creating account", slog.String("error", createErr.Error()))
			return nil, fmt.Errorf("getting or creating account: %w", createErr)
		}
	}

	if t.IsOAuthFlow() {
		// OAuth flow: generate an authorization code and redirect to the client's callback URL.
		oauth := t.OAuthState
		code, codeErr := domain.NewOAuthAuthorizationCode(
			account.ID, oauth.ClientID, oauth.RedirectURI,
			oauth.CodeChallenge, oauth.CodeChallengeMethod,
			"campaigns:read campaigns:write",
			oauthCodeTTL,
		)
		if codeErr != nil {
			s.logger.ErrorContext(ctx, "generating oauth code", slog.String("error", codeErr.Error()))
			return nil, fmt.Errorf("generating code: %w", codeErr)
		}
		if storeErr := s.oauthStore.CreateCode(ctx, code); storeErr != nil {
			s.logger.ErrorContext(ctx, "storing oauth code", slog.String("error", storeErr.Error()))
			return nil, fmt.Errorf("storing code: %w", storeErr)
		}
		redirectURL := oauth.RedirectURI + "?code=" + url.QueryEscape(code.Code) + "&state=" + url.QueryEscape(oauth.State)
		return generated.VerifyMagicLink302Response{
			Headers: generated.VerifyMagicLink302ResponseHeaders{
				Location: redirectURL,
			},
		}, nil
	}

	// REST flow: generate a long-lived account API key and return it.
	apiKey, rawKey, keyErr := domain.NewAccountAPIKey(account.ID, "Default")
	if keyErr != nil {
		s.logger.ErrorContext(ctx, "generating account api key", slog.String("error", keyErr.Error()))
		return nil, fmt.Errorf("generating api key: %w", keyErr)
	}
	if storeErr := s.accountAPIKeys.Create(ctx, apiKey); storeErr != nil {
		s.logger.ErrorContext(ctx, "storing account api key", slog.String("error", storeErr.Error()))
		return nil, fmt.Errorf("storing api key: %w", storeErr)
	}

	note := "Save this key — it will not be shown again. Use it as your Bearer token."
	apiAccountResp := generated.Account{
		Id:        &account.ID,
		Email:     &account.Email,
		CreatedAt: &account.CreatedAt,
	}
	return generated.VerifyMagicLink200JSONResponse{
		Account: &apiAccountResp,
		ApiKey:  &rawKey,
		Note:    &note,
	}, nil
}
