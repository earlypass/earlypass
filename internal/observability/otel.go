// Package observability wires OpenTelemetry tracing and metrics for EarlyPass.
package observability

import (
	"context"
	"fmt"
	"time"

	goruntime "go.opentelemetry.io/contrib/instrumentation/runtime"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/exporters/otlp/otlpmetric/otlpmetricgrpc"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc"
	"go.opentelemetry.io/otel/propagation"
	sdkmetric "go.opentelemetry.io/otel/sdk/metric"
	"go.opentelemetry.io/otel/sdk/resource"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	semconv "go.opentelemetry.io/otel/semconv/v1.30.0"
)

// Setup initialises the global OTel tracer and meter providers.
// If otlpEndpoint is empty the SDK is left with its default no-op providers.
// The returned shutdown function flushes pending telemetry; always call it on exit.
func Setup(ctx context.Context, serviceName, otlpEndpoint string) (shutdown func(context.Context) error, err error) {
	if otlpEndpoint == "" {
		// No exporter configured — noop providers are already the default.
		return func(context.Context) error { return nil }, nil
	}

	res, err := resource.New(ctx,
		resource.WithAttributes(semconv.ServiceName(serviceName)),
		resource.WithHost(),
		resource.WithProcess(),
	)
	if err != nil {
		return nil, fmt.Errorf("creating otel resource: %w", err)
	}

	// Trace exporter.
	traceExp, err := otlptracegrpc.New(ctx,
		otlptracegrpc.WithEndpoint(otlpEndpoint),
		otlptracegrpc.WithInsecure(),
	)
	if err != nil {
		return nil, fmt.Errorf("creating otlp trace exporter: %w", err)
	}
	tp := sdktrace.NewTracerProvider(
		sdktrace.WithBatcher(traceExp),
		sdktrace.WithResource(res),
		sdktrace.WithSampler(sdktrace.AlwaysSample()),
	)
	otel.SetTracerProvider(tp)
	otel.SetTextMapPropagator(propagation.NewCompositeTextMapPropagator(
		propagation.TraceContext{},
		propagation.Baggage{},
	))

	// Metric exporter.
	metricExp, err := otlpmetricgrpc.New(ctx,
		otlpmetricgrpc.WithEndpoint(otlpEndpoint),
		otlpmetricgrpc.WithInsecure(),
	)
	if err != nil {
		_ = tp.Shutdown(ctx)
		return nil, fmt.Errorf("creating otlp metric exporter: %w", err)
	}
	mp := sdkmetric.NewMeterProvider(
		sdkmetric.WithReader(sdkmetric.NewPeriodicReader(metricExp, sdkmetric.WithInterval(30*time.Second))),
		sdkmetric.WithResource(res),
	)
	otel.SetMeterProvider(mp)

	// Collect Go runtime metrics (goroutines, heap, GC) using the global meter provider.
	if err := goruntime.Start(goruntime.WithMinimumReadMemStatsInterval(10 * time.Second)); err != nil {
		_ = tp.Shutdown(ctx)
		_ = mp.Shutdown(ctx)
		return nil, fmt.Errorf("starting go runtime metrics: %w", err)
	}

	return func(ctx context.Context) error {
		traceErr := tp.Shutdown(ctx)
		metricErr := mp.Shutdown(ctx)
		if traceErr != nil {
			return fmt.Errorf("trace provider shutdown: %w", traceErr)
		}
		if metricErr != nil {
			return fmt.Errorf("meter provider shutdown: %w", metricErr)
		}
		return nil
	}, nil
}
