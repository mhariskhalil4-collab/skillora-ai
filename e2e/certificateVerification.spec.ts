import { test, expect } from '@playwright/test';

test.describe('Skillora AI - Certificate QR Code & Public Verification E2E Suite', () => {
  test.setTimeout(60000);

  test.beforeEach(async ({ page }) => {
    // Disable splash screen animation during automated testing
    await page.addInitScript(() => {
      window.localStorage.setItem(
        'skillora-auth-storage',
        JSON.stringify({
          state: { isAuthenticated: false, isHydrated: true },
          version: 0,
        })
      );
    });
  });

  test('1. Public Access: Verification route loads without authentication or redirect', async ({ page }) => {
    // Navigate directly as an unauthenticated guest
    await page.goto('/verify-certificate/SKL-2026-TEST01');

    // Must not redirect to /auth/login or /login
    await expect(page).not.toHaveURL(/auth\/login/);
    await expect(page).not.toHaveURL(/\/login/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('2. Invalid Credential State: Shows warning, status badge, and search form for unknown ID', async ({ page }) => {
    await page.goto('/verify-certificate/NON-EXISTENT-ID-999');

    // Should display invalid credential indicator
    await expect(page.locator('text=STATUS: INVALID CREDENTIAL')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Certificate Not Found')).toBeVisible();
    await expect(page.locator('input[placeholder*="Enter Certificate ID"]')).toBeVisible();
  });

  test('3. Valid Certificate Verification: Renders verified badge, details grid, scannable QR code & PDF action', async ({ page }) => {
    // Intercept Supabase certificate request to simulate a verified credential
    await page.route('**/rest/v1/certificates*', async (route) => {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 'SKL-2026-PROD01',
          user_id: 'a0000000-0000-4000-8000-000000000001',
          student_name: 'Muhammad Haris Khalil',
          recipient_name: 'Muhammad Haris Khalil',
          title: 'Python Masterclass (Beginner to Advanced)',
          issuer: 'Skillora AI',
          date: '2026-09-15',
          badge_type: '3d-gold',
          certificate_url: 'https://skillora-ai-eta.vercel.app/verify-certificate/SKL-2026-PROD01',
          created_at: '2026-09-15T12:00:00Z',
        }),
      });
    });

    await page.goto('/verify-certificate/SKL-2026-PROD01');

    // 1. Verify Status Badge
    await expect(page.locator('text=STATUS: VALID & VERIFIED')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Official Verified Credential')).toBeVisible();

    // 2. Verify Key Verification Data Grid
    await expect(page.locator('text=STUDENT NAME')).toBeVisible();
    await expect(page.locator('text=Muhammad Haris Khalil').first()).toBeVisible();

    await expect(page.locator('text=COURSE / ROADMAP')).toBeVisible();
    await expect(page.locator('text=Python Masterclass (Beginner to Advanced)').first()).toBeVisible();

    await expect(page.locator('text=COMPLETION DATE')).toBeVisible();
    await expect(page.locator('text=2026-09-15').first()).toBeVisible();

    await expect(page.locator('text=CERTIFICATE ID')).toBeVisible();
    await expect(page.locator('text=SKL-2026-PROD01').first()).toBeVisible();

    // 3. Verify Scannable QR Code and PDF Action
    const qrImage = page.locator('img[alt="Verify QR code"]');
    await expect(qrImage).toBeVisible();

    const downloadBtn = page.locator('button:has-text("Download certificate (PDF)")');
    await expect(downloadBtn).toBeVisible();

    // 4. Verify canonical production URL is displayed without localhost
    const prodUrlElement = page.locator('text=https://skillora-ai-eta.vercel.app/verify-certificate/SKL-2026-PROD01');
    await expect(prodUrlElement).toBeVisible();
  });

  test('4. URL Safety Check: No localhost or 127.0.0.1 in QR codes or rendered links', async ({ page }) => {
    await page.route('**/rest/v1/certificates*', async (route) => {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 'SKL-2026-SAFE99',
          user_id: 'a0000000-0000-4000-8000-000000000001',
          student_name: 'Jane Doe',
          title: 'Shopify Developer Masterclass',
          issuer: 'Skillora AI',
          date: '2026-09-15',
          badge_type: '3d-gold',
          certificate_url: 'http://localhost:3000/verify/SKL-2026-SAFE99', // legacy dev URL to test normalization
          created_at: '2026-09-15T12:00:00Z',
        }),
      });
    });

    await page.goto('/verify-certificate/SKL-2026-SAFE99');

    await expect(page.locator('text=STATUS: VALID & VERIFIED')).toBeVisible({ timeout: 15000 });

    // Ensure the normalized canonical URL is rendered and NO localhost is visible
    const bodyContent = await page.content();
    expect(bodyContent).not.toContain('http://localhost:3000/verify/SKL-2026-SAFE99');
    expect(bodyContent).toContain('https://skillora-ai-eta.vercel.app/verify-certificate/SKL-2026-SAFE99');
  });

  test('5. Backward Compatibility: /verify/:id route works and redirects smoothly', async ({ page }) => {
    await page.route('**/rest/v1/certificates*', async (route) => {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 'SKL-LEGACY-01',
          user_id: 'a0000000-0000-4000-8000-000000000001',
          student_name: 'Alex Student',
          title: 'SEO Masterclass',
          issuer: 'Skillora AI',
          date: '2026-09-15',
          badge_type: 'standard',
          certificate_url: null,
          created_at: '2026-09-15T12:00:00Z',
        }),
      });
    });

    await page.goto('/verify/SKL-LEGACY-01');
    await expect(page.locator('text=STATUS: VALID & VERIFIED')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=SEO Masterclass').first()).toBeVisible();
  });

  test('6. Mobile Responsiveness: Verification page renders cleanly on 375px mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    await page.route('**/rest/v1/certificates*', async (route) => {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 'SKL-2026-MOB01',
          user_id: 'a0000000-0000-4000-8000-000000000001',
          student_name: 'Mobile Learner',
          title: 'Prompt Engineering Masterclass',
          issuer: 'Skillora AI',
          date: '2026-09-15',
          badge_type: '3d-gold',
          certificate_url: 'https://skillora-ai-eta.vercel.app/verify-certificate/SKL-2026-MOB01',
          created_at: '2026-09-15T12:00:00Z',
        }),
      });
    });

    await page.goto('/verify-certificate/SKL-2026-MOB01');

    await expect(page.locator('text=STATUS: VALID & VERIFIED')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Mobile Learner').first()).toBeVisible();
    await expect(page.locator('button:has-text("Download certificate (PDF)")')).toBeVisible();
  });
});
