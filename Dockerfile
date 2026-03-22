# syntax=docker/dockerfile:1
# Multi-stage build targeting a distroless final image (< 30MB).
#
# Builder stages run on the host platform (BUILDPLATFORM) so Go's native
# cross-compilation is used instead of slow QEMU emulation. Only the final
# stage uses the target platform (TARGETPLATFORM).

# ---- widget build stage (runs on host) ----
FROM --platform=$BUILDPLATFORM node:22-alpine AS widget-builder

WORKDIR /app/widget

COPY widget/package.json widget/package-lock.json ./
RUN npm ci

COPY widget/ ./
RUN npm run build

# ---- dashboard build stage (runs on host) ----
FROM --platform=$BUILDPLATFORM node:22-alpine AS dashboard-builder

WORKDIR /app/dashboard

COPY dashboard/package.json dashboard/package-lock.json ./
RUN npm ci

COPY dashboard/ ./
RUN npm run build

# ---- Go build stage (runs on host, cross-compiles for target) ----
FROM --platform=$BUILDPLATFORM golang:1.26-alpine AS builder

# TARGETOS / TARGETARCH are set automatically by BuildKit.
ARG TARGETOS
ARG TARGETARCH

WORKDIR /app

# Download dependencies first (cached layer).
COPY go.mod go.sum ./
RUN go mod download

# Copy all source.
COPY . .

# Bring in the compiled widget and dashboard bundles so go:embed can find them.
COPY --from=widget-builder /app/widget/dist ./widget/dist
COPY --from=dashboard-builder /app/internal/dashboard/static ./internal/dashboard/static

RUN CGO_ENABLED=0 GOOS=${TARGETOS} GOARCH=${TARGETARCH} \
    go build -trimpath -ldflags="-s -w" \
    -o /app/bin/server ./cmd/server

# ---- final stage ----
FROM gcr.io/distroless/static-debian12:nonroot

COPY --from=builder /app/bin/server /server

EXPOSE 3000

ENTRYPOINT ["/server"]
