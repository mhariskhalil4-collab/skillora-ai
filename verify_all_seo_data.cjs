const path = require('path');

// We can require or evaluate the typescript data files using ts-node or transpilation
const ts = require('typescript');
const fs = require('fs');

function loadTsModule(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const transpiled = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;
  const mod = { exports: {} };
  const fn = new Function('module', 'exports', 'require', transpiled);
  fn(mod, mod.exports, require);
  return mod.exports;
}

const beg = loadTsModule('src/features/roadmap/data/seo/seoBeginner.data.ts');
const int = loadTsModule('src/features/roadmap/data/seo/seoIntermediate.data.ts');
const adv = loadTsModule('src/features/roadmap/data/seo/seoAdvanced.data.ts');

console.log('--- BEGINNER ---');
const begTasks = beg.SEO_BEGINNER_TASKS;
const begTheory = begTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const begProjects = begTasks.filter(t => t.isProject);
const begAssessment = begTasks.filter(t => t.isFinalAssessment);
const begMcqs = beg.SEO_BEGINNER_FINAL_ASSESSMENT;
console.log('Theory modules:', begTheory.length);
console.log('Projects:', begProjects.length);
console.log('Assessments:', begAssessment.length);
console.log('Final MCQs:', begMcqs.length);

console.log('--- INTERMEDIATE ---');
const intTasks = int.SEO_INTERMEDIATE_TASKS;
const intTheory = intTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const intProjects = intTasks.filter(t => t.isProject);
const intAssessment = intTasks.filter(t => t.isFinalAssessment);
const intMcqs = int.SEO_INTERMEDIATE_FINAL_ASSESSMENT;
console.log('Theory modules:', intTheory.length);
console.log('Projects:', intProjects.length);
console.log('Assessments:', intAssessment.length);
console.log('Final MCQs:', intMcqs.length);

console.log('--- ADVANCED ---');
const advTasks = adv.SEO_ADVANCED_TASKS;
const advTheory = advTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const advProjects = advTasks.filter(t => t.isProject);
const advAssessment = advTasks.filter(t => t.isFinalAssessment);
const advMcqs = adv.SEO_ADVANCED_FINAL_ASSESSMENT;
console.log('Theory modules:', advTheory.length);
console.log('Projects:', advProjects.length);
console.log('Assessments:', advAssessment.length);
console.log('Final MCQs:', advMcqs.length);

console.log('--- TOTALS ---');
const totalTheory = begTheory.length + intTheory.length + advTheory.length;
const totalProjects = begProjects.length + intProjects.length + advProjects.length;
const totalAssessments = begAssessment.length + intAssessment.length + advAssessment.length;
const totalMcqs = begMcqs.length + intMcqs.length + advMcqs.length;
console.log('Total Theory:', totalTheory, '(Expected: 40)');
console.log('Total Projects:', totalProjects, '(Expected: 4)');
console.log('Total Assessments:', totalAssessments, '(Expected: 3)');
console.log('Total MCQs:', totalMcqs, '(Expected: 90)');

// Validate task IDs uniqueness
const allTaskIds = [...begTasks, ...intTasks, ...advTasks].map(t => t.id);
const duplicateTaskIds = allTaskIds.filter((id, i) => allTaskIds.indexOf(id) !== i);
console.log('Duplicate Task IDs:', duplicateTaskIds.length === 0 ? 'None (PASS)' : duplicateTaskIds);

// Validate MCQ IDs uniqueness and structure
const allMcqs = [...begMcqs, ...intMcqs, ...advMcqs];
const duplicateMcqIds = allMcqs.map(q => q.id).filter((id, i, arr) => arr.indexOf(id) !== i);
console.log('Duplicate MCQ IDs:', duplicateMcqIds.length === 0 ? 'None (PASS)' : duplicateMcqIds);

let invalidMcqCount = 0;
allMcqs.forEach((q, idx) => {
  if (!q.question || q.question.trim().length === 0) {
    console.error(`MCQ ${idx} missing question`);
    invalidMcqCount++;
  }
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    console.error(`MCQ ${q.id} does not have exactly 4 options (has ${q.options?.length})`);
    invalidMcqCount++;
  }
  if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
    console.error(`MCQ ${q.id} invalid correctAnswer: ${q.correctAnswer}`);
    invalidMcqCount++;
  }
  if (!q.explanation || q.explanation.trim().length === 0) {
    console.error(`MCQ ${q.id} missing explanation`);
    invalidMcqCount++;
  }
});
console.log('Invalid MCQs:', invalidMcqCount === 0 ? 'None (PASS)' : invalidMcqCount);

// Validate practical examples count on every theory module
const allTheory = [...begTheory, ...intTheory, ...advTheory];
let theoryIssues = 0;
allTheory.forEach(m => {
  const snippets = m.lessonContent?.sections?.flatMap(s => s.codeSnippets || []) || [];
  if (snippets.length < 3) {
    console.warn(`Module ${m.id} (${m.title}) has ${snippets.length} code snippets (expected at least 3)`);
    theoryIssues++;
  }
  if (!m.lessonContent?.overview || m.lessonContent.overview.length < 50) {
    console.warn(`Module ${m.id} has short overview`);
    theoryIssues++;
  }
});
console.log('Theory modules with <3 practical examples or short content:', theoryIssues === 0 ? 'None (PASS)' : theoryIssues);

// Check project structure
const allProjects = [...begProjects, ...intProjects, ...advProjects];
let projectIssues = 0;
allProjects.forEach(p => {
  if (!p.title || !p.description || !p.lessonContent?.overview || !p.isProject) {
    console.error(`Project ${p.id} missing title/description/overview/isProject`);
    projectIssues++;
  }
});
console.log('Project issues:', projectIssues === 0 ? 'None (PASS)' : projectIssues);
