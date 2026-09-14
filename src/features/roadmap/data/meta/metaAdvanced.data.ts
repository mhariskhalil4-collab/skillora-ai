import { Task, QuizQuestion } from '../../types/roadmap.types';

export const META_ADVANCED_FINAL_ASSESSMENT: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Account Architecture',
    question: 'What is the main purpose of advanced account architecture?',
    options: [
      'Add unnecessary campaigns',
      'Organize campaigns around clear business and testing needs',
      'Avoid reporting',
      'Remove all audiences'
    ],
    correctAnswer: 1, // B
    explanation: 'Advanced account architecture structures campaigns cleanly around clear business objectives, testing sandboxes, scaling environments, and retargeting stages while avoiding audience fragmentation.'
  },
  {
    id: 2,
    topic: 'Unit Economics',
    question: 'What is contribution margin useful for?',
    options: [
      'Understanding how much revenue remains after relevant variable costs',
      'Choosing an Instagram username',
      'Designing thumbnails',
      'Writing headlines'
    ],
    correctAnswer: 0, // A
    explanation: 'Contribution margin reveals the true dollar amount available to cover advertising spend and fixed overhead after subtracting Cost of Goods Sold (COGS), shipping, and payment processing fees.'
  },
  {
    id: 3,
    topic: 'Break-Even Economics',
    question: 'If contribution margin is 25%, the simplified break-even ROAS is:',
    options: [
      '0.25',
      '1',
      '2',
      '4'
    ],
    correctAnswer: 3, // D
    explanation: 'Break-Even ROAS = 1 / Contribution Margin % = 1 / 0.25 = 4.0 (or 400%).'
  },
  {
    id: 4,
    topic: 'Financial Modeling',
    question: 'Why is break-even ROAS more useful than a universal ROAS target?',
    options: [
      'It connects advertising efficiency to the business\'s economics',
      'It guarantees profit',
      'It removes all costs',
      'It applies identically to every business'
    ],
    correctAnswer: 0, // A
    explanation: 'Every business has different product margins and cost structures. A 3.0x ROAS is profitable for an 80% margin brand but catastrophic for a 20% margin retailer.'
  },
  {
    id: 5,
    topic: 'Incrementality',
    question: 'What is incremental growth concerned with?',
    options: [
      'Growth caused by additional advertising activity rather than merely credited conversions',
      'Increasing image resolution',
      'Changing campaign names',
      'Increasing page followers only'
    ],
    correctAnswer: 0, // A
    explanation: 'Incrementality measures the net-new sales directly caused by advertising spend that would not have occurred organically.'
  },
  {
    id: 6,
    topic: 'First-Party Data',
    question: 'What is a major advantage of high-quality first-party customer data?',
    options: [
      'It can provide useful signals for audience and measurement strategies',
      'It guarantees cheap advertising',
      'It eliminates all privacy requirements',
      'It guarantees conversion'
    ],
    correctAnswer: 0, // A
    explanation: 'First-party customer data enables high-fidelity value-based lookalikes, CRM enrichment, server-side CAPI matching, and precise retention segmentation.'
  },
  {
    id: 7,
    topic: 'CAPI & Event Deduplication',
    question: 'What is the purpose of an event ID in browser/server measurement?',
    options: [
      'It can help identify matching events for deduplication',
      'It creates an ad creative',
      'It sets the budget',
      'It creates a Page'
    ],
    correctAnswer: 0, // A
    explanation: 'A unique event_id shared between browser and server payloads allows Meta to recognize identical conversion records and prevent duplicate reporting.'
  },
  {
    id: 8,
    topic: 'Measurement Discrepancies',
    question: 'What should an advertiser do when Meta-reported revenue differs from another analytics system?',
    options: [
      'Investigate definitions, attribution, tracking, timing, and measurement differences',
      'Automatically assume Meta is wrong',
      'Automatically assume analytics is wrong',
      'Delete both systems'
    ],
    correctAnswer: 0, // A
    explanation: 'Different platforms use different attribution models (e.g. 7-day click / 1-day view on Meta vs Last-Non-Direct-Click on Google Analytics) and tracking methodologies.'
  },
  {
    id: 9,
    topic: 'Blended Metrics',
    question: 'What is MER generally used to describe?',
    options: [
      'Overall revenue relative to total marketing spend',
      'Clicks divided by impressions',
      'Cost per thousand impressions',
      'Number of ad sets'
    ],
    correctAnswer: 0, // A
    explanation: 'Marketing Efficiency Ratio (MER), also known as Blended ROAS, is calculated as Total Business Revenue / Total Marketing Spend across all channels.'
  },
  {
    id: 10,
    topic: 'Holistic Measurement',
    question: 'Why can MER complement platform-level ROAS?',
    options: [
      'It can provide a broader view of total marketing efficiency',
      'It replaces all analytics',
      'It measures creative quality directly',
      'It guarantees attribution accuracy'
    ],
    correctAnswer: 0, // A
    explanation: 'MER provides top-line financial truth at the P&L level, balancing out platform attribution over-counting or cross-channel cannibalization.'
  },
  {
    id: 11,
    topic: 'Creative Systems',
    question: 'What is a good advanced creative system?',
    options: [
      'Producing and iterating multiple strategic angles based on customer insight and performance',
      'Running one creative forever',
      'Changing everything randomly',
      'Avoiding testing'
    ],
    correctAnswer: 0, // A
    explanation: 'An advanced creative system establishes continuous pipelines for research, creator briefing, iterative hook testing, and scaling high-performing formats.'
  },
  {
    id: 12,
    topic: 'Fatigue Dynamics',
    question: 'Why is creative fatigue important at scale?',
    options: [
      'Repeated exposure can reduce response efficiency',
      'It always increases ROAS',
      'It only affects billing',
      'It disables conversion tracking'
    ],
    correctAnswer: 0, // A
    explanation: 'As spend scales, audiences see the same ads multiple times, leading to declining engagement, lower CTRs, and higher acquisition costs.'
  },
  {
    id: 13,
    topic: 'Creative Strategy',
    question: 'What is a creative hypothesis?',
    options: [
      'A testable prediction about how a creative variable may influence performance',
      'A billing receipt',
      'A password',
      'A business address'
    ],
    correctAnswer: 0, // A
    explanation: 'A creative hypothesis articulates why a specific angle or hook will resonate (e.g. "Showing a split-screen before/after demonstration will increase Link CTR by 40%").'
  },
  {
    id: 14,
    topic: 'Data Analysis',
    question: 'Why should advanced advertisers distinguish signal from noise?',
    options: [
      'Short-term fluctuations do not always indicate a durable performance change',
      'Every daily change is meaningful',
      'Data is never variable',
      'Campaigns never fluctuate'
    ],
    correctAnswer: 0, // A
    explanation: 'Single-day fluctuations in spend or CPA are often random statistical variance; decisions must be based on multi-day trends and statistical sample sizes.'
  },
  {
    id: 15,
    topic: 'Customer Lifetime Value',
    question: 'What is customer lifetime value?',
    options: [
      'The expected value generated by a customer over the relevant relationship period',
      'One impression',
      'One click',
      'One ad view'
    ],
    correctAnswer: 0, // A
    explanation: 'Customer Lifetime Value (LTV) is the total cumulative net profit or revenue a customer generates across all repeat purchases over their entire lifecycle.'
  },
  {
    id: 16,
    topic: 'LTV & CAC Economics',
    question: 'Why compare CAC and LTV?',
    options: [
      'To understand whether customer acquisition economics can support sustainable growth',
      'To calculate image dimensions',
      'To choose a font',
      'To create a Facebook Page'
    ],
    correctAnswer: 0, // A
    explanation: 'Comparing Customer Acquisition Cost (CAC) against LTV ensures the business can acquire customers profitably over time (e.g. LTV:CAC ratio of 3:1 or higher).'
  },
  {
    id: 17,
    topic: 'Lead Conversion',
    question: 'What is lead-to-sale rate?',
    options: [
      'The proportion of leads that become sales under a defined measurement period/process',
      'CPM divided by CTR',
      'Impressions divided by spend',
      'Revenue divided by reach'
    ],
    correctAnswer: 0, // A
    explanation: 'Lead-to-sale rate measures downstream sales velocity: (Closed Won Customers / Total Generated Leads) * 100.'
  },
  {
    id: 18,
    topic: 'Lead Economics',
    question: 'Why can optimizing only for cheap leads be dangerous?',
    options: [
      'Low-cost leads may have poor downstream quality',
      'Cheap leads always have high LTV',
      'Lead quality cannot be measured',
      'Sales teams never matter'
    ],
    correctAnswer: 0, // A
    explanation: 'Frictionless, ultra-cheap leads often consist of incorrect contact data or unmotivated prospects, wasting expensive sales team time and producing zero revenue.'
  },
  {
    id: 19,
    topic: 'CRM Integration',
    question: 'What is a CRM feedback loop useful for?',
    options: [
      'Connecting downstream lead quality or sales outcomes back to marketing decisions',
      'Designing logos',
      'Changing ad colors',
      'Removing reporting'
    ],
    correctAnswer: 0, // A
    explanation: 'A CRM feedback loop transmits downstream closed-won revenue back to Meta (via CAPI Offline Conversions) to train the algorithm on high-value buyers.'
  },
  {
    id: 20,
    topic: 'Full-Funnel Strategy',
    question: 'What is a full-funnel strategy designed to do?',
    options: [
      'Address different stages of the customer journey toward business outcomes',
      'Show the same ad to everyone',
      'Avoid conversion tracking',
      'Focus only on impressions'
    ],
    correctAnswer: 0, // A
    explanation: 'A full-funnel strategy orchestrates top-of-funnel demand creation, middle-of-funnel evaluation, and bottom-of-funnel conversion and retention.'
  },
  {
    id: 21,
    topic: 'Account Structure',
    question: 'Why can audience fragmentation be harmful?',
    options: [
      'Excessive fragmentation can reduce data concentration and make optimization harder',
      'More fragmentation always improves delivery',
      'It guarantees lower CPM',
      'It guarantees more sales'
    ],
    correctAnswer: 0, // A
    explanation: 'Splitting budget into dozens of micro-audiences prevents ad sets from reaching the 50 weekly conversion threshold needed for machine learning stability.'
  },
  {
    id: 22,
    topic: 'Targeting Philosophy',
    question: 'What is one reason broad strategies can work well?',
    options: [
      'They can provide a larger eligible audience while allowing the platform more room to optimize',
      'Broad always guarantees profit',
      'Broad removes the need for creative',
      'Broad guarantees purchases'
    ],
    correctAnswer: 0, // A
    explanation: 'Broad targeting gives Meta machine learning maximum liquidity to find buyers across millions of users at the lowest auction CPMs.'
  },
  {
    id: 23,
    topic: 'Automation Strategy',
    question: 'What is the correct approach to automation?',
    options: [
      'Use automation where appropriate while maintaining strategic oversight and measurement',
      'Trust every automated recommendation blindly',
      'Never use automation',
      'Remove all conversion signals'
    ],
    correctAnswer: 0, // A
    explanation: 'Leverage algorithmic tools (Advantage+ Shopping, CBO, Dynamic Creative) while maintaining human control over unit economics, creative quality, and strategy.'
  },
  {
    id: 24,
    topic: 'Machine Learning Inputs',
    question: 'What is a major input to automated advertising systems?',
    options: [
      'Conversion signals and creative quality',
      'Employee birthdays',
      'Office furniture',
      'Logo dimensions only'
    ],
    correctAnswer: 0, // A
    explanation: 'Meta automation engines rely heavily on clean, deduplicated conversion telemetry (Pixel/CAPI) and high-converting, resonant creative assets.'
  },
  {
    id: 25,
    topic: 'International Advertising',
    question: 'Why does localization matter in international advertising?',
    options: [
      'Language, culture, offers, economics, and customer expectations can differ across markets',
      'Every market is identical',
      'Translation never matters',
      'Currency never matters'
    ],
    correctAnswer: 0, // A
    explanation: 'Consumers in different countries have unique cultural references, payment preferences (e.g. Klarna, iDEAL), currencies, and delivery expectations.'
  },
  {
    id: 26,
    topic: 'Global Expansion',
    question: 'What should happen before expanding into a new country?',
    options: [
      'Validate market economics, demand, logistics, localization, and measurement',
      'Duplicate the campaign blindly',
      'Remove all tracking',
      'Assume identical CPA'
    ],
    correctAnswer: 0, // A
    explanation: 'Before launching international ad spend, verify shipping logistics, local import taxes, payment gateway support, and translated landing pages.'
  },
  {
    id: 27,
    topic: 'Account Auditing',
    question: 'What is a professional account audit intended to discover?',
    options: [
      'Structural, tracking, creative, audience, performance, and governance issues',
      'Only the Page profile picture',
      'Only the ad color',
      'Only the number of comments'
    ],
    correctAnswer: 0, // A
    explanation: 'A comprehensive audit evaluates pixel telemetry, EMQ scores, campaign architecture, audience overlap, creative fatigue, and ROAS profitability.'
  },
  {
    id: 28,
    topic: 'Governance & SOPs',
    question: 'Why are change logs useful?',
    options: [
      'They help connect account changes with subsequent performance',
      'They guarantee ROAS',
      'They replace Ads Manager',
      'They create audiences automatically'
    ],
    correctAnswer: 0, // A
    explanation: 'Change logs document exact modifications (budget shifts, new creatives, targeting changes) to correlate actions with subsequent performance shifts.'
  },
  {
    id: 29,
    topic: 'Senior Optimization',
    question: 'What is a useful senior-level optimization sequence?',
    options: [
      'Diagnose the business, funnel, measurement, creative, audience, and economics before changing variables',
      'Increase budget immediately',
      'Change every setting simultaneously',
      'Pause everything'
    ],
    correctAnswer: 0, // A
    explanation: 'Senior strategists diagnose the entire business ecosystem—unit economics, landing page speed, telemetry, creative resonance—before touching live campaign levers.'
  },
  {
    id: 30,
    topic: 'Performance Troubleshooting',
    question: 'What is a common cause of apparent advertising failure that should be checked before major optimization?',
    options: [
      'Broken or incomplete conversion measurement',
      'Office location',
      'Logo size',
      'Page username'
    ],
    correctAnswer: 0, // A
    explanation: 'Broken pixels, failed CAPI webhooks, or unverified domains often cause conversions to be dropped, making healthy campaigns appear unprofitable.'
  },
  {
    id: 31,
    topic: 'Unit Economics',
    question: 'What does customer acquisition cost represent?',
    options: [
      'Cost associated with acquiring a customer under a defined calculation',
      'CPM only',
      'Number of impressions',
      'Number of followers'
    ],
    correctAnswer: 0, // A
    explanation: 'Customer Acquisition Cost (CAC) reflects the total blended marketing and sales expense required to acquire one net-new paying customer.'
  },
  {
    id: 32,
    topic: 'Catalog Strategy',
    question: 'Why can product-level economics matter in catalog advertising?',
    options: [
      'Different products can have different margins and allowable acquisition costs',
      'Every product has identical economics',
      'Catalogs cannot generate sales',
      'Product margin is unrelated to advertising'
    ],
    correctAnswer: 0, // A
    explanation: 'A $20 item with 50% margin cannot support the same allowable CPA as a $250 item with 80% margin. Catalogs must be segmented by margin tier.'
  },
  {
    id: 33,
    topic: 'Customer Segmentation',
    question: 'What is a strong reason to segment high-value customers?',
    options: [
      'Their behavior and economics may provide more useful signals than undifferentiated customer data',
      'They are always cheaper to acquire',
      'They cannot be measured',
      'They should always be excluded'
    ],
    correctAnswer: 0, // A
    explanation: 'Top-tier VIP customers represent disproportionate profit; their data creates superior lookalike seeds and targeted VIP loyalty campaigns.'
  },
  {
    id: 34,
    topic: 'Media Buying Strategy',
    question: 'What is a professional media-buying recommendation?',
    options: [
      'A data-informed action tied to a clearly stated business hypothesis',
      'A random setting change',
      'A guaranteed promise',
      'A personal preference with no evidence'
    ],
    correctAnswer: 0, // A
    explanation: 'Strategic recommendations must be grounded in empirical data, clearly defined KPIs, and commercial business hypotheses.'
  },
  {
    id: 35,
    topic: 'Client Management',
    question: 'Why should advertisers communicate uncertainty to clients?',
    options: [
      'Measurement and performance are affected by multiple variables and imperfect signals',
      'Clients should never receive data',
      'Advertising is always predictable',
      'Uncertainty means reporting is unnecessary'
    ],
    correctAnswer: 0, // A
    explanation: 'Honest communication regarding market volatility, attribution modeling limitations, and testing realities builds trust and long-term client retention.'
  },
  {
    id: 36,
    topic: 'Strategic Planning',
    question: 'What is the best reason to use a 30/60/90-day strategy?',
    options: [
      'It creates a structured framework for testing, learning, scaling, and reassessment',
      'It guarantees revenue',
      'It removes the need for optimization',
      'It prevents creative testing'
    ],
    correctAnswer: 0, // A
    explanation: 'A 30/60/90-day roadmap establishes clear phased milestones: Phase 1 (Audit & Foundation), Phase 2 (Testing & Calibration), Phase 3 (Aggressive Scaling).'
  },
  {
    id: 37,
    topic: 'Budget Reallocation',
    question: 'What should be considered when reallocating budget?',
    options: [
      'Marginal performance, business economics, learning stability, and future scalability',
      'Only impressions',
      'Only likes',
      'Only campaign age'
    ],
    correctAnswer: 0, // A
    explanation: 'Capital should flow toward campaigns generating the highest marginal profit while preserving machine learning stability in scaling ad sets.'
  },
  {
    id: 38,
    topic: 'Scaling Principles',
    question: 'What is a sustainable scaling principle?',
    options: [
      'Increase spend when additional spend can maintain acceptable economics',
      'Increase spend regardless of profitability',
      'Never increase spend',
      'Scale only based on comments'
    ],
    correctAnswer: 0, // A
    explanation: 'Sustainable growth scales ad spend only as long as marginal revenue exceeds allowable marginal customer acquisition costs.'
  },
  {
    id: 39,
    topic: 'Compliance & Ethics',
    question: 'What is the most responsible approach to advertising claims?',
    options: [
      'Use truthful, supportable claims and avoid misleading promises',
      'Guarantee outcomes',
      'Exaggerate product results',
      'Hide important limitations'
    ],
    correctAnswer: 0, // A
    explanation: 'Truthful, compliant advertising protects brand reputation, maintains merchant ad account health, and builds genuine customer loyalty.'
  },
  {
    id: 40,
    topic: 'Senior Mastery',
    question: 'What distinguishes a senior Meta Ads strategist from someone who only knows Ads Manager buttons?',
    options: [
      'Ability to connect platform data, customer psychology, creative, funnel performance, measurement, and business economics',
      'Ability to memorize interface colors',
      'Ability to create the most campaigns',
      'Ability to spend the largest budget'
    ],
    correctAnswer: 0, // A
    explanation: 'A true senior strategist integrates platform machine learning, direct-response copywriting, creative direction, technical telemetry, and P&L financial economics into a scalable growth system.'
  }
];

export const META_ADVANCED_TASKS: Task[] = [
  {
    id: 'meta-adv-01',
    orderIndex: 1,
    title: 'Module 1: Advanced Meta Ads Account Architecture',
    description: 'Design enterprise multi-campaign structures, global multi-market setups, product portfolio segmentation, and governance protocols.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-01', title: 'Enterprise Account Architecture Guide', type: 'documentation', url: 'https://skillora.ai/docs/enterprise-meta-architecture' }
    ],
    lessonContent: {
      overview: `### Enterprise Account Architecture & Governance

Managing an ad account spending $500,000/month across multiple product lines, international geographies, and creative pipelines requires structural discipline. Unstructured ad accounts suffer from audience cannibalization, signal dilution, and operational chaos.

In this module, you will learn how to design enterprise-grade account architectures, manage multi-market setups, and implement governance protocols.`,
      analogyHero: 'Think of enterprise account architecture like urban city planning. You don\'t build a skyscraper, a farm, a power plant, and a daycare on the same street corner. You zone the city into commercial, industrial, and residential sectors with clear transit highways connecting them.',
      objectives: [
        'Architect multi-tier enterprise accounts across Prospecting, Testing, Scaling, and Retention.',
        'Structure international multi-market advertising accounts without currency conflict.',
        'Prevent internal auction collision across multi-product catalogs.',
        'Implement standardized change logs and account governance protocols.'
      ],
      estimatedTime: '40 mins',
      sections: [
        {
          id: 'sec-meta-adv-1-1',
          title: 'The Modern Consolidated Account Blueprint',
          difficulty: 'Advanced',
          content: `### Why Account Consolidation Outperforms Fragmentation

Meta machine learning algorithms require consolidated signal density. An enterprise account should operate no more than 3 to 5 core campaigns:

1. **Campaign 1 (Advantage+ Shopping / CBO Scale):** Houses evergreen proven creative winners against Broad targeting. Receives 65%–75% of total budget.
2. **Campaign 2 (Dynamic Creative Testing - ABO Sandbox):** Weekly testing pipeline for new visual hooks, formats, and angles. Receives 15%–20% of budget.
3. **Campaign 3 (Dynamic Retargeting & LTV Retention):** Catalog retargeting and VIP customer cross-sell. Receives 10%–15% of budget.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'consolidated-enterprise-architecture.yaml',
              code: `Enterprise_Account_Architecture:
  Campaign_1_CBO_Scaling:
    Budget_Share: 70%
    Targeting: Broad US (Open Demographics)
    Ad_Units: 4-6 Graduated Post ID Winners
  Campaign_2_ABO_Creative_R_And_D:
    Budget_Share: 18%
    Structure: 3-4 Weekly 3:2:2 DCT Ad Sets
  Campaign_3_Dynamic_Retargeting:
    Budget_Share: 8%
    Structure: DPA Catalog Retargeting (1-7D)
  Campaign_4_VIP_Retention:
    Budget_Share: 4%
    Structure: Past Customer Cross-Sell (30-180D)`,
              lineByLine: [
                { line: 'Enterprise_Account_Architecture:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Campaign_1_CBO_Scaling:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Budget_Share: 70%', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Targeting: Broad US (Open Demographics)', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-1-2',
          title: 'Multi-Market & International Expansion Architecture',
          difficulty: 'Advanced',
          content: `### Managing Multi-Country Delivery

When scaling globally, do not lump countries with wildly different CPMs and purchasing power into the same ad set:
- **Tier 1 English (US, CA, UK, AU):** High purchasing power, high CPMs ($20–$45). Should have dedicated scaling campaigns.
- **Tier 2 Europe (DE, FR, NL, SE):** High purchasing power, requires localized language creatives and local payment options.
- **Rule:** Never mix Tier 1 and Tier 3 countries in the same ad set! Meta will deliver 95% of impressions to the lowest CPM country with zero buying power.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'international-tiering-matrix.json',
              code: `{
  "international_tiering": {
    "Tier_1_Core": ["US", "CA", "UK", "AU"],
    "Tier_2_Europe": ["DE", "FR", "NL", "IT", "ES"],
    "Tier_3_Emerging": ["MX", "BR", "PH", "IN"]
  }
}`,
              lineByLine: [
                { line: '\"international_tiering\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"Tier_1_Core\": [\"US\", \"CA\", \"UK\", \"AU\"],', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"Tier_2_Europe\": [\"DE\", \"FR\", \"NL\", \"IT\", \"ES\"],', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"Tier_3_Emerging\": [\"MX\", \"BR\", \"PH\", \"IN\"]', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Maintain a centralized account change log! Record the date, campaign name, exact change made, previous value, new value, and rationale. When ROAS shifts next Tuesday, your change log will pinpoint the exact variable responsible.',
          commonMistakes: [
            'Creating 40 separate niche campaigns in a single ad account, starving all ad sets of conversion data.',
            'Lumping US and India into the same ad set, burning budget on low-intent clicks.',
            'Letting multiple media buyers edit campaigns simultaneously without a change log.'
          ]
        },
        {
          id: 'sec-meta-adv-1-3',
          title: 'Three Enterprise Architecture Walkthroughs',
          difficulty: 'Advanced',
          content: `### Real-World Architectural Case Studies

1. **Multi-Product DTC Apparel ($500k/mo spend):** 3-campaign consolidated model with Advantage+ Shopping.
2. **Global Agency Client Setup:** Master Business Portfolio managing 12 international ad accounts with segmented pixel data sets.
3. **Multi-Market Expansion:** Separate campaigns for North America (USD), UK (GBP), and EU (EUR).`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'enterprise-case-studies.yaml',
              code: `Case_1_DTC_500k: "Consolidated CBO + ASC + DCT Testing Sandbox"
Case_2_Agency_Hub: "Partner Access + Granular RBAC + Centralized Reporting"
Case_3_MultiMarket: "Geo-segmented currency campaigns with localized PDPs"`,
              lineByLine: [
                { line: 'Case_1_DTC_500k: \"Consolidated CBO + ASC + DCT Testing S...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_2_Agency_Hub: \"Partner Access + Granular RBAC + Cen...', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'Case_3_MultiMarket: \"Geo-segmented currency campaigns wi...', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Consolidate campaigns to maximize machine learning data concentration.',
        'Segment international campaigns by geographic purchasing tiers and currencies.',
        'Implement standardized change logs and governance protocols across all ad accounts.'
      ],
      summary: 'You now know how to design and govern enterprise-grade Meta Ads account architectures.',
      practiceExercises: [
        {
          title: 'Enterprise Account Architecture Blueprint',
          instructions: 'Design an enterprise account structure for an international beauty brand operating across North America and Western Europe with a $100,000/month ad spend.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-02',
    orderIndex: 2,
    title: 'Module 2: Full-Funnel Performance Strategy',
    description: 'Architect full-funnel customer journeys, balance demand creation vs demand capture, integrate retention and cross-sell systems, and optimize customer lifetime value (LTV).',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-02', title: 'Full-Funnel Media Buying Strategy', type: 'article', url: 'https://skillora.ai/docs/full-funnel-strategy' }
    ],
    lessonContent: {
      overview: `### Orchestrating the Complete Customer Lifecycle

Amateur media buyers focus entirely on the initial transaction. Senior growth strategists build full-funnel systems that generate initial brand awareness, capture active commercial demand, overcome consideration friction, and expand customer lifetime value (LTV) through repeat purchases.

In this module, you will master the balance between **Demand Creation** and **Demand Capture**, structure omnichannel consideration funnels, and maximize Customer Lifetime Value (LTV).`,
      analogyHero: 'Think of full-funnel strategy like agriculture. Prospecting is tilling the soil and planting seeds (demand creation). Retargeting is watering and fertilizing the crops (consideration). The purchase is the harvest (demand capture). Customer retention is saving the seeds to grow an even bigger harvest next season.',
      objectives: [
        'Distinguish between Demand Creation (Cold Awareness) and Demand Capture (Direct Sales).',
        'Map the 5 stages of customer awareness to targeted creative angles.',
        'Design automated retention and cross-sell sequences for existing buyers.',
        'Calculate customer lifetime value (LTV) and 90-day repurchase curves.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-adv-2-1',
          title: 'Demand Creation vs Demand Capture Dynamics',
          difficulty: 'Advanced',
          content: `### Balancing Cold Brand Discovery with Immediate Direct Response

- **Demand Capture (Bottom of Funnel):** Targets users who already have active intent to buy (e.g. searching for shoes, retargeted cart abandoners).
  * *Limitation:* Demand capture audience pools are small and saturate quickly.
- **Demand Creation (Top of Funnel):** Introduces your brand to users who did not know your solution existed, transforming unaware prospects into enthusiastic buyers.
  * *Execution:* Uses educational hooks, founder storytelling, and provocative problem demonstrations.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'demand-creation-vs-capture.yaml',
              code: `Full_Funnel_Engine:
  Demand_Creation_TOFU:
    Share: 70%
    Goal: "Transform unaware prospects into solution-aware shoppers"
    Creatives: "Problem breakdowns, provocative demonstrations, viral hooks"
  Demand_Capture_BOFU:
    Share: 20%
    Goal: "Convert active intent with zero friction"
    Creatives: "Dynamic catalog ads, discount incentives, free shipping"
  LTV_Expansion_Retention:
    Share: 10%
    Goal: "Drive repeat orders and subscriptions"
    Creatives: "New collection VIP access, accessory cross-sells"`,
              lineByLine: [
                { line: 'Full_Funnel_Engine:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Demand_Creation_TOFU:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Share: 70%', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Goal: \"Transform unaware prospects into solution-aware s...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-2-2',
          title: 'Customer Retention Economics and LTV Modeling',
          difficulty: 'Advanced',
          content: `### Why the Second Purchase Generates 80% of Profit

In competitive advertising auctions, the first purchase often barely breaks even after accounting for Customer Acquisition Cost (CAC) and COGS. True enterprise wealth is generated on the **2nd and 3rd repeat orders**:
- **Day 0:** Customer buys $60 dress (CAC = $25, COGS = $15, Gross Profit = $20).
- **Day 45 (Retargeting Cross-Sell Ad):** Customer buys matching $40 sunglasses (CAC = $5, COGS = $8, Gross Profit = $27).
- **Day 90 (New Collection Ad):** Customer buys $90 jacket (CAC = $6, COGS = $22, Gross Profit = $62).
- **Cumulative 90-Day LTV:** $190.00 revenue, generating **$109.00 in net cumulative contribution profit!**`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'ltv-cohort-model.json',
              code: `{
  "90_day_ltv_progression": {
    "day_0_initial_order": { "revenue": 60.00, "cac": 25.00, "profit": 20.00 },
    "day_45_cross_sell": { "revenue": 40.00, "cac": 5.00, "profit": 27.00 },
    "day_90_repeat_order": { "revenue": 90.00, "cac": 6.00, "profit": 62.00 },
    "cumulative_90_day_profit": 109.00,
    "ltv_to_cac_ratio": "4.36x (Elite Health)"
  }
}`,
              lineByLine: [
                { line: '\"90_day_ltv_progression\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"day_0_initial_order\": { \"revenue\": 60.00, \"cac\": 2...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"day_45_cross_sell\": { \"revenue\": 40.00, \"cac\": 5.0...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"day_90_repeat_order\": { \"revenue\": 90.00, \"cac\": 6...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Coordinate your Meta retention ads with your Klaviyo/Omnisend email marketing flows. When a customer receives an automated replenishment email on Day 30, ensure they simultaneously see a matching cross-sell ad on Instagram.',
          commonMistakes: [
            'Treating customer acquisition as a single transactional event and ignoring repeat purchase LTV.',
            'Spending 100% of budget on bottom-of-funnel demand capture until the audience is completely burned out.',
            'Failing to cross-sell complementary SKUs to past buyers.'
          ]
        },
        {
          id: 'sec-meta-adv-2-3',
          title: 'Three Full-Funnel Case Studies',
          difficulty: 'Advanced',
          content: `### Real-World Full-Funnel Implementations

1. **Luxury DTC Fashion:** Broad demand creation Reel → 14-day lookbook retargeting → VIP private collection retention.
2. **Enterprise B2B Software:** Industry problem whitepaper ad → Demo video retargeting → Executive ROI case study.
3. **Consumable Health Supplements:** Unboxing video prospecting → 30-day replenishment reminder carousel.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'full-funnel-case-studies.yaml',
              code: `Case_1_LuxuryFashion: "Brand Discovery -> Social Proof -> VIP Retention"
Case_2_B2B_Software: "Thought Leadership -> Product Demo -> Enterprise ROI"
Case_3_Supplements: "Problem/Solution -> 30-Day Auto Replenishment"`,
              lineByLine: [
                { line: 'Case_1_LuxuryFashion: \"Brand Discovery -> Social Proof -...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_2_B2B_Software: \"Thought Leadership -> Product Demo...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_3_Supplements: \"Problem/Solution -> 30-Day Auto Rep...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Balance top-of-funnel demand creation with bottom-of-funnel demand capture.',
        'Model Customer Lifetime Value (LTV) across 30, 60, and 90-day cohort windows.',
        'Integrate paid media retention ads with email/SMS marketing channels.'
      ],
      summary: 'You now know how to architect complete full-funnel performance marketing systems.',
      practiceExercises: [
        {
          title: 'Full-Funnel LTV Expansion Strategy',
          instructions: 'Draft a full-funnel marketing strategy for a premium coffee subscription company ($40 AOV), outlining the exact TOFU acquisition creative, MOFU proof, and BOFU 30-day retention loop.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-03',
    orderIndex: 3,
    title: 'Module 3: Advanced Media Buying and Auction Thinking',
    description: 'Master Vickrey-Clarke-Groves auction dynamics, Estimated Action Rate (EAR) calibration, User Value algorithms, and seasonal cost volatility.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-03', title: 'Meta Auction Engineering & VCG Mechanics', type: 'documentation', url: 'https://developers.facebook.com/docs/marketing-api/bidding' }
    ],
    lessonContent: {
      overview: `### The Deep Physics of the Meta Ad Auction

Meta does not operate a traditional first-price auction. It utilizes a modified **Vickrey-Clarke-Groves (VCG)** auction where advertisers pay the minimum amount necessary to maintain their position, penalized or rewarded by user satisfaction and estimated action rates.

In this module, you will master the mathematics of the VCG auction, understand how Meta calculates Estimated Action Rates (EAR), and navigate seasonal supply-and-demand auction surges (e.g. Q4 Black Friday).`,
      analogyHero: 'Think of the VCG auction like toll road pricing. If you drive a clean, high-efficiency hybrid car that keeps traffic flowing smoothly (high-quality, high-CTR ad), you get a discounted toll rate. If you drive a smoke-belching truck that blocks traffic (low-quality clickbait ad), you get charged maximum toll rates.',
      objectives: [
        'Master the mathematical mechanics of the Vickrey-Clarke-Groves (VCG) auction.',
        'Understand how Estimated Action Rates (EAR) are algorithmically computed.',
        'Analyze how User Value and post-click bounce rates influence auction CPMs.',
        'Navigate Q4 holiday auction volatility and rising competitor bids.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-adv-3-1',
          title: 'The VCG Auction Mathematics & Total Value Score',
          difficulty: 'Advanced',
          content: `### How User Value Offsets Advertiser Bid

In Meta's auction:
$$\\text{Total Value} = (\\text{Bid} \\times \\text{Estimated Action Rate}) + \\text{User Value}$$

- **Advertiser Bid:** Willingness to pay.
- **Estimated Action Rate (EAR):** Machine learning prediction based on user history, ad resonance, and past conversion rate.
- **User Value (UV):** Calculated from ad quality score, negative feedback ("Hide ad", "Report ad"), post-click dwell time, and landing page bounce rate.

*Strategic Insight:* Improving your creative to double your EAR allows you to win the same auction at **half the competitor's bid**!`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'vcg-auction-dynamics.yaml',
              code: `Auction_Equilibrium_Model:
  Competitor_X:
    Bid: "$30.00"
    EAR: "0.015 (1.5%)"
    User_Value: "1.0"
    Total_Score: (30 * 0.015) + 1.0 = 1.45 -> LOSES
  Your_Brand:
    Bid: "$18.00"
    EAR: "0.040 (4.0%)"
    User_Value: "3.2"
    Total_Score: (18 * 0.040) + 3.2 = 3.92 -> WINS AT LOWER COST`,
              lineByLine: [
                { line: 'Auction_Equilibrium_Model:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Competitor_X:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Bid: \"$30.00\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'EAR: \"0.015 (1.5%)\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-3-2',
          title: 'Navigating Q4 Seasonality & CPM Inflation',
          difficulty: 'Advanced',
          content: `### Managing Q4 Holiday Auction Compression

Between October and December, millions of advertisers flood Meta with ad spend, driving industry-wide CPMs up by **50% to 150%**:
- **The Q4 Strategy:**
  1. *Warm Up Audiences in October:* Build massive Custom Audiences of video viewers and page engagers when CPMs are cheap.
  2. *Deploy Cost Caps in November:* Protect margins against sudden auction bid spikes.
  3. *Unleash Irresistible Bundle Offers:* High CPMs can only be offset by higher Conversion Rates and higher AOV.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'q4-auction-playbook.json',
              code: `{
  "q4_scaling_rules": {
    "October": "Build pixel data and test 20 creative hooks at baseline CPMs",
    "Early_November": "Launch VIP Early Access campaigns with higher AOV bundles",
    "Cyber_Week": "Deploy Cost Caps at 1.2x Target CPA and maximize daily spend"
  }
}`,
              lineByLine: [
                { line: '\"q4_scaling_rules\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"October\": \"Build pixel data and test 20 creative hook...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: '\"Early_November\": \"Launch VIP Early Access campaigns w...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"Cyber_Week\": \"Deploy Cost Caps at 1.2x Target CPA and...', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ],
          proTip: 'Monitor your "Negative Feedback Rate" in Ads Manager. If users frequently click "Hide Ad" or report your creative as spam, Meta algorithm will tank your User Value score, resulting in an immediate 200% spike in CPM across your entire ad account.',
          commonMistakes: [
            'Running ads with misleading clickbait headlines that cause immediate 1-second landing page bounces.',
            'Attempting to scale low-AOV ($20) single-product campaigns during peak Black Friday CPM surges.',
            'Ignoring landing page load speeds during high-traffic holiday sales.'
          ]
        },
        {
          id: 'sec-meta-adv-3-3',
          title: 'Three Auction Case Studies',
          difficulty: 'Advanced',
          content: `### Real-World Auction Scenarios

1. **Black Friday Auction Surge:** Apparel brand using Cost Caps and 3-pack bundles to maintain 3.5x ROAS despite $40 CPMs.
2. **Niche B2B High-CPM Environment:** Medical software achieving profitability despite $80 CPMs by capturing $15k enterprise contracts.
3. **Creative Relevance Arbitrage:** Doubling Link CTR to cut effective cost per click in half.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'auction-case-scenarios.yaml',
              code: `Case_1_BFCM: "Cost Caps + Bundle AOV expansion absorbed $40 CPMs"
Case_2_B2B_Medical: "High contract value supported $80 CPM auction"
Case_3_Relevance_Arbitrage: "2.8% CTR reduced blended CPC from $1.80 to $0.65"`,
              lineByLine: [
                { line: 'Case_1_BFCM: \"Cost Caps + Bundle AOV expansion absorbed ...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Case_2_B2B_Medical: \"High contract value supported $80 C...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Case_3_Relevance_Arbitrage: \"2.8% CTR reduced blended CP...', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Total Auction Value balances Bid, Estimated Action Rate, and User Value.',
        'High creative engagement and positive post-click experiences lower effective bidding costs.',
        'In high-CPM holiday auctions, expand AOV and deploy Cost Caps to protect margins.'
      ],
      summary: 'You now understand the mathematical mechanics of Meta\'s ad auction.',
      practiceExercises: [
        {
          title: 'Auction Mechanics & Q4 Strategy Memo',
          instructions: 'Draft a Q4 Media Buying Strategy Memo for an e-commerce client, explaining how you will adjust bidding, creative pipelines, and AOV to maintain profitability during peak holiday CPM surges.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-04',
    orderIndex: 4,
    title: 'Module 4: Advanced Budget Allocation',
    description: 'Master marginal return modeling, diminishing efficiency curves, contribution margin economics, Break-Even ROAS equations, and capital reallocation.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-04', title: 'Marginal Return & Unit Economics Modeling', type: 'article', url: 'https://skillora.ai/docs/unit-economics-meta' }
    ],
    lessonContent: {
      overview: `### Mathematical Capital Allocation and Marginal Returns

Senior media buyers manage ad spend like hedge fund portfolio managers. Every dollar allocated to an ad set must be evaluated not by its historical average ROAS, but by its **Marginal ROAS**—the incremental revenue generated by the *next* dollar of spend.

In this module, you will master the economics of diminishing returns, calculate exact Break-Even ROAS targets, and allocate budgets across campaigns to maximize net enterprise profit.`,
      analogyHero: 'Think of budget allocation like watering a garden. If Plant A has had plenty of water and cannot absorb more (diminishing marginal returns), pouring another gallon on it just washes away the soil. You divert that gallon to Plant B, which is thirsty and will sprout new flowers immediately.',
      objectives: [
        'Master the Break-Even ROAS Formula: $\\text{Break-Even ROAS} = 1 / \\text{Contribution Margin \\%}$.',
        'Model Diminishing Marginal Returns and calculate Marginal CPA.',
        'Reallocate capital from saturated campaigns to high-efficiency testing sandboxes.',
        'Establish hard financial guardrails connecting ad spend to corporate P&L statements.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: `Break-Even ROAS = 1 / Contribution Margin %
Example: If Margin is 25%: Break-Even ROAS = 1 / 0.25 = 4.00x
Example: If Margin is 75%: Break-Even ROAS = 1 / 0.75 = 1.33x
Marginal CPA = (Spend_New - Spend_Old) / (Conversions_New - Conversions_Old)`,
      sections: [
        {
          id: 'sec-meta-adv-4-1',
          title: 'The Contribution Margin & Break-Even Formula',
          difficulty: 'Advanced',
          content: `### Deriving True Break-Even Targets

Never use an arbitrary 3.0x ROAS rule across different clients. Calculate exact financial break-even based on the merchant's unit economics:

$$\\text{Contribution Margin \\%} = \\frac{\\text{Net Revenue} - (\\text{COGS} + \\text{Shipping} + \\text{Pick/Pack} + \\text{Gateway Fees})}{\\text{Net Revenue}}$$

$$\\text{Break-Even ROAS} = \\frac{1}{\\text{Contribution Margin \\%}}$$

- **Retailer A (Consumer Electronics - 20% Margin):** Break-Even ROAS = $1 / 0.20 = 5.00\text{x}$.
- **Retailer B (DTC Skincare - 80% Margin):** Break-Even ROAS = $1 / 0.80 = 1.25\text{x}$.
- **Retailer C (Fashion Apparel - 60% Margin):** Break-Even ROAS = $1 / 0.60 = 1.67\text{x}$.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'margin-roas-matrix.yaml',
              code: `Margin_To_Breakeven_Table:
  Margin_20_Pct: "Break-Even ROAS: 5.00x (High Risk, Low Margin)"
  Margin_35_Pct: "Break-Even ROAS: 2.86x (Moderate Margin)"
  Margin_50_Pct: "Break-Even ROAS: 2.00x (Standard Retail)"
  Margin_75_Pct: "Break-Even ROAS: 1.33x (High Margin DTC)"
  Margin_85_Pct: "Break-Even ROAS: 1.18x (Digital / Software)"`,
              lineByLine: [
                { line: 'Margin_To_Breakeven_Table:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Margin_20_Pct: \"Break-Even ROAS: 5.00x (High Risk, Low M...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Margin_35_Pct: \"Break-Even ROAS: 2.86x (Moderate Margin)\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Margin_50_Pct: \"Break-Even ROAS: 2.00x (Standard Retail)\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-4-2',
          title: 'Marginal Return Modeling & Diminishing Efficiency',
          difficulty: 'Advanced',
          content: `### Average ROAS vs Marginal ROAS

When evaluating whether to scale an ad set from $500/day to $1,000/day:
- **At $500/day:** Generates 25 sales ($1,500 revenue) -> **Average ROAS = 3.0x**.
- **At $1,000/day:** Generates 35 sales ($2,100 revenue) -> **Average ROAS = 2.1x**.
- **The Marginal Calculation:**
  * Incremental Spend = $500.00.
  * Incremental Revenue = $600.00.
  * **Marginal ROAS = $600 / $500 = 1.20x!**
  * If the brand's break-even ROAS is 1.50x, this extra $500 of spend **lost money**, even though the total reported Average ROAS (2.1x) looked acceptable!`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'marginal-return-analysis.json',
              code: `{
  "marginal_analysis": {
    "spend_tier_1": { "spend": 500, "revenue": 1500, "avg_roas": 3.00 },
    "spend_tier_2": { "spend": 1000, "revenue": 2100, "avg_roas": 2.10 },
    "marginal_delta": {
      "incremental_spend": 500,
      "incremental_revenue": 600,
      "marginal_roas": 1.20,
      "breakeven_threshold": 1.50,
      "verdict": "UNECONOMIC SCALING — REALLOCATE CAPITAL"
    }
  }
}`,
              lineByLine: [
                { line: '\"marginal_analysis\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"spend_tier_1\": { \"spend\": 500, \"revenue\": 1500, \"...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"spend_tier_2\": { \"spend\": 1000, \"revenue\": 2100, \...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"marginal_delta\": {', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Always calculate Marginal ROAS when scaling beyond $1,000/day. If marginal returns turn negative, cap that campaign\'s budget and redirect the surplus capital into testing new creative angles or expanding into international markets.',
          commonMistakes: [
            'Relying solely on Average ROAS and failing to detect that the last $2,000 of ad spend produced negative cash flow.',
            'Applying an arbitrary universal ROAS target across businesses with completely different margins.',
            'Failing to factor payment processing fees and return rates into contribution margin calculations.'
          ]
        },
        {
          id: 'sec-meta-adv-4-3',
          title: 'Three Capital Allocation Case Studies',
          difficulty: 'Advanced',
          content: `### Real-World Allocation Decisions

1. **Low-Margin Electronics Store (25% Margin):** Reallocated budget from saturated prospecting into a high-margin accessory bundle campaign.
2. **High-Margin DTC Apparel (75% Margin):** Scaled ad spend aggressively at 2.4x ROAS, generating $45k in monthly net contribution profit.
3. **Subscription Loss Leader:** Scaled first-box acquisition at 1.1x ROAS because 90-day retention curve delivered 4.2x LTV profit.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'capital-allocation-scenarios.yaml',
              code: `Case_1_Electronics: "Redirected $10k/mo into 60% margin accessory bundle"
Case_2_Apparel_Scale: "Scaled from $20k -> $60k/mo spend at 2.4x ROAS"
Case_3_Subscription: "First-month breakeven offset by 4.2x 90-day LTV"`,
              lineByLine: [
                { line: 'Case_1_Electronics: \"Redirected $10k/mo into 60% margin ...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_2_Apparel_Scale: \"Scaled from $20k -> $60k/mo spend...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Case_3_Subscription: \"First-month breakeven offset by 4....', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Calculate Break-Even ROAS using Contribution Margin % ($1 / \text{Margin %}$).',
        'Evaluate scaling decisions using Marginal ROAS rather than blended Average ROAS.',
        'Reallocate capital when marginal returns fall below contribution break-even thresholds.'
      ],
      summary: 'You now know how to model unit economics and allocate advertising capital with mathematical rigor.',
      practiceExercises: [
        {
          title: 'Marginal ROAS & Budget Allocation Problem Set',
          instructions: 'Given a multi-tier scaling spreadsheet with 4 spend tiers, calculate Marginal Spend, Marginal Revenue, and Marginal ROAS for each tier, and determine the exact optimal spend cap for a 35% margin brand.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-05',
    orderIndex: 5,
    title: 'Module 5: Advanced Creative Strategy',
    description: 'Master customer psychology, the 5 Levels of Customer Awareness, strategic hook ideation, UGC production pipelines, creator briefing SOPs, and creative portfolio scoring.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-05', title: 'Advanced Creative Strategy & Awareness Frameworks', type: 'article', url: 'https://skillora.ai/docs/creative-strategy-playbook' }
    ],
    lessonContent: {
      overview: `### The Strategic Psychology of Creative Development

Media buying execution without world-class creative strategy is futile. To scale an account past six figures per month, you must build an organized **Creative Production Engine** that produces ads tailored to Eugene Schwartz's **5 Levels of Customer Awareness** and manages creator pipelines systematically.

In this module, you will master awareness-level messaging, craft multi-angle hook matrices, build creator briefing standard operating procedures (SOPs), and score creative portfolios.`,
      analogyHero: 'Think of creative strategy like conducting an orchestra. You cannot play the trumpets at maximum volume all the time (screaming "BUY NOW"). You need the violins to set the emotional tone (problem awareness), the flutes to build curiosity (solution awareness), and the cymbals for the grand finale (the offer).',
      objectives: [
        'Master the 5 Levels of Customer Awareness: Unaware, Problem-Aware, Solution-Aware, Product-Aware, and Most Aware.',
        'Build structured Creative Briefing SOPs for UGC creators and video editors.',
        'Develop 30-creative testing roadmaps spanning diverse angles and formats.',
        'Implement creative portfolio scoring to track fatigue and hit rates.'
      ],
      estimatedTime: '40 mins',
      sections: [
        {
          id: 'sec-meta-adv-5-1',
          title: 'Eugene Schwartz\'s 5 Levels of Customer Awareness',
          difficulty: 'Advanced',
          content: `### Mapping Messaging to Customer Mental States

1. **Unaware:** The prospect does not know they have a problem.
   * *Ad Strategy:* Story-driven, emotional, provocative entertainment hooks (e.g. "The hidden danger lurking in your tap water").
2. **Problem-Aware:** Knows the pain point, but does not know a solution exists.
   * *Ad Strategy:* Agitates the frustration and introduces the mechanism of relief.
3. **Solution-Aware:** Knows solutions exist, but doesn't know your specific product.
   * *Ad Strategy:* Comparison tables, unique mechanism breakdowns, differentiation proof.
4. **Product-Aware:** Knows your product, but hasn't bought (evaluating price/trust).
   * *Ad Strategy:* Customer unboxing reviews, press badges, guarantee highlights.
5. **Most Aware:** Ready to buy; needs only the final offer.
   * *Ad Strategy:* Direct discounts, limited-edition bundles, flash sales.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'awareness-level-creative-mapping.yaml',
              code: `Awareness_Level_Strategy:
  Level_1_Unaware:
    Creative: "Documentary style / Shocking visual demonstration"
    Hook: "'Why European dermatologists banned this common soap ingredient...'"
  Level_2_Problem_Aware:
    Creative: "Split-screen pain validation"
    Hook: "'Tired of waking up at 3 AM with acid reflux?'"
  Level_3_Solution_Aware:
    Creative: "Feature comparison matrix vs traditional alternatives"
    Hook: "'Why memory foam pillows actually make neck pain worse'"
  Level_4_Product_Aware:
    Creative: "UGC 5-Star Testimonial Reel"
    Hook: "'I was skeptical about ErgoCloud, but here is my 30-day honest review...'"
  Level_5_Most_Aware:
    Creative: "High-contrast offer graphic"
    Hook: "'Final 24 Hours: Take 20% off all bedding sets with code FLASH20'"`,
              lineByLine: [
                { line: 'Awareness_Level_Strategy:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Level_1_Unaware:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Creative: \"Documentary style / Shocking visual demonstra...', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Hook: \"\'Why European dermatologists banned this common ...', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-5-2',
          title: 'Creator Briefing SOPs & Production Pipelines',
          difficulty: 'Advanced',
          content: `### How to Brief UGC Creators for High Direct-Response Output

Never tell a creator: "Just make a fun video about our product." Provide an exact **Direct-Response Creator Brief**:
1. **Hook Options (Give them 3 distinct 3-second opening scripts):** Creator records 3 different hooks for the same body video.
2. **Key Visual Actions:** Specific demonstrations (e.g. "Pour water on the fabric to show waterproof bead effect").
3. **Lighting & Audio Guidelines:** Natural window lighting, clean microphone audio, vertical 9:16 orientation, no distracting background clutter.
4. **Raw Footage Delivery:** Require raw uncut B-roll files so your in-house video editor can cut 5 unique variations.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'creator-brief-template.json',
              code: `{
  "creator_brief": {
    "product_name": "Lumina French Linen Summer Dress",
    "target_creator": "Female, Age 24-38, Natural lifestyle aesthetic",
    "required_hooks": [
      "Hook 1 (Problem): 'I ordered 5 linen dresses from TikTok so you don't have to...'",
      "Hook 2 (Curiosity): 'The dress that literally broke my Instagram DMs last weekend.'",
      "Hook 3 (Feature): 'A 100% French linen dress with REAL pockets that doesn't wrinkle?'"
    ],
    "body_script_points": [
      "Show close-up of breathable fabric weave",
      "Show hands inside deep functional pockets",
      "Spin test showing natural elegant drape"
    ],
    "deliverables": "3 Hook variations + 1 Body video + 5 B-roll clips (Raw 4K 60fps 9:16)"
  }
}`,
              lineByLine: [
                { line: '\"creator_brief\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"product_name\": \"Lumina French Linen Summer Dress\",', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"target_creator\": \"Female, Age 24-38, Natural lifestyl...', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: '\"required_hooks\": [', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'By having each creator record 3 different opening hooks with 1 body video, you get 3 complete ad variations for the price of one! Testing shows that changing only the first 3 seconds of a video ad can improve ROAS by over 300%.',
          commonMistakes: [
            'Hiring macro-influencers for $10,000 who create artistic lifestyle videos with zero direct-response sales hooks.',
            'Failing to secure full commercial advertising usage rights (whitelisting/Spark Ads) in creator contracts.',
            'Producing only one creative concept per month and suffering severe creative fatigue.'
          ]
        },
        {
          id: 'sec-meta-adv-5-3',
          title: 'Three Creative Strategy Case Studies',
          difficulty: 'Advanced',
          content: `### Real-World Strategic Deployments

1. **Unaware to Problem-Aware Education:** Water filter brand using microplastic awareness videos to scale from $50k to $250k/mo.
2. **Solution-Aware Comparison:** Electric toothbrush brand using side-by-side plaque removal test against competitor brands.
3. **UGC Creator Pipeline:** DTC footwear brand generating 20 fresh UGC video ads monthly with a roster of 8 micro-creators.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'creative-strategy-case-studies.yaml',
              code: `Case_1_WaterFilter: "Microplastic awareness video unlocked 4x scale"
Case_2_Toothbrush: "Side-by-side plaque comparison generated 3.8x ROAS"
Case_3_Footwear_Pipeline: "8 Micro-creators producing 20 modular ads/month"`,
              lineByLine: [
                { line: 'Case_1_WaterFilter: \"Microplastic awareness video unlock...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_2_Toothbrush: \"Side-by-side plaque comparison gener...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Case_3_Footwear_Pipeline: \"8 Micro-creators producing 20...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Tailor ad creative to the 5 Levels of Customer Awareness.',
        'Brief creators with modular scripts (3 hooks + 1 body + raw B-roll).',
        'Changing the first 3 seconds (the hook) is the highest-leverage optimization in video ads.'
      ],
      summary: 'You now know how to architect advanced creative strategies and manage high-velocity production pipelines.',
      practiceExercises: [
        {
          title: '30-Creative Strategic Testing Roadmap',
          instructions: 'Build a 30-creative testing roadmap for a DTC home espresso machine ($450 price point), mapping 6 unique visual concepts across each of the 5 Levels of Customer Awareness.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-06',
    orderIndex: 6,
    title: 'Module 6: Advanced Creative Testing and Analysis',
    description: 'Master multivariate hypothesis-driven testing, signal vs noise statistical modeling, confidence intervals, and post-click conversion validation.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-06', title: 'Statistical Significance in Ad Testing', type: 'documentation', url: 'https://skillora.ai/docs/statistical-testing-meta' }
    ],
    lessonContent: {
      overview: `### Mathematical Rigor in Creative Experimentation

At enterprise scale, declaring an ad a "winner" prematurely based on 3 lucky conversions can cost tens of thousands of dollars in wasted spend. Senior growth engineers apply statistical rigor, calculate confidence intervals, and isolate signal from random auction noise.

In this module, you will master hypothesis-driven multivariate testing, evaluate statistical confidence thresholds, and validate creative performance through post-click conversion metrics.`,
      analogyHero: 'Think of advanced creative analysis like gold mining. Just because you pan a single fleck of gold in a river doesn\'t mean you should invest $1,000,000 in heavy excavators on that exact spot. You drill core sample boreholes (statistical sampling) to confirm a rich vein before building the mine.',
      objectives: [
        'Formulate testable, hypothesis-driven creative experiments.',
        'Distinguish true conversion signal from random statistical auction noise.',
        'Apply 90%+ confidence interval thresholds before graduating scaling winners.',
        'Analyze post-click engagement metrics (Dwell Time, Bounce Rate, Scroll Depth).'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-adv-6-1',
          title: 'Signal vs Noise & Sample-Size Determination',
          difficulty: 'Advanced',
          content: `### The Mathematics of Statistical Significance

- **The Law of Small Numbers:** An ad that gets 2 purchases on $15 spend has an apparent CPA of $7.50, but a 95% confidence interval of $(\\$2.10 - \\$45.00)$. Scaling it immediately will almost certainly fail.
- **Minimum Conversion Thresholds for Statistical Validity:**
  * To declare a creative winner with 90% statistical confidence, the ad must achieve at least **15 to 25 conversions** within a controlled testing window.
  * Spend must reach at least 3x to 5x Target CPA.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'statistical-sampling-rules.yaml',
              code: `Significance_Threshold_Matrix:
  Low_Confidence_Do_Not_Scale:
    Purchases: "< 10"
    Spend: "< 2x Target CPA"
    Confidence_Interval: "Extreme variance (Noise)"
  High_Confidence_Validated_Winner:
    Purchases: ">= 20"
    Spend: ">= 3.5x Target CPA"
    P_Value: "< 0.05 (95% Statistical Confidence)"
    Action: "Graduate Post ID to Main CBO Scaling Campaign"`,
              lineByLine: [
                { line: 'Significance_Threshold_Matrix:', explanation: 'Establishes automated guardrails and execution rules to protect account stability.' },
                { line: 'Low_Confidence_Do_Not_Scale:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Purchases: \"< 10\"', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Spend: \"< 2x Target CPA\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-6-2',
          title: 'Post-Click Behavior & Creative Conversion Quality',
          difficulty: 'Advanced',
          content: `### Auditing Post-Click Metrics to Avoid False Winners

A creative might have a sensational 4.5% CTR by making exaggerated promises, but if users bounce within 2 seconds, the ad is a **False Winner**. Always cross-reference top-of-funnel CTR with post-click quality:
1. **Landing Page View to Click Ratio:** (Landing Page Views / Link Clicks) should be >= 80%. Lower indicates slow mobile loading speed.
2. **Average Dwell Time:** High-converting ads generate traffic that spends > 45 seconds on the PDP.
3. **Cart-to-Purchase Conversion Rate:** Should maintain standard benchmarks (30% - 45%).`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'creative-quality-audit.json',
              code: `{
  "creative_audit_comparison": {
    "Ad_A_Clickbait_False_Winner": {
      "link_ctr": "4.2%",
      "lpv_ratio": "62%",
      "avg_dwell_time_seconds": 12,
      "cvr": "0.4%",
      "verdict": "FALSE WINNER (Misleading Hook)"
    },
    "Ad_B_Qualified_True_Winner": {
      "link_ctr": "2.1%",
      "lpv_ratio": "88%",
      "avg_dwell_time_seconds": 58,
      "cvr": "3.9%",
      "verdict": "TRUE WINNER (High Buyer Intent)"
    }
  }
}`,
              lineByLine: [
                { line: '\"creative_audit_comparison\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"Ad_A_Clickbait_False_Winner\": {', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: '\"link_ctr\": \"4.2%\",', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"lpv_ratio\": \"62%\",', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Always check the "Outbound Link CTR" metric in Ads Manager rather than the generic "CTR (All)". "CTR (All)" includes users clicking "See more" or clicking your profile picture, whereas Outbound CTR measures users actually navigating to your website.',
          commonMistakes: [
            'Graduating ads to scaling campaigns after only 2 purchases, resulting in immediate budget waste.',
            'Evaluating video performance based on 3-second views instead of Outbound CTR and Purchase CPA.',
            'Changing landing pages in the middle of a creative test, contaminating experimental controls.'
          ]
        },
        {
          id: 'sec-meta-adv-6-3',
          title: 'Three Statistical Experiment Walkthroughs',
          difficulty: 'Advanced',
          content: `### Real-World Creative Experiment Cases

1. **Hook Isolation Test:** 3 hooks tested with 25 purchases each. Hook 2 delivered 35% lower CPA with $p < 0.01$.
2. **Format Comparison Test:** 9:16 UGC Reel vs 1:1 Static Graphic holding copy identical across $1,500 spend.
3. **False Winner Post-Mortem:** Diagnosing why a high-CTR clickbait ad failed to generate profitable ROAS.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'statistical-experiment-cases.yaml',
              code: `Case_1_Hook_Winner: "Hook 2 achieved $14.20 CPA vs $22.50 baseline (p < 0.01)"
Case_2_Format_Winner: "9:16 UGC generated 4.2x ROAS vs 2.1x static image"
Case_3_FalseWinner: "Identified 85% bounce rate caused by sensationalist headline"`,
              lineByLine: [
                { line: 'Case_1_Hook_Winner: \"Hook 2 achieved $14.20 CPA vs $22.5...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Case_2_Format_Winner: \"9:16 UGC generated 4.2x ROAS vs 2...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Case_3_FalseWinner: \"Identified 85% bounce rate caused b...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Enforce minimum conversion thresholds (15–25 conversions) before declaring creative winners.',
        'Cross-reference Link CTR with post-click dwell time to eliminate false winners.',
        'Use Outbound Link CTR to evaluate true direct-response intent.'
      ],
      summary: 'You now know how to apply statistical analysis to creative testing pipelines.',
      practiceExercises: [
        {
          title: 'Experiment Significance Data Analysis',
          instructions: 'Analyze a dataset of 4 competing ad creatives with varying spend, impressions, clicks, dwell times, and purchases. Calculate confidence levels and provide a written justification for which ad to graduate.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-07',
    orderIndex: 7,
    title: 'Module 7: Advanced Retargeting and Customer Value',
    description: 'Master customer lifecycle marketing, 30/60/90-day cohort retention analysis, VIP customer segmentation, cross-sell automation, and LTV-to-CAC optimization.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-07', title: 'Advanced Customer Lifetime Value & Retention Architecture', type: 'article', url: 'https://skillora.ai/docs/ltv-retention-playbook' }
    ],
    lessonContent: {
      overview: `### Maximizing Customer Lifetime Value and Retention

The most profitable customer you will ever acquire is the one you already have. While cold customer acquisition costs (CAC) continue to rise, existing customers convert at **5x to 10x higher rates** with zero platform learning friction.

In this module, you will master advanced customer segmentation, build automated replenishment and cross-sell campaigns, analyze 30/60/90-day cohort retention curves, and optimize your overall **LTV:CAC ratio**.`,
      analogyHero: 'Think of customer acquisition like building a skyscraper. Prospecting is driving the deep foundation pilings into the bedrock. Customer retention is building the luxury penthouse suites on top where all the long-term wealth is realized.',
      objectives: [
        'Segment customer databases by Recency, Frequency, and Monetary value (RFM).',
        'Build automated replenishment retargeting funnels based on product consumption cycles.',
        'Deploy cross-sell and upsell campaigns targeting verified high-LTV VIPs.',
        'Analyze 30/60/90-day customer cohort retention curves and LTV:CAC ratios.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-adv-7-1',
          title: 'RFM Customer Segmentation & VIP Audience Creation',
          difficulty: 'Advanced',
          content: `### The Recency, Frequency, Monetary (RFM) Framework

Segment your customer database (via Shopify/Klaviyo CSV exports or CAPI customer data) into 3 distinct advertising tiers:
1. **VIP Champions (Top 10% LTV):** Customers who bought >= 3 times or spent > $250.
   * *Strategy:* Exclusive early access to new product drops and founder thank-you videos.
2. **Promising Repeat Buyers (Bought 2 times):**
   * *Strategy:* Cross-sell complementary product lines.
3. **One-Time Buyers at Risk of Churn (Purchased 60–120 days ago):**
   * *Strategy:* Win-back campaigns with an exclusive "We miss you" incentive.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'rfm-retention-segments.yaml',
              code: `RFM_Segmentation_Matrix:
  Tier_1_VIP_Champions:
    Criteria: "Orders >= 3 OR Total_Spend >= $250.00"
    Audience_Size: "Top 8% of database"
    Messaging: "VIP Early Access / Private Collection Preview"
  Tier_2_Cross_Sell_Targets:
    Criteria: "Bought Linen Dress in last 30-60 Days"
    Messaging: "Matching Accessories & Summer Sandals"
  Tier_3_Winback_Churn_Risk:
    Criteria: "Past Purchaser (90-180D) with no recent visits"
    Messaging: "New Arrivals + $15 Loyalty Credit Code"`,
              lineByLine: [
                { line: 'RFM_Segmentation_Matrix:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Tier_1_VIP_Champions:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Criteria: \"Orders >= 3 OR Total_Spend >= $250.00\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Audience_Size: \"Top 8% of database\"', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-7-2',
          title: 'Cohort Retention Curves & LTV:CAC Optimization',
          difficulty: 'Advanced',
          content: `### Evaluating Customer Cohort Expansion

- **The LTV:CAC Target:** A healthy DTC brand aims for a **3:1 or higher LTV:CAC ratio** over a 12-month period.
  * If your CAC is $30.00, the customer should generate at least $90.00 in cumulative gross margin over 1 year.
- **Product Replenishment Timing:** If a skincare serum bottle lasts 45 days, trigger a Meta replenishment ad on **Day 35–45** with the copy: *"Running low on your Vitamin C Serum? Reorder today for guaranteed delivery before you run out."*`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'replenishment-timing-rules.json',
              code: `{
  "replenishment_schedule": {
    "Consumable_Skincare_30D": {
      "trigger_window": "Days 25 to 35 post-purchase",
      "creative": "Replenishment reminder + 1-click reorder link",
      "expected_repeat_cvr": "12.5%"
    },
    "Seasonal_Fashion_90D": {
      "trigger_window": "Days 75 to 90 post-purchase",
      "creative": "New seasonal lookbook catalog",
      "expected_repeat_cvr": "6.8%"
    }
  }
}`,
              lineByLine: [
                { line: '\"replenishment_schedule\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"Consumable_Skincare_30D\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"trigger_window\": \"Days 25 to 35 post-purchase\",', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"creative\": \"Replenishment reminder + 1-click reorder ...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'When running retention ads to existing customers, use dynamic URL parameters (UTMs) to track repeat purchases separately from new customer acquisition. This prevents confusing cold CAC with retention CPA in your reporting.',
          commonMistakes: [
            'Treating all past customers as a single monolithic audience without RFM segmentation.',
            'Showing cold prospecting introductory discount ads to loyal customers who have purchased 10 times.',
            'Failing to time replenishment ads to match the actual consumption lifecycle of the product.'
          ]
        },
        {
          id: 'sec-meta-adv-7-3',
          title: 'Three Customer Value Case Studies',
          difficulty: 'Advanced',
          content: `### Real-World Retention Campaigns

1. **30-Day Supplement Replenishment:** Retargeting past buyers on Day 28 with a 15% subscription upgrade offer.
2. **VIP Apparel Early Access:** Private 48-hour presale ad campaign generating $35k in revenue from existing buyers at 8.5x ROAS.
3. **LTV Cohort Expansion:** Coffee brand boosting 90-day LTV from $42 to $88 by cross-selling brewing accessories.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'retention-case-scenarios.yaml',
              code: `Case_1_Replenishment: "Day 28 reminder generated 14% repurchase rate"
Case_2_VIP_Presale: "VIP early access campaign generated 8.5x ROAS"
Case_3_LTV_Expansion: "Accessory cross-sells doubled 90-day customer LTV"`,
              lineByLine: [
                { line: 'Case_1_Replenishment: \"Day 28 reminder generated 14% rep...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_2_VIP_Presale: \"VIP early access campaign generated...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Case_3_LTV_Expansion: \"Accessory cross-sells doubled 90-...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Segment customer databases using RFM (Recency, Frequency, Monetary) frameworks.',
        'Time replenishment retargeting ads to match product consumption lifecycles.',
        'Target a 3:1 or higher LTV:CAC ratio over 12-month cohort windows.'
      ],
      summary: 'You now know how to maximize Customer Lifetime Value and deploy automated retention systems.',
      practiceExercises: [
        {
          title: 'RFM Customer Retention Blueprint',
          instructions: 'Design an RFM customer retention plan for a premium organic pet food brand, detailing audience segmentation rules, replenishment timing, cross-sell offers, and target repeat purchase rates.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-08',
    orderIndex: 8,
    title: 'Module 8: Advanced Lead Generation and Lead Quality',
    description: 'Master MQL-to-SQL conversion pipelines, Cost Per Qualified Lead (CPQL), CRM closed-loop feedback, and Offline Conversion CAPI integration.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-08', title: 'Enterprise Lead Quality & CRM Closed-Loop Systems', type: 'documentation', url: 'https://skillora.ai/docs/enterprise-lead-gen' }
    ],
    lessonContent: {
      overview: `### Enterprise Lead Quality & Closed-Loop Attribution

In high-ticket B2B services, real estate, and professional consulting, generating 500 cheap leads is disastrous if the sales team spends 100 hours calling unqualified prospects who cannot afford the service. Elite lead generation engineers optimize for **Cost Per Qualified Lead (CPQL)** and feed closed-won sales data back into Meta via **Offline Conversions CAPI**.

In this module, you will learn how to design multi-stage lead scoring systems, implement CRM feedback loops, and train Meta machine learning algorithms to find high-ticket enterprise buyers.`,
      analogyHero: 'Think of advanced lead generation like diamond mining. You don\'t judge the mine by the total tonnage of dirt extracted (raw cheap leads). You judge the mine by the carats of pure diamonds recovered and sold to jewelers (closed-won revenue).',
      objectives: [
        'Bridge the gap between Marketing Qualified Leads (MQLs) and Sales Qualified Leads (SQLs).',
        'Implement Offline Conversions via Conversions API to feed CRM deal stages back to Meta.',
        'Calculate Lead-to-Sale Conversion Rates and Revenue Per Lead.',
        'Design automated qualification scoring logic within landing page forms.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-adv-8-1',
          title: 'MQL to SQL Pipelines & Qualification Logic',
          difficulty: 'Advanced',
          content: `### Engineering Friction to Maximize Intent

To filter out tire-kickers, introduce deliberate, high-value qualification friction into your lead generation funnels:
1. **Budget Threshold Qualification:** "What is your monthly marketing budget?" (Options: < $5k [Disqualified], $5k-$20k, $20k+).
2. **Role & Authority Check:** "Are you the primary decision-maker?" (Yes / No).
3. **Timeline to Implementation:** "When do you need this solution live?" (Immediately / Within 30 days / Just browsing).
4. **Phone Number OTP Verification:** Eliminates fake numbers via SMS confirmation code before form completion.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'qualification-logic-rules.yaml',
              code: `Qualification_Routing_Rules:
  Qualified_SQL_Criteria:
    Budget: ">= $10,000/mo"
    Authority: "Founder / CMO / VP"
    Timeline: "<= 30 Days"
    Routing: "Instant Calendar Booking Page (Calendly / ChiliPiper)"
  Unqualified_Nurture_Criteria:
    Budget: "< $5,000/mo"
    Routing: "Automated Email Nurture Sequence + Free PDF Guide (No sales call)"`,
              lineByLine: [
                { line: 'Qualification_Routing_Rules:', explanation: 'Establishes automated guardrails and execution rules to protect account stability.' },
                { line: 'Qualified_SQL_Criteria:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Budget: \">= $10,000/mo\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Authority: \"Founder / CMO / VP\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-8-2',
          title: 'Offline Conversions & CRM Feedback Loops via CAPI',
          difficulty: 'Advanced',
          content: `### Training Meta on Closed-Won Deals

Meta cannot see what happens inside your Salesforce or HubSpot CRM when a sales rep closes a $25,000 deal 3 weeks later unless you send the data back.

#### The Closed-Loop Architecture:
1. When user submits form on Meta/Website, capture and store the \`fbclid\` and \`lead_id\` in your CRM.
2. When the deal status changes to **"Closed Won"** in HubSpot, an automated webhook sends an **Offline Conversion (Purchase / QualifiedLead)** event to Meta Conversions API with the original \`lead_id\` and exact deal value ($25,000).
3. Meta AI receives this value signal and automatically optimizes future ad delivery toward enterprise executives who look like your closed-won clients!`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'offline-conversion-webhook-payload.json',
              code: `{
  "data": [
    {
      "event_name": "Purchase",
      "event_time": 1773356400,
      "action_source": "system_generated",
      "user_data": {
        "lead_id": "LEAD_908412904",
        "em": ["9b72049d564177d61184a7536b28f80453d4eb0760432c25ec510f274643c162"],
        "ph": ["f660ab912ec121d1b1e928a0bb4bc61b15f5ad44d5efdc4e1c92a25e99b8e44a"]
      },
      "custom_data": {
        "currency": "USD",
        "value": 25000.00,
        "deal_stage": "Closed_Won_Enterprise_Contract"
      }
    }
  ]
}`,
              lineByLine: [
                { line: '\"data\": [', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"event_name\": \"Purchase\",', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"event_time\": 1773356400,', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"action_source\": \"system_generated\",', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Always pass the deal value with your offline conversion events! When you optimize your Meta campaigns for Value Optimization (VO) using offline CRM revenue data, Meta will seek out high-ticket enterprise contracts rather than small basic accounts.',
          commonMistakes: [
            'Judging lead generation performance purely on raw CPL without tracking pipeline close rates.',
            'Failing to capture and store the `fbclid` query parameter in CRM hidden form fields.',
            'Allowing sales reps to take 24+ hours to contact inbound marketing leads.'
          ]
        },
        {
          id: 'sec-meta-adv-8-3',
          title: 'Three High-Ticket Lead Gen Case Studies',
          difficulty: 'Advanced',
          content: `### Real-World Enterprise Lead Generation

1. **Luxury Real Estate ($1.2M Avg Home):** Qualifying for pre-approved buyers, routing qualified leads directly to agent phone via instant SMS.
2. **B2B SaaS ($20k ACV):** Multi-step Typeform qualification routing SQLs directly to AE calendar bookings.
3. **Private Wealth Management:** High-net-worth individual (HNWI) qualification funnel feeding closed-won offline conversions back to Meta CAPI.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'enterprise-lead-case-studies.yaml',
              code: `Case_1_RealEstate: "Qualified leads routed to agent SMS in 90 seconds"
Case_2_B2B_SaaS: "Filtered SQLs generating $450k in qualified pipeline"
Case_3_WealthMgmt: "Offline CAPI integration optimized for $100k+ liquid assets"`,
              lineByLine: [
                { line: 'Case_1_RealEstate: \"Qualified leads routed to agent SMS ...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_2_B2B_SaaS: \"Filtered SQLs generating $450k in qual...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_3_WealthMgmt: \"Offline CAPI integration optimized f...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Introduce strategic qualification friction to filter low-intent leads.',
        'Connect CRM closed-won deal stages back to Meta via Offline Conversions CAPI.',
        'Optimize campaigns for Cost Per Qualified Lead (CPQL) and Revenue Per Lead.'
      ],
      summary: 'You now know how to engineer enterprise-grade lead generation systems with closed-loop CRM feedback.',
      practiceExercises: [
        {
          title: 'Closed-Loop Lead Generation Architecture',
          instructions: 'Design a complete closed-loop lead generation architecture for a B2B cybersecurity consulting firm ($30,000 average deal size), detailing form qualification logic, CRM routing, and Offline CAPI webhook schemas.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-09',
    orderIndex: 9,
    title: 'Module 9: Advanced Measurement and Attribution',
    description: 'Master multi-touch attribution models, Marketing Efficiency Ratio (MER), incrementality holdout tests, and reconciling platform vs analytics discrepancies.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-09', title: 'Advanced Attribution & Incrementality Testing', type: 'article', url: 'https://skillora.ai/docs/advanced-attribution-mer' }
    ],
    lessonContent: {
      overview: `### The Science of True Business Incrementality

Attribution modeling is one of the most misunderstood disciplines in performance marketing. In a multi-channel world where a customer sees a Meta ad, searches on Google, receives a Klaviyo email, and finally purchases via an affiliate link, every single platform claims 100% credit for the sale.

In this module, you will master **Marketing Efficiency Ratio (MER)**, execute **Incrementality Holdout Tests**, reconcile attribution discrepancies between Meta and Google Analytics, and build source-of-truth financial dashboards.`,
      analogyHero: 'Think of attribution like a championship basketball team scoring a winning basket. The point guard steals the ball (Meta Prospecting), passes to the forward (Klaviyo Email), who assists the center for the slam dunk (Google Search Brand Click). If you only credit the center (Last-Click), you will fire your best point guard and lose every game.',
      objectives: [
        'Calculate Marketing Efficiency Ratio (MER) / Blended ROAS at the enterprise level.',
        'Design Incrementality Lift Holdout Tests to prove true causal conversion value.',
        'Reconcile measurement discrepancies between Meta Ads Manager and Google Analytics 4 (GA4).',
        'Navigate post-iOS privacy limitations using blended business economics.'
      ],
      estimatedTime: '35 mins',
      syntaxGuide: `MER (Marketing Efficiency Ratio) = Total Store Revenue / Total Marketing Spend (All Channels)
Blended CAC = Total Marketing Spend / Total Net-New Customers Acquired
Incrementality % = (Conversions_TestGroup - Conversions_HoldoutGroup) / Conversions_TestGroup * 100`,
      sections: [
        {
          id: 'sec-meta-adv-9-1',
          title: 'Marketing Efficiency Ratio (MER) & Blended ROAS',
          difficulty: 'Advanced',
          content: `### The North Star Metric for Direct-to-Consumer Brands

Because platform attribution models over-claim credit, senior executives manage growth using **Marketing Efficiency Ratio (MER)**:

$$\\text{MER} = \\frac{\\text{Total Business Revenue (Shopify / Stripe)}}{\\text{Total Advertising Spend Across All Channels}}$$

- **MER Target Benchmarks:**
  * **MER >= 4.0x:** Highly profitable; aggressive scaling recommended.
  * **MER 3.0x - 4.0x:** Healthy scaling zone; maintain capital pacing.
  * **MER 2.0x - 3.0x:** Break-even zone depending on gross margins; optimize efficiency.
  * **MER < 2.0x:** Unprofitable cash burn; immediately audit unit economics and prune underperforming channels.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'mer-blended-dashboard.yaml',
              code: `Monthly_MER_Financial_Model:
  Total_Shopify_Revenue: "$150,000.00"
  Advertising_Spend:
    Meta_Ads_Spend: "$30,000.00"
    Google_Ads_Spend: "$10,000.00"
    TikTok_Ads_Spend: "$5,000.00"
    Total_Marketing_Spend: "$45,000.00"
  Calculations:
    MER_Blended_ROAS: "$150,000 / $45,000 = 3.33x (Healthy Scaling Zone)"
    Blended_CPA: "$45,000 / 2,142 orders = $21.00 per order"`,
              lineByLine: [
                { line: 'Monthly_MER_Financial_Model:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Total_Shopify_Revenue: \"$150,000.00\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Advertising_Spend:', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Meta_Ads_Spend: \"$30,000.00\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-9-2',
          title: 'Incrementality Lift Testing & Holdout Experiments',
          difficulty: 'Advanced',
          content: `### Proving Causality vs Correlation

An **Incrementality Holdout Test** divides your target audience into two randomized groups:
1. **Test Group (85% of Audience):** Shown your Meta advertisements.
2. **Control / Holdout Group (15% of Audience):** Completely withheld from seeing your ads.

After 30 days, compare the total conversion rate between the two groups:
$$\\text{Incremental Lift} = \\text{Test Group Conversions} - \\text{Holdout Group Conversions}$$
*If the Test Group generates 1,000 purchases and the Holdout Group generates 200 purchases (scaled proportionally), your campaign delivered **800 strictly incremental purchases**!*`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'incrementality-test-results.json',
              code: `{
  "lift_test_analysis": {
    "test_group_85pct": { "spend": 42500, "conversions": 1700, "revenue": 102000 },
    "holdout_group_15pct_normalized": { "spend": 0, "conversions": 340, "revenue": 20400 },
    "incremental_lift_metrics": {
      "net_incremental_orders": 1360,
      "net_incremental_revenue": 81600,
      "incremental_roas": 1.92,
      "verdict": "PROVEN CAUSAL LIFT"
    }
  }
}`,
              lineByLine: [
                { line: '\"lift_test_analysis\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"test_group_85pct\": { \"spend\": 42500, \"conversions\"...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"holdout_group_15pct_normalized\": { \"spend\": 0, \"con...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"incremental_lift_metrics\": {', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'When reconciling Meta vs Google Analytics 4 (GA4), remember that GA4 uses Last-Click Data-Driven models that undervalue top-of-funnel impression drivers. Use Meta for in-platform creative optimization and MER for overall business capital allocation.',
          commonMistakes: [
            'Turning off top-of-funnel Meta prospecting because Google Analytics Last-Click showed a 0.8x ROAS, and watching total company revenue collapse by 50% two weeks later.',
            'Assuming platform-reported ROAS represents pure net-new bank cash without checking blended MER.',
            'Ignoring view-through conversion windows when comparing cross-channel attribution reports.'
          ]
        },
        {
          id: 'sec-meta-adv-9-3',
          title: 'Three Advanced Attribution Case Studies',
          difficulty: 'Advanced',
          content: `### Real-World Attribution Analyses

1. **Meta vs GA4 Reconciliation:** Explaining to an e-commerce CEO why Meta reported $80k revenue while GA4 reported $45k.
2. **30-Day Conversion Lift Test:** Proving that Meta prospecting generated 72% incremental net-new buyers for a DTC footwear brand.
3. **MER Scaling Playbook:** Scaling total ad spend from $30k to $90k/mo while holding blended MER steady at 3.4x.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'attribution-case-scenarios.yaml',
              code: `Case_1_Reconciliation: "Multi-touch journey explained: Meta created demand, GA4 credited search"
Case_2_Incrementality: "Holdout test proved 72% true causal incrementality"
Case_3_MER_Scale: "Triple spend scale maintaining 3.4x blended MER"`,
              lineByLine: [
                { line: 'Case_1_Reconciliation: \"Multi-touch journey explained: M...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_2_Incrementality: \"Holdout test proved 72% true cau...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_3_MER_Scale: \"Triple spend scale maintaining 3.4x b...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Use Marketing Efficiency Ratio (MER) to evaluate blended P&L health across all marketing spend.',
        'Execute Incrementality Lift tests to prove true causal advertising impact.',
        'Understand that platform attribution and web analytics measure different stages of the customer journey.'
      ],
      summary: 'You now know how to navigate complex attribution models and execute incrementality testing.',
      practiceExercises: [
        {
          title: 'Incrementality & MER Executive Analysis Memo',
          instructions: 'Draft an executive attribution memorandum reconciling a 40% discrepancy between Meta Ads Manager reporting and Google Analytics 4 for an e-commerce brand, detailing MER trends and incrementality recommendations.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-10',
    orderIndex: 10,
    title: 'Module 10: Advanced E-commerce and Catalog Strategy',
    description: 'Master large-scale catalog architecture, margin-based product sets, custom labels, dynamic creative overlays, inventory triggers, and multi-currency feeds.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-10', title: 'Enterprise Catalog Optimization & Custom Labels', type: 'documentation', url: 'https://skillora.ai/docs/enterprise-catalog-strategy' }
    ],
    lessonContent: {
      overview: `### Enterprise Catalog Engineering and Inventory Automation

Managing product advertising for large retail catalogs with 10,000+ SKUs requires deep technical feed customization. Running dynamic ads on out-of-stock items, low-margin products, or incorrect local currencies burns hundreds of dollars daily.

In this module, you will master **Custom Labels (0–4)** in product feeds, build margin-tiered product sets, automate inventory-level pausing, and deploy dynamic visual pricing overlays at scale.`,
      analogyHero: 'Think of enterprise catalog strategy like an automated logistics distribution center. Instead of manually inspecting every package, you program barcode scanners and robotic conveyors (custom labels) to sort high-priority items directly to express cargo planes.',
      objectives: [
        'Program Custom Labels (0–4) in XML/Shopify feeds for Margin, Velocity, and Seasonality.',
        'Construct margin-tiered Product Sets to ensure allowable CPA compliance.',
        'Deploy dynamic creative overlays (Sale Badges, Strikethrough Pricing, Free Shipping).',
        'Automate inventory triggers to instantly pause ads for products with low stock.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-adv-10-1',
          title: 'Custom Labels (0–4) Feed Schema Architecture',
          difficulty: 'Advanced',
          content: `### Segmenting Massive Catalogs via Feed Metadata

Meta allows up to 5 **Custom Labels** in your product feed to categorize SKUs by business metrics:
- **Custom Label 0 (Profit Margin Tier):** \`High_Margin_80\`, \`Medium_Margin_50\`, \`Low_Margin_20\`.
- **Custom Label 1 (Sales Velocity):** \`Top_10_Bestseller\`, \`Slow_Mover\`, \`New_Arrival\`.
- **Custom Label 2 (Inventory Depth):** \`High_Stock_100+\`, \`Low_Stock_Under_10\`.
- **Custom Label 3 (Seasonality / Campaign):** \`Summer_Linen_2026\`, \`Evergreen_Core\`.
- **Custom Label 4 (Price Bracket):** \`Under_50\`, \`50_to_150\`, \`Over_150\`.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'custom-label-feed-rules.yaml',
              code: `Catalog_Custom_Label_Mapping:
  Custom_Label_0_Margin:
    Tier_1: "Gross Margin >= 75% -> Scale with aggressive CBO budget"
    Tier_3: "Gross Margin <= 30% -> Restrict to high-ROAS retargeting only"
  Custom_Label_1_Velocity:
    Top_Performers: "Top 20% highest converting SKUs -> Feed into Advantage+ Catalog Ads"
  Custom_Label_2_Stock_Safety:
    Auto_Exclude: "Inventory < 5 units -> Automatically removed from ad sets"`,
              lineByLine: [
                { line: 'Catalog_Custom_Label_Mapping:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Custom_Label_0_Margin:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Tier_1: \"Gross Margin >= 75% -> Scale with aggressive CB...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Tier_3: \"Gross Margin <= 30% -> Restrict to high-ROAS re...', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-10-2',
          title: 'Dynamic Overlays and Inventory Trigger Automations',
          difficulty: 'Advanced',
          content: `### Enhancing Catalog Click-Through Rates

- **Dynamic Creative Overlays:** Inside Commerce Manager, enable automated visual badges directly over product images (e.g. "20% OFF", "~$75~ $60", "Free Shipping Over $50"). This increases CTR by up to **35%**.
- **Automated Stock Protection:** Configure catalog rules so that when SKU stock drops below 5 units, the product is automatically moved to the \`Excluded_Low_Stock\` set, preventing ad spend on items that sell out mid-campaign.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'dynamic-overlay-config.json',
              code: `{
  "dynamic_creative_overlay": {
    "badge_type": "Strikethrough_Price",
    "font": "Bold_Clean_Sans",
    "position": "Top_Right_Corner",
    "background_color": "#10B981",
    "text_color": "#FFFFFF",
    "rule": "Show only when sale_price < regular_price"
  }
}`,
              lineByLine: [
                { line: '\"dynamic_creative_overlay\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"badge_type\": \"Strikethrough_Price\",', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: '\"font\": \"Bold_Clean_Sans\",', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"position\": \"Top_Right_Corner\",', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Never run dynamic catalog ads with lifestyle photos that crop out the product! Ensure your catalog feed utilizes clean 1:1 square product photography on neutral backgrounds to maintain visual clarity in dynamic carousels.',
          commonMistakes: [
            'Running catalog ads on $10 low-margin items that cannot absorb a $15 acquisition cost.',
            'Failing to set up automated hourly feed syncs, causing ads to promote out-of-stock sizes.',
            'Leaving Custom Labels unconfigured and advertising random slow-moving inventory to cold audiences.'
          ]
        },
        {
          id: 'sec-meta-adv-10-3',
          title: 'Three Advanced Catalog Case Studies',
          difficulty: 'Advanced',
          content: `### Enterprise Catalog Implementations

1. **10,000-SKU Apparel Retailer:** Custom Label 0 segmentation generating 4.2x ROAS on high-margin product sets.
2. **Automated Low-Stock Trigger:** Saving $4,000/month by auto-pausing sold-out footwear sizes.
3. **Multi-Currency Global Catalog:** Delivering local currency pricing (USD, CAD, GBP, EUR) across 4 international markets.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'catalog-case-studies.yaml',
              code: `Case_1_Margin_Segmentation: "High-margin sets scaled to $80k/mo spend"
Case_2_Stock_Trigger: "Auto-pause saved $4k/mo in broken-size traffic"
Case_3_MultiCurrency: "Local currency feeds boosted international CVR by 28%"`,
              lineByLine: [
                { line: 'Case_1_Margin_Segmentation: \"High-margin sets scaled to ...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_2_Stock_Trigger: \"Auto-pause saved $4k/mo in broken...', explanation: 'Establishes automated guardrails and execution rules to protect account stability.' },
                { line: 'Case_3_MultiCurrency: \"Local currency feeds boosted inte...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Program Custom Labels (0–4) to segment catalogs by Margin, Velocity, and Inventory.',
        'Deploy dynamic pricing overlays to boost carousel Click-Through Rates.',
        'Automate inventory triggers to eliminate wasted ad spend on sold-out products.'
      ],
      summary: 'You now know how to architect and automate enterprise-scale product catalogs.',
      practiceExercises: [
        {
          title: 'Enterprise Catalog Feed Architecture Plan',
          instructions: 'Design a complete catalog feed segmentation schema for a multi-brand luxury cosmetics retailer (3,000 SKUs), defining the logic for all 5 Custom Labels and 3 distinct Product Sets.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-11',
    orderIndex: 11,
    title: 'Module 11: Advantage+ and Automation Strategy',
    description: 'Master Advantage+ Shopping Campaigns (ASC), Advantage+ Creative features, machine learning audience expansion, and balancing automation with human strategy.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-11', title: 'Advantage+ Shopping Campaigns (ASC) Playbook', type: 'documentation', url: 'https://www.facebook.com/business/help/148910294102948' }
    ],
    lessonContent: {
      overview: `### The Age of Algorithmic Automation: Advantage+

Meta's **Advantage+ suite** (Advantage+ Shopping Campaigns, Advantage+ Placements, Advantage+ Creative, and Advantage+ Audience) represents the most significant shift in media buying in a decade. By consolidating targeting, bidding, and creative distribution into automated machine-learning models, ASC campaigns can achieve unprecedented scale.

In this module, you will master Advantage+ Shopping Campaigns (ASC), learn to configure **Existing Customer Budget Caps**, and understand when to trust automation versus when to enforce manual controls.`,
      analogyHero: 'Think of Advantage+ like an autonomous self-driving sports car. On smooth, well-mapped highways (high-volume e-commerce with rich pixel data), you turn on autopilot and let the AI navigate at 150 MPH. On unpaved mountain roads (new product launches or cold testing), you keep your hands firmly on the steering wheel.',
      objectives: [
        'Master the setup and optimization of Advantage+ Shopping Campaigns (ASC).',
        'Configure Existing Customer Budget Caps to prevent ASC from cannibalizing warm audiences.',
        'Audit Advantage+ Creative enhancements (Image Expansion, Music, Text Variations).',
        'Build a hybrid account structure balancing automated ASC with manual testing sandboxes.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-adv-11-1',
          title: 'Advantage+ Shopping Campaigns (ASC) Architecture',
          difficulty: 'Advanced',
          content: `### How ASC Works Under the Hood

Advantage+ Shopping Campaigns (ASC) automate audience targeting, placement distribution, and budget allocation inside a single campaign:
- **Up to 150 Creatives in One Campaign:** You can upload up to 150 diverse creatives (videos, UGC, carousels, static images).
- **Machine Learning Matchmaking:** Meta AI dynamically matches the specific creative angle to the user based on their real-time behavioral signals.
- **The Existing Customer Budget Cap:** Crucial setting! ASC loves to retarget existing customers because they convert easily. Set an **Existing Customer Budget Cap of 5% to 15%** to force ASC to spend 85%+ of its budget acquiring net-new customers.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'asc-configuration-blueprint.yaml',
              code: `Advantage_Plus_Shopping_Setup:
  Campaign_Type: "Advantage+ Shopping Campaign (ASC)"
  Daily_Budget: "$300.00/day"
  Existing_Customer_Cap: "10% Maximum"
  Customer_Definition: "Customer CSV List (All Buyers) + Pixel Purchase (180D)"
  Creative_Diversity_Pool:
    - 6 UGC Video Reels (9:16)
    - 4 Carousel Best Sellers (1:1)
    - 4 High-Contrast Static Offer Graphics (4:5)
    - 2 Dynamic Catalog Product Sets`,
              lineByLine: [
                { line: 'Advantage_Plus_Shopping_Setup:', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Campaign_Type: \"Advantage+ Shopping Campaign (ASC)\"', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: 'Daily_Budget: \"$300.00/day\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Existing_Customer_Cap: \"10% Maximum\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-11-2',
          title: 'When to Use Automation vs When to Use Manual Controls',
          difficulty: 'Advanced',
          content: `### The Strategic Human vs Machine Balance

| Component | Automated (Advantage+) | Manual Control |
| :--- | :--- | :--- |
| **Broad Scaling** | **ASC / CBO** (Optimal liquidity) | Manual ABO (Too rigid) |
| **Creative Testing** | Avoid (ASC starves new ads) | **Manual ABO Sandbox** (Guaranteed equal spend) |
| **Creative Enhancements** | Test carefully (Music/Expansion) | **Manual Control** (Preserves brand guidelines) |
| **Audience Discovery** | **Advantage+ Audience** | Manual Interest Stacks |

*The Golden Rule:* Never test new unproven creatives inside an active ASC campaign! Test them in a manual ABO sandbox first, then graduate verified winners into ASC.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'hybrid-account-model.json',
              code: `{
  "hybrid_operating_model": {
    "ASC_Campaign_70pct_Spend": "Consolidates all proven winner creatives with 10% customer cap",
    "Manual_ABO_Testing_30pct_Spend": "Continuous R&D sandbox testing 4 new hooks weekly"
  }
}`,
              lineByLine: [
                { line: '\"hybrid_operating_model\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"ASC_Campaign_70pct_Spend\": \"Consolidates all proven w...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: '\"Manual_ABO_Testing_30pct_Spend\": \"Continuous R&D sand...', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ],
          proTip: 'Be careful with Advantage+ Creative "Standard Enhancements" (like AI Image Expansion or Auto-Generated Text). Sometimes Meta\'s AI expansion crops product logos awkwardly or adds mismatched background music. Always review the creative preview before leaving enhancements enabled.',
          commonMistakes: [
            'Running ASC with a 0% existing customer definition, allowing Meta to spend 60% of budget on past purchasers.',
            'Dumping 20 untested new ads into an active ASC campaign, crashing campaign performance.',
            'Relying 100% on ASC with zero manual testing sandbox, running out of fresh creatives when fatigue hits.'
          ]
        },
        {
          id: 'sec-meta-adv-11-3',
          title: 'Three Advantage+ Implementation Scenarios',
          difficulty: 'Advanced',
          content: `### Real-World Automation Deployments

1. **DTC E-Commerce Scale:** Scaling an ASC campaign from $200/day to $1,500/day with 10% customer cap.
2. **Hybrid Account Model:** 70% spend in ASC + 30% spend in manual ABO Dynamic Creative Testing.
3. **Diagnosing ASC Fatigue:** Identifying when an ASC campaign saturates its core creative pool and requires fresh asset injection.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'asc-case-scenarios.yaml',
              code: `Case_1_ASC_Scale: "ASC scaled to $1.5k/day holding 3.4x ROAS"
Case_2_Hybrid_Model: "Manual ABO testing continuously feeds ASC winners"
Case_3_Fatigue_Recovery: "Injected 6 fresh UGC reels to revive fatigued ASC"`,
              lineByLine: [
                { line: 'Case_1_ASC_Scale: \"ASC scaled to $1.5k/day holding 3.4x ...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Case_2_Hybrid_Model: \"Manual ABO testing continuously fe...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_3_Fatigue_Recovery: \"Injected 6 fresh UGC reels to ...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Advantage+ Shopping Campaigns (ASC) provide unparalleled machine learning scale.',
        'Always configure an Existing Customer Budget Cap (5%–15%) to prevent retargeting cannibalization.',
        'Operate a hybrid model: Manual ABO for creative R&D, ASC for evergreen scaling.'
      ],
      summary: 'You now understand how to deploy Advantage+ automation alongside strategic human controls.',
      practiceExercises: [
        {
          title: 'Advantage+ Hybrid Account Blueprint',
          instructions: 'Design a hybrid operating plan for a DTC skincare brand ($50,000/month budget), detailing ASC campaign settings, customer cap definitions, and manual ABO creative testing workflows.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-12',
    orderIndex: 12,
    title: 'Module 12: International and Multi-Market Advertising',
    description: 'Master global expansion frameworks, country purchasing power tiering, currency localization, translated creative pipelines, and cross-market analytics.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-12', title: 'Global Multi-Market Expansion Guide', type: 'article', url: 'https://skillora.ai/docs/international-meta-scaling' }
    ],
    lessonContent: {
      overview: `### Scaling Brands Beyond Domestic Borders

Expanding from a single domestic market (e.g. US) into international territories (Canada, UK, Australia, Western Europe, Latin America) can double or triple a brand's total revenue. However, international media buying requires deep understanding of currency exchange rates, local logistics, cultural hooks, and payment preferences.

In this module, you will master global country tiering, localize ad creatives and landing pages, and build multi-market campaign architectures.`,
      analogyHero: 'Think of international advertising like opening restaurant locations in different countries. You cannot serve the exact same menu in Tokyo as you do in Texas. You must adapt the spices, the language, the currency, and the dining customs to delight local patrons.',
      objectives: [
        'Segment global markets into Economic Tiers (Tier 1 English, Tier 1 Europe, Tier 2 Emerging).',
        'Localize ad copy, currency, pricing, and social proof for international markets.',
        'Structure multi-country campaigns without currency or shipping friction.',
        'Analyze cross-market CPA and ROAS expectations based on local auction CPMs.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-adv-12-1',
          title: 'Global Market Tiering & Economic Segmentation',
          difficulty: 'Advanced',
          content: `### Categorizing International Audiences

1. **Tier 1 English-Speaking (US, CA, UK, AU, NZ):**
   * *Characteristics:* Highest purchasing power, identical language, high auction CPMs ($25–$45).
   * *Execution:* Can share identical creative assets, but require localized shipping promises.
2. **Tier 1 Western Europe (DE, FR, NL, SE, DK, NO):**
   * *Characteristics:* High purchasing power, requires translated copy, prefers local payment options (Klarna, iDEAL, Sofort).
   * *Execution:* Dedicated translated campaigns and localized currency PDPs (€ / kr).
3. **Tier 2 High-Growth (MX, BR, PL, AE, SG):**
   * *Characteristics:* Lower CPMs ($4–$12), rapidly growing mobile e-commerce, price-sensitive.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'global-market-tiering.yaml',
              code: `International_Campaign_Architecture:
  Campaign_1_US_Domestic:
    Budget: "$200/day"
    Currency: "USD"
  Campaign_2_Tier_1_Anglosphere (CA, UK, AU):
    Budget: "$100/day"
    Currency: "Multi-Currency Dynamic PDP"
  Campaign_3_Tier_1_WesternEurope (DE, FR):
    Budget: "$60/day"
    Creatives: "Native German / French Subtitles and Voiceovers"`,
              lineByLine: [
                { line: 'International_Campaign_Architecture:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Campaign_1_US_Domestic:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Budget: \"$200/day\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Currency: \"USD\"', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-12-2',
          title: 'Localization, Currency Feeds & Logistics QA',
          difficulty: 'Advanced',
          content: `### Eliminating Cross-Border Conversion Friction

Before launching ads in a new country, verify:
1. **Currency & Taxes:** Does the website automatically switch to local currency (e.g. £ GBP / € EUR) and display VAT-inclusive pricing?
2. **Shipping Transparency:** Does the ad and product page clearly state international delivery timelines (e.g. "Free 3-Day Express Shipping to UK")?
3. **Local Payment Gateways:** In Germany and Netherlands, over 50% of shoppers use Klarna and iDEAL. If your checkout only accepts credit cards, you lose half your sales.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'international-readiness-checklist.json',
              code: `{
  "international_qa": {
    "local_currency_active": true,
    "vat_taxes_included": true,
    "local_payment_methods": ["Apple_Pay", "Shop_Pay", "Klarna", "iDEAL"],
    "shipping_sla_days": "3-5 business days",
    "translated_checkout": true
  }
}`,
              lineByLine: [
                { line: '\"international_qa\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"local_currency_active\": true,', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"vat_taxes_included\": true,', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"local_payment_methods\": [\"Apple_Pay\", \"Shop_Pay\", ...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'When translating video ads for non-English markets, hire native voiceover actors rather than using robotic AI text-to-speech. Native cultural accents and idioms significantly improve ad credibility and lower CPA.',
          commonMistakes: [
            'Lumping US, UK, and India into one ad set, allowing cheap Indian impressions to steal all the budget.',
            'Advertising products in countries where international shipping costs $40 on a $50 item.',
            'Failing to display local currency on checkout pages.'
          ]
        },
        {
          id: 'sec-meta-adv-12-3',
          title: 'Three Global Expansion Case Studies',
          difficulty: 'Advanced',
          content: `### Real-World International Campaigns

1. **US Apparel Expanding to UK & Australia:** Generating $60k/mo incremental revenue with Tier 1 Anglosphere campaigns.
2. **German Market Expansion:** Localizing UGC video voiceovers into German, cutting CPA by 42%.
3. **Multi-Currency Dynamic Catalog:** Delivering dynamic localized pricing across 14 European nations.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'international-case-scenarios.yaml',
              code: `Case_1_Anglosphere: "Expanded into UK/AU adding $60k/mo revenue"
Case_2_German_Localization: "Native German voiceovers cut CPA from €32 to €18.50"
Case_3_MultiCurrency_Feed: "Local pricing feeds boosted EU conversion rate by 34%"`,
              lineByLine: [
                { line: 'Case_1_Anglosphere: \"Expanded into UK/AU adding $60k/mo ...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_2_German_Localization: \"Native German voiceovers cu...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Case_3_MultiCurrency_Feed: \"Local pricing feeds boosted ...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Group international countries by economic tier and language compatibility.',
        'Ensure local currency, payment gateways (Klarna/iDEAL), and transparent shipping SLAs.',
        'Use native language voiceovers and translated subtitles for European expansion.'
      ],
      summary: 'You now know how to engineer global multi-market expansion strategies.',
      practiceExercises: [
        {
          title: '3-Country International Expansion Plan',
          instructions: 'Design an international expansion plan for a US brand scaling into the UK, Germany, and Australia ($30,000/month budget), detailing campaign segmentation, localization specs, and currency handling.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-13',
    orderIndex: 13,
    title: 'Module 13: Client/Agency Operations and Governance',
    description: 'Master agency Standard Operating Procedures (SOPs), 14-day client onboarding, change log protocols, account audits, policy violation appeals, and ethical governance.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-13', title: 'Agency Operations & Governance Playbook', type: 'article', url: 'https://skillora.ai/docs/agency-operations-sop' }
    ],
    lessonContent: {
      overview: `### Enterprise Agency Operations and Quality Control

Operating an agency or high-output media buying team requires bulletproof Standard Operating Procedures (SOPs). One rogue team member making unlogged budget edits or uploading non-compliant ad copy can get a million-dollar ad account suspended overnight.

In this module, you will master **14-Day Client Onboarding Frameworks**, comprehensive account auditing checklists, standardized change logs, and policy compliance workflows.`,
      analogyHero: 'Think of agency operations like an air traffic control tower. You cannot allow individual pilots to land on whatever runway they feel like. You need strict protocols, checklists, radar coordination, and emergency response procedures to guide 50 planes safely to the ground.',
      objectives: [
        'Deploy a 14-day client onboarding SOP covering asset access, tracking QA, and creative roadmaps.',
        'Execute comprehensive 50-point ad account audits.',
        'Maintain standardized account change logs and approval workflows.',
        'Navigate Meta advertising policy appeals and account restriction restorations.'
      ],
      estimatedTime: '35 mins',
      sections: [
        {
          id: 'sec-meta-adv-13-1',
          title: 'The 14-Day Client Onboarding Framework',
          difficulty: 'Advanced',
          content: `### Standardized Agency Onboarding Protocol

- **Days 1–3 (Access & Audit):** Request Partner access to Business Portfolio, Ad Account, Page, and Pixel. Perform 50-point technical and financial audit.
- **Days 4–7 (Tracking & Attribution QA):** Audit Pixel/CAPI telemetry, verify domain, check EMQ scores, and configure custom Ads Manager reporting presets.
- **Days 8–10 (Creative Strategy & Briefing):** Analyze past creative winners, develop 5 awareness-level angles, and issue briefs to UGC creators.
- **Days 11–13 (Campaign Build & Review):** Build testing and scaling campaign trees, input copy, configure attribution settings, and conduct client review.
- **Day 14 (Launch & Pacing):** Launch campaigns, verify real-time pixel firing, and monitor spend pacing.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'client-onboarding-sop.yaml',
              code: `Agency_14_Day_Onboarding_SOP:
  Phase_1_Days_1_3: "Partner access verification + Historical data audit"
  Phase_2_Days_4_7: "Pixel/CAPI QA + Custom column presets + Domain verification"
  Phase_3_Days_8_10: "Creative research + 15-script storyboard briefing"
  Phase_4_Days_11_13: "Campaign staging in Ads Manager + Client approval signoff"
  Phase_5_Day_14: "Official launch + Live telemetry verification"`,
              lineByLine: [
                { line: 'Agency_14_Day_Onboarding_SOP:', explanation: 'Specifies target demographic parameters and delivery audience segmentation.' },
                { line: 'Phase_1_Days_1_3: \"Partner access verification + Histori...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Phase_2_Days_4_7: \"Pixel/CAPI QA + Custom column presets...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Phase_3_Days_8_10: \"Creative research + 15-script storyb...', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-13-2',
          title: 'Policy Compliance, Account Restrictions & Appeals',
          difficulty: 'Advanced',
          content: `### Resolving Policy Flags and Account Restrictions

If an ad or ad account is flagged by Meta's automated bots:
1. **Do Not Immediately Delete the Ad:** Deleting a rejected ad prevents manual appeal.
2. **Review the Specific Policy:** Check Account Quality for the exact violation (e.g. Unrealistic Claims, Personal Attributes, Misleading Content).
3. **Request Manual Human Review:** Navigate to Account Quality and submit an appeal stating how the ad adheres to advertising standards.
4. **Direct Meta Pro Concierge Chat:** If the account remains restricted, open a live chat ticket with Meta Business Support via Business Help Center.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'policy-appeal-script.json',
              code: `{
  "appeal_protocol": {
    "step_1": "Audit ad copy to remove words like 'You', 'Your condition', or absolute guarantees",
    "step_2": "Ensure landing page features valid Privacy Policy and Physical Business Address",
    "step_3": "Submit manual review with professional compliance rationale",
    "step_4": "Escalate to Meta Business Concierge Support via live chat"
  }
}`,
              lineByLine: [
                { line: '\"appeal_protocol\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"step_1\": \"Audit ad copy to remove words like \'You\',...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"step_2\": \"Ensure landing page features valid Privacy ...', explanation: 'Delivers targeted copy and creative angles matched to audience awareness levels.' },
                { line: '\"step_3\": \"Submit manual review with professional comp...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ],
          proTip: 'Maintain a dedicated "Warm" backup ad account within the client\'s Business Portfolio with verified billing and connected pixels. If the primary ad account encounters a temporary automated review hold, you can switch traffic to the backup account within 10 minutes.',
          commonMistakes: [
            'Arguing aggressively with Meta support representatives instead of calmly providing compliance documentation.',
            'Onboarding new clients without a signed Scope of Work (SOW) defining target KPIs and communication cadences.',
            'Making major budget changes without logging them in the agency change log.'
          ]
        },
        {
          id: 'sec-meta-adv-13-3',
          title: 'Three Agency Operational Case Studies',
          difficulty: 'Advanced',
          content: `### Real-World Agency Operations

1. **Agency 14-Day Client Launch:** Seamlessly onboarding an e-commerce brand and launching 12 new creatives on schedule.
2. **Account Audit Uncovering Waste:** Identifying $8,000/month spent on overlapping audiences and broken tracking.
3. **Restoring a Restricted Account:** Submitting a structured compliance appeal to reverse a wrongful bot suspension in 24 hours.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'agency-operations-scenarios.yaml',
              code: `Case_1_Onboarding: "14-Day SOP executed flawlessly with zero launch delays"
Case_2_Audit_Savings: "Audit pruned $8k/mo in wasted spend, boosting ROAS from 1.8x to 3.2x"
Case_3_Appeal_Success: "Structured compliance appeal restored ad account in 24 hours"`,
              lineByLine: [
                { line: 'Case_1_Onboarding: \"14-Day SOP executed flawlessly with ...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_2_Audit_Savings: \"Audit pruned $8k/mo in wasted spe...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Case_3_Appeal_Success: \"Structured compliance appeal res...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Execute standardized 14-day onboarding protocols to ensure operational excellence.',
        'Maintain centralized change logs to track all account modifications.',
        'Handle policy appeals professionally through Account Quality and Meta Concierge support.'
      ],
      summary: 'You now know how to operate agency-grade media buying workflows and governance protocols.',
      practiceExercises: [
        {
          title: 'Agency Media Buying SOP Document',
          instructions: 'Draft a comprehensive 4-page Agency Standard Operating Procedure (SOP) detailing Client Onboarding, Daily Campaign Optimization Checklists, Weekly Reporting Rules, and Policy Appeal Protocols.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-14',
    orderIndex: 14,
    title: 'Module 14: Senior Performance Strategy and Optimization',
    description: 'Master executive decision-making, 30/60/90-day growth roadmaps, crisis diagnosis, sudden performance collapse turnarounds, and board-level presentations.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 250,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-14', title: 'Senior Performance Strategy & Growth Leadership', type: 'article', url: 'https://skillora.ai/docs/senior-performance-strategy' }
    ],
    lessonContent: {
      overview: `### The Executive Media Buying Playbook

At the highest tier of performance marketing, you are not merely managing ads—you are driving enterprise business growth. Senior performance directors connect paid media to cash flow, inventory supply chains, product development roadmaps, and P&L financial returns.

In this capstone theory module, you will master **30/60/90-Day Strategic Growth Planning**, crisis management when performance collapses, and executive board-level reporting.`,
      analogyHero: 'Think of senior performance strategy like commanding a navy fleet. You are not scrubbing the decks or firing individual cannons. You are analyzing meteorological charts (market dynamics), managing supply lines (unit economics), and coordinating battleships, cruisers, and submarines into a unified victory.',
      objectives: [
        'Formulate 30/60/90-Day Strategic Growth Plans for enterprise brands.',
        'Execute Crisis Turnaround Protocols when account performance drops suddenly.',
        'Align paid advertising spend with inventory supply chains and merchant cash flow.',
        'Present data-driven strategic growth roadmaps to CEOs, founders, and investors.'
      ],
      estimatedTime: '40 mins',
      sections: [
        {
          id: 'sec-meta-adv-14-1',
          title: 'The 30/60/90-Day Strategic Growth Roadmap',
          difficulty: 'Advanced',
          content: `### Phased Enterprise Growth Blueprint

- **Phase 1: Days 1–30 (Stabilization & Measurement Foundation):**
  * Audit and fix Pixel/CAPI telemetry; ensure >= 8.5 EMQ score.
  * Consolidate fragmented campaigns into clean 3-campaign model (CBO / ASC + Testing Sandbox).
  * Build baseline 3:2:2 DCT testing pipeline and establish true Break-Even ROAS targets.
- **Phase 2: Days 31–60 (Creative Velocity & Scaling):**
  * Test 15 new creative concepts across the 5 Levels of Customer Awareness.
  * Graduate verified Post ID winners to scale main campaigns by 50% spend volume.
  * Deploy 3-stage time-decay retargeting and dynamic catalog overlays.
- **Phase 3: Days 61–90 (Horizontal Expansion & LTV Maximization):**
  * Expand into international Tier 1 markets (CA, UK, AU).
  * Launch VIP customer retention campaigns and replenishment triggers.
  * Optimize blended Marketing Efficiency Ratio (MER) past 3.5x.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: '30-60-90-day-growth-roadmap.yaml',
              code: `Growth_Plan_Timeline:
  Days_1_30_Foundation:
    - Fix CAPI Deduplication & EMQ
    - Consolidate to 3-Campaign Model
    - Launch 3:2:2 Creative Testing
  Days_31_60_Scale:
    - Double spend on verified Post ID winners
    - Launch Advantage+ Shopping Campaign (ASC)
    - Deploy 3-Stage Retargeting
  Days_61_90_Expansion:
    - International Expansion (UK/CA/AU)
    - VIP Retention & Replenishment Funnels
    - MER Target: >= 3.5x Blended`,
              lineByLine: [
                { line: 'Growth_Plan_Timeline:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Days_1_30_Foundation:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '- Fix CAPI Deduplication & EMQ', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '- Consolidate to 3-Campaign Model', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-14-2',
          title: 'Crisis Management & Performance Turnaround Protocol',
          difficulty: 'Advanced',
          content: `### What to Do When an Account Crashes Overnight

If an account experiencing 4.0x ROAS suddenly collapses to 1.2x ROAS over 48 hours:
1. **Step 1 (Check Technical Telemetry):** Is the pixel firing? Did a Shopify theme update break checkout scripts? Are CAPI events passing?
2. **Step 2 (Check Landing Page & Checkout):** Did a payment gateway expire? Is mobile page load speed delayed?
3. **Step 3 (Check Frequency & Creative Fatigue):** Did frequency spike past 4.0 in prospecting?
4. **Step 4 (Check Auction Seasonality):** Did a holiday or major competitor event double industry CPMs?
5. **Step 5 (Apply Remediation):** Revert recent broken settings, deploy fresh creative hooks, and adjust bids to protect contribution margin.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'crisis-turnaround-protocol.json',
              code: `{
  "crisis_protocol": {
    "step_1_telemetry": "Test Pixel Helper + Events Manager real-time stream",
    "step_2_checkout": "Place a live test order on mobile checkout",
    "step_3_creative": "Check rolling 3-day frequency and outbound link CTR",
    "step_4_action": "Inject emergency reserve creative assets + adjust budget"
  }
}`,
              lineByLine: [
                { line: '\"crisis_protocol\": {', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"step_1_telemetry\": \"Test Pixel Helper + Events Manage...', explanation: 'Instructs the Meta machine learning auction engine on target conversion signals.' },
                { line: '\"step_2_checkout\": \"Place a live test order on mobile ...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: '\"step_3_creative\": \"Check rolling 3-day frequency and ...', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ],
          proTip: 'Always maintain an "Emergency Creative Vault" containing 3 evergreen, high-performing video concepts that have not run in the last 60 days. If your active creative pool experiences sudden fatigue, you can deploy the emergency vault within 5 minutes to stabilize the account.',
          commonMistakes: [
            'Panicking during a sudden performance dip and deleting all active campaigns.',
            'Failing to align advertising scaling with warehouse inventory availability, leading to weeks of stockouts.',
            'Presenting complex technical jargon to executive boards instead of clear financial P&L outcomes.'
          ]
        },
        {
          id: 'sec-meta-adv-14-3',
          title: 'Three Senior Strategic Case Studies',
          difficulty: 'Advanced',
          content: `### Senior Strategic Turnarounds

1. **90-Day Brand Turnaround:** Taking a struggling DTC footwear brand from 1.4x to 3.6x ROAS while scaling spend from $15k to $60k/mo.
2. **BFCM Holiday Strategy:** Generating $420k in Cyber Week revenue using Cost Caps and dynamic bundles.
3. **Executive Board Presentation:** Successfully defending a $500,000 annual Meta advertising budget to venture capital investors.`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'senior-strategy-scenarios.yaml',
              code: `Case_1_Turnaround: "Consolidated architecture + creative pipeline scaled ROAS to 3.6x"
Case_2_BFCM_Victory: "Cyber Week generated $420k revenue at 3.8x blended MER"
Case_3_Board_Defense: "Data-backed MER model secured $500k ad budget expansion"`,
              lineByLine: [
                { line: 'Case_1_Turnaround: \"Consolidated architecture + creative...', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Case_2_BFCM_Victory: \"Cyber Week generated $420k revenue...', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Case_3_Board_Defense: \"Data-backed MER model secured $50...', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'Structure growth into disciplined 30/60/90-Day phased roadmaps.',
        'Follow the 5-step crisis turnaround protocol during sudden performance collapses.',
        'Align advertising media buying with business P&L statements, cash flow, and inventory supply chains.'
      ],
      summary: 'You have mastered senior performance strategy and are ready to execute the Advanced Production Projects.',
      practiceExercises: [
        {
          title: 'Senior Performance Strategy Document',
          instructions: 'Write a comprehensive 90-day turnaround strategy document for a direct-to-consumer e-commerce brand ($1.5M annual revenue), outlining Phase 1 Foundation, Phase 2 Scaling, and Phase 3 Expansion.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-15',
    orderIndex: 15,
    title: 'Advanced Production Project 1: Build a Complete E-commerce Growth System',
    description: 'Construct an enterprise-grade Meta Ads growth system for a $100 AOV DTC e-commerce company with a 30% contribution margin. Detail account architecture, CAPI telemetry, creative testing, dynamic catalog strategy, break-even economics, scaling framework, and 30/60/90-day plan.',
    status: 'locked',
    requiresQuiz: false,
    xpReward: 600,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-proj1', title: 'Production Project 1 Brief & Rubric', type: 'documentation', url: 'https://skillora.ai/docs/meta-advanced-project-1' }
    ],
    lessonContent: {
      overview: `### Advanced Production Project 1 Brief

#### Business Scenario:
You are the Fractional Chief Marketing Officer (CMO) hired by **"Aura Home Goods"**, a direct-to-consumer e-commerce company with:
- **Average Order Value (AOV):** **$100.00**
- **Contribution Margin:** **30%** (Gross Profit per order: $30.00 after COGS, shipping, pick/pack, and gateway fees).
- **Existing Assets:** 10,000 monthly website visitors, 5,000 past customer records, active Meta Pixel, Conversions API, multi-product catalog, and 12 raw video/image creative assets.
- **Monthly Advertising Budget:** **$15,000.00** ($500/day).

Your mission is to engineer a complete, production-grade Meta advertising growth system.

---

### Required Deliverables Checklist:
1. **Executive Account Architecture:** Diagram the consolidated multi-campaign setup (CBO / ASC Scaling, ABO Creative R&D, Dynamic Retargeting).
2. **Unit Economics & Break-Even Modeling:** Calculate Break-Even ROAS, Target CPA, and Allowable Acquisition Cost based on the 30% contribution margin.
3. **Telemetry & CAPI Deduplication Blueprint:** Specify client/server event payloads, \`event_id\` generation, and EMQ optimization rules.
4. **Prospecting & Exclusion Strategy:** Define Broad, 1%–3% LTV Lookalike, and Interest-based audience setups with strict exclusion controls.
5. **Creative Testing & Production Pipeline:** Detail a weekly 3:2:2 Dynamic Creative Testing matrix across the 5 Levels of Customer Awareness.
6. **Catalog & Dynamic Product Strategy:** Segment product catalog using Custom Labels (Margin, Velocity) and configure dynamic pricing overlays.
7. **3-Stage Sequential Retargeting Funnel:** Detail time-decay retargeting (1–3D, 4–7D, 8–14D) with exact copy and creative deliverables.
8. **Diagnostic Decision Tree & Scaling Guardrails:** Establish Kill, Scale, and Turnaround rules.
9. **30/60/90-Day Growth Roadmap:** Detail phased weekly milestones for scaling account spend from $15,000/mo to $45,000/mo.`,
      analogyHero: 'This production project proves your ability to operate as a senior growth director managing substantial capital with complete financial and technical mastery.',
      objectives: [
        'Engineer an enterprise e-commerce Meta Ads growth system for a $100 AOV / 30% margin brand.',
        'Calculate exact Break-Even ROAS ($1 / 0.30 = 3.33x) and target unit economics.',
        'Deploy Advantage+ Shopping, CAPI deduplication, and 3:2:2 creative testing pipelines.',
        'Build a comprehensive 30/60/90-day scaling roadmap.'
      ],
      estimatedTime: '90 mins',
      syntaxGuide: `Aura Home Goods Financial Baseline:
AOV:                   $100.00
Contribution Margin:   30% ($30.00 Gross Margin per order)
Break-Even ROAS:       1 / 0.30 = 3.33x (333%)
Break-Even CPA:        $30.00
Target CPA:            $22.00 (Target ROAS = $100 / $22 = 4.55x)
Monthly Target Orders: 680 orders ($68,000 revenue at $15k spend)`,
      sections: [
        {
          id: 'sec-meta-adv-proj1-1',
          title: 'Growth Architecture & Financial Modeling',
          difficulty: 'Advanced',
          content: `### Complete Growth System Blueprint

#### 1. Financial Baseline & Unit Economics
- **Break-Even ROAS:** $1 / 0.30 = 3.33\text{x}$. Any campaign operating below 3.33x is losing cash.
- **Target CPA:** $22.00 (Generates $8.00 net contribution profit per order after all expenses).
- **Target ROAS:** $4.55\text{x}$ ($100 / 22 = 4.55$).

#### 2. Account Architecture ($500/day Budget)
- **Campaign 1 (Advantage+ Shopping / CBO Scale - $350/day / 70%):**
  * Targeting: US Broad (Ages 25–55).
  * Existing Customer Cap: 10%.
  * Creatives: Top 6 graduated Post ID winners.
- **Campaign 2 (ABO Creative Testing Sandbox - $100/day / 20%):**
  * Structure: 2 parallel 3:2:2 DCT ad sets ($50/day each) testing 6 fresh hooks weekly.
- **Campaign 3 (Dynamic Catalog Retargeting - $50/day / 10%):**
  * Stage 1: AddToCart (1–3D) dynamic carousel ($30/day).
  * Stage 2: ViewContent (4–7D) customer review video ($20/day).`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'aura-home-goods-growth-system.yaml',
              code: `Aura_Growth_System:
  Monthly_Budget: "$15,000.00 ($500/day)"
  Financial_Targets:
    Breakeven_ROAS: "3.33x"
    Target_CPA: "$22.00"
    Target_ROAS: "4.55x"
  Campaign_Architecture:
    1_ASC_Scaling: "$350/day (10% customer cap)"
    2_ABO_Creative_Testing: "$100/day (3:2:2 DCT)"
    3_Dynamic_Retargeting: "$50/day (1-7D Recency)"`,
              lineByLine: [
                { line: 'Aura_Growth_System:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Monthly_Budget: \"$15,000.00 ($500/day)\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Financial_Targets:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Breakeven_ROAS: \"3.33x\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-proj1-2',
          title: '30/60/90-Day Execution Roadmap',
          difficulty: 'Advanced',
          content: `#### 3. 30/60/90-Day Scaling Schedule
- **Days 1–30 (Foundation):** Clean up CAPI deduplication (>= 8.5 EMQ), launch 3-campaign structure at $500/day baseline, validate first 3 creative winners.
- **Days 31–60 (Vertical & Horizontal Scale):** Increase ASC budget to $800/day, deploy dynamic product price overlays, expand to Canada & UK ($200/day).
- **Days 61–90 (Scale to $1,500/day):** Launch VIP customer retention replenishment campaigns, maintain blended MER >= 3.8x, generate $170,000+ monthly revenue.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'aura-90-day-targets.json',
              code: `{
  "90_day_milestones": {
    "month_1": { "spend": 15000, "revenue": 68000, "mer": 4.53, "orders": 680 },
    "month_2": { "spend": 30000, "revenue": 125000, "mer": 4.16, "orders": 1250 },
    "month_3": { "spend": 45000, "revenue": 175000, "mer": 3.88, "orders": 1750 }
  }
}`,
              lineByLine: [
                { line: '"month_1"', explanation: 'Initial foundation phase establishing $500/day baseline at 4.53x MER.' },
                { line: '"month_2"', explanation: 'Vertical scale phase increasing spend to $1,000/day with geographic expansion.' },
                { line: '"month_3"', explanation: 'Full scale target achieving $175,000 monthly revenue at $1,500/day ad spend.' }
              ]
            },
            {
              language: 'yaml',
              filename: 'aura-retention-replenishment-rules.yaml',
              code: `Aura_VIP_Retention_Automation:
  Trigger_1_Cross_Sell:
    Event: "Purchased Bedding Bundle (Day 30)"
    Ad_Creative: "Matching Organic Linen Pillowcase Add-On ($35.00)"
  Trigger_2_VIP_Early_Access:
    Audience: "LTV >= $250.00 or Orders >= 3"
    Ad_Creative: "Exclusive 48-Hour Preview: Autumn Earth Tones Drop"
  Trigger_3_Winback:
    Condition: "Last purchase 90-180 days ago"
    Ad_Creative: "We miss you + $20 Anniversary Gift Card"`,
              lineByLine: [
                { line: 'Trigger_1_Cross_Sell', explanation: 'Captures high-margin repeat sales at post-purchase day 30.' },
                { line: 'Trigger_2_VIP_Early_Access', explanation: 'Rewards highest-tier cohort with exclusive early drop access.' },
                { line: 'Trigger_3_Winback', explanation: 'Recovers lapsed high-value customers before permanent churn.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'An enterprise growth system links technical CAPI tracking, creative R&D, and strict financial unit economics.',
        'Break-Even ROAS of 3.33x is enforced across all scaling campaigns.',
        'The 30/60/90-day plan outlines a clear trajectory from $15k/mo to $45k/mo ad spend.'
      ],
      summary: 'You have completed Advanced Production Project 1 and are ready for Project 2.',
      practiceExercises: [
        {
          title: 'Project 1 Submission Review',
          instructions: 'Review your complete Aura Home Goods growth blueprint against the 9 required checklist deliverables to verify full commercial and technical compliance.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-16',
    orderIndex: 16,
    title: 'Advanced Production Project 2: Build a Professional Agency Client Strategy',
    description: 'Construct a client-ready Meta Ads media-buying strategy proposal for a high-ticket education company selling a $2,500 course. Detail business diagnosis, lead qualification funnel, CRM feedback loop, CPQL targets, reporting dashboard, and client communication plan.',
    status: 'locked',
    requiresQuiz: false,
    xpReward: 600,
    level: 'advanced',
    resources: [
      { id: 'res-meta-adv-proj2', title: 'Production Project 2 Brief & Proposal Rubric', type: 'documentation', url: 'https://skillora.ai/docs/meta-advanced-project-2' }
    ],
    lessonContent: {
      overview: `### Advanced Production Project 2 Brief

#### Client Scenario:
You are the Principal Strategist at an elite performance marketing agency pitching a comprehensive media-buying engagement to **"Apex Leadership Academy"**, an education company selling a **$2,500.00 high-ticket executive coaching program**.

- **Current Status:** The client is generating cheap $8.00 leads via Facebook Instant Forms, but 90% of leads are unqualified students or job seekers with $0 budget. The sales team is demoralized and closing only 1% of leads.
- **Client Goal:** Generate **High-Intent, Sales-Qualified Leads (SQLs)** who can afford the $2,500 investment, achieve a **15% lead-to-sale close rate**, and scale monthly advertising spend to **$20,000.00**.

---

### Required Deliverables Checklist:
1. **Executive Summary & Business Diagnosis:** Dissect why the current low-cost lead approach is failing and outline the new high-intent strategy.
2. **Lead Qualification Funnel Architecture:** Design a multi-step external landing page application funnel with 4 custom qualifying filters.
3. **Target Economics & CPQL Financial Model:** Calculate Target CPL, Target CPQL, Sales Conversion Assumptions, and projected ROAS at a $2,500 price point.
4. **Audience & Creative Strategy:** Define 3 high-authority creative concepts (Founder Breakdown, Executive Case Study, Industry Myth Buster) and B2B audience targeting.
5. **CRM Closed-Loop Telemetry:** Specify how closed-won sales data in HubSpot is transmitted back to Meta CAPI Offline Conversions.
6. **Executive Client Reporting Dashboard:** Design the weekly KPI report layout (CPQL, Booked Calls, Pipeline Value, CAC).
7. **Optimization Decision Tree & Scaling Protocols:** Define rules for managing CPL, call booking rates, and sales rep pipeline velocity.
8. **Client Communication & Uncertainty Disclosure:** Provide professional disclosures regarding testing timelines, sales team SLA responsibilities, and market volatility.`,
      analogyHero: 'This production project represents the pinnacle of professional agency consulting—delivering a comprehensive, client-ready media buying proposal that commands five-figure monthly retainer fees.',
      objectives: [
        'Diagnose and solve lead quality failure points for a $2,500 high-ticket education offer.',
        'Engineer multi-step qualification funnels routing SQLs to sales calendars.',
        'Build CRM closed-loop offline conversion telemetry via Meta CAPI.',
        'Draft an executive agency proposal and client communication framework.'
      ],
      estimatedTime: '90 mins',
      syntaxGuide: `Apex Leadership Academy Financial Baseline:
Program Tuition:          $2,500.00
Monthly Ad Budget:        $20,000.00
Target Raw CPL:           $40.00 (500 leads/mo)
Target Qualification %:   40% (200 Sales-Qualified Leads / SQLs)
Target CPQL:              $100.00 ($20,000 / 200 SQLs)
Target Sales Close Rate:  15% of SQLs (30 Closed Enrollments)
Projected Gross Revenue:  30 * $2,500 = $75,000.00
Projected ROAS:           $75,000 / $20,000 = 3.75x`,
      sections: [
        {
          id: 'sec-meta-adv-proj2-1',
          title: 'Executive Proposal & Qualification Architecture',
          difficulty: 'Advanced',
          content: `### High-Ticket Lead Gen Proposal Blueprint

#### 1. Strategic Diagnosis
The client's current failure stems from optimizing for **Volume rather than Intent**. Frictionless Instant Forms capture auto-filled personal data from non-buyers. We will replace this with an **Application Funnel** featuring deliberate qualification friction:

#### 2. Multi-Step Qualification Funnel
- **Step 1 (Ad Click):** Navigates to custom long-form sales landing page with founder authority video and client case studies.
- **Step 2 (Application Form):**
  * *Question 1:* "What is your current executive role?" (VP / Director / C-Suite / Founder).
  * *Question 2:* "What is your current company annual revenue?" ($1M - $5M / $5M - $20M / $20M+).
  * *Question 3:* "Are you prepared to invest $2,500 in your leadership development?" (Yes, ready now / Need company reimbursement / Just researching).
- **Step 3 (Automated Routing):**
  * *Qualified Applicants:* Redirected immediately to Calendly booking calendar for a 45-minute strategy consultation.
  * *Unqualified Applicants:* Redirected to free resource library and automated email sequence (zero sales rep calls).`,
          codeSnippets: [
            {
              language: 'yaml',
              filename: 'apex-lead-qualification-blueprint.yaml',
              code: `Apex_Funnel_Blueprint:
  Monthly_Budget: "$20,000.00"
  Offer_Price: "$2,500.00"
  Target_Pipeline_Economics:
    Monthly_Spend: "$20,000.00"
    Raw_Applications: 500 (CPL: $40.00)
    Qualified_SQLs: 200 (CPQL: $100.00 / 40% Qual Rate)
    Completed_Strategy_Calls: 160 (80% Show-up Rate)
    Closed_Enrollments: 30 (18.75% Close Rate on Calls)
    Gross_Revenue: "$75,000.00"
    Campaign_ROAS: "3.75x ($75k / $20k)"`,
              lineByLine: [
                { line: 'Apex_Funnel_Blueprint:', explanation: 'Defines parameter logic and operational settings for this component.' },
                { line: 'Monthly_Budget: \"$20,000.00\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Offer_Price: \"$2,500.00\"', explanation: 'Configures critical unit economic and financial pacing thresholds.' },
                { line: 'Target_Pipeline_Economics:', explanation: 'Defines parameter logic and operational settings for this component.' }
              ]
            }
          ]
        },
        {
          id: 'sec-meta-adv-proj2-2',
          title: 'CRM Telemetry, Reporting & Client Governance',
          difficulty: 'Advanced',
          content: `#### 3. Closed-Loop HubSpot CAPI Integration
When an enrollment is closed in HubSpot, a webhook transmits an **Offline Purchase Event ($2,500)** to Meta CAPI, training the auction algorithm to seek out enterprise executives.

#### 4. Weekly Executive Client Dashboard
- **Tier 1 KPIs:** Total Spend, Sales-Qualified Leads (CPQL), Show-Up Rate, Closed Enrollments, Cash Revenue, Pipeline ROAS.
- **Weekly Communication Protocol:** 15-minute Monday alignment video + live Slack channel with sales leadership.`,
          codeSnippets: [
            {
              language: 'json',
              filename: 'apex-executive-dashboard-schema.json',
              code: `{
  "apex_weekly_kpis": {
    "weekly_spend": 5000.00,
    "raw_leads": 125,
    "cpl": 40.00,
    "qualified_sqls": 50,
    "cpql": 100.00,
    "calls_held": 40,
    "closed_deals": 8,
    "revenue": 20000.00,
    "weekly_roas": 4.00
  }
}`,
              lineByLine: [
                { line: '"weekly_spend": 5000.00', explanation: 'Weekly budget allocation supporting $20,000 monthly scale.' },
                { line: '"qualified_sqls": 50', explanation: '50 sales-qualified applicants per week (40% qualification rate).' },
                { line: '"cpql": 100.00', explanation: 'Cost Per Qualified Lead maintained at exactly $100.00 target.' },
                { line: '"closed_deals": 8', explanation: '8 high-ticket enrollments at $2,500 producing $20,000 cash revenue.' },
                { line: '"weekly_roas": 4.00', explanation: '4.00x blended weekly ROAS validating executive offer economics.' }
              ]
            },
            {
              language: 'yaml',
              filename: 'apex-crm-hubspot-capi-sync.yaml',
              code: `HubSpot_Meta_CAPI_Closed_Loop:
  Step_1_Deal_Stage_Change:
    HubSpot_Trigger: "Deal Stage moved to 'Closed Won - Paid'"
    Deal_Value: "$2,500.00"
  Step_2_Webhook_Payload:
    Event_Name: "Purchase"
    Action_Source: "system_generated"
    Customer_Data:
      email_hash: "sha256(contact.email)"
      phone_hash: "sha256(contact.phone)"
      fbp: "contact.fb_cookie_fbp"
  Step_3_Meta_Optimization:
    Outcome: "Meta machine learning models prioritize similar high-net-worth enterprise executives"`,
              lineByLine: [
                { line: 'Step_1_Deal_Stage_Change', explanation: 'Listens for verified CRM payment confirmation in sales pipeline.' },
                { line: 'Step_2_Webhook_Payload', explanation: 'Transmits hashed PII and browser telemetry back to Meta Conversions API.' },
                { line: 'Step_3_Meta_Optimization', explanation: 'Trains the ad delivery algorithm on true closed cash revenue rather than raw leads.' }
              ]
            }
          ]
        }
      ],
      keyTakeaways: [
        'High-ticket lead generation requires deliberate qualification friction to protect sales team bandwidth.',
        'Connect CRM closed-won milestones back to Meta via Offline Conversions CAPI.',
        'Target a sub-$100 CPQL and 15%+ close rate to generate 3.75x+ ROAS on high-ticket offers.'
      ],
      summary: 'You have completed both Advanced Production Projects and are now ready for the Master Final Assessment.',
      practiceExercises: [
        {
          title: 'Agency Proposal Review',
          instructions: 'Review your complete Apex Leadership Academy proposal against the 8 required checklist deliverables to ensure complete client-ready excellence.'
        }
      ]
    }
  },
  {
    id: 'meta-adv-17',
    orderIndex: 17,
    title: 'Advanced Master Final Assessment: Senior Meta Ads Strategist',
    description: 'Exhaustive 40-question master assessment testing enterprise architecture, full-funnel strategy, auction VCG mechanics, break-even unit economics, advanced creative systems, attribution, MER, catalogs, Advantage+, global expansion, agency governance, and crisis turnaround. Requires 35/40 (87.5%) to pass.',
    status: 'locked',
    requiresQuiz: true,
    xpReward: 1000,
    level: 'advanced',
    passingScore: 35,
    totalQuestions: 40,
    isFinalAssessment: true,
    questions: META_ADVANCED_FINAL_ASSESSMENT,
    resources: []
  }
];
