import { test, expect } from '@playwright/test';
import { SHOPIFY_BEGINNER_TASKS } from '../src/features/roadmap/data/shopify/shopifyBeginner.data';
import { SHOPIFY_INTERMEDIATE_TASKS } from '../src/features/roadmap/data/shopify/shopifyIntermediate.data';
import { SHOPIFY_ADVANCED_TASKS } from '../src/features/roadmap/data/shopify/shopifyAdvanced.data';
import { META_BEGINNER_TASKS } from '../src/features/roadmap/data/meta/metaBeginner.data';
import { META_INTERMEDIATE_TASKS } from '../src/features/roadmap/data/meta/metaIntermediate.data';
import { META_ADVANCED_TASKS } from '../src/features/roadmap/data/meta/metaAdvanced.data';

test('Check snippet counts for each module', () => {
  const allTasks = [
    ...SHOPIFY_BEGINNER_TASKS.map(t => ({ course: 'shopify', level: 'beginner', ...t })),
    ...SHOPIFY_INTERMEDIATE_TASKS.map(t => ({ course: 'shopify', level: 'intermediate', ...t })),
    ...SHOPIFY_ADVANCED_TASKS.map(t => ({ course: 'shopify', level: 'advanced', ...t })),
    ...META_BEGINNER_TASKS.map(t => ({ course: 'meta', level: 'beginner', ...t })),
    ...META_INTERMEDIATE_TASKS.map(t => ({ course: 'meta', level: 'intermediate', ...t })),
    ...META_ADVANCED_TASKS.map(t => ({ course: 'meta', level: 'advanced', ...t })),
  ];

  const issues: string[] = [];

  for (const t of allTasks) {
    if (t.lessonContent && !t.isFinalAssessment) {
      const snippets = t.lessonContent.sections.flatMap(s => s.codeSnippets || []);
      if (snippets.length < 3) {
        issues.push(`${t.course} ${t.level} - ${t.id} (${t.title}): has only ${snippets.length} snippets`);
      }
      for (const [idx, s] of snippets.entries()) {
        if (!s.lineByLine || s.lineByLine.length === 0) {
          issues.push(`${t.course} ${t.level} - ${t.id} (${t.title}) snippet ${idx} (${s.filename || 'no-file'}): missing lineByLine`);
        }
      }
    }
  }

  console.log('--- MODULE SNIPPET & LINE-BY-LINE AUDIT ---');
  console.log('Total issues:', issues.length);
  console.log(issues.join('\n'));

  expect(issues.length).toBe(0);
});
