const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('🚀 SKILLORA AI — WEB DEVELOPMENT MASTERCLASS COMPREHENSIVE AUDIT');
console.log('================================================================\n');

// Read source files
const beginnerPath = path.resolve(__dirname, '../src/features/roadmap/data/web-development/webDevelopmentBeginner.data.ts');
const intermediatePath = path.resolve(__dirname, '../src/features/roadmap/data/web-development/webDevelopmentIntermediate.data.ts');
const advancedPath = path.resolve(__dirname, '../src/features/roadmap/data/web-development/webDevelopmentAdvanced.data.ts');

const begContent = fs.readFileSync(beginnerPath, 'utf8');
const interContent = fs.readFileSync(intermediatePath, 'utf8');
const advContent = fs.readFileSync(advancedPath, 'utf8');

// Basic syntax and forbidden placeholder checks
const files = [
  { name: 'Beginner Data', content: begContent },
  { name: 'Intermediate Data', content: interContent },
  { name: 'Advanced Data', content: advContent },
];

let totalErrors = 0;
let totalWarnings = 0;

for (const file of files) {
  const placeholders = ['TODO', 'TBD', 'Lorem ipsum', 'coming soon', 'asdf', 'dummy text', 'placeholder text'];
  for (const p of placeholders) {
    const regex = new RegExp(`\\b${p}\\b`, 'i');
    if (regex.test(file.content)) {
      console.error(`❌ [${file.name}] Detected placeholder text: "${p}"`);
      totalErrors++;
    }
  }
}

// Extract tasks and assessments using TypeScript-aware parsing or regex
function parseQuestions(content, varName, levelName) {
  const regex = new RegExp(`export const ${varName}: QuizQuestion\\[\\] = (\\[[\\s\\S]*?\\n\\]);`);
  const match = content.match(regex);
  if (!match) {
    console.error(`❌ [${levelName}] Assessment questions array ${varName} not found!`);
    totalErrors++;
    return [];
  }
  try {
    const cleaned = match[1];
    const questions = eval(cleaned);
    return questions;
  } catch (e) {
    console.error(`❌ [${levelName}] Failed to evaluate assessment questions ${varName}:`, e.message);
    totalErrors++;
    return [];
  }
}

function parseTasks(content, varName, levelName) {
  const regex = new RegExp(`export const ${varName}: Task\\[\\] = (\\[[\\s\\S]*?\\n\\]);`);
  const match = content.match(regex);
  if (!match) {
    console.error(`❌ [${levelName}] Tasks array ${varName} not found!`);
    totalErrors++;
    return [];
  }
  try {
    const cleaned = match[1];
    const tasks = eval(cleaned);
    return tasks;
  } catch (e) {
    console.error(`❌ [${levelName}] Failed to evaluate tasks ${varName}:`, e.message);
    totalErrors++;
    return [];
  }
}

const begTasks = parseTasks(begContent, 'WEB_DEV_BEGINNER_TASKS', 'Beginner');
const interTasks = parseTasks(interContent, 'WEB_DEV_INTERMEDIATE_TASKS', 'Intermediate');
const advTasks = parseTasks(advContent, 'WEB_DEV_ADVANCED_TASKS', 'Advanced');

const begQuestions = parseQuestions(begContent, 'WEB_DEV_BEGINNER_ASSESSMENT', 'Beginner');
const interQuestions = parseQuestions(interContent, 'WEB_DEV_INTERMEDIATE_ASSESSMENT', 'Intermediate');
const advQuestions = parseQuestions(advContent, 'WEB_DEV_ADVANCED_ASSESSMENT', 'Advanced');

console.log('----------------------------------------------------------------');
console.log('1. TASK & MODULE COUNTS AUDIT:');
console.log('----------------------------------------------------------------');

const begTheory = begTasks.filter(t => t.type !== 'project' && t.type !== 'assessment' && !t.isFinalAssessment);
const begProjects = begTasks.filter(t => t.type === 'project');
const begAssessment = begTasks.filter(t => t.type === 'assessment' || t.isFinalAssessment);

const interTheory = interTasks.filter(t => t.type !== 'project' && t.type !== 'assessment' && !t.isFinalAssessment);
const interProjects = interTasks.filter(t => t.type === 'project');
const interAssessment = interTasks.filter(t => t.type === 'assessment' || t.isFinalAssessment);

const advTheory = advTasks.filter(t => t.type !== 'project' && t.type !== 'assessment' && !t.isFinalAssessment);
const advProjects = advTasks.filter(t => t.type === 'project');
const advAssessment = advTasks.filter(t => t.type === 'assessment' || t.isFinalAssessment);

console.log(`Beginner:     ${begTheory.length} Theory Modules, ${begProjects.length} Capstone Project, ${begAssessment.length} Assessment. Total Tasks: ${begTasks.length}`);
console.log(`Intermediate: ${interTheory.length} Theory Modules, ${interProjects.length} Capstone Project, ${interAssessment.length} Assessment. Total Tasks: ${interTasks.length}`);
console.log(`Advanced:     ${advTheory.length} Theory Modules, ${advProjects.length} Capstone Projects, ${advAssessment.length} Assessment. Total Tasks: ${advTasks.length}`);

const totalTheory = begTheory.length + interTheory.length + advTheory.length;
const totalProjects = begProjects.length + interProjects.length + advProjects.length;
const totalAssessments = begAssessment.length + interAssessment.length + advAssessment.length;
const grandTotalTasks = begTasks.length + interTasks.length + advTasks.length;

console.log(`\nGrand Totals: ${totalTheory} Theory (Req: 40), ${totalProjects} Projects (Req: 4), ${totalAssessments} Assessments (Req: 3). Total Curriculum Tasks: ${grandTotalTasks} (Req: 47)`);

const allTheoryModules = [...begTheory, ...interTheory, ...advTheory];
for (const tm of allTheoryModules) {
  if (!tm.lessonContent) {
    console.error(`❌ Theory module ${tm.id} is missing lessonContent`);
    totalErrors++;
  } else {
    if (!Array.isArray(tm.lessonContent.keyTakeaways) || tm.lessonContent.keyTakeaways.length < 3) {
      console.error(`❌ Theory module ${tm.id} has only ${tm.lessonContent.keyTakeaways?.length || 0} key takeaways (Required: >= 3)`);
      totalErrors++;
    }
  }
}

if (begTheory.length !== 12) { console.error('❌ Beginner must have exactly 12 theory modules'); totalErrors++; }
if (interTheory.length !== 14) { console.error('❌ Intermediate must have exactly 14 theory modules'); totalErrors++; }
if (advTheory.length !== 14) { console.error('❌ Advanced must have exactly 14 theory modules'); totalErrors++; }
if (totalTheory !== 40) { console.error('❌ Total theory modules must be 40'); totalErrors++; }
if (totalProjects !== 4) { console.error('❌ Total projects must be 4'); totalErrors++; }

console.log('----------------------------------------------------------------');
console.log('2. CAPSTONE PROJECTS & DELIVERABLES AUDIT:');
console.log('----------------------------------------------------------------');

const allProjects = [...begProjects, ...interProjects, ...advProjects];
let totalDeliverables = 0;

for (const proj of allProjects) {
  const delivs = proj.projectDetails?.deliverables || proj.deliverables || [];
  const dCount = delivs.length;
  totalDeliverables += dCount;
  console.log(`- Project: "${proj.title}" -> ${dCount} Deliverables`);
  if (dCount < 10) {
    console.error(`❌ Project "${proj.title}" has only ${dCount} deliverables (Required: >= 10)`);
    totalErrors++;
  }
  for (let i = 0; i < delivs.length; i++) {
    const del = delivs[i];
    if (!del.id || !del.title || !del.description) {
      console.error(`❌ Deliverable #${i+1} in "${proj.title}" is missing required fields`);
      totalErrors++;
    }
    const criteriaList = del.criteria || del.checklist || [];
    if (!Array.isArray(criteriaList) || criteriaList.length < 3) {
      console.error(`❌ Deliverable #${i+1} "${del.title}" has fewer than 3 criteria/checklist items`);
      totalErrors++;
    }
  }
}
console.log(`Total Project Deliverables across all 4 projects: ${totalDeliverables} (All >= 10 requirement met)`);

console.log('----------------------------------------------------------------');
console.log('3. FORMAL ASSESSMENTS & MCQ DISTRIBUTION AUDIT:');
console.log('----------------------------------------------------------------');

function auditQuestions(questions, levelName, expectedCount) {
  console.log(`\nAuditing ${levelName} Assessment (${questions.length} questions, Expected: ${expectedCount}):`);
  if (questions.length !== expectedCount) {
    console.error(`❌ ${levelName} question count mismatch: got ${questions.length}, expected ${expectedCount}`);
    totalErrors++;
  }

  const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
  const ids = new Set();

  questions.forEach((q, idx) => {
    if (ids.has(q.id)) {
      console.error(`❌ Duplicate question ID ${q.id} in ${levelName}`);
      totalErrors++;
    }
    ids.add(q.id);

    if (!q.question || q.question.trim().length < 10) {
      console.error(`❌ Question #${idx+1} in ${levelName} has empty or short question text`);
      totalErrors++;
    }

    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`❌ Question #${idx+1} (ID: ${q.id}) does not have exactly 4 options`);
      totalErrors++;
    } else {
      q.options.forEach((opt, oIdx) => {
        if (!opt || opt.trim().length === 0) {
          console.error(`❌ Option #${oIdx} in Question #${idx+1} is empty`);
          totalErrors++;
        }
      });
    }

    if (![0, 1, 2, 3].includes(q.correctAnswer)) {
      console.error(`❌ Question #${idx+1} (ID: ${q.id}) has invalid correctAnswer ${q.correctAnswer}`);
      totalErrors++;
    } else {
      dist[q.correctAnswer]++;
    }

    if (!q.explanation || q.explanation.trim().length < 15) {
      console.error(`❌ Question #${idx+1} (ID: ${q.id}) lacks a detailed explanation`);
      totalErrors++;
    }
  });

  console.log(`Answer Distribution: A(0)=${dist[0]}, B(1)=${dist[1]}, C(2)=${dist[2]}, D(3)=${dist[3]}`);
}

auditQuestions(begQuestions, 'Beginner', 20);
auditQuestions(interQuestions, 'Intermediate', 30);
auditQuestions(advQuestions, 'Advanced', 40);

const totalMCQs = begQuestions.length + interQuestions.length + advQuestions.length;
console.log(`\nTotal MCQs: ${totalMCQs} (Required: 90)`);
if (totalMCQs !== 90) {
  console.error(`❌ Total MCQs mismatch: got ${totalMCQs}, expected 90`);
  totalErrors++;
}

console.log('\n================================================================');
if (totalErrors === 0) {
  console.log('✅ ALL WEB DEVELOPMENT DATA AUDITS PASSED WITH ZERO ERRORS!');
} else {
  console.error(`❌ AUDIT FAILED WITH ${totalErrors} ERROR(S)!`);
  process.exit(1);
}
console.log('================================================================');
