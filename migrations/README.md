# Migrations

Database migrations are managed with [goose](https://github.com/pressly/goose).

## Usage

```bash
# Apply all pending migrations
make migrate

# Roll back the last migration
make migrate-down

# Create a new migration
go tool goose -dir migrations create <name> sql
```

## Naming convention

Migrations follow goose's default naming: `YYYYMMDDHHMMSS_description.sql`.

## Running manually

```bash
go tool goose -dir migrations postgres "$DATABASE_URL" up
go tool goose -dir migrations postgres "$DATABASE_URL" down
go tool goose -dir migrations postgres "$DATABASE_URL" status
```
