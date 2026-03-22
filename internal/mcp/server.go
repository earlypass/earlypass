package mcp

import (
	mcpserver "github.com/mark3labs/mcp-go/server"
)

// NewServer creates a configured MCP server with all EarlyPass tools and resources registered.
// It uses direct store access instead of HTTP client calls for efficiency.
func NewServer(deps Dependencies) *mcpserver.MCPServer {
	s := mcpserver.NewMCPServer("earlypass", "0.1.0")

	registerCampaignTools(s, deps)
	registerSignupTools(s, deps)
	registerInviteTools(s, deps)
	registerWebhookTools(s, deps)
	registerMiscTools(s, deps)
	registerResources(s, deps)

	return s
}
