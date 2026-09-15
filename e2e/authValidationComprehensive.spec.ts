import { test, expect } from '@playwright/test';

test.describe('Skillora AI - Authentication & Multi-Account E2E Suite', () => {
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

  test('1. Email Validation: Accepts numeric Gmail addresses and handles whitespace trimming', async ({ page }) => {
    await page.goto('/auth/register');

    const numericEmails = [
      'friend246@gmail.com',
      'user2026@gmail.com',
      'mharis123@gmail.com',
      'user.name246@gmail.com',
      'user_name246@gmail.com',
      'user+test246@gmail.com',
      '  friend246@gmail.com  ', // with whitespace
      'Friend246@Gmail.Com', // with uppercase
    ];

    for (const email of numericEmails) {
      await page.fill('input[placeholder*="Alex"]', 'Alex Learner');
      await page.fill('input[type="email"]', email);
      await page.fill('input[type="password"]', 'Password123!');

      // Trigger validation by clicking submit with intercepted request
      await page.route('**/auth/v1/signup*', async (route) => {
        return route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            id: 'mock-user-id',
            aud: 'authenticated',
            role: 'authenticated',
            email: email.trim().toLowerCase(),
            created_at: new Date().toISOString(),
          }),
        });
      });

      await page.click('button[type="submit"]');

      // The email error message should NOT appear for valid numeric emails
      await expect(page.locator('text=Please enter a valid email address.')).not.toBeVisible();
    }
  });

  test('2. Multi-Account on One Device: Multiple user sessions switch smoothly without limits', async ({ page }) => {
    const users = [
      { id: 'user-001', email: 'account1@skillora.ai', name: 'User One' },
      { id: 'user-002', email: 'account2@skillora.ai', name: 'User Two' },
      { id: 'user-003', email: 'account3@skillora.ai', name: 'User Three' },
      { id: 'user-004', email: 'account4@skillora.ai', name: 'User Four' },
    ];

    for (const user of users) {
      // Mock Supabase sign-in response for each user sequentially on the same browser
      await page.route('**/auth/v1/token*', async (route) => {
        return route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            access_token: `mock-token-${user.id}`,
            token_type: 'bearer',
            expires_in: 3600,
            refresh_token: `mock-refresh-${user.id}`,
            user: {
              id: user.id,
              email: user.email,
              user_metadata: { full_name: user.name, role: 'university_student' },
            },
          }),
        });
      });

      await page.route('**/rest/v1/profiles*', async (route) => {
        return route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            id: user.id,
            full_name: user.name,
          }),
        });
      });

      await page.goto('/auth/login');
      await page.fill('input[type="email"]', user.email);
      await page.fill('input[type="password"]', 'Skillora12345!');
      await page.click('button[type="submit"]');

      // Should land on dashboard
      await expect(page).toHaveURL(/dashboard/, { timeout: 15000 });

      // Cleanly sign out
      await page.evaluate(() => {
        window.localStorage.removeItem('skillora-auth-storage');
      });
    }
  });

  test('3. Rate Limit Error Handling: Displays friendly explanation when Supabase returns 429', async ({ page }) => {
    await page.route('**/auth/v1/signup*', async (route) => {
      return route.fulfill({
        status: 429,
        contentType: 'application/json',
        body: JSON.stringify({
          code: 'over_email_send_rate_limit',
          message: 'email rate limit exceeded',
        }),
      });
    });

    await page.goto('/auth/register');
    await page.fill('input[placeholder*="Alex"]', 'Test Learner');
    await page.fill('input[type="email"]', 'friend246@gmail.com');
    await page.fill('input[type="password"]', 'Password123!');
    await page.click('button[type="submit"]');

    // Should display human-friendly rate limit message
    await expect(page.locator('text=Too many email requests sent. Please wait a few minutes before trying again')).toBeVisible({ timeout: 10000 });
  });
});
