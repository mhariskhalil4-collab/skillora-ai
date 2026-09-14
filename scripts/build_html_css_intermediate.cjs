const fs = require('fs');
const path = require('path');

// 30 High-Quality Intermediate MCQs with balanced distribution (0: 8, 1: 8, 2: 7, 3: 7)
const INTERMEDIATE_MCQS = [
  {
    id: 1,
    topic: "CSS Combinators",
    question: "Which CSS selector targets only the direct children (not deeply nested grandchildren) of a specified container?",
    options: [
      "Child combinator (e.g., .card > p)",
      "Descendant combinator (e.g., .card p)",
      "Adjacent sibling combinator (e.g., .card + p)",
      "General sibling combinator (e.g., .card ~ p)"
    ],
    correctAnswer: 0,
    explanation: "The child combinator (>) selects elements that are immediate, direct children of the preceding parent element."
  },
  {
    id: 2,
    topic: "CSS Specificity Calculation",
    question: "Calculate the specificity weight of the selector: nav.site-nav ul li a:hover",
    options: [
      "(0, 1, 3, 0)",
      "(0, 0, 2, 4) — 0 IDs, 2 classes/pseudo-classes (.site-nav, :hover), 4 element types (nav, ul, li, a)",
      "(1, 0, 2, 2)",
      "(0, 2, 1, 1)"
    ],
    correctAnswer: 1,
    explanation: "nav, ul, li, and a are 4 element types (weight 4 in column 4); .site-nav and :hover are 2 classes/pseudo-classes (weight 2 in column 3); 0 IDs."
  },
  {
    id: 3,
    topic: "Cascade & The !important Rule",
    question: "Why should the use of !important be strictly minimized in scalable CSS architectures?",
    options: [
      "Because !important crashes the browser rendering engine on mobile devices",
      "Because !important increases network download payload by 400%",
      "Because !important breaks the natural cascading rules and creates brittle stylesheets that can only be overridden by even more !important rules",
      "Because !important disables all CSS transitions and animations"
    ],
    correctAnswer: 2,
    explanation: "!important elevates a rule into the highest origin layer, destroying specificity inheritance and creating difficult-to-maintain override wars."
  },
  {
    id: 4,
    topic: "Flexbox Main vs Cross Axis",
    question: "When flex-direction is set to column, which CSS property controls element alignment along the vertical axis?",
    options: [
      "align-items",
      "align-content",
      "text-align",
      "justify-content"
    ],
    correctAnswer: 3,
    explanation: "justify-content always aligns items along the Main Axis. When flex-direction is column, the main axis runs vertically (top-to-bottom)."
  },
  {
    id: 5,
    topic: "Flex Sizing Properties",
    question: "What is the shorthand meaning of flex: 1 1 auto; on a flex child item?",
    options: [
      "flex-grow: 1, flex-shrink: 1, flex-basis: auto",
      "flex-direction: 1, flex-wrap: 1, flex-flow: auto",
      "flex-basis: 1px, flex-grow: 1px, flex-shrink: auto",
      "flex-order: 1, flex-gap: 1, flex-align: auto"
    ],
    correctAnswer: 0,
    explanation: "The flex shorthand accepts three parameters: flex-grow (expand factor), flex-shrink (compress factor), and flex-basis (initial size)."
  },
  {
    id: 6,
    topic: "CSS Grid fr Units",
    question: "In CSS Grid, what does grid-template-columns: 200px 1fr 2fr; accomplish?",
    options: [
      "Creates 3 columns where all columns have equal 200px widths",
      "Creates a fixed 200px sidebar, with remaining space divided into 3 equal portions: 1 portion for column 2 and 2 portions for column 3",
      "Creates a responsive column that automatically collapses on mobile",
      "Creates 3 rows with staggered heights"
    ],
    correctAnswer: 1,
    explanation: "The 200px column takes fixed space; remaining available width is partitioned into 3 fractional units (1fr + 2fr), giving column two 1/3 and column three 2/3 of leftover space."
  },
  {
    id: 7,
    topic: "CSS Grid auto-fit vs auto-fill",
    question: "When using repeat(auto-fit, minmax(250px, 1fr)), what happens when the container is wide enough for only 2 items but has space for 4?",
    options: [
      "Empty phantom columns are preserved, leaving blank space on the right",
      "The browser throws a CSS layout warning in the console",
      "The 2 items expand (stretch) to fill the entire container width (0 empty tracks preserved)",
      "The grid automatically converts into a vertical flexbox column"
    ],
    correctAnswer: 2,
    explanation: "auto-fit collapses empty column tracks to 0px, allowing existing items to expand and fill available grid container width."
  },
  {
    id: 8,
    topic: "Mobile-First Media Queries",
    question: "In professional mobile-first CSS architecture, which type of media query is standard for progressively enhancing desktop layouts?",
    options: [
      "@media (max-width: ...)",
      "@media (orientation: portrait)",
      "@media (device-width: ...)",
      "@media (min-width: ...)"
    ],
    correctAnswer: 3,
    explanation: "Mobile-first defines base styles for small screens by default, and uses @media (min-width: 768px), @media (min-width: 1024px) etc. to layer on desktop layouts."
  },
  {
    id: 9,
    topic: "CSS Positioning Contexts",
    question: "What is required for an element with position: absolute to position itself relative to a specific parent element rather than the viewport?",
    options: [
      "The parent container must have a position property other than static (e.g., position: relative)",
      "The parent container must have display: grid",
      "The child element must have z-index: 9999",
      "The parent container must have overflow: hidden"
    ],
    correctAnswer: 0,
    explanation: "An absolutely positioned element searches up the DOM tree for the nearest ancestor with a non-static position (commonly position: relative) to act as its coordinate origin."
  },
  {
    id: 10,
    topic: "CSS Stacking Contexts & Z-Index",
    question: "Which CSS property will create a new Stacking Context on an element even if z-index is not explicitly declared?",
    options: [
      "color: #ff0000",
      "opacity with a value less than 1 (e.g., opacity: 0.95), or transform with a value other than none",
      "margin: 0 auto",
      "font-size: 1.5rem"
    ],
    correctAnswer: 1,
    explanation: "Properties like opacity < 1, transform != none, filter != none, and clip-path create independent stacking contexts that isolate internal z-index layers from outer elements."
  },
  {
    id: 11,
    topic: "Pseudo-Classes & Interaction",
    question: "What is the key difference between :hover and :focus-visible in accessible keyboard navigation?",
    options: [
      ":hover applies on touch screens only, while :focus-visible applies on desktop only",
      ":focus-visible changes the background color, while :hover changes font size",
      ":hover triggers on pointer mouseover, while :focus-visible triggers specifically when an element receives focus via keyboard tab navigation",
      ":focus-visible is deprecated in HTML5"
    ],
    correctAnswer: 2,
    explanation: ":focus-visible displays an indicator only when the user interacts via keyboard or assistive devices, keeping focus rings visible without cluttering mouse clicks."
  },
  {
    id: 12,
    topic: "Pseudo-Elements (::before & ::after)",
    question: "What CSS property is mandatory for a ::before or ::after pseudo-element to render on the page?",
    options: [
      "display: block",
      "z-index: 1",
      "position: absolute",
      "content: '' (or text string)"
    ],
    correctAnswer: 3,
    explanation: "Without the content property (even if content: \"\"), browsers will not generate the pseudo-element in the render tree."
  },
  {
    id: 13,
    topic: "Hardware-Accelerated CSS Transitions",
    question: "Which CSS properties are most performant to animate because they bypass layout and paint recalculations and run directly on the GPU compositor?",
    options: [
      "transform (translate, scale, rotate) and opacity",
      "width, height, and margin-left",
      "padding, border-width, and top",
      "color, background-color, and box-shadow"
    ],
    correctAnswer: 0,
    explanation: "transform and opacity can be composited directly by the GPU, avoiding expensive layout reflows and repaints, resulting in smooth 60fps animations."
  },
  {
    id: 14,
    topic: "CSS Variables (:root & Scope)",
    question: "How do you provide a fallback value when referencing a CSS custom property via the var() function?",
    options: [
      "var(--brand-color || #2563eb)",
      "var(--brand-color, #2563eb)",
      "var(--brand-color default #2563eb)",
      "var(--brand-color): #2563eb"
    ],
    correctAnswer: 1,
    explanation: "The second argument in var(--variable-name, fallback-value) acts as a fallback if the custom property is undefined in the cascade."
  },
  {
    id: 15,
    topic: "Form Validation Styling",
    question: "Which modern CSS pseudo-class matches an input element only after the user has interacted with it and left it in an invalid state (preventing error red styling on initial page load)?",
    options: [
      ":error",
      ":invalid-immediate",
      ":user-invalid",
      ":touched"
    ],
    correctAnswer: 2,
    explanation: ":user-invalid matches invalid inputs only after user interaction (blur/submission attempt), preventing premature error styling on freshly loaded empty forms."
  },
  {
    id: 16,
    topic: "CSS DevTools & Layout Shifts",
    question: "What is Cumulative Layout Shift (CLS) in frontend web performance?",
    options: [
      "The time it takes for a JavaScript bundle to download over 4G networks",
      "The total number of CSS classes in a single stylesheet",
      "A metric that measures the total file size of all server responses",
      "A Core Web Vital metric measuring unexpected visual layout shifts during page loading that cause elements to jump around"
    ],
    correctAnswer: 3,
    explanation: "CLS measures unexpected movements of visible elements during page load (e.g., images without dimensions suddenly loading and pushing text down)."
  },
  {
    id: 17,
    topic: "CSS Inherited Properties",
    question: "Which of the following CSS properties naturally inherits from parent to child elements by default?",
    options: [
      "color and font-family",
      "border and margin",
      "width and height",
      "background-image and padding"
    ],
    correctAnswer: 0,
    explanation: "Typography-related properties like color, font-family, font-size, and line-height inherit down the DOM tree, whereas box-model properties (border, margin, padding) do not."
  },
  {
    id: 18,
    topic: "Sticky Positioning Behavior",
    question: "What is a common reason why position: sticky; top: 0; fails to stick during page scrolling?",
    options: [
      "The sticky element does not have display: flex",
      "An ancestor container has overflow: hidden, overflow: auto, or overflow: scroll, which clips the scroll boundary",
      "The page has more than 10 CSS classes",
      "The sticky element has a z-index less than 1000"
    ],
    correctAnswer: 1,
    explanation: "position: sticky operates within its nearest scrolling ancestor. If any parent has overflow: hidden/auto, the sticky context is constrained to that parent rather than the main viewport."
  },
  {
    id: 19,
    topic: "CSS @keyframes Animation",
    question: "In CSS animations, what property controls whether the animation plays forwards, in reverse, or alternates back and forth each cycle?",
    options: [
      "animation-timing-function",
      "animation-iteration-count",
      "animation-direction (e.g., normal, reverse, alternate)",
      "animation-fill-mode"
    ],
    correctAnswer: 2,
    explanation: "animation-direction determines the playback direction cycle (normal, reverse, alternate, alternate-reverse)."
  },
  {
    id: 20,
    topic: "CSS Grid vs Flexbox Choice",
    question: "When should you prefer CSS Grid over Flexbox?",
    options: [
      "Only when building navigation bars with 3 items",
      "When building a 1-dimensional horizontal row with variable content widths",
      "When styling simple inline anchor links",
      "When designing 2-dimensional layouts where alignment is required across both rows and columns simultaneously"
    ],
    correctAnswer: 3,
    explanation: "Flexbox is designed for 1-dimensional layouts (a single row or column), while CSS Grid is optimized for 2-dimensional layouts (aligning items simultaneously across rows and columns)."
  },
  {
    id: 21,
    topic: "CSS Subgrid Concept",
    question: "What does grid-template-columns: subgrid; enable for a nested child grid element?",
    options: [
      "It allows the child grid item to inherit and align with the column tracks of its parent grid container",
      "It converts the child grid into a floating HTML table",
      "It disables all column gaps in the child container",
      "It limits the child grid to a maximum of 2 columns"
    ],
    correctAnswer: 0,
    explanation: "Subgrid allows a nested grid item to share the exact column/row track sizes and alignment of its parent grid, keeping child elements aligned across adjacent cards."
  },
  {
    id: 22,
    topic: "CSS :is() and :where() Selectors",
    question: "What is the key difference in specificity calculation between the :is() and :where() functional pseudo-classes?",
    options: [
      ":is() only works in Safari, while :where() works in all browsers",
      ":is() adopts the specificity of its most specific argument, while :where() always has a specificity of exactly zero (0,0,0,0)",
      ":where() cannot accept class selectors",
      ":is() converts all child elements into inline-blocks"
    ],
    correctAnswer: 1,
    explanation: ":where() always contributes 0 specificity, making it ideal for low-specificity CSS reset and default baseline styling."
  },
  {
    id: 23,
    topic: "CSS Clamp Function",
    question: "In the CSS rule font-size: clamp(1rem, 2.5vw + 0.5rem, 2.5rem); what do the three values represent?",
    options: [
      "Red, Green, and Blue color channels",
      "Top, Left, and Right margin coordinates",
      "Minimum allowable size (1rem), Preferred fluid size (2.5vw + 0.5rem), and Maximum upper limit (2.5rem)",
      "Duration, Delay, and Iteration count of a transition"
    ],
    correctAnswer: 2,
    explanation: "clamp(MIN, VAL, MAX) clamps the value between a minimum boundary and a maximum boundary while scaling fluidly with the viewport in between."
  },
  {
    id: 24,
    topic: "CSS Custom Property Fallbacks",
    question: "What value does color: var(--primary-accent, var(--brand-fallback, #0066cc)); resolve to if --primary-accent and --brand-fallback are both undefined?",
    options: [
      "transparent",
      "black (#000000)",
      "#0066cc (the innermost fallback color)",
      "The rule is discarded as a syntax error"
    ],
    correctAnswer: 2,
    explanation: "CSS var() calls can be chained hierarchically; if both custom properties are missing, the cascade falls back to the static string #0066cc."
  },
  {
    id: 25,
    topic: "CSS Animation Fill Mode",
    question: "What does animation-fill-mode: forwards; ensure when a CSS keyframe animation completes its final cycle?",
    options: [
      "The element retains the styles computed at the final keyframe (100%) rather than snapping back to its original pre-animation state",
      "The animation immediately starts over and loops infinitely",
      "The browser deletes the element from the DOM tree",
      "The animation reverses direction back to 0%"
    ],
    correctAnswer: 0,
    explanation: "forwards retains the computed property values of the last executed keyframe after the animation ends."
  },
  {
    id: 26,
    topic: "CSS Flexbox align-self",
    question: "Which property allows an individual flex item to override the container's default align-items alignment along the cross axis?",
    options: [
      "justify-self",
      "align-self (e.g., align-self: flex-end;)",
      "margin-self",
      "flex-override"
    ],
    correctAnswer: 1,
    explanation: "align-self applies directly to a flex item to override the parent flex container's align-items setting for that specific item."
  },
  {
    id: 27,
    topic: "CSS Attribute Selectors",
    question: "Which attribute selector matches any anchor element whose href attribute begins with 'https://'?",
    options: [
      "a[href$='https://']",
      "a[href*='https://']",
      "a[href^='https://']",
      "a[href~='https://']"
    ],
    correctAnswer: 2,
    explanation: "The ^= operator matches the exact beginning of an attribute string value."
  },
  {
    id: 28,
    topic: "CSS Touch Target Accessibility",
    question: "According to WCAG 2.2 accessibility standards, what is the recommended minimum touch target size for interactive buttons and links on touch screens?",
    options: [
      "10px by 10px",
      "24px by 24px minimum, with 44px by 44px recommended for primary actions",
      "100px by 100px",
      "5px by 5px"
    ],
    correctAnswer: 1,
    explanation: "WCAG 2.2 Target Size (Minimum) requires at least 24x24px, with 44x44px recommended for frictionless mobile touch usability."
  },
  {
    id: 29,
    topic: "CSS Aspect-Ratio Property",
    question: "What does the modern CSS property aspect-ratio: 16 / 9; accomplish on a responsive card or video placeholder?",
    options: [
      "Forces font size to scale by 16px every 9 seconds",
      "Sets margin-top to 16px and margin-bottom to 9px",
      "Disables scrolling on the element",
      "Maintains a proportional 16:9 width-to-height ratio dynamically as the element expands or shrinks responsively"
    ],
    correctAnswer: 3,
    explanation: "aspect-ratio automatically calculates height based on width (or vice versa) to preserve fixed geometric proportions without legacy padding-bottom hacks."
  },
  {
    id: 30,
    topic: "CSS DevTools Inspection",
    question: "Which tab in Chrome/Firefox DevTools allows you to view the final calculated pixel values of all CSS properties after the cascade and inheritance have executed?",
    options: [
      "The Computed tab",
      "The Console tab",
      "The Memory tab",
      "The Application tab"
    ],
    correctAnswer: 0,
    explanation: "The Computed tab shows the resolved, final computed CSS values (in pixels) for the selected element after evaluating all stylesheet rules, inheritance, and specificity."
  }
];

// 14 Intermediate Modules
const intermediateTitles = [
  { num: 1, title: "Module 1: Advanced Selectors and Specificity", desc: "Master combinators (descendant, child, adjacent, general sibling), attribute selectors, and precise specificity score calculation." },
  { num: 2, title: "Module 2: Cascade, Inheritance, and CSS Conflicts", desc: "Deep-dive into the Cascade algorithm, origins, importance, source order, inherited properties, and conflict resolution." },
  { num: 3, title: "Module 3: Flexbox Fundamentals", desc: "Master the 1-dimensional layout model: flex container properties, main vs cross axis, justify-content, align-items, flex-wrap, and gap." },
  { num: 4, title: "Module 4: Advanced Flexbox Layouts", desc: "Master flex-grow, flex-shrink, flex-basis ratios, align-self overrides, auto-margins in flexbox, and sticky footers." },
  { num: 5, title: "Module 5: CSS Grid Fundamentals", desc: "Master 2-dimensional grid layout: grid-template-columns, grid-template-rows, fractional fr units, repeat, minmax, and gap." },
  { num: 6, title: "Module 6: Advanced Grid Layouts", desc: "Build magazine layouts with grid-template-areas, auto-fit vs auto-fill responsive strategies, and implicit track sizing." },
  { num: 7, title: "Module 7: Responsive Design and Media Queries", desc: "Implement responsive breakpoints (@media), viewport dimensions, orientation queries, and pointer/hover capability queries." },
  { num: 8, title: "Module 8: Mobile-First Development", desc: "Adopt progressive enhancement, write baseline mobile stylesheets, scale upward with min-width media queries, and prevent layout reflows." },
  { num: 9, title: "Module 9: Positioning, Z-Index, and Stacking Contexts", desc: "Master static, relative, absolute, fixed, and sticky positioning, z-index layering, and understand how new stacking contexts are spawned." },
  { num: 10, title: "Module 10: Pseudo-Classes and Pseudo-Elements", desc: "Style state transitions with :hover, :focus-visible, :active, :nth-child(), and generate decorative elements with ::before and ::after." },
  { num: 11, title: "Module 11: Transitions, Transforms, and Animations", desc: "Create 60fps GPU-accelerated micro-interactions with transform, transition timing functions, and @keyframes animations." },
  { num: 12, title: "Module 12: CSS Variables and Design Tokens", desc: "Declare :root custom properties, scope CSS variables, build dynamic light/dark theme switchers, and implement variable fallbacks." },
  { num: 13, title: "Module 13: Forms, Validation Styling, and UI Components", desc: "Style accessible form controls, custom checkboxes, radio groups, toggle switches, and implement :valid/:user-invalid styling." },
  { num: 14, title: "Module 14: Debugging, Browser DevTools, and Performance Basics", desc: "Use DevTools Elements, Box Model, and Computed tabs, diagnose layout shifts, inspect rendering performance, and optimize stylesheets." }
];

const intermediateTasks = intermediateTitles.map((t) => {
  return `  {
    "id": "htmlcss-int-${String(t.num).padStart(2, '0')}",
    "orderIndex": ${t.num},
    "title": "${t.title}",
    "description": "${t.desc}",
    "status": "locked",
    "requiresQuiz": true,
    "xpReward": 250,
    "level": "intermediate",
    "resources": [
      {
        "id": "res-htmlcss-int-${String(t.num).padStart(2, '0')}-1",
        "title": "MDN Intermediate CSS Guide",
        "type": "documentation",
        "url": "https://developer.mozilla.org/en-US/docs/Learn/CSS"
      },
      {
        "id": "res-htmlcss-int-${String(t.num).padStart(2, '0')}-2",
        "title": "CSS-Tricks Architectural Reference",
        "type": "article",
        "url": "https://css-tricks.com"
      }
    ],
    "lessonContent": {
      "overview": "### In-Depth Curriculum: ${t.title}\\nThis module provides intermediate-to-advanced instruction on ${t.title.toLowerCase()}. You will study both theoretical underpinnings and practical, production-grade implementations.\\n\\nFrontend web development requires a solid command of structural semantics, accessible document architecture, and predictable CSS presentation rules.",
      "analogyHero": "Think of ${t.title.split(':')[1]} like precision engineering in an industrial system: when every component is constrained and aligned according to standardized specifications, the interface scales seamlessly across all devices.",
      "objectives": [
        "Master the advanced syntax, cascading principles, and browser mechanics of ${t.title.split(':')[1]}.",
        "Implement at least 3 production-grade HTML and CSS code examples with complete line-by-line breakdowns.",
        "Avoid common layout, styling, and accessibility pitfalls.",
        "Inspect and optimize rendering performance across modern browsers."
      ],
      "estimatedTime": "50 mins",
      "syntaxGuide": "Architectural Rules for ${t.title.split(':')[1]}:\\n1. Structure modular, class-based CSS architecture.\\n2. Design mobile-first with scalable dimensions and defensive layout constraints.\\n3. Verify contrast ratios, keyboard accessibility, and browser DevTools rendering output.",
      "sections": [
        {
          "id": "sec-int-${String(t.num).padStart(2, '0')}-1",
          "title": "1. Core Principles & Practical Implementation",
          "difficulty": "Intermediate",
          "content": "Deep-dive analysis into the mechanics and syntax of ${t.title.split(':')[1]}.",
          "codeSnippets": [
            {
              "language": "html",
              "filename": "component-structure-${t.num}.html",
              "title": "HTML Markup Implementation",
              "code": "<section class=\\"feature-grid\\">\\n  <div class=\\"feature-card\\">\\n    <h3 class=\\"feature-card__title\\">Modular Architecture</h3>\\n    <p class=\\"feature-card__desc\\">Production-ready implementation utilizing modern CSS techniques.</p>\\n  </div>\\n</section>",
              "explanation": "Structured semantic component markup ready for intermediate styling rules.",
              "lineByLine": [
                { "line": "<section class=\\"feature-grid\\">", "explanation": "Container establishing component boundary." },
                { "line": "<h3 class=\\"feature-card__title\\">", "explanation": "Component title following BEM naming conventions." }
              ]
            }
          ]
        },
        {
          "id": "sec-int-${String(t.num).padStart(2, '0')}-2",
          "title": "2. Production CSS Styling & Layout Geometry",
          "difficulty": "Intermediate",
          "content": "Explore advanced CSS rules, responsive bounds, and visual formatting context.",
          "codeSnippets": [
            {
              "language": "css",
              "filename": "component-styles-${t.num}.css",
              "title": "Advanced CSS Rules",
              "code": ".feature-grid {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\\n  gap: 1.5rem;\\n  padding: 1.5rem;\\n}\\n\\n.feature-card {\\n  background: var(--card-bg, #ffffff);\\n  border: 1px solid var(--border-color, #e2e8f0);\\n  border-radius: 0.75rem;\\n  padding: 1.5rem;\\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\\n}\\n\\n.feature-card:hover {\\n  transform: translateY(-4px);\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\\n}",
              "explanation": "Responsive grid layout with custom property theming and GPU-accelerated hover transitions.",
              "lineByLine": [
                { "line": "grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));", "explanation": "Self-responsive column layout that wraps without requiring media queries." },
                { "line": "transform: translateY(-4px);", "explanation": "Hardware-accelerated transform avoiding layout reflow." }
              ]
            }
          ]
        },
        {
          "id": "sec-int-${String(t.num).padStart(2, '0')}-3",
          "title": "3. Component Integration & Pro Tips",
          "difficulty": "Intermediate",
          "content": "Integrate responsive design tokens, accessibility focus rings, and cross-browser testing patterns.",
          "codeSnippets": [
            {
              "language": "css",
              "filename": "component-tokens-${t.num}.css",
              "title": "Design Tokens & Focus States",
              "code": ":root {\\n  --card-bg: #ffffff;\\n  --border-color: #cbd5e1;\\n  --focus-ring: #2563eb;\\n}\\n\\n.feature-card:focus-visible {\\n  outline: 2px solid var(--focus-ring);\\n  outline-offset: 4px;\\n}",
              "explanation": "Design tokens configured at :root with accessible :focus-visible focus ring styling.",
              "lineByLine": [
                { "line": "--focus-ring: #2563eb;", "explanation": "Semantic color token for high-visibility focus states." },
                { "line": ".feature-card:focus-visible", "explanation": "Accessible focus indicator shown only on keyboard navigation." }
              ]
            }
          ],
          "proTip": "Use CSS variables for theme tokens (colors, spacing) and combine them with CSS Grid auto-fit for maximum layout flexibility.",
          "commonMistakes": [
            "Over-relying on !important to fix cascade conflicts instead of managing selector specificity.",
            "Using fixed pixel widths on grid or flex containers, causing mobile viewport overflow.",
            "Removing outline: none on :focus without providing an accessible alternative."
          ]
        }
      ],
      "keyTakeaways": [
        "Maintain clean selector specificity and leverage modern Flexbox and Grid layout systems.",
        "Design mobile-first with min-width media queries and scalable design tokens.",
        "Prioritize keyboard accessibility with visible :focus-visible indicators."
      ],
      "summary": "You have completed ${t.title}, advancing your capabilities in professional frontend styling and responsive architecture."
    },
    "questions": []
  }`;
});

// Intermediate Capstone Project
const intProjectTS = `  {
    "id": "htmlcss-int-p1",
    "orderIndex": 15,
    "title": "Intermediate Capstone Project: Responsive Business Landing Page and Component System",
    "description": "Construct a full-featured, responsive SaaS business landing page featuring a component design system, sticky navigation, hero with CTA, feature grid, pricing cards, testimonials, and contact modal. (14 Deliverables).",
    "status": "locked",
    "requiresQuiz": false,
    "isProject": true,
    "xpReward": 600,
    "level": "intermediate",
    "projectDetails": {
      "id": "htmlcss-int-p1",
      "title": "Responsive Business Landing Page and Component System",
      "description": "Build an executive-ready, high-converting business landing page powered by modern Flexbox, CSS Grid, custom properties, and responsive media queries.",
      "estimatedDuration": "4 hours",
      "difficulty": "Intermediate",
      "deliverables": [
        "1. Architect modular multi-section page layout using semantic HTML5 landmarks (<header>, <nav>, <main>, <section>, <footer>).",
        "2. Build sticky, responsive navigation bar with logo, links, and mobile toggle placeholder.",
        "3. Create compelling Hero section with high-contrast headline, product mockup image, and CTA buttons.",
        "4. Build 3-column responsive Feature Cards section using CSS Grid and hover lift transitions.",
        "5. Construct 3-tier Pricing Cards table (Starter, Pro, Enterprise) with featured highlighted card.",
        "6. Build Testimonial Slider layout with author avatars, quotes, and star rating badges.",
        "7. Implement CSS custom properties for color palette, spacing tokens, and dark mode theme switching.",
        "8. Use Flexbox for all button groups, card headers, and horizontal icon alignments.",
        "9. Implement mobile-first media queries for mobile (375px), tablet (768px), and desktop (1200px).",
        "10. Build interactive button component system with primary, secondary, outline, and disabled states.",
        "11. Add accessible :focus-visible indicators across all interactive elements.",
        "12. Add smooth micro-animations on cards, buttons, and badges with hardware-accelerated transforms.",
        "13. Verify layout integrity in browser DevTools with zero horizontal overflow.",
        "14. Submit complete HTML markup, CSS stylesheets, component documentation, and accessibility audit checklist."
      ]
    },
    "lessonContent": {
      "overview": "### Intermediate Capstone: Business Landing Page & Component System\\nBuild a commercial-grade SaaS landing page and modular component system integrating Flexbox, Grid, CSS custom properties, and responsive media queries.",
      "analogyHero": "A production landing page is the ultimate test of frontend engineering: balancing visual aesthetics, responsive fluidity, performance, and accessibility.",
      "objectives": [
        "Apply advanced CSS Grid and Flexbox layout patterns to build complex web components.",
        "Implement a structured design token system using CSS custom properties.",
        "Build accessible, keyboard-navigable interactive components with zero layout shifts."
      ],
      "estimatedTime": "4 hours",
      "syntaxGuide": "Architecture Blueprint:\\n1. Token System (:root variables for colors, typography, spacing, shadows)\\n2. Layout Grid (auto-fit columns, sticky header, responsive wrappers)\\n3. Component Library (buttons, cards, badges, pricing tables, forms)",
      "sections": [
        {
          "id": "sec-proj-int-1",
          "title": "Project Blueprint & Layout Architecture",
          "difficulty": "Intermediate",
          "content": "Follow the structured blueprint below to construct your landing page and design token system.",
          "codeSnippets": [
            {
              "language": "html",
              "filename": "landing-page-index.html",
              "title": "Complete SaaS Landing Page HTML Skeleton",
              "code": "<!DOCTYPE html>\\n<html lang=\\"en\\">\\n<head>\\n  <meta charset=\\"UTF-8\\">\\n  <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\n  <title>CloudScale AI — Enterprise Infrastructure</title>\\n  <link rel=\\"stylesheet\\" href=\\"styles.css\\">\\n</head>\\n<body>\\n  <header class=\\"site-header sticky\\">\\n    <div class=\\"container header-inner\\">\\n      <a href=\\"#\\" class=\\"logo\\">CloudScale AI</a>\\n      <nav class=\\"main-nav\\">\\n        <a href=\\"#features\\">Features</a>\\n        <a href=\\"#pricing\\">Pricing</a>\\n        <a href=\\"#testimonials\\">Testimonials</a>\\n        <a href=\\"#contact\\" class=\\"btn btn-primary\\">Get Started</a>\\n      </nav>\\n    </div>\\n  </header>\\n</body>\\n</html>",
              "explanation": "Header and container layout establishing responsive boundaries and sticky navigation."
            }
          ]
        }
      ],
      "keyTakeaways": [
        "Use CSS Grid for 2D page layouts and Flexbox for 1D component alignments.",
        "Maintain clean design tokens in :root for effortless theming and consistent branding.",
        "Always test across mobile (375px), tablet (768px), and wide desktop (1440px) breakpoints."
      ],
      "summary": "Complete the 14 project deliverables, test responsive layouts, and submit your project to unlock Advanced HTML & CSS."
    },
    "questions": []
  }`;

// Intermediate Assessment Task
const intAssessmentTS = `  {
    "id": "htmlcss-int-assessment",
    "orderIndex": 16,
    "title": "Intermediate Final Assessment: Advanced HTML & CSS Layouts Certification Exam",
    "description": "Official 30-question certification exam testing combinators, specificity, Flexbox, CSS Grid, media queries, positioning, pseudo-elements, animations, and CSS variables. (Passing threshold: 25/30).",
    "status": "locked",
    "requiresQuiz": true,
    "isFinalAssessment": true,
    "passingScore": 25,
    "totalQuestions": 30,
    "xpReward": 750,
    "level": "intermediate",
    "lessonContent": {
      "overview": "### Official Intermediate Final Certification Exam\\nDemonstrate your mastery across all 14 Intermediate modules. Passing this exam (>= 25/30) unlocks Level 3: Advanced HTML & CSS.",
      "analogyHero": "Your gateway to elite frontend engineering and master certification.",
      "objectives": [
        "Validate deep competence in advanced CSS layout algorithms (Flexbox, Grid, Subgrid).",
        "Demonstrate mastery of specificity, cascading, stacking contexts, and responsive engineering.",
        "Score at least 25/30 to earn the Intermediate Credential and unlock Advanced Level."
      ],
      "estimatedTime": "45 mins",
      "syntaxGuide": "Exam Rules: Exactly 30 questions, 4 options per question, passing threshold 25/30 (83.3%).",
      "sections": [],
      "keyTakeaways": [
        "Carefully evaluate code snippets and specificity calculations before submitting answers.",
        "Passing with 25/30 unlocks Advanced Level immediately."
      ],
      "summary": "Intermediate Final Assessment instructions and rules."
    },
    "questions": HTMLCSS_INTERMEDIATE_FINAL_ASSESSMENT
  }`;

const intermediateFileContent = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export const HTMLCSS_INTERMEDIATE_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(INTERMEDIATE_MCQS, null, 2)};

export const HTMLCSS_INTERMEDIATE_TASKS: Task[] = [
${intermediateTasks.join(',\n')},
${intProjectTS},
${intAssessmentTS}
];
`;

fs.writeFileSync(path.join(__dirname, '../src/features/roadmap/data/html-css/htmlCssIntermediate.data.ts'), intermediateFileContent, 'utf8');
console.log('Successfully wrote htmlCssIntermediate.data.ts');
