import { test, expect, Page } from '@playwright/test';
import {
  HTMLCSS_BEGINNER_TASKS,
  HTMLCSS_BEGINNER_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/html-css/htmlCssBeginner.data';
import {
  HTMLCSS_INTERMEDIATE_TASKS,
  HTMLCSS_INTERMEDIATE_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/html-css/htmlCssIntermediate.data';
import {
  HTMLCSS_ADVANCED_TASKS,
  HTMLCSS_ADVANCED_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/html-css/htmlCssAdvanced.data';
import { HtmlCssCourseService } from '../src/features/roadmap/services/htmlCssCourse.service';
import { QuizQuestion } from '../src/features/roadmap/types/roadmap.types';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000006',
      email: 'frontend.architect@skillora.ai',
      firstName: 'Taylor',
      role: 'web_developer',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-htmlcss-playwright',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  }, customUserId);
}

// Reset HTML & CSS Course state in localStorage
async function resetHtmlCssCourseState(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.removeItem('skillora_html_css_course_progress');
  });
}

test.describe('Skillora AI - HTML & CSS Masterclass Comprehensive E2E Verification', () => {
  test.setTimeout(60000);

  // ==========================================
  // SECTION 1: DATA FIDELITY & CURRICULUM DEPTH
  // ==========================================

  test('1. Module & Task Counts Verification Across All Levels', async () => {
    // Beginner: 12 theory + 1 capstone project + 1 final assessment = 14 tasks
    expect(HTMLCSS_BEGINNER_TASKS.length).toBe(14);
    const begTheory = HTMLCSS_BEGINNER_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const begProjects = HTMLCSS_BEGINNER_TASKS.filter((t) => t.isProject);
    expect(begTheory.length).toBe(12);
    expect(begProjects.length).toBe(1);

    // Intermediate: 14 theory + 1 capstone project + 1 final assessment = 16 tasks
    expect(HTMLCSS_INTERMEDIATE_TASKS.length).toBe(16);
    const intTheory = HTMLCSS_INTERMEDIATE_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const intProjects = HTMLCSS_INTERMEDIATE_TASKS.filter((t) => t.isProject);
    expect(intTheory.length).toBe(14);
    expect(intProjects.length).toBe(1);

    // Advanced: 14 theory + 2 production projects + 1 final assessment = 17 tasks
    expect(HTMLCSS_ADVANCED_TASKS.length).toBe(17);
    const advTheory = HTMLCSS_ADVANCED_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const advProjects = HTMLCSS_ADVANCED_TASKS.filter((t) => t.isProject);
    expect(advTheory.length).toBe(14);
    expect(advProjects.length).toBe(2);

    // Total course tasks: 14 + 16 + 17 = 47
    const totalTasks = HTMLCSS_BEGINNER_TASKS.length + HTMLCSS_INTERMEDIATE_TASKS.length + HTMLCSS_ADVANCED_TASKS.length;
    expect(totalTasks).toBe(47);
  });

  test('2. Strict Content Depth: Every Theory Module has >= 3 Practical Examples & Line-by-Line Breakdowns', async () => {
    const allTheoryTasks = [
      ...HTMLCSS_BEGINNER_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment),
      ...HTMLCSS_INTERMEDIATE_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment),
      ...HTMLCSS_ADVANCED_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment),
    ];

    expect(allTheoryTasks.length).toBe(40); // Exactly 40 theory modules

    for (const task of allTheoryTasks) {
      const content = task.lessonContent!;
      expect(content.overview.length, `Module ${task.id} overview is too short`).toBeGreaterThan(100);
      
      const snippets = content.sections.flatMap((s) => s.codeSnippets || []);
      expect(snippets.length, `Module ${task.id} must have at least 3 snippets`).toBeGreaterThanOrEqual(3);

      for (const [idx, example] of snippets.entries()) {
        expect(example.code.trim().length, `Module ${task.id} example ${idx} code is empty`).toBeGreaterThan(15);
        expect(example.explanation?.trim().length, `Module ${task.id} example ${idx} missing explanation`).toBeGreaterThan(10);
      }
    }
  });

  test('3. Exact Final MCQ Pool Counts and Passing Thresholds', async () => {
    // Beginner: exactly 20 questions, pass threshold 15
    expect(HTMLCSS_BEGINNER_FINAL_ASSESSMENT.length).toBe(20);
    const begAssessmentTask = HTMLCSS_BEGINNER_TASKS.find((t) => t.isFinalAssessment);
    expect(begAssessmentTask?.passingScore).toBe(15);
    expect(begAssessmentTask?.totalQuestions).toBe(20);

    // Intermediate: exactly 30 questions, pass threshold 25
    expect(HTMLCSS_INTERMEDIATE_FINAL_ASSESSMENT.length).toBe(30);
    const intAssessmentTask = HTMLCSS_INTERMEDIATE_TASKS.find((t) => t.isFinalAssessment);
    expect(intAssessmentTask?.passingScore).toBe(25);
    expect(intAssessmentTask?.totalQuestions).toBe(30);

    // Advanced: exactly 40 questions, pass threshold 35
    expect(HTMLCSS_ADVANCED_FINAL_ASSESSMENT.length).toBe(40);
    const advAssessmentTask = HTMLCSS_ADVANCED_TASKS.find((t) => t.isFinalAssessment);
    expect(advAssessmentTask?.passingScore).toBe(35);
    expect(advAssessmentTask?.totalQuestions).toBe(40);

    // Verify all 90 MCQs have exactly 4 options and valid answer index
    const allMCQs: QuizQuestion[] = [
      ...HTMLCSS_BEGINNER_FINAL_ASSESSMENT,
      ...HTMLCSS_INTERMEDIATE_FINAL_ASSESSMENT,
      ...HTMLCSS_ADVANCED_FINAL_ASSESSMENT,
    ];
    expect(allMCQs.length).toBe(90);

    const questionIds = new Set<number>();
    for (const q of allMCQs) {
      expect(q.options.length).toBe(4);
      expect([0, 1, 2, 3]).toContain(q.correctAnswer);
      expect(q.explanation).toBeTruthy();
    }
  });

  // ==========================================
  // SECTION 2: DISCOVERY & ROUTING
  // ==========================================

  test('4. HTML & CSS Course Discovered in Catalog and Search', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetHtmlCssCourseState(page);

    // 1. Visit Catalog
    await page.goto('/courses');
    await expect(page.locator('h1')).toContainText('Structured Skill Courses');

    // 2. Locate HTML & CSS Masterclass card
    const courseCard = page.locator('text=HTML & CSS Masterclass').first();
    await expect(courseCard).toBeVisible();

    // 3. Navigate into HTML & CSS course
    await courseCard.click();
    await page.waitForURL('**/courses/html-css');
    await expect(page.locator('h1')).toContainText('HTML & CSS Masterclass');
  });

  test('5. Alternative Route /courses/html-css-masterclass redirects cleanly', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetHtmlCssCourseState(page);

    await page.goto('/courses/html-css-masterclass');
    await page.waitForURL('**/courses/html-css');
    await expect(page.locator('h1')).toContainText('HTML & CSS Masterclass');
  });

  // ==========================================
  // SECTION 3: INITIAL GATING & ANTI-BYPASS
  // ==========================================

  test('6. Initial Level State: Beginner Unlocked, Intermediate & Advanced Locked', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetHtmlCssCourseState(page);

    await page.goto('/courses/html-css');

    // Verify Beginner is active/unlocked
    const begTab = page.locator('button:has-text("Beginner")').first();
    await expect(begTab).toBeVisible();

    // Click locked Intermediate level tab
    const intermediateTab = page.locator('button:has-text("Intermediate")').first();
    await intermediateTab.click();

    // Verify Prerequisite Modal appears
    await expect(page.locator('text=Prerequisite Required')).toBeVisible();
    await expect(page.locator('text=Requires Beginner score')).toBeVisible();
  });

  test('7. Direct URL and Search Parameter Gating Bypass Prevention', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetHtmlCssCourseState(page);

    // Attempt direct URL query string bypass to advanced
    await page.goto('/courses/html-css?level=advanced');

    // Verify Prerequisite modal interrupts and forces prerequisite compliance
    await expect(page.locator('text=Prerequisite Required')).toBeVisible();
  });

  // ==========================================
  // SECTION 4: PROGRESSION, RETAKE & CERTIFICATE
  // ==========================================

  test('8. Assessment Failure Behavior: Displays Score, Threshold, Weak Areas, and Retake Option', async () => {
    HtmlCssCourseService.resetCourseState();

    // Submit failing score (10/20 < 15)
    const failingAnswers: Record<number, number> = {};
    HTMLCSS_BEGINNER_FINAL_ASSESSMENT.forEach((q, idx) => {
      // 10 correct, 10 incorrect
      failingAnswers[q.id] = idx < 10 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });

    const result = HtmlCssCourseService.submitAssessment('beginner', failingAnswers, HTMLCSS_BEGINNER_FINAL_ASSESSMENT);
    expect(result.passed).toBeFalsy();
    expect(result.score).toBe(10);
    expect(result.requiredScore).toBe(15);
    expect(result.weakAreas.length).toBeGreaterThan(0);

    // Verify Intermediate level remains locked
    const state = HtmlCssCourseService.getCourseState();
    expect(state.levels.intermediate.status).toBe('locked');
    expect(HtmlCssCourseService.checkLevelPrerequisites('intermediate', state).canUnlock).toBeFalsy();

    // Verify retake resets score while preserving state
    const retakeState = HtmlCssCourseService.retakeAssessment('beginner');
    expect(retakeState.levels.beginner.assessmentScore).toBeUndefined();
    expect(retakeState.levels.beginner.assessmentPassed).toBeFalsy();
  });

  test('9. Full Course Progression Flow: Beginner -> Intermediate -> Advanced -> Master Certificate', async () => {
    HtmlCssCourseService.resetCourseState();

    // 1. Complete Beginner Theory (12 modules) & Project
    for (const task of HTMLCSS_BEGINNER_TASKS.filter((t) => !t.isFinalAssessment)) {
      HtmlCssCourseService.completeTask('beginner', task.id);
    }

    // 2. Pass Beginner Assessment (20/20 >= 15)
    const perfectBegAnswers: Record<number, number> = {};
    HTMLCSS_BEGINNER_FINAL_ASSESSMENT.forEach((q) => {
      perfectBegAnswers[q.id] = q.correctAnswer;
    });
    const begResult = HtmlCssCourseService.submitAssessment('beginner', perfectBegAnswers, HTMLCSS_BEGINNER_FINAL_ASSESSMENT);
    expect(begResult.passed).toBeTruthy();
    expect(begResult.state.levels.intermediate.status).toBe('in_progress');

    // 3. Switch to Intermediate
    const switchInter = HtmlCssCourseService.switchLevel('intermediate');
    expect(switchInter.success).toBeTruthy();

    // 4. Complete Intermediate Theory (14 modules) & Project
    for (const task of HTMLCSS_INTERMEDIATE_TASKS.filter((t) => !t.isFinalAssessment)) {
      HtmlCssCourseService.completeTask('intermediate', task.id);
    }

    // 5. Pass Intermediate Assessment (30/30 >= 25)
    const perfectIntAnswers: Record<number, number> = {};
    HTMLCSS_INTERMEDIATE_FINAL_ASSESSMENT.forEach((q) => {
      perfectIntAnswers[q.id] = q.correctAnswer;
    });
    const intResult = HtmlCssCourseService.submitAssessment('intermediate', perfectIntAnswers, HTMLCSS_INTERMEDIATE_FINAL_ASSESSMENT);
    expect(intResult.passed).toBeTruthy();
    expect(intResult.state.levels.advanced.status).toBe('in_progress');

    // 6. Switch to Advanced
    const switchAdv = HtmlCssCourseService.switchLevel('advanced');
    expect(switchAdv.success).toBeTruthy();

    // 7. Complete Advanced Theory (14 modules) & 2 Projects
    for (const task of HTMLCSS_ADVANCED_TASKS.filter((t) => !t.isFinalAssessment)) {
      HtmlCssCourseService.completeTask('advanced', task.id);
    }

    // 8. Pass Advanced Master Assessment (38/40 >= 35)
    const passingAdvAnswers: Record<number, number> = {};
    HTMLCSS_ADVANCED_FINAL_ASSESSMENT.forEach((q, idx) => {
      passingAdvAnswers[q.id] = idx < 38 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });
    const advResult = HtmlCssCourseService.submitAssessment('advanced', passingAdvAnswers, HTMLCSS_ADVANCED_FINAL_ASSESSMENT);
    expect(advResult.passed).toBeTruthy();
    expect(advResult.score).toBe(38);

    // 9. Verify Master Certificate Eligibility
    const certEligibility = HtmlCssCourseService.isEligibleForMasterCertificate(advResult.state);
    expect(certEligibility.isEligible).toBeTruthy();
    expect(certEligibility.advScore).toBe(38);
    expect(certEligibility.overallProgress).toBe(100);
  });

  // ==========================================
  // SECTION 5: RESPONSIVENESS & REGRESSION
  // ==========================================

  test('10. Mobile Responsiveness at 375px Viewport Width', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await setAuthenticatedUser(page);

    await page.goto('/courses/html-css');
    await expect(page.locator('h1')).toContainText('HTML & CSS Masterclass');

    // Verify timeline tasks are clickable
    const firstTask = page.locator('text=Module 1: Introduction to Web Development').first();
    await expect(firstTask).toBeVisible();
    await firstTask.click();

    // Verify drawer opened smoothly on mobile
    await expect(page.locator('text=Start Learning Lesson').first()).toBeVisible();

    // Verify no horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const windowWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
  });

  test('11. Regression Check: Python, Shopify Liquid, Meta Ads, SEO, and Prompt Engineering Remain Operational', async ({ page }) => {
    await setAuthenticatedUser(page);

    // Python Course
    await page.goto('/courses/python');
    await expect(page.locator('h1')).toContainText('Python Masterclass');

    // Shopify Liquid Course
    await page.goto('/courses/shopify');
    await expect(page.locator('h1')).toContainText('Shopify Liquid');

    // Meta Ads Course
    await page.goto('/courses/meta-ads');
    await expect(page.locator('h1')).toContainText('Meta Ads');

    // SEO Course
    await page.goto('/courses/seo');
    await expect(page.locator('h1')).toContainText('SEO — Search Engine Optimization');

    // Prompt Engineering Course
    await page.goto('/courses/prompt-engineering');
    await expect(page.locator('h1')).toContainText('Prompt Engineering');
  });
});
