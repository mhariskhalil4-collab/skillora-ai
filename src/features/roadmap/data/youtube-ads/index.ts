import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { YOUTUBE_ADS_BEGINNER_TASKS } from './youtubeAdsBeginner.data';
import { YOUTUBE_ADS_INTERMEDIATE_TASKS } from './youtubeAdsIntermediate.data';
import { YOUTUBE_ADS_ADVANCED_TASKS } from './youtubeAdsAdvanced.data';

export * from './youtubeAdsBeginner.data';
export * from './youtubeAdsIntermediate.data';
export * from './youtubeAdsAdvanced.data';

export const INITIAL_YOUTUBE_ADS_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: YouTube Ads Ecosystem, Formats & Video Action Campaigns',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: YOUTUBE_ADS_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: YOUTUBE_ADS_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: Tracking Engineering, Audience Signals, Shorts & Scaling',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: YOUTUBE_ADS_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: YOUTUBE_ADS_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: Enterprise Ops, Ads Data Hub, Attribution & Clean Rooms',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: YOUTUBE_ADS_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: YOUTUBE_ADS_ADVANCED_TASKS
  }
};

export const INITIAL_YOUTUBE_ADS_COURSE_STATE: CourseProgressState = {
  courseId: 'youtube-ads',
  courseTitle: 'YouTube Ads Masterclass',
  currentLevel: 'beginner',
  levels: INITIAL_YOUTUBE_ADS_LEVELS,
  overallProgress: 0
};
