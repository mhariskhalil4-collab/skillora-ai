import { Task } from '../../types/roadmap.types';

export const JAVASCRIPT_INTERMEDIATE_TASKS: Task[] = [
  {
    "id": "js-int-01",
    "orderIndex": 1,
    "title": "Advanced Functions and Scope",
    "description": "Master first-class functions, higher-order functions, callbacks, lexical closures, IIFEs, recursion, the call stack, and functional composition.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, returned from functions, and hold custom properties. Understanding higher-order functions, recursion, and closure-based state is central to professional JavaScript design.",
      "analogyHero": "Think of higher-order functions like an industrial logistics pipeline: you feed conveyor belts (data arrays) through customizable transformer machines (callback functions) that stamp, package, and sort items without altering the belt mechanics.",
      "objectives": [
        "Leverage first-class functions to build modular, higher-order abstractions.",
        "Implement custom callbacks and understand asynchronous continuation patterns.",
        "Use Immediately Invoked Function Expressions (IIFE) for scope isolation.",
        "Master recursive functions with robust base-case terminations.",
        "Compose functions cleanly (`compose` and `pipe`) for declarative data transformations."
      ],
      "estimatedTime": "55 mins",
      "keyTakeaways": [
        "A higher-order function either accepts one or more functions as arguments or returns a function.",
        "Every recursive call pushes a new execution frame onto the Call Stack; missing base cases trigger `RangeError: Maximum call stack size exceeded`.",
        "IIFEs were historically used to avoid global scope pollution before ES modules.",
        "Function composition `pipe(f, g, h)(x)` evaluates left-to-right: `h(g(f(x)))`."
      ],
      "summary": "Higher-order functions and functional composition enable expressive, reusable logic while eliminating imperative loop boilerplate.",
      "syntaxGuide": "// Higher-Order Function returning a function\nconst withLogging = (fn) => (...args) => {\n  console.log(`Executing with args:`, args);\n  const result = fn(...args);\n  console.log(`Result:`, result);\n  return result;\n};\n\n// Pipe composition helper\nconst pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);\nconst sanitize = pipe(\n  (s) => s.trim(),\n  (s) => s.toLowerCase(),\n  (s) => s.replaceAll(' ', '_')\n);",
      "practiceExercises": [
        {
          "title": "Custom Retry Higher-Order Function",
          "instructions": "Write a higher-order function `retry(fn, maxRetries)` that calls `fn()` up to `maxRetries` times if it throws an error before rethrowing.",
          "starterCode": "function retry(fn, maxRetries = 3) {\n  // Return a wrapped function\n}",
          "solutionCode": "function retry(fn, maxRetries = 3) {\n  return function(...args) {\n    let attempts = 0;\n    while (attempts < maxRetries) {\n      try {\n        return fn(...args);\n      } catch (err) {\n        attempts++;\n        if (attempts >= maxRetries) throw err;\n      }\n    }\n  };\n}"
        }
      ],
      "sections": [
        {
          "id": "js-int-01-s1",
          "title": "1. Higher-Order Functions & Custom Callbacks",
          "difficulty": "Intermediate",
          "explanation": "Higher-order functions decouple execution algorithms from specific business actions. By passing callbacks, consumers customize processing logic dynamically.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "hof_callbacks.js",
              "title": "Custom Filter-Map Higher-Order Function",
              "code": "function transformList(list, predicate, transformer) {\n  const result = [];\n  for (const item of list) {\n    if (predicate(item)) {\n      result.push(transformer(item));\n    }\n  }\n  return result;\n}\n\nconst users = [\n  { id: 1, name: 'Alice', active: true, score: 85 },\n  { id: 2, name: 'Bob', active: false, score: 92 },\n  { id: 3, name: 'Charlie', active: true, score: 78 }\n];\n\nconst activeUserNames = transformList(\n  users,\n  (u) => u.active,\n  (u) => `${u.name.toUpperCase()} (Score: ${u.score})`\n);\n\nconsole.log(activeUserNames);\n// ['ALICE (Score: 85)', 'CHARLIE (Score: 78)']",
              "lineByLine": [
                {
                  "line": "predicate(item)",
                  "explanation": "Executes boolean callback to determine whether element qualifies."
                },
                {
                  "line": "transformer(item)",
                  "explanation": "Applies mapping callback to transform the qualified item."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-01-s2",
          "title": "2. Recursion & Call Stack Mechanics",
          "difficulty": "Intermediate",
          "explanation": "Recursion occurs when a function calls itself. Every recursive solution requires: 1. A Base Case (stopping condition), and 2. A Recursive Step that moves closer to the base case.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "recursion_tree.js",
              "title": "Recursive Deep Object Traversal",
              "code": "// Deep clone or nested property search using recursion\nfunction findCategoryPath(tree, targetId, path = []) {\n  if (tree.id === targetId) return [...path, tree.name];\n\n  if (tree.children && tree.children.length > 0) {\n    for (const child of tree.children) {\n      const found = findCategoryPath(child, targetId, [...path, tree.name]);\n      if (found) return found;\n    }\n  }\n  return null;\n}\n\nconst categoryTree = {\n  id: 'root',\n  name: 'Store',\n  children: [\n    {\n      id: 'c1',\n      name: 'Electronics',\n      children: [{ id: 'c1-1', name: 'Laptops', children: [] }]\n    }\n  ]\n};\n\nconsole.log(findCategoryPath(categoryTree, 'c1-1'));\n// ['Store', 'Electronics', 'Laptops']",
              "explanation": "The function traverses arbitrary depths of nested category nodes until finding the target id."
            }
          ]
        },
        {
          "id": "js-int-01-s3",
          "title": "3. Function Composition (`pipe` and `compose`)",
          "difficulty": "Intermediate",
          "explanation": "Composition combines multiple single-purpose functions into a unified pipeline. `pipe` passes data through functions from left to right.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "composition.js",
              "title": "Declarative Data Transformation Pipeline",
              "code": "const pipe = (...fns) => (initialValue) =>\n  fns.reduce((acc, fn) => fn(acc), initialValue);\n\nconst cleanText = (str) => str.trim();\nconst capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);\nconst addExcitement = (str) => `${str}!`;\n\nconst formatGreeting = pipe(cleanText, capitalize, addExcitement);\n\nconsole.log(formatGreeting('   welcome to skillora   '));\n// \"Welcome to skillora!\"",
              "lineByLine": [
                {
                  "line": "fns.reduce((acc, fn) => fn(acc), initialValue)",
                  "explanation": "Feeds output of each function directly into the input of the next."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What occurs if a recursive function fails to reach its base case condition?",
            "options": [
              "It automatically converts into a while loop",
              "It throws a RangeError: Maximum call stack size exceeded",
              "It returns undefined",
              "The browser terminates the tab silently"
            ],
            "correctAnswer": 1,
            "explanation": "Infinite recursive calls continuously push stack frames onto the execution stack until the call stack limit is exhausted, throwing a `RangeError`."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-02",
    "orderIndex": 2,
    "title": "Advanced Array Methods",
    "description": "Master functional list processing with forEach, map, filter, reduce, find, some, every, flatMap, and method chaining.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "Modern JavaScript leverages declarative, higher-order array methods to transform, filter, accumulate, and query datasets without writing manual imperative `for` loops. Mastery of `reduce`, `flatMap`, and method chaining is essential for clean state pipelines.",
      "analogyHero": "Think of array methods like a gourmet kitchen line: `filter` discards spoiled ingredients, `map` chops vegetables to uniform size, `sort` organizes pans, and `reduce` combines everything into a single savory sauce.",
      "objectives": [
        "Differentiate between side-effect iterators (`forEach`) and pure transformation methods (`map`, `filter`).",
        "Master the accumulator pattern with `reduce` for aggregations, grouping, and flattening.",
        "Use short-circuit query methods: `find`, `findIndex`, `some`, and `every`.",
        "Flatten nested structures using `flat` and `flatMap`.",
        "Build readable, immutable data processing pipelines via method chaining."
      ],
      "estimatedTime": "55 mins",
      "keyTakeaways": [
        "`map` and `filter` always return brand new arrays, preserving the original array immutability.",
        "`reduce(callback, initialValue)` must always be provided an explicit initial value to prevent runtime bugs on empty collections.",
        "`some()` returns true upon encountering the first truthy match; `every()` returns false on the first falsy match.",
        "`sort()` converts items to strings by default; always pass a numeric comparator `(a, b) => a - b` for numerical sorting."
      ],
      "summary": "Declarative array methods replace complex nested loops with readable, testable, and immutable transformation chains.",
      "syntaxGuide": "// Method Chaining Pipeline:\nconst totalActiveRevenue = transactions\n  .filter((t) => t.status === 'completed' && t.type === 'sale')\n  .map((t) => t.amount)\n  .reduce((total, amount) => total + amount, 0);\n\n// Numeric sorting (ascending):\nconst sortedNumbers = [40, 100, 1, 5, 25].sort((a, b) => a - b);",
      "practiceExercises": [
        {
          "title": "Group By Property with Reduce",
          "instructions": "Write a function `groupBy(array, key)` using `reduce` that groups array objects into an object indexed by the specified key values.",
          "starterCode": "function groupBy(array, key) {\n  // Use reduce\n}",
          "solutionCode": "function groupBy(array, key) {\n  return array.reduce((acc, item) => {\n    const group = item[key];\n    if (!acc[group]) acc[group] = [];\n    acc[group].push(item);\n    return acc;\n  }, {});\n}"
        }
      ],
      "sections": [
        {
          "id": "js-int-02-s1",
          "title": "1. Pure Transformations: `map`, `filter`, `find`",
          "difficulty": "Intermediate",
          "explanation": "`map` creates a new array by applying a function to every element. `filter` creates a new array containing only elements that pass a test. `find` returns the first matching element or `undefined`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "map_filter.js",
              "title": "Filtering and Transforming Datasets",
              "code": "const products = [\n  { id: 'p1', name: 'Laptop', price: 1200, inStock: true },\n  { id: 'p2', name: 'Mouse', price: 25, inStock: false },\n  { id: 'p3', name: 'Keyboard', price: 95, inStock: true },\n  { id: 'p4', name: 'Monitor', price: 350, inStock: true }\n];\n\n// 1. Filter in-stock items priced over $50\nconst premiumInStock = products.filter((p) => p.inStock && p.price > 50);\n\n// 2. Map into formatted price labels\nconst priceLabels = premiumInStock.map((p) => `${p.name}: ${p.price.toFixed(2)}`);\n\n// 3. Find specific item\nconst monitor = products.find((p) => p.name === 'Monitor');\n\nconsole.log(priceLabels); // ['Laptop: $1200.00', 'Keyboard: $95.00', 'Monitor: $350.00']\nconsole.log(monitor);     // { id: 'p4', name: 'Monitor', ... }",
              "lineByLine": [
                {
                  "line": "products.filter(...)",
                  "explanation": "Creates a subset array without modifying `products`."
                },
                {
                  "line": "products.find(...)",
                  "explanation": "Stops iterating as soon as matching item is found."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-02-s2",
          "title": "2. The Accumulator Engine: `reduce` Mastery",
          "difficulty": "Intermediate",
          "explanation": "`reduce` iterates through an array, accumulating values into a single return value (which can be a number, string, object, or another array).",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "reduce_mastery.js",
              "title": "Advanced Aggregations and Indexing with Reduce",
              "code": "const cart = [\n  { category: 'hardware', cost: 120, qty: 2 },\n  { category: 'software', cost: 50, qty: 1 },\n  { category: 'hardware', cost: 30, qty: 3 }\n];\n\n// Calculate grand total cost\nconst grandTotal = cart.reduce((acc, item) => acc + (item.cost * item.qty), 0);\nconsole.log('Grand Total:', grandTotal); // 380\n\n// Aggregate spend by category\nconst spendByCategory = cart.reduce((acc, item) => {\n  const current = acc[item.category] || 0;\n  acc[item.category] = current + (item.cost * item.qty);\n  return acc;\n}, {});\n\nconsole.log('Spend by category:', spendByCategory);\n// { hardware: 330, software: 50 }",
              "explanation": "Passing `{}` as the initial value allows constructing dynamic hash maps from flat arrays in a single pass."
            }
          ]
        },
        {
          "id": "js-int-02-s3",
          "title": "3. `flatMap`, `some`, `every`, and Numeric `sort`",
          "difficulty": "Intermediate",
          "explanation": "`flatMap` maps each element to a new array and flattens the result by one level. `some` and `every` test boolean conditions across elements. `sort` requires explicit numeric comparators.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "advanced_methods.js",
              "title": "Flattening, Condition Checks, and Sorting",
              "code": "const userRoles = [\n  { user: 'Sam', roles: ['admin', 'editor'] },\n  { user: 'Lia', roles: ['viewer'] }\n];\n\n// flatMap extracts all roles into a single flat list\nconst allRoles = userRoles.flatMap((u) => u.roles);\nconsole.log('All Roles:', allRoles); // ['admin', 'editor', 'viewer']\n\n// Condition checks\nconst hasAdmin = userRoles.some((u) => u.roles.includes('admin')); // true\nconst allVerified = userRoles.every((u) => u.roles.length > 0);   // true\n\n// Numeric sorting (in-place clone)\nconst responseTimes = [250, 45, 1200, 80, 500];\nconst sortedFastest = [...responseTimes].sort((a, b) => a - b);\nconsole.log('Fastest to Slowest:', sortedFastest); // [45, 80, 250, 500, 1200]",
              "lineByLine": [
                {
                  "line": "[...responseTimes].sort((a, b) => a - b)",
                  "explanation": "Clones array first with spread syntax to avoid mutating original source."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why does `[10, 5, 100, 20].sort()` result in `[10, 100, 20, 5]` by default?",
            "options": [
              "Because sort() is broken in JavaScript",
              "Because default sort converts numbers to strings and compares their UTF-16 code unit values lexicographically",
              "Because sort() only works on 2-digit numbers",
              "Because numbers must be enclosed in quotes"
            ],
            "correctAnswer": 1,
            "explanation": "The default `sort()` method converts elements to strings and compares them lexicographically (\"100\" comes before \"20\" and \"5\"). A comparator `(a, b) => a - b` is required for numeric order."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-03",
    "orderIndex": 3,
    "title": "Modern JavaScript and Destructuring",
    "description": "Master ES6+ modern features: array/object destructuring, spread and rest syntax, enhanced object literals, computed keys, optional chaining, and nullish coalescing.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "Modern JavaScript (ES6 through ES2024) introduced syntactic idioms that significantly reduce boilerplate, prevent null-pointer exceptions, and streamline data handling. Mastering destructuring, spread operations, and object enhancements is essential for modern frontend and backend development.",
      "analogyHero": "Think of modern destructuring and spread syntax like unboxing a prefabricated toolkit: rather than reaching into the crate to retrieve tools one by one, you unpack the exact wrenches you need into labeled organizers in a single motion.",
      "objectives": [
        "Master nested object and array destructuring with default fallbacks and variable renaming.",
        "Use the spread operator (`...`) for shallow array and object cloning and merging.",
        "Apply Enhanced Object Literals: shorthand properties, computed keys, and method definitions.",
        "Combine Optional Chaining (`?.`) with Nullish Coalescing (`??`) for defensive state access."
      ],
      "estimatedTime": "50 mins",
      "keyTakeaways": [
        "Destructuring allows extraction of deep properties directly: `const { a: { b } } = obj;`.",
        "Object spread `{ ...defaults, ...overrides }` provides an elegant, non-mutative merging pattern where rightmost properties overwrite leftmost keys.",
        "Array spread `[...arr1, ...arr2]` merges arrays without calling `concat()`.",
        "Computed property names `[prefix + '_id']: value` allow dynamic key construction at object initialization."
      ],
      "summary": "ES6+ destructuring and spread syntax transform verbose imperative data extraction into declarative, immutable expressions.",
      "syntaxGuide": "// Object merging with defaults\nconst defaultOptions = { theme: 'light', retries: 3, cache: true };\nconst userOptions = { theme: 'dark' };\nconst finalConfig = { ...defaultOptions, ...userOptions }; // { theme: 'dark', retries: 3, cache: true }\n\n// Swapping variables with array destructuring\nlet a = 1, b = 2;\n[a, b] = [b, a]; // a = 2, b = 1",
      "practiceExercises": [
        {
          "title": "Deep Config Merger",
          "instructions": "Write a function `mergeConfig(base, overrides)` that shallow-merges two config objects and sets `updatedAt: Date.now()`.",
          "starterCode": "function mergeConfig(base, overrides) {\n  // Return merged object with updatedAt\n}",
          "solutionCode": "function mergeConfig(base, overrides) {\n  return {\n    ...base,\n    ...overrides,\n    updatedAt: Date.now()\n  };\n}"
        }
      ],
      "sections": [
        {
          "id": "js-int-03-s1",
          "title": "1. Advanced Destructuring & Variable Aliasing",
          "difficulty": "Intermediate",
          "explanation": "Destructuring can unpack nested objects, rename properties to avoid identifier collisions, and supply default values for undefined fields.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "advanced_destructure.js",
              "title": "Deep Destructuring with Renaming and Defaults",
              "code": "const apiResponse = {\n  data: {\n    user: {\n      id: 'u_9921',\n      personal_info: {\n        first_name: 'Sara',\n        last_name: 'Connor'\n      }\n    }\n  },\n  status: 200\n};\n\n// Deep unpacking with renaming:\nconst {\n  data: {\n    user: {\n      id: userId,\n      personal_info: { first_name: firstName, last_name: lastName }\n    }\n  },\n  status: statusCode,\n  timestamp = Date.now()\n} = apiResponse;\n\nconsole.log(`User: ${firstName} ${lastName} (ID: ${userId}) - Status: ${statusCode}`);",
              "lineByLine": [
                {
                  "line": "first_name: firstName",
                  "explanation": "Extracts the `first_name` property and creates a local variable named `firstName`."
                },
                {
                  "line": "timestamp = Date.now()",
                  "explanation": "Assigns default current timestamp if property does not exist."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-03-s2",
          "title": "2. Spread Syntax (`...`) for Immutable Merging",
          "difficulty": "Intermediate",
          "explanation": "The spread operator shallow-copies enumerable properties into a new object or array. This is the cornerstone of immutable state updates in modern architectures.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "spread_merging.js",
              "title": "Immutable State Updates with Spread",
              "code": "const currentProfile = {\n  id: 'usr_1',\n  name: 'Marcus',\n  settings: { theme: 'dark', emailAlerts: true }\n};\n\n// Update name and theme immutably\nconst updatedProfile = {\n  ...currentProfile,\n  name: 'Marcus Aurelius',\n  settings: {\n    ...currentProfile.settings,\n    emailAlerts: false\n  }\n};\n\nconsole.log(updatedProfile.name); // 'Marcus Aurelius'\nconsole.log(currentProfile.name); // 'Marcus' (Original untouched!)",
              "explanation": "Spreading nested objects manually ensures that nested reference objects are not accidentally shared or mutated."
            }
          ]
        },
        {
          "id": "js-int-03-s3",
          "title": "3. Enhanced Object Literals & Computed Keys",
          "difficulty": "Intermediate",
          "explanation": "Enhanced object literals eliminate redundant `key: key` assignments, support direct method declarations, and allow dynamic evaluated property keys inside `[]`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "enhanced_objects.js",
              "title": "Computed Property Keys and Method Shorthand",
              "code": "const eventType = 'login';\nconst timestamp = Date.now();\nconst userId = 'usr_88';\n\nconst auditLog = {\n  userId,    // Property shorthand (same as userId: userId)\n  timestamp,\n  // Computed property key:\n  [`event_${eventType}`]: true,\n  // Concise method definition:\n  format() {\n    return `[${new Date(this.timestamp).toISOString()}] ${this.userId}: ${eventType}`;\n  }\n};\n\nconsole.log(auditLog.event_login); // true\nconsole.log(auditLog.format());",
              "lineByLine": [
                {
                  "line": "[`event_${eventType}`]: true",
                  "explanation": "Evaluates template literal expression dynamically to define key name `event_login`."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What is the value of `finalObj.x` after `{ x: 10, ...{ x: 20 } }` is evaluated?",
            "options": [
              "10",
              "20",
              "undefined",
              "Throws SyntaxError"
            ],
            "correctAnswer": 1,
            "explanation": "Properties spread later in the object literal overwrite properties defined earlier with the same key name."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-04",
    "orderIndex": 4,
    "title": "Objects, Prototypes, and Classes",
    "description": "Master prototypal inheritance, constructor functions, ES6 classes, private fields, static methods, getters, setters, and shallow vs deep cloning.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "JavaScript uses prototypal inheritance under the hood. ES6 Classes provide clean syntactic sugar over prototype chains, enabling Object-Oriented Programming (OOP) with constructors, inheritance (`extends`), private fields (`#field`), static methods, and encapsulated getters/setters.",
      "analogyHero": "Think of the prototype chain like biological genetics: a child inherits physical traits from parents, who inherited traits from grandparents. If a child doesn't know how to do something, they look up the family tree until they find an ancestor who does.",
      "objectives": [
        "Understand JavaScript's prototype chain (`__proto__` and `prototype`).",
        "Write ES6 Classes with constructors, instance methods, and static methods.",
        "Implement class inheritance using `extends` and `super()`.",
        "Enforce true encapsulation using modern Private Class Fields (`#privateField`).",
        "Create controlled property interfaces using `get` and `set` accessors."
      ],
      "estimatedTime": "60 mins",
      "keyTakeaways": [
        "Every JavaScript object has an internal link to its prototype object (`Object.prototype` at the top of the chain).",
        "ES6 `class` syntax is syntactic sugar over prototype functions; it is not a new object model.",
        "Private fields prefixed with `#` (e.g. `#apiKey`) are enforced at the language level and cannot be accessed outside the class body.",
        "Static methods (`static create()`) are attached to the Class constructor itself, not to instantiated instances."
      ],
      "summary": "ES6 Classes combine classical OOP ergonomics with JavaScript's high-performance prototypal engine. Private fields guarantee data integrity.",
      "syntaxGuide": "// Modern ES6 Class with Private Fields & Static Methods\nclass BankAccount {\n  #balance = 0; // Truly private field\n\n  constructor(owner, initialDeposit = 0) {\n    this.owner = owner;\n    this.#balance = initialDeposit;\n  }\n\n  get balance() {\n    return this.#balance;\n  }\n\n  deposit(amount) {\n    if (amount <= 0) throw new Error('Deposit must be positive');\n    this.#balance += amount;\n    return this.#balance;\n  }\n\n  static createStandardAccount(owner) {\n    return new BankAccount(owner, 100);\n  }\n}",
      "practiceExercises": [
        {
          "title": "Encapsulated Timer Class",
          "instructions": "Build a class `Stopwatch` with private `#startTime` and `#elapsedTime` fields, offering `.start()`, `.stop()`, and `.getElapsedSeconds()` methods.",
          "starterCode": "class Stopwatch {\n  // Use private fields #startTime, #elapsedTime\n}",
          "solutionCode": "class Stopwatch {\n  #startTime = 0;\n  #elapsedTime = 0;\n  #running = false;\n\n  start() {\n    if (this.#running) return;\n    this.#running = true;\n    this.#startTime = Date.now();\n  }\n\n  stop() {\n    if (!this.#running) return;\n    this.#running = false;\n    this.#elapsedTime += Date.now() - this.#startTime;\n  }\n\n  getElapsedSeconds() {\n    const current = this.#running ? this.#elapsedTime + (Date.now() - this.#startTime) : this.#elapsedTime;\n    return (current / 1000).toFixed(2);\n  }\n}"
        }
      ],
      "sections": [
        {
          "id": "js-int-04-s1",
          "title": "1. The Prototypal Inheritance Chain",
          "difficulty": "Intermediate",
          "explanation": "When accessing a property on an object, the engine searches the instance. If missing, it checks `Object.getPrototypeOf(instance)`, continuing up the chain until finding the property or hitting `null`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "prototypes_demo.js",
              "title": "Inspecting the Prototype Chain",
              "code": "const animal = {\n  eats: true,\n  walk() {\n    return 'Moving along...';\n  }\n};\n\n// Create object linked to animal as prototype\nconst rabbit = Object.create(animal);\nrabbit.jumps = true;\n\nconsole.log(rabbit.jumps); // true (Own property)\nconsole.log(rabbit.eats);  // true (Inherited from animal prototype)\nconsole.log(rabbit.walk()); // 'Moving along...' (Inherited method)\n\nconsole.log(Object.getPrototypeOf(rabbit) === animal); // true",
              "lineByLine": [
                {
                  "line": "Object.create(animal)",
                  "explanation": "Creates a new empty object whose prototype is explicitly set to `animal`."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-04-s2",
          "title": "2. ES6 Classes, Inheritance, and `super`",
          "difficulty": "Intermediate",
          "explanation": "The `class` keyword streamlines constructor definition and method attachment to `ClassName.prototype`. Subclasses use `extends` and must call `super()` before accessing `this`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "class_inheritance.js",
              "title": "Class Inheritance Hierarchy",
              "code": "class User {\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n  }\n\n  getRole() {\n    return 'Standard User';\n  }\n}\n\nclass AdminUser extends User {\n  constructor(name, email, permissions = []) {\n    super(name, email); // Invokes parent constructor\n    this.permissions = permissions;\n  }\n\n  // Method overriding:\n  getRole() {\n    return `Admin User with ${this.permissions.length} permissions`;\n  }\n}\n\nconst admin = new AdminUser('Elena', 'elena@skillora.ai', ['manage_users', 'deploy']);\nconsole.log(admin.getRole()); // 'Admin User with 2 permissions'",
              "explanation": "`super(name, email)` initializes the inherited parent state before `AdminUser` attaches its custom `permissions` property."
            }
          ]
        },
        {
          "id": "js-int-04-s3",
          "title": "3. Private Fields (`#`) & Getters/Setters",
          "difficulty": "Intermediate",
          "explanation": "Modern JavaScript natively supports private fields and methods prefixed with `#`. They are completely hidden from external inspection and cannot be accessed or deleted outside class methods.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "private_fields.js",
              "title": "Hard Encapsulation with Private Fields",
              "code": "class ApiService {\n  #apiKey; // Private field\n\n  constructor(endpoint, apiKey) {\n    this.endpoint = endpoint;\n    this.#apiKey = apiKey;\n  }\n\n  #signRequest(data) {\n    return `${data}:signed_with_${this.#apiKey.slice(-4)}`;\n  }\n\n  sendPayload(data) {\n    const signature = this.#signRequest(data);\n    return `POST to ${this.endpoint} with payload [${signature}]`;\n  }\n}\n\nconst service = new ApiService('https://api.skillora.ai', 'SECRET_KEY_9921');\nconsole.log(service.sendPayload('order_1'));\n// console.log(service.#apiKey); // SyntaxError: Private field '#apiKey' must be declared in an enclosing class",
              "lineByLine": [
                {
                  "line": "#apiKey;",
                  "explanation": "Declares private field accessible exclusively inside ApiService methods."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What syntax is used in modern JavaScript classes to declare a private instance field?",
            "options": [
              "private balance = 0;",
              "_balance = 0;",
              "#balance = 0;",
              "$balance = 0;"
            ],
            "correctAnswer": 2,
            "explanation": "Modern JavaScript uses the hash `#` prefix (e.g. `#balance = 0;`) to define strictly private fields enforced at the language level."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-05",
    "orderIndex": 5,
    "title": "The this Keyword and Binding",
    "description": "Master execution context binding: implicit binding, explicit binding (call, apply, bind), new binding, and lexical arrow function this.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "The `this` keyword refers to the context in which a function is executed. Unlike lexical scope, standard function `this` is dynamically determined at call time based on how the function was invoked (implicit binding, explicit binding, or constructor instantiation).",
      "analogyHero": "Think of `this` like a pronoun in conversation: the word \"he\" or \"she\" changes meaning depending on who was just introduced as the subject of the conversation.",
      "objectives": [
        "Understand the 4 rules of `this` binding: Default, Implicit, Explicit, and `new` binding.",
        "Explicitly bind context using `.call()`, `.apply()`, and `.bind()`.",
        "Explain why Arrow Functions do not have a dynamic `this` (Lexical this).",
        "Debug common `this` loss bugs in event listeners and timer callbacks."
      ],
      "estimatedTime": "50 mins",
      "keyTakeaways": [
        "Default binding in non-strict mode points `this` to `window`/`global`; in strict mode (`\"use strict\"`), `this` is `undefined`.",
        "Implicit binding `obj.method()` sets `this` to the object preceding the dot.",
        "`.call(ctx, arg1, arg2)` invokes immediately with comma arguments; `.apply(ctx, [args])` invokes with an array; `.bind(ctx)` returns a new bound function.",
        "Arrow functions permanently inherit `this` from the enclosing scope where they were defined."
      ],
      "summary": "Mastery of `this` binding and arrow function lexical scoping prevents subtle context loss errors when passing callbacks.",
      "syntaxGuide": "// Explicit binding comparison:\nfunction greet(greeting, punctuation) {\n  return `${greeting}, I am ${this.name}${punctuation}`;\n}\n\nconst user = { name: 'Jordan' };\n\ngreet.call(user, 'Hello', '!');       // \"Hello, I am Jordan!\"\ngreet.apply(user, ['Hi', '...']);     // \"Hi, I am Jordan...\"\nconst boundGreet = greet.bind(user);\nboundGreet('Hey', '.');              // \"Hey, I am Jordan.\"",
      "practiceExercises": [
        {
          "title": "Context Preserving Event Handler",
          "instructions": "Create a class `ButtonController` with a method `handleClick()` that retains correct `this` reference when passed directly to `addEventListener`.",
          "starterCode": "class ButtonController {\n  constructor(name) {\n    this.name = name;\n  }\n  // Implement handleClick\n}",
          "solutionCode": "class ButtonController {\n  constructor(name) {\n    this.name = name;\n    // Bind in constructor or use arrow class field\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick(event) {\n    console.log(`Clicked on controller: ${this.name}`);\n  }\n}"
        }
      ],
      "sections": [
        {
          "id": "js-int-05-s1",
          "title": "1. The 4 Rules of Dynamic `this` Binding",
          "difficulty": "Intermediate",
          "explanation": "1. Default: standalone function call (`fn()`). 2. Implicit: called on an object (`obj.fn()`). 3. Explicit: called with `call`/`apply`/`bind`. 4. New: called with `new Constructor()`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "this_rules.js",
              "title": "Demonstrating the 4 Binding Rules",
              "code": "const logger = {\n  prefix: '[SYSTEM]',\n  log(msg) {\n    console.log(`${this.prefix} ${msg}`);\n  }\n};\n\n// 1. Implicit binding:\nlogger.log('Online'); // \"[SYSTEM] Online\"\n\n// 2. Losing implicit binding:\nconst detachedLog = logger.log;\n// detachedLog('Failed'); // TypeError in strict mode or undefined prefix\n\n// 3. Explicit binding:\ndetachedLog.call(logger, 'Explicit Call'); // \"[SYSTEM] Explicit Call\"\n\n// 4. Bound function:\nconst safeLog = logger.log.bind(logger);\nsafeLog('Safe Execution'); // \"[SYSTEM] Safe Execution\"",
              "lineByLine": [
                {
                  "line": "const detachedLog = logger.log;",
                  "explanation": "Assigns function reference without preserving object context link."
                },
                {
                  "line": "logger.log.bind(logger)",
                  "explanation": "Creates permanent binding returning a new wrapper function."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-05-s2",
          "title": "2. `call()` vs `apply()` vs `bind()`",
          "difficulty": "Intermediate",
          "explanation": "`call` and `apply` execute immediately, differing only in how parameters are passed. `bind` does not execute; it returns a new function with `this` permanently set.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "call_apply_bind.js",
              "title": "Borrowing Methods with Call and Apply",
              "code": "const mathUtils = {\n  calculateTotal(taxRate, shipping) {\n    return this.subtotal + (this.subtotal * taxRate) + shipping;\n  }\n};\n\nconst cartA = { subtotal: 100 };\nconst cartB = { subtotal: 250 };\n\n// Borrow method with .call() (Comma-separated arguments)\nconst totalA = mathUtils.calculateTotal.call(cartA, 0.08, 10);\nconsole.log('Total A:', totalA); // 118\n\n// Borrow method with .apply() (Array of arguments)\nconst totalB = mathUtils.calculateTotal.apply(cartB, [0.08, 15]);\nconsole.log('Total B:', totalB); // 285",
              "explanation": "`mathUtils.calculateTotal` was invoked in the context of `cartA` and `cartB` without duplicating the calculation logic."
            }
          ]
        },
        {
          "id": "js-int-05-s3",
          "title": "3. Arrow Functions and Lexical `this`",
          "difficulty": "Intermediate",
          "explanation": "Arrow functions do not bind their own `this`. They capture the `this` value of the enclosing lexical context when they are created, making them ideal for timer callbacks and asynchronous event chains.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "lexical_this.js",
              "title": "Solving Callback Context Loss with Arrow Functions",
              "code": "class CountdownTimer {\n  constructor(seconds) {\n    this.seconds = seconds;\n  }\n\n  start() {\n    // Arrow function captures 'this' from start() method:\n    setTimeout(() => {\n      console.log(`Timer complete for ${this.seconds} seconds`);\n    }, 100);\n  }\n}\n\nconst timer = new CountdownTimer(5);\ntimer.start(); // Works cleanly without 'var self = this' hacks",
              "lineByLine": [
                {
                  "line": "setTimeout(() => { ... })",
                  "explanation": "Arrow function preserves the instance reference of CountdownTimer."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What is the primary difference between `.call()` and `.bind()`?",
            "options": [
              "call() returns a new function while bind() executes immediately",
              "call() executes the function immediately with specified context, while bind() returns a new function with bound context",
              "call() only accepts arrays of arguments",
              "bind() cannot accept arguments"
            ],
            "correctAnswer": 1,
            "explanation": "`.call()` immediately invokes the function with the given `this` and arguments, whereas `.bind()` returns a new function that can be called later."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-06",
    "orderIndex": 6,
    "title": "Asynchronous JavaScript and the Event Loop",
    "description": "Understand the single-threaded JavaScript execution model, Call Stack, Web APIs, Task Queue (Macrotasks), Microtask Queue, and Event Loop orchestration.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "JavaScript is single-threaded, meaning it has one call stack and executes one operation at a time. Concurrency is achieved through the browser/runtime Event Loop, which offloads asynchronous operations (timers, network requests, DOM events) to Web APIs and coordinates their callbacks via Microtask and Macrotask queues.",
      "analogyHero": "Think of a busy restaurant: the single Head Chef (Call Stack) only cooks one order at a time. The Waitstaff (Web APIs) take customer orders and brew coffee in the background. When ready, VIP requests (Microtasks/Promises) are served before standard meal orders (Macrotasks/setTimeout).",
      "objectives": [
        "Understand the single-threaded execution model and Call Stack mechanics.",
        "Explore how the browser runtime delegates asynchronous work to Web APIs.",
        "Differentiate between the Microtask Queue (Promises, `queueMicrotask`) and Macrotask Queue (`setTimeout`, `setInterval`).",
        "Trace execution order through the Event Loop lifecycle.",
        "Avoid blocking the main thread with long-running synchronous loops."
      ],
      "estimatedTime": "60 mins",
      "keyTakeaways": [
        "The Event Loop checks if the Call Stack is empty before picking tasks from queues.",
        "All Microtasks are executed to completion before the Event Loop picks the next Macrotask.",
        "`Promise.then()` callbacks are scheduled in the Microtask queue; `setTimeout(fn, 0)` is scheduled in the Macrotask queue.",
        "Blocking the main thread freezes UI rendering and user interactions."
      ],
      "summary": "Understanding the Event Loop and queue priority explains why asynchronous callbacks execute in specific sequences, eliminating race conditions.",
      "syntaxGuide": "// Event loop priority order test:\nconsole.log('1. Sync Start');\n\nsetTimeout(() => console.log('4. Macrotask (setTimeout)'), 0);\n\nPromise.resolve().then(() => console.log('3. Microtask (Promise)'));\n\nconsole.log('2. Sync End');\n\n// Output order: 1 -> 2 -> 3 -> 4",
      "practiceExercises": [
        {
          "title": "Event Loop Order Predictor",
          "instructions": "Write a snippet that schedules a synchronous log, a microtask via `queueMicrotask`, and a macrotask via `setTimeout`, logging numbers 1 through 4 in exact order.",
          "starterCode": "// Write snippet printing 1, 2, 3, 4 sequentially using async primitives",
          "solutionCode": "console.log(1);\nsetTimeout(() => console.log(4), 0);\nqueueMicrotask(() => console.log(3));\nconsole.log(2);"
        }
      ],
      "sections": [
        {
          "id": "js-int-06-s1",
          "title": "1. Call Stack & Web APIs Delegation",
          "difficulty": "Intermediate",
          "explanation": "When JavaScript executes synchronous code, function frames are pushed onto the Call Stack and popped when they return. When an asynchronous API like `fetch` or `setTimeout` is called, the engine registers the work with browser Web APIs and immediately pops the function from the stack.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "callstack_demo.js",
              "title": "Non-blocking Web API Delegation",
              "code": "console.log('Step 1: Synchronous call');\n\n// Handed off to browser timer thread (Web API):\nsetTimeout(() => {\n  console.log('Step 3: Callback triggered after timer expires');\n}, 1000);\n\nconsole.log('Step 2: Synchronous execution continues immediately');",
              "lineByLine": [
                {
                  "line": "setTimeout(...)",
                  "explanation": "Delegated to browser timer subsystem; does not block Step 2 from executing."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-06-s2",
          "title": "2. Microtasks vs Macrotasks Execution Priority",
          "difficulty": "Intermediate",
          "explanation": "After each synchronous execution turn, the Event Loop drains the ENTIRE Microtask Queue before moving to the Task (Macrotask) Queue or triggering browser rendering passes.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "queues_priority.js",
              "title": "Tracing Microtask vs Macrotask Execution Order",
              "code": "console.log('A: Main script start');\n\nsetTimeout(() => {\n  console.log('E: Task (setTimeout 0ms)');\n}, 0);\n\nPromise.resolve()\n  .then(() => {\n    console.log('C: Microtask 1 (Promise)');\n  })\n  .then(() => {\n    console.log('D: Microtask 2 (Chained Promise)');\n  });\n\nconsole.log('B: Main script end');\n\n// Console Output:\n// A: Main script start\n// B: Main script end\n// C: Microtask 1 (Promise)\n// D: Microtask 2 (Chained Promise)\n// E: Task (setTimeout 0ms)",
              "explanation": "Microtasks C and D execute before Macrotask E, even though the setTimeout delay was 0 milliseconds."
            }
          ]
        },
        {
          "id": "js-int-06-s3",
          "title": "3. Main Thread Starvation & Non-blocking Slicing",
          "difficulty": "Intermediate",
          "explanation": "Heavy CPU-bound computations block the single thread, freezing animations and clicks. Long computations can be chunked across event loop turns using `setTimeout` or `scheduler.yield()`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "chunking.js",
              "title": "Chunking Heavy Work to Yield to the Event Loop",
              "code": "function processLargeBatchAsync(items, processItem, onComplete) {\n  let index = 0;\n\n  function processChunk() {\n    const chunkStart = performance.now();\n    // Process items for up to 16ms (one animation frame budget)\n    while (index < items.length && performance.now() - chunkStart < 16) {\n      processItem(items[index]);\n      index++;\n    }\n\n    if (index < items.length) {\n      // Yield to the event loop and schedule next chunk\n      setTimeout(processChunk, 0);\n    } else {\n      onComplete();\n    }\n  }\n\n  processChunk();\n}",
              "lineByLine": [
                {
                  "line": "setTimeout(processChunk, 0)",
                  "explanation": "Yields the thread to allow UI repaints and user events before continuing batch."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Which queue has higher priority when the Call Stack becomes empty?",
            "options": [
              "Task Queue (setTimeout callbacks)",
              "Microtask Queue (Promise callbacks)",
              "Rendering Pipeline",
              "Garbage Collection Queue"
            ],
            "correctAnswer": 1,
            "explanation": "The Microtask Queue is completely drained before any task from the Macrotask (Task) Queue is executed."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-07",
    "orderIndex": 7,
    "title": "Promises and Promise Patterns",
    "description": "Master asynchronous Promise states, creation, chaining, error propagation with catch/finally, and combinators (all, allSettled, race, any).",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises solve the \"Callback Hell\" anti-pattern by enabling sequential chaining and robust concurrency combinators.",
      "analogyHero": "Think of a Promise like an electronic buzzer at a gourmet burger joint: they take your order and hand you a buzzer (pending promise). When the meal is ready, the buzzer vibrates (resolved); if they ran out of beef, the manager explains the refund (rejected).",
      "objectives": [
        "Understand the 3 Promise states: `pending`, `fulfilled`, and `rejected`.",
        "Construct custom promises using `new Promise((resolve, reject) => {})`.",
        "Chain multiple asynchronous steps using `.then()`, `.catch()`, and `.finally()`.",
        "Execute concurrent operations with `Promise.all()` (fail-fast) and `Promise.allSettled()` (complete all).",
        "Handle race conditions with `Promise.race()` and first-success with `Promise.any()`."
      ],
      "estimatedTime": "55 mins",
      "keyTakeaways": [
        "A Promise is settled once it moves to `fulfilled` or `rejected`; state transitions are permanent and immutable.",
        "Returning a value inside `.then()` wraps that value in a resolved Promise automatically.",
        "`Promise.all([...])` rejects immediately if *any* promise rejects (all-or-nothing).",
        "`Promise.allSettled([...])` waits for all promises regardless of success/failure, returning status objects `{ status, value | reason }`."
      ],
      "summary": "Promises form the standard asynchronous contract in modern JavaScript. Combinators enable powerful parallel and resilient networking patterns.",
      "syntaxGuide": "// Creating and chaining promises\nfunction delay(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\n\ndelay(1000)\n  .then(() => console.log('1 second elapsed'))\n  .catch((err) => console.error('Error occurred:', err))\n  .finally(() => console.log('Cleanup finished'));",
      "practiceExercises": [
        {
          "title": "Timeout Wrapper with Promise.race",
          "instructions": "Write a function `withTimeout(promise, ms)` that rejects with `\"Operation timed out\"` if `promise` does not settle within `ms` milliseconds.",
          "starterCode": "function withTimeout(promise, ms) {\n  // Use Promise.race\n}",
          "solutionCode": "function withTimeout(promise, ms) {\n  const timeoutPromise = new Promise((_, reject) =>\n    setTimeout(() => reject(new Error('Operation timed out')), ms)\n  );\n  return Promise.race([promise, timeoutPromise]);\n}"
        }
      ],
      "sections": [
        {
          "id": "js-int-07-s1",
          "title": "1. Promise Anatomy and State Machine",
          "difficulty": "Intermediate",
          "explanation": "A Promise begins in the `pending` state. Invoking `resolve(data)` transitions it to `fulfilled`. Invoking `reject(error)` transitions it to `rejected`. Downstream handlers attached via `.then()` and `.catch()` execute asynchronously in the Microtask queue.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "promise_anatomy.js",
              "title": "Constructing Custom Promises",
              "code": "function fetchUserSession(userId) {\n  return new Promise((resolve, reject) => {\n    if (!userId) {\n      reject(new Error('Invalid UserId provided'));\n      return;\n    }\n\n    setTimeout(() => {\n      resolve({ userId, authenticated: true, token: 'tok_abc9981' });\n    }, 500);\n  });\n}\n\nfetchUserSession('usr_44')\n  .then((session) => {\n    console.log('Session retrieved:', session.token);\n    return session.userId; // Passed to next .then()\n  })\n  .then((id) => console.log('Processing user:', id))\n  .catch((err) => console.error('Failed to load session:', err.message))\n  .finally(() => console.log('Session fetch completed'));",
              "lineByLine": [
                {
                  "line": "new Promise((resolve, reject) => ...)",
                  "explanation": "Executor function receives resolve and reject control functions."
                },
                {
                  "line": ".finally(...)",
                  "explanation": "Guaranteed cleanup callback that executes regardless of fulfillment or rejection."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-07-s2",
          "title": "2. Parallel Concurrency: `Promise.all` vs `Promise.allSettled`",
          "difficulty": "Intermediate",
          "explanation": "`Promise.all` runs multiple asynchronous tasks concurrently and fulfills when all fulfill, but aborts immediately on the first rejection. `Promise.allSettled` guarantees every task completes and returns a full diagnostic report.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "promise_combinators.js",
              "title": "Comparing Promise.all and Promise.allSettled",
              "code": "const fetchProfile = Promise.resolve({ name: 'Alex' });\nconst fetchNotifications = Promise.reject(new Error('Notifications service down'));\nconst fetchFeed = Promise.resolve(['Post 1', 'Post 2']);\n\n// 1. Promise.all fails fast on error\nPromise.all([fetchProfile, fetchFeed])\n  .then(([profile, feed]) => console.log('All succeeded:', profile, feed))\n  .catch((err) => console.log('Promise.all aborted:', err.message));\n\n// 2. Promise.allSettled completes resiliently\nPromise.allSettled([fetchProfile, fetchNotifications, fetchFeed])\n  .then((results) => {\n    results.forEach((res, i) => {\n      if (res.status === 'fulfilled') {\n        console.log(`Task ${i} OK:`, res.value);\n      } else {\n        console.warn(`Task ${i} FAILED:`, res.reason.message);\n      }\n    });\n  });",
              "explanation": "`Promise.allSettled` prevents a non-critical service failure (like notifications) from crashing the entire user dashboard load."
            }
          ]
        },
        {
          "id": "js-int-07-s3",
          "title": "3. First-Settled Combinators: `Promise.race` vs `Promise.any`",
          "difficulty": "Intermediate",
          "explanation": "`Promise.race` settles as soon as the first promise settles (fulfilled OR rejected). `Promise.any` waits for the first promise to fulfill (ignoring rejections until all fail with an `AggregateError`).",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "race_vs_any.js",
              "title": "First-Success with Promise.any",
              "code": "const cdnA = new Promise((_, rej) => setTimeout(() => rej(new Error('CDN A Down')), 100));\nconst cdnB = new Promise((res) => setTimeout(() => res('Data from Fast CDN B'), 200));\nconst cdnC = new Promise((res) => setTimeout(() => res('Data from Backup CDN C'), 500));\n\n// Promise.any ignores cdnA rejection and returns cdnB value\nPromise.any([cdnA, cdnB, cdnC])\n  .then((fastestData) => console.log('Successfully fetched:', fastestData))\n  .catch((aggregateError) => console.error('All CDNs failed:', aggregateError.errors));",
              "lineByLine": [
                {
                  "line": "Promise.any([cdnA, cdnB, cdnC])",
                  "explanation": "Returns the fastest fulfilled value, ignoring preceding rejections."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Which Promise combinator returns a promise that resolves only after ALL input promises have settled, whether fulfilled or rejected?",
            "options": [
              "Promise.all()",
              "Promise.race()",
              "Promise.allSettled()",
              "Promise.any()"
            ],
            "correctAnswer": 2,
            "explanation": "`Promise.allSettled()` waits for all input promises to settle and returns an array of result objects describing each outcome."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-08",
    "orderIndex": 8,
    "title": "Async and Await",
    "description": "Master async/await syntax, try/catch/finally error handling, sequential vs parallel execution, loading states, and async debugging.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "Async/await is syntactic sugar built directly on top of JavaScript Promises. It allows developers to write asynchronous code that reads sequentially like synchronous code, while retaining full non-blocking asynchronous execution semantics.",
      "analogyHero": "Think of async/await like an automated microwave oven: you press start and wait in place for the beep (await), without freezing the rest of the household from doing their chores while the meal heats.",
      "objectives": [
        "Declare `async` functions and understand implicit Promise wrapping.",
        "Use `await` to pause execution inside async functions until promises resolve.",
        "Structure error handling cleanly with `try...catch...finally` blocks.",
        "Prevent the sequential waterfall anti-pattern by launching parallel async operations.",
        "Implement loading and error states for user interfaces."
      ],
      "estimatedTime": "55 mins",
      "keyTakeaways": [
        "An `async` function always returns a Promise, even if returning a non-promise primitive.",
        "`await` can only be used inside `async` functions or at the top level of ES modules.",
        "Awaiting sequentially in a loop `for (const id of ids) await fetch(id)` creates a slow waterfall; use `Promise.all(ids.map(fetch))` for parallel execution.",
        "Unhandled rejections in async functions trigger `unhandledrejection` events."
      ],
      "summary": "Async/await provides clean, readable syntax for asynchronous workflows, making error handling straightforward through familiar `try/catch` blocks.",
      "syntaxGuide": "// Standard async/await with try-catch\nasync function loadUserData(userId) {\n  try {\n    const user = await api.getUser(userId);\n    const posts = await api.getPosts(userId);\n    return { user, posts };\n  } catch (error) {\n    console.error('Failed to load user profile:', error);\n    throw error;\n  }\n}",
      "practiceExercises": [
        {
          "title": "Parallel Batch Loader",
          "instructions": "Write an async function `loadUserAndPreferences(userId)` that fetches user and preferences in parallel using `Promise.all` and returns `{ user, preferences }`.",
          "starterCode": "async function loadUserAndPreferences(userId) {\n  // Fetch in parallel\n}",
          "solutionCode": "async function loadUserAndPreferences(userId) {\n  const [user, preferences] = await Promise.all([\n    fetchUser(userId),\n    fetchPreferences(userId)\n  ]);\n  return { user, preferences };\n}"
        }
      ],
      "sections": [
        {
          "id": "js-int-08-s1",
          "title": "1. Async Functions and Try-Catch Architecture",
          "difficulty": "Intermediate",
          "explanation": "Prefixing a function with `async` ensures it returns a Promise. Inside, `await` pauses execution of that specific function until the promise settles, throwing an error if the promise rejects.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "async_await_basic.js",
              "title": "Structured Async Workflow with Error Handling",
              "code": "async function fetchCourseDetails(slug) {\n  try {\n    console.log('Initiating fetch for:', slug);\n    const response = await fetch(`https://api.skillora.ai/courses/${slug}`);\n    \n    if (!response.ok) {\n      throw new Error(`HTTP Error ${response.status}: Failed to load course`);\n    }\n\n    const data = await response.json();\n    return { success: true, data };\n  } catch (error) {\n    console.warn('[CourseService] Error encountered:', error.message);\n    return { success: false, error: error.message };\n  } finally {\n    console.log('Fetch request completed.');\n  }\n}",
              "lineByLine": [
                {
                  "line": "async function fetchCourseDetails",
                  "explanation": "Implicitly wraps return values in a resolved Promise."
                },
                {
                  "line": "const data = await response.json()",
                  "explanation": "Pauses until JSON stream parsing resolves."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-08-s2",
          "title": "2. Avoiding the Sequential Waterfall Anti-pattern",
          "difficulty": "Intermediate",
          "explanation": "When independent requests do not rely on each other's results, awaiting them sequentially doubles or triples total network latency. Launch promises concurrently with `Promise.all`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "waterfall_vs_parallel.js",
              "title": "Sequential Waterfall vs Parallel Execution",
              "code": "const mockFetch = (name, delay) => new Promise((res) => setTimeout(() => res(`Data ${name}`), delay));\n\n// ❌ Slow Waterfall: Takes 300ms + 300ms = 600ms\nasync function fetchSequential() {\n  const profile = await mockFetch('Profile', 300);\n  const settings = await mockFetch('Settings', 300);\n  return { profile, settings };\n}\n\n// ✅ Fast Parallel: Takes Math.max(300, 300) = 300ms\nasync function fetchParallel() {\n  const profilePromise = mockFetch('Profile', 300);\n  const settingsPromise = mockFetch('Settings', 300);\n  \n  const [profile, settings] = await Promise.all([profilePromise, settingsPromise]);\n  return { profile, settings };\n}",
              "explanation": "Parallel execution cuts total load time in half by dispatching both network requests simultaneously."
            }
          ]
        },
        {
          "id": "js-int-08-s3",
          "title": "3. Managing UI Loading and Error States",
          "difficulty": "Intermediate",
          "explanation": "Real-world UI applications require tracking pending states to toggle loading spinners, disable submit buttons, and render user-friendly error banners.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "ui_state_async.js",
              "title": "State Machine for Async UI Interaction",
              "code": "const state = { loading: false, error: null, data: null };\n\nasync function handleSearch(query) {\n  state.loading = true;\n  state.error = null;\n  renderUI(state);\n\n  try {\n    const results = await apiSearch(query);\n    state.data = results;\n  } catch (err) {\n    state.error = 'Failed to load search results. Please try again.';\n  } finally {\n    state.loading = false;\n    renderUI(state);\n  }\n}\n\nfunction renderUI(s) {\n  console.log(`UI State -> Loading: ${s.loading}, Error: ${s.error}, Results: ${s.data?.length || 0}`);\n}",
              "lineByLine": [
                {
                  "line": "state.loading = true;",
                  "explanation": "Sets loading flag immediately before async operation begins."
                },
                {
                  "line": "finally { state.loading = false; }",
                  "explanation": "Guarantees spinner is removed even if network throws an error."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What is the return type of any function declared with the `async` keyword?",
            "options": [
              "Object",
              "Promise",
              "Generator",
              "Function"
            ],
            "correctAnswer": 1,
            "explanation": "An `async` function always returns a `Promise`. If you return a primitive value, JavaScript wraps it in `Promise.resolve(value)` automatically."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-09",
    "orderIndex": 9,
    "title": "Fetch API, JSON, and External APIs",
    "description": "Master HTTP methods, request headers, status codes, query strings, POST payloads, JSON parsing, API security, and error handling.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "The Fetch API provides a modern interface for fetching resources asynchronously across networks. Mastering HTTP verbs (GET, POST, PUT, DELETE), request headers (`Content-Type`, `Authorization`), status code validation (`response.ok`), and JSON serialization is fundamental to web connectivity.",
      "analogyHero": "Think of the Fetch API like a diplomatic postal courier: you write a letter (payload), place it in an envelope stamped with security credentials and format tags (headers), and send it to an embassy (API endpoint). The courier returns with an official response code (200 OK, 404 Not Found) and package contents (JSON body).",
      "objectives": [
        "Perform HTTP GET, POST, PUT, and DELETE requests using the `fetch()` API.",
        "Configure request options: `headers`, `method`, `body`, and `credentials`.",
        "Handle HTTP error status codes properly by checking `response.ok` (fetch does not reject on 404/500).",
        "Serialize and deserialize JSON payloads with `JSON.stringify()` and `response.json()`.",
        "Protect API tokens and implement secure authentication headers (`Bearer <token>`)."
      ],
      "estimatedTime": "60 mins",
      "keyTakeaways": [
        "`fetch()` only rejects on network failures (DNS lookup failure, offline); it does NOT reject on HTTP error codes like 404 or 500.",
        "Always verify `if (!response.ok)` before attempting to process data payload.",
        "POST/PUT requests sending JSON must include the header `'Content-Type': 'application/json'`.",
        "Use `URLSearchParams` to construct sanitized query strings safely."
      ],
      "summary": "The Fetch API connects frontend user interfaces with backend microservices. Checking `response.ok` and serializing JSON payloads properly ensures robust communication.",
      "syntaxGuide": "// Full POST Request Pattern\nasync function createPost(postData) {\n  const response = await fetch('https://api.example.com/posts', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer YOUR_TOKEN'\n    },\n    body: JSON.stringify(postData)\n  });\n\n  if (!response.ok) {\n    throw new Error(`Server returned status ${response.status}`);\n  }\n\n  return await response.json();\n}",
      "practiceExercises": [
        {
          "title": "Secure API Client",
          "instructions": "Write an async function `fetchWithAuth(url, token)` that sends a GET request with `Authorization: Bearer <token>`, checks `response.ok`, and returns parsed JSON.",
          "starterCode": "async function fetchWithAuth(url, token) {\n  // Implement authenticated fetch\n}",
          "solutionCode": "async function fetchWithAuth(url, token) {\n  const response = await fetch(url, {\n    headers: {\n      'Authorization': `Bearer ${token}`,\n      'Accept': 'application/json'\n    }\n  });\n  if (!response.ok) {\n    throw new Error(`HTTP ${response.status}: Failed request`);\n  }\n  return await response.json();\n}"
        }
      ],
      "sections": [
        {
          "id": "js-int-09-s1",
          "title": "1. HTTP Status Codes & The `response.ok` Trap",
          "difficulty": "Intermediate",
          "explanation": "A common bug in JavaScript is assuming `fetch()` will jump to `.catch()` when a server returns 404 or 500. `fetch()` considers any HTTP response a success; developers must manually check `response.ok` (`status >= 200 && status < 300`).",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "fetch_status.js",
              "title": "Proper Status Code Checking",
              "code": "async function fetchWeatherData(city) {\n  const url = `https://api.weather.example.com/v1/forecast?city=${encodeURIComponent(city)}`;\n\n  try {\n    const response = await fetch(url);\n\n    // Critical check:\n    if (!response.ok) {\n      if (response.status === 404) throw new Error(`City \"${city}\" not found`);\n      if (response.status === 429) throw new Error('Rate limit exceeded. Please wait.');\n      throw new Error(`API error: ${response.statusText} (Code ${response.status})`);\n    }\n\n    const weather = await response.json();\n    return weather;\n  } catch (err) {\n    console.error('[WeatherClient] Failure:', err.message);\n    throw err;\n  }\n}",
              "lineByLine": [
                {
                  "line": "if (!response.ok)",
                  "explanation": "Verifies status code is in 200-299 range before proceeding."
                },
                {
                  "line": "encodeURIComponent(city)",
                  "explanation": "Sanitizes query parameter characters for valid URL construction."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-09-s2",
          "title": "2. Sending JSON Payloads with POST and PUT",
          "difficulty": "Intermediate",
          "explanation": "When transmitting data to a REST API, configure the HTTP method, set `Content-Type: application/json`, and serialize the payload object into a string with `JSON.stringify()`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "post_request.js",
              "title": "Submitting Structured JSON Data",
              "code": "async function submitContactMessage(contactData) {\n  const endpoint = 'https://api.skillora.ai/contact';\n\n  const response = await fetch(endpoint, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'Accept': 'application/json'\n    },\n    body: JSON.stringify(contactData)\n  });\n\n  if (!response.ok) {\n    const errorPayload = await response.json().catch(() => ({}));\n    throw new Error(errorPayload.message || 'Failed to submit contact request');\n  }\n\n  return await response.json();\n}",
              "explanation": "Uses `.catch(() => ({}))` when parsing error responses to handle non-JSON error bodies gracefully."
            }
          ]
        },
        {
          "id": "js-int-09-s3",
          "title": "3. Building URLs with `URLSearchParams`",
          "difficulty": "Intermediate",
          "explanation": "Manual query string concatenation (`?a=1&b=2`) is error-prone. The standard `URL` and `URLSearchParams` APIs handle encoding, key-value serialization, and array parameters automatically.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "url_search_params.js",
              "title": "Sanitized Query Parameter Construction",
              "code": "function buildSearchUrl(base, filters) {\n  const url = new URL(base);\n  const params = new URLSearchParams();\n\n  for (const [key, value] of Object.entries(filters)) {\n    if (value !== undefined && value !== null && value !== '') {\n      params.append(key, String(value));\n    }\n  }\n\n  url.search = params.toString();\n  return url.toString();\n}\n\nconst searchUrl = buildSearchUrl('https://api.skillora.ai/courses', {\n  query: 'JavaScript & React',\n  level: 'intermediate',\n  limit: 10,\n  page: 1\n});\n\nconsole.log(searchUrl);\n// \"https://api.skillora.ai/courses?query=JavaScript+%26+React&level=intermediate&limit=10&page=1\"",
              "lineByLine": [
                {
                  "line": "params.append(key, String(value))",
                  "explanation": "Encodes special characters (such as & and spaces) into valid URL entities."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Under what conditions will `fetch()` reject its returned Promise?",
            "options": [
              "When the server returns a 404 Not Found or 500 Internal Server Error",
              "Only when a network error occurs or the request is blocked (e.g. DNS failure, offline)",
              "Whenever response.ok is false",
              "When the response payload is not valid JSON"
            ],
            "correctAnswer": 1,
            "explanation": "`fetch()` only rejects on network failures or CORS blocking; HTTP error codes (404, 500) still resolve the Promise successfully."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-10",
    "orderIndex": 10,
    "title": "Modules and Code Organization",
    "description": "Master ES Modules (import/export), named vs default exports, module scope, circular dependencies, and clean architecture separation.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "ES Modules (ESM) provide official, standardized modularity in JavaScript. Each file is an isolated module scope. Code is organized into cohesive files exporting functions, classes, and constants, imported explicitly by consumer modules.",
      "analogyHero": "Think of modules like standardized LEGO blocks: each block is packaged in its own container with precise connectors (exports). You only unpack and snap in the exact blocks your castle requires, preventing clutter in the main playroom (global scope).",
      "objectives": [
        "Differentiate between Named Exports and Default Exports.",
        "Import specific symbols, rename imports using `as`, and import all symbols using `import * as`.",
        "Understand module scope isolation and avoid global variable pollution.",
        "Diagnose and prevent circular dependency bottlenecks.",
        "Structure scalable project folders using the Barrel Export pattern (`index.js`)."
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Modules always execute in Strict Mode (`\"use strict\"`) automatically.",
        "Prefer named exports over default exports for enhanced refactoring and autocomplete in IDEs.",
        "Module imports are static and hoisted, evaluated before top-level code execution begins.",
        "Dynamic imports `import(\"./module.js\")` return a Promise for lazy loading and code splitting."
      ],
      "summary": "ES Modules provide clean boundaries, static tree-shaking capabilities, and prevent global namespace collisions in professional applications.",
      "syntaxGuide": "// Named exports (mathUtils.js)\nexport const PI = 3.14159;\nexport function add(a, b) { return a + b; }\n\n// Default export (ApiService.js)\nexport default class ApiService { /* ... */ }\n\n// Importing in app.js\nimport ApiService, { PI, add as sum } from './mathUtils.js';",
      "practiceExercises": [
        {
          "title": "Utility Barrel Module",
          "instructions": "Create an `index.js` barrel file that re-exports functions `formatDate` from `./dateUtils.js` and `capitalize` from `./stringUtils.js`.",
          "starterCode": "// Re-export utility functions",
          "solutionCode": "export { formatDate } from './dateUtils.js';\nexport { capitalize } from './stringUtils.js';"
        }
      ],
      "sections": [
        {
          "id": "js-int-10-s1",
          "title": "1. Named Exports vs Default Exports",
          "difficulty": "Intermediate",
          "explanation": "Named exports allow sharing multiple symbols per file with strict identifier matching. Default exports allow exporting one main entity per file, which consumers can import under any arbitrary name.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "currency.js",
              "title": "Named and Default Export Patterns",
              "code": "// currency.js\nexport const SUPPORTED_CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY'];\n\nexport function formatUSD(amount) {\n  return `${amount.toFixed(2)}`;\n}\n\nexport default class CurrencyConverter {\n  convert(amount, rate) {\n    return amount * rate;\n  }\n}\n\n// In main.js:\n// import CurrencyConverter, { SUPPORTED_CURRENCIES, formatUSD } from './currency.js';",
              "lineByLine": [
                {
                  "line": "export const SUPPORTED_CURRENCIES",
                  "explanation": "Named export; must be imported with exact identifier or aliased."
                },
                {
                  "line": "export default class CurrencyConverter",
                  "explanation": "Default export; represents primary entity of the module."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-10-s2",
          "title": "2. Aliasing, Namespace Imports, & Dynamic Imports",
          "difficulty": "Intermediate",
          "explanation": "Imports can be renamed with `as` to resolve naming conflicts, bundled into a namespace object with `import * as`, or loaded on-demand via dynamic `import()`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "import_variations.js",
              "title": "Flexible Module Ingestion",
              "code": "// 1. Renaming to prevent collision\nimport { render as renderCanvas } from './canvasRenderer.js';\nimport { render as renderSvg } from './svgRenderer.js';\n\n// 2. Namespace import\nimport * as MathHelpers from './mathLib.js';\nconsole.log(MathHelpers.calculateArea(10, 20));\n\n// 3. Dynamic lazy loading (Code Splitting)\nasync function handleExportPdf() {\n  const { exportToPdf } = await import('./pdfExporter.js');\n  exportToPdf(document.body);\n}",
              "explanation": "Dynamic `import()` delays downloading `pdfExporter.js` until the user explicitly clicks the Export button."
            }
          ]
        },
        {
          "id": "js-int-10-s3",
          "title": "3. Circular Dependencies & Clean Architecture",
          "difficulty": "Intermediate",
          "explanation": "Circular dependencies occur when Module A imports Module B, and Module B imports Module A. This can result in `undefined` imports. Separate shared logic into dedicated utility or types modules.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "clean_architecture.js",
              "title": "Breaking Circular Dependencies with Shared Layers",
              "code": "// ❌ Circular: User.js imports Order.js, and Order.js imports User.js\n\n// ✅ Clean Architecture: Shared Layer (models.js or sharedUtils.js)\n// sharedConstants.js\nexport const ORDER_STATUS = { PENDING: 'pending', PAID: 'paid' };\n\n// User.js\nimport { ORDER_STATUS } from './sharedConstants.js';\nexport class User { /* ... */ }\n\n// Order.js\nimport { ORDER_STATUS } from './sharedConstants.js';\nexport class Order { /* ... */ }",
              "lineByLine": [
                {
                  "line": "import { ORDER_STATUS } from \"./sharedConstants.js\"",
                  "explanation": "Both modules depend downward on a shared leaf dependency, breaking the circular cycle."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What is the primary benefit of dynamic `import(\"./feature.js\")` over static top-level imports?",
            "options": [
              "Dynamic imports run in synchronous mode",
              "Dynamic imports allow on-demand lazy loading and code-splitting",
              "Dynamic imports bypass browser CORS security",
              "Dynamic imports can only be used in Node.js"
            ],
            "correctAnswer": 1,
            "explanation": "Dynamic `import()` returns a Promise, allowing applications to load heavy code bundles on demand only when required."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-11",
    "orderIndex": 11,
    "title": "Advanced DOM and Event Handling",
    "description": "Master Event Bubbling, Event Capturing, Event Delegation, Custom Events, DocumentFragments for high-performance DOM insertion, and accessibility.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "When events occur in the DOM, they propagate through three phases: Capturing (down from Document to target), Target, and Bubbling (up from target to Document). Leveraging Event Delegation and DocumentFragments allows developers to build high-performance, dynamic UIs with minimal memory overhead.",
      "analogyHero": "Think of Event Delegation like a hotel front desk: instead of placing a dedicated security guard at every single hotel room door (1,000 listeners), you place one concierge in the main lobby (parent listener) who inspects room keys and directs guests as they pass through.",
      "objectives": [
        "Understand the 3 phases of DOM event propagation: Capture, Target, and Bubble.",
        "Implement Event Delegation to handle dynamic lists efficiently with a single listener.",
        "Dispatch and listen for Custom Events (`new CustomEvent()`) to decouple components.",
        "Optimize batch DOM insertion using `DocumentFragment` to prevent layout thrashing.",
        "Ensure accessible keyboard navigation (`keydown`, `focus`, `aria-*` state syncing)."
      ],
      "estimatedTime": "60 mins",
      "keyTakeaways": [
        "Event Delegation attaches one listener to a parent and inspects `e.target.closest(selector)` to handle child interactions.",
        "`e.stopPropagation()` halts bubbling up the DOM tree.",
        "`document.createDocumentFragment()` provides a lightweight, off-screen container for building DOM subtrees without triggering reflows on append.",
        "`CustomEvent` transmits arbitrary metadata payloads via the `detail` property."
      ],
      "summary": "Event delegation and off-screen fragments optimize DOM performance and memory footprint in data-dense interfaces.",
      "syntaxGuide": "// Event Delegation Pattern:\ndocument.querySelector('#item-list').addEventListener('click', (e) => {\n  const deleteBtn = e.target.closest('.btn-delete');\n  if (!deleteBtn) return; // Click was not on or inside a delete button\n\n  const listItem = deleteBtn.closest('.item-row');\n  const itemId = listItem.dataset.id;\n  deleteItem(itemId);\n});",
      "practiceExercises": [
        {
          "title": "High-Performance List Appender",
          "instructions": "Write a function `renderItemsFast(container, items)` that creates `li` elements in a `DocumentFragment` and mounts them in a single batch append.",
          "starterCode": "function renderItemsFast(container, items) {\n  // Use DocumentFragment\n}",
          "solutionCode": "function renderItemsFast(container, items) {\n  const fragment = document.createDocumentFragment();\n  for (const text of items) {\n    const li = document.createElement('li');\n    li.textContent = text;\n    fragment.append(li);\n  }\n  container.append(fragment);\n}"
        }
      ],
      "sections": [
        {
          "id": "js-int-11-s1",
          "title": "1. Event Propagation: Capturing vs Bubbling",
          "difficulty": "Intermediate",
          "explanation": "Events first travel down from `window` to the target element (Capture Phase, enabled by `{ capture: true }`), trigger on the target, then bubble back up through ancestors to `window` (Bubble Phase).",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "propagation.js",
              "title": "Inspecting Event Bubbling and StopPropagation",
              "code": "const parent = document.querySelector('#card-parent');\nconst button = document.querySelector('#card-action-btn');\n\nparent.addEventListener('click', () => {\n  console.log('Parent card clicked (Bubbled)');\n});\n\nbutton.addEventListener('click', (event) => {\n  console.log('Action button clicked!');\n  // Halts bubbling to parent card:\n  event.stopPropagation();\n});",
              "lineByLine": [
                {
                  "line": "event.stopPropagation()",
                  "explanation": "Prevents the click event from bubbling up to parent card listeners."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-11-s2",
          "title": "2. The Event Delegation Pattern",
          "difficulty": "Intermediate",
          "explanation": "Instead of binding listeners to hundreds of dynamically generated list items, attach a single listener to the container. Use `event.target.closest()` to match the intended element.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "event_delegation.js",
              "title": "Handling Dynamic Actions with Delegation",
              "code": "const tableBody = document.querySelector('#data-table tbody');\n\ntableBody.addEventListener('click', (event) => {\n  // Check if click was on or inside an action button\n  const actionButton = event.target.closest('button[data-action]');\n  if (!actionButton) return;\n\n  const action = actionButton.dataset.action;\n  const row = actionButton.closest('tr');\n  const recordId = row.dataset.id;\n\n  if (action === 'delete') {\n    row.remove();\n    console.log(`Deleted record ${recordId}`);\n  } else if (action === 'edit') {\n    console.log(`Opening editor for record ${recordId}`);\n  }\n});",
              "explanation": "This single listener automatically handles new rows appended dynamically without re-attaching listeners."
            }
          ]
        },
        {
          "id": "js-int-11-s3",
          "title": "3. Custom Events and Decoupled Architecture",
          "difficulty": "Intermediate",
          "explanation": "Components can communicate across DOM hierarchies by dispatching `CustomEvent` instances containing custom metadata payloads.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "custom_events.js",
              "title": "Dispatching and Handling Custom Events",
              "code": "// Dispatched from Cart Component:\nfunction emitCartUpdate(cartCount, total) {\n  const event = new CustomEvent('cart:updated', {\n    bubbles: true,\n    detail: { cartCount, total, timestamp: Date.now() }\n  });\n  document.dispatchEvent(event);\n}\n\n// Listened by Navigation Badge Component:\ndocument.addEventListener('cart:updated', (event) => {\n  const { cartCount, total } = event.detail;\n  const badge = document.querySelector('#nav-cart-badge');\n  badge.textContent = cartCount;\n  console.log(`Cart updated: ${cartCount} items ($ ${total})`);\n});\n\nemitCartUpdate(3, 149.99);",
              "lineByLine": [
                {
                  "line": "new CustomEvent(\"cart:updated\", { bubbles: true, detail: ... })",
                  "explanation": "Constructs custom event with payload passed in the detail field."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What method is used in Event Delegation to find the nearest matching ancestor element of an event target?",
            "options": [
              "element.findParent()",
              "element.closest()",
              "element.matches()",
              "element.querySelector()"
            ],
            "correctAnswer": 1,
            "explanation": "`element.closest(selector)` traverses the element and its parents up the DOM tree until finding a node that matches the specified CSS selector."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-12",
    "orderIndex": 12,
    "title": "Forms, Validation, and User Experience",
    "description": "Master FormData API, HTML5 Constraint Validation, custom validation logic, debouncing input listeners, and accessible UX error states.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "Forms are the primary mechanism for collecting user inputs. Robust form engineering requires synchronous validation, debounced asynchronous checks (e.g. username availability), accessible error summaries, and FormData serialization.",
      "analogyHero": "Think of form validation like an airport security checkpoint: luggage size is checked before the line (constraint validation), your passport is scanned in real-time (debounced async check), and clear red markers indicate if prohibited items must be removed before proceeding.",
      "objectives": [
        "Serialize form inputs automatically using the `FormData` API.",
        "Leverage the HTML5 Constraint Validation API (`checkValidity`, `setCustomValidity`, `validity` object).",
        "Implement input debouncing to prevent excessive API calls on keystrokes.",
        "Manage disabled submit buttons to prevent double-submission errors.",
        "Render accessible live error alerts with `aria-live` and `aria-invalid` attributes."
      ],
      "estimatedTime": "55 mins",
      "keyTakeaways": [
        "`new FormData(formElement)` extracts all named form fields into an iterable key-value collection.",
        "Debouncing delays function execution until a specified idle duration has elapsed since the last event.",
        "`inputElement.validity` provides detailed boolean flags (`valueMissing`, `typeMismatch`, `tooShort`, `patternMismatch`).",
        "Always sync `aria-invalid=\"true\"` on invalid inputs to support screen readers."
      ],
      "summary": "Professional form architecture pairs instant local validation with debounced server checks, delivering accessible and resilient user feedback.",
      "syntaxGuide": "// Debounce implementation\nfunction debounce(fn, delay = 300) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n\n// Extracting form fields with FormData\nconst formData = new FormData(formElement);\nconst payload = Object.fromEntries(formData.entries());",
      "practiceExercises": [
        {
          "title": "Debounced Search Input Handler",
          "instructions": "Create a debounced input handler function that waits 400ms after the user stops typing before triggering `executeSearch(query)`.",
          "starterCode": "function setupDebouncedSearch(inputElement, onSearch) {\n  // Attach debounced listener\n}",
          "solutionCode": "function setupDebouncedSearch(inputElement, onSearch) {\n  let timer;\n  inputElement.addEventListener('input', (e) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      onSearch(e.target.value.trim());\n    }, 400);\n  });\n}"
        }
      ],
      "sections": [
        {
          "id": "js-int-12-s1",
          "title": "1. The `FormData` API and Serialization",
          "difficulty": "Intermediate",
          "explanation": "The `FormData` constructor gathers all form control values matching their `name` attributes. `Object.fromEntries(formData.entries())` converts the dataset directly into a JSON-ready object.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "formdata_demo.js",
              "title": "Serializing Multi-Input Forms with FormData",
              "code": "const checkoutForm = document.querySelector('#checkout-form');\n\ncheckoutForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n\n  const formData = new FormData(checkoutForm);\n  \n  // Convert into standard JavaScript object:\n  const payload = Object.fromEntries(formData.entries());\n  console.log('Serialized Order Payload:', payload);\n  // { fullName: 'Elena Rostova', shipping: 'express', paymentMethod: 'card' }\n});",
              "lineByLine": [
                {
                  "line": "new FormData(checkoutForm)",
                  "explanation": "Extracts all inputs containing a name attribute automatically."
                },
                {
                  "line": "Object.fromEntries(formData.entries())",
                  "explanation": "Creates plain object from key-value iterator."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-12-s2",
          "title": "2. Input Debouncing vs Throttling",
          "difficulty": "Intermediate",
          "explanation": "Debouncing delays invoking a function until `N` ms have passed since the last event (perfect for search inputs). Throttling limits invocation to at most once every `N` ms (ideal for window resize and scroll listeners).",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "debounce_utility.js",
              "title": "Generic Reusable Debounce Function",
              "code": "function debounce(fn, delay = 300) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => {\n      fn.apply(this, args);\n    }, delay);\n  };\n}\n\nconst searchInput = document.querySelector('#city-search');\n\nconst handleCitySearch = debounce(async (query) => {\n  if (query.length < 2) return;\n  console.log(`Dispatching API search for: \"${query}\"`);\n  // const data = await api.searchCities(query);\n}, 400);\n\nsearchInput.addEventListener('input', (e) => handleCitySearch(e.target.value));",
              "explanation": "Typing 10 characters rapidly only triggers a single API request 400ms after the user pauses."
            }
          ]
        },
        {
          "id": "js-int-12-s3",
          "title": "3. Constraint Validation API & Accessible Error States",
          "difficulty": "Intermediate",
          "explanation": "The browser provides native validation flags on inputs via `input.validity`. Combining this with ARIA attributes ensures screen readers announce errors immediately.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "constraint_validation.js",
              "title": "Accessible Validation Error Rendering",
              "code": "function validateEmailField(input, errorContainer) {\n  if (input.validity.valueMissing) {\n    errorContainer.textContent = 'Email address is required.';\n  } else if (input.validity.typeMismatch) {\n    errorContainer.textContent = 'Please enter a valid email format (e.g. name@domain.com).';\n  } else {\n    errorContainer.textContent = '';\n    input.setAttribute('aria-invalid', 'false');\n    return true;\n  }\n\n  input.setAttribute('aria-invalid', 'true');\n  return false;\n}",
              "lineByLine": [
                {
                  "line": "input.validity.typeMismatch",
                  "explanation": "Native browser check for type=\"email\" or type=\"url\" format violations."
                },
                {
                  "line": "input.setAttribute(\"aria-invalid\", \"true\")",
                  "explanation": "Notifies assistive technologies of invalid field state."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What is the primary difference between Debouncing and Throttling?",
            "options": [
              "Debounce runs on the server; throttle runs on the client",
              "Debounce waits until user stops triggering events for a delay period; Throttle enforces a maximum execution frequency over time",
              "Throttle cannot be used with input fields",
              "Debounce is only supported in ES6"
            ],
            "correctAnswer": 1,
            "explanation": "Debouncing bunches events and executes once after silence; throttling limits execution rate to fixed time intervals."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-13",
    "orderIndex": 13,
    "title": "Browser Storage and Application State",
    "description": "Master localStorage, sessionStorage, serialization with JSON.stringify/parse, storage quotas, error handling, and state synchronization across tabs.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "Web Storage provides client-side key-value persistence. `localStorage` persists data across browser restarts, while `sessionStorage` survives page reloads but clears when the browser tab closes. Implementing safe serialization, storage size validation, and fallback handling ensures reliable offline state.",
      "analogyHero": "Think of `localStorage` like a personal locker at the gym (your gear remains safe whenever you return tomorrow), while `sessionStorage` is like a guest tray at the café (it is cleared the moment you leave your table).",
      "objectives": [
        "Differentiate between `localStorage` (permanent) and `sessionStorage` (tab lifecycle).",
        "Serialize complex data structures cleanly using `JSON.stringify` and `JSON.parse`.",
        "Handle `QuotaExceededError` and corrupted JSON safely using defensive `try...catch` blocks.",
        "Listen for cross-tab storage changes using the `window.addEventListener(\"storage\")` event.",
        "Design versioned schema migrations for cached client data."
      ],
      "estimatedTime": "50 mins",
      "keyTakeaways": [
        "Web Storage keys and values must always be strings; non-string objects serialize to `\"[object Object]\"` unless converted with `JSON.stringify()`.",
        "LocalStorage has a synchronous ~5MB storage limit per origin; blocking calls with huge datasets will freeze the main thread.",
        "Never store sensitive credentials (passwords, plaintext JWTs with write access) in LocalStorage due to XSS vulnerability exposure.",
        "The `storage` event fires on other open tabs on the same origin when `localStorage` is modified."
      ],
      "summary": "LocalStorage provides straightforward persistence for user preferences and cached data. Defensive parsing and versioning prevent runtime crashes.",
      "syntaxGuide": "// Safe LocalStorage Wrapper with JSON Parsing\nconst Storage = {\n  get(key, fallback = null) {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? JSON.parse(item) : fallback;\n    } catch (e) {\n      console.warn(`Failed to read ${key} from storage:`, e);\n      return fallback;\n    }\n  },\n  set(key, value) {\n    try {\n      localStorage.setItem(key, JSON.stringify(value));\n      return true;\n    } catch (e) {\n      console.error(`Failed to save ${key} to storage:`, e);\n      return false;\n    }\n  }\n};",
      "practiceExercises": [
        {
          "title": "Recent Searches Cache",
          "instructions": "Write a class `RecentSearches` that manages a maximum list of 5 unique search queries in `localStorage`, moving duplicate queries to the front.",
          "starterCode": "class RecentSearches {\n  constructor(storageKey = 'recent_queries') {\n    this.key = storageKey;\n  }\n  // add(query), getAll(), clear()\n}",
          "solutionCode": "class RecentSearches {\n  constructor(storageKey = 'recent_queries') {\n    this.key = storageKey;\n  }\n\n  getAll() {\n    try {\n      return JSON.parse(localStorage.getItem(this.key)) || [];\n    } catch {\n      return [];\n    }\n  }\n\n  add(query) {\n    const list = this.getAll().filter((item) => item.toLowerCase() !== query.toLowerCase());\n    list.unshift(query);\n    const trimmed = list.slice(0, 5);\n    localStorage.setItem(this.key, JSON.stringify(trimmed));\n    return trimmed;\n  }\n\n  clear() {\n    localStorage.removeItem(this.key);\n  }\n}"
        }
      ],
      "sections": [
        {
          "id": "js-int-13-s1",
          "title": "1. `localStorage` vs `sessionStorage` Lifecycle",
          "difficulty": "Intermediate",
          "explanation": "`localStorage` persists indefinitely until cleared explicitly via JavaScript or user cache deletion. `sessionStorage` is scoped to the current browser tab session and destroyed when the tab closes.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "storage_lifecycle.js",
              "title": "Storing and Retrieving Session & Persistent Data",
              "code": "// Persistent user settings\nlocalStorage.setItem('app_theme', 'dark');\n\n// Temporary draft session data\nsessionStorage.setItem('current_checkout_step', 'payment');\n\nconsole.log('Theme:', localStorage.getItem('app_theme')); // 'dark'\nconsole.log('Checkout Step:', sessionStorage.getItem('current_checkout_step')); // 'payment'",
              "lineByLine": [
                {
                  "line": "localStorage.setItem(...)",
                  "explanation": "Persists across browser restarts."
                },
                {
                  "line": "sessionStorage.setItem(...)",
                  "explanation": "Scoped to the lifetime of the active browser tab."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-13-s2",
          "title": "2. Safe Serialization & Corruption Defense",
          "difficulty": "Intermediate",
          "explanation": "Corrupted localStorage values or invalid JSON will cause `JSON.parse` to throw a `SyntaxError`. Wrapping storage operations in defensive helper functions prevents app crashes.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "safe_storage.js",
              "title": "Defensive LocalStorage Client",
              "code": "function loadPersistentState(key, defaultState) {\n  try {\n    const raw = localStorage.getItem(key);\n    if (!raw) return defaultState;\n    return JSON.parse(raw);\n  } catch (err) {\n    console.warn(`[Storage] Corrupted key \"${key}\", resetting to default.`);\n    localStorage.removeItem(key);\n    return defaultState;\n  }\n}\n\nconst userCart = loadPersistentState('user_cart', { items: [], total: 0 });\nconsole.log('Cart Loaded:', userCart);",
              "explanation": "Automatically resets the corrupted key to defaultState if parsing fails."
            }
          ]
        },
        {
          "id": "js-int-13-s3",
          "title": "3. Cross-Tab State Synchronization via Storage Event",
          "difficulty": "Intermediate",
          "explanation": "When a tab updates `localStorage`, the browser fires a `storage` event in all OTHER open tabs belonging to the same origin, enabling real-time cross-tab state syncing (e.g. logging out in one tab logs out all tabs).",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "cross_tab_sync.js",
              "title": "Listening for Multi-Tab Updates",
              "code": "window.addEventListener('storage', (event) => {\n  console.log(`Key changed on another tab: ${event.key}`);\n  console.log('Old Value:', event.oldValue);\n  console.log('New Value:', event.newValue);\n\n  if (event.key === 'auth_token' && !event.newValue) {\n    alert('You have logged out in another tab. Redirecting...');\n    window.location.href = '/login';\n  }\n});",
              "lineByLine": [
                {
                  "line": "window.addEventListener(\"storage\", ...)",
                  "explanation": "Fires across all other open windows/tabs on the origin."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "When is data stored in `sessionStorage` cleared automatically by the browser?",
            "options": [
              "When the user refreshes the page",
              "When the browser tab or window is closed",
              "After 24 hours",
              "When the computer is restarted"
            ],
            "correctAnswer": 1,
            "explanation": "`sessionStorage` data survives page reloads within the same tab, but is completely cleared when the specific tab or window is closed."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-14",
    "orderIndex": 14,
    "title": "Debugging, Testing, and Code Quality",
    "description": "Master browser DevTools source inspection, watch expressions, unit testing principles, assertions, defensive coding, and refactoring techniques.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 120,
    "level": "intermediate",
    "type": "theory",
    "lessonContent": {
      "overview": "Writing production-grade JavaScript requires structured debugging workflows, defensive error handling, automated testing strategies (Unit, Integration), and continuous refactoring toward clean code standards.",
      "analogyHero": "Think of automated testing like structural stress tests on an aircraft wing: before passengers board the plane, hydraulic presses flex the wing to 150% of maximum expected load to prove it will not snap during turbulent flight.",
      "objectives": [
        "Master Chrome/Firefox DevTools Sources panel: conditional breakpoints, step-into/over/out, and watch expressions.",
        "Understand the Anatomy of a Unit Test (Arrange, Act, Assert).",
        "Write lightweight assertion helpers for client-side regression validation.",
        "Apply defensive programming techniques to guard against undefined input parameters.",
        "Refactor complex imperative code into maintainable, self-documenting functions."
      ],
      "estimatedTime": "55 mins",
      "keyTakeaways": [
        "Conditional breakpoints only pause execution when a specified JavaScript expression evaluates to true.",
        "Follow the AAA pattern in tests: Arrange (set up state), Act (execute unit), Assert (verify expected outcome).",
        "Defensive coding validates boundary inputs early without cluttering core business logic.",
        "Clean naming conventions (verbs for functions, nouns for objects/variables) eliminate the need for redundant comments."
      ],
      "summary": "Disciplined debugging and automated test suites give developers confidence to refactor and expand software architectures without introducing regressions.",
      "syntaxGuide": "// Minimal Unit Test & Assertion Runner\nfunction assertEqual(actual, expected, testName) {\n  if (actual === expected) {\n    console.log(`✅ PASS: ${testName}`);\n  } else {\n    console.error(`❌ FAIL: ${testName} -> Expected \"${expected}\", got \"${actual}\"`);\n  }\n}\n\n// Unit Test Example\nconst sum = (a, b) => a + b;\nassertEqual(sum(2, 3), 5, 'sum adds two positive numbers');",
      "practiceExercises": [
        {
          "title": "Unit Test Suite for Currency Formatter",
          "instructions": "Write unit tests validating a function `formatCurrency(val)` across positive numbers, zero, negative numbers, and non-numeric inputs.",
          "starterCode": "function testFormatCurrency() {\n  // Write assertions\n}",
          "solutionCode": "function testFormatCurrency() {\n  const format = (v) => typeof v === 'number' ? `${v.toFixed(2)}` : '$0.00';\n  console.assert(format(19.99) === '$19.99', 'Formats positive floats');\n  console.assert(format(0) === '$0.00', 'Formats zero');\n  console.assert(format(null) === '$0.00', 'Handles null safely');\n}"
        }
      ],
      "sections": [
        {
          "id": "js-int-14-s1",
          "title": "1. Advanced DevTools: Conditional Breakpoints & Call Stack",
          "difficulty": "Intermediate",
          "explanation": "Right-clicking a line number in DevTools allows setting a Conditional Breakpoint (e.g. `userId === \"usr_99\"`), skipping thousands of loop iterations until the exact failure condition triggers.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "devtools_debugging.js",
              "title": "Simulating Diagnostic Conditions",
              "code": "function processOrders(orders) {\n  for (const order of orders) {\n    // Setting conditional breakpoint in DevTools: order.total < 0\n    validateOrder(order);\n  }\n}\n\nfunction validateOrder(order) {\n  if (order.total < 0) {\n    console.error('Corrupted negative order total:', order);\n  }\n}\n\nprocessOrders([{ id: 1, total: 50 }, { id: 2, total: -10 }, { id: 3, total: 120 }]);",
              "lineByLine": [
                {
                  "line": "validateOrder(order)",
                  "explanation": "Call stack displays processOrders -> validateOrder during breakpoint inspection."
                }
              ]
            }
          ]
        },
        {
          "id": "js-int-14-s2",
          "title": "2. Unit Testing Fundamentals (Arrange, Act, Assert)",
          "difficulty": "Intermediate",
          "explanation": "Unit tests isolate single functions and verify their behavior across normal, boundary, and invalid inputs using the standard AAA structure.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "unit_tests.js",
              "title": "AAA Unit Test Pattern",
              "code": "function calculateDiscount(price, couponCode) {\n  if (typeof price !== 'number' || price < 0) return 0;\n  if (couponCode === 'SAVE20') return price * 0.8;\n  if (couponCode === 'HALF') return price * 0.5;\n  return price;\n}\n\n// Test Suite:\nfunction runDiscountTests() {\n  // Test 1: Valid 20% coupon\n  // Arrange\n  const price = 100;\n  const coupon = 'SAVE20';\n  // Act\n  const finalPrice = calculateDiscount(price, coupon);\n  // Assert\n  console.assert(finalPrice === 80, 'Test 1 Failed: SAVE20 should reduce 100 to 80');\n\n  // Test 2: Invalid coupon\n  console.assert(calculateDiscount(100, 'INVALID') === 100, 'Test 2 Failed: Unknown coupon should return original price');\n\n  // Test 3: Edge case negative input\n  console.assert(calculateDiscount(-50, 'SAVE20') === 0, 'Test 3 Failed: Negative prices should return 0');\n\n  console.log('All discount unit tests completed.');\n}\n\nrunDiscountTests();",
              "explanation": "`console.assert(condition, message)` logs an error message only if the boolean assertion evaluates to false."
            }
          ]
        },
        {
          "id": "js-int-14-s3",
          "title": "3. Defensive Programming and Refactoring",
          "difficulty": "Intermediate",
          "explanation": "Defensive programming anticipates missing properties, wrong types, and network timeouts. Refactoring transforms working code into clean, modular abstractions without altering external behavior.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "defensive_coding.js",
              "title": "Defensive Guard Clauses and Fail-Safe Defaults",
              "code": "function computeUserStats(user) {\n  // Defensive parameter check\n  if (!user || typeof user !== 'object') {\n    return { completedCount: 0, averageScore: 0 };\n  }\n\n  const scores = Array.isArray(user.scores) ? user.scores : [];\n  if (scores.length === 0) {\n    return { completedCount: 0, averageScore: 0 };\n  }\n\n  const total = scores.reduce((sum, s) => sum + (typeof s === 'number' ? s : 0), 0);\n  const averageScore = Math.round(total / scores.length);\n\n  return { completedCount: scores.length, averageScore };\n}",
              "lineByLine": [
                {
                  "line": "Array.isArray(user.scores) ? user.scores : []",
                  "explanation": "Guarantees scores is an array, preventing \"scores.reduce is not a function\" errors."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What do the three letters in the AAA unit testing pattern stand for?",
            "options": [
              "Action, Analysis, Assessment",
              "Arrange, Act, Assert",
              "Allocate, Authorize, Apply",
              "Array, Attribute, Argument"
            ],
            "correctAnswer": 1,
            "explanation": "The AAA pattern stands for Arrange (prepare test fixtures/state), Act (execute function under test), and Assert (verify expected outcome)."
          }
        }
      ]
    }
  },
  {
    "id": "js-int-p1",
    "orderIndex": 15,
    "title": "Intermediate Practical Project: Weather Dashboard",
    "description": "Build a fully responsive, API-driven Weather Dashboard application featuring city searches, live weather fetching, loading/error states, recent search caching in localStorage, and modular architecture.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 350,
    "level": "intermediate",
    "type": "project",
    "isProject": true,
    "projectDetails": {
      "title": "Weather Dashboard",
      "category": "Web Development",
      "difficulty": "Intermediate",
      "estimatedTime": "4-6 hours",
      "overview": "Develop a modern, modular Weather Dashboard application that connects to a real external weather API (or mock API layer) to deliver real-time weather telemetry, temperature metrics, atmospheric conditions, 5-day forecasts, recent search history persistence in LocalStorage, and responsive UI feedback.",
      "learningObjectives": [
        "Implement async/await data fetching with comprehensive HTTP status error handling.",
        "Manage asynchronous UI states (Initial, Loading, Success, Error).",
        "Persist and synchronize recent city searches using LocalStorage.",
        "Organize code into modular ES files with clear separation of concerns (API client, Storage, UI Renderer).",
        "Apply debouncing on city search inputs and handle keyboard shortcuts."
      ],
      "requirements": [
        "Search Interface: Input field to search weather by city name with input validation and debounced suggestions.",
        "Live Data Fetching: Async API integration fetching temperature, weather condition icons, humidity, wind speed, and UV index.",
        "Loading & Error States: Accessible spinner during pending network requests and clear error messages on 404/network failure.",
        "Recent Searches: Save up to 5 recent city searches in `localStorage`, displaying them as quick-action clickable chips.",
        "Forecast Display: Multi-day weather forecast cards showing high/low temps and weather icons.",
        "Unit Toggle: Switch between Celsius (°C) and Fahrenheit (°F) with immediate recalculation.",
        "Modular Structure: Clean separation of files (api.js, storage.js, ui.js, app.js).",
        "Responsive Design: Flawless layout across mobile (375px), tablet, and desktop viewports."
      ],
      "deliverables": [
        "Complete project source code (index.html, styles.css, app.js, api.js, storage.js, ui.js).",
        "Functional asynchronous API integration with robust `response.ok` error handling.",
        "Working loading spinners and accessible error banner components.",
        "LocalStorage recent searches feature with deduplication and quick-load buttons.",
        "Unit conversion toggle (°C / °F) with dynamic UI updates.",
        "Clean modular ES6 architecture adhering to separation of concerns.",
        "Unit test suite testing temperature conversion and storage utilities.",
        "Testing checklist verifying mobile responsiveness and offline resilience.",
        "Screenshots or screen recording demonstrating live weather lookup flow.",
        "Written technical report explaining async architecture and design decisions."
      ],
      "rubric": [
        {
          "criteria": "Async Architecture & API Handling",
          "points": 30,
          "description": "Correct async/await patterns, error status interception, and network timeout defense."
        },
        {
          "criteria": "LocalStorage State Management",
          "points": 25,
          "description": "Reliable persistence, duplicate deduplication, and safe JSON parsing."
        },
        {
          "criteria": "UI State & Responsive UX",
          "points": 25,
          "description": "Smooth loading states, mobile optimization, temperature toggle, and accessible error alerts."
        },
        {
          "criteria": "Code Organization & Modularity",
          "points": 20,
          "description": "Clean ES modules, well-named functions, and separation of UI from data services."
        }
      ],
      "commonMistakes": [
        "Failing to check `response.ok`, leading to broken UI when API returns 404 for invalid city names.",
        "Storing raw unsanitized strings in LocalStorage without `try...catch` safety wrappers.",
        "Hardcoding API secrets in public client repositories without configuration abstractions."
      ]
    }
  },
  {
    "id": "js-int-assessment",
    "orderIndex": 16,
    "title": "Intermediate Level Final Assessment",
    "description": "Comprehensive 30-question multiple-choice assessment testing higher-order functions, advanced array methods, modern ES6+ destructuring, classes, prototypes, this binding, event loop, promises, async/await, fetch API, modules, event delegation, and browser storage.",
    "status": "locked",
    "requiresQuiz": true,
    "xpReward": 300,
    "level": "intermediate",
    "type": "assessment",
    "isFinalAssessment": true,
    "passingScore": 25,
    "totalQuestions": 30,
    "questions": [
      {
        "id": 1,
        "question": "What defines a Higher-Order Function in JavaScript?",
        "options": [
          "A function that accepts one or more functions as arguments, or returns a function",
          "A function that executes in the global scope",
          "A function declared with the async keyword",
          "A function with more than 5 parameters"
        ],
        "correctAnswer": 0,
        "explanation": "A higher-order function is any function that either takes one or more functions as arguments or returns a function as its result.",
        "topic": "Advanced Functions"
      },
      {
        "id": 2,
        "question": "What occurs if a recursive function in JavaScript never satisfies its base case condition?",
        "options": [
          "It throws a RangeError: Maximum call stack size exceeded",
          "It continues running indefinitely without error",
          "It returns undefined automatically",
          "The browser pauses execution with a debugger prompt"
        ],
        "correctAnswer": 0,
        "explanation": "Each recursive call adds a frame to the call stack until memory is exhausted, throwing a `RangeError: Maximum call stack size exceeded`.",
        "topic": "Recursion & Call Stack"
      },
      {
        "id": 3,
        "question": "Which array method transforms an array by applying a callback to every element and returns a BRAND NEW array of identical length without mutating the source?",
        "options": [
          "map()",
          "forEach()",
          "filter()",
          "splice()"
        ],
        "correctAnswer": 0,
        "explanation": "`map()` creates a new array populated with the results of calling a provided function on every element in the calling array.",
        "topic": "Array Methods"
      },
      {
        "id": 4,
        "question": "What is the initial value passed to `array.reduce((acc, curr) => acc + curr, 100)`?",
        "options": [
          "100",
          "The first element of the array",
          "0",
          "undefined"
        ],
        "correctAnswer": 0,
        "explanation": "The second argument to `reduce` (100 in this case) initializes the accumulator for the first iteration step.",
        "topic": "Array Reduce"
      },
      {
        "id": 5,
        "question": "Why does `[20, 5, 100, 40].sort()` order numbers as `[100, 20, 40, 5]` by default?",
        "options": [
          "Because default sort treats elements as strings and compares UTF-16 code units lexicographically",
          "Because sort() is deprecated",
          "Because 100 has more digits than 5",
          "Because sort() only operates on even numbers"
        ],
        "correctAnswer": 0,
        "explanation": "By default, `sort()` converts elements to strings. \"100\" comes before \"20\" and \"5\" alphabetically. A numeric comparator `(a, b) => a - b` must be provided.",
        "topic": "Array Sorting"
      },
      {
        "id": 6,
        "question": "What is the result of destructuring `const { theme = 'dark', padding } = { padding: 20 }`?",
        "options": [
          "theme is \"dark\", padding is 20",
          "theme is undefined, padding is 20",
          "Throws ReferenceError",
          "theme is null, padding is 20"
        ],
        "correctAnswer": 0,
        "explanation": "Since `theme` was not present in the source object, it defaulted to `\"dark\"`, while `padding` was assigned `20`.",
        "topic": "Destructuring"
      },
      {
        "id": 7,
        "question": "When merging objects with spread `{ ...objA, ...objB }`, what happens if both objects contain a property named `id`?",
        "options": [
          "The value from objB overwrites the value from objA",
          "A SyntaxError is thrown",
          "The value from objA is preserved and objB is ignored",
          "id becomes an array containing both values"
        ],
        "correctAnswer": 0,
        "explanation": "In object spread operations, properties defined later in the literal overwrite earlier properties with matching keys.",
        "topic": "Spread Syntax"
      },
      {
        "id": 8,
        "question": "In ES6 classes, which syntax declares a private instance field that cannot be read or modified outside the class body?",
        "options": [
          "#balance;",
          "_balance;",
          "private balance;",
          "$balance;"
        ],
        "correctAnswer": 0,
        "explanation": "The `#` prefix (e.g. `#balance`) declares a private class field enforced at the language level in modern JavaScript.",
        "topic": "Classes & Private Fields"
      },
      {
        "id": 9,
        "question": "What is the purpose of calling `super()` inside the constructor of a derived subclass extending a parent class?",
        "options": [
          "It optimizes prototype memory",
          "It invokes the parent class constructor and establishes the `this` context for the subclass",
          "It binds all instance methods automatically",
          "It makes all parent properties private"
        ],
        "correctAnswer": 1,
        "explanation": "In a subclass constructor, `super()` must be called before accessing `this` to initialize the parent class state.",
        "topic": "Class Inheritance"
      },
      {
        "id": 10,
        "question": "How do Arrow Functions determine their `this` context?",
        "options": [
          "Dynamically based on the object to the left of the dot at invocation",
          "Lexically from the enclosing scope where the arrow function was defined",
          "They always bind this to the global window object",
          "They bind this to null in strict mode"
        ],
        "correctAnswer": 1,
        "explanation": "Arrow functions do not bind their own `this`; they inherit `this` lexically from their surrounding enclosing execution context.",
        "topic": "The this Keyword"
      },
      {
        "id": 11,
        "question": "What is the primary difference between `fn.call(ctx, 1, 2)` and `fn.apply(ctx, [1, 2])`?",
        "options": [
          "call() returns a Promise while apply() does not",
          "call() accepts arguments as a comma-separated list, whereas apply() accepts arguments as an array",
          "apply() binds this permanently while call() does not",
          "call() can only be used on arrow functions"
        ],
        "correctAnswer": 1,
        "explanation": "Both methods invoke the function immediately with explicit context `ctx`; `call` expects individual argument parameters, while `apply` expects an arguments array.",
        "topic": "Function Binding"
      },
      {
        "id": 12,
        "question": "What does `fn.bind(ctx)` return when called on a function?",
        "options": [
          "The evaluated return value of fn()",
          "A brand new function whose `this` keyword is permanently bound to `ctx`",
          "A Promise resolving to ctx",
          "A cloned prototype object"
        ],
        "correctAnswer": 1,
        "explanation": "`.bind()` creates and returns a new bound function that, when invoked, has its `this` keyword set to the provided value.",
        "topic": "Function Binding"
      },
      {
        "id": 13,
        "question": "In the JavaScript Event Loop, which queue is checked and completely drained first when the Call Stack becomes empty?",
        "options": [
          "The Macrotask (Task) Queue (setTimeout / setInterval callbacks)",
          "The Microtask Queue (Promise .then / queueMicrotask callbacks)",
          "The Web Workers Queue",
          "The RequestAnimationFrame Queue"
        ],
        "correctAnswer": 1,
        "explanation": "The Microtask Queue has higher priority and is completely drained before the event loop executes the next Macrotask.",
        "topic": "Event Loop & Queues"
      },
      {
        "id": 14,
        "question": "What will be the output order of: `console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);`?",
        "options": [
          "1, 2, 3, 4",
          "1, 4, 3, 2",
          "1, 4, 2, 3",
          "4, 1, 3, 2"
        ],
        "correctAnswer": 1,
        "explanation": "Synchronous statements (1 and 4) execute first, followed by microtasks (3), followed by macrotasks (2).",
        "topic": "Event Loop Order"
      },
      {
        "id": 15,
        "question": "What are the three possible states of a JavaScript Promise?",
        "options": [
          "uninitialized, active, completed",
          "pending, fulfilled, rejected",
          "waiting, resolved, failed",
          "queued, executing, finished"
        ],
        "correctAnswer": 1,
        "explanation": "A Promise is always in one of three mutually exclusive states: `pending`, `fulfilled`, or `rejected`.",
        "topic": "Promises"
      },
      {
        "id": 16,
        "question": "How does `Promise.all([p1, p2, p3])` behave if `p2` rejects with an error while `p1` and `p3` are still pending?",
        "options": [
          "It waits for p1 and p3 to finish before rejecting",
          "It rejects immediately with the error from p2 (fail-fast behavior)",
          "It ignores p2 and returns values of p1 and p3",
          "It converts the error into null"
        ],
        "correctAnswer": 1,
        "explanation": "`Promise.all` employs a fail-fast strategy: if any input promise rejects, the entire returned promise rejects immediately.",
        "topic": "Promise Combinators"
      },
      {
        "id": 17,
        "question": "Which Promise combinator waits for ALL promises to settle and returns an array of outcome objects `{ status, value | reason }`?",
        "options": [
          "Promise.all()",
          "Promise.race()",
          "Promise.allSettled()",
          "Promise.any()"
        ],
        "correctAnswer": 2,
        "explanation": "`Promise.allSettled()` never short-circuits on rejection; it waits for all promises to settle and reports individual outcomes.",
        "topic": "Promise Combinators"
      },
      {
        "id": 18,
        "question": "What happens when an `async` function returns a raw primitive value like `return 42;`?",
        "options": [
          "The function returns the number 42 synchronously",
          "A TypeError is thrown",
          "JavaScript automatically wraps 42 in a resolved Promise (`Promise.resolve(42)`)",
          "It returns undefined"
        ],
        "correctAnswer": 2,
        "explanation": "Async functions always return Promises; non-promise return values are automatically wrapped in a fulfilled Promise.",
        "topic": "Async/Await"
      },
      {
        "id": 19,
        "question": "Under what circumstances does the browser `fetch()` API reject its Promise?",
        "options": [
          "When the server returns a 404 Not Found status code",
          "When the server returns a 500 Internal Server Error status code",
          "Only on catastrophic network failures, DNS resolution errors, or blocked CORS requests",
          "Whenever response.json() encounters null"
        ],
        "correctAnswer": 2,
        "explanation": "`fetch()` only rejects on network failures or security blocking. HTTP error status codes (400, 404, 500) resolve normally with `response.ok === false`.",
        "topic": "Fetch API"
      },
      {
        "id": 20,
        "question": "Which HTTP header must be included when sending a JSON payload string via a `fetch` POST request?",
        "options": [
          "Accept-Encoding: gzip",
          "Content-Disposition: inline",
          "Content-Type: application/json",
          "Transfer-Encoding: chunked"
        ],
        "correctAnswer": 2,
        "explanation": "`Content-Type: application/json` informs the backend server to parse the incoming request body as JSON.",
        "topic": "Fetch API Headers"
      },
      {
        "id": 21,
        "question": "What is the purpose of dynamic import `const module = await import(\"./feature.js\")`?",
        "options": [
          "It executes the script synchronously",
          "It imports modules without CORS validation",
          "It loads the module on demand at runtime, enabling code splitting and reducing initial bundle size",
          "It replaces ES modules with CommonJS"
        ],
        "correctAnswer": 2,
        "explanation": "Dynamic `import()` returns a Promise, allowing applications to load heavy dependencies on demand rather than in the initial page payload.",
        "topic": "ES Modules"
      },
      {
        "id": 22,
        "question": "What is Event Delegation in modern DOM architecture?",
        "options": [
          "Attaching separate event listeners to every single child node",
          "Delegating event handling to a Web Worker thread",
          "Attaching a single event listener to a common parent element and using `e.target` / `closest()` to handle child events via bubbling",
          "Disabling all click events across the document"
        ],
        "correctAnswer": 2,
        "explanation": "Event delegation leverages event bubbling by listening on a parent container to manage events from existing or dynamically added child elements.",
        "topic": "DOM & Event Delegation"
      },
      {
        "id": 23,
        "question": "What is the primary performance benefit of using `document.createDocumentFragment()` when building dynamic lists?",
        "options": [
          "It automatically styles list elements",
          "It converts HTML directly into WebGL textures",
          "It builds DOM nodes in memory off-screen, triggering only a single browser reflow when appended to the live document",
          "It bypasses JavaScript garbage collection"
        ],
        "correctAnswer": 2,
        "explanation": "Appending nodes to a `DocumentFragment` occurs in memory off-screen; appending the fragment to the DOM causes only a single reflow/repaint.",
        "topic": "DOM Performance"
      },
      {
        "id": 24,
        "question": "Which method should be called inside a click listener to prevent the event from bubbling up to parent element listeners?",
        "options": [
          "event.preventDefault()",
          "event.cancelBubble()",
          "event.stopImmediate()",
          "event.stopPropagation()"
        ],
        "correctAnswer": 3,
        "explanation": "`event.stopPropagation()` stops the event from propagating further up (or down in capture) the DOM tree.",
        "topic": "Event Propagation"
      },
      {
        "id": 25,
        "question": "What is the primary functional difference between Debouncing and Throttling?",
        "options": [
          "Debounce can only run on the server",
          "Debounce is for mouse events; throttle is for keyboard events",
          "Throttle returns a Promise; debounce returns a callback",
          "Debounce delays execution until a period of inactivity; throttle limits execution to a maximum rate over time"
        ],
        "correctAnswer": 3,
        "explanation": "Debounce waits until events stop firing for `N` ms before running; throttle guarantees execution at most once every `N` ms during continuous events.",
        "topic": "Performance Optimization"
      },
      {
        "id": 26,
        "question": "How do you serialize a standard `<form>` element's inputs into a plain JavaScript key-value object using modern APIs?",
        "options": [
          "JSON.stringify(formElement)",
          "Array.from(formElement.inputs)",
          "formElement.toObject()",
          "Object.fromEntries(new FormData(formElement).entries())"
        ],
        "correctAnswer": 3,
        "explanation": "`new FormData(form)` collects all named fields, and `Object.fromEntries(formData.entries())` converts the key-value iterator into a plain object.",
        "topic": "Forms & FormData"
      },
      {
        "id": 27,
        "question": "What is the lifespan of data stored in the browser's `sessionStorage`?",
        "options": [
          "It persists permanently until manually cleared",
          "It is deleted as soon as the user navigates to another URL in the same tab",
          "It expires exactly 1 hour after creation",
          "It persists across page reloads within the same tab, but is deleted when the tab or window is closed"
        ],
        "correctAnswer": 3,
        "explanation": "`sessionStorage` is scoped to the tab session; it survives reloads but is cleared when the tab is closed.",
        "topic": "Browser Storage"
      },
      {
        "id": 28,
        "question": "What occurs when you store a plain object in localStorage via `localStorage.setItem('user', { name: 'Alex' })` without JSON serialization?",
        "options": [
          "It throws a TypeError immediately",
          "It stores a pointer reference",
          "The browser serializes it to JSON automatically",
          "The object is converted to the string `\"[object Object]\"`, corrupting the data"
        ],
        "correctAnswer": 3,
        "explanation": "LocalStorage values must be strings; passing an object implicitly calls `.toString()`, converting `{ name: \"Alex\" }` into `\"[object Object]\"`. `JSON.stringify` must be used.",
        "topic": "Browser Storage"
      },
      {
        "id": 29,
        "question": "What is the purpose of a Conditional Breakpoint in browser Developer Tools?",
        "options": [
          "It pauses execution on every single line of code",
          "It disables all CSS animations",
          "It only pauses if a network request fails",
          "It pauses execution only when a specified JavaScript expression evaluates to true"
        ],
        "correctAnswer": 3,
        "explanation": "Conditional breakpoints evaluate an expression on each hit and only pause execution when the expression evaluates to truthy.",
        "topic": "Debugging Workflows"
      },
      {
        "id": 30,
        "question": "In the Arrange-Act-Assert (AAA) unit testing pattern, what is the role of the \"Assert\" step?",
        "options": [
          "Initialize mock data and instantiate dependencies",
          "Execute the target function being tested",
          "Clean up test databases after execution",
          "Verify that the actual execution result matches the expected outcome"
        ],
        "correctAnswer": 3,
        "explanation": "The Assert step checks that the output or state produced by the Act step matches expected conditions (e.g. `expect(result).toBe(5)`).",
        "topic": "Testing & Code Quality"
      }
    ]
  }
];

export const JAVASCRIPT_INTERMEDIATE_FINAL_ASSESSMENT = JAVASCRIPT_INTERMEDIATE_TASKS.find((t) => t.id === 'js-int-assessment')!.questions!;
