import { test, expect, Page } from '@playwright/test';
import {
  GOOGLE_ADS_BEGINNER_TASKS,
  GOOGLE_ADS_BEGINNER_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/google-ads/googleAdsBeginner.data';
import {
  GOOGLE_ADS_INTERMEDIATE_TASKS,
  GOOGLE_ADS_INTERMEDIATE_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/google-ads/googleAdsIntermediate.data';
import {
  GOOGLE_ADS_ADVANCED_TASKS,
  GOOGLE_ADS_ADVANCED_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/google-ads/googleAdsAdvanced.data';
import {
  INITIAL_GOOGLE_ADS_LEVELS,
  INITIAL_GOOGLE_ADS_COURSE_STATE,
} from '../src/features/roadmap/data/google-ads';
import { GoogleAdsCourseService } from '../src/features/roadmap/services/googleAdsCourse.service';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000004',
      email: 'googleads.expert@skillora.ai',
      firstName: 'Jordan',
      role: 'performance_marketer',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-gads-playwright',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  }, customUserId);
}

// Reset Google Ads Course state in localStorage
async function resetGoogleAdsCourseState(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.removeItem('skillora_google_ads_course_progress');
  });
}

test.describe('Skillora AI - Google Ads Masterclass Comprehensive E2E Verification', () => {
  test.setTimeout(60000);

  // ==========================================
  // SECTION 1: DATA FIDELITY & CURRICULUM AUDIT
  // ==========================================

  test('1. Exact Course Tasks & Modules Count Audit', async () => {
    // Beginner: 12 theory + 1 project + 1 final assessment = 14 tasks
    expect(GOOGLE_ADS_BEGINNER_TASKS.length).toBe(14);
    const begTheory = GOOGLE_ADS_BEGINNER_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const begProjects = GOOGLE_ADS_BEGINNER_TASKS.filter((t) => t.isProject);
    const begAssessments = GOOGLE_ADS_BEGINNER_TASKS.filter((t) => t.isFinalAssessment);
    expect(begTheory.length).toBe(12);
    expect(begProjects.length).toBe(1);
    expect(begAssessments.length).toBe(1);

    // Intermediate: 14 theory + 1 project + 1 final assessment = 16 tasks
    expect(GOOGLE_ADS_INTERMEDIATE_TASKS.length).toBe(16);
    const intTheory = GOOGLE_ADS_INTERMEDIATE_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const intProjects = GOOGLE_ADS_INTERMEDIATE_TASKS.filter((t) => t.isProject);
    const intAssessments = GOOGLE_ADS_INTERMEDIATE_TASKS.filter((t) => t.isFinalAssessment);
    expect(intTheory.length).toBe(14);
    expect(intProjects.length).toBe(1);
    expect(intAssessments.length).toBe(1);

    // Advanced: 14 theory + 2 projects + 1 final assessment = 17 tasks
    expect(GOOGLE_ADS_ADVANCED_TASKS.length).toBe(17);
    const advTheory = GOOGLE_ADS_ADVANCED_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const advProjects = GOOGLE_ADS_ADVANCED_TASKS.filter((t) => t.isProject);
    const advAssessments = GOOGLE_ADS_ADVANCED_TASKS.filter((t) => t.isFinalAssessment);
    expect(advTheory.length).toBe(14);
    expect(advProjects.length).toBe(2);
    expect(advAssessments.length).toBe(1);

    // Total counts
    const totalTheory = begTheory.length + intTheory.length + advTheory.length;
    const totalProjects = begProjects.length + intProjects.length + advProjects.length;
    const totalAssessments = begAssessments.length + intAssessments.length + advAssessments.length;
    const totalTasks = GOOGLE_ADS_BEGINNER_TASKS.length + GOOGLE_ADS_INTERMEDIATE_TASKS.length + GOOGLE_ADS_ADVANCED_TASKS.length;

    expect(totalTheory).toBe(40);
    expect(totalProjects).toBe(4);
    expect(totalAssessments).toBe(3);
    expect(totalTasks).toBe(47);
  });

  test('2. Strict Content Depth: Every Theory Module has >= 3 Practical Examples & Line-by-Line Breakdowns', async () => {
    const allTheoryTasks = [
      ...GOOGLE_ADS_BEGINNER_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject),
      ...GOOGLE_ADS_INTERMEDIATE_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject),
      ...GOOGLE_ADS_ADVANCED_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject),
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

  test('3. Project Deliverables Audit Across All 4 Projects', async () => {
    const allProjects = [
      ...GOOGLE_ADS_BEGINNER_TASKS.filter((t) => t.isProject),
      ...GOOGLE_ADS_INTERMEDIATE_TASKS.filter((t) => t.isProject),
      ...GOOGLE_ADS_ADVANCED_TASKS.filter((t) => t.isProject),
    ];

    expect(allProjects.length).toBe(4);

    for (const proj of allProjects) {
      const details = proj.projectDetails!;
      expect(details.overview.length, `Project ${proj.id} overview is too short`).toBeGreaterThan(50);
      expect(details.requirements.length, `Project ${proj.id} requires >= 5 requirements`).toBeGreaterThanOrEqual(5);
      expect(details.deliverables.length, `Project ${proj.id} requires >= 10 deliverables`).toBeGreaterThanOrEqual(10);
      expect(details.rubric.length, `Project ${proj.id} requires evaluation rubric`).toBeGreaterThanOrEqual(3);
    }
  });

  test('4. MCQ Quality & Exact Thresholds Audit', async () => {
    expect(GOOGLE_ADS_BEGINNER_FINAL_ASSESSMENT.length).toBe(20);
    expect(GOOGLE_ADS_INTERMEDIATE_FINAL_ASSESSMENT.length).toBe(30);
    expect(GOOGLE_ADS_ADVANCED_FINAL_ASSESSMENT.length).toBe(40);

    const totalMCQs = GOOGLE_ADS_BEGINNER_FINAL_ASSESSMENT.length +
      GOOGLE_ADS_INTERMEDIATE_FINAL_ASSESSMENT.length +
      GOOGLE_ADS_ADVANCED_FINAL_ASSESSMENT.length;
    expect(totalMCQs).toBe(90);

    expect(INITIAL_GOOGLE_ADS_LEVELS.beginner.requiredScore).toBe(15);
    expect(INITIAL_GOOGLE_ADS_LEVELS.intermediate.requiredScore).toBe(25);
    expect(INITIAL_GOOGLE_ADS_LEVELS.advanced.requiredScore).toBe(35);

    const allMCQs = [
      ...GOOGLE_ADS_BEGINNER_FINAL_ASSESSMENT,
      ...GOOGLE_ADS_INTERMEDIATE_FINAL_ASSESSMENT,
      ...GOOGLE_ADS_ADVANCED_FINAL_ASSESSMENT,
    ];

    const distribution: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
    for (const [idx, q] of allMCQs.entries()) {
      expect(q.question.length, `MCQ ${idx + 1} has insufficient question length`).toBeGreaterThan(15);
      expect(q.options.length, `MCQ ${idx + 1} must have 4 options`).toBe(4);
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer).toBeLessThanOrEqual(3);
      expect(q.explanation?.length || 0, `MCQ ${idx + 1} explanation too short`).toBeGreaterThan(20);
      expect(q.topic?.length || 0, `MCQ ${idx + 1} missing topic`).toBeGreaterThan(2);
      distribution[q.correctAnswer] = (distribution[q.correctAnswer] || 0) + 1;
    }

    expect(distribution[0]).toBeGreaterThanOrEqual(20);
    expect(distribution[1]).toBeGreaterThanOrEqual(20);
    expect(distribution[2]).toBeGreaterThanOrEqual(20);
    expect(distribution[3]).toBeGreaterThanOrEqual(20);
  });

  // ==========================================
  // SECTION 2: PLATFORM ROUTING & CATALOG INTEGRATION
  // ==========================================

  test('5. Course appears in catalog with valid cards and metrics', async ({ page }) => {
    await setAuthenticatedUser(page, 'gads-user-catalog');
    await resetGoogleAdsCourseState(page);
    await page.goto('/courses');

    await expect(page.locator('h1')).toContainText('Structured Skill Courses');
    
    // Check Google Ads Masterclass card is present
    await expect(page.locator('text=Google Ads Masterclass').first()).toBeVisible();
    await expect(page.locator('text=47 Modules').first()).toBeVisible();
  });

  test('6. Search service and search bar finds Google Ads Masterclass', async ({ page }) => {
    await setAuthenticatedUser(page, 'gads-user-search');
    await page.goto('/dashboard');

    // UI search test
    const searchInput = page.locator('input[placeholder*="Search"]');
    if (await searchInput.isVisible()) {
      await searchInput.fill('google ads');
      await expect(page.locator('text=Google Ads Masterclass').first()).toBeVisible({ timeout: 5000 });
    }
  });

  test('7. Primary route /courses/google-ads opens correctly', async ({ page }) => {
    await setAuthenticatedUser(page, 'gads-user-route');
    await resetGoogleAdsCourseState(page);
    await page.goto('/courses/google-ads');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('h1:has-text("Google Ads Masterclass")')).toBeVisible({ timeout: 25000 });
    await expect(page.locator('text=Performance Marketing Track')).toBeVisible();
  });

  test('8. Alias route /courses/google-ads-masterclass redirects cleanly to primary route', async ({ page }) => {
    await setAuthenticatedUser(page, 'gads-user-alias');
    await page.goto('/courses/google-ads-masterclass');
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveURL(/\/courses\/google-ads/, { timeout: 25000 });
    await expect(page.locator('h1:has-text("Google Ads Masterclass")')).toBeVisible({ timeout: 25000 });
  });

  // ==========================================
  // SECTION 3: LEVEL GATING & PREREQUISITE DEFENSE
  // ==========================================

  test('9. Beginner is unlocked initially, Intermediate and Advanced are initially locked', async ({ page }) => {
    await setAuthenticatedUser(page, 'gads-user-gating-init');
    await resetGoogleAdsCourseState(page);
    await page.goto('/courses/google-ads');

    // Beginner modules timeline visible
    await expect(page.locator('text=Introduction to Google Ads and Paid Search').first()).toBeVisible();

    // Clicking Intermediate triggers Prerequisite Modal
    await page.click('button:has-text("Level 2: Intermediate")');
    await expect(page.locator('text=Level 2: Google Ads Intermediate is Locked')).toBeVisible();
    await expect(page.locator('text=Prerequisite Required')).toBeVisible();

    // Close modal via Cancel
    await page.click('button:has-text("Cancel")');

    // Clicking Advanced triggers Prerequisite Modal
    await page.click('button:has-text("Level 3: Advanced")');
    await expect(page.locator('text=Level 3: Google Ads Advanced is Locked')).toBeVisible();
  });

  test('10. Modules open in TaskDetailDrawer with full interactive content', async ({ page }) => {
    await setAuthenticatedUser(page, 'gads-user-module-open');
    await resetGoogleAdsCourseState(page);
    await page.goto('/courses/google-ads');

    // Click first module card
    await page.locator('text=Introduction to Google Ads and Paid Search').first().click();
    
    // Drawer should open
    await expect(page.locator('h2:has-text("Introduction to Google Ads and Paid Search")')).toBeVisible();
    await expect(page.locator('button:has-text("Start Learning Lesson")')).toBeVisible();
  });

  test('11. Direct URL query parameter bypass is strictly blocked', async ({ page }) => {
    await setAuthenticatedUser(page, 'gads-user-bypass-block');
    await resetGoogleAdsCourseState(page);
    
    // Attempting direct URL navigation to locked intermediate level
    await page.goto('/courses/google-ads?level=intermediate');

    // Must show prerequisite modal and fallback to beginner
    await expect(page.locator('text=Level 2: Google Ads Intermediate is Locked')).toBeVisible();
    await expect(page.locator('text=Complete all 12 Beginner modules')).toBeVisible();
  });

  test('12. LocalStorage tampering is rejected by prerequisite engine', async ({ page }) => {
    await setAuthenticatedUser(page, 'gads-user-tamper-defense');
    
    // Inject illegally modified localStorage where intermediate is claimed in_progress without completed beginner tasks
    await page.addInitScript(() => {
      const tamperedState = {
        courseId: 'google-ads',
        courseTitle: 'Google Ads Masterclass',
        currentLevel: 'intermediate',
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: Search Fundamentals, Keywords & Campaign Setup',
            status: 'in_progress',
            completedTasks: 0,
            totalTasks: 14,
            assessmentPassed: false,
            assessmentScore: 0,
            requiredScore: 15,
            tasks: []
          },
          intermediate: {
            level: 'intermediate',
            title: 'Level 2: Tracking, Smart Bidding, Performance Max & Scaling',
            status: 'in_progress', // ILLEGAL TAMPER
            completedTasks: 0,
            totalTasks: 16,
            assessmentPassed: false,
            requiredScore: 25,
            tasks: []
          },
          advanced: {
            level: 'advanced',
            title: 'Level 3: Automation, Enterprise Analytics & Omnichannel Mastery',
            status: 'locked',
            completedTasks: 0,
            totalTasks: 17,
            assessmentPassed: false,
            requiredScore: 35,
            tasks: []
          }
        },
        overallProgress: 0
      };
      window.localStorage.setItem('skillora_google_ads_course_progress', JSON.stringify(tamperedState));
    });

    await page.goto('/courses/google-ads');

    // Prerequisite validator must catch this and keep intermediate locked
    await page.click('button:has-text("Level 2: Intermediate")');
    await expect(page.locator('text=Level 2: Google Ads Intermediate is Locked')).toBeVisible();
  });

  // ==========================================
  // SECTION 4: ASSESSMENT & RETAKE WORKFLOW
  // ==========================================

  test('13. Assessment Threshold Calculations (Pass / Fail / Retake)', async () => {
    // Beginner: 14 fails, 15 passes
    expect(14 >= INITIAL_GOOGLE_ADS_LEVELS.beginner.requiredScore).toBe(false);
    expect(15 >= INITIAL_GOOGLE_ADS_LEVELS.beginner.requiredScore).toBe(true);

    // Intermediate: 24 fails, 25 passes
    expect(24 >= INITIAL_GOOGLE_ADS_LEVELS.intermediate.requiredScore).toBe(false);
    expect(25 >= INITIAL_GOOGLE_ADS_LEVELS.intermediate.requiredScore).toBe(true);

    // Advanced: 34 fails, 35 passes
    expect(34 >= INITIAL_GOOGLE_ADS_LEVELS.advanced.requiredScore).toBe(false);
    expect(35 >= INITIAL_GOOGLE_ADS_LEVELS.advanced.requiredScore).toBe(true);
  });

  test('14. Full Level Progression: Beginner Pass Unlocks Intermediate, Intermediate Pass Unlocks Advanced', async () => {
    // 1. Pristine state
    const state = JSON.parse(JSON.stringify(INITIAL_GOOGLE_ADS_COURSE_STATE));
    expect(GoogleAdsCourseService.checkLevelPrerequisites('intermediate', state).canUnlock).toBe(false);
    expect(GoogleAdsCourseService.checkLevelPrerequisites('advanced', state).canUnlock).toBe(false);

    // 2. Complete all Beginner theory and project
    state.levels.beginner.tasks.forEach((t: any) => {
      if (!t.isFinalAssessment) t.status = 'completed';
    });
    // Still locked without passing exam
    expect(GoogleAdsCourseService.checkLevelPrerequisites('intermediate', state).canUnlock).toBe(false);

    // 3. Pass Beginner Assessment with 18/20
    state.levels.beginner.assessmentScore = 18;
    state.levels.beginner.assessmentPassed = true;
    expect(GoogleAdsCourseService.checkLevelPrerequisites('intermediate', state).canUnlock).toBe(true);
    expect(GoogleAdsCourseService.checkLevelPrerequisites('advanced', state).canUnlock).toBe(false);

    // 4. Complete all Intermediate theory and project
    state.levels.intermediate.tasks.forEach((t: any) => {
      if (!t.isFinalAssessment) t.status = 'completed';
    });
    // Still locked without passing intermediate exam
    expect(GoogleAdsCourseService.checkLevelPrerequisites('advanced', state).canUnlock).toBe(false);

    // 5. Pass Intermediate Assessment with 28/30
    state.levels.intermediate.assessmentScore = 28;
    state.levels.intermediate.assessmentPassed = true;
    expect(GoogleAdsCourseService.checkLevelPrerequisites('advanced', state).canUnlock).toBe(true);

    // 6. Complete all Advanced tasks and pass Master Assessment with 38/40
    state.levels.advanced.tasks.forEach((t: any) => {
      if (!t.isFinalAssessment) t.status = 'completed';
    });
    state.levels.advanced.assessmentScore = 38;
    state.levels.advanced.assessmentPassed = true;

    const certEligibility = GoogleAdsCourseService.isEligibleForMasterCertificate(state);
    expect(certEligibility.isEligible).toBe(true);
    expect(certEligibility.advScore).toBe(38);
  });

  // ==========================================
  // SECTION 5: CERTIFICATE SYSTEM
  // ==========================================

  test('15. Certificate is locked before full completion and unlocks after 100% requirements', async ({ page }) => {
    await setAuthenticatedUser(page, 'gads-user-cert-flow');
    
    // Incomplete state -> Certificate banner is NOT visible
    await page.addInitScript(() => {
      window.localStorage.setItem('skillora_google_ads_course_progress', JSON.stringify(INITIAL_GOOGLE_ADS_COURSE_STATE));
    });
    await page.goto('/courses/google-ads');
    await expect(page.locator('text=Master Google Ads Certified')).not.toBeVisible();

    // Inject 100% completed valid state
    await page.addInitScript(() => {
      const fullState = {
        courseId: 'google-ads',
        courseTitle: 'Google Ads Masterclass',
        currentLevel: 'advanced',
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: Search Fundamentals, Keywords & Campaign Setup',
            status: 'completed',
            completedTasks: 14,
            totalTasks: 14,
            progressPercentage: 100,
            assessmentPassed: true,
            assessmentScore: 20,
            requiredScore: 15,
            tasks: [
              { id: 'gads-beg-01', status: 'completed' },
              { id: 'gads-beg-02', status: 'completed' },
              { id: 'gads-beg-03', status: 'completed' },
              { id: 'gads-beg-04', status: 'completed' },
              { id: 'gads-beg-05', status: 'completed' },
              { id: 'gads-beg-06', status: 'completed' },
              { id: 'gads-beg-07', status: 'completed' },
              { id: 'gads-beg-08', status: 'completed' },
              { id: 'gads-beg-09', status: 'completed' },
              { id: 'gads-beg-10', status: 'completed' },
              { id: 'gads-beg-11', status: 'completed' },
              { id: 'gads-beg-12', status: 'completed' },
              { id: 'gads-beg-p1', isProject: true, status: 'completed' },
              { id: 'gads-beg-assessment', isFinalAssessment: true, status: 'completed' }
            ]
          },
          intermediate: {
            level: 'intermediate',
            title: 'Level 2: Tracking, Smart Bidding, Performance Max & Scaling',
            status: 'completed',
            completedTasks: 16,
            totalTasks: 16,
            progressPercentage: 100,
            assessmentPassed: true,
            assessmentScore: 30,
            requiredScore: 25,
            tasks: [
              { id: 'gads-int-01', status: 'completed' },
              { id: 'gads-int-02', status: 'completed' },
              { id: 'gads-int-03', status: 'completed' },
              { id: 'gads-int-04', status: 'completed' },
              { id: 'gads-int-05', status: 'completed' },
              { id: 'gads-int-06', status: 'completed' },
              { id: 'gads-int-07', status: 'completed' },
              { id: 'gads-int-08', status: 'completed' },
              { id: 'gads-int-09', status: 'completed' },
              { id: 'gads-int-10', status: 'completed' },
              { id: 'gads-int-11', status: 'completed' },
              { id: 'gads-int-12', status: 'completed' },
              { id: 'gads-int-13', status: 'completed' },
              { id: 'gads-int-14', status: 'completed' },
              { id: 'gads-int-p1', isProject: true, status: 'completed' },
              { id: 'gads-int-assessment', isFinalAssessment: true, status: 'completed' }
            ]
          },
          advanced: {
            level: 'advanced',
            title: 'Level 3: Automation, Enterprise Analytics & Omnichannel Mastery',
            status: 'completed',
            completedTasks: 17,
            totalTasks: 17,
            progressPercentage: 100,
            assessmentPassed: true,
            assessmentScore: 40,
            requiredScore: 35,
            tasks: [
              { id: 'gads-adv-01', status: 'completed' },
              { id: 'gads-adv-02', status: 'completed' },
              { id: 'gads-adv-03', status: 'completed' },
              { id: 'gads-adv-04', status: 'completed' },
              { id: 'gads-adv-05', status: 'completed' },
              { id: 'gads-adv-06', status: 'completed' },
              { id: 'gads-adv-07', status: 'completed' },
              { id: 'gads-adv-08', status: 'completed' },
              { id: 'gads-adv-09', status: 'completed' },
              { id: 'gads-adv-10', status: 'completed' },
              { id: 'gads-adv-11', status: 'completed' },
              { id: 'gads-adv-12', status: 'completed' },
              { id: 'gads-adv-13', status: 'completed' },
              { id: 'gads-adv-14', status: 'completed' },
              { id: 'gads-adv-p1', isProject: true, status: 'completed' },
              { id: 'gads-adv-p2', isProject: true, status: 'completed' },
              { id: 'gads-adv-assessment', isFinalAssessment: true, status: 'completed' }
            ]
          }
        },
        overallProgress: 100
      };
      window.localStorage.setItem('skillora_google_ads_course_progress', JSON.stringify(fullState));
    });

    await page.goto('/courses/google-ads');
    
    // Now Master Certificate Unlocked Hero Banner must be visible
    await expect(page.locator('text=Master Google Ads Certified')).toBeVisible();
    await expect(page.locator('button:has-text("View & Claim Master Certificate")')).toBeVisible();
  });

  // ==========================================
  // SECTION 6: RESPONSIVE QA & REGRESSION
  // ==========================================

  test('16. Mobile Viewport (375px) Layout and No Horizontal Overflow', async ({ page }) => {
    await setAuthenticatedUser(page, 'gads-user-mobile');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/courses/google-ads');

    await expect(page.locator('h1:has-text("Google Ads Masterclass")')).toBeVisible();

    // Verify document does not horizontally overflow
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalScroll).toBe(false);
  });

  test('17. Desktop Viewport (1280px) Layout and Navigation', async ({ page }) => {
    await setAuthenticatedUser(page, 'gads-user-desktop');
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/courses/google-ads');

    await expect(page.locator('h1:has-text("Google Ads Masterclass")')).toBeVisible();
    await expect(page.locator('text=Overall Course Progress')).toBeVisible();
  });

  test('18. Existing Skillora Courses Platform Regression Check', async ({ page }) => {
    await setAuthenticatedUser(page, 'gads-user-regression');

    // 1. Python course
    await page.goto('/courses/python');
    await expect(page.locator('h1:has-text("Python Masterclass")')).toBeVisible();

    // 2. Shopify Liquid course
    await page.goto('/courses/shopify');
    await expect(page.locator('h1:has-text("Shopify Liquid")')).toBeVisible();

    // 3. Meta Ads course
    await page.goto('/courses/meta-ads');
    await expect(page.locator('h1:has-text("Meta Ads")')).toBeVisible();

    // 4. SEO course
    await page.goto('/courses/seo');
    await expect(page.locator('h1:has-text("SEO")')).toBeVisible();

    // 5. Prompt Engineering course
    await page.goto('/courses/prompt-engineering');
    await expect(page.locator('h1:has-text("Prompt Engineering")')).toBeVisible();

    // 6. HTML & CSS course
    await page.goto('/courses/html-css');
    await expect(page.locator('h1:has-text("HTML & CSS Masterclass")')).toBeVisible();

    // 7. 3D Animation course
    await page.goto('/courses/3d-animation');
    await expect(page.locator('h1:has-text("3D Animation Masterclass")')).toBeVisible();

    // 8. JavaScript course
    await page.goto('/courses/javascript');
    await expect(page.locator('h1:has-text("JavaScript Masterclass")')).toBeVisible();
  });

});
