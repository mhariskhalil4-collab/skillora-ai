const fs = require('fs');

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace ` inside overview: `...` where it is like `something`
  // We can do this safely by matching overview: `...` blocks and replacing inline backticks with single quotes or escaped backticks
  content = content.replace(/overview:\s*`([\s\S]*?)`,\s*\n\s*analogyHero/g, (match, p1) => {
    const cleaned = p1.replace(/`([^`\n]+)`/g, "'$1'");
    return `overview: \`${cleaned}\`,\n      analogyHero`;
  });

  // Also in syntaxGuide: `...`
  content = content.replace(/syntaxGuide:\s*`([\s\S]*?)`,\s*\n\s*sections/g, (match, p1) => {
    const cleaned = p1.replace(/`([^`\n]+)`/g, "'$1'");
    return `syntaxGuide: \`${cleaned}\`,\n      sections`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

cleanFile('src/features/roadmap/data/seo/seoIntermediate.data.ts');
cleanFile('src/features/roadmap/data/seo/seoAdvanced.data.ts');
console.log('Cleaned stray backticks in overview and syntaxGuide');
