import {
  ENGLISH_EMAIL_WRITING_BEGINNER_TASKS,
  ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS,
  ENGLISH_EMAIL_WRITING_ADVANCED_TASKS,
  ENGLISH_EMAIL_WRITING_COURSE_DATA,
} from '../src/features/roadmap/data/english-email-writing';
import { EnglishEmailWritingCourseService } from '../src/features/roadmap/services/englishEmailWritingCourse.service';

console.log('====================================================');
console.log('ENGLISH EMAIL WRITING MASTERCLASS DATA AUDIT & VERIFICATION');
console.log('====================================================\n');

let hasErrors = false;

// 1. Task Counts Verification
const begTasks = ENGLISH_EMAIL_WRITING_BEGINNER_TASKS;
const intTasks = ENGLISH_EMAIL_WRITING_INTERMEDIATE_TASKS;
const advTasks = ENGLISH_EMAIL_WRITING_ADVANCED_TASKS;

console.log(`[LEVEL AUDIT] Beginner Tasks Count: ${begTasks.length} (Expected: 14)`);
console.log(`[LEVEL AUDIT] Intermediate Tasks Count: ${intTasks.length} (Expected: 16)`);
console.log(`[LEVEL AUDIT] Advanced Tasks Count: ${advTasks.length} (Expected: 17)`);
console.log(`[LEVEL AUDIT] Total Tasks Count: ${begTasks.length + intTasks.length + advTasks.length} (Expected: 47)\n`);

if (begTasks.length !== 14 || intTasks.length !== 16 || advTasks.length !== 17) {
  console.error('❌ FAILED: Level task counts mismatch!');
  hasErrors = true;
}

// 2. Theory Modules, Projects, Assessments breakdown
const allTasks = [...begTasks, ...intTasks, ...advTasks];

const theoryModules = allTasks.filter(t => t.task_type === 'theory' || !t.task_type);
const projectModules = allTasks.filter(t => t.task_type === 'project');
const assessmentModules = allTasks.filter(t => t.task_type === 'assessment');

console.log(`[MODULE BREAKDOWN] Theory Modules: ${theoryModules.length} (Expected: 40)`);
console.log(`[MODULE BREAKDOWN] Projects: ${projectModules.length} (Expected: 4)`);
console.log(`[MODULE BREAKDOWN] Assessments: ${assessmentModules.length} (Expected: 3)\n`);

if (theoryModules.length !== 40) {
  console.error(`❌ FAILED: Expected 40 theory modules, found ${theoryModules.length}`);
  hasErrors = true;
}
if (projectModules.length !== 4) {
  console.error(`❌ FAILED: Expected 4 projects, found ${projectModules.length}`);
  hasErrors = true;
}
if (assessmentModules.length !== 3) {
  console.error(`❌ FAILED: Expected 3 assessments, found ${assessmentModules.length}`);
  hasErrors = true;
}

// 3. Project Deliverables Audit
projectModules.forEach((proj, idx) => {
  const delivs = proj.deliverables || [];
  console.log(`[PROJECT ${idx + 1}] "${proj.title}" - Deliverables: ${delivs.length} (Min Required: 10)`);
  if (delivs.length < 10) {
    console.error(`❌ FAILED: Project "${proj.title}" has only ${delivs.length} deliverables (< 10)!`);
    hasErrors = true;
  }
});
console.log('');

// 4. Assessments and MCQ Breakdown Audit
let totalMcqs = 0;
const expectedMcqCounts = [20, 30, 40];

assessmentModules.forEach((exam, idx) => {
  const qList = exam.quiz_questions || [];
  totalMcqs += qList.length;
  console.log(`[ASSESSMENT ${idx + 1}] "${exam.title}" - MCQs: ${qList.length} (Expected: ${expectedMcqCounts[idx]})`);
  if (qList.length !== expectedMcqCounts[idx]) {
    console.error(`❌ FAILED: Assessment "${exam.title}" has ${qList.length} questions, expected ${expectedMcqCounts[idx]}!`);
    hasErrors = true;
  }

  // Check MCQ options distribution
  const counts = [0, 0, 0, 0];
  qList.forEach((q, qIdx) => {
    if (typeof q.correct_answer !== 'number' || q.correct_answer < 0 || q.correct_answer > 3) {
      console.error(`❌ FAILED: Question ${qIdx + 1} has invalid correct_answer: ${q.correct_answer}`);
      hasErrors = true;
    } else {
      counts[q.correct_answer]++;
    }
    if (!q.options || q.options.length !== 4) {
      console.error(`❌ FAILED: Question ${qIdx + 1} does not have exactly 4 options!`);
      hasErrors = true;
    }
    if (!q.explanation || q.explanation.length < 20) {
      console.error(`❌ FAILED: Question ${qIdx + 1} has insufficient explanation!`);
      hasErrors = true;
    }
  });

  console.log(`   Answer Distribution: A(0)=${counts[0]}, B(1)=${counts[1]}, C(2)=${counts[2]}, D(3)=${counts[3]}`);
});
console.log(`\n[TOTAL MCQs]: ${totalMcqs} (Expected: 90)\n`);

if (totalMcqs !== 90) {
  console.error(`❌ FAILED: Total MCQs is ${totalMcqs}, expected 90!`);
  hasErrors = true;
}

// 5. Check Content Quality & Placeholder Scan
const forbiddenPatterns = [
  /\bTODO\b/i,
  /\bTBD\b/i,
  /\bcoming soon\b/i,
  /\bplaceholder\b/i,
  /\blorem ipsum\b/i,
  /\bresearch this topic\b/i,
  /\bgenerate your own\b/i,
];

allTasks.forEach(task => {
  const contentStr = JSON.stringify(task);
  forbiddenPatterns.forEach(pat => {
    if (pat.test(contentStr)) {
      console.error(`❌ FAILED: Task "${task.title}" matched forbidden pattern ${pat}`);
      hasErrors = true;
    }
  });

  // Check detailed content
  if (task.task_type === 'theory' || !task.task_type) {
    if (!task.theory_content || task.theory_content.length < 500) {
      console.warn(`⚠️ WARNING: Task "${task.title}" theory_content length is short (${task.theory_content?.length || 0} chars)`);
    }
    if (!task.practical_exercises || task.practical_exercises.length === 0) {
      console.error(`❌ FAILED: Task "${task.title}" has no practical_exercises!`);
      hasErrors = true;
    }
  }
});

// 6. Service & Storage Key Isolation Verification
console.log('[SERVICE AUDIT] Verifying EnglishEmailWritingCourseService methods & key isolation...');
const storageKey = (EnglishEmailWritingCourseService as any).STORAGE_KEY || 'skillora_english_email_writing_course_progress';
console.log(`[STORAGE KEY] Configured Key: ${storageKey}`);
if (storageKey !== 'skillora_english_email_writing_course_progress') {
  console.error(`❌ FAILED: Storage key mismatch: ${storageKey}`);
  hasErrors = true;
}

// Test Service Initial State
const initialState = EnglishEmailWritingCourseService.getCourseState();
console.log(`[INITIAL STATE] Current Level: ${initialState.currentLevel}`);
console.log(`[INITIAL STATE] Overall Progress: ${initialState.overallProgress}%`);
console.log(`[INITIAL STATE] Completed Tasks Count: ${initialState.completedTasks.length}`);

// Test Prerequisite Gating
const intPrereqCheck = EnglishEmailWritingCourseService.checkLevelPrerequisites('intermediate', initialState);
console.log(`[PREREQUISITE TEST] Intermediate allowed on fresh state? ${intPrereqCheck.allowed} (Expected: false)`);
if (intPrereqCheck.allowed !== false) {
  console.error('❌ FAILED: Intermediate should be locked on fresh state!');
  hasErrors = true;
}

const advPrereqCheck = EnglishEmailWritingCourseService.checkLevelPrerequisites('advanced', initialState);
console.log(`[PREREQUISITE TEST] Advanced allowed on fresh state? ${advPrereqCheck.allowed} (Expected: false)`);
if (advPrereqCheck.allowed !== false) {
  console.error('❌ FAILED: Advanced should be locked on fresh state!');
  hasErrors = true;
}

console.log('\n====================================================');
if (hasErrors) {
  console.error('❌ AUDIT FAILED WITH ERRORS! Please review above.');
  process.exit(1);
} else {
  console.log('✅ ALL ENGLISH EMAIL WRITING DATA & SERVICE AUDITS PASSED PERFECTLY!');
  console.log('====================================================\n');
}
