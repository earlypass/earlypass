// EarlyPass widget custom element.
// State machine: loading → idle | success | error

import {
  fetchWidgetData,
  submitSignup,
  getStoredSignup,
  storeSignup,
  getReferralCodeFromURL,
  APIError,
  type SignupResult,
  type WidgetData,
} from "./api";
import { getStyles } from "./styles";

type State =
  | { kind: "loading" }
  | {
      kind: "idle";
      campaignId: string;
      campaignName: string;
    }
  | { kind: "submitting"; campaignId: string; campaignName: string }
  | {
      kind: "success";
      signup: SignupResult;
      campaignName: string;
    }
  | {
      kind: "invited";
      signup: SignupResult;
      campaignName: string;
    }
  | {
      kind: "error";
      message: string;
      campaignId: string;
      campaignName: string;
    };

// signupState returns the appropriate state for a signup:
// 'invited' if the signup has been invited, 'success' otherwise.
function signupState(
  signup: SignupResult,
  campaignName: string
): State {
  if (signup.status === "invited") {
    return { kind: "invited", signup, campaignName };
  }
  return { kind: "success", signup, campaignName };
}

function escapeHTML(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export class EarlyPassWidget extends HTMLElement {
  private shadow: ShadowRoot;
  private slug = "";
  private accent = "#6366f1";
  private state: State = { kind: "loading" };

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback(): void {
    this.slug = this.getAttribute("data-campaign") ?? "";
    this.accent = this.getAttribute("data-accent") ?? "#6366f1";
    this.render();
    void this.init();
  }

  private async init(): Promise<void> {
    if (!this.slug) {
      this.setState({
        kind: "error",
        message: 'Missing required "data-campaign" attribute.',
        campaignId: "",
        campaignName: "",
      });
      return;
    }

    const stored = getStoredSignup(this.slug);
    try {
      const data: WidgetData = await fetchWidgetData(
        this.slug,
        stored?.email
      );
      if (stored && data.signup) {
        this.setState(signupState(data.signup, data.campaign_name));
      } else {
        this.setState({
          kind: "idle",
          campaignId: data.campaign_id,
          campaignName: data.campaign_name,
        });
      }
    } catch (err) {
      if (err instanceof APIError && err.status === 403) {
        this.setState({
          kind: "error",
          message: "This widget is not authorized to run on this domain. Check the Product URL in your campaign settings.",
          campaignId: "",
          campaignName: "",
        });
        return;
      }
      // Offline fallback: show stored signup if available.
      if (stored) {
        this.setState(signupState(stored, ""));
      } else {
        this.setState({
          kind: "error",
          message: "Failed to load waitlist. Please try again later.",
          campaignId: "",
          campaignName: "",
        });
      }
    }
  }

  private setState(next: State): void {
    this.state = next;
    this.render();
  }

  private render(): void {
    const style = document.createElement("style");
    style.textContent = getStyles(this.accent);

    const container = document.createElement("div");
    container.className = "ep";
    container.innerHTML = this.buildHTML();

    this.shadow.innerHTML = "";
    this.shadow.appendChild(style);
    this.shadow.appendChild(container);
    this.attachListeners();
  }

  private buildHTML(): string {
    const { state } = this;

    if (state.kind === "loading") {
      return `<p class="ep-loading">Loading…</p>`;
    }

    if (state.kind === "error" && !state.campaignId) {
      return `<p class="ep-error">${escapeHTML(state.message)}</p>`;
    }

    if (state.kind === "invited") {
      return `
        <p class="ep-title">${state.campaignName ? escapeHTML(state.campaignName) : "You're in!"}</p>
        <div class="ep-invited-badge">Access granted</div>
        <p class="ep-invited-msg">Check your email — your invitation is waiting.</p>
      `;
    }

    if (state.kind === "success") {
      // In srcdoc preview iframes window.location.origin is the string "null"
      // and pathname is "srcdoc". Fall back to document.baseURI, which resolves
      // correctly because the dashboard injects <base href="https://.../">.
      const pageURL =
        window.location.origin !== "null"
          ? window.location.origin + window.location.pathname
          : new URL(document.baseURI).href.replace(/\/$/, "");
      const refURL = `${pageURL}?ref=${encodeURIComponent(state.signup.referral_code)}`;
      return `
        <p class="ep-title">${state.campaignName ? escapeHTML(state.campaignName) : "You're on the list!"}</p>
        <div class="ep-pos-num">#${state.signup.effective_position}</div>
        <p class="ep-pos-label">your position <span class="ep-pos-now" title="This updates live — others can move ahead by referring friends. Share your link to climb higher.">right now ⓘ</span> · share your link to move up</p>
        <div class="ep-ref-box">
          <div class="ep-ref-label">Share your link to move up</div>
          <div class="ep-ref-url" id="ep-ref-url">${escapeHTML(refURL)}</div>
          <button class="ep-copy-btn" id="ep-copy-btn">Copy link</button>
        </div>
      `;
    }

    // idle or error with valid campaign
    const isSubmitting = state.kind === "submitting";
    const errorHTML =
      state.kind === "error"
        ? `<p class="ep-error">${escapeHTML(state.message)}</p>`
        : "";

    return `
      <p class="ep-title">${state.campaignName ? escapeHTML(state.campaignName) : "Join the waitlist"}</p>
      <form class="ep-form" id="ep-form" novalidate>
        <input
          class="ep-input"
          id="ep-email"
          type="email"
          placeholder="you@example.com"
          autocomplete="email"
          required
        />
        <button class="ep-btn" type="submit" id="ep-submit"${isSubmitting ? " disabled" : ""}>
          ${isSubmitting ? "Joining…" : "Join"}
        </button>
      </form>
      ${errorHTML}
    `;
  }

  private attachListeners(): void {
    const form = this.shadow.getElementById("ep-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        void this.handleSubmit();
      });
    }
    const copyBtn = this.shadow.getElementById("ep-copy-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => void this.handleCopy());
    }
  }

  private async handleSubmit(): Promise<void> {
    const st = this.state;
    if (st.kind !== "idle" && st.kind !== "error") return;

    const input = this.shadow.getElementById("ep-email") as HTMLInputElement | null;
    const email = input?.value.trim() ?? "";
    if (!email) return;

    const campaignId = st.campaignId;
    if (!campaignId) return;

    const refCode = getReferralCodeFromURL();
    this.setState({ kind: "submitting", campaignId, campaignName: st.campaignName });

    try {
      const signup = await submitSignup(campaignId, email, refCode);

      // Fetch fresh widget data for updated position.
      const data = await fetchWidgetData(this.slug, email).catch(() => null);
      const freshSignup = data?.signup ?? signup;
      storeSignup(this.slug, freshSignup);
      this.setState(signupState(freshSignup, data?.campaign_name ?? ""));
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      // Restore idle state with error message.
      try {
        const data = await fetchWidgetData(this.slug);
        this.setState({
          kind: "error",
          message: msg,
          campaignId: data.campaign_id,
          campaignName: data.campaign_name,
        });
      } catch {
        this.setState({
          kind: "error",
          message: msg,
          campaignId,
          campaignName: "",
        });
      }
    }
  }

  private async handleCopy(): Promise<void> {
    const urlEl = this.shadow.getElementById("ep-ref-url");
    const copyBtn = this.shadow.getElementById("ep-copy-btn") as HTMLButtonElement | null;
    if (!urlEl || !copyBtn) return;

    const text = urlEl.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = "Copy link";
      }, 2000);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  }
}
