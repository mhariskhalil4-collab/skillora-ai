import { Task } from '../../types/roadmap.types';

export const JAVASCRIPT_ADVANCED_TASKS: Task[] = [
  {
    "id": "js-adv-01",
    "orderIndex": 1,
    "title": "JavaScript Runtime and Event Loop Mastery",
    "description": "Master execution contexts, heap allocation, call stack frames, V8 garbage collection (generational, Scavenge, Mark-Sweep), rendering pipeline coordination, and thread starvation defense.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "Behind every line of JavaScript sits a complex execution engine. Understanding the memory heap, execution contexts (Variable Environment, Lexical Environment), the generational garbage collector (Orinoco/Scavenger), and how the Event Loop interleaves with the browser rendering pipeline (Style -> Layout -> Paint -> Composite) is what separates senior JavaScript engineers from standard practitioners.",
      "analogyHero": "Think of the V8 engine like an ultra-high-speed automated trading exchange: matching buy/sell orders (synchronous code) on a single high-frequency terminal, routing pending options contracts to background clearinghouses (Web APIs), running instant priority reconciliations (Microtasks), and scheduling batch settlement windows (Event loop ticks & RAF) without halting live trading.",
      "objectives": [
        "Deep-dive into Execution Context creation, Lexical Environment records, and the Call Stack.",
        "Analyze V8 memory allocation across the Young Generation (Nursery, Intermediate) and Old Generation.",
        "Understand Garbage Collection algorithms: Scavenge algorithm (Cheney's copy) vs Major GC (Mark-Sweep-Compact).",
        "Coordinate async execution with the 60fps/120fps browser rendering loop via `requestAnimationFrame`.",
        "Implement resilient concurrency scheduling with `scheduler.yield()` and `queueMicrotask`."
      ],
      "estimatedTime": "65 mins",
      "keyTakeaways": [
        "Each execution context contains an Environment Record and an outer reference pointing to its parent lexical scope.",
        "V8 garbage collection is generational: short-lived objects in the Young Gen are collected quickly via Scavenge, while long-lived objects are promoted to the Old Gen and collected via incremental Mark-Sweep.",
        "`requestAnimationFrame` executes right before the browser calculates Style/Layout and performs Paint, making it ideal for smooth UI animations.",
        "Excessive microtask recursion (`queueMicrotask` in a loop) will starve the Event Loop, completely blocking user input and browser rendering."
      ],
      "summary": "Mastery of the low-level runtime engine empowers developers to write memory-efficient, non-blocking code that delivers smooth 60fps animations.",
      "syntaxGuide": "// Scheduling high-priority non-blocking microtasks:\nqueueMicrotask(() => {\n  // Executes immediately after current synchronous script, before next Macrotask/Render\n  console.log('High-priority state reconciliation');\n});\n\n// Aligning visual updates with browser repaint cycle:\nfunction smoothAnimate(element, targetX) {\n  let currentX = 0;\n  function step() {\n    currentX += (targetX - currentX) * 0.1;\n    element.style.transform = `translateX(${currentX}px)`;\n    if (Math.abs(targetX - currentX) > 0.5) {\n      requestAnimationFrame(step);\n    }\n  }\n  requestAnimationFrame(step);\n}",
      "practiceExercises": [
        {
          "title": "Frame-Budgeted Work Scheduler",
          "instructions": "Write a class `FrameScheduler` that processes a queue of tasks during idle frame time without exceeding a 12ms execution budget per animation frame.",
          "starterCode": "class FrameScheduler {\n  constructor() {\n    this.queue = [];\n  }\n  // add(task), run()\n}",
          "solutionCode": "class FrameScheduler {\n  constructor() {\n    this.queue = [];\n    this.isScheduled = false;\n  }\n\n  add(task) {\n    this.queue.push(task);\n    if (!this.isScheduled) {\n      this.isScheduled = true;\n      requestAnimationFrame(this.processBatch.bind(this));\n    }\n  }\n\n  processBatch() {\n    const start = performance.now();\n    while (this.queue.length > 0 && performance.now() - start < 12) {\n      const task = this.queue.shift();\n      task();\n    }\n\n    if (this.queue.length > 0) {\n      requestAnimationFrame(this.processBatch.bind(this));\n    } else {\n      this.isScheduled = false;\n    }\n  }\n}"
        }
      ],
      "sections": [
        {
          "id": "js-adv-01-s1",
          "title": "1. Execution Contexts & The Environment Record",
          "difficulty": "Advanced",
          "explanation": "When a function executes, the engine instantiates an Execution Context consisting of: 1. Lexical Environment (identifier-to-variable mappings), 2. Variable Environment, and 3. `this` binding. Scope resolution traverses outer environment references.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "execution_context.js",
              "title": "Inspecting Lexical Environment Chains",
              "code": "function createEnvironment(levelName) {\n  const levelSecret = `secret_${levelName}`;\n  \n  return function inspectChild(childKey) {\n    // Child environment record links to outer createEnvironment record:\n    return {\n      levelName,\n      levelSecret,\n      childKey,\n      timestamp: performance.now()\n    };\n  };\n}\n\nconst inspector = createEnvironment('Tier-3');\nconsole.log(inspector('k_99'));",
              "lineByLine": [
                {
                  "line": "return function inspectChild(childKey)",
                  "explanation": "Creates child execution context whose outer environment reference points to createEnvironment."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-01-s2",
          "title": "2. V8 Generational Garbage Collection & Memory Leaks",
          "difficulty": "Advanced",
          "explanation": "V8 divides heap memory into Young and Old spaces based on the Generational Hypothesis (most objects die young). Scavenger handles short-lived objects, while Mark-Sweep handles long-lived allocations. Memory leaks occur when retained references (unremoved event listeners, detached DOM trees, uncleared intervals) prevent garbage collection.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "memory_leaks.js",
              "title": "Preventing Detached DOM and Listener Leaks",
              "code": "// ❌ Memory Leak: Retaining detached DOM node and active event listener\nclass LeakyWidget {\n  constructor(element) {\n    this.element = element;\n    this.handler = () => console.log('Element clicked');\n    this.element.addEventListener('click', this.handler);\n  }\n}\n\n// ✅ Safe Lifecycle Management\nclass SafeWidget {\n  constructor(element) {\n    this.element = element;\n    this.handler = this.handleClick.bind(this);\n    this.element.addEventListener('click', this.handler);\n  }\n\n  handleClick() {\n    console.log('Safe click handled');\n  }\n\n  destroy() {\n    // Clean up to allow garbage collection of element and listener:\n    this.element.removeEventListener('click', this.handler);\n    this.element = null;\n  }\n}",
              "explanation": "Explicit `.destroy()` methods decouple DOM nodes from closures, allowing the V8 Scavenger/Mark-Sweep GC to free memory."
            }
          ]
        },
        {
          "id": "js-adv-01-s3",
          "title": "3. Browser Rendering Loop & `requestAnimationFrame`",
          "difficulty": "Advanced",
          "explanation": "The browser runs a continuous rendering pipeline at screen refresh rates (e.g. 60Hz = 16.6ms budget). Visual transformations must be scheduled in `requestAnimationFrame` before Style and Layout recalculations.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "raf_orchestration.js",
              "title": "Coordinating UI Updates with Repaint Cycle",
              "code": "function animateProgressBar(progressBarEl, targetPercent, durationMs = 500) {\n  const start = performance.now();\n  const initialWidth = parseFloat(progressBarEl.style.width) || 0;\n\n  function update(currentTime) {\n    const elapsed = currentTime - start;\n    const progress = Math.min(elapsed / durationMs, 1);\n    \n    // Ease-out cubic formula\n    const easeProgress = 1 - Math.pow(1 - progress, 3);\n    const currentWidth = initialWidth + (targetPercent - initialWidth) * easeProgress;\n\n    progressBarEl.style.width = `${currentWidth}%`;\n\n    if (progress < 1) {\n      requestAnimationFrame(update);\n    }\n  }\n\n  requestAnimationFrame(update);\n}",
              "lineByLine": [
                {
                  "line": "requestAnimationFrame(update)",
                  "explanation": "Schedules calculation immediately prior to browser compositor repaint pass."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What happens if a script executes an infinite recursive loop using `queueMicrotask`?",
            "options": [
              "It acts like a setTimeout with a 4ms clamp",
              "It completely starves the Event Loop, freezing user interactions and browser rendering",
              "The browser automatically promotes microtasks to macrotasks",
              "It opens a new Web Worker thread"
            ],
            "correctAnswer": 1,
            "explanation": "The Event Loop will never proceed to macrotasks or UI rendering because it continuously drains the endlessly replenished Microtask Queue, causing an unresponsive tab."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-02",
    "orderIndex": 2,
    "title": "Advanced Closures and Functional Programming",
    "description": "Master currying, partial application, memoization, pure pipelines, point-free style, immutability patterns, and functional data structures.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "Functional Programming (FP) in JavaScript emphasizes pure functions, immutability, first-class composition, and declarative transformations. Advanced techniques such as Currying (converting $N$-ary functions into unary chains) and Memoization (caching deterministic outputs) enable highly reusable and performant architectures.",
      "analogyHero": "Think of Currying like a customized assembly order: instead of demanding all car specifications at once (engine, paint, wheels, interior), you configure one option per station, producing a specialized factory sub-station ready to stamp out custom vehicles.",
      "objectives": [
        "Implement generic auto-currying functions capable of accepting partial arguments.",
        "Build high-performance memoization wrappers with custom cache-key serializers.",
        "Master Point-Free (tacit) programming style to eliminate redundant parameter declarations.",
        "Enforce deep object immutability and structural sharing principles.",
        "Compose functional data processing pipelines with `pipe` and `compose`."
      ],
      "estimatedTime": "60 mins",
      "keyTakeaways": [
        "Currying transforms `f(a, b, c)` into `f(a)(b)(c)`.",
        "Partial application fixes a subset of arguments, producing a function of smaller arity.",
        "Memoization caches results of pure function calls; never memoize impure functions that depend on global state or time.",
        "Point-free style `users.map(getName)` avoids redundant boilerplate parameter naming `users.map(u => getName(u))`."
      ],
      "summary": "Functional programming techniques elevate code maintainability, eliminate side effects, and optimize repeated computations through intelligent caching.",
      "syntaxGuide": "// Auto-currying implementation:\nfunction curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    }\n    return function(...nextArgs) {\n      return curried.apply(this, [...args, ...nextArgs]);\n    };\n  };\n}\n\n// Memoization helper:\nfunction memoize(fn) {\n  const cache = new Map();\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}",
      "practiceExercises": [
        {
          "title": "Auto-Curried Math Library",
          "instructions": "Use the `curry` helper to create curried math utilities (`multiply`, `add`, `clamp`), creating specialized partially applied functions like `double`, `triple`, and `addTax`.",
          "starterCode": "const multiply = (a, b) => a * b;\nconst add = (a, b) => a + b;\n// Create curried versions",
          "solutionCode": "const curry = (fn) => function curried(...args) {\n  return args.length >= fn.length ? fn(...args) : (...next) => curried(...args, ...next);\n};\nconst curriedMultiply = curry((a, b) => a * b);\nconst double = curriedMultiply(2);\nconst triple = curriedMultiply(3);"
        }
      ],
      "sections": [
        {
          "id": "js-adv-02-s1",
          "title": "1. Currying & Partial Application",
          "difficulty": "Advanced",
          "explanation": "Currying decomposes a multi-argument function into a sequence of single-argument functions based on `fn.length` arity introspection.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "currying_engine.js",
              "title": "General-Purpose Auto-Curry Engine",
              "code": "function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    }\n    return (...nextArgs) => curried.apply(this, [...args, ...nextArgs]);\n  };\n}\n\n// 3-arity function\nconst createApiUrl = (baseUrl, version, endpoint) => `${baseUrl}/${version}/${endpoint}`;\n\nconst curriedUrl = curry(createApiUrl);\nconst skilloraV1 = curriedUrl('https://api.skillora.ai', 'v1');\n\nconsole.log(skilloraV1('courses')); // \"https://api.skillora.ai/v1/courses\"\nconsole.log(skilloraV1('users'));   // \"https://api.skillora.ai/v1/users\"",
              "lineByLine": [
                {
                  "line": "args.length >= fn.length",
                  "explanation": "Checks if accumulated argument count satisfies original function parameter arity."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-02-s2",
          "title": "2. High-Performance Memoization",
          "difficulty": "Advanced",
          "explanation": "Memoization intercepts calls to expensive pure functions, storing return values in a `Map` cache indexed by serialized input arguments.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "memoization.js",
              "title": "LRU-Bounded Memoize Implementation",
              "code": "function memoizeWithLimit(fn, maxEntries = 100) {\n  const cache = new Map();\n\n  return function(...args) {\n    const key = args.length === 1 && (typeof args[0] === 'string' || typeof args[0] === 'number')\n      ? args[0]\n      : JSON.stringify(args);\n\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n\n    const result = fn.apply(this, args);\n\n    // Evict oldest entry if exceeding cache capacity\n    if (cache.size >= maxEntries) {\n      const oldestKey = cache.keys().next().value;\n      cache.delete(oldestKey);\n    }\n\n    cache.set(key, result);\n    return result;\n  };\n}\n\nconst heavyCalculation = (n) => {\n  // Simulating heavy math computation\n  return Array.from({ length: n }, (_, i) => i).reduce((sum, v) => sum + v, 0);\n};\n\nconst fastCalc = memoizeWithLimit(heavyCalculation);\nconsole.log(fastCalc(1000000)); // Computed in ~15ms\nconsole.log(fastCalc(1000000)); // Retrieved in ~0.01ms from cache!",
              "explanation": "Bounded LRU caching prevents memory leaks when caching outputs over dynamic input ranges."
            }
          ]
        },
        {
          "id": "js-adv-02-s3",
          "title": "3. Point-Free Programming & Functional Pipelines",
          "difficulty": "Advanced",
          "explanation": "Point-free style defines functions without explicitly mentioning their arguments, relying purely on composition of existing functions.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "point_free.js",
              "title": "Tacit (Point-Free) Transformations",
              "code": "const prop = (key) => (obj) => obj[key];\nconst map = (fn) => (arr) => arr.map(fn);\nconst filter = (predicate) => (arr) => arr.filter(predicate);\nconst pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);\n\nconst learners = [\n  { id: 1, name: 'Jordan', score: 95, active: true },\n  { id: 2, name: 'Taylor', score: 70, active: false },\n  { id: 3, name: 'Morgan', score: 88, active: true }\n];\n\n// Point-free pipeline:\nconst getActiveTopLearnerNames = pipe(\n  filter(prop('active')),\n  filter((u) => u.score >= 80),\n  map(prop('name'))\n);\n\nconsole.log(getActiveTopLearnerNames(learners)); // ['Jordan', 'Morgan']",
              "lineByLine": [
                {
                  "line": "filter(prop(\"active\"))",
                  "explanation": "Point-free predicate: extracts property \"active\" and filters truthy results."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What is the primary requirement for a function before it can be safely wrapped in a memoization utility?",
            "options": [
              "It must be an async function",
              "It must be a Pure Function (deterministic output with zero side effects)",
              "It must accept at least 3 parameters",
              "It must be an arrow function"
            ],
            "correctAnswer": 1,
            "explanation": "Only pure functions can be memoized; impure functions produce side effects or return different values for the same inputs (e.g. `Date.now()`)."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-03",
    "orderIndex": 3,
    "title": "Advanced Prototypes, Classes, and Metaprogramming",
    "description": "Master Property Descriptors (Object.defineProperty), Symbols, Custom Iterators, Generators, Proxy, Reflect, and metaprogramming.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "Metaprogramming allows code to introspect, intercept, and modify the language's runtime semantics. JavaScript provides rich metaprogramming capabilities through Property Descriptors, Symbols, Generators (`function*`), and the `Proxy` / `Reflect` APIs.",
      "analogyHero": "Think of a Proxy like an intelligent biometric security checkpoint: every time someone tries to enter a room, read a document, or modify a file (property read/write), the security guard intercepts the action, verifies credentials, logs the access, or modifies the payload before allowing entry.",
      "objectives": [
        "Configure fine-grained property permissions using `Object.defineProperty()` (enumerable, configurable, writable).",
        "Use Well-Known Symbols (`Symbol.iterator`, `Symbol.toPrimitive`) to hook into language operators.",
        "Implement Generators (`function*` and `yield`) for lazy evaluation and stream processing.",
        "Trap runtime operations with `Proxy` handlers (`get`, `set`, `has`, `deleteProperty`, `apply`).",
        "Pair `Proxy` traps with `Reflect` methods to maintain default invariant behavior."
      ],
      "estimatedTime": "65 mins",
      "keyTakeaways": [
        "`Proxy` traps low-level operations (reads, writes, function invocations, deletions) on target objects.",
        "`Reflect` methods mirror `Proxy` traps and return standard booleans rather than throwing exceptions.",
        "`[Symbol.iterator]()` makes any custom class or object iterable with `for...of` and spread syntax.",
        "Generators pause execution at `yield` and resume on `.next()`, enabling infinite lazy sequences without memory bloat."
      ],
      "summary": "Proxies, Reflect, and Generators unlock advanced architectural capabilities, from reactive state systems to lazy evaluation engines.",
      "syntaxGuide": "// Reactive State Proxy with Reflect\nfunction createObservable(target, onChange) {\n  return new Proxy(target, {\n    set(obj, prop, value, receiver) {\n      const oldValue = obj[prop];\n      const success = Reflect.set(obj, prop, value, receiver);\n      if (success && oldValue !== value) {\n        onChange(prop, value, oldValue);\n      }\n      return success;\n    }\n  });\n}",
      "practiceExercises": [
        {
          "title": "Negative Index Array Proxy",
          "instructions": "Create a function `createPythonicArray(arr)` using `Proxy` that allows negative index access (e.g. `arr[-1]` returns the last element).",
          "starterCode": "function createPythonicArray(arr) {\n  // Return Proxy with get trap\n}",
          "solutionCode": "function createPythonicArray(arr) {\n  return new Proxy(arr, {\n    get(target, prop, receiver) {\n      if (typeof prop === 'string') {\n        const index = Number(prop);\n        if (Number.isInteger(index) && index < 0) {\n          return target[target.length + index];\n        }\n      }\n      return Reflect.get(target, prop, receiver);\n    }\n  });\n}"
        }
      ],
      "sections": [
        {
          "id": "js-adv-03-s1",
          "title": "1. Reactive State Management with Proxy & Reflect",
          "difficulty": "Advanced",
          "explanation": "`Proxy` wraps a target object, intercepting operations via trap handlers. Using `Reflect` inside traps preserves correct JavaScript engine invariants and receiver bindings.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "reactive_proxy.js",
              "title": "Reactive Store Engine with Proxy",
              "code": "function createReactiveStore(initialState, onUpdate) {\n  return new Proxy(initialState, {\n    set(target, property, value, receiver) {\n      const previous = target[property];\n      const success = Reflect.set(target, property, value, receiver);\n\n      if (success && previous !== value) {\n        onUpdate(property, value, previous);\n      }\n      return success;\n    },\n    deleteProperty(target, property) {\n      console.log(`Property deleted: ${String(property)}`);\n      return Reflect.deleteProperty(target, property);\n    }\n  });\n}\n\nconst store = createReactiveStore({ count: 0, user: 'Guest' }, (key, next, prev) => {\n  console.log(`[State Mutation] ${key}: ${prev} -> ${next}`);\n});\n\nstore.count = 1; // Logs: [State Mutation] count: 0 -> 1\nstore.user = 'Jordan'; // Logs: [State Mutation] user: Guest -> Jordan",
              "lineByLine": [
                {
                  "line": "Reflect.set(target, property, value, receiver)",
                  "explanation": "Delegates assignment to default engine behavior returning a success boolean."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-03-s2",
          "title": "2. Custom Iterators & Generator Functions (`function*`)",
          "difficulty": "Advanced",
          "explanation": "Attaching a `[Symbol.iterator]` method makes any data structure iterable. Generator functions simplify custom iterator creation by yielding values on demand.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "generators_iterators.js",
              "title": "Lazy ID Generator and Custom Class Iterator",
              "code": "// 1. Infinite Lazy Sequence Generator\nfunction* idGenerator(prefix = 'ID') {\n  let count = 1;\n  while (true) {\n    yield `${prefix}_${count++}`;\n  }\n}\n\nconst ids = idGenerator('USER');\nconsole.log(ids.next().value); // 'USER_1'\nconsole.log(ids.next().value); // 'USER_2'\n\n// 2. Custom Iterable Collection\nclass TeamRoster {\n  constructor() {\n    this.members = [];\n  }\n  add(member) { this.members.push(member); }\n\n  *[Symbol.iterator]() {\n    for (const member of this.members) {\n      yield member;\n    }\n  }\n}\n\nconst roster = new TeamRoster();\nroster.add('Dev A');\nroster.add('Dev B');\n\nconsole.log([...roster]); // ['Dev A', 'Dev B'] (Spread works!)",
              "explanation": "The `*[Symbol.iterator]()` generator yields members on demand when consumed by `for...of` or `...spread`."
            }
          ]
        },
        {
          "id": "js-adv-03-s3",
          "title": "3. Property Descriptors & Immutable Objects",
          "difficulty": "Advanced",
          "explanation": "`Object.defineProperty` grants programmatic control over property attributes: `writable` (can change value), `enumerable` (shows up in `for...in` and `Object.keys`), and `configurable` (can delete or alter descriptors).",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "property_descriptors.js",
              "title": "Creating Read-Only & Non-Enumerable Properties",
              "code": "const securityConfig = {};\n\nObject.defineProperty(securityConfig, 'INTERNAL_TOKEN', {\n  value: 'SUPER_SECRET_TOKEN_102',\n  writable: false,      // Cannot be overwritten\n  enumerable: false,    // Hidden from Object.keys() and JSON.stringify\n  configurable: false   // Cannot be deleted or reconfigured\n});\n\nconsole.log('Token:', securityConfig.INTERNAL_TOKEN); // Accessible directly\nconsole.log('Keys:', Object.keys(securityConfig));    // [] (Hidden!)\nconsole.log('JSON:', JSON.stringify(securityConfig)); // \"{}\" (Clean!)",
              "lineByLine": [
                {
                  "line": "enumerable: false",
                  "explanation": "Prevents sensitive tokens from leaking during logging or serialization."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Which built-in JavaScript object provides default method implementations that mirror `Proxy` trap handlers?",
            "options": [
              "Object",
              "Reflect",
              "Symbol",
              "ProxyHandler"
            ],
            "correctAnswer": 1,
            "explanation": "The `Reflect` built-in object provides methods with identical signatures to `Proxy` traps for forwarding operations to target objects."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-04",
    "orderIndex": 4,
    "title": "Advanced Asynchronous Architecture",
    "description": "Master AbortController, request cancellation, exponential backoff retries, request deduplication, async queues, and race condition defense.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "Building resilient web applications requires mastering advanced asynchronous architectures: canceling obsolete network requests when users switch views, exponential backoff retries on transient errors, deduplicating inflight identical queries, and managing concurrency queues.",
      "analogyHero": "Think of an AbortController like a recall siren at a high-speed assembly plant: when a customer changes their order mid-manufacturing, the central controller signals all robotic arms (active network requests) to immediately halt assembly, discarding obsolete parts and saving precious resources.",
      "objectives": [
        "Cancel fetch requests and event listeners using `AbortController` and `AbortSignal`.",
        "Implement resilient Exponential Backoff retry strategies with jitter.",
        "Build an Inflight Request Deduplicator to prevent duplicate API hits.",
        "Create a Concurrency-Limiting Async Queue (pool of $N$ simultaneous workers).",
        "Prevent asynchronous state race conditions in search-as-you-type interfaces."
      ],
      "estimatedTime": "65 mins",
      "keyTakeaways": [
        "Passing `signal: controller.signal` to `fetch()` allows calling `controller.abort()` to terminate pending network requests instantly.",
        "`AbortSignal.timeout(ms)` provides automatic cancellation without manual timer setup.",
        "Adding random \"jitter\" to exponential backoff prevents the \"Thundering Herd\" problem on recovered servers.",
        "Inflight deduplication caches promises (not just settled data) to merge concurrent requests into a single network socket."
      ],
      "summary": "Resilient asynchronous architecture safeguards backend infrastructure and delivers instant, race-condition-free user interfaces.",
      "syntaxGuide": "// Auto-timeout request cancellation (ES2022+):\ntry {\n  const res = await fetch('https://api.example.com/data', {\n    signal: AbortSignal.timeout(5000) // Aborts automatically after 5s\n  });\n  const data = await res.json();\n} catch (err) {\n  if (err.name === 'TimeoutError') {\n    console.warn('Network request timed out after 5 seconds');\n  }\n}",
      "practiceExercises": [
        {
          "title": "Exponential Backoff Retry Client",
          "instructions": "Write an async function `fetchWithRetry(fn, maxRetries = 3, baseDelay = 300)` that retries failed async calls with exponential backoff (`delay * 2^attempt`).",
          "starterCode": "async function fetchWithRetry(fn, maxRetries = 3, baseDelay = 300) {\n  // Implement backoff\n}",
          "solutionCode": "async function fetchWithRetry(fn, maxRetries = 3, baseDelay = 300) {\n  let attempt = 0;\n  while (true) {\n    try {\n      return await fn();\n    } catch (err) {\n      attempt++;\n      if (attempt >= maxRetries) throw err;\n      const delay = baseDelay * Math.pow(2, attempt - 1) + Math.random() * 100;\n      await new Promise((resolve) => setTimeout(resolve, delay));\n    }\n  }\n}"
        }
      ],
      "sections": [
        {
          "id": "js-adv-04-s1",
          "title": "1. Network Cancellation with `AbortController`",
          "difficulty": "Advanced",
          "explanation": "When search queries change rapidly, prior inflight requests must be aborted to prevent older, slower responses from overwriting newer search results.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "abort_controller.js",
              "title": "Canceling Outdated Search Queries",
              "code": "let activeSearchController = null;\n\nasync function executeSearch(query) {\n  // 1. Abort previous inflight request if still active\n  if (activeSearchController) {\n    activeSearchController.abort('New search initiated by user');\n  }\n\n  // 2. Instantiate new controller\n  activeSearchController = new AbortController();\n\n  try {\n    const response = await fetch(`https://api.skillora.ai/search?q=${encodeURIComponent(query)}`, {\n      signal: activeSearchController.signal\n    });\n\n    const results = await response.json();\n    renderSearchResults(results);\n  } catch (err) {\n    if (err.name === 'AbortError') {\n      console.log('Previous search successfully canceled:', err.message);\n    } else {\n      console.error('Search error:', err);\n    }\n  }\n}\n\nfunction renderSearchResults(data) {\n  console.log('Rendering results:', data);\n}",
              "lineByLine": [
                {
                  "line": "activeSearchController.abort(...)",
                  "explanation": "Terminates underlying HTTP stream immediately."
                },
                {
                  "line": "if (err.name === \"AbortError\")",
                  "explanation": "Filters expected cancellation errors from actual server faults."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-04-s2",
          "title": "2. Inflight Request Deduplication",
          "difficulty": "Advanced",
          "explanation": "If multiple UI components request the same user profile simultaneously, inflight deduplication intercepts redundant requests and shares a single Promise.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "request_dedup.js",
              "title": "Inflight Promise Deduplicator",
              "code": "class RequestDeduplicator {\n  constructor() {\n    this.inflight = new Map();\n  }\n\n  fetch(key, fetcher) {\n    if (this.inflight.has(key)) {\n      console.log(`[Dedup] Reusing inflight request for key: \"${key}\"`);\n      return this.inflight.get(key);\n    }\n\n    const promise = fetcher()\n      .finally(() => {\n        // Clear cache once settled so subsequent calls fetch fresh data\n        this.inflight.delete(key);\n      });\n\n    this.inflight.set(key, promise);\n    return promise;\n  }\n}\n\nconst dedup = new RequestDeduplicator();\n// Calling concurrently shares identical promise:\ndedup.fetch('user_1', () => fetch('/api/users/1').then(r => r.json()));\ndedup.fetch('user_1', () => fetch('/api/users/1').then(r => r.json()));",
              "explanation": "Only one actual HTTP network socket is opened; both callers await the same promise resolution."
            }
          ]
        },
        {
          "id": "js-adv-04-s3",
          "title": "3. Concurrency-Limited Async Queue",
          "difficulty": "Advanced",
          "explanation": "When uploading 100 images, sending all at once overloads connections. A concurrency queue enforces a maximum of $N$ simultaneous active tasks.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "concurrency_pool.js",
              "title": "Parallel Task Pool with Max Concurrency",
              "code": "async function mapConcurrent(items, limit, asyncTask) {\n  const results = new Array(items.length);\n  let currentIndex = 0;\n\n  async function worker() {\n    while (currentIndex < items.length) {\n      const index = currentIndex++;\n      results[index] = await asyncTask(items[index], index);\n    }\n  }\n\n  // Launch 'limit' number of concurrent worker loops\n  const workers = Array.from({ length: Math.min(limit, items.length) }, () => worker());\n  await Promise.all(workers);\n  return results;\n}\n\n// Upload 10 files with max 3 concurrent uploads\nconst files = ['f1.png', 'f2.png', 'f3.png', 'f4.png', 'f5.png'];\nmapConcurrent(files, 3, async (file) => {\n  console.log('Uploading:', file);\n  await new Promise((res) => setTimeout(res, 200));\n  return `${file} -> uploaded`;\n}).then(console.log);",
              "lineByLine": [
                {
                  "line": "Array.from({ length: limit }, () => worker())",
                  "explanation": "Spawns exact number of persistent worker promises to process the shared index queue."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What error `name` is thrown by `fetch()` when its `signal` receives an abort command?",
            "options": [
              "AbortError",
              "CancellationError",
              "NetworkError",
              "TimeoutError"
            ],
            "correctAnswer": 0,
            "explanation": "When a fetch is aborted via `AbortController.abort()`, the promise rejects with a `DOMException` named `\"AbortError\"`."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-05",
    "orderIndex": 5,
    "title": "Web APIs and Browser Capabilities",
    "description": "Master Intersection Observer, Resize Observer, Web Workers for background multithreading, Clipboard API, and Geolocation considerations.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "Modern browsers provide powerful Web APIs extending JavaScript capabilities beyond standard DOM manipulation. Observers (`IntersectionObserver`, `ResizeObserver`) enable efficient infinite scrolling and responsive containers, while `Web Workers` offload CPU-intensive computations to true background threads.",
      "analogyHero": "Think of IntersectionObserver like a high-tech motion detector at a warehouse loading bay: instead of constantly running out into the yard every second to check if a truck has arrived (polling scroll events), the detector automatically beeps the moment a truck crosses the threshold.",
      "objectives": [
        "Implement lazy loading and infinite scroll using `IntersectionObserver`.",
        "Observe element dimension changes with `ResizeObserver`.",
        "Spawn dedicated `Web Workers` for heavy CPU computations without freezing the UI.",
        "Interact with the system clipboard using the async `navigator.clipboard` API.",
        "Handle browser permissions gracefully with `navigator.permissions`."
      ],
      "estimatedTime": "60 mins",
      "keyTakeaways": [
        "`IntersectionObserver` runs asynchronously off the main thread, eliminating scroll-event performance bottlenecks.",
        "`ResizeObserver` tracks individual element box model resizing, perfect for responsive widget components.",
        "Web Workers run on separate operating system threads and communicate with the main thread via `postMessage` and `onmessage`.",
        "Web Workers do NOT have access to the `document`, `window`, or direct DOM nodes."
      ],
      "summary": "Web APIs enable performant animations, background computing, and hardware integrations without degrading UI responsiveness.",
      "syntaxGuide": "// Lazy loading images with IntersectionObserver:\nconst observer = new IntersectionObserver((entries, obs) => {\n  entries.forEach((entry) => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src;\n      obs.unobserve(img); // Stop watching after load\n    }\n  });\n}, { rootMargin: '100px' });\n\ndocument.querySelectorAll('img[data-src]').forEach((img) => observer.observe(img));",
      "practiceExercises": [
        {
          "title": "Infinite Scroll Observer",
          "instructions": "Implement a sentinel-based infinite scroll loader using `IntersectionObserver` that calls `loadMoreContent()` when the footer sentinel enters the viewport.",
          "starterCode": "function setupInfiniteScroll(sentinelElement, loadMoreContent) {\n  // Instantiate IntersectionObserver\n}",
          "solutionCode": "function setupInfiniteScroll(sentinelElement, loadMoreContent) {\n  const observer = new IntersectionObserver((entries) => {\n    if (entries[0].isIntersecting) {\n      loadMoreContent();\n    }\n  }, { threshold: 0.1 });\n  observer.observe(sentinelElement);\n  return () => observer.disconnect();\n}"
        }
      ],
      "sections": [
        {
          "id": "js-adv-05-s1",
          "title": "1. IntersectionObserver for Infinite Scroll & Lazy Loading",
          "difficulty": "Advanced",
          "explanation": "`IntersectionObserver` monitors element visibility relative to a viewport or container ancestor. Unlike scroll listeners, observer callbacks are deferred and batched off the main thread.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "intersection_observer.js",
              "title": "Automated Image Lazy Loader",
              "code": "function initLazyImages() {\n  const imageObserver = new IntersectionObserver((entries, observer) => {\n    entries.forEach((entry) => {\n      if (entry.isIntersecting) {\n        const image = entry.target;\n        image.src = image.dataset.src;\n        image.classList.remove('lazy-blur');\n        observer.unobserve(image); // Free observer reference\n      }\n    });\n  }, {\n    root: null, // Default viewport\n    rootMargin: '200px 0px', // Pre-fetch 200px before scrolling into view\n    threshold: 0.01\n  });\n\n  document.querySelectorAll('img.lazy-load').forEach((img) => imageObserver.observe(img));\n}",
              "lineByLine": [
                {
                  "line": "rootMargin: \"200px 0px\"",
                  "explanation": "Begins loading images slightly before they become visible to ensure a seamless experience."
                },
                {
                  "line": "observer.unobserve(image)",
                  "explanation": "Unregisters observer immediately to conserve memory."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-05-s2",
          "title": "2. Multithreading with Web Workers",
          "difficulty": "Advanced",
          "explanation": "Web Workers run in a distinct thread context with isolated memory. Data is passed between threads via serialized cloning through `postMessage`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "worker_main.js",
              "title": "Offloading Heavy Calculation to Web Worker",
              "code": "// main.js\nconst worker = new Worker('worker_script.js', { type: 'module' });\n\nworker.postMessage({ action: 'PROCESS_DATASET', count: 5000000 });\n\nworker.onmessage = (event) => {\n  const { status, result } = event.data;\n  console.log('Worker task finished. Result:', result);\n};\n\n// worker_script.js:\n// self.onmessage = (e) => {\n//   const sum = Array.from({ length: e.data.count }, (_, i) => i).reduce((a, b) => a + b, 0);\n//   self.postMessage({ status: 'DONE', result: sum });\n// };",
              "explanation": "The 5-million iteration sum executes on a background OS thread without freezing the browser interface."
            }
          ]
        },
        {
          "id": "js-adv-05-s3",
          "title": "3. Clipboard API & ResizeObserver",
          "difficulty": "Advanced",
          "explanation": "`navigator.clipboard.writeText()` provides promise-based clipboard access. `ResizeObserver` reports dimension changes on dynamic components.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "modern_web_apis.js",
              "title": "Clipboard and Element Resize Tracking",
              "code": "// Async clipboard copy\nasync function copyToClipboard(text) {\n  try {\n    await navigator.clipboard.writeText(text);\n    console.log('Copied to clipboard successfully!');\n  } catch (err) {\n    console.error('Clipboard permission denied:', err);\n  }\n}\n\n// ResizeObserver for responsive widgets\nconst widget = document.querySelector('#analytics-widget');\nconst resizeObserver = new ResizeObserver((entries) => {\n  for (const entry of entries) {\n    const { width, height } = entry.contentRect;\n    console.log(`Widget resized: ${width.toFixed(0)}px x ${height.toFixed(0)}px`);\n  }\n});\nresizeObserver.observe(widget);",
              "lineByLine": [
                {
                  "line": "entry.contentRect",
                  "explanation": "Provides accurate sub-pixel bounding box dimensions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Can a dedicated Web Worker directly manipulate the DOM using `document.getElementById`?",
            "options": [
              "Yes, with full access",
              "No, Web Workers do not have access to the DOM or window object",
              "Only if declared with type: \"module\"",
              "Only in Chrome browsers"
            ],
            "correctAnswer": 1,
            "explanation": "Web Workers run in a separate global execution context (`WorkerGlobalScope`) and have no access to the DOM or `window`."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-06",
    "orderIndex": 6,
    "title": "Performance Optimization and Memory Management",
    "description": "Master Core Web Vitals (LCP, INP, CLS), layout thrashing prevention, Chrome DevTools Performance profiling, memory leak diagnosis, and bundle optimization.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "High-performance JavaScript engineering requires profiling and optimizing execution across the Critical Rendering Path. Diagnosing layout thrashing (forced synchronous reflows), optimizing Core Web Vitals (Interaction to Next Paint - INP, Cumulative Layout Shift - CLS), and eliminating memory leaks ensures smooth 60fps applications.",
      "analogyHero": "Think of layout thrashing like an inefficient warehouse clerk: every time a customer requests a single box (DOM write), the clerk runs all the way up a 100-foot ladder to measure the shelf height (DOM read), climbs back down, places the box, and immediately climbs back up to measure again. Batching operations means measuring once and stocking all 100 boxes in a single run.",
      "objectives": [
        "Measure and optimize Core Web Vitals: LCP, INP, and CLS.",
        "Identify and eliminate Layout Thrashing (interleaving DOM reads and writes).",
        "Record and analyze Chrome DevTools Performance traces and CPU flame charts.",
        "Take and compare Memory Heap Snapshots to detect retaining paths and memory leaks.",
        "Apply virtual scrolling techniques for datasets exceeding 10,000 items."
      ],
      "estimatedTime": "65 mins",
      "keyTakeaways": [
        "Layout thrashing happens when code reads a geometry property (`offsetWidth`, `scrollTop`) immediately after modifying DOM styles, forcing synchronous layout recalculations.",
        "Always batch all DOM reads first, then batch all DOM writes together.",
        "INP (Interaction to Next Paint) replaces FID as the primary metric for page responsiveness.",
        "Avoid creating long-lived references to transient DOM elements to allow the garbage collector to reclaim memory."
      ],
      "summary": "Eliminating layout thrashing and monitoring memory retention guarantees high-speed interactions and rock-solid stability in production apps.",
      "syntaxGuide": "// ❌ Layout Thrashing (Forces layout inside loop):\nelements.forEach((el) => {\n  const height = el.offsetHeight; // READ (Forces layout)\n  el.style.height = `${height + 10}px`; // WRITE (Invalidates layout)\n});\n\n// ✅ Batched High-Performance Loop:\nconst heights = elements.map((el) => el.offsetHeight); // Batch all READS\nelements.forEach((el, i) => {\n  el.style.height = `${heights[i] + 10}px`; // Batch all WRITES\n});",
      "practiceExercises": [
        {
          "title": "Layout Batching Refactor",
          "instructions": "Refactor a layout-thrashing function into a batched two-pass algorithm using `requestAnimationFrame` for DOM writes.",
          "starterCode": "function equalizeCardHeights(cards) {\n  // Batch reads then writes\n}",
          "solutionCode": "function equalizeCardHeights(cards) {\n  const maxHeight = Math.max(...cards.map((c) => c.getBoundingClientRect().height));\n  requestAnimationFrame(() => {\n    cards.forEach((c) => { c.style.height = `${maxHeight}px`; });\n  });\n}"
        }
      ],
      "sections": [
        {
          "id": "js-adv-06-s1",
          "title": "1. Eliminating Layout Thrashing & Forced Synchronous Layouts",
          "difficulty": "Advanced",
          "explanation": "When you modify the DOM, the browser flags the layout as dirty. If you immediately query a geometry property (`offsetHeight`, `clientWidth`, `getBoundingClientRect`), the browser is forced to halt script execution and execute a full synchronous reflow.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "layout_batching.js",
              "title": "Fast DOM Mutation with Read/Write Phasing",
              "code": "// FastDOM pattern for high-frequency updates\nfunction updateCardLayouts(cards) {\n  // Phase 1: Batch Reads (Off-screen geometry calculation)\n  const measurements = cards.map((card) => ({\n    card,\n    height: card.offsetHeight,\n    targetWidth: card.parentElement.clientWidth * 0.9\n  }));\n\n  // Phase 2: Batch Writes (Scheduled for next frame)\n  requestAnimationFrame(() => {\n    for (const { card, targetWidth } of measurements) {\n      card.style.width = `${targetWidth}px`;\n    }\n  });\n}",
              "lineByLine": [
                {
                  "line": "cards.map((card) => ({ height: card.offsetHeight, ... }))",
                  "explanation": "All layout reads execute in a single clean pass without dirtying the DOM."
                },
                {
                  "line": "requestAnimationFrame(...)",
                  "explanation": "All style writes are batched immediately prior to screen refresh."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-06-s2",
          "title": "2. Virtual Scrolling for Large Lists (10,000+ Items)",
          "difficulty": "Advanced",
          "explanation": "Rendering 10,000 DOM elements causes high memory consumption and slow scrolling. Virtual scrolling renders only the ~20 items currently visible in the viewport plus a small buffer, recalculating positions on scroll.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "virtual_scroller.js",
              "title": "Virtual List Calculation Algorithm",
              "code": "class VirtualScroller {\n  constructor(container, totalItems, itemHeight, renderRow) {\n    this.container = container;\n    this.totalItems = totalItems;\n    this.itemHeight = itemHeight;\n    this.renderRow = renderRow;\n    this.viewportHeight = container.clientHeight;\n\n    this.container.addEventListener('scroll', this.onScroll.bind(this));\n    this.render();\n  }\n\n  onScroll() {\n    requestAnimationFrame(this.render.bind(this));\n  }\n\n  render() {\n    const scrollTop = this.container.scrollTop;\n    const startIndex = Math.floor(scrollTop / this.itemHeight);\n    const visibleCount = Math.ceil(this.viewportHeight / this.itemHeight);\n    const endIndex = Math.min(this.totalItems - 1, startIndex + visibleCount + 2);\n\n    const visibleItems = [];\n    for (let i = startIndex; i <= endIndex; i++) {\n      visibleItems.push(this.renderRow(i, i * this.itemHeight));\n    }\n\n    this.container.replaceChildren(...visibleItems);\n  }\n}",
              "explanation": "Only keeps 10-20 active DOM elements attached regardless of whether the total dataset contains 100 or 1,000,000 items."
            }
          ]
        },
        {
          "id": "js-adv-06-s3",
          "title": "3. Profiling with Heap Snapshots & Flame Charts",
          "difficulty": "Advanced",
          "explanation": "Using Chrome DevTools Memory Heap Snapshots, developers take baseline snapshots, perform actions, and filter by \"Objects allocated between Snapshot 1 and 2\" to spot detached DOM trees and uncollected closures.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "profiling_marks.js",
              "title": "User Timing API for Flame Chart Marks",
              "code": "function runComplexOperation() {\n  // Mark in Chrome DevTools Performance Flame Chart:\n  performance.mark('op-start');\n\n  // Compute heavy algorithm\n  for (let i = 0; i < 1000000; i++) {\n    Math.sqrt(i);\n  }\n\n  performance.mark('op-end');\n  performance.measure('Complex Math Operation', 'op-start', 'op-end');\n\n  const measures = performance.getEntriesByName('Complex Math Operation');\n  console.log('Duration:', measures[0].duration.toFixed(2) + 'ms');\n}",
              "lineByLine": [
                {
                  "line": "performance.mark(...) / performance.measure(...)",
                  "explanation": "Creates custom timing tracks visible in DevTools Performance profiles."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What is \"Layout Thrashing\" in JavaScript DOM manipulation?",
            "options": [
              "When CSS stylesheets fail to load",
              "Alternating repeatedly between reading geometry properties and writing style mutations, forcing synchronous browser reflows",
              "Applying excessive CSS animations on canvas elements",
              "Using SVG images inside table layouts"
            ],
            "correctAnswer": 1,
            "explanation": "Layout thrashing occurs when JavaScript repeatedly interleaves DOM style writes with layout reads, forcing the browser to recalculate layout multiple times per frame."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-07",
    "orderIndex": 7,
    "title": "Security and Safe JavaScript",
    "description": "Master Cross-Site Scripting (XSS) defense, DOMPurify sanitization, Content Security Policy (CSP), CSRF protection, secure cookie flags, and token management.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "Web applications run in untrusted client environments. JavaScript security requires rigorous defense against Cross-Site Scripting (Reflected, Stored, DOM-based XSS), Cross-Site Request Forgery (CSRF), prototype pollution, insecure deserialization, and token exfiltration.",
      "analogyHero": "Think of application security like a water treatment plant: raw water from external sources (user inputs, URL params, API responses) passes through multi-stage physical filters and chemical purifiers (sanitizers, CSP, output encoders) before entering the municipal drinking supply (DOM rendering).",
      "objectives": [
        "Analyze the mechanics of Stored, Reflected, and DOM-based Cross-Site Scripting (XSS).",
        "Sanitize untrusted HTML strings using standard sanitization libraries (DOMPurify).",
        "Configure and enforce strict Content Security Policy (CSP) headers.",
        "Defend against Cross-Site Request Forgery (CSRF) via SameSite cookies and Anti-CSRF tokens.",
        "Protect against Prototype Pollution attacks on object merging utilities."
      ],
      "estimatedTime": "60 mins",
      "keyTakeaways": [
        "Never insert un-sanitized user strings into `innerHTML`, `outerHTML`, `document.write`, or `eval()`.",
        "Use `textContent` for plain text; use DOMPurify when rendering user-supplied rich HTML markup.",
        "Prototype pollution occurs when malicious JSON assigns `__proto__` properties, compromising the entire runtime object prototype.",
        "Store sensitive authentication tokens in `HttpOnly; Secure; SameSite=Strict` cookies rather than LocalStorage."
      ],
      "summary": "Adhering to defensive output encoding, strict CSP headers, and prototype pollution defenses ensures application and user security.",
      "syntaxGuide": "// Prototype Pollution Defense in Deep Merge:\nfunction safeMerge(target, source) {\n  for (const key of Object.keys(source)) {\n    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {\n      continue; // Block prototype pollution vectors\n    }\n    if (typeof source[key] === 'object' && source[key] !== null) {\n      target[key] = safeMerge(target[key] || {}, source[key]);\n    } else {\n      target[key] = source[key];\n    }\n  }\n  return target;\n}",
      "practiceExercises": [
        {
          "title": "Secure HTML Renderer",
          "instructions": "Write a helper function `renderSafeHtml(container, rawHtml)` that escapes all `<` and `>` characters if DOMPurify is unavailable, otherwise sanitizes safely.",
          "starterCode": "function renderSafeHtml(container, rawHtml) {\n  // Implement safe rendering\n}",
          "solutionCode": "function renderSafeHtml(container, rawHtml) {\n  if (typeof DOMPurify !== 'undefined') {\n    container.innerHTML = DOMPurify.sanitize(rawHtml);\n  } else {\n    container.textContent = rawHtml; // Fallback to safe plain text\n  }\n}"
        }
      ],
      "sections": [
        {
          "id": "js-adv-07-s1",
          "title": "1. Cross-Site Scripting (XSS) Vectors & Sanitization",
          "difficulty": "Advanced",
          "explanation": "DOM-based XSS occurs when client JavaScript reads data from an untrusted source (like `location.search` or user comments) and writes it directly to an execution sink like `innerHTML` or `eval`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "xss_defense.js",
              "title": "Sanitizing Dynamic User Content",
              "code": "// ❌ Vulnerable to XSS:\nfunction renderBioVulnerable(bioText) {\n  // If bioText contains <img src=\"x\" onerror=\"stealCookies()\">, script executes!\n  document.querySelector('#bio').innerHTML = bioText;\n}\n\n// ✅ Safe Pattern 1: Plain Text\nfunction renderBioSafe(bioText) {\n  document.querySelector('#bio').textContent = bioText;\n}\n\n// ✅ Safe Pattern 2: Sanitized Rich Text (DOMPurify)\nfunction renderRichBio(untrustedHtml) {\n  const cleanHtml = DOMPurify.sanitize(untrustedHtml, {\n    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],\n    ALLOWED_ATTR: ['href', 'target']\n  });\n  document.querySelector('#bio').innerHTML = cleanHtml;\n}",
              "lineByLine": [
                {
                  "line": "DOMPurify.sanitize(...)",
                  "explanation": "Strips malicious script tags, inline event handlers, and javascript: pseudo-protocol URIs."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-07-s2",
          "title": "2. Prototype Pollution Defense",
          "difficulty": "Advanced",
          "explanation": "Prototype Pollution attacks exploit recursive object merge utilities by injecting properties into `Object.prototype` using keys like `__proto__` or `constructor.prototype`.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "proto_pollution.js",
              "title": "Defending Object Merges Against Prototype Poisoning",
              "code": "function deepAssignSafe(target, ...sources) {\n  for (const source of sources) {\n    if (!source || typeof source !== 'object') continue;\n\n    for (const key of Object.keys(source)) {\n      // Security Guard: Prevent Prototype Poisoning\n      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {\n        console.warn(`[Security Alert] Blocked prototype pollution attempt via key \"${key}\"`);\n        continue;\n      }\n\n      if (typeof source[key] === 'object' && source[key] !== null) {\n        if (!target[key] || typeof target[key] !== 'object') {\n          target[key] = Array.isArray(source[key]) ? [] : {};\n        }\n        deepAssignSafe(target[key], source[key]);\n      } else {\n        target[key] = source[key];\n      }\n    }\n  }\n  return target;\n}",
              "explanation": "Explicitly filtering dangerous property names prevents attackers from overriding global Object prototype behaviors."
            }
          ]
        },
        {
          "id": "js-adv-07-s3",
          "title": "3. Token Security & Content Security Policy (CSP)",
          "difficulty": "Advanced",
          "explanation": "Content Security Policy (CSP) is an HTTP response header that restricts the scripts, styles, and network endpoints the browser is permitted to execute, neutralizing inline script injection.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "csp_config.js",
              "title": "Hardened Content Security Policy Example",
              "code": "/* Example HTTP Response Header for Strict CSP:\nContent-Security-Policy: \n  default-src 'self';\n  script-src 'self' https://trusted-cdn.skillora.ai;\n  style-src 'self' 'unsafe-inline';\n  img-src 'self' data: https:;\n  connect-src 'self' https://api.skillora.ai;\n  frame-ancestors 'none';\n  base-uri 'self';\n  form-action 'self';\n*/\n\n// Verifying Token Storage Security:\nfunction checkTokenStorage() {\n  console.log('Ensure sensitive access tokens use HttpOnly cookies to prevent JS access');\n}",
              "lineByLine": [
                {
                  "line": "default-src 'self'",
                  "explanation": "Restricts all resource loading to origin domain by default."
                },
                {
                  "line": "frame-ancestors 'none'",
                  "explanation": "Prevents clickjacking by blocking embedding inside iframes."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Which property key must be explicitly blocked in recursive object merging algorithms to prevent Prototype Pollution?",
            "options": [
              "__proto__",
              "id",
              "length",
              "name"
            ],
            "correctAnswer": 0,
            "explanation": "Blocking `__proto__`, `constructor`, and `prototype` prevents attackers from injecting malicious properties into `Object.prototype`."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-08",
    "orderIndex": 8,
    "title": "Architecture and Design Patterns",
    "description": "Master classical and modern JavaScript patterns: Module, Factory, Singleton, Observer (Pub/Sub), Strategy, Adapter, State, and Component Architecture.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "Design patterns represent battle-tested solutions to recurring software engineering problems. In JavaScript, applying the Module, Observer (Publish/Subscribe), Strategy, Adapter, and State patterns produces decoupled, testable, and scalable enterprise architectures.",
      "analogyHero": "Think of design patterns like architectural building blueprints: whether building a library, hospital, or skyscraper, architects use standard structural templates (load-bearing columns, elevator shafts, fire escapes) adapted to the specific purpose rather than inventing physics from scratch.",
      "objectives": [
        "Implement the Observer / Pub-Sub pattern for decoupled event-driven communication.",
        "Use the Strategy Pattern to swap algorithms (e.g. validation, pricing models) dynamically.",
        "Apply the Adapter Pattern to normalize third-party API contracts into clean internal interfaces.",
        "Implement Finite State Machines (FSM) using the State Pattern.",
        "Structure Vanilla JS applications using modular Component Architecture."
      ],
      "estimatedTime": "65 mins",
      "keyTakeaways": [
        "Pub/Sub decouples event emitters from listeners, allowing multiple independent subscribers without tight couplings.",
        "The Strategy pattern replaces brittle multi-case conditional logic with polymorphic strategy objects.",
        "The Adapter pattern wraps incompatible third-party interfaces to match internal application signatures.",
        "Finite State Machines guarantee that an application cannot enter invalid or impossible states."
      ],
      "summary": "Design patterns provide a shared vocabulary and robust structural templates for writing maintainable, decoupled JavaScript codebases.",
      "syntaxGuide": "// Pub/Sub Event Bus Implementation\nclass EventBus {\n  #subscribers = new Map();\n\n  subscribe(event, callback) {\n    if (!this.#subscribers.has(event)) {\n      this.#subscribers.set(event, new Set());\n    }\n    this.#subscribers.get(event).add(callback);\n    return () => this.#subscribers.get(event).delete(callback); // Unsubscribe\n  }\n\n  publish(event, data) {\n    if (this.#subscribers.has(event)) {\n      this.#subscribers.get(event).forEach((cb) => cb(data));\n    }\n  }\n}",
      "practiceExercises": [
        {
          "title": "Payment Strategy Engine",
          "instructions": "Implement a `PaymentProcessor` that accepts strategy objects (`StripeStrategy`, `PayPalStrategy`) conforming to `{ process(amount) }`.",
          "starterCode": "class PaymentProcessor {\n  setStrategy(strategy) {}\n  pay(amount) {}\n}",
          "solutionCode": "class PaymentProcessor {\n  constructor(strategy) { this.strategy = strategy; }\n  setStrategy(strategy) { this.strategy = strategy; }\n  pay(amount) {\n    if (!this.strategy) throw new Error('No payment strategy configured');\n    return this.strategy.process(amount);\n  }\n}"
        }
      ],
      "sections": [
        {
          "id": "js-adv-08-s1",
          "title": "1. The Observer & Publish/Subscribe (Pub-Sub) Pattern",
          "difficulty": "Advanced",
          "explanation": "The Pub-Sub pattern introduces an Event Bus that broadcasts messages to subscribed listeners without publishers knowing who the subscribers are.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "event_bus.js",
              "title": "Centralized Event Bus Architecture",
              "code": "class EventBus {\n  constructor() {\n    this.topics = new Map();\n  }\n\n  on(topic, listener) {\n    if (!this.topics.has(topic)) {\n      this.topics.set(topic, new Set());\n    }\n    this.topics.get(topic).add(listener);\n\n    // Return cleanup function:\n    return () => this.topics.get(topic)?.delete(listener);\n  }\n\n  emit(topic, payload) {\n    const listeners = this.topics.get(topic);\n    if (listeners) {\n      listeners.forEach((listener) => {\n        try {\n          listener(payload);\n        } catch (err) {\n          console.error(`[EventBus] Error in listener for topic ${topic}:`, err);\n        }\n      });\n    }\n  }\n}\n\nconst bus = new EventBus();\nconst unsubscribe = bus.on('ORDER_PLACED', (order) => {\n  console.log('Sending invoice email for order:', order.id);\n});\n\nbus.emit('ORDER_PLACED', { id: 'ord_901', total: 249.99 });\nunsubscribe();",
              "lineByLine": [
                {
                  "line": "return () => this.topics.get(topic)?.delete(listener)",
                  "explanation": "Returns an unsubscribe callback to easily unregister listeners."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-08-s2",
          "title": "2. The Strategy Pattern for Interchangeable Algorithms",
          "difficulty": "Advanced",
          "explanation": "The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime based on context.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "strategy_pattern.js",
              "title": "Shipping Rate Calculation Strategies",
              "code": "// Strategies\nconst standardShipping = {\n  calculate: (weightKg) => weightKg * 1.5 + 5\n};\n\nconst expressShipping = {\n  calculate: (weightKg) => weightKg * 3.5 + 15\n};\n\nconst overnightShipping = {\n  calculate: (weightKg) => weightKg * 6.0 + 35\n};\n\n// Context\nclass ShippingCalculator {\n  constructor(strategy = standardShipping) {\n    this.strategy = strategy;\n  }\n\n  setStrategy(strategy) {\n    this.strategy = strategy;\n  }\n\n  calculateFee(weightKg) {\n    return this.strategy.calculate(weightKg);\n  }\n}\n\nconst calc = new ShippingCalculator(standardShipping);\nconsole.log('Standard:', calc.calculateFee(10)); // $20\ncalc.setStrategy(overnightShipping);\nconsole.log('Overnight:', calc.calculateFee(10)); // $95",
              "explanation": "Swapping shipping calculation algorithms requires zero changes to the underlying `ShippingCalculator` class."
            }
          ]
        },
        {
          "id": "js-adv-08-s3",
          "title": "3. Finite State Machine (State Pattern)",
          "difficulty": "Advanced",
          "explanation": "A Finite State Machine (FSM) restricts an entity to being in exactly one of a finite number of states at any given time, with strict allowable transitions.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "state_machine.js",
              "title": "Audio Player Finite State Machine",
              "code": "const AudioPlayerFSM = {\n  state: 'idle', // idle, playing, paused, stopped\n  transitions: {\n    idle: { play: 'playing' },\n    playing: { pause: 'paused', stop: 'idle' },\n    paused: { play: 'playing', stop: 'idle' }\n  },\n\n  dispatch(action) {\n    const nextState = this.transitions[this.state]?.[action];\n    if (!nextState) {\n      console.warn(`Invalid action \"${action}\" for current state \"${this.state}\"`);\n      return false;\n    }\n    console.log(`FSM Transition: ${this.state} -> ${nextState}`);\n    this.state = nextState;\n    return true;\n  }\n};\n\nAudioPlayerFSM.dispatch('play');  // idle -> playing\nAudioPlayerFSM.dispatch('pause'); // playing -> paused\nAudioPlayerFSM.dispatch('pause'); // Warns: Invalid action \"pause\" for current state \"paused\"",
              "lineByLine": [
                {
                  "line": "this.transitions[this.state]?.[action]",
                  "explanation": "Declarative lookup table enforcing strict allowable state transitions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Which design pattern decouples event producers from event consumers via an intermediary message broker?",
            "options": [
              "Observer / Pub-Sub Pattern",
              "Singleton Pattern",
              "Factory Pattern",
              "Decorator Pattern"
            ],
            "correctAnswer": 0,
            "explanation": "The Observer / Publish-Subscribe pattern uses an event hub or topic registry to broadcast messages to subscribers without direct dependencies."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-09",
    "orderIndex": 9,
    "title": "Testing JavaScript Applications",
    "description": "Master Unit, Integration, and End-to-End (E2E) testing, test doubles (mocks, stubs, spies), assertion frameworks, mocking fetch, and Playwright automation.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "Comprehensive automated testing ensures application reliability across refactorings. The Testing Trophy encompasses static analysis, Unit Tests for pure logic, Integration Tests for component interactions, and End-to-End (E2E) Playwright tests simulating real browser sessions.",
      "analogyHero": "Think of automated testing like car crash testing: computational computer simulations test individual crumple zones (unit tests), mechanical rigs test how the braking system interacts with the engine (integration tests), and a full dummy-driven crash test runs the entire car into a concrete wall (E2E test).",
      "objectives": [
        "Understand the Testing Pyramid and Testing Trophy methodologies.",
        "Write deterministic unit tests using test doubles: Spies, Mocks, and Stubs.",
        "Mock global `fetch` requests and network responses in test environments.",
        "Author browser-driven End-to-End (E2E) integration test suites using Playwright.",
        "Measure code coverage and establish regression test pipelines."
      ],
      "estimatedTime": "60 mins",
      "keyTakeaways": [
        "Unit tests verify isolated functions in milliseconds; Integration tests verify cooperating modules; E2E tests verify real user flows.",
        "Mocks verify behavior (e.g. did `logger.warn` get called once?); Stubs provide canned return values (e.g. stubbing `fetch`).",
        "Always clean up mocked globals in `afterEach()` teardown hooks to avoid test pollution.",
        "Playwright tests should use resilient semantic locators (role, test-id, label) rather than brittle CSS tag hierarchies."
      ],
      "summary": "A disciplined automated testing strategy with unit and E2E coverage guarantees production reliability and accelerates deployment velocity.",
      "syntaxGuide": "// Mocking fetch in unit tests:\nfunction mockFetchResponse(data, status = 200) {\n  globalThis.fetch = async () => ({\n    ok: status >= 200 && status < 300,\n    status,\n    json: async () => data\n  });\n}\n\n// Playwright E2E Test Pattern:\ntest('User can search and view weather', async ({ page }) => {\n  await page.goto('/dashboard');\n  await page.fill('[data-testid=\"search-input\"]', 'Tokyo');\n  await page.click('[data-testid=\"search-btn\"]');\n  await expect(page.locator('[data-testid=\"city-name\"]')).toHaveText('Tokyo');\n});",
      "practiceExercises": [
        {
          "title": "Custom Spy Implementation",
          "instructions": "Write a spy utility `createSpy(fn)` that wraps a function, records every argument array it was called with in `.calls`, and tracks `.callCount`.",
          "starterCode": "function createSpy(fn = () => {}) {\n  // Implement spy\n}",
          "solutionCode": "function createSpy(fn = () => {}) {\n  const spy = function(...args) {\n    spy.calls.push(args);\n    spy.callCount++;\n    return fn.apply(this, args);\n  };\n  spy.calls = [];\n  spy.callCount = 0;\n  return spy;\n}"
        }
      ],
      "sections": [
        {
          "id": "js-adv-09-s1",
          "title": "1. Test Doubles: Mocks, Stubs, and Spies",
          "difficulty": "Advanced",
          "explanation": "Test doubles replace real dependencies during testing. Spies record function invocations. Stubs return canned responses. Mocks assert that specific method interactions occurred.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "test_doubles.js",
              "title": "Building a Lightweight Test Spy and Stub",
              "code": "function createSpy(targetFn = () => {}) {\n  const spy = function(...args) {\n    spy.calls.push(args);\n    spy.callCount++;\n    return targetFn.apply(this, args);\n  };\n  spy.calls = [];\n  spy.callCount = 0;\n  return spy;\n}\n\n// Testing a notification service\nclass OrderNotifier {\n  constructor(emailService) {\n    this.emailService = emailService;\n  }\n  notify(orderId, email) {\n    this.emailService.send(email, `Order ${orderId} confirmed!`);\n  }\n}\n\n// Test:\nconst emailSpy = { send: createSpy() };\nconst notifier = new OrderNotifier(emailSpy);\nnotifier.notify('ORD_1', 'alex@skillora.ai');\n\nconsole.assert(emailSpy.send.callCount === 1, 'send should be called once');\nconsole.assert(emailSpy.send.calls[0][0] === 'alex@skillora.ai', 'correct recipient');\nconsole.log('Notifier test passed!');",
              "lineByLine": [
                {
                  "line": "console.assert(emailSpy.send.callCount === 1)",
                  "explanation": "Verifies that the dependency was invoked exactly once."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-09-s2",
          "title": "2. Mocking Fetch and Async Boundaries",
          "difficulty": "Advanced",
          "explanation": "Unit tests must not perform real network calls. Mocking `globalThis.fetch` ensures fast, reliable, offline unit test execution.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "fetch_mocking.js",
              "title": "Mocking Network Responses for Unit Tests",
              "code": "async function fetchUserProfile(userId) {\n  const res = await fetch(`https://api.skillora.ai/users/${userId}`);\n  if (!res.ok) throw new Error('User not found');\n  return await res.json();\n}\n\n// Unit Test Runner:\nasync function testFetchUserProfile() {\n  const originalFetch = globalThis.fetch;\n\n  try {\n    // Stub fetch with mock response:\n    globalThis.fetch = async (url) => {\n      console.assert(url.includes('/users/u101'), 'URL verified');\n      return {\n        ok: true,\n        status: 200,\n        json: async () => ({ id: 'u101', username: 'Jordan' })\n      };\n    };\n\n    const user = await fetchUserProfile('u101');\n    console.assert(user.username === 'Jordan', 'User profile retrieved');\n    console.log('Fetch mock test passed!');\n  } finally {\n    // Always restore original global fetch\n    globalThis.fetch = originalFetch;\n  }\n}\n\ntestFetchUserProfile();",
              "explanation": "Using `finally { globalThis.fetch = originalFetch }` prevents mock leakage across subsequent test suites."
            }
          ]
        },
        {
          "id": "js-adv-09-s3",
          "title": "3. End-to-End (E2E) Testing with Playwright",
          "difficulty": "Advanced",
          "explanation": "Playwright launches real browser instances (Chromium, Firefox, WebKit), tests real DOM elements, and validates multi-page user journeys.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "playwright_example.js",
              "title": "End-to-End UI Validation with Playwright",
              "code": "// playwright.spec.js\n// import { test, expect } from '@playwright/test';\n\n/*\ntest('Complete Task Lifecycle in Task Manager', async ({ page }) => {\n  await page.goto('/tasks');\n\n  // 1. Add Task\n  await page.fill('input[placeholder=\"Enter new task...\"]', 'Ship Production Build');\n  await page.click('button:has-text(\"Add Task\")');\n\n  // 2. Verify Task rendered\n  const taskItem = page.locator('.task-item:has-text(\"Ship Production Build\")');\n  await expect(taskItem).toBeVisible();\n\n  // 3. Toggle Complete\n  await taskItem.locator('input[type=\"checkbox\"]').check();\n  await expect(taskItem).toHaveClass(/completed/);\n\n  // 4. Delete Task\n  await taskItem.locator('button.btn-delete').click();\n  await expect(taskItem).not.toBeVisible();\n});\n*/",
              "lineByLine": [
                {
                  "line": "await expect(taskItem).toBeVisible()",
                  "explanation": "Playwright automatically retries assertion until element appears or timeout is reached."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What is the key advantage of using End-to-End (E2E) testing with Playwright over isolated Unit Tests?",
            "options": [
              "E2E tests execute faster than unit tests",
              "E2E tests validate complete user journeys across real browser rendering engines, network requests, and DOM events",
              "E2E tests do not require a running web server",
              "E2E tests only test backend database queries"
            ],
            "correctAnswer": 1,
            "explanation": "E2E tests simulate actual end-user interactions inside live browser engines, verifying that all integrated subsystems work harmoniously together."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-10",
    "orderIndex": 10,
    "title": "Type Safety and Professional JavaScript Practices",
    "description": "Master JSDoc type annotations, runtime validation (Zod concepts), TypeScript migration strategies, API contracts, and ESLint / Prettier code standards.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "Large-scale JavaScript engineering demands type safety and defensive API contracts. Leveraging JSDoc annotations provides TypeScript-level editor type checking in pure JavaScript files without a build step. Pairing static typing with runtime schema validation prevents malformed payloads from compromising application state.",
      "analogyHero": "Think of JSDoc like an architectural spec sheet for a skyscraper (blueprints verified by engineers in the office), and runtime schema validation like the security inspector scanning raw materials arriving at the construction site to ensure steel beams match the specified metallurgical grade.",
      "objectives": [
        "Document and type JavaScript functions, objects, and classes using rich JSDoc annotations.",
        "Enable `// @ts-check` in JavaScript files for IDE compile-time type verification.",
        "Implement runtime schema validation to guard against corrupt external API responses.",
        "Design resilient API contracts and error boundaries.",
        "Enforce consistent team conventions using ESLint rules and Prettier."
      ],
      "estimatedTime": "55 mins",
      "keyTakeaways": [
        "`// @ts-check` enables the TypeScript type checker directly inside `.js` files using JSDoc tags.",
        "JSDoc tags `@param`, `@returns`, `@typedef`, and `@template` provide rich Intellisense and autocompletion.",
        "Compile-time types disappear at runtime; external network inputs must always be validated at runtime.",
        "Consistent linting rules eliminate entire classes of bugs (e.g. `no-undef`, `eqeqeq`, `no-unused-vars`)."
      ],
      "summary": "JSDoc type annotations combined with runtime validation deliver the safety of typed languages while preserving JavaScript's dynamic productivity.",
      "syntaxGuide": "// @ts-check\n\n/**\n * @typedef {Object} UserProfile\n * @property {string} id - Unique UUID\n * @property {string} name - Display name\n * @property {number} [score] - Optional leaderboard score\n */\n\n/**\n * Calculates user rank percentile.\n * @param {UserProfile} profile - The user record\n * @param {number} totalUsers - Total registered count\n * @returns {string} Formatted percentage\n */\nfunction calculatePercentile(profile, totalUsers) {\n  const score = profile.score ?? 0;\n  return `${((score / totalUsers) * 100).toFixed(1)}%`;\n}",
      "practiceExercises": [
        {
          "title": "JSDoc Typed API Client",
          "instructions": "Write JSDoc annotations for an async function `fetchProduct(id)` defining the parameter, return type, and thrown errors.",
          "starterCode": "// Write JSDoc comments\nasync function fetchProduct(id) {\n  return { id, name: 'Sample', price: 99 };\n}",
          "solutionCode": "/**\n * Fetches product metadata by identifier.\n * @param {string} id - Product SKU or UUID\n * @returns {Promise<{ id: string, name: string, price: number }>} Product details\n * @throws {Error} If product does not exist\n */\nasync function fetchProduct(id) {\n  return { id, name: 'Sample', price: 99 };\n}"
        }
      ],
      "sections": [
        {
          "id": "js-adv-10-s1",
          "title": "1. JSDoc Type Annotations & `// @ts-check`",
          "difficulty": "Advanced",
          "explanation": "Adding `// @ts-check` at the top of a `.js` file instructs VS Code and TypeScript to validate variable assignments, function calls, and object shapes based on JSDoc comments.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "jsdoc_types.js",
              "title": "JSDoc Types with Compile-Time Checking",
              "code": "// @ts-check\n\n/**\n * @typedef {Object} Transaction\n * @property {string} id\n * @property {number} amount\n * @property {'pending' | 'settled' | 'failed'} status\n */\n\n/**\n * Processes financial transactions securely.\n * @param {Transaction[]} transactions - List of orders\n * @param {number} taxRate - Regional tax percentage\n * @returns {number} Net settled total\n */\nfunction processSettledTotal(transactions, taxRate) {\n  return transactions\n    .filter((t) => t.status === 'settled')\n    .reduce((sum, t) => sum + t.amount * (1 + taxRate), 0);\n}\n\n// Editor flags type errors automatically:\n// processSettledTotal([{ id: '1', amount: '100', status: 'settled' }], 0.08); // Error: string is not number!",
              "lineByLine": [
                {
                  "line": "// @ts-check",
                  "explanation": "Directs editor to enforce TypeScript type checks on vanilla JavaScript code."
                },
                {
                  "line": "@property {'pending' | 'settled' | 'failed'} status",
                  "explanation": "Defines strict union type for status field."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-10-s2",
          "title": "2. Runtime Schema Validation",
          "difficulty": "Advanced",
          "explanation": "Static types cannot protect against malformed JSON returned from third-party APIs. Runtime schema validators verify payload types before data enters application state.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "runtime_validator.js",
              "title": "Lightweight Runtime Validator Pattern",
              "code": "function validateUserPayload(data) {\n  const errors = [];\n\n  if (!data || typeof data !== 'object') {\n    throw new Error('Payload must be an object');\n  }\n  if (typeof data.id !== 'string' || data.id.trim() === '') {\n    errors.push('Field \"id\" must be a non-empty string');\n  }\n  if (typeof data.email !== 'string' || !data.email.includes('@')) {\n    errors.push('Field \"email\" must be a valid email string');\n  }\n  if (data.age !== undefined && (typeof data.age !== 'number' || data.age < 0)) {\n    errors.push('Field \"age\" must be a positive number');\n  }\n\n  if (errors.length > 0) {\n    throw new Error(`Validation Failed: ${errors.join(', ')}`);\n  }\n\n  return data;\n}\n\ntry {\n  const user = validateUserPayload({ id: 'u1', email: 'valid@skillora.ai', age: 25 });\n  console.log('User verified:', user);\n} catch (err) {\n  console.error(err.message);\n}",
              "explanation": "Validating external data at the system boundary prevents downstream `TypeError` exceptions."
            }
          ]
        },
        {
          "id": "js-adv-10-s3",
          "title": "3. Defensive Coding & Error Boundaries",
          "difficulty": "Advanced",
          "explanation": "Error boundaries catch runtime failures in UI widgets, logging telemetry to monitoring platforms (e.g. Sentry) and rendering fallback interfaces without crashing the parent application.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "error_boundary.js",
              "title": "Vanilla JS Component Error Boundary Wrapper",
              "code": "function withErrorBoundary(componentFn, fallbackContainer) {\n  return function renderWithProtection(...args) {\n    try {\n      return componentFn(...args);\n    } catch (error) {\n      console.error('[Component Crash]', error);\n      \n      const fallback = document.createElement('div');\n      fallback.className = 'error-fallback-card';\n      fallback.textContent = 'This widget failed to load. Please refresh.';\n      \n      if (fallbackContainer) {\n        fallbackContainer.replaceChildren(fallback);\n      }\n      return fallback;\n    }\n  };\n}",
              "lineByLine": [
                {
                  "line": "try { return componentFn(...args); }",
                  "explanation": "Catches synchronous rendering errors and mounts graceful fallback UI."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What special comment header enables TypeScript compile-time type validation inside vanilla `.js` files?",
            "options": [
              "// @enable-types",
              "// @ts-check",
              "/* use strict */",
              "// @type-safe"
            ],
            "correctAnswer": 1,
            "explanation": "Placing `// @ts-check` at the very top of a JavaScript file enables TypeScript type checking powered by JSDoc comments."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-11",
    "orderIndex": 11,
    "title": "Building Reusable UI Components with Vanilla JavaScript",
    "description": "Master component boundaries, stateful render cycles, event delegation inside custom components, Modal, Tabs, Dropdown implementations, and Web Components.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "While frameworks like React and Vue are ubiquitous, mastering component architecture with Vanilla JavaScript and Web Components (Custom Elements, Shadow DOM, HTML Templates) establishes deep mastery over component lifecycles, DOM scoping, and state-driven rendering.",
      "analogyHero": "Think of a Vanilla UI Component like a self-contained microwave appliance: it has its own internal wiring (state), control buttons (event listeners), digital clock display (render function), and power plug (mount method) that allows it to be dropped into any kitchen counter without interfering with the refrigerator.",
      "objectives": [
        "Design modular Vanilla JS UI components with encapsulated state and render functions.",
        "Build accessible Modal, Tabs, and Dropdown components from scratch.",
        "Implement Web Components using `customElements.define` and Shadow DOM.",
        "Manage component lifecycles (`connectedCallback`, `disconnectedCallback`, `attributeChangedCallback`).",
        "Sync state changes to DOM elements efficiently without tearing down entire subtrees."
      ],
      "estimatedTime": "65 mins",
      "keyTakeaways": [
        "A reusable component encapsulates state, DOM templates, event bindings, and teardown logic.",
        "Shadow DOM (`attachShadow({ mode: \"open\" })`) isolates CSS styles and DOM subtrees from the host page.",
        "`connectedCallback` triggers when a Web Component is mounted; `disconnectedCallback` triggers on unmount for listener cleanup.",
        "Always implement keyboard accessibility (Esc to close modals, arrow keys for tab navigation)."
      ],
      "summary": "Building stateful components in vanilla JavaScript solidifies architecture patterns and creates lightweight, framework-agnostic UI libraries.",
      "syntaxGuide": "// Autonomous Web Component\nclass SkilloraBadge extends HTMLElement {\n  connectedCallback() {\n    const text = this.getAttribute('text') || 'Approved';\n    this.innerHTML = `<span class=\"badge badge-primary\">${text}</span>`;\n  }\n}\ncustomElements.define('skillora-badge', SkilloraBadge);\n\n// In HTML: <skillora-badge text=\"Masterclass\"></skillora-badge>",
      "practiceExercises": [
        {
          "title": "Accessible Modal Component",
          "instructions": "Build a reusable `Modal` class with `.open()`, `.close()`, backdrop click dismissal, and `Escape` key listeners that auto-cleanup on close.",
          "starterCode": "class Modal {\n  constructor(modalElement) {}\n  open() {}\n  close() {}\n}",
          "solutionCode": "class Modal {\n  constructor(element) {\n    this.element = element;\n    this.onKeyDown = (e) => { if (e.key === 'Escape') this.close(); };\n  }\n\n  open() {\n    this.element.classList.remove('hidden');\n    document.addEventListener('keydown', this.onKeyDown);\n  }\n\n  close() {\n    this.element.classList.add('hidden');\n    document.removeEventListener('keydown', this.onKeyDown);\n  }\n}"
        }
      ],
      "sections": [
        {
          "id": "js-adv-11-s1",
          "title": "1. Encapsulated Component Architecture in Vanilla JS",
          "difficulty": "Advanced",
          "explanation": "A clean component pattern separates state initialization, template rendering, event subscription, and cleanup into standard lifecycle methods.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "vanilla_tabs.js",
              "title": "Reusable Stateful Tabs Component",
              "code": "class TabComponent {\n  constructor(containerEl, tabs = [], initialIndex = 0) {\n    this.container = containerEl;\n    this.tabs = tabs; // [{ id, label, content }]\n    this.activeIndex = initialIndex;\n\n    this.render();\n    this.bindEvents();\n  }\n\n  render() {\n    this.container.innerHTML = `\n      <div class=\"tab-headers flex gap-2 border-b\">\n        ${this.tabs.map((t, i) => `\n          <button class=\"tab-btn py-2 px-4 ${i === this.activeIndex ? 'border-b-2 border-brand font-bold' : 'text-gray-500'}\" data-index=\"${i}\">\n            ${t.label}\n          </button>\n        `).join('')}\n      </div>\n      <div class=\"tab-body p-4\">\n        ${this.tabs[this.activeIndex]?.content || ''}\n      </div>\n    `;\n  }\n\n  bindEvents() {\n    this.container.addEventListener('click', (e) => {\n      const btn = e.target.closest('.tab-btn');\n      if (!btn) return;\n      this.activeIndex = Number(btn.dataset.index);\n      this.render();\n    });\n  }\n}",
              "lineByLine": [
                {
                  "line": "this.container.addEventListener(\"click\", ...)",
                  "explanation": "Uses Event Delegation to handle tab clicks across re-renders."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-11-s2",
          "title": "2. Standard Web Components & Shadow DOM",
          "difficulty": "Advanced",
          "explanation": "Web Components provide a browser-native component model. Custom Elements define custom tags; Shadow DOM provides complete CSS style isolation.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "web_component.js",
              "title": "Custom Element with Encapsulated Shadow DOM",
              "code": "class MetricCard extends HTMLElement {\n  constructor() {\n    super();\n    // Attach isolated Shadow DOM tree:\n    this.attachShadow({ mode: 'open' });\n  }\n\n  static get observedAttributes() {\n    return ['title', 'value', 'trend'];\n  }\n\n  attributeChangedCallback() {\n    this.render();\n  }\n\n  connectedCallback() {\n    this.render();\n  }\n\n  render() {\n    const title = this.getAttribute('title') || 'Metric';\n    const value = this.getAttribute('value') || '0';\n    const trend = this.getAttribute('trend') || '+0%';\n\n    this.shadowRoot.innerHTML = `\n      <style>\n        :host { display: block; padding: 1rem; border-radius: 0.75rem; background: #1e293b; color: white; }\n        .title { font-size: 0.875rem; color: #94a3b8; }\n        .value { font-size: 1.5rem; font-weight: bold; margin: 0.25rem 0; }\n        .trend { font-size: 0.75rem; color: #10b981; }\n      </style>\n      <div class=\"title\">${title}</div>\n      <div class=\"value\">${value}</div>\n      <div class=\"trend\">${trend}</div>\n    `;\n  }\n}\n\ncustomElements.define('metric-card', MetricCard);",
              "explanation": "Styles inside the shadow root do not leak into the parent document, and external styles cannot inadvertently alter shadow nodes."
            }
          ]
        },
        {
          "id": "js-adv-11-s3",
          "title": "3. Accessible Modal Dialog with Focus Trapping",
          "difficulty": "Advanced",
          "explanation": "Accessible modals must trap tab focus inside the active dialog, set `aria-modal=\"true\"`, and return focus to the triggering element upon close.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "accessible_modal.js",
              "title": "Accessible Modal Dialog Controller",
              "code": "class AccessibleModal {\n  constructor(modalEl, triggerBtn) {\n    this.modal = modalEl;\n    this.trigger = triggerBtn;\n    this.closeBtn = modalEl.querySelector('.modal-close');\n    this.onKeyDown = this.handleKeyDown.bind(this);\n\n    this.closeBtn?.addEventListener('click', () => this.close());\n    this.trigger?.addEventListener('click', () => this.open());\n  }\n\n  open() {\n    this.modal.setAttribute('aria-hidden', 'false');\n    this.modal.classList.remove('hidden');\n    document.addEventListener('keydown', this.onKeyDown);\n    this.closeBtn?.focus(); // Move focus inside modal\n  }\n\n  close() {\n    this.modal.setAttribute('aria-hidden', 'true');\n    this.modal.classList.add('hidden');\n    document.removeEventListener('keydown', this.onKeyDown);\n    this.trigger?.focus(); // Return focus to triggering button\n  }\n\n  handleKeyDown(e) {\n    if (e.key === 'Escape') this.close();\n  }\n}",
              "lineByLine": [
                {
                  "line": "this.trigger?.focus()",
                  "explanation": "Essential accessibility requirement: restores keyboard focus to origin button upon modal exit."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Which lifecycle method in a standard Web Component is invoked when the custom element is attached to the live document DOM?",
            "options": [
              "componentDidMount()",
              "connectedCallback()",
              "adoptedCallback()",
              "renderedCallback()"
            ],
            "correctAnswer": 1,
            "explanation": "`connectedCallback()` is the official Web Component lifecycle hook invoked each time the custom element is appended into a document-connected element."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-12",
    "orderIndex": 12,
    "title": "Modern Frontend Tooling and Deployment",
    "description": "Master npm package management, package.json dependencies, Vite build pipelines, tree shaking, environment variables (.env), source maps, and production optimization.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "Modern JavaScript applications rely on build tools and package managers. Understanding Vite's Hot Module Replacement (HMR) powered by native ES modules, production Rollup bundling, tree shaking (dead-code elimination), source map debugging, and environment variables is essential for deploying production software.",
      "analogyHero": "Think of Vite and modern bundlers like an automated manufacturing and packaging facility: during prototyping, parts move freely on open conveyers for instant adjustments (HMR), but when packaging for retail shipping, high-speed machines compress, minify, tree-shake dead packaging, and seal everything into ultra-compact, high-speed distribution parcels (production bundles).",
      "objectives": [
        "Master `npm` commands, `package.json` configurations, semantic versioning (`^`, `~`), and `package-lock.json`.",
        "Understand Vite's architecture: native ESM dev server + Rollup production bundle pipeline.",
        "Leverage Tree Shaking to eliminate unused exported code from production bundles.",
        "Manage environment configurations securely using `.env` files and `import.meta.env`.",
        "Configure Source Maps for accurate production error stack trace debugging."
      ],
      "estimatedTime": "55 mins",
      "keyTakeaways": [
        "`dependencies` are required at runtime; `devDependencies` are used strictly during local development and builds.",
        "Tree shaking relies on static ES Module syntax (`import` / `export`); CommonJS `require()` cannot be tree-shaken as effectively.",
        "Never commit secret API keys or private certificates to frontend `.env` files (anything prefixed with `VITE_` is bundled into public client JS).",
        "`package-lock.json` pins exact dependency trees, ensuring reproducible builds across CI/CD environments."
      ],
      "summary": "Proficiency in frontend tooling and build optimization ensures fast local development feedback and streamlined production deployments.",
      "syntaxGuide": "// Accessing environment variables in Vite:\nconst API_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.skillora.ai';\nconst IS_DEV = import.meta.env.DEV;\n\nif (IS_DEV) {\n  console.log('Running in development mode on:', API_URL);\n}",
      "practiceExercises": [
        {
          "title": "Environment Config Resolver",
          "instructions": "Write a configuration module that reads `import.meta.env` with fallback defaults for `API_URL`, `TIMEOUT`, and `ENABLE_MOCK`.",
          "starterCode": "export const AppConfig = {\n  // Read from import.meta.env\n};",
          "solutionCode": "export const AppConfig = {\n  apiUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) || 'https://api.skillora.ai',\n  timeout: Number((typeof import.meta !== 'undefined' && import.meta.env?.VITE_TIMEOUT) || 5000),\n  enableMock: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_ENABLE_MOCK) === 'true'\n};"
        }
      ],
      "sections": [
        {
          "id": "js-adv-12-s1",
          "title": "1. Package Management & Semantic Versioning",
          "difficulty": "Advanced",
          "explanation": "Semantic Versioning follows `MAJOR.MINOR.PATCH` (e.g. `2.4.1`). In `package.json`, caret `^2.4.1` permits compatible minor/patch updates; tilde `~2.4.1` permits only patch updates.",
          "codeSnippets": [
            {
              "language": "json",
              "filename": "package.json",
              "title": "Standard package.json Configuration",
              "code": "{\n  \"name\": \"skillora-js-app\",\n  \"version\": \"1.0.0\",\n  \"type\": \"module\",\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"vite build\",\n    \"preview\": \"vite preview\",\n    \"test\": \"playwright test\"\n  },\n  \"dependencies\": {\n    \"dompurify\": \"^3.1.6\"\n  },\n  \"devDependencies\": {\n    \"@playwright/test\": \"^1.46.0\",\n    \"vite\": \"^5.4.0\"\n  }\n}",
              "lineByLine": [
                {
                  "line": "\"type\": \"module\"",
                  "explanation": "Configures Node.js and bundlers to treat all .js files as ES Modules by default."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-12-s2",
          "title": "2. Vite Architecture & Tree Shaking",
          "difficulty": "Advanced",
          "explanation": "Vite serves source code over native ESM in development without bundle overhead. In production, Rollup analyzes ES import graphs, performing Tree Shaking to discard unused functions.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "tree_shaking_demo.js",
              "title": "Tree-Shakeable Utility Exports",
              "code": "// mathLibrary.js\nexport function add(a, b) { return a + b; }\nexport function unusedHeavyMatrixTransform(data) {\n  // Heavy 500-line matrix computation\n  return data.map(x => x * 2);\n}\n\n// In main.js:\nimport { add } from './mathLibrary.js';\nconsole.log(add(5, 10));\n\n// Result in production bundle:\n// 'unusedHeavyMatrixTransform' is completely stripped from the final JS bundle!",
              "explanation": "Static ES imports allow the bundler to verify at build time that `unusedHeavyMatrixTransform` is never referenced."
            }
          ]
        },
        {
          "id": "js-adv-12-s3",
          "title": "3. Environment Variables & Source Maps",
          "difficulty": "Advanced",
          "explanation": "Vite exposes environment variables on `import.meta.env`. Source Maps map minified production bundle code back to original source files for debugging stack traces.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "env_config.js",
              "title": "Reading Environment Configuration Safely",
              "code": "// .env.production\n// VITE_API_ENDPOINT=https://api.skillora.ai\n// VITE_APP_ENV=production\n\nfunction initializeApiClient() {\n  const endpoint = import.meta.env?.VITE_API_ENDPOINT || 'http://localhost:3000';\n  const isProduction = import.meta.env?.MODE === 'production';\n\n  console.log(`[System Init] Mode: ${isProduction ? 'Production' : 'Dev'} -> Endpoint: ${endpoint}`);\n  return { endpoint, isProduction };\n}\n\ninitializeApiClient();",
              "lineByLine": [
                {
                  "line": "import.meta.env?.VITE_API_ENDPOINT",
                  "explanation": "Vite automatically replaces this expression with the build-time environment value."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What is the requirement for code to be eligible for Tree Shaking (dead-code elimination) during production builds?",
            "options": [
              "Code must be written inside async functions",
              "Code must use static ES Module syntax (import / export) rather than dynamic CommonJS require()",
              "Code must be enclosed in try/catch blocks",
              "Code must use TypeScript interfaces"
            ],
            "correctAnswer": 1,
            "explanation": "Tree shaking requires static ES Module structure (`import`/`export`) so the bundler can determine dependency graphs at compile time."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-13",
    "orderIndex": 13,
    "title": "Professional JavaScript Portfolio and Career Preparation",
    "description": "Master portfolio architecture, clean Git commit workflows, writing technical README documentation, technical interview algorithms, code review etiquette, and freelance scoping.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "Transitioning from learning JavaScript to securing professional software engineering roles requires technical presentation skills: demonstrating architectural depth in portfolio projects, writing comprehensive documentation, maintaining clean Git commit histories, and articulating engineering trade-offs during technical interviews.",
      "analogyHero": "Think of your portfolio like an architect's public exhibition: clients and hiring partners do not just want to hear you say \"I can build houses\"—they want to inspect your structural blueprints, structural load calculations, material selection rationales, and past delivered estates.",
      "objectives": [
        "Curate production-grade portfolio projects showcasing full-stack JavaScript mastery.",
        "Write professional README documentation with architecture diagrams, setup scripts, and test reports.",
        "Master Conventional Commits and Git branch PR workflows.",
        "Prepare for technical JavaScript interview topics (closures, event loop, prototypes, async patterns).",
        "Learn freelance project scoping, client requirement gathering, and time estimation."
      ],
      "estimatedTime": "50 mins",
      "keyTakeaways": [
        "Hiring managers look for production quality over quantity: 2 deeply engineered applications beat 10 trivial toy apps.",
        "Every portfolio repository must have a live interactive demo link, clear setup instructions, and automated test commands.",
        "Use Conventional Commits (`feat:`, `fix:`, `refactor:`, `test:`, `docs:`) to communicate change intent clearly.",
        "During technical interviews, communicate trade-offs (e.g. time vs space complexity, memory vs latency)."
      ],
      "summary": "Professional documentation, clear code structure, and articulate communication transform technical skills into career opportunities.",
      "syntaxGuide": "// Conventional Commit format:\nfeat(auth): implement jwt token refresh with exponential backoff\nfix(cart): prevent race condition when removing items rapidly\ntest(weather): add unit tests for temperature conversion helper\n\n// Standard README structure:\n# Project Title\n## Architecture Overview\n## Live Demo\n## Installation & Local Development\n## Automated Test Suite",
      "practiceExercises": [
        {
          "title": "Technical README Generator",
          "instructions": "Draft a structured Markdown README template for a JavaScript project containing sections for Overview, Tech Stack, Installation, and Testing.",
          "starterCode": "// Write Markdown template string",
          "solutionCode": "const template = `# Project Name\n## Overview\nBrief 2-sentence description.\n## Tech Stack\n- Vanilla JavaScript (ES6+)\n- Vite\n- Playwright\n## Setup\n```bash\nnpm install\nnpm run dev\n```\n## Tests\n```bash\nnpm test\n```;"
        }
      ],
      "sections": [
        {
          "id": "js-adv-13-s1",
          "title": "1. Portfolio Strategy: Quality & Architectural Depth",
          "difficulty": "Advanced",
          "explanation": "A standout portfolio features complete applications addressing real-world constraints: authentication, responsive UI, persistent state, offline resilience, and automated tests.",
          "codeSnippets": [
            {
              "language": "markdown",
              "filename": "README.md",
              "title": "Professional Repository Documentation Standard",
              "code": "# FinancePulse — Personal Finance Management Dashboard\n\nA production-ready personal finance tracker built with Vanilla JavaScript (ES6+), LocalStorage persistence, and Web Workers.\n\n## 🚀 Key Features\n- **Transaction Engine**: Add income/expenses with category tagging and validation.\n- **Visual Analytics**: Interactive canvas-based spending breakdowns.\n- **Offline First**: Zero cloud dependency with robust LocalStorage data management.\n- **Fully Tested**: 100% unit test coverage and Playwright E2E suites.\n\n## 🛠️ Tech Stack\n- **Core**: Vanilla JavaScript (ES2024 Modules)\n- **Tooling**: Vite, ESLint, Prettier\n- **Testing**: Playwright End-to-End Suite",
              "explanation": "Provides recruiters and engineering leads with immediate clarity regarding capabilities and project scope."
            }
          ]
        },
        {
          "id": "js-adv-13-s2",
          "title": "2. Git Workflows & Conventional Commits",
          "difficulty": "Advanced",
          "explanation": "Conventional Commits standardize commit history for automated changelog generation and clear code review traceability.",
          "codeSnippets": [
            {
              "language": "bash",
              "filename": "git_workflow.sh",
              "title": "Standard Git Feature Branch Workflow",
              "code": "# 1. Create feature branch\ngit checkout -b feat/weather-api-cache\n\n# 2. Make changes and commit with Conventional Commits\ngit add src/features/weather/cache.js\ngit commit -m \"feat(weather): implement 10-minute ttl cache for city forecasts\"\n\n# 3. Add unit tests\ngit add tests/weatherCache.spec.js\ngit commit -m \"test(weather): add unit tests for cache expiration\"\n\n# 4. Push branch for Pull Request review\ngit push origin feat/weather-api-cache",
              "lineByLine": [
                {
                  "line": "git commit -m \"feat(weather): ...\"",
                  "explanation": "Follows standard type(scope): message convention."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-13-s3",
          "title": "3. Technical Interview Mastery & Problem-Solving Strategy",
          "difficulty": "Advanced",
          "explanation": "When solving algorithms or architecture prompts in interviews: 1. Clarify constraints and edge cases, 2. Propose brute force approach, 3. Optimize time/space complexity, 4. Code cleanly, 5. Walk through test cases manually.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "interview_patterns.js",
              "title": "Classic Interview Problem: Deep Object Flattening",
              "code": "function flattenObject(obj, prefix = '', res = {}) {\n  for (const [key, val] of Object.entries(obj)) {\n    const newKey = prefix ? `${prefix}.${key}` : key;\n    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {\n      flattenObject(val, newKey, res);\n    } else {\n      res[newKey] = val;\n    }\n  }\n  return res;\n}\n\nconst nestedData = { user: { profile: { name: 'Jordan', age: 28 }, role: 'Dev' } };\nconsole.log(flattenObject(nestedData));\n// { 'user.profile.name': 'Jordan', 'user.profile.age': 28, 'user.role': 'Dev' }",
              "explanation": "Demonstrates deep recursion mastery, type checking, and boundary condition awareness."
            }
          ],
          "miniPractice": {
            "question": "Which Conventional Commit prefix should be used when adding new functionality to an application?",
            "options": [
              "fix:",
              "feat:",
              "chore:",
              "docs:"
            ],
            "correctAnswer": 1,
            "explanation": "The `feat:` prefix is used in Conventional Commits to denote introducing a new feature or user-facing capability."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-14",
    "orderIndex": 14,
    "title": "Complete Production Pipeline and Final Masterpiece",
    "description": "Master end-to-end production JavaScript engineering: requirements gathering, data modeling, state architecture, API integration, performance budgets, security auditing, and deployment.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 150,
    "level": "advanced",
    "type": "theory",
    "lessonContent": {
      "overview": "Building a production-ready enterprise application is the culmination of the entire JavaScript Masterclass. This module synthesizes data modeling, modular state management, resilient API clients, secure DOM rendering, responsive UX, accessibility standards, automated testing, and build pipelines into an integrated production capstone.",
      "analogyHero": "Think of completing the master pipeline like conducting a symphony orchestra: every individual instrument section (DOM, Async, Storage, Security, Testing, Tooling) plays in synchronized harmony to produce a breathtaking musical masterpiece.",
      "objectives": [
        "Design scalable application state architectures using the Store / Reducer / Pub-Sub pattern.",
        "Implement defensive API networking layers with automatic token refreshes and error handling.",
        "Enforce security best practices (XSS sanitization, CSP, prototype defense).",
        "Establish automated CI/CD validation pipelines (typecheck, lint, unit tests, E2E tests, production build).",
        "Deliver a complete, production-grade JavaScript masterpiece application."
      ],
      "estimatedTime": "70 mins",
      "keyTakeaways": [
        "A single source of truth for state simplifies debugging, persistence, and reactive UI re-rendering.",
        "Separate business logic completely from presentation and DOM manipulation.",
        "Automate quality gates: pre-commit hooks, CI test suites, and production build minification.",
        "Deliver comprehensive documentation and clean code that any junior or senior engineer can understand."
      ],
      "summary": "You now command the complete modern JavaScript toolchain, from low-level runtime engines to production enterprise application architecture.",
      "syntaxGuide": "// Complete Application Store Pattern (Unidirectional Data Flow):\nclass AppStore {\n  #state;\n  #subscribers = new Set();\n\n  constructor(initialState) {\n    this.#state = initialState;\n  }\n\n  getState() {\n    return { ...this.#state }; // Return immutable copy\n  }\n\n  setState(updater) {\n    this.#state = typeof updater === 'function' ? updater(this.#state) : { ...this.#state, ...updater };\n    this.#subscribers.forEach((cb) => cb(this.#state));\n  }\n\n  subscribe(callback) {\n    this.#subscribers.add(callback);\n    return () => this.#subscribers.delete(callback);\n  }\n}",
      "practiceExercises": [
        {
          "title": "Production State Store Implementation",
          "instructions": "Build a production-grade `Store` class with private `#state`, immutable `getState()`, `dispatch(action, payload)` reducer pattern, and `subscribe(listener)`.",
          "starterCode": "class Store {\n  constructor(reducer, initialState) {}\n}",
          "solutionCode": "class Store {\n  #state;\n  #reducer;\n  #listeners = new Set();\n\n  constructor(reducer, initialState) {\n    this.#reducer = reducer;\n    this.#state = initialState;\n  }\n\n  getState() { return this.#state; }\n\n  dispatch(action) {\n    this.#state = this.#reducer(this.#state, action);\n    this.#listeners.forEach((l) => l(this.#state));\n  }\n\n  subscribe(listener) {\n    this.#listeners.add(listener);\n    return () => this.#listeners.delete(listener);\n  }\n}"
        }
      ],
      "sections": [
        {
          "id": "js-adv-14-s1",
          "title": "1. Unidirectional Data Flow & State Management",
          "difficulty": "Advanced",
          "explanation": "Unidirectional data flow ensures that state mutations occur strictly through predictable dispatch actions, notifying subscribed UI renderers automatically.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "production_store.js",
              "title": "Unidirectional Reducer Store Implementation",
              "code": "function rootReducer(state, action) {\n  switch (action.type) {\n    case 'TASK_ADDED':\n      return { ...state, tasks: [...state.tasks, action.payload] };\n    case 'TASK_TOGGLED':\n      return {\n        ...state,\n        tasks: state.tasks.map((t) => t.id === action.payload ? { ...t, completed: !t.completed } : t)\n      };\n    case 'FILTER_SET':\n      return { ...state, filter: action.payload };\n    default:\n      return state;\n  }\n}\n\nclass Store {\n  #state;\n  #listeners = new Set();\n\n  constructor(reducer, initial) {\n    this.reducer = reducer;\n    this.#state = initial;\n  }\n\n  getState() { return this.#state; }\n\n  dispatch(action) {\n    this.#state = this.reducer(this.#state, action);\n    this.#listeners.forEach((fn) => fn(this.#state));\n  }\n\n  subscribe(fn) {\n    this.#listeners.add(fn);\n    return () => this.#listeners.delete(fn);\n  }\n}\n\nconst store = new Store(rootReducer, { tasks: [], filter: 'all' });\nstore.subscribe((state) => console.log('State updated:', state));\n\nstore.dispatch({ type: 'TASK_ADDED', payload: { id: 1, title: 'Master JavaScript', completed: false } });",
              "lineByLine": [
                {
                  "line": "this.#state = this.reducer(this.#state, action);",
                  "explanation": "Pure reducer function evaluates next state immutably based on action type."
                }
              ]
            }
          ]
        },
        {
          "id": "js-adv-14-s2",
          "title": "2. Production Network Service with Token Refresh",
          "difficulty": "Advanced",
          "explanation": "Enterprise API clients automatically catch 401 Unauthorized errors, pause pending requests, exchange refresh tokens, and replay original requests transparently.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "auth_client.js",
              "title": "Resilient Authenticated API Client",
              "code": "class AuthenticatedApiClient {\n  constructor(baseUrl) {\n    this.baseUrl = baseUrl;\n    this.accessToken = null;\n  }\n\n  setToken(token) { this.accessToken = token; }\n\n  async request(endpoint, options = {}) {\n    const url = `${this.baseUrl}${endpoint}`;\n    const headers = {\n      'Content-Type': 'application/json',\n      ...(this.accessToken ? { 'Authorization': `Bearer ${this.accessToken}` } : {}),\n      ...options.headers\n    };\n\n    let response = await fetch(url, { ...options, headers });\n\n    // Handle token expiration & automatic refresh\n    if (response.status === 401) {\n      console.warn('[ApiClient] 401 detected. Attempting token refresh...');\n      const refreshed = await this.refreshToken();\n      if (refreshed) {\n        headers['Authorization'] = `Bearer ${this.accessToken}`;\n        response = await fetch(url, { ...options, headers }); // Replay\n      }\n    }\n\n    if (!response.ok) {\n      throw new Error(`API HTTP Error ${response.status}`);\n    }\n\n    return await response.json();\n  }\n\n  async refreshToken() {\n    // Refresh token exchange logic\n    this.accessToken = 'NEW_ACCESS_TOKEN_99';\n    return true;\n  }\n}",
              "explanation": "Transparent token refresh eliminates session interruptions for active application users."
            }
          ]
        },
        {
          "id": "js-adv-14-s3",
          "title": "3. The Production Release Checklist",
          "difficulty": "Advanced",
          "explanation": "Before deploying any JavaScript application to production, run the comprehensive verification checklist across type safety, tests, performance, security, and accessibility.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "production_audit.js",
              "title": "Automated CI/CD Quality Gate Script",
              "code": "// Verification pipeline checks\nconst QUALITY_GATES = [\n  { name: 'TypeScript Typecheck', command: 'npm run typecheck' },\n  { name: 'Lint & Format Verification', command: 'npm run lint' },\n  { name: 'Unit & Integration Tests', command: 'npm test' },\n  { name: 'Playwright E2E Verification', command: 'npx playwright test' },\n  { name: 'Production Bundle Build', command: 'npm run build' }\n];\n\nconsole.table(QUALITY_GATES);\nconsole.log('All quality gates verified. Application is 100% PRODUCTION APPROVED! 🚀');",
              "lineByLine": [
                {
                  "line": "QUALITY_GATES",
                  "explanation": "Mandatory verification checklist executed before merging to main branch."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What is the primary benefit of Unidirectional Data Flow in state management architecture?",
            "options": [
              "It allows mutating state directly from any DOM element",
              "It ensures state transitions are predictable, centralized, and easily traceable for debugging and persistence",
              "It eliminates the need for JavaScript classes",
              "It forces all functions to be asynchronous"
            ],
            "correctAnswer": 1,
            "explanation": "Unidirectional data flow ensures state changes happen exclusively via dispatched actions and pure reducers, making state history deterministic and observable."
          }
        }
      ]
    }
  },
  {
    "id": "js-adv-p1",
    "orderIndex": 15,
    "title": "Advanced Practical Project 1: Personal Finance Dashboard",
    "description": "Build a comprehensive, production-grade Personal Finance Dashboard featuring transaction management, income/expense tracking, balance calculations, category filters, interactive visual summaries, LocalStorage persistence, and modular architecture.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 400,
    "level": "advanced",
    "type": "project",
    "isProject": true,
    "projectDetails": {
      "title": "Personal Finance Dashboard",
      "category": "Web Development",
      "difficulty": "Advanced",
      "estimatedTime": "5-7 hours",
      "overview": "Develop a modern, highly responsive Personal Finance Dashboard application built entirely with vanilla JavaScript (ES6+). The application tracks income and expense transactions, computes real-time balance totals, visualizes spending breakdowns via dynamic charts or progress bars, filters and searches transactions, validates inputs defensively, and persists state in LocalStorage.",
      "learningObjectives": [
        "Design a scalable, unidirectional state store architecture in pure JavaScript.",
        "Implement transaction CRUD operations (Create, Read, Update, Delete) with defensive data validation.",
        "Calculate net balance, total income, total expenses, and category percentages.",
        "Build custom canvas-based or CSS-driven visual summaries and progress meters.",
        "Persist and migrate state safely in LocalStorage with backup export/import capabilities."
      ],
      "requirements": [
        "Transaction Management: Form to add income and expenses with amount, category, description, and date validation.",
        "Financial Metrics: Live calculation of Total Balance, Total Income, Total Expenses, and Savings Rate.",
        "Filtering & Search: Filter by type (All, Income, Expense), category, date range, and text search.",
        "Visual Summaries: Visual category breakdown bars or chart displaying percentage of spending by category.",
        "LocalStorage Persistence: Safe persistence of transaction ledger across sessions with error recovery.",
        "Export & Import: Capability to export transaction data as JSON/CSV and import existing backup files.",
        "Modular Architecture: Clean separation of Store, Analytics Engine, Storage Service, and UI Renderer.",
        "Accessible UI: Keyboard navigation, ARIA attributes, and high-contrast styling."
      ],
      "deliverables": [
        "Complete working source files (index.html, styles.css, app.js, store.js, analytics.js, storage.js).",
        "Functional transaction creation, deletion, and editing workflows.",
        "Accurate real-time balance calculations and category distribution percentages.",
        "Search and filter functionality with instant UI updates.",
        "LocalStorage state persistence with corruption fallback.",
        "JSON data export and import feature.",
        "Unit test suite testing financial calculations and storage operations.",
        "Testing checklist verifying mobile responsiveness and calculation precision.",
        "Screenshots or screen recording demonstrating dashboard interaction.",
        "Technical report explaining architectural design patterns and security safeguards."
      ],
      "rubric": [
        {
          "criteria": "State & Store Architecture",
          "points": 30,
          "description": "Unidirectional data flow, pure reducers, and decoupled event handling."
        },
        {
          "criteria": "Financial Calculations & Analytics",
          "points": 25,
          "description": "Accurate floating-point arithmetic, aggregation logic, and visual summaries."
        },
        {
          "criteria": "Persistence & Data Integrity",
          "points": 25,
          "description": "Reliable LocalStorage caching, JSON export/import, and defensive error handling."
        },
        {
          "criteria": "Code Quality & Accessibility",
          "points": 20,
          "description": "Clean ES modules, JSDoc annotations, keyboard navigation, and responsive UX."
        }
      ],
      "commonMistakes": [
        "Accumulating floating point errors (e.g. `0.1 + 0.2 === 0.30000000000000004`) without proper rounding or integer-cent conversions.",
        "Coupling DOM event listeners directly to calculation logic instead of dispatching store actions.",
        "Failing to validate imported JSON structure, causing application crashes on malformed files."
      ]
    }
  },
  {
    "id": "js-adv-p2",
    "orderIndex": 16,
    "title": "Advanced Practical Project 2: Production-Ready API-Based Productivity App",
    "description": "Build an enterprise-grade, API-driven Productivity Application featuring task management, multi-level filtering, search, asynchronous API/mock integration with retry logic, empty/loading/error states, modular components, automated unit tests, and production build optimization.",
    "status": "locked",
    "requiresQuiz": false,
    "xpReward": 500,
    "level": "advanced",
    "type": "project",
    "isProject": true,
    "projectDetails": {
      "title": "Production-Ready API-Based Productivity App",
      "category": "Web Development",
      "difficulty": "Advanced",
      "estimatedTime": "8-10 hours",
      "overview": "Engineer a complete, production-ready, full-featured Productivity Application. The app features multi-column project boards, task prioritization, due date tracking, asynchronous REST API integration (or realistic mock API client with latency simulation), AbortController request cancellation, retry policies, robust offline persistence, reusable UI component architecture, and automated test coverage.",
      "learningObjectives": [
        "Architect a full-scale Vanilla JavaScript application following enterprise modular standards.",
        "Implement resilient asynchronous networking with AbortController and exponential backoff.",
        "Build custom reusable UI components (Modals, Dropdowns, Toast notifications, Confirm dialogs).",
        "Implement drag-and-drop or column-based board state transitions.",
        "Write automated Unit and End-to-End test suites verifying complete user lifecycles."
      ],
      "requirements": [
        "Task Board & Columns: Multi-state task board (To Do, In Progress, Review, Completed) with status transitions.",
        "Task Details: Rich task creation with title, priority (Low, Medium, High, Urgent), tags, due date, and notes.",
        "Async API Layer: Simulated or live REST API client handling GET, POST, PUT, DELETE with latency, error simulation, and AbortController cancellation.",
        "Resilience & Retries: Automatic exponential backoff retry on transient network failures.",
        "UI Component System: Reusable Vanilla JS components for Modal Dialogs, Toast Notifications, and Dropdowns.",
        "Search & Filter: Real-time debounced search by keyword and multi-select filtering by priority and tags.",
        "State Persistence: Synchronized LocalStorage caching with background sync queue.",
        "Automated Testing: Unit tests for state reducers and Playwright E2E tests for task lifecycles.",
        "Production Build: Vite-powered build optimization with tree shaking and minification."
      ],
      "deliverables": [
        "Complete production codebase structured across modular directories (api/, components/, store/, utils/).",
        "Functional board with status transitions and priority tagging.",
        "Resilient async API client featuring AbortController and exponential backoff.",
        "Reusable Modal, Toast, and Dropdown component modules.",
        "Comprehensive unit test suite verifying state management and network retry policies.",
        "Playwright End-to-End test suite verifying critical user journeys.",
        "Vite configuration and production build artifacts.",
        "Professional README documentation with architecture diagrams and API contract specs.",
        "Testing checklist and security audit report.",
        "Video recording or interactive live demo demonstrating full functionality."
      ],
      "rubric": [
        {
          "criteria": "System Architecture & Modularity",
          "points": 30,
          "description": "Clean separation of concerns, store pattern, reusable components, and no code duplication."
        },
        {
          "criteria": "Async Resilience & API Engineering",
          "points": 25,
          "description": "AbortController cancellation, exponential backoff, status code handling, and loading states."
        },
        {
          "criteria": "Testing & Code Quality",
          "points": 25,
          "description": "High test coverage across unit and E2E suites, JSDoc annotations, and defensive programming."
        },
        {
          "criteria": "UX, Accessibility & Production Polish",
          "points": 20,
          "description": "Flawless responsive design, keyboard accessibility, toast alerts, and Vite production bundle."
        }
      ],
      "commonMistakes": [
        "Allowing obsolete async responses to overwrite updated task state due to missing AbortController signals.",
        "Directly querying DOM elements inside business logic rather than dispatching actions through the store.",
        "Failing to clean up event listeners and intervals when destroying modal or dropdown components."
      ]
    }
  },
  {
    "id": "js-adv-assessment",
    "orderIndex": 17,
    "title": "Advanced Level Final Assessment",
    "description": "Comprehensive 40-question multiple-choice assessment testing runtime execution contexts, V8 garbage collection, Event Loop internals, closures, currying, memoization, Proxy/Reflect, Generators, AbortController, Web APIs, performance profiling, security/XSS, design patterns, testing, and production architecture.",
    "status": "locked",
    "requiresQuiz": true,
    "xpReward": 400,
    "level": "advanced",
    "type": "assessment",
    "isFinalAssessment": true,
    "passingScore": 35,
    "totalQuestions": 40,
    "questions": [
      {
        "id": 1,
        "question": "Which component of a JavaScript execution context maintains the identifier-to-variable bindings for `let` and `const` declarations?",
        "options": [
          "Lexical Environment Record",
          "Global Object Store",
          "Call Stack Frame Marker",
          "Heap Pointer Registry"
        ],
        "correctAnswer": 0,
        "explanation": "The Lexical Environment Record stores identifier bindings for `let`, `const`, and function declarations within that execution block.",
        "topic": "Runtime & Execution Context"
      },
      {
        "id": 2,
        "question": "In V8's generational garbage collector, which algorithm is responsible for collecting short-lived allocations in the Young Generation space?",
        "options": [
          "Scavenge (Cheney's Copy Algorithm)",
          "Mark-Sweep-Compact",
          "Reference Counting",
          "Tri-color Sweep"
        ],
        "correctAnswer": 0,
        "explanation": "V8 uses the Scavenge algorithm (based on Cheney's copying algorithm) for fast, frequent garbage collection in the Young Generation (Semi-spaces).",
        "topic": "Garbage Collection"
      },
      {
        "id": 3,
        "question": "Why does executing an infinite recursive microtask loop (e.g. `const loop = () => queueMicrotask(loop); loop();`) completely freeze the browser tab?",
        "options": [
          "Because the Event Loop completely exhausts the Microtask Queue before yielding to Macrotasks or browser rendering passes",
          "Because microtasks run on a separate operating system thread",
          "Because microtasks consume 100% of GPU memory",
          "Because microtasks trigger continuous page refreshes"
        ],
        "correctAnswer": 0,
        "explanation": "The Event Loop will never proceed to UI rendering or input events as long as the Microtask Queue continues to have pending tasks.",
        "topic": "Event Loop & Microtasks"
      },
      {
        "id": 4,
        "question": "What is the primary operational difference between `requestAnimationFrame(callback)` and `setTimeout(callback, 16)`?",
        "options": [
          "requestAnimationFrame synchronizes callback execution immediately prior to the browser's next display repaint pass",
          "requestAnimationFrame runs on a background Web Worker",
          "setTimeout has higher execution priority than microtasks",
          "requestAnimationFrame only works in WebGL canvases"
        ],
        "correctAnswer": 0,
        "explanation": "`requestAnimationFrame` aligns execution with the screen refresh cycle before layout and paint, preventing jank and dropped frames.",
        "topic": "Browser Rendering Pipeline"
      },
      {
        "id": 5,
        "question": "What is the mathematical definition of Currying in functional programming?",
        "options": [
          "Transforming a function of $N$ arguments into a sequence of $N$ single-argument functions",
          "Converting a synchronous function into an async Promise",
          "Caching function return values in memory",
          "Binding this to null permanently"
        ],
        "correctAnswer": 0,
        "explanation": "Currying decomposes a multi-argument function $f(a, b, c)$ into a chain of unary functions $f(a)(b)(c)$.",
        "topic": "Functional Programming"
      },
      {
        "id": 6,
        "question": "What is the defining characteristic of a Pure Function?",
        "options": [
          "Given identical inputs, it always returns the exact same output and causes zero observable side effects",
          "It is written inside a class definition",
          "It must return a boolean value",
          "It executes in less than 1 millisecond"
        ],
        "correctAnswer": 0,
        "explanation": "Pure functions are deterministic (same input -> same output) and produce no external mutations or side effects.",
        "topic": "Pure Functions"
      },
      {
        "id": 7,
        "question": "What type of functions can be safely wrapped with a Memoization caching utility?",
        "options": [
          "Pure functions whose outputs depend strictly on their arguments",
          "Impure functions that fetch live database timestamps",
          "Functions that mutate the DOM directly",
          "Asynchronous functions that generate random UUIDs"
        ],
        "correctAnswer": 0,
        "explanation": "Only pure functions can be memoized, because their return value is guaranteed to be identical for any repeated set of inputs.",
        "topic": "Memoization"
      },
      {
        "id": 8,
        "question": "Which method on the `Proxy` handler object intercepts property access expressions like `obj.foo` or `obj['bar']`?",
        "options": [
          "get()",
          "read()",
          "has()",
          "apply()"
        ],
        "correctAnswer": 0,
        "explanation": "The `get(target, property, receiver)` trap intercepts all property reading operations on the proxy object.",
        "topic": "Proxy & Metaprogramming"
      },
      {
        "id": 9,
        "question": "Why should `Reflect.set(target, prop, value, receiver)` be used inside a `Proxy` `set` trap instead of `target[prop] = value`?",
        "options": [
          "Reflect maintains correct `this` receiver binding and returns a boolean indicating whether property assignment succeeded",
          "Reflect runs faster in Internet Explorer",
          "Reflect converts strings to numbers automatically",
          "Reflect bypasses property descriptors"
        ],
        "correctAnswer": 0,
        "explanation": "`Reflect.set` correctly forwards the receiver context (for getters/setters) and returns a boolean rather than throwing an exception in strict mode.",
        "topic": "Reflect API"
      },
      {
        "id": 10,
        "question": "What special method must be defined on an object to make it directly iterable with `for...of` loops and spread syntax?",
        "options": [
          "[Symbol.iterator]()",
          "[Symbol.iterable]()",
          "toIterable()",
          "iterate()"
        ],
        "correctAnswer": 0,
        "explanation": "The well-known symbol `[Symbol.iterator]` defines the default iterator for an object, consumed by `for...of` and `[...spread]`.",
        "topic": "Symbols & Iterators"
      },
      {
        "id": 11,
        "question": "What does a Generator function (`function*`) return when invoked?",
        "options": [
          "The first yielded value immediately",
          "A Generator object conforming to both the Iterable and Iterator protocols",
          "A Promise resolving to an array",
          "An execution context snapshot"
        ],
        "correctAnswer": 1,
        "explanation": "Invoking a generator function does not execute its body immediately; it returns a Generator iterator object containing `.next()`.",
        "topic": "Generators"
      },
      {
        "id": 12,
        "question": "How do you cancel a pending `fetch()` network request when using `AbortController`?",
        "options": [
          "Call fetch.cancel()",
          "Invoke `controller.abort()` on the associated AbortController instance",
          "Set the request headers to Connection: close",
          "Delete the Promise reference"
        ],
        "correctAnswer": 1,
        "explanation": "Passing `controller.signal` to `fetch()` and calling `controller.abort()` triggers immediate cancellation, rejecting the fetch with an `AbortError`.",
        "topic": "AbortController"
      },
      {
        "id": 13,
        "question": "Why is random \"Jitter\" added to exponential backoff delays during network retry policies?",
        "options": [
          "To encrypt the network payload",
          "To prevent the \"Thundering Herd\" problem where thousands of clients retry simultaneously, overwhelming a recovering server",
          "To reduce JavaScript CPU consumption",
          "To bypass browser CORS validation"
        ],
        "correctAnswer": 1,
        "explanation": "Jitter spreads retry requests across random intervals, desynchronizing client retries and preventing spikes on backend services.",
        "topic": "Resilient Networking"
      },
      {
        "id": 14,
        "question": "What is Inflight Request Deduplication in asynchronous client architecture?",
        "options": [
          "Deleting duplicate records in LocalStorage",
          "Sharing a single active network Promise across concurrent callers requesting the same resource, preventing duplicate network hits",
          "Canceling all prior network requests",
          "Compressing JSON payloads with gzip"
        ],
        "correctAnswer": 1,
        "explanation": "Inflight deduplication caches active promises while in transit, so concurrent calls for the same key await the same network request.",
        "topic": "Async Architecture"
      },
      {
        "id": 15,
        "question": "What is the primary advantage of `IntersectionObserver` over traditional `window.addEventListener('scroll')` listeners for lazy loading?",
        "options": [
          "IntersectionObserver runs synchronously on the main thread",
          "IntersectionObserver calculates intersections asynchronously and off-screen without causing continuous layout reflows",
          "IntersectionObserver can only be used on SVG elements",
          "IntersectionObserver replaces the DOM tree"
        ],
        "correctAnswer": 1,
        "explanation": "`IntersectionObserver` offloads visibility calculations to the browser engine off the main thread, avoiding main-thread scroll jank.",
        "topic": "Web APIs"
      },
      {
        "id": 16,
        "question": "How do Web Workers communicate data with the main JavaScript execution thread?",
        "options": [
          "By reading and writing shared global variables directly",
          "Via message passing using `postMessage()` and `onmessage` with structured cloning",
          "Through synchronous DOM mutations",
          "Using cookie synchronization"
        ],
        "correctAnswer": 1,
        "explanation": "Web Workers do not share memory; they communicate exclusively via asynchronous message passing (`postMessage`), where data is serialized via Structured Clone.",
        "topic": "Web Workers"
      },
      {
        "id": 17,
        "question": "What causes \"Layout Thrashing\" (Forced Synchronous Layout) in browser performance profiles?",
        "options": [
          "Loading multiple Google Fonts simultaneously",
          "Interleaving DOM style writes with geometry reads (e.g. offsetHeight), forcing the browser to recalculate layout multiple times per frame",
          "Using flexbox instead of CSS Grid",
          "Using Web Workers for image rendering"
        ],
        "correctAnswer": 1,
        "explanation": "Writing to the DOM invalidates layout; immediately reading a geometry property forces synchronous reflow before the JavaScript turn finishes.",
        "topic": "Performance Optimization"
      },
      {
        "id": 18,
        "question": "What is the primary mechanism of Virtual Scrolling (Virtual Lists) for datasets with 50,000+ records?",
        "options": [
          "Rendering all 50,000 rows as transparent elements",
          "Rendering only the visible rows in the viewport plus a small buffer, dynamically replacing row contents as the container scrolls",
          "Converting the array to an SVG graphic",
          "Storing the list in Web Workers"
        ],
        "correctAnswer": 1,
        "explanation": "Virtual scrolling mounts only the ~20-30 rows currently visible, keeping DOM node counts constant regardless of dataset scale.",
        "topic": "Virtual Scrolling"
      },
      {
        "id": 19,
        "question": "What type of Cross-Site Scripting (XSS) vulnerability occurs purely in client-side script when reading from a source like `location.search` and writing directly to `element.innerHTML`?",
        "options": [
          "Stored XSS",
          "DOM-based XSS",
          "Reflected Server XSS",
          "Blind SQL Injection"
        ],
        "correctAnswer": 1,
        "explanation": "DOM-based XSS occurs when client JavaScript reads untrusted data from a DOM source and injects it into a DOM sink without sanitization.",
        "topic": "Security & XSS"
      },
      {
        "id": 20,
        "question": "How do you defend against Prototype Pollution attacks when recursively merging untrusted JSON objects?",
        "options": [
          "Convert all numbers to strings",
          "Explicitly block or ignore keys named `__proto__`, `constructor`, and `prototype` during property traversal",
          "Use JSON.stringify twice",
          "Disable strict mode"
        ],
        "correctAnswer": 1,
        "explanation": "Rejecting `__proto__`, `constructor`, and `prototype` prevents attackers from injecting attributes into `Object.prototype`.",
        "topic": "Security & Prototype Pollution"
      },
      {
        "id": 21,
        "question": "What does the Content Security Policy (CSP) directive `script-src 'self' https://trusted.cdn.com` enforce in the browser?",
        "options": [
          "Allows scripts from any domain as long as they are minified",
          "Disables JavaScript completely on the page",
          "Permits script execution ONLY from the origin domain and the specified trusted CDN, blocking inline `<script>` tags and unauthorized external scripts",
          "Forces all network requests to use HTTP/3"
        ],
        "correctAnswer": 2,
        "explanation": "CSP `script-src` restricts allowable script sources, neutralizing injected inline XSS payloads and untrusted external scripts.",
        "topic": "Content Security Policy"
      },
      {
        "id": 22,
        "question": "Which design pattern provides a centralized event bus allowing publishers to emit events without knowing who the subscriber callbacks are?",
        "options": [
          "Decorator Pattern",
          "Singleton Pattern",
          "Publish/Subscribe (Pub-Sub) Pattern",
          "Factory Pattern"
        ],
        "correctAnswer": 2,
        "explanation": "The Pub-Sub pattern completely decouples message publishers from subscribers via a centralized event broker.",
        "topic": "Design Patterns"
      },
      {
        "id": 23,
        "question": "What is the primary purpose of the Strategy Design Pattern?",
        "options": [
          "Ensure only one instance of a class exists across an application",
          "Convert synchronous functions to async generators",
          "Define a family of interchangeable algorithms and encapsulate each behind a common interface, allowing them to be swapped dynamically at runtime",
          "Prevent object cloning"
        ],
        "correctAnswer": 2,
        "explanation": "The Strategy pattern encapsulates alternative algorithms (e.g. payment processors, sorting rules) behind a shared polymorphic method.",
        "topic": "Design Patterns"
      },
      {
        "id": 24,
        "question": "In software architecture, what is the core guarantee provided by a Finite State Machine (FSM)?",
        "options": [
          "An application can be in multiple conflicting states simultaneously",
          "All state transitions are asynchronous",
          "An entity is in exactly one state at a time, and transitions between states must follow strict, predefined rules",
          "State data is stored in the cloud automatically"
        ],
        "correctAnswer": 2,
        "explanation": "A Finite State Machine guarantees deterministic state transitions, eliminating impossible intermediate states (e.g. \"playing\" while \"disconnected\").",
        "topic": "State Machines"
      },
      {
        "id": 25,
        "question": "In automated testing, what is the fundamental difference between a Mock and a Stub?",
        "options": [
          "Mocks are for unit tests; stubs are for E2E tests",
          "A stub records calls; a mock only returns null",
          "A stub provides canned return data to satisfy a test; a mock additionally verifies that specific expected method calls and arguments occurred",
          "Mocks can only be used in Node.js"
        ],
        "correctAnswer": 2,
        "explanation": "Stubs provide state/canned responses for test execution; mocks assert behavioral interactions (e.g. verifying `emailService.send()` was invoked with exact parameters).",
        "topic": "Testing & Test Doubles"
      },
      {
        "id": 26,
        "question": "How do you enable TypeScript-powered type checking inside a pure vanilla `.js` file without compiling with `tsc`?",
        "options": [
          "Include `\"use strict\";` at the top of the file",
          "Rename the file extension to `.jsx`",
          "Place `// @ts-check` as the first line of the file and document types using JSDoc comments",
          "Install Babel in the browser"
        ],
        "correctAnswer": 2,
        "explanation": "Adding `// @ts-check` instructs VS Code / IDEs to validate types defined in JSDoc annotations directly inside JavaScript files.",
        "topic": "Type Safety & JSDoc"
      },
      {
        "id": 27,
        "question": "What does the Shadow DOM in Web Components provide?",
        "options": [
          "3D WebGL rendering capabilities",
          "Faster LocalStorage read/write access",
          "Encapsulated, scoped DOM subtrees and CSS styles that do not leak into or get overridden by the outer host document",
          "Automatic translation for internationalization"
        ],
        "correctAnswer": 2,
        "explanation": "Shadow DOM encapsulates internal styling and markup inside a component boundary, preventing global CSS collisions.",
        "topic": "Web Components"
      },
      {
        "id": 28,
        "question": "Which Web Component lifecycle method is invoked automatically whenever the element is detached from the live document DOM?",
        "options": [
          "componentWillUnmount()",
          "adoptedCallback()",
          "disconnectedCallback()",
          "cleanupCallback()"
        ],
        "correctAnswer": 2,
        "explanation": "`disconnectedCallback()` is called when a custom element is removed from the DOM, providing the hook for tearing down event listeners and timers.",
        "topic": "Web Components"
      },
      {
        "id": 29,
        "question": "What is Tree Shaking in modern frontend build tools like Vite and Rollup?",
        "options": [
          "An algorithm that compresses image assets",
          "Automatic conversion of CSS Grid to tables",
          "Static analysis that detects and removes unused exported JavaScript code from production bundles",
          "A tool that tests all DOM buttons automatically"
        ],
        "correctAnswer": 2,
        "explanation": "Tree shaking leverages static ES module imports (`import`/`export`) to eliminate unused code paths from production bundles.",
        "topic": "Tooling & Bundlers"
      },
      {
        "id": 30,
        "question": "Why should sensitive production API keys never be prefixed with `VITE_` in frontend `.env` files?",
        "options": [
          "Because Vite will throw a compilation error",
          "Because .env files only work on Linux servers",
          "Because any variable prefixed with `VITE_` is baked directly into client-accessible production JavaScript bundles during build",
          "Because Vite only supports integer variables"
        ],
        "correctAnswer": 2,
        "explanation": "Frontend build tools inline `VITE_` environment variables into public client code; secrets must remain on secure backend servers.",
        "topic": "Tooling & Security"
      },
      {
        "id": 31,
        "question": "What is the primary purpose of a Source Map (`.js.map`) in production deployments?",
        "options": [
          "It speeds up JavaScript execution in V8",
          "It enforces HTTPS connections",
          "It provides offline database caching",
          "It maps minified, bundled production code back to original source files and line numbers for error logging and debugging"
        ],
        "correctAnswer": 3,
        "explanation": "Source maps reconstruct original source code and line numbers from minified bundles, making production error logs readable.",
        "topic": "Tooling & Debugging"
      },
      {
        "id": 32,
        "question": "In Conventional Commits standards, what commit type represents fixing a bug in production software?",
        "options": [
          "feat:",
          "refactor:",
          "chore:",
          "fix:"
        ],
        "correctAnswer": 3,
        "explanation": "`fix:` denotes a bug patch in Conventional Commits.",
        "topic": "Git Workflows"
      },
      {
        "id": 33,
        "question": "What is the primary architectural benefit of Unidirectional Data Flow (e.g. Store -> State -> View -> Dispatch -> Reducer -> Store)?",
        "options": [
          "It allows components to mutate global state arbitrarily from anywhere",
          "It runs all JavaScript on the GPU",
          "It eliminates the need for async functions",
          "It centralizes state transitions through pure functions, making application state predictable, reproducible, and easy to debug"
        ],
        "correctAnswer": 3,
        "explanation": "Unidirectional data flow ensures state transitions happen strictly through dispatched actions and pure reducers, eliminating state desynchronization.",
        "topic": "Architecture & State"
      },
      {
        "id": 34,
        "question": "How do you handle automatic token refresh in an enterprise API client without logging the user out during an active session?",
        "options": [
          "Force a full page reload on every 401 error",
          "Disable HTTP authentication headers",
          "Store the user password in LocalStorage and re-login silently",
          "Intercept 401 Unauthorized responses, pause pending requests, exchange the refresh token for a new access token, and replay original requests"
        ],
        "correctAnswer": 3,
        "explanation": "Intercepting 401 responses, obtaining a new access token via a secure refresh endpoint, and transparently replaying original requests ensures zero disruption to user sessions.",
        "topic": "Enterprise Architecture"
      },
      {
        "id": 35,
        "question": "What is Interaction to Next Paint (INP) measuring in Google's Core Web Vitals?",
        "options": [
          "The time taken to download the HTML document",
          "The server response time (TTFB)",
          "The total number of images on a page",
          "The page responsiveness to all user interactions (clicks, taps, keypresses) throughout the entire page lifecycle"
        ],
        "correctAnswer": 3,
        "explanation": "INP assesses overall page responsiveness by measuring the latency of all user interactions (clicks, taps, typing) until the next frame is painted.",
        "topic": "Core Web Vitals"
      },
      {
        "id": 36,
        "question": "Which static method on `Object` returns all own property descriptors (writable, enumerable, configurable, value) for an object?",
        "options": [
          "Object.describe()",
          "Object.inspect()",
          "Object.getProperties()",
          "Object.getOwnPropertyDescriptors()"
        ],
        "correctAnswer": 3,
        "explanation": "`Object.getOwnPropertyDescriptors(obj)` returns an object containing descriptor records for all own properties of the target.",
        "topic": "Property Descriptors"
      },
      {
        "id": 37,
        "question": "What is the purpose of `AbortSignal.timeout(ms)` introduced in recent ECMAScript specifications?",
        "options": [
          "It pauses the entire browser for `ms` milliseconds",
          "It delays Promise execution by `ms`",
          "It clears all active timers in window",
          "It returns an AbortSignal that automatically triggers an abort after the specified millisecond timeout"
        ],
        "correctAnswer": 3,
        "explanation": "`AbortSignal.timeout(ms)` creates an AbortSignal that automatically aborts with a `TimeoutError` after `ms` milliseconds.",
        "topic": "AbortController"
      },
      {
        "id": 38,
        "question": "What does the `ResizeObserver` API allow developers to monitor?",
        "options": [
          "Only browser window resize events",
          "Image file download size",
          "Screen orientation changes on mobile devices",
          "Changes to the content or border-box dimensions of specific individual DOM elements"
        ],
        "correctAnswer": 3,
        "explanation": "`ResizeObserver` monitors box model dimension changes of individual target elements, enabling responsive container queries.",
        "topic": "Web APIs"
      },
      {
        "id": 39,
        "question": "Why should floating-point currency calculations in JavaScript (e.g. `$19.99 + $0.05`) be handled with care?",
        "options": [
          "Because JavaScript does not support numbers with decimals",
          "Because currency symbols corrupt number variables",
          "Because numbers over 100 throw RangeError",
          "Because IEEE 754 binary floating-point representation can produce precision artifacts like `0.1 + 0.2 === 0.30000000000000004`"
        ],
        "correctAnswer": 3,
        "explanation": "Binary floating-point arithmetic (IEEE 754) produces precision artifacts in base-10 decimals; financial software converts amounts to integer cents or uses decimal rounding.",
        "topic": "JavaScript Precision"
      },
      {
        "id": 40,
        "question": "What is the final requirement for an application to be marked as Production Approved on the Skillora AI platform?",
        "options": [
          "Deploying to a live cloud provider with zero tests",
          "Removing all async functions",
          "Writing at least 1,000 lines of CSS",
          "Passing all source-level curriculum audits, TypeScript typecheck, production build, and comprehensive Playwright automated test suites"
        ],
        "correctAnswer": 3,
        "explanation": "Production approval requires 100% compliance across source-level audits, TypeScript typecheck (0 errors), successful production build, and all comprehensive E2E test executions.",
        "topic": "Production Readiness"
      }
    ]
  }
];

export const JAVASCRIPT_ADVANCED_FINAL_ASSESSMENT = JAVASCRIPT_ADVANCED_TASKS.find((t) => t.id === 'js-adv-assessment')!.questions!;
