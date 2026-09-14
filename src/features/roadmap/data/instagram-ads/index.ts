import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { INSTAGRAM_ADS_BEGINNER_TASKS } from './instagramAdsBeginner.data';
import { INSTAGRAM_ADS_INTERMEDIATE_TASKS } from './instagramAdsIntermediate.data';
import { INSTAGRAM_ADS_ADVANCED_TASKS } from './instagramAdsAdvanced.data';

export * from './instagramAdsBeginner.data';
export * from './instagramAdsIntermediate.data';
export * from './instagramAdsAdvanced.data';

export const INITIAL_INSTAGRAM_ADS_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: Instagram Ads Ecosystem, Formats & Campaign Foundations',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: INSTAGRAM_ADS_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: INSTAGRAM_ADS_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: Tracking Engineering, Audience Signals, Reels & Scaling',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: INSTAGRAM_ADS_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: INSTAGRAM_ADS_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: Enterprise CAPI, Advantage+ Shopping, MMM & Scaled Ops',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: INSTAGRAM_ADS_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: INSTAGRAM_ADS_ADVANCED_TASKS
  }
};

export const INITIAL_INSTAGRAM_ADS_COURSE_STATE: CourseProgressState = {
  courseId: 'instagram-ads',
  courseTitle: 'Instagram Ads Masterclass',
  currentLevel: 'beginner',
  levels: INITIAL_INSTAGRAM_ADS_LEVELS,
  overallProgress: 0
};
