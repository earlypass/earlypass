// API client for the EarlyPass widget.
// Makes calls to the EarlyPass backend and manages localStorage persistence.

export interface SignupResult {
  id: string;
  campaign_id: string;
  email: string;
  referral_code: string;
  base_position: number;
  effective_position: number;
  referral_count: number;
  status: string;
}

export interface WidgetData {
  campaign_id: string;
  campaign_name: string;
  slug: string;
  total_signups: number;
  signup?: SignupResult;
}

// Derive the API base URL from the script's own src so that calls go to the
// EarlyPass server regardless of which domain embeds the widget.
// document.currentScript is available during synchronous IIFE execution.
const _scriptSrc = (document.currentScript as HTMLScriptElement | null)?.src;
const BASE = _scriptSrc ? new URL(_scriptSrc).origin : "";

export class APIError extends Error {
  constructor(public readonly status: number) {
    super(`API ${status}`);
  }
}

export async function fetchWidgetData(
  slug: string,
  email?: string
): Promise<WidgetData> {
  // Use document.baseURI as the base so relative URLs work correctly in both
  // normal pages and srcdoc iframes (where window.location.href is "about:srcdoc").
  const url = new URL(`${BASE}/api/v1/w/${encodeURIComponent(slug)}`, document.baseURI);
  if (email) url.searchParams.set("email", email);
  const res = await fetch(url.toString());
  if (!res.ok) throw new APIError(res.status);
  return res.json() as Promise<WidgetData>;
}

async function fetchCSRFToken(campaignId: string): Promise<string> {
  const res = await fetch(
    `${BASE}/api/v1/campaigns/${campaignId}/csrf-token`
  );
  if (!res.ok) throw new Error(`CSRF fetch failed: ${res.status}`);
  const data = (await res.json()) as { token: string };
  return data.token;
}

export async function submitSignup(
  campaignId: string,
  email: string,
  referralCode?: string | null
): Promise<SignupResult> {
  const csrfToken = await fetchCSRFToken(campaignId);
  const body: Record<string, unknown> = { email };
  if (referralCode) body.referral_code = referralCode;
  const res = await fetch(`${BASE}/api/v1/campaigns/${campaignId}/signups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { detail?: string };
    throw new Error(err.detail ?? `API ${res.status}`);
  }
  return res.json() as Promise<SignupResult>;
}

const storageKey = (slug: string): string => `ep_${slug}`;

export function getStoredSignup(slug: string): SignupResult | null {
  try {
    const raw = localStorage.getItem(storageKey(slug));
    return raw ? (JSON.parse(raw) as SignupResult) : null;
  } catch {
    return null;
  }
}

export function storeSignup(slug: string, signup: SignupResult): void {
  try {
    localStorage.setItem(storageKey(slug), JSON.stringify(signup));
  } catch {
    // Ignore storage quota errors.
  }
}

export function getReferralCodeFromURL(): string | null {
  try {
    return new URLSearchParams(window.location.search).get("ref");
  } catch {
    return null;
  }
}
