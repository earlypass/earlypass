// EarlyPass widget entry point.
// Defines the <early-pass> custom element and auto-injects it next to
// any <script data-campaign="..."> tag that loaded this file.

import { EarlyPassWidget } from "./widget";

if (!customElements.get("early-pass")) {
  customElements.define("early-pass", EarlyPassWidget);
}

// Auto-injection: find every <script data-campaign="..."> on the page
// (including the one that loaded this bundle) and insert a <early-pass>
// element immediately after it.
function autoInject(): void {
  const scripts =
    document.querySelectorAll<HTMLScriptElement>("script[data-campaign]");
  scripts.forEach((script) => {
    // Don't inject twice.
    if (script.dataset.epInjected) return;
    script.dataset.epInjected = "1";

    const slug = script.getAttribute("data-campaign");
    if (!slug) return;

    const widget = document.createElement("early-pass");
    widget.setAttribute("data-campaign", slug);

    const theme = script.getAttribute("data-theme");
    if (theme) widget.setAttribute("data-theme", theme);

    const accent = script.getAttribute("data-accent");
    if (accent) widget.setAttribute("data-accent", accent);

    script.after(widget);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", autoInject);
} else {
  autoInject();
}
