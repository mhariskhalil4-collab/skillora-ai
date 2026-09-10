import { LessonContent, QuizQuestion } from '../types/roadmap.types';

export const getLessonContentForTask = (taskTitle: string, taskDescription?: string): LessonContent => {
  const lower = taskTitle.toLowerCase();

  // --- 1. PYTHON / PROGRAMMING FUNDAMENTALS ---
  if (lower.includes('python') || lower.includes('programming')) {
    return {
      overview: "Welcome to Python! Think of Python not as complicated math, but simply as a way to give clear, step-by-step instructions to a very fast computer assistant. It's designed to read just like everyday English.",
      analogyHero: "Imagine cooking from a recipe book: each line in your recipe tells you what ingredients to grab and what action to take next. That's exactly how Python code runs!",
      estimatedTime: '12 min read',
      objectives: [
        'Understand how variables work like labeled storage containers.',
        'Learn how Python makes decisions using simple if-else statements.',
        'See how loops save you hours by automating repetitive chores.',
        'Write your very first reusable Python function.'
      ],
      sections: [
        {
          id: 'sec_1',
          title: 'Step 1: Variables (Your Digital Storage Boxes)',
          difficulty: 'Beginner',
          analogy: "Think of a variable like a cardboard box with a sticky note on it. If you write 'student_name' on the label and put the paper 'Sarah' inside, whenever you ask for 'student_name', Python hands you 'Sarah'.",
          content: "In programming, you often need to remember information—like a user's name, their test score, or whether they are logged in. We create variables using a simple `=` sign.",
          codeSnippets: [
            {
              language: 'python',
              filename: 'greeting.py',
              code: `student_name = "Sarah"\nstreak_days = 14\nis_learning = True\n\nprint("Hello, " + student_name)\nprint(f"You have been studying for {streak_days} days straight!")`,
              explanation: 'Here we store text ("Sarah"), a whole number (14), and a True/False decision, then display a friendly greeting.',
              lineByLine: [
                { line: 'student_name = "Sarah"', explanation: 'Creates a box named student_name and stores the text "Sarah" inside.' },
                { line: 'streak_days = 14', explanation: 'Creates a box named streak_days and stores the number 14 inside.' },
                { line: 'is_learning = True', explanation: 'Stores a boolean (Yes/No flag) showing the student is actively learning.' },
                { line: 'print(...)', explanation: 'Displays our personalized message to the student on the screen.' }
              ]
            }
          ],
          miniPractice: {
            question: "If you write `price = 25`, what did Python just do?",
            options: [
              "It checked if price is equal to 25",
              "It saved the number 25 into a labeled variable named price",
              "It printed the number 25 to the screen"
            ],
            correctAnswer: 1,
            explanation: "Spot on! The single `=` sign is the assignment operator. It packs the value 25 into the variable named price."
          },
          proTip: "Always name your variables clearly (like `user_email` instead of just `x`). It makes your code easy for anyone to read!"
        },
        {
          id: 'sec_2',
          title: 'Step 2: Decisions & Repetition (If-Else & Loops)',
          difficulty: 'Intermediate',
          analogy: "Imagine an automated thermostat: 'IF the room temperature is below 20°C, turn on the heater. OTHERWISE, stay off.' That is an if-else decision in code!",
          content: "Computers are great at making quick decisions based on conditions and repeating tasks millions of times without getting tired.",
          codeSnippets: [
            {
              language: 'python',
              filename: 'quiz_grader.py',
              code: `quiz_score = 85\n\n# Making a decision\nif quiz_score >= 70:\n    print("🎉 Congratulations, you passed!")\nelse:\n    print("Keep practicing, you'll get it next time!")\n\n# Repeating an action for a list of topics\ntopics = ["Python", "Variables", "Loops"]\nfor topic in topics:\n    print(f"Ready to learn: {topic}")`,
              explanation: 'The `if` statement checks the score, and the `for` loop goes through each topic one by one.',
              lineByLine: [
                { line: 'if quiz_score >= 70:', explanation: 'Checks if the score is 70 or higher.' },
                { line: '    print("🎉 ...")', explanation: 'Only runs if the score was 70 or higher (notice the 4-space indentation!).' },
                { line: 'else:', explanation: 'Runs if the condition above was false (score under 70).' },
                { line: 'for topic in topics:', explanation: 'Picks each topic from our list, one at a time, and runs the print command.' }
              ]
            }
          ],
          miniPractice: {
            question: "What will print if `score = 65` and the code checks `if score >= 70`?",
            options: [
              "The code inside the `else:` section",
              "The code inside the `if:` section",
              "Nothing will happen"
            ],
            correctAnswer: 0,
            explanation: "Correct! Since 65 is less than 70, the `if` check evaluates to False, so Python skips to the `else:` block."
          }
        },
        {
          id: 'sec_3',
          title: 'Step 3: Functions (Your Custom Reusable Tools)',
          difficulty: 'Advanced',
          analogy: "Think of a microwave button labeled 'Popcorn': you don't reprogram the microwave every time. You just press the button, and it runs a pre-saved sequence. A function is your custom 'Popcorn button' in code!",
          content: "When you write code that you want to reuse over and over with different inputs, you wrap it in a function using the keyword `def`.",
          codeSnippets: [
            {
              language: 'python',
              filename: 'helpers.py',
              code: `def calculate_total_xp(completed_tasks, xp_per_task=50):\n    """Calculates total reward points earned."""\n    total = completed_tasks * xp_per_task\n    return total\n\n# Using our reusable function\nmy_xp = calculate_total_xp(3)\nprint(f"Total XP Earned: {my_xp}") # Outputs 150`,
              explanation: 'We create a function once and can call it anytime with different numbers.',
              lineByLine: [
                { line: 'def calculate_total_xp(...):', explanation: 'Defines our new custom tool named calculate_total_xp.' },
                { line: '    total = completed_tasks * xp_per_task', explanation: 'Multiplies the tasks completed by the reward value.' },
                { line: '    return total', explanation: 'Sends the final calculated result back to whoever used the function.' },
                { line: 'my_xp = calculate_total_xp(3)', explanation: 'Runs our tool for 3 tasks and saves 150 into my_xp.' }
              ]
            }
          ],
          proTip: "Functions save you from repeating yourself. In programming, there's a popular rule called DRY: 'Don't Repeat Yourself'!"
        }
      ],
      keyTakeaways: [
        'Variables hold data like labeled storage boxes (names, numbers, flags).',
        'If-Else statements allow code to make intelligent decisions based on user input.',
        'Loops automate repetitive tasks across lists effortlessly.',
        'Functions bundle useful instructions into reusable tools you can call anytime.'
      ],
      summary: "You now understand how Python thinks and executes instructions. You are fully ready to take the knowledge check quiz below!"
    };
  }

  // --- 2. SHOPIFY LIQUID / E-COMMERCE THEMES ---
  if (lower.includes('liquid') || lower.includes('shopify') || lower.includes('e-commerce') || lower.includes('ecommerce')) {
    return {
      overview: "Shopify Liquid is the magic brush behind millions of online stores. It takes store information (like product titles, prices, and stock) and dynamically slots it into webpage templates.",
      analogyHero: "Think of a pre-printed Certificate of Completion where the student's name is left blank. Liquid is the automated printer that fills in the correct student's name on every certificate without re-creating the design!",
      estimatedTime: '10 min read',
      objectives: [
        'Understand the difference between displaying data {{ }} and running logic {% %}.',
        'Learn how to dynamically show product titles, prices, and sale badges.',
        'Use Liquid filters to format dates, text, and currencies with one click.'
      ],
      sections: [
        {
          id: 'sec_1',
          title: 'Step 1: The Two Magic Brackets ({{ Output }} vs {% Logic %})',
          difficulty: 'Beginner',
          analogy: "Double curly braces `{{ }}` say 'Show this on the screen!' while percent braces `{% %}` say 'Do some thinking behind the scenes!'",
          content: "In Liquid, you only need to remember two main building blocks: Output tags to display information and Logic tags to make decisions.",
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'product-price.liquid',
              code: `<!-- 1. Display the product title -->\n<h1>{{ product.title }}</h1>\n\n<!-- 2. Show price and conditional in-stock badge -->\n<p class="price">{{ product.price | money }}</p>\n\n{% if product.available %}\n  <span class="badge in-stock">✅ Ready to Ship</span>\n{% else %}\n  <span class="badge sold-out">❌ Sold Out</span>\n{% endif %}`,
              explanation: 'We grab the product title from the store, format the price into currency, and show an in-stock badge if available.',
              lineByLine: [
                { line: '<h1>{{ product.title }}</h1>', explanation: 'Renders the product name directly inside an HTML heading.' },
                { line: '{{ product.price | money }}', explanation: 'The "| money" filter turns a raw number like 1999 into "$19.99".' },
                { line: '{% if product.available %}', explanation: 'Checks whether the item currently has stock in the store.' },
                { line: '{% else %}', explanation: 'Runs if the item has 0 stock, showing the "Sold Out" message.' },
                { line: '{% endif %}', explanation: 'Closes our conditional decision block.' }
              ]
            }
          ],
          miniPractice: {
            question: "Which code will safely display the store's name on the page?",
            options: [
              "{{ shop.name }}",
              "{% show shop.name %}",
              "<shop.name>"
            ],
            correctAnswer: 0,
            explanation: "Spot on! Double curly braces `{{ ... }}` are used whenever you want to output data onto the webpage."
          }
        },
        {
          id: 'sec_2',
          title: 'Step 2: Liquid Filters (The Instant Formatters)',
          difficulty: 'Intermediate',
          analogy: "Think of a Liquid filter like an Instagram photo filter: your original photo stays the same, but the filter adjusts how it looks right before people see it.",
          content: "Filters use the pipe symbol `|`. They take text or numbers, transform them (like shortening long text or adding currency symbols), and display the polished result.",
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'filters-demo.liquid',
              code: `<!-- Shorten product description to 15 words with ellipsis -->\n<p>{{ product.description | truncatewords: 15 }}</p>\n\n<!-- Capitalize every word in the title -->\n<h2>{{ product.title | capitalize }}</h2>\n\n<!-- Automatically serve optimized image from CDN -->\n{{ product.featured_image | image_url: width: 400 | image_tag }}`,
              explanation: 'Filters can be chained together using multiple pipe | characters.',
              lineByLine: [
                { line: '{{ ... | truncatewords: 15 }}', explanation: 'Prevents massive paragraphs by keeping only the first 15 words.' },
                { line: '{{ ... | capitalize }}', explanation: 'Ensures the text starts with clean capital letters.' },
                { line: '{{ ... | image_url: width: 400 | image_tag }}', explanation: 'Creates a blazing fast, responsive image tag sized at 400px.' }
              ]
            }
          ],
          miniPractice: {
            question: "What does `{{ 'hello world' | upcase }}` produce?",
            options: [
              "'hello world'",
              "'HELLO WORLD'",
              "'Hello World'"
            ],
            correctAnswer: 1,
            explanation: "Awesome! The `upcase` filter transforms every letter into uppercase capital letters."
          }
        }
      ],
      keyTakeaways: [
        '`{{ }}` outputs data directly; `{% %}` runs logic and decisions.',
        'Filters `|` format numbers, dates, and text effortlessly.',
        'Liquid templates automatically update whenever store owners add products in the dashboard.'
      ],
      summary: "You now grasp how Shopify themes dynamically showcase products and prices. Ready to take the quick verification quiz below?"
    };
  }

  // --- 3. GENERAL LEARNING MODULE (AI, WEB, DATA, MARKETING) ---
  return {
    overview: taskDescription || `Welcome to ${taskTitle}! This lesson breaks down the core concepts in clear, intuitive language so you can build real-world skills quickly and confidently.`,
    analogyHero: "Think of learning this concept like learning to drive a car: you don't need to build the engine from scratch to steer smoothly and reach your destination.",
    estimatedTime: '10 min read',
    objectives: [
      `Understand the big picture and why ${taskTitle} matters.`,
      'Explore real-world examples in plain English.',
      'Learn the essential best practices used by industry pros.',
      'Test your understanding with friendly interactive checkpoints.'
    ],
    sections: [
      {
        id: 'sec_1',
        title: 'Step 1: The Big Picture (What & Why)',
        difficulty: 'Beginner',
        analogy: "Imagine organizing a toolbox: instead of tossing tools randomly, you put hammers, wrenches, and screwdrivers into dedicated slots so you find them in seconds.",
        content: `At its heart, ${taskTitle} is about creating clear, organized, and reliable solutions. By breaking problems into simple, manageable steps, we avoid common bugs and speed up our workflow.`,
        codeSnippets: [
          {
            language: 'javascript',
            filename: 'example.js',
            code: `// A clean, beginner-friendly example\nconst moduleGoal = "${taskTitle}";\nconst isReadyToBuild = true;\n\nif (isReadyToBuild) {\n  console.log(\`Ready to master: \${moduleGoal}!\`);\n}`,
            explanation: 'Clean code uses descriptive names and clear structures so anyone on your team can understand it.',
            lineByLine: [
              { line: 'const moduleGoal = "..."', explanation: 'Stores our current topic title in a constant variable.' },
              { line: 'const isReadyToBuild = true', explanation: 'A boolean flag confirming our setup is ready.' },
              { line: 'if (isReadyToBuild) ...', explanation: 'Checks the flag and prints an encouraging message.' }
            ]
          }
        ],
        miniPractice: {
          question: `What is the primary benefit of modular structure in ${taskTitle}?`,
          options: [
            "It makes code and workflows easy to understand, test, and reuse",
            "It makes files as complicated as possible",
            "It deletes all variables automatically"
          ],
          correctAnswer: 0,
          explanation: "Exactly! Keeping things modular makes your projects easy to build, maintain, and share with clients or teams."
        },
        proTip: "Start simple. Build a small working version first, then add fancy features once the foundation is solid!"
      },
      {
        id: 'sec_2',
        title: 'Step 2: Practical Application & Best Practices',
        difficulty: 'Intermediate',
        analogy: "Think of an airplane checklist before takeoff: pilots follow simple verification steps to guarantee a smooth flight.",
        content: "When working on real-world projects, always validate your inputs, test edge cases, and write helpful comments so your future self can easily make updates.",
        proTip: "Review each step thoroughly before starting assessments. Building deep understanding beats rushing through!"
      }
    ],
    keyTakeaways: [
      'Focus on clarity and simplicity before optimizing for speed.',
      'Use real-world analogies to remember tricky technical concepts.',
      'Check your understanding with mini practices as you go.'
    ],
    summary: `You have completed the core concepts for ${taskTitle}. Mark the lesson complete below to unlock your knowledge verification quiz!`
  };
};

export const getQuizQuestionsForTask = (taskTitle: string): QuizQuestion[] => {
  const lower = taskTitle.toLowerCase();

  if (lower.includes('python') || lower.includes('programming')) {
    return [
      {
        id: 1,
        question: "Imagine you want to store a student's score of 95 in Python. What is the correct way to write it?",
        options: [
          "score = 95",
          "score == 95",
          "save score as 95",
          "number: score -> 95"
        ],
        correctAnswer: 0,
        explanation: "In Python, a single `=` is used to assign and store a value into a variable name."
      },
      {
        id: 2,
        question: "What happens if you run an `if` statement and the condition is False, but there is an `else:` block below it?",
        options: [
          "Python skips both blocks and gives an error",
          "Python executes the code inside the `else:` block",
          "Python repeats the question until it becomes True",
          "The program shuts down"
        ],
        correctAnswer: 1,
        explanation: "When an `if` check evaluates to False, Python automatically jumps to execute the code inside the `else:` block."
      },
      {
        id: 3,
        question: "Why do programmers create custom functions using `def`?",
        options: [
          "To avoid re-writing the same instructions multiple times (DRY principle)",
          "Because Python requires every single line to be a function",
          "To permanently lock variable values",
          "To hide code from the computer"
        ],
        correctAnswer: 0,
        explanation: "Functions let you bundle instructions into reusable tools you can call anytime with different inputs."
      }
    ];
  }

  if (lower.includes('liquid') || lower.includes('shopify') || lower.includes('e-commerce') || lower.includes('ecommerce')) {
    return [
      {
        id: 1,
        question: "Which brackets are used in Shopify Liquid when you want to display data on the screen?",
        options: [
          "Double curly braces: {{ product.title }}",
          "Percent braces: {% product.title %}",
          "Square brackets: [[ product.title ]]",
          "Angle brackets: << product.title >>"
        ],
        correctAnswer: 0,
        explanation: "`{{ }}` is the output tag used to render variables and content directly to the webpage."
      },
      {
        id: 2,
        question: "What does the Liquid pipe `|` symbol do?",
        options: [
          "It connects a variable to a filter that formats or changes how it looks",
          "It deletes the variable from the store database",
          "It reboots the Shopify server",
          "It stops code from executing"
        ],
        correctAnswer: 0,
        explanation: "The pipe `|` applies a filter (like `| money` or `| truncatewords: 10`) to format the output."
      },
      {
        id: 3,
        question: "Why is Shopify Liquid described as a template engine?",
        options: [
          "Because it fills store data dynamically into pre-designed HTML templates",
          "Because it creates physical hardware components",
          "Because it only works on static paper prints",
          "Because it replaces HTML completely"
        ],
        correctAnswer: 0,
        explanation: "Liquid acts like an automated form-filler, rendering dynamic store data into HTML templates on the fly."
      }
    ];
  }

  return [
    {
      id: 1,
      question: `What is the primary goal of ${taskTitle}?`,
      options: [
        "Building clear, scalable, and reusable solutions",
        "Writing unreadable code in a single massive file",
        "Bypassing all testing and validation",
        "Hardcoding passwords into public scripts"
      ],
      correctAnswer: 0,
      explanation: "Clean and modular solutions make projects easy to maintain, scale, and share."
    },
    {
      id: 2,
      question: "Why are real-world analogies and checklists valuable when learning complex topics?",
      options: [
        "They connect new technical concepts to things you already understand intuitively",
        "They make simple topics harder to remember",
        "They are required by the compiler to run code",
        "They slow down your learning progress"
      ],
      correctAnswer: 0,
      explanation: "Analogies bridge unfamiliar syntax to everyday intuition, accelerating real comprehension."
    }
  ];
};
