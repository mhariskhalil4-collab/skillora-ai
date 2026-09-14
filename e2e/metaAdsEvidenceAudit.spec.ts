import { test, expect, Page } from '@playwright/test';

async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000003',
      email: 'meta.marketer@skillora.ai',
      firstName: 'Alex',
      role: 'performance_marketer',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-meta-playwright',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  }, customUserId);
}

test.describe('Meta Ads - Strict Evidence-Based Audit & Verification', () => {
  test.setTimeout(60000);

  test('Audit Item 6: Complete Learner Journey & Progression Gating Flow', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/courses/meta-ads');
    await expect(page.locator('h1')).toContainText('Meta Ads — Complete Professional Development Course');

    // Step 1: Initial State - Level 1 Beginner is active and unlocked
    const beginnerBtn = page.locator('button:has-text("Level 1: Beginner")').first();
    await expect(beginnerBtn).toBeVisible();

    // Verify task timeline elements exist
    await expect(page.locator('h3:has-text("Module 1: Introduction to Meta Ads")').first()).toBeVisible();

    // Step 2: Open Module 1 and verify content
    await page.locator('h3:has-text("Module 1: Introduction to Meta Ads")').first().click();
    await expect(page.locator('text=Step 1 Module')).toBeVisible();

    // Close Drawer
    const closeBtn = page.getByLabel('Close task details').or(page.locator('button:has-text("✕")')).first();
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    }

    // Step 3: Complete Beginner in Service State and Pass with 18/20 (>= 15/20)
    await page.evaluate(() => {
      const state = {
        courseId: 'meta-ads',
        courseTitle: 'Meta Ads — Complete Professional Development Course',
        currentLevel: 'intermediate',
        overallProgress: 35,
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: Meta Ads Beginner',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 14,
            totalTasks: 14,
            assessmentPassed: true,
            assessmentScore: 18,
            requiredScore: 15,
            totalQuestions: 20,
            tasks: Array.from({ length: 14 }, (_, i) => ({ id: `meta-beg-${i + 1}`, status: 'completed' }))
          },
          intermediate: {
            level: 'intermediate',
            title: 'Level 2: Meta Ads Intermediate',
            status: 'in_progress',
            progressPercentage: 0,
            completedTasks: 0,
            totalTasks: 16,
            assessmentPassed: false,
            assessmentScore: null,
            requiredScore: 25,
            totalQuestions: 30,
            tasks: Array.from({ length: 16 }, (_, i) => ({ id: `meta-int-${i + 1}`, status: i === 0 ? 'in_progress' : 'locked' }))
          },
          advanced: {
            level: 'advanced',
            title: 'Level 3: Meta Ads Advanced',
            status: 'locked',
            progressPercentage: 0,
            completedTasks: 0,
            totalTasks: 17,
            assessmentPassed: false,
            assessmentScore: null,
            requiredScore: 35,
            totalQuestions: 40,
            tasks: Array.from({ length: 17 }, (_, i) => ({ id: `meta-adv-${i + 1}`, status: 'locked' }))
          }
        }
      };
      localStorage.setItem('skillora_meta_ads_course_progress', JSON.stringify(state));
    });

    await page.reload();
    await expect(page.locator('h1')).toContainText('Meta Ads — Complete Professional Development Course');

    // Verify Intermediate Tab is now clickable and active
    const intermediateBtn = page.locator('button:has-text("Level 2: Intermediate")').first();
    await intermediateBtn.click();
    await expect(page.locator('h3:has-text("Module 1: Meta Pixel and Data Sources")').first()).toBeVisible({ timeout: 5000 });

    // Step 4: Complete Intermediate and Pass with 28/30 (>= 25/30)
    await page.evaluate(() => {
      const raw = localStorage.getItem('skillora_meta_ads_course_progress');
      if (!raw) return;
      const state = JSON.parse(raw);
      state.currentLevel = 'advanced';
      state.levels.intermediate.status = 'completed';
      state.levels.intermediate.progressPercentage = 100;
      state.levels.intermediate.completedTasks = 16;
      state.levels.intermediate.assessmentScore = 28;
      state.levels.intermediate.assessmentPassed = true;
      state.levels.intermediate.tasks.forEach((t: any) => { t.status = 'completed'; });

      state.levels.advanced.status = 'in_progress';
      state.levels.advanced.tasks[0].status = 'in_progress';
      state.overallProgress = 70;
      localStorage.setItem('skillora_meta_ads_course_progress', JSON.stringify(state));
    });

    await page.reload();
    const advancedBtn = page.locator('button:has-text("Level 3: Advanced")').first();
    await advancedBtn.click();
    await expect(page.locator('h3:has-text("Module 1: Advanced Meta Ads Account Architecture")').first()).toBeVisible({ timeout: 5000 });

    // Step 5: Complete Advanced and Pass with 38/40 (>= 35/40) -> Master Certificate Available
    await page.evaluate(() => {
      const raw = localStorage.getItem('skillora_meta_ads_course_progress');
      if (!raw) return;
      const state = JSON.parse(raw);
      state.levels.advanced.status = 'completed';
      state.levels.advanced.progressPercentage = 100;
      state.levels.advanced.completedTasks = 17;
      state.levels.advanced.assessmentScore = 38;
      state.levels.advanced.assessmentPassed = true;
      state.levels.advanced.tasks.forEach((t: any) => { t.status = 'completed'; });
      state.overallProgress = 100;
      localStorage.setItem('skillora_meta_ads_course_progress', JSON.stringify(state));
    });

    await page.reload();
    await expect(page.locator('text=Meta Ads Course Completed!')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('button:has-text("View & Claim Master Certificate")')).toBeVisible();
  });

  test('Audit Item 7: Failure & Retake Behavior with Score Display', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/courses/meta-ads');
    await expect(page.locator('h1')).toContainText('Meta Ads — Complete Professional Development Course');

    // Set up Beginner completed tasks but FAILED assessment (12/20, below passing threshold 15)
    await page.evaluate(() => {
      const state = {
        courseId: 'meta-ads',
        courseTitle: 'Meta Ads — Complete Professional Development Course',
        currentLevel: 'beginner',
        overallProgress: 25,
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: Meta Ads Beginner',
            status: 'in_progress',
            progressPercentage: 92,
            completedTasks: 13,
            totalTasks: 14,
            assessmentPassed: false,
            assessmentScore: 12,
            requiredScore: 15,
            totalQuestions: 20,
            tasks: Array.from({ length: 14 }, (_, i) => ({ id: `meta-beg-${i + 1}`, status: i < 13 ? 'completed' : 'in_progress' }))
          },
          intermediate: {
            level: 'intermediate',
            title: 'Level 2: Meta Ads Intermediate',
            status: 'locked',
            progressPercentage: 0,
            completedTasks: 0,
            totalTasks: 16,
            assessmentPassed: false,
            assessmentScore: null,
            requiredScore: 25,
            totalQuestions: 30,
            tasks: Array.from({ length: 16 }, (_, i) => ({ id: `meta-int-${i + 1}`, status: 'locked' }))
          },
          advanced: {
            level: 'advanced',
            title: 'Level 3: Meta Ads Advanced',
            status: 'locked',
            progressPercentage: 0,
            completedTasks: 0,
            totalTasks: 17,
            assessmentPassed: false,
            assessmentScore: null,
            requiredScore: 35,
            totalQuestions: 40,
            tasks: Array.from({ length: 17 }, (_, i) => ({ id: `meta-adv-${i + 1}`, status: 'locked' }))
          }
        }
      };
      localStorage.setItem('skillora_meta_ads_course_progress', JSON.stringify(state));
    });

    await page.reload();

    // Clicking Intermediate button should trigger Prerequisite Modal because assessment failed (12/20)
    const intermediateBtn = page.locator('button:has-text("Level 2: Intermediate")').first();
    await intermediateBtn.click();

    await expect(page.locator('text=Prerequisite Required')).toBeVisible();
    await expect(page.locator('text=Level 2: Meta Ads Intermediate is Locked')).toBeVisible();

    // Close modal via Cancel button
    const cancelBtn = page.locator('button:has-text("Cancel")');
    await cancelBtn.click();
    await expect(page.locator('text=Prerequisite Required')).not.toBeVisible();

    // Retake and score passing grade (17/20)
    await page.evaluate(() => {
      const raw = localStorage.getItem('skillora_meta_ads_course_progress');
      if (!raw) return;
      const state = JSON.parse(raw);
      state.levels.beginner.assessmentScore = 17;
      state.levels.beginner.assessmentPassed = true;
      state.levels.beginner.status = 'completed';
      state.levels.beginner.progressPercentage = 100;
      state.levels.beginner.completedTasks = 14;
      state.levels.intermediate.status = 'in_progress';
      state.currentLevel = 'intermediate';
      localStorage.setItem('skillora_meta_ads_course_progress', JSON.stringify(state));
    });

    await page.reload();
    await intermediateBtn.click();
    // Should NOT show prerequisite modal; should show Intermediate modules
    await expect(page.locator('h3:has-text("Module 1: Meta Pixel and Data Sources")').first()).toBeVisible();
  });

  test('Audit Item 8: Mobile UI & Viewport Responsiveness', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/courses/meta-ads');
    await expect(page.locator('h1')).toContainText('Meta Ads — Complete Professional Development Course');

    // Verify level switcher buttons exist and are responsive
    const beginnerBtn = page.locator('button:has-text("Beginner")').first();
    await expect(beginnerBtn).toBeVisible();

    // Verify task card clicks on mobile open the drawer
    await page.locator('h3:has-text("Module 1: Introduction to Meta Ads")').first().click();
    await expect(page.locator('text=Step 1 Module')).toBeVisible();

    // Verify no horizontal overflow in body
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    // Close drawer
    const closeBtn = page.getByLabel('Close task details').or(page.locator('button:has-text("✕")')).first();
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    }
  });

  test('Audit Item 9: Direct URL & State Bypass Prevention', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/courses/meta-ads');
    await page.evaluate(() => {
      localStorage.removeItem('skillora_meta_ads_course_progress');
    });
    await page.reload();

    // Direct tab click on locked Advanced level
    const advancedBtn = page.locator('button:has-text("Level 3: Advanced")').first();
    await advancedBtn.click();

    // Verify Prerequisite Required modal blocks bypass
    await expect(page.locator('text=Prerequisite Required')).toBeVisible();
    await expect(page.locator('text=Level 3: Meta Ads Advanced is Locked')).toBeVisible();

    // Refresh page while on URL - verify state remains locked
    await page.reload();
    await expect(page.locator('button:has-text("Level 1: Beginner")').first()).toBeVisible();
  });

});
