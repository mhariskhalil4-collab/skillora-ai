import { test, expect, Page } from '@playwright/test';
import {
  SEO_BEGINNER_TASKS,
  SEO_BEGINNER_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/seo/seoBeginner.data';
import {
  SEO_INTERMEDIATE_TASKS,
  SEO_INTERMEDIATE_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/seo/seoIntermediate.data';
import {
  SEO_ADVANCED_TASKS,
  SEO_ADVANCED_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/seo/seoAdvanced.data';
import { SeoCourseService } from '../src/features/roadmap/services/seoCourse.service';
import { QuizQuestion } from '../src/features/roadmap/types/roadmap.types';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000004',
      email: 'seo.strategist@skillora.ai',
      firstName: 'Sarah',
      role: 'seo_specialist',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-seo-playwright',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  }, customUserId);
}

// Reset SEO Course state in localStorage
async function resetSeoCourseState(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.removeItem('skillora_seo_course_progress');
  });
}

test.describe('Skillora AI - SEO Course Comprehensive E2E Verification', () => {

  // ==========================================
  // SECTION 1: DATA FIDELITY & CURRICULUM DEPTH
  // ==========================================

  test('1. Module & Task Counts Verification Across All Levels', async () => {
    // Beginner: 12 theory + 1 capstone project + 1 final assessment = 14 tasks
    expect(SEO_BEGINNER_TASKS.length).toBe(14);
    const begTheory = SEO_BEGINNER_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const begProjects = SEO_BEGINNER_TASKS.filter((t) => t.isProject);
    expect(begTheory.length).toBe(12);
    expect(begProjects.length).toBe(1);

    // Intermediate: 14 theory + 1 capstone project + 1 final assessment = 16 tasks
    expect(SEO_INTERMEDIATE_TASKS.length).toBe(16);
    const intTheory = SEO_INTERMEDIATE_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const intProjects = SEO_INTERMEDIATE_TASKS.filter((t) => t.isProject);
    expect(intTheory.length).toBe(14);
    expect(intProjects.length).toBe(1);

    // Advanced: 14 theory + 2 production projects + 1 final assessment = 17 tasks
    expect(SEO_ADVANCED_TASKS.length).toBe(17);
    const advTheory = SEO_ADVANCED_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment);
    const advProjects = SEO_ADVANCED_TASKS.filter((t) => t.isProject);
    expect(advTheory.length).toBe(14);
    expect(advProjects.length).toBe(2);

    // Total course tasks: 14 + 16 + 17 = 47
    const totalTasks = SEO_BEGINNER_TASKS.length + SEO_INTERMEDIATE_TASKS.length + SEO_ADVANCED_TASKS.length;
    expect(totalTasks).toBe(47);
  });

  test('2. Strict Content Depth: Every Module & Project has >= 3 Practical Examples & Line-by-Line Breakdowns', async () => {
    const allLearningTasks = [
      ...SEO_BEGINNER_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment),
      ...SEO_INTERMEDIATE_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment),
      ...SEO_ADVANCED_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment),
    ];

    expect(allLearningTasks.length).toBe(44); // 40 theory + 4 projects

    for (const task of allLearningTasks) {
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

  test('3. Exact Final MCQ Pool Counts and Passing Thresholds', async () => {
    // Beginner: 20 MCQs, Pass 15/20
    expect(SEO_BEGINNER_FINAL_ASSESSMENT.length).toBe(20);
    expect(SEO_BEGINNER_TASKS.find(t => t.isFinalAssessment)?.passingScore || 15).toBe(15);

    // Intermediate: 30 MCQs, Pass 25/30
    expect(SEO_INTERMEDIATE_FINAL_ASSESSMENT.length).toBe(30);
    expect(SEO_INTERMEDIATE_TASKS.find(t => t.isFinalAssessment)?.passingScore || 25).toBe(25);

    // Advanced: 40 MCQs, Pass 35/40
    expect(SEO_ADVANCED_FINAL_ASSESSMENT.length).toBe(40);
    expect(SEO_ADVANCED_TASKS.find(t => t.isFinalAssessment)?.passingScore || 35).toBe(35);

    // Total: Exactly 90 MCQs
    expect(
      SEO_BEGINNER_FINAL_ASSESSMENT.length +
      SEO_INTERMEDIATE_FINAL_ASSESSMENT.length +
      SEO_ADVANCED_FINAL_ASSESSMENT.length
    ).toBe(90);

    // Validate 4 options & valid answers for every question
    const allAssessments: QuizQuestion[] = [
      ...SEO_BEGINNER_FINAL_ASSESSMENT,
      ...SEO_INTERMEDIATE_FINAL_ASSESSMENT,
      ...SEO_ADVANCED_FINAL_ASSESSMENT,
    ];

    for (const q of allAssessments) {
      expect(q.options.length, `Question ${q.id} must have 4 options`).toBe(4);
      expect(q.correctAnswer, `Question ${q.id} invalid answer index`).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer, `Question ${q.id} invalid answer index`).toBeLessThan(4);
      expect(q.explanation?.trim().length, `Question ${q.id} missing explanation`).toBeGreaterThan(10);
    }
  });

  // ==========================================
  // SECTION 2: UI NAVIGATION & CATALOG DISCOVERY
  // ==========================================

  test('4. SEO Course Discovered in Catalog and Search', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetSeoCourseState(page);

    await page.goto('/courses');
    await expect(page.locator('text=SEO — Search Engine Optimization').first()).toBeVisible();
    await expect(page.locator('text=Organic Growth & Technical Search').first()).toBeVisible();

    // Verify Search Service indexing
    const searchInput = page.locator('input[placeholder*="Search"]').first();
    if (await searchInput.isVisible()) {
      await searchInput.fill('SEO');
      await expect(page.locator('text=SEO — Search Engine Optimization').first()).toBeVisible();
    }

    // Click through to SEO Course Screen
    await page.click('text=SEO — Search Engine Optimization');
    await expect(page).toHaveURL(/\/courses\/seo/);
  });

  test('5. Alternative Route /courses/search-engine-optimization redirects cleanly', async ({ page }) => {
    await setAuthenticatedUser(page, 'seo-alias-user');
    await page.goto('/courses/search-engine-optimization');
    await expect(page).toHaveURL(/\/courses\/seo/, { timeout: 15000 });
    await expect(page.locator('h1')).toContainText('SEO — Search Engine Optimization', { timeout: 15000 });
  });

  // ==========================================
  // SECTION 3: LEVEL GATING & LEVEL SWITCHER
  // ==========================================

  test('6. Initial Level State: Beginner Unlocked, Intermediate & Advanced Locked', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetSeoCourseState(page);

    await page.goto('/courses/seo');
    
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
    await expect(page.locator('text=Level 2: SEO Intermediate is Locked')).toBeVisible();

    // Close prerequisite modal
    await page.click('button:has-text("Cancel")');
    await expect(page.locator('text=Prerequisite Required')).not.toBeVisible();

    // Clicking locked advanced level triggers prerequisite modal
    await advancedBtn.click();
    await expect(page.locator('text=Prerequisite Required')).toBeVisible();
    await expect(page.locator('text=Level 3: SEO Advanced is Locked')).toBeVisible();
    await page.click('button:has-text("Cancel")');
  });

  test('7. Direct URL and Search Parameter Gating Bypass Prevention', async ({ page }) => {
    await setAuthenticatedUser(page, 'seo-user-bypass');
    await resetSeoCourseState(page);

    await page.goto('/courses/seo');
    await expect(page.locator('h1:has-text("SEO — Search Engine Optimization")')).toBeVisible({ timeout: 15000 });

    // Attempting direct navigation to Intermediate
    await page.goto('/courses/seo?level=intermediate');
    await expect(page.locator('text=Prerequisite Required')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Level 2: SEO Intermediate is Locked')).toBeVisible({ timeout: 15000 });

    if (await page.locator('button:has-text("Cancel")').isVisible()) {
      await page.click('button:has-text("Cancel")');
    }

    // Attempting direct navigation to Advanced
    await page.goto('/courses/seo?level=advanced');
    await expect(page.locator('text=Prerequisite Required')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Level 3: SEO Advanced is Locked')).toBeVisible({ timeout: 15000 });
  });

  // ==========================================
  // SECTION 4: ASSESSMENT BEHAVIOR & WEAK TOPICS
  // ==========================================

  test('8. Assessment Failure Behavior: Displays Score, Threshold, Weak Areas, and Retake Option', async () => {
    // Simulate assessment with 12/20 correct (Fail, required: 15/20)
    const mockAnswers: Record<string, number> = {};
    SEO_BEGINNER_FINAL_ASSESSMENT.forEach((q, idx) => {
      // Answer first 12 correctly, remaining 8 incorrectly
      mockAnswers[q.id] = idx < 12 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });

    const result = SeoCourseService.submitAssessment('beginner', mockAnswers, SEO_BEGINNER_FINAL_ASSESSMENT);
    expect(result.passed).toBe(false);
    expect(result.score).toBe(12);
    expect(result.requiredScore).toBe(15);
    expect(result.total).toBe(20);
    expect(result.percentage).toBe(60);
    expect(result.weakAreas.length).toBeGreaterThan(0);
    expect(result.unlockedNextLevel).toBeUndefined();

    // Intermediate must remain locked
    const prereq = SeoCourseService.checkLevelPrerequisites('intermediate', result.updatedState);
    expect(prereq.canUnlock).toBe(false);
    expect(prereq.reason).toContain('Pass Beginner Final Assessment with at least 15/20 score (Current: 12/20)');

    // Test retake reset
    const retakeState = SeoCourseService.resetAssessmentForRetake('beginner');
    expect(retakeState.levels.beginner.assessmentPassed).toBe(false);
    expect(retakeState.levels.beginner.assessmentScore).toBeUndefined();
  });

  test('9. Full Course Progression Flow: Beginner -> Intermediate -> Advanced -> Master Certificate', async () => {
    SeoCourseService.resetCourseState();

    // 1. Complete all 12 Beginner modules + 1 Capstone Project
    SEO_BEGINNER_TASKS.filter(t => !t.isFinalAssessment).forEach(t => {
      SeoCourseService.completeTask('beginner', t.id);
    });

    // 2. Pass Beginner Final Assessment with 18/20
    const begAnswers: Record<string, number> = {};
    SEO_BEGINNER_FINAL_ASSESSMENT.forEach((q, idx) => {
      begAnswers[q.id] = idx < 18 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });
    const begResult = SeoCourseService.submitAssessment('beginner', begAnswers, SEO_BEGINNER_FINAL_ASSESSMENT);
    expect(begResult.passed).toBe(true);
    expect(begResult.unlockedNextLevel).toBe('intermediate');

    // Intermediate is now unlocked
    const intSwitch = SeoCourseService.switchLevel('intermediate');
    expect(intSwitch.success).toBe(true);

    // 3. Complete all 14 Intermediate modules + 1 Capstone Project
    SEO_INTERMEDIATE_TASKS.filter(t => !t.isFinalAssessment).forEach(t => {
      SeoCourseService.completeTask('intermediate', t.id);
    });

    // 4. Pass Intermediate Final Assessment with 28/30 (Required: 25)
    const intAnswers: Record<string, number> = {};
    SEO_INTERMEDIATE_FINAL_ASSESSMENT.forEach((q, idx) => {
      intAnswers[q.id] = idx < 28 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });
    const intResult = SeoCourseService.submitAssessment('intermediate', intAnswers, SEO_INTERMEDIATE_FINAL_ASSESSMENT);
    expect(intResult.passed).toBe(true);
    expect(intResult.unlockedNextLevel).toBe('advanced');

    // Advanced is now unlocked
    const advSwitch = SeoCourseService.switchLevel('advanced');
    expect(advSwitch.success).toBe(true);

    // 5. Complete all 14 Advanced modules + 2 Production Projects
    SEO_ADVANCED_TASKS.filter(t => !t.isFinalAssessment).forEach(t => {
      SeoCourseService.completeTask('advanced', t.id);
    });

    // 6. Pass Advanced Master Assessment with 38/40 (Required: 35)
    const advAnswers: Record<string, number> = {};
    SEO_ADVANCED_FINAL_ASSESSMENT.forEach((q, idx) => {
      advAnswers[q.id] = idx < 38 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });
    const advResult = SeoCourseService.submitAssessment('advanced', advAnswers, SEO_ADVANCED_FINAL_ASSESSMENT);
    expect(advResult.passed).toBe(true);

    // 7. Verify Master Certificate Eligibility
    const certEligibility = SeoCourseService.isEligibleForMasterCertificate(advResult.updatedState);
    expect(certEligibility.isEligible).toBe(true);
    expect(certEligibility.advScore).toBe(38);
    expect(certEligibility.overallProgress).toBe(100);
  });

  // ==========================================
  // SECTION 5: RESPONSIVENESS & REGRESSION
  // ==========================================

  test('10. Mobile Responsiveness at 375px Viewport Width', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await setAuthenticatedUser(page, 'seo-mobile-user');
    await resetSeoCourseState(page);

    await page.goto('/courses/seo');
    await expect(page.locator('h1')).toContainText('SEO — Search Engine Optimization', { timeout: 15000 });

    // Verify no horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const windowWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
  });

  test('11. Regression Check: Python, Shopify Liquid, and Meta Ads Courses Remain Fully Operational', async ({ page }) => {
    await setAuthenticatedUser(page, 'seo-reg-user');

    // Python Course
    await page.goto('/courses/python');
    await expect(page.locator('h1')).toContainText('Python', { timeout: 15000 });

    // Shopify Liquid Course
    await page.goto('/courses/shopify');
    await expect(page.locator('h1')).toContainText('Shopify', { timeout: 15000 });

    // Meta Ads Course
    await page.goto('/courses/meta-ads');
    await expect(page.locator('h1')).toContainText('Meta Ads', { timeout: 15000 });
  });

});
