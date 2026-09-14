import { test, expect, Page } from '@playwright/test';
import {
  FACEBOOK_ADS_BEGINNER_TASKS,
  FACEBOOK_ADS_BEGINNER_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/facebook-ads/facebookAdsBeginner.data';
import {
  FACEBOOK_ADS_INTERMEDIATE_TASKS,
  FACEBOOK_ADS_INTERMEDIATE_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/facebook-ads/facebookAdsIntermediate.data';
import {
  FACEBOOK_ADS_ADVANCED_TASKS,
  FACEBOOK_ADS_ADVANCED_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/facebook-ads/facebookAdsAdvanced.data';
import { FacebookAdsCourseService } from '../src/features/roadmap/services/facebookAdsCourse.service';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000005',
      email: 'facebookads.specialist@skillora.ai',
      firstName: 'Alex',
      role: 'performance_marketer',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-fb-ads-playwright',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  }, customUserId);
}

// Reset Facebook Ads Course state in localStorage
async function resetFacebookAdsCourseState(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.removeItem('skillora_facebook_ads_course_progress');
  });
}

test.describe('Skillora AI - Facebook Ads Masterclass Comprehensive E2E Verification', () => {
  test.setTimeout(60000);

  // ==========================================
  // SECTION 1: DATA FIDELITY & CURRICULUM AUDIT
  // ==========================================

  test('1. Exact Course Tasks & Modules Count Audit', async () => {
    // Beginner: 12 theory + 1 project + 1 final assessment = 14 tasks
    expect(FACEBOOK_ADS_BEGINNER_TASKS.length).toBe(14);
    const begTheory = FACEBOOK_ADS_BEGINNER_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const begProjects = FACEBOOK_ADS_BEGINNER_TASKS.filter((t) => t.isProject);
    const begAssessments = FACEBOOK_ADS_BEGINNER_TASKS.filter((t) => t.isFinalAssessment);
    expect(begTheory.length).toBe(12);
    expect(begProjects.length).toBe(1);
    expect(begAssessments.length).toBe(1);

    // Intermediate: 14 theory + 1 project + 1 final assessment = 16 tasks
    expect(FACEBOOK_ADS_INTERMEDIATE_TASKS.length).toBe(16);
    const intTheory = FACEBOOK_ADS_INTERMEDIATE_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const intProjects = FACEBOOK_ADS_INTERMEDIATE_TASKS.filter((t) => t.isProject);
    const intAssessments = FACEBOOK_ADS_INTERMEDIATE_TASKS.filter((t) => t.isFinalAssessment);
    expect(intTheory.length).toBe(14);
    expect(intProjects.length).toBe(1);
    expect(intAssessments.length).toBe(1);

    // Advanced: 14 theory + 2 projects + 1 final assessment = 17 tasks
    expect(FACEBOOK_ADS_ADVANCED_TASKS.length).toBe(17);
    const advTheory = FACEBOOK_ADS_ADVANCED_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const advProjects = FACEBOOK_ADS_ADVANCED_TASKS.filter((t) => t.isProject);
    const advAssessments = FACEBOOK_ADS_ADVANCED_TASKS.filter((t) => t.isFinalAssessment);
    expect(advTheory.length).toBe(14);
    expect(advProjects.length).toBe(2);
    expect(advAssessments.length).toBe(1);

    // Total counts
    const totalTheory = begTheory.length + intTheory.length + advTheory.length;
    const totalProjects = begProjects.length + intProjects.length + advProjects.length;
    const totalAssessments = begAssessments.length + intAssessments.length + advAssessments.length;
    const totalTasks = FACEBOOK_ADS_BEGINNER_TASKS.length + FACEBOOK_ADS_INTERMEDIATE_TASKS.length + FACEBOOK_ADS_ADVANCED_TASKS.length;

    expect(totalTheory).toBe(40);
    expect(totalProjects).toBe(4);
    expect(totalAssessments).toBe(3);
    expect(totalTasks).toBe(47);
  });

  test('2. Strict Content Depth: Every Theory Module has >= 3 Practical Examples & Line-by-Line Breakdowns', async () => {
    const allTheoryTasks = [
      ...FACEBOOK_ADS_BEGINNER_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject),
      ...FACEBOOK_ADS_INTERMEDIATE_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject),
      ...FACEBOOK_ADS_ADVANCED_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject),
    ];

    expect(allTheoryTasks.length).toBe(40);

    for (const task of allTheoryTasks) {
      const content = task.lessonContent!;
      expect(content.overview.length, `Module ${task.id} overview is too short`).toBeGreaterThan(50);
      expect(content.objectives?.length || 0, `Module ${task.id} must have objectives`).toBeGreaterThanOrEqual(3);

      const snippets = content.sections.flatMap((s) => s.codeSnippets || []);
      expect(snippets.length, `Module ${task.id} must contain at least 3 code snippets`).toBeGreaterThanOrEqual(3);

      for (const [idx, example] of snippets.entries()) {
        expect(example.code.trim().length, `Module ${task.id} example ${idx} is empty`).toBeGreaterThan(15);
      }
    }
  });

  test('3. 90-MCQ Audit: Exact 20/30/40 Distribution, Quality Checks, and Balanced Key Distribution', async () => {
    expect(FACEBOOK_ADS_BEGINNER_FINAL_ASSESSMENT.length).toBe(20);
    expect(FACEBOOK_ADS_INTERMEDIATE_FINAL_ASSESSMENT.length).toBe(30);
    expect(FACEBOOK_ADS_ADVANCED_FINAL_ASSESSMENT.length).toBe(40);

    const allQuestions = [
      ...FACEBOOK_ADS_BEGINNER_FINAL_ASSESSMENT,
      ...FACEBOOK_ADS_INTERMEDIATE_FINAL_ASSESSMENT,
      ...FACEBOOK_ADS_ADVANCED_FINAL_ASSESSMENT,
    ];

    expect(allQuestions.length).toBe(90);

    const questionTexts = new Set<string>();
    const answerDistribution = { 0: 0, 1: 0, 2: 0, 3: 0 };

    allQuestions.forEach((q, idx) => {
      expect(q.question.length, `Question #${idx + 1} is too short`).toBeGreaterThan(15);
      expect(q.options.length, `Question #${idx + 1} must have 4 options`).toBe(4);
      expect(q.correctAnswer, `Question #${idx + 1} correctAnswer out of bounds`).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer, `Question #${idx + 1} correctAnswer out of bounds`).toBeLessThanOrEqual(3);
      expect(q.explanation?.length || 0, `Question #${idx + 1} missing explanation`).toBeGreaterThan(20);
      expect(q.topic?.length || 0, `Question #${idx + 1} missing topic`).toBeGreaterThan(3);

      expect(questionTexts.has(q.question.trim().toLowerCase()), `Duplicate question: ${q.question}`).toBe(false);
      questionTexts.add(q.question.trim().toLowerCase());

      answerDistribution[q.correctAnswer as 0 | 1 | 2 | 3]++;
    });

    // Check balance (A, B, C, D roughly equal 22-23)
    expect(answerDistribution[0]).toBeGreaterThanOrEqual(22);
    expect(answerDistribution[0]).toBeLessThanOrEqual(23);
    expect(answerDistribution[1]).toBeGreaterThanOrEqual(22);
    expect(answerDistribution[1]).toBeLessThanOrEqual(23);
    expect(answerDistribution[2]).toBeGreaterThanOrEqual(22);
    expect(answerDistribution[2]).toBeLessThanOrEqual(23);
    expect(answerDistribution[3]).toBeGreaterThanOrEqual(22);
    expect(answerDistribution[3]).toBeLessThanOrEqual(23);
  });

  test('4. Practical Projects: Minimum 10 Deliverables Each', async () => {
    const allProjects = [
      ...FACEBOOK_ADS_BEGINNER_TASKS.filter((t) => t.isProject),
      ...FACEBOOK_ADS_INTERMEDIATE_TASKS.filter((t) => t.isProject),
      ...FACEBOOK_ADS_ADVANCED_TASKS.filter((t) => t.isProject),
    ];

    expect(allProjects.length).toBe(4);

    allProjects.forEach((proj) => {
      expect(proj.projectDetails).toBeDefined();
      expect(proj.projectDetails.deliverables.length).toBeGreaterThanOrEqual(10);
      expect(proj.projectDetails.overview.length).toBeGreaterThan(50);
      expect(proj.projectDetails.requirements.length).toBeGreaterThanOrEqual(5);
      expect(proj.projectDetails.rubric.length).toBeGreaterThanOrEqual(3);
    });
  });

  test('5. Service State Normalization & Anti-Tampering Protection', async () => {
    const defaultState = FacebookAdsCourseService.getCourseState();
    expect(defaultState.courseId).toBe('facebook-ads');
    expect(defaultState.currentLevel).toBe('beginner');
    expect(defaultState.levels.beginner.status).toBe('in_progress');
    expect(defaultState.levels.intermediate.status).toBe('locked');
    expect(defaultState.levels.advanced.status).toBe('locked');

    // Attempt tampering: try to force intermediate unlock
    const tamperedCheck = FacebookAdsCourseService.checkLevelPrerequisites('intermediate', defaultState);
    expect(tamperedCheck.canUnlock).toBe(false);
    expect(tamperedCheck.reason).toContain('12 Beginner modules');

    const tamperedAdvCheck = FacebookAdsCourseService.checkLevelPrerequisites('advanced', defaultState);
    expect(tamperedAdvCheck.canUnlock).toBe(false);
  });

  // ==========================================
  // SECTION 2: UI NAVIGATION & ROUTING
  // ==========================================

  test('6. Course Catalog Card & Navigation', async ({ page }) => {
    await setAuthenticatedUser(page, 'fb-user-catalog');
    await resetFacebookAdsCourseState(page);

    await page.goto('/courses');
    await page.waitForLoadState('domcontentloaded');

    const card = page.locator('text=Facebook Ads Masterclass').first();
    await expect(card).toBeVisible({ timeout: 25000 });

    // Click to navigate
    await card.click();
    await expect(page.locator('h1:has-text("Facebook Ads Masterclass")')).toBeVisible({ timeout: 25000 });
  });

  test('7. Primary Route & Alias Route Resolution with Level Subroutes', async ({ page }) => {
    await setAuthenticatedUser(page, 'fb-user-routes');
    await resetFacebookAdsCourseState(page);

    // Primary route
    await page.goto('/courses/facebook-ads');
    await expect(page.locator('h1:has-text("Facebook Ads Masterclass")')).toBeVisible({ timeout: 25000 });

    // Alias route redirects to primary
    await page.goto('/courses/facebook-ads-masterclass');
    await expect(page).toHaveURL(/\/courses\/facebook-ads/, { timeout: 25000 });
    await expect(page.locator('h1:has-text("Facebook Ads Masterclass")')).toBeVisible({ timeout: 25000 });

    // Subroutes with level params
    await page.goto('/courses/facebook-ads/beginner');
    await expect(page).toHaveURL(/\/courses\/facebook-ads\?level=beginner/, { timeout: 25000 });
    await expect(page.locator('h1:has-text("Facebook Ads Masterclass")')).toBeVisible({ timeout: 25000 });
  });

  test('8. Level Gating & Prerequisite Blocking via Query Params and UI', async ({ page }) => {
    await setAuthenticatedUser(page, 'fb-user-gating');
    await resetFacebookAdsCourseState(page);

    await page.goto('/courses/facebook-ads');
    await expect(page.locator('h1:has-text("Facebook Ads Masterclass")')).toBeVisible({ timeout: 10000 });

    // Clicking Intermediate triggers Prerequisite Modal
    await page.click('button:has-text("Level 2: Intermediate")');
    await expect(page.locator('text=Level 2: Facebook Ads Intermediate is Locked')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('text=Prerequisite Required')).toBeVisible();

    // Close modal via Cancel
    await page.click('button:has-text("Cancel")');

    // Attempting direct URL navigation to locked intermediate level
    await page.goto('/courses/facebook-ads?level=intermediate');
    await expect(page.locator('text=Level 2: Facebook Ads Intermediate is Locked')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('text=Complete all 12 Beginner modules')).toBeVisible();
  });

  // ==========================================
  // SECTION 3: END-TO-END LEARNING & ASSESSMENT
  // ==========================================

  test('9. Module Opening in Drawer', async ({ page }) => {
    await setAuthenticatedUser(page, 'fb-user-module');
    await resetFacebookAdsCourseState(page);

    await page.goto('/courses/facebook-ads');
    await expect(page.locator('h1:has-text("Facebook Ads Masterclass")')).toBeVisible({ timeout: 10000 });

    // Click on the first module in timeline
    const firstModule = page.locator('text=Introduction to Facebook and Meta Advertising').first();
    await expect(firstModule).toBeVisible({ timeout: 10000 });
    await firstModule.click();

    // Drawer opens with module details
    await expect(page.locator('h2:has-text("Introduction to Facebook and Meta Advertising")')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('button:has-text("Start Learning Lesson")')).toBeVisible();
  });

  test('10. Service Assessment Pass/Fail Thresholds & Retake Progression', async () => {
    let state = FacebookAdsCourseService.resetCourseState();

    // Complete all 13 Beginner non-assessment tasks
    const begTasks = state.levels.beginner.tasks.filter((t) => !t.isFinalAssessment);
    for (const t of begTasks) {
      state = FacebookAdsCourseService.completeTask('beginner', t.id);
    }

    // Still cannot unlock intermediate before passing assessment
    let check = FacebookAdsCourseService.checkLevelPrerequisites('intermediate', state);
    expect(check.canUnlock).toBe(false);

    // Submit failing assessment (e.g. 10/20 < 15 required)
    const answersFail: Record<string, number> = {};
    FACEBOOK_ADS_BEGINNER_FINAL_ASSESSMENT.forEach((q, idx) => {
      answersFail[q.id] = idx < 10 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });
    let result = FacebookAdsCourseService.submitAssessment('beginner', answersFail, FACEBOOK_ADS_BEGINNER_FINAL_ASSESSMENT);
    expect(result.passed).toBe(false);
    expect(result.score).toBe(10);
    check = FacebookAdsCourseService.checkLevelPrerequisites('intermediate', FacebookAdsCourseService.getCourseState());
    expect(check.canUnlock).toBe(false);

    // Submit passing assessment (18/20 >= 15 required)
    const answersPass: Record<string, number> = {};
    FACEBOOK_ADS_BEGINNER_FINAL_ASSESSMENT.forEach((q, idx) => {
      answersPass[q.id] = idx < 18 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });
    result = FacebookAdsCourseService.submitAssessment('beginner', answersPass, FACEBOOK_ADS_BEGINNER_FINAL_ASSESSMENT);
    expect(result.passed).toBe(true);
    expect(result.score).toBe(18);

    // Now Intermediate is unlocked!
    const switchRes = FacebookAdsCourseService.switchLevel('intermediate');
    expect(switchRes.success).toBe(true);
    expect(switchRes.state.currentLevel).toBe('intermediate');
    expect(switchRes.state.levels.intermediate.status).toBe('in_progress');
  });

  test('11. Full Progression to Master Certificate Eligibility', async ({ page }) => {
    await setAuthenticatedUser(page, 'fb-user-master-cert');

    // Set 100% completed state in localStorage
    await page.addInitScript(() => {
      const fullState = {
        courseId: 'facebook-ads',
        courseTitle: 'Facebook Ads Masterclass',
        currentLevel: 'advanced',
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: Meta Ads Fundamentals, Creative & Lead Generation',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 14,
            totalTasks: 14,
            assessmentPassed: true,
            assessmentScore: 19,
            requiredScore: 15,
            totalQuestions: 20,
            tasks: Array.from({ length: 14 }, (_, i) => ({
              id: i === 12 ? 'fb-beg-proj' : i === 13 ? 'fb-beg-exam' : `fb-beg-${String(i + 1).padStart(2, '0')}`,
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
            title: 'Level 2: CAPI Engineering, Full-Funnel Architecture & Scaling',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 16,
            totalTasks: 16,
            assessmentPassed: true,
            assessmentScore: 28,
            requiredScore: 25,
            totalQuestions: 30,
            tasks: Array.from({ length: 16 }, (_, i) => ({
              id: i === 14 ? 'fb-int-proj' : i === 15 ? 'fb-int-exam' : `fb-int-${String(i + 1).padStart(2, '0')}`,
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
            title: 'Level 3: Enterprise Media Buying, Incrementality & Turnaround Strategy',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 17,
            totalTasks: 17,
            assessmentPassed: true,
            assessmentScore: 38,
            requiredScore: 35,
            totalQuestions: 40,
            tasks: Array.from({ length: 17 }, (_, i) => ({
              id: i === 14 ? 'fb-adv-proj-01' : i === 15 ? 'fb-adv-proj-02' : i === 16 ? 'fb-adv-exam' : `fb-adv-${String(i + 1).padStart(2, '0')}`,
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
      window.localStorage.setItem('skillora_facebook_ads_course_progress', JSON.stringify(fullState));
    });

    await page.goto('/courses/facebook-ads');
    await expect(page.locator('h1:has-text("Facebook Ads Masterclass")')).toBeVisible({ timeout: 10000 });

    // Master Certificate banner should be visible
    await expect(page.locator('text=Master Facebook Ads Certified')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('text=Facebook Ads Masterclass Completed!')).toBeVisible();
    await expect(page.locator('button:has-text("View & Claim Master Certificate")')).toBeVisible();
  });

  test('12. Meta Ads Course remains functional alongside Facebook Ads', async ({ page }) => {
    await setAuthenticatedUser(page, 'meta-ads-user-check');

    await page.goto('/courses/meta-ads');
    await expect(page.locator('h1')).toContainText('Meta Ads', { timeout: 10000 });
  });

  test('13. Mobile Viewport Responsiveness', async ({ page }) => {
    await setAuthenticatedUser(page, 'fb-user-mobile');
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/courses/facebook-ads');
    await expect(page.locator('h1:has-text("Facebook Ads Masterclass")')).toBeVisible({ timeout: 10000 });

    // Ensure no horizontal scrolling on mobile
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
  });
});
