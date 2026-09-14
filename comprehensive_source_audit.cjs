const ts = require('typescript');
const fs = require('fs');
const path = require('path');

const loadedModules = {};

function loadTsModule(filePath) {
  const absPath = path.resolve(filePath);
  if (loadedModules[absPath]) return loadedModules[absPath];

  const code = fs.readFileSync(absPath, 'utf8');
  const transpiled = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;
  const mod = { exports: {} };
  const customRequire = (reqPath) => {
    if (reqPath.startsWith('.')) {
      const targetPath = path.resolve(path.dirname(absPath), reqPath);
      // Try with .ts
      if (fs.existsSync(targetPath + '.ts')) return loadTsModule(targetPath + '.ts');
      if (fs.existsSync(targetPath + '.tsx')) return loadTsModule(targetPath + '.tsx');
      if (fs.existsSync(targetPath)) return loadTsModule(targetPath);
    }
    try {
      return require(reqPath);
    } catch {
      return {};
    }
  };
  const fn = new Function('module', 'exports', 'require', transpiled);
  fn(mod, mod.exports, customRequire);
  loadedModules[absPath] = mod.exports;
  return mod.exports;
}

const beg = loadTsModule('src/features/roadmap/data/seo/seoBeginner.data.ts');
const int = loadTsModule('src/features/roadmap/data/seo/seoIntermediate.data.ts');
const adv = loadTsModule('src/features/roadmap/data/seo/seoAdvanced.data.ts');
const index = loadTsModule('src/features/roadmap/data/seo/index.ts');

console.log('========================================');
console.log('1. TASK & MODULE COUNTS VERIFICATION');
console.log('========================================');

const begTasks = beg.SEO_BEGINNER_TASKS;
const begTheory = begTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const begProjects = begTasks.filter(t => t.isProject);
const begAssessments = begTasks.filter(t => t.isFinalAssessment);
const begMcqs = beg.SEO_BEGINNER_FINAL_ASSESSMENT;

console.log(`Beginner Theory Modules: ${begTheory.length} (Expected: 12)`);
console.log(`Beginner Projects: ${begProjects.length} (Expected: 1)`);
console.log(`Beginner Assessments: ${begAssessments.length} (Expected: 1)`);
console.log(`Beginner Final MCQs: ${begMcqs.length} (Expected: 20)`);

const intTasks = int.SEO_INTERMEDIATE_TASKS;
const intTheory = intTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const intProjects = intTasks.filter(t => t.isProject);
const intAssessments = intTasks.filter(t => t.isFinalAssessment);
const intMcqs = int.SEO_INTERMEDIATE_FINAL_ASSESSMENT;

console.log(`Intermediate Theory Modules: ${intTheory.length} (Expected: 14)`);
console.log(`Intermediate Projects: ${intProjects.length} (Expected: 1)`);
console.log(`Intermediate Assessments: ${intAssessments.length} (Expected: 1)`);
console.log(`Intermediate Final MCQs: ${intMcqs.length} (Expected: 30)`);

const advTasks = adv.SEO_ADVANCED_TASKS;
const advTheory = advTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const advProjects = advTasks.filter(t => t.isProject);
const advAssessments = advTasks.filter(t => t.isFinalAssessment);
const advMcqs = adv.SEO_ADVANCED_FINAL_ASSESSMENT;

console.log(`Advanced Theory Modules: ${advTheory.length} (Expected: 14)`);
console.log(`Advanced Projects: ${advProjects.length} (Expected: 2)`);
console.log(`Advanced Assessments: ${advAssessments.length} (Expected: 1)`);
console.log(`Advanced Final MCQs: ${advMcqs.length} (Expected: 40)`);

const totalTheory = begTheory.length + intTheory.length + advTheory.length;
const totalProjects = begProjects.length + intProjects.length + advProjects.length;
const totalAssessments = begAssessments.length + intAssessments.length + advAssessments.length;
const totalMcqs = begMcqs.length + intMcqs.length + advMcqs.length;

console.log(`TOTAL Theory Modules: ${totalTheory} (Expected: 40) -> ${totalTheory === 40 ? 'PASS' : 'FAIL'}`);
console.log(`TOTAL Projects: ${totalProjects} (Expected: 4) -> ${totalProjects === 4 ? 'PASS' : 'FAIL'}`);
console.log(`TOTAL Assessments: ${totalAssessments} (Expected: 3) -> ${totalAssessments === 3 ? 'PASS' : 'FAIL'}`);
console.log(`TOTAL Final MCQs: ${totalMcqs} (Expected: 90) -> ${totalMcqs === 90 ? 'PASS' : 'FAIL'}`);

console.log('\n========================================');
console.log('2. THRESHOLDS & INITIAL GATING STATE');
console.log('========================================');

const levels = index.INITIAL_SEO_LEVELS;
console.log(`Beginner requiredScore: ${levels.beginner.requiredScore} (Expected: 15) -> ${levels.beginner.requiredScore === 15 ? 'PASS' : 'FAIL'}`);
console.log(`Beginner initial status: ${levels.beginner.status} (Expected: in_progress) -> ${levels.beginner.status === 'in_progress' ? 'PASS' : 'FAIL'}`);
console.log(`Intermediate requiredScore: ${levels.intermediate.requiredScore} (Expected: 25) -> ${levels.intermediate.requiredScore === 25 ? 'PASS' : 'FAIL'}`);
console.log(`Intermediate initial status: ${levels.intermediate.status} (Expected: locked) -> ${levels.intermediate.status === 'locked' ? 'PASS' : 'FAIL'}`);
console.log(`Advanced requiredScore: ${levels.advanced.requiredScore} (Expected: 35) -> ${levels.advanced.requiredScore === 35 ? 'PASS' : 'FAIL'}`);
console.log(`Advanced initial status: ${levels.advanced.status} (Expected: locked) -> ${levels.advanced.status === 'locked' ? 'PASS' : 'FAIL'}`);

console.log('\n========================================');
console.log('3. THEORY MODULES CONTENT & SNIPPETS DEPTH');
console.log('========================================');

const allTheory = [...begTheory, ...intTheory, ...advTheory];
let theoryDefects = [];

allTheory.forEach((mod) => {
  const lc = mod.lessonContent;
  if (!lc) {
    theoryDefects.push(`Module ${mod.id}: Missing lessonContent`);
    return;
  }
  if (!lc.overview || lc.overview.length < 60) {
    theoryDefects.push(`Module ${mod.id}: Short overview (${lc.overview?.length} chars)`);
  }
  if (!Array.isArray(lc.objectives) || lc.objectives.length < 2) {
    theoryDefects.push(`Module ${mod.id}: Objectives count < 2 (${lc.objectives?.length})`);
  }
  if (!Array.isArray(lc.keyTakeaways) || lc.keyTakeaways.length < 2) {
    theoryDefects.push(`Module ${mod.id}: KeyTakeaways count < 2 (${lc.keyTakeaways?.length})`);
  }
  if (!lc.summary || lc.summary.length < 30) {
    theoryDefects.push(`Module ${mod.id}: Short summary (${lc.summary?.length} chars)`);
  }
  if (!Array.isArray(lc.practiceExercises) || lc.practiceExercises.length < 1) {
    theoryDefects.push(`Module ${mod.id}: PracticeExercises missing`);
  }
  
  const snippets = lc.sections?.flatMap(s => s.codeSnippets || []) || [];
  if (snippets.length < 3) {
    theoryDefects.push(`Module ${mod.id}: Has ${snippets.length} code snippets (Required: >= 3)`);
  }

  // Check each snippet structure
  snippets.forEach((snip, sIdx) => {
    if (!snip.code || snip.code.trim().length === 0) {
      theoryDefects.push(`Module ${mod.id} Snippet ${sIdx}: Empty code`);
    }
    if (!snip.explanation || snip.explanation.trim().length === 0) {
      theoryDefects.push(`Module ${mod.id} Snippet ${sIdx}: Empty explanation`);
    }
    if (!Array.isArray(snip.lineByLine) || snip.lineByLine.length === 0) {
      theoryDefects.push(`Module ${mod.id} Snippet ${sIdx}: Missing lineByLine explanations`);
    }
  });
});

console.log(`Theory module defects found: ${theoryDefects.length}`);
if (theoryDefects.length > 0) {
  theoryDefects.slice(0, 10).forEach(d => console.error(' - ' + d));
} else {
  console.log('All 40 theory modules passed strict depth, structure, and snippet requirements (PASS).');
}

console.log('\n========================================');
console.log('4. PROJECTS MULTI-STEP STRUCTURE AUDIT');
console.log('========================================');

const allProjects = [...begProjects, ...intProjects, ...advProjects];
let projectDefects = [];

allProjects.forEach((proj) => {
  if (!proj.isProject) {
    projectDefects.push(`Project ${proj.id}: isProject is false`);
  }
  const lc = proj.lessonContent;
  if (!lc) {
    projectDefects.push(`Project ${proj.id}: missing lessonContent`);
    return;
  }
  if (!lc.sections || lc.sections.length < 2) {
    projectDefects.push(`Project ${proj.id}: sections < 2 (${lc.sections?.length})`);
  }
  if (!lc.practiceExercises || lc.practiceExercises.length === 0) {
    projectDefects.push(`Project ${proj.id}: missing practiceExercises/deliverables`);
  }
  const snippets = lc.sections?.flatMap(s => s.codeSnippets || []) || [];
  if (snippets.length < 3) {
    projectDefects.push(`Project ${proj.id}: Has ${snippets.length} code snippets (Required >= 3)`);
  }
});

console.log(`Project defects found: ${projectDefects.length}`);
if (projectDefects.length > 0) {
  projectDefects.forEach(d => console.error(' - ' + d));
} else {
  console.log('All 4 projects contain rich multi-step deliverables and blueprints (PASS).');
}

console.log('\n========================================');
console.log('5. MCQS INTEGRITY & DISTRIBUTION AUDIT');
console.log('========================================');

const allMcqs = [
  ...begMcqs.map(q => ({ ...q, level: 'beginner' })),
  ...intMcqs.map(q => ({ ...q, level: 'intermediate' })),
  ...advMcqs.map(q => ({ ...q, level: 'advanced' }))
];

let mcqDefects = [];
const seenQuestions = new Set();
const answerDistribution = { 0: 0, 1: 0, 2: 0, 3: 0 };

allMcqs.forEach((q, idx) => {
  if (!q.question || q.question.trim().length === 0) {
    mcqDefects.push(`MCQ [${q.level} #${q.id}]: Empty question`);
  }
  if (seenQuestions.has(q.question.trim())) {
    mcqDefects.push(`MCQ [${q.level} #${q.id}]: Duplicate question text "${q.question.slice(0, 40)}..."`);
  }
  seenQuestions.add(q.question.trim());

  if (!Array.isArray(q.options) || q.options.length !== 4) {
    mcqDefects.push(`MCQ [${q.level} #${q.id}]: Options count is ${q.options?.length} (Expected: 4)`);
  }

  if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
    mcqDefects.push(`MCQ [${q.level} #${q.id}]: Invalid correctAnswer index ${q.correctAnswer}`);
  } else {
    answerDistribution[q.correctAnswer] = (answerDistribution[q.correctAnswer] || 0) + 1;
  }

  if (!q.explanation || q.explanation.trim().length === 0) {
    mcqDefects.push(`MCQ [${q.level} #${q.id}]: Empty explanation`);
  }
});

console.log(`MCQ defects found: ${mcqDefects.length}`);
if (mcqDefects.length > 0) {
  mcqDefects.forEach(d => console.error(' - ' + d));
} else {
  console.log('All 90 MCQs are valid with 4 options, valid answer index, unique questions, and full explanations (PASS).');
}
console.log('Answer distribution across 90 MCQs:', answerDistribution);

console.log('\n========================================');
console.log('6. PERSISTENCE KEY & SERVICE INTEGRITY AUDIT');
console.log('========================================');

const serviceCode = fs.readFileSync('src/features/roadmap/services/seoCourse.service.ts', 'utf8');
const persistenceKeyMatches = serviceCode.match(/const\s+STORAGE_KEY\s*=\s*['"`]([^'"`]+)['"`]/);
const detectedKey = persistenceKeyMatches ? persistenceKeyMatches[1] : 'NOT_FOUND';

console.log(`Service Persistence Key: "${detectedKey}" (Expected: "skillora_seo_course_progress") -> ${detectedKey === 'skillora_seo_course_progress' ? 'PASS' : 'FAIL'}`);

// Check any other files for rogue seo keys
const allSrcFiles = [];
function findFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) findFiles(full);
    else if (full.endsWith('.ts') || full.endsWith('.tsx') || full.endsWith('.js')) allSrcFiles.push(full);
  });
}
findFiles('src');

let rogueKeysFound = [];
allSrcFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const m = c.match(/skillora_[a-z0-9_]*seo[a-z0-9_]*/gi);
  if (m) {
    m.forEach(k => {
      if (k !== 'skillora_seo_course_progress') {
        rogueKeysFound.push(`${f}: ${k}`);
      }
    });
  }
});

console.log(`Rogue SEO persistence keys in src: ${rogueKeysFound.length === 0 ? 'None (PASS)' : rogueKeysFound.join(', ')}`);
