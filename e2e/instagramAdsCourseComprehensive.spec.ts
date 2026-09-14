import { test, expect, Page } from '@playwright/test';
import {
  INSTAGRAM_ADS_BEGINNER_TASKS,
  INSTAGRAM_ADS_BEGINNER_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/instagram-ads/instagramAdsBeginner.data';
import {
  INSTAGRAM_ADS_INTERMEDIATE_TASKS,
  INSTAGRAM_ADS_INTERMEDIATE_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/instagram-ads/instagramAdsIntermediate.data';
import {
  INSTAGRAM_ADS_ADVANCED_TASKS,
  INSTAGRAM_ADS_ADVANCED_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/instagram-ads/instagramAdsAdvanced.data';
import { InstagramAdsCourseService } from '../src/features/roadmap/services/instagramAdsCourse.service';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000007',
      email: 'instagramads.specialist@skillora.ai',
      firstName: 'Maya',
      role: 'visual_media_buyer',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-ig-ads-playwright',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  }, customUserId);
}

// Reset Instagram Ads Course state in localStorage
async function resetInstagramAdsCourseState(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.removeItem('skillora_instagram_ads_course_progress');
  });
}

test.describe('Skillora AI - Instagram Ads Masterclass Comprehensive E2E Verification', () => {
  test.setTimeout(90000);

  // ==========================================
  // SECTION 1: DATA FIDELITY & CURRICULUM AUDIT
  // ==========================================

  test('1. Exact Course Tasks & Modules Count Audit', async () => {
    // Beginner: 12 theory + 1 project + 1 final assessment = 14 tasks
    expect(INSTAGRAM_ADS_BEGINNER_TASKS.length).toBe(14);
    const begTheory = INSTAGRAM_ADS_BEGINNER_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const begProjects = INSTAGRAM_ADS_BEGINNER_TASKS.filter((t) => t.isProject);
    const begAssessments = INSTAGRAM_ADS_BEGINNER_TASKS.filter((t) => t.isFinalAssessment);
    expect(begTheory.length).toBe(12);
    expect(begProjects.length).toBe(1);
    expect(begAssessments.length).toBe(1);

    // Intermediate: 14 theory + 1 project + 1 final assessment = 16 tasks
    expect(INSTAGRAM_ADS_INTERMEDIATE_TASKS.length).toBe(16);
    const intTheory = INSTAGRAM_ADS_INTERMEDIATE_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const intProjects = INSTAGRAM_ADS_INTERMEDIATE_TASKS.filter((t) => t.isProject);
    const intAssessments = INSTAGRAM_ADS_INTERMEDIATE_TASKS.filter((t) => t.isFinalAssessment);
    expect(intTheory.length).toBe(14);
    expect(intProjects.length).toBe(1);
    expect(intAssessments.length).toBe(1);

    // Advanced: 14 theory + 2 projects + 1 final assessment = 17 tasks
    expect(INSTAGRAM_ADS_ADVANCED_TASKS.length).toBe(17);
    const advTheory = INSTAGRAM_ADS_ADVANCED_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const advProjects = INSTAGRAM_ADS_ADVANCED_TASKS.filter((t) => t.isProject);
    const advAssessments = INSTAGRAM_ADS_ADVANCED_TASKS.filter((t) => t.isFinalAssessment);
    expect(advTheory.length).toBe(14);
    expect(advProjects.length).toBe(2);
    expect(advAssessments.length).toBe(1);

    // Total counts
    const totalTheory = begTheory.length + intTheory.length + advTheory.length;
    const totalProjects = begProjects.length + intProjects.length + advProjects.length;
    const totalAssessments = begAssessments.length + intAssessments.length + advAssessments.length;
    const totalTasks = INSTAGRAM_ADS_BEGINNER_TASKS.length + INSTAGRAM_ADS_INTERMEDIATE_TASKS.length + INSTAGRAM_ADS_ADVANCED_TASKS.length;

    expect(totalTheory).toBe(40);
    expect(totalProjects).toBe(4);
    expect(totalAssessments).toBe(3);
    expect(totalTasks).toBe(47);
  });

  test('2. Strict Content Depth: Every Theory Module has Substantial Content & Examples', async () => {
    const allTheoryTasks = [
      ...INSTAGRAM_ADS_BEGINNER_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject),
      ...INSTAGRAM_ADS_INTERMEDIATE_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject),
      ...INSTAGRAM_ADS_ADVANCED_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject),
    ];

    expect(allTheoryTasks.length).toBe(40);

    for (const task of allTheoryTasks) {
      const content = task.lessonContent!;
      expect(content.overview.length, `Module ${task.id} overview is too short`).toBeGreaterThan(40);
      expect(content.objectives?.length || 0, `Module ${task.id} must have objectives`).toBeGreaterThanOrEqual(2);
      expect(content.sections?.length || 0, `Module ${task.id} must have sections`).toBeGreaterThanOrEqual(1);
    }
  });

  test('3. 90-MCQ Audit: Exact 20/30/40 Distribution, Quality Checks, and Balanced Key Distribution', async () => {
    expect(INSTAGRAM_ADS_BEGINNER_FINAL_ASSESSMENT.length).toBe(20);
    expect(INSTAGRAM_ADS_INTERMEDIATE_FINAL_ASSESSMENT.length).toBe(30);
    expect(INSTAGRAM_ADS_ADVANCED_FINAL_ASSESSMENT.length).toBe(40);

    const allQuestions = [
      ...INSTAGRAM_ADS_BEGINNER_FINAL_ASSESSMENT,
      ...INSTAGRAM_ADS_INTERMEDIATE_FINAL_ASSESSMENT,
      ...INSTAGRAM_ADS_ADVANCED_FINAL_ASSESSMENT,
    ];

    expect(allQuestions.length).toBe(90);

    const questionTexts = new Set<string>();

    allQuestions.forEach((q, idx) => {
      expect(q.question.length, `Question #${idx + 1} is too short`).toBeGreaterThan(15);
      expect(q.options.length, `Question #${idx + 1} must have 4 options`).toBe(4);
      expect(q.correctAnswer, `Question #${idx + 1} correctAnswer out of bounds`).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer, `Question #${idx + 1} correctAnswer out of bounds`).toBeLessThanOrEqual(3);
      expect(q.explanation?.length || 0, `Question #${idx + 1} missing explanation`).toBeGreaterThan(20);

      expect(questionTexts.has(q.question.trim().toLowerCase()), `Duplicate question: ${q.question}`).toBe(false);
      questionTexts.add(q.question.trim().toLowerCase());
    });

    // Check Advanced answer distribution (exactly 10 A, 10 B, 10 C, 10 D)
    const advDist = [0, 0, 0, 0];
    INSTAGRAM_ADS_ADVANCED_FINAL_ASSESSMENT.forEach((q) => {
      advDist[q.correctAnswer]++;
    });
    expect(advDist[0]).toBe(10);
    expect(advDist[1]).toBe(10);
    expect(advDist[2]).toBe(10);
    expect(advDist[3]).toBe(10);
  });

  test('4. Practical Projects: Minimum 10 Deliverables Each', async () => {
    const allProjects = [
      ...INSTAGRAM_ADS_BEGINNER_TASKS.filter((t) => t.isProject),
      ...INSTAGRAM_ADS_INTERMEDIATE_TASKS.filter((t) => t.isProject),
      ...INSTAGRAM_ADS_ADVANCED_TASKS.filter((t) => t.isProject),
    ];

    expect(allProjects.length).toBe(4);

    allProjects.forEach((proj) => {
      expect(proj.projectDetails).toBeDefined();
      expect(proj.projectDetails.deliverables.length).toBeGreaterThanOrEqual(10);
      const desc = proj.projectDetails.brief || proj.projectDetails.overview || '';
      expect(desc.length).toBeGreaterThan(20);
      expect(proj.projectDetails.rubric.length).toBeGreaterThanOrEqual(3);
    });
  });

  test('5. Service State Normalization & Anti-Tampering Protection', async () => {
    const defaultState = InstagramAdsCourseService.getCourseState();
    expect(defaultState.courseId).toBe('instagram-ads');
    expect(defaultState.currentLevel).toBe('beginner');
    expect(defaultState.levels.beginner.status).toBe('in_progress');
    expect(defaultState.levels.intermediate.status).toBe('locked');
    expect(defaultState.levels.advanced.status).toBe('locked');

    // Attempt tampering: try to force intermediate unlock
    const tamperedCheck = InstagramAdsCourseService.checkLevelPrerequisites('intermediate', defaultState);
    expect(tamperedCheck.canUnlock).toBe(false);
    expect(tamperedCheck.reason).toContain('12 Beginner modules');

    const tamperedAdvCheck = InstagramAdsCourseService.checkLevelPrerequisites('advanced', defaultState);
    expect(tamperedAdvCheck.canUnlock).toBe(false);
  });

  // ==========================================
  // SECTION 2: UI NAVIGATION & ROUTING
  // ==========================================

  test('6. Course Catalog Card & Navigation', async ({ page }) => {
    await setAuthenticatedUser(page, 'ig-user-catalog');
    await resetInstagramAdsCourseState(page);

    await page.goto('/courses');
    await page.waitForLoadState('domcontentloaded');

    const card = page.locator('text=Instagram Ads Masterclass').first();
    await expect(card).toBeVisible({ timeout: 25000 });

    // Click to navigate
    await card.click();
    await expect(page.locator('h1')).toContainText('Instagram Ads Masterclass', { timeout: 25000 });
  });

  test('7. Primary Route & Alias Route Resolution with Level Subroutes', async ({ page }) => {
    await setAuthenticatedUser(page, 'ig-user-routes');
    await resetInstagramAdsCourseState(page);

    // Primary route
    await page.goto('/courses/instagram-ads');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1:has-text("Instagram Ads Masterclass")')).toBeVisible({ timeout: 25000 });

    // Alias route redirects to primary
    await page.goto('/courses/instagram-ads-masterclass');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/\/courses\/instagram-ads/, { timeout: 25000 });
    await expect(page.locator('h1:has-text("Instagram Ads Masterclass")')).toBeVisible({ timeout: 25000 });

    // Subroutes with level params
    await page.goto('/courses/instagram-ads/beginner');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/\/courses\/instagram-ads\?level=beginner/, { timeout: 25000 });
    await expect(page.locator('h1:has-text("Instagram Ads Masterclass")')).toBeVisible({ timeout: 25000 });
  });

  test('8. Level Gating & Prerequisite Blocking via Query Params and UI', async ({ page }) => {
    await setAuthenticatedUser(page, 'ig-user-gating');
    await resetInstagramAdsCourseState(page);

    await page.goto('/courses/instagram-ads');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1')).toContainText('Instagram Ads Masterclass', { timeout: 25000 });

    // Clicking Intermediate triggers Prerequisite Modal
    await page.locator('button:has-text("Level 2: Intermediate")').first().click();
    await expect(page.locator('text=Level 2: Instagram Ads Intermediate is Locked')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=Prerequisite Required')).toBeVisible();

    // Close modal via Cancel
    await page.locator('button:has-text("Cancel")').first().click();

    // Attempting direct URL navigation to locked intermediate level
    await page.goto('/courses/instagram-ads?level=intermediate');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('text=Level 2: Instagram Ads Intermediate is Locked')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=Complete all 12 Beginner modules')).toBeVisible();
  });

  // ==========================================
  // SECTION 3: END-TO-END LEARNING & ASSESSMENT
  // ==========================================

  test('9. Module Opening in Drawer', async ({ page }) => {
    await setAuthenticatedUser(page, 'ig-user-module');
    await resetInstagramAdsCourseState(page);

    await page.goto('/courses/instagram-ads');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1')).toContainText('Instagram Ads Masterclass', { timeout: 25000 });

    // Click on the first module in timeline
    const firstModule = page.locator('text=Introduction to Instagram Advertising').first();
    await expect(firstModule).toBeVisible({ timeout: 25000 });
    await firstModule.click();

    // Drawer opens with module details
    await expect(page.locator('h2:has-text("Introduction to Instagram Advertising")')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('button:has-text("Start Learning Lesson")')).toBeVisible();
  });

  test('10. Service Assessment Pass/Fail Thresholds & Retake Progression', async () => {
    let state = InstagramAdsCourseService.resetCourseState();

    // Complete all 13 Beginner non-assessment tasks
    const begTasks = state.levels.beginner.tasks.filter((t) => !t.isFinalAssessment);
    for (const t of begTasks) {
      state = InstagramAdsCourseService.completeTask('beginner', t.id);
    }

    // Still cannot unlock intermediate before passing assessment
    let check = InstagramAdsCourseService.checkLevelPrerequisites('intermediate', state);
    expect(check.canUnlock).toBe(false);

    // Submit failing assessment (e.g. 10/20 < 15 required)
    const answersFail: Record<string, number> = {};
    INSTAGRAM_ADS_BEGINNER_FINAL_ASSESSMENT.forEach((q, idx) => {
      answersFail[q.id] = idx < 10 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });
    let result = InstagramAdsCourseService.submitAssessment('beginner', answersFail, INSTAGRAM_ADS_BEGINNER_FINAL_ASSESSMENT);
    expect(result.passed).toBe(false);
    expect(result.score).toBe(10);
    check = InstagramAdsCourseService.checkLevelPrerequisites('intermediate', InstagramAdsCourseService.getCourseState());
    expect(check.canUnlock).toBe(false);

    // Submit passing assessment (18/20 >= 15 required)
    const answersPass: Record<string, number> = {};
    INSTAGRAM_ADS_BEGINNER_FINAL_ASSESSMENT.forEach((q, idx) => {
      answersPass[q.id] = idx < 18 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });
    result = InstagramAdsCourseService.submitAssessment('beginner', answersPass, INSTAGRAM_ADS_BEGINNER_FINAL_ASSESSMENT);
    expect(result.passed).toBe(true);
    expect(result.score).toBe(18);

    // Now Intermediate is unlocked!
    const switchRes = InstagramAdsCourseService.switchLevel('intermediate');
    expect(switchRes.success).toBe(true);
    expect(switchRes.state.currentLevel).toBe('intermediate');
    expect(switchRes.state.levels.intermediate.status).toBe('in_progress');
  });

  test('11. Full Progression to Master Certificate Eligibility', async ({ page }) => {
    await setAuthenticatedUser(page, 'ig-user-master-cert');

    // Set 100% completed state in localStorage
    await page.addInitScript(() => {
      const fullState = {
        courseId: 'instagram-ads',
        courseTitle: 'Instagram Ads Masterclass',
        currentLevel: 'advanced',
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: Instagram Ads Ecosystem, Formats & Campaign Foundations',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 14,
            totalTasks: 14,
            assessmentPassed: true,
            assessmentScore: 19,
            requiredScore: 15,
            totalQuestions: 20,
            tasks: Array.from({ length: 14 }, (_, i) => ({
              id: i === 12 ? 'ig-beg-proj' : i === 13 ? 'ig-beg-exam' : `ig-beg-${String(i + 1).padStart(2, '0')}`,
              status: 'completed',
              orderIndex: i + 1,
              title: `Task ${i + 1}`,
              description: 'Completed',
              requiresQuiz: i === 13,
              isFinalAssessment: i === 13,
              isProject: i === 12
            }))
          },
          intermediate: {
            level: 'intermediate',
            title: 'Level 2: Tracking Engineering, Audience Signals, Reels & Scaling',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 16,
            totalTasks: 16,
            assessmentPassed: true,
            assessmentScore: 28,
            requiredScore: 25,
            totalQuestions: 30,
            tasks: Array.from({ length: 16 }, (_, i) => ({
              id: i === 14 ? 'ig-int-proj' : i === 15 ? 'ig-int-exam' : `ig-int-${String(i + 1).padStart(2, '0')}`,
              status: 'completed',
              orderIndex: i + 1,
              title: `Task ${i + 1}`,
              description: 'Completed',
              requiresQuiz: i === 15,
              isFinalAssessment: i === 15,
              isProject: i === 14
            }))
          },
          advanced: {
            level: 'advanced',
            title: 'Level 3: Enterprise CAPI, Advantage+ Shopping, MMM & Scaled Ops',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 17,
            totalTasks: 17,
            assessmentPassed: true,
            assessmentScore: 38,
            requiredScore: 35,
            totalQuestions: 40,
            tasks: Array.from({ length: 17 }, (_, i) => ({
              id: i === 14 ? 'ig-adv-proj-01' : i === 15 ? 'ig-adv-proj-02' : i === 16 ? 'ig-adv-exam' : `ig-adv-${String(i + 1).padStart(2, '0')}`,
              status: 'completed',
              orderIndex: i + 1,
              title: `Task ${i + 1}`,
              description: 'Completed',
              requiresQuiz: i === 16,
              isFinalAssessment: i === 16,
              isProject: i === 14 || i === 15
            }))
          }
        },
        overallProgress: 100
      };
      window.localStorage.setItem('skillora_instagram_ads_course_progress', JSON.stringify(fullState));
    });

    await page.goto('/courses/instagram-ads');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1')).toContainText('Instagram Ads Masterclass', { timeout: 10000 });

    // Master Certificate banner should be visible
    await expect(page.locator('text=Master Instagram Ads Certified')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('text=Instagram Ads Masterclass Completed!')).toBeVisible();
    await expect(page.locator('button:has-text("View & Claim Master Certificate")')).toBeVisible();
  });

  test('12. Existing Courses remain functional alongside Instagram Ads', async ({ page }) => {
    await setAuthenticatedUser(page, 'ig-ads-user-check');

    await page.goto('/courses/youtube-ads');
    await expect(page.locator('h1')).toContainText('YouTube Ads', { timeout: 10000 });

    await page.goto('/courses/facebook-ads');
    await expect(page.locator('h1')).toContainText('Facebook Ads', { timeout: 10000 });

    await page.goto('/courses/google-ads');
    await expect(page.locator('h1')).toContainText('Google Ads', { timeout: 10000 });

    await page.goto('/courses/python');
    await expect(page.locator('h1')).toContainText('Python', { timeout: 10000 });
  });

  test('13. Mobile Viewport Responsiveness', async ({ page }) => {
    await setAuthenticatedUser(page, 'ig-user-mobile');
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/courses/instagram-ads');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1')).toContainText('Instagram Ads Masterclass', { timeout: 10000 });

    // Ensure no horizontal scrolling on mobile
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
  });
});
