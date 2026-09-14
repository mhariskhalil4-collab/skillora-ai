const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/features/roadmap/data/shopify-developer/shopifyDeveloperIntermediate.data.ts');
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 30 High-Quality Intermediate MCQs with balanced distribution (8 A, 7 B, 8 C, 7 D = 30)
const INTERMEDIATE_ASSESSMENT = [
  {
    id: 1,
    topic: 'Online Store 2.0 Dynamic Sections',
    question: 'How do Online Store 2.0 dynamic sections on product pages handle multiple merchant customization presets across different product templates?',
    options: [
      'By creating alternate JSON templates (e.g. templates/product.preorder.json) that specify customized section order and block settings assigned to specific products in the Shopify Admin.',
      'By writing hardcoded if-statements checking product IDs inside a single global layout/theme.liquid file.',
      'By uploading a brand new theme for every product in the catalog.',
      'By using client-side localStorage to switch Liquid variables at runtime.'
    ],
    correctAnswer: 0, // A
    explanation: 'Online Store 2.0 enables alternate JSON templates (e.g., templates/product.preorder.json). Merchants assign these templates to specific products in the Shopify Admin without duplicating theme code or writing conditional Liquid overrides.'
  },
  {
    id: 2,
    topic: 'App Blocks & @app Support',
    question: 'When architecting a custom Shopify theme for compatibility with third-party apps, why is adding `{"type": "@app"}` to the `blocks` array of section schemas essential?',
    options: [
      'It grants full root shell access on Shopify core servers.',
      'It allows App Blocks built by theme app extensions to be injected and reordered by merchants directly within that section via the Theme Editor.',
      'It disables all Liquid caching on the entire storefront.',
      'It converts theme sections into React Native components.'
    ],
    correctAnswer: 1, // B
    explanation: 'Supporting `{"type": "@app"}` in a section schema permits merchants to place App Blocks (such as product reviews, star ratings, or loyalty widgets) directly inside the section without requiring manual Liquid edits.'
  },
  {
    id: 3,
    topic: 'Theme JSON Settings & Schemas',
    question: 'In config/settings_data.json, what is the role of the "current" object versus the "presets" object?',
    options: [
      'The "current" object stores active merchant-configured theme settings and block states, while "presets" contains the theme default visual styles (e.g. Default, Bold, Minimal).',
      'The "current" object contains customer passwords, while "presets" contains credit card tokens.',
      'The "current" object is written in Python, while "presets" is written in SQL.',
      'There is no difference; both objects are ignored by Shopify.'
    ],
    correctAnswer: 0, // A
    explanation: 'In `settings_data.json`, `current` holds the active customizations applied by the merchant in the Theme Editor, whereas `presets` defines pre-packaged theme styles provided by the theme developer.'
  },
  {
    id: 4,
    topic: 'Advanced Metafield Validation',
    question: 'When defining a Shopify Metafield definition in the Admin API, what purpose does the `validations` array serve?',
    options: [
      'It executes unit tests on the merchant browser.',
      'It automatically translates text into 50 languages.',
      'It enforces strict business constraints (such as min/max character lengths, integer ranges, regex patterns, or allowed preset choices) on merchant input.',
      'It encrypts the entire product catalog with SHA-1.'
    ],
    correctAnswer: 2, // C
    explanation: 'Metafield definition validations ensure data integrity by enforcing rules such as numeric minimums/maximums, string length bounds, allowed choices, or regular expression pattern matches.'
  },
  {
    id: 5,
    topic: 'GraphQL Storefront API Pagination',
    question: 'How does cursor-based pagination operate when retrieving large lists of products via the GraphQL Storefront or Admin API?',
    options: [
      'You pass numeric page numbers (page: 1, page: 2) with fixed SQL offsets.',
      'You specify a page size (`first: N`) along with a cursor (`after: $cursor`), retrieving `pageInfo.endCursor` and `pageInfo.hasNextPage` to request subsequent slices.',
      'You fetch all 100,000 products in a single unpaginated array.',
      'Shopify does not support pagination in GraphQL.'
    ],
    correctAnswer: 1, // B
    explanation: 'Shopify GraphQL APIs use Relay-style cursor pagination. You request `first: N, after: $cursor` and inspect `pageInfo { hasNextPage, endCursor }` to paginate efficiently without offset performance degradation.'
  },
  {
    id: 6,
    topic: 'Admin API GraphQL Queries',
    question: 'Which GraphQL Admin API query retrieves a specific product by its unique Global ID along with inventory quantities across all store locations?',
    options: [
      'SELECT * FROM products WHERE id = 123',
      'GET /admin/api/products/123/inventory',
      'query GetProductInventory($id: ID!) { product(id: $id) { id title variants(first: 5) { nodes { id inventoryItem { inventoryLevels(first: 5) { nodes { location { name } quantities(names: ["available"]) { quantity } } } } } } } }',
      'fetchProductInventory(productId: "123")'
    ],
    correctAnswer: 2, // C
    explanation: 'The GraphQL Admin API navigates the object graph from `product` to `variants`, `inventoryItem`, and `inventoryLevels`, retrieving granular location-specific available quantities in a single query.'
  },
  {
    id: 7,
    topic: 'Admin API GraphQL Cost & Throttling',
    question: 'How does the Shopify GraphQL Admin API enforce rate limits and calculate API consumption costs?',
    options: [
      'Through a leaky bucket algorithm with an allocated cost pool (e.g. 1000 points restoring at 50 points/second), where each field has a defined cost returned in `extensions.cost`.',
      'By limiting each IP address to exactly 10 requests per calendar month.',
      'By charging $0.05 USD directly to the developer credit card per query.',
      'By pausing the server for 60 seconds after every 3 queries.'
    ],
    correctAnswer: 0, // A
    explanation: 'Shopify GraphQL APIs use a calculated cost model. Each requested field contributes points. Responses include `extensions.cost { requestedQueryCost, actualQueryCost, throttleStatus }`, and the bucket refills continuously over time.'
  },
  {
    id: 8,
    topic: 'Shopify App Architecture',
    question: 'In modern Shopify app development using Remix or Node, what is the purpose of the App Bridge library?',
    options: [
      'It is an embedded UI bridge that allows the web app running inside an iframe in the Shopify Admin to communicate securely with the parent Shopify Admin shell for titles, modals, and toasts.',
      'It compiles Liquid code into native iOS swift binaries.',
      'It connects Shopify directly to local MySQL databases without internet.',
      'It replaces HTML with PDF documents.'
    ],
    correctAnswer: 0, // A
    explanation: 'Shopify App Bridge provides seamless, secure communication between embedded iframe applications and the surrounding Shopify Admin, enabling unified navigation, modal dialogs, contextual save bars, and toasts.'
  },
  {
    id: 9,
    topic: 'Session Tokens (JWT) vs Legacy Cookies',
    question: 'Why does modern Shopify embedded app architecture require Session Tokens (JWT) instead of traditional third-party session cookies?',
    options: [
      'Because modern browsers (Safari, Chrome, Firefox) block third-party cookies by default inside iframes (ITP), breaking cookie-based auth in embedded apps.',
      'Because cookies can only hold 4 bytes of data.',
      'Because JWT tokens delete database records on every request.',
      'Because Shopify banned all JavaScript from apps in 2022.'
    ],
    correctAnswer: 0, // A
    explanation: 'Intelligent Tracking Prevention (ITP) and third-party cookie blocking prevent embedded iframes from maintaining traditional session cookies. App Bridge Session Tokens (short-lived signed JWTs) provide reliable, privacy-safe authentication.'
  },
  {
    id: 10,
    topic: 'OAuth 2.0 Authorization Flow',
    question: 'During the Shopify OAuth 2.0 installation flow, what is the critical step performed immediately after the merchant approves requested access scopes?',
    options: [
      'Shopify redirects to the app callback URL with a temporary authorization `code` and `hmac`, which the app backend validates and exchanges via POST to `/admin/oauth/access_token` for a permanent offline access token.',
      'The app displays the merchant password in the URL bar.',
      'Shopify emails the source code to the merchant.',
      'The app restarts the merchant store server.'
    ],
    correctAnswer: 0, // A
    explanation: 'In OAuth 2.0, Shopify returns a temporary authorization code. The app backend verifies the HMAC parameter to prevent forgery and exchanges the code with Shopify’s token endpoint for an encrypted access token.'
  },
  {
    id: 11,
    topic: 'OAuth Access Scopes & Least Privilege',
    question: 'Why should a custom Shopify app request only the minimum required access scopes (e.g. `read_products` instead of `write_orders, write_customers`)?',
    options: [
      'Following the principle of least privilege minimizes security exposure, builds merchant trust, and reduces approval friction during Shopify App Store reviews.',
      'Because requesting more than 1 scope crashes the Shopify CLI.',
      'Because each scope costs $500 per month on Shopify.',
      'Because apps with write permissions cannot use GraphQL.'
    ],
    correctAnswer: 0, // A
    explanation: 'The principle of least privilege ensures your app only accesses data essential for its operation, minimizing the blast radius in case of credentials leakage and meeting Shopify security review standards.'
  },
  {
    id: 12,
    topic: 'Webhooks & Message Queues',
    question: 'When receiving high-volume webhooks (e.g. during Black Friday flash sales), what is the recommended architectural pattern for processing payloads reliably?',
    options: [
      'Acknowledge the webhook with HTTP 200 OK immediately after HMAC validation, push the job to a Redis/BullMQ background queue, and process business logic asynchronously in worker threads.',
      'Perform all heavy image processing and database joins synchronously in the HTTP request before responding.',
      'Drop 90% of incoming webhooks to avoid server load.',
      'Block the client browser until the database finishes indexing.'
    ],
    correctAnswer: 0, // A
    explanation: 'To satisfy Shopify’s 5-second timeout and handle traffic spikes, webhook handlers must validate HMAC, push payloads to durable message queues (Redis/BullMQ/SQS), return 200 OK immediately, and process jobs with isolated worker pools.'
  },
  {
    id: 13,
    topic: 'Shopify Cart API Line Item Properties',
    question: 'When a customer customizes a product (e.g. enters custom engraving text) before adding to cart, where is this data stored in the Shopify Cart object?',
    options: [
      'Inside the line item `properties` hash (e.g. `properties: { "Engraving": "Skillora AI" }`).',
      'In a temporary global CSS variable.',
      'In the store owner’s personal email inbox.',
      'Inside the theme settings_schema.json file.'
    ],
    correctAnswer: 0, // A
    explanation: 'Custom customer inputs (engraving, gift notes, custom file uploads) are passed as line item `properties` in the `/cart/add.js` payload and persist through checkout and order fulfillment.'
  },
  {
    id: 14,
    topic: 'Theme App Extensions vs Direct Theme Edits',
    question: 'What is the architectural advantage of delivering app functionality via Theme App Extensions (App Blocks & App Embeds) instead of injecting Liquid code directly via the Asset API?',
    options: [
      'Theme app extensions keep app code isolated, enable visual merchant control in the Theme Editor, and ensure 100% clean uninstalls without leaving ghost Liquid code behind.',
      'Theme app extensions run only on Internet Explorer.',
      'Theme app extensions cannot use JavaScript.',
      'Theme app extensions delete the theme when uninstalled.'
    ],
    correctAnswer: 0, // A
    explanation: 'Theme App Extensions (introduced in OS 2.0) eliminate "theme pollution". When a merchant uninstalls an app, all associated App Blocks and Embeds are cleanly removed without leaving orphaned code in theme files.'
  },
  {
    id: 15,
    topic: 'GraphQL Admin API Mutations',
    question: 'When executing the `productCreate` mutation in the GraphQL Admin API, how does the API notify the client of validation failures (e.g. missing required title)?',
    options: [
      'By crashing the HTTP server with 500 Internal Server Error.',
      'Through the `userErrors` array inside the mutation response containing the specific `field` and `message`.',
      'By sending an SMS message to the store owner.',
      'By returning an empty string.'
    ],
    correctAnswer: 1, // B
    explanation: 'Shopify GraphQL mutations return a 200 OK HTTP response with a `userErrors` array. Developers must inspect `userErrors` to identify validation errors and present clear feedback to users.'
  },
  {
    id: 16,
    topic: 'Section Rendering API',
    question: 'How does the Shopify Section Rendering API optimize client-side cart drawer updates when an item is added via AJAX?',
    options: [
      'It allows client JavaScript to request pre-rendered HTML for specific section IDs (e.g. `?sections=cart-drawer,cart-icon-bubble`) directly from the server, eliminating client-side template duplication.',
      'It renders PDF invoices inside the browser console.',
      'It replaces Shopify themes with WordPress plugins.',
      'It forces the browser to refresh all tabs.'
    ],
    correctAnswer: 0, // A
    explanation: 'The Section Rendering API lets client-side JavaScript request HTML partials for specific sections on the fly, ensuring server-rendered Liquid consistency without writing duplicate client template logic.'
  },
  {
    id: 17,
    topic: 'Shopify CLI App Development',
    question: 'When starting local development for a Shopify App using Shopify CLI (`shopify app dev`), what does the CLI automatically provision?',
    options: [
      'A secure Cloudflare tunnel/proxy for webhook forwarding, environment variables, automatic App Bridge registration, and a development store install link.',
      'A physical dedicated server shipped to the developer address.',
      'A new credit card with $10,000 credit.',
      'A live production domain on the public internet.'
    ],
    correctAnswer: 0, // A
    explanation: '`shopify app dev` establishes a local SSL tunnel, syncs configuration files (`shopify.app.toml`), forwards webhooks to localhost, sets up OAuth credentials, and generates a one-click installation URL on your test store.'
  },
  {
    id: 18,
    topic: 'Metaobject Storefront Routing',
    question: 'How can Shopify Metaobjects be configured to generate individual public landing pages on the Online Store (e.g. /pages/authors/alex-dev)?',
    options: [
      'By enabling Web Pages capabilities on the Metaobject definition in Shopify Admin and creating a matching `templates/metaobject/author.json` template in the theme.',
      'By manually writing static HTML files for every author in the assets directory.',
      'Metaobjects can never have public web pages.',
      'By converting metaobjects into blog posts with a cron job.'
    ],
    correctAnswer: 0, // A
    explanation: 'Shopify allows Metaobjects to act as standalone web pages. Enabling the Web Pages feature and creating a `templates/metaobject/{type}.json` template provides dynamic routing and SEO capabilities for custom entities.'
  },
  {
    id: 19,
    topic: 'Theme Performance & Font Loading',
    question: 'Which font loading strategy is recommended in Shopify themes to prevent Flash of Invisible Text (FOIT) and improve First Contentful Paint (FCP)?',
    options: [
      'Using `font-display: swap;` on custom font-face declarations and preloading critical web fonts in layout/theme.liquid.',
      'Loading 50 Google Fonts synchronously in the document head.',
      'Disabling all typography and using only raster images for text.',
      'Embedding 10MB TTF font files directly into HTML attributes.'
    ],
    correctAnswer: 0, // A
    explanation: 'Applying `font-display: swap;` renders fallback system fonts immediately while custom fonts download, preventing invisible text and accelerating perceived page load speeds.'
  },
  {
    id: 20,
    topic: 'App Data Persistence & Databases',
    question: 'When developing a multi-tenant Shopify App that stores custom configuration for thousands of stores, how should store records be partitioned in the database?',
    options: [
      'By using a composite primary key or foreign key index on the unique Shopify shop domain (`shop_domain`, e.g. `store.myshopify.com`) and verifying shop identity on every authenticated request.',
      'By saving all store data in a single plain text file on the developer desktop.',
      'By creating a completely new database server instance for every single merchant.',
      'By storing merchant settings in the client browser cookie.'
    ],
    correctAnswer: 0, // A
    explanation: 'Multi-tenant Shopify applications index records by `shop_domain` or `shop_id` with strict foreign key constraints and enforce tenant isolation in all database queries to prevent cross-tenant data leakage.'
  },
  {
    id: 21,
    topic: 'GraphQL Query Aliases & Directives',
    question: 'In GraphQL Admin queries, what is the purpose of using field aliases (e.g. `primaryImage: image(id: $id1)`)?',
    options: [
      'To rename returned fields in the response and fetch the same field multiple times with different arguments in a single query.',
      'To hide fields from the network inspector.',
      'To convert GraphQL into REST automatically.',
      'To encrypt query responses on the server.'
    ],
    correctAnswer: 0, // A
    explanation: 'GraphQL field aliases let you query the same field multiple times with different arguments (e.g. querying two different variant images) within the same selection set while renaming the output keys.'
  },
  {
    id: 22,
    topic: 'GraphQL Bulk Operations API',
    question: 'For exporting or synchronizing millions of products or orders from Shopify to an external database, which Admin API mechanism is recommended over standard pagination?',
    options: [
      'The GraphQL Bulk Operations API (`bulkOperationRunQuery`), which compiles queries into a single asynchronous JSON Lines (JSONL) file export on Shopify cloud infrastructure.',
      'Writing an infinite while-loop that sends 1,000 REST requests per second.',
      'Asking the merchant to manually copy and paste products into Excel.',
      'Downloading raw database SQL dumps from Shopify support.'
    ],
    correctAnswer: 0, // A
    explanation: 'The GraphQL Bulk Operations API handles millions of records without hitting API rate limits. Shopify executes the query asynchronously and produces a downloadable JSONL file stream.'
  },
  {
    id: 23,
    topic: 'App Embed Blocks & Global Injection',
    question: 'Where are App Embed blocks configured and activated by merchants in Online Store 2.0 themes?',
    options: [
      'In the "App embeds" tab of the visual Theme Editor, allowing merchants to toggle global app scripts on or off across all pages without editing theme code.',
      'In the store DNS configuration panel.',
      'Inside the payment gateway settings.',
      'In the customer account login page.'
    ],
    correctAnswer: 0, // A
    explanation: 'App Embed blocks live in the "App embeds" sidebar tab in the Theme Editor. Merchants can activate or deactivate global scripts (such as chat widgets or analytics tags) with a simple toggle switch.'
  },
  {
    id: 24,
    topic: 'Liquid Iteration Limits & Performance',
    question: 'What is the hard architectural limit on the number of iterations allowed within a single `for` loop in Shopify Liquid templates?',
    options: [
      '50 items per loop (unless wrapped with `paginate` which allows up to 50 items per page).',
      '1,000,000 items per loop.',
      'There is no limit; Liquid loops run indefinitely.',
      'Exactly 1 item per loop.'
    ],
    correctAnswer: 0, // A
    explanation: 'Shopify Liquid enforces a strict limit of 50 iterations per loop on collections and product arrays to protect server performance. Accessing more items requires pagination.'
  },
  {
    id: 25,
    topic: 'Theme Localization & Translations',
    question: 'How are multi-language storefront strings structured and accessed in Online Store 2.0 themes?',
    options: [
      'Strings are stored as key-value JSON trees in `locales/en.default.json`, `locales/fr.json`, etc., and rendered in Liquid using the `{{ \'namespace.key\' | t }}` filter.',
      'Strings are hardcoded in Liquid with Google Translate iframes.',
      'Translations are saved in the browser localStorage.',
      'Translations require building 5 separate themes for each language.'
    ],
    correctAnswer: 0, // A
    explanation: 'Locale JSON files in `locales/` define translation strings referenced via `{{ \'general.newsletter.submit\' | t }}`. Shopify automatically serves the matching locale based on buyer language settings.'
  },
  {
    id: 26,
    topic: 'Shopify App Bridge Toast & Modals',
    question: 'When using Shopify App Bridge in a React/Remix embedded app, what is the correct method for displaying native administrative toast notifications to merchants?',
    options: [
      'Using the `shopify.toast.show("Action succeeded!")` API from App Bridge.',
      'Creating a custom HTML `<div class="toast">` that breaks out of the iframe using CSS hacks.',
      'Triggering a native browser `alert()` modal dialog.',
      'Sending an email to the merchant on every button click.'
    ],
    correctAnswer: 0, // A
    explanation: 'Shopify App Bridge provides native UI primitives like `shopify.toast.show()`, `shopify.modal.show()`, and `shopify.saveBar.show()` that render directly in the parent Shopify Admin interface.'
  },
  {
    id: 27,
    topic: 'Secure Webhook De-registration',
    question: 'What happens if your app’s webhook receiver endpoint returns HTTP 410 Gone or consistently fails with 5xx errors for 48 hours?',
    options: [
      'Shopify automatically deletes the webhook subscription to protect platform resources.',
      'Shopify sends a police notification to the developer.',
      'Shopify shuts down the merchant’s entire store.',
      'The app is automatically awarded 5 stars on the App Store.'
    ],
    correctAnswer: 0, // A
    explanation: 'If a webhook endpoint fails continuously for 48 hours or responds with HTTP 410 Gone, Shopify marks the subscription broken and automatically removes it.'
  },
  {
    id: 28,
    topic: 'Theme Asset Bundling with Vite',
    question: 'When using Vite to bundle TypeScript and Tailwind CSS for a Shopify theme, why must output assets be placed into the theme’s `assets/` directory with static filenames?',
    options: [
      'Because Shopify Liquid references theme assets using `{{ \'theme.js\' | asset_url }}`, requiring predictable file paths without dynamic hash renames that break Liquid filters.',
      'Because Vite only works on Linux machines.',
      'Because Shopify does not support JavaScript files larger than 10 bytes.',
      'Because CSS files must be written in XML format.'
    ],
    correctAnswer: 0, // A
    explanation: 'Liquid’s `asset_url` filter resolves asset URLs based on predictable filenames (e.g. `theme.js`, `theme.css`). Build tools like Vite must output clean static filenames to `assets/`.'
  },
  {
    id: 29,
    topic: 'Storefront API Customer Authentication',
    question: 'In a custom headless storefront, how does a user authenticate and manage their customer account via the Storefront API?',
    options: [
      'By calling the `customerAccessTokenCreate` mutation with email and password, receiving a `customerAccessToken` passed in subsequent customer queries.',
      'By passing the store owner’s Admin API token in the client URL.',
      'By storing customer passwords in plain text cookies.',
      'Customer accounts are not supported in the Storefront API.'
    ],
    correctAnswer: 0, // A
    explanation: 'The Storefront API provides `customerAccessTokenCreate`, returning a secure customer access token that unlocks customer order history, saved addresses, and profile mutations.'
  },
  {
    id: 30,
    topic: 'App Review & Security Standards',
    question: 'Prior to submitting a custom or public app for official Shopify App Review, which security vulnerability must be rigorously verified as patched?',
    options: [
      'Ensuring all OAuth redirects validate the `hmac` query parameter, verifying all Webhooks check HMAC SHA-256 signatures, and enforcing strict CORS and CSP headers against Clickjacking (X-Frame-Options / frame-ancestors).',
      'Ensuring the app has at least 1,000 CSS animations on the landing page.',
      'Making sure all API secrets are printed to the browser console for debugging.',
      'Disabling HTTPS and running the app on unencrypted port 80.'
    ],
    correctAnswer: 0, // A
    explanation: 'Shopify App Review enforces strict security checks: valid HMAC validation on OAuth and Webhooks, Content Security Policy (`frame-ancestors https://*.myshopify.com https://admin.shopify.com`), and sanitized user inputs.'
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

const INTERMEDIATE_MODULES = [
  {
    id: 'shopify-dev-int-01',
    orderIndex: 1,
    title: '1. Advanced Shopify Theme Architecture',
    description: 'Master advanced Online Store 2.0 architectures: modular section groups, alternate JSON templates, dynamic template routing, and composite theme component systems.',
    duration: '60 mins',
    xpReward: 200,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-arch-01', title: 'Advanced OS 2.0 Architecture Patterns', type: 'documentation', url: 'https://shopify.dev/docs/themes/architecture' }
    ],
    lessonContent: {
      overview: 'Enterprise Shopify themes require scalable architectures that handle hundreds of unique landing pages, varied product types (pre-orders, digital downloads, bundles), and bespoke collection layouts. In this module, you will master alternate JSON template generation, section group inheritance, and dynamic template assignment.',
      objectives: [
        'Design composable theme architectures using alternate JSON templates (`product.bundle.json`, `collection.editorial.json`).',
        'Implement section groups for global layout modularity across headers, footers, and modal overlays.',
        'Manage merchant settings inheritance across multi-layout configurations.',
        'Structure scalable theme asset pipelines using modern bundlers.'
      ],
      sections: [
        {
          id: 'sec-adv-json-arch',
          title: 'Alternate JSON Templates & Template Assignment',
          content: 'By creating alternate JSON templates, developers provide merchants with specialized layouts. When a merchant selects "product.bundle" in the Shopify Admin, Shopify loads `templates/product.bundle.json`, rendering a tailored hierarchy of sections and custom blocks.',
          codeSnippets: [
            formatSnippet(
              'json',
              'templates/product.bundle.json',
              'Specialized Pre-Order & Bundle Product JSON Template',
              `{
  "sections": {
    "bundle_hero": {
      "type": "bundle-product-hero",
      "blocks": {
        "badge": { "type": "exclusive_badge", "settings": { "text": "Limited Edition Bundle" } },
        "title": { "type": "title", "settings": {} },
        "bundle_selector": { "type": "bundle_tier_selector", "settings": { "discount_percentage": 15 } },
        "buy_button": { "type": "buy_buttons", "settings": { "show_dynamic_checkout": true } }
      },
      "block_order": ["badge", "title", "bundle_selector", "buy_button"],
      "settings": { "highlight_color": "#10B981" }
    },
    "bundle_breakdown": {
      "type": "bundle-items-included",
      "settings": { "heading": "What's Included in This Bundle" }
    },
    "faq_accordion": {
      "type": "collapsible-faq-list",
      "settings": { "heading": "Bundle & Shipping FAQ" }
    }
  },
  "order": ["bundle_hero", "bundle_breakdown", "faq_accordion"]
}`,
              'Alternate product JSON template tailored for bundle sales with specialized section blocks.'
            ),
            formatSnippet(
              'liquid',
              'sections/footer-group.json',
              'Modular Footer Section Group',
              `{
  "name": "Footer Group",
  "type": "footer",
  "sections": {
    "newsletter_signup": {
      "type": "newsletter-section",
      "settings": { "heading": "Join the Developer Newsletter" }
    },
    "main_footer": {
      "type": "footer-navigation",
      "settings": { "menu": "footer-menu", "show_payment_methods": true }
    }
  },
  "order": ["newsletter_signup", "main_footer"]
}`,
              'Section group JSON defining modular, reorderable footer layout components.'
            )
          ],
          proTip: 'Never delete or rename standard templates (`product.json`, `index.json`, `collection.json`, `cart.json`, `404.json`). Shopify requires these baseline templates as fallbacks for all stores.',
          commonMistakes: [
            'Creating monolithic sections with hardcoded layouts instead of breaking features into atomic sections and blocks.',
            'Forgetting to configure block_order in JSON templates, which causes blocks to fail to render.'
          ]
        }
      ],
      keyTakeaways: [
        'Alternate JSON templates provide customized layouts assigned per product or collection in Shopify Admin.',
        'Section groups allow global sections to be added, reordered, and removed modularly.',
        'Maintain baseline JSON templates for all standard Shopify resource types.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-01',
          title: 'Create an Editorial Collection JSON Template',
          instructions: 'Construct templates/collection.editorial.json featuring an editorial hero section and a curated story grid.',
          starterCode: `{\n  "sections": {},\n  "order": []\n}`,
          solutionCode: `{\n  "sections": {\n    "editorial_hero": {\n      "type": "editorial-hero-banner",\n      "settings": { "show_date": true }\n    },\n    "story_grid": {\n      "type": "editorial-story-grid",\n      "settings": { "posts_per_row": 2 }\n    }\n  },\n  "order": ["editorial_hero", "story_grid"]\n}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-int-02',
    orderIndex: 2,
    title: '2. Advanced Sections, Blocks and Theme Editor Integration',
    description: 'Engineer advanced section blocks, dynamic app block support (@app), responsive layout settings, and deep Theme Editor JavaScript event synchronization.',
    duration: '55 mins',
    xpReward: 195,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-blocks-01', title: 'Theme App Extension Blocks Guide', type: 'documentation', url: 'https://shopify.dev/docs/apps/online-store/theme-app-extensions/extensions-framework' }
    ],
    lessonContent: {
      overview: 'Sections become truly powerful when they leverage dynamic block schemas and seamless Theme Editor integration. In this module, you will build complex multi-block sections with App Block support (`@app`), nested tab/accordion blocks, and dynamic JavaScript observers that re-initialize components on merchant edits.',
      objectives: [
        'Implement dynamic `@app` block support for seamless third-party app integration.',
        'Engineer multi-type block schemas with conditional rendering.',
        'Bind Theme Editor JavaScript events (`shopify:section:load`, `shopify:block:select`) to custom Web Components.',
        'Handle dynamic block limits and responsive column configurations.'
      ],
      sections: [
        {
          id: 'sec-adv-blocks',
          title: 'Dynamic Block Schemas & App Block Integration',
          content: 'By including `{"type": "@app"}` in the blocks array, you allow merchants to place third-party app widgets directly into your theme sections without modifying Liquid code. When a merchant adds an app block, Shopify renders it dynamically inside the section.',
          codeSnippets: [
            formatSnippet(
              'liquid',
              'sections/main-product-details.liquid',
              'Advanced Product Section with App Block & Custom Block Types',
              `<section class="main-product py-12 px-4 max-w-7xl mx-auto" data-section-id="{{ section.id }}">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div class="product-gallery">
      <!-- Media gallery component -->
      {% render 'product-media-gallery', product: product %}
    </div>

    <div class="product-info space-y-6">
      {% for block in section.blocks %}
        <div class="product-block product-block--{{ block.type }}" {{ block.shopify_attributes }}>
          {% case block.type %}
            {% when '@app' %}
              {% render block %}
            {% when 'title' %}
              <h1 class="text-3xl font-bold text-gray-900">{{ product.title | escape }}</h1>
            {% when 'price' %}
              <div class="text-2xl font-bold text-brand" data-product-price>
                {{ product.selected_or_first_available_variant.price | money }}
              </div>
            {% when 'description' %}
              <div class="prose text-gray-600 rte">{{ product.description }}</div>
            {% when 'custom_liquid' %}
              {{ block.settings.custom_liquid }}
          {% endcase %}
        </div>
      {% endfor %}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Product Details",
  "tag": "section",
  "class": "section-product-details",
  "blocks": [
    { "type": "@app" },
    { "type": "title", "name": "Product Title", "limit": 1 },
    { "type": "price", "name": "Product Price", "limit": 1 },
    { "type": "description", "name": "Description", "limit": 1 },
    {
      "type": "custom_liquid",
      "name": "Custom Liquid",
      "settings": [
        { "type": "liquid", "id": "custom_liquid", "label": "Custom Liquid Code" }
      ]
    }
  ],
  "presets": [
    {
      "name": "Product Details",
      "blocks": [
        { "type": "title" },
        { "type": "price" },
        { "type": "description" }
      ]
    }
  ]
}
{% endschema %}`,
              'Comprehensive product section with @app block integration and custom Liquid block.'
            )
          ],
          proTip: 'When rendering `@app` blocks, use `{% render block %}` inside the block loop. Shopify automatically handles invoking the third-party app extension Liquid code safely.',
          commonMistakes: [
            'Omitting `{% render block %}` for `@app` blocks, preventing merchant app widgets from appearing.',
            'Forgetting `limit: 1` on blocks that should only appear once (like Product Title or Price).'
          ]
        }
      ],
      keyTakeaways: [
        'Include `{"type": "@app"}` in section block schemas to support Theme App Extensions.',
        'Use `limit` properties on blocks to prevent merchants from accidentally duplicating singleton elements.',
        'Render `@app` blocks with `{% render block %}` inside the case switch.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-02',
          title: 'Define Section Schema with App Block Support',
          instructions: 'Write the blocks schema for a featured product section that supports title, buy buttons, and third-party app blocks.',
          starterCode: `{% schema %}\n{\n  "name": "Featured Product",\n  "blocks": []\n}\n{% endschema %}`,
          solutionCode: `{% schema %}\n{\n  "name": "Featured Product",\n  "blocks": [\n    { "type": "@app" },\n    { "type": "title", "name": "Title", "limit": 1 },\n    { "type": "buy_buttons", "name": "Buy Buttons", "limit": 1 }\n  ]\n}\n{% endschema %}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-int-03',
    orderIndex: 3,
    title: '3. Shopify Theme JSON and Configuration',
    description: 'Master global theme settings architectures in settings_schema.json, preset styles, typography pickers, color schemes, and configuration migrations.',
    duration: '50 mins',
    xpReward: 190,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-cfg-01', title: 'Settings Schema Reference', type: 'documentation', url: 'https://shopify.dev/docs/themes/architecture/config/settings-schema-json' }
    ],
    lessonContent: {
      overview: 'The `config/settings_schema.json` file is the central configuration engine of a Shopify theme. It dictates global theme styling, color palettes, typography scales, layout widths, and social sharing metadata. In this module, you will learn how to design intuitive configuration categories, color schemes, and seamless preset migration routines.',
      objectives: [
        'Architect modular settings schemas with categorized sections and informative merchant tooltips.',
        'Implement Shopify Font Picker and Color Scheme configuration settings.',
        'Manage theme preset styles in `config/settings_data.json`.',
        'Handle backward-compatible theme settings updates without breaking live merchant configurations.'
      ],
      sections: [
        {
          id: 'sec-theme-config',
          title: 'Global Theme Settings Schema Architecture',
          content: 'Settings defined in `settings_schema.json` are accessible globally across all Liquid templates and sections via `settings.<setting_id>`. By organizing settings into logical categories (Brand, Typography, Colors, Layout), you create an intuitive merchant experience.',
          codeSnippets: [
            formatSnippet(
              'json',
              'config/settings_schema.json',
              'Advanced Theme Settings Schema Structure',
              `[
  {
    "name": "theme_info",
    "theme_name": "Skillora Pro Commerce",
    "theme_version": "2.0.0",
    "theme_author": "Skillora AI Engineering",
    "theme_documentation_url": "https://shopify.dev/docs/themes"
  },
  {
    "name": "Brand Colors",
    "settings": [
      {
        "type": "color",
        "id": "color_brand_primary",
        "label": "Primary Accent",
        "default": "#2563EB"
      },
      {
        "type": "color_background",
        "id": "gradient_hero_bg",
        "label": "Hero Gradient Background",
        "default": "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)"
      }
    ]
  },
  {
    "name": "Typography Scale",
    "settings": [
      {
        "type": "font_picker",
        "id": "font_headings",
        "label": "Heading Font",
        "default": "inter_n7"
      },
      {
        "type": "range",
        "id": "heading_scale",
        "min": 80,
        "max": 140,
        "step": 5,
        "unit": "%",
        "label": "Heading Font Scale",
        "default": 100
      }
    ]
  }
]`,
              'Modular settings_schema.json providing brand colors, gradients, and font scaling.'
            )
          ],
          proTip: 'Use `type: "color_background"` instead of standard `color` when you want merchants to have the option to configure CSS gradients as well as solid colors.',
          commonMistakes: [
            'Changing setting IDs in newer theme releases, which disconnects existing merchant configurations upon theme update.',
            'Failing to provide default values for settings in schema definitions.'
          ]
        }
      ],
      keyTakeaways: [
        'Global settings in `settings_schema.json` are accessible anywhere via `settings.<id>`.',
        'Use `color_background` for gradient support and `font_picker` for system and web fonts.',
        'Preserve setting IDs across releases to ensure smooth merchant updates.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-03',
          title: 'Add Layout Max Width Setting',
          instructions: 'Write a settings_schema.json category for Layout containing a range setting for max page width (1000px to 1600px).',
          starterCode: `{\n  "name": "Layout",\n  "settings": []\n}`,
          solutionCode: `{\n  "name": "Layout",\n  "settings": [\n    {\n      "type": "range",\n      "id": "page_max_width",\n      "min": 1000,\n      "max": 1600,\n      "step": 50,\n      "unit": "px",\n      "label": "Maximum Page Width",\n      "default": 1280\n    }\n  ]\n}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-int-04',
    orderIndex: 4,
    title: '4. Advanced Metafields and Metaobjects',
    description: 'Model relational multi-field data structures, Metaobject web pages, Admin API CRUD mutations, and programmatic data seeding.',
    duration: '55 mins',
    xpReward: 200,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-meta-01', title: 'Metaobjects GraphQL Admin API', type: 'documentation', url: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectCreate' }
    ],
    lessonContent: {
      overview: 'Enterprise data modeling in Shopify extends far beyond single text metafields. In this module, you will learn how to create and manage relational Metaobjects via GraphQL Admin API mutations, configure Metaobject Web Pages with dynamic routing, and seed structured content programmatically.',
      objectives: [
        'Create Metaobject definitions with multiple typed fields using GraphQL Admin API mutations.',
        'Perform programmatic CRUD mutations on Metaobject records (`metaobjectCreate`, `metaobjectUpdate`).',
        'Configure Metaobject Web Pages with SEO metadata and dynamic JSON templates.',
        'Query relational Metaobject references in Liquid and GraphQL.'
      ],
      sections: [
        {
          id: 'sec-metaobject-api',
          title: 'Creating & Mutating Metaobjects via GraphQL Admin API',
          content: 'Developers use the Admin API to define Metaobject definitions and create records programmatically. A metaobject definition specifies field types (single_line_text, rich_text, file_reference). Once created, entries can be queried globally or linked to products via metafield references.',
          codeSnippets: [
            formatSnippet(
              'graphql',
              'mutations/create-metaobject-definition.graphql',
              'GraphQL Mutation: Create Metaobject Definition',
              `mutation CreateAuthorMetaobjectDefinition {
  metaobjectDefinitionCreate(
    definition: {
      name: "Author Profile"
      type: "author_profile"
      access: {
        storefront: PUBLIC_READ
      }
      fieldDefinitions: [
        {
          key: "full_name"
          name: "Full Name"
          type: "single_line_text_field"
          required: true
        },
        {
          key: "biography"
          name: "Biography"
          type: "multi_line_text_field"
        },
        {
          key: "avatar"
          name: "Avatar Photo"
          type: "file_reference"
        },
        {
          key: "github_url"
          name: "GitHub Profile URL"
          type: "url"
        }
      ]
    }
  ) {
    metaobjectDefinition {
      id
      type
    }
    userErrors {
      field
      message
    }
  }
}`,
              'Creating a multi-field author_profile metaobject definition with public storefront read access.'
            ),
            formatSnippet(
              'graphql',
              'mutations/create-metaobject-entry.graphql',
              'GraphQL Mutation: Create Metaobject Record Entry',
              `mutation CreateAuthorRecord {
  metaobjectCreate(
    metaobject: {
      type: "author_profile"
      handle: "alex-chen-lead-architect"
      fields: [
        { key: "full_name", value: "Alex Chen" },
        { key: "biography", value: "Principal Shopify Architect specializing in headless commerce and high-concurrency systems." },
        { key: "github_url", value: "https://github.com/alexchen-dev" }
      ]
    }
  ) {
    metaobject {
      id
      handle
    }
    userErrors {
      field
      message
    }
  }
}`,
              'Inserting an individual author record entry programmatically via GraphQL.'
            )
          ],
          proTip: 'Always ensure `access.storefront: PUBLIC_READ` is configured on the Metaobject definition. Without this, storefront Liquid templates and Storefront API queries will receive null when trying to access metaobject values.',
          commonMistakes: [
            'Forgetting `access: { storefront: PUBLIC_READ }`, preventing storefront visibility.',
            'Passing invalid JSON formats when creating `list.single_line_text_field` values (must be formatted as stringified JSON arrays like `"[\\"value1\\", \\"value2\\"]"`).'
          ]
        }
      ],
      keyTakeaways: [
        'Define Metaobject schemas with `metaobjectDefinitionCreate` specifying typed fields and storefront access.',
        'Insert records with `metaobjectCreate` matching declared field keys.',
        'Expose Metaobjects as web pages with `templates/metaobject/{type}.json` templates.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-04',
          title: 'Write Metaobject Record Mutation',
          instructions: 'Write a GraphQL mutation to update the biography of an existing metaobject record by its ID.',
          starterCode: `mutation UpdateAuthorBio($id: ID!, $bio: String!) {\n  // Write mutation\n}`,
          solutionCode: `mutation UpdateAuthorBio($id: ID!, $bio: String!) {\n  metaobjectUpdate(\n    id: $id\n    metaobject: {\n      fields: [{ key: "biography", value: $bio }]\n    }\n  ) {\n    metaobject { id }\n    userErrors { field message }\n  }\n}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-int-05',
    orderIndex: 5,
    title: '5. Shopify Storefront API with GraphQL',
    description: 'Master advanced Storefront API patterns: deep product queries, buyer identity, cart lines management, localization, and headless cart checkouts.',
    duration: '60 mins',
    xpReward: 205,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-sf-01', title: 'Storefront API Cart Guide', type: 'documentation', url: 'https://shopify.dev/docs/api/storefront/latest/queries/cart' }
    ],
    lessonContent: {
      overview: 'The Storefront API is the backbone of headless commerce, mobile applications, and interactive micro-frontends. In this module, you will master advanced GraphQL query construction, buyer identity attachment (customer tokens, country/currency context), cart lines mutations, and discount code applications.',
      objectives: [
        'Query products with complex filters, variants, metafields, and media in a single request.',
        'Manage full cart lifecycles (`cartCreate`, `cartLinesAdd`, `cartLinesUpdate`, `cartDiscountCodesUpdate`).',
        'Attach buyer identity and localized currency headers to cart sessions.',
        'Handle Storefront API query cost, rate limits, and network error retries.'
      ],
      sections: [
        {
          id: 'sec-sf-cart-lifecycle',
          title: 'Advanced Storefront API Cart Operations',
          content: 'Storefront API carts are fully independent of theme cookies. When mutating cart lines, you pass the `cartId` and line items. The response returns calculated totals, subtotal taxes, applied discount codes, and the final checkout URL.',
          codeSnippets: [
            formatSnippet(
              'graphql',
              'queries/advanced-cart-mutation.graphql',
              'Storefront API Cart Lines Add & Buyer Context Mutation',
              `mutation AddLinesToCart(
  $cartId: ID!
  $lines: [CartLineInput!]!
  $country: CountryCode
) @inContext(country: $country) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      id
      checkoutUrl
      totalQuantity
      cost {
        totalAmount { amount currencyCode }
        subtotalAmount { amount currencyCode }
      }
      lines(first: 10) {
        nodes {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              product { title handle }
              price { amount currencyCode }
            }
          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}`,
              'Adding lines to an existing cart with localized country context via the @inContext directive.'
            )
          ],
          proTip: 'Use the `@inContext(country: $countryCode)` GraphQL directive on Storefront API queries to automatically retrieve localized prices, taxes, and inventory availability for global shoppers.',
          commonMistakes: [
            'Using numeric variant IDs instead of full GraphQL GIDs (`gid://shopify/ProductVariant/...`).',
            'Failing to store and persist the `cartId` string across page sessions in headless clients.'
          ]
        }
      ],
      keyTakeaways: [
        'Use `@inContext` directives for internationalized pricing and catalog localization.',
        'Storefront API cart operations return complete line details and instant `checkoutUrl` links.',
        'All resource identifiers must use the global GID format.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-05',
          title: 'Apply Discount Code to Cart via GraphQL',
          instructions: 'Write a Storefront API mutation to apply a discount code string to an existing cartId.',
          starterCode: `mutation ApplyCartDiscount($cartId: ID!, $codes: [String!]) {\n  // Mutation\n}`,
          solutionCode: `mutation ApplyCartDiscount($cartId: ID!, $codes: [String!]) {\n  cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $codes) {\n    cart {\n      id\n      discountCodes { code applicable }\n    }\n    userErrors { field message }\n  }\n}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-int-06',
    orderIndex: 6,
    title: '6. Shopify Admin API Fundamentals',
    description: 'Explore the high-privilege Shopify Admin GraphQL API: resource schemas, access tokens, API versioning lifecycles, and location inventory management.',
    duration: '55 mins',
    xpReward: 195,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-admin-01', title: 'Admin GraphQL API Reference', type: 'documentation', url: 'https://shopify.dev/docs/api/admin-graphql' }
    ],
    lessonContent: {
      overview: 'The Admin API gives backend applications complete administrative control over a Shopify store: managing products, updating inventory across multi-locations, fulfilling orders, and accessing customer data. In this module, you will master Admin API authentication, quarterly versioning lifecycles, and inventory level adjustments.',
      objectives: [
        'Authenticate securely with Admin GraphQL endpoints using offline and online tokens.',
        'Understand Shopify API release cadences (e.g. 2024-01, 2024-04) and deprecation lifecycles.',
        'Execute inventory adjustments across multi-location fulfillment centers.',
        'Query order and customer records with strict field selections.'
      ],
      sections: [
        {
          id: 'sec-admin-inventory',
          title: 'Admin API Versioning & Inventory Adjustments',
          content: 'Shopify releases a new API version every quarter, supported for 12 months. All requests require the `X-Shopify-Access-Token` header. Inventory adjustments use the `inventoryAdjustQuantities` mutation to safely update stock counts without race conditions.',
          codeSnippets: [
            formatSnippet(
              'graphql',
              'mutations/adjust-inventory.graphql',
              'Admin API Inventory Adjustment Mutation',
              `mutation AdjustLocationInventory(
  $inventoryItemId: ID!
  $locationId: ID!
  $delta: Int!
) {
  inventoryAdjustQuantities(
    input: {
      reason: "cycle_count_available"
      name: "available"
      changes: [
        {
          inventoryItemId: $inventoryItemId
          locationId: $locationId
          delta: $delta
        }
      ]
    }
  ) {
    inventoryAdjustmentGroup {
      createdAt
      changes {
        name
        delta
        quantityAfterChange
      }
    }
    userErrors {
      field
      message
    }
  }
}`,
              'Adjusting available inventory at a specific store location using atomic delta changes.'
            )
          ],
          proTip: 'Always use delta adjustments (`inventoryAdjustQuantities`) rather than overwriting absolute counts (`inventorySetQuantities`) in high-concurrency environments to prevent race conditions during flash sales.',
          commonMistakes: [
            'Using an expired API version that has been sunset by Shopify.',
            'Setting absolute inventory counts during live order processing instead of atomic delta adjustments.'
          ]
        }
      ],
      keyTakeaways: [
        'Shopify publishes quarterly API versions supported for 12 months with breaking changes announced in advance.',
        'Admin API requests require `X-Shopify-Access-Token` headers and server-side execution.',
        'Use atomic delta mutations (`inventoryAdjustQuantities`) for robust inventory synchronization.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-06',
          title: 'Query Store Locations via Admin API',
          instructions: 'Write an Admin GraphQL query to fetch all active store locations with their ID, name, and address.',
          starterCode: `query GetStoreLocations {\n  // Query\n}`,
          solutionCode: `query GetStoreLocations {\n  locations(first: 10) {\n    nodes {\n      id\n      name\n      isActive\n      address { city country }\n    }\n  }\n}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-int-07',
    orderIndex: 7,
    title: '7. API Queries, Mutations and Pagination',
    description: 'Master Relay-style cursor pagination, GraphQL query cost budgeting, field aliases, and batch mutation execution.',
    duration: '50 mins',
    xpReward: 190,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-page-01', title: 'Shopify GraphQL Pagination and Rate Limits', type: 'documentation', url: 'https://shopify.dev/docs/api/usage/rate-limits' }
    ],
    lessonContent: {
      overview: 'Efficient GraphQL querying requires mastering Relay-style cursor pagination and monitoring query cost. In this module, you will learn how to implement cursor loops with backoff strategies, use aliases to fetch multiple entities in parallel, and keep requests within calculated cost thresholds.',
      objectives: [
        'Implement cursor-based pagination loops using `hasNextPage` and `endCursor`.',
        'Calculate and budget GraphQL query costs using `extensions.cost`.',
        'Use GraphQL aliases and fragments to optimize network roundtrips.',
        'Handle 429 Too Many Requests errors with exponential backoff algorithms.'
      ],
      sections: [
        {
          id: 'sec-cursor-pagination',
          title: 'Cursor-Based Pagination & Rate Limit Backoff',
          content: 'Cursor pagination uses an opaque cursor string pointing to a specific record. Unlike offset pagination, cursor pagination performs in O(1) time regardless of dataset size.',
          codeSnippets: [
            formatSnippet(
              'javascript',
              'server/paginated-product-fetcher.js',
              'Automated Cursor Pagination Loop with Cost Throttling',
              `export async function fetchAllProducts(client) {
  let hasNextPage = true;
  let cursor = null;
  const allProducts = [];

  const QUERY = \`
    query GetProductsPage($cursor: String) {
      products(first: 50, after: $cursor) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          title
          handle
        }
      }
    }
  \`;

  while (hasNextPage) {
    const response = await client.query(QUERY, { cursor });
    const { nodes, pageInfo } = response.products;
    
    allProducts.push(...nodes);
    hasNextPage = pageInfo.hasNextPage;
    cursor = pageInfo.endCursor;

    // Respect throttle status if rate limit pool is low
    if (response.extensions?.cost?.throttleStatus?.currentlyAvailable < 100) {
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  return allProducts;
}`,
              'Production pagination loop fetching all products in batches of 50 while monitoring available cost points.'
            )
          ],
          proTip: 'Never fetch `first: 250` for nested resources (like 250 products with 250 variants each). The total calculated query cost will exceed the single-query cost ceiling of 1,000 points and fail immediately.',
          commonMistakes: [
            'Requesting huge nested node sets that exceed the 1000-point single query cost ceiling.',
            'Using infinite while loops without checking `pageInfo.hasNextPage`.'
          ]
        }
      ],
      keyTakeaways: [
        'Cursor pagination provides O(1) performance using `pageInfo.endCursor` and `after: $cursor`.',
        'Monitor `extensions.cost.throttleStatus.currentlyAvailable` to pause before hitting 429 throttles.',
        'Keep single query costs under 1,000 points by limiting batch sizes.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-07',
          title: 'Construct Paginated Order Query',
          instructions: 'Write a GraphQL query to fetch the first 25 orders with pageInfo fields (hasNextPage, endCursor) and order names.',
          starterCode: `query GetOrders($cursor: String) {\n  // Query\n}`,
          solutionCode: `query GetOrders($cursor: String) {\n  orders(first: 25, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    nodes {\n      id\n      name\n      totalPriceSet { shopMoney { amount currencyCode } }\n    }\n  }\n}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-int-08',
    orderIndex: 8,
    title: '8. Shopify App Architecture',
    description: 'Understand modern Shopify App topologies: embedded vs standalone apps, Shopify CLI templates, Remix framework integrations, and Prisma ORM data layers.',
    duration: '55 mins',
    xpReward: 200,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-app-01', title: 'Shopify App Architecture Overview', type: 'documentation', url: 'https://shopify.dev/docs/apps/getting-started' }
    ],
    lessonContent: {
      overview: 'Modern Shopify apps are full-stack web applications that integrate deeply with the merchant admin. The official standard architecture leverages the Remix framework with `@shopify/shopify-app-remix`, Prisma ORM for multi-tenant storage, and App Bridge for embedded rendering. In this module, you will learn how the app server handles authentication, sessions, and API client instantiation.',
      objectives: [
        'Understand the components of a modern Shopify Remix app template.',
        'Configure `shopify.app.toml` application manifests.',
        'Initialize `@shopify/shopify-app-remix` server configuration.',
        'Manage multi-tenant session storage using Prisma ORM.'
      ],
      sections: [
        {
          id: 'sec-app-remix-config',
          title: 'Remix Shopify App Configuration & Session Management',
          content: 'The `@shopify/shopify-app-remix` package manages OAuth, session tokens, webhook routing, and Admin API client generation. The application manifest (`shopify.app.toml`) defines app metadata, scopes, and webhook endpoints.',
          codeSnippets: [
            formatSnippet(
              'typescript',
              'app/shopify.server.ts',
              'Shopify App Server Configuration with Remix & Prisma',
              `import "@shopify/shopify-app-remix/adapters/node";
import {
  AppDistribution,
  shopifyApp,
  LATEST_API_VERSION
} from "@shopify/shopify-app-remix/server";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import prisma from "./db.server";

export const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_API_SECRET!,
  scopes: process.env.SCOPES?.split(",") || ["read_products", "write_products"],
  appUrl: process.env.SHOPIFY_APP_URL!,
  authPathPrefix: "/auth",
  sessionStorage: new PrismaSessionStorage(prisma),
  distribution: AppDistribution.AppStore,
  apiVersion: LATEST_API_VERSION,
  future: {
    unstable_newEmbeddedAuthStrategy: true
  }
});

export const authenticate = shopify.authenticate;
export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;`,
              'Server initialization of Shopify Remix app with Prisma session storage and automated auth strategies.'
            ),
            formatSnippet(
              'toml',
              'shopify.app.toml',
              'Shopify App Manifest Configuration',
              `client_id = "your_client_id_here"
name = "Skillora Inventory Pro"
handle = "skillora-inventory-pro"
application_url = "https://app.skillora.ai"
embedded = true

[access_scopes]
scopes = "read_products,write_products,read_inventory,write_inventory"

[auth]
redirect_urls = [
  "https://app.skillora.ai/auth/callback",
  "https://app.skillora.ai/auth/shopify/callback"
]

[webhooks]
api_version = "2024-01"

  [[webhooks.subscriptions]]
  topics = [ "app/uninstalled" ]
  uri = "/webhooks/app-uninstalled"`,
              'Official TOML configuration file specifying scopes, redirect URLs, and webhook registrations.'
            )
          ],
          proTip: 'Always store `SHOPIFY_API_SECRET` in server environment variables and never commit `.env` files to source control repositories.',
          commonMistakes: [
            'Exposing `SHOPIFY_API_SECRET` in client-side code or public GitHub repos.',
            'Mismatched redirect URLs in `shopify.app.toml` causing OAuth callback failures.'
          ]
        }
      ],
      keyTakeaways: [
        'Shopify Remix apps use `@shopify/shopify-app-remix` to streamline OAuth, webhooks, and API calls.',
        'Use PrismaSessionStorage for persistent multi-tenant session management.',
        '`shopify.app.toml` acts as the single source of truth for app metadata and scopes.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-08',
          title: 'Configure Scopes in TOML Manifest',
          instructions: 'Write the [access_scopes] section of shopify.app.toml requesting read_orders and write_orders.',
          starterCode: `[access_scopes]\nscopes = ""`,
          solutionCode: `[access_scopes]\nscopes = "read_orders,write_orders"`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-int-09',
    orderIndex: 9,
    title: '9. Embedded App Concepts and App Navigation',
    description: 'Master Shopify App Bridge, embedded iframe security, navigation menus, contextual save bars, modal dialogs, and Polaris UI design systems.',
    duration: '50 mins',
    xpReward: 190,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-bridge-01', title: 'Shopify App Bridge Documentation', type: 'documentation', url: 'https://shopify.dev/docs/api/app-bridge' }
    ],
    lessonContent: {
      overview: 'Embedded apps render inside an iframe in the Shopify Admin. To provide a native merchant feel, developers use Shopify App Bridge and Polaris components. In this module, you will learn how to build navigation menus, modal dialogs, contextual save bars, and handle seamless page transitions without page reloads.',
      objectives: [
        'Integrate App Bridge into embedded React/Remix application layouts.',
        'Build unified navigation with App Bridge `<NavMenu>` and `<TitleBar>`.',
        'Implement contextual SaveBar components to handle dirty form states.',
        'Display native admin modals and toast alerts.'
      ],
      sections: [
        {
          id: 'sec-app-bridge-ui',
          title: 'App Bridge UI Primitives & Navigation',
          content: 'App Bridge communicates with the parent Shopify Admin shell. When a user navigates between app tabs, App Bridge updates the top-level browser URL and synchronizes navigation highlights.',
          codeSnippets: [
            formatSnippet(
              'tsx',
              'app/routes/app.dashboard.tsx',
              'App Bridge TitleBar & Polaris Dashboard Component',
              `import { Page, Layout, Card, Text, Button } from "@shopify/polaris";
import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";

export default function DashboardRoute() {
  const shopify = useAppBridge();

  const handleSyncInventory = () => {
    shopify.toast.show("Inventory synchronization initiated in background.");
  };

  return (
    <Page>
      <TitleBar title="Skillora Inventory Manager">
        <button variant="primary" onClick={handleSyncInventory}>
          Sync All Locations
        </button>
      </TitleBar>

      <Layout>
        <Layout.Section>
          <Card>
            <Text as="h2" variant="headingMd">Real-Time Stock Alerts</Text>
            <Text as="p" variant="bodyMd" tone="subdued">
              All 4 warehouse fulfillment centers are currently synchronized with zero errors.
            </Text>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}`,
              'React component utilizing Shopify Polaris design system and App Bridge TitleBar.'
            )
          ],
          proTip: 'Use App Bridge `<TitleBar>` rather than creating custom HTML headers. This ensures your app’s title and primary action buttons match the official Shopify Admin design patterns.',
          commonMistakes: [
            'Creating custom custom non-Polaris UI that looks alien inside the Shopify Admin.',
            'Using standard browser `window.alert()` inside an embedded iframe instead of `shopify.toast.show()`.'
          ]
        }
      ],
      keyTakeaways: [
        'App Bridge connects embedded iframes to the Shopify Admin shell.',
        'Use `<TitleBar>`, `<NavMenu>`, and `shopify.toast.show()` for native admin user experiences.',
        'Combine App Bridge with Shopify Polaris for visual consistency.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-09',
          title: 'Trigger App Bridge Toast',
          instructions: 'Write a JavaScript function that uses App Bridge to display a toast notification with the message "Settings saved successfully".',
          starterCode: `function showSuccessToast(shopify) {\n  // Code\n}`,
          solutionCode: `function showSuccessToast(shopify) {\n  shopify.toast.show("Settings saved successfully");\n}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-int-10',
    orderIndex: 10,
    title: '10. OAuth, Scopes and Permissions',
    description: 'Master the OAuth 2.0 authorization handshake, HMAC verification, offline vs online tokens, scope updates, and least-privilege security.',
    duration: '55 mins',
    xpReward: 200,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-oauth-01', title: 'Shopify OAuth 2.0 Specification', type: 'documentation', url: 'https://shopify.dev/docs/apps/auth/oauth' }
    ],
    lessonContent: {
      overview: 'Security is paramount in Shopify app development. In this module, you will dissect every step of the OAuth 2.0 authorization flow: generating nonces, validating HMAC signatures on installation requests, exchanging authorization codes for permanent access tokens, and handling scope upgrade prompts when new features are added.',
      objectives: [
        'Understand the full multi-step OAuth 2.0 handshake between merchant, Shopify, and app server.',
        'Verify HMAC query parameters to prevent unauthorized installation forgery.',
        'Distinguish between offline tokens (for background jobs/webhooks) and online tokens (for user identity).',
        'Implement incremental scope request flows for new app features.'
      ],
      sections: [
        {
          id: 'sec-oauth-flow',
          title: 'The OAuth 2.0 Handshake & HMAC Verification',
          content: 'When a merchant installs an app, Shopify sends a GET request with `shop`, `timestamp`, `hmac`, and `host`. The app backend must sort all query parameters alphabetically (excluding `hmac` and `signature`), build a query string, compute an HMAC-SHA256 hash using the app secret, and verify match before initiating the OAuth redirect.',
          codeSnippets: [
            formatSnippet(
              'typescript',
              'server/oauth-validator.ts',
              'Validating Shopify Install Request HMAC',
              `import crypto from 'crypto';

export function validateShopifyInstallRequest(
  queryParams: Record<string, string>,
  apiSecret: string
): boolean {
  const { hmac, signature, ...rest } = queryParams;
  if (!hmac) return false;

  // 1. Sort parameters lexicographically
  const sortedMessage = Object.keys(rest)
    .sort()
    .map(key => \`\${key}=\${rest[key]}\`)
    .join('&');

  // 2. Compute SHA-256 HMAC hash
  const generatedHmac = crypto
    .createHmac('sha256', apiSecret)
    .update(sortedMessage)
    .digest('hex');

  // 3. Timing-safe comparison
  return crypto.timingSafeEqual(
    Buffer.from(generatedHmac),
    Buffer.from(hmac)
  );
}`,
              'Utility function verifying the authenticity of Shopify OAuth installation requests.'
            )
          ],
          proTip: 'Use offline access tokens for backend webhook processing and scheduled cron jobs. Offline tokens do not expire and remain valid until the merchant uninstalls the app.',
          commonMistakes: [
            'Using standard string comparison (`===`) on HMAC values instead of `crypto.timingSafeEqual`.',
            'Forgetting to URL-decode query parameter values before constructing the HMAC validation string.'
          ]
        }
      ],
      keyTakeaways: [
        'Sort all query parameters alphabetically when calculating HMAC for OAuth verification.',
        'Use timing-safe string comparison to prevent side-channel timing attacks.',
        'Offline tokens power background workers; online tokens represent logged-in admin users.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-10',
          title: 'Construct OAuth Authorization Redirect URL',
          instructions: 'Write a helper function that builds the Shopify OAuth authorization URL given shop domain, client ID, scopes, redirect URI, and nonce.',
          starterCode: `function buildOAuthUrl(shop: string, clientId: string, scopes: string, redirectUri: string, nonce: string): string {\n  // Code\n}`,
          solutionCode: `function buildOAuthUrl(shop: string, clientId: string, scopes: string, redirectUri: string, nonce: string): string {\n  return \`https://\${shop}/admin/oauth/authorize?client_id=\${clientId}&scope=\${scopes}&redirect_uri=\${encodeURIComponent(redirectUri)}&state=\${nonce}\`;\n}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-int-11',
    orderIndex: 11,
    title: '11. Webhooks, Queues and Idempotent Processing',
    description: 'Build enterprise-grade webhook architectures with Redis, BullMQ queue workers, dead letter queues, and idempotent database handlers.',
    duration: '60 mins',
    xpReward: 210,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-wh-01', title: 'Managing Webhook Subscriptions with GraphQL', type: 'documentation', url: 'https://shopify.dev/docs/apps/webhooks/configuration/https' }
    ],
    lessonContent: {
      overview: 'At enterprise scale, a single store can trigger hundreds of webhooks per second during high-volume promotions. In this module, you will design a distributed webhook ingestion pipeline: receiving webhooks via lightweight API endpoints, enqueuing jobs into BullMQ/Redis, deduplicating with idempotency keys, and handling retries with exponential backoff and Dead Letter Queues (DLQ).',
      objectives: [
        'Register and manage webhook subscriptions programmatically via GraphQL mutations.',
        'Architect a high-throughput queue worker system using BullMQ and Redis.',
        'Implement database-backed idempotency tracking using `X-Shopify-Webhook-Id`.',
        'Configure Dead Letter Queues for poisoned payloads and error alerting.'
      ],
      sections: [
        {
          id: 'sec-bullmq-worker',
          title: 'Distributed Queue Worker Pipeline for Shopify Webhooks',
          content: 'Separating webhook reception from job processing ensures your API endpoint never times out. The receiver verifies HMAC, validates the `webhookId`, pushes the job to BullMQ, and responds with 200 OK in under 20 milliseconds.',
          codeSnippets: [
            formatSnippet(
              'typescript',
              'server/workers/webhook-queue.ts',
              'BullMQ Webhook Processing Worker with Idempotency',
              `import { Queue, Worker, Job } from 'bullmq';
import { prisma } from '../db.server';

export const webhookQueue = new Queue('shopify-webhooks', {
  connection: { host: process.env.REDIS_HOST, port: Number(process.env.REDIS_PORT) }
});

export const webhookWorker = new Worker(
  'shopify-webhooks',
  async (job: Job) => {
    const { webhookId, topic, shop, payload } = job.data;

    // 1. Idempotency Check in DB
    const existing = await prisma.processedWebhook.findUnique({
      where: { webhookId }
    });

    if (existing) {
      console.log(\`[Worker] Duplicate webhook \${webhookId} ignored.\`);
      return { status: 'skipped_duplicate' };
    }

    // 2. Execute Business Logic
    if (topic === 'orders/create') {
      await processOrderCreation(shop, payload);
    } else if (topic === 'app/uninstalled') {
      await handleAppUninstallation(shop);
    }

    // 3. Mark as processed in DB
    await prisma.processedWebhook.create({
      data: {
        webhookId,
        topic,
        shop,
        processedAt: new Date()
      }
    });

    return { status: 'processed' };
  },
  {
    connection: { host: process.env.REDIS_HOST, port: Number(process.env.REDIS_PORT) },
    concurrency: 10,
    attempts: 3,
    backoff: { type: 'exponential', delay: 2000 }
  }
);`,
              'Production BullMQ worker processing webhooks with concurrency 10, exponential backoff, and database idempotency.'
            )
          ],
          proTip: 'Always register for the mandatory compliance webhooks (`customers/data_request`, `customers/redact`, `shop/redact`). Shopify will reject apps that do not respond to mandatory GDPR/privacy webhooks.',
          commonMistakes: [
            'Failing to implement mandatory GDPR compliance webhooks.',
            'Not setting up exponential backoff and retry limits on queue workers, leading to infinite job retry loops.'
          ]
        }
      ],
      keyTakeaways: [
        'Acknowledge webhooks with HTTP 200 immediately and process jobs asynchronously in BullMQ.',
        'Prevent duplicate processing by recording `webhookId` in an idempotency table.',
        'Mandatory privacy webhooks (`customers/redact`, `shop/redact`) are legally required.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-11',
          title: 'Register Webhook via GraphQL',
          instructions: 'Write a GraphQL mutation to register a webhook subscription for topic ORDERS_CREATE pointing to an HTTPS callback URL.',
          starterCode: `mutation RegisterWebhook($callbackUrl: URL!) {\n  // Mutation\n}`,
          solutionCode: `mutation RegisterWebhook($callbackUrl: URL!) {\n  webhookSubscriptionCreate(\n    topic: ORDERS_CREATE\n    webhookSubscription: {\n      callbackUrl: $callbackUrl\n      format: JSON\n    }\n  ) {\n    webhookSubscription { id }\n    userErrors { field message }\n  }\n}`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-int-12',
    orderIndex: 12,
    title: '12. Shopify Cart and Checkout Development Concepts',
    description: 'Understand modern checkout architectures, migration from legacy checkout.liquid to Checkout Extensibility, and Cart Transform concepts.',
    duration: '50 mins',
    xpReward: 195,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-chk-01', title: 'Checkout Extensibility Architecture Overview', type: 'documentation', url: 'https://shopify.dev/docs/apps/checkout' }
    ],
    lessonContent: {
      overview: 'Shopify has completely deprecated legacy `checkout.liquid` in favor of Checkout Extensibility. Checkout Extensibility allows developers to build fast, upgrade-safe, and secure checkout customizations using Checkout UI Extensions, Web Pixels, and Shopify Functions. In this module, you will master the architecture of Checkout Extensibility and the Cart Transform API.',
      objectives: [
        'Understand the transition from legacy `checkout.liquid` to Checkout Extensibility.',
        'Explore the UI extension targets available along the checkout journey (information, shipping, payment, thank-you).',
        'Understand Cart Transform Functions for product bundling and component expansion.',
        'Ensure checkout customizations meet strict PCI-DSS and security boundaries.'
      ],
      sections: [
        {
          id: 'sec-checkout-ext',
          title: 'Checkout Extensibility Paradigm & UI Extension Targets',
          content: 'Checkout Extensibility replaces direct DOM manipulation with sandboxed React-like UI components. Extensions run in isolated web worker sandboxes and hook into defined extension targets (e.g. `purchase.checkout.block.render`, `purchase.thank-you.block.render`).',
          codeSnippets: [
            formatSnippet(
              'typescript',
              'extensions/checkout-upsell/src/Checkout.tsx',
              'Checkout UI Extension Block Component',
              `import {
  reactExtension,
  Banner,
  BlockStack,
  Text,
  Button,
  useApi,
  useApplyCartLinesChange
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  "purchase.checkout.block.render",
  () => <Extension />
);

function Extension() {
  const { query } = useApi();
  const applyCartLinesChange = useApplyCartLinesChange();

  const handleAddFreeGift = async () => {
    const result = await applyCartLinesChange({
      type: "addCartLine",
      merchandiseId: "gid://shopify/ProductVariant/41234567890123",
      quantity: 1
    });

    if (result.type === "success") {
      console.log("Upsell item successfully added to checkout!");
    }
  };

  return (
    <BlockStack border="dotted" padding="tight" spacing="tight">
      <Banner title="Exclusive Developer Gift">
        Add our official Skillora Sticker Pack to your order for free!
      </Banner>
      <Button onPress={handleAddFreeGift}>Add Free Gift</Button>
    </BlockStack>
  );
}`,
              'Sandbox-safe Checkout UI Extension rendered at the purchase.checkout.block.render target.'
            )
          ],
          proTip: 'Checkout UI Extensions run inside a Web Worker sandbox without direct access to the `window` or `document` objects. Use the official `@shopify/ui-extensions-react/checkout` components and hooks for all UI elements.',
          commonMistakes: [
            'Attempting to access `window.document` or inject arbitrary `<script>` tags inside Checkout Extensibility components.',
            'Trying to edit `checkout.liquid` on modern stores where it is strictly deprecated.'
          ]
        }
      ],
      keyTakeaways: [
        'Checkout Extensibility replaces `checkout.liquid` with secure, upgrade-safe Web Worker sandboxes.',
        'Use extension targets (e.g. `purchase.checkout.block.render`) to place UI components along the checkout path.',
        'All interactions must use official UI Extension components and hooks.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-12',
          title: 'Define Checkout Extension Target',
          instructions: 'Write the export statement declaring a Checkout UI extension for the purchase.thank-you.block.render target.',
          starterCode: `// Export extension`,
          solutionCode: `export default reactExtension(\n  "purchase.thank-you.block.render",\n  () => <ThankYouExtension />\n);`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-int-13',
    orderIndex: 13,
    title: '13. Testing, Debugging and Deployment',
    description: 'Master debugging techniques using Shopify CLI logs, GraphQL network inspectors, mock test stores, and automated continuous deployment.',
    duration: '50 mins',
    xpReward: 190,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-dbg-01', title: 'Debugging Shopify Apps and Themes', type: 'documentation', url: 'https://shopify.dev/docs/apps/tools/cli/debugging' }
    ],
    lessonContent: {
      overview: 'Building resilient Shopify solutions requires comprehensive testing workflows. In this module, you will learn how to debug GraphQL query execution using GraphiQL, monitor real-time CLI logs, test bogus checkout payment flows, and configure automated GitHub Actions deployment pipelines for custom apps and themes.',
      objectives: [
        'Inspect and debug GraphQL queries and userErrors using the embedded GraphiQL tool.',
        'Simulate multi-currency and international checkout transactions using the Bogus Gateway.',
        'Configure logging and monitoring for server-side Remix applications.',
        'Deploy custom apps to cloud platforms (Fly.io, Heroku, AWS, Cloudflare) with automated CI/CD.'
      ],
      sections: [
        {
          id: 'sec-testing-debugging',
          title: 'GraphiQL Inspection & Bogus Gateway Testing',
          content: 'Shopify CLI embeds a local GraphiQL explorer accessible at `/api/graphiql` during `shopify app dev`. For end-to-end checkout verification, activate the Bogus Gateway in Settings > Payments to test successful, failed, and 3D Secure payment flows.',
          codeSnippets: [
            formatSnippet(
              'bash',
              'terminal-debug-commands.sh',
              'Shopify CLI Live Log Streaming Commands',
              `# 1. Stream real-time app logs including webhooks and requests
shopify app logs

# 2. Open interactive GraphiQL query explorer for current dev store
shopify app generate extension

# 3. Test Bogus Payment Gateway details:
# Credit Card: "1" (Success), "2" (Declined), "3" (Gateway Error)
# CVV: Any 3 digits
# Expiry: Any future date`,
              'Debugging commands and test gateway credentials for simulating checkout transactions.'
            )
          ],
          proTip: 'When testing webhooks locally, use `shopify webhook trigger` to replay payloads instantly without needing to manually create orders in the Shopify Admin each time.',
          commonMistakes: [
            'Testing payments with live credit cards instead of the test Bogus Gateway.',
            'Deploying without configuring persistent database connections on cloud hosting platforms.'
          ]
        }
      ],
      keyTakeaways: [
        'Use the embedded GraphiQL explorer in Shopify CLI to test GraphQL queries in isolation.',
        'Test payment edge cases using Bogus Gateway card numbers "1", "2", and "3".',
        'Stream real-time server logs with `shopify app logs`.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-13',
          title: 'Identify Bogus Gateway Test Outcomes',
          instructions: 'Write the expected test result for Bogus credit card numbers "1" and "2".',
          starterCode: `// Bogus Gateway outcomes`,
          solutionCode: `// Card "1": Successful payment transaction\n// Card "2": Simulated payment card declined`
        }
      ]
    }
  },
  {
    id: 'shopify-dev-int-14',
    orderIndex: 14,
    title: '14. Intermediate Project Brief & Architecture',
    description: 'Review technical requirements, architecture blueprints, data models, and API integration plans for the Intermediate Capstone Project.',
    duration: '45 mins',
    xpReward: 180,
    requiresQuiz: false,
    resources: [
      { id: 'res-int-proj-01', title: 'Intermediate Project Specification', type: 'documentation', url: 'https://shopify.dev/docs/apps' }
    ],
    lessonContent: {
      overview: 'In this preparatory module for your Intermediate Capstone Project, you will synthesize all theme engineering and app development concepts. You will review the required 15 technical deliverables for the Shopify Custom App or Advanced Theme System project, covering architecture diagrams, Prisma data schemas, OAuth flows, and background queue workers.',
      objectives: [
        'Review the 15 required deliverables for the Intermediate Capstone.',
        'Design a multi-tier architecture diagram integrating Shopify Admin API, Webhook queues, and App Bridge UI.',
        'Plan Prisma database schemas for store tenants, sessions, and custom business entities.',
        'Prepare testing matrices and deployment procedures.'
      ],
      sections: [
        {
          id: 'sec-int-proj-plan',
          title: 'System Architecture Blueprint for Intermediate Capstone',
          content: 'The Intermediate Capstone requires developing a full-stack Custom Shopify App (e.g. Advanced Inventory Sync or Custom Metafield Content Engine) or an Advanced Theme System. The project must demonstrate secure OAuth authentication, Admin GraphQL integrations, background webhook queues, and Polaris UI.',
          codeSnippets: [
            formatSnippet(
              'prisma',
              'prisma/schema.prisma',
              'Database Schema Model for Custom App Capstone',
              `datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Session {
  id          String    @id
  shop        String
  state       String
  isOnline    Boolean   @default(false)
  scope       String?
  expires     DateTime?
  accessToken String
  userId      BigInt?
}

model StoreSettings {
  id              String   @id @default(uuid())
  shop            String   @unique
  lowStockThreshold Int    @default(5)
  notificationEmail String?
  autoSyncEnabled Boolean  @default(true)
  updatedAt       DateTime @updatedAt
}

model ProcessedWebhook {
  id          String   @id @default(uuid())
  webhookId   String   @unique
  topic       String
  shop        String
  processedAt DateTime @default(now())
}`,
              'Prisma schema modeling sessions, merchant configuration settings, and webhook idempotency logs.'
            )
          ],
          proTip: 'Ensure your app gracefully handles the `app/uninstalled` webhook by purging or archiving the merchant’s sensitive access tokens in your database.',
          commonMistakes: [
            'Failing to clean up access tokens when receiving the `app/uninstalled` webhook.',
            'Not documenting environment variables in the project README.'
          ]
        }
      ],
      keyTakeaways: [
        'The Intermediate Capstone synthesizes full-stack app engineering, APIs, webhooks, and Polaris UI.',
        'Model multi-tenant databases with proper session storage and tenant isolation.',
        'Include detailed architecture diagrams and installation guides in your project submission.'
      ],
      practiceExercises: [
        {
          id: 'ex-int-14',
          title: 'Outline the 15 Capstone Deliverables',
          instructions: 'List the 15 required deliverables for the Intermediate Capstone project.',
          starterCode: `// List 15 deliverables`,
          solutionCode: `// 1. Technical Requirements Document\n// 2. System Architecture Diagram\n// 3. Prisma Data Model Schema\n// 4. API Integration Plan\n// 5. GraphQL Admin Query Examples\n// 6. GraphQL Admin Mutation Examples\n// 7. OAuth 2.0 & Permissions Plan\n// 8. Webhook Processing & Queue Design\n// 9. Error Handling & Retry Strategy\n// 10. Polaris UI Implementation\n// 11. Automated Testing Plan\n// 12. Deployment & CI/CD Plan\n// 13. Technical README Documentation\n// 14. Troubleshooting & Logging Guide\n// 15. Security & Compliance Checklist`
        }
      ]
    }
  }
];

// Capstone Project Task
const INTERMEDIATE_PROJECT_TASK = {
  id: 'shopify-dev-int-15',
  orderIndex: 15,
  title: 'Intermediate Project: Shopify Custom App or Advanced Theme System',
  description: 'Design, architect, code, and deploy a production-grade Custom Shopify App or Advanced Theme System with GraphQL Admin API integrations, BullMQ webhook queues, and Polaris UI.',
  duration: '6 hours',
  xpReward: 450,
  isProject: true,
  type: 'project',
  requiresQuiz: false,
  projectDetails: {
    title: 'Intermediate Capstone: Shopify Custom App or Advanced Theme System',
    overview: 'Build an enterprise-grade full-stack Shopify App (e.g. Automated Multi-Location Inventory Synchronizer or Custom Metafield Content Platform) utilizing Remix, TypeScript, Prisma, BullMQ, and GraphQL Admin APIs.',
    deliverables: [
      {
        id: 'del-int-01',
        title: 'Technical Requirements & Functional Scope',
        description: 'Comprehensive specifications defining business problem, merchant user journeys, and functional requirements.',
        checklist: ['Detailed problem statement', 'User stories and acceptance criteria', 'API scope and permission matrix']
      },
      {
        id: 'del-int-02',
        title: 'System Architecture Diagram',
        description: 'Visual diagram mapping browser, App Bridge, Remix server, Redis queue, and Shopify GraphQL endpoints.',
        checklist: ['Complete component interaction topology', 'Data flow pathways', 'Security boundary documentation']
      },
      {
        id: 'del-int-03',
        title: 'Prisma Multi-Tenant Data Model',
        description: 'Prisma schema detailing Session, StoreSettings, and ProcessedWebhook models with foreign key constraints.',
        checklist: ['Session storage configuration', 'Store configuration schema', 'Webhook idempotency table schema']
      },
      {
        id: 'del-int-04',
        title: 'API Integration & Query Plan',
        description: 'Detailed plan of all Storefront and Admin GraphQL queries and mutations used by the application.',
        checklist: ['Complete list of GraphQL endpoints', 'Query cost budgeting calculations', 'Rate limit throttling strategy']
      },
      {
        id: 'del-int-05',
        title: 'GraphQL Query Examples & Fragments',
        description: 'Production-ready GraphQL query definitions with reusable fragments for product and inventory queries.',
        checklist: ['Product with variant and inventory query', 'Store location query', 'Reusable GraphQL fragments']
      },
      {
        id: 'del-int-06',
        title: 'GraphQL Mutation Examples & UserError Handling',
        description: 'Atomic mutation implementations with robust userErrors extraction and validation.',
        checklist: ['Inventory adjustment mutation', 'Metafield upsert mutation', 'userErrors validation handler']
      },
      {
        id: 'del-int-07',
        title: 'OAuth 2.0 & Permissions Security Plan',
        description: 'Implementation of OAuth handshake, HMAC validation, and least-privilege access scope management.',
        checklist: ['HMAC verification utility', 'Offline token storage lifecycle', 'Scope upgrade prompt handler']
      },
      {
        id: 'del-int-08',
        title: 'Webhook Processing & BullMQ Queue Pipeline',
        description: 'Event-driven webhook receiver pushing jobs into Redis BullMQ workers with fast 200 OK responses.',
        checklist: ['Express/Remix raw body HMAC verification', 'BullMQ queue worker with concurrency', 'Database idempotency check']
      },
      {
        id: 'del-int-09',
        title: 'Error Handling & Retry Backoff Strategy',
        description: 'Exponential backoff retry algorithms for handling 429 throttling and network failure resilience.',
        checklist: ['Exponential backoff logic', 'Dead Letter Queue (DLQ) configuration', 'Detailed error logging']
      },
      {
        id: 'del-int-10',
        title: 'Polaris & App Bridge UI Implementation',
        description: 'Responsive merchant interface built using Polaris components, App Bridge TitleBar, and Toast alerts.',
        checklist: ['Polaris Page, Layout, and Card components', 'App Bridge TitleBar and Toast triggers', 'Empty states and loading skeletons']
      },
      {
        id: 'del-int-11',
        title: 'Automated Testing & Mock Verification Plan',
        description: 'Unit and integration test suites covering GraphQL queries, HMAC verification, and webhook queues.',
        checklist: ['HMAC validator unit tests', 'Mock GraphQL query tests', 'Bogus Gateway checkout validation']
      },
      {
        id: 'del-int-12',
        title: 'Deployment & CI/CD Pipeline',
        description: 'Cloud deployment configuration (Docker, Fly.io, or AWS) with automated GitHub Actions CI/CD.',
        checklist: ['Production Dockerfile / build config', 'GitHub Actions workflow for automated deploy', 'Production database migrations']
      },
      {
        id: 'del-int-13',
        title: 'Technical README Documentation',
        description: 'Comprehensive setup guide detailing environment variables, CLI commands, and architecture overview.',
        checklist: ['Step-by-step local setup instructions', 'Environment variable reference table', 'Architecture overview notes']
      },
      {
        id: 'del-int-14',
        title: 'Troubleshooting & Observability Guide',
        description: 'Logging guide detailing error codes, common resolution steps, and health check endpoints.',
        checklist: ['Health check API endpoint (/healthz)', 'Error code directory', 'Log inspection commands']
      },
      {
        id: 'del-int-15',
        title: 'Security & Compliance Checklist',
        description: 'Verification of GDPR compliance webhooks, Content Security Policy headers, and token encryption.',
        checklist: ['Mandatory privacy webhooks implemented', 'CSP frame-ancestors configured', 'Zero exposed API secrets']
      }
    ]
  }
};

// Final Assessment Task
const INTERMEDIATE_ASSESSMENT_TASK = {
  id: 'shopify-dev-int-16',
  orderIndex: 16,
  title: 'Intermediate Assessment: Shopify Theme & App Engineering',
  description: 'Test your mastery of advanced theme JSON architectures, GraphQL Admin/Storefront APIs, App Bridge, OAuth 2.0, BullMQ webhook queues, and Checkout Extensibility.',
  duration: '45 mins',
  xpReward: 400,
  isFinalAssessment: true,
  type: 'assessment',
  passingScore: 25,
  totalQuestions: 30,
  questions: INTERMEDIATE_ASSESSMENT
};

const ALL_INTERMEDIATE_TASKS = [
  ...INTERMEDIATE_MODULES,
  INTERMEDIATE_PROJECT_TASK,
  INTERMEDIATE_ASSESSMENT_TASK
];

// Write file
const fileHeader = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export const SHOPIFY_DEV_INTERMEDIATE_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(INTERMEDIATE_ASSESSMENT, null, 2)};

export const SHOPIFY_DEV_INTERMEDIATE_TASKS: Task[] = ${JSON.stringify(ALL_INTERMEDIATE_TASKS, null, 2)};
`;

fs.writeFileSync(targetFile, fileHeader, 'utf8');
console.log('✅ Generated shopifyDeveloperIntermediate.data.ts successfully!');
console.log(`- Tasks count: ${ALL_INTERMEDIATE_TASKS.length}`);
console.log(`- MCQs count: ${INTERMEDIATE_ASSESSMENT.length}`);
