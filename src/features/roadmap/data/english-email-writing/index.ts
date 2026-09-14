import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { ENGLISH_EMAIL_WRITING_BEGINNER_TASKS } from './englishEmailWritingBeginner.data';
import { ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS } from './englishEmailWritingIntermediate.data';
import { ENGLISH_EMAIL_WRITING_ADVANCED_TASKS } from './englishEmailWritingAdvanced.data';

export * from './englishEmailWritingBeginner.data';
export * from './englishEmailWritingIntermediate.data';
export * from './englishEmailWritingAdvanced.data';

export const INITIAL_ENGLISH_EMAIL_WRITING_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: Professional Email Foundations & Essential Structure',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: ENGLISH_EMAIL_WRITING_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: ENGLISH_EMAIL_WRITING_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: Workplace Communication, Commercial Inquiries & Customer Excellence',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: Executive Strategy, Crisis Management & Master Email Portfolio',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: ENGLISH_EMAIL_WRITING_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: ENGLISH_EMAIL_WRITING_ADVANCED_TASKS
  }
};

export const INITIAL_ENGLISH_EMAIL_WRITING_COURSE_STATE: CourseProgressState = {
  courseId: 'english-email-writing',
  courseTitle: 'English Email Writing Masterclass',
  currentLevel: 'beginner',
  levels: INITIAL_ENGLISH_EMAIL_WRITING_LEVELS,
  overallProgress: 0
};
