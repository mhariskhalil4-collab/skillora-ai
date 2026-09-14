const fs = require('fs');
const path = require('path');

// Helper to escape backticks in strings
function esc(str) {
  return str.replace(/`/g, '\\`').replace(/\${/g, '\\${');
}

// Module builder helper
function makeModule(id, orderIndex, title, description, overview, analogyHero, objectives, syntaxGuide, sections, keyTakeaways, summary, practiceExercises) {
  return {
    id,
    orderIndex,
    title,
    description,
    status: orderIndex === 1 ? "in_progress" : "locked",
    requiresQuiz: true,
    xpReward: 150 + orderIndex * 10,
    level: id.startsWith("htmlcss-beg") ? "beginner" : id.startsWith("htmlcss-int") ? "intermediate" : "advanced",
    resources: [
      {
        id: `res-${id}-1`,
        title: "MDN Web Docs Official Reference",
        type: "documentation",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        id: `res-${id}-2`,
        title: "W3C Standards & Specification",
        type: "article",
        url: "https://www.w3.org/standards/webdesign/htmlcss"
      }
    ],
    lessonContent: {
      overview,
      analogyHero,
      objectives,
      estimatedTime: "45 mins",
      syntaxGuide,
      sections,
      keyTakeaways,
      summary,
      practiceExercises: practiceExercises || [
        {
          title: "Hands-on Practical Implementation",
          instructions: `Review the theory concepts, write the provided HTML/CSS code samples in your local development environment, and verify the rendered visual outcome in Chrome/Firefox DevTools.`
        }
      ]
    },
    questions: []
  };
}

console.log('Course generator engine initialized.');
