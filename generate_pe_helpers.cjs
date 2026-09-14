const fs = require('fs');
const path = require('path');

console.log('Starting full Prompt Engineering curriculum generator...');

// Helper to sanitize strings for TS export
function formatTsFile(tasksVarName, tasks, assessmentVarName, assessment) {
  const content = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export const ${assessmentVarName}: QuizQuestion[] = ${JSON.stringify(assessment, null, 2)};

export const ${tasksVarName}: Task[] = ${JSON.stringify(tasks, null, 2)};
`;
  return content;
}

module.exports = { formatTsFile };
