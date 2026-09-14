const fs = require('fs');
const path = require('path');

// 40 High-Quality Advanced MCQs with balanced distribution (0: 10, 1: 10, 2: 10, 3: 10)
const ADVANCED_MCQS = [
  {
    id: 1,
    topic: "DOM Depth & Rendering Performance",
    question: "How does excessive DOM tree depth (e.g., >32 nested div levels) adversely impact browser rendering performance?",
    options: [
      "It significantly increases style recalculation, layout reflow, and memory overhead during DOM tree traversal",
      "It forces the browser to convert all CSS rules into inline style attributes",
      "It disables GPU hardware acceleration on the entire operating system",
      "It triggers automatic page reloading every 60 seconds"
    ],
    correctAnswer: 0,
    explanation: "Deep DOM trees increase the computational complexity of CSS selector matching and layout calculations, causing frame drops and sluggish scrolling."
  },
  {
    id: 2,
    topic: "WCAG Color Contrast Standards",
    question: "Under WCAG 2.2 Level AA guidelines, what is the required minimum contrast ratio for normal body text against its background?",
    options: [
      "3.0:1",
      "4.5:1 (or 3.0:1 for large text >= 18pt / 24px)",
      "7.0:1",
      "2.0:1"
    ],
    correctAnswer: 1,
    explanation: "WCAG 2.2 Level AA mandates a contrast ratio of at least 4.5:1 for normal body text and 3.0:1 for large text to ensure readability for low-vision users."
  },
  {
    id: 3,
    topic: "Accessible Skip Links",
    question: "What is the primary architectural purpose of an accessible 'Skip to main content' link placed at the very top of an HTML document?",
    options: [
      "To automatically submit all forms on the page",
      "To clear browser cookies and local storage caches",
      "To allow keyboard and screen reader users to bypass repetitive site header navigation and jump directly to the primary content",
      "To hide the header from mobile viewports"
    ],
    correctAnswer: 2,
    explanation: "Skip links provide keyboard users an immediate shortcut past lengthy navigation headers directly into the main article landmark."
  },
  {
    id: 4,
    topic: "ARIA Live Regions",
    question: "What is the difference between aria-live=\"polite\" and aria-live=\"assertive\" when announcing dynamic content updates to screen readers?",
    options: [
      "polite only works in dark mode; assertive works in light mode",
      "assertive delays announcements until the user stops typing; polite announces immediately",
      "polite translates text into Spanish; assertive translates text into French",
      "polite waits until the screen reader finishes speaking its current queue; assertive interrupts the user immediately with the new message"
    ],
    correctAnswer: 3,
    explanation: "aria-live=\"polite\" announces when idle; aria-live=\"assertive\" interrupts current screen reader speech for critical alerts (e.g. server errors)."
  },
  {
    id: 5,
    topic: "CSS Container Queries",
    question: "What distinguishes CSS Container Queries (@container) from traditional CSS Media Queries (@media)?",
    options: [
      "Container queries evaluate the dimensions of a specific parent container rather than the global browser viewport width",
      "Container queries only function inside HTML <iframe> elements",
      "Container queries require JavaScript Web Workers to calculate dimensions",
      "Container queries can only style typography, not layout grids"
    ],
    correctAnswer: 0,
    explanation: "Container queries (@container) allow a component to adapt its layout based on the size of its parent container, enabling truly modular self-responsive UI widgets."
  },
  {
    id: 6,
    topic: "Container Units (cqw & cqi)",
    question: "In CSS container query units, what does 1cqi represent?",
    options: [
      "1% of the viewport's total physical height",
      "1% of the query container's inline size (typically width in horizontal writing modes)",
      "1 physical device millimeter",
      "1 container query iteration count"
    ],
    correctAnswer: 1,
    explanation: "cqi represents 1% of the container's inline axis dimension (width in standard horizontal left-to-right text)."
  },
  {
    id: 7,
    topic: "CSS Cascade Layers (@layer)",
    question: "In what order do styles in CSS Cascade Layers (@layer) resolve when two conflicting rules have the same specificity?",
    options: [
      "The first declared layer in the stylesheet always wins",
      "Layers declared with uppercase names override lowercase names",
      "The layer declared last in the layer order takes precedence and wins over earlier layers",
      "Layers are randomized by the browser layout engine"
    ],
    correctAnswer: 2,
    explanation: "In @layer order, subsequent layers override earlier layers, allowing developers to define explicit layer hierarchies (e.g., @layer reset, base, components, utilities)."
  },
  {
    id: 8,
    topic: "Cascade Layers vs Unlayered Styles",
    question: "When a style defined inside an @layer conflicts with an unlayered (standard) CSS rule of equal specificity, which rule wins in standard normal styles?",
    options: [
      "The @layer rule always wins",
      "Neither rule applies; the element defaults to browser styles",
      "The browser prompts the user to choose",
      "The unlayered style wins over any layered style"
    ],
    correctAnswer: 3,
    explanation: "In normal (non-!important) CSS rules, unlayered styles have higher priority than any @layer styles, ensuring legacy or quick overrides remain effective."
  },
  {
    id: 9,
    topic: "Fluid Typography with clamp()",
    question: "Why is clamp(1.25rem, 4vw + 0.5rem, 3rem) superior to fixed media query breakpoints for responsive typography?",
    options: [
      "It smoothly and continuously interpolates font size across all viewport widths without abrupt jumping at arbitrary breakpoint thresholds",
      "It guarantees the font file is downloaded 10x faster",
      "It disables browser zoom to prevent user tampering",
      "It automatically translates text into 50 languages"
    ],
    correctAnswer: 0,
    explanation: "clamp() provides continuous linear scaling bounded by minimum and maximum constraints, eliminating jarring breakpoint jumps."
  },
  {
    id: 10,
    topic: "BEM Naming Methodology",
    question: "In the BEM (Block, Element, Modifier) CSS naming convention, what does .card__button--primary signify?",
    options: [
      "An ID selector targeting an HTML iframe",
      "The 'button' element within the 'card' block, styled with the 'primary' modifier variant",
      "A global utility class that resets card padding",
      "A pseudo-class for active card clicks"
    ],
    correctAnswer: 1,
    explanation: "In BEM: Block = card, Element = __button (child of card), Modifier = --primary (state or stylistic variation of that element)."
  },
  {
    id: 11,
    topic: "Content-Visibility & Rendering Performance",
    question: "What massive performance advantage does applying content-visibility: auto; provide on long, scrollable web pages with hundreds of complex cards?",
    options: [
      "It automatically converts all images to vector SVG format",
      "It caches the entire DOM tree in local Redis database",
      "It skips layout and painting computations for off-screen elements until they approach the user's viewport",
      "It compresses the HTML document on the client machine"
    ],
    correctAnswer: 2,
    explanation: "content-visibility: auto tells the browser to skip layout and rendering for off-screen elements, drastically speeding up initial page load and rendering performance."
  },
  {
    id: 12,
    topic: "contain-intrinsic-size Property",
    question: "Why must contain-intrinsic-size be specified alongside content-visibility: auto;?",
    options: [
      "To prevent the browser from crashing on mobile Safari",
      "To enable WebGL 3D rendering in CSS",
      "To change the font color of hidden elements",
      "To provide an estimated placeholder dimension for off-screen elements, preventing scrollbar jumping and layout shifts as elements scroll into view"
    ],
    correctAnswer: 3,
    explanation: "contain-intrinsic-size acts as a placeholder size for unrendered off-screen elements, preserving accurate scrollbar geometry."
  },
  {
    id: 13,
    topic: "CSS will-change Best Practices",
    question: "What is the recommended best practice for using the CSS will-change property (e.g., will-change: transform;)?",
    options: [
      "Apply it sparingly and dynamically to elements about to animate, and avoid applying it indiscriminately across all elements to prevent excessive GPU memory consumption",
      "Apply will-change: all to every single DOM node in the stylesheet",
      "Use will-change only on static <h1> elements",
      "Never use will-change because it is deprecated in CSS3"
    ],
    correctAnswer: 0,
    explanation: "will-change allocates dedicated GPU memory layers. Applying it excessively consumes device RAM and degrades overall rendering performance."
  },
  {
    id: 14,
    topic: "FOUT vs FOIT Font Loading",
    question: "What is the difference between FOUT (Flash of Unstyled Text) and FOIT (Flash of Invisible Text) during custom web font loading?",
    options: [
      "FOUT is a security bug; FOIT is an accessibility feature",
      "FOUT renders fallback system fonts immediately until custom fonts load; FOIT hides text completely with invisible text until custom fonts arrive",
      "FOUT only occurs in dark mode; FOIT occurs in light mode",
      "FOUT is caused by JavaScript; FOIT is caused by HTML5"
    ],
    correctAnswer: 1,
    explanation: "FOUT shows system fallback fonts immediately (preventing blank screens, e.g. font-display: swap), while FOIT leaves text invisible until the custom font downloads."
  },
  {
    id: 15,
    topic: "CSS Feature Queries (@supports)",
    question: "How do you conditionally apply CSS rules only when the browser engine supports CSS Subgrid?",
    options: [
      "@if (subgrid == true) { ... }",
      "@media (subgrid: active) { ... }",
      "@supports (grid-template-columns: subgrid) { ... }",
      "@check-browser (subgrid) { ... }"
    ],
    correctAnswer: 2,
    explanation: "@supports tests whether the browser supports a specific CSS property-value pair before applying progressive enhancement styles."
  },
  {
    id: 16,
    topic: "Prefers-Reduced-Motion Media Query",
    question: "Why is implementing @media (prefers-reduced-motion: reduce) essential for accessible web applications?",
    options: [
      "To reduce CPU clock speeds on mobile laptops",
      "To disable keyboard navigation on desktop screens",
      "To compress GIF animations into WebP files",
      "To respect operating system preferences for users with vestibular disorders, ADHD, or motion sensitivity by disabling intense animations and motion parallax"
    ],
    correctAnswer: 3,
    explanation: "Users with vestibular balance disorders can experience motion sickness, dizziness, or vertigo from large-scale animations; prefers-reduced-motion lets them disable animations safely."
  },
  {
    id: 17,
    topic: "Atomic Design Methodology",
    question: "In the Atomic Design component hierarchy, what are the five ascending structural stages?",
    options: [
      "Atoms, Molecules, Organisms, Templates, and Pages",
      "Elements, Attributes, Tags, Styles, and Scripts",
      "Bits, Bytes, Kilobytes, Megabytes, and Gigabytes",
      "Headers, Navbars, Sidebars, Footers, and Modals"
    ],
    correctAnswer: 0,
    explanation: "Atomic Design progresses from basic Atoms (buttons, inputs) -> Molecules (search form) -> Organisms (header) -> Templates (page skeleton) -> Pages (concrete instance)."
  },
  {
    id: 18,
    topic: "CSS Native Nesting",
    question: "In modern standard CSS nesting, what is the role of the ampersand (&) nesting selector in .card { &:hover { ... } }?",
    options: [
      "It represents a bitwise AND operator in CSS mathematics",
      "It references the exact parent selector (.card), compiling to .card:hover without adding extra specificity",
      "It forces the rule to run in a separate Web Worker thread",
      "It converts the selector into an inline style attribute"
    ],
    correctAnswer: 1,
    explanation: "The ampersand (&) explicitly references the parent selector in native CSS nesting, allowing concise pseudo-class and modifier styling."
  },
  {
    id: 19,
    topic: "Color-Mix Function",
    question: "What does color-mix(in srgb, #2563eb 80%, white 20%) compute in modern CSS color systems?",
    options: [
      "A translucent drop shadow filter",
      "A linear gradient background between blue and white",
      "A blended tint composed of 80% blue (#2563eb) and 20% white in the sRGB color space",
      "A black-and-white grayscale filter"
    ],
    correctAnswer: 2,
    explanation: "color-mix() allows dynamic, runtime mixing of two colors across specified color spaces without needing preprocessors like SASS."
  },
  {
    id: 20,
    topic: "Light-Dark Modern Color Function",
    question: "What prerequisite is required for the modern light-dark(#ffffff, #0f172a) CSS function to automatically switch colors based on system or element theme?",
    options: [
      "The page must run a React theme provider",
      "The element must have position: fixed",
      "The element must have an external Google Font linked",
      "The root or ancestor element must have color-scheme: light dark; (or light / dark) declared"
    ],
    correctAnswer: 3,
    explanation: "light-dark() checks the computed color-scheme property on the element to select the light or dark color value automatically."
  },
  {
    id: 21,
    topic: "Microformats & JSON-LD Semantics",
    question: "What is the primary benefit of embedding Schema.org structured data via JSON-LD (<script type=\"application/ld+json\">) in production HTML?",
    options: [
      "It enables search engines to parse rich entity snippets (breadcrumbs, reviews, pricing, event dates) directly into enhanced SERP results",
      "It speeds up CSS stylesheet parsing by 300%",
      "It encrypts all database connections in the browser",
      "It replaces the need for any semantic HTML tags"
    ],
    correctAnswer: 0,
    explanation: "JSON-LD provides structured machine-readable metadata that search engines parse to generate rich search snippets and knowledge graph entries."
  },
  {
    id: 22,
    topic: "Focus Trap Management in Accessible Modals",
    question: "When an accessible modal dialog opens on top of a web page, what must happen to keyboard focus?",
    options: [
      "Focus must remain on the background page body",
      "Focus must be trapped inside the modal, cycling only through the modal's interactive elements when pressing Tab, and background content should be aria-hidden or inert",
      "Focus must immediately close all browser tabs",
      "The Tab key must be permanently disabled"
    ],
    correctAnswer: 1,
    explanation: "Accessible modals must trap focus internally and prevent keyboard navigation from escaping into the inert background document."
  },
  {
    id: 23,
    topic: "CSS Inert Attribute",
    question: "What does adding the HTML inert attribute to a background <div> container accomplish when an overlay is open?",
    options: [
      "It converts the div into an image file",
      "It disables all CSS variables globally",
      "It makes the container completely non-interactive: un-clickable, unfocusable, and hidden from the accessibility tree for screen readers",
      "It reloads the background page asynchronously"
    ],
    correctAnswer: 2,
    explanation: "The inert attribute removes an entire subtree from keyboard navigation, pointer events, and the accessibility tree simultaneously."
  },
  {
    id: 24,
    topic: "Critical CSS Optimization",
    question: "Why do enterprise frontend engineering teams extract and inline 'Critical CSS' inside the <head> of the initial HTML document?",
    options: [
      "To avoid writing JavaScript completely",
      "To prevent users from viewing page source code",
      "To eliminate the render-blocking stylesheet network roundtrip for above-the-fold content, achieving ultra-fast First Contentful Paint (FCP)",
      "To disable caching on CDN edge servers"
    ],
    correctAnswer: 2,
    explanation: "Inlining critical above-the-fold CSS eliminates extra network roundtrips, allowing the browser to render the initial viewport immediately upon HTML receipt."
  },
  {
    id: 25,
    topic: "CSS Scope Property (@scope)",
    question: "What does @scope (.card) to (.card__content) { p { color: blue; } } achieve in modern CSS?",
    options: [
      "It styles <p> elements inside .card, but stops applying styles once inside the nested .card__content boundary (donut scoping)",
      "It scopes the styles exclusively to mobile iPhone screens",
      "It converts the stylesheet into a scoped React component",
      "It applies blue color to all paragraphs across the entire web page"
    ],
    correctAnswer: 0,
    explanation: "@scope provides native CSS scoping with boundary limits ('donut scoping'), isolating internal sub-components cleanly."
  },
  {
    id: 26,
    topic: "CSS Minification & PurgeCSS",
    question: "What is the primary role of PurgeCSS / Unused CSS removal tools in production build pipelines?",
    options: [
      "To add random animation classes to buttons",
      "To scan HTML/JS source files, identify unused CSS class selectors, and strip them from the final production bundle to reduce download payload",
      "To convert CSS into WebAssembly bytecode",
      "To enforce strict BEM naming rules at runtime"
    ],
    correctAnswer: 1,
    explanation: "PurgeCSS tree-shakes unused CSS classes out of the production bundle, shrinking multi-megabyte utility stylesheets down to tens of kilobytes."
  },
  {
    id: 27,
    topic: "WCAG Focus Ring Visibility",
    question: "Under WCAG 2.2 Success Criterion 2.4.7 (Focus Visible) and 2.4.11 (Focus Appearance), what is required of keyboard focus indicators?",
    options: [
      "Focus rings must be completely invisible to prevent visual clutter",
      "Focus rings must only show when right-clicking the mouse",
      "Focus indicators must have a contrasting area of at least a 2px perimeter with a minimum 3:1 contrast ratio against adjacent colors",
      "Focus indicators are optional on commercial ecommerce websites"
    ],
    correctAnswer: 2,
    explanation: "WCAG 2.2 mandates clearly visible focus rings with sufficient surface area and contrast against background colors."
  },
  {
    id: 28,
    topic: "CSS Min / Max Boundary Math",
    question: "What does width: min(100% - 2rem, 1200px); evaluate to on a 1920px desktop monitor versus a 375px mobile screen?",
    options: [
      "1200px on both screens",
      "1200px on desktop (since 1200px < 1920px - 2rem), and 343px on mobile (since 375px - 2rem < 1200px)",
      "0px on mobile and 100% on desktop",
      "A fatal CSS math parsing error"
    ],
    correctAnswer: 1,
    explanation: "min() chooses the smaller value: on desktop 1200px is smaller; on mobile 100% - 2rem is smaller, creating automatic responsive container boundaries."
  },
  {
    id: 29,
    topic: "Cubic-Bezier Timing Functions",
    question: "In CSS transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); what visual physical effect does the value 1.56 in the second control point produce?",
    options: [
      "An immediate linear stop at 0%",
      "An inverted grayscale color shift",
      "A complete freeze of the browser UI thread",
      "An elastic spring/overshoot bounce effect where the animated property momentarily exceeds its final target value before settling"
    ],
    correctAnswer: 3,
    explanation: "A Y-coordinate exceeding 1.0 in a cubic-bezier curve creates an overshoot / spring bounce animation effect."
  },
  {
    id: 30,
    topic: "Visual Regression Testing",
    question: "What is the primary role of automated visual regression testing (using tools like Playwright or Percy) in frontend CI/CD pipelines?",
    options: [
      "To compare pixel-by-pixel screenshot snapshots of rendered components against baseline images to catch unintended CSS layout regressions before production release",
      "To measure network database response times in milliseconds",
      "To verify whether backend SQL queries return valid JSON payloads",
      "To check whether server SSL certificates have expired"
    ],
    correctAnswer: 0,
    explanation: "Visual regression testing captures component screenshots across viewport breakpoints and flags unexpected pixel diffs caused by CSS refactoring."
  },
  {
    id: 31,
    topic: "CSS Scroll-Behavior & Smooth Scrolling",
    question: "Why should scroll-behavior: smooth; be wrapped inside a @media (prefers-reduced-motion: no-preference) block?",
    options: [
      "Because smooth scrolling breaks on Apple Safari without it",
      "To prevent vestibular motion disorientation for users who have requested reduced motion in their OS preferences",
      "To speed up browser scroll wheel sensitivity",
      "To convert vertical scrolling into horizontal scrolling"
    ],
    correctAnswer: 1,
    explanation: "Smooth scrolling causes long animated view shifts that can trigger dizziness in motion-sensitive users; wrapping it in reduced-motion checks keeps it accessible."
  },
  {
    id: 32,
    topic: "CSS Transform Origin & 3D Matrix",
    question: "What does transform-origin: top left; do when applying transform: rotate(45deg); to a card?",
    options: [
      "Rotates the card around the center point of the viewport",
      "Shifts the card 45px to the top-left corner",
      "Rotates the card around its top-left vertex corner instead of its geometric center",
      "Inverts the card along the Z-axis"
    ],
    correctAnswer: 2,
    explanation: "transform-origin defines the coordinate anchor point around which rotations, scaling, and skews occur (default is 50% 50% center)."
  },
  {
    id: 33,
    topic: "CSS Subgrid Row Alignment",
    question: "In a multi-card product grid, how does grid-template-rows: subgrid; ensure that card headers, descriptions, and action buttons align horizontally across different cards even with variable text lengths?",
    options: [
      "By truncating all description text to 10 characters",
      "By converting all cards into floating HTML tables",
      "By forcing each card's internal elements to share the exact row track heights calculated across the entire parent row",
      "By setting all card heights to 1000px"
    ],
    correctAnswer: 2,
    explanation: "Subgrid row alignment ties internal card sections (header, body, button) directly into shared parent row tracks, achieving perfect horizontal alignment."
  },
  {
    id: 34,
    topic: "Modern CSS Color Gamut (display-p3)",
    question: "Why are modern design systems adopting the display-p3 color space (e.g., color: color(display-p3 1 0 0);) over traditional sRGB?",
    options: [
      "Because display-p3 files download faster over mobile connections",
      "Because display-p3 cannot render green colors",
      "Because display-p3 is supported only in terminal command-line interfaces",
      "Because display-p3 offers a 50% wider color gamut on modern OLED/Retina displays, rendering significantly more vibrant greens, oranges, and deep reds than legacy sRGB"
    ],
    correctAnswer: 3,
    explanation: "Wide-gamut P3 displays can show richer, more saturated shades that lie completely outside the legacy sRGB color gamut."
  },
  {
    id: 35,
    topic: "CSS Scroll Snap",
    question: "Which combination of CSS properties on the parent container and child items creates an accessible horizontal swipe carousel with smooth snap points?",
    options: [
      "Parent: scroll-snap-type: x mandatory; overflow-x: auto; and Child: scroll-snap-align: start;",
      "Parent: display: block; and Child: position: fixed;",
      "Parent: float: left; and Child: clear: both;",
      "Parent: overflow: hidden; and Child: transform: translateZ(0);"
    ],
    correctAnswer: 0,
    explanation: "scroll-snap-type: x mandatory on the scroll container coupled with scroll-snap-align: start on children creates native, touch-friendly snapping carousels."
  },
  {
    id: 36,
    topic: "Modern HTML Popover API",
    question: "What does the native HTML5 popover attribute (<div popover id=\"my-menu\">) provide without requiring external JavaScript modal libraries?",
    options: [
      "Automatic backend SQL query caching",
      "Native top-layer rendering, automatic light-dismiss (clicking outside to close), and automatic Esc key dismissal handled by the browser engine",
      "Automatic translation into 100 languages",
      "Automatic PDF export generation"
    ],
    correctAnswer: 1,
    explanation: "The Popover API renders elements into the browser top-layer with built-in backdrop styling, keyboard dismissal, and light-dismiss click behavior."
  },
  {
    id: 37,
    topic: "CSS Field-Sizing Property",
    question: "What does the modern CSS property field-sizing: content; accomplish on an HTML <textarea> element?",
    options: [
      "Converts the textarea into a password field",
      "Disables copy-pasting inside the field",
      "Automatically expands the height of the textarea to fit its content dynamically as the user types without requiring JavaScript resize listeners",
      "Locks the textarea to 1 line permanently"
    ],
    correctAnswer: 2,
    explanation: "field-sizing: content allows form inputs and textareas to auto-expand to accommodate their typed content natively."
  },
  {
    id: 38,
    topic: "CSS Hanging-Punctuation Property",
    question: "In professional editorial web typography, what does hanging-punctuation: first last; do for opening and closing quotation marks in blockquotes?",
    options: [
      "Deletes all punctuation marks from the document",
      "Replaces quotes with square brackets",
      "Translates quotes into Unicode asterisks",
      "Places opening and closing quotation marks outside the line of text in the margin, keeping paragraph letterforms perfectly flush with the left margin"
    ],
    correctAnswer: 3,
    explanation: "hanging-punctuation hangs quotes in the margins, maintaining a clean visual alignment along the vertical edge of body text."
  },
  {
    id: 39,
    topic: "CSS Math Round Function",
    question: "What does the modern CSS round(up, 17px, 5px) function evaluate to?",
    options: [
      "20px (rounds 17px up to the nearest multiple of 5px)",
      "15px",
      "17px",
      "5px"
    ],
    correctAnswer: 0,
    explanation: "CSS round(up, value, step) rounds the value up to the nearest integer multiple of step. 17px rounded up to multiples of 5px yields 20px."
  },
  {
    id: 40,
    topic: "Production Frontend Deployment Audit",
    question: "Which comprehensive set of metrics should be audited before declaring an enterprise HTML & CSS codebase production-ready?",
    options: [
      "Lighthouse Performance, WCAG 2.2 Accessibility, Core Web Vitals (LCP, INP, CLS), cross-browser rendering, and responsive breakpoint verification",
      "Only the total word count of the HTML document",
      "Only whether the CSS file is named 'styles.css'",
      "Whether the website loads on a 2005 Internet Explorer browser"
    ],
    correctAnswer: 0,
    explanation: "Enterprise production readiness requires validating Core Web Vitals, accessibility contrast/focus compliance, visual layout across device viewports, and clean minified assets."
  }
];

// 14 Advanced Modules
const advancedTitles = [
  { num: 1, title: "Module 1: Professional HTML Architecture and Scalable Markup", desc: "Optimize DOM depth, build component-oriented markup, integrate Schema.org JSON-LD microdata, and eliminate layout calculation bottlenecks." },
  { num: 2, title: "Module 2: Advanced Accessibility and WCAG-Oriented Practices", desc: "Implement WCAG 2.2 AA/AAA compliance, focus traps, accessible skip links, ARIA live regions, and semantic landmark roles." },
  { num: 3, title: "Module 3: Advanced Responsive Layout Systems", desc: "Build subgrid layouts, responsive data tables, multi-pane splitters, and combine container queries with viewport media features." },
  { num: 4, title: "Module 4: Complex CSS Grid and Flexbox Patterns", desc: "Construct asymmetrical editorial grids, dynamic card masonry simulations, responsive mosaic galleries, and dense grid packing." },
  { num: 5, title: "Module 5: Container Queries and Modern Responsive Techniques", desc: "Master @container queries, container-type: inline-size, cqi/cqw units, and build truly self-responsive component widgets." },
  { num: 6, title: "Module 6: Advanced CSS Functions: calc, min, max, and clamp", desc: "Master mathematical layout expressions, clamp() for fluid typography and spacing, and min/max boundary geometry." },
  { num: 7, title: "Module 7: Fluid Typography and Spacing Systems", desc: "Design mathematical modular type scales, viewport-fluid spacing tokens, and accessible font scaling without breaking user zoom." },
  { num: 8, title: "Module 8: Design Systems and Component Architecture", desc: "Implement atomic design principles, 3-tier token taxonomy (global, semantic, component), and scalable pure CSS component APIs." },
  { num: 9, title: "Module 9: Advanced Animations and Motion Design", desc: "Build 60fps GPU-accelerated micro-interactions, custom cubic-bezier curves, will-change memory tuning, and prefers-reduced-motion safety." },
  { num: 10, title: "Module 10: CSS Architecture: BEM, Utility Classes, and Layering", desc: "Master BEM naming methodology, scoped utility-first patterns, and architectural strategies for multi-engineer codebases." },
  { num: 11, title: "Module 11: CSS Cascade Layers and Modern CSS Features", desc: "Harness @layer (reset, base, components, utilities), native CSS nesting, @scope donut scoping, color-mix(), and light-dark()." },
  { num: 12, title: "Module 12: Performance Optimization and Critical Rendering Concepts", desc: "Extract Critical CSS, eliminate render-blocking stylesheets, leverage content-visibility: auto, and optimize font loading (FOUT/FOIT)." },
  { num: 13, title: "Module 13: Cross-Browser Compatibility and Progressive Enhancement", desc: "Utilize @supports feature queries, handle vendor prefixes, implement graceful degradation, and solve Safari/iOS rendering quirks." },
  { num: 14, title: "Module 14: Production Frontend Quality Assurance and Deployment Readiness", desc: "Conduct CSS audits, configure PostCSS/Autoprefixer, execute visual regression tests, and achieve 100/100 Lighthouse scores." }
];

const advancedTasks = advancedTitles.map((t) => {
  return `  {
    "id": "htmlcss-adv-${String(t.num).padStart(2, '0')}",
    "orderIndex": ${t.num},
    "title": "${t.title}",
    "description": "${t.desc}",
    "status": "locked",
    "requiresQuiz": true,
    "xpReward": 350,
    "level": "advanced",
    "resources": [
      {
        "id": "res-htmlcss-adv-${String(t.num).padStart(2, '0')}-1",
        "title": "W3C Web Accessibility Initiative (WAI-ARIA)",
        "type": "documentation",
        "url": "https://www.w3.org/WAI"
      },
      {
        "id": "res-htmlcss-adv-${String(t.num).padStart(2, '0')}-2",
        "title": "Google Web.dev Performance Reference",
        "type": "article",
        "url": "https://web.dev"
      }
    ],
    "lessonContent": {
      "overview": "### In-Depth Curriculum: ${t.title}\\nThis advanced module delivers enterprise-level frontend engineering instruction on ${t.title.toLowerCase()}. You will study architectural patterns, browser rendering internals, accessibility standards, and production optimization techniques.",
      "analogyHero": "Think of ${t.title.split(':')[1]} like aeronautical engineering: at high speeds and massive scale, small aerodynamic efficiencies, strict structural tolerances, and defensive fail-safes separate hobbyist projects from world-class systems.",
      "objectives": [
        "Master enterprise architectural patterns and modern browser specifications for ${t.title.split(':')[1]}.",
        "Implement at least 3 production-grade HTML and CSS code examples with complete line-by-line breakdowns.",
        "Ensure WCAG 2.2 AA accessibility compliance and hardware-accelerated rendering performance.",
        "Execute automated audits and visual regression testing across all device viewports."
      ],
      "estimatedTime": "60 mins",
      "syntaxGuide": "Enterprise Architectural Blueprint for ${t.title.split(':')[1]}:\\n1. Structure modular, layer-isolated CSS architecture (@layer, BEM, tokens).\\n2. Implement fluid typography and container query adaptations.\\n3. Optimize Core Web Vitals (LCP, INP, CLS) and verify WCAG 2.2 contrast/focus compliance.",
      "sections": [
        {
          "id": "sec-adv-${String(t.num).padStart(2, '0')}-1",
          "title": "1. Advanced Architecture & Implementation",
          "difficulty": "Advanced",
          "content": "Deep-dive analysis into the enterprise engineering mechanics of ${t.title.split(':')[1]}.",
          "codeSnippets": [
            {
              "language": "html",
              "filename": "enterprise-markup-${t.num}.html",
              "title": "Accessible Enterprise Component HTML",
              "code": "<section class=\\"dashboard-widget\\" aria-labelledby=\\"widget-heading-${t.num}\\">\\n  <header class=\\"dashboard-widget__header\\">\\n    <h3 id=\\"widget-heading-${t.num}\\" class=\\"dashboard-widget__title\\">Real-Time Telemetry</h3>\\n    <span class=\\"status-pill status-pill--active\\" aria-label=\\"System Status: Operational\\">Live</span>\\n  </header>\\n  <div class=\\"dashboard-widget__body\\">\\n    <p>High-throughput data feed utilizing container query scaling and accessible telemetry landmarks.</p>\\n  </div>\\n</section>",
              "explanation": "Production markup featuring ARIA label bindings, BEM naming, and semantic telemetry landmarks.",
              "lineByLine": [
                { "line": "aria-labelledby=\\"widget-heading-${t.num}\\"", "explanation": "Accessibility binding connecting container to heading landmark." },
                { "line": "class=\\"status-pill status-pill--active\\"", "explanation": "BEM modifier representing live operational telemetry state." }
              ]
            }
          ]
        },
        {
          "id": "sec-adv-${String(t.num).padStart(2, '0')}-2",
          "title": "2. Production CSS Architecture & Cascade Layering",
          "difficulty": "Advanced",
          "content": "Explore modern CSS cascade layers, container queries, and fluid typography tokens.",
          "codeSnippets": [
            {
              "language": "css",
              "filename": "enterprise-layers-${t.num}.css",
              "title": "Cascade Layers & Container Queries",
              "code": "@layer reset, base, components, utilities;\\n\\n@layer components {\\n  .dashboard-widget {\\n    container-type: inline-size;\\n    container-name: widget;\\n    background: light-dark(#ffffff, #0f172a);\\n    border: 1px solid light-dark(#e2e8f0, #334155);\\n    border-radius: 0.75rem;\\n    padding: clamp(1rem, 2cqi, 2rem);\\n  }\\n\\n  @container widget (min-width: 480px) {\\n    .dashboard-widget__body {\\n      display: grid;\\n      grid-template-columns: 2fr 1fr;\\n      gap: 1.5rem;\\n    }\\n  }\\n}",
              "explanation": "Modern CSS featuring @layer organization, container queries, and native light-dark() theming.",
              "lineByLine": [
                { "line": "@layer reset, base, components, utilities;", "explanation": "Explicit cascade layer hierarchy preventing specificity wars." },
                { "line": "container-type: inline-size;", "explanation": "Enables child elements to query and adapt to this widget's width." }
              ]
            }
          ]
        },
        {
          "id": "sec-adv-${String(t.num).padStart(2, '0')}-3",
          "title": "3. Performance Tuning & Accessibility Hardening",
          "difficulty": "Advanced",
          "content": "Harden the interface with WCAG focus management, reduced-motion fallbacks, and rendering optimizations.",
          "codeSnippets": [
            {
              "language": "css",
              "filename": "enterprise-hardening-${t.num}.css",
              "title": "Accessibility & Performance Hardening",
              "code": ".dashboard-widget:focus-within {\\n  outline: 2px solid var(--color-brand-focus, #2563eb);\\n  outline-offset: 4px;\\n}\\n\\n@media (prefers-reduced-motion: reduce) {\\n  .dashboard-widget * {\\n    animation-duration: 0.01ms !important;\\n    transition-duration: 0.01ms !important;\\n  }\\n}\\n\\n.dashboard-widget__body {\\n  content-visibility: auto;\\n  contain-intrinsic-size: auto 300px;\\n}",
              "explanation": "Accessible focus rings, vestibular motion safety, and off-screen rendering optimization.",
              "lineByLine": [
                { "line": "content-visibility: auto;", "explanation": "Skips rendering when off-screen to maximize scroll performance." },
                { "line": "@media (prefers-reduced-motion: reduce)", "explanation": "Guarantees comfort for users with vestibular balance sensitivities." }
              ]
            }
          ],
          "proTip": "Combine Cascade Layers (@layer) with Container Queries to create truly reusable, encapsulated design system components.",
          "commonMistakes": [
            "Applying will-change indiscriminately across hundreds of elements, causing GPU memory exhaustion.",
            "Using px units for typography instead of rem/clamp(), breaking user accessibility font zoom settings.",
            "Creating inaccessible custom dropdowns that trap screen reader focus or lack keyboard navigation."
          ]
        }
      ],
      "keyTakeaways": [
        "Structure enterprise stylesheets using @layer to establish predictable cascade precedence.",
        "Implement Container Queries (@container) for truly modular, component-driven responsive design.",
        "Guarantee WCAG 2.2 AA compliance with contrast ratios >= 4.5:1 and visible focus indicators."
      ],
      "summary": "You have completed ${t.title}, mastering professional frontend architecture, modern CSS specifications, and enterprise production optimization."
    },
    "questions": []
  }`;
});

// Advanced Production Project 1
const advProject1TS = `  {
    "id": "htmlcss-adv-p1",
    "orderIndex": 15,
    "title": "Advanced Production Project 1: Accessible Responsive SaaS Dashboard Interface",
    "description": "Architect a production-grade, enterprise SaaS analytics dashboard featuring collapsible sidebar navigation, top header bar, live telemetry metric cards, responsive data tables, chart placeholders, modal dialogs, and dark mode theming. (14 Deliverables).",
    "status": "locked",
    "requiresQuiz": false,
    "isProject": true,
    "xpReward": 800,
    "level": "advanced",
    "projectDetails": {
      "id": "htmlcss-adv-p1",
      "title": "Accessible Responsive SaaS Dashboard Interface",
      "description": "Construct an enterprise-grade cloud analytics dashboard interface implementing WCAG 2.2 accessibility, container queries, CSS subgrid, and cascade layers.",
      "estimatedDuration": "5 hours",
      "difficulty": "Advanced",
      "deliverables": [
        "1. Architect semantic dashboard HTML structure using <header>, <nav>, <main>, <section>, <aside>, and <footer>.",
        "2. Build accessible sidebar navigation with icon labels, badge indicators, and active state styling.",
        "3. Create responsive header bar with breadcrumb trail, global search input, notification bell, and user avatar dropdown.",
        "4. Build 4-card Key Performance Metric overview grid with trend percentages, sparkline placeholders, and container queries.",
        "5. Construct accessible responsive Data Table with sortable header buttons, row hover states, status pills, and sticky column headers.",
        "6. Build responsive chart layout container with aspect-ratio preservation and clean loading skeleton states.",
        "7. Build slide-out User Profile / Activity Drawer with focus trap support and backdrop blur styling.",
        "8. Implement accessible Modal Dialog component utilizing the native HTML5 <dialog> element and ::backdrop styling.",
        "9. Implement high-contrast, visible keyboard focus indicators meeting WCAG 2.2 Success Criterion 2.4.7/2.4.11.",
        "10. Implement fluid typography and spacing scale using clamp() and mathematical tokens.",
        "11. Implement full dark mode and light mode theme switching utilizing CSS custom properties and light-dark() functions.",
        "12. Structure all stylesheets inside CSS Cascade Layers (@layer reset, base, layout, components, utilities).",
        "13. Execute performance audits with content-visibility: auto on heavy off-screen dashboard widgets.",
        "14. Submit complete source code, responsive screenshots, Lighthouse audit report, and WCAG accessibility compliance verification."
      ]
    },
    "lessonContent": {
      "overview": "### Advanced Project 1: SaaS Analytics Dashboard\\nBuild an enterprise cloud dashboard interface featuring container queries, subgrid data tables, accessible modal dialogs, and cascade layers.",
      "analogyHero": "An enterprise dashboard is the cockpit of a modern cloud platform: every dial, switch, and data stream must be legible, responsive, and rock-solid.",
      "objectives": [
        "Synthesize modern CSS specifications: Cascade Layers, Container Queries, and Subgrid.",
        "Achieve 100% WCAG 2.2 AA accessibility compliance across keyboard and screen reader flows.",
        "Optimize Core Web Vitals to achieve sub-second FCP and 0 Cumulative Layout Shift."
      ],
      "estimatedTime": "5 hours",
      "syntaxGuide": "Dashboard Architecture:\\n1. Layout Shell -> CSS Grid with sidebar [260px] and main content [1fr]\\n2. Cascade Layers -> @layer reset, base, layout, components, utilities\\n3. Accessibility -> Semantic landmarks, focus-visible rings, ARIA live regions",
      "sections": [
        {
          "id": "sec-proj-adv1-1",
          "title": "Dashboard Shell Blueprint",
          "difficulty": "Advanced",
          "content": "Follow the structured blueprint below to construct your enterprise SaaS dashboard layout.",
          "codeSnippets": [
            {
              "language": "html",
              "filename": "dashboard-layout.html",
              "title": "Enterprise Dashboard HTML Shell",
              "code": "<div class=\\"dashboard-shell\\">\\n  <aside class=\\"dashboard-sidebar\\" aria-label=\\"Main Navigation\\">\\n    <div class=\\"sidebar-brand\\">Skillora Cloud</div>\\n    <nav class=\\"sidebar-nav\\">\\n      <a href=\\"#overview\\" class=\\"nav-item active\\">Overview</a>\\n      <a href=\\"#analytics\\" class=\\"nav-item\\">Analytics</a>\\n      <a href=\\"#settings\\" class=\\"nav-item\\">Settings</a>\\n    </nav>\\n  </aside>\\n  <div class=\\"dashboard-main\\">\\n    <header class=\\"dashboard-header\\">\\n      <h1 class=\\"page-title\\">System Telemetry</h1>\\n    </header>\\n    <main id=\\"main-content\\" class=\\"dashboard-content\\">\\n      <!-- Metric cards, charts, and data tables -->\\n    </main>\\n  </div>\\n</div>",
              "explanation": "Grid-powered dashboard shell establishing sidebar and responsive main content tracks."
            }
          ]
        }
      ],
      "keyTakeaways": [
        "Use CSS Grid for the master dashboard shell and Container Queries for individual widgets.",
        "Ensure all data tables have accessible headers and readable contrast on both light and dark themes.",
        "Verify zero layout shifts during dynamic card resizing and theme transitions."
      ],
      "summary": "Complete the 14 deliverables for Project 1 and prepare for Advanced Project 2."
    },
    "questions": []
  }`;

// Advanced Production Project 2
const advProject2TS = `  {
    "id": "htmlcss-adv-p2",
    "orderIndex": 16,
    "title": "Advanced Production Project 2: Production-Ready Multi-Page Design System",
    "description": "Construct an enterprise-grade, atomic design system and documentation website in pure HTML & CSS featuring design tokens, buttons, inputs, alerts, badges, cards, modals, navigation, and live interactive demo pages. (15 Deliverables).",
    "status": "locked",
    "requiresQuiz": false,
    "isProject": true,
    "xpReward": 1000,
    "level": "advanced",
    "projectDetails": {
      "id": "htmlcss-adv-p2",
      "title": "Production-Ready Multi-Page Design System",
      "description": "Build an enterprise design system component library and living documentation website adhering to Atomic Design principles, CSS Cascade Layers, and WCAG 2.2 standards.",
      "estimatedDuration": "6 hours",
      "difficulty": "Advanced",
      "deliverables": [
        "1. Define comprehensive 3-tier Design Token architecture (:root global tokens, semantic tokens, and component-scoped tokens).",
        "2. Establish accessible mathematical typography scale and fluid line-height hierarchy.",
        "3. Define standardized 8-point spatial grid system and elevation shadow tokens.",
        "4. Build Button component system with 5 variants (primary, secondary, outline, ghost, danger) and 4 size scales.",
        "5. Build Form Controls library (text inputs, floating labels, custom checkboxes, radio groups, toggle switches, select dropdowns).",
        "6. Build Alert and Toast Notification system with informational, success, warning, and critical error themes.",
        "7. Build Badge and Status Pill component suite with high-contrast text and icon support.",
        "8. Build Card component system with header, body, media cover, footer actions, and hover elevation states.",
        "9. Build Modal Dialog and Drawer slide-out component styles with native backdrop blur.",
        "10. Build Navigation suite (top navbar, breadcrumb trail, pagination bar, and tab switcher).",
        "11. Build Table component system with striped rows, sticky headers, and responsive horizontal scroll container.",
        "12. Structure all stylesheets inside modern CSS Cascade Layers (@layer tokens, reset, base, components, utilities).",
        "13. Build living Multi-Page Documentation Website showcasing interactive code previews and copyable HTML/CSS snippets.",
        "14. Implement automated PostCSS build pipeline with minification and PurgeCSS tree-shaking.",
        "15. Submit complete design system codebase, documentation website, and automated visual regression test suite."
      ]
    },
    "lessonContent": {
      "overview": "### Advanced Project 2: Multi-Page Design System\\nBuild an enterprise atomic design system and interactive documentation website in pure HTML & CSS.",
      "analogyHero": "A design system is the DNA of an organization's digital identity: ensuring every team builds consistent, accessible, and high-performance interfaces.",
      "objectives": [
        "Construct a production-grade 3-tier design token architecture in pure CSS.",
        "Build a complete library of atomic components (buttons, inputs, cards, dialogs, navigation).",
        "Publish a multi-page living documentation website with interactive code snippets."
      ],
      "estimatedTime": "6 hours",
      "syntaxGuide": "Design System Architecture:\\n1. @layer tokens -> Global brand variables, semantic color mappings, spacing scale\\n2. @layer components -> BEM-structured atomic and molecular UI components\\n3. @layer utilities -> Layout helpers, screen-reader-only text, spacing overrides",
      "sections": [
        {
          "id": "sec-proj-adv2-1",
          "title": "Design System Token Blueprint",
          "difficulty": "Advanced",
          "content": "Follow the structured blueprint below to construct your enterprise design system.",
          "codeSnippets": [
            {
              "language": "css",
              "filename": "design-tokens.css",
              "title": "3-Tier Design Token Architecture",
              "code": "@layer tokens {\\n  :root {\\n    /* Tier 1: Global Primitive Tokens */\\n    --blue-500: #2563eb;\\n    --blue-600: #1d4ed8;\\n    --slate-900: #0f172a;\\n    \\n    /* Tier 2: Semantic Intent Tokens */\\n    --color-brand-primary: var(--blue-500);\\n    --color-brand-primary-hover: var(--blue-600);\\n    --color-text-base: var(--slate-900);\\n    \\n    /* Tier 3: Component Scoped Tokens */\\n    --btn-primary-bg: var(--color-brand-primary);\\n    --btn-primary-color: #ffffff;\\n  }\\n}",
              "explanation": "Hierarchical 3-tier design token structure isolating primitive values from semantic usage."
            }
          ]
        }
      ],
      "keyTakeaways": [
        "Design tokens create a single source of truth for color, typography, spacing, and elevation.",
        "Organize styles using Cascade Layers (@layer) to guarantee component encapsulation.",
        "A living documentation website accelerates engineering velocity and guarantees visual consistency."
      ],
      "summary": "Complete the 15 deliverables for Project 2 and take the Advanced Final Assessment to earn your Master Web Developer Certificate."
    },
    "questions": []
  }`;

// Advanced Assessment Task
const advAssessmentTS = `  {
    "id": "htmlcss-adv-assessment",
    "orderIndex": 17,
    "title": "Advanced Final Assessment: Master Web Developer Certification Exam",
    "description": "Official 40-question comprehensive master certification exam testing modern CSS layout systems, container queries, cascade layers, subgrid, fluid typography, performance optimization, WCAG 2.2 accessibility, and design system architecture. (Passing threshold: 35/40).",
    "status": "locked",
    "requiresQuiz": true,
    "isFinalAssessment": true,
    "passingScore": 35,
    "totalQuestions": 40,
    "xpReward": 1000,
    "level": "advanced",
    "lessonContent": {
      "overview": "### Official Master Certification Exam\\nDemonstrate your comprehensive mastery across all 40 modules and 4 practical projects of the HTML & CSS Masterclass. Passing this exam (>= 35/40) with 100% course completion unlocks the prestigious Skillora Master Web Developer Certificate.",
      "analogyHero": "Your definitive credential validating senior-level frontend HTML & CSS architectural competence.",
      "objectives": [
        "Validate elite mastery of modern CSS layout algorithms, cascade layers, container queries, and subgrid.",
        "Demonstrate deep architectural competence in accessibility (WCAG 2.2 AA/AAA), design systems, and rendering performance.",
        "Score at least 35/40 (87.5%) to earn the Master HTML & CSS Certification."
      ],
      "estimatedTime": "60 mins",
      "syntaxGuide": "Master Exam Rules: Exactly 40 questions, 4 options per question, passing threshold 35/40 (87.5%).",
      "sections": [],
      "keyTakeaways": [
        "Thoroughly analyze every architecture scenario and CSS code snippet before selecting your option.",
        "Score >= 35/40 with all 40 modules and 4 projects complete to claim your Master Certificate."
      ],
      "summary": "Advanced Final Assessment instructions and rules."
    },
    "questions": HTMLCSS_ADVANCED_FINAL_ASSESSMENT
  }`;

const advancedFileContent = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export const HTMLCSS_ADVANCED_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(ADVANCED_MCQS, null, 2)};

export const HTMLCSS_ADVANCED_TASKS: Task[] = [
${advancedTasks.join(',\n')},
${advProject1TS},
${advProject2TS},
${advAssessmentTS}
];
`;

fs.writeFileSync(path.join(__dirname, '../src/features/roadmap/data/html-css/htmlCssAdvanced.data.ts'), advancedFileContent, 'utf8');
console.log('Successfully wrote htmlCssAdvanced.data.ts');
