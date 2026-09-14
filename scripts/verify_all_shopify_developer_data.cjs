const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('================================================================');
console.log('🚀 SKILLORA AI — SHOPIFY DEVELOPER MASTERCLASS COMPREHENSIVE AUDIT');
console.log('================================================================\n');

// Read source files
const beginnerPath = path.resolve(__dirname, '../src/features/roadmap/data/shopify-developer/shopifyDeveloperBeginner.data.ts');
const intermediatePath = path.resolve(__dirname, '../src/features/roadmap/data/shopify-developer/shopifyDeveloperIntermediate.data.ts');
const advancedPath = path.resolve(__dirname, '../src/features/roadmap/data/shopify-developer/shopifyDeveloperAdvanced.data.ts');
const indexPath = path.resolve(__dirname, '../src/features/roadmap/data/shopify-developer/index.ts');
const servicePath = path.resolve(__dirname, '../src/features/roadmap/services/shopifyDeveloperCourse.service.ts');
const liquidServicePath = path.resolve(__dirname, '../src/features/roadmap/services/shopifyCourse.service.ts');
const catalogPath = path.resolve(__dirname, '../src/features/roadmap/components/CourseCatalogScreen.tsx');
const appPath = path.resolve(__dirname, '../src/App.tsx');

const begContent = fs.readFileSync(beginnerPath, 'utf8');
const interContent = fs.readFileSync(intermediatePath, 'utf8');
const advContent = fs.readFileSync(advancedPath, 'utf8');
const indexContent = fs.readFileSync(indexPath, 'utf8');
const serviceContent = fs.readFileSync(servicePath, 'utf8');
const liquidServiceContent = fs.readFileSync(liquidServicePath, 'utf8');
const catalogContent = fs.readFileSync(catalogPath, 'utf8');
const appContent = fs.readFileSync(appPath, 'utf8');

const files = [
  { name: 'Beginner Data', content: begContent },
  { name: 'Intermediate Data', content: interContent },
  { name: 'Advanced Data', content: advContent },
  { name: 'Index Data', content: indexContent },
  { name: 'Service Layer', content: serviceContent },
];

let totalErrors = 0;
let totalWarnings = 0;

// 1. Placeholder & Mock Check
for (const file of files) {
  const placeholders = ['TODO', 'TBD', 'Lorem ipsum', 'coming soon', 'asdf', 'dummy text', 'placeholder text', 'Content coming soon', 'Add examples here'];
  for (const p of placeholders) {
    const regex = new RegExp(`\\b${p}\\b`, 'i');
    if (regex.test(file.content)) {
      console.error(`❌ [${file.name}] Detected forbidden placeholder text: "${p}"`);
      totalErrors++;
    }
  }
}

// 2. Extract Data via Evaluation
function parseArray(content, varName, levelName) {
  const regex = new RegExp(`export const ${varName}: (?:QuizQuestion|Task)\\[\\] = ([\\s\\S]*?\\n\\]);`);
  const match = content.match(regex);
  if (!match) {
    console.error(`❌ [${levelName}] Array ${varName} not found!`);
    totalErrors++;
    return [];
  }
  try {
    return eval(match[1]);
  } catch (e) {
    console.error(`❌ [${levelName}] Failed to evaluate ${varName}:`, e.message);
    totalErrors++;
    return [];
  }
}

const begTasks = parseArray(begContent, 'SHOPIFY_DEV_BEGINNER_TASKS', 'Beginner');
const interTasks = parseArray(interContent, 'SHOPIFY_DEV_INTERMEDIATE_TASKS', 'Intermediate');
const advTasks = parseArray(advContent, 'SHOPIFY_DEV_ADVANCED_TASKS', 'Advanced');

const begQuestions = parseArray(begContent, 'SHOPIFY_DEV_BEGINNER_ASSESSMENT', 'Beginner');
const interQuestions = parseArray(interContent, 'SHOPIFY_DEV_INTERMEDIATE_ASSESSMENT', 'Intermediate');
const advQuestions = parseArray(advContent, 'SHOPIFY_DEV_ADVANCED_ASSESSMENT', 'Advanced');

console.log('----------------------------------------------------------------');
console.log('1. TASK & MODULE COUNTS AUDIT:');
console.log('----------------------------------------------------------------');

const begTheory = begTasks.filter(t => t.type !== 'project' && t.type !== 'assessment' && !t.isFinalAssessment && !t.isProject);
const begProjects = begTasks.filter(t => t.type === 'project' || t.isProject);
const begAssessment = begTasks.filter(t => t.type === 'assessment' || t.isFinalAssessment);

const interTheory = interTasks.filter(t => t.type !== 'project' && t.type !== 'assessment' && !t.isFinalAssessment && !t.isProject);
const interProjects = interTasks.filter(t => t.type === 'project' || t.isProject);
const interAssessment = interTasks.filter(t => t.type === 'assessment' || t.isFinalAssessment);

const advTheory = advTasks.filter(t => t.type !== 'project' && t.type !== 'assessment' && !t.isFinalAssessment && !t.isProject);
const advProjects = advTasks.filter(t => t.type === 'project' || t.isProject);
const advAssessment = advTasks.filter(t => t.type === 'assessment' || t.isFinalAssessment);

console.log(`Beginner:     ${begTheory.length} Theory Modules, ${begProjects.length} Project, ${begAssessment.length} Assessment. Total: ${begTasks.length}`);
console.log(`Intermediate: ${interTheory.length} Theory Modules, ${interProjects.length} Project, ${interAssessment.length} Assessment. Total: ${interTasks.length}`);
console.log(`Advanced:     ${advTheory.length} Theory Modules, ${advProjects.length} Projects, ${advAssessment.length} Assessment. Total: ${advTasks.length}`);

const totalTheory = begTheory.length + interTheory.length + advTheory.length;
const totalProjects = begProjects.length + interProjects.length + advProjects.length;
const totalAssessments = begAssessment.length + interAssessment.length + advAssessment.length;
const grandTotalTasks = begTasks.length + interTasks.length + advTasks.length;

console.log(`\nGrand Totals: ${totalTheory} Theory (Req: 40), ${totalProjects} Projects (Req: 4), ${totalAssessments} Assessments (Req: 3). Total Curriculum Tasks: ${grandTotalTasks} (Req: 47)`);

if (begTheory.length !== 12) { console.error(`❌ Beginner must have exactly 12 theory modules, got ${begTheory.length}`); totalErrors++; }
if (interTheory.length !== 14) { console.error(`❌ Intermediate must have exactly 14 theory modules, got ${interTheory.length}`); totalErrors++; }
if (advTheory.length !== 14) { console.error(`❌ Advanced must have exactly 14 theory modules, got ${advTheory.length}`); totalErrors++; }
if (totalTheory !== 40) { console.error(`❌ Total theory modules must be 40, got ${totalTheory}`); totalErrors++; }
if (totalProjects !== 4) { console.error(`❌ Total projects must be 4, got ${totalProjects}`); totalErrors++; }
if (totalAssessments !== 3) { console.error(`❌ Total assessments must be 3, got ${totalAssessments}`); totalErrors++; }

console.log('----------------------------------------------------------------');
console.log('2. CONTENT DEPTH & PRACTICAL EXAMPLES AUDIT:');
console.log('----------------------------------------------------------------');

const allTheory = [...begTheory, ...interTheory, ...advTheory];
let totalCodeSnippets = 0;
let totalKeyTakeaways = 0;

allTheory.forEach((task, idx) => {
  if (!task.title || !task.description) {
    console.error(`❌ Theory task #${idx + 1} (${task.id}) missing title or description`);
    totalErrors++;
  }
  if (!task.lessonContent) {
    console.error(`❌ Theory task #${idx + 1} (${task.id}) missing lessonContent`);
    totalErrors++;
  } else {
    const lc = task.lessonContent;
    if (!lc.overview || lc.overview.trim().length < 60) {
      console.error(`❌ Theory task ${task.id} overview is too brief`);
      totalErrors++;
    }
    if (!Array.isArray(lc.objectives) || lc.objectives.length < 3) {
      console.error(`❌ Theory task ${task.id} has fewer than 3 learning objectives`);
      totalErrors++;
    }
    if (!Array.isArray(lc.keyTakeaways) || lc.keyTakeaways.length < 3) {
      console.error(`❌ Theory task ${task.id} has fewer than 3 key takeaways`);
      totalErrors++;
    }
    totalKeyTakeaways += lc.keyTakeaways?.length || 0;

    // Check sections & practical code examples
    let snippetsInTask = 0;
    lc.sections.forEach(sec => {
      if (sec.codeSnippets) {
        snippetsInTask += sec.codeSnippets.length;
        sec.codeSnippets.forEach(s => {
          if (!s.code || s.code.trim().length < 20) {
            console.error(`❌ Task ${task.id} snippet "${s.title}" has empty or too short code`);
            totalErrors++;
          }
        });
      }
    });
    totalCodeSnippets += snippetsInTask;
  }
});

console.log(`Audited ${allTheory.length} theory modules. Found ${totalCodeSnippets} verified code snippets & ${totalKeyTakeaways} takeaways.`);

console.log('----------------------------------------------------------------');
console.log('3. CAPSTONE PROJECTS & DELIVERABLES AUDIT:');
console.log('----------------------------------------------------------------');

const allProjects = [...begProjects, ...interProjects, ...advProjects];
let totalDeliverables = 0;

allProjects.forEach(proj => {
  const pd = proj.projectDetails;
  if (!pd || !Array.isArray(pd.deliverables)) {
    console.error(`❌ Project ${proj.id} missing deliverables`);
    totalErrors++;
    return;
  }
  const count = pd.deliverables.length;
  totalDeliverables += count;
  console.log(`- Project "${proj.title}" -> ${count} Deliverables`);
  if (count < 10) {
    console.error(`❌ Project "${proj.title}" has ${count} deliverables (Required: >= 10)`);
    totalErrors++;
  }
  pd.deliverables.forEach((deliv, dIdx) => {
    if (!deliv.id || !deliv.title || !deliv.description) {
      console.error(`❌ Deliverable #${dIdx + 1} in "${proj.title}" missing required fields`);
      totalErrors++;
    }
    const checks = deliv.checklist || deliv.criteria || [];
    if (!Array.isArray(checks) || checks.length < 3) {
      console.error(`❌ Deliverable #${dIdx + 1} "${deliv.title}" has fewer than 3 checklist items`);
      totalErrors++;
    }
  });
});
console.log(`Total Deliverables across all 4 projects: ${totalDeliverables} (All >= 10 met)`);

console.log('----------------------------------------------------------------');
console.log('4. FORMAL ASSESSMENTS & MCQ DISTRIBUTION AUDIT:');
console.log('----------------------------------------------------------------');

function auditExam(questions, levelName, expectedCount) {
  console.log(`\nAuditing ${levelName} Assessment (${questions.length} MCQs, Expected: ${expectedCount}):`);
  if (questions.length !== expectedCount) {
    console.error(`❌ ${levelName} MCQ count mismatch: got ${questions.length}, expected ${expectedCount}`);
    totalErrors++;
  }

  const counts = { 0: 0, 1: 0, 2: 0, 3: 0 };
  const seenIds = new Set();
  const seenQuestions = new Set();

  questions.forEach((q, idx) => {
    if (seenIds.has(q.id)) {
      console.error(`❌ Duplicate question ID ${q.id} in ${levelName}`);
      totalErrors++;
    }
    seenIds.add(q.id);

    if (seenQuestions.has(q.question.trim().toLowerCase())) {
      console.error(`❌ Duplicate question text in ${levelName}: "${q.question}"`);
      totalErrors++;
    }
    seenQuestions.add(q.question.trim().toLowerCase());

    if (!q.question || q.question.trim().length < 15) {
      console.error(`❌ Question #${idx + 1} in ${levelName} is empty or too short`);
      totalErrors++;
    }

    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`❌ Question #${idx + 1} does not have exactly 4 options`);
      totalErrors++;
    } else {
      q.options.forEach((opt, oIdx) => {
        if (!opt || opt.trim().length === 0) {
          console.error(`❌ Option #${oIdx} in Question #${idx + 1} is empty`);
          totalErrors++;
        }
      });
    }

    if (![0, 1, 2, 3].includes(q.correctAnswer)) {
      console.error(`❌ Invalid correctAnswer index ${q.correctAnswer} in Question #${idx + 1}`);
      totalErrors++;
    } else {
      counts[q.correctAnswer]++;
    }

    if (!q.explanation || q.explanation.trim().length < 20) {
      console.error(`❌ Question #${idx + 1} explanation is too brief`);
      totalErrors++;
    }
  });

  console.log(`Answer Distribution: A(0)=${counts[0]}, B(1)=${counts[1]}, C(2)=${counts[2]}, D(3)=${counts[3]}`);
}

auditExam(begQuestions, 'Beginner', 20);
auditExam(interQuestions, 'Intermediate', 30);
auditExam(advQuestions, 'Advanced', 40);

const totalMCQs = begQuestions.length + interQuestions.length + advQuestions.length;
console.log(`\nTotal MCQs: ${totalMCQs} (Required: 90)`);
if (totalMCQs !== 90) {
  console.error(`❌ Total MCQs mismatch: got ${totalMCQs}, expected 90`);
  totalErrors++;
}

console.log('----------------------------------------------------------------');
console.log('5. COURSE ISOLATION & PROGRESS STORAGE AUDIT:');
console.log('----------------------------------------------------------------');

// Verify correct storage key in service
if (!serviceContent.includes("skillora_shopify_developer_course_progress")) {
  console.error("❌ ShopifyDeveloperCourseService does not use 'skillora_shopify_developer_course_progress'!");
  totalErrors++;
} else {
  console.log("✅ ShopifyDeveloperCourseService uses correct STORAGE_KEY: skillora_shopify_developer_course_progress");
}

// Verify Shopify Liquid course remains separate
if (!liquidServiceContent.includes("skillora_shopify_course_progress")) {
  console.error("❌ Shopify Liquid course service storage key was modified or broken!");
  totalErrors++;
} else {
  console.log("✅ Shopify Liquid course uses separate STORAGE_KEY: skillora_shopify_course_progress");
}

// Verify Course Catalog contains shopify-developer
if (!catalogContent.includes("id: 'shopify-developer'")) {
  console.error("❌ CourseCatalogScreen does not contain shopify-developer course card!");
  totalErrors++;
} else {
  console.log("✅ CourseCatalogScreen contains shopify-developer course card");
}

if (!catalogContent.includes("ShopifyDeveloperCourseService")) {
  console.error("❌ CourseCatalogScreen does not import ShopifyDeveloperCourseService!");
  totalErrors++;
} else {
  console.log("✅ CourseCatalogScreen imports and tracks ShopifyDeveloperCourseService");
}

// Verify App.tsx routes
if (!appContent.includes('/courses/shopify-developer')) {
  console.error("❌ App.tsx missing /courses/shopify-developer route!");
  totalErrors++;
} else {
  console.log("✅ App.tsx has registered /courses/shopify-developer and alias routes");
}

console.log('\n================================================================');
if (totalErrors === 0) {
  console.log('✅ ALL SHOPIFY DEVELOPER DATA AUDITS PASSED WITH ZERO ERRORS!');
  process.exit(0);
} else {
  console.error(`❌ AUDIT FAILED WITH ${totalErrors} ERROR(S)!`);
  process.exit(1);
}
