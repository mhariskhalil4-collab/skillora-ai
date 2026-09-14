import { Task, QuizQuestion } from '../../types/roadmap.types';

export const PYTHON_BEGINNER_FINAL_ASSESSMENT: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Python Fundamentals',
    question: 'Which function displays output?',
    options: ['input()', 'print()', 'output()', 'display()'],
    correctAnswer: 1,
    explanation: 'The built-in print() function outputs data and text to the console screen.'
  },
  {
    id: 2,
    topic: 'Python Fundamentals',
    question: 'Which symbol starts a comment?',
    options: ['//', '/*', '#', '--'],
    correctAnswer: 2,
    explanation: 'In Python, single-line comments begin with the # character and are ignored by the interpreter.'
  },
  {
    id: 3,
    topic: 'Variables & Data Types',
    question: 'Which type stores True or False?',
    options: ['str', 'bool', 'int', 'list'],
    correctAnswer: 1,
    explanation: 'The bool (boolean) data type represents truth values: True or False.'
  },
  {
    id: 4,
    topic: 'Operators',
    question: 'What is 10 + 5?',
    options: ['15', '105', '5', '50'],
    correctAnswer: 0,
    explanation: '10 + 5 performs basic arithmetic addition resulting in 15.'
  },
  {
    id: 5,
    topic: 'Operators',
    question: 'Which operator checks equality?',
    options: ['=', '==', '!=', '==='],
    correctAnswer: 1,
    explanation: 'The == comparison operator checks if two operands are equal in value.'
  },
  {
    id: 6,
    topic: 'Conditions',
    question: 'Which keyword begins a conditional?',
    options: ['when', 'if', 'check', 'condition'],
    correctAnswer: 1,
    explanation: 'Conditional statements in Python start with the if keyword.'
  },
  {
    id: 7,
    topic: 'Loops',
    question: 'Which loop commonly iterates over a sequence?',
    options: ['for', 'repeat', 'loop', 'iterate'],
    correctAnswer: 0,
    explanation: 'A for loop in Python iterates sequentially over the elements of any iterable sequence.'
  },
  {
    id: 8,
    topic: 'Loops',
    question: 'What does break do?',
    options: ['skips one iteration', 'stops the loop', 'restarts the loop', 'creates a loop'],
    correctAnswer: 1,
    explanation: 'The break statement immediately terminates the loop execution.'
  },
  {
    id: 9,
    topic: 'Lists',
    question: 'Which syntax creates a list?',
    options: ['{}', '()', '[]', '<>'],
    correctAnswer: 2,
    explanation: 'Square brackets [] are used to initialize a list in Python.'
  },
  {
    id: 10,
    topic: 'Lists',
    question: 'Which method adds to the end of a list?',
    options: ['add()', 'append()', 'insertEnd()', 'push()'],
    correctAnswer: 1,
    explanation: 'The append() method appends an element directly to the end of an existing list.'
  },
  {
    id: 11,
    topic: 'Tuples, Sets and Dictionaries',
    question: 'Which structure stores key-value pairs?',
    options: ['list', 'tuple', 'dictionary', 'string'],
    correctAnswer: 2,
    explanation: 'A dictionary in Python stores associative collections of key-value pairs.'
  },
  {
    id: 12,
    topic: 'Functions',
    question: 'Which keyword defines a function?',
    options: ['function', 'def', 'func', 'define'],
    correctAnswer: 1,
    explanation: 'Functions in Python are declared and defined using the def keyword.'
  },
  {
    id: 13,
    topic: 'Functions',
    question: 'What does return do?',
    options: ['repeats a function', 'sends a value back', 'prints automatically', 'deletes a function'],
    correctAnswer: 1,
    explanation: 'The return statement exits a function and sends a result value back to the caller.'
  },
  {
    id: 14,
    topic: 'Modules & Packages',
    question: 'Which keyword imports a module?',
    options: ['include', 'using', 'import', 'module'],
    correctAnswer: 2,
    explanation: 'The import keyword loads external or standard library modules into the program namespace.'
  },
  {
    id: 15,
    topic: 'File Handling',
    question: 'Which mode opens a file for writing?',
    options: ['r', 'w', 'xread', 'read'],
    correctAnswer: 1,
    explanation: '"w" mode opens a file for writing, creating a new file or overwriting existing contents.'
  },
  {
    id: 16,
    topic: 'Error Handling & Debugging',
    question: 'Which structure handles exceptions?',
    options: ['try/except', 'if/else', 'check/error', 'catch/error'],
    correctAnswer: 0,
    explanation: 'try/except blocks are used to catch and gracefully handle exceptions in Python.'
  },
  {
    id: 17,
    topic: 'OOP Fundamentals',
    question: 'Which keyword creates a class?',
    options: ['object', 'class', 'struct', 'type'],
    correctAnswer: 1,
    explanation: 'The class keyword is used to create and define a new class.'
  },
  {
    id: 18,
    topic: 'OOP Fundamentals',
    question: 'What does __init__ commonly do?',
    options: ['deletes an object', 'initializes object attributes', 'imports a module', 'starts a loop'],
    correctAnswer: 1,
    explanation: 'The __init__ constructor method initializes instance attributes when a new object is created.'
  },
  {
    id: 19,
    topic: 'Tuples, Sets and Dictionaries',
    question: 'Which collection does not allow duplicate values?',
    options: ['list', 'tuple', 'set', 'string'],
    correctAnswer: 2,
    explanation: 'A set is an unordered collection of unique elements that automatically rejects duplicate values.'
  },
  {
    id: 20,
    topic: 'Variables & Data Types',
    question: 'Which converts "25" to an integer?',
    options: ['str("25")', 'float("25")', 'int("25")', 'number("25")'],
    correctAnswer: 2,
    explanation: 'int("25") parses the string representation and casts it to an integer 25.'
  }
];

export const PYTHON_BEGINNER_TASKS: Task[] = [
  // ==========================================
  // MODULE 1: Python Fundamentals & Architecture
  // ==========================================
  {
    id: 'py-beg-01',
    orderIndex: 1,
    title: 'Module 1: Python Fundamentals',
    description: 'Master Python core execution architecture (CPython, Bytecode, PVM), indentation syntax rules, standard I/O, REPL, CLI Calculator, and Number Guessing Game.',
    status: 'in_progress',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-py-01', title: 'Python Official Documentation: General Architecture', type: 'documentation', url: 'https://docs.python.org/3/' },
      { id: 'res-py-02', title: 'PEP 20 – The Zen of Python', type: 'article', url: 'https://peps.python.org/pep-0020/' }
    ],
    lessonContent: {
      overview: '### The Foundation of Modern Software Engineering with Python\n\nPython is a high-level, interpreted, dynamically-typed programming language created by Guido van Rossum and first released in 1991. Today, Python is the foundation of AI/ML, data science, web backend engineering, and cloud automation.\n\n### How Python Executes Under the Hood (CPython Runtime Architecture)\n\nMany developers believe Python is "just interpreted line by line". In reality, the standard Python implementation (**CPython**) executes your code in a sophisticated two-step pipeline:\n\n1. **Compilation Phase (`.py` → Bytecode `.pyc`):** When you run a script, the CPython compiler parses your source text, verifies syntax, creates an Abstract Syntax Tree (AST), and compiles source instructions into compact, intermediate **Bytecode** instructions.\n2. **Virtual Machine Execution (`PVM`):** The Python Virtual Machine (PVM) is a high-performance stack-based loop written in C. It reads bytecode instructions one-by-one and dispatches them to underlying operating system and CPU instructions.\n3. **Automatic Memory Management:** Python utilizes heap allocation with **Reference Counting** and an auxiliary **Cyclic Garbage Collector (GC)**, relieving you from manual C-style `malloc` and `free` operations.',
      analogyHero: 'Think of Python code like a musical score (your .py file). CPython is the conductor who transcribes your score into standardized musical notation (bytecode), and the orchestra (the Python Virtual Machine) plays each note in real time.',
      objectives: [
        'Understand the complete CPython execution lifecycle: Source (.py) -> Bytecode (.pyc) -> PVM.',
        'Master clean indentation blocks, comment conventions, formatted standard output (print), and type-safe standard input (input).',
        'Learn the interactive REPL workflow and command-line execution parameters.',
        'Build production-ready beginner applications: A Robust CLI Calculator and an Interactive Number Guessing Game.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: 'python --version           # Verify Python installation\npython main.py             # Execute script file\npython -i main.py          # Run script and drop into interactive REPL\nprint("A", "B", sep=" | ", end="\\n") # Formatted output\nval = input("Enter: ").strip()        # Clean string input',
      sections: [
        {
          id: 'sec-1-1',
          title: 'Syntax Rules, Block Scoping & The Indentation Law',
          difficulty: 'Beginner',
          analogy: 'In languages like C++ or Java, curly braces `{}` act as walls between rooms. In Python, clean visual indentation (tabs/spaces) IS the architecture of the house.',
          content: '### 1. Significant Whitespace & PEP 8 Rules\nUnlike C, C++, or Java which use curly brackets `{}` to delimit code blocks, Python uses indentation. This forces clean, readable code by design.\n\n- **Standard Indentation:** Always use **4 spaces** per indentation level (never tabs).\n- **Colons (`:`):** Every header statement (such as `if`, `for`, `while`, `def`, `class`) must end with a colon `:` to introduce an indented block.\n- **Case Sensitivity:** Python is strictly case-sensitive. `Value`, `value`, and `VALUE` are three completely independent identifiers in memory.\n\n### 2. Standard Input/Output (`print` and `input`)\n- `print(*objects, sep=" ", end="\\n")`: Outputs values to stdout. `sep` controls the delimiter between arguments, and `end` controls the trailing character (defaulting to a newline).\n- `input(prompt)`: Pauses program execution and reads a line from stdin as a string (`str`). Because it always returns text, arithmetic requires explicit casting (`int()`, `float()`).',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_io_formatting.py',
              code: '# Demonstrating advanced print parameters and explicit type conversion\nprint("System", "Status", "Operational", sep=" -> ", end=" [OK]\\n")\n\n# Safely capturing and casting user input\nraw_age = input("Enter your age: ").strip()\nuser_age = int(raw_age)  # Cast str to int\nnext_year_age = user_age + 1\n\n# Modern f-string interpolation with expressions\nprint(f"You are currently {user_age} years old. Next year you will be {next_year_age}!")',
              explanation: 'Demonstrates custom print separation and termination, input cleaning via .strip(), explicit integer casting, and string interpolation using f-strings.',
              lineByLine: [
                { line: 'print("System", ..., sep=" -> ", end=" [OK]\\n")', explanation: 'Prints items separated by arrows and terminates with [OK] instead of standard newline.' },
                { line: 'raw_age = input("Enter your age: ").strip()', explanation: 'Captures user input and strips accidental leading/trailing whitespace.' },
                { line: 'user_age = int(raw_age)', explanation: 'Converts the raw string representation into an integer scalar for math.' },
                { line: 'print(f"You are currently {user_age}...")', explanation: 'Evaluates expressions inline inside an f-string at runtime.' }
              ]
            },
            {
              language: 'python',
              filename: '02_cli_calculator.py',
              code: '# Project: Production-Grade CLI Arithmetic Calculator\ndef calculate(num1: float, op: str, num2: float):\n    """Performs validated arithmetic computation."""\n    if op == "+":\n        return num1 + num2\n    elif op == "-":\n        return num1 - num2\n    elif op == "*":\n        return num1 * num2\n    elif op == "/":\n        if num2 == 0:\n            return "Error: Division by zero is mathematically undefined."\n        return num1 / num2\n    elif op == "%":\n        return num1 % num2\n    elif op == "**":\n        return num1 ** num2\n    else:\n        return f"Error: Unsupported operator \'{op}\'."\n\n# Interactive execution harness\nprint("=== Skillora AI Arithmetic Engine ===")\ntry:\n    n1 = float(input("Enter first operand: ").strip())\n    operator = input("Enter operator (+, -, *, /, %, **): ").strip()\n    n2 = float(input("Enter second operand: ").strip())\n    result = calculate(n1, operator, n2)\n    print(f"Calculation Result: {n1} {operator} {n2} = {result}")\nexcept ValueError:\n    print("Error: Invalid numeric input supplied.")',
              explanation: 'A fully validated command-line calculator handling edge cases like division by zero, invalid operator symbols, and input parsing errors.',
              lineByLine: [
                { line: 'def calculate(num1: float, op: str, num2: float):', explanation: 'Defines modular function with explicit parameter type hints.' },
                { line: 'if op == "/": if num2 == 0:', explanation: 'Defensive guard clause preventing ZeroDivisionError crash.' },
                { line: 'elif op == "**": return num1 ** num2', explanation: 'Handles exponentiation power calculations.' },
                { line: 'except ValueError:', explanation: 'Catches non-numeric inputs gracefully without aborting the program.' }
              ]
            },
            {
              language: 'python',
              filename: '03_number_guessing_game.py',
              code: 'import random\n\ndef play_guessing_game():\n    """Interactive number guessing game with binary-search style feedback."""\n    target = random.randint(1, 100)\n    max_attempts = 7\n    attempts_used = 0\n    \n    print("🎯 Welcome to the Number Guessing Game!")\n    print("I have chosen a secret integer between 1 and 100.")\n    print(f"You have {max_attempts} attempts to guess it accurately.\\n")\n    \n    while attempts_used < max_attempts:\n        attempts_used += 1\n        try:\n            guess = int(input(f"Attempt {attempts_used}/{max_attempts} - Your Guess: ").strip())\n        except ValueError:\n            print("⚠️ Please enter a valid whole number!")\n            attempts_used -= 1\n            continue\n            \n        if guess == target:\n            print(f"🎉 Victory! You found {target} in {attempts_used} attempts!")\n            return True\n        elif guess < target:\n            print("📈 Too low! Aim higher.")\n        else:\n            print("📉 Too high! Aim lower.")\n            \n    print(f"💀 Game Over! The secret number was {target}.")\n    return False\n\nif __name__ == "__main__":\n    play_guessing_game()',
              explanation: 'Implements random number generation, input validation loops, conditional feedback, attempt tracking, and script entry-point protection (`if __name__ == "__main__":`).',
              lineByLine: [
                { line: 'target = random.randint(1, 100)', explanation: 'Generates a pseudo-random integer in the range [1, 100] inclusive.' },
                { line: 'while attempts_used < max_attempts:', explanation: 'Iterates until the player runs out of allowed attempts or guesses correctly.' },
                { line: 'except ValueError: attempts_used -= 1; continue', explanation: 'Prevents penalizing user attempts if they accidentally type invalid characters.' },
                { line: 'if __name__ == "__main__":', explanation: 'Standard Python idiom ensuring code runs only when executed directly, not when imported.' }
              ]
            }
          ],
          commonMistakes: [
            'Mixing tabs and spaces: Python 3 raises `TabError: inconsistent use of tabs and spaces in indentation`. Always configure your editor to convert tabs to 4 spaces.',
            'Forgetting `input()` returns `str`: Writing `age = input("Age: ") + 5` raises `TypeError: can only concatenate str (not "int") to str`. Always cast with `int()` or `float()`.',
            'Assuming Python is purely interpreted: Python compiles to bytecode `.pyc` files in `__pycache__` for faster startup on subsequent runs.'
          ],
          proTip: 'Run `python -m py_compile script.py` to test your file for syntax errors without executing runtime code, or use `python -i script.py` to inspect variables interactively after execution.',
          miniPractice: {
            question: 'What happens when executing `result = input("Number: ") * 3` if the user types `5`?',
            options: [
              '`result` evaluates to integer `15`',
              '`result` evaluates to string `"555"` because `input()` returns a string and `*` repeats strings',
              'Python raises a `TypeError`',
              '`result` evaluates to float `15.0`'
            ],
            correctAnswer: 1,
            explanation: 'Because `input()` returns string `"5"`, the `*` operator performs string repetition: `"5" * 3` becomes `"555"`. To get 15, you must cast: `int(input("Number: ")) * 3`.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Temperature Unit Converter (Fahrenheit <-> Celsius)',
          instructions: 'Write a script that prompts the user for a temperature value and a unit ("C" or "F"), then converts it using formulas: C = (F - 32) * 5/9 and F = (C * 9/5) + 32. Output formatted to 2 decimal places.',
          starterCode: '# Prompt user for value and unit\ntemp_val = float(input("Enter temperature: "))\nunit = input("Enter unit (C/F): ").strip().upper()\n\n# Implement conversion logic here',
          solutionCode: 'temp_val = float(input("Enter temperature: "))\nunit = input("Enter unit (C/F): ").strip().upper()\n\nif unit == "C":\n    converted = (temp_val * 9/5) + 32\n    print(f"{temp_val}°C is equal to {converted:.2f}°F")\nelif unit == "F":\n    converted = (temp_val - 32) * 5/9\n    print(f"{temp_val}°F is equal to {converted:.2f}°C")\nelse:\n    print("Error: Invalid temperature unit. Use C or F.")'
        },
        {
          title: 'Tip & Bill Splitter with Formatting',
          instructions: 'Calculate the total bill including tip percentage (e.g. 15%, 18%, 20%) and divide it evenly among a group of people. Format output as currency ($0.00).',
          starterCode: 'bill = float(input("Total bill ($): "))\ntip_pct = float(input("Tip percentage (e.g. 15): "))\npeople = int(input("Number of people: "))\n\n# Calculate per-person total',
          solutionCode: 'bill = float(input("Total bill ($): "))\ntip_pct = float(input("Tip percentage (e.g. 15): "))\npeople = int(input("Number of people: "))\n\ntip_amount = bill * (tip_pct / 100)\ntotal_bill = bill + tip_amount\nper_person = total_bill / people\n\nprint(f"Tip Amount: ${tip_amount:.2f}")\nprint(f"Total Bill: ${total_bill:.2f}")\nprint(f"Each person pays: ${per_person:.2f}")'
        }
      ],
      keyTakeaways: [
        'CPython compiles human-written `.py` source into bytecode (`.pyc`) before executing on the stack-based Python Virtual Machine.',
        'Python enforces 4-space block indentation; colons `:` introduce new execution blocks.',
        '`input()` always returns a `str` and requires explicit casting for arithmetic calculations.',
        'Modern f-strings (`f"{var}"`) provide high-performance, expressive runtime string formatting.'
      ],
      summary: 'You have mastered Python fundamentals, the CPython execution architecture, standard input/output formatting, and built both the CLI Calculator and Number Guessing Game.'
    }
  },

  // ==========================================
  // MODULE 2: Variables, References & Core Data Types
  // ==========================================
  {
    id: 'py-beg-02',
    orderIndex: 2,
    title: 'Module 2: Variables & Data Types',
    description: 'Deep dive into Python object model, heap memory references, id(), type(), scalar types (int, float, str, bool, NoneType), and mutability.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-dt-01', title: 'Python Built-in Types Documentation', type: 'documentation', url: 'https://docs.python.org/3/library/stdtypes.html' }
    ],
    lessonContent: {
      overview: '### "Everything in Python is an Object"\n\nIn languages like C or Rust, a variable is a named memory location on the stack that directly stores raw binary bits (e.g. 4 bytes for an integer). In Python, **variables are reference pointers** to heap-allocated objects.\n\n### The Anatomy of a Python Object in Memory\n\nEvery object allocated by CPython in memory contains at least three core header components:\n\n1. **`ob_refcnt` (Reference Count):** An integer tracking how many variables or data structures currently point to this object in memory.\n2. **`ob_type` (Type Pointer):** A pointer to the type object (e.g. `PyLong_Type`, `PyUnicode_Type`) which dictates the valid operations and behavior.\n3. **Value Payload:** The actual raw data (e.g. integer value, array of unicode characters).\n\nBecause variables are just name tags attached to heap objects, Python variables can point to any type dynamically at runtime.',
      analogyHero: 'Think of objects as helium balloons floating in a room, and variables as name-tag strings tied to those balloons. You can tie multiple strings to the same balloon, or untie a string and tie it to a completely different balloon.',
      objectives: [
        'Understand Python heap object allocation, reference counting, and object identity via `id()` and `is`.',
        'Master the fundamental scalar types: int (arbitrary precision), float (IEEE 754 64-bit), bool, str, and NoneType.',
        'Differentiate between object identity (`is`) and value equality (`==`).',
        'Learn integer caching optimization (interning) and type introspection.'
      ],
      estimatedTime: '30 mins',
      syntaxGuide: 'type(obj)          # Returns object type class\nid(obj)            # Returns memory address integer\nhex(id(obj))       # Memory address in hexadecimal\nx is y             # True if x and y point to identical memory address\nx == y             # True if x and y hold equivalent values',
      sections: [
        {
          id: 'sec-2-1',
          title: 'Memory References, Dynamic Binding & Mutability',
          difficulty: 'Beginner',
          analogy: 'If two people write down the address to the same house on separate sticky notes, changing what is written on one note does not move the house.',
          content: '### 1. Dynamic Typing vs Static Typing\nPython is **dynamically typed** (type checking occurs at runtime) and **strongly typed** (Python will not silently convert incompatible types, such as adding a string to an integer without explicit casting).\n\n### 2. Mutable vs Immutable Objects\n- **Immutable Objects:** Once created in memory, their state cannot be changed. Examples: `int`, `float`, `str`, `tuple`, `bool`, `frozenset`, `bytes`. Modifying an immutable variable creates an entirely new object at a new memory address.\n- **Mutable Objects:** Can have their internal state altered in-place without changing their memory address. Examples: `list`, `dict`, `set`, `bytearray`.\n\n### 3. Integer Interning (CPython Optimization)\nTo maximize speed and save memory, CPython pre-allocates an array of small integer objects for values between **`-5` and `256`** at interpreter startup. Any variable assigned an integer in this range will point to the exact same shared memory address.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_memory_references.py',
              code: '# Exploring Object Identity and CPython Interning\na = 256\nb = 256\nprint(f"a == b (Values Equal): {a == b}")\nprint(f"a is b (Identical Memory): {a is b}")\nprint(f"Memory address of a: {hex(id(a))}")\nprint(f"Memory address of b: {hex(id(b))}")\n\n# Numbers outside the pre-allocated cache (-5 to 256)\nx = 1000\ny = 1000\nprint(f"x == y: {x == y}")\nprint(f"x is y (Distinct heap allocations): {x is y}")',
              explanation: 'Demonstrates value equality vs identity and proves CPython integer caching optimization for small integers.',
              lineByLine: [
                { line: 'a = 256; b = 256', explanation: 'Both variables point to the singleton object 256 in CPython cache.' },
                { line: 'print(f"a is b: {a is b}")', explanation: 'Evaluates to True because both references share the same memory address.' },
                { line: 'x = 1000; y = 1000', explanation: 'Values above 256 allocate two separate PyObject heap structures.' },
                { line: 'print(f"x is y: {x is y}")', explanation: 'Evaluates to False because x and y live at distinct memory locations.' }
              ]
            },
            {
              language: 'python',
              filename: '02_type_introspection.py',
              code: '# Type introspection and truthiness testing\nitems = [\n    42,\n    3.14159,\n    "Skillora AI",\n    True,\n    None,\n    [1, 2, 3]\n]\n\nprint(f"{\'Value\':<15} | {\'Type Name\':<12} | {\'Memory Size (Bytes)\':<20} | {\'Truthiness\'}")\nprint("-" * 65)\nimport sys\nfor item in items:\n    type_name = type(item).__name__\n    byte_size = sys.getsizeof(item)\n    truthy = bool(item)\n    print(f"{str(item):<15} | {type_name:<12} | {byte_size:<20} | {truthy}")',
              explanation: 'Uses Python introspection utilities (`type()`, `sys.getsizeof()`, and `bool()`) to inspect memory consumption and truthiness of core types.',
              lineByLine: [
                { line: 'type_name = type(item).__name__', explanation: 'Extracts the readable string identifier of the object class.' },
                { line: 'byte_size = sys.getsizeof(item)', explanation: 'Measures the complete C struct memory footprint allocated on the heap.' },
                { line: 'truthy = bool(item)', explanation: 'Evaluates whether the value is considered True or False in conditional contexts.' }
              ]
            },
            {
              language: 'python',
              filename: '03_immutability_deep_dive.py',
              code: '# Proving string and number immutability\ncounter = 10\naddr_1 = id(counter)\n\ncounter += 1  # Rebinding variable name to a new integer object (11)\naddr_2 = id(counter)\n\nprint(f"Initial address (10): {hex(addr_1)}")\nprint(f"Address after +1 (11): {hex(addr_2)}")\nprint(f"Did memory address change? {addr_1 != addr_2}")\n\n# In contrast: Mutable list modification in-place\nscores = [90, 85]\nlist_addr_1 = id(scores)\nscores.append(95)  # Modifies internal memory buffer directly\nlist_addr_2 = id(scores)\n\nprint(f"List address before: {hex(list_addr_1)}")\nprint(f"List address after:  {hex(list_addr_2)}")\nprint(f"Did list address stay identical? {list_addr_1 == list_addr_2}")',
              explanation: 'Proves the difference between re-binding immutable objects and in-place mutation of list buffers.',
              lineByLine: [
                { line: 'counter += 1', explanation: 'Creates a new int(11) object and points counter to it; int(10) is unchanged.' },
                { line: 'scores.append(95)', explanation: 'Appends to the existing array buffer without re-allocating the list container object.' },
                { line: 'list_addr_1 == list_addr_2', explanation: 'Evaluates to True, confirming list mutability.' }
              ]
            }
          ],
          commonMistakes: [
            'Using `is` for value equality: Never write `if status is "ACTIVE":`. Use `==` for values. `is` checks memory address and can fail unpredictably for strings and large numbers.',
            'Assuming `float` arithmetic is perfectly exact: Due to IEEE 754 binary floating-point representation, `0.1 + 0.2 == 0.3` is `False` (`0.30000000000000004`). Use `math.isclose()` or `decimal.Decimal` for financial math.'
          ],
          proTip: 'Use Python\'s `isinstance(obj, (int, float))` rather than `type(obj) == int` to properly support subclasses and multiple allowed numeric types.',
          miniPractice: {
            question: 'What does `print(0.1 + 0.2 == 0.3)` output in Python and why?',
            options: [
              '`True`, because Python automatically corrects binary rounding issues',
              '`False`, due to IEEE 754 binary floating-point rounding precision (`0.30000000000000004`)',
              '`SyntaxError`',
              '`None`'
            ],
            correctAnswer: 1,
            explanation: 'Computers represent floats in base-2 binary fractions. 0.1 and 0.2 cannot be represented with exact finite binary precision, resulting in 0.30000000000000004, which does not exactly equal 0.3.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Safe Financial Price Calculator with Decimal',
          instructions: 'Calculate the total price of purchasing 3 items costing $19.99 with an 8.25% sales tax using Python\'s `decimal.Decimal` module to avoid float precision errors.',
          starterCode: 'from decimal import Decimal\n\nitem_price = Decimal("19.99")\nquantity = 3\ntax_rate = Decimal("0.0825")\n\n# Compute subtotal, tax, and total formatted to 2 decimals',
          solutionCode: 'from decimal import Decimal, ROUND_HALF_UP\n\nitem_price = Decimal("19.99")\nquantity = Decimal("3")\ntax_rate = Decimal("0.0825")\n\nsubtotal = item_price * quantity\ntax_amount = (subtotal * tax_rate).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)\ntotal = subtotal + tax_amount\n\nprint(f"Subtotal: ${subtotal:.2f}")\nprint(f"Tax:      ${tax_amount:.2f}")\nprint(f"Total:    ${total:.2f}")'
        }
      ],
      keyTakeaways: [
        'Variables are lightweight pointers to heap-allocated objects containing reference counts and type metadata.',
        'Primitive types (int, float, str, bool) are immutable; collections like lists and dicts are mutable.',
        '`==` compares data values; `is` compares memory addresses (object identity).',
        'CPython caches small integers (-5 to 256) and interned string literals for performance.'
      ],
      summary: 'You have mastered the Python object model, memory pointers, type inspection, mutability rules, and floating-point precision caveats.'
    }
  },

  // ==========================================
  // MODULE 3: Operators & Expressions
  // ==========================================
  {
    id: 'py-beg-03',
    orderIndex: 3,
    title: 'Module 3: Operators & Expressions',
    description: 'Master arithmetic, comparison, logical short-circuiting, bitwise operations, identity/membership checks, and operator precedence rules.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-op-01', title: 'Python Expressions & Operator Precedence', type: 'documentation', url: 'https://docs.python.org/3/reference/expressions.html' }
    ],
    lessonContent: {
      overview: '### Mathematical & Logical Computation in Python\n\nOperators are special symbolic tokens that instruct the Python Virtual Machine to perform arithmetic, bit manipulation, boolean decisions, or reference comparisons on operands.\n\n### Operator Hierarchy and Short-Circuit Evaluation\n\nWhen multiple operators appear in a single expression, Python resolves them according to strict **Operator Precedence Rules**:\n1. Parentheses `()` (Highest precedence)\n2. Exponentiation `**` (Evaluated right-to-left! `2**3**2` is `2**9 = 512`)\n3. Unary signs `+x`, `-x`, `~x`\n4. Multiplication `*`, Division `/`, Floor Division `//`, Modulo `%`\n5. Addition `+`, Subtraction `-`\n6. Bitwise shifts `<<`, `>>`\n7. Bitwise AND `&`, XOR `^`, OR `|`\n8. Comparisons (`==`, `!=`, `<`, `<=`, `>`, `>=`), Identity (`is`, `is not`), Membership (`in`, `not in`)\n9. Logical `not`\n10. Logical `and`\n11. Logical `or` (Lowest precedence)',
      analogyHero: 'Think of operator precedence like the grammar rules of mathematics (PEMDAS). Without punctuation and clear precedence rules, sentences and equations would be completely ambiguous.',
      objectives: [
        'Master all arithmetic operators including floor division `//` and exponentiation `**`.',
        'Understand short-circuit evaluation in `and` / `or` expressions for fast, safe code execution.',
        'Apply bitwise operators (`&`, `|`, `^`, `~`, `<<`, `>>`) for low-level flag management.',
        'Use membership (`in`) and chained comparisons (`10 < x < 50`) cleanly.'
      ],
      estimatedTime: '30 mins',
      syntaxGuide: 'a // b             # Floor division (integer quotient)\na % b              # Modulo (remainder)\na ** b             # Exponentiation (a to the power b)\n10 <= age <= 65    # Chained relational comparison\nx and y            # Short-circuit logical AND\nx or y             # Short-circuit logical OR',
      sections: [
        {
          id: 'sec-3-1',
          title: 'Arithmetic, Short-Circuiting & Bitwise Operations',
          difficulty: 'Beginner',
          analogy: 'Short-circuiting is like an electrical fuse: if the first condition in an `and` statement is False, Python trips the breaker and never wastes time checking the second condition.',
          content: '### 1. Division Nuances in Python 3\n- **True Division (`/`):** Always returns a floating-point number, even if evenly divisible (`10 / 2` -> `5.0`).\n- **Floor Division (`//`):** Rounds down towards negative infinity (`17 // 4` -> `4`, while `-17 // 4` -> `-5`).\n- **Modulo (`%`):** Computes remainder (`17 % 4` -> `1`).\n\n### 2. Logical Short-Circuiting Mechanics\nIn Python, logical operators do not merely return boolean `True` or `False`—they return the **actual operand value** that determined the result:\n- `A and B`: If `A` is falsy, returns `A` immediately (without evaluating `B`). If `A` is truthy, returns `B`.\n- `A or B`: If `A` is truthy, returns `A` immediately (without evaluating `B`). If `A` is falsy, returns `B`.\n\n### 3. Bitwise Manipulation\nOperates directly on binary bit representations: `&` (AND), `|` (OR), `^` (XOR), `~` (NOT / two\'s complement), `<<` (left shift / multiply by 2), `>>` (right shift / divide by 2).',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_operators_mastery.py',
              code: '# Floor division vs True division\nprint(f"17 / 4  = {17 / 4} (float)")\nprint(f"17 // 4 = {17 // 4} (int floor)")\nprint(f"-17 // 4 = {-17 // 4} (floored toward negative infinity)")\n\n# Chained comparison expressions (Pythonic syntax)\nuser_age = 28\nis_working_age = 18 <= user_age <= 65\nprint(f"Is {user_age} working age? {is_working_age}")',
              explanation: 'Demonstrates true division vs floor division and Python\'s chained comparison syntax.',
              lineByLine: [
                { line: '17 // 4', explanation: 'Floors 4.25 down to integer 4.' },
                { line: '-17 // 4', explanation: 'Floors -4.25 down to -5 (towards negative infinity).' },
                { line: '18 <= user_age <= 65', explanation: 'Chained comparison equivalent to (18 <= user_age) and (user_age <= 65).' }
              ]
            },
            {
              language: 'python',
              filename: '02_short_circuit_guard.py',
              code: '# Safe guard clauses using short-circuit evaluation\ndef process_record(data: dict):\n    # If data is None or missing "user", right-side is never evaluated (no crash!)\n    username = data and data.get("user") or "Anonymous Guest"\n    return f"Processing session for: {username}"\n\nprint(process_record(None))\nprint(process_record({}))\nprint(process_record({"user": "Amir_Engineer"}))',
              explanation: 'Demonstrates how short-circuit evaluation allows safe fallback values without raising AttributeError or KeyError.',
              lineByLine: [
                { line: 'username = data and data.get("user") or "Anonymous Guest"', explanation: 'Safely extracts username with fallback if data is falsy or missing.' },
                { line: 'process_record(None)', explanation: 'Stops at data (None) and falls back to "Anonymous Guest" safely.' }
              ]
            },
            {
              language: 'python',
              filename: '03_bitwise_flags.py',
              code: '# Bitwise permission flags (Linux / File permissions model)\nREAD_PERMISSION    = 0b100  # 4 in decimal\nWRITE_PERMISSION   = 0b010  # 2 in decimal\nEXECUTE_PERMISSION = 0b001  # 1 in decimal\n\n# Combine permissions using bitwise OR (|)\nuser_perms = READ_PERMISSION | WRITE_PERMISSION  # 0b110 (6)\n\n# Check permission using bitwise AND (&)\ncan_read = (user_perms & READ_PERMISSION) != 0\ncan_execute = (user_perms & EXECUTE_PERMISSION) != 0\n\nprint(f"User Permission Mask: {bin(user_perms)} ({user_perms})")\nprint(f"Can Read? {can_read}")\nprint(f"Can Execute? {can_execute}")',
              explanation: 'Shows real-world systems engineering bitwise operations using bit masks for security permissions.',
              lineByLine: [
                { line: 'user_perms = READ_PERMISSION | WRITE_PERMISSION', explanation: 'Bitwise OR combines distinct bit flags into a single integer mask.' },
                { line: 'can_read = (user_perms & READ_PERMISSION) != 0', explanation: 'Bitwise AND isolates the specific target bit to check authorization.' }
              ]
            }
          ],
          commonMistakes: [
            'Confusing bitwise `&`/`|` with logical `and`/`or`: Writing `if a & b:` performs bit-level AND on integers rather than boolean short-circuit logic.',
            'Misunderstanding right-to-left associativity of exponentiation: `2 ** 3 ** 2` is evaluated as `2 ** (3 ** 2) = 2 ** 9 = 512`, NOT `(2 ** 3) ** 2 = 64`.'
          ],
          proTip: 'Use parentheses to make complex boolean logic unambiguous. Explicit clarity is always preferred over memorizing operator precedence tables.',
          miniPractice: {
            question: 'What is the evaluated output of the expression `"" or [0] and "Python"`?',
            options: [
              '`""` (empty string)',
              '`[0]`',
              '`"Python"`',
              '`False`'
            ],
            correctAnswer: 2,
            explanation: 'Precedence: `and` executes before `or`. `[0]` is truthy (non-empty list), so `[0] and "Python"` evaluates to `"Python"`. Then `"" or "Python"` evaluates to `"Python"` because `""` is falsy.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Leap Year Century Validator',
          instructions: 'Write an expression that checks if a year is a leap year: A year is a leap year if it is divisible by 4, EXCEPT century years (ending in 00) which must also be divisible by 400.',
          starterCode: 'year = int(input("Enter year: "))\n\n# Write leap year boolean logic\nis_leap_year = False',
          solutionCode: 'year = int(input("Enter year: "))\n\nis_leap_year = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)\nprint(f"Is {year} a leap year? {is_leap_year}")'
        }
      ],
      keyTakeaways: [
        'Floor division `//` rounds down toward negative infinity; true division `/` always returns a float.',
        'Logical operators (`and`, `or`) short-circuit and return the operand value that determined the outcome.',
        'Exponentiation `**` associates right-to-left.',
        'Bitwise operators allow compact binary flag checking and masking.'
      ],
      summary: 'You have mastered Python operator types, precedence hierarchy, short-circuit evaluation patterns, and bitwise manipulation.'
    }
  },

  // ==========================================
  // MODULE 4: Conditions & Decision Logic
  // ==========================================
  {
    id: 'py-beg-04',
    orderIndex: 4,
    title: 'Module 4: Conditions & Decision Logic',
    description: 'Master decision trees, if-elif-else ladders, truthy vs falsy values, ternary conditional expressions, and clean guard clauses.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-cond-01', title: 'Python Control Flow Documentation', type: 'documentation', url: 'https://docs.python.org/3/tutorial/controlflow.html' }
    ],
    lessonContent: {
      overview: '### Directing the Flow of Execution\n\nPrograms must make dynamic decisions based on user input, system state, and data conditions. Python provides clean conditional branching via `if`, `elif`, and `else` constructs.\n\n### The Mechanics of Truthiness and Falsiness\n\nIn Python, any object can be tested for truth value inside an `if` statement without needing explicit comparisons like `if len(items) > 0:`. CPython evaluates truth value by checking the object\'s `__bool__()` or `__len__()` methods.\n\n**Built-in Falsy Objects (Everything else is Truthy):**\n- Constants: `None`, `False`\n- Numeric Zeros: `0`, `0.0`, `0j`, `Decimal(0)`, `Fraction(0, 1)`\n- Empty Sequences/Collections: `""` (empty str), `()` (empty tuple), `[]` (empty list), `{}` (empty dict), `set()` (empty set), `range(0)`',
      analogyHero: 'Think of an if-elif-else ladder like a railroad switch track: a train rolls down the track and switches onto the very first open route it encounters. Once it enters a branch, all other switches on that ladder are bypassed.',
      objectives: [
        'Master the execution order of `if-elif-else` branches.',
        'Understand Python truthiness rules and write idiomatic boolean conditions.',
        'Use single-line ternary expressions (`x if cond else y`) for clean variable assignment.',
        'Structure code with Guard Clauses to prevent deeply nested "arrow anti-patterns".'
      ],
      estimatedTime: '25 mins',
      syntaxGuide: 'if condition:\n    # Branch 1\nelif other_condition:\n    # Branch 2\nelse:\n    # Default fallback\n\n# Ternary conditional expression\nstatus = "Adult" if age >= 18 else "Minor"',
      sections: [
        {
          id: 'sec-4-1',
          title: 'Branching, Truthiness & Guard Clauses',
          difficulty: 'Beginner',
          analogy: 'Guard clauses are like security bouncers at the entrance of a building: they inspect credentials and turn invalid visitors away immediately at the door rather than letting them wander through multiple hallways.',
          content: '### 1. Sequential Evaluation & Mutual Exclusivity\nIn an `if-elif-else` chain, Python evaluates conditions from top to bottom. As soon as a branch condition evaluates to truthy, its block executes and the entire construct immediately terminates. Subsequent `elif` blocks are never checked.\n\n### 2. Pythonic Truthiness Checks\nInstead of writing cumbersome verbose checks:\n- Non-Pythonic: `if len(users_list) == 0:` or `if is_authenticated == True:`\n- Pythonic: `if not users_list:` or `if is_authenticated:`\n\n### 3. Guard Clauses (Early Return Pattern)\nDeeply nested `if` statements create hard-to-maintain "arrow code". Guard clauses test for failure conditions first and exit early, keeping the main happy path at the lowest indentation level.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_truthiness_patterns.py',
              code: '# Pythonic truthiness in action\ndef notify_user(username: str, notifications: list):\n    # Empty string or empty list evaluate directly to False\n    if not username:\n        print("⚠️ No valid user specified.")\n        return\n        \n    if notifications:\n        print(f"🔔 {username} has {len(notifications)} unread alerts.")\n    else:\n        print(f"✨ {username} has a clean inbox!")\n\nnotify_user("", [])\nnotify_user("Amir", ["Task Assigned", "Build Passed"])\nnotify_user("Sarah", [])',
              explanation: 'Uses Python\'s built-in truthiness evaluation to write clean notification routing.',
              lineByLine: [
                { line: 'if not username:', explanation: 'Checks for empty string "" or None in a single clean expression.' },
                { line: 'if notifications:', explanation: 'Evaluates to True if list contains 1+ elements, False if empty.' }
              ]
            },
            {
              language: 'python',
              filename: '02_ternary_expressions.py',
              code: '# Ternary expression for concise assignments\naccount_balance = 2450.75\nwithdrawal_amount = 500.00\n\ntransaction_status = (\n    "APPROVED"\n    if account_balance >= withdrawal_amount\n    else "REJECTED: Insufficient Funds"\n)\n\nprint(f"Transaction Status: {transaction_status}")',
              explanation: 'Uses ternary expressions (`value_if_true if condition else value_if_false`) for clean inline assignments.',
              lineByLine: [
                { line: 'transaction_status = "APPROVED" if ... else "REJECTED..."', explanation: 'Assigns approval or rejection string based on single-line condition.' }
              ]
            },
            {
              language: 'python',
              filename: '03_guard_clause_refactoring.py',
              code: '# Clean architectural pattern: Guard Clauses vs Nested Arrows\ndef process_refund(order: dict, is_admin: bool) -> str:\n    # Guard Clause 1: Verify admin authorization\n    if not is_admin:\n        return "Error 403: Admin privileges required."\n        \n    # Guard Clause 2: Verify order object exists\n    if not order:\n        return "Error 400: Missing order payload."\n        \n    # Guard Clause 3: Verify refund eligibility\n    if order.get("status") != "DELIVERED":\n        return "Error 422: Only delivered items can be refunded."\n        \n    # Happy path: Clean, flat, un-nested logic\n    amount = order.get("amount", 0.0)\n    return f"Success: Refunded ${amount:.2f} for Order #{order.get(\'id\')}"\n\nprint(process_refund({"id": 101, "status": "DELIVERED", "amount": 89.99}, is_admin=True))\nprint(process_refund({"id": 102, "status": "PENDING", "amount": 40.00}, is_admin=True))',
              explanation: 'Demonstrates professional guard clause structure eliminating nested indentation.',
              lineByLine: [
                { line: 'if not is_admin: return ...', explanation: 'Rejects unauthorized requests immediately.' },
                { line: 'if order.get("status") != "DELIVERED": return ...', explanation: 'Rejects unfulfilled order refunds before processing.' },
                { line: 'return f"Success: Refunded..."', explanation: 'Main business logic executes cleanly with 0 nested if statements.' }
              ]
            }
          ],
          commonMistakes: [
            'Using `if x == True:`: In Python, `1 == True` evaluates to True, but `x is True` or simply `if x:` is much cleaner and avoids subtle type coercion bugs.',
            'Writing multiple independent `if` statements instead of `elif`: Independent `if` statements each evaluate separately, potentially executing multiple unintended actions.'
          ],
          proTip: 'Prefer guard clauses with early returns over deeply nested `if/else` structures. It keeps your code flat and drastically reduces cyclomatic complexity.',
          miniPractice: {
            question: 'Which of the following values evaluates to `True` when tested in an `if` condition?',
            options: [
              '`[]` (empty list)',
              '`"0"` (string containing character zero)',
              '`0` (integer zero)',
              '`None`'
            ],
            correctAnswer: 1,
            explanation: 'Any non-empty string in Python is truthy, even if it contains `"0"` or `"False"`. Empty collections, integer 0, and None are falsy.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'E-Commerce Shipping & Discount Tier Calculator',
          instructions: 'Calculate final order cost based on tiers: Orders over $100 get free shipping ($0) and a 10% discount. Orders between $50-$100 get $5 shipping and 5% discount. Orders under $50 pay $10 shipping with no discount.',
          starterCode: 'order_subtotal = float(input("Order Subtotal ($): "))\n\n# Calculate discount, shipping, and total',
          solutionCode: 'order_subtotal = float(input("Order Subtotal ($): "))\n\nif order_subtotal > 100:\n    discount = order_subtotal * 0.10\n    shipping = 0.0\nelif order_subtotal >= 50:\n    discount = order_subtotal * 0.05\n    shipping = 5.0\nelse:\n    discount = 0.0\n    shipping = 10.0\n\nfinal_total = order_subtotal - discount + shipping\nprint(f"Subtotal: ${order_subtotal:.2f}")\nprint(f"Discount: -${discount:.2f}")\nprint(f"Shipping: +${shipping:.2f}")\nprint(f"Final Total: ${final_total:.2f}")'
        }
      ],
      keyTakeaways: [
        '`if-elif-else` branches evaluate sequentially and exit on the first truthy condition.',
        'Empty collections, `0`, `None`, and `False` are falsy; non-empty strings/containers and non-zero numbers are truthy.',
        'Use guard clauses (early returns) to eliminate deep nesting and simplify error handling.',
        'Use ternary syntax `a if cond else b` for concise conditional assignment.'
      ],
      summary: 'You have mastered Python conditional branching, truthiness evaluation, guard clauses, and ternary expressions.'
    }
  },

  // ==========================================
  // MODULE 5: Loops & Iteration Flow
  // ==========================================
  {
    id: 'py-beg-05',
    orderIndex: 5,
    title: 'Module 5: Loops & Iteration Flow',
    description: 'Master for loops, while loops, range(), enumerate(), zip(), loop control (break, continue, pass), and the unique loop else clause.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-loop-01', title: 'Python Iteration & range Documentation', type: 'documentation', url: 'https://docs.python.org/3/tutorial/controlflow.html#for-statements' }
    ],
    lessonContent: {
      overview: '### The Iteration Protocol in Python\n\nIn many legacy languages, a `for` loop is an index counter (`for (int i=0; i<N; i++)`). In Python, **all for loops are for-each iterator loops**. They consume items directly from any iterable object (lists, strings, tuples, dictionaries, generators, file handles).\n\n### The Python Iterator Protocol Under the Hood\n\nWhen you execute `for item in collection:`, CPython performs the following behind the scenes:\n1. Calls `iter(collection)` which requests the object\'s iterator via `__iter__()`.\n2. In each iteration loop step, calls `next(iterator)` via `__next__()` to retrieve the next value.\n3. Catches the internal `StopIteration` exception when items are exhausted and terminates cleanly.',
      analogyHero: 'Think of a for-loop like an automated conveyor belt at an airport luggage carousel: each suitcase (item) arrives at your hands one-by-one until the belt is empty.',
      objectives: [
        'Master sequence iteration using `for item in iterable:`.',
        'Use `range(start, stop, step)` for numeric progression without allocating full lists in memory.',
        'Pair items efficiently using `enumerate()` for indexed loops and `zip()` for parallel sequences.',
        'Understand loop control: `break`, `continue`, `pass`, and the unique Python `for...else` construct.'
      ],
      estimatedTime: '30 mins',
      syntaxGuide: 'for i in range(start, stop, step):  # Numeric loop\nfor idx, item in enumerate(items): # Index + Value\nfor a, b in zip(list_a, list_b):   # Parallel pairing\nwhile condition:\n    # Indefinite loop\n    if stop: break\nelse:\n    # Runs ONLY if loop completed without break!',
      sections: [
        {
          id: 'sec-5-1',
          title: 'Iterables, Loop Control & The Loop Else Clause',
          difficulty: 'Beginner',
          analogy: 'The loop `else` clause is like a search party: if you search the entire forest and do NOT find what you are looking for (no `break`), the `else` block announces "Search completed, nothing found."',
          content: '### 1. `range()` is a Lazy Sequence Type\nIn Python 3, `range(1_000_000)` does not allocate 1 million integers in RAM! It is a lightweight sequence object that computes values on-demand in $O(1)$ memory.\n\n### 2. Modern Iteration Utilities\n- `enumerate(iterable, start=0)`: Yields `(index, item)` tuples, eliminating manual counter variables.\n- `zip(*iterables)`: Aggregates elements from multiple iterables in lockstep, terminating when the shortest sequence is exhausted.\n\n### 3. Loop Control Statements\n- `break`: Immediately terminates the innermost loop.\n- `continue`: Skips the remainder of the current iteration and jumps to the next.\n- `pass`: A null-operation placeholder where syntax requires a statement.\n- **`for...else` / `while...else`:** The `else` block executes **only if the loop ran to completion without hitting a `break` statement**.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_iteration_tools.py',
              code: '# Modern Python iteration tools: enumerate and zip\nstudents = ["Alice", "Bob", "Charlie"]\nscores = [95, 88, 92]\n\nprint("=== Class Rankings (enumerate) ===")\nfor rank, student in enumerate(students, start=1):\n    print(f"Rank #{rank}: {student}")\n\nprint("\\n=== Grade Pairing (zip) ===")\nfor student, score in zip(students, scores):\n    print(f"Student: {student:<10} | Score: {score}/100")',
              explanation: 'Demonstrates `enumerate()` with custom 1-based indexing and `zip()` for synchronized multi-list traversal.',
              lineByLine: [
                { line: 'for rank, student in enumerate(students, start=1):', explanation: 'Unpacks auto-incrementing rank counter and student name simultaneously.' },
                { line: 'for student, score in zip(students, scores):', explanation: 'Pairs elements from both lists at matching indices in lockstep.' }
              ]
            },
            {
              language: 'python',
              filename: '02_for_else_search.py',
              code: '# Searching with the for...else construct (No boolean flags needed!)\ndef find_prime_in_range(numbers: list, target_prime: int):\n    for num in numbers:\n        if num == target_prime:\n            print(f"Found target prime {target_prime} in dataset!")\n            break  # Exits loop, skipping the else block\n    else:\n        # Executes ONLY if loop finished without encountering a break!\n        print(f"Target prime {target_prime} was NOT found in the dataset.")\n\nfind_prime_in_range([2, 3, 5, 7, 11, 13], target_prime=7)\nfind_prime_in_range([2, 3, 5, 7, 11, 13], target_prime=19)',
              explanation: 'Uses Python\'s unique `for...else` pattern to handle search completions without needing temporary boolean flag variables.',
              lineByLine: [
                { line: 'if num == target_prime: ... break', explanation: 'Hits break when item is located, bypassing the else clause.' },
                { line: 'else: print("Target was NOT found...")', explanation: 'Executes when entire sequence is scanned without any match.' }
              ]
            },
            {
              language: 'python',
              filename: '03_retry_backoff_loop.py',
              code: '# Real-world engineering: While loop with retry limit and simulated backoff\nimport time\n\ndef connect_to_database(max_retries: int = 4):\n    attempt = 0\n    while attempt < max_retries:\n        attempt += 1\n        print(f"Connection attempt {attempt}/{max_retries}...")\n        \n        # Simulate success on attempt 3\n        if attempt == 3:\n            print("✅ Database connection established successfully.")\n            return True\n            \n        print("⚠️ Connection timed out. Retrying...")\n    \n    print("❌ Failed to connect after maximum retries.")\n    return False\n\nconnect_to_database()',
              explanation: 'A production while-loop retry mechanism managing state, iteration boundaries, and error recovery.',
              lineByLine: [
                { line: 'while attempt < max_retries:', explanation: 'Guards against infinite loops by enforcing a maximum attempt cap.' },
                { line: 'if attempt == 3: return True', explanation: 'Early returns on success, releasing system resources.' }
              ]
            }
          ],
          commonMistakes: [
            'Modifying a list while iterating over it: Writing `for x in my_list: my_list.remove(x)` causes skipped elements because the internal iteration index advances while the list shrinks. Iterate over a copy: `for x in my_list.copy():`.',
            'Confusing `for...else` with `if...else`: In a loop, `else` means "no break occurred", not "condition was initially false".'
          ],
          proTip: 'Never use manual index counters like `i = 0; for x in list: i += 1`. Always use `for i, x in enumerate(list):`.',
          miniPractice: {
            question: 'When does the `else` block of a `for` loop execute in Python?',
            options: [
              'Whenever the loop encounters a `break` statement',
              'Whenever the loop completes all iterations normally without hitting a `break`',
              'Only when the iterable collection is completely empty',
              'After every single iteration of the loop'
            ],
            correctAnswer: 1,
            explanation: 'The loop `else` clause executes when the loop finishes exhausting the iterable naturally, but is skipped if the loop was terminated by a `break`.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Matrix Transposition with Nested Loops',
          instructions: 'Given a 2D matrix (list of lists), write nested loops to compute its transpose (swap rows and columns).',
          starterCode: 'matrix = [\n    [1, 2, 3],\n    [4, 5, 6]\n]\n# Expected transpose: [[1, 4], [2, 5], [3, 6]]',
          solutionCode: 'matrix = [\n    [1, 2, 3],\n    [4, 5, 6]\n]\n\nrows = len(matrix)\ncols = len(matrix[0])\ntransposed = []\n\nfor c in range(cols):\n    new_row = []\n    for r in range(rows):\n        new_row.append(matrix[r][c])\n    transposed.append(new_row)\n\nprint("Original:", matrix)\nprint("Transposed:", transposed)'
        }
      ],
      keyTakeaways: [
        'Python for-loops operate directly on iterables via the Iterator Protocol (`__iter__`, `__next__`).',
        '`range()` generates numbers on-demand with $O(1)$ memory usage.',
        'Use `enumerate()` for index-value pairs and `zip()` to iterate multiple sequences simultaneously.',
        'The loop `else` clause triggers only when a loop finishes without hitting `break`.'
      ],
      summary: 'You have mastered Python iteration protocols, range generators, enumerate, zip, loop control statements, and loop-else mechanics.'
    }
  },

  // ==========================================
  // MODULE 6: Strings & Text Processing
  // ==========================================
  {
    id: 'py-beg-06',
    orderIndex: 6,
    title: 'Module 6: Strings & Text Processing',
    description: 'Master string immutability, Unicode UTF-8 representation, slicing [start:stop:step], string methods, and modern f-string interpolation.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-str-01', title: 'Python String Methods Documentation', type: 'documentation', url: 'https://docs.python.org/3/library/stdtypes.html#string-methods' }
    ],
    lessonContent: {
      overview: '### Text Representation and Unicode Architecture\n\nIn Python 3, all strings (`str`) are immutable sequences of **Unicode code points**. Unlike Python 2 which used raw ASCII bytes, Python 3 natively supports every world language, emojis, and mathematical symbols.\n\n### CPython Flexible String Representation (PEP 393)\n\nTo prevent Unicode strings from consuming excessive memory (e.g. 4 bytes per character for pure ASCII text), CPython dynamically stores strings in memory using the most compact encoding suitable for its characters:\n- **Latin-1 (1 byte/char):** For pure ASCII / Western European text.\n- **UCS-2 (2 bytes/char):** For strings containing characters from the Basic Multilingual Plane.\n- **UCS-4 (4 bytes/char):** For strings containing emojis or rare scripts.\n\nThis guarantees constant-time $O(1)$ random character access by index `s[i]` regardless of encoding complexity!',
      analogyHero: 'Think of a Python string like an engraved granite plaque: you can read any letter by counting from the left or right, but you can never erase or change a letter on the plaque. To change text, you must carve a brand new plaque.',
      objectives: [
        'Master sequence indexing (positive and negative) and slice notation `[start:stop:step]`.',
        'Learn essential string manipulation methods: `.split()`, `.join()`, `.replace()`, `.strip()`, `.find()`.',
        'Understand string immutability and memory allocation impacts.',
        'Master formatted string literals (f-strings) with alignment, padding, and numeric precision specifiers.'
      ],
      estimatedTime: '30 mins',
      syntaxGuide: 'text[0]              # First character\ntext[-1]             # Last character\ntext[1:5]            # Slice from index 1 to 4\ntext[::-1]           # Reverse entire string\n", ".join(words)     # High-performance string concatenation\nf"{val:0.2f}"        # 2 decimal places\nf"{val:>10}"         # Right-align padded to 10 chars',
      sections: [
        {
          id: 'sec-6-1',
          title: 'Slicing, Unicode Internals & High-Performance Formatting',
          difficulty: 'Beginner',
          analogy: 'Using `+` in a loop to build a long string is like rebuilding an entire house every time you add a single brick. Using `"".join()` gathers all bricks first and builds the house once in a single efficient operation.',
          content: '### 1. Advanced Sequence Slicing (`[start:stop:step]`)\n- `start`: Inclusive starting index (defaults to 0).\n- `stop`: Exclusive ending index (defaults to string length).\n- `step`: Stride step count. Negative step reverses direction (`[::-1]`).\n\n### 2. High-Performance String Concatenation (`.join()` vs `+`)\nBecause strings are immutable, using `text += word` inside a loop repeatedly allocates new memory buffers in $O(N^2)$ time. The professional approach is appending fragments to a list and calling `"".join(fragments)` which allocates memory once in $O(N)$ linear time.\n\n### 3. F-String Formatting Power\nIntroduced in PEP 498, f-strings evaluate arbitrary expressions at runtime with direct bytecode instructions: `f"{price * tax:.2f}"`, date formatting `f"{today:%Y-%m-%d}"`, and alignment `f"{name:<15}"`.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_slicing_and_indexing.py',
              code: '# Sequence Slicing Mastery\nlog_entry = "2026-09-11 [ERROR] Database connection failed"\n\ntimestamp = log_entry[0:10]      # Slice start to 10 (exclusive)\nlevel = log_entry[12:17]          # Slice ERROR tag\nmessage = log_entry[19:]          # Slice from index 19 to end\nreversed_msg = message[::-1]      # Reverse using negative step -1\n\nprint(f"Timestamp: {timestamp}")\nprint(f"Log Level: {level}")\nprint(f"Message:   {message}")\nprint(f"Reversed:  {reversed_msg}")',
              explanation: 'Extracts substrings using index slicing boundaries and demonstrates sequence reversal with negative steps.',
              lineByLine: [
                { line: 'timestamp = log_entry[0:10]', explanation: 'Extracts characters from index 0 through 9 (2026-09-11).' },
                { line: 'message = log_entry[19:]', explanation: 'Extracts from index 19 through the remainder of the string.' },
                { line: 'reversed_msg = message[::-1]', explanation: 'Traverses backwards by step -1, reversing the sequence.' }
              ]
            },
            {
              language: 'python',
              filename: '02_string_methods_pipeline.py',
              code: '# Data cleaning pipeline using string methods\nraw_csv_row = "  alice@skillora.ai ,  Engineering ,  Senior Lead  \\n"\n\n# Clean whitespace, split on delimiter, and normalize\nclean_fields = [field.strip().lower() for field in raw_csv_row.split(",") if field.strip()]\nemail, department, role = clean_fields\n\n# Check domain using .endswith()\nis_company_email = email.endswith("@skillora.ai")\n\nprint(f"Email: {email} (Valid Org: {is_company_email})")\nprint(f"Department: {department.title()} | Role: {role.title()}")',
              explanation: 'Uses `.split()`, `.strip()`, `.endswith()`, and `.title()` in a data normalization workflow.',
              lineByLine: [
                { line: 'raw_csv_row.split(",")', explanation: 'Splits delimited text into a list of substring tokens.' },
                { line: 'email.endswith("@skillora.ai")', explanation: 'Verifies string suffix without complex regular expressions.' }
              ]
            },
            {
              language: 'python',
              filename: '03_fstring_formatting.py',
              code: '# Professional f-string alignment, padding, and precision\ninvoice_items = [\n    ("Cloud Compute Server", 1, 149.50),\n    ("PostgreSQL Managed DB", 2, 49.99),\n    ("Domain SSL Certificate", 1, 12.00)\n]\n\nprint(f"{\'Item Description\':<25} | {\'Qty\':<4} | {\'Price ($)\':>10} | {\'Total ($)\':>10}")\nprint("=" * 60)\n\ngrand_total = 0.0\nfor desc, qty, price in invoice_items:\n    line_total = qty * price\n    grand_total += line_total\n    print(f"{desc:<25} | {qty:<4} | {price:>10.2f} | {line_total:>10.2f}")\n\nprint("-" * 60)\nprint(f"{\'GRAND TOTAL:\':<43} | ${grand_total:>9.2f}")',
              explanation: 'Generates tabular CLI report using f-string alignment (`<` left, `>` right) and fixed-point numeric precision (`.2f`).',
              lineByLine: [
                { line: 'f"{desc:<25} | {qty:<4}..."', explanation: 'Left-aligns description to 25 chars and quantity to 4 chars.' },
                { line: 'f"{price:>10.2f}"', explanation: 'Right-aligns float formatted to 2 decimal places in a 10-char column.' }
              ]
            }
          ],
          commonMistakes: [
            'Attempting item assignment on strings: `s = "hello"; s[0] = "H"` raises `TypeError: \'str\' object does not support item assignment`. Strings are immutable; use `s = "H" + s[1:]` or `.replace()`.',
            'Using `+` concatenation inside large loops: Concatenating strings in a loop creates $O(N^2)$ memory pressure. Always collect in a list and use `"".join(list)`.'
          ],
          proTip: 'Use `.startswith()` and `.endswith()` with tuples to check multiple prefixes/suffixes at once: `filename.endswith((".png", ".jpg", ".webp"))`.',
          miniPractice: {
            question: 'What is the output of `"Skillora AI"[::-1]` in Python?',
            options: [
              '`"Skillora AI"`',
              '`"IA arollikS"`',
              '`"AI Skillora"`',
              '`IndexError`'
            ],
            correctAnswer: 1,
            explanation: 'Slice notation `[::-1]` specifies a negative step of -1 with default start and stop boundaries, which reverses the entire string.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Palindrome & Anagram Checker',
          instructions: 'Write a function that cleans a sentence (removes spaces, punctuation, converts to lowercase) and returns whether it is a palindrome (reads identical forwards and backwards).',
          starterCode: 'def is_palindrome(text: str) -> bool:\n    # Clean and check text\n    pass\n\nprint(is_palindrome("A man, a plan, a canal: Panama")) # Should be True',
          solutionCode: 'def is_palindrome(text: str) -> bool:\n    cleaned = "".join(char.lower() for char in text if char.isalnum())\n    return cleaned == cleaned[::-1]\n\nprint(is_palindrome("A man, a plan, a canal: Panama")) # True\nprint(is_palindrome("Skillora AI"))                   # False'
        }
      ],
      keyTakeaways: [
        'Strings are immutable sequences of Unicode characters stored in compact memory formats (PEP 393).',
        'Slicing `[start:stop:step]` allows fast substring extraction and sequence reversal without mutations.',
        'Use `"".join()` for $O(N)$ string construction instead of $O(N^2)$ `+` concatenation in loops.',
        'F-strings provide high-performance runtime string formatting, alignment, and precision control.'
      ],
      summary: 'You have mastered Python string immutability, Unicode internals, slice notation, string methods, and f-string formatting.'
    }
  },

  // ==========================================
  // MODULE 7: Lists & Dynamic Arrays
  // ==========================================
  {
    id: 'py-beg-07',
    orderIndex: 7,
    title: 'Module 7: Lists & Dynamic Arrays',
    description: 'Master dynamic array buffers, amortized O(1) appending, list methods, slicing, list comprehensions, and shallow vs deep copy.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-list-01', title: 'Python List Data Structure Documentation', type: 'documentation', url: 'https://docs.python.org/3/tutorial/datastructures.html#more-on-lists' }
    ],
    lessonContent: {
      overview: '### Dynamic Array Internals (CPython `PyListObject`)\n\nIn Python, a `list` is not a linked list—it is a **dynamically-sized contiguous array of object pointers**. When you create `my_list = [10, 20, 30]`, CPython allocates a contiguous block of memory containing pointers to those integer objects.\n\n### Over-Allocation and Amortized $O(1)$ Time Complexity\n\nTo ensure appending items is extremely fast, CPython uses an **over-allocation growth pattern**:\n1. When the array capacity is full and a new item is appended (`.append()`), CPython requests a larger memory buffer (roughly $1.125\\times$ larger plus padding).\n2. It copies the existing pointers to the new buffer and deallocates the old one.\n3. Because reallocations occur infrequently, `list.append()` runs in **amortized $O(1)$ constant time**!\n\n**Time Complexity Cheat Sheet:**\n- `list.append(x)`: $O(1)$ amortized\n- `list.pop()` (from end): $O(1)$\n- `list.insert(0, x)` / `list.pop(0)` (from start): $O(N)$ (requires shifting all remaining elements!)\n- `x in list` (search): $O(N)$ linear scan',
      analogyHero: 'Think of a Python list like a bus with extra empty seats reserved at the back. When a new passenger boards (append), they immediately take a seat in O(1) time. Only when the entire bus is full does the company order a larger bus.',
      objectives: [
        'Understand CPython contiguous pointer arrays and amortized $O(1)$ appending.',
        'Master core list methods: `.append()`, `.extend()`, `.insert()`, `.pop()`, `.remove()`, `.sort()`.',
        'Write elegant, performant List Comprehensions with filtering conditionals.',
        'Differentiate between shallow copies (`list.copy()`, `list[:]`) and recursive deep copies (`copy.deepcopy()`).'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: 'items.append(x)        # O(1) append to end\nitems.extend([a, b])   # Append multiple items\nitems.pop()            # O(1) remove and return last item\nitems.pop(0)           # O(N) remove from beginning\n[x**2 for x in nums if x % 2 == 0] # List comprehension\ncopy_list = copy.deepcopy(matrix)  # Recursive deep duplicate',
      sections: [
        {
          id: 'sec-7-1',
          title: 'List Methods, Comprehensions & Deep Memory Copying',
          difficulty: 'Beginner',
          analogy: 'A shallow copy is like photocopying a folder of paper bookmarks: you get a new folder, but the bookmarks inside still point to the exact same original documents. A deep copy photocopies every single document inside.',
          content: '### 1. List Comprehensions (Clean & Fast)\nList comprehensions provide a concise syntax to create new lists from existing iterables. They are executed at C-level speed inside CPython, making them faster than manual `.append()` loops:\n`[expression for item in iterable if condition]`\n\n### 2. Shallow Copy vs Deep Copy Trap\n- **Shallow Copy (`copy()`, `[:]`):** Duplicates the top-level list container, but nested mutable objects (e.g. inner lists in a 2D matrix) still point to the same original memory addresses.\n- **Deep Copy (`copy.deepcopy()`):** Recursively traverses and duplicates all nested objects in memory, creating a completely independent hierarchy.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_list_operations.py',
              code: '# Core list operations and complexity awareness\nqueue = [10, 20, 30]\n\nqueue.append(40)       # O(1) fast append\nqueue.extend([50, 60]) # O(K) bulk append\nremoved = queue.pop()  # O(1) remove last item (60)\n\n# In-place sort vs sorted() function\nunsorted = [45, 12, 89, 3, 27]\nunsorted.sort()        # Mutates list in-place (Timsort algorithm O(N log N))\nprint(f"Sorted in-place: {unsorted}")',
              explanation: 'Demonstrates appending, bulk extending, popping, and in-place Timsort sorting.',
              lineByLine: [
                { line: 'queue.extend([50, 60])', explanation: 'Appends each element of the iterable to the end of the list.' },
                { line: 'unsorted.sort()', explanation: 'Sorts elements in-place using Python\'s high-performance Timsort.' }
              ]
            },
            {
              language: 'python',
              filename: '02_list_comprehensions.py',
              code: '# High-performance list comprehensions with transformation and filtering\nraw_data = [12, -5, 0, 48, -19, 33, 100, -2, 75]\n\n# Filter positive numbers and convert to formatted strings\nprocessed = [f"Value: +{x}" for x in raw_data if x > 0]\nprint("Filtered Positives:", processed)\n\n# Nested list comprehension: Flattening a 2D Matrix\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflattened = [val for row in matrix for val in row]\nprint("Flattened 1D Array:", flattened)',
              explanation: 'Shows filtered list comprehensions and 2D matrix flattening.',
              lineByLine: [
                { line: '[f"Value: +{x}" for x in raw_data if x > 0]', explanation: 'Filters for positive values and formats strings inline.' },
                { line: '[val for row in matrix for val in row]', explanation: 'Nested iteration flattening rows into a single continuous list.' }
              ]
            },
            {
              language: 'python',
              filename: '03_shallow_vs_deep_copy.py',
              code: 'import copy\n\n# The Nested Mutation Trap (Shallow Copy)\noriginal = [["A", "B"], [1, 2]]\nshallow = original.copy()\ndeep = copy.deepcopy(original)\n\n# Mutate nested element in shallow copy\nshallow[0].append("C")\n\nprint("Original after shallow mutation:", original) # ["A", "B", "C"]! (Corrupted!)\nprint("Shallow Copy:                  ", shallow)\nprint("Deep Copy (Independent):       ", deep)    # Stays ["A", "B"] (Safe!)',
              explanation: 'Proves the shallow copy trap when working with nested mutable structures.',
              lineByLine: [
                { line: 'shallow = original.copy()', explanation: 'Creates a shallow copy sharing nested list references.' },
                { line: 'deep = copy.deepcopy(original)', explanation: 'Creates an entirely independent duplicate of all nested objects.' },
                { line: 'shallow[0].append("C")', explanation: 'Mutating inner list in shallow copy accidentally modifies original!' }
              ]
            }
          ],
          commonMistakes: [
            'Multiplying lists with nested structures: `grid = [[0] * 3] * 3` creates 3 references to the *same* inner list! Mutating `grid[0][0] = 1` changes all 3 rows. Always use: `grid = [[0] * 3 for _ in range(3)]`.',
            'Using `list.insert(0, x)` in high-throughput loops: Inserting at index 0 requires shifting all $N$ elements in memory ($O(N)$). Use `collections.deque` for $O(1)$ double-ended queues.'
          ],
          proTip: 'Use list comprehensions instead of `map()` and `filter()` with lambda functions—they are more readable and run faster in modern Python.',
          miniPractice: {
            question: 'What is the time complexity of appending an item to the end of a Python list using `list.append()`?',
            options: [
              '$O(N)$ linear time',
              '$O(1)$ amortized constant time',
              '$O(\\log N)$ logarithmic time',
              '$O(N^2)$ quadratic time'
            ],
            correctAnswer: 1,
            explanation: 'Because CPython dynamically over-allocates contiguous memory for array buffers, appending to the end runs in amortized O(1) constant time.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Top K Frequent Elements Extraction',
          instructions: 'Given a list of numbers, remove duplicates, sort in descending order, and extract the top 3 highest unique values using list slicing.',
          starterCode: 'scores = [88, 92, 79, 95, 88, 100, 92, 95, 74]\n\n# Extract top 3 unique highest scores',
          solutionCode: 'scores = [88, 92, 79, 95, 88, 100, 92, 95, 74]\n\nunique_sorted = sorted(list(set(scores)), reverse=True)\ntop_3 = unique_sorted[:3]\n\nprint("Top 3 Scores:", top_3)'
        }
      ],
      keyTakeaways: [
        'Python lists are contiguous arrays of pointers with amortized $O(1)$ append performance.',
        'Inserting or removing from index 0 is $O(N)$; use `collections.deque` if queue operations are needed.',
        'List comprehensions offer concise, high-speed iteration and filtering.',
        'Always use `copy.deepcopy()` when cloning nested lists or complex data structures.'
      ],
      summary: 'You have mastered Python lists, dynamic array memory allocation, list comprehensions, and deep vs shallow copy mechanics.'
    }
  },

  // ==========================================
  // MODULE 8: Tuples, Sets & Dictionaries
  // ==========================================
  {
    id: 'py-beg-08',
    orderIndex: 8,
    title: 'Module 8: Tuples, Sets & Dictionaries',
    description: 'Master immutable tuples, namedtuples, hash tables (dictionaries), O(1) key-value lookups, mathematical sets, and set operations.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-col-01', title: 'Python Data Structures & Hash Tables', type: 'documentation', url: 'https://docs.python.org/3/tutorial/datastructures.html' }
    ],
    lessonContent: {
      overview: '### The Foundation of Python Data Structures\n\nBeyond lists, Python features three essential data structures that form the core of high-performance applications: **Tuples** (immutable records), **Dictionaries** (high-speed hash maps), and **Sets** (unique mathematical collections).\n\n### Architectural Deep-Dive: The Hash Table (CPython `PyDictObject` & `PySetObject`)\n\nDictionaries and Sets are powered by CPython\'s state-of-the-art **compact open-addressing hash table**:\n1. **Hash Calculation (`hash(key)`):** CPython computes a 64-bit integer hash code via the SipHash algorithm.\n2. **Direct Indexing:** Masks the hash to compute an instant array index in $O(1)$ time.\n3. **Collision Resolution:** When two keys hash to the same bucket, CPython uses pseudo-random quadratic probing to resolve the conflict.\n4. **Key Verification:** Verifies both `hash(k1) == hash(k2)` AND `k1 == k2` to guarantee exact match.\n5. **Ordered Dictionaries:** Since Python 3.7+, dictionaries preserve insertion order with a 25% memory reduction.',
      analogyHero: 'Think of a dictionary like an automated warehouse where items have RFID tags: instead of walking down every aisle (O(N) list scan), the system computes the exact shelf location in O(1) constant time.',
      objectives: [
        'Master tuple immutability, packing/unpacking, and lightweight `namedtuple` records.',
        'Understand hash tables, O(1) key lookups, and the hashability requirement.',
        'Master dictionary operations: `.get()`, `.setdefault()`, comprehensions, and merge operator `|`.',
        'Apply mathematical set operations: Union `|`, Intersection `&`, Difference `-`, and Symmetric Difference `^`.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: 'point = (10, 20)           # Tuple\nuser = {"id": 1, "name": "Amir"} # Dict\nunique_tags = {"ai", "python"}   # Set\n\nuser.get("role", "Guest")  # Safe lookup\nmerged = dict1 | dict2     # Merge dicts (PEP 584)\nshared = setA & setB       # Intersection',
      sections: [
        {
          id: 'sec-8-1',
          title: 'Tuples, Hash Maps, Set Algebra & Complexity',
          difficulty: 'Beginner',
          analogy: 'A list is a whiteboard (anyone can erase/rewrite), a tuple is an engraved stone (immutable), a dictionary is an index card catalog (instant key lookup), and a set is a VIP guest list (no duplicates allowed).',
          content: '### 1. Tuples & Immutability\nTuples are fixed-length, immutable sequences. Because they cannot change after creation, CPython allocates exact memory with zero over-allocation overhead and caches small tuples in internal free-lists for instant reuse.\n\n### 2. Dictionaries & Safe Key Retrieval\nNever use `data["key"]` if the key might be missing—it raises a crash-inducing `KeyError`. Always use `data.get("key", default)` or `data.setdefault("key", default_val)`.\n\n### 3. Sets & Formal Mathematical Algebra\n- **Union (`A | B`):** All elements in either set.\n- **Intersection (`A & B`):** Shared elements in both sets.\n- **Difference (`A - B`):** Elements in A that are not in B.\n- **Symmetric Difference (`A ^ B`):** Elements in A or B, but NOT both.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_tuples_and_namedtuples.py',
              code: 'from collections import namedtuple\n\n# 1. Standard tuple packing and unpacking\ncoords = (37.7749, -122.4194)\nlat, lon = coords\n\n# 2. NamedTuple for structured data modeling\nStudent = namedtuple("Student", ["id", "name", "gpa"])\ns1 = Student(id=101, name="Amir Khalil", gpa=3.95)\n\nprint(f"Student: {s1.name} (GPA: {s1.gpa})")\nprint(f"Tuple Immutability: Coords at ({lat}, {lon})")',
              explanation: 'Demonstrates tuple unpacking and self-documenting immutable `namedtuple` objects.',
              lineByLine: [
                { line: 'lat, lon = coords', explanation: 'Unpacks tuple coordinates into individual variables simultaneously.' },
                { line: 'Student = namedtuple("Student", [...])', explanation: 'Generates a lightweight, immutable tuple subclass with named properties.' }
              ]
            },
            {
              language: 'python',
              filename: '02_dictionary_mastery.py',
              code: '# Safe dictionary operations, grouping and comprehensions\ninventory = {"laptop": 1200, "monitor": 350, "mouse": 25}\n\n# 1. Safe access with fallback\ntheme = inventory.get("theme", "Dark Mode Default")\n\n# 2. Dictionary comprehension: Apply 10% discount on items > $100\ndiscounted = {k: v * 0.9 for k, v in inventory.items() if v > 100}\n\n# 3. Python 3.9+ Dictionary Union Operator (|)\ndefault_config = {"retries": 3, "timeout": 30}\nuser_config = {"timeout": 60, "debug": True}\nactive_config = default_config | user_config\n\nprint("Active Config:", active_config)\nprint("Discounted Catalog:", discounted)',
              explanation: 'Shows safe retrieval with `.get()`, dictionary comprehensions, and the dictionary merge operator `|`.',
              lineByLine: [
                { line: '{k: v * 0.9 for k, v in inventory.items() if v > 100}', explanation: 'Filters and applies price discount formula inline.' },
                { line: 'active_config = default_config | user_config', explanation: 'Merges dictionaries with right-hand operand taking precedence.' }
              ]
            },
            {
              language: 'python',
              filename: '03_set_theory_pipeline.py',
              code: '# High-performance deduplication and mathematical set algebra\nbackend_skills = {"Python", "PostgreSQL", "Docker", "FastAPI"}\ndevops_skills = {"Docker", "Kubernetes", "Terraform", "Python"}\n\n# Mathematical Operations\nall_skills = backend_skills | devops_skills        # Union\nshared_skills = backend_skills & devops_skills     # Intersection\nbackend_only = backend_skills - devops_skills      # Difference\nunique_to_either = backend_skills ^ devops_skills  # Symmetric Difference\n\nprint("All Required Skills:   ", all_skills)\nprint("Shared Tech Stack:      ", shared_skills)\nprint("Backend-Only Stack:     ", backend_only)\nprint("Domain Unique Skills:   ", unique_to_either)',
              explanation: 'Demonstrates Union, Intersection, Difference, and Symmetric Difference set operations.',
              lineByLine: [
                { line: 'shared_skills = backend_skills & devops_skills', explanation: 'Calculates intersection of skills common to both disciplines.' },
                { line: 'backend_only = backend_skills - devops_skills', explanation: 'Finds skills exclusive to backend engineering.' }
              ]
            }
          ],
          commonMistakes: [
            'Using mutable types like lists as dictionary keys: Writing `d[[1, 2]] = "val"` raises `TypeError: unhashable type: \'list\'`. Dict keys and set elements MUST be immutable and hashable (e.g. tuples, strings, ints).',
            'Creating an empty set with `{}`: In Python, `{}` creates an empty dictionary! Use `s = set()` for an empty set.'
          ],
          proTip: 'Whenever you need to perform repeated `in` membership checks on large datasets, convert to a `set`. It transforms an $O(N)$ linear bottleneck into an $O(1)$ instant lookup.',
          miniPractice: {
            question: 'What is the time complexity of checking if a key exists in a Python dictionary using `key in my_dict`?',
            options: [
              '$O(N)$ linear time',
              '$O(1)$ average constant time',
              '$O(\\log N)$',
              '$O(N^2)$'
            ],
            correctAnswer: 1,
            explanation: 'Python dictionaries are implemented as open-addressing hash tables, yielding average O(1) constant time lookups.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Permission Access Auditor & Role Validator',
          instructions: 'Given a `system_permissions` set and a user\'s assigned `granted_permissions`, calculate: 1) Missing permissions required, 2) Extra unauthorized permissions granted.',
          starterCode: 'required = {"auth:read", "auth:write", "billing:read", "cluster:deploy"}\ngranted = {"auth:read", "billing:read", "legacy:superadmin"}\n\n# Calculate missing and extra permissions',
          solutionCode: 'required = {"auth:read", "auth:write", "billing:read", "cluster:deploy"}\ngranted = {"auth:read", "billing:read", "legacy:superadmin"}\n\nmissing = required - granted\nextra = granted - required\n\nprint("Missing Permissions:", missing)\nprint("Unauthorized Permissions:", extra)'
        }
      ],
      keyTakeaways: [
        'Tuples are immutable sequences offering lower memory overhead and free-list CPython optimizations.',
        'Dictionaries and Sets are hash tables providing average $O(1)$ lookups, insertions, and deletions.',
        'Keys and Set items must be immutable and hashable.',
        'Set algebra operators: `|` (Union), `&` (Intersection), `-` (Difference), `^` (Symmetric Difference).'
      ],
      summary: 'You have mastered Python tuples, hash table dictionaries, mathematical sets, and O(1) data collection operations.'
    }
  },

  // ==========================================
  // MODULE 9: Functions & Modular Execution
  // ==========================================
  {
    id: 'py-beg-09',
    orderIndex: 9,
    title: 'Module 9: Functions & Modular Execution',
    description: 'Master modular code, stack frames, LEGB scope resolution, *args, **kwargs, first-class functions, closures, and type hinting.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-fn-01', title: 'Python Functions & Scope Tutorial', type: 'documentation', url: 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions' }
    ],
    lessonContent: {
      overview: '### Modular Architecture & The Call Stack\n\nFunctions are reusable, isolated blocks of code that accept parameters, perform computations, and return outputs. In Python, **functions are first-class citizens**—they can be assigned to variables, passed as arguments into other functions, stored in data structures, and returned from functions.\n\n### The LEGB Scope Resolution Rule\n\nWhen Python encounters a variable name inside a function, it searches for it in a strict four-layer hierarchy (LEGB):\n1. **L – Local:** Variables declared within the current function body.\n2. **E – Enclosing:** Variables in any enclosing outer functions (nested functions/closures).\n3. **G – Global:** Module-level variables defined at the top of the file.\n4. **B – Built-in:** Python\'s built-in namespace (`len`, `print`, `range`, `ValueError`).',
      analogyHero: 'Think of LEGB scope like looking for a tool: first you check your own toolbelt (Local), then your workshop (Enclosing), then the company warehouse (Global), and finally the global hardware store (Built-in).',
      objectives: [
        'Understand Python stack frame allocation and the LEGB variable scope lookup order.',
        'Master flexible parameter handling with `*args` (positional tuple) and `**kwargs` (keyword dictionary).',
        'Treat functions as first-class objects (passing functions as arguments and callbacks).',
        'Apply modern type hinting (`def process(name: str) -> bool:`) for robust code.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: 'def function_name(param: str = "default") -> str:\n    """Docstring explanation."""\n    return f"Processed {param}"\n\ndef flexible(*args, **kwargs):\n    # args is tuple of positional inputs\n    # kwargs is dict of named keyword inputs\n    pass',
      sections: [
        {
          id: 'sec-9-1',
          title: 'Parameters, Variable Scope & Higher-Order Functions',
          difficulty: 'Beginner',
          analogy: 'Default mutable arguments like `def append_to(item, target=[])` are like leaving a shared clipboard on the front desk: every visitor writes on the same clipboard instead of getting a fresh sheet.',
          content: '### 1. `*args` and `**kwargs` Parameter Packing\n- `*args`: Collects arbitrary extra positional arguments into a `tuple`.\n- `**kwargs`: Collects arbitrary extra keyword arguments into a `dict`.\n\n### 2. The Dangerous Default Argument Trap\nDefault argument values are evaluated **once when the function is defined**, NOT every time the function is called! If you use a mutable default like `def add(item, lst=[]):`, all invocations share the same list instance in memory. Always use `def add(item, lst=None):` and initialize inside the function.\n\n### 3. First-Class Functions & Callbacks\nBecause functions are objects, you can pass them into other functions to build flexible data transformation pipelines.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_legb_scope_resolution.py',
              code: '# Demonstrating LEGB Scope Lookup Order\nglobal_variable = "G: I am Global"\n\ndef outer_function():\n    enclosing_variable = "E: I am Enclosing"\n    \n    def inner_function():\n        local_variable = "L: I am Local"\n        print(local_variable)        # Found in Local\n        print(enclosing_variable)    # Found in Enclosing\n        print(global_variable)       # Found in Global\n        print(len("Built-in check")) # Found in Built-in (len)\n        \n    inner_function()\n\nouter_function()',
              explanation: 'Illustrates the four-tier LEGB scope hierarchy during nested function execution.',
              lineByLine: [
                { line: 'print(local_variable)', explanation: 'Finds local_variable in the immediate stack frame.' },
                { line: 'print(enclosing_variable)', explanation: 'Finds enclosing_variable in the outer closure frame.' },
                { line: 'print(global_variable)', explanation: 'Finds global_variable at the module level.' }
              ]
            },
            {
              language: 'python',
              filename: '02_args_kwargs_forwarding.py',
              code: '# Flexible API wrapper using *args and **kwargs\ndef create_user_record(user_id: int, username: str, *roles, **metadata):\n    print(f"ID: {user_id} | Username: {username}")\n    print(f"Assigned Roles (tuple): {roles}")\n    print(f"Extra Metadata (dict):  {metadata}\\n")\n\ncreate_user_record(\n    101, \n    "amir_engineer", \n    "Admin", "DevOps", "Architect",\n    department="Cloud Engineering",\n    location="Lahore",\n    active=True\n)',
              explanation: 'Demonstrates parameter packing where *roles captures positional inputs and **metadata captures named arguments.',
              lineByLine: [
                { line: 'def create_user_record(user_id, username, *roles, **metadata):', explanation: 'Defines required parameters followed by variable args and kwargs.' },
                { line: 'create_user_record(101, "amir", "Admin", ...)', explanation: 'Packs "Admin", "DevOps" into roles tuple and department="..." into metadata dict.' }
              ]
            },
            {
              language: 'python',
              filename: '03_first_class_pipeline.py',
              code: '# First-Class Functions: Building a Data Transformation Pipeline\ndef strip_text(text: str) -> str:\n    return text.strip()\n\ndef capitalize_text(text: str) -> str:\n    return text.capitalize()\n\ndef sanitize_email(text: str) -> str:\n    return text.lower()\n\ndef execute_pipeline(data: list, transformers: list) -> list:\n    results = []\n    for item in data:\n        transformed = item\n        for fn in transformers:\n            transformed = fn(transformed)\n        results.append(transformed)\n    return results\n\nraw_names = ["   aLiCe  ", "  BOB ", "  cHaRlIe  "]\npipeline = [strip_text, capitalize_text]\nprint("Cleaned Names:", execute_pipeline(raw_names, pipeline))',
              explanation: 'Demonstrates higher-order functions by passing a list of callable transformer functions into a pipeline.',
              lineByLine: [
                { line: 'for fn in transformers: transformed = fn(transformed)', explanation: 'Dynamically invokes each passed function in sequence.' },
                { line: 'execute_pipeline(raw_names, [strip_text, capitalize_text])', explanation: 'Passes function references without parentheses as first-class arguments.' }
              ]
            }
          ],
          commonMistakes: [
            'Using mutable default arguments: `def append_item(val, target=[]): target.append(val); return target`. The default list is created once and shared across calls. Use `target=None` and initialize inside.',
            'Unintended global modification: Assigning to a global variable inside a function creates a new local variable unless declared with `global var_name`.'
          ],
          proTip: 'Always write concise docstrings (PEP 257) describing parameters, return types, and exceptions raised. It powers IDE autocomplete and automated documentation tools.',
          miniPractice: {
            question: 'What does the LEGB rule represent in Python variable scope resolution?',
            options: [
              'Linear, Explicit, Global, Binary',
              'Local -> Enclosing -> Global -> Built-in lookup hierarchy',
              'Loop -> Execution -> Garbage -> Base',
              'Logical, Entity, Group, Block'
            ],
            correctAnswer: 1,
            explanation: 'LEGB defines Python\'s scope search order: first check Local scope, then Enclosing closures, then Global module scope, and finally Built-in namespace.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Custom Retry Decorator / Wrapper Function',
          instructions: 'Write a higher-order function `retry_execution(fn, max_attempts)` that takes a callable function and executes it up to `max_attempts` times until it succeeds without error.',
          starterCode: 'def retry_execution(fn, max_attempts=3):\n    # Implement retry wrapper\n    pass',
          solutionCode: 'def retry_execution(fn, max_attempts=3):\n    attempts = 0\n    while attempts < max_attempts:\n        attempts += 1\n        try:\n            return fn()\n        except Exception as err:\n            print(f"Attempt {attempts} failed: {err}")\n            if attempts == max_attempts:\n                raise\n\n# Test with dummy function\ncount = 0\ndef risky_operation():\n    global count\n    count += 1\n    if count < 2: raise ConnectionError("Timeout")\n    return "Success!"\n\nprint(retry_execution(risky_operation))'
        }
      ],
      keyTakeaways: [
        'Python resolves variables using the LEGB hierarchy (Local -> Enclosing -> Global -> Built-in).',
        'Functions are first-class objects that can be passed, returned, and stored in collections.',
        'Never use mutable default arguments like `def f(x=[])`; use `None` and initialize inside.',
        'Use `*args` to accept arbitrary positional arguments and `**kwargs` for keyword arguments.'
      ],
      summary: 'You have mastered Python functions, LEGB scope resolution, parameter packing with args/kwargs, and higher-order pipeline patterns.'
    }
  },

  // ==========================================
  // MODULE 10: Modules, Packages & Standard Library
  // ==========================================
  {
    id: 'py-beg-10',
    orderIndex: 10,
    title: 'Module 10: Modules, Packages & Standard Library',
    description: 'Master Python modular architecture, import system (sys.modules, sys.path), package structure (__init__.py), math, datetime, os, sys, and virtual environments (venv).',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-mod-01', title: 'Python Modules and Packages Tutorial', type: 'documentation', url: 'https://docs.python.org/3/tutorial/modules.html' },
      { id: 'res-mod-02', title: 'Python Standard Library Index', type: 'documentation', url: 'https://docs.python.org/3/library/' }
    ],
    lessonContent: {
      overview: '### Modular Software Engineering in Python\n\nAs applications scale from single scripts to enterprise systems, organizing code into **modules** (individual `.py` files) and **packages** (directories containing modules and `__init__.py`) is vital for maintainability and separation of concerns.\n\n### How the Python Import System Works Under the Hood\n\nWhen you execute `import my_module`:\n1. **Cache Check (`sys.modules`):** Python checks if the module has already been imported. If found, it returns the cached module object immediately in $O(1)$ time.\n2. **Path Resolution (`sys.path`):** If not cached, Python searches through the list of directory paths in `sys.path` (current directory, `PYTHONPATH`, standard library paths, `site-packages`).\n3. **Compilation & Execution:** It compiles the module into bytecode (`.pyc`), executes the top-level module body once, and binds the module namespace to your current scope.',
      analogyHero: 'Think of modules like individual specialized departments in a company (Accounting, Engineering, HR). You don\'t put every employee in the same room—you organize them into departments and import their services when needed.',
      objectives: [
        'Understand Python module resolution via `sys.modules` and `sys.path`.',
        'Create modular packages using `__init__.py` and configure `__all__` exports.',
        'Master the essential standard library modules: `math`, `datetime`, `os`, `sys`, and `random`.',
        'Manage isolated project environments using Python virtual environments (`venv`).'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: 'import math                  # Entire module\nfrom datetime import datetime, timezone # Specific symbols\nimport sys, os               # System modules\npython -m venv .venv         # Create virtual environment\nsource .venv/bin/activate    # Activate on Linux/macOS\n.venv\\Scripts\\activate       # Activate on Windows',
      sections: [
        {
          id: 'sec-10-1',
          title: 'Imports, Standard Library & Virtual Environments',
          difficulty: 'Beginner',
          analogy: 'Installing Python packages globally is like storing everyone\'s luggage in one giant unsorted pile: sooner or later, two different projects will fight over incompatible versions of the same package. Virtual environments give each project its own private suitcase.',
          content: '### 1. Relative vs Absolute Imports\n- **Absolute Imports:** `from myapp.services.auth import verify_token` (Recommended, unambiguous, PEP 8 standard).\n- **Relative Imports:** `from .utils import calculate_hash` (Used within package hierarchies).\n\n### 2. Guarding Script Execution (`if __name__ == "__main__":`)\nWhen a Python file is run directly, CPython sets its special `__name__` variable to `"__main__"`. When imported as a module, `__name__` is set to the module name. Guarding executable code with `if __name__ == "__main__":` ensures tests or CLI commands only run when invoked directly, not when imported.\n\n### 3. Essential Standard Library Modules\n- `os` / `pathlib`: Operating system environment variables and cross-platform file paths.\n- `sys`: Command-line arguments (`sys.argv`), Python version, and system exit.\n- `datetime`: Timezone-aware date calculations and ISO-8601 formatting.\n- `math` / `random`: Transcendental mathematical functions and pseudorandom number generators.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_main_guard_pattern.py',
              code: '# Modular service pattern with __name__ == "__main__" guard\ndef calculate_annual_compound_interest(principal: float, rate: float, years: int) -> float:\n    """Calculates compound interest: A = P(1 + r)^t"""\n    return principal * ((1 + rate) ** years)\n\n# This block executes ONLY when the script is run directly from CLI\nif __name__ == "__main__":\n    print("=== Direct Module Execution Test ===")\n    p, r, t = 10000.0, 0.08, 5\n    future_value = calculate_annual_compound_interest(p, r, t)\n    print(f"Principal: ${p:,.2f} at {r*100}% for {t} years -> ${future_value:,.2f}")',
              explanation: 'Demonstrates the standard `if __name__ == "__main__":` pattern for creating reusable modules that also support direct CLI testing.',
              lineByLine: [
                { line: 'if __name__ == "__main__":', explanation: 'Evaluates True only when the file is run directly, not when imported.' },
                { line: 'future_value = calculate_annual_compound_interest(...)', explanation: 'Executes test calculation safely without running on import.' }
              ]
            },
            {
              language: 'python',
              filename: '02_standard_library_suite.py',
              code: 'import os\nimport sys\nimport math\nfrom datetime import datetime, timezone\n\n# 1. System & Environment\npython_version = sys.version.split()[0]\nuser_home = os.environ.get("USERPROFILE") or os.environ.get("HOME") or "Unknown"\nprint(f"Python Runtime: v{python_version} | Home: {user_home}")\n\n# 2. Timezone-Aware Datetime (PEP 495)\ncurrent_utc = datetime.now(timezone.utc)\nprint(f"Current UTC Timestamp: {current_utc.isoformat()}")\n\n# 3. High-precision Mathematics\nhypotenuse = math.hypot(3.0, 4.0) # Euclidean distance\nprint(f"math.hypot(3, 4) = {hypotenuse}")',
              explanation: 'Uses `os`, `sys`, `math`, and timezone-aware `datetime` from the Python standard library.',
              lineByLine: [
                { line: 'current_utc = datetime.now(timezone.utc)', explanation: 'Generates unambiguous UTC timestamp preventing daylight saving bugs.' },
                { line: 'hypotenuse = math.hypot(3.0, 4.0)', explanation: 'Computes sqrt(x^2 + y^2) avoiding intermediate floating point overflow.' }
              ]
            },
            {
              language: 'python',
              filename: '03_package_structure.py',
              code: '# Simulated Package Structure:\n# skillora_auth/\n#   ├── __init__.py      (Exports public API via __all__)\n#   ├── tokens.py        (JWT token generation)\n#   └── validator.py     (Password hashing & checks)\n\n# __init__.py content example:\n# from .tokens import generate_jwt_token\n# from .validator import validate_password\n# __all__ = ["generate_jwt_token", "validate_password"]\n\nprint("Package Architecture Pattern: Use __all__ to define clean public interfaces.")',
              explanation: 'Illustrates clean Python package design using `__init__.py` and `__all__` encapsulation.',
              lineByLine: [
                { line: '__all__ = ["generate_jwt_token", "validate_password"]', explanation: 'Explicitly defines what symbols are exported when someone runs from package import *.' }
              ]
            }
          ],
          commonMistakes: [
            'Using wildcard imports (`from math import *`): Pollutes your local namespace and makes it impossible to tell where functions like `sin()` or `log()` originated. Always import explicitly: `import math` or `from math import sin`.',
            'Circular imports: Module A imports Module B while Module B imports Module A at top level. Fix by refactoring shared code into a common `utils.py` or moving imports inside function bodies.'
          ],
          proTip: 'Always create a virtual environment (`python -m venv .venv`) for every Python project before running `pip install`. Never install dependencies into the global operating system Python environment.',
          miniPractice: {
            question: 'What is the value of `__name__` when a Python file is run directly via `python app.py` from the terminal?',
            options: [
              '`"app"`',
              '`"__main__"`',
              '`"__root__"`',
              '`None`'
            ],
            correctAnswer: 1,
            explanation: 'When a script is executed directly, CPython sets its `__name__` attribute to `"__main__"`, enabling the `if __name__ == "__main__":` idiom.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'CLI Countdown Timer with UTC Logging',
          instructions: 'Write a script that takes a number of seconds as a command-line input, prints a timestamped countdown log using `datetime.now(timezone.utc)`, and reports completion.',
          starterCode: 'import time\nfrom datetime import datetime, timezone\n\ndef run_countdown(seconds: int):\n    # Implement timestamped countdown\n    pass',
          solutionCode: 'import time\nfrom datetime import datetime, timezone\n\ndef run_countdown(seconds: int):\n    print(f"[{datetime.now(timezone.utc).isoformat()}] Starting countdown for {seconds}s...")\n    for remaining in range(seconds, 0, -1):\n        print(f"[{datetime.now(timezone.utc).strftime(\'%H:%M:%S\')}] T-{remaining}s")\n        time.sleep(1)\n    print(f"[{datetime.now(timezone.utc).isoformat()}] 🚀 Launch / Timer Expired!")\n\n# run_countdown(3)'
        }
      ],
      keyTakeaways: [
        'CPython caches imported modules in `sys.modules` for $O(1)$ subsequent access.',
        'Use `if __name__ == "__main__":` to separate reusable library code from CLI entry point execution.',
        'Always specify explicit module imports over wildcard `import *`.',
        'Use isolated virtual environments (`venv`) for every Python project.'
      ],
      summary: 'You have mastered Python modular architecture, import resolution, the standard library suite, and virtual environments.'
    }
  },

  // ==========================================
  // MODULE 11: File Handling & Persistence
  // ==========================================
  {
    id: 'py-beg-11',
    orderIndex: 11,
    title: 'Module 11: File Handling & Persistence',
    description: 'Master operating system file descriptors, file modes (r, w, a, b), context managers (with statement), and CSV/JSON serialization.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-io-01', title: 'Python File I/O & Context Managers', type: 'documentation', url: 'https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files' }
    ],
    lessonContent: {
      overview: '### Operating System File Descriptors & Buffering\n\nFile input/output (I/O) allows programs to persist state across sessions and interact with the local filesystem. When you open a file, the operating system assigns a numerical **File Descriptor (FD)** table entry to track the file pointer position and read/write buffer.\n\n### The Gold Standard: The `with` Statement (Context Manager Protocol)\n\nIn legacy code, opening files manually required `f = open(...)` and `f.close()`. If an exception occurred before `.close()`, the file descriptor leaked in memory and locked the file on disk.\n\nThe `with` statement implements the **Context Manager Protocol** (`__enter__` and `__exit__`):\n1. In `__enter__()`: Opens the file descriptor and returns the file stream object.\n2. In `__exit__()`: Guaranteed to close the file descriptor and flush write buffers, **even if catastrophic exceptions occur** inside the block!',
      analogyHero: 'Think of a context manager like an automatic bank vault with an airlock: when you enter, the lights turn on. When you leave—whether you walk out normally or get evacuated in an emergency—the vault doors automatically seal shut behind you.',
      objectives: [
        'Understand operating system file modes: `"r"` (read), `"w"` (overwrite), `"a"` (append), `"b"` (binary).',
        'Master the `with open(...)` context manager for leak-free file descriptor management.',
        'Read and write structured formats: Plain text, CSV (`csv` module), and JSON (`json` module).',
        'Handle stream pointers using `.seek()` and `.tell()`.'
      ],
      estimatedTime: '30 mins',
      syntaxGuide: 'with open("data.txt", "r", encoding="utf-8") as f:\n    content = f.read()       # Entire file\n    lines = f.readlines()    # List of lines\n\nwith open("output.txt", "w", encoding="utf-8") as f:\n    f.write("Text\\n")        # Overwrite\n\nimport json, csv\njson.dump(obj, f, indent=2)  # Serialize JSON\ndata = json.load(f)          # Deserialize JSON',
      sections: [
        {
          id: 'sec-11-1',
          title: 'Context Managers, Encoding & JSON/CSV Serialization',
          difficulty: 'Beginner',
          analogy: 'Writing to a file without specifying `encoding="utf-8"` is like sending a letter in a mystery language: on your computer it might read English, but on a server in another country it turns into unreadable gibberish.',
          content: '### 1. Always Specify `encoding="utf-8"`\nOn Windows, the default file encoding is often legacy `cp1252`, while on Linux and macOS it is `utf-8`. Omitting `encoding="utf-8"` causes `UnicodeDecodeError` when transferring files between operating systems!\n\n### 2. Line-by-Line Streaming for Large Files\nNever use `f.read()` on multi-gigabyte files (which loads the entire file into RAM). Instead, iterate over the file handle directly: `for line in f:` streams lines one-by-one with minimal memory footprint.\n\n### 3. Structured Data (JSON & CSV)\n- `json.dump(data, file)` / `json.load(file)`: Writes and reads JSON streams.\n- `csv.DictReader(file)` / `csv.DictWriter(file)`: Reads and writes structured CSV tables mapping headers to dictionaries.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_context_manager_io.py',
              code: '# Safe writing and streaming line-by-line reading\nfilename = "audit_log.txt"\n\n# 1. Writing lines using with statement\nwith open(filename, "w", encoding="utf-8") as f:\n    f.write("2026-09-11 12:00:00 - User admin login\\n")\n    f.write("2026-09-11 12:05:00 - Cluster auto-scaled +2 nodes\\n")\n\n# 2. Streaming read (Memory-efficient for 10GB+ files!)\nwith open(filename, "r", encoding="utf-8") as f:\n    print("=== Streaming Audit Logs ===")\n    for line_num, line in enumerate(f, start=1):\n        print(f"Line {line_num}: {line.strip()}")',
              explanation: 'Demonstrates guaranteed file descriptor cleanup and line-by-line memory streaming.',
              lineByLine: [
                { line: 'with open(filename, "w", encoding="utf-8") as f:', explanation: 'Opens file for writing with explicit UTF-8 encoding; auto-closes on block exit.' },
                { line: 'for line_num, line in enumerate(f, start=1):', explanation: 'Streams one line at a time from the disk buffer without loading entire file to RAM.' }
              ]
            },
            {
              language: 'python',
              filename: '02_json_serialization.py',
              code: 'import json\n\n# Serializing and Deserializing structured JSON configuration\nconfig_data = {\n    "service_name": "Skillora AI Gateway",\n    "port": 8080,\n    "routes": ["/api/v1/auth", "/api/v1/roadmaps"],\n    "rate_limiting": {"enabled": True, "max_requests_per_min": 120}\n}\n\n# Write JSON to disk\nwith open("gateway_config.json", "w", encoding="utf-8") as f:\n    json.dump(config_data, f, indent=2)\n\n# Read JSON from disk\nwith open("gateway_config.json", "r", encoding="utf-8") as f:\n    loaded_config = json.load(f)\n\nprint(f"Loaded Service: {loaded_config[\'service_name\']} (Port: {loaded_config[\'port\']})")\nprint(f"Rate Limiting Active: {loaded_config[\'rate_limiting\'][\'enabled\']}")',
              explanation: 'Uses the standard `json` library to serialize Python dictionaries to disk and parse them back.',
              lineByLine: [
                { line: 'json.dump(config_data, f, indent=2)', explanation: 'Serializes dictionary to formatted JSON text on disk.' },
                { line: 'loaded_config = json.load(f)', explanation: 'Parses JSON stream from disk directly into a native Python dictionary.' }
              ]
            },
            {
              language: 'python',
              filename: '03_csv_dict_processing.py',
              code: 'import csv\n\n# Processing Tabular Data with csv.DictWriter and DictReader\nstudents = [\n    {"id": "S101", "name": "Amir", "gpa": 3.92},\n    {"id": "S102", "name": "Sarah", "gpa": 3.88},\n    {"id": "S103", "name": "David", "gpa": 3.75}\n]\n\n# Write CSV\nwith open("students.csv", "w", newline="", encoding="utf-8") as f:\n    fieldnames = ["id", "name", "gpa"]\n    writer = csv.DictWriter(f, fieldnames=fieldnames)\n    writer.writeheader()\n    writer.writerows(students)\n\n# Read CSV\nwith open("students.csv", "r", encoding="utf-8") as f:\n    reader = csv.DictReader(f)\n    print("=== Registered Students ===")\n    for row in reader:\n        print(f"ID: {row[\'id\']} | Name: {row[\'name\']:<10} | GPA: {row[\'gpa\']}")',
              explanation: 'Demonstrates CSV reading and writing with header dictionary mappings using `csv.DictWriter` and `csv.DictReader`.',
              lineByLine: [
                { line: 'writer = csv.DictWriter(f, fieldnames=fieldnames)', explanation: 'Configures CSV writer mapping dict keys to columns.' },
                { line: 'for row in reader:', explanation: 'Iterates rows as clean dictionaries mapping column headers to values.' }
              ]
            }
          ],
          commonMistakes: [
            'Forgetting `newline=""` when writing CSV files on Windows: Omitting this causes extra blank lines between rows on Windows platforms.',
            'Using manual `open()` without `with`: If an unexpected error occurs before `f.close()`, file locks remain active on the operating system.'
          ],
          proTip: 'Use `pathlib.Path` from the standard library for modern object-oriented file path operations (`Path("data") / "logs.txt"`).',
          miniPractice: {
            question: 'Why is `with open("data.txt", "r") as f:` preferred over manual `f = open("data.txt", "r")` in Python?',
            options: [
              'It encrypts file contents on disk',
              'It guarantees automatic descriptor cleanup and closing even if runtime exceptions occur',
              'It makes reading 10x faster by bypassing OS disk caching',
              'It automatically converts files to JSON'
            ],
            correctAnswer: 1,
            explanation: 'The `with` statement implements the context manager protocol (`__enter__` and `__exit__`), guaranteeing file descriptor closure and resource cleanup in all scenarios.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Log File Error Aggregator',
          instructions: 'Write a script that reads a simulated log file line-by-line, counts occurrences of "[ERROR]", and writes all error lines to a separate `errors_only.log` file.',
          starterCode: '# Process log file and extract errors\ninput_file = "server.log"\noutput_file = "errors_only.log"',
          solutionCode: 'input_file = "server.log"\noutput_file = "errors_only.log"\n\n# Create sample log for testing\nwith open(input_file, "w", encoding="utf-8") as f:\n    f.write("[INFO] Server starting\\n[ERROR] DB Connection Failed\\n[INFO] Retrying\\n[ERROR] Timeout on port 5432\\n")\n\nerror_count = 0\nwith open(input_file, "r", encoding="utf-8") as infile, open(output_file, "w", encoding="utf-8") as outfile:\n    for line in infile:\n        if "[ERROR]" in line:\n            error_count += 1\n            outfile.write(line)\n\nprint(f"Extracted {error_count} error events to {output_file}")'
        }
      ],
      keyTakeaways: [
        'Always use the `with` statement for automatic resource cleanup via the Context Manager Protocol.',
        'Always specify `encoding="utf-8"` to ensure cross-platform compatibility.',
        'Stream large files line-by-line using `for line in f:` rather than `f.read()`.',
        'Use the `json` and `csv` modules for standard structured data serialization.'
      ],
      summary: 'You have mastered operating system file descriptors, UTF-8 text encoding, context managers, and JSON/CSV data processing.'
    }
  },

  // ==========================================
  // MODULE 12: Error Handling & Debugging
  // ==========================================
  {
    id: 'py-beg-12',
    orderIndex: 12,
    title: 'Module 12: Error Handling & Debugging',
    description: 'Master Python exception hierarchy, try-except-else-finally blocks, custom exception classes, raising exceptions, and traceback debugging.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-err-01', title: 'Python Built-in Exceptions Hierarchy', type: 'documentation', url: 'https://docs.python.org/3/library/exceptions.html' }
    ],
    lessonContent: {
      overview: '### Resilient Software Architecture: Python Exception Handling\n\nIn robust production software, errors are inevitable: networks drop, database queries time out, user inputs are malformed, and files go missing. Exception handling allows programs to intercept runtime faults gracefully rather than crashing catastrophically.\n\n### The CPython Exception Hierarchy Tree\n\nAll Python exceptions inherit from a root class hierarchy:\n```\nBaseException\n ├── SystemExit (triggered by sys.exit())\n ├── KeyboardInterrupt (triggered by Ctrl+C)\n └── Exception (Standard application errors)\n      ├── ArithmeticError (ZeroDivisionError, OverflowError)\n      ├── LookupError (IndexError, KeyError)\n      ├── ValueError (Invalid value / conversion failure)\n      ├── TypeError (Operation on incompatible types)\n      └── OSError (FileNotFoundError, PermissionError)\n```\n\n**Critical Rule:** Always catch specific subclasses of `Exception`. Never catch bare `except:` or `except BaseException:`, as this intercepts `KeyboardInterrupt` and prevents users from stopping your program with `Ctrl+C`!',
      analogyHero: 'Think of exception handling like a car\'s safety systems: when a tire loses pressure (an exception), the dashboard warns the driver and engages anti-lock brakes (try/except) so you can pull over safely, rather than the entire car exploding.',
      objectives: [
        'Understand the complete `try-except-else-finally` lifecycle.',
        'Master the Python exception class hierarchy and avoid anti-patterns (e.g. bare excepts).',
        'Define custom application exception classes inheriting from `Exception`.',
        'Raise exceptions defensively with `raise` and inspect stack tracebacks.'
      ],
      estimatedTime: '30 mins',
      syntaxGuide: 'try:\n    # Risky operation\nexcept ValueError as err:\n    # Handle specific error\nelse:\n    # Runs ONLY if NO exceptions occurred\nfinally:\n    # Runs in ALL scenarios (cleanup/teardown)\n\nraise ValueError("Custom message") # Trigger exception',
      sections: [
        {
          id: 'sec-12-1',
          title: 'The Try-Except-Else-Finally Construct & Custom Exceptions',
          difficulty: 'Beginner',
          analogy: 'In a surgical operation, `try` is the procedure, `except` is the emergency intervention if complications arise, `else` is the post-op recovery if everything went smoothly, and `finally` is sterilizing all surgical tools regardless of outcome.',
          content: '### 1. The Four Blocks of Exception Handling\n- `try`: Contains code that might raise an exception.\n- `except TargetError as err`: Catches and handles matching error types.\n- `else`: Executes **only if the try block succeeded without raising any exception**.\n- `finally`: Guaranteed to execute **under all circumstances** (normal execution, handled errors, unhandled errors, or premature `return` statements).\n\n### 2. Defensive Programming with Custom Exceptions\nCreate domain-specific exceptions by subclassing `Exception` to give precise feedback to API consumers.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_try_except_lifecycle.py',
              code: '# Complete try-except-else-finally lifecycle\ndef divide_integers(a: str, b: str):\n    print(f"\\nAttempting computation: {a} / {b}")\n    try:\n        num1 = int(a)\n        num2 = int(b)\n        result = num1 / num2\n    except ValueError as err:\n        print(f"❌ Input Error: Both operands must be valid integers ({err})")\n    except ZeroDivisionError:\n        print("❌ Math Error: Cannot divide by zero.")\n    else:\n        print(f"✅ Success: Result is {result:.2f}")\n    finally:\n        print("🔒 Teardown: Completed division operation cleanup.")\n\ndivide_integers("10", "2")   # Success path (triggers else)\ndivide_integers("10", "0")   # Zero division path\ndivide_integers("ten", "2")  # Value error path',
              explanation: 'Demonstrates all four blocks of exception handling across success and failure paths.',
              lineByLine: [
                { line: 'except ValueError as err:', explanation: 'Catches invalid string-to-int conversion attempts.' },
                { line: 'except ZeroDivisionError:', explanation: 'Catches division by 0 specifically.' },
                { line: 'else: print(f"Success: {result}")', explanation: 'Runs only when try block completes with 0 errors.' },
                { line: 'finally: print("Teardown...")', explanation: 'Guaranteed execution in all three test invocations.' }
              ]
            },
            {
              language: 'python',
              filename: '02_custom_exceptions.py',
              code: '# Defining custom domain-specific exception classes\nclass BankingError(Exception):\n    """Base exception for all banking operations."""\n    pass\n\nclass InsufficientFundsError(BankingError):\n    """Raised when withdrawal exceeds available account balance."""\n    def __init__(self, balance: float, amount: float):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(\n            f"Declined: Cannot withdraw ${amount:.2f} with available balance of ${balance:.2f}."\n        )\n\ndef withdraw_funds(balance: float, amount: float) -> float:\n    if amount <= 0:\n        raise ValueError("Withdrawal amount must be strictly positive.")\n    if amount > balance:\n        raise InsufficientFundsError(balance, amount)\n    return balance - amount\n\ntry:\n    new_balance = withdraw_funds(150.00, 200.00)\nexcept InsufficientFundsError as err:\n    print(f"Caught Domain Error: {err}")',
              explanation: 'Creates a custom exception hierarchy inheriting from `Exception` with custom contextual error attributes.',
              lineByLine: [
                { line: 'class InsufficientFundsError(BankingError):', explanation: 'Inherits from custom base exception for clean domain modeling.' },
                { line: 'raise InsufficientFundsError(balance, amount)', explanation: 'Explicitly triggers custom exception when validation fails.' }
              ]
            },
            {
              language: 'python',
              filename: '03_exception_chaining.py',
              code: '# Exception Chaining with "raise ... from ..."\nimport json\n\nclass ConfigurationLoadError(Exception):\n    pass\n\ndef load_server_config(raw_json: str) -> dict:\n    try:\n        return json.loads(raw_json)\n    except json.JSONDecodeError as root_err:\n        # Chain original cause for full traceback debugging context (PEP 3134)\n        raise ConfigurationLoadError("Failed to parse server configuration payload.") from root_err\n\ntry:\n    load_server_config("INVALID JSON DATA")\nexcept ConfigurationLoadError as err:\n    print(f"High-Level Error: {err}")\n    print(f"Underlying Cause: {err.__cause__}")',
              explanation: 'Shows exception chaining (`raise ... from ...`) preserving root cause diagnostic information.',
              lineByLine: [
                { line: 'raise ConfigurationLoadError(...) from root_err', explanation: 'Preserves the original JSONDecodeError as __cause__ for debugging.' }
              ]
            }
          ],
          commonMistakes: [
            'Using bare `except:`: Writing `try: ... except:` catches `KeyboardInterrupt` and `SystemExit`, preventing you from killing hung scripts with `Ctrl+C`. Always catch `except Exception:` or specific subclasses.',
            'Swallowing exceptions silently: Writing `except Exception: pass` hides bugs and makes production system troubleshooting nearly impossible. Always log or handle the error.'
          ],
          proTip: 'Use EAFP ("Easier to Ask for Forgiveness than Permission") in Python: try the operation and catch exceptions rather than writing dozens of pre-checking conditionals.',
          miniPractice: {
            question: 'When does the `finally` block in a `try-except-else-finally` construct execute?',
            options: [
              'Only if an exception was caught and handled in an `except` block',
              'Only if no exceptions occurred during execution',
              'Always, regardless of whether exceptions were raised, caught, or unhandled',
              'Only if the `else` block executed successfully'
            ],
            correctAnswer: 2,
            explanation: 'The `finally` block is guaranteed to execute under every circumstance, ensuring deterministic resource cleanup and teardown.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Safe Integer Input Collector with Retry Loop',
          instructions: 'Write a function `prompt_integer(prompt, min_val, max_val)` that repeatedly prompts the user until they enter a valid integer within the bounds [min_val, max_val].',
          starterCode: 'def prompt_integer(prompt: str, min_val: int, max_val: int) -> int:\n    # Implement robust input loop\n    pass',
          solutionCode: 'def prompt_integer(prompt: str, min_val: int, max_val: int) -> int:\n    while True:\n        try:\n            val = int(input(prompt).strip())\n            if not (min_val <= val <= max_val):\n                print(f"⚠️ Value must be between {min_val} and {max_val}!")\n                continue\n            return val\n        except ValueError:\n            print("⚠️ Please enter a valid whole number!")\n\n# Verification test\n# age = prompt_integer("Enter age (18-100): ", 18, 100)'
        }
      ],
      keyTakeaways: [
        'Always catch specific exceptions rather than bare `except:` to avoid intercepting `KeyboardInterrupt`.',
        '`try` tests code; `except` handles failures; `else` runs on success; `finally` runs unconditionally.',
        'Create custom domain exceptions by subclassing `Exception`.',
        'Use `raise ... from original_err` to preserve root-cause stack traces.'
      ],
      summary: 'You have mastered Python exception hierarchies, try-except-else-finally flows, custom exception design, and diagnostic traceback chaining.'
    }
  },

  // ==========================================
  // MODULE 13: OOP Fundamentals
  // ==========================================
  {
    id: 'py-beg-13',
    orderIndex: 13,
    title: 'Module 13: OOP Fundamentals',
    description: 'Master classes, object instances, the __init__ constructor, the self parameter, instance vs class attributes, encapsulation, and dunder representations.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-oop-01', title: 'Python Classes and Objects Tutorial', type: 'documentation', url: 'https://docs.python.org/3/tutorial/classes.html' }
    ],
    lessonContent: {
      overview: '### Object-Oriented Programming (OOP) in Python\n\nObject-Oriented Programming is a paradigm that models real-world systems by bundling data (**attributes/state**) and behavior (**methods/functions**) together into cohesive objects. In Python, classes act as blueprints for instantiating objects on the heap.\n\n### The Role of `__init__` and the `self` Reference\n\nWhen you create an object instance `user = User("Amir")`, CPython executes two internal steps:\n1. **`__new__()`:** Allocates a new empty object instance on the heap.\n2. **`__init__()` (Constructor/Initializer):** Initializes the object\'s instance attributes.\n3. **The `self` Parameter:** `self` is an explicit reference to the **specific instance object** upon which a method was called. When you invoke `user.get_name()`, Python translates it behind the scenes to `User.get_name(user)`.',
      analogyHero: 'Think of a class like an architectural blueprint for a smart home. The blueprint defines what rooms and lights exist. An object instance is an actual physical house built from that blueprint. Turning on the lights in House A (self) does not turn on lights in House B.',
      objectives: [
        'Understand classes as blueprints and objects as heap-allocated instances.',
        'Master the `__init__` initializer and the explicit `self` reference.',
        'Differentiate between instance attributes (unique to each object) and class attributes (shared across all instances).',
        'Implement basic encapsulation and string representation (`__str__` and `__repr__`).'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: 'class User:\n    species = "Homo Sapiens"  # Class attribute\n    \n    def __init__(self, name: str):\n        self.name = name     # Instance attribute\n        \n    def __str__(self) -> str:\n        return f"User({self.name})"',
      sections: [
        {
          id: 'sec-13-1',
          title: 'Classes, Instances, Self & Attribute Scope',
          difficulty: 'Beginner',
          analogy: 'A class attribute is like the company logo printed on every employee badge (shared by all). An instance attribute is the specific employee\'s name and photo (unique to each person).',
          content: '### 1. Instance Attributes vs Class Attributes\n- **Instance Attributes:** Defined inside `__init__` as `self.attribute`. Each object instance maintains its own independent copy in memory.\n- **Class Attributes:** Defined directly in the class body. Shared by all instances of that class.\n\n### 2. The Dunder Methods `__str__` and `__repr__`\n- `__repr__()`: Developer-focused formal string representation (should look like valid code to recreate the object).\n- `__str__()`: User-friendly readable representation for `print()` and UI displays.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_class_basics.py',
              code: '# Defining a complete class with instance state and methods\nclass BankAccount:\n    bank_name = "Skillora Global Bank"  # Class attribute (shared)\n    \n    def __init__(self, account_holder: str, initial_balance: float = 0.0):\n        self.holder = account_holder    # Instance attribute (unique)\n        self.balance = initial_balance  # Instance attribute (unique)\n        self._transaction_history = []\n        \n    def deposit(self, amount: float) -> float:\n        if amount <= 0:\n            raise ValueError("Deposit amount must be positive.")\n        self.balance += amount\n        self._transaction_history.append(f"Deposit: +${amount:.2f}")\n        return self.balance\n        \n    def withdraw(self, amount: float) -> float:\n        if amount > self.balance:\n            raise ValueError("Insufficient balance.")\n        self.balance -= amount\n        self._transaction_history.append(f"Withdrawal: -${amount:.2f}")\n        return self.balance\n        \n    def __str__(self) -> str:\n        return f"BankAccount(Holder: {self.holder}, Balance: ${self.balance:.2f})"\n\n# Instantiating objects\nacc1 = BankAccount("Amir", 500.0)\nacc2 = BankAccount("Sarah", 1200.0)\n\nacc1.deposit(250.0)\nprint(acc1)\nprint(acc2)',
              explanation: 'Demonstrates class attributes, instance attributes, methods modifying state, and the `__str__` dunder method.',
              lineByLine: [
                { line: 'class BankAccount:', explanation: 'Defines the BankAccount type class.' },
                { line: 'self.holder = account_holder', explanation: 'Binds holder string to this specific instance object.' },
                { line: 'acc1.deposit(250.0)', explanation: 'Calls deposit method passing acc1 implicitly as self.' }
              ]
            },
            {
              language: 'python',
              filename: '02_class_vs_instance_attributes.py',
              code: '# Class Attributes vs Instance Attributes in Memory\nclass DatabaseConnection:\n    connection_pool_size = 10  # Shared class-level configuration\n    \n    def __init__(self, client_id: str):\n        self.client_id = client_id  # Unique instance identifier\n\nconn1 = DatabaseConnection("Client_A")\nconn2 = DatabaseConnection("Client_B")\n\nprint(f"conn1 pool: {conn1.connection_pool_size}")\nprint(f"conn2 pool: {conn2.connection_pool_size}")\n\n# Modifying class attribute updates all instances!\nDatabaseConnection.connection_pool_size = 25\nprint(f"Updated conn1 pool: {conn1.connection_pool_size}")\nprint(f"Updated conn2 pool: {conn2.connection_pool_size}")',
              explanation: 'Illustrates how class attributes are shared across all instances.',
              lineByLine: [
                { line: 'connection_pool_size = 10', explanation: 'Allocated on the class object once; shared by all instances.' },
                { line: 'DatabaseConnection.connection_pool_size = 25', explanation: 'Modifies the shared attribute for all existing and future instances.' }
              ]
            },
            {
              language: 'python',
              filename: '03_str_vs_repr.py',
              code: '# Professional __str__ and __repr__ implementation\nclass Product:\n    def __init__(self, product_id: int, name: str, price: float):\n        self.id = product_id\n        self.name = name\n        self.price = price\n        \n    def __repr__(self) -> str:\n        # Formal representation for debugging\n        return f"Product(product_id={self.id}, name={self.name!r}, price={self.price})"\n        \n    def __str__(self) -> str:\n        # User-friendly representation\n        return f"{self.name} (${self.price:.2f})"\n\np = Product(101, "Mechanical Keyboard", 129.99)\nprint(f"User View (str):    {str(p)}")\nprint(f"Developer View (repr): {repr(p)}")',
              explanation: 'Demonstrates clean implementation of `__str__` for humans and `__repr__` for debuggers.',
              lineByLine: [
                { line: 'def __repr__(self):', explanation: 'Defines unambiguous developer representation.' },
                { line: 'def __str__(self):', explanation: 'Defines readable string representation for print statements.' }
              ]
            }
          ],
          commonMistakes: [
            'Forgetting `self` in method definitions: Writing `def get_name():` raises `TypeError: get_name() takes 0 positional arguments but 1 was given`. In Python, methods must explicitly accept `self` as their first parameter.',
            'Accidentally overriding class attributes via instance assignment: Writing `conn1.connection_pool_size = 50` creates a new instance attribute on `conn1` rather than updating the shared class attribute.'
          ],
          proTip: 'In modern Python 3.7+, look into `@dataclass` from the standard library for generating boilerplate `__init__`, `__repr__`, and `__eq__` methods automatically.',
          miniPractice: {
            question: 'What is the role of the `self` parameter in a Python class method?',
            options: [
              'It refers to the global module scope',
              'It is an explicit reference to the specific object instance on which the method was called',
              'It creates a new background thread',
              'It acts as an alias for the class type'
            ],
            correctAnswer: 1,
            explanation: '`self` is the explicit first parameter representing the current instance of the class, allowing access and modification of instance attributes.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Inventory Item with Discount and Stock Management',
          instructions: 'Create an `InventoryItem` class with `sku`, `name`, `unit_price`, and `stock_quantity`. Implement `add_stock(qty)`, `sell(qty)` (with error if insufficient stock), and `calculate_value()`.',
          starterCode: 'class InventoryItem:\n    # Implement InventoryItem class\n    pass',
          solutionCode: 'class InventoryItem:\n    def __init__(self, sku: str, name: str, unit_price: float, stock_quantity: int = 0):\n        self.sku = sku\n        self.name = name\n        self.unit_price = unit_price\n        self.stock_quantity = stock_quantity\n        \n    def add_stock(self, qty: int):\n        if qty <= 0: raise ValueError("Quantity must be positive.")\n        self.stock_quantity += qty\n        \n    def sell(self, qty: int) -> float:\n        if qty > self.stock_quantity:\n            raise ValueError(f"Insufficient stock ({self.stock_quantity} available).")\n        self.stock_quantity -= qty\n        return qty * self.unit_price\n        \n    def calculate_total_value(self) -> float:\n        return self.stock_quantity * self.unit_price\n\nitem = InventoryItem("SKU-99", "Pro Wireless Mouse", 79.99, 10)\nitem.sell(3)\nprint(f"Remaining Stock: {item.stock_quantity} | Value: ${item.calculate_total_value():.2f}")'
        }
      ],
      keyTakeaways: [
        'Classes bundle data attributes and behavioral methods into cohesive object instances.',
        '`__init__` initializes instance state on the heap; `self` explicitly references the active instance.',
        'Instance attributes are unique to each object; class attributes are shared across all instances.',
        'Implement `__repr__` for developer debugging and `__str__` for human-readable output.'
      ],
      summary: 'You have mastered Object-Oriented Programming fundamentals, classes, instances, the self parameter, instance vs class attributes, and dunder string representations.'
    }
  },

  // ==========================================
  // MODULE 14: Beginner Final Project
  // ==========================================
  {
    id: 'py-beg-14',
    orderIndex: 14,
    title: 'Module 14: Beginner Final Project',
    description: 'Build a production-grade CLI Expense & Task Manager Capstone project integrating OOP, JSON persistence, error handling, and tabular reporting.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'beginner',
    resources: [
      { id: 'res-proj-01', title: 'Python Project Guidelines & Architecture', type: 'documentation', url: 'https://docs.python.org/3/tutorial/index.html' }
    ],
    lessonContent: {
      overview: '### The Capstone Milestone: Engineering a Complete Production CLI\n\nCongratulations on completing all theoretical modules of Python Beginner! In this capstone project, you will unify every concept learned—variables, operators, control flow, loops, strings, lists, dictionaries, functions, modules, file I/O, error handling, and OOP—into a robust, persistent **CLI Expense & Task Tracker**.\n\n### Software Architecture Blueprint\n\n1. **Data Model Layer (`Task` & `Expense` classes):** Models domain entities with validation, state management, and formatted `__str__` representations.\n2. **Persistence Layer (`StorageManager` class):** Handles atomic JSON reading, writing, UTF-8 encoding, and corrupted backup restoration.\n3. **Business Logic & CLI Controller (`AppController` class):** Implements user menus, defensive input validation with exception handling, and tabular reporting.',
      analogyHero: 'Think of building this capstone project like assembling an automobile: you have individually mastered the engine (control flow), transmission (OOP), fuel system (File I/O), and safety brakes (error handling). Now you connect them together into a high-performance vehicle ready for the road.',
      objectives: [
        'Architect a multi-class Python application adhering to Single Responsibility Principle.',
        'Persist application state safely to JSON disk storage using context managers.',
        'Handle corrupted files, missing keys, and invalid numeric user inputs defensively.',
        'Format tabular reports with formatted f-strings, alignment padding, and decimal precision.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: '# Capstone Architecture\nclass Task: ...\nclass ExpenseTracker: ...\nclass JSONStorage: ...\n\nif __name__ == "__main__":\n    main_loop()',
      sections: [
        {
          id: 'sec-14-1',
          title: 'Full Capstone Implementation: CLI Expense & Task Manager',
          difficulty: 'Beginner',
          analogy: 'Building a complete software project from scratch is like composing a symphony: every instrument (module) plays its part in harmony to create a polished masterpiece.',
          content: '### 1. Architectural Separation of Concerns\n- Domain Models (`Expense`, `Task`): Encapsulate data attributes and business validation rules.\n- Storage Manager (`JSONStorage`): Encapsulates all disk file I/O and JSON serialization.\n- CLI Manager (`TaskManagerApp`): Handles command-line loops, user input prompts, and display rendering.\n\n### 2. Defensive Engineering Patterns\n- Never crash on invalid user input: wrap all `int()` / `float()` casts in `try...except ValueError`.\n- Protect storage files from partial writes by using atomic file context managers.',
          codeSnippets: [
            {
              language: 'python',
              filename: '01_capstone_models.py',
              code: 'import json\nfrom datetime import datetime, timezone\n\n# 1. Domain Entity: Expense Record\nclass Expense:\n    def __init__(self, expense_id: int, category: str, amount: float, description: str):\n        if amount <= 0:\n            raise ValueError("Expense amount must be strictly positive.")\n        self.id = expense_id\n        self.category = category.strip().title()\n        self.amount = float(amount)\n        self.description = description.strip()\n        self.timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M")\n\n    def to_dict(self) -> dict:\n        return {\n            "id": self.id,\n            "category": self.category,\n            "amount": self.amount,\n            "description": self.description,\n            "timestamp": self.timestamp\n        }\n\n    @classmethod\n    def from_dict(cls, data: dict) -> "Expense":\n        exp = cls(data["id"], data["category"], data["amount"], data["description"])\n        exp.timestamp = data.get("timestamp", exp.timestamp)\n        return exp\n\n    def __str__(self) -> str:\n        return f"[{self.timestamp}] #{self.id:<3} | {self.category:<12} | ${self.amount:>8.2f} | {self.description}"',
              explanation: 'Defines the `Expense` domain model with validation, serialization to dict, and formatted string representation.',
              lineByLine: [
                { line: 'if amount <= 0: raise ValueError(...)', explanation: 'Defensively validates business invariant before initializing state.' },
                { line: 'def to_dict(self) -> dict:', explanation: 'Serializes class instance to a clean JSON-compatible dictionary.' },
                { line: '@classmethod def from_dict(cls, data):', explanation: 'Factory method reconstructing Expense instances from saved dictionary state.' }
              ]
            },
            {
              language: 'python',
              filename: '02_capstone_storage.py',
              code: 'import json\nimport os\n\n# 2. Persistence Layer: JSON Storage Manager\nclass StorageManager:\n    def __init__(self, filepath: str = "expenses.json"):\n        self.filepath = filepath\n\n    def load_expenses(self) -> list:\n        if not os.path.exists(self.filepath):\n            return []\n        try:\n            with open(self.filepath, "r", encoding="utf-8") as f:\n                raw_data = json.load(f)\n                return [Expense.from_dict(item) for item in raw_data]\n        except (json.JSONDecodeError, KeyError, ValueError) as err:\n            print(f"⚠️ Warning: Could not parse {self.filepath} ({err}). Starting with empty dataset.")\n            return []\n\n    def save_expenses(self, expenses: list) -> bool:\n        try:\n            payload = [exp.to_dict() for exp in expenses]\n            with open(self.filepath, "w", encoding="utf-8") as f:\n                json.dump(payload, f, indent=2)\n            return True\n        except Exception as err:\n            print(f"❌ Error saving to disk: {err}")\n            return False',
              explanation: 'Implements crash-resistant JSON file persistence with fallback handling for missing or corrupted files.',
              lineByLine: [
                { line: 'if not os.path.exists(self.filepath): return []', explanation: 'Returns empty list cleanly when running for the first time.' },
                { line: 'with open(self.filepath, "w", encoding="utf-8") as f:', explanation: 'Guarantees file handle teardown during serialization.' }
              ]
            },
            {
              language: 'python',
              filename: '03_capstone_cli_engine.py',
              code: '# 3. Complete CLI Engine with Interactive Loop\nclass ExpenseTrackerApp:\n    def __init__(self):\n        self.storage = StorageManager("budget_data.json")\n        self.expenses = self.storage.load_expenses()\n\n    def get_next_id(self) -> int:\n        return max([exp.id for exp in self.expenses], default=0) + 1\n\n    def add_expense(self, category: str, amount: float, description: str):\n        exp = Expense(self.get_next_id(), category, amount, description)\n        self.expenses.append(exp)\n        self.storage.save_expenses(self.expenses)\n        print(f"✅ Added: {exp}")\n\n    def generate_report(self):\n        print("\\n" + "=" * 65)\n        print(f"{\'SKILLORA EXPENSE AUDIT REPORT\':^65}")\n        print("=" * 65)\n        if not self.expenses:\n            print("No expense records found.")\n            return\n        total = sum(exp.amount for exp in self.expenses)\n        for exp in self.expenses:\n            print(exp)\n        print("-" * 65)\n        print(f"{\'TOTAL EXPENDITURE:\':<45} ${total:>15.2f}")\n        print("=" * 65 + "\\n")\n\n# CLI Test Execution\nif __name__ == "__main__":\n    app = ExpenseTrackerApp()\n    app.add_expense("Cloud Infrastructure", 149.99, "GCP Cloud Run & BigQuery")\n    app.add_expense("Development Tools", 40.00, "IDE & Copilot Subscription")\n    app.generate_report()',
              explanation: 'Assembles the complete interactive application uniting models, storage, calculations, and formatted reports.',
              lineByLine: [
                { line: 'total = sum(exp.amount for exp in self.expenses)', explanation: 'Calculates aggregate budget expenditure using a generator expression.' },
                { line: 'app.generate_report()', explanation: 'Renders aligned tabular terminal report.' }
              ]
            }
          ],
          commonMistakes: [
            'Storing floating point currency values directly in JSON without rounding: Use `round(amount, 2)` or `decimal.Decimal` in financial systems to prevent `$19.990000000000002` floating point inaccuracies.',
            'Ignoring file write errors: Always verify that write operations succeed and handle permission or disk-full exceptions.'
          ],
          proTip: 'Structure your Python projects with a clear separation between domain entities, persistence layers, and user interface presentation. This is the foundation of clean architecture.',
          miniPractice: {
            question: 'Why is separating domain logic from file I/O and UI controllers a best practice in software engineering?',
            options: [
              'It makes Python scripts run in C speed',
              'It enforces Single Responsibility Principle, making code modular, testable, and maintainable',
              'It is required by the Python compiler',
              'It reduces file size on disk'
            ],
            correctAnswer: 1,
            explanation: 'Separation of concerns (Single Responsibility Principle) isolates business logic from storage formats and UI presentation, making software easy to test, refactor, and maintain.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Budget Threshold Alert System',
          instructions: 'Extend the `ExpenseTrackerApp` with a method `check_budget(category, budget_limit)` that calculates total spent in that category and prints a warning alert if the user exceeded the budget limit.',
          starterCode: '# Extend ExpenseTrackerApp with budget checking logic\ndef check_budget(expenses: list, category: str, limit: float):\n    pass',
          solutionCode: 'def check_budget(expenses: list, category: str, limit: float):\n    category_clean = category.strip().title()\n    spent = sum(exp.amount for exp in expenses if exp.category == category_clean)\n    if spent > limit:\n        print(f"🚨 BUDGET EXCEEDED for {category_clean}: Spent ${spent:.2f} (Limit: ${limit:.2f})")\n    else:\n        print(f"✅ Budget OK for {category_clean}: Spent ${spent:.2f} of ${limit:.2f} allowance.")'
        }
      ],
      keyTakeaways: [
        'Production Python applications combine OOP data models, persistence managers, and defensive input controllers.',
        'Use `to_dict()` and `from_dict()` serialization methods for clean JSON persistence.',
        'Catch specific exceptions (`ValueError`, `KeyError`, `FileNotFoundError`) to ensure zero-crash CLI experiences.',
        'Format professional terminal reports using f-string column width and alignment specs.'
      ],
      summary: 'You have completed the Python Beginner Capstone Project, engineering an end-to-end persistent CLI Expense & Task Manager with clean OOP architecture.'
    }
  },

  // ==========================================
  // MODULE 15: Beginner Milestone Assessment
  // ==========================================
  {
    id: 'py-beg-assessment',
    orderIndex: 15,
    title: 'Python Beginner Comprehensive Final Assessment',
    description: 'Comprehensive 20-question final exam covering Python Fundamentals, Variables, Operators, Control Flow, Collections, Functions, File I/O, Error Handling, and OOP. Score 15/20 (75%) to unlock Intermediate certification.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 300,
    level: 'beginner',
    resources: [],
    questions: PYTHON_BEGINNER_FINAL_ASSESSMENT
  }
];
