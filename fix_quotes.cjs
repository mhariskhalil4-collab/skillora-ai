const fs = require('fs');
const path = require('path');

const dir = './src/features/roadmap/data/seo';
const files = ['seoIntermediate.data.ts', 'seoAdvanced.data.ts'];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let code = fs.readFileSync(filePath, 'utf8');
  const lines = code.split('\n');
  let fixedCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.includes('{ line:') && l.includes('explanation:')) {
      // Find where explanation: starts
      const expIdx = l.indexOf(', explanation:');
      if (expIdx !== -1) {
        const linePart = l.substring(0, expIdx);
        const expPart = l.substring(expIdx);
        // linePart should end with a quote matching opening quote of line:
        // check opening quote after line:
        const lineValStart = linePart.indexOf('line:') + 5;
        const trimmedValStart = linePart.substring(lineValStart).trimStart();
        const quoteChar = trimmedValStart[0];
        if (quoteChar === "'" || quoteChar === '"') {
          if (!linePart.trimEnd().endsWith(quoteChar)) {
            console.log(`Fixing ${file} line ${i + 1}:`);
            console.log(`  OLD: ${l}`);
            lines[i] = linePart.trimEnd() + quoteChar + expPart;
            console.log(`  NEW: ${lines[i]}`);
            fixedCount++;
          }
        }
      }
    }
  }

  if (fixedCount > 0) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log(`Saved ${file} with ${fixedCount} fixes.`);
  }
});
