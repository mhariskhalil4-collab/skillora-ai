import { Task, QuizQuestion } from '../../types/roadmap.types';

export const META_BEGINNER_FINAL_ASSESSMENT: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Ads Manager Fundamentals',
    question: 'What is the primary purpose of Meta Ads Manager?',
    options: [
      'Designing websites',
      'Creating and managing Meta advertising campaigns',
      'Editing Shopify themes',
      'Writing Python programs'
    ],
    correctAnswer: 1, // B
    explanation: 'Meta Ads Manager is the all-in-one tool for creating, running, managing, and analyzing ad campaigns across Facebook, Instagram, Messenger, and Audience Network.'
  },
  {
    id: 2,
    topic: 'Campaign Hierarchy',
    question: 'Which hierarchy correctly represents a standard Meta advertising structure?',
    options: [
      'Ad → Campaign → Ad Set',
      'Campaign → Ad Set → Ad',
      'Ad Set → Ad → Campaign',
      'Audience → Campaign → Business'
    ],
    correctAnswer: 1, // B
    explanation: 'A standard Meta advertising structure consists of three levels: Campaign (objective/budget strategy) → Ad Set (audience, placement, schedule, budget) → Ad (creative, copy, CTA, destination URL).'
  },
  {
    id: 3,
    topic: 'Campaign Objectives',
    question: 'A business wants purchases from its online store. Which business outcome should guide its campaign objective?',
    options: [
      'Maximum random impressions',
      'Purchases/conversions',
      'Maximum page likes only',
      'Maximum comments regardless of sales'
    ],
    correctAnswer: 1, // B
    explanation: 'When the ultimate business goal is revenue from product sales, the campaign should be configured with the Sales objective optimized for the Purchase conversion event.'
  },
  {
    id: 4,
    topic: 'Campaign Structure',
    question: 'Where is audience targeting primarily configured in the standard campaign hierarchy?',
    options: [
      'Ad level',
      'Ad set level',
      'Image file',
      'Business profile bio'
    ],
    correctAnswer: 1, // B
    explanation: 'Audience targeting (demographics, interests, custom audiences, lookalikes, locations, languages) is set at the Ad Set level.'
  },
  {
    id: 5,
    topic: 'Custom Audiences',
    question: 'What is a Custom Audience?',
    options: [
      'A manually designed image',
      'An audience created from eligible first-party or Meta engagement/data sources',
      'A campaign objective',
      'An ad placement'
    ],
    correctAnswer: 1, // B
    explanation: 'A Custom Audience is built using high-intent data from website traffic (Pixel), customer lists (emails/phone numbers), app activity, or on-platform engagement (video views, Instagram profile interaction).'
  },
  {
    id: 6,
    topic: 'Retargeting Strategy',
    question: 'Which is a retargeting example?',
    options: [
      'Showing ads to completely new users',
      'Showing an offer to previous website visitors',
      'Changing an image file name',
      'Increasing font size'
    ],
    correctAnswer: 1, // B
    explanation: 'Retargeting involves delivering tailored ads to warm users who have already interacted with your brand, such as visiting product pages, adding items to cart, or viewing videos.'
  },
  {
    id: 7,
    topic: 'Lookalike Audiences',
    question: 'What is generally important when creating a Lookalike Audience?',
    options: [
      'A meaningful source audience',
      'A random password',
      'A new Facebook Page every day',
      'Removing all conversion data'
    ],
    correctAnswer: 0, // A
    explanation: 'The quality and relevance of a Lookalike Audience depend heavily on the seed/source audience (e.g. high-LTV past purchasers or verified converted leads).'
  },
  {
    id: 8,
    topic: 'Advertising Metrics',
    question: 'What does CTR measure?',
    options: [
      'Cost per thousand impressions',
      'Percentage of impressions that resulted in the measured click',
      'Revenue divided by spend',
      'Number of customers per employee'
    ],
    correctAnswer: 1, // B
    explanation: 'Click-Through Rate (CTR) measures the percentage of times people saw your ad and performed a click: (Clicks / Impressions) * 100.'
  },
  {
    id: 9,
    topic: 'Metrics Calculation',
    question: 'If an ad spends $100 and generates 10 leads, what is the cost per lead?',
    options: [
      '$1',
      '$5',
      '$10',
      '$1000'
    ],
    correctAnswer: 2, // C
    explanation: 'Cost per Lead (CPL) = Spend / Total Leads = $100 / 10 = $10 per lead.'
  },
  {
    id: 10,
    topic: 'Metrics Calculation',
    question: 'If an ad receives 20,000 impressions and 400 link clicks, what is the link CTR?',
    options: [
      '0.2%',
      '2%',
      '5%',
      '20%'
    ],
    correctAnswer: 1, // B
    explanation: 'CTR = (Link Clicks / Impressions) * 100 = (400 / 20,000) * 100 = 0.02 * 100 = 2%.'
  },
  {
    id: 11,
    topic: 'Metrics Calculation',
    question: 'If $50 is spent for 10,000 impressions, what is CPM?',
    options: [
      '$0.50',
      '$5',
      '$50',
      '$500'
    ],
    correctAnswer: 1, // B
    explanation: 'CPM (Cost Per Mille / 1,000 impressions) = (Spend / Impressions) * 1,000 = ($50 / 10,000) * 1,000 = $5.'
  },
  {
    id: 12,
    topic: 'ROAS & Profitability',
    question: 'What does ROAS represent?',
    options: [
      'Revenue divided by advertising spend',
      'Reach divided by frequency',
      'Clicks divided by impressions',
      'Spend divided by revenue'
    ],
    correctAnswer: 0, // A
    explanation: 'Return on Ad Spend (ROAS) evaluates marketing revenue efficiency: Total Attributed Revenue / Advertising Spend.'
  },
  {
    id: 13,
    topic: 'Creative Fundamentals',
    question: 'Which creative approach is generally useful for stopping attention quickly?',
    options: [
      'A clear hook',
      'Removing the main message',
      'Hiding the product',
      'Using unrelated text'
    ],
    correctAnswer: 0, // A
    explanation: 'A visual or textual hook within the first 1–3 seconds captures user attention in fast-scrolling feeds before fatigue or disinterest occurs.'
  },
  {
    id: 14,
    topic: 'Creative Fatigue',
    question: 'What is creative fatigue?',
    options: [
      'The advertising account password expiring',
      'Audience response declining as users repeatedly see the same creative',
      'A website changing its logo',
      'A billing receipt'
    ],
    correctAnswer: 1, // B
    explanation: 'Creative fatigue occurs when an audience has seen the exact same ad too many times, leading to rising CPM/CPA, falling CTR, and diminishing engagement.'
  },
  {
    id: 15,
    topic: 'Audience Strategy',
    question: 'Why can excessive audience narrowing be problematic?',
    options: [
      'It can restrict delivery and reduce the available audience',
      'It guarantees lower costs',
      'It guarantees purchases',
      'It automatically improves every campaign'
    ],
    correctAnswer: 0, // A
    explanation: 'Layering too many interest/demographic exclusions or narrow criteria creates micro-audiences, driving up CPMs and choking Meta auction delivery algorithms.'
  },
  {
    id: 16,
    topic: 'Exclusions & Funnel Design',
    question: 'What is the main purpose of excluding existing purchasers from some acquisition campaigns?',
    options: [
      'To reduce unnecessary acquisition spend on people who already converted',
      'To delete customers',
      'To increase website loading time',
      'To disable reporting'
    ],
    correctAnswer: 0, // A
    explanation: 'Excluding recent buyers from prospecting/top-of-funnel campaigns prevents ad budget wastage on existing customers while directing spend strictly toward net-new prospects.'
  },
  {
    id: 17,
    topic: 'Metrics Calculation',
    question: 'If revenue is $500 and ad spend is $100, what is ROAS?',
    options: [
      '0.5',
      '2',
      '5',
      '50'
    ],
    correctAnswer: 2, // C
    explanation: 'ROAS = Revenue / Ad Spend = $500 / $100 = 5.0 (or 500%).'
  },
  {
    id: 18,
    topic: 'Testing Methodology',
    question: 'Why should an advertiser avoid changing many campaign variables simultaneously during a test?',
    options: [
      'It makes it harder to identify what caused the performance change',
      'It guarantees account suspension',
      'It prevents images from loading',
      'It removes the campaign objective'
    ],
    correctAnswer: 0, // A
    explanation: 'Changing copy, audience, creative, bidding, and placement at the same time obscures causal attribution, making it impossible to determine which factor caused improvement or decline.'
  },
  {
    id: 19,
    topic: 'Performance Diagnostics',
    question: 'Which metric combination is more useful than looking at CPM alone when evaluating an e-commerce campaign?',
    options: [
      'Spend, clicks, conversions, revenue, CPA, and ROAS',
      'Page name only',
      'Ad color only',
      'Number of employees'
    ],
    correctAnswer: 0, // A
    explanation: 'CPM only measures cost of display. Evaluating full-funnel efficiency requires analyzing spend, link CTR, conversion count, CPA, revenue, and ROAS holistically.'
  },
  {
    id: 20,
    topic: 'Strategy & Objectives',
    question: 'What is the most professional approach to selecting an advertising objective?',
    options: [
      'Always choose the cheapest visible metric',
      'Match the campaign strategy to the actual business outcome',
      'Always choose awareness',
      'Always choose traffic'
    ],
    correctAnswer: 1, // B
    explanation: 'The campaign objective tells Meta algorithm what user action to optimize for. Choosing the objective that directly matches the true commercial goal (e.g. Sales for orders, Leads for form fills) produces optimal business value.'
  }
];

export const META_BEGINNER_TASKS: Task[] = [
  {
    id: 'meta-beg-01',
    orderIndex: 1,
    title: 'Module 1: Introduction to Meta Ads',
    description: 'Understand the Meta advertising ecosystem, Ads Manager, Business Portfolios, Page/Instagram assets, and the foundational Campaign → Ad Set → Ad hierarchy.',
    status: 'in_progress',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-meta-01-1', title: 'Meta Ads Manager Official Guide', type: 'documentation', url: 'https://www.facebook.com/business/tools/ads-manager' },
      { id: 'res-meta-01-2', title: 'Business Asset & Portfolio Structure', type: 'article', url: 'https://www.facebook.com/business/help/113163272211510' }
    ],
    lessonContent: {
      overview: `### Welcome to Meta Advertising Engineering

Meta Platforms (encompassing Facebook, Instagram, Messenger, and Audience Network) reaches over 3 billion active users every month. For direct-to-consumer (DTC) brands, B2B services, SaaS providers, and local businesses, Meta Ads provides one of the most powerful machine-learning-driven customer acquisition engines in the world.

In this introductory module, you will master the foundational mechanics of the Meta advertising ecosystem, understand how business assets connect, and explore the core structural hierarchy: **Campaign → Ad Set → Ad**.`,
      analogyHero: 'Think of Meta Ads like a commercial airline operation. The Business Portfolio is the airline headquarters. The Campaign is the flight destination and mission. The Ad Set is the flight route, crew, and passengers (targeting, budget, schedule). The Ad is the inflight experience and entertainment that delights the travelers (creative, copy, offer).',
      objectives: [
        'Understand the complete Meta advertising ecosystem and the role of Meta Ads Manager.',
        'Distinguish between organic content reach and algorithmic paid advertising.',
        'Master the 3-tier hierarchy: Campaign, Ad Set, and Ad.',
        'Understand the marketing funnel stages: Awareness, Consideration, and Conversion.',
        'Identify core advantages and limitations of paid media advertising.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: `Campaign Level  → Defines: Commercial Objective (Sales, Leads, Traffic) & Budget Architecture
Ad Set Level    → Defines: Target Audience, Placements, Schedule, Optimization Event & Geo-Targeting
Ad Level        → Defines: Creative (Video/Image), Primary Text, Headline, Description & Destination URL`,
      sections: [
        {
          id: 'sec-meta-1-1',
          title: 'The Meta Advertising Ecosystem & Asset Anatomy',
          difficulty: 'Beginner',
          analogy: 'Your personal Facebook profile is your private house key; your Business Portfolio is an office building where you invite team members and assign secure keycards.',
          content: `### Understanding Business Assets vs Personal Accounts

Professional advertising on Meta requires separating personal social profiles from business assets. A **Meta Business Portfolio** (formerly Business Manager) serves as the central hub managing:
1. **Facebook Pages & Instagram Professional Accounts:** The public identities running the advertisements.
2. **Ad Accounts:** The financial containers housing campaigns, payment methods, and billing records.
3. **Pixels & Data Sets:** The tracking beacons installed on your website to measure visitor conversions.
4. **Catalogs:** Structured product feeds for dynamic e-commerce shopping campaigns.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'business-asset-hierarchy.yaml',
              code: `Business Portfolio: "Acme Retail Group"
  Assets:
    - Facebook Page: "Acme Apparel Official"
    - Instagram Account: "@acmeapparel"
    - Ad Account: "Acme Primary US (USD)"
    - Data Set (Pixel): "Acme Web Pixel 90841"
    - Product Catalog: "Shopify Main Catalog Feed"
  Team & Permissions:
    - Admin: Founder (Two-Factor Required)
    - Employee: Media Buyer (Ad Account Manage Access)
    - Partner: Digital Agency (View Performance & Create Ads)`,
              explanation: 'Clean separation of assets ensures security, compliance, and transparent client/agency permissions.',
              lineByLine: [
                { line: 'Business Portfolio: "Acme Retail Group"', explanation: 'Top-level enterprise entity owning all business properties.' },
                { line: 'Facebook Page & Instagram Account', explanation: 'Public brand identities displayed in user feeds when ads appear.' },
                { line: 'Ad Account & Data Set', explanation: 'Dedicated billing account paired with conversion tracking dataset.' },
                { line: 'Team & Permissions', explanation: 'Role-based access control protecting corporate assets.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-1-2',
          title: 'The 3-Tier Campaign Hierarchy Explained',
          difficulty: 'Beginner',
          content: `### Why Strategy, Audience, and Creative are Separated

Meta Ads enforces a strict 3-tier structure to enable scientific testing and scalable media buying:

1. **Campaign Level:** Answers *WHAT is the business goal?* (e.g., Sales, Leads, Engagement). This is also where Advantage Campaign Budget (CBO) is configured.
2. **Ad Set Level:** Answers *WHO are we targeting, WHERE will it show, and WHEN?* Configures demographic targeting, custom audiences, lookalikes, placement selection, and daily budget.
3. **Ad Level:** Answers *WHAT will the user see and click?* Houses media assets (single image, carousel, 9:16 vertical video), primary copy, headlines, and the landing page link.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'campaign-structure-model.json',
              code: `{
  "campaign": {
    "name": "PROS_Sales_SpringCollection_2026",
    "objective": "OUTCOME_SALES",
    "budget_strategy": "CBO_ADVANTAGE_PLUS",
    "ad_sets": [
      {
        "name": "US_Broad_Women_21-45",
        "targeting": { "geo": "US", "gender": "female", "age_min": 21, "age_max": 45 },
        "ads": ["Ad_01_VideoHook_UGC", "Ad_02_Carousel_BestSellers"]
      },
      {
        "name": "US_Interests_SustainableFashion",
        "targeting": { "interests": ["Sustainable Fashion", "Organic Cotton"] },
        "ads": ["Ad_01_VideoHook_UGC", "Ad_03_Image_FounderStory"]
      }
    ]
  }
}`,
              explanation: 'A structured campaign hierarchy separates audience hypothesis from creative testing.',
              lineByLine: [
                { line: '"objective": "OUTCOME_SALES"', explanation: 'Instructs Meta AI optimization algorithm to find users with high purchase intent.' },
                { line: '"budget_strategy": "CBO_ADVANTAGE_PLUS"', explanation: 'Meta automatically distributes budget to the top performing ad sets in real time.' },
                { line: '"ad_sets": [...]', explanation: 'Independent audiences tested against identical high-performing creatives.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-1-3',
          title: 'Practical Scenarios & Business Applications',
          difficulty: 'Beginner',
          content: `### Real-World Execution Scenarios

Let's examine how three distinct business models structure their initial Meta campaigns:

#### Scenario 1: E-Commerce Fashion Store ($60 AOV)
- **Goal:** Drive direct purchases for a newly launched spring linen clothing line.
- **Campaign Objective:** Sales (optimized for Purchase event).
- **Structure:** 1 Campaign, 2 Ad Sets (Broad 25-45 vs Fashion Lookalikes), 3 Ads (UGC Try-on Reel, Lifestyle Carousel, Customer Testimonial image).

#### Scenario 2: Local Italian Restaurant
- **Goal:** Drive weekday dinner reservations and promote a weekend special tasting menu.
- **Campaign Objective:** Leads or Engagement (Optimized for Instant Form or Messenger).
- **Structure:** 1 Campaign, 1 Ad Set (5-mile radius around restaurant, ages 25-65), 2 Ads (Chef plating video, 5-star customer review carousel).

#### Scenario 3: B2B SaaS / Online Career Course
- **Goal:** Acquire qualified webinar registrations and email leads for a $997 program.
- **Campaign Objective:** Leads (Optimized for CompleteRegistration on landing page).
- **Structure:** 1 Campaign, 2 Ad Sets (Job title interest layering vs Video Viewer Retargeting), 3 Ads (Problem/Solution breakdown, Free syllabus preview, Case study).`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'practical-three-scenario-comparison.yaml',
              code: `Scenario_1_Ecommerce:
  Objective: Sales (Purchase)
  KPI: Cost per Purchase & ROAS (Target: >= 3.0x)
  Creative: 9:16 Reel UGC + Product Grid Carousel

Scenario_2_LocalBusiness:
  Objective: Leads (Instant Form)
  KPI: Cost per Booking Inquiry (Target: <= $8.00)
  Creative: 1:1 High-Res Food Imagery + Local Community Hook

Scenario_3_Education_SaaS:
  Objective: Leads (Website Registration)
  KPI: Cost per Lead & Qualified SQL Rate (Target: <= $12.00)
  Creative: Talking Head Authority Video + PDF Resource Preview`,
              explanation: 'Different business models require distinct objective selections and creative strategies.',
              lineByLine: [
                { line: 'Scenario_1_Ecommerce: Objective: Sales', explanation: 'Direct attribution through Pixel/CAPI tracking purchase conversions.' },
                { line: 'Scenario_2_LocalBusiness: Objective: Leads', explanation: 'Geofenced ad set capturing local intent with frictionless forms.' },
                { line: 'Scenario_3_Education_SaaS: Objective: Leads', explanation: 'Drives high-intent traffic to an educational landing page.' }
              ]
            }
          ],
          proTip: 'Never select the "Traffic" objective if your actual goal is e-commerce sales. Traffic optimizes for cheap clicks from users who click links but rarely buy, whereas "Sales" optimizes for high-intent purchasers.',
          commonMistakes: [
            'Using a personal Facebook account to run ads instead of a dedicated Business Portfolio.',
            'Selecting "Traffic" or "Engagement" because clicks are cheap, then wondering why zero sales occurred.',
            'Creating 20 tiny ad sets with $2/day each, choking Meta machine learning optimization.'
          ]
        }
      ],
      keyTakeaways: [
        'Meta Ads operates across Facebook, Instagram, Messenger, and Audience Network.',
        'Business Portfolios house and protect business assets (Pages, Ad Accounts, Pixels, Catalogs).',
        'The 3-tier hierarchy is: Campaign (Objective) → Ad Set (Audience/Budget) → Ad (Creative/Copy).',
        'Always align your Meta objective with the true commercial outcome (e.g. Sales for orders, Leads for contacts).'
      ],
      summary: 'You now understand the architecture of Meta Ads, how business assets connect, and how to structure your campaigns according to commercial goals.',
      practiceExercises: [
        {
          title: 'Campaign Hierarchy Architecture Challenge',
          instructions: 'Outline a complete 3-tier campaign structure for a boutique coffee roaster launching a monthly subscription box. Specify the Campaign Objective, 2 distinct Ad Set target audiences, and 3 specific ad creative concepts.'
        }
      ]
    },
    questions: [
      {
        id: 101,
        topic: 'Campaign Architecture',
        question: 'Which setting is configured at the Campaign level in Meta Ads Manager?',
        options: ['Ad creative video file', 'Target demographic age', 'Campaign Commercial Objective', 'Ad headline copy'],
        correctAnswer: 2,
        explanation: 'The Campaign level determines the overall advertising objective (e.g. Sales, Leads, Awareness) and high-level budget strategy.'
      }
    ]
  },
  {
    id: 'meta-beg-02',
    orderIndex: 2,
    title: 'Module 2: Meta Business Setup and Asset Management',
    description: 'Set up Meta Business Portfolios, manage ad accounts, connect Instagram & Pages, configure role-based permissions, 2FA, and maintain account health.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-meta-02-1', title: 'Meta Business Manager Setup', type: 'documentation', url: 'https://business.facebook.com/overview' }
    ],
    lessonContent: {
      overview: `### Business Governance and Asset Security

A professional media buyer must know how to properly establish, configure, and secure Meta Business Portfolios. Careless permissions or payment configurations can lead to compromised accounts, restricted advertising privileges, or lost client data.

In this module, you will learn the exact steps to organize business assets, configure least-privilege role permissions, connect client assets via Partner IDs, and protect accounts with mandatory security protocols.`,
      analogyHero: 'Think of a Business Portfolio as a secure digital corporate headquarters with keycard-controlled rooms. The Ad Account is the finance vault, the Pixel is the surveillance system, and the Facebook Page is the public storefront.',
      objectives: [
        'Create and structure a verified Meta Business Portfolio.',
        'Assign people and partner permissions using the Principle of Least Privilege.',
        'Connect Facebook Pages, Instagram Professional Accounts, and Ad Accounts.',
        'Enforce Two-Factor Authentication (2FA) and monitor Ad Account Quality.'
      ],
      estimatedTime: '30 mins',
      sections: [
        {
          id: 'sec-meta-2-1',
          title: 'People, Roles, and Partner Access Management',
          difficulty: 'Beginner',
          content: `### Role-Based Access Control (RBAC) in Meta

Meta provides granular permissions to protect brand assets:
- **Admin Access:** Full administrative control over all assets, payment methods, team members, and business settings. Limit to 2 trusted executives.
- **Employee Access:** Restricted access to assigned assets only (e.g., can edit ads in Ad Account A, but cannot touch billing or Ad Account B).
- **Partner Access (Business-to-Business):** Sharing assets between two Business Portfolios using the 16-digit **Business ID** without adding external contractors as direct personal users.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'partner-access-configuration.yaml',
              code: `Client_Business_Portfolio:
  Business_ID: "109849204829104"
  Assets_Shared:
    - Ad_Account_ID: "act_4920194810"
      Permissions: ["Create Ads", "View Performance"] # No Billing Access
    - Pixel_ID: "90481029410"
      Permissions: ["Standard Event Access"]
    - Facebook_Page: "Acme Brand"
      Permissions: ["Create Content", "Moderate Comments"]
Partner_Agency:
  Agency_Business_ID: "948102940192841"
  Assigned_Media_Buyer: "buyer@digitalagency.com"`,
              explanation: 'Partner access allows agencies to manage client assets safely without sharing logins or ownership.',
              lineByLine: [
                { line: 'Business_ID: "109849204829104"', explanation: 'Unique identification number of client business portfolio.' },
                { line: 'Permissions: ["Create Ads", "View Performance"]', explanation: 'Least-privilege permission safeguarding payment methods.' },
                { line: 'Partner_Agency: Agency_Business_ID', explanation: 'Enables enterprise-to-enterprise asset delegation.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-2-2',
          title: 'Account Health, Restrictions, and Policy Compliance',
          difficulty: 'Beginner',
          content: `### Preserving Ad Account Quality

Meta's automated policy bots scan ad creatives, landing pages, copy, and payment methods for advertising standard compliance. Key compliance requirements include:
1. **Two-Factor Authentication (2FA):** Mandatory for all users inside the Business Portfolio to prevent account takeover.
2. **Landing Page Consistency:** The landing page must match the ad promise, feature a valid privacy policy, terms of service, and functional contact information.
3. **Prohibited & Restricted Content:** No misleading health claims, deceptive before/after imagery, non-compliant financial promises, or discriminatory targeting.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'account-health-checklist.json',
              code: `{
  "account_audit": {
    "security_2fa_enabled": true,
    "payment_backup_configured": true,
    "domain_verified": true,
    "privacy_policy_on_store": true,
    "account_quality_status": "NO_RESTRICTIONS",
    "rejected_ad_ratio_percentage": 0.0
  }
}`,
              explanation: 'A healthy account checklist minimizes policy disruptions and auction penalties.',
              lineByLine: [
                { line: '"security_2fa_enabled": true', explanation: 'Essential protection against credential stuffing attacks.' },
                { line: '"payment_backup_configured": true', explanation: 'Prevents campaign stalling if the primary credit card triggers a temporary fraud lock.' },
                { line: '"domain_verified": true', explanation: 'Validates brand ownership for custom event configuration.' }
              ]
            }
          ],
          proTip: 'Always add a secondary backup credit card or PayPal account to your ad account. If a primary card fails during peak shopping seasons, your ads will pause, resetting the learning phase and causing revenue drops.',
          commonMistakes: [
            'Sharing personal Facebook login credentials with team members or freelancers.',
            'Failing to verify domain ownership in Meta Business Settings.',
            'Ignoring Ad Account Quality warnings until the entire account gets disabled.'
          ]
        },
        {
          id: 'sec-meta-2-3',
          title: 'Practical Setup Examples for Agencies, Freelancers & Owners',
          difficulty: 'Beginner',
          content: `### Three Real-World Setup Walkthroughs

1. **Freelancer Onboarding:** The freelancer shares their Agency/Freelancer Business ID with the client. The client assigns Ad Account "Manage Campaigns" access. The freelancer never asks for the client's password.
2. **Agency Multi-Client Hub:** An agency manages 15 client accounts from one dashboard using Partner Links. Staff members are granted access strictly to their assigned accounts.
3. **Solo Founder Setup:** Founder creates Business Portfolio, enables 2FA, connects Instagram Creator account, links verified Shopify store domain, and attaches business banking card.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'setup-comparison.yaml',
              code: `Model_1_Freelancer:
  Auth: Partner Business ID Request
  Risk: Zero credential exposure
Model_2_Agency:
  Auth: Centralized Agency Portfolio
  Risk: Granular team assignment
Model_3_Founder:
  Auth: Direct Business Portfolio Creation
  Risk: Single owner (must add trusted co-admin)`,
              explanation: 'Standardized workflows for different organizational sizes.',
              lineByLine: [
                { line: 'Model_1_Freelancer: Partner Business ID', explanation: 'Client retains 100% asset ownership and billing control.' },
                { line: 'Model_2_Agency: Centralized Agency Portfolio', explanation: 'Allows fast staff onboarding and offboarding across accounts.' },
                { line: 'Model_3_Founder: Must add trusted co-admin', explanation: 'Prevents total lockout if the founder personal profile is flagged.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Never share personal login details; use Meta Business Portfolio partner access.',
        'Enforce Two-Factor Authentication (2FA) across all team members.',
        'Maintain account health by complying with advertising standards and verifying domains.'
      ],
      summary: 'You now know how to configure and secure Business Portfolios, grant least-privilege partner access, and maintain ad account compliance.',
      practiceExercises: [
        {
          title: 'Client Asset Onboarding Blueprint',
          instructions: 'Draft a step-by-step checklist to send to a new e-commerce client detailing how they can grant your Business Portfolio access to their Facebook Page, Ad Account, and Pixel.'
        }
      ]
    }
  },
  {
    id: 'meta-beg-03',
    orderIndex: 3,
    title: 'Module 3: Ads Manager Fundamentals',
    description: 'Master the Ads Manager dashboard, customize reporting columns, apply date presets and filters, inspect delivery statuses, and establish professional naming conventions.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-meta-03-1', title: 'Navigating Ads Manager Columns', type: 'documentation', url: 'https://www.facebook.com/business/help/2070891963190848' }
    ],
    lessonContent: {
      overview: `### The Professional Media Buyer's Command Center

Meta Ads Manager is where billions of dollars in advertising spend are monitored daily. Navigating its views, columns, breakdowns, and delivery states efficiently is what separates amateurs from elite media buyers.

In this module, you will learn to build custom metric reporting presets, filter live campaigns, interpret delivery and learning status badges, and establish enterprise-grade naming conventions.`,
      analogyHero: 'Navigating Ads Manager without custom columns is like flying an airplane in dense fog with the cockpit dials turned off. Setting up custom metrics turns on your radar, altitude meter, and fuel gauges.',
      objectives: [
        'Master the Campaign, Ad Set, and Ad tab navigation in Ads Manager.',
        'Configure custom column presets tailored for E-commerce and Lead Gen.',
        'Understand learning phase statuses (Learning, Active, Learning Limited).',
        'Establish standard naming conventions for clean attribution and filtering.'
      ],
      estimatedTime: '30 mins',
      sections: [
        {
          id: 'sec-meta-3-1',
          title: 'Customizing Reporting Columns & Performance Presets',
          difficulty: 'Beginner',
          content: `### Building Your Daily Media Buying Preset

The default "Performance" column preset in Ads Manager hides crucial financial data. Professional media buyers customize and save their column layout following the user conversion journey:

1. **Delivery:** Delivery Status, Budget, Amount Spent.
2. **Top-of-Funnel (Attention):** Impressions, CPM, Reach, Frequency.
3. **Mid-of-Funnel (Engagement):** Link Clicks, CPC (Cost per Link Click), CTR (Link Click-Through Rate).
4. **Bottom-of-Funnel (Conversion):** Adds to Cart, Checkouts Initiated, Purchases / Leads, Cost Per Purchase (CPA), Purchase Conversion Value, Purchase ROAS.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'media-buyer-column-layout.yaml',
              code: `Column_Order_Ecommerce:
  1: Delivery
  2: Budget
  3: Amount_Spent
  4: Impressions
  5: CPM_Cost_Per_1000
  6: Link_Clicks
  7: CTR_Link_Click_Percentage
  8: CPC_Cost_Per_Link_Click
  9: Adds_To_Cart
  10: Cost_Per_Add_To_Cart
  11: Purchases
  12: Cost_Per_Purchase_CPA
  13: Purchase_Conversion_Value
  14: Purchase_ROAS`,
              explanation: 'A sequential column layout visualizes where user friction or drop-off occurs in the funnel.',
              lineByLine: [
                { line: '1-3: Delivery, Budget, Amount_Spent', explanation: 'Tracks pacing and capital consumption.' },
                { line: '4-8: Impressions to CPC', explanation: 'Evaluates creative resonance and attention capture in the feed.' },
                { line: '9-14: Conversions to ROAS', explanation: 'Measures ultimate commercial profitability and unit economics.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-3-2',
          title: 'Delivery Statuses & Learning Phase Diagnostics',
          difficulty: 'Beginner',
          content: `### Understanding Machine Learning States

When an ad set launches or undergoes a major edit, Meta enters the **Learning Phase**:
- **Learning:** Meta AI is actively exploring which user pockets convert best. CPA may fluctuate.
- **Active:** The ad set reached ~50 optimization events in a 7-day window. Performance stabilizes.
- **Learning Limited:** The ad set failed to generate ~50 events in 7 days (often due to small budget, tiny audience, or high CPA).
- **Off / Paused:** Manually turned off by the advertiser.
- **Rejected:** Failed automated or manual advertising policy review.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'learning-phase-matrix.json',
              code: `{
  "learning_state_diagnostics": {
    "Learning": {
      "recommendation": "Do not make edits; allow algorithm to calibrate",
      "required_conversions": 50,
      "window_days": 7
    },
    "Learning_Limited": {
      "recommendation": "Consolidate ad sets, broaden targeting, or increase daily budget",
      "risk": "Sub-optimal auction efficiency and higher CPMs"
    },
    "Active": {
      "recommendation": "Ready for systematic vertical or horizontal scaling",
      "status": "Stable auction calibration"
    }
  }
}`,
              explanation: 'Understanding learning states prevents unnecessary budget churn.',
              lineByLine: [
                { line: '"Learning": "Do not make edits"', explanation: 'Major budget or targeting changes reset the learning counter back to 0.' },
                { line: '"Learning_Limited": "Consolidate ad sets"', explanation: 'Combining small audiences aggregates conversion signals to exit learning limited.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-3-3',
          title: 'Professional Naming Conventions & Organization',
          difficulty: 'Beginner',
          content: `### Standardizing Nomenclature Across the Account

Clean naming conventions allow instant searching, bulk filtering, and automated dashboard integration:

- **Campaign Naming:** \`[Stage]_[Objective]_[Product/Offer]_[Date/Season]\`
  * Example: \`PROS_Sales_SpringLinen_Q1_2026\`
- **Ad Set Naming:** \`[Geo]_[Gender/Age]_[AudienceType]_[Placements]\`
  * Example: \`US_W25-45_LAL-Purchasers-1%_AdvantagePlacements\`
- **Ad Naming:** \`[Format]_[HookAngle]_[Creator/Visual]_[Date]\`
  * Example: \`Vid9x16_UnboxingReaction_SarahUGC_20260301\``,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'naming-convention-guide.yaml',
              code: `Campaign_Example: "RET_Sales_CartAbandoners_Evergreen"
AdSet_Example: "US_AllAges_WebVisitors-7D_AdvantagePlacements"
Ad_Example: "Img1x1_DiscountCode_LinenShirt_OfferCopy"`,
              explanation: 'Structured names allow media buyers to know the entire setup in 2 seconds.',
              lineByLine: [
                { line: 'RET: Retargeting Stage', explanation: 'Identifies audience temperature (PROS = Prospecting, RET = Retargeting).' },
                { line: 'WebVisitors-7D', explanation: 'Specifies custom audience recency window.' },
                { line: 'Img1x1_DiscountCode', explanation: 'Specifies aspect ratio and creative angle.' }
              ]
            }
          ],
          proTip: 'Use uppercase brackets or underscores to standardize naming. If you manage 50 campaigns, filtering by `PROS` in the search bar instantly isolates all your cold prospecting campaigns.',
          commonMistakes: [
            'Leaving default names like "New Campaign" or "New Ad Set - Copy".',
            'Constantly tweaking ad set budgets by $2 every 6 hours, keeping campaigns perpetually in the learning phase.',
            'Evaluating a campaign solely on CPC without checking actual purchases or ROAS.'
          ]
        }
      ],
      keyTakeaways: [
        'Customize and save your Ads Manager column layout to reflect the entire customer funnel.',
        'Aim for ~50 conversions per ad set per week to exit the Learning Phase.',
        'Use standardized naming conventions for campaigns, ad sets, and ads.'
      ],
      summary: 'You now know how to navigate Ads Manager like a professional media buyer, read learning states, and structure naming conventions.',
      practiceExercises: [
        {
          title: 'Ads Manager Diagnostics Table Analysis',
          instructions: 'Given an Ads Manager report where Campaign A has a $0.30 CPC with 0 purchases, and Campaign B has a $1.80 CPC with 14 purchases at 4.2x ROAS, write a 2-paragraph evaluation explaining why Campaign B is the winner.'
        }
      ]
    }
  },
  {
    id: 'meta-beg-04',
    orderIndex: 4,
    title: 'Module 4: Campaign Objectives and Business Goals',
    description: 'Master the 6 modernized Meta campaign objectives (Sales, Leads, Engagement, Traffic, Awareness, App Promotion) and match platform algorithms to real revenue.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-meta-04-1', title: 'Meta Simplified Objectives Guide', type: 'documentation', url: 'https://www.facebook.com/business/help/1438470663182718' }
    ],
    lessonContent: {
      overview: `### The Science of Objective Selection

Meta's advertising engine uses powerful machine learning to find users within your target audience who are most likely to take the specific action defined by your **Campaign Objective**. 

If you tell Meta you want "Traffic", it will find people who love clicking links and immediately bouncing. If you tell Meta you want "Sales", it will scour the audience for high-intent shoppers with active purchasing histories.

In this module, you will master the 6 primary campaign objectives and learn how to select the right algorithm for every business model.`,
      analogyHero: 'Choosing a campaign objective is like hiring a specialized contractor. Choosing "Traffic" is hiring someone to hand out flyers on a crowded street. Choosing "Sales" is hiring an elite closer to negotiate signed contracts with verified buyers.',
      objectives: [
        'Understand Meta\'s Outcome-Driven Ad Experiences (ODAX) objective framework.',
        'Master the 6 core objectives: Sales, Leads, Engagement, Traffic, Awareness, and App Promotion.',
        'Avoid the "cheap click" trap by aligning optimization events with real commercial value.',
        'Build a robust decision framework for choosing objectives based on business outcomes.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-4-1',
          title: 'The 6 Core Objectives Breakdown',
          difficulty: 'Beginner',
          content: `### Deep Dive into Meta's Modern Objective Suite

1. **Sales (Conversions & Catalog Sales):** Optimizes for high-intent revenue events (Purchase, Add to Cart, Initiate Checkout). Best for E-commerce, DTC, Shopify stores.
2. **Leads:** Optimizes for capturing prospect contact information via Instant Forms, Messenger chats, or external landing page forms. Best for Real Estate, B2B services, consulting.
3. **Engagement:** Optimizes for video views, post comments, shares, page likes, or messaging conversations. Best for community building and creative validation.
4. **Traffic:** Optimizes purely for landing page views or link clicks. Useful for news publishers, informational blogs, or content hubs where revenue comes from ad impressions.
5. **Awareness:** Maximizes total reach and brand recall at the lowest CPM. Best for large enterprises (Coca-Cola, Nike) running broad top-of-mind branding.
6. **App Promotion:** Drives mobile app installs and in-app purchase events via mobile SDK tracking.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'objective-decision-matrix.yaml',
              code: `Business_Type_To_Objective:
  Ecommerce_Store:
    Objective: "Sales"
    Optimization_Event: "Purchase"
    Why: "Meta bids on active shoppers with purchasing history"
  Real_Estate_Broker:
    Objective: "Leads"
    Optimization_Event: "Instant Form Submission / CompleteRegistration"
    Why: "Captures qualified buyer contact information"
  Local_Gym_Fitness:
    Objective: "Leads / Engagement"
    Optimization_Event: "Messenger Conversation / Trial Form"
    Why: "Starts direct 1-on-1 dialogue with local residents"`,
              explanation: 'Mapping business types to the algorithmic objective ensures positive ROI.',
              lineByLine: [
                { line: 'Ecommerce_Store: Objective: "Sales"', explanation: 'Never compromise on Traffic when e-commerce purchases are the goal.' },
                { line: 'Optimization_Event: "Purchase"', explanation: 'Signals the exact conversion milestone to the auction algorithm.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-4-2',
          title: 'The "Cheap Click" Trap & Conversion Quality',
          difficulty: 'Beginner',
          content: `### Why Cheap Traffic Often Equals Zero Sales

A common beginner mistake is seeing a $0.05 CPC on a "Traffic" campaign and assuming it will generate massive revenue. In reality:
- Users optimized for **Link Clicks** are often serial clickers, accidental tappers, or low-intent browsers who bounce within 2 seconds.
- Users optimized for **Purchases** have higher auction competition, leading to higher CPMs and CPCs (e.g. $1.50 CPC), but their conversion rate is 10x higher, resulting in profitable ROAS.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'traffic-vs-sales-comparison.json',
              code: `{
  "Traffic_Campaign": {
    "spend": 500,
    "cpc": 0.10,
    "clicks": 5000,
    "conversion_rate": "0.02%",
    "purchases": 1,
    "revenue": 60,
    "roas": 0.12,
    "verdict": "UNPROFITABLE"
  },
  "Sales_Campaign": {
    "spend": 500,
    "cpc": 1.25,
    "clicks": 400,
    "conversion_rate": "4.5%",
    "purchases": 18,
    "revenue": 1080,
    "roas": 2.16,
    "verdict": "PROFITABLE"
  }
}`,
              explanation: 'High-cost clicks that convert beat cheap clicks that bounce every time.',
              lineByLine: [
                { line: '"Traffic_Campaign": "roas": 0.12', explanation: '5,000 clicks generated only 1 purchase ($60 revenue).' },
                { line: '"Sales_Campaign": "roas": 2.16', explanation: '400 high-intent clicks generated 18 purchases ($1,080 revenue).' }
              ]
            }
          ],
          proTip: 'Always optimize for the deepest funnel event that gets at least 30-50 conversions a week. If you get 50 purchases a week, optimize for Purchase. If your product is high-ticket and gets 2 purchases a month, optimize for Initiate Checkout or Lead.',
          commonMistakes: [
            'Running Traffic campaigns expecting e-commerce purchases.',
            'Optimizing for "Add to Cart" because it seems cheaper than "Purchase" when you already have sufficient purchase volume.',
            'Switching campaign objectives every 2 days because immediate sales didn\'t occur.'
          ]
        },
        {
          id: 'sec-meta-4-3',
          title: 'Objective Selection Walkthrough for 3 Realistic Businesses',
          difficulty: 'Beginner',
          content: `### Three Case Studies in Objective Formulation

1. **Brand Awareness Campaign:** A national beverage brand launching a new sparkling water uses **Awareness** with Reach & Frequency buying to achieve maximum brand visibility across 15 million households.
2. **Real Estate Lead Gen:** A luxury condo developer in Miami uses **Leads** with an Instant Form featuring 3 qualifying questions (Budget range, timeline to purchase, phone number).
3. **E-Commerce Purchase Campaign:** A Shopify jewelry store uses **Sales** optimized for Purchase with dynamic catalog product ads and carousel creative.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'case-study-objectives.yaml',
              code: `Case_1_Beverage:
  Objective: Awareness
  Primary_KPI: Ad Recall Lift & Cost per 1,000 People Reached
Case_2_RealEstate:
  Objective: Leads
  Primary_KPI: Cost per Qualified Lead (CPQL)
Case_3_JewelryShop:
  Objective: Sales
  Primary_KPI: Cost per Acquisition (CPA) & Purchase ROAS`,
              explanation: 'Clear KPIs tied directly to objective configuration.',
              lineByLine: [
                { line: 'Case_1_Beverage: Objective: Awareness', explanation: 'Focuses on sheer scale and memorability.' },
                { line: 'Case_2_RealEstate: Objective: Leads', explanation: 'Prioritizes high-intent contact details over volume.' },
                { line: 'Case_3_JewelryShop: Objective: Sales', explanation: 'Direct commercial purchase conversion attribution.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'The Campaign Objective directly determines which sub-segment of your audience Meta will target.',
        'Choose Sales for e-commerce, Leads for inquiries, and Awareness for broad brand reach.',
        'Never choose an objective solely because its clicks or impressions appear cheaper.'
      ],
      summary: 'You now know how to select the right Meta campaign objective based on real commercial goals rather than vanity metrics.',
      practiceExercises: [
        {
          title: 'Objective Selection Framework Matrix',
          instructions: 'Create a decision flowchart with 5 distinct business scenarios (SaaS free trial, dentist booking, luxury apparel, mobile fitness app, local food festival). Identify the exact Meta Objective and Optimization Event for each.'
        }
      ]
    }
  },
  {
    id: 'meta-beg-05',
    orderIndex: 5,
    title: 'Module 5: Campaign, Ad Set, and Ad Structure',
    description: 'Design robust campaign hierarchies, configure Advantage Campaign Budget (CBO) vs Ad Set Budget (ABO), and structure accounts for testing and scaling.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-meta-05-1', title: 'CBO vs ABO Strategy Guide', type: 'article', url: 'https://www.facebook.com/business/help/153514848493595' }
    ],
    lessonContent: {
      overview: `### Architectural Blueprinting of Ad Accounts

A well-structured Meta advertising account provides clarity, isolates variables during testing, and allows machine learning to allocate capital efficiently. Poor structure leads to audience fragmentation, internal auction overlap, and wasted spend.

In this module, you will learn how to design scalable campaign structures, choose between CBO and ABO, and build clean testing vs scaling environments.`,
      analogyHero: 'Think of campaign structure like an organizational tree. The Campaign is the department budget. The Ad Sets are specialized teams competing for resources. The Ads are the individual projects submitted by those teams.',
      objectives: [
        'Master the difference between Advantage Campaign Budget (CBO) and Ad Set Budget (ABO).',
        'Structure separate environments for Creative Testing and Proven Scaling.',
        'Prevent internal auction competition and audience overlap.',
        'Build complete campaign hierarchy trees from business requirements.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-5-1',
          title: 'CBO (Advantage Campaign Budget) vs ABO (Ad Set Budget)',
          difficulty: 'Beginner',
          content: `### Deciding Where to Set Your Advertising Budget

- **Ad Set Budget Optimization (ABO):** You set a specific daily budget on every individual ad set (e.g. Ad Set 1 = $30/day, Ad Set 2 = $30/day).
  * *Best for:* Controlled creative testing where you want guaranteed equal spend across audiences.
- **Advantage Campaign Budget (CBO):** You set one budget at the Campaign level (e.g. $100/day total), and Meta dynamically distributes the funds to the ad sets with the highest perceived real-time opportunity.
  * *Best for:* Scaling proven audiences and evergreen campaign setups.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'abo-vs-cbo-architecture.yaml',
              code: `Testing_Campaign_ABO:
  Budget_Location: Ad Set Level
  AdSet_A_Broad: "$25/day (Forced equal spend)"
  AdSet_B_Interests: "$25/day (Forced equal spend)"
  AdSet_C_Lookalikes: "$25/day (Forced equal spend)"
  Goal: Compare creative performance under controlled conditions

Scaling_Campaign_CBO:
  Budget_Location: Campaign Level ($150/day Total)
  AdSet_1_Broad: "Meta AI dynamically allocates $90"
  AdSet_2_Lookalike_Top: "Meta AI dynamically allocates $45"
  AdSet_3_Retargeting: "Meta AI dynamically allocates $15"
  Goal: Maximize total purchases at the lowest blended CPA`,
              explanation: 'ABO guarantees fair testing conditions; CBO maximizes dynamic auction efficiency.',
              lineByLine: [
                { line: 'Testing_Campaign_ABO', explanation: 'Prevents Meta from prematurely starving new experimental audiences of budget.' },
                { line: 'Scaling_Campaign_CBO', explanation: 'Allows algorithmic capital allocation to the highest converting ad set.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-5-2',
          title: 'Structuring Testing vs Scaling Campaigns',
          difficulty: 'Beginner',
          content: `### The 2-Campaign Operating Model

To prevent untested, low-performing creatives from cannibalizing your main revenue, elite advertisers operate a clean 2-campaign architecture:

1. **Campaign 1 (Creative Testing - ABO):** Low budget ($30–$50/day). Tests 3–5 new hooks or visual angles against a broad audience.
2. **Campaign 2 (Main Scaling - CBO):** High budget ($200+/day). Contains only verified "winner" creatives that passed the testing campaign benchmarks.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'two-campaign-operating-model.json',
              code: `{
  "account_structure": {
    "Campaign_1_Testing": {
      "type": "ABO",
      "status": "Active",
      "purpose": "Identify top 10% CTR and CPA ad creatives",
      "weekly_new_creatives_injected": 4
    },
    "Campaign_2_Scaling": {
      "type": "CBO_Advantage_Plus",
      "status": "Active",
      "purpose": "Consolidate proven winners for maximum ROAS stability",
      "scale_method": "Vertical budget increases of 15% every 48 hours"
    }
  }
}`,
              explanation: 'Separating testing from scaling keeps revenue generation stable while allowing continuous R&D.',
              lineByLine: [
                { line: '"Campaign_1_Testing"', explanation: 'Experimental sandbox protecting the main budget.' },
                { line: '"Campaign_2_Scaling"', explanation: 'Core revenue generator with stable auction calibration.' }
              ]
            }
          ],
          proTip: 'Do not put 20 ads inside a single ad set. Meta will typically spend 90% of the budget on only 1 or 2 ads and starve the other 18. Keep 3 to 5 active ads per ad set for optimal distribution.',
          commonMistakes: [
            'Creating 50 fragmented ad sets with $5/day budgets, preventing any ad set from exiting the learning phase.',
            'Testing new experimental creatives inside your primary high-budget scaling campaign.',
            'Setting ad set minimum spend limits so rigidly that CBO cannot optimize.'
          ]
        },
        {
          id: 'sec-meta-5-3',
          title: 'Three Production Hierarchy Examples',
          difficulty: 'Beginner',
          content: `### Real-World Hierarchy Visualizations

1. **One Campaign, Multiple Audiences:** 1 CBO Sales Campaign targeting Broad, Lookalike 1%, and Interest Group.
2. **One Audience, Multiple Creatives:** 1 ABO Ad Set targeting Broad Women 25-45 containing 3 distinct video hooks.
3. **E-Commerce Acquisition Full Structure:** 1 Prospecting CBO Campaign ($150/day) + 1 Retargeting ABO Campaign ($30/day).`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'production-hierarchy-examples.yaml',
              code: `Ecommerce_Acquisition_Full:
  Prospecting_CBO:
    Total_Budget: "$150/day"
    AdSet_1: "Broad_US_W21-50"
    AdSet_2: "LAL_3%_TopPurchasers"
  Retargeting_ABO:
    Total_Budget: "$30/day"
    AdSet_1: "Visitors_CartAbandoners_7D"`,
              explanation: 'Clean separation between cold prospecting and warm retargeting.',
              lineByLine: [
                { line: 'Prospecting_CBO', explanation: 'Acquires new visitors at scale.' },
                { line: 'Retargeting_ABO', explanation: 'Closes high-intent warm visitors who left items in their cart.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Use ABO for controlled creative testing; use CBO for evergreen scaling.',
        'Keep 3–5 active creatives per ad set to avoid budget starvation.',
        'Separate creative testing campaigns from main scaling campaigns.'
      ],
      summary: 'You now know how to design clean, scalable campaign hierarchies and choose between CBO and ABO strategies.',
      practiceExercises: [
        {
          title: 'Account Architecture Blueprint',
          instructions: 'Diagram a complete account hierarchy for an e-commerce skincare brand with a $3,000/month budget, detailing campaign objectives, budget types, ad sets, and creative counts.'
        }
      ]
    }
  },
  {
    id: 'meta-beg-06',
    orderIndex: 6,
    title: 'Module 6: Audience Targeting Fundamentals',
    description: 'Master Broad targeting, demographic parameters, detailed interest & behavior targeting, audience sizing, overlap prevention, and prospecting methodologies.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-meta-06-1', title: 'Meta Audience Targeting Guide', type: 'documentation', url: 'https://www.facebook.com/business/help/182371508761821' }
    ],
    lessonContent: {
      overview: `### The Evolution of Meta Audience Targeting

In the early days of Meta advertising, media buyers built complex, hyper-targeted interest stacks. Today, Meta's AI algorithms (Advantage+ audience and machine learning contextual matching) are so advanced that **Broad Targeting** frequently outperforms narrow interest targeting.

In this module, you will learn how to define demographics, test interest clusters, understand audience size and auction liquidity, and avoid the trap of excessive audience narrowing.`,
      analogyHero: 'Think of audience targeting like fishing in an ocean. Narrow interest stacking is casting a tiny net into a small puddle. Broad targeting is casting a wide net into a deep, fish-rich ocean while using a specialized bait (your ad creative) that only your target species bites.',
      objectives: [
        'Master the principles of Broad Targeting vs Detailed Interest/Behavior Targeting.',
        'Understand how Meta\'s creative-led targeting works via machine learning.',
        'Calculate optimal audience sizes for local vs national campaigns.',
        'Identify and prevent audience overlap between ad sets.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-6-1',
          title: 'Broad Targeting vs Detailed Interest Targeting',
          difficulty: 'Beginner',
          content: `### How Creative Acts as the New Targeting Mechanism

- **Broad Targeting:** Specifying only Country/Location, Age, and Gender (e.g. US, Women, 25–54) with zero interest or behavior restrictions.
  * *Why it works:* Meta analyzes who watches your video or clicks your ad, then algorithmically expands delivery to lookalike behavioral profiles across millions of users at the lowest possible CPM.
- **Detailed Targeting (Interests & Behaviors):** Selecting specific affinities (e.g. "Yoga", "Organic Food", "Real Estate Investing").
  * *When to use:* Useful for new ad accounts with zero pixel data or highly specialized niche products.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'audience-targeting-configurations.yaml',
              code: `Broad_Targeting_Profile:
  Location: "United States"
  Age: "25 - 55"
  Gender: "Female"
  Interests: "None (Open / Broad)"
  Estimated_Audience_Size: "45,000,000 - 52,000,000"
  Advantage: "Lowest CPM, maximum auction liquidity, zero fatigue choke"

Detailed_Interest_Profile:
  Location: "United States"
  Age: "25 - 55"
  Gender: "Female"
  Interests: ["Lululemon Athletica", "Yoga Journal", "Pilates"]
  Estimated_Audience_Size: "4,200,000 - 5,100,000"
  Advantage: "Initial guidance for fresh pixels with zero historical data"`,
              explanation: 'Broad targeting leverages Meta AI to find buyers at scale; detailed targeting guides cold accounts.',
              lineByLine: [
                { line: 'Broad_Targeting_Profile: Interests: "None"', explanation: 'Lets the creative message filter the audience.' },
                { line: 'Estimated_Audience_Size: 45M+', explanation: 'Provides massive runway for scaling without frequency spikes.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-6-2',
          title: 'Audience Overlap & Auction Collision',
          difficulty: 'Beginner',
          content: `### Preventing Self-Competition in the Auction

When you run multiple ad sets targeting overlapping groups of people (e.g. Ad Set 1 targets "Running" and Ad Set 2 targets "Marathon"), your own ad sets may compete against each other in Meta's auction. This drives up your CPMs.

To prevent this:
1. Ensure ad set audiences are distinct (e.g. Broad vs Lookalikes vs Past Customers).
2. Exclude custom audiences (e.g. exclude past 30-day purchasers from prospecting).
3. If audience sizes are small, consolidate them into a single larger ad set.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'overlap-prevention-rules.json',
              code: `{
  "overlap_prevention_rules": {
    "rule_1": "Exclude warm custom audiences (purchasers, website visitors) from cold prospecting ad sets",
    "rule_2": "Do not create separate ad sets for closely related interests (e.g. Nike vs Adidas vs Under Armour) — stack them together",
    "rule_3": "Keep minimum audience size in national campaigns above 2,000,000 people"
  }
}`,
              explanation: 'Simple rules to prevent auction self-bidding and keep CPMs low.',
              lineByLine: [
                { line: '"rule_1": "Exclude warm custom audiences"', explanation: 'Ensures cold ad sets only reach net-new potential customers.' },
                { line: '"rule_2": "Stack closely related interests"', explanation: 'Creates a single healthy audience pool rather than 3 competing ad sets.' }
              ]
            }
          ],
          proTip: 'In 2026, your ad creative IS your targeting. If your video opens with "Calling all busy moms struggling with meal prep," men and college students will scroll past, while busy moms will pause and watch. Meta AI detects this watch time and delivers the ad exclusively to moms.',
          commonMistakes: [
            'Stacking 40 detailed interests with "AND" narrowing, shrinking audience size to under 50,000 and causing $80 CPMs.',
            'Targeting worldwide locations in a single ad set, causing Meta to dump all budget into the cheapest click countries with zero buying power.',
            'Constantly changing target interests every 48 hours.'
          ]
        },
        {
          id: 'sec-meta-6-3',
          title: 'Three Target Audience Blueprints',
          difficulty: 'Beginner',
          content: `### Real-World Targeting Blueprints

1. **Local Gym:** 5-mile radius around gym, Age 20–50, All Genders, Interests: Fitness & Wellness / Crossfit.
2. **Women's Fashion Store:** US-wide, Age 21–45, Women, Broad (No interests) + creative showing spring dresses.
3. **B2B Service Provider:** US & Canada, Age 28–60, Interests: Small Business Owners, HubSpot, Shopify Admin.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'targeting-blueprints.yaml',
              code: `Local_Gym:
  Geo: "10-mile radius"
  Targeting: "Open demographic + Fitness interest"
Fashion_DTC:
  Geo: "National (US)"
  Targeting: "Broad (Creative-led filtering)"
B2B_Agency:
  Geo: "Tier 1 English Countries"
  Targeting: "Business Page Admins / Entrepreneurship"`,
              lineByLine: [
                { line: 'Local_Gym:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Geo: \"10-mile radius\"', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'Targeting: \"Open demographic + Fitness interest\"', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'Fashion_DTC:', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Broad targeting gives Meta machine learning maximum flexibility to find high-intent buyers.',
        'Your ad creative, hook, and copy act as the primary filter for audience qualification.',
        'Avoid excessive interest narrowing to prevent high CPMs and delivery bottlenecks.'
      ],
      summary: 'You now understand how to balance broad targeting with detailed interest groups and avoid auction overlap.',
      practiceExercises: [
        {
          title: 'Prospecting Audience Matrix Design',
          instructions: 'Design 3 distinct prospecting audience strategies for a sustainable bamboo bedding company: 1 Broad, 1 Interest-Stacked, and 1 Demographic-focused. Document audience size estimates and exclusion rules.'
        }
      ]
    }
  },
  {
    id: 'meta-beg-07',
    orderIndex: 7,
    title: 'Module 7: Custom Audiences and Retargeting',
    description: 'Build first-party Custom Audiences from website traffic, customer lists, video viewers, and engagement sources to execute high-ROI retargeting funnels.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-meta-07-1', title: 'Meta Custom Audiences Documentation', type: 'documentation', url: 'https://www.facebook.com/business/help/341425252616329' }
    ],
    lessonContent: {
      overview: `### The Power of Warm Retargeting Audiences

Over 95% of first-time website visitors leave without making a purchase. **Custom Audiences** allow you to re-engage these warm prospects with personalized messaging, overcoming objections, providing social proof, and offering timely incentives.

In this module, you will learn how to build first-party audiences from Pixel data, customer email lists, and on-platform engagement, and construct automated 3-stage retargeting funnels.`,
      analogyHero: 'Cold prospecting is introducing yourself to a stranger on the street. Retargeting is following up with someone who already walked into your store, tried on a jacket, asked about the price, and said "I\'ll think about it."',
      objectives: [
        'Build Pixel-based Custom Audiences (All Visitors, ViewContent, AddToCart, InitiateCheckout).',
        'Upload and format first-party Customer CSV Lists with SHA-256 hashing.',
        'Create on-platform Engagement Audiences (Video Viewers, IG Profile Engagers).',
        'Design sequential retargeting funnels with precise recency windows (1-3 days, 4-7 days, 8-14 days).'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-7-1',
          title: 'Custom Audience Types & Data Sources',
          difficulty: 'Beginner',
          content: `### Sources for Building High-Intent Audiences

1. **Website Traffic (Pixel/CAPI Data):**
   * *All Website Visitors (30D / 60D / 180D)*
   * *Product Viewers (ViewContent 14D)*
   * *Cart Abandoners (AddToCart 7D minus Purchase 30D)*
2. **Customer Lists (First-Party Data):**
   * Uploading hashed CSV/TXT files containing emails, phone numbers, first/last names, and purchase values.
3. **Meta Engagement Sources (Zero-Party Data):**
   * *Video Viewers (Users who watched 50% or 75% of your videos)*
   * *Instagram Account Engagers (Interacted with post or sent DM in last 90D)*
   * *Instant Form Leads (Opened form but did not submit).*`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'custom-audience-definitions.yaml',
              code: `Custom_Audience_Definitions:
  Cart_Abandoners_7D:
    Include: "Event: AddToCart (Past 7 Days)"
    Exclude: "Event: Purchase (Past 30 Days)"
    Intent_Level: "HIGH (Hot Audience)"
    Messaging: "Overcome price objection / Free shipping reminder"

  Engaged_Instagram_30D:
    Include: "Instagram Professional Account Engagers (Past 30 Days)"
    Exclude: "Event: Purchase (Past 180 Days)"
    Intent_Level: "MEDIUM (Warm Audience)"
    Messaging: "Product benefits / Customer reviews / UGC"

  VIP_Customers_LTV:
    Source: "Customer CSV Upload (Historical spend > $200)"
    Intent_Level: "EXISTING (Retention / Cross-sell / Lookalike Seed)"
    Messaging: "VIP Early Access / New Product Line"`,
              lineByLine: [
                { line: 'Custom_Audience_Definitions:', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'Cart_Abandoners_7D:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Include: \"Event: AddToCart (Past 7 Days)\"', explanation: 'Instructs the Meta machine learning auction engine on target conversion signals.' },
                { line: 'Exclude: \"Event: Purchase (Past 30 Days)\"', explanation: 'Instructs the Meta machine learning auction engine on target conversion signals.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-7-2',
          title: 'Building a 3-Stage Retargeting Funnel',
          difficulty: 'Beginner',
          content: `### Sequential Retargeting by Recency

User intent degrades rapidly over time. Structuring your retargeting into recency windows maximizes conversion efficiency:

- **Stage 1 (Days 1–3 - Urgency & Reminder):** Target Cart Abandoners. Remind them their cart is saved. Highlight fast shipping and easy returns.
- **Stage 2 (Days 4–7 - Social Proof & Overcoming Objections):** Target Product Viewers. Showcase 5-star customer reviews, unboxing videos, and press mentions.
- **Stage 3 (Days 8–14 - Offer & Incentive):** Target 14-day engaged visitors. Provide a dynamic 10% off first-order discount code to seal the conversion.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'retargeting-sequencing.json',
              code: `{
  "retargeting_funnel": {
    "window_1_3_days": {
      "audience": "AddToCart (1-3D) EXCLUDE Purchase (30D)",
      "creative_focus": "Product in cart reminder + Free Shipping",
      "budget_allocation_percentage": 50
    },
    "window_4_7_days": {
      "audience": "ViewContent (4-7D) EXCLUDE AddToCart (7D)",
      "creative_focus": "Customer Video Testimonials & FAQ",
      "budget_allocation_percentage": 30
    },
    "window_8_14_days": {
      "audience": "All Website Visitors (8-14D) EXCLUDE AddToCart (14D)",
      "creative_focus": "Limited-Time 10% Welcome Discount",
      "budget_allocation_percentage": 20
    }
  }
}`,
              explanation: 'Time-decay retargeting matches the psychological state of the prospective buyer.',
              lineByLine: [
                { line: '"window_1_3_days": 50%', explanation: 'Allocates most retargeting budget when intent is freshest.' },
                { line: '"window_8_14_days": 20%', explanation: 'Uses discount offers only as a last resort before user goes completely cold.' }
              ]
            }
          ],
          proTip: 'Always exclude recent 30-day purchasers from your retargeting campaigns! Nothing annoys a customer more than seeing a 15% discount ad for an item they purchased yesterday at full price.',
          commonMistakes: [
            'Lumping all 180-day website visitors into one massive bucket and showing them the same ad for 6 months.',
            'Spending 80% of total ad budget on retargeting when the website has almost zero cold traffic.',
            'Forgetting to exclude purchasers from acquisition and retargeting campaigns.'
          ]
        },
        {
          id: 'sec-meta-7-3',
          title: 'Three Retargeting Practical Examples',
          difficulty: 'Beginner',
          content: `### Real-World Retargeting Execution

1. **E-Commerce Cart Recovery:** Retarget 3-day cart abandoners with a dynamic product carousel showing the exact items left in their cart.
2. **Instagram Engager Warm-up:** Retarget users who watched 75% of your Instagram Reels with a founder-story video leading to a collection page.
3. **B2B Consultation Booking:** Retarget users who visited the booking calendar page but didn't complete registration with client case studies.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'retargeting-examples.yaml',
              code: `Case_1_CartRecovery:
  Audience: "Cart Abandoners (1-3D)"
  Ad_Creative: "Dynamic Product Carousel + 'Did you forget something?'"
Case_2_InstagramEngagers:
  Audience: "Reels Viewers 75% (30D)"
  Ad_Creative: "Founder Story Video + 'Why we built this brand'"
Case_3_B2BConsulting:
  Audience: "Calendar Page Visitors (14D)"
  Ad_Creative: "Client ROI Case Study + 'Claim your free strategy call'"`,
              lineByLine: [
                { line: 'Case_1_CartRecovery:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Audience: \"Cart Abandoners (1-3D)\"', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'Ad_Creative: \"Dynamic Product Carousel + \'Did you forge...', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Case_2_InstagramEngagers:', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Custom Audiences allow high-intent retargeting of website visitors, customer lists, and engagement audiences.',
        'Sequence retargeting by recency (1-3 days = urgency, 4-7 days = social proof, 8-14 days = discount incentive).',
        'Always exclude recent purchasers from standard acquisition and retargeting ads.'
      ],
      summary: 'You now know how to build custom audiences and structure high-converting retargeting funnels.',
      practiceExercises: [
        {
          title: '3-Stage Retargeting Sequence Plan',
          instructions: 'Design a written 3-stage retargeting plan for an online furniture brand ($450 AOV), detailing exact inclusion/exclusion rules, time windows, creative hooks, and copy angles for each stage.'
        }
      ]
    }
  },
  {
    id: 'meta-beg-08',
    orderIndex: 8,
    title: 'Module 8: Lookalike Audiences',
    description: 'Understand Lookalike (LAL) audiences, seed quality principles, percentage ranges (1% to 10%), value-based lookalikes, and exclusion strategies.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-meta-08-1', title: 'Meta Lookalike Audiences Guide', type: 'documentation', url: 'https://www.facebook.com/business/help/164749007013531' }
    ],
    lessonContent: {
      overview: `### Scaling Prospecting with Algorithmic Lookalikes

A **Lookalike Audience (LAL)** allows you to leverage Meta's machine learning to find new potential customers who share similar demographic, behavioral, and interest profiles with your existing highest-value customers.

In this module, you will master seed data quality, understand percentage tiers from 1% to 10%, and learn when lookalikes outperform broad targeting.`,
      analogyHero: 'Creating a Lookalike Audience is like giving Meta a DNA sample of your 1,000 best customers and saying: "Scan the entire nation and find me 2 million people who have the exact same shopping habits and DNA."',
      objectives: [
        'Understand how Meta constructs Lookalike Audiences using machine learning pattern matching.',
        'Master the Seed Quality Principle: Garbage In, Garbage Out.',
        'Navigate Lookalike percentages from 1% (highest similarity) to 10% (broadest reach).',
        'Build high-value seed sources (Purchasers, High LTV, Qualified B2B Leads).'
      ],
      estimatedTime: '30 mins',
      sections: [
        {
          id: 'sec-meta-8-1',
          title: 'The Seed Quality Principle: Garbage In, Garbage Out',
          difficulty: 'Beginner',
          content: `### Why Seed Quality Dictates Lookalike Profitability

The success of a Lookalike Audience depends 90% on the quality of the source (seed) audience:
- **Poor Seed (Low Intent):** Lookalike of "All Website Visitors" or "Instagram Page Likes". This includes window shoppers, accidental clickers, and bot traffic. The resulting lookalike will find more non-buyers.
- **Good Seed (High Intent):** Lookalike of "Past 180-Day Purchasers" (minimum 500–1,000 events).
- **Elite Seed (High Value):** Lookalike of "Top 25% Highest LTV Repeat Customers" or "Verified B2B Closed Won Deals".`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'seed-quality-hierarchy.yaml',
              code: `Lookalike_Seed_Hierarchy:
  Tier_1_Elite:
    Seed: "Top 20% Lifetime Value Customers (CSV / Pixel with value)"
    Conversion_Rate_Expectation: "HIGH"
    Auction_Relevance: "Finds high-ticket repeat purchasers"

  Tier_2_Strong:
    Seed: "All Past Purchasers (Min 500 unique buyers)"
    Conversion_Rate_Expectation: "STRONG"
    Auction_Relevance: "Finds general product buyers"

  Tier_3_Moderate:
    Seed: "Initiate Checkout / High-intent Leads"
    Conversion_Rate_Expectation: "MODERATE"
    Auction_Relevance: "Useful when total purchase volume is under 200"

  Tier_4_Weak_Avoid:
    Seed: "All Website Visitors / Page Likes"
    Conversion_Rate_Expectation: "LOW"
    Auction_Relevance: "Dilutes targeting with low-intent clickers"`,
              lineByLine: [
                { line: 'Lookalike_Seed_Hierarchy:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Tier_1_Elite:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Seed: \"Top 20% Lifetime Value Customers (CSV / Pixel wit...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Conversion_Rate_Expectation: \"HIGH\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-8-2',
          title: 'Understanding Lookalike Percentages (1% to 10%)',
          difficulty: 'Beginner',
          content: `### Navigating the Similarity vs Scale Trade-off

When creating a Lookalike in a country (e.g. United States with ~250M active users):
- **1% Lookalike (~2.5–3.0 Million People):** Contains the 1% of people in the country most closely matching your seed. Highest similarity, lowest CPA, but saturates faster at high daily budgets.
- **3%–5% Lookalike (~7.5–13.0 Million People):** Blends strong similarity with larger scale. Ideal for scaling accounts spending $200–$500/day.
- **10% Lookalike (~25.0 Million People):** Broadest lookalike. Best for massive scaling when creative fatigue occurs in 1% tiers.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'lookalike-percentage-matrix.json',
              code: `{
  "US_Lookalike_Tiers": {
    "1_Percent": { "size": "2.8M", "use_case": "Initial testing & high-efficiency prospecting" },
    "2_3_Percent": { "size": "5.6M - 8.4M", "use_case": "Scaling proven winners with medium budget" },
    "5_10_Percent": { "size": "14M - 28M", "use_case": "Aggressive scaling & high spend liquidity" }
  }
}`,
              explanation: 'Different percentage tiers support different stages of budget scaling.',
              lineByLine: [
                { line: '"1_Percent": "2.8M"', explanation: 'Tightest match for maximum initial conversion efficiency.' },
                { line: '"5_10_Percent": "14M - 28M"', explanation: 'Provides massive scale for mature accounts.' }
              ]
            }
          ],
          proTip: 'When testing multiple Lookalike tiers in the same campaign, remember to exclude the narrower tier from the broader tier (e.g., in your 2-5% LAL ad set, exclude the 1% LAL audience). This prevents duplicate bidding across ad sets.',
          commonMistakes: [
            'Building lookalikes from seed lists with fewer than 100 people, giving Meta insufficient data points to model patterns.',
            'Using a worldwide customer seed list to generate a single-country lookalike without filtering for local buying behavior.',
            'Assuming lookalikes are permanent; seed lists should be refreshed quarterly with fresh customer data.'
          ]
        },
        {
          id: 'sec-meta-8-3',
          title: 'Three Lookalike Practical Implementations',
          difficulty: 'Beginner',
          content: `### Real-World Lookalike Testing Scenarios

1. **Purchaser Lookalike (1%):** Shopify apparel store creates a 1% LAL from past 180-day buyers to find top-of-funnel cold prospects.
2. **High-Value Customer Lookalike (1-3%):** Luxury watch brand uploads customer list filtered by orders > $500.
3. **Qualified Lead Lookalike (2%):** B2B software company creates a lookalike from demo requests that progressed to sales calls.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'lookalike-case-studies.yaml',
              code: `Scenario_1_Apparel:
  Seed: "Pixel Purchase Event (1,200 orders)"
  LAL: "US 1% Lookalike"
Scenario_2_LuxuryWatch:
  Seed: "CSV Upload (Customers spending > $500)"
  LAL: "US 1-3% Lookalike"
Scenario_3_SaaS_Demo:
  Seed: "CRM Hashed List (Qualified Demo Bookings)"
  LAL: "US & Canada 2% Lookalike"`,
              lineByLine: [
                { line: 'Scenario_1_Apparel:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Seed: \"Pixel Purchase Event (1,200 orders)\"', explanation: 'Instructs the Meta machine learning auction engine on target conversion signals.' },
                { line: 'LAL: \"US 1% Lookalike\"', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'Scenario_2_LuxuryWatch:', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Seed quality dictates Lookalike performance: always use high-value conversion data as the source.',
        '1% Lookalikes offer highest similarity; 5–10% Lookalikes offer broader scaling runway.',
        'Exclude narrower Lookalike tiers when scaling broader percentage brackets.'
      ],
      summary: 'You now know how to generate high-intent Lookalike Audiences and deploy them across prospecting campaigns.',
      practiceExercises: [
        {
          title: 'Lookalike Testing Experiment Design',
          instructions: 'Outline a testing plan comparing a 1% Purchaser Lookalike against a 3% Purchaser Lookalike and Broad Targeting for an e-commerce brand. Define the budget, KPIs, and evaluation criteria.'
        }
      ]
    }
  },
  {
    id: 'meta-beg-09',
    orderIndex: 9,
    title: 'Module 9: Meta Ad Creative Fundamentals',
    description: 'Master image, video, carousel, Stories, and Reels ad formats, visual hierarchy, hooks, UGC principles, problem-solution storytelling, and creative fatigue prevention.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-meta-09-1', title: 'Meta Creative Best Practices Guide', type: 'article', url: 'https://www.facebook.com/business/ads/ad-creative-specs' }
    ],
    lessonContent: {
      overview: `### Creative is the Single Biggest Variable in Media Buying

In modern algorithmic advertising, targeting and bidding have become largely automated. The true battleground for profitable customer acquisition is **Creative Strategy**. Your ad visual, hook, demonstration, and offer determine whether a user stops scrolling or ignores your brand.

In this module, you will master all primary Meta ad formats, understand the psychology of visual hooks, and learn frameworks for UGC, problem-solution, and carousel ads.`,
      analogyHero: 'Think of your ad creative like a storefront display on Fifth Avenue. If your mannequin wears a dull grey burlap sack, millions will walk past without glancing. If your display features an astonishing, vibrant demonstration that stops people in their tracks, your store fills with eager shoppers.',
      objectives: [
        'Master the 4 core ad formats: Single Image (1:1), Vertical Video / Reels (9:16), Carousel, and Stories.',
        'Engineer high-converting 3-second visual hooks that stop feed scrolling.',
        'Construct proven creative angles: Problem-Solution, User-Generated Content (UGC), Demonstration, and Testimonial.',
        'Diagnose and remediate creative fatigue before ROAS collapses.'
      ],
      estimatedTime: '40 mins',
      sections: [
        {
          id: 'sec-meta-9-1',
          title: 'Format Specifications & Visual Hierarchy',
          difficulty: 'Beginner',
          content: `### Mastering Dimensions and Safe Zones

To avoid awkward cropping and illegible text across feeds and stories, follow standard aspect ratio specifications:
1. **Feed Placement (1:1 Square or 4:5 Vertical):** Optimal for Facebook & Instagram desktop/mobile feeds (1080x1080 or 1080x1350).
2. **Reels & Stories (9:16 Full Screen Vertical):** Optimal for Instagram Reels, Stories, Facebook Reels (1080x1920).
3. **Carousel Format:** 2 to 10 swipeable cards (1:1 square) showcasing multiple products, sequential steps, or features.
4. **Safe Zones:** Keep key text and logos at least 150px away from the top and bottom in 9:16 placements so profile icons and CTA buttons don't block them.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'creative-format-specs.yaml',
              code: `Ad_Format_Specs:
  Reels_And_Stories:
    Ratio: "9:16 (1080x1920)"
    Safe_Zone: "Leave top 14% and bottom 20% clear of critical text/captions"
    Audio: "Essential (Music / Voiceover) + Dynamic On-Screen Captions"
  Feed_Image_Video:
    Ratio: "4:5 (1080x1350) or 1:1 (1080x1080)"
    Design: "High contrast, bold focal point, minimal micro-text"
  Carousel_Product_Grid:
    Ratio: "1:1 (1080x1080)"
    Cards: "3 to 6 unique product cards + final custom end card"`,
              lineByLine: [
                { line: 'Ad_Format_Specs:', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Reels_And_Stories:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Ratio: \"9:16 (1080x1920)\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Safe_Zone: \"Leave top 14% and bottom 20% clear of critic...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-9-2',
          title: 'The Anatomy of a High-Converting Video Ad',
          difficulty: 'Beginner',
          content: `### The 4-Part Direct-Response Framework

A high-performing Meta video ad follows a strict 4-part structure:
1. **The Hook (0–3 Seconds):** Visually or verbally interrupts scrolling. Calls out a specific pain point or presents an unusual visual.
2. **The Problem / Agitation (3–10 Seconds):** Validates the viewer's frustration with conventional alternatives.
3. **The Solution / Demonstration (10–25 Seconds):** Introduces your product as the unique mechanism solving the problem. Shows product in action.
4. **Social Proof & Call to Action (25–35 Seconds):** Displays 5-star reviews, press badges, and a direct instruction on what to do ("Click the link below to get 20% off").`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'video-ad-script-structure.json',
              code: `{
  "video_ad_storyboard": {
    "0_3s_Hook": "Visual of stained white shirt + On-Screen Text: 'Stop throwing away ruined clothes!'",
    "3_10s_Problem": "Traditional stain removers contain toxic bleach that destroys fabric fibers.",
    "10_20s_Solution": "Our plant-powered enzyme spray dissolves wine, oil, and coffee in 30 seconds. (Live split-screen demo)",
    "20_30s_Proof_CTA": "Over 50,000 5-star reviews. Click 'Shop Now' to grab the 3-pack starter bundle today."
  }
}`,
              explanation: 'A structured storyboard guides viewer psychology from curiosity to purchase intent.',
              lineByLine: [
                { line: '"0_3s_Hook"', explanation: 'Stops thumb scrolling before the viewer leaves.' },
                { line: '"10_20s_Solution"', explanation: 'Visual proof demonstrates how the product works without relying on sound.' }
              ]
            }
          ],
          proTip: 'Always include dynamic, animated on-screen captions on all video ads. Over 60% of Instagram and Facebook feed users watch video ads with sound muted. If your video lacks captions, you lose 60% of your audience immediately.',
          commonMistakes: [
            'Starting video ads with a slow 5-second brand logo animation that everyone scrolls past.',
            'Using tiny unreadable fonts or low-contrast text overlays.',
            'Running only static images and completely ignoring 9:16 vertical video and Reels.'
          ]
        },
        {
          id: 'sec-meta-9-3',
          title: 'Three Creative Concept Walkthroughs',
          difficulty: 'Beginner',
          content: `### Real-World Creative Archetypes

1. **Fashion Apparel:** UGC "Try-on Haul" Reel showing styling options + Carousel of bestselling colors.
2. **Online Education / Course:** Founder-led talking head video dissecting a common industry myth + free syllabus preview.
3. **Local Restaurant:** Fast-paced POV Reel showing food preparation and sizzling dishes + "Claim 15% off first reservation" overlay.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'creative-archetype-examples.yaml',
              code: `Archetype_1_Fashion_UGC:
  Format: "9:16 Reel"
  Hook: "'I ordered 5 linen dresses from TikTok so you don't have to...'"
  Vibe: "Authentic, relatable, real customer lighting"

Archetype_2_Education_Authority:
  Format: "1:1 Video + Captions"
  Hook: "'Why 90% of Junior Developers fail their first interview (and how to fix it)'"
  Vibe: "Expert, analytical, white-board breakdown"

Archetype_3_Restaurant_Sensory:
  Format: "9:16 Reel"
  Hook: "Close-up cheese pull with crisp audio sound effects"
  Vibe: "Mouth-watering, high-energy, local urgency"`,
              lineByLine: [
                { line: 'Archetype_1_Fashion_UGC:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Format: \"9:16 Reel\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Hook: \"\'I ordered 5 linen dresses from TikTok so you do...', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Vibe: \"Authentic, relatable, real customer lighting\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Creative is the primary driver of CTR, CPA, and overall advertising profitability.',
        'Capture attention in the first 3 seconds with a bold visual hook and on-screen captions.',
        'Deploy multiple formats: 9:16 Reels for storytelling, 1:1 Carousels for multi-product shopping.'
      ],
      summary: 'You now know how to design, storyboard, and format high-converting Meta ad creatives across images, videos, and carousels.',
      practiceExercises: [
        {
          title: 'Creative Storyboard Brief',
          instructions: 'Write a complete 30-second video ad script for an ergonomic desk chair, detailing the 0-3s Hook, 3-10s Problem, 10-20s Product Demo, and 20-30s Social Proof & CTA.'
        }
      ]
    }
  },
  {
    id: 'meta-beg-10',
    orderIndex: 10,
    title: 'Module 10: Meta Ad Copywriting',
    description: 'Write direct-response Meta ad copy, master Primary Text, Headlines, Descriptions, pain-point hooks, benefit-driven messaging, ethical claims, and CTA selection.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-meta-10-1', title: 'Direct Response Copywriting Frameworks', type: 'article', url: 'https://www.facebook.com/business/help/163829490351020' }
    ],
    lessonContent: {
      overview: `### The Art and Science of Direct-Response Copywriting

While the creative visual stops the user's scroll, the **Ad Copy** does the heavy lifting of building desire, handling objections, explaining the value proposition, and closing the sale.

In this module, you will master the anatomy of Meta ad copy, learn the difference between short-form and long-form copy, understand psychological copywriting frameworks (AIDA, PAS), and ensure your claims comply with Meta's strict advertising standards.`,
      analogyHero: 'If your ad visual is the bright neon sign that makes people stop in front of your store, your ad copy is the friendly, persuasive salesperson standing at the door who explains why the product is worth every penny.',
      objectives: [
        'Master the 3 core text elements: Primary Text, Headline, and Newsfeed Description.',
        'Apply direct-response copywriting frameworks: PAS (Problem-Agitation-Solution) and BAB (Before-After-Bridge).',
        'Distinguish when to use punchy short-form copy vs detailed long-form storytelling.',
        'Ensure ad claims comply with Meta policies regarding realistic claims and ethical advertising.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-10-1',
          title: 'The Anatomy of Meta Ad Copy Elements',
          difficulty: 'Beginner',
          content: `### Understanding Where Text Appears in the UI

1. **Primary Text (Appears above the image/video in feeds):**
   * The first 125 characters are visible before the "...See more" fold. The first 1–2 lines must contain a powerful hook!
2. **Headline (Appears below the image/video next to CTA):**
   * 40–50 characters recommended. Must be clear, bold, and offer-driven (e.g. "Free 2-Day Shipping On Orders $50+").
3. **Description (Appears beneath headline on desktop feeds):**
   * 20–30 characters. Best for reinforcing social proof (e.g. "Rated 4.9/5 by 12,000+ Customers").
4. **Call to Action (CTA Button):**
   * Standard options: "Shop Now", "Learn More", "Sign Up", "Book Now", "Get Offer".`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'ad-copy-anatomy-sample.yaml',
              code: `Ad_Copy_Component_Breakdown:
  Primary_Text: |
    Tired of waking up with severe neck stiffness? 😴 (First 50 chars hook)
    
    Most memory foam pillows trap heat and collapse after 3 months. 
    Our ErgoCloud Pillow uses patented airflow channels and adaptive neck contours to keep your spine aligned all night long.
    
    ✨ 100-Night Risk-Free Sleep Trial
    ✨ Over 25,000 5-Star Reviews
    ✨ Free Express Shipping
    
    Tap below to experience pain-free mornings:
  Headline: "Try ErgoCloud 100 Nights Risk-Free"
  Description: "⭐ 4.9/5 Rating (25k+ Reviews)"
  CTA_Button: "Shop Now"
  Destination_URL: "https://ergocloud.com/products/pillow"`,
              lineByLine: [
                { line: 'Ad_Copy_Component_Breakdown:', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Primary_Text: |', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Tired of waking up with severe neck stiffness? 😴 (First ...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Most memory foam pillows trap heat and collapse after 3 m...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-10-2',
          title: 'Copywriting Frameworks: PAS, BAB, and Social Proof',
          difficulty: 'Beginner',
          content: `### Proven Direct-Response Formulas

- **PAS (Problem - Agitate - Solution):**
  * *Problem:* You spend 3 hours every Sunday doing manual bookkeeping.
  * *Agitate:* That's 150 hours a year stolen from growing your business and spending time with your family.
  * *Solution:* LedgerAI automatically syncs your receipts, categorizes expenses, and prepares taxes in 60 seconds.
- **BAB (Before - After - Bridge):**
  * *Before:* Dull, dehydrated skin that breaks out under makeup.
  * *After:* Glowing, glass-smooth skin that looks radiant without foundation.
  * *Bridge:* Our 3-step peptide serum delivers 72-hour hydration from day one.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'copywriting-frameworks-matrix.json',
              code: `{
  "frameworks": {
    "PAS": {
      "focus": "Pain-point relief & urgency",
      "best_for": "Problem-solving products, SaaS, B2B services"
    },
    "BAB": {
      "focus": "Transformational desire & aesthetic upgrade",
      "best_for": "Skincare, fitness, home decor, lifestyle products"
    },
    "Social_Proof_Stack": {
      "focus": "Overcoming trust skepticism with reviews and press",
      "best_for": "Retargeting warm audiences and cart abandoners"
    }
  }
}`,
              explanation: 'Selecting the right copywriting angle based on product category and audience temperature.',
              lineByLine: [
                { line: '"PAS"', explanation: 'Highlights the cost of inaction to motivate immediate problem resolution.' },
                { line: '"Social_Proof_Stack"', explanation: 'Builds credibility to eliminate conversion hesitation.' }
              ]
            }
          ],
          proTip: 'The first line of your Primary Text is 80% of your copy success. If your first sentence is boring, nobody clicks "See more". Use an intriguing question, a shocking statistic, or a relatable pain point in line 1.',
          commonMistakes: [
            'Writing ad copy that focuses entirely on product features rather than user benefits (e.g. "Made with 1200D nylon" vs "Guaranteed tear-proof for 10 years").',
            'Using exaggerated, non-compliant health or financial claims that trigger ad account rejection (e.g. "Cures back pain in 5 minutes" or "Make $10,000 this week").',
            'Leaving the Headline empty or matching it identically to the product title.'
          ]
        },
        {
          id: 'sec-meta-10-3',
          title: 'Three Full Ad Copy Variations for Real Businesses',
          difficulty: 'Beginner',
          content: `### Complete Copy Examples

1. **E-Commerce Product Sales (PAS Angle):** Skincare brand focusing on winter dry skin.
2. **High-Ticket B2B / Lead Gen (Benefit Angle):** Accounting firm targeting small business founders.
3. **Local Service (Urgency/Offer Angle):** Local dental clinic offering a new-patient cleaning package.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'three-complete-copy-variations.yaml',
              code: `Copy_1_Ecommerce_PAS:
  Primary_Text: "Winter air destroying your skin barrier? ❄️ Typical lotions evaporate in 30 minutes. Our Ceramide Hydration Cream locks in deep moisture for 48 hours."
  Headline: "48-Hour Deep Moisture Guarantee"
  CTA: "Shop Now"

Copy_2_B2B_LeadGen:
  Primary_Text: "Still losing 10 hours a week to manual payroll? Join 500+ agency owners who automated their invoicing with FlowBooks."
  Headline: "Get Your Free 14-Day Trial"
  CTA: "Sign Up"

Copy_3_LocalClinic:
  Primary_Text: "Looking for a gentle family dentist in North Austin? Book your comprehensive exam, x-rays, and cleaning for just $99 (Save $250)."
  Headline: "New Patient $99 Dental Package"
  CTA: "Book Now"`,
              lineByLine: [
                { line: 'Copy_1_Ecommerce_PAS:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Primary_Text: \"Winter air destroying your skin barrier? ...', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Headline: \"48-Hour Deep Moisture Guarantee\"', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'CTA: \"Shop Now\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'The first 125 characters of Primary Text determine whether the user reads further.',
        'Use proven copywriting frameworks: PAS for problem-solvers, BAB for lifestyle transformations.',
        'Ensure all claims are honest, verifiable, and compliant with Meta advertising policies.'
      ],
      summary: 'You now know how to craft high-converting direct-response ad copy across Primary Text, Headlines, and CTAs.',
      practiceExercises: [
        {
          title: '5-Variation Ad Copywriting Suite',
          instructions: 'Write 5 complete ad copy variations (Primary Text, Headline, CTA) for a cold-brew coffee maker, testing 5 distinct angles: Problem/Solution, Testimonial, Cost Savings, Gift Angle, and Founder Story.'
        }
      ]
    }
  },
  {
    id: 'meta-beg-11',
    orderIndex: 11,
    title: 'Module 11: Budgets, Bidding, and Delivery',
    description: 'Master daily vs lifetime budgets, Meta auction mechanics, bidding strategies (Highest Volume, Cost Cap, Bid Cap), and safe scaling budget adjustments.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-meta-11-1', title: 'Meta Ad Auction & Bidding Systems', type: 'documentation', url: 'https://www.facebook.com/business/help/430291170335438' }
    ],
    lessonContent: {
      overview: `### The Economics of the Meta Ad Auction

Meta does not charge advertisers simply based on who has the deepest pockets. Every impression is decided through an instantaneous **Vickrey-Clarke-Groves (VCG) Ad Auction** that calculates Total Value based on Bid, Estimated Action Rates, and Ad Quality.

In this module, you will learn how the ad auction works, explore Daily vs Lifetime budgets, master bidding strategies, and understand how to scale budgets without triggering volatility in learning algorithms.`,
      analogyHero: 'The Meta ad auction is like an Olympic judging panel. You cannot win purely on raw power (your budget). You must also deliver perfect technique (estimated click and conversion rates) and artistry (ad creative quality and user satisfaction). The highest total score wins the gold medal impression.',
      objectives: [
        'Understand the Meta Auction Formula: Total Value = Bid × Estimated Action Rate + Ad Quality.',
        'Distinguish between Daily Budgets (continuous pacing) and Lifetime Budgets (schedule-locked pacing).',
        'Master bidding controls: Highest Volume (default), Cost Cap, and Bid Cap.',
        'Apply the 15%–20% budget scaling rule to preserve machine learning stability.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-11-1',
          title: 'The Total Value Auction Formula Explained',
          difficulty: 'Beginner',
          content: `### How Meta Determines Who Wins Each Impression

Whenever an eligible user opens Instagram or Facebook, an auction occurs in under 100 milliseconds:

$$\\text{Total Value} = (\\text{Advertiser Bid} \\times \\text{Estimated Action Rate}) + \\text{User Value / Ad Quality}$$

1. **Advertiser Bid:** The financial amount you are willing to pay for the desired conversion.
2. **Estimated Action Rate (EAR):** Meta's algorithmic probability that this specific user will complete your conversion event (click, lead, purchase).
3. **Ad Quality & User Value:** Historical feedback, post-click landing page speed, engagement rate, and lack of negative feedback (e.g. "Hide Ad").

*Key Takeaway:* An ad with high CTR, engaging creative, and great landing page experience can win auctions against competitors with 2x your budget!`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'auction-formula-simulation.yaml',
              code: `Competitor_A (High Budget, Low Quality):
  Bid: "$40.00"
  Estimated_Action_Rate: "1.0% (0.01)"
  Ad_Quality_Score: "2.0"
  Total_Value: (40 * 0.01) + 2.0 = 2.40 -> LOSES AUCTION

Your_Brand (Smart Creative, High Relevance):
  Bid: "$20.00"
  Estimated_Action_Rate: "4.5% (0.045)"
  Ad_Quality_Score: "8.5"
  Total_Value: (20 * 0.045) + 8.5 = 9.40 -> WINS AUCTION AT LOWER COST!`,
              lineByLine: [
                { line: 'Competitor_A (High Budget, Low Quality):', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Bid: \"$40.00\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Estimated_Action_Rate: \"1.0% (0.01)\"', explanation: 'Instructs the Meta machine learning auction engine on target conversion signals.' },
                { line: 'Ad_Quality_Score: \"2.0\"', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-11-2',
          title: 'Daily vs Lifetime Budgets and Bidding Controls',
          difficulty: 'Beginner',
          content: `### Budget Pacing and Bidding Strategies

- **Daily Budget:** Instructs Meta to aim for an average spend each day. Meta may spend up to 25% extra on high-opportunity days (e.g. Black Friday) and less on slow days, balancing out over the week.
- **Lifetime Budget:** Sets a fixed total cap over a defined date range. Enables dayparting (running ads only during specific hours of the day).
- **Highest Volume (Default):** Spends your entire budget to get the maximum number of conversions possible.
- **Cost Cap:** Instructs Meta to keep your average CPA at or below a target threshold (e.g. Keep average CPA <= $25.00). If auction costs exceed your cap, spend slows down.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'bidding-strategy-comparison.json',
              code: `{
  "Bidding_Strategies": {
    "Highest_Volume": {
      "risk": "May experience CPA fluctuations during competitive holiday auctions",
      "benefit": "Guarantees 100% budget spend and continuous delivery",
      "best_for": "90% of standard testing and scaling accounts"
    },
    "Cost_Cap": {
      "risk": "May under-spend if target cap is set unrealistically low",
      "benefit": "Protects profit margins by capping allowable acquisition cost",
      "best_for": "Mature accounts with validated unit economics and high budgets"
    }
  }
}`,
              explanation: 'Highest Volume ensures delivery; Cost Cap safeguards contribution margins.',
              lineByLine: [
                { line: '"Highest_Volume"', explanation: 'Standard automated bidding suitable for initial campaigns.' },
                { line: '"Cost_Cap"', explanation: 'Essential for risk-averse brands scaling past $1,000/day.' }
              ]
            }
          ],
          proTip: 'When scaling a winning campaign vertically, increase the daily budget by no more than 15% to 20% every 48 hours. Increasing a $100 budget directly to $500 resets the learning phase and spikes CPMs.',
          commonMistakes: [
            'Setting an aggressive Cost Cap of $5 on a $100 product and wondering why the ad spent $0 after 3 days.',
            'Doubling campaign budget 3 times in a single day and crashing campaign ROAS.',
            'Pausing and unpausing campaigns every morning and evening, preventing the algorithm from pacing spend.'
          ]
        },
        {
          id: 'sec-meta-11-3',
          title: 'Three Budget Strategy Scenarios',
          difficulty: 'Beginner',
          content: `### Real-World Budget Plans

1. **Small Local Business:** $20/day Daily Budget on Highest Volume to maintain steady local presence.
2. **E-Commerce Testing Budget:** $50/day ABO Campaign split across 2 ad sets ($25 each) to validate 4 new creatives.
3. **Scaling a Profitable Campaign:** A CBO scaling campaign at $200/day increased by 15% ($230/day) after maintaining 3.8x ROAS for 3 consecutive days.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'budget-scaling-schedules.yaml',
              code: `Scaling_Schedule_7Days:
  Day_1_to_2: "$200.00/day (Baseline ROAS: 3.8x)"
  Day_3_to_4: "$230.00/day (+15% Scaling, ROAS: 3.6x)"
  Day_5_to_6: "$265.00/day (+15% Scaling, ROAS: 3.5x)"
  Day_7_Assessment: "Maintain spend; unit economics remain well above break-even"`,
              lineByLine: [
                { line: 'Scaling_Schedule_7Days:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Day_1_to_2: \"$200.00/day (Baseline ROAS: 3.8x)\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Day_3_to_4: \"$230.00/day (+15% Scaling, ROAS: 3.6x)\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Day_5_to_6: \"$265.00/day (+15% Scaling, ROAS: 3.5x)\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Total Auction Value is driven by Bid, Estimated Action Rates, and Creative Quality.',
        'Highest Volume is optimal for testing; Cost Caps protect unit economics at scale.',
        'Scale budgets gradually (15%–20% every 48 hours) to maintain machine learning stability.'
      ],
      summary: 'You now understand how the Meta ad auction works and how to manage budgets and bids responsibly.',
      practiceExercises: [
        {
          title: '7-Day Budget Scaling Schedule',
          instructions: 'Create a 7-day budget scaling plan for a campaign starting at $100/day. Specify the exact mathematical daily budget increases, verification metrics, and contingency rules if ROAS drops below 2.0x.'
        }
      ]
    }
  },
  {
    id: 'meta-beg-12',
    orderIndex: 12,
    title: 'Module 12: Basic Metrics and Performance Analysis',
    description: 'Master core advertising metrics (CPM, CTR, CPC, CPA, ROAS, Frequency), calculate unit economics, and interpret Ads Manager reporting tables holistically.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 150,
    level: 'beginner',
    resources: [
      { id: 'res-meta-12-1', title: 'Meta Ads Reporting Metrics Glossary', type: 'documentation', url: 'https://www.facebook.com/business/help/1479652805687809' }
    ],
    lessonContent: {
      overview: `### The Mathematical Foundation of Media Buying

Successful advertising is an exact mathematical discipline. High-performing media buyers do not guess or rely on intuition—they calculate cost metrics, conversion rates, and revenue returns to diagnose exact bottleneck points in the funnel.

In this module, you will master every core advertising metric, learn the essential calculation formulas, and evaluate campaign profitability using Return on Ad Spend (ROAS).`,
      analogyHero: 'Evaluating a campaign with only one metric is like judging a car solely by its top speed while ignoring the fuel level, tire pressure, and brake health. You must inspect all dials together to reach your destination safely.',
      objectives: [
        'Master the definitions and formulas for CPM, CTR, CPC, CPL, CPA, and ROAS.',
        'Understand the relationship between Frequency, Ad Fatigue, and rising CPAs.',
        'Calculate break-even ROAS and contribution margins.',
        'Perform holistic funnel diagnostics on live Ads Manager data tables.'
      ],
      estimatedTime: '40 mins',
      syntaxGuide: `CTR (Click-Through Rate)  = (Link Clicks / Impressions) * 100
CPC (Cost Per Click)        = Total Spend / Link Clicks
CPM (Cost Per Mille)        = (Total Spend / Impressions) * 1,000
CPA (Cost Per Acquisition)  = Total Spend / Total Conversions
ROAS (Return on Ad Spend)   = Total Attributed Revenue / Total Spend`,
      sections: [
        {
          id: 'sec-meta-12-1',
          title: 'Core Metric Definitions & Mathematical Formulas',
          difficulty: 'Beginner',
          content: `### The Essential Media Buying Equation Suite

1. **Impressions & CPM (Cost Per 1,000 Impressions):**
   $$\\text{CPM} = \\left(\\frac{\\text{Spend}}{\\text{Impressions}}\\right) \\times 1000$$
   *Measures auction competition and audience cost.*

2. **Link Clicks & CTR (Click-Through Rate):**
   $$\\text{CTR} = \\left(\\frac{\\text{Link Clicks}}{\\text{Impressions}}\\right) \\times 100$$
   *Measures creative hook strength and audience interest.* (Benchmark: >= 1.5%).

3. **CPC (Cost Per Link Click):**
   $$\\text{CPC} = \\frac{\\text{Spend}}{\\text{Link Clicks}}$$

4. **CPA (Cost Per Action / Purchase):**
   $$\\text{CPA} = \\frac{\\text{Spend}}{\\text{Conversions}}$$

5. **ROAS (Return on Ad Spend):**
   $$\\text{ROAS} = \\frac{\\text{Revenue}}{\\text{Spend}}$$`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'metric-calculation-walkthrough.yaml',
              code: `Campaign_Data:
  Spend: "$200.00"
  Impressions: "40,000"
  Link_Clicks: "800"
  Purchases: "16"
  Revenue: "$960.00"

Calculations:
  CPM:  ($200 / 40,000) * 1000 = $5.00
  CTR:  (800 / 40,000) * 100   = 2.0%
  CPC:  $200 / 800             = $0.25
  CPA:  $200 / 16              = $12.50
  ROAS: $960 / $200            = 4.80x (480%)`,
              lineByLine: [
                { line: 'Campaign_Data:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Spend: \"$200.00\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Impressions: \"40,000\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Link_Clicks: \"800\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-12-2',
          title: 'Frequency, Creative Fatigue & Funnel Diagnostics',
          difficulty: 'Beginner',
          content: `### Reading Diagnostic Metric Combinations

- **Frequency:** The average number of times each unique person has seen your ad (Impressions / Reach).
  * In prospecting: Keep Frequency between 1.1 and 1.8.
  * In retargeting: Frequency of 3.0 to 6.0 is normal.
  * If Frequency hits 3.5+ in prospecting and CTR drops while CPA increases, you are experiencing **Creative Fatigue**.

#### Funnel Diagnostic Cheat Sheet:
1. **High CPM + Low CTR:** Ad creative is boring, unappealing, or audience targeting is too narrow.
2. **High CTR + Low Conversion Rate:** Ad creative creates excitement, but the landing page has high prices, slow loading speeds, broken checkout, or lack of trust.
3. **High Conversion Rate + Low ROAS:** Product price or average order value is too low relative to acquisition costs.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'funnel-diagnostic-decision-tree.json',
              code: `{
  "diagnostics": {
    "Problem_1": {
      "symptom": "High CPM ($45+) and Low CTR (0.4%)",
      "root_cause": "Weak hook or extreme audience overlap",
      "action": "Broaden targeting and test new 3-second visual video hooks"
    },
    "Problem_2": {
      "symptom": "High CTR (3.2%) and Zero Purchases after 200 clicks",
      "root_cause": "Landing page mismatch, slow load time, or broken checkout",
      "action": "Audit mobile page speed and check payment gateway"
    },
    "Problem_3": {
      "symptom": "Rising Frequency (4.2) and declining ROAS over 14 days",
      "root_cause": "Audience saturation / Creative fatigue",
      "action": "Inject 3 fresh ad creatives or expand audience size"
    }
  }
}`,
              explanation: 'Systematic diagnostics isolate the exact bottleneck in the customer journey.',
              lineByLine: [
                { line: '"Problem_1"', explanation: 'Identifies creative resonance issues in the feed.' },
                { line: '"Problem_2"', explanation: 'Isolates post-click on-site friction.' }
              ]
            }
          ],
          proTip: 'Never calculate ROAS on a single day\'s data. Meta attribution can take up to 24–48 hours for server conversions (CAPI) to fully reconcile. Look at 3-day and 7-day rolling windows before turning off campaigns.',
          commonMistakes: [
            'Looking at CPC or CPM in isolation without calculating final CPA and ROAS.',
            'Turning off a profitable 4.0x ROAS ad set because its CPC was $2.00.',
            'Ignoring frequency spikes on retargeting campaigns and burning out warm audiences.'
          ]
        },
        {
          id: 'sec-meta-12-3',
          title: 'Three Real-World Metric Case Studies',
          difficulty: 'Beginner',
          content: `### Three Performance Analysis Scenarios

1. **Calculate CTR:** 25,000 impressions and 500 clicks = (500 / 25,000) * 100 = 2.0% CTR.
2. **Calculate CPC and CPM:** $100 spent for 10,000 impressions and 200 clicks = CPM = $10.00, CPC = $0.50.
3. **Calculate ROAS & Profitability:** $300 spent generating $1,200 revenue = $1,200 / $300 = 4.0x ROAS. (Highly profitable).`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'case-study-metric-evaluations.yaml',
              code: `Evaluation_1_CTR:
  Impressions: 25000
  Clicks: 500
  Result: "2.0% CTR (Healthy benchmark)"

Evaluation_2_CPC_CPM:
  Spend: 100
  Impressions: 10000
  Clicks: 200
  Result: "CPM: $10.00, CPC: $0.50"

Evaluation_3_ROAS:
  Spend: 300
  Revenue: 1200
  Result: "4.0x ROAS (Target: >= 2.5x -> WINNER)"`,
              lineByLine: [
                { line: 'Evaluation_1_CTR:', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Impressions: 25000', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Clicks: 500', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Result: \"2.0% CTR (Healthy benchmark)\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Master the fundamental equations: CTR, CPC, CPM, CPA, and ROAS.',
        'High CTR + Low Conversion indicates landing page or offer friction.',
        'Rising Frequency with falling ROAS signals creative fatigue requiring fresh ad assets.'
      ],
      summary: 'You now know how to calculate, interpret, and diagnose every critical metric in Meta Ads Manager.',
      practiceExercises: [
        {
          title: '10-Scenario Metric Master Problem Set',
          instructions: 'Given a raw data sheet with 10 campaign rows containing Spend, Impressions, Clicks, and Revenue, calculate CPM, CTR, CPC, and ROAS for every row and identify the top 2 profitable campaigns.'
        }
      ]
    }
  },
  {
    id: 'meta-beg-13',
    orderIndex: 13,
    title: 'Beginner Capstone Project: Build a Complete Beginner Campaign Plan',
    description: 'Construct an end-to-end beginner campaign plan for a fictional Shopify fashion store selling a $60 product. Detail business goals, objectives, audience, retargeting, 3 ad copies, budget plan, KPI targets, and optimization rules.',
    status: 'locked',
    requiresQuiz: false,
    xpReward: 300,
    level: 'beginner',
    resources: [
      { id: 'res-meta-beg-proj', title: 'Beginner Project Brief & Submission Template', type: 'documentation', url: 'https://skillora.ai/docs/meta-beginner-project' }
    ],
    lessonContent: {
      overview: `### Beginner Level Capstone Project Brief

#### Business Scenario:
You are the lead media buyer for **"Lumina Apparel"**, a fictional direct-to-consumer Shopify fashion brand launching an eco-friendly linen summer dress priced at **$60.00** (Product cost: $15.00, Gross Margin: $45.00 / 75%). 

You have been given a **$1,500 monthly testing budget** ($50/day). Your mission is to design, structure, and document a complete, professional Meta Ads campaign strategy.

---

### Required Deliverables Checklist:
1. **Business Goal & Meta Objective:** Explain the chosen objective and optimization event with commercial justification.
2. **Campaign Architecture:** Detail CBO vs ABO selection and complete hierarchy tree (Campaign → Ad Sets → Ads).
3. **Audience Strategy:** Detail 1 Broad Prospecting audience, 1 Interest-based prospecting audience, and 1 Warm Retargeting audience with exact exclusions.
4. **Creative Strategy & Storyboards:** Outline 3 distinct creative concepts (UGC Try-on Reel, Lifestyle Photo Carousel, Feature-Benefit Graphic).
5. **3 Complete Ad Copy Variations:** Write full Primary Text (with hooks), Headlines, Descriptions, and CTA for all 3 angles.
6. **7-Day Budget & Bidding Plan:** Detail daily budget allocations and bidding controls.
7. **Target KPI Matrix:** Calculate target CPM, CTR, CPC, allowable CPA, and minimum acceptable ROAS.
8. **Optimization Decision Rules:** Define explicit rules for when to pause losers and when to scale winners.`,
      analogyHero: 'This capstone project brings together all 12 modules into a single, cohesive, client-ready advertising proposal.',
      objectives: [
        'Apply full-funnel campaign architecture to a real-world $60 DTC fashion product.',
        'Formulate cold prospecting and warm retargeting audiences with strict exclusion rules.',
        'Draft 3 professional direct-response ad copies using PAS and benefit frameworks.',
        'Calculate allowable CPA and target break-even ROAS based on unit economics.'
      ],
      estimatedTime: '60 mins',
      syntaxGuide: `Unit Economics Baseline:
Product Retail Price:  $60.00
Cost of Goods (COGS):  $15.00
Gross Margin:          $45.00 (75%)
Break-Even CPA:        $45.00 (Spend <= $45 per purchase is profitable)
Target CPA:            $20.00 (Target ROAS = $60 / $20 = 3.0x)`,
      sections: [
        {
          id: 'sec-meta-proj-1',
          title: 'Capstone Strategy Specification & Blueprint',
          difficulty: 'Beginner',
          content: `### Step-by-Step Blueprint Instructions

To complete your capstone submission, write a detailed strategy document following this structure:

#### 1. Executive Summary & Objective Alignment
- **Campaign Objective:** Sales (Outcome: Conversions).
- **Optimization Event:** Purchase (via Shopify Meta Pixel + CAPI integration).
- **Justification:** Optimizing for Sales directs Meta's algorithm to deliver impressions to users with verified online shopping behaviors rather than passive link-clickers.

#### 2. Account Structure & Audience Plan
- **Campaign 1 (Prospecting ABO - $40/day):**
  * *Ad Set 1 (Broad US Women 21–45, No Interests):* $20/day. Excludes 30-day purchasers and 14-day website visitors.
  * *Ad Set 2 (Interests: Sustainable Fashion, Linen Clothing, Eco-friendly):* $20/day. Excludes 30-day purchasers.
- **Campaign 2 (Retargeting ABO - $10/day):**
  * *Ad Set 1 (Cart Abandoners 1–7 Days):* $10/day. Excludes 30-day purchasers.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'lumina-apparel-campaign-plan.yaml',
              code: `Campaign_1_Prospecting_ABO:
  Objective: Sales (Purchase)
  Budget: "$40.00/day"
  AdSet_1_Broad:
    Targeting: "US, Women 21-45, Broad"
    Exclusions: "Purchasers 30D, Web Visitors 14D"
    Budget: "$20.00/day"
    Ads: ["Ad_1_UGC_Reel", "Ad_2_Lifestyle_Carousel"]
  AdSet_2_Interests:
    Targeting: "US, Women 21-45, Interests: Sustainable Fashion"
    Exclusions: "Purchasers 30D"
    Budget: "$20.00/day"
    Ads: ["Ad_1_UGC_Reel", "Ad_3_Feature_Benefit"]

Campaign_2_Retargeting_ABO:
  Objective: Sales (Purchase)
  Budget: "$10.00/day"
  AdSet_1_Cart_Abandoners:
    Targeting: "AddToCart 7D"
    Exclusions: "Purchasers 30D"
    Budget: "$10.00/day"
    Ads: ["Ad_Retargeting_Offer_Carousel"]`,
              lineByLine: [
                { line: 'Campaign_1_Prospecting_ABO:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Objective: Sales (Purchase)', explanation: 'Instructs the Meta machine learning auction engine on target conversion signals.' },
                { line: 'Budget: \"$40.00/day\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'AdSet_1_Broad:', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-proj-2',
          title: 'Creative, Copy & Financial Target Matrix',
          difficulty: 'Beginner',
          content: `#### 3. 3 Complete Ad Copy Deliverables
- **Ad 1 (UGC Video Hook):**
  * *Primary Text:* "Finally, a summer linen dress that doesn't wrinkle in 5 minutes! 🌿 Made from 100% organic French flax linen that gets softer with every wash. ✨ Breathable, lightweight, and tailored with deep pockets."
  * *Headline:* "Shop 100% Organic French Linen"
  * *Description:* "⭐ 4.9/5 Rating (Over 3,000 Reviews)"
  * *CTA:* "Shop Now"
- **Ad 2 (Lifestyle Carousel - Feature Angle):**
  * *Primary Text:* "From beach mornings to rooftop dinners. Meet your new summer staple in 4 vibrant colors."
  * *Headline:* "Summer Linen Collection | $60"
  * *CTA:* "Shop Now"
- **Ad 3 (Retargeting Offer - Urgency Angle):**
  * *Primary Text:* "Did you leave something behind? Your summer linen dress is waiting in your cart. Take an extra 10% off with code SUMMER10 today only."
  * *Headline:* "Complete Your Order & Save 10%"
  * *CTA:* "Shop Now"

#### 4. KPI Benchmarks & Optimization Rules
- **Target CPM:** <= $15.00
- **Target Link CTR:** >= 2.0%
- **Target CPC:** <= $0.75
- **Break-Even CPA:** $45.00
- **Target CPA:** $20.00
- **Target ROAS:** >= 3.0x ($60 / 20 = 3.0).
- **Optimization Rule 1 (Kill Rule):** If an ad spends 1.5x Target CPA ($30.00) with 0 purchases and link CTR < 1.0%, pause immediately.
- **Optimization Rule 2 (Scale Rule):** If an ad set maintains >= 3.5x ROAS over a 3-day rolling window with >= 5 purchases, increase budget by 20%.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'kpi-target-matrix.json',
              code: `{
  "lumina_financial_kpis": {
    "product_price": 60.00,
    "cogs": 15.00,
    "gross_profit_margin": 45.00,
    "breakeven_roas": 1.33,
    "target_cpa": 20.00,
    "target_roas": 3.00,
    "pause_threshold_spend": 30.00,
    "scale_threshold_roas": 3.50
  }
}`,
              lineByLine: [
                { line: '"product_price": 60.00', explanation: 'Encapsulates the financial model parameters for the product.' },
                { line: '"gross_profit_margin": 45.00', explanation: 'Gross profit margin ($45.00) sets the ceiling for allowable acquisition spend.' },
                { line: '"breakeven_roas": 1.33', explanation: 'Break-even ROAS (1.33x) indicates the absolute minimum efficiency to avoid net loss.' },
                { line: '"target_cpa": 20.00', explanation: 'Target CPA ($20.00) locks in a $25.00 profit per new customer acquired.' },
                { line: '"pause_threshold_spend": 30.00', explanation: 'Automated pause threshold prevents any ad from losing more than 1.5x allowable CPA.' }
              ]
            },
            {
              language: 'yaml',
              filename: 'lumina-daily-audit-checklist.yaml',
              code: `Lumina_Daily_Operating_Procedure:
  Step_1_Spend_Audit:
    Action: "Check if Campaign 1 reached $40.00 budget and Campaign 2 reached $10.00 budget"
  Step_2_CTR_Diagnostics:
    Action: "Verify Link CTR >= 2.0% across all 3 active ads"
    Threshold: "Pause if CTR < 1.0% after $15.00 spend"
  Step_3_Purchase_Confirmation:
    Action: "Cross-reference Meta reported purchases with Shopify Orders dashboard"
  Step_4_Scale_Decision:
    Condition: "ROAS >= 3.5x over 3 consecutive days"
    Execution: "Increase CBO daily budget by 20% ($40 -> $48)"`,
              lineByLine: [
                { line: 'Step_1_Spend_Audit', explanation: 'Audits daily pacing to ensure full budget distribution without under-delivery.' },
                { line: 'Step_2_CTR_Diagnostics', explanation: 'Assesses top-of-funnel creative resonance before evaluating conversion metrics.' },
                { line: 'Step_3_Purchase_Confirmation', explanation: 'Reconciles ad-platform attribution with backend store revenue truth.' },
                { line: 'Step_4_Scale_Decision', explanation: 'Executes controlled budget scaling without triggering algorithmic reset.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'A comprehensive campaign plan connects creative, targeting, unit economics, and optimization rules.',
        'Always establish explicit Kill and Scale criteria based on allowable acquisition costs.',
        'Ensure retargeting campaigns exclude recent purchasers to maximize net-new ROI.'
      ],
      summary: 'You have mastered the entire beginner curriculum and are now ready to complete the Beginner Final Assessment.',
      practiceExercises: [
        {
          title: 'Capstone Plan Verification',
          instructions: 'Review your completed Lumina Apparel campaign plan against the 8 required checklist deliverables to verify full commercial alignment.'
        }
      ]
    }
  },
  {
    id: 'meta-beg-14',
    orderIndex: 14,
    title: 'Beginner Final Assessment: Meta Ads Core Competency',
    description: 'Comprehensive 20-question formal assessment testing Meta Ads ecosystem, business asset management, hierarchy, objectives, custom audiences, lookalikes, creative, copy, budgets, and metrics. Requires 15/20 (75%) to pass.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 500,
    level: 'beginner',
    passingScore: 15,
    totalQuestions: 20,
    isFinalAssessment: true,
    questions: META_BEGINNER_FINAL_ASSESSMENT,
    resources: []
  }
];
