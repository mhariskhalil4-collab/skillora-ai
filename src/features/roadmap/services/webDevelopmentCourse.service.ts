import { CourseLevel, CourseProgressState, LevelProgress, Task, QuizQuestion, AssessmentWeakArea } from '../types/roadmap.types';
import { INITIAL_WEB_DEV_COURSE_STATE } from '../data/web-development';

const STORAGE_KEY = 'skillora_web_development_course_progress';
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

export class WebDevelopmentCourseService {
  /**
   * Load current user's Web Development Course progress state from localStorage
   */
  static getCourseState(): CourseProgressState {
    try {
      const saved = getStorageItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as CourseProgressState;
        return this.normalizeCourseState(parsed);
      }
    } catch (err) {
      console.warn('Failed to load Web Development course state from localStorage:', err);
    }
    return JSON.parse(JSON.stringify(INITIAL_WEB_DEV_COURSE_STATE));
  }

  /**
   * Save current Web Development Course progress state
   */
  static saveCourseState(state: CourseProgressState): void {
    try {
      setStorageItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn('Failed to save Web Development course state to localStorage:', err);
    }
  }

  /**
   * Reset course state back to pristine initial state
   */
  static resetCourseState(): CourseProgressState {
    const pristine = JSON.parse(JSON.stringify(INITIAL_WEB_DEV_COURSE_STATE));
    this.saveCourseState(pristine);
    return pristine;
  }

  /**
   * Return a fresh copy of the initial course progress state
   */
  static getInitialState(): CourseProgressState {
    return JSON.parse(JSON.stringify(INITIAL_WEB_DEV_COURSE_STATE));
  }

  /**
   * Normalize state structure to ensure tasks and levels are properly populated and anti-tampered
   */
  static normalizeCourseState(state: CourseProgressState): CourseProgressState {
    const base = JSON.parse(JSON.stringify(INITIAL_WEB_DEV_COURSE_STATE)) as CourseProgressState;
    
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
      const topic = q.topic || 'General Web Concepts';
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
    const assessmentTask = lvl.tasks.find(t => t.type === 'assessment' || t.isFinalAssessment);
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
      const allModulesDone = lvl.tasks.filter(t => t.type !== 'assessment' && !t.isFinalAssessment).every(t => t.status === 'completed');
      if (allModulesDone) {
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
      const assessmentTask = lvl.tasks.find(t => t.type === 'assessment' || t.isFinalAssessment);
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
      const begTheoryAndProjects = beg.tasks.filter(t => t.type !== 'assessment' && !t.isFinalAssessment);
      const allBegTasksDone = begTheoryAndProjects.every(t => t.status === 'completed');
      const begExamPassed = (beg.assessmentScore || 0) >= beg.requiredScore && (beg.assessmentPassed === true);

      if (!allBegTasksDone || !begExamPassed) {
        return {
          canUnlock: false,
          reason: 'You must complete all 12 Beginner modules, the Responsive Personal Portfolio Project, and pass the Beginner Assessment with at least 15/20 before unlocking Intermediate Level.'
        };
      }
      return { canUnlock: true };
    }

    if (targetLevel === 'advanced') {
      const interPrereq = this.checkLevelPrerequisites('intermediate', state);
      if (!interPrereq.canUnlock) {
        return interPrereq;
      }

      const inter = state.levels.intermediate;
      const interTheoryAndProjects = inter.tasks.filter(t => t.type !== 'assessment' && !t.isFinalAssessment);
      const allInterTasksDone = interTheoryAndProjects.every(t => t.status === 'completed');
      const interExamPassed = (inter.assessmentScore || 0) >= inter.requiredScore && (inter.assessmentPassed === true);

      if (!allInterTasksDone || !interExamPassed) {
        return {
          canUnlock: false,
          reason: 'You must complete all 14 Intermediate modules, the Production-Grade React SaaS Project, and pass the Intermediate Assessment with at least 25/30 before unlocking Advanced Level.'
        };
      }
      return { canUnlock: true };
    }

    return { canUnlock: true };
  }

  /**
   * Switch the currently active level tab with prerequisite enforcement
   */
  static switchLevel(targetLevel: CourseLevel): { success: boolean; state: CourseProgressState; error?: string; reason?: string } {
    const state = this.getCourseState();
    const check = this.checkLevelPrerequisites(targetLevel, state);

    if (!check.canUnlock) {
      return {
        success: false,
        state,
        error: check.reason || 'Complete prerequisite levels first.',
        reason: check.reason || 'Complete prerequisite levels first.'
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
   * Calculate overall course progress (0 - 100%)
   */
  private static calculateOverallProgress(levels: Record<CourseLevel, LevelProgress>): number {
    const totalPossibleTasks =
      (levels.beginner?.totalTasks || 0) +
      (levels.intermediate?.totalTasks || 0) +
      (levels.advanced?.totalTasks || 0);

    if (totalPossibleTasks === 0) return 0;

    const totalCompleted =
      (levels.beginner?.completedTasks || 0) +
      (levels.intermediate?.completedTasks || 0) +
      (levels.advanced?.completedTasks || 0);

    return Math.round((totalCompleted / totalPossibleTasks) * 100);
  }

  /**
   * Validate if the user is eligible for the Master Certification
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

    const beg = state.levels.beginner;
    const inter = state.levels.intermediate;
    const adv = state.levels.advanced;

    const begModules = beg.tasks.filter(t => t.type !== 'assessment' && !t.isFinalAssessment);
    if (!begModules.every(t => t.status === 'completed')) {
      unmetRequirements.push('Complete all Level 1 Beginner modules & Capstone Project');
    }
    if (!beg.assessmentPassed || (beg.assessmentScore || 0) < beg.requiredScore) {
      unmetRequirements.push(`Pass Beginner Assessment (Score: ${beg.assessmentScore || 0}/${beg.totalQuestions || 20}, Required: >= ${beg.requiredScore})`);
    }

    const interModules = inter.tasks.filter(t => t.type !== 'assessment' && !t.isFinalAssessment);
    if (!interModules.every(t => t.status === 'completed')) {
      unmetRequirements.push('Complete all Level 2 Intermediate modules & Capstone Project');
    }
    if (!inter.assessmentPassed || (inter.assessmentScore || 0) < inter.requiredScore) {
      unmetRequirements.push(`Pass Intermediate Assessment (Score: ${inter.assessmentScore || 0}/${inter.totalQuestions || 30}, Required: >= ${inter.requiredScore})`);
    }

    const advModules = adv.tasks.filter(t => t.type !== 'assessment' && !t.isFinalAssessment);
    if (!advModules.every(t => t.status === 'completed')) {
      unmetRequirements.push('Complete all Level 3 Advanced modules & both Enterprise Capstone Projects');
    }
    const advScore = adv.assessmentScore || 0;
    if (!adv.assessmentPassed || advScore < adv.requiredScore) {
      unmetRequirements.push(`Pass Advanced Master Assessment (Score: ${advScore}/${adv.totalQuestions || 40}, Required: >= ${adv.requiredScore})`);
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
}
