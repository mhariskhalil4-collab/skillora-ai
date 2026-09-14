const fs = require('fs');
const path = require('path');

const begFile = path.join(__dirname, '../src/features/roadmap/data/google-ads/googleAdsBeginner.data.ts');
const intFile = path.join(__dirname, '../src/features/roadmap/data/google-ads/googleAdsIntermediate.data.ts');
const advFile = path.join(__dirname, '../src/features/roadmap/data/google-ads/googleAdsAdvanced.data.ts');

function readAndExtract(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return content;
}

// Function to rotate choices so correctAnswer matches desired targetIndex (0=A, 1=B, 2=C, 3=D)
function balanceQuestions(questions, targetPattern) {
  return questions.map((q, idx) => {
    const targetCorrect = targetPattern[idx % targetPattern.length];
    const currentCorrect = q.correctAnswer;
    if (currentCorrect === targetCorrect) return q;

    const correctOptionText = q.options[currentCorrect];
    const newOptions = [...q.options];
    // Remove correct option from old position
    newOptions.splice(currentCorrect, 1);
    // Insert at target position
    newOptions.splice(targetCorrect, 0, correctOptionText);

    return {
      ...q,
      options: newOptions,
      correctAnswer: targetCorrect
    };
  });
}

function processLevelFile(filePath, assessmentVarName, tasksVarName) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract JSON for assessment
  const assessmentRegex = new RegExp(`export const ${assessmentVarName}: QuizQuestion\\[\\] = ([\\s\\S]*?);\\n\\nexport const ${tasksVarName}`, 'm');
  const match = content.match(assessmentRegex);
  if (!match) {
    console.error(`Could not match ${assessmentVarName} in ${filePath}`);
    return;
  }

  const questions = JSON.parse(match[1]);
  // Balance pattern [0, 1, 2, 3] = A, B, C, D
  const balanced = balanceQuestions(questions, [0, 1, 2, 3, 1, 2, 3, 0, 2, 3, 0, 1, 3, 0, 1, 2, 0, 2, 1, 3]);

  // Extract tasks
  const tasksRegex = new RegExp(`export const ${tasksVarName}: Task\\[\\] = ([\\s\\S]*?);\\n?$`, 'm');
  const tasksMatch = content.match(tasksRegex);
  const tasks = JSON.parse(tasksMatch[1]);

  // Update final assessment task with balanced questions
  const finalTask = tasks.find(t => t.isFinalAssessment);
  if (finalTask && finalTask.assessmentDetails) {
    finalTask.assessmentDetails.questions = balanced;
  }

  const newContent = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export const ${assessmentVarName}: QuizQuestion[] = ${JSON.stringify(balanced, null, 2)};

export const ${tasksVarName}: Task[] = ${JSON.stringify(tasks, null, 2)};
`;

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Balanced ${balanced.length} MCQs in ${filePath}`);
}

processLevelFile(begFile, 'GOOGLE_ADS_BEGINNER_FINAL_ASSESSMENT', 'GOOGLE_ADS_BEGINNER_TASKS');
processLevelFile(intFile, 'GOOGLE_ADS_INTERMEDIATE_FINAL_ASSESSMENT', 'GOOGLE_ADS_INTERMEDIATE_TASKS');
processLevelFile(advFile, 'GOOGLE_ADS_ADVANCED_FINAL_ASSESSMENT', 'GOOGLE_ADS_ADVANCED_TASKS');

console.log('All 90 MCQs balanced across A, B, C, D!');
