const fs = require('fs');
const ts = require('typescript');

['src/features/roadmap/data/seo/seoIntermediate.data.ts', 'src/features/roadmap/data/seo/seoAdvanced.data.ts'].forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  const sourceFile = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true);
  console.log(file, 'parse diagnostics:', sourceFile.parseDiagnostics.length);
  sourceFile.parseDiagnostics.slice(0, 10).forEach(d => {
    const { line, character } = sourceFile.getLineAndCharacterOfPosition(d.start);
    const msg = typeof d.messageText === 'string' ? d.messageText : d.messageText.messageText;
    console.log(`  Line ${line + 1}, Col ${character + 1}: ${msg}`);
  });
});
