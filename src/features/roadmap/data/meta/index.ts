import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { META_BEGINNER_TASKS } from './metaBeginner.data';
import { META_INTERMEDIATE_TASKS } from './metaIntermediate.data';
import { META_ADVANCED_TASKS } from './metaAdvanced.data';

export * from './metaBeginner.data';
export * from './metaIntermediate.data';
export * from './metaAdvanced.data';

export const INITIAL_META_ADS_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: Meta Ads Beginner',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: META_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: META_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: Meta Ads Intermediate',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: META_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: META_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: Meta Ads Advanced',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: META_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: META_ADVANCED_TASKS
  }
};

export const INITIAL_META_ADS_COURSE_STATE: CourseProgressState = {
  courseId: 'meta-ads',
  courseTitle: 'Meta Ads — Complete Professional Development Course',
  currentLevel: 'beginner',
  levels: INITIAL_META_ADS_LEVELS,
  overallProgress: 0
};
