const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/features/roadmap/data/facebook-ads/facebookAdsBeginner.data.ts');
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 20 High-Quality Beginner MCQs with balanced distribution (5 A, 5 B, 5 C, 5 D)
const BEGINNER_ASSESSMENT = [
  {
    id: 1,
    topic: 'Meta Advertising Ecosystem',
    question: 'What is the primary fundamental difference between Meta (Facebook/Instagram) advertising and Google Search advertising?',
    options: [
      'Meta advertising is demand-generation based, serving visual ads to users based on demographics, behaviors, and interests while they browse, whereas Google Search captures existing active intent when users search for specific queries.',
      'Meta advertising only charges advertisers when a purchase is completed, while Google Search charges per impression.',
      'Meta advertising cannot show video ads, while Google Search only supports video formats.',
      'Meta ads can only be shown on desktop computers, while Google Search only works on mobile devices.'
    ],
    correctAnswer: 0, // A
    explanation: 'Meta advertising operates on a demand-generation/discovery model, using rich demographic, interest, and behavioral signals to display ads to prospective buyers who are not actively searching for the product at that exact moment. Google Search is primarily intent-capture.'
  },
  {
    id: 2,
    topic: 'Meta Business Portfolio & Assets',
    question: 'What is the central management tool recommended by Meta for businesses to securely manage ad accounts, Pages, Instagram accounts, datasets, and employee permissions in one place?',
    options: [
      'A personal Facebook Profile',
      'Meta Business Portfolio (formerly Business Manager)',
      'Meta Messenger for Desktop',
      'WhatsApp Business App'
    ],
    correctAnswer: 1, // B
    explanation: 'Meta Business Portfolio (formerly Business Manager) provides centralized security, role-based asset permissions (admin, employee, partner), dataset ownership, domain verification, and billing management without sharing personal login credentials.'
  },
  {
    id: 3,
    topic: 'Campaign Hierarchy Structure',
    question: 'In the standard Meta Ads Manager hierarchy, at which level are the Target Audience, Placements, Budget (under ABO), and Schedule configured?',
    options: [
      'The Creative Level',
      'The Account Overview Level',
      'The Ad Set Level',
      'The Facebook Page Settings'
    ],
    correctAnswer: 2, // C
    explanation: 'In Meta Ads, the Campaign level sets the primary Objective, the Ad Set level defines the Audience, Placements, Optimization for Ad Delivery, Budget (in ABO), and Schedule, while the Ad level configures the creative assets, copy, headlines, and destination URL.'
  },
  {
    id: 4,
    topic: 'Campaign Objectives',
    question: 'If an advertiser wants to capture qualified contact information directly inside Facebook without forcing mobile users to visit an external website, which Campaign Objective should be selected?',
    options: [
      'Awareness',
      'Traffic',
      'App Promotion',
      'Leads (with Instant Forms)'
    ],
    correctAnswer: 3, // D
    explanation: 'The Leads objective paired with Instant Forms (formerly Lead Ads) allows users to submit their name, email, phone number, and custom questions directly within the Meta app without page load delays.'
  },
  {
    id: 5,
    topic: 'Audience Personas & Research',
    question: 'When building an Ideal Customer Profile (ICP) for Meta advertising, what does psychographic research primarily analyze?',
    options: [
      'The customer pain points, core buying motivations, lifestyle values, and perceived risks',
      'The customer IP address and internet service provider',
      'The exact hardware model of their home router',
      'The alphabetical order of their email address'
    ],
    correctAnswer: 0, // A
    explanation: 'Psychographic segmentation explores underlying human drivers: emotional triggers, daily frustrations, aspirational identities, and objections, enabling copywriters to craft resonant hooks that stop the social media feed scroll.'
  },
  {
    id: 6,
    topic: 'Core vs Custom Audiences',
    question: 'Which type of Meta audience is created by matching your existing customer database (CSV list of hashed emails and phone numbers) against Meta active user accounts?',
    options: [
      'Core Detailed Targeting Audience',
      'Customer List Custom Audience',
      'Broad Open Audience',
      'Audience Network Expansion'
    ],
    correctAnswer: 1, // B
    explanation: 'A Customer List Custom Audience allows businesses to securely upload hashed first-party customer records (emails, phone numbers) to retarget past buyers or create high-value Lookalike Audiences.'
  },
  {
    id: 7,
    topic: 'Lookalike Audiences',
    question: 'What does a 1% Lookalike Audience in Meta Ads represent when created in the United States?',
    options: [
      'Only 1% of the people who visited your website last week',
      'An audience with a 1% conversion rate guarantee',
      'The 1% of Meta users in the US whose digital behaviors and characteristics most closely match your seed source audience',
      'A random sample of 100 people across the nation'
    ],
    correctAnswer: 2, // C
    explanation: 'A 1% Lookalike Audience represents the top 1% of the population in the selected country who share the highest statistical and behavioral similarity to your seed audience (such as past purchasers or high-LTV customers).'
  },
  {
    id: 8,
    topic: 'Placements & Aspect Ratios',
    question: 'What is the recommended vertical aspect ratio for ad creatives designed specifically for Instagram Stories and Facebook Reels?',
    options: [
      '16:9 Landscape (Horizontal)',
      '1:1 Square',
      '4:3 Standard Television',
      '9:16 Fullscreen Vertical'
    ],
    correctAnswer: 3, // D
    explanation: 'Instagram Stories and Facebook/Instagram Reels utilize a 9:16 full-screen vertical aspect ratio (1080x1920 pixels) to maximize mobile screen real estate and deliver an immersive native user experience.'
  },
  {
    id: 9,
    topic: 'Ad Creative Components',
    question: 'What is the primary role of the "Hook" (the first 1-3 seconds of a video ad or the opening headline line of an image ad)?',
    options: [
      'To stop the user from scrolling, interrupt their feed consumption, and command immediate curiosity or emotional resonance',
      'To explain the company full 10-year corporate history and legal registration',
      'To list all 40 terms of service conditions in tiny text',
      'To ask the user for their credit card security code'
    ],
    correctAnswer: 0, // A
    explanation: 'In fast-scrolling social feeds, the hook is responsible for stopping thumbs. If the first 1-3 seconds fail to grab attention, the rest of the message, offer, and call to action are never seen.'
  },
  {
    id: 10,
    topic: 'Direct-Response Copywriting',
    question: 'According to direct-response advertising principles, what should immediately follow the identification of the prospective customer problem in high-converting ad copy?',
    options: [
      'A list of competitor website links',
      'A credible promise and solution backed by proof or social validation',
      'An apology for advertising on social media',
      'A request to follow the personal profile of the CEO'
    ],
    correctAnswer: 1, // B
    explanation: 'The classic formula (Hook -> Problem -> Promise -> Proof -> Offer -> CTA) dictates that once the prospect pain point is agitated, the copy must present a credible promise and solution validated by proof (testimonials, data, demonstrations) before presenting the offer.'
  },
  {
    id: 11,
    topic: 'Budgeting Mechanics',
    question: 'What is the main difference between Advantage Campaign Budget (CBO) and Ad Set Budget (ABO)?',
    options: [
      'ABO only spends money on weekends, while CBO runs every day',
      'CBO requires a minimum daily budget of $10,000, while ABO is free',
      'Under CBO, Meta dynamically distributes one campaign budget across all ad sets based on real-time performance, whereas under ABO, you set a fixed budget individually on each ad set',
      'CBO only works for video ads, while ABO only works for single image ads'
    ],
    correctAnswer: 2, // C
    explanation: 'Advantage Campaign Budget (CBO) pools the budget at the campaign level and uses machine learning to allocate funds dynamically to the best-performing ad sets in real time. Ad Set Budget (ABO) gives the media buyer granular manual control over spend per ad set.'
  },
  {
    id: 12,
    topic: 'Learning Phase Mechanics',
    question: 'How many optimization events (e.g., Leads or Purchases) does an ad set typically require within a 7-day window to exit Meta initial Learning Phase and stabilize delivery?',
    options: [
      '5 events',
      '15 events',
      '1,000 events',
      'Approximately 50 optimization events'
    ],
    correctAnswer: 3, // D
    explanation: 'Meta delivery system generally requires around 50 optimization events per ad set within a 7-day rolling window to calibrate its bidding models. Failing to achieve this triggers the "Learning Limited" status.'
  },
  {
    id: 13,
    topic: 'Meta Dataset & Pixel',
    question: 'Which standard Meta event should fire when a customer successfully finishes the checkout process and reaches the order confirmation page of an e-commerce website?',
    options: [
      'Purchase',
      'ViewContent',
      'AddToCart',
      'Search'
    ],
    correctAnswer: 0, // A
    explanation: 'The standard `Purchase` event (with parameters such as `value` and `currency`) must fire on the final receipt/thank-you page to confirm completed transactions and enable revenue-based attribution and optimization.'
  },
  {
    id: 14,
    topic: 'Standard vs Custom Events',
    question: 'Why is it critical to pass the `currency` and `value` parameters alongside the standard `Purchase` event in Meta Pixel / Dataset tracking?',
    options: [
      'Because Meta servers will reject all ads if numbers are not formatted in French',
      'To enable Return on Ad Spend (ROAS) calculation, value-based optimization, and accurate revenue reporting in Ads Manager',
      'To automatically deduct shipping costs from the customer bank account',
      'To prevent the user browser from refreshing'
    ],
    correctAnswer: 1, // B
    explanation: 'Passing dynamic `value` and `currency` allows Meta to compute exact Return on Ad Spend (ROAS), average order value (AOV), and train algorithms on Value-Based Optimization (VBO) to find higher-spending customers.'
  },
  {
    id: 15,
    topic: 'Audience Exclusions',
    question: 'Why should an e-commerce advertiser running top-of-funnel prospecting ads exclude people who purchased in the last 30 days?',
    options: [
      'Because Meta charges triple price for showing ads to existing customers',
      'Because past purchasers will automatically report the ad as spam',
      'To prevent wasting prospecting budget on people who recently bought, while maintaining clean separation for dedicated post-purchase retention or cross-sell campaigns',
      'Because Facebook automatically bans accounts that retarget buyers'
    ],
    correctAnswer: 2, // C
    explanation: 'Excluding recent 30-day purchasers from prospecting ad sets ensures that acquisition budget is strictly spent reaching fresh prospective customers, eliminating redundant ad spend and distorted customer acquisition costs (CAC).'
  },
  {
    id: 16,
    topic: 'Core Key Metrics',
    question: 'If a campaign generates 50,000 Impressions, 1,000 Link Clicks, spends $500, and records 25 Conversions, what is the Click-Through Rate (CTR) and Cost Per Acquisition (CPA)?',
    options: [
      'CTR = 10.0%, CPA = $5.00',
      'CTR = 0.5%, CPA = $50.00',
      'CTR = 5.0%, CPA = $10.00',
      'CTR = 2.0% (1,000 / 50,000 * 100), CPA = $20.00 ($500 / 25)'
    ],
    correctAnswer: 3, // D
    explanation: 'CTR = (Link Clicks / Impressions) * 100 = (1,000 / 50,000) * 100 = 2.0%. CPA = Total Spend / Conversions = $500 / 25 = $20.00.'
  },
  {
    id: 17,
    topic: 'Ad Policies & Compliance',
    question: 'Which of the following headlines is MOST likely to be rejected by Meta for violating the Personal Attributes policy?',
    options: [
      '"Are you suffering from severe credit card debt? Get our debt relief program now!"',
      '"Discover 5 Proven Financial Strategies for Budgeting in 2026"',
      '"How Modern Families Manage Monthly Expenses with Smart Tools"',
      '"Explore Top-Rated Home Loan Comparison Guides Online"'
    ],
    correctAnswer: 0, // A
    explanation: 'Meta Advertising Standards strictly prohibit ad copy that asserts or implies direct personal attributes (e.g., medical conditions, financial distress, criminal history, or personal debt) using direct accusatory questions like "Are you suffering from severe debt?".'
  },
  {
    id: 18,
    topic: 'Placements Strategy',
    question: 'When an advertiser selects "Advantage+ Placements" (formerly Automatic Placements) in an ad set, how does Meta deliver the ad?',
    options: [
      'Only on Instagram Reels between 8 PM and 10 PM',
      'Across all eligible Meta placements (Facebook, Instagram, Messenger, Audience Network) where the algorithm predicts the lowest cost per optimization result',
      'Exclusively in Facebook Desktop Marketplace',
      'Only to people connected to high-speed fiber internet'
    ],
    correctAnswer: 1, // B
    explanation: 'Advantage+ Placements allows Meta machine learning system to maximize budget efficiency by displaying ads across all available properties where the highest probability of cost-effective conversion exists.'
  },
  {
    id: 19,
    topic: 'Ad Formats',
    question: 'Which ad format allows an advertiser to showcase up to 10 interactive cards with distinct images/videos, headlines, descriptions, and destination links within a single ad unit?',
    options: [
      'Single Static Banner',
      'Standard Text Post',
      'Carousel Ad',
      'Instant Experience Header'
    ],
    correctAnswer: 2, // C
    explanation: 'Carousel ads allow advertisers to feature up to 10 scrollable cards within a single ad, perfect for displaying multiple products, step-by-step feature walkthroughs, or different angles of one hero offer.'
  },
  {
    id: 20,
    topic: 'Campaign QA Protocols',
    question: 'What is the recommended practice immediately following the launch of a brand-new Meta ad campaign?',
    options: [
      'Edit headlines and cut budgets every 2 hours to force the algorithm to update',
      'Delete the campaign if it does not produce a sale in the first 15 minutes',
      'Switch all ad sets from CBO to ABO 3 times per day',
      'Allow the campaign to run undisturbed for 24-48 hours to gather baseline auction data and avoid resetting the delivery calibration'
    ],
    correctAnswer: 3, // D
    explanation: 'Making frequent edits during the first 24-48 hours resets the auction learning phase and destabilizes machine learning optimization. Advertisers should verify all tracking and settings before launch, then allow delivery to calibrate.'
  }
];

// Helper to build 12 rich Beginner Theory Modules
const BEGINNER_MODULE_TITLES = [
  'Introduction to Facebook and Meta Advertising',
  'Meta Business Portfolio and Account Structure',
  'Meta Ads Manager Interface and Campaign Hierarchy',
  'Campaign Objectives and Conversion Planning',
  'Audience Research and Customer Personas',
  'Core, Custom, and Lookalike Audience Concepts',
  'Placements, Devices, Locations, and Scheduling',
  'Facebook and Instagram Ad Formats',
  'Ad Creative and Copywriting Fundamentals',
  'Budgets, Bidding, and Delivery Basics',
  'Meta Pixel, Dataset, and Conversion Tracking Fundamentals',
  'Campaign Launch QA, Policy Compliance & Review Protocols'
];

function generateBeginnerTheoryModules() {
  const modules = [];

  for (let i = 0; i < 12; i++) {
    const modNum = i + 1;
    const title = BEGINNER_MODULE_TITLES[i];
    const id = `fb-beg-${String(modNum).padStart(2, '0')}`;

    modules.push({
      id,
      title,
      description: `Master ${title.toLowerCase()} with actionable Meta advertising frameworks, live campaign configurations, and practical optimization workflows.`,
      level: 'beginner',
      orderIndex: modNum,
      status: i === 0 ? 'in_progress' : 'locked',
      requiresQuiz: false,
      type: 'theory',
      duration: '45 mins',
      xpReward: 120,
      lessonContent: {
        overview: `Comprehensive masterclass module covering ${title.toLowerCase()} inside Meta Ads Manager. Learn production-grade advertising architectures, algorithmic auction behaviors, strategic budgeting, audience targeting rules, and step-by-step optimization procedures.`,
        analogyHero: `Think of ${title.toLowerCase()} in Meta advertising like an intelligent precision navigation system: when calibrated with accurate destination signals, high-quality fuel (creative assets), and clear flight parameters (audiences and bid caps), your campaigns reach ideal customers with predictable efficiency.`,
        objectives: [
          `Understand the strategic principles, algorithmic rules, and platform mechanics of ${title.toLowerCase()}`,
          `Implement production configurations inside Meta Ads Manager while avoiding common high-cost budget traps`,
          `Analyze real-world campaign data, delivery diagnostics, and key performance indicators (CPM, CTR, CPC, CPA, ROAS)`,
          `Execute step-by-step troubleshooting and iterative scaling protocols for sustained performance`
        ],
        estimatedTime: '45 mins',
        keyTakeaways: [
          `Always align your campaign configuration with high-converting customer intent and mathematical unit economics.`,
          `Maintain strict data governance, clean naming conventions, and pixel/CAPI event telemetry.`,
          `Prioritize thumb-stopping creative hooks and policy-compliant copywriting to maximize algorithmic distribution.`
        ],
        summary: `Mastering ${title.toLowerCase()} gives you the structural foundation and tactical expertise required to deploy, manage, and scale profitable Meta advertising campaigns.`,
        syntaxGuide: `// Meta Performance Formulas:\nCPM = (Spend / Impressions) * 1000\nLink_CTR = (LinkClicks / Impressions) * 100\nCPC = Spend / LinkClicks\nCPA = Spend / Conversions\nROAS = Revenue / Spend\nBreakEven_ROAS = 1 / GrossMarginPercent`,
        practiceExercises: [
          {
            title: `${title} Implementation Challenge`,
            instructions: `Review a live campaign scenario addressing ${title.toLowerCase()}. Calculate unit economics, identify performance bottlenecks, and formulate an immediate 3-step optimization action plan.`,
            starterCode: `// Configure diagnostic evaluation for ${title}\ninterface AuditInput {\n  spend: number;\n  impressions: number;\n  clicks: number;\n  conversions: number;\n  targetCpa: number;\n}\n\nfunction auditScenario(input: AuditInput) {\n  return {\n    cpa: 0,\n    variance: 0,\n    actionPlan: [] as string[]\n  };\n}`,
            solutionCode: `function auditScenario(input: AuditInput) {\n  const cpa = input.spend / (input.conversions || 1);\n  const variance = ((cpa - input.targetCpa) / input.targetCpa) * 100;\n  const actionPlan = [\n    'Verify pixel event firing and deduplication in Events Manager',\n    'Deploy 3 new creative hook variations to lower Cost Per Click',\n    'Apply audience exclusions for past 30-day converters to eliminate waste'\n  ];\n  return {\n    cpa: Number(cpa.toFixed(2)),\n    variance: Number(variance.toFixed(1)),\n    actionPlan\n  };\n}`
          }
        ],
        sections: [
          {
            id: `sec-${id}-1`,
            title: `1. Core Architectural Principles of ${title}`,
            difficulty: 'Beginner',
            content: `In modern Meta advertising, mastering ${title.toLowerCase()} is essential for building scalable paid social funnels. Meta machine learning algorithms evaluate thousands of auction signals per second — including estimated action rates, user value, and ad quality.\n\n### Strategic Pillars\n- **Algorithmic Alignment**: Working with Meta machine learning rather than trying to outsmart automated delivery.\n- **Signal Purity**: Ensuring high-fidelity event tracking, clean audience definitions, and zero overlap.\n- **Creative Leverage**: Understanding that creative is the ultimate targeting lever in modern paid social.`,
            explanation: `Mastering these architectural concepts prevents budget waste and allows Meta auction engine to deliver your ads to high-propensity buyers at the lowest possible cost.`,
            codeSnippets: [
              {
                filename: `module_${modNum}_config.json`,
                language: 'json',
                title: `${title} — Production Configuration Blueprint`,
                code: `{\n  "module": "${title}",\n  "level": "Beginner",\n  "strategicSettings": {\n    "campaignObjective": "OUTCOME_LEADS",\n    "budgetStrategy": "Advantage Campaign Budget (CBO)",\n    "dailyBudgetUSD": 150,\n    "placementStrategy": "Advantage+ Placements",\n    "attributionSetting": "7-day click or 1-day view"\n  },\n  "guardrails": {\n    "minCreativeVariations": 3,\n    "pastConverterExclusions": true,\n    "twoFactorAuthRequired": true\n  }\n}`,
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
                'It forces Facebook to display ads for free',
                'It guarantees an immediate 100% conversion rate on any landing page',
                'It prevents users from taking screenshots of your ads'
              ],
              correctAnswer: 0,
              explanation: 'Aligning with Meta machine learning ensures that ad delivery is dynamically guided by real-time conversion probability signals.'
            },
            proTip: `Always configure campaigns with at least 3 distinct creative concepts to give the auction algorithm sufficient diversity to match different user tastes.`,
            commonMistakes: [
              `Micro-managing bids and resetting campaign settings multiple times per day.`,
              `Failing to set up custom audience exclusions for recent purchasers or converted leads.`
            ]
          },
          {
            id: `sec-${id}-2`,
            title: `2. Tactical Execution & Step-by-Step Implementation`,
            difficulty: 'Beginner',
            content: `Executing ${title.toLowerCase()} requires a systematic 4-phase methodology:\n\n1. **Planning & Audience Research**: Define customer avatars, pain points, core offers, and key performance targets.\n2. **Setup & Configuration**: Build campaign structures in Ads Manager, set budgets, configure conversion locations, and assign pixel datasets.\n3. **Creative & Copy Assembly**: Write high-converting hooks, compelling body copy, clear CTAs, and format assets for 1:1 and 9:16 aspect ratios.\n4. **Launch & Verification**: Review all tracking parameters (UTMs), inspect live landing pages on mobile, and verify in Events Manager Test Events.`,
            explanation: `Following a structured implementation framework eliminates configuration errors, protects ad budgets, and establishes baseline performance metrics.`,
            codeSnippets: [
              {
                filename: `module_${modNum}_workflow.ts`,
                language: 'typescript',
                title: `${title} — Real-Time Unit Economics & Threshold Validator`,
                code: `export interface CampaignAudit {\n  cpm: number;\n  ctr: number;\n  cpc: number;\n  cpa: number;\n  roas: number;\n}\n\nexport function validateHealth(audit: CampaignAudit) {\n  const isHealthyCtr = audit.ctr >= 1.5;\n  const isHealthyCpa = audit.cpa <= 35.0;\n  const isHealthyRoas = audit.roas >= 2.5;\n\n  return {\n    status: isHealthyCtr && isHealthyCpa ? 'HEALTHY_SCALE' : 'REQUIRES_OPTIMIZATION',\n    recommendations: [\n      !isHealthyCtr ? 'Refresh visual hooks and headline copy to lift CTR above 1.5%' : 'CTR is strong',\n      !isHealthyCpa ? 'Audit landing page conversion friction or test higher-intent instant form' : 'CPA is within target'\n    ]\n  };\n}`,
                lineByLine: [
                  { line: 'const isHealthyCtr = audit.ctr >= 1.5;', explanation: 'Standard benchmark for healthy feed engagement on Meta.' },
                  { line: 'const isHealthyRoas = audit.roas >= 2.5;', explanation: 'Baseline target for profitable direct-to-consumer scaling.' }
                ]
              }
            ],
            miniPractice: {
              question: `What should an advertiser do if an ad achieves a high 3.0% CTR but zero conversions on the website?`,
              options: [
                'Immediately increase the daily budget by 500%',
                'Inspect landing page load speed, mobile layout responsiveness, offer pricing clarity, and tracking pixel functionality',
                'Delete the ad account and create a new personal Facebook profile',
                'Disable all comments on the Facebook Page'
              ],
              correctAnswer: 1,
              explanation: 'A strong CTR proves the creative is attracting interest, meaning the failure to convert stems from website friction, slow load times, poor offer match, or broken tracking.'
            },
            proTip: `Test mobile landing page load speeds using Google PageSpeed Insights; ensure First Contentful Paint (FCP) is under 1.5 seconds for paid social traffic.`,
            commonMistakes: [
              `Launching ads with broken destination URLs or missing UTM parameters.`,
              `Making major budget changes during the first 24 hours of campaign launch.`
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
                'Change the color of your Facebook Page profile picture',
                'Contact your bank to request a new corporate credit card',
                'Decrease ad delivery by 95% permanently'
              ],
              correctAnswer: 0,
              explanation: 'Creative fatigue occurs when audiences have seen the same visual repeatedly; refreshing hooks, formats, and angles re-engages the auction.'
            },
            proTip: `Maintain a "Creative Testing Sandbox" campaign with 15-20% of your total budget dedicated solely to validating new angles before scaling winners.`,
            commonMistakes: [
              `Assuming an ad that worked 6 months ago will run forever without creative refresh.`,
              `Blaming the Meta algorithm for poor performance when the actual issue is an uncompetitive offer.`
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
  id: 'fb-beg-proj',
  title: 'Beginner Project: Local Business Lead Generation Campaign',
  description: 'Architect, configure, and optimize a full-scale Facebook and Instagram lead generation campaign for a premier local service business.',
  level: 'beginner',
  orderIndex: 13,
  status: 'locked',
  requiresQuiz: false,
  isProject: true,
  type: 'project',
  duration: '180 mins',
  xpReward: 350,
  projectDetails: {
    overview: 'You are the Lead Performance Marketing Specialist hired by Apex Elite Roofing & Solar, a premier residential contractor in Austin, Texas. The client has an initial monthly ad budget of $3,500 ($115/day) and requires a comprehensive, high-converting Meta lead generation system to acquire qualified homeowner inspection requests.',
    scenario: 'Apex Elite Roofing & Solar is experiencing high cost-per-lead and low lead contact rates from generic shared lead providers. You must build an end-to-end Meta advertising campaign utilizing Instant Forms (Higher Intent), hyper-local geographic targeting, custom qualifying questions, and direct-response creative assets.',
    estimatedHours: '3 hours',
    learningObjectives: [
      'Architect a comprehensive, high-intent Meta Lead Generation campaign structure from scratch',
      'Conduct local customer persona research and build hyper-local audience targeting with strict exclusions',
      'Design high-converting mobile Instant Forms with custom qualifying questions and review screens',
      'Write direct-response ad copy across 3 distinct creative angles (Social Proof, Urgent Inspection, Storm Damage)',
      'Configure Meta Dataset / Pixel tracking and local lead conversion measurement',
      'Establish KPI benchmarks and a 14-day post-launch optimization checklist'
    ],
    requirements: [
      'Use the Leads campaign objective with on-Facebook Instant Forms (Higher Intent)',
      'Set geographic location targeting strictly to home-owners within a 25-mile radius of Austin, TX',
      'Build 3 distinct ad concepts (UGC video style, Before/After craftsmanship showcase, Local authority headline)',
      'Include at least 2 custom qualifying questions on the Instant Form (e.g., Roof Age and Home Ownership Status)',
      'Define automated email/SMS lead notification routing and <5-minute speed-to-lead follow-up protocol',
      'Construct a 14-day post-launch optimization and negative feedback prevention protocol'
    ],
    deliverables: [
      '1. Client & Campaign Brief (Target market, unique value proposition, unit economics, break-even target CPL)',
      '2. Campaign Settings & Budget Architecture (Objective selection, Advantage Campaign Budget vs ABO, daily pacing)',
      '3. Ideal Customer Profile (ICP) & Persona Matrix (Homeowner demographics, psychological pain points, buying triggers)',
      '4. Geographic & Demographics Targeting Plan (Austin 25-mile radius, age 30-65, homeowner exclusions)',
      '5. Core & Custom Audience Strategy (Local homeowner interest stack, website visitor custom audience, past customer exclusions)',
      '6. Placement Strategy & Asset Customization (Advantage+ Placements with 1:1 Feed and 9:16 Stories/Reels variations)',
      '7. Three Distinct Creative Concepts & Visual Storyboards (Concept 1: UGC Inspector Walkthrough, Concept 2: Drone Roof Inspection, Concept 3: Emergency Storm Audit)',
      '8. Complete Direct-Response Copywriting Suite (3 Hook variations, Primary Text, Headlines, Description, CTA Buttons)',
      '9. Higher-Intent Instant Lead Form Architecture (Hero image, intro text, qualifying questions, custom review screen, privacy policy link, completion screen CTA)',
      '10. Meta Dataset / Pixel & Lead Tracking Map (Standard Lead event, CRM webhook integration parameters, offline status sync)',
      '11. Benchmark KPI Target Dashboard (Target CPM, Link CTR >1.8%, Cost Per Lead <$35, Lead-to-Inspection Rate >30%)',
      '12. 14-Day Post-Launch Optimization & Quality QA Protocol (Speed-to-lead workflow, lead quality grading, creative fatigue mitigation)'
    ],
    rubric: [
      {
        criteria: 'Campaign Architecture & Local Targeting Precision',
        criterion: 'Campaign Architecture & Local Targeting Precision',
        weight: '25%',
        description: 'Correct objective selection (Leads), geographic boundary discipline (Austin homeowner radius), and past customer exclusions.'
      },
      {
        criteria: 'Instant Form Engineering & Lead Qualification',
        criterion: 'Instant Form Engineering & Lead Qualification',
        weight: '25%',
        description: 'Higher-intent form structure with custom qualifying questions filtering out renters and non-decision makers.'
      },
      {
        criteria: 'Creative Quality & Direct-Response Copywriting',
        criterion: 'Creative Quality & Direct-Response Copywriting',
        weight: '25%',
        description: 'Thumb-stopping visual hooks, policy-compliant copy, clear local proof, and compelling inspection offer positioning.'
      },
      {
        criteria: 'Measurement, Speed-to-Lead & Optimization Protocol',
        criterion: 'Measurement, Speed-to-Lead & Optimization Protocol',
        weight: '25%',
        description: 'Airtight tracking telemetry, CRM integration mapping, speed-to-lead protocols, and structured 14-day optimization logic.'
      }
    ],
    submissionChecklist: [
      'Verified campaign objective is set to Leads with Instant Forms',
      'Configured geographic targeting to physical residence in Austin metro area',
      'Included at least 2 custom qualifying questions on the Instant Form',
      'Wrote 3 complete ad copy variations with distinct opening hooks',
      'Constructed placement plan with 1:1 and 9:16 asset specifications',
      'Established CRM webhook integration and speed-to-lead follow-up workflow',
      'Confirmed privacy policy URL is valid and compliant with Meta advertising policies'
    ]
  }
};

// Beginner Assessment Task
const BEGINNER_ASSESSMENT_TASK = {
  id: 'fb-beg-exam',
  title: 'Level 1: Official Beginner Certification Exam',
  description: 'Pass the 20-question comprehensive assessment to validate your mastery of Facebook & Meta Advertising fundamentals and unlock Level 2 (Intermediate).',
  level: 'beginner',
  orderIndex: 14,
  status: 'locked',
  requiresQuiz: true,
  isFinalAssessment: true,
  type: 'quiz',
  duration: '40 mins',
  xpReward: 300,
  passingScore: 15,
  totalQuestions: 20,
  questions: BEGINNER_ASSESSMENT
};

// Assemble all Beginner tasks
const ALL_BEGINNER_TASKS = [
  ...generateBeginnerTheoryModules(),
  BEGINNER_PROJECT,
  BEGINNER_ASSESSMENT_TASK
];

// Write out the file
const fileHeader = `import { Task, QuizQuestion } from '../../types/roadmap.types';\n\n`;
const assessmentExport = `export const FACEBOOK_ADS_BEGINNER_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(BEGINNER_ASSESSMENT, null, 2)};\n\n`;
const tasksExport = `export const FACEBOOK_ADS_BEGINNER_TASKS: Task[] = ${JSON.stringify(ALL_BEGINNER_TASKS, null, 2)};\n`;

fs.writeFileSync(targetFile, fileHeader + assessmentExport + tasksExport, 'utf-8');
console.log(`✅ Successfully generated Facebook Ads Beginner data at: ${targetFile}`);
console.log(`   Tasks count: ${ALL_BEGINNER_TASKS.length} (12 Theory + 1 Project + 1 Assessment)`);
console.log(`   MCQs count: ${BEGINNER_ASSESSMENT.length} (Passing score: 15/20)`);
