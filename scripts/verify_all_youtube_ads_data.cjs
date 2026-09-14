const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ts = require('typescript');

console.log('=== Starting YouTube Ads Masterclass Source & Data Audit ===\n');

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
const begFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'youtube-ads', 'youtubeAdsBeginner.data.ts');
const intFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'youtube-ads', 'youtubeAdsIntermediate.data.ts');
const advFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'youtube-ads', 'youtubeAdsAdvanced.data.ts');
const indexFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'youtube-ads', 'index.ts');
const serviceFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'services', 'youtubeAdsCourse.service.ts');
const screenFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'components', 'YouTubeAdsCourseScreen.tsx');
const appFile = path.join(__dirname, '..', 'src', 'App.tsx');
const catalogFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'components', 'CourseCatalogScreen.tsx');
const searchFile = path.join(__dirname, '..', 'src', 'features', 'search', 'services', 'search.service.ts');

assert(fs.existsSync(begFile), 'youtubeAdsBeginner.data.ts exists');
assert(fs.existsSync(intFile), 'youtubeAdsIntermediate.data.ts exists');
assert(fs.existsSync(advFile), 'youtubeAdsAdvanced.data.ts exists');
assert(fs.existsSync(indexFile), 'youtube-ads/index.ts exists');
assert(fs.existsSync(serviceFile), 'youtubeAdsCourse.service.ts exists');
assert(fs.existsSync(screenFile), 'YouTubeAdsCourseScreen.tsx exists');

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
    require: (mod) => {
      if (mod.includes('youtubeAdsBeginner.data')) return loadTsModule(begFile);
      if (mod.includes('youtubeAdsIntermediate.data')) return loadTsModule(intFile);
      if (mod.includes('youtubeAdsAdvanced.data')) return loadTsModule(advFile);
      if (mod.includes('youtube-ads')) return loadTsModule(indexFile);
      return {};
    }
  };
  vm.createContext(context);
  vm.runInContext(jsContent, context);
  return context.module.exports;
}

const begData = loadTsModule(begFile);
const intData = loadTsModule(intFile);
const advData = loadTsModule(advFile);
const indexData = loadTsModule(indexFile);

const begTasks = begData.YOUTUBE_ADS_BEGINNER_TASKS;
const intTasks = intData.YOUTUBE_ADS_INTERMEDIATE_TASKS;
const advTasks = advData.YOUTUBE_ADS_ADVANCED_TASKS;

const begExam = begData.YOUTUBE_ADS_BEGINNER_FINAL_ASSESSMENT;
const intExam = intData.YOUTUBE_ADS_INTERMEDIATE_FINAL_ASSESSMENT;
const advExam = advData.YOUTUBE_ADS_ADVANCED_FINAL_ASSESSMENT;

// 2. Task Counts per Level
assert(Array.isArray(begTasks) && begTasks.length === 14, `Beginner has 14 tasks (got ${begTasks ? begTasks.length : 0})`);
assert(Array.isArray(intTasks) && intTasks.length === 16, `Intermediate has 16 tasks (got ${intTasks ? intTasks.length : 0})`);
assert(Array.isArray(advTasks) && advTasks.length === 17, `Advanced has 17 tasks (got ${advTasks ? advTasks.length : 0})`);

const totalTasks = (begTasks?.length || 0) + (intTasks?.length || 0) + (advTasks?.length || 0);
assert(totalTasks === 47, `Total course tasks equal 47 (got ${totalTasks})`);

// 3. Theory Modules
const begTheory = begTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const intTheory = intTasks.filter(t => !t.isProject && !t.isFinalAssessment);
const advTheory = advTasks.filter(t => !t.isProject && !t.isFinalAssessment);

assert(begTheory.length === 12, `Beginner has 12 theory modules (got ${begTheory.length})`);
assert(intTheory.length === 14, `Intermediate has 14 theory modules (got ${intTheory.length})`);
assert(advTheory.length === 14, `Advanced has 14 theory modules (got ${advTheory.length})`);

const allTheory = [...begTheory, ...intTheory, ...advTheory];
assert(allTheory.length === 40, `Total theory modules equal 40 (got ${allTheory.length})`);

allTheory.forEach((m, idx) => {
  assert(!!m.id && !!m.title && !!m.description, `Theory module ${idx + 1} (${m.id}) has id, title, and description`);
  assert(!!m.lessonContent?.overview, `Theory module ${idx + 1} (${m.id}) has overview`);
  assert(m.lessonContent?.objectives?.length >= 2, `Theory module ${idx + 1} (${m.id}) has >= 2 learning objectives`);
  assert(m.lessonContent?.sections?.length >= 1, `Theory module ${idx + 1} (${m.id}) has >= 1 section`);
  assert(m.lessonContent?.keyTakeaways?.length >= 2, `Theory module ${idx + 1} (${m.id}) has >= 2 key takeaways`);
});

// 4. Projects & Deliverables
const begProjects = begTasks.filter(t => t.isProject);
const intProjects = intTasks.filter(t => t.isProject);
const advProjects = advTasks.filter(t => t.isProject);

assert(begProjects.length === 1, `Beginner has 1 project (got ${begProjects.length})`);
assert(intProjects.length === 1, `Intermediate has 1 project (got ${intProjects.length})`);
assert(advProjects.length === 2, `Advanced has 2 projects (got ${advProjects.length})`);

const allProjects = [...begProjects, ...intProjects, ...advProjects];
assert(allProjects.length === 4, `Total projects equal 4 (got ${allProjects.length})`);

allProjects.forEach((p, idx) => {
  const dels = p.projectDetails?.deliverables || [];
  assert(dels.length >= 10, `Project ${idx + 1} (${p.id}) has >= 10 deliverables (got ${dels.length})`);
  assert(!!p.projectDetails?.overview, `Project ${idx + 1} has overview`);
  assert(!!p.projectDetails?.realWorldScenario, `Project ${idx + 1} has real-world scenario`);
  assert(p.projectDetails?.rubric?.length >= 3, `Project ${idx + 1} has rubric with >= 3 criteria`);
  assert(p.projectDetails?.tips?.length >= 2, `Project ${idx + 1} has tips`);
});

// 5. Assessments & MCQs
assert(Array.isArray(begExam) && begExam.length === 20, `Beginner assessment has 20 questions (got ${begExam?.length})`);
assert(Array.isArray(intExam) && intExam.length === 30, `Intermediate assessment has 30 questions (got ${intExam?.length})`);
assert(Array.isArray(advExam) && advExam.length === 40, `Advanced assessment has 40 questions (got ${advExam?.length})`);

const totalMCQs = (begExam?.length || 0) + (intExam?.length || 0) + (advExam?.length || 0);
assert(totalMCQs === 90, `Total MCQs equal 90 (got ${totalMCQs})`);

// 6. Advanced Key Distribution (10 A, 10 B, 10 C, 10 D)
const advDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
advExam.forEach(q => {
  assert(q.options.length === 4, `Question ${q.id} in Advanced exam has 4 options`);
  assert(q.correctAnswer >= 0 && q.correctAnswer <= 3, `Question ${q.id} has valid correctAnswer (0-3)`);
  assert(!!q.explanation, `Question ${q.id} has explanation`);
  advDist[q.correctAnswer] = (advDist[q.correctAnswer] || 0) + 1;
});
console.log(`Advanced Answer Key Distribution: A=${advDist[0]}, B=${advDist[1]}, C=${advDist[2]}, D=${advDist[3]}`);
assert(advDist[0] === 10, `Advanced exam has 10 option A (got ${advDist[0]})`);
assert(advDist[1] === 10, `Advanced exam has 10 option B (got ${advDist[1]})`);
assert(advDist[2] === 10, `Advanced exam has 10 option C (got ${advDist[2]})`);
assert(advDist[3] === 10, `Advanced exam has 10 option D (got ${advDist[3]})`);

// 7. Initial Levels State
const initLevels = indexData.INITIAL_YOUTUBE_ADS_LEVELS;
assert(initLevels.beginner.requiredScore === 15, 'Beginner passing score is 15');
assert(initLevels.intermediate.requiredScore === 25, 'Intermediate passing score is 25');
assert(initLevels.advanced.requiredScore === 35, 'Advanced passing score is 35');

// 8. Placeholders Check
const forbiddenWords = ['TODO', 'TBD', 'Lorem ipsum', 'coming soon', 'placeholder', 'as an exercise for the reader'];
[begFile, intFile, advFile].forEach(fp => {
  const content = fs.readFileSync(fp, 'utf-8');
  forbiddenWords.forEach(word => {
    const found = content.toLowerCase().includes(word.toLowerCase());
    assert(!found, `File ${path.basename(fp)} contains no placeholder "${word}"`);
  });
});

// 9. Integration Files Check
const appContent = fs.readFileSync(appFile, 'utf-8');
assert(appContent.includes('/courses/youtube-ads'), 'App.tsx contains /courses/youtube-ads');
assert(appContent.includes('/courses/youtube-ads-masterclass'), 'App.tsx contains /courses/youtube-ads-masterclass alias');
assert(appContent.includes('/courses/youtube-ads/beginner'), 'App.tsx contains /courses/youtube-ads/beginner');
assert(appContent.includes('/courses/youtube-ads/intermediate'), 'App.tsx contains /courses/youtube-ads/intermediate');
assert(appContent.includes('/courses/youtube-ads/advanced'), 'App.tsx contains /courses/youtube-ads/advanced');

const catalogContent = fs.readFileSync(catalogFile, 'utf-8');
assert(catalogContent.includes('youtube-ads'), 'CourseCatalogScreen.tsx includes youtube-ads course');

const searchContent = fs.readFileSync(searchFile, 'utf-8');
assert(searchContent.includes('course_youtube_ads_masterclass'), 'search.service.ts includes course_youtube_ads_masterclass');

console.log('\n=== Summary ===');
if (errorCount === 0) {
  console.log('🎉 100% of all YouTube Ads audits PASSED with zero errors!');
  process.exit(0);
} else {
  console.error(`❌ Audits finished with ${errorCount} errors.`);
  process.exit(1);
}
