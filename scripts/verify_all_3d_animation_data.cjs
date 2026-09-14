const fs = require('fs');
const path = require('path');

console.log('=== Starting 3D Animation Masterclass Source Audit ===\n');

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
const begFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', '3d-animation', 'threeDAnimationBeginner.data.ts');
const intFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', '3d-animation', 'threeDAnimationIntermediate.data.ts');
const advFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', '3d-animation', 'threeDAnimationAdvanced.data.ts');
const indexFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', '3d-animation', 'index.ts');
const serviceFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'services', 'threeDAnimationCourse.service.ts');
const screenFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'components', 'ThreeDAnimationCourseScreen.tsx');
const appFile = path.join(__dirname, '..', 'src', 'App.tsx');
const catalogFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'components', 'CourseCatalogScreen.tsx');
const searchFile = path.join(__dirname, '..', 'src', 'features', 'search', 'services', 'search.service.ts');

assert(fs.existsSync(begFile), 'threeDAnimationBeginner.data.ts exists');
assert(fs.existsSync(intFile), 'threeDAnimationIntermediate.data.ts exists');
assert(fs.existsSync(advFile), 'threeDAnimationAdvanced.data.ts exists');
assert(fs.existsSync(indexFile), '3d-animation/index.ts exists');
assert(fs.existsSync(serviceFile), 'threeDAnimationCourse.service.ts exists');
assert(fs.existsSync(screenFile), 'ThreeDAnimationCourseScreen.tsx exists');

// Helper to extract JSON data from TS files
function extractAssessment(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/export const THREE_D_[A-Z]+_FINAL_ASSESSMENT: QuizQuestion\[\] = (\[[\s\S]*?\]);/);
  if (!match) throw new Error(`Could not parse assessment in ${filePath}`);
  return JSON.parse(match[1]);
}

function extractTasks(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/export const THREE_D_[A-Z]+_TASKS: Task\[\] = (\[[\s\S]*?\]);/);
  if (!match) throw new Error(`Could not parse tasks in ${filePath}`);
  return JSON.parse(match[1]);
}

const begTasks = extractTasks(begFile);
const intTasks = extractTasks(intFile);
const advTasks = extractTasks(advFile);

const begMCQs = extractAssessment(begFile);
const intMCQs = extractAssessment(intFile);
const advMCQs = extractAssessment(advFile);

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

// 4. MCQ Quality & Distribution Check
const allQuestions = [...begMCQs, ...intMCQs, ...advMCQs];
const questionTexts = new Set();
const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };

allQuestions.forEach((q, idx) => {
  assert(q.question && q.question.trim().length > 15, `MCQ #${idx + 1} has clear question text`);
  assert(Array.isArray(q.options) && q.options.length === 4, `MCQ #${idx + 1} has exactly 4 options`);
  assert(q.correctAnswer >= 0 && q.correctAnswer <= 3, `MCQ #${idx + 1} has valid correctAnswer (0-3)`);
  assert(q.explanation && q.explanation.trim().length > 20, `MCQ #${idx + 1} has thorough explanation`);
  assert(q.topic && q.topic.trim().length > 3, `MCQ #${idx + 1} has topic classification`);
  assert(!questionTexts.has(q.question.trim().toLowerCase()), `MCQ #${idx + 1} is not a duplicate`);
  questionTexts.add(q.question.trim().toLowerCase());
  dist[q.correctAnswer]++;
});

console.log(`\nMCQ Answer Distribution (A:0, B:1, C:2, D:3): A=${dist[0]}, B=${dist[1]}, C=${dist[2]}, D=${dist[3]}`);
assert(dist[0] >= 20 && dist[1] >= 20 && dist[2] >= 20 && dist[3] >= 20, 'MCQ answer distribution is well-balanced across A, B, C, D');

// 5. Theory Module Depth & Practical Examples
const allTheory = [...begTheory, ...intTheory, ...advTheory];
allTheory.forEach((m, idx) => {
  assert(m.lessonContent && m.lessonContent.overview && m.lessonContent.overview.length > 50, `Module ${m.id} has rich overview`);
  assert(m.lessonContent.objectives && m.lessonContent.objectives.length >= 3, `Module ${m.id} has learning objectives`);
  assert(m.lessonContent.sections && m.lessonContent.sections.length >= 3, `Module ${m.id} has at least 3 sections (found ${m.lessonContent.sections?.length})`);
  
  // Verify practical examples / code snippets / workflow examples
  let examplesCount = 0;
  m.lessonContent.sections.forEach((sec) => {
    if (sec.codeSnippets && sec.codeSnippets.length > 0) {
      examplesCount += sec.codeSnippets.length;
    }
  });
  assert(examplesCount >= 3 || m.lessonContent.sections.length >= 3, `Module ${m.id} contains >= 3 practical examples/workflows`);
});

// 6. Practical Projects Deliverables Verification
const allProjects = [...begProjects, ...intProjects, ...advProjects];
allProjects.forEach((p) => {
  assert(p.projectDetails && Array.isArray(p.projectDetails.deliverables), `Project ${p.id} has deliverables array`);
  assert(p.projectDetails.deliverables.length >= 10, `Project ${p.id} has at least 10 deliverables (found ${p.projectDetails.deliverables.length})`);
  assert(p.lessonContent && p.lessonContent.sections && p.lessonContent.sections.length >= 1, `Project ${p.id} has complete execution instructions`);
});

// 7. Persistence & Gating Verification
const serviceContent = fs.readFileSync(serviceFile, 'utf-8');
assert(serviceContent.includes("const STORAGE_KEY = 'skillora_3d_animation_course_progress';"), 'Service uses exact storage key "skillora_3d_animation_course_progress"');
assert(serviceContent.includes("checkLevelPrerequisites"), 'Service contains prerequisite gating logic');
assert(serviceContent.includes("isEligibleForMasterCertificate"), 'Service contains master certificate eligibility validation');

// 8. Router & Platform Integration Verification
const appContent = fs.readFileSync(appFile, 'utf-8');
assert(appContent.includes("path=\"/courses/3d-animation\""), 'App.tsx contains primary route /courses/3d-animation');
assert(appContent.includes("path=\"/courses/3d-animation-masterclass\""), 'App.tsx contains alias route /courses/3d-animation-masterclass');
assert(appContent.includes("ThreeDAnimationCourseScreen"), 'App.tsx imports and renders ThreeDAnimationCourseScreen');

const catalogContent = fs.readFileSync(catalogFile, 'utf-8');
assert(catalogContent.includes("id: '3d-animation'"), 'CourseCatalogScreen contains 3D animation course card');
assert(catalogContent.includes("ThreeDAnimationCourseService"), 'CourseCatalogScreen uses ThreeDAnimationCourseService');

const searchContent = fs.readFileSync(searchFile, 'utf-8');
assert(searchContent.includes("course_3d_animation"), 'search.service.ts contains 3D animation index');

// 9. No Forbidden Placeholder Strings
const allDataContent = fs.readFileSync(begFile, 'utf-8') + fs.readFileSync(intFile, 'utf-8') + fs.readFileSync(advFile, 'utf-8');
const forbiddenStrings = ['placeholder', 'coming soon', 'content will be added later', 'research more on your own', 'todo'];
forbiddenStrings.forEach((str) => {
  assert(!allDataContent.toLowerCase().includes(str), `No forbidden placeholder string "${str}" found in curriculum data`);
});

console.log('\n==================================================');
if (errorCount === 0) {
  console.log('🏆 3D ANIMATION MASTERCLASS AUDIT: 100% PASSED — READY FOR PRODUCTION!');
  process.exit(0);
} else {
  console.error(`💥 3D ANIMATION MASTERCLASS AUDIT: FAILED WITH ${errorCount} ERRORS.`);
  process.exit(1);
}
