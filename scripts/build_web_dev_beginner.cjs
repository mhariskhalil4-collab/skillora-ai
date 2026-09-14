const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/features/roadmap/data/web-development/webDevelopmentBeginner.data.ts');
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 20 High-Quality Beginner MCQs with balanced distribution (5 A, 5 B, 5 C, 5 D)
const BEGINNER_ASSESSMENT = [
  {
    id: 1,
    topic: 'Client-Server Architecture',
    question: 'In modern web development, what is the primary distinction between client-side (frontend) and server-side (backend) execution?',
    options: [
      'Client-side code executes in the user\'s web browser to render the UI and handle user interactions, while server-side code executes on remote web servers to handle database access, authentication, and business logic.',
      'Client-side code is written exclusively in HTML, while server-side code is written exclusively in CSS.',
      'Client-side code is stored in secure database clusters, while server-side code is downloaded to user devices upon page load.',
      'There is no difference; all web applications execute completely on the client\'s operating system kernel.'
    ],
    correctAnswer: 0, // A
    explanation: 'The frontend (client-side) runs in the browser using HTML, CSS, and JavaScript to manage presentation and interactivity. The backend (server-side) runs on web servers handling persistent data storage, business algorithms, API endpoints, and authentication.'
  },
  {
    id: 2,
    topic: 'HTTP vs HTTPS',
    question: 'Why is HTTPS mandatory for modern web development compared to legacy plain HTTP?',
    options: [
      'HTTPS guarantees that the web page will load in less than 50 milliseconds regardless of internet connection speed.',
      'HTTPS encrypts the communication channel between the client browser and the server using TLS/SSL, preventing eavesdropping, man-in-the-middle attacks, and data tampering.',
      'HTTPS automatically generates backend database schemas from HTML markup.',
      'HTTPS removes the need for web hosting servers by running websites over Bluetooth.'
    ],
    correctAnswer: 1, // B
    explanation: 'HTTPS (Hypertext Transfer Protocol Secure) leverages Transport Layer Security (TLS) encryption to ensure bidirectional confidentiality, integrity, and authentication for all network requests and responses.'
  },
  {
    id: 3,
    topic: 'Semantic HTML5',
    question: 'Which HTML5 element represents the primary navigation landmark of a webpage for both visual users and assistive screen reader technology?',
    options: [
      '<div id="menu-bar">',
      '<section class="nav-links">',
      '<nav>',
      '<header role="navigation-wrapper">'
    ],
    correctAnswer: 2, // C
    explanation: 'The semantic <nav> element designates a major navigational section containing links to other pages or parts within the current page, allowing screen reader users to jump directly to navigation landmarks.'
  },
  {
    id: 4,
    topic: 'HTML Image Accessibility',
    question: 'What is the primary function of the alt attribute on an <img> tag in HTML5?',
    options: [
      'It defines the CSS border radius of the image.',
      'It changes the image color scheme to grayscale.',
      'It specifies the download URL for high-resolution retina screens.',
      'It provides an accessible text alternative for screen readers and displays fallback text if the image fails to load.'
    ],
    correctAnswer: 3, // D
    explanation: 'The alt (alternative text) attribute is vital for accessibility (WCAG). It conveys the meaning or function of the image to visually impaired users using screen readers and renders fallback text if the image URL is broken.'
  },
  {
    id: 5,
    topic: 'CSS Box Model',
    question: 'When using the CSS property "box-sizing: border-box;", how are the width and height of an element calculated?',
    options: [
      'The specified width and height include content, padding, and border, keeping the overall rendered dimensions constant.',
      'Padding and borders are added on top of the specified width, expanding the total rendered box.',
      'Margins are included inside the element\'s background color.',
      'The element becomes invisible unless a fixed pixel height is defined.'
    ],
    correctAnswer: 0, // A
    explanation: 'With box-sizing: border-box, the declared width and height encompass the inner content, padding, and borders. This prevents unexpected element expansion when padding or borders are added.'
  },
  {
    id: 6,
    topic: 'CSS Selectors & Specificity',
    question: 'Which of the following CSS selectors has the highest specificity rating in the standard CSS cascade calculation?',
    options: [
      'div.container p.intro',
      '#main-header',
      '.navigation-menu > li.active',
      'header nav a:hover'
    ],
    correctAnswer: 1, // B
    explanation: 'An ID selector (#main-header) has a specificity weight of (1,0,0), which overrides any number of class selectors (0,1,0), pseudo-classes (0,1,0), or element tag selectors (0,0,1).'
  },
  {
    id: 7,
    topic: 'Responsive Design & Media Queries',
    question: 'What is the purpose of the "@media (min-width: 768px)" media query in a mobile-first CSS architecture?',
    options: [
      'It disables CSS on screens smaller than 768px.',
      'It applies styles only on desktop monitors with 4K resolution.',
      'It applies progressive layout enhancements and styles on viewport widths of 768px and wider (tablets and desktops).',
      'It scales down all fonts by 50% on mobile devices.'
    ],
    correctAnswer: 2, // C
    explanation: 'In mobile-first responsive architecture, default base styles target mobile viewports. min-width media queries progressively apply layout adjustments (such as multi-column layouts) as the viewport expands to 768px or wider.'
  },
  {
    id: 8,
    topic: 'CSS Flexbox Alignment',
    question: 'In a Flexbox container with "flex-direction: row", which property aligns flex items along the cross axis (vertically)?',
    options: [
      'justify-content',
      'flex-wrap',
      'flex-grow',
      'align-items'
    ],
    correctAnswer: 3, // D
    explanation: 'In a row flex container, the main axis is horizontal and controlled by justify-content. The cross axis is vertical and aligned using align-items (or align-self for individual items).'
  },
  {
    id: 9,
    topic: 'CSS Grid Tracks',
    question: 'What does the CSS Grid declaration "grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));" accomplish?',
    options: [
      'It creates an intrinsically responsive grid where columns automatically wrap and expand to fill available width without media queries, maintaining at least 280px width per column.',
      'It fixes the grid to exactly two columns regardless of screen size.',
      'It collapses all child elements into a single stacked column.',
      'It forces all grid tracks to have a static height of 280px.'
    ],
    correctAnswer: 0, // A
    explanation: 'The repeat(auto-fit, minmax(280px, 1fr)) pattern is the quintessential responsive grid utility. It dynamically fits as many 280px+ columns as space permits and flexes them evenly across available track space.'
  },
  {
    id: 10,
    topic: 'JavaScript Variables',
    question: 'Why is "const" preferred over "var" for declaring variables in modern JavaScript (ES6+)?',
    options: [
      'const variables can be redeclared multiple times in the same scope.',
      'const enforces block scope and prevents reassignment of the variable binding, eliminating accidental global leakage and hoisting bugs caused by var.',
      'const variables are automatically sent to the backend database.',
      'var is deprecated and throws a syntax error in all modern browsers.'
    ],
    correctAnswer: 1, // B
    explanation: 'const and let are block-scoped and exist in the Temporal Dead Zone until declared. const prevents reassignment of the variable identifier, creating safer, more predictable code compared to function-scoped, hoisted var.'
  },
  {
    id: 11,
    topic: 'JavaScript Strict Equality',
    question: 'What is the key difference between the loose equality operator (==) and strict equality operator (===) in JavaScript?',
    options: [
      '== compares memory addresses while === compares variable names.',
      '=== performs automatic type coercion before comparing values.',
      '=== checks both value and data type without performing implicit type coercion, while == performs type conversion before comparison.',
      'There is no difference; they are interchangeable.'
    ],
    correctAnswer: 2, // C
    explanation: 'The strict equality operator (===) requires both operands to have the exact same data type and value (e.g. 5 === "5" evaluates to false), avoiding confusing implicit type coercion bugs common with ==.'
  },
  {
    id: 12,
    topic: 'DOM Selection',
    question: 'Which modern DOM method retrieves the first matching element matching any valid CSS selector string?',
    options: [
      'document.getElementById()',
      'document.getElementsByClassName()',
      'document.selectAll()',
      'document.querySelector()'
    ],
    correctAnswer: 3, // D
    explanation: 'document.querySelector(selector) accepts any valid CSS selector string (e.g. "#hero .cta-button") and returns the first matching Element node in the document tree, or null if no match is found.'
  },
  {
    id: 13,
    topic: 'DOM Event Handling',
    question: 'Why should developers pass "event.preventDefault()" inside a form submit event listener in single-page applications?',
    options: [
      'To prevent the browser from executing its default full-page reload submission, allowing JavaScript to handle validation and asynchronous API dispatch.',
      'To delete all form input elements from the DOM permanently.',
      'To force the browser to reload the page twice.',
      'To clear the user\'s browser cookies automatically.'
    ],
    correctAnswer: 0, // A
    explanation: 'When a user submits an HTML form, the default browser action is to submit an HTTP request and reload the page. Calling e.preventDefault() halts this default action so JavaScript can validate and submit data asynchronously.'
  },
  {
    id: 14,
    topic: 'Event Delegation',
    question: 'What is Event Delegation and what architectural benefit does it provide in interactive web applications?',
    options: [
      'Creating a separate event listener for every single <li> item in a 1,000-item list.',
      'Attaching a single event listener to a common parent element to catch bubbled events from current and dynamically added child elements via event.target.',
      'Passing user passwords directly to external third-party servers.',
      'Disabling all click interactions on mobile devices.'
    ],
    correctAnswer: 1, // B
    explanation: 'Event delegation leverages event bubbling by placing one listener on a parent container. By checking event.target or event.target.closest(), it handles events for hundreds of child nodes—including future dynamically generated nodes—with minimal memory overhead.'
  },
  {
    id: 15,
    topic: 'Client-Side Form Validation',
    question: 'Why must client-side JavaScript form validation always be paired with server-side validation?',
    options: [
      'Because client-side validation only works on Safari browsers.',
      'Because CSS styles cannot be applied without server-side validation.',
      'Because client-side validation can be bypassed by disabling JavaScript, editing the DOM in DevTools, or sending raw HTTP requests directly to API endpoints.',
      'Because browsers only validate numbers, not text.'
    ],
    correctAnswer: 2, // C
    explanation: 'Client-side validation provides immediate, user-friendly UI feedback, but it provides zero security guarantees because malicious actors or scripts can easily bypass browser checks. Server-side validation is the true authoritative security perimeter.'
  },
  {
    id: 16,
    topic: 'Web Storage APIs',
    question: 'What is the primary operational difference between window.localStorage and window.sessionStorage?',
    options: [
      'localStorage only holds numbers, while sessionStorage holds images.',
      'sessionStorage data is sent to the server with every HTTP header, while localStorage is not.',
      'localStorage data is encrypted with SHA-256 by the browser automatically.',
      'localStorage data persists indefinitely across browser restarts until explicitly cleared, while sessionStorage data is wiped when the browser tab/session is closed.'
    ],
    correctAnswer: 3, // D
    explanation: 'window.localStorage persists data with no expiration date across browser restarts. window.sessionStorage maintains data only for the duration of the page session (as long as the browser tab remains open).'
  },
  {
    id: 17,
    topic: 'Fetch API & Async/Await',
    question: 'When using the Fetch API with async/await, what must be done to retrieve the parsed JSON response body?',
    options: [
      'Await the promise returned by "await response.json()", after first checking "response.ok" for HTTP error status codes.',
      'Call "JSON.parse(response)" synchronously without await.',
      'Pass the response object directly into a CSS stylesheet.',
      'Fetch automatically parses JSON into global variables without any function calls.'
    ],
    correctAnswer: 0, // A
    explanation: 'fetch() resolves to a Response stream object. Calling response.json() asynchronously reads and parses the stream into a JavaScript object. Checking response.ok ensures 4xx/5xx HTTP errors are caught.'
  },
  {
    id: 18,
    topic: 'Git Repository Lifecycle',
    question: 'What sequence of Git commands correctly stages modified files, creates a commit with a descriptive message, and uploads it to GitHub?',
    options: [
      'git status -> git branch -> git checkout',
      'git add . -> git commit -m "feat: implement hero section" -> git push origin main',
      'git init -> git pull -> git clone',
      'git merge -> git stash -> git clean -fd'
    ],
    correctAnswer: 1, // B
    explanation: 'git add stages working changes, git commit snapshots staged changes into local commit history with a message, and git push uploads the committed branch commits to the remote GitHub repository.'
  },
  {
    id: 19,
    topic: 'Web Accessibility (ARIA & Landmarks)',
    question: 'What is the first rule of ARIA in accessible web design according to W3C WAI guidelines?',
    options: [
      'Always add aria-hidden="true" to all interactive buttons.',
      'Add role="button" to every <div> instead of using native <button> tags.',
      'If a native HTML element or attribute already possesses the required semantic meaning and behavior, use it instead of repurposing an element and adding ARIA.',
      'Never use HTML headings on responsive pages.'
    ],
    correctAnswer: 2, // C
    explanation: 'The first rule of ARIA states: "If you can use a native HTML element or attribute with the semantics and behavior you require already built in, then do so." Native HTML elements provide built-in keyboard focus, accessibility tree roles, and device states.'
  },
  {
    id: 20,
    topic: 'Core Web Vitals Basics',
    question: 'Which Core Web Vital metric measures visual layout stability and prevents unexpected shifts of page elements during loading?',
    options: [
      'Largest Contentful Paint (LCP)',
      'Interaction to Next Paint (INP)',
      'First Input Delay (FID)',
      'Cumulative Layout Shift (CLS)'
    ],
    correctAnswer: 3, // D
    explanation: 'Cumulative Layout Shift (CLS) quantifies how often users experience sudden layout shifts when unexpected asynchronous elements or un-sized images push content down the screen while loading.'
  }
];

// 12 Beginner Theory Modules + 1 Capstone Project + 1 Assessment = 14 Tasks
const BEGINNER_MODULES_RAW = [
  {
    id: 'web-beg-01',
    title: '1. Introduction to Web Development & Client-Server Architecture',
    summary: 'Master the foundational architecture of the World Wide Web: client vs server execution, HTTP/HTTPS request lifecycle, DNS resolution, and modern web developer toolchains.',
    readingTime: '22 min',
    overview: 'Web development powers everything from static portfolio pages to complex global SaaS platforms. Understanding how web browsers interact with remote servers across the internet through the client-server model, DNS lookups, and secure HTTP/HTTPS protocols is the vital foundation for all software engineers.',
    learningObjectives: [
      'Differentiate between frontend, backend, and full-stack web development responsibilities',
      'Understand the client-server request-response lifecycle from URL entry to DOM rendering',
      'Explain how DNS resolution, IP addresses, web hosting, and SSL/TLS certificates operate',
      'Utilize browser Developer Tools (Elements, Console, Network tabs) to inspect and debug live web pages'
    ],
    syntaxGuide: '<!-- Browser Network & Request Lifecycle -->\nClient (Browser) --[DNS Lookup: example.com -> 93.184.216.34]--> DNS Server\nClient (Browser) --[HTTPS GET /index.html (Port 443)]----------> Web Server (Nginx/Cloudflare)\nWeb Server -----[HTTP/2 200 OK + HTML payload]-----------------> Client (Browser)\nClient (Browser) parses HTML -> requests CSS/JS/Images -> renders Render Tree (DOM + CSSOM)',
    proTips: [
      'Always keep the Browser DevTools Network tab open with "Disable cache" checked during local development to ensure you test clean asset loading.',
      'Understand the difference between static websites (served as pre-built HTML/CSS files) and dynamic web apps (rendered on-demand with server logic and database queries).'
    ],
    sections: [
      {
        title: '1. The Client-Server Architecture & Request Lifecycle',
        content: 'When a user enters a URL into a web browser, the client initiates a multi-stage communication process. First, the browser queries Domain Name System (DNS) servers to translate the human-readable domain name (e.g. skillora.ai) into a machine-routable IP address. Next, a TCP connection and TLS handshake are established over port 443 for HTTPS. The browser dispatches an HTTP GET request containing headers, and the web server processes the request and returns the requested HTML document along with HTTP status code 200 OK. The browser engine parses HTML into the Document Object Model (DOM), identifies external stylesheet and script assets, requests them in parallel, and computes the layout to paint pixels onto the screen.',
        codeSnippet: '// Conceptual Node.js / Browser Client-Server HTTP Flow\n// 1. Client initiates HTTP Request via Fetch API\nconst response = await fetch(\'https://api.skillora.ai/v1/health\', {\n  method: \'GET\',\n  headers: { \'Accept\': \'application/json\' }\n});\n\n// 2. Inspect status code and response payload\nif (response.ok) {\n  const data = await response.json();\n  console.log(\'Server Status:\', data.status); // "operational"\n}',
        lineByLine: [
          { line: 'fetch(\'https://api.skillora.ai/v1/health\')', explanation: 'Dispatches an asynchronous HTTPS GET request over the network to the server endpoint.' },
          { line: 'headers: { \'Accept\': \'application/json\' }', explanation: 'Informs the server that the client expects data returned in JSON format.' },
          { line: 'if (response.ok)', explanation: 'Verifies the HTTP status code is in the successful 200-299 range before parsing data.' }
        ],
        miniPractice: {
          task: 'Open your browser DevTools (F12 or right-click -> Inspect), navigate to the Network tab, reload any webpage, and observe the initial HTML document request status and response headers.',
          hint: 'Look for the "Doc" filter in the Network tab to view the primary HTML document payload.',
          solution: 'The first entry under the Doc filter will show the domain request, Status Code: 200 OK, Type: document, and Content-Type: text/html.'
        }
      },
      {
        title: '2. Frontend, Backend, and Full-Stack Engineering Roles',
        content: 'Modern web development is divided into specialized disciplines that collaborate to build software. Frontend engineering focuses on user interface (UI), user experience (UX), accessibility, client-side performance, and cross-device responsiveness using HTML5, CSS3, JavaScript, and frameworks like React or Vue. Backend engineering focuses on server runtime environments (Node.js, Python, Go), database architecture (PostgreSQL, MongoDB), business rules, authentication systems, and API design. Full-Stack engineers bridge both domains, architecting complete end-to-end applications from database models to responsive UI components.',
        codeSnippet: '<!-- Frontend UI Layer (HTML5/CSS/JS) -->\n<div class="user-card">\n  <h3 id="user-name">Loading...</h3>\n  <p id="user-role">Full-Stack Engineer</p>\n</div>\n\n<script>\n  // Client-side script hydrating UI from backend API\n  fetch(\'/api/profile\')\n    .then(res => res.json())\n    .then(data => {\n      document.getElementById(\'user-name\').textContent = data.name;\n    });\n</script>',
        lineByLine: [
          { line: '<div class="user-card">', explanation: 'Semantic container defining visual layout card on the client viewport.' },
          { line: 'fetch(\'/api/profile\')', explanation: 'Client request querying backend server API endpoint.' },
          { line: 'document.getElementById(\'user-name\').textContent = data.name', explanation: 'Client DOM manipulation inserting live server data into the rendered interface.' }
        ],
        miniPractice: {
          task: 'Identify whether validating password complexity in the browser vs hashing a password into a database is a frontend or backend task.',
          hint: 'Frontend handles instant UI feedback; backend handles secure data processing and cryptographic storage.',
          solution: 'Frontend checks password strength in real-time for UX; backend hashes the password with bcrypt and stores it securely in the database.'
        }
      },
      {
        title: '3. Web Developer Tools: Elements, Console & Network Inspection',
        content: 'Browser Developer Tools (DevTools) are an engineer\'s primary workspace for inspecting live code, analyzing network performance, diagnosing JavaScript runtime exceptions, and debugging responsive layouts. The Elements panel allows real-time inspection and editing of the DOM tree and active CSS computed styles. The Console panel displays console logs, JavaScript errors, and provides an interactive REPL. The Network panel visualizes all HTTP requests, timing breakdowns, payload sizes, and response headers.',
        codeSnippet: '// Diagnostic logging in Browser Developer Console\nconsole.group(\'🌐 Application Initialization\');\nconsole.log(\'Client User-Agent:\', navigator.userAgent);\nconsole.log(\'Screen Resolution:\', `${window.innerWidth}x${window.innerHeight}`);\nconsole.table([\n  { layer: \'Frontend\', tech: \'React + TypeScript\', status: \'Active\' },\n  { layer: \'Backend\', tech: \'Node.js + Express\', status: \'Connected\' }\n]);\nconsole.groupEnd();',
        lineByLine: [
          { line: 'console.group(\'...\')', explanation: 'Organizes multiple console messages into a collapsible group in the DevTools console.' },
          { line: 'navigator.userAgent', explanation: 'Browser property identifying the operating system and browser rendering engine.' },
          { line: 'console.table(...)', explanation: 'Renders tabular data cleanly in the DevTools console for rapid object inspection.' }
        ],
        miniPractice: {
          task: 'Use console.table() to output an array of 3 web development tools (e.g. VS Code, Git, Chrome DevTools) with their primary purpose.',
          hint: 'Pass an array of objects containing properties like { tool: "Git", purpose: "Version Control" }.',
          solution: 'console.table([{ tool: "VS Code", category: "IDE" }, { tool: "Git", category: "VCS" }, { tool: "DevTools", category: "Debugging" }]);'
        }
      }
    ],
    practiceExercise: {
      title: 'Client-Server Lifecycle & DevTools Audit Checkpoint',
      instructions: 'Review client-server communication concepts and inspect network headers on a local or remote web page.',
      starterCode: '<!-- Mini Practice: Structure a clean web page boilerplate -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Client Server Demo</title>\n</head>\n<body>\n  <!-- Add content here -->\n</body>\n</html>',
      solution: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Client Server Architecture</title>\n</head>\n<body>\n  <header>\n    <h1>Web Development Architecture</h1>\n    <p>Client sends HTTP requests; Server returns status codes & payloads.</p>\n  </header>\n</body>\n</html>'
    }
  },
  {
    id: 'web-beg-02',
    title: '2. HTML Fundamentals & Document Structure',
    summary: 'Master HTML5 document structure, semantic tags, headings, text formatting, links, media, tables, and fundamental document outline rules.',
    readingTime: '24 min',
    overview: 'HyperText Markup Language (HTML) is the structural backbone of every webpage. Learning semantic HTML elements, accessible document hierarchies, image optimization attributes, lists, and tables creates readable, SEO-optimized, and screen-reader accessible web applications.',
    learningObjectives: [
      'Write standards-compliant HTML5 boilerplate documents with proper metadata',
      'Utilize correct semantic elements (<header>, <main>, <section>, <article>, <footer>) instead of generic <div> soup',
      'Implement accessible links, responsive images with alt descriptions, and structured data tables',
      'Understand the difference between block-level and inline HTML elements'
    ],
    syntaxGuide: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Production-ready web application">\n  <title>Page Title</title>\n</head>\n<body>\n  <header><nav>...</nav></header>\n  <main><section>...</section></main>\n  <footer>...</footer>\n</body>\n</html>',
    proTips: [
      'Never skip the viewport meta tag: <meta name="viewport" content="width=device-width, initial-scale=1.0"> is essential for mobile responsiveness.',
      'Only use exactly one <h1> element per page to represent the primary document topic for search engines and accessibility screen readers.'
    ],
    sections: [
      {
        title: '1. HTML5 Boilerplate & Head Metadata',
        content: 'Every HTML5 document starts with the <!DOCTYPE html> declaration informing the browser engine to render in standards mode. Inside the <head> tag, engineers configure character encoding (UTF-8) to support universal characters, responsive viewport sizing, page titles, and SEO meta descriptions. External resources such as stylesheets, web fonts, and favicons are linked in the head to begin loading before the browser parses the body.',
        codeSnippet: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Skillora AI Web Development Masterclass">\n  <title>Mastering HTML5 Architecture | Skillora AI</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <h1>Welcome to Web Development</h1>\n</body>\n</html>',
        lineByLine: [
          { line: '<!DOCTYPE html>', explanation: 'Informs the browser rendering engine to parse HTML using standard HTML5 mode.' },
          { line: '<meta charset="UTF-8">', explanation: 'Configures character encoding to support all international characters and emojis.' },
          { line: '<meta name="viewport" ...>', explanation: 'Sets viewport width equal to device screen width with initial zoom scale of 1.0.' }
        ],
        miniPractice: {
          task: 'Explain why the <title> element belongs in the <head> rather than inside the <body>.',
          hint: 'The <head> contains metadata about the page; the <body> contains rendered content.',
          solution: '<title> provides the tab name in browser chrome and search engine snippets, so it is document metadata residing in <head>.'
        }
      },
      {
        title: '2. Semantic Landmarks: Header, Nav, Main, Section & Footer',
        content: 'Semantic HTML tags clearly describe their purpose to both browser engines and screen readers. Replacing un-semantic <div class="nav"> with <nav> allows assistive devices to announce navigation menus and provide jump shortcuts. A well-architected document uses <header> for introductory banners, <nav> for links, <main> for unique page content, <article> for standalone self-contained items (like blog posts or product cards), <section> for thematic groupings with headings, and <footer> for copyright and site links.',
        codeSnippet: '<header class="site-header">\n  <div class="logo">Skillora AI</div>\n  <nav aria-label="Main Navigation">\n    <ul>\n      <li><a href="#courses">Courses</a></li>\n      <li><a href="#about">About</a></li>\n    </ul>\n  </nav>\n</header>\n\n<main>\n  <article class="course-card">\n    <h2>Web Development Masterclass</h2>\n    <p>Become a production-ready full-stack engineer.</p>\n  </article>\n</main>\n\n<footer class="site-footer">\n  <p>&copy; 2026 Skillora AI. All rights reserved.</p>\n</footer>',
        lineByLine: [
          { line: '<nav aria-label="Main Navigation">', explanation: 'Semantic navigation landmark with explicit label for screen reader clarity.' },
          { line: '<main>', explanation: 'Encloses the primary central topic of the document (only one visible <main> per document).' },
          { line: '<article class="course-card">', explanation: 'Self-contained, reusable piece of content that could stand independently.' }
        ],
        miniPractice: {
          task: 'Write a semantic HTML structure for a blog post with a title, author/date header, 2 paragraphs of content, and a footer with tags.',
          hint: 'Use <article>, <header>, <p>, and <footer> tags.',
          solution: '<article><header><h2>CSS Grid Guide</h2><p>By Alex &bull; March 2026</p></header><p>Paragraph 1</p><p>Paragraph 2</p><footer><span>Tags: CSS, Web</span></footer></article>'
        }
      },
      {
        title: '3. Accessible Links, Media & Data Tables',
        content: 'Anchor tags (<a>) connect web pages across the internet. When opening external links in new tabs using target="_blank", developers must always specify rel="noopener noreferrer" to prevent security vulnerabilities (tabnabbing) and optimize performance. Images must include descriptive alt text and loading="lazy" for off-screen performance. Data tables must use <thead>, <tbody>, and <th scope="col"> for screen reader table navigation.',
        codeSnippet: '<!-- Accessible External Link -->\n<a href="https://github.com" target="_blank" rel="noopener noreferrer">\n  Visit GitHub Repository\n</a>\n\n<!-- Optimized Image -->\n<img src="/images/hero.webp" alt="Developer coding in modern IDE with multiple monitors" width="800" height="450" loading="lazy">\n\n<!-- Semantic Data Table -->\n<table>\n  <caption>Course Module Summary</caption>\n  <thead>\n    <tr>\n      <th scope="col">Level</th>\n      <th scope="col">Modules</th>\n      <th scope="col">Projects</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Beginner</td>\n      <td>12</td>\n      <td>1</td>\n    </tr>\n  </tbody>\n</table>',
        lineByLine: [
          { line: 'rel="noopener noreferrer"', explanation: 'Prevents the new tab from accessing window.opener, mitigating reverse tabnabbing security risks.' },
          { line: 'loading="lazy"', explanation: 'Defers image downloading until the element scrolls near the user\'s viewport.' },
          { line: '<th scope="col">Level</th>', explanation: 'Identifies the header cell as defining the column category for screen reader users.' }
        ],
        miniPractice: {
          task: 'What security vulnerability occurs if an anchor with target="_blank" omits rel="noopener"?',
          hint: 'The newly opened target window gains a JavaScript reference back to the originating window.',
          solution: 'Without noopener, the opened page can access window.opener and execute window.opener.location = "phishing-site.html" to hijack the user\'s tab.'
        }
      }
    ],
    practiceExercise: {
      title: 'Semantic Document Architecture Checkpoint',
      instructions: 'Construct a semantic HTML page containing a header, navigation, main section with 2 articles, and a footer.',
      starterCode: '<!-- Write a semantic HTML structure -->\n<div class="header">...</div>',
      solution: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Semantic Portal</title>\n</head>\n<body>\n  <header>\n    <h1>Skillora Portal</h1>\n    <nav>\n      <ul><li><a href="#home">Home</a></li></ul>\n    </nav>\n  </header>\n  <main>\n    <section>\n      <h2>Featured Tracks</h2>\n      <article><h3>Full-Stack Track</h3><p>Master React & Node</p></article>\n      <article><h3>Frontend Track</h3><p>Master CSS & TypeScript</p></article>\n    </section>\n  </main>\n  <footer><p>&copy; 2026 Skillora</p></footer>\n</body>\n</html>'
    }
  },
  {
    id: 'web-beg-03',
    title: '3. CSS Fundamentals, Styling Architecture & The Box Model',
    summary: 'Master CSS selectors, cascade inheritance, specificity scoring, the Box Model, typography, and modern color spaces.',
    readingTime: '24 min',
    overview: 'Cascading Style Sheets (CSS) transforms raw HTML markup into beautiful, engaging user interfaces. Understanding selector specificity, the CSS cascade, inheritance rules, and the Box Model is essential for building scalable, bug-free layouts.',
    learningObjectives: [
      'Master the CSS Box Model (content, padding, border, margin) and reset default box sizing',
      'Calculate CSS selector specificity accurately to avoid unintended style overrides',
      'Utilize relative units (rem, em, %) and modern color models (HSL, hex, rgb)',
      'Structure clean, modular CSS with consistent naming conventions and custom properties'
    ],
    syntaxGuide: '/* Modern CSS Box Model Reset & Typography */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --color-brand: hsl(220, 90%, 56%);\n  --font-base: 1rem; /* 16px */\n  --space-md: 1.5rem;\n}\n\n.card {\n  padding: var(--space-md);\n  background-color: #ffffff;\n  border: 1px solid hsl(220, 15%, 90%);\n  border-radius: 8px;\n}',
    proTips: [
      'Always set universal box-sizing: border-box in your CSS reset to ensure padding and border widths don\'t cause overflow.',
      'Use rem units for font sizes and spacing instead of px to honor the user\'s default browser accessibility font settings.'
    ],
    sections: [
      {
        title: '1. The CSS Box Model & Sizing Architecture',
        content: 'Every element rendered in HTML is a rectangular box composed of four concentric layers: Content (text, images), Padding (transparent space inside the border), Border (line wrapping the padding), and Margin (transparent space separating the element from adjacent elements). In the default content-box model, adding 20px of padding to a 300px wide box creates a 340px total rendered width. By declaring box-sizing: border-box on all elements, declared widths include padding and borders, guaranteeing predictable layouts.',
        codeSnippet: '/* Box Model Demonstration */\n.box-demo {\n  box-sizing: border-box;\n  width: 320px;\n  padding: 24px;\n  border: 2px solid hsl(220, 80%, 50%);\n  margin: 16px auto;\n  background-color: hsl(220, 20%, 97%);\n  /* Total Rendered Width is strictly 320px */\n}',
        lineByLine: [
          { line: 'box-sizing: border-box;', explanation: 'Ensures the 24px padding and 2px border are contained within the declared 320px width.' },
          { line: 'margin: 16px auto;', explanation: 'Applies 16px vertical margins and automatically centers the block element horizontally.' },
          { line: 'hsl(220, 80%, 50%)', explanation: 'Defines color using Hue (220 deg blue), Saturation (80%), and Lightness (50%).' }
        ],
        miniPractice: {
          task: 'If an element has width: 200px, padding: 10px, border: 2px, and box-sizing: content-box, what is its total rendered width on screen?',
          hint: 'content-box formula: total = width + (2 * padding) + (2 * border).',
          solution: 'Total width = 200px + 20px (left/right padding) + 4px (left/right border) = 224px.'
        }
      },
      {
        title: '2. Specificity Calculation & The Cascade Algorithm',
        content: 'When multiple conflicting CSS rules target the same HTML element, the browser cascade algorithm calculates selector specificity to decide which declaration wins. Specificity is calculated in a 3-part matrix: (ID, Class/Attribute/Pseudo-class, Type/Pseudo-element). For example, an ID selector (#nav) has a score of (1,0,0) (100 points), a class (.btn-primary) has (0,1,0) (10 points), and an element tag (button) has (0,0,1) (1 point). Inline styles override stylesheets, and !important should be avoided because it breaks the natural cascade.',
        codeSnippet: '/* Specificity Comparison */\n/* Specificity: (0, 0, 1) - Low */\nbutton {\n  background-color: gray;\n  color: white;\n}\n\n/* Specificity: (0, 1, 0) - Medium (Wins over button) */\n.btn-primary {\n  background-color: royalblue;\n}\n\n/* Specificity: (1, 0, 0) - High (Wins over class) */\n#submit-btn {\n  background-color: navy;\n}',
        lineByLine: [
          { line: 'button { ... }', explanation: 'Type selector targeting all <button> elements with specificity (0,0,1).' },
          { line: '.btn-primary { ... }', explanation: 'Class selector with specificity (0,1,0), overriding the general element rule.' },
          { line: '#submit-btn { ... }', explanation: 'ID selector with specificity (1,0,0), taking precedence over class and element rules.' }
        ],
        miniPractice: {
          task: 'Which selector wins between "div.card p.text" vs "#content p"? Calculate their specificity.',
          hint: 'div.card p.text has 2 elements and 2 classes (0,2,2). #content p has 1 ID and 1 element (1,0,1).',
          solution: '#content p wins because 1 ID (1,0,1) overrides any number of classes (0,2,2).'
        }
      },
      {
        title: '3. CSS Variables (Custom Properties) & Modern Typography',
        content: 'CSS Custom Properties (variables) enable centralized design tokens for colors, spacing scales, and typography rules. Declared on the :root pseudo-class, variables cascade throughout the DOM and can be updated dynamically with JavaScript or media queries to create dark mode themes seamlessly.',
        codeSnippet: ':root {\n  --primary-hue: 250;\n  --color-primary: hsl(var(--primary-hue), 85%, 60%);\n  --color-bg: hsl(0, 0%, 100%);\n  --color-text: hsl(0, 0%, 10%);\n}\n\n[data-theme="dark"] {\n  --color-bg: hsl(220, 20%, 10%);\n  --color-text: hsl(220, 20%, 95%);\n}\n\nbody {\n  background-color: var(--color-bg);\n  color: var(--color-text);\n  font-family: system-ui, -apple-system, sans-serif;\n  line-height: 1.6;\n}',
        lineByLine: [
          { line: ':root { --color-primary: ... }', explanation: 'Declares global CSS variables accessible on all child elements.' },
          { line: '[data-theme="dark"] { ... }', explanation: 'Overrides variable values when the dark theme attribute is set on <html> or <body>.' },
          { line: 'background-color: var(--color-bg);', explanation: 'Consumes the dynamic variable, changing automatically when the theme changes.' }
        ],
        miniPractice: {
          task: 'Create a CSS variable --font-heading and apply it to h1, h2, and h3 elements.',
          hint: 'Define --font-heading: "Inter", sans-serif; inside :root and use var(--font-heading).',
          solution: ':root { --font-heading: "Inter", sans-serif; } h1, h2, h3 { font-family: var(--font-heading); }'
        }
      }
    ],
    practiceExercise: {
      title: 'Box Model & Theme Tokens Exercise',
      instructions: 'Create a responsive card component using box-sizing: border-box, CSS variables for colors, and rem spacing.',
      starterCode: '/* Complete the card styles */\n.card {\n  /* Add styles */\n}',
      solution: ':root {\n  --card-bg: #ffffff;\n  --card-border: #e2e8f0;\n  --card-padding: 1.5rem;\n}\n.card {\n  box-sizing: border-box;\n  background-color: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 0.75rem;\n  padding: var(--card-padding);\n  max-width: 24rem;\n}'
    }
  },
  {
    id: 'web-beg-04',
    title: '4. Responsive Web Design & Mobile-First Media Queries',
    summary: 'Master mobile-first development paradigms, CSS @media queries, responsive typography with clamp(), and responsive images.',
    readingTime: '23 min',
    overview: 'Over 60% of global web traffic originates from mobile devices. Responsive Web Design (RWD) ensures web applications seamlessly adapt their layout, typography, navigation, and media to any screen size—from smart watches and mobile phones to multi-monitor 4K desktop workstations.',
    learningObjectives: [
      'Apply mobile-first CSS architecture with progressive min-width media queries',
      'Implement fluid typography using CSS clamp() and modern viewport relative units',
      'Build responsive multi-column layouts that reflow gracefully across common breakpoints',
      'Implement responsive images using srcset and the <picture> element'
    ],
    syntaxGuide: '/* Mobile-First Breakpoint System */\n/* Base styles: Mobile (< 640px) */\n.container {\n  width: 100%;\n  padding: 1rem;\n}\n\n/* Tablet Breakpoint (>= 640px) */\n@media (min-width: 640px) {\n  .container { max-width: 640px; margin: 0 auto; }\n}\n\n/* Desktop Breakpoint (>= 1024px) */\n@media (min-width: 1024px) {\n  .container { max-width: 1024px; padding: 2rem; }\n}',
    proTips: [
      'Always write mobile styles outside media queries first, then add min-width media queries for larger screens to reduce CSS complexity and eliminate code duplication.',
      'Use clamp(1.25rem, 2vw + 1rem, 2.5rem) for headlines so text smoothly scales between mobile and desktop without sudden jumps.'
    ],
    sections: [
      {
        title: '1. Mobile-First Methodology & Viewport Scaling',
        content: 'Mobile-first design begins with the smallest viewport layout, focusing on core content hierarchy and single-column simplicity. Styles written at the root level of the stylesheet apply universally to mobile devices. As viewport width expands, @media (min-width: ...) rules progressively enhance the layout—introducing sidebar navigation, multi-column grids, and larger spacing. This approach results in lighter CSS payloads on low-powered mobile devices.',
        codeSnippet: '/* Mobile-First Grid Reflow */\n.product-grid {\n  display: grid;\n  grid-template-columns: 1fr; /* 1 column on mobile */\n  gap: 1.5rem;\n}\n\n@media (min-width: 768px) {\n  .product-grid {\n    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablet */\n  }\n}\n\n@media (min-width: 1024px) {\n  .product-grid {\n    grid-template-columns: repeat(4, 1fr); /* 4 columns on desktop */\n  }\n}',
        lineByLine: [
          { line: 'grid-template-columns: 1fr;', explanation: 'Default mobile layout stacks items in a single vertical column.' },
          { line: '@media (min-width: 768px)', explanation: 'Triggers when the viewport width reaches 768px or wider.' },
          { line: 'grid-template-columns: repeat(4, 1fr);', explanation: 'Expands grid to 4 equal-width columns on desktop screens.' }
        ],
        miniPractice: {
          task: 'Write a media query that hides a desktop navigation bar (.desktop-nav) on viewports narrower than 768px.',
          hint: 'Use a mobile-first approach: .desktop-nav { display: none; } and display: flex inside @media (min-width: 768px).',
          solution: '.desktop-nav { display: none; } @media (min-width: 768px) { .desktop-nav { display: flex; } }'
        }
      },
      {
        title: '2. Fluid Typography with CSS clamp()',
        content: 'Traditional responsive typography required multiple media queries to step up font sizes at each breakpoint. Modern CSS provides the clamp(min, ideal, max) function, which sets a minimum font size, a fluid scaling value based on viewport width (vw), and a maximum ceiling. This creates smooth, continuous typography scaling across every screen dimension.',
        codeSnippet: '/* Fluid Headline Typography */\nh1.hero-title {\n  /* Minimum: 2rem (32px), Ideal: 5vw + 1rem, Maximum: 4.5rem (72px) */\n  font-size: clamp(2rem, 5vw + 1rem, 4.5rem);\n  line-height: 1.15;\n  letter-spacing: -0.02em;\n}\n\np.hero-subtitle {\n  font-size: clamp(1rem, 1.5vw + 0.75rem, 1.5rem);\n}',
        lineByLine: [
          { line: 'font-size: clamp(2rem, 5vw + 1rem, 4.5rem);', explanation: 'Guarantees the headline is never smaller than 2rem and never exceeds 4.5rem.' },
          { line: '5vw + 1rem', explanation: 'The fluid component that dynamically resizes as the browser window expands.' },
          { line: 'line-height: 1.15;', explanation: 'Tighter line height suited for large display headings.' }
        ],
        miniPractice: {
          task: 'Explain why combining a viewport unit (vw) with rem (e.g. 2vw + 1rem) is superior to using pure vw (e.g. 5vw) inside clamp().',
          hint: 'Consider what happens if a user zooms in using browser accessibility settings.',
          solution: 'Pure vw ignores browser user font zoom settings. Adding rem ensures the text still honors user accessibility zoom preferences.'
        }
      },
      {
        title: '3. Responsive Images: srcset, sizes & <picture>',
        content: 'Serving a 4000px desktop hero banner to a mobile device on a 3G network wastes bandwidth and slows Largest Contentful Paint (LCP). Using the srcset and sizes attributes on <img> allows the browser to automatically select and download the optimal image file resolution based on device screen density (DPR) and layout width.',
        codeSnippet: '<!-- Responsive Art Direction with <picture> -->\n<picture>\n  <source media="(min-width: 1024px)" srcset="/hero-desktop.webp">\n  <source media="(min-width: 640px)" srcset="/hero-tablet.webp">\n  <img src="/hero-mobile.webp" alt="Skillora AI interactive learning dashboard" width="1200" height="675" loading="lazy">\n</picture>',
        lineByLine: [
          { line: '<source media="(min-width: 1024px)" ...>', explanation: 'Instructs desktop browsers to download the widescreen hero image asset.' },
          { line: '<source media="(min-width: 640px)" ...>', explanation: 'Serves medium-sized asset for tablet viewports.' },
          { line: '<img src="/hero-mobile.webp" ...>', explanation: 'Default fallback and mobile asset ensuring compatibility on all browsers.' }
        ],
        miniPractice: {
          task: 'What happens if a browser does not support the <picture> element?',
          hint: 'The nested <img> tag acts as the standard fallback.',
          solution: 'The browser gracefully falls back to displaying the nested standard <img> element.'
        }
      }
    ],
    practiceExercise: {
      title: 'Responsive Hero Layout Exercise',
      instructions: 'Build a responsive hero section that transitions from stacked on mobile to a side-by-side 2-column layout on viewports >= 768px with fluid typography.',
      starterCode: '/* Complete responsive hero styles */\n.hero-container {\n  /* styles */\n}',
      solution: '.hero-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 1.5rem;\n}\n.hero-title {\n  font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem);\n}\n@media (min-width: 768px) {\n  .hero-container {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 3rem;\n  }\n}'
    }
  },
  {
    id: 'web-beg-05',
    title: '5. CSS Flexbox One-Dimensional Layout Engine',
    summary: 'Master CSS Flexible Box Layout: main vs cross axis, justify-content, align-items, flex-grow, flex-shrink, and common UI design patterns.',
    readingTime: '23 min',
    overview: 'CSS Flexbox is a one-dimensional layout system designed for distributing space and aligning items along a single axis (either a row or a column). Flexbox is the industry standard for creating navigation headers, card bodies, toolbar button groups, and vertically centered modal dialogues.',
    learningObjectives: [
      'Understand the relationship between the Flex Container and Flex Items',
      'Master main-axis alignment (justify-content) and cross-axis alignment (align-items)',
      'Control flex item expansion, contraction, and basis using flex-grow, flex-shrink, and flex-basis',
      'Construct common UI patterns including sticky footers, navbar splits, and centered dialogs'
    ],
    syntaxGuide: '/* Flexbox Container & Item Rules */\n.flex-container {\n  display: flex;\n  flex-direction: row; /* or column */\n  justify-content: space-between; /* main axis */\n  align-items: center; /* cross axis */\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.flex-item {\n  flex: 1 1 250px; /* flex-grow, flex-shrink, flex-basis */\n}',
    proTips: [
      'Use the gap property instead of individual item margins for consistent, collision-free spacing between flex items.',
      'To center any element both vertically and horizontally in one container, use display: flex; justify-content: center; align-items: center;'
    ],
    sections: [
      {
        title: '1. Container Axes & Alignment Properties',
        content: 'When display: flex is applied to an element, it becomes a flex container, and its direct children become flex items. The flex-direction property establishes the main axis (row or column). The cross axis runs perpendicular to the main axis. The justify-content property distributes space along the main axis (flex-start, center, flex-end, space-between, space-around, space-evenly). The align-items property controls alignment across the cross axis (stretch, center, flex-start, flex-end, baseline).',
        codeSnippet: '/* Navigation Bar with Flexbox */\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background-color: #1e293b;\n  color: #ffffff;\n}\n\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  list-style: none;\n}',
        lineByLine: [
          { line: 'display: flex;', explanation: 'Initializes the navbar as a flex container.' },
          { line: 'justify-content: space-between;', explanation: 'Pushes the brand logo to the far left and navigation links to the far right.' },
          { line: 'align-items: center;', explanation: 'Vertically centers the logo and links within the navbar height.' }
        ],
        miniPractice: {
          task: 'Write CSS to align two buttons inside a container to the right end of the parent container.',
          hint: 'Use display: flex with justify-content: flex-end and a gap.',
          solution: '.button-group { display: flex; justify-content: flex-end; gap: 0.75rem; }'
        }
      },
      {
        title: '2. Flex Items: Grow, Shrink & Basis Sizing Mechanics',
        content: 'Individual flex items respond to available container space using three properties combined in the flex shorthand: flex-grow (relative ability to expand and consume free space), flex-shrink (ability to contract when space is constrained), and flex-basis (initial starting size before growing or shrinking). For example, flex: 1 1 0 allows items to grow and shrink proportionally with equal widths.',
        codeSnippet: '/* Card Row with Flexible Proportions */\n.card-row {\n  display: flex;\n  gap: 1rem;\n}\n\n.sidebar {\n  flex: 0 0 280px; /* Fixed 280px sidebar, does not grow or shrink */\n}\n\n.main-content {\n  flex: 1 1 auto; /* Expands to fill all remaining horizontal space */\n}',
        lineByLine: [
          { line: 'flex: 0 0 280px;', explanation: 'Sets a rigid width of 280px (grow: 0, shrink: 0, basis: 280px).' },
          { line: 'flex: 1 1 auto;', explanation: 'Allows the main content area to expand dynamically and occupy all leftover space.' }
        ],
        miniPractice: {
          task: 'What is the default value of flex-shrink on flex items if not specified?',
          hint: 'By default, do flex items shrink to fit the container or overflow?',
          solution: 'The default value is flex-shrink: 1, which allows items to contract to prevent overflow.'
        }
      },
      {
        title: '3. Real-World Pattern: Sticky Footer Layout',
        content: 'A classic web design challenge is ensuring the page footer sticks to the bottom of the viewport on short-content pages while naturally flowing below content on long pages. Flexbox solves this cleanly by turning the body into a column flex container with min-height: 100vh and giving the <main> element flex: 1.',
        codeSnippet: '/* Sticky Footer Architecture */\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  margin: 0;\n}\n\nmain {\n  flex: 1 0 auto; /* Consumes all available vertical space */\n}\n\nfooter {\n  flex-shrink: 0; /* Prevents footer from collapsing */\n  padding: 1.5rem;\n  background-color: #0f172a;\n  color: #94a3b8;\n}',
        lineByLine: [
          { line: 'min-height: 100vh;', explanation: 'Ensures the body container is at least the full height of the viewport.' },
          { line: 'flex-direction: column;', explanation: 'Arranges header, main, and footer vertically.' },
          { line: 'flex: 1 0 auto;', explanation: 'Causes <main> to expand vertically, pushing the footer to the bottom of the screen.' }
        ],
        miniPractice: {
          task: 'Implement a centered modal container using Flexbox.',
          hint: 'Set min-height: 100vh on the overlay with display: flex, justify-content: center, align-items: center.',
          solution: '.modal-overlay { display: flex; justify-content: center; align-items: center; min-height: 100vh; }'
        }
      }
    ],
    practiceExercise: {
      title: 'Flexbox Navigation & Card Grid Exercise',
      instructions: 'Build a responsive header with a logo and navigation list, and a card row that wraps items on mobile screens.',
      starterCode: '/* Complete flexbox layout */\n.header-nav {\n  /* styles */\n}',
      solution: '.header-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n}\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n}\n.card-item {\n  flex: 1 1 280px;\n}'
    }
  },
  {
    id: 'web-beg-06',
    title: '6. CSS Grid & Modern Two-Dimensional Layout Systems',
    summary: 'Master CSS Grid Layout: grid tracks, fr units, grid-template-areas, auto-fit/minmax responsive grids, and dashboard architectures.',
    readingTime: '24 min',
    overview: 'While Flexbox operates in one dimension at a time, CSS Grid is a full two-dimensional layout system capable of orchestrating rows and columns simultaneously. CSS Grid allows engineers to construct complex editorial layouts, data dashboards, and responsive card galleries with minimal markup.',
    learningObjectives: [
      'Define two-dimensional grid layouts with grid-template-columns, grid-template-rows, and gap',
      'Utilize fractional units (fr) and minmax() functions for responsive track sizing',
      'Map complex layouts using named grid-template-areas',
      'Distinguish when to use CSS Grid vs CSS Flexbox in production architectures'
    ],
    syntaxGuide: '/* CSS Grid Container & Track Definitions */\n.grid-dashboard {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  grid-template-rows: 70px 1fr 60px;\n  grid-template-areas:\n    "sidebar header"\n    "sidebar main"\n    "sidebar footer";\n  height: 100vh;\n  gap: 1rem;\n}\n\n.sidebar { grid-area: sidebar; }\n.header  { grid-area: header; }\n.main    { grid-area: main; }\n.footer  { grid-area: footer; }',
    proTips: [
      'Use grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) to create a completely responsive card grid without writing a single media query.',
      'Use Flexbox for component-level UI items (buttons, nav links, tags) and CSS Grid for page-level structural layouts (dashboards, galleries, editorial spreads).'
    ],
    sections: [
      {
        title: '1. Grid Tracks, Fractional Units (fr) & Track Sizing',
        content: 'CSS Grid divides container space into intersecting horizontal rows and vertical columns. The fr (fractional) unit represents a fraction of the available free space within the grid container. By combining fr units with repeat() and minmax(), developers can define fluid columns that automatically recalculate their pixel widths as the container resizes.',
        codeSnippet: '/* 3-Column Responsive Track Layout */\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 240px;\n  gap: 1.5rem;\n}\n\n/* Span a featured card across 2 columns */\n.gallery-item.featured {\n  grid-column: span 2;\n}',
        lineByLine: [
          { line: 'grid-template-columns: repeat(3, 1fr);', explanation: 'Creates 3 columns of equal width sharing total container width equally.' },
          { line: 'grid-auto-rows: 240px;', explanation: 'Assigns a fixed height of 240px to all automatically generated grid rows.' },
          { line: 'grid-column: span 2;', explanation: 'Expands the featured card across 2 column tracks.' }
        ],
        miniPractice: {
          task: 'Create a 12-column grid container with a 16px gap.',
          hint: 'Use display: grid and grid-template-columns: repeat(12, 1fr).',
          solution: '.grid-12 { display: grid; grid-template-columns: repeat(12, 1fr); gap: 1rem; }'
        }
      },
      {
        title: '2. Named Grid Template Areas for Dashboard Systems',
        content: 'The grid-template-areas property provides an intuitive, ASCII-art-like syntax for arranging page sections. Each string represents a row, and each word corresponds to a named grid area defined on child elements via grid-area. Changing layout structures on mobile requires only updating the grid-template-areas declaration inside a media query.',
        codeSnippet: '/* Named Area Dashboard Layout */\n.app-layout {\n  display: grid;\n  grid-template-areas:\n    "header"\n    "main"\n    "sidebar";\n  gap: 1rem;\n}\n\n@media (min-width: 1024px) {\n  .app-layout {\n    grid-template-columns: 280px 1fr;\n    grid-template-areas:\n      "sidebar header"\n      "sidebar main";\n  }\n}\n\n.app-header  { grid-area: header; }\n.app-sidebar { grid-area: sidebar; }\n.app-main    { grid-area: main; }',
        lineByLine: [
          { line: 'grid-template-areas: "header" "main" "sidebar";', explanation: 'Defines vertical single-column stacked layout for mobile screens.' },
          { line: 'grid-template-areas: "sidebar header" "sidebar main";', explanation: 'Reconfigures layout into a 2-column sidebar application on desktop screens.' },
          { line: 'grid-area: header;', explanation: 'Assigns the HTML element to the named header grid slot.' }
        ],
        miniPractice: {
          task: 'What symbol is used in grid-template-areas to leave a grid cell empty/unoccupied?',
          hint: 'A period/dot character represents an empty cell.',
          solution: 'A period (.) is used, e.g. grid-template-areas: "header header" "sidebar .";'
        }
      },
      {
        title: '3. auto-fit vs auto-fill with minmax()',
        content: 'The auto-fit and auto-fill keywords dynamically compute the number of columns that can fit in a container. With auto-fit, any empty tracks collapse to 0px, allowing existing items to expand and fill the entire row width. With auto-fill, empty tracks maintain their defined column size, leaving open slots at the end of the row.',
        codeSnippet: '/* Production Auto-Fitting Responsive Grid */\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1.5rem;\n  padding: 1.5rem;\n}\n\n.card {\n  background: #ffffff;\n  border-radius: 0.5rem;\n  padding: 1.25rem;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n}',
        lineByLine: [
          { line: 'repeat(auto-fit, minmax(260px, 1fr))', explanation: 'Fits as many 260px+ columns as possible and expands them to fill extra width.' },
          { line: 'gap: 1.5rem;', explanation: 'Maintains 24px consistent gutter spacing between all grid rows and columns.' }
        ],
        miniPractice: {
          task: 'Explain why auto-fit is generally preferred for card catalogs over auto-fill.',
          hint: 'Consider how cards expand when there are only 1 or 2 items in the catalog.',
          solution: 'auto-fit collapses empty column space so that 1 or 2 cards stretch across available space instead of leaving awkward empty slots.'
        }
      }
    ],
    practiceExercise: {
      title: 'Responsive Dashboard Grid Checkpoint',
      instructions: 'Construct a dashboard grid that displays header, sidebar, and main analytics widgets with responsive track reflow.',
      starterCode: '/* Complete the dashboard grid */\n.dashboard {\n  /* styles */\n}',
      solution: '.dashboard {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-areas: "header" "main" "sidebar";\n  gap: 1rem;\n}\n@media (min-width: 768px) {\n  .dashboard {\n    grid-template-columns: 240px 1fr;\n    grid-template-areas: "header header" "sidebar main";\n  }\n}\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }'
    }
  },
  {
    id: 'web-beg-07',
    title: '7. JavaScript Fundamentals, Syntax & Control Flow',
    summary: 'Master JavaScript core syntax: variables (let, const), data types, operators, conditionals, loops, functions, arrays, and objects.',
    readingTime: '25 min',
    overview: 'JavaScript is the programming language of the web, empowering developers to add dynamic interactivity, handle user input, manipulate data, and communicate with backend services. Mastering foundational syntax, data structures, and scope is essential for all full-stack engineering.',
    learningObjectives: [
      'Declare variables using let and const with block scope understanding',
      'Manipulate primitive types (string, number, boolean, null, undefined) and reference types (objects, arrays)',
      'Write modular functions using function declarations, expressions, and arrow function syntax',
      'Iterate and transform data using loops and modern array methods (map, filter, reduce)'
    ],
    syntaxGuide: '// Modern JavaScript Syntax Essentials\nconst courseName = \'Web Development Masterclass\';\nlet studentCount = 1250;\n\n// Arrow Function with Array Transformation\nconst calculateRevenue = (students, pricePerStudent) => {\n  return students * pricePerStudent;\n};\n\nconst modules = [\'HTML\', \'CSS\', \'JavaScript\', \'React\'];\nconst upperModules = modules.map(m => m.toUpperCase());',
    proTips: [
      'Default to const for all variable declarations. Only switch to let if you explicitly know the variable value will be reassigned.',
      'Always use strict equality (===) instead of loose equality (==) to avoid hidden type coercion bugs.'
    ],
    sections: [
      {
        title: '1. Variables, Data Types & Scope Mechanics',
        content: 'JavaScript features eight data types: seven primitives (String, Number, BigInt, Boolean, Undefined, Null, Symbol) and reference types (Objects, Arrays, Functions). Primitives are stored by value and are immutable; reference types are stored as pointers in memory. Variables declared with const and let are block-scoped (confined to the nearest enclosing curly braces {}), preventing variable leakage bugs common with legacy function-scoped var.',
        codeSnippet: '// Primitive vs Reference Type Mechanics\nconst userRole = \'developer\'; // Primitive String (immutable)\nconst userSettings = {\n  theme: \'dark\',\n  notifications: true\n}; // Reference Object\n\n// Mutating an object property is permitted with const\nuserSettings.theme = \'system\';\n\n// Reassigning the identifier will throw a TypeError\n// userSettings = {}; // Error: Assignment to constant variable',
        lineByLine: [
          { line: 'const userRole = \'developer\';', explanation: 'Creates an immutable string binding in block scope.' },
          { line: 'userSettings.theme = \'system\';', explanation: 'Mutates an object property in heap memory while preserving the object reference pointer.' }
        ],
        miniPractice: {
          task: 'What is the value of typeof null in JavaScript, and why is this behavior notable?',
          hint: 'It is a well-known legacy bug in the original JavaScript implementation.',
          solution: 'typeof null returns "object" due to a legacy 1995 JavaScript type tag bug that cannot be changed for backwards compatibility.'
        }
      },
      {
        title: '2. Functions, Arrow Functions & Lexical Scope',
        content: 'Functions are first-class citizens in JavaScript—they can be stored in variables, passed as arguments to other functions, and returned from functions. Arrow functions (() => {}) provide concise syntax and lexically bind the this context from their enclosing scope, making them the preferred choice for callbacks and array transformations.',
        codeSnippet: '// Function Declaration vs Arrow Function\nfunction formatCurrency(amount, currency = \'USD\') {\n  return new Intl.NumberFormat(\'en-US\', { style: \'currency\', currency }).format(amount);\n}\n\n// Concise Arrow Function with Implicit Return\nconst calculateDiscount = (price, discountPercent) => price * (1 - discountPercent / 100);\n\nconsole.log(formatCurrency(calculateDiscount(299, 20))); // "$239.20"',
        lineByLine: [
          { line: 'function formatCurrency(amount, currency = \'USD\')', explanation: 'Declares hoisted function with default parameter value.' },
          { line: 'const calculateDiscount = (price, discountPercent) => ...', explanation: 'Arrow function with implicit single-line return expression.' },
          { line: 'new Intl.NumberFormat(...)', explanation: 'Native Internationalization API for precision localized currency formatting.' }
        ],
        miniPractice: {
          task: 'Write an arrow function isAdult that takes an age number and returns true if age is >= 18, otherwise false.',
          hint: 'Use an implicit return: const isAdult = age => age >= 18;',
          solution: 'const isAdult = (age) => age >= 18;'
        }
      },
      {
        title: '3. Array Operations: map, filter, and reduce',
        content: 'Modern JavaScript avoids imperative for loops in favor of declarative, immutable array methods. map() transforms each element into a new array of the same length; filter() creates a subset array containing elements that pass a boolean predicate test; reduce() accumulates array elements down to a single computed value (like a total sum or frequency map).',
        codeSnippet: 'const courseCatalog = [\n  { id: 1, title: \'HTML & CSS\', level: \'beginner\', lessons: 12 },\n  { id: 2, title: \'JavaScript\', level: \'intermediate\', lessons: 14 },\n  { id: 3, title: \'Full-Stack\', level: \'advanced\', lessons: 14 }\n];\n\n// Filter intermediate and advanced courses\nconst advancedCourses = courseCatalog.filter(c => c.level !== \'beginner\');\n\n// Calculate total lesson count across all courses\nconst totalLessons = courseCatalog.reduce((sum, course) => sum + course.lessons, 0);\nconsole.log(\'Total Lessons:\', totalLessons); // 40',
        lineByLine: [
          { line: 'courseCatalog.filter(...)', explanation: 'Creates a new array excluding beginner-level items without mutating original array.' },
          { line: 'courseCatalog.reduce((sum, course) => ... , 0)', explanation: 'Accumulates total lesson counts starting from initial accumulator value 0.' }
        ],
        miniPractice: {
          task: 'Use .map() to extract an array of course titles from courseCatalog.',
          hint: 'Call courseCatalog.map(c => c.title).',
          solution: 'const titles = courseCatalog.map(c => c.title); // ["HTML & CSS", "JavaScript", "Full-Stack"]'
        }
      }
    ],
    practiceExercise: {
      title: 'Array Pipeline & Data Transformation Exercise',
      instructions: 'Write a JavaScript pipeline that takes an array of student scores, filters out failing scores (< 60), adds a 5-point curve to passing scores, and computes the average score.',
      starterCode: 'const rawScores = [55, 78, 92, 45, 88, 64];\n// Calculate curved passing average',
      solution: 'const rawScores = [55, 78, 92, 45, 88, 64];\nconst passingCurved = rawScores\n  .filter(score => score >= 60)\n  .map(score => Math.min(100, score + 5));\nconst average = passingCurved.reduce((sum, score) => sum + score, 0) / passingCurved.length;\nconsole.log("Average:", average);'
    }
  },
  {
    id: 'web-beg-08',
    title: '8. DOM Manipulation, Traversal & Event Handling',
    summary: 'Master the Document Object Model: element selection, DOM tree traversal, dynamic element creation, and event delegation patterns.',
    readingTime: '24 min',
    overview: 'The Document Object Model (DOM) is an object-oriented tree representation of the structured HTML document in browser memory. JavaScript interacts with the DOM to dynamically update text, modify styles, create interactive animations, and handle user interactions like clicks, inputs, and keystrokes.',
    learningObjectives: [
      'Query the DOM efficiently using querySelector and querySelectorAll',
      'Dynamically create, modify, append, and remove elements using createElement and appendChild',
      'Attach event listeners and manage event objects (e.target, e.currentTarget)',
      'Implement high-performance Event Delegation on parent containers'
    ],
    syntaxGuide: '// DOM Selection & Dynamic Element Injection\nconst taskList = document.querySelector(\'#task-list\');\n\n// Create new DOM Node\nconst newTask = document.createElement(\'li\');\nnewTask.className = \'task-item\';\nnewTask.textContent = \'Complete DOM Module\';\n\n// Append to DOM tree\ntaskList.append(newTask);\n\n// Event Delegation\ntaskList.addEventListener(\'click\', (e) => {\n  if (e.target.matches(\'.task-item\')) {\n    e.target.classList.toggle(\'completed\');\n  }\n});',
    proTips: [
      'Avoid repeatedly querying the DOM inside loops; cache query references in variables or use a DocumentFragment for batch DOM insertions.',
      'Use event.target.closest(\'.selector\') inside event delegation handlers to cleanly detect clicks on nested child elements like icons inside buttons.'
    ],
    sections: [
      {
        title: '1. DOM Tree Architecture & Modern Element Selection',
        content: 'When the browser parses HTML, it constructs the DOM—a hierarchical tree of Node objects where the document object acts as the root. Modern development uses document.querySelector() (returns the first matching element) and document.querySelectorAll() (returns a static NodeList of matching elements). Unlike legacy getElementsByClassName, querySelector accepts any valid CSS selector string.',
        codeSnippet: '// Querying and Modifying Elements\nconst mainHeading = document.querySelector(\'h1.page-title\');\nif (mainHeading) {\n  mainHeading.textContent = \'Interactive Web Development\';\n  mainHeading.classList.add(\'text-highlight\');\n}\n\n// Querying Multiple Elements and Iterating\nconst actionButtons = document.querySelectorAll(\'.btn-action\');\nactionButtons.forEach(button => {\n  button.setAttribute(\'aria-pressed\', \'false\');\n});',
        lineByLine: [
          { line: 'document.querySelector(\'h1.page-title\')', explanation: 'Retrieves the first <h1> matching class .page-title or null.' },
          { line: 'mainHeading.textContent = ...', explanation: 'Safely sets text content without parsing HTML, preventing XSS vulnerabilities.' },
          { line: 'mainHeading.classList.add(\'text-highlight\')', explanation: 'Adds a CSS class to the element\'s classList without overwriting existing classes.' }
        ],
        miniPractice: {
          task: 'Explain the security difference between using element.textContent vs element.innerHTML.',
          hint: 'innerHTML parses HTML markup; textContent treats input as plain text strings.',
          solution: 'innerHTML will execute injected <script> or <img onerror="..."> markup leading to XSS; textContent safely encodes all strings as raw text.'
        }
      },
      {
        title: '2. Dynamic Node Creation, Insertion & Removal',
        content: 'JavaScript allows applications to construct UI components dynamically in response to user data. Using document.createElement(), engineers instantiate new DOM nodes in memory, configure their attributes, classes, and event listeners, and insert them into the visible document tree using parent.append() or parent.prepend(). Nodes can be removed using node.remove().',
        codeSnippet: 'function createNotification(message, type = \'info\') {\n  const toast = document.createElement(\'div\');\n  toast.className = `toast toast--${type}`;\n  toast.setAttribute(\'role\', \'alert\');\n  toast.textContent = message;\n\n  const closeBtn = document.createElement(\'button\');\n  closeBtn.textContent = \'✕\';\n  closeBtn.addEventListener(\'click\', () => toast.remove());\n\n  toast.append(closeBtn);\n  document.querySelector(\'#toast-container\').append(toast);\n}',
        lineByLine: [
          { line: 'document.createElement(\'div\')', explanation: 'Instantiates a new <div> node in memory.' },
          { line: 'toast.setAttribute(\'role\', \'alert\')', explanation: 'Sets accessibility alert role for assistive technologies.' },
          { line: 'closeBtn.addEventListener(\'click\', () => toast.remove())', explanation: 'Removes the toast element directly from the DOM tree when clicked.' }
        ],
        miniPractice: {
          task: 'What DOM method is used to insert a batch of multiple elements into the DOM at once without causing multiple browser reflows?',
          hint: 'Think of a lightweight in-memory container for DOM nodes.',
          solution: 'document.createDocumentFragment() allows batch insertion with a single browser reflow.'
        }
      },
      {
        title: '3. Event Bubbling, Capturing & Event Delegation',
        content: 'When an event triggers on a DOM element (like clicking a button), it travels through three phases: Capturing (traveling down from document to the target), Target (triggering on the target element), and Bubbling (bubbling upward from the target back up to document). Event Delegation leverages the bubbling phase by placing a single listener on a common parent container to handle events from many child elements efficiently.',
        codeSnippet: 'const shoppingCartList = document.querySelector(\'#cart-items\');\n\n// Single delegated listener for the entire cart\nshoppingCartList.addEventListener(\'click\', (event) => {\n  const deleteBtn = event.target.closest(\'.btn-delete-item\');\n  if (deleteBtn) {\n    const itemRow = deleteBtn.closest(\'.cart-item-row\');\n    const itemId = itemRow.dataset.itemId;\n    console.log(\'Removing item ID:\', itemId);\n    itemRow.remove();\n  }\n});',
        lineByLine: [
          { line: 'event.target.closest(\'.btn-delete-item\')', explanation: 'Traverses up from the clicked node to find the nearest delete button ancestor.' },
          { line: 'if (deleteBtn) { ... }', explanation: 'Guards execution so clicks elsewhere in the cart list are safely ignored.' },
          { line: 'itemRow.dataset.itemId', explanation: 'Reads custom HTML5 data-item-id attribute value from the row.' }
        ],
        miniPractice: {
          task: 'Why is event delegation better than looping through 500 table rows and adding addEventListener to each row?',
          hint: 'Consider browser memory footprint and dynamically added rows.',
          solution: 'Event delegation uses 1 event listener instead of 500, drastically reducing memory usage, and automatically works on newly added rows.'
        }
      }
    ],
    practiceExercise: {
      title: 'Interactive Task Manager DOM Checkpoint',
      instructions: 'Build a dynamic task list where clicking an "Add Task" button appends a new <li> with a delete button that removes the item when clicked via event delegation.',
      starterCode: 'const addBtn = document.querySelector(\'#add-btn\');\nconst list = document.querySelector(\'#task-list\');\n// Add task creation and delegation logic',
      solution: 'const addBtn = document.querySelector(\'#add-btn\');\nconst list = document.querySelector(\'#task-list\');\nconst input = document.querySelector(\'#task-input\');\n\naddBtn.addEventListener(\'click\', () => {\n  if (!input.value.trim()) return;\n  const li = document.createElement(\'li\');\n  li.innerHTML = `<span>${input.value}</span> <button class="delete">Delete</button>`;\n  list.append(li);\n  input.value = \'\';\n});\n\nlist.addEventListener(\'click\', (e) => {\n  if (e.target.matches(\'.delete\')) {\n    e.target.closest(\'li\').remove();\n  }\n});'
    }
  },
  {
    id: 'web-beg-09',
    title: '9. Interactive Forms & Client-Side Validation Systems',
    summary: 'Master HTML5 form controls, custom JavaScript validation patterns, real-time feedback states, and accessibility compliance.',
    readingTime: '23 min',
    overview: 'Forms are the primary mechanism for user interaction and data input on the web. Crafting robust forms requires a combination of accessible semantic markup, intuitive input types, real-time input validation, accessible error announcements, and secure data handling.',
    learningObjectives: [
      'Construct accessible forms using proper <label>, <input>, and <fieldset> elements',
      'Implement native HTML5 validation constraints (required, minlength, pattern)',
      'Build custom JavaScript validation rules with instant real-time visual feedback',
      'Understand security boundaries: why client validation is UX, and server validation is security'
    ],
    syntaxGuide: '<!-- Accessible Form Structure -->\n<form id="registration-form" novalidate>\n  <div class="form-group">\n    <label for="user-email">Email Address</label>\n    <input type="email" id="user-email" name="email" required aria-describedby="email-error">\n    <span id="email-error" class="error-message" role="alert"></span>\n  </div>\n  <button type="submit">Create Account</button>\n</form>',
    proTips: [
      'Add the novalidate attribute to the <form> tag when implementing custom JavaScript validation to suppress default browser error tooltips.',
      'Always associate every <input> with a corresponding <label for="input-id"> to ensure screen readers announce input purposes and expand the clickable touch target.'
    ],
    sections: [
      {
        title: '1. Form Architecture, Input Types & Accessible Labels',
        content: 'Accessible forms require explicit label-to-input association using matching label for and input id attributes. Modern HTML5 provides specialized input types (email, tel, url, number, date, password) that automatically trigger optimized mobile keyboards (e.g. numeric keypad for number inputs, email keyboard with @ key).',
        codeSnippet: '<form id="contact-form">\n  <div class="field">\n    <label for="full-name">Full Name (Required)</label>\n    <input type="text" id="full-name" name="fullName" required minlength="2">\n  </div>\n\n  <div class="field">\n    <label for="phone-number">Phone Number</label>\n    <input type="tel" id="phone-number" name="phone" inputmode="tel">\n  </div>\n</form>',
        lineByLine: [
          { line: '<label for="full-name">', explanation: 'Binds the text label to the input element with id="full-name".' },
          { line: 'inputmode="tel"', explanation: 'Instructs virtual mobile keyboards to present the telephone numeric keypad.' }
        ],
        miniPractice: {
          task: 'What is the UX benefit of clicking on a <label> linked with a checkbox input via for/id?',
          hint: 'Does clicking the label toggle the checkbox?',
          solution: 'Clicking the label automatically toggles the checkbox, significantly increasing the touch target size for mobile users.'
        }
      },
      {
        title: '2. Custom Validation Logic & Real-Time Feedback',
        content: 'While HTML5 provides basic constraint validation, production applications utilize custom JavaScript validation to deliver instant visual feedback as the user types (input or blur events). Regular expressions validate email and password complexity, while accessible error messages styled with CSS inform users of corrective actions.',
        codeSnippet: 'const emailInput = document.querySelector(\'#user-email\');\nconst errorDisplay = document.querySelector(\'#email-error\');\nconst emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n\nemailInput.addEventListener(\'blur\', () => {\n  const value = emailInput.value.trim();\n  if (!value) {\n    showError(\'Email is required.\');\n  } else if (!emailRegex.test(value)) {\n    showError(\'Please enter a valid email address (e.g. user@domain.com).\');\n  } else {\n    clearError();\n  }\n});\n\nfunction showError(msg) {\n  emailInput.classList.add(\'input-invalid\');\n  emailInput.setAttribute(\'aria-invalid\', \'true\');\n  errorDisplay.textContent = msg;\n}\n\nfunction clearError() {\n  emailInput.classList.remove(\'input-invalid\');\n  emailInput.removeAttribute(\'aria-invalid\');\n  errorDisplay.textContent = \'\';\n}',
        lineByLine: [
          { line: 'emailInput.addEventListener(\'blur\', ...)', explanation: 'Validates input when the user leaves the field, avoiding premature errors while typing.' },
          { line: 'emailInput.setAttribute(\'aria-invalid\', \'true\')', explanation: 'Signals assistive technology that the current input value has a validation failure.' },
          { line: 'errorDisplay.textContent = msg;', explanation: 'Injects descriptive human-readable error text into the DOM error container.' }
        ],
        miniPractice: {
          task: 'Why is validating on the "blur" event often better UX than validating on the "keydown" event for empty fields?',
          hint: 'Think about when an error appears if validating immediately on the first keystroke.',
          solution: 'Validating on keydown shows an immediate error before the user even finishes typing their first character, which frustrates users.'
        }
      },
      {
        title: '3. Form Submission Handling & Security Principles',
        content: 'Form submission must be intercepted with event.preventDefault() to prevent browser page reload. The FormData API allows easy extraction of all named input fields into a key-value structure ready for JSON transmission. Remember: Client-side validation is strictly a UX convenience; the server must always independently validate and sanitize all incoming data.',
        codeSnippet: 'const form = document.querySelector(\'#registration-form\');\n\nform.addEventListener(\'submit\', async (e) => {\n  e.preventDefault();\n  \n  // Collect all named inputs using FormData\n  const formData = new FormData(form);\n  const payload = Object.fromEntries(formData.entries());\n  \n  try {\n    const response = await fetch(\'/api/register\', {\n      method: \'POST\',\n      headers: { \'Content-Type\': \'application/json\' },\n      body: JSON.stringify(payload)\n    });\n    if (response.ok) {\n      alert(\'Registration Successful!\');\n    }\n  } catch (err) {\n    console.error(\'Submission failed:\', err);\n  }\n});',
        lineByLine: [
          { line: 'e.preventDefault();', explanation: 'Suppresses native HTTP page submission reload.' },
          { line: 'const formData = new FormData(form);', explanation: 'Captures all form input names and values automatically.' },
          { line: 'Object.fromEntries(formData.entries())', explanation: 'Converts FormData entries into a clean JavaScript object for JSON serialization.' }
        ],
        miniPractice: {
          task: 'What happens if an input element in a form does not have a name attribute when using new FormData(form)?',
          hint: 'FormData maps input name attributes to their values.',
          solution: 'Inputs missing a name attribute are ignored by FormData and will not be included in the submission payload.'
        }
      }
    ],
    practiceExercise: {
      title: 'Complete Form Validation Checkpoint',
      instructions: 'Build a login form with email and password fields, intercept submission, validate non-empty values, and output the JSON payload to console.',
      starterCode: '<!-- Build login form and JS validation -->\n<form id="login-form">\n  <!-- Add fields -->\n</form>',
      solution: '<form id="login-form">\n  <div><label for="email">Email</label><input type="email" id="email" name="email" required></div>\n  <div><label for="pwd">Password</label><input type="password" id="pwd" name="password" required></div>\n  <button type="submit">Log In</button>\n</form>\n<script>\n  document.getElementById("login-form").addEventListener("submit", (e) => {\n    e.preventDefault();\n    const data = Object.fromEntries(new FormData(e.target));\n    console.log("Submitting login payload:", data);\n  });\n</script>'
    }
  },
  {
    id: 'web-beg-10',
    title: '10. Browser Storage APIs, Fetch & JSON Integration',
    summary: 'Master localStorage, sessionStorage, asynchronous Fetch API requests, JSON serialization, and dynamic API data rendering.',
    readingTime: '24 min',
    overview: 'Modern web applications dynamically fetch data from REST APIs and persist user preferences locally across sessions. Understanding asynchronous Promises, async/await syntax, JSON parsing, error boundaries, and Web Storage APIs is crucial for building interactive web apps.',
    learningObjectives: [
      'Store, retrieve, and remove data using localStorage and sessionStorage with JSON serialization',
      'Execute asynchronous HTTP requests using fetch() with async/await',
      'Handle HTTP error states, loading indicators, and network timeouts gracefully',
      'Render dynamic API response data into the DOM safely'
    ],
    syntaxGuide: '// Asynchronous Fetch with Loading & Error States\nasync function fetchUserData(userId) {\n  const loader = document.querySelector(\'#loader\');\n  loader.classList.remove(\'hidden\');\n  \n  try {\n    const res = await fetch(`https://api.skillora.ai/users/${userId}`);\n    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);\n    const user = await res.json();\n    renderProfile(user);\n  } catch (error) {\n    renderError(\'Failed to load user profile. Please try again.\');\n  } finally {\n    loader.classList.add(\'hidden\');\n  }\n}',
    proTips: [
      'Always wrap localStorage.getItem() and JSON.parse() in a try/catch block because browser privacy settings or quota limits can throw runtime exceptions.',
      'Remember that fetch() only rejects on network failures (like lost internet connection); HTTP 404 or 500 status codes resolve normally, so you must check response.ok.'
    ],
    sections: [
      {
        title: '1. Web Storage APIs: localStorage vs sessionStorage',
        content: 'Browsers provide key-value storage mechanisms accessible via window.localStorage (persists across tab closes and computer restarts) and window.sessionStorage (persists only for the lifetime of the active browser tab). Both APIs only store string values, meaning JavaScript objects and arrays must be serialized using JSON.stringify() when saving and parsed using JSON.parse() when reading.',
        codeSnippet: '// Safe LocalStorage Service Pattern\nconst StorageService = {\n  save(key, value) {\n    try {\n      localStorage.setItem(key, JSON.stringify(value));\n    } catch (err) {\n      console.warn(\'Storage write failed:\', err);\n    }\n  },\n  load(key, fallback = null) {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? JSON.parse(item) : fallback;\n    } catch (err) {\n      return fallback;\n    }\n  }\n};\n\n// Usage\nStorageService.save(\'user_theme\', { mode: \'dark\', fontSize: \'large\' });\nconst theme = StorageService.load(\'user_theme\', { mode: \'light\' });',
        lineByLine: [
          { line: 'JSON.stringify(value)', explanation: 'Serializes the JavaScript object into a JSON string for localStorage compatibility.' },
          { line: 'JSON.parse(item)', explanation: 'Deserializes the stored JSON string back into a usable JavaScript object.' },
          { line: 'try { ... } catch (err)', explanation: 'Guards against storage quota exceeded or disabled storage exceptions.' }
        ],
        miniPractice: {
          task: 'What happens if you save an object directly to localStorage using localStorage.setItem("data", { a: 1 }) without JSON.stringify?',
          hint: 'The browser implicitly calls .toString() on the object.',
          solution: 'It will store the useless string "[object Object]" instead of the actual object contents.'
        }
      },
      {
        title: '2. The Fetch API, Promises & Async/Await',
        content: 'The Fetch API provides a modern interface for fetching resources asynchronously across the network. Built on JavaScript Promises, fetch() allows clean, synchronous-looking code using the async and await keywords. Developers must handle the two-stage Promise lifecycle: first awaiting the response headers object, then awaiting the parsed body data stream (response.json()).',
        codeSnippet: 'async function loadCourseList() {\n  const container = document.querySelector(\'#courses\');\n  container.innerHTML = \'<p class="loading">Loading courses...</p>\';\n\n  try {\n    const res = await fetch(\'https://api.skillora.ai/v1/courses\');\n    if (!res.ok) {\n      throw new Error(`Server returned status ${res.status}`);\n    }\n    const courses = await res.json();\n    \n    // Render course cards\n    container.innerHTML = courses.map(c => `\n      <div class="course-card">\n        <h3>${c.title}</h3>\n        <p>Level: ${c.level} &bull; ${c.lessons} Lessons</p>\n      </div>\n    `).join(\'\');\n  } catch (err) {\n    container.innerHTML = `<p class="error">Error: ${err.message}</p>`;\n  }\n}',
        lineByLine: [
          { line: 'const res = await fetch(...)', explanation: 'Asynchronously dispatches HTTP GET request and waits for response headers.' },
          { line: 'if (!res.ok) throw new Error(...)', explanation: 'Throws an error if the HTTP status code is outside the 200-299 range.' },
          { line: 'const courses = await res.json();', explanation: 'Asynchronously reads and parses the JSON response stream body.' }
        ],
        miniPractice: {
          task: 'Why does fetch() not automatically reject when the server returns a 404 Not Found error?',
          hint: 'A 404 response is a successful HTTP communication round-trip, not a network failure.',
          solution: 'fetch() only rejects when the network request cannot be completed. A 404 response successfully reached the server and returned status headers.'
        }
      },
      {
        title: '3. UI States: Loading, Empty, and Error Boundaries',
        content: 'Professional web applications never leave users looking at a blank screen. Robust API integrations implement three critical UI states: Loading states (spinners or skeleton loaders while data transfers), Error states (actionable messages with retry buttons when requests fail), and Empty states (friendly placeholders when search or filter returns zero records).',
        codeSnippet: 'function renderStateUI(state, payload = null) {\n  const view = document.querySelector(\'#app-view\');\n  switch (state) {\n    case \'LOADING\':\n      view.innerHTML = \'<div class="skeleton-loader">Loading...</div>\';\n      break;\n    case \'EMPTY\':\n      view.innerHTML = \'<div class="empty-state">No courses found matching criteria.</div>\';\n      break;\n    case \'ERROR\':\n      view.innerHTML = `\n        <div class="error-state">\n          <p>⚠️ ${payload}</p>\n          <button onclick="loadCourseList()">Retry Connection</button>\n        </div>\n      `;\n      break;\n  }\n}',
        lineByLine: [
          { line: 'switch (state)', explanation: 'Clean state machine rendering explicit UI states.' },
          { line: '<button onclick="loadCourseList()">Retry</button>', explanation: 'Provides an actionable recovery mechanism for transient network failures.' }
        ],
        miniPractice: {
          task: 'What is a skeleton loader, and why is it preferred over a simple spinning wheel?',
          hint: 'Skeleton loaders mimic the shape of the final loaded layout.',
          solution: 'Skeleton loaders reduce perceived wait time by showing placeholder layout shapes before real data loads.'
        }
      }
    ],
    practiceExercise: {
      title: 'API Data Fetch & Local Storage Sync Exercise',
      instructions: 'Fetch a list of users from a public API, cache the result in localStorage, and render the user cards into the DOM.',
      starterCode: 'async function fetchAndCacheUsers() {\n  // Implement fetch and storage caching\n}',
      solution: 'async function fetchAndCacheUsers() {\n  const cached = localStorage.getItem("users_cache");\n  if (cached) {\n    console.log("Loaded from cache:", JSON.parse(cached));\n    return JSON.parse(cached);\n  }\n  try {\n    const res = await fetch("https://jsonplaceholder.typicode.com/users");\n    const users = await res.json();\n    localStorage.setItem("users_cache", JSON.stringify(users));\n    return users;\n  } catch (err) {\n    console.error("Fetch failed:", err);\n  }\n}'
    }
  },
  {
    id: 'web-beg-11',
    title: '11. Git, GitHub & Professional Developer Workflows',
    summary: 'Master version control: Git repositories, staging, commit messages, branching, pull requests, and GitHub collaboration.',
    readingTime: '23 min',
    overview: 'Version control is the bedrock of modern software engineering. Git tracks code modifications, enables non-destructive experimentation through branching, allows rollback to historical snapshots, and powers collaborative team development via remote platforms like GitHub.',
    learningObjectives: [
      'Initialize and manage Git repositories using core CLI commands (init, status, add, commit, push, pull)',
      'Author meaningful, standardized commit messages following Conventional Commits',
      'Create, switch, merge, and delete Git branches safely',
      'Configure .gitignore files and publish projects to GitHub with markdown README documentation'
    ],
    syntaxGuide: '# Essential Git Command Reference\ngit init                          # Initialize local repository\ngit status                        # Check working tree status\ngit add .                         # Stage all changes\ngit commit -m "feat: add navbar"  # Commit with Conventional message\ngit branch -M main                # Rename primary branch to main\ngit remote add origin <URL>       # Link to GitHub remote\ngit push -u origin main           # Push and track upstream\n\n# Feature Branching Workflow\ngit checkout -b feature/dark-mode # Create and switch to new branch\ngit checkout main                 # Switch back to main\ngit merge feature/dark-mode       # Merge branch into main',
    proTips: [
      'Always configure a .gitignore file before your very first commit to ensure node_modules, .env secrets, and OS junk files are never committed to version history.',
      'Write commit messages in the imperative mood (e.g. "feat: add user authentication form" instead of "added user auth").'
    ],
    sections: [
      {
        title: '1. The Three Trees of Git & Basic Lifecycle',
        content: 'Git tracks files across three distinct states: The Working Directory (where you edit actual files), the Staging Area / Index (where changes are prepared and staged for the next commit), and the Git Repository History (where committed snapshots are permanently recorded). The command git add moves files from the working directory to staging, and git commit creates a permanent immutable snapshot with a cryptographic SHA hash.',
        codeSnippet: '# Complete Initial Git Lifecycle Workflow\ncd my-web-project\ngit init\n\n# Check untracked files\ngit status\n\n# Stage all changes\ngit add .\n\n# Commit with descriptive message\ngit commit -m "feat: initial project scaffolding with HTML and CSS"\n\n# Inspect commit log history\ngit log --oneline',
        lineByLine: [
          { line: 'git init', explanation: 'Creates a hidden .git directory storing repository configuration and object history.' },
          { line: 'git add .', explanation: 'Stages all modified and newly created files in the current working directory.' },
          { line: 'git commit -m "..."', explanation: 'Saves the staged snapshot into the commit tree with metadata and author info.' }
        ],
        miniPractice: {
          task: 'What command un-stages a file from the staging area without discarding changes in your working directory?',
          hint: 'Use git restore --staged <file> or git reset HEAD <file>.',
          solution: 'git restore --staged <filename> removes the file from staging while keeping working code intact.'
        }
      },
      {
        title: '2. Branching, Merging & Merge Conflict Resolution',
        content: 'Branching enables engineers to develop new features, fix bugs, or test refactors in isolated environments without affecting the production main branch. Once a feature is tested, it is merged back into main. If two branches modify the same line of a file, Git triggers a Merge Conflict, pausing the merge until the developer inspects the conflict markers (<<<<<<<, =======, >>>>>>>) and chooses the correct code.',
        codeSnippet: '# Feature Branch Workflow\ngit checkout -b feature/contact-form\n\n# Work on feature and commit\ngit add src/contact.html styles.css\ngit commit -m "feat(contact): implement responsive contact form and validation"\n\n# Return to main and merge\ngit checkout main\ngit merge feature/contact-form\n\n# Delete feature branch after merge\ngit branch -d feature/contact-form',
        lineByLine: [
          { line: 'git checkout -b feature/contact-form', explanation: 'Creates a new branch and immediately switches the HEAD pointer to it.' },
          { line: 'git checkout main', explanation: 'Switches the working directory back to the main branch.' },
          { line: 'git merge feature/contact-form', explanation: 'Combines the feature branch commits into the main branch.' }
        ],
        miniPractice: {
          task: 'What does a fast-forward merge mean in Git?',
          hint: 'It occurs when no new commits were made on main since the feature branch was created.',
          solution: 'A fast-forward merge simply moves the main branch pointer forward to the tip of the feature branch without creating an extra merge commit.'
        }
      },
      {
        title: '3. GitHub Remote Collaboration & .gitignore Best Practices',
        content: 'GitHub hosts remote Git repositories in the cloud, enabling team code reviews via Pull Requests (PRs), automated CI/CD testing, and issue tracking. The .gitignore file tells Git which files or directories to ignore permanently—such as dependency folders (node_modules), environment files with API keys (.env), build outputs (dist), and operating system metadata (.DS_Store).',
        codeSnippet: '# Standard Web Development .gitignore\nnode_modules/\ndist/\n.env\n.env.local\n.DS_Store\n*.log',
        lineByLine: [
          { line: 'node_modules/', explanation: 'Excludes heavy third-party package dependencies (installed via npm install).' },
          { line: '.env', explanation: 'Prevents sensitive secret API keys and passwords from leaking into public Git repositories.' },
          { line: 'dist/', explanation: 'Excludes compiled build artifacts generated by Vite or Webpack.' }
        ],
        miniPractice: {
          task: 'If you accidentally commit a .env file containing an API key to a public GitHub repository, is deleting it in a subsequent commit sufficient to protect your key?',
          hint: 'Think about Git history.',
          solution: 'No. The secret key remains permanently visible in the commit history. You must immediately invalidate and rotate the API key and scrub the Git history.'
        }
      }
    ],
    practiceExercise: {
      title: 'Git Branch & Conventional Commit Exercise',
      instructions: 'Write the command sequence to create a branch feature/footer, make changes, commit using Conventional Commits, and push to remote origin.',
      starterCode: '# Write git commands for feature branch workflow',
      solution: 'git checkout -b feature/footer\ngit add src/components/Footer.html\ngit commit -m "feat(ui): add semantic footer with social links"\ngit push -u origin feature/footer'
    }
  },
  {
    id: 'web-beg-12',
    title: '12. Web Accessibility (a11y), Performance & Production Standards',
    summary: 'Master WCAG 2.1 AA accessibility compliance, keyboard focus traps, semantic ARIA landmarks, Core Web Vitals, and Lighthouse performance auditing.',
    readingTime: '23 min',
    overview: 'Building professional web applications requires adhering to Web Content Accessibility Guidelines (WCAG) so users with disabilities can navigate effortlessly. Combining accessibility compliance with Core Web Vitals performance optimization produces resilient, high-ranking, production-ready web products.',
    learningObjectives: [
      'Audit and achieve WCAG 2.1 AA accessibility compliance across all pages',
      'Implement keyboard navigation, visible focus indicators, and ARIA live regions',
      'Optimize Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift)',
      'Conduct automated Lighthouse audits and resolve performance bottlenecks'
    ],
    syntaxGuide: '/* Accessible Focus Ring & Screen Reader Only Utility */\n:focus-visible {\n  outline: 2px solid hsl(220, 90%, 56%);\n  outline-offset: 3px;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}',
    proTips: [
      'Never remove outline: none on interactive elements without providing a clear, high-contrast :focus-visible replacement style.',
      'Ensure a minimum color contrast ratio of 4.5:1 for normal body text and 3:1 for large display headlines against their background colors.'
    ],
    sections: [
      {
        title: '1. WCAG 2.1 AA Guidelines & Color Contrast Compliance',
        content: 'The Web Content Accessibility Guidelines (WCAG) are organized around four core principles: Perceivable (information must be presentable to users in ways they can perceive), Operable (UI components and navigation must be operable via keyboard and assistive tools), Understandable (content and operation must be clear), and Robust (content must be reliably interpreted by assistive tech). WCAG Level AA requires a minimum 4.5:1 contrast ratio for normal text and 3:1 for large text (18pt+ or 14pt bold).',
        codeSnippet: '/* Accessible High-Contrast Button Styling */\n.btn-accessible {\n  background-color: #1d4ed8; /* Dark Blue */\n  color: #ffffff;            /* White: Contrast Ratio 7.8:1 (Exceeds WCAG AAA) */\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: 0.375rem;\n  border: none;\n  cursor: pointer;\n}\n\n.btn-accessible:focus-visible {\n  outline: 3px solid #93c5fd;\n  outline-offset: 2px;\n}',
        lineByLine: [
          { line: 'color: #ffffff; background-color: #1d4ed8;', explanation: 'Provides a high 7.8:1 contrast ratio that passes WCAG AAA accessibility.' },
          { line: '.btn-accessible:focus-visible', explanation: 'Renders an accessible focus indicator only when navigating via keyboard.' }
        ],
        miniPractice: {
          task: 'Why is using :focus-visible preferred over generic :focus for styling focus outlines?',
          hint: 'Consider mouse clicks vs keyboard tab navigation.',
          solution: ':focus-visible displays focus rings only when navigating via keyboard (or assistive input), avoiding unwanted focus rings on mouse clicks.'
        }
      },
      {
        title: '2. Keyboard Navigation, Skip Links & ARIA Live Regions',
        content: 'All interactive web controls must be fully operable using only the Tab, Enter, Space, and Arrow keys. Web applications should provide a "Skip to Main Content" link as the very first element in the DOM so keyboard users can bypass repetitive navigation bars. Dynamic content updates (like notifications or cart updates) should use aria-live="polite" to inform screen readers without interrupting current speech.',
        codeSnippet: '<!-- Skip to Content Link -->\n<a href="#main-content" class="skip-link sr-only focusable">\n  Skip to main content\n</a>\n\n<!-- ARIA Live Notification Region -->\n<div id="cart-status" aria-live="polite" class="sr-only">\n  Item added to cart.\n</div>',
        lineByLine: [
          { line: '<a href="#main-content" class="skip-link ...">', explanation: 'Allows keyboard users to jump directly past the header into the main content.' },
          { line: 'aria-live="polite"', explanation: 'Announces dynamic changes to screen reader users as soon as the current speech finishes.' }
        ],
        miniPractice: {
          task: 'What tabindex value is assigned to an element to make it focusable via keyboard tab order?',
          hint: 'Compare tabindex="0" vs tabindex="-1".',
          solution: 'tabindex="0" places a non-interactive element into the natural keyboard tab order; tabindex="-1" allows programmatic focus via .focus() only.'
        }
      },
      {
        title: '3. Core Web Vitals & Lighthouse Optimization',
        content: 'Google\'s Core Web Vitals measure real-world user experience across three key pillars: Largest Contentful Paint (LCP < 2.5s) measures perceived loading speed of the main visual block; Interaction to Next Paint (INP < 200ms) measures responsiveness to user taps and clicks; and Cumulative Layout Shift (CLS < 0.1) measures visual stability. Optimizing images, deferring non-critical scripts, and defining explicit image aspect ratios ensure high Lighthouse scores.',
        codeSnippet: '<!-- Preload Critical LCP Hero Image -->\n<link rel="preload" as="image" href="/hero.webp" fetchpriority="high">\n\n<!-- Prevent CLS by reserving explicit aspect-ratio dimensions -->\n<img src="/hero.webp" width="1200" height="675" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" alt="Skillora AI Dashboard">\n\n<!-- Defer non-critical JavaScript -->\n<script src="/analytics.js" defer></script>',
        lineByLine: [
          { line: '<link rel="preload" ... fetchpriority="high">', explanation: 'Prioritizes downloading the primary above-the-fold hero image for faster LCP.' },
          { line: 'style="aspect-ratio: 16 / 9; ..."', explanation: 'Reserves vertical screen space before the image downloads, preventing CLS layout shifts.' },
          { line: '<script ... defer></script>', explanation: 'Executes script after HTML parsing completes, preventing DOM render blocking.' }
        ],
        miniPractice: {
          task: 'What Lighthouse score range is classified as "Good" performance?',
          hint: 'Lighthouse color codes scores in green, orange, and red.',
          solution: 'Scores between 90 and 100 are classified as "Good" (green).'
        }
      }
    ],
    practiceExercise: {
      title: 'Accessibility & Skip Link Implementation Checkpoint',
      instructions: 'Implement an accessible skip-to-content link that is visually hidden until focused via the Tab key, and test keyboard accessibility.',
      starterCode: '/* Complete skip-link CSS */\n.skip-link {\n  /* styles */\n}',
      solution: '.skip-link {\n  position: absolute;\n  top: -999px;\n  left: 1rem;\n  background: #000;\n  color: #fff;\n  padding: 0.75rem 1.5rem;\n  z-index: 1000;\n}\n.skip-link:focus {\n  top: 1rem;\n}'
    }
  }
];

// Capstone Project Task
const BEGINNER_PROJECT = {
  id: 'web-beg-project-portfolio',
  title: '13. Beginner Capstone Project: Responsive Personal Developer Portfolio',
  description: 'Design, architect, code, test, and deploy a production-ready, fully responsive developer portfolio web application with HTML5 semantics, CSS Grid/Flexbox, dynamic project filters, accessible form validation, and dark mode.',
  duration: '6-8 hours',
  orderIndex: 13,
  status: 'locked',
  isProject: true,
  type: 'project',
  xpReward: 350,
  projectDetails: {
    title: 'Beginner Capstone Project: Responsive Personal Developer Portfolio',
    overview: 'Design, architect, and build a production-grade, multi-section developer portfolio website using semantic HTML5, modern responsive CSS (Flexbox & CSS Grid), fluid typography, custom CSS theme variables, and interactive JavaScript filtering and form validation.',
    learningObjectives: [
      'Architect a semantic, accessible multi-section single-page portfolio application',
      'Implement mobile-first responsive styling with CSS Custom Properties, Flexbox, and Grid',
      'Add dynamic JavaScript interactivity for category project filtering and real-time form validation',
      'Deploy the project to a public URL (GitHub Pages or Vercel) and achieve a 95+ Lighthouse score'
    ],
    requirements: [
      'Semantic HTML5 structure with proper landmarks (<header>, <nav>, <main>, <section>, <footer>)',
      'Responsive navigation bar with mobile hamburger drawer and smooth anchor scrolling',
      'Hero section with fluid typography using CSS clamp() and CTA action buttons',
      'About Me section with career timeline and skills grid organized by category',
      'Interactive Projects Showcase with category filter buttons and dynamic JavaScript DOM rendering',
      'Working Contact Form with real-time client-side validation and accessible error announcements',
      'Light/Dark mode theme toggle using CSS Custom Properties and localStorage persistence',
      '100% WCAG 2.1 AA accessibility compliance including keyboard focus rings and skip-to-content link',
      'Git repository with structured Conventional Commits and professional README.md documentation',
      'Production deployment on GitHub Pages or Vercel with clean Lighthouse audit report'
    ],
    deliverables: [
      {
        id: 'deliv-beg-01',
        title: 'Project Brief & Visual Wireframe Specification',
        description: 'Comprehensive design brief defining target audience, color palette tokens, typography scales, and wireframe sketches for mobile and desktop.',
        criteria: ['Color tokens defined in HSL', 'Typography scale mapped with rem', 'Mobile & desktop layout sketches'],
        expectedOutput: 'Design specification markdown document with wireframes and theme tokens.'
      },
      {
        id: 'deliv-beg-02',
        title: 'Semantic HTML5 Architecture & Document Outline',
        description: 'Clean index.html document adhering to HTML5 standards with single h1, semantic landmarks, and SEO metadata.',
        criteria: ['Valid DOCTYPE and head metadata', 'Semantic tags used throughout', 'Zero un-semantic div wrappers'],
        expectedOutput: 'Complete index.html file with semantic markup.'
      },
      {
        id: 'deliv-beg-03',
        title: 'Responsive Navigation & Mobile Drawer',
        description: 'Fixed/sticky navigation bar with brand logo, desktop link list, and animated mobile hamburger menu.',
        criteria: ['Flexbox alignment', 'Mobile toggle via JavaScript', 'Keyboard accessible menu links'],
        expectedOutput: 'Responsive navbar component with mobile drawer functionality.'
      },
      {
        id: 'deliv-beg-04',
        title: 'Hero Section with Fluid Typography',
        description: 'High-impact hero section featuring headline with clamp(), subtext, and call-to-action buttons.',
        criteria: ['clamp() fluid font sizing', 'Accessible button contrast', 'Responsive padding reflow'],
        expectedOutput: 'Hero section component responsive from 320px to 4K displays.'
      },
      {
        id: 'deliv-beg-05',
        title: 'About Me & Skills Architecture',
        description: 'Biography section with profile photo, experience narrative, and categorized technical skills grid.',
        criteria: ['Optimized responsive image with alt', 'CSS Grid skills layout', 'Semantic list elements'],
        expectedOutput: 'About section and CSS Grid skills matrix.'
      },
      {
        id: 'deliv-beg-06',
        title: 'Interactive Projects Showcase with Category Filter',
        description: 'Project gallery featuring interactive category filter buttons (All, Frontend, Full-Stack) that dynamically filter cards via JavaScript.',
        criteria: ['Dynamic DOM rendering or class toggling', 'Card hover animations', 'Live demo and GitHub repo links'],
        expectedOutput: 'Interactive JavaScript project filtering gallery.'
      },
      {
        id: 'deliv-beg-07',
        title: 'Contact Form with Real-Time Validation',
        description: 'Form with Name, Email, Subject, and Message inputs featuring custom regex validation and instant error feedback.',
        criteria: ['blur and submit event validation', 'aria-invalid and error containers', 'e.preventDefault() handling'],
        expectedOutput: 'Validated contact form with simulated submission success state.'
      },
      {
        id: 'deliv-beg-08',
        title: 'Light / Dark Theme Engine with LocalStorage',
        description: 'Theme toggle button that swaps CSS Custom Properties on <html> and remembers the user\'s preference across reloads.',
        criteria: ['CSS variables for background & text', 'localStorage sync', 'Smooth color transitions'],
        expectedOutput: 'Theme switcher script with persistent preference storage.'
      },
      {
        id: 'deliv-beg-09',
        title: 'Accessibility & Keyboard Navigation Audit',
        description: 'Full keyboard navigation pass ensuring visible :focus-visible outlines, skip link, and screen reader labels.',
        criteria: ['Skip-to-content link', 'Visible focus rings', 'All interactive elements reachable via Tab'],
        expectedOutput: 'WCAG 2.1 AA compliant keyboard navigation architecture.'
      },
      {
        id: 'deliv-beg-10',
        title: 'Git Version History with Conventional Commits',
        description: 'Local Git repository containing atomic commits organized with Conventional Commit prefixes (feat:, fix:, style:, docs:).',
        criteria: ['Minimum 8 atomic commits', 'Descriptive commit messages', 'Clean .gitignore configured'],
        expectedOutput: 'Git repository log showing structured development history.'
      },
      {
        id: 'deliv-beg-11',
        title: 'Professional README Documentation',
        description: 'Comprehensive repository README.md with project overview, screenshot demo, features list, tech stack, and setup instructions.',
        criteria: ['Markdown headers and badges', 'Live demo link', 'Local development instructions'],
        expectedOutput: 'Production-ready README.md markdown document.'
      },
      {
        id: 'deliv-beg-12',
        title: 'Production Deployment & Lighthouse Audit',
        description: 'Deployed live portfolio on GitHub Pages or Vercel with a verified Lighthouse score of 95+ across Performance, Accessibility, and Best Practices.',
        criteria: ['Live public HTTPS URL', 'Lighthouse score >= 95', 'Zero console errors on load'],
        expectedOutput: 'Live deployment URL and Lighthouse performance audit report.'
      }
    ],
    evaluationRubric: [
      { category: 'HTML & Semantics', weight: '25%', criteria: 'Proper HTML5 landmarks, metadata, single h1, accessible form associations.' },
      { category: 'CSS & Responsiveness', weight: '25%', criteria: 'Clean Box Model, mobile-first media queries, Flexbox & Grid, CSS variables.' },
      { category: 'JavaScript Interactivity', weight: '25%', criteria: 'Dynamic project filtering, theme switcher with localStorage, form validation.' },
      { category: 'Accessibility & Deployment', weight: '25%', criteria: 'WCAG 2.1 AA compliance, keyboard navigation, Lighthouse 95+ score, live URL.' }
    ]
  }
};

// Assessment Task
const BEGINNER_ASSESSMENT_TASK = {
  id: 'web-beg-assessment',
  title: '14. Level 1 Final Assessment: Web Development Fundamentals',
  description: 'Official 20-question comprehensive examination testing semantic HTML5, modern CSS layouts, JavaScript ES6+, DOM manipulation, and web fundamentals. Score at least 15/20 (75%) to pass.',
  duration: '30 min',
  orderIndex: 14,
  status: 'locked',
  isProject: false,
  isFinalAssessment: true,
  type: 'assessment',
  xpReward: 300,
  passingScore: 15,
  totalQuestions: 20,
  questions: BEGINNER_ASSESSMENT
};

// Assemble all 14 tasks for Beginner
const ALL_BEGINNER_TASKS = [
  ...BEGINNER_MODULES_RAW.map((mod, idx) => ({
    id: mod.id,
    orderIndex: idx + 1,
    title: mod.title,
    description: mod.summary || 'Comprehensive theory module covering modern web development fundamentals, standards, and practical coding exercises.',
    duration: mod.readingTime || '30 mins',
    level: 'beginner',
    status: idx === 0 ? 'in_progress' : 'locked',
    isProject: false,
    requiresQuiz: false,
    type: 'theory',
    xpReward: 100,
    lessonContent: {
      overview: mod.overview,
      objectives: mod.learningObjectives || [],
      estimatedTime: mod.readingTime || '30 mins',
      sections: (mod.sections || []).map(s => ({
        title: s.title,
        content: s.content,
        codeSnippets: s.codeSnippet ? [{
          language: 'typescript',
          code: s.codeSnippet,
          explanation: s.content,
          lineByLine: s.lineByLine || []
        }] : [],
        miniPractice: s.miniPractice ? {
          question: s.miniPractice.task,
          options: ['Option A', 'Option B', 'Option C', 'Option D'],
          correctAnswer: 0,
          explanation: s.miniPractice.solution || ''
        } : undefined
      })),
      keyTakeaways: [
        ...(mod.keyTakeaways || []),
        ...(mod.proTips || []),
        'Always validate code against modern web standards and test thoroughly across diverse device viewports.',
        'Follow industry best practices for web accessibility, semantic HTML structure, and clean maintainability.'
      ].slice(0, Math.max(3, (mod.keyTakeaways || mod.proTips || []).length)),
      syntaxGuide: mod.syntaxGuide,
      practiceExercises: mod.practiceExercise ? [{
        title: mod.practiceExercise.title,
        instructions: mod.practiceExercise.instructions,
        starterCode: mod.practiceExercise.starterCode,
        solutionCode: mod.practiceExercise.solution
      }] : []
    }
  })),
  BEGINNER_PROJECT,
  BEGINNER_ASSESSMENT_TASK
];

// Write file
const fileContent = `// Web Development Masterclass — Level 1: Beginner Data
// Auto-generated by build_web_dev_beginner.cjs

import { Task, QuizQuestion } from '../../types/roadmap.types';

export const WEB_DEV_BEGINNER_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(BEGINNER_ASSESSMENT, null, 2)};

export const WEB_DEV_BEGINNER_TASKS: Task[] = ${JSON.stringify(ALL_BEGINNER_TASKS, null, 2)};
`;

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log(`✅ Successfully generated Beginner data at ${targetFile} (${ALL_BEGINNER_TASKS.length} tasks, ${BEGINNER_ASSESSMENT.length} MCQs)`);
