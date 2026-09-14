import { CourseLevel, CourseProgressState, LevelProgress, Task, QuizQuestion, AssessmentWeakArea } from '../types/roadmap.types';
import { INITIAL_JAVASCRIPT_COURSE_STATE } from '../data/javascript';

const STORAGE_KEY = 'skillora_javascript_course_progress';
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

export class JavaScriptCourseService {
  /**
   * Load current user's JavaScript Course progress state from localStorage
   */
  static getCourseState(): CourseProgressState {
    try {
      const saved = getStorageItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as CourseProgressState;
        return this.normalizeCourseState(parsed);
      }
    } catch (err) {
      console.warn('Failed to load JavaScript course state from localStorage:', err);
    }
    return JSON.parse(JSON.stringify(INITIAL_JAVASCRIPT_COURSE_STATE));
  }

  /**
   * Save current JavaScript Course progress state
   */
  static saveCourseState(state: CourseProgressState): void {
    try {
      setStorageItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn('Failed to save JavaScript course state to localStorage:', err);
    }
  }

  /**
   * Reset course state back to pristine initial state
   */
  static resetCourseState(): CourseProgressState {
    const pristine = JSON.parse(JSON.stringify(INITIAL_JAVASCRIPT_COURSE_STATE));
    this.saveCourseState(pristine);
    return pristine;
  }

  /**
   * Normalize state structure to ensure tasks and levels are properly populated
   */
  private static normalizeCourseState(state: CourseProgressState): CourseProgressState {
    const base = JSON.parse(JSON.stringify(INITIAL_JAVASCRIPT_COURSE_STATE)) as CourseProgressState;
    
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
   * Complete a practical capstone project
   */
  static completeProject(
    level: CourseLevel,
    projectId: string,
    _deliverables?: string[],
    _projectNotes?: string
  ): CourseProgressState {
    return this.completeTask(level, projectId);
  }

  /**
   * Submit an official final assessment for a level
   */
  static submitAssessment(
    level: CourseLevel,
    answers: Record<number, number>,
    assessmentQuestions: QuizQuestion[]
  ): {
    passed: boolean;
    score: number;
    requiredScore: number;
    percentage: number;
    weakAreas: AssessmentWeakArea[];
    state: CourseProgressState;
  } {
    const state = this.getCourseState();
    const lvl = state.levels[level];

    let correctCount = 0;
    const topicMisses: Record<string, { missed: number; total: number; explanation: string }> = {};

    assessmentQuestions.forEach((q) => {
      const topic = q.topic || 'General Concepts';
      if (!topicMisses[topic]) {
        topicMisses[topic] = { missed: 0, total: 0, explanation: q.explanation || '' };
      }
      topicMisses[topic].total += 1;

      if (answers[q.id] === q.correctAnswer) {
        correctCount += 1;
      } else {
        topicMisses[topic].missed += 1;
      }
    });

    const passed = correctCount >= lvl.requiredScore;
    const percentage = Math.round((correctCount / assessmentQuestions.length) * 100);

    // Save assessment results into level progress
    lvl.assessmentScore = correctCount;
    lvl.assessmentPassed = passed;

    // Find the assessment task in level tasks and mark completed if passed
    const assessmentTask = lvl.tasks.find(t => t.isFinalAssessment);
    if (assessmentTask) {
      if (passed) {
        assessmentTask.status = 'completed';
      } else {
        assessmentTask.status = 'in_progress';
      }
    }

    // Build weak areas list
    const weakAreas: AssessmentWeakArea[] = Object.entries(topicMisses)
      .filter(([_, data]) => data.missed > 0)
      .map(([topic, data]) => ({
        topic,
        missedCount: data.missed,
        totalInTopic: data.total,
        explanation: data.explanation
      }));

    if (passed) {
      // Check if all tasks in current level are completed
      const allDone = lvl.tasks.every(t => t.status === 'completed');
      if (allDone) {
        lvl.status = 'completed';
      }

      // Unlock next level if prerequisites met
      if (level === 'beginner') {
        const prereqCheck = this.checkLevelPrerequisites('intermediate', state);
        if (prereqCheck.canUnlock) {
          state.levels.intermediate.status = 'in_progress';
          if (state.levels.intermediate.tasks[0]?.status === 'locked') {
            state.levels.intermediate.tasks[0].status = 'in_progress';
          }
        }
      } else if (level === 'intermediate') {
        const prereqCheck = this.checkLevelPrerequisites('advanced', state);
        if (prereqCheck.canUnlock) {
          state.levels.advanced.status = 'in_progress';
          if (state.levels.advanced.tasks[0]?.status === 'locked') {
            state.levels.advanced.tasks[0].status = 'in_progress';
          }
        }
      }
    }

    // Recalculate completed tasks count & percentages
    lvl.completedTasks = lvl.tasks.filter(t => t.status === 'completed').length;
    lvl.progressPercentage = Math.round((lvl.completedTasks / lvl.totalTasks) * 100);
    state.overallProgress = this.calculateOverallProgress(state.levels);

    this.saveCourseState(state);

    return {
      passed,
      score: correctCount,
      requiredScore: lvl.requiredScore,
      percentage,
      weakAreas,
      state
    };
  }

  /**
   * Retake an assessment (resets score, keeps completed lessons intact)
   */
  static retakeAssessment(level: CourseLevel): CourseProgressState {
    const state = this.getCourseState();
    const lvl = state.levels[level];
    if (lvl) {
      lvl.assessmentScore = undefined;
      lvl.assessmentPassed = false;
      const assessmentTask = lvl.tasks.find(t => t.isFinalAssessment);
      if (assessmentTask) {
        assessmentTask.status = 'in_progress';
      }
      this.saveCourseState(state);
    }
    return state;
  }

  /**
   * Strict prerequisite checker preventing bypass
   */
  static checkLevelPrerequisites(
    targetLevel: CourseLevel,
    currentState?: CourseProgressState
  ): { canUnlock: boolean; reason?: string } {
    const state = currentState || this.getCourseState();

    if (targetLevel === 'beginner') {
      return { canUnlock: true };
    }

    if (targetLevel === 'intermediate') {
      const beg = state.levels.beginner;
      const begTheoryAndProjects = beg.tasks.filter(t => !t.isFinalAssessment);
      const allBegTasksDone = begTheoryAndProjects.every(t => t.status === 'completed');
      const begExamPassed = (beg.assessmentScore || 0) >= beg.requiredScore && (beg.assessmentPassed === true);

      if (!allBegTasksDone || !begExamPassed) {
        return {
          canUnlock: false,
          reason: 'You must complete all 12 Beginner modules, the Interactive Task Manager Project, and pass the Beginner Assessment with at least 15/20 before unlocking Intermediate Level.'
        };
      }
      return { canUnlock: true };
    }

    if (targetLevel === 'advanced') {
      // Check Beginner first
      const begCheck = this.checkLevelPrerequisites('intermediate', state);
      if (!begCheck.canUnlock) {
        return begCheck;
      }

      const inter = state.levels.intermediate;
      const interTheoryAndProjects = inter.tasks.filter(t => !t.isFinalAssessment);
      const allInterTasksDone = interTheoryAndProjects.every(t => t.status === 'completed');
      const interExamPassed = (inter.assessmentScore || 0) >= inter.requiredScore && (inter.assessmentPassed === true);

      if (!allInterTasksDone || !interExamPassed) {
        return {
          canUnlock: false,
          reason: 'You must complete all 14 Intermediate modules, the Weather Dashboard Project, and pass the Intermediate Assessment with at least 25/30 before unlocking Advanced Level.'
        };
      }
      return { canUnlock: true };
    }

    return { canUnlock: false, reason: 'Invalid course level specified.' };
  }

  /**
   * Switch active level in state with strict prerequisite validation
   */
  static switchLevel(targetLevel: CourseLevel): { success: boolean; state: CourseProgressState; reason?: string } {
    const state = this.getCourseState();
    const check = this.checkLevelPrerequisites(targetLevel, state);

    if (!check.canUnlock) {
      return {
        success: false,
        state,
        reason: check.reason
      };
    }

    state.currentLevel = targetLevel;
    if (state.levels[targetLevel].status === 'locked') {
      state.levels[targetLevel].status = 'in_progress';
      if (state.levels[targetLevel].tasks[0]?.status === 'locked') {
        state.levels[targetLevel].tasks[0].status = 'in_progress';
      }
    }

    this.saveCourseState(state);
    return { success: true, state };
  }

  /**
   * Check if user is eligible to claim the Master JavaScript Certificate
   */
  static isEligibleForMasterCertificate(currentState?: CourseProgressState): {
    isEligible: boolean;
    advScore: number;
    requiredScore: number;
    overallProgress: number;
    unmetRequirements: string[];
  } {
    const state = currentState || this.getCourseState();
    const unmetRequirements: string[] = [];

    // 1. Beginner check
    const beg = state.levels.beginner;
    const begTasksDone = beg.tasks.filter(t => !t.isFinalAssessment).every(t => t.status === 'completed');
    const begScore = beg.assessmentScore || 0;
    if (!begTasksDone || begScore < beg.requiredScore) {
      unmetRequirements.push('Complete all 12 Beginner modules, Task Manager Project, and pass Beginner Assessment (>= 15/20).');
    }

    // 2. Intermediate check
    const inter = state.levels.intermediate;
    const interTasksDone = inter.tasks.filter(t => !t.isFinalAssessment).every(t => t.status === 'completed');
    const interScore = inter.assessmentScore || 0;
    if (!interTasksDone || interScore < inter.requiredScore) {
      unmetRequirements.push('Complete all 14 Intermediate modules, Weather Dashboard Project, and pass Intermediate Assessment (>= 25/30).');
    }

    // 3. Advanced check
    const adv = state.levels.advanced;
    const advTasksDone = adv.tasks.filter(t => !t.isFinalAssessment).every(t => t.status === 'completed');
    const advScore = adv.assessmentScore || 0;
    if (!advTasksDone) {
      unmetRequirements.push('Complete all 14 Advanced modules and both Capstone Projects (Finance Dashboard & Productivity App).');
    }
    if (advScore < adv.requiredScore) {
      unmetRequirements.push(`Pass the Advanced Master Certification Exam with at least 35/40 (Current score: ${advScore}/40).`);
    }

    const overallProgress = this.calculateOverallProgress(state.levels);
    const isEligible = unmetRequirements.length === 0 && advScore >= 35;

    return {
      isEligible,
      advScore,
      requiredScore: adv.requiredScore,
      overallProgress,
      unmetRequirements
    };
  }

  /**
   * Recalculate overall course progress percentage (0 - 100)
   */
  private static calculateOverallProgress(levels: Record<CourseLevel, LevelProgress>): number {
    let totalTasks = 0;
    let completedTasks = 0;

    (Object.keys(levels) as CourseLevel[]).forEach((lvlKey) => {
      const lvl = levels[lvlKey];
      if (lvl && Array.isArray(lvl.tasks)) {
        totalTasks += lvl.tasks.length;
        completedTasks += lvl.tasks.filter(t => t.status === 'completed').length;
      }
    });

    if (totalTasks === 0) return 0;
    return Math.round((completedTasks / totalTasks) * 100);
  }
}
