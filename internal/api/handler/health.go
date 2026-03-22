package handler

import (
	"context"
)

// DBPinger can check database connectivity.
type DBPinger interface {
	Ping(ctx context.Context) error
}

// RedisPinger can check Redis connectivity.
type RedisPinger interface {
	Ping(ctx context.Context) error
}
