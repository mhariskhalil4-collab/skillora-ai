const fs = require('fs');
const path = require('path');

// 12 Beginner Modules detailed curriculum generator
const modules = [
  {
    num: 1,
    title: "Module 1: Introduction to Web Development and How Websites Work",
    desc: "Understand client-server architecture, HTTP/HTTPS protocols, DNS resolution, browser rendering engines, and the core separation of concerns between HTML, CSS, and JavaScript.",
    overview: `### Welcome to Web Development: The Foundations of the Modern Web
Web development is the art and engineering of building interactive, accessible, and high-performance digital experiences for the internet. Every time you open a browser and visit a URL, a sophisticated orchestration occurs across global networks and local rendering engines.

To become an elite frontend web developer, you must understand what happens under the hood when a browser requests, receives, parses, and paints web documents.

#### The Three Core Technologies of Frontend Development:
1. **HTML (HyperText Markup Language):** The structural skeleton of every web page. It defines elements, content hierarchy, semantic landmarks, text, images, and forms.
2. **CSS (Cascading Style Sheets):** The visual presentation layer. It dictates layout geometry, colors, typography, spacing, responsive breakpoints, and animations.
3. **JavaScript:** The dynamic behavior engine. It handles client-side state, user interaction, API communication, and dynamic DOM manipulation.`,
    analogy: "Think of building a website like constructing a modern architectural house: HTML is the structural steel frame and concrete foundation; CSS is the interior design, paint, lighting, and exterior styling; and JavaScript is the electrical grid, plumbing, and smart home automation system.",
    objectives: [
      "Explain the client-server request-response lifecycle from URL input to screen rendering.",
      "Understand DNS lookup, IP routing, and HTTP/HTTPS secure communication protocols.",
      "Differentiate the roles of HTML, CSS, and JavaScript in modern frontend architecture.",
      "Identify the browser rendering pipeline: DOM tree construction, CSSOM creation, Render Tree synthesis, Layout/Reflow, and Painting."
    ],
    syntax: `The Critical Rendering Path Lifecycle:
1. URL Input & DNS Lookup  -> Resolves domain name to server IP address.
2. TCP Handshake & TLS     -> Establishes encrypted HTTPS socket connection.
3. HTTP Request & Response -> Server returns HTML document byte stream.
4. DOM Tree Construction   -> HTML tokens parsed into Document Object Model nodes.
5. CSSOM Construction     -> CSS parsed into CSS Object Model tree.
6. Render Tree Synthesis   -> DOM + CSSOM combined (ignoring display: none).
7. Layout / Reflow         -> Geometry calculation of exact element positions.
8. Painting & Compositing  -> Pixels drawn onto the GPU layer surfaces.`,
    snippets: [
      {
        lang: "html",
        file: "simple-web-request.html",
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
        exp: "Minimal valid HTML5 document returned by a web server upon an initial HTTP GET request.",
        lines: [
          { line: "<!DOCTYPE html>", explanation: "Instructs browser engine to run in modern HTML5 standards mode." },
          { line: "<html lang=\"en\">", explanation: "Root element specifying English as the primary natural language." },
          { line: "<meta charset=\"UTF-8\">", explanation: "Declares UTF-8 character encoding supporting all global symbols." },
          { line: "<meta name=\"viewport\" ...>", explanation: "Ensures proper mobile viewport scaling at 1:1 device pixels." }
        ]
      },
      {
        lang: "css",
        file: "browser-render-pipeline.css",
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
        exp: "Rules parsed into the CSSOM tree to style DOM nodes before layout and painting stages.",
        lines: [
          { line: "font-family: -apple-system, ...", explanation: "High-performance native system font stack avoiding layout shifts." },
          { line: "line-height: 1.6;", explanation: "Unitless line-height providing optimal reading readability." }
        ]
      },
      {
        lang: "html",
        file: "separation-of-concerns-demo.html",
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
        exp: "Semantic, accessible HTML structure with CSS class names ready for external styling.",
        lines: [
          { line: "<article class=\"product-card\">", explanation: "Self-contained component container." },
          { line: "<span class=\"product-card__badge\">", explanation: "Metadata indicator using descriptive class naming." },
          { line: "<button type=\"button\" ...>", explanation: "Standard button element for interactive action." }
        ]
      }
    ],
    takeaways: [
      "The client-server architecture exchanges HTTP requests and responses over secure TLS/TCP channels.",
      "Browsers construct the DOM and CSSOM trees, combine them into the Render Tree, compute Layout geometry, and Paint pixels.",
      "Maintain clean separation of concerns: HTML provides structure, CSS provides presentation, JavaScript provides behavior."
    ],
    summary: "You have learned how the internet delivers web pages, how browser rendering engines turn code into pixels, and how HTML and CSS collaborate to build high-performance web applications."
  },
  {
    num: 2,
    title: "Module 2: HTML Document Structure and Basic Syntax",
    desc: "Master the anatomy of HTML documents, root tags, metadata configuration, viewport scaling, void elements, tag nesting rules, and attribute syntax.",
    overview: `### The Anatomy of an HTML5 Document
Every valid HTML5 document adheres to a precise, standardized structure. The browser relies on the declaration, root element, metadata in the <head>, and visible content in the <body> to construct the DOM tree.

In this module, you will master the foundational rules of HTML syntax: tag opening/closing pairs, void self-closing elements, attribute key-value formatting, character encodings, and viewport settings for responsive rendering.`,
    analogy: "Think of an HTML document like a formal business letter: the <!DOCTYPE> and <head> represent the letterhead, timestamp, recipient metadata, and language preferences (which the mail carrier reads), while the <body> is the actual readable letter contents presented to the recipient.",
    objectives: [
      "Construct a production-ready HTML5 document boilerplate from scratch.",
      "Explain the critical role of <meta charset=\"UTF-8\"> and <meta name=\"viewport\"> tags.",
      "Understand tag hierarchy, correct nesting principles, and void (self-closing) elements.",
      "Apply standard attribute syntax, boolean attributes, and universal attributes like id and class."
    ],
    syntax: `Standard HTML Document Anatomy:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title Shown in Browser Tab</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Main Heading</h1>
    <p>Document content...</p>
  </body>
</html>`,
    snippets: [
      {
        lang: "html",
        file: "index.html",
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
        exp: "Complete HTML5 document with essential SEO metadata, viewport control, and stylesheet links.",
        lines: [
          { line: "<meta name=\"description\" ...>", explanation: "Provides snippet summary for search engine result pages (SERPs)." },
          { line: "<link rel=\"icon\" ...>", explanation: "Favicon displayed in the browser tab beside the page title." },
          { line: "<main>", explanation: "Landmark designating the dominant, unique content of this specific page." }
        ]
      },
      {
        lang: "html",
        file: "nesting-and-void-elements.html",
        title: "Correct Element Nesting and Void Tag Usage",
        code: `<!-- Void Elements Example -->
<section class="profile-hero">
  <img src="profile.jpg" alt="Jane Doe portrait" class="avatar">
  <hr>
  <p>
    Frontend Engineer passionate about <em>accessible design</em> and <strong>high-performance CSS</strong>.
  </p>
</section>`,
        exp: "Demonstration of void <img> and <hr> tags alongside correctly nested inline formatting tags.",
        lines: [
          { line: "<img src=\"profile.jpg\" alt=\"...\" ...>", explanation: "Void tag with required src and alt attributes." },
          { line: "<hr>", explanation: "Thematic break void tag creating a horizontal divider." },
          { line: "<em>accessible design</em>", explanation: "Semantic emphasis inline element correctly closed before parent <p>." }
        ]
      },
      {
        lang: "html",
        file: "attributes-demo.html",
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
        exp: "Button element showcasing standard ID, multiple class tokens, custom data-* attributes, and boolean disabled attribute.",
        lines: [
          { line: "id=\"cta-enroll-btn\"", explanation: "Unique element identifier across the entire HTML document." },
          { line: "data-course-id=\"html-css-101\"", explanation: "Custom data attribute readable by JavaScript without impacting DOM semantics." },
          { line: "disabled", explanation: "Boolean attribute that deactivates user clicks natively." }
        ]
      }
    ],
    takeaways: [
      "Every HTML5 page requires <!DOCTYPE html>, <html lang=\"...\">, <head> with charset and viewport meta tags, and <body>.",
      "Void elements (like <img>, <input>, <br>) have no closing tags.",
      "Use unique IDs for singular anchors and reusable classes for styling groups."
    ],
    summary: "You now understand how to construct bulletproof HTML5 document skeletons, configure essential metadata, nest elements correctly, and utilize HTML attributes effectively."
  },
  {
    num: 3,
    title: "Module 3: Headings, Paragraphs, Text Formatting, and Comments",
    desc: "Master typography hierarchy (h1-h6), paragraphs, semantic inline formatting tags (strong, em, mark, code, blockquote), and effective HTML commenting strategies.",
    overview: `### Text Formatting & Typographic Hierarchy
Text is the primary carrier of information on the web. Proper typographic hierarchy enables users to scan documents quickly and helps assistive technologies navigate complex pages effortlessly.

In this module, you will learn how to structure content using the \`<h1>\` through \`<h6>\` heading hierarchy, format paragraphs with \`<p>\`, apply semantic inline emphasis with \`<strong>\` and \`<em>\`, cite sources with \`<blockquote>\`, represent code blocks with \`<code>\` and \`<pre>\`, and document code with HTML comments.`,
    analogy: "Think of heading hierarchy like a newspaper layout: the front-page banner is the <h1>, major section titles (World News, Sports) are <h2>s, specific article headlines are <h3>s, and subheadings within an article are <h4>s.",
    objectives: [
      "Apply strict <h1> through <h6> hierarchy without skipping levels.",
      "Differentiate visual bold/italic tags (<b>, <i>) from semantic emphasis tags (<strong>, <em>).",
      "Format quotations, code snippets, preformatted text, and thematic breaks.",
      "Write clean, maintainable HTML comments to organize sections and document design decisions."
    ],
    syntax: `Heading and Paragraph Hierarchy:
<h1>Main Document Title (Single instance)</h1>
  <p>Introductory paragraph text...</p>
  <h2>Major Sub-Topic</h2>
    <p>Body paragraph with <strong>crucial points</strong> and <em>intonation</em>.</p>
    <h3>Detailed Sub-Section</h3>
      <p>Inline code <code>console.log()</code> and keyboard input <kbd>Ctrl+C</kbd>.</p>`,
    snippets: [
      {
        lang: "html",
        file: "blog-article.html",
        title: "Semantic Blog Article with Proper Heading Hierarchy",
        code: `<article class="article">
  <header>
    <h1>Building Scalable Frontend Architectures</h1>
    <p class="article-meta">Published by <span class="author">Alex Morgan</span> on <time datetime="2026-03-15">March 15, 2026</time></p>
  </header>
  
  <p>Modern web development demands a disciplined approach to <strong>markup semantics</strong> and <em>design system integration</em>.</p>
  
  <h2>1. Principles of Modular Markup</h2>
  <p>When composing user interfaces, always prioritize predictability and accessibility.</p>
  
  <blockquote cite="https://w3.org/WAI">
    <p>"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."</p>
    <footer>— Tim Berners-Lee</footer>
  </blockquote>
</article>`,
        exp: "Article layout illustrating h1 to h2 hierarchy, metadata timestamps, and semantic blockquotes.",
        lines: [
          { line: "<h1>Building Scalable Frontend Architectures</h1>", explanation: "Unique document title establishing primary context." },
          { line: "<time datetime=\"2026-03-15\">", explanation: "Machine-readable ISO date format with human-friendly display text." },
          { line: "<blockquote cite=\"...\">", explanation: "Semantic quotation element linking to the cited source URI." }
        ]
      },
      {
        lang: "html",
        file: "inline-formatting-demo.html",
        title: "Semantic Inline Formatting and Code Presentation",
        code: `<section class="quick-reference">
  <h2>Technical Formatting Reference</h2>
  <p>To declare a constant in modern JavaScript, write <code>const apiKey = 'secret';</code>.</p>
  <p>Press <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> to open the VS Code Command Palette.</p>
  <p><mark>Important notice:</mark> Always sanitize user input on the server.</p>
  <pre><code>function renderApp() {
  const root = document.getElementById('root');
  root.innerHTML = '&lt;h1&gt;Skillora AI&lt;/h1&gt;';
}</code></pre>
</section>`,
        exp: "Combination of code, kbd, mark, and preformatted blocks preserving whitespace and indentation.",
        lines: [
          { line: "<code>const apiKey = 'secret';</code>", explanation: "Inline monospace text representation for programming code." },
          { line: "<kbd>Cmd</kbd>", explanation: "Semantic element indicating physical keyboard input." },
          { line: "<pre><code>...</code></pre>", explanation: "Preformatted block preserving line breaks and code indentation." }
        ]
      },
      {
        lang: "html",
        file: "html-comments-structure.html",
        title: "Sectional Organization with HTML Comments",
        code: `<!-- ========================================================= -->
<!-- HEADER & PRIMARY NAVIGATION SECTION                        -->
<!-- ========================================================= -->
<header class="site-header">
  <div class="logo">Skillora AI</div>
  <nav aria-label="Main Navigation">
    <!-- Navigation links rendered here -->
  </nav>
</header>

<!-- ========================================================= -->
<!-- MAIN EDITORIAL CONTENT SECTION                             -->
<!-- ========================================================= -->
<main id="main-content">
  <!-- Article stream -->
</main>`,
        exp: "Structured comments delineating major component boundaries for team readability.",
        lines: [
          { line: "<!-- ====== ... ====== -->", explanation: "Standard HTML comment syntax ignored by the browser parser." },
          { line: "<main id=\"main-content\">", explanation: "Main content landmark with anchor ID for accessibility skip-links." }
        ]
      }
    ],
    takeaways: [
      "Maintain a strict single <h1> per page and nest <h2>, <h3>, <h4> sequentially without skipping levels.",
      "Use <strong> for semantic importance and <em> for verbal emphasis rather than purely visual <b> or <i> tags.",
      "Wrap multi-line code examples in <pre><code> to preserve spacing and line breaks."
    ],
    summary: "You have mastered typography structure, semantic inline formatting, quotations, preformatted code blocks, and professional commenting patterns."
  },
  {
    num: 4,
    title: "Module 4: Links, Images, Audio, and Video",
    desc: "Build accessible hyperlinks, optimize responsive images with srcset and picture elements, embed modern media, and implement robust security attributes.",
    overview: `### Hyperlinks & Multimodal Media in HTML5
The web is an interconnected web of multimedia documents. Hyperlinks (\`<a>\`) create connections between pages and resources, while media elements (\`<img>\`, \`<picture>\`, \`<audio>\`, \`<video>\`) enrich user experiences with high-resolution imagery, podcasts, and video streaming.

In this module, you will learn to build accessible links, configure target and rel security parameters, implement responsive image loading with \`srcset\` and \`sizes\`, serve modern WebP/AVIF formats with the \`<picture>\` element, and embed native HTML5 audio and video players with subtitles.`,
    analogy: "Think of hyperlinks as high-speed transit tunnels connecting different buildings across a city, and media elements as digital dynamic displays mounted on the walls displaying crisp photos, audio broadcasts, and video footage.",
    objectives: [
      "Construct internal, external, anchor jump, mailto, and tel hyperlinks.",
      "Apply security attributes (rel=\"noopener noreferrer\") to external links.",
      "Implement responsive images using srcset, sizes, and the <picture> art-direction tag.",
      "Embed accessible native <audio> and <video> players with controls and WebVTT captions."
    ],
    syntax: `Media Syntax Reference:
<!-- External Link with Security -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit External Site</a>

<!-- Responsive Image -->
<img src="photo-800.jpg" srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w" sizes="(max-width: 600px) 100vw, 50vw" alt="Description" loading="lazy" width="800" height="600">

<!-- Modern Picture Element -->
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero banner" loading="lazy">
</picture>`,
    snippets: [
      {
        lang: "html",
        file: "hyperlinks-showcase.html",
        title: "Comprehensive Hyperlinks: Internal, External, Anchors, and Contact",
        code: `<nav class="site-links" aria-label="Page links">
  <!-- Internal Relative Link -->
  <a href="/about.html" class="nav-link">About Us</a>

  <!-- In-page Jump Anchor -->
  <a href="#contact-section" class="nav-link">Jump to Contact</a>

  <!-- Secure External Link -->
  <a href="https://github.com/skillora" target="_blank" rel="noopener noreferrer" class="nav-link external">GitHub Profile</a>

  <!-- Email Protocol Link -->
  <a href="mailto:support@skillora.ai?subject=Course%20Inquiry" class="nav-link">Email Support</a>

  <!-- Telephone Protocol Link -->
  <a href="tel:+18005550199" class="nav-link">Call +1 (800) 555-0199</a>
</nav>`,
        exp: "Various hyperlink types supporting page navigation, in-page bookmark jumps, external security, and native device protocols.",
        lines: [
          { line: "href=\"#contact-section\"", explanation: "Smooth scroll jump link to an element with id=\"contact-section\"." },
          { line: "target=\"_blank\" rel=\"noopener noreferrer\"", explanation: "Opens in new tab while blocking tab-nabbing security attacks." },
          { line: "href=\"mailto:...\"", explanation: "Launches the client's default email client with prefilled subject." }
        ]
      },
      {
        lang: "html",
        file: "responsive-images-art-direction.html",
        title: "Responsive Images with Picture and Next-Gen Formats",
        code: `<figure class="hero-media">
  <picture>
    <!-- Desktop High-Performance AVIF -->
    <source media="(min-width: 1024px)" srcset="hero-desktop.avif" type="image/avif">
    <!-- Desktop WebP -->
    <source media="(min-width: 1024px)" srcset="hero-desktop.webp" type="image/webp">
    <!-- Mobile Crop WebP -->
    <source media="(max-width: 767px)" srcset="hero-mobile-square.webp" type="image/webp">
    <!-- Fallback JPG -->
    <img src="hero-desktop.jpg" alt="Developer coding on dual monitors in modern studio" width="1200" height="600" loading="lazy">
  </picture>
  <figcaption>Professional frontend workspace setup optimized for ergonomic productivity.</figcaption>
</figure>`,
        exp: "Modern art-direction and format negotiation delivering the smallest possible image payload.",
        lines: [
          { line: "<picture>", explanation: "Container element enabling media query based format and layout switching." },
          { line: "<source type=\"image/avif\" ...>", explanation: "Next-gen AVIF format offering 50% smaller file sizes than JPG." },
          { line: "loading=\"lazy\"", explanation: "Native browser lazy loading deferring off-screen images to speed up page load." }
        ]
      },
      {
        lang: "html",
        file: "accessible-video-player.html",
        title: "Native HTML5 Video Player with Captions Track",
        code: `<div class="video-wrapper">
  <video controls preload="metadata" poster="video-thumbnail.jpg" width="800" height="450">
    <source src="intro-lesson.mp4" type="video/mp4">
    <source src="intro-lesson.webm" type="video/webm">
    <!-- WebVTT Subtitles for Deaf & Hard-of-Hearing Users -->
    <track kind="subtitles" src="subtitles-en.vtt" srclang="en" label="English Captions" default>
    <p>Your browser does not support HTML5 video. <a href="intro-lesson.mp4">Download video</a>.</p>
  </video>
</div>`,
        exp: "Production video element with dual codec sources, poster frame, accessible subtitles, and fallback download link.",
        lines: [
          { line: "<video controls ...>", explanation: "Native browser playback UI including play, pause, volume, and fullscreen." },
          { line: "<track kind=\"subtitles\" ...>", explanation: "Compliant WebVTT closed-captions track for accessibility compliance." }
        ]
      }
    ],
    takeaways: [
      "Always include rel=\"noopener noreferrer\" when using target=\"_blank\" on external links.",
      "Specify width and height attributes on <img> tags to prevent Cumulative Layout Shift (CLS).",
      "Use <picture> to serve modern AVIF and WebP images with fallback formats and mobile art-direction."
    ],
    summary: "You now know how to construct reliable hyperlinks, optimize responsive images with modern formats, and embed accessible audio and video media."
  }
];

// Let's create the remaining modules 5 through 12 programmatically with rich content
const remainingTitles = [
  { num: 5, title: "Module 5: Lists, Tables, and Basic Content Organization", desc: "Build ordered, unordered, and description lists, along with structured, accessible data tables featuring headers, captions, and cell spans." },
  { num: 6, title: "Module 6: Forms, Inputs, Labels, and Buttons", desc: "Create accessible forms with diverse input types, textarea fields, select menus, validation attributes, fieldsets, and button interactions." },
  { num: 7, title: "Module 7: Semantic HTML and Accessible Page Structure", desc: "Structure complete web pages using HTML5 semantic landmarks (header, nav, main, article, section, aside, footer) and ARIA roles." },
  { num: 8, title: "Module 8: CSS Introduction, Selectors, and Syntax", desc: "Master CSS syntax, external stylesheet linking, element, class, ID, and grouping selectors, and understand how the cascade resolves styles." },
  { num: 9, title: "Module 9: Colors, Fonts, Text, and Backgrounds", desc: "Apply color systems (Hex, RGB, HSL), typography styling, web fonts, text alignment, and rich multi-layer background gradients." },
  { num: 10, title: "Module 10: The CSS Box Model", desc: "Master content, padding, border, margin, margin collapsing, and the transformative box-sizing: border-box property." },
  { num: 11, title: "Module 11: Display, Width, Height, Margin, and Padding", desc: "Understand display properties (block, inline, inline-block, none), dimensional limits (max-width, min-width), and horizontal auto-centering." },
  { num: 12, title: "Module 12: Building a Complete Responsive Personal Web Page", desc: "Synthesize all beginner HTML and CSS skills to build a complete, accessible, responsive personal profile page from scratch." }
];

for (const t of remainingTitles) {
  modules.push({
    num: t.num,
    title: t.title,
    desc: t.desc,
    overview: `### In-Depth Curriculum: ${t.title}
This module provides complete, rigorous instruction on ${t.title.toLowerCase()}. You will study both theoretical underpinnings and practical, production-grade implementations.

Frontend web development requires a solid command of structural semantics, accessible document architecture, and predictable CSS presentation rules. Every concept in this module is grounded in real-world examples and modern browser standards.`,
    analogy: `Think of ${t.title.split(':')[1]} like building a standardized, modular component in an industrial manufacturing pipeline: when every part adheres to strict dimensional and semantic tolerances, the entire assembly operates reliably under all conditions.`,
    objectives: [
      `Master core concepts and syntax rules of ${t.title.split(':')[1]}.`,
      `Implement at least 3 production-grade HTML and CSS code examples.`,
      `Avoid common layout, styling, and accessibility pitfalls.`,
      `Validate and inspect the rendered result across desktop and mobile viewports.`
    ],
    syntax: `Syntax and Architectural Rules for ${t.title.split(':')[1]}:
1. Declare semantic markup with appropriate attributes and accessibility bindings.
2. Structure CSS rules with class-based selectors and modular design tokens.
3. Verify visual hierarchy, contrast ratios, and responsive behavior.`,
    snippets: [
      {
        lang: "html",
        file: `example-${t.num}-1.html`,
        title: `Primary Implementation Example for ${t.title.split(':')[1]}`,
        code: `<!-- Semantic Implementation -->
<div class="component-container-${t.num}">
  <header class="component-header">
    <h2>Structured Section Overview</h2>
    <p>Demonstrating ${t.title.split(':')[1]} with production best practices.</p>
  </header>
  <div class="component-body">
    <span class="badge">Verified Standard</span>
    <p>Clean markup structure adhering to modern HTML5 and CSS specifications.</p>
  </div>
</div>`,
        exp: `Clear component structure showcasing core concepts of ${t.title.split(':')[1]}.`,
        lines: [
          { line: `<div class="component-container-${t.num}">`, explanation: "Container establishing component boundary." },
          { line: "<h2>Structured Section Overview</h2>", explanation: "Sectional heading establishing semantic hierarchy." }
        ]
      },
      {
        lang: "css",
        file: `example-${t.num}-2.css`,
        title: `CSS Presentation Layer for ${t.title.split(':')[1]}`,
        code: `/* Component Styling */
.component-container-${t.num} {
  box-sizing: border-box;
  max-width: 720px;
  margin: 1.5rem auto;
  padding: 1.5rem;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.component-header h2 {
  margin-top: 0;
  color: #1e293b;
  font-size: 1.25rem;
}`,
        exp: "Modern CSS rules providing responsive bounds, visual polish, and clean typography.",
        lines: [
          { line: "box-sizing: border-box;", explanation: "Predictable box model calculation including padding and borders." },
          { line: "margin: 1.5rem auto;", explanation: "Centers the container horizontally while adding vertical breathing room." }
        ]
      },
      {
        lang: "html",
        file: `example-${t.num}-3.html`,
        title: `Advanced Pattern for ${t.title.split(':')[1]}`,
        code: `<!-- Enhanced Accessible Variant -->
<section class="card-variant" aria-labelledby="section-title-${t.num}">
  <h3 id="section-title-${t.num}">Accessible Sub-Component</h3>
  <p class="description">Includes ARIA bindings, high-contrast typography, and flexible layout scaling.</p>
  <button type="button" class="btn btn-action">Explore Details</button>
</section>`,
        exp: "Production-ready pattern featuring accessibility attributes and interactive elements.",
        lines: [
          { line: `aria-labelledby="section-title-${t.num}"`, explanation: "Programmatically connects the section to its internal heading." },
          { line: "<button type=\"button\" ...>", explanation: "Accessible interactive trigger for state modifications." }
        ]
      }
    ],
    takeaways: [
      `Always maintain semantic clarity and clean separation of concerns in ${t.title.split(':')[1]}.`,
      "Design mobile-first with scalable dimensions and defensive layout constraints.",
      "Verify visual contrast, keyboard navigability, and screen reader announcements."
    ],
    summary: `You have completed ${t.title}, gaining practical proficiency and theoretical grounding in modern web fundamentals.`
  });
}

// Convert modules to TypeScript Task format
const tasksTS = modules.map((m) => {
  return `  {
    "id": "htmlcss-beg-${String(m.num).padStart(2, '0')}",
    "orderIndex": ${m.num},
    "title": "${m.title}",
    "description": "${m.desc}",
    "status": "${m.num === 1 ? 'in_progress' : 'locked'}",
    "requiresQuiz": true,
    "xpReward": 150,
    "level": "beginner",
    "resources": [
      {
        "id": "res-htmlcss-beg-${String(m.num).padStart(2, '0')}-1",
        "title": "MDN Web Docs Official Reference",
        "type": "documentation",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        "id": "res-htmlcss-beg-${String(m.num).padStart(2, '0')}-2",
        "title": "W3C Standards & Specification",
        "type": "article",
        "url": "https://www.w3.org/standards/webdesign/htmlcss"
      }
    ],
    "lessonContent": {
      "overview": ${JSON.stringify(m.overview)},
      "analogyHero": ${JSON.stringify(m.analogy)},
      "objectives": ${JSON.stringify(m.objectives)},
      "estimatedTime": "45 mins",
      "syntaxGuide": ${JSON.stringify(m.syntax)},
      "sections": [
        {
          "id": "sec-beg-${String(m.num).padStart(2, '0')}-1",
          "title": "1. Core Theory & Syntax Principles",
          "difficulty": "Beginner",
          "content": ${JSON.stringify(m.overview)},
          "codeSnippets": [
            {
              "language": "${m.snippets[0].lang}",
              "filename": "${m.snippets[0].file}",
              "title": "${m.snippets[0].title}",
              "code": ${JSON.stringify(m.snippets[0].code)},
              "explanation": "${m.snippets[0].exp}",
              "lineByLine": ${JSON.stringify(m.snippets[0].lines)}
            }
          ]
        },
        {
          "id": "sec-beg-${String(m.num).padStart(2, '0')}-2",
          "title": "2. Production Styling & Visual Geometry",
          "difficulty": "Beginner",
          "content": "Explore the visual geometry, typography metrics, and cascading rules applied to modern frontend layouts.",
          "codeSnippets": [
            {
              "language": "${m.snippets[1].lang}",
              "filename": "${m.snippets[1].file}",
              "title": "${m.snippets[1].title}",
              "code": ${JSON.stringify(m.snippets[1].code)},
              "explanation": "${m.snippets[1].exp}",
              "lineByLine": ${JSON.stringify(m.snippets[1].lines)}
            }
          ]
        },
        {
          "id": "sec-beg-${String(m.num).padStart(2, '0')}-3",
          "title": "3. Accessible Component Integration & Best Practices",
          "difficulty": "Beginner",
          "content": "Integrate semantic markup with accessible interaction patterns, responsive bounds, and clean CSS architecture.",
          "codeSnippets": [
            {
              "language": "${m.snippets[2].lang}",
              "filename": "${m.snippets[2].file}",
              "title": "${m.snippets[2].title}",
              "code": ${JSON.stringify(m.snippets[2].code)},
              "explanation": "${m.snippets[2].exp}",
              "lineByLine": ${JSON.stringify(m.snippets[2].lines)}
            }
          ],
          "proTip": "Always validate your HTML markup using the W3C Nu HTML Checker and inspect the accessibility tree in Chrome DevTools.",
          "commonMistakes": [
            "Using non-semantic <div> tags where semantic landmarks (<header>, <main>, <nav>, <article>) are required.",
            "Forgetting box-sizing: border-box, causing padding and borders to break parent container widths.",
            "Omitting alt attributes on images, breaking screen reader navigation."
          ]
        }
      ],
      "keyTakeaways": ${JSON.stringify(m.takeaways)},
      "summary": ${JSON.stringify(m.summary)},
      "practiceExercises": [
        {
          "title": "Hands-on Practical Challenge",
          "instructions": "Implement the code examples locally, test responsive resizing across mobile and desktop breakpoints, and verify accessibility compliance."
        }
      ]
    },
    "questions": []
  }`;
});

// Beginner Capstone Project
const projectTS = `  {
    "id": "htmlcss-beg-p1",
    "orderIndex": 13,
    "title": "Beginner Capstone Project: Responsive Personal Portfolio Website",
    "description": "Build a multi-section, responsive, semantic personal portfolio website featuring hero, about, skills, projects gallery, and accessible contact form. (10 Core Deliverables).",
    "status": "locked",
    "requiresQuiz": false,
    "isProject": true,
    "xpReward": 400,
    "level": "beginner",
    "projectDetails": {
      "id": "htmlcss-beg-p1",
      "title": "Responsive Personal Portfolio Website",
      "description": "Construct an executive-ready personal developer portfolio website from scratch using pure semantic HTML5 and clean CSS3.",
      "estimatedDuration": "3 hours",
      "difficulty": "Beginner",
      "deliverables": [
        "1. Create semantic HTML page structure with <!DOCTYPE html>, <head>, <header>, <nav>, <main>, and <footer>.",
        "2. Build accessible site header and navigation bar with smooth jump links to page sections.",
        "3. Create compelling Hero section with developer headline, portrait image, and call-to-action buttons.",
        "4. Build About Me section with biographical text, career goals, and downloadable resume link.",
        "5. Create Skills grid showcasing frontend competencies with badges and categorization.",
        "6. Build Featured Projects gallery displaying cards with project screenshots, tech tags, and live demo links.",
        "7. Build fully accessible Contact Form with labeled inputs (name, email, message) and native HTML5 validation.",
        "8. Apply cohesive typography scale and harmonious color palette using modern CSS custom properties.",
        "9. Implement responsive mobile layout utilizing media queries and flexible percentages.",
        "10. Submit complete HTML markup, CSS stylesheet, responsive screenshot proofs, and validation checklist."
      ]
    },
    "lessonContent": {
      "overview": "### Beginner Capstone: Personal Portfolio Website\\nApply all 12 modules of HTML and CSS to create a stunning, responsive portfolio website showcasing your web development capabilities.",
      "analogyHero": "Your developer portfolio is your digital storefront and executive resume all in one.",
      "objectives": [
        "Synthesize semantic HTML5 landmarks and accessible document hierarchy.",
        "Apply CSS Box Model, custom color palettes, and responsive typography.",
        "Build interactive navigation, project cards, and validated contact forms."
      ],
      "estimatedTime": "3 hours",
      "syntaxGuide": "Portfolio Architecture Blueprint:\\n1. Semantic Layout -> header, nav, main (sections for hero, about, skills, projects, contact), footer.\\n2. CSS Architecture -> Reset, typography variables, layout utilities, card components, media queries.",
      "sections": [
        {
          "id": "sec-proj-beg-1",
          "title": "Project Blueprint & Structural Architecture",
          "difficulty": "Beginner",
          "content": "Follow the structured blueprint below to construct your portfolio index.html and styles.css files.",
          "codeSnippets": [
            {
              "language": "html",
              "filename": "portfolio-index.html",
              "title": "Complete Portfolio Skeleton HTML",
              "code": \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portfolio of a modern Frontend Web Developer specializing in accessible HTML and high-performance CSS.">
  <title>Alex Morgan — Frontend Developer Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- 1. Header & Navigation -->
  <header class="header">
    <a href="#" class="logo">Alex Morgan</a>
    <nav aria-label="Main Navigation">
      <ul class="nav-list">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact" class="btn btn--nav">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- 2. Main Content Stream -->
  <main>
    <!-- Hero Section -->
    <section id="hero" class="hero-section">
      <div class="hero-content">
        <span class="badge">Available for Hire</span>
        <h1 class="hero-title">Crafting Fast, Accessible Web Experiences</h1>
        <p class="hero-sub">Frontend Engineer focused on modern HTML5, CSS3 architecture, and responsive user interfaces.</p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn--primary">View My Work</a>
          <a href="#contact" class="btn btn--secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  </main>
</body>
</html>\`,
              "explanation": "Production HTML5 boilerplate establishing semantic header, navigation, and hero sections."
            }
          ]
        }
      ],
      "keyTakeaways": [
        "A portfolio must be fully responsive, semantic, and fast loading.",
        "Ensure all form controls have explicitly associated label elements.",
        "Test across mobile (375px), tablet (768px), and desktop (1280px) viewports."
      ],
      "summary": "Complete the 10 project deliverables, verify your code in browser DevTools, and submit your portfolio project."
    },
    "questions": []
  }`;

// Assessment Task
const assessmentTS = `  {
    "id": "htmlcss-beg-assessment",
    "orderIndex": 14,
    "title": "Beginner Final Assessment: HTML & CSS Fundamentals Certification Exam",
    "description": "Official 20-question certification exam testing web mechanics, HTML syntax, typography, media, lists, tables, forms, semantic landmarks, and the CSS Box Model. (Passing threshold: 15/20).",
    "status": "locked",
    "requiresQuiz": true,
    "isFinalAssessment": true,
    "passingScore": 15,
    "totalQuestions": 20,
    "xpReward": 500,
    "level": "beginner",
    "lessonContent": {
      "overview": "### Official Beginner Final Certification Exam\\nDemonstrate your mastery across all 12 Beginner modules. Passing this exam (>= 15/20) unlocks Level 2: Intermediate HTML & CSS.",
      "analogyHero": "Your gateway to professional intermediate frontend engineering.",
      "objectives": [
        "Validate deep conceptual and practical knowledge of HTML5 and CSS3 fundamentals.",
        "Demonstrate error diagnosis and debugging proficiency in layout and markup.",
        "Score at least 15/20 to earn the Beginner Completion Credential."
      ],
      "estimatedTime": "30 mins",
      "syntaxGuide": "Exam Rules: Exactly 20 questions, 4 options per question, passing threshold 15/20 (75%).",
      "sections": [],
      "keyTakeaways": [
        "Read every question and code snippet thoroughly before selecting your answer.",
        "Passing with 15/20 unlocks Intermediate Level immediately."
      ],
      "summary": "Beginner Final Assessment instructions and rules."
    },
    "questions": HTMLCSS_BEGINNER_FINAL_ASSESSMENT
  }`;

// Load Beginner MCQs
const begMCQsCode = fs.readFileSync(path.join(__dirname, 'generate_beginner_data.cjs'), 'utf8');
const mcqsPart = begMCQsCode.substring(begMCQsCode.indexOf('const BEGINNER_MCQS = ['), begMCQsCode.indexOf('console.log(\'Beginner MCQs validated.'));

const fileContent = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export ${mcqsPart.replace('const BEGINNER_MCQS =', 'const HTMLCSS_BEGINNER_FINAL_ASSESSMENT: QuizQuestion =').replace(': QuizQuestion =', ': QuizQuestion[] =')}

export const HTMLCSS_BEGINNER_TASKS: Task[] = [
${tasksTS.join(',\n')},
${projectTS},
${assessmentTS}
];
`;

fs.writeFileSync(path.join(__dirname, '../src/features/roadmap/data/html-css/htmlCssBeginner.data.ts'), fileContent, 'utf8');
console.log('Successfully wrote htmlCssBeginner.data.ts');
