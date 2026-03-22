package handler

import (
	"fmt"

	"github.com/earlypass/earlypass/internal/api/generated"
)

const problemBaseURL = "https://earlypass.dev/errors/"

func newProblem(status int, code, title, detail string) generated.Problem {
	d := detail
	return generated.Problem{
		Type:   fmt.Sprintf("%s%s", problemBaseURL, code),
		Title:  title,
		Status: status,
		Detail: &d,
	}
}

func problemBadRequest(detail string) generated.BadRequestApplicationProblemPlusJSONResponse {
	return generated.BadRequestApplicationProblemPlusJSONResponse(newProblem(400, "bad-request", "Bad request", detail))
}

func problemUnauthorized(detail string) generated.UnauthorizedApplicationProblemPlusJSONResponse {
	return generated.UnauthorizedApplicationProblemPlusJSONResponse(newProblem(401, "unauthorized", "Unauthorized", detail))
}

func problemForbidden(detail string) generated.ForbiddenApplicationProblemPlusJSONResponse {
	return generated.ForbiddenApplicationProblemPlusJSONResponse(newProblem(403, "forbidden", "Forbidden", detail))
}

func problemNotFound(detail string) generated.NotFoundApplicationProblemPlusJSONResponse {
	return generated.NotFoundApplicationProblemPlusJSONResponse(newProblem(404, "not-found", "Not found", detail))
}

func problemConflict(detail string) generated.ConflictApplicationProblemPlusJSONResponse {
	return generated.ConflictApplicationProblemPlusJSONResponse(newProblem(409, "conflict", "Conflict", detail))
}

func problemUnprocessable(detail string) generated.UnprocessableEntityApplicationProblemPlusJSONResponse {
	return generated.UnprocessableEntityApplicationProblemPlusJSONResponse(newProblem(422, "unprocessable-entity", "Unprocessable entity", detail))
}

func problemTooManyRequests(detail string) generated.TooManyRequestsApplicationProblemPlusJSONResponse {
	return generated.TooManyRequestsApplicationProblemPlusJSONResponse{
		Body: newProblem(429, "too-many-requests", "Too many requests", detail),
	}
}
