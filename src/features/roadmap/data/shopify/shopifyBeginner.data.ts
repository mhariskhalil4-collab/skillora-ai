import { Task, QuizQuestion } from '../../types/roadmap.types';

export const SHOPIFY_BEGINNER_FINAL_ASSESSMENT: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Liquid Fundamentals',
    question: 'What is Shopify Liquid primarily used for?',
    options: [
      'Database administration',
      'Dynamic theme templating',
      'Operating system development',
      'Image editing'
    ],
    correctAnswer: 1, // B
    explanation: 'Shopify Liquid is an open-source, server-rendered templating language used to load and render dynamic content in Shopify themes.'
  },
  {
    id: 2,
    topic: 'Liquid Syntax & Delimiters',
    question: 'Which syntax outputs a Liquid value?',
    options: [
      '{% %}',
      '{{ }}',
      '[[ ]]',
      '(( ))'
    ],
    correctAnswer: 1, // B
    explanation: 'Double curly braces {{ }} are output delimiters used to evaluate and print expressions, variables, and object properties onto the page.'
  },
  {
    id: 3,
    topic: 'Conditional Logic',
    question: 'Which tag is used for conditional logic?',
    options: [
      'if',
      'loop',
      'print',
      'condition'
    ],
    correctAnswer: 0, // A
    explanation: 'The if tag (along with elsif, else, unless, case/when) executes code blocks conditionally based on truthy or falsy evaluations.'
  },
  {
    id: 4,
    topic: 'Liquid Objects',
    question: 'Which object represents the current product?',
    options: [
      'store',
      'product',
      'item',
      'current'
    ],
    correctAnswer: 1, // B
    explanation: 'The product object contains all metadata, variants, media, tags, pricing, and descriptions for the current product context.'
  },
  {
    id: 5,
    topic: 'Variables & Data',
    question: 'Which tag creates a variable?',
    options: [
      'set',
      'assign',
      'variable',
      'let'
    ],
    correctAnswer: 1, // B
    explanation: 'The assign tag initializes or updates a Liquid variable in the local template scope: {% assign greeting = "Hello" %}.'
  },
  {
    id: 6,
    topic: 'Filters',
    question: 'Which filter converts text to uppercase?',
    options: [
      'upper',
      'uppercase',
      'upcase',
      'capital'
    ],
    correctAnswer: 2, // C
    explanation: 'In Liquid, the upcase filter converts all alphabetical characters in a string to uppercase: {{ "hello" | upcase }} outputs "HELLO".'
  },
  {
    id: 7,
    topic: 'Loops & Iteration',
    question: 'Which tag is used to iterate over a collection?',
    options: [
      'for',
      'each',
      'iterate',
      'repeat'
    ],
    correctAnswer: 0, // A
    explanation: 'The for tag iteratively loops through arrays and collections, such as {% for product in collection.products %}.'
  },
  {
    id: 8,
    topic: 'Liquid Objects',
    question: 'Which object provides cart information?',
    options: [
      'basket',
      'checkout',
      'cart',
      'order'
    ],
    correctAnswer: 2, // C
    explanation: 'The cart object represents the customer\'s shopping cart, giving access to line items, total price, item count, and attributes.'
  },
  {
    id: 9,
    topic: 'Product Data',
    question: 'Which property commonly contains a product title?',
    options: [
      'product.name',
      'product.title',
      'product.heading',
      'product.label'
    ],
    correctAnswer: 1, // B
    explanation: 'product.title returns the title string configured for that product in the Shopify merchant admin.'
  },
  {
    id: 10,
    topic: 'Filters',
    question: 'Which filter formats a Shopify price for display?',
    options: [
      'currency',
      'money',
      'price',
      'cash'
    ],
    correctAnswer: 1, // B
    explanation: 'The money filter (and variants like money_with_currency) formats price integers in cents into formatted localized currency strings.'
  },
  {
    id: 11,
    topic: 'Operators & Conditions',
    question: 'Which operator checks equality?',
    options: [
      '=',
      '==',
      '===',
      'equals'
    ],
    correctAnswer: 1, // B
    explanation: 'The == operator checks whether two expressions or values evaluate to the same value in Liquid conditional blocks.'
  },
  {
    id: 12,
    topic: 'Liquid Objects',
    question: 'Which object represents the current shop?',
    options: [
      'shop',
      'store',
      'website',
      'merchant'
    ],
    correctAnswer: 0, // A
    explanation: 'The global shop object provides store-level metadata such as shop.name, shop.currency, shop.domain, and shop.email.'
  },
  {
    id: 13,
    topic: 'Liquid Syntax & Delimiters',
    question: 'Which Liquid syntax starts a logic tag?',
    options: [
      '{{',
      '{{',
      '{%',
      '<%'
    ],
    correctAnswer: 2, // C
    explanation: 'Curly brace followed by percent sign {% begins logic tags such as {% if %}, {% for %}, and {% assign %}.'
  },
  {
    id: 14,
    topic: 'Conditional Logic',
    question: 'Which tag is used to close an if block?',
    options: [
      '{% close %}',
      '{% endif %}',
      '{% endcondition %}',
      '{% stop %}'
    ],
    correctAnswer: 1, // B
    explanation: 'Every opening {% if %} tag must be paired with a corresponding closing {% endif %} tag.'
  },
  {
    id: 15,
    topic: 'Loops & Iteration',
    question: 'What does forloop.index provide?',
    options: [
      'Current iteration number starting at 1',
      'Product price',
      'Collection count',
      'Customer ID'
    ],
    correctAnswer: 0, // A
    explanation: 'Inside a for loop, forloop.index provides the 1-based index of the current loop iteration.'
  },
  {
    id: 16,
    topic: 'Filters',
    question: 'Which filter joins array values into text?',
    options: [
      'combine',
      'join',
      'merge',
      'concat'
    ],
    correctAnswer: 1, // B
    explanation: 'The join filter combines the items of an array into a single string using a specified separator: {{ product.tags | join: ", " }}.'
  },
  {
    id: 17,
    topic: 'Liquid Objects',
    question: 'Which object can represent the logged-in customer?',
    options: [
      'user',
      'customer',
      'account',
      'member'
    ],
    correctAnswer: 1, // B
    explanation: 'The customer object is populated with the authenticated customer\'s data (first_name, email, orders) when logged in; otherwise nil.'
  },
  {
    id: 18,
    topic: 'Product Data',
    question: 'What does product.available generally indicate?',
    options: [
      'Product description length',
      'Whether the product can currently be purchased',
      'Product image size',
      'Product title length'
    ],
    correctAnswer: 1, // B
    explanation: 'product.available returns a boolean (true or false) indicating if at least one variant is in stock and purchasable.'
  },
  {
    id: 19,
    topic: 'Comments & Debugging',
    question: 'Which Liquid construct is appropriate for developer-only comments?',
    options: [
      'HTML comment only',
      '{% comment %} ... {% endcomment %}',
      '// ...',
      '/* ... */'
    ],
    correctAnswer: 1, // B
    explanation: '{% comment %} ... {% endcomment %} prevents enclosed code or developer notes from being parsed by Liquid or rendered into browser HTML source.'
  },
  {
    id: 20,
    topic: 'Filters',
    question: 'What is the purpose of a Liquid filter?',
    options: [
      'Modify or format a value',
      'Create a database',
      'Install Shopify',
      'Compile JavaScript'
    ],
    correctAnswer: 0, // A
    explanation: 'Liquid filters take an input value before the pipe symbol (|), perform a transformation or formatting operation, and return the modified output.'
  }
];

export const SHOPIFY_BEGINNER_TASKS: Task[] = [
  // =========================================================================
  // MODULE 1: Introduction to Shopify Liquid
  // =========================================================================
  {
    id: 'shopify-beg-01',
    orderIndex: 1,
    title: 'Module 1: Introduction to Shopify Liquid',
    description: 'Learn what Shopify and Shopify themes are, understand Liquid as a server-rendered templating language, master delimiters, theme structure, and dynamic HTML output.',
    status: 'in_progress',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-sh-01', title: 'Shopify Liquid Reference Documentation', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid' },
      { id: 'res-sh-02', title: 'Shopify Theme Architecture Guide', type: 'article', url: 'https://shopify.dev/docs/themes/architecture' }
    ],
    lessonContent: {
      overview: `### Welcome to Shopify Theme Engineering with Liquid

Shopify is the world's leading ecommerce platform, powering millions of online businesses globally. At the heart of every Shopify storefront's front-end experience is **Liquid**—an open-source, server-rendered templating language created by Shopify co-founder Tobias Lütke in 2006 (written in Ruby).

### 1. What is Shopify & What are Shopify Themes?
A **Shopify theme** defines the visual presentation, user layout, and storefront interactivity of an online shop. Merchants configure their catalogs, collections, navigation menus, and branding in the Shopify Admin. The theme's job is to take that raw data from the server and render it into fast, accessible, beautiful HTML, CSS, and JavaScript for the customer's web browser.

### 2. What is Liquid & Why Does Shopify Use It?
Liquid acts as the bridge between Shopify's database (stores, products, customers, carts) and the HTML delivered to the customer. 
- **Safe & Sandboxed:** Liquid is strictly a *templating engine*, not a general-purpose programming language. It cannot execute arbitrary server-side code or access private databases directly. This ensures merchant stores remain secure and fast.
- **Server-Rendered:** Liquid code is compiled and rendered on Shopify's lightning-fast edge servers *before* the web page reaches the visitor's browser.
- **Readable & Expressive:** Liquid syntax is clean, readable, and easy to maintain.

### 3. Difference Between HTML, CSS, JavaScript, and Liquid
- **HTML:** Defines the static structural skeleton of the webpage (\`<h1>\`, \`<div>\`, \`<p>\`).
- **CSS:** Defines typography, colors, layouts, flexbox/grid, and animations.
- **JavaScript:** Runs inside the client browser to handle dynamic runtime interactions (opening cart drawers, AJAX variant switching, popups).
- **Liquid:** Runs on the **server** to inject dynamic store data directly into the HTML skeleton before it leaves Shopify's servers.

### 4. Liquid Files (\`.liquid\`) & Theme Structure
Shopify theme files use the \`.liquid\` extension (such as \`product.liquid\`, \`header.liquid\`, \`theme.liquid\`). A standard Shopify theme is organized into directories:
- \`layout/\`: Master layout wrappers (e.g., \`theme.liquid\`) containing \`<html>\`, \`<head>\`, navigation, and \`{{ content_for_layout }}\`.
- \`templates/\`: Page-specific templates (\`index.json\`, \`product.json\`, \`collection.json\`).
- \`sections/\`: Modular, configurable UI sections that merchants can reorder in the Theme Customizer.
- \`snippets/\`: Reusable micro-components and partials (e.g., \`product-card.liquid\`, \`price.liquid\`).
- \`assets/\`: Static assets (compiled CSS, JavaScript files, SVGs, images).
- \`config/\`: Store settings schema (\`settings_schema.json\`) and merchant values (\`settings_data.json\`).
- \`locales/\`: Internationalization and translation JSON files (e.g., \`en.default.json\`, \`fr.json\`).

### 5. Static vs Dynamic Content
- **Static Content:** Hardcoded text that never changes: \`<h1>Welcome to our store</h1>\`.
- **Dynamic Content:** Server-injected data that updates automatically when changed in the admin: \`<h1>Welcome to {{ shop.name }}</h1>\`.

### 6. Liquid Delimiters & Comments
Liquid uses two primary delimiter styles:
1. **Output Delimiter (\`{{ }}\`):** Denotes an expression that evaluates and prints content: \`{{ product.title }}\`.
2. **Tag Delimiter (\`{% %}\`):** Denotes logic, loops, conditionals, variable assignments, and template control: \`{% if product.available %}\`.
3. **Comments (\`{% comment %} ... {% endcomment %}\`):** Liquid comments are stripped on the server. Unlike HTML comments (\`<!-- -->\`), Liquid comments **never appear in the client's rendered HTML source code**.

> [!WARNING]
> \`{# #}\` is used in Jinja/Twig/Nunjucks, but is **NOT** valid Shopify Liquid comment syntax. Always use \`{% comment %} ... {% endcomment %}\` in Shopify themes!`,
      analogyHero: 'Think of HTML as a blank pre-printed form with empty boxes. Liquid is the automated clerk on the server who looks up your store records and fills in the customer\'s name, product title, and price in indelible ink before mailing the completed letter to the browser.',
      objectives: [
        'Understand the core role of Shopify themes and Liquid templating in modern ecommerce.',
        'Distinguish between server-side Liquid execution and client-side HTML/CSS/JavaScript.',
        'Master Liquid delimiters: {{ }} for output, {% %} for tags and logic.',
        'Learn the official Shopify theme directory structure and file conventions.',
        'Write clean Liquid comments and prevent syntax errors.'
      ],
      estimatedTime: '30 mins',
      syntaxGuide: `{{ product.title }}               # Output expression (prints value)
{% if product.available %}         # Logic tag delimiter (does not print)
  <p>In Stock</p>
{% endif %}

{% comment %}
  Internal developer documentation: Stripped during server compilation
{% endcomment %}`,
      sections: [
        {
          id: 'sec-beg-1-1',
          title: 'Liquid Delimiters & Dynamic HTML Generation',
          difficulty: 'Beginner',
          analogy: 'Double curly braces {{ }} act like a megaphone shouting data onto the page. Percent braces {% %} act like a brain thinking and deciding quietly behind the scenes.',
          content: `### Understanding Server-Side Output vs Logic

In Shopify Liquid, everything enclosed within \`{{ }}\` is evaluated and printed directly into the HTML stream. Everything enclosed within \`{% %}\` performs logic (decisions, loops, variable assignments) without printing text directly unless combined with HTML or output tags.

Let's examine how Liquid evaluates and generates dynamic HTML on the server:`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-heading.liquid',
              code: `<h1>{{ product.title }}</h1>`,
              explanation: 'Renders the dynamic title of the active product wrapped inside a semantic HTML level-1 heading element.',
              lineByLine: [
                { line: '<h1>', explanation: 'Creates the opening semantic HTML heading tag.' },
                { line: '{{ product.title }}', explanation: 'Liquid output tag that retrieves and prints the title property of the current product object.' },
                { line: '</h1>', explanation: 'Closes the HTML heading element.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-shop-welcome.liquid',
              code: `<p class="welcome-text">Welcome to {{ shop.name }}</p>`,
              explanation: 'Interpolates the global shop name dynamically inside an introductory paragraph.',
              lineByLine: [
                { line: '<p class="welcome-text">', explanation: 'Opens an HTML paragraph with a CSS styling class.' },
                { line: 'Welcome to {{ shop.name }}', explanation: 'Combines static text "Welcome to " with dynamic shop name output.' },
                { line: '</p>', explanation: 'Closes the paragraph element.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-availability.liquid',
              code: `{% if product.available %}
  <p class="badge badge--success">Available in Stock</p>
{% else %}
  <p class="badge badge--sold-out">Sold out</p>
{% endif %}`,
              explanation: 'Conditional logic checking if the product is in stock, rendering the appropriate message and badge styling.',
              lineByLine: [
                { line: '{% if product.available %}', explanation: 'Evaluates the boolean product.available property. If true, enters this branch.' },
                { line: '  <p class="badge badge--success">Available in Stock</p>', explanation: 'Renders in-stock badge when available is true.' },
                { line: '{% else %}', explanation: 'Fallback branch executed when product.available is false (zero purchasable inventory).' },
                { line: '  <p class="badge badge--sold-out">Sold out</p>', explanation: 'Renders sold out badge when available is false.' },
                { line: '{% endif %}', explanation: 'Mandatory closing tag for the if condition block.' }
              ]
            }
          ],
          commonMistakes: [
            'Using {# comment #} or // comments inside Liquid templates. Liquid will either error or print them as raw text. Always use {% comment %} ... {% endcomment %}.',
            'Nesting output braces inside logic tags: writing {% if {{ product.available }} %} is a syntax error! Inside {% %}, reference variables and objects directly without {{ }}: {% if product.available %}.',
            'Expecting Liquid to respond to client browser events like button clicks. Liquid runs ONLY on the server before page delivery.'
          ],
          proTip: 'Liquid comments are completely removed during server rendering. Use them generously to document component architecture, required variables, and section parameters without increasing your HTML payload size.',
          miniPractice: {
            question: 'Which of the following correctly outputs the store\'s email address inside a paragraph?',
            options: [
              '<p>{% shop.email %}</p>',
              '<p>{{ shop.email }}</p>',
              '<p>[[ shop.email ]]</p>',
              '<p><% shop.email %></p>'
            ],
            correctAnswer: 1,
            explanation: 'Double curly braces {{ }} are the output delimiter used to evaluate and print object properties like shop.email onto the page.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Store Header Availability Notice',
          instructions: 'Create a Liquid snippet that outputs an <h2> heading with the shop name, followed by a conditional check: if the product is available, print a paragraph with "Order now for fast delivery"; otherwise print "Currently Unavailable".',
          starterCode: `<!-- Write your Liquid store header notice below -->
<h2>{{ shop.name }}</h2>

{% comment %} Add your product availability condition below {% endcomment %}
`,
          solutionCode: `<h2>{{ shop.name }}</h2>

{% if product.available %}
  <p class="delivery-notice">Order now for fast delivery</p>
{% else %}
  <p class="unavailable-notice">Currently Unavailable</p>
{% endif %}`
        }
      ],
      keyTakeaways: [
        'Shopify Liquid is an open-source, server-side templating engine designed for speed and security.',
        '{{ }} outputs values; {% %} executes logic, assignments, and flow control.',
        'Liquid runs on the server before HTML arrives in the customer\'s browser.',
        '{% comment %} ... {% endcomment %} provides private server-stripped notes.'
      ],
      summary: 'You have mastered the foundations of Shopify theme architecture, the role of Liquid as a server-side templating language, syntax delimiters, and dynamic HTML rendering.'
    }
  },

  // =========================================================================
  // MODULE 2: Variables, Output, and Basic Data
  // =========================================================================
  {
    id: 'shopify-beg-02',
    orderIndex: 2,
    title: 'Module 2: Variables, Output, and Basic Data',
    description: 'Master Liquid variable creation with assign and capture, understand Liquid data types (string, number, boolean, nil, empty, blank), and template scope.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-sh-var', title: 'Liquid Variable Tags Reference', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/tags/variable-tags' }
    ],
    lessonContent: {
      overview: `### Working with Variables in Shopify Liquid

Variables allow developers to store values, calculate intermediate states, capture multi-line HTML blocks, and simplify template logic.

### 1. Liquid Variable Tags: \`assign\` vs \`capture\`
- **\`assign\`**: Creates or overwrites a single variable with a scalar value or evaluated expression:
  \`{% assign greeting = 'Welcome to Skillora' %}\`
- **\`capture\`**: Evaluates and stores an entire block of text, Liquid tags, and HTML into a single string variable:
  \`{% capture full_message %}Welcome to {{ shop.name }}! We have {{ product.title }} in stock.{% endcapture %}\`

### 2. Core Liquid Data Types
Liquid supports six fundamental data types:
1. **String:** Text wrapped in single or double quotes (\`'Skillora'\`, \`"Shopify"\`).
2. **Number:** Integers (\`42\`) and floating-point numbers (\`19.99\`).
3. **Boolean:** \`true\` or \`false\`.
4. **Array:** Ordered list of values or objects (e.g., \`product.tags\`, \`cart.items\`).
5. **Nil:** Represents a non-existent or null value (\`nil\`). When an object property does not exist, Liquid returns \`nil\`.
6. **Empty / Blank:**
   - \`empty\`: Evaluates to true if an array or string has length 0.
   - \`blank\`: Evaluates to true if a string is empty, null, or contains only whitespace.

### 3. Variable Scope in Liquid
Variables declared with \`assign\` or \`capture\` in a template are accessible throughout that template file. However, when rendering snippets via the modern \`{% render 'snippet-name' %}\` tag, variables have isolated local scope unless explicitly passed as parameters.`,
      analogyHero: 'Think of `assign` like writing a quick number on a sticky note. Think of `capture` like recording an entire spoken voicemail and saving the audio file under a custom name.',
      objectives: [
        'Declare and manipulate variables using the assign tag.',
        'Use capture to construct multi-line strings and reusable HTML blocks.',
        'Understand Liquid data types: strings, numbers, booleans, nil, empty, and blank.',
        'Differentiate truthy and falsy values in Liquid expressions.'
      ],
      estimatedTime: '30 mins',
      syntaxGuide: `{% assign greeting = 'Welcome to Skillora' %}
{{ greeting }}

{% capture promo_banner %}
  <div class="banner">
    <strong>Special Offer:</strong> Save on {{ product.title }} today!
  </div>
{% endcapture %}
{{ promo_banner }}`,
      sections: [
        {
          id: 'sec-beg-2-1',
          title: 'Declaring & Printing Liquid Variables',
          difficulty: 'Beginner',
          analogy: 'Variables are labeled containers on your workbench where you keep parts ready for assembly.',
          content: `### Hands-on Variable Declaration and Types

Let's explore practical examples demonstrating string variables, numeric calculation variables, boolean flags, and captured HTML components.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-strings.liquid',
              code: `{% assign developer_name = 'Haris' %}
<p class="author-tag">Theme engineered by: {{ developer_name }}</p>`,
              explanation: 'Initializes a string variable and prints it inside an author attribution element.',
              lineByLine: [
                { line: '{% assign developer_name = \'Haris\' %}', explanation: 'Declares variable developer_name and assigns the string value "Haris".' },
                { line: '<p class="author-tag">', explanation: 'Opens an HTML paragraph tag with an author-tag class.' },
                { line: 'Theme engineered by: {{ developer_name }}', explanation: 'Interpolates the variable value into the text.' },
                { line: '</p>', explanation: 'Closes the paragraph.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-numbers.liquid',
              code: `{% assign standard_price = 50 %}
{% assign discount_rate = 10 %}
{% assign final_price = standard_price | minus: discount_rate %}

<div class="pricing-display">
  <span class="original">Original: \${{ standard_price }}</span>
  <span class="discounted">Final: \${{ final_price }}</span>
</div>`,
              explanation: 'Demonstrates numeric variable assignment, arithmetic filter application, and output formatting.',
              lineByLine: [
                { line: '{% assign standard_price = 50 %}', explanation: 'Stores integer 50 in standard_price.' },
                { line: '{% assign discount_rate = 10 %}', explanation: 'Stores integer 10 in discount_rate.' },
                { line: '{% assign final_price = standard_price | minus: discount_rate %}', explanation: 'Subtracts discount from standard price and stores result (40) in final_price.' },
                { line: '<div class="pricing-display">...</div>', explanation: 'Renders the pricing elements with dynamic values.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-capture.liquid',
              code: `{% assign is_in_stock = true %}

{% capture store_announcement %}
  <aside class="announcement-bar" role="region" aria-label="Announcement">
    <p>Welcome to <strong>{{ shop.name }}</strong>! Free worldwide shipping today.</p>
    {% if is_in_stock %}
      <span class="status-indicator live">Catalog Active</span>
    {% endif %}
  </aside>
{% endcapture %}

{{ store_announcement }}`,
              explanation: 'Uses capture to bundle structured HTML and conditional logic into a single reusable announcement variable.',
              lineByLine: [
                { line: '{% assign is_in_stock = true %}', explanation: 'Sets a boolean flag variable.' },
                { line: '{% capture store_announcement %}', explanation: 'Begins capturing all nested HTML and Liquid output into store_announcement.' },
                { line: '  <aside class="announcement-bar" ...>...</aside>', explanation: 'Structured HTML block containing shop.name and conditional markup.' },
                { line: '{% endcapture %}', explanation: 'Terminates the capture buffer.' },
                { line: '{{ store_announcement }}', explanation: 'Renders the captured string onto the page.' }
              ]
            }
          ],
          commonMistakes: [
            'Using quotation marks around numbers: {% assign count = "5" %} creates a string, not an integer, which causes arithmetic filters to behave unexpectedly.',
            'Forgetting that in Liquid, strings like "false" are truthy! Only false and nil are falsy.',
            'Assuming variables survive across separate HTTP requests. Liquid variables exist only during the current server render cycle.'
          ],
          proTip: 'Use `capture` when building complex classes or data attributes based on multiple conditionals, keeping your HTML template markup clean and readable.',
          miniPractice: {
            question: 'What is the value of result after executing: {% assign val = "   " %}{% if val == blank %}A{% else %}B{% endif %}?',
            options: [
              'A (because blank matches whitespace-only strings)',
              'B (because whitespace characters exist)',
              'Error: blank cannot be used with strings',
              'nil'
            ],
            correctAnswer: 0,
            explanation: 'The special keyword blank evaluates to true if a string is empty, nil, or consists entirely of whitespace characters.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Product Discount Badge Generator',
          instructions: 'Assign variables for `original_price` (100) and `sale_price` (75). Calculate the savings amount and capture a discount badge element displaying the dollar savings.',
          starterCode: `{% assign original_price = 100 %}
{% assign sale_price = 75 %}

{% comment %} Calculate savings and capture badge here {% endcomment %}
`,
          solutionCode: `{% assign original_price = 100 %}
{% assign sale_price = 75 %}
{% assign savings = original_price | minus: sale_price %}

{% capture discount_badge %}
  <div class="discount-badge">
    <span class="badge-text">Save \${{ savings }}!</span>
  </div>
{% endcapture %}

{{ discount_badge }}`
        }
      ],
      keyTakeaways: [
        '`assign` sets a variable; `capture` records a multi-line HTML string buffer.',
        'Liquid types include strings, numbers, booleans, arrays, nil, and blank/empty.',
        'In Liquid, only `false` and `nil` are falsy; all other values (including empty strings and 0) evaluate as truthy.',
        '`blank` and `empty` allow defensive checking against missing or whitespace-only inputs.'
      ],
      summary: 'You have learned how to declare and manipulate variables with assign and capture, understand Liquid data types, and implement defensive data checks.'
    }
  },

  // =========================================================================
  // MODULE 3: Liquid Objects
  // =========================================================================
  {
    id: 'shopify-beg-03',
    orderIndex: 3,
    title: 'Module 3: Liquid Objects',
    description: 'Explore the global and template-specific Shopify Liquid objects: shop, product, collection, cart, customer, page, blog, article, linklists, and routes.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-sh-obj', title: 'Shopify Liquid Objects Directory', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/objects' }
    ],
    lessonContent: {
      overview: `### The Core Objects of Shopify Storefronts

In Shopify Liquid, **objects** contain the actual data stored in your store's database. Liquid provides access to store configuration, product catalogs, customer accounts, and active shopping sessions through structured objects accessed via **dot notation**.

### 1. Global vs Contextual Objects
- **Global Objects:** Available on every page and template across the entire storefront:
  - \`shop\`: Store name, email, currency, domain, policies, address.
  - \`cart\`: Active cart items, item count, total price, discounts.
  - \`customer\`: Authenticated user info (nil if visitor is a guest).
  - \`linklists\`: Store navigation menus and links configured in Admin > Navigation.
  - \`routes\`: Standard localized storefront URLs (\`routes.cart_url\`, \`routes.root_url\`, \`routes.account_url\`).
  - \`settings\`: Merchant global theme settings from \`settings_data.json\`.
  - \`request\`: Current page type, host, and path (\`request.page_type\`).
- **Contextual / Template Objects:** Populated when viewing specific resource pages:
  - \`product\`: Available on product pages and product cards.
  - \`collection\`: Available on collection pages.
  - \`page\`: Available on standard CMS content pages.
  - \`blog\`: Available on blog directory listings.
  - \`article\`: Available on individual blog post pages.

### 2. Dot Notation & Properties
Object properties are accessed using dot notation (\`object.property\`):
- \`{{ shop.name }}\` -> "Skillora Official Store"
- \`{{ product.title }}\` -> "Developer Mechanical Keyboard"
- \`{{ collection.title }}\` -> "Summer 2026 Collection"
- \`{{ cart.item_count }}\` -> 3

### 3. Understanding Context Availability
If you attempt to access \`{{ product.title }}\` inside a blog template where no product context exists, Liquid evaluates the expression to \`nil\` and renders nothing. Professional theme developers always verify object existence before rendering.`,
      analogyHero: 'Think of Shopify Objects like folders in a giant filing cabinet. `shop` is the general office folder, `cart` is the shopping basket in the customer\'s hands, and `product` is the detailed spec sheet on the desk.',
      objectives: [
        'Master the primary Shopify Liquid objects: shop, product, collection, cart, customer, page, blog, article, linklists, routes.',
        'Understand dot notation for accessing nested attributes.',
        'Recognize the distinction between global objects and template-dependent objects.',
        'Implement defensive rendering for conditional object contexts.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: `{{ shop.name }}                   # Store title
{{ product.title }}               # Active product title
{{ product.description }}         # Product HTML description
{{ collection.title }}            # Active collection title
{{ cart.item_count }}             # Total quantity of items in cart
{{ customer.first_name }}         # Logged in customer first name
<a href="{{ routes.cart_url }}">Cart</a> # Safe localized cart route`,
      sections: [
        {
          id: 'sec-beg-3-1',
          title: 'Accessing Shopify Objects in Practice',
          difficulty: 'Beginner',
          analogy: 'Dot notation is like following breadcrumbs: start at the category, then pick the exact detail you need.',
          content: `### Hands-on Store, Product, and Cart Object Usage

Below are three complete practical examples demonstrating how to pull information from the product, collection, and cart objects.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-product-vendor.liquid',
              code: `<div class="product-meta">
  <span class="product-vendor">{{ product.vendor }}</span>
  <h1 class="product-title">{{ product.title }}</h1>
  <div class="product-type">Category: {{ product.type }}</div>
</div>`,
              explanation: 'Displays the product vendor, primary title heading, and product type category.',
              lineByLine: [
                { line: '<div class="product-meta">', explanation: 'Container for product metadata.' },
                { line: '  <span class="product-vendor">{{ product.vendor }}</span>', explanation: 'Outputs the brand or vendor name configured for this product.' },
                { line: '  <h1 class="product-title">{{ product.title }}</h1>', explanation: 'Outputs the product title as the primary page heading.' },
                { line: '  <div class="product-type">Category: {{ product.type }}</div>', explanation: 'Outputs the product type classification.' },
                { line: '</div>', explanation: 'Closes metadata wrapper.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-collection-header.liquid',
              code: `<header class="collection-header">
  <h1 class="collection-title">{{ collection.title }}</h1>
  <p class="collection-count">{{ collection.products_count }} Products Available</p>
  {% if collection.description != blank %}
    <div class="collection-description">{{ collection.description }}</div>
  {% endif %}
</header>`,
              explanation: 'Renders a collection header with title, total product count, and conditional description.',
              lineByLine: [
                { line: '<header class="collection-header">', explanation: 'Semantic header tag for collection banner.' },
                { line: '  <h1 class="collection-title">{{ collection.title }}</h1>', explanation: 'Outputs collection name.' },
                { line: '  <p class="collection-count">{{ collection.products_count }} Products Available</p>', explanation: 'Outputs total number of items in this collection.' },
                { line: '  {% if collection.description != blank %}', explanation: 'Guards against rendering an empty div if no description exists.' },
                { line: '    <div class="collection-description">{{ collection.description }}</div>', explanation: 'Outputs merchant-entered collection description.' },
                { line: '  {% endif %}', explanation: 'Closes guard clause.' },
                { line: '</header>', explanation: 'Closes header tag.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-cart-summary.liquid',
              code: `<div class="header-cart-widget">
  <a href="{{ routes.cart_url }}" class="cart-link" aria-label="View shopping cart">
    <span class="cart-label">Cart</span>
    <span class="cart-badge">
      {{ cart.item_count }}
    </span>
  </a>
</div>`,
              explanation: 'Builds a dynamic header cart link with badge showing live item count and dynamic cart URL.',
              lineByLine: [
                { line: '<div class="header-cart-widget">', explanation: 'Container wrapper for header cart icon.' },
                { line: '  <a href="{{ routes.cart_url }}" ...>', explanation: 'Uses routes.cart_url to ensure correct localized routing (e.g., /cart or /fr/cart).' },
                { line: '    <span class="cart-label">Cart</span>', explanation: 'Accessible text label.' },
                { line: '    <span class="cart-badge">{{ cart.item_count }}</span>', explanation: 'Prints the total item quantity across all cart items.' },
                { line: '  </a>', explanation: 'Closes anchor.' },
                { line: '</div>', explanation: 'Closes widget container.' }
              ]
            }
          ],
          commonMistakes: [
            'Hardcoding links like href="/cart" instead of using {{ routes.cart_url }}. Hardcoded links break on multi-language or internationalized subfolder stores.',
            'Assuming product or collection is available on every page. Always verify context or wrap in conditionals if developing shared components.',
            'Forgetting that collection.products_count includes all products in the collection, whereas collection.products returns the products on the current paginated page.'
          ],
          proTip: 'Always use the `routes` object (`routes.root_url`, `routes.cart_url`, `routes.account_login_url`) instead of hardcoding slash paths. This guarantees 100% compatibility with Shopify Markets and multi-language URLs.',
          miniPractice: {
            question: 'Which object property correctly provides the total number of individual items currently in the customer\'s cart?',
            options: [
              'cart.count',
              'cart.total_items',
              'cart.item_count',
              'cart.quantity'
            ],
            correctAnswer: 2,
            explanation: 'cart.item_count returns the total integer sum of all item quantities in the active cart.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Store Information Panel Component',
          instructions: 'Write a component that outputs the shop name, current product title (if in product context), and cart item count wrapped inside an accessible aside container.',
          starterCode: `<aside class="store-info-panel">
  <!-- Implement shop name, product title, and cart item count -->
</aside>`,
          solutionCode: `<aside class="store-info-panel">
  <div class="info-shop">Store: <strong>{{ shop.name }}</strong></div>
  {% if product %}
    <div class="info-product">Current Item: <span>{{ product.title }}</span></div>
  {% endif %}
  <div class="info-cart">Items in Cart: <span class="badge">{{ cart.item_count }}</span></div>
</aside>`
        }
      ],
      keyTakeaways: [
        'Shopify objects represent your store\'s live database records.',
        'Global objects (shop, cart, customer, routes, linklists) are accessible everywhere.',
        'Template objects (product, collection, article) are populated in their respective page contexts.',
        'Use `routes.*` to build internationalization-friendly URLs.'
      ],
      summary: 'You now understand all major Shopify Liquid objects, dot notation data access, and context-dependent object availability.'
    }
  },

  // =========================================================================
  // MODULE 4: Liquid Tags and Conditional Logic
  // =========================================================================
  {
    id: 'shopify-beg-04',
    orderIndex: 4,
    title: 'Module 4: Liquid Tags and Conditional Logic',
    description: 'Master conditional decision making with if, elsif, else, unless, case, and when. Learn comparison and logical operators (and, or, contains).',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-sh-control', title: 'Liquid Control Flow Tags', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/tags/control-flow-tags' }
    ],
    lessonContent: {
      overview: `### Decision Making and Control Flow in Liquid

Conditional tags allow your Shopify theme to adapt dynamically based on product inventory, customer authentication, pricing tiers, device contexts, and tag filters.

### 1. Conditional Tags
- **\`if\` / \`elsif\` / \`else\` / \`endif\`**: Standard multi-branch decision tree.
- **\`unless\` / \`endunless\`**: Executes the block ONLY when the condition is \`false\` (the opposite of \`if\`).
- **\`case\` / \`when\` / \`else\` / \`endcase\`**: Multi-value switcher, cleaner than multiple \`elsif\` blocks when checking one variable against multiple discrete values.

### 2. Comparison Operators
- \`==\`: Equal to.
- \`!=\`: Not equal to.
- \`>\`: Greater than.
- \`<\`: Less than.
- \`>=\`: Greater than or equal to.
- \`<=\`: Less than or equal to.

### 3. Logical Operators
- **\`and\`**: Both conditions must be truthy.
- **\`or\`**: At least one condition must be truthy.
- **\`contains\`**: Checks for substring inclusion in a string, or element membership inside an array (e.g. \`product.tags contains 'featured'\`).

> [!NOTE]
> Liquid evaluates operators from right to left unless structured cleanly. Grouping with parentheses \`()\` is NOT supported in Liquid syntax. To express complex logic, use nested \`if\` statements.`,
      analogyHero: 'Think of conditional logic like a smart store clerk standing at the door: if the customer is a VIP member, offer a discount; elsif the item is sold out, suggest a pre-order; otherwise charge standard retail.',
      objectives: [
        'Construct multi-branch conditionals using if, elsif, else, and unless.',
        'Use case and when for multi-value pattern matching.',
        'Master operators: ==, !=, >, <, >=, <=, and, or, and contains.',
        'Understand truthy vs falsy rules in Liquid control flow.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: `{% if product.price > 10000 and product.available %}
  <p>Eligible for Free Express Shipping</p>
{% elsif product.available %}
  <p>Standard Shipping Available</p>
{% else %}
  <p>Out of Stock</p>
{% endif %}

{% case template.name %}
  {% when 'index' %}
    <!-- Homepage specific -->
  {% when 'product' %}
    <!-- Product page specific -->
  {% else %}
    <!-- Default layout -->
{% endcase %}`,
      sections: [
        {
          id: 'sec-beg-4-1',
          title: 'Conditionals and Logical Operators in Action',
          difficulty: 'Beginner',
          analogy: 'An unless tag is like a sign that says "Keep walking unless the red light is on".',
          content: `### Practical Conditional Logic Patterns

Let's examine how professional Shopify themes evaluate customer status, product pricing thresholds, and inventory states.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-customer-auth.liquid',
              code: `{% if customer %}
  <div class="account-greeting">
    <p>Welcome back, <strong>{{ customer.first_name }}</strong>!</p>
    <a href="{{ routes.account_url }}">My Orders</a>
    <a href="{{ routes.account_logout_url }}">Log out</a>
  </div>
{% else %}
  <div class="account-actions">
    <p>Sign in to earn rewards points.</p>
    <a href="{{ routes.account_login_url }}" class="btn btn--primary">Log in</a>
    <a href="{{ routes.account_register_url }}" class="btn btn--secondary">Create account</a>
  </div>
{% endif %}`,
              explanation: 'Checks if the user is authenticated as a customer, displaying personalized greeting or login links.',
              lineByLine: [
                { line: '{% if customer %}', explanation: 'If the visitor is logged into a customer account, customer is an object (truthy).' },
                { line: '  <p>Welcome back, <strong>{{ customer.first_name }}</strong>!</p>', explanation: 'Prints the customer first name.' },
                { line: '{% else %}', explanation: 'Fallback for guest visitors where customer is nil.' },
                { line: '  <a href="{{ routes.account_login_url }}" ...>Log in</a>', explanation: 'Renders login and registration action buttons.' },
                { line: '{% endif %}', explanation: 'Closes conditional block.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-price-condition.liquid',
              code: `{% if product.compare_at_price > product.price %}
  {% assign savings = product.compare_at_price | minus: product.price %}
  <div class="badge-sale">
    <span class="sale-label">ON SALE</span>
    <span class="savings-amount">Save {{ savings | money }}</span>
  </div>
{% endif %}`,
              explanation: 'Compares the original comparison price with the current price to conditionally show a sale badge and savings.',
              lineByLine: [
                { line: '{% if product.compare_at_price > product.price %}', explanation: 'Checks if item is discounted (compare_at_price is higher than active selling price).' },
                { line: '  {% assign savings = product.compare_at_price | minus: product.price %}', explanation: 'Calculates the discount difference in cents.' },
                { line: '  <span class="savings-amount">Save {{ savings | money }}</span>', explanation: 'Formats the savings with the money filter.' },
                { line: '{% endif %}', explanation: 'Closes sale condition.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-case-when.liquid',
              code: `{% case product.type %}
  {% when 'Digital Course' %}
    <span class="delivery-icon">⚡ Instant Online Access</span>
  {% when 'Physical Book' %}
    <span class="delivery-icon">📦 Ships in 24 Hours</span>
  {% when 'Consulting' %}
    <span class="delivery-icon">📅 Book a Live Session</span>
  {% else %}
    <span class="delivery-icon">🛍️ Standard Fulfillment</span>
{% endcase %}`,
              explanation: 'Uses case/when to match product types and render specialized fulfillment badges.',
              lineByLine: [
                { line: '{% case product.type %}', explanation: 'Begins pattern matching against product.type string.' },
                { line: '  {% when \'Digital Course\' %}', explanation: 'Matches digital courses.' },
                { line: '  {% when \'Physical Book\' %}', explanation: 'Matches physical publications.' },
                { line: '  {% else %}', explanation: 'Default fallback for unlisted types.' },
                { line: '{% endcase %}', explanation: 'Closes case statement.' }
              ]
            }
          ],
          commonMistakes: [
            'Attempting to use parentheses for operator precedence: {% if (a or b) and c %} is invalid in Liquid. Instead, nest conditions: {% if a or b %}{% if c %}...{% endif %}{% endif %}.',
            'Using === (triple equals). Liquid supports only == and !=.',
            'Forgetting {% endcase %} or {% endif %}, which will halt template compilation.'
          ],
          proTip: 'The `contains` operator is case-sensitive and works on both strings and arrays: `{% if product.tags contains "Special" %}`. Make sure tag naming conventions in admin match your Liquid query.',
          miniPractice: {
            question: 'Which tag executes its block ONLY when the condition evaluates to false?',
            options: [
              '{% if not %}',
              '{% unless %}',
              '{% except %}',
              '{% check %}'
            ],
            correctAnswer: 1,
            explanation: 'The unless tag in Liquid executes its body only when the condition is false or nil.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Product VIP Stock Status Component',
          instructions: 'Build a component that checks if customer is logged in AND product tags contain "VIP". If both are true, render a special "Exclusive VIP Access" badge; otherwise, if product is available, render "General Availability"; else render "Sold Out".',
          starterCode: `{% comment %} Implement VIP stock status logic below {% endcomment %}
`,
          solutionCode: `{% if customer and product.tags contains 'VIP' %}
  <div class="badge badge--vip">⭐ Exclusive VIP Access</div>
{% elsif product.available %}
  <div class="badge badge--available">General Availability</div>
{% else %}
  <div class="badge badge--soldout">Sold Out</div>
{% endif %}`
        }
      ],
      keyTakeaways: [
        'Use `if`, `elsif`, `else`, and `endif` for structured conditional branching.',
        '`unless` evaluates when a condition is falsy.',
        '`case`/`when` is ideal for matching single variables against fixed options.',
        'Use `contains` for array membership and substring checks.'
      ],
      summary: 'You have mastered Liquid conditional statements, comparison and logical operators, and truthy/falsy evaluation rules.'
    }
  },

  // =========================================================================
  // MODULE 5: Loops and Iteration
  // =========================================================================
  {
    id: 'shopify-beg-05',
    orderIndex: 5,
    title: 'Module 5: Loops and Iteration',
    description: 'Master collection, array, and range loops with for and endfor. Learn forloop helper variables (index, index0, first, last) and parameters (limit, offset, reversed).',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-sh-iter', title: 'Liquid Iteration Tags Reference', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/tags/iteration-tags' }
    ],
    lessonContent: {
      overview: `### Iterating Over Store Data with Liquid Loops

Loops are essential for rendering product grids, cart line item tables, blog article lists, navigation dropdowns, and color swatch options.

### 1. The \`for\` Loop Tag
The \`for\` tag iterates over arrays, collections, and numeric ranges:
\`\`\`liquid
{% for product in collection.products %}
  <h2>{{ product.title }}</h2>
{% endfor %}
\`\`\`

### 2. The \`forloop\` Helper Object
Inside any active \`for\` block, Liquid automatically provides the \`forloop\` object containing useful iteration metadata:
- \`forloop.index\`: 1-based index (1, 2, 3...).
- \`forloop.index0\`: 0-based index (0, 1, 2...).
- \`forloop.first\`: Returns \`true\` during the first iteration.
- \`forloop.last\`: Returns \`true\` during the final iteration.
- \`forloop.length\`: Total number of items in the loop.
- \`forloop.rindex\`: 1-based index in reverse (countdown to 1).
- \`forloop.rindex0\`: 0-based index in reverse.

### 3. Loop Parameters (\`limit\`, \`offset\`, \`reversed\`)
Liquid allows precise slicing of iterated arrays directly in the tag header:
- **\`limit: <number>\`**: Stops iteration after reaching N items:
  \`{% for product in collection.products limit: 4 %}\`
- **\`offset: <number>\`**: Skips the first N items before starting:
  \`{% for product in collection.products offset: 2 limit: 4 %}\`
- **\`reversed\`**: Iterates in reverse order:
  \`{% for item in cart.items reversed %}\`

### 4. Handling Empty Collections Safely (\`{% else %}\` in \`for\`)
Liquid \`for\` loops support an optional \`{% else %}\` branch that runs if the collection is empty:
\`\`\`liquid
{% for product in collection.products %}
  <p>{{ product.title }}</p>
{% else %}
  <p class="empty-notice">No products found in this collection.</p>
{% endfor %}
\`\`\``,
      analogyHero: 'Think of a for loop like a conveyor belt in a packing facility. As each box passes by, the worker inspects the contents, checks if it\'s the first or last box, applies a shipping label, and sends it on.',
      objectives: [
        'Iterate over arrays, product collections, and cart items with for and endfor.',
        'Leverage forloop.index, forloop.first, and forloop.last for conditional styling and markup.',
        'Apply limit, offset, and reversed parameters.',
        'Handle empty arrays defensively using for ... else.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: `{% for item in collection.products limit: 4 offset: 2 %}
  <div class="card {% if forloop.first %}card--featured{% endif %}">
    <span>#{{ forloop.index }}</span> {{ item.title }}
  </div>
{% else %}
  <p>No items available.</p>
{% endfor %}

# Numeric Range Iteration
{% for i in (1..5) %}
  <span>⭐ Star {{ i }}</span>
{% endfor %}`,
      sections: [
        {
          id: 'sec-beg-5-1',
          title: 'Loop Iteration and Metadata in Practice',
          difficulty: 'Beginner',
          analogy: 'forloop.first is like checking if you\'re opening the very first gift on your birthday.',
          content: `### Hands-on Loop Implementations

Let's review three practical examples showing collection product grids, cart line items, and limited featured product lists.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-collection-grid.liquid',
              code: `<div class="product-grid">
  {% for product in collection.products %}
    <article class="product-card" id="product-{{ product.id }}">
      <span class="card-rank">Item #{{ forloop.index }}</span>
      <h2 class="card-title">{{ product.title }}</h2>
      <p class="card-price">{{ product.price | money }}</p>
    </article>
  {% else %}
    <div class="empty-state">
      <p>No products match your current selection.</p>
    </div>
  {% endfor %}
</div>`,
              explanation: 'Loops through collection products, outputting dynamic index numbers, titles, and prices with an empty state fallback.',
              lineByLine: [
                { line: '<div class="product-grid">', explanation: 'CSS grid container for cards.' },
                { line: '{% for product in collection.products %}', explanation: 'Begins looping over products in the collection.' },
                { line: '  <span class="card-rank">Item #{{ forloop.index }}</span>', explanation: 'Outputs 1-based loop index (Item #1, Item #2).' },
                { line: '  <h2 class="card-title">{{ product.title }}</h2>', explanation: 'Outputs product title.' },
                { line: '{% else %}', explanation: 'Branch executed if collection.products is empty.' },
                { line: '{% endfor %}', explanation: 'Closes the for loop.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-cart-items.liquid',
              code: `<div class="cart-items-list">
  {% for item in cart.items %}
    <div class="cart-line-item {% if forloop.last %}cart-line-item--last{% endif %}">
      <h3 class="item-title">{{ item.product.title }}</h3>
      <span class="item-variant">{{ item.variant.title }}</span>
      <span class="item-quantity">Qty: {{ item.quantity }}</span>
      <span class="item-price">{{ item.final_line_price | money }}</span>
    </div>
  {% endfor %}
</div>`,
              explanation: 'Renders the customer cart items with variant details, quantities, and line item price totals.',
              lineByLine: [
                { line: '{% for item in cart.items %}', explanation: 'Iterates through line items currently in the cart.' },
                { line: '  <div class="cart-line-item {% if forloop.last %}...{% endif %}">', explanation: 'Applies special class to the last item using forloop.last.' },
                { line: '  <h3 class="item-title">{{ item.product.title }}</h3>', explanation: 'Outputs parent product title.' },
                { line: '  <span class="item-quantity">Qty: {{ item.quantity }}</span>', explanation: 'Outputs quantity selected.' },
                { line: '{% endfor %}', explanation: 'Closes cart loop.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-featured-limit.liquid',
              code: `<section class="featured-products">
  <h2>Featured Highlights</h2>
  <div class="featured-grid">
    {% for product in collections['frontpage'].products limit: 4 %}
      <div class="featured-card">
        <a href="{{ product.url }}">
          <h3>{{ product.title }}</h3>
        </a>
        <p>{{ product.price | money }}</p>
      </div>
    {% endfor %}
  </div>
</section>`,
              explanation: 'Fetches the specific "frontpage" collection and limits rendering to exactly the first 4 products.',
              lineByLine: [
                { line: '{% for product in collections[\'frontpage\'].products limit: 4 %}', explanation: 'Accesses collection by handle and restricts loop to 4 iterations.' },
                { line: '  <a href="{{ product.url }}">', explanation: 'Links directly to product detail page.' },
                { line: '{% endfor %}', explanation: 'Closes loop after 4 items.' }
              ]
            }
          ],
          commonMistakes: [
            'Attempting to paginate inside a section loop without the paginate tag. A collection.products array returns a max of 50 items unless wrapped in a paginate block.',
            'Using forloop outside of a for loop block. forloop is only defined inside {% for %}.',
            'Confusing forloop.index (starts at 1) with forloop.index0 (starts at 0).'
          ],
          proTip: 'Use `forloop.first` to mark hero or priority elements with `fetchpriority="high"` or `loading="eager"` on images, improving Core Web Vitals (LCP).',
          miniPractice: {
            question: 'What does forloop.index0 output during the third iteration of a loop?',
            options: [
              '3',
              '2',
              '0',
              '4'
            ],
            correctAnswer: 1,
            explanation: 'forloop.index0 is 0-indexed: 1st iteration = 0, 2nd iteration = 1, 3rd iteration = 2.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Top 3 Bestsellers Carousel Grid',
          instructions: 'Write a loop that iterates over `collection.products`, limits output to 3 items, and adds a CSS class `is-lead` to the first product only using `forloop.first`.',
          starterCode: `<div class="bestsellers-row">
  {% comment %} Implement limited loop with is-lead class on first item {% endcomment %}
</div>`,
          solutionCode: `<div class="bestsellers-row">
  {% for product in collection.products limit: 3 %}
    <div class="bestseller-card {% if forloop.first %}is-lead{% endif %}">
      <h3>{{ product.title }}</h3>
      <p>{{ product.price | money }}</p>
    </div>
  {% endfor %}
</div>`
        }
      ],
      keyTakeaways: [
        '`for ... in ...` iterates over arrays, collections, and ranges.',
        '`forloop` provides metadata: index, index0, first, last, length, and rindex.',
        '`limit`, `offset`, and `reversed` control loop execution bounds.',
        '`{% else %}` provides a clean fallback when an array has zero items.'
      ],
      summary: 'You have mastered Liquid loops, forloop metadata, loop slicing with limit/offset, and empty collection handling.'
    }
  },

  // =========================================================================
  // MODULE 6: Liquid Filters
  // =========================================================================
  {
    id: 'shopify-beg-06',
    orderIndex: 6,
    title: 'Module 6: Liquid Filters',
    description: 'Master string, number, and array transformation filters. Learn filter chaining with pipe syntax and essential formatting filters (money, date, upcase, join, truncate).',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-sh-filt', title: 'Shopify Liquid Filters Directory', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/filters' }
    ],
    lessonContent: {
      overview: `### Transforming Data with Liquid Filters

**Filters** are transformation functions in Liquid that take an input value on the left of a pipe symbol (\`|\`), modify it, and return the transformed result on the right.

### 1. Filter Syntax & Chaining
\`\`\`liquid
{{ input_value | filter_name: parameter1, parameter2 }}
\`\`\`
Filters can be chained sequentially from left to right:
\`\`\`liquid
{{ product.title | strip | upcase | truncate: 25 }}
\`\`\`

### 2. Core String Filters
- \`upcase\`: Converts all characters to uppercase (\`"hello" | upcase\` -> \`"HELLO"\`).
- \`downcase\`: Converts to lowercase (\`"RED" | downcase\` -> \`"red"\`).
- \`capitalize\`: Capitalizes the first letter of each word.
- \`append\`: Appends text to the end (\`"Skill" | append: "ora"\` -> \`"Skillora"\`).
- \`prepend\`: Adds text to the front (\`"store" | prepend: "my-"\` -> \`"my-store"\`).
- \`replace\`: Replaces all instances of a substring (\`"red shirt" | replace: "red", "blue"\`).
- \`remove\`: Strips all instances of a substring.
- \`strip\`: Strips leading and trailing whitespace.
- \`truncate: <length>, <ellipsis>\`: Shortens text to N characters (defaults to \`...\`).
- \`truncatewords: <count>\`: Shortens text to N words.
- \`default: <fallback>\`: Returns fallback value if input is \`nil\`, \`false\`, or \`""\`.

### 3. Number & Math Filters
- \`plus\`: Addition (\`{{ 10 | plus: 5 }}\` -> \`15\`).
- \`minus\`: Subtraction (\`{{ 20 | minus: 5 }}\` -> \`15\`).
- \`times\`: Multiplication (\`{{ 5 | times: 3 }}\` -> \`15\`).
- \`divided_by\`: Division (\`{{ 30 | divided_by: 2 }}\` -> \`15\`).
- \`round\`: Rounds to nearest integer or decimal place (\`{{ 4.6 | round }}\` -> \`5\`).
- \`ceil\`: Rounds up to nearest whole integer.
- \`floor\`: Rounds down to nearest whole integer.

### 4. Array Filters
- \`join: <separator>\`: Combines array items into a single string (\`{{ product.tags | join: ", " }}\`).
- \`sort\`: Sorts array elements alphabetically or by property.
- \`reverse\`: Inverts array order.
- \`first\`: Returns the first element of an array.
- \`last\`: Returns the last element of an array.
- \`where: <property>, <value>\`: Filters an array of objects by property value.
- \`map: <property>\`: Extracts a specific property from an array of objects.

### 5. Shopify Money Filters
- \`money\`: Formats integer cents into formatted currency (e.g., \`5000 | money\` -> \`"$50.00"\`).
- \`money_with_currency\`: Includes currency code (\`"$50.00 USD"\`).`,
      analogyHero: 'Think of filters like a series of optical lenses or water filters in a pipe: water flows in on the left, passes through filtration stages, and emerges clean, clear, and perfectly formatted on the right.',
      objectives: [
        'Apply string formatting filters (upcase, downcase, capitalize, truncate, default).',
        'Execute mathematical operations using number filters.',
        'Transform arrays using join, sort, reverse, first, last, and map.',
        'Chain multiple filters together in a single output expression.',
        'Format monetary values accurately using the money filter.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: `{{ product.title | upcase }}                     # Uppercase
{{ product.description | truncatewords: 20 }}    # Truncate to 20 words
{{ product.price | money }}                      # Localized currency
{{ product.tags | join: ', ' }}                  # Array to string
{{ custom_title | default: product.title }}      # Safe fallback default
{{ product.title | strip | capitalize }}         # Chained filters`,
      sections: [
        {
          id: 'sec-beg-6-1',
          title: 'Practical Filter Application and Chaining',
          difficulty: 'Beginner',
          analogy: 'Chaining filters is like an assembly line: first trim the edges, then paint it blue, then stamp the label.',
          content: `### Hands-on Filter Demonstrations

Let's examine how to format titles, price values, and product tag collections cleanly using Liquid filters.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-title-formatting.liquid',
              code: `{% assign raw_heading = "   ultimate developer workstation   " %}
<h2 class="formatted-title">
  {{ raw_heading | strip | capitalize }}
</h2>
<p class="summary-preview">
  {{ product.description | strip_html | truncate: 120, '... [Read More]' }}
</p>`,
              explanation: 'Demonstrates whitespace stripping, capitalization, HTML tag removal, and safe character truncation.',
              lineByLine: [
                { line: '{{ raw_heading | strip | capitalize }}', explanation: 'First removes outer whitespace, then capitalizes the first character.' },
                { line: '{{ product.description | strip_html | truncate: 120, ... }}', explanation: 'Strips HTML tags before truncating to 120 characters with a custom trailing suffix.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-money-formatting.liquid',
              code: `<div class="price-container">
  <span class="price-current">{{ product.price | money }}</span>
  {% if product.compare_at_price > product.price %}
    <span class="price-compare">{{ product.compare_at_price | money }}</span>
    <span class="price-savings">Save {{ product.compare_at_price | minus: product.price | money }}</span>
  {% endif %}
</div>`,
              explanation: 'Formats cents-based integer prices into localized currency and calculates discount savings.',
              lineByLine: [
                { line: '{{ product.price | money }}', explanation: 'Converts integer cents (e.g. 4999) to formatted currency ($49.99).' },
                { line: 'Save {{ product.compare_at_price | minus: product.price | money }}', explanation: 'Performs arithmetic subtraction, then pipes the result into the money filter.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-array-join.liquid',
              code: `<div class="product-tags-list">
  <span class="tags-label">Tags:</span>
  <span class="tags-content">
    {{ product.tags | sort | join: ' • ' }}
  </span>
</div>`,
              explanation: 'Sorts product tags alphabetically and joins them with a stylish bullet separator.',
              lineByLine: [
                { line: '{{ product.tags | sort | join: \' • \' }}', explanation: 'First sorts the array alphabetically, then concatenates elements with bullet delimiter.' }
              ]
            }
          ],
          commonMistakes: [
            'Forgetting that product.price is in cents! 5000 means $50.00. Never display raw {{ product.price }} without the | money filter.',
            'Using truncate on HTML strings without strip_html: truncating raw HTML can cut an opening <div> in half, breaking the entire page layout.',
            'Assuming filters mutate the original variable. Filters return a new modified value; they do not change the underlying variable unless reassigned.'
          ],
          proTip: 'Always pass rich text descriptions through `strip_html` before applying `truncate` or `truncatewords` to prevent leaving unclosed HTML tags on the page.',
          miniPractice: {
            question: 'What is the output of {{ "shopify liquid" | capitalize }}?',
            options: [
              '"Shopify liquid"',
              '"Shopify Liquid"',
              '"SHOPIFY LIQUID"',
              '"shopify liquid"'
            ],
            correctAnswer: 0,
            explanation: 'The capitalize filter capitalizes only the first word/character in the string: "Shopify liquid".'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Formatted Product Card Badge',
          instructions: 'Take a variable `raw_badge_text` containing "   limited edition   ". Strip whitespace, convert to uppercase, and prepend "🔥 " to the output.',
          starterCode: `{% assign raw_badge_text = "   limited edition   " %}
<!-- Output formatted badge text below -->
`,
          solutionCode: `{% assign raw_badge_text = "   limited edition   " %}
<span class="badge">
  {{ raw_badge_text | strip | upcase | prepend: '🔥 ' }}
</span>`
        }
      ],
      keyTakeaways: [
        'Filters transform values using the pipe syntax: `{{ value | filter }}`.',
        'Filters can be chained in sequence from left to right.',
        'Use `money` to format cents into currency.',
        'Combine `strip_html` with `truncate` for safe text previews.'
      ],
      summary: 'You have mastered Liquid filters, mathematical operations, string transformations, array manipulations, and filter chaining.'
    }
  },

  // =========================================================================
  // MODULE 7: Product Data and Product Cards
  // =========================================================================
  {
    id: 'shopify-beg-07',
    orderIndex: 7,
    title: 'Module 7: Product Data and Product Cards',
    description: 'Deep dive into product object properties (title, vendor, price, compare_at_price, featured_image, url, available, variants) and professional product card architecture.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-sh-prod', title: 'Shopify Product Object Reference', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/objects/product' }
    ],
    lessonContent: {
      overview: `### The Product Object & Card Architecture

The product card is the most crucial UI element in any ecommerce theme. It appears across collection grids, search results, featured recommendations, and cart upsells.

### 1. Key Properties of the \`product\` Object
- \`product.title\`: Product name.
- \`product.description\`: Full HTML product description.
- \`product.vendor\`: Manufacturer, artist, or brand name.
- \`product.type\`: Product categorization.
- \`product.tags\`: Array of keyword tags.
- \`product.price\`: Lowest price among available variants (in cents).
- \`product.compare_at_price\`: Original list/comparison price (in cents).
- \`product.price_varies\`: Boolean (\`true\` if variants have different prices).
- \`product.featured_image\`: Primary product image object.
- \`product.images\`: Array of all image objects.
- \`product.url\`: Storefront URL path to the product page.
- \`product.available\`: Boolean (\`true\` if at least one variant is in stock).
- \`product.variants\`: Array of all variant objects.

### 2. Modern Product Card Architecture
A production-grade product card must include:
1. **Semantic Container:** An \`<article>\` or \`<li>\` element with clear ARIA labels.
2. **Accessible Image:** Utilizing the \`image_url\` and \`image_tag\` filters with responsive width parameters and proper alt text.
3. **Structured Typography:** Vendor attribution, accessible product heading link, and price display.
4. **Conditional Badges:** Sale badges, sold-out indicators, or new arrival tags.
5. **Interactive Actions:** Add-to-cart form or quick-view buttons.`,
      analogyHero: 'Think of a product card like a retail store display shelf: the product photo catches the eye, the headline clearly states what it is, the price tag shows the value, and the "Sale" or "Sold Out" sticker sets expectations before you pick it up.',
      objectives: [
        'Master all primary attributes of the Shopify product object.',
        'Construct accessible, semantic product card markup.',
        'Implement dynamic sale and inventory badges.',
        'Utilize image_url and image_tag for responsive image rendering.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: `<a href="{{ product.url }}">
  <h2>{{ product.title }}</h2>
</a>

{% if product.featured_image %}
  {{ product.featured_image | image_url: width: 600 | image_tag: loading: 'lazy', alt: product.title }}
{% endif %}

<p>{{ product.price | money }}</p>`,
      sections: [
        {
          id: 'sec-beg-7-1',
          title: 'Building Production-Ready Product Cards',
          difficulty: 'Beginner',
          analogy: 'Building a product card is like assembling a sandwich: bread container on outside, delicious photo in the middle, and pricing sauce on top.',
          content: `### Hands-on Product Card Examples

Below are three complete product card implementations demonstrating basic layout, sale pricing, and image rendering with inventory badges.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-basic-card.liquid',
              code: `<article class="product-card">
  <a href="{{ product.url }}" class="product-card__link">
    <div class="product-card__media">
      {% if product.featured_image %}
        {{ product.featured_image | image_url: width: 500 | image_tag: loading: 'lazy', class: 'product-card__img', alt: product.title }}
      {% else %}
        {{ 'product-1' | placeholder_svg_tag: 'product-card__placeholder' }}
      {% endif %}
    </div>
    <div class="product-card__content">
      <span class="product-card__vendor">{{ product.vendor }}</span>
      <h3 class="product-card__title">{{ product.title }}</h3>
      <div class="product-card__price">
        {% if product.price_varies %}
          <span class="price-from">From {{ product.price_min | money }}</span>
        {% else %}
          <span>{{ product.price | money }}</span>
        {% endif %}
      </div>
    </div>
  </a>
</article>`,
              explanation: 'Standard semantic product card with fallback placeholder SVG and variable pricing support.',
              lineByLine: [
                { line: '<article class="product-card">', explanation: 'Semantic HTML5 article container.' },
                { line: '{{ product.featured_image | image_url: width: 500 | image_tag: ... }}', explanation: 'Generates responsive <img> tag with width transformation and lazy loading.' },
                { line: '{% if product.price_varies %}', explanation: 'Checks if different variants have different prices to show "From $X".' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-sale-card.liquid',
              code: `<article class="product-card product-card--sale">
  <div class="product-card__badges">
    {% if product.compare_at_price > product.price %}
      <span class="badge badge--sale">SALE</span>
    {% endif %}
    {% unless product.available %}
      <span class="badge badge--sold-out">Sold out</span>
    {% endunless %}
  </div>
  
  <h3 class="product-title">{{ product.title }}</h3>
  
  <div class="price-group">
    <span class="price price--active">{{ product.price | money }}</span>
    {% if product.compare_at_price > product.price %}
      <s class="price price--compare">{{ product.compare_at_price | money }}</s>
    {% endif %}
  </div>
</article>`,
              explanation: 'Product card with layered sale/sold-out badges and strikethrough comparison pricing.',
              lineByLine: [
                { line: '{% if product.compare_at_price > product.price %}', explanation: 'Verifies item is on sale.' },
                { line: '<s class="price price--compare">...</s>', explanation: 'Uses semantic <s> tag for strikethrough comparison price.' },
                { line: '{% unless product.available %}', explanation: 'Renders sold out badge when not purchasable.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-full-featured-card.liquid',
              code: `<article class="product-card" data-product-id="{{ product.id }}">
  <div class="product-card__image-wrapper">
    {% if product.featured_image != blank %}
      {{ product.featured_image | image_url: width: 600 | image_tag: alt: product.title, class: 'product-img', loading: 'lazy' }}
    {% endif %}
    {% if product.available %}
      <span class="stock-status in-stock">✓ Ready to Ship</span>
    {% else %}
      <span class="stock-status out-of-stock">Backorder</span>
    {% endif %}
  </div>
  <div class="product-card__info">
    <p class="vendor">{{ product.vendor }}</p>
    <a href="{{ product.url }}" class="title-link">
      <h4>{{ product.title }}</h4>
    </a>
    <p class="price">{{ product.price | money }}</p>
  </div>
</article>`,
              explanation: 'Production card with image wrapper, availability pills, vendor, and structured links.',
              lineByLine: [
                { line: 'data-product-id="{{ product.id }}"', explanation: 'Adds data attribute for client-side JavaScript interaction.' },
                { line: '{{ product.featured_image | image_url: width: 600 | image_tag: ... }}', explanation: 'Renders optimized product image.' }
              ]
            }
          ],
          commonMistakes: [
            'Using raw <img> tags with hardcoded src="{{ product.featured_image }}" instead of using the | image_url filter. This loads the uncompressed original upload, hurting page load speed.',
            'Not handling products with no image. Always provide a fallback placeholder SVG.',
            'Ignoring product.price_varies: displaying $10 for a product that ranges from $10 to $50 misleads customers.'
          ],
          proTip: 'Always specify `loading: "lazy"` on product card images inside collection grids to prevent downloading offscreen images until the user scrolls down.',
          miniPractice: {
            question: 'What does product.price_varies indicate?',
            options: [
              'The product price changes based on the user\'s currency',
              'Different variants of this product have different prices',
              'The product is currently on sale',
              'The price is calculated dynamically via API'
            ],
            correctAnswer: 1,
            explanation: 'product.price_varies is a boolean that is true when a product has multiple variants with differing prices.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Responsive Collection Product Card',
          instructions: 'Build a complete product card component that outputs the featured image (width: 500), vendor, title wrapped in a link to product.url, sale badge if on sale, and price with compare-at price.',
          starterCode: `<article class="product-card">
  <!-- Implement complete product card markup -->
</article>`,
          solutionCode: `<article class="product-card">
  <div class="product-card__media">
    {% if product.featured_image %}
      {{ product.featured_image | image_url: width: 500 | image_tag: loading: 'lazy', alt: product.title }}
    {% endif %}
    {% if product.compare_at_price > product.price %}
      <span class="badge badge--sale">Sale</span>
    {% endif %}
  </div>
  <div class="product-card__details">
    <span class="product-vendor">{{ product.vendor }}</span>
    <a href="{{ product.url }}">
      <h3 class="product-title">{{ product.title }}</h3>
    </a>
    <div class="product-pricing">
      <span class="price-current">{{ product.price | money }}</span>
      {% if product.compare_at_price > product.price %}
        <s class="price-compare">{{ product.compare_at_price | money }}</s>
      {% endif %}
    </div>
  </div>
</article>`
        }
      ],
      keyTakeaways: [
        'The product object provides all metadata, pricing, variants, and media.',
        'Use `image_url` and `image_tag` to serve appropriately sized, responsive images.',
        'Handle variant price variances using `product.price_varies` and `product.price_min`.',
        'Always provide accessible headings, alt text, and sold-out/sale states.'
      ],
      summary: 'You have mastered the Shopify product object, pricing calculations, responsive image handling, and professional product card architecture.'
    }
  },

  // =========================================================================
  // MODULE 8: Collections, Menus, and Links
  // =========================================================================
  {
    id: 'shopify-beg-08',
    orderIndex: 8,
    title: 'Module 8: Collections, Menus, and Links',
    description: 'Learn collection objects, collection.products, linklists navigation menus, multi-level nested menus, and localized routes.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-sh-nav', title: 'Shopify Linklists & Navigation Reference', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/objects/linklist' }
    ],
    lessonContent: {
      overview: `### Navigation Menus, Linklists & Collection Browsing

Store navigation enables visitors to browse products, collections, blog posts, and informational pages seamlessly.

### 1. The \`linklists\` Object
In the Shopify Admin under **Online Store > Navigation**, merchants configure menus (such as "Main menu" or "Footer menu"). In Liquid, these are accessed via the global \`linklists\` object using their menu handle:
\`\`\`liquid
{% for link in linklists['main-menu'].links %}
  <a href="{{ link.url }}">{{ link.title }}</a>
{% endfor %}
\`\`\`

### 2. Properties of a \`link\` Object
- \`link.title\`: The link text configured by the merchant.
- \`link.url\`: The destination URL.
- \`link.active\`: Boolean (\`true\` if the current page matches the link's URL).
- \`link.child_active\`: Boolean (\`true\` if any sub-link in its dropdown is active).
- \`link.links\`: Array of nested child links (sub-menus).
- \`link.type\`: Type of resource linked (\`collection_link\`, \`product_link\`, \`page_link\`, \`http_link\`).

### 3. Multi-Level Nested Dropdown Navigation
Shopify supports up to 3 levels of nested menus (Grandparent > Parent > Child). You can check if a link has children using \`{% if link.links != blank %}\`.

### 4. Collections and Collection URLs
- \`collection.title\`: Name of the collection.
- \`collection.url\`: URL path to the collection page.
- \`collection.products\`: Array of products belonging to this collection.`,
      analogyHero: 'Think of linklists like a road sign system in a large city: the main highway signs are your top-level menu, exit ramps are child menus, and local street signs are nested dropdown links.',
      objectives: [
        'Access and iterate over store navigation menus using linklists.',
        'Construct accessible, multi-level dropdown navigation menus.',
        'Implement active state highlighting using link.active.',
        'Connect collection objects and navigation links seamlessly.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: `{% for link in linklists.main-menu.links %}
  <a href="{{ link.url }}" class="{% if link.active %}is-active{% endif %}">
    {{ link.title }}
  </a>
{% endfor %}

# Checking for Sub-Menus
{% if link.links != blank %}
  <ul class="dropdown">
    {% for child_link in link.links %}
      <li><a href="{{ child_link.url }}">{{ child_link.title }}</a></li>
    {% endfor %}
  </ul>
{% endif %}`,
      sections: [
        {
          id: 'sec-beg-8-1',
          title: 'Building Store Header & Dropdown Navigation',
          difficulty: 'Beginner',
          analogy: 'Checking link.links != blank is like asking if a doorway leads to another hallway of rooms.',
          content: `### Hands-on Navigation Menu Examples

Let's review practical navigation structures from simple horizontal header links to multi-tier dropdown menus and collection lists.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-main-menu.liquid',
              code: `<nav class="site-nav" aria-label="Main Navigation">
  <ul class="nav-list">
    {% for link in linklists['main-menu'].links %}
      <li class="nav-item {% if link.active %}nav-item--active{% endif %}">
        <a href="{{ link.url }}" class="nav-link">
          {{ link.title }}
        </a>
      </li>
    {% endfor %}
  </ul>
</nav>`,
              explanation: 'Builds a semantic header navigation menu highlighting the currently active link.',
              lineByLine: [
                { line: '<nav class="site-nav" aria-label="Main Navigation">', explanation: 'Accessible navigation landmark with descriptive label.' },
                { line: '{% for link in linklists[\'main-menu\'].links %}', explanation: 'Iterates through top-level links of main-menu linklist.' },
                { line: '{% if link.active %}nav-item--active{% endif %}', explanation: 'Applies active class when viewing the linked page.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-nested-dropdown.liquid',
              code: `<nav class="dropdown-nav">
  <ul class="menu-root">
    {% for link in linklists['main-menu'].links %}
      <li class="menu-item {% if link.links != blank %}has-dropdown{% endif %}">
        <a href="{{ link.url }}">{{ link.title }}</a>
        
        {% if link.links != blank %}
          <ul class="dropdown-menu">
            {% for child_link in link.links %}
              <li class="dropdown-item">
                <a href="{{ child_link.url }}">{{ child_link.title }}</a>
              </li>
            {% endfor %}
          </ul>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</nav>`,
              explanation: 'Nested 2-level dropdown menu detecting and rendering sub-links dynamically.',
              lineByLine: [
                { line: '{% if link.links != blank %}', explanation: 'Verifies if child links exist for this parent item.' },
                { line: '{% for child_link in link.links %}', explanation: 'Loops through child links to render dropdown list.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-collection-navigation.liquid',
              code: `<div class="collections-bar">
  <h3>Browse Categories</h3>
  <ul class="collections-links">
    {% for collection in collections limit: 6 %}
      <li>
        <a href="{{ collection.url }}" class="collection-pill">
          {{ collection.title }} ({{ collection.all_products_count }})
        </a>
      </li>
    {% endfor %}
  </ul>
</div>`,
              explanation: 'Iterates over available collections to build a category filtering bar with product counts.',
              lineByLine: [
                { line: '{% for collection in collections limit: 6 %}', explanation: 'Iterates over the first 6 collections in the store.' },
                { line: '{{ collection.title }} ({{ collection.all_products_count }})', explanation: 'Outputs collection name and total product count.' }
              ]
            }
          ],
          commonMistakes: [
            'Using linklists.main_menu instead of linklists["main-menu"] or linklists.main-menu. Always use exact handle matching.',
            'Forgetting to check link.links != blank before rendering dropdown wrapper markup, causing empty <ul> tags in the DOM.',
            'Neglecting ARIA attributes (aria-expanded, aria-haspopup) on dropdown trigger elements.'
          ],
          proTip: 'Use `link.child_active` to keep parent navigation tabs highlighted when a customer is browsing one of their child sub-categories.',
          miniPractice: {
            question: 'Which property on a link object returns true if the customer is currently browsing that exact page URL?',
            options: [
              'link.current',
              'link.active',
              'link.selected',
              'link.is_open'
            ],
            correctAnswer: 1,
            explanation: 'link.active returns a boolean true when the current page URL matches the link\'s destination.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Store Header Navigation Component',
          instructions: 'Create a header navigation component that renders the "main-menu" linklist, highlights active links with `class="active"`, and displays a dropdown menu for any links with child items.',
          starterCode: `<nav class="header-nav">
  <!-- Build main menu navigation here -->
</nav>`,
          solutionCode: `<nav class="header-nav" aria-label="Main Navigation">
  <ul class="nav-menu">
    {% for link in linklists['main-menu'].links %}
      <li class="nav-menu__item {% if link.active or link.child_active %}active{% endif %}">
        <a href="{{ link.url }}" class="nav-menu__link">{{ link.title }}</a>
        {% if link.links != blank %}
          <ul class="nav-dropdown">
            {% for child in link.links %}
              <li class="nav-dropdown__item {% if child.active %}active{% endif %}">
                <a href="{{ child.url }}">{{ child.title }}</a>
              </li>
            {% endfor %}
          </ul>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</nav>`
        }
      ],
      keyTakeaways: [
        '`linklists` provides access to all menus configured in Shopify Admin.',
        'Use `link.links` to build nested multi-tier dropdown menus.',
        '`link.active` and `link.child_active` enable visual navigation state highlights.',
        '`collection.url` generates clean, SEO-friendly collection URLs.'
      ],
      summary: 'You have learned how to build single and multi-level navigation menus with linklists and link collection pages.'
    }
  },

  // =========================================================================
  // MODULE 9: Cart and Customer Basics
  // =========================================================================
  {
    id: 'shopify-beg-09',
    orderIndex: 9,
    title: 'Module 9: Cart and Customer Basics',
    description: 'Learn the cart object (cart.items, cart.item_count, cart.total_price) and customer object (first_name, email, orders) for personalized experiences.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-sh-cart', title: 'Shopify Cart Object Reference', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/objects/cart' }
    ],
    lessonContent: {
      overview: `### The Cart and Customer Objects

Creating a high-converting storefront requires dynamic cart summaries and personalized customer account touchpoints.

### 1. The Global \`cart\` Object
The \`cart\` object represents the customer's active shopping basket:
- \`cart.item_count\`: Total quantity of all items in the cart.
- \`cart.total_price\`: Total cart value before taxes and shipping (in cents).
- \`cart.original_total_price\`: Pre-discount total value (in cents).
- \`cart.total_discount\`: Total discounts applied (in cents).
- \`cart.items\`: Array of line item objects currently in the cart.
- \`cart.note\`: Special instructions or gift message attached to the order.

### 2. Properties of a Cart Line Item (\`item\`)
- \`item.product\`: The parent product object.
- \`item.variant\`: The selected variant object.
- \`item.title\`: Full line title ("Keyboard - Blue Switches").
- \`item.quantity\`: Number of units of this item.
- \`item.price\`: Single unit price in cents.
- \`item.final_line_price\`: Total price for this line (\`item.price * item.quantity\`).
- \`item.image\`: Featured image of the variant or product.
- \`item.url\`: Direct link to the variant in the store.

### 3. The Global \`customer\` Object
When a customer is logged into their account, \`customer\` is populated; otherwise it evaluates to \`nil\`:
- \`customer.first_name\`: Customer first name.
- \`customer.last_name\`: Customer last name.
- \`customer.email\`: Customer email address.
- \`customer.orders\`: Array of previous orders placed by this customer.
- \`customer.orders_count\`: Total number of orders.
- \`customer.total_spent\`: Lifetime revenue from this customer (in cents).`,
      analogyHero: 'Think of the `cart` object like the physical shopping cart rolling through your store aisles, while `customer` is the member card scanned at the register.',
      objectives: [
        'Render dynamic cart item counts and pricing summaries.',
        'Iterate over cart.items to build shopping cart views and mini-cart drawers.',
        'Personalize storefront elements for authenticated customer accounts.',
        'Access customer order history and lifetime value metrics.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: `{{ cart.item_count }}                      # Total quantity count
{{ cart.total_price | money }}             # Total price formatted

{% if customer %}
  <p>Hello, {{ customer.first_name }}</p>
  <p>You have placed {{ customer.orders_count }} orders.</p>
{% else %}
  <a href="{{ routes.account_login_url }}">Sign in</a>
{% endif %}`,
      sections: [
        {
          id: 'sec-beg-9-1',
          title: 'Cart and Customer Experience in Practice',
          difficulty: 'Beginner',
          analogy: 'Checking if customer exists is like greeting a regular customer by name when they walk through the door.',
          content: `### Hands-on Cart and Customer Implementations

Let's review practical components displaying cart badges, line item overviews, and authenticated account greetings.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-cart-widget.liquid',
              code: `<div class="cart-summary-widget">
  <span class="cart-label">Shopping Bag</span>
  <span class="cart-count badge">{{ cart.item_count }}</span>
  <span class="cart-total">{{ cart.total_price | money }}</span>
</div>`,
              explanation: 'Builds a header cart widget displaying current item count and total cart price.',
              lineByLine: [
                { line: '{{ cart.item_count }}', explanation: 'Outputs total units in the active cart.' },
                { line: '{{ cart.total_price | money }}', explanation: 'Formats the subtotal into localized currency.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-cart-drawer-items.liquid',
              code: `<div class="mini-cart-items">
  {% for item in cart.items %}
    <div class="mini-cart-item" data-key="{{ item.key }}">
      {% if item.image %}
        {{ item.image | image_url: width: 120 | image_tag: alt: item.title, class: 'mini-cart-thumb' }}
      {% endif %}
      <div class="mini-cart-details">
        <a href="{{ item.url }}" class="item-title">{{ item.product.title }}</a>
        <p class="item-variant">{{ item.variant.title }}</p>
        <p class="item-math">{{ item.quantity }} × {{ item.price | money }} = <strong>{{ item.final_line_price | money }}</strong></p>
      </div>
    </div>
  {% else %}
    <div class="empty-cart-message">
      <p>Your shopping bag is currently empty.</p>
    </div>
  {% endfor %}
</div>`,
              explanation: 'Renders full line item details for a slide-out cart drawer.',
              lineByLine: [
                { line: '{% for item in cart.items %}', explanation: 'Iterates through each item in the shopping cart.' },
                { line: '{{ item.quantity }} × {{ item.price | money }}', explanation: 'Calculates and outputs unit math for transparency.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-customer-welcome.liquid',
              code: `<div class="customer-welcome-banner">
  {% if customer %}
    <h3>Welcome back, {{ customer.first_name }}!</h3>
    <p>Email: {{ customer.email }}</p>
    <p>Member Status: {% if customer.orders_count > 5 %}VIP Patron{% else %}Valued Member{% endif %}</p>
    <a href="{{ routes.account_url }}" class="btn">View Order History ({{ customer.orders_count }})</a>
  {% else %}
    <h3>Join the Skillora Community</h3>
    <p>Sign in to unlock exclusive member discounts and order tracking.</p>
    <a href="{{ routes.account_login_url }}" class="btn">Sign In</a>
  {% endif %}
</div>`,
              explanation: 'Personalized banner checking customer status, order frequency, and providing account links.',
              lineByLine: [
                { line: '{% if customer %}', explanation: 'Tests if user is logged into an active customer account.' },
                { line: '{% if customer.orders_count > 5 %}', explanation: 'Custom tier badge based on order history.' }
              ]
            }
          ],
          commonMistakes: [
            'Attempting to modify cart contents directly with Liquid. Liquid only reads cart state; updating cart quantities requires Shopify Cart Ajax API or HTML form submissions.',
            'Forgetting that cart.total_price is in cents.',
            'Assuming customer is always present on checkout or product pages.'
          ],
          proTip: 'Use `cart.total_price` compared against a threshold variable (e.g. `$100`) to create dynamic "Add $X for Free Shipping" progress indicators.',
          miniPractice: {
            question: 'What is returned by the expression customer.first_name if a guest visitor is browsing the site?',
            options: [
              '"Guest"',
              '"Anonymous"',
              'nil (renders empty text)',
              'Error: undefined property'
            ],
            correctAnswer: 2,
            explanation: 'When no customer is logged in, the customer object is nil, and accessing customer.first_name evaluates safely to nil.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Cart Subtotal and Free Shipping Threshold Banner',
          instructions: 'Create a component that checks if `cart.total_price` is greater than or equal to $100.00 (10000 cents). If true, render "🎉 You unlocked Free Shipping!"; else calculate how much more the customer needs to spend and output "Add $X to qualify for Free Shipping".',
          starterCode: `{% assign free_shipping_threshold = 10000 %}
<!-- Implement free shipping threshold calculation below -->
`,
          solutionCode: `{% assign free_shipping_threshold = 10000 %}

<div class="shipping-threshold-banner">
  {% if cart.total_price >= free_shipping_threshold %}
    <p class="shipping-success">🎉 You unlocked Free Shipping!</p>
  {% else %}
    {% assign remaining = free_shipping_threshold | minus: cart.total_price %}
    <p class="shipping-notice">Add <strong>{{ remaining | money }}</strong> more to qualify for Free Shipping!</p>
  {% endif %}
</div>`
        }
      ],
      keyTakeaways: [
        '`cart` provides item counts, line items, and monetary totals.',
        '`customer` provides authenticated user profile data and order history.',
        'Cart prices are stored in cents and must be formatted with `| money`.',
        'Guest visitors evaluate `customer` to `nil`.'
      ],
      summary: 'You have mastered the cart and customer objects, line item math, and personalized customer messaging.'
    }
  },

  // =========================================================================
  // MODULE 10: Forms and Basic Shopify Actions
  // =========================================================================
  {
    id: 'shopify-beg-10',
    orderIndex: 10,
    title: 'Module 10: Forms and Basic Shopify Actions',
    description: 'Learn Shopify form tags ({% form %}), product add-to-cart form architecture, variant ID selection, customer login, contact, and newsletter forms.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-sh-form', title: 'Shopify Liquid Form Tag Reference', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/tags/theme-tags#form' }
    ],
    lessonContent: {
      overview: `### Shopify Liquid Forms & Storefront Actions

Forms in Shopify allow shoppers to add products to their carts, subscribe to newsletters, submit customer contact inquiries, and authenticate into their accounts.

### 1. The \`{% form %}\` Tag
Shopify provides a built-in \`{% form %}\` tag that automatically generates the necessary HTML \`<form>\` element, sets the correct POST endpoint, and inserts security tokens (anti-CSRF):
\`\`\`liquid
{% form 'product', product %}
  <!-- Form contents -->
{% endform %}
\`\`\`

### 2. Standard Shopify Form Types
- **\`'product', product\`**: Product purchase and add-to-cart form.
- **\`'customer_login'\`**: Customer sign-in form.
- **\`'create_customer'\`**: New customer account registration.
- **\`'contact'\`**: Storefront contact form.
- **\`'customer'\` (newsletter)**: Email newsletter subscription form.
- **\`'cart', cart\`**: Cart page update and checkout submission.

### 3. Add-to-Cart Product Form Requirements
To add a product to the cart successfully, the form must submit at least:
1. **\`name="id"\`**: An \`<input>\` or \`<select>\` containing the specific numeric **Variant ID** (e.g. \`variant.id\`), NOT the product ID.
2. **\`name="quantity"\`**: (Optional, defaults to 1) Numeric quantity of items to add.
3. **Submit Button**: An \`<input type="submit">\` or \`<button type="submit">\`.`,
      analogyHero: 'Think of the {% form %} tag like an official pre-addressed envelope: Shopify prints the verified return address, stamps the security seal, and ensures the letter arrives at the exact right department.',
      objectives: [
        'Understand the purpose and security advantages of the {% form %} tag.',
        'Build complete add-to-cart forms with variant selection.',
        'Construct newsletter subscription and contact forms.',
        'Handle form errors and success messages defensively.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: `{% form 'product', product %}
  <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}">
  <input type="number" name="quantity" value="1" min="1">
  <button type="submit" {% unless product.available %}disabled{% endunless %}>
    {% if product.available %}Add to Cart{% else %}Sold Out{% endif %}
  </button>
{% endform %}`,
      sections: [
        {
          id: 'sec-beg-10-1',
          title: 'Product Purchase and Customer Forms in Practice',
          difficulty: 'Beginner',
          analogy: 'Submitting a product form without a variant ID is like trying to order a shirt without specifying a size.',
          content: `### Hands-on Form Implementations

Let's review complete implementations for product add-to-cart with variant dropdowns, contact forms, and newsletter signup boxes.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-product-add-to-cart.liquid',
              code: `{% form 'product', product, class: 'product-purchase-form' %}
  <div class="variant-selection">
    <label for="variant-select-{{ product.id }}">Select Option:</label>
    <select name="id" id="variant-select-{{ product.id }}" class="variant-select">
      {% for variant in product.variants %}
        <option 
          value="{{ variant.id }}"
          {% if variant == product.selected_or_first_available_variant %}selected="selected"{% endif %}
          {% unless variant.available %}disabled="disabled"{% endunless %}
        >
          {{ variant.title }} - {{ variant.price | money }}
          {% unless variant.available %} (Sold out){% endunless %}
        </option>
      {% endfor %}
    </select>
  </div>

  <div class="quantity-input-group">
    <label for="quantity-{{ product.id }}">Quantity:</label>
    <input type="number" id="quantity-{{ product.id }}" name="quantity" value="1" min="1" class="qty-field">
  </div>

  <button type="submit" class="btn btn--primary add-to-cart-btn" {% unless product.available %}disabled{% endunless %}>
    {% if product.available %}
      Add to Cart • {{ product.price | money }}
    {% else %}
      Sold Out
    {% endif %}
  </button>
{% endform %}`,
              explanation: 'Complete accessible product add-to-cart form with variant select dropdown, quantity field, and dynamic button state.',
              lineByLine: [
                { line: '{% form \'product\', product, ... %}', explanation: 'Generates Shopify product form POST wrapper with CSRF protection.' },
                { line: '<select name="id" ...>', explanation: 'Crucial: name="id" passes the selected variant ID to the cart endpoint.' },
                { line: '{% for variant in product.variants %}', explanation: 'Loops through all variants to populate dropdown options.' },
                { line: '<input type="number" name="quantity" ...>', explanation: 'Submits desired quantity.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-newsletter-form.liquid',
              code: `{% form 'customer', class: 'newsletter-form' %}
  <input type="hidden" name="contact[tags]" value="newsletter">
  
  {% if form.posted_successfully? %}
    <p class="form-success">🎉 Thank you for subscribing to our newsletter!</p>
  {% else %}
    {% if form.errors %}
      <div class="form-errors">
        {{ form.errors | default_errors }}
      </div>
    {% endif %}
    
    <div class="input-group">
      <input 
        type="email" 
        name="contact[email]" 
        placeholder="Enter your email address" 
        required 
        aria-label="Email address for newsletter"
      >
      <button type="submit" class="btn btn--subscribe">Subscribe</button>
    </div>
  {% endif %}
{% endform %}`,
              explanation: 'Newsletter signup form with built-in error handling and success state verification.',
              lineByLine: [
                { line: '{% form \'customer\', ... %}', explanation: 'Creates customer lead creation form.' },
                { line: '<input type="hidden" name="contact[tags]" value="newsletter">', explanation: 'Tags the subscriber in Shopify admin.' },
                { line: '{% if form.posted_successfully? %}', explanation: 'Checks if submission succeeded to show confirmation message.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-contact-form.liquid',
              code: `{% form 'contact', class: 'store-contact-form' %}
  {% if form.posted_successfully? %}
    <p class="alert alert--success">Thank you! Your message has been sent to our team.</p>
  {% endif %}

  <div class="field-group">
    <label for="contact-name">Your Name</label>
    <input type="text" id="contact-name" name="contact[name]" required>
  </div>

  <div class="field-group">
    <label for="contact-email">Your Email</label>
    <input type="email" id="contact-email" name="contact[email]" required>
  </div>

  <div class="field-group">
    <label for="contact-body">Message</label>
    <textarea id="contact-body" name="contact[body]" rows="5" required></textarea>
  </div>

  <button type="submit" class="btn btn--primary">Send Message</button>
{% endform %}`,
              explanation: 'Customer support contact form submitting directly to merchant email inbox.',
              lineByLine: [
                { line: '{% form \'contact\', ... %}', explanation: 'Generates standard Shopify contact form.' },
                { line: 'name="contact[body]"', explanation: 'Stores message body in the contact submission.' }
              ]
            }
          ],
          commonMistakes: [
            'Submitting product.id instead of variant.id with name="id": Shopify carts accept only Variant IDs, not Product IDs!',
            'Creating raw <form action="/cart/add" method="post"> without the {% form %} tag: raw forms miss automated anti-fraud tokens and localization hooks.',
            'Not providing disabled states on out-of-stock variants.'
          ],
          proTip: 'Always check `form.posted_successfully?` and `form.errors` inside form blocks to give clear, accessible feedback to customers upon submission.',
          miniPractice: {
            question: 'What must the name attribute of the input containing the selected variant ID be in a product form?',
            options: [
              'name="variant"',
              'name="product_id"',
              'name="id"',
              'name="item"'
            ],
            correctAnswer: 2,
            explanation: 'Shopify\'s add-to-cart endpoint specifically requires the name attribute to be exactly name="id".'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Single-Variant Quick Buy Button',
          instructions: 'Build a simplified quick add-to-cart form for a product using `product.selected_or_first_available_variant.id` as a hidden input and a disabled state if unavailable.',
          starterCode: `{% form 'product', product %}
  <!-- Implement quick buy form with hidden ID input -->
{% endform %}`,
          solutionCode: `{% form 'product', product %}
  <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}">
  <button 
    type="submit" 
    class="btn btn--quick-buy"
    {% unless product.available %}disabled{% endunless %}
  >
    {% if product.available %}
      ⚡ Quick Buy ({{ product.price | money }})
    {% else %}
      Sold Out
    {% endif %}
  </button>
{% endform %}`
        }
      ],
      keyTakeaways: [
        '`{% form %}` generates secure, localized HTML forms in Shopify.',
        'Product add-to-cart forms require `name="id"` containing the variant ID.',
        '`form.posted_successfully?` and `form.errors` handle submission feedback.',
        'Newsletter and contact forms tag customer records automatically.'
      ],
      summary: 'You have mastered Shopify Liquid forms, variant selection architecture, add-to-cart mechanics, and customer engagement forms.'
    }
  },

  // =========================================================================
  // MODULE 11: Comments, Whitespace, Debugging, and Common Errors
  // =========================================================================
  {
    id: 'shopify-beg-11',
    orderIndex: 11,
    title: 'Module 11: Comments, Whitespace, Debugging, and Common Errors',
    description: 'Master Liquid comments, whitespace trimming syntax ({{- -}}, {%- -%}), common syntax errors (missing endif/endfor, nil errors), and theme debugging techniques.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-sh-debug', title: 'Liquid Basics: Whitespace & Syntax', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/basics#whitespace-control' }
    ],
    lessonContent: {
      overview: `### Comments, Whitespace Control & Liquid Debugging

Building professional Shopify themes requires clean code, precise control over rendered whitespace, and systematic debugging skills.

### 1. Developer Comments in Liquid
- **Liquid Comments (\`{% comment %} ... {% endcomment %}\`):** Stripped completely during server compilation. Nothing appears in the browser's "View Source". Ideal for internal notes, schema documentation, and temporarily disabling code.
- **Inline Single-Tag Comments (\`{% # This is a comment %}\`):** Supported in modern Liquid engines.
- **HTML Comments (\`<!-- ... -->\`):** Rendered into the public HTML stream and visible to all website visitors. Do not use HTML comments for sensitive notes or large commented-out code blocks.

### 2. Whitespace Control (\`-\` Dash Modifier)
By default, every Liquid tag on a new line leaves an empty blank line in the rendered HTML output. In tight layouts (like inline-block elements, SVGs, or JSON attributes), extra whitespace can cause visual spacing bugs.
- **Output Whitespace Stripping:** \`{{- product.title -}}\` strips whitespace to the left and right of the output.
- **Tag Whitespace Stripping:** \`{%- if product.available -%}\` strips leading and trailing whitespace around the tag.

### 3. Top Common Liquid Errors & How to Fix Them
1. **\`Liquid syntax error: Tag '{% if ... %}' was not properly terminated\`**: Caused by a missing \`{% endif %}\`.
2. **\`Liquid error: undefined method for nil:NilClass\`**: Caused by trying to access properties on a non-existent object without checking existence first.
3. **Empty Output from Typo in Property**: Writing \`{{ product.cost }}\` instead of \`{{ product.price }}\` silently returns \`nil\`.
4. **Syntax Error from Filter Arguments**: Writing \`{{ product.title | truncate 20 }}\` (missing colon \`:\`) instead of \`{{ product.title | truncate: 20 }}\`.

### 4. Debugging Techniques with \`json\` and \`echo\`
- **\`{{ object | json }}\`**: Serializes any Liquid object or array into formatted JSON text, allowing you to inspect all available properties directly in your browser.
- **\`{% echo variable %}\`**: Shorthand for \`{{ variable }}\` inside logic blocks.`,
      analogyHero: 'Think of whitespace control like trimming the crust off a sandwich: the nutrition is identical, but the presentation fits neatly inside the lunchbox without overflowing.',
      objectives: [
        'Utilize server-side Liquid comments to document code without bloating HTML.',
        'Master whitespace control with the dash modifier {{- and -}}.',
        'Diagnose and repair common syntax mistakes (unclosed tags, nil references).',
        'Use the json filter for live on-page debugging.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: `{% comment %}
  Internal Developer Notes:
  @param product: Product drop
{% endcomment %}

# Whitespace Stripping
<span class="badge">
  {{- product.title -}}
</span>

# Debugging with json filter
<script>
  console.log({{ product | json }});
</script>`,
      sections: [
        {
          id: 'sec-beg-11-1',
          title: 'Whitespace Control and Live Debugging in Practice',
          difficulty: 'Beginner',
          analogy: 'Using the json filter to inspect an object is like turning on an X-ray machine to see everything inside.',
          content: `### Hands-on Debugging and Whitespace Control

Let's review practical examples demonstrating whitespace stripping, internal comments, and JSON object inspection.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-whitespace-control.liquid',
              code: `<p class="formatted-statement">
  Item: 
  <span class="highlight">
    {{- product.title -}}
  </span>
  —
  <span class="price">
    {{- product.price | money -}}
  </span>
</p>`,
              explanation: 'Uses {{- -}} to strip unexpected spaces between spans and punctuation.',
              lineByLine: [
                { line: '{{- product.title -}}', explanation: 'Trims leading/trailing whitespace so the text hugs the enclosing <span> tags precisely.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-debugging-json.liquid',
              code: `{% comment %}
  DEBUGGING UTILITY:
  Inspects product variants and options in the browser console.
{% endcomment %}
<div class="dev-debug-wrapper" style="display: none;">
  <pre>{{ product.variants | json }}</pre>
</div>`,
              explanation: 'Uses the json filter to dump object data for developer inspection.',
              lineByLine: [
                { line: '{{ product.variants | json }}', explanation: 'Serializes the entire variants array into JSON string.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-fixing-broken-template.liquid',
              code: `{% comment %} Fixed: Added missing endif and defensive product guard {% endcomment %}
{% if product %}
  <div class="product-banner">
    <h2>{{ product.title | default: 'Featured Item' }}</h2>
    {% if product.available %}
      <p class="status">In Stock ({{ product.variants.size }} Options)</p>
    {% else %}
      <p class="status">Sold Out</p>
    {% endif %}
  </div>
{% endif %}`,
              explanation: 'Clean defensive pattern ensuring product exists and all conditional blocks are closed with {% endif %}.',
              lineByLine: [
                { line: '{% if product %}', explanation: 'Defensive check preventing errors if product is nil.' },
                { line: '{% endif %}', explanation: 'Correctly closes both nested and outer if blocks.' }
              ]
            }
          ],
          commonMistakes: [
            'Forgetting that Liquid errors on unclosed tags will break the entire section from rendering.',
            'Overusing whitespace stripping on large template blocks, making code hard to read for little performance gain. Use it where whitespace matters (inline-block layouts, inline SVG strings).',
            'Leaving debug dumps ({{ product | json }}) visible in production themes.'
          ],
          proTip: 'When inspecting unfamiliar theme files, insert `<script>console.log({{ product | json }});</script>` to see every available property, image URL, variant ID, and metafield in the browser DevTools console.',
          miniPractice: {
            question: 'What is the primary function of {{- product.title -}}?',
            options: [
              'Converts the title to lowercase',
              'Strips leading and trailing whitespace around the rendered output',
              'Translates the title to English',
              'Removes all special characters'
            ],
            correctAnswer: 1,
            explanation: 'The dash modifier {{- and -}} strips whitespace immediately before and after the output.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Debug Broken Product Snippet',
          instructions: 'Fix the broken Liquid snippet below by closing all tags properly, correcting filter syntax, and adding a defensive fallback for missing product descriptions.',
          starterCode: `<!-- Fix this broken snippet -->
{% if product.available
  <h2>{{ product.title | upcase }</h2>
  <p>{{ product.description | truncate 50 }}</p>
<!-- Missing closing tag -->`,
          solutionCode: `{% if product.available %}
  <h2>{{ product.title | upcase }}</h2>
  <p>{{ product.description | strip_html | truncate: 50 | default: 'No description available.' }}</p>
{% endif %}`
        }
      ],
      keyTakeaways: [
        '{% comment %} creates server-stripped developer notes.',
        '{{- and -}} strips whitespace to eliminate layout gaps.',
        'Always pair opening tags (if, for, case, form) with matching closing tags (endif, endfor, endcase, endform).',
        'Use the `json` filter to inspect object structures during development.'
      ],
      summary: 'You have mastered Liquid comments, whitespace stripping, error diagnosis, and debugging workflows.'
    }
  },

  // =========================================================================
  // MODULE 12: Beginner Project
  // =========================================================================
  {
    id: 'shopify-beg-12',
    orderIndex: 12,
    title: 'Module 12: Beginner Project: Complete Product & Collection Experience',
    description: 'Build a complete, standalone Shopify product and collection storefront component featuring header, navigation, collection grid, product cards, pricing, compare-at badges, availability pills, cart counter, customer greeting, and product form.',
    status: 'locked',
    requiresQuiz: false,
    xpReward: 300,
    level: 'beginner',
    resources: [
      { id: 'res-sh-proj1', title: 'Beginner Capstone Specification', type: 'documentation', url: 'https://shopify.dev/docs/themes/getting-started' }
    ],
    lessonContent: {
      overview: `### Beginner Project: Complete Basic Shopify Product & Collection Experience

In this comprehensive milestone project, you will integrate all 11 Beginner Level concepts into a fully functional, production-style Shopify storefront template.

### Project Deliverable Requirements:
Your solution must implement all 18 core requirements:
1. **Store Header**: Semantic \`<header>\` element displaying \`{{ shop.name }}\`.
2. **Navigation Menu**: Iterating over \`linklists['main-menu'].links\` with active state checking.
3. **Collection Heading**: Displaying \`collection.title\` and total product count.
4. **Product Grid Container**: Semantic layout grid for product display.
5. **Product Featured Image**: Utilizing \`image_url\` and \`image_tag\` with width parameter.
6. **Product Title Link**: Title linked to \`product.url\`.
7. **Product Price**: Formatted using the \`| money\` filter.
8. **Compare-at Price**: Strikethrough pricing for discounted items.
9. **Availability Indicator**: Dynamic badges for in-stock vs sold-out items.
10. **Product Detail Link**: Accessible link to product page.
11. **Cart Count Badge**: Live count from \`cart.item_count\` with localized link to \`routes.cart_url\`.
12. **Customer Greeting**: Personalized greeting if \`customer\` is logged in.
13. **Basic Product Form**: Add-to-cart form using \`{% form 'product', product %}\`.
14. **Liquid Conditionals**: Proper \`if\`, \`elsif\`, \`else\`, and \`unless\` usage.
15. **Loops**: Clean \`for\` iteration with empty collection fallback (\`{% else %}\`).
16. **Filters**: Application of \`upcase\`, \`money\`, \`truncate\`, and \`default\`.
17. **Proper Comments**: Documenting component blocks with \`{% comment %}\`.
18. **Clean Code**: Consistent indentation, defensive object checks, and valid HTML.`,
      analogyHero: 'Think of this capstone project like building your very first complete storefront display window: lighting, signage, mannequins, price tags, and register counter all working together harmoniously.',
      objectives: [
        'Synthesize all Beginner Liquid concepts into a unified storefront experience.',
        'Implement semantic HTML5, accessible ARIA attributes, and defensive Liquid coding.',
        'Construct a working product collection grid and add-to-cart interface.',
        'Validate code against Shopify theme engineering best practices.'
      ],
      estimatedTime: '60 mins',
      syntaxGuide: `<!-- Master Beginner Project Reference Architecture -->
<header class="store-header">
  <div class="brand">{{ shop.name }}</div>
  <nav>{{ ... linklists ... }}</nav>
  <div class="user-meta">{{ ... customer / cart ... }}</div>
</header>
<main class="collection-view">
  <div class="product-grid">{{ ... products loop ... }}</div>
</main>`,
      sections: [
        {
          id: 'sec-beg-12-1',
          title: 'Project Reference Implementation & Code Walkthrough',
          difficulty: 'Beginner',
          analogy: 'Reviewing the blueprint before constructing your building ensures every foundation beam is secure.',
          content: `### Complete Beginner Project Reference Code

Examine the complete reference implementation below demonstrating all 18 project requirements:`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'beginner-capstone-experience.liquid',
              code: `{% comment %}
  ========================================================================
  SKILLORA AI — SHOPIFY LIQUID BEGINNER CAPSTONE PROJECT
  Component: Complete Product & Collection Experience
  Features: Header, Nav, Customer Greeting, Cart Badge, Product Grid & Form
  ========================================================================
{% endcomment %}

<!-- 1. Global Store Header & Navigation -->
<header class="site-header" role="banner">
  <div class="header-container">
    <div class="header-brand">
      <h1 class="shop-logo">
        <a href="{{ routes.root_url }}">{{ shop.name }}</a>
      </h1>
    </div>

    <!-- 2. Navigation Menu -->
    <nav class="header-nav" aria-label="Main Navigation">
      <ul class="nav-links">
        {% for link in linklists['main-menu'].links %}
          <li class="nav-item {% if link.active %}nav-item--active{% endif %}">
            <a href="{{ link.url }}">{{ link.title }}</a>
          </li>
        {% endfor %}
      </ul>
    </nav>

    <!-- 11 & 12. Customer Greeting & Cart Widget -->
    <div class="header-actions">
      {% if customer %}
        <span class="customer-greeting">Hi, {{ customer.first_name }}!</span>
        <a href="{{ routes.account_url }}" class="account-link">Account</a>
      {% else %}
        <a href="{{ routes.account_login_url }}" class="account-link">Sign In</a>
      {% endif %}

      <a href="{{ routes.cart_url }}" class="cart-widget" aria-label="Shopping Cart">
        <span class="cart-icon">🛒</span>
        <span class="cart-badge">{{ cart.item_count }}</span>
      </a>
    </div>
  </div>
</header>

<!-- 3. Collection Hero Section -->
<main class="collection-main" role="main">
  <header class="collection-banner">
    <h2 class="collection-title">{{ collection.title | default: 'Featured Catalog' }}</h2>
    <p class="collection-stats">Showing {{ collection.products_count | default: 0 }} curated products</p>
  </header>

  <!-- 4. Responsive Product Grid -->
  <div class="product-grid">
    {% for product in collection.products %}
      <article class="product-card" id="product-{{ product.id }}">
        
        <!-- 5. Product Image with Responsive Filter -->
        <div class="product-card__media">
          {% if product.featured_image %}
            {{ product.featured_image | image_url: width: 500 | image_tag: loading: 'lazy', alt: product.title, class: 'product-img' }}
          {% else %}
            {{ 'product-1' | placeholder_svg_tag: 'placeholder-svg' }}
          {% endif %}

          <!-- 8 & 9. Sale & Availability Badges -->
          <div class="product-card__badges">
            {% if product.compare_at_price > product.price %}
              <span class="badge badge--sale">SALE</span>
            {% endif %}
            {% unless product.available %}
              <span class="badge badge--soldout">Sold Out</span>
            {% endunless %}
          </div>
        </div>

        <!-- 6 & 7. Product Title, Pricing & Details -->
        <div class="product-card__info">
          <span class="product-vendor">{{ product.vendor | upcase }}</span>
          <a href="{{ product.url }}" class="product-title-link">
            <h3 class="product-title">{{ product.title }}</h3>
          </a>

          <div class="product-pricing">
            <span class="price-active">{{ product.price | money }}</span>
            {% if product.compare_at_price > product.price %}
              <s class="price-compare">{{ product.compare_at_price | money }}</s>
            {% endif %}
          </div>

          <!-- 13. Basic Add to Cart Form -->
          {% form 'product', product, class: 'card-atc-form' %}
            <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}">
            <button 
              type="submit" 
              class="btn btn--atc" 
              {% unless product.available %}disabled{% endunless %}
            >
              {% if product.available %}
                Add to Cart
              {% else %}
                Sold Out
              {% endif %}
            </button>
          {% endform %}
        </div>
      </article>
    {% else %}
      <div class="empty-collection-state">
        <p>No products found in this collection. Check back soon!</p>
      </div>
    {% endfor %}
  </div>
</main>`,
              explanation: 'Complete implementation covering all 18 requirements in clean, semantic Liquid code.',
              lineByLine: [
                { line: '<header class="site-header" ...>', explanation: 'Defines semantic header with accessible landmark.' },
                { line: '{% for link in linklists[\'main-menu\'].links %}', explanation: 'Builds main menu with active state detection.' },
                { line: '{% if customer %}', explanation: 'Checks for authenticated customer greeting.' },
                { line: '{{ cart.item_count }}', explanation: 'Renders dynamic cart quantity badge.' },
                { line: '{% for product in collection.products %}', explanation: 'Renders collection product grid with cards.' },
                { line: '{% form \'product\', product %}', explanation: 'Embeds working add-to-cart forms on each product card.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'snippets/project-header-nav.liquid',
              code: `<header class="site-header flex justify-between items-center py-4 px-6 bg-white border-b">
  <div class="logo font-heading font-bold text-xl">{{ shop.name }}</div>
  <nav class="main-nav">
    <ul class="flex gap-6">
      {% for link in linklists['main-menu'].links %}
        <li>
          <a href="{{ link.url }}" class="nav-link {% if link.active %}font-bold text-brand{% endif %}">
            {{ link.title }}
          </a>
        </li>
      {% endfor %}
    </ul>
  </nav>
  <div class="header-tools flex items-center gap-4">
    {% if customer %}
      <span class="text-xs">Hi, {{ customer.first_name }}</span>
    {% endif %}
    <a href="{{ routes.cart_url }}" class="cart-badge flex items-center gap-1 font-mono text-xs">
      <span>Cart</span>
      <span class="count px-2 py-0.5 rounded-full bg-brand text-white">{{ cart.item_count }}</span>
    </a>
  </div>
</header>`,
              explanation: 'Modular header component with active menu link detection and authenticated customer greeting.',
              lineByLine: [
                { line: '<header class="site-header ...">', explanation: 'Creates accessible header container.' },
                { line: '{% for link in linklists[\'main-menu\'].links %}', explanation: 'Iterates through navigation menu links.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'snippets/project-product-card.liquid',
              code: `<div class="product-card border rounded-2xl p-4 bg-white shadow-sm flex flex-col justify-between">
  {% if card_product.featured_image %}
    <a href="{{ card_product.url }}" class="image-wrapper aspect-square block overflow-hidden rounded-xl">
      {{ card_product.featured_image | image_url: width: 400 | image_tag: loading: 'lazy', alt: card_product.title, class: 'w-full h-full object-cover' }}
    </a>
  {% endif %}
  <div class="card-body mt-3">
    <span class="vendor text-xs text-muted uppercase font-mono">{{ card_product.vendor }}</span>
    <a href="{{ card_product.url }}">
      <h4 class="font-heading font-bold text-sm text-slate-900 mt-0.5">{{ card_product.title }}</h4>
    </a>
    <div class="pricing flex items-center gap-2 mt-2">
      <span class="price-active font-mono font-bold text-brand">{{ card_product.price | money }}</span>
      {% if card_product.compare_at_price > card_product.price %}
        <s class="text-xs font-mono text-muted">{{ card_product.compare_at_price | money }}</s>
      {% endif %}
    </div>
  </div>
  {% form 'product', card_product, class: 'mt-4' %}
    <input type="hidden" name="id" value="{{ card_product.selected_or_first_available_variant.id }}">
    <button type="submit" class="w-full py-2.5 rounded-xl bg-brand text-white font-bold text-xs" {% unless card_product.available %}disabled{% endunless %}>
      {% if card_product.available %}Add to Cart{% else %}Sold Out{% endif %}
    </button>
  {% endform %}
</div>`,
              explanation: 'Independent product card snippet with responsive media, price badge, and add to cart form.',
              lineByLine: [
                { line: '{{ card_product.featured_image | image_url: width: 400 ... }}', explanation: 'Loads responsive product thumbnail.' },
                { line: '{% form \'product\', card_product %}', explanation: 'Embeds localized add-to-cart transaction form.' }
              ]
            }
          ],
          commonMistakes: [
            'Missing {% else %} inside the collection loop, leaving blank screens when collections are empty.',
            'Forgetting disabled attribute on add-to-cart buttons when product.available is false.',
            'Using raw unformatted pricing without | money filter.'
          ],
          proTip: 'Submit your solution code using the Project Submission interface to log your milestone deliverable and unlock the Beginner Final Assessment.',
          miniPractice: {
            question: 'Which element is mandatory inside a product purchase form to specify which variant to add to the cart?',
            options: [
              '<input name="id" value="{{ variant.id }}">',
              '<input name="product_id" value="{{ product.id }}">',
              '<input name="handle" value="{{ product.handle }}">',
              '<input name="title" value="{{ product.title }}">'
            ],
            correctAnswer: 0,
            explanation: 'The Shopify cart requires an input with name="id" containing the numeric Variant ID.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Project Submission Check',
          instructions: 'Verify your project includes all 18 features listed in the requirements checklist above before submitting for completion verification.',
          starterCode: `<!-- Verify all 18 requirements in your solution -->`,
          solutionCode: `<!-- Verified Beginner Project Deliverable -->`
        }
      ],
      keyTakeaways: [
        'The Beginner Project integrates headers, navigation, product cards, collection grids, cart counts, customer auth, and product forms.',
        'Semantic HTML and defensive Liquid logic ensure clean, accessible themes.',
        'Passing this project is a prerequisite for completing Level 1.'
      ],
      summary: 'You have completed the Beginner Project, building a full-featured Shopify product and collection storefront experience.'
    }
  },

  // =========================================================================
  // TASK 13: Beginner Final Assessment
  // =========================================================================
  {
    id: 'shopify-beg-13',
    orderIndex: 13,
    title: 'Beginner Final Assessment — Official Certification Exam',
    description: 'Comprehensive 20-Question Multiple Choice Certification Assessment covering Liquid fundamentals, delimiters, variables, objects, conditions, loops, filters, product cards, forms, and debugging. Passing score: 15/20 (75%).',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 350,
    level: 'beginner',
    isFinalAssessment: true,
    passingScore: 15,
    totalQuestions: 20,
    questions: SHOPIFY_BEGINNER_FINAL_ASSESSMENT,
    resources: [
      { id: 'res-sh-exam1', title: 'Beginner Exam Instructions & Grading Criteria', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid' }
    ]
  }
];
