const fs = require('fs');
const path = require('path');

// Ensure output directory exists
const targetDir = path.resolve(__dirname, '../src/features/roadmap/data/shopify-developer');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Target directory ready:', targetDir);
