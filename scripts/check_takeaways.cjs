const fs = require('fs');
const files = [
  './src/features/roadmap/data/web-development/webDevelopmentBeginner.data.ts',
  './src/features/roadmap/data/web-development/webDevelopmentIntermediate.data.ts',
  './src/features/roadmap/data/web-development/webDevelopmentAdvanced.data.ts'
];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  // Match each task
  const taskMatches = content.split(/id:\s*['"]web-dev-/);
  for (let i = 1; i < taskMatches.length; i++) {
    const block = taskMatches[i];
    const taskIdMatch = block.match(/^([a-z0-9-]+)/);
    const taskId = taskIdMatch ? taskIdMatch[1] : 'unknown';
    
    // Check if it has lessonContent
    if (block.includes('lessonContent:')) {
      const takeMatch = block.match(/keyTakeaways:\s*\[([\s\S]*?)\]/);
      if (takeMatch) {
        // Count entries
        const items = takeMatch[1].split(',\n').map(s => s.trim()).filter(s => s.length > 5);
        if (items.length < 3) {
          console.log(`File: ${file}, Task: web-dev-${taskId}, Takeaways count: ${items.length}`);
          console.log(takeMatch[0]);
        }
      } else {
        console.log(`File: ${file}, Task: web-dev-${taskId} MISSING keyTakeaways`);
      }
    }
  }
}
