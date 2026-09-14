const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/features/roadmap/data/shopify-developer/shopifyDeveloperBeginner.data.ts');
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 20 High-Quality Beginner MCQs with balanced distribution (5 A, 5 B, 5 C, 5 D)
const BEGINNER_ASSESSMENT = [
  {
    id: 1,
    topic: 'Shopify Platform Architecture',
    question: 'In modern Shopify development, what is the fundamental difference between theme development and custom app development?',
    options: [
      'Theme development focuses on frontend storefront presentation and JSON template architecture rendered via Liquid, while custom app development executes on independent backend servers interacting with Shopify via GraphQL Admin and Storefront APIs.',
      'Theme development requires Node.js servers, whereas app development is written strictly using HTML and CSS in the Shopify Admin.',
      'Themes store all customer databases directly in the browser localStorage, while apps are only used to upload images.',
      'Themes execute server-side database migrations, while apps can only edit CSS stylesheets.'
    ],
    correctAnswer: 0, // A
    explanation: 'Theme development engineers the merchant storefront using Online Store 2.0 (Liquid, JSON templates, HTML, CSS, JavaScript). In contrast, Shopify apps are independent web applications that authenticate via OAuth and interface with Shopify APIs to extend administrative and business logic.'
  },
  {
    id: 2,
    topic: 'Shopify CLI & Development Stores',
    question: 'When developing a custom Shopify theme locally using the Shopify CLI, which command starts a local development server with hot reload connected to your development store?',
    options: [
      'shopify theme publish --force',
      'shopify theme dev --store <your-store-name>.myshopify.com',
      'shopify app deploy --all',
      'shopify admin serve --local-only'
    ],
    correctAnswer: 1, // B
    explanation: 'The command "shopify theme dev --store <store-domain>" spins up a local proxy server that serves local theme files directly over an SSL-secured localhost URL while streaming asset updates and synchronizing Theme Editor settings.'
  },
  {
    id: 3,
    topic: 'Theme Directory Structure',
    question: 'Under Online Store 2.0 architecture, where must JSON-based page templates (such as product.json and collection.json) be located within a theme?',
    options: [
      'Inside the /assets directory as minified JavaScript files.',
      'Inside the /snippets directory alongside reusable icons.',
      'Inside the /templates directory as structured JSON files declaring section hierarchies.',
      'Inside the /config/settings_data.json file only.'
    ],
    correctAnswer: 2, // C
    explanation: 'JSON templates are placed directly in the /templates folder (e.g., templates/product.json, templates/index.json). They define the dynamic sections and blocks rendered on specific page types and allow merchants to reorder sections in the theme editor.'
  },
  {
    id: 4,
    topic: 'Liquid Layout File Structure',
    question: 'Which mandatory Liquid tag in layout/theme.liquid is responsible for injecting essential Shopify platform scripts, analytics, and header hooks into the storefront?',
    options: [
      '{{ content_for_layout }}',
      '{{ content_for_footer }}',
      '{{ theme_analytics_script }}',
      '{{ content_for_header }}'
    ],
    correctAnswer: 3, // D
    explanation: 'The {{ content_for_header }} tag is required within the <head> element of layout/theme.liquid. Shopify dynamically injects critical core platform scripts, security meta tags, app embed scripts, and analytics through this tag.'
  },
  {
    id: 5,
    topic: 'Section Schema & Settings',
    question: 'In a custom Liquid section file (e.g., sections/featured-banner.liquid), what is the role of the {% schema %} tag?',
    options: [
      'It defines the JSON configuration for the Shopify Theme Editor, specifying section name, configurable settings, block types, and default presets.',
      'It compiles TypeScript code into browser-compatible JavaScript.',
      'It creates database indexes in the Shopify Admin database.',
      'It forces the browser to bypass CDN cache on every page load.'
    ],
    correctAnswer: 0, // A
    explanation: 'The {% schema %} tag contains valid JSON that instructs the Shopify Theme Editor which inputs (text, image_picker, range, color, etc.), blocks, and default presets are available for merchants to configure visually.'
  },
  {
    id: 6,
    topic: 'AJAX Cart API',
    question: 'When building an asynchronous "Add to Cart" drawer in theme JavaScript, which official Shopify Storefront endpoint is queried via HTTP POST with JSON data?',
    options: [
      '/admin/api/2024-01/cart.json',
      '/cart/add.js',
      '/storefront/checkout/create.php',
      '/api/v1/line_items/append'
    ],
    correctAnswer: 1, // B
    explanation: 'The Shopify AJAX Cart API provides the /cart/add.js endpoint, accepting an item ID and quantity as JSON or Form data, returning the updated line item and cart payload without triggering a full page reload.'
  },
  {
    id: 7,
    topic: 'Metafields vs Metaobjects',
    question: 'What is the primary conceptual distinction between a Shopify Metafield and a Shopify Metaobject?',
    options: [
      'Metafields can only store boolean flags, while metaobjects can only store customer emails.',
      'Metafields attach custom data fields to specific existing Shopify resources (e.g., a product or customer), whereas metaobjects are custom multi-field data entities that exist independently as structured content models.',
      'Metafields are only accessible in private apps, while metaobjects are only accessible in Liquid snippets.',
      'There is no difference; metafield and metaobject are completely interchangeable names for Liquid variables.'
    ],
    correctAnswer: 1, // B
    explanation: 'A metafield attaches custom attributes (e.g., fabric_care on a Product), while a metaobject creates a distinct data model with multiple fields (e.g., an "Author" or "Store Location" entity) that can be referenced across multiple products and pages.'
  },
  {
    id: 8,
    topic: 'Theme Performance & Images',
    question: 'Which modern Shopify Liquid filter pattern is the recommended standard for outputting responsive, accessible, and performant images with automatic srcset generation?',
    options: [
      '<img src="{{ product.featured_image | img_url: \'master\' }}">',
      '<img src="{{ product.featured_image.src }}"/>',
      '{{ product.featured_image | image_url: width: 1200 | image_tag: widths: \'400, 800, 1200\', loading: \'lazy\', class: \'w-full\' }}',
      '{{ product.featured_image | raw_html_image }}'
    ],
    correctAnswer: 2, // C
    explanation: 'Using "image_url" combined with "image_tag" automatically outputs optimal HTML5 <img> tags with responsive srcset, width/height dimensions (preventing Cumulative Layout Shift - CLS), and native lazy loading.'
  },
  {
    id: 9,
    topic: 'Admin API vs Storefront API',
    question: 'Why must private Shopify Admin API access tokens NEVER be included in theme Liquid or client-side JavaScript code?',
    options: [
      'Because Admin API tokens grant privileged read/write access to confidential store data (orders, customer PII, inventory), and any client-side exposure allows malicious actors to compromise the entire store.',
      'Because the browser will automatically crash if a GraphQL token has more than 16 characters.',
      'Because Storefront API tokens are strictly required to be 100% public, whereas Admin tokens only work on Linux.',
      'Because Shopify Liquid syntax automatically deletes all API tokens on compilation.'
    ],
    correctAnswer: 0, // A
    explanation: 'Admin API tokens carry high-privilege permissions and must remain strictly server-side inside secure environment variables. Public storefront interactions should only ever use the Storefront API with unauthenticated public tokens.'
  },
  {
    id: 10,
    topic: 'Webhooks & HMAC Verification',
    question: 'How should a developer-built backend endpoint verify that an incoming webhook request genuinely originated from Shopify?',
    options: [
      'By checking if the HTTP request User-Agent header says "Google Chrome".',
      'By verifying that the URL ends with ".myshopify.com".',
      'By computing a SHA-256 HMAC hash of the raw request payload using the app shared secret and comparing it to the "x-shopify-hmac-sha256" header.',
      'By asking the user to submit an SMS OTP code on each webhook trigger.'
    ],
    correctAnswer: 2, // C
    explanation: 'Shopify signs every webhook request by computing an HMAC-SHA256 hash of the raw HTTP request body with your app client secret and passes it in the x-shopify-hmac-sha256 header. Verifying this prevents request forgery.'
  },
  {
    id: 11,
    topic: 'Git & Deployment Workflows',
    question: 'In an enterprise Shopify development team, what is the best practice for deploying theme changes to the live production storefront?',
    options: [
      'Directly editing code in the Shopify Theme Code Editor on the live published theme during peak business hours.',
      'Developing on feature branches in Git, pushing to staging preview themes via Shopify CLI/GitHub integration, testing thoroughly, and publishing via an automated CI/CD pipeline.',
      'Downloading zip files from email threads and uploading them manually to production.',
      'Deleting the live theme and uploading a fresh theme from scratch every time a bug is fixed.'
    ],
    correctAnswer: 1, // B
    explanation: 'Modern team workflows leverage Git version control, branching strategies, automated linting via Theme Check, staging development theme previews, and automated deployment via GitHub theme integration or CI/CD pipelines.'
  },
  {
    id: 12,
    topic: 'Liquid Rendering Order',
    question: 'When Shopify renders an Online Store 2.0 page, what is the correct sequence of template and layout assembly?',
    options: [
      'HTML DOM is created in browser -> JavaScript fetches Liquid -> Liquid compiles on mobile -> Theme renders.',
      'Theme settings are loaded -> layout/theme.liquid is evaluated -> {{ content_for_layout }} is replaced by the requested JSON template -> Sections and Blocks are rendered with Liquid -> Final HTML is sent to the client.',
      'All snippets are executed first -> Admin API creates a database row -> Layout is skipped -> JSON template renders.',
      'Sections render -> Browser re-downloads all Liquid files -> CSS renders.'
    ],
    correctAnswer: 1, // B
    explanation: 'Shopify server-side rendering parses the layout file (theme.liquid), resolves {{ content_for_layout }} with the matching JSON template, parses all referenced sections and blocks with their respective data, and streams the compiled HTML to the visitor.'
  },
  {
    id: 13,
    topic: 'Dynamic Theme Blocks',
    question: 'What is the primary benefit of defining "@app" block support in a theme section schema?',
    options: [
      'It lets merchants install third-party app extensions (App Blocks) seamlessly into theme sections without modifying theme code files directly.',
      'It installs the Shopify mobile app on the customer device.',
      'It converts the theme into an iOS native application automatically.',
      'It removes all JavaScript from the theme for faster rendering.'
    ],
    correctAnswer: 0, // A
    explanation: 'Adding `{"type": "@app"}` to the blocks array in a section schema allows App Embeds and App Blocks to be dynamically placed and reordered by merchants in the theme editor without polluting theme code files.'
  },
  {
    id: 14,
    topic: 'Theme Settings Schema Types',
    question: 'Which setting type in section schema provides a merchant with a visual asset selector from their Shopify Files library?',
    options: [
      'type: "text"',
      'type: "image_picker"',
      'type: "color_background"',
      'type: "range"'
    ],
    correctAnswer: 1, // B
    explanation: 'The `image_picker` setting type opens Shopify’s native media modal in the Theme Editor, allowing merchants to select or upload images that return an image object in Liquid.'
  },
  {
    id: 15,
    topic: 'Accessibility & ARIA',
    question: 'When developing an interactive slide-out cart drawer, what is essential for keyboard accessibility (WCAG 2.1)?',
    options: [
      'Trapping keyboard focus within the open drawer modal, providing an accessible close button with Escape key listener, and restoring focus to the trigger element upon closing.',
      'Disabling all keyboard interactions when the cart is opened.',
      'Using only <div> tags without tabindex or role attributes.',
      'Hiding the cart total amount from screen readers.'
    ],
    correctAnswer: 0, // A
    explanation: 'WCAG compliance for modals and slide-out drawers requires focus trapping, handling the Escape key to dismiss, maintaining visible focus states, and restoring focus to the initial trigger button when closed.'
  },
  {
    id: 16,
    topic: 'Storefront API GraphQL',
    question: 'Which GraphQL Storefront API mutation is used to initiate a checkout and cart session in a headless or custom AJAX storefront experience?',
    options: [
      'orderCreate()',
      'cartCreate(input: { lines: [...] })',
      'checkoutMigrate()',
      'customerPaymentProcess()'
    ],
    correctAnswer: 1, // B
    explanation: 'The `cartCreate` mutation in the Storefront API creates a new cart object with line items, attributes, and buyer identity, returning a `checkoutUrl` where the buyer completes payment on Shopify’s secure checkout.'
  },
  {
    id: 17,
    topic: 'Webhook Idempotency',
    question: 'Why is idempotency handling critical when receiving Shopify webhooks such as "orders/create"?',
    options: [
      'Because Shopify webhooks are guaranteed to never fire more than once under any circumstance.',
      'Because network retries and distributed delivery may result in the same webhook payload being delivered multiple times, risking duplicate order fulfillment or double accounting if not deduplicated.',
      'Because idempotency speeds up internet connections for storefront shoppers.',
      'Because Shopify will ban partner accounts that process webhooks in less than 5 seconds.'
    ],
    correctAnswer: 1, // B
    explanation: 'Shopify’s webhook delivery system guarantees at-least-once delivery. If a response is delayed or fails due to network spikes, Shopify retries. Backend handlers must check the `X-Shopify-Webhook-Id` to prevent duplicate processing.'
  },
  {
    id: 18,
    topic: 'Theme Performance & JavaScript',
    question: 'How should custom JavaScript modules in a Shopify theme be loaded to prevent blocking the critical rendering path of the page?',
    options: [
      'Using inline synchronous script tags in the <head> of theme.liquid before any CSS.',
      'Using `<script src="{{ \'custom.js\' | asset_url }}" defer></script>` or ES module dynamic imports.',
      'Writing all JavaScript code directly into the URL bar of the browser.',
      'Loading all scripts from unverified third-party CDNs without caching.'
    ],
    correctAnswer: 1, // B
    explanation: 'Loading scripts with `defer` ensures HTML parsing is not blocked while script files download in parallel. Modern themes also use native ES modules and dynamic imports (`import()`) for on-demand component hydration.'
  },
  {
    id: 19,
    topic: 'Safe Liquid Filter Chaining',
    question: 'When displaying customer-generated or unverified text inside an HTML attribute in Liquid, which filter must be applied to prevent Cross-Site Scripting (XSS)?',
    options: [
      '| raw',
      '| escape',
      '| upcase',
      '| json'
    ],
    correctAnswer: 1, // B
    explanation: 'The `escape` filter (or `escape_once`) converts unsafe HTML characters (<, >, &, \", \') into their safe HTML entity representations, preventing malicious script injection inside DOM attributes and text nodes.'
  },
  {
    id: 20,
    topic: 'Shopify Partner Ecosystem',
    question: 'What is the purpose of a Shopify Partner Development Store for developers?',
    options: [
      'It is a free sandbox store that allows developers to build, test themes, develop custom apps, test mock payments with Bogus Gateway, and transfer ownership to clients.',
      'It is a store that can only sell physical books in Canada.',
      'It is an automated bot that writes code for you without human intervention.',
      'It is a paid subscription store that charges $500 per day during local testing.'
    ],
    correctAnswer: 0, // A
    explanation: 'Development stores created inside the Shopify Partner Dashboard provide unlimited free testing environments with full features, dummy data seeding, bogus payment gateway testing, and seamless client handover capabilities.'
  }
];

// Helper to format code snippet
function formatSnippet(lang, filename, title, code, explanation) {
  return {
    language: lang,
    filename: filename,
    title: title,
    code: code.trim(),
    explanation: explanation
  };
}

const BEGINNER_MODULES = [
  {
    id: 'shopify-dev-beg-01',
    orderIndex: 1,
    title: '1. Introduction to Shopify Development',
    description: 'Master the Shopify ecosystem, platform architecture, merchant vs developer mental models, Online Store 2.0 rendering engine, and the professional role of modern Shopify theme and app engineers.',
    duration: '45 mins',
    xpReward: 150,
    requiresQuiz: false,
    resources: [
      { id: 'res-sh-dev-01', title: 'Shopify Platform Architecture Overview', type: 'documentation', url: 'https://shopify.dev/docs/themes' },
      { id: 'res-sh-dev-02', title: 'Online Store 2.0 Architectural Specification', type: 'article', url: 'https://shopify.dev/docs/themes/architecture' }
    ],
    lessonContent: {
      overview: 'Shopify is an enterprise-grade, multi-tenant cloud commerce platform powering millions of global storefronts. As a professional Shopify developer, you do not simply edit Liquid tags; you architect high-performance storefronts, design composable theme component libraries, build custom apps using GraphQL APIs, and engineer resilient event-driven systems that handle high-volume sales events with zero downtime.',
      objectives: [
        'Understand the Shopify platform architecture, multi-tenant cloud infrastructure, and CDN caching layers.',
        'Distinguish clearly between theme engineering (Online Store 2.0) and full-stack app development (Node/Remix, APIs, Webhooks).',
        'Navigate the Shopify Partner ecosystem, development store lifecycle, and collaborator permissions.',
        'Understand the request lifecycle from edge DNS to Liquid server-side rendering and client-side hydration.'
      ],
      sections: [
        {
          id: 'sec-intro-arch',
          title: 'Shopify Platform Architecture & Developer Paradigms',
          content: 'Shopify operates as a distributed multi-tenant platform with a unified core backend, global Cloudflare CDN edge caching, and isolated data partitions for each merchant shop. Storefront rendering is executed on Shopify edge nodes using the Liquid template engine combined with Online Store 2.0 JSON templates. Developers interface with the platform via two distinct paths: Theme Engineering (frontend storefront code executed within the Liquid runtime) and App Engineering (standalone web services communicating via GraphQL Admin & Storefront APIs).',
          codeSnippets: [
            formatSnippet(
              'json',
              'config/settings_schema.json',
              'Theme Configuration Manifest Structure',
              `[
  {
    "name": "theme_info",
    "theme_name": "Skillora Commerce Pro",
    "theme_version": "1.0.0",
    "theme_author": "Skillora AI Engineering",
    "theme_documentation_url": "https://shopify.dev/docs/themes",
    "theme_support_url": "https://skillora.ai/support"
  },
  {
    "name": "Colors & Typography",
    "settings": [
      {
        "type": "color",
        "id": "color_primary",
        "label": "Primary Accent Color",
        "default": "#2563EB"
      },
      {
        "type": "font_picker",
        "id": "font_heading",
        "label": "Heading Typography",
        "default": "inter_n7"
      }
    ]
  }
]`,
              'The settings_schema.json file defines global theme settings available to merchants across the entire store in the Theme Editor.'
            ),
            formatSnippet(
              'liquid',
              'layout/theme.liquid',
              'Baseline Online Store 2.0 Layout Shell',
              `<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="{{ settings.color_primary }}">
    <link rel="canonical" href="{{ canonical_url }}">

    <title>
      {{ page_title }}
      {%- if current_tags %} &ndash; tagged "{{ current_tags | join: ', ' }}"{% endif -%}
      {%- if current_page != 1 %} &ndash; Page {{ current_page }}{% endif -%}
      {%- unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless -%}
    </title>

    {{ content_for_header }}

    <link rel="stylesheet" href="{{ 'theme-base.css' | asset_url }}" media="print" onload="this.media='all'">
    <script src="{{ 'theme-core.js' | asset_url }}" defer></script>
  </head>

  <body class="template-{{ template.name | handle }} bg-base text-primary antialiased">
    <a class="skip-to-content-link button visually-hidden" href="#MainContent">
      {{ 'accessibility.skip_to_text' | t }}
    </a>

    {% sections 'header-group' %}

    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
      {{ content_for_layout }}
    </main>

    {% sections 'footer-group' %}
  </body>
</html>`,
              'The root theme.liquid layout renders the outer HTML document, injects essential Shopify platform scripts via content_for_header, and delegates page content to content_for_layout.'
            ),
            formatSnippet(
              'javascript',
              'theme-architecture-overview.js',
              'Shopify Development Workflow Mental Model',
              `/**
 * Shopify Development Architecture Model
 * 1. Storefront Rendering: Liquid + JSON Templates + Theme Assets (Edge CDN)
 * 2. Storefront Client: Vanilla JS, Web Components, Cart AJAX API
 * 3. Storefront API: Headless / Custom client querying public GraphQL
 * 4. Admin API: Authenticated App backend querying high-privilege GraphQL
 */
export const SHOPIFY_DEV_TRACKS = {
  themeEngineering: {
    runtime: 'Liquid Engine & Edge CDN',
    templateFormat: 'JSON Templates (Online Store 2.0)',
    styling: 'Vanilla CSS / PostCSS / Tailwind (pre-compiled)',
    interactivity: 'Custom Elements / Web Components / Vanilla JS',
    storefrontData: 'Liquid Objects & AJAX Cart API'
  },
  appEngineering: {
    runtime: 'Independent Server (Node.js, Remix, Cloudflare Workers)',
    authProtocol: 'OAuth 2.0 & Session Tokens (JWT)',
    apiProtocols: ['GraphQL Admin API', 'Storefront API'],
    eventHandling: 'Webhook Consumers + Queue Workers (Redis / BullMQ)'
  }
};`,
              'Clear distinction between theme frontend architecture and server-side app engineering.'
            )
          ],
          proTip: 'Never treat Shopify themes as static templates. Online Store 2.0 themes are modular design systems composed of dynamic JSON templates, section schemas, and block hierarchies that give non-technical merchants full visual composition power while preserving developer code integrity.',
          commonMistakes: [
            'Hardcoding text, product handles, or banner images directly in Liquid instead of exposing them via section schema settings.',
            'Editing live published themes directly in the browser code editor instead of using local Shopify CLI and version control.',
            'Confusing the Storefront API (public, unauthenticated) with the Admin API (private, high-privilege).'
          ]
        }
      ],
      keyTakeaways: [
        'Shopify development encompasses Theme Engineering (Liquid/JSON templates/JS) and App Development (GraphQL APIs/OAuth/Webhooks).',
        'Online Store 2.0 replaces legacy monolithic Liquid templates with flexible JSON templates composed of reusable sections and blocks.',
        'Professional developers operate in local development environments via Shopify CLI connected to dedicated development stores.'
      ],
      practiceExercises: [
        {
          id: 'ex-beg-01',
          title: 'Analyze and Configure Theme Metadata Schema',
          instructions: 'Review the settings_schema.json structure and add a new global theme configuration section for Social Media links (twitter_url, instagram_url, youtube_url) with appropriate validation labels.',
          starterCode: `[
  {
    "name": "Social Media Links",
    "settings": [
      // Add your settings definitions here
    ]
  }
]`,
          solutionCode: `[
  {
    "name": "Social Media Links",
    "settings": [
      {
        "type": "text",
        "id": "social_twitter_link",
        "label": "X (Twitter) Profile URL",
        "info": "https://x.com/yourhandle"
      },
      {
        "type": "text",
        "id": "social_instagram_link",
        "label": "Instagram Profile URL"
      },
      {
        "type": "text",
        "id": "social_youtube_link",
        "label": "YouTube Channel URL"
      }
    ]
  }
]`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-beg-02',
    orderIndex: 2,
    title: '2. Shopify Development Environment and CLI',
    description: 'Configure a professional Shopify development workstation using Shopify CLI 3.x, Partner development stores, local SSL proxy servers, theme sync workflows, and environment variable management.',
    duration: '50 mins',
    xpReward: 160,
    requiresQuiz: false,
    resources: [
      { id: 'res-cli-01', title: 'Shopify CLI 3.x Documentation', type: 'documentation', url: 'https://shopify.dev/docs/themes/tools/cli' },
      { id: 'res-cli-02', title: 'Setting Up Development Stores', type: 'article', url: 'https://help.shopify.com/partners/dashboard/managing-stores/development-stores' }
    ],
    lessonContent: {
      overview: 'The modern Shopify developer toolchain revolves around the official Shopify CLI (Command Line Interface). Shopify CLI enables developers to clone, preview, and synchronize theme changes in real time against a live development store without overwriting published assets. You will master CLI commands, theme flags, hot module reloading, and secure credential handling.',
      objectives: [
        'Install and configure Shopify CLI 3.x with Node.js and package managers.',
        'Authenticate securely with your Shopify Partner account and bind projects to development stores.',
        'Run `shopify theme dev` with local preview flags, SSL tunneling, and theme-editor sync.',
        'Create and maintain `.shopifyignore` files to prevent build artifacts from polluting the remote theme.'
      ],
      sections: [
        {
          id: 'sec-cli-workflow',
          title: 'Shopify CLI Commands & Local Theme Workflow',
          content: 'Shopify CLI 3.x communicates directly with the Shopify Admin API via authenticated OAuth sessions. When you run `shopify theme dev`, the CLI creates a temporary development theme on your store (visible only to your session), watches local files for modifications, compiles changes, and synchronizes them within milliseconds over WebSocket connections.',
          codeSnippets: [
            formatSnippet(
              'bash',
              'terminal-commands.sh',
              'Essential Shopify CLI Theme Commands',
              `# 1. Authenticate with your Shopify Partner organization
shopify auth login

# 2. Initialize a new theme project from Dawn baseline
shopify theme init my-custom-theme --clone-url https://github.com/Shopify/dawn.git

# 3. Start local development server connected to dev store
shopify theme dev --store skillora-dev-sandbox.myshopify.com --theme-editor-sync

# 4. Pull live theme files (e.g. merchant settings_data.json) down to local
shopify theme pull --store skillora-dev-sandbox.myshopify.com --theme 135891234567

# 5. Run static linting and performance checks
shopify theme check

# 6. Push local theme to an unpublished theme slot for QA review
shopify theme push --store skillora-dev-sandbox.myshopify.com --unpublished --theme "Release-v1.2.0-Staging"`,
              'Standard command suite used daily by professional Shopify theme engineers.'
            ),
            formatSnippet(
              'plaintext',
              '.shopifyignore',
              'Shopify Ignore Configuration File',
              `# Build directories and dependencies
node_modules/
dist/
.git/
.github/

# Development source files (compiled into assets/)
src/
styles/scss/
scripts/typescript/
*.ts
*.scss

# Package manager lock files and configuration
package.json
package-lock.json
tsconfig.json
vite.config.js
tailwind.config.js
.env*
.DS_Store`,
              'Prevents local source files and build dependencies from uploading to Shopify theme servers.'
            ),
            formatSnippet(
              'json',
              'package.json',
              'Theme Build & Watch Pipeline Script Setup',
              `{
  "name": "skillora-shopify-theme",
  "version": "1.0.0",
  "scripts": {
    "dev:css": "tailwindcss -i ./src/css/main.css -o ./assets/theme-base.css --watch",
    "dev:js": "vite build --watch",
    "dev:shopify": "shopify theme dev --store skillora-dev-sandbox.myshopify.com --theme-editor-sync",
    "dev": "concurrently \\"npm:dev:css\\" \\"npm:dev:js\\" \\"npm:dev:shopify\\"",
    "build": "tailwindcss -i ./src/css/main.css -o ./assets/theme-base.css --minify && vite build",
    "lint": "shopify theme check"
  },
  "devDependencies": {
    "concurrently": "^8.2.2",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.6"
  }
}`,
              'A standard npm script setup compiling modern CSS and JavaScript into theme assets concurrently with the Shopify CLI sync engine.'
            )
          ],
          proTip: 'Always pass the `--theme-editor-sync` flag when running `shopify theme dev`. This ensures that any customization made in the visual Theme Editor (like reordering blocks or altering text) is immediately written back to your local `config/settings_data.json` and template files.',
          commonMistakes: [
            'Running `shopify theme push --live` accidentally and overwriting a production store without staging validation.',
            'Forgetting to add `.shopifyignore`, causing node_modules or large build folders to exceed Shopify 50MB theme upload limits.',
            'Working on live store client accounts without using Collaborator Access codes or Partner development stores.'
          ]
        }
      ],
      keyTakeaways: [
        'Shopify CLI 3.x creates isolated development themes for real-time local preview without impacting live shoppers.',
        'Use `.shopifyignore` to keep your remote theme repository lean and prevent upload quota errors.',
        'Automate asset compilation with npm scripts and enforce code quality using `shopify theme check`.'
      ],
      practiceExercises: [
        {
          id: 'ex-beg-02',
          title: 'Configure Development Package Workflow',
          instructions: 'Write a script definition for package.json that runs Theme Check linting with strict error exits before allowing a theme push command.',
          starterCode: `{
  "scripts": {
    "deploy:staging": ""
  }
}`,
          solutionCode: `{
  "scripts": {
    "lint": "shopify theme check --fail-level error",
    "deploy:staging": "npm run lint && shopify theme push --unpublished --theme 'Staging-QA'"
  }
}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-beg-03',
    orderIndex: 3,
    title: '3. Shopify Theme Architecture',
    description: 'Deep dive into the Online Store 2.0 folder hierarchy, layouts, JSON templates, reusable sections, atomic blocks, snippets, config schemas, and section groups.',
    duration: '55 mins',
    xpReward: 170,
    requiresQuiz: false,
    resources: [
      { id: 'res-arch-01', title: 'Theme File Directory Structure', type: 'documentation', url: 'https://shopify.dev/docs/themes/architecture' },
      { id: 'res-arch-02', title: 'JSON Templates Specification', type: 'article', url: 'https://shopify.dev/docs/themes/architecture/templates' }
    ],
    lessonContent: {
      overview: 'Online Store 2.0 revolutionized Shopify theme architecture by establishing a modular, component-driven structure. Every theme consists of strict top-level directories: layout, templates, sections, snippets, assets, config, and locales. Mastering how JSON templates reference sections and how section schemas declare blocks is the foundation of professional Shopify theme engineering.',
      objectives: [
        'Understand the role and lifecycle of all 7 mandatory Shopify theme directories.',
        'Construct and customize Online Store 2.0 JSON templates (`templates/*.json`).',
        'Architect section groups (`header-group.json`, `footer-group.json`) for modular global layouts.',
        'Differentiate between global reusable snippets and stateful configurable sections.'
      ],
      sections: [
        {
          id: 'sec-os2-structure',
          title: 'The 7 Mandatory Theme Directories & JSON Templates',
          content: 'Unlike legacy themes that used static Liquid templates (`product.liquid`), Online Store 2.0 uses JSON templates (`product.json`). The JSON template acts as an orchestration map: it lists the sections to render, their order, individual block configurations, and dynamic settings. This shifts visual layout control to the merchant while keeping rendering logic cleanly encapsulated in `sections/` and `snippets/`.',
          codeSnippets: [
            formatSnippet(
              'json',
              'templates/product.json',
              'Online Store 2.0 Product JSON Template',
              `{
  "sections": {
    "main_product": {
      "type": "main-product-details",
      "blocks": {
        "title_block": {
          "type": "title",
          "settings": {}
        },
        "price_block": {
          "type": "price",
          "settings": {
            "show_tax_notice": true
          }
        },
        "variant_picker_block": {
          "type": "variant_picker",
          "settings": {
            "picker_type": "button"
          }
        },
        "buy_buttons_block": {
          "type": "buy_buttons",
          "settings": {
            "show_dynamic_checkout": true
          }
        }
      },
      "block_order": [
        "title_block",
        "price_block",
        "variant_picker_block",
        "buy_buttons_block"
      ],
      "settings": {
        "enable_sticky_info": true
      }
    },
    "recommendations": {
      "type": "product-recommendations",
      "settings": {
        "heading": "Related Engineering Tools"
      }
    }
  },
  "order": [
    "main_product",
    "recommendations"
  ]
}`,
              'Declarative JSON template configuring section order, inner block order, and setting overrides for product pages.'
            ),
            formatSnippet(
              'json',
              'sections/header-group.json',
              'Header Section Group Definition',
              `{
  "name": "Header Group",
  "type": "header",
  "sections": {
    "announcement_bar": {
      "type": "announcement-bar",
      "settings": {
        "text": "Free Global Shipping on Developer Hardware Orders",
        "link": "/collections/hardware"
      }
    },
    "main_header": {
      "type": "header-navigation",
      "settings": {
        "menu": "main-menu",
        "enable_sticky_header": true
      }
    }
  },
  "order": [
    "announcement_bar",
    "main_header"
  ]
}`,
              'Section groups allow merchants to add, remove, and reorder header and footer sections globally without editing layout files.'
            ),
            formatSnippet(
              'liquid',
              'snippets/icon-cart.liquid',
              'Atomic Stateless Snippet Component',
              `{%- comment -%}
  Renders an accessible SVG cart icon.
  Usage:
  {% render 'icon-cart', class: 'w-6 h-6 text-brand', aria_hidden: true %}
{%- endcomment -%}

<svg
  class="{{ class | default: 'w-5 h-5' }}"
  {% if aria_hidden %}aria-hidden="true"{% endif %}
  focusable="false"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="9" cy="21" r="1"></circle>
  <circle cx="20" cy="21" r="1"></circle>
  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>`,
              'Reusable stateless Liquid snippet instantiated with the {% render %} tag with explicit argument passing.'
            )
          ],
          proTip: 'Always use the `{% render %}` tag instead of legacy `{% include %}`. `render` creates an isolated scope for variables, preventing accidental variable leakage and significantly improving Liquid compilation speed.',
          commonMistakes: [
            'Using `include` which pollutes the global variable scope and slows down rendering performance.',
            'Creating `.liquid` templates for pages when a `.json` template should be used to support modular sections.',
            'Putting configurable merchant settings inside snippets instead of section schemas.'
          ]
        }
      ],
      keyTakeaways: [
        'Online Store 2.0 uses JSON templates (`.json`) to declare section hierarchies and block orders.',
        'Section groups allow global sections (headers, footers, popups) to be managed modularly.',
        'Snippets are isolated, reusable partials called with `{% render %}` with explicit parameters.'
      ],
      practiceExercises: [
        {
          id: 'ex-beg-03',
          title: 'Build a Collection JSON Template',
          instructions: 'Construct a valid JSON template for collections/collection.json containing a hero banner section and a paginated product grid section.',
          starterCode: `{
  "sections": {},
  "order": []
}`,
          solutionCode: `{
  "sections": {
    "banner": {
      "type": "collection-hero-banner",
      "settings": {
        "show_description": true
      }
    },
    "grid": {
      "type": "main-collection-grid",
      "settings": {
        "products_per_page": 24,
        "columns_desktop": 4
      }
    }
  },
  "order": [
    "banner",
    "grid"
  ]
}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-beg-04',
    orderIndex: 4,
    title: '4. Shopify Theme Development Fundamentals',
    description: 'Master custom Liquid sections, schema definitions, dynamic input types, block iteration, presets, and Theme Editor JavaScript lifecycle events.',
    duration: '60 mins',
    xpReward: 180,
    requiresQuiz: false,
    resources: [
      { id: 'res-fund-01', title: 'Section Schema Reference', type: 'documentation', url: 'https://shopify.dev/docs/themes/architecture/sections/section-schema' },
      { id: 'res-fund-02', title: 'Theme Editor JavaScript Events', type: 'article', url: 'https://shopify.dev/docs/themes/architecture/sections/integrate-sections-with-the-theme-editor' }
    ],
    lessonContent: {
      overview: 'Sections are the primary building blocks of Shopify themes. A section combines Liquid markup, CSS/JS asset references, and a JSON schema specification. In this module, you will learn how to build production-ready custom sections with dynamic presets, flexible block architectures, responsive typography, and Theme Editor event listeners.',
      objectives: [
        'Write robust, reusable Liquid sections with complete `{% schema %}` definitions.',
        'Configure section settings using standard types: text, textarea, richtext, image_picker, select, range, checkbox, and color.',
        'Implement dynamic block iteration with `for block in section.blocks` and typed block schemas.',
        'Add section presets so merchants can discover and insert custom sections via the "Add section" button in the Theme Editor.'
      ],
      sections: [
        {
          id: 'sec-section-schema',
          title: 'Building Production Custom Sections with Blocks and Presets',
          content: 'A section is self-contained. Its schema JSON dictates how the Theme Editor renders input controls for merchants. Settings are accessed in Liquid via `section.settings.<setting_id>`, while blocks are iterated via `section.blocks` and accessed via `block.settings.<setting_id>`. Adding a `presets` array allows merchants to add the section to any dynamic page.',
          codeSnippets: [
            formatSnippet(
              'liquid',
              'sections/feature-grid.liquid',
              'Complete Feature Grid Section with Schema & Blocks',
              `{{ 'section-feature-grid.css' | asset_url | stylesheet_tag }}

<section class="feature-grid py-12 px-4 max-w-7xl mx-auto" style="background-color: {{ section.settings.bg_color }};">
  {% if section.settings.heading != blank %}
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900">
        {{ section.settings.heading | escape }}
      </h2>
      {% if section.settings.subheading != blank %}
        <p class="mt-2 text-lg text-gray-600">{{ section.settings.subheading | escape }}</p>
      {% endif %}
    </div>
  {% endif %}

  <div class="grid grid-cols-1 md:grid-cols-{{ section.settings.columns_desktop }} gap-8">
    {% for block in section.blocks %}
      <div class="feature-card p-6 rounded-2xl bg-white border border-gray-100 shadow-sm" {{ block.shopify_attributes }}>
        {% if block.settings.icon_image != blank %}
          <div class="w-12 h-12 mb-4">
            {{ block.settings.icon_image | image_url: width: 100 | image_tag: loading: 'lazy', class: 'w-full h-full object-contain' }}
          </div>
        {% endif %}
        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ block.settings.title | escape }}</h3>
        <p class="text-gray-600 text-sm leading-relaxed">{{ block.settings.description | escape }}</p>
      </div>
    {% endfor %}
  </div>
</section>

{% schema %}
{
  "name": "Feature Grid",
  "tag": "section",
  "class": "section-feature-grid",
  "max_blocks": 6,
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Section Heading",
      "default": "Engineered for High-Growth Brands"
    },
    {
      "type": "text",
      "id": "subheading",
      "label": "Subheading Text",
      "default": "Everything you need to scale Shopify commerce operations."
    },
    {
      "type": "range",
      "id": "columns_desktop",
      "min": 2,
      "max": 4,
      "step": 1,
      "label": "Desktop Columns",
      "default": 3
    },
    {
      "type": "color",
      "id": "bg_color",
      "label": "Background Color",
      "default": "#F9FAFB"
    }
  ],
  "blocks": [
    {
      "type": "feature",
      "name": "Feature Item",
      "settings": [
        {
          "type": "image_picker",
          "id": "icon_image",
          "label": "Feature Icon Image"
        },
        {
          "type": "text",
          "id": "title",
          "label": "Feature Title",
          "default": "Lightning Fast Performance"
        },
        {
          "type": "textarea",
          "id": "description",
          "label": "Feature Description",
          "default": "Sub-millisecond edge caching and optimized assets maximize conversion rates."
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Feature Grid",
      "blocks": [
        {
          "type": "feature",
          "settings": { "title": "Sub-Second Edge Rendering" }
        },
        {
          "type": "feature",
          "settings": { "title": "GraphQL Cart Engine" }
        },
        {
          "type": "feature",
          "settings": { "title": "Enterprise Security" }
        }
      ]
    }
  ]
}
{% endschema %}`,
              'A complete production-ready section with section settings, dynamic block limits, shopify_attributes for Theme Editor deep-linking, and pre-populated default presets.'
            ),
            formatSnippet(
              'javascript',
              'assets/section-feature-grid.js',
              'Theme Editor JavaScript Event Listeners',
              `// Listen to Shopify Theme Editor live reload events
document.addEventListener('shopify:section:load', (event) => {
  if (event.target.classList.contains('section-feature-grid')) {
    console.log('Feature grid reloaded in Theme Editor:', event.detail.sectionId);
    // Re-initialize any sliders, animations, or interactive widgets
  }
});

document.addEventListener('shopify:block:select', (event) => {
  console.log('Merchant selected block ID:', event.detail.blockId);
  // Auto-scroll to selected block or open accordions
});`,
              'Handling shopify:section:load and shopify:block:select events ensures seamless Theme Editor interactivity.'
            )
          ],
          proTip: 'Always include `{{ block.shopify_attributes }}` on the root element of each iterated block inside `for block in section.blocks`. This allows the Shopify Theme Editor to outline the active block when the merchant clicks on it in the sidebar.',
          commonMistakes: [
            'Forgetting the `presets` array in the section schema, which prevents the section from showing up in the "Add Section" merchant picker.',
            'Hardcoding CSS styles without using schema settings for merchant customization.',
            'Failing to re-initialize JavaScript carousels/accordions when the Theme Editor fires `shopify:section:load`.'
          ]
        }
      ],
      keyTakeaways: [
        'Sections are defined with HTML/Liquid and configured with JSON schemas in `{% schema %}`.',
        'Use `{{ block.shopify_attributes }}` to enable Theme Editor visual block selection.',
        'Include `presets` in section schemas so merchants can insert sections anywhere on dynamic pages.'
      ],
      practiceExercises: [
        {
          id: 'ex-beg-04',
          title: 'Implement an Announcement Bar Section Schema',
          instructions: 'Write the schema definition for an announcement bar with text input, link picker, and background color settings.',
          starterCode: `{% schema %}
{
  "name": "Announcement Bar",
  "settings": []
}
{% endschema %}`,
          solutionCode: `{% schema %}
{
  "name": "Announcement Bar",
  "tag": "aside",
  "class": "section-announcement-bar",
  "settings": [
    {
      "type": "text",
      "id": "message",
      "label": "Announcement Text",
      "default": "Welcome to our developer store"
    },
    {
      "type": "url",
      "id": "link",
      "label": "Announcement Link"
    },
    {
      "type": "color",
      "id": "bar_bg",
      "label": "Bar Background Color",
      "default": "#111827"
    },
    {
      "type": "color",
      "id": "text_color",
      "label": "Text Color",
      "default": "#FFFFFF"
    }
  ],
  "presets": [
    {
      "name": "Announcement Bar"
    }
  ]
}
{% endschema %}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-beg-05',
    orderIndex: 5,
    title: '5. Shopify Frontend Development',
    description: 'Engineer responsive, accessible, and performant storefront frontend experiences using modern JavaScript, the AJAX Cart API, variant state listeners, and accessible drawer patterns.',
    duration: '55 mins',
    xpReward: 175,
    requiresQuiz: false,
    resources: [
      { id: 'res-fe-01', title: 'Shopify AJAX Cart API Documentation', type: 'documentation', url: 'https://shopify.dev/docs/api/ajax/reference/cart' },
      { id: 'res-fe-02', title: 'Shopify Theme Accessibility Guidelines', type: 'article', url: 'https://shopify.dev/docs/themes/best-practices/accessibility' }
    ],
    lessonContent: {
      overview: 'High-converting Shopify storefronts rely on seamless client-side interactions without disruptive full page refreshes. In this module, you will master the official Shopify AJAX Cart API (`/cart/add.js`, `/cart/change.js`, `/cart/update.js`, `/cart.js`), variant change event handling, accessible drawer cart state management, and modern Web Component integration.',
      objectives: [
        'Interact with the Shopify AJAX Cart API using native async/await `fetch` operations.',
        'Build an interactive variant selector that updates prices, SKU, availability, and image galleries in real time.',
        'Construct an accessible slide-out cart drawer with keyboard focus traps and screen reader announcements.',
        'Handle API error responses (e.g. inventory limits reached) gracefully in the UI.'
      ],
      sections: [
        {
          id: 'sec-ajax-cart',
          title: 'AJAX Cart API Controller & Variant Event Engine',
          content: 'The AJAX Cart API allows frontend JavaScript to modify the shopper cart state. When adding items to cart, you post `{ id: variantId, quantity: qty }` to `/cart/add.js`. To update line quantities or remove items, you post to `/cart/change.js`. To render the updated cart badge or drawer contents, you fetch `/cart.js` or leverage Section Rendering API to fetch fresh HTML partials.',
          codeSnippets: [
            formatSnippet(
              'javascript',
              'assets/cart-controller.js',
              'Enterprise AJAX Cart Service Module',
              `/**
 * Shopify AJAX Cart Controller
 * Manages asynchronous cart mutations, inventory error handling, and UI event dispatching.
 */
export class CartController {
  static async getCart() {
    const res = await fetch('/cart.js');
    if (!res.ok) throw new Error('Failed to fetch cart state');
    return await res.json();
  }

  static async addItem(variantId, quantity = 1, properties = {}) {
    const payload = {
      id: Number(variantId),
      quantity: Number(quantity),
      properties
    };

    const res = await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.description || data.message || 'Error adding item to cart');
    }

    // Dispatch global event for cart drawer & header badge update
    document.dispatchEvent(new CustomEvent('cart:updated', { detail: { item: data } }));
    return data;
  }

  static async updateQuantity(lineKey, quantity) {
    const res = await fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: lineKey, quantity: Number(quantity) })
    });

    const cart = await res.json();
    document.dispatchEvent(new CustomEvent('cart:updated', { detail: { cart } }));
    return cart;
  }
}`,
              'Reusable JavaScript module encapsulating all AJAX Cart API operations with standardized error handling and CustomEvent dispatches.'
            ),
            formatSnippet(
              'javascript',
              'assets/variant-picker.js',
              'Variant Change Controller & Dynamic Price Updater',
              `class VariantPicker extends HTMLElement {
  connectedCallback() {
    this.form = this.querySelector('form');
    this.productJson = JSON.parse(this.querySelector('[data-product-json]').textContent);
    this.addEventListener('change', this.onVariantChange.bind(this));
  }

  getSelectedOptions() {
    return Array.from(this.querySelectorAll('input:checked, select')).map(el => el.value);
  }

  onVariantChange() {
    const selectedOptions = this.getSelectedOptions();
    const matchedVariant = this.productJson.variants.find(variant => {
      return variant.options.every((opt, index) => opt === selectedOptions[index]);
    });

    if (matchedVariant) {
      this.updatePrice(matchedVariant);
      this.updateAvailability(matchedVariant);
      this.updateUrl(matchedVariant);
    }
  }

  updatePrice(variant) {
    const priceEl = document.querySelector('[data-product-price]');
    if (priceEl) {
      priceEl.textContent = this.formatMoney(variant.price);
    }
  }

  updateAvailability(variant) {
    const btn = document.querySelector('[name="add"]');
    if (!variant.available) {
      btn.disabled = true;
      btn.textContent = 'Sold Out';
    } else {
      btn.disabled = false;
      btn.textContent = 'Add to Cart';
    }
  }

  updateUrl(variant) {
    const url = new URL(window.location);
    url.searchParams.set('variant', variant.id);
    window.history.replaceState({}, '', url);
  }

  formatMoney(cents) {
    return '$' + (cents / 100).toFixed(2);
  }
}
customElements.define('variant-picker', VariantPicker);`,
              'Web Component pattern for handling variant state changes, updating prices, disabling sold-out buttons, and synchronizing URL query parameters.'
            ),
            formatSnippet(
              'liquid',
              'snippets/cart-drawer.liquid',
              'Accessible Cart Drawer Dialog Template',
              `<div
  id="CartDrawer"
  class="cart-drawer fixed inset-0 z-50 overflow-hidden hidden"
  role="dialog"
  aria-modal="true"
  aria-label="{{ 'cart.general.title' | t }}"
>
  <div class="cart-drawer-overlay fixed inset-0 bg-black/40 transition-opacity"></div>
  
  <div class="cart-drawer-panel fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col p-6">
    <div class="flex items-center justify-between border-b pb-4">
      <h2 class="text-xl font-bold text-gray-900">{{ 'cart.general.title' | t }}</h2>
      <button
        type="button"
        class="cart-drawer-close p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand"
        aria-label="{{ 'accessibility.close' | t }}"
      >
        &times;
      </button>
    </div>

    <div class="cart-drawer-items flex-1 overflow-y-auto py-4" data-cart-items-container>
      <!-- Dynamically populated via JavaScript -->
    </div>

    <div class="border-t pt-4 space-y-4">
      <div class="flex justify-between font-bold text-lg">
        <span>{{ 'cart.general.subtotal' | t }}</span>
        <span data-cart-subtotal>{{ cart.total_price | money }}</span>
      </div>
      <a href="/checkout" class="w-full button button--primary block text-center py-3">
        {{ 'cart.general.checkout' | t }}
      </a>
    </div>
  </div>
</div>`,
              'Accessible cart drawer structure with ARIA modal attributes and standard checkout button link.'
            )
          ],
          proTip: 'When updating the cart, use Shopify Section Rendering API (`?sections=cart-drawer,cart-icon-bubble`) alongside your AJAX request to receive pre-rendered HTML snippets directly from the Liquid engine, avoiding fragile client-side template duplication.',
          commonMistakes: [
            'Not handling 422 Unprocessable Entity HTTP errors when a shopper attempts to add more items than available in store inventory.',
            'Updating browser URL with variant ID using `window.location.href = ...` which reloads the entire page instead of `history.replaceState`.',
            'Missing ARIA modal roles (`role="dialog"`, `aria-modal="true"`) on drawer carts.'
          ]
        }
      ],
      keyTakeaways: [
        'Use native `fetch` with `/cart/add.js` and `/cart/change.js` to power smooth asynchronous cart operations.',
        'Encapsulate variant logic in native Web Components (`customElements.define`) for clean lifecycle management.',
        'Always ensure keyboard trap management and proper ARIA landmarks on interactive drawer modals.'
      ],
      practiceExercises: [
        {
          id: 'ex-beg-05',
          title: 'Implement AJAX Add to Cart Handler',
          instructions: 'Write a JavaScript event listener on a product form submit event that prevents default submission, extracts variant ID and quantity, and invokes CartController.addItem with visual loading state.',
          starterCode: `const form = document.querySelector('form[action="/cart/add"]');
form.addEventListener('submit', async (e) => {
  // Add your submission logic here
});`,
          solutionCode: `const form = document.querySelector('form[action="/cart/add"]');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = form.querySelector('[type="submit"]');
  const formData = new FormData(form);
  const variantId = formData.get('id');
  const quantity = formData.get('quantity') || 1;

  try {
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    await CartController.addItem(variantId, quantity);
  } catch (err) {
    alert(err.message);
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove('loading');
  }
});`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-beg-06',
    orderIndex: 6,
    title: '6. Shopify Storefront Data and Objects',
    description: 'Master core Liquid storefront objects: product, variant, collection, cart, customer, order, page, and shop. Understand object relationships and safe data rendering.',
    duration: '50 mins',
    xpReward: 165,
    requiresQuiz: false,
    resources: [
      { id: 'res-obj-01', title: 'Shopify Liquid Objects Directory', type: 'documentation', url: 'https://shopify.dev/docs/api/liquid/objects' }
    ],
    lessonContent: {
      overview: 'Liquid objects represent data stored in the Shopify database and made accessible to the storefront runtime. In this module, you will explore product objects, variant properties, collection sorting/filtering algorithms, customer account objects, and the global `shop` and `request` objects. You will learn to navigate nested object relationships while avoiding performance pitfalls like N+1 collection iterations.',
      objectives: [
        'Navigate product and variant properties (prices, compare_at_price, options_with_values, metafields).',
        'Handle collection pagination and sorting rules using `paginate collection.products by 24`.',
        'Access customer and order history objects securely on authenticated customer account pages.',
        'Apply safe Liquid filter chaining (`money_with_currency`, `escape`, `json`, `image_url`).'
      ],
      sections: [
        {
          id: 'sec-storefront-objects',
          title: 'Storefront Data Models & Safe Liquid Iterations',
          content: 'Every Shopify Liquid page executes within a specific context. On `product.json`, the global `product` object is in scope. On `collection.json`, the `collection` object contains all assigned products. Iterating over collections requires pagination tags to prevent server timeout errors.',
          codeSnippets: [
            formatSnippet(
              'liquid',
              'snippets/product-card.liquid',
              'Production Product Card Component with Variant Comparison',
              `{%- comment -%}
  Renders a product card with price badge, sale calculation, and quick-add.
  Usage:
  {% render 'product-card', product: product, show_vendor: true %}
{%- endcomment -%}

<div class="product-card group relative flex flex-col overflow-hidden rounded-xl border bg-white p-4 transition-shadow hover:shadow-md">
  {% if product.featured_media != blank %}
    <a href="{{ product.url }}" class="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 mb-4 block">
      {{ product.featured_media | image_url: width: 600 | image_tag: 
         widths: '300, 600', 
         loading: 'lazy', 
         class: 'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105' 
      }}
    </a>
  {% endif %}

  {% if show_vendor and product.vendor != blank %}
    <span class="text-xs font-mono uppercase text-gray-400 mb-1">{{ product.vendor }}</span>
  {% endif %}

  <h3 class="text-sm font-semibold text-gray-900 line-clamp-2 mb-2">
    <a href="{{ product.url }}">{{ product.title | escape }}</a>
  </h3>

  <div class="mt-auto flex items-center justify-between pt-2">
    <div class="flex items-baseline gap-2">
      <span class="text-base font-bold text-brand">
        {{ product.price | money }}
      </span>
      {% if product.compare_at_price > product.price %}
        <span class="text-xs text-gray-400 line-through">
          {{ product.compare_at_price | money }}
        </span>
        <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700">
          Save {{ product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round }}%
        </span>
      {% endif %}
    </div>

    {% if product.available %}
      <span class="text-xs text-emerald-600 font-medium">In Stock</span>
    {% else %}
      <span class="text-xs text-gray-400 font-medium">Sold Out</span>
    {% endif %}
  </div>
</div>`,
              'A standard product card component calculating discount percentages and formatting prices safely.'
            ),
            formatSnippet(
              'liquid',
              'sections/main-collection.liquid',
              'Paginated Collection Grid Iteration',
              `{% paginate collection.products by 12 %}
  <div class="max-w-7xl mx-auto px-4 py-8">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">{{ collection.title | escape }}</h1>
      {% if collection.description != blank %}
        <div class="mt-2 text-gray-600 rte">{{ collection.description }}</div>
      {% endif %}
    </header>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {% for product in collection.products %}
        {% render 'product-card', product: product, show_vendor: false %}
      {% else %}
        <p class="col-span-full text-center py-12 text-gray-500">
          {{ 'collections.general.no_matches' | t }}
        </p>
      {% endfor %}
    </div>

    {% if paginate.pages > 1 %}
      <nav class="mt-12 flex justify-center gap-2" aria-label="Pagination Navigation">
        {{ paginate | default_pagination }}
      </nav>
    {% endif %}
  </div>
{% endpaginate %}`,
              'Paginated collection loop ensuring safe memory consumption and accessibility compliant navigation.'
            )
          ],
          proTip: 'Never iterate through `collections.all.products` in a for loop without pagination. Doing so hits Shopify Liquid execution limits and results in severe storefront latency or Liquid error crashes.',
          commonMistakes: [
            'Forgetting `paginate` tags around collection loops.',
            'Comparing prices as floating points instead of integer cents (`product.price` is in cents, e.g. 2999 = $29.99).',
            'Displaying raw unescaped product titles inside HTML attributes without `| escape`.'
          ]
        }
      ],
      keyTakeaways: [
        'Shopify currency values are integers representing cents (e.g. 1999 = $19.99); use `money` filters for localized presentation.',
        'Always wrap collection product loops in `{% paginate %}` blocks.',
        'Use `product.compare_at_price` to compute and display promotional sale badges dynamically.'
      ],
      practiceExercises: [
        {
          id: 'ex-beg-06',
          title: 'Render Customer Order Table',
          instructions: 'Write a Liquid table that iterates through customer.orders and renders order name, financial status, fulfillment status, and total price formatted in currency.',
          starterCode: `{% if customer.orders.size > 0 %}
  <table>
    <!-- Loop through orders -->
  </table>
{% endif %}`,
          solutionCode: `{% if customer.orders.size > 0 %}
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="border-b">
        <th>Order</th>
        <th>Date</th>
        <th>Payment</th>
        <th>Fulfillment</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {% for order in customer.orders %}
        <tr class="border-b">
          <td><a href="{{ order.customer_url }}" class="text-brand font-bold">{{ order.name }}</a></td>
          <td>{{ order.created_at | date: "%B %d, %Y" }}</td>
          <td><span class="badge">{{ order.financial_status_label }}</span></td>
          <td><span class="badge">{{ order.fulfillment_status_label }}</span></td>
          <td>{{ order.total_price | money }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
{% endif %}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-beg-07',
    orderIndex: 7,
    title: '7. Metafields and Metaobjects',
    description: 'Model complex custom data using Shopify Metafields and Metaobjects. Define namespaces, keys, dynamic sources, and structured content models rendered seamlessly in themes.',
    duration: '50 mins',
    xpReward: 170,
    requiresQuiz: false,
    resources: [
      { id: 'res-meta-01', title: 'Shopify Metafields Guide', type: 'documentation', url: 'https://shopify.dev/docs/apps/custom-data/metafields' },
      { id: 'res-meta-02', title: 'Metaobjects Architectural Guide', type: 'article', url: 'https://shopify.dev/docs/apps/custom-data/metaobjects' }
    ],
    lessonContent: {
      overview: 'Modern Shopify stores require custom structured data beyond basic product titles and descriptions. Metafields allow developers to attach custom fields (materials, care instructions, size charts, PDF manuals) to products, collections, customers, and orders. Metaobjects take this further by creating reusable multi-field content entities (like Author profiles, Brand Ambassadors, or Store Locations).',
      objectives: [
        'Define Metafield definitions with specific data types (single_line_text_field, file_reference, json, rating).',
        'Access product and collection metafields safely in Liquid using `.value` property unwrapping.',
        'Model multi-field entities using Metaobjects and render lists of metaobjects on the storefront.',
        'Connect metafields to theme section schemas using Dynamic Sources.'
      ],
      sections: [
        {
          id: 'sec-meta-modeling',
          title: 'Metafield Access Patterns & Metaobject Modeling',
          content: 'Metafields are organized by `namespace.key`. To access a metafield value in Liquid, use `resource.metafields.namespace.key.value`. If the metafield is a reference (e.g., to a file or product), `.value` automatically resolves the referenced object.',
          codeSnippets: [
            formatSnippet(
              'liquid',
              'snippets/product-specifications.liquid',
              'Accessing Typed Product Metafields Safely',
              `{%- comment -%}
  Renders technical product specifications stored in custom metafields.
{%- endcomment -%}

{% assign specs = product.metafields.custom.technical_specifications.value %}
{% assign user_guide = product.metafields.custom.user_manual_pdf.value %}

<div class="product-specs border-t pt-6 mt-6">
  <h4 class="text-sm font-mono uppercase tracking-wider text-gray-500 mb-4">
    Technical Specifications
  </h4>

  {% if specs != blank %}
    <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
      {% for item in specs %}
        <div class="flex justify-between border-b py-1">
          <dt class="text-gray-500 font-medium">{{ item.label | escape }}:</dt>
          <dd class="text-gray-900 font-mono">{{ item.value | escape }}</dd>
        </div>
      {% endfor %}
    </dl>
  {% endif %}

  {% if user_guide != blank %}
    <div class="mt-4">
      <a
        href="{{ user_guide.url }}"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline"
      >
        <span>Download PDF User Manual ({{ user_guide.size | divided_by: 1024 }} KB)</span>
      </a>
    </div>
  {% endif %}
</div>`,
              'Accessing list.single_line_text_field and file_reference metafields with safe .value unwrapping.'
            ),
            formatSnippet(
              'liquid',
              'sections/author-showcase.liquid',
              'Rendering Metaobject Entity Collections',
              `{%- comment -%}
  Iterates over the "author_profile" metaobject definition.
{%- endcomment -%}

<section class="authors-grid max-w-7xl mx-auto px-4 py-12">
  <h2 class="text-2xl font-bold mb-8">Meet Our Contributing Engineers</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {% for author in shop.metaobjects.author_profile.values %}
      <div class="author-card p-6 rounded-xl border bg-white shadow-sm flex flex-col items-center text-center">
        {% if author.avatar.value != blank %}
          <div class="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-brand">
            {{ author.avatar.value | image_url: width: 200 | image_tag: class: 'w-full h-full object-cover' }}
          </div>
        {% endif %}
        
        <h3 class="text-lg font-bold text-gray-900">{{ author.full_name.value | escape }}</h3>
        <p class="text-xs font-mono text-brand mb-2">{{ author.role_title.value | escape }}</p>
        <p class="text-sm text-gray-600 mb-4">{{ author.biography.value | escape }}</p>

        {% if author.github_handle.value != blank %}
          <a
            href="https://github.com/{{ author.github_handle.value }}"
            target="_blank"
            class="text-xs text-gray-500 hover:text-black font-mono"
          >
            @{{ author.github_handle.value }}
          </a>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</section>`,
              'Rendering multi-field Metaobjects directly from the global shop.metaobjects scope.'
            )
          ],
          proTip: 'Always append `.value` when accessing modern Shopify metafields. In legacy Liquid, metafields returned raw string values, but in Online Store 2.0, `.value` returns typed objects (e.g. MediaImage, File, Color, List).',
          commonMistakes: [
            'Forgetting `.value`, resulting in Liquid outputting "[MetafieldDrop]" or raw JSON strings.',
            'Hardcoding metafield namespaces in templates without creating the corresponding definitions in Shopify Admin > Custom Data.',
            'Attempting to edit metaobjects client-side without using authenticated backend Admin API mutations.'
          ]
        }
      ],
      keyTakeaways: [
        'Metafields attach custom typed data to Shopify resources; always unwrap with `.value`.',
        'Metaobjects define independent multi-field content models (e.g. authors, store locations).',
        'Merchants can bind metafields directly to section settings via Dynamic Sources in the Theme Editor.'
      ],
      practiceExercises: [
        {
          id: 'ex-beg-07',
          title: 'Render Care Instructions Metafield',
          instructions: 'Write a Liquid snippet that checks if product.metafields.custom.care_instructions exists and renders it inside an accordion element.',
          starterCode: `{%- comment -%} Care instructions accordion {%- endcomment -%}`,
          solutionCode: `{% assign care = product.metafields.custom.care_instructions.value %}
{% if care != blank %}
  <details class="border-b py-3">
    <summary class="font-semibold text-sm cursor-pointer">Care Instructions</summary>
    <div class="mt-2 text-sm text-gray-600 leading-relaxed">
      {{ care | newline_to_br }}
    </div>
  </details>
{% endif %}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-beg-08',
    orderIndex: 8,
    title: '8. Shopify Theme Performance and Accessibility',
    description: 'Optimize Core Web Vitals (LCP, INP, CLS) and achieve WCAG 2.1 AA accessibility compliance for high-converting, high-speed Shopify storefronts.',
    duration: '55 mins',
    xpReward: 175,
    requiresQuiz: false,
    resources: [
      { id: 'res-perf-01', title: 'Shopify Theme Performance Best Practices', type: 'documentation', url: 'https://shopify.dev/docs/themes/best-practices/performance' },
      { id: 'res-perf-02', title: 'Core Web Vitals Optimization Guide', type: 'article', url: 'https://web.dev/vitals/' }
    ],
    lessonContent: {
      overview: 'Storefront speed directly impacts conversion rates, search rankings, and return on ad spend. In this module, you will learn how to optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) on Shopify themes. You will also implement WCAG 2.1 AA standards for keyboard navigation and screen reader support.',
      objectives: [
        'Optimize LCP using priority image hints (`preload: true`, `fetchpriority="high"`).',
        'Eliminate Cumulative Layout Shift (CLS) by enforcing aspect ratios and image dimensions.',
        'Reduce Total Blocking Time and optimize INP by deferring non-critical JavaScript.',
        'Implement WCAG 2.1 AA keyboard accessibility with skip links, visible focus rings, and ARIA labels.'
      ],
      sections: [
        {
          id: 'sec-perf-cwv',
          title: 'Core Web Vitals & Accessibility Optimization',
          content: 'The most common theme performance bottleneck is unoptimized hero banners that delay LCP. By utilizing `image_tag` with `preload: true`, Shopify automatically injects `<link rel="preload">` in the document head. Lazy loading below-the-fold assets using `loading: "lazy"` frees up main-thread CPU time.',
          codeSnippets: [
            formatSnippet(
              'liquid',
              'sections/hero-banner.liquid',
              'High-Performance LCP-Optimized Hero Section',
              `{%- comment -%}
  LCP-Optimized Hero Banner
  Preloads the desktop and mobile image to achieve sub-second Largest Contentful Paint.
{%- endcomment -%}

<div class="hero-banner relative overflow-hidden bg-gray-900 text-white min-h-[480px] flex items-center">
  {% if section.settings.image != blank %}
    {{ section.settings.image | image_url: width: 2400 | image_tag:
       widths: '640, 1080, 1920, 2400',
       sizes: '100vw',
       preload: true,
       fetchpriority: 'high',
       class: 'absolute inset-0 w-full h-full object-cover z-0'
    }}
  {% endif %}

  <div class="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
    <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
      {{ section.settings.heading | escape }}
    </h1>
    <p class="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
      {{ section.settings.subheading | escape }}
    </p>
    {% if section.settings.button_link != blank %}
      <a
        href="{{ section.settings.button_link }}"
        class="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-white text-gray-900 hover:bg-gray-100 transition-colors shadow-lg"
      >
        {{ section.settings.button_label | default: 'Shop Now' | escape }}
      </a>
    {% endif %}
  </div>
</div>`,
              'Hero banner with preload: true and fetchpriority: "high" to minimize LCP latency.'
            ),
            formatSnippet(
              'javascript',
              'assets/performance-observer.js',
              'Real-User Performance Monitoring Script',
              `// Monitor Core Web Vitals on client side
if ('PerformanceObserver' in window) {
  // 1. Observe Largest Contentful Paint (LCP)
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('LCP Candidate Render Time:', Math.round(entry.startTime), 'ms', entry.element);
    }
  }).observe({ type: 'largest-contentful-paint', buffered: true });

  // 2. Observe Cumulative Layout Shift (CLS)
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        console.log('Current CLS score:', clsValue.toFixed(4));
      }
    }
  }).observe({ type: 'layout-shift', buffered: true });
}`,
              'Client-side PerformanceObserver utility for tracking real-world LCP and CLS metrics.'
            )
          ],
          proTip: 'Never set `loading="lazy"` on your hero banner or first visible product image. Lazy loading the LCP element delays its download until after the layout phase, significantly worsening your Google Lighthouse performance score.',
          commonMistakes: [
            'Lazy loading above-the-fold hero images.',
            'Injecting heavy third-party app scripts synchronously in the `<head>` of `theme.liquid`.',
            'Using `outline: none` in CSS without providing a visible `:focus-visible` alternative.'
          ]
        }
      ],
      keyTakeaways: [
        'Preload the LCP hero image using `preload: true` and `fetchpriority="high"`.',
        'Lazy load below-the-fold images and section components to reduce initial payload.',
        'Ensure visible keyboard focus states (`:focus-visible`) and WCAG contrast ratios.'
      ],
      practiceExercises: [
        {
          id: 'ex-beg-08',
          title: 'Implement an Accessible Skip to Content Link',
          instructions: 'Write the HTML and CSS snippet for an accessible "Skip to content" link that remains visually hidden until focused by a keyboard tab key.',
          starterCode: `<a href="#MainContent">Skip to content</a>`,
          solutionCode: `<a
  href="#MainContent"
  class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
>
  Skip to main content
</a>`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-beg-09',
    orderIndex: 9,
    title: '9. Shopify Storefront APIs Overview',
    description: 'Understand the architecture of Shopify Storefront API and GraphQL query mechanics. Learn public token management, rate limit costs, and secure API client usage.',
    duration: '50 mins',
    xpReward: 165,
    requiresQuiz: false,
    resources: [
      { id: 'res-api-01', title: 'Storefront API GraphQL Reference', type: 'documentation', url: 'https://shopify.dev/docs/api/storefront' }
    ],
    lessonContent: {
      overview: 'The Shopify Storefront API allows developers to build custom e-commerce experiences using GraphQL. Whether building headless web apps, mobile apps, or headless micro-frontends inside an Online Store theme, the Storefront API gives complete unauthenticated access to products, collections, customer access tokens, and checkout creation.',
      objectives: [
        'Distinguish between Storefront API (public, unauthenticated) and Admin API (private, privileged).',
        'Construct GraphQL queries to retrieve products, variants, and collection listings.',
        'Execute mutations to create carts and generate checkout URLs.',
        'Understand API query cost calculations and rate limits.'
      ],
      sections: [
        {
          id: 'sec-sf-graphql',
          title: 'GraphQL Storefront Queries & Cart Mutations',
          content: 'The Storefront API endpoint is accessible at `https://{shop}.myshopify.com/api/2024-01/graphql.json`. Requests require the `X-Shopify-Storefront-Access-Token` header. Because this token is public, it can be safely used in client-side code.',
          codeSnippets: [
            formatSnippet(
              'javascript',
              'assets/storefront-client.js',
              'Authenticated Storefront API GraphQL Client',
              `/**
 * Storefront API GraphQL Client
 */
export class StorefrontClient {
  constructor(domain, publicAccessToken) {
    this.endpoint = \`https://\${domain}/api/2024-01/graphql.json\`;
    this.token = publicAccessToken;
  }

  async query(graphqlQuery, variables = {}) {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': this.token,
      },
      body: JSON.stringify({ query: graphqlQuery, variables })
    });

    const json = await response.json();
    if (json.errors) {
      throw new Error(json.errors.map(e => e.message).join(', '));
    }
    return json.data;
  }

  async fetchProduct(handle) {
    const PRODUCT_QUERY = \`
      query GetProduct($handle: String!) {
        product(handle: $handle) {
          id
          title
          descriptionHtml
          availableForSale
          variants(first: 10) {
            nodes {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
            }
          }
        }
      }
    \`;
    return await this.query(PRODUCT_QUERY, { handle });
  }
}`,
              'A standard lightweight JavaScript client for querying the Shopify Storefront GraphQL API.'
            ),
            formatSnippet(
              'javascript',
              'assets/create-cart-mutation.js',
              'Creating a Cart via Storefront API Mutation',
              `const CART_CREATE_MUTATION = \`
  mutation CreateCart($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
\`;

async function initializeHeadlessCheckout(client, variantGid, quantity = 1) {
  const data = await client.query(CART_CREATE_MUTATION, {
    lines: [{ merchandiseId: variantGid, quantity }]
  });

  if (data.cartCreate.userErrors.length > 0) {
    throw new Error(data.cartCreate.userErrors[0].message);
  }

  console.log('Checkout URL generated:', data.cartCreate.cart.checkoutUrl);
  return data.cartCreate.cart;
}`,
              'Executing cartCreate mutation to initialize a checkout session in headless and custom frontends.'
            )
          ],
          proTip: 'Storefront API variant IDs are global GraphQL IDs (e.g. `gid://shopify/ProductVariant/41234567890123`). If you have a numeric Liquid ID (`41234567890123`), prepend `gid://shopify/ProductVariant/` when querying GraphQL.',
          commonMistakes: [
            'Using Admin API tokens in frontend client code.',
            'Passing numeric ID strings to GraphQL fields that expect GIDs (`gid://shopify/...`).',
            'Failing to handle GraphQL `userErrors` returned inside mutation response payloads.'
          ]
        }
      ],
      keyTakeaways: [
        'Storefront API uses GraphQL and public access tokens for client-side and headless queries.',
        'GraphQL mutations return `userErrors` arrays that must be checked in addition to HTTP status codes.',
        'All Shopify GraphQL IDs use the Global ID (GID) format (`gid://shopify/Type/12345`).'
      ],
      practiceExercises: [
        {
          id: 'ex-beg-09',
          title: 'Write a Storefront GraphQL Query',
          instructions: 'Write a GraphQL query that fetches the shop name, currency code, and first 5 products with their title and handle.',
          starterCode: `query GetShopInfo {
  // Write query here
}`,
          solutionCode: `query GetShopInfo {
  shop {
    name
    paymentSettings {
      currencyCode
    }
  }
  products(first: 5) {
    nodes {
      id
      title
      handle
    }
  }
}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-beg-10',
    orderIndex: 10,
    title: '10. Shopify Webhooks and Events',
    description: 'Build resilient event-driven architectures with Shopify Webhooks. Validate HMAC SHA-256 signatures, handle exponential backoff retries, and ensure idempotent processing.',
    duration: '50 mins',
    xpReward: 170,
    requiresQuiz: false,
    resources: [
      { id: 'res-wh-01', title: 'Shopify Webhooks Guide', type: 'documentation', url: 'https://shopify.dev/docs/apps/webhooks' },
      { id: 'res-wh-02', title: 'Webhook Signature Verification', type: 'article', url: 'https://shopify.dev/docs/apps/webhooks/configuration/https#step-5-verify-the-webhook' }
    ],
    lessonContent: {
      overview: 'Webhooks are automated HTTP POST notifications sent by Shopify whenever state changes in a store (such as `orders/create`, `products/update`, or `customers/delete`). Because webhooks deliver asynchronously over public networks, developers must master cryptographic signature validation, fast 200 OK acknowledgments, retry handling, and idempotency deduplication.',
      objectives: [
        'Understand the Shopify webhook lifecycle and common subscription topics.',
        'Cryptographically verify incoming webhook payloads using Node.js crypto and HMAC SHA-256.',
        'Implement the 200 OK acknowledgment pattern to prevent Shopify webhook timeouts.',
        'Design idempotent database deduplication using the `X-Shopify-Webhook-Id` header.'
      ],
      sections: [
        {
          id: 'sec-webhook-handler',
          title: 'HMAC Verification & Idempotent Webhook Consumer',
          content: 'Shopify requires your webhook receiver to respond with HTTP 200 OK within 5 seconds. If your endpoint times out or returns 5xx errors, Shopify will retry with exponential backoff for 48 hours before unsubscribing the webhook. Best practice is to verify HMAC, queue the payload into Redis/BullMQ, and return 200 OK immediately.',
          codeSnippets: [
            formatSnippet(
              'javascript',
              'server/webhook-handler.js',
              'Node.js Express Webhook Verification & Processor',
              `import crypto from 'crypto';
import express from 'express';

const app = express();

// Important: Shopify HMAC verification requires the RAW body buffer!
app.post('/api/webhooks/orders-create', 
  express.raw({ type: 'application/json' }), 
  async (req, res) => {
    const hmacHeader = req.get('x-shopify-hmac-sha256');
    const topic = req.get('x-shopify-topic');
    const shop = req.get('x-shopify-shop-domain');
    const webhookId = req.get('x-shopify-webhook-id');
    const rawBody = req.body;

    // 1. Verify cryptographic HMAC signature
    const generatedHmac = crypto
      .createHmac('sha256', process.env.SHOPIFY_API_SECRET)
      .update(rawBody, 'utf8')
      .digest('base64');

    if (!crypto.timingSafeEqual(Buffer.from(generatedHmac), Buffer.from(hmacHeader))) {
      console.error('Unauthorized webhook signature mismatch from:', shop);
      return res.status(401).send('HMAC signature verification failed');
    }

    // 2. Parse payload safely
    const payload = JSON.parse(rawBody.toString('utf8'));

    // 3. Check for duplicate webhook (Idempotency)
    const isAlreadyProcessed = await checkWebhookProcessed(webhookId);
    if (isAlreadyProcessed) {
      console.log(\`Webhook \${webhookId} already processed. Skipping duplicate.\`);
      return res.status(200).send('Duplicate acknowledged');
    }

    // 4. Mark webhook as received & dispatch to background worker
    await markWebhookAsProcessing(webhookId);
    await backgroundQueue.add('process-order', { shop, order: payload });

    // 5. Acknowledge within < 5 seconds
    res.status(200).send('Webhook received and queued');
  }
);`,
              'Production Express.js route verifying raw body buffer HMAC SHA-256 signatures and deduplicating webhook deliveries.'
            ),
            formatSnippet(
              'bash',
              'trigger-test-webhook.sh',
              'Testing Webhooks Locally via Shopify CLI',
              `# Trigger a mock orders/create webhook delivered to local localhost endpoint
shopify webhook trigger \\
  --topic orders/create \\
  --address http://localhost:3000/api/webhooks/orders-create \\
  --api-version 2024-01 \\
  --shared-secret your_app_secret_here`,
              'Shopify CLI command to trigger mock webhook events against local development servers.'
            )
          ],
          proTip: 'Always use `crypto.timingSafeEqual()` instead of standard `===` when comparing cryptographic HMAC strings. This protects your webhook receiver against timing attack vulnerabilities.',
          commonMistakes: [
            'Parsing the JSON body with `express.json()` before calculating the HMAC. Modifying whitespace or key orders will cause the HMAC hash calculation to fail.',
            'Performing long-running database syncs or external API calls inside the HTTP webhook handler, causing Shopify to time out at 5 seconds.',
            'Not tracking `x-shopify-webhook-id` to prevent duplicate order processing upon retries.'
          ]
        }
      ],
      keyTakeaways: [
        'Verify HMAC SHA-256 against the raw unparsed request buffer using `crypto.timingSafeEqual()`.',
        'Respond with HTTP 200 OK within 5 seconds and delegate heavy processing to background queues.',
        'Use `X-Shopify-Webhook-Id` as an idempotency key to prevent processing duplicate retries.'
      ],
      practiceExercises: [
        {
          id: 'ex-beg-10',
          title: 'Implement Webhook HMAC Verification Function',
          instructions: 'Write a standalone TypeScript function `verifyShopifyHmac(rawBody: string, hmacHeader: string, secret: string): boolean` that returns true if valid.',
          starterCode: `function verifyShopifyHmac(rawBody: string, hmacHeader: string, secret: string): boolean {
  // Implement verification
}`,
          solutionCode: `import crypto from 'crypto';

function verifyShopifyHmac(rawBody: string, hmacHeader: string, secret: string): boolean {
  if (!rawBody || !hmacHeader || !secret) return false;
  const hash = crypto
    .createHmac('sha256', secret)
    .update(rawBody, 'utf8')
    .digest('base64');
  try {
    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(hmacHeader));
  } catch {
    return false;
  }
}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-beg-11',
    orderIndex: 11,
    title: '11. Git, Deployment and Developer Workflow',
    description: 'Establish enterprise CI/CD deployment pipelines, automated linting with Theme Check, GitHub integration, staging previews, and rollback management.',
    duration: '50 mins',
    xpReward: 165,
    requiresQuiz: false,
    resources: [
      { id: 'res-git-01', title: 'Shopify GitHub Integration', type: 'documentation', url: 'https://shopify.dev/docs/themes/tools/github' },
      { id: 'res-git-02', title: 'Theme Check Linter Documentation', type: 'article', url: 'https://shopify.dev/docs/themes/tools/theme-check' }
    ],
    lessonContent: {
      overview: 'Professional Shopify engineering requires automated release pipelines that prevent syntax errors, broken Liquid tags, and unexpected regressions on production stores. In this module, you will learn how to connect GitHub repositories directly to Shopify themes, configure GitHub Actions for automated linting (`shopify theme check`), manage staging theme slots, and execute instantaneous rollbacks.',
      objectives: [
        'Connect Shopify Online Store themes directly to Git branches for continuous deployment.',
        'Configure `.theme-check.yml` to enforce coding standards and detect unused snippets or missing assets.',
        'Create a GitHub Actions CI workflow that tests and deploys theme releases automatically.',
        'Implement release tags and backup rollback procedures for zero-downtime deployments.'
      ],
      sections: [
        {
          id: 'sec-cicd-workflow',
          title: 'GitHub Actions CI/CD & Automated Theme Check Pipeline',
          content: 'Shopify provides native GitHub integration where commits to a linked branch automatically deploy to a designated theme. For enterprise control, teams also use GitHub Actions to run automated linters and push code via Shopify CLI tokens.',
          codeSnippets: [
            formatSnippet(
              'yaml',
              '.github/workflows/theme-ci.yml',
              'GitHub Actions Theme CI/CD Workflow',
              `name: Shopify Theme CI & Deployment Pipeline

on:
  push:
    branches: [main, staging]
  pull_request:
    branches: [main]

jobs:
  lint-and-validate:
    name: Run Theme Check & Syntax Linter
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm ci

      - name: Run Theme Check Linter
        run: npx @shopify/theme-check --fail-level error

      - name: Build Production Assets
        run: npm run build

  deploy-staging:
    name: Deploy to Staging Theme Slot
    needs: lint-and-validate
    if: github.ref == 'refs/heads/staging'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy via Shopify CLI
        env:
          SHOPIFY_FLAG_STORE: \${{ secrets.SHOPIFY_STORE_DOMAIN }}
          SHOPIFY_CLI_THEME_TOKEN: \${{ secrets.SHOPIFY_STAGING_THEME_TOKEN }}
        run: |
          npx @shopify/cli theme push --theme-id \${{ secrets.STAGING_THEME_ID }} --unpublished`,
              'GitHub Actions workflow running Theme Check linting and deploying to staging upon push.'
            ),
            formatSnippet(
              'yaml',
              '.theme-check.yml',
              'Shopify Theme Check Linter Rules Configuration',
              `# Shopify Theme Check Configuration
root: .
require_all_rules: true

AssetPreload:
  enabled: true
  severity: error

DeprecateBgsizes:
  enabled: true

HtmlParsing:
  enabled: true
  severity: error

ImgWidthAndHeight:
  enabled: true
  severity: suggestion

LiquidHTML:
  enabled: true
  severity: error

UnusedSnippet:
  enabled: true
  severity: warning

ParserBlockingJavaScript:
  enabled: true
  severity: warning`,
              'Rules configuration enforcing asset preloading, image dimensions, and erroring on broken Liquid syntax.'
            )
          ],
          proTip: 'Always exclude `config/settings_data.json` from feature branch pull requests unless you are deliberately updating theme-wide default values. Merchants configure settings live in production, and merging an outdated `settings_data.json` will overwrite merchant customizations.',
          commonMistakes: [
            'Overwriting production `settings_data.json` with local developer dummy settings.',
            'Deploying without running `theme-check`, leading to runtime Liquid syntax errors on live checkout pages.',
            'Working directly on the `main` branch without peer code review.'
          ]
        }
      ],
      keyTakeaways: [
        'Automate quality control using Shopify Theme Check in continuous integration pipelines.',
        'Protect production merchant configurations by managing `settings_data.json` carefully in Git.',
        'Deploy changes to unpublished staging theme slots for QA verification before publishing live.'
      ],
      practiceExercises: [
        {
          id: 'ex-beg-11',
          title: 'Configure Theme Check Ignore Rules',
          instructions: 'Create a .theme-check.yml configuration file that enables all rules but ignores third-party vendor minified libraries in assets/vendor/.',
          starterCode: `# .theme-check.yml configuration`,
          solutionCode: `root: .
require_all_rules: true

ignore:
  - assets/vendor/**
  - node_modules/**`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-beg-12',
    orderIndex: 12,
    title: '12. Beginner Project Brief & Feature Architecture',
    description: 'Synthesize Beginner Level skills to architect and build a high-performance, accessible, and schema-configurable Custom Shopify Theme Feature.',
    duration: '40 mins',
    xpReward: 150,
    requiresQuiz: false,
    resources: [
      { id: 'res-proj-01', title: 'Beginner Capstone Specification', type: 'documentation', url: 'https://shopify.dev/docs/themes/getting-started' }
    ],
    lessonContent: {
      overview: 'In this preparatory module for your Beginner Capstone Project, you will synthesize all learned fundamentals: Section Schema design, dynamic block configurations, AJAX Cart API integration, Metafield binding, responsive CSS layouts, and keyboard accessibility standards. You will review the required technical deliverables and architecture diagram for the Custom Shopify Theme Feature project.',
      objectives: [
        'Review the end-to-end technical requirements for the Beginner Capstone Project.',
        'Design a modular section component architecture with customizable schema settings and block presets.',
        'Prepare clean JavaScript event handling and AJAX Cart API integration.',
        'Verify WCAG accessibility and performance audit benchmarks before final project submission.'
      ],
      sections: [
        {
          id: 'sec-project-blueprint',
          title: 'Capstone Technical Architecture Blueprint',
          content: 'The Beginner Capstone requires creating a production-grade Custom Shopify Theme Feature (such as a Dynamic Product Bundle Builder or an Interactive Featured Showcase Section). The feature must be fully configurable in the Theme Editor, support dynamic blocks, integrate with the AJAX Cart API, and meet strict accessibility criteria.',
          codeSnippets: [
            formatSnippet(
              'liquid',
              'sections/bundle-builder-preview.liquid',
              'Architectural Skeleton of Capstone Section',
              `{%- comment -%}
  Beginner Capstone Section Blueprint: Interactive Product Bundle Builder
{%- endcomment -%}

<section class="bundle-builder max-w-7xl mx-auto px-4 py-12" data-bundle-section>
  <header class="text-center mb-8">
    <h2 class="text-3xl font-bold">{{ section.settings.heading | escape }}</h2>
    <p class="text-gray-600 mt-2">{{ section.settings.subheading | escape }}</p>
  </header>

  <div class="bundle-slots grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    {% for block in section.blocks %}
      <div class="bundle-slot-card p-6 border-2 border-dashed rounded-xl" {{ block.shopify_attributes }}>
        <span class="text-xs font-mono text-brand">Tier {{ forloop.index }}</span>
        <h3 class="text-lg font-bold mt-1">{{ block.settings.tier_name | escape }}</h3>
        <!-- Product selector & dynamic price -->
      </div>
    {% endfor %}
  </div>

  <div class="bundle-summary p-6 bg-gray-50 rounded-xl flex items-center justify-between">
    <div>
      <span class="text-sm text-gray-500">Total Bundle Price:</span>
      <span class="text-2xl font-bold text-brand block" data-bundle-total>$0.00</span>
    </div>
    <button type="button" class="button button--primary px-8 py-3" data-add-bundle-btn disabled>
      Add Bundle to Cart
    </button>
  </div>
</section>`,
              'High-level architectural blueprint for the beginner custom section capstone project.'
            )
          ],
          proTip: 'Ensure all user-facing strings are wrapped in translation filters (`| t`) or exposed via section settings so international stores can localize the feature seamlessly.',
          commonMistakes: [
            'Relying on hardcoded product IDs that fail when testing on different development stores.',
            'Not verifying mobile responsiveness across screen widths under 375px.'
          ]
        }
      ],
      keyTakeaways: [
        'Capstone projects test end-to-end theme development skills against production standards.',
        'Ensure clean separation between section Liquid markup, schema definitions, and JavaScript controllers.',
        'Verify zero console errors and 100% Theme Check compliance prior to submission.'
      ],
      practiceExercises: [
        {
          id: 'ex-beg-12',
          title: 'Design Section Deliverable Checklist',
          instructions: 'Outline the 10 core deliverables required for your Beginner Capstone project submission.',
          starterCode: `// 10 Deliverables Checklist`,
          solutionCode: `// 1. Technical Project Brief
// 2. Theme Architecture & File Map
// 3. Custom Liquid Section Markup
// 4. Comprehensive Section Schema with Types & Labels
// 5. Dynamic Block Configuration & Preset
// 6. Responsive CSS Grid/Flexbox Stylesheet
// 7. JavaScript AJAX Cart & State Controller
// 8. Product & Variant Dynamic Integration
// 9. WCAG 2.1 AA Accessibility Verification
// 10. Performance & Core Web Vitals Audit Report`
        }
      ]
    }
  }
];

// Capstone Project Task
const BEGINNER_PROJECT_TASK = {
  id: 'shopify-dev-beg-13',
  orderIndex: 13,
  title: 'Beginner Project: Custom Shopify Theme Feature',
  description: 'Design, code, document, and deploy a production-ready Custom Shopify Theme Feature with section schema, dynamic blocks, AJAX Cart integration, and full Theme Editor compatibility.',
  duration: '4 hours',
  xpReward: 350,
  isProject: true,
  type: 'project',
  requiresQuiz: false,
  projectDetails: {
    title: 'Beginner Capstone: Custom Shopify Theme Feature',
    overview: 'Build an enterprise-quality, fully responsive, and accessible Custom Theme Feature (e.g. Dynamic Product Bundle Builder or Interactive Collection Showcase) using Online Store 2.0 standards, Liquid, modern CSS, and vanilla JavaScript.',
    deliverables: [
      {
        id: 'del-01',
        title: 'Project Technical Brief & Scope Document',
        description: 'Define target merchant persona, problem statement, UX user flows, and technical acceptance criteria.',
        checklist: ['Detailed merchant problem statement', 'User interaction flow diagram', 'Technical requirements & browser support matrix']
      },
      {
        id: 'del-02',
        title: 'Theme Architecture Plan & File Map',
        description: 'Map out the directory structure detailing layout, JSON template, section, snippet, and asset locations.',
        checklist: ['Folder directory breakdown', 'Section-to-snippet dependency graph', 'Asset compilation pipeline specifications']
      },
      {
        id: 'del-03',
        title: 'Custom Liquid Section Implementation',
        description: 'Write the complete semantic HTML5 and Liquid markup for the custom section feature.',
        checklist: ['Semantic container elements', 'Liquid object bindings with escape filters', 'Theme Editor shopify_attributes on blocks']
      },
      {
        id: 'del-04',
        title: 'Comprehensive Section Schema Definition',
        description: 'Write the {% schema %} JSON declaring section settings (colors, ranges, text, image pickers) and block types.',
        checklist: ['At least 4 distinct setting types', 'Typed block definitions with max limits', 'Clear labels and info tooltips']
      },
      {
        id: 'del-05',
        title: 'Dynamic Block Configurations & Presets',
        description: 'Configure default presets so merchants can discover and insert the feature instantly from the Theme Editor.',
        checklist: ['Pre-populated default settings', 'At least 3 initial sample blocks in preset', 'Valid JSON syntax passing Theme Check']
      },
      {
        id: 'del-06',
        title: 'Responsive CSS Grid & Flexbox Styling',
        description: 'Engineer mobile-first, responsive stylesheets without layout overflow across all breakpoints.',
        checklist: ['Fluid mobile-to-desktop grid', 'CSS custom properties tied to theme settings', 'Zero horizontal scrolling on mobile']
      },
      {
        id: 'del-07',
        title: 'JavaScript Interactivity & State Controller',
        description: 'Develop vanilla JavaScript / Web Component module managing user interactions and selections.',
        checklist: ['Zero external library dependencies', 'Clean CustomEvent dispatching', 'Theme Editor live reload event support']
      },
      {
        id: 'del-08',
        title: 'AJAX Cart API Integration',
        description: 'Connect user actions directly to /cart/add.js with loading states and error handling.',
        checklist: ['Asynchronous fetch operations with try/catch', 'Dynamic subtotal and line item calculations', 'Inventory limit error notifications']
      },
      {
        id: 'del-09',
        title: 'Product & Metafield Data Integration',
        description: 'Integrate dynamic product objects and custom metafields into the rendered markup.',
        checklist: ['Safe .value metafield unwrapping', 'Fallback rendering when metafields are empty', 'Dynamic pricing and variant badges']
      },
      {
        id: 'del-10',
        title: 'WCAG 2.1 AA Accessibility Checklist',
        description: 'Audit and verify full keyboard navigation, ARIA landmarks, and contrast ratios.',
        checklist: ['Visible :focus-visible outlines', 'Screen reader announcements on cart update', 'Passing automated axe-core accessibility audit']
      },
      {
        id: 'del-11',
        title: 'Performance & Core Web Vitals Checklist',
        description: 'Optimize asset sizes, lazy loading, and image dimensions to maintain high Lighthouse scores.',
        checklist: ['Responsive image_tag with widths/sizes', 'Zero render-blocking scripts in head', 'Lighthouse Performance score >= 90']
      },
      {
        id: 'del-12',
        title: 'Git Version Control Repository & Commits',
        description: 'Maintain structured Git history with descriptive commit messages following Conventional Commits.',
        checklist: ['Clean branch structure (feature/bundle-builder)', 'Descriptive atomic commit history', 'Proper .shopifyignore configuration']
      },
      {
        id: 'del-13',
        title: 'Technical README Documentation',
        description: 'Write comprehensive developer documentation covering installation, configuration, and customization.',
        checklist: ['Installation instructions with Shopify CLI', 'Schema settings documentation table', 'Troubleshooting and known constraints']
      },
      {
        id: 'del-14',
        title: 'QA Testing & Staging Deployment Checklist',
        description: 'Deploy to an unpublished staging theme on a development store and verify cross-browser compatibility.',
        checklist: ['Cross-browser testing (Chrome, Safari, Firefox, Edge)', 'Shopify Theme Check clean run with zero errors', 'Live staging preview verification link']
      }
    ]
  }
};

// Final Assessment Task
const BEGINNER_ASSESSMENT_TASK = {
  id: 'shopify-dev-beg-14',
  orderIndex: 14,
  title: 'Beginner Assessment: Shopify Development Fundamentals',
  description: 'Test your mastery of Shopify platform architecture, CLI workflows, Online Store 2.0 themes, Liquid objects, AJAX Cart API, Metafields, and Webhook fundamentals.',
  duration: '35 mins',
  xpReward: 300,
  isFinalAssessment: true,
  type: 'assessment',
  passingScore: 15,
  totalQuestions: 20,
  questions: BEGINNER_ASSESSMENT
};

const ALL_BEGINNER_TASKS = [
  ...BEGINNER_MODULES,
  BEGINNER_PROJECT_TASK,
  BEGINNER_ASSESSMENT_TASK
];

// Write file
const fileHeader = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export const SHOPIFY_DEV_BEGINNER_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(BEGINNER_ASSESSMENT, null, 2)};

export const SHOPIFY_DEV_BEGINNER_TASKS: Task[] = ${JSON.stringify(ALL_BEGINNER_TASKS, null, 2)};
`;

fs.writeFileSync(targetFile, fileHeader, 'utf8');
console.log('✅ Generated shopifyDeveloperBeginner.data.ts successfully!');
console.log(`- Tasks count: ${ALL_BEGINNER_TASKS.length}`);
console.log(`- MCQs count: ${BEGINNER_ASSESSMENT.length}`);
