import { CourseLevel, CourseProgressState, LevelProgress, Task, QuizQuestion, AssessmentWeakArea } from '../types/roadmap.types';
import { INITIAL_META_ADS_COURSE_STATE } from '../data/meta';

const STORAGE_KEY = 'skillora_meta_ads_course_progress';
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

export class MetaAdsCourseService {
  /**
   * Load current user's Meta Ads Course progress state from localStorage
   */
  static getCourseState(): CourseProgressState {
    try {
      const saved = getStorageItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as CourseProgressState;
        return this.normalizeCourseState(parsed);
      }
    } catch (err) {
      console.warn('Failed to load Meta Ads course state from localStorage:', err);
    }
    return JSON.parse(JSON.stringify(INITIAL_META_ADS_COURSE_STATE));
  }

  /**
   * Save current Meta Ads Course progress state
   */
  static saveCourseState(state: CourseProgressState): void {
    try {
      setStorageItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn('Failed to save Meta Ads course state to localStorage:', err);
    }
  }

  /**
   * Reset course state back to pristine initial state
   */
  static resetCourseState(): CourseProgressState {
    const pristine = JSON.parse(JSON.stringify(INITIAL_META_ADS_COURSE_STATE));
    this.saveCourseState(pristine);
    return pristine;
  }

  /**
   * Normalize state structure to ensure tasks and levels are properly populated
   */
  private static normalizeCourseState(state: CourseProgressState): CourseProgressState {
    const base = JSON.parse(JSON.stringify(INITIAL_META_ADS_COURSE_STATE)) as CourseProgressState;
    
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
      reason += `Score at least 35/40 on the Meta Ads Advanced Master Assessment (Current: ${advScore}/40). `;
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
   * Set active course level (checks prerequisite unlocking)
   */
  static switchLevel(targetLevel: CourseLevel): { success: boolean; message?: string; state: CourseProgressState } {
    const state = this.getCourseState();
    const prereq = this.checkLevelPrerequisites(targetLevel, state);

    if (!prereq.canUnlock) {
      return {
        success: false,
        message: prereq.reason || 'Complete the prerequisite level assessment and all required modules first.',
        state
      };
    }

    // Ensure status is at least in_progress if currently marked locked
    if (state.levels[targetLevel].status === 'locked') {
      state.levels[targetLevel].status = 'in_progress';
      if (state.levels[targetLevel].tasks.length > 0 && state.levels[targetLevel].tasks[0].status === 'locked') {
        state.levels[targetLevel].tasks[0].status = 'in_progress';
      }
    }

    state.currentLevel = targetLevel;
    this.saveCourseState(state);
    return {
      success: true,
      state
    };
  }

  /**
   * Complete a task and unlock subsequent tasks in that level
   */
  static completeTask(level: CourseLevel, taskId: string): CourseProgressState {
    const state = this.getCourseState();
    const lvl = state.levels[level];
    if (!lvl) return state;

    const taskIndex = lvl.tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) return state;

    lvl.tasks[taskIndex].status = 'completed';

    // Unlock the immediate next task if it was locked
    if (taskIndex + 1 < lvl.tasks.length) {
      if (lvl.tasks[taskIndex + 1].status === 'locked') {
        lvl.tasks[taskIndex + 1].status = 'in_progress';
      }
    }

    // Recalculate level stats
    lvl.completedTasks = lvl.tasks.filter(t => t.status === 'completed').length;
    lvl.progressPercentage = Math.round((lvl.completedTasks / lvl.totalTasks) * 100);

    // Auto-complete level status if all tasks are completed and assessment is passed
    if (lvl.completedTasks === lvl.totalTasks && lvl.assessmentPassed) {
      lvl.status = 'completed';
    }

    // Recalculate overall course progress
    state.overallProgress = this.calculateOverallProgress(state.levels);

    this.saveCourseState(state);
    return state;
  }

  /**
   * Evaluate user's final assessment submission
   */
  static submitAssessment(
    level: CourseLevel,
    answers: Record<string, number>,
    questions: QuizQuestion[]
  ): {
    passed: boolean;
    score: number;
    total: number;
    requiredScore: number;
    percentage: number;
    weakAreas: AssessmentWeakArea[];
    unlockedNextLevel?: CourseLevel;
    updatedState: CourseProgressState;
  } {
    const state = this.getCourseState();
    const lvl = state.levels[level];

    let correctCount = 0;
    const topicStats: Record<string, { total: number; missed: number; explanation: string }> = {};

    questions.forEach(q => {
      const topic = q.topic || 'Meta Ads Core Knowledge';
      if (!topicStats[topic]) {
        topicStats[topic] = { total: 0, missed: 0, explanation: q.explanation || '' };
      }
      topicStats[topic].total += 1;

      const selected = answers[q.id];
      if (selected === q.correctAnswer) {
        correctCount += 1;
      } else {
        topicStats[topic].missed += 1;
      }
    });

    const total = questions.length;
    const requiredScore = lvl.requiredScore;
    const passed = correctCount >= requiredScore;
    const percentage = Math.round((correctCount / total) * 100);

    // Identify weak areas (topics where questions were missed)
    const weakAreas: AssessmentWeakArea[] = Object.entries(topicStats)
      .filter(([_, stats]) => stats.missed > 0)
      .map(([topic, stats]) => ({
        topic,
        missedCount: stats.missed,
        totalInTopic: stats.total,
        explanation: stats.explanation
      }))
      .sort((a, b) => b.missedCount - a.missedCount);

    // Update level state
    lvl.assessmentScore = correctCount;
    lvl.assessmentPassed = passed;

    let unlockedNextLevel: CourseLevel | undefined = undefined;

    if (passed) {
      // Mark final assessment task complete
      const assessmentTask = lvl.tasks.find(t => t.isFinalAssessment);
      if (assessmentTask) {
        assessmentTask.status = 'completed';
      }

      // Check if all non-assessment tasks in this level are completed
      const nonAssessmentTasks = lvl.tasks.filter(t => !t.isFinalAssessment);
      const allModulesDone = nonAssessmentTasks.every(t => t.status === 'completed');

      if (allModulesDone) {
        lvl.status = 'completed';

        // Unlock next level
        if (level === 'beginner' && correctCount >= 15) {
          state.levels.intermediate.status = 'in_progress';
          if (state.levels.intermediate.tasks.length > 0 && state.levels.intermediate.tasks[0].status === 'locked') {
            state.levels.intermediate.tasks[0].status = 'in_progress';
          }
          unlockedNextLevel = 'intermediate';
        } else if (level === 'intermediate' && correctCount >= 25) {
          state.levels.advanced.status = 'in_progress';
          if (state.levels.advanced.tasks.length > 0 && state.levels.advanced.tasks[0].status === 'locked') {
            state.levels.advanced.tasks[0].status = 'in_progress';
          }
          unlockedNextLevel = 'advanced';
        }
      }
    }

    // Recalculate progress
    const completed = lvl.tasks.filter(t => t.status === 'completed').length;
    lvl.completedTasks = completed;
    lvl.progressPercentage = Math.round((completed / lvl.tasks.length) * 100);
    state.overallProgress = this.calculateOverallProgress(state.levels);

    this.saveCourseState(state);

    return {
      passed,
      score: correctCount,
      total,
      requiredScore,
      percentage,
      weakAreas,
      unlockedNextLevel,
      updatedState: state
    };
  }

  /**
   * Reset assessment for retake
   */
  static resetAssessmentForRetake(level: CourseLevel): CourseProgressState {
    const state = this.getCourseState();
    const lvl = state.levels[level];
    if (lvl) {
      lvl.assessmentPassed = false;
      delete lvl.assessmentScore;
      const assessmentTask = lvl.tasks.find(t => t.isFinalAssessment);
      if (assessmentTask) {
        assessmentTask.status = 'in_progress';
      }
      this.saveCourseState(state);
    }
    return state;
  }

  /**
   * Get complete diagnostics of user's Meta Ads course progress
   */
  static getDiagnostics(): {
    courseId: string;
    overallProgress: number;
    currentLevel: CourseLevel;
    levels: Record<
      CourseLevel,
      {
        title: string;
        status: string;
        progress: number;
        completedTasks: number;
        totalTasks: number;
        assessmentPassed: boolean;
        assessmentScore?: number;
        requiredScore: number;
      }
    >;
    masterCertificateEligible: boolean;
  } {
    const state = this.getCourseState();
    const certEligibility = this.isEligibleForMasterCertificate(state);

    return {
      courseId: state.courseId,
      overallProgress: state.overallProgress,
      currentLevel: state.currentLevel,
      levels: {
        beginner: {
          title: state.levels.beginner.title,
          status: state.levels.beginner.status,
          progress: state.levels.beginner.progressPercentage,
          completedTasks: state.levels.beginner.completedTasks,
          totalTasks: state.levels.beginner.totalTasks,
          assessmentPassed: state.levels.beginner.assessmentPassed,
          assessmentScore: state.levels.beginner.assessmentScore,
          requiredScore: state.levels.beginner.requiredScore
        },
        intermediate: {
          title: state.levels.intermediate.title,
          status: state.levels.intermediate.status,
          progress: state.levels.intermediate.progressPercentage,
          completedTasks: state.levels.intermediate.completedTasks,
          totalTasks: state.levels.intermediate.totalTasks,
          assessmentPassed: state.levels.intermediate.assessmentPassed,
          assessmentScore: state.levels.intermediate.assessmentScore,
          requiredScore: state.levels.intermediate.requiredScore
        },
        advanced: {
          title: state.levels.advanced.title,
          status: state.levels.advanced.status,
          progress: state.levels.advanced.progressPercentage,
          completedTasks: state.levels.advanced.completedTasks,
          totalTasks: state.levels.advanced.totalTasks,
          assessmentPassed: state.levels.advanced.assessmentPassed,
          assessmentScore: state.levels.advanced.assessmentScore,
          requiredScore: state.levels.advanced.requiredScore
        }
      },
      masterCertificateEligible: certEligibility.isEligible
    };
  }
}
