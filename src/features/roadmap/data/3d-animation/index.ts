import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { THREE_D_BEGINNER_TASKS } from './threeDAnimationBeginner.data';
import { THREE_D_INTERMEDIATE_TASKS } from './threeDAnimationIntermediate.data';
import { THREE_D_ADVANCED_TASKS } from './threeDAnimationAdvanced.data';

export * from './threeDAnimationBeginner.data';
export * from './threeDAnimationIntermediate.data';
export * from './threeDAnimationAdvanced.data';

export const INITIAL_THREE_D_ANIMATION_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: 3D Animation Beginner',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: THREE_D_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: THREE_D_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: 3D Animation Intermediate',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: THREE_D_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: THREE_D_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: 3D Animation Advanced',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: THREE_D_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: THREE_D_ADVANCED_TASKS
  }
};

export const INITIAL_THREE_D_ANIMATION_COURSE_STATE: CourseProgressState = {
  courseId: '3d-animation',
  courseTitle: '3D Animation Masterclass',
  currentLevel: 'beginner',
  levels: INITIAL_THREE_D_ANIMATION_LEVELS,
  overallProgress: 0
};
