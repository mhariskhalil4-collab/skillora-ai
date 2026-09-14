import { Task, QuizQuestion } from '../../types/roadmap.types';

export const SHOPIFY_INTERMEDIATE_FINAL_ASSESSMENT: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Section Architecture',
    question: 'What is section.settings used for?',
    options: [
      'Accessing section configuration values',
      'Creating a database',
      'Logging users',
      'Installing apps'
    ],
    correctAnswer: 0, // A
    explanation: 'section.settings provides access to the merchant-configured values defined in the section\'s {% schema %} JSON block.'
  },
  {
    id: 2,
    topic: 'Snippets & Components',
    question: 'Which tag is recommended for rendering snippets?',
    options: [
      'include',
      'render',
      'snippet',
      'component'
    ],
    correctAnswer: 1, // B
    explanation: 'The render tag is the modern, high-performance tag for rendering theme snippets with isolated variable scope, replacing the deprecated include tag.'
  },
  {
    id: 3,
    topic: 'Snippets & Components',
    question: 'What is a snippet primarily used for?',
    options: [
      'Reusable theme code',
      'Database storage',
      'Customer authentication',
      'Payment processing'
    ],
    correctAnswer: 0, // A
    explanation: 'Snippets are reusable files located in the snippets/ directory that encapsulate micro-components like product cards, price badges, and icons to prevent code duplication.'
  },
  {
    id: 4,
    topic: 'Advanced Product Data',
    question: 'What does product.variants contain?',
    options: [
      'Blog posts',
      'Product variants',
      'Theme settings',
      'Customers'
    ],
    correctAnswer: 1, // B
    explanation: 'product.variants returns an array of all variant objects (different sizes, colors, SKUs, prices) belonging to the product.'
  },
  {
    id: 5,
    topic: 'Metafields',
    question: 'What does product.metafields provide?',
    options: [
      'Access to product metafield data',
      'Access to JavaScript files',
      'Access to server logs',
      'Access to app credentials'
    ],
    correctAnswer: 0, // A
    explanation: 'product.metafields provides access to custom structured attributes attached to the product drop using namespace and key identifiers.'
  },
  {
    id: 6,
    topic: 'Media & Images',
    question: 'What does image_url generally help with?',
    options: [
      'Generating an image URL with requested transformations',
      'Deleting an image',
      'Uploading a theme',
      'Creating a product'
    ],
    correctAnswer: 0, // A
    explanation: 'The image_url filter generates an optimized CDN URL with custom width, height, crop, and format transformations.'
  },
  {
    id: 7,
    topic: 'Media & Images',
    question: 'What does image_tag generate?',
    options: [
      'An HTML image element',
      'A database record',
      'A JSON template',
      'A customer form'
    ],
    correctAnswer: 0, // A
    explanation: 'The image_tag filter takes an image URL or object and outputs a complete, semantic HTML <img> tag with width, height, alt, and srcset attributes.'
  },
  {
    id: 8,
    topic: 'Section Architecture',
    question: 'What is {% schema %} used for in a section?',
    options: [
      'Defining section configuration/settings',
      'Running JavaScript',
      'Creating SQL',
      'Sending email'
    ],
    correctAnswer: 0, // A
    explanation: 'The {% schema %} tag defines the JSON configuration that powers the Shopify Theme Customizer interface for that section.'
  },
  {
    id: 9,
    topic: 'Section Architecture',
    question: 'What does block.settings provide?',
    options: [
      'Block configuration values',
      'Customer passwords',
      'Database rows',
      'API tokens'
    ],
    correctAnswer: 0, // A
    explanation: 'Inside a section block loop, block.settings accesses the specific merchant-configured values for that individual block instance.'
  },
  {
    id: 10,
    topic: 'JSON Templates',
    question: 'What is a JSON template used for?',
    options: [
      'Defining a page\'s section composition',
      'Storing passwords',
      'Running Python',
      'Creating SQL indexes'
    ],
    correctAnswer: 0, // A
    explanation: 'JSON templates (e.g. index.json, product.json) define which sections appear on a page, their order, and their initial settings and blocks.'
  },
  {
    id: 11,
    topic: 'Liquid Objects',
    question: 'Which object represents the current product?',
    options: [
      'product',
      'current_product',
      'item',
      'merchandise'
    ],
    correctAnswer: 0, // A
    explanation: 'The product object represents the active product in product templates, featured product sections, and recommendation loops.'
  },
  {
    id: 12,
    topic: 'Advanced Product Data',
    question: 'What does product.selected_or_first_available_variant provide?',
    options: [
      'A selected or fallback available variant',
      'A blog article',
      'A customer',
      'A theme setting'
    ],
    correctAnswer: 0, // A
    explanation: 'Returns the variant currently selected via URL parameters (?variant=123) or defaults safely to the first purchasable variant in stock.'
  },
  {
    id: 13,
    topic: 'Snippets & Components',
    question: 'What does the render tag support?',
    options: [
      'Reusable snippet rendering',
      'Database migration',
      'CSS compilation',
      'App installation'
    ],
    correctAnswer: 0, // A
    explanation: 'The render tag renders snippet files with isolated scope and explicit parameter passing: {% render "card", product: product %}.'
  },
  {
    id: 14,
    topic: 'Metafields',
    question: 'What is a metafield namespace/key combination used for?',
    options: [
      'Identifying a custom data field',
      'Creating a password',
      'Naming a theme',
      'Creating a CSS class'
    ],
    correctAnswer: 0, // A
    explanation: 'Metafields are organized by namespace and key (e.g. product.metafields.custom.care_instructions) to uniquely identify custom data definitions.'
  },
  {
    id: 15,
    topic: 'Advanced Filters',
    question: 'Which filter can safely encode text for a URL?',
    options: [
      'url_encode',
      'url_safe',
      'encode_url',
      'link_encode'
    ],
    correctAnswer: 0, // A
    explanation: 'The url_encode filter converts special characters and spaces into percent-encoded URL-safe strings.'
  },
  {
    id: 16,
    topic: 'Advanced Filters & Security',
    question: 'Which filter is useful for escaping output?',
    options: [
      'escape',
      'protect',
      'safe',
      'secure'
    ],
    correctAnswer: 0, // A
    explanation: 'The escape filter sanitizes strings by converting HTML entities (&, <, >, ", \') into safe character codes to prevent XSS.'
  },
  {
    id: 17,
    topic: 'Pagination & Filtering',
    question: 'What does paginate do?',
    options: [
      'Provides pagination for supported collections of results',
      'Creates a product',
      'Changes a password',
      'Creates a section schema'
    ],
    correctAnswer: 0, // A
    explanation: 'The paginate tag wraps arrays (collection.products, blog.articles, search.results) to split large sets across numbered pages (e.g. {% paginate collection.products by 12 %}).'
  },
  {
    id: 18,
    topic: 'Blog & Article Templates',
    question: 'What object contains blog articles?',
    options: [
      'blog.articles',
      'blog.posts',
      'articles.blog',
      'posts'
    ],
    correctAnswer: 0, // A
    explanation: 'The blog object contains the blog.articles array, holding all published articles under that blog category.'
  },
  {
    id: 19,
    topic: 'Blog & Article Templates',
    question: 'What does article.content contain?',
    options: [
      'Article content',
      'Product inventory',
      'Cart items',
      'Theme settings'
    ],
    correctAnswer: 0, // A
    explanation: 'article.content returns the full HTML rich text body of the blog article.'
  },
  {
    id: 20,
    topic: 'Accessibility & SEO',
    question: 'What is semantic HTML useful for?',
    options: [
      'Accessibility and meaningful document structure',
      'Increasing database storage',
      'Creating API keys',
      'Changing Shopify billing'
    ],
    correctAnswer: 0, // A
    explanation: 'Semantic HTML tags (<header>, <nav>, <main>, <article>, <footer>) communicate structure clearly to screen readers, assistive technology, and search engine crawlers.'
  },
  {
    id: 21,
    topic: 'Accessibility & SEO',
    question: 'Why should dynamic text often be escaped?',
    options: [
      'To safely render text and reduce unsafe output risks',
      'To increase image size',
      'To create products',
      'To enable payments'
    ],
    correctAnswer: 0, // A
    explanation: 'Escaping user-supplied text (such as search queries or cart notes) prevents malicious script injection and cross-site scripting vulnerabilities.'
  },
  {
    id: 22,
    topic: 'Section Architecture',
    question: 'What is a section block?',
    options: [
      'A configurable child component inside a section',
      'A database table',
      'A password field',
      'A Shopify app'
    ],
    correctAnswer: 0, // A
    explanation: 'Blocks are modular sub-components within a section that merchants can add, delete, customize, and reorder inside the Theme Customizer.'
  },
  {
    id: 23,
    topic: 'Forms & Cart',
    question: 'Which object can provide cart item count?',
    options: [
      'cart.item_count',
      'cart.count_items',
      'basket.items',
      'cart.quantity_total'
    ],
    correctAnswer: 0, // A
    explanation: 'cart.item_count returns the integer count of all items across all line items in the active cart.'
  },
  {
    id: 24,
    topic: 'Forms & Cart',
    question: 'What does line item properties allow?',
    options: [
      'Additional custom information associated with a cart line',
      'Creation of database indexes',
      'Theme installation',
      'Password reset'
    ],
    correctAnswer: 0, // A
    explanation: 'Line item properties allow merchants to capture custom customer inputs (e.g. engraving text, gift messages) associated with a specific purchased item.'
  },
  {
    id: 25,
    topic: 'Accessibility & SEO',
    question: 'What is the purpose of alt text?',
    options: [
      'Accessibility and image description',
      'Database indexing',
      'Price calculation',
      'Customer authentication'
    ],
    correctAnswer: 0, // A
    explanation: 'Alt text provides textual descriptions of images for visually impaired users using screen readers and assists search engines in indexing visual content.'
  },
  {
    id: 26,
    topic: 'Snippets & Components',
    question: 'What is a good reason to use snippets?',
    options: [
      'Reduce duplication and improve reuse',
      'Store passwords',
      'Replace the Shopify database',
      'Process payments'
    ],
    correctAnswer: 0, // A
    explanation: 'Snippets eliminate code duplication by allowing a single master component (like a product card or badge) to be reused across all templates.'
  },
  {
    id: 27,
    topic: 'Section Architecture',
    question: 'What is section.id useful for?',
    options: [
      'Identifying the current section instance',
      'Identifying a customer password',
      'Creating an API token',
      'Identifying a database server'
    ],
    correctAnswer: 0, // A
    explanation: 'section.id generates a unique string identifier for the section instance, enabling scoped CSS classes, DOM targets, and JavaScript bindings.'
  },
  {
    id: 28,
    topic: 'Debugging & Performance',
    question: 'What is a major performance concern in theme Liquid?',
    options: [
      'Unnecessary expensive processing and excessive rendering work',
      'Using headings',
      'Using alt text',
      'Using comments'
    ],
    correctAnswer: 0, // A
    explanation: 'Unnecessary deep nested loops, querying huge collections repeatedly, or unoptimized image tags significantly increase server rendering times and TTFB.'
  },
  {
    id: 29,
    topic: 'Advanced Product Data',
    question: 'What does product.handle represent?',
    options: [
      'The product\'s handle used in URLs/context',
      'Customer password',
      'Product inventory quantity only',
      'Theme ID'
    ],
    correctAnswer: 0, // A
    explanation: 'product.handle is the unique URL-safe string identifier (e.g. "mechanical-keyboard") used to query products directly via all_products[handle] and build routes.'
  },
  {
    id: 30,
    topic: 'Theme Customization',
    question: 'What is the purpose of theme customization settings?',
    options: [
      'Allow merchants to configure supported theme behavior/content',
      'Create database servers',
      'Replace Shopify checkout',
      'Install operating systems'
    ],
    correctAnswer: 0, // A
    explanation: 'Theme settings allow non-technical store owners to modify colors, typography, layout options, and content without touching code.'
  }
];

export const SHOPIFY_INTERMEDIATE_TASKS: Task[] = [
  // =========================================================================
  // MODULE 1: Advanced Liquid Objects and Product Data
  // =========================================================================
  {
    id: 'shopify-int-01',
    orderIndex: 1,
    title: 'Module 1: Advanced Liquid Objects & Product Variants',
    description: 'Deep dive into product variants (variant.id, title, price, available, inventory_quantity, options 1-3), selected_or_first_available_variant, handles, tags, and collections.',
    status: 'in_progress',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-int-var', title: 'Shopify Variant Object Reference', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/objects/variant' }
    ],
    lessonContent: {
      overview: `### Advanced Product Data & Variant Architecture

Every Shopify product contains one or more **variants**—distinct physical or digital variations with unique SKUs, prices, inventory quantities, and option values (such as "Small / Blue" or "128GB / Space Gray").

### 1. The \`variant\` Object Properties
- \`variant.id\`: Unique numeric ID required by the cart for checkout.
- \`variant.title\`: Combined title of option values (e.g., "Large / Red").
- \`variant.price\`: Active selling price in cents.
- \`variant.compare_at_price\`: Strikethrough comparison price.
- \`variant.available\`: Boolean (\`true\` if inventory > 0 or inventory policy is "continue selling").
- \`variant.inventory_quantity\`: Exact number of units in stock (if tracked).
- \`variant.inventory_management\`: Returns \`'shopify'\` if tracked, or \`nil\`.
- \`variant.inventory_policy\`: Returns \`'deny'\` or \`'continue'\` when out of stock.
- \`variant.option1\`, \`variant.option2\`, \`variant.option3\`: The specific values for each option dimension (e.g. \`option1 = "Large"\`, \`option2 = "Red"\`).
- \`variant.sku\`: Stock keeping unit string.
- \`variant.featured_image\`: Variant-specific photo object.

### 2. \`product.selected_or_first_available_variant\`
When a customer lands on a product page, the URL might specify a variant parameter (e.g. \`/products/chair?variant=41234567\`).
- \`product.selected_variant\`: Returns the variant matching the URL parameter (or \`nil\` if absent).
- \`product.selected_or_first_available_variant\`: Returns the selected variant if present, or automatically defaults to the **first variant that is currently in stock**. This ensures add-to-cart buttons are enabled by default for shoppers.

### 3. Product Handles and Global Querying
- \`product.handle\`: URL-safe slug (\`"wireless-headphones"\`).
- \`all_products['handle']\`: Enables global lookup of any product catalog item from any template.`,
      analogyHero: 'Think of the Product as a car model (e.g. Tesla Model 3). Variants are the specific trim levels and colors (Long Range in Midnight Silver with 19-inch wheels). You can\'t buy an abstract model; you must specify the exact variant to put in your cart.',
      objectives: [
        'Iterate and manipulate all product variants and multi-dimensional option combinations.',
        'Use product.selected_or_first_available_variant to establish reliable default states.',
        'Inspect inventory policies, SKUs, and variant-specific media.',
        'Leverage product handles for global cross-catalog querying.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: `{% assign current_variant = product.selected_or_first_available_variant %}

<p>{{ current_variant.title }}</p>
<p>{{ current_variant.price | money }}</p>

{% for variant in product.variants %}
  <span>{{ variant.option1 }} / {{ variant.option2 }}: {{ variant.price | money }}</span>
{% endfor %}`,
      sections: [
        {
          id: 'sec-int-1-1',
          title: 'Variant Selection & Inventory Inspection in Practice',
          difficulty: 'Intermediate',
          analogy: 'Checking selected_or_first_available_variant is like handing the customer a shirt in their size, or the nearest available size on the rack.',
          content: `### Hands-on Variant Architecture

Below are three complete practical examples demonstrating variant default selection, multi-option swatch rendering, and inventory status tracking.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-selected-variant.liquid',
              code: `{% assign current_variant = product.selected_or_first_available_variant %}

<div class="product-variant-header" id="variant-header-{{ product.id }}">
  <h2 class="variant-title">{{ current_variant.title }}</h2>
  <div class="variant-pricing">
    <span class="price-active">{{ current_variant.price | money }}</span>
    {% if current_variant.compare_at_price > current_variant.price %}
      <s class="price-compare">{{ current_variant.compare_at_price | money }}</s>
    {% endif %}
  </div>
  <p class="sku-display">SKU: {{ current_variant.sku | default: 'N/A' }}</p>
</div>`,
              explanation: 'Initializes the active variant state and renders localized pricing, compare-at savings, and SKU information.',
              lineByLine: [
                { line: '{% assign current_variant = product.selected_or_first_available_variant %}', explanation: 'Safely resolves the initial variant drop to display.' },
                { line: '{{ current_variant.price | money }}', explanation: 'Formats variant-specific price.' },
                { line: 'SKU: {{ current_variant.sku | default: \'N/A\' }}', explanation: 'Outputs SKU with defensive fallback.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-option-swatches.liquid',
              code: `<div class="variant-options-grid">
  {% for option in product.options_with_values %}
    <fieldset class="option-fieldset" name="{{ option.name }}">
      <legend class="option-label">{{ option.name }}: <span class="selected-val">{{ option.selected_value }}</span></legend>
      <div class="option-values">
        {% for value in option.values %}
          <button 
            type="button" 
            class="swatch-btn {% if option.selected_value == value %}is-selected{% endif %}"
            data-option-position="{{ option.position }}"
            data-value="{{ value | escape }}"
          >
            {{ value }}
          </button>
        {% endfor %}
      </div>
    </fieldset>
  {% endfor %}
</div>`,
              explanation: 'Iterates through product options (e.g. Size, Color) and renders accessible fieldset swatches.',
              lineByLine: [
                { line: '{% for option in product.options_with_values %}', explanation: 'Iterates over product option groups with their available value arrays.' },
                { line: '<legend ...>{{ option.name }}</legend>', explanation: 'Accessible fieldset legend for screen readers.' },
                { line: '{% for value in option.values %}', explanation: 'Loops through distinct values for that option dimension.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-inventory-indicator.liquid',
              code: `{% assign target_variant = product.selected_or_first_available_variant %}

<div class="inventory-status" aria-live="polite">
  {% if target_variant.available %}
    {% if target_variant.inventory_management == 'shopify' and target_variant.inventory_quantity <= 5 and target_variant.inventory_quantity > 0 %}
      <span class="inventory-warning">⚠️ Only {{ target_variant.inventory_quantity }} left in stock — order soon!</span>
    {% else %}
      <span class="inventory-good">✓ In Stock & Ready to Ship</span>
    {% endif %}
  {% else %}
    <span class="inventory-out">Sold Out — Backorder Available</span>
  {% endif %}
</div>`,
              explanation: 'Calculates low-stock urgency alerts based on exact tracked inventory quantities.',
              lineByLine: [
                { line: '{% if target_variant.inventory_management == \'shopify\' %}', explanation: 'Verifies Shopify is tracking stock levels for this variant.' },
                { line: 'target_variant.inventory_quantity <= 5', explanation: 'Triggers urgency threshold when 5 or fewer units remain.' }
              ]
            }
          ],
          commonMistakes: [
            'Using product.price instead of variant.price when updating prices dynamically. Different variants often have different price points.',
            'Assuming product.options is an array of objects. product.options is an array of strings (["Size", "Color"]), whereas product.options_with_values provides full option objects with value lists.',
            'Relying on inventory_quantity without checking if inventory_management is active.'
          ],
          proTip: 'Use `product.options_with_values` instead of raw `product.options` whenever building modern variant picker interfaces. It gives direct access to `option.name`, `option.position`, `option.values`, and `option.selected_value`.',
          miniPractice: {
            question: 'What does product.selected_or_first_available_variant return if no specific variant is selected in the URL?',
            options: [
              'The cheapest variant',
              'The first variant in the array that is available (in stock)',
              'nil',
              'The product object itself'
            ],
            correctAnswer: 1,
            explanation: 'It returns the first variant in product.variants where variant.available is true.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Variant Selector with SKU and Inventory Pill',
          instructions: 'Construct a variant information box that grabs the default available variant, renders its title, price, SKU, and a low-stock pill if `inventory_quantity` is 10 or fewer.',
          starterCode: `<!-- Build variant information component below -->`,
          solutionCode: `{% assign variant = product.selected_or_first_available_variant %}

<div class="variant-card">
  <h3>{{ variant.title }}</h3>
  <div class="variant-meta">
    <span class="price">{{ variant.price | money }}</span>
    <span class="sku">SKU: {{ variant.sku }}</span>
  </div>
  {% if variant.available and variant.inventory_quantity <= 10 and variant.inventory_quantity > 0 %}
    <span class="low-stock-pill">Only {{ variant.inventory_quantity }} left!</span>
  {% endif %}
</div>`
        }
      ],
      keyTakeaways: [
        'Variants represent distinct purchasable SKUs with individual pricing and inventory.',
        '`product.selected_or_first_available_variant` handles URL variant selection and in-stock fallbacks.',
        '`product.options_with_values` simplifies multi-option swatch rendering.',
        '`inventory_management` and `inventory_quantity` provide precise inventory transparency.'
      ],
      summary: 'You have mastered Shopify variant data structures, inventory thresholds, and multi-option selection architecture.'
    }
  },

  // =========================================================================
  // MODULE 2: Sections and Section Architecture
  // =========================================================================
  {
    id: 'shopify-int-02',
    orderIndex: 2,
    title: 'Module 2: Sections and Section Architecture',
    description: 'Learn Shopify sections, {% schema %} configuration, section settings (text, image, select, checkbox, range), dynamic blocks, section.id, and Theme Customizer integration.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-int-sec', title: 'Shopify Sections & Schema Reference', type: 'documentation', url: 'https://shopify.dev/docs/themes/architecture/sections' }
    ],
    lessonContent: {
      overview: `### Modular Theme Architecture with Sections

**Sections** are modular, customizable UI components located in the \`sections/\` directory of a Shopify theme. They empower merchants to add, configure, reorder, and remove content blocks across any page via the live Theme Customizer without writing code.

### 1. Anatomy of a Section File
A section \`.liquid\` file typically consists of three parts:
1. **Liquid HTML Markup:** The template rendering HTML and Liquid tags.
2. **CSS / JavaScript:** Optional scoped \`<style>\` and \`<script>\` tags.
3. **\`{% schema %}\` JSON Block:** Defines the configuration schema for merchant settings and blocks in the Theme Editor.

### 2. The \`{% schema %}\` JSON Specification
\`\`\`liquid
{% schema %}
{
  "name": "Custom Hero Banner",
  "tag": "section",
  "class": "section-hero",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Hero Heading",
      "default": "Welcome to Skillora"
    }
  ],
  "presets": [
    {
      "name": "Custom Hero Banner"
    }
  ]
}
{% endschema %}
\`\`\`

### 3. Setting Input Types
Shopify provides powerful built-in setting types:
- **Basic:** \`text\`, \`textarea\`, \`richtext\`, \`number\`, \`checkbox\`, \`radio\`, \`select\`, \`range\` (with min/max/step/unit), \`color\`, \`color_background\`.
- **Specialized Resources:** \`image_picker\`, \`video\`, \`product\`, \`collection\`, \`link_list\`, \`url\`, \`font_picker\`, \`html\`, \`liquid\`.

### 4. Blocks & Block Architecture
Blocks allow merchants to repeat and reorder child items inside a section (such as slides in a carousel or columns in a feature grid):
- \`section.blocks\`: Array of all active block objects.
- \`block.id\`: Unique ID generated by Shopify.
- \`block.type\`: Match against defined block types in schema.
- \`block.settings\`: Merchant values for this specific block.
- \`block.shopify_attributes\`: Mandatory attribute attached to the block's DOM element for live Theme Editor inspector highlighting.`,
      analogyHero: 'Think of a Section like a modular IKEA bookcase: the section settings let the merchant choose the paint color and height, while Blocks are the adjustable shelves they can add, reorder, or remove at will.',
      objectives: [
        'Understand the structure and lifecycle of Shopify theme sections.',
        'Write valid {% schema %} JSON configurations with basic and specialized settings.',
        'Implement dynamic block systems with block.settings and block.shopify_attributes.',
        'Utilize section.id for scoped styling and DOM targeting.',
        'Create section presets to make sections discoverable in the Theme Editor.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `<h2>{{ section.settings.heading }}</h2>

{% for block in section.blocks %}
  <div class="block-item" {{ block.shopify_attributes }}>
    <h3>{{ block.settings.title }}</h3>
  </div>
{% endfor %}

{% schema %}
{
  "name": "Section Name",
  "settings": [ ... ],
  "blocks": [ ... ],
  "presets": [ { "name": "Default" } ]
}
{% endschema %}`,
      sections: [
        {
          id: 'sec-int-2-1',
          title: 'Building Configurable Sections with Blocks',
          difficulty: 'Intermediate',
          analogy: 'Adding block.shopify_attributes is like putting an invisible barcode on a shelf so the store manager can tap it with their scanner.',
          content: `### Hands-on Section Implementations

Let's review three complete sections: a Hero section with image settings, an Announcement bar, and a Multi-column feature grid using dynamic blocks.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'hero-banner.liquid',
              code: `<section class="hero-section" id="hero-{{ section.id }}" style="background-color: {{ section.settings.bg_color }};">
  <div class="hero-content">
    {% if section.settings.image != blank %}
      {{ section.settings.image | image_url: width: 1400 | image_tag: loading: 'eager', class: 'hero-bg-img', alt: section.settings.heading }}
    {% endif %}
    
    <div class="hero-text-overlay">
      <h1 class="hero-heading" style="color: {{ section.settings.text_color }};">{{ section.settings.heading }}</h1>
      {% if section.settings.subheading != blank %}
        <p class="hero-subheading">{{ section.settings.subheading }}</p>
      {% endif %}
      {% if section.settings.button_label != blank and section.settings.button_link != blank %}
        <a href="{{ section.settings.button_link }}" class="btn btn--hero">{{ section.settings.button_label }}</a>
      {% endif %}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Custom Hero Banner",
  "settings": [
    { "type": "image_picker", "id": "image", "label": "Hero Image" },
    { "type": "text", "id": "heading", "label": "Heading", "default": "Elevate Your Store" },
    { "type": "textarea", "id": "subheading", "label": "Subheading", "default": "Engineered with Shopify Liquid." },
    { "type": "text", "id": "button_label", "label": "Button Label", "default": "Shop Now" },
    { "type": "url", "id": "button_link", "label": "Button Link" },
    { "type": "color", "id": "bg_color", "label": "Background Color", "default": "#0f172a" },
    { "type": "color", "id": "text_color", "label": "Text Color", "default": "#ffffff" }
  ],
  "presets": [
    { "name": "Custom Hero Banner" }
  ]
}
{% endschema %}`,
              explanation: 'Configurable hero banner with image picker, text inputs, URL selector, color controls, and section presets.',
              lineByLine: [
                { line: 'id="hero-{{ section.id }}"', explanation: 'Injects unique section ID for instance isolation.' },
                { line: '{{ section.settings.heading }}', explanation: 'Renders merchant heading value from schema.' },
                { line: '{% schema %} ... {% endschema %}', explanation: 'JSON schema defining customizer controls and preset registration.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'feature-grid-with-blocks.liquid',
              code: `<section class="feature-grid-section" id="features-{{ section.id }}">
  <div class="section-header text-center">
    <h2>{{ section.settings.title }}</h2>
  </div>

  <div class="feature-grid-container grid-cols-{{ section.settings.columns }}">
    {% for block in section.blocks %}
      <div class="feature-column-card" {{ block.shopify_attributes }} id="block-{{ block.id }}">
        {% if block.settings.icon_text != blank %}
          <div class="feature-icon">{{ block.settings.icon_text }}</div>
        {% endif %}
        <h3>{{ block.settings.heading }}</h3>
        <p>{{ block.settings.text }}</p>
      </div>
    {% endfor %}
  </div>
</section>

{% schema %}
{
  "name": "Features Grid",
  "max_blocks": 6,
  "settings": [
    { "type": "text", "id": "title", "label": "Section Title", "default": "Why Choose Us" },
    { "type": "range", "id": "columns", "min": 2, "max": 4, "step": 1, "label": "Columns per row", "default": 3 }
  ],
  "blocks": [
    {
      "type": "feature",
      "name": "Feature Card",
      "settings": [
        { "type": "text", "id": "icon_text", "label": "Emoji / Icon", "default": "⚡" },
        { "type": "text", "id": "heading", "label": "Card Heading", "default": "Fast Delivery" },
        { "type": "textarea", "id": "text", "label": "Description", "default": "Orders ship within 24 hours." }
      ]
    }
  ],
  "presets": [
    {
      "name": "Features Grid",
      "blocks": [
        { "type": "feature" },
        { "type": "feature" },
        { "type": "feature" }
      ]
    }
  ]
}
{% endschema %}`,
              explanation: 'Multi-column grid utilizing dynamic section blocks with range sliders and default block presets.',
              lineByLine: [
                { line: '{% for block in section.blocks %}', explanation: 'Loops through all merchant-added blocks.' },
                { line: '{{ block.shopify_attributes }}', explanation: 'Enables live selection inspector in Shopify Theme Editor.' },
                { line: '"max_blocks": 6', explanation: 'Restricts the merchant from adding more than 6 blocks to prevent layout breakage.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'announcement-bar.liquid',
              code: `{% if section.settings.show_announcement %}
  <div class="announcement-bar" role="region" aria-label="Announcement" style="background: {{ section.settings.bar_bg }}; color: {{ section.settings.bar_color }};">
    <p class="announcement-text">{{ section.settings.message }}</p>
  </div>
{% endif %}

{% schema %}
{
  "name": "Announcement Bar",
  "settings": [
    { "type": "checkbox", "id": "show_announcement", "label": "Show Announcement", "default": true },
    { "type": "text", "id": "message", "label": "Announcement Text", "default": "Free shipping on orders over $75!" },
    { "type": "color", "id": "bar_bg", "label": "Bar Background", "default": "#1e293b" },
    { "type": "color", "id": "bar_color", "label": "Text Color", "default": "#ffffff" }
  ]
}
{% endschema %}`,
              explanation: 'Configurable announcement bar with toggle checkbox and color controls.',
              lineByLine: [
                { line: '{% if section.settings.show_announcement %}', explanation: 'Conditional check toggled by Theme Editor checkbox.' }
              ]
            }
          ],
          commonMistakes: [
            'Forgetting {{ block.shopify_attributes }} on block parent containers. Without this, clicking on blocks in the Theme Editor will not highlight or jump to them in the sidebar.',
            'Invalid JSON in {% schema %}: trailing commas after the last property or unescaped quotes will cause theme compilation errors.',
            'Forgetting to include presets in the schema: sections without presets cannot be added to JSON templates via the "Add Section" button in the Customizer.'
          ],
          proTip: 'Always use `section.id` in CSS class names or element IDs (`id="banner-{{ section.id }}"`). When a merchant adds the same section multiple times to a page, this prevents ID collisions and style bleeding.',
          miniPractice: {
            question: 'What happens if a section lacks a "presets" array in its {% schema %}?',
            options: [
              'The section cannot be saved',
              'The section cannot be manually added as a new section by merchants in the Theme Customizer',
              'The section will not render HTML',
              'Liquid throws a syntax error'
            ],
            correctAnswer: 1,
            explanation: 'Sections require at least one preset in their schema to appear in the Customizer\'s "Add section" library.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Configurable Testimonial Card Section',
          instructions: 'Write a section schema with a section heading setting and a block type "testimonial" containing settings for quote text and author name. Render the blocks in a testimonial slider container.',
          starterCode: `<!-- Implement testimonial section and schema below -->`,
          solutionCode: `<section class="testimonials-section" id="testimonials-{{ section.id }}">
  <h2>{{ section.settings.heading }}</h2>
  <div class="testimonials-list">
    {% for block in section.blocks %}
      <blockquote class="testimonial-card" {{ block.shopify_attributes }}>
        <p class="quote">“{{ block.settings.quote }}”</p>
        <cite class="author">— {{ block.settings.author }}</cite>
      </blockquote>
    {% endfor %}
  </div>
</section>

{% schema %}
{
  "name": "Testimonials",
  "settings": [
    { "type": "text", "id": "heading", "label": "Heading", "default": "Customer Reviews" }
  ],
  "blocks": [
    {
      "type": "testimonial",
      "name": "Testimonial",
      "settings": [
        { "type": "textarea", "id": "quote", "label": "Customer Quote", "default": "Amazing quality!" },
        { "type": "text", "id": "author", "label": "Author Name", "default": "Jane Doe" }
      ]
    }
  ],
  "presets": [
    { "name": "Testimonials" }
  ]
}
{% endschema %}`
        }
      ],
      keyTakeaways: [
        'Sections are modular, configurable components stored in `sections/`.',
        '`{% schema %}` defines Theme Editor settings and block controls in JSON.',
        '`block.shopify_attributes` connects the DOM to the Theme Editor inspector.',
        '`section.id` guarantees unique element IDs and scoped CSS targeting.'
      ],
      summary: 'You have mastered Shopify section architecture, schema design, input types, dynamic blocks, and Theme Customizer integration.'
    }
  },

  // =========================================================================
  // MODULE 3: Snippets and Reusable Components
  // =========================================================================
  {
    id: 'shopify-int-03',
    orderIndex: 3,
    title: 'Module 3: Snippets and Reusable Components',
    description: 'Master modular component design with snippets and the render tag. Learn parameter passing, local scope isolation, product card snippets, and price formatters.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-int-snip', title: 'Shopify Render Tag Documentation', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/tags/theme-tags#render' }
    ],
    lessonContent: {
      overview: `### Snippets and Component-Driven Theme Engineering

**Snippets** are reusable chunks of Liquid code stored in the \`snippets/\` directory (e.g. \`product-card.liquid\`, \`price.liquid\`, \`icon-cart.liquid\`). They enforce the DRY (Don't Repeat Yourself) principle across your theme.

### 1. The \`render\` Tag vs Deprecated \`include\`
- **\`{% render 'snippet-name' %}\` (Modern Standard):**
  - **Isolated Scope:** The snippet does NOT inherit parent variables automatically. All required variables must be passed explicitly as arguments.
  - **High Performance:** Liquid compiles rendered snippets once and caches their execution tree, vastly speeding up page rendering.
  - **No Global Mutation:** Variables assigned inside a snippet do not leak or overwrite parent variables.
- **\`{% include 'snippet-name' %}\` (Deprecated):**
  - Inherited all parent variables globally, leading to naming collisions, hidden side effects, and slow rendering. **Do not use \`include\` in modern themes.**

### 2. Passing Parameters to Snippets
\`\`\`liquid
{% render 'product-card', 
  product_card_product: product, 
  show_vendor: true, 
  media_aspect_ratio: 'square' 
%}
\`\`\`

### 3. Iterating Over Snippets with \`for\`
You can render a snippet for every item in an array using the \`for ... as\` syntax:
\`\`\`liquid
{% render 'product-card' for collection.products as product %}
\`\`\`

### 4. Component Architecture Best Practices
- **Explicit Naming:** Name passed arguments clearly (e.g., \`product_card_product\` instead of generic \`p\`).
- **Defensive Defaults:** Use the \`default\` filter inside snippets to ensure graceful fallbacks if an argument is omitted.`,
      analogyHero: 'Think of a snippet like a specialized function in programming or a LEGO brick: you pass the exact materials into it, it builds the piece, and it doesn\'t mess up anything on the rest of your workbench.',
      objectives: [
        'Understand the architectural advantages of snippets and the render tag.',
        'Pass parameters and manage isolated variable scopes.',
        'Refactor repetitive markup into reusable micro-components.',
        'Use the render ... for ... as iteration shorthand.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: `{% render 'product-card', product: product, show_vendor: true %}

{% render 'price', price: product.price, compare_at_price: product.compare_at_price %}

{% render 'icon-cart', class: 'header-icon' %}

# Array iteration shorthand
{% render 'article-card' for blog.articles as article %}`,
      sections: [
        {
          id: 'sec-int-3-1',
          title: 'Reusable Snippet Architecture in Practice',
          difficulty: 'Intermediate',
          analogy: 'Using a price snippet everywhere is like having one master currency conversion calculator that everyone shares.',
          content: `### Hands-on Snippet Implementations

Let's examine three production snippets: a reusable product card, a price formatting component, and an SVG icon snippet.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'snippets/product-card.liquid',
              code: `{% comment %}
  @param product [Product]: The product drop to render
  @param show_vendor [Boolean]: Whether to display the vendor
  @param aspect_ratio [String]: 'square' or 'portrait'
{% endcomment %}

{% assign card_product = product %}
{% assign is_vendor_visible = show_vendor | default: false %}

<article class="card-component card--{{ aspect_ratio | default: 'square' }}">
  <div class="card-media-box">
    {% if card_product.featured_image != blank %}
      {{ card_product.featured_image | image_url: width: 500 | image_tag: loading: 'lazy', alt: card_product.title, class: 'card-img' }}
    {% endif %}
    {% if card_product.compare_at_price > card_product.price %}
      <span class="badge badge--sale">Sale</span>
    {% endif %}
  </div>

  <div class="card-info-box">
    {% if is_vendor_visible and card_product.vendor != blank %}
      <span class="card-vendor">{{ card_product.vendor }}</span>
    {% endif %}
    <a href="{{ card_product.url }}" class="card-title-link">
      <h3 class="card-title">{{ card_product.title }}</h3>
    </a>
    {% render 'price', price: card_product.price, compare_at_price: card_product.compare_at_price %}
  </div>
</article>`,
              explanation: 'Self-contained reusable product card snippet receiving parameters and invoking a sub-snippet for pricing.',
              lineByLine: [
                { line: '@param product [Product]: ...', explanation: 'Documentation comment specifying expected snippet parameters.' },
                { line: '{% assign is_vendor_visible = show_vendor | default: false %}', explanation: 'Applies safe default if argument is omitted.' },
                { line: '{% render \'price\', price: ... %}', explanation: 'Nests another snippet with isolated parameter passing.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'snippets/price.liquid',
              code: `{% comment %}
  Renders formatted pricing with sale calculations.
  @param price [Number]: Current price in cents
  @param compare_at_price [Number]: Original price in cents
{% endcomment %}

<div class="price-component">
  <span class="price-current font-mono font-bold">{{ price | default: 0 | money }}</span>
  {% if compare_at_price > price %}
    <s class="price-compare font-mono text-muted">{{ compare_at_price | money }}</s>
    <span class="price-badge-save">Save {{ compare_at_price | minus: price | money }}</span>
  {% endif %}
</div>`,
              explanation: 'Dedicated price snippet guaranteeing consistent pricing typography and comparison calculations across the entire theme.',
              lineByLine: [
                { line: '{{ price | default: 0 | money }}', explanation: 'Formats price safely with 0 fallback.' },
                { line: 'Save {{ compare_at_price | minus: price | money }}', explanation: 'Calculates dynamic savings.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'templates/featured-collection.liquid',
              code: `<section class="featured-collection-section">
  <h2>{{ collection.title }}</h2>
  <div class="product-grid">
    {% for product in collection.products limit: 8 %}
      {% render 'product-card', product: product, show_vendor: true, aspect_ratio: 'portrait' %}
    {% endfor %}
  </div>
</section>`,
              explanation: 'Section template rendering the product card snippet cleanly inside a loop.',
              lineByLine: [
                { line: '{% render \'product-card\', product: product, ... %}', explanation: 'Renders snippet with explicit arguments passed.' }
              ]
            }
          ],
          commonMistakes: [
            'Using {% include %} instead of {% render %}. `include` is deprecated and causes variable bleeding and performance bottlenecks.',
            'Expecting snippet variables to be accessible in the parent file after rendering. With `render`, snippets cannot mutate parent scope.',
            'Forgetting to pass required variables: calling {% render "product-card" %} without passing product: product will result in an empty card.'
          ],
          proTip: 'Document every snippet at the top using standard JSDoc-style Liquid comments (`@param name [Type]: Description`). This makes your codebase clean, professional, and easy for team members to maintain.',
          miniPractice: {
            question: 'Why does the render tag isolate variable scope compared to the deprecated include tag?',
            options: [
              'To prevent snippets from accidentally overwriting or reading parent template variables',
              'To make variables global across all pages',
              'To allow JavaScript to modify Liquid variables',
              'To store variables in browser localStorage'
            ],
            correctAnswer: 0,
            explanation: 'The render tag provides isolated scope, ensuring snippets only access explicitly passed parameters, preventing unexpected side effects.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Stock Badge Snippet',
          instructions: 'Create a snippet named `stock-badge.liquid` that accepts `available` (boolean) and `inventory` (number). If available, render a green "In Stock" badge; if inventory <= 3 and > 0, render "Low Stock: N left"; else render "Sold Out".',
          starterCode: `<!-- Create snippets/stock-badge.liquid below -->`,
          solutionCode: `{% comment %}
  @param available [Boolean]
  @param inventory [Number]
{% endcomment %}

<span class="stock-badge {% if available %}stock-badge--instock{% else %}stock-badge--soldout{% endif %}">
  {% if available %}
    {% if inventory <= 3 and inventory > 0 %}
      ⚠️ Low Stock: Only {{ inventory }} left!
    {% else %}
      ✓ In Stock
    {% endif %}
  {% else %}
    Sold Out
  {% endif %}
</span>`
        }
      ],
      keyTakeaways: [
        'Snippets live in `snippets/` and encapsulate reusable markup.',
        '`render` replaces `include` and enforces clean, isolated scope.',
        'Always pass required variables explicitly as key-value pairs.',
        'Document snippet parameters at the top of the file.'
      ],
      summary: 'You have mastered snippet architecture, the render tag, parameter passing, and modular theme component design.'
    }
  },

  // =========================================================================
  // MODULE 4: JSON Templates and Theme Architecture
  // =========================================================================
  {
    id: 'shopify-int-04',
    orderIndex: 4,
    title: 'Module 4: JSON Templates and Theme Architecture',
    description: 'Master Shopify Online Store 2.0 JSON templates (index.json, product.json, collection.json, page.json), template hierarchy, section groups, and layout files.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-int-json', title: 'Shopify JSON Templates Architecture', type: 'documentation', url: 'https://shopify.dev/docs/themes/architecture/templates/json-templates' }
    ],
    lessonContent: {
      overview: `### Online Store 2.0 & JSON Template Architecture

In Shopify Online Store 2.0 (OS 2.0), **JSON templates** replaced traditional static \`.liquid\` page templates. Instead of hardcoding HTML and Liquid inside \`product.liquid\`, pages are defined as structured **JSON files** (e.g. \`product.json\`, \`index.json\`).

### 1. How JSON Templates Work
A JSON template defines:
1. **Sections:** The list of section instances on that page, along with their unique keys, section types, and custom settings.
2. **Order:** An array specifying the visual rendering order of sections from top to bottom.

\`\`\`json
{
  "sections": {
    "main": {
      "type": "main-product",
      "settings": {}
    },
    "recommendations": {
      "type": "product-recommendations",
      "settings": {
        "heading": "You May Also Like"
      }
    }
  },
  "order": [
    "main",
    "recommendations"
  ]
}
\`\`\`

### 2. Benefits of JSON Templates
- **Sections Everywhere:** Merchants can add, remove, and reorder sections on *any* page (product pages, collection pages, blogs, CMS pages), not just the homepage.
- **Section Groups:** Header groups (\`sections/header-group.json\`) and footer groups (\`sections/footer-group.json\`) allow multi-section headers and footers across all templates.
- **Dynamic Blocks & App Blocks:** App developers can inject app blocks directly into supported JSON template sections.

### 3. Shopify Theme File Hierarchy
- \`layout/theme.liquid\`: The master HTML document shell containing \`{{ content_for_header }}\` and \`{{ content_for_layout }}\`.
- \`templates/index.json\`: Homepage composition.
- \`templates/product.json\`: Product details page.
- \`templates/collection.json\`: Collection catalog page.
- \`templates/cart.json\`: Cart page.
- \`templates/blog.json\` & \`templates/article.json\`: Blog news pages.
- \`templates/page.json\`: Standard CMS content pages.`,
      analogyHero: 'Think of `theme.liquid` like the outer picture frame. The JSON template is the track lighting system on the ceiling that lets you snap in different modular spotlight sections in any order you choose.',
      objectives: [
        'Understand the structure and specification of OS 2.0 JSON templates.',
        'Construct and modify product.json, collection.json, and index.json files.',
        'Understand section groups (header-group.json, footer-group.json).',
        'Design scalable theme architectures combining layout, templates, sections, and snippets.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: `// templates/product.json
{
  "sections": {
    "main": {
      "type": "main-product",
      "settings": {}
    },
    "reviews": {
      "type": "product-reviews",
      "settings": {
        "show_rating": true
      }
    }
  },
  "order": [
    "main",
    "reviews"
  ]
}`,
      sections: [
        {
          id: 'sec-int-4-1',
          title: 'JSON Templates & Template Composition in Practice',
          difficulty: 'Intermediate',
          analogy: 'A JSON template is like a playlist: it lists which songs (sections) to play and in what exact sequence.',
          content: `### Hands-on JSON Template Architectures

Let's examine how a production \`product.json\` template and \`header-group.json\` are structured to compose sections dynamically.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'templates/product.json',
              code: `{
  "sections": {
    "main": {
      "type": "main-product",
      "blocks": {
        "vendor": {
          "type": "vendor",
          "settings": {}
        },
        "title": {
          "type": "title",
          "settings": {}
        },
        "price": {
          "type": "price",
          "settings": {}
        },
        "variant_picker": {
          "type": "variant_picker",
          "settings": {
            "picker_type": "button"
          }
        },
        "buy_buttons": {
          "type": "buy_buttons",
          "settings": {
            "show_dynamic_checkout": true
          }
        }
      },
      "block_order": [
        "vendor",
        "title",
        "price",
        "variant_picker",
        "buy_buttons"
      ],
      "settings": {
        "enable_sticky_info": true
      }
    },
    "related": {
      "type": "product-recommendations",
      "settings": {
        "heading": "Related Products",
        "products_to_show": 4
      }
    }
  },
  "order": [
    "main",
    "related"
  ]
}`,
              explanation: 'Standard OS 2.0 product JSON template defining section blocks and visual rendering order.',
              lineByLine: [
                { line: '"type": "main-product"', explanation: 'References sections/main-product.liquid.' },
                { line: '"block_order": [ ... ]', explanation: 'Controls vertical block ordering inside the main product section.' },
                { line: '"order": [ "main", "related" ]', explanation: 'Controls vertical section hierarchy on the product page.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'layout/theme.liquid',
              code: `<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ page_title }} — {{ shop.name }}</title>
    
    {{ content_for_header }}
    
    {{ 'base.css' | asset_url | stylesheet_tag }}
    <script src="{{ 'global.js' | asset_url }}" defer></script>
  </head>
  <body class="template-{{ template.name }}">
    {% sections 'header-group' %}
    
    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
      {{ content_for_layout }}
    </main>
    
    {% sections 'footer-group' %}
  </body>
</html>`,
              explanation: 'Master theme layout shell injecting header groups, footer groups, and dynamic template content.',
              lineByLine: [
                { line: '{{ content_for_header }}', explanation: 'Mandatory hook injecting Shopify platform scripts, SEO metadata, and app assets.' },
                { line: '{% sections \'header-group\' %}', explanation: 'Renders the header section group.' },
                { line: '{{ content_for_layout }}', explanation: 'Dynamically outputs the current template\'s rendered sections.' }
              ]
            },
            {
              language: 'json',
              filename: 'sections/header-group.json',
              code: `{
  "name": "Header Group",
  "type": "header",
  "sections": {
    "announcement": {
      "type": "announcement-bar",
      "settings": {
        "show_announcement": true
      }
    },
    "header": {
      "type": "header",
      "settings": {
        "menu": "main-menu",
        "sticky_header": true
      }
    }
  },
  "order": [
    "announcement",
    "header"
  ]
}`,
              explanation: 'OS 2.0 header group composing announcement bar and main navigation header across all pages.',
              lineByLine: [
                { line: '"type": "header"', explanation: 'Declares this as a header-type section group.' }
              ]
            }
          ],
          commonMistakes: [
            'Editing generated JSON templates directly with syntax errors (missing commas, missing quotes) which disables the Theme Customizer.',
            'Removing {{ content_for_header }} or {{ content_for_layout }} from layout/theme.liquid. This breaks Shopify themes completely.',
            'Creating .liquid templates when JSON templates are required for sections everywhere functionality.'
          ],
          proTip: 'In OS 2.0 themes, keep your section `.liquid` files focused on UI logic, and let the `.json` templates dictate page composition and ordering.',
          miniPractice: {
            question: 'What is the primary purpose of the order array inside a JSON template?',
            options: [
              'Defines the sequence of customer orders in checkout',
              'Controls the visual top-to-bottom rendering order of sections on that page',
              'Sorts products alphabetically',
              'Orders images in the media gallery'
            ],
            correctAnswer: 1,
            explanation: 'The order array in a JSON template specifies the exact sequence in which sections are rendered on the page.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Design a Custom Landing Page JSON Template',
          instructions: 'Create a `page.landing.json` template that arranges three sections in order: `hero-banner`, `feature-grid`, and `newsletter-signup`.',
          starterCode: `// Create templates/page.landing.json below`,
          solutionCode: `{
  "sections": {
    "hero": {
      "type": "hero-banner",
      "settings": {}
    },
    "features": {
      "type": "feature-grid",
      "settings": {
        "columns": 3
      }
    },
    "newsletter": {
      "type": "newsletter-signup",
      "settings": {}
    }
  },
  "order": [
    "hero",
    "features",
    "newsletter"
  ]
}`
        }
      ],
      keyTakeaways: [
        'JSON templates allow merchants to add and reorder sections on any page.',
        'Templates define `sections`, `blocks`, and the `order` array.',
        '`theme.liquid` requires `{{ content_for_header }}` and `{{ content_for_layout }}`.',
        'Section groups manage global headers and footers modularly.'
      ],
      summary: 'You have mastered Online Store 2.0 JSON templates, section groups, and theme layout architecture.'
    }
  },

  // =========================================================================
  // MODULE 5: Metafields
  // =========================================================================
  {
    id: 'shopify-int-05',
    orderIndex: 5,
    title: 'Module 5: Metafields & Custom Structured Data',
    description: 'Learn Shopify Metafields, namespace/key architecture, product and collection metafields, typed values (text, number, boolean, URL, references), and the .value accessor.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-int-meta', title: 'Shopify Metafields Liquid Documentation', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/objects/metafield' }
    ],
    lessonContent: {
      overview: `### Extending Data Models with Shopify Metafields

Every Shopify store requires custom data attributes beyond basic titles and descriptions—such as garment care instructions, dimensions, downloadable PDF manuals, ingredients, or custom badge tags. **Metafields** provide structured custom data storage directly attached to products, collections, customers, orders, and shop settings.

### 1. Metafield Architecture: Namespace & Key
Metafields are identified by a **namespace** and a **key**:
\`\`\`liquid
{{ product.metafields.namespace.key.value }}
\`\`\`
For example, a product subtitle configured under the \`custom\` namespace with the key \`subtitle\` is accessed as:
\`\`\`liquid
{{ product.metafields.custom.subtitle.value }}
\`\`\`

### 2. The Critical Role of \`.value\`
In modern Shopify Liquid, accessing a metafield returns a **Metafield Drop**. To retrieve the actual parsed content (string, integer, boolean, image object, or product reference), you must append **\`.value\`**:
- \`product.metafields.custom.care_instructions.value\` -> Returns string text.
- \`product.metafields.custom.warranty_years.value\` -> Returns integer (e.g. \`3\`).
- \`product.metafields.custom.is_organic.value\` -> Returns boolean (\`true\`).

### 3. Supported Metafield Types
1. **Single Line Text / Multi-line Text:** Strings.
2. **Number (Integer / Decimal):** Numeric values for calculations.
3. **Boolean:** True/False switches.
4. **URL:** Web addresses.
5. **Color:** Hex color strings (\`#ff0000\`).
6. **File / Image Reference:** Returns a generic file or image object that can be passed to the \`image_url\` filter.
7. **Product / Collection Reference:** Returns full \`Product\` or \`Collection\` objects.
8. **List of Values:** Arrays of items that can be looped over with \`{% for item in metafield.value %}\`.`,
      analogyHero: 'Think of standard Shopify fields like the fixed blank lines on a driver\'s license (Name, DOB). Metafields are the custom endorsement stamps you can add to the back for motorcycles, commercial trucks, or scuba diving.',
      objectives: [
        'Understand metafield namespace and key definitions.',
        'Use .value to access typed metafield data safely.',
        'Render single-value, reference, and list-type metafields.',
        'Implement defensive checks to prevent rendering empty metafield containers.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: `{{ product.metafields.custom.subtitle.value }}

{% if product.metafields.custom.materials.value != blank %}
  <p>Materials: {{ product.metafields.custom.materials.value }}</p>
{% endif %}

# List-type Metafield Loop
{% for item in product.metafields.custom.highlights.value %}
  <li>✓ {{ item }}</li>
{% endfor %}`,
      sections: [
        {
          id: 'sec-int-5-1',
          title: 'Metafields Implementation in Practice',
          difficulty: 'Intermediate',
          analogy: 'Appending .value is like opening the sealed envelope to read the letter inside.',
          content: `### Hands-on Metafield Examples

Let's review practical examples demonstrating product subtitles, technical specifications, and file download links using metafields.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-product-subtitle.liquid',
              code: `<div class="product-header">
  <h1 class="product-title">{{ product.title }}</h1>
  {% if product.metafields.custom.subtitle.value != blank %}
    <p class="product-subtitle text-muted">
      {{ product.metafields.custom.subtitle.value | escape }}
    </p>
  {% endif %}
</div>`,
              explanation: 'Renders an optional product subtitle metafield with defensive blank check and escaping.',
              lineByLine: [
                { line: '{% if product.metafields.custom.subtitle.value != blank %}', explanation: 'Verifies the metafield is populated before rendering markup.' },
                { line: '{{ product.metafields.custom.subtitle.value | escape }}', explanation: 'Retrieves value and sanitizes output.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-specs-table.liquid',
              code: `<div class="specs-table-container">
  <h3>Technical Specifications</h3>
  <table class="specs-table">
    <tbody>
      {% if product.metafields.custom.material.value != blank %}
        <tr>
          <th>Material</th>
          <td>{{ product.metafields.custom.material.value }}</td>
        </tr>
      {% endif %}
      {% if product.metafields.custom.dimensions.value != blank %}
        <tr>
          <th>Dimensions</th>
          <td>{{ product.metafields.custom.dimensions.value }}</td>
        </tr>
      {% endif %}
      {% if product.metafields.custom.warranty_years.value != blank %}
        <tr>
          <th>Warranty</th>
          <td>{{ product.metafields.custom.warranty_years.value }} Year Limited Warranty</td>
        </tr>
      {% endif %}
    </tbody>
  </table>
</div>`,
              explanation: 'Builds a technical specification table dynamically from individual product metafield values.',
              lineByLine: [
                { line: '{{ product.metafields.custom.material.value }}', explanation: 'Outputs custom material attribute.' },
                { line: '{{ product.metafields.custom.warranty_years.value }}', explanation: 'Outputs numeric integer warranty duration.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-file-reference.liquid',
              code: `{% assign manual_file = product.metafields.custom.pdf_manual.value %}

{% if manual_file != blank %}
  <div class="product-manual-download">
    <a href="{{ manual_file.url }}" class="btn btn--download" target="_blank" rel="noopener">
      📄 Download User Manual (PDF)
    </a>
  </div>
{% endif %}`,
              explanation: 'Accesses a file-reference metafield and generates a secure external download link.',
              lineByLine: [
                { line: '{% assign manual_file = product.metafields.custom.pdf_manual.value %}', explanation: 'Resolves the file object from the metafield.' },
                { line: 'href="{{ manual_file.url }}"', explanation: 'Retrieves CDN URL of uploaded PDF asset.' }
              ]
            }
          ],
          commonMistakes: [
            'Forgetting .value: writing {{ product.metafields.custom.subtitle }} prints an unformatted drop object representation instead of the string.',
            'Assuming all products have the metafield populated. Never render wrapper HTML (like <table> or <div>) without checking if the metafield value != blank.',
            'Hardcoding namespace typos (e.g. custom vs my_fields).'
          ],
          proTip: 'For list-type metafields (e.g. `list.single_line_text_field`), iterate directly over `.value` with `{% for item in product.metafields.custom.features.value %}`.',
          miniPractice: {
            question: 'What is required to extract the actual data string from product.metafields.custom.badge?',
            options: [
              '.data',
              '.value',
              '.content',
              '.string'
            ],
            correctAnswer: 1,
            explanation: 'In Shopify Liquid, .value must be appended to access the typed payload of a metafield drop.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Care Instructions Accordion Item',
          instructions: 'Write a collapsible accordion item that checks for `product.metafields.custom.care_instructions.value`. If present, render the accordion container and the instructions text.',
          starterCode: `<!-- Implement care instructions accordion below -->`,
          solutionCode: `{% if product.metafields.custom.care_instructions.value != blank %}
  <details class="accordion-item">
    <summary class="accordion-header">
      <span>Care & Maintenance</span>
    </summary>
    <div class="accordion-content">
      {{ product.metafields.custom.care_instructions.value }}
    </div>
  </details>
{% endif %}`
        }
      ],
      keyTakeaways: [
        'Metafields store structured custom attributes using `namespace.key`.',
        'Always append `.value` to access typed data.',
        'Metafields can store text, numbers, booleans, files, URLs, and references.',
        'Always check `metafield.value != blank` before rendering wrapper HTML.'
      ],
      summary: 'You have mastered Shopify metafields, namespace architecture, typed value extraction, and defensive rendering.'
    }
  },

  // =========================================================================
  // MODULE 6: Images and Media
  // =========================================================================
  {
    id: 'shopify-int-06',
    orderIndex: 6,
    title: 'Module 6: Images and Media Optimization',
    description: 'Master responsive images with image_url and image_tag. Learn width/height parameters, aspect ratio control, alt text accessibility, srcset generation, and 3D/video media awareness.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-int-img', title: 'Shopify Image Filters Documentation', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/filters/media-filters' }
    ],
    lessonContent: {
      overview: `### Image Engineering, Responsive Media & Web Performance

Images represent the heaviest assets delivered on an ecommerce storefront. Proper image optimization is critical for fast page speed, high Core Web Vitals (LCP), and accessible shopping experiences.

### 1. The \`image_url\` Filter
The \`image_url\` filter transforms raw image objects into optimized CDN URLs:
\`\`\`liquid
{{ product.featured_image | image_url: width: 800 }}
\`\`\`
Parameters:
- \`width\`: Desired pixel width.
- \`height\`: Desired pixel height.
- \`crop\`: Crop alignment (\`'center'\`, \`'top'\`, \`'bottom'\`).
- \`format\`: Force output format (\`'pjpg'\`, \`'webp'\`).

### 2. The \`image_tag\` Filter
The \`image_tag\` filter automatically generates a complete, standards-compliant HTML \`<img>\` tag with responsive \`srcset\` and \`sizes\` attributes:
\`\`\`liquid
{{ product.featured_image | image_url: width: 800 | image_tag: 
  loading: 'lazy', 
  widths: '300, 600, 800, 1200', 
  alt: product.title, 
  class: 'responsive-product-img' 
}}
\`\`\`

### 3. Media Objects (Video, 3D Models, Images)
Shopify products support rich media drops through \`product.media\`:
- \`media.media_type\`: \`'image'\`, \`'video'\`, \`'external_video'\`, or \`'model'\`.
- \`media.preview_image\`: Fallback poster image.
- \`{{ media | media_tag }}\`: Generates appropriate \`<video>\`, \`<model-viewer>\`, or \`<img>\` tags.`,
      analogyHero: 'Think of `image_url` and `image_tag` like a tailor who measures the exact dimensions of the customer before cutting the fabric, ensuring zero wasted material.',
      objectives: [
        'Utilize image_url and image_tag for responsive image delivery.',
        'Configure lazy loading vs eager loading for Core Web Vitals optimization.',
        'Implement accessible alt text attributes.',
        'Handle multi-type product media (images, videos, 3D models).'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: `{{ product.featured_image | image_url: width: 800 | image_tag: 
  widths: '400, 600, 800, 1200',
  sizes: '(min-width: 1024px) 500px, 100vw',
  loading: 'lazy',
  alt: product.title 
}}`,
      sections: [
        {
          id: 'sec-int-6-1',
          title: 'Responsive Images & Media Galleries in Practice',
          difficulty: 'Intermediate',
          analogy: 'Using srcset is like giving the browser a menu of image sizes to choose from based on whether the customer is on a phone or a 4K monitor.',
          content: `### Hands-on Image & Media Implementations

Let's examine how to render responsive hero images, product gallery thumbnails, and multi-format media loops.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-responsive-image.liquid',
              code: `<div class="product-featured-media">
  {% if product.featured_image %}
    {{ product.featured_image | image_url: width: 1000 | image_tag: 
      widths: '375, 550, 750, 1000, 1500',
      sizes: '(min-width: 990px) 50vw, 100vw',
      loading: 'eager',
      fetchpriority: 'high',
      alt: product.featured_image.alt | default: product.title,
      class: 'main-product-image'
    }}
  {% endif %}
</div>`,
              explanation: 'Optimized hero product image with eager loading, high fetch priority, and responsive srcset.',
              lineByLine: [
                { line: 'widths: \'375, 550, 750, 1000, 1500\'', explanation: 'Tells Shopify CDN to generate 5 resized variants for different screen densities.' },
                { line: 'loading: \'eager\', fetchpriority: \'high\'', explanation: 'Optimizes Largest Contentful Paint (LCP) by prioritizing hero asset download.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-media-gallery.liquid',
              code: `<div class="product-media-gallery">
  {% for media in product.media %}
    <div class="media-item media-type-{{ media.media_type }}" data-media-id="{{ media.id }}">
      {% case media.media_type %}
        {% when 'image' %}
          {{ media | image_url: width: 800 | image_tag: loading: 'lazy', alt: media.alt | default: product.title }}
        {% when 'video' %}
          {{ media | video_tag: controls: true, image_size: '800x' }}
        {% when 'model' %}
          {{ media | model_viewer_tag }}
        {% else %}
          {{ media | media_tag }}
      {% endcase %}
    </div>
  {% endfor %}
</div>`,
              explanation: 'Multi-type product media gallery rendering images, native MP4 videos, and 3D AR models.',
              lineByLine: [
                { line: '{% for media in product.media %}', explanation: 'Iterates through all uploaded media assets.' },
                { line: '{% when \'video\' %}', explanation: 'Renders native HTML5 video player with controls.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-thumbnail-strip.liquid',
              code: `<div class="thumbnail-strip">
  {% for image in product.images %}
    <button type="button" class="thumb-btn {% if forloop.first %}is-active{% endif %}" data-target-id="{{ image.id }}">
      {{ image | image_url: width: 150, height: 150, crop: 'center' | image_tag: alt: image.alt | default: 'Product Thumbnail', class: 'thumb-img' }}
    </button>
  {% endfor %}
</div>`,
              explanation: 'Cropped 150x150 square thumbnail strip for product gallery navigation.',
              lineByLine: [
                { line: 'image_url: width: 150, height: 150, crop: \'center\'', explanation: 'Generates cropped square thumbnail on CDN.' }
              ]
            }
          ],
          commonMistakes: [
            'Using hardcoded <img> tags without width and height: causes cumulative layout shift (CLS) penalties.',
            'Setting loading="lazy" on the primary hero image of a product page, delaying LCP.',
            'Omitting meaningful alt text attributes, creating accessibility barriers for screen reader users.'
          ],
          proTip: 'Always use `loading: "eager"` and `fetchpriority="high"` for the primary above-the-fold image, and `loading: "lazy"` for all subsequent gallery images and product grid cards.',
          miniPractice: {
            question: 'What is the primary benefit of the image_tag filter compared to writing a raw <img> HTML tag?',
            options: [
              'It automatically generates responsive srcset widths, dimensions, and CDN URLs',
              'It converts PNGs into vector SVGs',
              'It deletes uncompressed files',
              'It encrypts the image URL'
            ],
            correctAnswer: 0,
            explanation: 'image_tag outputs a complete, responsive HTML image element with automated width/height attributes and CDN srcset.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Accessible Product Image with Fallback',
          instructions: 'Write a snippet that renders `product.featured_image` with width 600, lazy loading, and an alt attribute defaulting to the product title if the image alt text is blank.',
          starterCode: `<!-- Render accessible product image below -->`,
          solutionCode: `{% if product.featured_image %}
  {{ product.featured_image | image_url: width: 600 | image_tag: 
    loading: 'lazy', 
    alt: product.featured_image.alt | default: product.title, 
    class: 'featured-image' 
  }}
{% else %}
  {{ 'product-1' | placeholder_svg_tag: 'placeholder-svg' }}
{% endif %}`
        }
      ],
      keyTakeaways: [
        '`image_url` transforms CDN URLs with width, height, and cropping.',
        '`image_tag` generates standards-compliant responsive `<img>` elements.',
        'Use eager loading for above-the-fold images and lazy loading for offscreen cards.',
        'Handle multi-type media (video, 3D models) using `media.media_type`.'
      ],
      summary: 'You have mastered Shopify responsive images, CDN media filters, performance optimization, and accessible media galleries.'
    }
  },

  // =========================================================================
  // MODULE 7: Advanced Filters and Data Transformation
  // =========================================================================
  {
    id: 'shopify-int-07',
    orderIndex: 7,
    title: 'Module 7: Advanced Filters & Data Transformation',
    description: 'Master advanced collection filters (where, map, sort, uniq, compact, concat, split), text sanitization (escape, strip_html, url_encode), date formatting, and JSON serialization.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-int-filt', title: 'Advanced Liquid Filters Guide', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/filters' }
    ],
    lessonContent: {
      overview: `### Advanced Data Transformation & Safe Sanitization

Professional theme development requires manipulating complex data structures on the server—filtering arrays of objects, joining datasets, formatting dates for international audiences, and sanitizing user-controlled inputs against security vulnerabilities.

### 1. Advanced Array Transformation Filters
- **\`where: <property>, <value>\`**: Filters an array of objects by matching a property value:
  \`{% assign available_variants = product.variants | where: 'available', true %}\`
- **\`map: <property>\`**: Extracts a single property from every object in an array:
  \`{% assign all_skus = product.variants | map: 'sku' %}\`
- **\`uniq\`**: Removes duplicate values from an array.
- **\`compact\`**: Strips \`nil\` values from an array.
- **\`concat: <other_array>\`**: Combines two arrays into one.
- **\`split: <delimiter>\`**: Splits a string into an array of substrings.

### 2. Output Sanitization & Security Filters
- **\`escape\`**: Converts HTML characters (\`<, >, &, ", '\`) into HTML entities. Always use on search queries, customer names, and URL parameters to prevent Cross-Site Scripting (XSS).
- **\`strip_html\`**: Removes all HTML tags entirely.
- **\`url_encode\`**: Encodes strings for query parameters (\`"blue shirt" | url_encode\` -> \`"blue+shirt"\`).

### 3. Date and JSON Serialization
- **\`date: <format>\`**: Formats timestamp strings:
  \`{{ article.published_at | date: '%B %d, %Y' }}\` -> "October 15, 2026"
- **\`json\`**: Serializes Liquid objects and arrays into valid JSON for JavaScript consumption.`,
      analogyHero: 'Think of advanced filters like a database query engine in miniature: `where` is your WHERE clause, `map` is your SELECT column, and `escape` is your parameterized security shield.',
      objectives: [
        'Filter and transform arrays of objects using where, map, uniq, and concat.',
        'Sanitize user-provided text using escape, strip_html, and url_encode.',
        'Format timestamps cleanly for international locales.',
        'Serialize Liquid objects to JSON for JavaScript hydration.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: `{% assign available_items = collection.products | where: 'available', true %}
{% assign variant_titles = product.variants | map: 'title' | join: ', ' %}

{{ search.terms | escape }}
{{ article.published_at | date: '%b %d, %Y' }}
<script>
  const productData = {{ product | json }};
</script>`,
      sections: [
        {
          id: 'sec-int-7-1',
          title: 'Advanced Filtering and Safe Sanitization in Practice',
          difficulty: 'Intermediate',
          analogy: 'Escaping search terms before printing is like sterilizing medical equipment before use.',
          content: `### Hands-on Advanced Filter Implementations

Let's review practical examples filtering in-stock variants, generating safe search result headings, and formatting localized article publish dates.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-where-map.liquid',
              code: `{% assign in_stock_variants = product.variants | where: 'available', true %}
{% assign variant_names = in_stock_variants | map: 'title' %}

<div class="available-options-summary">
  <p>Available in {{ in_stock_variants.size }} variations:</p>
  <span class="pill-list">
    {{ variant_names | join: ' • ' }}
  </span>
</div>`,
              explanation: 'Uses where to isolate available variants, map to extract their titles, and join to format the list.',
              lineByLine: [
                { line: '{% assign in_stock_variants = product.variants | where: \'available\', true %}', explanation: 'Filters variants array where available property equals true.' },
                { line: '{% assign variant_names = in_stock_variants | map: \'title\' %}', explanation: 'Extracts title strings into a flat array.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-safe-search.liquid',
              code: `<div class="search-header">
  <h1 class="search-title">
    Search Results for: 
    <span class="search-query">
      “{{ search.terms | escape }}”
    </span>
  </h1>
  <p class="search-count">{{ search.results_count }} items found</p>
</div>`,
              explanation: 'Safely escapes merchant- or user-entered search queries to prevent XSS injection attacks.',
              lineByLine: [
                { line: '“{{ search.terms | escape }}”', explanation: 'Converts potential HTML/script tags into harmless text entities.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-date-and-json.liquid',
              code: `<article class="article-entry">
  <time datetime="{{ article.published_at | date: '%Y-%m-%d' }}">
    Published on {{ article.published_at | date: '%B %d, %Y' }}
  </time>
</article>

<script type="application/json" id="ProductJson-{{ product.id }}">
  {{ product | json }}
</script>`,
              explanation: 'Outputs semantic ISO 8601 date, localized display date, and embeds JSON schema for client-side JavaScript.',
              lineByLine: [
                { line: '{{ article.published_at | date: \'%Y-%m-%d\' }}', explanation: 'Standard ISO date format for search crawlers.' },
                { line: '{{ product | json }}', explanation: 'Serializes entire product drop into valid JSON.' }
              ]
            }
          ],
          commonMistakes: [
            'Printing raw user inputs (search.terms, cart.attributes) without the | escape filter: creates severe XSS vulnerabilities.',
            'Using where on arrays of simple strings. where only operates on arrays of objects by checking property keys.',
            'Forgetting % in date formatting strings (e.g. date: "Y-m-d" instead of date: "%Y-%m-%d").'
          ],
          proTip: 'Embed product metadata into `<script type="application/json">` blocks using `{{ product | json }}`. Client-side JavaScript can parse it instantly without making extra AJAX API requests.',
          miniPractice: {
            question: 'What does product.variants | map: "sku" return?',
            options: [
              'An array of all SKU strings extracted from each variant',
              'A filtered list of available variants',
              'A map location of the store',
              'An integer count'
            ],
            correctAnswer: 0,
            explanation: 'The map filter extracts the specified property from every object in an array and returns a flat array of those values.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Extract Unique Vendor List from Collection',
          instructions: 'Take `collection.products`, extract an array of all vendor names using `map`, remove duplicates with `uniq`, and join them with commas.',
          starterCode: `<!-- Extract unique vendor list below -->`,
          solutionCode: `{% assign all_vendors = collection.products | map: 'vendor' | uniq %}

<div class="vendor-filter-list">
  <strong>Featured Brands:</strong>
  <span>{{ all_vendors | join: ', ' }}</span>
</div>`
        }
      ],
      keyTakeaways: [
        '`where` filters object arrays by property value; `map` extracts specific attributes.',
        '`uniq` and `compact` clean arrays of duplicates and nil entries.',
        '`escape` and `strip_html` are mandatory for sanitizing dynamic text.',
        '`date` formats timestamps; `json` serializes objects for JavaScript.'
      ],
      summary: 'You have mastered advanced Liquid array transformations, security escaping, and date/JSON formatting.'
    }
  },

  // =========================================================================
  // MODULE 8: Forms, Cart, and Product Interaction
  // =========================================================================
  {
    id: 'shopify-int-08',
    orderIndex: 8,
    title: 'Module 8: Forms, Cart, and Product Interaction',
    description: 'Master advanced product forms, line item properties (engraving, custom uploads), cart attributes, selling plans (subscriptions), and AJAX cart drawer architectures.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-int-cart', title: 'Shopify Line Item Properties & Cart Form Reference', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/objects/line_item' }
    ],
    lessonContent: {
      overview: `### Advanced Cart Architecture & Custom Line Item Properties

Modern ecommerce requires rich interactions: customized product personalizations (monograms, gift wrapping), order notes, subscription plans, and asynchronous slide-out cart drawers.

### 1. Line Item Properties (\`properties[Name]\`)
Line item properties allow customers to attach custom data to a specific purchased product item (e.g. custom text engraving, gift recipient names):
\`\`\`liquid
<input type="text" name="properties[Engraving Text]" placeholder="Enter initials">
\`\`\`
- If the property name begins with an underscore (\`properties[_secret]\`), Shopify hides it from the customer receipt while preserving it for backend fulfillment apps.

### 2. Cart Attributes (\`attributes[Name]\`)
Cart attributes attach custom data to the **overall order**, rather than an individual line item (e.g. delivery date, gift notes, customer survey responses):
\`\`\`liquid
<textarea name="attributes[Delivery Instructions]"></textarea>
\`\`\`

### 3. Selling Plans & Subscription Models
Shopify supports recurring subscriptions via **Selling Plans**:
- \`product.selling_plan_groups\`: Array of available subscription groups.
- Product forms can submit \`<input type="hidden" name="selling_plan" value="{{ plan.id }}">\` to add recurring subscriptions to the cart.

### 4. Cart Drawer Architecture
A modern cart drawer renders \`cart.items\` inside an off-canvas drawer that opens when items are added asynchronously via the Shopify Cart AJAX API (\`/cart/add.js\`, \`/cart/change.js\`).`,
      analogyHero: 'Think of line item properties like asking the barista to write your name and "extra shot of caramel" on your specific cup, while a cart attribute is asking for the entire order to be packed in a cardboard tray.',
      objectives: [
        'Implement custom line item properties in product purchase forms.',
        'Capture order-level notes using cart attributes.',
        'Integrate subscription selling plans into product forms.',
        'Design semantic markup for asynchronous cart drawers.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `{% form 'product', product %}
  <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}">
  
  # Custom Line Item Property
  <label for="monogram">Custom Engraving:</label>
  <input type="text" id="monogram" name="properties[Engraving]">
  
  <button type="submit">Add to Cart</button>
{% endform %}`,
      sections: [
        {
          id: 'sec-int-8-1',
          title: 'Line Item Properties & Cart Customization in Practice',
          difficulty: 'Intermediate',
          analogy: 'Line item properties travel with that exact product line all the way to the packing station in the warehouse.',
          content: `### Hands-on Line Item Properties & Cart Forms

Let's review complete implementations for personalized product options, cart attributes, and cart line property rendering.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-custom-engraving-form.liquid',
              code: `{% form 'product', product, class: 'product-customization-form' %}
  <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}">

  <div class="customization-field">
    <label for="engraving-text-{{ product.id }}">Custom Monogram / Engraving (Max 12 Chars):</label>
    <input 
      type="text" 
      id="engraving-text-{{ product.id }}" 
      name="properties[Custom Monogram]" 
      maxlength="12" 
      placeholder="e.g. H.K."
      class="input-text"
    >
  </div>

  <div class="customization-field">
    <label class="checkbox-label">
      <input type="checkbox" name="properties[Include Gift Box]" value="Yes">
      Include Premium Gift Packaging (+ $5.00)
    </label>
  </div>

  <button type="submit" class="btn btn--primary">Add Personalized Item</button>
{% endform %}`,
              explanation: 'Product form capturing custom text engraving and gift box options via line item properties.',
              lineByLine: [
                { line: 'name="properties[Custom Monogram]"', explanation: 'Attaches custom text string to this line item.' },
                { line: 'name="properties[Include Gift Box]"', explanation: 'Attaches gift box selection.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-cart-item-properties.liquid',
              code: `<div class="cart-line-properties">
  {% for property in item.properties %}
    {% assign first_char = property.first | slice: 0 %}
    {% unless property.last == blank or first_char == '_' %}
      <div class="property-entry text-xs">
        <span class="property-label">{{ property.first }}:</span>
        <span class="property-value font-medium">{{ property.last }}</span>
      </div>
    {% endunless %}
  {% endfor %}
</div>`,
              explanation: 'Renders custom line item properties inside the cart view, skipping internal underscore properties.',
              lineByLine: [
                { line: '{% for property in item.properties %}', explanation: 'Iterates through all custom properties attached to the cart line item.' },
                { line: 'first_char == \'_\'', explanation: 'Skips private properties starting with an underscore.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-order-attributes.liquid',
              code: `<div class="cart-order-notes">
  <label for="cart-special-instructions">Order Instructions / Delivery Notes:</label>
  <textarea 
    id="cart-special-instructions" 
    name="note" 
    rows="3" 
    placeholder="Gate code, delivery preferences..."
  >{{ cart.note }}</textarea>

  <div class="attribute-group mt-3">
    <label for="delivery-date">Preferred Delivery Date:</label>
    <input 
      type="date" 
      id="delivery-date" 
      name="attributes[Preferred Delivery Date]" 
      value="{{ cart.attributes['Preferred Delivery Date'] }}"
    >
  </div>
</div>`,
              explanation: 'Captures standard order note and custom order attribute for preferred delivery date.',
              lineByLine: [
                { line: 'name="note"', explanation: 'Updates standard cart.note property.' },
                { line: 'name="attributes[Preferred Delivery Date]"', explanation: 'Stores custom attribute on the overall order.' }
              ]
            }
          ],
          commonMistakes: [
            'Using properties instead of properties[Property Name]. Properties must use associative bracket naming.',
            'Forgetting to display item.properties in cart templates, leaving shoppers confused about whether their custom text was saved.',
            'Allowing customers to submit empty text strings without checking property.last != blank.'
          ],
          proTip: 'Prefix internal line item properties with an underscore (`properties[_bundle_id]`). Shopify automatically hides underscore properties from order emails and checkout pages while keeping them accessible in Liquid and webhooks.',
          miniPractice: {
            question: 'What is the effect of naming a line item property name="properties[_internal_id]"?',
            options: [
              'It encrypts the customer password',
              'It attaches the property to the cart item while hiding it from customer-facing checkout receipts',
              'It deletes the item from cart',
              'It applies a discount'
            ],
            correctAnswer: 1,
            explanation: 'Properties starting with an underscore are hidden by Shopify from customer receipts while remaining accessible to theme code and apps.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Gift Message Line Item Field',
          instructions: 'Build a product form snippet that contains a required variant ID input, a text input for `properties[Gift Message]`, and a submit button.',
          starterCode: `<!-- Implement gift message form below -->`,
          solutionCode: `{% form 'product', product %}
  <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}">
  <div class="form-field">
    <label for="gift-msg-{{ product.id }}">Personal Gift Message:</label>
    <textarea id="gift-msg-{{ product.id }}" name="properties[Gift Message]" rows="2"></textarea>
  </div>
  <button type="submit" class="btn">Add to Cart with Message</button>
{% endform %}`
        }
      ],
      keyTakeaways: [
        '`properties[Name]` attaches custom data to individual cart line items.',
        '`attributes[Name]` attaches custom data to the overall order.',
        'Prefixing property names with an underscore (`_`) hides them from customer receipts.',
        'Always render `item.properties` in cart drawers and cart templates for transparency.'
      ],
      summary: 'You have mastered product line item properties, order attributes, and cart interaction architecture.'
    }
  },

  // =========================================================================
  // MODULE 9: Customer, Blog, Page, and Article Templates
  // =========================================================================
  {
    id: 'shopify-int-09',
    orderIndex: 9,
    title: 'Module 9: Customer, Blog, Page, and Article Templates',
    description: 'Learn specialized templates: blog directory listings, article objects (author, published_at, content), customer account portals, order tables, and standard CMS pages.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-int-blog', title: 'Shopify Blog & Article Object Reference', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/objects/article' }
    ],
    lessonContent: {
      overview: `### Content & Customer Portal Template Architecture

A complete Shopify theme extends beyond product catalogs to provide rich content marketing via blogs, informational pages, and self-service customer account portals.

### 1. The \`blog\` and \`article\` Objects
- **\`blog\` Object:** Represents a blog category (e.g., "News", "Tutorials"):
  - \`blog.title\`: Blog category name.
  - \`blog.articles\`: Array of article objects.
  - \`blog.articles_count\`: Total number of published posts.
  - \`blog.all_tags\`: List of tags across all articles in this blog.
- **\`article\` Object:** Represents an individual blog post:
  - \`article.title\`: Post headline.
  - \`article.content\`: Full HTML post body.
  - \`article.excerpt\`: Summary teaser text.
  - \`article.author\`: Author name.
  - \`article.published_at\`: Timestamp of publication.
  - \`article.image\`: Featured article image.
  - \`article.tags\`: Array of article tags.
  - \`article.comments\`: User comments (if enabled).

### 2. The \`page\` Object
Standard CMS pages (About Us, Contact, FAQ, Privacy Policy):
- \`page.title\`: Page headline.
- \`page.content\`: Rich HTML body configured in Shopify Admin.
- \`page.url\`: Storefront URL.

### 3. Customer Account Portal Templates
When customer accounts are enabled, Shopify utilizes specialized templates:
- \`customers/account.liquid\`: Account dashboard showing default address and recent orders table.
- \`customers/order.liquid\`: Order detail view showing line items, tracking numbers, taxes, and fulfillment status.
- \`customers/addresses.liquid\`: Address book manager.`,
      analogyHero: 'Think of the blog like a company magazine: the `blog` is the publication series, and each `article` is a feature story written by a staff author.',
      objectives: [
        'Build structured blog directory grids and single article reading templates.',
        'Render CMS page content cleanly.',
        'Construct customer order history tables and account overview portals.',
        'Implement pagination across large blog listings.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: `{% paginate blog.articles by 6 %}
  {% for article in blog.articles %}
    <h2>{{ article.title }}</h2>
    <p>{{ article.excerpt | default: article.content | strip_html | truncatewords: 30 }}</p>
  {% endfor %}
  {{ paginate | default_pagination }}
{% endpaginate %}`,
      sections: [
        {
          id: 'sec-int-9-1',
          title: 'Blog, Article, and Customer Templates in Practice',
          difficulty: 'Intermediate',
          analogy: 'Using article.excerpt | default: article.content ensures your preview card always has a summary even if the author forgot to write a separate excerpt.',
          content: `### Hands-on Content & Portal Implementations

Let's review practical components for blog listing grids, article reading templates, and customer order history tables.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-blog-grid.liquid',
              code: `<div class="blog-container">
  <header class="blog-header">
    <h1>{{ blog.title }}</h1>
  </header>

  {% paginate blog.articles by 6 %}
    <div class="article-grid">
      {% for article in blog.articles %}
        <article class="article-card">
          {% if article.image %}
            <a href="{{ article.url }}" class="article-card__image-link">
              {{ article.image | image_url: width: 600 | image_tag: loading: 'lazy', alt: article.title }}
            </a>
          {% endif %}
          <div class="article-card__content">
            <span class="article-date">{{ article.published_at | date: '%B %d, %Y' }}</span>
            <a href="{{ article.url }}">
              <h2 class="article-title">{{ article.title }}</h2>
            </a>
            <p class="article-excerpt">
              {{ article.excerpt | default: article.content | strip_html | truncatewords: 25 }}
            </p>
            <a href="{{ article.url }}" class="read-more-link">Read Article →</a>
          </div>
        </article>
      {% endfor %}
    </div>

    {% if paginate.pages > 1 %}
      <div class="pagination-wrapper">
        {{ paginate | default_pagination }}
      </div>
    {% endif %}
  {% endpaginate %}
</div>`,
              explanation: 'Paginated blog directory template rendering article cards with dates, excerpts, and thumbnail images.',
              lineByLine: [
                { line: '{% paginate blog.articles by 6 %}', explanation: 'Paginates blog articles in pages of 6.' },
                { line: '{{ article.excerpt | default: article.content | ... }}', explanation: 'Uses excerpt or falls back to truncated content.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-article-template.liquid',
              code: `<article class="article-single" role="article">
  <header class="article-hero">
    <h1 class="article-title">{{ article.title }}</h1>
    <div class="article-meta">
      <span class="author">By {{ article.author }}</span>
      <time datetime="{{ article.published_at | date: '%Y-%m-%d' }}">
        {{ article.published_at | date: '%B %d, %Y' }}
      </time>
    </div>
  </header>

  {% if article.image %}
    <div class="article-featured-image">
      {{ article.image | image_url: width: 1200 | image_tag: alt: article.title, class: 'hero-img' }}
    </div>
  {% endif %}

  <div class="article-body-content rte">
    {{ article.content }}
  </div>
</article>`,
              explanation: 'Single article reading view with metadata, author attribution, and rich text content.',
              lineByLine: [
                { line: 'class="article-body-content rte"', explanation: 'RTE (Rich Text Editor) class standard for styled user-generated HTML.' },
                { line: '{{ article.content }}', explanation: 'Outputs full article HTML body.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-customer-orders-table.liquid',
              code: `<div class="customer-account-dashboard">
  <h2>Order History</h2>
  {% if customer.orders.size > 0 %}
    <table class="orders-table" role="table">
      <thead>
        <tr>
          <th>Order</th>
          <th>Date</th>
          <th>Payment</th>
          <th>Fulfillment</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {% for order in customer.orders %}
          <tr>
            <td><a href="{{ order.customer_url }}">{{ order.name }}</a></td>
            <td>{{ order.created_at | date: '%b %d, %Y' }}</td>
            <td><span class="status status--{{ order.financial_status }}">{{ order.financial_status_label }}</span></td>
            <td><span class="status status--{{ order.fulfillment_status }}">{{ order.fulfillment_status_label }}</span></td>
            <td><strong>{{ order.total_price | money }}</strong></td>
          </tr>
        {% endfor %}
      </tbody>
    </table>
  {% else %}
    <p>You haven't placed any orders yet.</p>
  {% endif %}
</div>`,
              explanation: 'Customer account order history table displaying order IDs, status labels, and totals.',
              lineByLine: [
                { line: '{% for order in customer.orders %}', explanation: 'Iterates through all past orders placed by authenticated customer.' },
                { line: '{{ order.financial_status_label }}', explanation: 'Localized payment status string (e.g. "Paid", "Refunded").' }
              ]
            }
          ],
          commonMistakes: [
            'Forgetting the rte CSS class on article.content and page.content. Shopify Admin HTML uses headings, blockquotes, and lists that require RTE stylesheet rules to render properly.',
            'Not wrapping blog.articles in a {% paginate %} block: without paginate, blog.articles is capped at a maximum of 50 items.',
            'Assuming customer is defined outside of authenticated customer templates.'
          ],
          proTip: 'Always apply the `.rte` class to containers rendering `article.content` or `page.content`. This ensures tables, blockquotes, bullet lists, and embedded YouTube videos from the Shopify admin rich text editor format cleanly.',
          miniPractice: {
            question: 'Which property provides the full HTML body content of a blog post?',
            options: [
              'article.body',
              'article.content',
              'article.html',
              'article.text'
            ],
            correctAnswer: 1,
            explanation: 'article.content returns the complete HTML rich text content of a blog post.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Article Card Snippet with Author & Date',
          instructions: 'Build an article card component that renders the article featured image (width: 400), title linked to `article.url`, author name, and published date formatted as "MMM DD, YYYY".',
          starterCode: `<!-- Implement article card snippet below -->`,
          solutionCode: `<article class="article-card">
  {% if article.image %}
    <a href="{{ article.url }}">
      {{ article.image | image_url: width: 400 | image_tag: alt: article.title, loading: 'lazy' }}
    </a>
  {% endif %}
  <div class="article-card__meta">
    <span>By {{ article.author }}</span> • 
    <time>{{ article.published_at | date: '%b %d, %Y' }}</time>
  </div>
  <a href="{{ article.url }}">
    <h3>{{ article.title }}</h3>
  </a>
</article>`
        }
      ],
      keyTakeaways: [
        '`blog.articles` provides access to post listings; `article` represents individual stories.',
        'Always wrap `blog.articles` in `{% paginate %}` for scalability.',
        '`page.content` renders standard CMS pages.',
        '`customer.orders` powers account dashboards and self-service order tracking.'
      ],
      summary: 'You have mastered blog listings, article views, CMS page rendering, and customer account dashboard architecture.'
    }
  },

  // =========================================================================
  // MODULE 10: Pagination, Search, and Filtering Concepts
  // =========================================================================
  {
    id: 'shopify-int-10',
    orderIndex: 10,
    title: 'Module 10: Pagination, Search, and Filtering Concepts',
    description: 'Learn collection and search pagination with paginate, search object (search.terms, search.results, result types), predictive search concepts, and URL query parameter filtering.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-int-search', title: 'Shopify Search & Pagination Reference', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/objects/search' }
    ],
    lessonContent: {
      overview: `### Search Architecture, Pagination & Storefront Filtering

As product catalogs grow, fast search and structured pagination become critical for customer product discovery and conversion.

### 1. The \`paginate\` Tag
Shopify enforces a limit of 50 items per loop iteration on resources like \`collection.products\`, \`blog.articles\`, and \`search.results\`. To handle large catalogs, wrap your loops in the \`paginate\` tag:
\`\`\`liquid
{% paginate collection.products by 12 %}
  {% for product in collection.products %}
    <!-- Render card -->
  {% endfor %}
  
  {{ paginate | default_pagination }}
{% endpaginate %}
\`\`\`
- \`paginate.page_size\`: Number of items per page.
- \`paginate.current_page\`: Active page number.
- \`paginate.pages\`: Total number of pages.
- \`paginate.items\`: Total number of items across all pages.
- \`paginate.previous\` & \`paginate.next\`: Navigation link objects.

### 2. The \`search\` Object
The \`search\` object represents active search queries:
- \`search.performed\`: Boolean (\`true\` if a search query was executed).
- \`search.terms\`: The raw search query string entered by the user.
- \`search.results\`: Array of matched items (can include products, articles, and pages).
- \`search.results_count\`: Total number of matching results.
- \`search.types\`: Allowed resource types (e.g. \`?type=product\`).

### 3. Storefront Faceted Filtering (\`collection.filters\`)
Shopify provides native storefront filtering:
- \`collection.filters\`: Array of filter groups (Price, Availability, Brand, Custom Metafields).
- \`filter.values\`: Active filter options and checkboxes that update collection parameters via URL queries.`,
      analogyHero: 'Think of pagination like turning pages in a printed catalog: instead of dumping 1,000 products on a single table, you present 24 products per page with clear next and back tabs.',
      objectives: [
        'Implement server-side pagination with the paginate tag.',
        'Build custom pagination controls using paginate.previous, paginate.next, and paginate.parts.',
        'Construct search results templates with safe query escaping.',
        'Understand predictive search and storefront filtering concepts.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: `{% paginate search.results by 12 %}
  {% if search.performed %}
    <h2>Results for "{{ search.terms | escape }}" ({{ search.results_count }})</h2>
    {% for item in search.results %}
      <!-- Render product, article, or page -->
    {% endfor %}
  {% endif %}
  {{ paginate | default_pagination }}
{% endpaginate %}`,
      sections: [
        {
          id: 'sec-int-10-1',
          title: 'Pagination and Search Results in Practice',
          difficulty: 'Intermediate',
          analogy: 'Using search.performed is like checking if someone asked a question before trying to give an answer.',
          content: `### Hands-on Search and Pagination Implementations

Let's review practical templates for paginated search results, custom pagination buttons, and result type filtering.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-search-results.liquid',
              code: `<div class="search-page-container">
  <form action="{{ routes.search_url }}" method="get" role="search" class="search-form">
    <input 
      type="search" 
      name="q" 
      value="{{ search.terms | escape }}" 
      placeholder="Search products, articles..."
      aria-label="Search site"
    >
    <input type="hidden" name="type" value="product">
    <button type="submit" class="btn btn--search">Search</button>
  </form>

  {% if search.performed %}
    {% paginate search.results by 12 %}
      <div class="search-results-summary">
        <h2>{{ search.results_count }} Results for “{{ search.terms | escape }}”</h2>
      </div>

      <div class="search-results-grid">
        {% for item in search.results %}
          {% if item.object_type == 'product' %}
            {% render 'product-card', product: item %}
          {% endif %}
        {% else %}
          <p class="no-results">No matches found. Try different search keywords.</p>
        {% endfor %}
      </div>

      {% if paginate.pages > 1 %}
        <div class="pagination-controls">
          {{ paginate | default_pagination }}
        </div>
      {% endif %}
    {% endpaginate %}
  {% endif %}
</div>`,
              explanation: 'Comprehensive search template with product-only restriction, sanitized query heading, and pagination.',
              lineByLine: [
                { line: '<input type="hidden" name="type" value="product">', explanation: 'Restricts search results to product drops only.' },
                { line: '{% if search.performed %}', explanation: 'Checks if visitor submitted a query.' },
                { line: '{% if item.object_type == \'product\' %}', explanation: 'Verifies result type before rendering product card.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-custom-pagination.liquid',
              code: `{% if paginate.pages > 1 %}
  <nav class="custom-pagination" aria-label="Pagination">
    {% if paginate.previous %}
      <a href="{{ paginate.previous.url }}" class="pagination-btn prev-btn" aria-label="Previous page">
        ← Previous
      </a>
    {% endif %}

    <span class="pagination-status">
      Page {{ paginate.current_page }} of {{ paginate.pages }}
    </span>

    {% if paginate.next %}
      <a href="{{ paginate.next.url }}" class="pagination-btn next-btn" aria-label="Next page">
        Next →
      </a>
    {% endif %}
  </nav>
{% endif %}`,
              explanation: 'Custom accessible pagination controller showing previous/next buttons and page count indicator.',
              lineByLine: [
                { line: '{% if paginate.previous %}', explanation: 'Renders back button if a previous page exists.' },
                { line: 'Page {{ paginate.current_page }} of {{ paginate.pages }}', explanation: 'Outputs current page position.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-collection-filters.liquid',
              code: `<aside class="facets-sidebar" aria-label="Collection Filters">
  {% for filter in collection.filters %}
    <div class="filter-group">
      <h4 class="filter-heading">{{ filter.label }}</h4>
      <ul class="filter-options">
        {% for value in filter.values %}
          <li class="filter-item">
            <label class="filter-checkbox-label">
              <input 
                type="checkbox" 
                name="{{ value.param_name }}" 
                value="{{ value.value }}"
                {% if value.active %}checked{% endif %}
                {% if value.count == 0 and value.active == false %}disabled{% endif %}
              >
              <span>{{ value.label }} ({{ value.count }})</span>
            </label>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</aside>`,
              explanation: 'Renders storefront faceted filter checkboxes based on collection metadata and price ranges.',
              lineByLine: [
                { line: '{% for filter in collection.filters %}', explanation: 'Loops through active filter groups.' },
                { line: 'value.active', explanation: 'Checks if this filter option is currently applied in the URL query.' }
              ]
            }
          ],
          commonMistakes: [
            'Attempting to paginate more than 50 items per page. Shopify limits pagination to a maximum of 50 items per page for performance reasons.',
            'Forgetting {% if search.performed %}, causing empty "No results found" messages when visitors first open the search page.',
            'Using paginate inside snippets. The paginate tag MUST be opened and closed in the same template or section file.'
          ],
          proTip: 'Use `item.object_type` inside a `search.results` loop to determine whether an individual match is a `product`, `article`, or `page`, rendering specialized cards for each.',
          miniPractice: {
            question: 'What is the maximum number of items allowed per page inside a Liquid {% paginate %} tag?',
            options: [
              '50',
              '100',
              '250',
              'Unlimited'
            ],
            correctAnswer: 0,
            explanation: 'Shopify strictly limits the paginate size parameter to a maximum of 50 items per page.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Custom Paginated Collection Grid',
          instructions: 'Wrap a `collection.products` loop in a pagination block of 8 items per page, and output custom previous/next navigation buttons.',
          starterCode: `<!-- Implement paginated collection grid below -->`,
          solutionCode: `{% paginate collection.products by 8 %}
  <div class="product-grid">
    {% for product in collection.products %}
      {% render 'product-card', product: product %}
    {% endfor %}
  </div>

  {% if paginate.pages > 1 %}
    <div class="pagination">
      {% if paginate.previous %}<a href="{{ paginate.previous.url }}">Previous</a>{% endif %}
      <span>{{ paginate.current_page }} / {{ paginate.pages }}</span>
      {% if paginate.next %}<a href="{{ paginate.next.url }}">Next</a>{% endif %}
    </div>
  {% endif %}
{% endpaginate %}`
        }
      ],
      keyTakeaways: [
        '`paginate` splits large collections across numbered pages (max 50 items).',
        '`search.performed` verifies if a search query was submitted.',
        '`search.terms` must always be sanitized with `| escape`.',
        '`collection.filters` powers native storefront faceted filtering.'
      ],
      summary: 'You have mastered Liquid pagination architecture, search result handling, and storefront filtering.'
    }
  },

  // =========================================================================
  // MODULE 11: Theme Settings and Customization
  // =========================================================================
  {
    id: 'shopify-int-11',
    orderIndex: 11,
    title: 'Module 11: Theme Settings and Customization',
    description: 'Master global theme settings (settings_schema.json), typography and color palettes, spacing tokens, and conditional theme styling via settings.liquid.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-int-settings', title: 'Shopify Settings Schema Reference', type: 'documentation', url: 'https://shopify.dev/docs/themes/architecture/config/settings-schema-json' }
    ],
    lessonContent: {
      overview: `### Global Theme Settings & Customization Architecture

While section settings customize individual page sections, **global theme settings** define site-wide design tokens: brand color palettes, typography font families, container widths, social media links, and checkout branding.

### 1. The \`config/settings_schema.json\` File
Located in the \`config/\` directory, \`settings_schema.json\` defines the global settings sidebar tabs in the Shopify Theme Customizer:
\`\`\`json
[
  {
    "name": "Colors",
    "settings": [
      {
        "type": "color",
        "id": "color_primary",
        "label": "Primary Brand Color",
        "default": "#3b82f6"
      },
      {
        "type": "color",
        "id": "color_background",
        "label": "Page Background Color",
        "default": "#ffffff"
      }
    ]
  },
  {
    "name": "Typography",
    "settings": [
      {
        "type": "font_picker",
        "id": "font_heading",
        "label": "Heading Font",
        "default": "inter_n7"
      }
    ]
  }
]
\`\`\`

### 2. Accessing Global Settings via \`settings\` Object
Any global setting defined in \`settings_schema.json\` is accessible across **every Liquid file** in your theme via the global \`settings\` object:
- \`{{ settings.color_primary }}\` -> \`"#3b82f6"\`
- \`{{ settings.social_twitter_link }}\` -> \`"https://x.com/skillora"\`

### 3. Dynamic CSS Variables via Liquid
A standard architectural pattern in modern Shopify themes is declaring CSS Custom Properties in \`layout/theme.liquid\` or an inline stylesheet:
\`\`\`liquid
<style>
  :root {
    --color-primary: {{ settings.color_primary }};
    --color-bg: {{ settings.color_background }};
    --font-heading-family: {{ settings.font_heading.family }}, {{ settings.font_heading.fallback_families }};
  }
</style>
\`\`\``,
      analogyHero: 'Think of global theme settings like the master style guide of a company: it sets the official logo, corporate hex colors, and standard font, so every branch office looks identical.',
      objectives: [
        'Understand the structure of config/settings_schema.json and settings_data.json.',
        'Access global settings anywhere in theme Liquid via the settings object.',
        'Inject dynamic CSS variables powered by merchant Theme Editor choices.',
        'Configure font_picker and color_background setting types.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: `// config/settings_schema.json
[
  {
    "name": "Branding",
    "settings": [
      { "type": "color", "id": "brand_color", "label": "Brand Color", "default": "#2563eb" }
    ]
  }
]

# Using global setting in Liquid
<div style="background-color: {{ settings.brand_color }};">`,
      sections: [
        {
          id: 'sec-int-11-1',
          title: 'Global Settings & CSS Custom Properties in Practice',
          difficulty: 'Intermediate',
          analogy: 'Defining CSS variables from settings is like setting a master thermostat that controls the temperature in every room.',
          content: `### Hands-on Theme Settings Implementations

Let's examine how to configure global settings and translate them into site-wide CSS tokens and social icons.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'theme-css-variables.liquid',
              code: `{% style %}
  :root {
    --color-brand-primary: {{ settings.color_primary | default: '#3b82f6' }};
    --color-bg-base: {{ settings.color_bg | default: '#ffffff' }};
    --color-text-main: {{ settings.color_text | default: '#0f172a' }};
    --page-max-width: {{ settings.page_width | default: 1200 }}px;
  }

  body {
    background-color: var(--color-bg-base);
    color: var(--color-text-main);
  }

  .btn-brand {
    background-color: var(--color-brand-primary);
    color: #ffffff;
  }
{% endstyle %}`,
              explanation: 'Translates global theme settings into CSS custom properties inside an accessible {% style %} block.',
              lineByLine: [
                { line: '{% style %}', explanation: 'Shopify tag that injects CSS and automatically strips whitespace.' },
                { line: '--color-brand-primary: {{ settings.color_primary ... }}', explanation: 'Binds merchant customizer color to CSS variable.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'social-icons.liquid',
              code: `<div class="social-links-bar">
  {% if settings.social_facebook_link != blank %}
    <a href="{{ settings.social_facebook_link }}" target="_blank" rel="noopener" aria-label="Facebook">
      <span class="icon">📘</span>
    </a>
  {% endif %}
  {% if settings.social_instagram_link != blank %}
    <a href="{{ settings.social_instagram_link }}" target="_blank" rel="noopener" aria-label="Instagram">
      <span class="icon">📸</span>
    </a>
  {% endif %}
  {% if settings.social_twitter_link != blank %}
    <a href="{{ settings.social_twitter_link }}" target="_blank" rel="noopener" aria-label="Twitter / X">
      <span class="icon">🐦</span>
    </a>
  {% endif %}
</div>`,
              explanation: 'Renders social media icons conditionally based on global settings URLs.',
              lineByLine: [
                { line: '{% if settings.social_facebook_link != blank %}', explanation: 'Only renders social icon if merchant entered a link in Theme Settings.' }
              ]
            },
            {
              language: 'json',
              filename: 'config/settings_schema.json',
              code: `[
  {
    "name": "Brand Colors",
    "settings": [
      {
        "type": "color",
        "id": "color_primary",
        "label": "Primary Accent Color",
        "default": "#2563eb"
      },
      {
        "type": "color",
        "id": "color_bg",
        "label": "Background Color",
        "default": "#f8fafc"
      }
    ]
  },
  {
    "name": "Social Media Links",
    "settings": [
      {
        "type": "url",
        "id": "social_instagram_link",
        "label": "Instagram URL"
      },
      {
        "type": "url",
        "id": "social_facebook_link",
        "label": "Facebook URL"
      }
    ]
  }
]`,
              explanation: 'Defines two settings groups in the Theme Customizer sidebar: Brand Colors and Social Media.',
              lineByLine: [
                { line: '"name": "Brand Colors"', explanation: 'Creates accordion tab in Theme Customizer.' }
              ]
            }
          ],
          commonMistakes: [
            'Confusing section.settings with settings. `section.settings` is local to the active section file; `settings` is global across the entire theme.',
            'Hardcoding colors directly in CSS files instead of using CSS custom properties powered by settings.',
            'Modifying settings_data.json directly without backing up merchant settings.'
          ],
          proTip: 'Use `{% style %} ... {% endstyle %}` instead of raw `<style>` tags when injecting dynamic Liquid styles. Shopify automatically minifies the CSS inside `{% style %}` blocks.',
          miniPractice: {
            question: 'What is the difference between section.settings and settings in Liquid?',
            options: [
              'section.settings is scoped only to that section; settings is global across the entire theme',
              'settings is only for customer accounts',
              'section.settings is deprecated',
              'They are completely identical'
            ],
            correctAnswer: 0,
            explanation: 'section.settings accesses values configured for that specific section instance, while settings accesses site-wide global values.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Configurable Container Width Wrapper',
          instructions: 'Create a dynamic CSS snippet that sets the maximum width of `.container` to `settings.container_max_width` (with fallback to 1200px) and centers it with auto margins.',
          starterCode: `<!-- Implement dynamic container style below -->`,
          solutionCode: `{% style %}
  .container {
    max-width: {{ settings.container_max_width | default: 1200 }}px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
{% endstyle %}`
        }
      ],
      keyTakeaways: [
        '`config/settings_schema.json` defines global Theme Customizer controls.',
        '`settings.<id>` accesses global values in every theme template.',
        'Use `{% style %}` to declare CSS custom properties from theme settings.',
        'Global settings maintain consistent branding and design tokens.'
      ],
      summary: 'You have mastered global theme settings, schema definitions, design tokens, and dynamic CSS styling.'
    }
  },

  // =========================================================================
  // MODULE 12: Accessibility and SEO in Liquid Themes
  // =========================================================================
  {
    id: 'shopify-int-12',
    orderIndex: 12,
    title: 'Module 12: Accessibility and SEO in Liquid Themes',
    description: 'Master WCAG accessibility compliance (semantic HTML, alt text, focus management, ARIA landmarks) and technical ecommerce SEO (dynamic meta tags, canonical URLs, JSON-LD structured data).',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-int-seo', title: 'Shopify SEO & Accessibility Guide', type: 'documentation', url: 'https://shopify.dev/docs/themes/best-practices/accessibility' }
    ],
    lessonContent: {
      overview: `### Accessibility (a11y) & Search Engine Optimization (SEO)

A professional Shopify theme must be accessible to all customers (including those using screen readers, keyboard-only navigation, and high-contrast modes) and structured for maximum visibility on Google and other search engines.

### 1. Web Accessibility (WCAG 2.1 AA) in Liquid
- **Semantic Structure:** Use appropriate HTML5 tags: \`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`, \`<section>\`, \`<footer>\`.
- **Heading Hierarchy:** Maintain strict sequential heading levels (only one \`<h1>\` per page, followed by \`<h2>\`, \`<h3>\`). Never skip levels for styling.
- **Meaningful Alt Text:** Provide descriptive alt text on product images:
  \`{{ product.featured_image | image_url: width: 600 | image_tag: alt: product.featured_image.alt | default: product.title }}\`
- **Accessible Buttons & Links:** Interactive elements must have visible text or \`aria-label\` (e.g. icon-only cart buttons).
- **Focus Management:** Ensure keyboard tab navigation is visible and skip-to-content links are present.

### 2. Technical Ecommerce SEO with Liquid
- **Dynamic Meta Titles & Descriptions:**
  \`<title>{{ page_title }} | {{ shop.name }}</title>\`
  \`<meta name="description" content="{{ page_description | escape }}">\`
- **Canonical URLs:** Prevent duplicate content penalties on paginated pages and collection URLs:
  \`<link rel="canonical" href="{{ canonical_url }}">\`
- **JSON-LD Structured Data:** Embed schema.org markup (Product, Organization, BreadcrumbList) for Google rich snippets.`,
      analogyHero: 'Think of semantic HTML and SEO like road signage and wheelchair ramps: clear signage helps search engine delivery trucks find your store, while accessible ramps ensure every customer can enter comfortably.',
      objectives: [
        'Enforce WCAG 2.1 AA accessibility standards across Liquid templates.',
        'Implement dynamic meta title, description, and canonical tags.',
        'Construct JSON-LD structured data for product rich snippets.',
        'Ensure proper heading hierarchy and accessible interactive elements.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `<link rel="canonical" href="{{ canonical_url }}">
<title>{{ page_title }}{% if current_page != 1 %} — Page {{ current_page }}{% endif %} | {{ shop.name }}</title>

# Product JSON-LD Schema
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": {{ product.title | json }},
  "offers": {
    "@type": "Offer",
    "price": "{{ product.selected_or_first_available_variant.price | divided_by: 100.0 }}",
    "priceCurrency": "{{ shop.currency }}"
  }
}
</script>`,
      sections: [
        {
          id: 'sec-int-12-1',
          title: 'Accessible Markup and JSON-LD SEO in Practice',
          difficulty: 'Intermediate',
          analogy: 'Adding JSON-LD structured data is like filling out an official passport application that search bots can verify instantly.',
          content: `### Hands-on SEO & Accessibility Implementations

Let's review practical templates for dynamic head metadata, accessible icon buttons, and Product JSON-LD structured data.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-head-seo.liquid',
              code: `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <title>
    {{ page_title }}
    {% if current_page != 1 %} — Page {{ current_page }}{% endif %}
    {% unless page_title contains shop.name %} | {{ shop.name }}{% endunless %}
  </title>

  {% if page_description %}
    <meta name="description" content="{{ page_description | escape }}">
  {% endif %}

  <link rel="canonical" href="{{ canonical_url }}">
  
  <!-- Open Graph Social Metadata -->
  <meta property="og:site_name" content="{{ shop.name }}">
  <meta property="og:title" content="{{ page_title | escape }}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{{ canonical_url }}">
</head>`,
              explanation: 'SEO-optimized <head> metadata with dynamic page numbers, canonical URL, and Open Graph tags.',
              lineByLine: [
                { line: '<link rel="canonical" href="{{ canonical_url }}">', explanation: 'Establishes the authoritative URL for search indexing.' },
                { line: '{{ page_description | escape }}', explanation: 'Safely escapes merchant-entered meta descriptions.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-product-json-ld.liquid',
              code: `<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": {{ product.title | json }},
  "image": [
    {{ product.featured_image | image_url: width: 1200 | prepend: "https:" | json }}
  ],
  "description": {{ product.description | strip_html | truncate: 300 | json }},
  "sku": {{ product.selected_or_first_available_variant.sku | json }},
  "brand": {
    "@type": "Brand",
    "name": {{ product.vendor | json }}
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": {{ shop.currency | json }},
    "price": "{{ product.selected_or_first_available_variant.price | divided_by: 100.00 }}",
    "availability": "https://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}",
    "url": {{ product.url | prepend: shop.url | json }}
  }
}
</script>`,
              explanation: 'Schema.org JSON-LD microdata empowering Google Search rich snippets with live pricing and availability.',
              lineByLine: [
                { line: '"price": "{{ product.selected_or_first_available_variant.price | divided_by: 100.00 }}"', explanation: 'Converts cents to standard decimal currency string.' },
                { line: '"availability": "https://schema.org/..."', explanation: 'Dynamic in-stock vs out-of-stock schema URL.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-accessible-icon-button.liquid',
              code: `<button 
  type="button" 
  class="btn-icon-cart" 
  aria-label="Shopping Cart containing {{ cart.item_count }} items"
  aria-haspopup="dialog"
  aria-expanded="false"
>
  <span class="icon" aria-hidden="true">🛒</span>
  <span class="visually-hidden">View Shopping Bag</span>
  <span class="badge" aria-hidden="true">{{ cart.item_count }}</span>
</button>`,
              explanation: 'Accessible icon-only button with aria-label, aria-hidden decoration icons, and visually hidden text.',
              lineByLine: [
                { line: 'aria-label="Shopping Cart containing ..."', explanation: 'Provides clear context to screen readers.' },
                { line: 'aria-hidden="true"', explanation: 'Hides decorative visual emoji from assistive technologies.' }
              ]
            }
          ],
          commonMistakes: [
            'Having multiple <h1> tags on a single page: every page should have exactly one <h1> representing the primary topic.',
            'Hardcoding canonical URLs instead of using {{ canonical_url }}, breaking pagination indexing.',
            'Creating buttons with only icons and no text or aria-label: screen readers will announce "Button" with no purpose.'
          ],
          proTip: 'Use `<span class="visually-hidden">` (styled with `position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0);`) to provide assistive text for screen readers without altering visual layout.',
          miniPractice: {
            question: 'What is the purpose of the canonical_url object in Shopify?',
            options: [
              'Identifies the preferred canonical URL to prevent duplicate content indexing in search engines',
              'Creates an admin login link',
              'Encodes passwords',
              'Calculates taxes'
            ],
            correctAnswer: 0,
            explanation: 'canonical_url returns the definitive URL for the current page, ensuring search engines index the authoritative version.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Accessible Skip-to-Content Navigation Link',
          instructions: 'Write an accessible "Skip to content" link placed at the very top of `theme.liquid` that targets `#MainContent` and is hidden visually until focused by keyboard Tab.',
          starterCode: `<!-- Implement skip to content link below -->`,
          solutionCode: `<a class="skip-to-content-link visually-hidden-focusable" href="#MainContent">
  Skip to main content
</a>`
        }
      ],
      keyTakeaways: [
        'Semantic HTML and heading hierarchies are essential for WCAG compliance.',
        'Use `canonical_url`, dynamic `<title>`, and meta descriptions for SEO.',
        'JSON-LD structured data provides search engine rich snippets.',
        'Ensure all interactive elements have accessible names and labels.'
      ],
      summary: 'You have mastered Shopify theme accessibility (WCAG 2.1 AA), structured metadata, and technical ecommerce SEO.'
    }
  },

  // =========================================================================
  // MODULE 13: Debugging, Performance, and Code Quality
  // =========================================================================
  {
    id: 'shopify-int-13',
    orderIndex: 13,
    title: 'Module 13: Debugging, Performance & Code Quality',
    description: 'Learn systematic Liquid debugging workflows, handling nil/blank values defensively, eliminating expensive nested loops, theme linting, and performance benchmarking.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-int-perf', title: 'Shopify Theme Performance Best Practices', type: 'documentation', url: 'https://shopify.dev/docs/themes/best-practices/performance' }
    ],
    lessonContent: {
      overview: `### Performance Engineering, Systematic Debugging & Theme QA

Slow themes hurt search engine rankings and directly reduce merchant revenue. Master developers write lean, defensive Liquid that renders instantly on the server and executes smoothly in the browser.

### 1. Systematic Debugging Workflows
When a theme component breaks or renders empty output:
1. **Reproduce & Isolate:** Locate the specific section or snippet responsible.
2. **Inspect Object Context:** Check if the required object exists in this template context using \`{{ object | json }}\`.
3. **Verify Tag Termination:** Ensure all \`{% if %}\`, \`{% for %}\`, and \`{% form %}\` tags have matching closures.
4. **Check for Nil/Blank Values:** Apply defensive fallback filters (\`default\`, \`blank\` checks).

### 2. Eliminating Expensive Liquid Loops (O(N²) Complexity)
A major performance bottleneck in themes is **nested collection loops**:
\`\`\`liquid
<!-- ❌ INEFFICIENT (Repeats 50x50 = 2,500 operations on server) -->
{% for product in collection.products %}
  {% for other_product in collections['all'].products %}
    {% if other_product.tags contains product.vendor %}
      <!-- Match -->
    {% endif %}
  {% endfor %}
{% endfor %}
\`\`\`
- **Optimization Solution:** Use the \`where\` or \`map\` filters to pre-filter arrays, or rely on Shopify Product Recommendations APIs instead of brute-force Liquid iteration.

### 3. Image Optimization & Lazy Loading Rules
- Set \`loading: "eager"\` ONLY for the primary hero image (LCP).
- Set \`loading: "lazy"\` for all other images.
- Always specify \`width\` and \`height\` dimensions or use \`image_tag\` to eliminate Cumulative Layout Shift (CLS).

### 4. Code Quality & Maintainability Standards
- Use consistent 2-space indentation.
- Document snippets with parameter definitions.
- Keep sections and snippets modular and focused on a single responsibility.`,
      analogyHero: 'Think of Liquid performance optimization like streamlining a factory assembly line: eliminating redundant passes and keeping parts within arm\'s reach cuts production time in half.',
      objectives: [
        'Systematically debug broken Liquid templates and identify context errors.',
        'Refactor inefficient nested loops to minimize server rendering overhead.',
        'Apply Core Web Vitals optimizations for LCP, FID, and CLS.',
        'Adhere to professional Shopify theme engineering standards.'
      ],
      estimatedTime: '45 mins',
      syntaxGuide: `{% comment %} Defensive nil handling {% endcomment %}
{% if product and product.featured_image %}
  {{ product.featured_image | image_url: width: 600 | image_tag: loading: 'lazy' }}
{% endif %}

# Efficient pre-filtered array
{% assign sale_items = collection.products | where: 'compare_at_price_max', product.price %}`,
      sections: [
        {
          id: 'sec-int-13-1',
          title: 'Performance Refactoring and Debugging in Practice',
          difficulty: 'Intermediate',
          analogy: 'Refactoring an O(N²) loop to an efficient filter is like looking up a phone number in an index instead of calling every person in the city.',
          content: `### Hands-on Performance Refactoring and Fixes

Let's review before-and-after examples resolving broken object context, unclosed tags, and inefficient loops.`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'example-1-loop-optimization.liquid',
              code: `{% comment %}
  BEFORE (Inefficient): Looping over all products repeatedly.
  AFTER (Optimized): Pre-filtering in-stock items with where filter.
{% endcomment %}

{% assign in_stock_products = collection.products | where: 'available', true %}

<div class="in-stock-grid">
  {% for product in in_stock_products limit: 6 %}
    {% render 'product-card', product: product %}
  {% else %}
    <p>No in-stock items available right now.</p>
  {% endfor %}
</div>`,
              explanation: 'Refactors brute-force inner loop iteration into a fast, pre-filtered array query.',
              lineByLine: [
                { line: '{% assign in_stock_products = collection.products | where: \'available\', true %}', explanation: 'Filters collection in one native C-level operation.' },
                { line: '{% for product in in_stock_products limit: 6 %}', explanation: 'Iterates cleanly over pre-filtered items.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-2-defensive-nil-handling.liquid',
              code: `{% comment %}
  Fixing potential nil crash on missing metafield or unauthenticated customer.
{% endcomment %}

<div class="member-rewards-panel">
  {% if customer %}
    <h3>Member Tier: {{ customer.metafields.loyalty.tier.value | default: 'Bronze' }}</h3>
    <p>Points Balance: {{ customer.metafields.loyalty.points.value | default: 0 }}</p>
  {% else %}
    <h3>Join Skillora Rewards</h3>
    <p>Sign in to view your loyalty status.</p>
  {% endif %}
</div>`,
              explanation: 'Defensive architecture with defaults preventing nil exceptions.',
              lineByLine: [
                { line: '{{ customer.metafields.loyalty.tier.value | default: \'Bronze\' }}', explanation: 'Provides safe fallback string if loyalty tier is not set.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'example-3-fixing-broken-schema.liquid',
              code: `{% comment %}
  Fixed schema: Valid JSON with properly closed braces and no trailing commas.
{% endcomment %}

{% schema %}
{
  "name": "Featured Promotion",
  "settings": [
    {
      "type": "text",
      "id": "promo_heading",
      "label": "Promotion Heading",
      "default": "Flash Sale"
    },
    {
      "type": "checkbox",
      "id": "enable_timer",
      "label": "Show Countdown Timer",
      "default": true
    }
  ],
  "presets": [
    {
      "name": "Featured Promotion"
    }
  ]
}
{% endschema %}`,
              explanation: 'Clean, validated section schema conforming to Shopify OS 2.0 specifications.',
              lineByLine: [
                { line: '"name": "Featured Promotion"', explanation: 'Valid JSON schema with presets.' }
              ]
            }
          ],
          commonMistakes: [
            'Executing deep nested loops over large collections, causing server render timeouts.',
            'Neglecting to test templates with zero products or missing images.',
            'Leaving syntax errors in schema JSON blocks, breaking the Theme Customizer.'
          ],
          proTip: 'Use Shopify Theme Check (the official linter) to catch deprecated tags, missing assets, unclosed tags, and translation issues before deploying to production.',
          miniPractice: {
            question: 'Why are excessive nested loops considered a serious performance issue in Liquid?',
            options: [
              'They cause quadratic O(N²) rendering work on the server, significantly increasing page load times (TTFB)',
              'They create duplicate products in the database',
              'They change customer passwords',
              'They break SSL certificates'
            ],
            correctAnswer: 0,
            explanation: 'Nested loops multiply iteration cycles exponentially, delaying server response time and hurting SEO rankings.'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Defensive Product Price Badge Refactor',
          instructions: 'Refactor a snippet that takes a `product` object: check that `product` is not nil, verify `product.price` is defined, and render a formatted price with a safe "$0.00" fallback.',
          starterCode: `<!-- Implement defensive price badge below -->`,
          solutionCode: `{% if product %}
  <div class="price-badge">
    <span>{{ product.price | default: 0 | money }}</span>
  </div>
{% endif %}`
        }
      ],
      keyTakeaways: [
        'Systematic debugging involves isolating context, verifying tag closures, and inspecting drops with `| json`.',
        'Eliminate nested loops using `where` and `map`.',
        'Optimize Core Web Vitals with appropriate image loading strategies.',
        'Use defensive nil handling and fallbacks throughout your codebase.'
      ],
      summary: 'You have mastered Liquid performance engineering, systematic debugging, defensive programming, and code quality assurance.'
    }
  },

  // =========================================================================
  // MODULE 14: Intermediate Project
  // =========================================================================
  {
    id: 'shopify-int-14',
    orderIndex: 14,
    title: 'Module 14: Intermediate Project: Custom Shopify Theme Experience',
    description: 'Build a professional custom Shopify product and theme experience featuring JSON templates, reusable snippets, custom sections with schema and blocks, variants, metafields, responsive media, cart drawer integration, search, accessibility, and SEO.',
    status: 'locked',
    requiresQuiz: false, // Project submission
    xpReward: 400,
    level: 'intermediate',
    resources: [
      { id: 'res-int-proj', title: 'Intermediate Capstone Project Specification', type: 'documentation', url: 'https://shopify.dev/docs/themes/getting-started' }
    ],
    lessonContent: {
      overview: `### Intermediate Project: Professional Custom Shopify Theme Experience

In this comprehensive milestone project, you will build a complete, modular Shopify storefront component integrating all 13 Intermediate Level concepts into a production-ready theme architecture.

### Project Deliverable Requirements:
Your solution must implement all core intermediate features:
1. **JSON Template Architecture**: Structured section composition.
2. **Reusable Snippets**: Modular product cards and price snippets utilizing \`{% render %}\`.
3. **Custom Section & Schema**: Configurable section with text, color, image, and range settings.
4. **Dynamic Section Blocks**: Configurable blocks with \`block.shopify_attributes\`.
5. **Product Variants**: Default variant resolution and variant option selectors.
6. **Metafields Integration**: Rendering product metafield attributes with \`.value\`.
7. **Responsive Media**: Utilizing \`image_url\` and \`image_tag\` with srcset and lazy loading.
8. **Collection Products**: Filtered collection product grid.
9. **Cart Interaction**: Add-to-cart form with line item properties.
10. **Navigation**: Dropdown menu integration.
11. **Search**: Sanitized search results handling.
12. **Blog Component**: Article card previews.
13. **Accessibility**: Semantic HTML, heading hierarchy, alt text, ARIA attributes.
14. **SEO Metadata**: Canonical link, meta title/description, JSON-LD structured data.
15. **Defensive Liquid**: Nil checks, default fallbacks, and error prevention.`,
      analogyHero: 'Think of this project like architecting a modern flagship retail flagship store: the blueprint (JSON template), the modular shelving (sections & blocks), the interactive kiosks (variant selectors & cart forms), and the signage (SEO & a11y) are all perfectly aligned.',
      objectives: [
        'Synthesize intermediate theme architecture into a complete storefront project.',
        'Implement OS 2.0 sections, schema, blocks, snippets, and metafields.',
        'Adhere to WCAG 2.1 AA accessibility and technical SEO best practices.',
        'Validate performance and defensive coding standards.'
      ],
      estimatedTime: '75 mins',
      syntaxGuide: `<!-- Intermediate Project Architecture Blueprint -->
{% schema %}
{
  "name": "Custom Product Showcase",
  "settings": [ ... ],
  "blocks": [ ... ],
  "presets": [ { "name": "Default" } ]
}
{% endschema %}`,
      sections: [
        {
          id: 'sec-int-14-1',
          title: 'Intermediate Project Reference Implementation',
          difficulty: 'Intermediate',
          analogy: 'Reviewing a complete architectural blueprint gives you the mastery to construct any custom Shopify theme component.',
          content: `### Complete Intermediate Project Implementation

Examine the comprehensive reference implementation below demonstrating all project requirements:`,
          codeSnippets: [
            {
              language: 'liquid',
              filename: 'sections/custom-product-showcase.liquid',
              code: `{% comment %}
  ========================================================================
  SKILLORA AI — SHOPIFY LIQUID INTERMEDIATE CAPSTONE PROJECT
  Component: Custom Product Showcase Section with Blocks & Metafields
  ========================================================================
{% endcomment %}

{% assign current_variant = product.selected_or_first_available_variant %}

<section 
  class="product-showcase-section" 
  id="showcase-{{ section.id }}"
  style="background-color: {{ section.settings.bg_color | default: '#ffffff' }};"
>
  <div class="showcase-container max-w-6xl mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      
      <!-- 1. Product Media Gallery -->
      <div class="product-media-column">
        {% if product.featured_image %}
          <div class="main-image-wrapper rounded-2xl overflow-hidden shadow-lg">
            {{ product.featured_image | image_url: width: 800 | image_tag: 
              loading: 'eager', 
              fetchpriority: 'high',
              alt: product.featured_image.alt | default: product.title,
              class: 'w-full h-auto object-cover'
            }}
          </div>
        {% else %}
          {{ 'product-1' | placeholder_svg_tag: 'w-full h-96 bg-slate-100' }}
        {% endif %}
      </div>

      <!-- 2. Product Details & Configurable Blocks -->
      <div class="product-info-column space-y-4">
        
        {% for block in section.blocks %}
          <div class="showcase-block" {{ block.shopify_attributes }} id="block-{{ block.id }}">
            {% case block.type %}
              
              {% when 'title_and_vendor' %}
                <div class="vendor-title-group">
                  {% if block.settings.show_vendor and product.vendor != blank %}
                    <span class="text-xs font-mono font-bold uppercase tracking-wider text-brand">{{ product.vendor }}</span>
                  {% endif %}
                  <h1 class="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mt-1">{{ product.title }}</h1>
                </div>

              {% when 'pricing' %}
                <div class="pricing-group flex items-center gap-3">
                  <span class="text-2xl font-mono font-bold text-brand">{{ current_variant.price | money }}</span>
                  {% if current_variant.compare_at_price > current_variant.price %}
                    <s class="text-lg font-mono text-slate-400">{{ current_variant.compare_at_price | money }}</s>
                    <span class="badge badge--sale text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-bold">
                      Save {{ current_variant.compare_at_price | minus: current_variant.price | money }}
                    </span>
                  {% endif %}
                </div>

              {% when 'metafields_info' %}
                {% if product.metafields.custom.subtitle.value != blank %}
                  <p class="product-subtitle text-slate-600 italic">
                    {{ product.metafields.custom.subtitle.value | escape }}
                  </p>
                {% endif %}

              {% when 'purchase_form' %}
                {% form 'product', product, class: 'atc-form space-y-4' %}
                  <input type="hidden" name="id" value="{{ current_variant.id }}">

                  <!-- Custom Line Item Property -->
                  {% if block.settings.enable_engraving %}
                    <div class="engraving-field">
                      <label for="engraving-{{ product.id }}" class="block text-xs font-semibold text-slate-700 mb-1">
                        Custom Monogram / Note:
                      </label>
                      <input 
                        type="text" 
                        id="engraving-{{ product.id }}" 
                        name="properties[Personalization]" 
                        placeholder="e.g. For Haris"
                        class="w-full px-3 py-2 border rounded-xl text-sm"
                      >
                    </div>
                  {% endif %}

                  <button 
                    type="submit" 
                    class="w-full py-3.5 px-6 rounded-xl bg-brand text-white font-bold hover:bg-brand/90 transition-all shadow-md"
                    {% unless product.available %}disabled{% endunless %}
                  >
                    {% if product.available %}
                      Add to Shopping Bag • {{ current_variant.price | money }}
                    {% else %}
                      Sold Out
                    {% endif %}
                  </button>
                {% endform %}

            {% endcase %}
          </div>
        {% endfor %}

      </div>
    </div>
  </div>
</section>

<!-- JSON-LD SEO Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": {{ product.title | json }},
  "offers": {
    "@type": "Offer",
    "price": "{{ current_variant.price | divided_by: 100.00 }}",
    "priceCurrency": {{ shop.currency | json }},
    "availability": "https://schema.org/{% if product.available %}InStock{% else %}OutOfStock{% endif %}"
  }
}
</script>

{% schema %}
{
  "name": "Product Showcase",
  "settings": [
    { "type": "color", "id": "bg_color", "label": "Section Background", "default": "#ffffff" }
  ],
  "blocks": [
    {
      "type": "title_and_vendor",
      "name": "Title & Vendor",
      "limit": 1,
      "settings": [
        { "type": "checkbox", "id": "show_vendor", "label": "Show Vendor", "default": true }
      ]
    },
    {
      "type": "pricing",
      "name": "Price & Savings",
      "limit": 1
    },
    {
      "type": "metafields_info",
      "name": "Metafield Subtitle",
      "limit": 1
    },
    {
      "type": "purchase_form",
      "name": "Purchase Form",
      "limit": 1,
      "settings": [
        { "type": "checkbox", "id": "enable_engraving", "label": "Enable Custom Personalization", "default": true }
      ]
    }
  ],
  "presets": [
    {
      "name": "Product Showcase",
      "blocks": [
        { "type": "title_and_vendor" },
        { "type": "pricing" },
        { "type": "metafields_info" },
        { "type": "purchase_form" }
      ]
    }
  ]
}
{% endschema %}`,
              explanation: 'Complete intermediate capstone implementation demonstrating sections, blocks, schema, variants, metafields, responsive media, forms, and JSON-LD.',
              lineByLine: [
                { line: '{% assign current_variant = ... %}', explanation: 'Resolves active variant for pricing and cart submission.' },
                { line: 'name="properties[Personalization]"', explanation: 'Captures custom line item property in purchase form.' },
                { line: '{{ product.metafields.custom.subtitle.value }}', explanation: 'Renders custom metafield with .value accessor.' },
                { line: '{% schema %} ... {% endschema %}', explanation: 'Declares modular blocks and customizer controls.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'snippets/price-with-savings.liquid',
              code: `<div class="pricing-badge-wrapper flex items-center gap-3">
  <span class="price-current text-xl font-mono font-bold text-brand">{{ target_variant.price | money }}</span>
  {% if target_variant.compare_at_price > target_variant.price %}
    <s class="price-compare text-sm text-slate-400 font-mono">{{ target_variant.compare_at_price | money }}</s>
    {% assign savings = target_variant.compare_at_price | minus: target_variant.price | times: 100.0 | divided_by: target_variant.compare_at_price | round %}
    <span class="badge-discount text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">Save {{ savings }}%</span>
  {% endif %}
</div>`,
              explanation: 'Reusable price component calculating exact percentage discount dynamically.',
              lineByLine: [
                { line: '{{ target_variant.price | money }}', explanation: 'Outputs active formatted currency.' },
                { line: 'times: 100.0 | divided_by: ...', explanation: 'Calculates float-accurate percentage discount.' }
              ]
            },
            {
              language: 'liquid',
              filename: 'snippets/product-variant-swatches.liquid',
              code: `<fieldset class="variant-picker-fieldset flex gap-2">
  <legend class="text-xs font-mono uppercase text-muted mb-1.5">{{ option.name }}:</legend>
  {% for value in option.values %}
    <label class="swatch-label relative cursor-pointer">
      <input type="radio" name="{{ option.name }}" value="{{ value }}" class="sr-only peer" {% if option.selected_value == value %}checked{% endif %}>
      <span class="px-3 py-1.5 rounded-xl border text-xs font-bold peer-checked:border-brand peer-checked:bg-brand/10 transition-all">
        {{ value }}
      </span>
    </label>
  {% endfor %}
</fieldset>`,
              explanation: 'Accessible radio button variant swatches with peer-checked styling.',
              lineByLine: [
                { line: '<fieldset ...> <legend ...>', explanation: 'Enforces WCAG 2.1 accessible grouping for options.' },
                { line: '{% if option.selected_value == value %}checked{% endif %}', explanation: 'Selects active variant state.' }
              ]
            }
          ],
          commonMistakes: [
            'Forgetting {{ block.shopify_attributes }} on block wrappers.',
            'Omitting JSON-LD structured data on custom product sections.',
            'Not providing default blocks in section presets.'
          ],
          proTip: 'Submit your solution code using the Project Submission modal to complete your Intermediate Milestone deliverable and unlock the Intermediate Final Assessment.',
          miniPractice: {
            question: 'What is the purpose of limit: 1 on a block definition in section schema?',
            options: [
              'Restricts the merchant to adding at most one instance of that specific block type to the section',
              'Limits the price to $1',
              'Limits the section to one product',
              'Deletes the block after one click'
            ],
            correctAnswer: 0,
            explanation: 'The "limit": 1 constraint in schema restricts merchants from adding multiple instances of that block type (such as multiple product titles).'
          }
        }
      ],
      practiceExercises: [
        {
          title: 'Project Submission Verification',
          instructions: 'Verify your project satisfies all 15 intermediate criteria before submitting your milestone deliverable.',
          starterCode: `<!-- Verify all 15 requirements in your solution -->`,
          solutionCode: `<!-- Verified Intermediate Project Deliverable -->`
        }
      ],
      keyTakeaways: [
        'The Intermediate Project integrates sections, schema, dynamic blocks, snippets, metafields, and forms.',
        'Accessible markup and JSON-LD structured data ensure commercial quality.',
        'Passing this project is mandatory to unlock Level 2 completion.'
      ],
      summary: 'You have completed the Intermediate Project, mastering modular section engineering and custom Shopify storefront experiences.'
    }
  },

  // =========================================================================
  // TASK 15: Intermediate Final Assessment
  // =========================================================================
  {
    id: 'shopify-int-15',
    orderIndex: 15,
    title: 'Intermediate Final Assessment — Official Certification Exam',
    description: 'Comprehensive 30-Question Multiple Choice Certification Assessment covering section architecture, schema design, snippets, JSON templates, metafields, responsive images, advanced filters, cart interactions, blogs, pagination, SEO, and debugging. Passing score: 25/30 (83.3%).',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 500,
    level: 'intermediate',
    isFinalAssessment: true,
    passingScore: 25,
    totalQuestions: 30,
    questions: SHOPIFY_INTERMEDIATE_FINAL_ASSESSMENT,
    resources: [
      { id: 'res-int-exam', title: 'Intermediate Exam Instructions & Grading Criteria', type: 'documentation', url: 'https://shopify.dev/docs/themes' }
    ]
  }
];
