const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ts = require('typescript');

console.log('=== Starting Facebook Ads Masterclass Source & Data Audit ===\n');

let errorCount = 0;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    errorCount++;
  } else {
    console.log(`✅ PASSED: ${message}`);
  }
}

// 1. Check Data Files Existence
const begFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'facebook-ads', 'facebookAdsBeginner.data.ts');
const intFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'facebook-ads', 'facebookAdsIntermediate.data.ts');
const advFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'facebook-ads', 'facebookAdsAdvanced.data.ts');
const indexFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'facebook-ads', 'index.ts');
const serviceFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'services', 'facebookAdsCourse.service.ts');
const screenFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'components', 'FacebookAdsCourseScreen.tsx');
const appFile = path.join(__dirname, '..', 'src', 'App.tsx');
const catalogFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'components', 'CourseCatalogScreen.tsx');
const searchFile = path.join(__dirname, '..', 'src', 'features', 'search', 'services', 'search.service.ts');

assert(fs.existsSync(begFile), 'facebookAdsBeginner.data.ts exists');
assert(fs.existsSync(intFile), 'facebookAdsIntermediate.data.ts exists');
assert(fs.existsSync(advFile), 'facebookAdsAdvanced.data.ts exists');
assert(fs.existsSync(indexFile), 'facebook-ads/index.ts exists');
assert(fs.existsSync(serviceFile), 'facebookAdsCourse.service.ts exists');
assert(fs.existsSync(screenFile), 'FacebookAdsCourseScreen.tsx exists');

// Robust TypeScript loader
function loadTsModule(filePath) {
  const tsContent = fs.readFileSync(filePath, 'utf-8');
  const jsContent = ts.transpileModule(tsContent, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;
  const moduleExports = {};
  const context = {
    exports: moduleExports,
    module: { exports: moduleExports },
    require: () => ({})
  };
  vm.createContext(context);
  vm.runInContext(jsContent, context);
  return context.module.exports;
}

const begData = loadTsModule(begFile);
const intData = loadTsModule(intFile);
const advData = loadTsModule(advFile);

const begTasks = begData.FACEBOOK_ADS_BEGINNER_TASKS;
const intTasks = intData.FACEBOOK_ADS_INTERMEDIATE_TASKS;
const advTasks = advData.FACEBOOK_ADS_ADVANCED_TASKS;

const begMCQs = begData.FACEBOOK_ADS_BEGINNER_FINAL_ASSESSMENT;
const intMCQs = intData.FACEBOOK_ADS_INTERMEDIATE_FINAL_ASSESSMENT;
const advMCQs = advData.FACEBOOK_ADS_ADVANCED_FINAL_ASSESSMENT;

// 2. Exact Counts Validation
const begTheory = begTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const begProjects = begTasks.filter(t => t.isProject);
const begAssessments = begTasks.filter(t => t.isFinalAssessment);

const intTheory = intTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const intProjects = intTasks.filter(t => t.isProject);
const intAssessments = intTasks.filter(t => t.isFinalAssessment);

const advTheory = advTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const advProjects = advTasks.filter(t => t.isProject);
const advAssessments = advTasks.filter(t => t.isFinalAssessment);

const totalTheory = begTheory.length + intTheory.length + advTheory.length;
const totalProjects = begProjects.length + intProjects.length + advProjects.length;
const totalAssessments = begAssessments.length + intAssessments.length + advAssessments.length;
const totalTasks = begTasks.length + intTasks.length + advTasks.length;
const totalMCQs = begMCQs.length + intMCQs.length + advMCQs.length;

assert(begTheory.length === 12, `Beginner has exactly 12 theory modules (found ${begTheory.length})`);
assert(intTheory.length === 14, `Intermediate has exactly 14 theory modules (found ${intTheory.length})`);
assert(advTheory.length === 14, `Advanced has exactly 14 theory modules (found ${advTheory.length})`);
assert(totalTheory === 40, `Course has exactly 40 theory modules (found ${totalTheory})`);

assert(begProjects.length === 1, `Beginner has exactly 1 project (found ${begProjects.length})`);
assert(intProjects.length === 1, `Intermediate has exactly 1 project (found ${intProjects.length})`);
assert(advProjects.length === 2, `Advanced has exactly 2 projects (found ${advProjects.length})`);
assert(totalProjects === 4, `Course has exactly 4 projects (found ${totalProjects})`);

assert(begAssessments.length === 1, `Beginner has exactly 1 assessment (found ${begAssessments.length})`);
assert(intAssessments.length === 1, `Intermediate has exactly 1 assessment (found ${intAssessments.length})`);
assert(advAssessments.length === 1, `Advanced has exactly 1 assessment (found ${advAssessments.length})`);
assert(totalAssessments === 3, `Course has exactly 3 assessments (found ${totalAssessments})`);
assert(totalTasks === 47, `Total tasks count is exactly 47 (found ${totalTasks})`);

// 3. MCQs and Passing Thresholds
assert(begMCQs.length === 20, `Beginner assessment has exactly 20 MCQs (found ${begMCQs.length})`);
assert(intMCQs.length === 30, `Intermediate assessment has exactly 30 MCQs (found ${intMCQs.length})`);
assert(advMCQs.length === 40, `Advanced assessment has exactly 40 MCQs (found ${advMCQs.length})`);
assert(totalMCQs === 90, `Total course MCQs count is exactly 90 (found ${totalMCQs})`);

assert(begAssessments[0].passingScore === 15, `Beginner passing threshold is 15 (found ${begAssessments[0].passingScore})`);
assert(intAssessments[0].passingScore === 25, `Intermediate passing threshold is 25 (found ${intAssessments[0].passingScore})`);
assert(advAssessments[0].passingScore === 35, `Advanced passing threshold is 35 (found ${advAssessments[0].passingScore})`);

// 4. MCQ Quality & Balanced Distribution Check
const allQuestions = [...begMCQs, ...intMCQs, ...advMCQs];
const questionTexts = new Set();
const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };

allQuestions.forEach((q, idx) => {
  assert(q.question && q.question.trim().length > 15, `MCQ #${idx + 1} has clear question text`);
  assert(Array.isArray(q.options) && q.options.length === 4, `MCQ #${idx + 1} has exactly 4 options`);
  assert(q.correctAnswer >= 0 && q.correctAnswer <= 3, `MCQ #${idx + 1} has valid correctAnswer (0-3)`);
  assert(q.explanation && q.explanation.trim().length > 20, `MCQ #${idx + 1} has thorough explanation`);
  assert(q.topic && q.topic.trim().length > 3, `MCQ #${idx + 1} has topic classification`);
  assert(!questionTexts.has(q.question.trim().toLowerCase()), `MCQ #${idx + 1} is not a duplicate: "${q.question.slice(0, 40)}..."`);
  questionTexts.add(q.question.trim().toLowerCase());
  dist[q.correctAnswer]++;
});

console.log(`\nMCQ Answer Distribution (A:0, B:1, C:2, D:3): A=${dist[0]}, B=${dist[1]}, C=${dist[2]}, D=${dist[3]}`);
assert(dist[0] >= 22 && dist[0] <= 23, `A distribution is 22-23 (found ${dist[0]})`);
assert(dist[1] >= 22 && dist[1] <= 23, `B distribution is 22-23 (found ${dist[1]})`);
assert(dist[2] >= 22 && dist[2] <= 23, `C distribution is 22-23 (found ${dist[2]})`);
assert(dist[3] >= 22 && dist[3] <= 23, `D distribution is 22-23 (found ${dist[3]})`);

// 5. Theory Module Depth & Practical Examples
const allTheory = [...begTheory, ...intTheory, ...advTheory];
allTheory.forEach((m) => {
  assert(m.lessonContent && m.lessonContent.overview && m.lessonContent.overview.length > 50, `Module ${m.id} has rich overview`);
  assert(m.lessonContent.objectives && m.lessonContent.objectives.length >= 3, `Module ${m.id} has learning objectives`);
  assert(m.lessonContent.sections && m.lessonContent.sections.length >= 3, `Module ${m.id} has at least 3 sections (found ${m.lessonContent.sections?.length})`);
  assert(m.lessonContent.practiceExercises && m.lessonContent.practiceExercises.length >= 1, `Module ${m.id} has practice exercise`);
  
  // Verify practical examples / code snippets
  let examplesCount = 0;
  m.lessonContent.sections.forEach((sec) => {
    if (sec.codeSnippets && sec.codeSnippets.length > 0) {
      examplesCount += sec.codeSnippets.length;
    }
    assert(sec.miniPractice && sec.miniPractice.options && sec.miniPractice.options.length === 4, `Module ${m.id} section has mini practice`);
  });
  assert(examplesCount >= 3, `Module ${m.id} contains >= 3 practical examples / code snippets (found ${examplesCount})`);
});

// 6. Practical Projects Deliverables Verification
const allProjects = [...begProjects, ...intProjects, ...advProjects];
allProjects.forEach((p) => {
  assert(p.projectDetails && Array.isArray(p.projectDetails.deliverables), `Project ${p.id} has deliverables array`);
  assert(p.projectDetails.deliverables.length >= 10, `Project ${p.id} has at least 10 deliverables (found ${p.projectDetails.deliverables.length})`);
  assert(p.projectDetails.overview && p.projectDetails.overview.length > 50, `Project ${p.id} has complete overview`);
  assert(p.projectDetails.requirements && p.projectDetails.requirements.length >= 5, `Project ${p.id} has comprehensive requirements`);
  assert(p.projectDetails.rubric && p.projectDetails.rubric.length >= 3, `Project ${p.id} has evaluation rubric`);
  assert(p.projectDetails.learningObjectives && p.projectDetails.learningObjectives.length >= 3, `Project ${p.id} has learning objectives`);
});

// 7. Persistence & Gating Verification
const serviceContent = fs.readFileSync(serviceFile, 'utf-8');
assert(serviceContent.includes("const STORAGE_KEY = 'skillora_facebook_ads_course_progress';"), 'Service uses exact storage key "skillora_facebook_ads_course_progress"');
assert(serviceContent.includes("checkLevelPrerequisites"), 'Service contains prerequisite gating logic');
assert(serviceContent.includes("isEligibleForMasterCertificate"), 'Service contains master certificate eligibility validation');

// 8. Router & Platform Integration Verification
const appContent = fs.readFileSync(appFile, 'utf-8');
assert(appContent.includes("path=\"/courses/facebook-ads\""), 'App.tsx contains primary route /courses/facebook-ads');
assert(appContent.includes("path=\"/courses/facebook-ads-masterclass\""), 'App.tsx contains alias route /courses/facebook-ads-masterclass');
assert(appContent.includes("path=\"/courses/facebook-ads/beginner\""), 'App.tsx contains subroute /courses/facebook-ads/beginner');
assert(appContent.includes("path=\"/courses/facebook-ads/intermediate\""), 'App.tsx contains subroute /courses/facebook-ads/intermediate');
assert(appContent.includes("path=\"/courses/facebook-ads/advanced\""), 'App.tsx contains subroute /courses/facebook-ads/advanced');
assert(appContent.includes("FacebookAdsCourseScreen"), 'App.tsx imports and renders FacebookAdsCourseScreen');

// Ensure Meta Ads course is also intact
assert(appContent.includes("path=\"/courses/meta-ads\""), 'App.tsx maintains existing /courses/meta-ads route');

const catalogContent = fs.readFileSync(catalogFile, 'utf-8');
assert(catalogContent.includes("id: 'facebook-ads'"), 'CourseCatalogScreen contains facebook-ads course card');
assert(catalogContent.includes("FacebookAdsCourseService"), 'CourseCatalogScreen uses FacebookAdsCourseService');

const searchContent = fs.readFileSync(searchFile, 'utf-8');
assert(searchContent.includes("course_facebook_ads_masterclass"), 'search.service.ts contains facebook-ads index');
assert(searchContent.includes("course_meta_ads"), 'search.service.ts retains meta-ads index');

// 9. No Forbidden Placeholder Strings
const allDataContent = fs.readFileSync(begFile, 'utf-8') + fs.readFileSync(intFile, 'utf-8') + fs.readFileSync(advFile, 'utf-8');
const forbiddenStrings = ['placeholder course', 'placeholder module', 'coming soon', 'content will be added later', 'research this topic', 'research more on your own', 'try something creative'];
forbiddenStrings.forEach((str) => {
  assert(!allDataContent.toLowerCase().includes(str), `No forbidden placeholder string "${str}" found in curriculum data`);
});

console.log('\n==================================================');
if (errorCount === 0) {
  console.log('🏆 FACEBOOK ADS MASTERCLASS AUDIT: 100% PASSED — READY FOR PRODUCTION!');
  process.exit(0);
} else {
  console.error(`💥 FACEBOOK ADS MASTERCLASS AUDIT: FAILED WITH ${errorCount} ERRORS.`);
  process.exit(1);
}
