import { test, expect, Page } from '@playwright/test';
import {
  META_BEGINNER_TASKS,
  META_BEGINNER_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/meta/metaBeginner.data';
import {
  META_INTERMEDIATE_TASKS,
  META_INTERMEDIATE_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/meta/metaIntermediate.data';
import {
  META_ADVANCED_TASKS,
  META_ADVANCED_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/meta/metaAdvanced.data';
import { MetaAdsCourseService } from '../src/features/roadmap/services/metaAdsCourse.service';
import { QuizQuestion } from '../src/features/roadmap/types/roadmap.types';

// Helper to inject authenticated session into client localStorage
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

// Reset Meta Ads Course state in localStorage
async function resetMetaAdsCourseState(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.removeItem('skillora_meta_ads_course_progress');
  });
}

test.describe('Skillora AI - Meta Ads Course Comprehensive E2E Verification', () => {
  test.setTimeout(60000);

  // ==========================================
  // SECTION 1: DATA FIDELITY & CURRICULUM DEPTH
  // ==========================================

  test('1. Module & Task Counts Verification Across All Levels', async () => {
    // Beginner: 12 theory + 1 capstone project + 1 final assessment = 14 tasks
    expect(META_BEGINNER_TASKS.length).toBe(14);
    const begModules = META_BEGINNER_TASKS.filter((t) => !t.isFinalAssessment);
    expect(begModules.length).toBe(13); // 12 theory + 1 project

    // Intermediate: 14 theory + 1 capstone project + 1 final assessment = 16 tasks
    expect(META_INTERMEDIATE_TASKS.length).toBe(16);
    const intModules = META_INTERMEDIATE_TASKS.filter((t) => !t.isFinalAssessment);
    expect(intModules.length).toBe(15); // 14 theory + 1 project

    // Advanced: 14 theory + 2 production projects + 1 final assessment = 17 tasks
    expect(META_ADVANCED_TASKS.length).toBe(17);
    const advModules = META_ADVANCED_TASKS.filter((t) => !t.isFinalAssessment);
    expect(advModules.length).toBe(16); // 14 theory + 2 projects

    // Total course tasks: 14 + 16 + 17 = 47
    const totalTasks = META_BEGINNER_TASKS.length + META_INTERMEDIATE_TASKS.length + META_ADVANCED_TASKS.length;
    expect(totalTasks).toBe(47);
  });

  test('2. Strict Content Depth: Every Module & Project has >= 3 Practical Examples & Line-by-Line Breakdowns', async () => {
    const allLearningTasks = [
      ...META_BEGINNER_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment),
      ...META_INTERMEDIATE_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment),
      ...META_ADVANCED_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment),
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

  test('3. Exact 90 MCQ Integrity Verification (20 Beginner + 30 Intermediate + 40 Advanced)', async () => {
    // Beginner: 20 MCQs
    expect(META_BEGINNER_FINAL_ASSESSMENT.length).toBe(20);
    // Intermediate: 30 MCQs
    expect(META_INTERMEDIATE_FINAL_ASSESSMENT.length).toBe(30);
    // Advanced: 40 MCQs
    expect(META_ADVANCED_FINAL_ASSESSMENT.length).toBe(40);

    const levels: { name: string; list: QuizQuestion[] }[] = [
      { name: 'Beginner', list: META_BEGINNER_FINAL_ASSESSMENT },
      { name: 'Intermediate', list: META_INTERMEDIATE_FINAL_ASSESSMENT },
      { name: 'Advanced', list: META_ADVANCED_FINAL_ASSESSMENT },
    ];

    for (const lvl of levels) {
      for (const [idx, q] of lvl.list.entries()) {
        expect(q.id, `${lvl.name} Question ${idx} missing ID`).toBeTruthy();
        expect(q.question.length, `${lvl.name} Question ${idx} text is too short`).toBeGreaterThan(15);
        expect(q.options.length, `${lvl.name} Question ${idx} must have 4 options`).toBe(4);
        expect(q.correctAnswer, `${lvl.name} Question ${idx} correctAnswer must be 0..3`).toBeGreaterThanOrEqual(0);
        expect(q.correctAnswer).toBeLessThanOrEqual(3);
        expect((q.explanation || '').length, `${lvl.name} Question ${idx} explanation is too short`).toBeGreaterThan(15);
      }
    }
  });

  // ==========================================
  // SECTION 2: SERVICE LOGIC & PROGRESSION GATING
  // ==========================================

  test('4. Gating Service: Beginner starts Unlocked; Intermediate & Advanced start Locked', async () => {
    const state = MetaAdsCourseService.getCourseState();
    expect(state.currentLevel).toBe('beginner');
    expect(state.levels.beginner.status).toBe('in_progress');
    expect(state.levels.intermediate.status).toBe('locked');
    expect(state.levels.advanced.status).toBe('locked');

    // Attempting to switch to Intermediate directly must fail
    const switchToInt = MetaAdsCourseService.switchLevel('intermediate');
    expect(switchToInt.success).toBe(false);
    expect(switchToInt.message).toContain('Level 2 (Intermediate) requires');

    // Attempting to switch to Advanced directly must fail
    const switchToAdv = MetaAdsCourseService.switchLevel('advanced');
    expect(switchToAdv.success).toBe(false);
    expect(switchToAdv.message).toContain('Level 3 (Advanced) requires');
  });

  test('5. Service Progression: Completing Beginner + Passing Assessment (>= 15/20) Unlocks Intermediate', async () => {
    let state = MetaAdsCourseService.resetCourseState();

    // 1. Complete all 13 Beginner non-assessment tasks
    const begTasks = state.levels.beginner.tasks.filter((t) => !t.isFinalAssessment);
    for (const t of begTasks) {
      state = MetaAdsCourseService.completeTask('beginner', t.id);
    }

    // Still cannot unlock intermediate before passing assessment
    let check = MetaAdsCourseService.checkLevelPrerequisites('intermediate', state);
    expect(check.canUnlock).toBe(false);

    // 2. Submit failing assessment (e.g. 10/20)
    const answersFail: Record<string, number> = {};
    META_BEGINNER_FINAL_ASSESSMENT.forEach((q: QuizQuestion, idx: number) => {
      answersFail[q.id] = idx < 10 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });
    let result = MetaAdsCourseService.submitAssessment('beginner', answersFail, META_BEGINNER_FINAL_ASSESSMENT);
    expect(result.passed).toBe(false);
    expect(result.score).toBe(10);
    check = MetaAdsCourseService.checkLevelPrerequisites('intermediate', MetaAdsCourseService.getCourseState());
    expect(check.canUnlock).toBe(false);

    // 3. Submit passing assessment (18/20 >= 15)
    const answersPass: Record<string, number> = {};
    META_BEGINNER_FINAL_ASSESSMENT.forEach((q: QuizQuestion, idx: number) => {
      answersPass[q.id] = idx < 18 ? q.correctAnswer : (q.correctAnswer + 1) % 4;
    });
    result = MetaAdsCourseService.submitAssessment('beginner', answersPass, META_BEGINNER_FINAL_ASSESSMENT);
    expect(result.passed).toBe(true);
    expect(result.score).toBe(18);

    // Now Intermediate is unlocked!
    const switchRes = MetaAdsCourseService.switchLevel('intermediate');
    expect(switchRes.success).toBe(true);
    expect(switchRes.state.currentLevel).toBe('intermediate');
    expect(switchRes.state.levels.intermediate.status).toBe('in_progress');
  });

  test('6. Service Master Certification: Requires Advanced Score >= 35/40 AND 100% Course Completion', async () => {
    const state = MetaAdsCourseService.resetCourseState();

    // Complete all Beginner tasks & pass assessment
    state.levels.beginner.tasks.forEach((t) => {
      t.status = 'completed';
    });
    state.levels.beginner.assessmentScore = 19;
    state.levels.beginner.assessmentPassed = true;
    state.levels.beginner.status = 'completed';

    // Complete all Intermediate tasks & pass assessment
    state.levels.intermediate.status = 'completed';
    state.levels.intermediate.tasks.forEach((t) => {
      t.status = 'completed';
    });
    state.levels.intermediate.assessmentScore = 28;
    state.levels.intermediate.assessmentPassed = true;

    // Complete Advanced tasks but fail assessment (30/40 < 35)
    state.levels.advanced.status = 'in_progress';
    state.levels.advanced.tasks.forEach((t) => {
      t.status = 'completed';
    });
    state.levels.advanced.assessmentScore = 30;
    state.levels.advanced.assessmentPassed = false;

    MetaAdsCourseService.saveCourseState(state);

    let certCheck = MetaAdsCourseService.isEligibleForMasterCertificate(state);
    expect(certCheck.isEligible).toBe(false);
    expect(certCheck.reason).toContain('Score at least 35/40');

    // Now pass Advanced Assessment with 38/40
    state.levels.advanced.assessmentScore = 38;
    state.levels.advanced.assessmentPassed = true;
    state.levels.advanced.status = 'completed';
    MetaAdsCourseService.saveCourseState(state);

    certCheck = MetaAdsCourseService.isEligibleForMasterCertificate(state);
    expect(certCheck.isEligible).toBe(true);
    expect(certCheck.advScore).toBe(38);
    expect(certCheck.overallProgress).toBe(100);
  });

  // ==========================================
  // SECTION 3: UI & NAVIGATION VERIFICATION
  // ==========================================

  test('7. Course Catalog & Navigation to Meta Ads Screen', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetMetaAdsCourseState(page);

    await page.goto('/courses');
    await expect(page.locator('h1')).toContainText('Structured Skill Courses');

    // Verify Meta Ads card is present in catalog
    const metaCard = page.locator('text=Meta Ads — Complete Professional Development Course').first();
    await expect(metaCard).toBeVisible();

    // Click on Meta Ads course
    await metaCard.click();
    await expect(page).toHaveURL(/\/courses\/meta-ads/);

    // Verify course header and metrics
    await expect(page.locator('h1')).toContainText('Meta Ads — Complete Professional Development Course');
    await expect(page.locator('text=Performance Marketing Track')).toBeVisible();
    await expect(page.locator('text=3 Levels')).toBeVisible();
    await expect(page.locator('text=44 Modules')).toBeVisible();
    await expect(page.locator('text=3 Official Exams (90 MCQs)')).toBeVisible();
  });

  test('8. UI Prerequisite Modal when clicking locked Intermediate or Advanced tab', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetMetaAdsCourseState(page);

    await page.goto('/courses/meta-ads');
    await expect(page.locator('h1')).toContainText('Meta Ads — Complete Professional Development Course');

    // Click on Level 2: Intermediate button in CourseLevelSwitcher
    const intermediateBtn = page.locator('button:has-text("Level 2: Intermediate")').first();
    await intermediateBtn.click();

    // Verify Prerequisite Modal appears
    await expect(page.locator('text=Prerequisite Required')).toBeVisible();
    await expect(page.locator('text=Level 2: Meta Ads Intermediate is Locked')).toBeVisible();
    await expect(page.locator('button:has-text("Go to Prerequisite")')).toBeVisible();

    // Close modal via Cancel button
    const cancelBtn = page.locator('button:has-text("Cancel")');
    await cancelBtn.click();
    await expect(page.locator('text=Prerequisite Required')).not.toBeVisible();
  });

  test('9. Drawer & Full Lesson Content Experience: Theory, Examples, Copy Code, Mark Complete', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetMetaAdsCourseState(page);

    await page.goto('/courses/meta-ads');
    await expect(page.locator('h1')).toContainText('Meta Ads — Complete Professional Development Course');

    // Click first module card in the timeline
    const module1Card = page.locator('h3:has-text("Module 1: Introduction to Meta Ads")').first();
    await expect(module1Card).toBeVisible();
    await module1Card.click();

    // Verify Task Detail Drawer opened
    await expect(page.locator('text=Step 1 Module')).toBeVisible();

    // Click "Start Learning Lesson"
    const startLessonBtn = page.locator('button:has-text("Start Learning Lesson")').first();
    await startLessonBtn.click();

    // Verify full Lesson Content Screen is loaded
    await expect(page.locator("text=What You'll Learn In This Lesson")).toBeVisible();
    await expect(page.locator('text=Lesson Summary & Key Takeaways')).toBeVisible();

    // Verify code snippet and copy button
    const copyBtn = page.locator('button:has-text("Copy Code")').first();
    await expect(copyBtn).toBeVisible();
    await copyBtn.click();
    await expect(page.locator('text=Copied!')).toBeVisible();

    // Toggle Mark Lesson as Complete
    const markCompleteBtn = page.locator('button:has-text("Mark Lesson as Complete")');
    await markCompleteBtn.click();
    await expect(page.locator('text=Lesson Completed')).toBeVisible();

    // Return back to roadmap
    const backBtn = page.locator('button:has-text("Back to Roadmap")');
    await backBtn.click();
  });

  test('10. Assessment Flow & Certificate Claim UI Integration', async ({ page }) => {
    await setAuthenticatedUser(page);
    
    // Inject fully completed state into localStorage
    await page.addInitScript(() => {
      const state = {
        courseId: 'meta-ads',
        courseTitle: 'Meta Ads — Complete Professional Development Course',
        currentLevel: 'advanced',
        overallProgress: 100,
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: Meta Ads Beginner',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 14,
            totalTasks: 14,
            assessmentPassed: true,
            assessmentScore: 20,
            requiredScore: 15,
            totalQuestions: 20,
            tasks: Array.from({ length: 14 }, (_, i) => ({ id: `meta-beg-${i + 1}`, status: 'completed' }))
          },
          intermediate: {
            level: 'intermediate',
            title: 'Level 2: Meta Ads Intermediate',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 16,
            totalTasks: 16,
            assessmentPassed: true,
            assessmentScore: 30,
            requiredScore: 25,
            totalQuestions: 30,
            tasks: Array.from({ length: 16 }, (_, i) => ({ id: `meta-int-${i + 1}`, status: 'completed' }))
          },
          advanced: {
            level: 'advanced',
            title: 'Level 3: Meta Ads Advanced',
            status: 'completed',
            progressPercentage: 100,
            completedTasks: 17,
            totalTasks: 17,
            assessmentPassed: true,
            assessmentScore: 40,
            requiredScore: 35,
            totalQuestions: 40,
            tasks: Array.from({ length: 17 }, (_, i) => ({ id: `meta-adv-${i + 1}`, status: 'completed' }))
          }
        }
      };
      window.localStorage.setItem('skillora_meta_ads_course_progress', JSON.stringify(state));
    });

    await page.goto('/courses/meta-ads');

    // Verify Master Certificate Hero Banner appears
    await expect(page.locator('text=Meta Ads Course Completed!')).toBeVisible();
    await expect(page.locator('text=Meta Certified Media Buying Master')).toBeVisible();
    await expect(page.locator('button:has-text("View & Claim Master Certificate")')).toBeVisible();

    // Click claim button
    const claimBtn = page.locator('button:has-text("View & Claim Master Certificate")');
    await claimBtn.click();

    // Verify redirection to profile certificates tab (waiting for 1.5s toast timeout)
    await expect(page).toHaveURL(/\/profile\?tab=certificates/, { timeout: 10000 });
  });
});
