const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'src', 'features', 'roadmap', 'data', '3d-animation');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Target directory ready:', targetDir);
