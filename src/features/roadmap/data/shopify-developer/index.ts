import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { SHOPIFY_DEV_BEGINNER_TASKS } from './shopifyDeveloperBeginner.data';
import { SHOPIFY_DEV_INTERMEDIATE_TASKS } from './shopifyDeveloperIntermediate.data';
import { SHOPIFY_DEV_ADVANCED_TASKS } from './shopifyDeveloperAdvanced.data';

export * from './shopifyDeveloperBeginner.data';
export * from './shopifyDeveloperIntermediate.data';
export * from './shopifyDeveloperAdvanced.data';

export const INITIAL_SHOPIFY_DEV_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: Shopify Development Fundamentals & Theme Architecture',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: SHOPIFY_DEV_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: SHOPIFY_DEV_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: Advanced Themes, Storefront/Admin GraphQL APIs & App Architecture',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: SHOPIFY_DEV_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: SHOPIFY_DEV_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: Full-Stack App Platform, Shopify Functions, Checkout Extensibility & Scaling',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: SHOPIFY_DEV_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: SHOPIFY_DEV_ADVANCED_TASKS
  }
};

export const INITIAL_SHOPIFY_DEV_COURSE_STATE: CourseProgressState = {
  courseId: 'shopify-developer',
  courseTitle: 'Shopify Developer Masterclass',
  currentLevel: 'beginner',
  levels: INITIAL_SHOPIFY_DEV_LEVELS,
  overallProgress: 0
};
