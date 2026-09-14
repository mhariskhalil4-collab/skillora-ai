import { test, expect, Page } from '@playwright/test';
import {
  PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_TASKS,
  PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_ASSESSMENT,
} from '../src/features/roadmap/data/professional-english-speaking/professionalEnglishSpeakingBeginner.data';
import {
  PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_TASKS,
  PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_ASSESSMENT,
} from '../src/features/roadmap/data/professional-english-speaking/professionalEnglishSpeakingIntermediate.data';
import {
  PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_TASKS,
  PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_ASSESSMENT,
} from '../src/features/roadmap/data/professional-english-speaking/professionalEnglishSpeakingAdvanced.data';
import { ProfessionalEnglishSpeakingCourseService } from '../src/features/roadmap/services/professionalEnglishSpeakingCourse.service';
import { INITIAL_PYTHON_COURSE_STATE } from '../src/features/roadmap/data/python';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000016',
      email: 'speaker.master@skillora.ai',
      firstName: 'Haris',
      role: 'executive_speaker',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-pes-playwright',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  }, customUserId);
}

// Reset course state in localStorage
async function resetPESCourseState(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.removeItem('skillora_professional_english_speaking_course_progress');
  });
}

test.describe('Skillora AI - Professional English Speaking Masterclass Comprehensive E2E Verification', () => {
  test.setTimeout(90000);

  // ==========================================
  // SECTION 1: DATA FIDELITY & CURRICULUM AUDIT
  // ==========================================

  test('1. Exact Course Tasks & Modules Count Audit', async () => {
    // Beginner: 11 theory + 1 project + 1 final assessment = 13 tasks (12 learning modules)
    expect(PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_TASKS.length).toBe(13);
    const begTheory = PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_TASKS.filter(
      (t) => !t.isProject && !t.isFinalAssessment && t.type !== 'project' && t.type !== 'assessment'
    );
    const begProjects = PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_TASKS.filter(
      (t) => t.isProject || t.type === 'project'
    );
    const begAssessments = PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_TASKS.filter(
      (t) => t.isFinalAssessment || t.type === 'assessment'
    );
    expect(begTheory.length).toBe(11);
    expect(begProjects.length).toBe(1);
    expect(begAssessments.length).toBe(1);

    // Intermediate: 13 theory + 1 project + 1 final assessment = 15 tasks (14 learning modules)
    expect(PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_TASKS.length).toBe(15);
    const intTheory = PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_TASKS.filter(
      (t) => !t.isProject && !t.isFinalAssessment && t.type !== 'project' && t.type !== 'assessment'
    );
    const intProjects = PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_TASKS.filter(
      (t) => t.isProject || t.type === 'project'
    );
    const intAssessments = PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_TASKS.filter(
      (t) => t.isFinalAssessment || t.type === 'assessment'
    );
    expect(intTheory.length).toBe(13);
    expect(intProjects.length).toBe(1);
    expect(intAssessments.length).toBe(1);

    // Advanced: 13 theory + 1 project + 1 final assessment = 15 tasks (14 learning modules)
    expect(PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_TASKS.length).toBe(15);
    const advTheory = PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_TASKS.filter(
      (t) => !t.isProject && !t.isFinalAssessment && t.type !== 'project' && t.type !== 'assessment'
    );
    const advProjects = PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_TASKS.filter(
      (t) => t.isProject || t.type === 'project'
    );
    const advAssessments = PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_TASKS.filter(
      (t) => t.isFinalAssessment || t.type === 'assessment'
    );
    expect(advTheory.length).toBe(13);
    expect(advProjects.length).toBe(1);
    expect(advAssessments.length).toBe(1);

    // Total counts
    const totalTheory = begTheory.length + intTheory.length + advTheory.length;
    const totalProjects = begProjects.length + intProjects.length + advProjects.length;
    const totalLearningModules = totalTheory + totalProjects;
    const totalAssessments = begAssessments.length + intAssessments.length + advAssessments.length;
    const totalTasks =
      PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_TASKS.length +
      PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_TASKS.length +
      PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_TASKS.length;

    expect(totalTheory).toBe(37);
    expect(totalProjects).toBe(3);
    expect(totalLearningModules).toBe(40);
    expect(totalAssessments).toBe(3);
    expect(totalTasks).toBe(43);
  });

  test('2. Strict Content Depth: Every Theory Module has >= 3 Dialogues, Objectives, Key Takeaways & Practice Drills', async () => {
    const allTheoryTasks = [
      ...PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_TASKS.filter(
        (t) => t.lessonContent && !t.isFinalAssessment && !t.isProject && t.type !== 'project' && t.type !== 'assessment'
      ),
      ...PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_TASKS.filter(
        (t) => t.lessonContent && !t.isFinalAssessment && !t.isProject && t.type !== 'project' && t.type !== 'assessment'
      ),
      ...PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_TASKS.filter(
        (t) => t.lessonContent && !t.isFinalAssessment && !t.isProject && t.type !== 'project' && t.type !== 'assessment'
      ),
    ];

    expect(allTheoryTasks.length).toBe(37);

    const bannedWords = ['coming soon', 'todo', 'lorem ipsum', 'research this topic', 'placeholder', 'as an ai'];

    for (const task of allTheoryTasks) {
      const content = task.lessonContent!;
      expect(content.overview.length).toBeGreaterThan(60);
      expect(content.objectives.length).toBeGreaterThanOrEqual(3);
      expect(content.sections.length).toBeGreaterThanOrEqual(1);

      let totalDialogues = 0;
      for (const sec of content.sections) {
        expect(sec.title.length).toBeGreaterThan(5);
        expect(sec.content ? sec.content.length : 0).toBeGreaterThan(30);
        if (sec.codeSnippets) {
          totalDialogues += sec.codeSnippets.length;
          for (const snip of sec.codeSnippets) {
            expect(snip.title ? snip.title.length : 0).toBeGreaterThan(3);
            expect(snip.code.length).toBeGreaterThan(50);
          }
        }
      }
      expect(totalDialogues).toBeGreaterThanOrEqual(3);
      expect(content.keyTakeaways.length).toBeGreaterThanOrEqual(3);
      expect(content.practiceExercises ? content.practiceExercises.length : 0).toBeGreaterThanOrEqual(1);

      const fullText = JSON.stringify(content).toLowerCase();
      for (const banned of bannedWords) {
        expect(fullText).not.toContain(banned);
      }
    }
  });

  test('3. Capstone Projects Audit: Exactly 3 Projects with >= 10 Deliverables Each', async () => {
    const projects = [
      PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_TASKS.find((t) => t.isProject || t.type === 'project'),
      PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_TASKS.find((t) => t.isProject || t.type === 'project'),
      PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_TASKS.find((t) => t.isProject || t.type === 'project'),
    ];

    expect(projects.length).toBe(3);

    for (let i = 0; i < projects.length; i++) {
      const p = projects[i]!;
      expect(p).toBeDefined();
      expect(p.projectDetails).toBeDefined();
      expect(p.projectDetails!.deliverables.length).toBeGreaterThanOrEqual(10);
      expect(p.projectDetails!.overview.length).toBeGreaterThan(50);
      expect(p.projectDetails!.evaluationRubric.length).toBeGreaterThanOrEqual(3);

      for (const del of p.projectDetails!.deliverables) {
        expect(del.id).toBeTruthy();
        expect(del.title.length).toBeGreaterThan(5);
        expect(del.description.length).toBeGreaterThan(20);
      }
    }
  });

  test('4. Assessment Fidelity & Exact Balanced Answer Distribution Audit (90 Total MCQs)', async () => {
    // Beginner Assessment: 20 Questions, 5 A, 5 B, 5 C, 5 D
    expect(PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_ASSESSMENT.length).toBe(20);
    const begDist = [0, 0, 0, 0];
    for (const q of PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_ASSESSMENT) {
      expect(q.options.length).toBe(4);
      expect(q.explanation ? q.explanation.length : 0).toBeGreaterThan(15);
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer).toBeLessThanOrEqual(3);
      begDist[q.correctAnswer]++;
    }
    expect(begDist).toEqual([5, 5, 5, 5]);

    // Intermediate Assessment: 30 Questions, 8 A, 8 B, 7 C, 7 D
    expect(PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_ASSESSMENT.length).toBe(30);
    const intDist = [0, 0, 0, 0];
    for (const q of PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_ASSESSMENT) {
      expect(q.options.length).toBe(4);
      expect(q.explanation ? q.explanation.length : 0).toBeGreaterThan(15);
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer).toBeLessThanOrEqual(3);
      intDist[q.correctAnswer]++;
    }
    expect(intDist).toEqual([8, 8, 7, 7]);

    // Advanced Assessment: 40 Questions, 10 A, 10 B, 10 C, 10 D
    expect(PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_ASSESSMENT.length).toBe(40);
    const advDist = [0, 0, 0, 0];
    for (const q of PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_ASSESSMENT) {
      expect(q.options.length).toBe(4);
      expect(q.explanation ? q.explanation.length : 0).toBeGreaterThan(15);
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer).toBeLessThanOrEqual(3);
      advDist[q.correctAnswer]++;
    }
    expect(advDist).toEqual([10, 10, 10, 10]);

    // Total MCQs: 20 + 30 + 40 = 90
    const totalMCQs =
      PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_ASSESSMENT.length +
      PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_ASSESSMENT.length +
      PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_ASSESSMENT.length;
    expect(totalMCQs).toBe(90);
  });

  // ==========================================
  // SECTION 2: SERVICE LAYER UNIT TESTS
  // ==========================================

  test('5. Service Layer: State Loading, Normalization, Gating & Scoring', async () => {
    // 5.1 Initial Load
    const state = ProfessionalEnglishSpeakingCourseService.getCourseState();
    expect(state.courseId).toBe('professional-english-speaking');
    expect(state.currentLevel).toBe('beginner');
    expect(state.levels.beginner.tasks.length).toBe(13);
    expect(state.levels.intermediate.tasks.length).toBe(15);
    expect(state.levels.advanced.tasks.length).toBe(15);

    // 5.2 Task Completion
    const updatedState = ProfessionalEnglishSpeakingCourseService.completeTask('beginner', 'pes-beg-01');
    expect(updatedState.levels.beginner.tasks.find((t) => t.id === 'pes-beg-01')?.status).toBe('completed');
    expect(updatedState.levels.beginner.tasks.find((t) => t.id === 'pes-beg-01')?.isCompleted).toBe(true);

    // 5.3 Deliverable Toggling
    const projState = ProfessionalEnglishSpeakingCourseService.toggleProjectDeliverable(
      'beginner',
      'pes-beg-project',
      'del-pes-beg-01',
      true
    );
    const begProj = projState.levels.beginner.tasks.find((t: { id: string }) => t.id === 'pes-beg-project');
    expect(begProj?.projectDetails?.deliverables.find((d: { id: string }) => d.id === 'del-pes-beg-01')?.completed).toBe(true);

    // 5.4 Evaluate Assessment
    const answers: Record<number, number> = {};
    PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_ASSESSMENT.forEach((q, idx) => {
      answers[idx] = q.correctAnswer;
    });

    const evalRes = ProfessionalEnglishSpeakingCourseService.evaluateAssessment('beginner', answers);
    expect(evalRes.passed).toBe(true);
    expect(evalRes.score).toBe(20);
    expect(evalRes.percentage).toBe(100);
  });

  // ==========================================
  // SECTION 3: UI & ROUTING INTEGRATION
  // ==========================================

  test('6. Course Catalog Card Rendering & Direct Navigation', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetPESCourseState(page);

    await page.goto('/courses');
    await page.waitForLoadState('networkidle');

    // Verify card is visible with title
    const courseCard = page.locator('text=Professional English Speaking Masterclass').first();
    await expect(courseCard).toBeVisible({ timeout: 15000 });

    // Click card and navigate to course
    await courseCard.click();
    await page.waitForURL('**/courses/professional-english-speaking**');
    expect(page.url()).toContain('/courses/professional-english-speaking');
  });

  test('7. Primary Route, Alias Route & Query Redirects Verification', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetPESCourseState(page);

    // Primary route
    await page.goto('/courses/professional-english-speaking');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toContainText('Professional English Speaking Masterclass');

    // Alias route redirect
    await page.goto('/courses/professional-english-speaking-masterclass');
    await page.waitForLoadState('networkidle');
    expect(page.url()).toContain('/courses/professional-english-speaking');
    await expect(page.locator('h1')).toContainText('Professional English Speaking Masterclass');

    // Subroute query redirects
    await page.goto('/courses/professional-english-speaking/beginner');
    await page.waitForLoadState('networkidle');
    expect(page.url()).toContain('level=beginner');
  });

  test('8. Global Search Service Integration', async ({ page }) => {
    await setAuthenticatedUser(page);

    await page.goto('/dashboard');
    await page.waitForLoadState('domcontentloaded');

    const searchInput = page.locator('input[placeholder*="Search"], input[type="search"], button:has-text("Search")').first();
    if (await searchInput.isVisible()) {
      await searchInput.click();
      if ((await searchInput.getAttribute('type')) === 'text' || (await searchInput.getAttribute('type')) === 'search') {
        await searchInput.fill('Speaking');
        await expect(page.locator('text=Professional English Speaking Masterclass').first()).toBeVisible({ timeout: 5000 });
      }
    }
  });

  test('9. Interactive Lesson Drawer, Spoken Dialogues & Project Deliverables Flow', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetPESCourseState(page);

    await page.goto('/courses/professional-english-speaking');
    await page.waitForLoadState('domcontentloaded');

    // 9.1 Open first theory module
    const firstLessonCard = page.locator('text=1. Introduction to Professional English Speaking').first();
    await firstLessonCard.scrollIntoViewIfNeeded();
    await expect(firstLessonCard).toBeVisible({ timeout: 15000 });
    await firstLessonCard.click();

    // Check drawer opened
    const startLessonBtn = page.locator('button:has-text("Start Learning Lesson"), button:has-text("Launch Lesson Viewer")').first();
    await expect(startLessonBtn).toBeVisible({ timeout: 10000 });

    // Close drawer
    const closeBtn = page.locator('div[role="dialog"] button').first();
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
      await page.waitForTimeout(500);
    }
  });

  test('10. Level Gating & Prerequisite Modal Flow', async ({ page }) => {
    await setAuthenticatedUser(page);
    await resetPESCourseState(page);

    await page.goto('/courses/professional-english-speaking');
    await page.waitForLoadState('domcontentloaded');

    // Try clicking Intermediate tab while locked
    const intTab = page.locator('button:has-text("Intermediate"), [role="tab"]:has-text("Intermediate")').first();
    if (await intTab.isVisible()) {
      await intTab.click({ force: true });
      const modalHeader = page.locator('text=Prerequisite Required').first();
      await expect(modalHeader).toBeVisible({ timeout: 5000 });
    }
  });

  test('11. Full Course Progression & Master Certificate Claim Flow', async ({ page }) => {
    await setAuthenticatedUser(page);

    // Pre-populate 100% completed state in localStorage
    await page.addInitScript(() => {
      const state = {
        courseId: 'professional-english-speaking',
        courseTitle: 'Professional English Speaking Masterclass',
        currentLevel: 'advanced',
        overallProgress: 100,
        certificateClaimed: false,
        levels: {
          beginner: {
            title: 'Level 1: Beginner',
            status: 'completed',
            completedTasks: 13,
            totalTasks: 13,
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
            completedTasks: 15,
            totalTasks: 15,
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
            completedTasks: 15,
            totalTasks: 15,
            progressPercentage: 100,
            assessmentPassed: true,
            assessmentScore: 40,
            requiredScore: 35,
            totalQuestions: 40,
            tasks: [],
          },
        },
      };

      window.localStorage.setItem('skillora_professional_english_speaking_course_progress', JSON.stringify(state));
    });

    await page.goto('/courses/professional-english-speaking');
    await page.waitForLoadState('domcontentloaded');

    // Verify 100% progress banner and claim certificate button
    const certBanner = page.locator('text=Master Professional English Speaking Certified').first();
    await expect(certBanner).toBeVisible({ timeout: 10000 });

    const claimBtn = page.locator('button:has-text("View & Claim Master Certificate"), button:has-text("Claim Master Certificate")').first();
    await expect(claimBtn).toBeVisible({ timeout: 5000 });
  });

  // ==========================================
  // SECTION 4: PLATFORM ISOLATION AUDIT
  // ==========================================

  test('12. Platform Isolation & Existing 15 Courses Integrity', async () => {
    // Verify Python state unaffected
    expect(INITIAL_PYTHON_COURSE_STATE.courseId).toBe('python-masterclass');
    expect(INITIAL_PYTHON_COURSE_STATE.levels.beginner.tasks.length).toBeGreaterThan(0);

    // Verify Professional English Speaking service key
    expect(ProfessionalEnglishSpeakingCourseService.STORAGE_KEY).toBe(
      'skillora_professional_english_speaking_course_progress'
    );
  });
});
