import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { HTMLCSS_BEGINNER_TASKS } from './htmlCssBeginner.data';
import { HTMLCSS_INTERMEDIATE_TASKS } from './htmlCssIntermediate.data';
import { HTMLCSS_ADVANCED_TASKS } from './htmlCssAdvanced.data';

export * from './htmlCssBeginner.data';
export * from './htmlCssIntermediate.data';
export * from './htmlCssAdvanced.data';

export const INITIAL_HTML_CSS_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: HTML & CSS Beginner',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: HTMLCSS_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: HTMLCSS_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: HTML & CSS Intermediate',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: HTMLCSS_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: HTMLCSS_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: HTML & CSS Advanced',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: HTMLCSS_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: HTMLCSS_ADVANCED_TASKS
  }
};

export const INITIAL_HTML_CSS_COURSE_STATE: CourseProgressState = {
  courseId: 'html-css',
  courseTitle: 'HTML & CSS Masterclass — From Beginner to Professional Web Developer',
  currentLevel: 'beginner',
  levels: INITIAL_HTML_CSS_LEVELS,
  overallProgress: 0
};
