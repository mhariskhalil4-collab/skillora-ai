const fs = require('fs');
const path = require('path');

const dir = './src/features/roadmap/data/seo';
const files = ['seoIntermediate.data.ts', 'seoAdvanced.data.ts'];

files.forEach(file => {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((l, idx) => {
    // Check for backtick that is not starting code: ` or overview: ` or ending `,
    const backticks = (l.match(/`/g) || []).length;
    if (backticks > 0) {
      const isStartOrEnd = l.includes('code: `') || l.includes('overview: `') || l.trim() === '};`,' || l.trim() === '`,' || l.trim() === '`';
      if (!isStartOrEnd) {
        console.log(`${file} Line ${idx + 1}: ${l}`);
      }
    }
  });
});
