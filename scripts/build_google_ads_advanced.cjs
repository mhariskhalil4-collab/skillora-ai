const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/features/roadmap/data/google-ads/googleAdsAdvanced.data.ts');
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 40 High-Quality Advanced MCQs covering enterprise architecture, scripting, consent mode v2, offline conversions, MER, etc.
const ADVANCED_ASSESSMENT = [
  {
    id: 1,
    topic: 'Offline Conversion Imports (OCI)',
    question: 'How does Offline Conversion Import (OCI) bridge the gap between initial Google ad clicks and downstream CRM revenue?',
    options: [
      'By guessing which leads converted using zip codes',
      'By capturing the Google Click ID (GCLID) or Gbraid/Wbraid upon web form submission, storing it in the CRM alongside the lead record, and uploading converted sales milestones back to Google Ads via API or scheduled spreadsheet',
      'By automatically sending physical mail to prospective customers',
      'By replacing Google Ads with Salesforce reporting'
    ],
    correctAnswer: 1, // B
    explanation: 'OCI tracks the GCLID/Gbraid from the ad click through web form submission into the CRM. When a lead advances to a Qualified Lead, Closed Deal, or Won Revenue stage, the CRM transmits the timestamped GCLID and monetary value back to Google Ads, feeding downstream business value into Smart Bidding.'
  },
  {
    id: 2,
    topic: 'Google Consent Mode v2',
    question: 'Under the EU Digital Markets Act (DMA) enforcement of Google Consent Mode v2, which two new consent parameters became mandatory for advertising personalization and remarketing?',
    options: [
      'ad_storage and analytics_storage only',
      'ad_user_data and ad_personalization',
      'cookie_consent and banner_accepted',
      'ip_masking and geo_filtering'
    ],
    correctAnswer: 1, // B
    explanation: 'Consent Mode v2 introduced `ad_user_data` (consent for sending user data to Google for advertising) and `ad_personalization` (consent for personalized ads/remarketing). Without these parameters, audiences and conversion modeling for EEA traffic are severely degraded.'
  },
  {
    id: 3,
    topic: 'Performance Max Brand Cannibalization',
    question: 'How can an enterprise advertiser prevent Performance Max from taking credit for high-converting branded search queries and cannibalizing dedicated Brand Search campaigns?',
    options: [
      'There is no way to prevent Performance Max from bidding on brand terms',
      'Apply a Brand Exclusion List to the Performance Max campaign via Campaign Settings (or request account-level negative keywords via Google Support)',
      'Pause the Performance Max campaign on weekends',
      'Lower the daily budget to $1.00'
    ],
    correctAnswer: 1, // B
    explanation: 'Advertisers can create a Brand List in the Shared Library and apply it as a Brand Exclusion in Performance Max campaign settings, ensuring PMax bids exclusively on non-brand prospecting inventory while dedicated Brand campaigns retain strict control over brand traffic.'
  },
  {
    id: 4,
    topic: 'Marketing Efficiency Ratio (MER)',
    question: 'How is the Marketing Efficiency Ratio (MER, or Blended ROAS) calculated, and why is it essential for omnichannel profitability analysis?',
    options: [
      'MER = Google Ads Cost / Google Ads Clicks',
      'MER = Total Ecosystem Revenue / Total Marketing Ad Spend Across All Channels; it provides a single source of truth that avoids channel-attribution double counting',
      'MER = Website Pageviews / Conversion Rate',
      'MER = Total Email Subscribers / Monthly Ad Spend'
    ],
    correctAnswer: 1, // B
    explanation: 'MER (Total Revenue / Total Ad Spend) measures blended business efficiency across all channels (Google, Meta, TikTok, Email, Organic). It eliminates intra-platform attribution overlap where each ad network claims 100% credit for the same sale.'
  },
  {
    id: 5,
    topic: 'Google Ads Scripts Automation',
    question: 'Which Google Ads Script function is commonly used to automate daily budget anomaly detection and email alerts when spend exceeds expected pacing?',
    options: [
      'AdsApp.createCampaign() only',
      'AdsApp.campaigns().withCondition("Status = ENABLED").get() combined with MailApp.sendEmail() or UrlFetchApp for Slack webhooks',
      'document.getElementById("budget_box")',
      'window.localStorage.getItem("spend")'
    ],
    correctAnswer: 1, // B
    explanation: 'Google Ads Scripts use `AdsApp` selectors to query campaign telemetry and execute actions or dispatch alerts via `MailApp.sendEmail()` or `UrlFetchApp.fetch()` to external Webhooks (e.g., Slack/Discord) when spend spikes unexpectedly.'
  },
  {
    id: 6,
    topic: 'Data-Driven Attribution (DDA)',
    question: 'How does Google Ads Data-Driven Attribution (DDA) model conversion credit across multi-touch customer search journeys?',
    options: [
      'It assigns 100% of conversion credit to the very first ad clicked',
      'It uses machine learning to evaluate all interacting click paths (both converting and non-converting) to statistically distribute fractional conversion credit based on how each ad touchpoint shifted conversion probability',
      'It gives equal 25% credit to the last 4 clicks regardless of timing',
      'It gives 100% credit to the last paid click only'
    ],
    correctAnswer: 1, // B
    explanation: 'DDA analyzes account conversion paths using sophisticated algorithmic modeling, comparing converting paths against paths that did not convert to calculate the true incremental contribution of each keyword and campaign touchpoint.'
  },
  {
    id: 7,
    topic: 'Geo-Experimentation & Incrementality Testing',
    question: 'How does an advertiser conduct a statistically valid Geo-Holdout Experiment to measure the true incrementality of Non-Brand Search campaigns?',
    options: [
      'Turn ads on for 3 days, then off for 3 days across the entire country',
      'Segment matched geographic clusters (e.g., 20 control DMAs vs 20 test DMAs with identical historical sales trends), turn off non-brand search ads in the control markets, and measure the net lift in organic + paid total sales in test markets',
      'Ask customers on a phone survey where they first heard of the company',
      'Compare this year’s December sales to last year’s July sales'
    ],
    correctAnswer: 1, // B
    explanation: 'Geo-experiments split matched geographic regions (Designated Market Areas) into Test and Control groups. Holding out ad spend in control regions isolates baseline organic demand and proves the true incremental revenue generated by paid search.'
  },
  {
    id: 8,
    topic: 'Value-Based Bidding (VBB) with Conversion Value Rules',
    question: 'How can an enterprise advertiser use Google Ads Conversion Value Rules to train Smart Bidding algorithms to prioritize high-value customer segments?',
    options: [
      'By manually clicking on your own ads from those locations',
      'By creating rules that multiply conversion values by a factor (e.g., 1.5x) based on geographic location, specific audience lists (e.g., past high-LTV buyers), or device types',
      'By blocking all users who use mobile phones',
      'By doubling the daily budget every Friday afternoon'
    ],
    correctAnswer: 1, // B
    explanation: 'Conversion Value Rules allow advertisers to adjust conversion values in real time based on geographic criteria, audience membership, or device, steering Smart Bidding algorithms toward bidding aggressively on high-LTV customer cohorts.'
  },
  {
    id: 9,
    topic: 'Account Suspension Defense: Circumventing Systems',
    question: 'Which advertiser action triggers an immediate, severe "Circumventing Systems" account suspension in Google Ads?',
    options: [
      'Updating headline copy once per month',
      'Using cloaking to show different landing page content to Google review bots than to real human users, or attempting to recreate new ad accounts to bypass an active suspension',
      'Adding 10 new negative keywords',
      'Switching billing credit cards with bank notification'
    ],
    correctAnswer: 1, // B
    explanation: 'Google strictly prohibits "Circumventing Systems", which includes cloaking destination URLs, manipulating ad text to evade policy enforcement, and spinning up new ad accounts under fake names to bypass existing suspensions.'
  },
  {
    id: 10,
    topic: 'Enterprise MCC Hierarchy & Shared Budgets',
    question: 'In a global multi-brand enterprise with 40 distinct regional entities, what is the best practice for account architecture and billing management?',
    options: [
      'Combine all 40 global entities into a single ad account with 10,000 ad groups',
      'A structured Manager Account (MCC) hierarchy with dedicated child accounts per country/brand, consolidated Monthly Invoicing billing profiles, and centralized Shared Libraries for script governance and brand exclusions',
      'Create 40 separate consumer Gmail accounts with personal credit cards',
      'Run all advertising through personal Facebook Ad accounts instead'
    ],
    correctAnswer: 1, // B
    explanation: 'Enterprise MCC architecture isolates brands/geos into modular sub-accounts for clean currency/timezone alignment and security, while leveraging Consolidated Invoicing and centralized script/asset management.'
  },
  {
    id: 11,
    topic: 'Smart Bidding Volatility Recovery',
    question: 'Following a major landing page redesign, a campaign with Target CPA experienced a 65% drop in conversion volume and CPCs doubled. What is the immediate recovery protocol?',
    options: [
      'Delete the campaign and all conversion actions immediately',
      '1. Verify conversion tracking tag firing and GTM triggers on the new landing page; 2. Temporarily switch from tCPA to Manual CPC or Maximize Clicks with a bid cap to re-establish baseline traffic; 3. Fix landing page message match and Core Web Vitals',
      'Raise Target CPA by 1,000%',
      'File an immediate lawsuit against Google'
    ],
    correctAnswer: 1, // B
    explanation: 'A sudden collapse after landing page changes indicates broken tracking tags or catastrophic drop in conversion rate. Verifying GTM tags, temporarily stabilizing bids with Manual CPC/bid caps, and fixing UX prevents algorithmic death spirals.'
  },
  {
    id: 12,
    topic: 'Profit-Driven Bidding & POAS',
    question: 'Why is Profit on Ad Spend (POAS) superior to standard Return on Ad Spend (ROAS) for e-commerce retailers with variable product margins?',
    options: [
      'Because POAS requires no tracking tags',
      'Because ROAS measures top-line gross revenue, which incentivizes bidding algorithms to push high-revenue but low-margin products that generate net losses; POAS passes exact gross profit margins to optimize for actual net profit',
      'Because Google guarantees 100% tax deductions on POAS campaigns',
      'Because POAS automatically eliminates shipping costs'
    ],
    correctAnswer: 1, // B
    explanation: 'A 400% ROAS on a 10% margin product results in financial loss, whereas a 250% ROAS on an 80% margin product is highly profitable. Passing profit margin values into Google Ads aligns Smart Bidding with bottom-line profitability.'
  },
  {
    id: 13,
    topic: 'Google Ads API & Custom App Scripts',
    question: 'What is the primary technical advantage of using the Google Ads API over the standard web user interface for enterprise agency operations?',
    options: [
      'The API provides free ad spend credits',
      'The API enables automated programmatic campaign deployment, custom bidirectional CRM synchronization, real-time bid adjustments via proprietary machine learning models, and automated compliance auditing at scale',
      'The API prevents Google from collecting taxes',
      'The API allows advertisers to edit competitor ad headlines'
    ],
    correctAnswer: 1, // B
    explanation: 'The Google Ads API provides direct programmatic access to create, update, manage, and report on campaigns at enterprise scale, connecting proprietary algorithms and enterprise ERPs with Google auctions.'
  },
  {
    id: 14,
    topic: 'Campaign Drafts and Experiments',
    question: 'What is the scientifically rigorous way to test a new Smart Bidding strategy (Target CPA) against an existing Manual CPC campaign in Google Ads?',
    options: [
      'Change the bid strategy on the live campaign on Friday and check results on Monday',
      'Create a Campaign Experiment with a 50/50 cookie-based or search-split allocation, running concurrently over a 30-day period with statistical significance indicators',
      'Duplicate the campaign with identical keywords and run both simultaneously with unconstrained budgets',
      'Run the new strategy in a different country'
    ],
    correctAnswer: 1, // B
    explanation: 'Google Ads Campaign Experiments split auction traffic 50/50 in real time against the original control campaign, eliminating time-of-year seasonality and external market bias while calculating statistical significance (p-values).'
  },
  {
    id: 15,
    topic: 'Diminishing Marginal Returns in Scaling',
    question: 'What economic principle explains why increasing a campaign’s daily budget from $1,000 to $5,000 rarely yields 5x the conversion volume at the same CPA?',
    options: [
      'The Second Law of Thermodynamics',
      'The Law of Diminishing Marginal Returns: Scaling forces algorithms to participate in lower-intent auctions, expand into broader search queries, and pay higher marginal CPCs to win incremental impression share',
      'Google deliberately charges higher rates to large advertisers',
      'Search volume decreases as budget increases'
    ],
    correctAnswer: 1, // B
    explanation: 'As campaigns exhaust the most efficient top-tier search queries, scaling requires bidding into more competitive auctions, broader match variants, and marginal audiences, naturally lifting average CPA.'
  },
  {
    id: 16,
    topic: 'Enhanced Conversions for Leads',
    question: 'How does "Enhanced Conversions for Leads" improve conversion tracking accuracy for B2B companies without relying on third-party cookies?',
    options: [
      'It records audio phone calls without consent',
      'It captures first-party user data (such as hashed email address) on the initial web form, securely transmits it to Google, and matches it against Google account profiles when offline CRM deals close weeks later',
      'It forces every visitor to log into a Google Account before submitting a form',
      'It eliminates the need for any CRM software'
    ],
    correctAnswer: 1, // B
    explanation: 'Enhanced Conversions for Leads captures and hashes lead information at form submission. When offline CRM milestones are uploaded with that hashed email, Google matches the offline conversion back to the original ad click without needing GCLIDs.'
  },
  {
    id: 17,
    topic: 'Server-Side Tagging via Google Tag Manager',
    question: 'What are the core performance and security benefits of deploying Server-Side Google Tag Manager (sGTM) on a custom first-party subdomain (e.g., `metrics.yourdomain.com`)?',
    options: [
      'It reduces cloud hosting costs to zero',
      'It eliminates client-side JavaScript execution bloat (faster Core Web Vitals), secures sensitive customer data from browser snooping, bypasses ad-blocker domain filtering, and extends first-party cookie longevity',
      'It gives free access to Google Cloud Platform unlimited servers',
      'It guarantees a Quality Score of 10 on all keywords'
    ],
    correctAnswer: 1, // B
    explanation: 'Server-side GTM routes telemetry through your own first-party server container, shielding user PII, reducing client-side JavaScript overhead for faster page speed, and bypassing client-side cookie expiration limitations.'
  },
  {
    id: 18,
    topic: 'Customer Match List Hygiene & Match Rates',
    question: 'What factors directly elevate the "Match Rate" when uploading customer email and phone lists into Google Customer Match?',
    options: [
      'Uploading only lowercase text with zero formatting',
      'Providing normalized and formatted data (E.164 phone formats, trimmed lowercase emails, first/last name, postal code, and country code) to maximize Google identity graph matching',
      'Uploading the list 50 times in one hour',
      'Using public Gmail addresses only'
    ],
    correctAnswer: 1, // B
    explanation: 'Google identity matching requires standardized data formatting (E.164 international phone formatting, sanitized emails, complete address fields). Providing multiple matching keys lifts match rates from 30% to 65%+.'
  },
  {
    id: 19,
    topic: 'Attribution Window Calibration',
    question: 'For a high-end enterprise B2B software with a 90-day sales cycle, what is the impact of leaving the Google Ads conversion window at the default 30 days?',
    options: [
      'Zero impact on reporting',
      'Under-reporting conversions by 40–60%, because prospects who convert between day 31 and day 90 are completely dropped from attribution, starving Smart Bidding of optimization signals',
      'Google automatically extends it to 365 days',
      'Campaign budgets will be reduced by 50%'
    ],
    correctAnswer: 1, // B
    explanation: 'When customer consideration cycles exceed 30 days, standard 30-day click-through conversion windows fail to capture downstream conversions, misleading bidding algorithms into believing campaigns are underperforming.'
  },
  {
    id: 20,
    topic: 'Script-Based Automated Negative Keyword Sculpting',
    question: 'In a tiered campaign structure (e.g., Exact Match Campaign vs Broad Match Discovery Campaign), how does an automated negative keyword script maintain traffic isolation?',
    options: [
      'By deleting the broad match campaign every night',
      'By automatically extracting all active keywords from the Exact Match campaign and adding them as exact match negative keywords in the Broad Match campaign, preventing query cannibalization',
      'By changing all bids to $1.00',
      'By notifying Google support via chat'
    ],
    correctAnswer: 1, // B
    explanation: 'Cross-campaign negative sculpting scripts ensure that search queries matching exact match keywords are exclusively served by high-priority exact ad groups, preventing lower-priority broad discovery campaigns from stealing auction volume.'
  },
  {
    id: 21,
    topic: 'Lead Quality & Spam Prevention',
    question: 'A B2B campaign suddenly experiences 100 fake form submissions per day from bot traffic. Which technical implementation effectively cleanses Google Ads conversion data?',
    options: [
      'Turn off conversion tracking permanently',
      'Implement enterprise reCAPTCHA v3 / Cloudflare Turnstile on landing pages, qualify leads via CRM validation, and switch Google Ads conversion optimization to offline CRM Qualified Lead events rather than raw form submissions',
      'Double the daily budget',
      'Change the campaign location to Antarctica'
    ],
    correctAnswer: 1, // B
    explanation: 'Preventing bot pollution requires bot protection (reCAPTCHA v3/Turnstile) on forms combined with switching Smart Bidding optimization to verified CRM stages (MQL/SQL), preventing algorithms from optimizing for spam bot submissions.'
  },
  {
    id: 22,
    topic: 'Performance Max URL Expansion Settings',
    question: 'What is the risk of leaving "Final URL Expansion" enabled in a Performance Max campaign without URL exclusions?',
    options: [
      'Google will delete your domain name',
      'Google may automatically direct paid traffic to non-commercial pages like your Privacy Policy, Terms of Service, Blog Archives, or Career listings, wasting ad dollars on zero-intent URLs',
      'The website will crash under server load',
      'Ads will only be displayed on Google Maps'
    ],
    correctAnswer: 1, // B
    explanation: 'Final URL Expansion allows Google to replace your final URL with any relevant page on your domain. Without URL exclusion rules (excluding blog posts, career pages, legal disclaimers), budget is wasted on non-commercial pages.'
  },
  {
    id: 23,
    topic: 'Seasonality Adjustments for Smart Bidding',
    question: 'When should an enterprise advertiser use Google Ads "Seasonality Adjustments" instead of letting Smart Bidding adapt automatically?',
    options: [
      'For normal month-to-month seasonal shifts lasting 6 months',
      'For short, extreme, predictable conversion rate surges lasting 1 to 7 days (e.g., Black Friday 48-hour flash sale with expected 3x CVR), where machine learning would otherwise lag in reacting to immediate demand spikes',
      'Every single weekend',
      'When launching a brand new website with zero sales history'
    ],
    correctAnswer: 1, // B
    explanation: 'Smart Bidding uses historical trends. For short, massive conversion rate spikes (like a 48-hour 50% off Black Friday flash sale), Seasonality Adjustments inform the algorithm in advance of the expected CVR lift, allowing aggressive bidding without post-sale lag.'
  },
  {
    id: 24,
    topic: 'Trademark Policy and Competitor Bidding',
    question: 'Under Google Ads trademark policy in the US and most regions, what is legally permissible when bidding on competitor brand keywords?',
    options: [
      'You can bid on competitor brand names as keywords, but you cannot use their registered trademark in your ad copy to deceive users or imply authorized reseller status',
      'Bidding on competitor brand names is strictly prohibited by Google under penalty of law',
      'You must pay the competitor a 50% royalty on every click',
      'Competitor ads are automatically translated into Greek'
    ],
    correctAnswer: 0, // A
    explanation: 'In the US and most regions, Google allows advertisers to bid on competitor brand names as keywords in auctions. However, using registered trademark terms in your ad copy (headlines/descriptions) can be restricted if the trademark owner files a formal complaint.'
  },
  {
    id: 25,
    topic: 'Portfolio Bidding Strategies with Shared Budgets',
    question: 'What is the strategic advantage of grouping multiple related campaigns under a single Portfolio Bidding Strategy with a Shared Budget?',
    options: [
      'It reduces Google ad billing by 20%',
      'It pools conversion volume across multiple campaigns into a single machine learning model, accelerating Smart Bidding learning periods while dynamically allocating budget to whichever campaign has the highest live ROI',
      'It forces all campaigns to use identical ad headlines',
      'It disables keyword Quality Score calculations'
    ],
    correctAnswer: 1, // B
    explanation: 'Portfolio bid strategies aggregate conversion data across multiple campaigns, helping campaigns with moderate volume reach the 30–50 monthly conversion threshold faster, while shared budgets dynamically route spend to the most efficient opportunities in real time.'
  },
  {
    id: 26,
    topic: 'First-Party Data Strategy in Post-Cookie Marketing',
    question: 'In an ecosystem dominated by Safari ITP, Firefox tracking protection, and Chrome Privacy Sandbox, what is the foundational requirement for resilient conversion measurement?',
    options: [
      'Relying entirely on third-party tracking pixels',
      'Deploying a robust First-Party Data pipeline: Server-Side Tagging, Enhanced Conversions with SHA-256 customer data, Consent Mode v2, and Offline CRM Conversion Imports',
      'Stopping all digital advertising and moving to billboard ads',
      'Asking users to disable all browser security settings'
    ],
    correctAnswer: 1, // B
    explanation: 'Modern measurement resilience requires first-party data architecture: server-side tag routing, enhanced conversions with cryptographic hashing, Consent Mode compliance, and CRM offline conversion feedback loops.'
  },
  {
    id: 27,
    topic: 'B2B Lead Scoring & Value-Based Smart Bidding',
    question: 'A B2B enterprise generates 1,000 raw leads/mo. 100 become Sales Qualified Leads ($500 value) and 10 become Won Deals ($10,000 value). How should conversion values be configured in Google Ads?',
    options: [
      'Assign $1 value to all leads regardless of stage',
      'Pass weighted values into Google Ads conversion actions: Raw Lead ($10), SQL ($500), Closed Won ($10,000), and switch bidding to Maximize Conversion Value with Target ROAS',
      'Only track website visits and ignore sales data',
      'Manually adjust bids once every 6 months'
    ],
    correctAnswer: 1, // B
    explanation: 'Assigning weighted monetary values to progressive funnel stages (Raw Lead vs SQL vs Won Deal) enables Maximize Conversion Value algorithms to optimize for revenue-generating buyer profiles rather than low-quality lead volume.'
  },
  {
    id: 28,
    topic: 'Impression Share Diagnostics: Lost IS Rank Analysis',
    question: 'If an Exact Match Search campaign targeting high-intent keywords has 60% Lost Impression Share due to Rank, which diagnosis is mathematically sound?',
    options: [
      'The daily budget is 10x too high',
      'Either the Max CPC bid / Target CPA is too low relative to auction competition, or keyword Quality Scores (eCTR, ad relevance, landing page experience) are substandard, depressing Ad Rank below the top-of-page threshold',
      'The campaign is showing ads in too many countries',
      'The landing page has too many images'
    ],
    correctAnswer: 1, // B
    explanation: 'Lost IS (Rank) is directly caused by low Ad Rank. To recapture lost impressions, the advertiser must either raise bids/CPA targets to compete in higher-tier auctions or elevate Quality Score components to achieve higher rank at current bid levels.'
  },
  {
    id: 29,
    topic: 'Automated Anomaly Detection with Google Apps Scripts',
    question: 'Why should enterprise accounts deploy daily automated anomaly detection scripts checking 0-impression or 0-conversion anomalies?',
    options: [
      'Because Google employees require daily script logs',
      'To detect broken landing page servers, expired payment methods, accidental GTM tag drops, or tracking breakages within hours rather than discovering lost revenue weeks later',
      'To increase the daily spending limit on the account',
      'To bypass Google Ads account policies'
    ],
    correctAnswer: 1, // B
    explanation: 'Anomaly detection scripts continuously inspect account health, instantly firing alert webhooks when conversion volume, impressions, or spend deviate significantly from historical baselines, preventing silent revenue leakage.'
  },
  {
    id: 30,
    topic: 'Statistical Significance in Creative Experimentation',
    question: 'When analyzing a 50/50 RSA creative split test with 500 clicks per variant, Variant A has a 4.2% CVR (21 conversions) and Variant B has a 5.0% CVR (25 conversions). Is this result statistically significant at a 95% confidence level ($p < 0.05$)?',
    options: [
      'Yes, Variant B is definitively the winner and should be scaled immediately',
      'No, with only 21 vs 25 conversions, the sample size is insufficient and the observed difference is likely due to random chance ($p > 0.05$); the test must run longer until higher conversion volume is reached',
      'Conversion rates do not matter in A/B testing',
      'Variant A won because 4.2 is a lower number'
    ],
    correctAnswer: 1, // B
    explanation: 'A sample of 21 vs 25 conversions on 500 clicks yields a p-value well above 0.05. Declaring winners prematurely without statistical confidence leads to false conclusions and degraded campaign performance.'
  },
  {
    id: 31,
    topic: 'Cross-Network Cannibalization Auditing',
    question: 'When running both Standard Shopping and Performance Max campaigns for the same product inventory, which campaign takes auction priority in Google Ads?',
    options: [
      'Standard Shopping always wins priority over Performance Max',
      'Performance Max takes priority over Standard Shopping campaigns containing the same products, unless the Standard Shopping campaign has a significantly higher Ad Rank',
      'Both ads display side-by-side simultaneously for the same user',
      'Google pauses both campaigns automatically'
    ],
    correctAnswer: 1, // B
    explanation: 'In general, Performance Max takes precedence over Standard Shopping campaigns targeting the same product IDs, which is why product catalogs must be segmented cleanly across campaigns to prevent cannibalization.'
  },
  {
    id: 32,
    topic: 'Ad Schedule Bid Adjustments under Smart Bidding',
    question: 'How do Ad Schedule (dayparting) percentage bid adjustments interact with fully automated Smart Bidding strategies (e.g., Target CPA / Target ROAS)?',
    options: [
      'They override all machine learning and set fixed bids',
      'Smart Bidding already models auction-time time-of-day signals dynamically; setting Ad Schedule bid adjustments in tCPA/tROAS modifies the target goal (e.g., a +20% adjustment tells the algorithm to accept a 20% higher CPA for that time window) rather than directly setting CPC bids',
      'Ad schedule adjustments are completely deleted by Google',
      'They cause campaigns to spend 10x the daily budget'
    ],
    correctAnswer: 1, // B
    explanation: 'In Smart Bidding, bid adjustments do not adjust CPC bids directly. In Target CPA, a +20% bid adjustment raises the Target CPA target itself for that scheduled window, signaling the algorithm to bid more aggressively.'
  },
  {
    id: 33,
    topic: 'Lead Form Extensions & Webhook Integration',
    question: 'How can lead form asset submissions captured inside Google search ads be instantly delivered into an enterprise CRM (e.g., HubSpot or Salesforce) in real time?',
    options: [
      'By manually downloading CSV files from Google Ads every 30 days',
      'By configuring the Google Ads Lead Form Webhook URL and Key to post lead payloads directly to an API endpoint or automation middleware (e.g., Zapier/Make) in real time',
      'By sending a fax to Google headquarters',
      'By taking a screenshot of the search ad'
    ],
    correctAnswer: 1, // B
    explanation: 'Google Ads Lead Form assets support native Webhooks. When a user submits an in-ad lead form, Google delivers JSON lead data to the configured Webhook endpoint instantly, enabling real-time sales team dispatch.'
  },
  {
    id: 34,
    topic: 'Negative Keyword Match Conflicts at Scale',
    question: 'In a large enterprise account with 200,000 keywords, an advertiser notices that a top-converting Exact Match keyword [enterprise cloud backup] has zero impressions. What is the most common technical culprit?',
    options: [
      'The keyword was banned by the government',
      'A broad or phrase negative keyword (e.g., "backup" or "cloud backup") in a shared negative list or campaign negative list is conflicting with and blocking the positive keyword',
      'The landing page URL has too many capital letters',
      'The ad copy contains a colon'
    ],
    correctAnswer: 1, // B
    explanation: 'Negative keyword conflicts are common in large accounts. A broad or phrase negative added to a shared list can inadvertently block high-value positive exact match keywords, dropping impressions to zero until the conflict is resolved.'
  },
  {
    id: 35,
    topic: 'Google Display Network Viewability (vCPM)',
    question: 'What constitutes an "Active View Viewable Impression" under Google and MRC standards for Display ads?',
    options: [
      'The user clicked on the ad 5 times',
      'At least 50% of the ad pixels are in view on the screen for a minimum of 1 continuous second for display ads (or 2 seconds for video)',
      'The ad was loaded somewhere in the hidden bottom footer of the webpage',
      'The user printed the webpage on paper'
    ],
    correctAnswer: 1, // B
    explanation: 'The Media Rating Council (MRC) standard for viewability requires at least 50% of the ad creative pixels to be visible in the user viewport for a continuous duration of at least 1 second for display ads (2 seconds for video).'
  },
  {
    id: 36,
    topic: 'Google Ads Auction Insights Interpretation',
    question: 'In the Auction Insights report for an enterprise Search campaign, Competitor X has an 85% "Impression Share" but a 15% "Outranking Share" against your account. What does this indicate?',
    options: [
      'Competitor X is outranking you on almost every search auction',
      'Competitor X is entering 85% of eligible auctions, but your ad ranks higher than Competitor X (or shows when they do not) in 85% of shared auctions (since Outranking Share is the % of times you outranked them or showed when they didn’t)',
      'Competitor X has been banned from advertising',
      'Competitor X is bidding on different keywords'
    ],
    correctAnswer: 1, // B
    explanation: 'Auction Insights Outranking Share represents how often your ad ranked higher in the auction than the competitor ad, plus how often your ad showed when theirs did not. High Outranking Share proves superior Ad Rank over that competitor.'
  },
  {
    id: 37,
    topic: 'Target Impression Share Strategy Risks',
    question: 'What is the primary risk of using "Target Impression Share: Absolute Top of Page 100%" on generic, non-brand keywords?',
    options: [
      'The campaign will generate zero impressions',
      'The bidding algorithm will bid astronomical CPC amounts to win 100% of top positions regardless of conversion rate or profitability, rapidly draining budget on unprofitable auctions',
      'Google Ads will convert all keywords to phrase match',
      'Competitors will receive your company emails'
    ],
    correctAnswer: 1, // B
    explanation: 'Target Impression Share focuses entirely on ad position rather than conversions or ROI. Applying 100% Absolute Top of Page to broad or non-brand keywords can cause CPCs to spike to $50–$100+ per click as the system tries to win every auction.'
  },
  {
    id: 38,
    topic: 'Performance Max Search Themes',
    question: 'What is the function of "Search Themes" in Performance Max campaigns?',
    options: [
      'They change the color theme of Google search results',
      'They provide explicit intent signals and query guidance to Google AI regarding topics and terms your customers search for, steering PMax matching toward relevant search categories without replacing negative keyword exclusions',
      'They replace all Responsive Search Ads in the account',
      'They block competitor ads automatically'
    ],
    correctAnswer: 1, // B
    explanation: 'Search Themes inform Performance Max algorithms about specific search intents, categories, and terminology relevant to your business, helping machine learning discover relevant search queries faster across Google inventory.'
  },
  {
    id: 39,
    topic: 'MCC Currency & Timezone Immutability',
    question: 'Once a Google Ads account is created and billing is established, can the account Timezone and Currency be changed in account settings?',
    options: [
      'Yes, they can be changed anytime in Account Preferences',
      'No, Currency and Timezone are permanently locked upon account creation; correcting an erroneous timezone or currency requires creating a new account and migrating campaigns',
      'Only the Currency can be changed, but not Timezone',
      'Only the Timezone can be changed, but not Currency'
    ],
    correctAnswer: 1, // B
    explanation: 'Google Ads accounts permanently lock Currency and Timezone settings upon creation for billing, reporting, and regulatory integrity. To change them, a new account must be created within the MCC.'
  },
  {
    id: 40,
    topic: 'Enterprise Growth & Scaling Playbook',
    question: 'Which holistic strategy represents the gold standard for scaling a multi-million dollar annual Google Ads enterprise acquisition program?',
    options: [
      'Increase all campaign budgets by 500% overnight and enable broad match everywhere with no negatives',
      '1. High-intent Search STAGs (tCPA/tROAS); 2. PMax with rich creative asset libraries & Brand Exclusions; 3. First-party measurement via sGTM & Enhanced Conversions; 4. CRM Offline Conversion feedback loops; 5. Automated scripting & daily anomaly alerts; 6. Controlled incrementality experiments',
      'Rely exclusively on Google automated recommendations tab and apply all auto-apply recommendations without review',
      'Pause all search advertising and rely entirely on organic viral social media'
    ],
    correctAnswer: 1, // B
    explanation: 'Enterprise excellence combines disciplined search architecture, multi-channel PMax scaling with brand defense, first-party measurement infrastructure (sGTM/Enhanced Conversions), CRM offline revenue feedback, automated scripting, and rigorous incrementality testing.'
  }
];

const ADVANCED_MODULE_TITLES = [
  'Advanced Google Ads Account Strategy',
  'Performance Max Campaign Strategy',
  'Advanced Conversion Measurement',
  'Attribution and Incrementality',
  'Advanced Smart Bidding and Value-Based Optimization',
  'Advanced Search Campaign Experimentation',
  'Google Ads Scripts and Automation Concepts',
  'Advanced Reporting and Dashboard Design',
  'Lead Generation Quality and CRM Optimization',
  'E-commerce Profitability and MER Analysis',
  'Policy, Privacy, Consent, and Account Safety',
  'Advanced Troubleshooting and Performance Recovery',
  'Enterprise Multi-Account Architecture and MCC Management',
  'Advanced Campaign Scaling and Diminishing Marginal Returns Strategy'
];

function generateAdvancedModule(index, title) {
  const modId = `gads-adv-${String(index).padStart(2, '0')}`;
  
  const snippets = [
    {
      filename: `enterprise_${index}_script.js`,
      language: 'javascript',
      title: `${title} — Google Ads Automated Enterprise Health Script`,
      code: `// Google Ads Automated Script for ${title}
function main() {
  const config = {
    spendAnomalyThresholdPercent: 35,
    slackWebhookUrl: 'https://hooks.slack.com/services/T00/B00/XXXX',
    emailAlerts: 'growth-team@enterprise.com'
  };

  const campaignIterator = AdsApp.campaigns()
    .withCondition('Status = ENABLED')
    .withCondition('Cost > 100')
    .forDateRange('TODAY')
    .get();

  const alerts = [];

  while (campaignIterator.hasNext()) {
    const campaign = campaignIterator.next();
    const stats = campaign.getStatsFor('TODAY');
    const budget = campaign.getBudget().getAmount();
    const spend = stats.getCost();

    if (spend > budget * 1.8) {
      alerts.push(\`[ALERT] Campaign "\${campaign.getName()}" has spent $\${spend.toFixed(2)} vs $\${budget.toFixed(2)} daily budget.\`);
    }
  }

  if (alerts.length > 0) {
    MailApp.sendEmail(config.emailAlerts, 'Google Ads Automated Spend Anomaly Alert', alerts.join('\\n'));
    console.log('[Automation] Alerts dispatched successfully:', alerts.length);
  } else {
    console.log('[Automation] All campaigns operating within standard spend parameters.');
  }
}`,
      lineByLine: [
        { line: 'const config = { ... }', explanation: 'Defines configuration parameters, spend thresholds, and notification endpoints for enterprise monitoring.' },
        { line: 'const campaignIterator = AdsApp.campaigns() ...', explanation: 'Queries active Google Ads campaigns spending budget in real time using AdsApp selectors.' },
        { line: 'if (spend > budget * 1.8) { ... }', explanation: 'Evaluates spend velocity against daily budgets and triggers automated alerts upon anomaly detection.' }
      ]
    },
    {
      filename: `offline_conversion_uploader_${index}.ts`,
      language: 'typescript',
      title: `${title} — Offline Conversion Import (OCI) Generator`,
      code: `// Offline Conversion Import (OCI) Payload Generator for ${title}
interface CrmClosedDeal {
  gclid: string;
  conversionActionName: string; // e.g., 'CRM_Closed_Won_Deal'
  conversionTime: string; // 'yyyy-mm-dd hh:mm:ss+tz'
  dealValue: number;
  currency: string;
}

export function formatGoogleAdsConversionPayload(deal: CrmClosedDeal) {
  return {
    googleClickId: deal.gclid,
    conversionCustomVariable: deal.conversionActionName,
    conversionDateTime: deal.conversionTime,
    conversionValue: deal.dealValue,
    conversionCurrency: deal.currency,
    userIdentifierSource: 'FIRST_PARTY',
    status: 'READY_FOR_API_DISPATCH'
  };
}

// Example CRM Closed-Won Deal Payload
console.log(formatGoogleAdsConversionPayload({
  gclid: 'Cj0KCQjw_sample_gclid_enterprise_99812',
  conversionActionName: 'Enterprise_Contract_Signed',
  conversionTime: '2026-09-12 14:30:00-05:00',
  dealValue: 24500.00,
  currency: 'USD'
}));`,
      lineByLine: [
        { line: 'interface CrmClosedDeal { ... }', explanation: 'Defines TypeScript interface for downstream CRM closed deals linked to Google Click IDs.' },
        { line: 'return { googleClickId: deal.gclid, ... }', explanation: 'Formats API-compliant conversion upload payload matching Google Ads REST API specifications.' },
        { line: 'dealValue: 24500.00', explanation: 'Demonstrates production formatting feeding high-value $24,500 contract closing data into Smart Bidding.' }
      ]
    },
    {
      filename: `geo_experiment_analyzer_${index}.js`,
      language: 'javascript',
      title: `${title} — Statistical Geo-Holdout Incrementality Calculator`,
      code: `// Statistical Geo-Holdout Incrementality Calculator
function calculateGeoIncrementality(controlGroup, testGroup) {
  // Pre-test baseline vs post-test revenue
  const controlGrowth = (controlGroup.postRevenue - controlGroup.preRevenue) / controlGroup.preRevenue;
  const expectedTestRevenue = testGroup.preRevenue * (1 + controlGrowth);
  const incrementalRevenue = testGroup.postRevenue - expectedTestRevenue;
  const incrementalRoas = incrementalRevenue / testGroup.adSpend;

  return {
    controlGrowthRate: \`\${(controlGrowth * 100).toFixed(2)}%\`,
    actualTestRevenue: \`$\${testGroup.postRevenue.toLocaleString()}\`,
    counterfactualBaseline: \`$\${Math.round(expectedTestRevenue).toLocaleString()}\`,
    netIncrementalRevenue: \`$\${Math.round(incrementalRevenue).toLocaleString()}\`,
    incrementalRoas: \`\${incrementalRoas.toFixed(2)}x\`,
    isIncrementallyProfitable: incrementalRoas > 1.0
  };
}

console.log(calculateGeoIncrementality(
  { preRevenue: 500000, postRevenue: 525000 }, // Control (No Ad Spend)
  { preRevenue: 500000, postRevenue: 680000, adSpend: 60000 } // Test (With Google Ads Spend)
));`,
      lineByLine: [
        { line: 'const controlGrowth = ...', explanation: 'Calculates counterfactual baseline revenue in control regions vs test regions to isolate organic demand.' },
        { line: 'const incrementalRevenue = testGroup.postRevenue - expectedTestRevenue;', explanation: 'Computes true Net Incremental Revenue and Incremental ROAS generated strictly by paid ads.' },
        { line: 'incrementalRoas > 1.0', explanation: 'Executes geo-experiment simulation proving incremental profitability ($155k lift on $60k spend = 2.58x iROAS).' }
      ]
    }
  ];

  return {
    id: modId,
    title: title,
    description: `Enterprise-level masterclass covering ${title.toLowerCase()} with offline CRM syncing, sGTM, scripts automation, and geo-testing.`,
    level: 'advanced',
    orderIndex: index,
    status: 'locked',
    requiresQuiz: false,
    type: 'theory',
    duration: '60 mins',
    xpReward: 200,
    lessonContent: {
      overview: `Elite enterprise masterclass covering ${title.toLowerCase()} in Google Ads. Master programmatic automation, offline CRM conversion loops, Server-Side Tagging, incrementality testing, and profit-driven scaling architectures.`,
      analogyHero: `Think of enterprise ${title.toLowerCase()} like high-frequency algorithmic financial trading: success depends on closed-loop feedback, programmatic risk boundaries, and mathematical incrementality over platform vanity metrics.`,
      objectives: [
        `Master enterprise-scale strategies for ${title.toLowerCase()}`,
        `Deploy automated Google Ads Scripts, sGTM architecture, or offline conversion data pipelines`,
        `Execute geo-holdout experiments and multi-touch data-driven attribution models`,
        `Build resilient performance marketing systems resistant to algorithmic volatility and tracking loss`
      ],
      estimatedTime: '60 mins',
      keyTakeaways: [
        `Integrate offline CRM conversion signals to optimize Smart Bidding toward qualified pipeline and closed revenue.`,
        `Deploy Server-Side GTM and Consent Mode v2 to ensure privacy compliance and robust data hygiene.`,
        `Validate platform-reported ROAS through controlled geo-holdout incrementality experiments.`
      ],
      summary: `Mastering ${title.toLowerCase()} enables enterprise marketing architects to manage multimillion-dollar budgets with deterministic revenue attribution and profit maximization.`,
      syntaxGuide: `// Incremental ROAS:\niROAS = (Test Revenue - Counterfactual Baseline Revenue) / Test Ad Spend\n// POAS (Profit On Ad Spend):\nPOAS = Gross Profit Margin / Ad Spend`,
      practiceExercises: [
        {
          title: `${title} Enterprise Architecture Challenge`,
          instructions: `A B2B SaaS account reports a 5.0x platform ROAS, but CRM data shows that 75% of leads never reach qualified discovery calls. Architect an Offline Conversion Import (OCI) pipeline and Value-Based Bidding model to solve this.`,
          starterCode: `const ociStrategy = {\n  milestoneConversions: [],\n  valueWeights: {},\n  biddingAdjustment: ''\n};`,
          solutionCode: `const ociStrategy = {\n  milestoneConversions: ['MQL_Qualified_Lead', 'SQL_Discovery_Completed', 'Opportunity_Won'],\n  valueWeights: { MQL: 50, SQL: 350, Won: 5000 },\n  biddingAdjustment: 'Switch to Maximize Conversion Value with Target ROAS calibrated to closed pipeline'\n};`
        }
      ],
      sections: [
        {
          id: `sec-adv-${index}-1`,
          title: `1. Enterprise Architecture & Mechanics of ${title}`,
          difficulty: 'Advanced',
          content: `At the highest levels of performance marketing, ${title.toLowerCase()} separates amateur media buyers from elite growth engineers. When managing high-velocity budgets across global markets, advertisers must transition from manual adjustments to programmatic governance, first-party data infrastructure, and mathematical unit economics.\n\n### Core Strategic Pillars\n- **First-Party Data Primacy**: Leveraging Server-Side GTM, Consent Mode v2, and Enhanced Conversions to ensure data resilience in a post-cookie landscape.\n- **Value-Based Optimization (VBO)**: Feeding downstream CRM revenue, profit margins, and customer lifetime value (LTV) directly into Smart Bidding algorithms.\n- **Scientific Incrementality**: Distinguishing between organic baseline conversions and true paid ad incrementality via controlled geo-experiments.`,
          explanation: `At the highest levels of performance marketing, ${title.toLowerCase()} separates amateur media buyers from elite growth engineers through first-party data pipelines and programmatic controls.`,
          codeSnippets: [snippets[0]],
          miniPractice: {
            question: `What are the two mandatory consent parameters required by Google Consent Mode v2 for EEA traffic?`,
            options: [
              `ad_user_data and ad_personalization`,
              `analytics_storage and user_id`,
              `security_storage and geo_location`,
              `cookie_domain and session_id`
            ],
            correctAnswer: 0,
            explanation: `Consent Mode v2 introduced ad_user_data and ad_personalization as mandatory flags to communicate user consent for advertising data and remarketing in the EEA.`
          },
          proTip: `Run automated JavaScript scripts nightly to audit broken landing page URLs and detect sudden spend anomalies.`,
          commonMistakes: [
            `Ignoring Consent Mode v2 parameters, which disables audience modeling and remarketing lists in the EU.`,
            `Relying entirely on platform-reported in-platform ROAS without verifying CRM closed revenue.`
          ]
        },
        {
          id: `sec-adv-${index}-2`,
          title: `2. Programmatic Execution & Technical Blueprints`,
          difficulty: 'Advanced',
          content: `Executing ${title.toLowerCase()} with institutional rigor requires:\n\n1. **Automation Pipelines**: Deploy Google Ads JavaScript scripts and BigQuery data exports to monitor spend anomalies, brand query cannibalization, and broken final URLs in real time.\n2. **Offline Data Ingestion**: Map CRM deal stages (MQL, SQL, Won Revenue) to Google Click IDs (GCLID/Gbraid) and upload hashed conversion adjustments daily.\n3. **Continuous Hypothesis Testing**: Run 50/50 Campaign Drafts & Experiments to validate bidding targets and creative angles before allocating capital.`,
          explanation: `Executing with institutional rigor involves automated JavaScript scripts, BigQuery data streams, and daily offline CRM conversion uploads.`,
          codeSnippets: [snippets[1]],
          miniPractice: {
            question: `Why is Offline Conversion Import (OCI) crucial for high-ticket B2B and lead generation companies?`,
            options: [
              `It passes actual closed revenue and qualified deal milestones back to Google Ads, enabling Smart Bidding to optimize for paying customers instead of junk leads`,
              `It bypasses Google ad policy approvals automatically`,
              `It gives advertisers free ad credits every month`,
              `It removes all negative keyword requirements`
            ],
            correctAnswer: 0,
            explanation: `OCI grounds the machine learning algorithm in actual revenue and downstream deal stages rather than superficial initial lead form fills.`
          },
          proTip: `Capture GCLID, GBRAID, and WBRAID URL parameters at the moment of form submission and store them permanently on the CRM contact record.`,
          commonMistakes: [
            `Uploading offline conversions with timestamps older than 90 days, which Google Ads cannot attribute.`,
            `Failing to include transaction currency codes in offline conversion upload files.`
          ]
        },
        {
          id: `sec-adv-${index}-3`,
          title: `3. High-Scale Enterprise Case Study`,
          difficulty: 'Advanced',
          content: `An enterprise B2B SaaS platform and global DTC e-commerce conglomerate deployed the advanced frameworks of ${title.toLowerCase()}:\n- **Increased Net Closed-Won Revenue by 142%**\n- **Slashed Wasted Brand Cannibalization Spend by $340,000 Annually**\n- **Achieved 99.4% Attribution Accuracy across European and North American Territories via Consent Mode v2 and sGTM**`,
          explanation: `Deploying statistical geo-holdout tests and offline conversion ingestion unlocks massive revenue lift while cutting non-incremental ad waste.`,
          codeSnippets: [snippets[2]],
          miniPractice: {
            question: `How does a Geo-Holdout Experiment measure true ad incrementality?`,
            options: [
              `By comparing revenue in test regions (where ads run) against counterfactual baseline revenue modeled from matched control regions (where ads are turned off)`,
              `By asking website visitors in a survey if they remember seeing an ad`,
              `By counting total clicks in Google Analytics`,
              `By increasing bids by 100% across all keywords simultaneously`
            ],
            correctAnswer: 0,
            explanation: `Geo-holdout experiments isolate organic baseline demand from paid ad lift by comparing matched geographic treatment and control cells.`
          },
          proTip: `Run matched-market geo-holdout tests for 4 to 6 weeks to establish accurate Incremental ROAS (iROAS) benchmarks.`,
          commonMistakes: [
            `Selecting non-homogeneous geographic markets without historical correlation for control and treatment groups.`,
            `Ending geo-experiments prematurely before reaching statistical power.`
          ]
        }
      ]
    }
  };
}

const advancedModules = ADVANCED_MODULE_TITLES.map((title, idx) => generateAdvancedModule(idx + 1, title));

// Advanced Project 1: Multi-Channel Performance Marketing System
const ADVANCED_PROJECT_1 = {
  id: 'gads-adv-p1',
  title: 'Advanced Project 1: Multi-Channel Performance Marketing System',
  description: 'Architect and execute an enterprise multi-channel acquisition system across Search, PMax, YouTube, sGTM, Consent Mode v2, and Offline CRM feedback.',
  level: 'advanced',
  orderIndex: 15,
  status: 'locked',
  requiresQuiz: false,
  isProject: true,
  type: 'project',
  duration: '300 mins',
  xpReward: 600,
  projectDetails: {
    overview: 'You are the VP of Growth / Principal Performance Marketing Architect for OmniHealth Global, a hybrid telemedicine and premium health subscription platform spending $150,000/month across North America. You must design and build a multi-channel acquisition system integrating Search, Performance Max, YouTube Shorts/In-Stream, Display Remarketing, Server-Side GTM, Consent Mode v2, and Offline CRM Conversion Imports.',
    scenario: 'You are the VP of Growth / Principal Performance Marketing Architect for OmniHealth Global, a hybrid telemedicine and premium health subscription platform spending $150,000/month across North America. You must design and build a multi-channel acquisition system integrating Search, Performance Max, YouTube Shorts/In-Stream, Display Remarketing, Server-Side GTM, Consent Mode v2, and Offline CRM Conversion Imports.',
    estimatedHours: '5 hours',
    learningObjectives: [
      'Architect an enterprise multi-channel acquisition blueprint across Search, PMax, YouTube, and Display',
      'Deploy Server-Side GTM and Google Consent Mode v2 with Enhanced Conversions architecture',
      'Engineer a bidirectional CRM offline conversion pipeline linking qualified consultations to Google Ads',
      'Design value-based bidding (VBB) rules and a profit-driven budget allocation matrix',
      'Build an automated Google Ads Script suite for spend anomaly detection and query governance'
    ],
    objectives: [
      'Architect an enterprise multi-channel acquisition blueprint across Search, PMax, YouTube, and Display',
      'Deploy Server-Side GTM and Google Consent Mode v2 with Enhanced Conversions architecture',
      'Engineer a bidirectional CRM offline conversion pipeline linking qualified consultations to Google Ads',
      'Design value-based bidding (VBB) rules and a profit-driven budget allocation matrix',
      'Build an automated Google Ads Script suite for spend anomaly detection and query governance'
    ],
    requirements: [
      'Segment campaigns across Brand, Non-Brand Search, PMax, and YouTube Demand Gen',
      'Implement Server-Side GTM container with Consent Mode v2 (ad_user_data, ad_personalization)',
      'Engineer Offline Conversion Import pipeline passing CRM deal values back into Google Ads',
      'Configure Value-Based Bidding with Conversion Value Rules for geographic and audience tiers',
      'Write and deploy Google Ads automated scripts for spend anomaly and 404 URL detection',
      'Formulate a 90-day scaling plan with statistical geo-holdout experiment framework'
    ],
    deliverables: [
      '1. Enterprise Account & Channel Architecture (Search STAGs, Brand Isolation, PMax, YouTube, Display Remarketing)',
      '2. Customer Journey Mapping & Funnel Taxonomy (Top-of-funnel awareness to bottom-of-funnel subscription activation)',
      '3. Master Campaign Naming & Labeling Framework (Enterprise taxonomy across regions, objectives, and bidding models)',
      '4. High-Intent Search Keyword & Match-Type Blueprint (Non-brand telehealth, prescription therapy, specialist consultations)',
      '5. Cross-Campaign Negative Keyword Sculpting Plan (Automated scripts, shared lists, and brand exclusion parameters)',
      '6. Comprehensive Creative Asset Engine (15-headline RSAs, PMax assets in all ratios, video scripts, sitelinks, callouts)',
      '7. Technical Server-Side GTM & Consent Mode v2 Architecture (sGTM container schema, ad_user_data/ad_personalization compliance)',
      '8. Offline Conversion Import (OCI) & CRM Integration Plan (GCLID/Gbraid capture, HIPAA-compliant hashing, revenue mapping)',
      '9. Value-Based Smart Bidding (VBB) Model (Conversion Value Rules by geo/audience, Target ROAS / Target CPA calibration)',
      '10. Automated Google Ads Scripts Suite (Spend anomaly alerts, broken URL checkers, zero-impression keyword monitors)',
      '11. Executive KPI & Blended MER Dashboard Specification (MER, POAS, New Customer CAC, Assisted Conversions, Lost IS)',
      '12. 90-Day Scaling, Experimentation & Incrementality Roadmap (Geo-holdout test protocol, bid strategy testing, quarterly reviews)'
    ],
    rubric: [
      {
        criteria: 'Enterprise Multi-Channel Architecture',
        criterion: 'Enterprise Multi-Channel Architecture',
        weight: '25%',
        description: 'Flawless channel segmentation, brand isolation, and coordinated multi-channel acquisition strategy.'
      },
      {
        criteria: 'Measurement, Consent Mode v2 & CRM Pipeline',
        criterion: 'Measurement, Consent Mode v2 & CRM Pipeline',
        weight: '25%',
        description: 'Compliant Server-Side GTM architecture, Consent Mode v2 parameters, and robust offline CRM closed-loop feedback.'
      },
      {
        criteria: 'Value-Based Bidding & Profit Optimization',
        criterion: 'Value-Based Bidding & Profit Optimization',
        weight: '25%',
        description: 'Advanced Conversion Value Rules, Target ROAS calibration, and blended MER revenue alignment.'
      },
      {
        criteria: 'Automation, Governance & Experimentation',
        criterion: 'Automation, Governance & Experimentation',
        weight: '25%',
        description: 'Automated script deployment, statistical geo-holdout testing methodology, and 90-day scaling roadmap.'
      }
    ],
    submissionChecklist: [
      'Designed multi-campaign blueprint isolating Brand Search, Non-Brand Search, and Performance Max',
      'Configured Google Consent Mode v2 parameters (ad_user_data, ad_personalization)',
      'Mapped CRM Offline Conversion Import schema with GCLID and milestone values',
      'Created custom Conversion Value Rules for high-LTV geographic and audience segments',
      'Drafted complete Google Ads Script for spend anomaly and broken URL monitoring',
      'Formulated 90-day scaling plan with statistical geo-holdout experiment framework'
    ]
  }
};

// Advanced Project 2: Google Ads Audit and Recovery Case Study
const ADVANCED_PROJECT_2 = {
  id: 'gads-adv-p2',
  title: 'Advanced Project 2: Google Ads Audit and Recovery Case Study',
  description: 'Perform a forensic 10-dimension audit and execute a 30/60/90-day turnaround recovery playbook for an enterprise B2B SaaS account.',
  level: 'advanced',
  orderIndex: 16,
  status: 'locked',
  requiresQuiz: false,
  isProject: true,
  type: 'project',
  duration: '300 mins',
  xpReward: 600,
  projectDetails: {
    overview: 'You are retained as an Elite Google Ads Turnaround Consultant by CyberShield Cloud Security, an enterprise B2B SaaS company spending $80,000/month. Over the last 90 days, CPA spiked by 210%, lead quality plummeted (sales team reports 80% spam leads), and the account entered a Smart Bidding death spiral. You must perform an audit across all 10 core dimensions and produce a 30/60/90-day turnaround recovery playbook.',
    scenario: 'You are retained as an Elite Google Ads Turnaround Consultant by CyberShield Cloud Security, an enterprise B2B SaaS company spending $80,000/month. Over the last 90 days, CPA spiked by 210%, lead quality plummeted (sales team reports 80% spam leads), and the account entered a Smart Bidding death spiral. You must perform an audit across all 10 core dimensions and produce a 30/60/90-day turnaround recovery playbook.',
    estimatedHours: '5 hours',
    learningObjectives: [
      'Conduct an exhaustive 10-dimension forensic audit of the failing Google Ads account',
      'Diagnose the exact root causes of CPA inflation, bot lead spam, and Smart Bidding instability',
      'Formulate prioritized immediate triage actions (Days 1–7), stabilization fixes (Days 8–30), and scaling systems (Days 31–90)',
      'Re-engineer conversion tracking, negative keyword lists, ad copy, landing pages, and bid strategies',
      'Model financial recovery assumptions and construct an executive risk register'
    ],
    objectives: [
      'Conduct an exhaustive 10-dimension forensic audit of the failing Google Ads account',
      'Diagnose the exact root causes of CPA inflation, bot lead spam, and Smart Bidding instability',
      'Formulate prioritized immediate triage actions (Days 1–7), stabilization fixes (Days 8–30), and scaling systems (Days 31–90)',
      'Re-engineer conversion tracking, negative keyword lists, ad copy, landing pages, and bid strategies',
      'Model financial recovery assumptions and construct an executive risk register'
    ],
    requirements: [
      'Complete 10-dimension forensic audit scorecard evaluating tracking, structure, and keywords',
      'Identify and remediate conversion tracking double counting and bot spam lead vulnerabilities',
      'Formulate immediate Emergency Triage Plan (Days 1-7) to stop immediate budget bleed',
      'Rebuild keyword and ad group architecture into disciplined Single-Theme Ad Groups',
      'Develop 30/60/90-Day Turnaround Roadmap with Value-Based Bidding and CRM syncing',
      'Construct financial recovery model demonstrating CPA reduction from $280 to $85'
    ],
    deliverables: [
      '1. Executive Summary & Audit Scorecard (Overall account health grade, lost revenue analysis, immediate risk assessment)',
      '2. Conversion Tracking & Tagging Forensic Audit (Double counting identification, primary vs secondary misconfigurations, GTM issues)',
      '3. Account Structure & Cannibalization Analysis (Broad match bleed, brand vs non-brand mixing, PMax query overlap)',
      '4. Search Terms & Wasted Spend Diagnostic (Quantified wasted ad spend on non-commercial, competitor, and student queries)',
      '5. Quality Score & Ad Relevance Forensic Matrix (Breakdown of eCTR, Ad Relevance, and Landing Page Experience across top spenders)',
      '6. Ad Copy & Creative Asset Audit (RSA asset diversity, pinning misuse, missing extensions, low CTR copy angles)',
      '7. Landing Page Conversion Architecture Audit (Speed bottlenecks, mobile form friction, lack of trust signals, spam bot vulnerabilities)',
      '8. Bidding Strategy & Budget Pacing Diagnosis (Smart Bidding learning resets, unrealistic tCPA targets, Lost IS Budget vs Rank)',
      '9. Lead Quality & CRM Feedback Loop Audit (Bot spam causes, lack of reCAPTCHA v3, absence of offline conversion imports)',
      '10. Immediate Emergency Triage Action Plan (Days 1–7 actions to stop bleeding $25,000/mo in wasted spend)',
      '11. 30/60/90-Day Full Account Turnaround Roadmap (Stabilization, structural rebuild, value-based scaling)',
      '12. Financial Recovery Model & Risk Register (Expected CPA reduction from $280 to $85, projected ROI lift, and mitigation strategies)'
    ],
    rubric: [
      {
        criteria: 'Forensic Depth & Root-Cause Diagnosis',
        criterion: 'Forensic Depth & Root-Cause Diagnosis',
        weight: '25%',
        description: 'Exhaustive data analysis identifying exact mechanisms of tracking breakdown, wasted spend, and bidding failure.'
      },
      {
        criteria: 'Technical Remediation & GTM Engineering',
        criterion: 'Technical Remediation & GTM Engineering',
        weight: '25%',
        description: 'Clear, correct technical fixes for conversion tracking, spam prevention (reCAPTCHA/turnstile), and CRM syncing.'
      },
      {
        criteria: 'Actionable Triage & 30/60/90 Roadmap',
        criterion: 'Actionable Triage & 30/60/90 Roadmap',
        weight: '25%',
        description: 'Prioritized, realistic timeline from emergency Day 1 triage to long-term value-based bidding scaling.'
      },
      {
        criteria: 'Financial Modeling & Executive Delivery',
        criterion: 'Financial Modeling & Executive Delivery',
        weight: '25%',
        description: 'Professional executive presentation, mathematical unit economics recovery model, and thorough risk register.'
      }
    ],
    submissionChecklist: [
      'Completed 10-dimension forensic audit scorecard with quantified wasted spend analysis',
      'Identified tracking discrepancies and resolved primary vs secondary conversion errors',
      'Designed bot spam prevention protocol with reCAPTCHA v3 and CRM-qualified lead tracking',
      'Restructured failing ad groups into disciplined Single-Theme Ad Groups (STAGs)',
      'Formulated emergency Day 1–7 triage protocol to halt immediate budget bleed',
      'Delivered 30/60/90-day turnaround roadmap with financial recovery assumptions'
    ]
  }
};

// Advanced Final Assessment Task
const ADVANCED_ASSESSMENT_TASK = {
  id: 'gads-adv-assessment',
  title: 'Level 3: Google Ads Advanced Master Final Assessment',
  description: 'Master certification exam covering enterprise automation, offline conversions, sGTM, Consent Mode v2, incrementality, and recovery audits.',
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
  questions: ADVANCED_ASSESSMENT,
  assessmentDetails: {
    passingScore: 35,
    totalQuestions: 40,
    timeLimitMinutes: 90,
    questions: ADVANCED_ASSESSMENT
  }
};

const ALL_ADVANCED_TASKS = [
  ...advancedModules,
  ADVANCED_PROJECT_1,
  ADVANCED_PROJECT_2,
  ADVANCED_ASSESSMENT_TASK
];

const fileContent = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export const GOOGLE_ADS_ADVANCED_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(ADVANCED_ASSESSMENT, null, 2)};

export const GOOGLE_ADS_ADVANCED_TASKS: Task[] = ${JSON.stringify(ALL_ADVANCED_TASKS, null, 2)};
`;

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log(`Successfully generated ${targetFile} with ${ALL_ADVANCED_TASKS.length} tasks and 40 MCQs.`);
