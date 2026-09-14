import { Task, QuizQuestion } from '../../types/roadmap.types';

export const SHOPIFY_DEV_BEGINNER_ASSESSMENT: QuizQuestion[] = [
  {
    "id": 1,
    "topic": "Shopify Platform Architecture",
    "question": "In modern Shopify development, what is the fundamental difference between theme development and custom app development?",
    "options": [
      "Theme development focuses on frontend storefront presentation and JSON template architecture rendered via Liquid, while custom app development executes on independent backend servers interacting with Shopify via GraphQL Admin and Storefront APIs.",
      "Theme development requires Node.js servers, whereas app development is written strictly using HTML and CSS in the Shopify Admin.",
      "Themes store all customer databases directly in the browser localStorage, while apps are only used to upload images.",
      "Themes execute server-side database migrations, while apps can only edit CSS stylesheets."
    ],
    "correctAnswer": 0,
    "explanation": "Theme development engineers the merchant storefront using Online Store 2.0 (Liquid, JSON templates, HTML, CSS, JavaScript). In contrast, Shopify apps are independent web applications that authenticate via OAuth and interface with Shopify APIs to extend administrative and business logic."
  },
  {
    "id": 2,
    "topic": "Shopify CLI & Development Stores",
    "question": "When developing a custom Shopify theme locally using the Shopify CLI, which command starts a local development server with hot reload connected to your development store?",
    "options": [
      "shopify theme publish --force",
      "shopify theme dev --store <your-store-name>.myshopify.com",
      "shopify app deploy --all",
      "shopify admin serve --local-only"
    ],
    "correctAnswer": 1,
    "explanation": "The command \"shopify theme dev --store <store-domain>\" spins up a local proxy server that serves local theme files directly over an SSL-secured localhost URL while streaming asset updates and synchronizing Theme Editor settings."
  },
  {
    "id": 3,
    "topic": "Theme Directory Structure",
    "question": "Under Online Store 2.0 architecture, where must JSON-based page templates (such as product.json and collection.json) be located within a theme?",
    "options": [
      "Inside the /assets directory as minified JavaScript files.",
      "Inside the /snippets directory alongside reusable icons.",
      "Inside the /templates directory as structured JSON files declaring section hierarchies.",
      "Inside the /config/settings_data.json file only."
    ],
    "correctAnswer": 2,
    "explanation": "JSON templates are placed directly in the /templates folder (e.g., templates/product.json, templates/index.json). They define the dynamic sections and blocks rendered on specific page types and allow merchants to reorder sections in the theme editor."
  },
  {
    "id": 4,
    "topic": "Liquid Layout File Structure",
    "question": "Which mandatory Liquid tag in layout/theme.liquid is responsible for injecting essential Shopify platform scripts, analytics, and header hooks into the storefront?",
    "options": [
      "{{ content_for_layout }}",
      "{{ content_for_footer }}",
      "{{ theme_analytics_script }}",
      "{{ content_for_header }}"
    ],
    "correctAnswer": 3,
    "explanation": "The {{ content_for_header }} tag is required within the <head> element of layout/theme.liquid. Shopify dynamically injects critical core platform scripts, security meta tags, app embed scripts, and analytics through this tag."
  },
  {
    "id": 5,
    "topic": "Section Schema & Settings",
    "question": "In a custom Liquid section file (e.g., sections/featured-banner.liquid), what is the role of the {% schema %} tag?",
    "options": [
      "It defines the JSON configuration for the Shopify Theme Editor, specifying section name, configurable settings, block types, and default presets.",
      "It compiles TypeScript code into browser-compatible JavaScript.",
      "It creates database indexes in the Shopify Admin database.",
      "It forces the browser to bypass CDN cache on every page load."
    ],
    "correctAnswer": 0,
    "explanation": "The {% schema %} tag contains valid JSON that instructs the Shopify Theme Editor which inputs (text, image_picker, range, color, etc.), blocks, and default presets are available for merchants to configure visually."
  },
  {
    "id": 6,
    "topic": "AJAX Cart API",
    "question": "When building an asynchronous \"Add to Cart\" drawer in theme JavaScript, which official Shopify Storefront endpoint is queried via HTTP POST with JSON data?",
    "options": [
      "/admin/api/2024-01/cart.json",
      "/cart/add.js",
      "/storefront/checkout/create.php",
      "/api/v1/line_items/append"
    ],
    "correctAnswer": 1,
    "explanation": "The Shopify AJAX Cart API provides the /cart/add.js endpoint, accepting an item ID and quantity as JSON or Form data, returning the updated line item and cart payload without triggering a full page reload."
  },
  {
    "id": 7,
    "topic": "Metafields vs Metaobjects",
    "question": "What is the primary conceptual distinction between a Shopify Metafield and a Shopify Metaobject?",
    "options": [
      "Metafields can only store boolean flags, while metaobjects can only store customer emails.",
      "Metafields are only accessible in private apps, while metaobjects are only accessible in Liquid snippets.",
      "Metafields attach custom data fields to specific existing Shopify resources (e.g., a product or customer), whereas metaobjects are custom multi-field data entities that exist independently as structured content models.",
      "There is no difference; metafield and metaobject are completely interchangeable names for Liquid variables."
    ],
    "correctAnswer": 2,
    "explanation": "A metafield attaches custom attributes (e.g., fabric_care on a Product), while a metaobject creates a distinct data model with multiple fields (e.g., an \"Author\" or \"Store Location\" entity) that can be referenced across multiple products and pages."
  },
  {
    "id": 8,
    "topic": "Theme Performance & Images",
    "question": "Which modern Shopify Liquid filter pattern is the recommended standard for outputting responsive, accessible, and performant images with automatic srcset generation?",
    "options": [
      "<img src=\"{{ product.featured_image | img_url: 'master' }}\">",
      "<img src=\"{{ product.featured_image.src }}\"/>",
      "{{ product.featured_image | raw_html_image }}",
      "{{ product.featured_image | image_url: width: 1200 | image_tag: widths: '400, 800, 1200', loading: 'lazy', class: 'w-full' }}"
    ],
    "correctAnswer": 3,
    "explanation": "Using \"image_url\" combined with \"image_tag\" automatically outputs optimal HTML5 <img> tags with responsive srcset, width/height dimensions (preventing Cumulative Layout Shift - CLS), and native lazy loading."
  },
  {
    "id": 9,
    "topic": "Admin API vs Storefront API",
    "question": "Why must private Shopify Admin API access tokens NEVER be included in theme Liquid or client-side JavaScript code?",
    "options": [
      "Because Admin API tokens grant privileged read/write access to confidential store data (orders, customer PII, inventory), and any client-side exposure allows malicious actors to compromise the entire store.",
      "Because the browser will automatically crash if a GraphQL token has more than 16 characters.",
      "Because Storefront API tokens are strictly required to be 100% public, whereas Admin tokens only work on Linux.",
      "Because Shopify Liquid syntax automatically deletes all API tokens on compilation."
    ],
    "correctAnswer": 0,
    "explanation": "Admin API tokens carry high-privilege permissions and must remain strictly server-side inside secure environment variables. Public storefront interactions should only ever use the Storefront API with unauthenticated public tokens."
  },
  {
    "id": 10,
    "topic": "Webhooks & HMAC Verification",
    "question": "How should a developer-built backend endpoint verify that an incoming webhook request genuinely originated from Shopify?",
    "options": [
      "By checking if the HTTP request User-Agent header says \"Google Chrome\".",
      "By computing a SHA-256 HMAC hash of the raw request payload using the app shared secret and comparing it to the \"x-shopify-hmac-sha256\" header.",
      "By verifying that the URL ends with \".myshopify.com\".",
      "By asking the user to submit an SMS OTP code on each webhook trigger."
    ],
    "correctAnswer": 1,
    "explanation": "Shopify signs every webhook request by computing an HMAC-SHA256 hash of the raw HTTP request body with your app client secret and passes it in the x-shopify-hmac-sha256 header. Verifying this prevents request forgery."
  },
  {
    "id": 11,
    "topic": "Git & Deployment Workflows",
    "question": "In an enterprise Shopify development team, what is the best practice for deploying theme changes to the live production storefront?",
    "options": [
      "Directly editing code in the Shopify Theme Code Editor on the live published theme during peak business hours.",
      "Downloading zip files from email threads and uploading them manually to production.",
      "Developing on feature branches in Git, pushing to staging preview themes via Shopify CLI/GitHub integration, testing thoroughly, and publishing via an automated CI/CD pipeline.",
      "Deleting the live theme and uploading a fresh theme from scratch every time a bug is fixed."
    ],
    "correctAnswer": 2,
    "explanation": "Modern team workflows leverage Git version control, branching strategies, automated linting via Theme Check, staging development theme previews, and automated deployment via GitHub theme integration or CI/CD pipelines."
  },
  {
    "id": 12,
    "topic": "Liquid Rendering Order",
    "question": "When Shopify renders an Online Store 2.0 page, what is the correct sequence of template and layout assembly?",
    "options": [
      "HTML DOM is created in browser -> JavaScript fetches Liquid -> Liquid compiles on mobile -> Theme renders.",
      "Sections render -> Browser re-downloads all Liquid files -> CSS renders.",
      "All snippets are executed first -> Admin API creates a database row -> Layout is skipped -> JSON template renders.",
      "Theme settings are loaded -> layout/theme.liquid is evaluated -> {{ content_for_layout }} is replaced by the requested JSON template -> Sections and Blocks are rendered with Liquid -> Final HTML is sent to the client."
    ],
    "correctAnswer": 3,
    "explanation": "Shopify server-side rendering parses the layout file (theme.liquid), resolves {{ content_for_layout }} with the matching JSON template, parses all referenced sections and blocks with their respective data, and streams the compiled HTML to the visitor."
  },
  {
    "id": 13,
    "topic": "Dynamic Theme Blocks",
    "question": "What is the primary benefit of defining \"@app\" block support in a theme section schema?",
    "options": [
      "It lets merchants install third-party app extensions (App Blocks) seamlessly into theme sections without modifying theme code files directly.",
      "It installs the Shopify mobile app on the customer device.",
      "It converts the theme into an iOS native application automatically.",
      "It removes all JavaScript from the theme for faster rendering."
    ],
    "correctAnswer": 0,
    "explanation": "Adding `{\"type\": \"@app\"}` to the blocks array in a section schema allows App Embeds and App Blocks to be dynamically placed and reordered by merchants in the theme editor without polluting theme code files."
  },
  {
    "id": 14,
    "topic": "Theme Settings Schema Types",
    "question": "Which setting type in section schema provides a merchant with a visual asset selector from their Shopify Files library?",
    "options": [
      "type: \"text\"",
      "type: \"image_picker\"",
      "type: \"color_background\"",
      "type: \"range\""
    ],
    "correctAnswer": 1,
    "explanation": "The `image_picker` setting type opens Shopify’s native media modal in the Theme Editor, allowing merchants to select or upload images that return an image object in Liquid."
  },
  {
    "id": 15,
    "topic": "Accessibility & ARIA",
    "question": "When developing an interactive slide-out cart drawer, what is essential for keyboard accessibility (WCAG 2.1)?",
    "options": [
      "Using only <div> tags without tabindex or role attributes.",
      "Disabling all keyboard interactions when the cart is opened.",
      "Trapping keyboard focus within the open drawer modal, providing an accessible close button with Escape key listener, and restoring focus to the trigger element upon closing.",
      "Hiding the cart total amount from screen readers."
    ],
    "correctAnswer": 2,
    "explanation": "WCAG compliance for modals and slide-out drawers requires focus trapping, handling the Escape key to dismiss, maintaining visible focus states, and restoring focus to the initial trigger button when closed."
  },
  {
    "id": 16,
    "topic": "Storefront API GraphQL",
    "question": "Which GraphQL Storefront API mutation is used to initiate a checkout and cart session in a headless or custom AJAX storefront experience?",
    "options": [
      "orderCreate()",
      "customerPaymentProcess()",
      "checkoutMigrate()",
      "cartCreate(input: { lines: [...] })"
    ],
    "correctAnswer": 3,
    "explanation": "The `cartCreate` mutation in the Storefront API creates a new cart object with line items, attributes, and buyer identity, returning a `checkoutUrl` where the buyer completes payment on Shopify’s secure checkout."
  },
  {
    "id": 17,
    "topic": "Webhook Idempotency",
    "question": "Why is idempotency handling critical when receiving Shopify webhooks such as \"orders/create\"?",
    "options": [
      "Because network retries and distributed delivery may result in the same webhook payload being delivered multiple times, risking duplicate order fulfillment or double accounting if not deduplicated.",
      "Because Shopify webhooks are guaranteed to never fire more than once under any circumstance.",
      "Because idempotency speeds up internet connections for storefront shoppers.",
      "Because Shopify will ban partner accounts that process webhooks in less than 5 seconds."
    ],
    "correctAnswer": 0,
    "explanation": "Shopify’s webhook delivery system guarantees at-least-once delivery. If a response is delayed or fails due to network spikes, Shopify retries. Backend handlers must check the `X-Shopify-Webhook-Id` to prevent duplicate processing."
  },
  {
    "id": 18,
    "topic": "Theme Performance & JavaScript",
    "question": "How should custom JavaScript modules in a Shopify theme be loaded to prevent blocking the critical rendering path of the page?",
    "options": [
      "Using inline synchronous script tags in the <head> of theme.liquid before any CSS.",
      "Using `<script src=\"{{ 'custom.js' | asset_url }}\" defer></script>` or ES module dynamic imports.",
      "Writing all JavaScript code directly into the URL bar of the browser.",
      "Loading all scripts from unverified third-party CDNs without caching."
    ],
    "correctAnswer": 1,
    "explanation": "Loading scripts with `defer` ensures HTML parsing is not blocked while script files download in parallel. Modern themes also use native ES modules and dynamic imports (`import()`) for on-demand component hydration."
  },
  {
    "id": 19,
    "topic": "Safe Liquid Filter Chaining",
    "question": "When displaying customer-generated or unverified text inside an HTML attribute in Liquid, which filter must be applied to prevent Cross-Site Scripting (XSS)?",
    "options": [
      "| raw",
      "| upcase",
      "| escape",
      "| json"
    ],
    "correctAnswer": 2,
    "explanation": "The `escape` filter (or `escape_once`) converts unsafe HTML characters (<, >, &, \", ') into their safe HTML entity representations, preventing malicious script injection inside DOM attributes and text nodes."
  },
  {
    "id": 20,
    "topic": "Shopify Partner Ecosystem",
    "question": "What is the purpose of a Shopify Partner Development Store for developers?",
    "options": [
      "It is a paid subscription store that charges $500 per day during local testing.",
      "It is a store that can only sell physical books in Canada.",
      "It is an automated bot that writes code for you without human intervention.",
      "It is a free sandbox store that allows developers to build, test themes, develop custom apps, test mock payments with Bogus Gateway, and transfer ownership to clients."
    ],
    "correctAnswer": 3,
    "explanation": "Development stores created inside the Shopify Partner Dashboard provide unlimited free testing environments with full features, dummy data seeding, bogus payment gateway testing, and seamless client handover capabilities."
  }
];

export const SHOPIFY_DEV_BEGINNER_TASKS: Task[] = [
  {
    "id": "shopify-dev-beg-01",
    "orderIndex": 1,
    "title": "1. Introduction to Shopify Development",
    "description": "Master the Shopify ecosystem, platform architecture, merchant vs developer mental models, Online Store 2.0 rendering engine, and the professional role of modern Shopify theme and app engineers.",
    "duration": "45 mins",
    "xpReward": 150,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-sh-dev-01",
        "title": "Shopify Platform Architecture Overview",
        "type": "documentation",
        "url": "https://shopify.dev/docs/themes"
      },
      {
        "id": "res-sh-dev-02",
        "title": "Online Store 2.0 Architectural Specification",
        "type": "article",
        "url": "https://shopify.dev/docs/themes/architecture"
      }
    ],
    "lessonContent": {
      "overview": "Shopify is an enterprise-grade, multi-tenant cloud commerce platform powering millions of global storefronts. As a professional Shopify developer, you do not simply edit Liquid tags; you architect high-performance storefronts, design composable theme component libraries, build custom apps using GraphQL APIs, and engineer resilient event-driven systems that handle high-volume sales events with zero downtime.",
      "objectives": [
        "Understand the Shopify platform architecture, multi-tenant cloud infrastructure, and CDN caching layers.",
        "Distinguish clearly between theme engineering (Online Store 2.0) and full-stack app development (Node/Remix, APIs, Webhooks).",
        "Navigate the Shopify Partner ecosystem, development store lifecycle, and collaborator permissions.",
        "Understand the request lifecycle from edge DNS to Liquid server-side rendering and client-side hydration."
      ],
      "sections": [
        {
          "id": "sec-intro-arch",
          "title": "Shopify Platform Architecture & Developer Paradigms",
          "content": "Shopify operates as a distributed multi-tenant platform with a unified core backend, global Cloudflare CDN edge caching, and isolated data partitions for each merchant shop. Storefront rendering is executed on Shopify edge nodes using the Liquid template engine combined with Online Store 2.0 JSON templates. Developers interface with the platform via two distinct paths: Theme Engineering (frontend storefront code executed within the Liquid runtime) and App Engineering (standalone web services communicating via GraphQL Admin & Storefront APIs).",
          "codeSnippets": [
            {
              "language": "json",
              "filename": "config/settings_schema.json",
              "title": "Theme Configuration Manifest Structure",
              "code": "[\n  {\n    \"name\": \"theme_info\",\n    \"theme_name\": \"Skillora Commerce Pro\",\n    \"theme_version\": \"1.0.0\",\n    \"theme_author\": \"Skillora AI Engineering\",\n    \"theme_documentation_url\": \"https://shopify.dev/docs/themes\",\n    \"theme_support_url\": \"https://skillora.ai/support\"\n  },\n  {\n    \"name\": \"Colors & Typography\",\n    \"settings\": [\n      {\n        \"type\": \"color\",\n        \"id\": \"color_primary\",\n        \"label\": \"Primary Accent Color\",\n        \"default\": \"#2563EB\"\n      },\n      {\n        \"type\": \"font_picker\",\n        \"id\": \"font_heading\",\n        \"label\": \"Heading Typography\",\n        \"default\": \"inter_n7\"\n      }\n    ]\n  }\n]",
              "explanation": "The settings_schema.json file defines global theme settings available to merchants across the entire store in the Theme Editor."
            },
            {
              "language": "liquid",
              "filename": "layout/theme.liquid",
              "title": "Baseline Online Store 2.0 Layout Shell",
              "code": "<!doctype html>\n<html class=\"no-js\" lang=\"{{ request.locale.iso_code }}\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n    <meta name=\"theme-color\" content=\"{{ settings.color_primary }}\">\n    <link rel=\"canonical\" href=\"{{ canonical_url }}\">\n\n    <title>\n      {{ page_title }}\n      {%- if current_tags %} &ndash; tagged \"{{ current_tags | join: ', ' }}\"{% endif -%}\n      {%- if current_page != 1 %} &ndash; Page {{ current_page }}{% endif -%}\n      {%- unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless -%}\n    </title>\n\n    {{ content_for_header }}\n\n    <link rel=\"stylesheet\" href=\"{{ 'theme-base.css' | asset_url }}\" media=\"print\" onload=\"this.media='all'\">\n    <script src=\"{{ 'theme-core.js' | asset_url }}\" defer></script>\n  </head>\n\n  <body class=\"template-{{ template.name | handle }} bg-base text-primary antialiased\">\n    <a class=\"skip-to-content-link button visually-hidden\" href=\"#MainContent\">\n      {{ 'accessibility.skip_to_text' | t }}\n    </a>\n\n    {% sections 'header-group' %}\n\n    <main id=\"MainContent\" class=\"content-for-layout focus-none\" role=\"main\" tabindex=\"-1\">\n      {{ content_for_layout }}\n    </main>\n\n    {% sections 'footer-group' %}\n  </body>\n</html>",
              "explanation": "The root theme.liquid layout renders the outer HTML document, injects essential Shopify platform scripts via content_for_header, and delegates page content to content_for_layout."
            },
            {
              "language": "javascript",
              "filename": "theme-architecture-overview.js",
              "title": "Shopify Development Workflow Mental Model",
              "code": "/**\n * Shopify Development Architecture Model\n * 1. Storefront Rendering: Liquid + JSON Templates + Theme Assets (Edge CDN)\n * 2. Storefront Client: Vanilla JS, Web Components, Cart AJAX API\n * 3. Storefront API: Headless / Custom client querying public GraphQL\n * 4. Admin API: Authenticated App backend querying high-privilege GraphQL\n */\nexport const SHOPIFY_DEV_TRACKS = {\n  themeEngineering: {\n    runtime: 'Liquid Engine & Edge CDN',\n    templateFormat: 'JSON Templates (Online Store 2.0)',\n    styling: 'Vanilla CSS / PostCSS / Tailwind (pre-compiled)',\n    interactivity: 'Custom Elements / Web Components / Vanilla JS',\n    storefrontData: 'Liquid Objects & AJAX Cart API'\n  },\n  appEngineering: {\n    runtime: 'Independent Server (Node.js, Remix, Cloudflare Workers)',\n    authProtocol: 'OAuth 2.0 & Session Tokens (JWT)',\n    apiProtocols: ['GraphQL Admin API', 'Storefront API'],\n    eventHandling: 'Webhook Consumers + Queue Workers (Redis / BullMQ)'\n  }\n};",
              "explanation": "Clear distinction between theme frontend architecture and server-side app engineering."
            }
          ],
          "proTip": "Never treat Shopify themes as static templates. Online Store 2.0 themes are modular design systems composed of dynamic JSON templates, section schemas, and block hierarchies that give non-technical merchants full visual composition power while preserving developer code integrity.",
          "commonMistakes": [
            "Hardcoding text, product handles, or banner images directly in Liquid instead of exposing them via section schema settings.",
            "Editing live published themes directly in the browser code editor instead of using local Shopify CLI and version control.",
            "Confusing the Storefront API (public, unauthenticated) with the Admin API (private, high-privilege)."
          ]
        }
      ],
      "keyTakeaways": [
        "Shopify development encompasses Theme Engineering (Liquid/JSON templates/JS) and App Development (GraphQL APIs/OAuth/Webhooks).",
        "Online Store 2.0 replaces legacy monolithic Liquid templates with flexible JSON templates composed of reusable sections and blocks.",
        "Professional developers operate in local development environments via Shopify CLI connected to dedicated development stores."
      ],
      "practiceExercises": [
        {
          "id": "ex-beg-01",
          "title": "Analyze and Configure Theme Metadata Schema",
          "instructions": "Review the settings_schema.json structure and add a new global theme configuration section for Social Media links (twitter_url, instagram_url, youtube_url) with appropriate validation labels.",
          "starterCode": "[\n  {\n    \"name\": \"Social Media Links\",\n    \"settings\": [\n      // Add your settings definitions here\n    ]\n  }\n]",
          "solutionCode": "[\n  {\n    \"name\": \"Social Media Links\",\n    \"settings\": [\n      {\n        \"type\": \"text\",\n        \"id\": \"social_twitter_link\",\n        \"label\": \"X (Twitter) Profile URL\",\n        \"info\": \"https://x.com/yourhandle\"\n      },\n      {\n        \"type\": \"text\",\n        \"id\": \"social_instagram_link\",\n        \"label\": \"Instagram Profile URL\"\n      },\n      {\n        \"type\": \"text\",\n        \"id\": \"social_youtube_link\",\n        \"label\": \"YouTube Channel URL\"\n      }\n    ]\n  }\n]"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-beg-02",
    "orderIndex": 2,
    "title": "2. Shopify Development Environment and CLI",
    "description": "Configure a professional Shopify development workstation using Shopify CLI 3.x, Partner development stores, local SSL proxy servers, theme sync workflows, and environment variable management.",
    "duration": "50 mins",
    "xpReward": 160,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-cli-01",
        "title": "Shopify CLI 3.x Documentation",
        "type": "documentation",
        "url": "https://shopify.dev/docs/themes/tools/cli"
      },
      {
        "id": "res-cli-02",
        "title": "Setting Up Development Stores",
        "type": "article",
        "url": "https://help.shopify.com/partners/dashboard/managing-stores/development-stores"
      }
    ],
    "lessonContent": {
      "overview": "The modern Shopify developer toolchain revolves around the official Shopify CLI (Command Line Interface). Shopify CLI enables developers to clone, preview, and synchronize theme changes in real time against a live development store without overwriting published assets. You will master CLI commands, theme flags, hot module reloading, and secure credential handling.",
      "objectives": [
        "Install and configure Shopify CLI 3.x with Node.js and package managers.",
        "Authenticate securely with your Shopify Partner account and bind projects to development stores.",
        "Run `shopify theme dev` with local preview flags, SSL tunneling, and theme-editor sync.",
        "Create and maintain `.shopifyignore` files to prevent build artifacts from polluting the remote theme."
      ],
      "sections": [
        {
          "id": "sec-cli-workflow",
          "title": "Shopify CLI Commands & Local Theme Workflow",
          "content": "Shopify CLI 3.x communicates directly with the Shopify Admin API via authenticated OAuth sessions. When you run `shopify theme dev`, the CLI creates a temporary development theme on your store (visible only to your session), watches local files for modifications, compiles changes, and synchronizes them within milliseconds over WebSocket connections.",
          "codeSnippets": [
            {
              "language": "bash",
              "filename": "terminal-commands.sh",
              "title": "Essential Shopify CLI Theme Commands",
              "code": "# 1. Authenticate with your Shopify Partner organization\nshopify auth login\n\n# 2. Initialize a new theme project from Dawn baseline\nshopify theme init my-custom-theme --clone-url https://github.com/Shopify/dawn.git\n\n# 3. Start local development server connected to dev store\nshopify theme dev --store skillora-dev-sandbox.myshopify.com --theme-editor-sync\n\n# 4. Pull live theme files (e.g. merchant settings_data.json) down to local\nshopify theme pull --store skillora-dev-sandbox.myshopify.com --theme 135891234567\n\n# 5. Run static linting and performance checks\nshopify theme check\n\n# 6. Push local theme to an unpublished theme slot for QA review\nshopify theme push --store skillora-dev-sandbox.myshopify.com --unpublished --theme \"Release-v1.2.0-Staging\"",
              "explanation": "Standard command suite used daily by professional Shopify theme engineers."
            },
            {
              "language": "plaintext",
              "filename": ".shopifyignore",
              "title": "Shopify Ignore Configuration File",
              "code": "# Build directories and dependencies\nnode_modules/\ndist/\n.git/\n.github/\n\n# Development source files (compiled into assets/)\nsrc/\nstyles/scss/\nscripts/typescript/\n*.ts\n*.scss\n\n# Package manager lock files and configuration\npackage.json\npackage-lock.json\ntsconfig.json\nvite.config.js\ntailwind.config.js\n.env*\n.DS_Store",
              "explanation": "Prevents local source files and build dependencies from uploading to Shopify theme servers."
            },
            {
              "language": "json",
              "filename": "package.json",
              "title": "Theme Build & Watch Pipeline Script Setup",
              "code": "{\n  \"name\": \"skillora-shopify-theme\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"dev:css\": \"tailwindcss -i ./src/css/main.css -o ./assets/theme-base.css --watch\",\n    \"dev:js\": \"vite build --watch\",\n    \"dev:shopify\": \"shopify theme dev --store skillora-dev-sandbox.myshopify.com --theme-editor-sync\",\n    \"dev\": \"concurrently \\\"npm:dev:css\\\" \\\"npm:dev:js\\\" \\\"npm:dev:shopify\\\"\",\n    \"build\": \"tailwindcss -i ./src/css/main.css -o ./assets/theme-base.css --minify && vite build\",\n    \"lint\": \"shopify theme check\"\n  },\n  \"devDependencies\": {\n    \"concurrently\": \"^8.2.2\",\n    \"tailwindcss\": \"^3.4.1\",\n    \"vite\": \"^5.1.6\"\n  }\n}",
              "explanation": "A standard npm script setup compiling modern CSS and JavaScript into theme assets concurrently with the Shopify CLI sync engine."
            }
          ],
          "proTip": "Always pass the `--theme-editor-sync` flag when running `shopify theme dev`. This ensures that any customization made in the visual Theme Editor (like reordering blocks or altering text) is immediately written back to your local `config/settings_data.json` and template files.",
          "commonMistakes": [
            "Running `shopify theme push --live` accidentally and overwriting a production store without staging validation.",
            "Forgetting to add `.shopifyignore`, causing node_modules or large build folders to exceed Shopify 50MB theme upload limits.",
            "Working on live store client accounts without using Collaborator Access codes or Partner development stores."
          ]
        }
      ],
      "keyTakeaways": [
        "Shopify CLI 3.x creates isolated development themes for real-time local preview without impacting live shoppers.",
        "Use `.shopifyignore` to keep your remote theme repository lean and prevent upload quota errors.",
        "Automate asset compilation with npm scripts and enforce code quality using `shopify theme check`."
      ],
      "practiceExercises": [
        {
          "id": "ex-beg-02",
          "title": "Configure Development Package Workflow",
          "instructions": "Write a script definition for package.json that runs Theme Check linting with strict error exits before allowing a theme push command.",
          "starterCode": "{\n  \"scripts\": {\n    \"deploy:staging\": \"\"\n  }\n}",
          "solutionCode": "{\n  \"scripts\": {\n    \"lint\": \"shopify theme check --fail-level error\",\n    \"deploy:staging\": \"npm run lint && shopify theme push --unpublished --theme 'Staging-QA'\"\n  }\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-beg-03",
    "orderIndex": 3,
    "title": "3. Shopify Theme Architecture",
    "description": "Deep dive into the Online Store 2.0 folder hierarchy, layouts, JSON templates, reusable sections, atomic blocks, snippets, config schemas, and section groups.",
    "duration": "55 mins",
    "xpReward": 170,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-arch-01",
        "title": "Theme File Directory Structure",
        "type": "documentation",
        "url": "https://shopify.dev/docs/themes/architecture"
      },
      {
        "id": "res-arch-02",
        "title": "JSON Templates Specification",
        "type": "article",
        "url": "https://shopify.dev/docs/themes/architecture/templates"
      }
    ],
    "lessonContent": {
      "overview": "Online Store 2.0 revolutionized Shopify theme architecture by establishing a modular, component-driven structure. Every theme consists of strict top-level directories: layout, templates, sections, snippets, assets, config, and locales. Mastering how JSON templates reference sections and how section schemas declare blocks is the foundation of professional Shopify theme engineering.",
      "objectives": [
        "Understand the role and lifecycle of all 7 mandatory Shopify theme directories.",
        "Construct and customize Online Store 2.0 JSON templates (`templates/*.json`).",
        "Architect section groups (`header-group.json`, `footer-group.json`) for modular global layouts.",
        "Differentiate between global reusable snippets and stateful configurable sections."
      ],
      "sections": [
        {
          "id": "sec-os2-structure",
          "title": "The 7 Mandatory Theme Directories & JSON Templates",
          "content": "Unlike legacy themes that used static Liquid templates (`product.liquid`), Online Store 2.0 uses JSON templates (`product.json`). The JSON template acts as an orchestration map: it lists the sections to render, their order, individual block configurations, and dynamic settings. This shifts visual layout control to the merchant while keeping rendering logic cleanly encapsulated in `sections/` and `snippets/`.",
          "codeSnippets": [
            {
              "language": "json",
              "filename": "templates/product.json",
              "title": "Online Store 2.0 Product JSON Template",
              "code": "{\n  \"sections\": {\n    \"main_product\": {\n      \"type\": \"main-product-details\",\n      \"blocks\": {\n        \"title_block\": {\n          \"type\": \"title\",\n          \"settings\": {}\n        },\n        \"price_block\": {\n          \"type\": \"price\",\n          \"settings\": {\n            \"show_tax_notice\": true\n          }\n        },\n        \"variant_picker_block\": {\n          \"type\": \"variant_picker\",\n          \"settings\": {\n            \"picker_type\": \"button\"\n          }\n        },\n        \"buy_buttons_block\": {\n          \"type\": \"buy_buttons\",\n          \"settings\": {\n            \"show_dynamic_checkout\": true\n          }\n        }\n      },\n      \"block_order\": [\n        \"title_block\",\n        \"price_block\",\n        \"variant_picker_block\",\n        \"buy_buttons_block\"\n      ],\n      \"settings\": {\n        \"enable_sticky_info\": true\n      }\n    },\n    \"recommendations\": {\n      \"type\": \"product-recommendations\",\n      \"settings\": {\n        \"heading\": \"Related Engineering Tools\"\n      }\n    }\n  },\n  \"order\": [\n    \"main_product\",\n    \"recommendations\"\n  ]\n}",
              "explanation": "Declarative JSON template configuring section order, inner block order, and setting overrides for product pages."
            },
            {
              "language": "json",
              "filename": "sections/header-group.json",
              "title": "Header Section Group Definition",
              "code": "{\n  \"name\": \"Header Group\",\n  \"type\": \"header\",\n  \"sections\": {\n    \"announcement_bar\": {\n      \"type\": \"announcement-bar\",\n      \"settings\": {\n        \"text\": \"Free Global Shipping on Developer Hardware Orders\",\n        \"link\": \"/collections/hardware\"\n      }\n    },\n    \"main_header\": {\n      \"type\": \"header-navigation\",\n      \"settings\": {\n        \"menu\": \"main-menu\",\n        \"enable_sticky_header\": true\n      }\n    }\n  },\n  \"order\": [\n    \"announcement_bar\",\n    \"main_header\"\n  ]\n}",
              "explanation": "Section groups allow merchants to add, remove, and reorder header and footer sections globally without editing layout files."
            },
            {
              "language": "liquid",
              "filename": "snippets/icon-cart.liquid",
              "title": "Atomic Stateless Snippet Component",
              "code": "{%- comment -%}\n  Renders an accessible SVG cart icon.\n  Usage:\n  {% render 'icon-cart', class: 'w-6 h-6 text-brand', aria_hidden: true %}\n{%- endcomment -%}\n\n<svg\n  class=\"{{ class | default: 'w-5 h-5' }}\"\n  {% if aria_hidden %}aria-hidden=\"true\"{% endif %}\n  focusable=\"false\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  viewBox=\"0 0 24 24\"\n  fill=\"none\"\n  stroke=\"currentColor\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <circle cx=\"9\" cy=\"21\" r=\"1\"></circle>\n  <circle cx=\"20\" cy=\"21\" r=\"1\"></circle>\n  <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>\n</svg>",
              "explanation": "Reusable stateless Liquid snippet instantiated with the {% render %} tag with explicit argument passing."
            }
          ],
          "proTip": "Always use the `{% render %}` tag instead of legacy `{% include %}`. `render` creates an isolated scope for variables, preventing accidental variable leakage and significantly improving Liquid compilation speed.",
          "commonMistakes": [
            "Using `include` which pollutes the global variable scope and slows down rendering performance.",
            "Creating `.liquid` templates for pages when a `.json` template should be used to support modular sections.",
            "Putting configurable merchant settings inside snippets instead of section schemas."
          ]
        }
      ],
      "keyTakeaways": [
        "Online Store 2.0 uses JSON templates (`.json`) to declare section hierarchies and block orders.",
        "Section groups allow global sections (headers, footers, popups) to be managed modularly.",
        "Snippets are isolated, reusable partials called with `{% render %}` with explicit parameters."
      ],
      "practiceExercises": [
        {
          "id": "ex-beg-03",
          "title": "Build a Collection JSON Template",
          "instructions": "Construct a valid JSON template for collections/collection.json containing a hero banner section and a paginated product grid section.",
          "starterCode": "{\n  \"sections\": {},\n  \"order\": []\n}",
          "solutionCode": "{\n  \"sections\": {\n    \"banner\": {\n      \"type\": \"collection-hero-banner\",\n      \"settings\": {\n        \"show_description\": true\n      }\n    },\n    \"grid\": {\n      \"type\": \"main-collection-grid\",\n      \"settings\": {\n        \"products_per_page\": 24,\n        \"columns_desktop\": 4\n      }\n    }\n  },\n  \"order\": [\n    \"banner\",\n    \"grid\"\n  ]\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-beg-04",
    "orderIndex": 4,
    "title": "4. Shopify Theme Development Fundamentals",
    "description": "Master custom Liquid sections, schema definitions, dynamic input types, block iteration, presets, and Theme Editor JavaScript lifecycle events.",
    "duration": "60 mins",
    "xpReward": 180,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-fund-01",
        "title": "Section Schema Reference",
        "type": "documentation",
        "url": "https://shopify.dev/docs/themes/architecture/sections/section-schema"
      },
      {
        "id": "res-fund-02",
        "title": "Theme Editor JavaScript Events",
        "type": "article",
        "url": "https://shopify.dev/docs/themes/architecture/sections/integrate-sections-with-the-theme-editor"
      }
    ],
    "lessonContent": {
      "overview": "Sections are the primary building blocks of Shopify themes. A section combines Liquid markup, CSS/JS asset references, and a JSON schema specification. In this module, you will learn how to build production-ready custom sections with dynamic presets, flexible block architectures, responsive typography, and Theme Editor event listeners.",
      "objectives": [
        "Write robust, reusable Liquid sections with complete `{% schema %}` definitions.",
        "Configure section settings using standard types: text, textarea, richtext, image_picker, select, range, checkbox, and color.",
        "Implement dynamic block iteration with `for block in section.blocks` and typed block schemas.",
        "Add section presets so merchants can discover and insert custom sections via the \"Add section\" button in the Theme Editor."
      ],
      "sections": [
        {
          "id": "sec-section-schema",
          "title": "Building Production Custom Sections with Blocks and Presets",
          "content": "A section is self-contained. Its schema JSON dictates how the Theme Editor renders input controls for merchants. Settings are accessed in Liquid via `section.settings.<setting_id>`, while blocks are iterated via `section.blocks` and accessed via `block.settings.<setting_id>`. Adding a `presets` array allows merchants to add the section to any dynamic page.",
          "codeSnippets": [
            {
              "language": "liquid",
              "filename": "sections/feature-grid.liquid",
              "title": "Complete Feature Grid Section with Schema & Blocks",
              "code": "{{ 'section-feature-grid.css' | asset_url | stylesheet_tag }}\n\n<section class=\"feature-grid py-12 px-4 max-w-7xl mx-auto\" style=\"background-color: {{ section.settings.bg_color }};\">\n  {% if section.settings.heading != blank %}\n    <div class=\"text-center mb-8\">\n      <h2 class=\"text-3xl font-bold tracking-tight text-gray-900\">\n        {{ section.settings.heading | escape }}\n      </h2>\n      {% if section.settings.subheading != blank %}\n        <p class=\"mt-2 text-lg text-gray-600\">{{ section.settings.subheading | escape }}</p>\n      {% endif %}\n    </div>\n  {% endif %}\n\n  <div class=\"grid grid-cols-1 md:grid-cols-{{ section.settings.columns_desktop }} gap-8\">\n    {% for block in section.blocks %}\n      <div class=\"feature-card p-6 rounded-2xl bg-white border border-gray-100 shadow-sm\" {{ block.shopify_attributes }}>\n        {% if block.settings.icon_image != blank %}\n          <div class=\"w-12 h-12 mb-4\">\n            {{ block.settings.icon_image | image_url: width: 100 | image_tag: loading: 'lazy', class: 'w-full h-full object-contain' }}\n          </div>\n        {% endif %}\n        <h3 class=\"text-xl font-semibold text-gray-900 mb-2\">{{ block.settings.title | escape }}</h3>\n        <p class=\"text-gray-600 text-sm leading-relaxed\">{{ block.settings.description | escape }}</p>\n      </div>\n    {% endfor %}\n  </div>\n</section>\n\n{% schema %}\n{\n  \"name\": \"Feature Grid\",\n  \"tag\": \"section\",\n  \"class\": \"section-feature-grid\",\n  \"max_blocks\": 6,\n  \"settings\": [\n    {\n      \"type\": \"text\",\n      \"id\": \"heading\",\n      \"label\": \"Section Heading\",\n      \"default\": \"Engineered for High-Growth Brands\"\n    },\n    {\n      \"type\": \"text\",\n      \"id\": \"subheading\",\n      \"label\": \"Subheading Text\",\n      \"default\": \"Everything you need to scale Shopify commerce operations.\"\n    },\n    {\n      \"type\": \"range\",\n      \"id\": \"columns_desktop\",\n      \"min\": 2,\n      \"max\": 4,\n      \"step\": 1,\n      \"label\": \"Desktop Columns\",\n      \"default\": 3\n    },\n    {\n      \"type\": \"color\",\n      \"id\": \"bg_color\",\n      \"label\": \"Background Color\",\n      \"default\": \"#F9FAFB\"\n    }\n  ],\n  \"blocks\": [\n    {\n      \"type\": \"feature\",\n      \"name\": \"Feature Item\",\n      \"settings\": [\n        {\n          \"type\": \"image_picker\",\n          \"id\": \"icon_image\",\n          \"label\": \"Feature Icon Image\"\n        },\n        {\n          \"type\": \"text\",\n          \"id\": \"title\",\n          \"label\": \"Feature Title\",\n          \"default\": \"Lightning Fast Performance\"\n        },\n        {\n          \"type\": \"textarea\",\n          \"id\": \"description\",\n          \"label\": \"Feature Description\",\n          \"default\": \"Sub-millisecond edge caching and optimized assets maximize conversion rates.\"\n        }\n      ]\n    }\n  ],\n  \"presets\": [\n    {\n      \"name\": \"Feature Grid\",\n      \"blocks\": [\n        {\n          \"type\": \"feature\",\n          \"settings\": { \"title\": \"Sub-Second Edge Rendering\" }\n        },\n        {\n          \"type\": \"feature\",\n          \"settings\": { \"title\": \"GraphQL Cart Engine\" }\n        },\n        {\n          \"type\": \"feature\",\n          \"settings\": { \"title\": \"Enterprise Security\" }\n        }\n      ]\n    }\n  ]\n}\n{% endschema %}",
              "explanation": "A complete production-ready section with section settings, dynamic block limits, shopify_attributes for Theme Editor deep-linking, and pre-populated default presets."
            },
            {
              "language": "javascript",
              "filename": "assets/section-feature-grid.js",
              "title": "Theme Editor JavaScript Event Listeners",
              "code": "// Listen to Shopify Theme Editor live reload events\ndocument.addEventListener('shopify:section:load', (event) => {\n  if (event.target.classList.contains('section-feature-grid')) {\n    console.log('Feature grid reloaded in Theme Editor:', event.detail.sectionId);\n    // Re-initialize any sliders, animations, or interactive widgets\n  }\n});\n\ndocument.addEventListener('shopify:block:select', (event) => {\n  console.log('Merchant selected block ID:', event.detail.blockId);\n  // Auto-scroll to selected block or open accordions\n});",
              "explanation": "Handling shopify:section:load and shopify:block:select events ensures seamless Theme Editor interactivity."
            }
          ],
          "proTip": "Always include `{{ block.shopify_attributes }}` on the root element of each iterated block inside `for block in section.blocks`. This allows the Shopify Theme Editor to outline the active block when the merchant clicks on it in the sidebar.",
          "commonMistakes": [
            "Forgetting the `presets` array in the section schema, which prevents the section from showing up in the \"Add Section\" merchant picker.",
            "Hardcoding CSS styles without using schema settings for merchant customization.",
            "Failing to re-initialize JavaScript carousels/accordions when the Theme Editor fires `shopify:section:load`."
          ]
        }
      ],
      "keyTakeaways": [
        "Sections are defined with HTML/Liquid and configured with JSON schemas in `{% schema %}`.",
        "Use `{{ block.shopify_attributes }}` to enable Theme Editor visual block selection.",
        "Include `presets` in section schemas so merchants can insert sections anywhere on dynamic pages."
      ],
      "practiceExercises": [
        {
          "id": "ex-beg-04",
          "title": "Implement an Announcement Bar Section Schema",
          "instructions": "Write the schema definition for an announcement bar with text input, link picker, and background color settings.",
          "starterCode": "{% schema %}\n{\n  \"name\": \"Announcement Bar\",\n  \"settings\": []\n}\n{% endschema %}",
          "solutionCode": "{% schema %}\n{\n  \"name\": \"Announcement Bar\",\n  \"tag\": \"aside\",\n  \"class\": \"section-announcement-bar\",\n  \"settings\": [\n    {\n      \"type\": \"text\",\n      \"id\": \"message\",\n      \"label\": \"Announcement Text\",\n      \"default\": \"Welcome to our developer store\"\n    },\n    {\n      \"type\": \"url\",\n      \"id\": \"link\",\n      \"label\": \"Announcement Link\"\n    },\n    {\n      \"type\": \"color\",\n      \"id\": \"bar_bg\",\n      \"label\": \"Bar Background Color\",\n      \"default\": \"#111827\"\n    },\n    {\n      \"type\": \"color\",\n      \"id\": \"text_color\",\n      \"label\": \"Text Color\",\n      \"default\": \"#FFFFFF\"\n    }\n  ],\n  \"presets\": [\n    {\n      \"name\": \"Announcement Bar\"\n    }\n  ]\n}\n{% endschema %}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-beg-05",
    "orderIndex": 5,
    "title": "5. Shopify Frontend Development",
    "description": "Engineer responsive, accessible, and performant storefront frontend experiences using modern JavaScript, the AJAX Cart API, variant state listeners, and accessible drawer patterns.",
    "duration": "55 mins",
    "xpReward": 175,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-fe-01",
        "title": "Shopify AJAX Cart API Documentation",
        "type": "documentation",
        "url": "https://shopify.dev/docs/api/ajax/reference/cart"
      },
      {
        "id": "res-fe-02",
        "title": "Shopify Theme Accessibility Guidelines",
        "type": "article",
        "url": "https://shopify.dev/docs/themes/best-practices/accessibility"
      }
    ],
    "lessonContent": {
      "overview": "High-converting Shopify storefronts rely on seamless client-side interactions without disruptive full page refreshes. In this module, you will master the official Shopify AJAX Cart API (`/cart/add.js`, `/cart/change.js`, `/cart/update.js`, `/cart.js`), variant change event handling, accessible drawer cart state management, and modern Web Component integration.",
      "objectives": [
        "Interact with the Shopify AJAX Cart API using native async/await `fetch` operations.",
        "Build an interactive variant selector that updates prices, SKU, availability, and image galleries in real time.",
        "Construct an accessible slide-out cart drawer with keyboard focus traps and screen reader announcements.",
        "Handle API error responses (e.g. inventory limits reached) gracefully in the UI."
      ],
      "sections": [
        {
          "id": "sec-ajax-cart",
          "title": "AJAX Cart API Controller & Variant Event Engine",
          "content": "The AJAX Cart API allows frontend JavaScript to modify the shopper cart state. When adding items to cart, you post `{ id: variantId, quantity: qty }` to `/cart/add.js`. To update line quantities or remove items, you post to `/cart/change.js`. To render the updated cart badge or drawer contents, you fetch `/cart.js` or leverage Section Rendering API to fetch fresh HTML partials.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "assets/cart-controller.js",
              "title": "Enterprise AJAX Cart Service Module",
              "code": "/**\n * Shopify AJAX Cart Controller\n * Manages asynchronous cart mutations, inventory error handling, and UI event dispatching.\n */\nexport class CartController {\n  static async getCart() {\n    const res = await fetch('/cart.js');\n    if (!res.ok) throw new Error('Failed to fetch cart state');\n    return await res.json();\n  }\n\n  static async addItem(variantId, quantity = 1, properties = {}) {\n    const payload = {\n      id: Number(variantId),\n      quantity: Number(quantity),\n      properties\n    };\n\n    const res = await fetch('/cart/add.js', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify(payload)\n    });\n\n    const data = await res.json();\n    if (!res.ok) {\n      throw new Error(data.description || data.message || 'Error adding item to cart');\n    }\n\n    // Dispatch global event for cart drawer & header badge update\n    document.dispatchEvent(new CustomEvent('cart:updated', { detail: { item: data } }));\n    return data;\n  }\n\n  static async updateQuantity(lineKey, quantity) {\n    const res = await fetch('/cart/change.js', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ id: lineKey, quantity: Number(quantity) })\n    });\n\n    const cart = await res.json();\n    document.dispatchEvent(new CustomEvent('cart:updated', { detail: { cart } }));\n    return cart;\n  }\n}",
              "explanation": "Reusable JavaScript module encapsulating all AJAX Cart API operations with standardized error handling and CustomEvent dispatches."
            },
            {
              "language": "javascript",
              "filename": "assets/variant-picker.js",
              "title": "Variant Change Controller & Dynamic Price Updater",
              "code": "class VariantPicker extends HTMLElement {\n  connectedCallback() {\n    this.form = this.querySelector('form');\n    this.productJson = JSON.parse(this.querySelector('[data-product-json]').textContent);\n    this.addEventListener('change', this.onVariantChange.bind(this));\n  }\n\n  getSelectedOptions() {\n    return Array.from(this.querySelectorAll('input:checked, select')).map(el => el.value);\n  }\n\n  onVariantChange() {\n    const selectedOptions = this.getSelectedOptions();\n    const matchedVariant = this.productJson.variants.find(variant => {\n      return variant.options.every((opt, index) => opt === selectedOptions[index]);\n    });\n\n    if (matchedVariant) {\n      this.updatePrice(matchedVariant);\n      this.updateAvailability(matchedVariant);\n      this.updateUrl(matchedVariant);\n    }\n  }\n\n  updatePrice(variant) {\n    const priceEl = document.querySelector('[data-product-price]');\n    if (priceEl) {\n      priceEl.textContent = this.formatMoney(variant.price);\n    }\n  }\n\n  updateAvailability(variant) {\n    const btn = document.querySelector('[name=\"add\"]');\n    if (!variant.available) {\n      btn.disabled = true;\n      btn.textContent = 'Sold Out';\n    } else {\n      btn.disabled = false;\n      btn.textContent = 'Add to Cart';\n    }\n  }\n\n  updateUrl(variant) {\n    const url = new URL(window.location);\n    url.searchParams.set('variant', variant.id);\n    window.history.replaceState({}, '', url);\n  }\n\n  formatMoney(cents) {\n    return '$' + (cents / 100).toFixed(2);\n  }\n}\ncustomElements.define('variant-picker', VariantPicker);",
              "explanation": "Web Component pattern for handling variant state changes, updating prices, disabling sold-out buttons, and synchronizing URL query parameters."
            },
            {
              "language": "liquid",
              "filename": "snippets/cart-drawer.liquid",
              "title": "Accessible Cart Drawer Dialog Template",
              "code": "<div\n  id=\"CartDrawer\"\n  class=\"cart-drawer fixed inset-0 z-50 overflow-hidden hidden\"\n  role=\"dialog\"\n  aria-modal=\"true\"\n  aria-label=\"{{ 'cart.general.title' | t }}\"\n>\n  <div class=\"cart-drawer-overlay fixed inset-0 bg-black/40 transition-opacity\"></div>\n  \n  <div class=\"cart-drawer-panel fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col p-6\">\n    <div class=\"flex items-center justify-between border-b pb-4\">\n      <h2 class=\"text-xl font-bold text-gray-900\">{{ 'cart.general.title' | t }}</h2>\n      <button\n        type=\"button\"\n        class=\"cart-drawer-close p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand\"\n        aria-label=\"{{ 'accessibility.close' | t }}\"\n      >\n        &times;\n      </button>\n    </div>\n\n    <div class=\"cart-drawer-items flex-1 overflow-y-auto py-4\" data-cart-items-container>\n      <!-- Dynamically populated via JavaScript -->\n    </div>\n\n    <div class=\"border-t pt-4 space-y-4\">\n      <div class=\"flex justify-between font-bold text-lg\">\n        <span>{{ 'cart.general.subtotal' | t }}</span>\n        <span data-cart-subtotal>{{ cart.total_price | money }}</span>\n      </div>\n      <a href=\"/checkout\" class=\"w-full button button--primary block text-center py-3\">\n        {{ 'cart.general.checkout' | t }}\n      </a>\n    </div>\n  </div>\n</div>",
              "explanation": "Accessible cart drawer structure with ARIA modal attributes and standard checkout button link."
            }
          ],
          "proTip": "When updating the cart, use Shopify Section Rendering API (`?sections=cart-drawer,cart-icon-bubble`) alongside your AJAX request to receive pre-rendered HTML snippets directly from the Liquid engine, avoiding fragile client-side template duplication.",
          "commonMistakes": [
            "Not handling 422 Unprocessable Entity HTTP errors when a shopper attempts to add more items than available in store inventory.",
            "Updating browser URL with variant ID using `window.location.href = ...` which reloads the entire page instead of `history.replaceState`.",
            "Missing ARIA modal roles (`role=\"dialog\"`, `aria-modal=\"true\"`) on drawer carts."
          ]
        }
      ],
      "keyTakeaways": [
        "Use native `fetch` with `/cart/add.js` and `/cart/change.js` to power smooth asynchronous cart operations.",
        "Encapsulate variant logic in native Web Components (`customElements.define`) for clean lifecycle management.",
        "Always ensure keyboard trap management and proper ARIA landmarks on interactive drawer modals."
      ],
      "practiceExercises": [
        {
          "id": "ex-beg-05",
          "title": "Implement AJAX Add to Cart Handler",
          "instructions": "Write a JavaScript event listener on a product form submit event that prevents default submission, extracts variant ID and quantity, and invokes CartController.addItem with visual loading state.",
          "starterCode": "const form = document.querySelector('form[action=\"/cart/add\"]');\nform.addEventListener('submit', async (e) => {\n  // Add your submission logic here\n});",
          "solutionCode": "const form = document.querySelector('form[action=\"/cart/add\"]');\nform.addEventListener('submit', async (e) => {\n  e.preventDefault();\n  const submitBtn = form.querySelector('[type=\"submit\"]');\n  const formData = new FormData(form);\n  const variantId = formData.get('id');\n  const quantity = formData.get('quantity') || 1;\n\n  try {\n    submitBtn.disabled = true;\n    submitBtn.classList.add('loading');\n    await CartController.addItem(variantId, quantity);\n  } catch (err) {\n    alert(err.message);\n  } finally {\n    submitBtn.disabled = false;\n    submitBtn.classList.remove('loading');\n  }\n});"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-beg-06",
    "orderIndex": 6,
    "title": "6. Shopify Storefront Data and Objects",
    "description": "Master core Liquid storefront objects: product, variant, collection, cart, customer, order, page, and shop. Understand object relationships and safe data rendering.",
    "duration": "50 mins",
    "xpReward": 165,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-obj-01",
        "title": "Shopify Liquid Objects Directory",
        "type": "documentation",
        "url": "https://shopify.dev/docs/api/liquid/objects"
      }
    ],
    "lessonContent": {
      "overview": "Liquid objects represent data stored in the Shopify database and made accessible to the storefront runtime. In this module, you will explore product objects, variant properties, collection sorting/filtering algorithms, customer account objects, and the global `shop` and `request` objects. You will learn to navigate nested object relationships while avoiding performance pitfalls like N+1 collection iterations.",
      "objectives": [
        "Navigate product and variant properties (prices, compare_at_price, options_with_values, metafields).",
        "Handle collection pagination and sorting rules using `paginate collection.products by 24`.",
        "Access customer and order history objects securely on authenticated customer account pages.",
        "Apply safe Liquid filter chaining (`money_with_currency`, `escape`, `json`, `image_url`)."
      ],
      "sections": [
        {
          "id": "sec-storefront-objects",
          "title": "Storefront Data Models & Safe Liquid Iterations",
          "content": "Every Shopify Liquid page executes within a specific context. On `product.json`, the global `product` object is in scope. On `collection.json`, the `collection` object contains all assigned products. Iterating over collections requires pagination tags to prevent server timeout errors.",
          "codeSnippets": [
            {
              "language": "liquid",
              "filename": "snippets/product-card.liquid",
              "title": "Production Product Card Component with Variant Comparison",
              "code": "{%- comment -%}\n  Renders a product card with price badge, sale calculation, and quick-add.\n  Usage:\n  {% render 'product-card', product: product, show_vendor: true %}\n{%- endcomment -%}\n\n<div class=\"product-card group relative flex flex-col overflow-hidden rounded-xl border bg-white p-4 transition-shadow hover:shadow-md\">\n  {% if product.featured_media != blank %}\n    <a href=\"{{ product.url }}\" class=\"aspect-square w-full overflow-hidden rounded-lg bg-gray-100 mb-4 block\">\n      {{ product.featured_media | image_url: width: 600 | image_tag: \n         widths: '300, 600', \n         loading: 'lazy', \n         class: 'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105' \n      }}\n    </a>\n  {% endif %}\n\n  {% if show_vendor and product.vendor != blank %}\n    <span class=\"text-xs font-mono uppercase text-gray-400 mb-1\">{{ product.vendor }}</span>\n  {% endif %}\n\n  <h3 class=\"text-sm font-semibold text-gray-900 line-clamp-2 mb-2\">\n    <a href=\"{{ product.url }}\">{{ product.title | escape }}</a>\n  </h3>\n\n  <div class=\"mt-auto flex items-center justify-between pt-2\">\n    <div class=\"flex items-baseline gap-2\">\n      <span class=\"text-base font-bold text-brand\">\n        {{ product.price | money }}\n      </span>\n      {% if product.compare_at_price > product.price %}\n        <span class=\"text-xs text-gray-400 line-through\">\n          {{ product.compare_at_price | money }}\n        </span>\n        <span class=\"inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700\">\n          Save {{ product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round }}%\n        </span>\n      {% endif %}\n    </div>\n\n    {% if product.available %}\n      <span class=\"text-xs text-emerald-600 font-medium\">In Stock</span>\n    {% else %}\n      <span class=\"text-xs text-gray-400 font-medium\">Sold Out</span>\n    {% endif %}\n  </div>\n</div>",
              "explanation": "A standard product card component calculating discount percentages and formatting prices safely."
            },
            {
              "language": "liquid",
              "filename": "sections/main-collection.liquid",
              "title": "Paginated Collection Grid Iteration",
              "code": "{% paginate collection.products by 12 %}\n  <div class=\"max-w-7xl mx-auto px-4 py-8\">\n    <header class=\"mb-8\">\n      <h1 class=\"text-3xl font-bold text-gray-900\">{{ collection.title | escape }}</h1>\n      {% if collection.description != blank %}\n        <div class=\"mt-2 text-gray-600 rte\">{{ collection.description }}</div>\n      {% endif %}\n    </header>\n\n    <div class=\"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6\">\n      {% for product in collection.products %}\n        {% render 'product-card', product: product, show_vendor: false %}\n      {% else %}\n        <p class=\"col-span-full text-center py-12 text-gray-500\">\n          {{ 'collections.general.no_matches' | t }}\n        </p>\n      {% endfor %}\n    </div>\n\n    {% if paginate.pages > 1 %}\n      <nav class=\"mt-12 flex justify-center gap-2\" aria-label=\"Pagination Navigation\">\n        {{ paginate | default_pagination }}\n      </nav>\n    {% endif %}\n  </div>\n{% endpaginate %}",
              "explanation": "Paginated collection loop ensuring safe memory consumption and accessibility compliant navigation."
            }
          ],
          "proTip": "Never iterate through `collections.all.products` in a for loop without pagination. Doing so hits Shopify Liquid execution limits and results in severe storefront latency or Liquid error crashes.",
          "commonMistakes": [
            "Forgetting `paginate` tags around collection loops.",
            "Comparing prices as floating points instead of integer cents (`product.price` is in cents, e.g. 2999 = $29.99).",
            "Displaying raw unescaped product titles inside HTML attributes without `| escape`."
          ]
        }
      ],
      "keyTakeaways": [
        "Shopify currency values are integers representing cents (e.g. 1999 = $19.99); use `money` filters for localized presentation.",
        "Always wrap collection product loops in `{% paginate %}` blocks.",
        "Use `product.compare_at_price` to compute and display promotional sale badges dynamically."
      ],
      "practiceExercises": [
        {
          "id": "ex-beg-06",
          "title": "Render Customer Order Table",
          "instructions": "Write a Liquid table that iterates through customer.orders and renders order name, financial status, fulfillment status, and total price formatted in currency.",
          "starterCode": "{% if customer.orders.size > 0 %}\n  <table>\n    <!-- Loop through orders -->\n  </table>\n{% endif %}",
          "solutionCode": "{% if customer.orders.size > 0 %}\n  <table class=\"w-full text-left border-collapse\">\n    <thead>\n      <tr class=\"border-b\">\n        <th>Order</th>\n        <th>Date</th>\n        <th>Payment</th>\n        <th>Fulfillment</th>\n        <th>Total</th>\n      </tr>\n    </thead>\n    <tbody>\n      {% for order in customer.orders %}\n        <tr class=\"border-b\">\n          <td><a href=\"{{ order.customer_url }}\" class=\"text-brand font-bold\">{{ order.name }}</a></td>\n          <td>{{ order.created_at | date: \"%B %d, %Y\" }}</td>\n          <td><span class=\"badge\">{{ order.financial_status_label }}</span></td>\n          <td><span class=\"badge\">{{ order.fulfillment_status_label }}</span></td>\n          <td>{{ order.total_price | money }}</td>\n        </tr>\n      {% endfor %}\n    </tbody>\n  </table>\n{% endif %}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-beg-07",
    "orderIndex": 7,
    "title": "7. Metafields and Metaobjects",
    "description": "Model complex custom data using Shopify Metafields and Metaobjects. Define namespaces, keys, dynamic sources, and structured content models rendered seamlessly in themes.",
    "duration": "50 mins",
    "xpReward": 170,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-meta-01",
        "title": "Shopify Metafields Guide",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/custom-data/metafields"
      },
      {
        "id": "res-meta-02",
        "title": "Metaobjects Architectural Guide",
        "type": "article",
        "url": "https://shopify.dev/docs/apps/custom-data/metaobjects"
      }
    ],
    "lessonContent": {
      "overview": "Modern Shopify stores require custom structured data beyond basic product titles and descriptions. Metafields allow developers to attach custom fields (materials, care instructions, size charts, PDF manuals) to products, collections, customers, and orders. Metaobjects take this further by creating reusable multi-field content entities (like Author profiles, Brand Ambassadors, or Store Locations).",
      "objectives": [
        "Define Metafield definitions with specific data types (single_line_text_field, file_reference, json, rating).",
        "Access product and collection metafields safely in Liquid using `.value` property unwrapping.",
        "Model multi-field entities using Metaobjects and render lists of metaobjects on the storefront.",
        "Connect metafields to theme section schemas using Dynamic Sources."
      ],
      "sections": [
        {
          "id": "sec-meta-modeling",
          "title": "Metafield Access Patterns & Metaobject Modeling",
          "content": "Metafields are organized by `namespace.key`. To access a metafield value in Liquid, use `resource.metafields.namespace.key.value`. If the metafield is a reference (e.g., to a file or product), `.value` automatically resolves the referenced object.",
          "codeSnippets": [
            {
              "language": "liquid",
              "filename": "snippets/product-specifications.liquid",
              "title": "Accessing Typed Product Metafields Safely",
              "code": "{%- comment -%}\n  Renders technical product specifications stored in custom metafields.\n{%- endcomment -%}\n\n{% assign specs = product.metafields.custom.technical_specifications.value %}\n{% assign user_guide = product.metafields.custom.user_manual_pdf.value %}\n\n<div class=\"product-specs border-t pt-6 mt-6\">\n  <h4 class=\"text-sm font-mono uppercase tracking-wider text-gray-500 mb-4\">\n    Technical Specifications\n  </h4>\n\n  {% if specs != blank %}\n    <dl class=\"grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm\">\n      {% for item in specs %}\n        <div class=\"flex justify-between border-b py-1\">\n          <dt class=\"text-gray-500 font-medium\">{{ item.label | escape }}:</dt>\n          <dd class=\"text-gray-900 font-mono\">{{ item.value | escape }}</dd>\n        </div>\n      {% endfor %}\n    </dl>\n  {% endif %}\n\n  {% if user_guide != blank %}\n    <div class=\"mt-4\">\n      <a\n        href=\"{{ user_guide.url }}\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        class=\"inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline\"\n      >\n        <span>Download PDF User Manual ({{ user_guide.size | divided_by: 1024 }} KB)</span>\n      </a>\n    </div>\n  {% endif %}\n</div>",
              "explanation": "Accessing list.single_line_text_field and file_reference metafields with safe .value unwrapping."
            },
            {
              "language": "liquid",
              "filename": "sections/author-showcase.liquid",
              "title": "Rendering Metaobject Entity Collections",
              "code": "{%- comment -%}\n  Iterates over the \"author_profile\" metaobject definition.\n{%- endcomment -%}\n\n<section class=\"authors-grid max-w-7xl mx-auto px-4 py-12\">\n  <h2 class=\"text-2xl font-bold mb-8\">Meet Our Contributing Engineers</h2>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6\">\n    {% for author in shop.metaobjects.author_profile.values %}\n      <div class=\"author-card p-6 rounded-xl border bg-white shadow-sm flex flex-col items-center text-center\">\n        {% if author.avatar.value != blank %}\n          <div class=\"w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-brand\">\n            {{ author.avatar.value | image_url: width: 200 | image_tag: class: 'w-full h-full object-cover' }}\n          </div>\n        {% endif %}\n        \n        <h3 class=\"text-lg font-bold text-gray-900\">{{ author.full_name.value | escape }}</h3>\n        <p class=\"text-xs font-mono text-brand mb-2\">{{ author.role_title.value | escape }}</p>\n        <p class=\"text-sm text-gray-600 mb-4\">{{ author.biography.value | escape }}</p>\n\n        {% if author.github_handle.value != blank %}\n          <a\n            href=\"https://github.com/{{ author.github_handle.value }}\"\n            target=\"_blank\"\n            class=\"text-xs text-gray-500 hover:text-black font-mono\"\n          >\n            @{{ author.github_handle.value }}\n          </a>\n        {% endif %}\n      </div>\n    {% endfor %}\n  </div>\n</section>",
              "explanation": "Rendering multi-field Metaobjects directly from the global shop.metaobjects scope."
            }
          ],
          "proTip": "Always append `.value` when accessing modern Shopify metafields. In legacy Liquid, metafields returned raw string values, but in Online Store 2.0, `.value` returns typed objects (e.g. MediaImage, File, Color, List).",
          "commonMistakes": [
            "Forgetting `.value`, resulting in Liquid outputting \"[MetafieldDrop]\" or raw JSON strings.",
            "Hardcoding metafield namespaces in templates without creating the corresponding definitions in Shopify Admin > Custom Data.",
            "Attempting to edit metaobjects client-side without using authenticated backend Admin API mutations."
          ]
        }
      ],
      "keyTakeaways": [
        "Metafields attach custom typed data to Shopify resources; always unwrap with `.value`.",
        "Metaobjects define independent multi-field content models (e.g. authors, store locations).",
        "Merchants can bind metafields directly to section settings via Dynamic Sources in the Theme Editor."
      ],
      "practiceExercises": [
        {
          "id": "ex-beg-07",
          "title": "Render Care Instructions Metafield",
          "instructions": "Write a Liquid snippet that checks if product.metafields.custom.care_instructions exists and renders it inside an accordion element.",
          "starterCode": "{%- comment -%} Care instructions accordion {%- endcomment -%}",
          "solutionCode": "{% assign care = product.metafields.custom.care_instructions.value %}\n{% if care != blank %}\n  <details class=\"border-b py-3\">\n    <summary class=\"font-semibold text-sm cursor-pointer\">Care Instructions</summary>\n    <div class=\"mt-2 text-sm text-gray-600 leading-relaxed\">\n      {{ care | newline_to_br }}\n    </div>\n  </details>\n{% endif %}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-beg-08",
    "orderIndex": 8,
    "title": "8. Shopify Theme Performance and Accessibility",
    "description": "Optimize Core Web Vitals (LCP, INP, CLS) and achieve WCAG 2.1 AA accessibility compliance for high-converting, high-speed Shopify storefronts.",
    "duration": "55 mins",
    "xpReward": 175,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-perf-01",
        "title": "Shopify Theme Performance Best Practices",
        "type": "documentation",
        "url": "https://shopify.dev/docs/themes/best-practices/performance"
      },
      {
        "id": "res-perf-02",
        "title": "Core Web Vitals Optimization Guide",
        "type": "article",
        "url": "https://web.dev/vitals/"
      }
    ],
    "lessonContent": {
      "overview": "Storefront speed directly impacts conversion rates, search rankings, and return on ad spend. In this module, you will learn how to optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) on Shopify themes. You will also implement WCAG 2.1 AA standards for keyboard navigation and screen reader support.",
      "objectives": [
        "Optimize LCP using priority image hints (`preload: true`, `fetchpriority=\"high\"`).",
        "Eliminate Cumulative Layout Shift (CLS) by enforcing aspect ratios and image dimensions.",
        "Reduce Total Blocking Time and optimize INP by deferring non-critical JavaScript.",
        "Implement WCAG 2.1 AA keyboard accessibility with skip links, visible focus rings, and ARIA labels."
      ],
      "sections": [
        {
          "id": "sec-perf-cwv",
          "title": "Core Web Vitals & Accessibility Optimization",
          "content": "The most common theme performance bottleneck is unoptimized hero banners that delay LCP. By utilizing `image_tag` with `preload: true`, Shopify automatically injects `<link rel=\"preload\">` in the document head. Lazy loading below-the-fold assets using `loading: \"lazy\"` frees up main-thread CPU time.",
          "codeSnippets": [
            {
              "language": "liquid",
              "filename": "sections/hero-banner.liquid",
              "title": "High-Performance LCP-Optimized Hero Section",
              "code": "{%- comment -%}\n  LCP-Optimized Hero Banner\n  Preloads the desktop and mobile image to achieve sub-second Largest Contentful Paint.\n{%- endcomment -%}\n\n<div class=\"hero-banner relative overflow-hidden bg-gray-900 text-white min-h-[480px] flex items-center\">\n  {% if section.settings.image != blank %}\n    {{ section.settings.image | image_url: width: 2400 | image_tag:\n       widths: '640, 1080, 1920, 2400',\n       sizes: '100vw',\n       preload: true,\n       fetchpriority: 'high',\n       class: 'absolute inset-0 w-full h-full object-cover z-0'\n    }}\n  {% endif %}\n\n  <div class=\"relative z-10 max-w-4xl mx-auto px-6 py-16 text-center\">\n    <h1 class=\"text-4xl sm:text-6xl font-extrabold tracking-tight mb-4\">\n      {{ section.settings.heading | escape }}\n    </h1>\n    <p class=\"text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto\">\n      {{ section.settings.subheading | escape }}\n    </p>\n    {% if section.settings.button_link != blank %}\n      <a\n        href=\"{{ section.settings.button_link }}\"\n        class=\"inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-white text-gray-900 hover:bg-gray-100 transition-colors shadow-lg\"\n      >\n        {{ section.settings.button_label | default: 'Shop Now' | escape }}\n      </a>\n    {% endif %}\n  </div>\n</div>",
              "explanation": "Hero banner with preload: true and fetchpriority: \"high\" to minimize LCP latency."
            },
            {
              "language": "javascript",
              "filename": "assets/performance-observer.js",
              "title": "Real-User Performance Monitoring Script",
              "code": "// Monitor Core Web Vitals on client side\nif ('PerformanceObserver' in window) {\n  // 1. Observe Largest Contentful Paint (LCP)\n  new PerformanceObserver((entryList) => {\n    for (const entry of entryList.getEntries()) {\n      console.log('LCP Candidate Render Time:', Math.round(entry.startTime), 'ms', entry.element);\n    }\n  }).observe({ type: 'largest-contentful-paint', buffered: true });\n\n  // 2. Observe Cumulative Layout Shift (CLS)\n  let clsValue = 0;\n  new PerformanceObserver((entryList) => {\n    for (const entry of entryList.getEntries()) {\n      if (!entry.hadRecentInput) {\n        clsValue += entry.value;\n        console.log('Current CLS score:', clsValue.toFixed(4));\n      }\n    }\n  }).observe({ type: 'layout-shift', buffered: true });\n}",
              "explanation": "Client-side PerformanceObserver utility for tracking real-world LCP and CLS metrics."
            }
          ],
          "proTip": "Never set `loading=\"lazy\"` on your hero banner or first visible product image. Lazy loading the LCP element delays its download until after the layout phase, significantly worsening your Google Lighthouse performance score.",
          "commonMistakes": [
            "Lazy loading above-the-fold hero images.",
            "Injecting heavy third-party app scripts synchronously in the `<head>` of `theme.liquid`.",
            "Using `outline: none` in CSS without providing a visible `:focus-visible` alternative."
          ]
        }
      ],
      "keyTakeaways": [
        "Preload the LCP hero image using `preload: true` and `fetchpriority=\"high\"`.",
        "Lazy load below-the-fold images and section components to reduce initial payload.",
        "Ensure visible keyboard focus states (`:focus-visible`) and WCAG contrast ratios."
      ],
      "practiceExercises": [
        {
          "id": "ex-beg-08",
          "title": "Implement an Accessible Skip to Content Link",
          "instructions": "Write the HTML and CSS snippet for an accessible \"Skip to content\" link that remains visually hidden until focused by a keyboard tab key.",
          "starterCode": "<a href=\"#MainContent\">Skip to content</a>",
          "solutionCode": "<a\n  href=\"#MainContent\"\n  class=\"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white\"\n>\n  Skip to main content\n</a>"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-beg-09",
    "orderIndex": 9,
    "title": "9. Shopify Storefront APIs Overview",
    "description": "Understand the architecture of Shopify Storefront API and GraphQL query mechanics. Learn public token management, rate limit costs, and secure API client usage.",
    "duration": "50 mins",
    "xpReward": 165,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-api-01",
        "title": "Storefront API GraphQL Reference",
        "type": "documentation",
        "url": "https://shopify.dev/docs/api/storefront"
      }
    ],
    "lessonContent": {
      "overview": "The Shopify Storefront API allows developers to build custom e-commerce experiences using GraphQL. Whether building headless web apps, mobile apps, or headless micro-frontends inside an Online Store theme, the Storefront API gives complete unauthenticated access to products, collections, customer access tokens, and checkout creation.",
      "objectives": [
        "Distinguish between Storefront API (public, unauthenticated) and Admin API (private, privileged).",
        "Construct GraphQL queries to retrieve products, variants, and collection listings.",
        "Execute mutations to create carts and generate checkout URLs.",
        "Understand API query cost calculations and rate limits."
      ],
      "sections": [
        {
          "id": "sec-sf-graphql",
          "title": "GraphQL Storefront Queries & Cart Mutations",
          "content": "The Storefront API endpoint is accessible at `https://{shop}.myshopify.com/api/2024-01/graphql.json`. Requests require the `X-Shopify-Storefront-Access-Token` header. Because this token is public, it can be safely used in client-side code.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "assets/storefront-client.js",
              "title": "Authenticated Storefront API GraphQL Client",
              "code": "/**\n * Storefront API GraphQL Client\n */\nexport class StorefrontClient {\n  constructor(domain, publicAccessToken) {\n    this.endpoint = `https://${domain}/api/2024-01/graphql.json`;\n    this.token = publicAccessToken;\n  }\n\n  async query(graphqlQuery, variables = {}) {\n    const response = await fetch(this.endpoint, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'X-Shopify-Storefront-Access-Token': this.token,\n      },\n      body: JSON.stringify({ query: graphqlQuery, variables })\n    });\n\n    const json = await response.json();\n    if (json.errors) {\n      throw new Error(json.errors.map(e => e.message).join(', '));\n    }\n    return json.data;\n  }\n\n  async fetchProduct(handle) {\n    const PRODUCT_QUERY = `\n      query GetProduct($handle: String!) {\n        product(handle: $handle) {\n          id\n          title\n          descriptionHtml\n          availableForSale\n          variants(first: 10) {\n            nodes {\n              id\n              title\n              price {\n                amount\n                currencyCode\n              }\n              availableForSale\n            }\n          }\n        }\n      }\n    `;\n    return await this.query(PRODUCT_QUERY, { handle });\n  }\n}",
              "explanation": "A standard lightweight JavaScript client for querying the Shopify Storefront GraphQL API."
            },
            {
              "language": "javascript",
              "filename": "assets/create-cart-mutation.js",
              "title": "Creating a Cart via Storefront API Mutation",
              "code": "const CART_CREATE_MUTATION = `\n  mutation CreateCart($lines: [CartLineInput!]) {\n    cartCreate(input: { lines: $lines }) {\n      cart {\n        id\n        checkoutUrl\n        totalQuantity\n        cost {\n          totalAmount {\n            amount\n            currencyCode\n          }\n        }\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n`;\n\nasync function initializeHeadlessCheckout(client, variantGid, quantity = 1) {\n  const data = await client.query(CART_CREATE_MUTATION, {\n    lines: [{ merchandiseId: variantGid, quantity }]\n  });\n\n  if (data.cartCreate.userErrors.length > 0) {\n    throw new Error(data.cartCreate.userErrors[0].message);\n  }\n\n  console.log('Checkout URL generated:', data.cartCreate.cart.checkoutUrl);\n  return data.cartCreate.cart;\n}",
              "explanation": "Executing cartCreate mutation to initialize a checkout session in headless and custom frontends."
            }
          ],
          "proTip": "Storefront API variant IDs are global GraphQL IDs (e.g. `gid://shopify/ProductVariant/41234567890123`). If you have a numeric Liquid ID (`41234567890123`), prepend `gid://shopify/ProductVariant/` when querying GraphQL.",
          "commonMistakes": [
            "Using Admin API tokens in frontend client code.",
            "Passing numeric ID strings to GraphQL fields that expect GIDs (`gid://shopify/...`).",
            "Failing to handle GraphQL `userErrors` returned inside mutation response payloads."
          ]
        }
      ],
      "keyTakeaways": [
        "Storefront API uses GraphQL and public access tokens for client-side and headless queries.",
        "GraphQL mutations return `userErrors` arrays that must be checked in addition to HTTP status codes.",
        "All Shopify GraphQL IDs use the Global ID (GID) format (`gid://shopify/Type/12345`)."
      ],
      "practiceExercises": [
        {
          "id": "ex-beg-09",
          "title": "Write a Storefront GraphQL Query",
          "instructions": "Write a GraphQL query that fetches the shop name, currency code, and first 5 products with their title and handle.",
          "starterCode": "query GetShopInfo {\n  // Write query here\n}",
          "solutionCode": "query GetShopInfo {\n  shop {\n    name\n    paymentSettings {\n      currencyCode\n    }\n  }\n  products(first: 5) {\n    nodes {\n      id\n      title\n      handle\n    }\n  }\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-beg-10",
    "orderIndex": 10,
    "title": "10. Shopify Webhooks and Events",
    "description": "Build resilient event-driven architectures with Shopify Webhooks. Validate HMAC SHA-256 signatures, handle exponential backoff retries, and ensure idempotent processing.",
    "duration": "50 mins",
    "xpReward": 170,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-wh-01",
        "title": "Shopify Webhooks Guide",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/webhooks"
      },
      {
        "id": "res-wh-02",
        "title": "Webhook Signature Verification",
        "type": "article",
        "url": "https://shopify.dev/docs/apps/webhooks/configuration/https#step-5-verify-the-webhook"
      }
    ],
    "lessonContent": {
      "overview": "Webhooks are automated HTTP POST notifications sent by Shopify whenever state changes in a store (such as `orders/create`, `products/update`, or `customers/delete`). Because webhooks deliver asynchronously over public networks, developers must master cryptographic signature validation, fast 200 OK acknowledgments, retry handling, and idempotency deduplication.",
      "objectives": [
        "Understand the Shopify webhook lifecycle and common subscription topics.",
        "Cryptographically verify incoming webhook payloads using Node.js crypto and HMAC SHA-256.",
        "Implement the 200 OK acknowledgment pattern to prevent Shopify webhook timeouts.",
        "Design idempotent database deduplication using the `X-Shopify-Webhook-Id` header."
      ],
      "sections": [
        {
          "id": "sec-webhook-handler",
          "title": "HMAC Verification & Idempotent Webhook Consumer",
          "content": "Shopify requires your webhook receiver to respond with HTTP 200 OK within 5 seconds. If your endpoint times out or returns 5xx errors, Shopify will retry with exponential backoff for 48 hours before unsubscribing the webhook. Best practice is to verify HMAC, queue the payload into Redis/BullMQ, and return 200 OK immediately.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "server/webhook-handler.js",
              "title": "Node.js Express Webhook Verification & Processor",
              "code": "import crypto from 'crypto';\nimport express from 'express';\n\nconst app = express();\n\n// Important: Shopify HMAC verification requires the RAW body buffer!\napp.post('/api/webhooks/orders-create', \n  express.raw({ type: 'application/json' }), \n  async (req, res) => {\n    const hmacHeader = req.get('x-shopify-hmac-sha256');\n    const topic = req.get('x-shopify-topic');\n    const shop = req.get('x-shopify-shop-domain');\n    const webhookId = req.get('x-shopify-webhook-id');\n    const rawBody = req.body;\n\n    // 1. Verify cryptographic HMAC signature\n    const generatedHmac = crypto\n      .createHmac('sha256', process.env.SHOPIFY_API_SECRET)\n      .update(rawBody, 'utf8')\n      .digest('base64');\n\n    if (!crypto.timingSafeEqual(Buffer.from(generatedHmac), Buffer.from(hmacHeader))) {\n      console.error('Unauthorized webhook signature mismatch from:', shop);\n      return res.status(401).send('HMAC signature verification failed');\n    }\n\n    // 2. Parse payload safely\n    const payload = JSON.parse(rawBody.toString('utf8'));\n\n    // 3. Check for duplicate webhook (Idempotency)\n    const isAlreadyProcessed = await checkWebhookProcessed(webhookId);\n    if (isAlreadyProcessed) {\n      console.log(`Webhook ${webhookId} already processed. Skipping duplicate.`);\n      return res.status(200).send('Duplicate acknowledged');\n    }\n\n    // 4. Mark webhook as received & dispatch to background worker\n    await markWebhookAsProcessing(webhookId);\n    await backgroundQueue.add('process-order', { shop, order: payload });\n\n    // 5. Acknowledge within < 5 seconds\n    res.status(200).send('Webhook received and queued');\n  }\n);",
              "explanation": "Production Express.js route verifying raw body buffer HMAC SHA-256 signatures and deduplicating webhook deliveries."
            },
            {
              "language": "bash",
              "filename": "trigger-test-webhook.sh",
              "title": "Testing Webhooks Locally via Shopify CLI",
              "code": "# Trigger a mock orders/create webhook delivered to local localhost endpoint\nshopify webhook trigger \\\n  --topic orders/create \\\n  --address http://localhost:3000/api/webhooks/orders-create \\\n  --api-version 2024-01 \\\n  --shared-secret your_app_secret_here",
              "explanation": "Shopify CLI command to trigger mock webhook events against local development servers."
            }
          ],
          "proTip": "Always use `crypto.timingSafeEqual()` instead of standard `===` when comparing cryptographic HMAC strings. This protects your webhook receiver against timing attack vulnerabilities.",
          "commonMistakes": [
            "Parsing the JSON body with `express.json()` before calculating the HMAC. Modifying whitespace or key orders will cause the HMAC hash calculation to fail.",
            "Performing long-running database syncs or external API calls inside the HTTP webhook handler, causing Shopify to time out at 5 seconds.",
            "Not tracking `x-shopify-webhook-id` to prevent duplicate order processing upon retries."
          ]
        }
      ],
      "keyTakeaways": [
        "Verify HMAC SHA-256 against the raw unparsed request buffer using `crypto.timingSafeEqual()`.",
        "Respond with HTTP 200 OK within 5 seconds and delegate heavy processing to background queues.",
        "Use `X-Shopify-Webhook-Id` as an idempotency key to prevent processing duplicate retries."
      ],
      "practiceExercises": [
        {
          "id": "ex-beg-10",
          "title": "Implement Webhook HMAC Verification Function",
          "instructions": "Write a standalone TypeScript function `verifyShopifyHmac(rawBody: string, hmacHeader: string, secret: string): boolean` that returns true if valid.",
          "starterCode": "function verifyShopifyHmac(rawBody: string, hmacHeader: string, secret: string): boolean {\n  // Implement verification\n}",
          "solutionCode": "import crypto from 'crypto';\n\nfunction verifyShopifyHmac(rawBody: string, hmacHeader: string, secret: string): boolean {\n  if (!rawBody || !hmacHeader || !secret) return false;\n  const hash = crypto\n    .createHmac('sha256', secret)\n    .update(rawBody, 'utf8')\n    .digest('base64');\n  try {\n    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(hmacHeader));\n  } catch {\n    return false;\n  }\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-beg-11",
    "orderIndex": 11,
    "title": "11. Git, Deployment and Developer Workflow",
    "description": "Establish enterprise CI/CD deployment pipelines, automated linting with Theme Check, GitHub integration, staging previews, and rollback management.",
    "duration": "50 mins",
    "xpReward": 165,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-git-01",
        "title": "Shopify GitHub Integration",
        "type": "documentation",
        "url": "https://shopify.dev/docs/themes/tools/github"
      },
      {
        "id": "res-git-02",
        "title": "Theme Check Linter Documentation",
        "type": "article",
        "url": "https://shopify.dev/docs/themes/tools/theme-check"
      }
    ],
    "lessonContent": {
      "overview": "Professional Shopify engineering requires automated release pipelines that prevent syntax errors, broken Liquid tags, and unexpected regressions on production stores. In this module, you will learn how to connect GitHub repositories directly to Shopify themes, configure GitHub Actions for automated linting (`shopify theme check`), manage staging theme slots, and execute instantaneous rollbacks.",
      "objectives": [
        "Connect Shopify Online Store themes directly to Git branches for continuous deployment.",
        "Configure `.theme-check.yml` to enforce coding standards and detect unused snippets or missing assets.",
        "Create a GitHub Actions CI workflow that tests and deploys theme releases automatically.",
        "Implement release tags and backup rollback procedures for zero-downtime deployments."
      ],
      "sections": [
        {
          "id": "sec-cicd-workflow",
          "title": "GitHub Actions CI/CD & Automated Theme Check Pipeline",
          "content": "Shopify provides native GitHub integration where commits to a linked branch automatically deploy to a designated theme. For enterprise control, teams also use GitHub Actions to run automated linters and push code via Shopify CLI tokens.",
          "codeSnippets": [
            {
              "language": "yaml",
              "filename": ".github/workflows/theme-ci.yml",
              "title": "GitHub Actions Theme CI/CD Workflow",
              "code": "name: Shopify Theme CI & Deployment Pipeline\n\non:\n  push:\n    branches: [main, staging]\n  pull_request:\n    branches: [main]\n\njobs:\n  lint-and-validate:\n    name: Run Theme Check & Syntax Linter\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout Repository\n        uses: actions/checkout@v4\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: 18\n\n      - name: Install Dependencies\n        run: npm ci\n\n      - name: Run Theme Check Linter\n        run: npx @shopify/theme-check --fail-level error\n\n      - name: Build Production Assets\n        run: npm run build\n\n  deploy-staging:\n    name: Deploy to Staging Theme Slot\n    needs: lint-and-validate\n    if: github.ref == 'refs/heads/staging'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Deploy via Shopify CLI\n        env:\n          SHOPIFY_FLAG_STORE: ${{ secrets.SHOPIFY_STORE_DOMAIN }}\n          SHOPIFY_CLI_THEME_TOKEN: ${{ secrets.SHOPIFY_STAGING_THEME_TOKEN }}\n        run: |\n          npx @shopify/cli theme push --theme-id ${{ secrets.STAGING_THEME_ID }} --unpublished",
              "explanation": "GitHub Actions workflow running Theme Check linting and deploying to staging upon push."
            },
            {
              "language": "yaml",
              "filename": ".theme-check.yml",
              "title": "Shopify Theme Check Linter Rules Configuration",
              "code": "# Shopify Theme Check Configuration\nroot: .\nrequire_all_rules: true\n\nAssetPreload:\n  enabled: true\n  severity: error\n\nDeprecateBgsizes:\n  enabled: true\n\nHtmlParsing:\n  enabled: true\n  severity: error\n\nImgWidthAndHeight:\n  enabled: true\n  severity: suggestion\n\nLiquidHTML:\n  enabled: true\n  severity: error\n\nUnusedSnippet:\n  enabled: true\n  severity: warning\n\nParserBlockingJavaScript:\n  enabled: true\n  severity: warning",
              "explanation": "Rules configuration enforcing asset preloading, image dimensions, and erroring on broken Liquid syntax."
            }
          ],
          "proTip": "Always exclude `config/settings_data.json` from feature branch pull requests unless you are deliberately updating theme-wide default values. Merchants configure settings live in production, and merging an outdated `settings_data.json` will overwrite merchant customizations.",
          "commonMistakes": [
            "Overwriting production `settings_data.json` with local developer dummy settings.",
            "Deploying without running `theme-check`, leading to runtime Liquid syntax errors on live checkout pages.",
            "Working directly on the `main` branch without peer code review."
          ]
        }
      ],
      "keyTakeaways": [
        "Automate quality control using Shopify Theme Check in continuous integration pipelines.",
        "Protect production merchant configurations by managing `settings_data.json` carefully in Git.",
        "Deploy changes to unpublished staging theme slots for QA verification before publishing live."
      ],
      "practiceExercises": [
        {
          "id": "ex-beg-11",
          "title": "Configure Theme Check Ignore Rules",
          "instructions": "Create a .theme-check.yml configuration file that enables all rules but ignores third-party vendor minified libraries in assets/vendor/.",
          "starterCode": "# .theme-check.yml configuration",
          "solutionCode": "root: .\nrequire_all_rules: true\n\nignore:\n  - assets/vendor/**\n  - node_modules/**"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-beg-12",
    "orderIndex": 12,
    "title": "12. Beginner Project Brief & Feature Architecture",
    "description": "Synthesize Beginner Level skills to architect and build a high-performance, accessible, and schema-configurable Custom Shopify Theme Feature.",
    "duration": "40 mins",
    "xpReward": 150,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-proj-01",
        "title": "Beginner Capstone Specification",
        "type": "documentation",
        "url": "https://shopify.dev/docs/themes/getting-started"
      }
    ],
    "lessonContent": {
      "overview": "In this preparatory module for your Beginner Capstone Project, you will synthesize all learned fundamentals: Section Schema design, dynamic block configurations, AJAX Cart API integration, Metafield binding, responsive CSS layouts, and keyboard accessibility standards. You will review the required technical deliverables and architecture diagram for the Custom Shopify Theme Feature project.",
      "objectives": [
        "Review the end-to-end technical requirements for the Beginner Capstone Project.",
        "Design a modular section component architecture with customizable schema settings and block presets.",
        "Prepare clean JavaScript event handling and AJAX Cart API integration.",
        "Verify WCAG accessibility and performance audit benchmarks before final project submission."
      ],
      "sections": [
        {
          "id": "sec-project-blueprint",
          "title": "Capstone Technical Architecture Blueprint",
          "content": "The Beginner Capstone requires creating a production-grade Custom Shopify Theme Feature (such as a Dynamic Product Bundle Builder or an Interactive Featured Showcase Section). The feature must be fully configurable in the Theme Editor, support dynamic blocks, integrate with the AJAX Cart API, and meet strict accessibility criteria.",
          "codeSnippets": [
            {
              "language": "liquid",
              "filename": "sections/bundle-builder-preview.liquid",
              "title": "Architectural Skeleton of Capstone Section",
              "code": "{%- comment -%}\n  Beginner Capstone Section Blueprint: Interactive Product Bundle Builder\n{%- endcomment -%}\n\n<section class=\"bundle-builder max-w-7xl mx-auto px-4 py-12\" data-bundle-section>\n  <header class=\"text-center mb-8\">\n    <h2 class=\"text-3xl font-bold\">{{ section.settings.heading | escape }}</h2>\n    <p class=\"text-gray-600 mt-2\">{{ section.settings.subheading | escape }}</p>\n  </header>\n\n  <div class=\"bundle-slots grid grid-cols-1 md:grid-cols-3 gap-6 mb-8\">\n    {% for block in section.blocks %}\n      <div class=\"bundle-slot-card p-6 border-2 border-dashed rounded-xl\" {{ block.shopify_attributes }}>\n        <span class=\"text-xs font-mono text-brand\">Tier {{ forloop.index }}</span>\n        <h3 class=\"text-lg font-bold mt-1\">{{ block.settings.tier_name | escape }}</h3>\n        <!-- Product selector & dynamic price -->\n      </div>\n    {% endfor %}\n  </div>\n\n  <div class=\"bundle-summary p-6 bg-gray-50 rounded-xl flex items-center justify-between\">\n    <div>\n      <span class=\"text-sm text-gray-500\">Total Bundle Price:</span>\n      <span class=\"text-2xl font-bold text-brand block\" data-bundle-total>$0.00</span>\n    </div>\n    <button type=\"button\" class=\"button button--primary px-8 py-3\" data-add-bundle-btn disabled>\n      Add Bundle to Cart\n    </button>\n  </div>\n</section>",
              "explanation": "High-level architectural blueprint for the beginner custom section capstone project."
            }
          ],
          "proTip": "Ensure all user-facing strings are wrapped in translation filters (`| t`) or exposed via section settings so international stores can localize the feature seamlessly.",
          "commonMistakes": [
            "Relying on hardcoded product IDs that fail when testing on different development stores.",
            "Not verifying mobile responsiveness across screen widths under 375px."
          ]
        }
      ],
      "keyTakeaways": [
        "Capstone projects test end-to-end theme development skills against production standards.",
        "Ensure clean separation between section Liquid markup, schema definitions, and JavaScript controllers.",
        "Verify zero console errors and 100% Theme Check compliance prior to submission."
      ],
      "practiceExercises": [
        {
          "id": "ex-beg-12",
          "title": "Design Section Deliverable Checklist",
          "instructions": "Outline the 10 core deliverables required for your Beginner Capstone project submission.",
          "starterCode": "// 10 Deliverables Checklist",
          "solutionCode": "// 1. Technical Project Brief\n// 2. Theme Architecture & File Map\n// 3. Custom Liquid Section Markup\n// 4. Comprehensive Section Schema with Types & Labels\n// 5. Dynamic Block Configuration & Preset\n// 6. Responsive CSS Grid/Flexbox Stylesheet\n// 7. JavaScript AJAX Cart & State Controller\n// 8. Product & Variant Dynamic Integration\n// 9. WCAG 2.1 AA Accessibility Verification\n// 10. Performance & Core Web Vitals Audit Report"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-beg-13",
    "orderIndex": 13,
    "title": "Beginner Project: Custom Shopify Theme Feature",
    "description": "Design, code, document, and deploy a production-ready Custom Shopify Theme Feature with section schema, dynamic blocks, AJAX Cart integration, and full Theme Editor compatibility.",
    "duration": "4 hours",
    "xpReward": 350,
    "isProject": true,
    "type": "project",
    "requiresQuiz": false,
    "projectDetails": {
      "title": "Beginner Capstone: Custom Shopify Theme Feature",
      "overview": "Build an enterprise-quality, fully responsive, and accessible Custom Theme Feature (e.g. Dynamic Product Bundle Builder or Interactive Collection Showcase) using Online Store 2.0 standards, Liquid, modern CSS, and vanilla JavaScript.",
      "deliverables": [
        {
          "id": "del-01",
          "title": "Project Technical Brief & Scope Document",
          "description": "Define target merchant persona, problem statement, UX user flows, and technical acceptance criteria.",
          "checklist": [
            "Detailed merchant problem statement",
            "User interaction flow diagram",
            "Technical requirements & browser support matrix"
          ]
        },
        {
          "id": "del-02",
          "title": "Theme Architecture Plan & File Map",
          "description": "Map out the directory structure detailing layout, JSON template, section, snippet, and asset locations.",
          "checklist": [
            "Folder directory breakdown",
            "Section-to-snippet dependency graph",
            "Asset compilation pipeline specifications"
          ]
        },
        {
          "id": "del-03",
          "title": "Custom Liquid Section Implementation",
          "description": "Write the complete semantic HTML5 and Liquid markup for the custom section feature.",
          "checklist": [
            "Semantic container elements",
            "Liquid object bindings with escape filters",
            "Theme Editor shopify_attributes on blocks"
          ]
        },
        {
          "id": "del-04",
          "title": "Comprehensive Section Schema Definition",
          "description": "Write the {% schema %} JSON declaring section settings (colors, ranges, text, image pickers) and block types.",
          "checklist": [
            "At least 4 distinct setting types",
            "Typed block definitions with max limits",
            "Clear labels and info tooltips"
          ]
        },
        {
          "id": "del-05",
          "title": "Dynamic Block Configurations & Presets",
          "description": "Configure default presets so merchants can discover and insert the feature instantly from the Theme Editor.",
          "checklist": [
            "Pre-populated default settings",
            "At least 3 initial sample blocks in preset",
            "Valid JSON syntax passing Theme Check"
          ]
        },
        {
          "id": "del-06",
          "title": "Responsive CSS Grid & Flexbox Styling",
          "description": "Engineer mobile-first, responsive stylesheets without layout overflow across all breakpoints.",
          "checklist": [
            "Fluid mobile-to-desktop grid",
            "CSS custom properties tied to theme settings",
            "Zero horizontal scrolling on mobile"
          ]
        },
        {
          "id": "del-07",
          "title": "JavaScript Interactivity & State Controller",
          "description": "Develop vanilla JavaScript / Web Component module managing user interactions and selections.",
          "checklist": [
            "Zero external library dependencies",
            "Clean CustomEvent dispatching",
            "Theme Editor live reload event support"
          ]
        },
        {
          "id": "del-08",
          "title": "AJAX Cart API Integration",
          "description": "Connect user actions directly to /cart/add.js with loading states and error handling.",
          "checklist": [
            "Asynchronous fetch operations with try/catch",
            "Dynamic subtotal and line item calculations",
            "Inventory limit error notifications"
          ]
        },
        {
          "id": "del-09",
          "title": "Product & Metafield Data Integration",
          "description": "Integrate dynamic product objects and custom metafields into the rendered markup.",
          "checklist": [
            "Safe .value metafield unwrapping",
            "Fallback rendering when metafields are empty",
            "Dynamic pricing and variant badges"
          ]
        },
        {
          "id": "del-10",
          "title": "WCAG 2.1 AA Accessibility Checklist",
          "description": "Audit and verify full keyboard navigation, ARIA landmarks, and contrast ratios.",
          "checklist": [
            "Visible :focus-visible outlines",
            "Screen reader announcements on cart update",
            "Passing automated axe-core accessibility audit"
          ]
        },
        {
          "id": "del-11",
          "title": "Performance & Core Web Vitals Checklist",
          "description": "Optimize asset sizes, lazy loading, and image dimensions to maintain high Lighthouse scores.",
          "checklist": [
            "Responsive image_tag with widths/sizes",
            "Zero render-blocking scripts in head",
            "Lighthouse Performance score >= 90"
          ]
        },
        {
          "id": "del-12",
          "title": "Git Version Control Repository & Commits",
          "description": "Maintain structured Git history with descriptive commit messages following Conventional Commits.",
          "checklist": [
            "Clean branch structure (feature/bundle-builder)",
            "Descriptive atomic commit history",
            "Proper .shopifyignore configuration"
          ]
        },
        {
          "id": "del-13",
          "title": "Technical README Documentation",
          "description": "Write comprehensive developer documentation covering installation, configuration, and customization.",
          "checklist": [
            "Installation instructions with Shopify CLI",
            "Schema settings documentation table",
            "Troubleshooting and known constraints"
          ]
        },
        {
          "id": "del-14",
          "title": "QA Testing & Staging Deployment Checklist",
          "description": "Deploy to an unpublished staging theme on a development store and verify cross-browser compatibility.",
          "checklist": [
            "Cross-browser testing (Chrome, Safari, Firefox, Edge)",
            "Shopify Theme Check clean run with zero errors",
            "Live staging preview verification link"
          ]
        }
      ]
    }
  },
  {
    "id": "shopify-dev-beg-14",
    "orderIndex": 14,
    "title": "Beginner Assessment: Shopify Development Fundamentals",
    "description": "Test your mastery of Shopify platform architecture, CLI workflows, Online Store 2.0 themes, Liquid objects, AJAX Cart API, Metafields, and Webhook fundamentals.",
    "duration": "35 mins",
    "xpReward": 300,
    "isFinalAssessment": true,
    "type": "assessment",
    "passingScore": 15,
    "totalQuestions": 20,
    "questions": [
      {
        "id": 1,
        "topic": "Shopify Platform Architecture",
        "question": "In modern Shopify development, what is the fundamental difference between theme development and custom app development?",
        "options": [
          "Theme development focuses on frontend storefront presentation and JSON template architecture rendered via Liquid, while custom app development executes on independent backend servers interacting with Shopify via GraphQL Admin and Storefront APIs.",
          "Theme development requires Node.js servers, whereas app development is written strictly using HTML and CSS in the Shopify Admin.",
          "Themes store all customer databases directly in the browser localStorage, while apps are only used to upload images.",
          "Themes execute server-side database migrations, while apps can only edit CSS stylesheets."
        ],
        "correctAnswer": 0,
        "explanation": "Theme development engineers the merchant storefront using Online Store 2.0 (Liquid, JSON templates, HTML, CSS, JavaScript). In contrast, Shopify apps are independent web applications that authenticate via OAuth and interface with Shopify APIs to extend administrative and business logic."
      },
      {
        "id": 2,
        "topic": "Shopify CLI & Development Stores",
        "question": "When developing a custom Shopify theme locally using the Shopify CLI, which command starts a local development server with hot reload connected to your development store?",
        "options": [
          "shopify theme publish --force",
          "shopify theme dev --store <your-store-name>.myshopify.com",
          "shopify app deploy --all",
          "shopify admin serve --local-only"
        ],
        "correctAnswer": 1,
        "explanation": "The command \"shopify theme dev --store <store-domain>\" spins up a local proxy server that serves local theme files directly over an SSL-secured localhost URL while streaming asset updates and synchronizing Theme Editor settings."
      },
      {
        "id": 3,
        "topic": "Theme Directory Structure",
        "question": "Under Online Store 2.0 architecture, where must JSON-based page templates (such as product.json and collection.json) be located within a theme?",
        "options": [
          "Inside the /assets directory as minified JavaScript files.",
          "Inside the /snippets directory alongside reusable icons.",
          "Inside the /templates directory as structured JSON files declaring section hierarchies.",
          "Inside the /config/settings_data.json file only."
        ],
        "correctAnswer": 2,
        "explanation": "JSON templates are placed directly in the /templates folder (e.g., templates/product.json, templates/index.json). They define the dynamic sections and blocks rendered on specific page types and allow merchants to reorder sections in the theme editor."
      },
      {
        "id": 4,
        "topic": "Liquid Layout File Structure",
        "question": "Which mandatory Liquid tag in layout/theme.liquid is responsible for injecting essential Shopify platform scripts, analytics, and header hooks into the storefront?",
        "options": [
          "{{ content_for_layout }}",
          "{{ content_for_footer }}",
          "{{ theme_analytics_script }}",
          "{{ content_for_header }}"
        ],
        "correctAnswer": 3,
        "explanation": "The {{ content_for_header }} tag is required within the <head> element of layout/theme.liquid. Shopify dynamically injects critical core platform scripts, security meta tags, app embed scripts, and analytics through this tag."
      },
      {
        "id": 5,
        "topic": "Section Schema & Settings",
        "question": "In a custom Liquid section file (e.g., sections/featured-banner.liquid), what is the role of the {% schema %} tag?",
        "options": [
          "It defines the JSON configuration for the Shopify Theme Editor, specifying section name, configurable settings, block types, and default presets.",
          "It compiles TypeScript code into browser-compatible JavaScript.",
          "It creates database indexes in the Shopify Admin database.",
          "It forces the browser to bypass CDN cache on every page load."
        ],
        "correctAnswer": 0,
        "explanation": "The {% schema %} tag contains valid JSON that instructs the Shopify Theme Editor which inputs (text, image_picker, range, color, etc.), blocks, and default presets are available for merchants to configure visually."
      },
      {
        "id": 6,
        "topic": "AJAX Cart API",
        "question": "When building an asynchronous \"Add to Cart\" drawer in theme JavaScript, which official Shopify Storefront endpoint is queried via HTTP POST with JSON data?",
        "options": [
          "/admin/api/2024-01/cart.json",
          "/cart/add.js",
          "/storefront/checkout/create.php",
          "/api/v1/line_items/append"
        ],
        "correctAnswer": 1,
        "explanation": "The Shopify AJAX Cart API provides the /cart/add.js endpoint, accepting an item ID and quantity as JSON or Form data, returning the updated line item and cart payload without triggering a full page reload."
      },
      {
        "id": 7,
        "topic": "Metafields vs Metaobjects",
        "question": "What is the primary conceptual distinction between a Shopify Metafield and a Shopify Metaobject?",
        "options": [
          "Metafields can only store boolean flags, while metaobjects can only store customer emails.",
          "Metafields are only accessible in private apps, while metaobjects are only accessible in Liquid snippets.",
          "Metafields attach custom data fields to specific existing Shopify resources (e.g., a product or customer), whereas metaobjects are custom multi-field data entities that exist independently as structured content models.",
          "There is no difference; metafield and metaobject are completely interchangeable names for Liquid variables."
        ],
        "correctAnswer": 2,
        "explanation": "A metafield attaches custom attributes (e.g., fabric_care on a Product), while a metaobject creates a distinct data model with multiple fields (e.g., an \"Author\" or \"Store Location\" entity) that can be referenced across multiple products and pages."
      },
      {
        "id": 8,
        "topic": "Theme Performance & Images",
        "question": "Which modern Shopify Liquid filter pattern is the recommended standard for outputting responsive, accessible, and performant images with automatic srcset generation?",
        "options": [
          "<img src=\"{{ product.featured_image | img_url: 'master' }}\">",
          "<img src=\"{{ product.featured_image.src }}\"/>",
          "{{ product.featured_image | raw_html_image }}",
          "{{ product.featured_image | image_url: width: 1200 | image_tag: widths: '400, 800, 1200', loading: 'lazy', class: 'w-full' }}"
        ],
        "correctAnswer": 3,
        "explanation": "Using \"image_url\" combined with \"image_tag\" automatically outputs optimal HTML5 <img> tags with responsive srcset, width/height dimensions (preventing Cumulative Layout Shift - CLS), and native lazy loading."
      },
      {
        "id": 9,
        "topic": "Admin API vs Storefront API",
        "question": "Why must private Shopify Admin API access tokens NEVER be included in theme Liquid or client-side JavaScript code?",
        "options": [
          "Because Admin API tokens grant privileged read/write access to confidential store data (orders, customer PII, inventory), and any client-side exposure allows malicious actors to compromise the entire store.",
          "Because the browser will automatically crash if a GraphQL token has more than 16 characters.",
          "Because Storefront API tokens are strictly required to be 100% public, whereas Admin tokens only work on Linux.",
          "Because Shopify Liquid syntax automatically deletes all API tokens on compilation."
        ],
        "correctAnswer": 0,
        "explanation": "Admin API tokens carry high-privilege permissions and must remain strictly server-side inside secure environment variables. Public storefront interactions should only ever use the Storefront API with unauthenticated public tokens."
      },
      {
        "id": 10,
        "topic": "Webhooks & HMAC Verification",
        "question": "How should a developer-built backend endpoint verify that an incoming webhook request genuinely originated from Shopify?",
        "options": [
          "By checking if the HTTP request User-Agent header says \"Google Chrome\".",
          "By computing a SHA-256 HMAC hash of the raw request payload using the app shared secret and comparing it to the \"x-shopify-hmac-sha256\" header.",
          "By verifying that the URL ends with \".myshopify.com\".",
          "By asking the user to submit an SMS OTP code on each webhook trigger."
        ],
        "correctAnswer": 1,
        "explanation": "Shopify signs every webhook request by computing an HMAC-SHA256 hash of the raw HTTP request body with your app client secret and passes it in the x-shopify-hmac-sha256 header. Verifying this prevents request forgery."
      },
      {
        "id": 11,
        "topic": "Git & Deployment Workflows",
        "question": "In an enterprise Shopify development team, what is the best practice for deploying theme changes to the live production storefront?",
        "options": [
          "Directly editing code in the Shopify Theme Code Editor on the live published theme during peak business hours.",
          "Downloading zip files from email threads and uploading them manually to production.",
          "Developing on feature branches in Git, pushing to staging preview themes via Shopify CLI/GitHub integration, testing thoroughly, and publishing via an automated CI/CD pipeline.",
          "Deleting the live theme and uploading a fresh theme from scratch every time a bug is fixed."
        ],
        "correctAnswer": 2,
        "explanation": "Modern team workflows leverage Git version control, branching strategies, automated linting via Theme Check, staging development theme previews, and automated deployment via GitHub theme integration or CI/CD pipelines."
      },
      {
        "id": 12,
        "topic": "Liquid Rendering Order",
        "question": "When Shopify renders an Online Store 2.0 page, what is the correct sequence of template and layout assembly?",
        "options": [
          "HTML DOM is created in browser -> JavaScript fetches Liquid -> Liquid compiles on mobile -> Theme renders.",
          "Sections render -> Browser re-downloads all Liquid files -> CSS renders.",
          "All snippets are executed first -> Admin API creates a database row -> Layout is skipped -> JSON template renders.",
          "Theme settings are loaded -> layout/theme.liquid is evaluated -> {{ content_for_layout }} is replaced by the requested JSON template -> Sections and Blocks are rendered with Liquid -> Final HTML is sent to the client."
        ],
        "correctAnswer": 3,
        "explanation": "Shopify server-side rendering parses the layout file (theme.liquid), resolves {{ content_for_layout }} with the matching JSON template, parses all referenced sections and blocks with their respective data, and streams the compiled HTML to the visitor."
      },
      {
        "id": 13,
        "topic": "Dynamic Theme Blocks",
        "question": "What is the primary benefit of defining \"@app\" block support in a theme section schema?",
        "options": [
          "It lets merchants install third-party app extensions (App Blocks) seamlessly into theme sections without modifying theme code files directly.",
          "It installs the Shopify mobile app on the customer device.",
          "It converts the theme into an iOS native application automatically.",
          "It removes all JavaScript from the theme for faster rendering."
        ],
        "correctAnswer": 0,
        "explanation": "Adding `{\"type\": \"@app\"}` to the blocks array in a section schema allows App Embeds and App Blocks to be dynamically placed and reordered by merchants in the theme editor without polluting theme code files."
      },
      {
        "id": 14,
        "topic": "Theme Settings Schema Types",
        "question": "Which setting type in section schema provides a merchant with a visual asset selector from their Shopify Files library?",
        "options": [
          "type: \"text\"",
          "type: \"image_picker\"",
          "type: \"color_background\"",
          "type: \"range\""
        ],
        "correctAnswer": 1,
        "explanation": "The `image_picker` setting type opens Shopify’s native media modal in the Theme Editor, allowing merchants to select or upload images that return an image object in Liquid."
      },
      {
        "id": 15,
        "topic": "Accessibility & ARIA",
        "question": "When developing an interactive slide-out cart drawer, what is essential for keyboard accessibility (WCAG 2.1)?",
        "options": [
          "Using only <div> tags without tabindex or role attributes.",
          "Disabling all keyboard interactions when the cart is opened.",
          "Trapping keyboard focus within the open drawer modal, providing an accessible close button with Escape key listener, and restoring focus to the trigger element upon closing.",
          "Hiding the cart total amount from screen readers."
        ],
        "correctAnswer": 2,
        "explanation": "WCAG compliance for modals and slide-out drawers requires focus trapping, handling the Escape key to dismiss, maintaining visible focus states, and restoring focus to the initial trigger button when closed."
      },
      {
        "id": 16,
        "topic": "Storefront API GraphQL",
        "question": "Which GraphQL Storefront API mutation is used to initiate a checkout and cart session in a headless or custom AJAX storefront experience?",
        "options": [
          "orderCreate()",
          "customerPaymentProcess()",
          "checkoutMigrate()",
          "cartCreate(input: { lines: [...] })"
        ],
        "correctAnswer": 3,
        "explanation": "The `cartCreate` mutation in the Storefront API creates a new cart object with line items, attributes, and buyer identity, returning a `checkoutUrl` where the buyer completes payment on Shopify’s secure checkout."
      },
      {
        "id": 17,
        "topic": "Webhook Idempotency",
        "question": "Why is idempotency handling critical when receiving Shopify webhooks such as \"orders/create\"?",
        "options": [
          "Because network retries and distributed delivery may result in the same webhook payload being delivered multiple times, risking duplicate order fulfillment or double accounting if not deduplicated.",
          "Because Shopify webhooks are guaranteed to never fire more than once under any circumstance.",
          "Because idempotency speeds up internet connections for storefront shoppers.",
          "Because Shopify will ban partner accounts that process webhooks in less than 5 seconds."
        ],
        "correctAnswer": 0,
        "explanation": "Shopify’s webhook delivery system guarantees at-least-once delivery. If a response is delayed or fails due to network spikes, Shopify retries. Backend handlers must check the `X-Shopify-Webhook-Id` to prevent duplicate processing."
      },
      {
        "id": 18,
        "topic": "Theme Performance & JavaScript",
        "question": "How should custom JavaScript modules in a Shopify theme be loaded to prevent blocking the critical rendering path of the page?",
        "options": [
          "Using inline synchronous script tags in the <head> of theme.liquid before any CSS.",
          "Using `<script src=\"{{ 'custom.js' | asset_url }}\" defer></script>` or ES module dynamic imports.",
          "Writing all JavaScript code directly into the URL bar of the browser.",
          "Loading all scripts from unverified third-party CDNs without caching."
        ],
        "correctAnswer": 1,
        "explanation": "Loading scripts with `defer` ensures HTML parsing is not blocked while script files download in parallel. Modern themes also use native ES modules and dynamic imports (`import()`) for on-demand component hydration."
      },
      {
        "id": 19,
        "topic": "Safe Liquid Filter Chaining",
        "question": "When displaying customer-generated or unverified text inside an HTML attribute in Liquid, which filter must be applied to prevent Cross-Site Scripting (XSS)?",
        "options": [
          "| raw",
          "| upcase",
          "| escape",
          "| json"
        ],
        "correctAnswer": 2,
        "explanation": "The `escape` filter (or `escape_once`) converts unsafe HTML characters (<, >, &, \", ') into their safe HTML entity representations, preventing malicious script injection inside DOM attributes and text nodes."
      },
      {
        "id": 20,
        "topic": "Shopify Partner Ecosystem",
        "question": "What is the purpose of a Shopify Partner Development Store for developers?",
        "options": [
          "It is a paid subscription store that charges $500 per day during local testing.",
          "It is a store that can only sell physical books in Canada.",
          "It is an automated bot that writes code for you without human intervention.",
          "It is a free sandbox store that allows developers to build, test themes, develop custom apps, test mock payments with Bogus Gateway, and transfer ownership to clients."
        ],
        "correctAnswer": 3,
        "explanation": "Development stores created inside the Shopify Partner Dashboard provide unlimited free testing environments with full features, dummy data seeding, bogus payment gateway testing, and seamless client handover capabilities."
      }
    ]
  }
];
