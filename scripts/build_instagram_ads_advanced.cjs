const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/features/roadmap/data/instagram-ads/instagramAdsAdvanced.data.ts');
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 40 High-Quality Advanced MCQs with perfectly balanced distribution (10 A, 10 B, 10 C, 10 D)
const ADVANCED_ASSESSMENT = [
  {
    id: 1,
    topic: 'CAPI Cloud Gateway Architecture',
    question: 'In enterprise Meta Conversions API (CAPI) Cloud Gateway implementations deployed on AWS (Amazon Web Services) or GCP (Google Cloud Platform), how does direct server event streaming maintain 99.99% data pipeline availability during massive traffic spikes like Black Friday?',
    options: [
      'By utilizing autoscaling containerized microservices (AWS ECS / GCP Cloud Run) backed by asynchronous queuing engines (Amazon SQS / Google Cloud Pub/Sub) that ingest raw webhooks and throttle batch requests to Meta Graph API without dropping payloads.',
      'By automatically deleting all incoming customer traffic that originates from mobile cellular networks.',
      'By converting all purchase transactions into static PDF files and emailing them to Meta support desks.',
      'By disabling the website SSL certificate during peak checkout hours.'
    ],
    correctAnswer: 0, // A
    explanation: 'Enterprise CAPI architectures leverage distributed queue brokers (SQS/PubSub) and autoscaling compute to buffer high-volume webhook events, guaranteeing zero data loss and resilient batch ingestion to Meta Graph API.'
  },
  {
    id: 2,
    topic: 'Marketing Mix Modeling (MMM)',
    question: 'When implementing open-source Bayesian Marketing Mix Modeling (MMM) frameworks like Meta Robyn or Google Meridian, how is the econometric concept of "Adstock Transformation" applied to paid social channels?',
    options: [
      'It measures the weight of the computer monitors used by the marketing team.',
      'It models both the immediate carryover effect (decay/half-life) and diminishing marginal returns (Hill saturation curves) of ad spend over time, isolating baseline organic revenue from true paid media lift.',
      'It automatically purchases shares of Meta stock whenever ad spend increases.',
      'It calculates the number of employees required to respond to Instagram comments.'
    ],
    correctAnswer: 1, // B
    explanation: 'Adstock transformation in MMM accounts for memory decay (the lingering psychological effect of ads over days/weeks) and non-linear saturation (Hill functions) to calculate true diminishing returns on paid media.'
  },
  {
    id: 3,
    topic: 'Geo-Lift Incremental Experimentation',
    question: 'How does a randomized Geo-Lift incrementality experiment establish statistical causality for paid Instagram advertising performance?',
    options: [
      'By showing ads to all cities on weekdays and turning off ads on weekends.',
      'By asking customers in a survey if they remember seeing an ad on Instagram.',
      'By partitioning geographical markets into matched synthetic control and test cells using pre-test ARIMA modeling, then pulsing spend in test markets while holding control markets dark to measure true incremental sales lift.',
      'By deleting Google Analytics and relying solely on Instagram in-app likes.'
    ],
    correctAnswer: 2, // C
    explanation: 'Geo-Lift testing creates synthetic counterfactual control markets to rigorously measure the incremental revenue generated strictly by ad spend that would not have occurred organically.'
  },
  {
    id: 4,
    topic: 'Meta Graph API Programmatic Automation',
    question: 'When scaling ad operations programmatically via Meta Graph API (v19.0+), what endpoint and method is used to batch-create 50 localized ad creative assets with dynamic video IDs and text overlays in a single HTTP request?',
    options: [
      'GET /v19.0/act_{ad_account_id}/insights',
      'DELETE /v19.0/act_{ad_account_id}/users',
      'PUT /v19.0/act_{ad_account_id}/billing',
      'POST /v19.0/act_{ad_account_id}/adcreatives using batch requests with `asset_feed_spec` and JSON parameter payloads'
    ],
    correctAnswer: 3, // D
    explanation: 'The Graph API batch POST to `/act_{id}/adcreatives` accepts arrayed `asset_feed_spec` payloads, allowing automated CI/CD pipelines to provision dozens of creative variations in a single network round-trip.'
  },
  {
    id: 5,
    topic: 'Advantage+ Shopping Campaigns (ASC)',
    question: 'In enterprise Advantage+ Shopping Campaigns (ASC), what is the architectural mechanism used to enforce a strict spend cap on existing customer retention while dedicating >=80% of budget to net-new customer acquisition?',
    options: [
      'Configuring the "Existing Customer Budget Cap" within the ASC campaign settings, mapped to an active Custom Audience Dataset containing 180-day purchasers.',
      'Manually deleting all past buyers from the company CRM database.',
      'Creating 50 separate ad accounts for different customer types.',
      'Setting the campaign objective to Brand Awareness.'
    ],
    correctAnswer: 0, // A
    explanation: 'ASC includes a native Existing Customer Budget Cap setting where advertisers define their existing customer audience and assign a maximum spend percentage (e.g. 5-15%), reserving the vast majority of capital for net-new prospecting.'
  },
  {
    id: 6,
    topic: 'Bid-Cap & Target-Cost Bidding',
    question: 'Under high-budget manual Bid-Cap bidding strategies in Meta Ads Manager, what happens during ad delivery if the advertiser sets a Bid Cap that is lower than the clearing price of the current auction floor?',
    options: [
      'Meta will charge the advertiser double the amount.',
      'The ad set will simply not enter or win auctions, pacing will throttle down to $0 spend, and budget is preserved until auction clearing costs drop below the cap threshold.',
      'Meta will automatically close the advertiser\'s business bank account.',
      'The ad will be delivered exclusively to bots.'
    ],
    correctAnswer: 1, // B
    explanation: 'Bid caps protect margins by acting as a hard gate. If market competition drives impression costs above the specified bid cap, Meta will not clear the auction, resulting in zero spend rather than unprofitable conversions.'
  },
  {
    id: 7,
    topic: 'Data Clean Rooms & Privacy Sandbox',
    question: 'How do enterprise brands leverage Data Clean Rooms (such as Snowflake, AWS Clean Rooms, or Meta Advanced Analytics) to evaluate cross-channel attribution without exposing Raw PII?',
    options: [
      'By sharing unencrypted customer spreadsheets via public Dropbox links.',
      'By disabling all privacy laws for participating corporations.',
      'By joining pseudonymized, encrypted first-party transactional data with platform exposure graphs in a privacy-preserving enclave using differential privacy and aggregated SQL queries.',
      'By manually calling every customer on the telephone.'
    ],
    correctAnswer: 2, // C
    explanation: 'Data Clean Rooms allow secure multi-party computation where first-party CRM data and ad platform exposure logs can be mathematically joined without either party accessing raw personal identifiers.'
  },
  {
    id: 8,
    topic: 'Global Multi-Currency Catalog Operations',
    question: 'When deploying multi-country dynamic catalog advertising on Instagram for global e-commerce, how does Meta manage localized pricing, currency symbols, and multi-language overlays across 30+ international markets?',
    options: [
      'By requiring the advertiser to manually create 30 separate Shopify websites.',
      'By translating all product titles into Latin.',
      'By only allowing purchases in US Dollars worldwide.',
      'By ingesting a Primary Product Feed mapped to Secondary Feeds containing localized price, currency, language, and inventory overrides matched automatically to user locale.'
    ],
    correctAnswer: 3, // D
    explanation: 'Meta Commerce Manager supports Secondary Catalog Feeds that append country-specific currencies, localized pricing, translated descriptions, and local inventory levels to the master product ID.'
  },
  {
    id: 9,
    topic: 'Offline Conversions API Synchronization',
    question: 'For omnichannel retailers with physical retail stores, how does the Offline Conversions API bridge the attribution gap between online Instagram ad views and in-store Point-of-Sale (POS) cash register purchases?',
    options: [
      'By uploading hashed in-store POS transaction records (email, phone, timestamp, value) to Meta, which matches POS buyers against ad impressions within a 28-day attribution window.',
      'By requiring in-store cashiers to ask every customer to show their Instagram profile.',
      'By scanning customers\' faces at physical store entrances with facial recognition.',
      'By offering free physical store products to anyone who clicks an ad.'
    ],
    correctAnswer: 0, // A
    explanation: 'Offline Conversions API matches hashed POS transaction logs (captured via loyalty programs, digital receipts, or payment processors) against Meta ad exposure logs to quantify omnichannel ROAS.'
  },
  {
    id: 10,
    topic: 'Automated Creative Fatigue Mitigation',
    question: 'What programmatic automation rule configuration enables an enterprise media buyer to mitigate ad fatigue dynamically across 100+ active ad sets without manual oversight?',
    options: [
      'A rule that resets all campaign budgets to $0 at 5:00 PM every day.',
      'A rule triggering when 7-day Frequency > 3.2 AND First-Time Impression Ratio < 40% AND CPA > $45, which automatically pauses fatigued creative and activates the next ranked asset in the staging backlog.',
      'A rule that deletes the company Facebook page if CPA rises.',
      'A rule that automatically increases bids by 1,000% when CTR drops.'
    ],
    correctAnswer: 1, // B
    explanation: 'Automated rules monitoring composite fatigue signals (Frequency + FTIR + CPA) can automatically execute staged creative swaps, maintaining optimal performance without requiring 24/7 human intervention.'
  },
  {
    id: 11,
    topic: 'Brand Safety & Click Hijacking Mitigation',
    question: 'How do enterprise performance advertisers protect multi-million-dollar Instagram ad budgets against bot traffic, click farms, and invalid ad placement arbitrage?',
    options: [
      'By exclusively advertising on printed billboards.',
      'By blocking all users who use Google Chrome.',
      'By utilizing third-party verification solutions (IAS, DoubleVerify, Cheq) paired with strict placement blocklists, Publisher Block Lists, and disabling Audience Network low-quality inventory.',
      'By turning off the internet connection during ad delivery.'
    ],
    correctAnswer: 2, // C
    explanation: 'Enterprise brand safety combines verification tag monitoring, disabling non-transparent third-party network placements, and uploading domain/publisher blocklists to filter out invalid bot traffic.'
  },
  {
    id: 12,
    topic: 'CAPI for Leads & CRM Revenue Sync',
    question: 'How does implementing "Conversions API for Leads" enable Meta machine learning to optimize for qualified pipeline revenue rather than cheap low-quality form fills?',
    options: [
      'By requiring leads to pay an entry fee before filling out the form.',
      'By only showing lead ads to verified Fortune 500 CEOs.',
      'By permanently blocking all mobile users from submitting forms.',
      'By passing downstream CRM qualification and deal-won milestone events (e.g. Sales Qualified Lead, Opportunity Closed-Won) back to Meta with revenue values tied to the original lead ID.'
    ],
    correctAnswer: 3, // D
    explanation: 'CAPI for Leads closes the loop between initial form submission and CRM revenue realization, training the optimization algorithm to bid for leads with the highest statistical propensity to convert into paying customers.'
  },
  {
    id: 13,
    topic: 'Cross-App Ecosystem Synergies',
    question: 'How does an advanced direct-response advertiser orchestrate paid interactions across Instagram, WhatsApp Business API, and Threads to maximize conversion velocity in emerging markets?',
    options: [
      'Deploying Click-to-WhatsApp (CTWA) ads on Instagram Reels that initiate automated AI sales qualification chatbots with native in-chat checkout, while retargeting engagers across Threads.',
      'Running the exact same static ad on all apps with zero messaging integrations.',
      'Forcing users to download 5 different apps before they can see product pricing.',
      'Restricting all advertising strictly to SMS text messages.'
    ],
    correctAnswer: 0, // A
    explanation: 'Click-to-WhatsApp ads convert high-intent Instagram discovery traffic into instant, 1-on-1 conversational commerce pipelines, dramatically increasing conversion rates in WhatsApp-dominant economies.'
  },
  {
    id: 14,
    topic: 'Enterprise Governance & RBAC Protocols',
    question: 'Under SOC2 and GDPR compliance frameworks, what enterprise role-based access control (RBAC) standard must be enforced inside Meta Business Portfolio for media buying teams?',
    options: [
      'Sharing a single master admin password across all agency contractors.',
      'Enforcing mandatory Two-Factor Authentication (2FA), least-privilege role assignments (Finance Analyst, Task-level Ad Manager), SSO integration, and quarterly permission audits.',
      'Giving all employees full Admin rights to company credit card billing.',
      'Disabling audit logs to save cloud storage space.'
    ],
    correctAnswer: 1, // B
    explanation: 'Enterprise compliance mandates 2FA, SSO, least-privilege scoping, and strict separation between financial administrators and campaign executors to prevent unauthorized access and data breaches.'
  },
  {
    id: 15,
    topic: 'Game-Theoretic Shapley Attribution',
    question: 'In multi-touch attribution (MTA), why is Game-Theoretic Shapley Value attribution superior to standard Last-Click or First-Click attribution models for paid Instagram media?',
    options: [
      'Because Shapley values are calculated in dollars while last-click uses percentages.',
      'Because Shapley attribution requires zero data inputs.',
      'Because it calculates the true marginal contribution of each touchpoint across all possible coalition subsets of channels, fairly allocating credit to top-of-funnel Instagram discovery.',
      'Because it was created by Meta and is free to use.'
    ],
    correctAnswer: 2, // C
    explanation: 'Shapley Value attribution evaluates every combination of channel interactions, ensuring that upper-funnel Instagram discovery touchpoints receive mathematically fair revenue credit rather than all credit going to Last-Click Search.'
  },
  {
    id: 16,
    topic: 'Advantage+ Creative Enhancement AI',
    question: 'What is the algorithmic function of Meta Advantage+ Creative enhancements (such as standard enhancements, visual touchups, and text variation generation)?',
    options: [
      'To completely delete the advertiser\'s brand logo.',
      'To make all videos play backwards.',
      'To replace product images with cartoon characters.',
      'Dynamically tailoring creative elements (aspect ratio expansion, brightness adjustment, headline placement, relevant comment highlights) to match the individual viewing preferences of each user.'
    ],
    correctAnswer: 3, // D
    explanation: 'Advantage+ Creative uses real-time computer vision and machine learning to adjust aspect ratios, lighting, template overlays, and text positioning to optimize engagement per viewer.'
  },
  {
    id: 17,
    topic: 'Marginal CAC Curve Modeling',
    question: 'When modeling Marginal Customer Acquisition Cost (mCAC) during aggressive scale, at what point should an enterprise media buyer stop expanding daily budget on an ad set?',
    options: [
      'When the Marginal Cost of acquiring the next incremental customer exceeds the Customer Lifetime Value (LTV) or maximum allowable contribution margin.',
      'When the ad set spends $100 total.',
      'When the clock strikes midnight.',
      'When the competitor runs an ad on television.'
    ],
    correctAnswer: 0, // A
    explanation: 'Scaling is bounded by marginal economics. When the cost of the next incremental conversion exceeds unit contribution margin, further scaling destroys overall enterprise profitability.'
  },
  {
    id: 18,
    topic: 'Creator Whitelisting Token Infrastructure',
    question: 'What technical asset permission structure is required to execute Meta Partnership Ads using creator token authorization via Meta Business Suite?',
    options: [
      'Asking the creator to post the ad on their personal TikTok account.',
      'The creator grants Partnership Ad Permissions in their Instagram Professional Dashboard or Business Portfolio, generating a unique Partnership Code linking their handle to the brand\'s Ads Manager.',
      'The brand takes over the creator\'s personal smartphone.',
      'The creator mails their physical computer to the brand\'s office.'
    ],
    correctAnswer: 1, // B
    explanation: 'Partnership Code infrastructure allows creators to grant identity-linking permissions securely without sharing login credentials, enabling the advertiser to run ads directly through the creator handle.'
  },
  {
    id: 19,
    topic: 'CAPI Gateway Redundancy',
    question: 'What is the recommended retry and backoff strategy when transmitting server-side conversion payloads to the Meta Graph API Conversions endpoint during transient 5xx server errors?',
    options: [
      'Immediately delete all conversion records.',
      'Send 10,000 requests per millisecond until the server crashes.',
      'Exponential backoff with randomized jitter (e.g. 1s, 2s, 4s, 8s + jitter) with a dead-letter queue (DLQ) for unresolvable payloads after 5 failed attempts.',
      'Disable the website shopping cart for 48 hours.'
    ],
    correctAnswer: 2, // C
    explanation: 'Exponential backoff with jitter prevents thundering herd problems during upstream API outages, while a dead-letter queue guarantees that failed payloads can be replayed once connectivity restores.'
  },
  {
    id: 20,
    topic: 'Server-Side Cookie Persistence',
    question: 'How do first-party server-side cookies (set via HTTP Response Header `Set-Cookie` with `SameSite=Lax` and `HttpOnly`) protect ad tracking attribution against Apple ITP (Intelligent Tracking Prevention) 7-day client-side script cookie expiration?',
    options: [
      'They prevent users from updating their iOS operating system.',
      'They make website cookies permanent on competitor websites.',
      'They turn all cookies into encrypted blockchain tokens.',
      'Because Apple ITP specifically targets JavaScript-written cookies (`document.cookie`), server-set first-party cookies maintain their full validity window (up to 180-365 days) on the brand\'s top-level domain.'
    ],
    correctAnswer: 3, // D
    explanation: 'Apple Safari ITP restricts client-side JS cookies to 7 days (or 24 hours under certain conditions), but server-set first-party cookies originating from the primary domain preserve long-term attribution fidelity.'
  },
  {
    id: 21,
    topic: 'Audience Liquidity Maximization',
    question: 'What is the algorithmic relationship between "Audience Liquidity" and CPM pricing in the Meta Ad Auction?',
    options: [
      'Broad, liquid audience configurations allow Meta auction algorithms to bid across a wider pool of impression opportunities, avoiding crowded high-cost auctions and lowering overall average CPM.',
      'Higher audience liquidity always increases CPM by 500%.',
      'Liquidity only applies to cryptocurrency and financial ads.',
      'Audience liquidity disables video ads on Instagram.'
    ],
    correctAnswer: 0, // A
    explanation: 'Broad liquidity gives Meta machine learning the flexibility to evaluate millions of auction inventory slots simultaneously, clearing conversions at the lowest possible spot market price.'
  },
  {
    id: 22,
    topic: 'Catalog Product Set Segmentation',
    question: 'In high-scale Dynamic Product Ad (DPA) architectures, how should product sets be segmented to maximize Return on Ad Spend during holiday seasonal pushes?',
    options: [
      'Put all 50,000 store products into one uncategorized set.',
      'Segment by High-Margin Bestsellers, High-Inventory Clearance, New Arrivals, and Price-Tiered Collections ($100+) with dedicated custom overlay templates and promotional badges.',
      'Only include products that have zero inventory in stock.',
      'Delete all product images from the catalog feed.'
    ],
    correctAnswer: 1, // B
    explanation: 'Segmenting catalogs by commercial intent and unit margin allows advertisers to deploy distinct bid strategies, budget weights, and overlay banners to maximize profitability across product tiers.'
  },
  {
    id: 23,
    topic: 'Cross-Border Ad Tax & Regulatory Compliance',
    question: 'When executing multi-million-dollar global Instagram ad campaigns across the European Union, what regulatory requirement must be configured in Meta Ads Manager under the Digital Services Act (DSA)?',
    options: [
      'All ads must be narrated by a European Union official.',
      'The brand must translate all products into Latin.',
      'Declaring the "Beneficiary" (the entity paying for the ad) and "Payer" in the ad setup for full public transparency in the EU Ad Repository.',
      'Paying a 100% tax on all impressions served to European citizens.'
    ],
    correctAnswer: 2, // C
    explanation: 'Under the EU Digital Services Act (DSA), advertisers running ads in EU territories must explicitly declare the Beneficiary and Payer information, which is displayed publicly on the ad.'
  },
  {
    id: 24,
    topic: 'High-Velocity Creative Production Sprints',
    question: 'What is the structured output of an enterprise 14-day "Creative Sprint" designed to maintain continuous scale without performance decay?',
    options: [
      'Writing 1 text headline and hoping it works for 2 years.',
      'Closing the marketing department for 2 weeks.',
      'Re-running old television commercials without resizing them.',
      'Producing 10 new visual hooks, 3 distinct messaging angles (Problem, Social Proof, Status), 2 new visual formats (UGC vs 3D Motion), and deploying 6 Dynamic Creative Testing ad sets.'
    ],
    correctAnswer: 3, // D
    explanation: 'Creative sprints generate structured batches of modular hooks, bodies, and CTAs, ensuring a steady pipeline of statistically tested assets to replace fatigued creatives before performance drops.'
  },
  {
    id: 25,
    topic: 'Automated Portfolio Budgeting',
    question: 'How does an automated portfolio budget management script written in Python utilize Meta Graph API to prevent overspending across 50 international sub-accounts during currency fluctuations?',
    options: [
      'It queries real-time intraday spend and current foreign exchange rates via API, dynamically updating `spend_cap` and `daily_budget` parameters hourly to maintain global USD parity.',
      'It converts all company bank accounts into gold bullion.',
      'It turns off the internet at corporate headquarters.',
      'It files an insurance claim whenever exchange rates shift.'
    ],
    correctAnswer: 0, // A
    explanation: 'Programmatic budget orchestration scripts pull real-time spend across ad accounts, adjust for live currency exchange rates, and dynamically calibrate daily caps to prevent budget overruns.'
  },
  {
    id: 26,
    topic: 'Value-Based Bidding Optimization',
    question: 'What data foundation is REQUIRED before an advertiser can successfully switch an Instagram sales campaign from "Maximize Number of Conversions" to "Maximize Value of Conversions" (Value-Based Bidding)?',
    options: [
      'The advertiser must have at least 1 million Instagram followers.',
      'Passing dynamic, accurate purchase transaction values and currencies in conversion event payloads, with at least 50-100+ weekly purchases exhibiting healthy revenue variance across buyers.',
      'All products must be sold for exactly $1.00.',
      'The website must be hosted on a government server.'
    ],
    correctAnswer: 1, // B
    explanation: 'Value-based optimization trains the algorithm on transaction dollar values. It requires consistent, accurate revenue telemetry and sufficient conversion volume with price variance to locate high-AOV buyers.'
  },
  {
    id: 27,
    topic: 'Synthetic Control Lift Validation',
    question: 'In synthetic control geo-lift analysis, what statistical metric indicates that the pre-test model fit between control and treatment markets is robust enough to run an incrementality study?',
    options: [
      'The number of characters in the city names.',
      'The total population of the state.',
      'Pre-test Mean Absolute Scaled Error (MASE) < 1.0 and R-squared > 0.90 across pre-treatment historical sales series.',
      'Whether the mayor of the control city has an Instagram account.'
    ],
    correctAnswer: 2, // C
    explanation: 'A strong pre-treatment fit (MASE < 1.0, R-squared > 0.90) proves the synthetic control group accurately mirrors the treatment group\'s organic sales trajectory, ensuring valid post-test causal inference.'
  },
  {
    id: 28,
    topic: 'Intraday Auction Dayparting Pacing',
    question: 'Why is automated intraday budget pacing (dayparting) often deployed for high-ticket lead generation campaigns on Instagram?',
    options: [
      'To prevent ads from showing during non-business hours when sales teams cannot call leads within the critical <5-minute response window.',
      'Because Meta servers shut down at night.',
      'Because leads generated on weekends are legally invalid.',
      'To save electricity on mobile phone towers.'
    ],
    correctAnswer: 0, // A
    explanation: 'Speed-to-lead dramatically impacts conversion rates. Dayparting spend to align with live sales rep coverage ensures immediate phone/SMS outreach while prospect intent is at its peak.'
  },
  {
    id: 29,
    topic: 'Enterprise Attribution De-Duplication',
    question: 'When both Google Search ads and Instagram ads claim 100% credit for the same $500 purchase in their respective ad managers, how does an enterprise attribution model reconcile the overlap?',
    options: [
      'By recording $1,000 in total revenue in the corporate tax return.',
      'By utilizing a unified first-party clickstream data model that applies position-based or Shapley algorithmic weighting to allocate fractional credit without exceeding actual $500 top-line cash.',
      'By deleting both advertising channels permanently.',
      'By issuing a $500 refund to the customer.'
    ],
    correctAnswer: 1, // B
    explanation: 'Platform self-reporting inevitably double-counts shared conversion paths. Unified attribution frameworks de-duplicate touchpoints, allocating fractional fractional credit that sums exactly to total bank revenue.'
  },
  {
    id: 30,
    topic: 'Custom Audiences Hashing Protocols',
    question: 'What cryptographic standard is mandatory when transmitting customer list records (PII) via Meta Graph API or manual CSV upload to ensure privacy compliance?',
    options: [
      'Base64 plaintext encoding without salt.',
      'Caesar Cipher with a shift of 3.',
      'SHA-256 normalized hexadecimal hashing (lowercase, trimmed whitespace, E.164 international phone formatting).',
      'ROT13 encryption.'
    ],
    correctAnswer: 2, // C
    explanation: 'Meta requires SHA-256 cryptographic hashing of normalized customer records before upload, ensuring that customer PII is irreversibly scrambled while allowing deterministic matching against Meta user hashes.'
  },
  {
    id: 31,
    topic: 'Creative Diversity Index',
    question: 'What is the "Creative Diversity Index" and why does Meta\'s auction algorithm reward accounts with high visual and structural asset variety?',
    options: [
      'It measures the variety of distinct creative formats (UGC video, 3D motion, founder story, static carousel, product demo) in an account, allowing Meta to serve different styles to distinct psychological consumer types.',
      'It requires ad creatives to be translated into 50 languages.',
      'It forces all ads to be 10 minutes long.',
      'It measures how many colors are used in the brand logo.'
    ],
    correctAnswer: 0, // A
    explanation: 'Different users respond to different visual formats (some prefer fast UGC, others clean static carousels). High creative diversity expands total addressable audience reach without increasing frequency.'
  },
  {
    id: 32,
    topic: 'Advantage+ Audience Expansion Dynamics',
    question: 'Under Meta Advantage+ Audience settings, what is the operational purpose of providing "Audience Suggestions" (Interests/Custom Audiences)?',
    options: [
      'They act as hard strict boundaries that Meta can never exceed.',
      'They serve as initial seed guidance to steer early delivery, while granting the machine learning algorithm full autonomy to expand delivery beyond the suggestions if higher-value buyers are found.',
      'They automatically delete all non-matching Instagram accounts.',
      'They prevent the ad from showing to anyone outside your city.'
    ],
    correctAnswer: 1, // B
    explanation: 'Advantage+ Audience uses suggestions as a machine learning starting point, actively exploring outside the boundaries to find lower-cost, high-propensity buyers across the entire platform.'
  },
  {
    id: 33,
    topic: 'Automated Account Health Auditing',
    question: 'What programmatic metric indicates that an ad account is suffering from "Auction Overlap" across its active ad sets?',
    options: [
      'The number of emails sent by the media buyer.',
      'The number of followers on the brand\'s Instagram profile.',
      'The Auction Overlap rate in the Delivery Insights panel exceeds 20-30%, indicating that internal ad sets are actively bidding against each other and causing self-inflicted CPM inflation.',
      'The total number of fonts installed on the media buyer\'s computer.'
    ],
    correctAnswer: 2, // C
    explanation: 'Auction Overlap measures the percentage of times two ad sets from the same account competed in the same auction. High overlap causes self-inflicted bidding wars and requires audience consolidation.'
  },
  {
    id: 34,
    topic: 'High-Volume UGC Whitelisting Sprints',
    question: 'In an enterprise direct-response scaling system, what is the strategic advantage of deploying 20+ creator partnership ads simultaneously from different creator handles?',
    options: [
      'It diversifies visual entry points into the sales funnel, leverages distinct creator aesthetic styles and demographic authority, and dramatically mitigates single-ad fatigue at high spend ($100k+/month).',
      'It allows the brand to avoid paying creator licensing fees.',
      'It hides all ads from competitor spy tools completely.',
      'It guarantees that every creator will get 1 million organic followers.'
    ],
    correctAnswer: 0, // A
    explanation: 'Running multi-creator partnership ads distributes impression volume across diverse creator identities, creating authentic social proof touchpoints and preventing brand creative saturation.'
  },
  {
    id: 35,
    topic: 'Dynamic Retargeting Recency Decay',
    question: 'Why do enterprise performance brands split dynamic catalog retargeting into tiered recency windows (1-3 days, 4-7 days, 8-14 days) with declining bid multipliers?',
    options: [
      'To prevent ads from running on weekends.',
      'Because conversion propensity drops exponentially as time elapses since initial site visit, requiring aggressive bidding on 1-3 day intent and lower cost-per-impression bids on older windows.',
      'Because Meta will ban ad accounts that retarget users past 7 days.',
      'To force customers to buy immediately with cash only.'
    ],
    correctAnswer: 1, // B
    explanation: 'Purchase intent decays rapidly post-visit. Tiered recency bidding allocates highest capital to hot 1-3 day visitors while reducing bid caps on 8-14 day consideration traffic.'
  },
  {
    id: 36,
    topic: 'First-Party Data Enrichment Architecture',
    question: 'How does enriching Meta Conversions API payloads with customer Lifetime Value (LTV) predictive scores (e.g. pLTV calculated via machine learning) empower Meta auction algorithms?',
    options: [
      'It allows Meta to charge higher prices to rich customers.',
      'It replaces the need for an e-commerce website.',
      'It enables Meta Value-Based Bidding (VBB) to optimize delivery toward acquiring high-LTV repeat buyers rather than one-time discount bargain seekers.',
      'It automatically writes personalized thank-you letters to customers.'
    ],
    correctAnswer: 2, // C
    explanation: 'Passing predicted lifetime value (pLTV) in server payloads directs Meta machine learning models to prioritize users exhibiting statistical behavioral markers of high long-term customer equity.'
  },
  {
    id: 37,
    topic: 'Incrementality-Driven Budget Allocation',
    question: 'When incrementality testing reveals that Brand Search on Google is 90% non-incremental (cannibalizing organic clicks) while Instagram Prospecting is 85% incremental, how should executive marketing budgets be reallocated?',
    options: [
      'Cut all Instagram ad spend to $0 and put 100% into Brand Search.',
      'Maintain equal spend across all channels regardless of incrementality.',
      'Reduce Brand Search bids to capture only essential traffic and reallocate capital into highly incremental Instagram visual prospecting to drive net-new enterprise growth.',
      'Shut down the business website completely.'
    ],
    correctAnswer: 2, // C
    explanation: 'Causal incrementality guides capital allocation away from low-incrementality capture channels toward high-incrementality demand-generation channels that drive genuine top-line expansion.'
  },
  {
    id: 38,
    topic: 'Server-Side Dead-Letter Queue Monitoring',
    question: 'In an enterprise cloud CAPI event pipeline, what automated alerting mechanism ensures immediate remediation when webhook payloads fail authentication or formatting checks?',
    options: [
      'Checking the bank account once per year.',
      'A serverless CloudWatch / Cloud Monitoring alert configured on the Dead-Letter Queue (DLQ) that triggers a PagerDuty incident when failed message counts exceed 10 payloads/minute.',
      'Relying on customer complaints via Instagram Direct Message.',
      'Rebooting the server once every month.'
    ],
    correctAnswer: 1, // B
    explanation: 'Automated monitoring on dead-letter queues alerts engineering and media buying teams immediately when server event schemas, authentication tokens, or network failures occur.'
  },
  {
    id: 39,
    topic: 'Global Account Currency Architecture',
    question: 'Why do multinational brands establish separate localized Meta Ad Accounts for distinct operating currency regions (USD, EUR, GBP, JPY) rather than running global spend in a single currency account?',
    options: [
      'To eliminate foreign exchange conversion fees from credit card processors, align with local regional bank settlement, and avoid currency distortion in localized CPA target bidding.',
      'Because Meta only allows 1 ad per ad account.',
      'Because ad accounts expire after 30 days.',
      'To prevent international customers from seeing English text.'
    ],
    correctAnswer: 0, // A
    explanation: 'Dedicated currency ad accounts prevent continuous FX spread losses, enable precise local currency bidding, and streamline financial reconciliation for regional accounting entities.'
  },
  {
    id: 40,
    topic: 'Enterprise Operating Model Synthesis',
    question: 'What characterizes a world-class, 9-figure enterprise Instagram advertising operating model?',
    options: [
      'A single media buyer manually launching ads whenever they feel creative.',
      'Relying 100% on automated bots without any human creative strategy.',
      'Running only 1 ad format across all platforms forever.',
      'A unified synergy of first-party server data architecture (CAPI Gateway), high-velocity creative sprints (DCT + Creator Whitelisting), econometric incrementality measurement (MMM + Geo-Lift), and disciplined capital allocation governed by unit economics.'
    ],
    correctAnswer: 3, // D
    explanation: 'Elite paid social systems combine technical data infrastructure, rapid creative iteration, causal econometric measurement, and rigorous financial governance to generate sustained, compounding enterprise scale.'
  }
];

// Helper to generate 14 rich advanced theory modules
function generateAdvancedModules() {
  const moduleTitles = [
    { title: 'Advanced Instagram Full-Funnel Growth Strategy', id: 'ig-adv-01' },
    { title: 'Advanced Meta Pixel and Conversions API Architecture', id: 'ig-adv-02' },
    { title: 'Attribution and Measurement Strategy', id: 'ig-adv-03' },
    { title: 'Instagram Ads for E-commerce Scaling', id: 'ig-adv-04' },
    { title: 'Instagram Ads for Lead Generation Businesses', id: 'ig-adv-05' },
    { title: 'Instagram Ads for Local Businesses', id: 'ig-adv-06' },
    { title: 'Instagram Ads for SaaS, Apps and Digital Products', id: 'ig-adv-07' },
    { title: 'Advanced Reels Creative Systems', id: 'ig-adv-08' },
    { title: 'Creator, Influencer and Partnership Ad Strategy', id: 'ig-adv-09' },
    { title: 'Advantage+ and Automated Campaign Concepts', id: 'ig-adv-10' },
    { title: 'Incrementality, Lift and Experiment Design', id: 'ig-adv-11' },
    { title: 'Profitable Scaling and Budget Expansion', id: 'ig-adv-12' },
    { title: 'Automation, Policy and Brand Safety', id: 'ig-adv-13' },
    { title: 'Enterprise Instagram Ads Auditing, Governance & 9-Figure Operating Model', id: 'ig-adv-14' }
  ];

  const modules = [];

  for (let i = 0; i < moduleTitles.length; i++) {
    const { title, id } = moduleTitles[i];
    const modNum = i + 1;

    modules.push({
      id: id,
      title: `${modNum}. ${title}`,
      description: `Master ${title.toLowerCase()} with enterprise architectures, programmatic Graph API automation, Marketing Mix Modeling, and 8-figure scaling frameworks.`,
      level: 'advanced',
      orderIndex: modNum,
      status: 'locked',
      requiresQuiz: false,
      type: 'theory',
      duration: '60 mins',
      xpReward: 200,
      lessonContent: {
        overview: `Advanced enterprise masterclass module covering ${title.toLowerCase()} inside Meta Ads Manager. Master distributed cloud CAPI gateway deployment, econometric Bayesian MMM modeling, causal Geo-Lift experiment design, and programmatic Graph API asset provisioning.`,
        analogyHero: `Think of ${title.toLowerCase()} like an enterprise algorithmic hedge fund: by ingesting real-time deterministic server signals, hedging risk with multi-touch econometric modeling, and deploying capital programmatically into high-velocity creative variations, your brand scales profitably across international markets.`,
        objectives: [
          `Architect and deploy enterprise-scale systems for ${title.toLowerCase()}`,
          `Implement distributed cloud CAPI gateways, hashed parameter pipelines, and deduplication queues`,
          `Analyze econometric regression curves, marginal customer acquisition costs, and incremental geo-lift ratios`,
          `Execute programmatic Graph API automation, automated fatigue mitigation rules, and SOC2 governance protocols`
        ],
        estimatedTime: '60 mins',
        keyTakeaways: [
          'Deploy cloud-native server-side CAPI pipelines to maintain 99.99% data availability and EMQ > 8.5.',
          'Validate paid social incrementality using causal Geo-Lift experiments and Bayesian Marketing Mix Modeling.',
          'Enforce strict financial governance, least-privilege RBAC, and automated fatigue circuit breakers at scale.'
        ],
        summary: `Mastering ${title.toLowerCase()} provides the executive leadership, technical engineering, and econometric mastery required to direct 8- and 9-figure Instagram advertising growth operations.`,
        syntaxGuide: '// Enterprise Econometric & Machine Learning Formulas:\nMarginal_ROAS = d(Revenue) / d(Spend)\nHill_Saturation = (Spend^alpha) / (Spend^alpha + S_half^alpha)\nAdstock_Decay = Spend_t + theta * Adstock_{t-1}\nEMQ_Target = > 8.5 / 10.0\nIncremental_Lift = (Treatment_Sales - Control_Synthetic_Sales) / Spend',
        practiceExercises: [
          {
            title: `${title} Enterprise Engineering & Governance Challenge`,
            instructions: `Review an enterprise scaling and measurement scenario addressing ${title.toLowerCase()}. Model econometric adstock carryover, calculate marginal CAC limits, and architect a comprehensive 4-step governance roadmap.`,
            starterCode: `// Configure enterprise diagnostic and econometric evaluation for ${title}\ninterface EnterpriseAudit {\n  monthlySpend: number;\n  blendedMer: number;\n  incrementalLiftPercent: number;\n  emqScore: number;\n  marginalCac: number;\n  allowableCac: number;\n}\n\nfunction auditEnterpriseScenario(input: EnterpriseAudit) {\n  return {\n    governanceStatus: '',\n    actionPlan: [] as string[]\n  };\n}`,
            solutionCode: `function auditEnterpriseScenario(input: EnterpriseAudit) {\n  const isCapiCompliant = input.emqScore >= 8.5;\n  const isIncremental = input.incrementalLiftPercent >= 70.0;\n  const isProfitableScale = input.marginalCac <= input.allowableCac;\n\n  const actionPlan = [\n    !isCapiCompliant ? 'Deploy containerized CAPI Gateway with Pub/Sub queue buffering' : 'CAPI telemetry meets SOC2 compliance',\n    !isIncremental ? 'Calibrate Bayesian MMM model (Meta Robyn) with 90-day Geo-Lift market test' : 'Incrementality validated via Geo-Lift',\n    !isProfitableScale ? 'Engage automated fatigue circuit breaker and rebalance capital into Broad ASC' : 'Marginal CAC is within unit margin threshold'\n  ];\n\n  return {\n    governanceStatus: isCapiCompliant && isIncremental && isProfitableScale ? 'ENTERPRISE_SCALE_READY' : 'GOVERNANCE_REMEDIATION_REQUIRED',\n    actionPlan\n  };\n}`
          }
        ],
        sections: [
          {
            id: `sec-${id}-1`,
            title: `1. Enterprise System Architecture of ${title}`,
            difficulty: 'Advanced',
            content: `Operating at the highest tiers of paid social requires enterprise engineering. When ad spend exceeds $100,000/month, standard browser setups fail due to signal drop-off, cookie expiration, and auction fragmentation.\n\n### Enterprise Pillars\n- **Cloud CAPI Gateway**: High-throughput microservice architecture ingesting raw server webhooks and streaming hashed payloads to Meta Graph API.\n- **Econometric Incrementality**: Moving beyond last-click attribution to Bayesian MMM (Robyn/Meridian) calibrated by randomized Geo-Lift studies.\n- **Programmatic Scale**: Utilizing Graph API CI/CD pipelines to batch-provision localized ad sets and automated fatigue circuit breakers.`,
            explanation: `Enterprise architecture guarantees data integrity, regulatory compliance (GDPR/DSA), and deterministic tracking resilience under high transaction velocity.`,
            codeSnippets: [
              {
                filename: `module_${modNum}_enterprise.json`,
                language: 'json',
                title: `${title} — Enterprise Cloud CAPI & Governance Architecture`,
                code: `{\n  "enterpriseArchitecture": "${title}",\n  "level": "Advanced",\n  "cloudPipeline": {\n    "runtime": "AWS ECS / GCP Cloud Run",\n    "queueBroker": "Amazon SQS / Google Cloud Pub/Sub",\n    "targetEMQ": 9.2,\n    "hashedPayloadKeys": ["em", "ph", "fn", "ln", "ct", "st", "zp", "country", "external_id", "fbp", "fbc"]\n  },\n  "measurementFramework": {\n    "econometricModel": "Bayesian MMM (Robyn)",\n    "incrementalityCalibration": "Randomized Geo-Lift Matched Markets",\n    "attributionStandard": "Game-Theoretic Shapley MTA"\n  }\n}`,
                lineByLine: [
                  { line: '"runtime": "AWS ECS / GCP Cloud Run"', explanation: 'Autoscaling containerized compute ensuring 99.99% uptime during Black Friday traffic surges.' },
                  { line: '"econometricModel": "Bayesian MMM (Robyn)"', explanation: 'Meta open-source MMM framework modeling multi-channel adstock decay and saturation.' }
                ]
              }
            ],
            miniPractice: {
              question: `Why is an asynchronous queuing broker (e.g. SQS or Pub/Sub) critical in enterprise Conversions API architectures?`,
              options: [
                'It buffers high-volume webhook bursts during traffic spikes, ensuring zero payload loss and enabling controlled exponential retry logic against Meta Graph API',
                'It converts all video ads into static images',
                'It prevents customers from using discount codes',
                'It automatically pays company income taxes'
              ],
              correctAnswer: 0,
              explanation: 'Queues prevent server timeouts and payload drops during traffic spikes by decoupling event ingestion from outbound API delivery.'
            },
            proTip: `Deploy CAPI Gateway on a dedicated subdomain (e.g. \`data.brand.com\`) to enable first-party server cookie issuance with full 365-day persistence.`,
            commonMistakes: [
              'Transmitting unbuffered synchronous CAPI requests directly from the web server, leading to dropped conversions during high-traffic sales.',
              'Failing to implement automated dead-letter queues (DLQs) for failed payload replaying.'
            ]
          },
          {
            id: `sec-${id}-2`,
            title: `2. Programmatic Execution & Econometric Calibration`,
            difficulty: 'Advanced',
            content: `Executing ${title.toLowerCase()} at scale requires algorithmic precision and automated governance:\n\n1. **Cloud Gateway Deployment**: Provision containerized CAPI infrastructure with hashed match keys and automated dead-letter queue monitoring.\n2. **Advantage+ Shopping Architecture**: Deploy consolidated ASC pipelines with 10-15% existing customer budget caps and enriched dynamic catalog feeds.\n3. **Creator Whitelisting Token Infrastructure**: Integrate creator partnership ad codes to run dark ads from creator handles with automated rights management.\n4. **Econometric Model Calibration**: Ingest 2 years of weekly sales and spend data into Bayesian MMM, calibrating priors with matched-market Geo-Lift test results.`,
            explanation: `Programmatic execution combines automated asset provisioning with rigorous causal econometric measurement to eliminate subjective media buying bias.`,
            codeSnippets: [
              {
                filename: `module_${modNum}_script.ts`,
                language: 'typescript',
                title: `${title} — Econometric Incrementality & Budget Pacing Engine`,
                code: `export interface IncrementalityModel {\n  marketId: string;\n  adSpend: number;\n  observedSales: number;\n  syntheticControlSales: number;\n}\n\nexport function calculateIncrementalLift(test: IncrementalityModel) {\n  const incrementalRevenue = test.observedSales - test.syntheticControlSales;\n  const incrementalRoas = incrementalRevenue / (test.adSpend || 1);\n  const isIncrementalWinner = incrementalRoas >= 2.0;\n\n  return {\n    incrementalRevenue: Number(incrementalRevenue.toFixed(2)),\n    incrementalRoas: Number(incrementalRoas.toFixed(2)),\n    scalingVerdict: isIncrementalWinner ? 'APPROVED_FOR_BUDGET_EXPANSION' : 'CAPITAL_EFFICIENCY_WARNING'\n  };\n}`,
                lineByLine: [
                  { line: 'const incrementalRevenue = test.observedSales - test.syntheticControlSales;', explanation: 'Isolates true net revenue generated strictly by paid ad exposure.' },
                  { line: 'const isIncrementalWinner = incrementalRoas >= 2.0;', explanation: 'Standard enterprise hurdle rate for scaling paid prospecting capital.' }
                ]
              }
            ],
            miniPractice: {
              question: `How does randomized Geo-Lift testing establish true causal incrementality for Instagram ad spend?`,
              options: [
                'By comparing sales between two different years without adjusting for inflation',
                'By partitioning geographical markets into matched control and treatment cells using synthetic counterfactual modeling, measuring the true incremental delta produced by ad spend',
                'By asking employees which ad they like best',
                'By deleting all customer transaction logs'
              ],
              correctAnswer: 1,
              explanation: 'Geo-Lift testing creates a synthetic counterfactual control group, proving mathematically what sales would have been without ad spend.'
            },
            proTip: `Run Geo-Lift incrementality studies quarterly across 40-50 localized DMAs to continuously calibrate MMM Bayesian priors with ground-truth empirical data.`,
            commonMistakes: [
              'Relying solely on in-platform reported ROAS to make 8-figure executive capital allocation decisions.',
              'Running Geo-Lift tests without sufficient pre-test statistical power calculations.'
            ]
          },
          {
            id: `sec-${id}-3`,
            title: `3. Enterprise Diagnostic Triage, Brand Safety & 9-Figure Governance`,
            difficulty: 'Advanced',
            content: `At enterprise scale, media buyers operate under strict governance, compliance, and risk mitigation protocols.\n\n### Enterprise Governance Protocols\n- **Automated Circuit Breakers**: Intraday scripts pausing ad sets when marginal CAC exceeds unit profit thresholds.\n- **Brand Safety & Blocklisting**: Universal exclusion lists and verification tags (IAS, DoubleVerify) preventing ad placement on non-brand-safe inventory.\n- **SOC2 / GDPR Compliance**: Strict role-based access control (RBAC), SSO authentication, and automated audit logging across all Business Portfolios.`,
            explanation: `Rigorous governance protects corporate brand equity, eliminates invalid bot traffic, and ensures enterprise security across global marketing operations.`,
            codeSnippets: [
              {
                filename: `module_${modNum}_governance.json`,
                language: 'json',
                title: `${title} — Enterprise Automated Governance & Brand Safety Policy`,
                code: `{\n  "governancePolicy": {\n    "security": {\n      "twoFactorAuth": "MANDATORY_ALL_USERS",\n      "rbacRoles": ["FINANCE_ADMIN", "MEDIA_BUYER", "AUDITOR"],\n      "sessionTimeoutMinutes": 15\n    },\n    "circuitBreakers": {\n      "maxDailySpendDeviation": 25.0,\n      "minIncrementalRoas": 1.75,\n      "maxAllowableMarginalCacUSD": 65.0\n    },\n    "brandSafety": {\n      "blocklistedCategories": ["DEBATED_SOCIAL_ISSUES", "TRAGEDY_CONFLICT", "SENSITIVE_CONTENT"],\n      "verificationTag": "Active DoubleVerify Script"\n    }\n  }\n}`,
                lineByLine: [
                  { line: '"twoFactorAuth": "MANDATORY_ALL_USERS"', explanation: 'Strict access security preventing credential compromise.' },
                  { line: '"minIncrementalRoas": 1.75', explanation: 'Automated circuit breaker preventing unprofitable spend expansion.' }
                ]
              }
            ],
            miniPractice: {
              question: `What is the primary operational purpose of an automated intraday budget circuit breaker script?`,
              options: [
                'To automatically pause ad sets or throttle budgets when intraday marginal CAC exceeds allowable contribution thresholds, preventing catastrophic runaway ad spend',
                'To delete the ad account permanently if it spends $1',
                'To change product prices on the website every 5 minutes',
                'To send spam emails to competitors'
              ],
              correctAnswer: 0,
              explanation: 'Circuit breakers act as automated financial safeguards, immediately halting spend when market volatility or tracking drop-offs cause CPAs to spike.'
            },
            proTip: `Configure programmatic webhooks to alert Slack/Teams channels whenever an automated circuit breaker trips, providing instant visibility to media leads.`,
            commonMistakes: [
              'Scaling budgets without automated circuit breakers, exposing accounts to massive overnight budget loss during algorithm anomalies.',
              'Failing to audit third-party agency user permissions quarterly.'
            ]
          }
        ]
      }
    });
  }

  return modules;
}

// Advanced Capstone Projects
const ADVANCED_CAPSTONE_1 = {
  id: 'ig-adv-proj-01',
  title: '15. Advanced Capstone 1: Enterprise Multi-Brand Advantage+ Shopping & CAPI Architecture Deployment',
  description: 'Design, architect, and deploy a containerized Cloud Conversions API (CAPI) Gateway and Advantage+ Shopping Campaign scaling engine for an 8-figure multi-brand enterprise.',
  level: 'advanced',
  orderIndex: 15,
  status: 'locked',
  requiresQuiz: false,
  isProject: true,
  type: 'project',
  duration: '360 mins',
  xpReward: 750,
  projectDetails: {
    brief: 'You are the VP of Paid Acquisition hired by Horizon Global Brands, an omnichannel retail conglomerate operating 3 direct-to-consumer lifestyle brands with an annual Meta ad budget of $12,000,000 ($1M/month). You must engineer an enterprise Cloud CAPI Gateway infrastructure, deploy consolidated Advantage+ Shopping Campaigns with dynamic catalog overlays, establish creator whitelisting pipelines, and implement automated budget circuit breakers.',
    overview: 'You are the VP of Paid Acquisition hired by Horizon Global Brands, an omnichannel retail conglomerate operating 3 direct-to-consumer lifestyle brands with an annual Meta ad budget of $12,000,000 ($1M/month). You must engineer an enterprise Cloud CAPI Gateway infrastructure, deploy consolidated Advantage+ Shopping Campaigns with dynamic catalog overlays, establish creator whitelisting pipelines, and implement automated budget circuit breakers.',
    scenario: 'Horizon Global Brands is experiencing 18% attribution signal degradation, rising customer acquisition costs, and fragmented account governance across 15 sub-agencies. You must consolidate account structures, architect a resilient AWS/GCP CAPI Gateway with Pub/Sub queuing, deploy Advantage+ Shopping Campaigns, and establish SOC2-compliant governance standards.',
    estimatedHours: '6 hours',
    learningObjectives: [
      'Architect a cloud-native Server-Side Conversions API Gateway with AWS ECS / GCP Cloud Run and Pub/Sub queuing',
      'Implement deterministic SHA-256 event deduplication and achieve Event Match Quality (EMQ) > 9.0/10',
      'Design enterprise Advantage+ Shopping Campaigns (ASC) with enriched dynamic XML catalog feeds and localized currency pricing',
      'Build an automated creator partnership whitelisting token infrastructure for 50+ monthly creators',
      'Develop Python automation scripts for intraday budget circuit breakers and automated fatigue mitigation',
      'Establish a SOC2-compliant enterprise governance and role-based access control (RBAC) protocol'
    ],
    requirements: [
      'Architect a containerized Cloud CAPI Gateway specification handling 10,000 requests/minute with <50ms latency',
      'Define event deduplication schemas for 5 standard events (ViewContent, AddToCart, InitiateCheckout, Purchase, Lead)',
      'Construct a consolidated Advantage+ Shopping Campaign structure with a strict 10% Existing Customer Budget Cap',
      'Provide production XML catalog schemas with secondary localized currency and price feeds',
      'Detail a Creator Whitelisting Token SOP and Partnership Ad governance matrix',
      'Write a Python automated intraday budget circuit breaker script with Slack webhook alerts',
      'Deliver an enterprise SOC2-compliant Business Portfolio governance and RBAC matrix'
    ],
    deliverables: [
      {
        id: 'del-01',
        title: '1. Server-Side CAPI Gateway Deployment',
        description: 'Complete cloud infrastructure specification detailing containerized microservice sizing, auto-scaling thresholds, and Redis caching layers.',
        expectedOutput: 'Terraform / CloudFormation architecture diagram and configuration files for AWS ECS / GCP Cloud Run.'
      },
      {
        id: 'del-02',
        title: '2. Deterministic Deduplication Architecture',
        description: 'Design the shared `event_id` and `event_name` generation pipeline across browser JavaScript and backend Node.js/Python microservices.',
        expectedOutput: 'End-to-end event sequence diagram demonstrating 100% duplicate elimination over a 48-hour window.'
      },
      {
        id: 'del-03',
        title: '3. Event Match Quality (EMQ) Optimization',
        description: 'Specify the data normalization and SHA-256 hashing protocol for 9 distinct customer matching parameters (em, ph, fn, ln, ct, st, zp, fbp, fbc).',
        expectedOutput: 'Data mapping schema proving target EMQ rating >= 9.0/10 in Meta Events Manager.'
      },
      {
        id: 'del-04',
        title: '4. Advantage+ Shopping Campaign Implementation',
        description: 'Construct the consolidated ASC structure across the 3 portfolio brands with 10% existing customer caps and broad liquidity parameters.',
        expectedOutput: 'Campaign setup blueprint detailing asset allocation, catalog sets, and attribution settings.'
      },
      {
        id: 'del-05',
        title: '5. Enriched XML Product Catalog Pipeline',
        description: 'Develop the automated product catalog feed synchronization pipeline connecting Shopify Plus backend to Meta Commerce Manager.',
        expectedOutput: 'XML catalog feed schema featuring custom labels, margin tiers, inventory thresholds, and multi-currency pricing.'
      },
      {
        id: 'del-06',
        title: '6. Dynamic Creative Catalog Overlay Sets',
        description: 'Design automated dynamic creative overlay templates for sale promotions, star ratings, and price strike-through banners.',
        expectedOutput: 'Visual design templates and Commerce Manager automated overlay configuration rules.'
      },
      {
        id: 'del-07',
        title: '7. Creator Partnership Ads Integration',
        description: 'Establish the token-based creator whitelisting SOP enabling 50+ monthly creators to grant Partnership Ad code access securely.',
        expectedOutput: 'Creator onboarding guide, legal rights agreement, and Ads Manager Partnership Ad deployment matrix.'
      },
      {
        id: 'del-08',
        title: '8. Intraday Budget Circuit Breaker Script',
        description: 'Write a production Python script monitoring real-time marginal CAC and pausing ad sets if spend exceeds 1.5x allowable target.',
        expectedOutput: 'Fully functional Python script utilizing Meta Graph API SDK with Slack webhook alert integration.'
      },
      {
        id: 'del-09',
        title: '9. Automated Ad Fatigue Detection Engine',
        description: 'Configure automated rules monitoring Frequency (>3.5), FTIR (<35%), and Link CTR (<1.0%) to trigger automated creative backlog deployment.',
        expectedOutput: 'Automated rule specification JSON and creative rotation workflow flowchart.'
      },
      {
        id: 'del-10',
        title: '10. SOC2-Compliant Governance & RBAC Protocol',
        description: 'Define the enterprise security framework: SSO integration, mandatory 2FA, least-privilege role scoping, and quarterly access audit schedules.',
        expectedOutput: 'Enterprise governance handbook, permission matrix, and security audit checklist.'
      }
    ],
    rubric: [
      {
        criteria: 'Cloud Engineering & CAPI Resilience',
        points: 25,
        description: 'Containerized CAPI Gateway architecture with Pub/Sub queue buffering and EMQ >= 9.0/10 data quality.'
      },
      {
        criteria: 'Advantage+ Shopping & Catalog Engineering',
        points: 25,
        description: 'Consolidated ASC structure with 10% customer cap, multi-currency XML feed, and dynamic overlay automation.'
      },
      {
        criteria: 'Programmatic Automation & Scripting',
        points: 25,
        description: 'Robust Python circuit breaker scripts, Graph API batch provisioning, and automated fatigue detection engines.'
      },
      {
        criteria: 'Enterprise Governance & Compliance',
        points: 25,
        description: 'SOC2-compliant RBAC matrix, creator whitelisting token SOP, and quarterly security audit procedures.'
      }
    ],
    tips: [
      'Ensure server-side CAPI events are transmitted via first-party subdomain cookies for maximum Apple ITP persistence.',
      'Always test automated Python circuit breaker scripts in a staging ad account before deploying to production.',
      'Maintain an Existing Customer Budget Cap between 5% and 15% in ASC to protect net-new acquisition focus.'
    ]
  }
};

const ADVANCED_CAPSTONE_2 = {
  id: 'ig-adv-proj-02',
  title: '16. Advanced Capstone 2: Marketing Mix Modeling (MMM) & Geo-Lift Incremental Attribution Engine',
  description: 'Architect, execute, and validate an econometric Marketing Mix Modeling (MMM) system and randomized Geo-Lift experiment to guide 8-figure marketing capital allocation.',
  level: 'advanced',
  orderIndex: 16,
  status: 'locked',
  requiresQuiz: false,
  isProject: true,
  type: 'project',
  duration: '360 mins',
  xpReward: 750,
  projectDetails: {
    brief: 'You are the Chief Analytics Officer hired by OmniScale Global, a venture-backed omnichannel direct-to-consumer consumer electronics corporation spending $18,000,000 annually across Meta, Google, TikTok, TV, and Amazon. You must build an open-source Bayesian Marketing Mix Model (Meta Robyn / Google Meridian), execute a 90-day multi-region randomized Geo-Lift experiment, and establish an incrementality-driven capital reallocation framework.',
    overview: 'You are the Chief Analytics Officer hired by OmniScale Global, a venture-backed omnichannel direct-to-consumer consumer electronics corporation spending $18,000,000 annually across Meta, Google, TikTok, TV, and Amazon. You must build an open-source Bayesian Marketing Mix Model (Meta Robyn / Google Meridian), execute a 90-day multi-region randomized Geo-Lift experiment, and establish an incrementality-driven capital reallocation framework.',
    scenario: 'OmniScale Global faces severe attribution overlap: platform ad managers report a combined $32M in attributed revenue on an actual company bank revenue of $22M. You must resolve platform double-counting by implementing econometric MMM, calibrating models with causal Geo-Lift experiments, and constructing an automated Marginal ROAS allocation dashboard.',
    estimatedHours: '6 hours',
    learningObjectives: [
      'Conduct pre-test statistical power calculations and select matched geographical markets for a 90-day Geo-Lift experiment',
      'Design and deploy a randomized Geo-Lift study using synthetic counterfactual control modeling (ARIMA / Ridge regression)',
      'Build a Bayesian Marketing Mix Model (Meta Robyn / Google Meridian) with Weibull/Geometric adstock decay and Hill saturation curves',
      'Calibrate MMM Bayesian priors using empirical Geo-Lift incrementality lift ratios',
      'Implement Game-Theoretic Shapley Value multi-touch attribution across first-party clickstream data',
      'Deliver an Executive Budget Reallocation Manifesto and automated Looker Studio Marginal ROAS dashboard'
    ],
    requirements: [
      'Design a 90-day Geo-Lift experiment across at least 30 matched US Designated Market Areas (DMAs) with pre-test MASE < 1.0',
      'Build a complete Meta Robyn / Google Meridian model script ingesting 104 weeks of multi-channel spend and organic variables',
      'Calculate channel-specific adstock decay rates (half-life) and non-linear Hill saturation response curves',
      'Calibrate MMM Bayesian priors using empirical Geo-Lift test results to eliminate platform bias',
      'Construct a collaborative Data Clean Room query architecture joining first-party CRM transactions with Meta exposure logs',
      'Deliver an executive capital reallocation model shifting budget from low-incrementality to high-incrementality channels'
    ],
    deliverables: [
      {
        id: 'del-01',
        title: '1. Geo-Lift Market Selection & Pre-Test Power Calculation',
        description: 'Perform correlation clustering across 210 US DMAs to identify 15 matched treatment markets and 15 synthetic control markets with statistical power > 80%.',
        expectedOutput: 'R / Python market selection notebook and pre-test statistical fit evaluation report (R-squared > 0.92).'
      },
      {
        id: 'del-02',
        title: '2. 90-Day Multi-Region Experiment Design',
        description: 'Document the Geo-Lift pulsing schedule: 30-day pre-test baseline, 30-day treatment spend pulse (+50% budget in treatment DMAs), and 30-day cooldown.',
        expectedOutput: 'Comprehensive experiment protocol document with exact DMA targeting IDs and daily budget allocation schedules.'
      },
      {
        id: 'del-03',
        title: '3. Bayesian Model Setup (Meta Robyn / Google Meridian)',
        description: 'Write the complete R / Python model code ingesting 104 weeks of media spend, organic traffic, seasonality, promotions, and macroeconomic variables.',
        expectedOutput: 'Production Bayesian MMM execution script with multi-objective hyperparameter optimization (Nevergrad).'
      },
      {
        id: 'del-04',
        title: '4. Adstock Transformation Modeling',
        description: 'Model channel-specific memory decay curves (Weibull/Geometric half-life) for Instagram Reels, Meta Feed, YouTube VAC, and Brand Search.',
        expectedOutput: 'Adstock parameter summary table and interactive memory decay visualization charts.'
      },
      {
        id: 'del-05',
        title: '5. Hill Saturation Response Curves',
        description: 'Calculate non-linear diminishing returns response curves (alpha and gamma parameters) identifying optimal spend saturation thresholds per channel.',
        expectedOutput: 'Channel saturation curves and marginal ROAS inflection point analysis.'
      },
      {
        id: 'del-06',
        title: '6. Empirical Prior Calibration',
        description: 'Inject empirical lift results from the Geo-Lift experiment into the Bayesian MMM model as constrained hyperparameter priors.',
        expectedOutput: 'Model calibration comparison report demonstrating variance reduction and decomposed incremental revenue lift.'
      },
      {
        id: 'del-07',
        title: '7. Multi-Touch Game-Theoretic Shapley Attribution',
        description: 'Construct a first-party clickstream data pipeline in Snowflake / BigQuery applying Shapley value coalition credit to customer conversion journeys.',
        expectedOutput: 'SQL attribution model queries and fractional conversion credit distribution tables.'
      },
      {
        id: 'del-08',
        title: '8. Data Clean Room Collaborative Query Architecture',
        description: 'Design privacy-preserving SQL queries for Snowflake / AWS Clean Rooms joining hashed customer orders with Meta ad impression logs.',
        expectedOutput: 'Differential privacy schema and validated multi-party computation query templates.'
      },
      {
        id: 'del-09',
        title: '9. Executive Budget Reallocation Manifesto',
        description: 'Formulate an executive board-level strategic plan reallocating $18M across channels based strictly on incremental marginal contribution.',
        expectedOutput: 'Executive strategy presentation detailing projected +22% top-line revenue lift with zero increase in total media spend.'
      },
      {
        id: 'del-10',
        title: '10. Automated Marginal ROAS Dashboard',
        description: 'Build an interactive Looker Studio / Tableau executive dashboard connecting MMM response curves to real-time spend pacing.',
        expectedOutput: 'Live dashboard schema with automated spend recommendations and marginal return indicators.'
      }
    ],
    rubric: [
      {
        criteria: 'Econometric Rigor & Bayesian Modeling',
        points: 25,
        description: 'Production Meta Robyn / Google Meridian script with accurate adstock decay, Hill saturation, and multi-objective optimization.'
      },
      {
        criteria: 'Causal Geo-Lift Experimentation',
        points: 25,
        description: 'Flawless DMA market matching, pre-test power calculations (>80%), and empirical lift calibration.'
      },
      {
        criteria: 'Data Clean Room & Shapley Attribution',
        points: 25,
        description: 'Snowflake/BigQuery Shapley attribution pipeline and privacy-preserving clean room SQL queries.'
      },
      {
        criteria: 'Executive Strategy & Financial Capital Allocation',
        points: 25,
        description: 'Board-ready $18M budget reallocation manifesto, marginal ROAS dashboard, and projected financial outcome model.'
      }
    ],
    tips: [
      'Always validate pre-treatment market correlation (R-squared > 0.90) before launching spend pulses in Geo-Lift experiments.',
      'Use Bayesian priors derived from causal lift tests to constrain MMM models and prevent multi-collinearity bias.',
      'Rebalance media budgets toward high-incrementality channels until marginal ROAS equalizes across all marketing investments.'
    ]
  }
};

// Final Certification Exam Task
const ADVANCED_EXAM = {
  id: 'ig-adv-exam',
  title: '17. Official Advanced Master Certification Assessment',
  description: 'Demonstrate comprehensive master-level expertise across cloud CAPI gateway engineering, Bayesian MMM modeling, causal Geo-Lift incrementality testing, programmatic Graph API automation, and 9-figure enterprise governance.',
  level: 'advanced',
  orderIndex: 17,
  status: 'locked',
  duration: '60 min',
  requiresQuiz: true,
  xpReward: 600,
  isProject: false,
  isFinalAssessment: true,
  passingScore: 35,
  totalQuestions: 40,
  questions: ADVANCED_ASSESSMENT,
  tags: ['Certification', 'Exam', 'Advanced Assessment', 'Master Certification', 'MCQ']
};

const allTasks = [...generateAdvancedModules(), ADVANCED_CAPSTONE_1, ADVANCED_CAPSTONE_2, ADVANCED_EXAM];

const fileContent = `import { Task, QuizQuestion } from '../../types/roadmap.types';\n\nexport const INSTAGRAM_ADS_ADVANCED_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(ADVANCED_ASSESSMENT, null, 2)};\n\nexport const INSTAGRAM_ADS_ADVANCED_TASKS: Task[] = ${JSON.stringify(allTasks, null, 2)};\n`;

fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log('✅ Generated instagramAdsAdvanced.data.ts with 14 theory modules, 2 capstone projects (20 deliverables), and 40 MCQs.');
