const fs = require('fs');
const path = require('path');

function balanceQuestions(questions, levelName, targetCounts) {
  console.log(`Balancing ${levelName} MCQs (${questions.length} questions)...`);

  // Target indices order for cyclic balancing
  const numTargets = [0, 1, 2, 3];
  
  const balanced = questions.map((q, index) => {
    const targetCorrectIndex = index % 4; // 0, 1, 2, 3, 0, 1, 2, 3...
    const currentCorrectIndex = q.correctAnswer;
    
    if (currentCorrectIndex === targetCorrectIndex) {
      return q;
    }

    // Swap the correct option with the option at targetCorrectIndex
    const newOptions = [...q.options];
    const correctOptionText = newOptions[currentCorrectIndex];
    const targetOptionText = newOptions[targetCorrectIndex];

    newOptions[targetCorrectIndex] = correctOptionText;
    newOptions[currentCorrectIndex] = targetOptionText;

    return {
      ...q,
      options: newOptions,
      correctAnswer: targetCorrectIndex
    };
  });

  const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
  balanced.forEach(q => dist[q.correctAnswer]++);
  console.log(`Balanced ${levelName} Distribution: A(0)=${dist[0]}, B(1)=${dist[1]}, C(2)=${dist[2]}, D(3)=${dist[3]}`);

  return balanced;
}

// 1. Beginner
const begPath = path.resolve(__dirname, '../src/features/roadmap/data/shopify-developer/shopifyDeveloperBeginner.data.ts');
let begContent = fs.readFileSync(begPath, 'utf8');
const begMatch = begContent.match(/export const SHOPIFY_DEV_BEGINNER_ASSESSMENT: QuizQuestion\[\] = ([\s\S]*?\n\]);/);
if (begMatch) {
  const begQuestions = eval(begMatch[1]);
  const balancedBeg = balanceQuestions(begQuestions, 'Beginner');
  
  // Replace in questions array and in tasks assessment task
  const begTasksMatch = begContent.match(/export const SHOPIFY_DEV_BEGINNER_TASKS: Task\[\] = ([\s\S]*?\n\]);/);
  let begTasks = eval(begTasksMatch[1]);
  begTasks = begTasks.map(t => {
    if (t.isFinalAssessment || t.type === 'assessment') {
      return { ...t, questions: balancedBeg };
    }
    return t;
  });

  const newBegContent = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export const SHOPIFY_DEV_BEGINNER_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(balancedBeg, null, 2)};

export const SHOPIFY_DEV_BEGINNER_TASKS: Task[] = ${JSON.stringify(begTasks, null, 2)};
`;
  fs.writeFileSync(begPath, newBegContent, 'utf8');
}

// 2. Intermediate
const interPath = path.resolve(__dirname, '../src/features/roadmap/data/shopify-developer/shopifyDeveloperIntermediate.data.ts');
let interContent = fs.readFileSync(interPath, 'utf8');
const interMatch = interContent.match(/export const SHOPIFY_DEV_INTERMEDIATE_ASSESSMENT: QuizQuestion\[\] = ([\s\S]*?\n\]);/);
if (interMatch) {
  const interQuestions = eval(interMatch[1]);
  const balancedInter = balanceQuestions(interQuestions, 'Intermediate');
  
  const interTasksMatch = interContent.match(/export const SHOPIFY_DEV_INTERMEDIATE_TASKS: Task\[\] = ([\s\S]*?\n\]);/);
  let interTasks = eval(interTasksMatch[1]);
  interTasks = interTasks.map(t => {
    if (t.isFinalAssessment || t.type === 'assessment') {
      return { ...t, questions: balancedInter };
    }
    return t;
  });

  const newInterContent = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export const SHOPIFY_DEV_INTERMEDIATE_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(balancedInter, null, 2)};

export const SHOPIFY_DEV_INTERMEDIATE_TASKS: Task[] = ${JSON.stringify(interTasks, null, 2)};
`;
  fs.writeFileSync(interPath, newInterContent, 'utf8');
}

// 3. Advanced
const advPath = path.resolve(__dirname, '../src/features/roadmap/data/shopify-developer/shopifyDeveloperAdvanced.data.ts');
let advContent = fs.readFileSync(advPath, 'utf8');
const advMatch = advContent.match(/export const SHOPIFY_DEV_ADVANCED_ASSESSMENT: QuizQuestion\[\] = ([\s\S]*?\n\]);/);
if (advMatch) {
  const advQuestions = eval(advMatch[1]);
  const balancedAdv = balanceQuestions(advQuestions, 'Advanced');
  
  const advTasksMatch = advContent.match(/export const SHOPIFY_DEV_ADVANCED_TASKS: Task\[\] = ([\s\S]*?\n\]);/);
  let advTasks = eval(advTasksMatch[1]);
  advTasks = advTasks.map(t => {
    if (t.isFinalAssessment || t.type === 'assessment') {
      return { ...t, questions: balancedAdv };
    }
    return t;
  });

  const newAdvContent = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export const SHOPIFY_DEV_ADVANCED_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(balancedAdv, null, 2)};

export const SHOPIFY_DEV_ADVANCED_TASKS: Task[] = ${JSON.stringify(advTasks, null, 2)};
`;
  fs.writeFileSync(advPath, newAdvContent, 'utf8');
}

console.log('✅ All MCQs successfully balanced across A(0), B(1), C(2), and D(3)!');
