import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { FACEBOOK_ADS_BEGINNER_TASKS } from './facebookAdsBeginner.data';
import { FACEBOOK_ADS_INTERMEDIATE_TASKS } from './facebookAdsIntermediate.data';
import { FACEBOOK_ADS_ADVANCED_TASKS } from './facebookAdsAdvanced.data';

export * from './facebookAdsBeginner.data';
export * from './facebookAdsIntermediate.data';
export * from './facebookAdsAdvanced.data';

export const INITIAL_FACEBOOK_ADS_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: Meta Ads Fundamentals, Creative & Lead Generation',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: FACEBOOK_ADS_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: FACEBOOK_ADS_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: CAPI Engineering, Full-Funnel Architecture & Scaling',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: FACEBOOK_ADS_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: FACEBOOK_ADS_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: Enterprise Media Buying, Incrementality & Turnaround Strategy',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: FACEBOOK_ADS_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: FACEBOOK_ADS_ADVANCED_TASKS
  }
};

export const INITIAL_FACEBOOK_ADS_COURSE_STATE: CourseProgressState = {
  courseId: 'facebook-ads',
  courseTitle: 'Facebook Ads Masterclass',
  currentLevel: 'beginner',
  levels: INITIAL_FACEBOOK_ADS_LEVELS,
  overallProgress: 0
};
