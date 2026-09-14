const fs = require('fs');
const path = require('path');

function balanceFile(filePath, assessmentVarName, tasksVarName) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract assessment JSON
  const regex = new RegExp(`export const ${assessmentVarName}: QuizQuestion\\[\\] = ([\\s\\S]*?);\\n\\nexport const ${tasksVarName}`, 'm');
  const match = content.match(regex);
  if (!match) {
    console.error('Failed to match assessment in', filePath);
    return;
  }
  
  const assessment = JSON.parse(match[1]);
  console.log(`Original ${assessmentVarName} question count:`, assessment.length);
  
  // Balance answers: cycle 0, 1, 2, 3
  const balanced = assessment.map((q, idx) => {
    const targetIdx = idx % 4;
    const currentCorrect = q.correctAnswer;
    if (currentCorrect === targetIdx) {
      return q;
    }
    
    // Swap options
    const newOptions = [...q.options];
    const correctText = newOptions[currentCorrect];
    const targetText = newOptions[targetIdx];
    newOptions[targetIdx] = correctText;
    newOptions[currentCorrect] = targetText;
    
    return {
      ...q,
      options: newOptions,
      correctAnswer: targetIdx
    };
  });
  
  // Replace in content
  const replacement = `export const ${assessmentVarName}: QuizQuestion[] = ${JSON.stringify(balanced, null, 2)};\n\nexport const ${tasksVarName}`;
  const newContent = content.replace(regex, () => replacement);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Balanced ${assessmentVarName} in ${filePath}`);
}

const begFile = path.join(__dirname, 'src', 'features', 'roadmap', 'data', 'prompt-engineering', 'promptEngineeringBeginner.data.ts');
const intFile = path.join(__dirname, 'src', 'features', 'roadmap', 'data', 'prompt-engineering', 'promptEngineeringIntermediate.data.ts');
const advFile = path.join(__dirname, 'src', 'features', 'roadmap', 'data', 'prompt-engineering', 'promptEngineeringAdvanced.data.ts');

balanceFile(begFile, 'PE_BEGINNER_FINAL_ASSESSMENT', 'PE_BEGINNER_TASKS');
balanceFile(intFile, 'PE_INTERMEDIATE_FINAL_ASSESSMENT', 'PE_INTERMEDIATE_TASKS');
balanceFile(advFile, 'PE_ADVANCED_FINAL_ASSESSMENT', 'PE_ADVANCED_TASKS');

console.log('All PE assessments balanced successfully.');
