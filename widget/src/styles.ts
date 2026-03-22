// CSS injected into the Shadow DOM.
// Theme: light (default) and dark (data-theme="dark").
// Accent color is driven by --ep-accent, set from data-accent attribute.

export function getStyles(accent: string): string {
  return `
    :host {
      --ep-accent: ${accent};
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: block;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    .ep {
      padding: 1.5rem;
      border: 1px solid #e5e7eb;
      border-radius: 0.75rem;
      background: #ffffff;
      color: #111827;
      max-width: 28rem;
    }
    :host([data-theme="dark"]) .ep {
      background: #1f2937;
      border-color: #374151;
      color: #f9fafb;
    }
    .ep-title {
      font-size: 1.125rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }
    .ep-subtitle {
      font-size: 0.8rem;
      color: #6b7280;
      margin-bottom: 0.75rem;
    }
    .ep-form {
      display: flex;
      gap: 0.5rem;
    }
    .ep-input {
      flex: 1;
      min-width: 0;
      padding: 0.5rem 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      background: transparent;
      color: inherit;
      outline: none;
      transition: border-color 0.15s;
    }
    :host([data-theme="dark"]) .ep-input { border-color: #4b5563; }
    .ep-input:focus {
      border-color: var(--ep-accent);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--ep-accent) 20%, transparent);
    }
    .ep-btn {
      padding: 0.5rem 1.25rem;
      background: var(--ep-accent);
      color: #fff;
      border: none;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.15s;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .ep-btn:hover:not(:disabled) { opacity: 0.9; }
    .ep-btn:disabled { opacity: 0.55; cursor: not-allowed; }
    .ep-error {
      color: #ef4444;
      font-size: 0.8rem;
      margin-top: 0.5rem;
    }
    /* Success state */
    .ep-pos-num {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--ep-accent);
      line-height: 1;
    }
    .ep-pos-label {
      font-size: 0.75rem;
      color: #6b7280;
      margin-bottom: 1rem;
    }
    .ep-pos-now {
      cursor: help;
      border-bottom: 1px dashed #9ca3af;
    }
    .ep-ref-box {
      background: #f3f4f6;
      border-radius: 0.5rem;
      padding: 0.75rem;
    }
    :host([data-theme="dark"]) .ep-ref-box { background: #374151; }
    .ep-ref-label {
      font-size: 0.7rem;
      font-weight: 600;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.25rem;
    }
    .ep-ref-url {
      font-size: 0.8rem;
      word-break: break-all;
      color: var(--ep-accent);
      margin-bottom: 0.5rem;
    }
    .ep-copy-btn {
      font-size: 0.75rem;
      padding: 0.2rem 0.6rem;
      background: var(--ep-accent);
      color: #fff;
      border: none;
      border-radius: 0.375rem;
      cursor: pointer;
      font-weight: 600;
    }
    .ep-copy-btn:hover { opacity: 0.9; }
    /* Invited state */
    .ep-invited-badge {
      display: inline-block;
      margin: 0.5rem 0 0.25rem;
      padding: 0.25rem 0.75rem;
      background: color-mix(in srgb, var(--ep-accent) 12%, transparent);
      color: var(--ep-accent);
      border-radius: 999px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.03em;
    }
    .ep-invited-msg {
      font-size: 0.875rem;
      color: #6b7280;
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
    }
    /* Loading */
    .ep-loading {
      color: #9ca3af;
      font-size: 0.875rem;
    }
  `;
}
