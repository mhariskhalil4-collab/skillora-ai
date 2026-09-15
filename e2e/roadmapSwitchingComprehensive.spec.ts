import { test, expect } from '@playwright/test';

test.describe('Roadmap Switching & Multi-Roadmap Course Resolution E2E', () => {

  test.beforeEach(async ({ page }) => {
    // Set up local storage authentication and state
    await page.addInitScript(() => {
      window.localStorage.setItem('skillora-auth-storage', JSON.stringify({
        state: {
          user: { id: 'test-user-e2e', email: 'test@skillora.ai', full_name: 'Alex Rivera' },
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      }));
    });
  });

  test('TEST 1, 2, 3: Generate Python, then Facebook Ads, and switch seamlessly between them without stale Python content', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('/onboarding?nosplash=true');

    // Step 1: User Type
    await page.waitForSelector('text=University Student');
    await page.click('text=University Student');

    // Step 2: Select Skill
    await page.waitForSelector('text=What skills do you already have?');
    await page.locator('h3', { hasText: 'Python' }).first().click();
    await page.click('button:has-text("Continue")');

    // Step 3: Skill Level
    await page.waitForSelector('text=Beginner');
    await page.click('button:has-text("Beginner")');

    // Step 4: Target Goal -> Python Masterclass
    await page.waitForSelector('input[placeholder*="e.g."]');
    await page.fill('input[placeholder*="e.g."]', 'Python Masterclass (Beginner to Advanced)');
    await page.click('button:has-text("Generate My Personalized Roadmap")');

    // Verify Python roadmap loaded
    await expect(page).toHaveURL(/\/roadmap/, { timeout: 15000 });
    await expect(page.locator('h1')).toContainText(/Python/i);
    await expect(page.locator('text=Active Track')).toBeVisible();

    // Now navigate to generate second roadmap for Facebook Ads
    await page.goto('/onboarding?nosplash=true');

    // Step 1: Freelancer
    await page.waitForSelector('h3:has-text("Freelancer")');
    await page.click('h3:has-text("Freelancer")');

    // Step 2: Select Skill (e.g. first available skill)
    await page.waitForSelector('text=What skills do you already have?');
    await page.locator('h3').first().click();
    await page.click('button:has-text("Continue")');

    // Step 3: Skill Level
    await page.waitForSelector('text=Beginner');
    await page.click('button:has-text("Beginner")');

    // Step 4: Target Goal -> Facebook Ads Masterclass
    await page.waitForSelector('input[placeholder*="e.g."]');
    await page.fill('input[placeholder*="e.g."]', 'Facebook Ads Masterclass');
    await page.click('button:has-text("Generate My Personalized Roadmap")');

    // Verify Facebook Ads roadmap loaded
    await expect(page).toHaveURL(/\/roadmap/, { timeout: 15000 });
    await expect(page.locator('h1')).toContainText(/Facebook Ads/i);
    // Confirm Python does NOT appear in the heading
    await expect(page.locator('h1')).not.toContainText(/Python/i);
    await expect(page.locator('text=Facebook Ads Masterclass available!')).toBeVisible();

    // Switch back to Python via the Switcher Dropdown
    await page.click('button:has-text("Switch Roadmap")');
    await page.locator('button').filter({ hasText: /Python/i }).first().click();

    // Confirm Python appears again
    await expect(page.locator('h1')).toContainText(/Python/i);
    await expect(page.locator('h1')).not.toContainText(/Facebook Ads/i);
  });

  test('TEST 4: Refresh the page while Facebook Ads is selected and confirm persistence', async ({ page }) => {
    // Seed two roadmaps directly into localStorage
    await page.addInitScript(() => {
      const roadmaps = [
        {
          id: 'rmp_python_1',
          title: 'Python Masterclass',
          courseId: 'python',
          courseRoute: '/courses/python',
          progressPercentage: 45,
          status: 'in_progress',
          isActive: false,
          tasks: [
            { id: 't_py_1', orderIndex: 1, title: 'Python Syntax & REPL', status: 'completed', requiresQuiz: true, xpReward: 50 },
            { id: 't_py_2', orderIndex: 2, title: 'Control Flow & Logic', status: 'in_progress', requiresQuiz: true, xpReward: 50 },
          ],
        },
        {
          id: 'rmp_fb_1',
          title: 'Facebook Ads Masterclass',
          courseId: 'facebook-ads',
          courseRoute: '/courses/facebook-ads',
          progressPercentage: 20,
          status: 'in_progress',
          isActive: true,
          tasks: [
            { id: 't_fb_1', orderIndex: 1, title: 'Meta Business Manager Architecture', status: 'completed', requiresQuiz: true, xpReward: 50 },
            { id: 't_fb_2', orderIndex: 2, title: 'Pixel & CAPI Setup', status: 'in_progress', requiresQuiz: true, xpReward: 50 },
          ],
        },
      ];
      localStorage.setItem('skillora_roadmaps', JSON.stringify(roadmaps));
      localStorage.setItem('skillora_active_roadmap_id', 'rmp_fb_1');
      localStorage.setItem('skillora_active_course_id', 'facebook-ads');
    });

    await page.goto('/roadmap?nosplash=true');
    await expect(page.locator('h1')).toContainText(/Facebook Ads/i);
    await expect(page.locator('h1')).not.toContainText(/Python/i);

    // Refresh page
    await page.reload();
    await expect(page.locator('h1')).toContainText(/Facebook Ads/i, { timeout: 15000 });
    await expect(page.locator('h1')).not.toContainText(/Python/i);
  });

  test('TEST 5: Click Resume Learning from Dashboard while Facebook Ads is active', async ({ page }) => {
    await page.addInitScript(() => {
      const roadmaps = [
        {
          id: 'rmp_python_1',
          title: 'Python Masterclass',
          courseId: 'python',
          courseRoute: '/courses/python',
          progressPercentage: 50,
          status: 'in_progress',
          isActive: false,
          tasks: [
            { id: 't_py_1', orderIndex: 1, title: 'Python Syntax', status: 'completed', requiresQuiz: true, xpReward: 50 },
          ],
        },
        {
          id: 'rmp_fb_1',
          title: 'Facebook Ads Masterclass',
          courseId: 'facebook-ads',
          courseRoute: '/courses/facebook-ads',
          progressPercentage: 25,
          status: 'in_progress',
          isActive: true,
          tasks: [
            { id: 't_fb_1', orderIndex: 1, title: 'Meta Business Manager Architecture', status: 'completed', requiresQuiz: true, xpReward: 50 },
          ],
        },
      ];
      localStorage.setItem('skillora_roadmaps', JSON.stringify(roadmaps));
      localStorage.setItem('skillora_active_roadmap_id', 'rmp_fb_1');
      localStorage.setItem('skillora_active_course_id', 'facebook-ads');
    });

    await page.goto('/dashboard?nosplash=true');

    // Verify Dashboard shows Facebook Ads
    await expect(page.locator('text=Facebook Ads Masterclass').first()).toBeVisible();

    // Click Resume Learning
    await page.click('button:has-text("Resume Learning")');

    // Confirm it opens Facebook Ads roadmap
    await expect(page).toHaveURL(/roadmap/);
    await expect(page.locator('h1')).toContainText(/Facebook Ads/i);
    await expect(page.locator('h1')).not.toContainText(/Python/i);
  });

  test('TEST 6: Separate progress preservation between Python and Facebook Ads', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('skillora_python_course_progress', JSON.stringify({
        courseId: 'python',
        currentLevel: 'beginner',
        levels: {
          beginner: {
            level: 'beginner',
            status: 'in_progress',
            unlocked: true,
            progressPercentage: 60,
            tasks: [
              { id: 'py_t1', orderIndex: 1, title: 'Python Fundamentals', status: 'completed', requiresQuiz: true, xpReward: 50 },
              { id: 'py_t2', orderIndex: 2, title: 'Python Functions', status: 'in_progress', requiresQuiz: true, xpReward: 50 },
            ],
          },
        },
      }));

      localStorage.setItem('skillora_facebook_ads_course_progress', JSON.stringify({
        courseId: 'facebook-ads',
        currentLevel: 'beginner',
        levels: {
          beginner: {
            level: 'beginner',
            status: 'in_progress',
            unlocked: true,
            progressPercentage: 20,
            tasks: [
              { id: 'fb_t1', orderIndex: 1, title: 'Ad Accounts & BM', status: 'completed', requiresQuiz: true, xpReward: 50 },
              { id: 'fb_t2', orderIndex: 2, title: 'Audience Targeting', status: 'in_progress', requiresQuiz: true, xpReward: 50 },
            ],
          },
        },
      }));

      const roadmaps = [
        {
          id: 'rmp_python_1',
          title: 'Python Masterclass',
          courseId: 'python',
          courseRoute: '/courses/python',
          progressPercentage: 60,
          status: 'in_progress',
          isActive: false,
          tasks: [],
        },
        {
          id: 'rmp_fb_1',
          title: 'Facebook Ads Masterclass',
          courseId: 'facebook-ads',
          courseRoute: '/courses/facebook-ads',
          progressPercentage: 20,
          status: 'in_progress',
          isActive: true,
          tasks: [],
        },
      ];
      localStorage.setItem('skillora_roadmaps', JSON.stringify(roadmaps));
      localStorage.setItem('skillora_active_roadmap_id', 'rmp_fb_1');
      localStorage.setItem('skillora_active_course_id', 'facebook-ads');
    });

    // Open Facebook Ads roadmap directly
    await page.goto('/roadmap?id=rmp_fb_1&nosplash=true');
    await expect(page.locator('h1')).toContainText(/Facebook Ads/i);
    await expect(page.locator('header').locator('text=20%').first()).toBeVisible();

    // Open Python roadmap directly
    await page.goto('/roadmap?id=rmp_python_1&nosplash=true');
    await expect(page.locator('h1')).toContainText(/Python/i);
    await expect(page.locator('header').locator('text=60%').first()).toBeVisible();
  });

  test('TEST 7: Direct URL parameter navigation to /roadmaps/:roadmapId and /roadmap/:roadmapId', async ({ page }) => {
    await page.addInitScript(() => {
      const roadmaps = [
        {
          id: 'rmp_seo_1',
          title: 'SEO Masterclass',
          courseId: 'seo',
          courseRoute: '/courses/seo',
          progressPercentage: 35,
          status: 'in_progress',
          isActive: false,
          tasks: [],
        },
        {
          id: 'rmp_fb_1',
          title: 'Facebook Ads Masterclass',
          courseId: 'facebook-ads',
          courseRoute: '/courses/facebook-ads',
          progressPercentage: 15,
          status: 'in_progress',
          isActive: false,
          tasks: [],
        },
      ];
      localStorage.setItem('skillora_roadmaps', JSON.stringify(roadmaps));
    });

    // Navigate to /roadmaps/rmp_seo_1
    await page.goto('/roadmaps/rmp_seo_1?nosplash=true');
    await expect(page.locator('h1')).toContainText(/SEO/i);
    await expect(page.locator('h1')).not.toContainText(/Facebook/i);

    // Navigate to /roadmap/rmp_fb_1
    await page.goto('/roadmap/rmp_fb_1?nosplash=true');
    await expect(page.locator('h1')).toContainText(/Facebook Ads/i);
    await expect(page.locator('h1')).not.toContainText(/SEO/i);
  });

  test('TEST 8: Roadmap switching from My Roadmaps list screen (/roadmaps)', async ({ page }) => {
    await page.addInitScript(() => {
      const roadmaps = [
        {
          id: 'rmp_py_10',
          title: 'Python Masterclass (Beginner to Advanced)',
          courseId: 'python',
          courseRoute: '/courses/python',
          progressPercentage: 50,
          status: 'in_progress',
          isActive: true,
          tasks: [
            { id: 't_1', orderIndex: 1, title: 'Python Basics', status: 'completed', requiresQuiz: true, xpReward: 50 },
          ],
        },
        {
          id: 'rmp_fb_20',
          title: 'Facebook Ads Masterclass',
          courseId: 'facebook-ads',
          courseRoute: '/courses/facebook-ads',
          progressPercentage: 10,
          status: 'in_progress',
          isActive: false,
          tasks: [
            { id: 't_2', orderIndex: 1, title: 'Ad Strategy', status: 'in_progress', requiresQuiz: true, xpReward: 50 },
          ],
        },
      ];
      localStorage.setItem('skillora_roadmaps', JSON.stringify(roadmaps));
      localStorage.setItem('skillora_active_roadmap_id', 'rmp_py_10');
      localStorage.setItem('skillora_active_course_id', 'python');
    });

    await page.goto('/roadmaps?nosplash=true');
    await expect(page.locator('h1')).toContainText(/My AI Roadmaps/i);

    // Click "Open Roadmap" on the Facebook Ads card
    const fbCard = page.locator('div.grid > div').filter({ hasText: 'Facebook Ads Masterclass' });
    await fbCard.getByRole('button', { name: 'Open Roadmap' }).click();

    // Verify it opened Facebook Ads roadmap
    await expect(page).toHaveURL(/\/roadmap\?id=rmp_fb_20/);
    await expect(page.locator('h1')).toContainText(/Facebook Ads/i);
    await expect(page.locator('h1')).not.toContainText(/Python/i);
  });

});
