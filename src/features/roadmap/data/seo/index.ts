import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { SEO_BEGINNER_TASKS } from './seoBeginner.data';
import { SEO_INTERMEDIATE_TASKS } from './seoIntermediate.data';
import { SEO_ADVANCED_TASKS } from './seoAdvanced.data';

export * from './seoBeginner.data';
export * from './seoIntermediate.data';
export * from './seoAdvanced.data';

export const INITIAL_SEO_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: SEO Beginner',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: SEO_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: SEO_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: SEO Intermediate',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: SEO_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: SEO_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: SEO Advanced',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: SEO_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: SEO_ADVANCED_TASKS
  }
};

export const INITIAL_SEO_COURSE_STATE: CourseProgressState = {
  courseId: 'seo',
  courseTitle: 'SEO — Search Engine Optimization',
  currentLevel: 'beginner',
  levels: INITIAL_SEO_LEVELS,
  overallProgress: 0
};
