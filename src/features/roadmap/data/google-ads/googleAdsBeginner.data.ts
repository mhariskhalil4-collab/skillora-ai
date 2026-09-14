import { Task, QuizQuestion } from '../../types/roadmap.types';

export const GOOGLE_ADS_BEGINNER_FINAL_ASSESSMENT: QuizQuestion[] = [
  {
    "id": 1,
    "topic": "Paid Search Mechanics & Ad Rank",
    "question": "How does Google Ads determine the position (Ad Rank) of a search ad in real-time auctions?",
    "options": [
      "Based on Ad Rank, which combines Maximum CPC bid, Quality Score (Expected CTR, Ad Relevance, Landing Page Experience), and Ad Assets expected impact",
      "Purely based on who bids the highest maximum CPC dollar amount regardless of ad copy or landing page quality",
      "Alphabetical order of the company website domain and URL length",
      "The total historical organic SEO backlinks and domain authority of the advertiser"
    ],
    "correctAnswer": 0,
    "explanation": "Ad Rank is calculated dynamically during every auction using your Maximum CPC bid, Quality Score components (Expected CTR, Ad Relevance, and Landing Page Experience), auction competitiveness, minimum Ad Rank thresholds, and the expected impact of ad assets."
  },
  {
    "id": 2,
    "topic": "Account Hierarchy & Settings",
    "question": "In the standard Google Ads account hierarchy, at which level are daily budgets, geographic location targeting, and campaign bidding strategies configured?",
    "options": [
      "Ad Group level",
      "Campaign level",
      "Keyword level",
      "Ad Asset level"
    ],
    "correctAnswer": 1,
    "explanation": "In Google Ads, daily budgets, location targeting, language targeting, start/end dates, networks, and bidding strategies are configured at the Campaign level. Ad groups contain targeted keywords and creative ads."
  },
  {
    "id": 3,
    "topic": "Keyword Match Types",
    "question": "Which keyword match type syntax targets queries containing the meaning of your keyword without requiring exact character-for-character matches or rigid word order?",
    "options": [
      "[emergency plumber]",
      "emergency plumber",
      "\"emergency plumber\"",
      "+emergency +plumber"
    ],
    "correctAnswer": 2,
    "explanation": "Phrase match, denoted with quotation marks like \"emergency plumber\", matches search queries that include the meaning of your keyword (such as \"urgent plumber near me\" or \"emergency 24/7 plumber\"), balancing reach and intent relevance."
  },
  {
    "id": 4,
    "topic": "Exact Match Close Variants",
    "question": "Which of the following user searches will trigger an Exact Match keyword [running shoes] under current Google Ads match type rules?",
    "options": [
      "buy blue running shoes online in new york",
      "discount leather running shoes review",
      "running marathon training plan",
      "shoes for running"
    ],
    "correctAnswer": 3,
    "explanation": "Exact match (surrounded by brackets) matches queries that share the exact same intent or meaning as the keyword, including close variants like singular/plural, abbreviations, reordered words with identical meaning (\"shoes for running\"), and misspellings without extraneous modifier words."
  },
  {
    "id": 5,
    "topic": "Negative Keywords & Spend Protection",
    "question": "Why should a premium B2B enterprise software company add negative keywords such as \"free\", \"open source\", \"crack\", and \"internships\"?",
    "options": [
      "To reduce their website hosting bandwidth and server memory",
      "To prevent paying for clicks from users with zero commercial purchase intent, preserving budget for qualified corporate decision-makers",
      "Because Google penalizes accounts with fewer than 50 negative keywords",
      "To rank higher on Google Maps local listings"
    ],
    "correctAnswer": 1,
    "explanation": "Negative keywords prevent ads from triggering when searches contain specific irrelevant terms, filtering out non-commercial traffic, job seekers, and freebie hunters, which protects budget and lifts conversion rates."
  },
  {
    "id": 6,
    "topic": "Responsive Search Ads (RSAs)",
    "question": "What is the maximum number of Headlines and Descriptions that an advertiser can provide in a single Responsive Search Ad (RSA)?",
    "options": [
      "5 Headlines and 2 Descriptions",
      "20 Headlines and 10 Descriptions",
      "15 Headlines and 4 Descriptions",
      "3 Headlines and 2 Descriptions"
    ],
    "correctAnswer": 2,
    "explanation": "A single Responsive Search Ad (RSA) allows advertisers to provide up to 15 distinct Headlines (30 characters max each) and up to 4 Descriptions (90 characters max each), which Google machine learning tests in dynamic combinations."
  },
  {
    "id": 7,
    "topic": "Ad Strength Diagnostic Metric",
    "question": "What does the \"Ad Strength\" metric in Google Ads indicate to the advertiser?",
    "options": [
      "The exact live Quality Score your ad receives during Google auctions",
      "The guaranteed CTR your ad will achieve in search results",
      "The organic Google search ranking of your landing page",
      "A best-practice checklist rating measuring headline diversity, keyword inclusion, and asset volume to optimize machine learning testing variations"
    ],
    "correctAnswer": 3,
    "explanation": "Ad Strength is a diagnostic guide (from Poor to Excellent) reflecting the diversity, relevance, and quantity of assets provided in an RSA. It provides feedback for machine learning optimization, though live Ad Rank is determined in real-time auctions."
  },
  {
    "id": 8,
    "topic": "Ad Assets & Sitelinks",
    "question": "Which ad asset allows advertisers to display additional clickable links to specific sub-pages (such as \"Pricing\", \"Case Studies\", \"Schedule Service\") below the main search ad copy?",
    "options": [
      "Sitelink assets",
      "Callout assets",
      "Structured snippet assets",
      "Price assets"
    ],
    "correctAnswer": 0,
    "explanation": "Sitelink assets direct users to specific sub-pages of your website directly from the search ad, expanding ad real estate, boosting click-through rates (CTR), and lowering bounce rates by guiding users directly to relevant content."
  },
  {
    "id": 9,
    "topic": "Geographic Location Targeting",
    "question": "To ensure ads for a local dental clinic in Chicago only show to users physically inside Chicago, which Location option must be selected?",
    "options": [
      "Presence or interest: People in, regularly in, or who have shown interest in your targeted locations",
      "Search interest: People searching for your targeted locations from any country",
      "Presence: People in or regularly in your targeted locations",
      "Global presence with IP matching disabled"
    ],
    "correctAnswer": 2,
    "explanation": "Selecting \"Presence: People in or regularly in your targeted locations\" ensures that your ads only display to users physically situated in your geographic area, avoiding wasted ad spend on out-of-market users browsing from other locations."
  },
  {
    "id": 10,
    "topic": "Daily Budget & Overdelivery Rules",
    "question": "If you set an average daily budget of $50/day, what is the maximum amount Google Ads can charge you on a single high-traffic day, and what is the monthly billing cap?",
    "options": [
      "Up to $50 on any day, and $1,500 monthly limit",
      "Up to $250 on any day, with no monthly cap",
      "Exactly $50 every day with zero variance",
      "Up to $100 on any day (2x daily budget), but never more than $1,520 in a full calendar month ($50 × 30.4 days)"
    ],
    "correctAnswer": 3,
    "explanation": "Google Ads may spend up to 2 times your daily budget on days with high search interest to maximize conversions, but it will never bill you more than your monthly charging limit, calculated as Average Daily Budget × 30.4 days."
  },
  {
    "id": 11,
    "topic": "Search Terms vs Keywords",
    "question": "What is the fundamental difference between a \"Keyword\" and a \"Search Term\" in Google Ads?",
    "options": [
      "A Keyword is the term the advertiser selects and bids on in the campaign, while a Search Term is the exact phrase a user queries on Google before clicking an ad",
      "A Keyword is what the user types into Google, while a Search Term is what the advertiser bids on",
      "They are completely identical and refer to the same database field",
      "Keywords are for video ads only, while Search Terms are for image banners"
    ],
    "correctAnswer": 0,
    "explanation": "A Keyword is the target phrase configured in your account. A Search Term is the real query entered by the user in the search box. Depending on your match types, one keyword can match many different search terms."
  },
  {
    "id": 12,
    "topic": "Message Match & Landing Page Experience",
    "question": "What is \"Message Match\" and why is it crucial for Google Ads campaign performance?",
    "options": [
      "Matching your ad color scheme to your competitor’s logo",
      "Ensuring consistent keywords, value propositions, and calls to action from the search query through the ad copy to the landing page headline",
      "Translating ads into 10 different languages automatically",
      "Sending an automated SMS message to every person who visits the website"
    ],
    "correctAnswer": 1,
    "explanation": "Message match ensures seamless continuity between what the user searched for, what the ad promised in the headline, and what the landing page delivers immediately above the fold. High message match elevates Quality Score, lowers CPC, and increases conversion rate."
  },
  {
    "id": 13,
    "topic": "Conversion Action Configuration",
    "question": "Why should an advertiser distinguish between Primary and Secondary conversion actions in Google Ads?",
    "options": [
      "Primary conversions appear in green while Secondary conversions appear in yellow in reports",
      "Secondary conversions cost twice as much per click as primary conversions",
      "Google automatically deletes all Secondary conversions after 7 days",
      "Primary conversions are included in the \"Conversions\" column and used by Smart Bidding algorithms to optimize bids, while Secondary conversions are for observation only"
    ],
    "correctAnswer": 3,
    "explanation": "Primary conversion actions are used for optimization in Smart Bidding and appear in standard \"Conversions\" reporting columns. Secondary conversion actions are tracked for diagnostic and reporting purposes only without directly influencing automated bidding algorithms."
  },
  {
    "id": 14,
    "topic": "Quality Score Pillars",
    "question": "Which three components determine the 1-to-10 Quality Score assigned to a keyword in Google Ads?",
    "options": [
      "Expected Click-Through Rate (eCTR), Ad Relevance, and Landing Page Experience",
      "Domain Age, Monthly Ad Spend, and Social Media Followers",
      "Keyword Search Volume, Number of Ad Extensions, and Credit Card Limit",
      "Device Type, Browser Version, and Operating System"
    ],
    "correctAnswer": 0,
    "explanation": "Quality Score is a diagnostic rating based on three core pillars: Expected Click-Through Rate (eCTR), Ad Relevance (how closely your ad matches the user intent), and Landing Page Experience (relevance, transparency, mobile speed, navigation)."
  },
  {
    "id": 15,
    "topic": "Campaign Objective Selection",
    "question": "When creating a new Search campaign for a residential roofing company seeking booked roof inspection requests, which Campaign Objective should be selected?",
    "options": [
      "Brand Awareness and Reach",
      "Leads",
      "App Promotion",
      "Product and Brand Consideration"
    ],
    "correctAnswer": 1,
    "explanation": "The \"Leads\" objective is designed to acquire contact information, form submissions, and phone calls from prospective customers seeking appointments, consultations, or quotes."
  },
  {
    "id": 16,
    "topic": "Themed Ad Group Structure",
    "question": "What is the industry best practice for structuring ad groups within a Search campaign?",
    "options": [
      "Putting all 200 keywords for all company products into a single ad group with 1 generic ad",
      "Creating one separate campaign for every single keyword without ad groups",
      "Creating tightly themed ad groups with 5–15 closely related keywords sharing identical intent and dedicated, tailored ad copy",
      "Grouping keywords alphabetically from A to Z"
    ],
    "correctAnswer": 2,
    "explanation": "Tightly themed ad groups containing 5 to 15 closely related keywords ensure that your Responsive Search Ads directly address the specific query intent, producing higher Ad Relevance and superior Quality Scores."
  },
  {
    "id": 17,
    "topic": "Negative Keyword Lists in Shared Library",
    "question": "Where can an advertiser create a reusable Negative Keyword List that can be applied across multiple campaigns simultaneously?",
    "options": [
      "In Tools and Settings → Shared Library → Negative Keyword Lists",
      "Inside the Billing and Invoicing tab",
      "Inside the Google Chrome browser bookmarks",
      "Inside Google Analytics custom dimension reports"
    ],
    "correctAnswer": 0,
    "explanation": "In Google Ads, shared Negative Keyword Lists are created and maintained under \"Tools and Settings → Shared Library → Negative Keyword Lists\" and can be attached to dozens of campaigns instantly."
  },
  {
    "id": 18,
    "topic": "Ad Schedules & Dayparting",
    "question": "A commercial locksmith operates Monday to Friday from 8:00 AM to 6:00 PM and has no after-hours dispatch team. What feature prevents ads from spending money on Sunday night?",
    "options": [
      "Automated Headline Pinning",
      "Display Network Expansion",
      "Ad Schedule (Dayparting) settings",
      "Broad Match modifier injection"
    ],
    "correctAnswer": 2,
    "explanation": "Ad Schedule settings (also known as dayparting) allow advertisers to specify the exact days of the week and hours of the day when ads are eligible to participate in auctions, preventing ad spend when staff cannot answer calls or respond to inquiries."
  },
  {
    "id": 19,
    "topic": "Mobile Landing Page Conversion Architecture",
    "question": "Which landing page configuration delivers the highest conversion rate for mobile search traffic seeking urgent services?",
    "options": [
      "An auto-playing 10-minute video with loud background music",
      "Fast loading speed (<2.5s), prominent sticky click-to-call button, short frictionless form, and immediate licensing/guarantee trust badges above the fold",
      "A dense footer containing 85 external social media navigation links",
      "A multi-step survey requiring 25 mandatory form fields"
    ],
    "correctAnswer": 1,
    "explanation": "Mobile searchers require immediate clarity: lightning-fast load times, clear headlines matching their search intent, sticky or prominent click-to-call buttons, frictionless forms, and instant trust indicators (reviews, licensing, guarantees)."
  },
  {
    "id": 20,
    "topic": "Search Partner Network Settings",
    "question": "What is the Google Search Partner Network in campaign network settings?",
    "options": [
      "A private affiliate marketing club that pays advertisers for impressions",
      "A software development kit for building mobile games",
      "A feature that automatically creates Facebook and TikTok ads",
      "Hundreds of non-Google websites and internal site search engines (like Amazon or Ask.com) that partner with Google to show search ads"
    ],
    "correctAnswer": 3,
    "explanation": "Google Search Partners are third-party websites and search engines partnering with Google to show text ads on their search results pages. Advertisers can observe performance and opt in or out at the campaign level."
  }
];

export const GOOGLE_ADS_BEGINNER_TASKS: Task[] = [
  {
    "id": "gads-beg-01",
    "title": "Introduction to Google Ads and Paid Search",
    "description": "Master introduction to google ads and paid search with actionable Google Ads frameworks, auction math, and live campaign optimization workflows.",
    "level": "beginner",
    "orderIndex": 1,
    "status": "in_progress",
    "requiresQuiz": false,
    "type": "theory",
    "duration": "45 mins",
    "xpReward": 120,
    "lessonContent": {
      "overview": "Comprehensive masterclass module covering introduction to google ads and paid search in Google Ads. Learn enterprise frameworks, auction calculations, campaign configuration strategies, and practical optimization workflows.",
      "analogyHero": "Think of introduction to google ads and paid search in Google Ads like an intelligent highway toll system: when properly calibrated with clear signage and fast lanes, high-value commercial traffic converts rapidly while low-intent traffic is filtered out before paying unnecessary tolls.",
      "objectives": [
        "Understand core principles and strategic mechanics of introduction to google ads and paid search",
        "Implement industry-standard configurations and avoid high-cost budget traps",
        "Analyze real-world campaign data, search intent signals, and performance metrics",
        "Execute step-by-step optimization procedures for maximum return on ad spend (ROAS)"
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Always align campaign settings with commercial search intent to prevent wasted ad spend.",
        "Maintain continuous negative keyword management and regular search term query audits.",
        "Prioritize high Quality Score (Expected CTR, Ad Relevance, Landing Page Experience) to minimize Cost Per Click."
      ],
      "summary": "Mastering introduction to google ads and paid search ensures your Google Ads account operates with high efficiency, lower acquisition costs, and scalable profitability.",
      "syntaxGuide": "// Key Metric Formulas:\nCTR = (Clicks / Impressions) * 100\nCPC = Total Cost / Total Clicks\nCVR = (Conversions / Clicks) * 100\nCPA = Total Cost / Total Conversions\nROAS = (Conversion Value / Total Cost) * 100",
      "practiceExercises": [
        {
          "title": "Introduction to Google Ads and Paid Search Scenario Challenge",
          "instructions": "Analyze a search campaign spending $150/day with 45 clicks, 2 conversions, and $75 CPA against a target CPA of $40. Identify the top 2 bottlenecks and outline immediate corrective actions.",
          "starterCode": "// Enter your diagnostic findings\nconst audit = {\n  cpaVariancePercent: 0,\n  primaryBottleneck: '',\n  remedyPlan: ''\n};",
          "solutionCode": "const audit = {\n  cpaVariancePercent: 87.5,\n  primaryBottleneck: 'Low CVR (4.4%) caused by poor landing page message match or broad query bleed',\n  remedyPlan: 'Add exact match negative exclusions, ensure landing page H1 matches keyword intent, and test sticky mobile CTA'\n};"
        }
      ],
      "sections": [
        {
          "id": "sec-1-1",
          "title": "1. Core Principles & Architecture of Introduction to Google Ads and Paid Search",
          "difficulty": "Beginner",
          "content": "In Google Ads performance marketing, mastering introduction to google ads and paid search is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.\n\n### Key Architectural Concepts\n- **Intent Alignment**: Every element must correspond directly to the commercial intent of the prospective searcher.\n- **Budget Protection**: Setting precise boundaries ensures ad spend is directed exclusively toward high-probability conversion events.\n- **Data Governance**: Clean naming, structured tracking tags, and disciplined keyword segregation allow machine learning algorithms to optimize effectively.",
          "explanation": "In Google Ads performance marketing, mastering introduction to google ads and paid search is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.",
          "codeSnippets": [
            {
              "filename": "module_1_config.json",
              "language": "json",
              "title": "Introduction to Google Ads and Paid Search — Strategic Configuration Architecture",
              "code": "{\n  \"module\": \"Introduction to Google Ads and Paid Search\",\n  \"campaignContext\": \"High-Intent Local Lead Generation\",\n  \"strategicParameters\": {\n    \"networkIsolation\": \"Search Network Only (Disable Display Expansion)\",\n    \"locationTargeting\": \"Presence: People in or regularly in targeted areas\",\n    \"adScheduleDayparting\": \"Mon-Fri 08:00-18:00 with +20% Peak Bid Multiplier\",\n    \"biddingPhase\": \"Manual CPC with eCPC -> Target CPA after 30 conversions\"\n  },\n  \"qualityGuardrails\": {\n    \"minAdStrength\": \"Good or Excellent\",\n    \"negativeKeywordListAttached\": true,\n    \"primaryConversionDefined\": true\n  }\n}",
              "lineByLine": [
                {
                  "line": "\"networkIsolation\": \"Search Network Only\"",
                  "explanation": "Prevents display network leakage from draining search ad budget."
                },
                {
                  "line": "\"locationTargeting\": \"Presence...\"",
                  "explanation": "Restricts ad serving strictly to people physically located inside target areas."
                },
                {
                  "line": "\"primaryConversionDefined\": true",
                  "explanation": "Directs Smart Bidding algorithm only toward verified high-value actions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why is strict network isolation important when configuring a Search campaign?",
            "options": [
              "It prevents the campaign from spending budget on passive Display network placements with lower conversion intent",
              "It increases campaign daily budget automatically by 50%",
              "It translates ad headlines into multiple foreign languages",
              "It prevents users from using Google Chrome browser"
            ],
            "correctAnswer": 0,
            "explanation": "Disabling Display expansion prevents high-intent search budgets from being diluted on un-targeted third-party display banner placements."
          },
          "proTip": "Always separate Search and Display campaigns into completely distinct campaigns with dedicated budgets.",
          "commonMistakes": [
            "Leaving 'Include Google Display Network' checked in a Search campaign.",
            "Using 'Presence or Interest' location targeting instead of 'Presence: People in or regularly in your targeted locations'."
          ]
        },
        {
          "id": "sec-1-2",
          "title": "2. Strategic Execution & Step-by-Step Implementation",
          "difficulty": "Beginner",
          "content": "Implementing introduction to google ads and paid search requires a systematic, repeatable framework:\n\n1. **Audit & Research**: Gather baseline query volume, competitor benchmarks, historical CPC averages, and customer conversion rates.\n2. **Structural Setup**: Configure campaigns with exact geographic boundaries, language restrictions, and isolated network distributions.\n3. **Continuous Refinement**: Monitor Search Term reports weekly, sculpt negative keyword lists, and adjust bids based on device and schedule performance.",
          "explanation": "Implementing introduction to google ads and paid search requires a systematic, repeatable framework across keyword scoping, campaign settings, and weekly query hygiene.",
          "codeSnippets": [
            {
              "filename": "module_1_optimizer.ts",
              "language": "typescript",
              "title": "Introduction to Google Ads and Paid Search — Real-Time Unit Economics & Metric Evaluator",
              "code": "// Practical Calculation & Audit Logic for Introduction to Google Ads and Paid Search\nexport interface CampaignMetrics {\n  impressions: number;\n  clicks: number;\n  cost: number;\n  conversions: number;\n}\n\nexport function analyzePerformance(m: CampaignMetrics) {\n  const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));\n  const cpc = Number((m.cost / (m.clicks || 1)).toFixed(2));\n  const cvr = Number(((m.conversions / (m.clicks || 1)) * 100).toFixed(2));\n  const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));\n\n  return {\n    clickThroughRate: `${ctr}%`,\n    averageCpc: `$${cpc}`,\n    conversionRate: `${cvr}%`,\n    costPerAcquisition: `$${cpa}`,\n    healthStatus: ctr >= 3.5 && cvr >= 8.0 ? 'HEALTHY_SCALE' : 'OPTIMIZE_COPY_AND_LP'\n  };\n}\n\n// Example evaluation: 1,200 clicks, $4,800 spend, 135 conversions\nconsole.log(analyzePerformance({ impressions: 22000, clicks: 1200, cost: 4800, conversions: 135 }));",
              "lineByLine": [
                {
                  "line": "const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));",
                  "explanation": "Calculates click-through rate percentage to evaluate creative appeal."
                },
                {
                  "line": "const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));",
                  "explanation": "Calculates true cost per acquisition across all conversion actions."
                },
                {
                  "line": "healthStatus: ctr >= 3.5 && cvr >= 8.0 ? ...",
                  "explanation": "Automates account diagnostics against industry performance benchmarks."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "How is Cost Per Acquisition (CPA) calculated in performance marketing reporting?",
            "options": [
              "Total Cost divided by Total Conversions",
              "Total Clicks multiplied by Total Impressions",
              "Total Conversions divided by Total Impressions",
              "Total Cost minus Total Revenue"
            ],
            "correctAnswer": 0,
            "explanation": "CPA represents the average monetary cost required to generate one successful conversion action (Cost / Conversions)."
          },
          "proTip": "Track both Cost Per Lead (CPL) and Cost Per Qualified Lead (CPQL) to measure downstream customer quality.",
          "commonMistakes": [
            "Evaluating keyword performance solely on CTR without measuring conversion volume and CPA.",
            "Changing bidding strategies multiple times per week before the algorithm completes its learning phase."
          ]
        },
        {
          "id": "sec-1-3",
          "title": "3. Real-World Case Studies & Performance Optimization",
          "difficulty": "Beginner",
          "content": "Consider an emergency home service provider that restructured their account around introduction to google ads and paid search. By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, they achieved:\n- **42% Reduction in Cost Per Acquisition (CPA)**\n- **3.1x Lift in Click-Through Rate (CTR)**\n- **95% Lead Contact Rate via Sticky Mobile Click-to-Call CTAs**",
          "explanation": "By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, campaigns achieve dramatic CPA reductions.",
          "codeSnippets": [
            {
              "filename": "module_1_workflow.js",
              "language": "javascript",
              "title": "Introduction to Google Ads and Paid Search — Automated Account Health & Waste Protection Script",
              "code": "// Automated Optimization Routine for Introduction to Google Ads and Paid Search\nfunction executeOptimizationChecklist(accountState) {\n  const actionItems = [];\n\n  if (accountState.searchLostIsBudget > 20) {\n    actionItems.push('High Lost Impression Share (Budget): Increase daily budget or narrow location radius.');\n  }\n  if (accountState.searchLostIsRank > 25) {\n    actionItems.push('High Lost Impression Share (Rank): Improve Quality Score (eCTR, Ad Relevance, Landing Page) or raise bids.');\n  }\n  if (!accountState.hasNegativeList) {\n    actionItems.push('CRITICAL: Attach shared negative keyword list to prevent wasted search query spend.');\n  }\n\n  return {\n    urgency: actionItems.length > 1 ? 'HIGH' : 'STABLE',\n    recommendations: actionItems\n  };\n}\n\nconsole.log(executeOptimizationChecklist({\n  searchLostIsBudget: 35.4,\n  searchLostIsRank: 12.1,\n  hasNegativeList: true\n}));",
              "lineByLine": [
                {
                  "line": "if (accountState.searchLostIsBudget > 20)",
                  "explanation": "Detects budget caps preventing ads from entering profitable auctions."
                },
                {
                  "line": "if (accountState.searchLostIsRank > 25)",
                  "explanation": "Identifies Ad Rank bottlenecks requiring Quality Score or bid intervention."
                },
                {
                  "line": "if (!accountState.hasNegativeList)",
                  "explanation": "Enforces mandatory negative list attachments to preserve budget efficiency."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What does a high 'Search Lost Impression Share (Rank)' indicate in Google Ads reporting?",
            "options": [
              "Ads were not shown due to low Ad Rank (combination of Quality Score and/or maximum bids)",
              "The campaign ran out of daily budget at noon",
              "The Google billing credit card was declined",
              "All competitor advertisers paused their campaigns"
            ],
            "correctAnswer": 0,
            "explanation": "Search Lost IS (Rank) specifically indicates impression opportunities missed because Ad Rank was lower than participating competitors in that auction."
          },
          "proTip": "When Search Lost IS (Rank) is high, first diagnose Quality Score components before immediately inflating Max CPC bids.",
          "commonMistakes": [
            "Assuming low impression share is always solved by increasing budget without checking Lost IS (Rank).",
            "Ignoring search partner network performance disparities."
          ]
        }
      ]
    }
  },
  {
    "id": "gads-beg-02",
    "title": "Google Ads Account and Campaign Structure",
    "description": "Master google ads account and campaign structure with actionable Google Ads frameworks, auction math, and live campaign optimization workflows.",
    "level": "beginner",
    "orderIndex": 2,
    "status": "locked",
    "requiresQuiz": false,
    "type": "theory",
    "duration": "45 mins",
    "xpReward": 120,
    "lessonContent": {
      "overview": "Comprehensive masterclass module covering google ads account and campaign structure in Google Ads. Learn enterprise frameworks, auction calculations, campaign configuration strategies, and practical optimization workflows.",
      "analogyHero": "Think of google ads account and campaign structure in Google Ads like an intelligent highway toll system: when properly calibrated with clear signage and fast lanes, high-value commercial traffic converts rapidly while low-intent traffic is filtered out before paying unnecessary tolls.",
      "objectives": [
        "Understand core principles and strategic mechanics of google ads account and campaign structure",
        "Implement industry-standard configurations and avoid high-cost budget traps",
        "Analyze real-world campaign data, search intent signals, and performance metrics",
        "Execute step-by-step optimization procedures for maximum return on ad spend (ROAS)"
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Always align campaign settings with commercial search intent to prevent wasted ad spend.",
        "Maintain continuous negative keyword management and regular search term query audits.",
        "Prioritize high Quality Score (Expected CTR, Ad Relevance, Landing Page Experience) to minimize Cost Per Click."
      ],
      "summary": "Mastering google ads account and campaign structure ensures your Google Ads account operates with high efficiency, lower acquisition costs, and scalable profitability.",
      "syntaxGuide": "// Key Metric Formulas:\nCTR = (Clicks / Impressions) * 100\nCPC = Total Cost / Total Clicks\nCVR = (Conversions / Clicks) * 100\nCPA = Total Cost / Total Conversions\nROAS = (Conversion Value / Total Cost) * 100",
      "practiceExercises": [
        {
          "title": "Google Ads Account and Campaign Structure Scenario Challenge",
          "instructions": "Analyze a search campaign spending $150/day with 45 clicks, 2 conversions, and $75 CPA against a target CPA of $40. Identify the top 2 bottlenecks and outline immediate corrective actions.",
          "starterCode": "// Enter your diagnostic findings\nconst audit = {\n  cpaVariancePercent: 0,\n  primaryBottleneck: '',\n  remedyPlan: ''\n};",
          "solutionCode": "const audit = {\n  cpaVariancePercent: 87.5,\n  primaryBottleneck: 'Low CVR (4.4%) caused by poor landing page message match or broad query bleed',\n  remedyPlan: 'Add exact match negative exclusions, ensure landing page H1 matches keyword intent, and test sticky mobile CTA'\n};"
        }
      ],
      "sections": [
        {
          "id": "sec-2-1",
          "title": "1. Core Principles & Architecture of Google Ads Account and Campaign Structure",
          "difficulty": "Beginner",
          "content": "In Google Ads performance marketing, mastering google ads account and campaign structure is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.\n\n### Key Architectural Concepts\n- **Intent Alignment**: Every element must correspond directly to the commercial intent of the prospective searcher.\n- **Budget Protection**: Setting precise boundaries ensures ad spend is directed exclusively toward high-probability conversion events.\n- **Data Governance**: Clean naming, structured tracking tags, and disciplined keyword segregation allow machine learning algorithms to optimize effectively.",
          "explanation": "In Google Ads performance marketing, mastering google ads account and campaign structure is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.",
          "codeSnippets": [
            {
              "filename": "module_2_config.json",
              "language": "json",
              "title": "Google Ads Account and Campaign Structure — Strategic Configuration Architecture",
              "code": "{\n  \"module\": \"Google Ads Account and Campaign Structure\",\n  \"campaignContext\": \"High-Intent Local Lead Generation\",\n  \"strategicParameters\": {\n    \"networkIsolation\": \"Search Network Only (Disable Display Expansion)\",\n    \"locationTargeting\": \"Presence: People in or regularly in targeted areas\",\n    \"adScheduleDayparting\": \"Mon-Fri 08:00-18:00 with +20% Peak Bid Multiplier\",\n    \"biddingPhase\": \"Manual CPC with eCPC -> Target CPA after 30 conversions\"\n  },\n  \"qualityGuardrails\": {\n    \"minAdStrength\": \"Good or Excellent\",\n    \"negativeKeywordListAttached\": true,\n    \"primaryConversionDefined\": true\n  }\n}",
              "lineByLine": [
                {
                  "line": "\"networkIsolation\": \"Search Network Only\"",
                  "explanation": "Prevents display network leakage from draining search ad budget."
                },
                {
                  "line": "\"locationTargeting\": \"Presence...\"",
                  "explanation": "Restricts ad serving strictly to people physically located inside target areas."
                },
                {
                  "line": "\"primaryConversionDefined\": true",
                  "explanation": "Directs Smart Bidding algorithm only toward verified high-value actions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why is strict network isolation important when configuring a Search campaign?",
            "options": [
              "It prevents the campaign from spending budget on passive Display network placements with lower conversion intent",
              "It increases campaign daily budget automatically by 50%",
              "It translates ad headlines into multiple foreign languages",
              "It prevents users from using Google Chrome browser"
            ],
            "correctAnswer": 0,
            "explanation": "Disabling Display expansion prevents high-intent search budgets from being diluted on un-targeted third-party display banner placements."
          },
          "proTip": "Always separate Search and Display campaigns into completely distinct campaigns with dedicated budgets.",
          "commonMistakes": [
            "Leaving 'Include Google Display Network' checked in a Search campaign.",
            "Using 'Presence or Interest' location targeting instead of 'Presence: People in or regularly in your targeted locations'."
          ]
        },
        {
          "id": "sec-2-2",
          "title": "2. Strategic Execution & Step-by-Step Implementation",
          "difficulty": "Beginner",
          "content": "Implementing google ads account and campaign structure requires a systematic, repeatable framework:\n\n1. **Audit & Research**: Gather baseline query volume, competitor benchmarks, historical CPC averages, and customer conversion rates.\n2. **Structural Setup**: Configure campaigns with exact geographic boundaries, language restrictions, and isolated network distributions.\n3. **Continuous Refinement**: Monitor Search Term reports weekly, sculpt negative keyword lists, and adjust bids based on device and schedule performance.",
          "explanation": "Implementing google ads account and campaign structure requires a systematic, repeatable framework across keyword scoping, campaign settings, and weekly query hygiene.",
          "codeSnippets": [
            {
              "filename": "module_2_optimizer.ts",
              "language": "typescript",
              "title": "Google Ads Account and Campaign Structure — Real-Time Unit Economics & Metric Evaluator",
              "code": "// Practical Calculation & Audit Logic for Google Ads Account and Campaign Structure\nexport interface CampaignMetrics {\n  impressions: number;\n  clicks: number;\n  cost: number;\n  conversions: number;\n}\n\nexport function analyzePerformance(m: CampaignMetrics) {\n  const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));\n  const cpc = Number((m.cost / (m.clicks || 1)).toFixed(2));\n  const cvr = Number(((m.conversions / (m.clicks || 1)) * 100).toFixed(2));\n  const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));\n\n  return {\n    clickThroughRate: `${ctr}%`,\n    averageCpc: `$${cpc}`,\n    conversionRate: `${cvr}%`,\n    costPerAcquisition: `$${cpa}`,\n    healthStatus: ctr >= 3.5 && cvr >= 8.0 ? 'HEALTHY_SCALE' : 'OPTIMIZE_COPY_AND_LP'\n  };\n}\n\n// Example evaluation: 1,200 clicks, $4,800 spend, 135 conversions\nconsole.log(analyzePerformance({ impressions: 22000, clicks: 1200, cost: 4800, conversions: 135 }));",
              "lineByLine": [
                {
                  "line": "const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));",
                  "explanation": "Calculates click-through rate percentage to evaluate creative appeal."
                },
                {
                  "line": "const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));",
                  "explanation": "Calculates true cost per acquisition across all conversion actions."
                },
                {
                  "line": "healthStatus: ctr >= 3.5 && cvr >= 8.0 ? ...",
                  "explanation": "Automates account diagnostics against industry performance benchmarks."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "How is Cost Per Acquisition (CPA) calculated in performance marketing reporting?",
            "options": [
              "Total Cost divided by Total Conversions",
              "Total Clicks multiplied by Total Impressions",
              "Total Conversions divided by Total Impressions",
              "Total Cost minus Total Revenue"
            ],
            "correctAnswer": 0,
            "explanation": "CPA represents the average monetary cost required to generate one successful conversion action (Cost / Conversions)."
          },
          "proTip": "Track both Cost Per Lead (CPL) and Cost Per Qualified Lead (CPQL) to measure downstream customer quality.",
          "commonMistakes": [
            "Evaluating keyword performance solely on CTR without measuring conversion volume and CPA.",
            "Changing bidding strategies multiple times per week before the algorithm completes its learning phase."
          ]
        },
        {
          "id": "sec-2-3",
          "title": "3. Real-World Case Studies & Performance Optimization",
          "difficulty": "Beginner",
          "content": "Consider an emergency home service provider that restructured their account around google ads account and campaign structure. By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, they achieved:\n- **42% Reduction in Cost Per Acquisition (CPA)**\n- **3.1x Lift in Click-Through Rate (CTR)**\n- **95% Lead Contact Rate via Sticky Mobile Click-to-Call CTAs**",
          "explanation": "By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, campaigns achieve dramatic CPA reductions.",
          "codeSnippets": [
            {
              "filename": "module_2_workflow.js",
              "language": "javascript",
              "title": "Google Ads Account and Campaign Structure — Automated Account Health & Waste Protection Script",
              "code": "// Automated Optimization Routine for Google Ads Account and Campaign Structure\nfunction executeOptimizationChecklist(accountState) {\n  const actionItems = [];\n\n  if (accountState.searchLostIsBudget > 20) {\n    actionItems.push('High Lost Impression Share (Budget): Increase daily budget or narrow location radius.');\n  }\n  if (accountState.searchLostIsRank > 25) {\n    actionItems.push('High Lost Impression Share (Rank): Improve Quality Score (eCTR, Ad Relevance, Landing Page) or raise bids.');\n  }\n  if (!accountState.hasNegativeList) {\n    actionItems.push('CRITICAL: Attach shared negative keyword list to prevent wasted search query spend.');\n  }\n\n  return {\n    urgency: actionItems.length > 1 ? 'HIGH' : 'STABLE',\n    recommendations: actionItems\n  };\n}\n\nconsole.log(executeOptimizationChecklist({\n  searchLostIsBudget: 35.4,\n  searchLostIsRank: 12.1,\n  hasNegativeList: true\n}));",
              "lineByLine": [
                {
                  "line": "if (accountState.searchLostIsBudget > 20)",
                  "explanation": "Detects budget caps preventing ads from entering profitable auctions."
                },
                {
                  "line": "if (accountState.searchLostIsRank > 25)",
                  "explanation": "Identifies Ad Rank bottlenecks requiring Quality Score or bid intervention."
                },
                {
                  "line": "if (!accountState.hasNegativeList)",
                  "explanation": "Enforces mandatory negative list attachments to preserve budget efficiency."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What does a high 'Search Lost Impression Share (Rank)' indicate in Google Ads reporting?",
            "options": [
              "Ads were not shown due to low Ad Rank (combination of Quality Score and/or maximum bids)",
              "The campaign ran out of daily budget at noon",
              "The Google billing credit card was declined",
              "All competitor advertisers paused their campaigns"
            ],
            "correctAnswer": 0,
            "explanation": "Search Lost IS (Rank) specifically indicates impression opportunities missed because Ad Rank was lower than participating competitors in that auction."
          },
          "proTip": "When Search Lost IS (Rank) is high, first diagnose Quality Score components before immediately inflating Max CPC bids.",
          "commonMistakes": [
            "Assuming low impression share is always solved by increasing budget without checking Lost IS (Rank).",
            "Ignoring search partner network performance disparities."
          ]
        }
      ]
    }
  },
  {
    "id": "gads-beg-03",
    "title": "Campaign Goals, Objectives, and Conversion Planning",
    "description": "Master campaign goals, objectives, and conversion planning with actionable Google Ads frameworks, auction math, and live campaign optimization workflows.",
    "level": "beginner",
    "orderIndex": 3,
    "status": "locked",
    "requiresQuiz": false,
    "type": "theory",
    "duration": "45 mins",
    "xpReward": 120,
    "lessonContent": {
      "overview": "Comprehensive masterclass module covering campaign goals, objectives, and conversion planning in Google Ads. Learn enterprise frameworks, auction calculations, campaign configuration strategies, and practical optimization workflows.",
      "analogyHero": "Think of campaign goals, objectives, and conversion planning in Google Ads like an intelligent highway toll system: when properly calibrated with clear signage and fast lanes, high-value commercial traffic converts rapidly while low-intent traffic is filtered out before paying unnecessary tolls.",
      "objectives": [
        "Understand core principles and strategic mechanics of campaign goals, objectives, and conversion planning",
        "Implement industry-standard configurations and avoid high-cost budget traps",
        "Analyze real-world campaign data, search intent signals, and performance metrics",
        "Execute step-by-step optimization procedures for maximum return on ad spend (ROAS)"
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Always align campaign settings with commercial search intent to prevent wasted ad spend.",
        "Maintain continuous negative keyword management and regular search term query audits.",
        "Prioritize high Quality Score (Expected CTR, Ad Relevance, Landing Page Experience) to minimize Cost Per Click."
      ],
      "summary": "Mastering campaign goals, objectives, and conversion planning ensures your Google Ads account operates with high efficiency, lower acquisition costs, and scalable profitability.",
      "syntaxGuide": "// Key Metric Formulas:\nCTR = (Clicks / Impressions) * 100\nCPC = Total Cost / Total Clicks\nCVR = (Conversions / Clicks) * 100\nCPA = Total Cost / Total Conversions\nROAS = (Conversion Value / Total Cost) * 100",
      "practiceExercises": [
        {
          "title": "Campaign Goals, Objectives, and Conversion Planning Scenario Challenge",
          "instructions": "Analyze a search campaign spending $150/day with 45 clicks, 2 conversions, and $75 CPA against a target CPA of $40. Identify the top 2 bottlenecks and outline immediate corrective actions.",
          "starterCode": "// Enter your diagnostic findings\nconst audit = {\n  cpaVariancePercent: 0,\n  primaryBottleneck: '',\n  remedyPlan: ''\n};",
          "solutionCode": "const audit = {\n  cpaVariancePercent: 87.5,\n  primaryBottleneck: 'Low CVR (4.4%) caused by poor landing page message match or broad query bleed',\n  remedyPlan: 'Add exact match negative exclusions, ensure landing page H1 matches keyword intent, and test sticky mobile CTA'\n};"
        }
      ],
      "sections": [
        {
          "id": "sec-3-1",
          "title": "1. Core Principles & Architecture of Campaign Goals, Objectives, and Conversion Planning",
          "difficulty": "Beginner",
          "content": "In Google Ads performance marketing, mastering campaign goals, objectives, and conversion planning is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.\n\n### Key Architectural Concepts\n- **Intent Alignment**: Every element must correspond directly to the commercial intent of the prospective searcher.\n- **Budget Protection**: Setting precise boundaries ensures ad spend is directed exclusively toward high-probability conversion events.\n- **Data Governance**: Clean naming, structured tracking tags, and disciplined keyword segregation allow machine learning algorithms to optimize effectively.",
          "explanation": "In Google Ads performance marketing, mastering campaign goals, objectives, and conversion planning is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.",
          "codeSnippets": [
            {
              "filename": "module_3_config.json",
              "language": "json",
              "title": "Campaign Goals, Objectives, and Conversion Planning — Strategic Configuration Architecture",
              "code": "{\n  \"module\": \"Campaign Goals, Objectives, and Conversion Planning\",\n  \"campaignContext\": \"High-Intent Local Lead Generation\",\n  \"strategicParameters\": {\n    \"networkIsolation\": \"Search Network Only (Disable Display Expansion)\",\n    \"locationTargeting\": \"Presence: People in or regularly in targeted areas\",\n    \"adScheduleDayparting\": \"Mon-Fri 08:00-18:00 with +20% Peak Bid Multiplier\",\n    \"biddingPhase\": \"Manual CPC with eCPC -> Target CPA after 30 conversions\"\n  },\n  \"qualityGuardrails\": {\n    \"minAdStrength\": \"Good or Excellent\",\n    \"negativeKeywordListAttached\": true,\n    \"primaryConversionDefined\": true\n  }\n}",
              "lineByLine": [
                {
                  "line": "\"networkIsolation\": \"Search Network Only\"",
                  "explanation": "Prevents display network leakage from draining search ad budget."
                },
                {
                  "line": "\"locationTargeting\": \"Presence...\"",
                  "explanation": "Restricts ad serving strictly to people physically located inside target areas."
                },
                {
                  "line": "\"primaryConversionDefined\": true",
                  "explanation": "Directs Smart Bidding algorithm only toward verified high-value actions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why is strict network isolation important when configuring a Search campaign?",
            "options": [
              "It prevents the campaign from spending budget on passive Display network placements with lower conversion intent",
              "It increases campaign daily budget automatically by 50%",
              "It translates ad headlines into multiple foreign languages",
              "It prevents users from using Google Chrome browser"
            ],
            "correctAnswer": 0,
            "explanation": "Disabling Display expansion prevents high-intent search budgets from being diluted on un-targeted third-party display banner placements."
          },
          "proTip": "Always separate Search and Display campaigns into completely distinct campaigns with dedicated budgets.",
          "commonMistakes": [
            "Leaving 'Include Google Display Network' checked in a Search campaign.",
            "Using 'Presence or Interest' location targeting instead of 'Presence: People in or regularly in your targeted locations'."
          ]
        },
        {
          "id": "sec-3-2",
          "title": "2. Strategic Execution & Step-by-Step Implementation",
          "difficulty": "Beginner",
          "content": "Implementing campaign goals, objectives, and conversion planning requires a systematic, repeatable framework:\n\n1. **Audit & Research**: Gather baseline query volume, competitor benchmarks, historical CPC averages, and customer conversion rates.\n2. **Structural Setup**: Configure campaigns with exact geographic boundaries, language restrictions, and isolated network distributions.\n3. **Continuous Refinement**: Monitor Search Term reports weekly, sculpt negative keyword lists, and adjust bids based on device and schedule performance.",
          "explanation": "Implementing campaign goals, objectives, and conversion planning requires a systematic, repeatable framework across keyword scoping, campaign settings, and weekly query hygiene.",
          "codeSnippets": [
            {
              "filename": "module_3_optimizer.ts",
              "language": "typescript",
              "title": "Campaign Goals, Objectives, and Conversion Planning — Real-Time Unit Economics & Metric Evaluator",
              "code": "// Practical Calculation & Audit Logic for Campaign Goals, Objectives, and Conversion Planning\nexport interface CampaignMetrics {\n  impressions: number;\n  clicks: number;\n  cost: number;\n  conversions: number;\n}\n\nexport function analyzePerformance(m: CampaignMetrics) {\n  const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));\n  const cpc = Number((m.cost / (m.clicks || 1)).toFixed(2));\n  const cvr = Number(((m.conversions / (m.clicks || 1)) * 100).toFixed(2));\n  const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));\n\n  return {\n    clickThroughRate: `${ctr}%`,\n    averageCpc: `$${cpc}`,\n    conversionRate: `${cvr}%`,\n    costPerAcquisition: `$${cpa}`,\n    healthStatus: ctr >= 3.5 && cvr >= 8.0 ? 'HEALTHY_SCALE' : 'OPTIMIZE_COPY_AND_LP'\n  };\n}\n\n// Example evaluation: 1,200 clicks, $4,800 spend, 135 conversions\nconsole.log(analyzePerformance({ impressions: 22000, clicks: 1200, cost: 4800, conversions: 135 }));",
              "lineByLine": [
                {
                  "line": "const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));",
                  "explanation": "Calculates click-through rate percentage to evaluate creative appeal."
                },
                {
                  "line": "const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));",
                  "explanation": "Calculates true cost per acquisition across all conversion actions."
                },
                {
                  "line": "healthStatus: ctr >= 3.5 && cvr >= 8.0 ? ...",
                  "explanation": "Automates account diagnostics against industry performance benchmarks."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "How is Cost Per Acquisition (CPA) calculated in performance marketing reporting?",
            "options": [
              "Total Cost divided by Total Conversions",
              "Total Clicks multiplied by Total Impressions",
              "Total Conversions divided by Total Impressions",
              "Total Cost minus Total Revenue"
            ],
            "correctAnswer": 0,
            "explanation": "CPA represents the average monetary cost required to generate one successful conversion action (Cost / Conversions)."
          },
          "proTip": "Track both Cost Per Lead (CPL) and Cost Per Qualified Lead (CPQL) to measure downstream customer quality.",
          "commonMistakes": [
            "Evaluating keyword performance solely on CTR without measuring conversion volume and CPA.",
            "Changing bidding strategies multiple times per week before the algorithm completes its learning phase."
          ]
        },
        {
          "id": "sec-3-3",
          "title": "3. Real-World Case Studies & Performance Optimization",
          "difficulty": "Beginner",
          "content": "Consider an emergency home service provider that restructured their account around campaign goals, objectives, and conversion planning. By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, they achieved:\n- **42% Reduction in Cost Per Acquisition (CPA)**\n- **3.1x Lift in Click-Through Rate (CTR)**\n- **95% Lead Contact Rate via Sticky Mobile Click-to-Call CTAs**",
          "explanation": "By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, campaigns achieve dramatic CPA reductions.",
          "codeSnippets": [
            {
              "filename": "module_3_workflow.js",
              "language": "javascript",
              "title": "Campaign Goals, Objectives, and Conversion Planning — Automated Account Health & Waste Protection Script",
              "code": "// Automated Optimization Routine for Campaign Goals, Objectives, and Conversion Planning\nfunction executeOptimizationChecklist(accountState) {\n  const actionItems = [];\n\n  if (accountState.searchLostIsBudget > 20) {\n    actionItems.push('High Lost Impression Share (Budget): Increase daily budget or narrow location radius.');\n  }\n  if (accountState.searchLostIsRank > 25) {\n    actionItems.push('High Lost Impression Share (Rank): Improve Quality Score (eCTR, Ad Relevance, Landing Page) or raise bids.');\n  }\n  if (!accountState.hasNegativeList) {\n    actionItems.push('CRITICAL: Attach shared negative keyword list to prevent wasted search query spend.');\n  }\n\n  return {\n    urgency: actionItems.length > 1 ? 'HIGH' : 'STABLE',\n    recommendations: actionItems\n  };\n}\n\nconsole.log(executeOptimizationChecklist({\n  searchLostIsBudget: 35.4,\n  searchLostIsRank: 12.1,\n  hasNegativeList: true\n}));",
              "lineByLine": [
                {
                  "line": "if (accountState.searchLostIsBudget > 20)",
                  "explanation": "Detects budget caps preventing ads from entering profitable auctions."
                },
                {
                  "line": "if (accountState.searchLostIsRank > 25)",
                  "explanation": "Identifies Ad Rank bottlenecks requiring Quality Score or bid intervention."
                },
                {
                  "line": "if (!accountState.hasNegativeList)",
                  "explanation": "Enforces mandatory negative list attachments to preserve budget efficiency."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What does a high 'Search Lost Impression Share (Rank)' indicate in Google Ads reporting?",
            "options": [
              "Ads were not shown due to low Ad Rank (combination of Quality Score and/or maximum bids)",
              "The campaign ran out of daily budget at noon",
              "The Google billing credit card was declined",
              "All competitor advertisers paused their campaigns"
            ],
            "correctAnswer": 0,
            "explanation": "Search Lost IS (Rank) specifically indicates impression opportunities missed because Ad Rank was lower than participating competitors in that auction."
          },
          "proTip": "When Search Lost IS (Rank) is high, first diagnose Quality Score components before immediately inflating Max CPC bids.",
          "commonMistakes": [
            "Assuming low impression share is always solved by increasing budget without checking Lost IS (Rank).",
            "Ignoring search partner network performance disparities."
          ]
        }
      ]
    }
  },
  {
    "id": "gads-beg-04",
    "title": "Keywords and Search Intent",
    "description": "Master keywords and search intent with actionable Google Ads frameworks, auction math, and live campaign optimization workflows.",
    "level": "beginner",
    "orderIndex": 4,
    "status": "locked",
    "requiresQuiz": false,
    "type": "theory",
    "duration": "45 mins",
    "xpReward": 120,
    "lessonContent": {
      "overview": "Comprehensive masterclass module covering keywords and search intent in Google Ads. Learn enterprise frameworks, auction calculations, campaign configuration strategies, and practical optimization workflows.",
      "analogyHero": "Think of keywords and search intent in Google Ads like an intelligent highway toll system: when properly calibrated with clear signage and fast lanes, high-value commercial traffic converts rapidly while low-intent traffic is filtered out before paying unnecessary tolls.",
      "objectives": [
        "Understand core principles and strategic mechanics of keywords and search intent",
        "Implement industry-standard configurations and avoid high-cost budget traps",
        "Analyze real-world campaign data, search intent signals, and performance metrics",
        "Execute step-by-step optimization procedures for maximum return on ad spend (ROAS)"
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Always align campaign settings with commercial search intent to prevent wasted ad spend.",
        "Maintain continuous negative keyword management and regular search term query audits.",
        "Prioritize high Quality Score (Expected CTR, Ad Relevance, Landing Page Experience) to minimize Cost Per Click."
      ],
      "summary": "Mastering keywords and search intent ensures your Google Ads account operates with high efficiency, lower acquisition costs, and scalable profitability.",
      "syntaxGuide": "// Key Metric Formulas:\nCTR = (Clicks / Impressions) * 100\nCPC = Total Cost / Total Clicks\nCVR = (Conversions / Clicks) * 100\nCPA = Total Cost / Total Conversions\nROAS = (Conversion Value / Total Cost) * 100",
      "practiceExercises": [
        {
          "title": "Keywords and Search Intent Scenario Challenge",
          "instructions": "Analyze a search campaign spending $150/day with 45 clicks, 2 conversions, and $75 CPA against a target CPA of $40. Identify the top 2 bottlenecks and outline immediate corrective actions.",
          "starterCode": "// Enter your diagnostic findings\nconst audit = {\n  cpaVariancePercent: 0,\n  primaryBottleneck: '',\n  remedyPlan: ''\n};",
          "solutionCode": "const audit = {\n  cpaVariancePercent: 87.5,\n  primaryBottleneck: 'Low CVR (4.4%) caused by poor landing page message match or broad query bleed',\n  remedyPlan: 'Add exact match negative exclusions, ensure landing page H1 matches keyword intent, and test sticky mobile CTA'\n};"
        }
      ],
      "sections": [
        {
          "id": "sec-4-1",
          "title": "1. Core Principles & Architecture of Keywords and Search Intent",
          "difficulty": "Beginner",
          "content": "In Google Ads performance marketing, mastering keywords and search intent is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.\n\n### Key Architectural Concepts\n- **Intent Alignment**: Every element must correspond directly to the commercial intent of the prospective searcher.\n- **Budget Protection**: Setting precise boundaries ensures ad spend is directed exclusively toward high-probability conversion events.\n- **Data Governance**: Clean naming, structured tracking tags, and disciplined keyword segregation allow machine learning algorithms to optimize effectively.",
          "explanation": "In Google Ads performance marketing, mastering keywords and search intent is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.",
          "codeSnippets": [
            {
              "filename": "module_4_config.json",
              "language": "json",
              "title": "Keywords and Search Intent — Strategic Configuration Architecture",
              "code": "{\n  \"module\": \"Keywords and Search Intent\",\n  \"campaignContext\": \"High-Intent Local Lead Generation\",\n  \"strategicParameters\": {\n    \"networkIsolation\": \"Search Network Only (Disable Display Expansion)\",\n    \"locationTargeting\": \"Presence: People in or regularly in targeted areas\",\n    \"adScheduleDayparting\": \"Mon-Fri 08:00-18:00 with +20% Peak Bid Multiplier\",\n    \"biddingPhase\": \"Manual CPC with eCPC -> Target CPA after 30 conversions\"\n  },\n  \"qualityGuardrails\": {\n    \"minAdStrength\": \"Good or Excellent\",\n    \"negativeKeywordListAttached\": true,\n    \"primaryConversionDefined\": true\n  }\n}",
              "lineByLine": [
                {
                  "line": "\"networkIsolation\": \"Search Network Only\"",
                  "explanation": "Prevents display network leakage from draining search ad budget."
                },
                {
                  "line": "\"locationTargeting\": \"Presence...\"",
                  "explanation": "Restricts ad serving strictly to people physically located inside target areas."
                },
                {
                  "line": "\"primaryConversionDefined\": true",
                  "explanation": "Directs Smart Bidding algorithm only toward verified high-value actions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why is strict network isolation important when configuring a Search campaign?",
            "options": [
              "It prevents the campaign from spending budget on passive Display network placements with lower conversion intent",
              "It increases campaign daily budget automatically by 50%",
              "It translates ad headlines into multiple foreign languages",
              "It prevents users from using Google Chrome browser"
            ],
            "correctAnswer": 0,
            "explanation": "Disabling Display expansion prevents high-intent search budgets from being diluted on un-targeted third-party display banner placements."
          },
          "proTip": "Always separate Search and Display campaigns into completely distinct campaigns with dedicated budgets.",
          "commonMistakes": [
            "Leaving 'Include Google Display Network' checked in a Search campaign.",
            "Using 'Presence or Interest' location targeting instead of 'Presence: People in or regularly in your targeted locations'."
          ]
        },
        {
          "id": "sec-4-2",
          "title": "2. Strategic Execution & Step-by-Step Implementation",
          "difficulty": "Beginner",
          "content": "Implementing keywords and search intent requires a systematic, repeatable framework:\n\n1. **Audit & Research**: Gather baseline query volume, competitor benchmarks, historical CPC averages, and customer conversion rates.\n2. **Structural Setup**: Configure campaigns with exact geographic boundaries, language restrictions, and isolated network distributions.\n3. **Continuous Refinement**: Monitor Search Term reports weekly, sculpt negative keyword lists, and adjust bids based on device and schedule performance.",
          "explanation": "Implementing keywords and search intent requires a systematic, repeatable framework across keyword scoping, campaign settings, and weekly query hygiene.",
          "codeSnippets": [
            {
              "filename": "module_4_optimizer.ts",
              "language": "typescript",
              "title": "Keywords and Search Intent — Real-Time Unit Economics & Metric Evaluator",
              "code": "// Practical Calculation & Audit Logic for Keywords and Search Intent\nexport interface CampaignMetrics {\n  impressions: number;\n  clicks: number;\n  cost: number;\n  conversions: number;\n}\n\nexport function analyzePerformance(m: CampaignMetrics) {\n  const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));\n  const cpc = Number((m.cost / (m.clicks || 1)).toFixed(2));\n  const cvr = Number(((m.conversions / (m.clicks || 1)) * 100).toFixed(2));\n  const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));\n\n  return {\n    clickThroughRate: `${ctr}%`,\n    averageCpc: `$${cpc}`,\n    conversionRate: `${cvr}%`,\n    costPerAcquisition: `$${cpa}`,\n    healthStatus: ctr >= 3.5 && cvr >= 8.0 ? 'HEALTHY_SCALE' : 'OPTIMIZE_COPY_AND_LP'\n  };\n}\n\n// Example evaluation: 1,200 clicks, $4,800 spend, 135 conversions\nconsole.log(analyzePerformance({ impressions: 22000, clicks: 1200, cost: 4800, conversions: 135 }));",
              "lineByLine": [
                {
                  "line": "const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));",
                  "explanation": "Calculates click-through rate percentage to evaluate creative appeal."
                },
                {
                  "line": "const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));",
                  "explanation": "Calculates true cost per acquisition across all conversion actions."
                },
                {
                  "line": "healthStatus: ctr >= 3.5 && cvr >= 8.0 ? ...",
                  "explanation": "Automates account diagnostics against industry performance benchmarks."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "How is Cost Per Acquisition (CPA) calculated in performance marketing reporting?",
            "options": [
              "Total Cost divided by Total Conversions",
              "Total Clicks multiplied by Total Impressions",
              "Total Conversions divided by Total Impressions",
              "Total Cost minus Total Revenue"
            ],
            "correctAnswer": 0,
            "explanation": "CPA represents the average monetary cost required to generate one successful conversion action (Cost / Conversions)."
          },
          "proTip": "Track both Cost Per Lead (CPL) and Cost Per Qualified Lead (CPQL) to measure downstream customer quality.",
          "commonMistakes": [
            "Evaluating keyword performance solely on CTR without measuring conversion volume and CPA.",
            "Changing bidding strategies multiple times per week before the algorithm completes its learning phase."
          ]
        },
        {
          "id": "sec-4-3",
          "title": "3. Real-World Case Studies & Performance Optimization",
          "difficulty": "Beginner",
          "content": "Consider an emergency home service provider that restructured their account around keywords and search intent. By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, they achieved:\n- **42% Reduction in Cost Per Acquisition (CPA)**\n- **3.1x Lift in Click-Through Rate (CTR)**\n- **95% Lead Contact Rate via Sticky Mobile Click-to-Call CTAs**",
          "explanation": "By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, campaigns achieve dramatic CPA reductions.",
          "codeSnippets": [
            {
              "filename": "module_4_workflow.js",
              "language": "javascript",
              "title": "Keywords and Search Intent — Automated Account Health & Waste Protection Script",
              "code": "// Automated Optimization Routine for Keywords and Search Intent\nfunction executeOptimizationChecklist(accountState) {\n  const actionItems = [];\n\n  if (accountState.searchLostIsBudget > 20) {\n    actionItems.push('High Lost Impression Share (Budget): Increase daily budget or narrow location radius.');\n  }\n  if (accountState.searchLostIsRank > 25) {\n    actionItems.push('High Lost Impression Share (Rank): Improve Quality Score (eCTR, Ad Relevance, Landing Page) or raise bids.');\n  }\n  if (!accountState.hasNegativeList) {\n    actionItems.push('CRITICAL: Attach shared negative keyword list to prevent wasted search query spend.');\n  }\n\n  return {\n    urgency: actionItems.length > 1 ? 'HIGH' : 'STABLE',\n    recommendations: actionItems\n  };\n}\n\nconsole.log(executeOptimizationChecklist({\n  searchLostIsBudget: 35.4,\n  searchLostIsRank: 12.1,\n  hasNegativeList: true\n}));",
              "lineByLine": [
                {
                  "line": "if (accountState.searchLostIsBudget > 20)",
                  "explanation": "Detects budget caps preventing ads from entering profitable auctions."
                },
                {
                  "line": "if (accountState.searchLostIsRank > 25)",
                  "explanation": "Identifies Ad Rank bottlenecks requiring Quality Score or bid intervention."
                },
                {
                  "line": "if (!accountState.hasNegativeList)",
                  "explanation": "Enforces mandatory negative list attachments to preserve budget efficiency."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What does a high 'Search Lost Impression Share (Rank)' indicate in Google Ads reporting?",
            "options": [
              "Ads were not shown due to low Ad Rank (combination of Quality Score and/or maximum bids)",
              "The campaign ran out of daily budget at noon",
              "The Google billing credit card was declined",
              "All competitor advertisers paused their campaigns"
            ],
            "correctAnswer": 0,
            "explanation": "Search Lost IS (Rank) specifically indicates impression opportunities missed because Ad Rank was lower than participating competitors in that auction."
          },
          "proTip": "When Search Lost IS (Rank) is high, first diagnose Quality Score components before immediately inflating Max CPC bids.",
          "commonMistakes": [
            "Assuming low impression share is always solved by increasing budget without checking Lost IS (Rank).",
            "Ignoring search partner network performance disparities."
          ]
        }
      ]
    }
  },
  {
    "id": "gads-beg-05",
    "title": "Keyword Match Types",
    "description": "Master keyword match types with actionable Google Ads frameworks, auction math, and live campaign optimization workflows.",
    "level": "beginner",
    "orderIndex": 5,
    "status": "locked",
    "requiresQuiz": false,
    "type": "theory",
    "duration": "45 mins",
    "xpReward": 120,
    "lessonContent": {
      "overview": "Comprehensive masterclass module covering keyword match types in Google Ads. Learn enterprise frameworks, auction calculations, campaign configuration strategies, and practical optimization workflows.",
      "analogyHero": "Think of keyword match types in Google Ads like an intelligent highway toll system: when properly calibrated with clear signage and fast lanes, high-value commercial traffic converts rapidly while low-intent traffic is filtered out before paying unnecessary tolls.",
      "objectives": [
        "Understand core principles and strategic mechanics of keyword match types",
        "Implement industry-standard configurations and avoid high-cost budget traps",
        "Analyze real-world campaign data, search intent signals, and performance metrics",
        "Execute step-by-step optimization procedures for maximum return on ad spend (ROAS)"
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Always align campaign settings with commercial search intent to prevent wasted ad spend.",
        "Maintain continuous negative keyword management and regular search term query audits.",
        "Prioritize high Quality Score (Expected CTR, Ad Relevance, Landing Page Experience) to minimize Cost Per Click."
      ],
      "summary": "Mastering keyword match types ensures your Google Ads account operates with high efficiency, lower acquisition costs, and scalable profitability.",
      "syntaxGuide": "// Key Metric Formulas:\nCTR = (Clicks / Impressions) * 100\nCPC = Total Cost / Total Clicks\nCVR = (Conversions / Clicks) * 100\nCPA = Total Cost / Total Conversions\nROAS = (Conversion Value / Total Cost) * 100",
      "practiceExercises": [
        {
          "title": "Keyword Match Types Scenario Challenge",
          "instructions": "Analyze a search campaign spending $150/day with 45 clicks, 2 conversions, and $75 CPA against a target CPA of $40. Identify the top 2 bottlenecks and outline immediate corrective actions.",
          "starterCode": "// Enter your diagnostic findings\nconst audit = {\n  cpaVariancePercent: 0,\n  primaryBottleneck: '',\n  remedyPlan: ''\n};",
          "solutionCode": "const audit = {\n  cpaVariancePercent: 87.5,\n  primaryBottleneck: 'Low CVR (4.4%) caused by poor landing page message match or broad query bleed',\n  remedyPlan: 'Add exact match negative exclusions, ensure landing page H1 matches keyword intent, and test sticky mobile CTA'\n};"
        }
      ],
      "sections": [
        {
          "id": "sec-5-1",
          "title": "1. Core Principles & Architecture of Keyword Match Types",
          "difficulty": "Beginner",
          "content": "In Google Ads performance marketing, mastering keyword match types is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.\n\n### Key Architectural Concepts\n- **Intent Alignment**: Every element must correspond directly to the commercial intent of the prospective searcher.\n- **Budget Protection**: Setting precise boundaries ensures ad spend is directed exclusively toward high-probability conversion events.\n- **Data Governance**: Clean naming, structured tracking tags, and disciplined keyword segregation allow machine learning algorithms to optimize effectively.",
          "explanation": "In Google Ads performance marketing, mastering keyword match types is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.",
          "codeSnippets": [
            {
              "filename": "module_5_config.json",
              "language": "json",
              "title": "Keyword Match Types — Strategic Configuration Architecture",
              "code": "{\n  \"module\": \"Keyword Match Types\",\n  \"campaignContext\": \"High-Intent Local Lead Generation\",\n  \"strategicParameters\": {\n    \"networkIsolation\": \"Search Network Only (Disable Display Expansion)\",\n    \"locationTargeting\": \"Presence: People in or regularly in targeted areas\",\n    \"adScheduleDayparting\": \"Mon-Fri 08:00-18:00 with +20% Peak Bid Multiplier\",\n    \"biddingPhase\": \"Manual CPC with eCPC -> Target CPA after 30 conversions\"\n  },\n  \"qualityGuardrails\": {\n    \"minAdStrength\": \"Good or Excellent\",\n    \"negativeKeywordListAttached\": true,\n    \"primaryConversionDefined\": true\n  }\n}",
              "lineByLine": [
                {
                  "line": "\"networkIsolation\": \"Search Network Only\"",
                  "explanation": "Prevents display network leakage from draining search ad budget."
                },
                {
                  "line": "\"locationTargeting\": \"Presence...\"",
                  "explanation": "Restricts ad serving strictly to people physically located inside target areas."
                },
                {
                  "line": "\"primaryConversionDefined\": true",
                  "explanation": "Directs Smart Bidding algorithm only toward verified high-value actions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why is strict network isolation important when configuring a Search campaign?",
            "options": [
              "It prevents the campaign from spending budget on passive Display network placements with lower conversion intent",
              "It increases campaign daily budget automatically by 50%",
              "It translates ad headlines into multiple foreign languages",
              "It prevents users from using Google Chrome browser"
            ],
            "correctAnswer": 0,
            "explanation": "Disabling Display expansion prevents high-intent search budgets from being diluted on un-targeted third-party display banner placements."
          },
          "proTip": "Always separate Search and Display campaigns into completely distinct campaigns with dedicated budgets.",
          "commonMistakes": [
            "Leaving 'Include Google Display Network' checked in a Search campaign.",
            "Using 'Presence or Interest' location targeting instead of 'Presence: People in or regularly in your targeted locations'."
          ]
        },
        {
          "id": "sec-5-2",
          "title": "2. Strategic Execution & Step-by-Step Implementation",
          "difficulty": "Beginner",
          "content": "Implementing keyword match types requires a systematic, repeatable framework:\n\n1. **Audit & Research**: Gather baseline query volume, competitor benchmarks, historical CPC averages, and customer conversion rates.\n2. **Structural Setup**: Configure campaigns with exact geographic boundaries, language restrictions, and isolated network distributions.\n3. **Continuous Refinement**: Monitor Search Term reports weekly, sculpt negative keyword lists, and adjust bids based on device and schedule performance.",
          "explanation": "Implementing keyword match types requires a systematic, repeatable framework across keyword scoping, campaign settings, and weekly query hygiene.",
          "codeSnippets": [
            {
              "filename": "module_5_optimizer.ts",
              "language": "typescript",
              "title": "Keyword Match Types — Real-Time Unit Economics & Metric Evaluator",
              "code": "// Practical Calculation & Audit Logic for Keyword Match Types\nexport interface CampaignMetrics {\n  impressions: number;\n  clicks: number;\n  cost: number;\n  conversions: number;\n}\n\nexport function analyzePerformance(m: CampaignMetrics) {\n  const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));\n  const cpc = Number((m.cost / (m.clicks || 1)).toFixed(2));\n  const cvr = Number(((m.conversions / (m.clicks || 1)) * 100).toFixed(2));\n  const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));\n\n  return {\n    clickThroughRate: `${ctr}%`,\n    averageCpc: `$${cpc}`,\n    conversionRate: `${cvr}%`,\n    costPerAcquisition: `$${cpa}`,\n    healthStatus: ctr >= 3.5 && cvr >= 8.0 ? 'HEALTHY_SCALE' : 'OPTIMIZE_COPY_AND_LP'\n  };\n}\n\n// Example evaluation: 1,200 clicks, $4,800 spend, 135 conversions\nconsole.log(analyzePerformance({ impressions: 22000, clicks: 1200, cost: 4800, conversions: 135 }));",
              "lineByLine": [
                {
                  "line": "const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));",
                  "explanation": "Calculates click-through rate percentage to evaluate creative appeal."
                },
                {
                  "line": "const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));",
                  "explanation": "Calculates true cost per acquisition across all conversion actions."
                },
                {
                  "line": "healthStatus: ctr >= 3.5 && cvr >= 8.0 ? ...",
                  "explanation": "Automates account diagnostics against industry performance benchmarks."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "How is Cost Per Acquisition (CPA) calculated in performance marketing reporting?",
            "options": [
              "Total Cost divided by Total Conversions",
              "Total Clicks multiplied by Total Impressions",
              "Total Conversions divided by Total Impressions",
              "Total Cost minus Total Revenue"
            ],
            "correctAnswer": 0,
            "explanation": "CPA represents the average monetary cost required to generate one successful conversion action (Cost / Conversions)."
          },
          "proTip": "Track both Cost Per Lead (CPL) and Cost Per Qualified Lead (CPQL) to measure downstream customer quality.",
          "commonMistakes": [
            "Evaluating keyword performance solely on CTR without measuring conversion volume and CPA.",
            "Changing bidding strategies multiple times per week before the algorithm completes its learning phase."
          ]
        },
        {
          "id": "sec-5-3",
          "title": "3. Real-World Case Studies & Performance Optimization",
          "difficulty": "Beginner",
          "content": "Consider an emergency home service provider that restructured their account around keyword match types. By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, they achieved:\n- **42% Reduction in Cost Per Acquisition (CPA)**\n- **3.1x Lift in Click-Through Rate (CTR)**\n- **95% Lead Contact Rate via Sticky Mobile Click-to-Call CTAs**",
          "explanation": "By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, campaigns achieve dramatic CPA reductions.",
          "codeSnippets": [
            {
              "filename": "module_5_workflow.js",
              "language": "javascript",
              "title": "Keyword Match Types — Automated Account Health & Waste Protection Script",
              "code": "// Automated Optimization Routine for Keyword Match Types\nfunction executeOptimizationChecklist(accountState) {\n  const actionItems = [];\n\n  if (accountState.searchLostIsBudget > 20) {\n    actionItems.push('High Lost Impression Share (Budget): Increase daily budget or narrow location radius.');\n  }\n  if (accountState.searchLostIsRank > 25) {\n    actionItems.push('High Lost Impression Share (Rank): Improve Quality Score (eCTR, Ad Relevance, Landing Page) or raise bids.');\n  }\n  if (!accountState.hasNegativeList) {\n    actionItems.push('CRITICAL: Attach shared negative keyword list to prevent wasted search query spend.');\n  }\n\n  return {\n    urgency: actionItems.length > 1 ? 'HIGH' : 'STABLE',\n    recommendations: actionItems\n  };\n}\n\nconsole.log(executeOptimizationChecklist({\n  searchLostIsBudget: 35.4,\n  searchLostIsRank: 12.1,\n  hasNegativeList: true\n}));",
              "lineByLine": [
                {
                  "line": "if (accountState.searchLostIsBudget > 20)",
                  "explanation": "Detects budget caps preventing ads from entering profitable auctions."
                },
                {
                  "line": "if (accountState.searchLostIsRank > 25)",
                  "explanation": "Identifies Ad Rank bottlenecks requiring Quality Score or bid intervention."
                },
                {
                  "line": "if (!accountState.hasNegativeList)",
                  "explanation": "Enforces mandatory negative list attachments to preserve budget efficiency."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What does a high 'Search Lost Impression Share (Rank)' indicate in Google Ads reporting?",
            "options": [
              "Ads were not shown due to low Ad Rank (combination of Quality Score and/or maximum bids)",
              "The campaign ran out of daily budget at noon",
              "The Google billing credit card was declined",
              "All competitor advertisers paused their campaigns"
            ],
            "correctAnswer": 0,
            "explanation": "Search Lost IS (Rank) specifically indicates impression opportunities missed because Ad Rank was lower than participating competitors in that auction."
          },
          "proTip": "When Search Lost IS (Rank) is high, first diagnose Quality Score components before immediately inflating Max CPC bids.",
          "commonMistakes": [
            "Assuming low impression share is always solved by increasing budget without checking Lost IS (Rank).",
            "Ignoring search partner network performance disparities."
          ]
        }
      ]
    }
  },
  {
    "id": "gads-beg-06",
    "title": "Negative Keywords and Traffic Control",
    "description": "Master negative keywords and traffic control with actionable Google Ads frameworks, auction math, and live campaign optimization workflows.",
    "level": "beginner",
    "orderIndex": 6,
    "status": "locked",
    "requiresQuiz": false,
    "type": "theory",
    "duration": "45 mins",
    "xpReward": 120,
    "lessonContent": {
      "overview": "Comprehensive masterclass module covering negative keywords and traffic control in Google Ads. Learn enterprise frameworks, auction calculations, campaign configuration strategies, and practical optimization workflows.",
      "analogyHero": "Think of negative keywords and traffic control in Google Ads like an intelligent highway toll system: when properly calibrated with clear signage and fast lanes, high-value commercial traffic converts rapidly while low-intent traffic is filtered out before paying unnecessary tolls.",
      "objectives": [
        "Understand core principles and strategic mechanics of negative keywords and traffic control",
        "Implement industry-standard configurations and avoid high-cost budget traps",
        "Analyze real-world campaign data, search intent signals, and performance metrics",
        "Execute step-by-step optimization procedures for maximum return on ad spend (ROAS)"
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Always align campaign settings with commercial search intent to prevent wasted ad spend.",
        "Maintain continuous negative keyword management and regular search term query audits.",
        "Prioritize high Quality Score (Expected CTR, Ad Relevance, Landing Page Experience) to minimize Cost Per Click."
      ],
      "summary": "Mastering negative keywords and traffic control ensures your Google Ads account operates with high efficiency, lower acquisition costs, and scalable profitability.",
      "syntaxGuide": "// Key Metric Formulas:\nCTR = (Clicks / Impressions) * 100\nCPC = Total Cost / Total Clicks\nCVR = (Conversions / Clicks) * 100\nCPA = Total Cost / Total Conversions\nROAS = (Conversion Value / Total Cost) * 100",
      "practiceExercises": [
        {
          "title": "Negative Keywords and Traffic Control Scenario Challenge",
          "instructions": "Analyze a search campaign spending $150/day with 45 clicks, 2 conversions, and $75 CPA against a target CPA of $40. Identify the top 2 bottlenecks and outline immediate corrective actions.",
          "starterCode": "// Enter your diagnostic findings\nconst audit = {\n  cpaVariancePercent: 0,\n  primaryBottleneck: '',\n  remedyPlan: ''\n};",
          "solutionCode": "const audit = {\n  cpaVariancePercent: 87.5,\n  primaryBottleneck: 'Low CVR (4.4%) caused by poor landing page message match or broad query bleed',\n  remedyPlan: 'Add exact match negative exclusions, ensure landing page H1 matches keyword intent, and test sticky mobile CTA'\n};"
        }
      ],
      "sections": [
        {
          "id": "sec-6-1",
          "title": "1. Core Principles & Architecture of Negative Keywords and Traffic Control",
          "difficulty": "Beginner",
          "content": "In Google Ads performance marketing, mastering negative keywords and traffic control is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.\n\n### Key Architectural Concepts\n- **Intent Alignment**: Every element must correspond directly to the commercial intent of the prospective searcher.\n- **Budget Protection**: Setting precise boundaries ensures ad spend is directed exclusively toward high-probability conversion events.\n- **Data Governance**: Clean naming, structured tracking tags, and disciplined keyword segregation allow machine learning algorithms to optimize effectively.",
          "explanation": "In Google Ads performance marketing, mastering negative keywords and traffic control is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.",
          "codeSnippets": [
            {
              "filename": "module_6_config.json",
              "language": "json",
              "title": "Negative Keywords and Traffic Control — Strategic Configuration Architecture",
              "code": "{\n  \"module\": \"Negative Keywords and Traffic Control\",\n  \"campaignContext\": \"High-Intent Local Lead Generation\",\n  \"strategicParameters\": {\n    \"networkIsolation\": \"Search Network Only (Disable Display Expansion)\",\n    \"locationTargeting\": \"Presence: People in or regularly in targeted areas\",\n    \"adScheduleDayparting\": \"Mon-Fri 08:00-18:00 with +20% Peak Bid Multiplier\",\n    \"biddingPhase\": \"Manual CPC with eCPC -> Target CPA after 30 conversions\"\n  },\n  \"qualityGuardrails\": {\n    \"minAdStrength\": \"Good or Excellent\",\n    \"negativeKeywordListAttached\": true,\n    \"primaryConversionDefined\": true\n  }\n}",
              "lineByLine": [
                {
                  "line": "\"networkIsolation\": \"Search Network Only\"",
                  "explanation": "Prevents display network leakage from draining search ad budget."
                },
                {
                  "line": "\"locationTargeting\": \"Presence...\"",
                  "explanation": "Restricts ad serving strictly to people physically located inside target areas."
                },
                {
                  "line": "\"primaryConversionDefined\": true",
                  "explanation": "Directs Smart Bidding algorithm only toward verified high-value actions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why is strict network isolation important when configuring a Search campaign?",
            "options": [
              "It prevents the campaign from spending budget on passive Display network placements with lower conversion intent",
              "It increases campaign daily budget automatically by 50%",
              "It translates ad headlines into multiple foreign languages",
              "It prevents users from using Google Chrome browser"
            ],
            "correctAnswer": 0,
            "explanation": "Disabling Display expansion prevents high-intent search budgets from being diluted on un-targeted third-party display banner placements."
          },
          "proTip": "Always separate Search and Display campaigns into completely distinct campaigns with dedicated budgets.",
          "commonMistakes": [
            "Leaving 'Include Google Display Network' checked in a Search campaign.",
            "Using 'Presence or Interest' location targeting instead of 'Presence: People in or regularly in your targeted locations'."
          ]
        },
        {
          "id": "sec-6-2",
          "title": "2. Strategic Execution & Step-by-Step Implementation",
          "difficulty": "Beginner",
          "content": "Implementing negative keywords and traffic control requires a systematic, repeatable framework:\n\n1. **Audit & Research**: Gather baseline query volume, competitor benchmarks, historical CPC averages, and customer conversion rates.\n2. **Structural Setup**: Configure campaigns with exact geographic boundaries, language restrictions, and isolated network distributions.\n3. **Continuous Refinement**: Monitor Search Term reports weekly, sculpt negative keyword lists, and adjust bids based on device and schedule performance.",
          "explanation": "Implementing negative keywords and traffic control requires a systematic, repeatable framework across keyword scoping, campaign settings, and weekly query hygiene.",
          "codeSnippets": [
            {
              "filename": "module_6_optimizer.ts",
              "language": "typescript",
              "title": "Negative Keywords and Traffic Control — Real-Time Unit Economics & Metric Evaluator",
              "code": "// Practical Calculation & Audit Logic for Negative Keywords and Traffic Control\nexport interface CampaignMetrics {\n  impressions: number;\n  clicks: number;\n  cost: number;\n  conversions: number;\n}\n\nexport function analyzePerformance(m: CampaignMetrics) {\n  const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));\n  const cpc = Number((m.cost / (m.clicks || 1)).toFixed(2));\n  const cvr = Number(((m.conversions / (m.clicks || 1)) * 100).toFixed(2));\n  const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));\n\n  return {\n    clickThroughRate: `${ctr}%`,\n    averageCpc: `$${cpc}`,\n    conversionRate: `${cvr}%`,\n    costPerAcquisition: `$${cpa}`,\n    healthStatus: ctr >= 3.5 && cvr >= 8.0 ? 'HEALTHY_SCALE' : 'OPTIMIZE_COPY_AND_LP'\n  };\n}\n\n// Example evaluation: 1,200 clicks, $4,800 spend, 135 conversions\nconsole.log(analyzePerformance({ impressions: 22000, clicks: 1200, cost: 4800, conversions: 135 }));",
              "lineByLine": [
                {
                  "line": "const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));",
                  "explanation": "Calculates click-through rate percentage to evaluate creative appeal."
                },
                {
                  "line": "const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));",
                  "explanation": "Calculates true cost per acquisition across all conversion actions."
                },
                {
                  "line": "healthStatus: ctr >= 3.5 && cvr >= 8.0 ? ...",
                  "explanation": "Automates account diagnostics against industry performance benchmarks."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "How is Cost Per Acquisition (CPA) calculated in performance marketing reporting?",
            "options": [
              "Total Cost divided by Total Conversions",
              "Total Clicks multiplied by Total Impressions",
              "Total Conversions divided by Total Impressions",
              "Total Cost minus Total Revenue"
            ],
            "correctAnswer": 0,
            "explanation": "CPA represents the average monetary cost required to generate one successful conversion action (Cost / Conversions)."
          },
          "proTip": "Track both Cost Per Lead (CPL) and Cost Per Qualified Lead (CPQL) to measure downstream customer quality.",
          "commonMistakes": [
            "Evaluating keyword performance solely on CTR without measuring conversion volume and CPA.",
            "Changing bidding strategies multiple times per week before the algorithm completes its learning phase."
          ]
        },
        {
          "id": "sec-6-3",
          "title": "3. Real-World Case Studies & Performance Optimization",
          "difficulty": "Beginner",
          "content": "Consider an emergency home service provider that restructured their account around negative keywords and traffic control. By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, they achieved:\n- **42% Reduction in Cost Per Acquisition (CPA)**\n- **3.1x Lift in Click-Through Rate (CTR)**\n- **95% Lead Contact Rate via Sticky Mobile Click-to-Call CTAs**",
          "explanation": "By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, campaigns achieve dramatic CPA reductions.",
          "codeSnippets": [
            {
              "filename": "module_6_workflow.js",
              "language": "javascript",
              "title": "Negative Keywords and Traffic Control — Automated Account Health & Waste Protection Script",
              "code": "// Automated Optimization Routine for Negative Keywords and Traffic Control\nfunction executeOptimizationChecklist(accountState) {\n  const actionItems = [];\n\n  if (accountState.searchLostIsBudget > 20) {\n    actionItems.push('High Lost Impression Share (Budget): Increase daily budget or narrow location radius.');\n  }\n  if (accountState.searchLostIsRank > 25) {\n    actionItems.push('High Lost Impression Share (Rank): Improve Quality Score (eCTR, Ad Relevance, Landing Page) or raise bids.');\n  }\n  if (!accountState.hasNegativeList) {\n    actionItems.push('CRITICAL: Attach shared negative keyword list to prevent wasted search query spend.');\n  }\n\n  return {\n    urgency: actionItems.length > 1 ? 'HIGH' : 'STABLE',\n    recommendations: actionItems\n  };\n}\n\nconsole.log(executeOptimizationChecklist({\n  searchLostIsBudget: 35.4,\n  searchLostIsRank: 12.1,\n  hasNegativeList: true\n}));",
              "lineByLine": [
                {
                  "line": "if (accountState.searchLostIsBudget > 20)",
                  "explanation": "Detects budget caps preventing ads from entering profitable auctions."
                },
                {
                  "line": "if (accountState.searchLostIsRank > 25)",
                  "explanation": "Identifies Ad Rank bottlenecks requiring Quality Score or bid intervention."
                },
                {
                  "line": "if (!accountState.hasNegativeList)",
                  "explanation": "Enforces mandatory negative list attachments to preserve budget efficiency."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What does a high 'Search Lost Impression Share (Rank)' indicate in Google Ads reporting?",
            "options": [
              "Ads were not shown due to low Ad Rank (combination of Quality Score and/or maximum bids)",
              "The campaign ran out of daily budget at noon",
              "The Google billing credit card was declined",
              "All competitor advertisers paused their campaigns"
            ],
            "correctAnswer": 0,
            "explanation": "Search Lost IS (Rank) specifically indicates impression opportunities missed because Ad Rank was lower than participating competitors in that auction."
          },
          "proTip": "When Search Lost IS (Rank) is high, first diagnose Quality Score components before immediately inflating Max CPC bids.",
          "commonMistakes": [
            "Assuming low impression share is always solved by increasing budget without checking Lost IS (Rank).",
            "Ignoring search partner network performance disparities."
          ]
        }
      ]
    }
  },
  {
    "id": "gads-beg-07",
    "title": "Search Ads and Responsive Search Ads",
    "description": "Master search ads and responsive search ads with actionable Google Ads frameworks, auction math, and live campaign optimization workflows.",
    "level": "beginner",
    "orderIndex": 7,
    "status": "locked",
    "requiresQuiz": false,
    "type": "theory",
    "duration": "45 mins",
    "xpReward": 120,
    "lessonContent": {
      "overview": "Comprehensive masterclass module covering search ads and responsive search ads in Google Ads. Learn enterprise frameworks, auction calculations, campaign configuration strategies, and practical optimization workflows.",
      "analogyHero": "Think of search ads and responsive search ads in Google Ads like an intelligent highway toll system: when properly calibrated with clear signage and fast lanes, high-value commercial traffic converts rapidly while low-intent traffic is filtered out before paying unnecessary tolls.",
      "objectives": [
        "Understand core principles and strategic mechanics of search ads and responsive search ads",
        "Implement industry-standard configurations and avoid high-cost budget traps",
        "Analyze real-world campaign data, search intent signals, and performance metrics",
        "Execute step-by-step optimization procedures for maximum return on ad spend (ROAS)"
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Always align campaign settings with commercial search intent to prevent wasted ad spend.",
        "Maintain continuous negative keyword management and regular search term query audits.",
        "Prioritize high Quality Score (Expected CTR, Ad Relevance, Landing Page Experience) to minimize Cost Per Click."
      ],
      "summary": "Mastering search ads and responsive search ads ensures your Google Ads account operates with high efficiency, lower acquisition costs, and scalable profitability.",
      "syntaxGuide": "// Key Metric Formulas:\nCTR = (Clicks / Impressions) * 100\nCPC = Total Cost / Total Clicks\nCVR = (Conversions / Clicks) * 100\nCPA = Total Cost / Total Conversions\nROAS = (Conversion Value / Total Cost) * 100",
      "practiceExercises": [
        {
          "title": "Search Ads and Responsive Search Ads Scenario Challenge",
          "instructions": "Analyze a search campaign spending $150/day with 45 clicks, 2 conversions, and $75 CPA against a target CPA of $40. Identify the top 2 bottlenecks and outline immediate corrective actions.",
          "starterCode": "// Enter your diagnostic findings\nconst audit = {\n  cpaVariancePercent: 0,\n  primaryBottleneck: '',\n  remedyPlan: ''\n};",
          "solutionCode": "const audit = {\n  cpaVariancePercent: 87.5,\n  primaryBottleneck: 'Low CVR (4.4%) caused by poor landing page message match or broad query bleed',\n  remedyPlan: 'Add exact match negative exclusions, ensure landing page H1 matches keyword intent, and test sticky mobile CTA'\n};"
        }
      ],
      "sections": [
        {
          "id": "sec-7-1",
          "title": "1. Core Principles & Architecture of Search Ads and Responsive Search Ads",
          "difficulty": "Beginner",
          "content": "In Google Ads performance marketing, mastering search ads and responsive search ads is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.\n\n### Key Architectural Concepts\n- **Intent Alignment**: Every element must correspond directly to the commercial intent of the prospective searcher.\n- **Budget Protection**: Setting precise boundaries ensures ad spend is directed exclusively toward high-probability conversion events.\n- **Data Governance**: Clean naming, structured tracking tags, and disciplined keyword segregation allow machine learning algorithms to optimize effectively.",
          "explanation": "In Google Ads performance marketing, mastering search ads and responsive search ads is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.",
          "codeSnippets": [
            {
              "filename": "module_7_config.json",
              "language": "json",
              "title": "Search Ads and Responsive Search Ads — Strategic Configuration Architecture",
              "code": "{\n  \"module\": \"Search Ads and Responsive Search Ads\",\n  \"campaignContext\": \"High-Intent Local Lead Generation\",\n  \"strategicParameters\": {\n    \"networkIsolation\": \"Search Network Only (Disable Display Expansion)\",\n    \"locationTargeting\": \"Presence: People in or regularly in targeted areas\",\n    \"adScheduleDayparting\": \"Mon-Fri 08:00-18:00 with +20% Peak Bid Multiplier\",\n    \"biddingPhase\": \"Manual CPC with eCPC -> Target CPA after 30 conversions\"\n  },\n  \"qualityGuardrails\": {\n    \"minAdStrength\": \"Good or Excellent\",\n    \"negativeKeywordListAttached\": true,\n    \"primaryConversionDefined\": true\n  }\n}",
              "lineByLine": [
                {
                  "line": "\"networkIsolation\": \"Search Network Only\"",
                  "explanation": "Prevents display network leakage from draining search ad budget."
                },
                {
                  "line": "\"locationTargeting\": \"Presence...\"",
                  "explanation": "Restricts ad serving strictly to people physically located inside target areas."
                },
                {
                  "line": "\"primaryConversionDefined\": true",
                  "explanation": "Directs Smart Bidding algorithm only toward verified high-value actions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why is strict network isolation important when configuring a Search campaign?",
            "options": [
              "It prevents the campaign from spending budget on passive Display network placements with lower conversion intent",
              "It increases campaign daily budget automatically by 50%",
              "It translates ad headlines into multiple foreign languages",
              "It prevents users from using Google Chrome browser"
            ],
            "correctAnswer": 0,
            "explanation": "Disabling Display expansion prevents high-intent search budgets from being diluted on un-targeted third-party display banner placements."
          },
          "proTip": "Always separate Search and Display campaigns into completely distinct campaigns with dedicated budgets.",
          "commonMistakes": [
            "Leaving 'Include Google Display Network' checked in a Search campaign.",
            "Using 'Presence or Interest' location targeting instead of 'Presence: People in or regularly in your targeted locations'."
          ]
        },
        {
          "id": "sec-7-2",
          "title": "2. Strategic Execution & Step-by-Step Implementation",
          "difficulty": "Beginner",
          "content": "Implementing search ads and responsive search ads requires a systematic, repeatable framework:\n\n1. **Audit & Research**: Gather baseline query volume, competitor benchmarks, historical CPC averages, and customer conversion rates.\n2. **Structural Setup**: Configure campaigns with exact geographic boundaries, language restrictions, and isolated network distributions.\n3. **Continuous Refinement**: Monitor Search Term reports weekly, sculpt negative keyword lists, and adjust bids based on device and schedule performance.",
          "explanation": "Implementing search ads and responsive search ads requires a systematic, repeatable framework across keyword scoping, campaign settings, and weekly query hygiene.",
          "codeSnippets": [
            {
              "filename": "module_7_optimizer.ts",
              "language": "typescript",
              "title": "Search Ads and Responsive Search Ads — Real-Time Unit Economics & Metric Evaluator",
              "code": "// Practical Calculation & Audit Logic for Search Ads and Responsive Search Ads\nexport interface CampaignMetrics {\n  impressions: number;\n  clicks: number;\n  cost: number;\n  conversions: number;\n}\n\nexport function analyzePerformance(m: CampaignMetrics) {\n  const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));\n  const cpc = Number((m.cost / (m.clicks || 1)).toFixed(2));\n  const cvr = Number(((m.conversions / (m.clicks || 1)) * 100).toFixed(2));\n  const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));\n\n  return {\n    clickThroughRate: `${ctr}%`,\n    averageCpc: `$${cpc}`,\n    conversionRate: `${cvr}%`,\n    costPerAcquisition: `$${cpa}`,\n    healthStatus: ctr >= 3.5 && cvr >= 8.0 ? 'HEALTHY_SCALE' : 'OPTIMIZE_COPY_AND_LP'\n  };\n}\n\n// Example evaluation: 1,200 clicks, $4,800 spend, 135 conversions\nconsole.log(analyzePerformance({ impressions: 22000, clicks: 1200, cost: 4800, conversions: 135 }));",
              "lineByLine": [
                {
                  "line": "const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));",
                  "explanation": "Calculates click-through rate percentage to evaluate creative appeal."
                },
                {
                  "line": "const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));",
                  "explanation": "Calculates true cost per acquisition across all conversion actions."
                },
                {
                  "line": "healthStatus: ctr >= 3.5 && cvr >= 8.0 ? ...",
                  "explanation": "Automates account diagnostics against industry performance benchmarks."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "How is Cost Per Acquisition (CPA) calculated in performance marketing reporting?",
            "options": [
              "Total Cost divided by Total Conversions",
              "Total Clicks multiplied by Total Impressions",
              "Total Conversions divided by Total Impressions",
              "Total Cost minus Total Revenue"
            ],
            "correctAnswer": 0,
            "explanation": "CPA represents the average monetary cost required to generate one successful conversion action (Cost / Conversions)."
          },
          "proTip": "Track both Cost Per Lead (CPL) and Cost Per Qualified Lead (CPQL) to measure downstream customer quality.",
          "commonMistakes": [
            "Evaluating keyword performance solely on CTR without measuring conversion volume and CPA.",
            "Changing bidding strategies multiple times per week before the algorithm completes its learning phase."
          ]
        },
        {
          "id": "sec-7-3",
          "title": "3. Real-World Case Studies & Performance Optimization",
          "difficulty": "Beginner",
          "content": "Consider an emergency home service provider that restructured their account around search ads and responsive search ads. By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, they achieved:\n- **42% Reduction in Cost Per Acquisition (CPA)**\n- **3.1x Lift in Click-Through Rate (CTR)**\n- **95% Lead Contact Rate via Sticky Mobile Click-to-Call CTAs**",
          "explanation": "By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, campaigns achieve dramatic CPA reductions.",
          "codeSnippets": [
            {
              "filename": "module_7_workflow.js",
              "language": "javascript",
              "title": "Search Ads and Responsive Search Ads — Automated Account Health & Waste Protection Script",
              "code": "// Automated Optimization Routine for Search Ads and Responsive Search Ads\nfunction executeOptimizationChecklist(accountState) {\n  const actionItems = [];\n\n  if (accountState.searchLostIsBudget > 20) {\n    actionItems.push('High Lost Impression Share (Budget): Increase daily budget or narrow location radius.');\n  }\n  if (accountState.searchLostIsRank > 25) {\n    actionItems.push('High Lost Impression Share (Rank): Improve Quality Score (eCTR, Ad Relevance, Landing Page) or raise bids.');\n  }\n  if (!accountState.hasNegativeList) {\n    actionItems.push('CRITICAL: Attach shared negative keyword list to prevent wasted search query spend.');\n  }\n\n  return {\n    urgency: actionItems.length > 1 ? 'HIGH' : 'STABLE',\n    recommendations: actionItems\n  };\n}\n\nconsole.log(executeOptimizationChecklist({\n  searchLostIsBudget: 35.4,\n  searchLostIsRank: 12.1,\n  hasNegativeList: true\n}));",
              "lineByLine": [
                {
                  "line": "if (accountState.searchLostIsBudget > 20)",
                  "explanation": "Detects budget caps preventing ads from entering profitable auctions."
                },
                {
                  "line": "if (accountState.searchLostIsRank > 25)",
                  "explanation": "Identifies Ad Rank bottlenecks requiring Quality Score or bid intervention."
                },
                {
                  "line": "if (!accountState.hasNegativeList)",
                  "explanation": "Enforces mandatory negative list attachments to preserve budget efficiency."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What does a high 'Search Lost Impression Share (Rank)' indicate in Google Ads reporting?",
            "options": [
              "Ads were not shown due to low Ad Rank (combination of Quality Score and/or maximum bids)",
              "The campaign ran out of daily budget at noon",
              "The Google billing credit card was declined",
              "All competitor advertisers paused their campaigns"
            ],
            "correctAnswer": 0,
            "explanation": "Search Lost IS (Rank) specifically indicates impression opportunities missed because Ad Rank was lower than participating competitors in that auction."
          },
          "proTip": "When Search Lost IS (Rank) is high, first diagnose Quality Score components before immediately inflating Max CPC bids.",
          "commonMistakes": [
            "Assuming low impression share is always solved by increasing budget without checking Lost IS (Rank).",
            "Ignoring search partner network performance disparities."
          ]
        }
      ]
    }
  },
  {
    "id": "gads-beg-08",
    "title": "Ad Assets and Extensions",
    "description": "Master ad assets and extensions with actionable Google Ads frameworks, auction math, and live campaign optimization workflows.",
    "level": "beginner",
    "orderIndex": 8,
    "status": "locked",
    "requiresQuiz": false,
    "type": "theory",
    "duration": "45 mins",
    "xpReward": 120,
    "lessonContent": {
      "overview": "Comprehensive masterclass module covering ad assets and extensions in Google Ads. Learn enterprise frameworks, auction calculations, campaign configuration strategies, and practical optimization workflows.",
      "analogyHero": "Think of ad assets and extensions in Google Ads like an intelligent highway toll system: when properly calibrated with clear signage and fast lanes, high-value commercial traffic converts rapidly while low-intent traffic is filtered out before paying unnecessary tolls.",
      "objectives": [
        "Understand core principles and strategic mechanics of ad assets and extensions",
        "Implement industry-standard configurations and avoid high-cost budget traps",
        "Analyze real-world campaign data, search intent signals, and performance metrics",
        "Execute step-by-step optimization procedures for maximum return on ad spend (ROAS)"
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Always align campaign settings with commercial search intent to prevent wasted ad spend.",
        "Maintain continuous negative keyword management and regular search term query audits.",
        "Prioritize high Quality Score (Expected CTR, Ad Relevance, Landing Page Experience) to minimize Cost Per Click."
      ],
      "summary": "Mastering ad assets and extensions ensures your Google Ads account operates with high efficiency, lower acquisition costs, and scalable profitability.",
      "syntaxGuide": "// Key Metric Formulas:\nCTR = (Clicks / Impressions) * 100\nCPC = Total Cost / Total Clicks\nCVR = (Conversions / Clicks) * 100\nCPA = Total Cost / Total Conversions\nROAS = (Conversion Value / Total Cost) * 100",
      "practiceExercises": [
        {
          "title": "Ad Assets and Extensions Scenario Challenge",
          "instructions": "Analyze a search campaign spending $150/day with 45 clicks, 2 conversions, and $75 CPA against a target CPA of $40. Identify the top 2 bottlenecks and outline immediate corrective actions.",
          "starterCode": "// Enter your diagnostic findings\nconst audit = {\n  cpaVariancePercent: 0,\n  primaryBottleneck: '',\n  remedyPlan: ''\n};",
          "solutionCode": "const audit = {\n  cpaVariancePercent: 87.5,\n  primaryBottleneck: 'Low CVR (4.4%) caused by poor landing page message match or broad query bleed',\n  remedyPlan: 'Add exact match negative exclusions, ensure landing page H1 matches keyword intent, and test sticky mobile CTA'\n};"
        }
      ],
      "sections": [
        {
          "id": "sec-8-1",
          "title": "1. Core Principles & Architecture of Ad Assets and Extensions",
          "difficulty": "Beginner",
          "content": "In Google Ads performance marketing, mastering ad assets and extensions is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.\n\n### Key Architectural Concepts\n- **Intent Alignment**: Every element must correspond directly to the commercial intent of the prospective searcher.\n- **Budget Protection**: Setting precise boundaries ensures ad spend is directed exclusively toward high-probability conversion events.\n- **Data Governance**: Clean naming, structured tracking tags, and disciplined keyword segregation allow machine learning algorithms to optimize effectively.",
          "explanation": "In Google Ads performance marketing, mastering ad assets and extensions is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.",
          "codeSnippets": [
            {
              "filename": "module_8_config.json",
              "language": "json",
              "title": "Ad Assets and Extensions — Strategic Configuration Architecture",
              "code": "{\n  \"module\": \"Ad Assets and Extensions\",\n  \"campaignContext\": \"High-Intent Local Lead Generation\",\n  \"strategicParameters\": {\n    \"networkIsolation\": \"Search Network Only (Disable Display Expansion)\",\n    \"locationTargeting\": \"Presence: People in or regularly in targeted areas\",\n    \"adScheduleDayparting\": \"Mon-Fri 08:00-18:00 with +20% Peak Bid Multiplier\",\n    \"biddingPhase\": \"Manual CPC with eCPC -> Target CPA after 30 conversions\"\n  },\n  \"qualityGuardrails\": {\n    \"minAdStrength\": \"Good or Excellent\",\n    \"negativeKeywordListAttached\": true,\n    \"primaryConversionDefined\": true\n  }\n}",
              "lineByLine": [
                {
                  "line": "\"networkIsolation\": \"Search Network Only\"",
                  "explanation": "Prevents display network leakage from draining search ad budget."
                },
                {
                  "line": "\"locationTargeting\": \"Presence...\"",
                  "explanation": "Restricts ad serving strictly to people physically located inside target areas."
                },
                {
                  "line": "\"primaryConversionDefined\": true",
                  "explanation": "Directs Smart Bidding algorithm only toward verified high-value actions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why is strict network isolation important when configuring a Search campaign?",
            "options": [
              "It prevents the campaign from spending budget on passive Display network placements with lower conversion intent",
              "It increases campaign daily budget automatically by 50%",
              "It translates ad headlines into multiple foreign languages",
              "It prevents users from using Google Chrome browser"
            ],
            "correctAnswer": 0,
            "explanation": "Disabling Display expansion prevents high-intent search budgets from being diluted on un-targeted third-party display banner placements."
          },
          "proTip": "Always separate Search and Display campaigns into completely distinct campaigns with dedicated budgets.",
          "commonMistakes": [
            "Leaving 'Include Google Display Network' checked in a Search campaign.",
            "Using 'Presence or Interest' location targeting instead of 'Presence: People in or regularly in your targeted locations'."
          ]
        },
        {
          "id": "sec-8-2",
          "title": "2. Strategic Execution & Step-by-Step Implementation",
          "difficulty": "Beginner",
          "content": "Implementing ad assets and extensions requires a systematic, repeatable framework:\n\n1. **Audit & Research**: Gather baseline query volume, competitor benchmarks, historical CPC averages, and customer conversion rates.\n2. **Structural Setup**: Configure campaigns with exact geographic boundaries, language restrictions, and isolated network distributions.\n3. **Continuous Refinement**: Monitor Search Term reports weekly, sculpt negative keyword lists, and adjust bids based on device and schedule performance.",
          "explanation": "Implementing ad assets and extensions requires a systematic, repeatable framework across keyword scoping, campaign settings, and weekly query hygiene.",
          "codeSnippets": [
            {
              "filename": "module_8_optimizer.ts",
              "language": "typescript",
              "title": "Ad Assets and Extensions — Real-Time Unit Economics & Metric Evaluator",
              "code": "// Practical Calculation & Audit Logic for Ad Assets and Extensions\nexport interface CampaignMetrics {\n  impressions: number;\n  clicks: number;\n  cost: number;\n  conversions: number;\n}\n\nexport function analyzePerformance(m: CampaignMetrics) {\n  const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));\n  const cpc = Number((m.cost / (m.clicks || 1)).toFixed(2));\n  const cvr = Number(((m.conversions / (m.clicks || 1)) * 100).toFixed(2));\n  const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));\n\n  return {\n    clickThroughRate: `${ctr}%`,\n    averageCpc: `$${cpc}`,\n    conversionRate: `${cvr}%`,\n    costPerAcquisition: `$${cpa}`,\n    healthStatus: ctr >= 3.5 && cvr >= 8.0 ? 'HEALTHY_SCALE' : 'OPTIMIZE_COPY_AND_LP'\n  };\n}\n\n// Example evaluation: 1,200 clicks, $4,800 spend, 135 conversions\nconsole.log(analyzePerformance({ impressions: 22000, clicks: 1200, cost: 4800, conversions: 135 }));",
              "lineByLine": [
                {
                  "line": "const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));",
                  "explanation": "Calculates click-through rate percentage to evaluate creative appeal."
                },
                {
                  "line": "const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));",
                  "explanation": "Calculates true cost per acquisition across all conversion actions."
                },
                {
                  "line": "healthStatus: ctr >= 3.5 && cvr >= 8.0 ? ...",
                  "explanation": "Automates account diagnostics against industry performance benchmarks."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "How is Cost Per Acquisition (CPA) calculated in performance marketing reporting?",
            "options": [
              "Total Cost divided by Total Conversions",
              "Total Clicks multiplied by Total Impressions",
              "Total Conversions divided by Total Impressions",
              "Total Cost minus Total Revenue"
            ],
            "correctAnswer": 0,
            "explanation": "CPA represents the average monetary cost required to generate one successful conversion action (Cost / Conversions)."
          },
          "proTip": "Track both Cost Per Lead (CPL) and Cost Per Qualified Lead (CPQL) to measure downstream customer quality.",
          "commonMistakes": [
            "Evaluating keyword performance solely on CTR without measuring conversion volume and CPA.",
            "Changing bidding strategies multiple times per week before the algorithm completes its learning phase."
          ]
        },
        {
          "id": "sec-8-3",
          "title": "3. Real-World Case Studies & Performance Optimization",
          "difficulty": "Beginner",
          "content": "Consider an emergency home service provider that restructured their account around ad assets and extensions. By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, they achieved:\n- **42% Reduction in Cost Per Acquisition (CPA)**\n- **3.1x Lift in Click-Through Rate (CTR)**\n- **95% Lead Contact Rate via Sticky Mobile Click-to-Call CTAs**",
          "explanation": "By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, campaigns achieve dramatic CPA reductions.",
          "codeSnippets": [
            {
              "filename": "module_8_workflow.js",
              "language": "javascript",
              "title": "Ad Assets and Extensions — Automated Account Health & Waste Protection Script",
              "code": "// Automated Optimization Routine for Ad Assets and Extensions\nfunction executeOptimizationChecklist(accountState) {\n  const actionItems = [];\n\n  if (accountState.searchLostIsBudget > 20) {\n    actionItems.push('High Lost Impression Share (Budget): Increase daily budget or narrow location radius.');\n  }\n  if (accountState.searchLostIsRank > 25) {\n    actionItems.push('High Lost Impression Share (Rank): Improve Quality Score (eCTR, Ad Relevance, Landing Page) or raise bids.');\n  }\n  if (!accountState.hasNegativeList) {\n    actionItems.push('CRITICAL: Attach shared negative keyword list to prevent wasted search query spend.');\n  }\n\n  return {\n    urgency: actionItems.length > 1 ? 'HIGH' : 'STABLE',\n    recommendations: actionItems\n  };\n}\n\nconsole.log(executeOptimizationChecklist({\n  searchLostIsBudget: 35.4,\n  searchLostIsRank: 12.1,\n  hasNegativeList: true\n}));",
              "lineByLine": [
                {
                  "line": "if (accountState.searchLostIsBudget > 20)",
                  "explanation": "Detects budget caps preventing ads from entering profitable auctions."
                },
                {
                  "line": "if (accountState.searchLostIsRank > 25)",
                  "explanation": "Identifies Ad Rank bottlenecks requiring Quality Score or bid intervention."
                },
                {
                  "line": "if (!accountState.hasNegativeList)",
                  "explanation": "Enforces mandatory negative list attachments to preserve budget efficiency."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What does a high 'Search Lost Impression Share (Rank)' indicate in Google Ads reporting?",
            "options": [
              "Ads were not shown due to low Ad Rank (combination of Quality Score and/or maximum bids)",
              "The campaign ran out of daily budget at noon",
              "The Google billing credit card was declined",
              "All competitor advertisers paused their campaigns"
            ],
            "correctAnswer": 0,
            "explanation": "Search Lost IS (Rank) specifically indicates impression opportunities missed because Ad Rank was lower than participating competitors in that auction."
          },
          "proTip": "When Search Lost IS (Rank) is high, first diagnose Quality Score components before immediately inflating Max CPC bids.",
          "commonMistakes": [
            "Assuming low impression share is always solved by increasing budget without checking Lost IS (Rank).",
            "Ignoring search partner network performance disparities."
          ]
        }
      ]
    }
  },
  {
    "id": "gads-beg-09",
    "title": "Ad Relevance and Landing Page Experience",
    "description": "Master ad relevance and landing page experience with actionable Google Ads frameworks, auction math, and live campaign optimization workflows.",
    "level": "beginner",
    "orderIndex": 9,
    "status": "locked",
    "requiresQuiz": false,
    "type": "theory",
    "duration": "45 mins",
    "xpReward": 120,
    "lessonContent": {
      "overview": "Comprehensive masterclass module covering ad relevance and landing page experience in Google Ads. Learn enterprise frameworks, auction calculations, campaign configuration strategies, and practical optimization workflows.",
      "analogyHero": "Think of ad relevance and landing page experience in Google Ads like an intelligent highway toll system: when properly calibrated with clear signage and fast lanes, high-value commercial traffic converts rapidly while low-intent traffic is filtered out before paying unnecessary tolls.",
      "objectives": [
        "Understand core principles and strategic mechanics of ad relevance and landing page experience",
        "Implement industry-standard configurations and avoid high-cost budget traps",
        "Analyze real-world campaign data, search intent signals, and performance metrics",
        "Execute step-by-step optimization procedures for maximum return on ad spend (ROAS)"
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Always align campaign settings with commercial search intent to prevent wasted ad spend.",
        "Maintain continuous negative keyword management and regular search term query audits.",
        "Prioritize high Quality Score (Expected CTR, Ad Relevance, Landing Page Experience) to minimize Cost Per Click."
      ],
      "summary": "Mastering ad relevance and landing page experience ensures your Google Ads account operates with high efficiency, lower acquisition costs, and scalable profitability.",
      "syntaxGuide": "// Key Metric Formulas:\nCTR = (Clicks / Impressions) * 100\nCPC = Total Cost / Total Clicks\nCVR = (Conversions / Clicks) * 100\nCPA = Total Cost / Total Conversions\nROAS = (Conversion Value / Total Cost) * 100",
      "practiceExercises": [
        {
          "title": "Ad Relevance and Landing Page Experience Scenario Challenge",
          "instructions": "Analyze a search campaign spending $150/day with 45 clicks, 2 conversions, and $75 CPA against a target CPA of $40. Identify the top 2 bottlenecks and outline immediate corrective actions.",
          "starterCode": "// Enter your diagnostic findings\nconst audit = {\n  cpaVariancePercent: 0,\n  primaryBottleneck: '',\n  remedyPlan: ''\n};",
          "solutionCode": "const audit = {\n  cpaVariancePercent: 87.5,\n  primaryBottleneck: 'Low CVR (4.4%) caused by poor landing page message match or broad query bleed',\n  remedyPlan: 'Add exact match negative exclusions, ensure landing page H1 matches keyword intent, and test sticky mobile CTA'\n};"
        }
      ],
      "sections": [
        {
          "id": "sec-9-1",
          "title": "1. Core Principles & Architecture of Ad Relevance and Landing Page Experience",
          "difficulty": "Beginner",
          "content": "In Google Ads performance marketing, mastering ad relevance and landing page experience is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.\n\n### Key Architectural Concepts\n- **Intent Alignment**: Every element must correspond directly to the commercial intent of the prospective searcher.\n- **Budget Protection**: Setting precise boundaries ensures ad spend is directed exclusively toward high-probability conversion events.\n- **Data Governance**: Clean naming, structured tracking tags, and disciplined keyword segregation allow machine learning algorithms to optimize effectively.",
          "explanation": "In Google Ads performance marketing, mastering ad relevance and landing page experience is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.",
          "codeSnippets": [
            {
              "filename": "module_9_config.json",
              "language": "json",
              "title": "Ad Relevance and Landing Page Experience — Strategic Configuration Architecture",
              "code": "{\n  \"module\": \"Ad Relevance and Landing Page Experience\",\n  \"campaignContext\": \"High-Intent Local Lead Generation\",\n  \"strategicParameters\": {\n    \"networkIsolation\": \"Search Network Only (Disable Display Expansion)\",\n    \"locationTargeting\": \"Presence: People in or regularly in targeted areas\",\n    \"adScheduleDayparting\": \"Mon-Fri 08:00-18:00 with +20% Peak Bid Multiplier\",\n    \"biddingPhase\": \"Manual CPC with eCPC -> Target CPA after 30 conversions\"\n  },\n  \"qualityGuardrails\": {\n    \"minAdStrength\": \"Good or Excellent\",\n    \"negativeKeywordListAttached\": true,\n    \"primaryConversionDefined\": true\n  }\n}",
              "lineByLine": [
                {
                  "line": "\"networkIsolation\": \"Search Network Only\"",
                  "explanation": "Prevents display network leakage from draining search ad budget."
                },
                {
                  "line": "\"locationTargeting\": \"Presence...\"",
                  "explanation": "Restricts ad serving strictly to people physically located inside target areas."
                },
                {
                  "line": "\"primaryConversionDefined\": true",
                  "explanation": "Directs Smart Bidding algorithm only toward verified high-value actions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why is strict network isolation important when configuring a Search campaign?",
            "options": [
              "It prevents the campaign from spending budget on passive Display network placements with lower conversion intent",
              "It increases campaign daily budget automatically by 50%",
              "It translates ad headlines into multiple foreign languages",
              "It prevents users from using Google Chrome browser"
            ],
            "correctAnswer": 0,
            "explanation": "Disabling Display expansion prevents high-intent search budgets from being diluted on un-targeted third-party display banner placements."
          },
          "proTip": "Always separate Search and Display campaigns into completely distinct campaigns with dedicated budgets.",
          "commonMistakes": [
            "Leaving 'Include Google Display Network' checked in a Search campaign.",
            "Using 'Presence or Interest' location targeting instead of 'Presence: People in or regularly in your targeted locations'."
          ]
        },
        {
          "id": "sec-9-2",
          "title": "2. Strategic Execution & Step-by-Step Implementation",
          "difficulty": "Beginner",
          "content": "Implementing ad relevance and landing page experience requires a systematic, repeatable framework:\n\n1. **Audit & Research**: Gather baseline query volume, competitor benchmarks, historical CPC averages, and customer conversion rates.\n2. **Structural Setup**: Configure campaigns with exact geographic boundaries, language restrictions, and isolated network distributions.\n3. **Continuous Refinement**: Monitor Search Term reports weekly, sculpt negative keyword lists, and adjust bids based on device and schedule performance.",
          "explanation": "Implementing ad relevance and landing page experience requires a systematic, repeatable framework across keyword scoping, campaign settings, and weekly query hygiene.",
          "codeSnippets": [
            {
              "filename": "module_9_optimizer.ts",
              "language": "typescript",
              "title": "Ad Relevance and Landing Page Experience — Real-Time Unit Economics & Metric Evaluator",
              "code": "// Practical Calculation & Audit Logic for Ad Relevance and Landing Page Experience\nexport interface CampaignMetrics {\n  impressions: number;\n  clicks: number;\n  cost: number;\n  conversions: number;\n}\n\nexport function analyzePerformance(m: CampaignMetrics) {\n  const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));\n  const cpc = Number((m.cost / (m.clicks || 1)).toFixed(2));\n  const cvr = Number(((m.conversions / (m.clicks || 1)) * 100).toFixed(2));\n  const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));\n\n  return {\n    clickThroughRate: `${ctr}%`,\n    averageCpc: `$${cpc}`,\n    conversionRate: `${cvr}%`,\n    costPerAcquisition: `$${cpa}`,\n    healthStatus: ctr >= 3.5 && cvr >= 8.0 ? 'HEALTHY_SCALE' : 'OPTIMIZE_COPY_AND_LP'\n  };\n}\n\n// Example evaluation: 1,200 clicks, $4,800 spend, 135 conversions\nconsole.log(analyzePerformance({ impressions: 22000, clicks: 1200, cost: 4800, conversions: 135 }));",
              "lineByLine": [
                {
                  "line": "const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));",
                  "explanation": "Calculates click-through rate percentage to evaluate creative appeal."
                },
                {
                  "line": "const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));",
                  "explanation": "Calculates true cost per acquisition across all conversion actions."
                },
                {
                  "line": "healthStatus: ctr >= 3.5 && cvr >= 8.0 ? ...",
                  "explanation": "Automates account diagnostics against industry performance benchmarks."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "How is Cost Per Acquisition (CPA) calculated in performance marketing reporting?",
            "options": [
              "Total Cost divided by Total Conversions",
              "Total Clicks multiplied by Total Impressions",
              "Total Conversions divided by Total Impressions",
              "Total Cost minus Total Revenue"
            ],
            "correctAnswer": 0,
            "explanation": "CPA represents the average monetary cost required to generate one successful conversion action (Cost / Conversions)."
          },
          "proTip": "Track both Cost Per Lead (CPL) and Cost Per Qualified Lead (CPQL) to measure downstream customer quality.",
          "commonMistakes": [
            "Evaluating keyword performance solely on CTR without measuring conversion volume and CPA.",
            "Changing bidding strategies multiple times per week before the algorithm completes its learning phase."
          ]
        },
        {
          "id": "sec-9-3",
          "title": "3. Real-World Case Studies & Performance Optimization",
          "difficulty": "Beginner",
          "content": "Consider an emergency home service provider that restructured their account around ad relevance and landing page experience. By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, they achieved:\n- **42% Reduction in Cost Per Acquisition (CPA)**\n- **3.1x Lift in Click-Through Rate (CTR)**\n- **95% Lead Contact Rate via Sticky Mobile Click-to-Call CTAs**",
          "explanation": "By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, campaigns achieve dramatic CPA reductions.",
          "codeSnippets": [
            {
              "filename": "module_9_workflow.js",
              "language": "javascript",
              "title": "Ad Relevance and Landing Page Experience — Automated Account Health & Waste Protection Script",
              "code": "// Automated Optimization Routine for Ad Relevance and Landing Page Experience\nfunction executeOptimizationChecklist(accountState) {\n  const actionItems = [];\n\n  if (accountState.searchLostIsBudget > 20) {\n    actionItems.push('High Lost Impression Share (Budget): Increase daily budget or narrow location radius.');\n  }\n  if (accountState.searchLostIsRank > 25) {\n    actionItems.push('High Lost Impression Share (Rank): Improve Quality Score (eCTR, Ad Relevance, Landing Page) or raise bids.');\n  }\n  if (!accountState.hasNegativeList) {\n    actionItems.push('CRITICAL: Attach shared negative keyword list to prevent wasted search query spend.');\n  }\n\n  return {\n    urgency: actionItems.length > 1 ? 'HIGH' : 'STABLE',\n    recommendations: actionItems\n  };\n}\n\nconsole.log(executeOptimizationChecklist({\n  searchLostIsBudget: 35.4,\n  searchLostIsRank: 12.1,\n  hasNegativeList: true\n}));",
              "lineByLine": [
                {
                  "line": "if (accountState.searchLostIsBudget > 20)",
                  "explanation": "Detects budget caps preventing ads from entering profitable auctions."
                },
                {
                  "line": "if (accountState.searchLostIsRank > 25)",
                  "explanation": "Identifies Ad Rank bottlenecks requiring Quality Score or bid intervention."
                },
                {
                  "line": "if (!accountState.hasNegativeList)",
                  "explanation": "Enforces mandatory negative list attachments to preserve budget efficiency."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What does a high 'Search Lost Impression Share (Rank)' indicate in Google Ads reporting?",
            "options": [
              "Ads were not shown due to low Ad Rank (combination of Quality Score and/or maximum bids)",
              "The campaign ran out of daily budget at noon",
              "The Google billing credit card was declined",
              "All competitor advertisers paused their campaigns"
            ],
            "correctAnswer": 0,
            "explanation": "Search Lost IS (Rank) specifically indicates impression opportunities missed because Ad Rank was lower than participating competitors in that auction."
          },
          "proTip": "When Search Lost IS (Rank) is high, first diagnose Quality Score components before immediately inflating Max CPC bids.",
          "commonMistakes": [
            "Assuming low impression share is always solved by increasing budget without checking Lost IS (Rank).",
            "Ignoring search partner network performance disparities."
          ]
        }
      ]
    }
  },
  {
    "id": "gads-beg-10",
    "title": "Budgets, Bidding, and Daily Spend",
    "description": "Master budgets, bidding, and daily spend with actionable Google Ads frameworks, auction math, and live campaign optimization workflows.",
    "level": "beginner",
    "orderIndex": 10,
    "status": "locked",
    "requiresQuiz": false,
    "type": "theory",
    "duration": "45 mins",
    "xpReward": 120,
    "lessonContent": {
      "overview": "Comprehensive masterclass module covering budgets, bidding, and daily spend in Google Ads. Learn enterprise frameworks, auction calculations, campaign configuration strategies, and practical optimization workflows.",
      "analogyHero": "Think of budgets, bidding, and daily spend in Google Ads like an intelligent highway toll system: when properly calibrated with clear signage and fast lanes, high-value commercial traffic converts rapidly while low-intent traffic is filtered out before paying unnecessary tolls.",
      "objectives": [
        "Understand core principles and strategic mechanics of budgets, bidding, and daily spend",
        "Implement industry-standard configurations and avoid high-cost budget traps",
        "Analyze real-world campaign data, search intent signals, and performance metrics",
        "Execute step-by-step optimization procedures for maximum return on ad spend (ROAS)"
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Always align campaign settings with commercial search intent to prevent wasted ad spend.",
        "Maintain continuous negative keyword management and regular search term query audits.",
        "Prioritize high Quality Score (Expected CTR, Ad Relevance, Landing Page Experience) to minimize Cost Per Click."
      ],
      "summary": "Mastering budgets, bidding, and daily spend ensures your Google Ads account operates with high efficiency, lower acquisition costs, and scalable profitability.",
      "syntaxGuide": "// Key Metric Formulas:\nCTR = (Clicks / Impressions) * 100\nCPC = Total Cost / Total Clicks\nCVR = (Conversions / Clicks) * 100\nCPA = Total Cost / Total Conversions\nROAS = (Conversion Value / Total Cost) * 100",
      "practiceExercises": [
        {
          "title": "Budgets, Bidding, and Daily Spend Scenario Challenge",
          "instructions": "Analyze a search campaign spending $150/day with 45 clicks, 2 conversions, and $75 CPA against a target CPA of $40. Identify the top 2 bottlenecks and outline immediate corrective actions.",
          "starterCode": "// Enter your diagnostic findings\nconst audit = {\n  cpaVariancePercent: 0,\n  primaryBottleneck: '',\n  remedyPlan: ''\n};",
          "solutionCode": "const audit = {\n  cpaVariancePercent: 87.5,\n  primaryBottleneck: 'Low CVR (4.4%) caused by poor landing page message match or broad query bleed',\n  remedyPlan: 'Add exact match negative exclusions, ensure landing page H1 matches keyword intent, and test sticky mobile CTA'\n};"
        }
      ],
      "sections": [
        {
          "id": "sec-10-1",
          "title": "1. Core Principles & Architecture of Budgets, Bidding, and Daily Spend",
          "difficulty": "Beginner",
          "content": "In Google Ads performance marketing, mastering budgets, bidding, and daily spend is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.\n\n### Key Architectural Concepts\n- **Intent Alignment**: Every element must correspond directly to the commercial intent of the prospective searcher.\n- **Budget Protection**: Setting precise boundaries ensures ad spend is directed exclusively toward high-probability conversion events.\n- **Data Governance**: Clean naming, structured tracking tags, and disciplined keyword segregation allow machine learning algorithms to optimize effectively.",
          "explanation": "In Google Ads performance marketing, mastering budgets, bidding, and daily spend is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.",
          "codeSnippets": [
            {
              "filename": "module_10_config.json",
              "language": "json",
              "title": "Budgets, Bidding, and Daily Spend — Strategic Configuration Architecture",
              "code": "{\n  \"module\": \"Budgets, Bidding, and Daily Spend\",\n  \"campaignContext\": \"High-Intent Local Lead Generation\",\n  \"strategicParameters\": {\n    \"networkIsolation\": \"Search Network Only (Disable Display Expansion)\",\n    \"locationTargeting\": \"Presence: People in or regularly in targeted areas\",\n    \"adScheduleDayparting\": \"Mon-Fri 08:00-18:00 with +20% Peak Bid Multiplier\",\n    \"biddingPhase\": \"Manual CPC with eCPC -> Target CPA after 30 conversions\"\n  },\n  \"qualityGuardrails\": {\n    \"minAdStrength\": \"Good or Excellent\",\n    \"negativeKeywordListAttached\": true,\n    \"primaryConversionDefined\": true\n  }\n}",
              "lineByLine": [
                {
                  "line": "\"networkIsolation\": \"Search Network Only\"",
                  "explanation": "Prevents display network leakage from draining search ad budget."
                },
                {
                  "line": "\"locationTargeting\": \"Presence...\"",
                  "explanation": "Restricts ad serving strictly to people physically located inside target areas."
                },
                {
                  "line": "\"primaryConversionDefined\": true",
                  "explanation": "Directs Smart Bidding algorithm only toward verified high-value actions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why is strict network isolation important when configuring a Search campaign?",
            "options": [
              "It prevents the campaign from spending budget on passive Display network placements with lower conversion intent",
              "It increases campaign daily budget automatically by 50%",
              "It translates ad headlines into multiple foreign languages",
              "It prevents users from using Google Chrome browser"
            ],
            "correctAnswer": 0,
            "explanation": "Disabling Display expansion prevents high-intent search budgets from being diluted on un-targeted third-party display banner placements."
          },
          "proTip": "Always separate Search and Display campaigns into completely distinct campaigns with dedicated budgets.",
          "commonMistakes": [
            "Leaving 'Include Google Display Network' checked in a Search campaign.",
            "Using 'Presence or Interest' location targeting instead of 'Presence: People in or regularly in your targeted locations'."
          ]
        },
        {
          "id": "sec-10-2",
          "title": "2. Strategic Execution & Step-by-Step Implementation",
          "difficulty": "Beginner",
          "content": "Implementing budgets, bidding, and daily spend requires a systematic, repeatable framework:\n\n1. **Audit & Research**: Gather baseline query volume, competitor benchmarks, historical CPC averages, and customer conversion rates.\n2. **Structural Setup**: Configure campaigns with exact geographic boundaries, language restrictions, and isolated network distributions.\n3. **Continuous Refinement**: Monitor Search Term reports weekly, sculpt negative keyword lists, and adjust bids based on device and schedule performance.",
          "explanation": "Implementing budgets, bidding, and daily spend requires a systematic, repeatable framework across keyword scoping, campaign settings, and weekly query hygiene.",
          "codeSnippets": [
            {
              "filename": "module_10_optimizer.ts",
              "language": "typescript",
              "title": "Budgets, Bidding, and Daily Spend — Real-Time Unit Economics & Metric Evaluator",
              "code": "// Practical Calculation & Audit Logic for Budgets, Bidding, and Daily Spend\nexport interface CampaignMetrics {\n  impressions: number;\n  clicks: number;\n  cost: number;\n  conversions: number;\n}\n\nexport function analyzePerformance(m: CampaignMetrics) {\n  const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));\n  const cpc = Number((m.cost / (m.clicks || 1)).toFixed(2));\n  const cvr = Number(((m.conversions / (m.clicks || 1)) * 100).toFixed(2));\n  const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));\n\n  return {\n    clickThroughRate: `${ctr}%`,\n    averageCpc: `$${cpc}`,\n    conversionRate: `${cvr}%`,\n    costPerAcquisition: `$${cpa}`,\n    healthStatus: ctr >= 3.5 && cvr >= 8.0 ? 'HEALTHY_SCALE' : 'OPTIMIZE_COPY_AND_LP'\n  };\n}\n\n// Example evaluation: 1,200 clicks, $4,800 spend, 135 conversions\nconsole.log(analyzePerformance({ impressions: 22000, clicks: 1200, cost: 4800, conversions: 135 }));",
              "lineByLine": [
                {
                  "line": "const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));",
                  "explanation": "Calculates click-through rate percentage to evaluate creative appeal."
                },
                {
                  "line": "const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));",
                  "explanation": "Calculates true cost per acquisition across all conversion actions."
                },
                {
                  "line": "healthStatus: ctr >= 3.5 && cvr >= 8.0 ? ...",
                  "explanation": "Automates account diagnostics against industry performance benchmarks."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "How is Cost Per Acquisition (CPA) calculated in performance marketing reporting?",
            "options": [
              "Total Cost divided by Total Conversions",
              "Total Clicks multiplied by Total Impressions",
              "Total Conversions divided by Total Impressions",
              "Total Cost minus Total Revenue"
            ],
            "correctAnswer": 0,
            "explanation": "CPA represents the average monetary cost required to generate one successful conversion action (Cost / Conversions)."
          },
          "proTip": "Track both Cost Per Lead (CPL) and Cost Per Qualified Lead (CPQL) to measure downstream customer quality.",
          "commonMistakes": [
            "Evaluating keyword performance solely on CTR without measuring conversion volume and CPA.",
            "Changing bidding strategies multiple times per week before the algorithm completes its learning phase."
          ]
        },
        {
          "id": "sec-10-3",
          "title": "3. Real-World Case Studies & Performance Optimization",
          "difficulty": "Beginner",
          "content": "Consider an emergency home service provider that restructured their account around budgets, bidding, and daily spend. By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, they achieved:\n- **42% Reduction in Cost Per Acquisition (CPA)**\n- **3.1x Lift in Click-Through Rate (CTR)**\n- **95% Lead Contact Rate via Sticky Mobile Click-to-Call CTAs**",
          "explanation": "By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, campaigns achieve dramatic CPA reductions.",
          "codeSnippets": [
            {
              "filename": "module_10_workflow.js",
              "language": "javascript",
              "title": "Budgets, Bidding, and Daily Spend — Automated Account Health & Waste Protection Script",
              "code": "// Automated Optimization Routine for Budgets, Bidding, and Daily Spend\nfunction executeOptimizationChecklist(accountState) {\n  const actionItems = [];\n\n  if (accountState.searchLostIsBudget > 20) {\n    actionItems.push('High Lost Impression Share (Budget): Increase daily budget or narrow location radius.');\n  }\n  if (accountState.searchLostIsRank > 25) {\n    actionItems.push('High Lost Impression Share (Rank): Improve Quality Score (eCTR, Ad Relevance, Landing Page) or raise bids.');\n  }\n  if (!accountState.hasNegativeList) {\n    actionItems.push('CRITICAL: Attach shared negative keyword list to prevent wasted search query spend.');\n  }\n\n  return {\n    urgency: actionItems.length > 1 ? 'HIGH' : 'STABLE',\n    recommendations: actionItems\n  };\n}\n\nconsole.log(executeOptimizationChecklist({\n  searchLostIsBudget: 35.4,\n  searchLostIsRank: 12.1,\n  hasNegativeList: true\n}));",
              "lineByLine": [
                {
                  "line": "if (accountState.searchLostIsBudget > 20)",
                  "explanation": "Detects budget caps preventing ads from entering profitable auctions."
                },
                {
                  "line": "if (accountState.searchLostIsRank > 25)",
                  "explanation": "Identifies Ad Rank bottlenecks requiring Quality Score or bid intervention."
                },
                {
                  "line": "if (!accountState.hasNegativeList)",
                  "explanation": "Enforces mandatory negative list attachments to preserve budget efficiency."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What does a high 'Search Lost Impression Share (Rank)' indicate in Google Ads reporting?",
            "options": [
              "Ads were not shown due to low Ad Rank (combination of Quality Score and/or maximum bids)",
              "The campaign ran out of daily budget at noon",
              "The Google billing credit card was declined",
              "All competitor advertisers paused their campaigns"
            ],
            "correctAnswer": 0,
            "explanation": "Search Lost IS (Rank) specifically indicates impression opportunities missed because Ad Rank was lower than participating competitors in that auction."
          },
          "proTip": "When Search Lost IS (Rank) is high, first diagnose Quality Score components before immediately inflating Max CPC bids.",
          "commonMistakes": [
            "Assuming low impression share is always solved by increasing budget without checking Lost IS (Rank).",
            "Ignoring search partner network performance disparities."
          ]
        }
      ]
    }
  },
  {
    "id": "gads-beg-11",
    "title": "Location, Language, Schedule, and Audience Settings",
    "description": "Master location, language, schedule, and audience settings with actionable Google Ads frameworks, auction math, and live campaign optimization workflows.",
    "level": "beginner",
    "orderIndex": 11,
    "status": "locked",
    "requiresQuiz": false,
    "type": "theory",
    "duration": "45 mins",
    "xpReward": 120,
    "lessonContent": {
      "overview": "Comprehensive masterclass module covering location, language, schedule, and audience settings in Google Ads. Learn enterprise frameworks, auction calculations, campaign configuration strategies, and practical optimization workflows.",
      "analogyHero": "Think of location, language, schedule, and audience settings in Google Ads like an intelligent highway toll system: when properly calibrated with clear signage and fast lanes, high-value commercial traffic converts rapidly while low-intent traffic is filtered out before paying unnecessary tolls.",
      "objectives": [
        "Understand core principles and strategic mechanics of location, language, schedule, and audience settings",
        "Implement industry-standard configurations and avoid high-cost budget traps",
        "Analyze real-world campaign data, search intent signals, and performance metrics",
        "Execute step-by-step optimization procedures for maximum return on ad spend (ROAS)"
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Always align campaign settings with commercial search intent to prevent wasted ad spend.",
        "Maintain continuous negative keyword management and regular search term query audits.",
        "Prioritize high Quality Score (Expected CTR, Ad Relevance, Landing Page Experience) to minimize Cost Per Click."
      ],
      "summary": "Mastering location, language, schedule, and audience settings ensures your Google Ads account operates with high efficiency, lower acquisition costs, and scalable profitability.",
      "syntaxGuide": "// Key Metric Formulas:\nCTR = (Clicks / Impressions) * 100\nCPC = Total Cost / Total Clicks\nCVR = (Conversions / Clicks) * 100\nCPA = Total Cost / Total Conversions\nROAS = (Conversion Value / Total Cost) * 100",
      "practiceExercises": [
        {
          "title": "Location, Language, Schedule, and Audience Settings Scenario Challenge",
          "instructions": "Analyze a search campaign spending $150/day with 45 clicks, 2 conversions, and $75 CPA against a target CPA of $40. Identify the top 2 bottlenecks and outline immediate corrective actions.",
          "starterCode": "// Enter your diagnostic findings\nconst audit = {\n  cpaVariancePercent: 0,\n  primaryBottleneck: '',\n  remedyPlan: ''\n};",
          "solutionCode": "const audit = {\n  cpaVariancePercent: 87.5,\n  primaryBottleneck: 'Low CVR (4.4%) caused by poor landing page message match or broad query bleed',\n  remedyPlan: 'Add exact match negative exclusions, ensure landing page H1 matches keyword intent, and test sticky mobile CTA'\n};"
        }
      ],
      "sections": [
        {
          "id": "sec-11-1",
          "title": "1. Core Principles & Architecture of Location, Language, Schedule, and Audience Settings",
          "difficulty": "Beginner",
          "content": "In Google Ads performance marketing, mastering location, language, schedule, and audience settings is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.\n\n### Key Architectural Concepts\n- **Intent Alignment**: Every element must correspond directly to the commercial intent of the prospective searcher.\n- **Budget Protection**: Setting precise boundaries ensures ad spend is directed exclusively toward high-probability conversion events.\n- **Data Governance**: Clean naming, structured tracking tags, and disciplined keyword segregation allow machine learning algorithms to optimize effectively.",
          "explanation": "In Google Ads performance marketing, mastering location, language, schedule, and audience settings is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.",
          "codeSnippets": [
            {
              "filename": "module_11_config.json",
              "language": "json",
              "title": "Location, Language, Schedule, and Audience Settings — Strategic Configuration Architecture",
              "code": "{\n  \"module\": \"Location, Language, Schedule, and Audience Settings\",\n  \"campaignContext\": \"High-Intent Local Lead Generation\",\n  \"strategicParameters\": {\n    \"networkIsolation\": \"Search Network Only (Disable Display Expansion)\",\n    \"locationTargeting\": \"Presence: People in or regularly in targeted areas\",\n    \"adScheduleDayparting\": \"Mon-Fri 08:00-18:00 with +20% Peak Bid Multiplier\",\n    \"biddingPhase\": \"Manual CPC with eCPC -> Target CPA after 30 conversions\"\n  },\n  \"qualityGuardrails\": {\n    \"minAdStrength\": \"Good or Excellent\",\n    \"negativeKeywordListAttached\": true,\n    \"primaryConversionDefined\": true\n  }\n}",
              "lineByLine": [
                {
                  "line": "\"networkIsolation\": \"Search Network Only\"",
                  "explanation": "Prevents display network leakage from draining search ad budget."
                },
                {
                  "line": "\"locationTargeting\": \"Presence...\"",
                  "explanation": "Restricts ad serving strictly to people physically located inside target areas."
                },
                {
                  "line": "\"primaryConversionDefined\": true",
                  "explanation": "Directs Smart Bidding algorithm only toward verified high-value actions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why is strict network isolation important when configuring a Search campaign?",
            "options": [
              "It prevents the campaign from spending budget on passive Display network placements with lower conversion intent",
              "It increases campaign daily budget automatically by 50%",
              "It translates ad headlines into multiple foreign languages",
              "It prevents users from using Google Chrome browser"
            ],
            "correctAnswer": 0,
            "explanation": "Disabling Display expansion prevents high-intent search budgets from being diluted on un-targeted third-party display banner placements."
          },
          "proTip": "Always separate Search and Display campaigns into completely distinct campaigns with dedicated budgets.",
          "commonMistakes": [
            "Leaving 'Include Google Display Network' checked in a Search campaign.",
            "Using 'Presence or Interest' location targeting instead of 'Presence: People in or regularly in your targeted locations'."
          ]
        },
        {
          "id": "sec-11-2",
          "title": "2. Strategic Execution & Step-by-Step Implementation",
          "difficulty": "Beginner",
          "content": "Implementing location, language, schedule, and audience settings requires a systematic, repeatable framework:\n\n1. **Audit & Research**: Gather baseline query volume, competitor benchmarks, historical CPC averages, and customer conversion rates.\n2. **Structural Setup**: Configure campaigns with exact geographic boundaries, language restrictions, and isolated network distributions.\n3. **Continuous Refinement**: Monitor Search Term reports weekly, sculpt negative keyword lists, and adjust bids based on device and schedule performance.",
          "explanation": "Implementing location, language, schedule, and audience settings requires a systematic, repeatable framework across keyword scoping, campaign settings, and weekly query hygiene.",
          "codeSnippets": [
            {
              "filename": "module_11_optimizer.ts",
              "language": "typescript",
              "title": "Location, Language, Schedule, and Audience Settings — Real-Time Unit Economics & Metric Evaluator",
              "code": "// Practical Calculation & Audit Logic for Location, Language, Schedule, and Audience Settings\nexport interface CampaignMetrics {\n  impressions: number;\n  clicks: number;\n  cost: number;\n  conversions: number;\n}\n\nexport function analyzePerformance(m: CampaignMetrics) {\n  const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));\n  const cpc = Number((m.cost / (m.clicks || 1)).toFixed(2));\n  const cvr = Number(((m.conversions / (m.clicks || 1)) * 100).toFixed(2));\n  const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));\n\n  return {\n    clickThroughRate: `${ctr}%`,\n    averageCpc: `$${cpc}`,\n    conversionRate: `${cvr}%`,\n    costPerAcquisition: `$${cpa}`,\n    healthStatus: ctr >= 3.5 && cvr >= 8.0 ? 'HEALTHY_SCALE' : 'OPTIMIZE_COPY_AND_LP'\n  };\n}\n\n// Example evaluation: 1,200 clicks, $4,800 spend, 135 conversions\nconsole.log(analyzePerformance({ impressions: 22000, clicks: 1200, cost: 4800, conversions: 135 }));",
              "lineByLine": [
                {
                  "line": "const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));",
                  "explanation": "Calculates click-through rate percentage to evaluate creative appeal."
                },
                {
                  "line": "const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));",
                  "explanation": "Calculates true cost per acquisition across all conversion actions."
                },
                {
                  "line": "healthStatus: ctr >= 3.5 && cvr >= 8.0 ? ...",
                  "explanation": "Automates account diagnostics against industry performance benchmarks."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "How is Cost Per Acquisition (CPA) calculated in performance marketing reporting?",
            "options": [
              "Total Cost divided by Total Conversions",
              "Total Clicks multiplied by Total Impressions",
              "Total Conversions divided by Total Impressions",
              "Total Cost minus Total Revenue"
            ],
            "correctAnswer": 0,
            "explanation": "CPA represents the average monetary cost required to generate one successful conversion action (Cost / Conversions)."
          },
          "proTip": "Track both Cost Per Lead (CPL) and Cost Per Qualified Lead (CPQL) to measure downstream customer quality.",
          "commonMistakes": [
            "Evaluating keyword performance solely on CTR without measuring conversion volume and CPA.",
            "Changing bidding strategies multiple times per week before the algorithm completes its learning phase."
          ]
        },
        {
          "id": "sec-11-3",
          "title": "3. Real-World Case Studies & Performance Optimization",
          "difficulty": "Beginner",
          "content": "Consider an emergency home service provider that restructured their account around location, language, schedule, and audience settings. By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, they achieved:\n- **42% Reduction in Cost Per Acquisition (CPA)**\n- **3.1x Lift in Click-Through Rate (CTR)**\n- **95% Lead Contact Rate via Sticky Mobile Click-to-Call CTAs**",
          "explanation": "By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, campaigns achieve dramatic CPA reductions.",
          "codeSnippets": [
            {
              "filename": "module_11_workflow.js",
              "language": "javascript",
              "title": "Location, Language, Schedule, and Audience Settings — Automated Account Health & Waste Protection Script",
              "code": "// Automated Optimization Routine for Location, Language, Schedule, and Audience Settings\nfunction executeOptimizationChecklist(accountState) {\n  const actionItems = [];\n\n  if (accountState.searchLostIsBudget > 20) {\n    actionItems.push('High Lost Impression Share (Budget): Increase daily budget or narrow location radius.');\n  }\n  if (accountState.searchLostIsRank > 25) {\n    actionItems.push('High Lost Impression Share (Rank): Improve Quality Score (eCTR, Ad Relevance, Landing Page) or raise bids.');\n  }\n  if (!accountState.hasNegativeList) {\n    actionItems.push('CRITICAL: Attach shared negative keyword list to prevent wasted search query spend.');\n  }\n\n  return {\n    urgency: actionItems.length > 1 ? 'HIGH' : 'STABLE',\n    recommendations: actionItems\n  };\n}\n\nconsole.log(executeOptimizationChecklist({\n  searchLostIsBudget: 35.4,\n  searchLostIsRank: 12.1,\n  hasNegativeList: true\n}));",
              "lineByLine": [
                {
                  "line": "if (accountState.searchLostIsBudget > 20)",
                  "explanation": "Detects budget caps preventing ads from entering profitable auctions."
                },
                {
                  "line": "if (accountState.searchLostIsRank > 25)",
                  "explanation": "Identifies Ad Rank bottlenecks requiring Quality Score or bid intervention."
                },
                {
                  "line": "if (!accountState.hasNegativeList)",
                  "explanation": "Enforces mandatory negative list attachments to preserve budget efficiency."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What does a high 'Search Lost Impression Share (Rank)' indicate in Google Ads reporting?",
            "options": [
              "Ads were not shown due to low Ad Rank (combination of Quality Score and/or maximum bids)",
              "The campaign ran out of daily budget at noon",
              "The Google billing credit card was declined",
              "All competitor advertisers paused their campaigns"
            ],
            "correctAnswer": 0,
            "explanation": "Search Lost IS (Rank) specifically indicates impression opportunities missed because Ad Rank was lower than participating competitors in that auction."
          },
          "proTip": "When Search Lost IS (Rank) is high, first diagnose Quality Score components before immediately inflating Max CPC bids.",
          "commonMistakes": [
            "Assuming low impression share is always solved by increasing budget without checking Lost IS (Rank).",
            "Ignoring search partner network performance disparities."
          ]
        }
      ]
    }
  },
  {
    "id": "gads-beg-12",
    "title": "Conversion Tracking Fundamentals",
    "description": "Master conversion tracking fundamentals with actionable Google Ads frameworks, auction math, and live campaign optimization workflows.",
    "level": "beginner",
    "orderIndex": 12,
    "status": "locked",
    "requiresQuiz": false,
    "type": "theory",
    "duration": "45 mins",
    "xpReward": 120,
    "lessonContent": {
      "overview": "Comprehensive masterclass module covering conversion tracking fundamentals in Google Ads. Learn enterprise frameworks, auction calculations, campaign configuration strategies, and practical optimization workflows.",
      "analogyHero": "Think of conversion tracking fundamentals in Google Ads like an intelligent highway toll system: when properly calibrated with clear signage and fast lanes, high-value commercial traffic converts rapidly while low-intent traffic is filtered out before paying unnecessary tolls.",
      "objectives": [
        "Understand core principles and strategic mechanics of conversion tracking fundamentals",
        "Implement industry-standard configurations and avoid high-cost budget traps",
        "Analyze real-world campaign data, search intent signals, and performance metrics",
        "Execute step-by-step optimization procedures for maximum return on ad spend (ROAS)"
      ],
      "estimatedTime": "45 mins",
      "keyTakeaways": [
        "Always align campaign settings with commercial search intent to prevent wasted ad spend.",
        "Maintain continuous negative keyword management and regular search term query audits.",
        "Prioritize high Quality Score (Expected CTR, Ad Relevance, Landing Page Experience) to minimize Cost Per Click."
      ],
      "summary": "Mastering conversion tracking fundamentals ensures your Google Ads account operates with high efficiency, lower acquisition costs, and scalable profitability.",
      "syntaxGuide": "// Key Metric Formulas:\nCTR = (Clicks / Impressions) * 100\nCPC = Total Cost / Total Clicks\nCVR = (Conversions / Clicks) * 100\nCPA = Total Cost / Total Conversions\nROAS = (Conversion Value / Total Cost) * 100",
      "practiceExercises": [
        {
          "title": "Conversion Tracking Fundamentals Scenario Challenge",
          "instructions": "Analyze a search campaign spending $150/day with 45 clicks, 2 conversions, and $75 CPA against a target CPA of $40. Identify the top 2 bottlenecks and outline immediate corrective actions.",
          "starterCode": "// Enter your diagnostic findings\nconst audit = {\n  cpaVariancePercent: 0,\n  primaryBottleneck: '',\n  remedyPlan: ''\n};",
          "solutionCode": "const audit = {\n  cpaVariancePercent: 87.5,\n  primaryBottleneck: 'Low CVR (4.4%) caused by poor landing page message match or broad query bleed',\n  remedyPlan: 'Add exact match negative exclusions, ensure landing page H1 matches keyword intent, and test sticky mobile CTA'\n};"
        }
      ],
      "sections": [
        {
          "id": "sec-12-1",
          "title": "1. Core Principles & Architecture of Conversion Tracking Fundamentals",
          "difficulty": "Beginner",
          "content": "In Google Ads performance marketing, mastering conversion tracking fundamentals is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.\n\n### Key Architectural Concepts\n- **Intent Alignment**: Every element must correspond directly to the commercial intent of the prospective searcher.\n- **Budget Protection**: Setting precise boundaries ensures ad spend is directed exclusively toward high-probability conversion events.\n- **Data Governance**: Clean naming, structured tracking tags, and disciplined keyword segregation allow machine learning algorithms to optimize effectively.",
          "explanation": "In Google Ads performance marketing, mastering conversion tracking fundamentals is fundamental to building scalable, high-converting paid search campaigns. When advertisers fail to configure this layer correctly, Google automated systems default to broad spending parameters that inflate Cost Per Click (CPC) and dilute lead quality.",
          "codeSnippets": [
            {
              "filename": "module_12_config.json",
              "language": "json",
              "title": "Conversion Tracking Fundamentals — Strategic Configuration Architecture",
              "code": "{\n  \"module\": \"Conversion Tracking Fundamentals\",\n  \"campaignContext\": \"High-Intent Local Lead Generation\",\n  \"strategicParameters\": {\n    \"networkIsolation\": \"Search Network Only (Disable Display Expansion)\",\n    \"locationTargeting\": \"Presence: People in or regularly in targeted areas\",\n    \"adScheduleDayparting\": \"Mon-Fri 08:00-18:00 with +20% Peak Bid Multiplier\",\n    \"biddingPhase\": \"Manual CPC with eCPC -> Target CPA after 30 conversions\"\n  },\n  \"qualityGuardrails\": {\n    \"minAdStrength\": \"Good or Excellent\",\n    \"negativeKeywordListAttached\": true,\n    \"primaryConversionDefined\": true\n  }\n}",
              "lineByLine": [
                {
                  "line": "\"networkIsolation\": \"Search Network Only\"",
                  "explanation": "Prevents display network leakage from draining search ad budget."
                },
                {
                  "line": "\"locationTargeting\": \"Presence...\"",
                  "explanation": "Restricts ad serving strictly to people physically located inside target areas."
                },
                {
                  "line": "\"primaryConversionDefined\": true",
                  "explanation": "Directs Smart Bidding algorithm only toward verified high-value actions."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "Why is strict network isolation important when configuring a Search campaign?",
            "options": [
              "It prevents the campaign from spending budget on passive Display network placements with lower conversion intent",
              "It increases campaign daily budget automatically by 50%",
              "It translates ad headlines into multiple foreign languages",
              "It prevents users from using Google Chrome browser"
            ],
            "correctAnswer": 0,
            "explanation": "Disabling Display expansion prevents high-intent search budgets from being diluted on un-targeted third-party display banner placements."
          },
          "proTip": "Always separate Search and Display campaigns into completely distinct campaigns with dedicated budgets.",
          "commonMistakes": [
            "Leaving 'Include Google Display Network' checked in a Search campaign.",
            "Using 'Presence or Interest' location targeting instead of 'Presence: People in or regularly in your targeted locations'."
          ]
        },
        {
          "id": "sec-12-2",
          "title": "2. Strategic Execution & Step-by-Step Implementation",
          "difficulty": "Beginner",
          "content": "Implementing conversion tracking fundamentals requires a systematic, repeatable framework:\n\n1. **Audit & Research**: Gather baseline query volume, competitor benchmarks, historical CPC averages, and customer conversion rates.\n2. **Structural Setup**: Configure campaigns with exact geographic boundaries, language restrictions, and isolated network distributions.\n3. **Continuous Refinement**: Monitor Search Term reports weekly, sculpt negative keyword lists, and adjust bids based on device and schedule performance.",
          "explanation": "Implementing conversion tracking fundamentals requires a systematic, repeatable framework across keyword scoping, campaign settings, and weekly query hygiene.",
          "codeSnippets": [
            {
              "filename": "module_12_optimizer.ts",
              "language": "typescript",
              "title": "Conversion Tracking Fundamentals — Real-Time Unit Economics & Metric Evaluator",
              "code": "// Practical Calculation & Audit Logic for Conversion Tracking Fundamentals\nexport interface CampaignMetrics {\n  impressions: number;\n  clicks: number;\n  cost: number;\n  conversions: number;\n}\n\nexport function analyzePerformance(m: CampaignMetrics) {\n  const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));\n  const cpc = Number((m.cost / (m.clicks || 1)).toFixed(2));\n  const cvr = Number(((m.conversions / (m.clicks || 1)) * 100).toFixed(2));\n  const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));\n\n  return {\n    clickThroughRate: `${ctr}%`,\n    averageCpc: `$${cpc}`,\n    conversionRate: `${cvr}%`,\n    costPerAcquisition: `$${cpa}`,\n    healthStatus: ctr >= 3.5 && cvr >= 8.0 ? 'HEALTHY_SCALE' : 'OPTIMIZE_COPY_AND_LP'\n  };\n}\n\n// Example evaluation: 1,200 clicks, $4,800 spend, 135 conversions\nconsole.log(analyzePerformance({ impressions: 22000, clicks: 1200, cost: 4800, conversions: 135 }));",
              "lineByLine": [
                {
                  "line": "const ctr = Number(((m.clicks / (m.impressions || 1)) * 100).toFixed(2));",
                  "explanation": "Calculates click-through rate percentage to evaluate creative appeal."
                },
                {
                  "line": "const cpa = Number((m.cost / (m.conversions || 1)).toFixed(2));",
                  "explanation": "Calculates true cost per acquisition across all conversion actions."
                },
                {
                  "line": "healthStatus: ctr >= 3.5 && cvr >= 8.0 ? ...",
                  "explanation": "Automates account diagnostics against industry performance benchmarks."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "How is Cost Per Acquisition (CPA) calculated in performance marketing reporting?",
            "options": [
              "Total Cost divided by Total Conversions",
              "Total Clicks multiplied by Total Impressions",
              "Total Conversions divided by Total Impressions",
              "Total Cost minus Total Revenue"
            ],
            "correctAnswer": 0,
            "explanation": "CPA represents the average monetary cost required to generate one successful conversion action (Cost / Conversions)."
          },
          "proTip": "Track both Cost Per Lead (CPL) and Cost Per Qualified Lead (CPQL) to measure downstream customer quality.",
          "commonMistakes": [
            "Evaluating keyword performance solely on CTR without measuring conversion volume and CPA.",
            "Changing bidding strategies multiple times per week before the algorithm completes its learning phase."
          ]
        },
        {
          "id": "sec-12-3",
          "title": "3. Real-World Case Studies & Performance Optimization",
          "difficulty": "Beginner",
          "content": "Consider an emergency home service provider that restructured their account around conversion tracking fundamentals. By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, they achieved:\n- **42% Reduction in Cost Per Acquisition (CPA)**\n- **3.1x Lift in Click-Through Rate (CTR)**\n- **95% Lead Contact Rate via Sticky Mobile Click-to-Call CTAs**",
          "explanation": "By isolating high-intent keywords from informational queries and applying structured ad copy with message-matched landing pages, campaigns achieve dramatic CPA reductions.",
          "codeSnippets": [
            {
              "filename": "module_12_workflow.js",
              "language": "javascript",
              "title": "Conversion Tracking Fundamentals — Automated Account Health & Waste Protection Script",
              "code": "// Automated Optimization Routine for Conversion Tracking Fundamentals\nfunction executeOptimizationChecklist(accountState) {\n  const actionItems = [];\n\n  if (accountState.searchLostIsBudget > 20) {\n    actionItems.push('High Lost Impression Share (Budget): Increase daily budget or narrow location radius.');\n  }\n  if (accountState.searchLostIsRank > 25) {\n    actionItems.push('High Lost Impression Share (Rank): Improve Quality Score (eCTR, Ad Relevance, Landing Page) or raise bids.');\n  }\n  if (!accountState.hasNegativeList) {\n    actionItems.push('CRITICAL: Attach shared negative keyword list to prevent wasted search query spend.');\n  }\n\n  return {\n    urgency: actionItems.length > 1 ? 'HIGH' : 'STABLE',\n    recommendations: actionItems\n  };\n}\n\nconsole.log(executeOptimizationChecklist({\n  searchLostIsBudget: 35.4,\n  searchLostIsRank: 12.1,\n  hasNegativeList: true\n}));",
              "lineByLine": [
                {
                  "line": "if (accountState.searchLostIsBudget > 20)",
                  "explanation": "Detects budget caps preventing ads from entering profitable auctions."
                },
                {
                  "line": "if (accountState.searchLostIsRank > 25)",
                  "explanation": "Identifies Ad Rank bottlenecks requiring Quality Score or bid intervention."
                },
                {
                  "line": "if (!accountState.hasNegativeList)",
                  "explanation": "Enforces mandatory negative list attachments to preserve budget efficiency."
                }
              ]
            }
          ],
          "miniPractice": {
            "question": "What does a high 'Search Lost Impression Share (Rank)' indicate in Google Ads reporting?",
            "options": [
              "Ads were not shown due to low Ad Rank (combination of Quality Score and/or maximum bids)",
              "The campaign ran out of daily budget at noon",
              "The Google billing credit card was declined",
              "All competitor advertisers paused their campaigns"
            ],
            "correctAnswer": 0,
            "explanation": "Search Lost IS (Rank) specifically indicates impression opportunities missed because Ad Rank was lower than participating competitors in that auction."
          },
          "proTip": "When Search Lost IS (Rank) is high, first diagnose Quality Score components before immediately inflating Max CPC bids.",
          "commonMistakes": [
            "Assuming low impression share is always solved by increasing budget without checking Lost IS (Rank).",
            "Ignoring search partner network performance disparities."
          ]
        }
      ]
    }
  },
  {
    "id": "gads-beg-p1",
    "title": "Beginner Project: Local Lead Generation Search Campaign",
    "description": "Architect, configure, and optimize a full-scale local lead generation search campaign for an emergency home services business.",
    "level": "beginner",
    "orderIndex": 13,
    "status": "locked",
    "requiresQuiz": false,
    "isProject": true,
    "type": "project",
    "duration": "180 mins",
    "xpReward": 350,
    "projectDetails": {
      "overview": "You are the Lead Performance Marketing Strategist hired by Apex Elite Plumbing & HVAC, a premier local home services company operating in the Dallas-Fort Worth metroplex. The client has an initial monthly ad budget of $3,500 ($115/day) and requires an airtight, high-converting Google Search campaign focused strictly on emergency plumbing repairs, water heater replacements, and drain cleaning.",
      "scenario": "You are the Lead Performance Marketing Strategist hired by Apex Elite Plumbing & HVAC, a premier local home services company operating in the Dallas-Fort Worth metroplex. The client has an initial monthly ad budget of $3,500 ($115/day) and requires an airtight, high-converting Google Search campaign focused strictly on emergency plumbing repairs, water heater replacements, and drain cleaning.",
      "estimatedHours": "3 hours",
      "learningObjectives": [
        "Architect a comprehensive, high-intent Google Search campaign structure from scratch",
        "Conduct granular keyword research and intent clustering into Single-Theme Ad Groups (STAGs)",
        "Construct complete negative keyword lists to prevent wasted ad spend on DIY and job seekers",
        "Write persuasive, message-matched Responsive Search Ads (RSAs) with 15 headlines and 4 descriptions",
        "Configure ad assets (Sitelinks, Callouts, Structured Snippets, Call assets, Location assets)",
        "Design conversion tracking architecture and wireframe a high-converting mobile landing page"
      ],
      "objectives": [
        "Architect a comprehensive, high-intent Google Search campaign structure from scratch",
        "Conduct granular keyword research and intent clustering into Single-Theme Ad Groups (STAGs)",
        "Construct complete negative keyword lists to prevent wasted ad spend on DIY and job seekers",
        "Write persuasive, message-matched Responsive Search Ads (RSAs) with 15 headlines and 4 descriptions",
        "Configure ad assets (Sitelinks, Callouts, Structured Snippets, Call assets, Location assets)",
        "Design conversion tracking architecture and wireframe a high-converting mobile landing page"
      ],
      "requirements": [
        "Configure Search network only with Google Display expansion disabled",
        "Set location targeting to physical presence in targeted zip codes/cities",
        "Build 3 Single-Theme Ad Groups with zero keyword overlap",
        "Write 15 unique headlines and 4 descriptions per RSA ad group with keyword pinning",
        "Include 5 core ad asset types: Sitelinks, Callouts, Snippets, Call, and Location",
        "Construct a master negative keyword list with at least 30 negative terms across 6 intent categories",
        "Define primary conversion actions for phone calls (>60s) and web lead forms"
      ],
      "deliverables": [
        "1. Client & Campaign Brief (Target audience, unique value proposition, unit economics, break-even target CPA)",
        "2. Campaign Settings Architecture (Campaign objective, daily budget pacing, location targeting settings, language, network options)",
        "3. Ad Schedule & Dayparting Strategy (Hours of operation, peak bid adjustments, weekend routing)",
        "4. Seed Keyword Research & Search Intent Matrix (Categorized into Emergency, Water Heater, and Drain Cleaning)",
        "5. Match-Type Strategy Plan (Exact match and phrase match distribution with close variant defense)",
        "6. Master Negative Keyword List (Account-level and campaign-level exclusions across 8 categories: DIY, Free, Jobs, Competitors, etc.)",
        "7. Three Single-Theme Ad Groups (STAGs) with 8–12 targeted keywords each",
        "8. Complete Responsive Search Ad (RSA) Copy (15 headlines with pinning strategy and 4 descriptions per ad group)",
        "9. Ad Assets Suite Specification (4 sitelinks with descriptions, 4 callouts, 2 structured snippets, 1 call asset)",
        "10. Conversion Tracking Map (Primary phone call conversion, primary form submission, secondary micro-conversions)",
        "11. High-Converting Mobile Landing Page Specification (Hero headline, trust badges, above-the-fold CTA, sticky mobile call bar)",
        "12. 14-Day Post-Launch Optimization Protocol (Search terms mining, negative sculpting, bid adjustments, QA checklist)"
      ],
      "rubric": [
        {
          "criteria": "Campaign Architecture & Settings Discipline",
          "criterion": "Campaign Architecture & Settings Discipline",
          "weight": "25%",
          "description": "Proper network isolation (Search only, no Display bleed), strict Presence location targeting, and mathematical daily budget pacing."
        },
        {
          "criteria": "Keyword Intent & Negative Filtering",
          "criterion": "Keyword Intent & Negative Filtering",
          "weight": "25%",
          "description": "Tightly themed STAGs with phrase/exact match discipline and comprehensive negative keyword lists blocking unqualified traffic."
        },
        {
          "criteria": "RSA Copywriting & Asset Completeness",
          "criterion": "RSA Copywriting & Asset Completeness",
          "weight": "25%",
          "description": "High-converting ad copy with keyword inclusion, clear benefits, urgent CTAs, and full asset suite integration."
        },
        {
          "criteria": "Measurement & Landing Page Message Match",
          "criterion": "Measurement & Landing Page Message Match",
          "weight": "25%",
          "description": "Unambiguous conversion action mapping (Primary vs Secondary) and frictionless mobile landing page design."
        }
      ],
      "submissionChecklist": [
        "Verified campaign network is Search Network only with Display expansion disabled",
        "Configured Location option to Presence: People in or regularly in your targeted locations",
        "Created 3 distinct Single-Theme Ad Groups with zero keyword overlap",
        "Crafted 15 unique headlines and 4 descriptions for each RSA ad group",
        "Included all 5 primary ad asset types (Sitelinks, Callouts, Snippets, Call, Location)",
        "Added comprehensive negative keyword list with at least 30 non-commercial terms",
        "Mapped Primary conversion actions for phone calls and lead form submissions",
        "Completed the 14-day post-launch optimization action plan"
      ]
    }
  },
  {
    "id": "gads-beg-assessment",
    "title": "Level 1: Google Ads Beginner Final Assessment",
    "description": "Comprehensive 20-question certification exam evaluating search mechanics, account structure, keywords, RSAs, assets, and conversion setup.",
    "level": "beginner",
    "orderIndex": 14,
    "status": "locked",
    "requiresQuiz": true,
    "isFinalAssessment": true,
    "type": "quiz",
    "duration": "40 mins",
    "xpReward": 300,
    "passingScore": 15,
    "totalQuestions": 20,
    "questions": [
      {
        "id": 1,
        "topic": "Paid Search Mechanics & Ad Rank",
        "question": "How does Google Ads determine the position (Ad Rank) of a search ad in real-time auctions?",
        "options": [
          "Purely based on who bids the highest maximum CPC dollar amount regardless of ad copy or landing page quality",
          "Based on Ad Rank, which combines Maximum CPC bid, Quality Score (Expected CTR, Ad Relevance, Landing Page Experience), and Ad Assets expected impact",
          "Alphabetical order of the company website domain and URL length",
          "The total historical organic SEO backlinks and domain authority of the advertiser"
        ],
        "correctAnswer": 1,
        "explanation": "Ad Rank is calculated dynamically during every auction using your Maximum CPC bid, Quality Score components (Expected CTR, Ad Relevance, and Landing Page Experience), auction competitiveness, minimum Ad Rank thresholds, and the expected impact of ad assets."
      },
      {
        "id": 2,
        "topic": "Account Hierarchy & Settings",
        "question": "In the standard Google Ads account hierarchy, at which level are daily budgets, geographic location targeting, and campaign bidding strategies configured?",
        "options": [
          "Ad Group level",
          "Campaign level",
          "Keyword level",
          "Ad Asset level"
        ],
        "correctAnswer": 1,
        "explanation": "In Google Ads, daily budgets, location targeting, language targeting, start/end dates, networks, and bidding strategies are configured at the Campaign level. Ad groups contain targeted keywords and creative ads."
      },
      {
        "id": 3,
        "topic": "Keyword Match Types",
        "question": "Which keyword match type syntax targets queries containing the meaning of your keyword without requiring exact character-for-character matches or rigid word order?",
        "options": [
          "[emergency plumber]",
          "\"emergency plumber\"",
          "emergency plumber",
          "+emergency +plumber"
        ],
        "correctAnswer": 1,
        "explanation": "Phrase match, denoted with quotation marks like \"emergency plumber\", matches search queries that include the meaning of your keyword (such as \"urgent plumber near me\" or \"emergency 24/7 plumber\"), balancing reach and intent relevance."
      },
      {
        "id": 4,
        "topic": "Exact Match Close Variants",
        "question": "Which of the following user searches will trigger an Exact Match keyword [running shoes] under current Google Ads match type rules?",
        "options": [
          "buy blue running shoes online in new york",
          "shoes for running",
          "discount leather running shoes review",
          "running marathon training plan"
        ],
        "correctAnswer": 1,
        "explanation": "Exact match (surrounded by brackets) matches queries that share the exact same intent or meaning as the keyword, including close variants like singular/plural, abbreviations, reordered words with identical meaning (\"shoes for running\"), and misspellings without extraneous modifier words."
      },
      {
        "id": 5,
        "topic": "Negative Keywords & Spend Protection",
        "question": "Why should a premium B2B enterprise software company add negative keywords such as \"free\", \"open source\", \"crack\", and \"internships\"?",
        "options": [
          "To reduce their website hosting bandwidth and server memory",
          "To prevent paying for clicks from users with zero commercial purchase intent, preserving budget for qualified corporate decision-makers",
          "Because Google penalizes accounts with fewer than 50 negative keywords",
          "To rank higher on Google Maps local listings"
        ],
        "correctAnswer": 1,
        "explanation": "Negative keywords prevent ads from triggering when searches contain specific irrelevant terms, filtering out non-commercial traffic, job seekers, and freebie hunters, which protects budget and lifts conversion rates."
      },
      {
        "id": 6,
        "topic": "Responsive Search Ads (RSAs)",
        "question": "What is the maximum number of Headlines and Descriptions that an advertiser can provide in a single Responsive Search Ad (RSA)?",
        "options": [
          "5 Headlines and 2 Descriptions",
          "15 Headlines and 4 Descriptions",
          "20 Headlines and 10 Descriptions",
          "3 Headlines and 2 Descriptions"
        ],
        "correctAnswer": 1,
        "explanation": "A single Responsive Search Ad (RSA) allows advertisers to provide up to 15 distinct Headlines (30 characters max each) and up to 4 Descriptions (90 characters max each), which Google machine learning tests in dynamic combinations."
      },
      {
        "id": 7,
        "topic": "Ad Strength Diagnostic Metric",
        "question": "What does the \"Ad Strength\" metric in Google Ads indicate to the advertiser?",
        "options": [
          "The exact live Quality Score your ad receives during Google auctions",
          "A best-practice checklist rating measuring headline diversity, keyword inclusion, and asset volume to optimize machine learning testing variations",
          "The guaranteed CTR your ad will achieve in search results",
          "The organic Google search ranking of your landing page"
        ],
        "correctAnswer": 1,
        "explanation": "Ad Strength is a diagnostic guide (from Poor to Excellent) reflecting the diversity, relevance, and quantity of assets provided in an RSA. It provides feedback for machine learning optimization, though live Ad Rank is determined in real-time auctions."
      },
      {
        "id": 8,
        "topic": "Ad Assets & Sitelinks",
        "question": "Which ad asset allows advertisers to display additional clickable links to specific sub-pages (such as \"Pricing\", \"Case Studies\", \"Schedule Service\") below the main search ad copy?",
        "options": [
          "Callout assets",
          "Sitelink assets",
          "Structured snippet assets",
          "Price assets"
        ],
        "correctAnswer": 1,
        "explanation": "Sitelink assets direct users to specific sub-pages of your website directly from the search ad, expanding ad real estate, boosting click-through rates (CTR), and lowering bounce rates by guiding users directly to relevant content."
      },
      {
        "id": 9,
        "topic": "Geographic Location Targeting",
        "question": "To ensure ads for a local dental clinic in Chicago only show to users physically inside Chicago, which Location option must be selected?",
        "options": [
          "Presence or interest: People in, regularly in, or who have shown interest in your targeted locations",
          "Presence: People in or regularly in your targeted locations",
          "Search interest: People searching for your targeted locations from any country",
          "Global presence with IP matching disabled"
        ],
        "correctAnswer": 1,
        "explanation": "Selecting \"Presence: People in or regularly in your targeted locations\" ensures that your ads only display to users physically situated in your geographic area, avoiding wasted ad spend on out-of-market users browsing from other locations."
      },
      {
        "id": 10,
        "topic": "Daily Budget & Overdelivery Rules",
        "question": "If you set an average daily budget of $50/day, what is the maximum amount Google Ads can charge you on a single high-traffic day, and what is the monthly billing cap?",
        "options": [
          "Up to $50 on any day, and $1,500 monthly limit",
          "Up to $100 on any day (2x daily budget), but never more than $1,520 in a full calendar month ($50 × 30.4 days)",
          "Up to $250 on any day, with no monthly cap",
          "Exactly $50 every day with zero variance"
        ],
        "correctAnswer": 1,
        "explanation": "Google Ads may spend up to 2 times your daily budget on days with high search interest to maximize conversions, but it will never bill you more than your monthly charging limit, calculated as Average Daily Budget × 30.4 days."
      },
      {
        "id": 11,
        "topic": "Search Terms vs Keywords",
        "question": "What is the fundamental difference between a \"Keyword\" and a \"Search Term\" in Google Ads?",
        "options": [
          "A Keyword is what the user types into Google, while a Search Term is what the advertiser bids on",
          "A Keyword is the term the advertiser selects and bids on in the campaign, while a Search Term is the exact phrase a user queries on Google before clicking an ad",
          "They are completely identical and refer to the same database field",
          "Keywords are for video ads only, while Search Terms are for image banners"
        ],
        "correctAnswer": 1,
        "explanation": "A Keyword is the target phrase configured in your account. A Search Term is the real query entered by the user in the search box. Depending on your match types, one keyword can match many different search terms."
      },
      {
        "id": 12,
        "topic": "Message Match & Landing Page Experience",
        "question": "What is \"Message Match\" and why is it crucial for Google Ads campaign performance?",
        "options": [
          "Matching your ad color scheme to your competitor’s logo",
          "Ensuring consistent keywords, value propositions, and calls to action from the search query through the ad copy to the landing page headline",
          "Translating ads into 10 different languages automatically",
          "Sending an automated SMS message to every person who visits the website"
        ],
        "correctAnswer": 1,
        "explanation": "Message match ensures seamless continuity between what the user searched for, what the ad promised in the headline, and what the landing page delivers immediately above the fold. High message match elevates Quality Score, lowers CPC, and increases conversion rate."
      },
      {
        "id": 13,
        "topic": "Conversion Action Configuration",
        "question": "Why should an advertiser distinguish between Primary and Secondary conversion actions in Google Ads?",
        "options": [
          "Primary conversions are included in the \"Conversions\" column and used by Smart Bidding algorithms to optimize bids, while Secondary conversions are for observation only",
          "Primary conversions appear in green while Secondary conversions appear in yellow in reports",
          "Secondary conversions cost twice as much per click as primary conversions",
          "Google automatically deletes all Secondary conversions after 7 days"
        ],
        "correctAnswer": 0,
        "explanation": "Primary conversion actions are used for optimization in Smart Bidding and appear in standard \"Conversions\" reporting columns. Secondary conversion actions are tracked for diagnostic and reporting purposes only without directly influencing automated bidding algorithms."
      },
      {
        "id": 14,
        "topic": "Quality Score Pillars",
        "question": "Which three components determine the 1-to-10 Quality Score assigned to a keyword in Google Ads?",
        "options": [
          "Domain Age, Monthly Ad Spend, and Social Media Followers",
          "Expected Click-Through Rate (eCTR), Ad Relevance, and Landing Page Experience",
          "Keyword Search Volume, Number of Ad Extensions, and Credit Card Limit",
          "Device Type, Browser Version, and Operating System"
        ],
        "correctAnswer": 1,
        "explanation": "Quality Score is a diagnostic rating based on three core pillars: Expected Click-Through Rate (eCTR), Ad Relevance (how closely your ad matches the user intent), and Landing Page Experience (relevance, transparency, mobile speed, navigation)."
      },
      {
        "id": 15,
        "topic": "Campaign Objective Selection",
        "question": "When creating a new Search campaign for a residential roofing company seeking booked roof inspection requests, which Campaign Objective should be selected?",
        "options": [
          "Brand Awareness and Reach",
          "Leads",
          "App Promotion",
          "Product and Brand Consideration"
        ],
        "correctAnswer": 1,
        "explanation": "The \"Leads\" objective is designed to acquire contact information, form submissions, and phone calls from prospective customers seeking appointments, consultations, or quotes."
      },
      {
        "id": 16,
        "topic": "Themed Ad Group Structure",
        "question": "What is the industry best practice for structuring ad groups within a Search campaign?",
        "options": [
          "Putting all 200 keywords for all company products into a single ad group with 1 generic ad",
          "Creating tightly themed ad groups with 5–15 closely related keywords sharing identical intent and dedicated, tailored ad copy",
          "Creating one separate campaign for every single keyword without ad groups",
          "Grouping keywords alphabetically from A to Z"
        ],
        "correctAnswer": 1,
        "explanation": "Tightly themed ad groups containing 5 to 15 closely related keywords ensure that your Responsive Search Ads directly address the specific query intent, producing higher Ad Relevance and superior Quality Scores."
      },
      {
        "id": 17,
        "topic": "Negative Keyword Lists in Shared Library",
        "question": "Where can an advertiser create a reusable Negative Keyword List that can be applied across multiple campaigns simultaneously?",
        "options": [
          "In Tools and Settings → Shared Library → Negative Keyword Lists",
          "Inside the Billing and Invoicing tab",
          "Inside the Google Chrome browser bookmarks",
          "Inside Google Analytics custom dimension reports"
        ],
        "correctAnswer": 0,
        "explanation": "In Google Ads, shared Negative Keyword Lists are created and maintained under \"Tools and Settings → Shared Library → Negative Keyword Lists\" and can be attached to dozens of campaigns instantly."
      },
      {
        "id": 18,
        "topic": "Ad Schedules & Dayparting",
        "question": "A commercial locksmith operates Monday to Friday from 8:00 AM to 6:00 PM and has no after-hours dispatch team. What feature prevents ads from spending money on Sunday night?",
        "options": [
          "Automated Headline Pinning",
          "Ad Schedule (Dayparting) settings",
          "Display Network Expansion",
          "Broad Match modifier injection"
        ],
        "correctAnswer": 1,
        "explanation": "Ad Schedule settings (also known as dayparting) allow advertisers to specify the exact days of the week and hours of the day when ads are eligible to participate in auctions, preventing ad spend when staff cannot answer calls or respond to inquiries."
      },
      {
        "id": 19,
        "topic": "Mobile Landing Page Conversion Architecture",
        "question": "Which landing page configuration delivers the highest conversion rate for mobile search traffic seeking urgent services?",
        "options": [
          "An auto-playing 10-minute video with loud background music",
          "Fast loading speed (<2.5s), prominent sticky click-to-call button, short frictionless form, and immediate licensing/guarantee trust badges above the fold",
          "A dense footer containing 85 external social media navigation links",
          "A multi-step survey requiring 25 mandatory form fields"
        ],
        "correctAnswer": 1,
        "explanation": "Mobile searchers require immediate clarity: lightning-fast load times, clear headlines matching their search intent, sticky or prominent click-to-call buttons, frictionless forms, and instant trust indicators (reviews, licensing, guarantees)."
      },
      {
        "id": 20,
        "topic": "Search Partner Network Settings",
        "question": "What is the Google Search Partner Network in campaign network settings?",
        "options": [
          "A private affiliate marketing club that pays advertisers for impressions",
          "Hundreds of non-Google websites and internal site search engines (like Amazon or Ask.com) that partner with Google to show search ads",
          "A software development kit for building mobile games",
          "A feature that automatically creates Facebook and TikTok ads"
        ],
        "correctAnswer": 1,
        "explanation": "Google Search Partners are third-party websites and search engines partnering with Google to show text ads on their search results pages. Advertisers can observe performance and opt in or out at the campaign level."
      }
    ],
    "assessmentDetails": {
      "passingScore": 15,
      "totalQuestions": 20,
      "timeLimitMinutes": 40,
      "questions": [
        {
          "id": 1,
          "topic": "Paid Search Mechanics & Ad Rank",
          "question": "How does Google Ads determine the position (Ad Rank) of a search ad in real-time auctions?",
          "options": [
            "Based on Ad Rank, which combines Maximum CPC bid, Quality Score (Expected CTR, Ad Relevance, Landing Page Experience), and Ad Assets expected impact",
            "Purely based on who bids the highest maximum CPC dollar amount regardless of ad copy or landing page quality",
            "Alphabetical order of the company website domain and URL length",
            "The total historical organic SEO backlinks and domain authority of the advertiser"
          ],
          "correctAnswer": 0,
          "explanation": "Ad Rank is calculated dynamically during every auction using your Maximum CPC bid, Quality Score components (Expected CTR, Ad Relevance, and Landing Page Experience), auction competitiveness, minimum Ad Rank thresholds, and the expected impact of ad assets."
        },
        {
          "id": 2,
          "topic": "Account Hierarchy & Settings",
          "question": "In the standard Google Ads account hierarchy, at which level are daily budgets, geographic location targeting, and campaign bidding strategies configured?",
          "options": [
            "Ad Group level",
            "Campaign level",
            "Keyword level",
            "Ad Asset level"
          ],
          "correctAnswer": 1,
          "explanation": "In Google Ads, daily budgets, location targeting, language targeting, start/end dates, networks, and bidding strategies are configured at the Campaign level. Ad groups contain targeted keywords and creative ads."
        },
        {
          "id": 3,
          "topic": "Keyword Match Types",
          "question": "Which keyword match type syntax targets queries containing the meaning of your keyword without requiring exact character-for-character matches or rigid word order?",
          "options": [
            "[emergency plumber]",
            "emergency plumber",
            "\"emergency plumber\"",
            "+emergency +plumber"
          ],
          "correctAnswer": 2,
          "explanation": "Phrase match, denoted with quotation marks like \"emergency plumber\", matches search queries that include the meaning of your keyword (such as \"urgent plumber near me\" or \"emergency 24/7 plumber\"), balancing reach and intent relevance."
        },
        {
          "id": 4,
          "topic": "Exact Match Close Variants",
          "question": "Which of the following user searches will trigger an Exact Match keyword [running shoes] under current Google Ads match type rules?",
          "options": [
            "buy blue running shoes online in new york",
            "discount leather running shoes review",
            "running marathon training plan",
            "shoes for running"
          ],
          "correctAnswer": 3,
          "explanation": "Exact match (surrounded by brackets) matches queries that share the exact same intent or meaning as the keyword, including close variants like singular/plural, abbreviations, reordered words with identical meaning (\"shoes for running\"), and misspellings without extraneous modifier words."
        },
        {
          "id": 5,
          "topic": "Negative Keywords & Spend Protection",
          "question": "Why should a premium B2B enterprise software company add negative keywords such as \"free\", \"open source\", \"crack\", and \"internships\"?",
          "options": [
            "To reduce their website hosting bandwidth and server memory",
            "To prevent paying for clicks from users with zero commercial purchase intent, preserving budget for qualified corporate decision-makers",
            "Because Google penalizes accounts with fewer than 50 negative keywords",
            "To rank higher on Google Maps local listings"
          ],
          "correctAnswer": 1,
          "explanation": "Negative keywords prevent ads from triggering when searches contain specific irrelevant terms, filtering out non-commercial traffic, job seekers, and freebie hunters, which protects budget and lifts conversion rates."
        },
        {
          "id": 6,
          "topic": "Responsive Search Ads (RSAs)",
          "question": "What is the maximum number of Headlines and Descriptions that an advertiser can provide in a single Responsive Search Ad (RSA)?",
          "options": [
            "5 Headlines and 2 Descriptions",
            "20 Headlines and 10 Descriptions",
            "15 Headlines and 4 Descriptions",
            "3 Headlines and 2 Descriptions"
          ],
          "correctAnswer": 2,
          "explanation": "A single Responsive Search Ad (RSA) allows advertisers to provide up to 15 distinct Headlines (30 characters max each) and up to 4 Descriptions (90 characters max each), which Google machine learning tests in dynamic combinations."
        },
        {
          "id": 7,
          "topic": "Ad Strength Diagnostic Metric",
          "question": "What does the \"Ad Strength\" metric in Google Ads indicate to the advertiser?",
          "options": [
            "The exact live Quality Score your ad receives during Google auctions",
            "The guaranteed CTR your ad will achieve in search results",
            "The organic Google search ranking of your landing page",
            "A best-practice checklist rating measuring headline diversity, keyword inclusion, and asset volume to optimize machine learning testing variations"
          ],
          "correctAnswer": 3,
          "explanation": "Ad Strength is a diagnostic guide (from Poor to Excellent) reflecting the diversity, relevance, and quantity of assets provided in an RSA. It provides feedback for machine learning optimization, though live Ad Rank is determined in real-time auctions."
        },
        {
          "id": 8,
          "topic": "Ad Assets & Sitelinks",
          "question": "Which ad asset allows advertisers to display additional clickable links to specific sub-pages (such as \"Pricing\", \"Case Studies\", \"Schedule Service\") below the main search ad copy?",
          "options": [
            "Sitelink assets",
            "Callout assets",
            "Structured snippet assets",
            "Price assets"
          ],
          "correctAnswer": 0,
          "explanation": "Sitelink assets direct users to specific sub-pages of your website directly from the search ad, expanding ad real estate, boosting click-through rates (CTR), and lowering bounce rates by guiding users directly to relevant content."
        },
        {
          "id": 9,
          "topic": "Geographic Location Targeting",
          "question": "To ensure ads for a local dental clinic in Chicago only show to users physically inside Chicago, which Location option must be selected?",
          "options": [
            "Presence or interest: People in, regularly in, or who have shown interest in your targeted locations",
            "Search interest: People searching for your targeted locations from any country",
            "Presence: People in or regularly in your targeted locations",
            "Global presence with IP matching disabled"
          ],
          "correctAnswer": 2,
          "explanation": "Selecting \"Presence: People in or regularly in your targeted locations\" ensures that your ads only display to users physically situated in your geographic area, avoiding wasted ad spend on out-of-market users browsing from other locations."
        },
        {
          "id": 10,
          "topic": "Daily Budget & Overdelivery Rules",
          "question": "If you set an average daily budget of $50/day, what is the maximum amount Google Ads can charge you on a single high-traffic day, and what is the monthly billing cap?",
          "options": [
            "Up to $50 on any day, and $1,500 monthly limit",
            "Up to $250 on any day, with no monthly cap",
            "Exactly $50 every day with zero variance",
            "Up to $100 on any day (2x daily budget), but never more than $1,520 in a full calendar month ($50 × 30.4 days)"
          ],
          "correctAnswer": 3,
          "explanation": "Google Ads may spend up to 2 times your daily budget on days with high search interest to maximize conversions, but it will never bill you more than your monthly charging limit, calculated as Average Daily Budget × 30.4 days."
        },
        {
          "id": 11,
          "topic": "Search Terms vs Keywords",
          "question": "What is the fundamental difference between a \"Keyword\" and a \"Search Term\" in Google Ads?",
          "options": [
            "A Keyword is the term the advertiser selects and bids on in the campaign, while a Search Term is the exact phrase a user queries on Google before clicking an ad",
            "A Keyword is what the user types into Google, while a Search Term is what the advertiser bids on",
            "They are completely identical and refer to the same database field",
            "Keywords are for video ads only, while Search Terms are for image banners"
          ],
          "correctAnswer": 0,
          "explanation": "A Keyword is the target phrase configured in your account. A Search Term is the real query entered by the user in the search box. Depending on your match types, one keyword can match many different search terms."
        },
        {
          "id": 12,
          "topic": "Message Match & Landing Page Experience",
          "question": "What is \"Message Match\" and why is it crucial for Google Ads campaign performance?",
          "options": [
            "Matching your ad color scheme to your competitor’s logo",
            "Ensuring consistent keywords, value propositions, and calls to action from the search query through the ad copy to the landing page headline",
            "Translating ads into 10 different languages automatically",
            "Sending an automated SMS message to every person who visits the website"
          ],
          "correctAnswer": 1,
          "explanation": "Message match ensures seamless continuity between what the user searched for, what the ad promised in the headline, and what the landing page delivers immediately above the fold. High message match elevates Quality Score, lowers CPC, and increases conversion rate."
        },
        {
          "id": 13,
          "topic": "Conversion Action Configuration",
          "question": "Why should an advertiser distinguish between Primary and Secondary conversion actions in Google Ads?",
          "options": [
            "Primary conversions appear in green while Secondary conversions appear in yellow in reports",
            "Secondary conversions cost twice as much per click as primary conversions",
            "Google automatically deletes all Secondary conversions after 7 days",
            "Primary conversions are included in the \"Conversions\" column and used by Smart Bidding algorithms to optimize bids, while Secondary conversions are for observation only"
          ],
          "correctAnswer": 3,
          "explanation": "Primary conversion actions are used for optimization in Smart Bidding and appear in standard \"Conversions\" reporting columns. Secondary conversion actions are tracked for diagnostic and reporting purposes only without directly influencing automated bidding algorithms."
        },
        {
          "id": 14,
          "topic": "Quality Score Pillars",
          "question": "Which three components determine the 1-to-10 Quality Score assigned to a keyword in Google Ads?",
          "options": [
            "Expected Click-Through Rate (eCTR), Ad Relevance, and Landing Page Experience",
            "Domain Age, Monthly Ad Spend, and Social Media Followers",
            "Keyword Search Volume, Number of Ad Extensions, and Credit Card Limit",
            "Device Type, Browser Version, and Operating System"
          ],
          "correctAnswer": 0,
          "explanation": "Quality Score is a diagnostic rating based on three core pillars: Expected Click-Through Rate (eCTR), Ad Relevance (how closely your ad matches the user intent), and Landing Page Experience (relevance, transparency, mobile speed, navigation)."
        },
        {
          "id": 15,
          "topic": "Campaign Objective Selection",
          "question": "When creating a new Search campaign for a residential roofing company seeking booked roof inspection requests, which Campaign Objective should be selected?",
          "options": [
            "Brand Awareness and Reach",
            "Leads",
            "App Promotion",
            "Product and Brand Consideration"
          ],
          "correctAnswer": 1,
          "explanation": "The \"Leads\" objective is designed to acquire contact information, form submissions, and phone calls from prospective customers seeking appointments, consultations, or quotes."
        },
        {
          "id": 16,
          "topic": "Themed Ad Group Structure",
          "question": "What is the industry best practice for structuring ad groups within a Search campaign?",
          "options": [
            "Putting all 200 keywords for all company products into a single ad group with 1 generic ad",
            "Creating one separate campaign for every single keyword without ad groups",
            "Creating tightly themed ad groups with 5–15 closely related keywords sharing identical intent and dedicated, tailored ad copy",
            "Grouping keywords alphabetically from A to Z"
          ],
          "correctAnswer": 2,
          "explanation": "Tightly themed ad groups containing 5 to 15 closely related keywords ensure that your Responsive Search Ads directly address the specific query intent, producing higher Ad Relevance and superior Quality Scores."
        },
        {
          "id": 17,
          "topic": "Negative Keyword Lists in Shared Library",
          "question": "Where can an advertiser create a reusable Negative Keyword List that can be applied across multiple campaigns simultaneously?",
          "options": [
            "In Tools and Settings → Shared Library → Negative Keyword Lists",
            "Inside the Billing and Invoicing tab",
            "Inside the Google Chrome browser bookmarks",
            "Inside Google Analytics custom dimension reports"
          ],
          "correctAnswer": 0,
          "explanation": "In Google Ads, shared Negative Keyword Lists are created and maintained under \"Tools and Settings → Shared Library → Negative Keyword Lists\" and can be attached to dozens of campaigns instantly."
        },
        {
          "id": 18,
          "topic": "Ad Schedules & Dayparting",
          "question": "A commercial locksmith operates Monday to Friday from 8:00 AM to 6:00 PM and has no after-hours dispatch team. What feature prevents ads from spending money on Sunday night?",
          "options": [
            "Automated Headline Pinning",
            "Display Network Expansion",
            "Ad Schedule (Dayparting) settings",
            "Broad Match modifier injection"
          ],
          "correctAnswer": 2,
          "explanation": "Ad Schedule settings (also known as dayparting) allow advertisers to specify the exact days of the week and hours of the day when ads are eligible to participate in auctions, preventing ad spend when staff cannot answer calls or respond to inquiries."
        },
        {
          "id": 19,
          "topic": "Mobile Landing Page Conversion Architecture",
          "question": "Which landing page configuration delivers the highest conversion rate for mobile search traffic seeking urgent services?",
          "options": [
            "An auto-playing 10-minute video with loud background music",
            "Fast loading speed (<2.5s), prominent sticky click-to-call button, short frictionless form, and immediate licensing/guarantee trust badges above the fold",
            "A dense footer containing 85 external social media navigation links",
            "A multi-step survey requiring 25 mandatory form fields"
          ],
          "correctAnswer": 1,
          "explanation": "Mobile searchers require immediate clarity: lightning-fast load times, clear headlines matching their search intent, sticky or prominent click-to-call buttons, frictionless forms, and instant trust indicators (reviews, licensing, guarantees)."
        },
        {
          "id": 20,
          "topic": "Search Partner Network Settings",
          "question": "What is the Google Search Partner Network in campaign network settings?",
          "options": [
            "A private affiliate marketing club that pays advertisers for impressions",
            "A software development kit for building mobile games",
            "A feature that automatically creates Facebook and TikTok ads",
            "Hundreds of non-Google websites and internal site search engines (like Amazon or Ask.com) that partner with Google to show search ads"
          ],
          "correctAnswer": 3,
          "explanation": "Google Search Partners are third-party websites and search engines partnering with Google to show text ads on their search results pages. Advertisers can observe performance and opt in or out at the campaign level."
        }
      ]
    }
  }
];
