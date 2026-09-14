const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'features', 'roadmap', 'data', 'prompt-engineering');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Target directory created / verified:', targetDir);
