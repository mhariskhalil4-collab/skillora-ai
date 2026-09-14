import { CourseLevel, CourseProgressState, LevelProgress, Task, QuizQuestion, AssessmentWeakArea } from '../types/roadmap.types';
import { INITIAL_PROMPT_ENGINEERING_COURSE_STATE } from '../data/prompt-engineering';

const STORAGE_KEY = 'skillora_prompt_engineering_course_progress';
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

export class PromptEngineeringCourseService {
  /**
   * Load current user's Prompt Engineering Course progress state from localStorage
   */
  static getCourseState(): CourseProgressState {
    try {
      const saved = getStorageItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as CourseProgressState;
        return this.normalizeCourseState(parsed);
      }
    } catch (err) {
      console.warn('Failed to load Prompt Engineering course state from localStorage:', err);
    }
    return JSON.parse(JSON.stringify(INITIAL_PROMPT_ENGINEERING_COURSE_STATE));
  }

  /**
   * Save current Prompt Engineering Course progress state
   */
  static saveCourseState(state: CourseProgressState): void {
    try {
      setStorageItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn('Failed to save Prompt Engineering course state to localStorage:', err);
    }
  }

  /**
   * Reset course state back to pristine initial state
   */
  static resetCourseState(): CourseProgressState {
    const pristine = JSON.parse(JSON.stringify(INITIAL_PROMPT_ENGINEERING_COURSE_STATE));
    this.saveCourseState(pristine);
    return pristine;
  }

  /**
   * Normalize state structure to ensure tasks and levels are properly populated
   */
  private static normalizeCourseState(state: CourseProgressState): CourseProgressState {
    const base = JSON.parse(JSON.stringify(INITIAL_PROMPT_ENGINEERING_COURSE_STATE)) as CourseProgressState;
    
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

    return {
      courseId: state.courseId || base.courseId,
      courseTitle: state.courseTitle || base.courseTitle,
      currentLevel: state.currentLevel || 'beginner',
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
   * Calculate overall course progress (0-100%) across all 3 levels
   */
  static calculateOverallProgress(levels: Record<CourseLevel, LevelProgress>): number {
    let totalTasks = 0;
    let completedTasks = 0;

    (Object.keys(levels) as CourseLevel[]).forEach(levelKey => {
      const lvl = levels[levelKey];
      const tasks = lvl.tasks || [];
      totalTasks += tasks.length;
      completedTasks += tasks.filter(t => t.status === 'completed').length;
    });

    if (totalTasks === 0) return 0;
    return Math.round((completedTasks / totalTasks) * 100);
  }

  /**
   * Helper to check if a specific level meets all completion & assessment prerequisites
   */
  static checkLevelPrerequisites(targetLevel: CourseLevel, state: CourseProgressState = this.getCourseState()): {
    canUnlock: boolean;
    reason?: string;
  } {
    if (targetLevel === 'beginner') {
      return { canUnlock: true };
    }

    if (targetLevel === 'intermediate') {
      const beg = state.levels.beginner;
      const nonAssessmentTasks = beg.tasks.filter(t => !t.isFinalAssessment);
      const allModulesDone = nonAssessmentTasks.every(t => t.status === 'completed');
      const assessmentScore = beg.assessmentScore ?? 0;
      const assessmentPassed = Boolean(beg.assessmentPassed && assessmentScore >= 15);

      if (!allModulesDone || !assessmentPassed) {
        let reason = 'Level 2 (Intermediate) requires:';
        if (!allModulesDone) {
          const completedCount = nonAssessmentTasks.filter(t => t.status === 'completed').length;
          reason += ` Complete all 12 Beginner modules & capstone project (${completedCount}/${nonAssessmentTasks.length} done).`;
        }
        if (!assessmentPassed) {
          reason += ` Pass Beginner Final Assessment with at least 15/20 score (Current: ${assessmentScore}/20).`;
        }
        return { canUnlock: false, reason: reason.trim() };
      }

      return { canUnlock: true };
    }

    if (targetLevel === 'advanced') {
      // First must satisfy Beginner
      const begCheck = this.checkLevelPrerequisites('intermediate', state);
      if (!begCheck.canUnlock) {
        return {
          canUnlock: false,
          reason: `Level 3 (Advanced) requires completing Level 1 (Beginner) first. ${begCheck.reason}`
        };
      }

      const inter = state.levels.intermediate;
      const nonAssessmentTasks = inter.tasks.filter(t => !t.isFinalAssessment);
      const allModulesDone = nonAssessmentTasks.every(t => t.status === 'completed');
      const assessmentScore = inter.assessmentScore ?? 0;
      const assessmentPassed = Boolean(inter.assessmentPassed && assessmentScore >= 25);

      if (!allModulesDone || !assessmentPassed) {
        let reason = 'Level 3 (Advanced) requires:';
        if (!allModulesDone) {
          const completedCount = nonAssessmentTasks.filter(t => t.status === 'completed').length;
          reason += ` Complete all 14 Intermediate modules & capstone project (${completedCount}/${nonAssessmentTasks.length} done).`;
        }
        if (!assessmentPassed) {
          reason += ` Pass Intermediate Final Assessment with at least 25/30 score (Current: ${assessmentScore}/30).`;
        }
        return { canUnlock: false, reason: reason.trim() };
      }

      return { canUnlock: true };
    }

    return { canUnlock: true };
  }

  /**
   * Check if learner is eligible for Master Certificate:
   * Advanced score >= 35/40 AND 100% overall course completion.
   */
  static isEligibleForMasterCertificate(state: CourseProgressState = this.getCourseState()): {
    isEligible: boolean;
    reason?: string;
    advScore: number;
    overallProgress: number;
  } {
    const adv = state.levels.advanced;
    const advScore = adv.assessmentScore ?? 0;
    const advAssessmentPassed = Boolean(adv.assessmentPassed && advScore >= 35);
    const overallProgress = this.calculateOverallProgress(state.levels);
    const allTasksCompleted = (Object.keys(state.levels) as CourseLevel[]).every(lvlKey => {
      const lvl = state.levels[lvlKey];
      return (lvl.tasks || []).every(t => t.status === 'completed');
    });

    if (advAssessmentPassed && (overallProgress === 100 || allTasksCompleted)) {
      return {
        isEligible: true,
        advScore,
        overallProgress: 100
      };
    }

    let reason = 'Master Certificate Requirements: ';
    if (!advAssessmentPassed) {
      reason += `Score at least 35/40 on the Prompt Engineering Advanced Master Assessment (Current: ${advScore}/40). `;
    }
    if (overallProgress < 100 && !allTasksCompleted) {
      reason += `Achieve 100% course completion across all 3 levels (Current: ${overallProgress}%).`;
    }

    return {
      isEligible: false,
      reason: reason.trim(),
      advScore,
      overallProgress
    };
  }

  /**
   * Switch active course level with strict prerequisite enforcement
   */
  static switchLevel(targetLevel: CourseLevel): { success: boolean; state: CourseProgressState; message?: string } {
    const state = this.getCourseState();
    const prereqCheck = this.checkLevelPrerequisites(targetLevel, state);

    if (!prereqCheck.canUnlock) {
      return {
        success: false,
        state,
        message: prereqCheck.reason || `Level ${targetLevel} is locked. Complete previous level requirements first.`
      };
    }

    // Unlock target level if currently locked
    if (state.levels[targetLevel].status === 'locked') {
      state.levels[targetLevel].status = 'in_progress';
      const firstTask = state.levels[targetLevel].tasks[0];
      if (firstTask && firstTask.status === 'locked') {
        firstTask.status = 'in_progress';
      }
    }

    state.currentLevel = targetLevel;
    this.saveCourseState(state);
    return { success: true, state };
  }

  /**
   * Mark a task as completed and unlock the next sequential task
   */
  static completeTask(level: CourseLevel, taskId: string): CourseProgressState {
    const state = this.getCourseState();
    const levelData = state.levels[level];
    if (!levelData) return state;

    const taskIndex = levelData.tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) return state;

    // Mark current task completed
    levelData.tasks[taskIndex].status = 'completed';

    // Unlock next task if exists and currently locked
    if (taskIndex + 1 < levelData.tasks.length) {
      const nextTask = levelData.tasks[taskIndex + 1];
      if (nextTask.status === 'locked') {
        nextTask.status = 'in_progress';
      }
    }

    // Update level completed count & progress
    levelData.completedTasks = levelData.tasks.filter(t => t.status === 'completed').length;
    levelData.progressPercentage = Math.round((levelData.completedTasks / levelData.totalTasks) * 100);

    // If all tasks (including project/assessment) are done, mark level completed
    if (levelData.completedTasks === levelData.totalTasks) {
      levelData.status = 'completed';
    }

    state.overallProgress = this.calculateOverallProgress(state.levels);
    this.saveCourseState(state);
    return state;
  }

  /**
   * Submit and grade a final assessment
   */
  static submitAssessment(
    level: CourseLevel,
    userAnswers: Record<number, number>,
    questions: QuizQuestion[]
  ): {
    score: number;
    total: number;
    passed: boolean;
    requiredScore: number;
    weakAreas: AssessmentWeakArea[];
    state: CourseProgressState;
  } {
    const state = this.getCourseState();
    const levelData = state.levels[level];

    let correctCount = 0;
    const topicMistakes: Record<string, number> = {};
    const topicTotals: Record<string, number> = {};

    questions.forEach(q => {
      const topic = q.topic || 'General Prompt Engineering';
      topicTotals[topic] = (topicTotals[topic] || 0) + 1;

      const selected = userAnswers[q.id];
      if (selected === q.correctAnswer) {
        correctCount++;
      } else {
        topicMistakes[topic] = (topicMistakes[topic] || 0) + 1;
      }
    });

    const requiredScore = levelData.requiredScore;
    const passed = correctCount >= requiredScore;

    // Build weak areas
    const weakAreas: AssessmentWeakArea[] = Object.keys(topicMistakes).map(topic => ({
      topic,
      missedCount: topicMistakes[topic],
      totalInTopic: topicTotals[topic],
      explanation: `Review modules covering ${topic} to master core prompt constraints and architectural patterns.`
    }));

    // Record assessment result in level state
    levelData.assessmentScore = correctCount;
    levelData.assessmentPassed = passed;

    if (passed) {
      // Mark assessment task complete
      const assessmentTask = levelData.tasks.find(t => t.isFinalAssessment);
      if (assessmentTask) {
        assessmentTask.status = 'completed';
      }

      // Check if level is now 100% done
      levelData.completedTasks = levelData.tasks.filter(t => t.status === 'completed').length;
      levelData.progressPercentage = Math.round((levelData.completedTasks / levelData.totalTasks) * 100);

      if (levelData.completedTasks === levelData.totalTasks) {
        levelData.status = 'completed';
      }

      // Automatically unlock next level if prerequisites met
      if (level === 'beginner') {
        const checkInter = this.checkLevelPrerequisites('intermediate', state);
        if (checkInter.canUnlock && state.levels.intermediate.status === 'locked') {
          state.levels.intermediate.status = 'in_progress';
          if (state.levels.intermediate.tasks[0]?.status === 'locked') {
            state.levels.intermediate.tasks[0].status = 'in_progress';
          }
        }
      } else if (level === 'intermediate') {
        const checkAdv = this.checkLevelPrerequisites('advanced', state);
        if (checkAdv.canUnlock && state.levels.advanced.status === 'locked') {
          state.levels.advanced.status = 'in_progress';
          if (state.levels.advanced.tasks[0]?.status === 'locked') {
            state.levels.advanced.tasks[0].status = 'in_progress';
          }
        }
      }
    } else {
      // Failed assessment: do not mark assessment task complete
      const assessmentTask = levelData.tasks.find(t => t.isFinalAssessment);
      if (assessmentTask && assessmentTask.status !== 'completed') {
        assessmentTask.status = 'in_progress';
      }
    }

    state.overallProgress = this.calculateOverallProgress(state.levels);
    this.saveCourseState(state);

    return {
      score: correctCount,
      total: questions.length,
      passed,
      requiredScore,
      weakAreas,
      state
    };
  }

  /**
   * Reset assessment for retake while preserving completed module milestones
   */
  static retakeAssessment(level: CourseLevel): CourseProgressState {
    const state = this.getCourseState();
    const levelData = state.levels[level];
    if (levelData) {
      levelData.assessmentScore = undefined;
      levelData.assessmentPassed = false;
      const assessmentTask = levelData.tasks.find(t => t.isFinalAssessment);
      if (assessmentTask) {
        assessmentTask.status = 'in_progress';
      }
      this.saveCourseState(state);
    }
    return state;
  }
}
