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

console.log('=== SOURCE-LEVEL DEEP INSPECTION FOR ALL 40 MODULES ===\n');

const allTaskSets = [
  { level: 'Beginner', file: 'metaBeginner.data.ts', tasks: META_BEGINNER_TASKS },
  { level: 'Intermediate', file: 'metaIntermediate.data.ts', tasks: META_INTERMEDIATE_TASKS },
  { level: 'Advanced', file: 'metaAdvanced.data.ts', tasks: META_ADVANCED_TASKS },
];

allTaskSets.forEach(({ level, file, tasks }) => {
  tasks.forEach((t) => {
    const isProject = t.type === 'project' || t.title.toLowerCase().includes('project') || t.title.toLowerCase().includes('capstone');
    const isAssessment = t.id.includes('assessment') || t.title.toLowerCase().includes('assessment');
    if (isAssessment) return;

    const lc = t.lessonContent || {};
    const sections = lc.sections || [];
    const snippets = (t.codeSnippets || []).concat(lc.codeSnippets || []).concat(
      sections.flatMap((s: any) => s.codeSnippets || [])
    );

    console.log(`\n------------------------------------------------------------`);
    console.log(`[${level}] ${t.id} - ${t.title}`);
    console.log(`File: ${file}`);
    console.log(`Is Project: ${isProject}`);
    console.log(`Objectives Count: ${lc.objectives?.length || 0}`);
    console.log(`Objectives Sample: "${(lc.objectives || [])[0] || 'N/A'}"`);
    console.log(`Syntax Guide Length: ${lc.syntaxGuide?.length || 0}`);
    console.log(`Sections Count: ${sections.length}`);
    sections.forEach((s: any, idx: number) => {
      console.log(`  Section ${idx + 1}: "${s.title}" (Analogy: ${!!s.analogy}, ContentLen: ${s.content?.length || 0}, Takeaways: ${s.keyTakeaways?.length || 0})`);
    });
    console.log(`Snippets Count: ${snippets.length}`);
    snippets.forEach((cs: any, idx: number) => {
      console.log(`  Snippet ${idx + 1} [${cs.language || 'text'}]: "${cs.title || cs.filename || 'Snippet'}" - ${cs.lineByLine?.length || 0} line explanations. Expl: "${cs.explanation?.slice(0, 60)}..."`);
    });
    console.log(`Common Mistakes: ${sections.flatMap((s: any) => s.commonMistakes || []).concat(lc.commonMistakes || []).length}`);
    console.log(`Pro Tips: ${sections.map((s: any) => s.proTip).filter(Boolean).concat(lc.proTips || []).length}`);
    console.log(`Practice Exercises: ${(lc.practiceExercises || []).length + (lc.practiceActivity ? 1 : 0)}`);
  });
});
