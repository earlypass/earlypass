#!/usr/bin/env python3
# /// script
# requires-python = ">=3.11"
# dependencies = ["psycopg[binary]"]
# ///
"""
EarlyPass widget testbed.
  /          — index of all campaigns
  /{slug}    — widget page for that campaign (query string is preserved, e.g. ?ref=abc)

Run with: uv run tilt/widget-testbed.py
"""

import os
import sys
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs, urlparse

import psycopg

DB_URL = os.getenv(
    "DATABASE_URL",
    "postgres://earlypass:earlypass@localhost:5432/earlypass?sslmode=disable",
)
API_URL = os.getenv("API_URL", "http://localhost:3000")
PORT = int(os.getenv("TESTBED_PORT", "4000"))


def fetch_campaigns() -> list[dict]:
    with psycopg.connect(DB_URL) as conn:
        rows = conn.execute(
            "SELECT id, name, slug, status FROM campaigns ORDER BY created_at DESC"
        ).fetchall()
    return [{"id": str(r[0]), "name": r[1], "slug": r[2], "status": r[3]} for r in rows]


def fetch_campaign_by_slug(slug: str) -> dict | None:
    with psycopg.connect(DB_URL) as conn:
        row = conn.execute(
            "SELECT id, name, slug, status FROM campaigns WHERE slug = %s",
            (slug,),
        ).fetchone()
    if row is None:
        return None
    return {"id": str(row[0]), "name": row[1], "slug": row[2], "status": row[3]}


def render_index(campaigns: list[dict], qs: str) -> str:
    qs_suffix = f"?{qs}" if qs else ""
    if campaigns:
        items = "\n".join(
            f'<li><a href="/{_esc(c["slug"])}{qs_suffix}">'
            f'{_esc(c["name"])} <small>{_esc(c["slug"])}</small>'
            f'</a></li>'
            for c in campaigns
        )
        body = f"<ul>{items}</ul>"
    else:
        body = "<p>No campaigns found.</p>"

    return _page("Widget Testbed", f"<h1>Campaigns</h1>{body}")


def render_campaign(c: dict, qs: str) -> str:
    qs_suffix = f"?{qs}" if qs else ""
    return _page(
        c["name"],
        f"""
        <p><a href="/{qs_suffix}">&larr; all campaigns</a></p>
        <h1>{_esc(c["name"])} <small>{_esc(c["slug"])}</small></h1>
        <div id="earlypass-widget-{c["id"]}"></div>
        <script>
          window.EarlyPassConfig = {{ apiUrl: {repr(API_URL)}, campaignId: "{c["id"]}" }};
        </script>
        <script src="{API_URL}/widget/widget.js" data-campaign="{_esc(c["slug"])}" async></script>
        """,
    )


def _page(title: str, content: str) -> str:
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>{_esc(title)} — Widget Testbed</title>
  <style>
    body {{ font-family: system-ui, sans-serif; max-width: 700px; margin: 60px auto; padding: 0 24px; }}
    h1 {{ font-size: 18px; margin-bottom: 32px; }}
    h1 small {{ font-weight: 400; color: #999; margin-left: 6px; font-size: 14px; }}
    a {{ color: #6366f1; text-decoration: none; }}
    a:hover {{ text-decoration: underline; }}
    ul {{ list-style: none; padding: 0; margin: 0; }}
    li {{ padding: 12px 0; border-bottom: 1px solid #eee; }}
    li small {{ color: #999; margin-left: 6px; font-size: 13px; }}
    p {{ color: #999; font-size: 14px; }}
  </style>
</head>
<body>{content}</body>
</html>"""


def _esc(s: str) -> str:
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip("/") or "/"
        qs = parsed.query  # preserve as-is to pass through to campaign links

        if path == "/favicon.ico":
            self.send_response(204)
            self.end_headers()
            return

        try:
            if path == "/":
                campaigns = fetch_campaigns()
                body = render_index(campaigns, qs).encode()
                self._respond(200, body)
            else:
                slug = path.lstrip("/")
                campaign = fetch_campaign_by_slug(slug)
                if campaign is None:
                    body = _page("Not found", "<h1>Campaign not found</h1><p><a href='/'>Back</a></p>").encode()
                    self._respond(404, body)
                else:
                    body = render_campaign(campaign, qs).encode()
                    self._respond(200, body)
        except Exception as e:
            body = f"<pre>Error: {e}\n\nIs postgres port-forwarded to localhost:5432?</pre>".encode()
            self._respond(500, body)

    def _respond(self, status: int, body: bytes) -> None:
        self.send_response(status)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):
        print(f"  {self.address_string()} {fmt % args}", file=sys.stderr)


if __name__ == "__main__":
    server = HTTPServer(("", PORT), Handler)
    print(f"Widget testbed → http://localhost:{PORT}", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
