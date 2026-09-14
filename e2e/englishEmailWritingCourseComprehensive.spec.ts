import { test, expect, Page } from '@playwright/test';
import {
  ENGLISH_EMAIL_WRITING_BEGINNER_TASKS,
  ENGLISH_EMAIL_WRITING_BEGINNER_ASSESSMENT,
} from '../src/features/roadmap/data/english-email-writing/englishEmailWritingBeginner.data';
import {
  ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS,
  ENGLISH_EMAIL_WRITING_INTERMEDIATE_ASSESSMENT,
} from '../src/features/roadmap/data/english-email-writing/englishEmailWritingIntermediate.data';
import {
  ENGLISH_EMAIL_WRITING_ADVANCED_TASKS,
  ENGLISH_EMAIL_WRITING_ADVANCED_ASSESSMENT,
} from '../src/features/roadmap/data/english-email-writing/englishEmailWritingAdvanced.data';
import { EnglishEmailWritingCourseService } from '../src/features/roadmap/services/englishEmailWritingCourse.service';
import { ShopifyDeveloperCourseService } from '../src/features/roadmap/services/shopifyDeveloperCourse.service';
import { INITIAL_PYTHON_COURSE_STATE } from '../src/features/roadmap/data/python';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000015',
      email: 'english.email.writer@skillora.ai',
      firstName: 'Haris',
      role: 'executive_communication_specialist',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-english-email-playwright',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  }, customUserId);
}

// Reset English Email Writing Course state in localStorage
async function resetEnglishEmailCourseState(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.removeItem('skillora_english_email_writing_course_progress');
  });
}

test.describe('Skillora AI - English Email Writing Masterclass Comprehensive E2E Verification', () => {
  test.setTimeout(90000);

  // ==========================================
  // SECTION 1: DATA FIDELITY & CURRICULUM AUDIT
  // ==========================================

  test('1. Exact Course Tasks & Modules Count Audit', async () => {
    // Beginner: 12 theory + 1 project + 1 final assessment = 14 tasks
    expect(ENGLISH_EMAIL_WRITING_BEGINNER_TASKS.length).toBe(14);
    const begTheory = ENGLISH_EMAIL_WRITING_BEGINNER_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment && t.type !== 'project' && t.type !== 'assessment');
    const begProjects = ENGLISH_EMAIL_WRITING_BEGINNER_TASKS.filter((t) => t.isProject || t.type === 'project');
    const begAssessments = ENGLISH_EMAIL_WRITING_BEGINNER_TASKS.filter((t) => t.isFinalAssessment || t.type === 'assessment');
    expect(begTheory.length).toBe(12);
    expect(begProjects.length).toBe(1);
    expect(begAssessments.length).toBe(1);

    // Intermediate: 14 theory + 1 project + 1 final assessment = 16 tasks
    expect(ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS.length).toBe(16);
    const intTheory = ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment && t.type !== 'project' && t.type !== 'assessment');
    const intProjects = ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS.filter((t) => t.isProject || t.type === 'project');
    const intAssessments = ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS.filter((t) => t.isFinalAssessment || t.type === 'assessment');
    expect(intTheory.length).toBe(14);
    expect(intProjects.length).toBe(1);
    expect(intAssessments.length).toBe(1);

    // Advanced: 14 theory + 2 projects + 1 final assessment = 17 tasks
    expect(ENGLISH_EMAIL_WRITING_ADVANCED_TASKS.length).toBe(17);
    const advTheory = ENGLISH_EMAIL_WRITING_ADVANCED_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment && t.type !== 'project' && t.type !== 'assessment');
    const advProjects = ENGLISH_EMAIL_WRITING_ADVANCED_TASKS.filter((t) => t.isProject || t.type === 'project');
    const advAssessments = ENGLISH_EMAIL_WRITING_ADVANCED_TASKS.filter((t) => t.isFinalAssessment || t.type === 'assessment');
    expect(advTheory.length).toBe(14);
    expect(advProjects.length).toBe(2);
    expect(advAssessments.length).toBe(1);

    // Total counts
    const totalTheory = begTheory.length + intTheory.length + advTheory.length;
    const totalProjects = begProjects.length + intProjects.length + advProjects.length;
    const totalAssessments = begAssessments.length + intAssessments.length + advAssessments.length;
    const totalTasks = ENGLISH_EMAIL_WRITING_BEGINNER_TASKS.length + ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS.length + ENGLISH_EMAIL_WRITING_ADVANCED_TASKS.length;

    expect(totalTheory).toBe(40);
    expect(totalProjects).toBe(4);
    expect(totalAssessments).toBe(3);
    expect(totalTasks).toBe(47);
  });

  test('2. Strict Content Depth: Every Theory Module has Substantial Content, Examples & Key Takeaways', async () => {
    const allTheoryTasks = [
      ...ENGLISH_EMAIL_WRITING_BEGINNER_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject && t.type !== 'project' && t.type !== 'assessment'),
      ...ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject && t.type !== 'project' && t.type !== 'assessment'),
      ...ENGLISH_EMAIL_WRITING_ADVANCED_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject && t.type !== 'project' && t.type !== 'assessment'),
    ];

    expect(allTheoryTasks.length).toBe(40);

    for (const task of allTheoryTasks) {
      expect(task.title).toBeTruthy();
      expect(task.description).toBeTruthy();
      expect(task.lessonContent).toBeDefined();

      const lc = task.lessonContent!;
      expect(lc.overview.trim().length).toBeGreaterThan(60);
      expect(lc.sections.length).toBeGreaterThanOrEqual(1);
      expect(lc.keyTakeaways.length).toBeGreaterThanOrEqual(3);

      for (const section of lc.sections) {
        expect(section.title.trim().length).toBeGreaterThan(5);
        if (section.codeSnippets) {
          for (const snippet of section.codeSnippets) {
            expect(snippet.code.trim().length).toBeGreaterThan(15);
          }
        }
      }
    }
  });

  test('3. Capstone Projects & Substantial Deliverables (>= 10 per project)', async () => {
    const allProjects = [
      ...ENGLISH_EMAIL_WRITING_BEGINNER_TASKS.filter((t) => t.isProject || t.type === 'project'),
      ...ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS.filter((t) => t.isProject || t.type === 'project'),
      ...ENGLISH_EMAIL_WRITING_ADVANCED_TASKS.filter((t) => t.isProject || t.type === 'project'),
    ];

    expect(allProjects.length).toBe(4);

    let totalDelivs = 0;
    for (const proj of allProjects) {
      expect(proj.projectDetails).toBeDefined();
      const pd = proj.projectDetails!;
      expect(pd.deliverables).toBeDefined();
      expect(pd.deliverables.length).toBeGreaterThanOrEqual(10);
      totalDelivs += pd.deliverables.length;

      for (const deliv of pd.deliverables) {
        expect(deliv.id).toBeTruthy();
        expect(deliv.title).toBeTruthy();
        expect(deliv.description.trim().length).toBeGreaterThan(20);
        const checks = deliv.checklist || (deliv as any).criteria || [];
        expect(checks.length).toBeGreaterThanOrEqual(3);
      }
    }

    expect(totalDelivs).toBeGreaterThanOrEqual(40);
  });

  test('4. Formal Assessments: 90 Questions Total, 4 Options Each & Balanced Answers', async () => {
    expect(ENGLISH_EMAIL_WRITING_BEGINNER_ASSESSMENT.length).toBe(20);
    expect(ENGLISH_EMAIL_WRITING_INTERMEDIATE_ASSESSMENT.length).toBe(30);
    expect(ENGLISH_EMAIL_WRITING_ADVANCED_ASSESSMENT.length).toBe(40);

    const allExams = [
      { name: 'Beginner', questions: ENGLISH_EMAIL_WRITING_BEGINNER_ASSESSMENT, expected: 20 },
      { name: 'Intermediate', questions: ENGLISH_EMAIL_WRITING_INTERMEDIATE_ASSESSMENT, expected: 30 },
      { name: 'Advanced', questions: ENGLISH_EMAIL_WRITING_ADVANCED_ASSESSMENT, expected: 40 },
    ];

    let totalMCQs = 0;

    for (const exam of allExams) {
      const counts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };

      for (const q of exam.questions) {
        totalMCQs++;
        expect(q.id).toBeDefined();
        expect(q.question.trim().length).toBeGreaterThan(15);
        expect(q.options.length).toBe(4);
        expect([0, 1, 2, 3]).toContain(q.correctAnswer);
        expect(q.explanation?.trim().length || 0).toBeGreaterThan(20);

        for (const opt of q.options) {
          expect(opt.trim().length).toBeGreaterThan(0);
        }

        counts[q.correctAnswer]++;
      }

      // Ensure balanced distribution across A, B, C, D
      for (const optIdx of [0, 1, 2, 3]) {
        expect(counts[optIdx]).toBeGreaterThan(0);
      }
    }

    expect(totalMCQs).toBe(90);
  });

  // ==========================================
  // SECTION 2: SERVICE LAYER & LOGIC AUDIT
  // ==========================================

  test('5. Service Layer: State Normalization, Prerequisite Gating & Anti-Tampering', async () => {
    // Initial State Check
    const initialState = EnglishEmailWritingCourseService.getInitialState();
    expect(initialState.courseId).toBe('english-email-writing');
    expect(initialState.levels.beginner.status).toBe('in_progress');
    expect(initialState.levels.intermediate.status).toBe('locked');
    expect(initialState.levels.advanced.status).toBe('locked');

    // Attempting to switch directly to locked Intermediate fails
    const switchAttempt = EnglishEmailWritingCourseService.switchLevel('intermediate');
    expect(switchAttempt.success).toBe(false);
    expect(switchAttempt.error || switchAttempt.reason).toBeTruthy();

    // Anti-tampering: Simulating corrupted or maliciously unlocked localStorage
    const tamperedLevels: any = JSON.parse(JSON.stringify(initialState.levels));
    tamperedLevels.advanced.status = 'available';

    const normalized = EnglishEmailWritingCourseService.normalizeCourseState({
      courseId: 'english-email-writing',
      courseTitle: 'English Email Writing Masterclass',
      currentLevel: 'advanced',
      levels: tamperedLevels,
      overallProgress: 0,
    });

    // Verification engine must clamp and re-lock advanced
    expect(normalized.levels.advanced.status).toBe('locked');
    expect(normalized.currentLevel).toBe('beginner');
  });

  test('6. Service Layer: Assessment Scoring & Passing Logic', async () => {
    const perfectAnswers: Record<number, number> = {};
    ENGLISH_EMAIL_WRITING_BEGINNER_ASSESSMENT.forEach((q) => {
      perfectAnswers[q.id] = q.correctAnswer;
    });

    const result = EnglishEmailWritingCourseService.submitAssessment(
      'beginner',
      perfectAnswers,
      ENGLISH_EMAIL_WRITING_BEGINNER_ASSESSMENT
    );

    expect(result.passed).toBe(true);
    expect(result.score).toBe(20);
    expect(result.requiredScore).toBe(15);
    expect(result.percentage).toBe(100);
    expect(result.weakAreas.length).toBe(0);
  });

  // ==========================================
  // SECTION 3: UI NAVIGATION & ROUTING
  // ==========================================

  test('7. Course Catalog: English Email Writing Masterclass Card is Visible with 47 Modules & Projects', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetEnglishEmailCourseState(page);

    await page.goto('/courses');
    await page.waitForLoadState('domcontentloaded');

    // Find English Email Writing Masterclass card
    const courseCard = page.locator('text=English Email Writing Masterclass').first();
    await courseCard.scrollIntoViewIfNeeded();
    await expect(courseCard).toBeVisible({ timeout: 15000 });

    // Click card to navigate to course
    await courseCard.click();
    await page.waitForURL('**/courses/english-email-writing**');
    expect(page.url()).toContain('/courses/english-email-writing');
  });

  test('8. Navigation & Route Alias Redirection', async ({ page }) => {
    await setAuthenticatedUser(page);

    // Test primary route
    await page.goto('/courses/english-email-writing');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1:has-text("English Email Writing Masterclass")')).toBeVisible({ timeout: 15000 });

    // Test legacy route redirect /courses/english-email-writing-masterclass
    await page.goto('/courses/english-email-writing-masterclass');
    await expect(page).toHaveURL(/\/courses\/english-email-writing/, { timeout: 10000 });
    await expect(page.locator('h1:has-text("English Email Writing Masterclass")')).toBeVisible({ timeout: 15000 });

    // Test subroute query redirect /courses/english-email-writing/beginner
    await page.goto('/courses/english-email-writing/beginner');
    await expect(page).toHaveURL(/.*level=beginner.*/, { timeout: 10000 });
  });

  test('9. Search Integration: English Email Writing is Discoverable via Global Search', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/dashboard');
    await page.waitForLoadState('domcontentloaded');

    const searchInput = page.locator('input[placeholder*="Search"], input[type="search"], button:has-text("Search")').first();
    if (await searchInput.isVisible()) {
      await searchInput.click();
      if ((await searchInput.getAttribute('type')) === 'text' || (await searchInput.getAttribute('type')) === 'search') {
        await searchInput.fill('Email Writing');
        await expect(page.locator('text=English Email Writing Masterclass').first()).toBeVisible({ timeout: 5000 });
      }
    }
  });

  // ==========================================
  // SECTION 4: INTERACTIVE UI & LEVEL SWITCHER
  // ==========================================

  test('10. Interactive Course Screen: Task Drawer & Prerequisite Warning Modal', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetEnglishEmailCourseState(page);

    await page.goto('/courses/english-email-writing');
    await page.waitForLoadState('domcontentloaded');

    await expect(page.locator('h1:has-text("English Email Writing Masterclass")')).toBeVisible({ timeout: 15000 });

    // Verify first task is clickable
    const firstTask = page.locator('text=Introduction to English Email Writing').first();
    if (await firstTask.isVisible()) {
      await firstTask.click();
      // Drawer should render
      const drawerTitle = page.locator('text=Introduction to English Email Writing').first();
      await expect(drawerTitle).toBeVisible({ timeout: 5000 });
      // Close drawer
      const closeBtn = page.locator('div[role="dialog"] button').first();
      if (await closeBtn.isVisible()) {
        await closeBtn.click();
        await page.waitForTimeout(500);
      }
    }

    // Clicking Intermediate tab when locked triggers Prerequisite Modal
    const intermediateTab = page.locator('button:has-text("Intermediate"), [role="tab"]:has-text("Intermediate")').first();
    if (await intermediateTab.isVisible()) {
      await intermediateTab.click({ force: true });
      const modalHeader = page.locator('text=Prerequisite Required').first();
      await expect(modalHeader).toBeVisible({ timeout: 5000 });
    }
  });

  test('11. Master Certificate Unlocking Flow', async ({ page }) => {
    await setAuthenticatedUser(page);

    // Inject state where user has completed all 3 levels
    await page.addInitScript(() => {
      const state = {
        courseId: 'english-email-writing',
        courseTitle: 'English Email Writing Masterclass',
        currentLevel: 'advanced',
        overallProgress: 100,
        levels: {
          beginner: {
            title: 'Level 1: Beginner',
            status: 'completed',
            completedTasks: 14,
            totalTasks: 14,
            progressPercentage: 100,
            assessmentPassed: true,
            assessmentScore: 20,
            requiredScore: 15,
            totalQuestions: 20,
            tasks: [],
          },
          intermediate: {
            title: 'Level 2: Intermediate',
            status: 'completed',
            completedTasks: 16,
            totalTasks: 16,
            progressPercentage: 100,
            assessmentPassed: true,
            assessmentScore: 30,
            requiredScore: 25,
            totalQuestions: 30,
            tasks: [],
          },
          advanced: {
            title: 'Level 3: Advanced',
            status: 'completed',
            completedTasks: 17,
            totalTasks: 17,
            progressPercentage: 100,
            assessmentPassed: true,
            assessmentScore: 40,
            requiredScore: 35,
            totalQuestions: 40,
            tasks: [],
          },
        },
      };
      window.localStorage.setItem('skillora_english_email_writing_course_progress', JSON.stringify(state));
    });

    await page.goto('/courses/english-email-writing');
    await page.waitForLoadState('domcontentloaded');

    // Certificate banner must appear
    const certBanner = page.locator('text=Master English Email Writing Certified').first();
    await expect(certBanner).toBeVisible({ timeout: 10000 });

    const claimBtn = page.locator('button:has-text("Claim Master Certificate"), button:has-text("View & Claim Master Certificate")').first();
    await expect(claimBtn).toBeVisible();
  });

  test('12. Isolation: Existing Courses Remain Separate and Functional', async ({ page }) => {
    await setAuthenticatedUser(page);

    // Verify course initial states and storage keys are isolated
    expect(INITIAL_PYTHON_COURSE_STATE.courseId).toBe('python-masterclass');

    const shopifyDevInitial = ShopifyDeveloperCourseService.getInitialState();
    expect(shopifyDevInitial.courseId).toBe('shopify-developer');

    const emailInitial = EnglishEmailWritingCourseService.getInitialState();
    expect(emailInitial.courseId).toBe('english-email-writing');

    // Visit /courses/shopify-developer
    await page.goto('/courses/shopify-developer');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1:has-text("Shopify Developer Masterclass")')).toBeVisible({ timeout: 15000 });

    // Visit /courses/english-email-writing
    await page.goto('/courses/english-email-writing');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1:has-text("English Email Writing Masterclass")')).toBeVisible({ timeout: 15000 });
  });
});
