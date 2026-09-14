import { test, expect, Page } from '@playwright/test';
import {
  JAVASCRIPT_BEGINNER_TASKS,
  JAVASCRIPT_BEGINNER_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/javascript/javascriptBeginner.data';
import {
  JAVASCRIPT_INTERMEDIATE_TASKS,
  JAVASCRIPT_INTERMEDIATE_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/javascript/javascriptIntermediate.data';
import {
  JAVASCRIPT_ADVANCED_TASKS,
  JAVASCRIPT_ADVANCED_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/javascript/javascriptAdvanced.data';
import {
  INITIAL_JAVASCRIPT_LEVELS,
  INITIAL_JAVASCRIPT_COURSE_STATE,
} from '../src/features/roadmap/data/javascript';
import { JavaScriptCourseService } from '../src/features/roadmap/services/javascriptCourse.service';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000003',
      email: 'js.developer@skillora.ai',
      firstName: 'Alex',
      role: 'fullstack_developer',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-js-playwright',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  }, customUserId);
}

// Reset JavaScript Course state in localStorage
async function resetJavaScriptCourseState(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.removeItem('skillora_javascript_course_progress');
  });
}

test.describe('Skillora AI - JavaScript Masterclass Comprehensive E2E Verification', () => {
  test.setTimeout(60000);

  // ==========================================
  // SECTION 1: DATA FIDELITY & CURRICULUM AUDIT
  // ==========================================

  test('1. Exact Course Tasks & Modules Count Audit', async () => {
    // Beginner: 12 theory + 1 project + 1 final assessment = 14 tasks
    expect(JAVASCRIPT_BEGINNER_TASKS.length).toBe(14);
    const begTheory = JAVASCRIPT_BEGINNER_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const begProjects = JAVASCRIPT_BEGINNER_TASKS.filter((t) => t.isProject);
    const begAssessments = JAVASCRIPT_BEGINNER_TASKS.filter((t) => t.isFinalAssessment);
    expect(begTheory.length).toBe(12);
    expect(begProjects.length).toBe(1);
    expect(begAssessments.length).toBe(1);

    // Intermediate: 14 theory + 1 project + 1 final assessment = 16 tasks
    expect(JAVASCRIPT_INTERMEDIATE_TASKS.length).toBe(16);
    const intTheory = JAVASCRIPT_INTERMEDIATE_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const intProjects = JAVASCRIPT_INTERMEDIATE_TASKS.filter((t) => t.isProject);
    const intAssessments = JAVASCRIPT_INTERMEDIATE_TASKS.filter((t) => t.isFinalAssessment);
    expect(intTheory.length).toBe(14);
    expect(intProjects.length).toBe(1);
    expect(intAssessments.length).toBe(1);

    // Advanced: 14 theory + 2 projects + 1 final assessment = 17 tasks
    expect(JAVASCRIPT_ADVANCED_TASKS.length).toBe(17);
    const advTheory = JAVASCRIPT_ADVANCED_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const advProjects = JAVASCRIPT_ADVANCED_TASKS.filter((t) => t.isProject);
    const advAssessments = JAVASCRIPT_ADVANCED_TASKS.filter((t) => t.isFinalAssessment);
    expect(advTheory.length).toBe(14);
    expect(advProjects.length).toBe(2);
    expect(advAssessments.length).toBe(1);

    // Total counts
    const totalTheory = begTheory.length + intTheory.length + advTheory.length;
    const totalProjects = begProjects.length + intProjects.length + advProjects.length;
    const totalAssessments = begAssessments.length + intAssessments.length + advAssessments.length;
    const totalTasks = JAVASCRIPT_BEGINNER_TASKS.length + JAVASCRIPT_INTERMEDIATE_TASKS.length + JAVASCRIPT_ADVANCED_TASKS.length;

    expect(totalTheory).toBe(40);
    expect(totalProjects).toBe(4);
    expect(totalAssessments).toBe(3);
    expect(totalTasks).toBe(47);
  });

  test('2. Strict Content Depth: Every Theory Module has >= 3 Practical Examples & Line-by-Line Breakdowns', async () => {
    const allTheoryTasks = [
      ...JAVASCRIPT_BEGINNER_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject),
      ...JAVASCRIPT_INTERMEDIATE_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject),
      ...JAVASCRIPT_ADVANCED_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject),
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
      ...JAVASCRIPT_BEGINNER_TASKS.filter((t) => t.isProject),
      ...JAVASCRIPT_INTERMEDIATE_TASKS.filter((t) => t.isProject),
      ...JAVASCRIPT_ADVANCED_TASKS.filter((t) => t.isProject),
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
    expect(JAVASCRIPT_BEGINNER_FINAL_ASSESSMENT.length).toBe(20);
    expect(JAVASCRIPT_INTERMEDIATE_FINAL_ASSESSMENT.length).toBe(30);
    expect(JAVASCRIPT_ADVANCED_FINAL_ASSESSMENT.length).toBe(40);

    const totalMCQs = JAVASCRIPT_BEGINNER_FINAL_ASSESSMENT.length +
      JAVASCRIPT_INTERMEDIATE_FINAL_ASSESSMENT.length +
      JAVASCRIPT_ADVANCED_FINAL_ASSESSMENT.length;
    expect(totalMCQs).toBe(90);

    expect(INITIAL_JAVASCRIPT_LEVELS.beginner.requiredScore).toBe(15);
    expect(INITIAL_JAVASCRIPT_LEVELS.intermediate.requiredScore).toBe(25);
    expect(INITIAL_JAVASCRIPT_LEVELS.advanced.requiredScore).toBe(35);

    const allMCQs = [
      ...JAVASCRIPT_BEGINNER_FINAL_ASSESSMENT,
      ...JAVASCRIPT_INTERMEDIATE_FINAL_ASSESSMENT,
      ...JAVASCRIPT_ADVANCED_FINAL_ASSESSMENT,
    ];

    const distribution = { 0: 0, 1: 0, 2: 0, 3: 0 };
    for (const [idx, q] of allMCQs.entries()) {
      expect(q.question.length, `MCQ ${idx + 1} has insufficient question length`).toBeGreaterThan(15);
      expect(q.options.length, `MCQ ${idx + 1} must have 4 options`).toBe(4);
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer).toBeLessThanOrEqual(3);
      expect(q.explanation.length, `MCQ ${idx + 1} explanation too short`).toBeGreaterThan(20);
      expect(q.topic.length, `MCQ ${idx + 1} missing topic`).toBeGreaterThan(2);
      distribution[q.correctAnswer]++;
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
    await setAuthenticatedUser(page, 'js-user-catalog');
    await resetJavaScriptCourseState(page);
    await page.goto('/courses');

    await expect(page.locator('h1')).toContainText('Structured Skill Courses');
    
    // Check JavaScript Masterclass card is present
    await expect(page.locator('text=JavaScript Masterclass').first()).toBeVisible();
    await expect(page.locator('text=47 Modules').first()).toBeVisible();
  });

  test('6. Search service and search bar finds JavaScript Masterclass', async ({ page }) => {
    await setAuthenticatedUser(page, 'js-user-search');
    await page.goto('/dashboard');

    // UI search test
    const searchInput = page.locator('input[placeholder*="Search"]');
    if (await searchInput.isVisible()) {
      await searchInput.fill('javascript');
      await expect(page.locator('text=JavaScript Masterclass').first()).toBeVisible({ timeout: 5000 });
    }
  });

  test('7. Primary route /courses/javascript opens correctly', async ({ page }) => {
    await setAuthenticatedUser(page, 'js-user-route');
    await resetJavaScriptCourseState(page);
    await page.goto('/courses/javascript');

    await expect(page.locator('h1:has-text("JavaScript Masterclass")')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=Web Development Track')).toBeVisible();
  });

  test('8. Alias route /courses/javascript-masterclass redirects cleanly to primary route', async ({ page }) => {
    await setAuthenticatedUser(page, 'js-user-alias');
    await page.goto('/courses/javascript-masterclass');

    await expect(page).toHaveURL(/\/courses\/javascript/, { timeout: 15000 });
    await expect(page.locator('h1:has-text("JavaScript Masterclass")')).toBeVisible({ timeout: 10000 });
  });

  // ==========================================
  // SECTION 3: LEVEL GATING & PREREQUISITE DEFENSE
  // ==========================================

  test('9. Beginner is unlocked initially, Intermediate and Advanced are initially locked', async ({ page }) => {
    await setAuthenticatedUser(page, 'js-user-gating-init');
    await resetJavaScriptCourseState(page);
    await page.goto('/courses/javascript');

    // Beginner modules timeline visible
    await expect(page.locator('text=Introduction to JavaScript and the Web').first()).toBeVisible();

    // Clicking Intermediate triggers Prerequisite Modal
    await page.click('button:has-text("Level 2: Intermediate")');
    await expect(page.locator('text=Level 2: JavaScript Intermediate is Locked')).toBeVisible();
    await expect(page.locator('text=Prerequisite Required')).toBeVisible();

    // Close modal via Cancel
    await page.click('button:has-text("Cancel")');

    // Clicking Advanced triggers Prerequisite Modal
    await page.click('button:has-text("Level 3: Advanced")');
    await expect(page.locator('text=Level 3: JavaScript Advanced is Locked')).toBeVisible();
  });

  test('10. Modules open in TaskDetailDrawer with full interactive content', async ({ page }) => {
    await setAuthenticatedUser(page, 'js-user-module-open');
    await resetJavaScriptCourseState(page);
    await page.goto('/courses/javascript');
    await expect(page.locator('h1:has-text("JavaScript Masterclass")')).toBeVisible({ timeout: 15000 });

    // Click first module card
    const firstModule = page.locator('text=Introduction to JavaScript and the Web').first();
    await expect(firstModule).toBeVisible({ timeout: 15000 });
    await firstModule.click();
    
    // Drawer should open
    await expect(page.locator('h2:has-text("Introduction to JavaScript and the Web")')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('button:has-text("Start Learning Lesson")')).toBeVisible();
  });

  test('11. Direct URL query parameter bypass is strictly blocked', async ({ page }) => {
    await setAuthenticatedUser(page, 'js-user-bypass-block');
    await resetJavaScriptCourseState(page);
    
    // Attempting direct URL navigation to locked intermediate level
    await page.goto('/courses/javascript?level=intermediate');

    // Must show prerequisite modal and fallback to beginner
    await expect(page.locator('text=Level 2: JavaScript Intermediate is Locked')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Complete all 12 Beginner modules')).toBeVisible({ timeout: 15000 });
  });

  test('12. LocalStorage tampering is rejected by prerequisite engine', async ({ page }) => {
    await setAuthenticatedUser(page, 'js-user-tamper-defense');
    
    // Inject illegally modified localStorage where intermediate is claimed in_progress without completed beginner tasks
    await page.addInitScript(() => {
      const tamperedState = {
        courseId: 'javascript',
        courseTitle: 'JavaScript Masterclass',
        currentLevel: 'intermediate',
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: JavaScript Fundamentals & DOM',
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
            title: 'Level 2: Modern JavaScript & Asynchronous Architecture',
            status: 'in_progress', // ILLEGAL TAMPER
            completedTasks: 0,
            totalTasks: 16,
            assessmentPassed: false,
            requiredScore: 25,
            tasks: []
          },
          advanced: {
            level: 'advanced',
            title: 'Level 3: Runtime Mastery, Performance & Full-Stack Systems',
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
      window.localStorage.setItem('skillora_javascript_course_progress', JSON.stringify(tamperedState));
    });

    await page.goto('/courses/javascript');

    // Prerequisite validator must catch this and keep intermediate locked
    await page.click('button:has-text("Level 2: Intermediate")');
    await expect(page.locator('text=Level 2: JavaScript Intermediate is Locked')).toBeVisible();
  });

  // ==========================================
  // SECTION 4: ASSESSMENT & RETAKE WORKFLOW
  // ==========================================

  test('13. Assessment Threshold Calculations (Pass / Fail / Retake)', async () => {
    // Beginner: 14 fails, 15 passes
    expect(14 >= INITIAL_JAVASCRIPT_LEVELS.beginner.requiredScore).toBe(false);
    expect(15 >= INITIAL_JAVASCRIPT_LEVELS.beginner.requiredScore).toBe(true);

    // Intermediate: 24 fails, 25 passes
    expect(24 >= INITIAL_JAVASCRIPT_LEVELS.intermediate.requiredScore).toBe(false);
    expect(25 >= INITIAL_JAVASCRIPT_LEVELS.intermediate.requiredScore).toBe(true);

    // Advanced: 34 fails, 35 passes
    expect(34 >= INITIAL_JAVASCRIPT_LEVELS.advanced.requiredScore).toBe(false);
    expect(35 >= INITIAL_JAVASCRIPT_LEVELS.advanced.requiredScore).toBe(true);
  });

  test('14. Full Level Progression: Beginner Pass Unlocks Intermediate, Intermediate Pass Unlocks Advanced', async () => {
    // 1. Pristine state
    let state = JSON.parse(JSON.stringify(INITIAL_JAVASCRIPT_COURSE_STATE));
    expect(JavaScriptCourseService.checkLevelPrerequisites('intermediate', state).canUnlock).toBe(false);
    expect(JavaScriptCourseService.checkLevelPrerequisites('advanced', state).canUnlock).toBe(false);

    // 2. Complete all Beginner theory and project
    state.levels.beginner.tasks.forEach(t => {
      if (!t.isFinalAssessment) t.status = 'completed';
    });
    // Still locked without passing exam
    expect(JavaScriptCourseService.checkLevelPrerequisites('intermediate', state).canUnlock).toBe(false);

    // 3. Pass Beginner Assessment with 18/20
    state.levels.beginner.assessmentScore = 18;
    state.levels.beginner.assessmentPassed = true;
    expect(JavaScriptCourseService.checkLevelPrerequisites('intermediate', state).canUnlock).toBe(true);
    expect(JavaScriptCourseService.checkLevelPrerequisites('advanced', state).canUnlock).toBe(false);

    // 4. Complete all Intermediate theory and project
    state.levels.intermediate.tasks.forEach(t => {
      if (!t.isFinalAssessment) t.status = 'completed';
    });
    // Still locked without passing intermediate exam
    expect(JavaScriptCourseService.checkLevelPrerequisites('advanced', state).canUnlock).toBe(false);

    // 5. Pass Intermediate Assessment with 28/30
    state.levels.intermediate.assessmentScore = 28;
    state.levels.intermediate.assessmentPassed = true;
    expect(JavaScriptCourseService.checkLevelPrerequisites('advanced', state).canUnlock).toBe(true);

    // 6. Complete all Advanced tasks and pass Master Assessment with 38/40
    state.levels.advanced.tasks.forEach(t => {
      if (!t.isFinalAssessment) t.status = 'completed';
    });
    state.levels.advanced.assessmentScore = 38;
    state.levels.advanced.assessmentPassed = true;

    const certEligibility = JavaScriptCourseService.isEligibleForMasterCertificate(state);
    expect(certEligibility.isEligible).toBe(true);
    expect(certEligibility.advScore).toBe(38);
  });

  // ==========================================
  // SECTION 5: CERTIFICATE SYSTEM
  // ==========================================

  test('15. Certificate is locked before full completion and unlocks after 100% requirements', async ({ page }) => {
    await setAuthenticatedUser(page, 'js-user-cert-flow');
    
    // Incomplete state -> Certificate banner is NOT visible
    await page.addInitScript(() => {
      window.localStorage.setItem('skillora_javascript_course_progress', JSON.stringify(INITIAL_JAVASCRIPT_COURSE_STATE));
    });
    await page.goto('/courses/javascript');
    await expect(page.locator('text=Master JavaScript Developer Certified')).not.toBeVisible();

    // Inject 100% completed valid state
    await page.addInitScript(() => {
      const fullState = {
        courseId: 'javascript',
        courseTitle: 'JavaScript Masterclass',
        currentLevel: 'advanced',
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: JavaScript Fundamentals & DOM',
            status: 'completed',
            completedTasks: 14,
            totalTasks: 14,
            progressPercentage: 100,
            assessmentPassed: true,
            assessmentScore: 20,
            requiredScore: 15,
            tasks: [
              { id: 'js-beg-01', status: 'completed' },
              { id: 'js-beg-02', status: 'completed' },
              { id: 'js-beg-03', status: 'completed' },
              { id: 'js-beg-04', status: 'completed' },
              { id: 'js-beg-05', status: 'completed' },
              { id: 'js-beg-06', status: 'completed' },
              { id: 'js-beg-07', status: 'completed' },
              { id: 'js-beg-08', status: 'completed' },
              { id: 'js-beg-09', status: 'completed' },
              { id: 'js-beg-10', status: 'completed' },
              { id: 'js-beg-11', status: 'completed' },
              { id: 'js-beg-12', status: 'completed' },
              { id: 'js-beg-p1', isProject: true, status: 'completed' },
              { id: 'js-beg-assessment', isFinalAssessment: true, status: 'completed' }
            ]
          },
          intermediate: {
            level: 'intermediate',
            title: 'Level 2: Modern JavaScript & Asynchronous Architecture',
            status: 'completed',
            completedTasks: 16,
            totalTasks: 16,
            progressPercentage: 100,
            assessmentPassed: true,
            assessmentScore: 30,
            requiredScore: 25,
            tasks: [
              { id: 'js-int-01', status: 'completed' },
              { id: 'js-int-02', status: 'completed' },
              { id: 'js-int-03', status: 'completed' },
              { id: 'js-int-04', status: 'completed' },
              { id: 'js-int-05', status: 'completed' },
              { id: 'js-int-06', status: 'completed' },
              { id: 'js-int-07', status: 'completed' },
              { id: 'js-int-08', status: 'completed' },
              { id: 'js-int-09', status: 'completed' },
              { id: 'js-int-10', status: 'completed' },
              { id: 'js-int-11', status: 'completed' },
              { id: 'js-int-12', status: 'completed' },
              { id: 'js-int-13', status: 'completed' },
              { id: 'js-int-14', status: 'completed' },
              { id: 'js-int-p1', isProject: true, status: 'completed' },
              { id: 'js-int-assessment', isFinalAssessment: true, status: 'completed' }
            ]
          },
          advanced: {
            level: 'advanced',
            title: 'Level 3: Runtime Mastery, Performance & Full-Stack Systems',
            status: 'completed',
            completedTasks: 17,
            totalTasks: 17,
            progressPercentage: 100,
            assessmentPassed: true,
            assessmentScore: 40,
            requiredScore: 35,
            tasks: [
              { id: 'js-adv-01', status: 'completed' },
              { id: 'js-adv-02', status: 'completed' },
              { id: 'js-adv-03', status: 'completed' },
              { id: 'js-adv-04', status: 'completed' },
              { id: 'js-adv-05', status: 'completed' },
              { id: 'js-adv-06', status: 'completed' },
              { id: 'js-adv-07', status: 'completed' },
              { id: 'js-adv-08', status: 'completed' },
              { id: 'js-adv-09', status: 'completed' },
              { id: 'js-adv-10', status: 'completed' },
              { id: 'js-adv-11', status: 'completed' },
              { id: 'js-adv-12', status: 'completed' },
              { id: 'js-adv-13', status: 'completed' },
              { id: 'js-adv-14', status: 'completed' },
              { id: 'js-adv-p1', isProject: true, status: 'completed' },
              { id: 'js-adv-p2', isProject: true, status: 'completed' },
              { id: 'js-adv-assessment', isFinalAssessment: true, status: 'completed' }
            ]
          }
        },
        overallProgress: 100
      };
      window.localStorage.setItem('skillora_javascript_course_progress', JSON.stringify(fullState));
    });

    await page.goto('/courses/javascript');
    
    // Now Master Certificate Unlocked Hero Banner must be visible
    await expect(page.locator('text=Master JavaScript Developer Certified')).toBeVisible();
    await expect(page.locator('button:has-text("View & Claim Master Certificate")')).toBeVisible();
  });

  // ==========================================
  // SECTION 6: RESPONSIVE QA & REGRESSION
  // ==========================================

  test('16. Mobile Viewport (375px) Layout and No Horizontal Overflow', async ({ page }) => {
    await setAuthenticatedUser(page, 'js-user-mobile');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/courses/javascript');

    await expect(page.locator('h1:has-text("JavaScript Masterclass")')).toBeVisible({ timeout: 10000 });

    // Verify document does not horizontally overflow
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalScroll).toBe(false);
  });

  test('17. Desktop Viewport (1280px) Layout and Navigation', async ({ page }) => {
    await setAuthenticatedUser(page, 'js-user-desktop');
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/courses/javascript');

    await expect(page.locator('h1:has-text("JavaScript Masterclass")')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=Overall Course Progress')).toBeVisible();
  });

  test('18. Existing Skillora Courses Regression Check', async ({ page }) => {
    await setAuthenticatedUser(page, 'js-user-regression');

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
  });

});
