package handler

import (
	"context"
	"crypto/rand"
	"encoding/base64"
	"errors"
	"fmt"
	"log/slog"
	"net/url"
	"strings"
	"time"

	openapi_types "github.com/oapi-codegen/runtime/types"

	"github.com/earlypass/earlypass/internal/api/generated"
	"github.com/earlypass/earlypass/internal/api/middleware"
	"github.com/earlypass/earlypass/internal/domain"
	emailTemplates "github.com/earlypass/earlypass/internal/email"
	"github.com/earlypass/earlypass/internal/fraud"
	"github.com/earlypass/earlypass/internal/store"
	"github.com/google/uuid"
)

// InviteSignups handles POST /v1/campaigns/{id}/signups/invite.
// Marks the top N verified signups (by effective queue position) as invited
// and sends invite emails asynchronously.
func (s *Server) InviteSignups(ctx context.Context, req generated.InviteSignupsRequestObject) (generated.InviteSignupsResponseObject, error) {
	campaign, err := s.resolveCampaign(ctx, req.Id)
	if err != nil {
		switch {
		case errors.Is(err, errCampaignUnauthorized):
			return generated.InviteSignups401ApplicationProblemPlusJSONResponse{
				UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized(err.Error()),
			}, nil
		case errors.Is(err, errCampaignForbidden):
			return generated.InviteSignups403ApplicationProblemPlusJSONResponse{
				ForbiddenApplicationProblemPlusJSONResponse: problemForbidden(err.Error()),
			}, nil
		case errors.Is(err, store.ErrNotFound):
			return generated.InviteSignups404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		default:
			s.logger.ErrorContext(ctx, "resolving campaign for invite signups", slog.String("error", err.Error()))
			return nil, err
		}
	}

	if req.Body == nil {
		return generated.InviteSignups400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("request body is required"),
		}, nil
	}

	count := req.Body.Count
	if count < 1 || count > 10000 {
		return generated.InviteSignups400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("count must be between 1 and 10000"),
		}, nil
	}

	invited, err := s.signups.InviteTopN(ctx, campaign.ID, count)
	if err != nil {
		s.logger.ErrorContext(ctx, "inviting top N signups", slog.String("error", err.Error()))
		return nil, fmt.Errorf("inviting signups: %w", err)
	}
	if s.metrics != nil {
		s.metrics.RecordInvitesSent(ctx, campaign.ID.String(), int64(len(invited)))
	}

	totalInvited, err := s.signups.CountInvitedByCampaign(ctx, campaign.ID)
	if err != nil {
		s.logger.ErrorContext(ctx, "counting invited signups", slog.String("error", err.Error()))
		return nil, fmt.Errorf("counting invited signups: %w", err)
	}

	// Queue invite emails in the outbox — non-fatal; each row is independent.
	if s.emailOutbox != nil && len(invited) > 0 {
		subject := "You're in — " + campaign.Name + " early access"
		for _, sg := range invited {
			inviteLink := buildInviteLink(campaign.Settings.ProductURL, sg.InviteToken)
			htmlBody, textBody, renderErr := emailTemplates.InviteEmail(campaign.Name, campaign.Settings.ProductURL, inviteLink)
			if renderErr != nil {
				s.logger.ErrorContext(ctx, "rendering invite email",
					slog.String("signup_id", sg.ID.String()),
					slog.String("error", renderErr.Error()),
				)
				continue
			}
			outboxEmail := domain.EmailOutbox{
				ID:             uuid.New(),
				IdempotencyKey: uuid.New(),
				ToAddr:         sg.Email,
				Subject:        subject,
				HTMLBody:       htmlBody,
				TextBody:       textBody,
				CreatedAt:      time.Now().UTC(),
			}
			if createErr := s.emailOutbox.Create(ctx, outboxEmail); createErr != nil {
				s.logger.ErrorContext(ctx, "queuing invite email",
					slog.String("signup_id", sg.ID.String()),
					slog.String("error", createErr.Error()),
				)
			}
		}
	}

	// Dispatch signup.invited webhook events — fire-and-forget, non-fatal.
	if len(invited) > 0 {
		go func(bgCtx context.Context, signups []domain.Signup, c domain.Campaign) {
			endpoints, listErr := s.webhooks.ListEndpoints(bgCtx, c.ID)
			if listErr != nil {
				s.logger.WarnContext(bgCtx, "listing webhook endpoints for invite events", slog.String("error", listErr.Error()))
				return
			}
			for _, endpoint := range endpoints {
				if !endpointSubscribedTo(endpoint, domain.EventSignupInvited) {
					continue
				}
				for _, sg := range signups {
					delivery := domain.WebhookDelivery{
						ID:                uuid.New(),
						WebhookEndpointID: endpoint.ID,
						EventType:         domain.EventSignupInvited,
						Payload: map[string]any{
							"signup_id":    sg.ID.String(),
							"campaign_id":  sg.CampaignID.String(),
							"email":        sg.Email,
							"invite_token": sg.InviteToken,
							"invited_at":   sg.InvitedAt,
						},
						Status:    domain.WebhookDeliveryStatusPending,
						CreatedAt: time.Now().UTC(),
					}
					if createErr := s.webhooks.CreateDelivery(bgCtx, delivery); createErr != nil {
						s.logger.WarnContext(bgCtx, "creating signup.invited webhook delivery",
							slog.String("endpoint_id", endpoint.ID.String()),
							slog.String("signup_id", sg.ID.String()),
							slog.String("error", createErr.Error()),
						)
					}
				}
			}
		}(context.WithoutCancel(ctx), invited, campaign)
	}

	return generated.InviteSignups200JSONResponse{
		Invited:      len(invited),
		TotalInvited: totalInvited,
	}, nil
}

// CreateSignup handles POST /v1/campaigns/{id}/signups.
// This endpoint is public (no auth required) — the campaign is fetched by path ID.
func (s *Server) CreateSignup(ctx context.Context, req generated.CreateSignupRequestObject) (generated.CreateSignupResponseObject, error) {
	if req.Body == nil {
		return generated.CreateSignup400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("request body is required"),
		}, nil
	}

	// Fetch campaign by path ID (public endpoint — not from auth context).
	campaign, err := s.campaigns.GetByID(ctx, req.Id)
	if err != nil {
		if errors.Is(err, store.ErrNotFound) {
			return generated.CreateSignup400ApplicationProblemPlusJSONResponse{
				BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("campaign not found"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "fetching campaign for signup", slog.String("error", err.Error()))
		return nil, fmt.Errorf("fetching campaign: %w", err)
	}

	if campaign.Status != domain.CampaignStatusActive {
		return generated.CreateSignup400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("campaign is not accepting signups"),
		}, nil
	}

	// --- Origin check (only enforced when ProductURL is configured) ---
	r := middleware.RequestFromContext(ctx)
	if r != nil && campaign.Settings.ProductURL != "" && !campaign.Settings.MatchesOrigin(extractOrigin(r, s.trustedProxies)) {
		return generated.CreateSignup403ApplicationProblemPlusJSONResponse{
			ForbiddenApplicationProblemPlusJSONResponse: problemForbidden("origin not allowed"),
		}, nil
	}

	// --- CSRF token validation ---
	valid, csrfErr := s.csrfTokenStore.ValidateAndConsumeCSRFToken(ctx, campaign.ID, req.Params.XCSRFToken)
	if csrfErr != nil {
		s.logger.WarnContext(ctx, "CSRF token validation error", slog.String("error", csrfErr.Error()))
	}
	if !valid {
		return generated.CreateSignup403ApplicationProblemPlusJSONResponse{
			ForbiddenApplicationProblemPlusJSONResponse: problemForbidden("invalid or expired CSRF token"),
		}, nil
	}

	email := strings.ToLower(strings.TrimSpace(string(req.Body.Email)))

	// --- Fraud: disposable email ---
	if fraud.IsDisposableEmail(email) {
		if s.metrics != nil {
			s.metrics.RecordFraudBlock(ctx, "disposable_email")
		}
		return generated.CreateSignup422ApplicationProblemPlusJSONResponse{
			UnprocessableEntityApplicationProblemPlusJSONResponse: problemUnprocessable("disposable email addresses are not allowed"),
		}, nil
	}

	// --- Fraud: IP rate limit ---
	ip := s.extractIP(ctx)
	blocked, rateLimitErr := fraud.CheckIPSignupRate(ctx, s.fraudLimiter, ip, campaign.ID)
	if rateLimitErr != nil {
		s.logger.WarnContext(ctx, "fraud rate limit check failed", slog.String("error", rateLimitErr.Error()))
	}
	if blocked {
		if s.metrics != nil {
			s.metrics.RecordFraudBlock(ctx, "ip_rate_limit")
		}
		return generated.CreateSignup429ApplicationProblemPlusJSONResponse{
			TooManyRequestsApplicationProblemPlusJSONResponse: problemTooManyRequests("too many signup attempts from this IP"),
		}, nil
	}

	// --- Check max signups ---
	if campaign.MaxSignups != nil {
		count, countErr := s.signups.CountByCampaign(ctx, campaign.ID)
		if countErr != nil {
			s.logger.ErrorContext(ctx, "counting signups", slog.String("error", countErr.Error()))
			return nil, fmt.Errorf("counting signups: %w", countErr)
		}
		if count >= *campaign.MaxSignups {
			return generated.CreateSignup400ApplicationProblemPlusJSONResponse{
				BadRequestApplicationProblemPlusJSONResponse: problemBadRequest("campaign is full"),
			}, nil
		}
	}

	// --- Resolve referrer ---
	var referredByID *uuid.UUID
	var resolvedReferrer *domain.Signup
	if req.Body.ReferralCode != nil && *req.Body.ReferralCode != "" {
		referrer, refErr := s.signups.GetByCampaignAndReferralCode(ctx, campaign.ID, *req.Body.ReferralCode)
		if refErr == nil {
			// Block self-referrals: compare base emails (plus-addressing aware).
			// albert+1@gmail.com and albert+2@gmail.com are the same person.
			baseEmail := normalizeEmailLocal(email)
			selfByEmail := strings.EqualFold(normalizeEmailLocal(referrer.Email), baseEmail)
			if selfByEmail {
				s.logger.WarnContext(ctx, "referral blocked: self-referral detected",
					slog.String("referral_code", *req.Body.ReferralCode),
				)
			} else {
				// Block referral if another signup with the same base email already exists.
				// Prevents albert+1@, albert+2@, etc. from each generating a referral.
				exists, existsErr := s.signups.ExistsByCampaignAndBaseEmail(ctx, campaign.ID, baseEmail)
				if existsErr != nil {
					s.logger.WarnContext(ctx, "checking base email for referral", slog.String("error", existsErr.Error()))
				} else if exists {
					s.logger.WarnContext(ctx, "referral blocked: base email already signed up",
						slog.String("referral_code", *req.Body.ReferralCode),
					)
				} else if len(s.trustedProxies) > 0 && ip != "" && ip == referrer.IPAddress {
					// Block IP-based self-referral: same client IP within the same campaign.
					// Only enforced when trusted proxies are configured (IP is meaningful).
					s.logger.WarnContext(ctx, "referral blocked: same IP as referrer",
						slog.String("referral_code", *req.Body.ReferralCode),
						slog.String("ip", ip),
					)
				} else {
					id := referrer.ID
					referredByID = &id
					resolvedReferrer = &referrer
				}
			}
		} else {
			s.logger.WarnContext(ctx, "referral lookup failed",
				slog.String("referral_code", *req.Body.ReferralCode),
				slog.String("campaign_id", campaign.ID.String()),
				slog.String("error", refErr.Error()),
			)
		}
	}

	// --- Generate referral code ---
	refCode, err := domain.GenerateReferralCode()
	if err != nil {
		return nil, fmt.Errorf("generating referral code: %w", err)
	}

	// --- Generate verification token ---
	verToken, err := generateVerificationToken()
	if err != nil {
		return nil, fmt.Errorf("generating verification token: %w", err)
	}

	// --- Build signup ---
	// BasePosition is 0 here — the database will assign it atomically.
	now := time.Now().UTC()
	sg := domain.Signup{
		ID:                uuid.New(),
		CampaignID:        campaign.ID,
		Email:             email,
		EmailVerified:     false,
		VerificationToken: &verToken,
		ReferralCode:      refCode,
		ReferredBy:        referredByID,
		ReferralCount:     0,
		BasePosition:      0,
		BonusPoints:       0,
		IPAddress:         ip,
		Fingerprint:       fraud.NormaliseFingerprint(derefString(req.Body.Fingerprint)),
		Status:            domain.SignupStatusPending,
		CreatedAt:         now,
		UpdatedAt:         now,
	}

	if req.Body.Metadata != nil {
		sg.Metadata = *req.Body.Metadata
	}

	if err = sg.Validate(); err != nil {
		return generated.CreateSignup400ApplicationProblemPlusJSONResponse{
			BadRequestApplicationProblemPlusJSONResponse: problemBadRequest(err.Error()),
		}, nil
	}

	sg, err = s.signups.Create(ctx, sg)
	if err != nil {
		if errors.Is(err, store.ErrConflict) {
			if s.metrics != nil {
				s.metrics.RecordSignupDuplicateRejected(ctx, campaign.ID.String())
			}
			return generated.CreateSignup409ApplicationProblemPlusJSONResponse{
				ConflictApplicationProblemPlusJSONResponse: problemConflict("email already registered for this campaign"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "creating signup", slog.String("error", err.Error()))
		return nil, fmt.Errorf("creating signup: %w", err)
	}

	signupSource := "direct"
	if referredByID != nil {
		signupSource = "referral"
	}
	if s.metrics != nil {
		s.metrics.RecordSignup(ctx, campaign.ID.String(), string(domain.SignupStatusPending), signupSource)
	}

	// Credit referrer immediately at signup time — non-fatal.
	// Crediting at signup (not verification) ensures the leaderboard and queue
	// position update as soon as a referral link is used.
	if referredByID != nil && resolvedReferrer != nil {
		newCount, newBonus, creditErr := s.signups.IncrementReferralCount(ctx, *referredByID, campaign.Settings.BoostWeight)
		if creditErr != nil {
			s.logger.WarnContext(ctx, "crediting referrer at signup", slog.String("error", creditErr.Error()))
		} else {
			if s.metrics != nil {
				s.metrics.RecordReferralConversion(ctx, campaign.ID.String())
			}
			if s.emailOutbox != nil {
				effectivePos := resolvedReferrer.BasePosition - newBonus
				if effectivePos < 1 {
					effectivePos = 1
				}
				referrerLink := buildReferralLink(campaign.Settings.ProductURL, resolvedReferrer.ReferralCode)
				firstName := firstNameFromEmail(resolvedReferrer.Email)
				htmlBody, textBody, renderErr := emailTemplates.ReferralNotificationEmail(
					campaign.Name, firstName, referrerLink, newCount, effectivePos,
				)
				if renderErr != nil {
					s.logger.WarnContext(ctx, "rendering referral notification", slog.String("error", renderErr.Error()))
				} else {
					outboxEmail := domain.EmailOutbox{
						ID:             uuid.New(),
						IdempotencyKey: uuid.New(),
						ToAddr:         resolvedReferrer.Email,
						Subject:        "Hey " + firstName + ", someone signed up with your link!",
						HTMLBody:       htmlBody,
						TextBody:       textBody,
						CreatedAt:      time.Now().UTC(),
					}
					if createErr := s.emailOutbox.Create(ctx, outboxEmail); createErr != nil {
						s.logger.WarnContext(ctx, "queuing referral notification", slog.String("error", createErr.Error()))
					}
				}
			}
		}
	}

	// Queue verification email in the outbox — non-fatal.
	// The signup is already persisted; a failed queue is logged but does not
	// fail the request.
	if s.emailOutbox != nil && sg.VerificationToken != nil {
		verifyURL := s.baseURL + "/api/v1/verify/" + *sg.VerificationToken
		htmlBody, textBody, renderErr := emailTemplates.VerificationEmail(campaign.Name, verifyURL)
		if renderErr != nil {
			s.logger.ErrorContext(ctx, "rendering verification email", slog.String("error", renderErr.Error()))
		} else {
			outboxEmail := domain.EmailOutbox{
				ID:             uuid.New(),
				IdempotencyKey: uuid.New(),
				ToAddr:         sg.Email,
				Subject:        "Confirm your spot on the " + campaign.Name + " waitlist",
				HTMLBody:       htmlBody,
				TextBody:       textBody,
				CreatedAt:      time.Now().UTC(),
			}
			if createErr := s.emailOutbox.Create(ctx, outboxEmail); createErr != nil {
				s.logger.ErrorContext(ctx, "queuing verification email", slog.String("error", createErr.Error()))
			}
		}
	}

	return generated.CreateSignup201JSONResponse(domainSignupToAPI(sg)), nil
}

// ListSignups handles GET /v1/campaigns/{id}/signups.
func (s *Server) ListSignups(ctx context.Context, req generated.ListSignupsRequestObject) (generated.ListSignupsResponseObject, error) {
	campaign, err := s.resolveCampaign(ctx, req.Id)
	if err != nil {
		switch {
		case errors.Is(err, errCampaignUnauthorized):
			return generated.ListSignups401ApplicationProblemPlusJSONResponse{
				UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized(err.Error()),
			}, nil
		case errors.Is(err, errCampaignForbidden):
			return generated.ListSignups403ApplicationProblemPlusJSONResponse{
				ForbiddenApplicationProblemPlusJSONResponse: problemForbidden(err.Error()),
			}, nil
		case errors.Is(err, store.ErrNotFound):
			return generated.ListSignups404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		default:
			s.logger.ErrorContext(ctx, "resolving campaign for list signups", slog.String("error", err.Error()))
			return nil, err
		}
	}

	limit := 50
	offset := 0
	if req.Params.Limit != nil {
		limit = *req.Params.Limit
		if limit > 500 {
			limit = 500
		}
	}
	if req.Params.Offset != nil {
		offset = *req.Params.Offset
	}

	signups, err := s.signups.ListByCampaignPaginated(ctx, campaign.ID, limit, offset)
	if err != nil {
		s.logger.ErrorContext(ctx, "listing signups", slog.String("error", err.Error()))
		return nil, fmt.Errorf("listing signups: %w", err)
	}

	total, err := s.signups.CountByCampaign(ctx, campaign.ID)
	if err != nil {
		s.logger.ErrorContext(ctx, "counting signups", slog.String("error", err.Error()))
		return nil, fmt.Errorf("counting signups: %w", err)
	}

	apiSignups := make([]generated.Signup, len(signups))
	for i, sg := range signups {
		apiSignups[i] = domainSignupToAPI(sg)
	}

	return generated.ListSignups200JSONResponse{
		Signups: apiSignups,
		Total:   total,
	}, nil
}

// GetSignup handles GET /v1/campaigns/{id}/signups/{signup_id}.
func (s *Server) GetSignup(ctx context.Context, req generated.GetSignupRequestObject) (generated.GetSignupResponseObject, error) {
	campaign, err := s.resolveCampaign(ctx, req.Id)
	if err != nil {
		switch {
		case errors.Is(err, errCampaignUnauthorized):
			return generated.GetSignup401ApplicationProblemPlusJSONResponse{
				UnauthorizedApplicationProblemPlusJSONResponse: problemUnauthorized(err.Error()),
			}, nil
		case errors.Is(err, errCampaignForbidden):
			return generated.GetSignup403ApplicationProblemPlusJSONResponse{
				ForbiddenApplicationProblemPlusJSONResponse: problemForbidden(err.Error()),
			}, nil
		case errors.Is(err, store.ErrNotFound):
			return generated.GetSignup404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("campaign not found"),
			}, nil
		default:
			s.logger.ErrorContext(ctx, "resolving campaign for get signup", slog.String("error", err.Error()))
			return nil, err
		}
	}

	sg, err := s.signups.GetByID(ctx, req.SignupId)
	if err != nil {
		if errors.Is(err, store.ErrNotFound) {
			return generated.GetSignup404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("signup not found"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "fetching signup", slog.String("error", err.Error()))
		return nil, fmt.Errorf("fetching signup: %w", err)
	}

	if sg.CampaignID != campaign.ID {
		return generated.GetSignup404ApplicationProblemPlusJSONResponse{
			NotFoundApplicationProblemPlusJSONResponse: problemNotFound("signup not found"),
		}, nil
	}

	return generated.GetSignup200JSONResponse(domainSignupToAPI(sg)), nil
}

// VerifyEmail handles GET /v1/verify/{token}.
func (s *Server) VerifyEmail(ctx context.Context, req generated.VerifyEmailRequestObject) (generated.VerifyEmailResponseObject, error) {
	sg, err := s.signups.GetByVerificationToken(ctx, req.Token)
	if err != nil {
		if errors.Is(err, store.ErrNotFound) {
			return generated.VerifyEmail404ApplicationProblemPlusJSONResponse{
				NotFoundApplicationProblemPlusJSONResponse: problemNotFound("verification token is invalid or has already been used"),
			}, nil
		}
		s.logger.ErrorContext(ctx, "verifying email", slog.String("error", err.Error()))
		return nil, fmt.Errorf("verifying email: %w", err)
	}

	if err = s.signups.UpdateVerified(ctx, sg.ID); err != nil {
		s.logger.ErrorContext(ctx, "marking signup verified", slog.String("error", err.Error()))
		return nil, fmt.Errorf("marking signup verified: %w", err)
	}

	verifySource := "direct"
	if sg.ReferredBy != nil {
		verifySource = "referral"
	}
	if s.metrics != nil {
		s.metrics.RecordEmailVerification(ctx, sg.CampaignID.String(), verifySource)
	}

	// Handle post-verification side-effects asynchronously — fire-and-forget, non-fatal.
	// context.WithoutCancel preserves trace IDs while decoupling from the redirect response.
	go s.handlePostVerification(context.WithoutCancel(ctx), sg.ID, sg.CampaignID)

	// Redirect to a simple success page.
	return generated.VerifyEmail302Response{
		Headers: generated.VerifyEmail302ResponseHeaders{
			Location: "/verified",
		},
	}, nil
}

// handlePostVerification runs after a signup's email is verified:
// sends the welcome email, credits the referrer (if any), invalidates the
// leaderboard cache, and sends a referral notification email.
func (s *Server) handlePostVerification(ctx context.Context, signupID, campaignID uuid.UUID) {
	sg, err := s.signups.GetByID(ctx, signupID)
	if err != nil {
		s.logger.WarnContext(ctx, "post-verification: fetching signup",
			slog.String("signup_id", signupID.String()),
			slog.String("error", err.Error()),
		)
		return
	}

	campaign, err := s.campaigns.GetByID(ctx, campaignID)
	if err != nil {
		s.logger.WarnContext(ctx, "post-verification: fetching campaign",
			slog.String("campaign_id", campaignID.String()),
			slog.String("error", err.Error()),
		)
		return
	}

	// Queue welcome email in the outbox.
	referralLink := buildReferralLink(campaign.Settings.ProductURL, sg.ReferralCode)
	htmlBody, textBody, err := emailTemplates.WelcomeEmail(campaign.Name, referralLink, sg.EffectivePosition())
	if err != nil {
		s.logger.WarnContext(ctx, "post-verification: rendering welcome email", slog.String("error", err.Error()))
	} else if s.emailOutbox != nil {
		outboxEmail := domain.EmailOutbox{
			ID:             uuid.New(),
			IdempotencyKey: uuid.New(),
			ToAddr:         sg.Email,
			Subject:        "You're on the " + campaign.Name + " waitlist 🎉",
			HTMLBody:       htmlBody,
			TextBody:       textBody,
			CreatedAt:      time.Now().UTC(),
		}
		if createErr := s.emailOutbox.Create(ctx, outboxEmail); createErr != nil {
			s.logger.WarnContext(ctx, "post-verification: queuing welcome email", slog.String("error", createErr.Error()))
		}
	}

}

// --- helpers ---

// domainSignupToAPI converts a domain.Signup to the generated API Signup type.
func domainSignupToAPI(sg domain.Signup) generated.Signup {
	api := generated.Signup{
		Id:                    sg.ID,
		CampaignId:            sg.CampaignID,
		Email:                 openapi_types.Email(sg.Email),
		EmailVerified:         &sg.EmailVerified,
		ReferralCode:          sg.ReferralCode,
		BasePosition:          sg.BasePosition,
		EffectivePosition:     sg.EffectivePosition(),
		ReferralCount:         sg.ReferralCount,
		Status:                generated.SignupStatus(sg.Status),
		InvitedAt:             sg.InvitedAt,
		InviteToken:           sg.InviteToken,
		InviteTokenRedeemedAt: sg.InviteTokenRedeemedAt,
		CreatedAt:             sg.CreatedAt,
	}
	if sg.ReferredBy != nil {
		id := *sg.ReferredBy
		api.ReferredBy = &id
	}
	return api
}

// extractIP attempts to get the real client IP from the context.
// Falls back to empty string if not available.
func (s *Server) extractIP(ctx context.Context) string {
	r := middleware.RequestFromContext(ctx)
	if r == nil {
		return ""
	}
	return middleware.RealIP(r, s.trustedProxies)
}

func derefString(s *string) string {
	if s == nil {
		return ""
	}
	return *s
}

// generateVerificationToken creates a cryptographically secure URL-safe token.
func generateVerificationToken() (string, error) {
	b := make([]byte, 32)
	if _, err := rand.Read(b); err != nil {
		return "", fmt.Errorf("generating verification token: %w", err)
	}
	return base64.RawURLEncoding.EncodeToString(b), nil
}

// buildReferralLink constructs a referral URL by appending ?ref=<code> to productURL.
// Returns an empty string if productURL is empty or unparseable.
func buildReferralLink(productURL, referralCode string) string {
	if productURL == "" {
		return ""
	}
	u, err := url.Parse(productURL)
	if err != nil {
		return ""
	}
	q := u.Query()
	q.Set("ref", referralCode)
	u.RawQuery = q.Encode()
	return u.String()
}

// buildInviteLink constructs a personalised invite URL by appending ?invite=<token>
// to productURL. Returns an empty string if productURL is empty, unparseable, or
// the token pointer is nil.
func buildInviteLink(productURL string, token *string) string {
	if productURL == "" || token == nil || *token == "" {
		return ""
	}
	u, err := url.Parse(productURL)
	if err != nil {
		return ""
	}
	q := u.Query()
	q.Set("invite", *token)
	u.RawQuery = q.Encode()
	return u.String()
}

// endpointSubscribedTo reports whether the given webhook endpoint is subscribed
// to the specified event type.
func endpointSubscribedTo(endpoint domain.WebhookEndpoint, eventType domain.WebhookEventType) bool {
	for _, e := range endpoint.Events {
		if e == eventType {
			return true
		}
	}
	return false
}

// normalizeEmailLocal strips the plus-tag from the local part of an email so
// that albert+1@gmail.com and albert+2@gmail.com are treated as the same address
// for self-referral detection. The domain is left unchanged.
func normalizeEmailLocal(email string) string {
	at := strings.Index(email, "@")
	if at < 0 {
		return email
	}
	local := email[:at]
	if plus := strings.Index(local, "+"); plus >= 0 {
		local = local[:plus]
	}
	return local + email[at:]
}

// firstNameFromEmail extracts the local part of an email for display purposes.
func firstNameFromEmail(email string) string {
	if idx := strings.Index(email, "@"); idx > 0 {
		return email[:idx]
	}
	return email
}
