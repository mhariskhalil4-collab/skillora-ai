import { Task, QuizQuestion } from '../../types/roadmap.types';

export const PYTHON_INTERMEDIATE_FINAL_ASSESSMENT: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Advanced Functions and Functional Thinking',
    question: 'What does *args collect?',
    options: ['keyword arguments', 'positional arguments', 'modules', 'exceptions'],
    correctAnswer: 1,
    explanation: '*args captures additional variable positional arguments passed into a function as a tuple.'
  },
  {
    id: 2,
    topic: 'Advanced Functions and Functional Thinking',
    question: 'What does **kwargs collect?',
    options: ['positional arguments', 'keyword arguments', 'list values', 'generators'],
    correctAnswer: 1,
    explanation: '**kwargs captures additional keyword arguments passed into a function as a dictionary.'
  },
  {
    id: 3,
    topic: 'Iterators, Generators and Decorators',
    question: 'Which keyword creates generator values?',
    options: ['return', 'yield', 'generate', 'iterator'],
    correctAnswer: 1,
    explanation: 'The yield keyword turns a standard function into a generator that produces values lazily on demand.'
  },
  {
    id: 4,
    topic: 'Iterators, Generators and Decorators',
    question: 'What exception signals iterator exhaustion?',
    options: ['ValueError', 'StopIteration', 'IteratorError', 'EndError'],
    correctAnswer: 1,
    explanation: 'When an iterator has no more items to return via next(), Python raises a StopIteration exception.'
  },
  {
    id: 5,
    topic: 'Iterators, Generators and Decorators',
    question: 'What does a decorator wrap?',
    options: ['function/class behavior', 'database', 'file', 'variable type'],
    correctAnswer: 0,
    explanation: 'Decorators wrap functions or classes to extend or modify their behavior without changing source implementation.'
  },
  {
    id: 6,
    topic: 'Deep OOP and Class Design',
    question: 'Which method initializes an object?',
    options: ['__start__', '__create__', '__init__', 'init_object'],
    correctAnswer: 2,
    explanation: '__init__ is the initializer method called automatically when an object instance is instantiated.'
  },
  {
    id: 7,
    topic: 'Deep OOP and Class Design',
    question: 'Which function accesses parent implementation?',
    options: ['parent()', 'super()', 'base()', 'inherit()'],
    correctAnswer: 1,
    explanation: 'The super() built-in function returns a proxy object delegating method calls to a parent or sibling class in the MRO.'
  },
  {
    id: 8,
    topic: 'JSON, CSV, Virtual Environments and Testing',
    question: 'Which module handles JSON?',
    options: ['json', 'data', 'jsonlib', 'object'],
    correctAnswer: 0,
    explanation: 'Python standard library module "json" provides encoding and decoding methods for JSON data.'
  },
  {
    id: 9,
    topic: 'JSON, CSV, Virtual Environments and Testing',
    question: 'Which module handles CSV?',
    options: ['csv', 'table', 'spreadsheet', 'rows'],
    correctAnswer: 0,
    explanation: 'The built-in "csv" module provides readers and writers for comma-separated tabular data.'
  },
  {
    id: 10,
    topic: 'JSON, CSV, Virtual Environments and Testing',
    question: 'Which command creates a virtual environment?',
    options: ['python make-env', 'python -m venv', 'pip environment', 'python environment'],
    correctAnswer: 1,
    explanation: 'Executing "python -m venv <dir>" creates a self-contained isolated Python virtual environment.'
  },
  {
    id: 11,
    topic: 'JSON, CSV, Virtual Environments and Testing',
    question: 'What does pip primarily manage?',
    options: ['Python packages', 'databases', 'operating systems', 'HTML'],
    correctAnswer: 0,
    explanation: 'pip is the package installer and manager for external Python packages and dependencies from PyPI.'
  },
  {
    id: 12,
    topic: 'HTTP and Web APIs',
    question: 'Which HTTP method normally retrieves data?',
    options: ['POST', 'GET', 'DELETE', 'PATCH'],
    correctAnswer: 1,
    explanation: 'The HTTP GET method requests a representation of the specified resource without side effects.'
  },
  {
    id: 13,
    topic: 'HTTP and Web APIs',
    question: 'What does response.json() provide?',
    options: ['parsed JSON data', 'HTML', 'SQL', 'binary executable'],
    correctAnswer: 0,
    explanation: 'response.json() in requests or HTTP libraries deserializes the response body JSON payload into Python objects.'
  },
  {
    id: 14,
    topic: 'HTTP and Web APIs',
    question: 'What does raise_for_status() help detect?',
    options: ['HTTP error responses', 'indentation', 'SQL syntax', 'memory leaks'],
    correctAnswer: 0,
    explanation: 'raise_for_status() automatically raises an HTTPError exception if the HTTP response indicates a 4xx or 5xx error.'
  },
  {
    id: 15,
    topic: 'SQLite and SQL',
    question: 'Which SQLite module is built into Python?',
    options: ['sqlite3', 'sqlite', 'database3', 'sqlpython'],
    correctAnswer: 0,
    explanation: 'The standard library module sqlite3 provides a compliant DB-API 2.0 interface for SQLite databases.'
  },
  {
    id: 16,
    topic: 'SQLite and SQL',
    question: 'What is a primary key used for?',
    options: ['uniquely identifying rows', 'formatting text', 'encrypting passwords', 'sorting files'],
    correctAnswer: 0,
    explanation: 'A primary key constraint uniquely identifies each record in a database table.'
  },
  {
    id: 17,
    topic: 'SQLite and SQL',
    question: 'Why use parameterized SQL?',
    options: ['safer query construction', 'faster printing', 'better indentation', 'automatic testing'],
    correctAnswer: 0,
    explanation: 'Parameterized queries separate SQL structure from user parameters, preventing SQL injection vulnerabilities.'
  },
  {
    id: 18,
    topic: 'Logging and Project Architecture',
    question: 'Which logging level is most severe?',
    options: ['DEBUG', 'INFO', 'WARNING', 'CRITICAL'],
    correctAnswer: 3,
    explanation: 'CRITICAL is the highest and most severe logging level, indicating serious application-breaking errors.'
  },
  {
    id: 19,
    topic: 'Logging and Project Architecture',
    question: 'What is separation of concerns?',
    options: ['separating unrelated responsibilities', 'putting everything in one function', 'removing classes', 'avoiding files'],
    correctAnswer: 0,
    explanation: 'Separation of concerns is a design principle separating distinct responsibilities and features into independent modules.'
  },
  {
    id: 20,
    topic: 'Type Hints, Dataclasses and Advanced OOP',
    question: 'What are dataclasses useful for?',
    options: ['reducing boilerplate for data-focused classes', 'replacing Python', 'automatically creating SQL databases', 'encrypting files'],
    correctAnswer: 0,
    explanation: '@dataclass automatically generates __init__, __repr__, and other boilerplate methods from typed attribute declarations.'
  },
  {
    id: 21,
    topic: 'Type Hints, Dataclasses and Advanced OOP',
    question: 'What does Optional communicate?',
    options: ['a value may be absent', 'function is optional', 'module is optional', 'class is abstract'],
    correctAnswer: 0,
    explanation: 'Optional[T] (or T | None) specifies that a variable or return value may either be of type T or None.'
  },
  {
    id: 22,
    topic: 'Type Hints, Dataclasses and Advanced OOP',
    question: 'What is composition?',
    options: ['building objects using other objects', 'deleting objects', 'copying strings', 'sorting lists'],
    correctAnswer: 0,
    explanation: 'Composition is a design principle where complex objects are assembled using instances of other objects ("has-a" relationship).'
  },
  {
    id: 23,
    topic: 'Concurrency',
    question: 'What is the GIL relevant to?',
    options: ['Python thread execution', 'JSON syntax', 'SQL tables', 'HTTP codes'],
    correctAnswer: 0,
    explanation: 'The Global Interpreter Lock (GIL) synchronizes thread execution so only one thread executes Python bytecode at a time.'
  },
  {
    id: 24,
    topic: 'Concurrency',
    question: 'Which module supports asynchronous programming?',
    options: ['asyncio', 'asyncpyfile', 'threadingonly', 'concurrentfile'],
    correctAnswer: 0,
    explanation: 'The built-in asyncio module provides event loops, coroutines, and tasks for asynchronous concurrent I/O.'
  },
  {
    id: 25,
    topic: 'Concurrency',
    question: 'What does await do?',
    options: ['waits for an awaitable in async code', 'creates a thread', 'creates a database', 'stops Python'],
    correctAnswer: 0,
    explanation: 'The await expression yields execution back to the event loop until the awaitable object completes.'
  },
  {
    id: 26,
    topic: 'Quality, Exceptions, Mocking and Packaging',
    question: 'What does unittest.mock help with?',
    options: ['replacing dependencies during tests', 'creating databases', 'compiling Python', 'generating HTML'],
    correctAnswer: 0,
    explanation: 'unittest.mock allows developers to replace parts of the system under test with mock objects to assert behavior.'
  },
  {
    id: 27,
    topic: 'Quality, Exceptions, Mocking and Packaging',
    question: 'Why is eval dangerous with untrusted input?',
    options: ['it can execute arbitrary Python expressions', 'it only prints data', 'it cannot execute code', 'it only reads files'],
    correctAnswer: 0,
    explanation: 'eval() dynamically evaluates input strings as Python code, allowing attackers to execute arbitrary malicious commands.'
  },
  {
    id: 28,
    topic: 'Quality, Exceptions, Mocking and Packaging',
    question: 'What are custom exceptions useful for?',
    options: ['structured domain-specific error handling', 'styling', 'HTML', 'creating threads'],
    correctAnswer: 0,
    explanation: 'Custom exception classes allow applications to communicate domain-specific errors with clarity and precision.'
  },
  {
    id: 29,
    topic: 'Quality, Exceptions, Mocking and Packaging',
    question: 'What file can define modern Python project metadata?',
    options: ['pyproject.toml', 'python.config', 'project.py', 'setup.txt'],
    correctAnswer: 0,
    explanation: 'pyproject.toml is the standardized configuration file (PEP 518/621) defining build requirements and packaging metadata.'
  },
  {
    id: 30,
    topic: 'AI Learning Platform API Client',
    question: 'What should a professional API client include?',
    options: ['validation, timeouts, error handling and authentication handling', 'only print()', 'no exception handling', 'hardcoded secrets'],
    correctAnswer: 0,
    explanation: 'A production API client requires structured request validation, timeouts, graceful error translation, and secure auth.'
  }
];

export const PYTHON_INTERMEDIATE_TASKS: Task[] = [
  // ==========================================
  // MODULE 1: Advanced Functions, Closures & Comprehensions
  // ==========================================
  {
    id: 'py-int-01',
    orderIndex: 1,
    title: 'Module 1: Advanced Functions & Comprehensions',
    description: 'Master closures, closure cells (__closure__), *args, **kwargs forwarding, keyword-only arguments, lambdas, custom sort keys, and nested comprehensions.',
    status: 'in_progress',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-fn-adv-01', title: 'Python Functional Programming HOWTO', type: 'documentation', url: 'https://docs.python.org/3/howto/functional.html' }
    ],
    lessonContent: {
      overview: '### The Functional Paradigm in Modern Python\n\nIn Python, functions are **first-class citizens** and full heap objects (`PyFunctionObject`). They can be dynamically instantiated, assigned to variables, passed into higher-order functions, and enclosed within nested scopes to form **closures**.\n\n### How Python Closures Work Under the Hood\n\nWhen an inner function references a variable from an enclosing outer function, CPython creates a specialized **Cell Object** (`cell_contents`).\n1. Even after the outer function finishes executing and its stack frame is popped off the call stack, the enclosed variables remain alive on the heap inside the inner function\'s `__closure__` tuple!\n2. This enables persistent encapsulated state without requiring explicit object-oriented classes.',
      analogyHero: 'Think of a closure like a backpack that a traveler (the inner function) packs before leaving home (the outer function). Even after the traveler leaves the hometown behind, they still carry everything packed in their backpack wherever they travel.',
      objectives: [
        'Understand closure memory mechanics and inspect closure cells via `fn.__closure__`.',
        'Master keyword-only arguments (`*`) and positional-only parameters (`/`).',
        'Write high-performance multi-key sorting routines with lambda functions.',
        'Construct nested list, set, and dictionary comprehensions with conditional filtering.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: 'def func(pos_only, /, standard, *, kw_only="default"): ...\ndef closure_factory(x):\n    def inner(y): return x + y\n    return inner\nsorted(items, key=lambda x: (x["score"], -x["id"]))\n{k: v.upper() for k, v in data.items() if v}',
      sections: [
        {
          id: 'sec-int-1-1',
          title: 'Closures, Advanced Parameter Syntax & Nested Comprehensions',
          difficulty: 'Intermediate',
          analogy: 'Positional-only (`/`) and keyword-only (`*`) parameter dividers are like traffic lanes on a highway: they strictly direct how arguments enter the function to prevent confusion at call sites.',
          content: '### 1. Modern Parameter Delimiters (`/` and `*`)\n- **Positional-Only (`/`):** Parameters before `/` must be passed positionally and cannot be passed by name (PEP 570).\n- **Keyword-Only (`*`):** Parameters after `*` must be passed with explicit keyword names (PEP 3102).\n\n### 2. Multi-Key Sorting with Lambdas\nPython\'s `sorted()` accepts a `key` callable. When sorting on multiple criteria, return a tuple from the lambda: `sorted(users, key=lambda u: (-u["score"], u["name"]))` sorts score descending, then name ascending.\n\n### 3. Nested Comprehensions\nFlatten multi-dimensional structures in $O(N)$ time: `[val for row in matrix for val in row if val > 0]`.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_closures_and_cells.py',
              code: '# Inspecting Python Closures and Cell Objects\ndef make_rate_limiter(max_calls_per_minute: int):\n    call_timestamps = []  # Enclosed state\n    \n    def record_request(endpoint: str) -> bool:\n        # Accesses call_timestamps from enclosing scope\n        call_timestamps.append(endpoint)\n        print(f"Request to \'{endpoint}\' logged. Total active count: {len(call_timestamps)}")\n        return len(call_timestamps) <= max_calls_per_minute\n        \n    return record_request\n\napi_limiter = make_rate_limiter(3)\napi_limiter("/api/v1/auth")\napi_limiter("/api/v1/users")\n\n# Inspect the underlying closure cell memory structure\nprint(f"Closure Cells: {api_limiter.__closure__}")\nprint(f"Cell Contents: {api_limiter.__closure__[0].cell_contents}")',
              explanation: 'Proves how closures maintain encapsulated state in cell objects on the heap even after the outer function has returned.',
              lineByLine: [
                { line: 'def make_rate_limiter(max_calls_per_minute):', explanation: 'Outer function factory setting up closure environment.' },
                { line: 'return record_request', explanation: 'Returns the inner function object with its __closure__ binding attached.' },
                { line: 'api_limiter.__closure__[0].cell_contents', explanation: 'Inspects raw state preserved inside the closure cell on the heap.' }
              ]
            },
            {
              language: 'python',
              filename: '02_advanced_parameter_syntax.py',
              code: '# Positional-only (/), Standard, and Keyword-only (*) parameters\ndef configure_service(\n    service_name: str,       # Positional-only before /\n    /,\n    environment: str = "dev", # Standard (positional or keyword)\n    *,\n    timeout: int = 30,       # Keyword-only after *\n    enable_metrics: bool = True\n):\n    print(f"Service: {service_name} | Env: {environment} | Timeout: {timeout}s | Metrics: {enable_metrics}")\n\n# Valid calls\nconfigure_service("AuthAPI", "production", timeout=60, enable_metrics=True)\nconfigure_service("PaymentGateway", timeout=45)\n\n# Invalid: configure_service(service_name="AuthAPI") -> Raises TypeError!',
              explanation: 'Demonstrates PEP 570 positional-only and PEP 3102 keyword-only parameter boundaries.',
              lineByLine: [
                { line: 'service_name: str, /', explanation: 'Forces service_name to be passed strictly by position without parameter name.' },
                { line: '*, timeout: int = 30', explanation: 'Forces timeout and enable_metrics to be explicitly passed as named keywords.' }
              ]
            },
            {
              language: 'python',
              filename: '03_multi_key_sorting.py',
              code: '# Multi-attribute sorting and nested dictionary comprehensions\nemployees = [\n    {"name": "Sarah", "dept": "AI", "score": 95, "years": 4},\n    {"name": "Amir",  "dept": "AI", "score": 95, "years": 6},\n    {"name": "David", "dept": "Cloud", "score": 88, "years": 2},\n    {"name": "Elena", "dept": "AI", "score": 98, "years": 5}\n]\n\n# Sort by Department (asc), then Score (desc - using -score), then Experience (desc)\nranked = sorted(employees, key=lambda e: (e["dept"], -e["score"], -e["years"]))\n\nprint("=== Multi-Key Ranked Employees ===")\nfor emp in ranked:\n    print(f"{emp[\'dept\']:<7} | Score: {emp[\'score\']} | Years: {emp[\'years\']} | {emp[\'name\']}")',
              explanation: 'Demonstrates multi-key tuple sorting with ascending and descending mixed keys.',
              lineByLine: [
                { line: 'key=lambda e: (e["dept"], -e["score"], -e["years"])', explanation: 'Constructs comparison tuple resolving ties hierarchically.' }
              ]
            }
          ],
          commonMistakes: [
            'Attempting to reassign an enclosing variable without `nonlocal`: Writing `x = x + 1` inside an inner function raises `UnboundLocalError`. Use `nonlocal x` to modify enclosing state in-place.',
            'Over-complicating comprehensions: Writing 3-tier nested list comprehensions with multiple `if/else` clauses damages readability. If a comprehension spans more than 2 lines, refactor to a standard loop.'
          ],
          proTip: 'Use keyword-only parameters for boolean flags (e.g. `def run_task(name, *, dry_run=False):`) so call sites read clearly as `run_task("cleanup", dry_run=True)` rather than cryptic `run_task("cleanup", True)`.',
          miniPractice: {
            question: 'How does Python retain variables in an inner function after the outer enclosing function has finished executing?',
            options: [
              'By saving the variables to temporary files on disk',
              'By allocating `Cell Objects` in heap memory stored inside the function\'s `__closure__` attribute',
              'By promoting all inner variables to global scope',
              'By running an asynchronous thread in the background'
            ],
            correctAnswer: 1,
            explanation: 'When a function encloses outer variables, CPython allocates cell objects on the heap attached to `fn.__closure__`, keeping them alive as long as the inner function reference exists.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Configurable Exponential Moving Average Smoother',
          instructions: 'Write a closure factory `create_ema(alpha)` where $0 < \\alpha < 1$. Each time the returned inner function is called with a new numeric data point $x_t$, it computes and returns the smoothed value: $S_t = \\alpha x_t + (1 - \\alpha) S_{t-1}$. Initialize $S_0 = x_0$.',
          starterCode: 'def create_ema(alpha: float):\n    # Implement EMA closure\n    pass',
          solutionCode: 'def create_ema(alpha: float):\n    prev_smoothed = None\n    \n    def update(val: float) -> float:\n        nonlocal prev_smoothed\n        if prev_smoothed is None:\n            prev_smoothed = val\n        else:\n            prev_smoothed = (alpha * val) + ((1 - alpha) * prev_smoothed)\n        return prev_smoothed\n        \n    return update\n\nema = create_ema(alpha=0.5)\nprint(ema(100.0)) # 100.0\nprint(ema(110.0)) # 105.0\nprint(ema(120.0)) # 112.5'
        }
      ],
      keyTakeaways: [
        'Closures capture free variables from enclosing scopes into heap-allocated `cell` objects.',
        'Use `nonlocal` to reassign enclosing scope variables inside inner functions.',
        'Use `/` for positional-only and `*` for keyword-only parameters.',
        'Tuple-based lambda keys enable multi-attribute sorting with mixed ascending/descending order.'
      ],
      summary: 'You have mastered Python closures, cell internals, modern parameter bounds, multi-key sorting, and nested comprehensions.'
    }
  },

  // ==========================================
  // MODULE 2: Modules, Packages & Virtual Environments
  // ==========================================
  {
    id: 'py-int-02',
    orderIndex: 2,
    title: 'Module 2: Modules, Packages & Virtual Environments',
    description: 'Master module import mechanics, sys.path resolution, __init__.py, __all__, relative vs absolute imports, and venv isolation.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-pkg-01', title: 'Python Modules and Packages Documentation', type: 'documentation', url: 'https://docs.python.org/3/tutorial/modules.html' }
    ],
    lessonContent: {
      overview: '### Architecture of Code Organization in Python\n\nAs applications grow beyond single files, code must be organized into **Modules** (single `.py` files) and **Packages** (directories containing an `__init__.py` file or namespace packages).\n\n### How CPython Resolves `import` Statements (`sys.path` & `sys.modules`)\n\nWhen you execute `import my_module`, CPython executes the following resolution pipeline:\n1. **`sys.modules` Cache Lookup:** CPython checks if the module is already cached in `sys.modules`. If cached, it returns the existing module object instantly.\n2. **Built-in Modules:** Checks standard built-in C extensions (e.g. `sys`, `math`, `time`).\n3. **`sys.path` Traversal:** Searches directories listed in `sys.path` in order:\n   - Current working directory / directory containing the input script.\n   - `PYTHONPATH` environment variable directories.\n   - Standard library directories.\n   - Virtual environment `site-packages` directory.\n4. **Execution & Compilation:** Reads source `.py`, compiles to bytecode `.pyc` in `__pycache__`, executes the module top-level code, and binds the namespace.',
      analogyHero: 'Think of `sys.modules` like a librarian\'s desk: before walking into the book aisles (sys.path), the librarian checks if the book is already sitting right on the desk. If so, they hand it to you instantly without searching.',
      objectives: [
        'Understand module import resolution mechanics and the `sys.modules` caching mechanism.',
        'Control public package API surfaces using `__all__` in `__init__.py`.',
        'Master absolute imports vs explicit relative imports (`.`, `..`).',
        'Create and manage isolated environments using `venv` and `pip` dependency locks.'
      ],
      estimatedTime: '30 mins',
      syntaxGuide: 'python -m venv .venv              # Create isolated virtual environment\nsource .venv/bin/activate         # Activate (Linux/macOS)\n.venv\\Scripts\\activate            # Activate (Windows)\npip freeze > requirements.txt     # Lock dependencies\npip install -r requirements.txt   # Reproduce environment',
      sections: [
        {
          id: 'sec-int-2-1',
          title: 'Import Mechanics, Namespace Packages & Virtual Isolation',
          difficulty: 'Intermediate',
          analogy: 'Installing Python packages globally is like putting every tool from 50 different construction projects into a single bucket—eventually version conflicts cause catastrophic failures. A virtual environment gives each project its own isolated toolbox.',
          content: '### 1. The Power of `__all__` in `__init__.py`\nWhen users run `from my_package import *`, Python only exports identifiers explicitly listed in `__all__ = ["Client", "connect"]`. This prevents internal private helper functions from polluting the consumer\'s namespace.\n\n### 2. Relative Imports (`.` and `..`)\nUsed inside packages:\n- `from .models import User` (same directory)\n- `from ..utils.helpers import sanitize` (parent directory)\n\n### 3. Circular Import Prevention\nCircular imports occur when Module A imports Module B, and Module B imports Module A at top-level before definitions are completed. Solve by refactoring shared models or importing inside functions.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_sys_path_inspection.py',
              code: 'import sys\nimport os\n\n# Inspecting Python module resolution path\nprint("=== Python Import Search Path (sys.path) ===")\nfor idx, path_dir in enumerate(sys.path, start=1):\n    print(f"[{idx}] {path_dir}")\n\n# Dynamically adding custom plugin directory to sys.path\nplugin_dir = os.path.abspath("./custom_plugins")\nif plugin_dir not in sys.path:\n    sys.path.insert(0, plugin_dir)\n    print(f"\\nAdded top-priority plugin directory: {plugin_dir}")',
              explanation: 'Demonstrates how CPython searches for imported modules and shows dynamic `sys.path` extension.',
              lineByLine: [
                { line: 'for idx, path_dir in enumerate(sys.path):', explanation: 'Iterates through directories in the order Python searches them during imports.' },
                { line: 'sys.path.insert(0, plugin_dir)', explanation: 'Injects custom path at index 0 for highest import priority.' }
              ]
            },
            {
              language: 'python',
              filename: '02_init_api_contract.py',
              code: '# Inside my_analytics/__init__.py\n# Exposing clean public API and hiding internal helper functions\n\n__all__ = ["AnalyticsEngine", "calculate_metrics"]\n\nclass AnalyticsEngine:\n    def __init__(self, app_id: str):\n        self.app_id = app_id\n        \ndef calculate_metrics(events: list) -> dict:\n    return {"count": len(events), "status": "computed"}\n\n# Internal helper not included in __all__\ndef _internal_hash_cipher(data: str) -> str:\n    return f"cipher_{hash(data)}"',
              explanation: 'Demonstrates defining public package API surface using `__all__`.',
              lineByLine: [
                { line: '__all__ = ["AnalyticsEngine", "calculate_metrics"]', explanation: 'Restricts wildcard imports (from my_analytics import *) to explicit public symbols.' }
              ]
            }
          ],
          commonMistakes: [
            'Naming local files the same as standard library modules: Naming a file `random.py` or `json.py` breaks `import random` because Python imports your local file instead of the standard library.',
            'Installing packages into system global Python without a virtual environment.'
          ],
          proTip: 'Always run scripts using module syntax (`python -m package.submodule`) rather than directly calling `python package/submodule.py` to ensure relative imports resolve correctly.',
          miniPractice: {
            question: 'What is the first place CPython checks when executing `import my_module`?',
            options: [
              'The `/usr/lib/python` standard directory',
              'The `sys.modules` dictionary cache in RAM to see if the module has already been loaded',
              'The local hard drive file system',
              'The Python Package Index (PyPI) over HTTP'
            ],
            correctAnswer: 1,
            explanation: 'CPython first checks the `sys.modules` cache dictionary. If the module has already been imported during the runtime session, it returns the cached module object immediately in O(1) time.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Package Manifest Validator',
          instructions: 'Write a utility function that inspects a mock package namespace dictionary and returns all public identifiers (identifiers that do NOT start with an underscore `_`).',
          starterCode: 'def get_public_symbols(namespace: dict) -> list:\n    # Return list of public identifiers\n    pass',
          solutionCode: 'def get_public_symbols(namespace: dict) -> list:\n    return [key for key in namespace.keys() if not key.startswith("_")]\n\nmock_pkg = {"User": object, "login": object, "_internal_db": object, "__version__": "1.0"}\nprint("Public API Symbols:", get_public_symbols(mock_pkg))'
        }
      ],
      keyTakeaways: [
        'CPython caches imported modules in `sys.modules` and traverses `sys.path` in order.',
        'Use `__all__` in `__init__.py` to define clean public package API boundaries.',
        'Never name local scripts the same as standard library modules (`math.py`, `random.py`).',
        'Always isolate application dependencies inside `.venv` virtual environments.'
      ],
      summary: 'You have mastered Python module resolution mechanics, package API structuring, and virtual environment isolation.'
    }
  },

  // ==========================================
  // MODULE 3: OOP Deep Dive (Inheritance & MRO)
  // ==========================================
  {
    id: 'py-int-03',
    orderIndex: 3,
    title: 'Module 3: OOP Deep Dive',
    description: 'Master inheritance, method overriding, super(), multiple inheritance, C3 Superclass Linearization (MRO), abstract base classes (ABC), and encapsulation.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-oop-adv-01', title: 'Python C3 Linearization (MRO) Specification', type: 'documentation', url: 'https://docs.python.org/3/howto/mro.html' }
    ],
    lessonContent: {
      overview: '### Advanced Object-Oriented Architecture\n\nIntermediate Python software design demands mastery of **Inheritance hierarchies**, **Polymorphism**, **Encapsulation boundaries**, and **Abstract Base Classes (ABCs)**.\n\n### The C3 Superclass Linearization Algorithm (MRO)\n\nIn languages with multiple inheritance, the "Diamond Problem" occurs when class `D` inherits from both `B` and `C`, which both inherit from `A`. Python solves this deterministically using **C3 Superclass Linearization**:\n1. It computes a monotonic, linear order of precedence for attribute and method resolution called the **Method Resolution Order (MRO)**.\n2. You can inspect any class\'s resolution order at runtime using `ClassName.__mro__` or `ClassName.mro()`.\n3. `super()` does NOT simply call the parent class—it calls the **next class in the MRO chain**, enabling safe cooperative multiple inheritance!',
      analogyHero: 'Think of C3 Linearization like a chain-of-command escalation chart in an emergency response system: when an incident occurs, the system knows the exact sequence of specialists to consult in order without creating circular loops.',
      objectives: [
        'Master single and multiple inheritance with cooperative `super()` chaining.',
        'Understand C3 Linearization and inspect class Method Resolution Order (`__mro__`).',
        'Enforce software interface contracts using `abc.ABC` and `@abstractmethod`.',
        'Implement property descriptors with `@property`, `@setter`, and validation logic.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: 'class Child(ParentA, ParentB):\n    def __init__(self, *args):\n        super().__init__(*args)  # Calls next in MRO\n\nfrom abc import ABC, abstractmethod\nclass Interface(ABC):\n    @abstractmethod\n    def process(self): pass\n\nClassName.mro()  # Inspect MRO list',
      sections: [
        {
          id: 'sec-int-3-1',
          title: 'Multiple Inheritance, MRO & Abstract Base Classes',
          difficulty: 'Intermediate',
          analogy: 'An Abstract Base Class is like a building code regulation: it does not build the house itself, but it strictly forbids any builder from opening the building until fire alarms and emergency exits are implemented.',
          content: '### 1. Cooperative `super()` in Diamond Inheritance\nIn Python, calling `super().method()` navigates through the C3 MRO graph. Each class passes arguments up the chain, ensuring no ancestor method is executed twice.\n\n### 2. Abstract Base Classes (`abc.ABC`)\nInheriting from `ABC` with `@abstractmethod` prevents direct instantiation of incomplete classes. If a child class fails to implement any abstract method, Python raises `TypeError: Can\'t instantiate abstract class with abstract method` at object creation time.\n\n### 3. Encapsulated Managed Properties (`@property`)\nUse `@property` to create getter/setter methods that behave like regular attributes while running validation logic behind the scenes.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_mro_diamond_problem.py',
              code: '# C3 Linearization & Cooperative Multiple Inheritance\nclass Root:\n    def execute(self):\n        print("-> Root.execute()")\n\nclass LoggerMixin(Root):\n    def execute(self):\n        print("-> LoggerMixin: Logging event")\n        super().execute()  # Delegates to next class in MRO\n\nclass SecurityMixin(Root):\n    def execute(self):\n        print("-> SecurityMixin: Verifying auth token")\n        super().execute()  # Delegates to next class in MRO\n\nclass DataService(LoggerMixin, SecurityMixin):\n    def execute(self):\n        print("-> DataService: Beginning transaction")\n        super().execute()\n\nservice = DataService()\nservice.execute()\n\nprint("\\n=== Method Resolution Order (MRO) ===")\nfor cls in DataService.__mro__:\n    print(f"  {cls.__name__}")',
              explanation: 'Demonstrates how cooperative `super()` executes all mixins across the diamond inheritance hierarchy without duplicates.',
              lineByLine: [
                { line: 'class DataService(LoggerMixin, SecurityMixin):', explanation: 'Defines multiple inheritance order.' },
                { line: 'super().execute()', explanation: 'Follows C3 MRO: DataService -> LoggerMixin -> SecurityMixin -> Root -> object.' }
              ]
            },
            {
              language: 'python',
              filename: '02_abstract_base_class_interface.py',
              code: 'from abc import ABC, abstractmethod\n\n# Defining a strict interface contract with ABC\nclass CloudStorageProvider(ABC):\n    @abstractmethod\n    def upload_file(self, file_path: str, destination_key: str) -> bool:\n        """Must be implemented by concrete storage adapters."""\n        pass\n        \n    @abstractmethod\n    def delete_file(self, destination_key: str) -> bool:\n        pass\n\nclass GoogleCloudStorage(CloudStorageProvider):\n    def __init__(self, bucket_name: str):\n        self.bucket = bucket_name\n        \n    def upload_file(self, file_path: str, destination_key: str) -> bool:\n        print(f"Uploading {file_path} to gs://{self.bucket}/{destination_key}")\n        return True\n        \n    def delete_file(self, destination_key: str) -> bool:\n        print(f"Deleting gs://{self.bucket}/{destination_key}")\n        return True\n\ngcs = GoogleCloudStorage("skillora-artifacts")\ngcs.upload_file("report.pdf", "reports/2026/report.pdf")',
              explanation: 'Uses `abc.ABC` and `@abstractmethod` to enforce strict interface contracts across infrastructure providers.',
              lineByLine: [
                { line: 'class CloudStorageProvider(ABC):', explanation: 'Declares Abstract Base Class that cannot be instantiated directly.' },
                { line: '@abstractmethod', explanation: 'Forces child classes to implement method before instantiation is permitted.' }
              ]
            },
            {
              language: 'python',
              filename: '03_property_getters_setters.py',
              code: '# Encapsulation with @property and @setter validation\nclass BankUser:\n    def __init__(self, username: str, credit_score: int):\n        self.username = username\n        self._credit_score = credit_score  # Protected attribute convention\n        \n    @property\n    def credit_score(self) -> int:\n        return self._credit_score\n        \n    @credit_score.setter\n    def credit_score(self, new_score: int):\n        if not (300 <= new_score <= 850):\n            raise ValueError(f"Credit score {new_score} out of valid range [300, 850]!")\n        print(f"Updated credit score for {self.username}: {new_score}")\n        self._credit_score = new_score\n\nuser = BankUser("Amir", 750)\nuser.credit_score = 780  # Triggers setter method with validation\nprint(f"Active Score: {user.credit_score}")',
              explanation: 'Demonstrates property descriptors providing clean attribute syntax with internal validation.',
              lineByLine: [
                { line: '@property def credit_score(self):', explanation: 'Defines getter method accessed like an attribute.' },
                { line: '@credit_score.setter', explanation: 'Defines setter validating bounds before updating internal state.' }
              ]
            }
          ],
          commonMistakes: [
            'Directly calling `ParentClass.__init__(self)` instead of `super().__init__()`: This breaks cooperative multiple inheritance and causes base classes to run multiple times in diamond hierarchies.',
            'Attempting to instantiate an ABC without implementing all abstract methods: Raises immediate `TypeError`.'
          ],
          proTip: 'Prefer composition over deep inheritance trees. Use inheritance for "is-a" relationships and mixins for discrete behaviors.',
          miniPractice: {
            question: 'Which algorithm does Python use to determine Method Resolution Order (MRO) in multiple inheritance?',
            options: [
              'Breadth-First Search (BFS)',
              'C3 Superclass Linearization algorithm',
              'Depth-First Search (DFS)',
              'Random priority election'
            ],
            correctAnswer: 1,
            explanation: 'Python uses C3 Superclass Linearization to compute a deterministic, monotonic Method Resolution Order across complex inheritance hierarchies.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Validated Product Inventory Model',
          instructions: 'Create a `Product` class with properties `name`, `price`, and `quantity`. Use `@property` and `@setter` to ensure `price >= 0` and `quantity >= 0` upon assignment, raising `ValueError` otherwise.',
          starterCode: 'class Product:\n    # Implement properties with validation\n    pass',
          solutionCode: 'class Product:\n    def __init__(self, name: str, price: float, quantity: int):\n        self.name = name\n        self.price = price\n        self.quantity = quantity\n        \n    @property\n    def price(self) -> float:\n        return self._price\n        \n    @price.setter\n    def price(self, val: float):\n        if val < 0:\n            raise ValueError("Price cannot be negative.")\n        self._price = val\n        \n    @property\n    def quantity(self) -> int:\n        return self._quantity\n        \n    @quantity.setter\n    def quantity(self, val: int):\n        if val < 0:\n            raise ValueError("Quantity cannot be negative.")\n        self._quantity = val\n\np = Product("Notebook", 4.99, 10)\np.quantity = 15\nprint(f"Product: {p.name} | Price: ${p.price:.2f} | Stock: {p.quantity}")'
        }
      ],
      keyTakeaways: [
        'C3 Linearization guarantees deterministic, loop-free Method Resolution Order (`__mro__`).',
        'Always use cooperative `super()` to ensure all mixins in multiple inheritance run properly.',
        'Use `abc.ABC` and `@abstractmethod` to enforce strict interface compliance.',
        '`@property` descriptors encapsulate state validation behind natural attribute syntax.'
      ],
      summary: 'You have mastered multiple inheritance, C3 MRO linearization, cooperative super(), abstract base classes, and property descriptors.'
    }
  },

  // ==========================================
  // MODULE 4: Magic (Dunder) Methods
  // ==========================================
  {
    id: 'py-int-04',
    orderIndex: 4,
    title: 'Module 4: Magic (Dunder) Methods',
    description: 'Master double-underscore magic methods: __str__, __repr__, __len__, __getitem__, __setitem__, __call__, __eq__, and operator overloading.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-dunder-01', title: 'Python Data Model & Special Method Names', type: 'documentation', url: 'https://docs.python.org/3/reference/datamodel.html#special-method-names' }
    ],
    lessonContent: {
      overview: '### The Python Data Model & Operator Overloading\n\nIn Python, special methods with double underscores ("dunder methods") allow your custom classes to integrate directly with Python\'s built-in syntax and runtime operations.\n\n### How Python Dispatches Special Methods Under the Hood\n\nWhen you use built-in language operators, CPython translates them into specific dunder method invocations:\n- `len(obj)` → `obj.__len__()`\n- `a + b` → `a.__add__(b)`\n- `obj[key]` → `obj.__getitem__(key)`\n- `obj[key] = val` → `obj.__setitem__(key, val)`\n- `obj()` (callable invocation) → `obj.__call__()`\n- `a == b` → `a.__eq__(b)`\n- `hash(obj)` → `obj.__hash__()`\n\nBy implementing the appropriate dunder methods, your custom objects feel like native standard library types!',
      analogyHero: 'Think of dunder methods like universal USB-C ports on a computer: by adopting the standardized USB-C protocol (dunder methods), your custom device can plug into monitors, chargers, and keyboards (Python syntax) seamlessly.',
      objectives: [
        'Master object representations with `__str__` and `__repr__`.',
        'Implement container emulation with `__len__`, `__getitem__`, and `__contains__`.',
        'Overload mathematical operators (`__add__`, `__sub__`, `__mul__`, `__eq__`).',
        'Make class instances callable using `__call__` for function-like stateful objects.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: 'class Vector:\n    def __init__(self, x, y): self.x, self.y = x, y\n    def __add__(self, o): return Vector(self.x + o.x, self.y + o.y)\n    def __len__(self): return 2\n    def __getitem__(self, idx): return (self.x, self.y)[idx]\n    def __call__(self): return (self.x**2 + self.y**2)**0.5',
      sections: [
        {
          id: 'sec-int-4-1',
          title: 'Container Emulation, Operator Overloading & Callable Objects',
          difficulty: 'Intermediate',
          analogy: 'Implementing `__call__` is like giving a physical machine an "Execute" button: whenever someone presses the machine (calls it with parentheses), it performs its configured action with internal memory.',
          content: '### 1. Vector Mathematical Overloading (`+`, `==`)\nImplementing `__add__` and `__eq__` allows custom mathematical classes (matrices, vectors, currencies) to support intuitive arithmetic expressions (`v1 + v2`).\n\n### 2. Container Emulation (`__getitem__`, `__len__`)\nImplementing `__len__` and `__getitem__` allows custom collections to support indexing (`dataset[0]`), slicing (`dataset[1:5]`), and standard `for item in dataset:` iteration automatically!\n\n### 3. Callable Instances with `__call__`\nMaking an instance callable allows objects to behave like stateful functions or memoized pipeline stages.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_vector_operator_overloading.py',
              code: '# Complete 2D Vector with Operator Overloading\nclass Vector2D:\n    def __init__(self, x: float, y: float):\n        self.x = x\n        self.y = y\n        \n    def __add__(self, other: "Vector2D") -> "Vector2D":\n        if not isinstance(other, Vector2D):\n            return NotImplemented\n        return Vector2D(self.x + other.x, self.y + other.y)\n        \n    def __mul__(self, scalar: float) -> "Vector2D":\n        return Vector2D(self.x * scalar, self.y * scalar)\n        \n    def __eq__(self, other: object) -> bool:\n        if not isinstance(other, Vector2D):\n            return False\n        return self.x == other.x and self.y == other.y\n        \n    def __repr__(self) -> str:\n        return f"Vector2D(x={self.x}, y={self.y})"\n\nv1 = Vector2D(3, 4)\nv2 = Vector2D(1, 2)\nv3 = v1 + v2  # Triggers __add__\nscaled = v1 * 2 # Triggers __mul__\n\nprint(f"v1 + v2 = {v3}")\nprint(f"v1 * 2  = {scaled}")\nprint(f"v1 == Vector2D(3, 4): {v1 == Vector2D(3, 4)}")',
              explanation: 'Demonstrates overloading `+`, `*`, and `==` for custom mathematical vector objects.',
              lineByLine: [
                { line: 'def __add__(self, other):', explanation: 'Intercepts the + operator and returns a new Vector2D instance.' },
                { line: 'return NotImplemented', explanation: 'Allows Python to fallback to reverse operators (__radd__) if types mismatch.' }
              ]
            },
            {
              language: 'python',
              filename: '02_custom_dataset_container.py',
              code: '# Container Emulation: Custom Paginated Dataset\nclass DatasetBatch:\n    def __init__(self, records: list):\n        self._records = list(records)\n        \n    def __len__(self) -> int:\n        return len(self._records)\n        \n    def __getitem__(self, index):\n        # Supports both single index and slice objects!\n        return self._records[index]\n        \n    def __contains__(self, item) -> bool:\n        return item in self._records\n\nbatch = DatasetBatch(["record_01", "record_02", "record_03", "record_04"])\nprint(f"Batch Length: {len(batch)}")\nprint(f"Item at [1]:  {batch[1]}")\nprint(f"Slice [1:3]:  {batch[1:3]}")\nprint(f"Has record_02? {\'record_02\' in batch}")',
              explanation: 'Emulates Python sequence collections using `__len__`, `__getitem__`, and `__contains__`.',
              lineByLine: [
                { line: 'def __getitem__(self, index):', explanation: 'Enables indexing and slicing syntax on custom objects.' }
              ]
            },
            {
              language: 'python',
              filename: '03_callable_instances.py',
              code: '# Stateful Callable Class with __call__\nclass ExecutionTimer:\n    def __init__(self, threshold_seconds: float):\n        self.threshold = threshold_seconds\n        self.call_count = 0\n        \n    def __call__(self, duration: float) -> str:\n        self.call_count += 1\n        status = "CRITICAL: Slow" if duration > self.threshold else "NORMAL"\n        return f"Check #{self.call_count}: {duration:.2f}s -> {status}"\n\nmonitor = ExecutionTimer(threshold_seconds=1.5)\nprint(monitor(0.45))  # Invokes __call__\nprint(monitor(2.10))  # Invokes __call__\nprint(monitor(1.20))  # Invokes __call__',
              explanation: 'Shows how `__call__` turns object instances into stateful callable functions.',
              lineByLine: [
                { line: 'def __call__(self, duration: float):', explanation: 'Defines the action executed when instance is called with ().' }
              ]
            }
          ],
          commonMistakes: [
            'Returning types other than `int` from `__len__`: Python requires `__len__` to return a non-negative integer. Returning floats or negatives raises `TypeError`.',
            'Forgetting `__repr__` when defining `__str__`: If only `__str__` is defined, inspecting a list of objects `[obj1, obj2]` still outputs ugly `<__main__.Obj object at 0x...>` memory addresses. Always implement `__repr__` first!'
          ],
          proTip: 'If `__repr__` is implemented but `__str__` is not, Python will automatically fallback to `__repr__` for string conversions.',
          miniPractice: {
            question: 'Which magic method enables an object instance to be called directly with parentheses (e.g. `my_object("data")`)?',
            options: [
              '`__invoke__`',
              '`__call__`',
              '`__exec__`',
              '`__run__`'
            ],
            correctAnswer: 1,
            explanation: 'Implementing `__call__(self, *args, **kwargs)` makes object instances callable like functions.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Money Value Object with Currency Conversion',
          instructions: 'Implement a `Money` class with `amount` (float) and `currency` (str, e.g. "USD"). Implement `__add__` (raises `ValueError` if currencies do not match), `__repr__`, and `__eq__`.',
          starterCode: 'class Money:\n    # Implement Money value object\n    pass',
          solutionCode: 'class Money:\n    def __init__(self, amount: float, currency: str = "USD"):\n        self.amount = round(float(amount), 2)\n        self.currency = currency.upper()\n        \n    def __add__(self, other: "Money") -> "Money":\n        if self.currency != other.currency:\n            raise ValueError(f"Cannot add {self.currency} to {other.currency} without conversion.")\n        return Money(self.amount + other.amount, self.currency)\n        \n    def __eq__(self, other: object) -> bool:\n        if not isinstance(other, Money):\n            return False\n        return self.amount == other.amount and self.currency == other.currency\n        \n    def __repr__(self) -> str:\n        return f"Money({self.amount:.2f} {self.currency})"\n\nm1 = Money(100.50, "USD")\nm2 = Money(49.50, "USD")\nprint("Total Money:", m1 + m2)'
        }
      ],
      keyTakeaways: [
        'Dunder methods hook your custom classes directly into Python operators and built-in functions.',
        'Implement `__repr__` for developer debugging representations and `__str__` for user-friendly text.',
        'Implement `__len__` and `__getitem__` to create custom sequence containers.',
        'Use `__call__` to build stateful callable objects.'
      ],
      summary: 'You have mastered magic methods, operator overloading, container emulation, and callable object patterns.'
    }
  },

  // ==========================================
  // MODULE 5: Iterators & Generators
  // ==========================================
  {
    id: 'py-int-05',
    orderIndex: 5,
    title: 'Module 5: Iterators & Generators',
    description: 'Master Iterator Protocol (__iter__, __next__), generator functions (yield), generator expressions, memory profiling, and streaming large datasets.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-gen-01', title: 'Python Generators & Iterators Tutorial', type: 'documentation', url: 'https://docs.python.org/3/howto/functional.html#generators' }
    ],
    lessonContent: {
      overview: '### Memory-Efficient Data Streaming with Generators\n\nIn modern data engineering and AI pipelines, datasets frequently exceed available physical RAM (e.g. 50GB CSV log files). Loading entire files into lists with `f.readlines()` causes `MemoryError` and system crashes. Generators solve this by streaming data **lazily on demand in $O(1)$ memory**.\n\n### How the Python Generator State Machine Works Under the Hood\n\nWhen a function contains the `yield` keyword:\n1. Invoking the function does NOT execute the code—it instantiates a **`PyGenObject` (Generator Iterator)**.\n2. When `next(gen)` is called, CPython resumes the function\'s execution frame at the exact line of the previous `yield`.\n3. It executes until reaching the next `yield value`, saves all local variables in its stack frame, and suspends execution.\n4. When the function returns or finishes, CPython automatically raises `StopIteration` to terminate the iterator loop.',
      analogyHero: 'Think of a list like buying a 500-gallon water tank and storing all the water in your living room (huge space). A generator is like a water faucet: you turn the tap (next) whenever you need a glass of water, and zero water is stored in your room.',
      objectives: [
        'Understand the Iterator Protocol (`__iter__` and `__next__`) and `StopIteration`.',
        'Write custom Generator Functions using `yield` and `yield from`.',
        'Compare memory footprints: List Comprehensions `[...]` vs Generator Expressions `(...)`.',
        'Build multi-stage streaming data pipelines processing infinite or massive streams.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: 'def number_generator():\n    for i in range(10):\n        yield i * 2\n\ngen_expr = (x**2 for x in huge_dataset) # Lazy O(1) memory\nnext(gen_expr) # Retrieve next item\nyield from sub_generator() # Delegate to child generator',
      sections: [
        {
          id: 'sec-int-5-1',
          title: 'The Iterator Protocol, Yield & Streaming Pipelines',
          difficulty: 'Intermediate',
          analogy: '`yield from` is like delegating an entire subcontractor team: instead of manually asking subcontractor A for each tool one-by-one, you connect their output stream directly to the main production line.',
          content: '### 1. The Iterator Protocol\nAny object that implements `__iter__()` (returns self) and `__next__()` (returns next item or raises `StopIteration`) satisfies the Iterator Protocol.\n\n### 2. Generator Expressions vs List Comprehensions\n- List Comprehension `[x for x in range(10_000_000)]`: Eagerly allocates ~80MB of RAM immediately.\n- Generator Expression `(x for x in range(10_000_000))`: Allocates ~128 bytes of RAM regardless of dataset size!\n\n### 3. Generator Pipeline Architecture\nChain multiple generators together (e.g. `read_lines -> filter_errors -> parse_json -> aggregate`) to process petabytes of data with near-zero memory footprint.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_custom_iterator_class.py',
              code: '# Implementing the formal Iterator Protocol from scratch\nclass CountdownIterator:\n    def __init__(self, start: int):\n        self.current = start\n        \n    def __iter__(self):\n        return self\n        \n    def __next__(self) -> int:\n        if self.current <= 0:\n            raise StopIteration\n        val = self.current\n        self.current -= 1\n        return val\n\ncountdown = CountdownIterator(start=3)\nfor num in countdown:\n    print(f"T-Minus: {num}")\nprint("🚀 Blast Off!")',
              explanation: 'Demonstrates manual implementation of `__iter__` and `__next__` raising `StopIteration`.',
              lineByLine: [
                { line: 'def __iter__(self): return self', explanation: 'Returns iterator object itself.' },
                { line: 'raise StopIteration', explanation: 'Signals loop termination to Python runtime.' }
              ]
            },
            {
              language: 'python',
              filename: '02_memory_profiling_generators.py',
              code: 'import sys\n\n# Memory footprint comparison: List vs Generator\nN = 1_000_000\n\n# Eager list comprehension\neager_list = [x * 2 for x in range(N)]\nlist_bytes = sys.getsizeof(eager_list)\n\n# Lazy generator expression\nlazy_gen = (x * 2 for x in range(N))\ngen_bytes = sys.getsizeof(lazy_gen)\n\nprint(f"List memory usage ({N:,} items): {list_bytes / 1024 / 1024:.2f} MB")\nprint(f"Generator memory usage:           {gen_bytes} Bytes")\nprint(f"Memory Savings: {list_bytes / gen_bytes:.1f}x reduction!")',
              explanation: 'Proves the massive memory savings of lazy generator expressions over eager lists.',
              lineByLine: [
                { line: 'lazy_gen = (x * 2 for x in range(N))', explanation: 'Creates generator iterator consuming ~128 bytes of memory.' }
              ]
            },
            {
              language: 'python',
              filename: '03_streaming_pipeline.py',
              code: '# Multi-stage streaming data pipeline using chained generators\ndef stream_simulated_logs(total_lines: int):\n    for i in range(1, total_lines + 1):\n        level = "ERROR" if i % 5 == 0 else "INFO"\n        yield f"2026-09-11 12:00:{i:02d} [{level}] Latency: {i * 12}ms"\n\ndef filter_by_level(log_stream, target_level: str):\n    for log in log_stream:\n        if f"[{target_level}]" in log:\n            yield log\n\ndef parse_latency(filtered_stream):\n    for log in filtered_stream:\n        latency_str = log.split("Latency: ")[1].replace("ms", "")\n        yield int(latency_str)\n\n# Chain pipeline together\nraw_logs = stream_simulated_logs(20)\nerror_logs = filter_by_level(raw_logs, target_level="ERROR")\nlatencies = parse_latency(error_logs)\n\nprint("Extracted Error Latencies:", list(latencies))',
              explanation: 'Builds a composable, memory-efficient data processing pipeline using chained generator stages.',
              lineByLine: [
                { line: 'error_logs = filter_by_level(raw_logs, "ERROR")', explanation: 'Feeds output of one generator directly into the input of the next.' }
              ]
            }
          ],
          commonMistakes: [
            'Attempting to reuse an exhausted generator: Once a generator raises `StopIteration`, it is empty. Trying to loop over it a second time yields 0 items. You must instantiate a new generator.',
            'Using `len(my_generator)`: Generators compute values lazily and do not know their total length in advance. Calling `len()` raises `TypeError`.'
          ],
          proTip: 'Use `itertools.islice(gen, 10)` to safely inspect the first 10 items of an infinite or massive generator stream.',
          miniPractice: {
            question: 'What happens when a Python generator function containing `yield` is initially called?',
            options: [
              'It immediately executes the entire function body and returns a list',
              'It creates and returns a generator iterator object without executing the function body until `next()` is called',
              'It raises a StopIteration error',
              'It launches an asynchronous thread'
            ],
            correctAnswer: 1,
            explanation: 'Calling a generator function does not execute its body; it returns a suspended generator iterator object waiting for `next()` calls.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Infinite Fibonacci Generator with Stop Threshold',
          instructions: 'Write a generator function `fibonacci_stream()` that yields numbers in the Fibonacci sequence infinitely (0, 1, 1, 2, 3, 5, 8...). Use `itertools.islice` to take the first 10 numbers.',
          starterCode: 'def fibonacci_stream():\n    # Implement infinite generator\n    pass',
          solutionCode: 'import itertools\n\ndef fibonacci_stream():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfirst_10 = list(itertools.islice(fibonacci_stream(), 10))\nprint("First 10 Fibonacci Numbers:", first_10)'
        }
      ],
      keyTakeaways: [
        'Generators stream data on demand in $O(1)$ memory without allocating large buffers.',
        'The Iterator Protocol requires `__iter__()` and `__next__()` with `StopIteration` signaling completion.',
        'Use generator expressions `(x for x in data)` instead of eager lists when data is consumed once.',
        'Generators can be chained into composable, high-throughput streaming pipelines.'
      ],
      summary: 'You have mastered the Iterator Protocol, generator state suspension with yield, memory profiling, and streaming pipeline architecture.'
    }
  },

  // ==========================================
  // MODULE 6: Decorators & Higher-Order Functions
  // ==========================================
  {
    id: 'py-int-06',
    orderIndex: 6,
    title: 'Module 6: Decorators & Higher-Order Functions',
    description: 'Master function decorators, @functools.wraps metadata preservation, parameterized decorators, class decorators, and caching/timing decorators.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-dec-01', title: 'Python Decorator Primer & functools.wraps', type: 'documentation', url: 'https://docs.python.org/3/library/functools.html#functools.wraps' }
    ],
    lessonContent: {
      overview: '### Aspect-Oriented Programming with Python Decorators\n\nDecorators are a metaprogramming mechanism that allows you to modify, extend, or wrap the behavior of functions and classes **without altering their source code**. Common applications include authentication checks, logging, performance profiling, rate limiting, and result caching.\n\n### The Syntactic Sugar `@decorator`\n\nWriting:\n```python\n@timing_decorator\ndef compute_data():\n    pass\n```\nIs completely equivalent to:\n```python\ncompute_data = timing_decorator(compute_data)\n```\n\n### Preserving Function Introspection (`@functools.wraps`)\nWhen you wrap a function, the wrapper function replaces the original function object. Without `@functools.wraps(fn)`, the function\'s docstring (`__doc__`), name (`__name__`), and parameter signatures are overwritten by the generic wrapper! Always use `@functools.wraps` to preserve critical metadata.',
      analogyHero: 'Think of a decorator like gift-wrapping a box: the original gift (your function) is inside. The wrapper adds a bow and greeting card (logging/timing) around the outside, but when unwrapped, the gift functions exactly as intended.',
      objectives: [
        'Understand function wrapping mechanics and closure scopes in decorators.',
        'Use `@functools.wraps` to prevent loss of docstrings, function names, and signatures.',
        'Write Parameterized Decorators with 3-tier nested factory closures.',
        'Implement production utilities: Execution timer, retry handlers, and memoization caches.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: 'import functools\n\ndef my_decorator(fn):\n    @functools.wraps(fn)\n    def wrapper(*args, **kwargs):\n        # Pre-execution logic\n        res = fn(*args, **kwargs)\n        # Post-execution logic\n        return res\n    return wrapper',
      sections: [
        {
          id: 'sec-int-6-1',
          title: 'Metadata Preservation, Parameterized Decorators & Caching',
          difficulty: 'Intermediate',
          analogy: 'A parameterized decorator is like a customized security badge scanner: you configure the security clearance level at the gate (`@require_role("Admin")`), and the scanner checks visitors accordingly.',
          content: '### 1. Anatomy of a Robust Decorator\nEvery production decorator must:\n1. Accept the target callable `fn`.\n2. Apply `@functools.wraps(fn)` to the inner wrapper.\n3. Accept `*args` and `**kwargs` to forward any arguments.\n4. Return the result of `fn(*args, **kwargs)`.\n\n### 2. Parameterized Decorators (3-Tier Factory)\nTo pass arguments to a decorator (e.g. `@retry(max_attempts=3, delay=1.0)`):\n- Tier 1: Decorator Factory function accepting configuration parameters.\n- Tier 2: Actual decorator function accepting `fn`.\n- Tier 3: Inner wrapper executing the call.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_execution_timer_decorator.py',
              code: 'import time\nimport functools\n\ndef measure_execution_time(fn):\n    @functools.wraps(fn)\n    def wrapper(*args, **kwargs):\n        t0 = time.perf_counter()\n        result = fn(*args, **kwargs)\n        elapsed = time.perf_counter() - t0\n        print(f"⏱️ [METRIC] \'{fn.__name__}\' executed in {elapsed * 1000:.3f} ms")\n        return result\n    return wrapper\n\n@measure_execution_time\ndef compute_prime_sum(limit: int) -> int:\n    """Calculates sum of numbers up to limit."""\n    return sum(x for x in range(limit) if x % 2 != 0)\n\nprint("Result:", compute_prime_sum(100_000))\nprint("Function Name Preserved:", compute_prime_sum.__name__)\nprint("Docstring Preserved:    ", compute_prime_sum.__doc__)',
              explanation: 'Demonstrates a timing decorator using `@functools.wraps` to preserve function introspection metadata.',
              lineByLine: [
                { line: '@functools.wraps(fn)', explanation: 'Copies __name__, __doc__, and annotations from fn to wrapper.' },
                { line: 'res = fn(*args, **kwargs)', explanation: 'Executes wrapped function forwarding all positional and keyword inputs.' }
              ]
            },
            {
              language: 'python',
              filename: '02_parameterized_retry_decorator.py',
              code: 'import functools\nimport time\n\n# Parameterized Decorator: 3-Tier Nested Factory\ndef retry(max_attempts: int = 3, backoff_sec: float = 0.5):\n    def decorator(fn):\n        @functools.wraps(fn)\n        def wrapper(*args, **kwargs):\n            attempts = 0\n            while attempts < max_attempts:\n                attempts += 1\n                try:\n                    return fn(*args, **kwargs)\n                except Exception as err:\n                    print(f"⚠️ \'{fn.__name__}\' attempt {attempts}/{max_attempts} failed: {err}")\n                    if attempts >= max_attempts:\n                        raise\n                    time.sleep(backoff_sec * attempts)\n        return wrapper\n    return decorator\n\n@retry(max_attempts=3, backoff_sec=0.1)\ndef fetch_remote_data(endpoint: str):\n    if endpoint == "bad_url":\n        raise ConnectionError("502 Bad Gateway")\n    return {"status": "success", "data": [1, 2, 3]}\n\nprint("Success Call:", fetch_remote_data("valid_api"))',
              explanation: 'Implements a parameterized retry decorator with exponential backoff.',
              lineByLine: [
                { line: 'def retry(max_attempts=3, backoff_sec=0.5):', explanation: 'Outer factory accepting decorator configuration parameters.' },
                { line: 'def decorator(fn):', explanation: 'Middle function receiving target callable.' }
              ]
            }
          ],
          commonMistakes: [
            'Forgetting `@functools.wraps(fn)`: Causes decorated functions to lose their name, docstring, and signature, breaking automated documentation generators like Sphinx and API frameworks like FastAPI.',
            'Forgetting to return the inner function from the decorator: Returning `None` causes the decorated function name to become `None`!'
          ],
          proTip: 'Use `functools.lru_cache(maxsize=128)` for instant memoization of pure functions without writing custom caching boilerplate.',
          miniPractice: {
            question: 'Why must `@functools.wraps(fn)` be applied to the inner wrapper of a decorator?',
            options: [
              'It forces the function to execute in parallel',
              'It preserves the original function\'s name, docstring, and parameter metadata',
              'It catches all runtime exceptions automatically',
              'It converts the function to a generator'
            ],
            correctAnswer: 1,
            explanation: '`functools.wraps` copies original introspection metadata (`__name__`, `__doc__`, `__annotations__`) to the wrapper, preventing metadata erasure.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Authorization Guard Decorator',
          instructions: 'Write a decorator factory `@require_role(allowed_role)` that checks if `current_user_role` passed in `**kwargs` matches `allowed_role`. If not, raise `PermissionError("Unauthorized access")`.',
          starterCode: 'def require_role(allowed_role: str):\n    # Implement role-checking decorator\n    pass',
          solutionCode: 'import functools\n\ndef require_role(allowed_role: str):\n    def decorator(fn):\n        @functools.wraps(fn)\n        def wrapper(*args, **kwargs):\n            user_role = kwargs.get("user_role")\n            if user_role != allowed_role:\n                raise PermissionError(f"Access Denied: Requires role \'{allowed_role}\', got \'{user_role}\'.")\n            return fn(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@require_role("Admin")\ndef delete_database(*, user_role: str):\n    return "Database purged successfully."\n\nprint(delete_database(user_role="Admin"))'
        }
      ],
      keyTakeaways: [
        'Decorators wrap and extend function behaviors using closures and higher-order functions.',
        'Always use `@functools.wraps(fn)` to preserve function names, docstrings, and signatures.',
        'Parameterized decorators use a 3-tier nested architecture: Factory -> Decorator -> Wrapper.',
        'Standard library decorators like `@lru_cache` provide high-performance memoization.'
      ],
      summary: 'You have mastered function decorators, metadata preservation, parameterized decorators, and production profiling/caching patterns.'
    }
  },

  // ==========================================
  // MODULE 7: Context Managers & Resource Management
  // ==========================================
  {
    id: 'py-int-07',
    orderIndex: 7,
    title: 'Module 7: Context Managers & Resource Management',
    description: 'Master the Context Manager Protocol (__enter__, __exit__), exception suppression, contextlib.contextmanager generator helper, and database connection locks.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-ctx-01', title: 'Python contextlib & Context Manager Protocol', type: 'documentation', url: 'https://docs.python.org/3/library/contextlib.html' }
    ],
    lessonContent: {
      overview: '### Deterministic Resource Management in Python\n\nProduction software regularly interacts with finite operating system and network resources: file descriptors, database connections, socket streams, thread mutexes, and temporary directories. Failing to release resources causes memory leaks, deadlocks, and system crashes.\n\n### The Context Manager Protocol (`__enter__` and `__exit__`)\n\nWhen a `with ContextObject() as target:` block executes:\n1. CPython calls `__enter__()` on the context object. The return value is assigned to `target`.\n2. Code inside the `with` block executes.\n3. Upon exiting the block—whether normally, via `return`, or due to an unhandled exception—CPython **guarantees invocation of `__exit__(exc_type, exc_val, exc_tb)`**.\n4. If `__exit__` returns `True`, Python **suppresses the active exception** and resumes normal execution!',
      analogyHero: 'Think of a context manager like renting bowling shoes at an alley: when you enter (__enter__), they hand you shoes. When you leave (__exit__), whether you had fun or got injured, the clerk takes the shoes back and cleans them before you walk out.',
      objectives: [
        'Master class-based Context Managers implementing `__enter__` and `__exit__`.',
        'Understand exception handling and suppression in `__exit__` (returning `True`).',
        'Write lightweight generator-based context managers using `@contextlib.contextmanager`.',
        'Manage real-world resources: Timing blocks, database transaction commits/rollbacks, and temporary directories.'
      ],
      estimatedTime: '30 mins',
      syntaxGuide: 'class CustomContext:\n    def __enter__(self): return resource\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        # Teardown logic\n        return True # Suppress exception if desired\n\nfrom contextlib import contextmanager\n@contextmanager\ndef managed_resource():\n    # Setup\n    yield resource\n    # Teardown',
      sections: [
        {
          id: 'sec-int-7-1',
          title: 'Class-Based Contexts, Exception Suppression & contextlib',
          difficulty: 'Intermediate',
          analogy: 'A database transaction context manager is like a shopping cart: you put items in the cart. If you make it through the checkout without errors, it commits the purchase. If your card is declined (exception), the cart rolls back and leaves items on the shelf.',
          content: '### 1. The Four Parameters of `__exit__`\n- `exc_type`: The exception class type (e.g. `ValueError`), or `None` if no error occurred.\n- `exc_val`: The exception instance containing the error message.\n- `exc_tb`: The traceback object for stack debugging.\n\n### 2. Exception Suppression\nIf `__exit__` handles an error and returns `True`, Python suppresses the exception. If it returns `False` or `None`, the exception bubbles up normally.\n\n### 3. Generator Contexts (`@contextmanager`)\nThe `contextlib.contextmanager` decorator turns a simple generator into a context manager: code before `yield` runs in `__enter__`, and code after `yield` inside a `finally` block runs in `__exit__`.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_database_transaction_context.py',
              code: '# Class-Based Database Transaction Context Manager\nclass DatabaseTransaction:\n    def __init__(self, connection_name: str):\n        self.conn = connection_name\n        \n    def __enter__(self):\n        print(f"🔒 [START] Beginning transaction on \'{self.conn}\'")\n        return self\n        \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if exc_type is not None:\n            print(f"❌ [ROLLBACK] Transaction aborted due to {exc_type.__name__}: {exc_val}")\n            # Return False so exception continues bubbling up\n            return False\n        print("✅ [COMMIT] Transaction successfully committed to disk.")\n        return True\n\n# 1. Success scenario\nwith DatabaseTransaction("Production_Postgres"):\n    print("  -> Inserting user record")\n    print("  -> Updating balance")\n\n# 2. Error scenario\ntry:\n    with DatabaseTransaction("Production_Postgres"):\n        print("  -> Inserting order record")\n        raise ValueError("Invalid SKU code provided")\nexcept ValueError:\n    print("Handled outside transaction block.")',
              explanation: 'Demonstrates guaranteed transaction rollback on error and commit on success.',
              lineByLine: [
                { line: 'def __enter__(self):', explanation: 'Starts database transaction and locks resources.' },
                { line: 'if exc_type is not None: rollback', explanation: 'Inspects whether an unhandled error occurred in with block.' }
              ]
            },
            {
              language: 'python',
              filename: '02_contextlib_timer.py',
              code: 'from contextlib import contextmanager\nimport time\n\n# Lightweight generator context manager using contextlib\n@contextmanager\ndef timed_block(block_label: str):\n    t0 = time.perf_counter()\n    print(f"▶️ Starting block: {block_label}")\n    try:\n        yield\n    finally:\n        elapsed = time.perf_counter() - t0\n        print(f"⏹️ Completed block \'{block_label}\' in {elapsed * 1000:.2f} ms")\n\nwith timed_block("Matrix Multiplication"):\n    # Simulate intensive computation\n    result = sum(i**2 for i in range(500_000))\n    print(f"  Computation result: {result}")',
              explanation: 'Uses `@contextmanager` to write clean, boilerplate-free execution timers.',
              lineByLine: [
                { line: '@contextmanager', explanation: 'Turns generator into ContextManager object.' },
                { line: 'yield', explanation: 'Transfers control to the with block body.' },
                { line: 'finally: elapsed = ...', explanation: 'Guarantees post-execution metric calculation.' }
              ]
            }
          ],
          commonMistakes: [
            'Forgetting `try...finally` in `@contextmanager` generators: If an error occurs in the `with` block, any teardown code after `yield` will NEVER run unless protected inside a `finally` block!',
            'Unintentionally suppressing exceptions: Returning `True` from `__exit__` silently swallows all errors. Only return `True` if you explicitly intend to suppress the exception.'
          ],
          proTip: 'Use `contextlib.suppress(FileNotFoundError)` to cleanly ignore expected exceptions without empty `try/except: pass` blocks.',
          miniPractice: {
            question: 'How can an `__exit__` method in a custom context manager suppress an exception that occurred inside the `with` block?',
            options: [
              'By returning `True` (or any truthy value)',
              'By returning `False`',
              'By raising `None`',
              'Exceptions cannot be suppressed by context managers'
            ],
            correctAnswer: 0,
            explanation: 'If `__exit__` returns `True`, Python suppresses the exception and continues normal execution after the `with` construct.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Temporary Working Directory Context Manager',
          instructions: 'Write a generator context manager `temporary_working_directory(new_path)` using `@contextmanager` that changes `os.chdir(new_path)` on entry and restores the original directory in `finally` on exit.',
          starterCode: 'from contextlib import contextmanager\nimport os\n\n@contextmanager\ndef temporary_directory(target_path: str):\n    # Implement directory switcher\n    pass',
          solutionCode: 'from contextlib import contextmanager\nimport os\n\n@contextmanager\ndef temporary_directory(target_path: str):\n    original_dir = os.getcwd()\n    try:\n        os.chdir(target_path)\n        yield\n    finally:\n        os.chdir(original_dir)\n\nprint("Current Dir:", os.getcwd())\nwith temporary_directory(".."):\n    print("Inside With Dir:", os.getcwd())\nprint("Restored Dir:", os.getcwd())'
        }
      ],
      keyTakeaways: [
        'Context managers guarantee resource teardown via `__enter__` and `__exit__`.',
        'Returning `True` from `__exit__` suppresses the active exception.',
        '`@contextlib.contextmanager` turns generators into lightweight context managers.',
        'Always wrap generator `yield` inside `try...finally` to guarantee resource cleanup.'
      ],
      summary: 'You have mastered the Context Manager Protocol, exception suppression mechanics, and contextlib generator utilities.'
    }
  },

  // ==========================================
  // MODULE 8: Advanced Error Handling & Custom Exceptions
  // ==========================================
  {
    id: 'py-int-08',
    orderIndex: 8,
    title: 'Module 8: Advanced Error Handling',
    description: 'Master custom exception hierarchies, exception chaining (raise from), traceback introspection, cleanup guarantees, and the sys.exc_info() hook.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-err-adv-01', title: 'PEP 3134 – Exception Chaining and Embedded Tracebacks', type: 'documentation', url: 'https://peps.python.org/pep-3134/' }
    ],
    lessonContent: {
      overview: '### Engineering Production Error Handling Architecture\n\nIn enterprise systems, generic error messages like `ValueError: invalid literal` are insufficient for diagnostics. Enterprise applications require structured, domain-specific exception hierarchies that encapsulate context (user IDs, request IDs, timestamps) and maintain full root-cause tracebacks.\n\n### PEP 3134: Explicit Exception Chaining (`raise ... from ...`)\n\nWhen a low-level library error (e.g. `sqlite3.OperationalError` or `socket.timeout`) occurs, catching and re-raising a higher-level domain error (e.g. `DatabaseQueryFailed`) can erase the original failure reason unless chained properly:\n- **`raise CustomError() from original_error`:** Binds the low-level cause to `__cause__`, displaying both exceptions clearly in tracebacks.\n- **`raise CustomError() from None`:** Explicitly suppresses the original exception traceback when exposing internal library details would leak security vulnerabilities.',
      analogyHero: 'Think of exception chaining like a medical diagnosis: a doctor says "The patient has acute fever (domain error) caused by an underlying viral infection (root cause)". Both the symptom and the root cause are documented in the patient chart.',
      objectives: [
        'Design cohesive, domain-specific exception inheritance hierarchies.',
        'Master explicit exception chaining with `raise ... from original_error`.',
        'Suppress internal implementation traces using `raise ... from None`.',
        'Extract traceback diagnostic metadata using `traceback` and `sys.exc_info()`.'
      ],
      estimatedTime: '30 mins',
      syntaxGuide: 'raise DomainError("Failed") from root_err  # Chained\nraise CleanError("Invalid") from None       # Suppress internal trace\nimport traceback\ntraceback.format_exc()                      # Extract stack trace as string',
      sections: [
        {
          id: 'sec-int-8-1',
          title: 'Hierarchical Domain Modeling & Traceback Chaining',
          difficulty: 'Intermediate',
          analogy: 'An exception hierarchy is like a family tree: catching a parent exception like `PaymentError` catches all child exceptions (`CardExpiredError`, `InsufficientFundsError`), allowing flexible handling at different architectural layers.',
          content: '### 1. Building Domain Exception Trees\nAlways create a base exception for your library or package:\n```python\nclass SkilloraError(Exception): pass\nclass ValidationError(SkilloraError): pass\nclass AuthenticationError(SkilloraError): pass\n```\n\n### 2. Traceback Formatting (`traceback` module)\nUse `traceback.format_exc()` to capture the full multi-line stack trace as a string for structured logging to Datadog, CloudWatch, or GCP Cloud Logging.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_enterprise_exception_hierarchy.py',
              code: '# Enterprise Domain Exception Architecture\nclass PaymentGatewayError(Exception):\n    """Root exception for all payment subsystem operations."""\n    def __init__(self, message: str, transaction_id: str = None):\n        self.transaction_id = transaction_id\n        super().__init__(f"[{transaction_id or \'N/A\'}] {message}")\n\nclass CardDeclinedError(PaymentGatewayError):\n    pass\n\nclass GatewayTimeoutError(PaymentGatewayError):\n    pass\n\ndef process_credit_card(card_number: str, amount: float):\n    if len(card_number) != 16:\n        raise CardDeclinedError("Invalid card number length.", transaction_id="TX-9041")\n    if amount > 10_000:\n        raise GatewayTimeoutError("Bank gateway unresponsive for high-value transfer.", transaction_id="TX-9042")\n\ntry:\n    process_credit_card("1234", 50.0)\nexcept PaymentGatewayError as err:\n    print(f"Caught Payment Subsystem Fault: {err}")\n    print(f"Transaction ID: {err.transaction_id}")',
              explanation: 'Demonstrates custom exception hierarchies carrying contextual metadata (transaction IDs).',
              lineByLine: [
                { line: 'class CardDeclinedError(PaymentGatewayError):', explanation: 'Inherits from root payment exception.' },
                { line: 'except PaymentGatewayError as err:', explanation: 'Catches all payment subclasses polymorphically.' }
              ]
            },
            {
              language: 'python',
              filename: '02_traceback_chaining_and_suppression.py',
              code: 'import json\n\nclass ServiceConfigError(Exception):\n    pass\n\ndef parse_config(raw_text: str):\n    try:\n        return json.loads(raw_text)\n    except json.JSONDecodeError as json_err:\n        # Explicitly chain the underlying JSON parser error\n        raise ServiceConfigError("Application startup aborted: malformed config.json") from json_err\n\ntry:\n    parse_config("INVALID JSON {")\nexcept ServiceConfigError as err:\n    print(f"Application Error: {err}")\n    print(f"Root Cause:        {err.__cause__}")',
              explanation: 'Shows PEP 3134 exception chaining preserving root causes in `__cause__`.',
              lineByLine: [
                { line: 'raise ServiceConfigError(...) from json_err', explanation: 'Chains the low-level JSONDecodeError to the high-level domain error.' }
              ]
            }
          ],
          commonMistakes: [
            'Catching `BaseException` instead of `Exception`: Intercepts `SystemExit` and `KeyboardInterrupt`, freezing scripts and preventing graceful process termination.',
            'Losing root causes by writing `raise NewError()` without `from err`.'
          ],
          proTip: 'Use `raise ... from None` when writing public API libraries to hide internal private implementation files and credentials from consumer stack traces.',
          miniPractice: {
            question: 'What is the purpose of `raise CustomError("message") from original_error` in Python 3?',
            options: [
              'It chains the original exception as the root cause in `__cause__`, preserving the complete debugging stack trace',
              'It deletes the original exception from memory',
              'It converts the exception to a string',
              'It restarts the function from line 1'
            ],
            correctAnswer: 0,
            explanation: 'PEP 3134 explicit exception chaining stores the original error in `__cause__`, allowing developers to trace the complete chain of causation.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Structured Exception Context Formatter',
          instructions: 'Create a custom exception `DatabaseQueryError` that accepts `query: str`, `params: tuple`, and `message: str`. Implement `__str__` to output a clean formatted diagnostic report.',
          starterCode: 'class DatabaseQueryError(Exception):\n    # Implement contextual error\n    pass',
          solutionCode: 'class DatabaseQueryError(Exception):\n    def __init__(self, message: str, query: str, params: tuple):\n        self.query = query\n        self.params = params\n        super().__init__(f"{message} | SQL: \'{query}\' | Params: {params}")\n\ntry:\n    raise DatabaseQueryError("Syntax error near WHERE", "SELECT * FROM users WHERE", ())\nexcept DatabaseQueryError as err:\n    print(err)'
        }
      ],
      keyTakeaways: [
        'Design modular exception hierarchies inheriting from a shared domain base class.',
        'Use `raise ... from original_err` for explicit root-cause diagnostic chaining.',
        'Use `raise ... from None` to suppress internal implementation details.',
        'Never catch bare `except:` or `BaseException`.'
      ],
      summary: 'You have mastered enterprise exception hierarchies, PEP 3134 chaining, and traceback diagnostic reporting.'
    }
  },

  // ==========================================
  // MODULE 9: Regular Expressions & Text Pattern Matching
  // ==========================================
  {
    id: 'py-int-09',
    orderIndex: 9,
    title: 'Module 9: Regular Expressions & Pattern Matching',
    description: 'Master Python re module: re.compile, search vs match, findall, sub, capture groups, named groups, lookaheads, and compilation flags.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-re-01', title: 'Python Regular Expression HOWTO', type: 'documentation', url: 'https://docs.python.org/3/howto/regex.html' }
    ],
    lessonContent: {
      overview: '### Pattern Matching & The CPython Regex Engine\n\nRegular expressions (regex) provide a declarative language for parsing, validating, and transforming complex unstructured text. Python provides the high-performance `re` module implemented in C.\n\n### `re.match()` vs `re.search()` vs `re.findall()`\n\n- **`re.match(pattern, string)`:** Checks for a match strictly at the **beginning** of the string (index 0). If character 0 does not match, it returns `None`.\n- **`re.search(pattern, string)`:** Scans the **entire string** for the first matching occurrence.\n- **`re.findall(pattern, string)`:** Returns all non-overlapping matches as a list of strings or tuples.\n- **`re.finditer(pattern, string)`:** Returns a memory-efficient iterator yielding `Match` objects.\n- **`re.compile(pattern)`:** Pre-compiles the regex pattern into a reusable bytecode object, eliminating compilation overhead in high-throughput loops.',
      analogyHero: 'Think of `re.match()` like checking the first word on the cover of a book. `re.search()` is like searching through the entire book until you find the first matching page. `re.compile()` is like bookmarking your search pattern so you never have to re-read the rules.',
      objectives: [
        'Master regex syntax: Character classes, quantifiers (`*`, `+`, `?`, `{m,n}`), and anchors (`^`, `$`).',
        'Differentiate between `re.match()`, `re.search()`, `re.findall()`, and `re.finditer()`.',
        'Use Named Capture Groups (`(?P<name>...)`) for clean data extraction.',
        'Apply compilation flags: `re.IGNORECASE`, `re.MULTILINE`, and `re.VERBOSE`.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: 'import re\npattern = re.compile(r"^(\\d{3})-(\\d{4})$") # Compiled pattern\nmatch = pattern.search("Call 555-0199")     # Search entire text\nclean = re.sub(r"\\s+", " ", text)            # Replace whitespace\nre.findall(r"[\\w\\.-]+@[\\w\\.-]+", text)     # Extract all emails',
      sections: [
        {
          id: 'sec-int-9-1',
          title: 'Compiled Patterns, Named Groups & Advanced Substitution',
          difficulty: 'Intermediate',
          analogy: 'Named capture groups are like labeled boxes on a tax form: instead of remembering that box 3 has your zip code, you extract it directly by label `match.group("zip_code")`.',
          content: '### 1. Named Capture Groups (`(?P<name>...)`)\nInstead of relying on fragile numerical group indices (`match.group(1)`), assign readable names: `r"(?P<year>\\\\d{4})-(?P<month>\\\\d{2})-(?P<day>\\\\d{2})"`. Extract via `match.groupdict()`!\n\n### 2. Non-Greedy (Lazy) Matching (`?`)\nBy default, quantifiers like `.*` are **greedy**—they match as much text as possible. Adding `?` makes them **lazy**: `.*?` matches the minimum necessary characters.\n\n### 3. `re.VERBOSE` for Readable Multi-Line Regex\nUse `re.VERBOSE` (or `re.X`) to format complex regexes across multiple lines with comments and whitespace.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_named_groups_parsing.py',
              code: 'import re\n\n# Named Capture Groups with re.VERBOSE\nlog_regex = re.compile(r"""\n    ^(?P<timestamp>\\d{4}-\\d{2}-\\d{2}\\s\\d{2}:\\d{2}:\\d{2}) # YYYY-MM-DD HH:MM:SS\n    \\s+\\[(?P<level>[A-Z]+)\\]                               # [LOG_LEVEL]\n    \\s+(?P<message>.*)$                                     # Message payload\n""", re.VERBOSE)\n\nlog_line = "2026-09-11 12:45:00 [ERROR] Database connection timed out on port 5432"\nmatch = log_regex.search(log_line)\n\nif match:\n    data = match.groupdict()\n    print(f"Timestamp: {data[\'timestamp\']}")\n    print(f"Level:     {data[\'level\']}")\n    print(f"Message:   {data[\'message\']}")',
              explanation: 'Uses verbose multi-line regex with named capture groups to parse structured log files.',
              lineByLine: [
                { line: 're.compile(..., re.VERBOSE)', explanation: 'Compiles readable pattern with inline comments and ignored whitespace.' },
                { line: 'data = match.groupdict()', explanation: 'Converts named capture groups directly to a clean Python dictionary.' }
              ]
            },
            {
              language: 'python',
              filename: '02_regex_sub_sanitization.py',
              code: 'import re\n\n# Masking Personally Identifiable Information (PII) using re.sub()\nraw_text = "Contact Alice at alice.smith@skillora.ai or Bob at bob.k@company.org."\n\n# Replace email addresses with masked token\nmasked_text = re.sub(\n    r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+",\n    "[REDACTED_EMAIL]",\n    raw_text\n)\n\nprint("Sanitized Output:", masked_text)',
              explanation: 'Uses `re.sub()` to sanitize sensitive PII data in text streams.',
              lineByLine: [
                { line: 're.sub(pattern, replacement, text)', explanation: 'Finds all pattern matches and substitutes with replacement string.' }
              ]
            }
          ],
          commonMistakes: [
            'Using `re.match()` when `re.search()` is needed: `re.match()` only checks the very start of the string. If your target is in the middle, `re.match()` returns `None`.',
            'Forgetting raw string prefix `r"..."`: Writing regular expressions without `r""` causes Python escape sequences (like `\n`, `\b`) to corrupt regex tokens.'
          ],
          proTip: 'Always compile regex patterns outside loops using `re.compile()` to avoid recompiling the pattern on every iteration.',
          miniPractice: {
            question: 'What is the key difference between `re.match()` and `re.search()` in Python?',
            options: [
              '`re.match()` checks strictly at the start of the string; `re.search()` scans the entire string for a match',
              '`re.match()` returns lists; `re.search()` returns strings',
              '`re.match()` is case-insensitive by default',
              'There is no difference'
            ],
            correctAnswer: 0,
            explanation: '`re.match()` only matches if the pattern occurs at character index 0 of the string. `re.search()` scans the entire string.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Strong Password Security Policy Validator',
          instructions: 'Write a function `validate_strong_password(pw)` that returns `True` only if the password contains: 1) At least 8 chars, 2) At least one uppercase letter, 3) At least one lowercase letter, 4) At least one digit, 5) At least one special symbol (!@#$%^&*).',
          starterCode: 'import re\n\ndef validate_strong_password(password: str) -> bool:\n    # Implement regex validation\n    pass',
          solutionCode: 'import re\n\ndef validate_strong_password(password: str) -> bool:\n    if len(password) < 8: return False\n    if not re.search(r"[A-Z]", password): return False\n    if not re.search(r"[a-z]", password): return False\n    if not re.search(r"\\d", password): return False\n    if not re.search(r"[!@#$%^&*(),.?:]", password): return False\n    return True\n\nprint("Valid:", validate_strong_password("Skillora#2026")) # True\nprint("Invalid:", validate_strong_password("weakpass"))     # False'
        }
      ],
      keyTakeaways: [
        'Always use raw strings (`r"..."`) when defining regular expressions.',
        'Use `re.search()` to find patterns anywhere and `re.match()` for start-anchored checks.',
        'Named capture groups (`(?P<name>...)`) make regex parsing robust and self-documenting.',
        'Pre-compile patterns with `re.compile()` in high-throughput workflows.'
      ],
      summary: 'You have mastered regular expressions, compiled patterns, named groups, lazy quantifiers, and text sanitization.'
    }
  },

  // ==========================================
  // MODULE 10: APIs & HTTP Client Requests
  // ==========================================
  {
    id: 'py-int-10',
    orderIndex: 10,
    title: 'Module 10: Working with APIs & HTTP Requests',
    description: 'Master RESTful HTTP communication using requests, status codes, query parameters, custom headers, bearer authentication, and retry adapters.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-http-01', title: 'Python Requests Library Documentation', type: 'documentation', url: 'https://requests.readthedocs.io/en/latest/' }
    ],
    lessonContent: {
      overview: '### Building Connected Systems via REST APIs\n\nModern backend engineering relies on HTTP communication between microservices, cloud APIs, and external platforms. The Python `requests` library provides an elegant, human-friendly API over raw socket connections.\n\n### The Anatomy of an HTTP Request / Response Lifecycle\n\n1. **HTTP Methods (Verbs):**\n   - `GET`: Retrieve resource data (idempotent, no side-effects).\n   - `POST`: Create a new resource with a JSON payload.\n   - `PUT` / `PATCH`: Replace or update an existing resource.\n   - `DELETE`: Remove a resource.\n2. **Status Code Families:**\n   - `2xx (Success):` `200 OK`, `201 Created`, `204 No Content`\n   - `3xx (Redirection):` `301 Moved Permanently`, `304 Not Modified`\n   - `4xx (Client Errors):` `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `429 Rate Limited`\n   - `5xx (Server Errors):` `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`\n3. **Network Timeouts:** Never make an HTTP call without an explicit `timeout=(connect_timeout, read_timeout)`. Without a timeout, a hanging server will freeze your Python process indefinitely!',
      analogyHero: 'Think of an HTTP request like sending a certified letter through the post office: the HTTP verb is the action (inspect, deliver, return), the headers are the stamps and return address, the JSON body is the letter inside, and the status code is the signature receipt.',
      objectives: [
        'Master HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`) and status code handling.',
        'Use `response.raise_for_status()` for robust error intercepting.',
        'Configure headers, Bearer Tokens, and query parameters.',
        'Use `requests.Session()` with connection pooling and HTTP retry adapters.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: 'import requests\nresp = requests.get("https://api.example.com/data", params={"page": 1}, timeout=5)\nresp.raise_for_status() # Raise error if 4xx/5xx\ndata = resp.json()      # Parse JSON directly\n\nsession = requests.Session() # Connection pooling',
      sections: [
        {
          id: 'sec-int-10-1',
          title: 'HTTP Client Requests, Session Pooling & Error Handling',
          difficulty: 'Intermediate',
          analogy: 'Using `requests.Session()` is like keeping a direct hotline phone line open between two offices: you avoid dialing and establishing a new handshake every time you want to say one sentence.',
          content: '### 1. `requests.Session()` Connection Pooling\nMaking multiple requests with `requests.get()` establishes and tears down a new TCP and TLS handshake on every call. `requests.Session()` reuses the underlying TCP connection pool (Keep-Alive), reducing latency by up to 5x!\n\n### 2. Defending Against Network Freezes with Timeouts\nAlways pass `timeout=5.0` or a tuple `timeout=(3.05, 10.0)` (connect timeout, read timeout).',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_rest_api_client.py',
              code: 'import requests\n\n# Production REST API client with error handling\nclass GitHubRepoInspector:\n    BASE_URL = "https://api.github.com"\n    \n    def __init__(self, auth_token: str = None):\n        self.session = requests.Session()\n        self.session.headers.update({\n            "Accept": "application/vnd.github.v3+json",\n            "User-Agent": "Skillora-AI-Inspector/1.0"\n        })\n        if auth_token:\n            self.session.headers["Authorization"] = f"Bearer {auth_token}"\n            \n    def get_repository_info(self, owner: str, repo: str) -> dict:\n        url = f"{self.BASE_URL}/repos/{owner}/{repo}"\n        try:\n            response = self.session.get(url, timeout=(3.0, 10.0))\n            # Raises HTTPError if status is 4xx or 5xx\n            response.raise_for_status()\n            return response.json()\n        except requests.exceptions.HTTPError as http_err:\n            print(f"❌ HTTP Error encountered: {http_err} (Status: {response.status_code})")\n            raise\n        except requests.exceptions.Timeout:\n            print("⏱️ Request timed out while waiting for server.")\n            raise\n        except requests.exceptions.RequestException as req_err:\n            print(f"🌐 Network connection failed: {req_err}")\n            raise\n\nclient = GitHubRepoInspector()\ntry:\n    repo_data = client.get_repository_info("psf", "requests")\n    print(f"Repository: {repo_data.get(\'full_name\')}")\n    print(f"Stars:      {repo_data.get(\'stargazers_count\'):,}")\nexcept Exception:\n    print("Verification completed.")',
              explanation: 'A production API client with custom headers, session pooling, timeout guards, and structured HTTP error handling.',
              lineByLine: [
                { line: 'self.session = requests.Session()', explanation: 'Creates persistent HTTP session with TCP connection reuse.' },
                { line: 'response.raise_for_status()', explanation: 'Automatically raises HTTPError on 4xx/5xx responses.' }
              ]
            }
          ],
          commonMistakes: [
            'Omitting the `timeout` parameter: By default, `requests` has NO timeout. If an external server hangs or drops packets, your Python thread will hang forever.',
            'Not calling `response.raise_for_status()`: Checking only if a response returned without checking status codes will treat a 500 Internal Server Error as a success.'
          ],
          proTip: 'Mount an `HTTPAdapter` with `urllib3.util.Retry` on your `requests.Session()` to automatically handle transient network glitches and 429/503 status codes.',
          miniPractice: {
            question: 'What does `response.raise_for_status()` do in Python\'s `requests` library?',
            options: [
              'It raises an `HTTPError` if the response status code indicates a client error (4xx) or server error (5xx)',
              'It restarts the network adapter',
              'It forces the request to retry indefinitely',
              'It deletes the user session'
            ],
            correctAnswer: 0,
            explanation: '`raise_for_status()` checks the HTTP response status code and raises a `requests.exceptions.HTTPError` if an error occurred.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Paginated API Consumer',
          instructions: 'Write a generator function `fetch_all_pages(base_url, max_pages=3)` that yields items page-by-page until no more pages remain or the maximum page limit is reached.',
          starterCode: 'def fetch_all_pages(base_url: str, max_pages: int = 3):\n    # Implement paginated generator\n    pass',
          solutionCode: 'def fetch_all_pages(base_url: str, max_pages: int = 3):\n    page = 1\n    while page <= max_pages:\n        # Simulated paginated endpoint response\n        items = [f"Item_{page}_{i}" for i in range(1, 4)]\n        for item in items:\n            yield item\n        page += 1\n\nprint("Fetched Items:", list(fetch_all_pages("https://api.example.com/items", 2)))'
        }
      ],
      keyTakeaways: [
        'Always set explicit timeouts on HTTP requests (`timeout=(3.0, 10.0)`).',
        'Use `response.raise_for_status()` to catch HTTP 4xx and 5xx errors.',
        'Use `requests.Session()` to reuse TCP connections and reduce request latency.',
        'Use `response.json()` to deserialize JSON response payloads directly.'
      ],
      summary: 'You have mastered RESTful HTTP communication, session pooling, timeout guards, and error handling.'
    }
  },

  // ==========================================
  // MODULE 11: Relational Databases & SQLite3 Integration
  // ==========================================
  {
    id: 'py-int-11',
    orderIndex: 11,
    title: 'Module 11: Databases & SQLite Integration',
    description: 'Master relational databases with sqlite3: schema creation, parameterized queries against SQL injection, ACID transactions, and context connections.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-sql-01', title: 'Python sqlite3 Standard Library Documentation', type: 'documentation', url: 'https://docs.python.org/3/library/sqlite3.html' }
    ],
    lessonContent: {
      overview: '### Relational Database Persistence in Python\n\nPython includes a full, zero-configuration SQL database engine in its standard library: **SQLite** (`sqlite3`). SQLite stores complete relational databases in a single cross-platform disk file or in-memory (`:memory:`), providing full ACID transaction compliance.\n\n### The Cardinal Rule: Parameterized Queries (Preventing SQL Injection)\n\nNever concatenate user input directly into SQL strings (`f"SELECT * FROM users WHERE id = {user_input}"`). This allows attackers to inject malicious SQL commands (`1 OR 1=1; DROP TABLE users;`).\n\nAlways use **Parameterized Queries**:\n`cursor.execute("SELECT * FROM users WHERE id = ?", (user_input,))`\nThe database driver treats the parameter strictly as literal data, making SQL injection impossible.',
      analogyHero: 'Think of parameterized queries like a bank teller window with a bulletproof glass slot: you pass your deposit slip (data) through the slot, but you cannot pass a weapon through the glass to alter the bank\'s vault (SQL commands).',
      objectives: [
        'Master the SQLite lifecycle: Connect, Cursor, Execute, Commit, Close.',
        'Prevent SQL Injection vulnerabilities using parameterized query placeholders (`?`).',
        'Understand ACID transactions (Atomic, Consistent, Isolated, Durable).',
        'Use `sqlite3.Row` for dictionary-like column access.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: 'import sqlite3\nconn = sqlite3.connect("app.db")\nconn.row_factory = sqlite3.Row # Dict-like rows\ncursor = conn.cursor()\ncursor.execute("INSERT INTO users VALUES (?, ?)", ("Amir", 100))\nconn.commit()\nconn.close()',
      sections: [
        {
          id: 'sec-int-11-1',
          title: 'ACID Transactions, Parameterized SQL & Row Factories',
          difficulty: 'Intermediate',
          analogy: 'An ACID transaction is like transferring money between accounts: either the money leaves Account A AND enters Account B (success), or nothing happens at all (atomic rollback).',
          content: '### 1. Connection as a Context Manager\nWhen using `with conn:`, SQLite automatically manages transactions: it issues a `COMMIT` if the block completes successfully, or a `ROLLBACK` if an unhandled exception occurs.\n\n### 2. `conn.row_factory = sqlite3.Row`\nBy default, SQLite returns rows as plain tuples `(1, "Amir", 3.9)`. Setting `conn.row_factory = sqlite3.Row` allows column access by name (`row["username"]`).',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_sqlite_crud_operations.py',
              code: 'import sqlite3\n\n# In-Memory Database for demonstration (:memory:)\nconn = sqlite3.connect(":memory:")\nconn.row_factory = sqlite3.Row  # Enables named column access\ncursor = conn.cursor()\n\n# 1. Schema Creation\ncursor.execute("""\n    CREATE TABLE users (\n        id INTEGER PRIMARY KEY AUTOINCREMENT,\n        username TEXT UNIQUE NOT NULL,\n        email TEXT NOT NULL,\n        balance REAL DEFAULT 0.0\n    );\n""")\n\n# 2. Parameterized Bulk Insertion (Safe against SQL Injection!)\nusers_data = [\n    ("amir_k", "amir@skillora.ai", 150.00),\n    ("sarah_ai", "sarah@skillora.ai", 280.50),\n    ("david_dev", "david@skillora.ai", 95.00)\n]\n\nwith conn:  # Transaction context manager (auto-commits)\n    cursor.executemany(\n        "INSERT INTO users (username, email, balance) VALUES (?, ?, ?);",\n        users_data\n    )\n\n# 3. Parameterized Query\ncursor.execute("SELECT * FROM users WHERE balance >= ? ORDER BY balance DESC;", (100.0,))\nprint("=== High-Balance Users ===")\nfor row in cursor.fetchall():\n    print(f"ID: {row[\'id\']} | Username: {row[\'username\']:<10} | Balance: ${row[\'balance\']:.2f}")\n\nconn.close()',
              explanation: 'Demonstrates schema creation, parameterized bulk inserting with transaction auto-commit, and row factory queries.',
              lineByLine: [
                { line: 'conn.row_factory = sqlite3.Row', explanation: 'Allows column values to be retrieved by column name string.' },
                { line: 'cursor.executemany("... VALUES (?, ?, ?)", users_data)', explanation: 'Executes bulk parameterized insert safely.' }
              ]
            }
          ],
          commonMistakes: [
            'Using string concatenation or f-strings in SQL queries: `cursor.execute(f"SELECT * FROM users WHERE name = \'{name}\'")` leaves your application completely vulnerable to SQL Injection attacks.',
            'Forgetting `conn.commit()` when not using context managers: Data modifications in SQLite will remain unwritten to disk if commit is not issued.'
          ],
          proTip: 'Use in-memory SQLite databases (`sqlite3.connect(":memory:")`) for blazing fast automated unit testing fixtures.',
          miniPractice: {
            question: 'Why must database queries always use parameterized placeholders `?` rather than f-strings or string concatenation?',
            options: [
              'To eliminate SQL Injection security vulnerabilities and allow query execution plan caching',
              'Because SQLite crashes on string concatenation',
              'To force database queries to execute in background threads',
              'To compress database files on disk'
            ],
            correctAnswer: 0,
            explanation: 'Parameterized queries separate SQL command syntax from user data parameters, preventing attackers from injecting malicious SQL commands.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Transactional Bank Transfer in SQLite',
          instructions: 'Write a function `transfer_funds(conn, sender_id, receiver_id, amount)` that executes within a transaction `with conn:`. It debits the sender and credits the receiver, verifying that the sender has sufficient balance before updating.',
          starterCode: 'def transfer_funds(conn, sender_id: int, receiver_id: int, amount: float):\n    # Implement transactional transfer\n    pass',
          solutionCode: 'def transfer_funds(conn, sender_id: int, receiver_id: int, amount: float):\n    cursor = conn.cursor()\n    with conn:\n        cursor.execute("SELECT balance FROM accounts WHERE id = ?", (sender_id,))\n        sender_row = cursor.fetchone()\n        if not sender_row or sender_row[0] < amount:\n            raise ValueError("Insufficient balance or sender account missing.")\n            \n        cursor.execute("UPDATE accounts SET balance = balance - ? WHERE id = ?", (amount, sender_id))\n        cursor.execute("UPDATE accounts SET balance = balance + ? WHERE id = ?", (amount, receiver_id))\n    print(f"Successfully transferred ${amount:.2f}")'
        }
      ],
      keyTakeaways: [
        'SQLite provides lightweight, serverless, full ACID relational persistence.',
        'Never format SQL with strings—always use parameterized queries `?` to stop SQL Injection.',
        'Use `with conn:` to automatically manage transaction commits and rollbacks.',
        'Use `sqlite3.Row` for readable dictionary-like column access.'
      ],
      summary: 'You have mastered relational database persistence, parameterized queries, transaction isolation, and row factories.'
    }
  },

  // ==========================================
  // MODULE 12: Concurrency, Threading & The GIL
  // ==========================================
  {
    id: 'py-int-12',
    orderIndex: 12,
    title: 'Module 12: Concurrency & The GIL',
    description: 'Master concurrency vs parallelism, the Global Interpreter Lock (GIL), threading for I/O-bound tasks, multiprocessing for CPU-bound tasks, and concurrent.futures.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-conc-01', title: 'Python Concurrency & concurrent.futures Documentation', type: 'documentation', url: 'https://docs.python.org/3/library/concurrent.futures.html' }
    ],
    lessonContent: {
      overview: '### Concurrency vs Parallelism in Python\n\n- **Concurrency:** Handling multiple tasks at the same time by interleaving execution (e.g. switching between waiting network sockets).\n- **Parallelism:** Executing multiple computations simultaneously across multiple physical CPU cores.\n\n### The Global Interpreter Lock (GIL) Explained\n\nIn standard CPython, memory management uses reference counting which is not thread-safe. To prevent race conditions, CPython uses the **Global Interpreter Lock (GIL)**—a mutex that ensures **only one native thread executes Python bytecode at any given moment per process**.\n\n### The Golden Rule of Python Concurrency:\n1. **I/O-Bound Workloads (Network requests, DB queries, Disk I/O):** Use **`threading`** or **`asyncio`**. When a thread waits on network sockets or disk reads, it releases the GIL, allowing other threads to run concurrently.\n2. **CPU-Bound Workloads (Image processing, machine learning, heavy math):** Use **`multiprocessing`** (`ProcessPoolExecutor`). Each process runs its own independent Python interpreter and GIL instance across separate physical CPU cores!',
      analogyHero: 'Think of the GIL like a single chef in a kitchen: they can put 4 pots on the stove and switch between checking on them while water boils (I/O threading). But if they need to chop 100 onions at maximum speed (CPU math), hiring 4 separate chefs in separate kitchens (multiprocessing) is required.',
      objectives: [
        'Understand the GIL mechanics and why threads cannot parallelize pure CPU calculations in CPython.',
        'Choose the correct concurrency model: `ThreadPoolExecutor` (I/O-bound) vs `ProcessPoolExecutor` (CPU-bound).',
        'Use the modern high-level `concurrent.futures` API.',
        'Prevent race conditions using threading `Lock` mutexes.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: 'from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor\n\n# I/O Bound (Threading)\nwith ThreadPoolExecutor(max_workers=10) as executor:\n    results = executor.map(fetch_url, urls)\n\n# CPU Bound (Multiprocessing)\nwith ProcessPoolExecutor() as executor:\n    results = executor.map(heavy_math, numbers)',
      sections: [
        {
          id: 'sec-int-12-1',
          title: 'ThreadPoolExecutor, ProcessPoolExecutor & Thread Synchronization',
          difficulty: 'Intermediate',
          analogy: 'A ThreadPoolExecutor is like a customer service call center: 10 operators (worker threads) handle 50 incoming calls concurrently from a shared queue.',
          content: '### 1. `concurrent.futures.ThreadPoolExecutor`\nManages a pool of worker threads. Ideal for making hundreds of API requests, web scraping, or reading multiple files concurrently.\n\n### 2. `concurrent.futures.ProcessPoolExecutor`\nSpawns separate OS worker processes bypassing the GIL entirely. Utilizes all CPU cores for intensive numeric computation.\n\n### 3. Thread Synchronization (`threading.Lock`)\nWhen multiple threads update shared mutable state (e.g. an account balance), use `with lock:` to prevent race conditions.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_thread_pool_executor.py',
              code: 'from concurrent.futures import ThreadPoolExecutor, as_completed\nimport time\n\n# Simulated I/O-bound web request\ndef fetch_service_status(service_id: int) -> dict:\n    time.sleep(0.2)  # Simulate network latency (releases GIL!)\n    return {"service_id": service_id, "status": "UP", "response_time_ms": 45}\n\nservice_ids = list(range(1, 11))\n\nt0 = time.perf_counter()\nresults = []\n\n# Execute 10 requests concurrently across 5 worker threads\nwith ThreadPoolExecutor(max_workers=5) as executor:\n    future_to_id = {executor.submit(fetch_service_status, sid): sid for sid in service_ids}\n    for future in as_completed(future_to_id):\n        results.append(future.result())\n\nelapsed = time.perf_counter() - t0\nprint(f"Processed {len(results)} network requests in {elapsed:.2f} seconds!")\nprint(f"(Sequential execution would have taken {len(service_ids) * 0.2:.2f} seconds)")',
              explanation: 'Demonstrates `ThreadPoolExecutor` achieving high throughput on I/O-bound tasks by releasing the GIL during network waits.',
              lineByLine: [
                { line: 'with ThreadPoolExecutor(max_workers=5) as executor:', explanation: 'Initializes pool of 5 worker threads.' },
                { line: 'future = executor.submit(...)', explanation: 'Schedules task execution returning a Future object.' }
              ]
            },
            {
              language: 'python',
              filename: '02_thread_lock_synchronization.py',
              code: 'import threading\n\n# Shared counter with race condition prevention via Lock\nclass ThreadSafeCounter:\n    def __init__(self):\n        self.value = 0\n        self._lock = threading.Lock()\n        \n    def increment(self):\n        with self._lock:  # Acquires mutex lock, guarantees atomic increment\n            self.value += 1\n\ncounter = ThreadSafeCounter()\nthreads = [threading.Thread(target=lambda: [counter.increment() for _ in range(1000)]) for _ in range(10)]\n\nfor t in threads: t.start()\nfor t in threads: t.join()\n\nprint(f"Final Synchronized Counter Value: {counter.value} (Expected: 10,000)")',
              explanation: 'Shows `threading.Lock` synchronizing shared mutable state across threads to prevent race conditions.',
              lineByLine: [
                { line: 'with self._lock:', explanation: 'Guarantees only one thread can modify self.value at a time.' }
              ]
            }
          ],
          commonMistakes: [
            'Using `threading` for CPU-intensive math: In Python, running heavy math across 8 threads on an 8-core CPU will run at the exact same speed (or slower) than a single thread due to GIL lock contention. Use `ProcessPoolExecutor` for math!',
            'Forgetting `if __name__ == "__main__":` when using multiprocessing on Windows: Causes infinite recursive process spawning loops.'
          ],
          proTip: 'For I/O concurrency with thousands of connections, prefer `asyncio` over threads for lower memory overhead per connection.',
          miniPractice: {
            question: 'Which concurrency model should you choose in Python for a CPU-intensive image filtering script?',
            options: [
              '`threading.Thread`',
              '`concurrent.futures.ProcessPoolExecutor` (Multiprocessing)',
              '`time.sleep()`',
              'A standard while loop'
            ],
            correctAnswer: 1,
            explanation: 'CPU-bound tasks require `ProcessPoolExecutor` (multiprocessing) to run on separate physical CPU cores, bypassing the CPython GIL.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Concurrent URL Status Checker',
          instructions: 'Use `ThreadPoolExecutor` to check HTTP status of a list of URLs concurrently, returning a dictionary mapping each URL to its status code.',
          starterCode: 'from concurrent.futures import ThreadPoolExecutor\n\ndef check_urls_concurrently(url_list: list) -> dict:\n    # Implement thread pool checker\n    pass',
          solutionCode: 'from concurrent.futures import ThreadPoolExecutor\n\ndef mock_check(url: str) -> tuple:\n    return (url, 200)\n\ndef check_urls_concurrently(url_list: list) -> dict:\n    with ThreadPoolExecutor(max_workers=4) as executor:\n        results = dict(executor.map(mock_check, url_list))\n    return results\n\nurls = ["https://google.com", "https://github.com", "https://python.org"]\nprint("Results:", check_urls_concurrently(urls))'
        }
      ],
      keyTakeaways: [
        'The GIL limits CPython to executing one thread of Python bytecode at a time per process.',
        'Use `ThreadPoolExecutor` or `asyncio` for I/O-bound tasks (releases the GIL during waits).',
        'Use `ProcessPoolExecutor` for CPU-bound tasks (bypasses the GIL across multiple cores).',
        'Use `threading.Lock` to protect shared mutable state against race conditions.'
      ],
      summary: 'You have mastered the GIL, threading vs multiprocessing decision matrices, ThreadPoolExecutor, and thread synchronization.'
    }
  },

  // ==========================================
  // MODULE 13: Standard Library Power Tools
  // ==========================================
  {
    id: 'py-int-13',
    orderIndex: 13,
    title: 'Module 13: Standard Library Power Tools',
    description: 'Master collections (defaultdict, Counter, deque), itertools (chain, cycle, groupby, islice), functools (lru_cache, partial), and pathlib.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-stdlib-01', title: 'Python Standard Library Index', type: 'documentation', url: 'https://docs.python.org/3/library/' }
    ],
    lessonContent: {
      overview: '### "Batteries Included": The Python Standard Library\n\nOne of Python\'s greatest strengths is its rich standard library. Mastering modules like `collections`, `itertools`, `functools`, and `pathlib` enables you to write clean, high-performance code without installing bloated third-party dependencies.\n\n### Core Power Modules:\n1. **`collections`:** High-performance specialized container types (`defaultdict`, `Counter`, `deque`, `OrderedDict`).\n2. **`itertools`:** Composable iterator building blocks for fast, memory-efficient loops (`chain`, `islice`, `cycle`, `groupby`, `permutations`).\n3. **`functools`:** Higher-order functional programming utilities (`lru_cache`, `partial`, `reduce`, `singledispatch`).\n4. **`pathlib`:** Object-oriented filesystem path manipulation replacing legacy `os.path`.',
      analogyHero: 'Think of the standard library like an advanced Swiss Army knife built directly into your backpack: instead of buying 10 separate tools at the hardware store, you simply unfold the precision tool you need.',
      objectives: [
        'Master `collections.defaultdict`, `Counter`, and $O(1)$ `deque`.',
        'Use `itertools.chain`, `itertools.islice`, and `itertools.groupby` for high-speed sequence processing.',
        'Apply `functools.lru_cache` and `functools.partial` for function specialization.',
        'Perform cross-platform file path operations using `pathlib.Path`.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: 'from collections import defaultdict, Counter, deque\nfrom itertools import chain, islice, groupby\nfrom functools import lru_cache, partial\nfrom pathlib import Path\n\ncounts = Counter(["a", "b", "a"])\nd = deque(maxlen=100)\npath = Path("data") / "logs.txt"',
      sections: [
        {
          id: 'sec-int-13-1',
          title: 'Collections, Itertools & Pathlib Mastery',
          difficulty: 'Intermediate',
          analogy: 'Using `pathlib.Path` with the `/` operator is like snapping Lego bricks together: `Path("users") / "data" / "file.csv"` builds paths cleanly across Windows, Linux, and macOS without syntax errors.',
          content: '### 1. `collections.defaultdict` and `Counter`\n- `defaultdict(list)`: Eliminates boilerplate `if k not in d:` checks by auto-initializing missing keys.\n- `Counter(iterable)`: Tallies item occurrences and provides `.most_common(k)` in $O(N)$ time.\n\n### 2. `functools.partial`\nFreezes a subset of function arguments to create a specialized, reusable function signature.\n\n### 3. `pathlib.Path`\nProvides clean object-oriented path methods: `path.read_text()`, `path.exists()`, `path.glob("*.json")`, `path.parent`.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_collections_power_tools.py',
              code: 'from collections import defaultdict, Counter, deque\n\n# 1. defaultdict: Automatic grouping\ngrouped_tasks = defaultdict(list)\ngrouped_tasks["backend"].append("Build Auth API")\ngrouped_tasks["backend"].append("Optimize SQL Queries")\ngrouped_tasks["frontend"].append("Design Roadmap UI")\nprint("Grouped Tasks:", dict(grouped_tasks))\n\n# 2. Counter: Frequency analysis\nsentence = "python is fast and python is clean and elegant"\nword_counts = Counter(sentence.split())\nprint("Top 2 Most Common Words:", word_counts.most_common(2))\n\n# 3. deque: Fixed-size ring buffer\nrecent_logs = deque(maxlen=3)\nfor i in range(1, 6):\n    recent_logs.append(f"Log event #{i}")\nprint("Recent 3 Logs (Old items automatically evicted):", list(recent_logs))',
              explanation: 'Demonstrates `defaultdict` grouping, `Counter` frequency analysis, and `deque` ring buffering.',
              lineByLine: [
                { line: 'grouped_tasks = defaultdict(list)', explanation: 'Auto-initializes empty list for any accessed missing key.' },
                { line: 'recent_logs = deque(maxlen=3)', explanation: 'Maintains fixed capacity buffer with O(1) eviction.' }
              ]
            },
            {
              language: 'python',
              filename: '02_itertools_and_functools.py',
              code: 'from itertools import chain, islice\nfrom functools import lru_cache, partial\n\n# 1. itertools.chain: Combining multiple iterables with zero copying\nlist1 = [1, 2, 3]\nlist2 = [4, 5, 6]\ncombined = list(chain(list1, list2))\nprint("Chained List:", combined)\n\n# 2. functools.lru_cache: Fast memoization\n@lru_cache(maxsize=128)\ndef compute_fib(n: int) -> int:\n    if n < 2: return n\n    return compute_fib(n - 1) + compute_fib(n - 2)\n\nprint(f"Fibonacci(35): {compute_fib(35)} (Computed in microseconds!)")\n\n# 3. functools.partial: Function specialization\ndef send_http_request(method: str, endpoint: str, payload: dict = None):\n    return f"[{method}] -> {endpoint} (Payload: {payload})"\n\n# Create specialized POST helper\npost_request = partial(send_http_request, "POST")\nprint(post_request("/api/v1/users", {"name": "Amir"}))',
              explanation: 'Shows `itertools.chain` zero-copy chaining, `lru_cache` memoization, and `partial` function specialization.',
              lineByLine: [
                { line: '@lru_cache(maxsize=128)', explanation: 'Caches return values in memory based on argument inputs.' },
                { line: 'post_request = partial(...)', explanation: 'Pre-fills first argument to create specialized callable.' }
              ]
            }
          ],
          commonMistakes: [
            'Using `list` as a FIFO queue: Calling `list.pop(0)` takes $O(N)$ linear time because all remaining elements shift in memory. Always use `collections.deque.popleft()` ($O(1)$).',
            'Applying `@lru_cache` to functions with mutable arguments (like lists or dicts): Raises `TypeError: unhashable type`. Cache keys must be immutable.'
          ],
          proTip: 'Use `Path.glob("**/*.py")` to recursively search directory trees for matching file patterns with zero OS complexity.',
          miniPractice: {
            question: 'What is the time complexity of popping an element from the beginning of a `collections.deque` vs a standard `list`?',
            options: [
              '`deque.popleft()` is $O(1)$ constant time; `list.pop(0)` is $O(N)$ linear time',
              '`deque` is $O(N^2)$; `list` is $O(1)$',
              'Both are $O(N)$',
              'Both are $O(1)$'
            ],
            correctAnswer: 0,
            explanation: '`collections.deque` is a doubly-linked structure offering $O(1)$ pushes/pops from both ends, while `list.pop(0)` requires shifting all $N$ elements.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Log Event Categorizer and Frequency Counter',
          instructions: 'Given a list of raw log strings, extract the event category and count occurrences using `collections.Counter` and `defaultdict`.',
          starterCode: 'from collections import Counter\n\nlogs = ["auth:success", "auth:fail", "db:timeout", "auth:success", "db:timeout"]\n# Tally and group logs',
          solutionCode: 'from collections import Counter\n\nlogs = ["auth:success", "auth:fail", "db:timeout", "auth:success", "db:timeout"]\ncounts = Counter(logs)\nprint("Log Counts:", dict(counts))'
        }
      ],
      keyTakeaways: [
        'Use `defaultdict` for automatic key initialization and `Counter` for frequency counting.',
        'Use `collections.deque` for $O(1)$ queue operations.',
        '`itertools` enables zero-copy iterator chaining and slicing.',
        '`functools.lru_cache` provides instant $O(1)$ memoization for pure functions.'
      ],
      summary: 'You have mastered the Python standard library power tools: collections, itertools, functools, and pathlib.'
    }
  },

  // ==========================================
  // MODULE 14: Unit Testing & Test-Driven Development (TDD)
  // ==========================================
  {
    id: 'py-int-14',
    orderIndex: 14,
    title: 'Module 14: Unit Testing & TDD',
    description: 'Master unit testing with unittest and pytest, test assertions, fixtures (setUp/tearDown), mocking external dependencies with unittest.mock, and coverage.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-test-01', title: 'Python unittest Framework Documentation', type: 'documentation', url: 'https://docs.python.org/3/library/unittest.html' }
    ],
    lessonContent: {
      overview: '### Professional Software Quality & Test-Driven Development (TDD)\n\nIn professional software engineering, untested code is broken code. Automated testing ensures that new features and refactoring do not introduce regression bugs.\n\n### The Testing Pyramid & Unit Test Isolation\n\n- **Unit Tests:** Fast, isolated tests verifying single functions or classes in memory (milliseconds).\n- **Integration Tests:** Verifying interaction between multiple components (e.g. database + business logic).\n- **End-to-End (E2E) Tests:** Simulating real user journeys.\n\n### Mocking External Dependencies (`unittest.mock`)\nUnit tests must be fast, deterministic, and isolated. They should **never make real network HTTP requests or delete production database tables**. We use `unittest.mock.patch` to replace external dependencies with mock doubles.',
      analogyHero: 'Think of unit testing with mocks like a flight simulator for pilots: the simulator tests the pilot\'s reactions to emergency engine failures safely on the ground without risking a real aircraft or passengers.',
      objectives: [
        'Master the `unittest.TestCase` lifecycle: `setUp()`, `tearDown()`, assertions.',
        'Use standard assertions: `assertEqual()`, `assertTrue()`, `assertRaises()`.',
        'Mock external APIs, database calls, and time using `unittest.mock.patch` and `MagicMock`.',
        'Understand Test-Driven Development (TDD): Red -> Green -> Refactor cycle.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: 'import unittest\nfrom unittest.mock import patch, MagicMock\n\nclass TestUser(unittest.TestCase):\n    def setUp(self): self.user = User("Amir")\n    def test_name(self): self.assertEqual(self.user.name, "Amir")\n    def test_error(self): \n        with self.assertRaises(ValueError): self.user.set_age(-5)',
      sections: [
        {
          id: 'sec-int-14-1',
          title: 'Test Fixtures, Assertions & Mocking Dependencies',
          difficulty: 'Intermediate',
          analogy: '`setUp()` and `tearDown()` are like setting up a clean chemistry lab bench before every experiment and sanitizing the test tubes immediately after.',
          content: '### 1. Test Lifecycle (`setUp` and `tearDown`)\n`setUp()` runs before **every individual test method**, providing a pristine test fixture. `tearDown()` runs after every test, cleaning up files or database states.\n\n### 2. Testing Exceptions with `assertRaises`\nVerify that invalid inputs properly trigger errors: `with self.assertRaises(ValueError): divide(10, 0)`.\n\n### 3. Mocking with `unittest.mock.patch`\nReplace slow or non-deterministic external calls (e.g. `requests.get`) with `MagicMock` objects that return canned responses.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_unittest_testcase.py',
              code: 'import unittest\n\n# Target Business Logic Class\nclass ShoppingCart:\n    def __init__(self):\n        self.items = {}\n        \n    def add_item(self, item_name: str, price: float, quantity: int = 1):\n        if price <= 0:\n            raise ValueError("Price must be positive.")\n        if quantity <= 0:\n            raise ValueError("Quantity must be positive.")\n        self.items[item_name] = self.items.get(item_name, 0.0) + (price * quantity)\n        \n    def total_cost(self) -> float:\n        return sum(self.items.values())\n\n# Unit Test Suite\nclass TestShoppingCart(unittest.TestCase):\n    def setUp(self):\n        """Runs before EACH test method."""\n        self.cart = ShoppingCart()\n        \n    def test_add_single_item(self):\n        self.cart.add_item("Keyboard", 99.00, 1)\n        self.assertEqual(self.cart.total_cost(), 99.00)\n        \n    def test_add_multiple_quantity(self):\n        self.cart.add_item("Mouse", 25.00, 3)\n        self.assertEqual(self.cart.total_cost(), 75.00)\n        \n    def test_negative_price_raises_error(self):\n        with self.assertRaises(ValueError):\n            self.cart.add_item("Corrupt", -10.00, 1)\n\n# Execute test runner\nsuite = unittest.TestLoader().loadTestsFromTestCase(TestShoppingCart)\nrunner = unittest.TextTestRunner(verbosity=2)\nrunner.run(suite)',
              explanation: 'Demonstrates a complete unit test suite verifying positive flows and exception raising.',
              lineByLine: [
                { line: 'class TestShoppingCart(unittest.TestCase):', explanation: 'Inherits from TestCase test runner.' },
                { line: 'with self.assertRaises(ValueError):', explanation: 'Asserts that the block triggers ValueError.' }
              ]
            },
            {
              language: 'python',
              filename: '02_mocking_external_api.py',
              code: 'import unittest\nfrom unittest.mock import patch, MagicMock\nimport requests\n\ndef get_weather_forecast(city: str) -> str:\n    resp = requests.get(f"https://weather.api.com/{city}", timeout=5)\n    if resp.status_code == 200:\n        return resp.json().get("summary", "Sunny")\n    return "Unavailable"\n\nclass TestWeatherService(unittest.TestCase):\n    @patch("requests.get")  # Mocks requests.get during test execution\n    def test_successful_weather_fetch(self, mock_get):\n        # Configure mock response\n        mock_response = MagicMock()\n        mock_response.status_code = 200\n        mock_response.json.return_value = {"summary": "Partly Cloudy"}\n        mock_get.return_value = mock_response\n        \n        result = get_weather_forecast("Lahore")\n        self.assertEqual(result, "Partly Cloudy")\n        # Verify requests.get was called with expected URL\n        mock_get.assert_called_once_with("https://weather.api.com/Lahore", timeout=5)\n\nsuite = unittest.TestLoader().loadTestsFromTestCase(TestWeatherService)\nunittest.TextTestRunner(verbosity=2).run(suite)',
              explanation: 'Mocks `requests.get` using `@patch` to test API parsing without network calls.',
              lineByLine: [
                { line: '@patch("requests.get")', explanation: 'Intercepts requests.get and replaces it with a MagicMock double.' },
                { line: 'mock_get.assert_called_once_with(...)', explanation: 'Asserts the mocked function was invoked with exact parameters.' }
              ]
            }
          ],
          commonMistakes: [
            'Sharing mutable state across tests: Not creating fresh fixtures in `setUp()` causes tests to fail or pass depending on test execution order.',
            'Testing implementation details rather than public behavior: Tests should verify outputs and public contracts, not private internal variables.'
          ],
          proTip: 'Adopt pytest in real-world projects for clean `assert actual == expected` syntax without verbose `self.assertEqual` boilerplate.',
          miniPractice: {
            question: 'In Python\'s `unittest` framework, when do `setUp()` and `tearDown()` execute?',
            options: [
              '`setUp()` runs before each test method; `tearDown()` runs after each test method',
              '`setUp()` runs once per year; `tearDown()` is only called on error',
              '`setUp()` runs after all tests finish',
              '`setUp()` only runs if an exception was raised'
            ],
            correctAnswer: 0,
            explanation: '`setUp()` initializes a clean test fixture before each individual test method, and `tearDown()` cleans up resources immediately after each test.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Bank Account Unit Test Suite',
          instructions: 'Write a `TestBankAccount` class that tests `deposit(amount)` and verifies that withdrawing more than available balance raises `ValueError`.',
          starterCode: 'class BankAccount:\n    def __init__(self, balance=0):\n        self.balance = balance\n    def withdraw(self, amt):\n        if amt > self.balance: raise ValueError("Insufficient")\n        self.balance -= amt',
          solutionCode: 'import unittest\n\nclass TestAccount(unittest.TestCase):\n    def test_overdraw_raises_error(self):\n        acc = BankAccount(100)\n        with self.assertRaises(ValueError):\n            acc.withdraw(150)\n\nsuite = unittest.TestLoader().loadTestsFromTestCase(TestAccount)\nunittest.TextTestRunner().run(suite)'
        }
      ],
      keyTakeaways: [
        'Unit tests verify isolated units of functionality deterministically and quickly.',
        'Use `setUp()` and `tearDown()` to manage clean test fixture states.',
        'Use `unittest.mock.patch` to simulate external networks, databases, and third-party APIs.',
        'Follow the Red -> Green -> Refactor TDD development cycle.'
      ],
      summary: 'You have mastered automated testing, test fixtures, assertions, mocking with unittest.mock, and TDD practices.'
    }
  },

  // ==========================================
  // MODULE 15: Intermediate Milestone Assessment
  // ==========================================
  {
    id: 'py-int-assessment',
    orderIndex: 15,
    title: 'Python Intermediate Milestone Assessment',
    description: 'Comprehensive 30-question milestone assessment covering Advanced Functions, Closures, OOP & MRO, Dunder Methods, Iterators/Generators, Decorators, Context Managers, Error Handling, Regex, APIs, SQLite, Concurrency & the GIL, Standard Library, and Testing. Score 23/30 (75%) to unlock Advanced certification.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 400,
    level: 'intermediate',
    resources: [],
    questions: PYTHON_INTERMEDIATE_FINAL_ASSESSMENT
  }
];
