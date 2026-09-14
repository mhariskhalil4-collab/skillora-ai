const fs = require('fs');

['src/features/roadmap/data/seo/seoIntermediate.data.ts', 'src/features/roadmap/data/seo/seoAdvanced.data.ts', 'src/features/roadmap/data/seo/seoBeginner.data.ts'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/status:\s*'available'/g, "status: 'locked'");
  fs.writeFileSync(file, content, 'utf8');
});
console.log('Replaced available status with locked');
