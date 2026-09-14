import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { JAVASCRIPT_BEGINNER_TASKS } from './javascriptBeginner.data';
import { JAVASCRIPT_INTERMEDIATE_TASKS } from './javascriptIntermediate.data';
import { JAVASCRIPT_ADVANCED_TASKS } from './javascriptAdvanced.data';

export * from './javascriptBeginner.data';
export * from './javascriptIntermediate.data';
export * from './javascriptAdvanced.data';

export const INITIAL_JAVASCRIPT_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: JavaScript Fundamentals & DOM',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: JAVASCRIPT_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: JAVASCRIPT_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: Modern JavaScript & Asynchronous Architecture',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: JAVASCRIPT_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: JAVASCRIPT_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: Runtime Mastery, Performance & Full-Stack Systems',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: JAVASCRIPT_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: JAVASCRIPT_ADVANCED_TASKS
  }
};

export const INITIAL_JAVASCRIPT_COURSE_STATE: CourseProgressState = {
  courseId: 'javascript',
  courseTitle: 'JavaScript Masterclass',
  currentLevel: 'beginner',
  levels: INITIAL_JAVASCRIPT_LEVELS,
  overallProgress: 0
};
