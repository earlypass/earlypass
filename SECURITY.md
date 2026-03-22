# Security Policy

## Supported Versions

We provide security fixes for the latest release only.

| Version | Supported          |
|---------|--------------------|
| latest  | :white_check_mark: |
| older   | :x:                |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability, please report it responsibly by emailing
**security@earlypass.app** (or open a [private security advisory](https://github.com/earlypass/earlypass/security/advisories/new) on GitHub). You can expect a response within **48 hours**.

Please include as much of the following information as possible to help us understand
the nature and scope of the issue:

- Type of issue (e.g., SQL injection, authentication bypass, information disclosure)
- Affected component (e.g., API endpoint, widget, dashboard)
- Full path of the source file related to the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

## Response Process

1. **Acknowledgement** — We will acknowledge your report within 48 hours.
2. **Assessment** — We will assess the severity and impact of the vulnerability.
3. **Fix** — We will develop and test a fix.
4. **Disclosure** — We will coordinate disclosure timing with you before publishing.
5. **Credit** — We will credit you in the release notes unless you prefer to remain anonymous.

## Scope

The following are **in scope** for security reports:

- Authentication and authorisation bypasses
- Injection vulnerabilities (SQL, command, etc.)
- Information disclosure / data leakage
- Cross-site scripting (XSS) in the dashboard or widget
- Cryptographic weaknesses
- Privilege escalation
- Rate limit bypasses that could enable abuse at scale

The following are **out of scope**:

- Social engineering attacks
- Denial of service attacks that require significant resources
- Issues in third-party dependencies (report those upstream)
- Theoretical vulnerabilities without a realistic attack scenario

## Disclosure Policy

We follow a **coordinated disclosure** approach. We ask that you give us a reasonable
amount of time (typically 90 days) to fix the vulnerability before public disclosure.

## Self-Hosted Deployments

If you are running a self-hosted instance, please make sure you:

- Keep your instance up to date with the latest release
- Use strong, randomly generated secrets for `DASHBOARD_JWT_SECRET` and database passwords
- Enable TLS for all database connections (set `sslmode=require` or higher in `DATABASE_URL`)
- Place the application behind a TLS-terminating reverse proxy (nginx, Caddy, Traefik)
- Restrict network access to internal services (PostgreSQL, Redis) using firewall rules or private networks

## Security Considerations for Operators

See the [self-hosting guide](docs/self-hosting.md) for security best practices when
operating a self-hosted deployment.
