const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/features/roadmap/data/instagram-ads/instagramAdsIntermediate.data.ts');
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 30 High-Quality Intermediate MCQs with balanced distribution (8 A, 7 B, 8 C, 7 D)
const INTERMEDIATE_ASSESSMENT = [
  {
    id: 1,
    topic: 'Advanced Campaign Architecture',
    question: 'In modern Meta campaign architecture, what is the primary structural advantage of consolidating multiple small ad sets into a single unified CBO campaign?',
    options: [
      'It eliminates auction fragmentation, consolidates statistical conversion signals to exit the Learning Phase rapidly, and maximizes algorithmic liquidity.',
      'It forces all ads to be delivered only to verified Instagram creator profiles.',
      'It automatically decreases product manufacturing costs on Shopify.',
      'It guarantees that every user sees the ad exactly 10 times per day.'
    ],
    correctAnswer: 0, // A
    explanation: 'Consolidated campaign structures pool budget and conversion data, preventing audience fragmentation and auction overlap while allowing Meta\'s Smart Delivery AI to allocate capital dynamically.'
  },
  {
    id: 2,
    topic: 'Conversions API (CAPI)',
    question: 'How does the Meta Conversions API (CAPI) improve data resilience and tracking accuracy compared to the standalone browser Pixel?',
    options: [
      'By replacing the need for an Instagram business profile.',
      'By transmitting standard web events (Purchase, Lead, AddToCart) directly from the advertiser\'s cloud server to Meta servers, bypassing ad blockers, browser privacy restrictions, and network drop-offs.',
      'By allowing ads to be displayed without internet connectivity.',
      'By automatically paying the user\'s mobile phone bill.'
    ],
    correctAnswer: 1, // B
    explanation: 'CAPI provides server-side event pipeline redundancy. When browser pixels are blocked by browser extensions, VPNs, or iOS privacy controls, server-side CAPI events ensure complete attribution.'
  },
  {
    id: 3,
    topic: 'Event Deduplication',
    question: 'When implementing both Meta Pixel (browser) and Conversions API (server) simultaneously, which two parameters are REQUIRED to prevent duplicate event counting?',
    options: [
      'The user\'s postal code and credit card expiration date',
      'The Instagram bio URL and follower count',
      'The `event_name` and a shared unique `event_id`',
      'The ad account billing invoice number and VAT ID'
    ],
    correctAnswer: 2, // C
    explanation: 'Meta uses the combination of `event_name` (e.g. Purchase) and a matching unique `event_id` (e.g. order_98231) to deduplicate redundant browser and server payloads within a 48-hour window.'
  },
  {
    id: 4,
    topic: 'Event Match Quality (EMQ)',
    question: 'What is the primary method to increase Meta Event Match Quality (EMQ) scores from Fair to Great (> 8.0/10)?',
    options: [
      'Increasing the daily campaign budget by 500%',
      'Switching all ad creative to animated GIFs',
      'Deleting all negative audience exclusions',
      'Passing comprehensive SHA-256 hashed customer parameters (email, phone, first/last name, city, state, zip, external_id, client_user_agent, client_ip_address, and fbp/fbc cookies)'
    ],
    correctAnswer: 3, // D
    explanation: 'Event Match Quality measures how effectively Meta can match server conversion events to user profiles. Sending rich hashed customer match keys (email, phone, name, IP, fbp, fbc) maximizes match rates.'
  },
  {
    id: 5,
    topic: 'Full-Funnel Segmentation',
    question: 'How does an advanced 3-tier full-funnel structure on Instagram segregate cold, warm, and hot audiences?',
    options: [
      'Top-of-Funnel (Cold Broad/Interests) excludes warm/hot; Middle-of-Funnel (IG 90d Engagers, 75% Video Viewers) retargets consideration; Bottom-of-Funnel (30d Website ViewContent/AddToCart) drives checkout conversions.',
      'All 3 tiers target the exact same 1% Lookalike audience with no exclusions.',
      'Tier 1 runs only on Facebook Desktop, Tier 2 on WhatsApp, and Tier 3 on Threads.',
      'Tier 1 targets children under 13, Tier 2 targets teens, and Tier 3 targets retirees.'
    ],
    correctAnswer: 0, // A
    explanation: 'Full-funnel architecture uses rigorous exclusions between tiers so prospecting budgets acquire net-new traffic, while tailored middle- and bottom-of-funnel ad sequences nurture and close high-intent prospects.'
  },
  {
    id: 6,
    topic: 'Audience Research & Competitor Intelligence',
    question: 'What intelligence can media buyers extract by systematically analyzing competitors in the Meta Ad Library?',
    options: [
      'The competitor\'s internal profit margins and exact employee payroll data.',
      'Long-running winning visual hooks, offer structures (bundles, BOGO), active messaging angles, creative formats (Reels vs Carousels), and landing page funnels.',
      'The competitor\'s private Stripe account password.',
      'The exact email addresses of everyone who commented on their ads.'
    ],
    correctAnswer: 1, // B
    explanation: 'The Meta Ad Library reveals creative longevity (ads running for 90+ days are profitable winners), active copy hooks, offer architectures, and landing page strategies across competitors.'
  },
  {
    id: 7,
    topic: 'Lookalike Testing Frameworks',
    question: 'What is the "Nested Lookalike Strategy" (1%, 1-2%, 2-5%) and why is exclusion modeling mandatory when deploying it?',
    options: [
      'It creates 10 identical ad sets with zero budget.',
      'It only allows ads to run during full moons.',
      'It tests expanding tiers of similarity while systematically excluding smaller tiers (e.g. 2-5% excludes 0-2%) to eliminate internal auction self-competition.',
      'It permanently disables conversion tracking on Shopify.'
    ],
    correctAnswer: 2, // C
    explanation: 'Nested lookalike structures test incremental reach tiers while using negative exclusions to ensure an advertiser does not bid against their own ad sets for the same users.'
  },
  {
    id: 8,
    topic: 'Instagram Reels Video Strategy',
    question: 'In high-converting direct-response Instagram Reels ads, what is the target benchmark for "Hook Rate" (3-second video views / impressions)?',
    options: [
      'Less than 2%',
      'Between 5% and 8%',
      'Exactly 100% on every campaign',
      'At least 25% to 35%+ on cold prospecting traffic'
    ],
    correctAnswer: 3, // D
    explanation: 'A healthy Reels Hook Rate on cold traffic is 25-35%+. If fewer than 25% of users watch past 3 seconds, the opening visual or auditory pattern interrupt is failing and must be iterated.'
  },
  {
    id: 9,
    topic: 'Instagram Stories Conversion Strategy',
    question: 'How should direct-response Instagram Stories ads be designed to maximize click-through and completion rates?',
    options: [
      'Multi-card sequential format (3 distinct cards) using interactive native stickers, bold clear value props, high-contrast captions, and immediate swipe/click prompts within safe zones.',
      'A 10-minute uninterrupted landscape documentary with no subtitles.',
      'A single low-resolution thumbnail with no text or call to action.',
      'An audio-only track with a black screen.'
    ],
    correctAnswer: 0, // A
    explanation: 'Stories thrive on multi-card storytelling (Hook -> Demonstration/Proof -> Offer/CTA) with native sticker elements and clear vertical visual direction guiding users to swipe or tap.'
  },
  {
    id: 10,
    topic: 'Dynamic Creative Testing (DCT)',
    question: 'What is the 3:2:2 Dynamic Creative Testing methodology in Meta Ads Manager?',
    options: [
      'Running ads for 3 minutes, pausing for 2 minutes, and repeating 2 times.',
      'Testing 3 Creatives (videos/images), 2 Primary Texts (copy angles), and 2 Headlines inside a single dynamic ad unit to identify the winning combination.',
      'Spending $3,000 on day one, $2,000 on day two, and $200 on day three.',
      'Targeting 3 countries, 2 cities, and 2 zip codes.'
    ],
    correctAnswer: 1, // B
    explanation: 'The 3:2:2 DCT framework is the gold standard for creative testing, feeding 3 assets, 2 copy angles, and 2 headlines into Meta machine learning to identify the highest ROAS dynamic combination.'
  },
  {
    id: 11,
    topic: 'Lead Generation on Instagram',
    question: 'When configuring Meta Instant Forms for high-ticket service or B2B lead generation, what is the best practice to maximize lead quality over raw lead volume?',
    options: [
      'Make all fields optional and pre-fill everything with fake data.',
      'Disable the privacy policy agreement screen.',
      'Use "Higher Intent" forms with custom multi-choice qualifying questions, custom review confirmation screens, and SMS/OTP verification.',
      'Only show ads between 3:00 AM and 4:00 AM.'
    ],
    correctAnswer: 2, // C
    explanation: 'Higher Intent forms introduce intentional friction (custom qualifying questions and a review screen) that filters out accidental submissions and dramatically improves lead close rates.'
  },
  {
    id: 12,
    topic: 'E-commerce Catalog Architecture',
    question: 'What is the role of Meta Dynamic Product Ads (DPA) and Advantage+ Catalog Ads in an e-commerce Instagram ads strategy?',
    options: [
      'They eliminate the need to ship physical orders to customers.',
      'They convert all Shopify product images into black-and-white drawings.',
      'They only display products that have been completely discontinued.',
      'They dynamically ingest product catalog data (price, title, inventory, imagery) and serve personalized product carousels to users based on their browsing behavior.'
    ],
    correctAnswer: 3, // D
    explanation: 'Catalog ads automatically synchronize with e-commerce product feeds (Shopify, WooCommerce) to dynamically display viewed, added-to-cart, or recommended products to prospective and returning shoppers.'
  },
  {
    id: 13,
    topic: 'Marketing Efficiency Ratio (MER) & Attribution',
    question: 'Why do enterprise performance brands evaluate the Blended Marketing Efficiency Ratio (Total Revenue / Total Paid Spend) alongside platform-reported ROAS?',
    options: [
      'Because in a post-iOS14 privacy landscape, platform-reported ROAS suffers from under-reporting and multi-touch attribution overlap, making total ecosystem revenue velocity the true financial compass.',
      'Because Meta Ads Manager permanently shut down its internal reporting tab.',
      'Because banks require MER to be calculated in foreign currencies only.',
      'Because platform ROAS is always 100% accurate without any tracking limitations.'
    ],
    correctAnswer: 0, // A
    explanation: 'Blended MER (or Blended ROAS) captures top-line financial reality across all paid media, compensating for privacy-related platform under-reporting, cookie degradation, and cross-channel halo effects.'
  },
  {
    id: 14,
    topic: 'Creator Partnership Ads',
    question: 'What is a Meta Partnership Ad (formerly Branded Content Whitelisted Ad) and what is its primary conversion benefit?',
    options: [
      'An ad where the creator pays Meta instead of the brand.',
      'An ad that displays both the creator\'s handle and brand\'s handle in the header, leveraging third-party creator credibility and native UGC aesthetics while utilizing the brand\'s ad account targeting and budget.',
      'An ad that can only be seen by the creator\'s immediate family members.',
      'An organic post that cannot have a clickable destination link.'
    ],
    correctAnswer: 1, // B
    explanation: 'Partnership Ads run directly through the creator\'s handle with a "Paid partnership with [Brand]" subheader. This third-party endorsement significantly increases thumb-stop rates, CTR, and trust.'
  },
  {
    id: 15,
    topic: 'Audience Overlap Diagnostics',
    question: 'What tool inside Meta Ads Manager allows advertisers to compare two custom or saved audiences to detect if they contain the same users?',
    options: [
      'The Billing Invoice History tool',
      'The Creative Hub 3D Mockup Generator',
      'The Audience Overlap Tool in Audiences Manager',
      'The Instant Form Exporter'
    ],
    correctAnswer: 2, // C
    explanation: 'The Audience Overlap tool compares up to 5 audiences, displaying the percentage of shared users to help advertisers prevent internal auction bidding self-competition.'
  },
  {
    id: 16,
    topic: 'Attribution Windows',
    question: 'What is the operational difference between Meta\'s "7-day click or 1-day view" attribution window and "1-day click only"?',
    options: [
      '7-day click is for mobile and 1-day click is for desktop.',
      '1-day click only works on Facebook Marketplace.',
      '7-day click is free while 1-day click costs $10 per conversion.',
      '7-day click or 1-day view attributes conversions occurring within 7 days of clicking or 24 hours of viewing the ad, whereas 1-day click strictly attributes conversions occurring within 24 hours of an explicit click.'
    ],
    correctAnswer: 3, // D
    explanation: 'Attribution settings dictate which conversion signals train the optimization model. 7-day click / 1-day view captures longer consideration cycles, while 1-day click focuses solely on immediate impulse clickers.'
  },
  {
    id: 17,
    topic: 'Post ID Extraction Workflow',
    question: 'Why do media buyers extract the winning "Existing Post ID" from successful Dynamic Creative ad sets and migrate it to scaling campaigns?',
    options: [
      'To preserve all accrued social proof (likes, comments, shares, video view counts) on a single permanent post asset as ad spend scales.',
      'To change the advertiser\'s company tax identification number.',
      'Because Meta charges double if you do not use Post IDs.',
      'To prevent the ad from appearing in search results.'
    ],
    correctAnswer: 0, // A
    explanation: 'Extracting the Post ID (Page Post with comments) allows scaling campaigns to carry over thousands of positive comments and likes, driving compounding social proof and lowering CPMs.'
  },
  {
    id: 18,
    topic: 'Frequency Management',
    question: 'If prospecting campaign frequency reaches 4.2 in a 7-day window and CPA increases by 65%, what is the proper remediation strategy?',
    options: [
      'Double the budget on the fatigued ad set immediately.',
      'Inject fresh creative concepts and new video hooks, broaden audience targeting parameters, or refresh cold audience seeds.',
      'Delete the Shopify store database.',
      'Switch all campaigns to brand awareness reach objectives.'
    ],
    correctAnswer: 1, // B
    explanation: 'High frequency paired with rising CPA is classic audience saturation and creative burnout. The correct fix is introducing net-new creative variations and widening audience reach.'
  },
  {
    id: 19,
    topic: 'First-Party Server Tracking',
    question: 'Why are `fbp` (browser ID) and `fbc` (click ID) cookies critical for maximizing Meta Conversions API match rates?',
    options: [
      'They control the brightness of the user\'s phone screen.',
      'They allow Meta to charge the user\'s credit card without authorization.',
      'They are Meta first-party identity identifiers that tie a server conversion payload directly to the specific ad impression and user session.',
      'They translate ad copy into Spanish automatically.'
    ],
    correctAnswer: 2, // C
    explanation: '`_fbp` and `_fbc` are Meta first-party cookie parameters generated on click/visit. Passing them in CAPI server payloads allows deterministic matching to the exact ad click event.'
  },
  {
    id: 20,
    topic: 'Creative Testing Sandbox',
    question: 'What is the architectural role of a "Creative Testing Sandbox" campaign in an intermediate media buying system?',
    options: [
      'To play video games during office hours.',
      'To run ads for competitors for free.',
      'To hide unapproved ads from Meta policy reviewers.',
      'An isolated ABO campaign with 15-20% of total budget dedicated strictly to testing new hooks, angles, and formats against a broad benchmark before graduating winners to scaling campaigns.'
    ],
    correctAnswer: 3, // D
    explanation: 'The sandbox environment isolates new unproven creative assets, ensuring low-risk validation without destabilizing the main scaling campaigns with erratic early-stage performance.'
  },
  {
    id: 21,
    topic: 'Video Retention Curve Analysis',
    question: 'When analyzing video retention drop-off curves in Meta Ads Manager, what does a sharp 70% viewer drop at second 2 indicate?',
    options: [
      'The opening hook failed to capture attention, was visually boring, or lacked immediate curiosity and relevant context.',
      'The user\'s battery died simultaneously across all devices.',
      'The call to action was too persuasive.',
      'The landing page server crashed.'
    ],
    correctAnswer: 0, // A
    explanation: 'A steep drop in the first 1-3 seconds proves that the visual hook or opening audio failed to create sufficient interest or pattern interruption to stop the thumb.'
  },
  {
    id: 22,
    topic: 'Cost Cap Bidding Mechanics',
    question: 'How does Cost Cap bidding differ from standard Highest Volume (Lowest Cost) bidding in Meta Ads?',
    options: [
      'Highest Volume guarantees a fixed profit margin on every sale.',
      'Cost Cap tells Meta\'s auction algorithm to only enter auctions and spend budget when it can achieve conversions at or below your specified target CPA limit.',
      'Cost Cap is only available for government organizations.',
      'Highest Volume disables ad delivery on mobile devices.'
    ],
    correctAnswer: 1, // B
    explanation: 'Cost Cap acts as an algorithmic ceiling, preventing Meta from spending budget in overpriced auctions if expected CPA exceeds the advertiser\'s defined target threshold.'
  },
  {
    id: 23,
    topic: 'Offer Architecture',
    question: 'In direct-response Instagram advertising, why is testing new "Offers" (e.g. Bundles, Free Gift with Purchase, Tiered Discounts) often more powerful than testing new copy fonts?',
    options: [
      'Because fonts cannot be seen on mobile screens.',
      'Because Meta bans all serif fonts.',
      'Because the commercial offer fundamentally changes the perceived value proposition, risk reversal, and economics for the consumer, unlocking new tranches of buyers.',
      'Because offers are only visible to Instagram influencers.'
    ],
    correctAnswer: 2, // C
    explanation: 'The offer is the commercial engine of direct response. A compelling offer with strong risk reversal (e.g., Buy 2 Get 1 Free + 60-Day Guarantee) can turn unprofitable traffic into massive winners.'
  },
  {
    id: 24,
    topic: 'Looker Studio Reporting Systems',
    question: 'What is the primary benefit of building an automated Looker Studio executive dashboard for Instagram and Meta advertising?',
    options: [
      'It automatically writes all ad copy using AI without human review.',
      'It replaces the need to pay for ad spend on Meta.',
      'It allows employees to play video games in the office.',
      'It unifies Meta Ads data, Google Analytics 4 sessions, and Shopify backend revenue into a single real-time source of truth for cross-channel MER and CAC analysis.'
    ],
    correctAnswer: 3, // D
    explanation: 'Looker Studio centralizes paid media spend, web analytics, and actual net revenue from e-commerce/CRM databases, giving leadership holistic visibility without platform bias.'
  },
  {
    id: 25,
    topic: 'Dynamic Product Carousel Optimization',
    question: 'What visual customization enhances the click-through rate of Instagram Dynamic Catalog Carousel ads?',
    options: [
      'Adding dynamic price strike-through overlays, custom brand logo badges, and high-contrast promotional borders.',
      'Replacing product images with solid black squares.',
      'Removing all product titles and descriptions completely.',
      'Only showing products that are out of stock.'
    ],
    correctAnswer: 0, // A
    explanation: 'Catalog creative overlays (automatic price tags, discount badges, frame overlays, ratings) significantly elevate standard white-background product feeds to eye-catching direct response units.'
  },
  {
    id: 26,
    topic: 'Audience Saturation Diagnostics',
    question: 'What Meta Ads Manager metric chart reveals the percentage of your audience reached that are seeing your ad for the very first time?',
    options: [
      'The Page Likes Graph',
      'The First-Time Impression Ratio (FTIR) in the Delivery Inspection tab',
      'The Account Billing Receipt chart',
      'The Instagram Direct Message count'
    ],
    correctAnswer: 1, // B
    explanation: 'First-Time Impression Ratio measures the share of daily impressions served to people who have never seen your ad before. A declining FTIR indicates rising audience saturation.'
  },
  {
    id: 27,
    topic: 'UGC Creator Briefing Protocols',
    question: 'When commissioning User-Generated Content (UGC) creators for Instagram Reels ads, what should a professional creative brief specify?',
    options: [
      'Ask the creator to film in a movie studio with 35mm film.',
      'Tell the creator to make whatever they want with zero guidelines.',
      'Mandate 9:16 vertical framing, 3 alternative hook variations, natural lighting, safe zone margins, problem-solution pacing, and on-screen demonstration within 30 seconds.',
      'Instruct the creator not to show the product on camera.'
    ],
    correctAnswer: 2, // C
    explanation: 'A rigorous UGC brief details vertical framing, 3-second hook variations, key messaging points, safe zones, lighting, and explicit calls to action while preserving authentic creator delivery.'
  },
  {
    id: 28,
    topic: 'A/B Split Testing Protocols',
    question: 'What is the methodological requirement to conduct a scientifically valid Meta Experiments A/B split test between two creative concepts?',
    options: [
      'Run one ad in January and the second ad in July on different accounts.',
      'Show both ads to the same person 50 times in one hour.',
      'Change the product price, the headline, the landing page, and the video simultaneously.',
      'Ensure the audience is split randomly into non-overlapping groups with equal budget allocation and a single isolated variable tested concurrently.'
    ],
    correctAnswer: 3, // D
    explanation: 'Valid A/B testing isolates a single variable (e.g. Creative A vs Creative B) across randomized, mutually exclusive audience segments to achieve statistical significance without overlap bias.'
  },
  {
    id: 29,
    topic: 'High-AOV Scaling Strategies',
    question: 'For high Average Order Value ($150+) products on Instagram, why is introducing an "Unboxing + Long-Form Demonstration" Reels ad often necessary?',
    options: [
      'Higher-priced items require greater trust building, detailed feature education, and perceived value justification to overcome purchase hesitation.',
      'Because Meta prohibits short videos for expensive products.',
      'Because expensive products cannot be sold through checkout pages.',
      'To force users to spend more time on Instagram.'
    ],
    correctAnswer: 0, // A
    explanation: 'High-AOV consideration cycles require thorough product demonstrations, unboxing tactile experiences, and social proof to justify higher price points and lower purchase anxiety.'
  },
  {
    id: 30,
    topic: 'Account Structure Consolidation',
    question: 'What is the "Simplified Account Structure" recommended by Meta for modern machine learning optimization?',
    options: [
      'Creating 500 campaigns with 1 ad set each spending $1 per day.',
      'Consolidating into 1-2 primary prospecting campaigns (CBO/ASC) with broad targeting and 1 consolidated retargeting campaign, maximizing data liquidity and reducing auction overlap.',
      'Running all ads on personal Facebook profiles only.',
      'Deleting all ad accounts and running print newspaper ads.'
    ],
    correctAnswer: 1, // B
    explanation: 'Simplified account structures eliminate fragmentation by pooling budget and conversion data into 1-2 broad CBO/ASC campaigns, giving Meta AI the volume required for optimal auction clearing.'
  }
];

// Helper to generate 14 rich intermediate theory modules
function generateIntermediateModules() {
  const moduleTitles = [
    { title: 'Advanced Instagram Campaign Architecture', id: 'ig-int-01' },
    { title: 'Instagram Funnel Strategy', id: 'ig-int-02' },
    { title: 'Pixel, Conversions API and Event Tracking', id: 'ig-int-03' },
    { title: 'Event Prioritization and Data Quality', id: 'ig-int-04' },
    { title: 'Advanced Audience Research', id: 'ig-int-05' },
    { title: 'Custom Audience Segmentation', id: 'ig-int-06' },
    { title: 'Lookalike Strategy and Audience Testing', id: 'ig-int-07' },
    { title: 'Instagram Reels Advertising Strategy', id: 'ig-int-08' },
    { title: 'Instagram Stories Conversion Strategy', id: 'ig-int-09' },
    { title: 'Creative Testing and Iteration', id: 'ig-int-10' },
    { title: 'Lead Generation Campaigns', id: 'ig-int-11' },
    { title: 'E-commerce Sales Campaigns', id: 'ig-int-12' },
    { title: 'Reporting, Attribution and Optimization', id: 'ig-int-13' },
    { title: 'Creator Partnerships & Whitelisted Ad Sequences', id: 'ig-int-14' }
  ];

  const modules = [];

  for (let i = 0; i < moduleTitles.length; i++) {
    const { title, id } = moduleTitles[i];
    const modNum = i + 1;

    modules.push({
      id: id,
      title: `${modNum}. ${title}`,
      description: `Master ${title.toLowerCase()} with actionable intermediate frameworks, CAPI server tracking architectures, Reels creative systems, and full-funnel scaling workflows.`,
      level: 'intermediate',
      orderIndex: modNum,
      status: 'locked',
      requiresQuiz: false,
      type: 'theory',
      duration: '50 mins',
      xpReward: 160,
      lessonContent: {
        overview: `Intermediate production-level masterclass module covering ${title.toLowerCase()} inside Meta Ads Manager. Master server-side Conversions API integration, dynamic creative testing matrices, Reels retention curve scripting, and holistic MER attribution models.`,
        analogyHero: `Think of ${title.toLowerCase()} like an industrial-grade telemetry and propulsion system: by routing raw first-party data signals into Meta machine learning and fueling the engine with high-velocity creative variations, your paid social infrastructure scales smoothly without auction friction.`,
        objectives: [
          `Architect advanced, scalable configurations for ${title.toLowerCase()}`,
          `Implement production-grade tracking, Event Match Quality optimization, and deduplication protocols`,
          `Analyze multi-tier funnel metrics, video retention drop-off curves, and marginal CPA scaling limits`,
          `Execute structured A/B testing and creative iteration frameworks for continuous performance growth`
        ],
        estimatedTime: '50 mins',
        keyTakeaways: [
          'Consolidate account architecture to maximize algorithmic liquidity and exit the Learning Phase rapidly.',
          'Enforce strict server-side CAPI event deduplication and hashed parameter matching for robust data quality.',
          'Deploy systematic 3:2:2 Dynamic Creative Testing to discover compounding winning visual hooks.'
        ],
        summary: `Mastering ${title.toLowerCase()} equips you with the technical depth and strategic media buying frameworks required to scale 6- and 7-figure Instagram advertising systems.`,
        syntaxGuide: '// Advanced Media Buying Calculations:\nHook_Rate = (3s_Video_Views / Impressions) * 100\nHold_Rate = (ThruPlays / 3s_Video_Views) * 100\nMER = Total_Store_Revenue / Total_Ad_Spend\nEMQ_Target = > 8.0 / 10.0 (Event Match Quality)\nMarginal_CAC = (Delta_Spend / Delta_New_Customers)',
        practiceExercises: [
          {
            title: `${title} Architecture & Optimization Challenge`,
            instructions: `Review an intermediate scaling scenario for ${title.toLowerCase()}. Diagnose event tracking discrepancies, analyze creative fatigue metrics, and build a 4-step remediation action plan.`,
            starterCode: `// Configure intermediate diagnostic evaluation for ${title}\ninterface FunnelAudit {\n  mer: number;\n  hookRate: number;\n  holdRate: number;\n  emqScore: number;\n  targetCpa: number;\n}\n\nfunction auditIntermediateScenario(input: FunnelAudit) {\n  return {\n    healthRating: '',\n    remediationRoadmap: [] as string[]\n  };\n}`,
            solutionCode: `function auditIntermediateScenario(input: FunnelAudit) {\n  const isHealthyCapi = input.emqScore >= 8.0;\n  const isHealthyHook = input.hookRate >= 30.0;\n  const isHealthyMer = input.mer >= 3.0;\n\n  const remediationRoadmap = [\n    !isHealthyCapi ? 'Deploy CAPI server parameters (_fbp, _fbc, external_id) to lift EMQ > 8.0' : 'Tracking signal is robust',\n    !isHealthyHook ? 'Iterate 3 new 3-second opening Reels hooks with high-contrast text overlays' : 'Creative hook rate is strong',\n    !isHealthyMer ? 'Rebalance budget allocation between Broad Prospecting (80%) and Dynamic Retargeting (20%)' : 'MER profitability is on target'\n  ];\n\n  return {\n    healthRating: isHealthyCapi && isHealthyHook && isHealthyMer ? 'OPTIMIZED_FOR_SCALE' : 'REMEDIATION_REQUIRED',\n    remediationRoadmap\n  };\n}`
          }
        ],
        sections: [
          {
            id: `sec-${id}-1`,
            title: `1. Core Architectural Systems of ${title}`,
            difficulty: 'Intermediate',
            content: `Mastering ${title.toLowerCase()} requires transitioning from tactical ad button pushing to holistic system architecture. In modern paid social, account liquidity and signal density govern performance.\n\n### Architectural Pillars\n- **Consolidation**: Grouping ad sets to exceed the 50 conversions/week Learning Phase threshold.\n- **Signal Redundancy**: Dual-tagging via browser Pixel and Cloud Conversions API with unique \`event_id\` deduplication.\n- **Creative Velocity**: Building systematic production pipelines for 9:16 vertical video and creator partnership assets.`,
            explanation: `Robust infrastructure guarantees that Meta auction algorithms receive clean, unfragmented conversion signals to optimize delivery dynamically.`,
            codeSnippets: [
              {
                filename: `module_${modNum}_architecture.json`,
                language: 'json',
                title: `${title} — Production Multi-Tier Architecture Blueprint`,
                code: `{\n  "architecture": "${title}",\n  "level": "Intermediate",\n  "telemetry": {\n    "conversionsApi": "Active Cloud Gateway",\n    "eventDeduplicationKey": "event_id",\n    "targetEMQ": 8.5,\n    "hashedParameters": ["em", "ph", "fn", "ln", "ct", "st", "zp", "fbp", "fbc"]\n  },\n  "funnelStructure": {\n    "prospectingCBO": "80% Budget Allocation",\n    "retargetingDPA": "20% Budget Allocation",\n    "attributionSetting": "7-day click or 1-day view"\n  }\n}`,
                lineByLine: [
                  { line: '"eventDeduplicationKey": "event_id"', explanation: 'Critical parameter ensuring browser and server events are merged without double-counting.' },
                  { line: '"targetEMQ": 8.5', explanation: 'Target Event Match Quality ensuring 85%+ deterministic user profile matching.' }
                ]
              }
            ],
            miniPractice: {
              question: `Why is server-side event deduplication mandatory when running CAPI alongside the Meta browser Pixel?`,
              options: [
                'To prevent Meta from counting the same purchase twice, which would inflate reported ROAS and distort auction bidding algorithms',
                'To automatically double the advertiser\'s website loading speed',
                'To bypass state sales taxes on Shopify checkouts',
                'To make all ad videos appear in slow motion'
              ],
              correctAnswer: 0,
              explanation: 'Without deduplication, both browser and server payloads for a single order would be recorded as 2 separate conversions, severely corrupting bidding optimization.'
            },
            proTip: `Generate unique UUIDs on the backend (e.g. \`order_uuid_10293\`) and pass identical IDs to both the \`fbq('track', ...)\` client call and CAPI server payload.`,
            commonMistakes: [
              'Sending CAPI events without matching `event_id` and `event_name` parameters.',
              'Failing to hash email and phone customer data with SHA-256 before transmission.'
            ]
          },
          {
            id: `sec-${id}-2`,
            title: `2. Tactical Execution & Advanced Implementation Protocols`,
            difficulty: 'Intermediate',
            content: `Deploying ${title.toLowerCase()} in high-growth accounts requires a structured 4-step implementation sequence:\n\n1. **Data Pipeline Validation**: Test server-side CAPI event delivery in Events Manager Test Events tab and audit EMQ scores.\n2. **Creative Testing Matrix**: Launch 3:2:2 Dynamic Creative Testing ad sets to validate winning hook, copy, and headline combinations.\n3. **Post ID Migration**: Extract the generated Post ID of winning variations and deploy them into the primary CBO scaling campaign.\n4. **Attribution & Blended MER Monitoring**: Track daily Blended ROAS in Looker Studio to scale ad spend in alignment with real cash flow.`,
            explanation: `This systematic operating procedure isolates testing from scaling, ensuring consistent return on ad spend during budget expansion.`,
            codeSnippets: [
              {
                filename: `module_${modNum}_script.ts`,
                language: 'typescript',
                title: `${title} — Dynamic Creative Scaling Validator`,
                code: `export interface CreativeTestResult {\n  adId: string;\n  hookRate: number;\n  holdRate: number;\n  linkCtr: number;\n  cpa: number;\n  conversions: number;\n}\n\nexport function evaluateForScaling(test: CreativeTestResult, targetCpa: number): boolean {\n  const isHookWinner = test.hookRate >= 30.0;\n  const isCtrWinner = test.linkCtr >= 2.0;\n  const isCpaWinner = test.cpa <= targetCpa && test.conversions >= 10;\n\n  return isHookWinner && isCtrWinner && isCpaWinner;\n}`,
                lineByLine: [
                  { line: 'const isHookWinner = test.hookRate >= 30.0;', explanation: 'Standard benchmark for top-decile 9:16 vertical video hooks.' },
                  { line: 'return isHookWinner && isCtrWinner && isCpaWinner;', explanation: 'Strict 3-point gate required before graduating asset to CBO scaling.' }
                ]
              }
            ],
            miniPractice: {
              question: `What is the primary benefit of migrating the winning "Post ID" from a Dynamic Creative ad set to a scaling campaign?`,
              options: [
                'It changes the video resolution to 8K automatically',
                'It carries over all accumulated social proof (likes, comments, shares, views), boosting engagement and algorithmic auction efficiency',
                'It disables user comments completely',
                'It forces Instagram to show the ad on televisions only'
              ],
              correctAnswer: 1,
              explanation: 'Reusing the Post ID preserves all social proof accrued during testing, providing strong psychological validation to new viewers.'
            },
            proTip: `Use Meta Ads Manager "Page Posts" menu to easily copy the numeric Post ID of top-performing dynamic ad variations.`,
            commonMistakes: [
              'Duplicating ads as new creative units instead of referencing the original Post ID, losing all social proof.',
              'Graduating creative winners before they achieve at least 10 statistically significant conversions.'
            ]
          },
          {
            id: `sec-${id}-3`,
            title: `3. Troubleshooting, Diagnostic Triage & Live Scaling Scenarios`,
            difficulty: 'Intermediate',
            content: `As accounts scale past $20,000/month, complex delivery and auction bottlenecks emerge. Systematic triage prevents knee-jerk reactions.\n\n### Enterprise Diagnostic Scenarios\n- **Scenario A: High Frequency (>3.5) with Rising CPA**: Indicates creative fatigue. Solution: Launch a fresh 3:2:2 DCT sandbox with 3 new visual hook concepts.\n- **Scenario B: Strong Link CTR (>2.5%) but Zero Add-to-Carts**: Indicates landing page disconnect or slow mobile load time. Solution: Optimize mobile First Contentful Paint (<1.2s) and test 1-click checkout.\n- **Scenario C: Platform ROAS Drops but Blended MER Remains High**: Indicates attribution under-reporting due to privacy controls. Solution: Maintain spend and verify actual Shopify net sales before cutting budgets.`,
            explanation: `Holistic diagnostic triage ensures capital is allocated according to business-level profitability rather than siloed platform metrics.`,
            codeSnippets: [
              {
                filename: `module_${modNum}_triage.json`,
                language: 'json',
                title: `${title} — Intermediate Scaling Diagnostic Triage Matrix`,
                code: `{\n  "scalingDiagnostics": {\n    "creativeFatigue": {\n      "indicator": "Frequency > 3.0 AND CTR down > 25% over 7 days",\n      "remedy": "Deploy 3 UGC Reels variations with alternate 3s visual pattern interrupts"\n    },\n    "trackingDiscrepancy": {\n      "indicator": "EMQ score < 7.0 OR > 15% discrepancy vs Shopify orders",\n      "remedy": "Verify CAPI server event serialization and ensure customer email/phone hashing is enabled"\n    },\n    "learningLimited": {\n      "indicator": "Ad set produces < 50 conversions in 7-day window",\n      "remedy": "Consolidate narrow ad sets into Broad CBO or increase daily budget to 4x Target CPA"\n    }\n  }\n}`,
                lineByLine: [
                  { line: '"indicator": "Frequency > 3.0 AND CTR down > 25%..."', explanation: 'Algorithmic signal indicating creative exhaustion in the audience pool.' },
                  { line: '"remedy": "Consolidate narrow ad sets..."', explanation: 'Structural solution to solve the Learning Limited delivery bottleneck.' }
                ]
              }
            ],
            miniPractice: {
              question: `When an ad set enters "Learning Limited" status, what is the most effective architectural fix?`,
              options: [
                'Increase the daily budget to at least 4-5x target CPA or consolidate multiple narrow ad sets into a single broad audience to concentrate conversion data',
                'Create 50 new ad accounts and split the budget across all of them',
                'Delete the Meta Pixel from your website',
                'Turn off all ads for 3 weeks'
              ],
              correctAnswer: 0,
              explanation: 'Learning Limited occurs when an ad set generates <50 conversions/week. Consolidating ad sets or increasing budget concentrates conversion density to exit the phase.'
            },
            proTip: `Calculate your minimum daily budget requirement per ad set using the formula: \`Daily_Budget = (Target_CPA * 50) / 7\`.`,
            commonMistakes: [
              'Spreading a $50/day budget across 8 different ad sets, ensuring none of them can ever exit the Learning Phase.',
              'Making daily budget cuts during normal midweek conversion volume fluctuations.'
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
  id: 'ig-int-proj',
  title: '15. Intermediate Capstone Project: Full-Funnel Instagram Ads Campaign',
  description: 'Architect, configure, and optimize an omnichannel full-funnel Instagram advertising and CAPI tracking system for a multi-product e-commerce brand.',
  level: 'intermediate',
  orderIndex: 15,
  status: 'locked',
  requiresQuiz: false,
  isProject: true,
  type: 'project',
  duration: '240 mins',
  xpReward: 500,
  projectDetails: {
    brief: 'You are the Senior Performance Marketing Strategist hired by Lumina Activewear, a high-growth premium athletic apparel brand with $35,000/month in ad spend scaling toward $100,000/month. The brand requires a complete full-funnel Instagram advertising architecture, server-side CAPI tracking integration, 3:2:2 creative testing pipelines, and executive Looker Studio reporting.',
    overview: 'You are the Senior Performance Marketing Strategist hired by Lumina Activewear, a high-growth premium athletic apparel brand with $35,000/month in ad spend scaling toward $100,000/month. The brand requires a complete full-funnel Instagram advertising architecture, server-side CAPI tracking integration, 3:2:2 creative testing pipelines, and executive Looker Studio reporting.',
    scenario: 'Lumina Activewear is struggling with rising CPAs, fragmented ad accounts, and iOS tracking signal loss. You must restructure their account into a consolidated 2-tier architecture (Scaling CBO + Testing ABO), deploy server-side Conversions API with hashed match keys, script 9:16 Reels UGC, and establish a 90-day budget scaling roadmap.',
    estimatedHours: '4 hours',
    learningObjectives: [
      'Architect an enterprise 2-tier consolidated Meta campaign structure (Scaling CBO + Creative Testing Sandbox)',
      'Design and document a complete Server-Side Conversions API (CAPI) data pipeline with event deduplication',
      'Build a comprehensive full-funnel audience segmentation plan with strict negative exclusion hygiene',
      'Create a 3:2:2 Dynamic Creative Testing matrix with 9:16 Reels video scripts and 3-card Stories sequences',
      'Develop an automated Looker Studio executive dashboard schema for cross-channel MER and Blended ROAS tracking',
      'Establish a 90-day scaling and budget ramping roadmap from $35,000 to $100,000/month'
    ],
    requirements: [
      'Implement a 2-tier account architecture: 1 Scaling CBO Campaign (80% spend) and 1 Creative Testing Sandbox ABO Campaign (20% spend)',
      'Document server-side CAPI event architecture with unique `event_id` generation for ViewContent, AddToCart, InitiateCheckout, and Purchase',
      'Define full-funnel audience segments (Cold Broad, Cold Lookalike 1-2%, Warm IG Engagers 90d, Hot 30d Cart Abandoners) with negative exclusions',
      'Provide complete production scripts for 2 distinct 9:16 Reels UGC ads and 1 3-card sequential Stories ad',
      'Include a Creator Partnership ad strategy and whitelisting workflow',
      'Construct a 90-day scaling calendar detailing weekly budget adjustments and ad fatigue mitigation decision trees'
    ],
    deliverables: [
      {
        id: 'int-del-01',
        title: '1. Executive Business Brief & Unit Economic Model',
        description: 'Detail target customer cohorts, product line margin contributions (AOV $92, COGS $28), break-even ROAS (1.44x), and target scaling ROAS (2.80x).',
        expectedOutput: 'Comprehensive unit economics model and executive growth strategy roadmap.'
      },
      {
        id: 'int-del-02',
        title: '2. 2-Tier Multi-Campaign Account Architecture',
        description: 'Map out the consolidated structure: Campaign 1 [SCALE_CBO] (Broad Prospecting + Dynamic Retargeting) and Campaign 2 [TEST_ABO] (3:2:2 Sandbox).',
        expectedOutput: 'Visual account architecture flowchart and campaign naming standard matrix.'
      },
      {
        id: 'int-del-03',
        title: '3. Server-Side CAPI Tracking & Event Deduplication Blueprint',
        description: 'Define the server-side payload schema with SHA-256 hashed customer parameters (em, ph, fn, ln, zip) and shared `event_id` generation.',
        expectedOutput: 'Technical CAPI integration specification targeting Event Match Quality > 8.5/10.'
      },
      {
        id: 'int-del-04',
        title: '4. Full-Funnel Audience Segmentation & Exclusion Matrix',
        description: 'Construct the audience map detailing Top-of-Funnel (Broad Open + 1-2% Lookalikes), Middle-of-Funnel (90d IG Engagers), and Bottom-of-Funnel (30d Cart Abandoners).',
        expectedOutput: 'Exclusion matrix table proving zero internal auction overlap between funnel tiers.'
      },
      {
        id: 'int-del-05',
        title: '5. 3:2:2 Dynamic Creative Testing (DCT) Matrix',
        description: 'Define 3 visual creative assets (2 UGC Reels, 1 Feature Carousel), 2 primary copy angles (Performance vs Aesthetics), and 2 headlines.',
        expectedOutput: 'Completed testing matrix with statistical graduation criteria (10+ conversions at <= target CPA).'
      },
      {
        id: 'int-del-06',
        title: '6. 9:16 Reels Direct-Response UGC Production Script',
        description: 'Write a full 45-second vertical script featuring 3 distinct opening hook variations, fabric stretch demonstration, customer review proof, and directive CTA.',
        expectedOutput: 'Two-column audio/visual script with on-screen subtitle copy and safe zone boundary guides.'
      },
      {
        id: 'int-del-07',
        title: '7. 3-Card Sequential Stories Conversion Creative Storyboard',
        description: 'Develop a 3-card sequential Stories conversion unit (Card 1: Problem hook, Card 2: Breathability demo, Card 3: 20% bundle offer + swipe sticker).',
        expectedOutput: 'Visual storyboard layout with typography safe zones and native interactive sticker placements.'
      },
      {
        id: 'int-del-08',
        title: '8. Creator Partnership & Whitelisted Ad Strategy',
        description: 'Outline the creator outreach, Partnership ad permission code generation, rights licensing agreement, and whitelisted ad set structure.',
        expectedOutput: 'Creator management SOP and Partnership Ad configuration walkthrough.'
      },
      {
        id: 'int-del-09',
        title: '9. Native Lead Form & B2B Wholesaler Expansion Plan',
        description: 'Design a higher-intent Instant Form capturing fitness studio wholesale distribution leads with custom qualifying questions.',
        expectedOutput: 'Lead form configuration with CRM webhook integration and speed-to-lead automation routing.'
      },
      {
        id: 'int-del-10',
        title: '10. Looker Studio Executive Dashboard Schema',
        description: 'Design the reporting schema connecting Meta Ads API, GA4, and Shopify to report Blended MER, NC-CPA, and ROAS in real time.',
        expectedOutput: 'Dashboard mock-up specification with calculated metric formulas and executive KPI summary.'
      },
      {
        id: 'int-del-11',
        title: '11. Ad Fatigue & Frequency Management Decision Tree',
        description: 'Build a decision logic flowchart addressing rising frequency, declining First-Time Impression Ratio, and creative rotation triggers.',
        expectedOutput: 'Operational decision tree detailing exact action protocols when frequency exceeds 3.5.'
      },
      {
        id: 'int-del-12',
        title: '12. 90-Day Scaling & Budget Ramping Roadmap ($35k to $100k/mo)',
        description: 'Construct a weekly capital deployment schedule modeling 15-20% incremental budget increases, inventory buffer requirements, and cash flow pacing.',
        expectedOutput: '12-week financial scaling model forecasting spend, revenue, customer acquisition cost, and gross margin.'
      }
    ],
    rubric: [
      {
        criteria: 'Architecture & Full-Funnel Integrity',
        points: 25,
        description: 'Consolidated 2-tier architecture (CBO + DCT) with rigorous audience exclusions and zero auction fragmentation.'
      },
      {
        criteria: 'Server-Side CAPI & Technical Tracking Depth',
        points: 25,
        description: 'Robust CAPI specification with hashed parameters, deduplication logic, and EMQ > 8.5 target.'
      },
      {
        criteria: 'Creative Systems & Direct-Response Scripting',
        points: 25,
        description: 'High-converting 3:2:2 testing matrix, 9:16 UGC scripts with 3 hook variations, and 3-card Stories sequence.'
      },
      {
        criteria: 'Financial Modeling & Scaling Roadmap',
        points: 25,
        description: 'Flawless 90-day budget scaling model ($35k to $100k), Looker Studio dashboard schema, and fatigue decision tree.'
      }
    ],
    tips: [
      'Always graduate winning DCT combinations using their original Post ID to retain accumulated social proof.',
      'Maintain an 80/20 budget ratio between scaling and testing campaigns to ensure revenue stability.',
      'Monitor Blended MER in real time rather than relying solely on platform-reported ROAS.'
    ]
  }
};

// Final Certification Exam Task
const INTERMEDIATE_EXAM = {
  id: 'ig-int-exam',
  title: '16. Official Intermediate Certification Assessment',
  description: 'Demonstrate intermediate mastery of advanced campaign architecture, CAPI server tracking, audience research, Reels creative systems, dynamic testing, lead generation, and MER optimization.',
  level: 'intermediate',
  orderIndex: 16,
  status: 'locked',
  duration: '45 min',
  requiresQuiz: true,
  xpReward: 450,
  isProject: false,
  isFinalAssessment: true,
  passingScore: 25,
  totalQuestions: 30,
  questions: INTERMEDIATE_ASSESSMENT,
  tags: ['Certification', 'Exam', 'Intermediate Assessment', 'MCQ']
};

const allTasks = [...generateIntermediateModules(), INTERMEDIATE_PROJECT, INTERMEDIATE_EXAM];

const fileContent = `import { Task, QuizQuestion } from '../../types/roadmap.types';\n\nexport const INSTAGRAM_ADS_INTERMEDIATE_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(INTERMEDIATE_ASSESSMENT, null, 2)};\n\nexport const INSTAGRAM_ADS_INTERMEDIATE_TASKS: Task[] = ${JSON.stringify(allTasks, null, 2)};\n`;

fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log('✅ Generated instagramAdsIntermediate.data.ts with 14 theory modules, 1 project (12 deliverables), and 30 MCQs.');
