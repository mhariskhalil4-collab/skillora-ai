import { test, expect, Page } from '@playwright/test';
import {
  THREE_D_BEGINNER_TASKS,
  THREE_D_BEGINNER_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/3d-animation/threeDAnimationBeginner.data';
import {
  THREE_D_INTERMEDIATE_TASKS,
  THREE_D_INTERMEDIATE_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/3d-animation/threeDAnimationIntermediate.data';
import {
  THREE_D_ADVANCED_TASKS,
  THREE_D_ADVANCED_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/3d-animation/threeDAnimationAdvanced.data';
import { ThreeDAnimationCourseService } from '../src/features/roadmap/services/threeDAnimationCourse.service';
import { QuizQuestion } from '../src/features/roadmap/types/roadmap.types';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000007',
      email: 'threed.animator@skillora.ai',
      firstName: 'Jordan',
      role: '3d_artist',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-threed-playwright',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  }, customUserId);
}

// Reset 3D Animation Course state in localStorage
async function resetThreeDCourseState(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.removeItem('skillora_3d_animation_course_progress');
  });
}

test.describe('Skillora AI - 3D Animation Masterclass Comprehensive E2E Verification', () => {

  // ==========================================
  // SECTION 1: DATA FIDELITY & CURRICULUM DEPTH
  // ==========================================

  test('1. Module & Task Counts Verification Across All Levels', async () => {
    // Beginner: 12 theory + 1 capstone project + 1 final assessment = 14 tasks
    expect(THREE_D_BEGINNER_TASKS.length).toBe(14);
    const begTheory = THREE_D_BEGINNER_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const begProjects = THREE_D_BEGINNER_TASKS.filter((t) => t.isProject);
    expect(begTheory.length).toBe(12);
    expect(begProjects.length).toBe(1);

    // Intermediate: 14 theory + 1 capstone project + 1 final assessment = 16 tasks
    expect(THREE_D_INTERMEDIATE_TASKS.length).toBe(16);
    const intTheory = THREE_D_INTERMEDIATE_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const intProjects = THREE_D_INTERMEDIATE_TASKS.filter((t) => t.isProject);
    expect(intTheory.length).toBe(14);
    expect(intProjects.length).toBe(1);

    // Advanced: 14 theory + 2 capstone projects + 1 final assessment = 17 tasks
    expect(THREE_D_ADVANCED_TASKS.length).toBe(17);
    const advTheory = THREE_D_ADVANCED_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const advProjects = THREE_D_ADVANCED_TASKS.filter((t) => t.isProject);
    expect(advTheory.length).toBe(14);
    expect(advProjects.length).toBe(2);

    // Total course tasks: 14 + 16 + 17 = 47
    const totalTasks = THREE_D_BEGINNER_TASKS.length + THREE_D_INTERMEDIATE_TASKS.length + THREE_D_ADVANCED_TASKS.length;
    expect(totalTasks).toBe(47);
  });

  test('2. Strict Content Depth: Every Theory Module has >= 3 Practical Sections & Code Snippets', async () => {
    const allTheoryTasks = [
      ...THREE_D_BEGINNER_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment),
      ...THREE_D_INTERMEDIATE_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment),
      ...THREE_D_ADVANCED_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment),
    ];

    expect(allTheoryTasks.length).toBe(40); // Exactly 40 theory modules

    for (const task of allTheoryTasks) {
      const content = task.lessonContent!;
      expect(content.overview.length, `Module ${task.id} overview is too short`).toBeGreaterThan(100);
      expect(content.sections.length, `Module ${task.id} must have >= 3 sections`).toBeGreaterThanOrEqual(3);
      
      const snippets = content.sections.flatMap((s) => s.codeSnippets || []);
      expect(snippets.length, `Module ${task.id} must contain practical snippets`).toBeGreaterThanOrEqual(1);

      for (const [idx, example] of snippets.entries()) {
        expect(example.code.trim().length, `Module ${task.id} example ${idx} code is empty`).toBeGreaterThan(15);
        expect(example.explanation?.trim().length, `Module ${task.id} example ${idx} missing explanation`).toBeGreaterThan(10);
      }
    }
  });

  test('3. Exact Final MCQ Pool Counts and Passing Thresholds', async () => {
    // Beginner: exactly 20 questions, pass threshold 15
    expect(THREE_D_BEGINNER_FINAL_ASSESSMENT.length).toBe(20);
    const begAssessmentTask = THREE_D_BEGINNER_TASKS.find((t) => t.isFinalAssessment);
    expect(begAssessmentTask?.passingScore).toBe(15);
    expect(begAssessmentTask?.totalQuestions).toBe(20);

    // Intermediate: exactly 30 questions, pass threshold 25
    expect(THREE_D_INTERMEDIATE_FINAL_ASSESSMENT.length).toBe(30);
    const intAssessmentTask = THREE_D_INTERMEDIATE_TASKS.find((t) => t.isFinalAssessment);
    expect(intAssessmentTask?.passingScore).toBe(25);
    expect(intAssessmentTask?.totalQuestions).toBe(30);

    // Advanced: exactly 40 questions, pass threshold 35
    expect(THREE_D_ADVANCED_FINAL_ASSESSMENT.length).toBe(40);
    const advAssessmentTask = THREE_D_ADVANCED_TASKS.find((t) => t.isFinalAssessment);
    expect(advAssessmentTask?.passingScore).toBe(35);
    expect(advAssessmentTask?.totalQuestions).toBe(40);

    // Verify all 90 MCQs have exactly 4 options and valid answer index
    const allMCQs: QuizQuestion[] = [
      ...THREE_D_BEGINNER_FINAL_ASSESSMENT,
      ...THREE_D_INTERMEDIATE_FINAL_ASSESSMENT,
      ...THREE_D_ADVANCED_FINAL_ASSESSMENT,
    ];
    expect(allMCQs.length).toBe(90);

    for (const q of allMCQs) {
      expect(q.options.length).toBe(4);
      expect([0, 1, 2, 3]).toContain(q.correctAnswer);
      expect(q.explanation).toBeTruthy();
    }
  });

  // ==========================================
  // SECTION 2: DISCOVERY & ROUTING
  // ==========================================

  test('4. 3D Animation Course Discovered in Catalog and Search', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetThreeDCourseState(page);

    // 1. Visit Catalog
    await page.goto('/courses');
    await expect(page.locator('h1')).toContainText('Structured Skill Courses');

    // 2. Locate 3D Animation Masterclass card
    const courseCard = page.locator('text=3D Animation Masterclass').first();
    await expect(courseCard).toBeVisible();

    // 3. Navigate into 3D Animation course
    await courseCard.click();
    await page.waitForURL('**/courses/3d-animation');
    await expect(page.locator('h1')).toContainText('3D Animation Masterclass');
  });

  test('5. Alias Route /courses/3d-animation-masterclass redirects cleanly', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetThreeDCourseState(page);

    await page.goto('/courses/3d-animation-masterclass');
    await page.waitForURL('**/courses/3d-animation');
    await expect(page.locator('h1')).toContainText('3D Animation Masterclass');
  });

  // ==========================================
  // SECTION 3: INITIAL GATING & ANTI-BYPASS
  // ==========================================

  test('6. Initial Level State: Beginner Unlocked, Intermediate & Advanced Locked', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetThreeDCourseState(page);

    await page.goto('/courses/3d-animation');

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
    await resetThreeDCourseState(page);

    // Attempt direct URL query string bypass to advanced
    await page.goto('/courses/3d-animation?level=advanced');

    // Verify Prerequisite modal interrupts and forces prerequisite compliance
    await expect(page.locator('text=Prerequisite Required')).toBeVisible({ timeout: 15000 });
  });

  // ==========================================
  // SECTION 4: PROGRESSION, RETAKE & CERTIFICATE
  // ==========================================

  test('8. Assessment Failure Behavior: Displays Score, Threshold, Weak Areas, and Retake Option', async () => {
    ThreeDAnimationCourseService.resetCourseState();

    // Submit failing score (10/20 < 15)
    const failingAnswers: Record<number, number> = {};
    THREE_D_BEGINNER_FINAL_ASSESSMENT.forEach((q, idx) => {
      // 10 correct, 10 incorrect
      failingAnswers[q.id] = idx < 10 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });

    const result = ThreeDAnimationCourseService.submitAssessment('beginner', failingAnswers, THREE_D_BEGINNER_FINAL_ASSESSMENT);
    expect(result.passed).toBeFalsy();
    expect(result.score).toBe(10);
    expect(result.requiredScore).toBe(15);
    expect(result.weakAreas.length).toBeGreaterThan(0);

    // Verify Intermediate level remains locked
    const state = ThreeDAnimationCourseService.getCourseState();
    expect(state.levels.intermediate.status).toBe('locked');
    expect(ThreeDAnimationCourseService.checkLevelPrerequisites('intermediate', state).canUnlock).toBeFalsy();

    // Verify retake resets score while preserving state
    const retakeState = ThreeDAnimationCourseService.retakeAssessment('beginner');
    expect(retakeState.levels.beginner.assessmentScore).toBeUndefined();
    expect(retakeState.levels.beginner.assessmentPassed).toBeFalsy();
  });

  test('9. Full Course Progression Flow: Beginner -> Intermediate -> Advanced -> Master Certificate', async () => {
    ThreeDAnimationCourseService.resetCourseState();

    // 1. Complete Beginner Theory (12 modules) & Project
    for (const task of THREE_D_BEGINNER_TASKS.filter((t) => !t.isFinalAssessment)) {
      ThreeDAnimationCourseService.completeTask('beginner', task.id);
    }

    // 2. Pass Beginner Assessment (20/20 >= 15)
    const perfectBegAnswers: Record<number, number> = {};
    THREE_D_BEGINNER_FINAL_ASSESSMENT.forEach((q) => {
      perfectBegAnswers[q.id] = q.correctAnswer;
    });
    const begResult = ThreeDAnimationCourseService.submitAssessment('beginner', perfectBegAnswers, THREE_D_BEGINNER_FINAL_ASSESSMENT);
    expect(begResult.passed).toBeTruthy();
    expect(begResult.state.levels.intermediate.status).toBe('in_progress');

    // 3. Switch to Intermediate
    const switchInter = ThreeDAnimationCourseService.switchLevel('intermediate');
    expect(switchInter.success).toBeTruthy();

    // 4. Complete Intermediate Theory (14 modules) & Project
    for (const task of THREE_D_INTERMEDIATE_TASKS.filter((t) => !t.isFinalAssessment)) {
      ThreeDAnimationCourseService.completeTask('intermediate', task.id);
    }

    // 5. Pass Intermediate Assessment (30/30 >= 25)
    const perfectIntAnswers: Record<number, number> = {};
    THREE_D_INTERMEDIATE_FINAL_ASSESSMENT.forEach((q) => {
      perfectIntAnswers[q.id] = q.correctAnswer;
    });
    const intResult = ThreeDAnimationCourseService.submitAssessment('intermediate', perfectIntAnswers, THREE_D_INTERMEDIATE_FINAL_ASSESSMENT);
    expect(intResult.passed).toBeTruthy();
    expect(intResult.state.levels.advanced.status).toBe('in_progress');

    // 6. Switch to Advanced
    const switchAdv = ThreeDAnimationCourseService.switchLevel('advanced');
    expect(switchAdv.success).toBeTruthy();

    // 7. Complete Advanced Theory (14 modules) & 2 Projects
    for (const task of THREE_D_ADVANCED_TASKS.filter((t) => !t.isFinalAssessment)) {
      ThreeDAnimationCourseService.completeTask('advanced', task.id);
    }

    // 8. Pass Advanced Master Assessment (38/40 >= 35)
    const passingAdvAnswers: Record<number, number> = {};
    THREE_D_ADVANCED_FINAL_ASSESSMENT.forEach((q, idx) => {
      passingAdvAnswers[q.id] = idx < 38 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });
    const advResult = ThreeDAnimationCourseService.submitAssessment('advanced', passingAdvAnswers, THREE_D_ADVANCED_FINAL_ASSESSMENT);
    expect(advResult.passed).toBeTruthy();
    expect(advResult.score).toBe(38);

    // 9. Verify Master Certificate Eligibility
    const certEligibility = ThreeDAnimationCourseService.isEligibleForMasterCertificate(advResult.state);
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

    await page.goto('/courses/3d-animation');
    await expect(page.locator('h1')).toContainText('3D Animation Masterclass', { timeout: 10000 });

    // Verify timeline tasks are clickable
    const firstTask = page.locator('text=Module 1: Introduction to 3D Animation').first();
    await expect(firstTask).toBeVisible();
    await firstTask.click();

    // Verify drawer opened smoothly on mobile
    await expect(page.locator('text=Start Learning Lesson').first()).toBeVisible();

    // Verify no horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const windowWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
  });

  test('11. Regression Check: Python, Shopify Liquid, Meta Ads, SEO, Prompt Engineering, and HTML & CSS Remain Operational', async ({ page }) => {
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

    // HTML & CSS Course
    await page.goto('/courses/html-css');
    await expect(page.locator('h1')).toContainText('HTML & CSS Masterclass');
  });
});
