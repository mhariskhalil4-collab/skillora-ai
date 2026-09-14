import { Task, QuizQuestion } from '../../types/roadmap.types';

export const META_INTERMEDIATE_FINAL_ASSESSMENT: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Pixel & CAPI',
    question: 'Why can Meta Pixel and Conversions API be used together?',
    options: [
      'To create Shopify themes',
      'To complement browser and server-side event measurement',
      'To replace all advertising',
      'To design logos'
    ],
    correctAnswer: 1, // B
    explanation: 'Using the browser-based Meta Pixel together with the server-side Conversions API (CAPI) creates a redundant, resilient measurement setup that captures events blocked by browser privacy restrictions, ad blockers, or network drops.'
  },
  {
    id: 2,
    topic: 'Event Deduplication',
    question: 'What is event deduplication intended to prevent?',
    options: [
      'Duplicate counting of the same conversion event',
      'Duplicate Facebook Pages',
      'Duplicate ad images',
      'Duplicate passwords'
    ],
    correctAnswer: 0, // A
    explanation: 'Event deduplication uses unique event_id and event_name parameters to ensure that when both the browser Pixel and server CAPI record the same customer conversion, Meta counts it only once.'
  },
  {
    id: 3,
    topic: 'Standard Events',
    question: 'Which event is most directly associated with a completed e-commerce purchase?',
    options: [
      'PageView',
      'ViewContent',
      'Purchase',
      'Scroll'
    ],
    correctAnswer: 2, // C
    explanation: 'The Purchase standard event fires on the order confirmation/thank-you page and passes order value, currency, and transaction ID back to Meta.'
  },
  {
    id: 4,
    topic: 'Lead Quality',
    question: 'Why is a qualified lead often more valuable than a cheap unqualified lead?',
    options: [
      'Qualification can better reflect actual business value',
      'Cheap leads always have higher value',
      'Qualified leads cannot be measured',
      'Cost per lead is irrelevant'
    ],
    correctAnswer: 0, // A
    explanation: 'A lead with verified intent and budget is far more likely to close into revenue than a cheap lead generated through frictionless, low-intent form auto-fills.'
  },
  {
    id: 5,
    topic: 'Retargeting Strategy',
    question: 'Which audience is typically a warm retargeting audience?',
    options: [
      'Recent website visitors',
      'Random users worldwide',
      'Employees only',
      'People who have never interacted with the business'
    ],
    correctAnswer: 0, // A
    explanation: 'Recent website visitors have demonstrated clear brand awareness and intent, making them a primary warm retargeting audience.'
  },
  {
    id: 6,
    topic: 'Exclusions & Funnel Design',
    question: 'Why might an advertiser exclude purchasers from an acquisition campaign?',
    options: [
      'To reduce unnecessary spend on existing customers when acquisition is the goal',
      'To disable all sales',
      'To remove purchase tracking',
      'To reduce product quality'
    ],
    correctAnswer: 0, // A
    explanation: 'Excluding existing customers prevents spending top-of-funnel acquisition budget on people who have already converted, maximizing net-new customer growth.'
  },
  {
    id: 7,
    topic: 'Lookalike Seed Selection',
    question: 'What is a strong source for a high-quality lookalike strategy?',
    options: [
      'Random users',
      'Relevant high-quality customers',
      'People unrelated to the business',
      'An empty audience'
    ],
    correctAnswer: 1, // B
    explanation: 'Using verified high-LTV customers or repeat purchasers provides high-fidelity behavioral data for Meta\'s lookalike modeling algorithm.'
  },
  {
    id: 8,
    topic: 'Creative Testing',
    question: 'What should a creative test ideally isolate?',
    options: [
      'Multiple unrelated variables at once',
      'A clear hypothesis or controlled variable',
      'The business name',
      'The billing method'
    ],
    correctAnswer: 1, // B
    explanation: 'Scientific testing requires isolating a single variable (e.g. testing 3 distinct visual hooks while keeping copy, headline, and audience identical).'
  },
  {
    id: 9,
    topic: 'Funnel Diagnostics',
    question: 'If CTR is strong but purchases are weak, what should be investigated?',
    options: [
      'Landing page, offer, conversion experience, and tracking',
      'Only the logo',
      'Employee salaries',
      'The Facebook Page username'
    ],
    correctAnswer: 0, // A
    explanation: 'Strong CTR indicates the ad creative generates curiosity and interest, but drop-off occurs on the post-click destination (pricing, loading speed, checkout friction, or broken tracking).'
  },
  {
    id: 10,
    topic: 'Creative Fatigue',
    question: 'What is a common sign of creative fatigue?',
    options: [
      'Increasing response with lower frequency',
      'Declining engagement/conversion efficiency as the same creative is repeatedly shown',
      'More product inventory',
      'A faster website'
    ],
    correctAnswer: 1, // B
    explanation: 'Creative fatigue is characterized by rising frequency, declining CTR, and escalating CPA as audience members repeatedly ignore familiar ad visuals.'
  },
  {
    id: 11,
    topic: 'Lead Economics',
    question: 'Why can lead quality matter more than CPL?',
    options: [
      'Cheap leads may not become valuable customers',
      'CPL always predicts revenue perfectly',
      'Lead quality cannot affect revenue',
      'Qualified leads are always free'
    ],
    correctAnswer: 0, // A
    explanation: 'A $5 unqualified lead that converts at 0% produces $0 revenue, whereas a $25 qualified lead converting at 20% yields high profitability.'
  },
  {
    id: 12,
    topic: 'Audience Exclusions',
    question: 'What is the purpose of customer exclusions in funnel design?',
    options: [
      'Prevent irrelevant audiences from receiving certain campaign messages',
      'Delete customers',
      'Remove all conversions',
      'Stop reporting'
    ],
    correctAnswer: 0, // A
    explanation: 'Exclusions segment user journeys cleanly, ensuring cold prospects receive awareness hooks and cart abandoners receive checkout incentives without overlap.'
  },
  {
    id: 13,
    topic: 'Catalog Advertising',
    question: 'What does a product catalog contain conceptually?',
    options: [
      'Structured product information used for product advertising experiences',
      'Employee passwords',
      'Website source code only',
      'Ad account invoices'
    ],
    correctAnswer: 0, // A
    explanation: 'A product catalog contains structured inventory feeds (titles, descriptions, prices, availability, image URLs) used to generate dynamic product ads.'
  },
  {
    id: 14,
    topic: 'Placements & Formats',
    question: 'Why should creative fit the placement?',
    options: [
      'Different placements have different formats, dimensions, and user contexts',
      'All placements are identical',
      'Placement never affects creative presentation',
      'It changes the product price'
    ],
    correctAnswer: 0, // A
    explanation: 'Reels and Stories require full-screen 9:16 vertical video with audio, whereas Feeds require 1:1 or 4:5 aspect ratios designed for silent browsing.'
  },
  {
    id: 15,
    topic: 'Funnel Architecture',
    question: 'What is a funnel?',
    options: [
      'A structured journey from initial interaction toward a desired business outcome',
      'A billing receipt',
      'A creative file format',
      'An account password'
    ],
    correctAnswer: 0, // A
    explanation: 'A marketing funnel is the multi-step strategic progression guiding cold prospects through awareness, interest, evaluation, and final purchase conversion.'
  },
  {
    id: 16,
    topic: 'Retargeting Strategy',
    question: 'What does a strong retargeting strategy usually require?',
    options: [
      'Relevant audience segmentation and appropriate messaging',
      'Showing the same message to everyone forever',
      'Removing all exclusions',
      'Ignoring user intent'
    ],
    correctAnswer: 0, // A
    explanation: 'Effective retargeting delivers tailored messages matching user recency (e.g. cart reminders for 3-day abandoners, customer reviews for 14-day page visitors).'
  },
  {
    id: 17,
    topic: 'Conversion Tracking',
    question: 'Why is conversion tracking important?',
    options: [
      'It helps connect advertising activity to measurable business actions',
      'It guarantees profitability',
      'It automatically writes ad copy',
      'It replaces a landing page'
    ],
    correctAnswer: 0, // A
    explanation: 'Accurate conversion tracking allows media buyers to evaluate CPA/ROAS, attribute revenue, and provide optimization signals to Meta machine learning algorithms.'
  },
  {
    id: 18,
    topic: 'Event Troubleshooting',
    question: 'What should an advertiser do if purchase events appear duplicated?',
    options: [
      'Investigate browser/server event deduplication and event IDs',
      'Increase the budget immediately',
      'Delete the campaign',
      'Ignore the issue'
    ],
    correctAnswer: 0, // A
    explanation: 'Duplicated purchases indicate that Pixel and CAPI events are firing with mismatched or missing `event_id` parameters, causing Meta to count both signals.'
  },
  {
    id: 19,
    topic: 'Diagnostics & Hypotheses',
    question: 'A campaign has strong CTR but poor landing-page conversion. What is a reasonable hypothesis?',
    options: [
      'The ad is generating interest but the post-click experience may be weak',
      'The audience must automatically be perfect',
      'The product is automatically profitable',
      'Tracking cannot matter'
    ],
    correctAnswer: 0, // A
    explanation: 'When ads generate high click volume but zero purchases, the friction point resides on the landing page (slow speed, high price, lack of proof, confusing checkout).'
  },
  {
    id: 20,
    topic: 'Scaling Strategy',
    question: 'What is vertical scaling?',
    options: [
      'Increasing budget or spend within an existing successful setup',
      'Creating unrelated businesses',
      'Changing the Facebook logo',
      'Removing all audiences'
    ],
    correctAnswer: 0, // A
    explanation: 'Vertical scaling involves raising the daily budget of an existing high-performing ad set or campaign while maintaining acceptable CPA/ROAS.'
  },
  {
    id: 21,
    topic: 'Scaling Strategy',
    question: 'What is horizontal scaling?',
    options: [
      'Expanding through additional viable audiences, creatives, or campaign structures',
      'Increasing font size',
      'Reducing all campaigns to zero',
      'Deleting product pages'
    ],
    correctAnswer: 0, // A
    explanation: 'Horizontal scaling expands total account spend by introducing new audience segments, testing new creative angles, or launching in new geographical markets.'
  },
  {
    id: 22,
    topic: 'Unit Economics',
    question: 'Why should scaling be based on unit economics?',
    options: [
      'Increased spend is useful only when the resulting economics remain acceptable',
      'More spend is always profitable',
      'CPM determines profit by itself',
      'Scaling has no relationship to revenue'
    ],
    correctAnswer: 0, // A
    explanation: 'Scaling is only commercially viable if the incremental customer acquisition cost leaves a positive contribution margin after product and operating expenses.'
  },
  {
    id: 23,
    topic: 'E-commerce Metrics',
    question: 'Which metric is directly useful for evaluating purchase efficiency?',
    options: [
      'Cost per purchase',
      'Number of profile colors',
      'Page username length',
      'Number of employees'
    ],
    correctAnswer: 0, // A
    explanation: 'Cost per Purchase (CPA) directly tells the advertiser how much ad spend was required to secure each customer order.'
  },
  {
    id: 24,
    topic: 'Attribution Modeling',
    question: 'What is attribution?',
    options: [
      'Assigning conversion credit according to a defined measurement approach',
      'Designing a creative',
      'Naming a campaign',
      'Uploading a video'
    ],
    correctAnswer: 0, // A
    explanation: 'Attribution is the mathematical methodology determining which ad click or impression receives credit for a downstream conversion (e.g. 7-day click / 1-day view).'
  },
  {
    id: 25,
    topic: 'Attribution Limitations',
    question: 'Why should attribution results be interpreted carefully?',
    options: [
      'Measurement models and available signals have limitations',
      'Attribution is always exact',
      'Every platform always receives complete user data',
      'Attribution has no business impact'
    ],
    correctAnswer: 0, // A
    explanation: 'Browser privacy controls, cross-device journeys, and platform modeling mean reported attribution is an estimate rather than an infallible financial audit.'
  },
  {
    id: 26,
    topic: 'Client Reporting',
    question: 'What is a good professional client report likely to include?',
    options: [
      'KPIs, insights, problems, recommendations, and next actions',
      'Only screenshots',
      'Only impressions',
      'Only positive results'
    ],
    correctAnswer: 0, // A
    explanation: 'Executive client reports deliver actionable business value by summarizing KPIs, diagnosing challenges honestly, and proposing strategic next steps.'
  },
  {
    id: 27,
    topic: 'Reporting & Metrics',
    question: 'What is the difference between a vanity metric and a business KPI?',
    options: [
      'A business KPI is more directly connected to the business objective',
      'Vanity metrics always generate revenue',
      'KPIs cannot be measured',
      'There is no difference'
    ],
    correctAnswer: 0, // A
    explanation: 'Vanity metrics (likes, video views, impressions) show activity, while business KPIs (conversions, CPA, revenue, ROAS, contribution margin) measure financial health.'
  },
  {
    id: 28,
    topic: 'Fatigue Diagnostics',
    question: 'If frequency rises while CTR and conversion efficiency decline, what should be investigated?',
    options: [
      'Audience saturation and creative fatigue',
      'Employee attendance',
      'Domain name length',
      'Invoice formatting'
    ],
    correctAnswer: 0, // A
    explanation: 'High frequency paired with falling CTR and rising CPA indicates that the target audience has grown numb to the ad, requiring fresh creative assets or audience expansion.'
  },
  {
    id: 29,
    topic: 'Professional Integrity',
    question: 'Why should advertisers avoid promising guaranteed ROAS or sales?',
    options: [
      'Advertising performance depends on many variables and cannot responsibly be guaranteed',
      'ROAS is illegal to calculate',
      'Sales never happen',
      'Meta does not allow reports'
    ],
    correctAnswer: 0, // A
    explanation: 'External factors such as market competition, supply chain, landing page changes, and economic shifts make guaranteed advertising outcomes impossible to promise honestly.'
  },
  {
    id: 30,
    topic: 'Optimization Philosophy',
    question: 'What is the strongest general optimization approach?',
    options: [
      'Diagnose the full funnel using relevant data before making changes',
      'Change everything every day',
      'Optimize only for impressions',
      'Always increase budget'
    ],
    correctAnswer: 0, // A
    explanation: 'Professional optimization is hypothesis-driven: analyze the entire funnel, isolate the underperforming bottleneck, and implement targeted adjustments.'
  }
];

export const META_INTERMEDIATE_TASKS: Task[] = [
  {
    id: 'meta-int-01',
    orderIndex: 1,
    title: 'Module 1: Meta Pixel and Data Sources',
    description: 'Master website tracking, standard vs custom events, event parameters, domain verification, and testing with the Meta Pixel Helper and Test Events tool.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-01', title: 'Meta Pixel Implementation Reference', type: 'documentation', url: 'https://developers.facebook.com/docs/meta-pixel' }
    ],
    lessonContent: {
      overview: `### The Foundation of Algorithmic Optimization

The **Meta Pixel** is a client-side JavaScript snippet installed on your website that tracks user interactions and transmits structured conversion data back to Meta Ads Manager. Without accurate pixel telemetry, Meta machine learning algorithms cannot optimize for purchases, custom audiences cannot be created, and ROAS cannot be calculated.

In this module, you will master standard and custom event schemas, event parameters (value, currency, content_ids), domain verification, and real-time event debugging.`,
      analogyHero: 'Think of the Meta Pixel as a team of digital store assistants quietly observing customer actions. When a shopper browses a product, puts it in their cart, or checks out at the register, the assistant notes the exact item and price and instantly radios headquarters.',
      objectives: [
        'Understand how the Meta Pixel executes in client browsers.',
        'Master the 7 core standard events: PageView, ViewContent, AddToCart, InitiateCheckout, Purchase, Lead, CompleteRegistration.',
        'Attach dynamic event parameters (value, currency, content_name, content_ids).',
        'Debug event firing using the Meta Pixel Helper extension and Ads Manager Test Events console.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: `fbq('track', 'PageView');
fbq('track', 'ViewContent', { content_name: 'Summer Dress', value: 60.00, currency: 'USD' });
fbq('track', 'AddToCart', { content_ids: ['SKU-101'], value: 60.00, currency: 'USD' });
fbq('track', 'Purchase', { value: 60.00, currency: 'USD', order_id: 'ORD-98412' });`,
      sections: [
        {
          id: 'sec-meta-int-1-1',
          title: 'Standard Event Taxonomy & Parameter Schemas',
          difficulty: 'Intermediate',
          content: `### Passing Structured Conversion Data

Meta standard events require structured parameter payloads to enable dynamic product advertising and value optimization:
- **ViewContent:** Tracks product detail page views. Requires \`content_ids\`, \`content_type\`, \`value\`, and \`currency\`.
- **AddToCart:** Tracks basket additions. Captures intent before checkout.
- **InitiateCheckout:** Tracks when the customer enters the checkout funnel.
- **Purchase:** Fires exclusively on the final order confirmation page. Must include unique transaction identifiers to prevent duplicate counting.`,
          codeSnippets: [
            {
              language: 'javascript',
              filename: 'meta-pixel-ecommerce-snippet.js',
              code: `// Standard Meta Pixel Purchase Tracking Script
fbq('track', 'Purchase', {
  content_type: 'product',
  content_ids: ['SKU_LINEN_DRESS_01', 'SKU_SUNGLASSES_02'],
  num_items: 2,
  value: 85.00,
  currency: 'USD',
  order_id: 'SHOPIFY_ORDER_109841'
});`,
              explanation: 'Standard purchase payload passing order value, items, and unique transaction ID.',
              lineByLine: [
                { line: "fbq('track', 'Purchase', {", explanation: 'Invokes Meta global tracking function for the Purchase event.' },
                { line: "value: 85.00, currency: 'USD'", explanation: 'Essential for calculating ROAS and Purchase Value in Ads Manager.' },
                { line: "order_id: 'SHOPIFY_ORDER_109841'", explanation: 'Unique identifier used for server-side event deduplication.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-1-2',
          title: 'Practical Event Debugging & QA Workflows',
          difficulty: 'Intermediate',
          content: `### Verifying Telemetry with Meta Pixel Helper

Before launching campaigns, you must perform full-funnel quality assurance:
1. **Meta Pixel Helper Extension:** Chrome extension indicating active pixel IDs, event payloads, and execution warnings (e.g. "Missing Currency Parameter").
2. **Test Events Console:** Located in Events Manager. Shows real-time server and browser event streams with payload breakdowns.
3. **Common Warning Resolution:** Ensure \`content_ids\` in your Pixel events match the product IDs in your Meta Product Catalog exactly.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'pixel-qa-checklist.json',
              code: `{
  "qa_verification": {
    "PageView": "Fires on all routes across the domain",
    "ViewContent": "Fires on PDP with valid SKU and currency",
    "AddToCart": "Fires upon click or drawer open without page reload",
    "Purchase": "Fires once on thank-you page with order_id"
  }
}`,
              lineByLine: [
                { line: '\"qa_verification\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"PageView\": \"Fires on all routes across the domain\",', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"ViewContent\": \"Fires on PDP with valid SKU and curren...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"AddToCart\": \"Fires upon click or drawer open without ...', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' }
              ]
            }
          ],
          proTip: 'Never trigger the `Purchase` event on the click of the "Place Order" button! If the customer\'s payment is declined, your pixel will record a false purchase. Always fire `Purchase` only when the server confirms successful payment on the order confirmation route.',
          commonMistakes: [
            'Hardcoding a static $0.00 value on the Purchase event, destroying ROAS reporting.',
            'Failing to verify domain ownership in Meta Business Settings.',
            'Triggering multiple PageView events on single-page app route changes.'
          ]
        },
        {
          id: 'sec-meta-int-1-3',
          title: 'Three Real-World Pixel Architectures',
          difficulty: 'Intermediate',
          content: `### Implementation Case Studies

1. **E-Commerce Purchase Funnel:** Shopify native integration tracking ViewContent → AddToCart → InitiateCheckout → Purchase.
2. **Lead Form Website:** B2B agency firing \`Lead\` when a user submits a contact form with email and company size.
3. **Event Debugging Scenario:** Resolving missing product parameters on an AJAX cart drawer.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'pixel-funnel-scenarios.yaml',
              code: `Scenario_1_Shopify:
  Platform: Shopify Online Store
  Integration: Native Meta App (Pixel + CAPI)
  Events: [PageView, ViewContent, AddToCart, InitiateCheckout, Purchase]

Scenario_2_B2B_LeadGen:
  Platform: Webflow / WordPress
  Integration: Google Tag Manager
  Events: [PageView, Lead, Contact]

Scenario_3_Course_Platform:
  Platform: Custom Next.js App
  Integration: Hybrid Direct Script
  Events: [PageView, ViewContent, CompleteRegistration]`,
              lineByLine: [
                { line: 'Scenario_1_Shopify:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Platform: Shopify Online Store', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Integration: Native Meta App (Pixel + CAPI)', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Events: [PageView, ViewContent, AddToCart, InitiateChecko...', explanation: 'Instructs the Meta machine learning auction engine on target conversion signals.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Meta Pixel passes structured browser telemetry to power algorithmic conversion optimization.',
        'Standard events must include correct parameter schemas (value, currency, content_ids).',
        'Verify tracking using Meta Pixel Helper and the Test Events console prior to spending ad budget.'
      ],
      summary: 'You now understand how the Meta Pixel operates and how to implement and QA standard conversion events.',
      practiceExercises: [
        {
          title: 'Conversion Event Telemetry Map',
          instructions: 'Draft an event measurement map for an e-commerce subscription snack company. Specify event names, trigger URLs/actions, and required payload parameters for all 5 funnel steps.'
        }
      ]
    }
  },
  {
    id: 'meta-int-02',
    orderIndex: 2,
    title: 'Module 2: Conversions API (CAPI)',
    description: 'Understand server-side event streaming, browser + server hybrid architecture, event deduplication with event_id, and Match Quality score optimization.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-02', title: 'Conversions API Developer Documentation', type: 'documentation', url: 'https://developers.facebook.com/docs/marketing-api/conversions-api' }
    ],
    lessonContent: {
      overview: `### The Server-Side Measurement Revolution

Client-side browser tracking faces growing headwinds from iOS privacy policies, browser tracking prevention (ITP), ad blockers, and network disconnects. **Meta Conversions API (CAPI)** establishes a direct, secure server-to-server connection between your web server and Meta's servers.

In this module, you will master the hybrid measurement architecture, learn how browser and server events are seamlessly deduplicated using \`event_id\`, and optimize your Event Quality Match score.`,
      analogyHero: 'Think of browser Pixel tracking as sending a postcard through regular mail—sometimes it gets lost in the rain (ad blockers). Conversions API is like sending a secure, encrypted courier package directly to Meta headquarters. Combining both ensures your message always arrives.',
      objectives: [
        'Understand why server-side event transmission is essential for modern measurement.',
        'Master the Hybrid (Browser + Server) tracking architecture.',
        'Implement event deduplication using matching event_name and event_id parameters.',
        'Maximize Event Quality Match scores with hashed customer parameters (fbp, fbc, email, phone).'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-int-2-1',
          title: 'Hybrid Architecture & Event Deduplication Mechanics',
          difficulty: 'Intermediate',
          content: `### How Meta Deduplicates Simultaneous Events

When both the browser Pixel and server Conversions API fire for the same action (e.g. a customer buying a jacket), Meta must not count two purchases. Meta deduplicates events by comparing:
1. **Event Name:** (e.g. \`Purchase\`).
2. **Event ID:** A unique string generated on the server (e.g. \`order_98412_timestamp_171000\`) passed identically in both the client \`fbq('track')\` call and the server CAPI POST payload.

If Meta receives matching \`event_id\` values within 48 hours, it combines them into a single high-fidelity event!`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'capi-payload-schema.json',
              code: `{
  "data": [
    {
      "event_name": "Purchase",
      "event_time": 1773356400,
      "event_id": "order_109841",
      "action_source": "website",
      "user_data": {
        "em": ["f660ab912ec121d1b1e928a0bb4bc61b15f5ad44d5efdc4e1c92a25e99b8e44a"],
        "ph": ["9b72049d564177d61184a7536b28f80453d4eb0760432c25ec510f274643c162"],
        "client_ip_address": "198.51.100.42",
        "client_user_agent": "Mozilla/5.0...",
        "fbp": "fb.1.171000.9841029",
        "fbc": "fb.1.171000.IwAR109841092"
      },
      "custom_data": {
        "currency": "USD",
        "value": 85.00
      }
    }
  ]
}`,
              explanation: 'Server-side CAPI JSON payload with SHA-256 hashed user parameters.',
              lineByLine: [
                { line: '"event_id": "order_109841"', explanation: 'Must match client pixel event_id exactly for deduplication.' },
                { line: '"em": ["f660ab9..."]', explanation: 'SHA-256 hashed customer email for identity resolution.' },
                { line: '"fbp", "fbc"', explanation: 'First-party browser cookie IDs improving attribution accuracy.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-2-2',
          title: 'Event Match Quality (EMQ) Optimization',
          difficulty: 'Intermediate',
          content: `### Elevating Match Rates for Better Attribution

Meta assigns an **Event Match Quality (EMQ)** score from 1 to 10 based on the customer parameters passed with each event:
- **Low Match Quality (1–4):** Only passing IP address and User Agent.
- **Good Match Quality (5–7):** Passing hashed Email, Phone number, and \`_fbp\` browser cookie.
- **Elite Match Quality (8–10):** Passing hashed Email, Phone, First Name, Last Name, City, State, Zip, Country, \`_fbp\`, and \`_fbc\` click ID. Higher EMQ directly lowers your reported CPA by matching more conversions back to ads!`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'emq-improvement-guide.yaml',
              code: `EMQ_Target_Parameters:
  Hashed_Email: "sha256(lowercase(trim(user.email)))"
  Hashed_Phone: "sha256(digits_only_with_country_code(user.phone))"
  Browser_Cookies:
    _fbp: "Stored first-party cookie identifying browser"
    _fbc: "Captured fbclid query parameter from ad click"
  Result: "EMQ score increases from 4.2 to 8.8 / 10"`,
              lineByLine: [
                { line: 'EMQ_Target_Parameters:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Hashed_Email: \"sha256(lowercase(trim(user.email)))\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Hashed_Phone: \"sha256(digits_only_with_country_code(user...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Browser_Cookies:', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Always normalize user data before hashing! Convert emails to lowercase and strip whitespace before applying SHA-256. For phone numbers, remove all hyphens, parentheses, and spaces, and include the international country code.',
          commonMistakes: [
            'Sending server events without an `event_id`, causing Meta to count purchases twice and display artificially inflated 2x ROAS.',
            'Sending raw, unhashed plaintext emails in the CAPI payload, violating privacy standards and causing API rejections.',
            'Failing to pass `_fbp` and `_fbc` parameters from cookies.'
          ]
        },
        {
          id: 'sec-meta-int-2-3',
          title: 'Three Real-World CAPI Implementations',
          difficulty: 'Intermediate',
          content: `### Production Architecture Scenarios

1. **Shopify Store with Meta CAPI:** Automatic server-side integration sending deduplicated Purchase events with 8.5+ EMQ.
2. **Custom Lead Generation CAPI:** Backend NodeJS webhook sending qualified lead completions to Meta when prospects finish CRM intake.
3. **Diagnosing Duplicate Conversions:** Identifying mismatched event IDs between Google Tag Manager and backend webhooks.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'capi-production-scenarios.yaml',
              code: `Case_1_Shopify_CAPI:
  Method: Shopify Meta App
  Deduplication: Native automatic order_id matching
  Match_Score: "8.5 / 10"

Case_2_CRM_Lead_Webhook:
  Method: Node.js AWS Lambda
  Deduplication: Lead UUID generated at form submission
  Match_Score: "9.1 / 10"`,
              lineByLine: [
                { line: 'Case_1_Shopify_CAPI:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Method: Shopify Meta App', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Deduplication: Native automatic order_id matching', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Match_Score: \"8.5 / 10\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Conversions API (CAPI) sends server-side conversion telemetry to bypass browser ad blockers.',
        'Hybrid setups require matching `event_name` and `event_id` to ensure proper deduplication.',
        'Higher Event Match Quality (EMQ) directly improves ad attribution and lowers CPA.'
      ],
      summary: 'You now know how Conversions API operates and how to implement hybrid browser/server tracking with event deduplication.',
      practiceExercises: [
        {
          title: 'CAPI Architecture Diagram Challenge',
          instructions: 'Diagram a complete client-server event flow for a purchase transaction, showing how the client browser and backend server generate matching event_ids and transmit payloads to Meta.'
        }
      ]
    }
  },
  {
    id: 'meta-int-03',
    orderIndex: 3,
    title: 'Module 3: Events and Conversion Measurement',
    description: 'Master conversion event mapping, micro vs macro conversions, attribution windows (7-day click, 1-day view), and conversion funnel auditing.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-03', title: 'Meta Conversion Optimization Guide', type: 'documentation', url: 'https://www.facebook.com/business/help/898185560232180' }
    ],
    lessonContent: {
      overview: `### Designing High-Converting Event Funnels

Not all conversion events carry equal weight. In high-performance media buying, advertisers distinguish between **Macro Conversions** (direct commercial milestones like Completed Purchases or Signed Contracts) and **Micro Conversions** (step-by-step signals like Product Views, Cart Additions, or Newsletter Subscriptions).

In this module, you will learn how to map conversion funnels, choose optimization events based on volume thresholds, configure attribution windows, and troubleshoot broken tracking pipelines.`,
      analogyHero: 'Think of a conversion funnel like climbing a ladder. The Macro conversion is stepping onto the roof (buying the product). The Micro conversions are the individual rungs (viewing the product, adding to cart, starting checkout). You need solid rungs to reach the roof.',
      objectives: [
        'Distinguish between Micro Conversions and Macro Conversions.',
        'Understand Meta Attribution Windows: 7-day click, 1-day click, and 1-day view.',
        'Select optimal conversion events based on the 50-event weekly machine learning threshold.',
        'Audit and diagnose conversion funnel drop-offs.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-int-3-1',
          title: 'Micro vs Macro Conversions & Optimization Selection',
          difficulty: 'Intermediate',
          content: `### When to Optimize for Purchases vs Up-Funnel Events

Meta AI requires approximately **50 conversion events per ad set per week** to exit the learning phase and achieve stable pricing:
- **High-Volume Store (> 50 Purchases/Week):** Optimize directly for **Purchase** (Macro).
- **Low-Volume / High-Ticket Store (< 20 Purchases/Week):** If your product costs $1,500 and you only get 5 sales a week, Meta cannot calibrate on Purchase. Temporarily optimize for **InitiateCheckout** or **AddToCart** (Micro) where volume exceeds 50 events/week.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'conversion-selection-rules.yaml',
              code: `Optimization_Event_Decision_Rules:
  Rule_1_High_Volume:
    Weekly_Purchases: ">= 50"
    Selected_Optimization: "Purchase (Macro)"
    Rationale: "Direct revenue optimization with optimal ML calibration"

  Rule_2_Low_Volume_High_Ticket:
    Weekly_Purchases: "< 20"
    Weekly_Add_To_Carts: ">= 75"
    Selected_Optimization: "AddToCart (Micro)"
    Rationale: "Provides necessary event density for auction algorithm stability"`,
              lineByLine: [
                { line: 'Optimization_Event_Decision_Rules:', explanation: 'Instructs the Meta machine learning auction engine on target conversion signals.' },
                { line: 'Rule_1_High_Volume:', explanation: 'Establishes automated guardrails and execution rules to protect account stability.' },
                { line: 'Weekly_Purchases: \">= 50\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Selected_Optimization: \"Purchase (Macro)\"', explanation: 'Instructs the Meta machine learning auction engine on target conversion signals.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-3-2',
          title: 'Attribution Windows: 7-Day Click vs 1-Day View',
          difficulty: 'Intermediate',
          content: `### How Meta Credits Conversions to Ads

An **Attribution Setting** determines the timeframe during which Meta claims credit for a conversion after a user interacted with your ad:
- **7-Day Click or 1-Day View (Default):** Meta counts a purchase if a user clicked your ad and bought within 7 days, OR if they saw your ad (without clicking) and bought within 24 hours.
- **1-Day Click:** Strict attribution. Only counts purchases occurring within 24 hours of clicking. Useful for low-cost impulse buys and conservative reporting.
- **View-Through Attribution Considerations:** View-through attribution credits users who merely scrolled past your ad. While real, high-consideration brands often analyze click-only attribution to evaluate true direct response.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'attribution-window-comparison.json',
              code: `{
  "attribution_models": {
    "7_day_click_1_day_view": {
      "best_for": "Standard e-commerce & multi-touch consideration funnels",
      "reported_roas": 3.8,
      "includes_view_through": true
    },
    "1_day_click_only": {
      "best_for": "Conservative cash-flow analysis & impulse purchases",
      "reported_roas": 2.6,
      "includes_view_through": false
    }
  }
}`,
              lineByLine: [
                { line: '\"attribution_models\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"7_day_click_1_day_view\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"best_for\": \"Standard e-commerce & multi-touch conside...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"reported_roas\": 3.8,', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'When comparing Meta Ads Manager revenue with Google Analytics or Shopify Analytics, remember that Meta uses multi-day attribution and counts view-through conversions, whereas Google Analytics often defaults to Last-Non-Direct-Click. Expect Meta-reported revenue to be 15%–30% higher than last-click analytics.',
          commonMistakes: [
            'Optimizing for AddToCart when you already have 200 purchases a week, generating cart hoarders who don\'t buy.',
            'Comparing 1-day click reporting from yesterday against a 7-day click historical benchmark.',
            'Ignoring micro-conversion drop-off ratios between AddToCart and InitiateCheckout.'
          ]
        },
        {
          id: 'sec-meta-int-3-3',
          title: 'Three Conversion Funnel Case Studies',
          difficulty: 'Intermediate',
          content: `### Real-World Funnel Architectures

1. **Shopify E-Commerce Store:** Tracking 1,000 PageViews → 120 ViewContents → 45 AddToCarts → 25 InitiateCheckouts → 18 Purchases.
2. **B2B SaaS Lead Funnel:** Tracking Landing Page View → Free Trial Click → Registration Complete → Paid Subscription.
3. **High-Ticket Course:** Webinar Registration → 50% Video Watch → Application Submitted → Enrollment Fee Paid.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'funnel-case-studies.yaml',
              code: `Ecommerce_Funnel:
  PageView_To_ViewContent: "12% transition"
  ViewContent_To_AddToCart: "37.5% transition"
  AddToCart_To_Purchase: "40.0% transition (Strong)"
SaaS_Funnel:
  Visit_To_Trial: "8.5% transition"
  Trial_To_Paid: "14.2% transition"`,
              lineByLine: [
                { line: 'Ecommerce_Funnel:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'PageView_To_ViewContent: \"12% transition\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'ViewContent_To_AddToCart: \"37.5% transition\"', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'AddToCart_To_Purchase: \"40.0% transition (Strong)\"', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Aim for ~50 conversions per ad set per week for optimal machine learning performance.',
        'Understand your attribution window (7-day click / 1-day view vs 1-day click).',
        'Monitor micro-conversion drop-off ratios to identify on-site friction points.'
      ],
      summary: 'You now know how to map conversion funnels and configure attribution settings effectively.',
      practiceExercises: [
        {
          title: 'Full-Funnel Conversion Audit',
          instructions: 'Analyze a funnel dataset with 10,000 visitors, 800 product views, 300 cart additions, 20 checkouts, and 18 purchases. Identify the exact stage where friction is highest and propose 2 conversion rate optimization solutions.'
        }
      ]
    }
  },
  {
    id: 'meta-int-04',
    orderIndex: 4,
    title: 'Module 4: Advanced Audience Strategy',
    description: 'Structure sophisticated audience matrices, customer lifetime value segmentation, recency decay windows, audience overlap auditing, and layered targeting.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-04', title: 'Advanced Audience Segmentation Guide', type: 'article', url: 'https://www.facebook.com/business/help/162849102948102' }
    ],
    lessonContent: {
      overview: `### Enterprise-Grade Audience Architecture

Basic media buyers run one broad ad set and hope for the best. Advanced media buyers construct complete **Audience Matrices** that systematically map user intent, customer lifetime value (LTV), and recency windows across the entire brand ecosystem.

In this module, you will learn to segment audiences by purchasing power, build exclusion matrices, test layered interest clusters, and prevent audience cannibalization.`,
      analogyHero: 'Think of audience strategy like managing a premier hotel. First-time passersby get an invitation to the lobby lounge (prospecting). Previous guests get personal concierge perks (retargeting). VIP suite holders get private penthouse upgrades (LTV retention). You never treat all three groups the same.',
      objectives: [
        'Build a multi-dimensional Audience Matrix spanning Cold, Warm, Hot, and VIP tiers.',
        'Segment past customers by Purchase Frequency and Lifetime Value (LTV).',
        'Construct airtight exclusion matrices to prevent campaign cannibalization.',
        'Deploy layered targeting frameworks for niche high-value products.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-int-4-1',
          title: 'The 4-Tier Audience Temperature Matrix',
          difficulty: 'Intermediate',
          content: `### Categorizing Audiences by Commercial Intent

1. **Cold Prospecting (Top-of-Funnel - TOFU):**
   * *Broad (No interests, open demographic)*
   * *1%–3% Top-LTV Purchaser Lookalikes*
   * *Curated Interest Stacks (e.g. Eco-Living + Organic Fashion)*
2. **Warm Engagement (Middle-of-Funnel - MOFU):**
   * *Instagram & Facebook 90-Day Engagers*
   * *Video Viewers (50%+ watch time on 9:16 Reels)*
3. **Hot Bottom-of-Funnel (BOFU):**
   * *Website Visitors (30D)*
   * *Product Viewers & Cart Abandoners (7D)*
4. **VIP Retention / LTV Expansion (Existing Customers):**
   * *Past Purchasers (30–180D) for cross-sells and new collection launches.*`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'four-tier-audience-matrix.yaml',
              code: `Audience_Matrix_Structure:
  TOFU_Cold:
    Budget_Share: 70%
    Targeting: Broad US W21-50 + LAL 1% Purchasers
    Exclusions: All Website Visitors 30D + Past Purchasers 180D
  MOFU_Warm:
    Budget_Share: 10%
    Targeting: IG/FB Engagers 60D + Video 75% 30D
    Exclusions: Cart Abandoners 14D + Past Purchasers 180D
  BOFU_Hot:
    Budget_Share: 15%
    Targeting: AddToCart 7D + ViewContent 14D
    Exclusions: Past Purchasers 30D
  Retention_VIP:
    Budget_Share: 5%
    Targeting: Past Purchasers 30-180D
    Exclusions: Purchasers in last 7 days`,
              lineByLine: [
                { line: 'Audience_Matrix_Structure:', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'TOFU_Cold:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Budget_Share: 70%', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Targeting: Broad US W21-50 + LAL 1% Purchasers', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-4-2',
          title: 'Airtight Exclusion Matrices and Overlap Control',
          difficulty: 'Intermediate',
          content: `### Guaranteeing Zero Audience Contamination

To ensure cold prospecting campaigns are acquiring **100% net-new customers**, you must apply strict exclusion rules:
- In TOFU Prospecting: Exclude Website Visitors (180D), Customer Email List, and IG Engagers (30D).
- In MOFU Warm: Exclude Cart Abandoners (14D) and Past Purchasers.
- In BOFU Retargeting: Exclude Past Purchasers (30D).

*Result:* Every dollar spent is directed toward users at their exact stage of awareness.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'exclusion-rules-config.json',
              code: `{
  "exclusion_matrix": {
    "TOFU_Campaign": {
      "includes": ["US_Broad_W25-50"],
      "excludes": ["CustomAud_WebVisitors_180D", "CustomAud_CustomerList_All", "CustomAud_IG_Engagers_60D"]
    },
    "BOFU_Campaign": {
      "includes": ["CustomAud_AddToCart_7D"],
      "excludes": ["CustomAud_Purchasers_30D"]
    }
  }
}`,
              lineByLine: [
                { line: '\"exclusion_matrix\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"TOFU_Campaign\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"includes\": [\"US_Broad_W25-50\"],', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"excludes\": [\"CustomAud_WebVisitors_180D\", \"CustomAu...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'When building Lookalikes from customer CSV lists, segment your customers into tiers (e.g. Top 20% LTV vs 1-time discount buyers). A 1% Lookalike of your top 1,000 customers who spent $300+ will outperform a Lookalike of all 10,000 customers by a wide margin.',
          commonMistakes: [
            'Running cold prospecting without excluding existing customers, leading to easy but misleading high ROAS on people who would have bought anyway.',
            'Targeting 15 micro-interest ad sets simultaneously, causing severe audience overlap.',
            'Setting retargeting audience windows to 180 days with identical ad creative.'
          ]
        },
        {
          id: 'sec-meta-int-4-3',
          title: 'Three Production Audience Matrices',
          difficulty: 'Intermediate',
          content: `### Real-World Strategic Matrices

1. **Fashion DTC Store:** 70% Broad Prospecting, 20% Cart Retargeting, 10% VIP LTV Cross-Sell.
2. **B2B SaaS Lead Funnel:** 60% Job Title / Software Interest, 25% Free Trial Abandoners, 15% Demo Video Viewers.
3. **Local Medical Clinic:** 80% Geofenced 10-mile radius Broad, 20% Lead Form Re-engagement.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'production-audience-plans.yaml',
              code: `DTC_Fashion_Split:
  TOFU: "$140/day (Broad + LAL)"
  MOFU: "$20/day (Social Engagers)"
  BOFU: "$30/day (Cart 7D)"
  VIP:  "$10/day (Repeat Buyers)"`,
              lineByLine: [
                { line: 'DTC_Fashion_Split:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'TOFU: \"$140/day (Broad + LAL)\"', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'MOFU: \"$20/day (Social Engagers)\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'BOFU: \"$30/day (Cart 7D)\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Organize your account into a 4-tier audience matrix (TOFU, MOFU, BOFU, VIP).',
        'Use strict exclusions to guarantee clean separation between prospecting and retargeting.',
        'Segment customer lists by Lifetime Value (LTV) to generate high-fidelity lookalikes.'
      ],
      summary: 'You now know how to build advanced audience matrices with clean exclusion controls.',
      practiceExercises: [
        {
          title: 'Enterprise Audience Matrix Design',
          instructions: 'Build a complete 4-tier audience matrix for a luxury watch brand ($800 AOV), detailing exact targeting parameters, audience sizes, budget allocation percentages, and exclusion rules for each tier.'
        }
      ]
    }
  },
  {
    id: 'meta-int-05',
    orderIndex: 5,
    title: 'Module 5: Retargeting Funnels',
    description: 'Engineer high-converting multi-stage retargeting funnels, dynamic catalog remarketing, message sequencing, social proof injection, and objection handling.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-05', title: 'Sequential Retargeting Blueprint', type: 'article', url: 'https://www.facebook.com/business/help/149810294102948' }
    ],
    lessonContent: {
      overview: `### The Psychology of High-Converting Retargeting

Showing the exact same prospecting ad to someone who already visited your website 5 times is lazy and inefficient. Warm prospects do not need another brand introduction—they need specific objections answered, social proof, reassurance regarding shipping or returns, or a timely discount to close the deal.

In this module, you will learn how to build time-decay sequential retargeting funnels, deploy Dynamic Product Retargeting (DPA), and craft message sequences that systematically overcome hesitation.`,
      analogyHero: 'Think of retargeting like an expert retail salesperson closing a deal. In minute 1, they show the product. In minute 5, they highlight the 10-year warranty. In minute 10, they offer free gift wrapping. Each step addresses the buyer\'s evolving mindset.',
      objectives: [
        'Master the psychology of warm and hot prospective buyers.',
        'Design 3-stage time-decay retargeting sequences (1-3 days, 4-7 days, 8-14 days).',
        'Deploy Dynamic Product Ads (DPA) to show visitors the exact items left in their cart.',
        'Inject customer testimonials, unboxings, and FAQ objection handlers.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-int-5-1',
          title: 'Time-Decay Retargeting Sequence Framework',
          difficulty: 'Intermediate',
          content: `### Structuring Ads by Visitor Recency

- **Window 1: Days 1–3 (Urgency & Cart Recovery):**
  * *Audience:* AddToCart & InitiateCheckout (1–3D).
  * *Psychology:* Highly engaged; got distracted before finishing checkout.
  * *Creative:* Dynamic Product Carousel with copy: "Did you forget something? Your cart is reserved for a limited time."
- **Window 2: Days 4–7 (Social Proof & Objection Handling):**
  * *Audience:* ViewContent & Product Viewers (4–7D).
  * *Psychology:* Interested but evaluating alternatives or doubting quality.
  * *Creative:* UGC video testimonial showing real customer results + Press mentions + 100% money-back guarantee badge.
- **Window 3: Days 8–14 (Incentive & Closing Offer):**
  * *Audience:* Engaged Website Visitors (8–14D).
  * *Psychology:* Going cold; needs a financial nudge.
  * *Creative:* Bold discount graphic: "Take an extra 10% off your first order with code WELCOME10."`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'retargeting-sequence-plan.yaml',
              code: `Retargeting_3_Stage_Architecture:
  Stage_1_Days_1_3:
    Targeting: "AddToCart (1-3D) EXCLUDE Purchase (30D)"
    Angle: "Cart Reminder + Free Express Shipping"
    Format: "Dynamic Product Carousel"
  Stage_2_Days_4_7:
    Targeting: "ViewContent (4-7D) EXCLUDE AddToCart (7D)"
    Angle: "5-Star Reviews + Founder Guarantee"
    Format: "UGC Video Testimonial"
  Stage_3_Days_8_14:
    Targeting: "All Visitors (8-14D) EXCLUDE AddToCart (14D)"
    Angle: "Limited 10% Discount Code"
    Format: "High-Contrast Offer Image"`,
              lineByLine: [
                { line: 'Retargeting_3_Stage_Architecture:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Stage_1_Days_1_3:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Targeting: \"AddToCart (1-3D) EXCLUDE Purchase (30D)\"', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'Angle: \"Cart Reminder + Free Express Shipping\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-5-2',
          title: 'Dynamic Product Ads (DPA) for Catalog Retargeting',
          difficulty: 'Intermediate',
          content: `### Automated 1-to-1 Product Remarketing

Dynamic Product Ads automatically pull images, titles, and live prices from your catalog feed to show users the exact products they viewed on your website:
- **Viewed or Added to Cart but Not Purchased:** Meta dynamically populates the carousel with items the user browsed.
- **Cross-Sell / Upsell:** Show complementary accessories (e.g. show phone cases to users who purchased a smartphone last week).`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'dpa-retargeting-rules.json',
              code: `{
  "dpa_retargeting_config": {
    "catalog_id": "90841029410",
    "retargeting_type": "Viewed_Or_Added_To_Cart_Not_Purchased",
    "retention_window_days": 7,
    "dynamic_template": {
      "headline": "{{product.name}} - {{product.price}}",
      "primary_text": "Still thinking it over? Complete your order today and enjoy free 2-day delivery.",
      "cta": "Shop Now"
    }
  }
}`,
              lineByLine: [
                { line: '\"dpa_retargeting_config\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"catalog_id\": \"90841029410\",', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"retargeting_type\": \"Viewed_Or_Added_To_Cart_Not_Purch...', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: '\"retention_window_days\": 7,', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Keep retargeting frequency between 3.0 and 6.0 per week. If frequency exceeds 8.0, your audience will feel stalked, negative feedback will rise, and CPMs will spike. If frequency gets too high, reduce the retargeting daily budget.',
          commonMistakes: [
            'Offering a 20% discount on Day 1 to cart abandoners, training your customers to abandon carts on purpose to get coupons.',
            'Failing to exclude recent purchasers, annoying paying customers with discount ads.',
            'Spending 50% of your total budget on retargeting when daily website traffic is under 200 visitors.'
          ]
        },
        {
          id: 'sec-meta-int-5-3',
          title: 'Three Production Retargeting Scenarios',
          difficulty: 'Intermediate',
          content: `### Real-World Retargeting Workflows

1. **7-Day Product Viewer:** Skincare brand retargeting serum viewers with a dermatologist video review.
2. **Cart Abandoner:** Fashion store retargeting cart abandoners with a dynamic carousel highlighting 30-day free returns.
3. **Existing B2B Lead:** Consulting firm retargeting webinar attendees with a case study PDF.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'retargeting-case-scenarios.yaml',
              code: `Case_1_ProductViewer:
  Audience: "ViewContent (7D)"
  Creative: "Dermatologist Review Video"
Case_2_CartAbandoner:
  Audience: "AddToCart (3D)"
  Creative: "Dynamic Carousel + Free Returns"
Case_3_B2B_Lead:
  Audience: "Lead Form Opened (14D)"
  Creative: "Client ROI Case Study"`,
              lineByLine: [
                { line: 'Case_1_ProductViewer:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Audience: \"ViewContent (7D)\"', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'Creative: \"Dermatologist Review Video\"', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Case_2_CartAbandoner:', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Structure retargeting into time-decay windows (1-3 days = urgency, 4-7 days = social proof, 8-14 days = offer).',
        'Use Dynamic Product Ads (DPA) to show users the exact products they browsed.',
        'Monitor retargeting frequency to avoid ad fatigue and negative user feedback.'
      ],
      summary: 'You now know how to engineer sophisticated, multi-stage retargeting funnels.',
      practiceExercises: [
        {
          title: '3-Stage Retargeting Sequence Blueprint',
          instructions: 'Write the complete copy, creative specs, and targeting rules for a 3-stage retargeting funnel for an electric skateboard company ($699 price point).'
        }
      ]
    }
  },
  {
    id: 'meta-int-06',
    orderIndex: 6,
    title: 'Module 6: Creative Testing',
    description: 'Deploy systematic creative testing frameworks, isolate visual hooks and formats, test angles, and identify scalable winner creatives.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-06', title: 'Creative Testing Framework Guide', type: 'article', url: 'https://www.facebook.com/business/help/109849201928' }
    ],
    lessonContent: {
      overview: `### The Scientific Method in Creative Testing

Randomly uploading 10 ads into a live campaign and hoping one works is gambling, not media buying. Elite performance marketers operate a rigorous **Creative Testing Pipeline** that isolates variables (hooks, visual formats, copy angles, offers) to identify statistically validated winner ads.

In this module, you will master the 3:2:2 Dynamic Creative testing model, build 9-ad creative matrices, and establish definitive criteria for graduating winners into your main scaling campaigns.`,
      analogyHero: 'Think of creative testing like a pharmaceutical clinical trial. You don\'t mix 10 experimental drugs together in one beaker. You test one specific compound against a controlled group to measure its exact therapeutic effect.',
      objectives: [
        'Deploy the 3:2:2 Dynamic Creative Testing (DCT) framework (3 Creatives, 2 Primary Texts, 2 Headlines).',
        'Isolate single testing variables: Hook Testing vs Format Testing vs Angle Testing.',
        'Establish mathematical criteria for declaring a creative a "Winner" vs a "Loser".',
        'Build a scalable 9-ad creative matrix for systematic weekly iteration.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-int-6-1',
          title: 'The 3:2:2 Dynamic Creative Testing Framework',
          difficulty: 'Intermediate',
          content: `### How to Execute DCT in an ABO Testing Sandbox

The **3:2:2 Dynamic Creative Testing (DCT)** method is the industry standard for low-cost, high-velocity creative R&D:
- **Setup:** 1 ABO Campaign ($30–$50/day) targeting a Broad audience.
- **Assets inside the DCT Ad Set:**
  * **3 Creatives:** 3 distinct video hooks or visual concepts (e.g. Hook A: "Tired of X?", Hook B: "The secret to Y", Hook C: "Unboxing demonstration").
  * **2 Primary Texts:** 1 PAS Pain-Point copy + 1 Benefit/Social Proof copy.
  * **2 Headlines:** 1 Offer-driven + 1 Review/Rating-driven.
- **Execution:** Meta machine learning dynamically tests all 12 combinations and allocates budget to the top-converting combination.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'dct-3-2-2-specification.yaml',
              code: `DCT_AdSet_Specification:
  Campaign_Type: "ABO Testing Sandbox"
  Budget: "$40.00/day"
  Audience: "US, Broad (All Genders, 21-55)"
  Dynamic_Creative_Payload:
    Creatives:
      - Video_1: "Hook_Curiosity_SplitScreen.mp4"
      - Video_2: "Hook_RelatablePain_UGC.mp4"
      - Video_3: "Hook_ExtremeDemo_StressTest.mp4"
    Primary_Texts:
      - Copy_1: "Struggling with winter skin? Here is why conventional lotions fail..."
      - Copy_2: "Over 50,000 customers switched to our ceramide formula..."
    Headlines:
      - Headline_1: "Get 20% Off Your First Order"
      - Headline_2: "⭐ 4.9/5 Rating (50k+ Reviews)"`,
              lineByLine: [
                { line: 'DCT_AdSet_Specification:', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Campaign_Type: \"ABO Testing Sandbox\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Budget: \"$40.00/day\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Audience: \"US, Broad (All Genders, 21-55)\"', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-6-2',
          title: 'Winner Graduation Criteria & Performance Thresholds',
          difficulty: 'Intermediate',
          content: `### When is a Creative Declared a Winner?

Do not graduate creatives based on a single lucky purchase. A creative is a validated **Winner** only when it meets all 3 criteria:
1. **Spend Validation:** Spent at least 2x to 3x your Target CPA.
2. **Efficiency Validation:** Achieved a CPA at or below Target CPA (e.g. CPA <= $20.00 on a $60 product).
3. **Engagement Validation:** Outbound Link CTR >= 1.8% and Hook Rate (3-sec video views / Impressions) >= 30%.

*Graduation Protocol:* Export the winning Post ID and import it into your high-budget CBO Scaling Campaign to preserve all accumulated social proof (likes, comments, shares).`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'creative-decision-matrix.json',
              code: `{
  "evaluation_rules": {
    "WINNER": {
      "criteria": "Spend > $50, CPA <= $20, ROAS >= 3.0x, CTR >= 1.8%",
      "action": "Graduate Post ID to Main CBO Scaling Campaign"
    },
    "POTENTIAL": {
      "criteria": "Spend > $30, CTR >= 2.5%, High AddToCart, 0 Purchases",
      "action": "Allow to spend up to 2x Target CPA before pausing"
    },
    "LOSER": {
      "criteria": "Spend > $40 (2x Target CPA) with 0 purchases and CTR < 1.0%",
      "action": "Pause immediately; iterate hook angle"
    }
  }
}`,
              lineByLine: [
                { line: '\"evaluation_rules\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"WINNER\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"criteria\": \"Spend > $50, CPA <= $20, ROAS >= 3.0x, CT...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: '\"action\": \"Graduate Post ID to Main CBO Scaling Campai...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'When moving a winning ad from a testing campaign to your scaling campaign, never recreate the ad from scratch! Always copy the existing **Post ID** (found via Page Posts in Ads Manager). This preserves all accumulated customer reviews, likes, and comments, which significantly improves auction relevance.',
          commonMistakes: [
            'Declaring an ad a "winner" after $10 spend and 1 purchase, then watching it fail when scaled.',
            'Testing 10 variables simultaneously without knowing whether the video, copy, or headline caused the result.',
            'Pausing ads after only 12 hours before Meta algorithm has delivered impressions across all daytime hours.'
          ]
        },
        {
          id: 'sec-meta-int-6-3',
          title: 'Three Creative Testing Matrix Case Studies',
          difficulty: 'Intermediate',
          content: `### Real-World Testing Iterations

1. **Three Hooks, Same Offer:** Testing Question Hook vs Shocking Stat Hook vs Split-screen Demo Hook for a kitchen gadget.
2. **Three Formats, Same Message:** Testing 9:16 Video vs 1:1 Static Graphic vs 1:1 Carousel for a footwear brand.
3. **Three Messages, Same Product:** Testing Pain Relief vs Aesthetic Upgrade vs Cost Savings for an ergonomic chair.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'creative-test-iterations.yaml',
              code: `Test_1_Hook_Isolation:
  Control: "Same product, same copy, same offer"
  Variable: "3-second opening hook visual"
Test_2_Format_Isolation:
  Control: "Same messaging and value proposition"
  Variable: "Reel Video vs Carousel vs Static Image"
Test_3_Angle_Isolation:
  Control: "Same video format"
  Variable: "Pain Relief vs Status/Aesthetics vs Economy"`,
              lineByLine: [
                { line: 'Test_1_Hook_Isolation:', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Control: \"Same product, same copy, same offer\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Variable: \"3-second opening hook visual\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Test_2_Format_Isolation:', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Use the 3:2:2 Dynamic Creative Testing framework in an ABO sandbox to isolate variables.',
        'Validate winners with spend thresholds ($2-3x$ Target CPA) and CTR/CPA benchmarks.',
        'Use Post IDs when graduating winners to scaling campaigns to preserve social proof.'
      ],
      summary: 'You now know how to operate a scientific creative testing pipeline.',
      practiceExercises: [
        {
          title: '9-Ad Creative Testing Matrix',
          instructions: 'Build a 9-ad testing matrix for an eco-friendly laundry detergent sheet brand, detailing 3 distinct visual hooks, 3 copy angles, and 3 headline variations.'
        }
      ]
    }
  },
  {
    id: 'meta-int-07',
    orderIndex: 7,
    title: 'Module 7: Audience Testing and Experimentation',
    description: 'Design controlled A/B audience experiments, test Lookalike tiers against Broad, maintain budget consistency, and evaluate statistical significance.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-07', title: 'Meta A/B Testing & Experiments Tool', type: 'documentation', url: 'https://www.facebook.com/business/help/173819401928341' }
    ],
    lessonContent: {
      overview: `### Rigorous Scientific Experimentation in Media Buying

Testing audiences requires controlled experimental design. If you test Audience A with Video 1 and Audience B with Image 2, you cannot know whether Audience A won because of the audience or because Video 1 was superior.

In this module, you will learn how to set up controlled audience experiments using identical creative controls, equalized ABO budgets, and statistical significance criteria.`,
      analogyHero: 'Think of an audience test like a car race on a track. To test which driver (audience) is best, all drivers must race in the exact same model car with identical fuel and track conditions (identical creative, copy, and budget).',
      objectives: [
        'Design controlled audience experiments holding ad creative constant.',
        'Compare Broad Targeting vs 1% Lookalikes vs Interest Stacks.',
        'Enforce statistical significance rules before drawing conclusions.',
        'Interpret failed tests constructively to inform future creative strategies.'
      ],
      estimatedTime: '30 mins',
      sections: [
        {
          id: 'sec-meta-7-1-int',
          title: 'Controlled Audience Experiment Architecture',
          difficulty: 'Intermediate',
          content: `### Setting Up an Unbiased Audience A/B Test

To run a scientifically valid audience test:
1. **Equal Budget Allocation:** Use an ABO campaign with equal daily budgets across all test ad sets (e.g. $25/day per ad set).
2. **Identical Creative Control:** Place the exact same 2–3 proven Post IDs into every test ad set.
3. **Strict Non-Overlapping Audiences:**
   * *Ad Set A:* Broad (US, 25–54, No Interests).
   * *Ad Set B:* 1% Purchaser Lookalike.
   * *Ad Set C:* Curated Interest Stack (e.g. 3 high-affinity industry interests).
4. **Test Duration:** Run for a minimum of 4–7 full days to account for day-of-week conversion fluctuations.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'controlled-audience-test-setup.yaml',
              code: `Experiment_Configuration:
  Campaign_Type: "ABO Testing Campaign"
  Budget_Per_AdSet: "$30.00/day"
  Ad_Creative_Control: "Post_ID_908412_UGC_Winner (Identical across all ad sets)"
  Test_AdSets:
    - Name: "Audience_1_Broad_US"
      Targeting: "US, All Genders, 21-50, No Interests"
    - Name: "Audience_2_LAL_1pct_Purchasers"
      Targeting: "US, 1% Lookalike of 180D Purchasers"
    - Name: "Audience_3_Interest_Stacked"
      Targeting: "US, Interests: [Fitness, Gym, Healthy Diet]"`,
              lineByLine: [
                { line: 'Experiment_Configuration:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Campaign_Type: \"ABO Testing Campaign\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Budget_Per_AdSet: \"$30.00/day\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Ad_Creative_Control: \"Post_ID_908412_UGC_Winner (Identic...', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-7-2-int',
          title: 'Statistical Significance & Interpreting Results',
          difficulty: 'Intermediate',
          content: `### Avoiding False Winners from Small Sample Sizes

A common beginner mistake is stopping a test after 1 day because Ad Set B got 2 sales and Ad Set A got 0 sales. That is random noise, not statistical proof!
- **Minimum Data Thresholds:** An ad set must accumulate at least **15–20 conversions** before you can confidently compare CPAs.
- **Evaluating Secondary Metrics:** If purchase counts are close, compare AddToCart Rate, Link CTR, and Outbound CPC to gauge audience quality.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'experiment-evaluation-data.json',
              code: `{
  "experiment_results_7_days": {
    "Audience_1_Broad": {
      "spend": 210.00,
      "cpc": 0.45,
      "purchases": 14,
      "cpa": 15.00,
      "roas": 4.00,
      "verdict": "WINNER (Scalable baseline)"
    },
    "Audience_2_LAL_1pct": {
      "spend": 210.00,
      "cpc": 0.85,
      "purchases": 11,
      "cpa": 19.09,
      "roas": 3.14,
      "verdict": "VIABLE ALTERNATIVE"
    },
    "Audience_3_Interest": {
      "spend": 210.00,
      "cpc": 1.40,
      "purchases": 5,
      "cpa": 42.00,
      "roas": 1.42,
      "verdict": "FAILED (High auction competition)"
    }
  }
}`,
              lineByLine: [
                { line: '\"experiment_results_7_days\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"Audience_1_Broad\": {', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: '\"spend\": 210.00,', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"cpc\": 0.45,', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Never test new audiences with unproven, untested creatives! If the experiment fails, you will not know if the audience was bad or if the creative was weak. Always use your single best verified "champion" ad creative as the control.',
          commonMistakes: [
            'Using different ad creatives inside different audience ad sets during an audience test.',
            'Ending tests after 24 hours due to impatience.',
            'Testing 10 Lookalike percentage brackets (1%, 2%, 3%... 10%) simultaneously with tiny $5 budgets.'
          ]
        },
        {
          id: 'sec-meta-7-3-int',
          title: 'Three Real-World Audience Experiment Walkthroughs',
          difficulty: 'Intermediate',
          content: `### Practical Experiment Scenarios

1. **Broad vs 1% Lookalike:** E-commerce apparel brand testing whether Broad delivers lower CPA than Lookalikes at scale.
2. **Stacked Interests vs Single Interest:** Testing 5 combined fitness interests vs 1 large single interest.
3. **Demographic Age Bracket Testing:** Testing Ages 21–34 vs Ages 35–55 for a home decor product.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'audience-case-scenarios.yaml',
              code: `Experiment_1: "Broad (Winner at scale) vs LAL 1% (Winner at low spend)"
Experiment_2: "Stacked Interests (Lower CPM) vs Single Interest (High CPM)"
Experiment_3: "Age 35-55 (Higher AOV) vs Age 21-34 (Lower CPA)"`,
              lineByLine: [
                { line: 'Experiment_1: \"Broad (Winner at scale) vs LAL 1% (Winner...', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'Experiment_2: \"Stacked Interests (Lower CPM) vs Single I...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Experiment_3: \"Age 35-55 (Higher AOV) vs Age 21-34 (Lowe...', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Keep ad creative strictly constant when testing audiences to isolate the variable.',
        'Run audience experiments for 4–7 days and ensure minimum conversion thresholds are met.',
        'Use proven champion creatives as controls during audience experimentation.'
      ],
      summary: 'You now know how to design and evaluate controlled audience experiments scientifically.',
      practiceExercises: [
        {
          title: 'Structured Audience Experiment Plan',
          instructions: 'Draft an audience experiment document testing Broad vs a 2% Lookalike vs an Interest Stack for an online gourmet coffee brand. Specify hypotheses, budget, control assets, and evaluation rules.'
        }
      ]
    }
  },
  {
    id: 'meta-int-08',
    orderIndex: 8,
    title: 'Module 8: Lead Generation Campaigns',
    description: 'Master Instant Forms vs landing page funnels, form qualification fields, CRM integration, lead follow-up velocity, and Cost Per Qualified Lead (CPQL).',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-08', title: 'Meta Lead Generation Best Practices', type: 'documentation', url: 'https://www.facebook.com/business/help/148491029410' }
    ],
    lessonContent: {
      overview: `### The Direct-Response Lead Generation Playbook

Generating leads on Meta is fundamentally different from e-commerce sales. While e-commerce transactions happen instantly on a website, lead generation is a multi-step handoff between Meta advertising, lead qualification, and sales outreach.

In this module, you will master **Instant Forms (Lead Ads)** vs **Landing Page Funnels**, implement custom qualification questions to filter out low-intent prospects, connect CRMs via webhooks, and optimize for **Cost Per Qualified Lead (CPQL)**.`,
      analogyHero: 'Think of lead generation like casting for a movie. A low-friction form is inviting anyone who walks by to audition—you get thousands of unqualified people. A qualified lead form is holding a pre-screening test with 3 specific requirements—you get 50 elite actors ready to star in your film.',
      objectives: [
        'Master the trade-offs between Meta Instant Forms (On-Facebook) and External Landing Page Forms.',
        'Implement "Higher Intent" form configurations with review steps and custom qualification questions.',
        'Calculate Cost Per Lead (CPL) vs Cost Per Qualified Lead (CPQL).',
        'Connect Meta Lead Ads to CRMs (HubSpot, Salesforce, Zapier) for sub-5-minute sales follow-up.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-int-8-1',
          title: 'Instant Forms vs External Landing Page Funnels',
          difficulty: 'Intermediate',
          content: `### Choosing the Right Lead Generation Vehicle

- **Meta Instant Forms (Native Lead Ads):**
  * *How it works:* The form opens instantly inside Facebook/Instagram with user contact info (Name, Email, Phone) pre-filled from their profile.
  * *Pros:* Lowest Cost Per Lead (CPL), frictionless mobile experience, zero landing page drop-off.
  * *Cons:* Higher risk of low-intent leads and accidental submissions.
- **External Landing Page Funnels:**
  * *How it works:* User clicks ad, navigates to custom website landing page, reads long-form sales copy, and fills out form.
  * *Pros:* Highest lead intent, deep brand education, seamless tracking via Pixel/CAPI.
  * *Cons:* Higher CPL due to landing page bounce rates.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'lead-format-comparison.yaml',
              code: `Instant_Forms_Config:
  Form_Type: "Higher Intent (Includes Review Step)"
  Custom_Questions:
    - Question: "What is your monthly advertising budget?"
      Options: ["Under $1,000", "$1,000 - $5,000", "$5,000 - $20,000", "$20,000+"]
    - Question: "When do you plan to start?"
      Options: ["Immediately", "Next 30 Days", "Just researching"]
  Result: "Filters out low-budget leads automatically"`,
              lineByLine: [
                { line: 'Instant_Forms_Config:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Form_Type: \"Higher Intent (Includes Review Step)\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Custom_Questions:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '- Question: \"What is your monthly advertising budget?\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-8-2',
          title: 'CPL vs CPQL and Lead Follow-Up Velocity',
          difficulty: 'Intermediate',
          content: `### The Golden Rule of Lead Conversion: 5-Minute Follow-Up

Generating a lead is only 20% of the battle. Lead conversion rates drop by **80% if outreach happens after 5 minutes**:
- **Cost Per Lead (CPL):** Total Spend / Total Raw Form Submissions.
- **Cost Per Qualified Lead (CPQL):** Total Spend / Qualified Leads (meeting budget/timeline criteria).
- **CRM Integration:** Use webhooks (Zapier, Make, native CRM integrations) to instantly push leads to your sales team's phone via SMS or automated email confirmation within 60 seconds.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'cpl-vs-cpql-economics.json',
              code: `{
  "lead_economics": {
    "Campaign_A_More_Volume": {
      "spend": 1000,
      "leads": 100,
      "cpl": 10.00,
      "qualified_rate": "15%",
      "qualified_leads": 15,
      "cpql": 66.67,
      "closed_sales": 2,
      "revenue": 4000
    },
    "Campaign_B_Higher_Intent": {
      "spend": 1000,
      "leads": 40,
      "cpl": 25.00,
      "qualified_rate": "70%",
      "qualified_leads": 28,
      "cpql": 35.71,
      "closed_sales": 6,
      "revenue": 12000
    }
  }
}`,
              explanation: 'Campaign B has higher CPL ($25 vs $10) but generates 3x more revenue due to higher qualification.',
              lineByLine: [
                { line: '"Campaign_B_Higher_Intent": "cpql": 35.71', explanation: 'Much lower cost per qualified buyer despite higher top-line CPL.' },
                { line: '"revenue": 12000', explanation: 'Sales team spent time closing qualified leads rather than chasing fake phone numbers.' }
              ]
            }
          ],
          proTip: 'Always use the "Higher Intent" form setting with at least 1 or 2 custom multiple-choice qualifying questions. This prevents accidental single-tap form submissions and drastically improves lead quality for your sales team.',
          commonMistakes: [
            'Relying solely on auto-filled profile info without adding custom qualifying questions.',
            'Letting leads sit in a CSV download folder for 4 days before calling them.',
            'Judging agency performance purely on cheap $3 CPL without checking closed-won revenue.'
          ]
        },
        {
          id: 'sec-meta-int-8-3',
          title: 'Three Real-World Lead Gen Implementations',
          difficulty: 'Intermediate',
          content: `### Production Lead Gen Case Studies

1. **Real Estate Brokerage:** Instant Form capturing pre-approved buyers for luxury condos in Miami with budget qualification.
2. **B2B Marketing Agency:** Landing page funnel offering a free marketing audit for businesses spending $10k+/mo.
3. **Online Coding Bootcamp:** Instant Form with a 3-question quiz leading to a free syllabus download and automated SMS sequence.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'lead-gen-case-studies.yaml',
              code: `Case_1_RealEstate:
  Form: Native Instant Form
  Hook: "Browse newly listed waterfront townhomes from $450k"
  Qualification: "Pre-approved mortgage? (Yes / No)"

Case_2_B2B_Agency:
  Form: Landing Page Funnel (Typeform)
  Hook: "Claim your free 30-minute Meta Ads growth audit"
  Qualification: "Monthly ad spend: > $10,000"

Case_3_Bootcamp:
  Form: Instant Form + Zapier SMS
  Hook: "Download the 2026 Full-Stack Career Roadmap"
  FollowUp: "Automated SMS within 2 minutes"`,
              lineByLine: [
                { line: 'Case_1_RealEstate:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Form: Native Instant Form', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Hook: \"Browse newly listed waterfront townhomes from $45...', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Qualification: \"Pre-approved mortgage? (Yes / No)\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Instant Forms provide low CPL; Landing Page funnels provide higher qualification.',
        'Optimize for Cost Per Qualified Lead (CPQL) rather than raw CPL.',
        'Integrate automated CRM workflows for immediate (< 5 min) sales follow-up.'
      ],
      summary: 'You now know how to design, qualify, and execute high-converting lead generation campaigns.',
      practiceExercises: [
        {
          title: 'Lead Gen Funnel & Qualification Design',
          instructions: 'Design a complete Meta Lead Generation campaign for a commercial solar installation company. Specify form type, 3 qualifying questions, CRM webhook routing, and follow-up SLA.'
        }
      ]
    }
  },
  {
    id: 'meta-int-09',
    orderIndex: 9,
    title: 'Module 9: E-commerce Sales Campaigns',
    description: 'Structure high-volume e-commerce acquisition funnels, PDP conversion optimization, creative-to-product matching, and unit economics management.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-09', title: 'Meta E-commerce Growth Masterclass', type: 'documentation', url: 'https://www.facebook.com/business/industries/ecommerce' }
    ],
    lessonContent: {
      overview: `### Scaling Direct-to-Consumer (DTC) E-commerce

E-commerce advertising on Meta is a high-velocity, data-intensive ecosystem. Profitable DTC scaling requires synchronizing ad creatives with dedicated Product Detail Pages (PDPs), managing Average Order Value (AOV), and maximizing customer Contribution Margin.

In this module, you will learn how to structure acquisition sales campaigns, align creative messaging with landing page checkout flows, and evaluate e-commerce unit economics.`,
      analogyHero: 'Think of an e-commerce campaign like a relay race. The Ad Creative runs the first leg (stopping the user and building excitement). The Landing Page runs the second leg (answering questions, showing proof, and securing the order). If either runner drops the baton, the race is lost.',
      objectives: [
        'Master the architecture of cold e-commerce acquisition campaigns.',
        'Align ad creative hooks with dedicated Product Detail Pages (PDPs) and Collection pages.',
        'Optimize post-click conversion rates through trust badges, fast loading, and bundle offers.',
        'Calculate Contribution Margin, Break-Even ROAS, and Net Profit.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-int-9-1',
          title: 'Ad Creative to Landing Page Message Match',
          difficulty: 'Intermediate',
          content: `### Eliminating Post-Click Disconnect

One of the most common causes of low ROAS is **Message Mismatch**:
- **Bad Example:** The ad promotes a 20% off summer linen dress, but the link sends the user to the store homepage. The user gets confused searching for the dress and bounces.
- **Good Example:** The ad promotes the green linen dress. The link goes directly to the green dress PDP with the 20% discount code pre-applied in the cart drawer.

#### Key PDP Conversion Elements:
1. Clear 1-sentence value proposition above the fold.
2. High-resolution product gallery with lifestyle and dimension photos.
3. Sticky "Add to Cart" button on mobile screens.
4. Social proof (star rating and review count) displayed directly beneath the product title.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'ecommerce-pdp-checklist.yaml',
              code: `Landing_Page_Conversion_Checklist:
  Hero_Section:
    - High_Resolution_Product_Media: "Min 5 photos + 1 short video"
    - Clear_Price_And_Discount_Display: "$60.00 (Was $75.00)"
    - Trust_Badges: "30-Day Money Back Guarantee | Free Returns"
  Mobile_UX:
    - Page_Speed: "LCP under 2.5 seconds on 4G connection"
    - Sticky_Add_To_Cart: "Visible when scrolling past product description"
    - One_Click_Checkout: "Apple Pay / Shop Pay / Google Pay enabled"`,
              lineByLine: [
                { line: 'Landing_Page_Conversion_Checklist:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Hero_Section:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '- High_Resolution_Product_Media: \"Min 5 photos + 1 short...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '- Clear_Price_And_Discount_Display: \"$60.00 (Was $75.00)\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-9-2',
          title: 'E-commerce Unit Economics and Margin Protection',
          difficulty: 'Intermediate',
          content: `### Managing Profitability Beyond ROAS

A campaign with a 2.5x ROAS might be highly profitable for an apparel brand with 80% gross margins, but bankrupt an electronics retailer with 20% gross margins.

#### Break-Even ROAS Equation:
$$\\text{Break-Even ROAS} = \\frac{1}{\\text{Contribution Margin %}}$$

- **Example 1 (Fashion Brand):**
  * Gross Margin = 75% (0.75).
  * Break-Even ROAS = 1 / 0.75 = 1.33x.
  * At a 3.0x ROAS, the brand makes substantial net profit.
- **Example 2 (Consumer Electronics):**
  * Gross Margin = 25% (0.25).
  * Break-Even ROAS = 1 / 0.25 = 4.00x.
  * A 3.0x ROAS results in a net financial loss!`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'ecommerce-economics-model.json',
              code: `{
  "unit_economics_comparison": {
    "Fashion_Brand": {
      "product_price": 60.00,
      "cogs": 15.00,
      "margin_percentage": 0.75,
      "breakeven_roas": 1.33,
      "target_roas": 2.50,
      "allowable_cpa": 24.00
    },
    "Electronics_Store": {
      "product_price": 200.00,
      "cogs": 150.00,
      "margin_percentage": 0.25,
      "breakeven_roas": 4.00,
      "target_roas": 5.00,
      "allowable_cpa": 40.00
    }
  }
}`,
              lineByLine: [
                { line: '\"unit_economics_comparison\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"Fashion_Brand\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"product_price\": 60.00,', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"cogs\": 15.00,', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Increase your Average Order Value (AOV) by implementing bundle upsells on your product pages (e.g. "Buy 2 Get 1 Free" or "Add Matching Sunglasses for $25"). Increasing AOV from $50 to $75 instantly boosts your ROAS by 50% without changing your ad spend!',
          commonMistakes: [
            'Sending paid ad traffic to generic homepages instead of targeted product detail pages.',
            'Ignoring mobile page speed; a 3-second delay on mobile PDPs can cut conversion rates in half.',
            'Evaluating campaign profitability without calculating product COGS and shipping expenses.'
          ]
        },
        {
          id: 'sec-meta-int-9-3',
          title: 'Three E-commerce Production Scenarios',
          difficulty: 'Intermediate',
          content: `### Real-World DTC Campaigns

1. **Fashion Store ($60 AOV):** Broad prospecting campaign driving to high-converting dress PDP with Shop Pay integration.
2. **Beauty & Skincare ($85 AOV):** UGC video ad driving to a dedicated 3-step bundle landing page.
3. **Electronics Accessories ($120 AOV):** Problem-solution demonstration video driving to product comparison matrix.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'ecommerce-scenarios.yaml',
              code: `Case_1_Fashion:
  Targeting: Broad US
  Destination: Linen Dress PDP
  Offer: Free 2-Day Shipping over $50
Case_2_Skincare:
  Targeting: LAL 1% Purchasers
  Destination: 3-Step Routine Bundle Page
  Offer: 20% Off Bundle + Free Cosmetic Bag`,
              lineByLine: [
                { line: 'Case_1_Fashion:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Targeting: Broad US', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'Destination: Linen Dress PDP', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Offer: Free 2-Day Shipping over $50', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Maintain strict message match between ad creative and product landing pages.',
        'Calculate Break-Even ROAS ($1 / \text{Margin %}$) to establish true profitability targets.',
        'Boost AOV through bundles and post-click upsells to maximize ROAS.'
      ],
      summary: 'You now understand how to structure and optimize high-converting e-commerce sales campaigns.',
      practiceExercises: [
        {
          title: 'E-commerce Campaign & PDP Blueprint',
          instructions: 'Design an end-to-end e-commerce campaign plan for an ergonomic chef\'s knife ($95 retail, $25 COGS), detailing the ad hook, dedicated PDP layout, bundle offer, and target ROAS.'
        }
      ]
    }
  },
  {
    id: 'meta-int-10',
    orderIndex: 10,
    title: 'Module 10: Catalog and Dynamic Product Advertising',
    description: 'Master Meta Commerce Manager, product feeds, catalog segmentation, dynamic product ads (DPA), multi-product retargeting, and feed quality assurance.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-10', title: 'Commerce Manager & Catalog Feeds Guide', type: 'documentation', url: 'https://www.facebook.com/business/help/14019284102948' }
    ],
    lessonContent: {
      overview: `### The Power of Dynamic Catalog Advertising

For e-commerce stores with dozens or thousands of SKUs, manually creating individual ads for every product is impossible. **Meta Catalogs** and **Dynamic Product Ads (DPA)** automate the entire process, dynamically pulling real-time pricing, stock availability, and imagery from your store feed.

In this module, you will master Commerce Manager catalog setup, product set segmentation, dynamic retargeting, and catalog feed error debugging.`,
      analogyHero: 'Think of a product catalog like a live inventory digital warehouse connected to your billboard network. When a customer walks by, the billboard instantly displays the exact pair of shoes they were looking at in size 9, complete with today\'s sale price.',
      objectives: [
        'Set up and sync e-commerce product feeds in Meta Commerce Manager.',
        'Create customized Product Sets (Best Sellers, High Margin, Clearance, Seasonal).',
        'Deploy Dynamic Product Ads for cold prospecting (Advantage+ Catalog Ads) and warm retargeting.',
        'Debug feed synchronization errors (missing prices, broken image links, unmapped SKUs).'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-int-10-1',
          title: 'Catalog Architecture & Product Set Segmentation',
          difficulty: 'Intermediate',
          content: `### Organizing Feeds for High-Performance Advertising

A raw catalog feed contains every item in your store. To advertise effectively, you must segment products into **Product Sets**:
1. **Best Sellers Set:** Top 20% highest-volume products for cold prospecting.
2. **High-Margin Set:** Products with gross margins > 80% to maximize profitability.
3. **New Arrivals Set:** Recently added seasonal products.
4. **Clearance Set:** Overstocked items promoted with discount overlays.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'product-set-definitions.yaml',
              code: `Product_Sets_Commerce_Manager:
  Set_1_Best_Sellers:
    Filter: "Tag CONTAINS 'bestseller' AND Availability = 'in stock'"
    Use_Case: "Cold prospecting Advantage+ Catalog Ads"
  Set_2_High_Margin_Apparel:
    Filter: "Price >= $50.00 AND Margin_Tag = 'tier_1'"
    Use_Case: "High-ticket scaling campaigns"
  Set_3_Dynamic_Retargeting:
    Filter: "All In-Stock Items"
    Use_Case: "1-to-1 Cart abandonment carousel ads"`,
              lineByLine: [
                { line: 'Product_Sets_Commerce_Manager:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Set_1_Best_Sellers:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Filter: \"Tag CONTAINS \'bestseller\' AND Availability = ...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Use_Case: \"Cold prospecting Advantage+ Catalog Ads\"', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-10-2',
          title: 'Feed Hygiene & Diagnostic Troubleshooting',
          difficulty: 'Intermediate',
          content: `### Resolving Catalog Sync and Pixel Match Errors

For Dynamic Product Ads to function, the \`id\` sent in your Meta Pixel (\`content_ids\`) must match the \`id\` in your Commerce Manager catalog:
- **Feed Error: "Mismatched Product IDs":** Pixel sends SKU \`DRESS-GRN-S\` but catalog feed has ID \`984102941\`. Meta cannot match the browsed item to the catalog.
- **Feed Error: "Missing Availability / Price":** Out-of-stock items shown to users, wasting ad spend. Ensure your feed auto-syncs every 1–6 hours.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'feed-validation-schema.json',
              code: `{
  "catalog_feed_item": {
    "id": "SKU_LINEN_DRESS_01",
    "title": "French Linen Summer Dress - Emerald Green",
    "description": "100% organic French flax linen dress with tailored pockets.",
    "availability": "in stock",
    "condition": "new",
    "price": "60.00 USD",
    "link": "https://luminaapparel.com/products/linen-dress?variant=01",
    "image_link": "https://luminaapparel.com/cdn/dress_front.jpg",
    "brand": "Lumina Apparel"
  }
}`,
              lineByLine: [
                { line: '\"catalog_feed_item\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"id\": \"SKU_LINEN_DRESS_01\",', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"title\": \"French Linen Summer Dress - Emerald Green\",', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"description\": \"100% organic French flax linen dress w...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Use creative enhancements inside Dynamic Product Ads! You can enable automated price overlays, strike-through original prices (e.g. ~~$75~~ $60), and free shipping badges dynamically rendered over each product card in the carousel.',
          commonMistakes: [
            'Allowing out-of-stock products to remain active in catalog advertising sets.',
            'Using low-resolution, non-square product images that crop awkwardly in mobile carousel cards.',
            'Failing to map variant IDs correctly between Shopify and Meta Commerce Manager.'
          ]
        },
        {
          id: 'sec-meta-int-10-3',
          title: 'Three Dynamic Catalog Implementations',
          difficulty: 'Intermediate',
          content: `### Real-World Catalog Campaigns

1. **Multi-Brand Fashion Retailer:** Advantage+ Catalog campaign dynamically recommending best sellers to cold prospects.
2. **Home Furniture Brand:** Retargeting 7-day visitors with dynamic carousels showing viewed dining tables and matching chairs.
3. **Cross-Sell Campaign:** Dynamic product ad showing phone accessories to users who purchased a smartphone 7 days ago.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'catalog-case-scenarios.yaml',
              code: `Case_1_AdvantagePlusCatalog:
  Audience: Broad US
  Format: Dynamic Product Carousel
  Product_Set: Top 50 Best Sellers

Case_2_Dynamic_Cart_Retargeting:
  Audience: AddToCart 7D
  Format: Dynamic Carousel
  Copy: "Still thinking about these? Complete your order today!"`,
              lineByLine: [
                { line: 'Case_1_AdvantagePlusCatalog:', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Audience: Broad US', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'Format: Dynamic Product Carousel', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Product_Set: Top 50 Best Sellers', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Product catalogs automate dynamic advertising across large product inventories.',
        'Segment catalogs into targeted Product Sets (Best Sellers, High Margin, Clearance).',
        'Ensure Pixel `content_ids` match Catalog IDs exactly to power dynamic retargeting.'
      ],
      summary: 'You now know how to configure Meta Catalogs and deploy high-converting Dynamic Product Ads.',
      practiceExercises: [
        {
          title: 'Catalog Strategy & Segmentation Plan',
          instructions: 'Design a catalog segmentation strategy for a multi-category outdoor sporting goods store (5,000 SKUs), defining 4 distinct Product Sets and their respective campaign objectives.'
        }
      ]
    }
  },
  {
    id: 'meta-int-11',
    orderIndex: 11,
    title: 'Module 11: Placements and Creative Fit',
    description: 'Master Advantage+ Placements vs manual placements, Asset Customization per Placement (PAC), 9:16 vertical storytelling, safe areas, and placement breakdowns.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-11', title: 'Meta Placement Asset Customization Guide', type: 'documentation', url: 'https://www.facebook.com/business/help/1489102941029' }
    ],
    lessonContent: {
      overview: `### The Importance of Placement-Native Creative

Meta ads can appear across more than a dozen distinct surface areas—including Facebook Feed, Instagram Feed, Instagram Reels, Stories, Messenger Inbox, and Audience Network. Delivering a square 1:1 image with tiny text into a full-screen vertical 9:16 Instagram Reel looks unprofessional and results in terrible conversion rates.

In this module, you will master **Asset Customization per Placement (PAC)**, understand **Advantage+ Placements**, and format creative assets to fit user context across every placement.`,
      analogyHero: 'Think of ad placements like international electrical outlets. A UK plug will not fit into a US wall socket without an adapter. Placement asset customization is formatting your ad so it fits natively into every digital socket across Meta\'s ecosystem.',
      objectives: [
        'Understand how Advantage+ Placements optimizes budget across surface areas.',
        'Configure Asset Customization per Placement (PAC) inside a single ad.',
        'Master vertical 9:16 Reels and Stories specifications and safe zones.',
        'Analyze Placement Breakdowns in Ads Manager to identify low-performing surface areas.'
      ],
      estimatedTime: '30 mins',
      sections: [
        {
          id: 'sec-meta-int-11-1',
          title: 'Advantage+ Placements vs Manual Placement Control',
          difficulty: 'Intermediate',
          content: `### How Meta Distributes Budget Across Placements

- **Advantage+ Placements (Automatic - Recommended):** Meta dynamically allocates your budget to whichever placement offers the cheapest conversion opportunities in real time.
- **Manual Placements:** Used when you want to restrict delivery exclusively to high-intent placements (e.g. running only on Instagram Reels and Facebook Feeds, while disabling low-quality Audience Network banner clicks).
- **Placement Asset Customization (PAC):** Allows you to provide a 1:1 image for Feeds, a 9:16 video for Reels/Stories, and a 16:9 landscape video for Desktop feeds—all inside a **single ad unit**!`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'placement-asset-customization.yaml',
              code: `Single_Ad_Unit_PAC_Setup:
  Ad_Name: "LinenDress_SpringLaunch_PAC"
  Assets_Per_Placement:
    Feeds_Group (Facebook/Instagram Feed):
      Media: "LinenDress_Square_1080x1080.jpg"
      Aspect_Ratio: "1:1"
    Reels_And_Stories_Group:
      Media: "LinenDress_Reel_1080x1920.mp4"
      Aspect_Ratio: "9:16"
      Audio: "Voiceover + Trending BGM"
    Right_Column_Desktop:
      Media: "LinenDress_Landscape_1200x628.jpg"
      Aspect_Ratio: "1.91:1"`,
              lineByLine: [
                { line: 'Single_Ad_Unit_PAC_Setup:', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Ad_Name: \"LinenDress_SpringLaunch_PAC\"', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Assets_Per_Placement:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Feeds_Group (Facebook/Instagram Feed):', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-11-2',
          title: 'Reels and Stories Safe Zones and Context',
          difficulty: 'Intermediate',
          content: `### Designing for Vertical 9:16 Full-Screen Immersion

In 9:16 vertical video placements (Instagram Reels, Facebook Reels, Stories), user interface elements overlay the video:
- **Top 14% (approx 250px):** Covered by account profile photo, username, and close button.
- **Bottom 20% (approx 380px):** Covered by ad caption, CTA button ("Shop Now"), and sound icons.
- **Rule:** Keep all critical text headlines, product demonstrations, and captions strictly within the **Central 65% Safe Zone**!`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'safe-zone-coordinates.json',
              code: `{
  "reels_9_16_canvas": {
    "width": 1080,
    "height": 1920,
    "top_safe_margin_px": 250,
    "bottom_safe_margin_px": 380,
    "left_safe_margin_px": 60,
    "right_safe_margin_px": 60,
    "active_content_height_px": 1290
  }
}`,
              lineByLine: [
                { line: '\"reels_9_16_canvas\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"width\": 1080,', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"height\": 1920,', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"top_safe_margin_px\": 250,', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Check your Ads Manager "Breakdown by Placement" table monthly. If you notice that "Audience Network" is consuming 20% of your budget but generating 0 purchases, switch to Manual Placements and disable Audience Network.',
          commonMistakes: [
            'Running 16:9 horizontal landscape videos on Instagram Reels, resulting in giant black bars and terrible engagement.',
            'Placing text at the very bottom of a 9:16 video where the CTA button completely covers it.',
            'Disabling Instagram Feeds because you personally prefer Instagram Reels.'
          ]
        },
        {
          id: 'sec-meta-int-11-3',
          title: 'Three Placement Strategy Walkthroughs',
          difficulty: 'Intermediate',
          content: `### Real-World Placement Execution

1. **Feed Creative:** High-contrast 4:5 image showing dress details with clean bold copy above.
2. **Reels Creative:** 9:16 dynamic vertical video with voiceover and on-screen captions inside safe zones.
3. **Stories Creative:** 9:16 interactive poll sticker video prompting user engagement before swipe-up.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'placement-use-cases.yaml',
              code: `Case_1_Feed: "1:1 / 4:5 High contrast product imagery"
Case_2_Reels: "9:16 Vertical UGC with captions & sound"
Case_3_Stories: "9:16 Direct urgency & swipe-up offer"`,
              lineByLine: [
                { line: 'Case_1_Feed: \"1:1 / 4:5 High contrast product imagery\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_2_Reels: \"9:16 Vertical UGC with captions & sound\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_3_Stories: \"9:16 Direct urgency & swipe-up offer\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Use Placement Asset Customization (PAC) to deliver tailored aspect ratios inside a single ad unit.',
        'Keep critical captions and headlines inside the central safe zone for 9:16 Reels and Stories.',
        'Audit Placement Breakdowns to prune unprofitable surface areas.'
      ],
      summary: 'You now know how to format and optimize ad creatives for native placement delivery.',
      practiceExercises: [
        {
          title: 'Placement Adaptation Checklist',
          instructions: 'Create a placement adaptation guide for a new video ad campaign, specifying the exact dimensions, safe zone margins, audio requirements, and copy lengths for Feed, Stories, and Reels.'
        }
      ]
    }
  },
  {
    id: 'meta-int-12',
    orderIndex: 12,
    title: 'Module 12: Campaign Optimization',
    description: 'Master systematic performance troubleshooting, diagnose High CPM / Low CTR / Poor Conversion bottlenecks, and execute data-driven optimization decision trees.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-12', title: 'Meta Performance Optimization Framework', type: 'documentation', url: 'https://www.facebook.com/business/help/1401928410294829' }
    ],
    lessonContent: {
      overview: `### The Performance Marketer's Diagnostic Decision Tree

When campaign performance drops, amateur advertisers panic and change 10 settings at once—resetting learning phases and making the problem worse. Elite performance marketers act like seasoned doctors: they systematically isolate symptoms, identify root causes, and apply targeted remedies.

In this module, you will master the 4 primary diagnostic bottleneck scenarios and learn how to optimize campaigns with mathematical precision.`,
      analogyHero: 'Think of campaign optimization like diagnosing an engine problem. If the car won\'t start, you don\'t replace the tires, repaint the chassis, and rebuild the transmission all at once. You check the battery first, then the fuel pump, then the spark plugs.',
      objectives: [
        'Master the 4-part Diagnostic Decision Tree (CPM, CTR, Conversion Rate, Frequency).',
        'Diagnose and fix High CPM + Low CTR issues (Auction & Creative friction).',
        'Diagnose and fix High CTR + Poor Conversion Rate issues (Post-click friction).',
        'Detect audience saturation and creative fatigue before ROAS collapses.'
      ],
      estimatedTime: '40 mins',
      sections: [
        {
          id: 'sec-meta-int-12-1',
          title: 'The 4-Part Diagnostic Decision Tree',
          difficulty: 'Intermediate',
          content: `### Systematic Funnel Troubleshooting

#### Scenario 1: High CPM + Low CTR (Feed Resistance)
- **Symptom:** CPM >= $35.00 and Link CTR < 1.0%.
- **Diagnosis:** Ad creative is boring, unappealing, or audience targeting is too narrow.
- **Action:** Broaden targeting to open demographics and test 3 new high-contrast 3-second visual video hooks.

#### Scenario 2: Good CTR + Poor Conversion Rate (Post-Click Friction)
- **Symptom:** Link CTR >= 2.5%, but 0 Purchases after 150 clicks.
- **Diagnosis:** The ad generates interest, but the landing page is failing (slow load time, high prices, confusing checkout, missing trust badges).
- **Action:** Audit mobile page speed, check for payment gateway errors, and align landing page headline with ad promise.

#### Scenario 3: Good Conversion Rate + Poor CPA (Unit Economics Friction)
- **Symptom:** Conversion rate is healthy (3.5%), but CPA is too high to be profitable.
- **Diagnosis:** CPC or CPM is inflated, or product price / AOV is too low.
- **Action:** Introduce bundle upsells to increase Average Order Value (AOV), or test broader lookalikes to lower CPM.

#### Scenario 4: High Frequency + Declining Response (Fatigue & Saturation)
- **Symptom:** Frequency $> 3.5$ in prospecting, CTR drops by 40%, CPA increases by 50%.
- **Diagnosis:** Target audience has seen the ad too many times.
- **Action:** Inject fresh creative assets into the ad set or expand audience targeting.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'optimization-decision-tree.json',
              code: `{
  "diagnostic_decision_tree": {
    "High_CPM_Low_CTR": {
      "cause": "Weak creative hook or narrow audience",
      "remedy": "Test 3 new 3-second visual hooks + Broaden audience"
    },
    "High_CTR_Low_CVR": {
      "cause": "Landing page mismatch or slow mobile speed",
      "remedy": "Fix mobile checkout friction + Add trust proof"
    },
    "High_CVR_High_CPA": {
      "cause": "Low AOV relative to click costs",
      "remedy": "Implement bundle upsells to raise AOV"
    },
    "High_Frequency_Rising_CPA": {
      "cause": "Creative fatigue / Audience saturation",
      "remedy": "Inject new creative concepts or expand audience"
    }
  }
}`,
              lineByLine: [
                { line: '\"diagnostic_decision_tree\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"High_CPM_Low_CTR\": {', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: '\"cause\": \"Weak creative hook or narrow audience\",', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"remedy\": \"Test 3 new 3-second visual hooks + Broaden ...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-12-2',
          title: 'Optimization Execution Rules & What NOT to Do',
          difficulty: 'Intermediate',
          content: `### Rules of Engagement for Campaign Edits

1. **The 48-Hour Rule:** Never make decisions based on fewer than 48–72 hours of data. Meta machine learning requires time to calibrate.
2. **Isolate One Variable:** If you change an ad creative, do not change the audience, budget, and bidding strategy at the exact same time.
3. **The 2x CPA Kill Rule:** If an individual ad spends $2\times$ your Target CPA without generating a single conversion, pause the ad.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'optimization-operating-rules.yaml',
              code: `Media_Buying_Rules:
  Rule_1: "Pause ads spending > 2x Target CPA with 0 conversions"
  Rule_2: "Scale ad sets maintaining > 3.0x ROAS by 15% every 48 hours"
  Rule_3: "Audit rolling 7-day metrics, not single-day snapshots"`,
              lineByLine: [
                { line: 'Media_Buying_Rules:', explanation: 'Establishes automated guardrails and execution rules to protect account stability.' },
                { line: 'Rule_1: \"Pause ads spending > 2x Target CPA with 0 conve...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Rule_2: \"Scale ad sets maintaining > 3.0x ROAS by 15% ev...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Rule_3: \"Audit rolling 7-day metrics, not single-day sna...', explanation: 'Establishes automated guardrails and execution rules to protect account stability.' }
              ]
            }
          ],
          proTip: 'When pausing underperforming ads in an ad set, always leave at least 2 or 3 active ads running. If you pause 4 out of 5 ads and leave only 1 ad, you risk shocking the ad set delivery and spiking your CPM.',
          commonMistakes: [
            'Turning off a campaign after 6 hours because no sales occurred yet.',
            'Lowering budget on a winning campaign by 50% during a minor 1-day dip.',
            'Changing landing pages and ad copy simultaneously without tracking attribution.'
          ]
        },
        {
          id: 'sec-meta-int-12-3',
          title: 'Three Optimization Diagnostic Case Studies',
          difficulty: 'Intermediate',
          content: `### Real-World Diagnostic Cases

1. **Case 1 (High CPM / Low CTR):** Boutique jewelry ad experiencing $48 CPM and 0.4% CTR. Switched from narrow interest stack to Broad 21–55 + UGC video. CPM fell to $14, CTR rose to 2.2%.
2. **Case 2 (High CTR / Low CVR):** Protein bar ad had 3.8% CTR but 0 sales from 200 clicks. Discovered mobile checkout button was hidden behind a cookie banner. Fixed banner; conversion rate jumped to 4.1%.
3. **Case 3 (Creative Fatigue):** Scaling ad set frequency rose to 4.8; ROAS dropped from 4.2x to 1.6x. Injected 3 fresh video angles; ROAS rebounded to 3.9x.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'diagnostic-case-studies.yaml',
              code: `Case_1_Resolved: "Broad targeting + UGC video lowered CPM from $48 to $14"
Case_2_Resolved: "Fixed mobile checkout UI bug; CVR jumped to 4.1%"
Case_3_Resolved: "Injected fresh creative assets; ROAS rebounded to 3.9x"`,
              lineByLine: [
                { line: 'Case_1_Resolved: \"Broad targeting + UGC video lowered CP...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Case_2_Resolved: \"Fixed mobile checkout UI bug; CVR jump...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_3_Resolved: \"Injected fresh creative assets; ROAS r...', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Use the 4-part decision tree to isolate whether friction is in the feed, on the landing page, or in unit economics.',
        'Follow the 2x Target CPA kill rule to prune losing ads decisively.',
        'Give machine learning algorithms at least 48–72 hours to calibrate before making adjustments.'
      ],
      summary: 'You now know how to diagnose and optimize underperforming campaigns systematically.',
      practiceExercises: [
        {
          title: '10-Scenario Campaign Diagnostic Problem Set',
          instructions: 'Analyze 10 real-world campaign performance snapshots with varying CPM, CTR, CPC, CPA, and Frequency metrics. Prescribe the exact root-cause diagnosis and specific action plan for each scenario.'
        }
      ]
    }
  },
  {
    id: 'meta-int-13',
    orderIndex: 13,
    title: 'Module 13: Reporting and Client Communication',
    description: 'Build executive client reporting dashboards, distinguish business KPIs from vanity metrics, explain performance volatility professionally, and set realistic expectations.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-13', title: 'Agency Reporting & Client Communication Standards', type: 'article', url: 'https://skillora.ai/docs/agency-reporting' }
    ],
    lessonContent: {
      overview: `### The Art of Professional Client Reporting

Technical media buying skill is useless if you cannot articulate performance, communicate challenges, and present data-backed recommendations to founders, executives, and clients. Clients do not care about vanity metrics like "Impressions" or "Reach"—they care about **Revenue, Cost Per Acquisition (CPA), and Return on Ad Spend (ROAS)**.

In this module, you will master weekly reporting cadences, executive summaries, managing client expectations, and explaining algorithmic volatility with authority and transparency.`,
      analogyHero: 'Think of client reporting like a doctor explaining test results to a patient. You don\'t just dump 50 pages of raw laboratory data on their desk. You explain the vital signs, diagnose the condition in clear terms, and provide a clear prescription for recovery.',
      objectives: [
        'Distinguish between actionable Business KPIs and superficial Vanity Metrics.',
        'Structure professional Executive Summaries for weekly and monthly reports.',
        'Communicate performance dips and auction fluctuations transparently without panic.',
        'Maintain professional ethics by never guaranteeing sales or specific ROAS targets.'
      ],
      estimatedTime: '30 mins',
      sections: [
        {
          id: 'sec-meta-int-13-1',
          title: 'Business KPIs vs Vanity Metrics in Client Reports',
          difficulty: 'Intermediate',
          content: `### Focusing on Metrics That Move the P&L

- **Vanity Metrics (Do NOT Lead With These):**
  * *Page Likes, Post Comments, Reach, 3-Second Video Views.*
  * *Why:* A campaign can generate 1,000,000 video views and still produce $0 in bank revenue.
- **True Commercial KPIs (Always Lead With These):**
  * *Total Ad Spend, Attributed Revenue, Return on Ad Spend (ROAS).*
  * *Purchases / Qualified Leads, Cost Per Acquisition (CPA / CPQL).*
  * *Outbound Click-Through Rate (CTR) & Cost Per Outbound Click (CPC).*`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'executive-summary-template.yaml',
              code: `Weekly_Client_Report_Structure:
  1_Executive_Summary:
    - Total_Spend: "$1,450.00"
    - Total_Attributed_Revenue: "$5,220.00"
    - Blended_ROAS: "3.60x (Target: >= 3.0x)"
    - Total_Purchases: "87 orders (CPA: $16.67)"
  2_Key_Wins_And_Insights:
    - "New UGC Unboxing video outperformed static images by 45% lower CPA."
    - "Broad prospecting ad set scaled to $150/day while holding 3.4x ROAS."
  3_Challenges_And_Remedies:
    - "Retargeting frequency rose to 4.5. Remedy: Injected 2 new customer review creatives."
  4_Action_Plan_Next_7_Days:
    - "Launch 3 new video hooks testing summer travel angle."
    - "Increase winning CBO campaign budget by 15%."`,
              lineByLine: [
                { line: 'Weekly_Client_Report_Structure:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '1_Executive_Summary:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '- Total_Spend: \"$1,450.00\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: '- Total_Attributed_Revenue: \"$5,220.00\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-13-2',
          title: 'Communicating Volatility & Professional Ethics',
          difficulty: 'Intermediate',
          content: `### How to Explain Performance Dips to Clients

Advertising performance naturally fluctuates due to weekend shopping patterns, holiday auction surges, and landing page changes. When performance dips:
1. **Never Panic or Hide Data:** Present the numbers honestly along with root-cause analysis.
2. **Explain the Diagnosis:** "Our CPA increased from $18 to $24 this week due to rising CPMs during Labor Day auction competition. However, our landing page conversion rate remained steady at 3.8%."
3. **Provide the Actionable Remedy:** "We have already launched 2 fresh creative angles and adjusted our bidding to protect margins."
4. **The Golden Rule of Agency Integrity:** Never promise or guarantee specific ROAS figures to prospective clients. Performance depends on too many variables outside your direct control (product quality, pricing, inventory, website reliability).`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'client-communication-scripts.json',
              code: `{
  "communication_protocols": {
    "handling_down_weeks": {
      "bad_response": "Meta algorithms are broken, we don't know what happened.",
      "professional_response": "We analyzed this week's dip and identified creative fatigue in our primary video (Frequency 4.8). We have already queued 3 fresh hook variations to refresh the auction."
    }
  }
}`,
              lineByLine: [
                { line: '\"communication_protocols\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"handling_down_weeks\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"bad_response\": \"Meta algorithms are broken, we don\'t...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"professional_response\": \"We analyzed this week\'s dip...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Send weekly reports on a consistent day (e.g. every Monday by 10 AM) with a 3-minute Loom video walking through the dashboard. Clients love video walkthroughs because it demonstrates proactive stewardship of their advertising budget.',
          commonMistakes: [
            'Sending raw, unformatted Excel spreadsheets with 40 columns and zero commentary.',
            'Blaming the client\'s product or website rudely when performance dips.',
            'Promising guaranteed 5x ROAS in agency sales pitches.'
          ]
        },
        {
          id: 'sec-meta-int-13-3',
          title: 'Three Production Reporting Deliverables',
          difficulty: 'Intermediate',
          content: `### Real-World Reporting Templates

1. **E-Commerce Monthly Executive Dashboard:** Highlighting Spend, Orders, Revenue, ROAS, and Best-Selling SKUs.
2. **B2B Lead Generation Weekly Report:** Highlighting CPL, Qualified Leads, Appointments Booked, and Pipeline Value.
3. **Crisis Diagnosis Memo:** Explaining a sudden 3-day conversion tracking outage and outlining remediation steps.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'reporting-deliverables.yaml',
              code: `Deliverable_1_Ecommerce: "Monthly Executive Summary + ROAS Bridge"
Deliverable_2_LeadGen: "Weekly Pipeline Report + Lead Quality Matrix"
Deliverable_3_CrisisMemo: "Technical Post-Mortem + Recovery Action Plan"`,
              lineByLine: [
                { line: 'Deliverable_1_Ecommerce: \"Monthly Executive Summary + RO...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Deliverable_2_LeadGen: \"Weekly Pipeline Report + Lead Qu...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Deliverable_3_CrisisMemo: \"Technical Post-Mortem + Recov...', explanation: 'Instructs the Meta machine learning auction engine on target conversion signals.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Always lead client reports with financial business KPIs (Revenue, CPA, ROAS).',
        'Frame challenges constructively with root-cause diagnostics and clear next steps.',
        'Never guarantee advertising performance; communicate uncertainty and testing principles.'
      ],
      summary: 'You now know how to create executive client reports and communicate performance professionally.',
      practiceExercises: [
        {
          title: 'Executive Client Report Construction',
          instructions: 'Draft a complete weekly client report for an e-commerce client who experienced a 20% drop in ROAS last week. Write the Executive Summary, Diagnostic Breakdown, and 7-day Action Plan.'
        }
      ]
    }
  },
  {
    id: 'meta-int-14',
    orderIndex: 14,
    title: 'Module 14: Scaling Meta Ads',
    description: 'Master vertical scaling, horizontal scaling, creative pipeline scaling, diminishing returns management, and unit economics guardrails.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 200,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-14', title: 'Scaling Meta Ads: Principles & Guardrails', type: 'article', url: 'https://skillora.ai/docs/scaling-meta-ads' }
    ],
    lessonContent: {
      overview: `### The Art of Profitable Account Scaling

Scaling an advertising account is not simply a matter of taking a $50/day campaign and changing the budget to $1,000/day. Rapid budget increases shock Meta's machine learning algorithms, drive up CPMs, and cause CPAs to skyrocket.

In this module, you will master the two primary scaling vectors—**Vertical Scaling** (increasing spend on existing winning setups) and **Horizontal Scaling** (expanding into new audiences, creative angles, and markets)—while enforcing strict unit economics guardrails.`,
      analogyHero: 'Think of scaling like stoking a campfire. If you dump an entire truckload of logs onto a small flame at once, you will smother the fire and put it out (crashing your campaign). You must add logs gradually, allowing the heat to grow steadily until it becomes an unstoppable bonfire.',
      objectives: [
        'Master Vertical Scaling protocols (15%–20% budget increases every 48 hours).',
        'Deploy Horizontal Scaling across broad audiences, new lookalike tiers, and creative angles.',
        'Manage the Law of Diminishing Marginal Returns as account spend increases.',
        'Establish hard Profitability Guardrails based on contribution margin and cash flow.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-int-14-1',
          title: 'Vertical Scaling vs Horizontal Scaling Mechanics',
          difficulty: 'Intermediate',
          content: `### The Two Dimensions of Account Expansion

- **Vertical Scaling (Deepening Spend):**
  * *Method:* Increasing the budget of an existing high-performing CBO campaign or ad set by 15%–20% every 48 hours.
  * *Why:* Allows the machine learning algorithm to adjust its bidding curve gradually without resetting the learning phase.
- **Horizontal Scaling (Broadening Footprint):**
  * *Method:* Launching new parallel ad sets and campaigns without touching existing winners.
  * *Approaches:*
    1. *Audience Expansion:* Launching 3%–5% Lookalikes or new demographic brackets.
    2. *Creative Scaling:* Injecting 4 new creative angles (UGC, Founder Story, Comparison, Problem-Solution).
    3. *Geographic Expansion:* Scaling from US-only into Canada, UK, and Australia.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'scaling-playbook-comparison.yaml',
              code: `Vertical_Scaling_Schedule:
  Baseline: "$100/day (ROAS: 4.0x)"
  Step_1_Day_3: "$120/day (+20%, ROAS: 3.8x)"
  Step_2_Day_5: "$144/day (+20%, ROAS: 3.7x)"
  Step_3_Day_7: "$172/day (+20%, ROAS: 3.5x)"

Horizontal_Scaling_Structure:
  Campaign_1_Scaling_US: "$172/day (Existing winner)"
  Campaign_2_Scaling_UK_CA: "$50/day (New Geo Expansion)"
  Campaign_3_Angle_Testing: "$40/day (4 New Video Hooks)"`,
              lineByLine: [
                { line: 'Vertical_Scaling_Schedule:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Baseline: \"$100/day (ROAS: 4.0x)\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Step_1_Day_3: \"$120/day (+20%, ROAS: 3.8x)\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Step_2_Day_5: \"$144/day (+20%, ROAS: 3.7x)\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-14-2',
          title: 'Diminishing Marginal Returns & Profit Guardrails',
          difficulty: 'Intermediate',
          content: `### Managing the Marginal Efficiency Curve

As you scale ad spend from $1,000/month to $50,000/month, your ROAS will naturally compress (e.g. dropping from 4.5x to 2.8x) because Meta must bid on broader audience segments.

- **The Goal of Scaling:** Maximize **Total Net Dollar Profit**, not percentage ROAS!
  * Spending $1,000 at 5.0x ROAS = $5,000 revenue ($4,000 gross return).
  * Spending $10,000 at 2.5x ROAS = $25,000 revenue ($15,000 gross return - **3.75x MORE CASH IN BANK!**)
- **When NOT to Scale:**
  1. If backend inventory or supply chain cannot fulfill orders.
  2. If merchant payment gateways are holding funds.
  3. If current CPA exceeds your Break-Even CPA.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'scaling-profit-guardrails.json',
              code: `{
  "scaling_guardrails": {
    "break_even_roas": 1.50,
    "minimum_acceptable_roas": 2.20,
    "scaling_trigger": "Maintain ROAS >= 2.8x over 3 consecutive days with at least 15 purchases",
    "halt_trigger": "ROAS drops below 2.0x for 2 consecutive days -> Reduce budget by 20%"
  }
}`,
              lineByLine: [
                { line: '\"scaling_guardrails\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"break_even_roas\": 1.50,', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"minimum_acceptable_roas\": 2.20,', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"scaling_trigger\": \"Maintain ROAS >= 2.8x over 3 conse...', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ],
          proTip: 'Creative production IS your scaling bottleneck! You cannot scale from $5,000/mo to $50,000/mo with only 2 winning ads. You need a reliable weekly pipeline producing 3–5 fresh creative variations every single week to replenish fatigued assets.',
          commonMistakes: [
            'Increasing a winning ad set from $50/day directly to $500/day, destroying performance.',
            'Obsessing over maintaining a 6.0x ROAS at $20/day instead of scaling to $500/day at 3.0x ROAS to generate massive total cash profit.',
            'Scaling campaigns when customer service and warehouse fulfillment are failing.'
          ]
        },
        {
          id: 'sec-meta-int-14-3',
          title: 'Three Production Scaling Scenarios',
          difficulty: 'Intermediate',
          content: `### Real-World Scaling Playbooks

1. **Vertical E-commerce Scale:** Gradually scaling a CBO campaign from $150/day to $600/day over 3 weeks.
2. **Horizontal Geographic Expansion:** Expanding a winning US e-commerce campaign into Canada and Australia.
3. **Seasonal Holiday Surge:** Utilizing Cost Caps and Advantage Campaign Budgets to absorb $2,000/day during Black Friday.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'scaling-scenarios.yaml',
              code: `Case_1_Vertical: "CBO scaling from $150 -> $600/day holding 3.2x ROAS"
Case_2_Horizontal: "Geo expansion into CA/UK adding $15k/mo revenue"
Case_3_HolidaySurge: "Cost Cap scaling absorbing $2k/day on Black Friday"`,
              lineByLine: [
                { line: 'Case_1_Vertical: \"CBO scaling from $150 -> $600/day hold...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Case_2_Horizontal: \"Geo expansion into CA/UK adding $15k...', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'Case_3_HolidaySurge: \"Cost Cap scaling absorbing $2k/day...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Scale vertically by 15%–20% every 48 hours to protect machine learning calibration.',
        'Scale horizontally across new audiences, creative angles, and geographic markets.',
        'Optimize for Total Net Cash Profit rather than vanity ROAS percentages.'
      ],
      summary: 'You now understand how to scale Meta Ads accounts profitably and enforce unit economics guardrails.',
      practiceExercises: [
        {
          title: '30-Day Account Scaling Strategy',
          instructions: 'Design a 30-day scaling roadmap for an e-commerce brand scaling from $3,000/month to $15,000/month. Detail the weekly budget schedules, horizontal expansion plans, creative requirements, and profitability guardrails.'
        }
      ]
    }
  },
  {
    id: 'meta-int-15',
    orderIndex: 15,
    title: 'Intermediate Capstone Project: Build and Optimize a Complete Funnel',
    description: 'Design, structure, and optimize a full-funnel Meta Ads strategy for a fictional Shopify brand selling a $75 product. Detail CBO/ABO architecture, Pixel/CAPI map, creative testing matrix, 3-stage retargeting, budget, and diagnostic optimization decision tree.',
    status: 'locked',
    requiresQuiz: false,
    xpReward: 400,
    level: 'intermediate',
    resources: [
      { id: 'res-meta-int-proj', title: 'Intermediate Project Brief & Submission Template', type: 'documentation', url: 'https://skillora.ai/docs/meta-intermediate-project' }
    ],
    lessonContent: {
      overview: `### Intermediate Level Capstone Project Brief

#### Business Scenario:
You are the Senior Performance Marketer for **"Solstice Watches"**, a fictional direct-to-consumer Shopify brand selling a minimalist solar-powered watch priced at **$75.00** (Product cost: $18.75, Gross Margin: $56.25 / 75%).

You have been allocated a **$4,500 monthly growth budget** ($150/day). Your mission is to construct a complete full-funnel Meta advertising system covering technical tracking, prospecting, creative testing, retargeting, and diagnostic optimization.

---

### Required Deliverables Checklist:
1. **Business Goal & Full-Funnel Architecture:** Define the commercial objectives and budget distribution across Cold Prospecting (70%), Creative Testing (15%), and Retargeting (15%).
2. **Pixel & CAPI Measurement Architecture:** Detail standard event tracking (ViewContent, AddToCart, InitiateCheckout, Purchase), unique event_id deduplication schema, and Event Match Quality (EMQ) optimization.
3. **Audience Strategy & Exclusion Matrix:** Define 1 Broad Prospecting ad set, 1 Lookalike (1% Purchaser) ad set, and a 3-stage Retargeting sequence with strict exclusion rules.
4. **3:2:2 Creative Testing Matrix:** Detail a structured DCT testing ad set with 3 distinct video hooks, 2 primary texts, and 2 headlines.
5. **3-Stage Time-Decay Retargeting Funnel:** Specify Days 1–3 (Cart Recovery), Days 4–7 (Social Proof), and Days 8–14 (Incentive).
6. **Financial Target Matrix:** Calculate Break-Even ROAS, Target CPA, and Allowable Acquisition Cost.
7. **Diagnostic Optimization Decision Tree:** Provide written protocols for handling High CPM, Low CTR, High Cart Drop-off, and Creative Fatigue.
8. **30-Day Scaling Plan:** Outline vertical and horizontal scaling rules for growing the account from $150/day to $300/day.`,
      analogyHero: 'This capstone project validates your ability to operate as an independent performance media buyer managing thousands in monthly client ad spend.',
      objectives: [
        'Architect a multi-campaign full-funnel structure on Meta Ads Manager.',
        'Implement server-side Conversions API (CAPI) deduplication blueprints.',
        'Deploy 3:2:2 Dynamic Creative Testing alongside high-intent retargeting.',
        'Enforce mathematical unit economics guardrails and diagnostic decision trees.'
      ],
      estimatedTime: '75 mins',
      syntaxGuide: `Solstice Watches Financial Baseline:
Retail Price:         $75.00
Cost of Goods (COGS): $18.75
Gross Margin:         $56.25 (75%)
Break-Even ROAS:      1 / 0.75 = 1.33x
Target CPA:           $25.00
Target ROAS:          $75.00 / $25.00 = 3.00x`,
      sections: [
        {
          id: 'sec-meta-int-proj-1',
          title: 'Full-Funnel Campaign Architecture & Budget Plan',
          difficulty: 'Intermediate',
          content: `### Account Architecture Blueprint

#### 1. Campaign 1: Main Prospecting & Scaling (CBO - $105/day / 70%)
- **Objective:** Sales (Optimized for Purchase via Pixel + CAPI).
- **Ad Set 1 (Broad US 21–55, All Genders):** $60/day allocation. Excludes 180D Purchasers and 30D Website Visitors.
- **Ad Set 2 (1% Purchaser Lookalike):** $45/day allocation. Excludes 180D Purchasers.
- **Creatives:** Top 3 proven graduated Post IDs.

#### 2. Campaign 2: Creative Testing Sandbox (ABO - $22.50/day / 15%)
- **Objective:** Sales (Purchase).
- **Ad Set (Broad US):** $22.50/day DCT testing 3 new video hooks, 2 primary texts, and 2 headlines.

#### 3. Campaign 3: Multi-Stage Retargeting (ABO - $22.50/day / 15%)
- **Stage 1 (Days 1–3 Cart Abandoners):** $11.25/day. Dynamic Catalog Carousel + Free Express Shipping.
- **Stage 2 (Days 4–7 Product Viewers):** $6.75/day. UGC Video Review + 2-Year Warranty Proof.
- **Stage 3 (Days 8–14 Engaged Visitors):** $4.50/day. 10% Off Welcome Offer.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'solstice-watches-full-funnel.yaml',
              code: `Solstice_Account_Blueprint:
  Daily_Budget_Total: "$150.00/day ($4,500/mo)"
  Campaigns:
    1_Main_Prospecting_CBO:
      Budget: "$105.00/day (70%)"
      AdSets:
        - "US_Broad_21-55_NoInterests"
        - "US_LAL_1pct_Purchasers"
    2_Creative_Testing_ABO:
      Budget: "$22.50/day (15%)"
      Setup: "3:2:2 Dynamic Creative Testing"
    3_Retargeting_ABO:
      Budget: "$22.50/day (15%)"
      AdSets:
        - "Cart_Abandoners_1-3D ($11.25/day)"
        - "Product_Viewers_4-7D ($6.75/day)"
        - "All_Visitors_8-14D ($4.50/day)"`,
              lineByLine: [
                { line: 'Solstice_Account_Blueprint:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Daily_Budget_Total: \"$150.00/day ($4,500/mo)\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Campaigns:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '1_Main_Prospecting_CBO:', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-int-proj-2',
          title: 'Technical Tracking, Creative Suite & Diagnostics',
          difficulty: 'Intermediate',
          content: `### Telemetry, Creative & Optimization Rules

#### 4. Technical CAPI Tracking Blueprint
- **Event Deduplication:** Client-side fbq('track', 'Purchase') and backend server CAPI POST payload pass identical event_id: order_ID_timestamp.
- **EMQ Optimization:** Payloads include SHA-256 hashed email, phone, first/last name, city, zip, fbp, and fbc cookies targeting an **EMQ score >= 8.5/10**.

#### 5. Optimization & Diagnostic Decision Tree
- **Rule 1 (Kill Losers):** If an ad in testing spends 2x Target CPA ($50.00) with 0 purchases, pause immediately.
- **Rule 2 (Graduate Winners):** If a creative in DCT achieves >= 3 purchases at <= $20.00 CPA and link CTR >= 1.8%, export Post ID to Campaign 1.
- **Rule 3 (Vertical Scale):** When Campaign 1 maintains >= 3.2x ROAS over a 3-day window, increase daily budget by 15%.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'solstice-kpi-guardrails.json',
              code: `{
  "solstice_performance_targets": {
    "target_cpm": 16.00,
    "target_link_ctr": 2.2,
    "target_cpc": 0.72,
    "breakeven_roas": 1.33,
    "target_cpa": 25.00,
    "target_roas": 3.00,
    "expected_monthly_orders": 180,
    "expected_monthly_revenue": 13500.00
  }
}`,
              lineByLine: [
                { line: '"target_cpm": 16.00', explanation: 'Financial and operational target configuration object.' },
                { line: '"target_cpc": 0.72', explanation: 'Target CPC ($0.72) ensures efficient traffic volume for a $75 AOV product.' },
                { line: '"breakeven_roas": 1.33', explanation: 'Break-even ROAS (1.33x) based on 75% gross product margin ($56.25).' },
                { line: '"target_cpa": 25.00', explanation: 'Target CPA ($25.00) locks in $31.25 contribution margin per unit sold.' },
                { line: '"expected_monthly_revenue": 13500.00', explanation: 'Projected monthly revenue ($13,500) from $4,500 ad spend at 3.0x target ROAS.' }
              ]
            },
            {
              language: 'yaml',
              filename: 'solstice-diagnostic-decision-tree.yaml',
              code: `Solstice_Optimization_Protocols:
  Protocol_1_High_CPM_Diagnosis:
    Condition: "CPM > $25.00 and Link CTR < 1.5%"
    Root_Cause: "Ad relevance score low or audience too narrow"
    Action: "Switch targeting to Broad US and refresh opening 3-second hook"
  Protocol_2_High_Cart_Dropoff:
    Condition: "AddToCart count >= 30 but Purchase conversion < 20%"
    Root_Cause: "Unexpected shipping fees or friction on Shopify checkout"
    Action: "Deploy Free Express Shipping banner and Stage 1 dynamic retargeting"
  Protocol_3_Graduation_Workflow:
    Condition: "DCT angle generates >= 3 purchases at <= $20 CPA"
    Action: "Extract Facebook Post ID and append into Main CBO scaling campaign"`,
              lineByLine: [
                { line: 'Protocol_1_High_CPM_Diagnosis', explanation: 'Diagnoses auction penalty and poor creative engagement.' },
                { line: 'Protocol_2_High_Cart_Dropoff', explanation: 'Identifies bottom-of-funnel friction between cart and purchase completion.' },
                { line: 'Protocol_3_Graduation_Workflow', explanation: 'Executes clean creative graduation to protect existing social proof.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'A complete intermediate funnel integrates full-funnel CBO/ABO architecture with technical CAPI deduplication.',
        'Dynamic Creative Testing feeds a continuous stream of verified Post ID winners into scaling campaigns.',
        'Clear financial guardrails and diagnostic trees protect gross profit margins.'
      ],
      summary: 'You have mastered the intermediate curriculum and are now ready to take the Intermediate Final Assessment.',
      practiceExercises: [
        {
          title: 'Capstone Funnel Verification',
          instructions: 'Review your Solstice Watches full-funnel blueprint against the 8 required deliverables to verify complete architectural alignment.'
        }
      ]
    }
  },
  {
    id: 'meta-int-16',
    orderIndex: 16,
    title: 'Intermediate Final Assessment: Meta Ads Professional Strategist',
    description: 'Rigorous 30-question formal assessment testing Meta Pixel, CAPI, event deduplication, advanced audiences, retargeting funnels, creative testing, lead gen, e-commerce, catalogs, placements, optimization decision trees, and scaling. Requires 25/30 (83.33%) to pass.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 750,
    level: 'intermediate',
    passingScore: 25,
    totalQuestions: 30,
    isFinalAssessment: true,
    questions: META_INTERMEDIATE_FINAL_ASSESSMENT,
    resources: []
  }
];
