package observability

import "go.opentelemetry.io/otel/attribute"

func attrCampaignID(id string) attribute.KeyValue { return attribute.String("campaign_id", id) }
func attrStatus(s string) attribute.KeyValue       { return attribute.String("status", s) }
func attrSource(s string) attribute.KeyValue       { return attribute.String("source", s) }
func attrResult(r string) attribute.KeyValue       { return attribute.String("result", r) }
func attrReason(r string) attribute.KeyValue       { return attribute.String("reason", r) }
