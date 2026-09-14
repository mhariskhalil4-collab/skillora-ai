import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { PE_BEGINNER_TASKS } from './promptEngineeringBeginner.data';
import { PE_INTERMEDIATE_TASKS } from './promptEngineeringIntermediate.data';
import { PE_ADVANCED_TASKS } from './promptEngineeringAdvanced.data';

export * from './promptEngineeringBeginner.data';
export * from './promptEngineeringIntermediate.data';
export * from './promptEngineeringAdvanced.data';

export const INITIAL_PROMPT_ENGINEERING_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: Prompt Engineering Beginner',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: PE_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: PE_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: Prompt Engineering Intermediate',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: PE_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: PE_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: Prompt Engineering Advanced',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: PE_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: PE_ADVANCED_TASKS
  }
};

export const INITIAL_PROMPT_ENGINEERING_COURSE_STATE: CourseProgressState = {
  courseId: 'prompt-engineering',
  courseTitle: 'Prompt Engineering — AI Prompt Engineering Masterclass',
  currentLevel: 'beginner',
  levels: INITIAL_PROMPT_ENGINEERING_LEVELS,
  overallProgress: 0
};
