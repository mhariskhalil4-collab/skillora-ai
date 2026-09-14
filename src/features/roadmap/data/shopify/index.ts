import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { SHOPIFY_BEGINNER_TASKS } from './shopifyBeginner.data';
import { SHOPIFY_INTERMEDIATE_TASKS } from './shopifyIntermediate.data';
import { SHOPIFY_ADVANCED_TASKS } from './shopifyAdvanced.data';

export * from './shopifyBeginner.data';
export * from './shopifyIntermediate.data';
export * from './shopifyAdvanced.data';

export const INITIAL_SHOPIFY_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: Shopify Liquid Beginner',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: SHOPIFY_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: SHOPIFY_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: Shopify Liquid Intermediate',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: SHOPIFY_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: SHOPIFY_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: Shopify Liquid Advanced',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: SHOPIFY_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: SHOPIFY_ADVANCED_TASKS
  }
};

export const INITIAL_SHOPIFY_COURSE_STATE: CourseProgressState = {
  courseId: 'shopify-liquid',
  courseTitle: 'Shopify Liquid — Complete Professional Development Course',
  currentLevel: 'beginner',
  levels: INITIAL_SHOPIFY_LEVELS,
  overallProgress: 0
};
