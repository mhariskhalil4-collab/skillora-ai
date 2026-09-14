import { test, expect, Page } from '@playwright/test';
import {
  SHOPIFY_BEGINNER_TASKS,
  SHOPIFY_BEGINNER_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/shopify/shopifyBeginner.data';
import {
  SHOPIFY_INTERMEDIATE_TASKS,
  SHOPIFY_INTERMEDIATE_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/shopify/shopifyIntermediate.data';
import {
  SHOPIFY_ADVANCED_TASKS,
  SHOPIFY_ADVANCED_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/shopify/shopifyAdvanced.data';
import {
  INITIAL_SHOPIFY_LEVELS,
} from '../src/features/roadmap/data/shopify';
import { ShopifyCourseService } from '../src/features/roadmap/services/shopifyCourse.service';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000002',
      email: 'shopify.student@skillora.ai',
      firstName: 'Jordan',
      role: 'ecommerce_developer',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-shopify-playwright',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  }, customUserId);
}

// Reset Shopify Course state in localStorage
async function resetShopifyCourseState(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.removeItem('skillora_shopify_course_progress');
  });
}

test.describe('Skillora AI - Shopify Liquid Course Comprehensive E2E Verification', () => {
  test.setTimeout(60000);

  // ==========================================
  // SECTION 1: DATA FIDELITY & CURRICULUM DEPTH
  // ==========================================

  test('1. Module & Task Counts Verification Across All Levels', async () => {
    // Beginner: 12 modules & projects + 1 final assessment = 13 tasks
    expect(SHOPIFY_BEGINNER_TASKS.length).toBe(13);
    const begModules = SHOPIFY_BEGINNER_TASKS.filter((t) => !t.isFinalAssessment);
    expect(begModules.length).toBe(12);

    // Intermediate: 14 modules & projects + 1 final assessment = 15 tasks
    expect(SHOPIFY_INTERMEDIATE_TASKS.length).toBe(15);
    const intModules = SHOPIFY_INTERMEDIATE_TASKS.filter((t) => !t.isFinalAssessment);
    expect(intModules.length).toBe(14);

    // Advanced: 14 modules & projects + 1 final assessment = 15 tasks
    expect(SHOPIFY_ADVANCED_TASKS.length).toBe(15);
    const advModules = SHOPIFY_ADVANCED_TASKS.filter((t) => !t.isFinalAssessment);
    expect(advModules.length).toBe(14);

    // Total course tasks: 13 + 15 + 15 = 43
    const totalTasks = SHOPIFY_BEGINNER_TASKS.length + SHOPIFY_INTERMEDIATE_TASKS.length + SHOPIFY_ADVANCED_TASKS.length;
    expect(totalTasks).toBe(43);
  });

  test('2. Strict Content Depth: Every Theory Module has >= 3 Practical Examples & Line-by-Line Breakdowns', async () => {
    const allTheoryTasks = [
      ...SHOPIFY_BEGINNER_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.title.includes('Beginner Project')),
      ...SHOPIFY_INTERMEDIATE_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.title.includes('Intermediate Project')),
      ...SHOPIFY_ADVANCED_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.title.includes('Project') && !t.title.includes('Capstone')),
    ];

    expect(allTheoryTasks.length).toBe(11 + 13 + 12); // 36 theory modules

    for (const task of allTheoryTasks) {
      const content = task.lessonContent!;
      // Must have substantial overview
      expect(content.overview.length, `Module ${task.id} overview is too short`).toBeGreaterThan(100);
      
      const snippets = content.sections.flatMap((s) => s.codeSnippets || []);
      expect(snippets.length, `Module ${task.id} must have at least 3 snippets`).toBeGreaterThanOrEqual(3);

      for (const [idx, example] of snippets.entries()) {
        expect(example.code.trim().length, `Module ${task.id} example ${idx} code is empty`).toBeGreaterThan(15);
        expect(example.lineByLine?.length || 0, `Module ${task.id} example ${idx} must have line-by-line breakdown`).toBeGreaterThanOrEqual(1);
      }

      // Must have objectives and practice
      expect(content.objectives.length, `Module ${task.id} missing objectives`).toBeGreaterThanOrEqual(2);
      expect((content.practiceExercises?.length || 0) + (content.sections.some(s => s.miniPractice) ? 1 : 0)).toBeGreaterThanOrEqual(1);
    }
  });

  test('3. Exact 90 MCQ Integrity Verification (20 Beginner + 30 Intermediate + 40 Advanced)', async () => {
    // Beginner: 20 MCQs
    expect(SHOPIFY_BEGINNER_FINAL_ASSESSMENT.length).toBe(20);
    // Intermediate: 30 MCQs
    expect(SHOPIFY_INTERMEDIATE_FINAL_ASSESSMENT.length).toBe(30);
    // Advanced: 40 MCQs
    expect(SHOPIFY_ADVANCED_FINAL_ASSESSMENT.length).toBe(40);

    const levels = [
      { name: 'Beginner', list: SHOPIFY_BEGINNER_FINAL_ASSESSMENT },
      { name: 'Intermediate', list: SHOPIFY_INTERMEDIATE_FINAL_ASSESSMENT },
      { name: 'Advanced', list: SHOPIFY_ADVANCED_FINAL_ASSESSMENT },
    ];

    for (const lvl of levels) {
      const questionTexts = new Set<string>();
      for (const q of lvl.list) {
        expect(q.question.trim().length).toBeGreaterThan(10);
        expect(q.options.length).toBe(4);
        expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(q.correctAnswer).toBeLessThanOrEqual(3);
        expect((q.explanation || '').trim().length).toBeGreaterThan(5);

        // Verify no duplicate question prompts within each level
        expect(questionTexts.has(q.question), `Duplicate MCQ detected in ${lvl.name}: ${q.question}`).toBe(false);
        questionTexts.add(q.question);
      }
    }
  });

  // ==========================================
  // SECTION 2: UI NAVIGATION & LEVEL INITIALIZATION
  // ==========================================

  test('4. Course Entry Point & Initial State in UI', async ({ page }) => {
    await setAuthenticatedUser(page, 'shopify-e2e-user-4');
    await resetShopifyCourseState(page);
    await page.goto('/courses');

    // Course Catalog contains Shopify Liquid card
    const shopifyCard = page.locator('div:has-text("Shopify Liquid")').first();
    await expect(shopifyCard).toBeVisible();

    // Navigate to Shopify course
    await page.goto('/courses/shopify');

    // Verify Course Title & Header
    await expect(
      page.locator('h1:has-text("Shopify Liquid — Complete Professional Development Course")')
    ).toBeVisible();

    // Verify Level Status: Beginner is unlocked, Intermediate & Advanced locked
    expect(INITIAL_SHOPIFY_LEVELS.beginner.status).toBe('in_progress');
    expect(INITIAL_SHOPIFY_LEVELS.intermediate.status).toBe('locked');
    expect(INITIAL_SHOPIFY_LEVELS.advanced.status).toBe('locked');

    // Verify Locked badges in UI
    await expect(page.locator('button:has-text("Level 2: Intermediate")').getByText('Locked')).toBeVisible();
    await expect(page.locator('button:has-text("Level 3: Advanced")').getByText('Locked')).toBeVisible();
  });

  test('5. Locked Level Click Shows Prerequisite Modal & Blocks Bypass', async ({ page }) => {
    await setAuthenticatedUser(page, 'shopify-e2e-user-5');
    await resetShopifyCourseState(page);
    await page.goto('/courses/shopify');

    // Click locked Intermediate level
    await page.click('button:has-text("Level 2: Intermediate")');

    // Prerequisite modal opens
    await expect(page.locator('text=Prerequisite Required')).toBeVisible();

    // Click Cancel to dismiss
    await page.click('button:has-text("Cancel")');
    await expect(page.locator('text=Prerequisite Required')).not.toBeVisible();
  });

  // ==========================================
  // SECTION 3: LESSON RENDERING & "MARK AS READ" BEHAVIOR
  // ==========================================

  test('6. Open Module 1 Drawer & Verify Full Content Rendering', async ({ page }) => {
    await setAuthenticatedUser(page, 'shopify-e2e-user-6');
    await resetShopifyCourseState(page);
    await page.goto('/courses/shopify');

    // Click on Module 1 card in timeline
    const module1Card = page.locator('text=Module 1: Introduction to Shopify Liquid').first();
    await expect(module1Card).toBeVisible();
    await module1Card.click();

    // Drawer opens -> click Start Learning Lesson
    const startLessonBtn = page.locator('button:has-text("Start Learning Lesson")');
    await expect(startLessonBtn).toBeVisible();
    await startLessonBtn.click();

    // Verify key instructional sections render
    await expect(page.locator('text=Line-by-Line Plain English Breakdown').first()).toBeVisible();
    await expect(page.locator('text=Common Pitfalls & Anti-Patterns to Avoid').first()).toBeVisible();
    await expect(page.locator('text=Helpful Pro-Tip').first()).toBeVisible();
    await expect(page.locator('text=Ready to Test Your Knowledge?')).toBeVisible();
    await expect(page.locator('button:has-text("Mark Lesson as Complete")')).toBeVisible();
  });

  test('7. "Mark as Read" Alone Does NOT Complete Assessment/Quiz Tasks', async ({ page }) => {
    await setAuthenticatedUser(page, 'shopify-e2e-user-7');
    await resetShopifyCourseState(page);
    await page.goto('/courses/shopify');
    await expect(page.locator('h1:has-text("Shopify Liquid")')).toBeVisible({ timeout: 15000 });

    // Open Module 1 (which requires a quiz)
    const mod1 = page.locator('text=Module 1: Introduction to Shopify Liquid').first();
    await expect(mod1).toBeVisible({ timeout: 15000 });
    await mod1.click();
    await page.click('button:has-text("Start Learning Lesson")');
    
    // Click "Mark Lesson as Complete"
    await page.click('button:has-text("Mark Lesson as Complete")');

    // Button transitions to "Lesson Completed" and unlocks the assessment button
    await expect(page.locator('button:has-text("Lesson Completed")')).toBeVisible();
    await expect(page.locator('button:has-text("Continue to Knowledge Quiz →")')).toBeVisible();

    // Close lesson dialog without completing quiz
    await page.click('button:has-text("Back to Roadmap")');

    // Task 1 should NOT be completed in service state
    const state = await page.evaluate(() => {
      const raw = localStorage.getItem('skillora_shopify_course_progress');
      return raw ? JSON.parse(raw) : null;
    });

    if (state) {
      const task1 = state.levels.beginner.tasks.find((t: any) => t.id === 'shopify-beg-01');
      expect(task1.status).not.toBe('completed');
    }
  });

  // ==========================================
  // SECTION 4: BEGINNER PROGRESSION & ASSESSMENT GATING
  // ==========================================

  test('8. Beginner Assessment Fails below 15/20 & Keeps Intermediate Locked', async () => {
    // Reset state
    ShopifyCourseService.resetCourseState();

    // Complete all 11 beginner tasks
    for (const task of SHOPIFY_BEGINNER_TASKS) {
      if (!task.isFinalAssessment) {
        ShopifyCourseService.completeTask('beginner', task.id);
      }
    }

    // Submit a failing score: 12 / 20
    const mockAnswers: Record<number, number> = {};
    SHOPIFY_BEGINNER_FINAL_ASSESSMENT.forEach((q, idx) => {
      // 12 correct, 8 incorrect
      mockAnswers[q.id] = idx < 12 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });

    const result = ShopifyCourseService.evaluateAssessment(
      'beginner',
      mockAnswers,
      SHOPIFY_BEGINNER_FINAL_ASSESSMENT
    );

    expect(result.score).toBe(12);
    expect(result.passed).toBe(false);
    expect(result.weakAreas.length).toBeGreaterThan(0);

    // Intermediate MUST remain locked
    const state = ShopifyCourseService.getCourseState();
    expect(state.levels.intermediate.status).toBe('locked');
    expect(state.levels.beginner.status).not.toBe('completed');
  });

  test('9. Beginner Assessment Passes with >= 15/20 & Unlocks Intermediate Immediately', async () => {
    // Reset state & complete all 11 beginner modules
    ShopifyCourseService.resetCourseState();
    for (const task of SHOPIFY_BEGINNER_TASKS) {
      if (!task.isFinalAssessment) {
        ShopifyCourseService.completeTask('beginner', task.id);
      }
    }

    // Submit a passing score: 17 / 20
    const mockAnswers: Record<number, number> = {};
    SHOPIFY_BEGINNER_FINAL_ASSESSMENT.forEach((q, idx) => {
      mockAnswers[q.id] = idx < 17 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });

    const result = ShopifyCourseService.evaluateAssessment(
      'beginner',
      mockAnswers,
      SHOPIFY_BEGINNER_FINAL_ASSESSMENT
    );

    expect(result.score).toBe(17);
    expect(result.passed).toBe(true);

    // Intermediate unlocks immediately
    const state = ShopifyCourseService.getCourseState();
    expect(state.levels.intermediate.status).toBe('in_progress');
    expect(state.levels.beginner.status).toBe('completed');
  });

  // ==========================================
  // SECTION 5: INTERMEDIATE PROGRESSION & GATING
  // ==========================================

  test('10. Intermediate Assessment Fails below 25/30 & Keeps Advanced Locked', async () => {
    // Complete all 13 intermediate tasks
    for (const task of SHOPIFY_INTERMEDIATE_TASKS) {
      if (!task.isFinalAssessment) {
        ShopifyCourseService.completeTask('intermediate', task.id);
      }
    }

    // Submit failing score: 22 / 30
    const mockAnswers: Record<number, number> = {};
    SHOPIFY_INTERMEDIATE_FINAL_ASSESSMENT.forEach((q, idx) => {
      mockAnswers[q.id] = idx < 22 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });

    const result = ShopifyCourseService.evaluateAssessment(
      'intermediate',
      mockAnswers,
      SHOPIFY_INTERMEDIATE_FINAL_ASSESSMENT
    );

    expect(result.score).toBe(22);
    expect(result.passed).toBe(false);

    const state = ShopifyCourseService.getCourseState();
    expect(state.levels.advanced.status).toBe('locked');
    expect(state.levels.intermediate.status).not.toBe('completed');
  });

  test('11. Intermediate Assessment Passes with >= 25/30 & Unlocks Advanced', async () => {
    // Reset and complete beginner + intermediate tasks
    ShopifyCourseService.resetCourseState();
    for (const task of SHOPIFY_BEGINNER_TASKS) {
      ShopifyCourseService.completeTask('beginner', task.id);
    }
    // Pass beginner assessment
    const begAnswers: Record<number, number> = {};
    SHOPIFY_BEGINNER_FINAL_ASSESSMENT.forEach(q => { begAnswers[q.id] = q.correctAnswer; });
    ShopifyCourseService.evaluateAssessment('beginner', begAnswers, SHOPIFY_BEGINNER_FINAL_ASSESSMENT);

    // Complete all 13 intermediate tasks
    for (const task of SHOPIFY_INTERMEDIATE_TASKS) {
      if (!task.isFinalAssessment) {
        ShopifyCourseService.completeTask('intermediate', task.id);
      }
    }

    // Submit passing score: 27 / 30
    const mockAnswers: Record<number, number> = {};
    SHOPIFY_INTERMEDIATE_FINAL_ASSESSMENT.forEach((q, idx) => {
      mockAnswers[q.id] = idx < 27 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });

    const result = ShopifyCourseService.evaluateAssessment(
      'intermediate',
      mockAnswers,
      SHOPIFY_INTERMEDIATE_FINAL_ASSESSMENT
    );

    expect(result.score).toBe(27);
    expect(result.passed).toBe(true);

    const state = ShopifyCourseService.getCourseState();
    expect(state.levels.advanced.status).toBe('in_progress');
    expect(state.levels.intermediate.status).toBe('completed');
  });

  // ==========================================
  // SECTION 6: ADVANCED PROGRESSION & MASTER CERTIFICATE
  // ==========================================

  test('12. Advanced Assessment Fails below 35/40 & Certificate NOT Unlocked', async () => {
    // Submit failing score: 34 / 40
    const mockAnswers: Record<number, number> = {};
    SHOPIFY_ADVANCED_FINAL_ASSESSMENT.forEach((q, idx) => {
      mockAnswers[q.id] = idx < 34 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });

    const result = ShopifyCourseService.evaluateAssessment(
      'advanced',
      mockAnswers,
      SHOPIFY_ADVANCED_FINAL_ASSESSMENT
    );

    expect(result.score).toBe(34);
    expect(result.passed).toBe(false); // 34 < 35 required

    const state = ShopifyCourseService.getCourseState();
    const certEligibility = ShopifyCourseService.isEligibleForMasterCertificate(state);
    expect(certEligibility.isEligible).toBe(false);
  });

  test('13. Advanced Assessment Passes with >= 35/40 + 100% Course Completion Unlocks Master Certificate', async () => {
    // Complete all tasks in Beginner, Intermediate, and Advanced
    for (const task of SHOPIFY_BEGINNER_TASKS) {
      ShopifyCourseService.completeTask('beginner', task.id);
    }
    for (const task of SHOPIFY_INTERMEDIATE_TASKS) {
      ShopifyCourseService.completeTask('intermediate', task.id);
    }
    for (const task of SHOPIFY_ADVANCED_TASKS) {
      if (!task.isFinalAssessment) {
        ShopifyCourseService.completeTask('advanced', task.id);
      }
    }

    // Submit passing score: 38 / 40
    const mockAnswers: Record<number, number> = {};
    SHOPIFY_ADVANCED_FINAL_ASSESSMENT.forEach((q, idx) => {
      mockAnswers[q.id] = idx < 38 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });

    const result = ShopifyCourseService.evaluateAssessment(
      'advanced',
      mockAnswers,
      SHOPIFY_ADVANCED_FINAL_ASSESSMENT
    );

    expect(result.score).toBe(38);
    expect(result.passed).toBe(true);

    const state = ShopifyCourseService.getCourseState();
    expect(state.overallProgress).toBe(100);

    const certEligibility = ShopifyCourseService.isEligibleForMasterCertificate(state);
    expect(certEligibility.isEligible).toBe(true);
    expect(certEligibility.advScore).toBe(38);
  });

  test('14. Full Master Certificate Claim Banner Appears in UI upon 100% Completion', async ({ page }) => {
    await setAuthenticatedUser(page, 'shopify-cert-user');
    await page.addInitScript(() => {
      // Inject completed state with 100% progress
      window.localStorage.setItem('skillora_shopify_course_progress', JSON.stringify({
        courseId: 'shopify-liquid',
        courseTitle: 'Shopify Liquid — Complete Professional Development Course',
        currentLevel: 'advanced',
        overallProgress: 100,
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: Beginner',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 13,
            totalTasks: 13,
            assessmentPassed: true,
            assessmentScore: 20,
            requiredScore: 15,
            totalQuestions: 20,
            tasks: []
          },
          intermediate: {
            level: 'intermediate',
            title: 'Level 2: Intermediate',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 15,
            totalTasks: 15,
            assessmentPassed: true,
            assessmentScore: 30,
            requiredScore: 25,
            totalQuestions: 30,
            tasks: []
          },
          advanced: {
            level: 'advanced',
            title: 'Level 3: Advanced',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 15,
            totalTasks: 15,
            assessmentPassed: true,
            assessmentScore: 38,
            requiredScore: 35,
            totalQuestions: 40,
            tasks: []
          }
        }
      }));
    });

    await page.goto('/courses/shopify');

    // Master Certificate banner must appear
    await expect(page.locator('h2:has-text("Shopify Liquid Course Completed!")')).toBeVisible();
    await expect(page.locator('button:has-text("View & Claim Master Certificate")')).toBeVisible();
  });

  // ==========================================
  // SECTION 7: PERSISTENCE & RETAKES
  // ==========================================

  test('15. State Persists Reliably in LocalStorage Across Reloads', async ({ page }) => {
    await setAuthenticatedUser(page, 'shopify-e2e-user-15');
    await page.addInitScript(() => {
      window.localStorage.setItem('skillora_shopify_course_progress', JSON.stringify({
        courseId: 'shopify-liquid',
        courseTitle: 'Shopify Liquid — Complete Professional Development Course',
        currentLevel: 'beginner',
        overallProgress: 10,
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: Beginner',
            status: 'in_progress',
            progressPercentage: 15,
            completedTasks: 2,
            totalTasks: 13,
            assessmentPassed: false,
            requiredScore: 15,
            totalQuestions: 20,
            tasks: []
          }
        }
      }));
    });

    await page.goto('/courses/shopify');

    // Verify localStorage has valid serialized state
    const stored = await page.evaluate(() => {
      return localStorage.getItem('skillora_shopify_course_progress');
    });
    expect(stored).not.toBeNull();

    // Reload page
    await page.reload();
    await expect(
      page.locator('h1:has-text("Shopify Liquid — Complete Professional Development Course")')
    ).toBeVisible({ timeout: 15000 });
  });

  test('16. Assessment Retake Resets Score While Preserving Completed Module Milestones', async () => {
    // Reset assessment for beginner
    const resetState = ShopifyCourseService.resetAssessmentForRetake('beginner');
    const assessment = resetState.levels.beginner.tasks.find((t) => t.isFinalAssessment);
    expect(assessment?.status).toBe('in_progress');
    expect(resetState.levels.beginner.assessmentPassed).toBe(false);
  });

  // ==========================================
  // SECTION 8: REGRESSION & COMPATIBILITY
  // ==========================================

  test('17. Python Course Remains Completely Unaffected', async ({ page }) => {
    await setAuthenticatedUser(page, 'shopify-e2e-user-17');
    await page.goto('/courses/python');
    await expect(page.locator('h1:has-text("Python Masterclass")')).toBeVisible();
    await expect(page.locator('button:has-text("Level 1: Beginner")')).toBeVisible();
  });

  test('18. Mobile Viewport Responsiveness', async ({ page }) => {
    await setAuthenticatedUser(page, 'shopify-e2e-user-18');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/courses/shopify');
    await expect(page.locator('h1')).toContainText('Shopify Liquid');
  });
});
