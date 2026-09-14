import { test, expect, Page } from '@playwright/test';

// Import initial course states from data directories
import { INITIAL_PYTHON_COURSE_STATE } from '../src/features/roadmap/data/python';
import { INITIAL_SHOPIFY_COURSE_STATE } from '../src/features/roadmap/data/shopify';
import { INITIAL_META_ADS_COURSE_STATE } from '../src/features/roadmap/data/meta';
import { INITIAL_SEO_COURSE_STATE } from '../src/features/roadmap/data/seo';
import { INITIAL_PROMPT_ENGINEERING_COURSE_STATE } from '../src/features/roadmap/data/prompt-engineering';
import { INITIAL_HTML_CSS_COURSE_STATE } from '../src/features/roadmap/data/html-css';
import { INITIAL_THREE_D_ANIMATION_COURSE_STATE } from '../src/features/roadmap/data/3d-animation';
import { INITIAL_JAVASCRIPT_COURSE_STATE } from '../src/features/roadmap/data/javascript';
import { INITIAL_GOOGLE_ADS_COURSE_STATE } from '../src/features/roadmap/data/google-ads';
import { INITIAL_FACEBOOK_ADS_COURSE_STATE } from '../src/features/roadmap/data/facebook-ads';
import { INITIAL_YOUTUBE_ADS_COURSE_STATE } from '../src/features/roadmap/data/youtube-ads';
import { INITIAL_INSTAGRAM_ADS_COURSE_STATE } from '../src/features/roadmap/data/instagram-ads';
import { INITIAL_WEB_DEV_COURSE_STATE } from '../src/features/roadmap/data/web-development';
import { INITIAL_SHOPIFY_DEV_COURSE_STATE } from '../src/features/roadmap/data/shopify-developer';
import { INITIAL_ENGLISH_EMAIL_WRITING_COURSE_STATE } from '../src/features/roadmap/data/english-email-writing';
import { INITIAL_PROFESSIONAL_ENGLISH_SPEAKING_COURSE_STATE } from '../src/features/roadmap/data/professional-english-speaking';

// Import all course services
import { PythonCourseService } from '../src/features/roadmap/services/pythonCourse.service';
import { ShopifyCourseService } from '../src/features/roadmap/services/shopifyCourse.service';
import { MetaAdsCourseService } from '../src/features/roadmap/services/metaAdsCourse.service';
import { SeoCourseService } from '../src/features/roadmap/services/seoCourse.service';
import { PromptEngineeringCourseService } from '../src/features/roadmap/services/promptEngineeringCourse.service';
import { HtmlCssCourseService } from '../src/features/roadmap/services/htmlCssCourse.service';
import { ThreeDAnimationCourseService } from '../src/features/roadmap/services/threeDAnimationCourse.service';
import { JavaScriptCourseService } from '../src/features/roadmap/services/javascriptCourse.service';
import { GoogleAdsCourseService } from '../src/features/roadmap/services/googleAdsCourse.service';
import { FacebookAdsCourseService } from '../src/features/roadmap/services/facebookAdsCourse.service';
import { YouTubeAdsCourseService } from '../src/features/roadmap/services/youtubeAdsCourse.service';
import { InstagramAdsCourseService } from '../src/features/roadmap/services/instagramAdsCourse.service';
import { WebDevelopmentCourseService } from '../src/features/roadmap/services/webDevelopmentCourse.service';
import { ShopifyDeveloperCourseService } from '../src/features/roadmap/services/shopifyDeveloperCourse.service';
import { EnglishEmailWritingCourseService } from '../src/features/roadmap/services/englishEmailWritingCourse.service';
import { ProfessionalEnglishSpeakingCourseService } from '../src/features/roadmap/services/professionalEnglishSpeakingCourse.service';

interface CourseAuditMetadata {
  name: string;
  courseId: string;
  primaryRoute: string;
  aliasRoutes: string[];
  storageKey: string;
  initialState: any;
  service: any;
}

const ALL_16_COURSES: CourseAuditMetadata[] = [
  {
    name: 'Python Masterclass',
    courseId: 'python-masterclass',
    primaryRoute: '/courses/python',
    aliasRoutes: ['/courses/python-masterclass'],
    storageKey: 'skillora_python_course_progress',
    initialState: INITIAL_PYTHON_COURSE_STATE,
    service: PythonCourseService,
  },
  {
    name: 'Shopify Liquid',
    courseId: 'shopify-liquid',
    primaryRoute: '/courses/shopify',
    aliasRoutes: ['/courses/shopify-liquid'],
    storageKey: 'skillora_shopify_course_progress',
    initialState: INITIAL_SHOPIFY_COURSE_STATE,
    service: ShopifyCourseService,
  },
  {
    name: 'Meta Ads',
    courseId: 'meta-ads',
    primaryRoute: '/courses/meta-ads',
    aliasRoutes: ['/courses/meta-ads-masterclass'],
    storageKey: 'skillora_meta_ads_course_progress',
    initialState: INITIAL_META_ADS_COURSE_STATE,
    service: MetaAdsCourseService,
  },
  {
    name: 'SEO',
    courseId: 'seo-masterclass',
    primaryRoute: '/courses/seo',
    aliasRoutes: ['/courses/seo-masterclass'],
    storageKey: 'skillora_seo_course_progress',
    initialState: INITIAL_SEO_COURSE_STATE,
    service: SeoCourseService,
  },
  {
    name: 'Prompt Engineering',
    courseId: 'prompt-engineering',
    primaryRoute: '/courses/prompt-engineering',
    aliasRoutes: ['/courses/prompt-engineering-masterclass'],
    storageKey: 'skillora_prompt_engineering_course_progress',
    initialState: INITIAL_PROMPT_ENGINEERING_COURSE_STATE,
    service: PromptEngineeringCourseService,
  },
  {
    name: 'HTML & CSS Masterclass',
    courseId: 'html-css',
    primaryRoute: '/courses/html-css',
    aliasRoutes: ['/courses/html-css-masterclass'],
    storageKey: 'skillora_html_css_course_progress',
    initialState: INITIAL_HTML_CSS_COURSE_STATE,
    service: HtmlCssCourseService,
  },
  {
    name: '3D Animation Masterclass',
    courseId: '3d-animation',
    primaryRoute: '/courses/3d-animation',
    aliasRoutes: ['/courses/3d-animation-masterclass'],
    storageKey: 'skillora_3d_animation_course_progress',
    initialState: INITIAL_THREE_D_ANIMATION_COURSE_STATE,
    service: ThreeDAnimationCourseService,
  },
  {
    name: 'JavaScript Masterclass',
    courseId: 'javascript',
    primaryRoute: '/courses/javascript',
    aliasRoutes: ['/courses/javascript-masterclass'],
    storageKey: 'skillora_javascript_course_progress',
    initialState: INITIAL_JAVASCRIPT_COURSE_STATE,
    service: JavaScriptCourseService,
  },
  {
    name: 'Google Ads Masterclass',
    courseId: 'google-ads',
    primaryRoute: '/courses/google-ads',
    aliasRoutes: ['/courses/google-ads-masterclass'],
    storageKey: 'skillora_google_ads_course_progress',
    initialState: INITIAL_GOOGLE_ADS_COURSE_STATE,
    service: GoogleAdsCourseService,
  },
  {
    name: 'Facebook Ads Masterclass',
    courseId: 'facebook-ads',
    primaryRoute: '/courses/facebook-ads',
    aliasRoutes: ['/courses/facebook-ads-masterclass'],
    storageKey: 'skillora_facebook_ads_course_progress',
    initialState: INITIAL_FACEBOOK_ADS_COURSE_STATE,
    service: FacebookAdsCourseService,
  },
  {
    name: 'YouTube Ads Masterclass',
    courseId: 'youtube-ads',
    primaryRoute: '/courses/youtube-ads',
    aliasRoutes: ['/courses/youtube-ads-masterclass'],
    storageKey: 'skillora_youtube_ads_course_progress',
    initialState: INITIAL_YOUTUBE_ADS_COURSE_STATE,
    service: YouTubeAdsCourseService,
  },
  {
    name: 'Instagram Ads Masterclass',
    courseId: 'instagram-ads',
    primaryRoute: '/courses/instagram-ads',
    aliasRoutes: ['/courses/instagram-ads-masterclass'],
    storageKey: 'skillora_instagram_ads_course_progress',
    initialState: INITIAL_INSTAGRAM_ADS_COURSE_STATE,
    service: InstagramAdsCourseService,
  },
  {
    name: 'Web Development Masterclass',
    courseId: 'web-development',
    primaryRoute: '/courses/web-development',
    aliasRoutes: ['/courses/web-development-masterclass'],
    storageKey: 'skillora_web_development_course_progress',
    initialState: INITIAL_WEB_DEV_COURSE_STATE,
    service: WebDevelopmentCourseService,
  },
  {
    name: 'Shopify Developer Masterclass',
    courseId: 'shopify-developer',
    primaryRoute: '/courses/shopify-developer',
    aliasRoutes: ['/courses/shopify-developer-masterclass'],
    storageKey: 'skillora_shopify_developer_course_progress',
    initialState: INITIAL_SHOPIFY_DEV_COURSE_STATE,
    service: ShopifyDeveloperCourseService,
  },
  {
    name: 'English Email Writing Masterclass',
    courseId: 'english-email-writing',
    primaryRoute: '/courses/english-email-writing',
    aliasRoutes: ['/courses/english-email-writing-masterclass'],
    storageKey: 'skillora_english_email_writing_course_progress',
    initialState: INITIAL_ENGLISH_EMAIL_WRITING_COURSE_STATE,
    service: EnglishEmailWritingCourseService,
  },
  {
    name: 'Professional English Speaking Masterclass',
    courseId: 'professional-english-speaking',
    primaryRoute: '/courses/professional-english-speaking',
    aliasRoutes: ['/courses/professional-english-speaking-masterclass'],
    storageKey: 'skillora_professional_english_speaking_course_progress',
    initialState: INITIAL_PROFESSIONAL_ENGLISH_SPEAKING_COURSE_STATE,
    service: ProfessionalEnglishSpeakingCourseService,
  },
];

async function setAuthenticatedSession(page: Page) {
  await page.addInitScript(() => {
    const mockUser = {
      id: 'a0000000-0000-4000-8000-000000000099',
      email: 'lead.auditor@skillora.ai',
      firstName: 'PlatformAuditor',
      role: 'lead_evaluator',
    };

    window.localStorage.setItem(
      'skillora-auth-storage',
      JSON.stringify({
        state: {
          token: 'mock-jwt-token-platform-audit',
          user: mockUser,
          isAuthenticated: true,
          isHydrated: true,
        },
        version: 0,
      })
    );
  });
}

test.describe('Skillora AI Platform-Wide Complete Final Audit (All 16 Courses)', () => {
  test.setTimeout(180000);

  // =========================================================================
  // 1. TOTAL COURSES & STORAGE ISOLATION AUDIT
  // =========================================================================
  test('1. Course Identity, Unique IDs & Storage Key Isolation Audit', async () => {
    expect(ALL_16_COURSES.length).toBe(16);

    const courseIds = new Set<string>();
    const storageKeys = new Set<string>();
    const primaryRoutes = new Set<string>();

    for (const c of ALL_16_COURSES) {
      // Unique Course ID
      expect(courseIds.has(c.courseId)).toBe(false);
      courseIds.add(c.courseId);

      // Unique Storage Key
      expect(storageKeys.has(c.storageKey)).toBe(false);
      storageKeys.add(c.storageKey);

      // Unique Route
      expect(primaryRoutes.has(c.primaryRoute)).toBe(false);
      primaryRoutes.add(c.primaryRoute);

      // Initial State Integrity
      expect(c.initialState).toBeDefined();
      expect(c.initialState.levels).toBeDefined();
      expect(c.initialState.levels.beginner).toBeDefined();
      expect(c.initialState.levels.intermediate).toBeDefined();
      expect(c.initialState.levels.advanced).toBeDefined();
    }
  });

  // =========================================================================
  // 2. COURSE DATA, MODULE COUNTS, DELIVERABLES & PLACEHOLDER AUDIT
  // =========================================================================
  test('2. Course Data Depth, Module Counts, Deliverables & Zero-Placeholder Audit', async () => {
    const bannedPlaceholders = [
      'coming soon',
      'lorem ipsum',
      'research this topic',
      'placeholder content',
      'todo: implement',
      'as an ai language model',
      'insert description here',
      'content not yet available',
    ];

    let totalPlatformTasks = 0;
    let totalPlatformDeliverables = 0;
    let totalPlatformMCQs = 0;

    for (const c of ALL_16_COURSES) {
      const state = c.initialState;
      const levels = ['beginner', 'intermediate', 'advanced'];

      for (const lvl of levels) {
        const levelData = state.levels[lvl];
        expect(levelData).toBeDefined();
        expect(levelData.tasks.length).toBeGreaterThanOrEqual(10);
        totalPlatformTasks += levelData.tasks.length;

        for (const task of levelData.tasks) {
          expect(task.title.length).toBeGreaterThan(5);
          expect(task.description.length).toBeGreaterThan(15);

          // Check for banned placeholder text
          const taskString = JSON.stringify(task).toLowerCase();
          for (const banned of bannedPlaceholders) {
            expect(taskString).not.toContain(banned);
          }

          // If project, check deliverables
          if (task.projectDetails?.deliverables) {
            expect(task.projectDetails.deliverables.length).toBeGreaterThanOrEqual(5);
            totalPlatformDeliverables += task.projectDetails.deliverables.length;

            for (const del of task.projectDetails.deliverables) {
              if (typeof del === 'string') {
                expect(del.length).toBeGreaterThan(3);
              } else {
                expect(del.id || del.title || del.name || del.description).toBeTruthy();
                const text = del.title || del.description || del.name || del.id || '';
                expect(text.length).toBeGreaterThan(3);
              }
            }
          } else if ((task as any).deliverables) {
            const dels = (task as any).deliverables;
            expect(dels.length).toBeGreaterThanOrEqual(3);
            totalPlatformDeliverables += dels.length;
            for (const del of dels) {
              if (typeof del === 'string') {
                expect(del.length).toBeGreaterThan(3);
              } else {
                expect(del.id || del.title || del.name || del.description).toBeTruthy();
              }
            }
          }

          // If assessment or practice questions, check question structures
          if (task.isFinalAssessment || task.type === 'assessment') {
            const questions = (task.questions && task.questions.length > 0 ? task.questions : task.assessmentDetails?.questions) || [];
            if (questions.length < 20) {
              console.log('FAILING TASK DETAILS:', c.name, lvl, task.id, task.title, 'questions.length:', questions.length);
            }
            expect(questions.length).toBeGreaterThanOrEqual(20);
            totalPlatformMCQs += questions.length;

            for (const q of questions) {
              expect(q.question.length).toBeGreaterThan(10);
              expect(q.options.length).toBe(4);
              expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
              expect(q.correctAnswer).toBeLessThanOrEqual(3);
              if (q.explanation) {
                expect(q.explanation.length).toBeGreaterThan(10);
              }
            }
          } else if (task.questions && task.questions.length > 0) {
            totalPlatformMCQs += task.questions.length;
            for (const q of task.questions) {
              expect(q.question.length).toBeGreaterThan(10);
              expect(q.options.length).toBe(4);
              expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
              expect(q.correctAnswer).toBeLessThanOrEqual(3);
            }
          }
        }
      }
    }

    expect(totalPlatformTasks).toBeGreaterThan(600);
    expect(totalPlatformDeliverables).toBeGreaterThan(500);
    expect(totalPlatformMCQs).toBeGreaterThan(1400);
  });

  // =========================================================================
  // 3. PROGRESS, LOCKING & GATING LOGIC AUDIT
  // =========================================================================
  test('3. Initial Lock State & Prerequisite Engine Audit Across All Services', async () => {
    for (const c of ALL_16_COURSES) {
      const state = c.initialState;
      const beg = state.levels.beginner;
      const int = state.levels.intermediate;
      const adv = state.levels.advanced;

      // Beginner must be unlocked
      expect(beg.status === 'in_progress' || beg.status === 'not_started' || beg.isUnlocked === true).toBe(true);

      // Intermediate and Advanced must be locked initially
      expect(int.status === 'locked' || int.isUnlocked === false).toBe(true);
      expect(adv.status === 'locked' || adv.isUnlocked === false).toBe(true);

      // Initial progress must be 0
      expect(state.overallProgress === 0 || state.progressPercentage === 0).toBe(true);
    }
  });

  // =========================================================================
  // 4. ROUTING, CATALOG & RESPONSIVE UI AUDIT
  // =========================================================================
  test('4. Course Catalog Grid & Navigation Integrity', async ({ page }) => {
    await setAuthenticatedSession(page);

    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/courses');
    await page.waitForLoadState('networkidle');

    // All 16 course cards should be listed in the catalog
    for (const c of ALL_16_COURSES) {
      const card = page.locator(`text=${c.name}`).first();
      await card.scrollIntoViewIfNeeded();
      await expect(card).toBeVisible({ timeout: 15000 });
    }

    // Direct navigation to sample courses across different categories
    const sampleRoutes = [
      '/courses/python',
      '/courses/english-email-writing',
      '/courses/professional-english-speaking',
    ];

    for (const r of sampleRoutes) {
      await page.goto(r);
      await page.waitForLoadState('networkidle');
      await expect(page.locator('h1').first()).toBeVisible({ timeout: 15000 });
    }

    // Filter out non-fatal logs, ensure zero React unhandled exceptions
    const criticalErrors = consoleErrors.filter((err) =>
      err.includes('Uncaught') || err.includes('TypeError') || err.includes('ReferenceError')
    );
    expect(criticalErrors.length).toBe(0);
  });
});
