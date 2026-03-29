package handler

import (
	"context"
	"fmt"
	"log/slog"
	"net/mail"
	"time"

	"github.com/google/uuid"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/domain"
	emailtemplates "github.com/earlypass/earlypass/internal/email"
)

const (
	signInRateMax  = 3
	signInRateTTL  = 10 * time.Minute
	signInTokenTTL = 15 * time.Minute
)

// RequestSignInCode handles POST /v1/auth/signin.
// It generates a 6-digit OTP code, stores a new sign-in token, emails the
// code to the user, and returns a session_token that the caller must present
// together with the code when calling POST /v1/auth/verify.
func (s *Server) RequestSignInCode(ctx context.Context, req generated.RequestSignInCodeRequestObject) (generated.RequestSignInCodeResponseObject, error) {
	if req.Body == nil {
		return generated.RequestSignInCode422ApplicationProblemPlusJSONResponse{
			UnprocessableEntityApplicationProblemPlusJSONResponse: problemUnprocessable("request body is required"),
		}, nil
	}

	emailAddr := string(req.Body.Email)
	if _, err := mail.ParseAddress(emailAddr); err != nil {
		return generated.RequestSignInCode422ApplicationProblemPlusJSONResponse{
			UnprocessableEntityApplicationProblemPlusJSONResponse: problemUnprocessable("invalid email address"),
		}, nil
	}

	// Rate limit: max 3 requests per email per 10 minutes.
	rateKey := "signin-rate:" + emailAddr
	count, err := s.signInRateLimiter.Incr(ctx, rateKey, signInRateTTL)
	if err != nil {
		s.logger.ErrorContext(ctx, "sign-in rate limit check", slog.String("error", err.Error()))
		return nil, fmt.Errorf("rate limit check: %w", err)
	}
	if count > signInRateMax {
		if s.metrics != nil {
			s.metrics.RecordSignInRequest(ctx, "rate_limited")
		}
		return generated.RequestSignInCode429ApplicationProblemPlusJSONResponse{
			TooManyRequestsApplicationProblemPlusJSONResponse: problemTooManyRequests("too many sign-in code requests — try again in 10 minutes"),
		}, nil
	}

	// In closed mode, only send codes to existing accounts.
	// Always return the same response regardless — no user enumeration.
	// Return a random but non-functional session token so the response shape and
	// timing are indistinguishable from a successful request.
	if s.signupModeClosed {
		if _, err := s.accounts.GetByEmail(ctx, emailAddr); err != nil {
			if s.metrics != nil {
				s.metrics.RecordSignInRequest(ctx, "closed_rejected")
			}
			s.logger.InfoContext(ctx, "closed mode: sign-in code request for unknown email", slog.String("email", emailAddr))
			// Generate a random-looking (but non-stored) session token so the
			// response is structurally identical to a real one.
			fakeToken, genErr := domain.NewSignInToken(emailAddr, nil, signInTokenTTL)
			fakeSessionToken := ""
			if genErr == nil {
				fakeSessionToken = fakeToken.SessionToken
			}
			msg := "If an account exists for this email, a sign-in code has been sent."
			return generated.RequestSignInCode202JSONResponse{
				Message:      &msg,
				SessionToken: &fakeSessionToken,
			}, nil
		}
	}

	token, err := domain.NewSignInToken(emailAddr, nil, signInTokenTTL)
	if err != nil {
		s.logger.ErrorContext(ctx, "generating OTP token", slog.String("error", err.Error()))
		return nil, fmt.Errorf("generating token: %w", err)
	}

	if err = s.signInTokens.Create(ctx, token); err != nil {
		s.logger.ErrorContext(ctx, "storing OTP token", slog.String("error", err.Error()))
		return nil, fmt.Errorf("storing token: %w", err)
	}

	if s.devMode {
		s.logger.WarnContext(ctx, "DEV MODE — sign-in code (not sent via email)",
			slog.String("code", token.Code),
			slog.String("session_token", token.SessionToken),
		)
	}

	htmlBody, textBody, renderErr := emailtemplates.SignInCodeEmail(token.Code)
	if renderErr != nil {
		s.logger.ErrorContext(ctx, "rendering sign-in code email", slog.String("error", renderErr.Error()))
	} else if s.emailOutbox != nil {
		outboxEmail := domain.EmailOutbox{
			ID:             uuid.New(),
			IdempotencyKey: uuid.New(),
			ToAddr:         emailAddr,
			Subject:        "Your EarlyPass sign-in code",
			HTMLBody:       htmlBody,
			TextBody:       textBody,
			CreatedAt:      time.Now().UTC(),
		}
		if createErr := s.emailOutbox.Create(ctx, outboxEmail); createErr != nil {
			s.logger.ErrorContext(ctx, "queuing sign-in code email", slog.String("error", createErr.Error()))
		}
	}

	if s.metrics != nil {
		s.metrics.RecordSignInRequest(ctx, "sent")
	}
	msg := "If an account exists for this email, a sign-in code has been sent."
	sessionToken := token.SessionToken
	return generated.RequestSignInCode202JSONResponse{
		Message:      &msg,
		SessionToken: &sessionToken,
	}, nil
}

// VerifySignInCode handles POST /v1/auth/verify.
// It validates the session_token + 6-digit OTP code pair. On success it returns
// account info and a long-lived API key.
func (s *Server) VerifySignInCode(ctx context.Context, req generated.VerifySignInCodeRequestObject) (generated.VerifySignInCodeResponseObject, error) {
	if req.Body == nil {
		return generated.VerifySignInCode400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("request body is required"),
		}, nil
	}

	sessionToken := req.Body.SessionToken
	otpCode := req.Body.Code

	t, err := s.signInTokens.GetBySessionToken(ctx, sessionToken)
	if err != nil {
		if isNotFound(err) {
			return generated.VerifySignInCode400ApplicationProblemPlusJSONResponse{
				BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("invalid or expired session token"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "getting OTP token by session", slog.String("error", err.Error()))
		return nil, fmt.Errorf("getting token: %w", err)
	}

	if t.IsExpired() {
		return generated.VerifySignInCode400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("code expired — request a new one"),
		}, nil
	}
	if t.IsUsed() {
		return generated.VerifySignInCode400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("code already used"),
		}, nil
	}
	if t.Code != otpCode {
		return generated.VerifySignInCode400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("incorrect code"),
		}, nil
	}

	// Atomically mark the token as used (single-use guarantee).
	now := time.Now().UTC()
	if err = s.signInTokens.MarkUsed(ctx, t.Token, now); err != nil {
		if isNotFound(err) {
			// Race condition: another request already used this token.
			return generated.VerifySignInCode400ApplicationProblemPlusJSONResponse{
				BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("code already used"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "marking OTP token used", slog.String("error", err.Error()))
		return nil, fmt.Errorf("marking token used: %w", err)
	}

	var account domain.Account
	if s.signupModeClosed {
		var getErr error
		account, getErr = s.accounts.GetByEmail(ctx, t.Email)
		if getErr != nil {
			// Account doesn't exist and closed mode — reject.
			return generated.VerifySignInCode400ApplicationProblemPlusJSONResponse{
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

	// Generate a long-lived account API key and return it.
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
	return generated.VerifySignInCode200JSONResponse{
		Account: &apiAccountResp,
		ApiKey:  &rawKey,
		Note:    &note,
	}, nil
}
