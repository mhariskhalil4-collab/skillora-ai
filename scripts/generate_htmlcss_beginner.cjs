const fs = require('fs');
const path = require('path');

const BEGINNER_MODULES_SPECS = [
  {
    id: "htmlcss-beg-01",
    orderIndex: 1,
    title: "Module 1: Introduction to Web Development and How Websites Work",
    description: "Understand client-server architecture, HTTP/HTTPS protocols, DNS resolution, browser rendering engines, and the core separation of concerns between HTML, CSS, and JavaScript.",
    xpReward: 150,
    overview: `### Welcome to Web Development: The Foundations of the Modern Web
Web development is the art and engineering of building interactive, accessible, and high-performance digital experiences for the internet. Every time you open a browser and visit a URL, a sophisticated orchestration occurs across global networks and local rendering engines.

To become an elite frontend web developer, you must understand what happens under the hood when a browser requests, receives, parses, and paints web documents.

#### The Three Core Technologies of Frontend Development:
1. **HTML (HyperText Markup Language):** The structural skeleton of every web page. It defines elements, content hierarchy, semantic landmarks, text, images, and forms.
2. **CSS (Cascading Style Sheets):** The visual presentation layer. It dictates layout geometry, colors, typography, spacing, responsive breakpoints, and animations.
3. **JavaScript:** The dynamic behavior engine. It handles client-side state, user interaction, API communication, and dynamic DOM manipulation.`,
    analogyHero: "Think of building a website like constructing a modern architectural house: HTML is the structural steel frame and concrete foundation; CSS is the interior design, paint, lighting, and exterior styling; and JavaScript is the electrical grid, plumbing, and smart home automation system.",
    objectives: [
      "Explain the client-server request-response lifecycle from URL input to screen rendering.",
      "Understand DNS lookup, IP routing, and HTTP/HTTPS secure communication protocols.",
      "Differentiate the roles of HTML, CSS, and JavaScript in modern frontend architecture.",
      "Identify the browser rendering pipeline: DOM tree construction, CSSOM creation, Render Tree synthesis, Layout/Reflow, and Painting."
    ],
    syntaxGuide: `The Critical Rendering Path Lifecycle:
1. URL Input & DNS Lookup  → Resolves domain name to server IP address.
2. TCP Handshake & TLS     → Establishes encrypted HTTPS socket connection.
3. HTTP Request & Response → Server returns HTML document byte stream.
4. DOM Tree Construction   → HTML tokens parsed into Document Object Model nodes.
5. CSSOM Construction     → CSS parsed into CSS Object Model tree.
6. Render Tree Synthesis   → DOM + CSSOM combined (ignoring display: none).
7. Layout / Reflow         → Geometry calculation of exact element positions.
8. Painting & Compositing  → Pixels drawn onto the GPU layer surfaces.`,
    sections: [
      {
        id: "sec-beg-01-1",
        title: "1. The Client-Server Architecture & HTTP Lifecycle",
        difficulty: "Beginner",
        content: `### How Web Browsers Talk to Web Servers
When you navigate to \`https://skillora.ai/courses\`, your browser (the **Client**) initiates a sequence of standardized network protocols:
1. **DNS Resolution:** Your operating system queries DNS resolvers to translate \`skillora.ai\` into an IP address (e.g., \`104.21.45.12\`).
2. **TCP/TLS Handshake:** A secure transmission channel is established using HTTPS (Port 443).
3. **HTTP GET Request:** The browser sends an HTTP request headers package asking for the document at path \`/courses\`.
4. **Server Response:** The server processes the request and returns an HTTP response status code (\`200 OK\`) along with the raw HTML payload bytes.`,
        codeSnippets: [
          {
            language: "html",
            filename: "simple-web-request.html",
            title: "Basic Client-Side HTML Response Structure",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>How the Web Works — Skillora AI</title>
</head>
<body>
  <h1>Welcome to the Modern Web</h1>
  <p>Your browser parsed this HTML stream from the server and rendered it to your screen.</p>
</body>
</html>`,
            explanation: "Minimal valid HTML5 document returned by a web server upon an initial HTTP GET request.",
            lineByLine: [
              { line: "<!DOCTYPE html>", explanation: "Instructs browser engine to run in modern HTML5 standards mode." },
              { line: "<html lang=\"en\">", explanation: "Root element specifying English as the primary natural language." },
              { line: "<meta charset=\"UTF-8\">", explanation: "Declares UTF-8 character encoding supporting all global symbols." },
              { line: "<meta name=\"viewport\" ...>", explanation: "Ensures proper mobile viewport scaling at 1:1 device pixels." }
            ]
          }
        ]
      },
      {
        id: "sec-beg-01-2",
        title: "2. The Browser Rendering Engine Pipeline",
        difficulty: "Beginner",
        content: `### From HTML Characters to Visible Pixels
Once the browser begins receiving HTML bytes, the rendering engine (e.g., Blink in Chrome/Edge, Gecko in Firefox, WebKit in Safari) performs:
1. **Tokenization & Parsing:** Converts raw characters into HTML tokens, creating the **DOM (Document Object Model)** tree.
2. **Style Resolution:** Parses external, internal, and inline CSS to create the **CSSOM (CSS Object Model)** tree.
3. **Render Tree Generation:** Merges DOM and CSSOM trees. Elements with \`display: none\` or inside \`<head>\` are excluded.
4. **Layout (Reflow):** Determines the exact geometric coordinates and pixel dimensions for every visible element on the page.
5. **Paint (Rasterization):** Fills in pixels, text glyphs, colors, borders, shadows, and images on the screen.`,
        codeSnippets: [
          {
            language: "css",
            filename: "browser-render-pipeline.css",
            title: "CSS Styles Applied in the CSSOM Tree",
            code: `/* CSSOM rules computed during style resolution */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f8fafc;
  color: #0f172a;
  line-height: 1.6;
}

h1 {
  color: #2563eb;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}`,
            explanation: "Rules parsed into the CSSOM tree to style DOM nodes before layout and painting stages.",
            lineByLine: [
              { line: "font-family: -apple-system, ...", explanation: "High-performance native system font stack avoiding layout shifts." },
              { line: "line-height: 1.6;", explanation: "Unitless line-height providing optimal reading readability." }
            ]
          }
        ]
      },
      {
        id: "sec-beg-01-3",
        title: "3. Separation of Concerns in Modern Frontend Architecture",
        difficulty: "Beginner",
        content: `### Clean Architecture: HTML vs CSS vs JavaScript
Professional frontend developers adhere strictly to the **Separation of Concerns** principle:
- **Never use HTML for styling:** Avoid outdated presentation tags like \`<font>\`, \`<center>\`, or inline styling hacks.
- **Never use CSS for structure:** Keep content and landmarks purely in semantic HTML.
- **Progressive Enhancement:** Build a resilient, accessible HTML baseline, enhance it visually with CSS, and add interactive features with JavaScript.`,
        codeSnippets: [
          {
            language: "html",
            filename: "separation-of-concerns-demo.html",
            title: "Clean Separation: Semantic Markup with Linked Styles",
            code: `<!-- 1. Semantic Structure (HTML) -->
<article class="product-card">
  <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8" alt="MacBook Pro on wooden desk" class="product-card__image">
  <div class="product-card__content">
    <span class="product-card__badge">In Stock</span>
    <h2 class="product-card__title">Pro Workstation Laptop</h2>
    <p class="product-card__price">$1,999.00</p>
    <button type="button" class="btn btn--primary">Add to Cart</button>
  </div>
</article>`,
            explanation: "Semantic, accessible HTML structure with CSS class names ready for external styling.",
            lineByLine: [
              { line: "<article class=\"product-card\">", explanation: "Self-contained component container." },
              { line: "<span class=\"product-card__badge\">", explanation: "Metadata indicator using descriptive class naming." },
              { line: "<button type=\"button\" ...>", explanation: "Standard button element for interactive action." }
            ]
          }
        ],
        proTip: "Always use Chrome DevTools (F12 or Cmd+Option+I) Network and Performance tabs to inspect real-time DOM/CSSOM construction and resource load timings.",
        commonMistakes: [
          "Using presentation tags like <center> and <font> instead of modern CSS stylesheets.",
          "Failing to understand the difference between client-side rendering and server-side HTTP delivery.",
          "Writing all styles inline on HTML tags, creating unmaintainable code that cannot be cached."
        ]
      }
    ],
    keyTakeaways: [
      "The client-server architecture exchanges HTTP requests and responses over secure TLS/TCP channels.",
      "Browsers construct the DOM and CSSOM trees, combine them into the Render Tree, compute Layout geometry, and Paint pixels.",
      "Maintain clean separation of concerns: HTML provides structure, CSS provides presentation, JavaScript provides behavior."
    ],
    summary: "You have learned how the internet delivers web pages, how browser rendering engines turn code into pixels, and how HTML and CSS collaborate to build high-performance web applications."
  },
  {
    id: "htmlcss-beg-02",
    orderIndex: 2,
    title: "Module 2: HTML Document Structure and Basic Syntax",
    description: "Master the anatomy of HTML documents, root tags, metadata configuration, viewport scaling, void elements, tag nesting rules, and attribute syntax.",
    xpReward: 150,
    overview: `### The Anatomy of an HTML5 Document
Every valid HTML5 document adheres to a precise, standardized structure. The browser relies on the declaration, root element, metadata in the \`<head>\`, and visible content in the \`<body>\` to construct the DOM tree.

In this module, you will master the foundational rules of HTML syntax: tag opening/closing pairs, void self-closing elements, attribute key-value formatting, character encodings, and viewport settings for responsive rendering.`,
    analogyHero: "Think of an HTML document like a formal business letter: the <!DOCTYPE> and <head> represent the letterhead, timestamp, recipient metadata, and language preferences (which the mail carrier reads), while the <body> is the actual readable letter contents presented to the recipient.",
    objectives: [
      "Construct a production-ready HTML5 document boiler-plate from scratch.",
      "Explain the critical role of <meta charset=\"UTF-8\"> and <meta name=\"viewport\"> tags.",
      "Understand tag hierarchy, correct nesting principles, and void (self-closing) elements.",
      "Apply standard attribute syntax, boolean attributes, and universal attributes like id and class."
    ],
    syntaxGuide: `Standard HTML Document Anatomy:
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Document Metadata, Title, Viewport, External CSS Links -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title Shown in Browser Tab</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Visible Content Rendered in Browser Window -->
    <h1>Main Heading</h1>
    <p>Document content...</p>
  </body>
</html>`,
    sections: [
      {
        id: "sec-beg-02-1",
        title: "1. The Essential HTML5 Boilerplate & Head Metadata",
        difficulty: "Beginner",
        content: `### Why Every Head Tag Matters
The \`<head>\` section holds machine-readable metadata about the page:
- \`<meta charset="UTF-8">\`: Specifies the character encoding. UTF-8 supports virtually all human languages, mathematical symbols, and emojis.
- \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`: Instructs mobile browsers to render the viewport at the device's physical pixel ratio rather than simulating an outdated 980px desktop screen.
- \`<title>\`: Defines the tab title in the browser, default bookmark name, and search engine title.`,
        codeSnippets: [
          {
            language: "html",
            filename: "index.html",
            title: "Production-Ready HTML5 Starter Template",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A comprehensive guide to modern HTML and CSS development.">
  <title>Skillora AI — Web Development Masterclass</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Web Development Mastery</h1>
  </header>
  <main>
    <p>Begin your journey to professional frontend engineering.</p>
  </main>
</body>
</html>`,
            explanation: "Complete HTML5 document with essential SEO metadata, viewport control, and stylesheet links.",
            lineByLine: [
              { line: "<meta name=\"description\" ...>", explanation: "Provides snippet summary for search engine result pages (SERPs)." },
              { line: "<link rel=\"icon\" ...>", explanation: "Favicon displayed in the browser tab beside the page title." },
              { line: "<main>", explanation: "Landmark designating the dominant, unique content of this specific page." }
            ]
          }
        ]
      },
      {
        id: "sec-beg-02-2",
        title: "2. Tag Nesting Rules & Void Elements",
        difficulty: "Beginner",
        content: `### Proper Nesting & Self-Closing Elements
HTML tags must close in reverse order of opening (First In, Last Out).
- **Correct:** \`<p>Learn <strong>HTML</strong> today.</p>\`
- **Incorrect:** \`<p>Learn <strong>HTML</p></strong>\` (Malformed DOM structure).

**Void Elements:** Certain elements do not contain text children and never have a closing tag:
- \`<img>\`, \`<input>\`, \`<br>\`, \`<hr>\`, \`<meta>\`, \`<link>\`. In HTML5, trailing slashes (\`<img />\`) are optional.`,
        codeSnippets: [
          {
            language: "html",
            filename: "nesting-and-void-elements.html",
            title: "Correct Element Nesting and Void Tag Usage",
            code: `<!-- Void Elements Example -->
<section class="profile-hero">
  <img src="profile.jpg" alt="Jane Doe portrait" class="avatar">
  <hr>
  <p>
    Frontend Engineer passionate about <em>accessible design</em> and <strong>high-performance CSS</strong>.
  </p>
</section>`,
            explanation: "Demonstration of void <img> and <hr> tags alongside correctly nested inline formatting tags.",
            lineByLine: [
              { line: "<img src=\"profile.jpg\" alt=\"...\" ...>", explanation: "Void tag with required src and alt attributes." },
              { line: "<hr>", explanation: "Thematic break void tag creating a horizontal divider." },
              { line: "<em>accessible design</em>", explanation: "Semantic emphasis inline element correctly closed before parent <p>." }
            ]
          }
        ]
      },
      {
        id: "sec-beg-02-3",
        title: "3. HTML Attributes: Syntax, Types, and Best Practices",
        difficulty: "Beginner",
        content: `### Attributes Provide Metadata & Configuration
Attributes modify element behavior or provide identifying metadata:
1. **Key-Value Attributes:** \`id="user-profile"\`, \`class="card card--featured"\`, \`href="https://..."\`.
2. **Boolean Attributes:** Presence indicates true, absence indicates false (e.g., \`disabled\`, \`required\`, \`checked\`, \`readonly\`).
3. **Global Attributes:** Can be added to any HTML element (\`id\`, \`class\`, \`style\`, \`title\`, \`hidden\`, \`tabindex\`, \`data-*\`).`,
        codeSnippets: [
          {
            language: "html",
            filename: "attributes-demo.html",
            title: "HTML Attribute Variations and Custom Data Attributes",
            code: `<!-- Global, Boolean, and Custom Data Attributes -->
<button 
  id="cta-enroll-btn" 
  class="btn btn--primary" 
  data-course-id="html-css-101"
  data-analytics-category="onboarding"
  type="submit"
  disabled>
  Enroll in Masterclass
</button>`,
            explanation: "Button element showcasing standard ID, multiple class tokens, custom data-* attributes, and boolean disabled attribute.",
            lineByLine: [
              { line: "id=\"cta-enroll-btn\"", explanation: "Unique element identifier across the entire HTML document." },
              { line: "data-course-id=\"html-css-101\"", explanation: "Custom data attribute readable by JavaScript without impacting DOM semantics." },
              { line: "disabled", explanation: "Boolean attribute that deactivates user clicks natively." }
            ]
          }
        ],
        proTip: "Never use duplicate `id` values on a single page. If multiple elements share styles or behavior, always use `class` attributes instead.",
        commonMistakes: [
          "Omitting the <!DOCTYPE html> declaration, forcing browsers into unpredictable quirks mode.",
          "Forgetting the viewport meta tag, causing responsive mobile styling to render zoomed-out.",
          "Overlapping tag closing order, causing the browser parser to repair broken DOM trees unpredictably."
        ]
      }
    ],
    keyTakeaways: [
      "Every HTML5 page requires <!DOCTYPE html>, <html lang=\"...\">, <head> with charset and viewport meta tags, and <body>.",
      "Void elements (like <img>, <input>, <br>) have no closing tags.",
      "Use unique IDs for singular anchors and reusable classes for styling groups."
    ],
    summary: "You now understand how to construct bulletproof HTML5 document skeletons, configure essential metadata, nest elements correctly, and utilize HTML attributes effectively."
  }
];

console.log('Beginner modules specs defined:', BEGINNER_MODULES_SPECS.length);
