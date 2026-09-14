import fs from 'fs';
import path from 'path';

function generateLineByLine(code, filename = '') {
  const lines = code.split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0 && !l.startsWith('#') && !l.startsWith('//') && l !== '{' && l !== '}' && l !== '[' && l !== ']');

  if (lines.length === 0) {
    return [
      { line: 'configuration', explanation: 'Defines configuration parameters for the advertising module.' }
    ];
  }

  const selected = lines.slice(0, 4);
  return selected.map(l => {
    let cleanLine = l.replace(/'/g, "\\'").replace(/"/g, '\\"');
    if (cleanLine.length > 60) {
      cleanLine = cleanLine.substring(0, 57) + '...';
    }
    let explanation = 'Defines parameter logic and operational settings for this component.';
    if (l.includes('Budget') || l.includes('Spend') || l.includes('Price') || l.includes('Revenue') || l.includes('CPA') || l.includes('ROAS') || l.includes('CPM') || l.includes('CTR')) {
      explanation = 'Configures critical unit economic and financial pacing thresholds.';
    } else if (l.includes('Targeting') || l.includes('Audience') || l.includes('Age') || l.includes('Geo') || l.includes('LAL')) {
      explanation = 'Specifies target demographic parameters and delivery audience segmentation.';
    } else if (l.includes('Objective') || l.includes('Optimization') || l.includes('Action') || l.includes('Event')) {
      explanation = 'Instructs the Meta machine learning auction engine on target conversion signals.';
    } else if (l.includes('Rule') || l.includes('Condition') || l.includes('Threshold') || l.includes('Trigger')) {
      explanation = 'Establishes automated guardrails and execution rules to protect account stability.';
    } else if (l.includes('Creative') || l.includes('Ad') || l.includes('Hook') || l.includes('Headline') || l.includes('Text')) {
      explanation = 'Delivers targeted copy and creative angles matched to audience awareness levels.';
    }
    return { line: cleanLine, explanation };
  });
}

const files = [
  'd:/Skillora AI/src/features/roadmap/data/meta/metaBeginner.data.ts',
  'd:/Skillora AI/src/features/roadmap/data/meta/metaIntermediate.data.ts',
  'd:/Skillora AI/src/features/roadmap/data/meta/metaAdvanced.data.ts'
];

for (const filePath of files) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match codeSnippet blocks:
  // { language: '...', filename: '...', code: `...` } without lineByLine:
  // or with explanation: '...' but no lineByLine
  
  // Let's parse all sections and inject lineByLine
  // We can look for `code: \`([\s\S]*?)\`([,\s]*explanation:[^\n]+)?\s*(\n\s*lineByLine:[^\n]+)?`
  
  // A cleaner approach: replace `code: `...`` when NOT followed by `lineByLine`
  const snippetRegex = /\{\s*language:\s*['"]([^'"]+)['"],\s*(?:filename:\s*['"]([^'"]+)['"],\s*)?code:\s*`([\s\S]*?)`(?:\s*,\s*explanation:\s*['"]([^'"]+)['"])?\s*(?:\s*,\s*lineByLine:\s*\[[\s\S]*?\])?\s*\}/g;

  let matchCount = 0;
  let updatedContent = content.replace(snippetRegex, (match, lang, filename, code, explanation) => {
    // If it already has lineByLine, check if it's non-empty
    if (match.includes('lineByLine: [') && !match.includes('lineByLine: []')) {
      return match;
    }

    matchCount++;
    const lineByLineItems = generateLineByLine(code, filename);
    const lineByLineStr = lineByLineItems
      .map(item => `                { line: '${item.line}', explanation: '${item.explanation}' }`)
      .join(',\n');

    let res = `{\n              language: '${lang}',`;
    if (filename) {
      res += `\n              filename: '${filename}',`;
    }
    res += `\n              code: \`${code}\`,`;
    if (explanation) {
      res += `\n              explanation: '${explanation}',`;
    }
    res += `\n              lineByLine: [\n${lineByLineStr}\n              ]\n            }`;
    return res;
  });

  console.log(`Updated ${matchCount} snippets in ${path.basename(filePath)}`);
  fs.writeFileSync(filePath, updatedContent, 'utf8');
}
