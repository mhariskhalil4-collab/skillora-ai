const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function balanceMcqsAndAddSnippetExplanations(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Balance MCQs in the assessment
  // Find the assessment block
  const assessmentRegex = /(export\s+const\s+SEO_[A-Z_]+_FINAL_ASSESSMENT\s*:\s*QuizQuestion\[\]\s*=\s*\[)([\s\S]*?)(\];)/;
  const match = content.match(assessmentRegex);
  if (match) {
    const prefix = match[1];
    const mcqArrayStr = match[2];
    const suffix = match[3];

    // Transpile and parse the MCQ array to objects
    const transpiled = ts.transpileModule(`const arr = [${mcqArrayStr}]; module.exports = arr;`, {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
    }).outputText;
    const mod = { exports: [] };
    const fn = new Function('module', 'exports', transpiled);
    fn(mod, mod.exports);
    const mcqs = mod.exports;

    // Distribute correct answers across 0, 1, 2, 3
    mcqs.forEach((mcq, idx) => {
      const targetIndex = idx % 4;
      const currentCorrectIndex = mcq.correctAnswer;
      if (currentCorrectIndex !== targetIndex) {
        // Swap options so correct answer moves to targetIndex
        const correctOptionText = mcq.options[currentCorrectIndex];
        const targetOptionText = mcq.options[targetIndex];
        mcq.options[targetIndex] = correctOptionText;
        mcq.options[currentCorrectIndex] = targetOptionText;
        mcq.correctAnswer = targetIndex;
      }
    });

    // Format new MCQ string
    const newMcqStr = mcqs.map(q => {
      return `  {
    id: ${q.id},
    topic: ${JSON.stringify(q.topic)},
    question: ${JSON.stringify(q.question)},
    options: [
${q.options.map(opt => `      ${JSON.stringify(opt)}`).join(',\n')}
    ],
    correctAnswer: ${q.correctAnswer},
    explanation: ${JSON.stringify(q.explanation)}
  }`;
    }).join(',\n');

    content = content.replace(assessmentRegex, `${prefix}\n${newMcqStr}\n${suffix}`);
  }

  // 2. Add explanation to snippets that have title but no explanation
  // Replace { \n title: '...', \n code: `...` } to include explanation: '...'
  // We can do regex replacement where title: '...' is followed by code: and explanation is missing
  content = content.replace(/(title:\s*(['"`])(.*?)\2,)(\s*code:)/g, (m, p1, quote, titleText, p4) => {
    return `${p1}\n              explanation: ${JSON.stringify(titleText)},${p4}`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully processed: ${filePath}`);
}

balanceMcqsAndAddSnippetExplanations('src/features/roadmap/data/seo/seoBeginner.data.ts');
balanceMcqsAndAddSnippetExplanations('src/features/roadmap/data/seo/seoIntermediate.data.ts');
balanceMcqsAndAddSnippetExplanations('src/features/roadmap/data/seo/seoAdvanced.data.ts');
