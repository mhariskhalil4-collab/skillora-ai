const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ts = require('typescript');

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

const begFile = path.join(__dirname, '../src/features/roadmap/data/facebook-ads/facebookAdsBeginner.data.ts');
const intFile = path.join(__dirname, '../src/features/roadmap/data/facebook-ads/facebookAdsIntermediate.data.ts');
const advFile = path.join(__dirname, '../src/features/roadmap/data/facebook-ads/facebookAdsAdvanced.data.ts');

const beg = loadTsModule(begFile);
const inter = loadTsModule(intFile);
const adv = loadTsModule(advFile);

const all = [
  ...beg.FACEBOOK_ADS_BEGINNER_FINAL_ASSESSMENT,
  ...inter.FACEBOOK_ADS_INTERMEDIATE_FINAL_ASSESSMENT,
  ...adv.FACEBOOK_ADS_ADVANCED_FINAL_ASSESSMENT
];

const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
all.forEach(q => dist[q.correctAnswer]++);

console.log('=== Total MCQs:', all.length);
console.log(`Distribution (0=A, 1=B, 2=C, 3=D): A=${dist[0]}, B=${dist[1]}, C=${dist[2]}, D=${dist[3]}`);

const begDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
beg.FACEBOOK_ADS_BEGINNER_FINAL_ASSESSMENT.forEach(q => begDist[q.correctAnswer]++);
console.log(`Beginner (20): A=${begDist[0]}, B=${begDist[1]}, C=${begDist[2]}, D=${begDist[3]}`);

const intDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
inter.FACEBOOK_ADS_INTERMEDIATE_FINAL_ASSESSMENT.forEach(q => intDist[q.correctAnswer]++);
console.log(`Intermediate (30): A=${intDist[0]}, B=${intDist[1]}, C=${intDist[2]}, D=${intDist[3]}`);

const advDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
adv.FACEBOOK_ADS_ADVANCED_FINAL_ASSESSMENT.forEach(q => advDist[q.correctAnswer]++);
console.log(`Advanced (40): A=${advDist[0]}, B=${advDist[1]}, C=${advDist[2]}, D=${advDist[3]}`);
