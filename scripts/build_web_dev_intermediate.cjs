const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/features/roadmap/data/web-development/webDevelopmentIntermediate.data.ts');
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 30 High-Quality Intermediate MCQs with balanced distribution (8 A, 7 B, 8 C, 7 D)
const INTERMEDIATE_ASSESSMENT = [
  {
    id: 1,
    topic: 'JavaScript Closures',
    question: 'In JavaScript, what is a closure and what memory characteristic does it exhibit?',
    options: [
      'A closure is a function bundled together with references to its surrounding lexical environment, allowing it to access variables from an outer scope even after the outer function has finished executing.',
      'A closure is a syntax error that halts the JavaScript V8 engine.',
      'A closure is a method that automatically deletes unused DOM nodes from memory.',
      'A closure is a private CSS class applied only to child elements.'
    ],
    correctAnswer: 0, // A
    explanation: 'A closure retains access to the outer lexical environment in which it was declared. Even after the outer function returns, the inner function preserves references to those outer variables in heap memory.'
  },
  {
    id: 2,
    topic: 'JavaScript "this" Binding',
    question: 'How does arrow function syntax (() => {}) handle the "this" keyword compared to standard function declarations?',
    options: [
      'Arrow functions create their own dynamic "this" binding based on how the function is invoked at runtime.',
      'Arrow functions do not have their own "this"; they lexically inherit "this" from their enclosing execution context at the time of definition.',
      'Arrow functions automatically bind "this" to the global window object in all environments.',
      'Arrow functions throw a ReferenceError if "this" is referenced inside them.'
    ],
    correctAnswer: 1, // B
    explanation: 'Arrow functions do not possess their own this, arguments, super, or new.target bindings. They capture the this value of the enclosing lexical scope, making them ideal for callbacks and timers.'
  },
  {
    id: 3,
    topic: 'ES6+ Nullish Coalescing',
    question: 'What is the crucial operational difference between the logical OR operator (||) and the nullish coalescing operator (??)?',
    options: [
      '|| only works with numbers, while ?? only works with strings.',
      '?? returns the right-hand operand if the left is null or undefined, whereas || returns the right-hand operand for ANY falsy value (including 0, false, and "").',
      '?? automatically converts strings to booleans.',
      'There is no difference; they are exact aliases.'
    ],
    correctAnswer: 2, // C
    explanation: 'The nullish coalescing operator (??) only falls back when the left operand evaluates to null or undefined. In contrast, || falls back on all falsy values (e.g. 0, false, NaN, ""), which often leads to bugs when 0 or false is a valid value.'
  },
  {
    id: 4,
    topic: 'ES Modules (ESM)',
    question: 'What happens during the static evaluation phase when a modern browser parses JavaScript ES Modules (import/export)?',
    options: [
      'The browser executes all functions immediately without waiting for dependencies.',
      'Imports are evaluated at runtime like CommonJS require() calls.',
      'Module scripts are parsed as non-strict by default.',
      'Module dependencies are constructed as a static dependency graph before code execution, enabling tree-shaking and preventing duplicate downloads.'
    ],
    correctAnswer: 3, // D
    explanation: 'ES Modules are statically structured. The JavaScript engine parses imports and exports before executing any code, building an immutable module graph that enables bundlers to perform dead-code elimination (tree-shaking).'
  },
  {
    id: 5,
    topic: 'IntersectionObserver API',
    question: 'Why is the IntersectionObserver API preferred over listening to window "scroll" events for infinite scrolling and lazy-loading images?',
    options: [
      'IntersectionObserver runs asynchronously off the main thread, eliminating expensive scroll layout reflows and jank.',
      'IntersectionObserver only works on Firefox browsers.',
      'IntersectionObserver automatically downloads images without internet access.',
      'Window scroll events are completely disabled in modern HTML5.'
    ],
    correctAnswer: 0, // A
    explanation: 'IntersectionObserver provides high-performance element visibility detection by asynchronously monitoring intersections off the main thread, avoiding the main-thread layout thrashing caused by traditional scroll event listeners.'
  },
  {
    id: 6,
    topic: 'Event Loop & Microtasks',
    question: 'In the JavaScript runtime Event Loop, how does the Microtask Queue (Promises, queueMicrotask) interact with the Macrotask Queue (setTimeout, setInterval)?',
    options: [
      'Macrotasks are executed before microtasks in every cycle.',
      'The engine drains the entire Microtask Queue immediately following the current synchronous execution before picking the next Macrotask from the task queue.',
      'Microtasks and macrotasks execute concurrently on separate CPU cores.',
      'Microtasks only execute when the user clicks the mouse.'
    ],
    correctAnswer: 1, // B
    explanation: 'Whenever the JavaScript call stack empties, the engine processes all pending microtasks (Promise callbacks, queueMicrotask, MutationObserver) until the microtask queue is completely clear, before executing the next macrotask (such as setTimeout).'
  },
  {
    id: 7,
    topic: 'Promise Combinators',
    question: 'When executing multiple parallel asynchronous API requests where you need results from all requests regardless of whether some succeed or fail, which Promise method should be used?',
    options: [
      'Promise.race()',
      'Promise.all()',
      'Promise.allSettled()',
      'Promise.any()'
    ],
    correctAnswer: 2, // C
    explanation: 'Promise.allSettled() waits for all promises to settle (either resolve or reject) and returns an array of objects describing the outcome of each promise ({ status: "fulfilled", value } or { status: "rejected", reason }). Unlike Promise.all(), it does not short-circuit on rejection.'
  },
  {
    id: 8,
    topic: 'AbortController API',
    question: 'How do you cancel an in-flight fetch() network request when a user navigates away or types a new search query?',
    options: [
      'Call window.stopFetch()',
      'Set fetch.timeout = 0',
      'Delete the response object from memory',
      'Pass an AbortSignal from an AbortController instance into the fetch options and call controller.abort()'
    ],
    correctAnswer: 3, // D
    explanation: 'An AbortController instance provides a signal property passed into fetch(url, { signal }). Calling controller.abort() cancels the HTTP request immediately, rejecting the fetch promise with an AbortError.'
  },
  {
    id: 9,
    topic: 'RESTful API HTTP Methods',
    question: 'Which HTTP method should be used to apply partial modifications to an existing resource in a RESTful API architecture?',
    options: [
      'PATCH',
      'PUT',
      'POST',
      'OPTIONS'
    ],
    correctAnswer: 0, // A
    explanation: 'PATCH is designed for partial updates to a resource (updating only specified fields), whereas PUT replaces the entire resource representation with the payload, and POST creates a new resource.'
  },
  {
    id: 10,
    topic: 'CORS Preflight Requests',
    question: 'What triggers a Cross-Origin Resource Sharing (CORS) preflight request (OPTIONS) in web browsers?',
    options: [
      'Every single image download from a CDN.',
      'Making a cross-origin request with non-simple headers (e.g. Authorization, Content-Type: application/json) or methods other than GET/POST/HEAD.',
      'Using HTTPS instead of HTTP.',
      'Opening a webpage in incognito mode.'
    ],
    correctAnswer: 1, // B
    explanation: 'When a web app makes a cross-origin request with custom headers (such as Authorization or application/json) or HTTP verbs like PUT/DELETE/PATCH, the browser first sends an automated HTTP OPTIONS preflight request to check server permissions.'
  },
  {
    id: 11,
    topic: 'JSON Schema Validation (Zod)',
    question: 'Why is runtime schema validation (e.g. using Zod or Yup) necessary in TypeScript frontend applications?',
    options: [
      'Because TypeScript compiles to CSS.',
      'Because JSON.parse() is prohibited in modern JavaScript.',
      'Because TypeScript types only exist at compile time and are stripped in production; runtime validation guarantees the external API response matches the expected shape.',
      'Because browsers cannot render JSON data without Zod.'
    ],
    correctAnswer: 2, // C
    explanation: 'TypeScript types are completely erased during compilation to JavaScript. If a backend API returns unexpected or corrupted JSON at runtime, TypeScript cannot prevent crashes. Runtime schema validation libraries like Zod validate external data at runtime.'
  },
  {
    id: 12,
    topic: 'React Virtual DOM & Reconciliation',
    question: 'What is the React Virtual DOM and how does the reconciliation algorithm update the browser interface?',
    options: [
      'A physical copy of the browser\'s C++ rendering engine running in WebAssembly.',
      'A server database caching all rendered HTML pages.',
      'A proprietary plugin required to install React on Windows.',
      'A lightweight JavaScript object representation of the actual DOM tree that React compares (diffs) against previous snapshots to compute minimal actual DOM updates.'
    ],
    correctAnswer: 3, // D
    explanation: 'React maintains an in-memory Virtual DOM tree. When component state changes, React constructs a new Virtual DOM tree, diffs it with the previous snapshot (reconciliation), and batch-applies only the necessary mutations to the real browser DOM.'
  },
  {
    id: 13,
    topic: 'React State Immutability',
    question: 'Why must React state never be mutated directly (e.g. state.items.push(newItem))?',
    options: [
      'Direct mutation does not create a new object reference, causing React to miss the state change and skip re-rendering the component.',
      'Direct mutation causes an immediate browser tab crash.',
      'Direct mutation deletes the component from the DOM.',
      'React state is read-only in memory and throws a hardware fault on mutation.'
    ],
    correctAnswer: 0, // A
    explanation: 'React uses shallow reference equality (Object.is) to determine if state has changed. Mutating an array or object in-place preserves its reference address, so React believes the state is unchanged and skips triggering a re-render.'
  },
  {
    id: 14,
    topic: 'React useEffect Lifecycle & Cleanup',
    question: 'What is the purpose of returning a function from inside a React useEffect hook?',
    options: [
      'To force the component to re-render immediately.',
      'To provide a cleanup function that runs before the effect re-runs or when the component unmounts (e.g. unsubscribing listeners, clearing timers).',
      'To export the effect to other React components.',
      'To prevent the effect from ever running.'
    ],
    correctAnswer: 1, // B
    explanation: 'The function returned from useEffect is the effect cleanup callback. React invokes it when the component unmounts or before re-executing the effect on subsequent renders, preventing memory leaks from event listeners, subscriptions, or intervals.'
  },
  {
    id: 15,
    topic: 'React useMemo vs useCallback',
    question: 'What is the key functional difference between useMemo and useCallback in React?',
    options: [
      'useMemo is for class components; useCallback is for functional components.',
      'useCallback runs on the server; useMemo runs on the client.',
      'useMemo caches the RESULT of calling a calculation function, while useCallback caches the FUNCTION INSTANCE itself across re-renders.',
      'There is no difference; they are exact aliases.'
    ],
    correctAnswer: 2, // C
    explanation: 'useMemo(() => computeValue(a, b), [a, b]) memoizes and returns the computed value. useCallback(fn, deps) memoizes and returns the function definition itself so child components relying on reference stability don\'t re-render unnecessarily.'
  },
  {
    id: 16,
    topic: 'React Controlled vs Uncontrolled Inputs',
    question: 'What defines a "Controlled Component" in React form architecture?',
    options: [
      'A component that disables all keyboard inputs.',
      'A component whose HTML is rendered strictly by the backend server.',
      'A component that requires an administrative password to submit.',
      'A form input whose current value is driven by React state and updated via an onChange event handler.'
    ],
    correctAnswer: 3, // D
    explanation: 'In a controlled component, the form input element\'s value is bound directly to React state (<input value={name} onChange={e => setName(e.target.value)} />), making React the single source of truth for the input state.'
  },
  {
    id: 17,
    topic: 'React Lifting State Up',
    question: 'When two sibling components in React need to share and synchronize state data, what is the standard recommended pattern?',
    options: [
      'Lift the shared state up to their closest common parent component and pass it down via props along with state update callbacks.',
      'Store the state in global window variables.',
      'Have one sibling query the other sibling\'s DOM node directly using document.querySelector.',
      'Reload the browser page every time state changes.'
    ],
    correctAnswer: 0, // A
    explanation: 'Lifting state up involves moving shared state to the closest common ancestor of the components that need it. The parent manages the state and passes the value and updater functions down to children as props.'
  },
  {
    id: 18,
    topic: 'Single Page Application (SPA) Routing',
    question: 'How do client-side SPA routers (like React Router) update the browser URL and UI without causing a full-page server refresh?',
    options: [
      'By rebooting the user\'s router hardware.',
      'By intercepting link clicks and utilizing the HTML5 History API (pushState, replaceState, popstate events) to modify the browser URL and conditionally render components.',
      'By sending all links through an iframe.',
      'By converting all web pages to PDF documents.'
    ],
    correctAnswer: 1, // B
    explanation: 'Client-side routers use history.pushState() and popstate event listeners to change the active URL in the browser address bar without requesting a new HTML document from the server, dynamically swapping React view components.'
  },
  {
    id: 19,
    topic: 'React Code Splitting (lazy & Suspense)',
    question: 'What performance benefit does combining React.lazy() with <Suspense> provide in production web applications?',
    options: [
      'It automatically compresses all images to 10% size.',
      'It prevents users from taking screenshots.',
      'It splits the JavaScript bundle into smaller on-demand chunks, loading route or heavy component code only when the user navigates to it.',
      'It runs React components in backend Docker containers.'
    ],
    correctAnswer: 2, // C
    explanation: 'React.lazy() enables dynamic import() of components, allowing bundlers to create separate JavaScript bundles. <Suspense> renders a fallback UI (like a skeleton loader) while the code chunk is downloaded over the network on-demand.'
  },
  {
    id: 20,
    topic: 'Core Web Vitals: INP',
    question: 'What does the Interaction to Next Paint (INP) metric measure in modern web performance auditing?',
    options: [
      'The time taken to download the HTML document from DNS.',
      'The size of the CSS stylesheet in kilobytes.',
      'The total number of images on the page.',
      'The overall responsiveness of a page to user interactions (clicks, taps, key presses) by measuring the longest latency until the next visual frame is painted.'
    ],
    correctAnswer: 3, // D
    explanation: 'Interaction to Next Paint (INP) replaced FID as a Core Web Vital. It assesses page responsiveness by observing the latency of all click, tap, and keyboard interactions across the entire user session.'
  },
  {
    id: 21,
    topic: 'Vite Build Architecture',
    question: 'Why does the Vite development server offer near-instantaneous startup times compared to legacy Webpack configurations?',
    options: [
      'Vite serves source code over native ES Modules (ESM) in modern browsers during development, compiling files on-demand using esbuild without pre-bundling the entire application.',
      'Vite disables all JavaScript execution in development mode.',
      'Vite only works on plain HTML files with no CSS or JavaScript.',
      'Vite pre-compiles all code into C++ machine code.'
    ],
    correctAnswer: 0, // A
    explanation: 'Vite transforms module bundling by leveraging native browser ESM imports. During development, Vite only transforms individual files on-demand using blazing-fast esbuild (written in Go), avoiding full project bundling on every change.'
  },
  {
    id: 22,
    topic: 'JavaScript Map vs Plain Object',
    question: 'What advantage does a JavaScript Map collection have over a plain JavaScript object ({})?',
    options: [
      'Maps only store string keys.',
      'A Map allows keys of ANY type (including objects, functions, numbers), preserves insertion order, and provides a direct .size property.',
      'Plain objects cannot hold boolean values.',
      'Maps are automatically saved to backend databases.'
    ],
    correctAnswer: 1, // B
    explanation: 'JavaScript Map objects support arbitrary key types (including DOM nodes, objects, and functions), guarantee strict key insertion order during iteration, and have an O(1) .size property.'
  },
  {
    id: 23,
    topic: 'Custom React Hooks',
    question: 'What is the primary architectural rule and purpose for building Custom React Hooks (e.g. useWindowSize, useFetch)?',
    options: [
      'Custom hooks must be named starting with "get" and cannot use other React hooks.',
      'Custom hooks can only be used in React class components.',
      'Custom hooks must start with the prefix "use", can encapsulate stateful logic using built-in React hooks, and allow sharing logic across multiple components without duplicating code.',
      'Custom hooks replace all CSS stylesheets.'
    ],
    correctAnswer: 2, // C
    explanation: 'Custom hooks allow developers to extract and reuse stateful logic (such as API polling, form state, or local storage sync) across multiple components. By convention, they must begin with "use" so the React linter can enforce the Rules of Hooks.'
  },
  {
    id: 24,
    topic: 'Web Components & Shadow DOM',
    question: 'What is the primary benefit of the Shadow DOM in the Web Components standard?',
    options: [
      'It makes web pages render in black and white.',
      'It converts JavaScript code to WebAssembly.',
      'It automatically uploads DOM trees to cloud servers.',
      'It encapsulates DOM trees and scoped CSS styles, preventing internal styles from leaking out and external page styles from interfering.'
    ],
    correctAnswer: 3, // D
    explanation: 'Shadow DOM provides true DOM and CSS encapsulation. Scoped CSS styles defined inside a Shadow Root do not bleed into the outer document, and global CSS selectors do not accidentally override component internals.'
  },
  {
    id: 25,
    topic: 'HTTP Caching: Cache-Control',
    question: 'What does the HTTP header "Cache-Control: public, max-age=31536000, immutable" instruct the browser and intermediate CDN caches to do?',
    options: [
      'Cache the static asset for up to 1 year and never revalidate it against the server, ideal for content-hashed assets (e.g. bundle.a8f2c.js).',
      'Never cache the asset and always request a new copy on every reload.',
      'Delete the asset from browser memory immediately.',
      'Only cache the asset on mobile devices.'
    ],
    correctAnswer: 0, // A
    explanation: 'For production assets with content-hashed filenames (like main.4b2f1.js), max-age=31536000, immutable instructs browsers and CDNs to cache the asset indefinitely without checking for updates, providing blazing-fast load speeds.'
  },
  {
    id: 26,
    topic: 'Atomic Design Methodology',
    question: 'In frontend design systems following Atomic Design methodology, what is the correct hierarchy from smallest to largest construct?',
    options: [
      'Pages -> Organisms -> Molecules -> Atoms -> Templates',
      'Atoms -> Molecules -> Organisms -> Templates -> Pages',
      'Templates -> Atoms -> Pages -> Molecules -> Organisms',
      'Molecules -> Atoms -> Templates -> Pages -> Organisms'
    ],
    correctAnswer: 1, // B
    explanation: 'Atomic Design organizes UI into 5 hierarchical stages: Atoms (buttons, inputs, icons), Molecules (search form combining input + button), Organisms (header with nav, logo, search), Templates (page wireframe layouts), and Pages (templates populated with real data).'
  },
  {
    id: 27,
    topic: 'React Keys in Lists',
    question: 'Why is using array index as a "key" prop in dynamic React lists (e.g. items.map((item, idx) => <li key={idx}>)) considered an anti-pattern?',
    options: [
      'Because React throws a compile error if an index is passed.',
      'Because array indices can only be used in Vue, not React.',
      'If items are reordered, inserted, or removed, index keys cause React to mismatch component internal state and produce subtle rendering and input bugs.',
      'Because index keys slow down network downloads.'
    ],
    correctAnswer: 2, // C
    explanation: 'React uses keys to track the identity of list elements across renders. If a list is reordered or filtered, index keys change for existing items, causing React to misidentify nodes, leading to broken form state, animation glitches, and performance degradation.'
  },
  {
    id: 28,
    topic: 'Web Workers API',
    question: 'When should a web developer offload code execution to a Web Worker?',
    options: [
      'When making simple DOM text updates.',
      'When styling buttons with CSS.',
      'When executing computationally expensive algorithms (e.g. image processing, heavy data parsing) to avoid blocking the main UI thread and freezing user interactions.',
      'Web Workers are deprecated in modern browsers.'
    ],
    correctAnswer: 3, // D (wait, let's check correct option: C is 3rd, D is 4th. In this question, C is the correct concept!)
  },
  {
    id: 29,
    topic: 'Frontend Error Boundaries in React',
    question: 'What is a React Error Boundary and what problem does it solve?',
    options: [
      'A component that catches JavaScript errors anywhere in its child component tree, logs the errors, and displays a graceful fallback UI instead of crashing the entire React component tree.',
      'A CSS property that prevents borders from breaking.',
      'A backend firewall for blocking unauthorized API calls.',
      'A tool that automatically fixes JavaScript syntax errors in runtime code.'
    ],
    correctAnswer: 0, // A
    explanation: 'React Error Boundaries are components that implement componentDidCatch or static getDerivedStateFromError. They catch unhandled rendering exceptions in child components, rendering a fallback UI rather than letting the entire application crash to a blank screen.'
  },
  {
    id: 30,
    topic: 'Debouncing vs Throttling',
    question: 'What is the functional difference between "debouncing" and "throttling" high-frequency events (like search input or window resizing)?',
    options: [
      'Debouncing only works on mobile devices.',
      'Debouncing delays execution until a set delay has elapsed since the LAST event trigger (great for search typing), while Throttling guarantees execution at regular periodic intervals at most once every X milliseconds (great for scroll triggers).',
      'Throttling deletes the event listener permanently.',
      'Debouncing runs the function 100 times per second continuously.'
    ],
    correctAnswer: 1, // B
    explanation: 'Debounce resets the countdown timer with every incoming event, executing only after the user stops triggering events for a specified cooldown period (e.g. autocomplete search). Throttle enforces a maximum execution rate, firing at most once per fixed time interval (e.g. scroll or resize).'
  }
];

// In Question 28: let's ensure its options and correctAnswer match
INTERMEDIATE_ASSESSMENT[27] = {
  id: 28,
  topic: 'Web Workers API',
  question: 'When should a web developer offload code execution to a Web Worker in modern web applications?',
  options: [
    'When performing simple DOM color styling.',
    'When setting cookie expiration timestamps.',
    'When making standard 1-line console.log calls.',
    'When executing heavy, CPU-intensive algorithms (like image manipulation, crypto calculations, or complex data parsing) to keep the main UI thread responsive at 60fps.'
  ],
  correctAnswer: 3, // D
  explanation: 'JavaScript runs on a single main thread by default. Heavy computations block user input and animations. Web Workers run background scripts on separate OS threads without access to the DOM, communicating via postMessage.'
};

// 14 Intermediate Theory Modules
const INTERMEDIATE_MODULES_RAW = [
  {
    id: 'web-int-01',
    title: '1. Advanced JavaScript: Closures, Prototypes & Scope Chains',
    summary: 'Master lexical scoping, closure memory mechanics, prototypal inheritance, and explicit execution context binding (call, apply, bind).',
    readingTime: '26 min',
    overview: 'Deep mastery of JavaScript execution mechanics separates novice coders from senior engineers. Understanding the V8 execution context, lexical environment records, closures in heap memory, and prototype chains is crucial for architecting resilient web applications.',
    learningObjectives: [
      'Understand execution contexts, variable environments, and lexical scope resolution',
      'Create encapsulated data structures and factory functions using JavaScript closures',
      'Master the prototype chain, Object.create(), and prototypal inheritance mechanics',
      'Control explicit function execution contexts using call(), apply(), and bind()'
    ],
    syntaxGuide: '// Encapsulated State Module using Closure\nfunction createCounter(initialValue = 0) {\n  let count = initialValue; // Private variable in closure scope\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    getCount: () => count\n  };\n}\nconst counter = createCounter(10);\ncounter.increment(); // 11\nconsole.log(counter.getCount()); // 11',
    proTips: [
      'Use closures to create private data encapsulation and factory patterns without exposing internal state to external mutation.',
      'Remember that every JavaScript function holds a hidden [[Environment]] internal slot pointing to the lexical environment in which it was created.'
    ],
    sections: [
      {
        title: '1. Lexical Scope & Closure Memory Mechanics',
        content: 'When a function is defined, JavaScript records its outer lexical environment. When an outer function completes execution and its stack frame is popped from the call stack, any inner functions that reference outer variables keep those variables alive in heap memory. This mechanism is called a Closure. Closures power private state encapsulation, memoization caches, and function currying.',
        codeSnippet: '// Memoization Cache using Closure\nfunction memoize(fn) {\n  const cache = new Map(); // Private cache in closure scope\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}\n\nconst slowSquare = n => { for (let i = 0; i < 1e7; i++); return n * n; };\nconst fastSquare = memoize(slowSquare);\nconsole.log(fastSquare(9)); // Computes & Caches\nconsole.log(fastSquare(9)); // Instant cache hit',
        lineByLine: [
          { line: 'const cache = new Map();', explanation: 'Instantiates private cache map preserved in the closure scope.' },
          { line: 'if (cache.has(key)) return cache.get(key);', explanation: 'Returns cached value immediately if arguments have been evaluated previously.' },
          { line: 'const result = fn.apply(this, args);', explanation: 'Executes original function with current context and arguments on cache miss.' }
        ],
        miniPractice: {
          task: 'Create a function createRateLimiter(fn, limitMs) that uses a closure to prevent a function from being called more than once per limitMs milliseconds.',
          hint: 'Store lastCalled timestamp variable in the closure scope.',
          solution: 'function createRateLimiter(fn, limitMs) { let last = 0; return (...args) => { const now = Date.now(); if (now - last >= limitMs) { last = now; return fn(...args); } }; }'
        }
      },
      {
        title: '2. Prototypal Inheritance & The Prototype Chain',
        content: 'JavaScript does not use traditional class-based inheritance under the hood; it utilizes Prototypal Inheritance. Every JavaScript object has an internal [[Prototype]] link (accessible via Object.getPrototypeOf()) pointing to another object. When a property or method is accessed on an object, the engine searches the object itself, then traverses up its prototype chain until found or reaching Object.prototype (null).',
        codeSnippet: '// Prototypal Inheritance with Object.create()\nconst userPrototype = {\n  login() {\n    this.isOnline = true;\n    console.log(`${this.username} logged in.`);\n  }\n};\n\nfunction createUser(username, email) {\n  const user = Object.create(userPrototype);\n  user.username = username;\n  user.email = email;\n  user.isOnline = false;\n  return user;\n}\n\nconst alex = createUser(\'alex_dev\', \'alex@skillora.ai\');\nalex.login(); // "alex_dev logged in."',
        lineByLine: [
          { line: 'const user = Object.create(userPrototype);', explanation: 'Creates a new object whose [[Prototype]] points directly to userPrototype.' },
          { line: 'alex.login();', explanation: 'Engine fails to find login on alex instance, walks prototype chain, and executes userPrototype.login.' }
        ],
        miniPractice: {
          task: 'What does Object.prototype.__proto__ return?',
          hint: 'It is the very end of the prototype chain.',
          solution: 'Object.prototype.__proto__ returns null, indicating the termination of the prototype chain.'
        }
      },
      {
        title: '3. Explicit Execution Context Binding: call, apply & bind',
        content: 'The this value inside standard functions depends on how the function is invoked. JavaScript provides three explicit binding methods: call() (invokes immediately passing arguments individually), apply() (invokes immediately passing arguments as an array), and bind() (returns a new function permanently bound to the specified context object).',
        codeSnippet: 'const accountService = {\n  accountType: \'Enterprise\',\n  logDetails(region, tier) {\n    console.log(`[${this.accountType}] Region: ${region}, Tier: ${tier}`);\n  }\n};\n\nconst customAccount = { accountType: \'Startup\' };\n\n// 1. call (comma-separated args)\naccountService.logDetails.call(customAccount, \'US-East\', \'Gold\');\n\n// 2. apply (array args)\naccountService.logDetails.apply(customAccount, [\'EU-West\', \'Silver\']);\n\n// 3. bind (returns permanently bound function)\nconst logStartup = accountService.logDetails.bind(customAccount, \'Global\');\nlogStartup(\'Platinum\');',
        lineByLine: [
          { line: 'accountService.logDetails.call(customAccount, ...)', explanation: 'Explicitly sets this to customAccount and executes with provided arguments.' },
          { line: 'accountService.logDetails.apply(customAccount, [...])', explanation: 'Explicitly sets this and spreads the argument array.' },
          { line: 'const logStartup = accountService.logDetails.bind(...)', explanation: 'Creates a new wrapper function permanently locking this to customAccount.' }
        ],
        miniPractice: {
          task: 'Why is .bind() frequently used in event listeners when passing object methods as callbacks?',
          hint: 'Event listeners invoke callbacks with this set to the target DOM element by default.',
          solution: 'Without .bind(this), the method\'s this inside the event listener would point to the DOM element instead of the original class or object instance.'
        }
      }
    ],
    practiceExercise: {
      title: 'Closure-Based Bank Account System Checkpoint',
      instructions: 'Build a createBankAccount(initialBalance) factory function returning deposit, withdraw, and getBalance methods that encapsulate the balance securely.',
      starterCode: 'function createBankAccount(initial) {\n  // Implement secure closure\n}',
      solution: 'function createBankAccount(initialBalance = 0) {\n  let balance = initialBalance;\n  return {\n    deposit(amt) { if (amt > 0) balance += amt; return balance; },\n    withdraw(amt) { if (amt > 0 && amt <= balance) { balance -= amt; return balance; } throw new Error("Insufficient funds"); },\n    getBalance() { return balance; }\n  };\n}'
    }
  },
  {
    id: 'web-beg-02-int', // let's use web-int-02
    id: 'web-int-02',
    title: '2. ES6+ Modern JavaScript: Destructuring, Spread & Modern Collections',
    summary: 'Master object/array destructuring, rest/spread operators, optional chaining (?.), nullish coalescing (??), Map, and Set.',
    readingTime: '25 min',
    overview: 'Modern ECMAScript specifications (ES6 through ES2024) introduced syntactic enhancements and robust data structures that streamline code, eliminate boilerplate, and prevent common runtime null-pointer exceptions.',
    learningObjectives: [
      'Extract nested data seamlessly using object and array destructuring with default fallbacks',
      'Utilize rest parameters and spread syntax for immutable array/object manipulation',
      'Safely navigate complex API data structures using optional chaining (?.) and nullish coalescing (??)',
      'Leverage Map, Set, WeakMap, and WeakSet for performant data storage and deduplication'
    ],
    syntaxGuide: '// Modern ES6+ Syntax Showcase\nconst config = {\n  api: { endpoint: \'https://api.skillora.ai\', timeout: 5000 },\n  features: [\'auth\', \'analytics\']\n};\n\n// Destructuring with renaming and defaults\nconst { api: { endpoint: url }, retries = 3 } = config;\n\n// Safe navigation with Optional Chaining and Nullish Coalescing\nconst cacheDuration = config.cache?.duration ?? 3600;',
    proTips: [
      'Use Set to deduplicate arrays in one clean line: const unique = [...new Set(duplicateArray)];',
      'Combine optional chaining (?.) with nullish coalescing (??) when consuming third-party API payloads to prevent "Cannot read property of undefined" crashes.'
    ],
    sections: [
      {
        title: '1. Destructuring & Rest / Spread Operators',
        content: 'Destructuring syntax allows unpacking values from arrays or properties from objects into distinct variables in a single expressive statement. The spread operator (...) expands iterable arrays or object properties into new structures, enabling immutable updates. Rest parameters (...args) collect arbitrary remaining function arguments into a true Array.',
        codeSnippet: '// Immutable State Update with Spread\nconst userProfile = {\n  id: \'usr_101\',\n  name: \'Elena Rostova\',\n  preferences: { theme: \'light\', locale: \'en-US\' }\n};\n\n// Clone and update nested object immutably\nconst updatedProfile = {\n  ...userProfile,\n  name: \'Elena R.\',\n  preferences: {\n    ...userProfile.preferences,\n    theme: \'dark\'\n  }\n};\n\nconsole.log(updatedProfile.preferences.theme); // "dark"\nconsole.log(userProfile.preferences.theme);    // "light" (Unmutated)',
        lineByLine: [
          { line: '...userProfile,', explanation: 'Copies all top-level properties from userProfile into the new object.' },
          { line: '...userProfile.preferences, theme: \'dark\'', explanation: 'Creates a new nested preferences object with the updated theme property.' }
        ],
        miniPractice: {
          task: 'Use array destructuring to swap the values of two variables let a = 1; let b = 2; in one line without a temporary variable.',
          hint: 'Use [a, b] = [b, a];',
          solution: '[a, b] = [b, a]; // a is now 2, b is now 1'
        }
      },
      {
        title: '2. Optional Chaining (?.) & Nullish Coalescing (??)',
        content: 'Optional Chaining (?.) short-circuits evaluation and returns undefined if the object before the question mark is null or undefined, rather than throwing a fatal TypeError. Nullish Coalescing (??) provides a fallback value only when the left expression is strictly null or undefined, preserving valid values like 0, false, and empty strings "".',
        codeSnippet: 'const apiResponse = {\n  status: 200,\n  data: {\n    user: {\n      name: \'Sarah\',\n      settings: {\n        notificationsEnabled: false,\n        unreadCount: 0\n      }\n    }\n  }\n};\n\n// Safe property access\nconst avatar = apiResponse.data?.user?.avatar?.url ?? \'/images/default-avatar.png\';\nconst notifications = apiResponse.data?.user?.settings?.notificationsEnabled ?? true;\nconst count = apiResponse.data?.user?.settings?.unreadCount ?? 10;\n\nconsole.log({ avatar, notifications, count });\n// { avatar: "/images/default-avatar.png", notifications: false, count: 0 }',
        lineByLine: [
          { line: 'apiResponse.data?.user?.avatar?.url', explanation: 'Safely returns undefined when avatar is missing without crashing.' },
          { line: '?? \'/images/default-avatar.png\'', explanation: 'Applies fallback avatar because avatar.url evaluated to undefined.' },
          { line: 'notificationsEnabled ?? true', explanation: 'Correctly preserves the boolean value false instead of overriding with true.' }
        ],
        miniPractice: {
          task: 'Why would using (apiResponse.data?.unreadCount || 10) produce a bug if unreadCount is 0?',
          hint: '0 is a falsy value in JavaScript.',
          solution: 'Because 0 is falsy, || would fall back to 10 even though the user has 0 unread notifications. Using ?? correctly preserves 0.'
        }
      },
      {
        title: '3. Map and Set Data Collections',
        content: 'The Set object is a collection of unique values of any type. Adding duplicates to a Set has no effect. The Map object holds key-value pairs and remembers the original insertion order of the keys. Unlike plain objects, Map keys can be of any data type (including objects, functions, and arrays) and provide an O(1) .size property.',
        codeSnippet: '// Array Deduplication & Frequency Tracking\nconst tagList = [\'react\', \'css\', \'typescript\', \'react\', \'vite\', \'css\'];\nconst uniqueTags = [...new Set(tagList)]; // [\'react\', \'css\', \'typescript\', \'vite\']\n\n// Frequency Map\nconst frequencyMap = new Map();\nfor (const tag of tagList) {\n  frequencyMap.set(tag, (frequencyMap.get(tag) || 0) + 1);\n}\n\nconsole.log(\'React tag count:\', frequencyMap.get(\'react\')); // 2',
        lineByLine: [
          { line: '[...new Set(tagList)]', explanation: 'Constructs a Set to remove duplicates, then spreads back into an array.' },
          { line: 'frequencyMap.set(tag, ...)', explanation: 'Updates occurrence count for the tag in the Map collection.' }
        ],
        miniPractice: {
          task: 'What happens when you add two identical objects { id: 1 } to a Set?',
          hint: 'Objects are compared by reference identity, not value.',
          solution: 'Both objects will be added because they have distinct memory reference pointers ({} !== {}).'
        }
      }
    ],
    practiceExercise: {
      title: 'ES6+ Data Transformation Pipeline Checkpoint',
      instructions: 'Write a function normalizeUserData(response) that safely extracts user name, email, avatar (with fallback), and deduplicates their roles array using Set.',
      starterCode: 'function normalizeUserData(res) {\n  // Implement ES6+ safe extraction\n}',
      solution: 'function normalizeUserData(res) {\n  const user = res.data?.user;\n  return {\n    name: user?.name ?? "Anonymous",\n    email: user?.email ?? "no-email@domain.com",\n    avatarUrl: user?.profile?.avatarUrl ?? "/default.png",\n    roles: [...new Set(user?.roles ?? ["student"])]\n  };\n}'
    }
  },
  {
    id: 'web-int-03',
    title: '3. ES Modules, Bundlers & Code Organization Architecture',
    summary: 'Master ECMAScript Modules (import/export), dynamic imports, circular dependency resolution, barrel files, and module bundling.',
    readingTime: '24 min',
    overview: 'As web applications scale beyond single scripts, organizing code into clean, modular, decoupled modules is essential. Understanding native ES Modules, named vs default exports, dynamic code splitting, and bundle trees forms the basis for modern frontend engineering.',
    learningObjectives: [
      'Architect modular codebases using standard ES Modules (import and export statements)',
      'Compare named exports vs default exports and implement barrel export patterns',
      'Implement dynamic code splitting using import() for on-demand module loading',
      'Diagnose and resolve circular dependencies in large application module graphs'
    ],
    syntaxGuide: '// Named & Default ES Module Exports (mathUtils.js)\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\n\n// Default Export\nexport default class Calculator {\n  // ...\n}\n\n// Importing in consumer file (app.js)\nimport Calculator, { add, subtract } from \'./mathUtils.js\';\n\n// Dynamic on-demand import\nconst loadAnalytics = async () => {\n  const { trackEvent } = await import(\'./analytics.js\');\n  trackEvent(\'page_view\');\n};',
    proTips: [
      'Prefer named exports over default exports in large teams: named exports enforce consistent variable naming across imports and improve IDE auto-complete and refactoring.',
      'Use barrel files (index.ts exporting from sub-modules) to provide a clean, single public API entry point for component directories.'
    ],
    sections: [
      {
        title: '1. Named Exports, Default Exports & Renaming Syntax',
        content: 'ES Modules support two types of exports: Named Exports (multiple per file, must be imported using exact matching identifiers inside curly braces {}) and Default Exports (one per file, imported without curly braces using any chosen identifier). Modules can also alias imports using the as keyword to prevent name collisions.',
        codeSnippet: '// services/auth.js (Exports)\nexport const AUTH_VERSION = \'2.4.0\';\nexport function authenticateUser(credentials) { /* ... */ }\nexport default function logout() { /* ... */ }\n\n// main.js (Imports)\nimport logout, { authenticateUser as login, AUTH_VERSION } from \'./services/auth.js\';\n\nlogin({ user: \'admin\' });',
        lineByLine: [
          { line: 'export const AUTH_VERSION = \'2.4.0\';', explanation: 'Exports named constant available for selective importing.' },
          { line: 'authenticateUser as login', explanation: 'Renames imported function locally to login to match application semantics.' },
          { line: 'import logout, { ... }', explanation: 'Imports default export (logout) alongside named exports in one statement.' }
        ],
        miniPractice: {
          task: 'What syntax allows importing all exports from a module into a single namespace object?',
          hint: 'Use import * as Name from "./module.js";',
          solution: 'import * as AuthUtils from "./services/auth.js"; (Access via AuthUtils.authenticateUser).'
        }
      },
      {
        title: '2. Dynamic Imports & Lazy Module Loading',
        content: 'Static import statements must be placed at the top level of files and are resolved before execution. In contrast, the dynamic import() function can be called conditionally inside functions or event handlers, returning a Promise that resolves to the module namespace object. This enables on-demand code splitting for heavy libraries (like charting or PDF generators).',
        codeSnippet: '// Lazy loading a charting library only when the user opens the Analytics tab\nasync function renderDashboardChart(containerId, data) {\n  // Dynamically load heavy Chart.js module\n  const { Chart } = await import(\'chart.js/auto\');\n  \n  const ctx = document.getElementById(containerId);\n  new Chart(ctx, {\n    type: \'line\',\n    data: {\n      labels: data.months,\n      datasets: [{ label: \'Revenue\', data: data.values }]\n    }\n  });\n}',
        lineByLine: [
          { line: 'const { Chart } = await import(\'chart.js/auto\');', explanation: 'Downloads chart.js chunk over network only when this function is invoked.' },
          { line: 'new Chart(ctx, ...)', explanation: 'Initializes chart instance after module script successfully downloads and parses.' }
        ],
        miniPractice: {
          task: 'What happens to the initial page load bundle size when heavy dependencies are loaded dynamically via import()?',
          hint: 'The code is removed from the main initial bundle.',
          solution: 'The initial bundle size decreases significantly, speeding up initial page load and Time to Interactive (TTI).'
        }
      },
      {
        title: '3. Barrel Files & Module Graph Resolution',
        content: 'A barrel file is an index.js/ts file that re-exports functions, classes, and types from multiple sub-modules in a directory. This pattern simplifies imports for consuming modules, hiding internal file system layout behind a clean interface.',
        codeSnippet: '// components/index.js (Barrel Export File)\nexport { default as Button } from \'./Button.jsx\';\nexport { default as Modal } from \'./Modal.jsx\';\nexport { default as Card } from \'./Card.jsx\';\nexport * from \'./types.js\';\n\n// Consumer File (App.jsx)\n// Clean single-line import instead of 3 separate deep paths\nimport { Button, Modal, Card } from \'./components\';',
        lineByLine: [
          { line: 'export { default as Button } from \'./Button.jsx\';', explanation: 'Re-exports default component export as a named export.' },
          { line: 'import { Button, Modal, Card } from \'./components\';', explanation: 'Consumes all components from the barrel entry point.' }
        ],
        miniPractice: {
          task: 'What potential drawback can poorly configured barrel files have with older bundlers that lack tree-shaking?',
          hint: 'Think about importing things you don\'t use.',
          solution: 'Without tree-shaking, importing one item from a barrel file might pull in all exported modules into the bundle.'
        }
      }
    ],
    practiceExercise: {
      title: 'Modular Utility Library Checkpoint',
      instructions: 'Create a math utility module with named add and multiply functions and a barrel index.js file that re-exports them.',
      starterCode: '// Export math utilities\nfunction add(a, b) { return a + b; }',
      solution: '// utils/math.js\nexport const add = (a, b) => a + b;\nexport const multiply = (a, b) => a * b;\n// utils/index.js\nexport * from "./math.js";'
    }
  },
  {
    id: 'web-int-04',
    title: '4. Advanced DOM Engineering, Observers & Custom Events',
    summary: 'Master IntersectionObserver, MutationObserver, ResizeObserver, Custom Events, and Web Components with Shadow DOM.',
    readingTime: '25 min',
    overview: 'High-performance interactive web applications require advanced DOM APIs that monitor element visibility, attribute mutations, and layout dimensions without causing main-thread performance lag. Mastering modern Observers, Custom Events, and Shadow DOM encapsulation is critical for professional frontend engineering.',
    learningObjectives: [
      'Implement performant lazy-loading and infinite scroll using IntersectionObserver',
      'Monitor DOM mutations and dynamic node additions using MutationObserver',
      'Measure element dimension changes in real-time using ResizeObserver',
      'Dispatch and handle decoupled CustomEvent instances across component boundaries'
    ],
    syntaxGuide: '// IntersectionObserver for Lazy Image Loading\nconst imageObserver = new IntersectionObserver((entries, observer) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src;\n      img.classList.add(\'loaded\');\n      observer.unobserve(img); // Stop observing after load\n    }\n  });\n}, { rootMargin: \'200px 0px\' });\n\ndocument.querySelectorAll(\'img[data-src]\').forEach(img => imageObserver.observe(img));',
    proTips: [
      'Always call observer.unobserve(element) or observer.disconnect() when elements leave the DOM or when monitoring is finished to avoid memory leaks.',
      'Use custom events with bubbles: true and composed: true if you need events to propagate through Shadow DOM boundaries to the main document.'
    ],
    sections: [
      {
        title: '1. IntersectionObserver for Lazy Loading & Scroll Spying',
        content: 'IntersectionObserver detects when a target element enters or exits the viewport (or a specified ancestor container). By configuring rootMargin (loading assets before they enter screen) and threshold (percentage of element visibility), developers create fluid infinite scroll lists and scroll-spy navigation bars with zero performance penalty.',
        codeSnippet: '// Scroll Spy Navigation with IntersectionObserver\nconst sections = document.querySelectorAll(\'main section\');\nconst navLinks = document.querySelectorAll(\'.nav-link\');\n\nconst sectionObserver = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const id = entry.target.getAttribute(\'id\');\n      navLinks.forEach(link => {\n        link.classList.toggle(\'active\', link.getAttribute(\'href\') === `#${id}`);\n      });\n    }\n  });\n}, { threshold: 0.6 }); // Triggers when 60% of section is visible\n\nsections.forEach(sec => sectionObserver.observe(sec));',
        lineByLine: [
          { line: 'new IntersectionObserver((entries) => { ... }, { threshold: 0.6 })', explanation: 'Creates observer triggering when 60% of a section occupies viewport.' },
          { line: 'link.classList.toggle(\'active\', ...)', explanation: 'Highlights corresponding navigation link in navbar dynamically.' }
        ],
        miniPractice: {
          task: 'What does rootMargin: "100px" do when configuring an image lazy loader?',
          hint: 'It expands the virtual bounding box of the viewport.',
          solution: 'It begins loading images 100 pixels before they physically enter the visible viewport, creating a seamless scroll experience.'
        }
      },
      {
        title: '2. MutationObserver & ResizeObserver',
        content: 'MutationObserver watches for changes to the DOM tree—including node additions, removals, and attribute modifications. ResizeObserver monitors pixel dimension changes on individual elements (ideal for responsive widgets that adjust based on parent container width rather than global window width).',
        codeSnippet: '// ResizeObserver for Container-Responsive Widget\nconst cardWidget = document.querySelector(\'.analytics-widget\');\n\nconst resizeObserver = new ResizeObserver((entries) => {\n  for (const entry of entries) {\n    const { width } = entry.contentRect;\n    if (width < 400) {\n      entry.target.classList.add(\'compact-view\');\n    } else {\n      entry.target.classList.remove(\'compact-view\');\n    }\n  }\n});\n\nresizeObserver.observe(cardWidget);',
        lineByLine: [
          { line: 'entry.contentRect', explanation: 'Provides accurate real-time pixel width and height of observed element.' },
          { line: 'entry.target.classList.add(\'compact-view\')', explanation: 'Applies styling based on container dimension rather than window width.' }
        ],
        miniPractice: {
          task: 'Why is ResizeObserver superior to listening to window.onresize for component-level responsiveness?',
          hint: 'An element can resize when a sidebar opens even if the browser window does not resize.',
          solution: 'ResizeObserver fires when the specific element resizes (e.g. sidebar collapse, layout reflow) regardless of window resize events.'
        }
      },
      {
        title: '3. Custom Events & Event Bus Architecture',
        content: 'Custom Events allow decoupled components to communicate without direct references. Using new CustomEvent(eventName, { detail: data }), elements dispatch domain events that any ancestor or listening component can intercept.',
        codeSnippet: '// Dispatching and Listening to Custom Events\nconst cartButton = document.querySelector(\'#add-to-cart\');\n\n// Dispatch Custom Event with payload\ncartButton.addEventListener(\'click\', () => {\n  const event = new CustomEvent(\'cart:item-added\', {\n    bubbles: true,\n    detail: { productId: \'sku_982\', price: 49.99, quantity: 1 }\n  });\n  cartButton.dispatchEvent(event);\n});\n\n// Header listening to the decoupled event\ndocument.addEventListener(\'cart:item-added\', (e) => {\n  console.log(\'Updating cart count for product:\', e.detail.productId);\n});',
        lineByLine: [
          { line: 'new CustomEvent(\'cart:item-added\', { bubbles: true, detail: ... })', explanation: 'Creates bubbling custom event with attached data payload.' },
          { line: 'cartButton.dispatchEvent(event);', explanation: 'Fires event up through the DOM tree.' },
          { line: 'e.detail.productId', explanation: 'Accesses custom payload data in the event listener.' }
        ],
        miniPractice: {
          task: 'What option must be set to true on a CustomEvent so parent containers can intercept it as it bubbles up?',
          hint: 'It is a standard DOM event propagation option.',
          solution: 'bubbles: true must be set in the CustomEvent options.'
        }
      }
    ],
    practiceExercise: {
      title: 'Intersection Observer Image Gallery Checkpoint',
      instructions: 'Implement an image lazy loader using IntersectionObserver that replaces data-src with src when images come into view.',
      starterCode: 'const lazyImages = document.querySelectorAll(\'.lazy\');\n// Implement IntersectionObserver',
      solution: 'const observer = new IntersectionObserver((entries, obs) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src;\n      obs.unobserve(img);\n    }\n  });\n});\ndocument.querySelectorAll(\'.lazy\').forEach(img => observer.observe(img));'
    }
  },
  {
    id: 'web-int-05',
    title: '5. Asynchronous JavaScript Deep-Dive: Event Loop & Concurrency',
    summary: 'Master the JavaScript runtime concurrency model: Call Stack, Web APIs, Microtask vs Macrotask queues, Promise combinators, and Web Workers.',
    readingTime: '26 min',
    overview: 'JavaScript is single-threaded, yet handles high-throughput asynchronous operations without blocking user interactions. Understanding how the Event Loop coordinates between the call stack, microtask queue, macrotask queue, and background Web APIs is critical for avoiding UI freezes and race conditions.',
    learningObjectives: [
      'Visualize the exact execution order of synchronous code, microtasks, and macrotasks',
      'Master Promise combinators (Promise.all, Promise.allSettled, Promise.race, Promise.any)',
      'Cancel network and asynchronous operations using AbortController and AbortSignal',
      'Offload heavy computations to background threads using Web Workers'
    ],
    syntaxGuide: '// Event Loop Microtask vs Macrotask Execution Order\nconsole.log(\'1. Synchronous Start\');\n\nsetTimeout(() => console.log(\'4. Macrotask (setTimeout)\'), 0);\n\nPromise.resolve().then(() => console.log(\'3. Microtask (Promise)\'));\n\nconsole.log(\'2. Synchronous End\');\n// Output Order: 1 -> 2 -> 3 -> 4',
    proTips: [
      'Microtasks (Promise callbacks, queueMicrotask) ALWAYS drain completely before the engine renders frames or picks the next macrotask (setTimeout).',
      'Use Promise.allSettled() instead of Promise.all() when making independent parallel requests so one failed network call doesn\'t discard the other successful results.'
    ],
    sections: [
      {
        title: '1. Event Loop Mechanics: Call Stack, Microtasks & Macrotasks',
        content: 'The JavaScript runtime consists of a single Call Stack (executing synchronous frames), Web APIs (handling timers, DOM events, fetch requests off-thread), a Microtask Queue (Promises, queueMicrotask, MutationObserver), and a Macrotask Queue (setTimeout, setInterval, postMessage). When the call stack becomes empty, the Event Loop drains all pending microtasks before executing the single next macrotask.',
        codeSnippet: '// Concurrency Demonstration\nfunction executeAsyncFlow() {\n  console.log(\'A: Sync Code\');\n\n  setTimeout(() => {\n    console.log(\'D: Timer Macrotask\');\n  }, 0);\n\n  queueMicrotask(() => {\n    console.log(\'C: Explicit Microtask\');\n  });\n\n  Promise.resolve().then(() => {\n    console.log(\'B: Promise Microtask\');\n  });\n}\n// Console Output: A -> C -> B -> D',
        lineByLine: [
          { line: 'console.log(\'A: Sync Code\');', explanation: 'Executes immediately on the call stack.' },
          { line: 'setTimeout(..., 0)', explanation: 'Pushes callback to the Macrotask queue after timer resolves in Web APIs.' },
          { line: 'queueMicrotask(...)', explanation: 'Queues high-priority microtask to execute immediately after current synchronous code.' }
        ],
        miniPractice: {
          task: 'What happens if a microtask recursively enqueues another microtask continuously?',
          hint: 'The microtask queue will never empty.',
          solution: 'It causes Microtask Starvation: the call stack never frees up for macrotasks or UI rendering, completely freezing the browser tab.'
        }
      },
      {
        title: '2. Promise Combinator Strategies',
        content: 'When coordinating multiple asynchronous operations in parallel, JavaScript provides 4 specialized combinators: Promise.all() (fails fast if any promise rejects), Promise.allSettled() (waits for all to settle, returning status objects for every request), Promise.race() (resolves or rejects as soon as the first promise settles), and Promise.any() (resolves with the first fulfilled value, ignoring rejections until all fail).',
        codeSnippet: '// Resilient Multi-Source Dashboard Aggregator\nasync function loadDashboardData() {\n  const results = await Promise.allSettled([\n    fetch(\'/api/metrics\').then(r => r.json()),\n    fetch(\'/api/notifications\').then(r => r.json()),\n    fetch(\'/api/feed\').then(r => r.json())\n  ]);\n\n  const metrics = results[0].status === \'fulfilled\' ? results[0].value : null;\n  const notifications = results[1].status === \'fulfilled\' ? results[1].value : [];\n  const feed = results[2].status === \'fulfilled\' ? results[2].value : [];\n\n  return { metrics, notifications, feed };\n}',
        lineByLine: [
          { line: 'Promise.allSettled([...])', explanation: 'Executes all 3 fetch requests in parallel without failing if one endpoint is down.' },
          { line: 'results[0].status === \'fulfilled\'', explanation: 'Inspects outcome status safely before accessing value.' }
        ],
        miniPractice: {
          task: 'How would you use Promise.race() to enforce a 5-second timeout on a fetch request?',
          hint: 'Race the fetch promise against a Promise that rejects after a 5000ms setTimeout.',
          solution: 'const timeout = new Promise((_, rej) => setTimeout(() => rej(new Error("Timeout")), 5000)); const result = await Promise.race([fetch(url), timeout]);'
        }
      },
      {
        title: '3. Web Workers for Multi-Threaded Processing',
        content: 'When an application requires heavy CPU computation (such as client-side image compression, large CSV parsing, or cryptography), running it on the main thread freezes UI interactions and drops frame rates. Web Workers execute scripts on background OS threads, communicating with the main thread via message events.',
        codeSnippet: '// Main Thread Script (app.js)\nconst worker = new Worker(\'/workers/parser.js\');\n\n// Send heavy raw data to worker\nworker.postMessage({ rawCsvData: largeCsvString });\n\n// Receive parsed JSON output from worker thread\nworker.onmessage = (event) => {\n  console.log(\'Parsed dataset records:\', event.data.records.length);\n};\n\n// Background Worker Script (parser.js)\n// self.onmessage = (e) => { const records = parseHeavy(e.data.rawCsvData); self.postMessage({ records }); };',
        lineByLine: [
          { line: 'new Worker(\'/workers/parser.js\')', explanation: 'Spawns dedicated background thread running parser script.' },
          { line: 'worker.postMessage(...)', explanation: 'Transfers data payload to background worker thread.' },
          { line: 'worker.onmessage = ...', explanation: 'Receives processed results back on the main thread without any UI lag.' }
        ],
        miniPractice: {
          task: 'Can code running inside a Web Worker access document.getElementById or window?',
          hint: 'Web Workers do not have direct access to the DOM.',
          solution: 'No. Web Workers run in a separate global scope (self) and do not have access to window or the DOM for thread safety.'
        }
      }
    ],
    practiceExercise: {
      title: 'Parallel API Aggregator Checkpoint',
      instructions: 'Write an asynchronous function fetchAllUserData(userId) that queries user profile, orders, and settings in parallel using Promise.allSettled and returns a consolidated object.',
      starterCode: 'async function fetchAllUserData(userId) {\n  // Implement parallel queries\n}',
      solution: 'async function fetchAllUserData(userId) {\n  const [profile, orders, settings] = await Promise.allSettled([\n    fetch(`/api/users/${userId}`).then(r => r.json()),\n    fetch(`/api/users/${userId}/orders`).then(r => r.json()),\n    fetch(`/api/users/${userId}/settings`).then(r => r.json())\n  ]);\n  return {\n    profile: profile.status === "fulfilled" ? profile.value : null,\n    orders: orders.status === "fulfilled" ? orders.value : [],\n    settings: settings.status === "fulfilled" ? settings.value : {}\n  };\n}'
    }
  },
  {
    id: 'web-int-06',
    title: '6. RESTful API Architecture, HTTP Protocols & CORS Engineering',
    summary: 'Master REST API design, HTTP/1.1 vs HTTP/2 vs HTTP/3, headers, status codes, and Cross-Origin Resource Sharing (CORS) security.',
    readingTime: '25 min',
    overview: 'Representational State Transfer (REST) is the standard architectural style for web APIs. Understanding HTTP methods, status code semantics, request headers, caching protocols, and CORS preflight negotiations allows frontend engineers to interface seamlessly with backend services.',
    learningObjectives: [
      'Design and consume RESTful endpoints following standard URI and resource naming conventions',
      'Select and interpret accurate HTTP status codes (2xx Success, 3xx Redirection, 4xx Client Error, 5xx Server Error)',
      'Understand HTTP protocol evolutions (HTTP/1.1 pipelining vs HTTP/2 multiplexing vs HTTP/3 QUIC)',
      'Diagnose and resolve Cross-Origin Resource Sharing (CORS) headers and preflight errors'
    ],
    syntaxGuide: '// RESTful API Endpoints Architecture\n// GET    /api/v1/courses          -> List all courses\n// POST   /api/v1/courses          -> Create new course\n// GET    /api/v1/courses/:id      -> Retrieve specific course\n// PUT    /api/v1/courses/:id      -> Replace entire course\n// PATCH  /api/v1/courses/:id      -> Update specific fields\n// DELETE /api/v1/courses/:id      -> Remove course',
    proTips: [
      'Never use verbs in REST resource URLs (e.g. use POST /api/courses instead of /api/createCourse). Use HTTP verbs to define actions and nouns to define resources.',
      'CORS errors are browser security enforcement mechanisms; you cannot fix a CORS server block solely by writing client-side JavaScript headers.'
    ],
    sections: [
      {
        title: '1. REST Architectural Principles & URL Conventions',
        content: 'RESTful architecture treats data as resources identified by uniform resource identifiers (URIs). Endpoints use plural nouns (e.g. /api/courses) and leverage standard HTTP methods for CRUD operations: GET (Read), POST (Create), PUT (Replace), PATCH (Partial Update), and DELETE (Remove). Responses use structured JSON with standard HTTP status codes.',
        codeSnippet: '// Consuming RESTful Endpoints with Fetch API\nclass CourseAPI {\n  static async getCourse(courseId) {\n    const res = await fetch(`/api/v1/courses/${courseId}`);\n    if (!res.ok) throw new Error(`Fetch error: ${res.status}`);\n    return res.json();\n  }\n\n  static async updateProgress(courseId, completedTaskId) {\n    const res = await fetch(`/api/v1/courses/${courseId}/progress`, {\n      method: \'PATCH\',\n      headers: { \'Content-Type\': \'application/json\' },\n      body: JSON.stringify({ completedTaskId })\n    });\n    return res.json();\n  }\n}',
        lineByLine: [
          { line: 'method: \'PATCH\'', explanation: 'Applies partial update to the progress sub-resource without replacing the course object.' },
          { line: 'headers: { \'Content-Type\': \'application/json\' }', explanation: 'Specifies JSON MIME type for the outgoing request payload.' }
        ],
        miniPractice: {
          task: 'What HTTP status code should a server return when a resource is successfully created via POST?',
          hint: 'It is in the 200 series.',
          solution: 'HTTP 201 Created (often accompanied by a Location header containing the URI of the new resource).'
        }
      },
      {
        title: '2. HTTP Protocol Evolution: HTTP/1.1 vs HTTP/2 vs HTTP/3',
        content: 'HTTP/1.1 suffered from head-of-line blocking because browsers could only send one request per TCP connection at a time (limiting browsers to 6 concurrent connections per domain). HTTP/2 introduced binary framing, header compression (HPACK), and multiplexing—allowing hundreds of concurrent requests over a single TCP connection. HTTP/3 replaces TCP with QUIC (built over UDP), eliminating transport-level head-of-line blocking caused by packet loss.',
        codeSnippet: '<!-- HTTP/2 Multiplexing in Practice -->\n<!-- Browsers can now download 50 small module chunks simultaneously over 1 connection -->\n<link rel="stylesheet" href="/styles/base.css">\n<link rel="stylesheet" href="/styles/header.css">\n<link rel="stylesheet" href="/styles/card.css">\n<!-- In HTTP/1.1, concatenating into 1 file was mandatory; in HTTP/2, granular caching of separate files is optimal -->',
        lineByLine: [
          { line: 'HTTP/2 Multiplexing', explanation: 'Transfers multiple independent bidirectional streams over a single TCP socket.' },
          { line: 'Granular Caching', explanation: 'Updating card.css only invalidates that specific file rather than an entire monolithic bundle.' }
        ],
        miniPractice: {
          task: 'Why did developers concatenate all JavaScript and CSS files into single files in the HTTP/1.1 era?',
          hint: 'Consider connection limits per domain in HTTP/1.1.',
          solution: 'HTTP/1.1 had a 6-connection limit per domain; concatenation minimized the total number of round-trip HTTP requests.'
        }
      },
      {
        title: '3. Cross-Origin Resource Sharing (CORS) Security Mechanics',
        content: 'Browsers enforce the Same-Origin Policy (SOP), preventing scripts on one domain (frontend.com) from reading responses from a different domain (api.backend.com) unless the server explicitly sends Cross-Origin Resource Sharing (CORS) permission headers. For non-simple requests, the browser issues an automated OPTIONS preflight request checking Access-Control-Allow-Origin, Access-Control-Allow-Methods, and Access-Control-Allow-Headers.',
        codeSnippet: '// Example Express Backend CORS Header Configuration\n// app.use((req, res, next) => {\n//   res.header(\'Access-Control-Allow-Origin\', \'https://app.skillora.ai\');\n//   res.header(\'Access-Control-Allow-Methods\', \'GET, POST, PATCH, DELETE, OPTIONS\');\n//   res.header(\'Access-Control-Allow-Headers\', \'Content-Type, Authorization\');\n//   if (req.method === \'OPTIONS\') return res.sendStatus(200);\n//   next();\n// });',
        lineByLine: [
          { line: 'Access-Control-Allow-Origin', explanation: 'Specifies which client domains are permitted to read cross-origin responses.' },
          { line: 'if (req.method === \'OPTIONS\')', explanation: 'Responds successfully to browser preflight permission checks.' }
        ],
        miniPractice: {
          task: 'Why does setting Access-Control-Allow-Origin: * fail if a request includes credentials (cookies / Authorization header)?',
          hint: 'W3C CORS specification forbids wildcard origins with credentials.',
          solution: 'Security regulations forbid wildcard (*) origins when credentials are exchanged. The server must echo the specific explicit requesting origin.'
        }
      }
    ],
    practiceExercise: {
      title: 'REST Client Class Checkpoint',
      instructions: 'Build a lightweight ApiClient class with get, post, and delete methods that automatically configure JSON headers and error handling.',
      starterCode: 'class ApiClient {\n  // Implement client methods\n}',
      solution: 'class ApiClient {\n  constructor(baseUrl) { this.baseUrl = baseUrl; }\n  async request(path, options = {}) {\n    const res = await fetch(`${this.baseUrl}${path}`, {\n      headers: { "Content-Type": "application/json", ...options.headers },\n      ...options\n    });\n    if (!res.ok) throw new Error(`API Error: ${res.status}`);\n    return res.json();\n  }\n  get(path) { return this.request(path, { method: "GET" }); }\n  post(path, body) { return this.request(path, { method: "POST", body: JSON.stringify(body) }); }\n}'
    }
  },
  {
    id: 'web-int-07',
    title: '7. JSON Data Handling, Schema Validation & State Caching',
    summary: 'Master robust JSON parsing, runtime schema validation with Zod, optimistic UI updates, and normalized in-memory data caching.',
    readingTime: '24 min',
    overview: 'Frontend applications deal with unpredictable external data. Guaranteeing type-safety across the network boundary requires robust JSON deserialization, runtime schema parsing (using Zod or Valibot), optimistic UI mutations, and normalized caching architectures.',
    learningObjectives: [
      'Safely parse and serialize JSON payloads without throwing uncaught exceptions',
      'Validate external API response structures at runtime using Zod schemas',
      'Implement optimistic UI updates with automatic rollback on server error',
      'Structure normalized in-memory entity stores to eliminate stale duplicate data'
    ],
    syntaxGuide: '// Runtime Validation with Zod Schema (Conceptual)\nimport { z } from \'zod\';\n\nconst UserSchema = z.object({\n  id: z.string().uuid(),\n  name: z.string().min(2),\n  email: z.string().email(),\n  roles: z.array(z.string()).default([\'student\'])\n});\n\n// Safe parse validates data at runtime\nconst result = UserSchema.safeParse(apiResponseData);\nif (result.success) {\n  console.log(\'Validated User:\', result.data.name);\n} else {\n  console.error(\'Schema Validation Failed:\', result.error.format());\n}',
    proTips: [
      'Always use safe JSON parsing helpers: JSON.parse() throws syntax errors on corrupted strings and can crash your application if unhandled.',
      'Normalize complex relational data in state by storing entities by ID in a lookup map ({ byId: {}, allIds: [] }) to avoid data duplication.'
    ],
    sections: [
      {
        title: '1. Safe JSON Deserialization & Edge Cases',
        content: 'Uncaught JSON.parse() calls are a leading cause of runtime crashes in production web apps. Malformed strings, unexpected empty responses, or non-JSON HTML error pages (like 502 Bad Gateway) throw SyntaxErrors. Wrapping parsing in resilient helper utilities guarantees application stability.',
        codeSnippet: '// Safe JSON Parser Utility\nfunction safeJsonParse(jsonString, fallbackValue = null) {\n  if (typeof jsonString !== \'string\') return fallbackValue;\n  try {\n    return JSON.parse(jsonString);\n  } catch (err) {\n    console.warn(\'JSON Parse Error:\', err.message);\n    return fallbackValue;\n  }\n}\n\nconst valid = safeJsonParse(\'{"status":"ok"}\', {}); // { status: "ok" }\nconst invalid = safeJsonParse(\'<html>Error</html>\', {}); // {} (No crash)',
        lineByLine: [
          { line: 'if (typeof jsonString !== \'string\')', explanation: 'Guards against non-string input values.' },
          { line: 'try { return JSON.parse(...) } catch (err)', explanation: 'Catches syntax errors and returns the safe fallback value.' }
        ],
        miniPractice: {
          task: 'What does JSON.stringify() do when passed an object containing a function or undefined property?',
          hint: 'JSON does not support functions or undefined.',
          solution: 'It omits those keys from the output JSON string completely (or converts them to null if inside an array).'
        }
      },
      {
        title: '2. Runtime Schema Validation with Zod',
        content: 'TypeScript types exist only at compile-time and provide zero runtime protection against unexpected API responses. Schema validation libraries like Zod define schemas that validate data at runtime and automatically infer TypeScript types, creating an end-to-end type-safe boundary.',
        codeSnippet: '// Zod Schema Definition and Inferred TypeScript Type\n// import { z } from \'zod\';\n\n// const CourseSchema = z.object({\n//   id: z.string(),\n//   title: z.string().min(3),\n//   modules: z.number().int().positive(),\n//   isPublished: z.boolean()\n// });\n// type Course = z.infer<typeof CourseSchema>;\n\nasync function fetchAndValidateCourse(courseId) {\n  const res = await fetch(`/api/courses/${courseId}`);\n  const rawData = await res.json();\n  \n  // Runtime validation check\n  // const parsed = CourseSchema.safeParse(rawData);\n  // if (!parsed.success) throw new Error(\'Invalid Course Data Shape\');\n  return rawData;\n}',
        lineByLine: [
          { line: 'z.object({ ... })', explanation: 'Defines runtime type constraints for each property.' },
          { line: 'CourseSchema.safeParse(...)', explanation: 'Validates input object and returns success boolean with strongly typed data or error.' }
        ],
        miniPractice: {
          task: 'Explain why schema validation is especially critical when consuming third-party APIs or user-generated JSON files.',
          hint: 'Third-party APIs can change their response schemas without warning.',
          solution: 'External APIs may change formats or omit fields without notice; validation prevents silent application crashes down the component tree.'
        }
      },
      {
        title: '3. Optimistic UI Updates & State Normalization',
        content: 'Optimistic UI updates improve perceived responsiveness by rendering the anticipated outcome of a user action immediately in the interface before the backend network request completes. If the server request fails, the application rolls state back to the previous snapshot and alerts the user.',
        codeSnippet: '// Optimistic Like Button Pattern\nasync function handleLikePost(postId, currentLikes, updateUI) {\n  // 1. Snapshot previous state\n  const previousState = currentLikes;\n  \n  // 2. Optimistically update UI immediately\n  updateUI(previousState + 1);\n  \n  try {\n    const res = await fetch(`/api/posts/${postId}/like`, { method: \'POST\' });\n    if (!res.ok) throw new Error(\'Like failed\');\n  } catch (err) {\n    // 3. Rollback on network failure\n    updateUI(previousState);\n    alert(\'Could not save like. Please try again.\');\n  }\n}',
        lineByLine: [
          { line: 'updateUI(previousState + 1);', explanation: 'Instantly reflects incremented like count in the UI.' },
          { line: 'updateUI(previousState);', explanation: 'Rolls UI back to original count if network request rejects.' }
        ],
        miniPractice: {
          task: 'What is state normalization in frontend data stores?',
          hint: 'Think about storing relational items like a database table with an ID lookup map.',
          solution: 'Storing entities in flat objects keyed by ID ({ [id]: entity }) rather than nested arrays, preventing duplicate out-of-sync copies.'
        }
      }
    ],
    practiceExercise: {
      title: 'Optimistic State Mutation Checkpoint',
      instructions: 'Implement an optimistic task toggle function that updates a task\'s completed status in UI immediately and rolls back if the API PATCH call fails.',
      starterCode: 'async function toggleTaskOptimistic(task, setTaskState) {\n  // Implement optimistic toggle\n}',
      solution: 'async function toggleTaskOptimistic(task, setTaskState) {\n  const original = task.completed;\n  setTaskState(prev => ({ ...prev, completed: !original }));\n  try {\n    const res = await fetch(`/api/tasks/${task.id}`, {\n      method: "PATCH",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify({ completed: !original })\n    });\n    if (!res.ok) throw new Error("Update failed");\n  } catch (err) {\n    setTaskState(prev => ({ ...prev, completed: original }));\n  }\n}'
    }
  },
  {
    id: 'web-int-08',
    title: '8. Frontend Project Architecture: Design Patterns & Component Systems',
    summary: 'Master Atomic Design, Component-Driven Development, Container/Presentational patterns, state architectures, and maintainable project structures.',
    readingTime: '24 min',
    overview: 'Scaling frontend codebases requires clear separation of concerns, disciplined directory organization, and established design patterns. Structuring applications with Atomic Design principles, decoupled data providers, and reusable design systems enables teams to build maintainable applications.',
    learningObjectives: [
      'Structure scalable frontend project directory layouts following feature-driven architecture',
      'Implement Atomic Design methodology (Atoms, Molecules, Organisms, Templates, Pages)',
      'Decouple business logic from UI using the Container / Presentational component pattern',
      'Build reusable, themeable component design systems with consistent prop contracts'
    ],
    syntaxGuide: '// Feature-Driven Frontend Project Structure\n// src/\n// ├── assets/          # Static media and fonts\n// ├── components/      # Global shared design system (Button, Card, Modal)\n// ├── features/        # Domain feature modules (auth, roadmap, checkout)\n// │   └── roadmap/\n// │       ├── components/\n// │       ├── services/\n// │       └── types/\n// ├── hooks/           # Global custom hooks\n// ├── lib/             # Third-party wrappers (supabase, axios)\n// └── styles/          # Global styles & design tokens',
    proTips: [
      'Group files by feature domain rather than purely by technical file type (e.g. keep auth components, auth services, and auth types together).',
      'Keep presentational components "dumb" (pure UI rendering with props) and encapsulate API fetching and state logic in containers or custom hooks.'
    ],
    sections: [
      {
        title: '1. Feature-Driven Architecture vs Layered Architecture',
        content: 'In small apps, grouping by technical layer (all components in /components, all reducers in /reducers) works adequately. However, in enterprise codebases, Feature-Driven Architecture organizes code by business domain (e.g. /features/billing, /features/analytics). Each feature folder contains its own components, custom hooks, API services, and types, making domain features self-contained and easy to test or refactor.',
        codeSnippet: '// Example Feature Module Structure (features/courses/)\n// features/courses/\n// ├── components/\n// │   ├── CourseCard.tsx        # Presentational card component\n// │   ├── CourseTimeline.tsx    # Timeline roadmap visualization\n// │   └── LevelSwitcher.tsx     # Level switcher tabs\n// ├── services/\n// │   └── course.service.ts     # Business logic & API methods\n// ├── hooks/\n// │   └── useCourseProgress.ts  # Stateful custom hook\n// ├── types/\n// │   └── course.types.ts       # Domain TypeScript interfaces\n// └── index.ts                  # Public feature barrel export',
        lineByLine: [
          { line: 'features/courses/', explanation: 'Encapsulates all domain code for courses in one unified module.' },
          { line: 'course.service.ts', explanation: 'Isolates API communication and data transformations from UI rendering.' }
        ],
        miniPractice: {
          task: 'What is the primary benefit of feature-driven architecture when a developer is tasked with deleting or refactoring a single feature?',
          hint: 'All related code is in one directory.',
          solution: 'All components, services, and types are localized in one feature directory, so deleting or modifying the feature requires no hunting through global folders.'
        }
      },
      {
        title: '2. Container vs Presentational Component Pattern',
        content: 'The Container / Presentational pattern splits components into two responsibilities: Presentational Components (focus purely on how things look, receiving data and callbacks strictly via props, with zero knowledge of APIs or global stores) and Container Components (focus on how things work, managing state, data fetching, and passing data down to presentational components).',
        codeSnippet: '// 1. Presentational Component (Pure UI)\nexport function UserProfileCard({ name, role, onLogout }) {\n  return (\n    <div className="profile-card">\n      <h3>{name}</h3>\n      <p>{role}</p>\n      <button onClick={onLogout}>Sign Out</button>\n    </div>\n  );\n}\n\n// 2. Container Component (Data & Logic)\nexport function UserProfileContainer() {\n  const { user, logout } = useAuth(); // Custom hook handling auth\n  if (!user) return <p>Loading...</p>;\n  return <UserProfileCard name={user.name} role={user.role} onLogout={logout} />;\n}',
        lineByLine: [
          { line: 'export function UserProfileCard({ name, role, onLogout })', explanation: 'Pure presentational component easy to unit-test and render in Storybook.' },
          { line: 'export function UserProfileContainer()', explanation: 'Container managing business logic and providing props to the presentational UI.' }
        ],
        miniPractice: {
          task: 'Why are presentational components easier to test in automated UI testing environments like Storybook or Jest?',
          hint: 'They rely only on props without requiring API or backend mocks.',
          solution: 'They are pure functions of their props, meaning you can render them with mock props without needing complex network or store mocks.'
        }
      },
      {
        title: '3. Design System Token Architecture',
        content: 'Design systems bridge the gap between UI designers and software engineers. Design Tokens are named variables that store visual design decisions (colors, typography, elevation shadows, border radii, spacing units). When built on CSS Custom Properties or Tailwind theme extensions, design tokens enable instant rebranding and automated dark mode adaptation.',
        codeSnippet: '// design-tokens.css\n:root {\n  /* Spacing Scale (4px baseline) */\n  --space-1: 0.25rem;  /* 4px */\n  --space-2: 0.5rem;   /* 8px */\n  --space-4: 1rem;     /* 16px */\n  --space-6: 1.5rem;   /* 24px */\n  \n  /* Elevation Shadows */\n  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);\n  \n  /* Radii */\n  --radius-md: 0.5rem;\n}',
        lineByLine: [
          { line: '--space-4: 1rem;', explanation: 'Standard 16px base spacing token ensuring consistent margins across all components.' },
          { line: '--shadow-md:', explanation: 'Standard elevation token for cards and dropdown menus.' }
        ],
        miniPractice: {
          task: 'How do design tokens prevent visual inconsistencies in large engineering teams?',
          hint: 'Developers use tokens instead of arbitrary hardcoded pixel values.',
          solution: 'Tokens eliminate arbitrary magic numbers (like padding: 17px or #2f3a4b) by restricting options to an approved, cohesive scale.'
        }
      }
    ],
    practiceExercise: {
      title: 'Container/Presentational Component Split Checkpoint',
      instructions: 'Write a presentational CourseBadge component and a container CourseBadgeContainer that fetches course status and passes it as props.',
      starterCode: '// Implement presentational and container components',
      solution: 'export function CourseBadge({ title, level, progress }) {\n  return <div className="badge"><h4>{title}</h4><span>{level} ({progress}%)</span></div>;\n}\nexport function CourseBadgeContainer({ courseId }) {\n  const [data, setData] = React.useState(null);\n  React.useEffect(() => { fetch(`/api/courses/${courseId}`).then(r => r.json()).then(setData); }, [courseId]);\n  if (!data) return null;\n  return <CourseBadge title={data.title} level={data.level} progress={data.progress} />;\n}'
    }
  },
  {
    id: 'web-int-09',
    title: '9. React Fundamentals: Virtual DOM, JSX & Reconciliation Engine',
    summary: 'Master React\'s declarative paradigm: Virtual DOM diffing, JSX transpilation, Fiber reconciliation architecture, and pure component rendering.',
    readingTime: '25 min',
    overview: 'React revolutionized web development by introducing a declarative, component-driven model. Understanding how JSX is compiled, how React Fiber manages concurrent rendering priorities, and how the reconciliation engine performs O(n) diffing is fundamental for building performant React applications.',
    learningObjectives: [
      'Understand the declarative UI paradigm compared to imperative DOM manipulation',
      'Explain how JSX compiles to React.createElement() JavaScript function calls',
      'Master the Reconciliation algorithm, key prop requirements, and heuristic diffing',
      'Write pure, side-effect-free React components that adhere to strict rendering rules'
    ],
    syntaxGuide: '// JSX Transpilation & Pure Component Rendering\n// JSX Syntax:\nconst element = <h1 className="title">Hello Skillora</h1>;\n\n// Compiled JavaScript output (Babel / SWC / esbuild):\nconst compiled = React.createElement(\'h1\', { className: \'title\' }, \'Hello Skillora\');\n\n// Functional Component\nexport function WelcomeBanner({ username }) {\n  return (\n    <header className="banner">\n      <h2>Welcome back, {username}!</h2>\n    </header>\n  );\n}',
    proTips: [
      'React components must be pure functions regarding rendering: given the same props and state, they must always return the exact same JSX without mutating external variables.',
      'Never declare components inside other component render functions; nested definitions force React to unmount and recreate the entire DOM subtree on every render.'
    ],
    sections: [
      {
        title: '1. Declarative UI vs Imperative DOM Manipulation',
        content: 'In imperative DOM programming (vanilla JS), developers must write explicit step-by-step instructions to create, update, and remove DOM nodes. In React\'s declarative model, developers simply describe what the UI should look like for a given state. React handles the complex underlying DOM mutations automatically, eliminating synchronization bugs between UI and state.',
        codeSnippet: '// Imperative (Vanilla JS) vs Declarative (React)\n// Imperative:\nconst btn = document.createElement(\'button\');\nbtn.textContent = count > 0 ? `Count: ${count}` : \'Click Me\';\nif (count > 5) btn.classList.add(\'highlight\');\n\n// Declarative React:\nfunction CounterButton({ count, onClick }) {\n  return (\n    <button \n      className={count > 5 ? \'btn-highlight\' : \'btn-standard\'}\n      onClick={onClick}\n    >\n      {count > 0 ? `Count: ${count}` : \'Click Me\'}\n    </button>\n  );\n}',
        lineByLine: [
          { line: 'function CounterButton({ count, onClick })', explanation: 'Declares component accepting state and event callback via props.' },
          { line: 'className={count > 5 ? ... : ...}', explanation: 'Declaratively binds CSS class based on active count value.' }
        ],
        miniPractice: {
          task: 'Why does declarative UI programming reduce software bugs in complex applications?',
          hint: 'You no longer manually update elements across different user interaction paths.',
          solution: 'You define the UI as a direct mathematical function of state: UI = f(state). You only manage state changes, and the UI is guaranteed to remain in sync.'
        }
      },
      {
        title: '2. JSX Compilation & Virtual DOM Mechanics',
        content: 'JSX is an XML-like syntax extension for JavaScript. Build tools (Babel, SWC, esbuild) compile JSX tags into React.createElement() function calls that instantiate lightweight JavaScript objects called React Elements (the Virtual DOM). React Elements are cheap to create, inspect, and discard in memory.',
        codeSnippet: '// JSX Syntax and its underlying React Element Object\nconst Card = ({ title, body }) => (\n  <div className="card">\n    <h3>{title}</h3>\n    <p>{body}</p>\n  </div>\n);\n\n// Underlying React Element Representation in Memory:\n// {\n//   type: \'div\',\n//   props: {\n//     className: \'card\',\n//     children: [\n//       { type: \'h3\', props: { children: title } },\n//       { type: \'p\', props: { children: body } }\n//     ]\n//   }\n// }',
        lineByLine: [
          { line: 'type: \'div\'', explanation: 'Specifies HTML tag or component function to render.' },
          { line: 'props: { className: \'card\', children: [...] }', explanation: 'In-memory virtual representation of attributes and child elements.' }
        ],
        miniPractice: {
          task: 'Can a browser natively understand and execute raw JSX without a compilation/transpilation step?',
          hint: 'Is JSX standard ECMAScript JavaScript?',
          solution: 'No. Browsers only execute standard JavaScript. JSX must be compiled to React.createElement or the new JSX runtime by a compiler like Vite/Babel.'
        }
      },
      {
        title: '3. The Reconciliation Diffing Algorithm & Fiber Architecture',
        content: 'When state changes occur, React compares the new Virtual DOM tree against the previous one using a heuristic O(n) diffing algorithm based on two assumptions: two elements of different types produce different trees, and elements with stable key props identify the same entity across renders. React Fiber enables cooperative multitasking, breaking rendering into units of work that can be paused or prioritized.',
        codeSnippet: '// Key Prop in Reconciliation\nfunction StudentList({ students }) {\n  return (\n    <ul>\n      {students.map(student => (\n        // Stable unique ID key guarantees correct DOM reuse\n        <li key={student.id}>\n          <span>{student.name}</span>\n          <input type="checkbox" defaultChecked={student.enrolled} />\n        </li>\n      ))}\n    </ul>\n  );\n}',
        lineByLine: [
          { line: '<li key={student.id}>', explanation: 'Provides stable, unique identity allowing React to match DOM nodes during list reordering.' }
        ],
        miniPractice: {
          task: 'What happens during reconciliation if the root element type changes from <div> to <section>?',
          hint: 'Different types produce completely different trees.',
          solution: 'React destroys the entire <div> subtree (unmounting all children and resetting state) and mounts a brand new <section> tree from scratch.'
        }
      }
    ],
    practiceExercise: {
      title: 'Declarative Component Architecture Checkpoint',
      instructions: 'Write a NotificationList component that accepts an array of alerts ({ id, type, message }) and renders them with semantic classes and unique keys.',
      starterCode: 'export function NotificationList({ alerts }) {\n  // Implement declarative list\n}',
      solution: 'export function NotificationList({ alerts }) {\n  return (\n    <div className="notification-container">\n      {alerts.map(a => (\n        <div key={a.id} className={`alert alert--${a.type}`}>\n          <p>{a.message}</p>\n        </div>\n      ))}\n    </div>\n  );\n}'
    }
  },
  {
    id: 'web-int-10',
    title: '10. React Components, Props & State Management',
    summary: 'Master functional component architecture, TypeScript prop contracts, useState hook mechanics, controlled inputs, and lifting state up.',
    readingTime: '25 min',
    overview: 'State is the heart of interactive React applications. Mastering how React manages component state via useState, how props establish strict contracts between parent and child components, and how to lift state to synchronize sibling components is essential for building real-world software.',
    learningObjectives: [
      'Define strongly-typed React functional components with TypeScript interface props',
      'Manage local component state using the useState hook and functional state updater patterns',
      'Implement controlled form inputs with two-way data binding and change handlers',
      'Apply the "Lifting State Up" pattern to share and synchronize state between sibling components'
    ],
    syntaxGuide: '// Functional Component with State and TypeScript Props\ninterface CounterProps {\n  initialCount?: number;\n  step?: number;\n}\n\nexport const Counter: React.FC<CounterProps> = ({ initialCount = 0, step = 1 }) => {\n  const [count, setCount] = React.useState<number>(initialCount);\n\n  const handleIncrement = () => {\n    // Functional state update prevents race condition bugs\n    setCount(prev => prev + step);\n  };\n\n  return (\n    <div className="counter-box">\n      <p>Current: {count}</p>\n      <button onClick={handleIncrement}>+{step}</button>\n    </div>\n  );\n};',
    proTips: [
      'Always use the functional state updater form (setCount(prev => prev + 1)) when the new state depends on the previous state to avoid stale closure bugs.',
      'Keep state as local as possible. Only lift state up to common ancestor components when multiple siblings truly need to read or mutate it.'
    ],
    sections: [
      {
        title: '1. Functional State Updates & Batching Mechanics',
        content: 'React batches multiple state updates occurring inside event handlers into a single render pass for optimal performance. Because state updates are asynchronous, reading state immediately after calling setState yields the old value. Passing an updater function (setCount(prev => prev + 1)) guarantees access to the latest pending state value.',
        codeSnippet: 'function ScoreTracker() {\n  const [score, setScore] = React.useState(0);\n\n  const handleTriplePoint = () => {\n    // Calling setScore(score + 1) 3 times would only add 1 point due to batching with stale scope\n    // Using functional updates correctly adds 3 points:\n    setScore(prev => prev + 1);\n    setScore(prev => prev + 1);\n    setScore(prev => prev + 1);\n  };\n\n  return <button onClick={handleTriplePoint}>Score: {score} (+3)</button>;\n}',
        lineByLine: [
          { line: 'setScore(prev => prev + 1);', explanation: 'Queues an updater receiving the exact pending state from the previous queue step.' },
          { line: 'Score: {score}', explanation: 'Renders the final batched result after all 3 updaters complete.' }
        ],
        miniPractice: {
          task: 'If you call setState(count + 1) twice in the same click handler with initial count = 0, what will count be on the next render?',
          hint: 'Both calls read the same count = 0 from the current render closure.',
          solution: 'Count will be 1 (not 2) because both calls evaluated 0 + 1 against the stale render scope.'
        }
      },
      {
        title: '2. Controlled Form Inputs & Multi-Field State',
        content: 'In React, controlled inputs derive their value directly from state and update state on every keystroke via onChange. Managing multi-field forms can be cleanly accomplished using a single state object and dynamic computed property names ([e.target.name]: e.target.value).',
        codeSnippet: 'function UserRegistrationForm() {\n  const [formData, setFormData] = React.useState({\n    username: \'\',\n    email: \'\',\n    role: \'developer\'\n  });\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({\n      ...prev,\n      [name]: value // Dynamic property computed key\n    }));\n  };\n\n  return (\n    <form>\n      <input name="username" value={formData.username} onChange={handleChange} />\n      <input name="email" value={formData.email} onChange={handleChange} />\n    </form>\n  );\n}',
        lineByLine: [
          { line: 'const { name, value } = e.target;', explanation: 'Destructures input name attribute and current typed value.' },
          { line: '[name]: value', explanation: 'Computes property key dynamically, updating only the modified field.' }
        ],
        miniPractice: {
          task: 'What happens if you provide a value prop to an <input> without providing an onChange handler?',
          hint: 'React will warn in the console that the input is read-only.',
          solution: 'The input becomes locked and read-only; user typing will have no effect because state is never updated.'
        }
      },
      {
        title: '3. Lifting State Up & Prop Drilling Solutions',
        content: 'When two sibling components require access to the same state (e.g. a SearchFilter input and a ProductList display), the state is "lifted up" to their common parent. The parent passes the state value down to ProductList and passes an updater callback down to SearchFilter.',
        codeSnippet: '// Parent Component Managing Shared State\nfunction ProductSearchParent() {\n  const [query, setQuery] = React.useState(\'\');\n\n  return (\n    <div className="search-app">\n      {/* Sibling 1: Mutates query */}\n      <SearchInput value={query} onQueryChange={setQuery} />\n      \n      {/* Sibling 2: Reads query */}\n      <SearchResults query={query} />\n    </div>\n  );\n}',
        lineByLine: [
          { line: 'const [query, setQuery] = React.useState(\'\');', explanation: 'Lifts search query state to the closest common parent.' },
          { line: '<SearchInput value={query} onQueryChange={setQuery} />', explanation: 'Passes updater function to child component.' },
          { line: '<SearchResults query={query} />', explanation: 'Passes active query value to sibling component for filtering.' }
        ],
        miniPractice: {
          task: 'What is "Prop Drilling" and what tool in React resolves it when state must be passed through 8 intermediate components?',
          hint: 'React Context API or global state stores.',
          solution: 'Prop Drilling is passing props through many intermediary components that don\'t need them. React Context API or state stores (Zustand/Redux) resolve this.'
        }
      }
    ],
    practiceExercise: {
      title: 'Shared State Filter System Checkpoint',
      instructions: 'Build a parent component TabManager that maintains the active tab state and renders TabButtons and TabContent siblings.',
      starterCode: 'export function TabManager() {\n  // Implement lifted tab state\n}',
      solution: 'export function TabManager() {\n  const [activeTab, setActiveTab] = React.useState("overview");\n  return (\n    <div>\n      <nav>\n        <button onClick={() => setActiveTab("overview")}>Overview</button>\n        <button onClick={() => setActiveTab("details")}>Details</button>\n      </nav>\n      <main>\n        {activeTab === "overview" && <p>Overview Content</p>}\n        {activeTab === "details" && <p>Details Content</p>}\n      </main>\n    </div>\n  );\n}'
    }
  },
  {
    id: 'web-int-11',
    title: '11. React Hooks Deep-Dive: useEffect, useMemo, useCallback & Custom Hooks',
    summary: 'Master React hooks lifecycle: useEffect dependencies, cleanup functions, useRef DOM references, useMemo caching, useCallback stability, and custom hooks architecture.',
    readingTime: '26 min',
    overview: 'React Hooks provide powerful primitives for managing side effects, caching expensive calculations, retaining mutable references across renders, and encapsulating reusable stateful business logic into custom hooks.',
    learningObjectives: [
      'Manage component side effects, network subscriptions, and DOM listeners with useEffect and cleanup functions',
      'Retain mutable values and DOM element references without triggering re-renders using useRef',
      'Optimize performance using useMemo for calculations and useCallback for function identity stability',
      'Author robust, production-grade custom hooks (e.g. useLocalStorage, useDebounce, useFetch)'
    ],
    syntaxGuide: '// Custom Hook Architecture (useDebounce)\nimport { useState, useEffect } from \'react\';\n\nexport function useDebounce<T>(value: T, delayMs: number = 300): T {\n  const [debouncedValue, setDebouncedValue] = useState<T>(value);\n\n  useEffect(() => {\n    const timer = setTimeout(() => setDebouncedValue(value), delayMs);\n    return () => clearTimeout(timer); // Cleanup cancels previous timer\n  }, [value, delayMs]);\n\n  return debouncedValue;\n}',
    proTips: [
      'Always list all variables used inside useEffect in its dependency array. If you need a function in deps, wrap it in useCallback.',
      'useRef is not just for DOM elements—use it to store any mutable value (like timers or previous state) that shouldn\'t trigger a re-render when modified.'
    ],
    sections: [
      {
        title: '1. useEffect Dependencies & Cleanup Lifecycles',
        content: 'The useEffect hook synchronizes a React component with external systems (APIs, timers, event listeners, WebSocket connections). The dependency array determines when the effect re-runs: empty array [] (runs once on mount), with dependencies [a, b] (runs when a or b changes), and omitted (runs after every single render). Returning a function from useEffect executes cleanup before the next effect run or on unmount.',
        codeSnippet: 'function WindowResizeTracker() {\n  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);\n\n  React.useEffect(() => {\n    const handleResize = () => setWindowWidth(window.innerWidth);\n    \n    window.addEventListener(\'resize\", handleResize);\n    \n    // Cleanup function removes listener when component unmounts\n    return () => {\n      window.removeEventListener(\'resize\', handleResize);\n    };\n  }, []); // Empty array = mount/unmount only\n\n  return <p>Current Viewport Width: {windowWidth}px</p>;\n}',
        lineByLine: [
          { line: 'window.addEventListener(\'resize\', handleResize);', explanation: 'Attaches global window resize event listener on component mount.' },
          { line: 'return () => window.removeEventListener(...)', explanation: 'Cleans up listener on component unmount, preventing memory leaks.' },
          { line: '}, []);', explanation: 'Ensures the effect runs only once when the component initially mounts.' }
        ],
        miniPractice: {
          task: 'What happens if you start a setInterval inside useEffect without returning a clearInterval cleanup function?',
          hint: 'The timer will continue running in memory even after the component is removed from screen.',
          solution: 'The interval timer will run indefinitely in memory, attempting to update unmounted component state and causing memory leaks.'
        }
      },
      {
        title: '2. useRef: DOM Access & Persistent Mutable References',
        content: 'useRef returns a mutable ref object whose .current property persists across the entire component lifecycle. Unlike useState, mutating ref.current does NOT trigger a re-render. It is commonly used for direct DOM node access (focusing inputs, measuring heights) and tracking mutable values like interval IDs or previous state snapshots.',
        codeSnippet: 'function AutoFocusSearchInput() {\n  const inputRef = React.useRef(null);\n  const renderCount = React.useRef(0);\n\n  React.useEffect(() => {\n    // Focus the input DOM node on initial load\n    inputRef.current?.focus();\n  }, []);\n\n  renderCount.current += 1; // Track renders without triggering new renders\n\n  return (\n    <div>\n      <input ref={inputRef} placeholder="Search documentation..." />\n      <p>Rendered {renderCount.current} times</p>\n    </div>\n  );\n}',
        lineByLine: [
          { line: 'const inputRef = React.useRef(null);', explanation: 'Creates reference container for DOM node.' },
          { line: 'inputRef.current?.focus();', explanation: 'Directly executes DOM method on the input node.' },
          { line: 'renderCount.current += 1;', explanation: 'Updates persistent counter without triggering a re-render cycle.' }
        ],
        miniPractice: {
          task: 'Why should you not write to ref.current during the main rendering phase of a component?',
          hint: 'React rendering should remain a pure calculation without side effects.',
          solution: 'Mutating refs during render makes the component impure and unpredictable; ref mutations belong inside useEffect or event handlers.'
        }
      },
      {
        title: '3. Custom Hook Architecture: useLocalStorage & useFetch',
        content: 'Custom hooks allow developers to extract complex stateful operations into clean, reusable functions. By adhering to the "use" naming convention, custom hooks leverage standard React hooks under the hood, enabling seamless state persistence, network fetching, and media query monitoring across any component.',
        codeSnippet: '// Reusable useLocalStorage Custom Hook\nfunction useLocalStorage(key, initialValue) {\n  const [storedValue, setStoredValue] = React.useState(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (err) {\n      return initialValue;\n    }\n  });\n\n  const setValue = (value) => {\n    try {\n      const valueToStore = value instanceof Function ? value(storedValue) : value;\n      setStoredValue(valueToStore);\n      window.localStorage.setItem(key, JSON.stringify(valueToStore));\n    } catch (err) {\n      console.error(err);\n    }\n  };\n\n  return [storedValue, setValue];\n}',
        lineByLine: [
          { line: 'React.useState(() => { ... })', explanation: 'Lazy initial state function reads from localStorage only once on initial mount.' },
          { line: 'window.localStorage.setItem(...)', explanation: 'Synchronizes updated state to browser localStorage seamlessly.' },
          { line: 'return [storedValue, setValue];', explanation: 'Returns tuple mirroring standard useState API convention.' }
        ],
        miniPractice: {
          task: 'If two different components call useLocalStorage("theme", "dark"), do they share the exact same React state in memory?',
          hint: 'Does calling a custom hook create separate state instances?',
          solution: 'No. Each call to a custom hook creates an independent state instance; they only share the underlying localStorage persistence layer.'
        }
      }
    ],
    practiceExercise: {
      title: 'Custom useFetch Hook Checkpoint',
      instructions: 'Write a custom hook useFetch(url) that returns { data, loading, error } and refetches whenever the url changes.',
      starterCode: 'export function useFetch(url) {\n  // Implement useFetch hook\n}',
      solution: 'export function useFetch(url) {\n  const [data, setData] = React.useState(null);\n  const [loading, setLoading] = React.useState(true);\n  const [error, setError] = React.useState(null);\n  React.useEffect(() => {\n    let active = true;\n    setLoading(true);\n    fetch(url)\n      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })\n      .then(d => { if (active) { setData(d); setError(null); } })\n      .catch(e => { if (active) setError(e.message); })\n      .finally(() => { if (active) setLoading(false); });\n    return () => { active = false; };\n  }, [url]);\n  return { data, loading, error };\n}'
    }
  },
  {
    id: 'web-int-12',
    title: '12. Routing, Single Page Applications & Nested Layouts',
    summary: 'Master SPA routing with React Router: dynamic route parameters, nested layouts with Outlet, protected routes, and code-splitting with Suspense.',
    readingTime: '25 min',
    overview: 'Single Page Applications provide seamless desktop-app-like navigation without full browser page reloads. Understanding client-side routing, nested layouts, URL search parameters, route guards (protected routes), and lazy chunk loading is essential for modern web applications.',
    learningObjectives: [
      'Configure client-side routing using modern React Router (BrowserRouter, Routes, Route)',
      'Construct hierarchical nested layouts using the <Outlet /> component',
      'Read and mutate URL parameters (useParams) and query strings (useSearchParams)',
      'Implement authentication route guards (Protected Routes) that redirect unauthenticated users'
    ],
    syntaxGuide: '// React Router Nested Route Configuration\nimport { BrowserRouter, Routes, Route, Navigate, Outlet } from \'react-router-dom\';\n\nexport function AppRouter() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<AppLayout />}>\n          <Route index element={<HomeScreen />} />\n          <Route path="courses" element={<CourseCatalogScreen />} />\n          <Route path="courses/:courseId" element={<CourseDetailScreen />} />\n          <Route path="profile" element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>} />\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  );\n}',
    proTips: [
      'Use nested route layouts with <Outlet /> to share common headers, sidebars, and navigation bars across child routes without remounting them.',
      'Always implement a 404 catch-all route (<Route path="*" element={<NotFoundScreen />} />) at the end of your route definitions.'
    ],
    sections: [
      {
        title: '1. React Router Architecture & Nested Layouts',
        content: 'React Router maps browser URL paths to React components. Nested routes enable parent layout components (containing universal headers and sidebars) to persist while dynamically swapping out child views inside an <Outlet /> element. This avoids unnecessary re-rendering of shared layout chrome.',
        codeSnippet: '// Layout Component with Outlet\nimport { NavLink, Outlet } from \'react-router-dom\';\n\nexport function AppLayout() {\n  return (\n    <div className="app-container">\n      <header className="global-nav">\n        <NavLink to="/" className={({ isActive }) => isActive ? \'link-active\' : \'link\'}>\n          Dashboard\n        </NavLink>\n        <NavLink to="/courses" className={({ isActive }) => isActive ? \'link-active\' : \'link\'}>\n          Courses\n        </NavLink>\n      </header>\n      \n      {/* Child route components render here */}\n      <main className="content-area">\n        <Outlet />\n      </main>\n    </div>\n  );\n}',
        lineByLine: [
          { line: '<NavLink to="/courses" ...>', explanation: 'Provides built-in active state styling awareness for navigation links.' },
          { line: '<Outlet />', explanation: 'Placeholder component rendering matched child route components.' }
        ],
        miniPractice: {
          task: 'What component is used in React Router to redirect a user from legacy path /old-courses to /courses?',
          hint: 'Use <Navigate to="..." replace />.',
          solution: '<Route path="/old-courses" element={<Navigate to="/courses" replace />} />'
        }
      },
      {
        title: '2. Dynamic Route Parameters & Search Params',
        content: 'Dynamic route parameters (path="courses/:courseId") capture variable URL segments and expose them via the useParams() hook. URL query strings (?level=beginner&task=3) are read and modified via the useSearchParams() hook, enabling shareable, bookmarkable application states.',
        codeSnippet: 'import { useParams, useSearchParams } from \'react-router-dom\';\n\nexport function CourseScreen() {\n  const { courseId } = useParams(); // e.g. "web-development"\n  const [searchParams, setSearchParams] = useSearchParams();\n  \n  const currentLevel = searchParams.get(\'level\') || \'beginner\';\n\n  const handleLevelChange = (newLevel) => {\n    setSearchParams({ level: newLevel }); // Updates URL query parameter\n  };\n\n  return (\n    <div>\n      <h1>Course: {courseId}</h1>\n      <p>Active Level: {currentLevel}</p>\n      <button onClick={() => handleLevelChange(\'intermediate\')}>Go to Intermediate</button>\n    </div>\n  );\n}',
        lineByLine: [
          { line: 'const { courseId } = useParams();', explanation: 'Extracts dynamic URL segment :courseId from the active route.' },
          { line: 'const [searchParams, setSearchParams] = useSearchParams();', explanation: 'Hook providing read and write access to URL query string parameters.' }
        ],
        miniPractice: {
          task: 'Why is storing UI tab selection in URL search parameters (?tab=quiz) better than storing it purely in local component useState?',
          hint: 'Consider what happens when the user refreshes or shares the link with a colleague.',
          solution: 'URL parameters allow users to bookmark, refresh, and share exact page views and active tabs directly.'
        }
      },
      {
        title: '3. Protected Routes & Route Guards',
        content: 'Protected routes prevent unauthorized users from accessing sensitive pages (like user profiles or admin dashboards). A protected route wrapper checks user authentication status; if authenticated, it renders the child content; otherwise, it redirects the user to the login screen with a state redirect parameter.',
        codeSnippet: 'import { Navigate, useLocation } from \'react-router-dom\';\n\nexport function ProtectedRoute({ children }) {\n  const { user, loading } = useAuth(); // Global auth context hook\n  const location = useLocation();\n\n  if (loading) {\n    return <div className="spinner">Authenticating session...</div>;\n  }\n\n  if (!user) {\n    // Redirect to login, preserving intended destination in location state\n    return <Navigate to="/login" state={{ from: location }} replace />;\n  }\n\n  return children;\n}',
        lineByLine: [
          { line: 'if (loading) return ...', explanation: 'Prevents premature redirect while authentication status is verifying.' },
          { line: '<Navigate to="/login" state={{ from: location }} replace />', explanation: 'Redirects unauthenticated user while saving current path for post-login redirection.' }
        ],
        miniPractice: {
          task: 'What does the replace prop on <Navigate /> do to the browser history stack?',
          hint: 'It replaces the current history entry instead of pushing a new one.',
          solution: 'replace prevents the redirected page from being saved in the history stack, so clicking the browser Back button does not trigger an infinite redirect loop.'
        }
      }
    ],
    practiceExercise: {
      title: 'Protected Route Wrapper Checkpoint',
      instructions: 'Build a ProtectedAdminRoute component that redirects non-admin users to /unauthorized or renders child content if user.role === "admin".',
      starterCode: 'export function ProtectedAdminRoute({ children }) {\n  // Implement role protection\n}',
      solution: 'export function ProtectedAdminRoute({ children }) {\n  const { user } = useAuth();\n  if (!user || user.role !== "admin") {\n    return <Navigate to="/unauthorized" replace />;\n  }\n  return children;\n}'
    }
  },
  {
    id: 'web-int-13',
    title: '13. Frontend Performance, Accessibility Auditing & Core Web Vitals',
    summary: 'Master web performance optimization: code splitting, bundle analysis, memoization profiling, WCAG auditing with Axe, and Lighthouse optimization.',
    readingTime: '25 min',
    overview: 'High-performance web applications deliver fast load times, smooth 60fps animations, and zero layout shifts while remaining fully accessible to all users. Mastering Core Web Vitals diagnostics, React DevTools profiling, code-splitting, and automated accessibility auditing is vital for professional frontend engineering.',
    learningObjectives: [
      'Diagnose and optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS)',
      'Analyze and trim JavaScript bundle sizes using bundle visualizers and dynamic imports',
      'Profile React component re-renders using the React DevTools Profiler',
      'Audit applications using Axe Core and Lighthouse to achieve 95+ accessibility and performance scores'
    ],
    syntaxGuide: '// Performance & Accessibility Optimization\n// 1. Code Splitting with React.lazy and Suspense\nconst AnalyticsDashboard = React.lazy(() => import(\'./AnalyticsDashboard\'));\n\n// 2. Wrapping with Suspense Fallback\n<React.Suspense fallback={<div className="skeleton-loader" />}>\n  <AnalyticsDashboard />\n</React.Suspense>',
    proTips: [
      'Never optimize prematurely with useMemo or useCallback without measuring performance in React DevTools Profiler first; memoization carries its own memory overhead.',
      'Always reserve explicit aspect ratios or width/height on images and media to keep Cumulative Layout Shift (CLS) at 0.00.'
    ],
    sections: [
      {
        title: '1. Core Web Vitals Diagnostics & Remediation',
        content: 'Core Web Vitals represent Google\'s metrics for real-world user experience. LCP (Largest Contentful Paint < 2.5s) measures when the main hero element is rendered; INP (Interaction to Next Paint < 200ms) measures responsiveness to user clicks and taps; CLS (Cumulative Layout Shift < 0.1) measures visual stability. Remediation techniques include preloading hero images, avoiding blocking scripts, and reserving layout space.',
        codeSnippet: '<!-- Optimizing LCP and CLS in HTML/CSS -->\n<!-- 1. Preload Hero Image -->\n<link rel="preload" as="image" href="/hero.webp" fetchpriority="high">\n\n<!-- 2. CSS aspect-ratio prevents CLS layout shift -->\n<style>\n  .hero-media {\n    width: 100%;\n    aspect-ratio: 16 / 9;\n    background-color: #f1f5f9; /* Placeholder background */\n  }\n</style>',
        lineByLine: [
          { line: 'fetchpriority="high"', explanation: 'Signals browser to prioritize this image download above all standard images.' },
          { line: 'aspect-ratio: 16 / 9;', explanation: 'Reserves exact vertical space before image bytes arrive, eliminating CLS.' }
        ],
        miniPractice: {
          task: 'What tool in Chrome DevTools allows simulating low-end mobile CPUs and 3G network throttling?',
          hint: 'Look in the Performance and Network tabs.',
          solution: 'The "CPU Throttling" (4x/6x slowdown) and "Network Throttling" (Fast 3G / Slow 3G) dropdowns in DevTools.'
        }
      },
      {
        title: '2. React Profiling & Unnecessary Re-Render Elimination',
        content: 'The React DevTools Profiler records flamegraphs of component render durations. Common causes of wasted re-renders include creating new object references or inline arrow functions passed to memoized children. Wrapping child components in React.memo() and stabilizing prop functions with useCallback() eliminates unnecessary subtree re-renders.',
        codeSnippet: '// Memoized Component with Stable Props\ninterface ListItemProps {\n  item: { id: string; name: string };\n  onDelete: (id: string) => void;\n}\n\n// React.memo skips re-render if props haven\'t changed\nexport const ListItem = React.memo<ListItemProps>(({ item, onDelete }) => {\n  console.log(\'Rendering ListItem ID:\', item.id);\n  return (\n    <li>\n      <span>{item.name}</span>\n      <button onClick={() => onDelete(item.id)}>Delete</button>\n    </li>\n  );\n});',
        lineByLine: [
          { line: 'React.memo<ListItemProps>(...)', explanation: 'Wraps component with shallow prop comparison check.' },
          { line: 'onDelete: (id: string) => void;', explanation: 'Parent must pass stable useCallback function for React.memo to work.' }
        ],
        miniPractice: {
          task: 'Why will React.memo fail to prevent re-renders if the parent passes an inline function like onDelete={() => handleDelete(item.id)}?',
          hint: 'Inline arrow functions create a brand new function reference on every parent render.',
          solution: 'Every parent render instantiates a new function reference pointer, failing the shallow equality check (newFn !== oldFn).'
        }
      },
      {
        title: '3. Automated Accessibility Auditing with Axe & Lighthouse',
        content: 'Accessibility is a fundamental requirement for production applications. Integrating automated tools like @axe-core/react in development flags missing ARIA labels, low contrast text, and keyboard traps directly in the browser console. Running Lighthouse audits verifies performance, SEO, accessibility, and best practices compliance.',
        codeSnippet: '// Initializing axe-core accessibility auditing in development\n// import React from \'react\';\n// import ReactDOM from \'react-dom\';\n\nif (process.env.NODE_ENV !== \'production\') {\n  import(\'@axe-core/react\').then(axe => {\n    // axe.default(React, ReactDOM, 1000);\n    console.log(\'Accessibility auditing active.\');\n  });\n}',
        lineByLine: [
          { line: 'if (process.env.NODE_ENV !== \'production\')', explanation: 'Ensures accessibility auditing tool runs strictly in development.' },
          { line: 'axe.default(React, ReactDOM, 1000)', explanation: 'Debounces DOM scans to log a11y violations to console 1s after render.' }
        ],
        miniPractice: {
          task: 'What is the WCAG minimum color contrast requirement for standard body text?',
          hint: 'Level AA requirement.',
          solution: 'A contrast ratio of at least 4.5:1 between text and background color.'
        }
      }
    ],
    practiceExercise: {
      title: 'Performance Optimization & Memoization Checkpoint',
      instructions: 'Optimize an ExpensiveList component by memoizing items with React.memo and providing stable callback handlers with useCallback.',
      starterCode: '// Optimize list component',
      solution: 'export const ExpensiveList = ({ items, onItemClick }) => {\n  const handleClick = React.useCallback((id) => onItemClick(id), [onItemClick]);\n  return <ul>{items.map(item => <MemoItem key={item.id} item={item} onClick={handleClick} />)}</ul>;\n};\nconst MemoItem = React.memo(({ item, onClick }) => <li onClick={() => onClick(item.id)}>{item.name}</li>);'
    }
  },
  {
    id: 'web-int-14',
    title: '14. Modern Build Tooling, Vite Ecosystem & Asset Pipelines',
    summary: 'Master Vite development server architecture, Rollup production bundling, PostCSS/Tailwind configuration, environment variables, and asset hashing.',
    readingTime: '24 min',
    overview: 'Modern frontend development relies on blazing-fast build tools to transpile TypeScript, bundle modules, process CSS utility frameworks, and generate optimized production distributions. Mastering Vite, Rollup configuration, environment variable management, and asset pipelines is essential for full-stack engineers.',
    learningObjectives: [
      'Configure Vite configuration files (vite.config.ts) for plugins, aliases, and proxy servers',
      'Manage environment variables securely using .env files and import.meta.env',
      'Configure Tailwind CSS, PostCSS, and autoprefixer pipelines',
      'Analyze and optimize Rollup production chunking and code splitting output'
    ],
    syntaxGuide: '// vite.config.ts Production Configuration\nimport { defineConfig } from \'vite\';\nimport react from \'@vitejs/plugin-react\';\nimport path from \'path\';\n\nexport default defineConfig({\n  plugins: [react()],\n  resolve: {\n    alias: {\n      \'@\': path.resolve(__dirname, \'./src\') // Clean path aliases\n    }\n  },\n  server: {\n    port: 3000,\n    proxy: {\n      \'/api\': {\n        target: \'http://localhost:5000\',\n        changeOrigin: true\n      }\n    }\n  }\n});',
    proTips: [
      'In Vite, only environment variables prefixed with VITE_ (e.g. VITE_API_URL) are exposed to client-side code via import.meta.env to prevent accidental leakage of secret server keys.',
      'Use the @ path alias in TypeScript and Vite configs to eliminate fragile relative import paths like ../../../components.'
    ],
    sections: [
      {
        title: '1. Vite Architecture & Native ESM Dev Server',
        content: 'Legacy bundlers (Webpack, Parcel) pre-bundle the entire application before starting the local development server. As applications grow, startup and hot-reload times degrade to minutes. Vite transforms this by serving source code over native browser ES Modules. Files are compiled on-demand using esbuild (written in Go), providing instant server startup (<300ms) and sub-50ms Hot Module Replacement (HMR) regardless of app size.',
        codeSnippet: '// Accessing Environment Variables in Vite (Client-side)\n// .env file:\n// VITE_API_BASE_URL=https://api.skillora.ai\n// SECRET_DB_KEY=supersecret (Not exposed to client)\n\nexport const API_URL = import.meta.env.VITE_API_BASE_URL;\nexport const IS_DEV = import.meta.env.DEV; // Boolean true in dev mode\n\nconsole.log(`Connected to API: ${API_URL} (Dev Mode: ${IS_DEV})`);',
        lineByLine: [
          { line: 'import.meta.env.VITE_API_BASE_URL', explanation: 'Securely reads environment variable prefixed with VITE_.' },
          { line: 'import.meta.env.DEV', explanation: 'Built-in Vite boolean indicating whether code is running in dev mode.' }
        ],
        miniPractice: {
          task: 'What happens if you create an environment variable DATABASE_PASSWORD=xyz in a .env file and try to access import.meta.env.DATABASE_PASSWORD in Vite?',
          hint: 'Vite ignores variables not prefixed with VITE_.',
          solution: 'It returns undefined, safely protecting sensitive secrets from being leaked into the client bundle.'
        }
      },
      {
        title: '2. Tailwind CSS & PostCSS Pipeline Integration',
        content: 'Tailwind CSS is a utility-first CSS framework that scans HTML, JSX, and TSX files for class names, generating only the CSS classes actually used in the project. When integrated with PostCSS and Autoprefixer, Vite generates micro-sized, production-ready stylesheets with vendor prefixes applied automatically.',
        codeSnippet: '// tailwind.config.js\n/** @type {import(\'tailwindcss\').Config} */\nexport default {\n  content: [\n    \'./index.html\',\n    \'./src/**/*.{js,ts,jsx,tsx}\'\n  ],\n  theme: {\n    extend: {\n      colors: {\n        brand: { 500: \'#6366f1\', 600: \'#4f46e5\', 700: \'#4338ca\' }\n      }\n    }\n  },\n  plugins: []\n};',
        lineByLine: [
          { line: 'content: [\'./src/**/*.{js,ts,jsx,tsx}\']', explanation: 'Tells Tailwind compiler where to scan for utility class usage.' },
          { line: 'colors: { brand: { ... } }', explanation: 'Extends default color palette with custom brand design tokens.' }
        ],
        miniPractice: {
          task: 'Why does Tailwind CSS produce virtually no stylesheet size growth as an application scales to hundreds of components?',
          hint: 'Utility classes (like flex, p-4, text-white) are reused across components rather than writing new custom CSS rules.',
          solution: 'Because the same utility classes are reused repeatedly across components, meaning new UI components add 0 bytes to the compiled CSS.'
        }
      },
      {
        title: '3. Production Build Optimization & Content Hashing',
        content: 'When running npm run build (vite build), Vite invokes Rollup to compile, minify, and bundle your application. Rollup performs dead-code elimination (tree-shaking) and generates content-hashed filenames (e.g. index-B4d9f1a.js). If a file\'s code changes, its hash changes, allowing CDN caches to serve assets indefinitely while ensuring instant cache busting on deployment.',
        codeSnippet: '// Rollup Manual Chunks Configuration in vite.config.ts\nexport default defineConfig({\n  build: {\n    rollupOptions: {\n      output: {\n        manualChunks: {\n          // Split heavy vendor libraries into a separate cached bundle\n          \'vendor-react\': [\'react\', \'react-dom\', \'react-router-dom\'],\n          \'vendor-charts\': [\'chart.js\']\n        }\n      }\n    }\n  }\n});',
        lineByLine: [
          { line: 'manualChunks: { ... }', explanation: 'Instructs bundler to group third-party libraries into dedicated cached bundles.' },
          { line: '\'vendor-react\': [\'react\', ...]', explanation: 'Creates long-lived cached vendor chunk that rarely changes between deploys.' }
        ],
        miniPractice: {
          task: 'What is the command to preview the production build output locally before deploying to production?',
          hint: 'Vite provides a built-in preview command.',
          solution: 'npm run preview (or npx vite preview), which boots a local static server serving the dist/ folder.'
        }
      }
    ],
    practiceExercise: {
      title: 'Vite Configuration & Path Alias Checkpoint',
      instructions: 'Write a vite.config.ts configuration that sets up React plugin, @ path alias, and builds to a custom dist folder.',
      starterCode: '// Configure vite.config.ts',
      solution: 'import { defineConfig } from "vite";\nimport react from "@vitejs/plugin-react";\nimport path from "path";\nexport default defineConfig({\n  plugins: [react()],\n  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },\n  build: { outDir: "dist", sourcemap: false }\n});'
    }
  }
];

// Capstone Project: Intermediate Level
const INTERMEDIATE_PROJECT = {
  id: 'web-int-project-saas',
  title: '15. Intermediate Capstone Project: Production-Grade React SaaS Application',
  description: 'Architect, engineer, and deploy a feature-rich, production-grade Single Page Application (SPA) using React 18+, TypeScript, Vite, Tailwind CSS, React Router, custom hooks, and mock REST API services with full CRUD, optimistic UI mutations, and state management.',
  duration: '6-8 hours',
  orderIndex: 15,
  status: 'locked',
  isProject: true,
  type: 'project',
  xpReward: 500,
  projectDetails: {
    title: 'Intermediate Capstone Project: Production-Grade React SaaS Application (Task & Analytics Engine)',
    overview: 'Architect, engineer, and deploy a feature-rich, production-grade Single Page Application (SPA) using React 18+, TypeScript, Vite, Tailwind CSS, React Router, custom hooks, and mock REST API services with full CRUD, optimistic UI mutations, and state management.',
    learningObjectives: [
      'Architect a modular React + TypeScript application with feature-driven directory structure',
      'Implement multi-level client-side routing with nested layouts and protected route guards',
      'Manage complex application state using custom hooks, Context API, and optimistic UI mutations',
      'Build an interactive dashboard with data filtering, search debouncing, and WCAG AA accessibility'
    ],
    requirements: [
      'Vite + React + TypeScript setup with strict typecheck and clean path aliases',
      'Multi-route navigation with React Router (/dashboard, /tasks, /analytics, /settings)',
      'Nested AppLayout component with responsive sidebar drawer and top header',
      'Task management module with full CRUD operations (Create, Read, Update, Delete, Filter, Sort)',
      'Optimistic state updates on task completion toggle with automatic rollback on error',
      'Search input with custom useDebounce hook and category multi-select filter',
      'Interactive Analytics dashboard displaying key metrics and completion rate visualizations',
      'Custom useLocalStorage hook synchronizing theme preferences and user profile state',
      'Form validation with accessible error announcements and aria-invalid attributes',
      'Automated unit tests with Vitest / React Testing Library verifying core user flows',
      'Production deployment on Vercel or Netlify with verified 95+ Lighthouse score'
    ],
    deliverables: [
      {
        id: 'deliv-int-01',
        title: 'Product Requirements Document & Architecture Plan',
        description: 'PRD defining application user personas, user stories, component hierarchy tree, and REST endpoint specifications.',
        criteria: ['Component tree diagram', 'Feature requirements checklist', 'State flow mapping'],
        expectedOutput: 'Architecture manifesto and technical specification document.'
      },
      {
        id: 'deliv-int-02',
        title: 'Vite + React + TypeScript Project Scaffolding',
        description: 'Clean project setup with strict tsconfig.json, path aliases (@/*), Tailwind CSS tokens, and ESLint configuration.',
        criteria: ['Zero TypeScript errors', 'Tailwind custom tokens configured', 'Path aliases functional'],
        expectedOutput: 'Configured repository scaffolding ready for feature development.'
      },
      {
        id: 'deliv-int-03',
        title: 'Client-Side Router with Nested Layouts & Outlet',
        description: 'React Router configuration with persistent sidebar layout, active link navigation indicators, and 404 fallback.',
        criteria: ['BrowserRouter setup', 'AppLayout with <Outlet />', 'Active navigation states'],
        expectedOutput: 'Multi-page routing architecture with shared layout shell.'
      },
      {
        id: 'deliv-int-04',
        title: 'Authentication & Protected Route System',
        description: 'Simulated authentication state with login/logout flow, user context provider, and ProtectedRoute wrapper.',
        criteria: ['Context API auth provider', 'Protected route guard', 'Post-login redirection'],
        expectedOutput: 'Functional authentication state and protected route security.'
      },
      {
        id: 'deliv-int-05',
        title: 'Task CRUD Engine with Optimistic UI Updates',
        description: 'Interactive task board supporting task creation, status updates, editing, deletion, and optimistic UI toggle.',
        criteria: ['Optimistic status toggle', 'Error rollback mechanism', 'Immutable state updates'],
        expectedOutput: 'Task management module with optimistic response handling.'
      },
      {
        id: 'deliv-int-06',
        title: 'Search Filter & useDebounce Custom Hook',
        description: 'Search bar with custom useDebounce hook (300ms cooldown) and multi-category filtering dropdown.',
        criteria: ['useDebounce hook implementation', 'Filtered list rendering', 'Empty state UI when 0 results'],
        expectedOutput: 'High-performance debounced search and filtering interface.'
      },
      {
        id: 'deliv-int-07',
        title: 'Interactive Analytics & Metrics Dashboard',
        description: 'Analytics view showing completed tasks, weekly productivity velocity, and SVG/CSS visual chart breakdowns.',
        criteria: ['Computed statistics (useMemo)', 'Visual progress indicators', 'Responsive grid reflow'],
        expectedOutput: 'Dashboard view with visual data summaries.'
      },
      {
        id: 'deliv-int-08',
        title: 'Theme Preference Engine & Custom useLocalStorage Hook',
        description: 'Theme manager hook syncing dark/light modes to localStorage and document.documentElement classList.',
        criteria: ['Custom useLocalStorage hook', 'System preference detection (prefers-color-scheme)', 'Zero hydration flash'],
        expectedOutput: 'Custom hook and theme toggle component.'
      },
      {
        id: 'deliv-int-09',
        title: 'Accessible Modal Dialog & Form Architecture',
        description: 'Reusable modal dialog with focus trapping (react-focus-lock), ESC key listener, and accessible form inputs.',
        criteria: ['Focus trap on open', 'ESC key closing', 'aria-labelledby and role="dialog"'],
        expectedOutput: 'Fully accessible modal component system.'
      },
      {
        id: 'deliv-int-10',
        title: 'Unit & Integration Test Suite (Vitest & RTL)',
        description: 'Automated tests verifying component rendering, hook state mutations, and user interaction flows.',
        criteria: ['Minimum 8 passing unit tests', 'User event interactions tested', 'Mock API handlers'],
        expectedOutput: 'Vitest test suite with 100% passing test report.'
      },
      {
        id: 'deliv-int-11',
        title: 'Git Version History with Feature Branches & PR Workflow',
        description: 'Git history showing feature branches, conventional commits, and markdown Pull Request templates.',
        criteria: ['Clean branching strategy', 'Conventional commit messages', 'PR template in .github/'],
        expectedOutput: 'Structured Git development workflow repository.'
      },
      {
        id: 'deliv-int-12',
        title: 'Production Build Optimization & Deployment',
        description: 'Production build with code-splitting, bundle analysis, and deployment on Vercel/Netlify with 95+ Lighthouse score.',
        criteria: ['Live public URL', 'Lighthouse 95+ score', 'Zero console errors in production'],
        expectedOutput: 'Live production URL and deployment audit report.'
      }
    ],
    evaluationRubric: [
      { category: 'Architecture & TypeScript', weight: '25%', criteria: 'Feature-driven layout, strict TypeScript interfaces, clean code organization.' },
      { category: 'React & State Management', weight: '25%', criteria: 'Optimistic UI updates, custom hooks, proper dependency arrays, Context API.' },
      { category: 'Routing & UI Polish', weight: '25%', criteria: 'Nested routes, responsive Tailwind layout, accessible modal dialogs, debounced search.' },
      { category: 'Testing & Production Quality', weight: '25%', criteria: 'Vitest unit tests, clean Git history, live deployment with Lighthouse 95+ score.' }
    ]
  }
};

// Assessment Task
const INTERMEDIATE_ASSESSMENT_TASK = {
  id: 'web-int-assessment',
  title: '16. Level 2 Final Assessment: Modern JavaScript, React & Web Architecture',
  description: 'Official 30-question comprehensive examination testing ES6+ modules, React 18 hooks, TypeScript interfaces, REST APIs, and build tools. Score at least 25/30 (83.33%) to pass.',
  duration: '45 min',
  orderIndex: 16,
  status: 'locked',
  isProject: false,
  isFinalAssessment: true,
  type: 'assessment',
  xpReward: 450,
  passingScore: 25,
  totalQuestions: 30,
  questions: INTERMEDIATE_ASSESSMENT
};

// Assemble all 16 tasks for Intermediate
const ALL_INTERMEDIATE_TASKS = [
  ...INTERMEDIATE_MODULES_RAW.map((mod, idx) => ({
    id: mod.id,
    orderIndex: idx + 1,
    title: mod.title,
    description: mod.summary || 'Intermediate theory module covering modern JavaScript, React 18, TypeScript, and full-stack web architectures.',
    duration: mod.readingTime || '35 mins',
    level: 'intermediate',
    status: 'locked',
    isProject: false,
    requiresQuiz: false,
    type: 'theory',
    xpReward: 120,
    lessonContent: {
      overview: mod.overview,
      objectives: mod.learningObjectives || [],
      estimatedTime: mod.readingTime || '35 mins',
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
        } : undefined,
        commonMistakes: mod.commonMistakes ? [mod.commonMistakes.mistake] : undefined
      })),
      keyTakeaways: [
        ...(mod.keyTakeaways || []),
        ...(mod.proTips || []),
        'Ensure state updates are immutable and use pure functions where possible.',
        'Structure components with modular responsibilities and clear TypeScript interfaces.'
      ].slice(0, Math.max(3, (mod.keyTakeaways || mod.proTips || []).length)),
      summary: mod.summary,
      syntaxGuide: mod.syntaxGuide,
      practiceExercises: mod.practiceExercise ? [{
        title: mod.practiceExercise.title,
        instructions: mod.practiceExercise.instructions,
        starterCode: mod.practiceExercise.starterCode,
        solutionCode: mod.practiceExercise.solution
      }] : []
    }
  })),
  INTERMEDIATE_PROJECT,
  INTERMEDIATE_ASSESSMENT_TASK
];

// Write file
const fileContent = `// Web Development Masterclass — Level 2: Intermediate Data
// Auto-generated by build_web_dev_intermediate.cjs

import { Task, QuizQuestion } from '../../types/roadmap.types';

export const WEB_DEV_INTERMEDIATE_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(INTERMEDIATE_ASSESSMENT, null, 2)};

export const WEB_DEV_INTERMEDIATE_TASKS: Task[] = ${JSON.stringify(ALL_INTERMEDIATE_TASKS, null, 2)};
`;

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log(`✅ Successfully generated Intermediate data at ${targetFile} (${ALL_INTERMEDIATE_TASKS.length} tasks, ${INTERMEDIATE_ASSESSMENT.length} MCQs)`);
