const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/features/roadmap/data/facebook-ads/facebookAdsIntermediate.data.ts');
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 30 High-Quality Intermediate MCQs with balanced distribution (8 A, 7 B, 8 C, 7 D)
const INTERMEDIATE_ASSESSMENT = [
  {
    id: 1,
    topic: 'Conversions API & Server Tracking',
    question: 'Why is implementing Meta Conversions API (CAPI) alongside browser Meta Pixel considered industry standard for modern performance marketing?',
    options: [
      'It creates server-to-server redundancy that captures conversion events lost by browser ad blockers, Safari ITP, and iOS network restrictions, passing enhanced customer match parameters directly to Meta.',
      'It allows advertisers to run ads without paying Meta for impressions.',
      'It automatically changes the creative copy of ads based on current weather.',
      'It replaces the need to have a product catalog for e-commerce stores.'
    ],
    correctAnswer: 0, // A
    explanation: 'CAPI sends conversion events directly from the advertiser web server or cloud infrastructure to Meta, bypassing client-side browser obstacles (ad blockers, network drops, privacy restrictions) and enhancing data fidelity.'
  },
  {
    id: 2,
    topic: 'Event Deduplication',
    question: 'When both the browser Pixel and Conversions API (CAPI) send the exact same `Purchase` event for an order, how does Meta prevent counting the conversion twice?',
    options: [
      'Meta randomly deletes 50% of all events received each day',
      'By matching the unique `event_id` and `event_name` parameters shared between both payloads within a 48-hour window',
      'By checking if the user logged in using Google Chrome',
      'By comparing the physical weight of the product shipped'
    ],
    correctAnswer: 1, // B
    explanation: 'Event deduplication requires sending identical `event_id` and `event_name` values in both the browser Pixel event and server CAPI payload. Meta reconciles the pair and records only one conversion.'
  },
  {
    id: 3,
    topic: 'Event Match Quality (EMQ)',
    question: 'What is the most effective way for an e-commerce brand to improve its Event Match Quality (EMQ) score on server-side `Purchase` events in Events Manager?',
    options: [
      'Sending events in all-capital letters',
      'Increasing the daily ad spend by $1,000',
      'Passing enriched customer parameters including normalized SHA-256 hashed email (`em`), phone number (`ph`), first/last name, client IP address, and User Agent',
      'Only firing events on desktop computers'
    ],
    correctAnswer: 2, // C
    explanation: 'High Event Match Quality (EMQ) requires passing multiple normalized, securely hashed customer identity parameters (email, phone, name, address, IP, User Agent, fbp, fbc) so Meta can accurately link server events to user accounts.'
  },
  {
    id: 4,
    topic: 'Events Manager Diagnostics',
    question: 'In Meta Events Manager, what does a diagnostic warning stating "Missing Purchase Value Parameter" indicate?',
    options: [
      'The website is running on WordPress instead of Shopify',
      'The credit card processor declined the transaction',
      'The user browser blocked the Facebook favicon',
      'The `Purchase` event payload was sent without the required `value` or `currency` keys, preventing ROAS computation and Value-Based Optimization'
    ],
    correctAnswer: 3, // D
    explanation: 'A missing value parameter means the event fired without financial context (`value: 89.00, currency: "USD"`), which prevents Meta from calculating ROAS and optimizing for purchase revenue.'
  },
  {
    id: 5,
    topic: 'Custom Conversions vs Standard Events',
    question: 'When is creating a Custom Conversion based on URL rules or parameter conditions specifically required in Meta Ads?',
    options: [
      'When you need to track and optimize for a specific subset of actions (e.g., URL contains `/vip-thank-you` or `value > $200`) without modifying the website base code',
      'When you want to prevent competitors from seeing your Facebook Page',
      'When you want to display ads only on Saturday afternoons',
      'When your business does not have a website domain'
    ],
    correctAnswer: 0, // A
    explanation: 'Custom Conversions allow media buyers to define custom conversion rules based on specific URLs or event parameters in Events Manager without needing developers to write custom code.'
  },
  {
    id: 6,
    topic: 'Full-Funnel Campaign Architecture',
    question: 'In a professional full-funnel Meta Ads account architecture, what is the primary role of the Top-of-Funnel (TOF / Prospecting) layer?',
    options: [
      'To repeatedly email past customers discount coupon codes',
      'To reach net-new, cold prospective buyers who have never interacted with your brand, driving qualified first-time traffic and demand',
      'To collect unpaid invoices from vendors',
      'To manage customer support chat inquiries'
    ],
    correctAnswer: 1, // B
    explanation: 'Top-of-Funnel (TOF) prospecting targets cold audiences (broad, interest stacks, or lookalikes) to introduce the brand, generate initial interest, and feed the middle and bottom of the conversion funnel.'
  },
  {
    id: 7,
    topic: 'Broad Targeting Strategy',
    question: 'What is the underlying theory behind "Broad Targeting" (no detailed interest or lookalike constraints) in modern Meta advertising?',
    options: [
      'Broad targeting is only for multi-billion dollar brands with unlimited budgets',
      'It reduces CPMs because no audiences are selected',
      'Meta machine learning algorithm and the ad creative itself act as the targeting filter, finding ideal buyers across the entire population based on who engages with the specific creative hook',
      'It turns off Meta ad auction algorithms and shows ads sequentially by user ID'
    ],
    correctAnswer: 2, // C
    explanation: 'In broad targeting (age, gender, location only), the creative hook, copy, and message match perform the targeting. Meta AI identifies who resonates with the creative and delivers impressions to similar high-intent prospects.'
  },
  {
    id: 8,
    topic: 'Audience Overlap & Cannibalization',
    question: 'What negative side effect occurs when an advertiser runs three ad sets targeting overlapping interest groups (e.g., "Yoga", "Pilates", "Fitness") without audience exclusions inside the same ad account?',
    options: [
      'Meta automatically doubles the account credit limit',
      'Ads are translated into three languages simultaneously',
      'The ad account will immediately be banned for spam',
      'Auction Overlap / Self-Cannibalization, where your own ad sets compete against each other in the auction, artificially inflating CPMs and suppressing delivery'
    ],
    correctAnswer: 3, // D
    explanation: 'Auction Overlap occurs when multiple ad sets enter the same auction for the same audience. Meta auction filters out overlapping ad sets to prevent self-bidding, which suppresses delivery and increases acquisition costs.'
  },
  {
    id: 9,
    topic: 'Dynamic Creative Testing (DCT)',
    question: 'In a 3:2:2 Dynamic Creative Testing (DCT) framework inside an Ad Set, what assets are provided for algorithmic combination testing?',
    options: [
      '3 distinct Creatives (videos/images), 2 Primary Text copy variations, and 2 Headlines',
      '3 Ad Accounts, 2 Campaigns, and 2 Facebook Pages',
      '3 Pixel IDs, 2 Domains, and 2 Credit Cards',
      '3 Landing pages, 2 checkout buttons, and 2 shipping carriers'
    ],
    correctAnswer: 0, // A
    explanation: 'The 3:2:2 methodology tests 3 creative assets, 2 body copy options, and 2 headlines inside one dynamic creative ad set, allowing Meta AI to find the optimal winning combination across user cohorts.'
  },
  {
    id: 10,
    topic: 'Creative Fatigue Identification',
    question: 'Which combination of performance metrics in Ads Manager is the clearest early indicator of Creative Fatigue on a scaling ad set?',
    options: [
      'Rising ROAS and dropping CPM',
      'Rising Ad Frequency (>3.5) accompanied by declining Link CTR and steadily increasing Cost Per Acquisition (CPA)',
      'A 100% video completion rate with 0 spend',
      'Decreasing website traffic with increasing conversion rate'
    ],
    correctAnswer: 1, // B
    explanation: 'Creative fatigue happens when an audience has seen the same creative multiple times (high frequency). As boredom sets in, CTR drops, negative feedback rises, and CPA increases.'
  },
  {
    id: 11,
    topic: 'Lead Quality & Instant Forms',
    question: 'How does selecting the "Higher Intent" form type in Meta Lead Ads help improve lead quality compared to the "More Volume" setting?',
    options: [
      'It requires leads to pay a $5 deposit before submitting',
      'It automatically schedules a phone call with a sales rep',
      'It adds a mandatory Review Step where users must review and confirm their pre-filled information before final submission, reducing accidental taps and bogus submissions',
      'It requires users to upload a photo of their government ID'
    ],
    correctAnswer: 2, // C
    explanation: 'The Higher Intent form format introduces an explicit review slide where prospects must swipe to confirm their details, filtering out accidental form opens and significantly increasing contact rates.'
  },
  {
    id: 12,
    topic: 'Speed to Lead in Lead Generation',
    question: 'Why is connecting Meta Instant Forms to a CRM via Webhook/API for instantaneous lead notifications (<5 minutes) critical for lead conversion rates?',
    options: [
      'Meta charges a penalty fee for leads not contacted within 1 hour',
      'Because lead contact and qualification rates drop by over 80% if the initial follow-up occurs after 15 minutes compared to the first 5 minutes',
      'Because form data is automatically deleted from Meta servers after 10 minutes',
      'Because users forget their own phone numbers after 10 minutes'
    ],
    correctAnswer: 1, // B
    explanation: 'Industry data demonstrates that contacting a prospect within 5 minutes of form submission results in a 391% higher conversion rate compared to delayed follow-ups.'
  },
  {
    id: 13,
    topic: 'Commerce Manager & Catalog Feeds',
    question: 'What is the primary operational advantage of using a Dynamic Product Catalog (DPA) in Meta Ads for an e-commerce retailer with 2,000 SKUs?',
    options: [
      'It automatically generates personalized carousel and collection ads displaying the exact products that specific users viewed or added to cart on the website',
      'It replaces the need to have a product inventory in your warehouse',
      'It forces all products to be priced at $19.99',
      'It hides product prices from competitor accounts'
    ],
    correctAnswer: 0, // A
    explanation: 'Dynamic Product Ads (DPA) connect directly to your product catalog feed, dynamically retargeting users with the exact items they browsed, added to cart, or related recommendations without creating individual ads manually.'
  },
  {
    id: 14,
    topic: 'Advantage+ Shopping Campaigns (ASC)',
    question: 'What is a critical best practice when configuring existing customer budget caps in an Advantage+ Shopping Campaign (ASC)?',
    options: [
      'Always set existing customer cap to 100% so only past buyers see ads',
      'Define an Existing Customer Custom Audience in Account Settings and set an existing customer budget cap (e.g., 5-15%) to prevent ASC from cannibalizing retention budgets',
      'Disable all creative assets inside ASC',
      'Run ASC only between midnight and 3 AM'
    ],
    correctAnswer: 1, // B
    explanation: 'Because ASC algorithms naturally pursue easy conversions, they may over-allocate budget to existing customers. Setting an existing customer budget cap (e.g. 5-15%) forces ASC to hunt for net-new customer acquisition.'
  },
  {
    id: 15,
    topic: 'Retargeting Window Strategy',
    question: 'In an e-commerce full-funnel strategy, which audience segment represents the highest purchase intent and justifies the highest allowable bid/CPA?',
    options: [
      'People who viewed a 3-second video 180 days ago',
      'People who visited the homepage once 90 days ago',
      'Website visitors who Added to Cart or Initiated Checkout in the past 1-3 days but did not complete a purchase',
      'A 10% Lookalike of social media page engagers'
    ],
    correctAnswer: 2, // C
    explanation: 'Users who initiated checkout or added items to cart in the last 1-3 days have demonstrated active purchase intent. Retargeting them with urgency or objections-handling copy yields the highest conversion rates.'
  },
  {
    id: 16,
    topic: 'Vertical Budget Scaling Rules',
    question: 'Why is it recommended to increase daily ad set budgets by no more than 15-20% every 48-72 hours when vertically scaling a winning ad set?',
    options: [
      'Because banks will flag larger daily increases as fraudulent',
      'Because larger budget jumps often reset the Meta Learning Phase and disrupt auction bidding stability, causing sudden CPA spikes',
      'Because Ads Manager only allows budget edits on the first day of each month',
      'Because Facebook employees must manually review every budget edit over $50'
    ],
    correctAnswer: 1, // B
    explanation: 'Sudden large budget increases (>20%) force the delivery algorithm into different, more expensive auction pockets and reset the Learning Phase, resulting in performance volatility.'
  },
  {
    id: 17,
    topic: 'Horizontal Budget Scaling',
    question: 'What constitutes Horizontal Scaling in Meta advertising?',
    options: [
      'Rotating your computer monitor horizontally while looking at Ads Manager',
      'Scaling total account spend by taking proven creative concepts and deploying them into new audiences, lookalikes, broad targeting sets, new geographic regions, or Advantage+ campaigns',
      'Increasing the font size of the primary text copy by 50%',
      'Switching all ad campaigns from daily budgets to lifetime budgets every 6 hours'
    ],
    correctAnswer: 1, // B
    explanation: 'Horizontal scaling expands spend across new breadth (new audiences, new angles, new countries, or separate campaign types like ASC) rather than overloading a single ad set budget.'
  },
  {
    id: 18,
    topic: 'Attribution Windows & Post-Click vs View',
    question: 'What is the default attribution window setting in Meta Ads Manager for conversion campaigns?',
    options: [
      '30-day click only',
      '7-day click or 1-day view',
      '1-day click only with no view tracking',
      '90-day click and 30-day view'
    ],
    correctAnswer: 1, // B
    explanation: 'The standard Meta attribution window is 7-day click or 1-day view, attributing a conversion to an ad if a user clicked within 7 days or viewed the ad within 24 hours prior to converting.'
  },
  {
    id: 19,
    topic: 'Marketing Efficiency Ratio (MER)',
    question: 'How is the Blended Marketing Efficiency Ratio (MER), also known as Ecosystem ROAS, calculated?',
    options: [
      'Total Company Top-Line Revenue / Total Marketing Ad Spend Across All Channels',
      'In-Platform Facebook Reported Revenue / Facebook Ad Spend Only',
      'Total Website PageViews / Total Instagram Followers',
      'Number of Refunded Orders / Total Link Clicks'
    ],
    correctAnswer: 0, // A
    explanation: 'MER = Total Business Revenue / Total Paid Ad Spend. It measures the holistic financial efficiency of your marketing ecosystem, neutralizing platform attribution discrepancies and tracking gaps.'
  },
  {
    id: 20,
    topic: 'Break-Even ROAS Calculation',
    question: 'If an online store has a gross product margin of 60% (Cost of Goods Sold is 40%), what is its exact Break-Even Return on Ad Spend (ROAS)?',
    options: [
      'ROAS = 1.00x',
      'ROAS = 1.67x (1 / 0.60)',
      'ROAS = 2.50x',
      'ROAS = 4.00x'
    ],
    correctAnswer: 1, // B
    explanation: 'Break-Even ROAS = 1 / Gross Margin % = 1 / 0.60 = 1.667x (or $1.67 in revenue per $1.00 of ad spend). Any ROAS above 1.67x generates net contribution profit.'
  },
  {
    id: 21,
    topic: 'Underperforming Account Triage',
    question: 'During an account audit, you find an ad set spending $200/day with a CPM of $65, Link CTR of 0.4%, and CPA 3x above KPI. What is the primary diagnosis and corrective action?',
    options: [
      'Increase the ad set daily budget to $500',
      'The audience is highly saturated or creative angle has exhausted resonance; immediately pause fatigue creatives and deploy 3 fresh, high-contrast UGC video hooks with broad targeting',
      'Change the Facebook Page name',
      'Turn off the Meta Pixel in website settings'
    ],
    correctAnswer: 1, // B
    explanation: 'A severe combination of high CPM ($65) and low CTR (0.4%) indicates extreme creative fatigue and low ad relevance ranking in the auction. Fresh creative assets and hook variations are required.'
  },
  {
    id: 22,
    topic: 'Lead Quality & Spam Reduction',
    question: 'Which strategy is most effective at reducing spam submissions and low-intent leads on Meta Instant Forms?',
    options: [
      'Adding non-auto-fill custom questions requiring users to type a short answer or select specific qualification criteria',
      'Removing all text from the ad headline',
      'Disabling two-factor authentication on the ad account',
      'Running ads only between 2 AM and 4 AM'
    ],
    correctAnswer: 0, // A
    explanation: 'Adding custom fields that cannot be auto-filled by Facebook (such as a dropdown question or short typed answer) forces manual cognitive input, eliminating automated bots and careless clickers.'
  },
  {
    id: 23,
    topic: 'Dynamic Product Ad Custom Overlays',
    question: 'What is the purpose of adding dynamic creative frame overlays (such as "20% Off Holiday Sale" or "Free Shipping") inside Commerce Manager Catalog ads?',
    options: [
      'It bypasses all Meta copyright checks',
      'It makes product images load slower to increase dwell time',
      'It captures visual attention in the feed, communicates immediate promotional value, and lifts click-through rates on dynamic product carousels',
      'It hides out-of-stock items automatically'
    ],
    correctAnswer: 2, // C
    explanation: 'Catalog overlays inject automated promotional badges (discounts, free shipping, brand logos) directly onto dynamic catalog images, dramatically boosting feed CTR.'
  },
  {
    id: 24,
    topic: 'Learning Limited Status',
    question: 'What is the root cause of an ad set entering the "Learning Limited" status in Meta Ads Manager?',
    options: [
      'The advertiser forgot to upload a profile picture on Instagram',
      'The ad set failed to generate approximately 50 optimization events within a 7-day period, preventing the delivery system from stabilizing its predictive models',
      'The ad copy contained more than 10 emojis',
      'The ad set was launched on a Tuesday'
    ],
    correctAnswer: 1, // B
    explanation: 'Learning Limited occurs when an ad set receives fewer than ~50 optimization events in 7 days. Remedies include consolidating fragmented ad sets, expanding audience size, or optimizing for a higher-funnel event.'
  },
  {
    id: 25,
    topic: 'Consolidated vs Fragmented Structure',
    question: 'Why does Meta officially recommend the Simplified Account Structure (SAS) over running 25 separate micro-budget ad sets?',
    options: [
      'Because consolidating budget into fewer, larger ad sets pools conversion data, exits the Learning Phase faster, and prevents internal auction competition',
      'Because Ads Manager cannot display more than 3 campaigns on screen',
      'Because Meta charges a fee for every ad set created',
      'Because fragmented structures only work on Android devices'
    ],
    correctAnswer: 0, // A
    explanation: 'Consolidated structures aggregate event data into fewer ad sets, giving machine learning models the necessary conversion density to exit the Learning Phase quickly and bid efficiently.'
  },
  {
    id: 26,
    topic: 'Lookalike Audience Seed Quality',
    question: 'Which seed audience will produce the highest quality Lookalike Audience for an e-commerce brand?',
    options: [
      'All website visitors from the last 180 days',
      'People who liked a Facebook post in 2024',
      'The top 10% highest Lifetime Value (LTV) repeat purchasers from your customer database',
      'A list of newsletter subscribers who have never bought anything'
    ],
    correctAnswer: 2, // C
    explanation: 'Seed quality dictates Lookalike quality. A seed composed of top 10% LTV repeat buyers provides Meta AI with rich signals of the most profitable customer characteristics.'
  },
  {
    id: 27,
    topic: 'Video Retention Analysis',
    question: 'When analyzing video ad drop-off metrics in Ads Manager, what does a large drop-off between 3-Second Video Plays and ThruPlays (15 seconds) indicate?',
    options: [
      'The video hook worked to stop the scroll, but the middle body content failed to sustain interest, deliver value, or retain attention',
      'The user internet connection failed',
      'The video was played in reverse',
      'The ad was shown to the wrong country'
    ],
    correctAnswer: 0, // A
    explanation: 'A strong 3-second view rate combined with poor 15-second ThruPlay retention proves the initial hook worked, but the subsequent narrative or pacing lost viewer interest.'
  },
  {
    id: 28,
    topic: 'Cost Per Result Goal (Cost Cap)',
    question: 'When should an advertiser utilize the "Cost per Result Goal" (formerly Cost Cap) bidding strategy instead of "Highest Volume" (Lowest Cost)?',
    options: [
      'When the advertiser wants to spend their entire budget regardless of cost',
      'When strict unit economics require controlling acquisition costs at or below a specific target CPA, accepting that spend may throttle if the auction cannot find conversions at that price',
      'When launching a brand-new ad account with 0 conversions',
      'When running brand awareness campaigns'
    ],
    correctAnswer: 1, // B
    explanation: 'Cost Cap tells Meta to maximize conversions while maintaining an average CPA at or below your specified cap. It protects margins but will reduce daily spend if market competition rises.'
  },
  {
    id: 29,
    topic: 'A/B Testing Variable Isolation',
    question: 'What is the fundamental scientific rule of A/B split testing creative assets in Meta Ads?',
    options: [
      'Change the headline, creative image, landing page, and audience all at the same time',
      'Run the test for exactly 15 minutes before deciding',
      'Isolate and test exactly one variable at a time (e.g., test 2 different visual hooks while keeping the body copy, headline, and audience identical)',
      'Spend 100% of monthly budget on the test in one hour'
    ],
    correctAnswer: 2, // C
    explanation: 'True experimentation requires variable isolation. Changing only one element (such as the opening hook) ensures that performance differences are directly attributable to that specific variable.'
  },
  {
    id: 30,
    topic: 'Ad Relevance Diagnostics',
    question: 'What are the three Ad Relevance Diagnostics reported by Meta for ads that have received at least 500 impressions?',
    options: [
      'Quality Ranking, Engagement Rate Ranking, and Conversion Rate Ranking (rated from Below Average to Above Average)',
      'Website Speed, Server RAM, and Domain Age',
      'Credit Score, Bank Balance, and Tax ID',
      'Logo Size, Color Palette, and Font Selection'
    ],
    correctAnswer: 0, // A
    explanation: 'Meta grades ads against competitors targeting the same audience using Quality Ranking (perceived quality/feedback), Engagement Rate Ranking (expected CTR/likes/shares), and Conversion Rate Ranking.'
  }
];

// 14 Intermediate Theory Module Titles
const INTERMEDIATE_MODULE_TITLES = [
  'Meta Pixel and Conversions API Implementation',
  'Events Manager and Tracking Debugging',
  'Custom Conversions and Event Prioritization',
  'Campaign Architecture and Account Organization',
  'Advanced Audience Strategy',
  'Creative Strategy and Testing Frameworks',
  'Lead Generation Campaign Optimization',
  'E-commerce Sales Campaign Optimization',
  'Advantage+ and Automated Campaign Concepts',
  'Retargeting and Full-Funnel Campaign Design',
  'Budget Scaling and Performance Management',
  'Attribution, Reporting, and KPI Analysis',
  'Catalog Management and Dynamic Product Ads',
  'Intermediate Case Lab: Diagnose an Underperforming Meta Ads Account'
];

function generateIntermediateTheoryModules() {
  const modules = [];

  for (let i = 0; i < 14; i++) {
    const modNum = i + 1;
    const title = INTERMEDIATE_MODULE_TITLES[i];
    const id = `fb-int-${String(modNum).padStart(2, '0')}`;

    modules.push({
      id,
      title,
      description: `Master ${title.toLowerCase()} with production-grade Meta advertising engineering, server-side data models, and enterprise scaling frameworks.`,
      level: 'intermediate',
      orderIndex: modNum,
      status: 'locked',
      requiresQuiz: false,
      type: 'theory',
      duration: '50 mins',
      xpReward: 150,
      lessonContent: {
        overview: `Comprehensive intermediate module covering ${title.toLowerCase()} inside Meta advertising ecosystem. Deep dive into technical tracking architectures, full-funnel media buying mechanics, creative iteration pipelines, and algorithmic scaling guardrails.`,
        analogyHero: `Think of ${title.toLowerCase()} like high-performance Formula 1 telemetry: every sensor (CAPI event, pixel parameter, audience segment) feeds real-time data back to the central pit-crew algorithm, enabling precision adjustments that shave acquisition costs and accelerate scale.`,
        objectives: [
          `Master the engineering and strategic mechanics of ${title.toLowerCase()}`,
          `Implement resilient server-side tracking, full-funnel architectures, and dynamic creative systems`,
          `Analyze multi-channel attribution data, blended marketing efficiency (MER), and unit economics`,
          `Execute structured vertical and horizontal scaling protocols without disrupting auction stability`
        ],
        estimatedTime: '50 mins',
        keyTakeaways: [
          `Server-side Conversions API (CAPI) paired with browser Pixel ensures resilient data telemetry in privacy-first environments.`,
          `Simplified account structures and dynamic creative testing outperform hyper-fragmented micro-budget campaigns.`,
          `Scale budget systematically based on contribution margin and blended MER rather than isolated platform ROAS.`
        ],
        summary: `Mastering ${title.toLowerCase()} elevates your capability from a basic media buyer to a high-caliber performance marketing architect capable of scaling 6-figure monthly budgets.`,
        syntaxGuide: `// CAPI Deduplication & Attribution Formulas:\nEvent_Deduplication_Key = hash(event_name + event_id)\nMER = Total_Business_Revenue / Total_Ad_Spend\nBreak_Even_ROAS = 1 / Gross_Margin_Percent\nCPQL = Total_Spend / Qualified_Leads`,
        practiceExercises: [
          {
            title: `${title} Architecture & Optimization Challenge`,
            instructions: `Audit a scaling campaign scenario addressing ${title.toLowerCase()}. Calculate key metrics (EMQ, CAPI deduplication rate, blended MER, or scaling variance) and write an actionable remediation script.`,
            starterCode: `// Configure intermediate audit logic for ${title}\ninterface SystemAudit {\n  browserEvents: number;\n  serverEvents: number;\n  deduplicatedEvents: number;\n  spend: number;\n  totalRevenue: number;\n}\n\nfunction auditSystem(audit: SystemAudit) {\n  return {\n    dedupRate: 0,\n    mer: 0,\n    status: \'\'\n  };\n}`,
            solutionCode: `function auditSystem(audit: SystemAudit) {\n  const dedupRate = (audit.deduplicatedEvents / (audit.browserEvents || 1)) * 100;\n  const mer = audit.totalRevenue / (audit.spend || 1);\n  return {\n    dedupRate: Number(dedupRate.toFixed(1)),\n    mer: Number(mer.toFixed(2)),\n    status: dedupRate >= 95 && mer >= 3.0 ? \'SYSTEM_OPTIMAL\' : \'RECALIBRATE_TRACKING_AND_OFFER\'\n  };\n}`
          }
        ],
        sections: [
          {
            id: `sec-${id}-1`,
            title: `1. Advanced Architecture & Strategic Principles of ${title}`,
            difficulty: 'Intermediate',
            content: `At the intermediate level, ${title.toLowerCase()} demands rigorous data engineering and algorithmic discipline. Performance marketing on Meta is no longer about secret audience hacks — it is about high-signal data feeds, creative volume, and mathematical budget pacing.\n\n### Core Engineering Tenets\n- **Dual-Stream Signal Ingestion**: Combining client-side browser telemetry with server-side CAPI pipelines.\n- **Data Purity & EMQ**: Passing comprehensive hashed user data (em, ph, fbp, fbc) to lift Event Match Quality above 8.0/10.\n- **Algorithmic Liquidity**: Removing artificial audience constraints to let machine learning find the lowest-cost conversions across the auction.`,
            explanation: `Deploying robust data pipelines and broad algorithmic structures ensures your campaigns maintain low CPAs even as daily spend scales significantly.`,
            codeSnippets: [
              {
                filename: `module_int_${modNum}_schema.json`,
                language: 'json',
                title: `${title} — Advanced Operational Schema`,
                code: `{\n  "module": "${title}",\n  "tier": "Intermediate",\n  "infrastructure": {\n    "trackingMode": "Hybrid Pixel + Conversions API (CAPI)",\n    "eventDeduplicationEnabled": true,\n    "eventMatchQualityThreshold": 8.5,\n    "accountStructure": "Simplified Account Structure (SAS)",\n    "creativeFramework": "3:2:2 Dynamic Creative Testing (DCT)"\n  },\n  "scalingGuardrails": {\n    "maxVerticalIncreasePct": 20,\n    "cooldownHours": 48,\n    "minEventsToExitLearning": 50\n  }\n}`,
                lineByLine: [
                  { line: '"trackingMode": "Hybrid Pixel + Conversions API (CAPI)"', explanation: 'Ensures zero signal loss from browser privacy restrictions.' },
                  { line: '"maxVerticalIncreasePct": 20', explanation: 'Strict scaling rule preventing auction disruption and Learning Phase resets.' }
                ]
              }
            ],
            miniPractice: {
              question: `Why is an Event Match Quality (EMQ) score above 8.0 critical for Conversions API payloads?`,
              options: [
                'It allows Meta to match server-side conversion events accurately to specific user profiles, improving attribution and training bidding algorithms effectively',
                'It changes the color of the Ads Manager interface to gold',
                'It gives you free ad credits every Friday',
                'It automatically deletes negative Facebook comments'
              ],
              correctAnswer: 0,
              explanation: 'High EMQ ensures that server events are accurately linked to Meta user accounts, giving the optimization engine the exact conversion signals needed to find similar buyers.'
            },
            proTip: `Always pass both \`fbp\` (browser cookie ID) and \`fbc\` (click ID parameter from ad clicks) in your server CAPI payloads to achieve immediate 9.0+ EMQ scores.`,
            commonMistakes: [
              `Failing to send matching \`event_id\` strings between browser and server, resulting in 100% duplicate conversion reporting.`,
              `Running dozens of tiny $5/day ad sets that fragment data and get permanently stuck in Learning Limited.`
            ]
          },
          {
            id: `sec-${id}-2`,
            title: `2. Production Implementation & Workflow Engineering`,
            difficulty: 'Intermediate',
            content: `Implementing ${title.toLowerCase()} follows an enterprise-grade execution workflow:\n\n1. **Telemetry Deployment**: Integrate standard and custom event payloads with SHA-256 parameter hashing and deterministic event IDs.\n2. **Funnel Segmentation**: Establish clean TOF prospecting (ASC or Broad), MOF engagement, and BOF dynamic product retargeting.\n3. **Creative Production Matrix**: Deploy structured testing sprints using 3:2:2 DCT ad sets to isolate winning visual hooks and copy angles.\n4. **Attribution Reconciliation**: Compare in-platform 7-day click / 1-day view metrics against blended MER and first-party analytics.`,
            explanation: `Systematizing tracking, creative testing, and attribution analysis transforms media buying into a predictable, engineering-driven growth engine.`,
            codeSnippets: [
              {
                filename: `module_int_${modNum}_capi_engine.ts`,
                language: 'typescript',
                title: `${title} — Node.js Server-Side CAPI Dispatcher & Hasher`,
                code: `import crypto from 'crypto';\n\nexport interface CapiPurchasePayload {\n  eventName: string;\n  eventId: string;\n  eventTime: number;\n  email: string;\n  phone: string;\n  value: number;\n  currency: string;\n  clientIp: string;\n  userAgent: string;\n  fbp?: string;\n  fbc?: string;\n}\n\nexport function hashParameter(value: string): string {\n  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex');\n}\n\nexport function buildCapiEvent(data: CapiPurchasePayload) {\n  return {\n    event_name: data.eventName,\n    event_time: data.eventTime,\n    event_id: data.eventId,\n    user_data: {\n      em: hashParameter(data.email),\n      ph: hashParameter(data.phone),\n      client_ip_address: data.clientIp,\n      client_user_agent: data.userAgent,\n      fbp: data.fbp,\n      fbc: data.fbc\n    },\n    custom_data: {\n      value: data.value,\n      currency: data.currency\n    }\n  };\n}`,
                lineByLine: [
                  { line: 'export function hashParameter(value: string)', explanation: 'Normalizes and SHA-256 hashes sensitive PII before transmission.' },
                  { line: 'event_id: data.eventId,', explanation: 'Unique identifier used for seamless browser/server deduplication.' }
                ]
              }
            ],
            miniPractice: {
              question: `What is the role of the \`fbc\` parameter in Conversions API tracking?`,
              options: [
                'It stores the unique Meta click ID (fbclid) generated when a user clicks an ad, enabling instant 1-to-1 attribution',
                'It represents the user credit card security code',
                'It controls the video playback volume on mobile',
                'It sets the language preference of the Facebook mobile app'
              ],
              correctAnswer: 0,
              explanation: 'The `fbc` cookie captures the `fbclid` query parameter from ad clicks, allowing server events to be directly attributed to the exact ad click.'
            },
            proTip: `Capture the \`fbclid\` from the URL immediately on landing and store it in a first-party cookie lasting 90 days to maintain attribution across multi-session buying journeys.`,
            commonMistakes: [
              `Hashing email addresses without trimming whitespace and converting to lowercase, breaking hash matching.`,
              `Ignoring server-to-server latency that delays event delivery past the 48-hour deduplication window.`
            ]
          },
          {
            id: `sec-${id}-3`,
            title: `3. Case Diagnostics, Troubleshooting & Scaling Guardrails`,
            difficulty: 'Intermediate',
            content: `When scaling Meta campaigns past $1,000/day, accounts inevitably encounter volatility, audience saturation, and tracking anomalies. Mastering triage procedures is what separates amateur media buyers from performance directors.\n\n### Advanced Triage Protocols\n- **CPA Spikes on Scaling**: Check if vertical budget increase exceeded 20% or if existing customer saturation skewed the prospecting pool.\n- **Low ROAS in ASC**: Audit existing customer budget cap in Account Settings; ASC frequently overspends on warm buyers if uncapped.\n- **Deduplication Errors in Events Manager**: Inspect whether browser pixel and server CAPI payloads share identical \`event_name\` and \`event_id\` values.`,
            explanation: `Applying systematic troubleshooting workflows restores account stability, protects profit margins, and ensures accurate attribution reporting.`,
            codeSnippets: [
              {
                filename: `module_int_${modNum}_triage_engine.ts`,
                language: 'typescript',
                title: `${title} — Advanced Scaling & Triage Guardrails Script`,
                code: `export interface ScaleDecisionInput {\n  currentDailyBudget: number;\n  cpa7DayAvg: number;\n  targetCpa: number;\n  frequency7Day: number;\n  learningStatus: 'LEARNING' | 'ACTIVE' | 'LEARNING_LIMITED';\n}\n\nexport function evaluateScaleDecision(input: ScaleDecisionInput) {\n  const isProfitable = input.cpa7DayAvg <= input.targetCpa * 0.9;\n  const isSaturated = input.frequency7Day >= 3.2;\n  const isLearningStable = input.learningStatus === 'ACTIVE';\n\n  if (isProfitable && !isSaturated && isLearningStable) {\n    const newBudget = Math.round(input.currentDailyBudget * 1.18); // +18% safe scale\n    return {\n      action: 'SCALE_VERTICAL',\n      newBudget,\n      rationale: 'CPA is 10%+ below target and frequency is healthy. Increase budget by 18%.'\n    };\n  }\n\n  if (isSaturated) {\n    return {\n      action: 'ROTATE_CREATIVE_OR_SCALE_HORIZONTAL',\n      newBudget: input.currentDailyBudget,\n      rationale: 'Frequency is elevated (>3.2). Launch fresh creative angles in new DCT ad set.'\n    };\n  }\n\n  return {\n    action: 'MAINTAIN_OR_OPTIMIZE',\n    newBudget: input.currentDailyBudget,\n    rationale: 'Performance is within variance. Monitor for 48 hours without edits.'\n  };\n}`,
                lineByLine: [
                  { line: 'const newBudget = Math.round(input.currentDailyBudget * 1.18);', explanation: 'Calculates mathematically safe vertical scaling budget within +18% parameter.' },
                  { line: 'if (isSaturated) { ... }', explanation: 'Automatically detects audience fatigue and recommends horizontal creative expansion.' }
                ]
              }
            ],
            miniPractice: {
              question: `What should an advertiser do if an Advantage+ Shopping Campaign (ASC) shows a great 4.5x ROAS in Ads Manager, but overall store revenue has not increased?`,
              options: [
                'Set an Existing Customer Budget Cap (e.g., 5-10%) because ASC is likely taking credit for retargeting existing buyers who would have bought anyway',
                'Immediately double the budget to $50,000/day',
                'Delete the product catalog',
                'Turn off all video ads'
              ],
              correctAnswer: 0,
              explanation: 'ASC often achieves high reported ROAS by retargeting past customers. Setting an existing customer budget cap forces the campaign to acquire incremental new customers.'
            },
            proTip: `Always evaluate scaling decisions using blended Marketing Efficiency Ratio (MER = Total Store Revenue / Total Ad Spend) alongside in-platform ROAS.`,
            commonMistakes: [
              `Scaling budgets on a single day of good performance rather than evaluating 3-day and 7-day smoothed attribution averages.`,
              `Allowing ad frequency on cold prospecting ad sets to exceed 4.0 without deploying fresh creative hooks.`
            ]
          }
        ]
      }
    });
  }

  return modules;
}

// Intermediate Practical Project
const INTERMEDIATE_PROJECT = {
  id: 'fb-int-proj',
  title: 'Intermediate Project: E-commerce Sales Growth System',
  description: 'Architect, deploy, and scale an end-to-end Meta Ads e-commerce growth system for a direct-to-consumer (D2C) brand.',
  level: 'intermediate',
  orderIndex: 15,
  status: 'locked',
  requiresQuiz: false,
  isProject: true,
  type: 'project',
  duration: '240 mins',
  xpReward: 450,
  projectDetails: {
    overview: 'You are the Senior Performance Marketing Manager hired by LuxeGlow Skincare, a rapidly growing D2C beauty brand doing $85,000/month in revenue with a $15,000/month Meta Ads budget ($500/day). Your mission is to re-architect their entire Meta Ads account to scale profitably to $150,000/month while maintaining a target Return on Ad Spend (ROAS) of at least 3.2x and an Average Order Value (AOV) of $65.',
    scenario: 'LuxeGlow Skincare is struggling with rising CPAs ($42 vs $22 target), severe creative fatigue, tracking discrepancies post-iOS update, and an over-reliance on retargeting past customers. You must construct a resilient full-funnel architecture, implement CAPI server tracking with high Event Match Quality, launch a 3:2:2 dynamic creative testing matrix, configure Advantage+ Shopping with existing customer guardrails, and build an automated scaling protocol.',
    estimatedHours: '4 hours',
    learningObjectives: [
      'Architect a modern, scalable full-funnel e-commerce campaign structure (Prospecting + ASC + Dynamic Retargeting)',
      'Design a resilient dual-tracking architecture utilizing Meta Pixel and Conversions API (CAPI) with high EMQ',
      'Construct a 3:2:2 Dynamic Creative Testing (DCT) matrix with 6 distinct direct-response ad concepts',
      'Build Commerce Manager Product Catalogs with promotional overlays and product set segmentation',
      'Establish financial unit economics (Break-even ROAS, MER, Target CPA) and custom Ads Manager reporting',
      'Formulate a 30-day vertical and horizontal budget scaling roadmap with automated risk guardrails'
    ],
    requirements: [
      'Construct a 3-tier campaign architecture: Prospecting (ASC + Broad ABO), Middle-of-Funnel Engagers, and Bottom-of-Funnel DPA Retargeting',
      'Specify server-side Conversions API payload architecture with SHA-256 parameter hashing and deduplication event IDs',
      'Produce 6 distinct ad concepts across 3 visual formats (UGC Video, Founder Story, Product Carousel) with complete copy suites',
      'Configure Advantage+ Shopping Campaign with an existing customer budget cap of 10%',
      'Define Commerce Manager product set filters and custom promotional overlay frames',
      'Construct a 30-day budget scaling schedule with automated stop-loss and scale rules'
    ],
    deliverables: [
      '1. Executive E-commerce Business Model & Financial Unit Economics (AOV, Gross Margin 72%, Break-even ROAS 1.39x, Target ROAS 3.2x, Target CPA $20.30)',
      '2. Full-Funnel Account Architecture Blueprint (Tier 1: Cold Prospecting ASC & Broad ABO, Tier 2: Social/Video Engagers MOF, Tier 3: 3-Day/7-Day DPA Retargeting)',
      '3. Conversions API (CAPI) & Pixel Technical Tracking Map (Standard events: ViewContent, AddToCart, InitiateCheckout, Purchase; deduplication `event_id` and EMQ parameters)',
      '4. Audience Segmentation & Exclusion Matrix (Broad open targeting, 180-day purchaser exclusions from TOF, 30-day purchaser exclusions from BOF)',
      '5. Commerce Manager Product Catalog & Product Set Specification (Best Sellers Set, High Margin Serums Set, Custom Promo Overlay Badges)',
      '6. 3:2:2 Dynamic Creative Testing (DCT) Matrix (3 Visual Hooks, 2 Primary Text variations, 2 Headlines per test ad set)',
      '7. Six Complete Ad Creative Storyboards & Copywriting Suite (Concepts: Dermatologist Authority, UGC Routine, Split-Screen Texture, Founder Story, Problem-Agitation, Customer Review Carousel)',
      '8. Advantage+ Shopping Campaign (ASC) Configuration Specification (Existing customer definition, 10% spend cap, creative diversification)',
      '9. Dynamic Product Ad (DPA) Carousel Setup & Messaging Sequence (Day 1-3: Urgency & Cart Reminder, Day 4-7: Social Proof & Guarantee)',
      '10. Custom Ads Manager Reporting Dashboard & Attribution Windows (7-day click / 1-day view vs 1-day click only vs Blended MER)',
      '11. Automated Scaling Rules & Stop-Loss Guardrails (Rules: Scale +15% if 3-day ROAS >3.5x, Pause if spend >2x CPA with 0 purchases)',
      '12. 30-Day Budget Scaling Roadmap & Performance Recovery Playbook (Daily spend trajectory from $500/day to $1,500/day, triage steps for CPM surges)'
    ],
    rubric: [
      {
        criteria: 'Account Architecture & Full-Funnel Strategy',
        criterion: 'Account Architecture & Full-Funnel Strategy',
        weight: '25%',
        description: 'Disciplined campaign organization, clean audience exclusions, ASC customer caps, and dynamic retargeting integration.'
      },
      {
        criteria: 'Data Engineering & CAPI Telemetry Precision',
        criterion: 'Data Engineering & CAPI Telemetry Precision',
        weight: '25%',
        description: 'Comprehensive hybrid tracking map, deduplication logic, SHA-256 parameter hashing, and high EMQ standards.'
      },
      {
        criteria: 'Creative Testing & Direct-Response Copywriting',
        criterion: 'Creative Testing & Direct-Response Copywriting',
        weight: '25%',
        description: 'Diverse 3:2:2 testing matrix, persuasive angle development (UGC, authority, problem-aware), and multi-format assets.'
      },
      {
        criteria: 'Unit Economics, Scaling Protocols & Automated Rules',
        criterion: 'Unit Economics, Scaling Protocols & Automated Rules',
        weight: '25%',
        description: 'Flawless financial unit economics, 30-day budget scaling pacing, automated stop-loss rules, and blended MER governance.'
      }
    ],
    submissionChecklist: [
      'Verified 3-tier full-funnel structure with dedicated prospecting, engagement, and retargeting campaigns',
      'Configured CAPI server-side tracking architecture with deduplication keys and hashed user parameters',
      'Designed 6 complete ad concepts with distinct visual hooks, body copy, and headlines',
      'Specified Advantage+ Shopping Campaign with existing customer cap set to <=10%',
      'Constructed Commerce Manager product set filters and catalog overlay designs',
      'Formulated mathematical unit economics with break-even ROAS and target CPA benchmarks',
      'Defined automated scaling and stop-loss rules with specific metrics thresholds'
    ]
  }
};

// Intermediate Assessment Task
const INTERMEDIATE_ASSESSMENT_TASK = {
  id: 'fb-int-exam',
  title: 'Level 2: Official Intermediate Certification Exam',
  description: 'Pass the 30-question rigorous assessment to validate your mastery of Meta Ads tracking engineering, full-funnel architectures, creative testing, and scaling systems, unlocking Level 3 (Advanced).',
  level: 'intermediate',
  orderIndex: 16,
  status: 'locked',
  requiresQuiz: true,
  isFinalAssessment: true,
  type: 'quiz',
  duration: '60 mins',
  xpReward: 400,
  passingScore: 25,
  totalQuestions: 30,
  questions: INTERMEDIATE_ASSESSMENT
};

// Assemble all Intermediate tasks (14 Theory + 1 Project + 1 Assessment = 16 tasks)
const ALL_INTERMEDIATE_TASKS = [
  ...generateIntermediateTheoryModules(),
  INTERMEDIATE_PROJECT,
  INTERMEDIATE_ASSESSMENT_TASK
];

// Write out the file
const fileHeader = `import { Task, QuizQuestion } from '../../types/roadmap.types';\n\n`;
const assessmentExport = `export const FACEBOOK_ADS_INTERMEDIATE_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(INTERMEDIATE_ASSESSMENT, null, 2)};\n\n`;
const tasksExport = `export const FACEBOOK_ADS_INTERMEDIATE_TASKS: Task[] = ${JSON.stringify(ALL_INTERMEDIATE_TASKS, null, 2)};\n`;

fs.writeFileSync(targetFile, fileHeader + assessmentExport + tasksExport, 'utf-8');
console.log(`✅ Successfully generated Facebook Ads Intermediate data at: ${targetFile}`);
console.log(`   Tasks count: ${ALL_INTERMEDIATE_TASKS.length} (14 Theory + 1 Project + 1 Assessment)`);
console.log(`   MCQs count: ${INTERMEDIATE_ASSESSMENT.length} (Passing score: 25/30)`);
