import { CourseLevel, CourseProgressState, LevelProgress, Task, QuizQuestion, AssessmentWeakArea } from '../types/roadmap.types';
import { INITIAL_PROFESSIONAL_ENGLISH_SPEAKING_COURSE_STATE } from '../data/professional-english-speaking';

const STORAGE_KEY = 'skillora_professional_english_speaking_course_progress';
const memoryStorage: Record<string, string> = {};

function getStorageItem(key: string): string | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key);
    }
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    }
  } catch {}
  return memoryStorage[key] || null;
}

function setStorageItem(key: string, value: string): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
      return;
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value);
      return;
    }
  } catch {}
  memoryStorage[key] = value;
}

export class ProfessionalEnglishSpeakingCourseService {
  public static readonly STORAGE_KEY = STORAGE_KEY;

  /**
   * Load current user's Professional English Speaking Course progress state from localStorage
   */
  static getCourseState(): CourseProgressState {
    try {
      const saved = getStorageItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as CourseProgressState;
        return this.normalizeCourseState(parsed);
      }
    } catch (err) {
      console.warn('Failed to load Professional English Speaking course state from localStorage:', err);
    }
    return JSON.parse(JSON.stringify(INITIAL_PROFESSIONAL_ENGLISH_SPEAKING_COURSE_STATE));
  }

  /**
   * Save current Professional English Speaking Course progress state
   */
  static saveCourseState(state: CourseProgressState): void {
    try {
      setStorageItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn('Failed to save Professional English Speaking course state to localStorage:', err);
    }
  }

  /**
   * Reset course state back to pristine initial state
   */
  static resetCourseState(): CourseProgressState {
    const pristine = JSON.parse(JSON.stringify(INITIAL_PROFESSIONAL_ENGLISH_SPEAKING_COURSE_STATE));
    this.saveCourseState(pristine);
    return pristine;
  }

  /**
   * Return a fresh copy of the initial course progress state
   */
  static getInitialState(): CourseProgressState {
    return JSON.parse(JSON.stringify(INITIAL_PROFESSIONAL_ENGLISH_SPEAKING_COURSE_STATE));
  }

  /**
   * Normalize state structure to ensure tasks and levels are properly populated and anti-tampered
   */
  static normalizeCourseState(state: CourseProgressState): CourseProgressState {
    const base = JSON.parse(JSON.stringify(INITIAL_PROFESSIONAL_ENGLISH_SPEAKING_COURSE_STATE)) as CourseProgressState;
    
    // Copy levels
    const levels: Record<CourseLevel, LevelProgress> = {
      beginner: {
        ...base.levels.beginner,
        ...(state.levels?.beginner || {}),
        tasks: this.mergeTasks(base.levels.beginner.tasks, state.levels?.beginner?.tasks || [], state.levels?.beginner?.status)
      },
      intermediate: {
        ...base.levels.intermediate,
        ...(state.levels?.intermediate || {}),
        tasks: this.mergeTasks(base.levels.intermediate.tasks, state.levels?.intermediate?.tasks || [], state.levels?.intermediate?.status)
      },
      advanced: {
        ...base.levels.advanced,
        ...(state.levels?.advanced || {}),
        tasks: this.mergeTasks(base.levels.advanced.tasks, state.levels?.advanced?.tasks || [], state.levels?.advanced?.status)
      }
    };

    // Enforce prerequisite-based status validation against tampering
    const intermediatePrereqs = this.checkLevelPrerequisites('intermediate', {
      courseId: state.courseId || base.courseId,
      courseTitle: state.courseTitle || base.courseTitle,
      currentLevel: 'beginner',
      levels,
      overallProgress: 0
    });
    if (!intermediatePrereqs.canUnlock) {
      levels.intermediate.status = 'locked';
      levels.intermediate.tasks = levels.intermediate.tasks.map(t => ({ ...t, status: 'locked' }));
    }

    const advancedPrereqs = this.checkLevelPrerequisites('advanced', {
      courseId: state.courseId || base.courseId,
      courseTitle: state.courseTitle || base.courseTitle,
      currentLevel: 'beginner',
      levels,
      overallProgress: 0
    });
    if (!advancedPrereqs.canUnlock) {
      levels.advanced.status = 'locked';
      levels.advanced.tasks = levels.advanced.tasks.map(t => ({ ...t, status: 'locked' }));
    }

    let currentLevel: CourseLevel = state.currentLevel || 'beginner';
    if (currentLevel === 'intermediate' && !intermediatePrereqs.canUnlock) {
      currentLevel = 'beginner';
    } else if (currentLevel === 'advanced' && !advancedPrereqs.canUnlock) {
      currentLevel = intermediatePrereqs.canUnlock ? 'intermediate' : 'beginner';
    }

    return {
      courseId: state.courseId || base.courseId,
      courseTitle: state.courseTitle || base.courseTitle,
      currentLevel,
      levels,
      overallProgress: this.calculateOverallProgress(levels)
    };
  }

  private static mergeTasks(baseTasks: Task[], savedTasks: Task[] = [], levelStatus?: string): Task[] {
    const savedMap = new Map(savedTasks.map(t => [t.id, t]));
    return baseTasks.map(bt => {
      const saved = savedMap.get(bt.id);
      if (saved) {
        return {
          ...bt,
          status: saved.status
        };
      }
      if (levelStatus === 'completed') {
        return {
          ...bt,
          status: 'completed'
        };
      }
      return bt;
    });
  }

  /**
   * Complete a single task/lesson within a level
   */
  static completeTask(level: CourseLevel, taskId: string): CourseProgressState {
    const state = this.getCourseState();
    const lvl = state.levels[level];
    if (!lvl) return state;

    const taskIndex = lvl.tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) return state;

    // Mark current task completed
    lvl.tasks[taskIndex].status = 'completed';
    lvl.tasks[taskIndex].isCompleted = true;

    // Unlock next task if exists and locked
    if (taskIndex + 1 < lvl.tasks.length && lvl.tasks[taskIndex + 1].status === 'locked') {
      lvl.tasks[taskIndex + 1].status = 'in_progress';
    }

    // Recalculate metrics
    const completedCount = lvl.tasks.filter(t => t.status === 'completed').length;
    lvl.completedTasks = completedCount;
    lvl.progressPercentage = Math.round((completedCount / lvl.totalTasks) * 100);

    // Update overall course progress
    state.overallProgress = this.calculateOverallProgress(state.levels);

    this.saveCourseState(state);
    return state;
  }

  /**
   * Toggle a project deliverable checklist item
   */
  static toggleProjectDeliverable(
    level: CourseLevel,
    projectId: string,
    deliverableId: string,
    completed: boolean
  ): CourseProgressState {
    const state = this.getCourseState();
    const lvl = state.levels[level];
    if (!lvl) return state;

    const task = lvl.tasks.find(t => t.id === projectId);
    if (task && task.projectDetails && task.projectDetails.deliverables) {
      const del = task.projectDetails.deliverables.find((d: { id: string; completed?: boolean }) => d.id === deliverableId);
      if (del) {
        del.completed = completed;
      }

      // Check if all deliverables are completed
      const allCompleted = task.projectDetails.deliverables.every((d: { completed?: boolean }) => d.completed);
      if (allCompleted) {
        return this.completeTask(level, projectId);
      }
      this.saveCourseState(state);
    }
    return state;
  }

  /**
   * Complete a practical capstone project
   */
  static completeProject(
    level: CourseLevel,
    projectId: string,
    _deliverables?: string[],
    _notes?: string
  ): CourseProgressState {
    return this.completeTask(level, projectId);
  }

  /**
   * Evaluate a level assessment submission
   */
  static evaluateAssessment(
    level: CourseLevel,
    selectedAnswers: Record<number, number>
  ): {
    score: number;
    totalQuestions: number;
    percentage: number;
    passed: boolean;
    requiredScore: number;
    weakAreas: AssessmentWeakArea[];
    updatedState: CourseProgressState;
  } {
    const state = this.getCourseState();
    const lvl = state.levels[level];
    const assessmentTask = lvl.tasks.find(t => t.isFinalAssessment);
    const questions: QuizQuestion[] = assessmentTask?.questions || [];

    let score = 0;
    const topicMisses: Record<string, { missed: number; total: number }> = {};

    questions.forEach((q, idx) => {
      const topic = q.topic || 'General Knowledge';
      if (!topicMisses[topic]) {
        topicMisses[topic] = { missed: 0, total: 0 };
      }
      topicMisses[topic].total += 1;

      // Handle both 0-indexed (ui) and 1-based (q.id) answer map inputs safely
      let userAns: number | undefined = undefined;
      if (selectedAnswers[idx] !== undefined && selectedAnswers[idx] !== null) {
        userAns = selectedAnswers[idx];
      } else if (selectedAnswers[q.id] !== undefined && selectedAnswers[q.id] !== null) {
        userAns = selectedAnswers[q.id];
      }

      if (userAns === q.correctAnswer) {
        score += 1;
      } else {
        topicMisses[topic].missed += 1;
      }
    });

    const totalQuestions = questions.length || lvl.totalQuestions || 20;
    const requiredScore = lvl.requiredScore;
    const passed = score >= requiredScore;
    const percentage = Math.round((score / totalQuestions) * 100);

    // Generate weak areas report
    const weakAreas: AssessmentWeakArea[] = Object.entries(topicMisses)
      .filter(([_, data]) => data.missed > 0)
      .map(([topic, data]) => ({
        topic,
        missedCount: data.missed,
        totalInTopic: data.total,
        explanation: `Review ${topic} modules and dialogue patterns to reinforce key concepts.`
      }));

    if (passed) {
      lvl.assessmentPassed = true;
      lvl.assessmentScore = score;

      // Mark the assessment task as completed
      if (assessmentTask) {
        assessmentTask.status = 'completed';
      }

      // Check if all tasks are complete to mark the level as completed
      const nonAssessmentTasks = lvl.tasks.filter(t => !t.isFinalAssessment);
      const allNonAssessmentsDone = nonAssessmentTasks.every(t => t.status === 'completed');

      if (allNonAssessmentsDone) {
        lvl.status = 'completed';
        lvl.progressPercentage = 100;
        lvl.completedTasks = lvl.totalTasks;

        // Unlock next level if applicable
        if (level === 'beginner') {
          state.levels.intermediate.status = 'in_progress';
          if (state.levels.intermediate.tasks.length > 0) {
            state.levels.intermediate.tasks[0].status = 'in_progress';
          }
        } else if (level === 'intermediate') {
          state.levels.advanced.status = 'in_progress';
          if (state.levels.advanced.tasks.length > 0) {
            state.levels.advanced.tasks[0].status = 'in_progress';
          }
        }
      }
    }

    state.overallProgress = this.calculateOverallProgress(state.levels);
    this.saveCourseState(state);

    return {
      score,
      totalQuestions,
      percentage,
      passed,
      requiredScore,
      weakAreas,
      updatedState: state
    };
  }

  /**
   * Reset assessment to allow retake
   */
  static resetAssessment(level: CourseLevel): CourseProgressState {
    const state = this.getCourseState();
    const lvl = state.levels[level];
    if (lvl) {
      lvl.assessmentPassed = false;
      lvl.assessmentScore = undefined;
      const assessmentTask = lvl.tasks.find(t => t.isFinalAssessment);
      if (assessmentTask) {
        assessmentTask.status = 'in_progress';
      }
      this.saveCourseState(state);
    }
    return state;
  }

  /**
   * Check prerequisite readiness for unlocking a level
   */
  static checkLevelPrerequisites(
    targetLevel: CourseLevel,
    state?: CourseProgressState
  ): {
    canUnlock: boolean;
    reason?: string;
    missingPrerequisites: string[];
  } {
    const currentState = state || this.getCourseState();
    const missingPrerequisites: string[] = [];

    if (targetLevel === 'beginner') {
      return { canUnlock: true, missingPrerequisites: [] };
    }

    if (targetLevel === 'intermediate') {
      const beg = currentState.levels.beginner;
      const allBegTasksDone = beg.tasks.filter(t => !t.isFinalAssessment).every(t => t.status === 'completed');
      if (!allBegTasksDone) {
        missingPrerequisites.push('Complete all Level 1 learning modules and capstone project');
      }
      if (!beg.assessmentPassed) {
        missingPrerequisites.push(`Pass Level 1 Final Assessment (Score >= ${beg.requiredScore}/${beg.totalQuestions})`);
      }

      const canUnlock = allBegTasksDone && beg.assessmentPassed;
      return {
        canUnlock,
        reason: canUnlock ? undefined : 'Complete all Beginner modules, project, and pass the assessment to unlock Intermediate.',
        missingPrerequisites
      };
    }

    if (targetLevel === 'advanced') {
      const int = currentState.levels.intermediate;
      const allIntTasksDone = int.tasks.filter(t => !t.isFinalAssessment).every(t => t.status === 'completed');
      if (!allIntTasksDone) {
        missingPrerequisites.push('Complete all Level 2 learning modules and capstone project');
      }
      if (!int.assessmentPassed) {
        missingPrerequisites.push(`Pass Level 2 Final Assessment (Score >= ${int.requiredScore}/${int.totalQuestions})`);
      }

      const canUnlock = allIntTasksDone && int.assessmentPassed;
      return {
        canUnlock,
        reason: canUnlock ? undefined : 'Complete all Intermediate modules, project, and pass the assessment to unlock Advanced.',
        missingPrerequisites
      };
    }

    return { canUnlock: false, missingPrerequisites: ['Unknown level'] };
  }

  /**
   * Attempt to switch current active level with prerequisite check
   */
  static switchLevel(targetLevel: CourseLevel): { success: boolean; state: CourseProgressState; reason?: string } {
    const state = this.getCourseState();
    const check = this.checkLevelPrerequisites(targetLevel, state);

    if (!check.canUnlock) {
      return {
        success: false,
        state,
        reason: check.reason || 'Level is locked. Complete previous level requirements first.'
      };
    }

    state.currentLevel = targetLevel;
    if (state.levels[targetLevel].status === 'locked') {
      state.levels[targetLevel].status = 'in_progress';
      if (state.levels[targetLevel].tasks.length > 0 && state.levels[targetLevel].tasks[0].status === 'locked') {
        state.levels[targetLevel].tasks[0].status = 'in_progress';
      }
    }

    this.saveCourseState(state);
    return { success: true, state };
  }

  /**
   * Check if user is eligible for the Master Certificate
   */
  static isEligibleForMasterCertificate(state?: CourseProgressState): boolean {
    const s = state || this.getCourseState();
    const beginnerComplete = s.levels.beginner.status === 'completed' && s.levels.beginner.assessmentPassed;
    const intermediateComplete = s.levels.intermediate.status === 'completed' && s.levels.intermediate.assessmentPassed;
    const advancedComplete = s.levels.advanced.status === 'completed' && s.levels.advanced.assessmentPassed;

    return beginnerComplete && intermediateComplete && advancedComplete;
  }

  /**
   * Calculate overall course progress percentage across all 3 levels
   */
  static calculateOverallProgress(levels: Record<CourseLevel, LevelProgress>): number {
    const allTasks: Task[] = [
      ...levels.beginner.tasks,
      ...levels.intermediate.tasks,
      ...levels.advanced.tasks
    ];
    if (allTasks.length === 0) return 0;

    const completed = allTasks.filter(t => t.status === 'completed').length;
    return Math.round((completed / allTasks.length) * 100);
  }
}
