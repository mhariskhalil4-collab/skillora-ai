import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { GOOGLE_ADS_BEGINNER_TASKS } from './googleAdsBeginner.data';
import { GOOGLE_ADS_INTERMEDIATE_TASKS } from './googleAdsIntermediate.data';
import { GOOGLE_ADS_ADVANCED_TASKS } from './googleAdsAdvanced.data';

export * from './googleAdsBeginner.data';
export * from './googleAdsIntermediate.data';
export * from './googleAdsAdvanced.data';

export const INITIAL_GOOGLE_ADS_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: Google Ads Fundamentals & Paid Search Architecture',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: GOOGLE_ADS_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: GOOGLE_ADS_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: Advanced Search, Tracking Engineering & Smart Bidding',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: GOOGLE_ADS_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: GOOGLE_ADS_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: Enterprise Strategy, Automation, Measurement & Multi-Channel Scaling',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: GOOGLE_ADS_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: GOOGLE_ADS_ADVANCED_TASKS
  }
};

export const INITIAL_GOOGLE_ADS_COURSE_STATE: CourseProgressState = {
  courseId: 'google-ads',
  courseTitle: 'Google Ads Masterclass',
  currentLevel: 'beginner',
  levels: INITIAL_GOOGLE_ADS_LEVELS,
  overallProgress: 0
};
