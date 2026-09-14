const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ts = require('typescript');

function balanceFileQuestions(filePath, targetCounts) {
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

  const exportedKey = Object.keys(context.module.exports).find(k => k.endsWith('_TASKS'));
  const tasks = context.module.exports[exportedKey];
  const assessmentTask = tasks.find(t => t.isFinalAssessment);
  if (!assessmentTask || !assessmentTask.questions) {
    throw new Error(`Assessment task not found in ${filePath}`);
  }

  const targets = [];
  targetCounts.forEach((count, ansIdx) => {
    for (let i = 0; i < count; i++) {
      targets.push(ansIdx);
    }
  });

  const updatedQuestions = assessmentTask.questions.map((q, idx) => {
    const desiredAnswer = targets[idx % targets.length];
    const originalAnswer = q.correctAnswer;
    const correctText = q.options[originalAnswer];
    if (desiredAnswer !== originalAnswer) {
      const newOptions = [...q.options];
      const temp = newOptions[desiredAnswer];
      newOptions[desiredAnswer] = correctText;
      newOptions[originalAnswer] = temp;
      return {
        ...q,
        options: newOptions,
        correctAnswer: desiredAnswer
      };
    }
    return q;
  });

  // Now replace the questions array in the file
  assessmentTask.questions = updatedQuestions;

  // Let's format the tasks back to clean TS
  const newTasksCode = `export const ${exportedKey}: Task[] = ${JSON.stringify(tasks, null, 2)};`;

  // We find the export const ..._TASKS: Task[] = ... in tsContent
  const exportPattern = new RegExp(`export const ${exportedKey}: Task\\[\\] = [\\s\\S]*?\\n\\];`);
  
  if (!tsContent.match(exportPattern)) {
    throw new Error(`Could not find export pattern in ${filePath}`);
  }

  let newContent = tsContent.replace(exportPattern, newTasksCode);
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Balanced ${updatedQuestions.length} MCQs in ${filePath}`);
}

const begFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'javascript', 'javascriptBeginner.data.ts');
const intFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'javascript', 'javascriptIntermediate.data.ts');
const advFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', 'javascript', 'javascriptAdvanced.data.ts');

balanceFileQuestions(begFile, [5, 5, 5, 5]);
balanceFileQuestions(intFile, [8, 8, 7, 7]);
balanceFileQuestions(advFile, [10, 10, 10, 10]);

console.log('All JavaScript MCQs balanced successfully!');
