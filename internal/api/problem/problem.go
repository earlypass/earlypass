// Package problem writes RFC 7807 Problem Details error responses.
package problem

import (
	"encoding/json"
	"fmt"
	"net/http"
)

const baseURL = "https://earlypass.dev/errors/"

// Details is an RFC 7807 problem details object.
type Details struct {
	Type     string `json:"type"`
	Title    string `json:"title"`
	Status   int    `json:"status"`
	Detail   string `json:"detail,omitempty"`
	Instance string `json:"instance,omitempty"`
}

// Write writes an RFC 7807 Problem Details response.
// code is a short error code appended to the problem type URI (e.g. "not-found").
func Write(w http.ResponseWriter, status int, code, title, detail string) {
	p := Details{
		Type:   fmt.Sprintf("%s%s", baseURL, code),
		Title:  title,
		Status: status,
		Detail: detail,
	}
	w.Header().Set("Content-Type", "application/problem+json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(p)
}

// WriteDetails writes a fully-constructed Problem Details response.
func WriteDetails(w http.ResponseWriter, p Details) {
	w.Header().Set("Content-Type", "application/problem+json")
	w.WriteHeader(p.Status)
	_ = json.NewEncoder(w).Encode(p)
}

// New returns a Problem Details struct without writing it (useful for embedding in generated responses).
func New(status int, code, title, detail string) Details {
	return Details{
		Type:   fmt.Sprintf("%s%s", baseURL, code),
		Title:  title,
		Status: status,
		Detail: detail,
	}
}
