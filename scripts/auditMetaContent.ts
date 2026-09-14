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

interface ModuleAuditResult {
  level: string;
  id: string;
  title: string;
  isProject: boolean;
  isAssessment: boolean;
  sectionCount: number;
  totalTheoryChars: number;
  codeSnippetsCount: number;
  totalLineByLineCount: number;
  snippetTitles: string[];
  formulasFound: string[];
  mistakesCount: number;
  proTipsCount: number;
  practiceExercisesCount: number;
  status: 'PASS' | 'FAIL';
  notes: string[];
}

function auditTasks(level: string, tasks: any[]): ModuleAuditResult[] {
  return tasks.map((task) => {
    const isAssessment = task.id.includes('assessment') || task.title.toLowerCase().includes('assessment');
    const isProject = task.type === 'project' || task.title.toLowerCase().includes('project') || task.title.toLowerCase().includes('capstone');

    const lc = task.lessonContent || {};
    const overview = lc.overview || '';
    const syntaxGuide = lc.syntaxGuide || '';
    const analogyHero = lc.analogyHero || '';
    const sections = lc.sections || [];
    const sectionCount = sections.length;

    let sectionsContentChars = 0;
    let codeSnippetsCount = 0;
    let totalLineByLineCount = 0;
    const snippetTitles: string[] = [];
    let mistakesCount = (lc.commonMistakes || []).length;
    let proTipsCount = (lc.proTips || []).length;

    // Direct snippets on task or lessonContent
    (task.codeSnippets || []).concat(lc.codeSnippets || []).forEach((cs: any) => {
      codeSnippetsCount++;
      snippetTitles.push(cs.title || cs.filename || 'Snippet');
      if (cs.lineByLine && Array.isArray(cs.lineByLine)) {
        totalLineByLineCount += cs.lineByLine.length;
      }
    });

    // Section level content, snippets, mistakes, tips
    sections.forEach((s: any) => {
      sectionsContentChars += (s.title || '').length + (s.content || '').length + (s.analogy || '').length;
      if (s.keyTakeaways) {
        sectionsContentChars += s.keyTakeaways.join(' ').length;
      }

      if (s.proTip) proTipsCount++;
      if (s.proTips && Array.isArray(s.proTips)) proTipsCount += s.proTips.length;
      if (s.commonMistakes && Array.isArray(s.commonMistakes)) mistakesCount += s.commonMistakes.length;

      (s.codeSnippets || []).forEach((cs: any) => {
        codeSnippetsCount++;
        snippetTitles.push(cs.title || cs.filename || 'Snippet');
        if (cs.lineByLine && Array.isArray(cs.lineByLine)) {
          totalLineByLineCount += cs.lineByLine.length;
        }
      });
    });

    const totalTheoryChars = overview.length + syntaxGuide.length + analogyHero.length + sectionsContentChars;

    const combinedText = [
      task.description || '',
      overview,
      syntaxGuide,
      analogyHero,
      ...sections.map((s: any) => (s.title || '') + ' ' + (s.content || '') + ' ' + (s.analogy || '')),
      snippetTitles.join(' '),
      ...sections.flatMap((s: any) => (s.codeSnippets || []).map((cs: any) => (cs.code || '') + ' ' + (cs.explanation || '') + ' ' + (cs.lineByLine || []).map((l: any) => l.line + ' ' + l.explanation).join(' '))),
    ].join(' ');

    const formulasFound: string[] = [];
    const formulaKeywords = [
      'CPM', 'CPC', 'CTR', 'CPA', 'ROAS', 'Conversion Rate', 'Cost per Result',
      'Break-even', 'Budget', 'Scaling', 'Frequency', 'AOV', 'MER', 'Margin',
      'EPC', 'LTV', 'CAC', 'Bid Cap', 'Cost Cap', 'Incrementality', 'Lift', 'EMQ'
    ];

    formulaKeywords.forEach((kw) => {
      const reg = new RegExp(`\\b${kw}\\b`, 'i');
      if (reg.test(combinedText)) {
        formulasFound.push(kw.toUpperCase());
      }
    });

    const practiceExercisesCount = (lc.practiceExercises || []).length + (lc.practiceActivity ? 1 : 0);

    const notes: string[] = [];
    if (!isAssessment) {
      if (codeSnippetsCount < 3) {
        notes.push(`Fewer than 3 snippets (${codeSnippetsCount})`);
      }
      if (totalLineByLineCount === 0) {
        notes.push('No line-by-line explanations found');
      }
      if (totalTheoryChars < 500) {
        notes.push(`Theory seems shallow (${totalTheoryChars} chars)`);
      }
      if (mistakesCount === 0 && !isProject) {
        notes.push('No common mistakes');
      }
      if (proTipsCount === 0 && !isProject) {
        notes.push('No pro tips');
      }
    }

    const status = notes.length === 0 ? 'PASS' : 'FAIL';

    return {
      level,
      id: task.id,
      title: task.title,
      isProject,
      isAssessment,
      sectionCount,
      totalTheoryChars,
      codeSnippetsCount,
      totalLineByLineCount,
      snippetTitles,
      formulasFound,
      mistakesCount,
      proTipsCount,
      practiceExercisesCount,
      status,
      notes,
    };
  });
}

function auditMCQs(level: string, questions: any[]) {
  const seenQuestions = new Set<string>();
  const duplicateQuestions: string[] = [];
  const invalidOptions: any[] = [];
  const invalidAnswers: any[] = [];
  const missingExplanations: number[] = [];

  questions.forEach((q, idx) => {
    const qText = q.question.trim().toLowerCase();
    if (seenQuestions.has(qText)) {
      duplicateQuestions.push(`[Q${idx + 1}] ${q.question}`);
    } else {
      seenQuestions.add(qText);
    }

    if (!q.options || q.options.length !== 4) {
      invalidOptions.push({ qNum: idx + 1, optionsCount: q.options?.length });
    }

    if (
      typeof q.correctAnswer !== 'number' ||
      q.correctAnswer < 0 ||
      q.correctAnswer >= (q.options?.length || 0)
    ) {
      invalidAnswers.push({ qNum: idx + 1, correctAnswer: q.correctAnswer });
    }

    if (!q.explanation || q.explanation.trim().length < 10) {
      missingExplanations.push(idx + 1);
    }
  });

  return {
    level,
    totalCount: questions.length,
    duplicateCount: duplicateQuestions.length,
    duplicateQuestions,
    invalidOptions,
    invalidAnswers,
    missingExplanations,
    allQuestions: questions.map((q, i) => ({
      num: i + 1,
      topic: q.topic || 'General',
      question: q.question,
      options: q.options,
      correctAnswerIndex: q.correctAnswer,
      correctAnswerText: q.options[q.correctAnswer],
      explanation: q.explanation,
    })),
  };
}

console.log('=== RIGOROUS EVIDENCE AUDIT: META ADS CURRICULUM & MCQS ===\n');

const beginnerResults = auditTasks('Beginner', META_BEGINNER_TASKS);
const intermediateResults = auditTasks('Intermediate', META_INTERMEDIATE_TASKS);
const advancedResults = auditTasks('Advanced', META_ADVANCED_TASKS);

const allResults = [...beginnerResults, ...intermediateResults, ...advancedResults];
const theoryModules = allResults.filter((r) => !r.isProject && !r.isAssessment);
const projectModules = allResults.filter((r) => r.isProject);
const assessmentTasks = allResults.filter((r) => r.isAssessment);

console.log(`Total Tasks in Course: ${allResults.length}`);
console.log(`- Theory Modules: ${theoryModules.length} (Expected: 40)`);
console.log(`- Hands-on Projects: ${projectModules.length} (Expected: 4)`);
console.log(`- Final Assessment Tasks: ${assessmentTasks.length} (Expected: 3)`);

const failedModules = allResults.filter((r) => r.status === 'FAIL');
console.log(`\nTask Content Audit Status: ${failedModules.length === 0 ? '100% PASS' : 'FAILURES DETECTED'}`);
if (failedModules.length > 0) {
  console.log('Failed items:', failedModules);
}

const beginnerMCQs = auditMCQs('Beginner', META_BEGINNER_FINAL_ASSESSMENT);
const intermediateMCQs = auditMCQs('Intermediate', META_INTERMEDIATE_FINAL_ASSESSMENT);
const advancedMCQs = auditMCQs('Advanced', META_ADVANCED_FINAL_ASSESSMENT);

console.log('\n=== MCQ AUDIT SUMMARY ===');
console.log(`Beginner MCQs: ${beginnerMCQs.totalCount} / 20 (Duplicates: ${beginnerMCQs.duplicateCount}, Invalid Options: ${beginnerMCQs.invalidOptions.length}, Invalid Answers: ${beginnerMCQs.invalidAnswers.length}, Missing Explanations: ${beginnerMCQs.missingExplanations.length})`);
console.log(`Intermediate MCQs: ${intermediateMCQs.totalCount} / 30 (Duplicates: ${intermediateMCQs.duplicateCount}, Invalid Options: ${intermediateMCQs.invalidOptions.length}, Invalid Answers: ${intermediateMCQs.invalidAnswers.length}, Missing Explanations: ${intermediateMCQs.missingExplanations.length})`);
console.log(`Advanced MCQs: ${advancedMCQs.totalCount} / 40 (Duplicates: ${advancedMCQs.duplicateCount}, Invalid Options: ${advancedMCQs.invalidOptions.length}, Invalid Answers: ${advancedMCQs.invalidAnswers.length}, Missing Explanations: ${advancedMCQs.missingExplanations.length})`);
console.log(`Total Official MCQs: ${beginnerMCQs.totalCount + intermediateMCQs.totalCount + advancedMCQs.totalCount} / 90`);

console.log('\n=== DETAILED 40 THEORY MODULES TABLE ===');
theoryModules.forEach((r, idx) => {
  console.log(
    `${idx + 1}. [${r.level}] ${r.id} | "${r.title}" | TheoryChars: ${r.totalTheoryChars} (${r.sectionCount} secs) | Snippets: ${r.codeSnippetsCount} (Line Explanations: ${r.totalLineByLineCount}) | Formulas: [${r.formulasFound.slice(0, 5).join(', ')}] | Mistakes: ${r.mistakesCount} | ProTips: ${r.proTipsCount} | Status: ${r.status}`
  );
});

console.log('\n=== DETAILED 4 PROJECTS TABLE ===');
projectModules.forEach((r, idx) => {
  console.log(
    `${idx + 1}. [${r.level}] ${r.id} | "${r.title}" | TheoryChars: ${r.totalTheoryChars} | Snippets: ${r.codeSnippetsCount} (Line Explanations: ${r.totalLineByLineCount}) | Formulas: [${r.formulasFound.join(', ')}] | Status: ${r.status}`
  );
});
