import {
  META_BEGINNER_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/meta/metaBeginner.data';
import {
  META_INTERMEDIATE_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/meta/metaIntermediate.data';
import {
  META_ADVANCED_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/meta/metaAdvanced.data';

console.log('=== 90-MCQ QUESTION-BY-QUESTION EVIDENCE AUDIT ===\n');

const assessments = [
  { level: 'Beginner', count: 20, questions: META_BEGINNER_FINAL_ASSESSMENT },
  { level: 'Intermediate', count: 30, questions: META_INTERMEDIATE_FINAL_ASSESSMENT },
  { level: 'Advanced', count: 40, questions: META_ADVANCED_FINAL_ASSESSMENT },
];

assessments.forEach(({ level, count, questions }) => {
  console.log(`\n============================================================`);
  console.log(`LEVEL: ${level.toUpperCase()} FINAL ASSESSMENT (${questions.length} / ${count} MCQs)`);
  console.log(`============================================================\n`);

  questions.forEach((q, idx) => {
    const letters = ['A', 'B', 'C', 'D'];
    const correctLetter = letters[q.correctAnswer];
    const correctText = q.options[q.correctAnswer];
    console.log(`[${level} Q${idx + 1}] Topic: "${q.topic}"`);
    console.log(`  Question: "${q.question}"`);
    console.log(`  Options: ${q.options.map((o, i) => `[${letters[i]}] ${o}`).join(' | ')}`);
    console.log(`  Correct: [${correctLetter}] "${correctText}" (Index: ${q.correctAnswer})`);
    console.log(`  Rationale: "${q.explanation}"`);
    console.log(`  Valid: ${q.options.length === 4 && typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer < 4 && !!q.explanation}`);
    console.log(``);
  });
});
