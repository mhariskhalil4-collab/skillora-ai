import { test, expect, Page } from '@playwright/test';
import {
  WEB_DEV_BEGINNER_TASKS,
  WEB_DEV_BEGINNER_ASSESSMENT,
} from '../src/features/roadmap/data/web-development/webDevelopmentBeginner.data';
import {
  WEB_DEV_INTERMEDIATE_TASKS,
  WEB_DEV_INTERMEDIATE_ASSESSMENT,
} from '../src/features/roadmap/data/web-development/webDevelopmentIntermediate.data';
import {
  WEB_DEV_ADVANCED_TASKS,
  WEB_DEV_ADVANCED_ASSESSMENT,
} from '../src/features/roadmap/data/web-development/webDevelopmentAdvanced.data';
import { WebDevelopmentCourseService } from '../src/features/roadmap/services/webDevelopmentCourse.service';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000008',
      email: 'webdev.engineer@skillora.ai',
      firstName: 'Alex',
      role: 'full_stack_engineer',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-web-dev-playwright',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  }, customUserId);
}

// Reset Web Development Course state in localStorage
async function resetWebDevCourseState(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.removeItem('skillora_web_development_course_progress');
  });
}

test.describe('Skillora AI - Web Development Masterclass Comprehensive E2E Verification', () => {
  test.setTimeout(90000);

  // ==========================================
  // SECTION 1: DATA FIDELITY & CURRICULUM AUDIT
  // ==========================================

  test('1. Exact Course Tasks & Modules Count Audit', async () => {
    // Beginner: 12 theory + 1 project + 1 final assessment = 14 tasks
    expect(WEB_DEV_BEGINNER_TASKS.length).toBe(14);
    const begTheory = WEB_DEV_BEGINNER_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment && t.type !== 'project' && t.type !== 'assessment');
    const begProjects = WEB_DEV_BEGINNER_TASKS.filter((t) => t.isProject || t.type === 'project');
    const begAssessments = WEB_DEV_BEGINNER_TASKS.filter((t) => t.isFinalAssessment || t.type === 'assessment');
    expect(begTheory.length).toBe(12);
    expect(begProjects.length).toBe(1);
    expect(begAssessments.length).toBe(1);

    // Intermediate: 14 theory + 1 project + 1 final assessment = 16 tasks
    expect(WEB_DEV_INTERMEDIATE_TASKS.length).toBe(16);
    const intTheory = WEB_DEV_INTERMEDIATE_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment && t.type !== 'project' && t.type !== 'assessment');
    const intProjects = WEB_DEV_INTERMEDIATE_TASKS.filter((t) => t.isProject || t.type === 'project');
    const intAssessments = WEB_DEV_INTERMEDIATE_TASKS.filter((t) => t.isFinalAssessment || t.type === 'assessment');
    expect(intTheory.length).toBe(14);
    expect(intProjects.length).toBe(1);
    expect(intAssessments.length).toBe(1);

    // Advanced: 14 theory + 2 projects + 1 final assessment = 17 tasks
    expect(WEB_DEV_ADVANCED_TASKS.length).toBe(17);
    const advTheory = WEB_DEV_ADVANCED_TASKS.filter((t) => !t.isProject && !t.isFinalAssessment && t.type !== 'project' && t.type !== 'assessment');
    const advProjects = WEB_DEV_ADVANCED_TASKS.filter((t) => t.isProject || t.type === 'project');
    const advAssessments = WEB_DEV_ADVANCED_TASKS.filter((t) => t.isFinalAssessment || t.type === 'assessment');
    expect(advTheory.length).toBe(14);
    expect(advProjects.length).toBe(2);
    expect(advAssessments.length).toBe(1);

    // Total counts
    const totalTheory = begTheory.length + intTheory.length + advTheory.length;
    const totalProjects = begProjects.length + intProjects.length + advProjects.length;
    const totalAssessments = begAssessments.length + intAssessments.length + advAssessments.length;
    const totalTasks = WEB_DEV_BEGINNER_TASKS.length + WEB_DEV_INTERMEDIATE_TASKS.length + WEB_DEV_ADVANCED_TASKS.length;

    expect(totalTheory).toBe(40);
    expect(totalProjects).toBe(4);
    expect(totalAssessments).toBe(3);
    expect(totalTasks).toBe(47);
  });

  test('2. Strict Content Depth: Every Theory Module has Substantial Content & Examples', async () => {
    const allTheoryTasks = [
      ...WEB_DEV_BEGINNER_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject && t.type !== 'project' && t.type !== 'assessment'),
      ...WEB_DEV_INTERMEDIATE_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject && t.type !== 'project' && t.type !== 'assessment'),
      ...WEB_DEV_ADVANCED_TASKS.filter((t) => t.lessonContent && !t.isFinalAssessment && !t.isProject && t.type !== 'project' && t.type !== 'assessment'),
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

      // Verify sections have non-empty content and code snippets
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
      ...WEB_DEV_BEGINNER_TASKS.filter((t) => t.isProject || t.type === 'project'),
      ...WEB_DEV_INTERMEDIATE_TASKS.filter((t) => t.isProject || t.type === 'project'),
      ...WEB_DEV_ADVANCED_TASKS.filter((t) => t.isProject || t.type === 'project'),
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
        const checks = deliv.criteria || (deliv as any).checklist || [];
        expect(checks.length).toBeGreaterThanOrEqual(3);
      }
    }

    expect(totalDelivs).toBeGreaterThanOrEqual(40);
  });

  test('4. Formal Assessments: 90 Questions Total, 4 Options Each & Balanced Answers', async () => {
    expect(WEB_DEV_BEGINNER_ASSESSMENT.length).toBe(20);
    expect(WEB_DEV_INTERMEDIATE_ASSESSMENT.length).toBe(30);
    expect(WEB_DEV_ADVANCED_ASSESSMENT.length).toBe(40);

    const allExams = [
      { name: 'Beginner', questions: WEB_DEV_BEGINNER_ASSESSMENT, expected: 20 },
      { name: 'Intermediate', questions: WEB_DEV_INTERMEDIATE_ASSESSMENT, expected: 30 },
      { name: 'Advanced', questions: WEB_DEV_ADVANCED_ASSESSMENT, expected: 40 },
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

      // Ensure reasonable distribution across A(0), B(1), C(2), D(3)
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
    const initialState = WebDevelopmentCourseService.getInitialState();
    expect(initialState.courseId).toBe('web-development');
    expect(initialState.levels.beginner.status).toBe('in_progress');
    expect(initialState.levels.intermediate.status).toBe('locked');
    expect(initialState.levels.advanced.status).toBe('locked');

    // Attempting to switch directly to locked Intermediate fails
    const switchAttempt = WebDevelopmentCourseService.switchLevel('intermediate');
    expect(switchAttempt.success).toBe(false);
    expect(switchAttempt.error || switchAttempt.reason).toBeTruthy();

    // Anti-tampering: Simulating corrupted or maliciously unlocked localStorage
    const tamperedLevels: any = JSON.parse(JSON.stringify(initialState.levels));
    tamperedLevels.advanced.status = 'available'; // Try to bypass Beginner & Intermediate

    const normalized = WebDevelopmentCourseService.normalizeCourseState({
      courseId: 'web-development',
      courseTitle: 'Web Development Masterclass',
      currentLevel: 'advanced',
      levels: tamperedLevels,
      overallProgress: 0,
    });

    // Verification engine must clamp and re-lock advanced
    expect(normalized.levels.advanced.status).toBe('locked');
    expect(normalized.currentLevel).toBe('beginner');
  });

  test('6. Service Layer: Assessment Scoring & Passing Logic', async () => {
    // Beginner Assessment: 20 questions, pass threshold 15
    const perfectAnswers: Record<number, number> = {};
    WEB_DEV_BEGINNER_ASSESSMENT.forEach((q) => {
      perfectAnswers[q.id] = q.correctAnswer;
    });

    const result = WebDevelopmentCourseService.submitAssessment(
      'beginner',
      perfectAnswers,
      WEB_DEV_BEGINNER_ASSESSMENT
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

  test('7. Course Catalog: Web Development Masterclass Card is Visible with 47 Modules & Projects', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetWebDevCourseState(page);

    await page.goto('/courses');
    await page.waitForLoadState('domcontentloaded');

    // Search or find Web Development Masterclass
    const courseCard = page.locator('text=Web Development Masterclass').first();
    await courseCard.scrollIntoViewIfNeeded();
    await expect(courseCard).toBeVisible({ timeout: 15000 });

    // Click card to navigate to course
    await courseCard.click({ force: true });
    await page.waitForURL('**/courses/web-development**');
    expect(page.url()).toContain('/courses/web-development');
  });

  test('8. Navigation & Route Alias Redirection', async ({ page }) => {
    await setAuthenticatedUser(page);

    // Test primary route
    await page.goto('/courses/web-development');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1').first()).toBeVisible({ timeout: 15000 });

    // Test legacy route redirect /courses/web-development-masterclass
    await page.goto('/courses/web-development-masterclass');
    await page.waitForURL(url => url.toString().includes('web-development'), { timeout: 10000 });
    expect(page.url()).toContain('/courses/web-development');

    // Test subroute query redirect /courses/web-development/beginner
    await page.goto('/courses/web-development/beginner');
    await page.waitForURL(url => url.toString().includes('web-development'), { timeout: 10000 });
    expect(page.url()).toContain('web-development');
  });

  test('9. Search Integration: Web Development is Discoverable via Global Search', async ({ page }) => {
    await setAuthenticatedUser(page);
    await page.goto('/dashboard');
    await page.waitForLoadState('domcontentloaded');

    // Trigger search input or modal if present
    const searchInput = page.locator('input[placeholder*="Search"], input[type="search"], button:has-text("Search")').first();
    if (await searchInput.isVisible()) {
      await searchInput.click();
      if (await searchInput.getAttribute('type') === 'text' || await searchInput.getAttribute('type') === 'search') {
        await searchInput.fill('Web Development');
        await expect(page.locator('text=Web Development Masterclass').first()).toBeVisible({ timeout: 5000 });
      }
    }
  });

  // ==========================================
  // SECTION 4: INTERACTIVE UI & LEVEL SWITCHER
  // ==========================================

  test('10. Interactive Course Screen: Task Drawer & Prerequisite Warning Modal', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetWebDevCourseState(page);

    await page.goto('/courses/web-development');
    await page.waitForLoadState('networkidle');

    // Verify header title
    await expect(page.locator('h1')).toContainText('Web Development Masterclass');

    // Verify first task is available and can be clicked
    const firstTask = page.locator('text=1. Client-Server Architecture, HTTP/HTTPS Protocols & Web DNS').first();
    if (await firstTask.isVisible()) {
      await firstTask.click();
      // Drawer should render
      const drawerTitle = page.locator('text=Client-Server Architecture').first();
      await expect(drawerTitle).toBeVisible({ timeout: 5000 });
      // Close drawer
      const closeBtn = page.locator('button:has-text("Close"), button[aria-label="Close"]').first();
      if (await closeBtn.isVisible()) {
        await closeBtn.click();
      }
    }

    // Clicking Intermediate tab when locked triggers Prerequisite Modal
    const intermediateTab = page.locator('button:has-text("Intermediate"), [role="tab"]:has-text("Intermediate")').first();
    if (await intermediateTab.isVisible()) {
      await intermediateTab.click();
      // Prerequisite modal appears
      const modalHeader = page.locator('text=Prerequisite Required').first();
      await expect(modalHeader).toBeVisible({ timeout: 5000 });
    }
  });

  test('11. Master Certificate Unlocking Flow', async ({ page }) => {
    await setAuthenticatedUser(page);

    // Inject state where user has completed all 3 levels
    await page.addInitScript(() => {
      const state = {
        courseId: 'web-development',
        courseTitle: 'Web Development Masterclass',
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
            tasks: []
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
            tasks: []
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
            tasks: []
          }
        }
      };
      window.localStorage.setItem('skillora_web_development_course_progress', JSON.stringify(state));
    });

    await page.goto('/courses/web-development');
    await page.waitForLoadState('networkidle');

    // Certificate banner must appear
    const certBanner = page.locator('text=Master Full-Stack Certified').first();
    await expect(certBanner).toBeVisible({ timeout: 10000 });

    const claimBtn = page.locator('button:has-text("Claim Master Certificate"), button:has-text("View & Claim Master Certificate")').first();
    await expect(claimBtn).toBeVisible();
  });
});
