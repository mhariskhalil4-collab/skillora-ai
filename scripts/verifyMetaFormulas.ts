import {
  META_BEGINNER_TASKS,
  META_BEGINNER_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/meta/metaBeginner.data';
import {
  META_INTERMEDIATE_TASKS,
  META_INTERMEDIATE_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/meta/metaIntermediate.data';
import {
  META_ADVANCED_TASKS,
  META_ADVANCED_FINAL_ASSESSMENT,
} from '../src/features/roadmap/data/meta/metaAdvanced.data';

console.log('=== AUDITING CALCULATIONS & FORMULAS IN META ADS ===\n');

// 1. Audit MCQs with calculations
console.log('--- AUDITING MATH IN FINAL ASSESSMENTS ---');

const allAssessments = [
  { level: 'Beginner', questions: META_BEGINNER_FINAL_ASSESSMENT },
  { level: 'Intermediate', questions: META_INTERMEDIATE_FINAL_ASSESSMENT },
  { level: 'Advanced', questions: META_ADVANCED_FINAL_ASSESSMENT },
];

allAssessments.forEach(({ level, questions }) => {
  questions.forEach((q, idx) => {
    const isMath = /cpm|cpc|ctr|cpa|roas|spend|revenue|break-even|\$|\%/i.test(q.question);
    if (isMath) {
      console.log(`\n[${level} Q${idx + 1}] Topic: ${q.topic}`);
      console.log(`Question: ${q.question}`);
      console.log(`Options: ${q.options.map((o, i) => `[${String.fromCharCode(65 + i)}] ${o}`).join(', ')}`);
      console.log(`Correct Answer: [${String.fromCharCode(65 + q.correctAnswer)}] ${q.options[q.correctAnswer]}`);
      console.log(`Explanation: ${q.explanation}`);
    }
  });
});
