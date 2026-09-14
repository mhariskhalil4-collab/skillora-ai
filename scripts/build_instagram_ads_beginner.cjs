const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/features/roadmap/data/instagram-ads/instagramAdsBeginner.data.ts');
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 20 High-Quality Beginner MCQs with balanced distribution (5 A, 5 B, 5 C, 5 D)
const BEGINNER_ASSESSMENT = [
  {
    id: 1,
    topic: 'Instagram Advertising Ecosystem',
    question: 'What is the architectural and operational relationship between Instagram Advertising and Meta Ads Manager?',
    options: [
      'Instagram ads are created, targeted, budgeted, and optimized directly within Meta Ads Manager, sharing Meta\'s unified auction engine and Graph API infrastructure.',
      'Instagram ads operate on a completely separate ad platform that does not share conversion data or audience graphs with Facebook.',
      'Instagram ads can only be purchased by directly messaging verified Instagram influencers through Direct Message.',
      'Instagram ads only support organic feed boosting and cannot be managed programmatically.'
    ],
    correctAnswer: 0, // A
    explanation: 'Instagram is a core property within the Meta advertising ecosystem. All auction mechanics, Smart Delivery machine learning models, Conversions API tracking, and audience graphs are managed centrally via Meta Ads Manager.'
  },
  {
    id: 2,
    topic: 'Meta Business Suite & Assets',
    question: 'Why must a business connect its professional Instagram account to a Meta Business Portfolio (formerly Business Manager)?',
    options: [
      'It automatically prevents all users from leaving negative comments on ads.',
      'To enable centralized asset ownership, assign role-based employee permissions, and share Pixel/Dataset tracking without sharing personal login credentials.',
      'To guarantee a minimum 10x Return on Ad Spend on all campaigns.',
      'Because Instagram will delete accounts that do not run at least $500/month in ads.'
    ],
    correctAnswer: 1, // B
    explanation: 'Meta Business Portfolio provides enterprise security, asset management (Pages, Instagram handles, ad accounts, Datasets), and granular team access control without compromising personal account security.'
  },
  {
    id: 3,
    topic: 'Campaign Objectives',
    question: 'If a direct-to-consumer jewelry brand wants to drive high-volume online purchases on their Shopify store, which Meta Campaign Objective should be selected?',
    options: [
      'Brand Awareness with Reach optimization',
      'Engagement with Video Views optimization',
      'Sales (with Purchase optimization for the website Dataset/Pixel)',
      'Traffic (with Link Click optimization)'
    ],
    correctAnswer: 2, // C
    explanation: 'The Sales objective directs Meta\'s conversion algorithm to find users with the highest statistical propensity to complete a checkout transaction on the connected website.'
  },
  {
    id: 4,
    topic: 'Placements & Formats',
    question: 'What is the standard aspect ratio and resolution recommended for Instagram Stories and Reels ad creatives?',
    options: [
      '16:9 Landscape (1920x1080)',
      '1:1 Square (1080x1080)',
      '4:5 Vertical (1080x1350)',
      '9:16 Fullscreen Vertical (1080x1920)'
    ],
    correctAnswer: 3, // D
    explanation: 'Instagram Stories and Reels use a 9:16 vertical full-screen aspect ratio (1080x1920 pixels) to maximize mobile screen real estate and deliver an immersive native user experience.'
  },
  {
    id: 5,
    topic: 'Creative Safe Zones',
    question: 'Why is it critical to respect the top and bottom "Safe Zones" when designing 9:16 Instagram Stories and Reels ads?',
    options: [
      'To ensure essential copy, product shots, and calls to action are not obscured by the Instagram profile header, account handle, audio track title, or CTA button.',
      'Meta will charge a 50% penalty fee if text appears near the edges.',
      'Because the Instagram video player automatically crops videos to square on all smartphones.',
      'To prevent the video from downloading in high definition.'
    ],
    correctAnswer: 0, // A
    explanation: 'Instagram overlays native UI elements (profile icon, handle, caption, sound icon, like/comment buttons) over the top ~14% and bottom ~20% of vertical video. Placing critical copy in the middle 60% safe zone ensures readability.'
  },
  {
    id: 6,
    topic: 'Hook Design & Attention',
    question: 'In mobile-first direct response video advertising on Instagram, what is the primary role of the "Hook" in the first 1-3 seconds?',
    options: [
      'To explain the company\'s full 10-year founding history and mission statement.',
      'To stop the user\'s thumb from scrolling, command immediate attention, and qualify the intended target audience.',
      'To present the full terms and conditions in fine print.',
      'To ask the user to fill out a 10-field survey before watching the video.'
    ],
    correctAnswer: 1, // B
    explanation: 'In fast-paced feeds and Reels, attention is fleeting. The hook uses pattern interrupts, provocative questions, or striking visual demonstrations in the first 1-3 seconds to halt scrolling and engage qualified buyers.'
  },
  {
    id: 7,
    topic: 'Audience Targeting Fundamentals',
    question: 'How do Detailed Targeting (Interests/Demographics) and Broad Targeting differ in modern Instagram advertising?',
    options: [
      'Broad Targeting only shows ads to people over age 65, while Detailed Targeting shows ads to teens.',
      'Broad Targeting disables conversion tracking on the website.',
      'Detailed Targeting restricts ad delivery to users who have explicit affinity tags, whereas Broad Targeting relies on Meta\'s machine learning and creative signals to find buyers across the entire demographic base.',
      'Detailed Targeting is free to use, while Broad Targeting costs double per impression.'
    ],
    correctAnswer: 2, // C
    explanation: 'Broad targeting leverages Meta\'s advanced AI to interpret the creative content and post-click intent signals to optimize delivery dynamically across a wide population, avoiding narrow interest constraints.'
  },
  {
    id: 8,
    topic: 'Custom & Engagement Audiences',
    question: 'Which Custom Audience type allows an advertiser to retarget users who interacted with their Instagram profile, saved a post, or sent a direct message in the last 90 days?',
    options: [
      'Customer List Custom Audience',
      'Offline Event Dataset Audience',
      'Lookalike 10% Audience',
      'Instagram Account Engagement Custom Audience'
    ],
    correctAnswer: 3, // D
    explanation: 'The Instagram Account Engagement Custom Audience aggregates first-party platform interactions (profile visits, post/ad saves, DMs, story replies) within a specified recency window up to 365 days.'
  },
  {
    id: 9,
    topic: 'Lookalike Modeling',
    question: 'What is the recommended size and source quality for generating a high-performing 1% Lookalike Audience on Instagram?',
    options: [
      'A high-intent first-party seed audience of 1,000 to 5,000 top-value purchasers or repeat customers with lifetime value data.',
      'A seed list of 10 people who unsubscribed from your email newsletter.',
      'Any random list of 500,000 scraped email addresses with no purchase history.',
      'A list of competitor Instagram followers exported via unauthorized third-party scrapers.'
    ],
    correctAnswer: 0, // A
    explanation: 'Lookalike algorithms reflect the quality of the seed data. A refined list of 1,000-5,000 high-LTV purchasers provides rich behavioral signals for Meta to locate the top 1% most statistically similar users.'
  },
  {
    id: 10,
    topic: 'Budgeting & Pacing',
    question: 'Under Advantage Campaign Budget (CBO), how does Meta allocate daily ad spend across multiple ad sets?',
    options: [
      'It divides the daily budget equally across all ad sets regardless of performance.',
      'It dynamically distributes the campaign budget to the ad sets and creative opportunities that generate the lowest cost per conversion in real-time auctions.',
      'It spends 100% of the daily budget in the first 10 minutes of every morning.',
      'It requires each ad set to maintain an identical manual bid cap.'
    ],
    correctAnswer: 1, // B
    explanation: 'Advantage Campaign Budget (CBO) pools budget at the campaign level and utilizes machine learning to route capital automatically to the ad sets producing the most cost-efficient conversions.'
  },
  {
    id: 11,
    topic: 'Learning Phase Dynamics',
    question: 'What is the primary operational guideline to help an Instagram ad set exit Meta\'s initial Learning Phase successfully?',
    options: [
      'Change headlines and swap videos every 4 hours.',
      'Decrease the daily budget to $1 per day.',
      'Generate approximately 50 optimization events (such as Purchases or Leads) within a 7-day window without major structural edits.',
      'Delete the ad set and recreate it every 48 hours.'
    ],
    correctAnswer: 2, // C
    explanation: 'Meta\'s delivery algorithm requires approximately 50 conversion events per ad set over a 7-day period to stabilize its predictive machine learning model and exit the Learning Phase.'
  },
  {
    id: 12,
    topic: 'Core Key Metrics',
    question: 'If an Instagram Reels ad generates 100,000 Impressions, 2,500 Link Clicks, spends $1,000, and produces 50 Purchases ($2,500 Revenue), what is the Link CTR, CPA, and ROAS?',
    options: [
      'Link CTR = 0.5%, CPA = $50.00, ROAS = 1.0x',
      'Link CTR = 1.0%, CPA = $40.00, ROAS = 5.0x',
      'Link CTR = 5.0%, CPA = $10.00, ROAS = 0.5x',
      'Link CTR = 2.5%, CPA = $20.00, ROAS = 2.5x'
    ],
    correctAnswer: 3, // D
    explanation: 'Link CTR = (2,500 / 100,000) * 100 = 2.5%. CPA = Spend / Purchases = $1,000 / 50 = $20.00. ROAS = Revenue / Spend = $2,500 / $1,000 = 2.5x.'
  },
  {
    id: 13,
    topic: 'Video Engagement Metrics',
    question: 'In Meta Ads Manager reporting, what does the "ThruPlay" metric measure for video and Reels ads?',
    options: [
      'The number of times a video was played to completion, or for at least 15 seconds if longer than 15 seconds.',
      'The number of people who clicked the mute button on their smartphone.',
      'The total number of comments left on the Instagram post.',
      'The percentage of viewers who bought the product within 1 second.'
    ],
    correctAnswer: 0, // A
    explanation: 'ThruPlay is Meta\'s standard video view metric, counting instances where a user watched either the entire video (if under 15 seconds) or at least 15 continuous seconds of a longer video.'
  },
  {
    id: 14,
    topic: 'Campaign Setup Protocols',
    question: 'Why should advertisers always configure Dynamic URL Parameters (UTM tags) when building Instagram ad creatives?',
    options: [
      'To double the video playback speed on mobile devices.',
      'To accurately attribute traffic, revenue, and user journeys in third-party analytics platforms like Google Analytics 4 (GA4) and Triple Whale.',
      'To prevent Meta from charging credit card processing fees.',
      'To hide the advertiser\'s website URL from search engine crawlers.'
    ],
    correctAnswer: 1, // B
    explanation: 'Dynamic UTM parameters (e.g. `utm_source=instagram&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}`) ensure clean cross-channel attribution in GA4 and BI dashboards.'
  },
  {
    id: 15,
    topic: 'Ad Placements Strategy',
    question: 'When is it advantageous to utilize "Advantage+ Placements" versus selecting Manual Placements exclusively for Instagram Feed?',
    options: [
      'Only when you do not have any ad creative prepared.',
      'Only when advertising restricted pharmaceutical products.',
      'When you want Meta\'s machine learning to find the lowest-cost conversion opportunities across all Instagram surfaces (Feed, Stories, Reels, Explore) and Meta properties.',
      'Only when targeting desktop web browsers.'
    ],
    correctAnswer: 2, // C
    explanation: 'Advantage+ Placements provides the auction system with maximum liquidity, allowing machine learning to serve your ad across Feed, Stories, Reels, and Explore wherever the cost per result is lowest.'
  },
  {
    id: 16,
    topic: 'Creative Fatigue & Scaling',
    question: 'What is the most reliable leading indicator that an Instagram ad creative is experiencing ad fatigue?',
    options: [
      'The account\'s follower count increases rapidly.',
      'The Facebook Page gets verified with a blue checkmark.',
      'The Meta Ads Manager interface turns dark mode.',
      'Frequency rises above 2.5-3.5x while Link CTR drops and Cost Per Acquisition (CPA) steadily climbs over a 7-day period.'
    ],
    correctAnswer: 3, // D
    explanation: 'Creative fatigue occurs when the target audience has seen the same creative repeatedly. Rising frequency paired with deteriorating CTR and escalating CPA signals that new hooks and concepts are urgently needed.'
  },
  {
    id: 17,
    topic: 'Ad Policies & Compliance',
    question: 'Which of the following ad creative practices will trigger automatic rejection under Meta Advertising Standards?',
    options: [
      'Using unrealistic "Before-and-After" weight loss or cosmetic imagery, deceptive countdown timers, or non-functional play button overlays.',
      'Including a clear 9:16 product demonstration with authentic customer reviews.',
      'Adding high-contrast on-screen subtitles for sound-off mobile viewers.',
      'Offering a legitimate 15% discount code on the brand\'s Shopify website.'
    ],
    correctAnswer: 0, // A
    explanation: 'Meta Advertising Standards strictly prohibit sensational before/after imagery, fake UI elements (fake play buttons), and misleading claims to protect consumer trust and platform integrity.'
  },
  {
    id: 18,
    topic: 'Audience Exclusion Hygiene',
    question: 'Why should cold prospecting campaigns on Instagram always exclude existing 30-day purchasers and recent website visitors?',
    options: [
      'To prevent customer support emails.',
      'To prevent wasting prospecting budget on people who have already bought, isolating net-new customer acquisition from retargeting.',
      'Because Meta will disable ad accounts that show ads to past buyers.',
      'To force past buyers to pay full price without discount codes.'
    ],
    correctAnswer: 1, // B
    explanation: 'Excluding recent buyers and warm engagers prevents auction overlap and ensures that cold acquisition budgets are strictly deployed toward discovering net-new prospective customers.'
  },
  {
    id: 19,
    topic: 'Direct Response Copywriting',
    question: 'On mobile Instagram feeds where primary text is truncated after approximately 125 characters, how should copy be structured?',
    options: [
      'Place 10 paragraphs of background story before mentioning the offer.',
      'Leave the primary text blank and only use emojis.',
      'Put the primary hook, core benefit, and value proposition in the first 1-2 lines before the "...See more" fold.',
      'Write all copy in reverse chronological order.'
    ],
    correctAnswer: 2, // C
    explanation: 'Mobile feed truncation requires front-loading the most critical hook, offer, or problem statement within the first 125 characters so users grasp the core proposition before scrolling.'
  },
  {
    id: 20,
    topic: 'Budget Scaling Protocols',
    question: 'What is the industry-standard "20% Rule" for scaling active, profitable ad sets without resetting the delivery Learning Phase?',
    options: [
      'Increasing or decreasing daily budget by no more than 15-20% every 48-72 hours to prevent triggering significant algorithmic recalibration.',
      'Increasing the budget by 200% every hour on Friday evenings.',
      'Spending exactly 20% of annual company revenue on ads every single day.',
      'Pausing 20% of all ads at midnight every day.'
    ],
    correctAnswer: 0, // A
    explanation: 'Budget modifications greater than 20% can destabilize Meta\'s Smart Bidding auction pacing and re-enter the Learning Phase. Incremental scaling of 15-20% preserves auction calibration.'
  }
];

// Helper to generate 12 rich theory modules
function generateBeginnerModules() {
  const moduleTitles = [
    { title: 'Introduction to Instagram Advertising', id: 'ig-beg-01' },
    { title: 'Meta Business Suite and Ads Manager Basics', id: 'ig-beg-02' },
    { title: 'Instagram Campaign Objectives', id: 'ig-beg-03' },
    { title: 'Instagram Ad Placements and Formats', id: 'ig-beg-04' },
    { title: 'Instagram Creative Fundamentals', id: 'ig-beg-05' },
    { title: 'Instagram Audience Targeting Basics', id: 'ig-beg-06' },
    { title: 'Custom Audiences and Lookalike Audiences', id: 'ig-beg-07' },
    { title: 'Instagram Budgeting and Bidding Basics', id: 'ig-beg-08' },
    { title: 'Instagram Ads Metrics and Reporting', id: 'ig-beg-09' },
    { title: 'Launching a First Instagram Ads Campaign', id: 'ig-beg-10' },
    { title: 'Basic Optimization and Troubleshooting', id: 'ig-beg-11' },
    { title: 'Instagram Creative Safe Zones & Aspect Ratio Architecture', id: 'ig-beg-12' }
  ];

  const modules = [];

  for (let i = 0; i < moduleTitles.length; i++) {
    const { title, id } = moduleTitles[i];
    const modNum = i + 1;

    modules.push({
      id: id,
      title: `${modNum}. ${title}`,
      description: `Master ${title.toLowerCase()} with actionable Instagram and Meta advertising frameworks, live campaign configurations, and practical optimization workflows.`,
      level: 'beginner',
      orderIndex: modNum,
      status: i === 0 ? 'in_progress' : 'locked',
      requiresQuiz: false,
      type: 'theory',
      duration: '45 mins',
      xpReward: 120,
      lessonContent: {
        overview: `Comprehensive masterclass module covering ${title.toLowerCase()} inside Meta Ads Manager. Learn production-grade advertising architectures, algorithmic auction behaviors, strategic budgeting, audience targeting rules, and step-by-step optimization procedures.`,
        analogyHero: `Think of ${title.toLowerCase()} in Instagram advertising like an intelligent visual precision engine: when calibrated with accurate audience signals, high-retention 9:16 creative hooks, and clear commercial offers, your campaigns acquire qualified customers at predictable unit economics.`,
        objectives: [
          `Understand the strategic principles, algorithmic rules, and platform mechanics of ${title.toLowerCase()}`,
          `Implement production configurations inside Meta Ads Manager while avoiding common high-cost budget traps`,
          `Analyze real-world campaign data, delivery diagnostics, and key performance indicators (CPM, CTR, CPC, CPA, ROAS)`,
          `Execute step-by-step troubleshooting and iterative scaling protocols for sustained performance`
        ],
        estimatedTime: '45 mins',
        keyTakeaways: [
          'Always align your campaign configuration with high-converting customer intent and mathematical unit economics.',
          'Maintain strict data governance, clean naming conventions, and pixel/CAPI event telemetry.',
          'Prioritize thumb-stopping creative hooks, safe zone compliance, and policy-compliant copywriting.'
        ],
        summary: `Mastering ${title.toLowerCase()} gives you the structural foundation and tactical expertise required to deploy, manage, and scale profitable Instagram advertising campaigns.`,
        syntaxGuide: '// Instagram Performance Formulas:\nCPM = (Spend / Impressions) * 1000\nLink_CTR = (LinkClicks / Impressions) * 100\nCPC = Spend / LinkClicks\nCPA = Spend / Conversions\nROAS = Revenue / Spend\nHook_Rate = (3s_Video_Views / Impressions) * 100\nHold_Rate = (ThruPlays / 3s_Video_Views) * 100',
        practiceExercises: [
          {
            title: `${title} Implementation Challenge`,
            instructions: `Review a live campaign scenario addressing ${title.toLowerCase()}. Calculate unit economics, identify performance bottlenecks, and formulate an immediate 3-step optimization action plan.`,
            starterCode: `// Configure diagnostic evaluation for ${title}\ninterface AuditInput {\n  spend: number;\n  impressions: number;\n  clicks: number;\n  conversions: number;\n  targetCpa: number;\n}\n\nfunction auditScenario(input: AuditInput) {\n  return {\n    cpa: 0,\n    variance: 0,\n    actionPlan: [] as string[]\n  };\n}`,
            solutionCode: `function auditScenario(input: AuditInput) {\n  const cpa = input.spend / (input.conversions || 1);\n  const variance = ((cpa - input.targetCpa) / input.targetCpa) * 100;\n  const actionPlan = [\n    'Verify pixel event firing and CAPI deduplication in Events Manager',\n    'Deploy 3 new 9:16 Reels hook variations to lower Cost Per Click',\n    'Apply audience exclusions for past 30-day purchasers to eliminate waste'\n  ];\n  return {\n    cpa: Number(cpa.toFixed(2)),\n    variance: Number(variance.toFixed(1)),\n    actionPlan\n  };\n}`
          }
        ],
        sections: [
          {
            id: `sec-${id}-1`,
            title: `1. Core Architectural Principles of ${title}`,
            difficulty: 'Beginner',
            content: `In modern Instagram advertising, mastering ${title.toLowerCase()} is essential for building scalable paid social funnels. Meta machine learning algorithms evaluate thousands of auction signals per second — including estimated action rates, user value, and ad quality.\n\n### Strategic Pillars\n- **Algorithmic Alignment**: Working with Meta machine learning rather than trying to outsmart automated delivery.\n- **Signal Purity**: Ensuring high-fidelity event tracking, clean audience definitions, and zero overlap.\n- **Creative Leverage**: Understanding that creative is the ultimate targeting lever on visual surfaces like Reels and Stories.`,
            explanation: `Mastering these architectural concepts prevents budget waste and allows Meta auction engine to deliver your ads to high-propensity buyers at the lowest possible cost.`,
            codeSnippets: [
              {
                filename: `module_${modNum}_config.json`,
                language: 'json',
                title: `${title} — Production Configuration Blueprint`,
                code: `{\n  "module": "${title}",\n  "level": "Beginner",\n  "strategicSettings": {\n    "campaignObjective": "OUTCOME_SALES",\n    "budgetStrategy": "Advantage Campaign Budget (CBO)",\n    "dailyBudgetUSD": 150,\n    "placementStrategy": "Advantage+ Placements",\n    "attributionSetting": "7-day click or 1-day view"\n  },\n  "guardrails": {\n    "minCreativeVariations": 3,\n    "pastConverterExclusions": true,\n    "twoFactorAuthRequired": true\n  }\n}`,
                lineByLine: [
                  { line: '"budgetStrategy": "Advantage Campaign Budget (CBO)"', explanation: 'Allows Meta AI to dynamically route spend to the highest performing ad sets.' },
                  { line: '"pastConverterExclusions": true', explanation: 'Prevents wasted ad spend on existing leads or recent buyers.' }
                ]
              }
            ],
            miniPractice: {
              question: `Why is algorithmic alignment crucial when configuring ${title.toLowerCase()}?`,
              options: [
                'It allows Meta machine learning models to optimize bidding and delivery based on millions of real-time behavioral signals',
                'It forces Instagram to display ads for free',
                'It guarantees an immediate 100% conversion rate on any landing page',
                'It prevents users from taking screenshots of your ads'
              ],
              correctAnswer: 0,
              explanation: 'Aligning with Meta machine learning ensures that ad delivery is dynamically guided by real-time conversion probability signals.'
            },
            proTip: `Always configure campaigns with at least 3 distinct creative concepts to give the auction algorithm sufficient diversity to match different user tastes.`,
            commonMistakes: [
              'Micro-managing bids and resetting campaign settings multiple times per day.',
              'Failing to set up custom audience exclusions for recent purchasers or converted leads.'
            ]
          },
          {
            id: `sec-${id}-2`,
            title: `2. Tactical Execution & Step-by-Step Implementation`,
            difficulty: 'Beginner',
            content: `Executing ${title.toLowerCase()} requires a systematic 4-phase methodology:\n\n1. **Planning & Audience Research**: Define customer avatars, pain points, core offers, and key performance targets.\n2. **Setup & Configuration**: Build campaign structures in Ads Manager, set budgets, configure conversion locations, and assign pixel datasets.\n3. **Creative & Copy Assembly**: Write high-converting hooks, compelling body copy, clear CTAs, and format assets for 1:1, 4:5, and 9:16 aspect ratios.\n4. **Launch & Verification**: Review all tracking parameters (UTMs), inspect live landing pages on mobile, and verify in Events Manager Test Events.`,
            explanation: `Following a structured implementation framework eliminates configuration errors, protects ad budgets, and establishes baseline performance metrics.`,
            codeSnippets: [
              {
                filename: `module_${modNum}_workflow.ts`,
                language: 'typescript',
                title: `${title} — Real-Time Unit Economics & Threshold Validator`,
                code: `export interface CampaignAudit {\n  cpm: number;\n  ctr: number;\n  cpc: number;\n  cpa: number;\n  roas: number;\n}\n\nexport function validateHealth(audit: CampaignAudit) {\n  const isHealthyCtr = audit.ctr >= 1.5;\n  const isHealthyCpa = audit.cpa <= 35.0;\n  const isHealthyRoas = audit.roas >= 2.5;\n\n  return {\n    status: isHealthyCtr && isHealthyCpa ? 'HEALTHY_SCALE' : 'REQUIRES_OPTIMIZATION',\n    recommendations: [\n      !isHealthyCtr ? 'Refresh visual hooks and headline copy to lift CTR above 1.5%' : 'CTR is strong',\n      !isHealthyCpa ? 'Audit landing page conversion friction or test higher-intent instant form' : 'CPA is within target'\n    ]\n  };\n}`,
                lineByLine: [
                  { line: 'const isHealthyCtr = audit.ctr >= 1.5;', explanation: 'Standard benchmark for healthy feed engagement on Instagram.' },
                  { line: 'const isHealthyRoas = audit.roas >= 2.5;', explanation: 'Baseline target for profitable direct-to-consumer scaling.' }
                ]
              }
            ],
            miniPractice: {
              question: `What should an advertiser do if an ad achieves a high 3.0% CTR but zero conversions on the website?`,
              options: [
                'Immediately increase the daily budget by 500%',
                'Inspect landing page load speed, mobile layout responsiveness, offer pricing clarity, and tracking pixel functionality',
                'Delete the ad account and create a new personal Instagram handle',
                'Disable all comments on the Instagram profile'
              ],
              correctAnswer: 1,
              explanation: 'A strong CTR proves the creative is attracting interest, meaning the failure to convert stems from website friction, slow load times, poor offer match, or broken tracking.'
            },
            proTip: `Test mobile landing page load speeds using Google PageSpeed Insights; ensure First Contentful Paint (FCP) is under 1.5 seconds for paid social traffic.`,
            commonMistakes: [
              'Launching ads with broken destination URLs or missing UTM parameters.',
              'Making major budget changes during the first 24 hours of campaign launch.'
            ]
          },
          {
            id: `sec-${id}-3`,
            title: `3. Troubleshooting, Optimization & Live Campaign Scenarios`,
            difficulty: 'Beginner',
            content: `In live account environments, ad performance fluctuates due to auction dynamics, competitor bidding, seasonality, and creative wear-out. Recognizing warning signs early enables rapid remediation.\n\n### Common Operational Scenarios\n- **Scenario A: High CPM ($40+)**: Indicates severe audience saturation, narrow targeting constraints, or negative user feedback score on the ad.\n- **Scenario B: Low CTR (<0.8%)**: Signifies weak opening hooks, boring static visuals, or generic uninspired headlines.\n- **Scenario C: High CPA with Good Traffic**: Points to checkout friction, unexpected shipping fees, or lack of trust badges on the mobile landing page.`,
            explanation: `Diagnosing campaign telemetry systematically ensures that optimization actions address the exact bottleneck rather than guessing blindly.`,
            codeSnippets: [
              {
                filename: `module_${modNum}_triage.json`,
                language: 'json',
                title: `${title} — Rapid Troubleshooting Decision Matrix`,
                code: `{\n  "triageMatrix": {\n    "highCPM": {\n      "symptom": "CPM exceeds $35 on broad prospecting",\n      "remedy": "Expand audience broad constraints, check Page feedback score, refresh ad creative concept"\n    },\n    "lowCTR": {\n      "symptom": "Link CTR below 1.0%",\n      "remedy": "Test 3 new opening 3-second video hooks, bold contrast typography, and clear offer overlay"\n    },\n    "highCPA": {\n      "symptom": "Cost per acquisition 40% above target",\n      "remedy": "Add customer testimonials above fold on LP, test Instant Form for faster mobile capture"\n    }\n  }\n}`,
                lineByLine: [
                  { line: '"highCPM": { "symptom": ... }', explanation: 'Direct diagnostic remedy for elevated CPM costs.' },
                  { line: '"lowCTR": { "symptom": ... }', explanation: 'Actionable creative fix for sub-par engagement rates.' }
                ]
              }
            ],
            miniPractice: {
              question: `Which diagnostic action is most effective when combating creative fatigue and declining CTR?`,
              options: [
                'Produce and test new opening hooks, user-generated content (UGC) angles, and fresh visual formats',
                'Change the color of your Instagram profile picture',
                'Contact your bank to request a new corporate credit card',
                'Decrease ad delivery by 95% permanently'
              ],
              correctAnswer: 0,
              explanation: 'Creative fatigue occurs when audiences have seen the same visual repeatedly; refreshing hooks, formats, and angles re-engages the auction.'
            },
            proTip: `Maintain a "Creative Testing Sandbox" campaign with 15-20% of your total budget dedicated solely to validating new angles before scaling winners.`,
            commonMistakes: [
              'Assuming an ad that worked 6 months ago will run forever without creative refresh.',
              'Blaming the Meta algorithm for poor performance when the actual issue is an uncompetitive offer.'
            ]
          }
        ]
      }
    });
  }

  return modules;
}

// Beginner Practical Project
const BEGINNER_PROJECT = {
  id: 'ig-beg-proj',
  title: '13. Beginner Capstone Project: Instagram Ads Campaign Launch Plan',
  description: 'Architect, configure, and optimize an end-to-end direct-response Instagram Ads campaign launch plan for an e-commerce brand.',
  level: 'beginner',
  orderIndex: 13,
  status: 'locked',
  requiresQuiz: false,
  isProject: true,
  type: 'project',
  duration: '180 mins',
  xpReward: 350,
  projectDetails: {
    brief: 'You are the Lead Visual Performance Media Buyer hired by Solara Botanicals, a direct-to-consumer organic skincare brand launching a hero hydrating serum. The brand has an initial monthly ad budget of $4,500 ($150/day) and requires a high-converting Instagram advertising acquisition system to drive profitable first-time orders.',
    overview: 'You are the Lead Visual Performance Media Buyer hired by Solara Botanicals, a direct-to-consumer organic skincare brand launching a hero hydrating serum. The brand has an initial monthly ad budget of $4,500 ($150/day) and requires a high-converting Instagram advertising acquisition system to drive profitable first-time orders.',
    scenario: 'Solara Botanicals is transitioning from organic social posting to paid performance marketing. You must build an end-to-end Instagram campaign launch architecture utilizing Meta Ads Manager, CBO budgeting, broad & interest segmentation, 9:16 Reels direct-response video scripts, and robust conversion tracking.',
    estimatedHours: '3 hours',
    learningObjectives: [
      'Architect a comprehensive, high-converting Instagram Sales campaign structure from scratch',
      'Conduct visual audience research and build core audience targeting with strict 30-day purchaser exclusions',
      'Script and storyboard 9:16 vertical UGC Reels ads and 4:5 Feed carousels with hook rate optimization',
      'Configure Meta Pixel / Dataset standard events and dynamic UTM tracking parameters',
      'Establish KPI benchmarks (CPM, CTR, CPA, ROAS) and a 14-day post-launch optimization protocol'
    ],
    requirements: [
      'Use the Sales campaign objective with Website Purchase conversion location',
      'Deploy an Advantage Campaign Budget (CBO) structure with $150/day initial pacing',
      'Build 2 distinct prospecting ad sets (1 Broad Open, 1 Stacked Interest) with 30-day purchaser exclusions',
      'Design at least 3 distinct creative assets (9:16 UGC video, 4:5 product carousel, 1:1 social proof static)',
      'Include comprehensive 9:16 safe zone compliance checks and subtitle overlays',
      'Construct a 14-day post-launch optimization decision tree and QA checklist'
    ],
    deliverables: [
      {
        id: 'del-01',
        title: '1. Business Case & Executive Campaign Brief',
        description: 'Define the brand positioning, unique value proposition, target gross margin, average order value ($65), and target break-even CPA ($22).',
        expectedOutput: 'Document detailing target customer avatars, price elasticity, unit economics, and campaign success metrics.'
      },
      {
        id: 'del-02',
        title: '2. Campaign Objective & ODAX Alignment Specification',
        description: 'Specify the campaign objective (OUTCOME_SALES), conversion location (Website), and performance goal (Maximize number of conversions).',
        expectedOutput: 'Completed campaign-level setup sheet specifying conversion dataset ID and 7-day click / 1-day view attribution.'
      },
      {
        id: 'del-03',
        title: '3. Audience Architecture & Broad Targeting Definition',
        description: 'Build an open demographic Broad ad set (US, Women 22-54) leveraging Meta machine learning and creative targeting.',
        expectedOutput: 'Ad set specification with zero interest restrictions, Advantage+ Placements, and automated language settings.'
      },
      {
        id: 'del-04',
        title: '4. Interest-Stacked Ad Set Definition & Sizing',
        description: 'Construct a tightly clustered interest ad set combining Clean Beauty, Cruelty-Free Cosmetics, and Skincare enthusiasts.',
        expectedOutput: 'Audience definition showing estimated audience size (8M - 15M) and detailed targeting expansion settings.'
      },
      {
        id: 'del-05',
        title: '5. Negative Audience Exclusion Matrix',
        description: 'Define custom audience exclusions for 30-day website purchasers and 180-day customer list uploads.',
        expectedOutput: 'Audience exclusion blueprint preventing ad spend cannibalization on existing customers.'
      },
      {
        id: 'del-06',
        title: '6. 9:16 UGC Direct-Response Video Script (Reels/Stories)',
        description: 'Write a complete 30-second vertical video script featuring a 3-second visual hook, problem agitation, product texture demo, and directive CTA.',
        expectedOutput: 'Two-column audio/visual script formatted for mobile 9:16 with safe zone markings and on-screen caption copy.'
      },
      {
        id: 'del-07',
        title: '7. 4:5 Feed Static & Carousel Creative Concepts',
        description: 'Develop a 4-card carousel concept demonstrating ingredients, clinical trial results, customer reviews, and bundle offer.',
        expectedOutput: 'Storyboard detailing visual layout, headline text (<40 chars), primary copy, and card destination URLs.'
      },
      {
        id: 'del-08',
        title: '8. Campaign Naming Taxonomy & Ad Group Structure',
        description: 'Establish an enterprise naming taxonomy: `[PROSP]_[CBO]_[SKINCARE_HERO]_[CONV_PURCHASE]_[US_ENG]`',
        expectedOutput: 'Standardized naming convention matrix across campaign, ad set, and creative asset levels.'
      },
      {
        id: 'del-09',
        title: '9. Budgeting, Bidding & Pacing Model',
        description: 'Model the $150/day CBO budget across 7 days to calculate expected weekly conversions (47 purchases) and statistical learning exit.',
        expectedOutput: 'Spreadsheet projection showing daily spend, estimated CPM ($22), CTR (1.8%), CPC ($1.22), and ROAS (2.95x).'
      },
      {
        id: 'del-10',
        title: '10. Dynamic UTM Tracking & GA4 Parameter Blueprint',
        description: 'Build a standard dynamic URL parameter string using Meta URL macro parameters for Google Analytics 4 integration.',
        expectedOutput: '`utm_source=instagram&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{placement}}`'
      },
      {
        id: 'del-11',
        title: '11. Pre-Launch Quality Assurance (QA) Checklist',
        description: 'Complete the 8-point pre-launch verification checklist verifying pixel firing, safe zones, and presence targeting.',
        expectedOutput: 'Signed-off QA audit confirming active Purchase event tag, 9:16 safe zone compliance, and live payment methods.'
      },
      {
        id: 'del-12',
        title: '12. Post-Launch 14-Day Diagnostic & Optimization Decision Tree',
        description: 'Construct a decision tree outlining specific optimization triggers for Hook Rate, Link CTR, and CPA scaling.',
        expectedOutput: 'Flowchart detailing actions if Hook Rate < 25%, Link CTR < 1.0%, or CPA exceeds $25 threshold.'
      }
    ],
    rubric: [
      {
        criteria: 'Strategic Rigor & Objective Alignment',
        points: 25,
        description: 'Properly aligns business goals with OUTCOME_SALES, Purchase optimization, and proper location presence filters.'
      },
      {
        criteria: 'Audience Architecture & Segmentation',
        points: 25,
        description: 'Isolates Broad targeting from Interest stacks with robust 30-day purchaser exclusions.'
      },
      {
        criteria: 'Creative Scripting & Safe Zone Compliance',
        points: 25,
        description: 'Delivers a high-converting 30s 9:16 script with clear safe zones, 3s hook rate design, and directive CTAs.'
      },
      {
        criteria: 'Technical Architecture & QA Protocol',
        points: 25,
        description: 'Includes dynamic UTMs, statistical daily budget sizing ($150/day), and 14-day optimization decision trees.'
      }
    ],
    tips: [
      'Keep all primary copy within the 125-character fold so mobile users read the offer immediately.',
      'Never scale daily budgets by more than 20% every 48 hours to preserve Smart Bidding calibration.',
      'Ensure the video script uses genuine UGC lighting and pacing to feel native to Instagram Reels.'
    ]
  }
};

// Final Certification Exam Task
const BEGINNER_EXAM = {
  id: 'ig-beg-exam',
  title: '14. Official Beginner Certification Assessment',
  description: 'Demonstrate mastery of Instagram Ads ecosystem fundamentals, account setup, campaign objectives, ad formats, creative hooks, audience targeting, budgeting, and analytics.',
  level: 'beginner',
  orderIndex: 14,
  status: 'locked',
  duration: '30 min',
  requiresQuiz: true,
  xpReward: 300,
  isProject: false,
  isFinalAssessment: true,
  passingScore: 15,
  totalQuestions: 20,
  questions: BEGINNER_ASSESSMENT,
  tags: ['Certification', 'Exam', 'Beginner Assessment', 'MCQ']
};

const allTasks = [...generateBeginnerModules(), BEGINNER_PROJECT, BEGINNER_EXAM];

const fileContent = `import { Task, QuizQuestion } from '../../types/roadmap.types';\n\nexport const INSTAGRAM_ADS_BEGINNER_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(BEGINNER_ASSESSMENT, null, 2)};\n\nexport const INSTAGRAM_ADS_BEGINNER_TASKS: Task[] = ${JSON.stringify(allTasks, null, 2)};\n`;

fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log('✅ Generated instagramAdsBeginner.data.ts with 12 theory modules, 1 project (12 deliverables), and 20 MCQs.');
