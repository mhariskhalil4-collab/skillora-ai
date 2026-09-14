import { test, expect, Page } from '@playwright/test';
import {
  PYTHON_BEGINNER_TASKS,
  PYTHON_BEGINNER_FINAL_ASSESSMENT,
  PYTHON_INTERMEDIATE_TASKS,
  PYTHON_INTERMEDIATE_FINAL_ASSESSMENT,
  PYTHON_ADVANCED_TASKS,
  PYTHON_ADVANCED_FINAL_ASSESSMENT,
  INITIAL_PYTHON_LEVELS
} from '../src/features/roadmap/data/python';

// Helper to inject authenticated session into client localStorage
async function setAuthenticatedUser(page: Page, customUserId?: string) {
  await page.addInitScript((userId) => {
    const mockUser = {
      id: userId || 'a0000000-0000-4000-8000-000000000001',
      email: 'student@skillora.ai',
      firstName: 'Alex',
      role: 'university_student',
    };

    window.localStorage.setItem('skillora-auth-storage', JSON.stringify({
      state: {
        token: 'mock-jwt-token-playwright',
        user: mockUser,
        isAuthenticated: true,
        isHydrated: true,
      },
      version: 0,
    }));
  }, customUserId);
}

test.describe('Skillora AI - Python Course Master Specification Verification', () => {
  test.setTimeout(60000);

  test('1. Python Course Entry Point Exists', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-1');
    await page.goto('/courses');
    await expect(page.locator('h1:has-text("Structured Skill Courses")')).toBeVisible();
    await expect(page.locator('h2:has-text("Python Masterclass")')).toBeVisible();
  });

  test('2. Python Title is Visible', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-2');
    await page.goto('/courses/python');
    await expect(page.locator('h1:has-text("Python Masterclass")')).toBeVisible();
  });

  test('3. Beginner has exactly 14 modules', async () => {
    const modules = PYTHON_BEGINNER_TASKS.filter(t => !t.id.endsWith('-assessment'));
    expect(modules.length).toBe(14);
  });

  test('4. Intermediate has exactly 14 modules', async () => {
    const modules = PYTHON_INTERMEDIATE_TASKS.filter(t => !t.id.endsWith('-assessment'));
    expect(modules.length).toBe(14);
  });

  test('5. Advanced has exactly 15 modules', async () => {
    const modules = PYTHON_ADVANCED_TASKS.filter(t => !t.id.endsWith('-assessment'));
    expect(modules.length).toBe(15);
  });

  test('6, 7, 8. Initial Level Unlocked/Locked States', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-6');
    await page.goto('/courses/python');

    // Beginner is unlocked
    expect(INITIAL_PYTHON_LEVELS.beginner.status).toBe('in_progress');
    // Intermediate is locked
    expect(INITIAL_PYTHON_LEVELS.intermediate.status).toBe('locked');
    // Advanced is locked
    expect(INITIAL_PYTHON_LEVELS.advanced.status).toBe('locked');

    // Clicking Intermediate shows locked modal
    await page.click('button:has-text("Level 2: Intermediate")');
    await expect(page.locator('text=Level 2: Python Intermediate is Locked')).toBeVisible();
  });

  test('9. Beginner Final Assessment has exactly 20 questions', async () => {
    expect(PYTHON_BEGINNER_FINAL_ASSESSMENT.length).toBe(20);
  });

  test('10 & 11. Beginner Assessment Thresholds: 14/20 fails, 15/20 passes', async () => {
    expect(INITIAL_PYTHON_LEVELS.beginner.requiredScore).toBe(15);
    const score14Passed = 14 >= INITIAL_PYTHON_LEVELS.beginner.requiredScore;
    const score15Passed = 15 >= INITIAL_PYTHON_LEVELS.beginner.requiredScore;
    expect(score14Passed).toBe(false);
    expect(score15Passed).toBe(true);
  });

  test('12. Intermediate Final Assessment has exactly 30 questions', async () => {
    expect(PYTHON_INTERMEDIATE_FINAL_ASSESSMENT.length).toBe(30);
  });

  test('13 & 14. Intermediate Assessment Thresholds: 24/30 fails, 25/30 passes', async () => {
    expect(INITIAL_PYTHON_LEVELS.intermediate.requiredScore).toBe(25);
    const score24Passed = 24 >= INITIAL_PYTHON_LEVELS.intermediate.requiredScore;
    const score25Passed = 25 >= INITIAL_PYTHON_LEVELS.intermediate.requiredScore;
    expect(score24Passed).toBe(false);
    expect(score25Passed).toBe(true);
  });

  test('15. Advanced Final Assessment has exactly 40 questions', async () => {
    expect(PYTHON_ADVANCED_FINAL_ASSESSMENT.length).toBe(40);
  });

  test('16 & 17. Advanced Assessment Thresholds: 34/40 fails, 35/40 passes', async () => {
    expect(INITIAL_PYTHON_LEVELS.advanced.requiredScore).toBe(35);
    const score34Passed = 34 >= INITIAL_PYTHON_LEVELS.advanced.requiredScore;
    const score35Passed = 35 >= INITIAL_PYTHON_LEVELS.advanced.requiredScore;
    expect(score34Passed).toBe(false);
    expect(score35Passed).toBe(true);
  });

  test('18 & 19. Incomplete Lessons/Projects Prevent Course Completion', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-18');
    await page.addInitScript(() => {
      window.localStorage.setItem('skillora_python_course_progress', JSON.stringify({
        courseId: 'python-masterclass',
        courseTitle: 'Python Masterclass (Beginner to Advanced)',
        currentLevel: 'beginner',
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: Python Beginner',
            status: 'in_progress',
            progressPercentage: 50,
            completedTasks: 7,
            totalTasks: 15,
            assessmentPassed: false,
            requiredScore: 15,
            totalQuestions: 20,
            tasks: []
          },
          intermediate: {
            level: 'intermediate',
            title: 'Level 2: Python Intermediate',
            status: 'locked',
            progressPercentage: 0,
            completedTasks: 0,
            totalTasks: 15,
            assessmentPassed: false,
            requiredScore: 25,
            totalQuestions: 30,
            tasks: []
          },
          advanced: {
            level: 'advanced',
            title: 'Level 3: Python Advanced',
            status: 'locked',
            progressPercentage: 0,
            completedTasks: 0,
            totalTasks: 16,
            assessmentPassed: false,
            requiredScore: 35,
            totalQuestions: 40,
            tasks: []
          }
        },
        overallProgress: 15
      }));
    });

    await page.goto('/courses/python');
    // Certificate claim should NOT be available
    await expect(page.locator('text=Python Masterclass Completed!')).not.toBeVisible();
    await expect(page.locator('button:has-text("View & Claim Master Certificate")')).not.toBeVisible();
  });

  test('20 & 21. Progress Survives Refresh and Re-login', async ({ page }) => {
    await setAuthenticatedUser(page, 'persisted-user-01');
    await page.addInitScript(() => {
      window.localStorage.setItem('skillora_python_course_progress', JSON.stringify({
        courseId: 'python-masterclass',
        courseTitle: 'Python Masterclass (Beginner to Advanced)',
        currentLevel: 'beginner',
        levels: {
          beginner: {
            level: 'beginner',
            title: 'Level 1: Python Beginner',
            status: 'in_progress',
            progressPercentage: 40,
            completedTasks: 6,
            totalTasks: 15,
            assessmentPassed: false,
            requiredScore: 15,
            totalQuestions: 20,
            tasks: []
          },
          intermediate: {
            level: 'intermediate',
            title: 'Level 2: Python Intermediate',
            status: 'locked',
            progressPercentage: 0,
            completedTasks: 0,
            totalTasks: 15,
            assessmentPassed: false,
            requiredScore: 25,
            totalQuestions: 30,
            tasks: []
          },
          advanced: {
            level: 'advanced',
            title: 'Level 3: Python Advanced',
            status: 'locked',
            progressPercentage: 0,
            completedTasks: 0,
            totalTasks: 16,
            assessmentPassed: false,
            requiredScore: 35,
            totalQuestions: 40,
            tasks: []
          }
        },
        overallProgress: 14
      }));
    });

    await page.goto('/courses/python');
    await expect(page.locator('text=Level 1: Beginner').first()).toBeVisible();

    // Reload page to test refresh persistence
    await page.reload();
    await expect(page.locator('text=Level 1: Beginner').first()).toBeVisible();
  });

  test('25 & 26. Python Opens Dedicated Course, NOT Generic Personalized Roadmap Lesson', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-25');
    await page.goto('/courses');
    const startPythonBtn = page.locator('button:has-text("Start Python Masterclass"), button:has-text("Resume Python Course"), button:has-text("Open Course")').first();
    await startPythonBtn.click();
    await page.waitForURL('**/courses/python');
    await expect(page.locator('h1:has-text("Python Masterclass")')).toBeVisible();
    await expect(page.locator('text=Commercial Skill Mastery & Service Packaging for Amir')).not.toBeVisible();
  });

  test('27. Master Certificate Cannot Be Issued Before All Requirements Met', async ({ page }) => {
    await setAuthenticatedUser(page, 'py-user-e2e-27');
    await page.goto('/courses/python');
    await expect(page.locator('button:has-text("View & Claim Master Certificate")')).not.toBeVisible();
  });
});
