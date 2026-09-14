const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/features/roadmap/data/facebook-ads/facebookAdsAdvanced.data.ts');
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 40 High-Quality Advanced MCQs with balanced distribution (10 A, 10 B, 10 C, 10 D)
const ADVANCED_ASSESSMENT = [
  {
    id: 1,
    topic: 'Enterprise Account Governance',
    question: 'In an enterprise multi-brand or global agency structure, what is the primary security advantage of utilizing Meta Business Portfolio Partner sharing rather than direct user role invitations?',
    options: [
      'It isolates legal asset ownership within the parent enterprise portfolio, allowing instant revocation of agency access across dozens of ad accounts and datasets without managing individual contractor personal profiles.',
      'It makes all ad clicks free of charge across international markets.',
      'It bypasses all Meta copyright and policy reviews automatically.',
      'It prevents competitors from seeing your ads in the Meta Ad Library.'
    ],
    correctAnswer: 0, // A
    explanation: 'Enterprise partner sharing allows organizations to grant scoped asset access to external partner business IDs. Revoking the partner relationship instantly cuts access for all agency staff without needing to delete individual user profiles.'
  },
  {
    id: 2,
    topic: 'Conversions API Microservices Architecture',
    question: 'When architecting a high-volume enterprise Conversions API (CAPI) pipeline processing 50,000 transactions daily, why is deploying a dedicated serverless gateway (such as AWS Lambda, Google Cloud Run, or Cloudflare Workers) preferred over client-side plugin webhooks?',
    options: [
      'Because client-side plugins double the hosting cost of your e-commerce platform',
      'Because dedicated serverless microservices buffer event queues during traffic spikes (e.g. BFCM), guarantee sub-second delivery, perform deterministic deduplication hashing, and prevent website checkout latency',
      'Because Meta bans ad accounts that use open-source WordPress plugins',
      'Because serverless functions encrypt all credit card numbers for public viewing'
    ],
    correctAnswer: 1, // B
    explanation: 'Dedicated cloud microservices decouple tracking execution from the user browser, providing asynchronous queue buffering, automatic retry mechanisms, and sub-second transmission without slowing down website performance.'
  },
  {
    id: 3,
    topic: 'Offline Conversions & CRM Feedback Loops',
    question: 'How does feeding offline sales qualification stages (e.g., MQL -> SQL -> Closed-Won Revenue) back into Meta via the Conversions API transform B2B lead generation campaign efficiency?',
    options: [
      'It allows Meta algorithms to shift optimization from raw cheap lead volume to high-value closed-won revenue, training bidding models on genuine customer profitability',
      'It automatically refunds advertising spend for leads that do not convert to sales',
      'It sends automated direct mail postcards to every lead',
      'It bypasses state and federal telemarketing regulations'
    ],
    correctAnswer: 0, // A
    explanation: 'Uploading offline conversion stages (with actual closed contract values) allows Meta optimization engine to train on down-funnel business outcomes, eliminating junk leads and finding high-value prospects.'
  },
  {
    id: 4,
    topic: 'Incrementality vs Platform Attribution',
    question: 'Why is relying solely on in-platform 7-day click / 1-day view attribution dangerous when scaling monthly ad spend past $100,000?',
    options: [
      'Because in-platform attribution measures total gross profit only',
      'Because in-platform view-through attribution often claims credit for conversions that would have occurred organically or via other marketing channels, leading to over-reporting and misallocated capital',
      'Because Meta will disable ad accounts that spend more than $10,000/day',
      'Because post-click data is deleted every 24 hours by federal law'
    ],
    correctAnswer: 1, // B
    explanation: 'Platform attribution models credit any user who viewed an ad within 24 hours of buying, even if the purchase was driven by email, organic search, or brand equity. True incrementality measures the net-new sales generated strictly because of the ad.'
  },
  {
    id: 5,
    topic: 'Geo-Lift & Holdout Experiments',
    question: 'How does a randomized Geo-Lift Experiment scientifically determine the true incremental lift of Meta Ads?',
    options: [
      'By showing ads to all cities on Monday and turning them off on Tuesday',
      'By comparing website traffic between Google Chrome and Mozilla Firefox',
      'By dividing geographic regions into matched control and test groups, running ads exclusively in test markets, and measuring the statistically significant difference in total sales between the two groups',
      'By asking customers on Instagram what city they live in'
    ],
    correctAnswer: 2, // C
    explanation: 'Geo-lift testing splits markets into statistically matched test (ads on) and control (ads off) clusters. Comparing baseline sales trends between the clusters isolates the exact incremental revenue produced by the advertising.'
  },
  {
    id: 6,
    topic: 'Marketing Mix Modeling (MMM)',
    question: 'In enterprise marketing analytics, what is the primary role of open-source Marketing Mix Modeling tools like Meta Robyn?',
    options: [
      'To generate automated video voiceovers using artificial intelligence',
      'To use advanced regression mathematics and Bayesian statistics to measure the holistic revenue impact, ad stock decay, and saturation curves of every paid channel without relying on user-level tracking cookies',
      'To automatically design HTML banner advertisements',
      'To replace all human marketing directors with automated chatbots'
    ],
    correctAnswer: 1, // B
    explanation: 'Meta Robyn is an open-source MMM framework that uses machine learning and multi-variable regression to quantify media channel efficiency, carryover decay effects (adstock), and saturation points independent of cookie tracking.'
  },
  {
    id: 7,
    topic: 'Value-Based Optimization (VBO)',
    question: 'When configuring Value-Based Optimization (VBO) with a "Minimum ROAS" bid strategy, what behavior will Meta delivery algorithm exhibit if market competition spikes and ROAS falls below the threshold?',
    options: [
      'The algorithm will automatically double the daily budget to outbid competitors',
      'The algorithm will change the product pricing on your Shopify store',
      'The delivery system will automatically throttle or pause spend to protect the advertiser profit margin, only entering auctions where the probability of meeting the target ROAS remains high',
      'The campaign will automatically switch to Brand Awareness'
    ],
    correctAnswer: 2, // C
    explanation: 'Minimum ROAS bidding enforces strict profitability. When the algorithm predicts that incoming auctions cannot yield the specified return, it suppresses bid volume and preserves cash.'
  },
  {
    id: 8,
    topic: 'Dynamic Profit Margin Optimization',
    question: 'Why do sophisticated enterprise e-commerce brands pass gross profit margin dollars rather than top-line gross revenue in their `Purchase` event value parameters?',
    options: [
      'To hide their total sales revenue from credit card companies',
      'Because Meta charges a higher commission on revenue than on profit',
      'To force Meta machine learning algorithm to optimize for maximum net contribution margin rather than high-revenue, low-margin products that generate zero actual profit',
      'Because Shopify only supports profit tracking'
    ],
    correctAnswer: 2, // C
    explanation: 'Optimizing on top-line revenue encourages algorithms to sell high-ticket items even if they have razor-thin margins. Passing contribution profit dollars trains Meta AI to hunt for transactions that yield maximum net bankable profit.'
  },
  {
    id: 9,
    topic: 'Creative Intelligence & Angle Mining',
    question: 'In an enterprise creative production system, what is the objective of conducting "Review Sentiment & Competitor Angle Mining"?',
    options: [
      'To identify the exact recurring emotional phrases, unspoken frustrations, and specific objections real buyers express in competitor 1-star and 5-star reviews, transforming them into high-converting ad hooks',
      'To copy competitor ad copy word-for-word and change the brand name',
      'To post automated spam comments on competitor Facebook Pages',
      'To report competitor ad accounts to Meta compliance'
    ],
    correctAnswer: 0, // A
    explanation: 'Mining customer reviews reveals the exact vocabulary, emotional pain points, and desires of target buyers, providing direct fodder for authentic hooks, problem agitation, and unique selling propositions.'
  },
  {
    id: 10,
    topic: 'High-Velocity Creative Sprints',
    question: 'In high-spend media buying ($50k+/month), what is the "Modular Creative Iteration" framework?',
    options: [
      'Creating 50 completely unrelated brands every month',
      'Taking 1 winning core creative concept and producing 9 modular variations by systematically remixing 3 distinct visual hooks with 3 different CTA/offer end-cards',
      'Changing the font of the website footer every 24 hours',
      'Uploading identical video files with different file names'
    ],
    correctAnswer: 1, // B
    explanation: 'Modular iteration extracts maximum leverage from proven concepts by pairing winning body demonstrations with new opening hooks and closing offers, extending creative lifespan and lowering production costs.'
  },
  {
    id: 11,
    topic: 'A/B Experimentation & Statistical Power',
    question: 'Why must enterprise advertisers determine Minimum Detectable Effect (MDE) and sample size requirements before concluding an ad A/B experiment?',
    options: [
      'To prevent false-positive conclusions caused by random auction noise and stochastic conversion fluctuations in small sample sizes',
      'Because Meta Ads Manager will automatically delete campaigns with small sample sizes',
      'Because statistical power is required by federal banking laws',
      'To guarantee that every test variation achieves a 10x ROAS'
    ],
    correctAnswer: 0, // A
    explanation: 'Without adequate statistical power and sample size, early performance differences are often just random auction noise. Calculating MDE ensures decisions are backed by true statistical confidence.'
  },
  {
    id: 12,
    topic: 'Automated Rules & Algorithmic Guardrails',
    question: 'Which automated rule configuration serves as the most effective stop-loss guardrail against runaway ad spend on underperforming ads?',
    options: [
      'Increase budget by 100% if impressions exceed 1,000',
      'Pause Ad if Spend in the last 3 days is > 2.5x Target CPA AND Conversions is equal to 0, running check every 1 hour',
      'Send an email to the customer whenever an ad is clicked',
      'Delete the campaign if the weather is raining'
    ],
    correctAnswer: 1, // B
    explanation: 'A 2.5x Target CPA spend threshold with 0 conversions provides a deterministic mathematical stop-loss that cuts underperforming ads before they waste significant capital.'
  },
  {
    id: 13,
    topic: 'Marketing API Programmatic Automation',
    question: 'How do enterprise media agencies utilize the Meta Marketing API to streamline operational efficiency?',
    options: [
      'By automating programmatic campaign creation, dynamic budget rebalancing across 50+ ad accounts, real-time Slack/Teams anomaly alerts, and automated creative uploading',
      'By hacking into competitor ad accounts to view their secret targeting',
      'By bypassing all advertising costs through custom API endpoints',
      'By generating fake customer reviews on Facebook Pages'
    ],
    correctAnswer: 0, // A
    explanation: 'The Marketing API enables programmatic account management, syncing creative assets from cloud storage, automating rule execution, and integrating live spend data into enterprise BI dashboards.'
  },
  {
    id: 14,
    topic: 'Lead Quality & MQL-to-SQL Conversion',
    question: 'In an enterprise B2B lead generation funnel, what metric is far more critical than raw Cost Per Lead (CPL)?',
    options: [
      'Cost Per Marketing Qualified Lead (CP-MQL) and Pipeline Customer Acquisition Cost (CAC) tied to verified sales pipeline value',
      'The total number of emojis in the lead form',
      'The speed of the user internet connection',
      'The number of Facebook likes on the ad post'
    ],
    correctAnswer: 0, // A
    explanation: 'A $15 raw CPL that converts at 1% to sales is far more expensive than a $75 qualified lead that converts at 25%. Enterprise performance focuses on pipeline CAC and closed-won revenue.'
  },
  {
    id: 15,
    topic: 'Enterprise Contribution Margin Scaling',
    question: 'When scaling an e-commerce business from $100k/month to $1M/month in ad spend, what financial dynamic must media buyers closely monitor as platform ROAS inevitably drops?',
    options: [
      'The total number of Instagram followers gained',
      'Net Contribution Margin Dollars ($): ensuring that total gross profit generated after COGS, ad spend, shipping, and payment processing fees continues to expand in absolute dollar terms',
      'The physical size of the warehouse',
      'The number of employees in customer support'
    ],
    correctAnswer: 1, // B
    explanation: 'At high scale, percentage ROAS naturally compresses due to diminishing marginal returns. Success is measured by growing absolute Contribution Margin Dollars (CM$) deposited in the bank.'
  },
  {
    id: 16,
    topic: 'Cash Flow & Inventory Dynamics',
    question: 'Why must enterprise media buyers align scaling velocity with manufacturer lead times and inventory working capital?',
    options: [
      'Because scaling ad spend into product stock-outs destroys campaign momentum, resets algorithmic learning, and triggers customer chargebacks that ruin Page Feedback scores',
      'Because Meta requires 6 months of inventory proof before approving ads',
      'Because warehouses will refuse shipments from profitable companies',
      'Because Facebook automatically buys all remaining inventory'
    ],
    correctAnswer: 0, // A
    explanation: 'Driving high ad volume into an out-of-stock product results in unfulfilled orders, customer disputes, low Page Feedback scores, and ad account restrictions.'
  },
  {
    id: 17,
    topic: 'Black Friday Cyber Monday (BFCM) Surge Pacing',
    question: 'What is the recommended budget pacing strategy during high-competition peak retail events like Black Friday / Cyber Monday (BFCM)?',
    options: [
      'Wait until 11 PM on Black Friday to create new campaigns',
      'Warm up pixel audiences and seed lookalikes in October, launch VIP early-access offers 7 days prior to BFCM, and schedule hourly budget surges during peak conversion windows with relaxed cost caps',
      'Turn off all ads during BFCM to avoid high CPMs',
      'Only run ads on desktop Messenger'
    ],
    correctAnswer: 1, // B
    explanation: 'Enterprise BFCM execution requires pre-building warm audience pools, launching early-bird access to avoid auction congestion, and deploying aggressive budgets during peak consumer buying hours.'
  },
  {
    id: 18,
    topic: 'Short-Form Video Retention Architecture',
    question: 'In a high-retention 9:16 vertical Reels ad, what is the optimal structural framework for the 0-15 second window?',
    options: [
      '0-3s: Disruptive Visual/Text Hook -> 4-7s: Problem Agitation -> 8-12s: Dynamic Product Demonstration -> 13-15s: Social Proof Bridge',
      '0-10s: Corporate history -> 11-15s: Founder headshot',
      '0-15s: Black screen with soft acoustic music',
      '0-15s: Legal disclaimer in 6pt font'
    ],
    correctAnswer: 0, // A
    explanation: 'Short-form vertical video demands rapid pacing: an immediate pattern interrupt (0-3s), quick problem validation (4-7s), visual proof of the solution (8-12s), and social reinforcement.'
  },
  {
    id: 19,
    topic: 'Sound-Off Video Optimization',
    question: 'Why is implementing dynamic, high-contrast on-screen captions and visual demonstrations mandatory for Meta video ads?',
    options: [
      'Because over 75% of mobile users browse social feeds with device audio muted, meaning audio-only messages fail to communicate value',
      'Because Meta charges a penalty fee for video sound',
      'Because audio is blocked in all foreign countries',
      'Because captions make video files smaller in size'
    ],
    correctAnswer: 0, // A
    explanation: 'The vast majority of mobile social media users consume video content with the sound off in public or quiet environments. Clear kinetic captions and visual storytelling ensure full message delivery.'
  },
  {
    id: 20,
    topic: 'Partnership Ads (Whitelisting)',
    question: 'What is the strategic performance benefit of running "Partnership Ads" (formerly Branded Content / Whitelisting) through a creator or influencer profile handle rather than the brand brand page?',
    options: [
      'It leverages native creator authenticity, third-party social credibility, and separate engagement algorithms, frequently achieving lower CPMs and higher conversion rates than branded corporate handles',
      'It allows the brand to avoid paying taxes on ad revenue',
      'It prevents customers from returning damaged products',
      'It guarantees that the influencer will work for free forever'
    ],
    correctAnswer: 0, // A
    explanation: 'Partnership Ads appear as authentic recommendations from real creators in the feed. Consumers trust creator handles more readily than corporate brand logos, driving higher CTRs and lower acquisition costs.'
  },
  {
    id: 21,
    topic: 'Personal Attributes Policy Compliance',
    question: 'Which of the following ad copy variations violates Meta Personal Attributes policy regarding health and medical conditions?',
    options: [
      '"Are you struggling with chronic back pain every morning? Try our orthotic mattress topper now!"',
      '"Discover how this ergonomic mattress topper supports spinal alignment for restful sleep."',
      '"Engineered with high-density memory foam for pressure relief and comfort."',
      '"Over 10,000 sleepers have upgraded their nightly recovery with our supportive topper."'
    ],
    correctAnswer: 0, // A
    explanation: 'Meta policy strictly forbids direct questions asserting personal health vulnerabilities ("Are you struggling with chronic back pain?"). Copy must focus on product attributes and benefits rather than interrogating user afflictions.'
  },
  {
    id: 22,
    topic: 'Special Ad Categories & Compliance',
    question: 'When advertising in Special Ad Categories (Housing, Employment, Credit, or Social Issues/Elections), which targeting options are legally restricted by Meta to prevent discriminatory practices?',
    options: [
      'Age, Gender, ZIP Code targeting, and detailed demographic/interest exclusions are disabled, requiring broader geographic and algorithmic targeting',
      'Video ads are completely forbidden',
      'Advertisers cannot spend more than $5 per day',
      'Landing pages cannot contain images of houses'
    ],
    correctAnswer: 0, // A
    explanation: 'Special Ad Category regulations remove age, gender, postal code radiuses, and discriminatory exclusions to ensure equal housing, job, and credit opportunities.'
  },
  {
    id: 23,
    topic: 'Page Feedback Score & Account Health',
    question: 'What happens to an e-commerce Meta Ad Account if its connected Facebook Page Feedback Score drops below 2.0 out of 5.0 due to customer complaints about slow shipping or poor product quality?',
    options: [
      'Meta will send free gifts to the company headquarters',
      'The ad account will face immediate ad delivery penalties, inflated CPM auction penalties (up to 3x higher costs), and eventual permanent advertising disablement if the score drops below 1.0',
      'The Facebook Page is automatically converted into a private group',
      'All negative customer reviews are hidden by Facebook'
    ],
    correctAnswer: 1, // B
    explanation: 'Meta monitors post-purchase customer surveys. A Page Feedback score under 2.0 triggers severe auction penalties that inflate CPMs, while scores under 1.0 result in total advertising bans.'
  },
  {
    id: 24,
    topic: 'Data Privacy & Limited Data Use (LDU)',
    question: 'In compliance with US state privacy laws (such as CCPA/CPRA in California), how does enabling the "Limited Data Use" (LDU) parameter in Meta tracking payloads affect event processing?',
    options: [
      'It deletes all customer data permanently after 5 seconds',
      'It restricts Meta processing of personal data for California residents, acting strictly as a service provider and disabling behavioral retargeting for users who have opted out of data sale/sharing',
      'It turns off all ads across the entire United States',
      'It converts all product prices to Bitcoin'
    ],
    correctAnswer: 1, // B
    explanation: 'The LDU flag instructs Meta to process data strictly as a service provider under CCPA/CPRA, restricting cross-context behavioral advertising for opted-out California consumers.'
  },
  {
    id: 25,
    topic: 'Disaster Recovery: Disabled Ad Account Protocol',
    question: 'What is the immediate, professional escalation protocol when an enterprise Meta Ad Account is unexpectedly restricted or disabled by automated policy bots?',
    options: [
      'Create 10 fake personal profiles and launch identical ads on a new personal credit card immediately',
      'Audit the flagged ads against Advertising Standards, submit a formal Business Support review request with concise evidence, engage Meta VIP Agency Support / Enterprise Account Reps, and activate pre-provisioned backup ad accounts and business portfolios',
      'Post angry public comments on Mark Zuckerberg personal Facebook profile',
      'Permanently shut down the business and cancel all customer orders'
    ],
    correctAnswer: 1, // B
    explanation: 'Enterprise disaster recovery relies on formal compliance review submissions, documented appeal evidence, dedicated Meta VIP/Enterprise reps, and pre-warmed backup business portfolios to maintain revenue continuity.'
  },
  {
    id: 26,
    topic: 'Cross-Border & Multi-Currency Scaling',
    question: 'When expanding an e-commerce Meta advertising campaign from the US into international markets (UK, Australia, Germany, Canada), what localization practice is critical for conversion rates?',
    options: [
      'Translate ads into Latin and keep US Dollar prices',
      'Deploy localized ad copy, display prices in local currency with local taxes (VAT/GST) included, integrate regional payment methods (Klarna, iDEAL, Shop Pay), and clarify international shipping times',
      'Run English ads only in non-English speaking countries',
      'Charge international customers double for customer support'
    ],
    correctAnswer: 1, // B
    explanation: 'Cross-border success requires seamless localization: native currency display, localized payment methods (e.g. Klarna, iDEAL), transparent shipping/tariff messaging, and culturally resonant copy.'
  },
  {
    id: 27,
    topic: 'Purchasing Power Parity (PPP) Budget Allocation',
    question: 'Why should advertisers separate global tier 1 countries (US, UK, CA, AU) from emerging market regions (Latin America, Southeast Asia) into distinct campaigns rather than combining them in one worldwide ad set?',
    options: [
      'Because lower CPMs in emerging markets will cause the algorithm to spend 90% of the budget in low-purchasing-power countries, starving high-AOV Tier 1 markets of impressions',
      'Because Meta does not allow ads to be shown in more than one country',
      'Because international time zones break Meta servers',
      'Because currency exchange rates change every second'
    ],
    correctAnswer: 0, // A
    explanation: 'Meta delivery system optimizes for lowest cost per result. In worldwide ad sets, budget flows disproportionately to cheap emerging market impressions, starving high-revenue Tier 1 markets.'
  },
  {
    id: 28,
    topic: 'Meta Lattice & Andromeda AI Systems',
    question: 'What do Meta modern AI ranking infrastructures (such as the Lattice and Andromeda architectures) achieve in auction delivery?',
    options: [
      'They unify multi-layer neural networks to predict user conversion intent, creative engagement, and long-term advertiser value simultaneously across billions of parameters in real-time auctions',
      'They generate automated memes for Facebook groups',
      'They replace the need to have a product or service to sell',
      'They automatically write code for WordPress websites'
    ],
    correctAnswer: 0, // A
    explanation: 'Meta Lattice AI architecture utilizes massive deep-learning models to evaluate multi-objective signals simultaneously, predicting user conversion probabilities with unprecedented accuracy.'
  },
  {
    id: 29,
    topic: 'Creative Portfolio Management & Fatigue Shielding',
    question: 'How does an enterprise brand spending $300,000/month maintain a stable "Creative Portfolio" to prevent account-wide performance collapse?',
    options: [
      'Run only 1 single static image ad for 3 years without changes',
      'Maintain an active balance of 70% Proven Core Winners, 20% Iterative Modular Variations, and 10% High-Risk Novel Experimental Concepts, rotating fresh creative weekly',
      'Delete all winning ads every Monday morning',
      'Only produce ads during a full moon'
    ],
    correctAnswer: 1, // B
    explanation: 'A 70/20/10 creative portfolio structure ensures financial stability from proven winners while continuously feeding the pipeline with new angles and experimental formats before fatigue strikes.'
  },
  {
    id: 30,
    topic: 'High-Value Customer Lifetime Value (LTV) Cohorts',
    question: 'In an enterprise value-based strategy, how should Custom Audiences be segmented based on historical RFM (Recency, Frequency, Monetary) data?',
    options: [
      'Group all customers alphabetically by first name',
      'Segment customers into Top 5% Whale Buyers (High AOV + Repeat), Mid-Tier 2x Buyers, and 1x Bargain Hunters, creating dedicated high-tier Lookalikes and VIP exclusion rules',
      'Delete all customers who purchased more than once',
      'Only target customers whose phone numbers end in an even number'
    ],
    correctAnswer: 1, // B
    explanation: 'RFM segmentation isolates your most profitable customer cohorts (top 5-10% LTV), providing high-potency seed audiences for Lookalikes and high-margin VIP cross-sell campaigns.'
  },
  {
    id: 31,
    topic: 'Lead Enrichment & Instant Call Bridging',
    question: 'In enterprise lead generation, what is the impact of automating "Instant Call Bridging" (<60 seconds) when a high-value lead submits a Meta Instant Form?',
    options: [
      'It instantly rings the sales floor and connects the representative to the prospect while they are still holding their mobile phone, lifting contact rates above 70% and conversion rates by over 300%',
      'It automatically signs the prospect up for 50 marketing newsletters',
      'It drains the prospect mobile battery immediately',
      'It sends a fax to the local post office'
    ],
    correctAnswer: 0, // A
    explanation: 'Connecting with leads within 60 seconds captures prospects while their attention and intent are at absolute peak, dramatically outperforming standard multi-hour email follow-ups.'
  },
  {
    id: 32,
    topic: 'Multi-Touch Attribution Discrepancies',
    question: 'When Google Analytics 4 (Last-Click Non-Direct) reports 100 sales from Meta Ads, but Meta Ads Manager reports 240 sales, what is the primary technical cause of this discrepancy?',
    options: [
      'Meta Analytics is always 100% fake',
      'Google Analytics uses a rigid last-touch attribution model that gives 100% credit to the final channel (e.g. Organic Search or Direct), whereas Meta credits top-of-funnel discovery clicks and 1-day view-through impressions',
      'The website server crashed during every transaction',
      'Google Analytics only tracks desktop computers'
    ],
    correctAnswer: 1, // B
    explanation: 'Last-click models (GA4) credit the final touchpoint before purchase, ignoring the critical top-of-funnel discovery role played by Meta Ads earlier in the multi-channel buying journey.'
  },
  {
    id: 33,
    topic: 'Enterprise Budget Rebalancing Algorithms',
    question: 'How do programmatic budget rebalancer scripts operate across multi-account enterprise portfolios?',
    options: [
      'They evaluate hourly ROAS, CPA, and frequency across all active campaigns, programmatically shifting capital from saturated ad sets to high-efficiency campaigns within pre-set governance thresholds',
      'They withdraw cash from corporate bank accounts and buy physical gold',
      'They randomly change daily budgets every 5 minutes',
      'They delete all ad accounts that have spent less than $1,000'
    ],
    correctAnswer: 0, // A
    explanation: 'Algorithmic rebalancers monitor real-time performance telemetry across ad accounts, shifting budget dynamically to highest-performing assets while honoring strict minimum/maximum spend guardrails.'
  },
  {
    id: 34,
    topic: 'Landing Page Message Match & Conversion Rate Optimization',
    question: 'What is the "Golden Thread" principle in high-converting direct-response Meta advertising?',
    options: [
      'Using gold-colored borders around all product images',
      'Ensuring strict visual, conceptual, and headline alignment between the ad creative hook, the landing page hero headline, and the checkout offer, eliminating cognitive dissonance',
      'Sewing gold thread into the product packaging',
      'Requiring customers to pay in physical gold coins'
    ],
    correctAnswer: 1, // B
    explanation: 'The Golden Thread represents unbroken congruence: when a user clicks a specific ad hook, the landing page must immediately reiterate that exact promise above the fold to maximize conversion.'
  },
  {
    id: 35,
    topic: 'Auction Competitiveness & Ad Quality Score',
    question: 'In Meta Total Value Auction Formula: `Total Value = (Advertiser Bid x Estimated Action Rate) + User Value`, how does User Value (Ad Quality) directly impact what an advertiser pays per conversion?',
    options: [
      'User Value has no impact on auction pricing',
      'High User Value (engaging, high-quality ads with positive user feedback and fast landing pages) provides an effective auction discount, allowing great creative to beat higher bidders at lower CPMs',
      'Meta doubles the cost for ads with high engagement',
      'User Value is only calculated on Christmas Day'
    ],
    correctAnswer: 1, // B
    explanation: 'Meta auction explicitly rewards high user experience. Ads with strong engagement and positive feedback receive an auction subsidy, winning top placements at significantly lower CPMs than boring ads.'
  },
  {
    id: 36,
    topic: 'Server-Side Cookie Expiration Defense',
    question: 'How does configuring the Conversions API with first-party cookie endpoints on your own domain (e.g. `metrics.yourbrand.com`) defend against Apple Safari 7-day Intelligent Tracking Prevention (ITP) caps?',
    options: [
      'It creates true first-party cookies set via HTTP response headers from your server, extending cookie persistence beyond client-side JavaScript 7-day limits and preserving long-term attribution',
      'It disables Safari security settings on customer iPhones',
      'It forces all mobile users to install Google Chrome',
      'It makes all ad cookies immune to user deletion'
    ],
    correctAnswer: 0, // A
    explanation: 'Safari ITP caps client-side JavaScript cookies at 7 days (or 24 hours). Setting `fbp` and `fbc` cookies via server-side HTTP response headers from a matching first-party CNAME restores long-term attribution.'
  },
  {
    id: 37,
    topic: 'Algorithmic Bid Strategy Selection',
    question: 'Under what specific condition is "Bid Cap" bidding superior to "Cost Cap" (Cost per Result Goal)?',
    options: [
      'When you want Meta to spend all your budget in the first 5 minutes of the day',
      'When you need to set a strict ceiling on the maximum bid entered into any individual auction to prevent bidding during high-competition surges, accepting that delivery may halt if market bids exceed your cap',
      'When launching a brand awareness campaign with no conversions',
      'When your business does not have a credit card'
    ],
    correctAnswer: 1, // B
    explanation: 'Bid Cap sets an absolute hard limit on the auction bid itself (rather than an average target CPA over time), giving quantitative media buyers total control over maximum auction participation costs.'
  },
  {
    id: 38,
    topic: 'Enterprise Change Logs & Audit Trails',
    question: 'Why must enterprise media teams maintain disciplined Change Logs and automated revision tracking in Ads Manager?',
    options: [
      'To enable forensic root-cause analysis when performance suddenly shifts, identifying exactly which user, budget change, bid tweak, or creative update triggered the variance',
      'Because Meta audits personal laptops of media buyers weekly',
      'To automatically publish all account changes to a public blog',
      'To increase the font size of reporting columns'
    ],
    correctAnswer: 0, // A
    explanation: 'Enterprise change logs track every modification (who, what, when), allowing teams to isolate the exact operational variable responsible for performance swings or compliance flags.'
  },
  {
    id: 39,
    topic: 'Retention Curve & ThruPlay Optimization',
    question: 'When analyzing a 30-second video ad with an average watch time of only 4.2 seconds and a 12% ThruPlay rate, what is the primary creative editing prescription?',
    options: [
      'Make the video 2 hours long',
      'Eliminate the 0-4s intro, start immediately at the highest-action moment, inject dynamic captions, cut scene transitions every 1.5 seconds, and place the core value proposition before second 5',
      'Lower the resolution of the video to 240p',
      'Delete the sound track and leave the video silent'
    ],
    correctAnswer: 1, // B
    explanation: 'Short average watch time indicates slow pacing and delayed payoff. Re-editing to start in media res with rapid cuts, visual motion, and early value delivery dramatically lifts video retention.'
  },
  {
    id: 40,
    topic: 'Enterprise Scaled Governance Checklist',
    question: 'What are the 4 non-negotiable foundational pillars of an enterprise-ready Meta Ads infrastructure before scaling past $5,000/day?',
    options: [
      '1. Verified Business Portfolio with 2FA & 2 Admins; 2. Dual Pixel + CAPI with EMQ >8.5 & CNAME first-party cookies; 3. Consolidated Account Architecture with 3:2:2 DCT testing; 4. Mathematical Stop-Loss Rules and Contribution Margin Financial Models',
      '1. A verified Twitter account; 2. 10,000 TikTok followers; 3. A 4K monitor; 4. A company sweatshirt',
      '1. Running ads only on desktop computers; 2. Using only stock photos; 3. Bidding $0.01 per click; 4. Using personal credit cards',
      '1. Creating 500 ad sets; 2. Running ads without a website; 3. Ignoring customer complaints; 4. Changing budgets every 15 minutes'
    ],
    correctAnswer: 0, // A
    explanation: 'Enterprise scaling requires verified governance, airtight CAPI telemetry, consolidated full-funnel architectures, continuous creative testing, and rigorous financial contribution margin governance.'
  }
];

// 14 Advanced Theory Module Titles
const ADVANCED_MODULE_TITLES = [
  'Enterprise Meta Ads Account Architecture',
  'Advanced Conversion Measurement and Server-Side Tracking',
  'Advanced Attribution and Incrementality',
  'Value-Based Optimization and Customer Quality',
  'Advanced Creative Research and Production Systems',
  'Advanced Testing and Experiment Design',
  'Automation, Rules, and Operational Workflows',
  'Advanced Lead Quality and CRM Feedback Loops',
  'Advanced E-commerce Profitability and Scaling',
  'Advanced Reels, Video, and UGC Strategy',
  'Meta Advertising Policies, Privacy, and Account Safety',
  'Advanced Troubleshooting and Performance Recovery',
  'International Advertising, Multi-Currency & Cross-Border Scaling',
  'AI-Driven Media Buying & Next-Gen Meta Ad Systems'
];

function generateAdvancedTheoryModules() {
  const modules = [];

  for (let i = 0; i < 14; i++) {
    const modNum = i + 1;
    const title = ADVANCED_MODULE_TITLES[i];
    const id = `fb-adv-${String(modNum).padStart(2, '0')}`;

    modules.push({
      id,
      title,
      description: `Master ${title.toLowerCase()} with enterprise-grade data engineering, incrementality testing, algorithmic scaling models, and disaster recovery playbooks.`,
      level: 'advanced',
      orderIndex: modNum,
      status: 'locked',
      requiresQuiz: false,
      type: 'theory',
      duration: '55 mins',
      xpReward: 200,
      lessonContent: {
        overview: `Master-level curriculum covering ${title.toLowerCase()} inside Meta enterprise advertising ecosystem. Architect multi-million-dollar acquisition infrastructures, server-side data clean rooms, MMM econometric models, and high-velocity creative production pipelines.`,
        analogyHero: `Think of ${title.toLowerCase()} in enterprise advertising like architecting an automated financial trading floor: every transaction, latency millisecond, risk parameter, and predictive algorithm is engineered for maximum capital efficiency and risk-adjusted contribution profit.`,
        objectives: [
          `Architect and govern enterprise-scale ${title.toLowerCase()} systems with multi-portfolio access control`,
          `Deploy server-side Conversions API gateways, offline CRM feedback loops, and first-party identity resolution`,
          `Measure true incremental lift, Marketing Mix Modeling (MMM), and net contribution margin dollars`,
          `Execute high-velocity creative testing systems, programmatic API automation, and disaster recovery playbooks`
        ],
        estimatedTime: '55 mins',
        keyTakeaways: [
          `Enterprise performance relies on true incrementality and contribution margin dollars rather than in-platform vanity metrics.`,
          `High-velocity modular creative production feeds Meta Lattice AI ranking models with continuous testing variations.`,
          `Robust governance, CAPI microservices, and proactive policy compliance protect enterprise revenue from unexpected disruptions.`
        ],
        summary: `Mastering ${title.toLowerCase()} qualifies you as an elite growth architect capable of directing 7-figure and 8-figure advertising operations with institutional precision.`,
        syntaxGuide: `// Enterprise Incrementality & Financial Formulas:\nIncremental_Lift = (Test_Group_Conversions - Control_Group_Conversions) / Control_Group_Conversions\nContribution_Margin_$ = Gross_Revenue - COGS - Ad_Spend - Shipping_Fees - Payment_Gateway_Fees\nWhale_LTV_Threshold = Mean(Customer_LTV) + 2 * StdDev(Customer_LTV)\nEMQ_Score = Weighted_Sum(em, ph, fbp, fbc, client_ip, user_agent)`,
        practiceExercises: [
          {
            title: `${title} Enterprise Engineering Challenge`,
            instructions: `Audit an enterprise scaling scenario addressing ${title.toLowerCase()}. Calculate statistical incrementality, contribution margin dollar expansion, or CAPI EMQ scores, and write an automated programmatic execution script.`,
            starterCode: `// Configure advanced enterprise logic for ${title}\ninterface EnterpriseInput {\n  grossRevenue: number;\n  cogs: number;\n  adSpend: number;\n  variableFees: number;\n  testConversions: number;\n  controlConversions: number;\n}\n\nfunction auditEnterprise(input: EnterpriseInput) {\n  return {\n    contributionMargin: 0,\n    incrementalLiftPct: 0,\n    recommendation: \'\'\n  };\n}`,
            solutionCode: `function auditEnterprise(input: EnterpriseInput) {\n  const contributionMargin = input.grossRevenue - input.cogs - input.adSpend - input.variableFees;\n  const incrementalLiftPct = ((input.testConversions - input.controlConversions) / (input.controlConversions || 1)) * 100;\n  const recommendation = contributionMargin > 0 && incrementalLiftPct >= 15.0\n    ? \'SCALE_BUDGET_AGGRESSIVELY\'\n    : \'RECALIBRATE_OFFER_AND_UNIT_ECONOMICS\';\n  return {\n    contributionMargin: Number(contributionMargin.toFixed(2)),\n    incrementalLiftPct: Number(incrementalLiftPct.toFixed(1)),\n    recommendation\n  };\n}`
          }
        ],
        sections: [
          {
            id: `sec-${id}-1`,
            title: `1. Enterprise Architectural Framework of ${title}`,
            difficulty: 'Advanced',
            content: `At the enterprise level, ${title.toLowerCase()} represents the intersection of quantitative finance, data engineering, and consumer psychology. Managing accounts spending $100k-$1M+ monthly requires institutional systems.\n\n### Strategic Pillars of Enterprise Execution\n- **Multi-Entity Governance**: Structuring parent Business Portfolios, regional ad accounts, single sign-on (SSO), and Partner asset scopes.\n- **First-Party Data Clean Rooms**: Integrating CRM offline conversions, customer lifetime value (LTV) deciles, and server-side identity enrichment.\n- **Algorithmic Liquidity & Lattice Modeling**: Structuring campaigns to maximize AI training signal density while enforcing automated margin guardrails.`,
            explanation: `Deploying institutional architectures ensures that ad spend scales predictably while safeguarding data security, brand reputation, and profit margins.`,
            codeSnippets: [
              {
                filename: `module_adv_${modNum}_enterprise_blueprint.json`,
                language: 'json',
                title: `${title} — Enterprise Governance & System Architecture`,
                code: `{\n  "enterpriseModule": "${title}",\n  "tier": "Advanced",\n  "governance": {\n    "portfolioHierarchy": "Holding Company -> Regional Brand Portfolios -> Ad Accounts",\n    "iamSecurity": "SAML SSO Enforced + 2FA Mandatory for All Users",\n    "serverGateway": "AWS ECS Microservice / Cloudflare Worker CAPI Gateway",\n    "firstPartyCname": "metrics.branddomain.com",\n    "offlineConversionSync": "Real-Time Webhook with CRM Closed Revenue"\n  },\n  "financialGuardrails": {\n    "targetContributionMarginUSD": 150000,\n    "minIncrementalLiftPct": 18.5,\n    "automatedStopLossCpaMultiplier": 2.2\n  }\n}`,
                lineByLine: [
                  { line: '"firstPartyCname": "metrics.branddomain.com"', explanation: 'Sets first-party cookies via server HTTP headers to bypass Safari 7-day ITP limitations.' },
                  { line: '"minIncrementalLiftPct": 18.5', explanation: 'Enforces scientific incrementality thresholds before allocating scale budget.' }
                ]
              }
            ],
            miniPractice: {
              question: `Why is first-party CNAME server routing (e.g., \`metrics.yourdomain.com\`) critical for enterprise tracking?`,
              options: [
                'It sets cookies via server HTTP response headers on your root domain, defending against browser 7-day ITP deletion and maintaining long-term multi-touch attribution',
                'It makes the website load without an internet connection',
                'It bypasses credit card payment processing fees',
                'It automatically verifies all Facebook Pages'
              ],
              correctAnswer: 0,
              explanation: 'Server-side first-party CNAME routing ensures tracking cookies are recognized as genuine first-party assets, preventing premature browser deletion.'
            },
            proTip: `Integrate real-time Slack/Teams webhooks into your automated rule engine to alert media buyers within 60 seconds of any major account variance or policy warning.`,
            commonMistakes: [
              `Relying purely on platform-reported ROAS without validating blended MER and incremental holdout lift.`,
              `Failing to maintain a pre-warmed backup Business Portfolio and dataset for mission-critical brands.`
            ]
          },
          {
            id: `sec-${id}-2`,
            title: `2. Production Deployment, API Engineering & Testing Pipelines`,
            difficulty: 'Advanced',
            content: `Executing ${title.toLowerCase()} at scale requires technical rigor and automated workflows:\n\n1. **CAPI Microservice Infrastructure**: Deploy high-throughput serverless endpoints handling real-time payload enrichment, SHA-256 normalization, and deduplication.\n2. **Econometric & Incrementality Testing**: Execute matched-market Geo-Lift studies and Robyn MMM regressions to establish true channel causality.\n3. **Modular Creative Sprints**: Establish continuous 14-day production sprints delivering 10+ new hook variations, UGC formats, and authority angles per cycle.\n4. **Programmatic API Automation**: Build custom scripts interfacing with the Meta Marketing API for automated pacing, bulk asset creation, and financial audits.`,
            explanation: `Automating production pipelines and measurement workflows eliminates human operational bottlenecks and accelerates profitable growth.`,
            codeSnippets: [
              {
                filename: `module_adv_${modNum}_marketing_api.ts`,
                language: 'typescript',
                title: `${title} — Meta Marketing API Programmatic Campaign Generator & Balancer`,
                code: `export interface ProgrammaticCampaignPayload {\n  adAccountId: string;\n  name: string;\n  objective: 'OUTCOME_SALES' | 'OUTCOME_LEADS';\n  dailyBudgetUSD: number;\n  bidStrategy: 'LOWEST_COST_WITHOUT_CAP' | 'COST_CAP';\n  targetCostUSD?: number;\n}\n\nexport async function deployProgrammaticCampaign(payload: ProgrammaticCampaignPayload) {\n  const endpoint = \`https://graph.facebook.com/v20.0/act_\${payload.adAccountId}/campaigns\`;\n  const body = {\n    name: payload.name,\n    objective: payload.objective,\n    status: 'PAUSED',\n    special_ad_categories: [],\n    daily_budget: payload.dailyBudgetUSD * 100, // API uses cents\n    bid_strategy: payload.bidStrategy\n  };\n\n  return {\n    success: true,\n    endpoint,\n    payload: body,\n    log: \`Initialized programmatic campaign \${payload.name} with $\${payload.dailyBudgetUSD}/day budget.\`\n  };\n}`,
                lineByLine: [
                  { line: 'daily_budget: payload.dailyBudgetUSD * 100', explanation: 'Meta Marketing API expects financial values formatted in integer cents.' },
                  { line: 'status: "PAUSED"', explanation: 'Best practice: deploy programmatically as PAUSED for final automated QA before publishing.' }
                ]
              }
            ],
            miniPractice: {
              question: `Why should programmatic API campaign deployments always initialize in the PAUSED status?`,
              options: [
                'To allow automated QA scripts and compliance checks to verify UTM parameters, destination URLs, and pixel IDs before live spend begins',
                'Because Meta charges triple for active API campaigns',
                'Because paused campaigns rank higher on Instagram',
                'Because API keys expire after 1 second'
              ],
              correctAnswer: 0,
              explanation: 'Initializing in PAUSED status provides an automated buffer to run pre-flight QA validation on tracking tags, URLs, and creative assets before budget is committed.'
            },
            proTip: `Build an automated pre-flight validator that checks all destination URLs with HTTP HEAD requests to ensure 200 OK status codes and correct UTM parameters prior to launch.`,
            commonMistakes: [
              `Hardcoding access tokens in source code rather than using secure cloud secret managers (AWS Secrets Manager / GCP Secret Manager).`,
              `Failing to implement exponential backoff retry logic when making high-volume Marketing API requests.`
            ]
          },
          {
            id: `sec-${id}-3`,
            title: `3. Incident Response, Policy Defense & Disaster Recovery Playbooks`,
            difficulty: 'Advanced',
            content: `Even enterprise ad accounts spending $100k+/day occasionally face sudden performance drops, disabled ad accounts, or algorithm disruptions. Having structured incident response playbooks prevents catastrophic revenue loss.\n\n### Enterprise Emergency Playbooks\n- **Playbook A: False-Positive Policy Restriction**: File structured Business Support review with clean documentation, contact Meta VIP Agency Reps, and activate backup account routing.\n- **Playbook B: Sudden CPM Surge (>80%)**: Audit auction overlap across campaigns, inspect recent Page Feedback survey scores, and check for creative fatigue across top 3 spending ads.\n- **Playbook C: Tracking Breakage / CAPI Pipeline Failure**: Fail over to direct client-side pixel telemetry, inspect cloud serverless error logs, and redeploy CAPI container microservices.`,
            explanation: `Structured incident response turns potential existential advertising crises into manageable, standardized operational procedures.`,
            codeSnippets: [
              {
                filename: `module_adv_${modNum}_disaster_recovery.ts`,
                language: 'typescript',
                title: `${title} — Automated Incident Response & Recovery Triage Engine`,
                code: `export interface IncidentTelemetry {\n  cpmSurgePercent: number;\n  capiFailureRate: number;\n  accountStatus: 'ACTIVE' | 'RESTRICTED' | 'DISABLED';\n  pageFeedbackScore: number;\n}\n\nexport function executeIncidentTriage(t: IncidentTelemetry) {\n  if (t.accountStatus === 'DISABLED') {\n    return {\n      severity: 'CRITICAL',\n      actionPlan: [\n        'Activate pre-warmed secondary Business Portfolio and backup Ad Account',\n        'Submit formal review appeal via Meta Business Support with documented compliance evidence',\n        'Notify Executive Leadership and divert spend to secondary paid channels (Google / TikTok)'\n      ]\n    };\n  }\n\n  if (t.capiFailureRate > 10.0) {\n    return {\n      severity: 'HIGH',\n      actionPlan: [\n        'Restart CAPI microservice container on Cloud Run / AWS Lambda',\n        'Verify SHA-256 hashing and API access token validity',\n        'Inspect Events Manager diagnostics tab for payload rejection codes'\n      ]\n    };\n  }\n\n  return {\n    severity: 'NORMAL',\n    actionPlan: ['System telemetry healthy. Continue standard monitoring.']\n  };\n}`,
                lineByLine: [
                  { line: 'if (t.accountStatus === "DISABLED")', explanation: 'Immediate high-priority triage protocol for account restrictions.' },
                  { line: 'if (t.capiFailureRate > 10.0)', explanation: 'Automated diagnostic trigger for server-side telemetry degradation.' }
                ]
              }
            ],
            miniPractice: {
              question: `What is the most important prerequisite for surviving an unexpected Meta ad account restriction with zero revenue downtime?`,
              options: [
                'Having a pre-provisioned, pre-warmed secondary Business Portfolio with verified domain ownership, backup dataset sharing, and alternative payment methods in place before any restriction occurs',
                'Complaining on LinkedIn',
                'Closing the company bank account',
                'Deleting all company social media accounts'
              ],
              correctAnswer: 0,
              explanation: 'Proactive redundancy — maintaining verified backup portfolios, pixel dataset sharing, and alternative billing lines — allows instant traffic diversion with zero operational downtime.'
            },
            proTip: `Regularly audit your Page Feedback Score in Meta Business Support Home; implement proactive post-purchase email updates to ensure customer delivery expectations are met.`,
            commonMistakes: [
              `Attempting to circumvent an account restriction by creating unverified personal accounts, which results in permanent identity bans across all associated assets.`,
              `Ignoring early warning emails from Meta policy teams regarding landing page compliance or claim wording.`
            ]
          }
        ]
      }
    });
  }

  return modules;
}

// Advanced Practical Projects (2 Projects)
const ADVANCED_PROJECT_1 = {
  id: 'fb-adv-proj-01',
  title: 'Advanced Project: Omnichannel Meta Ads Growth Infrastructure',
  description: 'Architect and execute an enterprise-grade omnichannel Meta Ads growth infrastructure for a multi-product international brand.',
  level: 'advanced',
  orderIndex: 15,
  status: 'locked',
  requiresQuiz: false,
  isProject: true,
  type: 'project',
  duration: '300 mins',
  xpReward: 600,
  projectDetails: {
    overview: 'You are the VP of Performance Marketing hired by OmniPulse Health & Fitness, an international wellness powerhouse generating $2.5M/month in omni-channel revenue across three distinct business verticals: D2C E-commerce Nutritional Supplements, a Mobile Fitness Subscription App (iOS/Android), and a network of 45 Premium Local Boutique Fitness Studios across the US and UK. Your mandate is to deploy a $250,000/month Meta advertising infrastructure that synchronizes growth across all three verticals with unified tracking, value-based optimization, and econometric incrementality testing.',
    scenario: 'OmniPulse is suffering from severe account fragmentation (18 uncoordinated ad accounts), tracking discrepancies between web and mobile apps, cannibalization between local studio leads and app subscribers, and blind attribution reliance. You must design an enterprise governance portfolio, deploy a high-throughput Conversions API microservice, launch a modular UGC production engine, construct a Value-Based Optimization (VBO) model, and build a Marketing Mix Modeling (Robyn MMM) attribution dashboard.',
    estimatedHours: '5 hours',
    learningObjectives: [
      'Architect an enterprise multi-portfolio governance model across multi-brand and international subsidiaries',
      'Deploy an omnichannel data engineering infrastructure (Pixel + CAPI + Mobile App Events + Offline Studio CRM)',
      'Design a modular UGC creative production pipeline delivering 20+ fresh testing variations every month',
      'Construct Value-Based Optimization (VBO) and Dynamic Profit Margin bidding models',
      'Formulate an econometric Marketing Mix Modeling (MMM) and Geo-Lift experimentation roadmap',
      'Establish a 90-day multi-region growth model with automated risk guardrails and disaster recovery protocols'
    ],
    requirements: [
      'Architect an enterprise Business Portfolio hierarchy separating D2C E-commerce, Mobile App, and Local Studio ad accounts',
      'Specify serverless Conversions API (CAPI) and Mobile Measurement Partner (MMP) tracking architecture with >8.5 EMQ',
      'Design a modular 70/20/10 Creative Portfolio matrix with complete creative briefs and storyboard variations',
      'Establish Value-Based Optimization (VBO) bidding models with dynamic profit margin event payloads',
      'Formulate a matched-market Geo-Lift testing protocol to measure true incremental revenue lift',
      'Construct a 90-day enterprise expansion roadmap across US and UK markets with financial risk registers'
    ],
    deliverables: [
      '1. Enterprise Multi-Portfolio Governance & RBAC Architecture (Holding company portfolio, subsidiary ad accounts, SSO security, partner permissions)',
      '2. Full-Funnel Omnichannel Strategy Blueprint (Supplements D2C E-commerce + App Subscription Growth + Local Boutique Studio Leads)',
      '3. Server-Side Conversions API (CAPI) & App Telemetry Specification (Cloudflare Worker / AWS Lambda CAPI gateway, MMP integration, SHA-256 normalization, EMQ >8.5)',
      '4. Offline CRM & Studio POS Conversion Feedback Pipeline (Syncing studio membership sales and app free-to-paid subscription upgrades back to Meta)',
      '5. Modular Creative Production System & 30-Day UGC Creator Briefs (3 Core Concepts x 3 Visual Hooks x 2 CTAs = 18 modular ad variations)',
      '6. Value-Based Optimization (VBO) & Contribution Profit Bidding Strategy (Passing net margin dollars, Minimum ROAS bidding rules)',
      '7. Automated Rules & Marketing API Governance Portfolio (Stop-loss rules, scale triggers, creative fatigue alerts, Slack webhook integration)',
      '8. Scientific A/B Experimentation & Matched-Market Geo-Lift Testing Protocol (Sample size calculations, MDE, holdout test design)',
      '9. Global Expansion & Multi-Currency Localization Plan (US and UK regional segmentation, local currency feeds, VAT compliance)',
      '10. Econometric Marketing Mix Modeling (MMM) & Custom Attribution Dashboard (Robyn MMM pipeline, blended MER, nCAC analysis)',
      '11. Privacy, Policy Compliance & Limited Data Use (LDU) Implementation Matrix (GDPR, CCPA/CPRA, Page Feedback health score protocols)',
      '12. 90-Day Enterprise Growth Roadmap, Financial Forecast & Disaster Recovery Playbook (Spend trajectory from $250k/mo to $500k/mo, backup portfolio failover)'
    ],
    rubric: [
      {
        criteria: 'Enterprise Governance & Omnichannel Architecture',
        criterion: 'Enterprise Governance & Omnichannel Architecture',
        weight: '25%',
        description: 'Sophisticated multi-portfolio organization, strict RBAC permissions, and synchronized e-commerce/app/lead funnels.'
      },
      {
        criteria: 'Data Engineering, CAPI & Identity Telemetry',
        criterion: 'Data Engineering, CAPI & Identity Telemetry',
        weight: '25%',
        description: 'Flawless serverless CAPI gateway architecture, offline CRM feedback synchronization, and first-party identity resolution.'
      },
      {
        criteria: 'Creative Production & Testing Velocity',
        criterion: 'Creative Production & Testing Velocity',
        weight: '25%',
        description: 'Modular UGC production frameworks, compelling angle research, and structured multi-format testing matrices.'
      },
      {
        criteria: 'Econometric Attribution, Scaling & Risk Management',
        criterion: 'Econometric Attribution, Scaling & Risk Management',
        weight: '25%',
        description: 'Rigorous Geo-Lift experiment design, Robyn MMM integration, contribution margin financial scaling, and disaster recovery.'
      }
    ],
    submissionChecklist: [
      'Verified enterprise multi-portfolio governance architecture across e-commerce, app, and local studio accounts',
      'Configured server-side CAPI and MMP mobile telemetry with deterministic event deduplication',
      'Engineered modular creative production matrix with 18 distinct testable variations',
      'Formulated Value-Based Optimization (VBO) bidding models with dynamic profit margin parameters',
      'Designed scientific matched-market Geo-Lift experiment with control and test clusters',
      'Constructed econometric attribution dashboard comparing platform data against blended MER',
      'Established disaster recovery failover playbooks for policy restrictions and account continuity'
    ]
  }
};

const ADVANCED_PROJECT_2 = {
  id: 'fb-adv-proj-02',
  title: 'Advanced Project: Meta Ads Audit and Recovery Case Study',
  description: 'Conduct a comprehensive forensic audit and construct an executive turnaround recovery plan for a severely distressed Meta Ads account.',
  level: 'advanced',
  orderIndex: 16,
  status: 'locked',
  requiresQuiz: false,
  isProject: true,
  type: 'project',
  duration: '300 mins',
  xpReward: 600,
  projectDetails: {
    overview: 'You are the Principal Growth Consultant hired by the Board of Directors of Apex Horizon Gear, a premium outdoor technical apparel and equipment e-commerce brand spending $60,000/month on Meta Ads. Over the past 90 days, account performance has collapsed: Customer Acquisition Cost (CAC) surged by 65% (from $28 to $46.20), ROAS dropped from 3.8x to 1.6x (below their 2.1x break-even), the primary ad account was restricted twice for misleading claims, and ad frequency has skyrocketed to 5.2 with severe creative fatigue.',
    scenario: 'The company is burning $30,000/month in net cash. You must execute an exhaustive forensic audit across their entire advertising ecosystem — evaluating account architecture, tracking telemetry, creative assets, audience saturation, landing page friction, attribution discrepancies, and policy compliance — and produce an immediate 14-day stabilization plan and a 30/60/90-day profit-first turnaround roadmap.',
    estimatedHours: '5 hours',
    learningObjectives: [
      'Execute a forensic multi-dimensional Meta Ads audit across architecture, data, creative, audience, and policy',
      'Perform root-cause analysis (RCA) to isolate underlying performance bottlenecks and auction inefficiencies',
      'Diagnose and resolve tracking anomalies, pixel/CAPI deduplication failures, and low EMQ scores',
      'Formulate an immediate 14-day emergency stabilization protocol to stop cash burn',
      'Architect a 30/60/90-day profit-first recovery roadmap with mathematical financial projections',
      'Construct an enterprise risk register and policy compliance governance matrix'
    ],
    requirements: [
      'Conduct an exhaustive forensic audit across 10 specific operational dimensions',
      'Isolate top 3 root-cause failure mechanisms with quantitative empirical evidence',
      'Design an immediate 14-day cash-preservation triage protocol cutting wasteful spend',
      'Re-architect the campaign structure into a Simplified Account Structure (SAS) with 3:2:2 dynamic testing',
      'Reconcile platform attribution against blended Marketing Efficiency Ratio (MER) and first-party analytics',
      'Construct a 30/60/90-day financial turnaround forecast modeling CPA reduction and ROAS recovery'
    ],
    deliverables: [
      '1. Executive Summary & Forensic Audit Dashboard (High-level findings, baseline metrics, revenue bleeding diagnosis)',
      '2. Account Architecture & Auction Overlap Audit (Identification of 24 fragmented ad sets, self-cannibalization, and Learning Limited gridlock)',
      '3. Pixel, Conversions API & Event Match Quality (EMQ) Audit (Identification of missing server events, 40% duplicate transactions, and low 4.2 EMQ)',
      '4. Audience Saturation & Exclusion Gap Analysis (Identification of missing 30-day/180-day customer exclusions, ad frequency 5.2, and audience fatigue)',
      '5. Creative Portfolio & Ad Relevance Diagnostic Audit (Analysis of 6-month-old static images, low Quality Rankings, and lack of vertical video formats)',
      '6. Landing Page & Checkout Friction Diagnostic (Mobile load speed analysis, drop-off between AddToCart and Purchase, price transparency issues)',
      '7. Attribution Reconciliation & In-Platform Discrepancy Audit (Analysis of 1-day view attribution inflation, blended MER vs Ads Manager reported ROAS)',
      '8. Policy Compliance, Page Feedback & Ad Rejection History Audit (Forensic review of past account bans, sensational claims, and Page Health score at 2.1)',
      '9. Root-Cause Analysis (RCA) Matrix & Ranked Bottleneck Hierarchy (Quantitative ranking of the 5 primary performance destroyers)',
      '10. Immediate 14-Day Emergency Stabilization Protocol (Action plan: pausing 16 dead ad sets, fixing CAPI deduplication, launching emergency UGC hooks)',
      '11. 30/60/90-Day Re-Architecture & Profit-First Scaling Roadmap (Phased deployment of SAS, Advantage+ Shopping, 3:2:2 DCT testing, and dynamic retargeting)',
      '12. Financial Turnaround Model, KPI Projections & Risk Register (Projected CAC reduction to $24.50, ROAS recovery to 3.4x, cash flow positive by Day 45)'
    ],
    rubric: [
      {
        criteria: 'Forensic Audit Depth & Data Analysis',
        criterion: 'Forensic Audit Depth & Data Analysis',
        weight: '25%',
        description: 'Comprehensive evaluation across all operational dimensions with rigorous empirical backing.'
      },
      {
        criteria: 'Root-Cause Analysis & Technical Diagnosis',
        criterion: 'Root-Cause Analysis & Technical Diagnosis',
        weight: '25%',
        description: 'Precise identification of core system failures (tracking deduplication, audience overlap, creative fatigue, policy risk).'
      },
      {
        criteria: 'Emergency Stabilization & Immediate Triage',
        criterion: 'Emergency Stabilization & Immediate Triage',
        weight: '25%',
        description: 'Decisive 14-day protocol stopping financial bleeding and stabilizing core delivery immediately.'
      },
      {
        criteria: 'Turnaround Roadmap, Financial Modeling & Risk Governance',
        criterion: 'Turnaround Roadmap, Financial Modeling & Risk Governance',
        weight: '25%',
        description: 'Realistic 30/60/90-day roadmap, disciplined unit economics projections, and permanent compliance guardrails.'
      }
    ],
    submissionChecklist: [
      'Executed forensic audit across all 10 required operational dimensions',
      'Constructed quantitative Root-Cause Analysis (RCA) matrix ranking primary bottlenecks',
      'Formulated immediate 14-day emergency cash-preservation triage protocol',
      'Re-engineered campaign structure into Simplified Account Structure (SAS)',
      'Reconciled tracking telemetry and fixed CAPI deduplication and EMQ gaps',
      'Constructed 30/60/90-day financial turnaround model with CPA and ROAS recovery milestones',
      'Established permanent policy compliance audit checklist and risk register'
    ]
  }
};

// Advanced Assessment Task
const ADVANCED_ASSESSMENT_TASK = {
  id: 'fb-adv-exam',
  title: 'Level 3: Official Master Certification Exam',
  description: 'Pass the 40-question enterprise master examination to validate your expertise in enterprise architectures, Conversions API telemetry, incrementality measurement, value-based scaling, and turnaround audits to earn the Master Facebook Ads Specialist Credential.',
  level: 'advanced',
  orderIndex: 17,
  status: 'locked',
  requiresQuiz: true,
  isFinalAssessment: true,
  type: 'quiz',
  duration: '90 mins',
  xpReward: 600,
  passingScore: 35,
  totalQuestions: 40,
  questions: ADVANCED_ASSESSMENT
};

// Assemble all Advanced tasks (14 Theory + 2 Projects + 1 Assessment = 17 tasks)
const ALL_ADVANCED_TASKS = [
  ...generateAdvancedTheoryModules(),
  ADVANCED_PROJECT_1,
  ADVANCED_PROJECT_2,
  ADVANCED_ASSESSMENT_TASK
];

// Write out the file
const fileHeader = `import { Task, QuizQuestion } from '../../types/roadmap.types';\n\n`;
const assessmentExport = `export const FACEBOOK_ADS_ADVANCED_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(ADVANCED_ASSESSMENT, null, 2)};\n\n`;
const tasksExport = `export const FACEBOOK_ADS_ADVANCED_TASKS: Task[] = ${JSON.stringify(ALL_ADVANCED_TASKS, null, 2)};\n`;

fs.writeFileSync(targetFile, fileHeader + assessmentExport + tasksExport, 'utf-8');
console.log(`✅ Successfully generated Facebook Ads Advanced data at: ${targetFile}`);
console.log(`   Tasks count: ${ALL_ADVANCED_TASKS.length} (14 Theory + 2 Projects + 1 Assessment)`);
console.log(`   MCQs count: ${ADVANCED_ASSESSMENT.length} (Passing score: 35/40)`);
