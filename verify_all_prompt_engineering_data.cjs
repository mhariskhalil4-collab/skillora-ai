const fs = require('fs');
const path = require('path');

let totalErrors = 0;

function reportError(msg) {
  console.error('❌ ERROR:', msg);
  totalErrors++;
}

function reportPass(msg) {
  console.log('✅ PASS:', msg);
}

// 1. Check Data Files Existence
const begFile = path.join(__dirname, 'src', 'features', 'roadmap', 'data', 'prompt-engineering', 'promptEngineeringBeginner.data.ts');
const intFile = path.join(__dirname, 'src', 'features', 'roadmap', 'data', 'prompt-engineering', 'promptEngineeringIntermediate.data.ts');
const advFile = path.join(__dirname, 'src', 'features', 'roadmap', 'data', 'prompt-engineering', 'promptEngineeringAdvanced.data.ts');
const indexFile = path.join(__dirname, 'src', 'features', 'roadmap', 'data', 'prompt-engineering', 'index.ts');
const serviceFile = path.join(__dirname, 'src', 'features', 'roadmap', 'services', 'promptEngineeringCourse.service.ts');

[begFile, intFile, advFile, indexFile, serviceFile].forEach(f => {
  if (!fs.existsSync(f)) {
    reportError(`File missing: ${f}`);
  } else {
    reportPass(`File exists: ${path.basename(f)}`);
  }
});

// Helper to extract exported arrays
function extractArray(content, varName) {
  const regex = new RegExp(`export const ${varName}: (?:Task|QuizQuestion)\\[\\] = ([\\s\\S]*?);\\n\\nexport const`, 'm');
  const match = content.match(regex);
  if (match) {
    return JSON.parse(match[1]);
  }
  const regexEnd = new RegExp(`export const ${varName}: (?:Task|QuizQuestion)\\[\\] = ([\\s\\S]*?);\\s*$`, 'm');
  const matchEnd = content.match(regexEnd);
  if (matchEnd) {
    return JSON.parse(matchEnd[1]);
  }
  throw new Error(`Failed to extract ${varName}`);
}

const begContent = fs.readFileSync(begFile, 'utf8');
const intContent = fs.readFileSync(intFile, 'utf8');
const advContent = fs.readFileSync(advFile, 'utf8');
const serviceContent = fs.readFileSync(serviceFile, 'utf8');

const begAssessment = extractArray(begContent, 'PE_BEGINNER_FINAL_ASSESSMENT');
const begTasks = extractArray(begContent, 'PE_BEGINNER_TASKS');
const intAssessment = extractArray(intContent, 'PE_INTERMEDIATE_FINAL_ASSESSMENT');
const intTasks = extractArray(intContent, 'PE_INTERMEDIATE_TASKS');
const advAssessment = extractArray(advContent, 'PE_ADVANCED_FINAL_ASSESSMENT');
const advTasks = extractArray(advContent, 'PE_ADVANCED_TASKS');

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
console.log(`Beginner Final MCQs: ${begAssessment.length} (Expected: 20)`);

console.log(`Intermediate Theory: ${intTheory.length} (Expected: 14)`);
console.log(`Intermediate Projects: ${intProjects.length} (Expected: 1)`);
console.log(`Intermediate Final Assessments: ${intAssessments.length} (Expected: 1)`);
console.log(`Intermediate Final MCQs: ${intAssessment.length} (Expected: 30)`);

console.log(`Advanced Theory: ${advTheory.length} (Expected: 14)`);
console.log(`Advanced Projects: ${advProjects.length} (Expected: 2)`);
console.log(`Advanced Final Assessments: ${advAssessments.length} (Expected: 1)`);
console.log(`Advanced Final MCQs: ${advAssessment.length} (Expected: 40)`);

const totalTheory = begTheory.length + intTheory.length + advTheory.length;
const totalProjects = begProjects.length + intProjects.length + advProjects.length;
const totalAssessments = begAssessments.length + intAssessments.length + advAssessments.length;
const totalMCQs = begAssessment.length + intAssessment.length + advAssessment.length;
const totalTaskNodes = begTasks.length + intTasks.length + advTasks.length;

if (totalTheory === 40) reportPass('Total Theory Modules = 40'); else reportError(`Total Theory was ${totalTheory}, expected 40`);
if (totalProjects === 4) reportPass('Total Projects = 4'); else reportError(`Total Projects was ${totalProjects}, expected 4`);
if (totalAssessments === 3) reportPass('Total Assessments = 3'); else reportError(`Total Assessments was ${totalAssessments}, expected 3`);
if (totalMCQs === 90) reportPass('Total MCQs = 90'); else reportError(`Total MCQs was ${totalMCQs}, expected 90`);
if (totalTaskNodes === 47) reportPass('Total Task Nodes = 47'); else reportError(`Total Task Nodes was ${totalTaskNodes}, expected 47`);

console.log('\n========================================');
console.log('2. UNIQUE TASK IDS AUDIT');
console.log('========================================');
const allTasks = [...begTasks, ...intTasks, ...advTasks];
const taskIds = new Set();
let duplicateTaskIds = 0;
for (const t of allTasks) {
  if (taskIds.has(t.id)) {
    reportError(`Duplicate Task ID: ${t.id}`);
    duplicateTaskIds++;
  }
  taskIds.add(t.id);
}
if (duplicateTaskIds === 0) reportPass(`All ${allTasks.length} task IDs are strictly unique.`);

console.log('\n========================================');
console.log('3. THEORY CONTENT & SNIPPET DEPTH AUDIT');
console.log('========================================');
const allTheory = [...begTheory, ...intTheory, ...advTheory];
let contentDefects = 0;

allTheory.forEach(t => {
  const lc = t.lessonContent;
  if (!lc) {
    reportError(`Task ${t.id} missing lessonContent`);
    contentDefects++;
    return;
  }
  if (!lc.overview || lc.overview.length < 100) {
    reportError(`Task ${t.id} overview too brief`);
    contentDefects++;
  }
  if (!lc.objectives || lc.objectives.length < 3) {
    reportError(`Task ${t.id} insufficient objectives`);
    contentDefects++;
  }
  if (!lc.sections || lc.sections.length < 3) {
    reportError(`Task ${t.id} has fewer than 3 sections`);
    contentDefects++;
  }

  // Count code snippets across all sections
  let snippetCount = 0;
  let lineByLineCount = 0;
  lc.sections.forEach(s => {
    if (s.codeSnippets) {
      snippetCount += s.codeSnippets.length;
      s.codeSnippets.forEach(cs => {
        if (cs.lineByLine && cs.lineByLine.length > 0) {
          lineByLineCount++;
        }
      });
    }
  });

  if (snippetCount < 3) {
    reportError(`Task ${t.id} has only ${snippetCount} codeSnippets (Expected >= 3)`);
    contentDefects++;
  }
  if (lineByLineCount < 3) {
    reportError(`Task ${t.id} has only ${lineByLineCount} lineByLine breakdowns (Expected >= 3)`);
    contentDefects++;
  }

  // Check for placeholder text
  const serialized = JSON.stringify(t);
  if (/coming soon|will be added later|todo|placeholder/i.test(serialized)) {
    reportError(`Task ${t.id} contains placeholder/filler text`);
    contentDefects++;
  }
});

if (contentDefects === 0) reportPass('All 40 theory modules passed strict content depth and snippet validation (0 defects).');

console.log('\n========================================');
console.log('4. PROJECTS MULTI-STEP STRUCTURE AUDIT');
console.log('========================================');
const allProjects = [...begProjects, ...intProjects, ...advProjects];
let projectDefects = 0;

allProjects.forEach(p => {
  if (!p.projectDetails) {
    reportError(`Project ${p.id} missing projectDetails`);
    projectDefects++;
    return;
  }
  const pd = p.projectDetails;
  if (!pd.scenario || pd.scenario.length < 50) {
    reportError(`Project ${p.id} scenario too brief`);
    projectDefects++;
  }
  if (!pd.deliverables || pd.deliverables.length < 8) {
    reportError(`Project ${p.id} has only ${pd.deliverables?.length} deliverables (Expected >= 8)`);
    projectDefects++;
  }
  if (!pd.blueprint || pd.blueprint.length < 50) {
    reportError(`Project ${p.id} blueprint too brief`);
    projectDefects++;
  }
  if (!pd.evaluationRubric || pd.evaluationRubric.length < 3) {
    reportError(`Project ${p.id} rubric insufficient`);
    projectDefects++;
  }
});

if (projectDefects === 0) reportPass('All 4 projects contain rich multi-step deliverables and blueprints (0 defects).');

console.log('\n========================================');
console.log('5. MCQS INTEGRITY & BALANCED DISTRIBUTION AUDIT');
console.log('========================================');
const allMCQs = [...begAssessment, ...intAssessment, ...advAssessment];
const questionTexts = new Set();
const answerCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };
let mcqDefects = 0;

allMCQs.forEach(q => {
  if (questionTexts.has(q.question)) {
    reportError(`Duplicate Question text: "${q.question}"`);
    mcqDefects++;
  }
  questionTexts.add(q.question);

  if (!q.options || q.options.length !== 4) {
    reportError(`Question ${q.id} does not have exactly 4 options`);
    mcqDefects++;
  }

  // Check unique options
  const optSet = new Set(q.options);
  if (optSet.size !== 4) {
    reportError(`Question ${q.id} has duplicate options`);
    mcqDefects++;
  }

  if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
    reportError(`Question ${q.id} has invalid correctAnswer index: ${q.correctAnswer}`);
    mcqDefects++;
  } else {
    answerCounts[q.correctAnswer] = (answerCounts[q.correctAnswer] || 0) + 1;
  }

  if (!q.explanation || q.explanation.trim().length < 15) {
    reportError(`Question ${q.id} has missing or shallow explanation`);
    mcqDefects++;
  }
});

console.log('Answer distribution across 90 MCQs:', answerCounts);
if (mcqDefects === 0) reportPass('All 90 MCQs are valid with 4 unique options, valid answer index, unique question text, and full explanations.');

console.log('\n========================================');
console.log('6. PERSISTENCE KEY & SECURITY AUDIT');
console.log('========================================');
const keyMatch = serviceContent.match(/STORAGE_KEY\s*=\s*['"]([^'"]+)['"]/);
if (!keyMatch || keyMatch[1] !== 'skillora_prompt_engineering_course_progress') {
  reportError(`Invalid persistence key in service: ${keyMatch ? keyMatch[1] : 'NOT FOUND'}`);
} else {
  reportPass(`Service persistence key is strictly: "${keyMatch[1]}"`);
}

console.log('\n========================================');
console.log(`TOTAL AUDIT ERRORS: ${totalErrors}`);
console.log('========================================');

if (totalErrors === 0) {
  console.log('✨ ALL PROMPT ENGINEERING DATA CHECKS PASSED PERFECTLY!\n');
  process.exit(0);
} else {
  console.error(`💥 PROMPT ENGINEERING DATA AUDIT FAILED WITH ${totalErrors} ERRORS.\n`);
  process.exit(1);
}
