const fs = require('fs');
const path = require('path');

function balanceQuestionsInFile(filePath, targetDist) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find JSON array for FINAL_ASSESSMENT
  const match = content.match(/export const THREE_D_[A-Z]+_FINAL_ASSESSMENT: QuizQuestion\[\] = (\[[\s\S]*?\]);/);
  if (!match) {
    console.error(`Could not match final assessment array in ${filePath}`);
    return;
  }
  
  const rawJson = match[1];
  let questions = JSON.parse(rawJson);
  
  const targets = [];
  targetDist.forEach((count, ansIdx) => {
    for (let i = 0; i < count; i++) {
      targets.push(ansIdx);
    }
  });
  
  questions = questions.map((q, idx) => {
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
  
  // Also update questions embedded in the assessment task
  const updatedAssessmentJson = JSON.stringify(questions, null, 2);
  content = content.replace(match[0], `${match[0].split(':')[0].trim()}: QuizQuestion[] = ${updatedAssessmentJson};`);
  
  // Replace in the tasks array as well
  const taskMatch = content.match(/"isFinalAssessment": true,[\s\S]*?"questions": (\[[\s\S]*?\])\s*\}/);
  if (taskMatch) {
    content = content.replace(taskMatch[1], updatedAssessmentJson);
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Balanced ${questions.length} questions in ${filePath}`);
}

const begFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', '3d-animation', 'threeDAnimationBeginner.data.ts');
const intFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', '3d-animation', 'threeDAnimationIntermediate.data.ts');
const advFile = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', '3d-animation', 'threeDAnimationAdvanced.data.ts');

balanceQuestionsInFile(begFile, [5, 5, 5, 5]);
balanceQuestionsInFile(intFile, [8, 8, 7, 7]);
balanceQuestionsInFile(advFile, [10, 10, 10, 10]);

console.log('All 3D animation MCQs balanced successfully.');
