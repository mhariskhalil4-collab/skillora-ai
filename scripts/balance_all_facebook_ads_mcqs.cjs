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

// Function to shift options so that the correct answer lands on a desired target index (0=A, 1=B, 2=C, 3=D)
function rebalanceQuestions(questions, targetCounts) {
  // targetCounts: [countA, countB, countC, countD]
  const targetSlots = [];
  targetCounts.forEach((count, targetIdx) => {
    for (let i = 0; i < count; i++) {
      targetSlots.push(targetIdx);
    }
  });

  return questions.map((q, idx) => {
    const desiredCorrectIndex = targetSlots[idx % targetSlots.length];
    const originalCorrectIndex = q.correctAnswer;
    if (desiredCorrectIndex === originalCorrectIndex) {
      return { ...q };
    }

    // Swap the correct option with the option at desiredCorrectIndex
    const newOptions = [...q.options];
    const temp = newOptions[desiredCorrectIndex];
    newOptions[desiredCorrectIndex] = newOptions[originalCorrectIndex];
    newOptions[originalCorrectIndex] = temp;

    return {
      ...q,
      options: newOptions,
      correctAnswer: desiredCorrectIndex
    };
  });
}

const intFile = path.join(__dirname, '../src/features/roadmap/data/facebook-ads/facebookAdsIntermediate.data.ts');
const advFile = path.join(__dirname, '../src/features/roadmap/data/facebook-ads/facebookAdsAdvanced.data.ts');
const begFile = path.join(__dirname, '../src/features/roadmap/data/facebook-ads/facebookAdsBeginner.data.ts');

const beg = loadTsModule(begFile);
const inter = loadTsModule(intFile);
const adv = loadTsModule(advFile);

// Beginner is already 5, 5, 5, 5 (Total 20)
// Intermediate target: 8 A, 7 B, 8 C, 7 D (Total 30)
// Advanced target: 10 A, 10 B, 10 C, 10 D (Total 40)
// Total across 90 MCQs: A=23, B=22, C=23, D=22 (EXACTLY 22-23 EACH!)

const balancedIntMCQs = rebalanceQuestions(inter.FACEBOOK_ADS_INTERMEDIATE_FINAL_ASSESSMENT, [8, 7, 8, 7]);
const balancedAdvMCQs = rebalanceQuestions(adv.FACEBOOK_ADS_ADVANCED_FINAL_ASSESSMENT, [10, 10, 10, 10]);

// Update Intermediate File
const intTasks = inter.FACEBOOK_ADS_INTERMEDIATE_TASKS.map(task => {
  if (task.isFinalAssessment) {
    return {
      ...task,
      questions: balancedIntMCQs
    };
  }
  return task;
});

const intHeader = `import { Task, QuizQuestion } from '../../types/roadmap.types';\n\n`;
const intAssessmentExport = `export const FACEBOOK_ADS_INTERMEDIATE_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(balancedIntMCQs, null, 2)};\n\n`;
const intTasksExport = `export const FACEBOOK_ADS_INTERMEDIATE_TASKS: Task[] = ${JSON.stringify(intTasks, null, 2)};\n`;

fs.writeFileSync(intFile, intHeader + intAssessmentExport + intTasksExport, 'utf-8');

// Update Advanced File
const advTasks = adv.FACEBOOK_ADS_ADVANCED_TASKS.map(task => {
  if (task.isFinalAssessment) {
    return {
      ...task,
      questions: balancedAdvMCQs
    };
  }
  return task;
});

const advHeader = `import { Task, QuizQuestion } from '../../types/roadmap.types';\n\n`;
const advAssessmentExport = `export const FACEBOOK_ADS_ADVANCED_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(balancedAdvMCQs, null, 2)};\n\n`;
const advTasksExport = `export const FACEBOOK_ADS_ADVANCED_TASKS: Task[] = ${JSON.stringify(advTasks, null, 2)};\n`;

fs.writeFileSync(advFile, advHeader + advAssessmentExport + advTasksExport, 'utf-8');

console.log('✅ Successfully rebalanced Intermediate & Advanced MCQs!');
