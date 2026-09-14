import { Task } from '../../types/roadmap.types';

export const JAVASCRIPT_BEGINNER_TASKS: Task[] = [
  {
    "id": "js-beg-01",
    "orderIndex": 1,
    "title": "Introduction to JavaScript and the Web",
    "description": "Understand the role of JavaScript in the modern web stack, browser execution environments, JavaScript engines, script execution modes, and developer tools.",
    "status": "in_progress",
    "requiresQuiz": false,
    "xpReward": 100,
    "level": "beginner",
    "type": "theory",
    "lessonContent": {
      "overview": "JavaScript is the high-level, dynamic, multi-paradigm programming language that powers interactive behavior across the World Wide Web. While HTML provides semantic document structure and CSS governs visual presentation, JavaScript provides computation, state management, event orchestration, and network communications.",
      "analogyHero": "Think of a modern skyscraper: HTML is the concrete foundation and steel framing, CSS is the architectural facade and interior styling, and JavaScript is the electrical grid, elevators, climate control, and security systems that make the building dynamic and interactive.",
      "objectives": [
        "Understand the tri-part architecture of web pages (HTML, CSS, JavaScript) and how JS interacts with the browser runtime.",
        "Explore how V8, SpiderMonkey, and JavaScriptCore compile and execute JavaScript using Just-In-Time (JIT) compilation.",
        "Differentiate between client-side execution (browsers) and server-side runtimes (Node.js, Deno, Bun).",
        "Learn proper script tag loading strategies: inline, synchronous external, async, and defer.",
        "Master the browser developer tools console and debugger for rapid prototyping and diagnostic evaluation."
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "JavaScript conforms to the ECMAScript standard (ES6+ being the baseline of modern development).",
        "Browsers execute JavaScript on a single-threaded event-driven concurrency model.",
        "The `defer` attribute is standard for external script tags in the `<head>` because it maintains execution order and avoids blocking HTML parsing.",
        "Console methods (`console.log`, `console.warn`, `console.error`, `console.table`) provide immediate telemetry during script execution."
      ],
      "summary": "JavaScript breathes life into web pages by executing instructions inside browser engines. Mastering its execution characteristics and debugging workflows is the foundation of modern web engineering.",
      "syntaxGuide": "// Including scripts in HTML:\n<!-- Deferred execution (recommended for modern scripts in head) -->\n<script src=\"app.js\" defer></script>\n\n<!-- Asynchronous execution (for independent analytics/trackers) -->\n<script src=\"analytics.js\" async></script>\n\n// Basic logging & diagnostics:\nconsole.log('Application initialized successfully');\nconsole.table([{ name: 'App', version: '1.0.0', status: 'Active' }]);",
      "practiceExercises": [
        {
          "title": "Browser Console Prototyping",
          "instructions": "Open your browser developer console (F12 or Cmd+Option+I), declare a greeting variable, format it with current date metadata, and log an informational table.",
          "starterCode": "// Enter into DevTools console:\nconst appName = 'Skillora JS Engine';\nconst uptime = performance.now();\nconsole.table({ appName, uptime: uptime.toFixed(2) + 'ms' });",
          "solutionCode": "const appName = 'Skillora JS Engine';\nconst uptime = performance.now();\nconsole.log(`Running ${appName}`);\nconsole.table([{ Metric: 'App Name', Value: appName }, { Metric: 'Uptime', Value: `${uptime.toFixed(2)}ms` }]);"
        }
      ],
      "sections": [
        {
          "id": "js-beg-01-s1",
          "title": "1. The Web Platform Trilogy & JavaScript Engines",
          "difficulty": "Beginner",
          "analogy": "A browser engine is like a high-speed translator in an international conference, translating high-level human JavaScript code into machine bytecode on the fly.",
          "explanation": "JavaScript operates inside a host environment (most commonly a web browser). Inside every browser lives a JavaScript Engine (such as Google Chromium's V8, Mozilla Firefox's SpiderMonkey, or Apple WebKit's JavaScriptCore). The engine parses source code into an Abstract Syntax Tree (AST), translates it into bytecode, and uses a Just-In-Time (JIT) compiler to optimize hot code paths directly into machine code for near-native execution speed.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "engine_demo.js",
              "title": "Inspecting Runtime Metadata",
              "code": "// Checking the host execution environment\nfunction inspectRuntime() {\n  const isBrowser = typeof window !== 'undefined';\n  const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;\n  \n  if (isBrowser) {\n    console.log('Host: Browser Environment');\n    console.log('User Agent:', navigator.userAgent);\n    console.log('Language:', navigator.language);\n  } else if (isNode) {\n    console.log('Host: Node.js Runtime');\n    console.log('Node Version:', process.version);\n  }\n}\n\ninspectRuntime();",
              "lineByLine": [
                {
                  "line": "typeof window !== \"undefined\"",
                  "explanation": "Safely checks if the browser global window object exists without throwing ReferenceError."
                },
                {
                  "line": "navigator.userAgent",
                  "explanation": "Reads browser engine string and platform architecture information."
                }
              ]
            }
          ],
          "proTip": "Always verify global object existence (`window` vs `globalThis`) when writing isomorphic code designed to run in both Node and browsers."
        },
        {
          "id": "js-beg-01-s2",
          "title": "2. Script Loading Strategies: Normal vs Async vs Defer",
          "difficulty": "Beginner",
          "analogy": "Normal script loading stops construction of the building while reading instructions. Defer downloads instructions in the background while workers continue building, opening the instructions only once the building frame is finished.",
          "explanation": "When the HTML parser encounters a classic `<script src=\"...\">` tag, it pauses DOM construction until the script file is downloaded and executed. To optimize First Contentful Paint (FCP), modern web development uses `defer` or `async`. `defer` downloads the script in parallel without blocking HTML parsing, executing scripts in document order immediately before `DOMContentLoaded`. `async` downloads in parallel and executes as soon as download completes, disregarding document order.",
          "codeSnippets": [
            {
              "language": "html",
              "filename": "index.html",
              "title": "Comparison of Script Ingestion Strategies",
              "code": "<!-- 1. Blocking: Pauses HTML Parser during download & execution -->\n<script src=\"blocking-script.js\"></script>\n\n<!-- 2. Async: Independent execution as soon as loaded (best for analytics) -->\n<script src=\"https://cdn.example.com/analytics.js\" async></script>\n\n<!-- 3. Defer: Downloads in parallel, executes in order after DOM parsing (Standard) -->\n<script src=\"app-core.js\" defer></script>\n<script src=\"app-ui.js\" defer></script>",
              "explanation": "Using `defer` guarantees that `app-ui.js` executes strictly after `app-core.js` and only after the full HTML document has been converted into DOM nodes."
            }
          ],
          "commonMistakes": [
            "Placing synchronous scripts in the `<head>` without `defer`, causing blank screens and poor Core Web Vitals.",
            "Using `async` on scripts that depend on one another (e.g. jQuery plugins loading before jQuery)."
          ]
        },
        {
          "id": "js-beg-01-s3",
          "title": "3. Developer Tools & Structured Diagnostic Logging",
          "difficulty": "Beginner",
          "explanation": "The browser Developer Tools console is the primary workspace for real-time inspection. Beyond basic `console.log`, professional JavaScript leverages formatted logging, group hierarchies, execution timing, and tabular representations.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "diagnostics.js",
              "title": "Advanced Console Diagnostics",
              "code": "// Diagnostic measurements and structured logging\nconsole.group('Initialization Diagnostics');\nconsole.time('Boot Sequence');\n\nconst systemConfig = {\n  theme: 'dark',\n  apiEndpoint: 'https://api.skillora.ai/v1',\n  cacheEnabled: true,\n  maxRetries: 3\n};\n\nconsole.log('Config loaded:', systemConfig);\nconsole.table(Object.entries(systemConfig).map(([key, val]) => ({ Key: key, Setting: val })));\n\nconsole.timeEnd('Boot Sequence');\nconsole.groupEnd();",
              "lineByLine": [
                {
                  "line": "console.group() / groupEnd()",
                  "explanation": "Creates a collapsible visual hierarchy in the DevTools console."
                },
                {
                  "line": "console.time() / timeEnd()",
                  "explanation": "Measures exact elapsed milliseconds between paired label markers."
                },
                {
                  "line": "console.table()",
                  "explanation": "Renders tabular data as an interactive grid with sortable columns."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Which script attribute downloads the script in parallel without blocking HTML parsing and guarantees sequential execution after HTML is parsed?",
            "options": [
              "async",
              "defer",
              "preload",
              "blocking"
            ],
            "correctAnswer": 1,
            "explanation": "The `defer` attribute downloads asynchronously and waits until the DOM tree is constructed before executing in the order specified in HTML."
          }
        }
      ]
    }
  },
  {
    "id": "js-beg-02",
    "orderIndex": 2,
    "title": "Variables, Constants, and Data Types",
    "description": "Master lexical declarations with let and const, primitive versus reference memory models, dynamic typing, and the typeof operator.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 100,
    "level": "beginner",
    "type": "theory",
    "lessonContent": {
      "overview": "Variables are symbolic identifiers pointing to memory locations that store data. JavaScript provides 8 fundamental data types categorized into primitives (immutable, passed by value) and objects (mutable, passed by reference).",
      "analogyHero": "A `const` variable is like a sealed, permanent label on a safety deposit box; `let` is like a rewritable whiteboard label. Primitives are the actual cash inside; objects are a slip of paper with GPS coordinates pointing to a warehouse.",
      "objectives": [
        "Differentiate between `var` (function-scoped), `let` (block-scoped), and `const` (immutable identifier).",
        "Learn the 7 primitive types: String, Number, BigInt, Boolean, Undefined, Null, and Symbol.",
        "Understand the dynamic type system and type coercion mechanisms.",
        "Inspect runtime types accurately with `typeof` and handle the legacy `typeof null === \"object\"` quirk."
      ],
      "estimatedTime": "50 mins",
      "keyTakeaways": [
        "Default to `const` for all declarations; switch to `let` only when reassignment is explicitly required.",
        "Never use `var` in modern JavaScript due to hoisting quirks and lack of block scoping.",
        "Primitives are immutable: modifying a string creates a new string in memory.",
        "`null` represents intentional absence of value, whereas `undefined` represents an unassigned variable."
      ],
      "summary": "Accurate state management begins with robust variable declarations and disciplined type modeling. Understanding primitive immutability prevents subtle mutations.",
      "syntaxGuide": "// Variable declarations\nconst API_BASE_URL = 'https://api.skillora.ai'; // Cannot be reassigned\nlet activeUserCount = 42; // Can be reassigned\n\n// Primitive types\nconst title = 'JavaScript Masterclass'; // string\nconst price = 49.99; // number\nconst largeInt = 9007199254740991n; // bigint\nconst isEnrolled = true; // boolean\nlet sessionToken; // undefined\nconst selectedItem = null; // null\nconst uniqueKey = Symbol('courseId'); // symbol",
      "practiceExercises": [
        {
          "title": "Type Safety Inspector",
          "instructions": "Write a helper function `describeValue(val)` that returns both the value and its exact evaluated type, correctly identifying `null` and `arrays`.",
          "starterCode": "function describeValue(val) {\n  // Return string: \"[type] value\"\n}",
          "solutionCode": "function describeValue(val) {\n  if (val === null) return '[null] null';\n  if (Array.isArray(val)) return `[array] ${JSON.stringify(val)}`;\n  return `[${typeof val}] ${val}`;\n}"
        }
      ],
      "sections": [
        {
          "id": "js-beg-02-s1",
          "title": "1. `const` vs `let` vs Legacy `var`",
          "difficulty": "Beginner",
          "explanation": "JavaScript originally had only `var`, which has function scope and hoists declarations with an initial value of `undefined`. ES6 introduced `let` and `const`, which are block-scoped (constrained inside `{ ... }`) and live in a Temporal Dead Zone (TDZ) before their declaration line is executed.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "scoping_demo.js",
              "title": "Block Scope vs Function Scope",
              "code": "function scopeComparison() {\n  if (true) {\n    var legacyVar = 'I leak outside the if block';\n    let modernLet = 'I stay inside this block';\n    const modernConst = 'I am also strictly block-scoped';\n  }\n  \n  console.log(legacyVar); // Works! (Leaked to function scope)\n  // console.log(modernLet); // ReferenceError: modernLet is not defined\n  // console.log(modernConst); // ReferenceError: modernConst is not defined\n}\n\nscopeComparison();",
              "lineByLine": [
                {
                  "line": "var legacyVar",
                  "explanation": "Scoped to enclosing function, ignoring block curly braces."
                },
                {
                  "line": "let modernLet / const modernConst",
                  "explanation": "Strictly enclosed within the `if` block, preventing variable pollution."
                }
              ]
            }
          ]
        },
        {
          "id": "js-beg-02-s2",
          "title": "2. The 7 Primitive Types & Immutability",
          "difficulty": "Beginner",
          "explanation": "Primitives in JavaScript are stored directly in the execution stack. They are passed by value and immutable. When you reassign a primitive, you point the variable identifier to a new memory address rather than altering the value in place.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "primitives.js",
              "title": "Primitive Types and Immutability",
              "code": "let courseName = 'javascript';\n// Methods return new values; they do not alter the underlying string\nconst upperName = courseName.toUpperCase();\n\nconsole.log(courseName); // 'javascript' (unchanged)\nconsole.log(upperName);  // 'JAVASCRIPT'\n\nlet scoreA = 100;\nlet scoreB = scoreA; // Passed by copy of value\nscoreB = 95;\n\nconsole.log(scoreA); // 100\nconsole.log(scoreB); // 95",
              "explanation": "Changes to `scoreB` do not affect `scoreA` because primitives are copied by value."
            }
          ]
        },
        {
          "id": "js-beg-02-s3",
          "title": "3. Type Inspection and the `typeof` Operator",
          "difficulty": "Beginner",
          "explanation": "The `typeof` operator returns a string representing the operand’s type. It is essential to remember that `typeof null === \"object\"` (a historical bug preserved for backward compatibility) and functions return `\"function\"`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "typeof_demo.js",
              "title": "Accurate Type Checking",
              "code": "console.log(typeof 'Skillora');        // \"string\"\nconsole.log(typeof 1024);              // \"number\"\nconsole.log(typeof true);              // \"boolean\"\nconsole.log(typeof undefined);         // \"undefined\"\nconsole.log(typeof Symbol('id'));      // \"symbol\"\nconsole.log(typeof 100n);              // \"bigint\"\nconsole.log(typeof { id: 1 });         // \"object\"\nconsole.log(typeof [1, 2, 3]);         // \"object\" (use Array.isArray)\nconsole.log(typeof null);              // \"object\" (legacy quirk!)\nconsole.log(typeof function() {});     // \"function\"",
              "lineByLine": [
                {
                  "line": "typeof null",
                  "explanation": "Returns \"object\" due to JS legacy 32-bit tag bit representation."
                },
                {
                  "line": "Array.isArray([1, 2, 3])",
                  "explanation": "The standard modern way to differentiate Arrays from plain Objects."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What does `typeof null` evaluate to in JavaScript?",
            "options": [
              "\"null\"",
              "\"undefined\"",
              "\"object\"",
              "\"boolean\""
            ],
            "correctAnswer": 2,
            "explanation": "`typeof null` returns `\"object\"` due to a legacy bug dating back to JavaScript 1.0 that cannot be fixed without breaking existing web applications."
          }
        }
      ]
    }
  },
  {
    "id": "js-beg-03",
    "orderIndex": 3,
    "title": "Operators and Expressions",
    "description": "Master arithmetic, comparison, logical, assignment, nullish coalescing, and ternary operators with strict vs loose equality semantics.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 100,
    "level": "beginner",
    "type": "theory",
    "lessonContent": {
      "overview": "Operators perform mathematical, relational, and logical computations on operands to produce values. Mastering operator precedence, truthy/falsy evaluation, and modern operators like Nullish Coalescing (`??`) and Optional Chaining (`?.`) is vital for writing bug-free code.",
      "analogyHero": "Think of operators like the mathematical signs on a scientific calculator: parentheses take highest precedence, multiplication precedes addition, and logical gates filter signals based on truth conditions.",
      "objectives": [
        "Master arithmetic, increment/decrement, and compound assignment operators.",
        "Understand strict equality (`===`) versus loose equality (`==`) and implicit type coercion.",
        "Leverage logical operators (`&&`, `||`, `!`) for short-circuit evaluation.",
        "Use Nullish Coalescing (`??`) to differentiate between `null`/`undefined` and falsy values like `0` or `\"\"`.",
        "Safely traverse nested structures with Optional Chaining (`?.`)."
      ],
      "estimatedTime": "50 mins",
      "keyTakeaways": [
        "Always use `===` and `!==` to prevent unpredictable implicit type coercion.",
        "Falsy values in JS: `false`, `0`, `-0`, `0n`, `\"\"`, `null`, `undefined`, and `NaN`. All other values are truthy.",
        "`||` returns the right operand if the left is *any falsy value*, whereas `??` returns the right operand *only* if the left is `null` or `undefined`.",
        "Optional chaining `user?.profile?.avatar` short-circuits to `undefined` if any parent reference is nullish."
      ],
      "summary": "Operators form the core computational engine of JavaScript. Strict equality and modern coalescing operators eliminate entire classes of runtime errors.",
      "syntaxGuide": "// Strict equality vs Loose equality\n5 === '5' // false (number vs string)\n5 == '5'  // true (string coerced to number)\n\n// Nullish Coalescing vs Logical OR\nconst timeout = 0;\nconst configA = timeout || 3000; // 3000 (0 is falsy!)\nconst configB = timeout ?? 3000; // 0 (0 is defined!)\n\n// Optional chaining\nconst avatarUrl = user?.settings?.profile?.avatarUrl;",
      "practiceExercises": [
        {
          "title": "Config Sanitizer",
          "instructions": "Write a function `resolvePort(envPort, defaultPort)` that preserves port `0` if explicitly set, but falls back to `defaultPort` if `null` or `undefined`.",
          "starterCode": "function resolvePort(envPort, defaultPort) {\n  // Use nullish coalescing\n}",
          "solutionCode": "function resolvePort(envPort, defaultPort) {\n  return envPort ?? defaultPort;\n}"
        }
      ],
      "sections": [
        {
          "id": "js-beg-03-s1",
          "title": "1. Strict (`===`) vs Loose (`==`) Equality & Coercion",
          "difficulty": "Beginner",
          "explanation": "The double equals (`==`) operator attempts type coercion before comparing values, producing counter-intuitive results such as `0 == \"\"` (true) or `null == undefined` (true). The triple equals (`===`) operator checks both value and type without coercion.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "equality.js",
              "title": "Strict vs Loose Comparison Matrix",
              "code": "console.log(0 == false);        // true (coercion)\nconsole.log(0 === false);       // false (number vs boolean)\n\nconsole.log('' == false);       // true (coercion)\nconsole.log('' === false);      // false\n\nconsole.log(null == undefined);  // true (special loose equality rule)\nconsole.log(null === undefined); // false (different types)\n\nconst inputAge = '25';\nif (inputAge === 25) {\n  console.log('Never runs without conversion');\n}\nif (Number(inputAge) === 25) {\n  console.log('Runs correctly with explicit conversion');\n}",
              "lineByLine": [
                {
                  "line": "0 === false",
                  "explanation": "Strict equality immediately returns false because types (number vs boolean) differ."
                },
                {
                  "line": "Number(inputAge) === 25",
                  "explanation": "Explicit type casting is the professional pattern over loose equality."
                }
              ]
            }
          ]
        },
        {
          "id": "js-beg-03-s2",
          "title": "2. Logical Operators & Short-Circuit Evaluation",
          "difficulty": "Beginner",
          "explanation": "Logical AND (`&&`) returns the first falsy operand or the last truthy operand. Logical OR (`||`) returns the first truthy operand or the last falsy operand. This allows inline guard clauses and default value assignments.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "short_circuit.js",
              "title": "Short-Circuit Execution in Action",
              "code": "const user = { isAuthenticated: true, username: 'Elena' };\n\n// Guard clause with &&: Right side runs only if left is truthy\nuser.isAuthenticated && console.log('Welcome back, ' + user.username);\n\n// Default fallback with ||\nconst displayName = user.nickname || user.username || 'Anonymous';\nconsole.log('Display Name:', displayName); // 'Elena'",
              "explanation": "If `user.isAuthenticated` is false, the console.log is never evaluated."
            }
          ]
        },
        {
          "id": "js-beg-03-s3",
          "title": "3. Nullish Coalescing (`??`) & Optional Chaining (`?.`)",
          "difficulty": "Beginner",
          "explanation": "ES2020 introduced Nullish Coalescing (`??`) to solve the issue where falsy values (`0`, `false`, `\"\"`) were accidentally replaced when using `||`. Combined with Optional Chaining (`?.`), it provides concise, safe property reads on potentially missing objects.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "modern_operators.js",
              "title": "Defensive Property Access and Defaults",
              "code": "const appConfig = {\n  notifications: {\n    unreadCount: 0,\n    soundEnabled: false\n  }\n};\n\n// Logical OR vs Nullish Coalescing:\nconst countWithOR = appConfig.notifications.unreadCount || 10;\nconst countWithNullish = appConfig.notifications.unreadCount ?? 10;\n\nconsole.log(countWithOR);      // 10 (Incorrect! 0 was treated as missing)\nconsole.log(countWithNullish); // 0 (Correct! 0 was preserved)\n\n// Safe deeply-nested access:\nconst soundVolume = appConfig?.notifications?.settings?.volume ?? 75;\nconsole.log(soundVolume);      // 75 (settings is undefined, safely caught)",
              "lineByLine": [
                {
                  "line": "appConfig.notifications.unreadCount ?? 10",
                  "explanation": "Evaluates to 0 because 0 is neither null nor undefined."
                },
                {
                  "line": "appConfig?.notifications?.settings?.volume",
                  "explanation": "Safely stops traversal when settings is undefined without throwing TypeError."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What is the output of `0 ?? 42` versus `0 || 42`?",
            "options": [
              "0 and 0",
              "42 and 42",
              "0 and 42",
              "42 and 0"
            ],
            "correctAnswer": 2,
            "explanation": "`0 ?? 42` evaluates to 0 because 0 is not nullish. `0 || 42` evaluates to 42 because 0 is falsy."
          }
        }
      ]
    }
  },
  {
    "id": "js-beg-04",
    "orderIndex": 4,
    "title": "Conditions and Decision Making",
    "description": "Structure complex branch logic using if/else if/else, switch/case statements, guard clauses, and ternary operators.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 100,
    "level": "beginner",
    "type": "theory",
    "lessonContent": {
      "overview": "Conditional statements direct code execution down distinct logical paths based on Boolean expressions. Clean conditionals avoid deeply nested \"pyramid of doom\" structures by utilizing guard clauses and lookup tables.",
      "analogyHero": "Think of conditional branching like railway track switches: a sensor checks the destination code of an oncoming train and switches the track ahead to route the train to platform A, B, or maintenance siding.",
      "objectives": [
        "Master `if`, `else if`, and `else` decision trees.",
        "Use `switch` statements with proper `break` and `default` handling for multi-case matching.",
        "Refactor nested conditionals into clean, early-exit guard clauses.",
        "Apply ternary expressions (`condition ? exprA : exprB`) for inline value assignments.",
        "Avoid common pitfalls like assignment inside conditionals (`if (x = 5)`)."
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Guard clauses (early returns) flatten nested conditional trees and enhance readability.",
        "Always include a `default` case in `switch` statements to capture unexpected input values.",
        "Use ternary operators only for simple, single-line value assignments; avoid nested ternaries.",
        "Be cautious of accidental assignment (`=`) inside `if` statements instead of comparison (`===`)."
      ],
      "summary": "Well-structured branch logic makes software maintainable. Prioritizing guard clauses over nested indentation keeps code flat and readable.",
      "syntaxGuide": "// Guard clause pattern (Flat & clean)\nfunction processPayment(user, amount) {\n  if (!user.isLoggedIn) return { error: 'Auth required' };\n  if (amount <= 0) return { error: 'Invalid amount' };\n  if (user.balance < amount) return { error: 'Insufficient funds' };\n\n  user.balance -= amount;\n  return { success: true, balance: user.balance };\n}",
      "practiceExercises": [
        {
          "title": "Role-Based Access Checker",
          "instructions": "Write a function `canAccessAdmin(user)` that returns true only if user is logged in, email is verified, and role is \"admin\" or \"superadmin\".",
          "starterCode": "function canAccessAdmin(user) {\n  // Use guard clauses\n}",
          "solutionCode": "function canAccessAdmin(user) {\n  if (!user?.isLoggedIn) return false;\n  if (!user?.emailVerified) return false;\n  return user.role === 'admin' || user.role === 'superadmin';\n}"
        }
      ],
      "sections": [
        {
          "id": "js-beg-04-s1",
          "title": "1. If-Else Control Trees & Guard Clauses",
          "difficulty": "Beginner",
          "explanation": "Nested if statements create cognitive complexity. The Guard Clause pattern inverts condition checks to return or throw early, allowing the happy path to remain un-nested at the primary indentation level.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "guard_clauses.js",
              "title": "Refactoring Nested Logic into Guard Clauses",
              "code": "// ❌ Deeply Nested (Anti-pattern)\nfunction registerUserOld(user) {\n  if (user) {\n    if (user.email) {\n      if (user.email.includes('@')) {\n        return 'Registered: ' + user.email;\n      } else {\n        return 'Invalid email';\n      }\n    } else {\n      return 'Missing email';\n    }\n  } else {\n    return 'Missing user';\n  }\n}\n\n// ✅ Clean Guard Clauses (Professional Pattern)\nfunction registerUser(user) {\n  if (!user) return 'Missing user';\n  if (!user.email) return 'Missing email';\n  if (!user.email.includes('@')) return 'Invalid email';\n\n  return `Registered: ${user.email}`;\n}",
              "lineByLine": [
                {
                  "line": "if (!user) return \"Missing user\"",
                  "explanation": "Immediately exits if input is nullish, preventing null property exceptions."
                },
                {
                  "line": "return `Registered: ${user.email}`",
                  "explanation": "Main business logic executes cleanly with no nested indentation."
                }
              ]
            }
          ]
        },
        {
          "id": "js-beg-04-s2",
          "title": "2. Switch Statements & Strict Case Matching",
          "difficulty": "Beginner",
          "explanation": "When evaluating a single variable against multiple discrete values, `switch` provides a structured alternative to repetitive `else if` blocks. `switch` uses strict equality (`===`) for matching and requires `break` to prevent fall-through.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "switch_demo.js",
              "title": "Order Status Pipeline with Switch",
              "code": "function getStatusBadge(status) {\n  switch (status) {\n    case 'pending':\n      return { color: 'amber', label: 'Awaiting Payment' };\n    case 'processing':\n    case 'packaging': // Intentional fall-through grouping\n      return { color: 'blue', label: 'In Fulfillment' };\n    case 'shipped':\n      return { color: 'purple', label: 'In Transit' };\n    case 'delivered':\n      return { color: 'green', label: 'Completed' };\n    default:\n      return { color: 'gray', label: 'Unknown Status' };\n  }\n}\n\nconsole.log(getStatusBadge('packaging')); // { color: 'blue', label: 'In Fulfillment' }",
              "explanation": "Grouping `processing` and `packaging` shares handler logic via intentional fall-through before the return statement."
            }
          ]
        },
        {
          "id": "js-beg-04-s3",
          "title": "3. Ternary Operators for Inline Assignments",
          "difficulty": "Beginner",
          "explanation": "The ternary operator `condition ? exprIfTrue : exprIfFalse` evaluates an expression and returns a value. It should be used exclusively for succinct value selection, never for executing multi-statement side effects.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "ternary.js",
              "title": "Clean Ternary Assignments",
              "code": "const userScore = 88;\nconst letterGrade = userScore >= 90 ? 'A' : userScore >= 80 ? 'B' : 'C';\n\nconst isAuthenticated = true;\nconst greeting = `Welcome, ${isAuthenticated ? 'Member' : 'Guest'}!`;\n\nconsole.log(letterGrade); // 'B'\nconsole.log(greeting);    // 'Welcome, Member!'",
              "lineByLine": [
                {
                  "line": "isAuthenticated ? \"Member\" : \"Guest\"",
                  "explanation": "Inline conditional expression embedded directly inside template literal."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What happens in a switch statement if a `case` block matches but omits a `break` or `return` statement?",
            "options": [
              "An error is thrown immediately",
              "Execution falls through into the subsequent case block",
              "The switch statement restarts from the beginning",
              "Only the default block executes"
            ],
            "correctAnswer": 1,
            "explanation": "Without `break` or `return`, execution continues unconditionally into the next `case` block regardless of whether its test value matches (case fall-through)."
          }
        }
      ]
    }
  },
  {
    "id": "js-beg-05",
    "orderIndex": 5,
    "title": "Loops and Repetition",
    "description": "Master iteration using for, while, do...while, for...of, and for...in loops, with break and continue control flow.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 100,
    "level": "beginner",
    "type": "theory",
    "lessonContent": {
      "overview": "Loops automate repetitive tasks across collections and counters. JavaScript provides traditional index-based loops (`for`), condition-based loops (`while`, `do...while`), iterable collection traversal (`for...of`), and object key enumeration (`for...in`).",
      "analogyHero": "Think of an automated assembly line: a `for` loop inspects a fixed batch of 100 items, a `while` loop runs the conveyor belt until an empty sensor triggers, and `continue` skips a defective part without stopping the whole belt.",
      "objectives": [
        "Write classic indexed `for` loops with initialization, condition, and increment expressions.",
        "Use `while` and `do...while` loops when iteration counts depend on dynamic runtime conditions.",
        "Traverse arrays and iterables cleanly with `for...of`.",
        "Enumerate object properties with `for...in` and understand prototype inheritance implications.",
        "Control loop execution flow using `break` (exit loop) and `continue` (skip current iteration)."
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Use `for...of` for arrays, strings, maps, and sets; use `for...in` strictly for object key enumeration.",
        "Always ensure `while` loop conditions have a guaranteed termination path to avoid infinite loops.",
        "`break` terminates the entire loop immediately; `continue` skips the rest of the current iteration.",
        "`do...while` guarantees the loop body executes at least once before checking the condition."
      ],
      "summary": "Choosing the right loop construct ensures clarity and prevents performance bottlenecks. `for...of` is the modern default for iterating over sequence collections.",
      "syntaxGuide": "// Array iteration:\nconst skills = ['JavaScript', 'TypeScript', 'Node.js'];\nfor (const skill of skills) {\n  console.log('Skill:', skill);\n}\n\n// Object property iteration:\nconst metrics = { cpu: 45, memory: 70, disk: 30 };\nfor (const key in metrics) {\n  if (Object.hasOwn(metrics, key)) {\n    console.log(`${key}: ${metrics[key]}%`);\n  }\n}",
      "practiceExercises": [
        {
          "title": "Even Number Collector",
          "instructions": "Write a function `getEvensUpTo(max)` that uses a loop with `continue` to collect all even integers from 2 up to `max` into an array.",
          "starterCode": "function getEvensUpTo(max) {\n  const evens = [];\n  // loop from 1 to max\n  return evens;\n}",
          "solutionCode": "function getEvensUpTo(max) {\n  const evens = [];\n  for (let i = 1; i <= max; i++) {\n    if (i % 2 !== 0) continue;\n    evens.push(i);\n  }\n  return evens;\n}"
        }
      ],
      "sections": [
        {
          "id": "js-beg-05-s1",
          "title": "1. Standard `for` Loops vs `while` Loops",
          "difficulty": "Beginner",
          "explanation": "A standard `for` loop is optimal when the exact number of iterations is known in advance. A `while` loop is preferred when looping until a dynamic condition changes (such as polling a queue or reading stream chunks).",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "loops_basic.js",
              "title": "For and While Loop Workflows",
              "code": "// Counting loop\nconst scores = [88, 92, 79, 95, 100];\nlet total = 0;\nfor (let i = 0; i < scores.length; i++) {\n  total += scores[i];\n}\nconsole.log('Average score:', total / scores.length);\n\n// Condition-based polling loop\nlet queueSize = 5;\nwhile (queueSize > 0) {\n  console.log(`Processing job... Remaining: ${queueSize}`);\n  queueSize--; // Must decrement to avoid infinite loop\n}",
              "lineByLine": [
                {
                  "line": "for (let i = 0; i < scores.length; i++)",
                  "explanation": "Initializes index counter i, checks bounds, and increments per step."
                },
                {
                  "line": "queueSize--",
                  "explanation": "Updates the condition variable so the while loop can terminate."
                }
              ]
            }
          ]
        },
        {
          "id": "js-beg-05-s2",
          "title": "2. Modern Iteration: `for...of` vs `for...in`",
          "difficulty": "Beginner",
          "explanation": "`for...of` iterates over iterable values (arrays, strings, sets). `for...in` iterates over enumerable property keys of an object. Using `for...in` on an array is an anti-pattern because keys are strings and iteration order is not guaranteed.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "for_of_vs_in.js",
              "title": "Comparing for...of and for...in",
              "code": "const tools = ['Git', 'Vite', 'ESLint'];\n\n// ✅ for...of yields values directly\nfor (const tool of tools) {\n  console.log('Tool:', tool); // 'Git', 'Vite', 'ESLint'\n}\n\nconst serverConfig = { host: 'localhost', port: 3000, ssl: true };\n\n// ✅ for...in yields object property names (keys)\nfor (const prop in serverConfig) {\n  console.log(`Key: ${prop} -> Value: ${serverConfig[prop]}`);\n}",
              "explanation": "`for...of` reads direct values from iterable collections cleanly without managing numerical array indexes."
            }
          ]
        },
        {
          "id": "js-beg-05-s3",
          "title": "3. Loop Flow Control: `break` and `continue`",
          "difficulty": "Beginner",
          "explanation": "`break` immediately halts the loop and jumps to the statement following the loop body. `continue` abandons the remainder of the current iteration step and proceeds to the next cycle.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "loop_control.js",
              "title": "Filtering and Early Termination with Break & Continue",
              "code": "const transactions = [120, -50, 300, -9999, 450]; // -9999 is security flag\n\nfor (const amount of transactions) {\n  if (amount === -9999) {\n    console.warn('Security flag detected! Halting batch.');\n    break; // Stops processing remaining items\n  }\n  if (amount < 0) {\n    console.log(`Skipping refund: ${Math.abs(amount)}`);\n    continue; // Skips to next transaction\n  }\n  console.log(`Processing credit: ${amount}`);\n}",
              "lineByLine": [
                {
                  "line": "break;",
                  "explanation": "Terminates the loop immediately when -9999 is encountered."
                },
                {
                  "line": "continue;",
                  "explanation": "Bypasses credit logging for negative numbers and proceeds to next iteration."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Which loop construct is specifically designed to iterate over values of an Array or String?",
            "options": [
              "for...in",
              "for...of",
              "switch",
              "do...while"
            ],
            "correctAnswer": 1,
            "explanation": "`for...of` iterates over the values of iterable objects (such as Arrays, Strings, Sets, and Maps)."
          }
        }
      ]
    }
  },
  {
    "id": "js-beg-06",
    "orderIndex": 6,
    "title": "Functions and Parameters",
    "description": "Master function declarations, expressions, arrow functions, parameter defaults, rest parameters, and pure functions.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 100,
    "level": "beginner",
    "type": "theory",
    "lessonContent": {
      "overview": "Functions are first-class citizen blocks of reusable code designed to perform computations or side-effects. JavaScript supports multiple syntax paradigms including function declarations, function expressions, and concise arrow functions.",
      "analogyHero": "A function is like a certified culinary recipe: you supply raw ingredients (parameters), the kitchen follows exact step-by-step instructions, and it serves up a finished gourmet dish (return value).",
      "objectives": [
        "Differentiate between Function Declarations (hoisted) and Function Expressions (non-hoisted).",
        "Master Arrow Function syntax (`() => {}`) and concise implicit return expressions.",
        "Use default parameter values to eliminate defensive initialization boilerplate.",
        "Collect arbitrary argument lists into real arrays using rest parameters (`...args`).",
        "Understand the principles of Pure Functions (deterministic output, zero side effects)."
      ],
      "estimatedTime": "55 mins",
      "keyTakeaways": [
        "Function declarations are hoisted with their complete implementation, allowing calls before declaration.",
        "Arrow functions do not bind their own `this`, `arguments`, or `super` context.",
        "Rest parameters (`...params`) must always be the final parameter in a function signature.",
        "Pure functions make applications predictable, easily testable, and parallelizable."
      ],
      "summary": "Functions are the primary building block of modular JavaScript. Combining arrow functions, default parameters, and rest syntax enables elegant, declarative code.",
      "syntaxGuide": "// Function Declaration (Hoisted)\nfunction calculateTotal(subtotal, taxRate = 0.08) {\n  return subtotal + (subtotal * taxRate);\n}\n\n// Arrow Function with concise implicit return\nconst formatCurrency = (amount) => `${amount.toFixed(2)}`;\n\n// Rest parameters\nconst sumAll = (...numbers) => numbers.reduce((acc, n) => acc + n, 0);",
      "practiceExercises": [
        {
          "title": "Tax & Discount Calculator",
          "instructions": "Create an arrow function `calculateFinalPrice(price, discount = 0, tax = 0.1)` that calculates price after discount, then adds tax.",
          "starterCode": "const calculateFinalPrice = (price, discount = 0, tax = 0.1) => {\n  // Return final calculated amount\n};",
          "solutionCode": "const calculateFinalPrice = (price, discount = 0, tax = 0.1) => {\n  const discounted = price - (price * discount);\n  return discounted + (discounted * tax);\n};"
        }
      ],
      "sections": [
        {
          "id": "js-beg-06-s1",
          "title": "1. Function Declarations vs Arrow Functions",
          "difficulty": "Beginner",
          "explanation": "Function declarations begin with the `function` keyword and are hoisted completely to the top of their enclosing scope. Arrow functions provide a concise syntax and lexical `this` binding, with implicit return when omitting curly braces for single-expression bodies.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "function_styles.js",
              "title": "Comparing Function Syntax Variations",
              "code": "// 1. Function Declaration (Hoisted)\nconsole.log(multiply(4, 5)); // 20 (Works before definition!)\nfunction multiply(a, b) {\n  return a * b;\n}\n\n// 2. Function Expression (Not hoisted)\nconst divide = function(a, b) {\n  return a / b;\n};\n\n// 3. Arrow Function with explicit body\nconst subtract = (a, b) => {\n  return a - b;\n};\n\n// 4. Arrow Function with concise implicit return\nconst add = (a, b) => a + b;",
              "lineByLine": [
                {
                  "line": "function multiply(a, b)",
                  "explanation": "Hoisted to top of scope with full body intact."
                },
                {
                  "line": "const add = (a, b) => a + b;",
                  "explanation": "Implicit return: evaluates expression and returns result automatically without return keyword."
                }
              ]
            }
          ]
        },
        {
          "id": "js-beg-06-s2",
          "title": "2. Default Parameters & Rest Parameters (`...args`)",
          "difficulty": "Beginner",
          "explanation": "Default parameters assign fallback values if an argument is omitted or passed as `undefined`. Rest parameters collect an arbitrary number of trailing arguments into a standard JavaScript array, replacing the legacy `arguments` object.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "params_demo.js",
              "title": "Modern Parameter Patterns",
              "code": "// Default parameters\nfunction createAccount(username, tier = 'free', region = 'us-east') {\n  return { username, tier, region, createdAt: new Date().toISOString() };\n}\n\nconsole.log(createAccount('jordan'));\n// { username: 'jordan', tier: 'free', region: 'us-east', ... }\n\n// Rest parameter collecting variable arguments\nfunction logEvent(category, severity, ...details) {\n  console.log(`[${category.toUpperCase()}] Severity: ${severity}`);\n  console.log('Event Metadata Details:', details);\n}\n\nlogEvent('auth', 'warning', 'IP: 192.168.1.1', 'Attempt: 3', 'User: admin');",
              "explanation": "`...details` bundles all trailing string parameters into a clean array `[\"IP: ...\", \"Attempt: ...\", \"User: ...\"]`."
            }
          ]
        },
        {
          "id": "js-beg-06-s3",
          "title": "3. Pure Functions and Deterministic Execution",
          "difficulty": "Beginner",
          "explanation": "A function is considered \"pure\" if: 1. Given the same inputs, it always returns the exact same output. 2. It produces zero observable side effects (does not modify outside variables, alter arguments, write to disks, or mutate DOM).",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "pure_functions.js",
              "title": "Impure vs Pure Functions",
              "code": "// ❌ Impure: Mutates outside state & non-deterministic\nlet globalTaxRate = 0.05;\nfunction impureCalculate(amount) {\n  globalTaxRate += 0.01; // Side-effect: Mutates outside variable!\n  return amount * (1 + globalTaxRate);\n}\n\n// ✅ Pure: Deterministic & zero side effects\nfunction pureCalculate(amount, taxRate) {\n  return amount * (1 + taxRate);\n}\n\nconsole.log(pureCalculate(100, 0.05)); // Always 105\nconsole.log(pureCalculate(100, 0.05)); // Always 105",
              "lineByLine": [
                {
                  "line": "function pureCalculate(amount, taxRate)",
                  "explanation": "Depends solely on its explicit parameters with zero external mutations."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Which of the following describes a key characteristic of Arrow Functions?",
            "options": [
              "They are hoisted with their implementation",
              "They do not have their own `this` context",
              "They must always include the `function` keyword",
              "They cannot accept rest parameters"
            ],
            "correctAnswer": 1,
            "explanation": "Arrow functions do not bind their own `this`; they lexically inherit `this` from the surrounding parent scope."
          }
        }
      ]
    }
  },
  {
    "id": "js-beg-07",
    "orderIndex": 7,
    "title": "Scope, Hoisting, and Closures Introduction",
    "description": "Understand lexical scoping, the scope chain, variable hoisting, the Temporal Dead Zone (TDZ), and practical closures.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 100,
    "level": "beginner",
    "type": "theory",
    "lessonContent": {
      "overview": "Scope determines the accessibility (visibility) of variables in different parts of code. JavaScript uses lexical scoping (where functions resolve variables based on where they were written in source code) and creates closures when inner functions retain references to outer scope variables.",
      "analogyHero": "Think of one-way tinted glass windows: people inside a private executive office can look out and see everything happening in the open bullpen, but people in the bullpen cannot see inside the private office.",
      "objectives": [
        "Master Global Scope, Function Scope, and Block Scope.",
        "Understand the Lexical Scope Chain and variable resolution from inside out.",
        "Analyze variable and function hoisting behaviors during the compilation phase.",
        "Understand the Temporal Dead Zone (TDZ) for `let` and `const`.",
        "Learn the foundational mechanics of Closures for data privacy."
      ],
      "estimatedTime": "55 mins",
      "keyTakeaways": [
        "Inner scopes can access outer variables, but outer scopes cannot access inner variables.",
        "`let` and `const` are hoisted to the top of their block, but remain in the TDZ until initialized.",
        "A closure gives an inner function access to its outer enclosing function's scope even after the outer function has finished executing.",
        "Closures are widely used for data encapsulation and factory functions."
      ],
      "summary": "Scoping and closures are foundational to JavaScript architecture. Mastering the scope chain eliminates variable shadowing and unintentional memory leaks.",
      "syntaxGuide": "// Closure Example: Data Encapsulation\nfunction createCounter(initialValue = 0) {\n  let count = initialValue; // Private variable encapsulated in closure\n\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    getValue: () => count\n  };\n}\n\nconst counter = createCounter(10);\ncounter.increment(); // 11\nconsole.log(counter.getValue()); // 11",
      "practiceExercises": [
        {
          "title": "Secret Keeper with Closure",
          "instructions": "Write a function `createSecretHolder(secret)` that returns an object with `getSecret()` and `setSecret(newSecret)`. The secret variable must not be directly accessible on the returned object.",
          "starterCode": "function createSecretHolder(secret) {\n  // Encapsulate secret in closure\n}",
          "solutionCode": "function createSecretHolder(secret) {\n  let _secret = secret;\n  return {\n    getSecret: () => _secret,\n    setSecret: (newSecret) => { _secret = newSecret; }\n  };\n}"
        }
      ],
      "sections": [
        {
          "id": "js-beg-07-s1",
          "title": "1. Lexical Scope & The Scope Chain",
          "difficulty": "Beginner",
          "explanation": "Lexical scope means that variable scope is determined by the physical placement of variables and blocks in source code at compile time. When a variable is referenced, the engine searches the local scope first, then moves outward along the scope chain until reaching the global scope.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "scope_chain.js",
              "title": "Traversing the Lexical Scope Chain",
              "code": "const globalApiKey = 'LIVE_KEY_9981';\n\nfunction outerService() {\n  const serviceName = 'AuthenticationService';\n\n  function innerHandler() {\n    const requestId = 'req_abc123';\n    // Accesses local, outer function, and global scopes:\n    console.log(`[${serviceName}] ${requestId} using Key: ${globalApiKey}`);\n  }\n\n  innerHandler();\n  // console.log(requestId); // ReferenceError: requestId is not defined in outerService\n}\n\nouterService();",
              "lineByLine": [
                {
                  "line": "const requestId = ...",
                  "explanation": "Enclosed strictly inside innerHandler; invisible to outerService."
                },
                {
                  "line": "console.log(...globalApiKey)",
                  "explanation": "Resolves all the way up to global scope."
                }
              ]
            }
          ]
        },
        {
          "id": "js-beg-07-s2",
          "title": "2. Hoisting & The Temporal Dead Zone (TDZ)",
          "difficulty": "Beginner",
          "explanation": "During the creation phase of execution context, the engine allocates memory for declarations. `var` is hoisted and initialized as `undefined`. `let` and `const` are hoisted but uninitialized; accessing them before declaration throws a `ReferenceError` because they are in the TDZ.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "tdz_demo.js",
              "title": "Hoisting Behaviors and TDZ",
              "code": "// var hoisting (Legacy behavior)\nconsole.log(legacyVar); // undefined (No error, but confusing!)\nvar legacyVar = 'Value';\n\n// let / const TDZ (Modern behavior)\ntry {\n  // @ts-ignore\n  console.log(modernLet); // Throws ReferenceError!\n  let modernLet = 'Initialized';\n} catch (err) {\n  console.log('Caught TDZ Error:', err.message);\n}",
              "explanation": "The TDZ prevents variables from being accessed before their explicit initialization line runs."
            }
          ]
        },
        {
          "id": "js-beg-07-s3",
          "title": "3. Introduction to Closures",
          "difficulty": "Beginner",
          "explanation": "A closure is the combination of a function bundled together with references to its surrounding lexical environment. This allows the inner function to remember and access variables from its birthplace even when called in a completely different context.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "closure_intro.js",
              "title": "Function Factory via Closure",
              "code": "function createMultiplier(factor) {\n  // 'factor' is captured by the inner function's closure\n  return function(number) {\n    return number * factor;\n  };\n}\n\nconst double = createMultiplier(2);\nconst triple = createMultiplier(3);\n\nconsole.log(double(15)); // 30\nconsole.log(triple(15)); // 45",
              "lineByLine": [
                {
                  "line": "return function(number)",
                  "explanation": "Returns a new function holding a closure reference to `factor`."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What happens if you attempt to read a `let` variable before its declaration line in source code?",
            "options": [
              "It returns undefined",
              "It returns null",
              "It throws a ReferenceError due to the Temporal Dead Zone",
              "It creates a global variable"
            ],
            "correctAnswer": 2,
            "explanation": "Accessing a `let` or `const` variable before its declaration throws a `ReferenceError` because it resides in the Temporal Dead Zone (TDZ)."
          }
        }
      ]
    }
  },
  {
    "id": "js-beg-08",
    "orderIndex": 8,
    "title": "Strings and Template Literals",
    "description": "Master string manipulation, indexing, search methods, slicing, case conversion, and dynamic multi-line template literals.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 100,
    "level": "beginner",
    "type": "theory",
    "lessonContent": {
      "overview": "Strings represent textual data as immutable sequences of 16-bit UTF-16 code units. ES6 template literals revolutionized text construction with embedded expressions, multi-line formatting, and interpolation.",
      "analogyHero": "Think of traditional string concatenation (`\"Hello \" + name + \"!\"`) like manually gluing individual wooden alphabet blocks together, whereas template literals (`` `Hello ${name}!` ``) are like a modern digital display that injects dynamic text into formatted templates effortlessly.",
      "objectives": [
        "Master string indexing, `.length` property, and character extraction.",
        "Use modern search methods: `.includes()`, `.startsWith()`, `.endsWith()`, and `.indexOf()`.",
        "Extract and transform text with `.slice()`, `.substring()`, `.replace()`, and `.replaceAll()`.",
        "Format whitespace with `.trim()`, `.trimStart()`, and `.trimEnd()`.",
        "Construct dynamic multi-line text and HTML templates with template literals."
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Strings are immutable; string methods always return brand new strings without altering original variables.",
        "Prefer `.slice(start, end)` over legacy `.substring()` or deprecated `.substr()`.",
        "Template literals evaluate arbitrary JavaScript expressions inside `${ ... }`.",
        "Use `.replaceAll()` or RegExp with `/g` flag when replacing all occurrences of a substring."
      ],
      "summary": "Proficiency in string methods and template literals is essential for data sanitization, URL building, and dynamic DOM template rendering.",
      "syntaxGuide": "// Template Literals with Expressions\nconst item = 'Mechanical Keyboard';\nconst price = 129.99;\nconst quantity = 2;\n\nconst invoice = `Order Summary:\n- Item: ${item}\n- Subtotal: ${(price * quantity).toFixed(2)}\n- Status: ${quantity > 0 ? 'In Stock' : 'Backordered'}`;",
      "practiceExercises": [
        {
          "title": "Slug Generator",
          "instructions": "Write a function `slugify(title)` that trims whitespace, converts text to lowercase, and replaces spaces with hyphens.",
          "starterCode": "function slugify(title) {\n  // Return clean slug\n}",
          "solutionCode": "function slugify(title) {\n  return title.trim().toLowerCase().replaceAll(' ', '-');\n}"
        }
      ],
      "sections": [
        {
          "id": "js-beg-08-s1",
          "title": "1. Modern Search & Inspection Methods",
          "difficulty": "Beginner",
          "explanation": "Modern JavaScript provides semantic boolean search methods (`includes`, `startsWith`, `endsWith`) that eliminate the awkward `indexOf(...) !== -1` pattern.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "string_search.js",
              "title": "Searching Substrings Semantically",
              "code": "const filename = 'user_avatar_2026.png';\n\nconsole.log(filename.includes('avatar'));    // true\nconsole.log(filename.startsWith('user_'));   // true\nconsole.log(filename.endsWith('.png'));      // true\n\nconst email = '  STUDENT@SKILLORA.AI  ';\nconst cleanEmail = email.trim().toLowerCase();\nconsole.log(cleanEmail); // 'student@skillora.ai'",
              "lineByLine": [
                {
                  "line": "filename.endsWith(\".png\")",
                  "explanation": "Verifies file extension cleanly."
                },
                {
                  "line": "email.trim().toLowerCase()",
                  "explanation": "Method chaining: strips leading/trailing whitespace and normalizes casing."
                }
              ]
            }
          ]
        },
        {
          "id": "js-beg-08-s2",
          "title": "2. Extraction and Replacement: `slice` and `replace`",
          "difficulty": "Beginner",
          "explanation": "`.slice(startIndex, endIndex)` extracts a section of a string without modifying the original. Negative indices count backward from the end of the string. `.replaceAll()` updates all matching substrings.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "string_manipulation.js",
              "title": "Slicing and Replacing Text",
              "code": "const invoiceCode = 'INV-2026-90812';\nconst year = invoiceCode.slice(4, 8); // '2026'\nconst id = invoiceCode.slice(-5);     // '90812' (last 5 chars)\n\nconsole.log(`Year: ${year}, ID: ${id}`);\n\nconst rawText = 'Apples are red. Apples taste great.';\nconst updatedText = rawText.replaceAll('Apples', 'Strawberries');\nconsole.log(updatedText); // 'Strawberries are red. Strawberries taste great.'",
              "explanation": "Negative indexes in `.slice()` allow effortless extraction from the end of dynamic-length strings."
            }
          ]
        },
        {
          "id": "js-beg-08-s3",
          "title": "3. Template Literals & Multi-line Formatting",
          "difficulty": "Beginner",
          "explanation": "Template literals enclosed by backticks (`` ` ``) support multi-line strings without escape sequences and interpolate expressions via `${}`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "template_literals.js",
              "title": "Dynamic HTML Generation with Template Literals",
              "code": "const product = { name: 'Ergonomic Desk', price: 349.50, onSale: true };\n\nconst productCardHtml = `\n  <div class=\"product-card ${product.onSale ? 'badge-sale' : ''}\">\n    <h3>${product.name}</h3>\n    <p class=\"price\">${product.price.toFixed(2)}</p>\n    <button>${product.onSale ? 'Buy on Sale' : 'Add to Cart'}</button>\n  </div>\n`.trim();\n\nconsole.log(productCardHtml);",
              "lineByLine": [
                {
                  "line": "`${product.name}`",
                  "explanation": "Injects evaluated property directly into markup string."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Which method should you use to extract the last 4 characters of any string `str`?",
            "options": [
              "str.substring(0, 4)",
              "str.slice(-4)",
              "str.splice(-4)",
              "str.split(4)"
            ],
            "correctAnswer": 1,
            "explanation": "`str.slice(-4)` extracts characters starting 4 positions from the end of the string."
          }
        }
      ]
    }
  },
  {
    "id": "js-beg-09",
    "orderIndex": 9,
    "title": "Arrays and Array Methods",
    "description": "Master ordered list collections, indexing, mutative operations (push, pop, shift, unshift, splice), and non-mutative methods (slice, concat, join).",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 100,
    "level": "beginner",
    "type": "theory",
    "lessonContent": {
      "overview": "Arrays are ordered, integer-indexed collections capable of holding elements of any data type. Mastering array manipulation techniques—both mutative (in-place) and non-mutative (pure)—is crucial for state management.",
      "analogyHero": "Think of an array like a train of cargo cars: `push` hitches a new car to the back, `pop` decouples the last car, `unshift` adds a car directly behind the locomotive, and `shift` removes the front car.",
      "objectives": [
        "Create and access zero-indexed arrays using bracket notation and `.at()`.",
        "Master mutative stack and queue operations: `push`, `pop`, `shift`, and `unshift`.",
        "Modify arrays in-place using `splice` for insertion, deletion, and replacement.",
        "Perform non-mutative operations using `slice`, `concat`, and `join`.",
        "Check item membership using `includes` and find indices using `indexOf`."
      ],
      "estimatedTime": "50 mins",
      "keyTakeaways": [
        "`push` / `pop` operate at the end of the array ($O(1)$ performance); `unshift` / `shift` operate at the beginning ($O(n)$ re-indexing cost).",
        "`.slice()` returns a shallow copy of a portion of an array without mutating the original.",
        "`.splice()` mutates the original array by removing or replacing existing elements in-place.",
        "ES2022 `.at(-1)` provides convenient negative-index access to retrieve the final element."
      ],
      "summary": "Arrays are the backbone of list processing in JavaScript. Understanding mutative vs non-mutative methods prevents unintended side-effects in application state.",
      "syntaxGuide": "// Modern Array Operations\nconst stack = ['task-1', 'task-2'];\nstack.push('task-3'); // ['task-1', 'task-2', 'task-3']\nconst last = stack.pop(); // 'task-3'\n\n// Negative index with .at()\nconst currentLast = stack.at(-1); // 'task-2'\n\n// Array to string:\nconst tags = ['javascript', 'frontend', 'es6'];\nconst tagString = tags.join(', '); // \"javascript, frontend, es6\"",
      "practiceExercises": [
        {
          "title": "Queue Dispatcher",
          "instructions": "Create a function `processQueue(tasks)` that removes and logs tasks from the front of the queue using `shift()` until the queue is empty.",
          "starterCode": "function processQueue(tasks) {\n  // Process tasks one by one\n}",
          "solutionCode": "function processQueue(tasks) {\n  const processed = [];\n  while (tasks.length > 0) {\n    const current = tasks.shift();\n    processed.push(current);\n  }\n  return processed;\n}"
        }
      ],
      "sections": [
        {
          "id": "js-beg-09-s1",
          "title": "1. Stack & Queue Operations: `push`, `pop`, `shift`, `unshift`",
          "difficulty": "Beginner",
          "explanation": "Arrays can function as Last-In-First-Out (LIFO) stacks using `push`/`pop` or First-In-First-Out (FIFO) queues using `push`/`shift`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "stacks_queues.js",
              "title": "Stack and Queue Mechanics",
              "code": "const backlog = ['Task A', 'Task B'];\n\n// Stack (End of array)\nbacklog.push('Task C'); // Returns new length: 3\nconst poppedTask = backlog.pop(); // Returns 'Task C'\n\n// Queue (Front of array)\nbacklog.unshift('Urgent Task'); // Prepends to index 0\nconst activeTask = backlog.shift(); // Removes & returns 'Urgent Task'\n\nconsole.log('Final Backlog:', backlog); // ['Task A', 'Task B']",
              "lineByLine": [
                {
                  "line": "backlog.push(\"Task C\")",
                  "explanation": "Appends to end of array in O(1) time complexity."
                },
                {
                  "line": "backlog.shift()",
                  "explanation": "Removes first element, shifting subsequent elements left."
                }
              ]
            }
          ]
        },
        {
          "id": "js-beg-09-s2",
          "title": "2. In-Place Modification with `splice` vs Pure Copying with `slice`",
          "difficulty": "Beginner",
          "explanation": "`splice(startIndex, deleteCount, ...itemsToAdd)` mutates the target array in place. Conversely, `slice(startIndex, endIndex)` creates a new shallow copy without altering the source array.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "splice_vs_slice.js",
              "title": "Splice vs Slice Comparison",
              "code": "const originalLetters = ['a', 'b', 'c', 'd', 'e'];\n\n// Pure extraction with slice (Non-mutating)\nconst sliceResult = originalLetters.slice(1, 4);\nconsole.log('Slice Result:', sliceResult);       // ['b', 'c', 'd']\nconsole.log('Original intact:', originalLetters); // ['a', 'b', 'c', 'd', 'e']\n\n// In-place surgery with splice (Mutating)\nconst removedItems = originalLetters.splice(2, 2, 'X', 'Y');\nconsole.log('Removed by splice:', removedItems); // ['c', 'd']\nconsole.log('Original mutated:', originalLetters); // ['a', 'b', 'X', 'Y', 'e']",
              "explanation": "`splice` directly mutates `originalLetters` while returning the excised items."
            }
          ]
        },
        {
          "id": "js-beg-09-s3",
          "title": "3. Searching and Joining Arrays",
          "difficulty": "Beginner",
          "explanation": "`includes()` checks for value existence returning a Boolean. `indexOf()` returns the integer index or `-1`. `join(separator)` concatenates array items into a single formatted string.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "search_join.js",
              "title": "Searching and Serialization",
              "code": "const techStack = ['React', 'TypeScript', 'Tailwind'];\n\nconsole.log(techStack.includes('TypeScript')); // true\nconsole.log(techStack.indexOf('Vue'));         // -1\n\nconst csvRow = ['101', 'Jordan Khalil', 'Admin'].join(',');\nconsole.log('CSV Line:', csvRow); // \"101,Jordan Khalil,Admin\"",
              "lineByLine": [
                {
                  "line": "techStack.includes(\"TypeScript\")",
                  "explanation": "Performs strict equality (===) search across items."
                },
                {
                  "line": "join(\",\")",
                  "explanation": "Converts all items to strings and joins them with comma delimiter."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Which method removes elements from an array in-place and can optionally insert new elements in their place?",
            "options": [
              "slice()",
              "splice()",
              "split()",
              "concat()"
            ],
            "correctAnswer": 1,
            "explanation": "`splice()` mutates the original array in-place by removing and/or inserting elements at specified indices."
          }
        }
      ]
    }
  },
  {
    "id": "js-beg-10",
    "orderIndex": 10,
    "title": "Objects and Object Methods",
    "description": "Master key-value dictionaries, property access, computed property keys, Object.keys/values/entries, and object destructuring.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 100,
    "level": "beginner",
    "type": "theory",
    "lessonContent": {
      "overview": "Objects are composite data structures that store collections of keyed properties and methods. They form the primary vehicle for representing entities, domain models, and application state in JavaScript.",
      "analogyHero": "Think of an object like a digital passport: it contains labeled fields (name, nationality, expiration date) and stamps (nested data), where each field can be read by looking up its exact label.",
      "objectives": [
        "Create objects using literal syntax and access properties with dot and bracket notation.",
        "Dynamically assign, update, and delete object properties.",
        "Use computed property names (`[dynamicKey]: value`) during initialization.",
        "Extract data using `Object.keys()`, `Object.values()`, and `Object.entries()`.",
        "Apply basic object destructuring for clean variable extraction."
      ],
      "estimatedTime": "55 mins",
      "keyTakeaways": [
        "Use dot notation (`obj.prop`) when property names are known identifiers; use bracket notation (`obj[key]`) for dynamic variables or special characters.",
        "`Object.entries(obj)` returns an array of `[key, value]` pairs, ideal for iterating with `for...of`.",
        "Object destructuring `{ title, price } = course` extracts named properties directly into local variables.",
        "Deleting properties with `delete obj.prop` mutates the object and de-optimizes hidden classes in V8."
      ],
      "summary": "Objects structure data throughout JavaScript programs. Mastery of object methods and destructuring syntax creates concise, highly readable code.",
      "syntaxGuide": "// Object creation and destructuring\nconst user = {\n  id: 101,\n  name: 'Alex Rivera',\n  role: 'Developer',\n  skills: ['JS', 'React']\n};\n\n// Destructuring with renaming and defaults\nconst { name, role: userRole, location = 'Remote' } = user;\n\n// Static introspection methods\nconst keys = Object.keys(user);     // ['id', 'name', 'role', 'skills']\nconst values = Object.values(user); // [101, 'Alex Rivera', ...]\nconst entries = Object.entries(user); // [['id', 101], ...]",
      "practiceExercises": [
        {
          "title": "Object Key-Value Inverter",
          "instructions": "Write a function `invertObject(obj)` that swaps keys and values using `Object.entries()`.",
          "starterCode": "function invertObject(obj) {\n  // Invert { a: '1', b: '2' } -> { '1': 'a', '2': 'b' }\n}",
          "solutionCode": "function invertObject(obj) {\n  const inverted = {};\n  for (const [key, value] of Object.entries(obj)) {\n    inverted[value] = key;\n  }\n  return inverted;\n}"
        }
      ],
      "sections": [
        {
          "id": "js-beg-10-s1",
          "title": "1. Property Access: Dot Notation vs Bracket Notation",
          "difficulty": "Beginner",
          "explanation": "Dot notation is concise but requires valid JavaScript identifier names. Bracket notation allows dynamic variable lookups and keys with spaces, hyphens, or special characters.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "property_access.js",
              "title": "Dynamic Property Evaluation",
              "code": "const serverMetrics = {\n  'cpu-usage': '45%',\n  'memory-usage': '72%',\n  status: 'healthy'\n};\n\n// console.log(serverMetrics.cpu-usage); // SyntaxError (evaluates as minus)\nconsole.log(serverMetrics['cpu-usage']); // '45%' (Bracket notation works!)\n\nconst queryKey = 'memory-usage';\nconsole.log(serverMetrics[queryKey]);    // '72%' (Dynamic variable lookup)",
              "lineByLine": [
                {
                  "line": "serverMetrics[\"cpu-usage\"]",
                  "explanation": "Safely reads keys containing hyphenated strings."
                },
                {
                  "line": "serverMetrics[queryKey]",
                  "explanation": "Evaluates the variable queryKey at runtime to look up the property."
                }
              ]
            }
          ]
        },
        {
          "id": "js-beg-10-s2",
          "title": "2. Static Introspection: `keys`, `values`, `entries`",
          "difficulty": "Beginner",
          "explanation": "The static `Object` utility methods convert object records into iterable arrays, enabling standard array method pipelines over object data.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "object_methods.js",
              "title": "Iterating Objects with Object.entries",
              "code": "const inventory = { apples: 15, oranges: 8, bananas: 24 };\n\n// Calculate total fruit count\nlet totalFruits = 0;\nfor (const [fruit, count] of Object.entries(inventory)) {\n  console.log(`Stock: ${count} ${fruit}`);\n  totalFruits += count;\n}\nconsole.log('Total fruits in inventory:', totalFruits); // 47",
              "explanation": "`Object.entries` combined with array destructuring `[fruit, count]` provides clean iteration over keys and values."
            }
          ]
        },
        {
          "id": "js-beg-10-s3",
          "title": "3. Introduction to Object Destructuring",
          "difficulty": "Beginner",
          "explanation": "Destructuring unpacks values from objects into distinct variables in a single declarative statement, supporting default values and variable aliasing.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "destructuring.js",
              "title": "Unpacking Objects Declaratively",
              "code": "const courseConfig = {\n  courseId: 'js-101',\n  title: 'JavaScript Fundamentals',\n  pricing: { tier: 'pro', cost: 49 }\n};\n\n// Unpacking with renaming and nested destructuring\nconst { title, pricing: { cost }, instructor = 'Staff' } = courseConfig;\n\nconsole.log(`Course: ${title}, Cost: ${cost}, Instructor: ${instructor}`);",
              "lineByLine": [
                {
                  "line": "pricing: { cost }",
                  "explanation": "Nested destructuring extracts `cost` directly from the nested `pricing` object."
                },
                {
                  "line": "instructor = \"Staff\"",
                  "explanation": "Assigns fallback default value because `instructor` was undefined in source object."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Which method returns an array of `[key, value]` pairs for an object?",
            "options": [
              "Object.keys()",
              "Object.values()",
              "Object.entries()",
              "Object.pairs()"
            ],
            "correctAnswer": 2,
            "explanation": "`Object.entries()` returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs."
          }
        }
      ]
    }
  },
  {
    "id": "js-beg-11",
    "orderIndex": 11,
    "title": "DOM Fundamentals",
    "description": "Master the Document Object Model tree, selecting elements with querySelector, manipulating textContent/innerHTML, classList styling, and node creation.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 100,
    "level": "beginner",
    "type": "theory",
    "lessonContent": {
      "overview": "The Document Object Model (DOM) is an object-oriented tree representation of the HTML document. JavaScript interacts with the DOM API to dynamically query elements, update text/attributes, toggle CSS classes, and create or remove nodes.",
      "analogyHero": "Think of the HTML code like a blueprint and the live DOM tree like the actual furnished house: JavaScript is the interior designer that can walk through rooms, repaint walls, swap furniture, or construct new annexes on demand.",
      "objectives": [
        "Understand the DOM tree hierarchy (Document, Elements, TextNodes, Attributes).",
        "Query elements efficiently using `document.getElementById`, `querySelector`, and `querySelectorAll`.",
        "Safely update element content with `textContent` to prevent Cross-Site Scripting (XSS).",
        "Manipulate CSS classes dynamically using `element.classList` (`add`, `remove`, `toggle`, `contains`).",
        "Construct and append new DOM elements using `document.createElement` and `parent.append`."
      ],
      "estimatedTime": "55 mins",
      "keyTakeaways": [
        "`querySelector` returns the first matching Element; `querySelectorAll` returns a static `NodeList`.",
        "Always use `textContent` when rendering user-supplied strings to avoid XSS vulnerabilities inherent in `innerHTML`.",
        "Use `element.classList.toggle(\"class-name\")` for responsive UI state toggling.",
        "Build complex UI nodes in memory before appending to the live DOM tree to minimize browser layout recalculations."
      ],
      "summary": "The DOM is the bridge between JavaScript logic and visual presentation. Clean, safe DOM manipulation is essential for high-performance interactive interfaces.",
      "syntaxGuide": "// Selecting elements\nconst submitBtn = document.querySelector('#submit-btn');\nconst cards = document.querySelectorAll('.card');\n\n// Safe content and class updating\nsubmitBtn.textContent = 'Submitting...';\nsubmitBtn.classList.add('loading', 'disabled');\n\n// Creating and mounting nodes\nconst newCard = document.createElement('div');\nnewCard.className = 'card active';\nnewCard.textContent = 'Dynamic Card';\ndocument.querySelector('#container').append(newCard);",
      "practiceExercises": [
        {
          "title": "Dynamic Alert Banner Creator",
          "instructions": "Write a function `createAlert(message, type = \"info\")` that creates a `div`, assigns classes `alert` and `alert-[type]`, sets `textContent`, and returns the element.",
          "starterCode": "function createAlert(message, type = \"info\") {\n  // Create and return element\n}",
          "solutionCode": "function createAlert(message, type = \"info\") {\n  const alertEl = document.createElement('div');\n  alertEl.className = `alert alert-${type}`;\n  alertEl.textContent = message;\n  return alertEl;\n}"
        }
      ],
      "sections": [
        {
          "id": "js-beg-11-s1",
          "title": "1. Querying the DOM Tree with Modern Selectors",
          "difficulty": "Beginner",
          "explanation": "`document.querySelector()` accepts any standard CSS selector (e.g. `.class`, `#id`, `div > p.highlight`) and returns the first matching element. `querySelectorAll()` returns a static `NodeList` containing all matches.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "dom_selection.js",
              "title": "Modern DOM Selection Patterns",
              "code": "// Selecting single elements\nconst mainHeading = document.querySelector('h1.page-title');\nconst activeTab = document.querySelector('.tab.active');\n\n// Selecting multiple elements and iterating\nconst navLinks = document.querySelectorAll('nav a.nav-link');\n\nnavLinks.forEach((link, index) => {\n  console.log(`Link ${index + 1}: ${link.href}`);\n});",
              "lineByLine": [
                {
                  "line": "document.querySelectorAll(\"nav a.nav-link\")",
                  "explanation": "Queries all matching anchor tags returning an iterable NodeList."
                },
                {
                  "line": "navLinks.forEach(...)",
                  "explanation": "NodeLists support native forEach iteration directly."
                }
              ]
            }
          ]
        },
        {
          "id": "js-beg-11-s2",
          "title": "2. Safe Content & ClassList Manipulation",
          "difficulty": "Beginner",
          "explanation": "Directly assigning un-sanitized user strings to `innerHTML` introduces critical Cross-Site Scripting (XSS) risks. Use `textContent` for plain text. Manipulate styling via `classList` methods instead of direct `style` attribute overrides.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "dom_classes.js",
              "title": "ClassList State Management",
              "code": "const modal = document.querySelector('#settings-modal');\nconst statusBadge = document.querySelector('.status-badge');\n\n// Safe text updates\nstatusBadge.textContent = 'System Operational';\n\n// ClassList API\nmodal.classList.add('visible', 'fade-in');\nmodal.classList.remove('hidden');\n\n// Toggle class based on Boolean condition\nconst isDarkMode = true;\ndocument.body.classList.toggle('dark-theme', isDarkMode);\n\nconsole.log('Has dark theme:', document.body.classList.contains('dark-theme')); // true",
              "explanation": "`classList.toggle(className, booleanForce)` adds or removes the class based on the evaluated boolean flag."
            }
          ]
        },
        {
          "id": "js-beg-11-s3",
          "title": "3. Creating and Appending Elements",
          "difficulty": "Beginner",
          "explanation": "The modern `element.append()` method can append multiple Element nodes or DOMStrings directly to a parent container, superceding legacy `appendChild()`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "dom_creation.js",
              "title": "Building and Mounting DOM Nodes",
              "code": "function renderTaskItem(taskText) {\n  const li = document.createElement('li');\n  li.className = 'task-item';\n\n  const span = document.createElement('span');\n  span.className = 'task-label';\n  span.textContent = taskText;\n\n  const deleteBtn = document.createElement('button');\n  deleteBtn.className = 'btn-delete';\n  deleteBtn.textContent = 'Delete';\n\n  // Append children to li\n  li.append(span, deleteBtn);\n\n  // Mount to list\n  document.querySelector('#task-list').append(li);\n}",
              "lineByLine": [
                {
                  "line": "document.createElement(\"li\")",
                  "explanation": "Instantiates an HTML element in memory before insertion."
                },
                {
                  "line": "li.append(span, deleteBtn)",
                  "explanation": "Appends multiple child nodes in a single operation."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why is `textContent` preferred over `innerHTML` when rendering user-submitted text to a webpage?",
            "options": [
              "textContent parses nested HTML tags faster",
              "textContent automatically sanitizes text, preventing XSS injection attacks",
              "textContent allows rendering HTML tags",
              "innerHTML is deprecated in modern browsers"
            ],
            "correctAnswer": 1,
            "explanation": "`textContent` treats all input strictly as raw text rather than parsing it as executable HTML/script markup, neutralizing Cross-Site Scripting (XSS) vectors."
          }
        }
      ]
    }
  },
  {
    "id": "js-beg-12",
    "orderIndex": 12,
    "title": "Events, Forms, and Beginner Debugging",
    "description": "Master event listeners, event objects, preventDefault, form validation, event bubbling introduction, and browser debugging workflows.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 100,
    "level": "beginner",
    "type": "theory",
    "lessonContent": {
      "overview": "Interactive web applications respond to user actions (clicks, keyboard input, form submissions) via the Event system. Understanding event registration, form event interception, and browser debugging tools enables developers to build responsive, robust applications.",
      "analogyHero": "Think of an event listener like a security doorbell: it sits dormant until someone presses the button (event triggers), which immediately rings a chime inside the house (invokes callback function) and tells the homeowner who is at the door (event object metadata).",
      "objectives": [
        "Register and clean up event listeners using `addEventListener` and `removeEventListener`.",
        "Inspect the `Event` object (`event.target`, `event.currentTarget`, `event.type`).",
        "Intercept form submissions and prevent default page refreshes with `event.preventDefault()`.",
        "Implement real-time client-side form validation.",
        "Diagnose syntax, runtime, and logic errors using browser breakpoints and the debugger."
      ],
      "estimatedTime": "60 mins",
      "keyTakeaways": [
        "Always pass the function reference to `addEventListener`, not the executed function call (e.g. `btn.addEventListener(\"click\", handleClick)`).",
        "Forms natively trigger a full page reload on submit; call `event.preventDefault()` to manage submission asynchronously in JavaScript.",
        "`event.target` refers to the exact element that dispatched the event.",
        "Use the `debugger;` statement or DevTools line breakpoints to pause JavaScript execution and inspect the live call stack."
      ],
      "summary": "Events bring interactivity to web pages. Intercepting form submissions and utilizing browser breakpoints empowers developers to diagnose and resolve errors rapidly.",
      "syntaxGuide": "// Registering an Event Listener\nconst form = document.querySelector('#signup-form');\n\nform.addEventListener('submit', (event) => {\n  event.preventDefault(); // Stop default browser refresh\n\n  const emailInput = form.querySelector('input[name=\"email\"]');\n  const emailValue = emailInput.value.trim();\n\n  if (!emailValue.includes('@')) {\n    alert('Please provide a valid email.');\n    return;\n  }\n\n  console.log('Form validated and submitted:', emailValue);\n});",
      "practiceExercises": [
        {
          "title": "Live Character Counter",
          "instructions": "Attach an `input` event listener to a textarea that updates a character counter span with `currentLength / maxLength`.",
          "starterCode": "const textarea = document.querySelector('#bio-input');\nconst counterSpan = document.querySelector('#char-counter');\n\n// Listen to input event and update textContent",
          "solutionCode": "textarea.addEventListener('input', (e) => {\n  const current = e.target.value.length;\n  const max = e.target.maxLength || 200;\n  counterSpan.textContent = `${current} / ${max}`;\n});"
        }
      ],
      "sections": [
        {
          "id": "js-beg-12-s1",
          "title": "1. `addEventListener` and The Event Object",
          "difficulty": "Beginner",
          "explanation": "`element.addEventListener(eventType, callback)` binds a handler function to an event. When triggered, the browser passes an `Event` object containing rich metadata including timestamp, pointer coordinates, and the target element.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "events_demo.js",
              "title": "Handling Click Events with Event Metadata",
              "code": "const actionBtn = document.querySelector('#action-btn');\n\nactionBtn.addEventListener('click', (event) => {\n  console.log('Event Type:', event.type);\n  console.log('Triggered on Element:', event.target);\n  console.log('Pointer Coordinates:', { x: event.clientX, y: event.clientY });\n\n  // Toggle button active state\n  event.target.classList.toggle('active');\n});",
              "lineByLine": [
                {
                  "line": "actionBtn.addEventListener(\"click\", ...)",
                  "explanation": "Attaches listener without overriding other potential click handlers."
                },
                {
                  "line": "event.clientX, event.clientY",
                  "explanation": "Viewport coordinates of the mouse click."
                }
              ]
            }
          ]
        },
        {
          "id": "js-beg-12-s2",
          "title": "2. Form Handling & `event.preventDefault()`",
          "difficulty": "Beginner",
          "explanation": "Standard HTML `<form>` submissions reload the page with query parameters or POST requests. Modern web applications intercept this with `event.preventDefault()` to validate inputs and process payloads via client-side logic.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "form_validation.js",
              "title": "Client-Side Form Validation Workflow",
              "code": "const loginForm = document.querySelector('#login-form');\n\nloginForm.addEventListener('submit', (e) => {\n  e.preventDefault(); // Stop page reload\n\n  const usernameInput = loginForm.querySelector('#username');\n  const passwordInput = loginForm.querySelector('#password');\n  const errorBox = loginForm.querySelector('.error-message');\n\n  const username = usernameInput.value.trim();\n  const password = passwordInput.value;\n\n  if (username.length < 3) {\n    errorBox.textContent = 'Username must be at least 3 characters.';\n    errorBox.classList.remove('hidden');\n    usernameInput.focus();\n    return;\n  }\n\n  if (password.length < 8) {\n    errorBox.textContent = 'Password must be at least 8 characters.';\n    errorBox.classList.remove('hidden');\n    passwordInput.focus();\n    return;\n  }\n\n  errorBox.classList.add('hidden');\n  console.log('Submission payload verified for:', username);\n});",
              "explanation": "Validates inputs client-side, manages dynamic error messaging, and focuses invalid inputs for improved UX."
            }
          ]
        },
        {
          "id": "js-beg-12-s3",
          "title": "3. Diagnostic Breakpoints & The Debugger Statement",
          "difficulty": "Beginner",
          "explanation": "Instead of scattering `console.log` statements throughout code, inserting the `debugger;` keyword forces the browser DevTools to pause execution at that exact moment, opening the Sources inspector with the full call stack and local variable scope.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "debugger_demo.js",
              "title": "Using Breakpoints for Live Inspection",
              "code": "function calculateTax(subtotal, taxRate) {\n  // If DevTools is open, execution pauses here automatically:\n  // debugger;\n\n  if (typeof subtotal !== 'number' || subtotal < 0) {\n    throw new TypeError('Subtotal must be a positive number');\n  }\n\n  const taxAmount = subtotal * taxRate;\n  const total = subtotal + taxAmount;\n\n  return { subtotal, taxAmount, total };\n}\n\ncalculateTax(150, 0.08);",
              "lineByLine": [
                {
                  "line": "// debugger;",
                  "explanation": "Acts as a programmatic breakpoint when DevTools is open."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What is the purpose of calling `event.preventDefault()` inside a form `submit` event listener?",
            "options": [
              "It clears all input fields in the form",
              "It prevents the default full-page browser reload on submission",
              "It disables the submit button permanently",
              "It submits the form directly to a remote server"
            ],
            "correctAnswer": 1,
            "explanation": "`event.preventDefault()` prevents the default browser behavior of submitting the form via HTTP and reloading the page."
          }
        }
      ]
    }
  },
  {
    "id": "js-beg-p1",
    "orderIndex": 13,
    "title": "Beginner Practical Project: Interactive Task Manager",
    "description": "Build a production-quality, responsive Interactive Task Manager utilizing vanilla JavaScript DOM manipulation, event listeners, form validation, and array state management.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 300,
    "level": "beginner",
    "type": "project",
    "isProject": true,
    "projectDetails": {
      "title": "Interactive Task Manager",
      "category": "Web Development",
      "difficulty": "Beginner",
      "estimatedTime": "3-4 hours",
      "overview": "Develop a fully responsive, interactive Task Manager application built entirely with semantic HTML5, CSS3, and modern Vanilla JavaScript (ES6+). The application manages task lifecycles including addition, input validation, completion toggling, deletion, active counters, and empty-state messaging.",
      "learningObjectives": [
        "Apply JavaScript DOM selection and node creation methods to render dynamic lists.",
        "Implement form submission event listeners and input sanitization.",
        "Maintain a single source of truth using an array of task objects.",
        "Handle state updates (add, toggle complete, delete) and re-render UI cleanly.",
        "Manage conditional empty-state banners and active task counters."
      ],
      "requirements": [
        "Task Creation: Input field to add new tasks with required validation (prevent empty or whitespace-only submissions).",
        "Task Rendering: Display list of tasks dynamically showing task title, timestamp/status, and action buttons.",
        "Task Completion: Clickable toggle/checkbox to mark tasks as completed (applying strikethrough and visual status change).",
        "Task Deletion: Delete button on each task item with immediate removal from DOM and underlying array state.",
        "Empty State Handling: Display an informative empty-state message when no tasks remain.",
        "Task Counter: Live badge displaying count of total and remaining incomplete tasks.",
        "Data Model: Structured JavaScript state array `[{ id, title, completed, createdAt }]`.",
        "Error Feedback: Inline error warning if user tries to submit an invalid task title.",
        "Clean Architecture: Separation of DOM queries, state mutation functions, and render routines."
      ],
      "deliverables": [
        "Working Interactive Task Manager application files (index.html, styles.css, app.js).",
        "Functional task creation flow with whitespace sanitization.",
        "Functional toggle completion state with visual feedback.",
        "Functional delete action with immediate list update.",
        "Dynamic active and completed task counters.",
        "Dynamic empty-state container display when list is empty.",
        "Clean JavaScript code adhering to ES6+ standards (const/let, arrow functions).",
        "Testing checklist verifying all user interaction scenarios.",
        "Screenshots or screen recording demonstrating project execution.",
        "Written summary explaining JavaScript concepts utilized in the project."
      ],
      "rubric": [
        {
          "criteria": "DOM Manipulation & Rendering",
          "points": 30,
          "description": "Efficient node creation, safe textContent usage, and dynamic list rendering."
        },
        {
          "criteria": "State & Event Architecture",
          "points": 30,
          "description": "Correct array state management, event interception with preventDefault, and state-driven updates."
        },
        {
          "criteria": "Validation & UX Polish",
          "points": 20,
          "description": "Robust empty-string prevention, inline error messages, and empty-state management."
        },
        {
          "criteria": "Code Quality & Organization",
          "points": 20,
          "description": "Consistent formatting, descriptive naming, modular functions, and no global variable pollution."
        }
      ],
      "commonMistakes": [
        "Mutating the DOM directly without updating the underlying JavaScript array state model.",
        "Using innerHTML to render user input, introducing XSS vulnerabilities.",
        "Forgetting `event.preventDefault()` on form submit, causing page reloads."
      ]
    }
  },
  {
    "id": "js-beg-assessment",
    "orderIndex": 14,
    "title": "Beginner Level Final Assessment",
    "description": "Comprehensive 20-question multiple-choice assessment testing core JavaScript fundamentals, types, operators, conditionals, loops, functions, scope, strings, arrays, objects, DOM, and events.",
    "status": "locked",
    "requiresQuiz": true,
    "xpReward": 250,
    "level": "beginner",
    "type": "assessment",
    "isFinalAssessment": true,
    "passingScore": 15,
    "totalQuestions": 20,
    "questions": [
      {
        "id": 1,
        "question": "Which script attribute downloads external JavaScript files in the background and executes them in document order only after the HTML document is fully parsed?",
        "options": [
          "defer",
          "async",
          "preload",
          "blocking"
        ],
        "correctAnswer": 0,
        "explanation": "`defer` tells the browser to download the script in parallel without blocking HTML parsing, executing scripts in document order immediately before `DOMContentLoaded`.",
        "topic": "Script Ingestion & Runtime"
      },
      {
        "id": 2,
        "question": "What is the evaluated type of `typeof null` in standard JavaScript?",
        "options": [
          "\"object\"",
          "\"undefined\"",
          "\"null\"",
          "\"boolean\""
        ],
        "correctAnswer": 0,
        "explanation": "`typeof null` returns `\"object\"` due to a legacy bug dating back to JavaScript's initial release in 1995 that is retained for web compatibility.",
        "topic": "Data Types"
      },
      {
        "id": 3,
        "question": "What is the primary difference between `let` and `var` declarations regarding scope?",
        "options": [
          "let is block-scoped while var is function-scoped",
          "let is function-scoped while var is block-scoped",
          "let cannot be reassigned while var can",
          "var resides in the Temporal Dead Zone while let does not"
        ],
        "correctAnswer": 0,
        "explanation": "`let` is strictly block-scoped (constrained inside `{ ... }`), whereas `var` is function-scoped and ignores block boundaries.",
        "topic": "Variables & Scoping"
      },
      {
        "id": 4,
        "question": "What will the expression `0 ?? 50` evaluate to in modern JavaScript?",
        "options": [
          "0",
          "50",
          "undefined",
          "NaN"
        ],
        "correctAnswer": 0,
        "explanation": "The Nullish Coalescing operator (`??`) returns its right-hand operand only if the left operand is `null` or `undefined`. Since `0` is a defined number, `0` is returned.",
        "topic": "Operators & Expressions"
      },
      {
        "id": 5,
        "question": "Which of the following values is considered TRUTHY in a JavaScript conditional statement?",
        "options": [
          "\"0\" (string containing zero)",
          "\"\" (empty string)",
          "0",
          "NaN"
        ],
        "correctAnswer": 0,
        "explanation": "Non-empty strings, including `\"0\"` and `\"false\"`, are always truthy. The only falsy primitives are `false`, `0`, `-0`, `0n`, `\"\"`, `null`, `undefined`, and `NaN`.",
        "topic": "Conditions & Truthy/Falsy"
      },
      {
        "id": 6,
        "question": "In a `switch` statement, what occurs if a matching `case` block omits a `break` or `return` keyword?",
        "options": [
          "The switch statement throws a SyntaxError",
          "Execution continues directly into the subsequent case block (fall-through)",
          "The default block is invoked immediately",
          "The program enters an infinite loop"
        ],
        "correctAnswer": 1,
        "explanation": "Without `break` or `return`, JavaScript executes subsequent case blocks regardless of whether their condition matches (case fall-through).",
        "topic": "Conditions & Decision Making"
      },
      {
        "id": 7,
        "question": "Which loop construct is specifically designed to iterate directly over the values of an Array or String?",
        "options": [
          "for...in",
          "for...of",
          "while",
          "switch"
        ],
        "correctAnswer": 1,
        "explanation": "`for...of` iterates over iterable values (arrays, strings, sets, maps). `for...in` iterates over object property keys.",
        "topic": "Loops & Repetition"
      },
      {
        "id": 8,
        "question": "What is the effect of the `continue` statement inside a loop?",
        "options": [
          "It terminates the loop and exits immediately",
          "It skips the rest of the current iteration and advances to the next cycle",
          "It restarts the loop from the initial counter value",
          "It pauses execution for debugging"
        ],
        "correctAnswer": 1,
        "explanation": "`continue` aborts the remaining statements in the current iteration step and jumps directly to the condition/increment step of the next iteration.",
        "topic": "Loops & Control Flow"
      },
      {
        "id": 9,
        "question": "What makes an Arrow Function fundamentally different from a standard Function Declaration regarding context?",
        "options": [
          "Arrow functions cannot return primitive values",
          "Arrow functions do not bind their own `this` context",
          "Arrow functions are hoisted with their complete implementation",
          "Arrow functions cannot take parameters"
        ],
        "correctAnswer": 1,
        "explanation": "Arrow functions do not have their own `this`, `arguments`, or `super` bindings; they inherit `this` lexically from their enclosing parent scope.",
        "topic": "Functions & Parameters"
      },
      {
        "id": 10,
        "question": "Which syntax allows a function to collect an indefinite number of trailing arguments into a standard Array?",
        "options": [
          "arguments.toArray()",
          "...args (Rest parameters)",
          "[...arguments]",
          "args: array"
        ],
        "correctAnswer": 1,
        "explanation": "Rest parameters (`...args`) gather all remaining arguments into a true JavaScript array.",
        "topic": "Functions & Rest Parameters"
      },
      {
        "id": 11,
        "question": "What term describes an inner function that retains access to variables from its outer enclosing function even after the outer function has returned?",
        "options": [
          "Generator",
          "Prototype",
          "Closure",
          "Constructor"
        ],
        "correctAnswer": 2,
        "explanation": "A closure is created when an inner function captures and retains access to its lexical scope environment.",
        "topic": "Scope & Closures"
      },
      {
        "id": 12,
        "question": "What occurs when you attempt to access a `let` or `const` variable before its line of declaration?",
        "options": [
          "It returns undefined",
          "It returns null",
          "It throws a ReferenceError due to the Temporal Dead Zone (TDZ)",
          "It creates a global variable"
        ],
        "correctAnswer": 2,
        "explanation": "`let` and `const` variables exist in the Temporal Dead Zone (TDZ) from the start of the block until the declaration is evaluated, throwing a `ReferenceError` if accessed.",
        "topic": "Hoisting & TDZ"
      },
      {
        "id": 13,
        "question": "Which method extracts a section of a string without modifying the original string and supports negative indexing from the end?",
        "options": [
          "splice()",
          "split()",
          "slice()",
          "substr()"
        ],
        "correctAnswer": 2,
        "explanation": "`slice(start, end)` extracts a substring and accepts negative numbers to measure from the string end without mutating the original string.",
        "topic": "Strings & Template Literals"
      },
      {
        "id": 14,
        "question": "Which array method adds one or more elements to the END of an array and returns the new array length?",
        "options": [
          "unshift()",
          "shift()",
          "push()",
          "pop()"
        ],
        "correctAnswer": 2,
        "explanation": "`push()` appends items to the end of the array and returns the updated length.",
        "topic": "Arrays & Array Methods"
      },
      {
        "id": 15,
        "question": "What is the primary difference between `array.splice()` and `array.slice()`?",
        "options": [
          "splice only works on strings, while slice works on arrays",
          "slice mutates the original array in-place, whereas splice returns a shallow copy",
          "splice mutates the original array in-place, whereas slice returns a shallow copy without mutation",
          "slice removes elements while splice can only concatenate arrays"
        ],
        "correctAnswer": 2,
        "explanation": "`splice()` mutates the source array in place by removing/inserting elements; `slice()` creates a new array slice non-mutatively.",
        "topic": "Array Manipulation"
      },
      {
        "id": 16,
        "question": "Which static Object method returns an array of `[key, value]` pairs for an object's own enumerable properties?",
        "options": [
          "Object.keys()",
          "Object.values()",
          "Object.fromEntries()",
          "Object.entries()"
        ],
        "correctAnswer": 3,
        "explanation": "`Object.entries(obj)` returns an array of `[key, value]` 2-element arrays for each property.",
        "topic": "Objects & Object Methods"
      },
      {
        "id": 17,
        "question": "Why is `element.textContent` preferred over `element.innerHTML` when inserting user-provided text into the DOM?",
        "options": [
          "textContent parses nested HTML tags faster",
          "textContent automatically animates the text",
          "innerHTML is not supported in modern browsers",
          "textContent treats input strictly as plain text, mitigating Cross-Site Scripting (XSS) risks"
        ],
        "correctAnswer": 3,
        "explanation": "`textContent` inserts raw text without parsing HTML, preventing attackers from injecting malicious `<script>` or event attributes.",
        "topic": "DOM Fundamentals & Security"
      },
      {
        "id": 18,
        "question": "Which method allows adding or removing a CSS class on an element conditionally based on a boolean force parameter?",
        "options": [
          "element.classList.set(className, boolean)",
          "element.className.switch(className)",
          "element.style.setClass(className)",
          "element.classList.toggle(className, boolean)"
        ],
        "correctAnswer": 3,
        "explanation": "`element.classList.toggle(\"dark\", isDark)` adds `\"dark\"` if `isDark` is true, and removes it if false.",
        "topic": "DOM ClassList"
      },
      {
        "id": 19,
        "question": "What is the essential purpose of calling `event.preventDefault()` inside a form submission handler?",
        "options": [
          "It clears all input fields in the form",
          "It disables form input fields",
          "It prevents event bubbling to parent containers",
          "It halts the default browser full-page reload on submit"
        ],
        "correctAnswer": 3,
        "explanation": "`event.preventDefault()` suppresses the browser's default action of submitting the form via HTTP POST/GET and refreshing the page.",
        "topic": "Events & Forms"
      },
      {
        "id": 20,
        "question": "Which JavaScript statement acts as a programmatic breakpoint that pauses code execution in browser DevTools when open?",
        "options": [
          "pause;",
          "breakpoint;",
          "stop();",
          "debugger;"
        ],
        "correctAnswer": 3,
        "explanation": "The `debugger;` statement invokes any available debugging functionality, pausing execution if Developer Tools are active.",
        "topic": "Debugging Workflows"
      }
    ]
  }
];

export const JAVASCRIPT_BEGINNER_FINAL_ASSESSMENT = JAVASCRIPT_BEGINNER_TASKS.find(
  (t) => t.id === 'js-beg-assessment'
)!.questions!;
