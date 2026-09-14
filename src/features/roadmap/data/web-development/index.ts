import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { WEB_DEV_BEGINNER_TASKS } from './webDevelopmentBeginner.data';
import { WEB_DEV_INTERMEDIATE_TASKS } from './webDevelopmentIntermediate.data';
import { WEB_DEV_ADVANCED_TASKS } from './webDevelopmentAdvanced.data';

export * from './webDevelopmentBeginner.data';
export * from './webDevelopmentIntermediate.data';
export * from './webDevelopmentAdvanced.data';

export const INITIAL_WEB_DEV_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: Web Foundations, Semantic HTML5, CSS3 & Modern JavaScript',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: WEB_DEV_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: WEB_DEV_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: Advanced JS, React Architecture, State & Single Page Apps',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: WEB_DEV_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: WEB_DEV_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: Full-Stack Architecture, TypeScript, Node/Express, PostgreSQL & System Design',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: WEB_DEV_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: WEB_DEV_ADVANCED_TASKS
  }
};

export const INITIAL_WEB_DEV_COURSE_STATE: CourseProgressState = {
  courseId: 'web-development',
  courseTitle: 'Web Development Masterclass',
  currentLevel: 'beginner',
  levels: INITIAL_WEB_DEV_LEVELS,
  overallProgress: 0
};
