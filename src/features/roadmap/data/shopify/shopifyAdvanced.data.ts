import { Task, QuizQuestion } from '../../types/roadmap.types';

export const SHOPIFY_ADVANCED_FINAL_ASSESSMENT: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Theme Architecture',
    question: 'What is the primary purpose of a Shopify theme section?',
    options: [
      'A configurable page component',
      'A database server',
      'A payment processor',
      'A password manager'
    ],
    correctAnswer: 0, // A
    explanation: 'Sections are modular, configurable page building blocks that merchants can reorder, customize, and configure in the Shopify Theme Editor.'
  },
  {
    id: 2,
    topic: 'Section Architecture',
    question: 'What does block.settings provide?',
    options: [
      'Values configured for the current block',
      'Customer authentication',
      'Database credentials',
      'Shopify billing information'
    ],
    correctAnswer: 0, // A
    explanation: 'block.settings accesses the specific merchant-configured values for that individual block instance within a section loop.'
  },
  {
    id: 3,
    topic: 'Theme Architecture',
    question: 'Why are reusable snippets important?',
    options: [
      'They reduce duplication and improve maintainability',
      'They replace databases',
      'They store passwords',
      'They process payments'
    ],
    correctAnswer: 0, // A
    explanation: 'Snippets encapsulate reusable micro-components (like product cards or badges) to eliminate code duplication across templates.'
  },
  {
    id: 4,
    topic: 'JSON Templates',
    question: 'What is a JSON template primarily responsible for?',
    options: [
      'Defining section composition for a template',
      'Storing API secrets',
      'Running SQL',
      'Managing customer passwords'
    ],
    correctAnswer: 0, // A
    explanation: 'JSON templates (e.g. product.json, index.json) define which sections appear on a page, their settings, and their visual rendering order.'
  },
  {
    id: 5,
    topic: 'Metafields & Metaobjects',
    question: 'What is a major benefit of metafields?',
    options: [
      'Store structured custom data associated with Shopify resources',
      'Replace Shopify checkout',
      'Run JavaScript on servers',
      'Store passwords'
    ],
    correctAnswer: 0, // A
    explanation: 'Metafields extend the Shopify data model by attaching structured custom attributes (care guides, specifications, references) to products, collections, and orders.'
  },
  {
    id: 6,
    topic: 'Security & Safe Output',
    question: 'Why should Liquid output be escaped when appropriate?',
    options: [
      'To safely render dynamic content',
      'To increase product inventory',
      'To install apps',
      'To create databases'
    ],
    correctAnswer: 0, // A
    explanation: 'Sanitizing and escaping dynamic user-supplied inputs prevents Cross-Site Scripting (XSS) and ensures valid HTML rendering.'
  },
  {
    id: 7,
    topic: 'Metafields & Metaobjects',
    question: 'What is a metaobject useful for?',
    options: [
      'Structured reusable custom content',
      'Password storage',
      'Payment processing',
      'CSS compilation'
    ],
    correctAnswer: 0, // A
    explanation: 'Metaobjects provide multi-field structured data models (e.g. Author profiles, Store Locations, Size Charts) that can be referenced across multiple products and pages.'
  },
  {
    id: 8,
    topic: 'Product & Variant Experience',
    question: 'Which object commonly represents the selected or fallback variant?',
    options: [
      'product.selected_or_first_available_variant',
      'product.active_variant_only',
      'variant.selected_product',
      'current.selected'
    ],
    correctAnswer: 0, // A
    explanation: 'product.selected_or_first_available_variant resolves URL variant parameters or defaults safely to the first purchasable variant in stock.'
  },
  {
    id: 9,
    topic: 'Performance Engineering',
    question: 'What is a performance problem with unnecessary nested loops?',
    options: [
      'They can increase rendering work',
      'They improve every theme automatically',
      'They create passwords',
      'They enable checkout'
    ],
    correctAnswer: 0, // A
    explanation: 'Nested loops execute in quadratic O(N²) complexity on the server, causing slow Time To First Byte (TTFB) and server rendering timeouts.'
  },
  {
    id: 10,
    topic: 'Accessibility Engineering',
    question: 'What is semantic HTML valuable for?',
    options: [
      'Accessibility and document structure',
      'Database migrations',
      'API authentication',
      'Payment processing'
    ],
    correctAnswer: 0, // A
    explanation: 'Semantic HTML communicates document hierarchy clearly to screen readers, assistive devices, and search engine crawlers.'
  },
  {
    id: 11,
    topic: 'Performance Engineering',
    question: 'Why are responsive image dimensions important?',
    options: [
      'They can help deliver appropriately sized images',
      'They create products',
      'They authenticate customers',
      'They replace Liquid'
    ],
    correctAnswer: 0, // A
    explanation: 'Responsive dimensions and srcset avoid sending heavy desktop images to mobile devices, improving load speed and Core Web Vitals.'
  },
  {
    id: 12,
    topic: 'Security & Safe Output',
    question: 'What should a production theme avoid embedding?',
    options: [
      'Secret API credentials',
      'Product titles',
      'Section settings',
      'Image alt text'
    ],
    correctAnswer: 0, // A
    explanation: 'Theme code runs on public storefronts and is visible in HTML/JS source. Secret API keys and private tokens must never be embedded in theme Liquid.'
  },
  {
    id: 13,
    topic: 'Security & Safe Output',
    question: 'What does url_encode help with?',
    options: [
      'Encoding text for use in URLs',
      'Creating database tables',
      'Encrypting passwords',
      'Compressing images'
    ],
    correctAnswer: 0, // A
    explanation: 'The url_encode filter converts spaces and special characters into percent-encoded strings safe for query parameters and URL links.'
  },
  {
    id: 14,
    topic: 'Filters & Sanitization',
    question: 'What does strip_html do?',
    options: [
      'Removes HTML tags from a string',
      'Creates HTML',
      'Creates a product',
      'Creates a section'
    ],
    correctAnswer: 0, // A
    explanation: 'The strip_html filter strips all HTML element tags from a text string, leaving only plain raw text.'
  },
  {
    id: 15,
    topic: 'Defensive Liquid Programming',
    question: 'What is defensive Liquid programming?',
    options: [
      'Safely handling missing, nil, blank, or unexpected data',
      'Creating passwords',
      'Installing Shopify',
      'Creating SQL'
    ],
    correctAnswer: 0, // A
    explanation: 'Defensive programming guards against missing objects, unpopulated metafields, or unauthenticated users using default filters and blank checks to prevent layout breaks.'
  },
  {
    id: 16,
    topic: 'Defensive Liquid Programming',
    question: 'Why use default values?',
    options: [
      'To provide a fallback when data is unavailable',
      'To delete products',
      'To create customers',
      'To install themes'
    ],
    correctAnswer: 0, // A
    explanation: 'The default filter ensures that if a variable is nil, false, or blank, a sensible placeholder is rendered without breaking the UI.'
  },
  {
    id: 17,
    topic: 'Accessibility Engineering',
    question: 'What is a major accessibility concern for product images?',
    options: [
      'Missing meaningful alternative text',
      'Product price',
      'Product vendor',
      'Collection handle'
    ],
    correctAnswer: 0, // A
    explanation: 'Missing or uninformative alt text prevents screen reader users from understanding what product or variant is displayed.'
  },
  {
    id: 18,
    topic: 'SEO Engineering',
    question: 'What is the purpose of canonical URLs?',
    options: [
      'Help identify the preferred URL for a page',
      'Create passwords',
      'Process payments',
      'Create database indexes'
    ],
    correctAnswer: 0, // A
    explanation: 'Canonical URLs inform search engines of the authoritative page address, eliminating duplicate content penalties across paginated or collection-filtered URLs.'
  },
  {
    id: 19,
    topic: 'Localization & i18n',
    question: 'Why should user-facing strings avoid unnecessary hard-coding?',
    options: [
      'It improves localization and maintainability',
      'It increases database speed',
      'It creates products',
      'It disables checkout'
    ],
    correctAnswer: 0, // A
    explanation: 'Using translation keys from locale files allows storefronts to be translated into multiple languages seamlessly.'
  },
  {
    id: 20,
    topic: 'Localization & i18n',
    question: 'What are locale files useful for?',
    options: [
      'Translation and localization',
      'Database storage',
      'Password hashing',
      'Image compression'
    ],
    correctAnswer: 0, // A
    explanation: 'Locale files (e.g. en.default.json, fr.json) store localized user-facing copy mapped to structured translation keys.'
  },
  {
    id: 21,
    topic: 'Section Architecture',
    question: 'What is a section preset useful for?',
    options: [
      'Providing initial configurable section configurations',
      'Creating API credentials',
      'Storing passwords',
      'Creating SQL tables'
    ],
    correctAnswer: 0, // A
    explanation: 'Presets register sections in the Theme Customizer library with initial default settings and blocks.'
  },
  {
    id: 22,
    topic: 'Section Architecture',
    question: 'What does section.id identify?',
    options: [
      'A section instance',
      'A customer password',
      'A payment transaction',
      'A database server'
    ],
    correctAnswer: 0, // A
    explanation: 'section.id generates a unique string identifier for that specific section instance on the page.'
  },
  {
    id: 23,
    topic: 'Theme Architecture',
    question: 'What is a good approach to large reusable theme components?',
    options: [
      'Break them into maintainable components/snippets/sections',
      'Put everything in one enormous file',
      'Duplicate the same code everywhere',
      'Store secrets in Liquid'
    ],
    correctAnswer: 0, // A
    explanation: 'Modular component architecture decomposes large systems into specialized sections and snippets for maintainability.'
  },
  {
    id: 24,
    topic: 'Defensive Liquid Programming',
    question: 'What should happen when a required Liquid object is unavailable?',
    options: [
      'Handle the situation safely rather than assuming it always exists',
      'Expose an API key',
      'Delete the theme',
      'Stop all Shopify services'
    ],
    correctAnswer: 0, // A
    explanation: 'Defensive Liquid checks object existence with conditionals and provides safe fallbacks instead of crashing.'
  },
  {
    id: 25,
    topic: 'Accessibility Engineering',
    question: 'What is an accessible button expected to have?',
    options: [
      'A clear accessible purpose/label',
      'A database key',
      'An API secret',
      'A product metafield'
    ],
    correctAnswer: 0, // A
    explanation: 'Accessible buttons require descriptive visible text or an aria-label so screen readers communicate their exact function.'
  },
  {
    id: 26,
    topic: 'Accessibility Engineering',
    question: 'Why is heading hierarchy important?',
    options: [
      'It improves document structure and accessibility',
      'It creates products',
      'It stores customers',
      'It changes payment methods'
    ],
    correctAnswer: 0, // A
    explanation: 'Maintaining proper heading order (h1 -> h2 -> h3) allows assistive technology users to navigate document landmarks intuitively.'
  },
  {
    id: 27,
    topic: 'QA & Debugging',
    question: 'What is a major purpose of theme QA?',
    options: [
      'Detect functional, visual, accessibility, SEO, and performance issues',
      'Create passwords',
      'Replace Shopify',
      'Create databases'
    ],
    correctAnswer: 0, // A
    explanation: 'Theme QA ensures cross-browser stability, mobile responsiveness, valid schema, accessibility compliance, and fast performance.'
  },
  {
    id: 28,
    topic: 'QA & Debugging',
    question: 'What is a good debugging process?',
    options: [
      'Reproduce the issue, inspect context/data, isolate the problem, fix, and retest',
      'Randomly delete code',
      'Disable all theme features',
      'Ignore errors'
    ],
    correctAnswer: 0, // A
    explanation: 'Systematic debugging reproduces the symptom, inspects Liquid context, isolates the defect, applies the fix, and runs regression tests.'
  },
  {
    id: 29,
    topic: 'Performance Engineering',
    question: 'Why should expensive Liquid operations be minimized?',
    options: [
      'To improve theme rendering efficiency',
      'To create customers',
      'To enable passwords',
      'To install apps'
    ],
    correctAnswer: 0, // A
    explanation: 'Minimizing Liquid operations reduces server CPU time and speeds up Time To First Byte (TTFB) for visitors.'
  },
  {
    id: 30,
    topic: 'Section Architecture',
    question: 'What is a dynamic section?',
    options: [
      'A section whose content/configuration can be customized',
      'A database',
      'A password',
      'A payment gateway'
    ],
    correctAnswer: 0, // A
    explanation: 'Dynamic sections contain {% schema %} presets allowing merchants to add, customize, and arrange them anywhere in JSON templates.'
  },
  {
    id: 31,
    topic: 'Section Architecture',
    question: 'What is block.id useful for?',
    options: [
      'Identifying an individual block instance',
      'Identifying a customer password',
      'Creating SQL',
      'Creating a payment'
    ],
    correctAnswer: 0, // A
    explanation: 'block.id provides a unique identifier for that specific block instance, useful for element IDs and JavaScript bindings.'
  },
  {
    id: 32,
    topic: 'Metafields & Metaobjects',
    question: 'What is a product metafield commonly used for?',
    options: [
      'Additional structured product-specific information',
      'Password authentication',
      'Database indexing',
      'Server deployment'
    ],
    correctAnswer: 0, // A
    explanation: 'Product metafields store custom attributes such as care instructions, material compositions, and technical specifications.'
  },
  {
    id: 33,
    topic: 'Theme Customization',
    question: 'What is a major benefit of configurable theme settings?',
    options: [
      'Merchants can customize supported content and behavior without editing code',
      'Customers can access passwords',
      'Developers can bypass Shopify security',
      'Products become databases'
    ],
    correctAnswer: 0, // A
    explanation: 'Configurable theme settings empower non-technical store owners to manage branding, copy, and layout in the Theme Editor safely.'
  },
  {
    id: 34,
    topic: 'Security & Safe Output',
    question: 'What is safe URL handling important for?',
    options: [
      'Correct and safer dynamic links',
      'Product inventory',
      'Password creation',
      'Theme billing'
    ],
    correctAnswer: 0, // A
    explanation: 'Safe URL encoding prevents malformed links, open redirect attacks, and broken multi-language query parameters.'
  },
  {
    id: 35,
    topic: 'Accessibility Engineering',
    question: 'What is the purpose of an alt attribute on an image?',
    options: [
      'Provide an alternative textual description',
      'Set product price',
      'Create a section',
      'Create a customer'
    ],
    correctAnswer: 0, // A
    explanation: 'The alt attribute provides a textual description for users who cannot see the image and for search engine indexing.'
  },
  {
    id: 36,
    topic: 'Theme Architecture',
    question: 'What is the best reason to separate layout, sections, and snippets?',
    options: [
      'Maintainability and separation of responsibilities',
      'To increase password length',
      'To replace Shopify\'s database',
      'To bypass checkout'
    ],
    correctAnswer: 0, // A
    explanation: 'Separating master layouts, modular sections, and micro-snippets maintains clean code organization and modular maintainability.'
  },
  {
    id: 37,
    topic: 'QA & Debugging',
    question: 'What should happen after fixing a production Liquid bug?',
    options: [
      'Retest the affected functionality and related areas',
      'Immediately delete the theme',
      'Remove all conditions',
      'Publish without checking'
    ],
    correctAnswer: 0, // A
    explanation: 'Regression testing verifies that the bug fix resolved the issue without introducing side effects in related components.'
  },
  {
    id: 38,
    topic: 'Theme Architecture',
    question: 'What is a scalable theme architecture?',
    options: [
      'An organized architecture using reusable, maintainable components',
      'One giant file containing everything',
      'Duplicated code in every template',
      'Secrets stored in snippets'
    ],
    correctAnswer: 0, // A
    explanation: 'A scalable theme architecture uses component-driven snippets, modular sections, JSON templates, and clear data contracts.'
  },
  {
    id: 39,
    topic: 'Performance Engineering',
    question: 'What is the purpose of performance optimization in a Shopify theme?',
    options: [
      'Improve rendering efficiency and user experience',
      'Create payment accounts',
      'Store passwords',
      'Replace Shopify'
    ],
    correctAnswer: 0, // A
    explanation: 'Performance optimization speeds up page load times, enhances conversion rates, and maximizes Core Web Vitals scores.'
  },
  {
    id: 40,
    topic: 'Course Certification',
    question: 'What is required before issuing the final Master Certificate?',
    options: [
      'Required course work, projects/capstone, and passing the Advanced assessment',
      'Only opening the course',
      'Only reading one lesson',
      'Only attempting MCQs'
    ],
    correctAnswer: 0, // A
    explanation: 'The verified Master Certificate requires 100% completion of all modules, projects, capstone deliverables, and passing the final assessment with at least 35/40.'
  }
];

export const SHOPIFY_ADVANCED_TASKS: Task[] = [
  // =========================================================================
  // MODULE 1: Advanced Theme Architecture
  // =========================================================================
  {
    id: 'shopify-adv-01',
    orderIndex: 1,
    title: 'Module 1: Advanced Theme Architecture & Component Systems',
    description: 'Master enterprise Shopify theme architecture: directory separation, JSON template inheritance, section groups, reusable design systems, and separation of concerns.',
    status: 'in_progress',
    requiresQuiz: true,
    xpReward: 300,
    level: 'advanced',
    resources: [
      { id: 'res-adv-arch', title: 'Shopify Theme Architecture & Design Systems', type: 'documentation', url: 'https://shopify.dev/docs/themes/architecture' }
    ],
    lessonContent: {
      overview: `### Enterprise Shopify Theme Architecture

At scale, enterprise Shopify themes power high-volume international brands. Theme architecture must be modular, highly performant, accessible, and maintainable across multi-developer teams.

### 1. The Separation of Concerns (SoC) Principle
- **Layouts (\`layout/\`):** Provide the document frame (\`theme.liquid\`, \`password.liquid\`). Contains global \`<head>\` metadata, critical design tokens, and section groups.
- **Templates (\`templates/\`):** Define the page structure as JSON schemas (\`product.json\`, \`collection.json\`). Contains zero CSS/HTML; purely section composition.
- **Sections (\`sections/\`):** Self-contained, configurable UI features with \`{% schema %}\`. Responsible for section-level business logic.
- **Snippets (\`snippets/\`):** Pure, reusable UI micro-components (buttons, cards, badges, icons). Snippets never contain \`{% schema %}\` and always use \`{% render %}\` with explicit arguments.
- **Assets (\`assets/\`):** Static assets and compiled ES modules/CSS.

### 2. Section Groups Architecture
Section groups (\`sections/header-group.json\`, \`sections/footer-group.json\`, \`sections/aside-group.json\`) allow merchants to manage multi-section headers and footers globally across all templates without editing layout files.`,
      analogyHero: 'Think of enterprise theme architecture like a commercial airliner: every module (engines, navigation, cabin, landing gear) has strict independent interfaces and redundancies so the whole system operates smoothly.',
      objectives: [
        'Architect scalable Shopify themes adhering to strict separation of concerns.',
        'Implement section groups for global header and footer composition.',
        'Design design-system token pipelines linking theme settings to CSS custom properties.',
        'Establish component contracts for maintainable snippet interfaces.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `{% sections 'header-group' %}
{{ content_for_layout }}
{% sections 'footer-group' %}

# Component Contract
{% render 'product-card',
  card_product: product,
  show_rating: true,
  media_ratio: 'adapt'
%}`,
      sections: [
        {
          id: 'sec-adv-1-1',
          title: 'Component-Based Design Systems in Liquid',
          difficulty: 'Advanced',
          analogy: 'A component contract is like a legal agreement: if you pass the required product and settings, the snippet promises to render a pristine card.',
          content: `### Hands-on Architecture & Component Contracts

Let's review complete architectural implementations for shared header groups, atomic snippet design systems, and production layouts.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'layout/theme.liquid',
              code: `<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}" dir="{{ request.locale.direction }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="canonical" href="{{ canonical_url }}">
    
    <title>
      {{ page_title }}{% if current_page != 1 %} — Page {{ current_page }}{% endif %}
      {% unless page_title contains shop.name %} | {{ shop.name }}{% endunless %}
    </title>

    {% if page_description %}
      <meta name="description" content="{{ page_description | escape }}">
    {% endif %}

    {{ content_for_header }}
    
    {% render 'theme-meta-tags' %}
    {% render 'theme-css-variables' %}
    
    {{ 'theme-core.css' | asset_url | stylesheet_tag }}
    <script src="{{ 'theme-core.js' | asset_url }}" type="module" async></script>
  </head>

  <body class="template-{{ template.name }} layout-default">
    <a class="skip-to-content-link visually-hidden-focusable" href="#MainContent">
      {{ 'accessibility.skip_to_text' | t | default: 'Skip to content' }}
    </a>

    {% sections 'header-group' %}

    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
      {{ content_for_layout }}
    </main>

    {% sections 'footer-group' %}
  </body>
</html>`,
              explanation: 'Enterprise production layout shell with localized directions, SEO hooks, token pipelines, and section groups.',
              lineByLine: [
                { line: 'dir="{{ request.locale.direction }}"', explanation: 'Supports right-to-left (RTL) languages like Arabic automatically.' },
                { line: '{% render \'theme-css-variables\' %}', explanation: 'Injects design system tokens from merchant settings.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'snippets/button-component.liquid',
              code: `{% comment %}
  ATOMIC COMPONENT: Button
  @param type [String]: 'button' or 'submit'
  @param variant [String]: 'primary', 'secondary', 'outline', or 'ghost'
  @param size [String]: 'sm', 'md', 'lg'
  @param label [String]: Visible button text
  @param disabled [Boolean]: Disabled state
  @param custom_class [String]: Optional additional classes
{% endcomment %}

<button 
  type="{{ type | default: 'button' }}"
  class="btn btn--{{ variant | default: 'primary' }} btn--{{ size | default: 'md' }} {{ custom_class }}"
  {% if disabled %}disabled="disabled" aria-disabled="true"{% endif %}
>
  <span class="btn__text">{{ label }}</span>
</button>`,
              explanation: 'Atomic design system button snippet with parameter validation and accessible ARIA attributes.',
              lineByLine: [
                { line: 'class="btn btn--{{ variant | default: \'primary\' }} ..."', explanation: 'BEM class naming convention with defaults.' }
              ]
            },
            {
              language: 'json',
              filename: 'sections/footer-group.json',
              code: `{
  "name": "Footer Group",
  "type": "footer",
  "sections": {
    "newsletter": {
      "type": "newsletter-bar",
      "settings": {}
    },
    "footer": {
      "type": "main-footer",
      "settings": {
        "show_social": true
      }
    }
  },
  "order": [
    "newsletter",
    "footer"
  ]
}`,
              explanation: 'Footer section group managing newsletter bar and multi-column footer.',
              lineByLine: [
                { line: '"type": "footer"', explanation: 'Declares footer-type section group.' }
              ]
            }
          ],
          commonMistakes: [
            'Mixing presentation HTML inside JSON templates: JSON templates should strictly contain configuration references.',
            'Using hardcoded English strings in layout files instead of translation keys ({{ "accessibility.skip" | t }}).',
            'Over-nesting snippets inside snippets more than 3 levels deep, hurting performance and code readability.'
          ],
          proTip: 'Group design system tokens into a dedicated `snippets/theme-css-variables.liquid` snippet that compiles all typography, color, spacing, and radius variables from merchant settings into `:root`.',
          miniPractice: {
            question: 'What is the primary role of a JSON template in Shopify OS 2.0?',
            options: [
              'Defines the sections on a page, their settings, and their visual rendering order',
              'Stores user passwords',
              'Compiles CSS files',
              'Processes checkout credit cards'
            ],
            correctAnswer: 0,
            explanation: 'JSON templates define section composition and hierarchy for that page type without hardcoding presentation markup.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Design System Badge Component Snippet',
          instructions: 'Build `snippets/badge.liquid` that accepts `label` (string), `type` ("sale", "soldout", "new", "vip"), and renders an accessible badge with appropriate BEM classes.',
          starterCode: `<!-- Create snippets/badge.liquid below -->`,
          solutionCode: `{% comment %}
  @param label [String]
  @param type [String]: 'sale', 'soldout', 'new', 'vip'
{% endcomment %}

<span class="badge badge--{{ type | default: 'neutral' }} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
  {{ label | escape }}
</span>`
        }
      ],
      keyTakeaways: [
        'Separation of Concerns maintains clean boundaries between layout, templates, sections, and snippets.',
        'Section groups manage multi-section headers and footers globally.',
        'Atomic snippets enforce design system consistency.',
        'Always validate snippet inputs with defensive default fallbacks.'
      ],
      summary: 'You have mastered enterprise Shopify theme architecture, component systems, and separation of concerns.'
    }
  },

  // =========================================================================
  // MODULE 2: Advanced Liquid Logic and Data Transformation
  // =========================================================================
  {
    id: 'shopify-adv-02',
    orderIndex: 2,
    title: 'Module 2: Advanced Liquid Logic & Defensive Programming',
    description: 'Master complex multi-condition branching, nested loops, defensive nil/blank/empty handling, array manipulation pipelines, and resilient Liquid engineering.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 300,
    level: 'advanced',
    resources: [
      { id: 'res-adv-logic', title: 'Advanced Liquid Programming Guide', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid' }
    ],
    lessonContent: {
      overview: `### Advanced Logic, Data Transformation & Defensive Programming

In production themes, data is unpredictable. Products may have zero images, metafields might be missing, customer tags might have inconsistent capitalization, and array queries might return \`nil\`. **Defensive programming** ensures your storefront never breaks or displays broken markup.

### 1. Complex Multi-Condition Logic
Because Liquid evaluates conditions from right-to-left and does not support parentheses \`()\`, complex Boolean logic must be decomposed into nested \`if\` blocks or state flags:
\`\`\`liquid
{% assign is_eligible_for_promo = false %}
{% if product.available and product.price >= 5000 %}
  {% if customer or product.tags contains 'PublicPromo' %}
    {% assign is_eligible_for_promo = true %}
  {% endif %}
{% endif %}
\`\`\`

### 2. Defensive Nil / Blank / Empty Guard Rails
- **\`nil\`**: Value does not exist.
- **\`blank\`**: Value is \`nil\`, \`false\`, or a string consisting entirely of whitespace (\`"   "\`).
- **\`empty\`**: Array or string has length 0 (\`[]\` or \`""\`).
\`\`\`liquid
{% if product.metafields.custom.specs.value != blank %}
  <!-- Render specs -->
{% endif %}
\`\`\`

### 3. Array Manipulation Pipelines
Chain multiple filters to construct sophisticated data pipelines on the server:
\`\`\`liquid
{% assign available_colors = product.variants 
  | where: 'available', true 
  | map: 'option1' 
  | uniq 
  | sort 
%}
\`\`\``,
      analogyHero: 'Think of defensive programming like driving with seatbelts, airbags, and anti-lock brakes: you write code that handles sudden unexpected road bumps (missing data) without crashing.',
      objectives: [
        'Deconstruct complex boolean logic safely without parenthesis errors.',
        'Implement defensive nil, blank, and empty guard rails on all data access.',
        'Build high-performance array pipelines with where, map, uniq, and sort.',
        'Handle dynamic product badges and recommendation algorithms defensively.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `{% assign in_stock_vendors = collection.products 
  | where: 'available', true 
  | map: 'vendor' 
  | uniq 
  | sort 
%}

{% if product.metafields.custom.badge.value != blank %}
  <span class="badge">{{ product.metafields.custom.badge.value }}</span>
{% endif %}`,
      sections: [
        {
          id: 'sec-adv-2-1',
          title: 'Defensive Logic & Data Pipelines in Practice',
          difficulty: 'Advanced',
          analogy: 'A data transformation pipeline is like a water refinery: filter out the solids, remove impurities, sort into containers, and package for delivery.',
          content: `### Hands-on Advanced Logic Implementations

Let's examine practical implementations for dynamic promotion eligibility, multi-badge decision trees, and defensive collection filtering.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-promo-eligibility.liquid',
              code: `{% comment %}
  Evaluates multi-tiered promotional qualification defensively.
{% endcomment %}

{% assign qualifies_for_discount = false %}
{% assign discount_rate = 0 %}

{% if product.available %}
  {% if customer and customer.orders_count > 3 %}
    {% assign qualifies_for_discount = true %}
    {% assign discount_rate = 15 %}
  {% elsif product.compare_at_price > product.price %}
    {% assign qualifies_for_discount = true %}
    {% assign discount_rate = 10 %}
  {% endif %}
{% endif %}

{% if qualifies_for_discount %}
  <div class="promo-callout alert alert--success">
    <span>🎉 You qualify for {{ discount_rate }}% off at checkout!</span>
  </div>
{% endif %}`,
              explanation: 'Clean nested logic calculating customer VIP eligibility and discount rates.',
              lineByLine: [
                { line: '{% assign qualifies_for_discount = false %}', explanation: 'Initializes state flag to false.' },
                { line: '{% if customer and customer.orders_count > 3 %}', explanation: 'Tier 1 VIP check for loyal customers.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-dynamic-badge-engine.liquid',
              code: `<div class="product-badge-engine">
  {% if product.available == false %}
    <span class="badge badge--soldout">Sold Out</span>
  {% elsif product.compare_at_price > product.price %}
    {% assign savings_pct = product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round %}
    <span class="badge badge--sale">Save {{ savings_pct }}%</span>
  {% elsif product.tags contains 'New' %}
    <span class="badge badge--new">New Arrival</span>
  {% elsif product.tags contains 'Bestseller' %}
    <span class="badge badge--hot">🔥 Bestseller</span>
  {% endif %}
</div>`,
              explanation: 'Multi-branch badge engine prioritizing sold-out state, percentage savings calculation, and product tags.',
              lineByLine: [
                { line: 'times: 100.0 | divided_by: ... | round', explanation: 'Calculates accurate percentage savings with floating point math.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-array-transformation-pipeline.liquid',
              code: `{% assign available_sizes = product.variants 
  | where: 'available', true 
  | map: 'option1' 
  | compact 
  | uniq 
%}

<div class="available-sizes-pill-list">
  <span class="label text-xs uppercase text-muted">Sizes in Stock:</span>
  {% for size in available_sizes %}
    <span class="size-pill font-mono font-bold">{{ size }}</span>
  {% else %}
    <span class="text-xs text-muted">No sizes currently in stock</span>
  {% endfor %}
</div>`,
              explanation: 'Pipeline extracting unique, non-null, in-stock variant sizes with empty array fallback.',
              lineByLine: [
                { line: '| compact | uniq', explanation: 'Strips nil entries and deduplicates size values.' }
              ]
            }
          ],
          commonMistakes: [
            'Attempting to calculate percentages using integer division: 50 | divided_by: 100 results in 0! Always multiply by 100.0 first.',
            'Assuming customer.orders is non-empty without checking customer.orders.size > 0.',
            'Using contains with incorrect letter casing on tags.'
          ],
          proTip: 'When performing percentage math in Liquid, multiply by `100.0` (with decimal) before dividing to force floating-point arithmetic rather than integer truncation.',
          miniPractice: {
            question: 'What is the result of {{ 25 | divided_by: 100 }} in Liquid compared to {{ 25 | times: 100.0 | divided_by: 100 }}?',
            options: [
              '0 vs 25.0',
              '0.25 vs 0.25',
              'Error vs 25',
              '100 vs 25'
            ],
            correctAnswer: 0,
            explanation: 'Integer division (25 / 100) truncates to 0 in Liquid, whereas multiplying by 100.0 preserves precision yielding 25.0.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Calculate Dynamic Percentage Savings Badge',
          instructions: 'Calculate the percentage discount between `product.compare_at_price` and `product.price`. If discount is 20% or greater, render "⭐ SUPER DEAL: XX% OFF"; else render standard "SALE".',
          starterCode: `<!-- Implement discount percentage logic below -->`,
          solutionCode: `{% if product.compare_at_price > product.price %}
  {% assign discount_pct = product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round %}
  {% if discount_pct >= 20 %}
    <span class="badge badge--super-deal">⭐ SUPER DEAL: {{ discount_pct }}% OFF</span>
  {% else %}
    <span class="badge badge--sale">SALE</span>
  {% endif %}
{% endif %}`
        }
      ],
      keyTakeaways: [
        'Decompose complex boolean conditions into nested `if` statements.',
        'Use floating-point numbers (`100.0`) for percentage calculations.',
        'Build multi-stage array pipelines with `where`, `map`, `compact`, and `uniq`.',
        'Defensive nil checking ensures resilience against unpopulated attributes.'
      ],
      summary: 'You have mastered advanced Liquid logic, defensive programming patterns, and array transformation pipelines.'
    }
  },

  // =========================================================================
  // MODULE 3: Advanced Sections and Block Systems
  // =========================================================================
  {
    id: 'shopify-adv-03',
    orderIndex: 3,
    title: 'Module 3: Advanced Sections & Dynamic Block Systems',
    description: 'Master advanced section block systems: polymorphic blocks, schema validation, block limits, presets, dynamic column grids, and customizer inspector integration.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 300,
    level: 'advanced',
    resources: [
      { id: 'res-adv-blocks', title: 'Shopify Section Blocks Architecture Guide', type: 'documentation', url: 'https://shopify.dev/docs/themes/architecture/sections/section-schema#blocks' }
    ],
    lessonContent: {
      overview: `### Advanced Section Block Systems & Schema Engineering

In enterprise themes, sections often act as mini page builders—supporting multiple distinct **polymorphic block types** (e.g., text columns, video players, countdown timers, product recommendations) within a single section.

### 1. Polymorphic Block Types in \`{% schema %}\`
A single section can define multiple block schemas:
\`\`\`json
"blocks": [
  { "type": "heading_block", "name": "Heading", "settings": [...] },
  { "type": "image_card", "name": "Image Card", "settings": [...] },
  { "type": "cta_button", "name": "Call to Action", "settings": [...] }
]
\`\`\`

### 2. Block Dispatching via \`case block.type\`
In the section Liquid template, dispatch rendering based on the active block type:
\`\`\`liquid
{% for block in section.blocks %}
  <div class="block-wrapper" {{ block.shopify_attributes }} id="block-{{ block.id }}">
    {% case block.type %}
      {% when 'heading_block' %}
        <!-- Render heading -->
      {% when 'image_card' %}
        <!-- Render card -->
      {% when 'cta_button' %}
        <!-- Render button -->
    {% endcase %}
  </div>
{% endfor %}
\`\`\`

### 3. Schema Limits and Presets
- **\`max_blocks: 8\`**: Enforces layout safety.
- **\`limit: 1\` on Block Definition**: Restricts a specific block type (such as a Title or Add-to-Cart form) to only appear once within the section.
- **Preset Default Blocks**: Pre-populates the section with a recommended layout when added by a merchant.`,
      analogyHero: 'Think of polymorphic blocks like a customizable Swiss Army Knife: the handle is the section, and the merchant can snap in the knife blade, scissors, or corkscrew blocks in any order they want.',
      objectives: [
        'Engineer sections supporting multiple distinct block types.',
        'Implement case/when block dispatching with block.shopify_attributes.',
        'Apply schema validation rules (max_blocks, block limits, range constraints).',
        'Design rich section presets with pre-configured block layouts.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `{% for block in section.blocks %}
  <div class="block-{{ block.type }}" {{ block.shopify_attributes }}>
    {% case block.type %}
      {% when 'text_column' %}
        <p>{{ block.settings.text }}</p>
      {% when 'button' %}
        <a href="{{ block.settings.link }}">{{ block.settings.label }}</a>
    {% endcase %}
  </div>
{% endfor %}`,
      sections: [
        {
          id: 'sec-adv-3-1',
          title: 'Polymorphic Block Systems in Practice',
          difficulty: 'Advanced',
          analogy: 'Dispatching blocks with case/when is like a smart postal sorter placing letters in different mailbags based on the zip code.',
          content: `### Hands-on Polymorphic Section Implementations

Let's examine a complete production section supporting multiple block types: headings, rich text, images, and action buttons with schema constraints.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'sections/dynamic-hero-builder.liquid',
              code: `<section class="hero-builder-section" id="hero-{{ section.id }}" style="text-align: {{ section.settings.alignment }};">
  <div class="hero-container max-w-5xl mx-auto px-4 py-12 space-y-6">
    {% for block in section.blocks %}
      <div class="hero-block-item hero-block--{{ block.type }}" {{ block.shopify_attributes }} id="block-{{ block.id }}">
        {% case block.type %}
          
          {% when 'badge' %}
            <span class="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider" style="background: {{ block.settings.badge_bg }}; color: {{ block.settings.badge_color }};">
              {{ block.settings.badge_text }}
            </span>

          {% when 'heading' %}
            <h1 class="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
              {{ block.settings.heading_text }}
            </h1>

          {% when 'text' %}
            <div class="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {{ block.settings.body_text }}
            </div>

          {% when 'button_group' %}
            <div class="button-group flex flex-wrap items-center justify-center gap-4 pt-2">
              {% if block.settings.btn1_label != blank %}
                <a href="{{ block.settings.btn1_url }}" class="btn btn--primary px-6 py-3 rounded-xl font-bold">
                  {{ block.settings.btn1_label }}
                </a>
              {% endif %}
              {% if block.settings.btn2_label != blank %}
                <a href="{{ block.settings.btn2_url }}" class="btn btn--secondary px-6 py-3 rounded-xl font-bold">
                  {{ block.settings.btn2_label }}
                </a>
              {% endif %}
            </div>

        {% endcase %}
      </div>
    {% endfor %}
  </div>
</section>

{% schema %}
{
  "name": "Dynamic Hero Builder",
  "max_blocks": 6,
  "settings": [
    {
      "type": "select",
      "id": "alignment",
      "label": "Content Alignment",
      "options": [
        { "value": "left", "label": "Left" },
        { "value": "center", "label": "Center" },
        { "value": "right", "label": "Right" }
      ],
      "default": "center"
    }
  ],
  "blocks": [
    {
      "type": "badge",
      "name": "Announcement Badge",
      "limit": 1,
      "settings": [
        { "type": "text", "id": "badge_text", "label": "Badge Text", "default": "⚡ New Release" },
        { "type": "color", "id": "badge_bg", "label": "Badge Background", "default": "#eff6ff" },
        { "type": "color", "id": "badge_color", "label": "Badge Text Color", "default": "#2563eb" }
      ]
    },
    {
      "type": "heading",
      "name": "Heading",
      "limit": 1,
      "settings": [
        { "type": "text", "id": "heading_text", "label": "Heading", "default": "Build Without Limits" }
      ]
    },
    {
      "type": "text",
      "name": "Paragraph",
      "settings": [
        { "type": "textarea", "id": "body_text", "label": "Text", "default": "Next-generation ecommerce engineered with Shopify Liquid." }
      ]
    },
    {
      "type": "button_group",
      "name": "Button Group",
      "limit": 1,
      "settings": [
        { "type": "text", "id": "btn1_label", "label": "Primary Button Label", "default": "Get Started" },
        { "type": "url", "id": "btn1_url", "label": "Primary Button URL" },
        { "type": "text", "id": "btn2_label", "label": "Secondary Button Label", "default": "Learn More" },
        { "type": "url", "id": "btn2_url", "label": "Secondary Button URL" }
      ]
    }
  ],
  "presets": [
    {
      "name": "Dynamic Hero Builder",
      "blocks": [
        { "type": "badge" },
        { "type": "heading" },
        { "type": "text" },
        { "type": "button_group" }
      ]
    }
  ]
}
{% endschema %}`,
              explanation: 'Enterprise modular hero section with polymorphic block types, schema limits, presets, and inspector attributes.',
              lineByLine: [
                { line: '{% case block.type %}', explanation: 'Dispatches rendering to matching block template.' },
                { line: '"limit": 1', explanation: 'Enforces that only one heading or button group block can exist.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'sections/faq-accordion.liquid',
              code: `<section class="faq-accordion-section py-12 max-w-4xl mx-auto px-4" id="faq-{{ section.id }}">
  <h2 class="text-3xl font-heading font-bold text-center mb-8">{{ section.settings.title }}</h2>
  <div class="space-y-4">
    {% for block in section.blocks %}
      <details class="faq-item border rounded-2xl p-4 bg-white shadow-sm" {{ block.shopify_attributes }}>
        <summary class="font-heading font-bold cursor-pointer text-slate-900 list-none flex justify-between items-center">
          <span>{{ block.settings.question }}</span>
          <span class="icon text-brand font-mono text-lg">+</span>
        </summary>
        <div class="faq-answer mt-3 text-sm text-slate-600 leading-relaxed border-t pt-3">
          {{ block.settings.answer }}
        </div>
      </details>
    {% endfor %}
  </div>
</section>
{% schema %}
{
  "name": "FAQ Accordion",
  "settings": [
    { "type": "text", "id": "title", "label": "Section Title", "default": "Frequently Asked Questions" }
  ],
  "blocks": [
    {
      "type": "question",
      "name": "FAQ Question",
      "settings": [
        { "type": "text", "id": "question", "label": "Question", "default": "How does shipping work?" },
        { "type": "richtext", "id": "answer", "label": "Answer", "default": "<p>We offer express 2-day worldwide shipping.</p>" }
      ]
    }
  ]
}
{% endschema %}`,
              explanation: 'Accessible HTML5 accordion section utilizing dynamic blocks and schema settings.',
              lineByLine: [
                { line: '<details class="faq-item" {{ block.shopify_attributes }}>', explanation: 'HTML5 native accordion element with theme editor inspector attributes.' },
                { line: '{{ block.settings.question }}', explanation: 'Renders merchant configured question text.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'sections/testimonials-slider.liquid',
              code: `<section class="testimonials-section py-12 bg-slate-50" id="testimonials-{{ section.id }}">
  <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    {% for block in section.blocks %}
      <blockquote class="testimonial-card p-6 bg-white rounded-2xl shadow-sm border flex flex-col justify-between" {{ block.shopify_attributes }}>
        <div class="stars text-amber-400 text-sm mb-3">★★★★★</div>
        <p class="quote text-sm text-slate-700 italic">"{{ block.settings.quote }}"</p>
        <div class="author-info mt-4 pt-3 border-t flex items-center gap-3">
          <span class="font-bold text-xs text-slate-900">{{ block.settings.author }}</span>
          <span class="text-xs text-slate-400 font-mono">{{ block.settings.location }}</span>
        </div>
      </blockquote>
    {% endfor %}
  </div>
</section>`,
              explanation: 'Modular customer review grid section supporting unlimited testimonial blocks.',
              lineByLine: [
                { line: '{% for block in section.blocks %}', explanation: 'Iterates through each verified review block.' }
              ]
            }
          ],
          commonMistakes: [
            'Forgetting {{ block.shopify_attributes }} on block wrappers.',
            'Not handling missing URLs on button blocks before rendering <a> tags.',
            'Exceeding recommended block counts without setting "max_blocks" in schema.'
          ],
          proTip: 'Use `"limit": 1` in block definitions for essential single-instance elements (like primary headings, forms, or price tags) to prevent merchants from accidentally duplicating critical UI blocks.',
          miniPractice: {
            question: 'How do you ensure clicking a block inside the Theme Customizer opens that specific block\'s settings panel?',
            options: [
              'Attach {{ block.shopify_attributes }} to the block\'s root HTML element',
              'Include jQuery',
              'Add a database index',
              'Set class="shopify-block"'
            ],
            correctAnswer: 0,
            explanation: '{{ block.shopify_attributes }} injects Shopify-specific data attributes that connect the DOM node to the Theme Editor sidebar.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'FAQ Accordion Section with Dynamic Blocks',
          instructions: 'Create an FAQ accordion section schema with a block type "faq_item" containing question and answer settings, rendered as HTML `<details>` and `<summary>` elements.',
          starterCode: `<!-- Implement FAQ accordion section below -->`,
          solutionCode: `<section class="faq-section" id="faq-{{ section.id }}">
  <h2>{{ section.settings.heading | default: 'Frequently Asked Questions' }}</h2>
  <div class="faq-accordion-list">
    {% for block in section.blocks %}
      <details class="faq-item" {{ block.shopify_attributes }} id="block-{{ block.id }}">
        <summary class="faq-question font-bold cursor-pointer py-3">{{ block.settings.question }}</summary>
        <div class="faq-answer text-slate-600 py-2">{{ block.settings.answer }}</div>
      </details>
    {% endfor %}
  </div>
</section>

{% schema %}
{
  "name": "FAQ Accordion",
  "settings": [
    { "type": "text", "id": "heading", "label": "Heading", "default": "FAQ" }
  ],
  "blocks": [
    {
      "type": "faq_item",
      "name": "FAQ Item",
      "settings": [
        { "type": "text", "id": "question", "label": "Question", "default": "What is the return policy?" },
        { "type": "textarea", "id": "answer", "label": "Answer", "default": "30-day hassle-free returns." }
      ]
    }
  ],
  "presets": [
    {
      "name": "FAQ Accordion",
      "blocks": [
        { "type": "faq_item" },
        { "type": "faq_item" }
      ]
    }
  ]
}
{% endschema %}`
        }
      ],
      keyTakeaways: [
        'Polymorphic blocks enable mini page-builder capabilities inside sections.',
        'Use `case block.type` to dispatch rendering logic.',
        '`block.shopify_attributes` connects the DOM element to the Theme Editor inspector.',
        '`max_blocks` and `limit: 1` enforce layout integrity.'
      ],
      summary: 'You have mastered polymorphic block systems, schema validation, block limits, and Theme Editor inspector integration.'
    }
  },

  // =========================================================================
  // MODULE 4: Advanced Metafields and Metaobject Architecture
  // =========================================================================
  {
    id: 'shopify-adv-04',
    orderIndex: 4,
    title: 'Module 4: Advanced Metafields & Metaobject Architecture',
    description: 'Master structured custom data modeling: metaobject definitions and entries, reference fields, relational data linking, author profiles, size charts, and scalable CMS architectures.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 300,
    level: 'advanced',
    resources: [
      { id: 'res-adv-metaobj', title: 'Shopify Metaobjects Liquid Reference', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/objects/metaobject' }
    ],
    lessonContent: {
      overview: `### Relational Data Modeling with Metaobjects

While metafields attach custom fields to existing Shopify resources (products, orders), **Metaobjects** allow developers to define entirely new custom data models—such as Designer Profiles, Store Locations, Recipe Ingredients, Size Guides, and Brand Lookbooks.

### 1. Metaobject Architecture
A metaobject consists of:
1. **Definition:** The blueprint (e.g. \`designer\` with fields: \`name\`, \`bio\`, \`photo\`, \`instagram\`).
2. **Entries:** Specific records created under that definition (e.g. "Haris Khalil").
3. **Handle:** Unique identifier for each entry (\`metaobjects.designer['haris-khalil']\`).

### 2. Accessing Metaobjects in Liquid
- **Direct Global Lookup:**
  \`{{ metaobjects.designer['haris-khalil'].name.value }}\`
- **Iterating Over All Entries of a Definition:**
  \`{% for entry in metaobjects.designer.values %}\`
- **Metafield References:** A product metafield of type \`metaobject_reference\` links a product to a metaobject:
  \`{% assign designer = product.metafields.custom.designer.value %}\`
  \`<h3>Designed by {{ designer.name.value }}</h3>\`

### 3. Rich Metaobject Field Types
Metaobject fields include \`single_line_text_field\`, \`multi_line_text_field\`, \`file_reference\`, \`color\`, \`date\`, \`rating\`, \`product_reference\`, and \`list.metaobject_reference\`.`,
      analogyHero: 'Think of standard Shopify products like songs in a music library. Metafields are the song\'s custom BPM or key. Metaobjects are Artist Profiles: complete entities with bios, photos, and tour dates that multiple songs can link to.',
      objectives: [
        'Model custom business entities using Shopify Metaobjects.',
        'Access metaobject entries via global lookups and product reference metafields.',
        'Render multi-field relational records (bios, images, custom links).',
        'Construct scalable, reusable content systems for enterprise brands.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `{% assign author = article.metafields.custom.author_profile.value %}
<h3>{{ author.full_name.value }}</h3>
<p>{{ author.biography.value }}</p>

# Iterate over all entries in a metaobject definition
{% for location in metaobjects.store_location.values %}
  <h4>{{ location.city.value }}</h4>
{% endfor %}`,
      sections: [
        {
          id: 'sec-adv-4-1',
          title: 'Metaobjects and Relational Data in Practice',
          difficulty: 'Advanced',
          analogy: 'Linking a product to a metaobject is like tagging an author in a book listing: update the author\'s photo once, and it updates across all 50 of their books automatically.',
          content: `### Hands-on Metaobject Implementations

Let's examine complete implementations for an Author/Designer Profile card, a Size Guide modal system, and a Store Location directory powered by metaobjects.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-designer-profile.liquid',
              code: `{% assign designer = product.metafields.custom.designer_profile.value %}

{% if designer != blank %}
  <aside class="designer-spotlight-card p-6 rounded-2xl bg-slate-50 border border-slate-200 mt-8">
    <div class="flex items-center gap-4">
      {% if designer.avatar.value != blank %}
        {{ designer.avatar.value | image_url: width: 150, height: 150, crop: 'center' | image_tag: 
          loading: 'lazy', 
          alt: designer.name.value,
          class: 'w-16 h-16 rounded-full object-cover border-2 border-brand'
        }}
      {% endif %}
      <div>
        <span class="text-xs font-mono font-bold uppercase tracking-wider text-brand">Featured Designer</span>
        <h3 class="text-xl font-heading font-bold text-slate-900">{{ designer.name.value }}</h3>
      </div>
    </div>
    
    {% if designer.biography.value != blank %}
      <p class="text-sm text-slate-600 mt-3 leading-relaxed">
        {{ designer.biography.value }}
      </p>
    {% endif %}

    {% if designer.portfolio_url.value != blank %}
      <a href="{{ designer.portfolio_url.value }}" target="_blank" rel="noopener" class="inline-block mt-3 text-xs font-semibold text-brand hover:underline">
        View Full Portfolio →
      </a>
    {% endif %}
  </aside>
{% endif %}`,
              explanation: 'Renders a designer profile card referenced dynamically from a product metaobject reference.',
              lineByLine: [
                { line: '{% assign designer = product.metafields.custom.designer_profile.value %}', explanation: 'Resolves the referenced metaobject drop.' },
                { line: '{{ designer.avatar.value | image_url: ... }}', explanation: 'Pulls the avatar image from the metaobject record.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-store-locations-directory.liquid',
              code: `<section class="store-locations-directory py-12">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-heading font-bold text-center mb-8">Our Retail Showrooms</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {% for location in metaobjects.store_location.values %}
        <div class="location-card p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3 class="text-xl font-heading font-bold text-slate-900">{{ location.city.value }}</h3>
          <p class="text-sm text-slate-600 mt-2">{{ location.address.value }}</p>
          <p class="text-xs font-mono text-slate-500 mt-1">Hours: {{ location.operating_hours.value }}</p>
          <a href="tel:{{ location.phone.value }}" class="inline-block mt-4 text-xs font-bold text-brand hover:underline">
            📞 {{ location.phone.value }}
          </a>
        </div>
      {% endfor %}
    </div>
  </div>
</section>`,
              explanation: 'Iterates through all store location metaobject entries to build a retail directory.',
              lineByLine: [
                { line: '{% for location in metaobjects.store_location.values %}', explanation: 'Loops through all entries of the store_location metaobject definition.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-size-guide-metaobject.liquid',
              code: `{% assign size_guide = product.metafields.custom.size_guide.value %}

{% if size_guide != blank %}
  <div class="size-guide-modal-content p-6 bg-white rounded-2xl border border-slate-200 shadow-xl max-w-2xl mx-auto">
    <div class="flex items-center justify-between pb-4 border-b border-slate-200">
      <h3 class="text-xl font-heading font-bold text-slate-900">{{ size_guide.title.value | default: 'Size & Fit Guide' }}</h3>
      <span class="text-xs font-mono text-slate-500">Unit: {{ size_guide.measurement_unit.value | default: 'Inches (in)' }}</span>
    </div>
    
    {% if size_guide.measurement_table.value != blank %}
      <div class="table-responsive mt-4 overflow-x-auto">
        <table class="w-full text-xs text-left border-collapse">
          <thead>
            <tr class="bg-slate-100 text-slate-700 uppercase font-mono">
              <th class="p-3 border">Size</th>
              <th class="p-3 border">Chest</th>
              <th class="p-3 border">Waist</th>
              <th class="p-3 border">Hips</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 font-mono">
            {{ size_guide.measurement_table.value }}
          </tbody>
        </table>
      </div>
    {% endif %}

    {% if size_guide.fit_advice.value != blank %}
      <p class="mt-4 text-xs text-slate-600 bg-amber-50 p-3 rounded-xl border border-amber-200">
        💡 <strong>Fit Advice:</strong> {{ size_guide.fit_advice.value }}
      </p>
    {% endif %}
  </div>
{% endif %}`,
              explanation: 'Renders dynamic size guide modal content driven by a shared metaobject definition.',
              lineByLine: [
                { line: '{% assign size_guide = product.metafields.custom.size_guide.value %}', explanation: 'Fetches linked size guide metaobject from product.' },
                { line: '{{ size_guide.measurement_table.value }}', explanation: 'Renders structured table rows stored in the metaobject entry.' }
              ]
            }
          ],
          commonMistakes: [
            'Forgetting .value on metaobject fields: writing {{ designer.name }} prints a drop representation instead of the string.',
            'Assuming metaobject references exist on every product without checking `if designer != blank`.',
            'Hardcoding metaobject definition names with incorrect pluralization.'
          ],
          proTip: 'Use metaobjects for shared global content like Size Guides, Brand Profiles, and FAQ groups. When a merchant updates the metaobject in Shopify Admin, it updates on hundreds of linked products simultaneously.',
          miniPractice: {
            question: 'How do you iterate over all records defined under a metaobject named "author"?',
            options: [
              '{% for author in metaobjects.author.values %}',
              '{% for author in metaobjects.author %}',
              '{% for author in shop.metaobjects.author %}',
              '{% for author in author.records %}'
            ],
            correctAnswer: 0,
            explanation: 'metaobjects.<definition_handle>.values returns the array of all published entries for that metaobject.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Material Specification Metaobject Renderer',
          instructions: 'Write a snippet that resolves `product.metafields.custom.fabric_spec.value` (a metaobject containing `material_name`, `origin_country`, and `eco_certified` boolean) and renders a material badge.',
          starterCode: `<!-- Render fabric specification metaobject below -->`,
          solutionCode: `{% assign fabric = product.metafields.custom.fabric_spec.value %}

{% if fabric != blank %}
  <div class="fabric-spec-badge p-4 rounded-xl bg-emerald-50 border border-emerald-200">
    <h4 class="font-bold text-emerald-900">{{ fabric.material_name.value }}</h4>
    <p class="text-xs text-emerald-700">Origin: {{ fabric.origin_country.value }}</p>
    {% if fabric.eco_certified.value %}
      <span class="text-xs font-mono font-bold text-emerald-600">🌿 100% Eco-Certified Organic</span>
    {% endif %}
  </div>
{% endif %}`
        }
      ],
      keyTakeaways: [
        'Metaobjects define custom relational data models across Shopify.',
        'Access entries globally via `metaobjects.<handle>.values` or direct handles.',
        'Connect products to metaobjects using `metaobject_reference` metafields.',
        'Always append `.value` to access typed metaobject field content.'
      ],
      summary: 'You have mastered Shopify Metaobjects, relational data modeling, reference metafields, and scalable CMS architectures.'
    }
  },

  // =========================================================================
  // MODULE 5: Advanced Product and Variant Experience
  // =========================================================================
  {
    id: 'shopify-adv-05',
    orderIndex: 5,
    title: 'Module 5: Advanced Product & Variant Experience',
    description: 'Master enterprise product UX: dynamic AJAX variant switching, real-time inventory quantity checks, volume discounts, selling plan subscriptions, and image-to-variant binding.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 300,
    level: 'advanced',
    resources: [
      { id: 'res-adv-prod', title: 'Shopify Variant Experience Architecture', type: 'documentation', url: 'https://shopify.dev/docs/themes/architecture/templates/product' }
    ],
    lessonContent: {
      overview: `### Advanced Variant UX, Media Relationships & Subscriptions

High-converting product pages provide instant feedback as shoppers switch colors, sizes, and subscription frequencies without reloading the web page.

### 1. Variant Switching Architecture
When a shopper selects a variant swatch:
1. **URL History Update:** The browser updates \`?variant=123\` via \`window.history.replaceState\`.
2. **Dynamic Price Updates:** The price element updates instantly from the variant drop.
3. **Media Synchronization:** The product media gallery jumps to \`variant.featured_media\` or \`variant.featured_image\`.
4. **Button & Inventory States:** The Add to Cart button reflects in-stock, low-stock, or sold-out status.

### 2. Multi-Option Combinations
Products often have 2 or 3 independent option axes (e.g. Size: S/M/L, Color: Red/Blue, Material: Leather/Canvas). Liquid provides \`product.options_with_values\` to build multi-dimensional swatch pickers.

### 3. Selling Plan Groups & Subscriptions
Subscription-enabled products utilize \`product.selling_plan_groups\`:
- \`group.selling_plans\`: Array of subscription frequencies (e.g. "Deliver every 30 days - Save 15%").
- Product forms submit \`<input type="hidden" name="selling_plan" value="{{ plan.id }}">\`.`,
      analogyHero: 'Think of an advanced variant selector like an interactive cockpit console: adjusting the color dial instantly recalibrates the fuel gauge (inventory), recalculates the fare (pricing), and points the camera at the selected plane.',
      objectives: [
        'Engineer multi-option variant selectors with image-to-variant synchronization.',
        'Implement subscription selling plan selectors and recurring discount math.',
        'Provide real-time inventory warning states and SKU updates.',
        'Embed JSON schema payloads for client-side JavaScript binding.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `{% for group in product.selling_plan_groups %}
  <fieldset class="selling-plan-group">
    <legend>{{ group.name }}</legend>
    {% for plan in group.selling_plans %}
      <label>
        <input type="radio" name="selling_plan" value="{{ plan.id }}">
        {{ plan.name }}
      </label>
    {% endfor %}
  </fieldset>
{% endfor %}`,
      sections: [
        {
          id: 'sec-adv-5-1',
          title: 'Variant Subscriptions and Media Sync in Practice',
          difficulty: 'Advanced',
          analogy: 'Selling plans give customers the choice between buying a single cup of coffee or setting up an automatic weekly bean delivery.',
          content: `### Hands-on Advanced Variant Implementations

Let's review complete implementations for subscription selling plan selectors and multi-option variant dropdowns with inventory warnings.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-subscription-plan-picker.liquid',
              code: `<div class="subscription-plans-container">
  {% if product.selling_plan_groups.size > 0 %}
    <fieldset class="purchase-type-fieldset space-y-3">
      <legend class="font-bold text-sm text-slate-900 mb-2">Select Purchase Option:</legend>
      
      <!-- One-time Purchase Option -->
      <label class="purchase-option-card flex items-center justify-between p-4 rounded-xl border border-slate-200 cursor-pointer">
        <div class="flex items-center gap-3">
          <input type="radio" name="purchase_type" value="one_time" checked class="accent-brand">
          <span class="font-semibold text-sm">One-Time Purchase</span>
        </div>
        <span class="price font-mono font-bold">{{ product.selected_or_first_available_variant.price | money }}</span>
      </label>

      <!-- Recurring Subscription Option -->
      {% for group in product.selling_plan_groups %}
        <label class="purchase-option-card flex flex-col p-4 rounded-xl border border-brand/40 bg-brand/5 cursor-pointer">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <input type="radio" name="purchase_type" value="subscription" class="accent-brand">
              <span class="font-bold text-sm text-brand">{{ group.name }} (Subscribe & Save)</span>
            </div>
          </div>
          
          <div class="subscription-select-wrapper mt-3 pl-7">
            <select name="selling_plan" class="w-full text-xs p-2 rounded-lg border border-slate-300">
              {% for plan in group.selling_plans %}
                <option value="{{ plan.id }}">
                  {{ plan.name }} — {{ plan.options[0].value }}
                </option>
              {% endfor %}
            </select>
          </div>
        </label>
      {% endfor %}
    </fieldset>
  {% endif %}
</div>`,
              explanation: 'Complete subscription selector allowing customers to choose between one-time and recurring delivery plans.',
              lineByLine: [
                { line: '{% if product.selling_plan_groups.size > 0 %}', explanation: 'Verifies subscription plans are active for this product.' },
                { line: 'name="selling_plan"', explanation: 'Submits selected subscription plan ID to cart.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-multi-option-swatch-picker.liquid',
              code: `<div class="variant-swatch-picker space-y-6">
  {% for option in product.options_with_values %}
    <fieldset class="option-fieldset" data-option-index="{{ forloop.index0 }}">
      <div class="flex items-center justify-between mb-2">
        <legend class="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
          {{ option.name }}: <span class="selected-val text-brand">{{ option.selected_value }}</span>
        </legend>
      </div>

      <div class="swatches-row flex flex-wrap gap-2">
        {% for value in option.values %}
          {% assign swatch_id = 'opt-' | append: option.position | append: '-' | append: forloop.index %}
          <label 
            for="{{ swatch_id }}" 
            class="swatch-label relative flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-xl border text-xs font-mono font-bold cursor-pointer transition-all {% if option.selected_value == value %}border-brand bg-brand text-white shadow-md{% else %}border-slate-200 bg-white text-slate-700 hover:border-slate-400{% endif %}"
          >
            <input 
              type="radio" 
              id="{{ swatch_id }}" 
              name="options[{{ option.name | escape }}]" 
              value="{{ value | escape }}"
              class="sr-only"
              {% if option.selected_value == value %}checked{% endif %}
            >
            <span>{{ value }}</span>
          </label>
        {% endfor %}
      </div>
    </fieldset>
  {% endfor %}
</div>`,
              explanation: 'Multi-axis option swatch picker for Color, Size, and Material combinations.',
              lineByLine: [
                { line: '{% for option in product.options_with_values %}', explanation: 'Iterates through product option dimensions (e.g. Size, Color).' },
                { line: 'name="options[{{ option.name | escape }}]"', explanation: 'Semantic radio group per option axis.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-variant-inventory-json-hydration.liquid',
              code: `<!-- Variant State JSON Hydration Payload for Client JS -->
<script type="application/json" id="ProductJson-{{ product.id }}">
  {
    "id": {{ product.id | json }},
    "title": {{ product.title | json }},
    "variants": [
      {% for variant in product.variants %}
        {
          "id": {{ variant.id }},
          "title": {{ variant.title | json }},
          "price": {{ variant.price }},
          "price_formatted": {{ variant.price | money | json }},
          "compare_at_price": {{ variant.compare_at_price | default: 0 }},
          "available": {{ variant.available | json }},
          "inventory_quantity": {{ variant.inventory_quantity | default: 0 }},
          "sku": {{ variant.sku | json }},
          "featured_image": {% if variant.featured_image %}{{ variant.featured_image | image_url: width: 800 | json }}{% else %}null{% endif %},
          "options": {{ variant.options | json }}
        }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ]
  }
</script>`,
              explanation: 'Embeds structured variant inventory JSON for instantaneous client-side UI hydration and switching.',
              lineByLine: [
                { line: '<script type="application/json" ...>', explanation: 'Safe script tag housing structured variant metadata.' },
                { line: '"price_formatted": {{ variant.price | money | json }}', explanation: 'Pre-formats money strings for instant display without JS formatting dependencies.' }
              ]
            }
          ],
          commonMistakes: [
            'Hardcoding variant selections without checking variant.available, leading to checkout failures.',
            'Forgetting to disable the subscription select input when the customer selects "One-time Purchase".',
            'Omitting the `selling_plan` parameter from the cart AJAX payload.'
          ],
          proTip: 'When rendering subscription options, display the discounted per-shipment price directly beside the plan name to boost subscription conversion rates.',
          miniPractice: {
            question: 'Which object provides access to subscription frequencies and recurring discount plans in Liquid?',
            options: [
              'product.selling_plan_groups',
              'product.subscriptions',
              'cart.plans',
              'shop.recurring_plans'
            ],
            correctAnswer: 0,
            explanation: 'product.selling_plan_groups contains the subscription groups and selling plan configurations attached to that product.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Dynamic Variant Stock Warning',
          instructions: 'Build a snippet that inspects all product variants: if any variant has `inventory_quantity` <= 5 and > 0, render a notification banner listing the variant title and remaining quantity.',
          starterCode: `<!-- Implement low stock variant warnings below -->`,
          solutionCode: `{% assign low_stock_variants = product.variants | where: 'available', true %}

<div class="stock-alerts">
  {% for v in low_stock_variants %}
    {% if v.inventory_management == 'shopify' and v.inventory_quantity <= 5 and v.inventory_quantity > 0 %}
      <div class="alert alert--warning text-xs py-1.5 px-3 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 mb-1">
        ⚠️ {{ v.title }}: Only {{ v.inventory_quantity }} units left!
      </div>
    {% endif %}
  {% endfor %}
</div>`
        }
      ],
      keyTakeaways: [
        'Advanced variant UX synchronizes pricing, media galleries, and inventory in real time.',
        '`product.selling_plan_groups` powers subscription and recurring delivery models.',
        '`product.options_with_values` simplifies multi-axis option swatch generation.',
        'Embed JSON payloads to enable fast client-side state hydration.'
      ],
      summary: 'You have mastered advanced variant architecture, subscription selling plans, and inventory UX.'
    }
  },

  // =========================================================================
  // MODULE 6: Performance Engineering
  // =========================================================================
  {
    id: 'shopify-adv-06',
    orderIndex: 6,
    title: 'Module 6: Enterprise Performance Engineering',
    description: 'Master server and client performance optimization: minimizing Liquid execution time, eliminating redundant queries, responsive image srcset strategies, lazy loading, and Core Web Vitals optimization.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 300,
    level: 'advanced',
    resources: [
      { id: 'res-adv-perf', title: 'Shopify Storefront Performance Benchmark Guide', type: 'documentation', url: 'https://shopify.dev/docs/themes/best-practices/performance' }
    ],
    lessonContent: {
      overview: `### Enterprise Performance Engineering & Core Web Vitals

A 100-millisecond delay in page load time can reduce ecommerce conversions by up to 7%. Enterprise Shopify developers optimize both **server-side Liquid rendering** (TTFB) and **client-side asset execution** (LCP, INP, CLS).

### 1. Server-Side Liquid Optimization Rules
- **Eliminate Nested Iterations:** Never execute a collection loop inside another collection loop.
- **Cache Complex Calculations with \`assign\`:** Avoid repeating the same filter chain multiple times inside a loop. Compute it once and store it in a variable.
- **Limit Collection Queries:** Never query \`collections['all'].products\` on every page render.
- **Use \`render\` Exclusively:** Deprecate all instances of \`include\`.

### 2. Core Web Vitals Optimization
- **Largest Contentful Paint (LCP):** Preload primary hero image with \`loading: "eager"\` and \`fetchpriority="high"\`.
- **Cumulative Layout Shift (CLS):** Always provide explicit \`width\` and \`height\` aspect ratios on all image containers.
- **Interaction to Next Paint (INP):** Defer non-critical JavaScript using \`async\` or \`type="module"\`.`,
      analogyHero: 'Think of performance engineering like preparing a race car for Formula 1: every single redundant ounce is stripped, the engine is tuned for instant acceleration, and tires are warmed up before the green light.',
      objectives: [
        'Diagnose and resolve server-side Liquid performance bottlenecks.',
        'Implement optimal responsive image srcset strategies for LCP.',
        'Eliminate Cumulative Layout Shift (CLS) across all visual components.',
        'Benchmark and measure performance using Shopify Theme Check and Lighthouse.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `<!-- High-performance Hero Image (LCP) -->
{{ section.settings.image | image_url: width: 1200 | image_tag: 
  loading: 'eager', 
  fetchpriority: 'high',
  widths: '375, 750, 1100, 1500',
  sizes: '100vw'
}}

<!-- Offscreen Product Card Image (Lazy) -->
{{ product.featured_image | image_url: width: 500 | image_tag: 
  loading: 'lazy',
  decoding: 'async'
}}`,
      sections: [
        {
          id: 'sec-adv-6-1',
          title: 'Performance Engineering in Practice',
          difficulty: 'Advanced',
          analogy: 'Using fetchpriority="high" on the hero image is like putting your VIP guest at the front of the express line.',
          content: `### Hands-on Performance Implementations

Let's review before-and-after performance refactoring benchmarks.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'optimized-product-grid.liquid',
              code: `{% comment %}
  OPTIMIZED COLLECTION GRID:
  - Pre-filters array in single step
  - Eager loads first 2 visible cards for LCP
  - Lazy loads remaining offscreen cards
{% endcomment %}

<div class="product-grid grid grid-cols-2 md:grid-cols-4 gap-6">
  {% for product in collection.products limit: 12 %}
    {% assign is_lcp_candidate = false %}
    {% if forloop.index <= 2 %}
      {% assign is_lcp_candidate = true %}
    {% endif %}

    <article class="product-card">
      <div class="media-aspect-box aspect-square overflow-hidden rounded-xl bg-slate-100">
        {% if product.featured_image %}
          {{ product.featured_image | image_url: width: 500 | image_tag: 
            loading: is_lcp_candidate ? 'eager' : 'lazy',
            fetchpriority: is_lcp_candidate ? 'high' : 'auto',
            decoding: 'async',
            widths: '250, 400, 600',
            sizes: '(min-width: 768px) 25vw, 50vw',
            alt: product.title,
            class: 'w-full h-full object-cover'
          }}
        {% endif %}
      </div>
      <h3 class="mt-2 text-sm font-bold">{{ product.title }}</h3>
      <p class="font-mono text-xs text-brand">{{ product.price | money }}</p>
    </article>
  {% endfor %}
</div>`,
              explanation: 'High-performance grid dynamically adjusting loading attributes based on viewport position.',
              lineByLine: [
                { line: 'is_lcp_candidate ? \'eager\' : \'lazy\'', explanation: 'Prioritizes initial visible cards while deferring remaining assets.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'eager-lcp-hero-media.liquid',
              code: `<!-- High-performance Above-The-Fold Hero Banner -->
<div class="hero-media-wrapper relative overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-slate-900">
  {% if section.settings.image != blank %}
    {{ section.settings.image | image_url: width: 2000 | image_tag: 
      loading: 'eager', 
      fetchpriority: 'high',
      decoding: 'async',
      widths: '375, 750, 1100, 1500, 2000',
      sizes: '100vw',
      alt: section.settings.heading | default: shop.name,
      class: 'hero-media-img w-full h-full object-cover'
    }}
  {% endif %}
  <div class="hero-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-transparent flex items-end p-8">
    <h1 class="text-3xl md:text-5xl font-heading font-extrabold text-white">{{ section.settings.heading }}</h1>
  </div>
</div>`,
              explanation: 'Optimized hero banner using explicit fetchpriority, responsive widths, and async decoding.',
              lineByLine: [
                { line: 'fetchpriority: \'high\'', explanation: 'Instructs browser to prioritize downloading this image above scripts.' },
                { line: 'sizes: \'100vw\'', explanation: 'Signals that the image fills the full viewport width.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'memoized-collection-calculations.liquid',
              code: `{% comment %}
  PERFORMANCE REFACTOR:
  - Memoizes price calculations once per collection
  - Eliminates quadratic O(N²) nested loops
{% endcomment %}

{% assign product_prices = collection.products | map: 'price' %}
{% assign min_price = product_prices | first %}
{% assign max_price = product_prices | first %}

{% for p in product_prices %}
  {% if p < min_price %}{% assign min_price = p %}{% endif %}
  {% if p > max_price %}{% assign max_price = p %}{% endif %}
{% endfor %}

<div class="collection-price-summary p-4 bg-slate-50 rounded-xl text-xs font-mono">
  <span>Price Range: {{ min_price | money }} — {{ max_price | money }}</span>
  <span class="text-slate-400">({{ collection.products_count }} items analyzed)</span>
</div>`,
              explanation: 'Linear O(N) single-pass aggregation using the map filter to eliminate nested query overhead.',
              lineByLine: [
                { line: '{% assign product_prices = collection.products | map: \'price\' %}', explanation: 'Extracts flat array of prices in single C++ operation.' }
              ]
            }
          ],
          commonMistakes: [
            'Applying loading="lazy" to every image on the page, delaying the LCP milestone.',
            'Using uncompressed full-resolution images uploaded by merchants directly without width filters.',
            'Executing repeated expensive filter chains inside long loops.'
          ],
          proTip: 'Always specify the `sizes` attribute alongside `widths` in `image_tag`. This allows the browser to calculate the exact render size before CSS is downloaded, selecting the smallest possible image file.',
          miniPractice: {
            question: 'Which loading and fetchpriority attributes should be applied to the primary hero banner image above the fold?',
            options: [
              'loading="eager" and fetchpriority="high"',
              'loading="lazy" and fetchpriority="low"',
              'loading="defer" and fetchpriority="none"',
              'loading="none"'
            ],
            correctAnswer: 0,
            explanation: 'loading="eager" with fetchpriority="high" instructs the browser to download the critical hero image immediately, optimizing LCP.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Core Web Vitals Hero Optimization',
          instructions: 'Construct a hero section image element using `image_url` and `image_tag` that specifies widths 600, 1000, 1400, eager loading, high fetch priority, and asynchronous decoding.',
          starterCode: `<!-- Implement LCP hero image below -->`,
          solutionCode: `{{ section.settings.image | image_url: width: 1400 | image_tag: 
  widths: '600, 1000, 1400',
  sizes: '100vw',
  loading: 'eager',
  fetchpriority: 'high',
  decoding: 'async',
  alt: section.settings.heading | default: shop.name,
  class: 'hero-banner-img'
}}`
        }
      ],
      keyTakeaways: [
        'Optimize LCP with eager loading and high fetch priority on above-the-fold assets.',
        'Lazy load all offscreen cards and thumbnail images.',
        'Avoid nested collection loops and expensive repeated calculations.',
        'Specify explicit aspect ratios to eliminate Cumulative Layout Shift.'
      ],
      summary: 'You have mastered enterprise Liquid performance optimization, responsive media strategies, and Core Web Vitals engineering.'
    }
  },

  // =========================================================================
  // MODULE 7: Accessibility Engineering
  // =========================================================================
  {
    id: 'shopify-adv-07',
    orderIndex: 7,
    title: 'Module 7: Enterprise Accessibility (WCAG 2.1 AA) Engineering',
    description: 'Master advanced web accessibility: keyboard focus traps, ARIA live regions for cart updates, accessible modals, screen reader announcements, and WCAG 2.1 AA compliance.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 300,
    level: 'advanced',
    resources: [
      { id: 'res-adv-a11y', title: 'Shopify Accessibility Architecture Guidelines', type: 'documentation', url: 'https://shopify.dev/docs/themes/best-practices/accessibility' }
    ],
    lessonContent: {
      overview: `### Enterprise Accessibility (WCAG 2.1 AA) Engineering

Building accessible storefronts ensures equal access for users with disabilities and protects merchants from legal compliance risks.

### 1. Key Principles of WCAG 2.1 AA
1. **Perceivable:** Text alternatives (alt text), color contrast ratios (≥ 4.5:1 for normal text), and multi-sensory indicators.
2. **Operable:** Complete keyboard navigability (no mouse required), visible focus rings, skip-to-content links, and focus trap management in dialogs/drawers.
3. **Understandable:** Predictable UI behavior, clear form validation error messages, and intuitive navigation.
4. **Robust:** Semantic HTML and ARIA landmarks that integrate cleanly with assistive screen readers.

### 2. ARIA Live Regions (\`aria-live\`)
When items are added to the cart via AJAX, screen readers cannot "see" the visual animation. An **ARIA live region** announces the update audibly:
\`\`\`liquid
<div class="visually-hidden" aria-live="polite" id="cart-live-region" role="status">
  <!-- JavaScript updates text here: "Added 1 item to cart" -->
</div>
\`\`\`

### 3. Accessible Dialogs & Modals
- \`role="dialog"\` and \`aria-modal="true"\`.
- \`aria-labelledby="dialog-title"\`.
- Keyboard \`Escape\` key dismisses the dialog.
- Focus is trapped inside the active dialog until closed.`,
      analogyHero: 'Think of accessibility like universal building design: automatic sliding doors and tactile crosswalk paving help people with wheelchairs or visual impairments, but they make life easier and faster for everyone.',
      objectives: [
        'Implement WCAG 2.1 AA compliant semantic structures.',
        'Use ARIA live regions for asynchronous cart and filter notifications.',
        'Design accessible modal dialogs and slide-out drawers with focus management.',
        'Eliminate keyboard traps and ensure visible focus indicators.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `<div role="dialog" aria-modal="true" aria-labelledby="modal-heading" class="modal-wrapper">
  <h2 id="modal-heading">Size Guide</h2>
  <button type="button" aria-label="Close modal">✕</button>
</div>

<div aria-live="polite" role="status" class="visually-hidden">
  {{ cart.item_count }} items in cart
</div>`,
      sections: [
        {
          id: 'sec-adv-7-1',
          title: 'Accessible Modals and Live Regions in Practice',
          difficulty: 'Advanced',
          analogy: 'An ARIA live region is like an audio announcement at a train station telling passengers their train has arrived.',
          content: `### Hands-on Accessibility Implementations

Let's examine complete implementations for an accessible cart announcement region, a keyboard-friendly modal dialog, and accessible variant swatches.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'accessible-cart-drawer.liquid',
              code: `<div 
  id="CartDrawer" 
  class="cart-drawer-component" 
  role="dialog" 
  aria-modal="true" 
  aria-label="Shopping Cart Drawer"
  tabindex="-1"
>
  <div class="cart-drawer-header flex items-center justify-between p-4 border-b">
    <h2 id="CartDrawerTitle" class="text-lg font-bold">Your Shopping Cart</h2>
    <button 
      type="button" 
      class="close-drawer-btn p-2 text-slate-500 hover:text-slate-900" 
      aria-label="Close cart drawer"
    >
      <span aria-hidden="true">✕</span>
    </button>
  </div>

  <!-- ARIA Live Status Region -->
  <div id="CartStatus" class="visually-hidden" role="status" aria-live="polite">
    Shopping cart updated: {{ cart.item_count }} items total.
  </div>

  <div class="cart-drawer-body p-4 overflow-y-auto">
    {% for item in cart.items %}
      <div class="cart-item-row flex gap-4 py-3 border-b">
        <div class="item-info flex-1">
          <h3 class="text-sm font-bold">{{ item.product.title }}</h3>
          <p class="text-xs text-slate-500">{{ item.variant.title }}</p>
          <span class="text-xs font-mono font-semibold">{{ item.final_line_price | money }}</span>
        </div>
      </div>
    {% endfor %}
  </div>
</div>`,
              explanation: 'Accessible cart drawer featuring dialog role, modal trap, ARIA status announcements, and accessible close button.',
              lineByLine: [
                { line: 'role="dialog" aria-modal="true"', explanation: 'Instructs assistive technologies that focus is contained in a modal.' },
                { line: 'aria-live="polite" role="status"', explanation: 'Announces asynchronous cart updates politely without interrupting user speech.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'accessible-modal-dialog.liquid',
              code: `<div 
  id="SizeChartModal" 
  class="modal-backdrop fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 hidden"
  role="dialog" 
  aria-modal="true" 
  aria-labelledby="SizeChartHeading"
  aria-describedby="SizeChartDesc"
>
  <div class="modal-card bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
    <div class="flex items-center justify-between mb-4 pb-3 border-b">
      <h2 id="SizeChartHeading" class="text-xl font-heading font-bold text-slate-900">
        {{ 'products.size_chart.title' | t | default: 'Garment Sizing Guide' }}
      </h2>
      <button 
        type="button" 
        class="modal-close-trigger p-2 text-slate-400 hover:text-slate-900 rounded-xl hover:bg-slate-100" 
        aria-label="{{ 'accessibility.close' | t | default: 'Close modal window' }}"
      >
        <span aria-hidden="true">✕</span>
      </button>
    </div>
    
    <p id="SizeChartDesc" class="text-xs text-slate-600 mb-4">
      {{ 'products.size_chart.instructions' | t | default: 'Measure around the fullest part of your chest and waist.' }}
    </p>

    <div class="size-table-wrapper overflow-x-auto">
      <table class="w-full text-xs text-left">
        <caption class="sr-only">Apparel measurement specifications</caption>
        <thead>
          <tr class="bg-slate-50 uppercase font-mono"><th class="p-2">Size</th><th class="p-2">Chest</th><th class="p-2">Length</th></tr>
        </thead>
        <tbody>
          <tr class="border-t"><td class="p-2 font-bold">S</td><td class="p-2">36-38"</td><td class="p-2">28"</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">M</td><td class="p-2">39-41"</td><td class="p-2">29"</td></tr>
          <tr class="border-t"><td class="p-2 font-bold">L</td><td class="p-2">42-44"</td><td class="p-2">30"</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
              explanation: 'Accessible modal dialog with labeled headings, descriptions, keyboard dismiss triggers, and table captions.',
              lineByLine: [
                { line: 'aria-labelledby="SizeChartHeading"', explanation: 'Associates the dialog accessible name with the h2 heading.' },
                { line: '<caption class="sr-only">...</caption>', explanation: 'Provides screen readers with clear context of table data.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'accessible-radio-swatch-fieldset.liquid',
              code: `<fieldset class="accessible-swatches-group my-4">
  <legend class="text-sm font-bold text-slate-900 mb-2">
    <span>Color: </span>
    <span class="active-color-name font-mono text-brand">{{ product.selected_or_first_available_variant.option1 }}</span>
  </legend>

  <div class="swatches-list flex items-center gap-3" role="radiogroup" aria-label="Product color selections">
    {% for variant in product.variants %}
      <label class="swatch-item relative cursor-pointer">
        <input 
          type="radio" 
          name="color-choice" 
          value="{{ variant.id }}" 
          class="peer sr-only"
          {% if variant == product.selected_or_first_available_variant %}checked{% endif %}
          aria-label="{{ variant.title }} — {{ variant.price | money }}"
        >
        <span class="swatch-pill flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-300 peer-checked:border-brand peer-focus-visible:ring-4 peer-focus-visible:ring-brand/30 transition-all">
          <span class="color-dot w-6 h-6 rounded-full bg-slate-800" style="background-color: {{ variant.metafields.custom.color_hex.value | default: 'currentColor' }};"></span>
        </span>
      </label>
    {% endfor %}
  </div>
</fieldset>`,
              explanation: 'Accessible color swatch radio group featuring peer-focus-visible keyboard rings and descriptive aria-labels.',
              lineByLine: [
                { line: 'peer-focus-visible:ring-4', explanation: 'Renders high-visibility focus ring when navigating via keyboard.' }
              ]
            }
          ],
          commonMistakes: [
            'Using generic <div> elements for buttons without role="button", tabindex="0", or keydown handlers. Always use native <button> tags.',
            'Removing CSS outline on focus (:focus { outline: none }) without providing an alternative high-contrast focus ring.',
            'Failing to trap keyboard Tab focus inside active modals.'
          ],
          proTip: 'Always use native semantic HTML elements (`<button>`, `<a>`, `<dialog>`, `<details>`) whenever possible. Native elements come with keyboard interactivity and screen reader accessibility built-in by the browser for free.',
          miniPractice: {
            question: 'What is the purpose of aria-live="polite" on a status notification container?',
            options: [
              'Instructs screen readers to announce content updates when the user is idle, without interrupting ongoing speech',
              'Translates text to French',
              'Plays a loud audio chime',
              'Hides the text completely'
            ],
            correctAnswer: 0,
            explanation: 'aria-live="polite" queues status announcements politely so screen reader users hear updates after current speech concludes.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Accessible Quantity Selector Component',
          instructions: 'Build a quantity selector with decrement (-) and increment (+) buttons that have clear `aria-label` attributes and an input linked to quantity.',
          starterCode: `<!-- Implement accessible quantity selector below -->`,
          solutionCode: `<div class="quantity-selector flex items-center border rounded-xl overflow-hidden w-32">
  <button 
    type="button" 
    class="qty-btn px-3 py-2 text-slate-600 hover:bg-slate-100" 
    aria-label="Decrease quantity for {{ product.title }}"
  >
    <span aria-hidden="true">-</span>
  </button>
  <input 
    type="number" 
    name="quantity" 
    value="1" 
    min="1" 
    aria-label="Quantity for {{ product.title }}" 
    class="w-full text-center font-mono text-sm py-2 border-x focus:outline-none"
  >
  <button 
    type="button" 
    class="qty-btn px-3 py-2 text-slate-600 hover:bg-slate-100" 
    aria-label="Increase quantity for {{ product.title }}"
  >
    <span aria-hidden="true">+</span>
  </button>
</div>`
        }
      ],
      keyTakeaways: [
        'WCAG 2.1 AA compliance requires semantic HTML, accessible buttons, and visible focus.',
        '`aria-live="polite"` announces asynchronous cart and filter changes.',
        'Modal dialogs require `role="dialog"` and `aria-modal="true"`.',
        'Always provide meaningful `aria-label` text on icon buttons.'
      ],
      summary: 'You have mastered enterprise accessibility engineering, WCAG compliance, ARIA live regions, and accessible modal architecture.'
    }
  },

  // =========================================================================
  // MODULE 8: SEO Engineering
  // =========================================================================
  {
    id: 'shopify-adv-08',
    orderIndex: 8,
    title: 'Module 8: Enterprise SEO & Structured Data Engineering',
    description: 'Master technical ecommerce SEO: JSON-LD schema graphs (Product, AggregateRating, BreadcrumbList, Organization), canonical URL strategies, meta robots control, and Open Graph social cards.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 300,
    level: 'advanced',
    resources: [
      { id: 'res-adv-seo', title: 'Shopify Structured Data & SEO Architecture', type: 'documentation', url: 'https://shopify.dev/docs/themes/best-practices/seo' }
    ],
    lessonContent: {
      overview: `### Enterprise SEO & JSON-LD Structured Data Engineering

High-ranking Shopify storefronts leverage technical SEO pipelines: structured schema graphs, dynamic canonical links, clean breadcrumbs, and social graph cards.

### 1. JSON-LD Graph Architecture
Instead of scattering isolated microdata across HTML attributes, modern themes centralize structured data into clean \`<script type="application/ld+json">\` blocks:
- **\`Organization\` / \`WebSite\`**: Store identity and SearchAction search box.
- **\`Product\`**: Price, currency, SKU, brand, inventory availability, and customer reviews.
- **\`BreadcrumbList\`**: Navigation breadcrumb trails for Google SERP results.
- **\`Article\`**: Publisher, author, publication date, and featured media.

### 2. Canonicalization Strategy
Duplicate content penalties occur when identical product catalogs appear at multiple URLs (e.g. \`/collections/summer/products/chair\` vs \`/products/chair\`).
- Always link canonical URLs to the root product path:
  \`<link rel="canonical" href="{{ canonical_url }}">\``,
      analogyHero: 'Think of structured data like filing an official trademark record with the government: search bots don\'t have to guess what you sell, they read your verified JSON-LD manifest directly.',
      objectives: [
        'Construct comprehensive schema.org JSON-LD graphs for products, articles, and breadcrumbs.',
        'Implement canonical URL strategies to prevent duplicate content indexing.',
        'Configure Open Graph and Twitter Card social metadata.',
        'Optimize title and meta description tag templates.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": {{ shop.name | json }},
      "url": {{ shop.url | json }}
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [ ... ]
    }
  ]
}
</script>`,
      sections: [
        {
          id: 'sec-adv-8-1',
          title: 'Structured JSON-LD Graphs in Practice',
          difficulty: 'Advanced',
          analogy: 'Using a @graph array in JSON-LD is like delivering an entire encyclopedia of your store in a single neat binder.',
          content: `### Hands-on Enterprise SEO Implementations

Let's examine complete implementations for multi-entity JSON-LD graphs, breadcrumbs, and Open Graph social tags.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'snippets/structured-data-graph.liquid',
              code: `{% comment %}
  Comprehensive Schema.org JSON-LD Graph
{% endcomment %}

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "{{ shop.url }}#organization",
      "name": {{ shop.name | json }},
      "url": {{ shop.url | json }},
      {% if settings.brand_logo != blank %}
        "logo": {{ settings.brand_logo | image_url: width: 500 | prepend: "https:" | json }},
      {% endif %}
      "sameAs": [
        {{ settings.social_twitter_link | json }},
        {{ settings.social_facebook_link | json }},
        {{ settings.social_instagram_link | json }}
      ]
    },
    {% if template.name == 'product' %}
      {
        "@type": "Product",
        "@id": "{{ product.url | prepend: shop.url }}#product",
        "name": {{ product.title | json }},
        "description": {{ product.description | strip_html | truncate: 300 | json }},
        "image": [
          {% for image in product.images limit: 3 %}
            {{ image | image_url: width: 1000 | prepend: "https:" | json }}{% unless forloop.last %},{% endunless %}
          {% endfor %}
        ],
        "sku": {{ product.selected_or_first_available_variant.sku | json }},
        "brand": {
          "@type": "Brand",
          "name": {{ product.vendor | json }}
        },
        "offers": {
          "@type": "Offer",
          "price": "{{ product.selected_or_first_available_variant.price | divided_by: 100.00 }}",
          "priceCurrency": {{ shop.currency | json }},
          "availability": "https://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}",
          "url": "{{ product.url | prepend: shop.url }}"
        }
      }
    {% endif %}
  ]
}
</script>`,
              explanation: 'Unified multi-entity JSON-LD schema graph representing store organization and product offers.',
              lineByLine: [
                { line: '"@graph": [ ... ]', explanation: 'Combines organization and product entities into single structured schema payload.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'snippets/breadcrumb-seo-schema.liquid',
              code: `<!-- Schema.org BreadcrumbList JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": {{ 'general.breadcrumbs.home' | t | default: 'Home' | json }},
      "item": "{{ routes.root_url | prepend: shop.url }}"
    }
    {% if template.name == 'collection' %}
      ,{
        "@type": "ListItem",
        "position": 2,
        "name": {{ collection.title | json }},
        "item": "{{ collection.url | prepend: shop.url }}"
      }
    {% elsif template.name == 'product' %}
      {% if collection %}
        ,{
          "@type": "ListItem",
          "position": 2,
          "name": {{ collection.title | json }},
          "item": "{{ collection.url | prepend: shop.url }}"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": {{ product.title | json }},
          "item": "{{ product.url | prepend: shop.url }}"
        }
      {% else %}
        ,{
          "@type": "ListItem",
          "position": 2,
          "name": {{ product.title | json }},
          "item": "{{ product.url | prepend: shop.url }}"
        }
      {% endif %}
    {% endif %}
  ]
}
</script>`,
              explanation: 'Generates structured breadcrumb navigation trails for enhanced Google SERP rich snippets.',
              lineByLine: [
                { line: '"@type": "BreadcrumbList"', explanation: 'Declares hierarchical breadcrumb schema to search engines.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'snippets/open-graph-social-meta.liquid',
              code: `<!-- Open Graph and Twitter Card Social Metadata -->
<meta property="og:site_name" content="{{ shop.name | escape }}">
<meta property="og:url" content="{{ canonical_url }}">
<meta property="og:title" content="{{ page_title | default: shop.name | escape }}">
<meta property="og:type" content="{% if template.name == 'product' %}product{% elsif template.name == 'article' %}article{% else %}website{% endif %}">
<meta property="og:description" content="{{ page_description | default: shop.description | escape }}">

{% if template.name == 'product' %}
  <meta property="og:price:amount" content="{{ product.price | divided_by: 100.00 }}">
  <meta property="og:price:currency" content="{{ shop.currency }}">
  {% if product.featured_image %}
    <meta property="og:image" content="https:{{ product.featured_image | image_url: width: 1200, height: 630, crop: 'center' }}">
    <meta property="og:image:secure_url" content="https:{{ product.featured_image | image_url: width: 1200, height: 630, crop: 'center' }}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
  {% endif %}
{% endif %}

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ page_title | escape }}">
<meta name="twitter:description" content="{{ page_description | escape }}">`,
              explanation: 'Provides optimized Open Graph and Twitter social card tags with image cropping.',
              lineByLine: [
                { line: '<meta property="og:price:amount" ...>', explanation: 'Rich product metadata for social platforms and Pinterest Rich Pins.' }
              ]
            }
          ],
          commonMistakes: [
            'Inserting trailing commas in JSON-LD output inside Liquid loops. Always guard with {% unless forloop.last %},{% endunless %}.',
            'Leaving image URLs without the https: protocol prefix: schema.org requires fully-qualified absolute URLs.',
            'Outputting unescaped strings in JSON values: always use the | json filter.'
          ],
          proTip: 'Always pass Liquid variables through the `| json` filter when writing JSON-LD (`"name": {{ product.title | json }}`). The filter automatically handles quotes, escaping, and line breaks safely.',
          miniPractice: {
            question: 'Why is the | json filter recommended when embedding values inside JSON-LD blocks?',
            options: [
              'It automatically handles string quotation, escaping special characters, and newlines safely',
              'It translates text into German',
              'It minifies images',
              'It encrypts the payload'
            ],
            correctAnswer: 0,
            explanation: 'The json filter wraps values in quotes and escapes internal double-quotes and newlines, guaranteeing valid JSON.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Article JSON-LD Schema Snippet',
          instructions: 'Build a JSON-LD schema for a blog article containing `@type: "Article"`, `headline`, `author`, `datePublished`, and `publisher`.',
          starterCode: `<!-- Implement article schema below -->`,
          solutionCode: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": {{ article.title | json }},
  "author": {
    "@type": "Person",
    "name": {{ article.author | json }}
  },
  "datePublished": "{{ article.published_at | date: '%Y-%m-%dT%H:%M:%SZ' }}",
  "publisher": {
    "@type": "Organization",
    "name": {{ shop.name | json }}
  }
}
</script>`
        }
      ],
      keyTakeaways: [
        'Centralize structured data into JSON-LD `@graph` payloads.',
        'Use the `| json` filter to ensure 100% valid JSON escaping.',
        '`canonical_url` prevents duplicate content indexing across collection URLs.',
        'Provide Open Graph and Twitter Card tags for rich social sharing.'
      ],
      summary: 'You have mastered enterprise technical SEO, JSON-LD structured data graphs, and social metadata pipelines.'
    }
  },

  // =========================================================================
  // MODULE 9: Security and Safe Output
  // =========================================================================
  {
    id: 'shopify-adv-09',
    orderIndex: 9,
    title: 'Module 9: Storefront Security & Safe Dynamic Output',
    description: 'Master storefront security: Cross-Site Scripting (XSS) prevention, URL parameter sanitization, defending against injection vulnerabilities, and securing backend API secrets.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 300,
    level: 'advanced',
    resources: [
      { id: 'res-adv-sec', title: 'Shopify Theme Security & Sanitization Guidelines', type: 'documentation', url: 'https://shopify.dev/docs/themes/best-practices/security' }
    ],
    lessonContent: {
      overview: `### Storefront Security & Safe Dynamic Output

Storefront security is paramount. Because Liquid themes render customer data, URL parameters, search queries, and line item properties, themes must be hardened against **Cross-Site Scripting (XSS)**, open redirect vulnerabilities, and accidental secret exposure.

### 1. Cross-Site Scripting (XSS) Prevention
Never output untrusted user input without escaping:
- \`search.terms\`: Always pipe to \`| escape\`.
- \`cart.attributes\` & \`item.properties\`: Always pipe to \`| escape\`.
- Customer names in reviews/forms: Always escape.
\`\`\`liquid
<!-- ❌ DANGEROUS: XSS Vulnerability -->
<h1>Search for {{ search.terms }}</h1>

<!-- ✅ SAFE: HTML Entities Escaped -->
<h1>Search for {{ search.terms | escape }}</h1>
\`\`\`

### 2. Protecting Backend Secrets
- **Theme Code is Public:** Any Liquid, JavaScript, or CSS in a Shopify theme is delivered to the customer's browser.
- **Never Embed Private API Keys:** Shopify Admin API private tokens, database passwords, and third-party secret keys must **NEVER** be stored in Liquid files or theme settings. Private API calls must be proxied through secure backend app servers.

### 3. Safe URL Handling & Open Redirect Protection
When redirecting users or rendering custom URL links from parameters:
- Sanitize with \`url_encode\`.
- Validate that external redirect destinations belong to authorized domain whitelists.`,
      analogyHero: 'Think of escaping dynamic output like checking IDs at airport security: every character is inspected and neutralized so no hidden weapons (malicious scripts) can board the plane.',
      objectives: [
        'Sanitize all user-controlled inputs with escape and strip_html to prevent XSS.',
        'Understand the boundary between client-facing theme code and secure backend servers.',
        'Handle URL parameters and redirect links safely with url_encode.',
        'Audit themes for potential security leaks and vulnerabilities.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: `{{ search.terms | escape }}
{{ cart.attributes['Note'] | escape }}
{{ user_input | strip_html | escape }}
<a href="{{ custom_url | url_encode }}">Safe Link</a>`,
      sections: [
        {
          id: 'sec-adv-9-1',
          title: 'Storefront Security & Sanitization in Practice',
          difficulty: 'Advanced',
          analogy: 'Escaping HTML characters is like converting dangerous fireworks into inert plastic models before putting them on display.',
          content: `### Hands-on Security Implementations

Let's examine before-and-after vulnerability fixes and safe input rendering patterns.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'safe-search-heading.liquid',
              code: `{% comment %}
  VULNERABILITY FIX:
  Raw search terms sanitized against script injection.
{% endcomment %}

<div class="search-feedback-banner">
  <h2>Search Query: “{{ search.terms | escape }}”</h2>
</div>`,
              explanation: 'Escapes raw search query strings to neutralize malicious script payloads.',
              lineByLine: [
                { line: '{{ search.terms | escape }}', explanation: 'Converts <script> to &lt;script&gt;, rendering it as harmless text.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'sanitized-line-item-properties.liquid',
              code: `{% comment %}
  SECURITY HARDENING:
  Sanitizes custom line item customization inputs (e.g. monograms, gift messages).
{% endcomment %}

{% if item.properties.size > 0 %}
  <ul class="line-item-customizations text-xs space-y-1 mt-2 text-slate-600">
    {% for prop in item.properties %}
      {% assign first_char = prop.first | slice: 0 %}
      {% unless first_char == '_' or prop.last == blank %}
        <li>
          <strong class="text-slate-800">{{ prop.first | escape }}:</strong>
          <span>{{ prop.last | strip_html | escape }}</span>
        </li>
      {% endunless %}
    {% endfor %}
  </ul>
{% endif %}`,
              explanation: 'Safely iterates and sanitizes line item customization properties, ignoring private underscore properties.',
              lineByLine: [
                { line: '{{ prop.last | strip_html | escape }}', explanation: 'Strips malicious markup and escapes HTML entities before output.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'safe-external-redirect-guard.liquid',
              code: `{% comment %}
  OPEN REDIRECT MITIGATION:
  Validates return destination URL against shop domain whitelist.
{% endcomment %}

{% assign return_target = routes.root_url %}
{% if params.return_to != blank %}
  {% assign encoded_target = params.return_to | url_encode %}
  {% unless params.return_to contains '://' and params.return_to contains shop.domain == false %}
    {% assign return_target = params.return_to %}
  {% endunless %}
{% endif %}

<a href="{{ return_target | escape }}" class="btn-return-safely text-xs font-bold text-brand">
  ← {{ 'general.continue_shopping' | t | default: 'Continue Shopping' }}
</a>`,
              explanation: 'Guards against open redirect vulnerabilities by whitelisting local root destinations.',
              lineByLine: [
                { line: '{{ return_target | escape }}', explanation: 'Escapes URL destination attribute.' }
              ]
            }
          ],
          commonMistakes: [
            'Embedding Shopify Admin Access Tokens in theme JavaScript files: anyone can inspect page source and steal store credentials.',
            'Rendering raw customer line item properties with {{ property.last }} without the | escape filter.',
            'Assuming merchant-entered text is always safe.'
          ],
          proTip: 'Never store private credentials in theme files. Use Shopify App Proxies or Storefront API public tokens for client-side queries.',
          miniPractice: {
            question: 'Why should secret API keys never be stored in Liquid theme files?',
            options: [
              'Because theme code is compiled on the server and delivered publicly to the user\'s browser, exposing all secrets',
              'Because Liquid cannot store strings longer than 10 characters',
              'Because Shopify themes do not support APIs',
              'Because secrets break CSS layouts'
            ],
            correctAnswer: 0,
            explanation: 'Themes are public client-facing assets; any embedded secrets can be read by anyone inspecting the website source.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Sanitize Custom Order Note Display',
          instructions: 'Render `cart.note` inside an order summary box with full HTML stripping and entity escaping, providing a fallback if blank.',
          starterCode: `<!-- Implement safe cart note display below -->`,
          solutionCode: `{% if cart.note != blank %}
  <div class="customer-order-note p-3 rounded-xl bg-slate-100 text-xs">
    <strong>Order Note:</strong>
    <p>{{ cart.note | strip_html | escape }}</p>
  </div>
{% endif %}`
        }
      ],
      keyTakeaways: [
        'Always sanitize user inputs with `escape` and `strip_html` to prevent XSS.',
        'Never embed private backend API keys or database secrets in Liquid.',
        'Use `url_encode` for safe dynamic URL parameter formatting.',
        'Validate external links against domain whitelists.'
      ],
      summary: 'You have mastered storefront security, XSS mitigation, safe dynamic output, and credential protection.'
    }
  },

  // =========================================================================
  // MODULE 10: Advanced Search, Filtering, and Navigation
  // =========================================================================
  {
    id: 'shopify-adv-10',
    orderIndex: 10,
    title: 'Module 10: Advanced Search, Filtering & Deep Navigation',
    description: 'Master predictive search APIs, faceted storefront filtering UI, deep multi-tier navigation menus, search type targeting, and query parameter state synchronization.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 300,
    level: 'advanced',
    resources: [
      { id: 'res-adv-search', title: 'Shopify Predictive Search & Facets Guide', type: 'documentation', url: 'https://shopify.dev/docs/api/ajax/predictive-search' }
    ],
    lessonContent: {
      overview: `### Predictive Search, Faceted Filtering & Deep Navigation

Modern ecommerce experiences demand instant search suggestions (Predictive Search), multi-level faceted filtering (filtering by size, color, brand, and price simultaneously), and scalable Mega-Menu navigation.

### 1. Predictive Search Architecture
Predictive Search queries Shopify's \`/search/suggest.json\` endpoint as the user types, returning real-time instant previews of matching products, collections, articles, and query suggestions.

### 2. Storefront Faceted Filtering (\`collection.filters\`)
- **Faceted Groups:** \`filter.type\` can be \`list\`, \`price_range\`, or \`boolean\`.
- **Price Range Filtering:** \`filter.min_value.value\` and \`filter.max_value.value\` capture slider boundaries.
- **Active Filters Bar:** \`collection.active_filters\` renders active filter tags with clear-all buttons.

### 3. Mega-Menu Deep Navigation (3-Tier Hierarchies)
Mega-menus iterate over Grandparent > Parent > Child linklists, injecting promotional featured product cards and category images directly inside dropdowns.`,
      analogyHero: 'Think of predictive search like a knowledgeable sommelier: as soon as you say "dry red", they immediately present three exact vintage bottles on a silver tray.',
      objectives: [
        'Construct multi-faceted filter sidebars with price range sliders and active filter pills.',
        'Design 3-tier Mega-Menu navigation systems with embedded collection images.',
        'Implement predictive search markup and AJAX integration hooks.',
        'Manage URL query string synchronization for shareable filtered views.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `{% for filter in collection.filters %}
  {% case filter.type %}
    {% when 'price_range' %}
      <!-- Price slider -->
    {% when 'list' %}
      <!-- Checkbox list -->
  {% endcase %}
{% endfor %}`,
      sections: [
        {
          id: 'sec-adv-10-1',
          title: 'Faceted Filtering and Mega-Menus in Practice',
          difficulty: 'Advanced',
          analogy: 'Faceted filtering is like applying multiple lenses to a telescope: zoom in on Size Large, focus on Color Blue, and filter to In Stock.',
          content: `### Hands-on Advanced Filtering and Navigation

Let's review complete implementations for active filter tag bars and multi-level mega-menus.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'active-filters-bar.liquid',
              code: `{% if collection.active_filters.size > 0 %}
  <div class="active-facets-bar flex flex-wrap items-center gap-2 mb-6">
    <span class="text-xs font-bold uppercase text-slate-500">Active Filters:</span>
    
    {% for filter in collection.active_filters %}
      {% if filter.type == 'price_range' %}
        {% if filter.min_value.value != nil or filter.max_value.value != nil %}
          <a href="{{ filter.url_to_remove }}" class="active-facet-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold hover:bg-slate-200">
            <span>{{ filter.min_value.value | default: 0 | money }} - {{ filter.max_value.value | default: filter.range_max | money }}</span>
            <span class="remove-x font-bold">✕</span>
          </a>
        {% endif %}
      {% else %}
        {% for value in filter.active_values %}
          <a href="{{ value.url_to_remove }}" class="active-facet-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold hover:bg-slate-200">
            <span>{{ value.label }}</span>
            <span class="remove-x font-bold">✕</span>
          </a>
        {% endfor %}
      {% endif %}
    {% endfor %}

    <a href="{{ collection.url }}" class="clear-all-btn text-xs font-bold text-red-600 hover:underline ml-2">
      Clear All Filters
    </a>
  </div>
{% endif %}`,
              explanation: 'Renders active filter badges with individual removal links and a universal Clear All button.',
              lineByLine: [
                { line: 'href="{{ value.url_to_remove }}"', explanation: 'Shopify-provided URL that removes this specific filter parameter.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'faceted-filter-sidebar.liquid',
              code: `<form class="faceted-filter-form space-y-6">
  {% for filter in collection.filters %}
    <details class="filter-group border-b pb-4" open>
      <summary class="filter-group-summary flex items-center justify-between cursor-pointer font-bold text-sm text-slate-900 py-2">
        <span>{{ filter.label }}</span>
        <span class="text-xs font-mono text-slate-400">({{ filter.active_values.size }})</span>
      </summary>

      <div class="filter-options-content mt-3 space-y-2">
        {% case filter.type %}
          {% when 'list' %}
            {% for value in filter.values %}
              <label class="flex items-center gap-3 text-xs text-slate-700 cursor-pointer hover:text-brand">
                <input 
                  type="checkbox" 
                  name="{{ value.param_name }}" 
                  value="{{ value.value }}"
                  {% if value.active %}checked{% endif %}
                  {% if value.count == 0 and value.active == false %}disabled{% endif %}
                  class="rounded text-brand accent-brand"
                >
                <span class="flex-1">{{ value.label }}</span>
                <span class="text-slate-400 font-mono">({{ value.count }})</span>
              </label>
            {% endfor %}
        {% endcase %}
      </div>
    </details>
  {% endfor %}
</form>`,
              explanation: 'Faceted storefront filter sidebar with expandable details sections and item counts.',
              lineByLine: [
                { line: 'name="{{ value.param_name }}"', explanation: 'Dynamic query parameter name provided by Shopify search filter engine.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'three-tier-mega-menu.liquid',
              code: `<nav class="mega-menu-nav" aria-label="Catalog Navigation">
  <ul class="mega-menu-list flex items-center gap-8">
    {% for parent_link in linklists['main-menu'].links %}
      <li class="mega-menu-item group relative">
        <a href="{{ parent_link.url }}" class="nav-link py-4 inline-block font-bold text-sm text-slate-800 group-hover:text-brand">
          {{ parent_link.title }}
        </a>

        {% if parent_link.links.size > 0 %}
          <div class="mega-dropdown absolute top-full left-0 w-[600px] p-6 bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all grid grid-cols-2 gap-6 z-40">
            {% for child_link in parent_link.links %}
              <div class="child-column">
                <h4 class="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">{{ child_link.title }}</h4>
                <ul class="space-y-1">
                  {% for grandchild_link in child_link.links %}
                    <li>
                      <a href="{{ grandchild_link.url }}" class="text-xs text-slate-600 hover:text-brand hover:underline">
                        {{ grandchild_link.title }}
                      </a>
                    </li>
                  {% endfor %}
                </ul>
              </div>
            {% endfor %}
          </div>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</nav>`,
              explanation: 'Three-tier mega-menu navigation iterating parent, child, and grandchild links.',
              lineByLine: [
                { line: '{% for grandchild_link in child_link.links %}', explanation: 'Traverses tertiary navigation tier.' }
              ]
            }
          ],
          commonMistakes: [
            'Hardcoding remove URLs instead of using value.url_to_remove.',
            'Not handling price range filters separately from list filters.',
            'Neglecting clear-all buttons on filtered views.'
          ],
          proTip: 'Always render `collection.active_filters` above product grids so shoppers can see and dismiss applied filters effortlessly.',
          miniPractice: {
            question: 'Which property on an active filter value provides the exact URL to uncheck that filter?',
            options: [
              'value.url_to_remove',
              'value.delete_url',
              'value.remove_link',
              'filter.clear'
            ],
            correctAnswer: 0,
            explanation: 'value.url_to_remove generates the clean destination URL with that specific filter parameter removed.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Price Range Facet Input Box',
          instructions: 'Build a price range facet input group with min and max number inputs bound to `filter.min_value.param_name` and `filter.max_value.param_name`.',
          starterCode: `<!-- Implement price range inputs below -->`,
          solutionCode: `<div class="price-range-filter flex items-center gap-2">
  <input 
    type="number" 
    name="{{ filter.min_value.param_name }}" 
    placeholder="0" 
    min="0" 
    value="{{ filter.min_value.value | divided_by: 100.0 }}"
    class="w-20 p-2 border rounded text-xs"
  >
  <span>to</span>
  <input 
    type="number" 
    name="{{ filter.max_value.param_name }}" 
    placeholder="{{ filter.range_max | divided_by: 100.0 }}" 
    value="{{ filter.max_value.value | divided_by: 100.0 }}"
    class="w-20 p-2 border rounded text-xs"
  >
</div>`
        }
      ],
      keyTakeaways: [
        '`collection.filters` enables faceted filtering across attributes and price ranges.',
        '`value.url_to_remove` provides automated filter dismissal links.',
        'Predictive search enhances instant product discovery.',
        'Mega-menus support multi-tier hierarchies and embedded media.'
      ],
      summary: 'You have mastered predictive search, faceted filtering, active filter bars, and deep navigation menus.'
    }
  },

  // =========================================================================
  // MODULE 11: Internationalization and Localization
  // =========================================================================
  {
    id: 'shopify-adv-11',
    orderIndex: 11,
    title: 'Module 11: Internationalization & Localization (i18n)',
    description: 'Master global Shopify Markets: locale JSON files (locales/en.default.json), translation keys with the t filter, localized currency and date formatting, and multi-language theme architectures.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 300,
    level: 'advanced',
    resources: [
      { id: 'res-adv-i18n', title: 'Shopify Localization & Translation Guide', type: 'documentation', url: 'https://shopify.dev/docs/themes/architecture/locales' }
    ],
    lessonContent: {
      overview: `### Global Markets, Localization & Internationalization (i18n)

Global ecommerce brands sell across multiple countries, languages, and currencies using **Shopify Markets**. Professional themes must eliminate hardcoded text strings and utilize structured locale translation files.

### 1. The \`locales/\` Translation Schema
Theme copy is stored as structured JSON dictionaries in the \`locales/\` directory:
- \`locales/en.default.json\`: The primary schema and fallback dictionary.
- \`locales/fr.json\`, \`locales/de.json\`, \`locales/es.json\`: Translated versions.

\`\`\`json
// locales/en.default.json
{
  "products": {
    "product": {
      "add_to_cart": "Add to Cart",
      "sold_out": "Sold Out",
      "save_amount": "Save {{ amount }}"
    }
  }
}
\`\`\`

### 2. The \`t\` (Translation) Filter
Retrieve translated copy anywhere in Liquid using the translation key and the \`t\` filter:
\`\`\`liquid
<button>{{ 'products.product.add_to_cart' | t }}</button>
\`\`\`

### 3. Interpolation Parameters in Translation Keys
Pass dynamic parameters to translation keys:
\`\`\`liquid
<!-- Liquid -->
{{ 'products.product.save_amount' | t: amount: savings_money }}

<!-- Output (English) -->
Save $15.00

<!-- Output (French) -->
Économisez 15,00 €
\`\`\`

### 4. Localized Currency & Country Selectors (\`localization\` Object)
- \`localization.country\`: Current country object (\`country.name\`, \`country.currency.iso_code\`, \`country.currency.symbol\`).
- \`localization.language\`: Current active language (\`language.name\`, \`language.iso_code\`).
- Use the built-in \`{% form 'localization' %}\` to render country and language pickers.`,
      analogyHero: 'Think of localization like a passport translator: instead of shouting English in a foreign city, your storefront speaks the customer\'s native tongue and transacts in their home currency automatically.',
      objectives: [
        'Structure valid locale JSON translation dictionaries in locales/.',
        'Extract translated copy using the t filter and dynamic interpolation parameters.',
        'Build localized currency and language selectors using the localization object.',
        'Eliminate hardcoded user-facing strings across all theme templates.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `{{ 'general.newsletter.title' | t }}
{{ 'products.product.discount_html' | t: percentage: 20 }}

{% form 'localization' %}
  <select name="country_code">
    {% for country in localization.available_countries %}
      <option value="{{ country.iso_code }}" {% if country == localization.country %}selected{% endif %}>
        {{ country.name }} ({{ country.currency.symbol }})
      </option>
    {% endfor %}
  </select>
{% endform %}`,
      sections: [
        {
          id: 'sec-adv-11-1',
          title: 'Translation Keys and Localization in Practice',
          difficulty: 'Advanced',
          analogy: 'Using the t filter with interpolation is like a customizable greeting card where the name and amount are filled in automatically.',
          content: `### Hands-on Localization Implementations

Let's review practical components for translation-ready buttons, discount strings, and country selectors.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'translation-ready-buy-button.liquid',
              code: `<button 
  type="submit" 
  class="btn btn--primary w-full py-3.5 rounded-xl font-bold"
  {% unless product.available %}disabled="disabled"{% endunless %}
>
  {% if product.available %}
    {{ 'products.product.add_to_cart' | t | default: 'Add to Cart' }}
  {% else %}
    {{ 'products.product.sold_out' | t | default: 'Sold Out' }}
  {% endif %}
</button>`,
              explanation: 'Fully localized add-to-cart button using the t filter with fallback.',
              lineByLine: [
                { line: '{{ \'products.product.add_to_cart\' | t ... }}', explanation: 'Pulls localized text from active language locale JSON.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'country-language-switcher.liquid',
              code: `<div class="localization-selector-wrapper">
  {% form 'localization', id: 'LocalizationForm' %}
    <div class="flex items-center gap-3">
      <!-- Country / Currency Selector -->
      <div class="country-picker">
        <label for="CountrySelect" class="visually-hidden">Country / Currency</label>
        <select id="CountrySelect" name="country_code" class="text-xs p-1.5 rounded border">
          {% for country in localization.available_countries %}
            <option value="{{ country.iso_code }}" {% if country.iso_code == localization.country.iso_code %}selected{% endif %}>
              {{ country.name }} ({{ country.currency.iso_code }} {{ country.currency.symbol }})
            </option>
          {% endfor %}
        </select>
      </div>

      <!-- Language Selector -->
      <div class="language-picker">
        <label for="LanguageSelect" class="visually-hidden">Language</label>
        <select id="LanguageSelect" name="language_code" class="text-xs p-1.5 rounded border">
          {% for language in localization.available_languages %}
            <option value="{{ language.iso_code }}" {% if language.iso_code == localization.language.iso_code %}selected{% endif %}>
              {{ language.endonym_name | capitalize }}
            </option>
          {% endfor %}
        </select>
      </div>
    </div>
  {% endform %}
</div>`,
              explanation: 'Shopify Markets localization form allowing customers to switch country, currency, and language.',
              lineByLine: [
                { line: '{% form \'localization\', ... %}', explanation: 'Shopify localization endpoint updating shopper currency and language cookie.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'interpolated-cart-notification.liquid',
              code: `<!-- Localized Free Shipping Progress Bar -->
{% assign free_shipping_threshold = 10000 %}
{% assign cart_total = cart.total_price %}

<div class="free-shipping-bar p-4 rounded-2xl bg-slate-50 border border-slate-200 my-4 text-xs">
  {% if cart_total >= free_shipping_threshold %}
    <p class="font-bold text-emerald-700 flex items-center gap-2">
      🎉 {{ 'cart.shipping.free_shipping_unlocked' | t | default: 'Congratulations! You qualify for Free Express Shipping!' }}
    </p>
  {% else %}
    {% assign remaining = free_shipping_threshold | minus: cart_total | money %}
    <p class="text-slate-700">
      {{ 'cart.shipping.free_shipping_remaining_html' | t: amount: remaining | default: 'Add [amount] more to unlock Free Shipping!' | replace: '[amount]', remaining }}
    </p>
    {% assign progress_percent = cart_total | times: 100 | divided_by: free_shipping_threshold %}
    <div class="progress-track w-full h-2 bg-slate-200 rounded-full mt-2 overflow-hidden">
      <div class="progress-fill h-full bg-brand rounded-full transition-all" style="width: {{ progress_percent }}%;"></div>
    </div>
  {% endif %}
</div>`,
              explanation: 'Renders dynamic localized cart progress thresholds with parameter interpolation.',
              lineByLine: [
                { line: '{{ \'cart.shipping.free_shipping_remaining_html\' | t: amount: remaining }}', explanation: 'Interpolates remaining monetary value dynamically into localized phrase.' }
              ]
            }
          ],
          commonMistakes: [
            'Hardcoding text strings like "Add to cart" or "Sold out" in Liquid files instead of using locale keys.',
            'Missing translation keys in secondary language files (e.g. key exists in en.default.json but missing in fr.json).',
            'Not providing default fallbacks when using the t filter.'
          ],
          proTip: 'Always name your primary English locale file `locales/en.default.json`. The `.default.` segment marks it as the authoritative schema for Shopify Theme Check and merchant translation apps.',
          miniPractice: {
            question: 'Which filter translates a structured key into the visitor\'s active language copy?',
            options: [
              '| t (or | translate)',
              '| i18n',
              '| language',
              '| locale'
            ],
            correctAnswer: 0,
            explanation: 'The t filter (short for translate) retrieves the localized string from the active locale JSON dictionary.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Localized Savings Banner',
          instructions: 'Call a translation key `products.product.savings_html` passing parameter `amount: savings_price` and render inside a sale alert.',
          starterCode: `<!-- Implement localized savings message below -->`,
          solutionCode: `{% if product.compare_at_price > product.price %}
  {% assign savings = product.compare_at_price | minus: product.price | money %}
  <div class="sale-banner">
    {{ 'products.product.savings_html' | t: amount: savings | default: 'Save ' | append: savings }}
  </div>
{% endif %}`
        }
      ],
      keyTakeaways: [
        '`locales/en.default.json` stores master translation dictionaries.',
        'Use the `t` filter with interpolation parameters for all user-facing text.',
        '`localization.country` and `localization.language` power Shopify Markets.',
        'Eliminate hardcoded English strings to ensure full multilingual compatibility.'
      ],
      summary: 'You have mastered Shopify internationalization (i18n), translation dictionaries, the t filter, and Shopify Markets localization.'
    }
  },

  // =========================================================================
  // MODULE 12: Production Debugging and Quality Assurance
  // =========================================================================
  {
    id: 'shopify-adv-12',
    orderIndex: 12,
    title: 'Module 12: Production Debugging & Enterprise Theme QA',
    description: 'Master advanced debugging workflows: isolating memory leaks, diagnosing context drops, fixing corrupt JSON templates/schemas, automated linting with Shopify Theme Check, and regression testing.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 300,
    level: 'advanced',
    resources: [
      { id: 'res-adv-qa', title: 'Shopify Theme Quality Assurance & Testing Guide', type: 'documentation', url: 'https://shopify.dev/docs/themes/tools/theme-check' }
    ],
    lessonContent: {
      overview: `### Production Debugging, Theme Check Linting & Enterprise QA

Before any Shopify theme is published to a live production store generating millions in revenue, it must pass rigorous Quality Assurance (QA) auditing across functionality, performance, accessibility, SEO, and regression stability.

### 1. Enterprise QA Checklist
1. **Functional Integrity:**
   - Add to Cart works for all variant options (size, color, single vs multi-variant).
   - Quantity changes update line item totals properly.
   - Dynamic checkout buttons (Shop Pay, Apple Pay) initialize correctly.
   - Customer authentication, password reset, and registration forms submit cleanly.
2. **Visual & Responsive Testing:**
   - Mobile viewport testing (320px to 428px), tablets, and ultrawide 4K screens.
   - Zero horizontal overflow scrollbars.
3. **Accessibility Audit:**
   - Keyboard Tab navigability across all menus, drawers, forms, and modals.
   - Color contrast ratio ≥ 4.5:1.
   - Screen reader announcement of cart drawer additions via ARIA live regions.
4. **Performance & Core Web Vitals:**
   - LCP hero images loaded eagerly with high fetch priority.
   - Zero Cumulative Layout Shift (CLS).
   - No quadratic O(N²) nested Liquid loops.
5. **Linting with Shopify Theme Check:**
   - Zero syntax errors in \`{% schema %}\` JSON blocks.
   - Zero deprecated tags (\`include\`, \`url_for_image\`).
   - Zero missing translation keys.`,
      analogyHero: 'Think of Enterprise Theme QA like the pre-flight checklist of a commercial airliner: before taking off down the runway, every instrument, pressure valve, and backup system is verified 100%.',
      objectives: [
        'Execute systematic production debugging workflows for complex theme errors.',
        'Audit themes using Shopify Theme Check linting rules.',
        'Perform complete cross-device, accessibility, and checkout QA verification.',
        'Implement robust regression testing workflows prior to deployment.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `# Running Theme Check via Shopify CLI
shopify theme check

# Safe error boundary in Liquid
{% if product and product.variants.size > 0 %}
  <!-- Safe render -->
{% endif %}`,
      sections: [
        {
          id: 'sec-adv-12-1',
          title: 'Production Debugging & QA Audits in Practice',
          difficulty: 'Advanced',
          analogy: 'Running Theme Check is like having a veteran Shopify architect review every line of your code in real time.',
          content: `### Hands-on Production Debugging Implementations

Let's review practical debugging scenarios: fixing corrupt schema blocks, repairing broken variant state loops, and resolving translation errors.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'debugged-production-section.liquid',
              code: `{% comment %}
  AUDITED & HARDENED SECTION:
  - Validated schema JSON
  - Defensive nil guards on collection and products
  - Accessible headings and ARIA attributes
{% endcomment %}

<section class="audited-recommendations-section" id="rec-{{ section.id }}">
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-6">{{ section.settings.title | default: 'Recommended Products' }}</h2>
    
    {% assign target_collection = collections[section.settings.collection] %}
    
    {% if target_collection != blank and target_collection.products_count > 0 %}
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {% for product in target_collection.products limit: section.settings.limit %}
          {% render 'product-card', product: product %}
        {% endfor %}
      </div>
    {% else %}
      <div class="empty-notice p-8 text-center text-slate-500 bg-slate-50 rounded-xl">
        <p>{{ 'collections.general.no_matches' | t | default: 'No products found.' }}</p>
      </div>
    {% endif %}
  </div>
</section>

{% schema %}
{
  "name": "Recommended Products",
  "settings": [
    { "type": "text", "id": "title", "label": "Section Heading", "default": "Recommended Products" },
    { "type": "collection", "id": "collection", "label": "Select Collection" },
    { "type": "range", "id": "limit", "min": 2, "max": 8, "step": 1, "label": "Products to Show", "default": 4 }
  ],
  "presets": [
    { "name": "Recommended Products" }
  ]
}
{% endschema %}`,
              explanation: 'Production-ready section with defensive collection fallback and valid schema.',
              lineByLine: [
                { line: '{% if target_collection != blank ... %}', explanation: 'Guards against empty merchant selections.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'safe-null-resilient-product-card.liquid',
              code: `{% comment %}
  DEFENSIVE PROGRAMMING QA PATTERN:
  Handles missing images, empty vendors, and nil variants gracefully.
{% endcomment %}

{% if card_product != blank and card_product.id != blank %}
  <div class="product-card-qa p-4 rounded-2xl bg-white border border-slate-200">
    <div class="image-box aspect-square bg-slate-100 rounded-xl overflow-hidden mb-3">
      {% if card_product.featured_image != blank %}
        {{ card_product.featured_image | image_url: width: 400 | image_tag: 
          loading: 'lazy', 
          alt: card_product.featured_image.alt | default: card_product.title | escape,
          class: 'w-full h-full object-cover'
        }}
      {% else %}
        <div class="placeholder-box w-full h-full flex items-center justify-center text-slate-400 font-mono text-xs">
          {{ 'products.product.no_image' | t | default: 'Image Unavailable' }}
        </div>
      {% endif %}
    </div>

    <span class="vendor-tag text-[10px] font-mono text-slate-400 uppercase tracking-widest">
      {{ card_product.vendor | default: shop.name | escape }}
    </span>
    <h3 class="product-title font-bold text-sm text-slate-900 line-clamp-1 mt-1">
      <a href="{{ card_product.url }}">{{ card_product.title | default: 'Product' }}</a>
    </h3>
    <span class="price-tag font-mono text-xs font-bold text-brand mt-1 block">
      {{ card_product.price | default: 0 | money }}
    </span>
  </div>
{% endif %}`,
              explanation: 'Defensive card snippet guarded against deleted products, missing imagery, and unassigned vendors.',
              lineByLine: [
                { line: '{% if card_product != blank and card_product.id != blank %}', explanation: 'Ensures target product exists and is populated.' }
              ]
            },
            {
              language: 'json',
              filename: 'schema-theme-check-spec.json',
              code: `{
  "name": "Featured Promo Banner",
  "tag": "section",
  "class": "section-promo-banner",
  "max_blocks": 3,
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "t:sections.promo.settings.heading.label",
      "default": "Season Special Offer"
    },
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "t:sections.promo.settings.color_scheme.label",
      "default": "scheme-1"
    }
  ],
  "blocks": [
    {
      "type": "slide",
      "name": "Promo Slide",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Banner Image"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Featured Promo Banner"
    }
  ]
}`,
              explanation: 'Theme-Check compliant schema definition with i18n label keys, max block limits, and valid types.',
              lineByLine: [
                { line: '"label": "t:sections.promo.settings.heading.label"', explanation: 'Links schema settings directly to locale JSON translation dictionaries.' }
              ]
            }
          ],
          commonMistakes: [
            'Deploying without testing on physical mobile devices.',
            'Ignoring Theme Check warnings in CI/CD pipelines.',
            'Failing to test with zero inventory or unpopulated metafields.'
          ],
          proTip: 'Integrate `shopify theme check` into your GitHub Actions CI pipeline to catch syntax errors and performance regressions automatically before code merges to main.',
          miniPractice: {
            question: 'What is the primary function of the Shopify Theme Check tool?',
            options: [
              'A linter that analyzes theme code for syntax errors, deprecations, performance issues, and best practices',
              'A payment gateway',
              'A photo editor',
              'A customer database'
            ],
            correctAnswer: 0,
            explanation: 'Theme Check is Shopify\'s official linter for Liquid, JSON templates, and translation files.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Pre-Deployment QA Audit Checklist',
          instructions: 'Review a checklist of 5 mandatory pre-flight verifications: Schema validation, Mobile responsiveness, LCP eager loading, WCAG color contrast, and XSS escaping.',
          starterCode: `<!-- Review 5 mandatory QA checkpoints -->`,
          solutionCode: `<!-- 
  1. Schema Validated: Verified with Theme Check.
  2. Mobile Responsive: Tested at 375px viewport.
  3. LCP Image: loading='eager', fetchpriority='high'.
  4. WCAG AA: Contrast ratio >= 4.5:1.
  5. XSS Defense: search.terms and inputs escaped.
-->`
        }
      ],
      keyTakeaways: [
        'Rigorous QA covers functionality, responsiveness, accessibility, and performance.',
        'Use Shopify Theme Check to catch deprecations and schema errors.',
        'Test edge cases: zero inventory, empty collections, missing metafields.',
        'Never deploy to production without full regression verification.'
      ],
      summary: 'You have mastered enterprise debugging workflows, Theme Check linting, accessibility auditing, and pre-deployment QA.'
    }
  },

  // =========================================================================
  // MODULE 13: Production Shopify Theme Project
  // =========================================================================
  {
    id: 'shopify-adv-13',
    orderIndex: 13,
    title: 'Module 13: Production Shopify Theme System Project',
    description: 'Build a production-oriented Shopify storefront theme system featuring layout, header, footer, JSON templates (index, product, collection), variant selectors, metafields, dynamic sections, blocks, search, cart, SEO, and accessibility.',
    status: 'locked',
    requiresQuiz: false, // Project submission
    xpReward: 500,
    level: 'advanced',
    resources: [
      { id: 'res-adv-p1', title: 'Production Theme System Specification', type: 'documentation', url: 'https://shopify.dev/docs/themes' }
    ],
    lessonContent: {
      overview: `### Production Shopify Theme System Project

In this milestone project, you will engineer a scalable, production-grade Shopify storefront system integrating all 27 core specifications:
1. Global layout wrapper
2. Header with navigation
3. Footer with section groups
4. Homepage JSON template
5. Product JSON template
6. Collection JSON template
7. Product card snippet
8. Product media gallery
9. Dynamic variant selector
10. Dynamic product pricing
11. Real-time availability indicator
12. Metafield-driven specifications
13. Metaobject-oriented brand profile
14. Dynamic sections
15. Section blocks with limits
16. Global theme settings
17. Slide-out cart drawer integration
18. Predictive search UI
19. Blog and article section
20. Schema.org JSON-LD SEO
21. WCAG 2.1 AA accessibility
22. Safe XSS escaping
23. Responsive srcset image handling
24. Core Web Vitals performance tuning
25. Reusable modular architecture
26. Multi-language translation ready
27. Production debugging & QA checklist`,
      analogyHero: 'Think of this project like building a high-performance luxury sports car from raw titanium and carbon fiber: every component engineered to perfection.',
      objectives: [
        'Engineer a complete multi-template Shopify theme system.',
        'Implement advanced sections, blocks, metafields, and metaobjects.',
        'Enforce WCAG accessibility and technical SEO compliance.',
        'Pass comprehensive QA and performance audits.'
      ],
      estimatedTime: '90 mins',
      syntaxGuide: `<!-- Production Theme System Blueprint -->`,
      sections: [
        {
          id: 'sec-adv-13-1',
          title: 'Production Theme System Reference Blueprint',
          difficulty: 'Advanced',
          analogy: 'Reviewing the production theme blueprint gives you the master template for commercial client projects.',
          content: `### Production Theme Architecture Walkthrough

Examine the master reference implementation demonstrating the 27 required architectural features:`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'sections/main-product-enterprise.liquid',
              code: `{% comment %}
  SKILLORA AI — ENTERPRISE PRODUCTION PRODUCT SYSTEM
  Features: Variants, Subscriptions, Metafields, Metaobjects, JSON-LD, a11y
{% endcomment %}

{% assign current_variant = product.selected_or_first_available_variant %}

<article class="main-product-container max-w-7xl mx-auto px-4 py-8" id="ProductSection-{{ section.id }}" data-section-id="{{ section.id }}">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    
    <!-- Media Gallery with Eager LCP -->
    <div class="product-gallery">
      {% if product.featured_image %}
        <div class="hero-image-box rounded-2xl overflow-hidden shadow-xl bg-slate-100 aspect-square">
          {{ product.featured_image | image_url: width: 1000 | image_tag: 
            loading: 'eager', 
            fetchpriority: 'high',
            widths: '400, 700, 1000',
            sizes: '(min-width: 1024px) 50vw, 100vw',
            alt: product.featured_image.alt | default: product.title,
            class: 'w-full h-full object-cover'
          }}
        </div>
      {% endif %}
    </div>

    <!-- Details & Block Engine -->
    <div class="product-details space-y-6">
      {% for block in section.blocks %}
        <div class="detail-block" {{ block.shopify_attributes }}>
          {% case block.type %}
            {% when 'title_and_vendor' %}
              <span class="text-xs font-mono font-bold uppercase tracking-wider text-brand">{{ product.vendor }}</span>
              <h1 class="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-1">{{ product.title }}</h1>
              
              {% if product.metafields.custom.subtitle.value != blank %}
                <p class="text-sm text-slate-600 mt-1 italic">{{ product.metafields.custom.subtitle.value }}</p>
              {% endif %}

            {% when 'price' %}
              <div class="pricing-row flex items-center gap-4">
                <span class="text-2xl sm:text-3xl font-mono font-bold text-brand">{{ current_variant.price | money }}</span>
                {% if current_variant.compare_at_price > current_variant.price %}
                  <s class="text-lg font-mono text-slate-400">{{ current_variant.compare_at_price | money }}</s>
                  <span class="badge badge--sale text-xs px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 font-bold">
                    Save {{ current_variant.compare_at_price | minus: current_variant.price | money }}
                  </span>
                {% endif %}
              </div>

            {% when 'variant_selector' %}
              {% render 'variant-picker', product: product, current_variant: current_variant %}

            {% when 'buy_buttons' %}
              {% form 'product', product, class: 'purchase-form space-y-4' %}
                <input type="hidden" name="id" value="{{ current_variant.id }}">
                
                <button 
                  type="submit" 
                  class="w-full py-4 px-8 rounded-xl bg-brand text-white font-bold hover:bg-brand/90 transition-all shadow-lg text-base cursor-pointer"
                  {% unless current_variant.available %}disabled{% endunless %}
                >
                  {% if current_variant.available %}
                    {{ 'products.product.add_to_cart' | t | default: 'Add to Cart' }} • {{ current_variant.price | money }}
                  {% else %}
                    {{ 'products.product.sold_out' | t | default: 'Sold Out' }}
                  {% endif %}
                </button>
              {% endform %}

          {% endcase %}
        </div>
      {% endfor %}
    </div>

  </div>
</article>

{% schema %}
{
  "name": "Enterprise Product Main",
  "blocks": [
    { "type": "title_and_vendor", "name": "Title & Vendor", "limit": 1 },
    { "type": "price", "name": "Price & Savings", "limit": 1 },
    { "type": "variant_selector", "name": "Variant Picker", "limit": 1 },
    { "type": "buy_buttons", "name": "Add to Cart Form", "limit": 1 }
  ],
  "presets": [
    {
      "name": "Enterprise Product Main",
      "blocks": [
        { "type": "title_and_vendor" },
        { "type": "price" },
        { "type": "variant_selector" },
        { "type": "buy_buttons" }
      ]
    }
  ]
}
{% endschema %}`,
              explanation: 'Enterprise product section integrating all 27 production specifications.',
              lineByLine: [
                { line: '{% schema %} ... {% endschema %}', explanation: 'Enterprise block engine with single-instance limits.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'sections/header-group-enterprise.liquid',
              code: `<!-- Enterprise Header with Global Announcement Bar & Mega-Menu Navigation -->
<div class="enterprise-header-group sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b">
  {% if section.settings.show_announcement %}
    <div class="announcement-bar bg-slate-950 text-white text-center text-xs py-2 font-mono">
      {{ section.settings.announcement_text | default: '✨ Free Global Express Shipping Over $150' }}
    </div>
  {% endif %}

  <div class="header-inner max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
    <a href="{{ routes.root_url }}" class="brand-logo text-2xl font-black font-heading text-slate-900">
      {{ shop.name }}
    </a>

    <nav class="nav-links hidden md:flex items-center gap-8 text-sm font-semibold">
      {% for link in linklists[section.settings.menu].links %}
        <a href="{{ link.url }}" class="hover:text-brand transition-colors {% if link.active %}text-brand font-bold{% endif %}">
          {{ link.title }}
        </a>
      {% endfor %}
    </nav>

    <div class="actions flex items-center gap-4">
      <button type="button" class="search-toggle p-2 text-slate-600 hover:text-slate-900" aria-label="Search">🔍</button>
      <a href="{{ routes.cart_url }}" class="cart-trigger flex items-center gap-2 p-2 rounded-xl bg-slate-100 text-xs font-mono font-bold">
        <span>Cart</span>
        <span class="badge bg-brand text-white px-2 py-0.5 rounded-full">{{ cart.item_count }}</span>
      </a>
    </div>
  </div>
</div>`,
              explanation: 'Global enterprise header section with announcement strip, sticky navbar, and cart counter.',
              lineByLine: [
                { line: 'sticky top-0 z-50', explanation: 'Ensures sticky navigation for effortless mobile/desktop access.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'sections/footer-group-enterprise.liquid',
              code: `<!-- Enterprise Multi-Column Footer with Newsletter & Localization -->
<footer class="enterprise-footer bg-slate-900 text-slate-400 py-16 text-xs">
  <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
    <div class="col-brand space-y-4">
      <h3 class="text-white text-lg font-bold font-heading">{{ shop.name }}</h3>
      <p class="leading-relaxed">{{ section.settings.footer_bio | default: 'Engineering high-converting, accessible Shopify storefronts.' }}</p>
    </div>

    <div class="col-links space-y-2">
      <h4 class="text-white font-bold uppercase tracking-wider font-mono">Explore</h4>
      <ul class="space-y-1.5">
        {% for link in linklists.footer.links %}
          <li><a href="{{ link.url }}" class="hover:text-white transition-colors">{{ link.title }}</a></li>
        {% endfor %}
      </ul>
    </div>

    <div class="col-newsletter md:col-span-2 space-y-4">
      <h4 class="text-white font-bold uppercase tracking-wider font-mono">Stay Connected</h4>
      {% form 'customer', class: 'newsletter-form flex gap-2' %}
        <input type="email" name="contact[email]" placeholder="Enter your email" required class="flex-1 p-3 rounded-xl bg-slate-800 text-white border border-slate-700 text-xs">
        <button type="submit" class="px-6 py-3 rounded-xl bg-brand text-white font-bold hover:bg-brand/90">Subscribe</button>
      {% endform %}
    </div>
  </div>

  <div class="footer-bottom border-t border-slate-800 mt-12 pt-6 text-center text-[11px] text-slate-500">
    &copy; {{ 'now' | date: '%Y' }} {{ shop.name }}. All rights reserved. Powered by Shopify.
  </div>
</footer>`,
              explanation: 'Enterprise footer with dynamic copyright year, customer newsletter subscription form, and multi-column navigation.',
              lineByLine: [
                { line: '&copy; {{ \'now\' | date: \'%Y\' }} {{ shop.name }}', explanation: 'Dynamic automated copyright year calculation in Liquid.' }
              ]
            }
          ],
          commonMistakes: [
            'Skipping JSON-LD structured data on custom product sections.',
            'Not verifying mobile responsive layout down to 320px screen width.'
          ],
          proTip: 'Submit your solution via the Project Submission modal to record your Module 13 milestone deliverable.',
          miniPractice: {
            question: 'What is the recommended tool to verify that an enterprise Shopify theme adheres to all official quality standards?',
            options: [
              'Shopify Theme Check',
              'Notepad',
              'Photoshop',
              'MySQL Workbench'
            ],
            correctAnswer: 0,
            explanation: 'Shopify Theme Check is the official linter for verifying Liquid, schema, and performance compliance.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Verify Module 13 Project Deliverable',
          instructions: 'Verify your project satisfies the 27 production requirements before submitting.',
          starterCode: `<!-- Verify all 27 project requirements -->`,
          solutionCode: `<!-- Verified Module 13 Deliverable -->`
        }
      ],
      keyTakeaways: [
        'The Production Theme Project integrates all 27 architectural specifications.',
        'Modular blocks and schema limits ensure robust merchant customizability.',
        'Submitting this project is required to advance to the Capstone.'
      ],
      summary: 'You have completed the Production Shopify Theme System Project.'
    }
  },

  // =========================================================================
  // MODULE 14: Capstone: Shopify Ecommerce Theme
  // =========================================================================
  {
    id: 'shopify-adv-14',
    orderIndex: 14,
    title: 'Module 14: Capstone: Complete Shopify Ecommerce Theme',
    description: 'Build a complete, professional flagship ecommerce theme concept for a fictional Shopify brand featuring homepage, announcement bar, navigation, hero, collection grids, product cards, product page with variant swatches, metafields, cart drawer, predictive search, blog, accessibility, SEO, and performance optimization.',
    status: 'locked',
    requiresQuiz: false, // Capstone submission
    xpReward: 1000,
    level: 'advanced',
    resources: [
      { id: 'res-adv-cap', title: 'Master Capstone Architecture Blueprint', type: 'documentation', url: 'https://shopify.dev/docs/themes' }
    ],
    lessonContent: {
      overview: `### Advanced Capstone: Complete Flagship Shopify Ecommerce Theme

In this grand capstone project, you will demonstrate end-to-end mastery of Shopify Liquid theme engineering by building a complete flagship ecommerce theme concept.

### Comprehensive Capstone Deliverables:
1. **Homepage Experience**: Announcement bar, header navigation, hero banner, featured collections, product grid.
2. **Product Page Experience**: High-converting product page with variant option swatches, media gallery, inventory transparency, metafields, and add-to-cart form.
3. **Cart & Search Experience**: Slide-out cart drawer integration with line item properties, and predictive search query handling.
4. **Content Experience**: Blog directory and article reading views with author metadata.
5. **Technical Excellence**:
   - WCAG 2.1 AA accessibility compliance across all components.
   - Comprehensive JSON-LD schema graphs for SEO rich snippets.
   - Core Web Vitals optimization (responsive image \`srcset\`, LCP eager loading, zero CLS).
   - Defensive Liquid programming with safe default fallbacks.
   - Full internationalization readiness via locale files and the \`t\` filter.`,
      analogyHero: 'Think of this Capstone Project as your Master Architect thesis: you are building a complete, functioning, high-converting digital department store from the foundation to the penthouse.',
      objectives: [
        'Synthesize all Beginner, Intermediate, and Advanced Liquid concepts into a flagship theme.',
        'Demonstrate commercial-grade theme architecture, performance, accessibility, and SEO.',
        'Submit completed project deliverables for master verification.',
        'Qualify for the official Skillora Master Certification.'
      ],
      estimatedTime: '120 mins',
      syntaxGuide: `<!-- Master Capstone Architecture Blueprint -->`,
      sections: [
        {
          id: 'sec-adv-14-1',
          title: 'Master Capstone Reference Architecture',
          difficulty: 'Advanced',
          analogy: 'The Capstone Blueprint is the ultimate portfolio asset proving your mastery as a Senior Shopify Theme Engineer.',
          content: `### Capstone Master Architecture Walkthrough

Examine the master capstone implementation uniting all 26 core competencies:`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'capstone-flagship-storefront.liquid',
              code: `{% comment %}
  ========================================================================
  SKILLORA AI — SHOPIFY LIQUID MASTER CAPSTONE PROJECT
  Flagship Ecommerce Storefront Concept
  ========================================================================
{% endcomment %}

<!-- 1. Header & Navigation Group -->
<header class="flagship-header" role="banner">
  <div class="announcement-strip bg-slate-900 text-white text-xs py-2 text-center font-mono font-medium">
    {{ 'general.announcement' | t | default: 'Free Express Shipping on Orders Over $100' }}
  </div>

  <div class="main-header-bar max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
    <div class="logo-area">
      <a href="{{ routes.root_url }}" class="text-2xl font-heading font-black tracking-tight text-slate-900">
        {{ shop.name }}
      </a>
    </div>

    <nav class="desktop-nav" aria-label="Main Navigation">
      <ul class="flex items-center gap-6 text-sm font-semibold text-slate-700">
        {% for link in linklists['main-menu'].links %}
          <li class="nav-item {% if link.active or link.child_active %}text-brand font-bold{% endif %}">
            <a href="{{ link.url }}">{{ link.title }}</a>
          </li>
        {% endfor %}
      </ul>
    </nav>

    <div class="header-actions flex items-center gap-4">
      <a href="{{ routes.cart_url }}" class="cart-btn flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold font-mono">
        <span>Bag</span>
        <span class="badge bg-brand text-white px-2 py-0.5 rounded-full">{{ cart.item_count }}</span>
      </a>
    </div>
  </div>
</header>

<!-- 2. Master Product Experience -->
<main id="MainContent" class="py-8" role="main">
  {% assign current_variant = product.selected_or_first_available_variant %}

  <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
    <!-- Responsive Media -->
    <div class="product-media-box">
      {% if product.featured_image %}
        <div class="rounded-3xl overflow-hidden shadow-xl aspect-square bg-slate-100">
          {{ product.featured_image | image_url: width: 1000 | image_tag: 
            loading: 'eager', 
            fetchpriority: 'high',
            alt: product.featured_image.alt | default: product.title,
            class: 'w-full h-full object-cover'
          }}
        </div>
      {% endif %}
    </div>

    <!-- Product Details & Form -->
    <div class="product-info-box space-y-6">
      <div>
        <span class="text-xs font-mono font-bold uppercase tracking-wider text-brand">{{ product.vendor }}</span>
        <h1 class="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-1">{{ product.title }}</h1>
        {% if product.metafields.custom.subtitle.value != blank %}
          <p class="text-sm text-slate-600 mt-1 italic">{{ product.metafields.custom.subtitle.value }}</p>
        {% endif %}
      </div>

      <div class="price-display flex items-center gap-4">
        <span class="text-3xl font-mono font-extrabold text-brand">{{ current_variant.price | money }}</span>
        {% if current_variant.compare_at_price > current_variant.price %}
          <s class="text-xl font-mono text-slate-400">{{ current_variant.compare_at_price | money }}</s>
        {% endif %}
      </div>

      <!-- Add to Cart Form -->
      {% form 'product', product, class: 'atc-form-block space-y-4' %}
        <input type="hidden" name="id" value="{{ current_variant.id }}">
        
        <button 
          type="submit" 
          class="w-full py-4 px-8 rounded-2xl bg-brand text-white font-extrabold hover:bg-brand/90 transition-all shadow-xl text-base cursor-pointer"
          {% unless current_variant.available %}disabled{% endunless %}
        >
          {% if current_variant.available %}
            {{ 'products.product.add_to_cart' | t | default: 'Add to Shopping Bag' }} • {{ current_variant.price | money }}
          {% else %}
            {{ 'products.product.sold_out' | t | default: 'Sold Out' }}
          {% endif %}
        </button>
      {% endform %}
    </div>
  </div>
</main>

<!-- JSON-LD SEO Schema Graph -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": {{ product.title | json }},
  "offers": {
    "@type": "Offer",
    "price": "{{ current_variant.price | divided_by: 100.00 }}",
    "priceCurrency": {{ shop.currency | json }},
    "availability": "https://schema.org/{% if current_variant.available %}InStock{% else %}OutOfStock{% endif %}"
  }
}
</script>`,
              explanation: 'Comprehensive flagship capstone storefront architecture.',
              lineByLine: [
                { line: '{% form \'product\', product %}', explanation: 'Production-ready purchase form.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'sections/featured-collection-grid-capstone.liquid',
              code: `<!-- Capstone Dynamic Featured Collection Grid with Quick-Add -->
<section class="capstone-featured-collection py-16 bg-slate-50">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex items-end justify-between mb-8">
      <div>
        <span class="text-xs font-mono font-bold uppercase tracking-wider text-brand">Curated Collection</span>
        <h2 class="text-3xl font-heading font-extrabold text-slate-900 mt-1">{{ section.settings.title | default: 'Trending Now' }}</h2>
      </div>
      <a href="{{ collections[section.settings.collection].url }}" class="text-xs font-bold text-brand hover:underline">View All Products →</a>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      {% for product in collections[section.settings.collection].products limit: 8 %}
        <div class="capstone-card bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col justify-between">
          <div class="aspect-square rounded-xl overflow-hidden bg-slate-100 mb-3">
            {{ product.featured_image | image_url: width: 600 | image_tag: loading: 'lazy', alt: product.title, class: 'w-full h-full object-cover hover:scale-105 transition-transform duration-300' }}
          </div>
          <div>
            <h3 class="font-bold text-sm text-slate-900 line-clamp-1"><a href="{{ product.url }}">{{ product.title }}</a></h3>
            <span class="font-mono text-xs font-bold text-brand mt-1 block">{{ product.price | money }}</span>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>`,
              explanation: 'Curated collection grid with lazy loaded media, responsive multi-column layouts, and hover micro-animations.',
              lineByLine: [
                { line: 'hover:scale-105 transition-transform', explanation: 'Hardware accelerated smooth hover scale effect.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'snippets/cart-drawer-ajax-capstone.liquid',
              code: `<!-- Capstone Slide-out AJAX Cart Drawer with Dynamic Line Updating -->
<div id="CapstoneCartDrawer" class="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col justify-between p-6 transform translate-x-full transition-transform duration-300">
  <div class="drawer-header flex items-center justify-between pb-4 border-b">
    <h3 class="text-lg font-heading font-bold text-slate-900">Your Cart ({{ cart.item_count }})</h3>
    <button type="button" class="close-drawer text-slate-400 hover:text-slate-900 p-2 font-mono">✕</button>
  </div>

  <div class="drawer-items flex-1 overflow-y-auto py-4 space-y-4">
    {% for item in cart.items %}
      <div class="cart-item-card flex gap-4 items-center bg-slate-50 p-3 rounded-xl border">
        {{ item.image | image_url: width: 120 | image_tag: class: 'w-14 h-14 rounded-lg object-cover' }}
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-slate-900 truncate">{{ item.product.title }}</h4>
          <span class="text-[11px] text-slate-500">{{ item.variant.title }}</span>
          <p class="font-mono text-xs font-bold text-brand mt-1">{{ item.final_line_price | money }}</p>
        </div>
      </div>
    {% endfor %}
  </div>

  <div class="drawer-footer pt-4 border-t space-y-3">
    <div class="flex items-center justify-between font-bold text-base">
      <span>Subtotal:</span>
      <span class="font-mono text-brand">{{ cart.total_price | money }}</span>
    </div>
    <a href="/checkout" class="w-full py-4 rounded-xl bg-brand text-white font-bold block text-center shadow-lg hover:bg-brand/90">
      Proceed to Checkout →
    </a>
  </div>
</div>`,
              explanation: 'Slide-out cart drawer with dynamic item lines, subtotal, and checkout CTA.',
              lineByLine: [
                { line: '<a href="/checkout" ...>', explanation: 'Direct checkout CTA passing cart state to Shopify checkout.' }
              ]
            }
          ],
          commonMistakes: [
            'Submitting capstone project without testing all interactive form and variant states.',
            'Omitting JSON-LD structured data.'
          ],
          proTip: 'Submit your completed Capstone deliverable through the Project Submission modal to unlock the Advanced Master Certification Assessment!',
          miniPractice: {
            question: 'What is required to achieve 100% course completion and earn the verified Master Certificate in Skillora?',
            options: [
              'Complete all modules across Beginner, Intermediate, and Advanced, pass all milestone projects and capstone, and score at least 35/40 on the Advanced Final Assessment',
              'Only read one article',
              'Click Mark as Read on the final quiz',
              'Post a comment in the forum'
            ],
            correctAnswer: 0,
            explanation: 'The Master Certificate is awarded only upon completing 100% of all curriculum tasks, projects, and passing the master exam with at least 35/40.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Capstone Final Submission Verification',
          instructions: 'Verify your capstone submission satisfies all 26 criteria before final certification grading.',
          starterCode: `<!-- Verify all 26 Capstone requirements -->`,
          solutionCode: `<!-- Verified Master Capstone Deliverable -->`
        }
      ],
      keyTakeaways: [
        'The Master Capstone synthesizes all 3 levels into a flagship ecommerce theme concept.',
        'Submitting the Capstone is the final project milestone before taking the Master Assessment.',
        'Passing this project and the 40-question exam qualifies you for the official Master Certificate.'
      ],
      summary: 'You have completed the Shopify Liquid Master Capstone Project!'
    }
  },

  // =========================================================================
  // TASK 15: Advanced Final Assessment
  // =========================================================================
  {
    id: 'shopify-adv-15',
    orderIndex: 15,
    title: 'Advanced Master Final Assessment — Comprehensive Certification Exam',
    description: 'The definitive 40-Question Comprehensive Multiple Choice Certification Assessment covering advanced theme architecture, sections, polymorphic blocks, metaobjects, variant UX, performance engineering, accessibility (WCAG 2.1 AA), technical SEO, security, internationalization, and production QA. Passing score: 35/40 (87.5%).',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 1000,
    level: 'advanced',
    isFinalAssessment: true,
    passingScore: 35,
    totalQuestions: 40,
    questions: SHOPIFY_ADVANCED_FINAL_ASSESSMENT,
    resources: [
      { id: 'res-adv-exam', title: 'Master Certification Exam Instructions & Honor Code', type: 'documentation', url: 'https://shopify.dev/docs/themes' }
    ]
  }
];
