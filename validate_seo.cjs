const ts = require('typescript');
const fs = require('fs');
const path = require('path');

const dir = './src/features/roadmap/data/seo';
const files = ['seoBeginner.data.ts', 'seoIntermediate.data.ts', 'seoAdvanced.data.ts'];

files.forEach(file => {
  const filePath = path.join(dir, file);
  const code = fs.readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true);
  const diags = sourceFile.parseDiagnostics;
  console.log(file, 'diagnostics count:', diags.length);
  if (diags.length > 0) {
    const lines = code.split('\n');
    diags.slice(0, 10).forEach(d => {
      const pos = ts.getLineAndCharacterOfPosition(sourceFile, d.start);
      console.log(`  Line ${pos.line + 1}, Col ${pos.character + 1}: ${d.messageText}`);
      console.log(`    Content: ${lines[pos.line]}`);
    });
  }
});
