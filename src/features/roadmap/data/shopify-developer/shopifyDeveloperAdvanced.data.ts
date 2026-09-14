import { Task, QuizQuestion } from '../../types/roadmap.types';

export const SHOPIFY_DEV_ADVANCED_ASSESSMENT: QuizQuestion[] = [
  {
    "id": 1,
    "topic": "Shopify Functions Execution Model",
    "question": "How do Shopify Functions execute within the Shopify platform, and why do they replace legacy Shopify Scripts?",
    "options": [
      "Shopify Functions compile to WebAssembly (Wasm) and execute directly on Shopify’s global low-latency edge infrastructure in under 5ms, providing crash-safe, scalable custom backend logic without hosting overhead.",
      "Shopify Functions run inside client browser localStorage.",
      "Shopify Functions are slow Python scripts running on AWS Lambda that execute after orders are fulfilled.",
      "Shopify Functions are written strictly in raw HTML and CSS."
    ],
    "correctAnswer": 0,
    "explanation": "Shopify Functions compile Rust or JavaScript into WebAssembly (Wasm). Shopify executes these Wasm binaries directly within its core checkout engine in under 5 milliseconds with zero merchant server hosting requirements."
  },
  {
    "id": 2,
    "topic": "Shopify Hydrogen & Oxygen",
    "question": "What is the architectural role of Shopify Hydrogen and Oxygen in enterprise headless commerce?",
    "options": [
      "Hydrogen is an old PHP CMS and Oxygen is a database for WordPress.",
      "Hydrogen is a Remix-based React framework optimized for building custom headless storefronts, while Oxygen is Shopify’s global serverless hosting platform for deploying Hydrogen apps at the edge with built-in subrequest caching.",
      "Hydrogen is a local CSS preprocessor that only runs on macOS.",
      "Hydrogen replaces Shopify Admin and Oxygen replaces credit card payment gateways."
    ],
    "correctAnswer": 1,
    "explanation": "Hydrogen is Shopify’s official React/Remix framework for headless commerce. Oxygen is Shopify’s global edge deployment platform designed specifically to run Hydrogen applications with high availability and subrequest caching."
  },
  {
    "id": 3,
    "topic": "Cart Transform Functions",
    "question": "Which capability does the Cart Transform API (via Shopify Functions) enable for advanced merchant merchandising?",
    "options": [
      "Deleting the entire store theme when a customer adds an item to cart.",
      "Sending physical postcards to customers via postal mail.",
      "Expanding a bundle product into individual component inventory line items, merging multiple items into a discounted bundle, or updating item prices dynamically at checkout.",
      "Converting all product titles into uppercase strings in the Admin database."
    ],
    "correctAnswer": 2,
    "explanation": "The Cart Transform Function API allows developers to intercept cart operations to expand bundle products into individual inventory components, merge separate items into bundle packages, or update operations before checkout completion."
  },
  {
    "id": 4,
    "topic": "Subrequest Caching in Hydrogen",
    "question": "How does Shopify Hydrogen implement subrequest caching to optimize Storefront GraphQL API response times?",
    "options": [
      "By forcing every customer to download a 500MB zip file.",
      "By disabling all network requests and using hardcoded JSON files.",
      "By saving all products in browser IndexedDB on page load.",
      "By utilizing the Cache-Control header strategy (`CacheShort`, `CacheLong`, `CacheCustom`) with Oxygen edge network caching (stale-while-revalidate), serving cached queries in sub-milliseconds."
    ],
    "correctAnswer": 3,
    "explanation": "Hydrogen provides fine-grained subrequest caching utilities (`stale-while-revalidate`, `max-age`, `s-maxage`) that cache GraphQL queries at Oxygen edge points, drastically reducing origin load and latency."
  },
  {
    "id": 5,
    "topic": "Checkout UI Extension Sandboxing",
    "question": "Why are Checkout UI Extensions restricted from making arbitrary third-party `fetch()` network requests to untrusted domains?",
    "options": [
      "To enforce strict PCI-DSS compliance, protect buyer credit card and personally identifiable information (PII), and prevent malicious script injections in the payment funnel.",
      "Because Shopify servers do not support internet connections.",
      "Because JavaScript is unable to make HTTP requests in 2024.",
      "Because third-party requests only work in Internet Explorer."
    ],
    "correctAnswer": 0,
    "explanation": "Checkout UI Extensions run in secure sandboxes to maintain strict PCI-DSS compliance and prevent data exfiltration of customer credentials, addresses, and payment data."
  },
  {
    "id": 6,
    "topic": "GraphQL Bulk Operations JSONL",
    "question": "When consuming the downloadable JSON Lines (JSONL) file from a completed GraphQL Bulk Operation, how are parent-child relationships (e.g. Products and Variants) represented?",
    "options": [
      "All children are nested inside a 50GB single JSON object.",
      "Each child row contains a `__parentId` field referencing the `id` of its corresponding parent entity in the JSONL stream.",
      "Children are stored in a separate SQLite database file.",
      "Parent and child records are sorted randomly with no relation."
    ],
    "correctAnswer": 1,
    "explanation": "In Shopify Bulk Operation JSONL exports, child objects (such as ProductVariant or Metafield) are streamed as individual lines containing a `__parentId` property matching their parent object GID."
  },
  {
    "id": 7,
    "topic": "Shopify App Bridge Session Token Verification",
    "question": "How does an app backend authenticate incoming requests from an embedded App Bridge frontend without cookies?",
    "options": [
      "The backend checks if the request comes from an IP address in Canada.",
      "The frontend sends the store owner’s personal password in plain text.",
      "The frontend sends a short-lived RS256-signed JWT Session Token in the `Authorization: Bearer <token>` header, which the backend verifies using Shopify’s public key, checking the `dest` (shop domain) and `exp` claims.",
      "The backend asks the user to answer a security question on every click."
    ],
    "correctAnswer": 2,
    "explanation": "App Bridge generates a short-lived JWT session token signed by Shopify. The app server verifies the token signature using the app shared secret or Shopify JWKS, verifying the `dest` claim to confirm the requesting shop identity."
  },
  {
    "id": 8,
    "topic": "Redis Distributed Locking for Inventory Sync",
    "question": "Why is distributed locking (e.g. Redlock algorithm with Redis) critical when multiple background workers synchronize inventory for high-velocity flash sale stores?",
    "options": [
      "To bypass Shopify API rate limits entirely.",
      "To make the Redis database run 1,000 times faster.",
      "To encrypt customer credit cards on the worker node.",
      "To prevent concurrent race conditions where two workers simultaneously read outdated inventory counts and perform conflicting updates, resulting in overselling or stock discrepancies."
    ],
    "correctAnswer": 3,
    "explanation": "Distributed locks ensure that only one worker processes inventory mutations for a specific SKU/location at any given millisecond, preventing race conditions and inventory overselling."
  },
  {
    "id": 9,
    "topic": "Shopify Web Pixels API",
    "question": "What is the architectural purpose of the Shopify Web Pixels API in modern marketing and analytics tracking?",
    "options": [
      "It executes tracking scripts in an isolated, privacy-compliant web worker sandbox that subscribes to standardized customer events (`page_viewed`, `product_added_to_cart`, `checkout_completed`) without degrading storefront performance.",
      "It increases image resolution on mobile screens by 400%.",
      "It allows tracking pixels to directly alter checkout prices.",
      "It converts HTML templates into JPEG images."
    ],
    "correctAnswer": 0,
    "explanation": "The Web Pixels API isolates marketing tags into a dedicated sandbox worker, receiving normalized customer events via a secure event bus while respecting customer consent preferences (GDPR/CCPA)."
  },
  {
    "id": 10,
    "topic": "Mandatory Compliance Webhooks",
    "question": "Which three mandatory compliance webhooks are required by Shopify for all public and custom App Store applications?",
    "options": [
      "`orders/create`, `products/delete`, and `inventory/update`.",
      "`customers/data_request`, `customers/redact`, and `shop/redact`.",
      "`billing/charge`, `theme/publish`, and `admin/login`.",
      "`email/send`, `sms/verify`, and `card/charge`."
    ],
    "correctAnswer": 1,
    "explanation": "To comply with global data privacy regulations (GDPR/CCPA), all Shopify apps must implement endpoints for `customers/data_request` (exporting customer data), `customers/redact` (erasing customer data), and `shop/redact` (erasing store data 48h after uninstall)."
  },
  {
    "id": 11,
    "topic": "Shopify Function Input GraphQL Schema",
    "question": "How do Shopify Functions define the data payload they receive from the Shopify checkout runtime?",
    "options": [
      "By making synchronous HTTP REST calls during checkout execution.",
      "By reading environment variables from a local `.env` file.",
      "Through an `input.graphql` query file located in the function directory, which instructs Shopify exactly which cart fields, discounts, or metafields to serialize and pass to the function’s Run function.",
      "Through a hardcoded SQL query."
    ],
    "correctAnswer": 2,
    "explanation": "Every Shopify Function contains an `input.graphql` file that declares the precise data requirements (cart lines, customer tags, custom metafields). Shopify compiles this query and passes the JSON input to the compiled Wasm function."
  },
  {
    "id": 12,
    "topic": "Multi-Tenant Database Row-Level Security",
    "question": "In an enterprise multi-tenant Shopify application database (PostgreSQL), how should data isolation between competing merchant stores be enforced?",
    "options": [
      "By giving all merchants shared admin credentials.",
      "By relying on frontend JavaScript to filter out other merchants’ data.",
      "By disabling database indexes on all tables.",
      "By implementing PostgreSQL Row-Level Security (RLS) policies or tenant-aware ORM middleware that automatically injects `WHERE shop_id = current_tenant` into every single query."
    ],
    "correctAnswer": 3,
    "explanation": "Row-Level Security (RLS) and database middleware enforce strict tenant boundaries at the database layer, guaranteeing that a bug in application business logic cannot leak one merchant’s customer data to another."
  },
  {
    "id": 13,
    "topic": "Admin API GraphQL Cost Optimization",
    "question": "When designing high-throughput Shopify Admin GraphQL queries, which technique minimizes calculated query cost?",
    "options": [
      "Selecting only necessary scalar fields, utilizing pagination with small batch sizes (e.g. `first: 20`), and avoiding deep nested connections unless strictly required.",
      "Requesting all available fields using wildcards (`*`).",
      "Wrapping every query in 5 nested loops.",
      "Sending queries over plain HTTP without compression."
    ],
    "correctAnswer": 0,
    "explanation": "GraphQL query costs in Shopify correlate directly with field selections and connection multipliers. Requesting only essential fields and limiting connection sizes conserves cost points and prevents throttling."
  },
  {
    "id": 14,
    "topic": "Content Security Policy for Embedded Apps",
    "question": "Which HTTP Content Security Policy (CSP) header must an embedded Shopify application server return to prevent clickjacking while allowing rendering in the Shopify Admin?",
    "options": [
      "`Content-Security-Policy: frame-ancestors *;`",
      "`Content-Security-Policy: frame-ancestors https://*.myshopify.com https://admin.shopify.com;`",
      "`X-Frame-Options: DENY`",
      "`Content-Security-Policy: default-src 'none';`"
    ],
    "correctAnswer": 1,
    "explanation": "Setting `frame-ancestors https://*.myshopify.com https://admin.shopify.com` allows the embedded iframe to render exclusively inside official Shopify Admin domains while blocking embedding on unauthorized third-party domains."
  },
  {
    "id": 15,
    "topic": "Shopify Discount Function Allocation API",
    "question": "In a custom Shopify Discount Function written in Rust or JS, what is returned in the `FunctionResult` to apply a percentage discount to specific cart lines?",
    "options": [
      "A redirect header to an external checkout page.",
      "A raw SQL UPDATE statement modifying product prices in the database.",
      "A `FunctionResult` object containing `discounts: [{ targets: [{ productVariant: { id: ... } }], value: { percentage: { value: 15.0 } }, message: \"15% Developer VIP Discount\" }]`.",
      "A plain text string saying \"DISCOUNT_APPLIED\"."
    ],
    "correctAnswer": 2,
    "explanation": "Discount Functions return a structured `FunctionResult` with targets, discount values (percentage or fixed amount), and customer-facing promotion messages evaluated directly by the checkout engine."
  },
  {
    "id": 16,
    "topic": "App Billing API & Subscriptions",
    "question": "How does an app charge merchants recurring subscription fees via the Shopify GraphQL Admin API?",
    "options": [
      "By sending a monthly paper invoice in the mail.",
      "By asking the merchant to enter their credit card on an unencrypted web form.",
      "By automatically charging the merchant’s bank account without consent.",
      "By executing the `appSubscriptionCreate` mutation, which generates a `confirmationUrl` where the merchant approves the recurring billing charge within the native Shopify Admin."
    ],
    "correctAnswer": 3,
    "explanation": "The `appSubscriptionCreate` mutation initiates a recurring billing contract. Shopify returns a `confirmationUrl` where the merchant reviews and authorizes the charge on their consolidated Shopify bill."
  },
  {
    "id": 17,
    "topic": "Zero-Downtime Theme Blue-Green Deployment",
    "question": "How do enterprise teams execute zero-downtime theme deployments during high-traffic promotional events?",
    "options": [
      "By deploying and thoroughly testing the candidate theme in an unpublished theme slot, executing automated E2E tests against the preview URL, and calling `themePublish` via the Admin API to swap live themes instantaneously.",
      "By taking the storefront offline for 4 hours during peak sales.",
      "By deleting the live theme and rebuilding it manually line by line.",
      "By asking all customers to clear their browser cache simultaneously."
    ],
    "correctAnswer": 0,
    "explanation": "Publishing an unpublished theme slot via the API executes an instantaneous pointer swap at the CDN edge with zero downtime or interrupted checkout sessions."
  },
  {
    "id": 18,
    "topic": "Event-Driven Webhook Dead Letter Queue (DLQ)",
    "question": "What is the purpose of a Dead Letter Queue (DLQ) in an enterprise Shopify webhook consumer architecture?",
    "options": [
      "To permanently delete all webhook logs without investigation.",
      "To isolate and persist malformed or persistently failing webhook payloads after maximum retry attempts for inspection, debugging, and replay without blocking healthy worker queues.",
      "To speed up consumer internet bandwidth.",
      "To send spam emails to competitors."
    ],
    "correctAnswer": 1,
    "explanation": "A Dead Letter Queue captures poisoned or failed payloads that have exhausted all retry attempts, allowing engineering teams to inspect errors, fix root causes, and replay events safely."
  },
  {
    "id": 19,
    "topic": "Shopify CLI Extension Development",
    "question": "Which Shopify CLI command generates a new Checkout UI Extension or Shopify Function within an existing app project?",
    "options": [
      "`npm install --save-extension`",
      "`shopify theme create --checkout`",
      "`shopify app generate extension`",
      "`shopify admin extension:init`"
    ],
    "correctAnswer": 2,
    "explanation": "Running `shopify app generate extension` presents an interactive prompt to select and scaffold Checkout UI Extensions, Shopify Functions, Theme App Extensions, or Admin action extensions."
  },
  {
    "id": 20,
    "topic": "GraphQL Fragments for Reusable Data Trees",
    "question": "Why should enterprise Shopify applications utilize GraphQL fragments across Storefront and Admin API queries?",
    "options": [
      "To convert GraphQL into REST automatically.",
      "To increase query payload size unnecessarily.",
      "Because GraphQL fails without fragments.",
      "To enforce unified data types across UI components, reduce boilerplate code, and ensure consistent field selection across multiple queries."
    ],
    "correctAnswer": 3,
    "explanation": "GraphQL fragments promote DRY (Don’t Repeat Yourself) code, allowing component-level data dependencies to be co-located with UI components and composed into parent queries."
  },
  {
    "id": 21,
    "topic": "Headless Storefront SEO & SSR",
    "question": "When architecting a headless Shopify storefront with Hydrogen or Next.js, how are SEO meta tags and JSON-LD structured data generated?",
    "options": [
      "Server-side rendered on edge servers using Storefront API product/collection SEO fields, returning complete `<title>`, Open Graph tags, canonical URLs, and Schema.org JSON-LD microdata in the initial HTML document.",
      "Rendered purely client-side via JavaScript 10 seconds after page load.",
      "Headless storefronts cannot have SEO.",
      "By relying on Shopify theme liquid snippets inside the React bundle."
    ],
    "correctAnswer": 0,
    "explanation": "Edge Server-Side Rendering (SSR) generates full semantic HTML, Open Graph meta tags, canonical links, and JSON-LD structured schemas on the initial response for immediate search crawler indexing."
  },
  {
    "id": 22,
    "topic": "OAuth Nonce / State Parameter Security",
    "question": "In the Shopify OAuth 2.0 authorization request, what vulnerability does the `state` (nonce) parameter protect against?",
    "options": [
      "SQL Injection attacks on the Shopify core database.",
      "Cross-Site Request Forgery (CSRF) attacks, by ensuring that the authorization callback was initiated by the legitimate user session.",
      "Denial of Service (DoS) attacks on DNS root servers.",
      "CSS layout shifts in the Theme Editor."
    ],
    "correctAnswer": 1,
    "explanation": "The `state` parameter contains a cryptographically random nonce stored in the user session. Verifying this value in the OAuth callback ensures the authorization flow was initiated by the genuine user, mitigating CSRF."
  },
  {
    "id": 23,
    "topic": "Shopify Functions Cargo Compilation",
    "question": "When building a Shopify Function written in Rust, which command compiles the code into the WebAssembly target required by Shopify?",
    "options": [
      "`rustc main.rs --target=windows`",
      "`npm run compile-exe`",
      "`cargo wasi build --release` (producing `target/wasm32-wasi/release/function.wasm`)",
      "`gcc function.c -o function.so`"
    ],
    "correctAnswer": 2,
    "explanation": "Rust Shopify Functions compile against the `wasm32-wasi` target using Cargo, producing a standalone WebAssembly binary deployed with the extension."
  },
  {
    "id": 24,
    "topic": "Automated Playwright E2E Testing for Shopify",
    "question": "When creating automated End-to-End (E2E) test suites for Shopify apps with Playwright, how should test authentication be structured for CI environments?",
    "options": [
      "By skipping all authentication tests entirely.",
      "By manually solving CAPTCHAs in real-time on every test run.",
      "By disabling all security and authentication on the production server.",
      "By mocking the JWT session token in localStorage or using pre-authenticated session state cookies injected during test initialization."
    ],
    "correctAnswer": 3,
    "explanation": "CI test harnesses inject pre-computed valid test session tokens or mock session state into localStorage/headers before each test run, enabling automated execution without interactive login prompts."
  },
  {
    "id": 25,
    "topic": "App Store Review Performance Benchmark",
    "question": "During official Shopify App Store reviews, what is the maximum acceptable TTFB (Time to First Byte) and page load time for embedded app dashboards?",
    "options": [
      "App pages should achieve sub-second TTFB and complete initial dashboard rendering in under 2.5 seconds to pass merchant experience standards.",
      "30 seconds per page load.",
      "5 minutes per button click.",
      "There are no performance requirements for Shopify apps."
    ],
    "correctAnswer": 0,
    "explanation": "Shopify App Review guidelines evaluate merchant UX rigor: fast TTFB (< 1s), responsive Polaris UI, clear loading skeletons, and zero unhandled server exceptions."
  },
  {
    "id": 26,
    "topic": "Shopify Theme App Extension Asset CDN Caching",
    "question": "How are static assets (CSS, JS, images) in Theme App Extensions served and cached by Shopify?",
    "options": [
      "Assets are hosted on the developer’s local laptop.",
      "Assets in the extension `assets/` folder are deployed to Shopify’s global Cloudflare CDN with immutable cache headers and referenced via the `{{ 'file.js' | asset_url }}` Liquid filter.",
      "Assets are recompiled on every page view.",
      "Assets are stored in the merchant’s Google Drive."
    ],
    "correctAnswer": 1,
    "explanation": "Theme App Extension assets are hosted on Shopify’s global CDN infrastructure, providing edge caching, automatic gzip/brotli compression, and fast global delivery."
  },
  {
    "id": 27,
    "topic": "GraphQL Bulk Mutation API Limits",
    "question": "How many mutations can be executed concurrently in a single standard GraphQL Admin API request batch?",
    "options": [
      "Exactly 0 mutations.",
      "1,000,000 mutations per millisecond.",
      "Standard requests execute mutations sequentially within query cost limits, while Bulk Import APIs should be used for massive batch datasets.",
      "Mutations can only be run once per day."
    ],
    "correctAnswer": 2,
    "explanation": "GraphQL mutations run sequentially in a request. For high-volume updates (e.g. bulk inventory updates), apps should use staged uploads and asynchronous bulk operations or batched jobs."
  },
  {
    "id": 28,
    "topic": "Customer Privacy API & Consent Tracking",
    "question": "How should a Shopify custom app respect buyer cookie consent choices under GDPR/CCPA before loading tracking scripts?",
    "options": [
      "By blocking all European visitors from viewing the site.",
      "By ignoring all user preferences and tracking everything.",
      "By asking users to mail a handwritten consent letter.",
      "By integrating with the Shopify Customer Privacy API (`window.Shopify.customerPrivacy.userCanBeTracked()`) and listening for the `visitorConsentCollected` event before activating marketing pixels."
    ],
    "correctAnswer": 3,
    "explanation": "The Shopify Customer Privacy API exposes helper methods and events to ensure tracking scripts only initialize when lawful buyer consent has been granted."
  },
  {
    "id": 29,
    "topic": "Webhooks Replay Attack Prevention",
    "question": "In addition to HMAC verification, how should a secure webhook receiver prevent replay attacks where an attacker re-sends an intercepted old payload?",
    "options": [
      "By checking the `X-Shopify-Webhook-Id` against a database of processed IDs and verifying that the `X-Shopify-Triggered-At` timestamp is within an acceptable threshold (e.g. within the last 15 minutes).",
      "By changing the app secret key every 3 seconds.",
      "By disabling webhooks entirely.",
      "By encrypting the server hard drive on every request."
    ],
    "correctAnswer": 0,
    "explanation": "Checking both the unique `X-Shopify-Webhook-Id` (idempotency) and verifying the timestamp freshness in `X-Shopify-Triggered-At` prevents replay attacks."
  },
  {
    "id": 30,
    "topic": "Shopify App Bridge Navigation Context",
    "question": "When an embedded Shopify app needs to redirect the merchant to a core Admin page (e.g. the Products admin list), how should the redirect be performed?",
    "options": [
      "Setting `window.location.href = \"/admin/products\"` inside the iframe, which breaks admin framing.",
      "Using App Bridge Navigation actions (e.g. `open(\"shopify://admin/products\", \"_top\")` or `Redirect.toAdminSection()`) to break out of the iframe cleanly.",
      "Showing a popup asking the user to open a new browser window.",
      "Sending an email with the link."
    ],
    "correctAnswer": 1,
    "explanation": "App Bridge provides dedicated redirect utilities that instruct the top-level parent Admin window to navigate safely without nesting administrative interfaces inside iframes."
  },
  {
    "id": 31,
    "topic": "Shopify Functions Payment Customization API",
    "question": "Which capability does the Payment Customization Function API provide during checkout?",
    "options": [
      "Printing physical checks on merchant printers.",
      "Processing credit card transactions directly on the app server.",
      "Hiding, reordering, or renaming payment gateway options (e.g. hiding Cash on Delivery for orders over $500 or for specific customer tags).",
      "Converting all prices to cryptocurrencies."
    ],
    "correctAnswer": 2,
    "explanation": "Payment Customization Functions allow merchants to hide, reorder, or rename available payment methods dynamically based on cart total, shipping address, or customer tags."
  },
  {
    "id": 32,
    "topic": "Shopify App Bridge Contextual SaveBar",
    "question": "When a merchant edits settings in an embedded app, how should unsaved changes be communicated in the UI according to Polaris guidelines?",
    "options": [
      "By flashing the entire screen in red.",
      "By popping up an unclosable alert box.",
      "By automatically saving without user awareness.",
      "By displaying the App Bridge Contextual SaveBar pinned to the top of the Admin window with \"Save\" and \"Discard\" actions."
    ],
    "correctAnswer": 3,
    "explanation": "The App Bridge Contextual SaveBar provides a unified pattern across Shopify for notifying merchants of dirty form states and providing standard Save/Discard triggers."
  },
  {
    "id": 33,
    "topic": "GraphQL Admin API Cursor Backward Pagination",
    "question": "How is backward pagination executed in the Shopify GraphQL Admin API?",
    "options": [
      "By specifying `last: N, before: $cursor` and inspecting `pageInfo.hasPreviousPage` and `pageInfo.startCursor`.",
      "By passing negative numbers to `first: -10`.",
      "Backward pagination is impossible in GraphQL.",
      "By sorting the array in reverse in client JavaScript."
    ],
    "correctAnswer": 0,
    "explanation": "Relay pagination supports backward traversal via `last: N, before: $cursor`, using `pageInfo.hasPreviousPage` and `pageInfo.startCursor` to traverse historical slices."
  },
  {
    "id": 34,
    "topic": "Shopify Functions Delivery Customization API",
    "question": "What is the primary function of the Delivery Customization Function API?",
    "options": [
      "Tracking delivery trucks with GPS satellites.",
      "Hiding, reordering, or renaming shipping delivery methods at checkout (e.g. offering free local delivery only for specific postal codes).",
      "Replacing FedEx drivers with drones.",
      "Calculating sales tax percentages."
    ],
    "correctAnswer": 1,
    "explanation": "Delivery Customization Functions allow merchants to conditionally modify, hide, or prioritize shipping options based on cart contents, destination address, and buyer tier."
  },
  {
    "id": 35,
    "topic": "Multi-Region Shopify Storefronts & Markets",
    "question": "How does Shopify Markets handle international multi-currency and multi-language storefront routing?",
    "options": [
      "By disabling international shipping entirely.",
      "By creating 50 separate Shopify stores and manually copying products.",
      "By utilizing localized subfolders (e.g. `/fr-ca`, `/de`) or international domains mapped to distinct Markets with automatic currency conversions and localized price lists in Liquid and GraphQL.",
      "By translating prices with client-side JavaScript regex."
    ],
    "correctAnswer": 2,
    "explanation": "Shopify Markets provides native multi-region commerce with localized URLs (`/en-gb`, `/de`), localized catalog pricing, and automatic currency conversion natively in Liquid and Storefront APIs."
  },
  {
    "id": 36,
    "topic": "Shopify App Event Logging & Telemetry",
    "question": "In production Shopify applications, why should OpenTelemetry, Winston/Pino structured logging, and APM tools (Datadog/Sentry) be integrated?",
    "options": [
      "To increase cloud hosting bills.",
      "To print merchant passwords to log aggregators.",
      "To slow down server execution.",
      "To monitor distributed trace context across webhook ingestion, database queries, and GraphQL API latency, enabling rapid diagnosis of production bottlenecks."
    ],
    "correctAnswer": 3,
    "explanation": "Structured logging and distributed tracing track request lifecycles, API consumption rates, queue latency, and uncaught exceptions across distributed cloud services."
  },
  {
    "id": 37,
    "topic": "App Scopes Upgrade Handshake",
    "question": "When a new version of an installed app requires additional access scopes (e.g. adding `read_discounts`), how must the app request the new permissions?",
    "options": [
      "By initiating an OAuth re-authorization redirect specifying the combined old and new scopes; Shopify prompts the merchant to approve the additional permissions before returning to the app.",
      "By attempting to query the API until permissions are granted automatically.",
      "By asking the merchant to uninstall and reinstall the app from scratch.",
      "By editing the store database directly."
    ],
    "correctAnswer": 0,
    "explanation": "When an app requires new scopes, it redirects the merchant to the OAuth authorization screen with the expanded scope string. Once accepted, Shopify updates the offline token permissions."
  },
  {
    "id": 38,
    "topic": "Shopify CLI App Configuration Versioning",
    "question": "How are extension definitions and app configurations deployed to Shopify in modern CLI 3.x workflows?",
    "options": [
      "By manually uploading zip files to the Partner Dashboard.",
      "By running `shopify app deploy`, which packages all app extensions, validates configurations against `shopify.app.toml`, and releases an atomic app version to the Shopify platform.",
      "By emailing extension code to Shopify support.",
      "By pushing code directly to the merchant’s development store theme."
    ],
    "correctAnswer": 1,
    "explanation": "`shopify app deploy` creates an atomic app release on Shopify, publishing all configured extensions (Checkout UI, Functions, Theme App Extensions) in a single synchronized release."
  },
  {
    "id": 39,
    "topic": "Secure Credential Rotation in CI/CD",
    "question": "What is the enterprise best practice for managing Shopify API keys, partner organization tokens, and database secrets in production CI/CD pipelines?",
    "options": [
      "Sharing secrets in unencrypted Slack channels.",
      "Hardcoding API secrets inside public repository README files.",
      "Storing secrets in encrypted secret managers (e.g. GitHub Secrets, AWS Secrets Manager, Doppler), with automated rotation policies and zero hardcoded credentials in source code.",
      "Printing secrets to Docker build logs."
    ],
    "correctAnswer": 2,
    "explanation": "Enterprise security requires isolated secrets management (GitHub Secrets, AWS Secrets Manager) with least-privilege service accounts, automated rotation, and audit trails."
  },
  {
    "id": 40,
    "topic": "App Store Review Automated Security Scanners",
    "question": "Which automated security tool does Shopify execute during App Store submission reviews to detect vulnerabilities?",
    "options": [
      "A grammar checker for product descriptions.",
      "A bot that clicks random buttons for 24 hours.",
      "An antivirus tool for Windows 95.",
      "Automated security analyzers that scan for exposed API keys, missing OAuth HMAC validation, unescaped user inputs (XSS/SQLi), insecure iframe embedding (CSP), and broken mandatory compliance webhooks."
    ],
    "correctAnswer": 3,
    "explanation": "Shopify’s automated submission pipeline scans app code, HTTP headers, OAuth flows, and webhook endpoints for OWASP vulnerabilities, CSP compliance, and GDPR webhook readiness."
  }
];

export const SHOPIFY_DEV_ADVANCED_TASKS: Task[] = [
  {
    "id": "shopify-dev-adv-01",
    "orderIndex": 1,
    "title": "1. Shopify App Development Architecture",
    "description": "Master enterprise-scale Shopify app architecture: multi-tenant topology, Remix server frameworks, Prisma multi-schema data layers, and App Bridge 3.x.",
    "duration": "65 mins",
    "xpReward": 250,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-app-01",
        "title": "Enterprise App Architecture Guide",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/getting-started"
      }
    ],
    "lessonContent": {
      "overview": "Enterprise Shopify apps must scale to thousands of merchants, process millions of webhook events during high-volume flash sales, and integrate seamlessly with the Shopify Admin. In this module, you will design robust multi-tenant architectures, configure Remix server adapters, manage database connection pooling with Prisma, and implement strict tenant isolation.",
      "objectives": [
        "Architect multi-tenant Shopify apps with PostgreSQL and Prisma connection pools.",
        "Configure Remix server routes with automated session token validation.",
        "Implement App Bridge 3.x navigation, modals, and contextual action bars.",
        "Enforce tenant data isolation across all database operations."
      ],
      "sections": [
        {
          "id": "sec-adv-remix-arch",
          "title": "Remix Server Architecture & Prisma Multi-Tenant Engine",
          "content": "The core of a production Shopify app combines Remix server routes with `@shopify/shopify-app-remix`. Every incoming request is authenticated using `authenticate.admin(request)`, which verifies the App Bridge session token and provides an authorized GraphQL Admin API client.",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "app/routes/app.inventory.tsx",
              "title": "Authenticated Remix Route with Admin GraphQL Client",
              "code": "import { json, type LoaderFunctionArgs, type ActionFunctionArgs } from \"@remix-run/node\";\nimport { useLoaderData, useSubmit, useNavigation } from \"@remix-run/react\";\nimport { authenticate } from \"../shopify.server\";\nimport { Page, Layout, Card, DataTable, Button, Banner } from \"@shopify/polaris\";\n\nexport const loader = async ({ request }: LoaderFunctionArgs) => {\n  const { admin, session } = await authenticate.admin(request);\n\n  const response = await admin.graphql(`\n    query GetInventoryItems {\n      products(first: 20) {\n        nodes {\n          id\n          title\n          totalInventory\n          variants(first: 5) {\n            nodes {\n              id\n              title\n              sku\n              inventoryQuantity\n            }\n          }\n        }\n      }\n    }\n  `);\n\n  const data = await response.json();\n  return json({ products: data.data.products.nodes, shop: session.shop });\n};\n\nexport default function InventoryRoute() {\n  const { products, shop } = useLoaderData<typeof loader>();\n  const navigation = useNavigation();\n  const submit = useSubmit();\n\n  const rows = products.flatMap(p => \n    p.variants.nodes.map(v => [p.title, v.title, v.sku || 'N/A', v.inventoryQuantity])\n  );\n\n  return (\n    <Page title=\"Inventory Command Center\" subtitle={`Connected to: ${shop}`}>\n      <Layout>\n        <Layout.Section>\n          <Card>\n            <DataTable\n              columnContentTypes={['text', 'text', 'text', 'numeric']}\n              headings={['Product', 'Variant', 'SKU', 'Available Stock']}\n              rows={rows}\n            />\n          </Card>\n        </Layout.Section>\n      </Layout>\n    </Page>\n  );\n}",
              "explanation": "Authenticated Remix loader verifying session tokens and querying Admin GraphQL directly."
            }
          ],
          "proTip": "Always use `authenticate.admin(request)` in your Remix loaders and actions. This utility automatically handles session token decryption, shop verification, and transparent token refreshing.",
          "commonMistakes": [
            "Attempting to read traditional cookies inside embedded iframe routes, which are blocked by browser third-party cookie restrictions.",
            "Executing unindexed database queries across the multi-tenant database without scoping by `shop_domain`."
          ]
        }
      ],
      "keyTakeaways": [
        "Use `@shopify/shopify-app-remix` to authenticate incoming requests via JWT session tokens.",
        "Prisma manages multi-tenant sessions and tenant-isolated business models.",
        "Combine Remix loaders with Polaris components for fast server-rendered admin interfaces."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-01",
          "title": "Implement Authenticated Action Handler",
          "instructions": "Write a Remix action function that authenticates the admin request and executes an Admin GraphQL mutation to update a product title.",
          "starterCode": "export const action = async ({ request }: ActionFunctionArgs) => {\n  // Code\n};",
          "solutionCode": "export const action = async ({ request }: ActionFunctionArgs) => {\n  const { admin } = await authenticate.admin(request);\n  const formData = await request.formData();\n  const id = formData.get(\"id\") as string;\n  const title = formData.get(\"title\") as string;\n\n  const response = await admin.graphql(`\n    mutation UpdateTitle($id: ID!, $title: String!) {\n      productUpdate(input: { id: $id, title: $title }) {\n        product { id title }\n        userErrors { field message }\n      }\n    }\n  `, { variables: { id, title } });\n\n  return json(await response.json());\n};"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-02",
    "orderIndex": 2,
    "title": "2. Advanced Admin GraphQL API",
    "description": "Master enterprise GraphQL Admin API operations: Bulk Operations API, asynchronous JSONL pipelines, cost optimization, and complex relational mutations.",
    "duration": "60 mins",
    "xpReward": 240,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-admin-01",
        "title": "Bulk Operations Guide",
        "type": "documentation",
        "url": "https://shopify.dev/docs/api/admin-graphql/latest/queries/bulkOperationRunQuery"
      }
    ],
    "lessonContent": {
      "overview": "When synchronizing large enterprise product catalogs or processing hundreds of thousands of historical orders, standard paginated queries hit API rate limits and cause latency spikes. In this module, you will master the GraphQL Bulk Operations API, parse asynchronous JSON Lines (JSONL) data streams, and orchestrate complex relational mutations.",
      "objectives": [
        "Initiate and monitor asynchronous Bulk Operation queries using `bulkOperationRunQuery`.",
        "Stream and parse multi-gigabyte JSONL export files with Node.js transform pipelines.",
        "Reconstruct parent-child relational entity graphs using the `__parentId` property.",
        "Optimize API cost budgets across distributed microservices."
      ],
      "sections": [
        {
          "id": "sec-bulk-operations",
          "title": "GraphQL Bulk Operations & Streaming JSONL Processor",
          "content": "The Bulk Operations API executes deep queries across Shopify database clusters, compiling the output into a single JSONL file URL. Your app server downloads the file and streams it line by line through a pipeline without loading the entire payload into RAM.",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "server/bulk-operation-runner.ts",
              "title": "Initiating & Streaming GraphQL Bulk Operations",
              "code": "import readline from 'readline';\nimport fs from 'fs';\nimport https from 'https';\n\nexport async function runCatalogBulkExport(adminClient: any) {\n  // 1. Trigger Bulk Operation\n  const mutation = `\n    mutation StartBulkProductExport {\n      bulkOperationRunQuery(\n        query: \"\"\"\n          {\n            products {\n              edges {\n                node {\n                  id\n                  title\n                  handle\n                  variants {\n                    edges {\n                      node {\n                        id\n                        price\n                        sku\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        \"\"\"\n      ) {\n        bulkOperation {\n          id\n          status\n        }\n        userErrors {\n          field\n          message\n        }\n      }\n    }\n  `;\n\n  const res = await adminClient.graphql(mutation);\n  const data = await res.json();\n  console.log('Bulk operation initiated:', data.data.bulkOperationRunQuery.bulkOperation.id);\n}\n\nexport function streamJsonLines(downloadUrl: string, onRow: (row: any) => void) {\n  https.get(downloadUrl, (response) => {\n    const rl = readline.createInterface({ input: response, crlfDelay: Infinity });\n    \n    rl.on('line', (line) => {\n      if (line.trim()) {\n        const parsed = JSON.parse(line);\n        onRow(parsed);\n      }\n    });\n\n    rl.on('close', () => {\n      console.log('Completed streaming bulk JSONL data export.');\n    });\n  });\n}",
              "explanation": "Asynchronous Bulk Operation query initiation and streaming JSONL line parser."
            }
          ],
          "proTip": "Only one Bulk Operation can execute per store at a time. Always check `currentBulkOperation` to verify if an operation is already `RUNNING` before calling `bulkOperationRunQuery`.",
          "commonMistakes": [
            "Attempting to load a multi-gigabyte JSONL bulk export file into memory with `fs.readFileSync` instead of streaming with `readline`.",
            "Triggering concurrent bulk operations, which results in a `MUTATION_FAILED` error from Shopify."
          ]
        }
      ],
      "keyTakeaways": [
        "Bulk Operations API processes millions of records asynchronously without rate limit throttles.",
        "Stream JSONL exports line-by-line using Node.js readline interfaces.",
        "Relate child rows (variants) to parents (products) using `__parentId`."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-02",
          "title": "Query Current Bulk Operation Status",
          "instructions": "Write a GraphQL query to check the status, errorCode, and url of the current bulk operation.",
          "starterCode": "query CheckBulkStatus {\n  // Query\n}",
          "solutionCode": "query CheckBulkStatus {\n  currentBulkOperation {\n    id\n    status\n    errorCode\n    createdAt\n    completedAt\n    objectCount\n    fileSize\n    url\n  }\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-03",
    "orderIndex": 3,
    "title": "3. Storefront API and Headless Commerce",
    "description": "Architect decoupled headless storefronts using Storefront API GraphQL, localized pricing, customer session management, and Cart API checkouts.",
    "duration": "55 mins",
    "xpReward": 230,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-hl-01",
        "title": "Headless Commerce Architecture",
        "type": "documentation",
        "url": "https://shopify.dev/docs/custom-storefronts"
      }
    ],
    "lessonContent": {
      "overview": "Headless commerce separates the frontend presentation layer from Shopify’s backend commerce engine. In this module, you will design headless architectures that query the Storefront API from edge compute runtimes, manage localized multi-currency pricing with `@inContext`, and execute frictionless checkout transitions.",
      "objectives": [
        "Design decoupled headless architecture topologies (Next.js, Astro, Remix) connected to Shopify.",
        "Implement internationalized pricing using `@inContext(country: $country, language: $language)`.",
        "Manage customer authentication and profile mutations via Storefront API tokens.",
        "Optimize edge caching strategies for headless product detail and collection pages."
      ],
      "sections": [
        {
          "id": "sec-headless-storefront",
          "title": "Decoupled Storefront Architecture & International Context",
          "content": "In headless setups, the frontend communicates exclusively via the Storefront API. Passing buyer context (country, language) ensures that prices, currencies, and tax calculations match the customer locale seamlessly.",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "lib/shopify-storefront-service.ts",
              "title": "Enterprise Headless Storefront Service with Context Support",
              "code": "export class HeadlessStorefrontService {\n  private endpoint: string;\n  private publicToken: string;\n\n  constructor(shopDomain: string, publicToken: string) {\n    this.endpoint = `https://${shopDomain}/api/2024-01/graphql.json`;\n    this.publicToken = publicToken;\n  }\n\n  async execute<T>(query: string, variables: Record<string, any> = {}): Promise<T> {\n    const res = await fetch(this.endpoint, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'X-Shopify-Storefront-Access-Token': this.publicToken,\n      },\n      body: JSON.stringify({ query, variables }),\n      next: { revalidate: 60 } // Edge caching ISR\n    });\n\n    const json = await res.json();\n    if (json.errors) {\n      throw new Error(json.errors.map((e: any) => e.message).join(', '));\n    }\n    return json.data;\n  }\n\n  async getLocalizedProduct(handle: string, country: string = 'US', language: string = 'EN') {\n    const QUERY = `\n      query GetProduct($handle: String!, $country: CountryCode, $language: LanguageCode)\n      @inContext(country: $country, language: $language) {\n        product(handle: $handle) {\n          id\n          title\n          descriptionHtml\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          variants(first: 20) {\n            nodes {\n              id\n              title\n              availableForSale\n              price {\n                amount\n                currencyCode\n              }\n            }\n          }\n        }\n      }\n    `;\n\n    return await this.execute<{ product: any }>(QUERY, { handle, country, language });\n  }\n}",
              "explanation": "Decoupled storefront service with Incremental Static Regeneration (ISR) and localized @inContext support."
            }
          ],
          "proTip": "Always pass the customer IP address and user-agent headers when executing Storefront API cart mutations from backend edge proxies to ensure accurate bot detection and fraud prevention in Shopify Checkout.",
          "commonMistakes": [
            "Hardcoding single currency assumptions into headless frontends instead of querying `price.currencyCode`.",
            "Failing to handle checkout domain redirections cleanly across custom domains."
          ]
        }
      ],
      "keyTakeaways": [
        "Decoupled frontends leverage Storefront API GraphQL for complete presentation freedom.",
        "Use `@inContext` directives for multi-currency and multi-language international commerce.",
        "Apply edge caching (ISR / SWR) on Storefront API queries to maximize speed."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-03",
          "title": "Construct Localized Collection Query",
          "instructions": "Write a Storefront GraphQL query that retrieves the title and first 10 products of a collection with country and language context.",
          "starterCode": "query GetLocalizedCollection($handle: String!, $country: CountryCode) {\n  // Query\n}",
          "solutionCode": "query GetLocalizedCollection($handle: String!, $country: CountryCode)\n@inContext(country: $country) {\n  collection(handle: $handle) {\n    title\n    products(first: 10) {\n      nodes {\n        id\n        title\n        priceRange { minVariantPrice { amount currencyCode } }\n      }\n    }\n  }\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-04",
    "orderIndex": 4,
    "title": "4. Shopify Hydrogen and Headless Concepts",
    "description": "Master Shopify Hydrogen framework, subrequest caching strategies, Remix loader utilities, and Oxygen edge deployment architectures.",
    "duration": "60 mins",
    "xpReward": 245,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-hyd-01",
        "title": "Shopify Hydrogen Documentation",
        "type": "documentation",
        "url": "https://shopify.dev/docs/custom-storefronts/hydrogen"
      }
    ],
    "lessonContent": {
      "overview": "Shopify Hydrogen is an opinionated, production-ready React framework built on top of Remix, engineered specifically for building high-performance headless storefronts. Hosted on Shopify Oxygen, Hydrogen provides built-in subrequest caching, Storefront client bindings, optimistic cart mutations, and server-side streaming.",
      "objectives": [
        "Understand the Hydrogen framework architecture and Remix integration.",
        "Implement subrequest caching policies (`CacheShort`, `CacheLong`, `CacheCustom`).",
        "Build optimistic UI cart interactions using Hydrogen’s built-in `<CartProvider>` and hooks.",
        "Deploy Hydrogen applications to Shopify Oxygen edge infrastructure."
      ],
      "sections": [
        {
          "id": "sec-hydrogen-loader",
          "title": "Hydrogen Remix Loaders & Subrequest Caching",
          "content": "Hydrogen injects an authenticated `storefront` client into Remix loader contexts. Developers can attach caching strategies (`stale-while-revalidate`) to GraphQL queries, enabling sub-millisecond edge response times.",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "app/routes/($locale).products.$handle.tsx",
              "title": "Hydrogen Product Route with Oxygen Subrequest Caching",
              "code": "import { json, type LoaderFunctionArgs } from '@shopify/remix-oxygen';\nimport { useLoaderData } from '@remix-run/react';\n\nexport async function loader({ params, context }: LoaderFunctionArgs) {\n  const { handle } = params;\n  const { storefront } = context;\n\n  // Query with Oxygen edge subrequest caching\n  const { product } = await storefront.query(PRODUCT_QUERY, {\n    variables: { handle },\n    cache: storefront.CacheShort() // Stale-while-revalidate edge caching\n  });\n\n  if (!product) {\n    throw new Response('Product Not Found', { status: 404 });\n  }\n\n  return json({ product });\n}\n\nconst PRODUCT_QUERY = `#graphql\n  query Product($handle: String!) {\n    product(handle: $handle) {\n      id\n      title\n      descriptionHtml\n      featuredImage {\n        url\n        altText\n        width\n        height\n      }\n      variants(first: 1) {\n        nodes {\n          id\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n  }\n`;\n\nexport default function ProductRoute() {\n  const { product } = useLoaderData<typeof loader>();\n  return (\n    <div className=\"product-page max-w-5xl mx-auto py-12 px-4\">\n      <h1 className=\"text-4xl font-bold\">{product.title}</h1>\n      <p className=\"text-2xl font-semibold text-brand mt-4\">\n        ${product.variants.nodes[0].price.amount} {product.variants.nodes[0].price.currencyCode}\n      </p>\n      <div className=\"prose mt-6\" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />\n    </div>\n  );\n}",
              "explanation": "Hydrogen route utilizing context.storefront with CacheShort edge caching."
            }
          ],
          "proTip": "Use `#graphql` comment tags before your GraphQL query strings in Hydrogen files. This enables syntax highlighting and automatic TypeScript type generation via GraphQL Code Generator.",
          "commonMistakes": [
            "Disabling subrequest caching in production loaders, causing every visitor request to query the Storefront API origin.",
            "Forgetting to configure internationalized route prefixes (`($locale)`)."
          ]
        }
      ],
      "keyTakeaways": [
        "Hydrogen runs on Remix and deploys to Shopify Oxygen global edge network.",
        "Use `storefront.CacheShort()` / `CacheLong()` to cache subrequests at the edge.",
        "Prefix GraphQL strings with `#graphql` for automatic type inference."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-04",
          "title": "Implement Hydrogen Caching Policy",
          "instructions": "Configure a loader query in Hydrogen that caches product data with a 15-minute max-age and 1-day stale-while-revalidate window.",
          "starterCode": "const data = await storefront.query(QUERY, {\n  // Add cache config\n});",
          "solutionCode": "const data = await storefront.query(QUERY, {\n  cache: storefront.CacheCustom({\n    maxAge: 900,\n    sMaxAge: 900,\n    staleWhileRevalidate: 86400\n  })\n});"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-05",
    "orderIndex": 5,
    "title": "5. Checkout Extensibility Concepts",
    "description": "Master Checkout UI Extensions, extension points, checkout branding APIs, Web Pixels, and custom post-purchase checkout flows.",
    "duration": "55 mins",
    "xpReward": 240,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-chk-01",
        "title": "Checkout Extensibility Developer Guide",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/checkout"
      }
    ],
    "lessonContent": {
      "overview": "Checkout Extensibility allows enterprise developers to customize the checkout flow safely without compromising security or platform upgrades. In this module, you will master Checkout UI Extension targets (information, shipping, payment, order status), the Checkout Branding API, and custom validation rules.",
      "objectives": [
        "Develop sandboxed React-based Checkout UI Extensions across multiple extension points.",
        "Customize checkout typography, colors, and border radii programmatically with the Checkout Branding API.",
        "Implement pre-purchase upsells and custom field inputs stored as checkout attributes.",
        "Ensure 100% compliance with strict Web Worker sandboxing rules."
      ],
      "sections": [
        {
          "id": "sec-checkout-branding",
          "title": "Checkout UI Extensions & Branding API",
          "content": "Checkout UI Extensions render in isolated worker threads. To style the surrounding checkout, developers use the GraphQL Checkout Branding API to customize colors, button shapes, and typography across all checkout steps.",
          "codeSnippets": [
            {
              "language": "graphql",
              "filename": "mutations/update-checkout-branding.graphql",
              "title": "Checkout Branding API Mutation",
              "code": "mutation UpdateCheckoutThemeBranding($checkoutProfileId: ID!) {\n  checkoutBrandingUpsert(\n    checkoutProfileId: $checkoutProfileId\n    checkoutBrandingInput: {\n      designSystem: {\n        colors: {\n          global: {\n            brand: \"#2563EB\"\n            accent: \"#10B981\"\n          }\n          schemes: {\n            scheme1: {\n              base: { background: \"#FFFFFF\", text: \"#111827\" }\n              control: { background: \"#F3F4F6\", border: \"#E5E7EB\" }\n            }\n          }\n        }\n        typography: {\n          primary: {\n            base: { sources: [{ gfont: \"Inter\" }] }\n            size: { base: 14 }\n          }\n        }\n        cornerRadius: {\n          base: 8\n          large: 12\n        }\n      }\n    }\n  ) {\n    checkoutBranding {\n      id\n    }\n    userErrors {\n      field\n      message\n    }\n  }\n}",
              "explanation": "Customizing global checkout colors, typography, and corner radius using the Checkout Branding API."
            }
          ],
          "proTip": "Use `useApplyAttributeChange()` in Checkout UI Extensions to attach custom buyer data (e.g. gift messages or delivery instructions) directly to the Order attributes upon checkout completion.",
          "commonMistakes": [
            "Attempting to style Checkout UI Extensions using arbitrary external CSS files instead of the official Checkout Branding API and component props.",
            "Targeting deprecated `checkout.liquid` scripts."
          ]
        }
      ],
      "keyTakeaways": [
        "Checkout UI Extensions run in secure sandboxed workers across designated checkout targets.",
        "Style checkout globally using the GraphQL Checkout Branding API.",
        "Store custom checkout inputs using `useApplyAttributeChange()`."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-05",
          "title": "Store Custom Gift Note Attribute",
          "instructions": "Write the hook call inside a Checkout UI Extension that saves a gift note to checkout attributes.",
          "starterCode": "const applyAttributeChange = useApplyAttributeChange();\n// Save attribute",
          "solutionCode": "const applyAttributeChange = useApplyAttributeChange();\nawait applyAttributeChange({\n  type: 'updateAttribute',\n  key: 'Gift Note',\n  value: 'Happy Birthday from Skillora!'\n});"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-06",
    "orderIndex": 6,
    "title": "6. Shopify Functions Overview",
    "description": "Engineer high-performance serverless backend logic using Shopify Functions: Cart Transform, Order Routing, Discount Allocation, and Rust compilation.",
    "duration": "60 mins",
    "xpReward": 250,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-func-01",
        "title": "Shopify Functions Specification",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/functions"
      }
    ],
    "lessonContent": {
      "overview": "Shopify Functions replace legacy Ruby-based Shopify Scripts. Compiled into WebAssembly (Wasm), Functions execute directly inside the core Shopify infrastructure during checkout processing in under 5 milliseconds. In this module, you will build and test Shopify Functions for dynamic discount allocations, payment customization, and cart transformations.",
      "objectives": [
        "Understand the WebAssembly execution model of Shopify Functions.",
        "Declare input schemas using `input.graphql`.",
        "Write and compile performant functions in Rust and JavaScript (Javy).",
        "Deploy and associate functions with merchant stores via Admin API mutations."
      ],
      "sections": [
        {
          "id": "sec-functions-rust",
          "title": "Building a VIP Tier Discount Function in Rust",
          "content": "A Shopify Function reads `input.json` (generated from `input.graphql`) and returns a structured `output.json`. The checkout engine applies the returned discount allocations atomically.",
          "codeSnippets": [
            {
              "language": "graphql",
              "filename": "extensions/vip-discount-function/input.graphql",
              "title": "Shopify Function Input GraphQL Query",
              "code": "query Input {\n  cart {\n    buyerIdentity {\n      customer {\n        hasAnyTag(tags: [\"VIP_GOLD\", \"VIP_PLATINUM\"])\n      }\n    }\n    lines {\n      id\n      quantity\n      cost {\n        totalAmount {\n          amount\n        }\n      }\n      merchandise {\n        ... on ProductVariant {\n          id\n        }\n      }\n    }\n  }\n}",
              "explanation": "Declaring the exact cart and customer tag data required by the function."
            },
            {
              "language": "rust",
              "filename": "extensions/vip-discount-function/src/main.rs",
              "title": "Rust Shopify Function Implementation",
              "code": "use shopify_function::prelude::*;\nuse shopify_function::Result;\n\n#[shopify_function_target(type = \"cart_discount\")]\nfn function(input: input::ResponseData) -> Result<output::FunctionResult> {\n  let is_vip = input.cart.buyer_identity\n    .and_then(|buyer| buyer.customer)\n    .map(|cust| cust.has_any_tag)\n    .unwrap_or(false);\n\n  if !is_vip {\n    return Ok(output::FunctionResult { discounts: vec![] });\n  }\n\n  let targets = input.cart.lines.iter().map(|line| {\n    output::Target::ProductVariant(output::ProductVariantTarget {\n      id: match &line.merchandise {\n        input::InputCartLinesMerchandise::ProductVariant(v) => v.id.clone(),\n      },\n      quantity: None,\n    })\n  }).collect();\n\n  Ok(output::FunctionResult {\n    discounts: vec![output::Discount {\n      message: Some(\"20% VIP Gold Member Discount\".to_string()),\n      targets,\n      value: output::Value::Percentage(output::Percentage {\n        value: 20.0,\n      }),\n    }],\n  })\n}",
              "explanation": "Rust WebAssembly function calculating a 20% discount for verified VIP customers."
            }
          ],
          "proTip": "Shopify Functions must complete execution within a strict CPU instruction limit (approximately 5ms). Avoid complex nested O(N^2) iterations or heavy regex operations inside your function logic.",
          "commonMistakes": [
            "Attempting to make network HTTP requests inside a Function (Functions run in sandboxed Wasm without network access).",
            "Exceeding memory allocation limits in compiled WebAssembly binaries."
          ]
        }
      ],
      "keyTakeaways": [
        "Shopify Functions compile to WebAssembly and execute in under 5ms during checkout.",
        "Define input data requirements in `input.graphql`.",
        "Functions operate entirely offline without network I/O."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-06",
          "title": "Construct Empty Function Result",
          "instructions": "Write the Rust return statement for a Shopify Function when no discount conditions are met.",
          "starterCode": "// Return empty result in Rust",
          "solutionCode": "Ok(output::FunctionResult { discounts: vec![] })"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-07",
    "orderIndex": 7,
    "title": "7. Advanced Authentication and Authorization",
    "description": "Master JWT session tokens, token exchange protocols, multi-tenant RBAC permissions, and automated key rotation.",
    "duration": "50 mins",
    "xpReward": 235,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-auth-01",
        "title": "Token Exchange and Session Token Architecture",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/auth/oauth/session-tokens"
      }
    ],
    "lessonContent": {
      "overview": "Authentication in enterprise Shopify applications requires verifiable identity proof across iframes, backend microservices, and asynchronous workers. In this module, you will master the OAuth Token Exchange protocol (RFC 8693), verify RS256-signed JWT session tokens using Shopify JWKS public certificates, and implement tenant-aware Role-Based Access Control (RBAC).",
      "objectives": [
        "Verify RS256-signed JWT Session Tokens using Shopify JWKS certificates.",
        "Implement OAuth Token Exchange to convert session tokens into offline access tokens.",
        "Design fine-grained RBAC permission matrices for multi-user merchant teams.",
        "Implement automated token encryption at rest using AES-256-GCM."
      ],
      "sections": [
        {
          "id": "sec-jwt-verification",
          "title": "Verifying RS256 Session Tokens & Token Exchange",
          "content": "When an embedded App Bridge client sends a request, the Authorization header contains an RS256 JWT. The backend decodes the token, verifies the cryptographic signature against Shopify’s public JWKS keys, and verifies claims (`iss`, `dest`, `exp`, `nbf`).",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "server/jwt-verifier.ts",
              "title": "RS256 JWT Session Token Verifier",
              "code": "import jwt from 'jsonwebtoken';\nimport jwksClient from 'jwks-rsa';\n\nconst client = jwksClient({\n  jwksUri: 'https://admin.shopify.com/oauth/jwks'\n});\n\nfunction getKey(header: any, callback: any) {\n  client.getSigningKey(header.kid, (err, key) => {\n    if (err) return callback(err, null);\n    const signingKey = key?.getPublicKey();\n    callback(null, signingKey);\n  });\n}\n\nexport async function verifyShopifySessionToken(token: string, expectedApiKey: string): Promise<any> {\n  return new Promise((resolve, reject) => {\n    jwt.verify(\n      token,\n      getKey,\n      {\n        algorithms: ['RS256'],\n        audience: expectedApiKey,\n      },\n      (err, decoded: any) => {\n        if (err) return reject(new Error('Invalid Session Token: ' + err.message));\n        \n        // Extract destination shop domain\n        const shop = decoded.dest.replace(/^https:\\/\\//, '');\n        resolve({ shop, userId: decoded.sub, exp: decoded.exp });\n      }\n    );\n  });\n}",
              "explanation": "Verifying App Bridge session tokens against Shopify JWKS certificates."
            }
          ],
          "proTip": "Never store raw unencrypted Shopify access tokens in plain text in your database. Encrypt tokens at rest using AES-256-GCM with keys managed in AWS KMS or Google Cloud KMS.",
          "commonMistakes": [
            "Skipping signature verification and simply decoding the JWT payload with `jwt.decode()`, allowing token forgery.",
            "Not verifying the `aud` (audience) claim against your app’s Client ID."
          ]
        }
      ],
      "keyTakeaways": [
        "Verify RS256 session tokens against Shopify’s JWKS public certificate endpoint.",
        "Always validate `aud` (client ID) and extract `dest` (shop domain) claims.",
        "Encrypt all stored access tokens at rest using AES-256-GCM."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-07",
          "title": "Extract Shop Domain from Decoded Token",
          "instructions": "Write a TypeScript function that extracts the clean shop domain from a decoded session token dest claim.",
          "starterCode": "function extractShop(dest: string): string {\n  // Code\n}",
          "solutionCode": "function extractShop(dest: string): string {\n  return dest.replace(/^https?:\\/\\//, '').replace(/\\/$/, '');\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-08",
    "orderIndex": 8,
    "title": "8. Secure Webhook Processing",
    "description": "Engineer high-throughput, fault-tolerant webhook ingestion engines with cryptographic signature verification, replay protection, and DLQs.",
    "duration": "55 mins",
    "xpReward": 240,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-wh-sec-01",
        "title": "Webhook Security & Replay Prevention",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/webhooks"
      }
    ],
    "lessonContent": {
      "overview": "Webhook security requires more than basic HMAC verification. In enterprise environments, attackers may attempt replay attacks, flood endpoints with fake traffic, or trigger denial-of-service conditions. In this module, you will implement timestamp freshness validation, rate limiting, and automated health telemetry.",
      "objectives": [
        "Prevent replay attacks by combining HMAC checks with `X-Shopify-Triggered-At` timestamp windows.",
        "Implement Redis-backed token bucket rate limiters on public webhook ingress endpoints.",
        "Process mandatory GDPR compliance webhooks with automated data purging pipelines.",
        "Monitor webhook failure metrics with Prometheus and Datadog."
      ],
      "sections": [
        {
          "id": "sec-wh-replay-prevention",
          "title": "Timestamp Validation & Replay Attack Defense",
          "content": "To prevent replay attacks, the webhook receiver checks that the `X-Shopify-Triggered-At` header timestamp is within a 15-minute window of the current server time in addition to checking the `X-Shopify-Webhook-Id` idempotency key.",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "server/secure-webhook-guard.ts",
              "title": "Advanced Webhook Ingestion Guard with Replay Defense",
              "code": "import crypto from 'crypto';\nimport { Request, Response, NextFunction } from 'express';\n\nconst MAX_TIMESTAMP_AGE_MS = 15 * 60 * 1000; // 15 minutes\n\nexport function secureWebhookGuard(secret: string) {\n  return (req: Request, res: Response, next: NextFunction) => {\n    const hmac = req.get('x-shopify-hmac-sha256');\n    const triggeredAt = req.get('x-shopify-triggered-at');\n    const rawBody = req.body;\n\n    if (!hmac || !rawBody) {\n      return res.status(401).send('Missing webhook signature');\n    }\n\n    // 1. Verify Timestamp Freshness (Replay Attack Defense)\n    if (triggeredAt) {\n      const eventTime = new Date(triggeredAt).getTime();\n      const now = Date.now();\n      if (Math.abs(now - eventTime) > MAX_TIMESTAMP_AGE_MS) {\n        console.warn('Stale webhook payload rejected (possible replay attack)');\n        return res.status(400).send('Webhook timestamp expired');\n      }\n    }\n\n    // 2. Cryptographic HMAC Check\n    const hash = crypto\n      .createHmac('sha256', secret)\n      .update(rawBody)\n      .digest('base64');\n\n    if (!crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(hmac))) {\n      return res.status(401).send('Invalid HMAC signature');\n    }\n\n    next();\n  };\n}",
              "explanation": "Middleware enforcing HMAC verification and timestamp freshness validation."
            }
          ],
          "proTip": "Respond to webhooks with HTTP 200 immediately before running any database or external API operations. If your handler takes longer than 5 seconds, Shopify marks the request failed and retries.",
          "commonMistakes": [
            "Executing slow third-party API calls inside the webhook handler function.",
            "Ignoring the `x-shopify-triggered-at` header, allowing intercepted requests to be replayed."
          ]
        }
      ],
      "keyTakeaways": [
        "Enforce timestamp freshness checks on `x-shopify-triggered-at` to prevent replay attacks.",
        "Use timing-safe comparisons for cryptographic hashes.",
        "Delegate all business operations to background queue workers."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-08",
          "title": "Validate Webhook Timestamp Window",
          "instructions": "Write a TypeScript function that returns true if the webhook triggered-at timestamp is within the last 10 minutes.",
          "starterCode": "function isTimestampFresh(triggeredAtIso: string): boolean {\n  // Code\n}",
          "solutionCode": "function isTimestampFresh(triggeredAtIso: string): boolean {\n  const eventTime = new Date(triggeredAtIso).getTime();\n  const diff = Math.abs(Date.now() - eventTime);\n  return diff <= 10 * 60 * 1000;\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-09",
    "orderIndex": 9,
    "title": "9. App Data Storage and Database Design",
    "description": "Design enterprise multi-tenant databases with PostgreSQL, Redis caching tiers, connection pooling, and automated schema migrations.",
    "duration": "50 mins",
    "xpReward": 230,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-db-01",
        "title": "Multi-Tenant Database Design Patterns",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/best-practices/performance"
      }
    ],
    "lessonContent": {
      "overview": "Designing databases for multi-tenant Shopify apps requires balancing strict data isolation, high write throughput for webhook ingestion, and low-latency reads for embedded dashboards. In this module, you will design partitioned PostgreSQL schemas, configure PgBouncer connection pooling, and establish Redis caching tiers.",
      "objectives": [
        "Design relational PostgreSQL database schemas with composite indexes on `(shop, id)`.",
        "Configure PgBouncer connection pooling to handle serverless connection spikes.",
        "Implement a multi-tier Redis caching layer for frequently read store settings.",
        "Execute zero-downtime database schema migrations."
      ],
      "sections": [
        {
          "id": "sec-db-pooling",
          "title": "PostgreSQL Multi-Tenant Schema & Connection Pooling",
          "content": "Every query in a multi-tenant Shopify app must include `shop_id` or `shop_domain` in the `WHERE` clause. Composite foreign keys enforce tenant isolation across all relational tables.",
          "codeSnippets": [
            {
              "language": "sql",
              "filename": "prisma/migrations/001_init.sql",
              "title": "PostgreSQL Multi-Tenant Schema with RLS and Indexes",
              "code": "-- Enable UUID extension\nCREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";\n\n-- Stores & Sessions Table\nCREATE TABLE stores (\n  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),\n  shop_domain VARCHAR(255) UNIQUE NOT NULL,\n  access_token_encrypted TEXT NOT NULL,\n  is_active BOOLEAN DEFAULT TRUE,\n  plan_tier VARCHAR(50) DEFAULT 'free',\n  installed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\n\n-- Store Configurations Table\nCREATE TABLE store_configs (\n  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),\n  store_id UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,\n  auto_sync_enabled BOOLEAN DEFAULT TRUE,\n  low_stock_threshold INTEGER DEFAULT 5,\n  notification_email VARCHAR(255),\n  CONSTRAINT unique_store_config UNIQUE (store_id)\n);\n\n-- Fast Tenant Lookup Indexes\nCREATE INDEX idx_stores_shop_domain ON stores(shop_domain);\nCREATE INDEX idx_store_configs_store_id ON store_configs(store_id);",
              "explanation": "Normalized relational schema with composite indexes and cascade deletion rules."
            }
          ],
          "proTip": "Use PgBouncer in transaction pooling mode when deploying Remix or serverless apps to prevent exhausting PostgreSQL connection limits during traffic spikes.",
          "commonMistakes": [
            "Creating tables without `store_id` foreign keys, risking cross-tenant data leaks.",
            "Opening fresh database connections on every serverless function invocation without connection pooling."
          ]
        }
      ],
      "keyTakeaways": [
        "Index all tenant data on `shop_domain` or `store_id` for O(log N) lookup performance.",
        "Enforce cascade deletions on `store_id` when handling app uninstallation.",
        "Deploy PgBouncer for serverless database connection pooling."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-09",
          "title": "Write Tenant-Scoped Prisma Query",
          "instructions": "Write a Prisma query that fetches store settings strictly scoped to the authenticated shop domain.",
          "starterCode": "async function getSettings(prisma: any, shopDomain: string) {\n  // Query\n}",
          "solutionCode": "async function getSettings(prisma: any, shopDomain: string) {\n  return await prisma.storeConfig.findFirst({\n    where: { store: { shopDomain } }\n  });\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-10",
    "orderIndex": 10,
    "title": "10. Background Jobs, Queues and Reliability",
    "description": "Engineer distributed queue worker architectures with BullMQ, Redis cluster failover, job concurrency tuning, and telemetry.",
    "duration": "55 mins",
    "xpReward": 245,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-queue-01",
        "title": "Reliable Background Processing Architecture",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/best-practices/performance"
      }
    ],
    "lessonContent": {
      "overview": "Critical business processes (bulk catalog sync, automatic tag assignments, third-party ERP integration) must execute asynchronously in background job workers. In this module, you will build a scalable job processing infrastructure with BullMQ, implement job deduplication, manage worker concurrency, and configure dead-letter retry policies.",
      "objectives": [
        "Build multi-queue background worker architectures with priority tiers (critical, default, bulk).",
        "Configure exponential backoff and jitter on retried background jobs.",
        "Implement job progress reporting and status polling APIs.",
        "Monitor queue depth, latency, and worker memory consumption."
      ],
      "sections": [
        {
          "id": "sec-bullmq-queues",
          "title": "Multi-Tier Priority Queue Infrastructure",
          "content": "Separating jobs into priority queues ensures that high-priority user actions (e.g. immediate single product sync) are not delayed behind massive bulk export jobs.",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "server/queues/queue-manager.ts",
              "title": "Multi-Tier Priority Queue Manager",
              "code": "import { Queue, QueueEvents } from 'bullmq';\nimport IORedis from 'ioredis';\n\nconst connection = new IORedis(process.env.REDIS_URL!, {\n  maxRetriesPerRequest: null,\n  enableReadyCheck: false\n});\n\nexport const criticalQueue = new Queue('critical-jobs', {\n  connection,\n  defaultJobOptions: {\n    attempts: 5,\n    backoff: { type: 'exponential', delay: 1000 },\n    removeOnComplete: 1000,\n    removeOnFail: 5000\n  }\n});\n\nexport const bulkQueue = new Queue('bulk-sync-jobs', {\n  connection,\n  defaultJobOptions: {\n    attempts: 3,\n    backoff: { type: 'exponential', delay: 5000 },\n    removeOnComplete: 500\n  }\n});\n\nexport async function enqueueCatalogSync(shop: string, productIds: string[]) {\n  return await bulkQueue.add(\n    'sync-catalog',\n    { shop, productIds },\n    { jobId: `sync:${shop}:${Date.now()}` }\n  );\n}",
              "explanation": "Configuring separated priority queues with Redis connection pooling and retention policies."
            }
          ],
          "proTip": "Always pass a unique `jobId` when enqueuing jobs if you want to prevent duplicate identical jobs from running simultaneously in the queue.",
          "commonMistakes": [
            "Running heavy CPU jobs on the main web server thread instead of offloading to dedicated worker processes.",
            "Not configuring `maxRetriesPerRequest: null` on IORedis connections used by BullMQ."
          ]
        }
      ],
      "keyTakeaways": [
        "Partition jobs into priority tiers (critical vs bulk) for optimal throughput.",
        "Use exponential backoff with jitter on network retries.",
        "Isolate worker processes from HTTP web servers."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-10",
          "title": "Enqueue High-Priority Job",
          "instructions": "Write a helper function to add an order processing job to the criticalQueue with high priority.",
          "starterCode": "async function enqueueOrder(orderId: string) {\n  // Code\n}",
          "solutionCode": "async function enqueueOrder(orderId: string) {\n  await criticalQueue.add('process-order', { orderId }, { priority: 1 });\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-11",
    "orderIndex": 11,
    "title": "11. Performance, Caching and API Cost Optimization",
    "description": "Optimize GraphQL query costs, implement Redis caching strategies, monitor rate limits, and maximize storefront throughput.",
    "duration": "50 mins",
    "xpReward": 235,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-perf-01",
        "title": "Shopify Rate Limits and Cost Optimization",
        "type": "documentation",
        "url": "https://shopify.dev/docs/api/usage/rate-limits"
      }
    ],
    "lessonContent": {
      "overview": "Shopify enforces calculated rate limits on GraphQL Admin APIs. In this module, you will learn how to optimize query cost calculations, cache GraphQL responses in Redis with stale-while-revalidate policies, and implement intelligent rate limit throttling engines that dynamically adapt request rates.",
      "objectives": [
        "Calculate GraphQL field costs and design minimal-cost selection sets.",
        "Implement a Redis caching layer for GraphQL responses with tag-based invalidation.",
        "Design adaptive client throttlers that monitor `extensions.cost.throttleStatus`.",
        "Handle 429 Too Many Requests errors with exponential backoff."
      ],
      "sections": [
        {
          "id": "sec-adaptive-throttler",
          "title": "Adaptive GraphQL Throttling Engine",
          "content": "By inspecting `extensions.cost.throttleStatus` in GraphQL responses, your client can calculate the exact number of milliseconds required for the leaky bucket to replenish before sending the next query.",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "server/adaptive-client.ts",
              "title": "Adaptive GraphQL Rate-Limit Throttler",
              "code": "export class AdaptiveShopifyClient {\n  private client: any;\n\n  constructor(adminClient: any) {\n    this.client = adminClient;\n  }\n\n  async executeWithThrottling(query: string, variables: any = {}) {\n    let attempts = 0;\n    const maxAttempts = 5;\n\n    while (attempts < maxAttempts) {\n      attempts++;\n      const response = await this.client.graphql(query, { variables });\n      const json = await response.json();\n\n      // Check for rate limit throttling\n      const throttleStatus = json.extensions?.cost?.throttleStatus;\n      if (throttleStatus) {\n        const { currentlyAvailable, restoreRate } = throttleStatus;\n        if (currentlyAvailable < 50) {\n          const waitTimeMs = Math.ceil((100 - currentlyAvailable) / restoreRate) * 1000;\n          console.log(`Rate limit low (${currentlyAvailable} available). Pausing for ${waitTimeMs}ms`);\n          await new Promise(r => setTimeout(r, waitTimeMs));\n        }\n      }\n\n      if (response.status === 429) {\n        const retryAfter = Number(response.headers.get('Retry-After') || 2);\n        console.warn(`429 Hit. Backing off for ${retryAfter}s`);\n        await new Promise(r => setTimeout(r, retryAfter * 1000));\n        continue;\n      }\n\n      return json.data;\n    }\n\n    throw new Error('Max GraphQL query attempts exceeded due to persistent rate limiting.');\n  }\n}",
              "explanation": "Client monitoring throttleStatus to pause proactively before hitting 429 errors."
            }
          ],
          "proTip": "In GraphQL queries, requesting `variants(first: 250)` costs 250 points, whereas requesting `variants(first: 10)` costs only 10 points. Keep connection arguments small to minimize cost point consumption.",
          "commonMistakes": [
            "Ignoring `throttleStatus` and sending requests at maximum speed until 429 errors occur.",
            "Not caching static data (e.g. shop details, location lists) that rarely changes."
          ]
        }
      ],
      "keyTakeaways": [
        "Inspect `extensions.cost.throttleStatus` to pace GraphQL queries proactively.",
        "Cache static configuration data in Redis with TTLs.",
        "Keep nested connection sizes small to stay within point limits."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-11",
          "title": "Calculate Leaky Bucket Replenishment Time",
          "instructions": "Write a helper function that calculates wait time in milliseconds given currentlyAvailable points, target points, and restoreRate.",
          "starterCode": "function calculateWaitMs(current: number, target: number, rate: number): number {\n  // Code\n}",
          "solutionCode": "function calculateWaitMs(current: number, target: number, rate: number): number {\n  if (current >= target) return 0;\n  return Math.ceil((target - current) / rate) * 1000;\n}"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-12",
    "orderIndex": 12,
    "title": "12. Automated Testing and Observability",
    "description": "Master automated unit, integration, and E2E testing with Vitest and Playwright, plus APM observability with Sentry and Datadog.",
    "duration": "55 mins",
    "xpReward": 240,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-test-01",
        "title": "Testing Shopify Apps and Extensions",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/tools/cli/testing"
      }
    ],
    "lessonContent": {
      "overview": "Production reliability requires automated test pipelines and real-time observability. In this module, you will write automated unit test suites for HMAC validators and GraphQL adapters, construct end-to-end Playwright tests for App Bridge interfaces, and configure APM error tracking with Sentry.",
      "objectives": [
        "Write unit tests with Vitest covering HMAC validation and GraphQL response parsers.",
        "Build automated Playwright E2E tests simulating embedded app interactions.",
        "Configure Sentry error tracking and performance transaction monitoring.",
        "Set up health check endpoints (`/healthz`) for container orchestration."
      ],
      "sections": [
        {
          "id": "sec-playwright-e2e",
          "title": "Playwright E2E Test Suite for Embedded Shopify Apps",
          "content": "Testing embedded apps requires injecting simulated session tokens into browser localStorage or mocking the App Bridge communication layer.",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "tests/e2e/inventory-dashboard.spec.ts",
              "title": "Playwright E2E Test for Embedded Shopify App",
              "code": "import { test, expect } from '@playwright/test';\n\ntest.describe('Shopify Inventory App E2E Tests', () => {\n  test.beforeEach(async ({ page }) => {\n    // Inject mock session token into localStorage\n    await page.addInitScript(() => {\n      window.localStorage.setItem(\n        'skillora-session-token',\n        'mock-valid-jwt-token-for-testing'\n      );\n    });\n  });\n\n  test('Dashboard loads inventory table and triggers sync toast', async ({ page }) => {\n    await page.goto('/app/inventory');\n    await page.waitForLoadState('networkidle');\n\n    // Verify Polaris Page Title\n    const title = page.locator('h1, [data-polaris-header-title]');\n    await expect(title).toContainText('Inventory Command Center');\n\n    // Verify DataTable rows rendered\n    const tableRows = page.locator('table tbody tr');\n    await expect(tableRows.first()).toBeVisible({ timeout: 5000 });\n\n    // Click Sync Button\n    const syncButton = page.locator('button:has-text(\"Sync All Locations\")');\n    await syncButton.click();\n\n    // Verify App Bridge Toast Triggered\n    const toast = page.locator('text=Inventory synchronization initiated');\n    await expect(toast).toBeVisible();\n  });\n});",
              "explanation": "Automated Playwright test verifying Polaris table rendering and button interactions."
            }
          ],
          "proTip": "Always mock external network calls to the live Shopify Admin API in unit tests using MSW (Mock Service Worker) or Vitest spies to keep test suites fast and deterministic.",
          "commonMistakes": [
            "Running E2E tests directly against live production stores without test sandbox isolation.",
            "Failing to capture unhandled promise rejections in background queue workers."
          ]
        }
      ],
      "keyTakeaways": [
        "Use Vitest for fast unit testing of HMAC, token decoders, and business logic.",
        "Use Playwright for automated E2E testing of embedded App Bridge interfaces.",
        "Track exceptions and performance bottlenecks with Sentry and OpenTelemetry."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-12",
          "title": "Write Health Check Route",
          "instructions": "Write a Remix loader function for /healthz that checks database connectivity and returns status 200 OK.",
          "starterCode": "export const loader = async () => {\n  // Health check\n};",
          "solutionCode": "export const loader = async () => {\n  try {\n    await prisma.$queryRaw`SELECT 1`;\n    return json({ status: 'healthy', timestamp: new Date().toISOString() });\n  } catch (err) {\n    return json({ status: 'unhealthy', error: 'Database connection failed' }, { status: 503 });\n  }\n};"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-13",
    "orderIndex": 13,
    "title": "13. App Review, Security and Production Operations",
    "description": "Prepare for official Shopify App Store submission review, comply with security standards, configure CSP headers, and implement automated CI/CD.",
    "duration": "50 mins",
    "xpReward": 235,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-rev-01",
        "title": "Shopify App Store Review Guidelines",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps/store/requirements"
      }
    ],
    "lessonContent": {
      "overview": "Submitting an app to the public Shopify App Store or deploying a custom app to production requires passing rigorous security, performance, and UX criteria. In this module, you will review the official App Review checklist, enforce Content Security Policy headers, verify GDPR compliance webhooks, and configure production CI/CD pipelines.",
      "objectives": [
        "Audit app codebase against official Shopify App Store Review requirements.",
        "Enforce strict Content Security Policy (`frame-ancestors`) against Clickjacking.",
        "Verify mandatory GDPR/Privacy webhooks (`customers/data_request`, `customers/redact`, `shop/redact`).",
        "Configure automated production deployment pipelines with zero-downtime rollouts."
      ],
      "sections": [
        {
          "id": "sec-app-review-readiness",
          "title": "App Store Review Checklist & Security Hardening",
          "content": "Shopify App Reviewers verify that your app installs cleanly on any development store, requests minimum necessary scopes, implements all mandatory privacy webhooks, displays native Polaris UI with loading states, and contains zero security vulnerabilities.",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "server/security-headers.ts",
              "title": "Production Security Headers Middleware",
              "code": "import { Request, Response, NextFunction } from 'express';\n\nexport function productionSecurityHeaders(req: Request, res: Response, next: NextFunction) {\n  const shop = req.query.shop as string;\n\n  // 1. Content Security Policy for Embedded Apps\n  const frameAncestors = shop\n    ? `https://${shop} https://admin.shopify.com https://*.myshopify.com`\n    : 'https://admin.shopify.com https://*.myshopify.com';\n\n  res.setHeader(\n    'Content-Security-Policy',\n    `frame-ancestors ${frameAncestors}; default-src 'self' https://cdn.shopify.com; script-src 'self' 'unsafe-inline' https://cdn.shopify.com; style-src 'self' 'unsafe-inline' https://cdn.shopify.com;`\n  );\n\n  // 2. Additional Security Headers\n  res.setHeader('X-Content-Type-Options', 'nosniff');\n  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');\n  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');\n\n  next();\n}",
              "explanation": "Production Express middleware applying required CSP frame-ancestors and security headers."
            }
          ],
          "proTip": "Always test your app installation flow on a brand new, empty development store with no products before submitting for App Review. Ensure your app handles empty states gracefully with clear onboarding prompts.",
          "commonMistakes": [
            "Setting `X-Frame-Options: DENY`, which completely breaks embedded rendering inside the Shopify Admin.",
            "Failing to respond with 200 OK to the mandatory GDPR data privacy webhooks."
          ]
        }
      ],
      "keyTakeaways": [
        "Set `Content-Security-Policy: frame-ancestors` allowing only official Shopify domains.",
        "All apps must respond to mandatory GDPR privacy webhooks.",
        "Provide polished Polaris UI with empty states and clear onboarding instructions."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-13",
          "title": "Configure CSP Frame Ancestors",
          "instructions": "Write the CSP frame-ancestors header string for an app running on shop \"dev-store.myshopify.com\".",
          "starterCode": "const csp = \"\";",
          "solutionCode": "const csp = \"frame-ancestors https://dev-store.myshopify.com https://admin.shopify.com https://*.myshopify.com;\";"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-14",
    "orderIndex": 14,
    "title": "14. Advanced Capstone Project: Production Shopify App Platform",
    "description": "Synthesize all Advanced Level skills to architect, engineer, and deploy an enterprise-grade Production Shopify App Platform.",
    "duration": "45 mins",
    "xpReward": 200,
    "requiresQuiz": false,
    "resources": [
      {
        "id": "res-adv-cap-01",
        "title": "Advanced Capstone Specification",
        "type": "documentation",
        "url": "https://shopify.dev/docs/apps"
      }
    ],
    "lessonContent": {
      "overview": "In this preparatory module for your Advanced Capstone Project, you will synthesize all advanced Shopify developer skills: Multi-Tenant Architecture, Remix server engineering, Admin & Storefront GraphQL APIs, BullMQ background queues, Checkout Extensibility, Shopify Functions, and security threat modeling. You will review the required 18 deliverables for your enterprise production app submission.",
      "objectives": [
        "Review the 18 required technical deliverables for the Advanced Capstone Platform.",
        "Design an enterprise product requirements document (PRD) and threat model.",
        "Architect multi-tier GraphQL query, webhook queue, and database storage pipelines.",
        "Prepare automated Playwright test suites and CI/CD deployment workflows."
      ],
      "sections": [
        {
          "id": "sec-adv-cap-blueprint",
          "title": "Enterprise Capstone Technical Blueprint",
          "content": "The Advanced Capstone requires engineering a complete, production-grade Shopify App Platform (e.g. Enterprise Multi-Location Inventory & Bundle Customizer with Checkout Extensibility and Shopify Functions).",
          "codeSnippets": [
            {
              "language": "typescript",
              "filename": "platform-architecture-summary.ts",
              "title": "Advanced Capstone Platform Component Blueprint",
              "code": "/**\n * Enterprise Production Shopify App Platform Blueprint\n * 1. Web Layer: Remix 2.x + Shopify App Bridge 3.x + Polaris Design System\n * 2. Auth Layer: RS256 JWT Session Tokens + OAuth 2.0 Token Exchange + AES-256 Secret Encryption\n * 3. API Layer: GraphQL Admin API + Storefront API + Automated Throttling\n * 4. Ingestion: Express Raw Buffer HMAC Verification + BullMQ Queue Workers + Redis\n * 5. Database: PostgreSQL Multi-Tenant Schema + Prisma ORM + PgBouncer Pooling\n * 6. Extensibility: Checkout UI Extensions + Shopify Functions (Cart Transform & Discount)\n * 7. Reliability: Sentry APM + Playwright E2E Test Suite + GitHub Actions CI/CD\n */\nexport const CAPSTONE_SYSTEM_MANIFEST = {\n  platformName: \"Skillora Enterprise Commerce Engine\",\n  runtime: \"Node.js 20 LTS + Remix + TypeScript\",\n  database: \"PostgreSQL 16 with Row-Level Security\",\n  queueEngine: \"BullMQ + Redis 7\",\n  extensionTypes: [\"checkout_ui_extension\", \"cart_transform_function\", \"theme_app_extension\"]\n};",
              "explanation": "High-level architectural blueprint for the Advanced Capstone Platform."
            }
          ],
          "proTip": "Ensure your capstone project includes a comprehensive threat model documenting how your system mitigates OWASP Top 10 vulnerabilities (CSRF, XSS, broken access control, injection).",
          "commonMistakes": [
            "Omitting automated test suites or CI/CD workflow definitions.",
            "Failing to document environment variables in the project README."
          ]
        }
      ],
      "keyTakeaways": [
        "The Advanced Capstone represents a complete production-ready Shopify enterprise platform.",
        "Cover all 18 deliverables including architecture, data models, functions, queues, and tests.",
        "Adhere strictly to official Shopify security, performance, and review standards."
      ],
      "practiceExercises": [
        {
          "id": "ex-adv-14",
          "title": "List the 18 Capstone Deliverables",
          "instructions": "Outline the 18 deliverables required for your Advanced Capstone submission.",
          "starterCode": "// 18 Deliverables List",
          "solutionCode": "// 1. Product Requirements Document (PRD)\n// 2. System Architecture Diagram\n// 3. Multi-Tenant Database Model Schema\n// 4. Admin API Integration Plan\n// 5. Storefront API Integration Plan\n// 6. OAuth 2.0 Authentication Flow\n// 7. Permission & Scope Security Matrix\n// 8. Webhook Ingestion & Queue Architecture\n// 9. Background Processing & Worker Design\n// 10. Error & Retry Backoff Strategy\n// 11. Security Threat Model (OWASP)\n// 12. Automated Testing Plan (Playwright)\n// 13. Performance & API-Cost Optimization Plan\n// 14. Deployment & CI/CD Pipeline (GitHub Actions)\n// 15. Monitoring & Observability Plan (Sentry)\n// 16. App Review Readiness Checklist\n// 17. Technical README Documentation\n// 18. Final Architecture Demo & Verification Plan"
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-15",
    "orderIndex": 15,
    "title": "Advanced Project 1: Checkout Extensibility & Shopify Functions Customizer",
    "description": "Design and build a custom Checkout UI Extension and a compiled Shopify Function (Cart Transform or Discount Allocation) with full Theme Editor preview integration.",
    "duration": "5 hours",
    "xpReward": 400,
    "isProject": true,
    "type": "project",
    "requiresQuiz": false,
    "projectDetails": {
      "title": "Advanced Project 1: Checkout Extensibility & Shopify Functions Customizer",
      "overview": "Build an enterprise-grade Checkout UI Extension and a high-performance Shopify Function (compiling to WebAssembly) that dynamically modifies checkout lines and applies custom promotion logic.",
      "deliverables": [
        {
          "id": "del-adv1-01",
          "title": "Checkout Extension Technical Specification",
          "description": "Define extension targets (e.g. purchase.checkout.block.render), user flow, and data dependencies.",
          "checklist": [
            "Target placement definition",
            "User interaction state machine",
            "Security boundary documentation"
          ]
        },
        {
          "id": "del-adv1-02",
          "title": "Checkout UI Extension Component",
          "description": "Write the sandboxed React extension utilizing official @shopify/ui-extensions-react/checkout components.",
          "checklist": [
            "Banner and BlockStack layout",
            "Pre-purchase upsell action hook",
            "Responsive rendering across mobile checkouts"
          ]
        },
        {
          "id": "del-adv1-03",
          "title": "Checkout Attribute & Cart Line Mutation Integration",
          "description": "Connect extension actions to useApplyCartLinesChange and useApplyAttributeChange hooks.",
          "checklist": [
            "Atomic cart line addition",
            "Checkout custom attribute binding",
            "Loading and disabled states during mutation"
          ]
        },
        {
          "id": "del-adv1-04",
          "title": "Shopify Function Input GraphQL Schema",
          "description": "Declare input.graphql defining buyer identity, customer tags, and cart lines needed by the Function.",
          "checklist": [
            "Cart line cost selection",
            "Customer tag queries",
            "Valid GraphQL schema compilation"
          ]
        },
        {
          "id": "del-adv1-05",
          "title": "Compiled Shopify Function (Rust or JS/Wasm)",
          "description": "Implement the core business algorithm compiling to WebAssembly with sub-5ms execution time.",
          "checklist": [
            "Clean algorithm implementation",
            "Zero external network dependencies",
            "Valid FunctionResult return output"
          ]
        },
        {
          "id": "del-adv1-06",
          "title": "Checkout Branding API Customization Script",
          "description": "Write GraphQL mutation customizing global checkout typography, primary colors, and border radii.",
          "checklist": [
            "Brand color configuration",
            "Font family and size definitions",
            "Consistent design system styling"
          ]
        },
        {
          "id": "del-adv1-07",
          "title": "Local Development & Preview Configuration",
          "description": "Configure shopify.extension.toml and test locally using Shopify CLI preview links.",
          "checklist": [
            "Valid extension TOML manifest",
            "Local CLI preview verified",
            "Theme Editor block placement tested"
          ]
        },
        {
          "id": "del-adv1-08",
          "title": "Unit Test Suite for Shopify Function",
          "description": "Write automated unit tests verifying function outputs against diverse JSON input scenarios.",
          "checklist": [
            "Test with VIP customer tags",
            "Test with non-VIP standard carts",
            "Edge case tests (empty cart)"
          ]
        },
        {
          "id": "del-adv1-09",
          "title": "Deployment & Extension Version Release Plan",
          "description": "Deploy extension to development store using shopify app deploy.",
          "checklist": [
            "CLI deployment execution",
            "App version verification in Partner Dashboard",
            "Live store checkout verification"
          ]
        },
        {
          "id": "del-adv1-10",
          "title": "Technical Documentation & Testing Report",
          "description": "Document extension configuration, known constraints, and Bogus Gateway checkout test results.",
          "checklist": [
            "Comprehensive setup guide",
            "Bogus Gateway test transaction IDs",
            "Performance execution logs (<5ms)"
          ]
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-16",
    "orderIndex": 16,
    "title": "Advanced Capstone Project: Production Shopify App Platform",
    "description": "Architect, engineer, test, and deploy an enterprise-grade Production Shopify App Platform with Remix, GraphQL Admin API, BullMQ queues, Checkout Extensibility, and automated CI/CD.",
    "duration": "8 hours",
    "xpReward": 600,
    "isProject": true,
    "type": "project",
    "requiresQuiz": false,
    "projectDetails": {
      "title": "Advanced Capstone: Production Shopify App Platform",
      "overview": "Build an end-to-end, enterprise-scale Shopify App Platform (e.g. Omnichannel Inventory Sync & B2B Wholesale Platform with Checkout Extensibility and Shopify Functions) meeting 100% of official Shopify App Review standards.",
      "deliverables": [
        {
          "id": "del-cap-01",
          "title": "Product Requirements Document (PRD)",
          "description": "Detailed specifications covering business rationale, user personas, functional scope, and success KPIs.",
          "checklist": [
            "Problem statement and market validation",
            "Detailed functional requirements matrix",
            "Success metrics and SLA targets"
          ]
        },
        {
          "id": "del-cap-02",
          "title": "System Architecture & Infrastructure Diagram",
          "description": "End-to-end multi-tier diagram mapping Remix web layer, Redis BullMQ workers, PostgreSQL, and Shopify APIs.",
          "checklist": [
            "Complete component topology",
            "Data ingestion and processing flowcharts",
            "Security and network boundaries"
          ]
        },
        {
          "id": "del-cap-03",
          "title": "Multi-Tenant Database Model Schema",
          "description": "Prisma schema with multi-tenant session storage, store configs, webhook logs, and composite indexes.",
          "checklist": [
            "Prisma schema with foreign keys",
            "Row-Level Security (RLS) policies",
            "Optimized composite index design"
          ]
        },
        {
          "id": "del-cap-04",
          "title": "Admin GraphQL API Integration Plan",
          "description": "Complete suite of Admin GraphQL queries and mutations with calculated cost budgets and error handlers.",
          "checklist": [
            "Inventory and catalog queries",
            "Bulk operation export pipelines",
            "userErrors validation routines"
          ]
        },
        {
          "id": "del-cap-05",
          "title": "Storefront API Integration Plan",
          "description": "Storefront API queries and mutations supporting decoupled client requests with @inContext localization.",
          "checklist": [
            "Localized cart mutations",
            "Product catalog queries with filters",
            "Customer access token management"
          ]
        },
        {
          "id": "del-cap-06",
          "title": "OAuth 2.0 & Token Exchange Authentication Flow",
          "description": "Implementation of OAuth handshake, HMAC validation, and App Bridge session token verification.",
          "checklist": [
            "RS256 JWT session token verifier",
            "Offline token encryption with AES-256",
            "Automated token refresh handling"
          ]
        },
        {
          "id": "del-cap-07",
          "title": "Permission & Scope Security Matrix",
          "description": "Least-privilege scope declarations documented with justifications and scope upgrade handlers.",
          "checklist": [
            "Declared scope matrix",
            "Scope upgrade redirect triggers",
            "Zero unnecessary permissions requested"
          ]
        },
        {
          "id": "del-cap-08",
          "title": "Webhook Ingestion & Queue Architecture",
          "description": "Express/Remix raw buffer HMAC verification endpoint dispatching jobs to BullMQ workers.",
          "checklist": [
            "Sub-20ms 200 OK acknowledgment",
            "HMAC SHA-256 cryptographic guard",
            "Mandatory GDPR compliance webhooks"
          ]
        },
        {
          "id": "del-cap-09",
          "title": "Background Processing & Worker Design",
          "description": "Multi-threaded queue workers with concurrency controls, job priority tiers, and Redis connection pooling.",
          "checklist": [
            "BullMQ worker pool with concurrency",
            "Job progress telemetry reporting",
            "Dead Letter Queue (DLQ) handler"
          ]
        },
        {
          "id": "del-cap-10",
          "title": "Error Handling & Retry Backoff Strategy",
          "description": "Exponential backoff retry algorithms for 429 rate limits, network timeouts, and database failures.",
          "checklist": [
            "Exponential backoff with jitter",
            "Automated job retry caps",
            "Dead Letter Queue alert notifications"
          ]
        },
        {
          "id": "del-cap-11",
          "title": "Security Threat Model (OWASP Top 10)",
          "description": "Comprehensive threat model detailing defenses against CSRF, XSS, injection, and clickjacking.",
          "checklist": [
            "Content Security Policy (CSP) headers",
            "Timing-safe HMAC comparisons",
            "Input sanitization and parameterized queries"
          ]
        },
        {
          "id": "del-cap-12",
          "title": "Automated Testing Plan (Unit & Playwright E2E)",
          "description": "Automated test suite combining Vitest unit tests and Playwright E2E tests for embedded app routes.",
          "checklist": [
            "100% passing Vitest unit tests",
            "Playwright E2E suite covering critical flows",
            "Mocked Shopify API test harness"
          ]
        },
        {
          "id": "del-cap-13",
          "title": "Performance & API-Cost Optimization Plan",
          "description": "Adaptive GraphQL query throttler, Redis caching tier, and subrequest caching optimizations.",
          "checklist": [
            "Adaptive rate limit throttler",
            "Redis response caching with TTL",
            "Sub-second dashboard TTFB"
          ]
        },
        {
          "id": "del-cap-14",
          "title": "Deployment & CI/CD Pipeline (GitHub Actions)",
          "description": "Dockerized production build with automated GitHub Actions CI/CD deploying to cloud hosting.",
          "checklist": [
            "Production multi-stage Dockerfile",
            "GitHub Actions test & deploy workflow",
            "Zero-downtime rolling deployment"
          ]
        },
        {
          "id": "del-cap-15",
          "title": "Monitoring & Observability Plan (Sentry / APM)",
          "description": "Integration of Sentry error tracking, OpenTelemetry tracing, and /healthz monitoring endpoints.",
          "checklist": [
            "Sentry exception capturing configured",
            "Structured Winston/Pino JSON logs",
            "Health check API endpoint (/healthz)"
          ]
        },
        {
          "id": "del-cap-16",
          "title": "App Review Readiness Checklist",
          "description": "Audit report verifying 100% compliance with official Shopify App Store Review requirements.",
          "checklist": [
            "Polaris UI consistency verified",
            "Mandatory privacy webhooks verified",
            "Empty states and onboarding tested"
          ]
        },
        {
          "id": "del-cap-17",
          "title": "Technical README Documentation",
          "description": "Exhaustive developer guide covering local environment setup, configuration flags, and architecture notes.",
          "checklist": [
            "Step-by-step local setup instructions",
            "Complete environment variable directory",
            "API documentation references"
          ]
        },
        {
          "id": "del-cap-18",
          "title": "Final Architecture Demo & Verification Plan",
          "description": "Live demonstration script and test verification matrix on a development store with sample data.",
          "checklist": [
            "Live demo walkthrough script",
            "Sample data seeding utility",
            "Bogus payment test verification record"
          ]
        }
      ]
    }
  },
  {
    "id": "shopify-dev-adv-17",
    "orderIndex": 17,
    "title": "Advanced Master Assessment: Enterprise Shopify Engineering",
    "description": "Test your mastery of enterprise Shopify architecture, WebAssembly Functions, Checkout Extensibility, Hydrogen/Oxygen, BullMQ queues, OAuth token security, and production scaling.",
    "duration": "60 mins",
    "xpReward": 500,
    "isFinalAssessment": true,
    "type": "assessment",
    "passingScore": 35,
    "totalQuestions": 40,
    "questions": [
      {
        "id": 1,
        "topic": "Shopify Functions Execution Model",
        "question": "How do Shopify Functions execute within the Shopify platform, and why do they replace legacy Shopify Scripts?",
        "options": [
          "Shopify Functions compile to WebAssembly (Wasm) and execute directly on Shopify’s global low-latency edge infrastructure in under 5ms, providing crash-safe, scalable custom backend logic without hosting overhead.",
          "Shopify Functions run inside client browser localStorage.",
          "Shopify Functions are slow Python scripts running on AWS Lambda that execute after orders are fulfilled.",
          "Shopify Functions are written strictly in raw HTML and CSS."
        ],
        "correctAnswer": 0,
        "explanation": "Shopify Functions compile Rust or JavaScript into WebAssembly (Wasm). Shopify executes these Wasm binaries directly within its core checkout engine in under 5 milliseconds with zero merchant server hosting requirements."
      },
      {
        "id": 2,
        "topic": "Shopify Hydrogen & Oxygen",
        "question": "What is the architectural role of Shopify Hydrogen and Oxygen in enterprise headless commerce?",
        "options": [
          "Hydrogen is an old PHP CMS and Oxygen is a database for WordPress.",
          "Hydrogen is a Remix-based React framework optimized for building custom headless storefronts, while Oxygen is Shopify’s global serverless hosting platform for deploying Hydrogen apps at the edge with built-in subrequest caching.",
          "Hydrogen is a local CSS preprocessor that only runs on macOS.",
          "Hydrogen replaces Shopify Admin and Oxygen replaces credit card payment gateways."
        ],
        "correctAnswer": 1,
        "explanation": "Hydrogen is Shopify’s official React/Remix framework for headless commerce. Oxygen is Shopify’s global edge deployment platform designed specifically to run Hydrogen applications with high availability and subrequest caching."
      },
      {
        "id": 3,
        "topic": "Cart Transform Functions",
        "question": "Which capability does the Cart Transform API (via Shopify Functions) enable for advanced merchant merchandising?",
        "options": [
          "Deleting the entire store theme when a customer adds an item to cart.",
          "Sending physical postcards to customers via postal mail.",
          "Expanding a bundle product into individual component inventory line items, merging multiple items into a discounted bundle, or updating item prices dynamically at checkout.",
          "Converting all product titles into uppercase strings in the Admin database."
        ],
        "correctAnswer": 2,
        "explanation": "The Cart Transform Function API allows developers to intercept cart operations to expand bundle products into individual inventory components, merge separate items into bundle packages, or update operations before checkout completion."
      },
      {
        "id": 4,
        "topic": "Subrequest Caching in Hydrogen",
        "question": "How does Shopify Hydrogen implement subrequest caching to optimize Storefront GraphQL API response times?",
        "options": [
          "By forcing every customer to download a 500MB zip file.",
          "By disabling all network requests and using hardcoded JSON files.",
          "By saving all products in browser IndexedDB on page load.",
          "By utilizing the Cache-Control header strategy (`CacheShort`, `CacheLong`, `CacheCustom`) with Oxygen edge network caching (stale-while-revalidate), serving cached queries in sub-milliseconds."
        ],
        "correctAnswer": 3,
        "explanation": "Hydrogen provides fine-grained subrequest caching utilities (`stale-while-revalidate`, `max-age`, `s-maxage`) that cache GraphQL queries at Oxygen edge points, drastically reducing origin load and latency."
      },
      {
        "id": 5,
        "topic": "Checkout UI Extension Sandboxing",
        "question": "Why are Checkout UI Extensions restricted from making arbitrary third-party `fetch()` network requests to untrusted domains?",
        "options": [
          "To enforce strict PCI-DSS compliance, protect buyer credit card and personally identifiable information (PII), and prevent malicious script injections in the payment funnel.",
          "Because Shopify servers do not support internet connections.",
          "Because JavaScript is unable to make HTTP requests in 2024.",
          "Because third-party requests only work in Internet Explorer."
        ],
        "correctAnswer": 0,
        "explanation": "Checkout UI Extensions run in secure sandboxes to maintain strict PCI-DSS compliance and prevent data exfiltration of customer credentials, addresses, and payment data."
      },
      {
        "id": 6,
        "topic": "GraphQL Bulk Operations JSONL",
        "question": "When consuming the downloadable JSON Lines (JSONL) file from a completed GraphQL Bulk Operation, how are parent-child relationships (e.g. Products and Variants) represented?",
        "options": [
          "All children are nested inside a 50GB single JSON object.",
          "Each child row contains a `__parentId` field referencing the `id` of its corresponding parent entity in the JSONL stream.",
          "Children are stored in a separate SQLite database file.",
          "Parent and child records are sorted randomly with no relation."
        ],
        "correctAnswer": 1,
        "explanation": "In Shopify Bulk Operation JSONL exports, child objects (such as ProductVariant or Metafield) are streamed as individual lines containing a `__parentId` property matching their parent object GID."
      },
      {
        "id": 7,
        "topic": "Shopify App Bridge Session Token Verification",
        "question": "How does an app backend authenticate incoming requests from an embedded App Bridge frontend without cookies?",
        "options": [
          "The backend checks if the request comes from an IP address in Canada.",
          "The frontend sends the store owner’s personal password in plain text.",
          "The frontend sends a short-lived RS256-signed JWT Session Token in the `Authorization: Bearer <token>` header, which the backend verifies using Shopify’s public key, checking the `dest` (shop domain) and `exp` claims.",
          "The backend asks the user to answer a security question on every click."
        ],
        "correctAnswer": 2,
        "explanation": "App Bridge generates a short-lived JWT session token signed by Shopify. The app server verifies the token signature using the app shared secret or Shopify JWKS, verifying the `dest` claim to confirm the requesting shop identity."
      },
      {
        "id": 8,
        "topic": "Redis Distributed Locking for Inventory Sync",
        "question": "Why is distributed locking (e.g. Redlock algorithm with Redis) critical when multiple background workers synchronize inventory for high-velocity flash sale stores?",
        "options": [
          "To bypass Shopify API rate limits entirely.",
          "To make the Redis database run 1,000 times faster.",
          "To encrypt customer credit cards on the worker node.",
          "To prevent concurrent race conditions where two workers simultaneously read outdated inventory counts and perform conflicting updates, resulting in overselling or stock discrepancies."
        ],
        "correctAnswer": 3,
        "explanation": "Distributed locks ensure that only one worker processes inventory mutations for a specific SKU/location at any given millisecond, preventing race conditions and inventory overselling."
      },
      {
        "id": 9,
        "topic": "Shopify Web Pixels API",
        "question": "What is the architectural purpose of the Shopify Web Pixels API in modern marketing and analytics tracking?",
        "options": [
          "It executes tracking scripts in an isolated, privacy-compliant web worker sandbox that subscribes to standardized customer events (`page_viewed`, `product_added_to_cart`, `checkout_completed`) without degrading storefront performance.",
          "It increases image resolution on mobile screens by 400%.",
          "It allows tracking pixels to directly alter checkout prices.",
          "It converts HTML templates into JPEG images."
        ],
        "correctAnswer": 0,
        "explanation": "The Web Pixels API isolates marketing tags into a dedicated sandbox worker, receiving normalized customer events via a secure event bus while respecting customer consent preferences (GDPR/CCPA)."
      },
      {
        "id": 10,
        "topic": "Mandatory Compliance Webhooks",
        "question": "Which three mandatory compliance webhooks are required by Shopify for all public and custom App Store applications?",
        "options": [
          "`orders/create`, `products/delete`, and `inventory/update`.",
          "`customers/data_request`, `customers/redact`, and `shop/redact`.",
          "`billing/charge`, `theme/publish`, and `admin/login`.",
          "`email/send`, `sms/verify`, and `card/charge`."
        ],
        "correctAnswer": 1,
        "explanation": "To comply with global data privacy regulations (GDPR/CCPA), all Shopify apps must implement endpoints for `customers/data_request` (exporting customer data), `customers/redact` (erasing customer data), and `shop/redact` (erasing store data 48h after uninstall)."
      },
      {
        "id": 11,
        "topic": "Shopify Function Input GraphQL Schema",
        "question": "How do Shopify Functions define the data payload they receive from the Shopify checkout runtime?",
        "options": [
          "By making synchronous HTTP REST calls during checkout execution.",
          "By reading environment variables from a local `.env` file.",
          "Through an `input.graphql` query file located in the function directory, which instructs Shopify exactly which cart fields, discounts, or metafields to serialize and pass to the function’s Run function.",
          "Through a hardcoded SQL query."
        ],
        "correctAnswer": 2,
        "explanation": "Every Shopify Function contains an `input.graphql` file that declares the precise data requirements (cart lines, customer tags, custom metafields). Shopify compiles this query and passes the JSON input to the compiled Wasm function."
      },
      {
        "id": 12,
        "topic": "Multi-Tenant Database Row-Level Security",
        "question": "In an enterprise multi-tenant Shopify application database (PostgreSQL), how should data isolation between competing merchant stores be enforced?",
        "options": [
          "By giving all merchants shared admin credentials.",
          "By relying on frontend JavaScript to filter out other merchants’ data.",
          "By disabling database indexes on all tables.",
          "By implementing PostgreSQL Row-Level Security (RLS) policies or tenant-aware ORM middleware that automatically injects `WHERE shop_id = current_tenant` into every single query."
        ],
        "correctAnswer": 3,
        "explanation": "Row-Level Security (RLS) and database middleware enforce strict tenant boundaries at the database layer, guaranteeing that a bug in application business logic cannot leak one merchant’s customer data to another."
      },
      {
        "id": 13,
        "topic": "Admin API GraphQL Cost Optimization",
        "question": "When designing high-throughput Shopify Admin GraphQL queries, which technique minimizes calculated query cost?",
        "options": [
          "Selecting only necessary scalar fields, utilizing pagination with small batch sizes (e.g. `first: 20`), and avoiding deep nested connections unless strictly required.",
          "Requesting all available fields using wildcards (`*`).",
          "Wrapping every query in 5 nested loops.",
          "Sending queries over plain HTTP without compression."
        ],
        "correctAnswer": 0,
        "explanation": "GraphQL query costs in Shopify correlate directly with field selections and connection multipliers. Requesting only essential fields and limiting connection sizes conserves cost points and prevents throttling."
      },
      {
        "id": 14,
        "topic": "Content Security Policy for Embedded Apps",
        "question": "Which HTTP Content Security Policy (CSP) header must an embedded Shopify application server return to prevent clickjacking while allowing rendering in the Shopify Admin?",
        "options": [
          "`Content-Security-Policy: frame-ancestors *;`",
          "`Content-Security-Policy: frame-ancestors https://*.myshopify.com https://admin.shopify.com;`",
          "`X-Frame-Options: DENY`",
          "`Content-Security-Policy: default-src 'none';`"
        ],
        "correctAnswer": 1,
        "explanation": "Setting `frame-ancestors https://*.myshopify.com https://admin.shopify.com` allows the embedded iframe to render exclusively inside official Shopify Admin domains while blocking embedding on unauthorized third-party domains."
      },
      {
        "id": 15,
        "topic": "Shopify Discount Function Allocation API",
        "question": "In a custom Shopify Discount Function written in Rust or JS, what is returned in the `FunctionResult` to apply a percentage discount to specific cart lines?",
        "options": [
          "A redirect header to an external checkout page.",
          "A raw SQL UPDATE statement modifying product prices in the database.",
          "A `FunctionResult` object containing `discounts: [{ targets: [{ productVariant: { id: ... } }], value: { percentage: { value: 15.0 } }, message: \"15% Developer VIP Discount\" }]`.",
          "A plain text string saying \"DISCOUNT_APPLIED\"."
        ],
        "correctAnswer": 2,
        "explanation": "Discount Functions return a structured `FunctionResult` with targets, discount values (percentage or fixed amount), and customer-facing promotion messages evaluated directly by the checkout engine."
      },
      {
        "id": 16,
        "topic": "App Billing API & Subscriptions",
        "question": "How does an app charge merchants recurring subscription fees via the Shopify GraphQL Admin API?",
        "options": [
          "By sending a monthly paper invoice in the mail.",
          "By asking the merchant to enter their credit card on an unencrypted web form.",
          "By automatically charging the merchant’s bank account without consent.",
          "By executing the `appSubscriptionCreate` mutation, which generates a `confirmationUrl` where the merchant approves the recurring billing charge within the native Shopify Admin."
        ],
        "correctAnswer": 3,
        "explanation": "The `appSubscriptionCreate` mutation initiates a recurring billing contract. Shopify returns a `confirmationUrl` where the merchant reviews and authorizes the charge on their consolidated Shopify bill."
      },
      {
        "id": 17,
        "topic": "Zero-Downtime Theme Blue-Green Deployment",
        "question": "How do enterprise teams execute zero-downtime theme deployments during high-traffic promotional events?",
        "options": [
          "By deploying and thoroughly testing the candidate theme in an unpublished theme slot, executing automated E2E tests against the preview URL, and calling `themePublish` via the Admin API to swap live themes instantaneously.",
          "By taking the storefront offline for 4 hours during peak sales.",
          "By deleting the live theme and rebuilding it manually line by line.",
          "By asking all customers to clear their browser cache simultaneously."
        ],
        "correctAnswer": 0,
        "explanation": "Publishing an unpublished theme slot via the API executes an instantaneous pointer swap at the CDN edge with zero downtime or interrupted checkout sessions."
      },
      {
        "id": 18,
        "topic": "Event-Driven Webhook Dead Letter Queue (DLQ)",
        "question": "What is the purpose of a Dead Letter Queue (DLQ) in an enterprise Shopify webhook consumer architecture?",
        "options": [
          "To permanently delete all webhook logs without investigation.",
          "To isolate and persist malformed or persistently failing webhook payloads after maximum retry attempts for inspection, debugging, and replay without blocking healthy worker queues.",
          "To speed up consumer internet bandwidth.",
          "To send spam emails to competitors."
        ],
        "correctAnswer": 1,
        "explanation": "A Dead Letter Queue captures poisoned or failed payloads that have exhausted all retry attempts, allowing engineering teams to inspect errors, fix root causes, and replay events safely."
      },
      {
        "id": 19,
        "topic": "Shopify CLI Extension Development",
        "question": "Which Shopify CLI command generates a new Checkout UI Extension or Shopify Function within an existing app project?",
        "options": [
          "`npm install --save-extension`",
          "`shopify theme create --checkout`",
          "`shopify app generate extension`",
          "`shopify admin extension:init`"
        ],
        "correctAnswer": 2,
        "explanation": "Running `shopify app generate extension` presents an interactive prompt to select and scaffold Checkout UI Extensions, Shopify Functions, Theme App Extensions, or Admin action extensions."
      },
      {
        "id": 20,
        "topic": "GraphQL Fragments for Reusable Data Trees",
        "question": "Why should enterprise Shopify applications utilize GraphQL fragments across Storefront and Admin API queries?",
        "options": [
          "To convert GraphQL into REST automatically.",
          "To increase query payload size unnecessarily.",
          "Because GraphQL fails without fragments.",
          "To enforce unified data types across UI components, reduce boilerplate code, and ensure consistent field selection across multiple queries."
        ],
        "correctAnswer": 3,
        "explanation": "GraphQL fragments promote DRY (Don’t Repeat Yourself) code, allowing component-level data dependencies to be co-located with UI components and composed into parent queries."
      },
      {
        "id": 21,
        "topic": "Headless Storefront SEO & SSR",
        "question": "When architecting a headless Shopify storefront with Hydrogen or Next.js, how are SEO meta tags and JSON-LD structured data generated?",
        "options": [
          "Server-side rendered on edge servers using Storefront API product/collection SEO fields, returning complete `<title>`, Open Graph tags, canonical URLs, and Schema.org JSON-LD microdata in the initial HTML document.",
          "Rendered purely client-side via JavaScript 10 seconds after page load.",
          "Headless storefronts cannot have SEO.",
          "By relying on Shopify theme liquid snippets inside the React bundle."
        ],
        "correctAnswer": 0,
        "explanation": "Edge Server-Side Rendering (SSR) generates full semantic HTML, Open Graph meta tags, canonical links, and JSON-LD structured schemas on the initial response for immediate search crawler indexing."
      },
      {
        "id": 22,
        "topic": "OAuth Nonce / State Parameter Security",
        "question": "In the Shopify OAuth 2.0 authorization request, what vulnerability does the `state` (nonce) parameter protect against?",
        "options": [
          "SQL Injection attacks on the Shopify core database.",
          "Cross-Site Request Forgery (CSRF) attacks, by ensuring that the authorization callback was initiated by the legitimate user session.",
          "Denial of Service (DoS) attacks on DNS root servers.",
          "CSS layout shifts in the Theme Editor."
        ],
        "correctAnswer": 1,
        "explanation": "The `state` parameter contains a cryptographically random nonce stored in the user session. Verifying this value in the OAuth callback ensures the authorization flow was initiated by the genuine user, mitigating CSRF."
      },
      {
        "id": 23,
        "topic": "Shopify Functions Cargo Compilation",
        "question": "When building a Shopify Function written in Rust, which command compiles the code into the WebAssembly target required by Shopify?",
        "options": [
          "`rustc main.rs --target=windows`",
          "`npm run compile-exe`",
          "`cargo wasi build --release` (producing `target/wasm32-wasi/release/function.wasm`)",
          "`gcc function.c -o function.so`"
        ],
        "correctAnswer": 2,
        "explanation": "Rust Shopify Functions compile against the `wasm32-wasi` target using Cargo, producing a standalone WebAssembly binary deployed with the extension."
      },
      {
        "id": 24,
        "topic": "Automated Playwright E2E Testing for Shopify",
        "question": "When creating automated End-to-End (E2E) test suites for Shopify apps with Playwright, how should test authentication be structured for CI environments?",
        "options": [
          "By skipping all authentication tests entirely.",
          "By manually solving CAPTCHAs in real-time on every test run.",
          "By disabling all security and authentication on the production server.",
          "By mocking the JWT session token in localStorage or using pre-authenticated session state cookies injected during test initialization."
        ],
        "correctAnswer": 3,
        "explanation": "CI test harnesses inject pre-computed valid test session tokens or mock session state into localStorage/headers before each test run, enabling automated execution without interactive login prompts."
      },
      {
        "id": 25,
        "topic": "App Store Review Performance Benchmark",
        "question": "During official Shopify App Store reviews, what is the maximum acceptable TTFB (Time to First Byte) and page load time for embedded app dashboards?",
        "options": [
          "App pages should achieve sub-second TTFB and complete initial dashboard rendering in under 2.5 seconds to pass merchant experience standards.",
          "30 seconds per page load.",
          "5 minutes per button click.",
          "There are no performance requirements for Shopify apps."
        ],
        "correctAnswer": 0,
        "explanation": "Shopify App Review guidelines evaluate merchant UX rigor: fast TTFB (< 1s), responsive Polaris UI, clear loading skeletons, and zero unhandled server exceptions."
      },
      {
        "id": 26,
        "topic": "Shopify Theme App Extension Asset CDN Caching",
        "question": "How are static assets (CSS, JS, images) in Theme App Extensions served and cached by Shopify?",
        "options": [
          "Assets are hosted on the developer’s local laptop.",
          "Assets in the extension `assets/` folder are deployed to Shopify’s global Cloudflare CDN with immutable cache headers and referenced via the `{{ 'file.js' | asset_url }}` Liquid filter.",
          "Assets are recompiled on every page view.",
          "Assets are stored in the merchant’s Google Drive."
        ],
        "correctAnswer": 1,
        "explanation": "Theme App Extension assets are hosted on Shopify’s global CDN infrastructure, providing edge caching, automatic gzip/brotli compression, and fast global delivery."
      },
      {
        "id": 27,
        "topic": "GraphQL Bulk Mutation API Limits",
        "question": "How many mutations can be executed concurrently in a single standard GraphQL Admin API request batch?",
        "options": [
          "Exactly 0 mutations.",
          "1,000,000 mutations per millisecond.",
          "Standard requests execute mutations sequentially within query cost limits, while Bulk Import APIs should be used for massive batch datasets.",
          "Mutations can only be run once per day."
        ],
        "correctAnswer": 2,
        "explanation": "GraphQL mutations run sequentially in a request. For high-volume updates (e.g. bulk inventory updates), apps should use staged uploads and asynchronous bulk operations or batched jobs."
      },
      {
        "id": 28,
        "topic": "Customer Privacy API & Consent Tracking",
        "question": "How should a Shopify custom app respect buyer cookie consent choices under GDPR/CCPA before loading tracking scripts?",
        "options": [
          "By blocking all European visitors from viewing the site.",
          "By ignoring all user preferences and tracking everything.",
          "By asking users to mail a handwritten consent letter.",
          "By integrating with the Shopify Customer Privacy API (`window.Shopify.customerPrivacy.userCanBeTracked()`) and listening for the `visitorConsentCollected` event before activating marketing pixels."
        ],
        "correctAnswer": 3,
        "explanation": "The Shopify Customer Privacy API exposes helper methods and events to ensure tracking scripts only initialize when lawful buyer consent has been granted."
      },
      {
        "id": 29,
        "topic": "Webhooks Replay Attack Prevention",
        "question": "In addition to HMAC verification, how should a secure webhook receiver prevent replay attacks where an attacker re-sends an intercepted old payload?",
        "options": [
          "By checking the `X-Shopify-Webhook-Id` against a database of processed IDs and verifying that the `X-Shopify-Triggered-At` timestamp is within an acceptable threshold (e.g. within the last 15 minutes).",
          "By changing the app secret key every 3 seconds.",
          "By disabling webhooks entirely.",
          "By encrypting the server hard drive on every request."
        ],
        "correctAnswer": 0,
        "explanation": "Checking both the unique `X-Shopify-Webhook-Id` (idempotency) and verifying the timestamp freshness in `X-Shopify-Triggered-At` prevents replay attacks."
      },
      {
        "id": 30,
        "topic": "Shopify App Bridge Navigation Context",
        "question": "When an embedded Shopify app needs to redirect the merchant to a core Admin page (e.g. the Products admin list), how should the redirect be performed?",
        "options": [
          "Setting `window.location.href = \"/admin/products\"` inside the iframe, which breaks admin framing.",
          "Using App Bridge Navigation actions (e.g. `open(\"shopify://admin/products\", \"_top\")` or `Redirect.toAdminSection()`) to break out of the iframe cleanly.",
          "Showing a popup asking the user to open a new browser window.",
          "Sending an email with the link."
        ],
        "correctAnswer": 1,
        "explanation": "App Bridge provides dedicated redirect utilities that instruct the top-level parent Admin window to navigate safely without nesting administrative interfaces inside iframes."
      },
      {
        "id": 31,
        "topic": "Shopify Functions Payment Customization API",
        "question": "Which capability does the Payment Customization Function API provide during checkout?",
        "options": [
          "Printing physical checks on merchant printers.",
          "Processing credit card transactions directly on the app server.",
          "Hiding, reordering, or renaming payment gateway options (e.g. hiding Cash on Delivery for orders over $500 or for specific customer tags).",
          "Converting all prices to cryptocurrencies."
        ],
        "correctAnswer": 2,
        "explanation": "Payment Customization Functions allow merchants to hide, reorder, or rename available payment methods dynamically based on cart total, shipping address, or customer tags."
      },
      {
        "id": 32,
        "topic": "Shopify App Bridge Contextual SaveBar",
        "question": "When a merchant edits settings in an embedded app, how should unsaved changes be communicated in the UI according to Polaris guidelines?",
        "options": [
          "By flashing the entire screen in red.",
          "By popping up an unclosable alert box.",
          "By automatically saving without user awareness.",
          "By displaying the App Bridge Contextual SaveBar pinned to the top of the Admin window with \"Save\" and \"Discard\" actions."
        ],
        "correctAnswer": 3,
        "explanation": "The App Bridge Contextual SaveBar provides a unified pattern across Shopify for notifying merchants of dirty form states and providing standard Save/Discard triggers."
      },
      {
        "id": 33,
        "topic": "GraphQL Admin API Cursor Backward Pagination",
        "question": "How is backward pagination executed in the Shopify GraphQL Admin API?",
        "options": [
          "By specifying `last: N, before: $cursor` and inspecting `pageInfo.hasPreviousPage` and `pageInfo.startCursor`.",
          "By passing negative numbers to `first: -10`.",
          "Backward pagination is impossible in GraphQL.",
          "By sorting the array in reverse in client JavaScript."
        ],
        "correctAnswer": 0,
        "explanation": "Relay pagination supports backward traversal via `last: N, before: $cursor`, using `pageInfo.hasPreviousPage` and `pageInfo.startCursor` to traverse historical slices."
      },
      {
        "id": 34,
        "topic": "Shopify Functions Delivery Customization API",
        "question": "What is the primary function of the Delivery Customization Function API?",
        "options": [
          "Tracking delivery trucks with GPS satellites.",
          "Hiding, reordering, or renaming shipping delivery methods at checkout (e.g. offering free local delivery only for specific postal codes).",
          "Replacing FedEx drivers with drones.",
          "Calculating sales tax percentages."
        ],
        "correctAnswer": 1,
        "explanation": "Delivery Customization Functions allow merchants to conditionally modify, hide, or prioritize shipping options based on cart contents, destination address, and buyer tier."
      },
      {
        "id": 35,
        "topic": "Multi-Region Shopify Storefronts & Markets",
        "question": "How does Shopify Markets handle international multi-currency and multi-language storefront routing?",
        "options": [
          "By disabling international shipping entirely.",
          "By creating 50 separate Shopify stores and manually copying products.",
          "By utilizing localized subfolders (e.g. `/fr-ca`, `/de`) or international domains mapped to distinct Markets with automatic currency conversions and localized price lists in Liquid and GraphQL.",
          "By translating prices with client-side JavaScript regex."
        ],
        "correctAnswer": 2,
        "explanation": "Shopify Markets provides native multi-region commerce with localized URLs (`/en-gb`, `/de`), localized catalog pricing, and automatic currency conversion natively in Liquid and Storefront APIs."
      },
      {
        "id": 36,
        "topic": "Shopify App Event Logging & Telemetry",
        "question": "In production Shopify applications, why should OpenTelemetry, Winston/Pino structured logging, and APM tools (Datadog/Sentry) be integrated?",
        "options": [
          "To increase cloud hosting bills.",
          "To print merchant passwords to log aggregators.",
          "To slow down server execution.",
          "To monitor distributed trace context across webhook ingestion, database queries, and GraphQL API latency, enabling rapid diagnosis of production bottlenecks."
        ],
        "correctAnswer": 3,
        "explanation": "Structured logging and distributed tracing track request lifecycles, API consumption rates, queue latency, and uncaught exceptions across distributed cloud services."
      },
      {
        "id": 37,
        "topic": "App Scopes Upgrade Handshake",
        "question": "When a new version of an installed app requires additional access scopes (e.g. adding `read_discounts`), how must the app request the new permissions?",
        "options": [
          "By initiating an OAuth re-authorization redirect specifying the combined old and new scopes; Shopify prompts the merchant to approve the additional permissions before returning to the app.",
          "By attempting to query the API until permissions are granted automatically.",
          "By asking the merchant to uninstall and reinstall the app from scratch.",
          "By editing the store database directly."
        ],
        "correctAnswer": 0,
        "explanation": "When an app requires new scopes, it redirects the merchant to the OAuth authorization screen with the expanded scope string. Once accepted, Shopify updates the offline token permissions."
      },
      {
        "id": 38,
        "topic": "Shopify CLI App Configuration Versioning",
        "question": "How are extension definitions and app configurations deployed to Shopify in modern CLI 3.x workflows?",
        "options": [
          "By manually uploading zip files to the Partner Dashboard.",
          "By running `shopify app deploy`, which packages all app extensions, validates configurations against `shopify.app.toml`, and releases an atomic app version to the Shopify platform.",
          "By emailing extension code to Shopify support.",
          "By pushing code directly to the merchant’s development store theme."
        ],
        "correctAnswer": 1,
        "explanation": "`shopify app deploy` creates an atomic app release on Shopify, publishing all configured extensions (Checkout UI, Functions, Theme App Extensions) in a single synchronized release."
      },
      {
        "id": 39,
        "topic": "Secure Credential Rotation in CI/CD",
        "question": "What is the enterprise best practice for managing Shopify API keys, partner organization tokens, and database secrets in production CI/CD pipelines?",
        "options": [
          "Sharing secrets in unencrypted Slack channels.",
          "Hardcoding API secrets inside public repository README files.",
          "Storing secrets in encrypted secret managers (e.g. GitHub Secrets, AWS Secrets Manager, Doppler), with automated rotation policies and zero hardcoded credentials in source code.",
          "Printing secrets to Docker build logs."
        ],
        "correctAnswer": 2,
        "explanation": "Enterprise security requires isolated secrets management (GitHub Secrets, AWS Secrets Manager) with least-privilege service accounts, automated rotation, and audit trails."
      },
      {
        "id": 40,
        "topic": "App Store Review Automated Security Scanners",
        "question": "Which automated security tool does Shopify execute during App Store submission reviews to detect vulnerabilities?",
        "options": [
          "A grammar checker for product descriptions.",
          "A bot that clicks random buttons for 24 hours.",
          "An antivirus tool for Windows 95.",
          "Automated security analyzers that scan for exposed API keys, missing OAuth HMAC validation, unescaped user inputs (XSS/SQLi), insecure iframe embedding (CSP), and broken mandatory compliance webhooks."
        ],
        "correctAnswer": 3,
        "explanation": "Shopify’s automated submission pipeline scans app code, HTTP headers, OAuth flows, and webhook endpoints for OWASP vulnerabilities, CSP compliance, and GDPR webhook readiness."
      }
    ]
  }
];
