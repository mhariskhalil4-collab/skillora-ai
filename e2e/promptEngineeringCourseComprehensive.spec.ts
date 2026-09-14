import { test, expect, Page } from '@playwright/test';
import {
  PE_BEGINNER_TASKS,
  PE_BEGINNER_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/prompt-engineering/promptEngineeringBeginner.data';
import {
  PE_INTERMEDIATE_TASKS,
  PE_INTERMEDIATE_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/prompt-engineering/promptEngineeringIntermediate.data';
import {
  PE_ADVANCED_TASKS,
  PE_ADVANCED_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/prompt-engineering/promptEngineeringAdvanced.data';
import { PromptEngineeringCourseService } from '../src/features/roadmap/services/promptEngineeringCourse.service';
import { QuizQuestion } from '../src/features/roadmap/types/roadmap.types';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000005',
      email: 'prompt.architect@skillora.ai',
      firstName: 'Jordan',
      role: 'ai_engineer',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-pe-playwright',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  }, customUserId);
}

// Reset Prompt Engineering Course state in localStorage
async function resetPromptEngineeringCourseState(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.removeItem('skillora_prompt_engineering_course_progress');
  });
}

test.describe('Skillora AI - Prompt Engineering Course Comprehensive E2E Verification', () => {
  test.setTimeout(60000);

  // ==========================================
  // SECTION 1: DATA FIDELITY & CURRICULUM DEPTH
  // ==========================================

  test('1. Module & Task Counts Verification Across All Levels', async () => {
    // Beginner: 12 theory + 1 capstone project + 1 final assessment = 14 tasks
    expect(PE_BEGINNER_TASKS.length).toBe(14);
    const begTheory = PE_BEGINNER_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const begProjects = PE_BEGINNER_TASKS.filter((t) => t.isProject);
    expect(begTheory.length).toBe(12);
    expect(begProjects.length).toBe(1);

    // Intermediate: 14 theory + 1 capstone project + 1 final assessment = 16 tasks
    expect(PE_INTERMEDIATE_TASKS.length).toBe(16);
    const intTheory = PE_INTERMEDIATE_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const intProjects = PE_INTERMEDIATE_TASKS.filter((t) => t.isProject);
    expect(intTheory.length).toBe(14);
    expect(intProjects.length).toBe(1);

    // Advanced: 14 theory + 2 production projects + 1 final assessment = 17 tasks
    expect(PE_ADVANCED_TASKS.length).toBe(17);
    const advTheory = PE_ADVANCED_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const advProjects = PE_ADVANCED_TASKS.filter((t) => t.isProject);
    expect(advTheory.length).toBe(14);
    expect(advProjects.length).toBe(2);

    // Total course tasks: 14 + 16 + 17 = 47
    const totalTasks = PE_BEGINNER_TASKS.length + PE_INTERMEDIATE_TASKS.length + PE_ADVANCED_TASKS.length;
    expect(totalTasks).toBe(47);
  });

  test('2. Strict Content Depth: Every Theory Module has >= 3 Practical Examples & Line-by-Line Breakdowns', async () => {
    const allTheoryTasks = [
      ...PE_BEGINNER_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment),
      ...PE_INTERMEDIATE_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment),
      ...PE_ADVANCED_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment),
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
        expect(example.lineByLine && example.lineByLine.length > 0, `Module ${task.id} example ${idx} missing lineByLine`).toBeTruthy();
      }

      // Pro tips & Common mistakes verification
      const hasProTip = content.sections.some((s) => s.proTip && s.proTip.length > 20);
      const hasMistakes = content.sections.some((s) => s.commonMistakes && s.commonMistakes.length >= 2);
      expect(hasProTip, `Module ${task.id} missing proTip`).toBeTruthy();
      expect(hasMistakes, `Module ${task.id} missing commonMistakes`).toBeTruthy();
    }
  });

  test('3. Exact Final MCQ Pool Counts and Passing Thresholds', async () => {
    // Beginner: 20 questions, passing score 15
    expect(PE_BEGINNER_FINAL_ASSESSMENT.length).toBe(20);
    // Intermediate: 30 questions, passing score 25
    expect(PE_INTERMEDIATE_FINAL_ASSESSMENT.length).toBe(30);
    // Advanced: 40 questions, passing score 35
    expect(PE_ADVANCED_FINAL_ASSESSMENT.length).toBe(40);

    const totalQuestions =
      PE_BEGINNER_FINAL_ASSESSMENT.length +
      PE_INTERMEDIATE_FINAL_ASSESSMENT.length +
      PE_ADVANCED_FINAL_ASSESSMENT.length;
    expect(totalQuestions).toBe(90);

    const allMCQs: QuizQuestion[] = [
      ...PE_BEGINNER_FINAL_ASSESSMENT,
      ...PE_INTERMEDIATE_FINAL_ASSESSMENT,
      ...PE_ADVANCED_FINAL_ASSESSMENT,
    ];

    const questionTexts = new Set<string>();
    for (const q of allMCQs) {
      expect(questionTexts.has(q.question), `Duplicate question: "${q.question}"`).toBeFalsy();
      questionTexts.add(q.question);

      expect(q.options.length, `Question ${q.id} must have 4 options`).toBe(4);
      expect(q.correctAnswer, `Question ${q.id} invalid answer index`).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer, `Question ${q.id} invalid answer index`).toBeLessThan(4);
      expect(q.explanation?.trim().length, `Question ${q.id} missing explanation`).toBeGreaterThan(10);
    }
  });

  // ==========================================
  // SECTION 2: UI NAVIGATION & CATALOG DISCOVERY
  // ==========================================

  test('4. Prompt Engineering Course Discovered in Catalog and Search', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetPromptEngineeringCourseState(page);

    await page.goto('/courses');
    await expect(page.locator('text=Prompt Engineering — AI Prompt Engineering Masterclass').first()).toBeVisible();
    await expect(page.locator('text=AI, Automation & Productivity').first()).toBeVisible();

    // Verify Search Service indexing
    const searchInput = page.locator('input[placeholder*="Search"]').first();
    if (await searchInput.isVisible()) {
      await searchInput.fill('Prompt Engineering');
      await expect(page.locator('text=Prompt Engineering — AI Prompt Engineering Masterclass').first()).toBeVisible();
    }

    // Click through to Prompt Engineering Course Screen
    await page.click('text=Prompt Engineering — AI Prompt Engineering Masterclass');
    await expect(page).toHaveURL(/\/courses\/prompt-engineering/);
  });

  test('5. Alternative Route /courses/prompt-engineering-masterclass redirects cleanly', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/courses/prompt-engineering-masterclass');
    await expect(page).toHaveURL(/\/courses\/prompt-engineering/);
    await expect(page.locator('h1')).toContainText('Prompt Engineering — AI Prompt Engineering Masterclass');
  });

  // ==========================================
  // SECTION 3: LEVEL GATING & LEVEL SWITCHER
  // ==========================================

  test('6. Initial Level State: Beginner Unlocked, Intermediate & Advanced Locked', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetPromptEngineeringCourseState(page);

    await page.goto('/courses/prompt-engineering');
    
    // Check level switcher cards
    const beginnerBtn = page.locator('button:has-text("Beginner")').first();
    const intermediateBtn = page.locator('button:has-text("Intermediate")').first();
    const advancedBtn = page.locator('button:has-text("Advanced")').first();

    await expect(beginnerBtn).toBeVisible();
    await expect(intermediateBtn).toBeVisible();
    await expect(advancedBtn).toBeVisible();

    // Clicking locked intermediate level triggers prerequisite modal
    await intermediateBtn.click();
    await expect(page.locator('text=Prerequisite Required')).toBeVisible();
    await expect(page.locator('text=Level 2: Prompt Engineering Intermediate is Locked')).toBeVisible();

    // Close prerequisite modal
    await page.click('button:has-text("Cancel")');
    await expect(page.locator('text=Prerequisite Required')).not.toBeVisible();

    // Clicking locked advanced level triggers prerequisite modal
    await advancedBtn.click();
    await expect(page.locator('text=Prerequisite Required')).toBeVisible();
    await expect(page.locator('text=Level 3: Prompt Engineering Advanced is Locked')).toBeVisible();
    await page.click('button:has-text("Cancel")');
  });

  test('7. Direct URL and Search Parameter Gating Bypass Prevention', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetPromptEngineeringCourseState(page);

    // Attempting direct navigation to Intermediate
    await page.goto('/courses/prompt-engineering?level=intermediate');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('text=Prerequisite Required')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Level 2: Prompt Engineering Intermediate is Locked')).toBeVisible({ timeout: 15000 });

    // Attempting direct navigation to Advanced
    await page.goto('/courses/prompt-engineering?level=advanced');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('text=Prerequisite Required')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Level 3: Prompt Engineering Advanced is Locked')).toBeVisible({ timeout: 15000 });
  });

  // ==========================================
  // SECTION 4: SERVICE GATING, SCORING & RETAKE
  // ==========================================

  test('8. Assessment Failure Behavior: Displays Score, Threshold, Weak Areas, and Retake Option', async () => {
    PromptEngineeringCourseService.resetCourseState();

    // Answer only 10/20 questions correctly on Beginner Assessment (Score: 10/20, required: 15)
    const failingAnswers: Record<number, number> = {};
    PE_BEGINNER_FINAL_ASSESSMENT.forEach((q, idx) => {
      failingAnswers[q.id] = idx < 10 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });

    const result = PromptEngineeringCourseService.submitAssessment(
      'beginner',
      failingAnswers,
      PE_BEGINNER_FINAL_ASSESSMENT
    );

    expect(result.score).toBe(10);
    expect(result.total).toBe(20);
    expect(result.passed).toBeFalsy();
    expect(result.requiredScore).toBe(15);
    expect(result.weakAreas.length).toBeGreaterThan(0);

    // Verify Intermediate level remains locked
    const state = PromptEngineeringCourseService.getCourseState();
    expect(state.levels.intermediate.status).toBe('locked');
    expect(PromptEngineeringCourseService.checkLevelPrerequisites('intermediate', state).canUnlock).toBeFalsy();

    // Verify retake resets score while preserving state
    const retakeState = PromptEngineeringCourseService.retakeAssessment('beginner');
    expect(retakeState.levels.beginner.assessmentScore).toBeUndefined();
    expect(retakeState.levels.beginner.assessmentPassed).toBeFalsy();
  });

  test('9. Full Course Progression Flow: Beginner -> Intermediate -> Advanced -> Master Certificate', async () => {
    PromptEngineeringCourseService.resetCourseState();

    // 1. Complete Beginner Theory (12 modules) & Project
    for (const task of PE_BEGINNER_TASKS.filter((t) => !t.isFinalAssessment)) {
      PromptEngineeringCourseService.completeTask('beginner', task.id);
    }

    // 2. Pass Beginner Assessment (20/20 >= 15)
    const perfectBegAnswers: Record<number, number> = {};
    PE_BEGINNER_FINAL_ASSESSMENT.forEach((q) => {
      perfectBegAnswers[q.id] = q.correctAnswer;
    });
    const begResult = PromptEngineeringCourseService.submitAssessment('beginner', perfectBegAnswers, PE_BEGINNER_FINAL_ASSESSMENT);
    expect(begResult.passed).toBeTruthy();
    expect(begResult.state.levels.intermediate.status).toBe('in_progress');

    // 3. Switch to Intermediate
    const switchInter = PromptEngineeringCourseService.switchLevel('intermediate');
    expect(switchInter.success).toBeTruthy();

    // 4. Complete Intermediate Theory (14 modules) & Project
    for (const task of PE_INTERMEDIATE_TASKS.filter((t) => !t.isFinalAssessment)) {
      PromptEngineeringCourseService.completeTask('intermediate', task.id);
    }

    // 5. Pass Intermediate Assessment (30/30 >= 25)
    const perfectIntAnswers: Record<number, number> = {};
    PE_INTERMEDIATE_FINAL_ASSESSMENT.forEach((q) => {
      perfectIntAnswers[q.id] = q.correctAnswer;
    });
    const intResult = PromptEngineeringCourseService.submitAssessment('intermediate', perfectIntAnswers, PE_INTERMEDIATE_FINAL_ASSESSMENT);
    expect(intResult.passed).toBeTruthy();
    expect(intResult.state.levels.advanced.status).toBe('in_progress');

    // 6. Switch to Advanced
    const switchAdv = PromptEngineeringCourseService.switchLevel('advanced');
    expect(switchAdv.success).toBeTruthy();

    // 7. Complete Advanced Theory (14 modules) & 2 Projects
    for (const task of PE_ADVANCED_TASKS.filter((t) => !t.isFinalAssessment)) {
      PromptEngineeringCourseService.completeTask('advanced', task.id);
    }

    // 8. Pass Advanced Master Assessment (38/40 >= 35)
    const passingAdvAnswers: Record<number, number> = {};
    PE_ADVANCED_FINAL_ASSESSMENT.forEach((q, idx) => {
      passingAdvAnswers[q.id] = idx < 38 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });
    const advResult = PromptEngineeringCourseService.submitAssessment('advanced', passingAdvAnswers, PE_ADVANCED_FINAL_ASSESSMENT);
    expect(advResult.passed).toBeTruthy();
    expect(advResult.score).toBe(38);

    // 9. Verify Master Certificate Eligibility
    const certEligibility = PromptEngineeringCourseService.isEligibleForMasterCertificate(advResult.state);
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

    await page.goto('/courses/prompt-engineering');
    await expect(page.locator('h1')).toContainText('Prompt Engineering');

    // Verify timeline tasks are clickable
    const firstTask = page.locator('text=Module 1: Introduction to Prompt Engineering').first();
    await expect(firstTask).toBeVisible();
    await firstTask.click();

    // Verify drawer opened smoothly on mobile
    await expect(page.locator('text=Start Learning Lesson').first()).toBeVisible();

    // Verify no horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const windowWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
  });

  test('11. Regression Check: Python, Shopify Liquid, Meta Ads, and SEO Courses Remain Operational', async ({ page }) => {
    await setAuthenticatedUser(page);

    // Python Course
    await page.goto('/courses/python');
    await expect(page.locator('h1:has-text("Python Masterclass")')).toBeVisible();

    // Shopify Course
    await page.goto('/courses/shopify');
    await expect(page.locator('h1')).toContainText('Shopify Liquid');

    // Meta Ads Course
    await page.goto('/courses/meta-ads');
    await expect(page.locator('h1')).toContainText('Meta Ads');

    // SEO Course
    await page.goto('/courses/seo');
    await expect(page.locator('h1')).toContainText('SEO — Search Engine Optimization');
  });

});
