import { render } from 'preact';
import { useState, useEffect, useRef, useCallback, useMemo } from 'preact/hooks';
import { html } from 'htm/preact';
import uPlot from 'uplot';

// ---------------------------------------------------------------------------
// API client
// ---------------------------------------------------------------------------

// pathParts: ['dashboard'] for /dashboard/, ['dashboard', 'my-slug'] for /dashboard/my-slug/
const pathParts = window.location.pathname.split('/').filter(Boolean);
const slug = pathParts.length > 1 ? pathParts[1] : '';
const isHome = slug === '';

async function apiFetch(path, opts = {}) {
  const res = await fetch(path, {
    ...opts,
    headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
    credentials: 'same-origin',
  });
  if (!res.ok) {
    if (res.status === 401) {
      window.location.href = '/dashboard/login';
      throw new Error('Session expired');
    }
    const body = await res.json().catch(() => ({}));
    throw new Error(body.detail || `HTTP ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

const api = {
  getStats: () => apiFetch(`/dashboard/api/${slug}/stats`),
  getTimeseries: (days = 30) => apiFetch(`/dashboard/api/${slug}/timeseries?days=${days}`),
  getLeaderboard: () => apiFetch(`/dashboard/api/${slug}/leaderboard`),

  listSignups: (params) => {
    const q = new URLSearchParams(params).toString();
    return apiFetch(`/dashboard/api/${slug}/signups?${q}`);
  },

  listWebhooks: () => apiFetch(`/dashboard/api/${slug}/webhooks`),
  createWebhook: (body) => apiFetch(`/dashboard/api/${slug}/webhooks`, { method: 'POST', body: JSON.stringify(body) }),
  deleteWebhook: (id) => apiFetch(`/dashboard/api/${slug}/webhooks/${id}`, { method: 'DELETE' }),
  listDeliveries: () => apiFetch(`/dashboard/api/${slug}/deliveries`),

  getSettings: () => apiFetch(`/dashboard/api/${slug}/settings`),
  updateSettings: (body) => apiFetch(`/dashboard/api/${slug}/settings`, { method: 'PATCH', body: JSON.stringify(body) }),
  inviteTopN: (count) => apiFetch(`/dashboard/api/${slug}/invite`, { method: 'POST', body: JSON.stringify({ count }) }),
  listInvited: (params = {}) => apiFetch(`/dashboard/api/${slug}/invited?` + new URLSearchParams(params).toString()),

  listAPIKeys: () => apiFetch(`/dashboard/api/${slug}/api-keys`),
  createAPIKey: (name: string) => apiFetch(`/dashboard/api/${slug}/api-keys`, { method: 'POST', body: JSON.stringify({ name }) }),
  revokeAPIKey: (id: string) => apiFetch(`/dashboard/api/${slug}/api-keys/${id}`, { method: 'DELETE' }),
};

const accountApi = {
  listCampaigns: () => apiFetch('/dashboard/api/campaigns'),
  createCampaign: (name, productURL) => apiFetch('/dashboard/api/campaigns', {
    method: 'POST',
    body: JSON.stringify({ name, product_url: productURL }),
  }),
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function EmbedCode({ snippet }: { snippet: string }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return html`
    <div class="api-key-display">
      <code class="api-key-mono" style="word-break:break-all;white-space:pre-wrap;font-size:12px">${snippet}</code>
      <button class="btn btn-secondary btn-sm" onClick=${copy}>${copied ? '✓ Copied!' : 'Copy'}</button>
    </div>
  `;
}

function fmtDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

function statusBadge(status) {
  const cls = { verified: 'badge-success', pending: 'badge-warning', expired: 'badge-muted', rejected: 'badge-danger' }[status] || 'badge-muted';
  return html`<span class=${`badge ${cls}`}>${status}</span>`;
}

function deliveryBadge(status) {
  const cls = { delivered: 'badge-success', pending: 'badge-warning', failed: 'badge-danger' }[status] || 'badge-muted';
  return html`<span class=${`badge ${cls}`}>${status}</span>`;
}

function Tooltip({ text }: { text: string }) {
  return html`<span class="tooltip-icon" data-tip=${text}>?</span>`;
}

function useAsync(fn, deps = []) {
  const [state, setState] = useState({ data: null, loading: true, error: null });
  const reload = useCallback(() => {
    setState(s => ({ ...s, loading: true, error: null }));
    fn().then(data => setState({ data, loading: false, error: null }))
        .catch(err => setState({ data: null, loading: false, error: err.message }));
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { reload(); }, [reload]);
  return { ...state, reload };
}

// ---------------------------------------------------------------------------
// Chart component
// ---------------------------------------------------------------------------

function SignupChart({ days = 30 }) {
  const containerRef = useRef(null);
  const plotRef = useRef(null);
  const { data, loading, error } = useAsync(() => api.getTimeseries(days), [days]);

  useEffect(() => {
    if (!data || !containerRef.current) return;
    if (plotRef.current) { plotRef.current.destroy(); plotRef.current = null; }

    const timestamps = data.map(d => new Date(d.date).getTime() / 1000);
    const counts = data.map(d => d.count);
    const opts = {
      width: containerRef.current.offsetWidth || 700,
      height: 200,
      series: [
        {},
        { label: 'Signups', stroke: '#4f46e5', fill: 'rgba(79,70,229,0.08)', width: 2 },
      ],
      axes: [
        { values: (u, vals) => vals.map(v => new Date(v * 1000).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })) },
        {},
      ],
      scales: { x: { time: true } },
      cursor: { show: false },
      legend: { show: false },
    };
    plotRef.current = new uPlot(opts, [timestamps, counts], containerRef.current);

    return () => { if (plotRef.current) { plotRef.current.destroy(); plotRef.current = null; } };
  }, [data]);

  if (loading) return html`<div class="loading">Loading chart…</div>`;
  if (error) return html`<div class="alert alert-error">${error}</div>`;
  return html`<div ref=${containerRef}></div>`;
}

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------

function OverviewPage() {
  const stats = useAsync(() => api.getStats(), []);
  const leaders = useAsync(() => api.getLeaderboard(), []);

  return html`
    <h1 class="page-title">Overview</h1>
    ${stats.loading ? html`<div class="loading">Loading stats…</div>` : stats.error ? html`<div class="alert alert-error">${stats.error}</div>` : html`
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-label">Total Signups</div>
          <div class="stat-value">${stats.data.total_signups.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Verified</div>
          <div class="stat-value">${stats.data.verified_signups.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Today</div>
          <div class="stat-value">${stats.data.today_signups.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label" style="display:flex;align-items:center">Viral Coefficient <${Tooltip} text="Average number of new signups each existing signup generates through referrals. Above 1.0 means exponential growth." /></div>
          <div class="stat-value">${stats.data.viral_coefficient.toFixed(2)}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label" style="display:flex;align-items:center">Referral Rate <${Tooltip} text="Percentage of total signups who joined via a referral link." /></div>
          <div class="stat-value">${(stats.data.referral_rate * 100).toFixed(1)}%</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Invited</div>
          <div class="stat-value">${(stats.data.invited_signups || 0).toLocaleString()}</div>
        </div>
      </div>
    `}

    ${stats.data?.total_signups === 0 && html`
      <div class="settings-section" style="text-align:center;padding:32px;margin-bottom:24px">
        <p style="color:var(--muted);margin-bottom:12px">No signups yet. Have you embedded the widget on your page?</p>
        <a class="btn btn-primary" href="#setup">Get embed code →</a>
      </div>
    `}

    <div class="chart-card">
      <div class="chart-title">Signup Trend (last 30 days)</div>
      <${SignupChart} days=${30} />
    </div>

    <div class="table-card">
      <div class="table-header"><span class="table-title">Top Referrers</span></div>
      ${leaders.loading ? html`<div class="loading">Loading…</div>` : leaders.error ? html`<div class="alert alert-error">${leaders.error}</div>` : html`
        <table>
          <thead><tr><th>#</th><th>Email</th><th>Referrals</th><th>Position</th></tr></thead>
          <tbody>
            ${leaders.data.slice(0, 10).map((s, i) => html`
              <tr key=${s.id}>
                <td>${i + 1}</td>
                <td>${s.email}</td>
                <td>${s.referral_count}</td>
                <td>${s.effective_position}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${leaders.data.length === 0 && html`<div class="empty">No signups yet.</div>`}
      `}
    </div>
  `;
}

function SignupsPage() {
  const [page, setPage] = useState(1);
  const [limit] = useState(50);
  const [status, setStatus] = useState('');
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [sort, setSort] = useState('date');

  const { data, loading, error } = useAsync(
    () => api.listSignups({ page, limit, status, search, sort }),
    [page, limit, status, search, sort]
  );

  const signups = data?.signups || [];
  const total = data?.total || 0;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  function handleSearch(e) {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  }

  return html`
    <h1 class="page-title">Signups</h1>
    <div class="table-card">
      <div class="table-header">
        <span class="table-title">${total.toLocaleString()} total</span>
        <form onSubmit=${handleSearch} style="display:flex;gap:8px;align-items:center">
          <input type="text" placeholder="Search email…" value=${searchInput}
            onInput=${e => setSearchInput(e.target.value)} style="width:200px" />
          <button class="btn btn-secondary btn-sm" type="submit">Search</button>
        </form>
        <select value=${status} onChange=${e => { setStatus(e.target.value); setPage(1); }}>
          <option value="">All statuses</option>
          <option value="verified">Verified</option>
          <option value="pending">Pending</option>
          <option value="expired">Expired</option>
          <option value="rejected">Rejected</option>
        </select>
        <select value=${sort} onChange=${e => { setSort(e.target.value); setPage(1); }}>
          <option value="date">Newest first</option>
          <option value="position">By position</option>
          <option value="referrals">By referrals</option>
        </select>
        <a class="btn btn-secondary btn-sm" href=${`/dashboard/api/${slug}/signups/export.csv`} download>Export CSV</a>
      </div>

      ${loading ? html`<div class="loading">Loading…</div>` : error ? html`<div class="alert alert-error" style="margin:16px">${error}</div>` : html`
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Status</th>
              <th>Position</th>
              <th>Referrals</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            ${signups.map(s => html`
              <tr key=${s.id}>
                <td>${s.email}</td>
                <td>${statusBadge(s.status)}</td>
                <td>${s.effective_position}</td>
                <td>${s.referral_count}</td>
                <td>${fmtDate(s.created_at)}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${signups.length === 0 && html`<div class="empty">No signups match your filters.</div>`}
        <div class="pagination">
          <span class="info">Page ${page} of ${totalPages} (${total.toLocaleString()} results)</span>
          <button class="btn btn-secondary btn-sm" disabled=${page <= 1} onClick=${() => setPage(p => p - 1)}>← Prev</button>
          <button class="btn btn-secondary btn-sm" disabled=${page >= totalPages} onClick=${() => setPage(p => p + 1)}>Next →</button>
        </div>
      `}
    </div>
  `;
}

function LeaderboardPage() {
  const { data, loading, error } = useAsync(() => api.getLeaderboard(), []);

  return html`
    <h1 class="page-title">Leaderboard</h1>
    <div class="table-card">
      <div class="table-header"><span class="table-title">Top Referrers</span></div>
      ${loading ? html`<div class="loading">Loading…</div>` : error ? html`<div class="alert alert-error" style="margin:16px">${error}</div>` : html`
        <table>
          <thead><tr><th>Rank</th><th>Email</th><th>Referral Code</th><th>Referrals</th><th>Position</th></tr></thead>
          <tbody>
            ${data.map((s, i) => html`
              <tr key=${s.id}>
                <td>${i + 1}</td>
                <td>${s.email}</td>
                <td><code>${s.referral_code}</code></td>
                <td>${s.referral_count}</td>
                <td>${s.effective_position}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${data.length === 0 && html`<div class="empty">No signups yet.</div>`}
      `}
    </div>
  `;
}

function WebhooksPage() {
  const webhooks = useAsync(() => api.listWebhooks(), []);
  const deliveries = useAsync(() => api.listDeliveries(), []);
  const [form, setForm] = useState({ url: '', secret: '', events: [] });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);

  const allEvents = ['signup.created', 'email.verified', 'referral.converted'];

  function toggleEvent(ev) {
    setForm(f => ({
      ...f,
      events: f.events.includes(ev) ? f.events.filter(e => e !== ev) : [...f.events, ev],
    }));
  }

  async function handleCreate(e) {
    e.preventDefault();
    if (form.events.length === 0) { setMsg({ type: 'error', text: 'Select at least one event.' }); return; }
    setSaving(true);
    setMsg(null);
    try {
      await api.createWebhook({ url: form.url, secret: form.secret, events: form.events });
      setForm({ url: '', secret: '', events: [] });
      setMsg({ type: 'success', text: 'Webhook endpoint created.' });
      webhooks.reload();
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this webhook endpoint?')) return;
    try {
      await api.deleteWebhook(id);
      webhooks.reload();
      deliveries.reload();
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    }
  }

  return html`
    <h1 class="page-title">Webhooks</h1>
    ${msg && html`<div class=${`alert alert-${msg.type}`}>${msg.text}</div>`}

    <div class="table-card">
      <div class="table-header"><span class="table-title">Endpoints</span></div>
      ${webhooks.loading ? html`<div class="loading">Loading…</div>` : webhooks.error ? html`<div class="alert alert-error" style="margin:16px">${webhooks.error}</div>` : html`
        <table>
          <thead><tr><th>URL</th><th>Events</th><th>Active</th><th></th></tr></thead>
          <tbody>
            ${webhooks.data.map(w => html`
              <tr key=${w.id}>
                <td style="word-break:break-all">${w.url}</td>
                <td>${w.events.join(', ')}</td>
                <td>${w.active ? html`<span class="badge badge-success">Active</span>` : html`<span class="badge badge-muted">Paused</span>`}</td>
                <td><button class="btn btn-danger btn-sm" onClick=${() => handleDelete(w.id)}>Delete</button></td>
              </tr>
            `)}
          </tbody>
        </table>
        ${webhooks.data.length === 0 && html`<div class="empty">No webhook endpoints.</div>`}
        <form class="inline-form" onSubmit=${handleCreate}>
          <div class="form-group" style="flex:1;min-width:200px">
            <label>Endpoint URL</label>
            <input required type="url" value=${form.url} onInput=${e => setForm(f => ({ ...f, url: e.target.value }))} placeholder="https://example.com/webhook" />
          </div>
          <div class="form-group">
            <label>Secret (optional)</label>
            <input value=${form.secret} onInput=${e => setForm(f => ({ ...f, secret: e.target.value }))} placeholder="for HMAC signing" style="width:160px" />
          </div>
          <div class="form-group">
            <label>Events</label>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              ${allEvents.map(ev => html`
                <label style="display:flex;gap:4px;align-items:center;font-size:13px;font-weight:normal;color:var(--text)">
                  <input type="checkbox" checked=${form.events.includes(ev)} onChange=${() => toggleEvent(ev)} />
                  ${ev}
                </label>
              `)}
            </div>
          </div>
          <button class="btn btn-primary" type="submit" disabled=${saving}>Add</button>
        </form>
      `}
    </div>

    <div class="table-card">
      <div class="table-header"><span class="table-title">Recent Deliveries</span></div>
      ${deliveries.loading ? html`<div class="loading">Loading…</div>` : deliveries.error ? html`<div class="alert alert-error" style="margin:16px">${deliveries.error}</div>` : html`
        <table>
          <thead><tr><th>Endpoint</th><th>Event</th><th>Status</th><th>HTTP</th><th>Attempts</th><th>Time</th></tr></thead>
          <tbody>
            ${deliveries.data.map((d, i) => html`
              <tr key=${i}>
                <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title=${d.endpoint_url}>${d.endpoint_url}</td>
                <td><code>${d.event_type}</code></td>
                <td>${deliveryBadge(d.status)}</td>
                <td>${d.response_status || '—'}</td>
                <td>${d.attempts}</td>
                <td>${fmtDate(d.created_at)}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${deliveries.data.length === 0 && html`<div class="empty">No deliveries yet.</div>`}
      `}
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Invitations (invite) page
// ---------------------------------------------------------------------------

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  function copy(e) {
    e.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return html`<button class="btn btn-secondary btn-sm" style="padding:2px 6px;font-size:11px" onClick=${copy}>${copied ? '✓' : 'Copy'}</button>`;
}

function InviteHowItWorks() {
  return html`
    <div class="settings-section" style="margin-bottom:24px;border-left:3px solid var(--primary);padding-left:16px">
      <div class="settings-title" style="margin-bottom:8px">How invitations work</div>
      <p style="font-size:14px;color:var(--muted);margin-bottom:12px">
        When a user is invited, they receive an email with a unique link containing <code>${'?invite=<token>'}</code>.
        Your product should detect this query parameter when the user lands on your site and use the code to verify access.
      </p>
      <p style="font-size:13px;font-weight:600;margin-bottom:6px">Ways to validate an invite code:</p>
      <ul style="font-size:13px;color:var(--muted);margin:0;padding-left:20px;line-height:1.8">
        <li>
          <strong>API</strong> — check status with
          <code>GET /api/v1/invites/{"{token}"}</code>, then mark as used with
          <code>POST /api/v1/invites/{"{token}"}/redeem</code>.
          Both endpoints are public (the token is the credential).
        </li>
        <li>
          <strong>Dashboard</strong> — paste or type the invite code into the search box below to look it up manually and confirm its status.
        </li>
        <li>
          <strong>MCP</strong> — use <code>list_signups</code> with <code>status=invited</code> and search by token, or ask Claude to look up a specific invite code.
        </li>
      </ul>
    </div>
  `;
}

const INVITED_PAGE_SIZE = 50;

function InvitationsPage() {
  const statsAsync = useAsync(() => api.getStats(), []);
  const [count, setCount] = useState(100);
  const [inviting, setInviting] = useState(false);
  const [msg, setMsg] = useState(null);
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search input
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search);
      setOffset(0);
    }, 300);
    return () => clearTimeout(t);
  }, [search]);

  const invitedAsync = useAsync(
    () => api.listInvited({ limit: INVITED_PAGE_SIZE, offset, search: debouncedSearch }),
    [offset, debouncedSearch],
  );

  async function handleInvite(e) {
    e.preventDefault();
    const n = parseInt(count, 10);
    if (!n || n < 1) { setMsg({ type: 'error', text: 'Enter a valid count.' }); return; }
    if (!confirm(`Invite the top ${n} people? They will receive an email immediately.`)) return;
    setInviting(true);
    setMsg(null);
    try {
      const res = await api.inviteTopN(n);
      setMsg({ type: 'success', text: `✅ Invited ${res.invited} people. Total invited: ${res.total_invited}.` });
      statsAsync.reload();
      invitedAsync.reload();
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    } finally {
      setInviting(false);
    }
  }

  const stats = statsAsync.data;
  const verified = stats ? stats.verified_signups || 0 : 0;
  const invited = stats ? stats.invited_signups || 0 : 0;

  const total = invitedAsync.data?.total || 0;
  const hasPrev = offset > 0;
  const hasNext = offset + INVITED_PAGE_SIZE < total;

  return html`
    <h1 class="page-title">Invitations</h1>

    <${InviteHowItWorks} />

    ${statsAsync.loading ? html`<div class="loading">Loading…</div>` : html`
      <div class="stat-grid" style="margin-bottom:24px">
        <div class="stat-card">
          <div class="stat-label">Invited</div>
          <div class="stat-value">${invited.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Verified (eligible)</div>
          <div class="stat-value">${(verified - invited).toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Total Verified</div>
          <div class="stat-value">${verified.toLocaleString()}</div>
        </div>
      </div>
    `}

    ${msg && html`<div class=${`alert alert-${msg.type}`}>${msg.text}</div>`}

    <div class="settings-section">
      <div class="settings-title">Invite top N</div>
      <p style="font-size:14px;color:var(--muted);margin-bottom:16px">
        Marks the top N verified signups (by queue position) as invited and sends them an email immediately.
        Already-invited people are skipped — this is safe to run multiple times.
      </p>
      <form onSubmit=${handleInvite} style="display:flex;align-items:flex-end;gap:12px">
        <div class="form-group" style="margin:0">
          <label>Number of people to invite</label>
          <input type="number" min="1" max="10000" value=${count}
            onInput=${e => setCount(e.target.value)} style="width:120px" />
        </div>
        <button class="btn btn-primary" type="submit" disabled=${inviting}>
          ${inviting ? 'Inviting…' : 'Invite'}
        </button>
      </form>
    </div>

    <div class="table-card" style="margin-top:24px">
      <div class="table-header">
        <span class="table-title">Invited signups</span>
        <input
          type="search"
          placeholder="Search by email or invite code…"
          value=${search}
          onInput=${e => setSearch(e.target.value)}
          style="width:260px;padding:6px 10px;font-size:13px;border:1px solid var(--border);border-radius:6px;background:var(--bg);color:var(--text)"
        />
      </div>
      ${invitedAsync.loading ? html`<div class="loading">Loading…</div>` :
        invitedAsync.error ? html`<div class="alert alert-error">${invitedAsync.error}</div>` : html`
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Invite Code</th>
              <th>Redeemed</th>
              <th>Position</th>
              <th>Referrals</th>
              <th>Invited at</th>
            </tr>
          </thead>
          <tbody>
            ${(invitedAsync.data?.signups || []).map(s => html`
              <tr key=${s.id}>
                <td>${s.email}</td>
                <td>
                  ${s.invite_token ? html`
                    <span style="display:flex;align-items:center;gap:6px">
                      <code style="font-size:12px;color:var(--muted)">${s.invite_token.slice(0, 12)}…</code>
                      <${CopyButton} text=${s.invite_token} />
                    </span>
                  ` : html`<span style="color:var(--muted)">—</span>`}
                </td>
                <td>
                  ${s.invite_token_redeemed_at
                    ? html`<span style="color:var(--success)">✓ ${fmtDate(s.invite_token_redeemed_at)}</span>`
                    : html`<span style="color:var(--muted)">—</span>`}
                </td>
                <td>${s.effective_position}</td>
                <td>${s.referral_count}</td>
                <td>${s.invited_at ? new Date(s.invited_at).toLocaleString() : '—'}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${total === 0 && html`<div class="empty">${debouncedSearch ? 'No results for that search.' : 'No one invited yet.'}</div>`}
        ${total > INVITED_PAGE_SIZE && html`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;font-size:13px;color:var(--muted);border-top:1px solid var(--border)">
            <span>Showing ${offset + 1}–${Math.min(offset + INVITED_PAGE_SIZE, total)} of ${total.toLocaleString()}</span>
            <div style="display:flex;gap:8px">
              <button class="btn btn-secondary btn-sm" disabled=${!hasPrev} onClick=${() => setOffset(o => o - INVITED_PAGE_SIZE)}>← Prev</button>
              <button class="btn btn-secondary btn-sm" disabled=${!hasNext} onClick=${() => setOffset(o => o + INVITED_PAGE_SIZE)}>Next →</button>
            </div>
          </div>
        `}
      `}
    </div>
  `;
}

function APIKeysSection() {
  const keysAsync = useAsync(() => api.listAPIKeys(), []);
  const [newKeyName, setNewKeyName] = useState('');
  const [creating, setCreating] = useState(false);
  const [revealedKey, setRevealedKey] = useState<{id: string, value: string} | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function handleCreate(e) {
    e.preventDefault();
    if (!newKeyName.trim()) return;
    setCreating(true);
    setErr(null);
    try {
      const res = await api.createAPIKey(newKeyName.trim());
      setRevealedKey({ id: res.id, value: res.api_key });
      setNewKeyName('');
      keysAsync.reload();
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setCreating(false);
    }
  }

  async function handleRevoke(id: string, name: string) {
    if (!confirm(`Revoke key "${name}"? It will stop working immediately.`)) return;
    setErr(null);
    try {
      await api.revokeAPIKey(id);
      if (revealedKey?.id === id) setRevealedKey(null);
      keysAsync.reload();
    } catch (e: any) {
      setErr(e.message);
    }
  }

  return html`
    <div class="settings-section">
      <div class="settings-title">API Keys</div>
      <p style="font-size:14px;color:var(--muted);margin-bottom:16px">
        API keys authenticate programmatic access to your campaign via the REST API or MCP server.
      </p>
      ${err && html`<div class="alert alert-error" style="margin-bottom:12px">${err}</div>`}

      ${revealedKey && html`
        <div class="alert alert-success" style="margin-bottom:16px">
          <div style="margin-bottom:6px;font-weight:600">New key created — copy it now. It will not be shown again.</div>
          <div class="api-key-display">
            <span class="api-key-mono" style="word-break:break-all">${revealedKey.value}</span>
            <${CopyButton} text=${revealedKey.value} />
          </div>
        </div>
      `}

      ${keysAsync.loading && html`<div class="loading" style="margin-bottom:12px">Loading…</div>`}
      ${keysAsync.data?.length > 0 && html`
        <table style="margin-bottom:16px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Created</th>
              <th>Last used</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${keysAsync.data.map(k => html`
              <tr>
                <td style="font-weight:500">${k.name}</td>
                <td style="color:var(--muted);font-size:13px">${fmtDate(k.created_at)}</td>
                <td style="color:var(--muted);font-size:13px">${k.last_used_at ? fmtDate(k.last_used_at) : '—'}</td>
                <td style="text-align:right">
                  <button class="btn btn-danger btn-sm" onClick=${() => handleRevoke(k.id, k.name)}>Revoke</button>
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      `}
      ${!keysAsync.loading && keysAsync.data?.length === 0 && html`
        <p style="font-size:13px;color:var(--muted);margin-bottom:16px">No active API keys.</p>
      `}

      <form onSubmit=${handleCreate} style="display:flex;gap:8px;align-items:flex-end">
        <div class="form-group" style="flex:1;margin-bottom:0">
          <label>New key name</label>
          <input placeholder="e.g. production, CI" value=${newKeyName}
            onInput=${e => setNewKeyName(e.target.value)} />
        </div>
        <button class="btn btn-primary" type="submit" disabled=${creating || !newKeyName.trim()}>
          ${creating ? 'Creating…' : 'Create API Key'}
        </button>
      </form>
    </div>
  `;
}

function SettingsPage() {
  const settingsAsync = useAsync(() => api.getSettings(), []);
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (settingsAsync.data && !form) {
      setForm(settingsAsync.data);
    }
  }, [settingsAsync.data]);

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setMsg(null);
    try {
      await api.updateSettings({
        name: form.name,
        boost_weight: parseFloat(form.boost_weight),
        max_signups: form.max_signups ? parseInt(form.max_signups, 10) : null,
        status: form.status,
        product_url: form.product_url,
      });
      setMsg({ type: 'success', text: 'Settings saved.' });
      settingsAsync.reload();
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
    } finally {
      setSaving(false);
    }
  }

  if (settingsAsync.loading) return html`<div class="loading">Loading…</div>`;
  if (settingsAsync.error) return html`<div class="alert alert-error">${settingsAsync.error}</div>`;

  return html`
    <h1 class="page-title">Settings</h1>
    ${msg && html`<div class=${`alert alert-${msg.type}`}>${msg.text}</div>`}

    ${form && html`
      <div class="settings-section">
        <div class="settings-title">Campaign Settings</div>
        <form onSubmit=${handleSave}>
          <div class="form-row">
            <div class="form-group" style="flex:1;min-width:200px">
              <label>Campaign Name</label>
              <input required value=${form.name || ''} onInput=${e => setForm(f => ({ ...f, name: e.target.value }))} />
            </div>
            <div class="form-group">
              <label>Status</label>
              <select value=${form.status || ''} onChange=${e => setForm(f => ({ ...f, status: e.target.value }))}>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="full">Full</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label style="display:flex;align-items:center">Boost Weight <${Tooltip} text="How many queue positions each referral is worth. Default 1.0 means 1 referral moves you up 1 spot. Increase to make referrals more powerful." /></label>
              <input type="number" step="0.1" min="0" value=${form.boost_weight ?? 1}
                onInput=${e => setForm(f => ({ ...f, boost_weight: e.target.value }))} style="width:120px" />
            </div>
            <div class="form-group">
              <label style="display:flex;align-items:center">Max Signups <${Tooltip} text="Cap the total number of signups. New registrations are rejected once the cap is reached. Leave blank for unlimited." /></label>
              <input type="number" min="1" value=${form.max_signups || ''}
                onInput=${e => setForm(f => ({ ...f, max_signups: e.target.value || null }))} style="width:140px" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group" style="flex:1">
              <label style="display:flex;align-items:center">Product URL <${Tooltip} text="Your product's URL. Used as the CTA link in invite emails and to restrict the widget to your domain — the widget will only work when embedded on this origin (e.g. https://yoursite.com)." /></label>
              <input required type="url" placeholder="https://yourproduct.com" value=${form.product_url || ''}
                onInput=${e => setForm(f => ({ ...f, product_url: e.target.value }))} />
            </div>
          </div>
          <button class="btn btn-primary" type="submit" disabled=${saving}>Save settings</button>
        </form>
      </div>

      <${APIKeysSection} />

      <div class="settings-section settings-danger">
        <div class="settings-title">Danger Zone</div>
        <p style="font-size:14px;margin-bottom:16px">Pausing stops new signups while preserving existing data.</p>
        <div style="display:flex;gap:12px">
          <button class="btn btn-danger"
            disabled=${form.status === 'paused'}
            onClick=${async () => {
              if (!confirm('Pause this campaign?')) return;
              try { await api.updateSettings({ status: 'paused' }); settingsAsync.reload(); setForm(f => ({ ...f, status: 'paused' })); }
              catch (err) { setMsg({ type: 'error', text: err.message }); }
            }}>
            Pause Campaign
          </button>
          <button class="btn btn-secondary"
            disabled=${form.status === 'active'}
            onClick=${async () => {
              try { await api.updateSettings({ status: 'active' }); settingsAsync.reload(); setForm(f => ({ ...f, status: 'active' })); }
              catch (err) { setMsg({ type: 'error', text: err.message }); }
            }}>
            Resume Campaign
          </button>
        </div>
      </div>
    `}
  `;
}

// ---------------------------------------------------------------------------
// Setup page
// ---------------------------------------------------------------------------



const PREVIEW_TABS: { id: SignupView; label: string }[] = [
  { id: 'none',      label: 'Not signed in' },
  { id: 'signed_in', label: 'Signed in' },
  { id: 'invited',   label: 'Invited' },
];

const ACCENT_PRESETS = [
  { color: '#6366f1', label: 'Indigo' },
  { color: '#3b82f6', label: 'Blue' },
  { color: '#10b981', label: 'Emerald' },
  { color: '#f59e0b', label: 'Amber' },
  { color: '#ef4444', label: 'Red' },
  { color: '#8b5cf6', label: 'Violet' },
  { color: '#ec4899', label: 'Pink' },
  { color: '#000000', label: 'Black' },
];

// Builds the inline <script> that intercepts fetch (and optionally localStorage) inside a
// preview srcdoc iframe so the real widget JS renders with fake data instead of live API calls.
type SignupView = 'none' | 'signed_in' | 'invited';

function buildPreviewMockScript(campaignSlug: string, signupView: SignupView): string {
  const baseSignup = { id: 'preview', campaign_id: 'preview-cid', email: 'you@example.com', referral_code: 'PRVW0001', base_position: 1, effective_position: 1, referral_count: 0, status: 'verified' };
  const signupData = signupView === 'invited'
    ? { ...baseSignup, status: 'invited' }
    : baseSignup;
  const hasSignup = signupView !== 'none';
  const mockData = {
    campaign_id: 'preview-cid', campaign_name: 'My Product', slug: campaignSlug,
    total_signups: 0,
    ...(hasSignup ? { signup: signupData } : {}),
  };

  const lsKey = JSON.stringify(`ep_${campaignSlug}`);
  const lsVal = JSON.stringify(JSON.stringify(signupData));

  // Shadow window.localStorage in the iframe so the parent's real localStorage is untouched.
  const lsMock = hasSignup
    ? `var _ls={};_ls[${lsKey}]=${lsVal};try{Object.defineProperty(window,'localStorage',{get:function(){return{getItem:function(k){return Object.prototype.hasOwnProperty.call(_ls,k)?_ls[k]:null;},setItem:function(k,v){_ls[k]=String(v);},removeItem:function(k){delete _ls[k];},clear:function(){_ls={};},key:function(i){return Object.keys(_ls)[i]||null;},get length(){return Object.keys(_ls).length;}};},configurable:true});}catch(e){}`
    : '';

  return `<script>(function(){${lsMock};var _d=${JSON.stringify(mockData)};var _s=${JSON.stringify(signupData)};var _f=window.fetch.bind(window);window.fetch=function(u,o){var us=String(u);if(us.indexOf('/api/v1/w/')!==-1)return Promise.resolve(new Response(JSON.stringify(_d),{status:200,headers:{'Content-Type':'application/json'}}));if(us.indexOf('/api/v1/campaigns/')!==-1&&o&&o.method==='POST')return Promise.resolve(new Response(JSON.stringify(_s),{status:200,headers:{'Content-Type':'application/json'}}));return _f(u,o);};})();<\/script>`;
}

// Builds a complete srcdoc string for a preview iframe.
// early-pass gets an explicit width so both signed-in and not-signed-in views stay the same size.
function buildPreviewSrcdoc(
  theme: 'light' | 'dark',
  accent: string,
  campaignSlug: string,
  signupView: SignupView,
  origin: string,
  pageUrl: string,
): string {
  const bg = theme === 'dark' ? '#111827' : '#f3f4f6';
  const mockScript = buildPreviewMockScript(campaignSlug, signupView);
  return [
    '<!DOCTYPE html><html><head><meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width,initial-scale=1">',
    `<base href="${pageUrl}/">`,
    '<style>*{box-sizing:border-box;margin:0;padding:0}',
    `body{padding:24px 16px;background:${bg};min-height:100%;display:flex;justify-content:center;}`,
    // Fixed width prevents the widget from changing size between idle and success states
    `early-pass{width:min(28rem,100%)}</style>`,
    '</head><body>',
    mockScript,
    `<early-pass data-campaign="${campaignSlug}" data-theme="${theme}" data-accent="${accent}"></early-pass>`,
    `<script src="${origin}/widget/widget.js"><\/script>`,
    '</body></html>',
  ].join('');
}

function SetupPage() {
  const settingsAsync = useAsync(() => api.getSettings(), []);
  // Snippet state — updates live as user tweaks controls
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [accent, setAccent] = useState('#6366f1');
  // Preview state — only updates on color picker release or preset click (not mid-drag)
  const [previewTheme, setPreviewTheme] = useState<'light' | 'dark'>('light');
  const [previewAccent, setPreviewAccent] = useState('#6366f1');
  // Active preview tab
  const [activePreview, setActivePreview] = useState<SignupView>('none');
  // Embed code copy feedback
  const [codeCopied, setCodeCopied] = useState(false);

  if (settingsAsync.loading) return html`<div class="loading">Loading…</div>`;
  if (settingsAsync.error) return html`<div class="alert alert-error">${settingsAsync.error}</div>`;

  const baseUrl = settingsAsync.data.base_url || window.location.origin;
  const origin = window.location.origin;
  const pageUrl = settingsAsync.data.product_url || 'https://your-product.com';

  // Build snippet — omit attributes that match their defaults
  const attrs: string[] = [`data-campaign="${slug}"`];
  if (theme !== 'light') attrs.push(`data-theme="${theme}"`);
  if (accent.toLowerCase() !== '#6366f1') attrs.push(`data-accent="${accent}"`);
  const attrStr = attrs.length > 1 ? '\n        ' + attrs.join('\n        ') : ' ' + attrs[0];
  const snippet = `<script src="${baseUrl}/widget/widget.js"${attrStr} async></script>`;

  const iframeKey = `${previewTheme}:${previewAccent}`;
  const srcdocByTab: Record<SignupView, string> = {
    none:      buildPreviewSrcdoc(previewTheme, previewAccent, slug, 'none',      origin, pageUrl),
    signed_in: buildPreviewSrcdoc(previewTheme, previewAccent, slug, 'signed_in', origin, pageUrl),
    invited:   buildPreviewSrcdoc(previewTheme, previewAccent, slug, 'invited',   origin, pageUrl),
  };
  const activeIframeKey = `${activePreview}:${iframeKey}`;

  function handleThemeChange(t: 'light' | 'dark') {
    setTheme(t);
    setPreviewTheme(t);
  }

  function handleAccentInput(v: string) {
    setAccent(v); // snippet updates live
  }

  function handleAccentCommit(v: string) {
    setAccent(v);
    if (/^#[0-9a-fA-F]{6}$/.test(v)) setPreviewAccent(v); // preview reloads
  }

  function selectPreset(c: string) {
    setAccent(c);
    setPreviewAccent(c);
  }

  function copyCode() {
    navigator.clipboard.writeText(snippet).then(() => {
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    });
  }

  return html`
    <h1 class="page-title">Setup</h1>

    <div class="setup-grid">

      <div class="setup-left-col">

        <div class="settings-section">
          <div class="settings-title">Customize widget</div>

          <div class="form-group" style="margin-bottom:20px">
            <label>Theme</label>
            <div class="setup-theme-cards">
              ${(['light', 'dark'] as const).map(t => html`
                <button
                  key=${t}
                  class=${'setup-theme-card' + (theme === t ? ' active' : '')}
                  onClick=${() => handleThemeChange(t)}
                >
                  <div class=${'setup-theme-thumb setup-theme-thumb-' + t}></div>
                  <div class="setup-theme-label">
                    ${t === 'light' ? '☀️ Light' : '🌙 Dark'}
                  </div>
                </button>
              `)}
            </div>
          </div>

          <div class="form-group">
            <label>Accent color</label>
            <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
              <input
                type="color"
                value=${accent}
                onInput=${(e: Event) => handleAccentInput((e.target as HTMLInputElement).value)}
                onChange=${(e: Event) => handleAccentCommit((e.target as HTMLInputElement).value)}
                style="width:38px;height:34px;border:1px solid var(--border);border-radius:6px;padding:2px;cursor:pointer;background:var(--surface)"
              />
              <input
                type="text"
                value=${accent}
                onInput=${(e: Event) => handleAccentInput((e.target as HTMLInputElement).value)}
                onChange=${(e: Event) => handleAccentCommit((e.target as HTMLInputElement).value)}
                style="width:84px;font-family:monospace;font-size:13px"
                maxlength="7"
                placeholder="#6366f1"
              />
            </div>
            <div class="setup-swatches">
              ${ACCENT_PRESETS.map(({ color, label }) => html`
                <button
                  key=${color}
                  title=${label}
                  class=${'setup-swatch' + (accent === color ? ' active' : '')}
                  style=${'background:' + color}
                  onClick=${() => selectPreset(color)}
                ></button>
              `)}
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-title">Embed code</div>
          <p style="font-size:13px;color:var(--muted);margin-bottom:14px;line-height:1.5">
            Paste this snippet into your page. Updates as you customize above.
          </p>
          <div class="setup-code-block">
            <pre class="setup-code-pre">${snippet}</pre>
            <div class="setup-code-footer">
              <button class=${'setup-code-copy' + (codeCopied ? ' copied' : '')} onClick=${copyCode}>
                ${codeCopied ? '✓ Copied!' : '📋 Copy code'}
              </button>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-title">Getting started</div>
          <div class="setup-steps">
            ${[
              'Customize the widget theme and color above',
              'Copy the embed code',
              html`Paste it before <code>${'</body>'}</code> in your page HTML`,
              'Publish your page',
              'Share your link and watch signups roll in',
            ].map((step, i) => html`
              <div key=${i} class="setup-step">
                <div class="setup-step-num">${i + 1}</div>
                <div class="setup-step-text">${step}</div>
              </div>
            `)}
          </div>
        </div>

      </div>

      <div class="setup-preview-col">
        <div class="settings-section">

          <div style="padding:14px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
            <div class="settings-title" style="margin:0">Preview</div>
            <span style="font-size:12px;color:var(--muted);font-family:ui-monospace,monospace">${previewTheme} · ${previewAccent}</span>
          </div>

          <div class="preview-chrome">
            <div class="preview-chrome-dots">
              <span class="preview-chrome-dot"></span>
              <span class="preview-chrome-dot"></span>
              <span class="preview-chrome-dot"></span>
            </div>
            <div class="preview-chrome-url">${pageUrl}</div>
          </div>

          <div class="preview-tabs">
            ${PREVIEW_TABS.map(tab => html`
              <button
                key=${tab.id}
                class=${'preview-tab' + (activePreview === tab.id ? ' active' : '')}
                onClick=${() => setActivePreview(tab.id)}
              >${tab.label}</button>
            `)}
          </div>

          <iframe
            key=${activeIframeKey}
            srcdoc=${srcdocByTab[activePreview]}
            style="width:100%;border:none;display:block"
            height="300"
            title=${'Widget preview — ' + activePreview}
          ></iframe>

        </div>
      </div>

    </div>
  `;
}

// ---------------------------------------------------------------------------
// Account home
// ---------------------------------------------------------------------------

function AccountHome() {
  const { data: campaigns, loading, error } = useAsync(() => accountApi.listCampaigns(), []);
  const [name, setName] = useState('');
  const [productURL, setProductURL] = useState('');
  const [creating, setCreating] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [msg, setMsg] = useState(null);

  async function handleCreate(e) {
    e.preventDefault();
    setCreating(true);
    setMsg(null);
    try {
      const res = await accountApi.createCampaign(name.trim(), productURL.trim());
      window.location.href = `/dashboard/${res.slug}/`;
    } catch (err) {
      setMsg({ type: 'error', text: err.message });
      setCreating(false);
    }
  }

  const statusBadgeClass = (status) =>
    ({ active: 'badge-success', paused: 'badge-warning' }[status] || 'badge-muted');

  const hasCampaigns = !loading && !error && campaigns && campaigns.length > 0;
  const isFirstCampaign = !loading && !error && campaigns && campaigns.length === 0;

  return html`
    <div class="header">
      <img class="header-logo" src="/assets/logo.svg" alt="EarlyPass">
      <form method="POST" action="/dashboard/logout" style="margin-left:auto">
        <button class="btn btn-secondary btn-sm" type="submit">Sign out</button>
      </form>
    </div>
    <div class="main-content">
      ${hasCampaigns && html`
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
          <h1 class="page-title" style="margin:0">My Campaigns</h1>
          <button class="btn btn-primary" onClick=${() => { setShowForm(true); setMsg(null); }}>+ New campaign</button>
        </div>
      `}

      ${msg && html`<div class=${`alert alert-${msg.type}`}>${msg.text}</div>`}

      ${loading ? html`<div class="loading">Loading campaigns…</div>` :
        error ? html`<div class="alert alert-error">${error}</div>` :
        isFirstCampaign && !showForm ? html`
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 24px;max-width:520px;margin:0 auto">
            <h2 style="font-size:22px;font-weight:700;margin:0 0 12px">Create your first campaign</h2>
            <p style="color:var(--muted);font-size:15px;line-height:1.6;margin:0 0 32px;max-width:380px">
              Set up a waitlist in minutes. Add the widget to your site and start collecting signups with built-in referral tracking.
            </p>
            <button class="btn btn-primary" style="font-size:15px;padding:10px 24px"
              onClick=${() => setShowForm(true)}>
              Create your first campaign
            </button>
          </div>
        ` :
        isFirstCampaign && showForm ? html`
          <div style="max-width:480px;margin:40px auto 0">
            <h2 style="font-size:20px;font-weight:700;margin:0 0 24px">Create your first campaign</h2>
            ${msg && html`<div class=${`alert alert-${msg.type}`} style="margin-bottom:16px">${msg.text}</div>`}
            <form onSubmit=${handleCreate}>
              <div class="form-group" style="margin-bottom:16px">
                <label>Campaign name</label>
                <input required autoFocus value=${name}
                  onInput=${e => setName(e.target.value)}
                  placeholder="My Product Waitlist" maxlength="200" />
              </div>
              <div class="form-group" style="margin-bottom:16px">
                <label style="display:flex;align-items:center">Product URL <${Tooltip} text="Your product's URL. Used as the CTA link in invite emails and to restrict the widget to your domain — the widget will only work when embedded on this origin (e.g. https://yoursite.com)." /></label>
                <input required type="url" value=${productURL}
                  onInput=${e => setProductURL(e.target.value)}
                  placeholder="https://yoursite.com/product" />
              </div>
              <div style="display:flex;gap:8px">
                <button class="btn btn-primary" type="submit" disabled=${creating}>
                  ${creating ? 'Creating…' : 'Create campaign'}
                </button>
                <button class="btn btn-secondary" type="button"
                  onClick=${() => { setShowForm(false); setName(''); setProductURL(''); setMsg(null); }}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ` : html`
          <div>
            ${showForm && html`
              <div class="settings-section" style="margin-bottom:24px;max-width:480px">
                <div class="settings-title">Create campaign</div>
                ${msg && html`<div class=${`alert alert-${msg.type}`} style="margin-bottom:16px">${msg.text}</div>`}
                <form onSubmit=${handleCreate}>
                  <div class="form-group" style="margin-bottom:16px">
                    <label>Campaign name</label>
                    <input required autoFocus value=${name}
                      onInput=${e => setName(e.target.value)}
                      placeholder="My Product Waitlist" maxlength="200" />
                  </div>
                  <div class="form-group" style="margin-bottom:16px">
                    <label style="display:flex;align-items:center">Product URL <${Tooltip} text="Your product's URL. Used as the CTA link in invite emails and to restrict the widget to your domain — the widget will only work when embedded on this origin (e.g. https://yoursite.com)." /></label>
                    <input required type="url" value=${productURL}
                      onInput=${e => setProductURL(e.target.value)}
                      placeholder="https://yoursite.com/product" />
                  </div>
                  <div style="display:flex;gap:8px">
                    <button class="btn btn-primary" type="submit" disabled=${creating}>
                      ${creating ? 'Creating…' : 'Create campaign'}
                    </button>
                    <button class="btn btn-secondary" type="button"
                      onClick=${() => { setShowForm(false); setName(''); setProductURL(''); setMsg(null); }}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            `}
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px">
              ${campaigns && campaigns.map(c => html`
                <a key=${c.slug} href=${`/dashboard/${c.slug}/`}
                  style="display:block;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;text-decoration:none;color:inherit;transition:border-color 0.15s"
                  onMouseOver=${e => e.currentTarget.style.borderColor = 'var(--primary)'}
                  onMouseOut=${e => e.currentTarget.style.borderColor = 'var(--border)'}>
                  <div style="display:flex;align-items:center;justify-content:space-between">
                    <div>
                      <div style="font-weight:600;font-size:15px;margin-bottom:4px">${c.name}</div>
                      <div style="color:var(--muted);font-size:13px">${c.slug}</div>
                    </div>
                    <span class=${`badge ${statusBadgeClass(c.status)}`}>${c.status}</span>
                  </div>
                </a>
              `)}
            </div>
          </div>
        `
      }
    </div>
  `;
}

// ---------------------------------------------------------------------------
// App shell / router
// ---------------------------------------------------------------------------

const PAGES = [
  { id: 'overview',    label: '📊 Overview',    Component: OverviewPage },
  { id: 'setup',       label: '🚀 Setup',        Component: SetupPage },
  { id: 'signups',     label: '👥 Signups',      Component: SignupsPage },
  { id: 'leaderboard', label: '🏆 Leaderboard',  Component: LeaderboardPage },
  { id: 'invitations', label: '📬 Invitations',   Component: InvitationsPage },
  { id: 'webhooks',    label: '🔗 Webhooks',     Component: WebhooksPage },
  { id: 'settings',   label: '⚙️ Settings',     Component: SettingsPage },
];

function App() {
  const getPage = () => (window.location.hash.slice(1) || 'overview');
  const [activePage, setActivePage] = useState(getPage);
  const [campaignName, setCampaignName] = useState('');
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Backward compat: redirect old #access hash to #invitations
    if (window.location.hash === '#access') window.location.replace('#invitations');
    api.getSettings().then(s => setCampaignName(s.name || slug)).catch(() => {});
    accountApi.listCampaigns().then(list => setCampaigns(list)).catch(() => {});
  }, []);

  useEffect(() => {
    const onHashChange = () => setActivePage(getPage());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const page = PAGES.find(p => p.id === activePage) || PAGES[0];

  return html`
    <div class="header">
      <a href="/dashboard/" style="display:block;height:28px;text-decoration:none"><img src="/assets/logo.svg" alt="EarlyPass" height="28"></a>
      <div style="display:flex;align-items:center;gap:8px;margin-left:auto">
        ${campaigns.length > 1 ? html`
          <select
            value=${slug}
            onChange=${e => { window.location.href = `/dashboard/${e.target.value}/`; }}
            style="font-size:13px;padding:4px 8px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text)">
            ${campaigns.map(c => html`
              <option key=${c.slug} value=${c.slug}>${c.name}</option>
            `)}
          </select>
        ` : html`
          <span class="header-campaign">${campaignName || slug}</span>
        `}
        <a href="/dashboard/"
          style="font-size:12px;color:var(--muted);text-decoration:none;padding:4px 10px;border:1px solid var(--border);border-radius:6px;white-space:nowrap">
          ← All campaigns
        </a>
        <form method="POST" action="/dashboard/logout">
          <button class="btn btn-secondary btn-sm" type="submit">Sign out</button>
        </form>
      </div>
    </div>
    <div class="layout">
      <nav class="sidebar">
        ${PAGES.map(p => html`
          <a key=${p.id}
            class=${`nav-item${activePage === p.id ? ' active' : ''}`}
            href=${`#${p.id}`}
            onClick=${() => setActivePage(p.id)}>
            ${p.label}
          </a>
        `)}
      </nav>
      <main class="main-content">
        <${page.Component} />
      </main>
    </div>
  `;
}

render(
  isHome ? html`<${AccountHome} />` : html`<${App} />`,
  document.getElementById('app'),
);
