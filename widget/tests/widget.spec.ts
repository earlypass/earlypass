import { test, expect, type Page } from "@playwright/test";

// These tests require a running EarlyPass API server with a known test campaign.
// Set CAMPAIGN_SLUG and BASE_URL environment variables before running:
//   CAMPAIGN_SLUG=my-slug BASE_URL=http://localhost:3000 npx playwright test
//
// The API server must have the campaign pre-created and accepting signups.

const slug = process.env.CAMPAIGN_SLUG ?? "test-campaign";

async function getWidgetRoot(page: Page) {
  const widget = page.locator("early-pass").first();
  await widget.waitFor({ state: "attached" });
  return widget;
}

async function getShadowEl(page: Page, selector: string) {
  return page.locator(`early-pass >> css=${selector}`).first();
}

function testPageHTML(campaignSlug: string): string {
  return `<!DOCTYPE html><html><body>
    <script src="/widget/widget.js" data-campaign="${campaignSlug}"></script>
  </body></html>`;
}

test.describe("EarlyPass widget", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("**/ep-test", (route) =>
      route.fulfill({ contentType: "text/html", body: testPageHTML(slug) })
    );
    await page.goto("/ep-test");
    // Clear localStorage so each test starts fresh.
    await page.evaluate(() => localStorage.clear());
  });

  test("renders the signup form in idle state", async ({ page }) => {
    // Wait for widget to load (transitions from loading → idle).
    const emailInput = await getShadowEl(page, "#ep-email");
    await expect(emailInput).toBeVisible({ timeout: 10_000 });

    const submitBtn = await getShadowEl(page, "#ep-submit");
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toHaveText("Join");
  });

  test("full signup flow: form → success state with position and referral link", async ({
    page,
  }) => {
    const emailInput = await getShadowEl(page, "#ep-email");
    await expect(emailInput).toBeVisible({ timeout: 10_000 });

    const email = `pw-test-${Date.now()}@example.com`;
    await emailInput.fill(email);

    const submitBtn = await getShadowEl(page, "#ep-submit");
    await submitBtn.click();

    // Success state: position number appears.
    const posEl = await getShadowEl(page, ".ep-pos-num");
    await expect(posEl).toBeVisible({ timeout: 10_000 });
    await expect(posEl).toContainText("#");

    // Referral link contains ?ref=.
    const refURL = await getShadowEl(page, "#ep-ref-url");
    await expect(refURL).toContainText("?ref=");
  });

  test("returning visitor sees success state immediately from localStorage", async ({
    page,
  }) => {
    // Manually plant a signup in localStorage.
    await page.evaluate((s) => {
      localStorage.setItem(
        `ep_${s}`,
        JSON.stringify({
          id: "00000000-0000-0000-0000-000000000001",
          campaign_id: "00000000-0000-0000-0000-000000000002",
          email: "returning@example.com",
          referral_code: "TESTCODE",
          base_position: 5,
          effective_position: 5,
          referral_count: 0,
        })
      );
    }, slug);

    await page.reload();

    // Should show success state (position) without needing to fill the form.
    const posEl = await getShadowEl(page, ".ep-pos-num");
    await expect(posEl).toBeVisible({ timeout: 10_000 });
  });

  test("referral code in URL is captured in signup request", async ({ page }) => {
    // Navigate with ?ref= query param.
    await page.goto(`/ep-test?ref=REFTEST123`);
    await page.evaluate(() => localStorage.clear());

    let capturedBody = "";
    await page.route("**/signups", async (route) => {
      const req = route.request();
      capturedBody = req.postData() ?? "";
      // Let the real request through.
      await route.continue();
    });

    const emailInput = await getShadowEl(page, "#ep-email");
    await expect(emailInput).toBeVisible({ timeout: 10_000 });
    await emailInput.fill(`ref-test-${Date.now()}@example.com`);

    const submitBtn = await getShadowEl(page, "#ep-submit");
    await submitBtn.click();

    // Wait for the signup request to be made.
    await page.waitForResponse("**/signups");
    expect(capturedBody).toContain("REFTEST123");
  });

  test("bundle is served with correct Content-Type", async ({ request }) => {
    const res = await request.get("/widget.js");
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("application/javascript");
  });

  test("shadow DOM isolates styles from host page", async ({ page }) => {
    // Check that the widget's internal .ep-form is inside shadow DOM
    // and not accessible from the light DOM.
    const lightDomForm = page.locator(".ep-form");
    await expect(lightDomForm).toHaveCount(0);
  });
});
