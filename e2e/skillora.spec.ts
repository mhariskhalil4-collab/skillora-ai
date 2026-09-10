import { test, expect } from '@playwright/test';

test.describe('Skillora AI End-to-End User Journeys', () => {
  
  test('Complete Authentication and Login Flow', async ({ page }) => {
    // 1. Navigate to Login
    await page.goto('/auth/login');
    
    // 2. Verify UI elements render correctly
    await expect(page.locator('h2')).toHaveText('Welcome back');
    
    // 3. Fill invalid email format and check validation error
    await page.fill('input[type="email"]', 'invalid-email');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Please enter a valid email address')).toBeVisible();

    // 4. Fill valid credentials and submit
    await page.fill('input[type="email"]', 'student@university.edu');
    await page.fill('input[type="password"]', 'SecurePassword123!');
    await page.click('button[type="submit"]');

    // 5. Verify successful redirect to Dashboard
    await page.waitForURL('**/dashboard');
    await expect(page.locator('h1')).toContainText('Welcome back');
  });

  test('Onboarding Wizard Progression', async ({ page }) => {
    // 1. Navigate to Onboarding
    await page.goto('/onboarding');

    // 2. Step 1: Select User Type
    await expect(page.locator('h1')).toHaveText('What describes you best?');
    await page.click('text=University Student');

    // 3. Step 2: Select Skills
    await expect(page.locator('h1')).toHaveText('What skills do you already have?');
    await page.click('text=Python');
    await page.click('text=Shopify Liquid');
    await page.click('button:has-text("Continue")');

    // 4. Step 3: Select Skill Level
    await expect(page.locator('h1')).toHaveText('What is your overall proficiency?');
    await page.click('text=Intermediate');

    // 5. Step 4: Enter Target Goal
    await expect(page.locator('h1')).toHaveText('What is your ultimate goal?');
    await page.fill('input', 'AI E-commerce Developer');
    await page.click('button:has-text("Generate My Roadmap")');

    // 6. Verify AI Loading Screen triggers
    await expect(page.locator('h2')).toContainText('Constructing your custom roadmap');
  });

});
