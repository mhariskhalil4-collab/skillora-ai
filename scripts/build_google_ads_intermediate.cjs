const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/features/roadmap/data/google-ads/googleAdsIntermediate.data.ts');
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 30 High-Quality Intermediate MCQs
const INTERMEDIATE_ASSESSMENT = [
  {
    id: 1,
    topic: 'Google Tag Manager Conversion Linker',
    question: 'Why must the Conversion Linker tag be configured to fire on "All Pages" in Google Tag Manager for Google Ads conversion tracking?',
    options: [
      'To compress the HTML and CSS of your landing page for faster loading',
      'To store ad click information in first-party cookies, ensuring conversion measurement survives third-party cookie blocking and iOS ITP restrictions',
      'To automatically translate the website into 20 languages',
      'To block search competitor IP addresses from visiting the website'
    ],
    correctAnswer: 1, // B
    explanation: 'The Conversion Linker tag detects ad click information (such as the GCLID parameter in URL strings) and stores it in first-party cookies on your domain, ensuring reliable attribution even in modern privacy-restricted browsers.'
  },
  {
    id: 2,
    topic: 'GA4 and Google Ads Linking',
    question: 'When importing conversions from Google Analytics 4 (GA4) into Google Ads alongside native Google Ads Tag conversion tracking, what is the critical step to avoid duplicate conversion counting?',
    options: [
      'Delete the entire Google Analytics 4 property immediately',
      'Set one conversion action as Primary (for Smart Bidding) and the other as Secondary (for Observation/Reporting only)',
      'Change all campaign budgets to $0 for 48 hours',
      'Rename all GA4 event names to start with "gads_"'
    ],
    correctAnswer: 1, // B
    explanation: 'If both the Google Ads native tag purchase event and the imported GA4 purchase event are marked as Primary, Google Ads will double-count conversions, causing Smart Bidding algorithms to inflate bids based on false data.'
  },
  {
    id: 3,
    topic: 'Quality Score Diagnosis',
    question: 'A high-volume keyword has an overall Quality Score of 4/10. Diagnostics show Expected CTR is "Above Average", Ad Relevance is "Above Average", but Landing Page Experience is "Below Average". What is the primary fix?',
    options: [
      'Write 15 new headlines in the Responsive Search Ad',
      'Increase page load speed (<2s), improve mobile UX responsiveness, ensure landing page headline directly matches the keyword, and remove intrusive popups',
      'Raise the Maximum CPC bid by 300%',
      'Add 50 new broad match keywords to the ad group'
    ],
    correctAnswer: 1, // B
    explanation: 'Since Expected CTR and Ad Relevance are already Above Average, the sole bottleneck dragging Quality Score down to 4/10 is Landing Page Experience. Optimizing page speed, mobile layout, relevant copy, and user trust directly solves the issue.'
  },
  {
    id: 4,
    topic: 'Target CPA (tCPA) Bidding Mechanics',
    question: 'What is the prerequisite and recommended volume before switching a campaign from Manual CPC to automated Target CPA (tCPA) Smart Bidding?',
    options: [
      'Zero conversions and 1 day of campaign history',
      'At least 30 (ideally 50+) recorded conversions in the last 30 days with stable conversion tracking data',
      'At least $50,000 in monthly ad spend',
      'A minimum Quality Score of 10/10 on every keyword'
    ],
    correctAnswer: 1, // B
    explanation: 'Smart Bidding machine learning requires sufficient conversion density (typically 30–50 conversions in a 30-day window) to accurately model auction-time signals (device, location, time, browser, user search history) and predict conversion probability.'
  },
  {
    id: 5,
    topic: 'Target ROAS (tROAS) Formula',
    question: 'An e-commerce retailer generates $25,000 in revenue from $5,000 in Google Ads spend. What is their achieved Return on Ad Spend (ROAS)?',
    options: [
      '200%',
      '500% (or 5.0x)',
      '1,250%',
      '50%'
    ],
    correctAnswer: 1, // B
    explanation: 'ROAS is calculated as (Total Conversion Value / Total Ad Spend) × 100%. Here, ($25,000 / $5,000) × 100% = 500% (or 5.0x ROAS).'
  },
  {
    id: 6,
    topic: 'Search Terms Mining Workflow',
    question: 'When reviewing the Search Terms report, an advertiser sees 85 clicks on the query "free commercial hvac manual pdf". What action must be taken immediately?',
    options: [
      'Increase the keyword bid by $2.00',
      'Add "free", "manual", and "pdf" as negative keywords at the campaign or shared list level',
      'Create a new ad group dedicated to free PDF downloads',
      'Change the campaign objective from Leads to Brand Awareness'
    ],
    correctAnswer: 1, // B
    explanation: 'Adding non-commercial modifiers ("free", "manual", "pdf") as negative phrase or exact keywords prevents future wasted spend on informational, non-purchasing queries.'
  },
  {
    id: 7,
    topic: 'Google Merchant Center Feed Quality',
    question: 'What is the most influential attribute in a Google Shopping product feed for matching search queries and winning high-converting product auctions?',
    options: [
      'Product ID number',
      'Product Title (structured with Brand + Product Type + Key Attributes like Size/Color/Model)',
      'The background color of the product packaging',
      'The date the product was added to inventory'
    ],
    correctAnswer: 1, // B
    explanation: 'Google Shopping algorithms rely heavily on the Product Title attribute for search query matching. Optimizing titles with brand, category, gender, size, model number, and material dramatically increases impression share and relevancy.'
  },
  {
    id: 8,
    topic: 'Smart Bidding Learning Phase',
    question: 'What happens when an advertiser drastically changes the daily budget or Target CPA by more than 20% in an active Smart Bidding campaign?',
    options: [
      'Google permanently deletes the campaign history',
      'The bid strategy enters the "Learning" status (typically lasting 7 days), during which performance may fluctuate as the algorithm recalibrates',
      'The account is flagged for manual policy review',
      'All search keywords are automatically converted to broad match'
    ],
    correctAnswer: 1, // B
    explanation: 'Large adjustments (>20%) reset or restart the Smart Bidding learning period. Best practice is making incremental adjustments of 10–15% every 4–7 days to maintain algorithmic stability.'
  },
  {
    id: 9,
    topic: 'Audience Targeting: Observation vs Targeting',
    question: 'What is the difference between setting an in-market audience to "Observation" versus "Targeting" in a Search campaign?',
    options: [
      '"Observation" tracks performance data and allows custom bid adjustments without narrowing campaign reach, while "Targeting" restricts ad delivery ONLY to people in that audience',
      '"Observation" is for video ads only, while "Targeting" is for image banners',
      '"Targeting" is free of charge, while "Observation" doubles the CPC',
      'There is no technical difference between the two settings'
    ],
    correctAnswer: 0, // A
    explanation: '"Observation" allows advertisers to monitor how specific audience segments perform and apply bid adjustments without restricting the search query reach. "Targeting" narrows the entire campaign so that ONLY users belonging to that audience can see the ads.'
  },
  {
    id: 10,
    topic: 'Search Lost Impression Share (Budget vs Rank)',
    question: 'A campaign has Search Lost IS (Budget) of 45% and Search Lost IS (Rank) of 5%. What is the primary diagnosis and solution?',
    options: [
      'Keywords have terrible Quality Scores; rewrite all ads immediately',
      'The campaign is constrained by budget; increasing the daily budget or narrowing location/schedule targeting will immediately capture 45% more available auction volume',
      'The landing page server is offline',
      'Competitors are click-fraud attacking the account'
    ],
    correctAnswer: 1, // B
    explanation: 'Search Lost IS (Budget) indicates the percentage of time your ads did not show due to insufficient daily budget. A low Lost IS (Rank) of 5% means ad rank and quality are stellar; the campaign simply needs more budget to capture existing high-quality demand.'
  },
  {
    id: 11,
    topic: 'Display Remarketing Funnels',
    question: 'In a remarketing audience strategy for an online shoe retailer, which audience segment typically commands the highest bid priority and conversion rate?',
    options: [
      'Users who visited the homepage once for 3 seconds 180 days ago',
      'Users who added items to the shopping cart in the last 7 days but did not complete the checkout purchase',
      'Users who read a blog post about running history in 2022',
      'Users who searched for generic fashion tips on Google'
    ],
    correctAnswer: 1, // B
    explanation: 'Cart abandoners within a recent recency window (1–7 days) represent the highest-intent bottom-of-funnel audience. Retargeting them with dynamic product ads or limited-time incentives yields the highest conversion rates and ROAS.'
  },
  {
    id: 12,
    topic: 'YouTube Video Ad Formats',
    question: 'Which YouTube ad format allows viewers to skip the video ad after 5 seconds, with the advertiser only billed when a user watches for 30 seconds (or to completion) or interacts with the ad?',
    options: [
      'Non-skippable 15-second in-stream ads',
      'Skippable In-Stream Ads (CPV model)',
      'Bumper Ads (6 seconds max, CPM model)',
      'Display banner leaderboard'
    ],
    correctAnswer: 1, // B
    explanation: 'Skippable In-Stream ads give users the option to skip after 5 seconds. Advertisers pay on a Cost-Per-View (CPV) basis only when the viewer reaches 30 seconds (or finishes a shorter video) or clicks an interactive element.'
  },
  {
    id: 13,
    topic: 'Performance Max (PMax) Asset Groups',
    question: 'What components must be provided to create a robust, high-performing Asset Group in a Performance Max campaign?',
    options: [
      'Only a single 50-character text string',
      'Headlines (short and long), descriptions, landscape/square/portrait images, logos, video assets, and audience signals',
      'A list of 500 exact match keywords only',
      'A PDF catalogue uploaded to Google Drive'
    ],
    correctAnswer: 1, // B
    explanation: 'Performance Max requires a diverse library of creative assets (text headlines, descriptions, multiple image aspect ratios, logos, and video) alongside audience signals so Google machine learning can auto-assemble optimal creative combinations across all channels.'
  },
  {
    id: 14,
    topic: 'UTM Parameters and Tracking Hygiene',
    question: 'Which set of standard UTM parameters should be appended to Google Ads tracking templates to ensure accurate session attribution in non-Google analytics tools?',
    options: [
      'utm_color, utm_size, utm_price',
      'utm_source=google&utm_medium=cpc&utm_campaign={_campaign}&utm_content={_adgroup}&utm_term={keyword}',
      'utm_password=secret&utm_token=123',
      'utm_user_email={email}&utm_ip={ip_address}'
    ],
    correctAnswer: 1, // B
    explanation: 'Using standard ValueTrack parameters in tracking templates (utm_source=google, utm_medium=cpc, utm_campaign, utm_content, utm_term) guarantees consistent session attribution across third-party analytics, CRMs, and data warehouses.'
  },
  {
    id: 15,
    topic: 'Ad Copy Testing Methodology',
    question: 'When A/B testing ad copy variations in Responsive Search Ads, what is the statistically sound methodology?',
    options: [
      'Change all 15 headlines, all 4 descriptions, and the landing page simultaneously every 12 hours',
      'Isolate a single clear hypothesis (e.g., Emotional Benefit headline vs Pricing/Discount headline) while holding destination URLs and other variables constant, testing across statistical significance thresholds',
      'Turn off campaigns after 10 clicks to decide the winner',
      'Ask 5 friends which ad they personally prefer'
    ],
    correctAnswer: 1, // B
    explanation: 'Rigorous A/B creative testing requires isolating specific variables (such as headline hooks, value propositions, or risk-reversal guarantees) and measuring CTR, CVR, and CPA over sufficient conversion sample sizes to achieve statistical confidence.'
  },
  {
    id: 16,
    topic: 'Maximize Clicks with Max CPC Bid Cap',
    question: 'When launching a brand new Search campaign with zero historical conversion data, why is "Maximize Clicks with a Maximum CPC bid limit" often preferred over uncapped Maximize Clicks?',
    options: [
      'Because uncapped Maximize Clicks will bid $0.01 on every auction',
      'Because without a Max CPC cap, Google automated bidding might bid $25+ for a single click on broad queries, exhausting the daily budget on 3 clicks',
      'Because Google gives a 50% discount to capped campaigns',
      'Because manual CPC caps automatically disable all competitors'
    ],
    correctAnswer: 1, // B
    explanation: 'An uncapped Maximize Clicks strategy aims only to generate clicks within the daily budget without regard to price, which can cause Google to pay exorbitant CPCs on competitive auctions. Setting a Max CPC cap prevents budget drainage.'
  },
  {
    id: 17,
    topic: 'Google Tag Manager Event Triggers',
    question: 'To track a lead form submission that dynamically submits via AJAX without redirecting to a new URL, which GTM trigger type is most reliable?',
    options: [
      'Page View trigger with DOM Ready',
      'Custom Event trigger (fired by dataLayer.push upon successful API response) or Element Visibility trigger for the confirmation message',
      'Timer trigger set to 5 seconds',
      'Scroll Depth trigger set to 10%'
    ],
    correctAnswer: 1, // B
    explanation: 'AJAX and single-page application forms do not navigate to a new page. The gold standard is firing a custom event to the dataLayer (e.g., dataLayer.push({ event: "lead_form_submitted" })) upon validated server response and listening for that event in GTM.'
  },
  {
    id: 18,
    topic: 'Negative Keyword Match Type Conflicts',
    question: 'If you add the negative keyword -[red shoes] (exact match negative) to your campaign, which user search query will STILL trigger your positive keyword "shoes"?',
    options: [
      'red shoes',
      'buy red shoes online (because the query contains additional words)',
      'None of the above',
      'Only exact queries for red shoes'
    ],
    correctAnswer: 1, // B
    explanation: 'Exact match negatives only block searches that match the exact term character-for-character with no other words. A query like "buy red shoes online" will still trigger the ad unless "-red" is added as a broad negative or `-"red shoes"` as a phrase negative.'
  },
  {
    id: 19,
    topic: 'Expected CTR Optimization',
    question: 'Which tactic is most effective for elevating a keyword’s Expected CTR from "Below Average" to "Above Average"?',
    options: [
      'Deleting the keyword completely and never advertising again',
      'Including the exact target keyword in Headline 1, utilizing Dynamic Keyword Insertion (DKI), showcasing a compelling value proposition in Headline 2, and ensuring all ad assets (sitelinks, callouts) are fully populated',
      'Changing the billing credit card',
      'Reducing website server response time by 5 milliseconds'
    ],
    correctAnswer: 1, // B
    explanation: 'Expected CTR measures the likelihood of a user clicking the ad relative to other advertisers. Prominently featuring the search term in headlines, writing strong hooks, and expanding ad real estate with extensions directly elevates user click probability.'
  },
  {
    id: 20,
    topic: 'Shopping Feed Disapproval: Price Discrepancy',
    question: 'Google Merchant Center disapproves items citing "Mismatched price (page crawl vs feed)". What is the underlying cause?',
    options: [
      'The currency symbol is green instead of black',
      'The price submitted in the XML/CSV product feed differs from the live schema.org microdata or rendered price on the product landing page',
      'The price is higher than Amazon’s price',
      'The product is out of stock in warehouse B'
    ],
    correctAnswer: 1, // B
    explanation: 'Google bots crawl landing pages and compare schema.org structured data and visible prices against the Merchant Center feed. If a sale price is on the website but not updated in the feed, items are flagged for price mismatch.'
  },
  {
    id: 21,
    topic: 'Brand vs Non-Brand Campaign Segmentation',
    question: 'Why must brand name keywords (e.g., "[Acme Widgets]") be segregated into a separate campaign from non-brand category keywords (e.g., "[industrial widgets]")?',
    options: [
      'To prevent brand search volume (which has ultra-high CTR and low CPC) from artificially skewing and masking the true acquisition costs of non-brand prospecting campaigns',
      'Because Google prohibits brand and non-brand keywords in the same ad account',
      'To double the daily credit limit with Google billing',
      'Because brand campaigns cannot use Smart Bidding'
    ],
    correctAnswer: 0, // A
    explanation: 'Brand keywords convert at 20–40% with high CTR and low CPC. Mixing them with non-brand generic keywords blends performance metrics, hiding unprofitable non-brand campaigns and giving a false illusion of account health.'
  },
  {
    id: 22,
    topic: 'Customer Match & First-Party Data',
    question: 'What is Google Customer Match in audience targeting?',
    options: [
      'An automated feature that calls your customers on the telephone',
      'A feature allowing advertisers to upload hashed, first-party customer lists (emails, phone numbers) to target, bid adjust, or exclude past customers across Search, YouTube, and Gmail',
      'A customer support chat widget provided by Google',
      'A tool that imports competitor customer lists from Facebook'
    ],
    correctAnswer: 1, // B
    explanation: 'Customer Match allows advertisers to upload encrypted first-party data (CRM email lists, phone numbers, postal addresses) to re-engage existing customers, upsell high-value tiers, or exclude past buyers from customer acquisition campaigns.'
  },
  {
    id: 23,
    topic: 'Conversion Lag and Attribution Delay',
    question: 'A high-ticket B2B SaaS company notes that conversions reported for last week appear 30% lower than normal, but two weeks later the numbers increase. What explains this phenomenon?',
    options: [
      'Google is manipulating conversion reports randomly',
      'Conversion Lag: Complex B2B buyers take 7 to 21 days between their first ad click and final consultation booking, and Google attributes the conversion back to the original click date',
      'The website database is crashing on weekends',
      'Smart Bidding is rejecting 30% of conversions'
    ],
    correctAnswer: 1, // B
    explanation: 'Conversion lag is the time delay between when an ad click occurs and when the user converts. In Google Ads, conversions are reported on the date of the click, meaning recent days look incomplete until the conversion window closes.'
  },
  {
    id: 24,
    topic: 'Maximize Conversion Value Strategy',
    question: 'When is "Maximize Conversion Value" the most appropriate automated bid strategy compared to "Maximize Conversions"?',
    options: [
      'When all leads have identical monetary value ($0)',
      'When products or lead types have varying purchase values or profit margins and the goal is maximizing total gross revenue rather than raw lead quantity',
      'When the advertiser wants to spend $0 per day',
      'When the business has no tracking tag installed'
    ],
    correctAnswer: 1, // B
    explanation: 'Maximize Conversion Value optimizes for total revenue or value generated rather than raw transaction counts, making it ideal for e-commerce stores with varying basket sizes and B2B businesses with tiered lead scoring.'
  },
  {
    id: 25,
    topic: 'Cross-Device Conversion Tracking',
    question: 'How does Google track a user who clicks a Search ad on their mobile phone during morning commute, but completes the purchase on their desktop laptop at home in the evening?',
    options: [
      'It cannot track cross-device behavior under any circumstances',
      'Using Google signed-in user graph data and privacy-safe aggregated machine learning models to track Cross-Device Conversions',
      'By sending a push notification to their smart TV',
      'By guessing based on neighborhood zip codes'
    ],
    correctAnswer: 1, // B
    explanation: 'Google leverages anonymized, aggregated data from users signed in to Google accounts across multiple devices to attribute cross-device conversion journeys, giving advertisers a complete picture of multi-touch paths.'
  },
  {
    id: 26,
    topic: 'Display Network Placement Exclusions',
    question: 'Why should advertisers frequently review and exclude mobile app placements (e.g., games, flashlight apps) in Display campaigns?',
    options: [
      'Because mobile app ads are illegal',
      'Because mobile app placements are notorious for accidental toddler clicks, bot traffic, and near-zero post-click engagement',
      'Because Google charges 100x higher CPCs on mobile apps',
      'Because mobile apps cannot render image banners'
    ],
    correctAnswer: 1, // B
    explanation: 'Mobile app placements (especially in children games and utility apps) frequently generate accidental clicks from users trying to close popups, draining budget with negligible conversion rates.'
  },
  {
    id: 27,
    topic: 'Target CPA Optimization Adjustments',
    question: 'If a campaign with a $50 Target CPA is consistently achieving a $35 CPA but spending only 40% of its available daily budget, what should the advertiser do to scale volume?',
    options: [
      'Lower the Target CPA to $15',
      'Increase the Target CPA slightly (e.g., to $55 or $60) to allow the algorithm to bid more aggressively in more competitive auctions and capture additional conversion volume',
      'Pause the campaign immediately',
      'Delete the conversion tracking tag'
    ],
    correctAnswer: 1, // B
    explanation: 'When a campaign is beating its target CPA but under-delivering budget, raising the Target CPA gives the bidding algorithm headroom to bid higher in competitive auctions, unlocking incremental conversions.'
  },
  {
    id: 28,
    topic: 'Dynamic Search Ads (DSAs)',
    question: 'How do Dynamic Search Ads (DSAs) operate, and when are they most strategically valuable?',
    options: [
      'They generate random text ads on social media',
      'They crawl your website content to automatically match user search queries and dynamically generate headlines and landing page URLs, filling keyword coverage gaps for massive product catalogs',
      'They require manual input of 10,000 exact match keywords every morning',
      'They replace all human copywriters with fixed generic templates'
    ],
    correctAnswer: 1, // B
    explanation: 'Dynamic Search Ads crawl specified web pages or page feeds to dynamically generate relevant headlines and landing pages matching queries that traditional keyword lists might miss, ideal for large e-commerce catalogs and content sites.'
  },
  {
    id: 29,
    topic: 'Enhanced Conversions Concept',
    question: 'What is the function of Google Ads "Enhanced Conversions"?',
    options: [
      'It sends free discount coupons to website visitors',
      'It securely hashes (SHA-256) first-party customer data (like email or address) captured on conversion forms and sends it to Google to improve measurement accuracy and conversion modeling in cookie-restricted environments',
      'It automatically changes your ad text to say "Best Deal"',
      'It guarantees a 100% conversion rate on every click'
    ],
    correctAnswer: 1, // B
    explanation: 'Enhanced Conversions sends privacy-compliant, one-way hashed (SHA-256) customer data from conversion forms to Google, enabling matched attribution with signed-in Google accounts even when standard cookies are blocked.'
  },
  {
    id: 30,
    topic: 'Weekly Account Optimization Routine',
    question: 'Which sequence of actions represents a professional weekly Google Ads optimization workflow?',
    options: [
      'Change all bidding strategies on Monday, pause all keywords on Wednesday, and request a billing refund on Friday',
      '1. Review Search Terms report and add negative keywords; 2. Inspect budget pacing and Lost IS; 3. Analyze ad asset performance and replace low-performing copy; 4. Check conversion tracking health and device/schedule anomalies',
      'Increase all bids by 500% across the board every Tuesday',
      'Disable all location targeting to get global reach'
    ],
    correctAnswer: 1, // B
    explanation: 'A structured weekly optimization protocol includes: 1) Search terms mining & negative keyword additions, 2) Budget & Lost IS inspection, 3) Ad creative & asset iteration, 4) Device/Geo anomaly detection, and 5) Conversion data validation.'
  }
];

const INTERMEDIATE_MODULE_TITLES = [
  'Google Ads Conversion Tracking Implementation',
  'Google Tag Manager for Google Ads',
  'Google Analytics 4 and Google Ads Integration',
  'Search Campaign Architecture and Scaling',
  'Search Terms Analysis and Optimization',
  'Ad Copywriting and Creative Testing',
  'Quality Score and Ad Rank',
  'Bidding Strategies and Smart Bidding',
  'Budget Allocation and Performance Forecasting',
  'Display and YouTube Campaign Fundamentals',
  'Remarketing and Audience Strategy',
  'Shopping Ads and Merchant Center Fundamentals',
  'Performance Max Asset and Audience Optimization',
  'Intermediate Assessment Preparation and Optimization Case Lab'
];

function generateIntermediateModule(index, title) {
  const modId = `gads-int-${String(index).padStart(2, '0')}`;
  
  const snippets = [
    {
      filename: `intermediate_${index}_tracking.js`,
      language: 'javascript',
      title: `${title} — Advanced GTM Conversion & Attribution Script`,
      code: `// GTM DataLayer Push & Conversion Event Tracker for ${title}
function trackGoogleAdsConversion(conversionData) {
  window.dataLayer = window.dataLayer || [];
  
  // Clean, structured payload for Google Ads & GA4
  window.dataLayer.push({
    event: 'google_ads_conversion_event',
    conversion_type: conversionData.type, // 'purchase', 'lead_submit', 'phone_call'
    conversion_value: conversionData.value || 0,
    currency: conversionData.currency || 'USD',
    transaction_id: conversionData.orderId || \`TX_\${Date.now()}\`,
    customer_email_hash: conversionData.hashedEmail || null, // SHA-256 for Enhanced Conversions
    user_properties: {
      customer_tier: conversionData.customerTier || 'prospect',
      lead_source: 'google_cpc'
    }
  });

  console.log('[Tracking] Conversion payload dispatched to dataLayer:', conversionData);
}

// Example usage on thank-you page
trackGoogleAdsConversion({
  type: 'purchase',
  value: 249.99,
  currency: 'USD',
  orderId: 'ORD_99482',
  hashedEmail: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
});`,
      lineByLine: [
        { line: 'window.dataLayer = window.dataLayer || [];', explanation: 'Initializes window.dataLayer and ensures safe object push without overwriting.' },
        { line: 'customer_email_hash: conversionData.hashedEmail', explanation: 'Supplies SHA-256 hashed customer email for Google Enhanced Conversions.' },
        { line: 'transaction_id: conversionData.orderId', explanation: 'Prevents duplicate conversion counting on browser page refreshes.' }
      ]
    },
    {
      filename: `smart_bidding_evaluator_${index}.ts`,
      language: 'typescript',
      title: `${title} — Smart Bidding Calibration Engine`,
      code: `// Smart Bidding Target CPA/ROAS Calibration Engine
interface BiddingState {
  currentCpa: number;
  targetCpa: number;
  dailyBudget: number;
  spentBudget: number;
  conversionsLast30Days: number;
}

export function evaluateSmartBiddingHealth(state: BiddingState) {
  const recommendations: string[] = [];

  if (state.conversionsLast30Days < 30) {
    recommendations.push('LOW VOLUME WARNING: Under 30 conversions/month. Consolidate ad groups or use Maximize Clicks with cap before tCPA.');
  }

  const cpaVariance = ((state.currentCpa - state.targetCpa) / state.targetCpa) * 100;
  if (cpaVariance > 25) {
    recommendations.push(\`CPA OVER TARGET (+ \${cpaVariance.toFixed(1)}%): Inspect search terms for negative keyword leakage and landing page CVR.\`);
  } else if (cpaVariance < -20 && (state.spentBudget / state.dailyBudget) < 0.60) {
    recommendations.push('UNDER-DELIVERING BUDGET: Achieved CPA is well below target. Raise Target CPA by 10-15% to capture more volume.');
  }

  return {
    status: recommendations.length === 0 ? 'HEALTHY' : 'ACTION_REQUIRED',
    recommendations
  };
}

console.log(evaluateSmartBiddingHealth({
  currentCpa: 42.50,
  targetCpa: 60.00,
  dailyBudget: 200.00,
  spentBudget: 85.00,
  conversionsLast30Days: 78
}));`,
      lineByLine: [
        { line: 'if (state.conversionsLast30Days < 30)', explanation: 'Verifies minimum algorithmic conversion volume needed for stable machine learning.' },
        { line: 'const cpaVariance = ((state.currentCpa - state.targetCpa) / state.targetCpa) * 100;', explanation: 'Calculates percentage variance between actual and target acquisition costs.' },
        { line: 'recommendations.push(\'UNDER-DELIVERING BUDGET...\')', explanation: 'Diagnoses budget bottlenecks caused by overly aggressive target constraints.' }
      ]
    },
    {
      filename: `search_terms_miner_${index}.js`,
      language: 'javascript',
      title: `${title} — Automated Search Term Query Classification & Mining`,
      code: `// Automated Search Term Query Classification & Negative Mining
function analyzeSearchTerms(queries, targetKeywords) {
  const negativesToAdd = [];
  const expansionKeywords = [];

  queries.forEach(q => {
    // Flag queries with high spend and 0 conversions
    if (q.spend > 100 && q.conversions === 0) {
      negativesToAdd.push({ query: q.term, reason: \`Wasted Spend: $\${q.spend} with 0 conversions\` });
    }
    // Flag queries with high CTR and strong CVR for exact match expansion
    if (q.conversions >= 3 && q.cpa <= 45 && !targetKeywords.includes(q.term)) {
      expansionKeywords.push({ query: q.term, metrics: \`\${q.conversions} conv @ $\${q.cpa} CPA\` });
    }
  });

  return { negativesToAdd, expansionKeywords };
}

const sampleQueries = [
  { term: 'free plumbing repair manual pdf', spend: 145.00, conversions: 0, cpa: 0 },
  { term: 'emergency plumber dallas 24 hour', spend: 280.00, conversions: 8, cpa: 35.00 }
];

console.log(analyzeSearchTerms(sampleQueries, ['[emergency plumber dallas]']));`,
      lineByLine: [
        { line: 'if (q.spend > 100 && q.conversions === 0)', explanation: 'Flags bleeding queries with high spend and zero conversions for negative exclusion.' },
        { line: 'if (q.conversions >= 3 && q.cpa <= 45 ...)', explanation: 'Identifies high-converting search queries to graduate into standalone exact match keywords.' },
        { line: 'return { negativesToAdd, expansionKeywords };', explanation: 'Outputs structured negative and positive keyword actions for weekly campaign hygiene.' }
      ]
    }
  ];

  return {
    id: modId,
    title: title,
    description: `Intermediate mastery of ${title.toLowerCase()} covering Smart Bidding calibration, GTM dataLayer tracking, and audience scaling.`,
    level: 'intermediate',
    orderIndex: index,
    status: 'locked',
    requiresQuiz: false,
    type: 'theory',
    duration: '50 mins',
    xpReward: 150,
    lessonContent: {
      overview: `Advanced intermediate masterclass module exploring ${title.toLowerCase()} in Google Ads. Master automated bidding calibration, custom dimension tracking, cross-network attribution, and scalable optimization models.`,
      analogyHero: `Think of ${title.toLowerCase()} like high-precision avionics in modern aviation: autopilot algorithms steer efficiently only when fed pristine sensor data and bounded by calibrated navigation parameters.`,
      objectives: [
        `Master advanced strategies and mathematical principles of ${title.toLowerCase()}`,
        `Configure enterprise GTM, GA4, and Enhanced Conversion tracking integrations`,
        `Calibrate Smart Bidding algorithms (Target CPA and Target ROAS) for maximum profit velocity`,
        `Execute automated search-term query mining and negative keyword sculpting workflows`
      ],
      estimatedTime: '50 mins',
      keyTakeaways: [
        `Ensure minimum monthly conversion thresholds (30-50 conversions) before enabling Target CPA/ROAS.`,
        `Deploy Enhanced Conversions to recover lost attribution data from browser privacy constraints.`,
        `Maintain strict Brand vs Non-Brand campaign separation to prevent skewed ROAS reporting.`
      ],
      summary: `Mastering ${title.toLowerCase()} empowers media buyers to scale multi-thousand dollar daily budgets with predictable margins and stable attribution.`,
      syntaxGuide: `// ROAS Calculation:\nTarget ROAS = (Target Conversion Value / Cost) * 100\n// Value-Based Bidding Adjustment:\nMax Bid Adjust = (Expected Customer LTV / Benchmark CPA) * Base Bid`,
      practiceExercises: [
        {
          title: `${title} Calibration Exercise`,
          instructions: `A campaign under Target ROAS (350%) achieves 480% ROAS but only spends 40% of its $500/day budget. What calibration changes should be implemented?`,
          starterCode: `const adjustment = {\n  targetRoasDelta: 0,\n  budgetAction: '',\n  rationale: ''\n};`,
          solutionCode: `const adjustment = {\n  targetRoasDelta: -30,\n  budgetAction: 'Maintain $500/day budget, lower Target ROAS to 320%',\n  rationale: 'Lowering the target constraint enables the bidding algorithm to enter more auctions and capture incremental volume'\n};`
        }
      ],
      sections: [
        {
          id: `sec-int-${index}-1`,
          title: `1. Strategic Frameworks & Architecture of ${title}`,
          difficulty: 'Intermediate',
          content: `In intermediate Google Ads management, ${title.toLowerCase()} bridges foundational campaign mechanics with automated machine learning systems. Advertisers must architect campaigns to supply algorithms with rich conversion signals while maintaining strict boundary controls.\n\n### Strategic Pillars\n- **Attribution Accuracy**: Implementing first-party cookies and server-side tracking ensures conversion values are mapped accurately.\n- **Algorithmic Liquidity**: Consolidating ad groups to ensure each bidding portfolio captures at least 30 conversions per month.\n- **Query & Audience Governance**: Continuous search-term sculpting and audience segmentation protect margins and scale winning ad groups.`,
          explanation: `In intermediate Google Ads management, ${title.toLowerCase()} bridges foundational campaign mechanics with automated machine learning systems.`,
          codeSnippets: [snippets[0]],
          miniPractice: {
            question: `Why must the Conversion Linker tag fire on All Pages in Google Tag Manager?`,
            options: [
              `To store ad click IDs (GCLID) in first-party cookies to protect conversion measurement across browsers`,
              `To compress website images automatically`,
              `To delete all competitors' tracking pixels`,
              `To increase the daily budget limit of Google Ads`
            ],
            correctAnswer: 0,
            explanation: `The Conversion Linker tag writes click identifiers into first-party cookies, preventing attribution loss caused by Intelligent Tracking Prevention (ITP).`
          },
          proTip: `Always configure Enhanced Conversions in Google Ads alongside GTM user-provided data variables for maximum match rates.`,
          commonMistakes: [
            `Marking both Google Ads tag and imported GA4 conversions as Primary, causing double-counting.`,
            `Setting Target CPA too low immediately after launching a new campaign without conversion history.`
          ]
        },
        {
          id: `sec-int-${index}-2`,
          title: `2. Deep-Dive Implementation & Configuration Protocols`,
          difficulty: 'Intermediate',
          content: `To implement ${title.toLowerCase()} with precision:\n\n1. **Measurement & Verification**: Deploy robust tags via Google Tag Manager with the Conversion Linker enabled across all pages.\n2. **Structural Segmentation**: Isolate campaigns by intent, margin, and geographic value to give high-performing segments dedicated budget.\n3. **Statistical Testing**: Run controlled A/B split tests with clear hypotheses before rolling out global account modifications.`,
          explanation: `Precision implementation requires synchronized tracking tags, disciplined margin segmentation, and controlled A/B experimentation.`,
          codeSnippets: [snippets[1]],
          miniPractice: {
            question: `What is the risk of adjusting Target CPA by more than 20% in a single edit?`,
            options: [
              `It resets the machine learning algorithm learning phase, causing performance instability`,
              `It terminates the Google Ads account permanently`,
              `It converts the campaign to a Display banner campaign`,
              `It disables all payment methods`
            ],
            correctAnswer: 0,
            explanation: `Large target bid adjustments disrupt machine learning models and force the algorithm back into the 'Learning' state.`
          },
          proTip: `Make incremental bid strategy adjustments of 10-15% once every 5 to 7 days to maintain algorithmic stability.`,
          commonMistakes: [
            `Adjusting bidding targets daily based on short-term conversion lag data.`,
            `Ignoring Search Lost IS (Budget) when evaluating Smart Bidding delivery.`
          ]
        },
        {
          id: `sec-int-${index}-3`,
          title: `3. Case Study & Optimization Diagnosis`,
          difficulty: 'Intermediate',
          content: `An e-commerce retailer and B2B SaaS client experienced severe CPA inflation. By restructuring around ${title.toLowerCase()}:\n- **Reduced Blended CPA by 38%**\n- **Scaled Monthly Conversion Value from $45,000 to $180,000**\n- **Eliminated 32% of Wasted Spend on Irrelevant Broad Match Queries and Display Placements**`,
          explanation: `Auditing search query logs and applying algorithmic negative exclusions drastically trims wasted ad spend while scaling profitable volume.`,
          codeSnippets: [snippets[2]],
          miniPractice: {
            question: `How should high-converting search queries discovered in Search Terms reports be handled?`,
            options: [
              `Promote them to dedicated Exact Match keywords with tailored ad copy and negative match exclusions elsewhere`,
              `Add them immediately as negative exact keywords`,
              `Delete the entire campaign and start over`,
              `Reduce the budget of the best-performing ad group`
            ],
            correctAnswer: 0,
            explanation: `Graduating winning search terms into exact match keywords allows precise bid and copy control while sculpting queries away from broad match ad groups.`
          },
          proTip: `Build a shared negative keyword list dedicated strictly to cross-campaign query sculpting.`,
          commonMistakes: [
            `Letting broad match keywords cannibalize exact match keyword query traffic.`,
            `Failing to audit Search Terms reports at least once per week.`
          ]
        }
      ]
    }
  };
}

const intermediateModules = INTERMEDIATE_MODULE_TITLES.map((title, idx) => generateIntermediateModule(idx + 1, title));

// Intermediate Practical Project: E-commerce Google Ads Growth System
const INTERMEDIATE_PROJECT = {
  id: 'gads-int-p1',
  title: 'Intermediate Project: E-commerce Google Ads Growth System',
  description: 'Design and deploy a full-funnel e-commerce growth architecture with Merchant Center feeds, PMax asset groups, and Target ROAS scaling.',
  level: 'intermediate',
  orderIndex: 15,
  status: 'locked',
  requiresQuiz: false,
  isProject: true,
  type: 'project',
  duration: '240 mins',
  xpReward: 450,
  projectDetails: {
    overview: 'You are the Senior Performance Marketing Manager for LuxeAura Home & Kitchen, an online direct-to-consumer (DTC) retailer scaling from $30,000/mo to $100,000/mo in profitable revenue. The store sells premium cookware, espresso machines, and chef-grade knives with average order values ranging from $120 to $650. You must architect a full-funnel acquisition engine encompassing Standard Search, Performance Max, Google Shopping feed optimization, and Dynamic Remarketing.',
    scenario: 'You are the Senior Performance Marketing Manager for LuxeAura Home & Kitchen, an online direct-to-consumer (DTC) retailer scaling from $30,000/mo to $100,000/mo in profitable revenue. The store sells premium cookware, espresso machines, and chef-grade knives with average order values ranging from $120 to $650. You must architect a full-funnel acquisition engine encompassing Standard Search, Performance Max, Google Shopping feed optimization, and Dynamic Remarketing.',
    estimatedHours: '4 hours',
    learningObjectives: [
      'Architect a scalable multi-campaign Google Ads structure segmented by product category and margin',
      'Optimize Google Merchant Center product feed attributes (titles, descriptions, product types, custom labels)',
      'Deploy end-to-end GTM conversion tracking with Purchase value, Enhanced Conversions, and GA4 integration',
      'Build comprehensive Responsive Search Ads and creative asset groups for Performance Max',
      'Configure Smart Bidding (Target ROAS) and design a 30-day optimization and scaling roadmap'
    ],
    objectives: [
      'Architect a scalable multi-campaign Google Ads structure segmented by product category and margin',
      'Optimize Google Merchant Center product feed attributes (titles, descriptions, product types, custom labels)',
      'Deploy end-to-end GTM conversion tracking with Purchase value, Enhanced Conversions, and GA4 integration',
      'Build comprehensive Responsive Search Ads and creative asset groups for Performance Max',
      'Configure Smart Bidding (Target ROAS) and design a 30-day optimization and scaling roadmap'
    ],
    requirements: [
      'Segment products using Merchant Center Custom Labels based on profit margins and sales velocity',
      'Establish primary purchase conversion tracking with Enhanced Conversions hashed customer data',
      'Build a Performance Max campaign with full creative assets (all aspect ratios, copy, and videos)',
      'Construct a Non-Brand Search campaign protecting high-intent category queries',
      'Develop negative keyword sculpting lists separating Brand, Non-Brand, and PMax traffic',
      'Calibrate Target ROAS bidding strategy with incremental weekly scaling rules',
      'Design an executive KPI reporting dashboard tracking MER, POAS, and new customer acquisition'
    ],
    deliverables: [
      '1. Business & Revenue Growth Plan (Target monthly spend, blended ROAS target 400%, margin tiers, break-even unit economics)',
      '2. Multi-Campaign Architecture Blueprint (Non-Brand Search, Brand Protection, Performance Max, Dynamic Display Remarketing)',
      '3. Google Merchant Center Feed Optimization Plan (Title restructuring formula, custom labels for Best Sellers vs High Margin, GTIN validation)',
      '4. Keyword Strategy & Match-Type Map (High-intent transactional keywords for cookware, espresso machines, and knife sets)',
      '5. Master Negative Keyword Strategy (Cross-campaign sculpting, informational query blocking, search partner exclusions)',
      '6. Responsive Search Ad Copy Suite (15 headlines, 4 descriptions, sitelinks, callouts, promotion assets)',
      '7. Performance Max Asset Group Specification (Text, landscape/square/portrait images, logos, video scripts, search themes, audience signals)',
      '8. Technical GTM & GA4 Tracking Implementation Plan (DataLayer purchase schema, Conversion Linker, Enhanced Conversions SHA-256 mapping)',
      '9. Dynamic Remarketing & Customer Match Funnel (Cart abandoners 1-7d, past purchasers 30-180d, high-LTV exclusions)',
      '10. Smart Bidding & Target ROAS Scaling Protocol (Learning period guidelines, bid strategy portfolio, budget scaling rules)',
      '11. Executive KPI Dashboard Specification (Blended ROAS, POAS, New Customer Acquisition Cost, Lost IS Budget vs Rank)',
      '12. 30-Day Optimization & Risk Recovery Playbook (Search term mining schedule, feed diagnostics checklist, ad strength audits)'
    ],
    rubric: [
      {
        criteria: 'Full-Funnel Campaign Architecture & Feed Quality',
        criterion: 'Full-Funnel Campaign Architecture & Feed Quality',
        weight: '25%',
        description: 'Disciplined product segmentation, custom label utilization, and optimized Merchant Center product title formulas.'
      },
      {
        criteria: 'Technical Tracking & Measurement Integrity',
        criterion: 'Technical Tracking & Measurement Integrity',
        weight: '25%',
        description: 'Flawless GTM purchase dataLayer design, Conversion Linker deployment, and Enhanced Conversions hashed customer data.'
      },
      {
        criteria: 'Performance Max & Search Asset Excellence',
        criterion: 'Performance Max & Search Asset Excellence',
        weight: '25%',
        description: 'Comprehensive creative asset variety across all aspect ratios, compelling copy, and granular audience signals.'
      },
      {
        criteria: 'Target ROAS Bidding & Scaling Strategy',
        criterion: 'Target ROAS Bidding & Scaling Strategy',
        weight: '25%',
        description: 'Mathematical target ROAS calibration, incremental budget scaling rules, and structured risk mitigation playbooks.'
      }
    ],
    submissionChecklist: [
      'Configured Merchant Center custom labels for margin-based bidding prioritization',
      'Engineered GTM dataLayer purchase schema with transaction ID, currency, and value',
      'Constructed complete PMax asset group with all image dimensions and audience signals',
      'Implemented Brand vs Non-Brand campaign separation to prevent skewed ROAS reporting',
      'Established negative keyword lists preventing irrelevant generic search spend',
      'Documented 14-day and 30-day Smart Bidding scaling and optimization checkpoints'
    ]
  }
};

// Intermediate Final Assessment Task
const INTERMEDIATE_ASSESSMENT_TASK = {
  id: 'gads-int-assessment',
  title: 'Level 2: Google Ads Intermediate Final Assessment',
  description: 'Rigorous 30-question examination testing conversion tracking, Smart Bidding calibration, PMax architecture, audience signals, and feed optimization.',
  level: 'intermediate',
  orderIndex: 16,
  status: 'locked',
  isCompleted: false,
  requiresQuiz: true,
  isFinalAssessment: true,
  type: 'quiz',
  duration: '60 mins',
  xpReward: 400,
  passingScore: 25,
  totalQuestions: 30,
  questions: INTERMEDIATE_ASSESSMENT,
  assessmentDetails: {
    passingScore: 25,
    totalQuestions: 30,
    timeLimitMinutes: 60,
    questions: INTERMEDIATE_ASSESSMENT
  }
};

const ALL_INTERMEDIATE_TASKS = [
  ...intermediateModules,
  INTERMEDIATE_PROJECT,
  INTERMEDIATE_ASSESSMENT_TASK
];

const fileContent = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export const GOOGLE_ADS_INTERMEDIATE_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(INTERMEDIATE_ASSESSMENT, null, 2)};

export const GOOGLE_ADS_INTERMEDIATE_TASKS: Task[] = ${JSON.stringify(ALL_INTERMEDIATE_TASKS, null, 2)};
`;

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log(`Successfully generated ${targetFile} with ${ALL_INTERMEDIATE_TASKS.length} tasks and 30 MCQs.`);
