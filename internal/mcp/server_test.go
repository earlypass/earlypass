//go:build integration

package mcp_test

import (
	"context"
	"io"
	"log/slog"
	"testing"

	internalmcp "github.com/earlypass/earlypass/internal/mcp"
	"github.com/mark3labs/mcp-go/client"
	"github.com/mark3labs/mcp-go/client/transport"
	"github.com/mark3labs/mcp-go/mcp"
)

// nopLogger returns a logger that discards all output.
func nopLogger() *slog.Logger {
	return slog.New(slog.NewTextHandler(io.Discard, nil))
}

// newMCPClientWithDeps creates a connected in-process MCP client using the given dependencies.
func newMCPClientWithDeps(t *testing.T, deps internalmcp.Dependencies) *client.Client {
	t.Helper()

	srv := internalmcp.NewServer(deps)
	tr := transport.NewInProcessTransport(srv)

	ctx, cancel := context.WithCancel(context.Background())
	t.Cleanup(cancel)

	if err := tr.Start(ctx); err != nil {
		t.Fatalf("transport start: %v", err)
	}

	t.Cleanup(func() { tr.Close() })

	c := client.NewClient(tr)

	var initReq mcp.InitializeRequest
	initReq.Params.ProtocolVersion = mcp.LATEST_PROTOCOL_VERSION

	if _, err := c.Initialize(ctx, initReq); err != nil {
		t.Fatalf("client initialize: %v", err)
	}

	return c
}

// minimalDeps returns a Dependencies with nil stores (sufficient for testing tool registration).
func minimalDeps() internalmcp.Dependencies {
	return internalmcp.Dependencies{
		Logger: nopLogger(),
	}
}

// TestToolsList verifies that the server registers all expected tools.
func TestToolsList(t *testing.T) {
	c := newMCPClientWithDeps(t, minimalDeps())

	result, err := c.ListTools(context.Background(), mcp.ListToolsRequest{})
	if err != nil {
		t.Fatalf("list tools: %v", err)
	}

	wantTools := []string{
		"list_campaigns",
		"create_campaign",
		"get_campaign",
		"update_campaign",
		"get_campaign_stats",
		"list_signups",
		"export_signups",
		"invite_signups",
		"get_invite_token",
		"redeem_invite_token",
		"manage_webhook",
		"get_leaderboard",
		"get_widget_embed",
	}

	wantCount := len(wantTools)
	gotCount := len(result.Tools)

	if gotCount != wantCount {
		names := make([]string, gotCount)
		for i, tool := range result.Tools {
			names[i] = tool.Name
		}
		t.Errorf("got %d tools %v, want %d tools %v", gotCount, names, wantCount, wantTools)
	}

	got := make(map[string]bool, gotCount)
	for _, tool := range result.Tools {
		got[tool.Name] = true
	}

	for _, want := range wantTools {
		if !got[want] {
			t.Errorf("missing expected tool: %s", want)
		}
	}
}
