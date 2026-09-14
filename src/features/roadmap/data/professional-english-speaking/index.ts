import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_TASKS } from './professionalEnglishSpeakingBeginner.data';
import { PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_TASKS } from './professionalEnglishSpeakingIntermediate.data';
import { PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_TASKS } from './professionalEnglishSpeakingAdvanced.data';

export * from './professionalEnglishSpeakingBeginner.data';
export * from './professionalEnglishSpeakingIntermediate.data';
export * from './professionalEnglishSpeakingAdvanced.data';

export const INITIAL_PROFESSIONAL_ENGLISH_SPEAKING_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: Spoken Foundations, Pronunciation & Everyday Workplace Conversations',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: PROFESSIONAL_ENGLISH_SPEAKING_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: Cross-Functional Collaboration, Meetings, Presentations & Negotiations',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: PROFESSIONAL_ENGLISH_SPEAKING_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: Executive Presence, Keynotes, Crisis Management & Leadership Influence',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: PROFESSIONAL_ENGLISH_SPEAKING_ADVANCED_TASKS
  }
};

export const INITIAL_PROFESSIONAL_ENGLISH_SPEAKING_COURSE_STATE: CourseProgressState = {
  courseId: 'professional-english-speaking',
  courseTitle: 'Professional English Speaking Masterclass',
  currentLevel: 'beginner',
  levels: INITIAL_PROFESSIONAL_ENGLISH_SPEAKING_LEVELS,
  overallProgress: 0
};
