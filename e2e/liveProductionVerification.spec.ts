import { test, expect } from '@playwright/test';

test.describe('Live Vercel Production Certificate Verification Test', () => {
  test.setTimeout(60000);

  test('Live site: /verify-certificate/:certificateId loads and shows invalid credential for test ID without authentication', async ({ page }) => {
    // Navigate directly to live Vercel site
    await page.goto('https://skillora-ai-eta.vercel.app/verify-certificate/SKL-2026-LIVE-TEST-999');

    // Verify it doesn't bounce to login
    await expect(page).not.toHaveURL(/auth\/login/);
    await expect(page).not.toHaveURL(/\/login/);

    // Wait for the live verification page to evaluate and display the invalid state
    await expect(page.locator('text=STATUS: INVALID CREDENTIAL')).toBeVisible({ timeout: 20000 });
    await expect(page.locator('text=Certificate Not Found')).toBeVisible();
    await expect(page.locator('input[placeholder*="Enter Certificate ID"]')).toBeVisible();
  });
});
