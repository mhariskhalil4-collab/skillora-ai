import { CourseLevel, LevelProgress, CourseProgressState } from '../../types/roadmap.types';
import { PYTHON_BEGINNER_TASKS } from './pythonBeginner.data';
import { PYTHON_INTERMEDIATE_TASKS } from './pythonIntermediate.data';
import { PYTHON_ADVANCED_TASKS } from './pythonAdvanced.data';

export * from './pythonBeginner.data';
export * from './pythonIntermediate.data';
export * from './pythonAdvanced.data';

export const INITIAL_PYTHON_LEVELS: Record<CourseLevel, LevelProgress> = {
  beginner: {
    level: 'beginner',
    title: 'Level 1: Python Beginner',
    status: 'in_progress',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: PYTHON_BEGINNER_TASKS.length,
    assessmentPassed: false,
    requiredScore: 15,
    totalQuestions: 20,
    tasks: PYTHON_BEGINNER_TASKS
  },
  intermediate: {
    level: 'intermediate',
    title: 'Level 2: Python Intermediate',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: PYTHON_INTERMEDIATE_TASKS.length,
    assessmentPassed: false,
    requiredScore: 25,
    totalQuestions: 30,
    tasks: PYTHON_INTERMEDIATE_TASKS
  },
  advanced: {
    level: 'advanced',
    title: 'Level 3: Python Advanced',
    status: 'locked',
    progressPercentage: 0,
    completedTasks: 0,
    totalTasks: PYTHON_ADVANCED_TASKS.length,
    assessmentPassed: false,
    requiredScore: 35,
    totalQuestions: 40,
    tasks: PYTHON_ADVANCED_TASKS
  }
};

export const INITIAL_PYTHON_COURSE_STATE: CourseProgressState = {
  courseId: 'python-masterclass',
  courseTitle: 'Python Masterclass (Beginner to Advanced)',
  currentLevel: 'beginner',
  levels: INITIAL_PYTHON_LEVELS,
  overallProgress: 0
};
