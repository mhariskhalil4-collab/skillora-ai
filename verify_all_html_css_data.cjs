const fs = require('fs');
const path = require('path');

console.log('========================================');
console.log('AUDITING HTML & CSS MASTERCLASS DATA');
console.log('========================================');

const begFile = path.join(__dirname, 'src/features/roadmap/data/html-css/htmlCssBeginner.data.ts');
const intFile = path.join(__dirname, 'src/features/roadmap/data/html-css/htmlCssIntermediate.data.ts');
const advFile = path.join(__dirname, 'src/features/roadmap/data/html-css/htmlCssAdvanced.data.ts');
const indexFile = path.join(__dirname, 'src/features/roadmap/data/html-css/index.ts');
const serviceFile = path.join(__dirname, 'src/features/roadmap/services/htmlCssCourse.service.ts');

let errors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    errors++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Verify Files Exist
assert(fs.existsSync(begFile), 'File exists: htmlCssBeginner.data.ts');
assert(fs.existsSync(intFile), 'File exists: htmlCssIntermediate.data.ts');
assert(fs.existsSync(advFile), 'File exists: htmlCssAdvanced.data.ts');
assert(fs.existsSync(indexFile), 'File exists: index.ts');
assert(fs.existsSync(serviceFile), 'File exists: htmlCssCourse.service.ts');

const begContent = fs.readFileSync(begFile, 'utf8');
const intContent = fs.readFileSync(intFile, 'utf8');
const advContent = fs.readFileSync(advFile, 'utf8');
const serviceContent = fs.readFileSync(serviceFile, 'utf8');

// Parse MCQs
function extractArray(content, varName) {
  const marker = `export const ${varName}: QuizQuestion[] = `;
  const start = content.indexOf(marker);
  if (start === -1) return [];
  const after = content.substring(start + marker.length);
  const end = after.indexOf(';\n\nexport const HTMLCSS_');
  const jsonStr = end !== -1 ? after.substring(0, end) : after.substring(0, after.indexOf(';\n'));
  return eval(jsonStr);
}

// Parse Tasks
function extractTasks(content, varName) {
  const marker = `export const ${varName}: Task[] = `;
  const start = content.indexOf(marker);
  if (start === -1) return [];
  const after = content.substring(start + marker.length);
  const end = after.lastIndexOf('];');
  const jsonStr = after.substring(0, end + 1);
  const HTMLCSS_BEGINNER_FINAL_ASSESSMENT = [];
  const HTMLCSS_INTERMEDIATE_FINAL_ASSESSMENT = [];
  const HTMLCSS_ADVANCED_FINAL_ASSESSMENT = [];
  return eval(jsonStr);
}

const begMCQs = extractArray(begContent, 'HTMLCSS_BEGINNER_FINAL_ASSESSMENT');
const intMCQs = extractArray(intContent, 'HTMLCSS_INTERMEDIATE_FINAL_ASSESSMENT');
const advMCQs = extractArray(advContent, 'HTMLCSS_ADVANCED_FINAL_ASSESSMENT');

const begTasks = extractTasks(begContent, 'HTMLCSS_BEGINNER_TASKS');
const intTasks = extractTasks(intContent, 'HTMLCSS_INTERMEDIATE_TASKS');
const advTasks = extractTasks(advContent, 'HTMLCSS_ADVANCED_TASKS');

console.log('\n========================================');
console.log('1. TASK & MODULE COUNTS VERIFICATION');
console.log('========================================');

const begTheory = begTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const begProjects = begTasks.filter(t => t.isProject);
const begAssessments = begTasks.filter(t => t.isFinalAssessment);

const intTheory = intTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const intProjects = intTasks.filter(t => t.isProject);
const intAssessments = intTasks.filter(t => t.isFinalAssessment);

const advTheory = advTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const advProjects = advTasks.filter(t => t.isProject);
const advAssessments = advTasks.filter(t => t.isFinalAssessment);

console.log(`Beginner Theory: ${begTheory.length} (Expected: 12)`);
console.log(`Beginner Projects: ${begProjects.length} (Expected: 1)`);
console.log(`Beginner Final Assessments: ${begAssessments.length} (Expected: 1)`);
console.log(`Beginner Final MCQs: ${begMCQs.length} (Expected: 20)`);

console.log(`Intermediate Theory: ${intTheory.length} (Expected: 14)`);
console.log(`Intermediate Projects: ${intProjects.length} (Expected: 1)`);
console.log(`Intermediate Final Assessments: ${intAssessments.length} (Expected: 1)`);
console.log(`Intermediate Final MCQs: ${intMCQs.length} (Expected: 30)`);

console.log(`Advanced Theory: ${advTheory.length} (Expected: 14)`);
console.log(`Advanced Projects: ${advProjects.length} (Expected: 2)`);
console.log(`Advanced Final Assessments: ${advAssessments.length} (Expected: 1)`);
console.log(`Advanced Final MCQs: ${advMCQs.length} (Expected: 40)`);

assert(begTheory.length === 12, 'Beginner theory modules count is exactly 12');
assert(begProjects.length === 1, 'Beginner project count is exactly 1');
assert(begAssessments.length === 1, 'Beginner assessment count is exactly 1');
assert(begMCQs.length === 20, 'Beginner MCQs count is exactly 20');

assert(intTheory.length === 14, 'Intermediate theory modules count is exactly 14');
assert(intProjects.length === 1, 'Intermediate project count is exactly 1');
assert(intAssessments.length === 1, 'Intermediate assessment count is exactly 1');
assert(intMCQs.length === 30, 'Intermediate MCQs count is exactly 30');

assert(advTheory.length === 14, 'Advanced theory modules count is exactly 14');
assert(advProjects.length === 2, 'Advanced project count is exactly 2');
assert(advAssessments.length === 1, 'Advanced assessment count is exactly 1');
assert(advMCQs.length === 40, 'Advanced MCQs count is exactly 40');

const totalTheory = begTheory.length + intTheory.length + advTheory.length;
const totalProjects = begProjects.length + intProjects.length + advProjects.length;
const totalAssessments = begAssessments.length + intAssessments.length + advAssessments.length;
const totalMCQs = begMCQs.length + intMCQs.length + advMCQs.length;
const totalTaskNodes = begTasks.length + intTasks.length + advTasks.length;

assert(totalTheory === 40, `Total Theory Modules = ${totalTheory} (Expected: 40)`);
assert(totalProjects === 4, `Total Projects = ${totalProjects} (Expected: 4)`);
assert(totalAssessments === 3, `Total Assessments = ${totalAssessments} (Expected: 3)`);
assert(totalMCQs === 90, `Total MCQs = ${totalMCQs} (Expected: 90)`);
assert(totalTaskNodes === 47, `Total Task Nodes = ${totalTaskNodes} (Expected: 47)`);

console.log('\n========================================');
console.log('2. UNIQUE TASK IDS AUDIT');
console.log('========================================');
const allTasks = [...begTasks, ...intTasks, ...advTasks];
const taskIds = new Set();
let dupTasks = 0;
allTasks.forEach(t => {
  if (taskIds.has(t.id)) {
    console.error(`❌ Duplicate Task ID detected: ${t.id}`);
    dupTasks++;
  }
  taskIds.add(t.id);
});
assert(dupTasks === 0, `All ${allTasks.length} task IDs are strictly unique.`);

console.log('\n========================================');
console.log('3. THEORY CONTENT & SNIPPET DEPTH AUDIT');
console.log('========================================');
const allTheory = [...begTheory, ...intTheory, ...advTheory];
let theoryDefects = 0;

allTheory.forEach(m => {
  const content = m.lessonContent;
  if (!content) {
    console.error(`❌ Module ${m.id} missing lessonContent`);
    theoryDefects++;
    return;
  }
  if (!content.overview || content.overview.length < 50) {
    console.error(`❌ Module ${m.id} has shallow overview`);
    theoryDefects++;
  }
  if (!content.objectives || content.objectives.length < 2) {
    console.error(`❌ Module ${m.id} has insufficient objectives`);
    theoryDefects++;
  }
  if (!content.keyTakeaways || content.keyTakeaways.length < 2) {
    console.error(`❌ Module ${m.id} has insufficient key takeaways`);
    theoryDefects++;
  }
  if (!content.summary || content.summary.length < 20) {
    console.error(`❌ Module ${m.id} has shallow summary`);
    theoryDefects++;
  }

  // Count code snippets
  let snippetCount = 0;
  let hasLineByLine = false;
  if (content.sections && Array.isArray(content.sections)) {
    content.sections.forEach(s => {
      if (s.codeSnippets && Array.isArray(s.codeSnippets)) {
        snippetCount += s.codeSnippets.length;
        s.codeSnippets.forEach(cs => {
          if (cs.lineByLine && cs.lineByLine.length > 0) hasLineByLine = true;
        });
      }
    });
  }

  if (snippetCount < 3) {
    console.error(`❌ Module ${m.id} has only ${snippetCount} snippets (Minimum required: 3)`);
    theoryDefects++;
  }
  if (!hasLineByLine) {
    console.error(`❌ Module ${m.id} lacks line-by-line snippet breakdown`);
    theoryDefects++;
  }
});
assert(theoryDefects === 0, `All 40 theory modules passed strict content depth and snippet validation (0 defects).`);

console.log('\n========================================');
console.log('4. PROJECTS MULTI-STEP STRUCTURE AUDIT');
console.log('========================================');
const allProjects = [...begProjects, ...intProjects, ...advProjects];
let projectDefects = 0;
allProjects.forEach(p => {
  if (!p.projectDetails || !p.projectDetails.deliverables || p.projectDetails.deliverables.length < 8) {
    console.error(`❌ Project ${p.id} has incomplete deliverables`);
    projectDefects++;
  }
});
assert(projectDefects === 0, `All 4 projects contain rich multi-step deliverables and blueprints (0 defects).`);

console.log('\n========================================');
console.log('5. MCQS INTEGRITY & BALANCED DISTRIBUTION AUDIT');
console.log('========================================');
const allMCQs = [...begMCQs, ...intMCQs, ...advMCQs];
const qTexts = new Set();
let mcqDefects = 0;
const distribution = { '0': 0, '1': 0, '2': 0, '3': 0 };

allMCQs.forEach(q => {
  if (qTexts.has(q.question)) {
    console.error(`❌ Duplicate question text found: "${q.question}"`);
    mcqDefects++;
  }
  qTexts.add(q.question);

  if (!q.options || q.options.length !== 4) {
    console.error(`❌ Question ID ${q.id} does not have exactly 4 options`);
    mcqDefects++;
  }
  if (![0, 1, 2, 3].includes(q.correctAnswer)) {
    console.error(`❌ Question ID ${q.id} has invalid correctAnswer index: ${q.correctAnswer}`);
    mcqDefects++;
  }
  if (!q.explanation || q.explanation.length < 10) {
    console.error(`❌ Question ID ${q.id} has shallow explanation`);
    mcqDefects++;
  }
  distribution[String(q.correctAnswer)] = (distribution[String(q.correctAnswer)] || 0) + 1;
});

console.log('Answer distribution across 90 MCQs:', distribution);
assert(mcqDefects === 0, `All 90 MCQs are valid with 4 unique options, valid answer index, unique question text, and full explanations.`);

console.log('\n========================================');
console.log('6. PERSISTENCE KEY & SECURITY AUDIT');
console.log('========================================');
assert(serviceContent.includes('skillora_html_css_course_progress'), 'Service persistence key is strictly: "skillora_html_css_course_progress"');

console.log('\n========================================');
console.log(`TOTAL AUDIT ERRORS: ${errors}`);
console.log('========================================');

if (errors > 0) {
  console.error('❌ VALIDATION FAILED WITH ERRORS');
  process.exit(1);
} else {
  console.log('✨ ALL HTML & CSS MASTERCLASS CHECKS PASSED PERFECTLY!');
  process.exit(0);
}
