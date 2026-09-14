import { Task, QuizQuestion } from '../../types/roadmap.types';

export const SHOPIFY_DEV_INTERMEDIATE_ASSESSMENT: QuizQuestion[] = [
  {
    "id": 1,
    "topic": "Online Store 2.0 Dynamic Sections",
    "question": "How do Online Store 2.0 dynamic sections on product pages handle multiple merchant customization presets across different product templates?",
    "options": [
      "By creating alternate JSON templates (e.g. templates/product.preorder.json) that specify customized section order and block settings assigned to specific products in the Shopify Admin.",
      "By writing hardcoded if-statements checking product IDs inside a single global layout/theme.liquid file.",
      "By uploading a brand new theme for every product in the catalog.",
      "By using client-side localStorage to switch Liquid variables at runtime."
    ],
    "correctAnswer": 0,
    "explanation": "Online Store 2.0 enables alternate JSON templates (e.g., templates/product.preorder.json). Merchants assign these templates to specific products in the Shopify Admin without duplicating theme code or writing conditional Liquid overrides."
  },
  {
    "id": 2,
    "topic": "App Blocks & @app Support",
    "question": "When architecting a custom Shopify theme for compatibility with third-party apps, why is adding `{\"type\": \"@app\"}` to the `blocks` array of section schemas essential?",
    "options": [
      "It grants full root shell access on Shopify core servers.",
      "It allows App Blocks built by theme app extensions to be injected and reordered by merchants directly within that section via the Theme Editor.",
      "It disables all Liquid caching on the entire storefront.",
      "It converts theme sections into React Native components."
    ],
    "correctAnswer": 1,
    "explanation": "Supporting `{\"type\": \"@app\"}` in a section schema permits merchants to place App Blocks (such as product reviews, star ratings, or loyalty widgets) directly inside the section without requiring manual Liquid edits."
  },
  {
    "id": 3,
    "topic": "Theme JSON Settings & Schemas",
    "question": "In config/settings_data.json, what is the role of the \"current\" object versus the \"presets\" object?",
    "options": [
      "The \"current\" object is written in Python, while \"presets\" is written in SQL.",
      "The \"current\" object contains customer passwords, while \"presets\" contains credit card tokens.",
      "The \"current\" object stores active merchant-configured theme settings and block states, while \"presets\" contains the theme default visual styles (e.g. Default, Bold, Minimal).",
      "There is no difference; both objects are ignored by Shopify."
    ],
    "correctAnswer": 2,
    "explanation": "In `settings_data.json`, `current` holds the active customizations applied by the merchant in the Theme Editor, whereas `presets` defines pre-packaged theme styles provided by the theme developer."
  },
  {
    "id": 4,
    "topic": "Advanced Metafield Validation",
    "question": "When defining a Shopify Metafield definition in the Admin API, what purpose does the `validations` array serve?",
    "options": [
      "It executes unit tests on the merchant browser.",
      "It automatically translates text into 50 languages.",
      "It encrypts the entire product catalog with SHA-1.",
      "It enforces strict business constraints (such as min/max character lengths, integer ranges, regex patterns, or allowed preset choices) on merchant input."
    ],
    "correctAnswer": 3,
    "explanation": "Metafield definition validations ensure data integrity by enforcing rules such as numeric minimums/maximums, string length bounds, allowed choices, or regular expression pattern matches."
  },
  {
    "id": 5,
    "topic": "GraphQL Storefront API Pagination",
    "question": "How does cursor-based pagination operate when retrieving large lists of products via the GraphQL Storefront or Admin API?",
    "options": [
      "You specify a page size (`first: N`) along with a cursor (`after: $cursor`), retrieving `pageInfo.endCursor` and `pageInfo.hasNextPage` to request subsequent slices.",
      "You pass numeric page numbers (page: 1, page: 2) with fixed SQL offsets.",
      "You fetch all 100,000 products in a single unpaginated array.",
      "Shopify does not support pagination in GraphQL."
    ],
    "correctAnswer": 0,
    "explanation": "Shopify GraphQL APIs use Relay-style cursor pagination. You request `first: N, after: $cursor` and inspect `pageInfo { hasNextPage, endCursor }` to paginate efficiently without offset performance degradation."
  },
  {
    "id": 6,
    "topic": "Admin API GraphQL Queries",
    "question": "Which GraphQL Admin API query retrieves a specific product by its unique Global ID along with inventory quantities across all store locations?",
    "options": [
      "SELECT * FROM products WHERE id = 123",
      "query GetProductInventory($id: ID!) { product(id: $id) { id title variants(first: 5) { nodes { id inventoryItem { inventoryLevels(first: 5) { nodes { location { name } quantities(names: [\"available\"]) { quantity } } } } } } } }",
      "GET /admin/api/products/123/inventory",
      "fetchProductInventory(productId: \"123\")"
    ],
    "correctAnswer": 1,
    "explanation": "The GraphQL Admin API navigates the object graph from `product` to `variants`, `inventoryItem`, and `inventoryLevels`, retrieving granular location-specific available quantities in a single query."
  },
  {
    "id": 7,
    "topic": "Admin API GraphQL Cost & Throttling",
    "question": "How does the Shopify GraphQL Admin API enforce rate limits and calculate API consumption costs?",
    "options": [
      "By charging $0.05 USD directly to the developer credit card per query.",
      "By limiting each IP address to exactly 10 requests per calendar month.",
      "Through a leaky bucket algorithm with an allocated cost pool (e.g. 1000 points restoring at 50 points/second), where each field has a defined cost returned in `extensions.cost`.",
      "By pausing the server for 60 seconds after every 3 queries."
    ],
    "correctAnswer": 2,
    "explanation": "Shopify GraphQL APIs use a calculated cost model. Each requested field contributes points. Responses include `extensions.cost { requestedQueryCost, actualQueryCost, throttleStatus }`, and the bucket refills continuously over time."
  },
  {
    "id": 8,
    "topic": "Shopify App Architecture",
    "question": "In modern Shopify app development using Remix or Node, what is the purpose of the App Bridge library?",
    "options": [
      "It replaces HTML with PDF documents.",
      "It compiles Liquid code into native iOS swift binaries.",
      "It connects Shopify directly to local MySQL databases without internet.",
      "It is an embedded UI bridge that allows the web app running inside an iframe in the Shopify Admin to communicate securely with the parent Shopify Admin shell for titles, modals, and toasts."
    ],
    "correctAnswer": 3,
    "explanation": "Shopify App Bridge provides seamless, secure communication between embedded iframe applications and the surrounding Shopify Admin, enabling unified navigation, modal dialogs, contextual save bars, and toasts."
  },
  {
    "id": 9,
    "topic": "Session Tokens (JWT) vs Legacy Cookies",
    "question": "Why does modern Shopify embedded app architecture require Session Tokens (JWT) instead of traditional third-party session cookies?",
    "options": [
      "Because modern browsers (Safari, Chrome, Firefox) block third-party cookies by default inside iframes (ITP), breaking cookie-based auth in embedded apps.",
      "Because cookies can only hold 4 bytes of data.",
      "Because JWT tokens delete database records on every request.",
      "Because Shopify banned all JavaScript from apps in 2022."
    ],
    "correctAnswer": 0,
    "explanation": "Intelligent Tracking Prevention (ITP) and third-party cookie blocking prevent embedded iframes from maintaining traditional session cookies. App Bridge Session Tokens (short-lived signed JWTs) provide reliable, privacy-safe authentication."
  },
  {
    "id": 10,
    "topic": "OAuth 2.0 Authorization Flow",
    "question": "During the Shopify OAuth 2.0 installation flow, what is the critical step performed immediately after the merchant approves requested access scopes?",
    "options": [
      "The app displays the merchant password in the URL bar.",
      "Shopify redirects to the app callback URL with a temporary authorization `code` and `hmac`, which the app backend validates and exchanges via POST to `/admin/oauth/access_token` for a permanent offline access token.",
      "Shopify emails the source code to the merchant.",
      "The app restarts the merchant store server."
    ],
    "correctAnswer": 1,
    "explanation": "In OAuth 2.0, Shopify returns a temporary authorization code. The app backend verifies the HMAC parameter to prevent forgery and exchanges the code with Shopify’s token endpoint for an encrypted access token."
  },
  {
    "id": 11,
    "topic": "OAuth Access Scopes & Least Privilege",
    "question": "Why should a custom Shopify app request only the minimum required access scopes (e.g. `read_products` instead of `write_orders, write_customers`)?",
    "options": [
      "Because each scope costs $500 per month on Shopify.",
      "Because requesting more than 1 scope crashes the Shopify CLI.",
      "Following the principle of least privilege minimizes security exposure, builds merchant trust, and reduces approval friction during Shopify App Store reviews.",
      "Because apps with write permissions cannot use GraphQL."
    ],
    "correctAnswer": 2,
    "explanation": "The principle of least privilege ensures your app only accesses data essential for its operation, minimizing the blast radius in case of credentials leakage and meeting Shopify security review standards."
  },
  {
    "id": 12,
    "topic": "Webhooks & Message Queues",
    "question": "When receiving high-volume webhooks (e.g. during Black Friday flash sales), what is the recommended architectural pattern for processing payloads reliably?",
    "options": [
      "Block the client browser until the database finishes indexing.",
      "Perform all heavy image processing and database joins synchronously in the HTTP request before responding.",
      "Drop 90% of incoming webhooks to avoid server load.",
      "Acknowledge the webhook with HTTP 200 OK immediately after HMAC validation, push the job to a Redis/BullMQ background queue, and process business logic asynchronously in worker threads."
    ],
    "correctAnswer": 3,
    "explanation": "To satisfy Shopify’s 5-second timeout and handle traffic spikes, webhook handlers must validate HMAC, push payloads to durable message queues (Redis/BullMQ/SQS), return 200 OK immediately, and process jobs with isolated worker pools."
  },
  {
    "id": 13,
    "topic": "Shopify Cart API Line Item Properties",
    "question": "When a customer customizes a product (e.g. enters custom engraving text) before adding to cart, where is this data stored in the Shopify Cart object?",
    "options": [
      "Inside the line item `properties` hash (e.g. `properties: { \"Engraving\": \"Skillora AI\" }`).",
      "In a temporary global CSS variable.",
      "In the store owner’s personal email inbox.",
      "Inside the theme settings_schema.json file."
    ],
    "correctAnswer": 0,
    "explanation": "Custom customer inputs (engraving, gift notes, custom file uploads) are passed as line item `properties` in the `/cart/add.js` payload and persist through checkout and order fulfillment."
  },
  {
    "id": 14,
    "topic": "Theme App Extensions vs Direct Theme Edits",
    "question": "What is the architectural advantage of delivering app functionality via Theme App Extensions (App Blocks & App Embeds) instead of injecting Liquid code directly via the Asset API?",
    "options": [
      "Theme app extensions run only on Internet Explorer.",
      "Theme app extensions keep app code isolated, enable visual merchant control in the Theme Editor, and ensure 100% clean uninstalls without leaving ghost Liquid code behind.",
      "Theme app extensions cannot use JavaScript.",
      "Theme app extensions delete the theme when uninstalled."
    ],
    "correctAnswer": 1,
    "explanation": "Theme App Extensions (introduced in OS 2.0) eliminate \"theme pollution\". When a merchant uninstalls an app, all associated App Blocks and Embeds are cleanly removed without leaving orphaned code in theme files."
  },
  {
    "id": 15,
    "topic": "GraphQL Admin API Mutations",
    "question": "When executing the `productCreate` mutation in the GraphQL Admin API, how does the API notify the client of validation failures (e.g. missing required title)?",
    "options": [
      "By crashing the HTTP server with 500 Internal Server Error.",
      "By sending an SMS message to the store owner.",
      "Through the `userErrors` array inside the mutation response containing the specific `field` and `message`.",
      "By returning an empty string."
    ],
    "correctAnswer": 2,
    "explanation": "Shopify GraphQL mutations return a 200 OK HTTP response with a `userErrors` array. Developers must inspect `userErrors` to identify validation errors and present clear feedback to users."
  },
  {
    "id": 16,
    "topic": "Section Rendering API",
    "question": "How does the Shopify Section Rendering API optimize client-side cart drawer updates when an item is added via AJAX?",
    "options": [
      "It forces the browser to refresh all tabs.",
      "It renders PDF invoices inside the browser console.",
      "It replaces Shopify themes with WordPress plugins.",
      "It allows client JavaScript to request pre-rendered HTML for specific section IDs (e.g. `?sections=cart-drawer,cart-icon-bubble`) directly from the server, eliminating client-side template duplication."
    ],
    "correctAnswer": 3,
    "explanation": "The Section Rendering API lets client-side JavaScript request HTML partials for specific sections on the fly, ensuring server-rendered Liquid consistency without writing duplicate client template logic."
  },
  {
    "id": 17,
    "topic": "Shopify CLI App Development",
    "question": "When starting local development for a Shopify App using Shopify CLI (`shopify app dev`), what does the CLI automatically provision?",
    "options": [
      "A secure Cloudflare tunnel/proxy for webhook forwarding, environment variables, automatic App Bridge registration, and a development store install link.",
      "A physical dedicated server shipped to the developer address.",
      "A new credit card with $10,000 credit.",
      "A live production domain on the public internet."
    ],
    "correctAnswer": 0,
    "explanation": "`shopify app dev` establishes a local SSL tunnel, syncs configuration files (`shopify.app.toml`), forwards webhooks to localhost, sets up OAuth credentials, and generates a one-click installation URL on your test store."
  },
  {
    "id": 18,
    "topic": "Metaobject Storefront Routing",
    "question": "How can Shopify Metaobjects be configured to generate individual public landing pages on the Online Store (e.g. /pages/authors/alex-dev)?",
    "options": [
      "By manually writing static HTML files for every author in the assets directory.",
      "By enabling Web Pages capabilities on the Metaobject definition in Shopify Admin and creating a matching `templates/metaobject/author.json` template in the theme.",
      "Metaobjects can never have public web pages.",
      "By converting metaobjects into blog posts with a cron job."
    ],
    "correctAnswer": 1,
    "explanation": "Shopify allows Metaobjects to act as standalone web pages. Enabling the Web Pages feature and creating a `templates/metaobject/{type}.json` template provides dynamic routing and SEO capabilities for custom entities."
  },
  {
    "id": 19,
    "topic": "Theme Performance & Font Loading",
    "question": "Which font loading strategy is recommended in Shopify themes to prevent Flash of Invisible Text (FOIT) and improve First Contentful Paint (FCP)?",
    "options": [
      "Disabling all typography and using only raster images for text.",
      "Loading 50 Google Fonts synchronously in the document head.",
      "Using `font-display: swap;` on custom font-face declarations and preloading critical web fonts in layout/theme.liquid.",
      "Embedding 10MB TTF font files directly into HTML attributes."
    ],
    "correctAnswer": 2,
    "explanation": "Applying `font-display: swap;` renders fallback system fonts immediately while custom fonts download, preventing invisible text and accelerating perceived page load speeds."
  },
  {
    "id": 20,
    "topic": "App Data Persistence & Databases",
    "question": "When developing a multi-tenant Shopify App that stores custom configuration for thousands of stores, how should store records be partitioned in the database?",
    "options": [
      "By storing merchant settings in the client browser cookie.",
      "By saving all store data in a single plain text file on the developer desktop.",
      "By creating a completely new database server instance for every single merchant.",
      "By using a composite primary key or foreign key index on the unique Shopify shop domain (`shop_domain`, e.g. `store.myshopify.com`) and verifying shop identity on every authenticated request."
    ],
    "correctAnswer": 3,
    "explanation": "Multi-tenant Shopify applications index records by `shop_domain` or `shop_id` with strict foreign key constraints and enforce tenant isolation in all database queries to prevent cross-tenant data leakage."
  },
  {
    "id": 21,
    "topic": "GraphQL Query Aliases & Directives",
    "question": "In GraphQL Admin queries, what is the purpose of using field aliases (e.g. `primaryImage: image(id: $id1)`)?",
    "options": [
      "To rename returned fields in the response and fetch the same field multiple times with different arguments in a single query.",
      "To hide fields from the network inspector.",
      "To convert GraphQL into REST automatically.",
      "To encrypt query responses on the server."
    ],
    "correctAnswer": 0,
    "explanation": "GraphQL field aliases let you query the same field multiple times with different arguments (e.g. querying two different variant images) within the same selection set while renaming the output keys."
  },
  {
    "id": 22,
    "topic": "GraphQL Bulk Operations API",
    "question": "For exporting or synchronizing millions of products or orders from Shopify to an external database, which Admin API mechanism is recommended over standard pagination?",
    "options": [
      "Writing an infinite while-loop that sends 1,000 REST requests per second.",
      "The GraphQL Bulk Operations API (`bulkOperationRunQuery`), which compiles queries into a single asynchronous JSON Lines (JSONL) file export on Shopify cloud infrastructure.",
      "Asking the merchant to manually copy and paste products into Excel.",
      "Downloading raw database SQL dumps from Shopify support."
    ],
    "correctAnswer": 1,
    "explanation": "The GraphQL Bulk Operations API handles millions of records without hitting API rate limits. Shopify executes the query asynchronously and produces a downloadable JSONL file stream."
  },
  {
    "id": 23,
    "topic": "App Embed Blocks & Global Injection",
    "question": "Where are App Embed blocks configured and activated by merchants in Online Store 2.0 themes?",
    "options": [
      "Inside the payment gateway settings.",
      "In the store DNS configuration panel.",
      "In the \"App embeds\" tab of the visual Theme Editor, allowing merchants to toggle global app scripts on or off across all pages without editing theme code.",
      "In the customer account login page."
    ],
    "correctAnswer": 2,
    "explanation": "App Embed blocks live in the \"App embeds\" sidebar tab in the Theme Editor. Merchants can activate or deactivate global scripts (such as chat widgets or analytics tags) with a simple toggle switch."
  },
  {
    "id": 24,
    "topic": "Liquid Iteration Limits & Performance",
    "question": "What is the hard architectural limit on the number of iterations allowed within a single `for` loop in Shopify Liquid templates?",
    "options": [
      "Exactly 1 item per loop.",
      "1,000,000 items per loop.",
      "There is no limit; Liquid loops run indefinitely.",
      "50 items per loop (unless wrapped with `paginate` which allows up to 50 items per page)."
    ],
    "correctAnswer": 3,
    "explanation": "Shopify Liquid enforces a strict limit of 50 iterations per loop on collections and product arrays to protect server performance. Accessing more items requires pagination."
  },
  {
    "id": 25,
    "topic": "Theme Localization & Translations",
    "question": "How are multi-language storefront strings structured and accessed in Online Store 2.0 themes?",
    "options": [
      "Strings are stored as key-value JSON trees in `locales/en.default.json`, `locales/fr.json`, etc., and rendered in Liquid using the `{{ 'namespace.key' | t }}` filter.",
      "Strings are hardcoded in Liquid with Google Translate iframes.",
      "Translations are saved in the browser localStorage.",
      "Translations require building 5 separate themes for each language."
    ],
    "correctAnswer": 0,
    "explanation": "Locale JSON files in `locales/` define translation strings referenced via `{{ 'general.newsletter.submit' | t }}`. Shopify automatically serves the matching locale based on buyer language settings."
  },
  {
    "id": 26,
    "topic": "Shopify App Bridge Toast & Modals",
    "question": "When using Shopify App Bridge in a React/Remix embedded app, what is the correct method for displaying native administrative toast notifications to merchants?",
    "options": [
      "Creating a custom HTML `<div class=\"toast\">` that breaks out of the iframe using CSS hacks.",
      "Using the `shopify.toast.show(\"Action succeeded!\")` API from App Bridge.",
      "Triggering a native browser `alert()` modal dialog.",
      "Sending an email to the merchant on every button click."
    ],
    "correctAnswer": 1,
    "explanation": "Shopify App Bridge provides native UI primitives like `shopify.toast.show()`, `shopify.modal.show()`, and `shopify.saveBar.show()` that render directly in the parent Shopify Admin interface."
  },
  {
    "id": 27,
    "topic": "Secure Webhook De-registration",
    "question": "What happens if your app’s webhook receiver endpoint returns HTTP 410 Gone or consistently fails with 5xx errors for 48 hours?",
    "options": [
      "Shopify shuts down the merchant’s entire store.",
      "Shopify sends a police notification to the developer.",
      "Shopify automatically deletes the webhook subscription to protect platform resources.",
      "The app is automatically awarded 5 stars on the App Store."
    ],
    "correctAnswer": 2,
    "explanation": "If a webhook endpoint fails continuously for 48 hours or responds with HTTP 410 Gone, Shopify marks the subscription broken and automatically removes it."
  },
  {
    "id": 28,
    "topic": "Theme Asset Bundling with Vite",
    "question": "When using Vite to bundle TypeScript and Tailwind CSS for a Shopify theme, why must output assets be placed into the theme’s `assets/` directory with static filenames?",
    "options": [
      "Because CSS files must be written in XML format.",
      "Because Vite only works on Linux machines.",
      "Because Shopify does not support JavaScript files larger than 10 bytes.",
      "Because Shopify Liquid references theme assets using `{{ 'theme.js' | asset_url }}`, requiring predictable file paths without dynamic hash renames that break Liquid filters."
    ],
    "correctAnswer": 3,
    "explanation": "Liquid’s `asset_url` filter resolves asset URLs based on predictable filenames (e.g. `theme.js`, `theme.css`). Build tools like Vite must output clean static filenames to `assets/`."
  },
  {
    "id": 29,
    "topic": "Storefront API Customer Authentication",
    "question": "In a custom headless storefront, how does a user authenticate and manage their customer account via the Storefront API?",
    "options": [
      "By calling the `customerAccessTokenCreate` mutation with email and password, receiving a `customerAccessToken` passed in subsequent customer queries.",
      "By passing the store owner’s Admin API token in the client URL.",
      "By storing customer passwords in plain text cookies.",
      "Customer accounts are not supported in the Storefront API."
    ],
    "correctAnswer": 0,
    "explanation": "The Storefront API provides `customerAccessTokenCreate`, returning a secure customer access token that unlocks customer order history, saved addresses, and profile mutations."
  },
  {
    "id": 30,
    "topic": "App Review & Security Standards",
    "question": "Prior to submitting a custom or public app for official Shopify App Review, which security vulnerability must be rigorously verified as patched?",
    "options": [
      "Ensuring the app has at least 1,000 CSS animations on the landing page.",
      "Ensuring all OAuth redirects validate the `hmac` query parameter, verifying all Webhooks check HMAC SHA-256 signatures, and enforcing strict CORS and CSP headers against Clickjacking (X-Frame-Options / frame-ancestors).",
      "Making sure all API secrets are printed to the browser console for debugging.",
      "Disabling HTTPS and running the app on unencrypted port 80."
    ],
    "correctAnswer": 1,
    "explanation": "Shopify App Review enforces strict security checks: valid HMAC validation on OAuth and Webhooks, Content Security Policy (`frame-ancestors https://*.myshopify.com https://admin.shopify.com`), and sanitized user inputs."
  }
];

export const SHOPIFY_DEV_INTERMEDIATE_TASKS: Task[] = [
  {
    "id": "shopify-dev-int-01",
    "orderIndex": 1,
    "title": "1. Advanced Shopify Theme Architecture",
    "description": "Master advanced Online Store 2.0 architectures: modular section groups, alternate JSON templates, dynamic template routing, and composite theme component systems.",
    "duration": "60 mins",
    "xpReward": 200,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-arch-01",
        "title": "Advanced OS 2.0 Architecture Patterns",
        "type": "documentation",
        "url": "https://shopify.dev/docs/themes/architecture"
      }
    ],
    "lessonContent": {
      "overview": "Enterprise Shopify themes require scalable architectures that handle hundreds of unique landing pages, varied product types (pre-orders, digital downloads, bundles), and bespoke collection layouts. In this module, you will master alternate JSON template generation, section group inheritance, and dynamic template assignment.",
      "objectives": [
        "Design composable theme architectures using alternate JSON templates (`product.bundle.json`, `collection.editorial.json`).",
        "Implement section groups for global layout modularity across headers, footers, and modal overlays.",
        "Manage merchant settings inheritance across multi-layout configurations.",
        "Structure scalable theme asset pipelines using modern bundlers."
      ],
      "sections": [
        {
          "id": "sec-adv-json-arch",
          "title": "Alternate JSON Templates & Template Assignment",
          "content": "By creating alternate JSON templates, developers provide merchants with specialized layouts. When a merchant selects \"product.bundle\" in the Shopify Admin, Shopify loads `templates/product.bundle.json`, rendering a tailored hierarchy of sections and custom blocks.",
          "codeSnippets": [
            {
              "language": "json",
              "filename": "templates/product.bundle.json",
              "title": "Specialized Pre-Order & Bundle Product JSON Template",
              "code": "{\n  \"sections\": {\n    \"bundle_hero\": {\n      \"type\": \"bundle-product-hero\",\n      \"blocks\": {\n        \"badge\": { \"type\": \"exclusive_badge\", \"settings\": { \"text\": \"Limited Edition Bundle\" } },\n        \"title\": { \"type\": \"title\", \"settings\": {} },\n        \"bundle_selector\": { \"type\": \"bundle_tier_selector\", \"settings\": { \"discount_percentage\": 15 } },\n        \"buy_button\": { \"type\": \"buy_buttons\", \"settings\": { \"show_dynamic_checkout\": true } }\n      },\n      \"block_order\": [\"badge\", \"title\", \"bundle_selector\", \"buy_button\"],\n      \"settings\": { \"highlight_color\": \"#10B981\" }\n    },\n    \"bundle_breakdown\": {\n      \"type\": \"bundle-items-included\",\n      \"settings\": { \"heading\": \"What's Included in This Bundle\" }\n    },\n    \"faq_accordion\": {\n      \"type\": \"collapsible-faq-list\",\n      \"settings\": { \"heading\": \"Bundle & Shipping FAQ\" }\n    }\n  },\n  \"order\": [\"bundle_hero\", \"bundle_breakdown\", \"faq_accordion\"]\n}",
              "explanation": "Alternate product JSON template tailored for bundle sales with specialized section blocks."
            },
            {
              "language": "liquid",
              "filename": "sections/footer-group.json",
              "title": "Modular Footer Section Group",
              "code": "{\n  \"name\": \"Footer Group\",\n  \"type\": \"footer\",\n  \"sections\": {\n    \"newsletter_signup\": {\n      \"type\": \"newsletter-section\",\n      \"settings\": { \"heading\": \"Join the Developer Newsletter\" }\n    },\n    \"main_footer\": {\n      \"type\": \"footer-navigation\",\n      \"settings\": { \"menu\": \"footer-menu\", \"show_payment_methods\": true }\n    }\n  },\n  \"order\": [\"newsletter_signup\", \"main_footer\"]\n}",
              "explanation": "Section group JSON defining modular, reorderable footer layout components."
            }
          ],
          "proTip": "Never delete or rename standard templates (`product.json`, `index.json`, `collection.json`, `cart.json`, `404.json`). Shopify requires these baseline templates as fallbacks for all stores.",
          "commonMistakes": [
            "Creating monolithic sections with hardcoded layouts instead of breaking features into atomic sections and blocks.",
            "Forgetting to configure block_order in JSON templates, which causes blocks to fail to render."
          ]
        }
      ],
      "keyTakeaways": [
        "Alternate JSON templates provide customized layouts assigned per product or collection in Shopify Admin.",
        "Section groups allow global sections to be added, reordered, and removed modularly.",
        "Maintain baseline JSON templates for all standard Shopify resource types."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-01",
          "title": "Create an Editorial Collection JSON Template",
          "instructions": "Construct templates/collection.editorial.json featuring an editorial hero section and a curated story grid.",
          "starterCode": "{\n  \"sections\": {},\n  \"order\": []\n}",
          "solutionCode": "{\n  \"sections\": {\n    \"editorial_hero\": {\n      \"type\": \"editorial-hero-banner\",\n      \"settings\": { \"show_date\": true }\n    },\n    \"story_grid\": {\n      \"type\": \"editorial-story-grid\",\n      \"settings\": { \"posts_per_row\": 2 }\n    }\n  },\n  \"order\": [\"editorial_hero\", \"story_grid\"]\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-02",
    "orderIndex": 2,
    "title": "2. Advanced Sections, Blocks and Theme Editor Integration",
    "description": "Engineer advanced section blocks, dynamic app block support (@app), responsive layout settings, and deep Theme Editor JavaScript event synchronization.",
    "duration": "55 mins",
    "xpReward": 195,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-blocks-01",
        "title": "Theme App Extension Blocks Guide",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/online-store/theme-app-extensions/extensions-framework"
      }
    ],
    "lessonContent": {
      "overview": "Sections become truly powerful when they leverage dynamic block schemas and seamless Theme Editor integration. In this module, you will build complex multi-block sections with App Block support (`@app`), nested tab/accordion blocks, and dynamic JavaScript observers that re-initialize components on merchant edits.",
      "objectives": [
        "Implement dynamic `@app` block support for seamless third-party app integration.",
        "Engineer multi-type block schemas with conditional rendering.",
        "Bind Theme Editor JavaScript events (`shopify:section:load`, `shopify:block:select`) to custom Web Components.",
        "Handle dynamic block limits and responsive column configurations."
      ],
      "sections": [
        {
          "id": "sec-adv-blocks",
          "title": "Dynamic Block Schemas & App Block Integration",
          "content": "By including `{\"type\": \"@app\"}` in the blocks array, you allow merchants to place third-party app widgets directly into your theme sections without modifying Liquid code. When a merchant adds an app block, Shopify renders it dynamically inside the section.",
          "codeSnippets": [
            {
              "language": "liquid",
              "filename": "sections/main-product-details.liquid",
              "title": "Advanced Product Section with App Block & Custom Block Types",
              "code": "<section class=\"main-product py-12 px-4 max-w-7xl mx-auto\" data-section-id=\"{{ section.id }}\">\n  <div class=\"grid grid-cols-1 lg:grid-cols-2 gap-12\">\n    <div class=\"product-gallery\">\n      <!-- Media gallery component -->\n      {% render 'product-media-gallery', product: product %}\n    </div>\n\n    <div class=\"product-info space-y-6\">\n      {% for block in section.blocks %}\n        <div class=\"product-block product-block--{{ block.type }}\" {{ block.shopify_attributes }}>\n          {% case block.type %}\n            {% when '@app' %}\n              {% render block %}\n            {% when 'title' %}\n              <h1 class=\"text-3xl font-bold text-gray-900\">{{ product.title | escape }}</h1>\n            {% when 'price' %}\n              <div class=\"text-2xl font-bold text-brand\" data-product-price>\n                {{ product.selected_or_first_available_variant.price | money }}\n              </div>\n            {% when 'description' %}\n              <div class=\"prose text-gray-600 rte\">{{ product.description }}</div>\n            {% when 'custom_liquid' %}\n              {{ block.settings.custom_liquid }}\n          {% endcase %}\n        </div>\n      {% endfor %}\n    </div>\n  </div>\n</section>\n\n{% schema %}\n{\n  \"name\": \"Product Details\",\n  \"tag\": \"section\",\n  \"class\": \"section-product-details\",\n  \"blocks\": [\n    { \"type\": \"@app\" },\n    { \"type\": \"title\", \"name\": \"Product Title\", \"limit\": 1 },\n    { \"type\": \"price\", \"name\": \"Product Price\", \"limit\": 1 },\n    { \"type\": \"description\", \"name\": \"Description\", \"limit\": 1 },\n    {\n      \"type\": \"custom_liquid\",\n      \"name\": \"Custom Liquid\",\n      \"settings\": [\n        { \"type\": \"liquid\", \"id\": \"custom_liquid\", \"label\": \"Custom Liquid Code\" }\n      ]\n    }\n  ],\n  \"presets\": [\n    {\n      \"name\": \"Product Details\",\n      \"blocks\": [\n        { \"type\": \"title\" },\n        { \"type\": \"price\" },\n        { \"type\": \"description\" }\n      ]\n    }\n  ]\n}\n{% endschema %}",
              "explanation": "Comprehensive product section with @app block integration and custom Liquid block."
            }
          ],
          "proTip": "When rendering `@app` blocks, use `{% render block %}` inside the block loop. Shopify automatically handles invoking the third-party app extension Liquid code safely.",
          "commonMistakes": [
            "Omitting `{% render block %}` for `@app` blocks, preventing merchant app widgets from appearing.",
            "Forgetting `limit: 1` on blocks that should only appear once (like Product Title or Price)."
          ]
        }
      ],
      "keyTakeaways": [
        "Include `{\"type\": \"@app\"}` in section block schemas to support Theme App Extensions.",
        "Use `limit` properties on blocks to prevent merchants from accidentally duplicating singleton elements.",
        "Render `@app` blocks with `{% render block %}` inside the case switch."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-02",
          "title": "Define Section Schema with App Block Support",
          "instructions": "Write the blocks schema for a featured product section that supports title, buy buttons, and third-party app blocks.",
          "starterCode": "{% schema %}\n{\n  \"name\": \"Featured Product\",\n  \"blocks\": []\n}\n{% endschema %}",
          "solutionCode": "{% schema %}\n{\n  \"name\": \"Featured Product\",\n  \"blocks\": [\n    { \"type\": \"@app\" },\n    { \"type\": \"title\", \"name\": \"Title\", \"limit\": 1 },\n    { \"type\": \"buy_buttons\", \"name\": \"Buy Buttons\", \"limit\": 1 }\n  ]\n}\n{% endschema %}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-03",
    "orderIndex": 3,
    "title": "3. Shopify Theme JSON and Configuration",
    "description": "Master global theme settings architectures in settings_schema.json, preset styles, typography pickers, color schemes, and configuration migrations.",
    "duration": "50 mins",
    "xpReward": 190,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-cfg-01",
        "title": "Settings Schema Reference",
        "type": "documentation",
        "url": "https://shopify.dev/docs/themes/architecture/config/settings-schema-json"
      }
    ],
    "lessonContent": {
      "overview": "The `config/settings_schema.json` file is the central configuration engine of a Shopify theme. It dictates global theme styling, color palettes, typography scales, layout widths, and social sharing metadata. In this module, you will learn how to design intuitive configuration categories, color schemes, and seamless preset migration routines.",
      "objectives": [
        "Architect modular settings schemas with categorized sections and informative merchant tooltips.",
        "Implement Shopify Font Picker and Color Scheme configuration settings.",
        "Manage theme preset styles in `config/settings_data.json`.",
        "Handle backward-compatible theme settings updates without breaking live merchant configurations."
      ],
      "sections": [
        {
          "id": "sec-theme-config",
          "title": "Global Theme Settings Schema Architecture",
          "content": "Settings defined in `settings_schema.json` are accessible globally across all Liquid templates and sections via `settings.<setting_id>`. By organizing settings into logical categories (Brand, Typography, Colors, Layout), you create an intuitive merchant experience.",
          "codeSnippets": [
            {
              "language": "json",
              "filename": "config/settings_schema.json",
              "title": "Advanced Theme Settings Schema Structure",
              "code": "[\n  {\n    \"name\": \"theme_info\",\n    \"theme_name\": \"Skillora Pro Commerce\",\n    \"theme_version\": \"2.0.0\",\n    \"theme_author\": \"Skillora AI Engineering\",\n    \"theme_documentation_url\": \"https://shopify.dev/docs/themes\"\n  },\n  {\n    \"name\": \"Brand Colors\",\n    \"settings\": [\n      {\n        \"type\": \"color\",\n        \"id\": \"color_brand_primary\",\n        \"label\": \"Primary Accent\",\n        \"default\": \"#2563EB\"\n      },\n      {\n        \"type\": \"color_background\",\n        \"id\": \"gradient_hero_bg\",\n        \"label\": \"Hero Gradient Background\",\n        \"default\": \"linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)\"\n      }\n    ]\n  },\n  {\n    \"name\": \"Typography Scale\",\n    \"settings\": [\n      {\n        \"type\": \"font_picker\",\n        \"id\": \"font_headings\",\n        \"label\": \"Heading Font\",\n        \"default\": \"inter_n7\"\n      },\n      {\n        \"type\": \"range\",\n        \"id\": \"heading_scale\",\n        \"min\": 80,\n        \"max\": 140,\n        \"step\": 5,\n        \"unit\": \"%\",\n        \"label\": \"Heading Font Scale\",\n        \"default\": 100\n      }\n    ]\n  }\n]",
              "explanation": "Modular settings_schema.json providing brand colors, gradients, and font scaling."
            }
          ],
          "proTip": "Use `type: \"color_background\"` instead of standard `color` when you want merchants to have the option to configure CSS gradients as well as solid colors.",
          "commonMistakes": [
            "Changing setting IDs in newer theme releases, which disconnects existing merchant configurations upon theme update.",
            "Failing to provide default values for settings in schema definitions."
          ]
        }
      ],
      "keyTakeaways": [
        "Global settings in `settings_schema.json` are accessible anywhere via `settings.<id>`.",
        "Use `color_background` for gradient support and `font_picker` for system and web fonts.",
        "Preserve setting IDs across releases to ensure smooth merchant updates."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-03",
          "title": "Add Layout Max Width Setting",
          "instructions": "Write a settings_schema.json category for Layout containing a range setting for max page width (1000px to 1600px).",
          "starterCode": "{\n  \"name\": \"Layout\",\n  \"settings\": []\n}",
          "solutionCode": "{\n  \"name\": \"Layout\",\n  \"settings\": [\n    {\n      \"type\": \"range\",\n      \"id\": \"page_max_width\",\n      \"min\": 1000,\n      \"max\": 1600,\n      \"step\": 50,\n      \"unit\": \"px\",\n      \"label\": \"Maximum Page Width\",\n      \"default\": 1280\n    }\n  ]\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-04",
    "orderIndex": 4,
    "title": "4. Advanced Metafields and Metaobjects",
    "description": "Model relational multi-field data structures, Metaobject web pages, Admin API CRUD mutations, and programmatic data seeding.",
    "duration": "55 mins",
    "xpReward": 200,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-meta-01",
        "title": "Metaobjects GraphQL Admin API",
        "type": "documentation",
        "url": "https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectCreate"
      }
    ],
    "lessonContent": {
      "overview": "Enterprise data modeling in Shopify extends far beyond single text metafields. In this module, you will learn how to create and manage relational Metaobjects via GraphQL Admin API mutations, configure Metaobject Web Pages with dynamic routing, and seed structured content programmatically.",
      "objectives": [
        "Create Metaobject definitions with multiple typed fields using GraphQL Admin API mutations.",
        "Perform programmatic CRUD mutations on Metaobject records (`metaobjectCreate`, `metaobjectUpdate`).",
        "Configure Metaobject Web Pages with SEO metadata and dynamic JSON templates.",
        "Query relational Metaobject references in Liquid and GraphQL."
      ],
      "sections": [
        {
          "id": "sec-metaobject-api",
          "title": "Creating & Mutating Metaobjects via GraphQL Admin API",
          "content": "Developers use the Admin API to define Metaobject definitions and create records programmatically. A metaobject definition specifies field types (single_line_text, rich_text, file_reference). Once created, entries can be queried globally or linked to products via metafield references.",
          "codeSnippets": [
            {
              "language": "graphql",
              "filename": "mutations/create-metaobject-definition.graphql",
              "title": "GraphQL Mutation: Create Metaobject Definition",
              "code": "mutation CreateAuthorMetaobjectDefinition {\n  metaobjectDefinitionCreate(\n    definition: {\n      name: \"Author Profile\"\n      type: \"author_profile\"\n      access: {\n        storefront: PUBLIC_READ\n      }\n      fieldDefinitions: [\n        {\n          key: \"full_name\"\n          name: \"Full Name\"\n          type: \"single_line_text_field\"\n          required: true\n        },\n        {\n          key: \"biography\"\n          name: \"Biography\"\n          type: \"multi_line_text_field\"\n        },\n        {\n          key: \"avatar\"\n          name: \"Avatar Photo\"\n          type: \"file_reference\"\n        },\n        {\n          key: \"github_url\"\n          name: \"GitHub Profile URL\"\n          type: \"url\"\n        }\n      ]\n    }\n  ) {\n    metaobjectDefinition {\n      id\n      type\n    }\n    userErrors {\n      field\n      message\n    }\n  }\n}",
              "explanation": "Creating a multi-field author_profile metaobject definition with public storefront read access."
            },
            {
              "language": "graphql",
              "filename": "mutations/create-metaobject-entry.graphql",
              "title": "GraphQL Mutation: Create Metaobject Record Entry",
              "code": "mutation CreateAuthorRecord {\n  metaobjectCreate(\n    metaobject: {\n      type: \"author_profile\"\n      handle: \"alex-chen-lead-architect\"\n      fields: [\n        { key: \"full_name\", value: \"Alex Chen\" },\n        { key: \"biography\", value: \"Principal Shopify Architect specializing in headless commerce and high-concurrency systems.\" },\n        { key: \"github_url\", value: \"https://github.com/alexchen-dev\" }\n      ]\n    }\n  ) {\n    metaobject {\n      id\n      handle\n    }\n    userErrors {\n      field\n      message\n    }\n  }\n}",
              "explanation": "Inserting an individual author record entry programmatically via GraphQL."
            }
          ],
          "proTip": "Always ensure `access.storefront: PUBLIC_READ` is configured on the Metaobject definition. Without this, storefront Liquid templates and Storefront API queries will receive null when trying to access metaobject values.",
          "commonMistakes": [
            "Forgetting `access: { storefront: PUBLIC_READ }`, preventing storefront visibility.",
            "Passing invalid JSON formats when creating `list.single_line_text_field` values (must be formatted as stringified JSON arrays like `\"[\\\"value1\\\", \\\"value2\\\"]\"`)."
          ]
        }
      ],
      "keyTakeaways": [
        "Define Metaobject schemas with `metaobjectDefinitionCreate` specifying typed fields and storefront access.",
        "Insert records with `metaobjectCreate` matching declared field keys.",
        "Expose Metaobjects as web pages with `templates/metaobject/{type}.json` templates."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-04",
          "title": "Write Metaobject Record Mutation",
          "instructions": "Write a GraphQL mutation to update the biography of an existing metaobject record by its ID.",
          "starterCode": "mutation UpdateAuthorBio($id: ID!, $bio: String!) {\n  // Write mutation\n}",
          "solutionCode": "mutation UpdateAuthorBio($id: ID!, $bio: String!) {\n  metaobjectUpdate(\n    id: $id\n    metaobject: {\n      fields: [{ key: \"biography\", value: $bio }]\n    }\n  ) {\n    metaobject { id }\n    userErrors { field message }\n  }\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-05",
    "orderIndex": 5,
    "title": "5. Shopify Storefront API with GraphQL",
    "description": "Master advanced Storefront API patterns: deep product queries, buyer identity, cart lines management, localization, and headless cart checkouts.",
    "duration": "60 mins",
    "xpReward": 205,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-sf-01",
        "title": "Storefront API Cart Guide",
        "type": "documentation",
        "url": "https://shopify.dev/docs/api/storefront/latest/queries/cart"
      }
    ],
    "lessonContent": {
      "overview": "The Storefront API is the backbone of headless commerce, mobile applications, and interactive micro-frontends. In this module, you will master advanced GraphQL query construction, buyer identity attachment (customer tokens, country/currency context), cart lines mutations, and discount code applications.",
      "objectives": [
        "Query products with complex filters, variants, metafields, and media in a single request.",
        "Manage full cart lifecycles (`cartCreate`, `cartLinesAdd`, `cartLinesUpdate`, `cartDiscountCodesUpdate`).",
        "Attach buyer identity and localized currency headers to cart sessions.",
        "Handle Storefront API query cost, rate limits, and network error retries."
      ],
      "sections": [
        {
          "id": "sec-sf-cart-lifecycle",
          "title": "Advanced Storefront API Cart Operations",
          "content": "Storefront API carts are fully independent of theme cookies. When mutating cart lines, you pass the `cartId` and line items. The response returns calculated totals, subtotal taxes, applied discount codes, and the final checkout URL.",
          "codeSnippets": [
            {
              "language": "graphql",
              "filename": "queries/advanced-cart-mutation.graphql",
              "title": "Storefront API Cart Lines Add & Buyer Context Mutation",
              "code": "mutation AddLinesToCart(\n  $cartId: ID!\n  $lines: [CartLineInput!]!\n  $country: CountryCode\n) @inContext(country: $country) {\n  cartLinesAdd(cartId: $cartId, lines: $lines) {\n    cart {\n      id\n      checkoutUrl\n      totalQuantity\n      cost {\n        totalAmount { amount currencyCode }\n        subtotalAmount { amount currencyCode }\n      }\n      lines(first: 10) {\n        nodes {\n          id\n          quantity\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              product { title handle }\n              price { amount currencyCode }\n            }\n          }\n        }\n      }\n    }\n    userErrors {\n      field\n      message\n    }\n  }\n}",
              "explanation": "Adding lines to an existing cart with localized country context via the @inContext directive."
            }
          ],
          "proTip": "Use the `@inContext(country: $countryCode)` GraphQL directive on Storefront API queries to automatically retrieve localized prices, taxes, and inventory availability for global shoppers.",
          "commonMistakes": [
            "Using numeric variant IDs instead of full GraphQL GIDs (`gid://shopify/ProductVariant/...`).",
            "Failing to store and persist the `cartId` string across page sessions in headless clients."
          ]
        }
      ],
      "keyTakeaways": [
        "Use `@inContext` directives for internationalized pricing and catalog localization.",
        "Storefront API cart operations return complete line details and instant `checkoutUrl` links.",
        "All resource identifiers must use the global GID format."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-05",
          "title": "Apply Discount Code to Cart via GraphQL",
          "instructions": "Write a Storefront API mutation to apply a discount code string to an existing cartId.",
          "starterCode": "mutation ApplyCartDiscount($cartId: ID!, $codes: [String!]) {\n  // Mutation\n}",
          "solutionCode": "mutation ApplyCartDiscount($cartId: ID!, $codes: [String!]) {\n  cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $codes) {\n    cart {\n      id\n      discountCodes { code applicable }\n    }\n    userErrors { field message }\n  }\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-06",
    "orderIndex": 6,
    "title": "6. Shopify Admin API Fundamentals",
    "description": "Explore the high-privilege Shopify Admin GraphQL API: resource schemas, access tokens, API versioning lifecycles, and location inventory management.",
    "duration": "55 mins",
    "xpReward": 195,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-admin-01",
        "title": "Admin GraphQL API Reference",
        "type": "documentation",
        "url": "https://shopify.dev/docs/api/admin-graphql"
      }
    ],
    "lessonContent": {
      "overview": "The Admin API gives backend applications complete administrative control over a Shopify store: managing products, updating inventory across multi-locations, fulfilling orders, and accessing customer data. In this module, you will master Admin API authentication, quarterly versioning lifecycles, and inventory level adjustments.",
      "objectives": [
        "Authenticate securely with Admin GraphQL endpoints using offline and online tokens.",
        "Understand Shopify API release cadences (e.g. 2024-01, 2024-04) and deprecation lifecycles.",
        "Execute inventory adjustments across multi-location fulfillment centers.",
        "Query order and customer records with strict field selections."
      ],
      "sections": [
        {
          "id": "sec-admin-inventory",
          "title": "Admin API Versioning & Inventory Adjustments",
          "content": "Shopify releases a new API version every quarter, supported for 12 months. All requests require the `X-Shopify-Access-Token` header. Inventory adjustments use the `inventoryAdjustQuantities` mutation to safely update stock counts without race conditions.",
          "codeSnippets": [
            {
              "language": "graphql",
              "filename": "mutations/adjust-inventory.graphql",
              "title": "Admin API Inventory Adjustment Mutation",
              "code": "mutation AdjustLocationInventory(\n  $inventoryItemId: ID!\n  $locationId: ID!\n  $delta: Int!\n) {\n  inventoryAdjustQuantities(\n    input: {\n      reason: \"cycle_count_available\"\n      name: \"available\"\n      changes: [\n        {\n          inventoryItemId: $inventoryItemId\n          locationId: $locationId\n          delta: $delta\n        }\n      ]\n    }\n  ) {\n    inventoryAdjustmentGroup {\n      createdAt\n      changes {\n        name\n        delta\n        quantityAfterChange\n      }\n    }\n    userErrors {\n      field\n      message\n    }\n  }\n}",
              "explanation": "Adjusting available inventory at a specific store location using atomic delta changes."
            }
          ],
          "proTip": "Always use delta adjustments (`inventoryAdjustQuantities`) rather than overwriting absolute counts (`inventorySetQuantities`) in high-concurrency environments to prevent race conditions during flash sales.",
          "commonMistakes": [
            "Using an expired API version that has been sunset by Shopify.",
            "Setting absolute inventory counts during live order processing instead of atomic delta adjustments."
          ]
        }
      ],
      "keyTakeaways": [
        "Shopify publishes quarterly API versions supported for 12 months with breaking changes announced in advance.",
        "Admin API requests require `X-Shopify-Access-Token` headers and server-side execution.",
        "Use atomic delta mutations (`inventoryAdjustQuantities`) for robust inventory synchronization."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-06",
          "title": "Query Store Locations via Admin API",
          "instructions": "Write an Admin GraphQL query to fetch all active store locations with their ID, name, and address.",
          "starterCode": "query GetStoreLocations {\n  // Query\n}",
          "solutionCode": "query GetStoreLocations {\n  locations(first: 10) {\n    nodes {\n      id\n      name\n      isActive\n      address { city country }\n    }\n  }\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-07",
    "orderIndex": 7,
    "title": "7. API Queries, Mutations and Pagination",
    "description": "Master Relay-style cursor pagination, GraphQL query cost budgeting, field aliases, and batch mutation execution.",
    "duration": "50 mins",
    "xpReward": 190,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-page-01",
        "title": "Shopify GraphQL Pagination and Rate Limits",
        "type": "documentation",
        "url": "https://shopify.dev/docs/api/usage/rate-limits"
      }
    ],
    "lessonContent": {
      "overview": "Efficient GraphQL querying requires mastering Relay-style cursor pagination and monitoring query cost. In this module, you will learn how to implement cursor loops with backoff strategies, use aliases to fetch multiple entities in parallel, and keep requests within calculated cost thresholds.",
      "objectives": [
        "Implement cursor-based pagination loops using `hasNextPage` and `endCursor`.",
        "Calculate and budget GraphQL query costs using `extensions.cost`.",
        "Use GraphQL aliases and fragments to optimize network roundtrips.",
        "Handle 429 Too Many Requests errors with exponential backoff algorithms."
      ],
      "sections": [
        {
          "id": "sec-cursor-pagination",
          "title": "Cursor-Based Pagination & Rate Limit Backoff",
          "content": "Cursor pagination uses an opaque cursor string pointing to a specific record. Unlike offset pagination, cursor pagination performs in O(1) time regardless of dataset size.",
          "codeSnippets": [
            {
              "language": "javascript",
              "filename": "server/paginated-product-fetcher.js",
              "title": "Automated Cursor Pagination Loop with Cost Throttling",
              "code": "export async function fetchAllProducts(client) {\n  let hasNextPage = true;\n  let cursor = null;\n  const allProducts = [];\n\n  const QUERY = `\n    query GetProductsPage($cursor: String) {\n      products(first: 50, after: $cursor) {\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        nodes {\n          id\n          title\n          handle\n        }\n      }\n    }\n  `;\n\n  while (hasNextPage) {\n    const response = await client.query(QUERY, { cursor });\n    const { nodes, pageInfo } = response.products;\n    \n    allProducts.push(...nodes);\n    hasNextPage = pageInfo.hasNextPage;\n    cursor = pageInfo.endCursor;\n\n    // Respect throttle status if rate limit pool is low\n    if (response.extensions?.cost?.throttleStatus?.currentlyAvailable < 100) {\n      await new Promise(r => setTimeout(r, 1000));\n    }\n  }\n\n  return allProducts;\n}",
              "explanation": "Production pagination loop fetching all products in batches of 50 while monitoring available cost points."
            }
          ],
          "proTip": "Never fetch `first: 250` for nested resources (like 250 products with 250 variants each). The total calculated query cost will exceed the single-query cost ceiling of 1,000 points and fail immediately.",
          "commonMistakes": [
            "Requesting huge nested node sets that exceed the 1000-point single query cost ceiling.",
            "Using infinite while loops without checking `pageInfo.hasNextPage`."
          ]
        }
      ],
      "keyTakeaways": [
        "Cursor pagination provides O(1) performance using `pageInfo.endCursor` and `after: $cursor`.",
        "Monitor `extensions.cost.throttleStatus.currentlyAvailable` to pause before hitting 429 throttles.",
        "Keep single query costs under 1,000 points by limiting batch sizes."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-07",
          "title": "Construct Paginated Order Query",
          "instructions": "Write a GraphQL query to fetch the first 25 orders with pageInfo fields (hasNextPage, endCursor) and order names.",
          "starterCode": "query GetOrders($cursor: String) {\n  // Query\n}",
          "solutionCode": "query GetOrders($cursor: String) {\n  orders(first: 25, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    nodes {\n      id\n      name\n      totalPriceSet { shopMoney { amount currencyCode } }\n    }\n  }\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-08",
    "orderIndex": 8,
    "title": "8. Shopify App Architecture",
    "description": "Understand modern Shopify App topologies: embedded vs standalone apps, Shopify CLI templates, Remix framework integrations, and Prisma ORM data layers.",
    "duration": "55 mins",
    "xpReward": 200,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-app-01",
        "title": "Shopify App Architecture Overview",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/getting-started"
      }
    ],
    "lessonContent": {
      "overview": "Modern Shopify apps are full-stack web applications that integrate deeply with the merchant admin. The official standard architecture leverages the Remix framework with `@shopify/shopify-app-remix`, Prisma ORM for multi-tenant storage, and App Bridge for embedded rendering. In this module, you will learn how the app server handles authentication, sessions, and API client instantiation.",
      "objectives": [
        "Understand the components of a modern Shopify Remix app template.",
        "Configure `shopify.app.toml` application manifests.",
        "Initialize `@shopify/shopify-app-remix` server configuration.",
        "Manage multi-tenant session storage using Prisma ORM."
      ],
      "sections": [
        {
          "id": "sec-app-remix-config",
          "title": "Remix Shopify App Configuration & Session Management",
          "content": "The `@shopify/shopify-app-remix` package manages OAuth, session tokens, webhook routing, and Admin API client generation. The application manifest (`shopify.app.toml`) defines app metadata, scopes, and webhook endpoints.",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "app/shopify.server.ts",
              "title": "Shopify App Server Configuration with Remix & Prisma",
              "code": "import \"@shopify/shopify-app-remix/adapters/node\";\nimport {\n  AppDistribution,\n  shopifyApp,\n  LATEST_API_VERSION\n} from \"@shopify/shopify-app-remix/server\";\nimport { PrismaSessionStorage } from \"@shopify/shopify-app-session-storage-prisma\";\nimport prisma from \"./db.server\";\n\nexport const shopify = shopifyApp({\n  apiKey: process.env.SHOPIFY_API_KEY!,\n  apiSecretKey: process.env.SHOPIFY_API_SECRET!,\n  scopes: process.env.SCOPES?.split(\",\") || [\"read_products\", \"write_products\"],\n  appUrl: process.env.SHOPIFY_APP_URL!,\n  authPathPrefix: \"/auth\",\n  sessionStorage: new PrismaSessionStorage(prisma),\n  distribution: AppDistribution.AppStore,\n  apiVersion: LATEST_API_VERSION,\n  future: {\n    unstable_newEmbeddedAuthStrategy: true\n  }\n});\n\nexport const authenticate = shopify.authenticate;\nexport const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;",
              "explanation": "Server initialization of Shopify Remix app with Prisma session storage and automated auth strategies."
            },
            {
              "language": "toml",
              "filename": "shopify.app.toml",
              "title": "Shopify App Manifest Configuration",
              "code": "client_id = \"your_client_id_here\"\nname = \"Skillora Inventory Pro\"\nhandle = \"skillora-inventory-pro\"\napplication_url = \"https://app.skillora.ai\"\nembedded = true\n\n[access_scopes]\nscopes = \"read_products,write_products,read_inventory,write_inventory\"\n\n[auth]\nredirect_urls = [\n  \"https://app.skillora.ai/auth/callback\",\n  \"https://app.skillora.ai/auth/shopify/callback\"\n]\n\n[webhooks]\napi_version = \"2024-01\"\n\n  [[webhooks.subscriptions]]\n  topics = [ \"app/uninstalled\" ]\n  uri = \"/webhooks/app-uninstalled\"",
              "explanation": "Official TOML configuration file specifying scopes, redirect URLs, and webhook registrations."
            }
          ],
          "proTip": "Always store `SHOPIFY_API_SECRET` in server environment variables and never commit `.env` files to source control repositories.",
          "commonMistakes": [
            "Exposing `SHOPIFY_API_SECRET` in client-side code or public GitHub repos.",
            "Mismatched redirect URLs in `shopify.app.toml` causing OAuth callback failures."
          ]
        }
      ],
      "keyTakeaways": [
        "Shopify Remix apps use `@shopify/shopify-app-remix` to streamline OAuth, webhooks, and API calls.",
        "Use PrismaSessionStorage for persistent multi-tenant session management.",
        "`shopify.app.toml` acts as the single source of truth for app metadata and scopes."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-08",
          "title": "Configure Scopes in TOML Manifest",
          "instructions": "Write the [access_scopes] section of shopify.app.toml requesting read_orders and write_orders.",
          "starterCode": "[access_scopes]\nscopes = \"\"",
          "solutionCode": "[access_scopes]\nscopes = \"read_orders,write_orders\""
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-09",
    "orderIndex": 9,
    "title": "9. Embedded App Concepts and App Navigation",
    "description": "Master Shopify App Bridge, embedded iframe security, navigation menus, contextual save bars, modal dialogs, and Polaris UI design systems.",
    "duration": "50 mins",
    "xpReward": 190,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-bridge-01",
        "title": "Shopify App Bridge Documentation",
        "type": "documentation",
        "url": "https://shopify.dev/docs/api/app-bridge"
      }
    ],
    "lessonContent": {
      "overview": "Embedded apps render inside an iframe in the Shopify Admin. To provide a native merchant feel, developers use Shopify App Bridge and Polaris components. In this module, you will learn how to build navigation menus, modal dialogs, contextual save bars, and handle seamless page transitions without page reloads.",
      "objectives": [
        "Integrate App Bridge into embedded React/Remix application layouts.",
        "Build unified navigation with App Bridge `<NavMenu>` and `<TitleBar>`.",
        "Implement contextual SaveBar components to handle dirty form states.",
        "Display native admin modals and toast alerts."
      ],
      "sections": [
        {
          "id": "sec-app-bridge-ui",
          "title": "App Bridge UI Primitives & Navigation",
          "content": "App Bridge communicates with the parent Shopify Admin shell. When a user navigates between app tabs, App Bridge updates the top-level browser URL and synchronizes navigation highlights.",
          "codeSnippets": [
            {
              "language": "tsx",
              "filename": "app/routes/app.dashboard.tsx",
              "title": "App Bridge TitleBar & Polaris Dashboard Component",
              "code": "import { Page, Layout, Card, Text, Button } from \"@shopify/polaris\";\nimport { TitleBar, useAppBridge } from \"@shopify/app-bridge-react\";\n\nexport default function DashboardRoute() {\n  const shopify = useAppBridge();\n\n  const handleSyncInventory = () => {\n    shopify.toast.show(\"Inventory synchronization initiated in background.\");\n  };\n\n  return (\n    <Page>\n      <TitleBar title=\"Skillora Inventory Manager\">\n        <button variant=\"primary\" onClick={handleSyncInventory}>\n          Sync All Locations\n        </button>\n      </TitleBar>\n\n      <Layout>\n        <Layout.Section>\n          <Card>\n            <Text as=\"h2\" variant=\"headingMd\">Real-Time Stock Alerts</Text>\n            <Text as=\"p\" variant=\"bodyMd\" tone=\"subdued\">\n              All 4 warehouse fulfillment centers are currently synchronized with zero errors.\n            </Text>\n          </Card>\n        </Layout.Section>\n      </Layout>\n    </Page>\n  );\n}",
              "explanation": "React component utilizing Shopify Polaris design system and App Bridge TitleBar."
            }
          ],
          "proTip": "Use App Bridge `<TitleBar>` rather than creating custom HTML headers. This ensures your app’s title and primary action buttons match the official Shopify Admin design patterns.",
          "commonMistakes": [
            "Creating custom custom non-Polaris UI that looks alien inside the Shopify Admin.",
            "Using standard browser `window.alert()` inside an embedded iframe instead of `shopify.toast.show()`."
          ]
        }
      ],
      "keyTakeaways": [
        "App Bridge connects embedded iframes to the Shopify Admin shell.",
        "Use `<TitleBar>`, `<NavMenu>`, and `shopify.toast.show()` for native admin user experiences.",
        "Combine App Bridge with Shopify Polaris for visual consistency."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-09",
          "title": "Trigger App Bridge Toast",
          "instructions": "Write a JavaScript function that uses App Bridge to display a toast notification with the message \"Settings saved successfully\".",
          "starterCode": "function showSuccessToast(shopify) {\n  // Code\n}",
          "solutionCode": "function showSuccessToast(shopify) {\n  shopify.toast.show(\"Settings saved successfully\");\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-10",
    "orderIndex": 10,
    "title": "10. OAuth, Scopes and Permissions",
    "description": "Master the OAuth 2.0 authorization handshake, HMAC verification, offline vs online tokens, scope updates, and least-privilege security.",
    "duration": "55 mins",
    "xpReward": 200,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-oauth-01",
        "title": "Shopify OAuth 2.0 Specification",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/auth/oauth"
      }
    ],
    "lessonContent": {
      "overview": "Security is paramount in Shopify app development. In this module, you will dissect every step of the OAuth 2.0 authorization flow: generating nonces, validating HMAC signatures on installation requests, exchanging authorization codes for permanent access tokens, and handling scope upgrade prompts when new features are added.",
      "objectives": [
        "Understand the full multi-step OAuth 2.0 handshake between merchant, Shopify, and app server.",
        "Verify HMAC query parameters to prevent unauthorized installation forgery.",
        "Distinguish between offline tokens (for background jobs/webhooks) and online tokens (for user identity).",
        "Implement incremental scope request flows for new app features."
      ],
      "sections": [
        {
          "id": "sec-oauth-flow",
          "title": "The OAuth 2.0 Handshake & HMAC Verification",
          "content": "When a merchant installs an app, Shopify sends a GET request with `shop`, `timestamp`, `hmac`, and `host`. The app backend must sort all query parameters alphabetically (excluding `hmac` and `signature`), build a query string, compute an HMAC-SHA256 hash using the app secret, and verify match before initiating the OAuth redirect.",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "server/oauth-validator.ts",
              "title": "Validating Shopify Install Request HMAC",
              "code": "import crypto from 'crypto';\n\nexport function validateShopifyInstallRequest(\n  queryParams: Record<string, string>,\n  apiSecret: string\n): boolean {\n  const { hmac, signature, ...rest } = queryParams;\n  if (!hmac) return false;\n\n  // 1. Sort parameters lexicographically\n  const sortedMessage = Object.keys(rest)\n    .sort()\n    .map(key => `${key}=${rest[key]}`)\n    .join('&');\n\n  // 2. Compute SHA-256 HMAC hash\n  const generatedHmac = crypto\n    .createHmac('sha256', apiSecret)\n    .update(sortedMessage)\n    .digest('hex');\n\n  // 3. Timing-safe comparison\n  return crypto.timingSafeEqual(\n    Buffer.from(generatedHmac),\n    Buffer.from(hmac)\n  );\n}",
              "explanation": "Utility function verifying the authenticity of Shopify OAuth installation requests."
            }
          ],
          "proTip": "Use offline access tokens for backend webhook processing and scheduled cron jobs. Offline tokens do not expire and remain valid until the merchant uninstalls the app.",
          "commonMistakes": [
            "Using standard string comparison (`===`) on HMAC values instead of `crypto.timingSafeEqual`.",
            "Forgetting to URL-decode query parameter values before constructing the HMAC validation string."
          ]
        }
      ],
      "keyTakeaways": [
        "Sort all query parameters alphabetically when calculating HMAC for OAuth verification.",
        "Use timing-safe string comparison to prevent side-channel timing attacks.",
        "Offline tokens power background workers; online tokens represent logged-in admin users."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-10",
          "title": "Construct OAuth Authorization Redirect URL",
          "instructions": "Write a helper function that builds the Shopify OAuth authorization URL given shop domain, client ID, scopes, redirect URI, and nonce.",
          "starterCode": "function buildOAuthUrl(shop: string, clientId: string, scopes: string, redirectUri: string, nonce: string): string {\n  // Code\n}",
          "solutionCode": "function buildOAuthUrl(shop: string, clientId: string, scopes: string, redirectUri: string, nonce: string): string {\n  return `https://${shop}/admin/oauth/authorize?client_id=${clientId}&scope=${scopes}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${nonce}`;\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-11",
    "orderIndex": 11,
    "title": "11. Webhooks, Queues and Idempotent Processing",
    "description": "Build enterprise-grade webhook architectures with Redis, BullMQ queue workers, dead letter queues, and idempotent database handlers.",
    "duration": "60 mins",
    "xpReward": 210,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-wh-01",
        "title": "Managing Webhook Subscriptions with GraphQL",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/webhooks/configuration/https"
      }
    ],
    "lessonContent": {
      "overview": "At enterprise scale, a single store can trigger hundreds of webhooks per second during high-volume promotions. In this module, you will design a distributed webhook ingestion pipeline: receiving webhooks via lightweight API endpoints, enqueuing jobs into BullMQ/Redis, deduplicating with idempotency keys, and handling retries with exponential backoff and Dead Letter Queues (DLQ).",
      "objectives": [
        "Register and manage webhook subscriptions programmatically via GraphQL mutations.",
        "Architect a high-throughput queue worker system using BullMQ and Redis.",
        "Implement database-backed idempotency tracking using `X-Shopify-Webhook-Id`.",
        "Configure Dead Letter Queues for poisoned payloads and error alerting."
      ],
      "sections": [
        {
          "id": "sec-bullmq-worker",
          "title": "Distributed Queue Worker Pipeline for Shopify Webhooks",
          "content": "Separating webhook reception from job processing ensures your API endpoint never times out. The receiver verifies HMAC, validates the `webhookId`, pushes the job to BullMQ, and responds with 200 OK in under 20 milliseconds.",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "server/workers/webhook-queue.ts",
              "title": "BullMQ Webhook Processing Worker with Idempotency",
              "code": "import { Queue, Worker, Job } from 'bullmq';\nimport { prisma } from '../db.server';\n\nexport const webhookQueue = new Queue('shopify-webhooks', {\n  connection: { host: process.env.REDIS_HOST, port: Number(process.env.REDIS_PORT) }\n});\n\nexport const webhookWorker = new Worker(\n  'shopify-webhooks',\n  async (job: Job) => {\n    const { webhookId, topic, shop, payload } = job.data;\n\n    // 1. Idempotency Check in DB\n    const existing = await prisma.processedWebhook.findUnique({\n      where: { webhookId }\n    });\n\n    if (existing) {\n      console.log(`[Worker] Duplicate webhook ${webhookId} ignored.`);\n      return { status: 'skipped_duplicate' };\n    }\n\n    // 2. Execute Business Logic\n    if (topic === 'orders/create') {\n      await processOrderCreation(shop, payload);\n    } else if (topic === 'app/uninstalled') {\n      await handleAppUninstallation(shop);\n    }\n\n    // 3. Mark as processed in DB\n    await prisma.processedWebhook.create({\n      data: {\n        webhookId,\n        topic,\n        shop,\n        processedAt: new Date()\n      }\n    });\n\n    return { status: 'processed' };\n  },\n  {\n    connection: { host: process.env.REDIS_HOST, port: Number(process.env.REDIS_PORT) },\n    concurrency: 10,\n    attempts: 3,\n    backoff: { type: 'exponential', delay: 2000 }\n  }\n);",
              "explanation": "Production BullMQ worker processing webhooks with concurrency 10, exponential backoff, and database idempotency."
            }
          ],
          "proTip": "Always register for the mandatory compliance webhooks (`customers/data_request`, `customers/redact`, `shop/redact`). Shopify will reject apps that do not respond to mandatory GDPR/privacy webhooks.",
          "commonMistakes": [
            "Failing to implement mandatory GDPR compliance webhooks.",
            "Not setting up exponential backoff and retry limits on queue workers, leading to infinite job retry loops."
          ]
        }
      ],
      "keyTakeaways": [
        "Acknowledge webhooks with HTTP 200 immediately and process jobs asynchronously in BullMQ.",
        "Prevent duplicate processing by recording `webhookId` in an idempotency table.",
        "Mandatory privacy webhooks (`customers/redact`, `shop/redact`) are legally required."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-11",
          "title": "Register Webhook via GraphQL",
          "instructions": "Write a GraphQL mutation to register a webhook subscription for topic ORDERS_CREATE pointing to an HTTPS callback URL.",
          "starterCode": "mutation RegisterWebhook($callbackUrl: URL!) {\n  // Mutation\n}",
          "solutionCode": "mutation RegisterWebhook($callbackUrl: URL!) {\n  webhookSubscriptionCreate(\n    topic: ORDERS_CREATE\n    webhookSubscription: {\n      callbackUrl: $callbackUrl\n      format: JSON\n    }\n  ) {\n    webhookSubscription { id }\n    userErrors { field message }\n  }\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-12",
    "orderIndex": 12,
    "title": "12. Shopify Cart and Checkout Development Concepts",
    "description": "Understand modern checkout architectures, migration from legacy checkout.liquid to Checkout Extensibility, and Cart Transform concepts.",
    "duration": "50 mins",
    "xpReward": 195,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-chk-01",
        "title": "Checkout Extensibility Architecture Overview",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/checkout"
      }
    ],
    "lessonContent": {
      "overview": "Shopify has completely deprecated legacy `checkout.liquid` in favor of Checkout Extensibility. Checkout Extensibility allows developers to build fast, upgrade-safe, and secure checkout customizations using Checkout UI Extensions, Web Pixels, and Shopify Functions. In this module, you will master the architecture of Checkout Extensibility and the Cart Transform API.",
      "objectives": [
        "Understand the transition from legacy `checkout.liquid` to Checkout Extensibility.",
        "Explore the UI extension targets available along the checkout journey (information, shipping, payment, thank-you).",
        "Understand Cart Transform Functions for product bundling and component expansion.",
        "Ensure checkout customizations meet strict PCI-DSS and security boundaries."
      ],
      "sections": [
        {
          "id": "sec-checkout-ext",
          "title": "Checkout Extensibility Paradigm & UI Extension Targets",
          "content": "Checkout Extensibility replaces direct DOM manipulation with sandboxed React-like UI components. Extensions run in isolated web worker sandboxes and hook into defined extension targets (e.g. `purchase.checkout.block.render`, `purchase.thank-you.block.render`).",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "extensions/checkout-upsell/src/Checkout.tsx",
              "title": "Checkout UI Extension Block Component",
              "code": "import {\n  reactExtension,\n  Banner,\n  BlockStack,\n  Text,\n  Button,\n  useApi,\n  useApplyCartLinesChange\n} from \"@shopify/ui-extensions-react/checkout\";\n\nexport default reactExtension(\n  \"purchase.checkout.block.render\",\n  () => <Extension />\n);\n\nfunction Extension() {\n  const { query } = useApi();\n  const applyCartLinesChange = useApplyCartLinesChange();\n\n  const handleAddFreeGift = async () => {\n    const result = await applyCartLinesChange({\n      type: \"addCartLine\",\n      merchandiseId: \"gid://shopify/ProductVariant/41234567890123\",\n      quantity: 1\n    });\n\n    if (result.type === \"success\") {\n      console.log(\"Upsell item successfully added to checkout!\");\n    }\n  };\n\n  return (\n    <BlockStack border=\"dotted\" padding=\"tight\" spacing=\"tight\">\n      <Banner title=\"Exclusive Developer Gift\">\n        Add our official Skillora Sticker Pack to your order for free!\n      </Banner>\n      <Button onPress={handleAddFreeGift}>Add Free Gift</Button>\n    </BlockStack>\n  );\n}",
              "explanation": "Sandbox-safe Checkout UI Extension rendered at the purchase.checkout.block.render target."
            }
          ],
          "proTip": "Checkout UI Extensions run inside a Web Worker sandbox without direct access to the `window` or `document` objects. Use the official `@shopify/ui-extensions-react/checkout` components and hooks for all UI elements.",
          "commonMistakes": [
            "Attempting to access `window.document` or inject arbitrary `<script>` tags inside Checkout Extensibility components.",
            "Trying to edit `checkout.liquid` on modern stores where it is strictly deprecated."
          ]
        }
      ],
      "keyTakeaways": [
        "Checkout Extensibility replaces `checkout.liquid` with secure, upgrade-safe Web Worker sandboxes.",
        "Use extension targets (e.g. `purchase.checkout.block.render`) to place UI components along the checkout path.",
        "All interactions must use official UI Extension components and hooks."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-12",
          "title": "Define Checkout Extension Target",
          "instructions": "Write the export statement declaring a Checkout UI extension for the purchase.thank-you.block.render target.",
          "starterCode": "// Export extension",
          "solutionCode": "export default reactExtension(\n  \"purchase.thank-you.block.render\",\n  () => <ThankYouExtension />\n);"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-13",
    "orderIndex": 13,
    "title": "13. Testing, Debugging and Deployment",
    "description": "Master debugging techniques using Shopify CLI logs, GraphQL network inspectors, mock test stores, and automated continuous deployment.",
    "duration": "50 mins",
    "xpReward": 190,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-dbg-01",
        "title": "Debugging Shopify Apps and Themes",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/tools/cli/debugging"
      }
    ],
    "lessonContent": {
      "overview": "Building resilient Shopify solutions requires comprehensive testing workflows. In this module, you will learn how to debug GraphQL query execution using GraphiQL, monitor real-time CLI logs, test bogus checkout payment flows, and configure automated GitHub Actions deployment pipelines for custom apps and themes.",
      "objectives": [
        "Inspect and debug GraphQL queries and userErrors using the embedded GraphiQL tool.",
        "Simulate multi-currency and international checkout transactions using the Bogus Gateway.",
        "Configure logging and monitoring for server-side Remix applications.",
        "Deploy custom apps to cloud platforms (Fly.io, Heroku, AWS, Cloudflare) with automated CI/CD."
      ],
      "sections": [
        {
          "id": "sec-testing-debugging",
          "title": "GraphiQL Inspection & Bogus Gateway Testing",
          "content": "Shopify CLI embeds a local GraphiQL explorer accessible at `/api/graphiql` during `shopify app dev`. For end-to-end checkout verification, activate the Bogus Gateway in Settings > Payments to test successful, failed, and 3D Secure payment flows.",
          "codeSnippets": [
            {
              "language": "bash",
              "filename": "terminal-debug-commands.sh",
              "title": "Shopify CLI Live Log Streaming Commands",
              "code": "# 1. Stream real-time app logs including webhooks and requests\nshopify app logs\n\n# 2. Open interactive GraphiQL query explorer for current dev store\nshopify app generate extension\n\n# 3. Test Bogus Payment Gateway details:\n# Credit Card: \"1\" (Success), \"2\" (Declined), \"3\" (Gateway Error)\n# CVV: Any 3 digits\n# Expiry: Any future date",
              "explanation": "Debugging commands and test gateway credentials for simulating checkout transactions."
            }
          ],
          "proTip": "When testing webhooks locally, use `shopify webhook trigger` to replay payloads instantly without needing to manually create orders in the Shopify Admin each time.",
          "commonMistakes": [
            "Testing payments with live credit cards instead of the test Bogus Gateway.",
            "Deploying without configuring persistent database connections on cloud hosting platforms."
          ]
        }
      ],
      "keyTakeaways": [
        "Use the embedded GraphiQL explorer in Shopify CLI to test GraphQL queries in isolation.",
        "Test payment edge cases using Bogus Gateway card numbers \"1\", \"2\", and \"3\".",
        "Stream real-time server logs with `shopify app logs`."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-13",
          "title": "Identify Bogus Gateway Test Outcomes",
          "instructions": "Write the expected test result for Bogus credit card numbers \"1\" and \"2\".",
          "starterCode": "// Bogus Gateway outcomes",
          "solutionCode": "// Card \"1\": Successful payment transaction\n// Card \"2\": Simulated payment card declined"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-14",
    "orderIndex": 14,
    "title": "14. Intermediate Project Brief & Architecture",
    "description": "Review technical requirements, architecture blueprints, data models, and API integration plans for the Intermediate Capstone Project.",
    "duration": "45 mins",
    "xpReward": 180,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-int-proj-01",
        "title": "Intermediate Project Specification",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps"
      }
    ],
    "lessonContent": {
      "overview": "In this preparatory module for your Intermediate Capstone Project, you will synthesize all theme engineering and app development concepts. You will review the required 15 technical deliverables for the Shopify Custom App or Advanced Theme System project, covering architecture diagrams, Prisma data schemas, OAuth flows, and background queue workers.",
      "objectives": [
        "Review the 15 required deliverables for the Intermediate Capstone.",
        "Design a multi-tier architecture diagram integrating Shopify Admin API, Webhook queues, and App Bridge UI.",
        "Plan Prisma database schemas for store tenants, sessions, and custom business entities.",
        "Prepare testing matrices and deployment procedures."
      ],
      "sections": [
        {
          "id": "sec-int-proj-plan",
          "title": "System Architecture Blueprint for Intermediate Capstone",
          "content": "The Intermediate Capstone requires developing a full-stack Custom Shopify App (e.g. Advanced Inventory Sync or Custom Metafield Content Engine) or an Advanced Theme System. The project must demonstrate secure OAuth authentication, Admin GraphQL integrations, background webhook queues, and Polaris UI.",
          "codeSnippets": [
            {
              "language": "prisma",
              "filename": "prisma/schema.prisma",
              "title": "Database Schema Model for Custom App Capstone",
              "code": "datasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\ngenerator client {\n  provider = \"prisma-client-js\"\n}\n\nmodel Session {\n  id          String    @id\n  shop        String\n  state       String\n  isOnline    Boolean   @default(false)\n  scope       String?\n  expires     DateTime?\n  accessToken String\n  userId      BigInt?\n}\n\nmodel StoreSettings {\n  id              String   @id @default(uuid())\n  shop            String   @unique\n  lowStockThreshold Int    @default(5)\n  notificationEmail String?\n  autoSyncEnabled Boolean  @default(true)\n  updatedAt       DateTime @updatedAt\n}\n\nmodel ProcessedWebhook {\n  id          String   @id @default(uuid())\n  webhookId   String   @unique\n  topic       String\n  shop        String\n  processedAt DateTime @default(now())\n}",
              "explanation": "Prisma schema modeling sessions, merchant configuration settings, and webhook idempotency logs."
            }
          ],
          "proTip": "Ensure your app gracefully handles the `app/uninstalled` webhook by purging or archiving the merchant’s sensitive access tokens in your database.",
          "commonMistakes": [
            "Failing to clean up access tokens when receiving the `app/uninstalled` webhook.",
            "Not documenting environment variables in the project README."
          ]
        }
      ],
      "keyTakeaways": [
        "The Intermediate Capstone synthesizes full-stack app engineering, APIs, webhooks, and Polaris UI.",
        "Model multi-tenant databases with proper session storage and tenant isolation.",
        "Include detailed architecture diagrams and installation guides in your project submission."
      ],
      "practiceExercises": [
        {
          "id": "ex-int-14",
          "title": "Outline the 15 Capstone Deliverables",
          "instructions": "List the 15 required deliverables for the Intermediate Capstone project.",
          "starterCode": "// List 15 deliverables",
          "solutionCode": "// 1. Technical Requirements Document\n// 2. System Architecture Diagram\n// 3. Prisma Data Model Schema\n// 4. API Integration Plan\n// 5. GraphQL Admin Query Examples\n// 6. GraphQL Admin Mutation Examples\n// 7. OAuth 2.0 & Permissions Plan\n// 8. Webhook Processing & Queue Design\n// 9. Error Handling & Retry Strategy\n// 10. Polaris UI Implementation\n// 11. Automated Testing Plan\n// 12. Deployment & CI/CD Plan\n// 13. Technical README Documentation\n// 14. Troubleshooting & Logging Guide\n// 15. Security & Compliance Checklist"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-15",
    "orderIndex": 15,
    "title": "Intermediate Project: Shopify Custom App or Advanced Theme System",
    "description": "Design, architect, code, and deploy a production-grade Custom Shopify App or Advanced Theme System with GraphQL Admin API integrations, BullMQ webhook queues, and Polaris UI.",
    "duration": "6 hours",
    "xpReward": 450,
    "isProject": true,
    "type": "project",
    "requiresQuiz": false,
    "projectDetails": {
      "title": "Intermediate Capstone: Shopify Custom App or Advanced Theme System",
      "overview": "Build an enterprise-grade full-stack Shopify App (e.g. Automated Multi-Location Inventory Synchronizer or Custom Metafield Content Platform) utilizing Remix, TypeScript, Prisma, BullMQ, and GraphQL Admin APIs.",
      "deliverables": [
        {
          "id": "del-int-01",
          "title": "Technical Requirements & Functional Scope",
          "description": "Comprehensive specifications defining business problem, merchant user journeys, and functional requirements.",
          "checklist": [
            "Detailed problem statement",
            "User stories and acceptance criteria",
            "API scope and permission matrix"
          ]
        },
        {
          "id": "del-int-02",
          "title": "System Architecture Diagram",
          "description": "Visual diagram mapping browser, App Bridge, Remix server, Redis queue, and Shopify GraphQL endpoints.",
          "checklist": [
            "Complete component interaction topology",
            "Data flow pathways",
            "Security boundary documentation"
          ]
        },
        {
          "id": "del-int-03",
          "title": "Prisma Multi-Tenant Data Model",
          "description": "Prisma schema detailing Session, StoreSettings, and ProcessedWebhook models with foreign key constraints.",
          "checklist": [
            "Session storage configuration",
            "Store configuration schema",
            "Webhook idempotency table schema"
          ]
        },
        {
          "id": "del-int-04",
          "title": "API Integration & Query Plan",
          "description": "Detailed plan of all Storefront and Admin GraphQL queries and mutations used by the application.",
          "checklist": [
            "Complete list of GraphQL endpoints",
            "Query cost budgeting calculations",
            "Rate limit throttling strategy"
          ]
        },
        {
          "id": "del-int-05",
          "title": "GraphQL Query Examples & Fragments",
          "description": "Production-ready GraphQL query definitions with reusable fragments for product and inventory queries.",
          "checklist": [
            "Product with variant and inventory query",
            "Store location query",
            "Reusable GraphQL fragments"
          ]
        },
        {
          "id": "del-int-06",
          "title": "GraphQL Mutation Examples & UserError Handling",
          "description": "Atomic mutation implementations with robust userErrors extraction and validation.",
          "checklist": [
            "Inventory adjustment mutation",
            "Metafield upsert mutation",
            "userErrors validation handler"
          ]
        },
        {
          "id": "del-int-07",
          "title": "OAuth 2.0 & Permissions Security Plan",
          "description": "Implementation of OAuth handshake, HMAC validation, and least-privilege access scope management.",
          "checklist": [
            "HMAC verification utility",
            "Offline token storage lifecycle",
            "Scope upgrade prompt handler"
          ]
        },
        {
          "id": "del-int-08",
          "title": "Webhook Processing & BullMQ Queue Pipeline",
          "description": "Event-driven webhook receiver pushing jobs into Redis BullMQ workers with fast 200 OK responses.",
          "checklist": [
            "Express/Remix raw body HMAC verification",
            "BullMQ queue worker with concurrency",
            "Database idempotency check"
          ]
        },
        {
          "id": "del-int-09",
          "title": "Error Handling & Retry Backoff Strategy",
          "description": "Exponential backoff retry algorithms for handling 429 throttling and network failure resilience.",
          "checklist": [
            "Exponential backoff logic",
            "Dead Letter Queue (DLQ) configuration",
            "Detailed error logging"
          ]
        },
        {
          "id": "del-int-10",
          "title": "Polaris & App Bridge UI Implementation",
          "description": "Responsive merchant interface built using Polaris components, App Bridge TitleBar, and Toast alerts.",
          "checklist": [
            "Polaris Page, Layout, and Card components",
            "App Bridge TitleBar and Toast triggers",
            "Empty states and loading skeletons"
          ]
        },
        {
          "id": "del-int-11",
          "title": "Automated Testing & Mock Verification Plan",
          "description": "Unit and integration test suites covering GraphQL queries, HMAC verification, and webhook queues.",
          "checklist": [
            "HMAC validator unit tests",
            "Mock GraphQL query tests",
            "Bogus Gateway checkout validation"
          ]
        },
        {
          "id": "del-int-12",
          "title": "Deployment & CI/CD Pipeline",
          "description": "Cloud deployment configuration (Docker, Fly.io, or AWS) with automated GitHub Actions CI/CD.",
          "checklist": [
            "Production Dockerfile / build config",
            "GitHub Actions workflow for automated deploy",
            "Production database migrations"
          ]
        },
        {
          "id": "del-int-13",
          "title": "Technical README Documentation",
          "description": "Comprehensive setup guide detailing environment variables, CLI commands, and architecture overview.",
          "checklist": [
            "Step-by-step local setup instructions",
            "Environment variable reference table",
            "Architecture overview notes"
          ]
        },
        {
          "id": "del-int-14",
          "title": "Troubleshooting & Observability Guide",
          "description": "Logging guide detailing error codes, common resolution steps, and health check endpoints.",
          "checklist": [
            "Health check API endpoint (/healthz)",
            "Error code directory",
            "Log inspection commands"
          ]
        },
        {
          "id": "del-int-15",
          "title": "Security & Compliance Checklist",
          "description": "Verification of GDPR compliance webhooks, Content Security Policy headers, and token encryption.",
          "checklist": [
            "Mandatory privacy webhooks implemented",
            "CSP frame-ancestors configured",
            "Zero exposed API secrets"
          ]
        }
      ]
    }
  },
  {
    "id": "shopify-dev-int-16",
    "orderIndex": 16,
    "title": "Intermediate Assessment: Shopify Theme & App Engineering",
    "description": "Test your mastery of advanced theme JSON architectures, GraphQL Admin/Storefront APIs, App Bridge, OAuth 2.0, BullMQ webhook queues, and Checkout Extensibility.",
    "duration": "45 mins",
    "xpReward": 400,
    "isFinalAssessment": true,
    "type": "assessment",
    "passingScore": 25,
    "totalQuestions": 30,
    "questions": [
      {
        "id": 1,
        "topic": "Online Store 2.0 Dynamic Sections",
        "question": "How do Online Store 2.0 dynamic sections on product pages handle multiple merchant customization presets across different product templates?",
        "options": [
          "By creating alternate JSON templates (e.g. templates/product.preorder.json) that specify customized section order and block settings assigned to specific products in the Shopify Admin.",
          "By writing hardcoded if-statements checking product IDs inside a single global layout/theme.liquid file.",
          "By uploading a brand new theme for every product in the catalog.",
          "By using client-side localStorage to switch Liquid variables at runtime."
        ],
        "correctAnswer": 0,
        "explanation": "Online Store 2.0 enables alternate JSON templates (e.g., templates/product.preorder.json). Merchants assign these templates to specific products in the Shopify Admin without duplicating theme code or writing conditional Liquid overrides."
      },
      {
        "id": 2,
        "topic": "App Blocks & @app Support",
        "question": "When architecting a custom Shopify theme for compatibility with third-party apps, why is adding `{\"type\": \"@app\"}` to the `blocks` array of section schemas essential?",
        "options": [
          "It grants full root shell access on Shopify core servers.",
          "It allows App Blocks built by theme app extensions to be injected and reordered by merchants directly within that section via the Theme Editor.",
          "It disables all Liquid caching on the entire storefront.",
          "It converts theme sections into React Native components."
        ],
        "correctAnswer": 1,
        "explanation": "Supporting `{\"type\": \"@app\"}` in a section schema permits merchants to place App Blocks (such as product reviews, star ratings, or loyalty widgets) directly inside the section without requiring manual Liquid edits."
      },
      {
        "id": 3,
        "topic": "Theme JSON Settings & Schemas",
        "question": "In config/settings_data.json, what is the role of the \"current\" object versus the \"presets\" object?",
        "options": [
          "The \"current\" object is written in Python, while \"presets\" is written in SQL.",
          "The \"current\" object contains customer passwords, while \"presets\" contains credit card tokens.",
          "The \"current\" object stores active merchant-configured theme settings and block states, while \"presets\" contains the theme default visual styles (e.g. Default, Bold, Minimal).",
          "There is no difference; both objects are ignored by Shopify."
        ],
        "correctAnswer": 2,
        "explanation": "In `settings_data.json`, `current` holds the active customizations applied by the merchant in the Theme Editor, whereas `presets` defines pre-packaged theme styles provided by the theme developer."
      },
      {
        "id": 4,
        "topic": "Advanced Metafield Validation",
        "question": "When defining a Shopify Metafield definition in the Admin API, what purpose does the `validations` array serve?",
        "options": [
          "It executes unit tests on the merchant browser.",
          "It automatically translates text into 50 languages.",
          "It encrypts the entire product catalog with SHA-1.",
          "It enforces strict business constraints (such as min/max character lengths, integer ranges, regex patterns, or allowed preset choices) on merchant input."
        ],
        "correctAnswer": 3,
        "explanation": "Metafield definition validations ensure data integrity by enforcing rules such as numeric minimums/maximums, string length bounds, allowed choices, or regular expression pattern matches."
      },
      {
        "id": 5,
        "topic": "GraphQL Storefront API Pagination",
        "question": "How does cursor-based pagination operate when retrieving large lists of products via the GraphQL Storefront or Admin API?",
        "options": [
          "You specify a page size (`first: N`) along with a cursor (`after: $cursor`), retrieving `pageInfo.endCursor` and `pageInfo.hasNextPage` to request subsequent slices.",
          "You pass numeric page numbers (page: 1, page: 2) with fixed SQL offsets.",
          "You fetch all 100,000 products in a single unpaginated array.",
          "Shopify does not support pagination in GraphQL."
        ],
        "correctAnswer": 0,
        "explanation": "Shopify GraphQL APIs use Relay-style cursor pagination. You request `first: N, after: $cursor` and inspect `pageInfo { hasNextPage, endCursor }` to paginate efficiently without offset performance degradation."
      },
      {
        "id": 6,
        "topic": "Admin API GraphQL Queries",
        "question": "Which GraphQL Admin API query retrieves a specific product by its unique Global ID along with inventory quantities across all store locations?",
        "options": [
          "SELECT * FROM products WHERE id = 123",
          "query GetProductInventory($id: ID!) { product(id: $id) { id title variants(first: 5) { nodes { id inventoryItem { inventoryLevels(first: 5) { nodes { location { name } quantities(names: [\"available\"]) { quantity } } } } } } } }",
          "GET /admin/api/products/123/inventory",
          "fetchProductInventory(productId: \"123\")"
        ],
        "correctAnswer": 1,
        "explanation": "The GraphQL Admin API navigates the object graph from `product` to `variants`, `inventoryItem`, and `inventoryLevels`, retrieving granular location-specific available quantities in a single query."
      },
      {
        "id": 7,
        "topic": "Admin API GraphQL Cost & Throttling",
        "question": "How does the Shopify GraphQL Admin API enforce rate limits and calculate API consumption costs?",
        "options": [
          "By charging $0.05 USD directly to the developer credit card per query.",
          "By limiting each IP address to exactly 10 requests per calendar month.",
          "Through a leaky bucket algorithm with an allocated cost pool (e.g. 1000 points restoring at 50 points/second), where each field has a defined cost returned in `extensions.cost`.",
          "By pausing the server for 60 seconds after every 3 queries."
        ],
        "correctAnswer": 2,
        "explanation": "Shopify GraphQL APIs use a calculated cost model. Each requested field contributes points. Responses include `extensions.cost { requestedQueryCost, actualQueryCost, throttleStatus }`, and the bucket refills continuously over time."
      },
      {
        "id": 8,
        "topic": "Shopify App Architecture",
        "question": "In modern Shopify app development using Remix or Node, what is the purpose of the App Bridge library?",
        "options": [
          "It replaces HTML with PDF documents.",
          "It compiles Liquid code into native iOS swift binaries.",
          "It connects Shopify directly to local MySQL databases without internet.",
          "It is an embedded UI bridge that allows the web app running inside an iframe in the Shopify Admin to communicate securely with the parent Shopify Admin shell for titles, modals, and toasts."
        ],
        "correctAnswer": 3,
        "explanation": "Shopify App Bridge provides seamless, secure communication between embedded iframe applications and the surrounding Shopify Admin, enabling unified navigation, modal dialogs, contextual save bars, and toasts."
      },
      {
        "id": 9,
        "topic": "Session Tokens (JWT) vs Legacy Cookies",
        "question": "Why does modern Shopify embedded app architecture require Session Tokens (JWT) instead of traditional third-party session cookies?",
        "options": [
          "Because modern browsers (Safari, Chrome, Firefox) block third-party cookies by default inside iframes (ITP), breaking cookie-based auth in embedded apps.",
          "Because cookies can only hold 4 bytes of data.",
          "Because JWT tokens delete database records on every request.",
          "Because Shopify banned all JavaScript from apps in 2022."
        ],
        "correctAnswer": 0,
        "explanation": "Intelligent Tracking Prevention (ITP) and third-party cookie blocking prevent embedded iframes from maintaining traditional session cookies. App Bridge Session Tokens (short-lived signed JWTs) provide reliable, privacy-safe authentication."
      },
      {
        "id": 10,
        "topic": "OAuth 2.0 Authorization Flow",
        "question": "During the Shopify OAuth 2.0 installation flow, what is the critical step performed immediately after the merchant approves requested access scopes?",
        "options": [
          "The app displays the merchant password in the URL bar.",
          "Shopify redirects to the app callback URL with a temporary authorization `code` and `hmac`, which the app backend validates and exchanges via POST to `/admin/oauth/access_token` for a permanent offline access token.",
          "Shopify emails the source code to the merchant.",
          "The app restarts the merchant store server."
        ],
        "correctAnswer": 1,
        "explanation": "In OAuth 2.0, Shopify returns a temporary authorization code. The app backend verifies the HMAC parameter to prevent forgery and exchanges the code with Shopify’s token endpoint for an encrypted access token."
      },
      {
        "id": 11,
        "topic": "OAuth Access Scopes & Least Privilege",
        "question": "Why should a custom Shopify app request only the minimum required access scopes (e.g. `read_products` instead of `write_orders, write_customers`)?",
        "options": [
          "Because each scope costs $500 per month on Shopify.",
          "Because requesting more than 1 scope crashes the Shopify CLI.",
          "Following the principle of least privilege minimizes security exposure, builds merchant trust, and reduces approval friction during Shopify App Store reviews.",
          "Because apps with write permissions cannot use GraphQL."
        ],
        "correctAnswer": 2,
        "explanation": "The principle of least privilege ensures your app only accesses data essential for its operation, minimizing the blast radius in case of credentials leakage and meeting Shopify security review standards."
      },
      {
        "id": 12,
        "topic": "Webhooks & Message Queues",
        "question": "When receiving high-volume webhooks (e.g. during Black Friday flash sales), what is the recommended architectural pattern for processing payloads reliably?",
        "options": [
          "Block the client browser until the database finishes indexing.",
          "Perform all heavy image processing and database joins synchronously in the HTTP request before responding.",
          "Drop 90% of incoming webhooks to avoid server load.",
          "Acknowledge the webhook with HTTP 200 OK immediately after HMAC validation, push the job to a Redis/BullMQ background queue, and process business logic asynchronously in worker threads."
        ],
        "correctAnswer": 3,
        "explanation": "To satisfy Shopify’s 5-second timeout and handle traffic spikes, webhook handlers must validate HMAC, push payloads to durable message queues (Redis/BullMQ/SQS), return 200 OK immediately, and process jobs with isolated worker pools."
      },
      {
        "id": 13,
        "topic": "Shopify Cart API Line Item Properties",
        "question": "When a customer customizes a product (e.g. enters custom engraving text) before adding to cart, where is this data stored in the Shopify Cart object?",
        "options": [
          "Inside the line item `properties` hash (e.g. `properties: { \"Engraving\": \"Skillora AI\" }`).",
          "In a temporary global CSS variable.",
          "In the store owner’s personal email inbox.",
          "Inside the theme settings_schema.json file."
        ],
        "correctAnswer": 0,
        "explanation": "Custom customer inputs (engraving, gift notes, custom file uploads) are passed as line item `properties` in the `/cart/add.js` payload and persist through checkout and order fulfillment."
      },
      {
        "id": 14,
        "topic": "Theme App Extensions vs Direct Theme Edits",
        "question": "What is the architectural advantage of delivering app functionality via Theme App Extensions (App Blocks & App Embeds) instead of injecting Liquid code directly via the Asset API?",
        "options": [
          "Theme app extensions run only on Internet Explorer.",
          "Theme app extensions keep app code isolated, enable visual merchant control in the Theme Editor, and ensure 100% clean uninstalls without leaving ghost Liquid code behind.",
          "Theme app extensions cannot use JavaScript.",
          "Theme app extensions delete the theme when uninstalled."
        ],
        "correctAnswer": 1,
        "explanation": "Theme App Extensions (introduced in OS 2.0) eliminate \"theme pollution\". When a merchant uninstalls an app, all associated App Blocks and Embeds are cleanly removed without leaving orphaned code in theme files."
      },
      {
        "id": 15,
        "topic": "GraphQL Admin API Mutations",
        "question": "When executing the `productCreate` mutation in the GraphQL Admin API, how does the API notify the client of validation failures (e.g. missing required title)?",
        "options": [
          "By crashing the HTTP server with 500 Internal Server Error.",
          "By sending an SMS message to the store owner.",
          "Through the `userErrors` array inside the mutation response containing the specific `field` and `message`.",
          "By returning an empty string."
        ],
        "correctAnswer": 2,
        "explanation": "Shopify GraphQL mutations return a 200 OK HTTP response with a `userErrors` array. Developers must inspect `userErrors` to identify validation errors and present clear feedback to users."
      },
      {
        "id": 16,
        "topic": "Section Rendering API",
        "question": "How does the Shopify Section Rendering API optimize client-side cart drawer updates when an item is added via AJAX?",
        "options": [
          "It forces the browser to refresh all tabs.",
          "It renders PDF invoices inside the browser console.",
          "It replaces Shopify themes with WordPress plugins.",
          "It allows client JavaScript to request pre-rendered HTML for specific section IDs (e.g. `?sections=cart-drawer,cart-icon-bubble`) directly from the server, eliminating client-side template duplication."
        ],
        "correctAnswer": 3,
        "explanation": "The Section Rendering API lets client-side JavaScript request HTML partials for specific sections on the fly, ensuring server-rendered Liquid consistency without writing duplicate client template logic."
      },
      {
        "id": 17,
        "topic": "Shopify CLI App Development",
        "question": "When starting local development for a Shopify App using Shopify CLI (`shopify app dev`), what does the CLI automatically provision?",
        "options": [
          "A secure Cloudflare tunnel/proxy for webhook forwarding, environment variables, automatic App Bridge registration, and a development store install link.",
          "A physical dedicated server shipped to the developer address.",
          "A new credit card with $10,000 credit.",
          "A live production domain on the public internet."
        ],
        "correctAnswer": 0,
        "explanation": "`shopify app dev` establishes a local SSL tunnel, syncs configuration files (`shopify.app.toml`), forwards webhooks to localhost, sets up OAuth credentials, and generates a one-click installation URL on your test store."
      },
      {
        "id": 18,
        "topic": "Metaobject Storefront Routing",
        "question": "How can Shopify Metaobjects be configured to generate individual public landing pages on the Online Store (e.g. /pages/authors/alex-dev)?",
        "options": [
          "By manually writing static HTML files for every author in the assets directory.",
          "By enabling Web Pages capabilities on the Metaobject definition in Shopify Admin and creating a matching `templates/metaobject/author.json` template in the theme.",
          "Metaobjects can never have public web pages.",
          "By converting metaobjects into blog posts with a cron job."
        ],
        "correctAnswer": 1,
        "explanation": "Shopify allows Metaobjects to act as standalone web pages. Enabling the Web Pages feature and creating a `templates/metaobject/{type}.json` template provides dynamic routing and SEO capabilities for custom entities."
      },
      {
        "id": 19,
        "topic": "Theme Performance & Font Loading",
        "question": "Which font loading strategy is recommended in Shopify themes to prevent Flash of Invisible Text (FOIT) and improve First Contentful Paint (FCP)?",
        "options": [
          "Disabling all typography and using only raster images for text.",
          "Loading 50 Google Fonts synchronously in the document head.",
          "Using `font-display: swap;` on custom font-face declarations and preloading critical web fonts in layout/theme.liquid.",
          "Embedding 10MB TTF font files directly into HTML attributes."
        ],
        "correctAnswer": 2,
        "explanation": "Applying `font-display: swap;` renders fallback system fonts immediately while custom fonts download, preventing invisible text and accelerating perceived page load speeds."
      },
      {
        "id": 20,
        "topic": "App Data Persistence & Databases",
        "question": "When developing a multi-tenant Shopify App that stores custom configuration for thousands of stores, how should store records be partitioned in the database?",
        "options": [
          "By storing merchant settings in the client browser cookie.",
          "By saving all store data in a single plain text file on the developer desktop.",
          "By creating a completely new database server instance for every single merchant.",
          "By using a composite primary key or foreign key index on the unique Shopify shop domain (`shop_domain`, e.g. `store.myshopify.com`) and verifying shop identity on every authenticated request."
        ],
        "correctAnswer": 3,
        "explanation": "Multi-tenant Shopify applications index records by `shop_domain` or `shop_id` with strict foreign key constraints and enforce tenant isolation in all database queries to prevent cross-tenant data leakage."
      },
      {
        "id": 21,
        "topic": "GraphQL Query Aliases & Directives",
        "question": "In GraphQL Admin queries, what is the purpose of using field aliases (e.g. `primaryImage: image(id: $id1)`)?",
        "options": [
          "To rename returned fields in the response and fetch the same field multiple times with different arguments in a single query.",
          "To hide fields from the network inspector.",
          "To convert GraphQL into REST automatically.",
          "To encrypt query responses on the server."
        ],
        "correctAnswer": 0,
        "explanation": "GraphQL field aliases let you query the same field multiple times with different arguments (e.g. querying two different variant images) within the same selection set while renaming the output keys."
      },
      {
        "id": 22,
        "topic": "GraphQL Bulk Operations API",
        "question": "For exporting or synchronizing millions of products or orders from Shopify to an external database, which Admin API mechanism is recommended over standard pagination?",
        "options": [
          "Writing an infinite while-loop that sends 1,000 REST requests per second.",
          "The GraphQL Bulk Operations API (`bulkOperationRunQuery`), which compiles queries into a single asynchronous JSON Lines (JSONL) file export on Shopify cloud infrastructure.",
          "Asking the merchant to manually copy and paste products into Excel.",
          "Downloading raw database SQL dumps from Shopify support."
        ],
        "correctAnswer": 1,
        "explanation": "The GraphQL Bulk Operations API handles millions of records without hitting API rate limits. Shopify executes the query asynchronously and produces a downloadable JSONL file stream."
      },
      {
        "id": 23,
        "topic": "App Embed Blocks & Global Injection",
        "question": "Where are App Embed blocks configured and activated by merchants in Online Store 2.0 themes?",
        "options": [
          "Inside the payment gateway settings.",
          "In the store DNS configuration panel.",
          "In the \"App embeds\" tab of the visual Theme Editor, allowing merchants to toggle global app scripts on or off across all pages without editing theme code.",
          "In the customer account login page."
        ],
        "correctAnswer": 2,
        "explanation": "App Embed blocks live in the \"App embeds\" sidebar tab in the Theme Editor. Merchants can activate or deactivate global scripts (such as chat widgets or analytics tags) with a simple toggle switch."
      },
      {
        "id": 24,
        "topic": "Liquid Iteration Limits & Performance",
        "question": "What is the hard architectural limit on the number of iterations allowed within a single `for` loop in Shopify Liquid templates?",
        "options": [
          "Exactly 1 item per loop.",
          "1,000,000 items per loop.",
          "There is no limit; Liquid loops run indefinitely.",
          "50 items per loop (unless wrapped with `paginate` which allows up to 50 items per page)."
        ],
        "correctAnswer": 3,
        "explanation": "Shopify Liquid enforces a strict limit of 50 iterations per loop on collections and product arrays to protect server performance. Accessing more items requires pagination."
      },
      {
        "id": 25,
        "topic": "Theme Localization & Translations",
        "question": "How are multi-language storefront strings structured and accessed in Online Store 2.0 themes?",
        "options": [
          "Strings are stored as key-value JSON trees in `locales/en.default.json`, `locales/fr.json`, etc., and rendered in Liquid using the `{{ 'namespace.key' | t }}` filter.",
          "Strings are hardcoded in Liquid with Google Translate iframes.",
          "Translations are saved in the browser localStorage.",
          "Translations require building 5 separate themes for each language."
        ],
        "correctAnswer": 0,
        "explanation": "Locale JSON files in `locales/` define translation strings referenced via `{{ 'general.newsletter.submit' | t }}`. Shopify automatically serves the matching locale based on buyer language settings."
      },
      {
        "id": 26,
        "topic": "Shopify App Bridge Toast & Modals",
        "question": "When using Shopify App Bridge in a React/Remix embedded app, what is the correct method for displaying native administrative toast notifications to merchants?",
        "options": [
          "Creating a custom HTML `<div class=\"toast\">` that breaks out of the iframe using CSS hacks.",
          "Using the `shopify.toast.show(\"Action succeeded!\")` API from App Bridge.",
          "Triggering a native browser `alert()` modal dialog.",
          "Sending an email to the merchant on every button click."
        ],
        "correctAnswer": 1,
        "explanation": "Shopify App Bridge provides native UI primitives like `shopify.toast.show()`, `shopify.modal.show()`, and `shopify.saveBar.show()` that render directly in the parent Shopify Admin interface."
      },
      {
        "id": 27,
        "topic": "Secure Webhook De-registration",
        "question": "What happens if your app’s webhook receiver endpoint returns HTTP 410 Gone or consistently fails with 5xx errors for 48 hours?",
        "options": [
          "Shopify shuts down the merchant’s entire store.",
          "Shopify sends a police notification to the developer.",
          "Shopify automatically deletes the webhook subscription to protect platform resources.",
          "The app is automatically awarded 5 stars on the App Store."
        ],
        "correctAnswer": 2,
        "explanation": "If a webhook endpoint fails continuously for 48 hours or responds with HTTP 410 Gone, Shopify marks the subscription broken and automatically removes it."
      },
      {
        "id": 28,
        "topic": "Theme Asset Bundling with Vite",
        "question": "When using Vite to bundle TypeScript and Tailwind CSS for a Shopify theme, why must output assets be placed into the theme’s `assets/` directory with static filenames?",
        "options": [
          "Because CSS files must be written in XML format.",
          "Because Vite only works on Linux machines.",
          "Because Shopify does not support JavaScript files larger than 10 bytes.",
          "Because Shopify Liquid references theme assets using `{{ 'theme.js' | asset_url }}`, requiring predictable file paths without dynamic hash renames that break Liquid filters."
        ],
        "correctAnswer": 3,
        "explanation": "Liquid’s `asset_url` filter resolves asset URLs based on predictable filenames (e.g. `theme.js`, `theme.css`). Build tools like Vite must output clean static filenames to `assets/`."
      },
      {
        "id": 29,
        "topic": "Storefront API Customer Authentication",
        "question": "In a custom headless storefront, how does a user authenticate and manage their customer account via the Storefront API?",
        "options": [
          "By calling the `customerAccessTokenCreate` mutation with email and password, receiving a `customerAccessToken` passed in subsequent customer queries.",
          "By passing the store owner’s Admin API token in the client URL.",
          "By storing customer passwords in plain text cookies.",
          "Customer accounts are not supported in the Storefront API."
        ],
        "correctAnswer": 0,
        "explanation": "The Storefront API provides `customerAccessTokenCreate`, returning a secure customer access token that unlocks customer order history, saved addresses, and profile mutations."
      },
      {
        "id": 30,
        "topic": "App Review & Security Standards",
        "question": "Prior to submitting a custom or public app for official Shopify App Review, which security vulnerability must be rigorously verified as patched?",
        "options": [
          "Ensuring the app has at least 1,000 CSS animations on the landing page.",
          "Ensuring all OAuth redirects validate the `hmac` query parameter, verifying all Webhooks check HMAC SHA-256 signatures, and enforcing strict CORS and CSP headers against Clickjacking (X-Frame-Options / frame-ancestors).",
          "Making sure all API secrets are printed to the browser console for debugging.",
          "Disabling HTTPS and running the app on unencrypted port 80."
        ],
        "correctAnswer": 1,
        "explanation": "Shopify App Review enforces strict security checks: valid HMAC validation on OAuth and Webhooks, Content Security Policy (`frame-ancestors https://*.myshopify.com https://admin.shopify.com`), and sanitized user inputs."
      }
    ]
  }
];
