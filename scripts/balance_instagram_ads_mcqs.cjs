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

function balanceArray(questions, targetCounts) {
  const targetPattern = [];
  targetCounts.forEach((count, ansIdx) => {
    for (let i = 0; i < count; i++) {
      targetPattern.push(ansIdx);
    }
  });

  return questions.map((q, idx) => {
    const targetCorrect = targetPattern[idx % targetPattern.length];
    const currentCorrect = q.correctAnswer;
    if (currentCorrect === targetCorrect) return q;

    const correctText = q.options[currentCorrect];
    const newOptions = [...q.options];
    const temp = newOptions[targetCorrect];
    newOptions[targetCorrect] = correctText;
    newOptions[currentCorrect] = temp;

    return {
      ...q,
      options: newOptions,
      correctAnswer: targetCorrect
    };
  });
}

function updateFileWithBalancedAssessment(filePath, assessmentVarName, tasksVarName, targetCounts) {
  const data = loadTsModule(filePath);
  const questions = data[assessmentVarName];
  const balancedQuestions = balanceArray(questions, targetCounts);

  // Update tasks array questions for final assessment task
  const tasks = data[tasksVarName].map(task => {
    if (task.isFinalAssessment) {
      return {
        ...task,
        questions: balancedQuestions
      };
    }
    return task;
  });

  const fileHeader = `import { Task, QuizQuestion } from '../../types/roadmap.types';\n\n`;
  const assessmentExport = `export const ${assessmentVarName}: QuizQuestion[] = ${JSON.stringify(balancedQuestions, null, 2)};\n\n`;
  const tasksExport = `export const ${tasksVarName}: Task[] = ${JSON.stringify(tasks, null, 2)};\n`;

  fs.writeFileSync(filePath, fileHeader + assessmentExport + tasksExport, 'utf-8');
  console.log(`✅ Balanced ${assessmentVarName} in ${filePath}`);
}

const begFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'instagram-ads', 'instagramAdsBeginner.data.ts');
const intFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'instagram-ads', 'instagramAdsIntermediate.data.ts');
const advFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'instagram-ads', 'instagramAdsAdvanced.data.ts');

updateFileWithBalancedAssessment(begFile, 'INSTAGRAM_ADS_BEGINNER_FINAL_ASSESSMENT', 'INSTAGRAM_ADS_BEGINNER_TASKS', [5, 5, 5, 5]);
updateFileWithBalancedAssessment(intFile, 'INSTAGRAM_ADS_INTERMEDIATE_FINAL_ASSESSMENT', 'INSTAGRAM_ADS_INTERMEDIATE_TASKS', [8, 7, 8, 7]);
updateFileWithBalancedAssessment(advFile, 'INSTAGRAM_ADS_ADVANCED_FINAL_ASSESSMENT', 'INSTAGRAM_ADS_ADVANCED_TASKS', [10, 10, 10, 10]);

console.log('Finished balancing all Instagram Ads assessments.');
