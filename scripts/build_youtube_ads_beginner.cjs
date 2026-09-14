const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/features/roadmap/data/youtube-ads/youtubeAdsBeginner.data.ts');
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 20 High-Quality Beginner MCQs with balanced distribution (5 A, 5 B, 5 C, 5 D)
const BEGINNER_ASSESSMENT = [
  {
    id: 1,
    topic: 'YouTube Advertising Ecosystem',
    question: 'What is the primary architectural relationship between Google Ads and YouTube advertising?',
    options: [
      'YouTube advertising campaigns are created, budgeted, targeted, and optimized directly within the Google Ads platform and engine.',
      'YouTube ads can only be purchased by contacting YouTube video creators directly through email agreements.',
      'YouTube ads operate on a completely separate, disconnected ad server that shares no conversion tracking with Google Ads.',
      'YouTube ads only support static banner images on mobile applications.'
    ],
    correctAnswer: 0, // A
    explanation: 'YouTube is owned by Google and fully integrated into the Google Ads ecosystem. All video campaigns, audience signals, conversion actions, Smart Bidding algorithms, and billing infrastructure are managed centrally within Google Ads.'
  },
  {
    id: 2,
    topic: 'Channel & Account Architecture',
    question: 'Why is it critical for an advertiser to link their official YouTube channel to their Google Ads account before launching video ads?',
    options: [
      'It automatically gives Google permission to delete videos that perform poorly.',
      'It unlocks video view metrics, earned actions (subscribes, likes, shares), and enables remarketing list creation based on channel interactions.',
      'It is a mandatory requirement to create a Google Ads payment profile.',
      'It prevents competitors from creating Google Ads accounts.'
    ],
    correctAnswer: 1, // B
    explanation: 'Linking a YouTube Channel to Google Ads unlocks essential performance data including earned actions (free subscriber growth, likes, playlist additions from ad viewers) and allows advertisers to build powerful video remarketing audiences.'
  },
  {
    id: 3,
    topic: 'Campaign Objectives',
    question: 'When the primary goal of an e-commerce brand is to generate online sales with automated CPA bidding on YouTube, which Campaign Objective should be chosen?',
    options: [
      'Brand awareness and reach with Target CPM bidding',
      'Product and brand consideration with Maximum CPV bidding',
      'Sales or Leads objective utilizing Video Action Campaigns (VAC)',
      'App promotion with tCPI bidding'
    ],
    correctAnswer: 2, // C
    explanation: 'Choosing the Sales or Leads objective in Google Ads configures Video Action Campaigns (VAC), which automatically leverage Smart Bidding (Maximize Conversions or Target CPA), prominent CTA buttons, sitelink extensions, and product feeds.'
  },
  {
    id: 4,
    topic: 'Skippable In-Stream Mechanics',
    question: 'In standard CPV (Cost-Per-View) bidding for a 60-second Skippable In-Stream ad, when is an advertiser charged for a view?',
    options: [
      'The moment the video ad begins loading on the viewer screen (0.1 seconds)',
      'Only if the viewer clicks through to the website and makes a confirmed purchase',
      'When the viewer watches at least 5 seconds before hitting the Skip button',
      'When the viewer watches at least 30 seconds (or the full duration if shorter) or interacts with the ad (clicks CTA)'
    ],
    correctAnswer: 3, // D
    explanation: 'Under CPV billing for Skippable In-Stream ads, an impression counts as a paid view only when a viewer watches at least 30 seconds (or the entire ad if shorter than 30s) or performs an explicit interaction such as clicking a CTA button or companion banner.'
  },
  {
    id: 5,
    topic: 'Non-Skippable & Bumper Ad Formats',
    question: 'What is the maximum duration and primary pricing model for YouTube Bumper Ads?',
    options: [
      'Exactly 6 seconds maximum duration, charged on a Target CPM (Cost-Per-Thousand impressions) model',
      'Up to 15 seconds, charged on a Cost-Per-Click (CPC) model',
      'Up to 30 seconds, charged on a Cost-Per-Acquisition (CPA) model',
      'Up to 60 seconds, charged on a Cost-Per-View (CPV) model'
    ],
    correctAnswer: 0, // A
    explanation: 'Bumper ads are concise, non-skippable video ads up to 6 seconds in length designed for high-frequency brand awareness and reach. They are billed on a Target CPM (Cost-Per-Thousand impressions) basis.'
  },
  {
    id: 6,
    topic: 'Creative Hook Engineering',
    question: 'What is the primary function of the "Hook" in the first 3 to 5 seconds of a YouTube Skippable In-Stream ad?',
    options: [
      'To list all corporate executives and legal disclaimers before the pitch',
      'To arrest viewer attention, qualify the ideal customer, and prevent accidental drop-off by unmotivated viewers',
      'To convince Google policy reviewers that the ad is not spam',
      'To force the YouTube mobile app into horizontal landscape mode'
    ],
    correctAnswer: 1, // B
    explanation: 'The first 3-5 seconds (before the Skip button appears at 5 seconds) must immediately hook the target viewer with an intriguing question, pattern interrupt, or compelling visual while filtering out unqualified users.'
  },
  {
    id: 7,
    topic: 'Demographic & Affinity Targeting',
    question: 'How do Affinity Audiences differ from In-Market Audiences in Google Ads for YouTube?',
    options: [
      'Affinity audiences only target desktop computer users, whereas In-market audiences target smartphones.',
      'Affinity audiences reflect broad lifestyle interests and long-term habits, while In-Market audiences identify users actively researching or intending to purchase a specific product or service.',
      'Affinity audiences are built exclusively from your company email subscriber lists.',
      'In-Market audiences are free to target, while Affinity audiences cost extra per click.'
    ],
    correctAnswer: 1, // B
    explanation: 'Affinity segments categorize users based on their established lifestyle passions and habits (e.g., "Avid Gamers", "Health & Fitness Buffs"), whereas In-Market segments pinpoint users currently researching or comparing products with imminent intent to buy.'
  },
  {
    id: 8,
    topic: 'Custom Segments on YouTube',
    question: 'How does creating a Custom Segment based on "People who searched for any of these terms on Google" give YouTube advertisers an immense intent advantage?',
    options: [
      'It allows advertisers to show text ads inside Google Docs for free.',
      'It turns Google search intent into high-impact YouTube video targeting by serving video ads to people who recently typed your target keywords into Google Search.',
      'It guarantees a #1 organic ranking on Google Search within 24 hours.',
      'It forces users to subscribe to your YouTube channel when they perform a search.'
    ],
    correctAnswer: 1, // B
    explanation: 'Google Search intent is the highest quality behavioral signal on the web. Search-term Custom Segments allow advertisers to serve video ads to users who recently searched for specific competitor names, high-intent keywords, or solution terms.'
  },
  {
    id: 9,
    topic: 'Placement Targeting & Exclusions',
    question: 'If an advertiser selects specific YouTube Channel Placements for their campaign, what is the risk if the target placement list is too narrow?',
    options: [
      'The campaign may suffer from severe delivery constraint, resulting in 0 impressions or extremely high CPM bids due to lack of available inventory.',
      'Google Ads will ban the ad account for placement spamming.',
      'The video ad will play simultaneously on all channels in the country.',
      'The advertiser will be billed double the standard price per click.'
    ],
    correctAnswer: 0, // A
    explanation: 'Overly narrow placement targeting (e.g. only 2 small channels) frequently starves the delivery algorithm of sufficient auction opportunities, causing campaigns to stall with zero spend and zero impressions.'
  },
  {
    id: 10,
    topic: 'Core YouTube Metrics (View Rate)',
    question: 'How is the View Rate percentage calculated in YouTube Ads reporting?',
    options: [
      'Clicks divided by Total Impressions',
      'Total Conversions divided by Total Paid Views',
      'Total Paid Views divided by Total Impressions (Views / Impressions * 100)',
      'Total Budget spent divided by Cost Per View'
    ],
    correctAnswer: 2, // C
    explanation: 'View Rate is calculated as (Paid Views / Impressions) * 100. A high View Rate (typically > 25-35% on skippable ads) indicates strong creative resonance and effective hook framing.'
  },
  {
    id: 11,
    topic: 'Bidding Strategies (CPV vs tCPA)',
    question: 'Which bidding strategy allows the advertiser to set the maximum dollar amount they are willing to pay for each individual 30-second view or interaction?',
    options: [
      'Target CPA (Cost Per Acquisition)',
      'Maximize Conversions',
      'Target ROAS (Return on Ad Spend)',
      'Maximum CPV (Cost Per View)'
    ],
    correctAnswer: 3, // D
    explanation: 'Maximum CPV bidding lets advertisers set the ceiling amount they will pay per qualifying video view. The actual CPV billed in the auction will typically be equal to or lower than the max bid.'
  },
  {
    id: 12,
    topic: 'Conversion Tracking Setup',
    question: 'What is an "Engaged-view conversion" (EVC) in YouTube Ads measurement?',
    options: [
      'A conversion that occurs after a user watches at least 10 seconds of a skippable video ad (or watches to completion if < 10s) and then converts on the website within the engagement window (default 3 days).',
      'A conversion that only happens if the user leaves a 5-star review on Google Maps.',
      'When a user clicks on an ad within 1 second of loading.',
      'A conversion counted when a viewer shares the video on Twitter.'
    ],
    correctAnswer: 0, // A
    explanation: 'Engaged-View Conversions (EVCs) measure when a user watches at least 10 seconds of a skippable in-stream ad (demonstrating genuine engagement) and subsequently completes a conversion action within the designated window (typically 3 days).'
  },
  {
    id: 13,
    topic: 'YouTube Shorts Ad Fundamentals',
    question: 'What is the optimal video aspect ratio and creative pacing for YouTube Shorts video ads?',
    options: [
      '16:9 Landscape ratio with a slow 15-second cinematic fade-in',
      '9:16 Vertical format with immediate dynamic hook, punchy visual cuts, and native mobile audio/voiceover',
      '4:3 Square ratio with black letterboxing on top and bottom',
      '21:9 Ultra-widescreen format without sound'
    ],
    correctAnswer: 1, // B
    explanation: 'YouTube Shorts ads must be formatted vertically in 9:16 (1080x1920). They require ultra-fast pacing, clear captions, authentic mobile-first visual framing, and immediate engagement within the first 1-2 seconds.'
  },
  {
    id: 14,
    topic: 'Video Action Campaign (VAC) Assets',
    question: 'In a Video Action Campaign, what creative element appears alongside the main video on desktop screens to provide an enduring click opportunity even after the video completes?',
    options: [
      'A Companion Banner (300x60 image) displayed at the top right of the watch page',
      'A pop-up survey asking the viewer for their zip code',
      'An automated voice memo sent to the user email',
      'A permanent watermark stamped across the viewer monitor'
    ],
    correctAnswer: 0, // A
    explanation: 'Companion Banners (300x60 px) appear in the top right desktop sidebar during and after video ad playback, providing a persistent clickable banner that drives traffic directly to the landing page.'
  },
  {
    id: 15,
    topic: 'Troubleshooting Low Delivery',
    question: 'If a newly launched YouTube Ads campaign has spent $0.00 and generated 0 impressions after 48 hours, what is the most common diagnostic cause?',
    options: [
      'The YouTube server is undergoing a global 7-day shutdown.',
      'The target audience is overly restrictive, target CPA/CPV bid is set far below market auction clearing rates, or conversion tracking is missing.',
      'The advertiser has more than 5 subscribers on their YouTube channel.',
      'The video was uploaded in 4K resolution instead of 720p.'
    ],
    correctAnswer: 1, // B
    explanation: 'Zero impression delivery is almost always caused by overly tight targeting combinations (e.g. stacking narrow keywords + tiny placements), bids set too low for auction entry, strict budget limits, or pending policy approvals.'
  },
  {
    id: 16,
    topic: 'Ad Policy & Compliance',
    question: 'Which of the following practices is strictly prohibited by Google Ads video advertising policies and will lead to ad disapproval?',
    options: [
      'Using clear subtitles for accessibility and silent playback',
      'Featuring customer testimonials with authentic disclaimers',
      'Misleading clickbait claims, sensationalist guarantees ("Lose 40 lbs in 2 days"), or obscured branding',
      'Including a call-to-action button linking to an HTTPS secured website'
    ],
    correctAnswer: 2, // C
    explanation: 'Google Ads strictly prohibits deceptive representations, unsubstantiated health/wealth claims, clickbait framing, and hidden branding. Transparency and authentic claims are required for policy approval.'
  },
  {
    id: 17,
    topic: 'Audience Exclusions Hygiene',
    question: 'Why should advertisers routinely apply negative placement exclusions (such as children channels and gaming streams) when running B2B or high-ticket lead campaigns on YouTube?',
    options: [
      'To prevent ad spend from being wasted on accidental clicks from toddlers or distracted gamers who have zero intent to buy enterprise products.',
      'Because Google penalizes advertisers who show ads on educational channels.',
      'Because YouTube does not allow ads on mobile devices.',
      'To force the Google algorithm to double your daily budget.'
    ],
    correctAnswer: 0, // A
    explanation: 'Unchecked placement delivery on broad networks often channels budget toward nursery rhyme, children animation, and mobile gaming channels where children repeatedly click ads without commercial intent.'
  },
  {
    id: 18,
    topic: 'ABCD Creative Framework',
    question: 'What do the letters in Google official "ABCD" YouTube creative framework stand for?',
    options: [
      'Audio, Balance, Color, Distribution',
      'Attract (Hook), Brand (Introduce early), Connect (Emotion/Story), Direct (Clear Call to Action)',
      'Algorithm, Bidding, Campaign, Demographics',
      'Analytics, Budgets, Conversions, Deliverables'
    ],
    correctAnswer: 1, // B
    explanation: 'Google ABCD creative principles for effective video ads represent: Attract (capture attention fast), Brand (introduce brand early and naturally), Connect (engage through storytelling or relatable problem), and Direct (explicitly state what action to take).'
  },
  {
    id: 19,
    topic: 'Pacing & Daily Budgets',
    question: 'In Google Ads, how much can the platform spend on a single day relative to your set Daily Budget to capitalize on high-converting auction traffic?',
    options: [
      'It will never spend even 1 cent over the daily budget under any circumstances.',
      'Up to 2x (200%) of the daily budget on high-traffic days, while never exceeding the monthly cap (30.4 * daily budget).',
      'Up to 10x the daily budget without warning.',
      'Exactly 50% of the daily budget, saving the rest for weekends.'
    ],
    correctAnswer: 1, // B
    explanation: 'Google Ads uses flexible daily pacing: it can spend up to 2x your daily budget on days with high conversion potential, but will not exceed your monthly budget limit (average 30.4 days multiplied by your daily budget).'
  },
  {
    id: 20,
    topic: 'Beginner Capstone Strategy',
    question: 'When structuring a launch plan for a new direct-to-consumer product on YouTube, what is the recommended starter audience structure?',
    options: [
      'Targeting every person in the world with no demographic filters and a $1 daily budget',
      'Targeting only 1 specific YouTube video URL with a $5,000 daily budget',
      'Testing 2-3 distinct ad groups isolating Custom Search Intent segments, In-Market high-intent buyers, and Competitor Search Segments with dedicated creative hooks',
      'Using text-only ads on the YouTube homepage without video'
    ],
    correctAnswer: 2, // C
    explanation: 'Best-practice YouTube launch architecture isolates high-intent audience hypotheses (Custom Search Intent keywords, relevant In-Market categories, and competitor search segments) across structured ad groups with tailored hooks.'
  }
];

// 12 Comprehensive Theory Modules
const BEGINNER_MODULES = [
  {
    id: 'yt-beg-01',
    title: '1. Introduction to YouTube Advertising',
    description: 'Master the fundamental mechanics of the YouTube advertising ecosystem, Google Ads integration, advertiser-viewer-creator dynamics, and direct-response performance value.',
    level: 'beginner',
    orderIndex: 1,
    duration: '25 min',
    isProject: false,
    isFinalAssessment: false,
    tags: ['Ecosystem', 'Google Ads', 'Media Buying', 'Foundations'],
    lessonContent: {
      overview: 'YouTube is the second largest search engine and the largest streaming video platform on earth, with over 2.5 billion active monthly users streaming over 1 billion hours of video daily. Unlike static social platforms where media is consumed passively, YouTube users arrive with active intent—to learn, solve problems, be entertained, and research purchasing decisions. This module establishes the structural foundation of YouTube advertising within the Google Ads infrastructure.',
      objectives: [
        'Understand the core architecture of the YouTube advertising ecosystem and its unified integration with Google Ads.',
        'Analyze the economic triangle between Advertisers, Viewers, Creators, and the Google auction engine.',
        'Evaluate when YouTube Ads represent the highest ROI channel versus Meta, TikTok, and Google Search.'
      ],
      sections: [
        {
          id: 'yt-beg-01-s1',
          title: 'The Modern YouTube Advertising Landscape & Auction Dynamics',
          content: `### The Global Video Powerhouse
YouTube represents a unique hybrid of **Search Intent** and **High-Engagement Visual Storytelling**. When an advertiser enters the YouTube auction, they are competing for attention across multiple device surfaces:
1. **Connected TV (CTV / Living Room Screens)**: Fast-growing surface accounting for over 45% of watch time in major markets.
2. **Mobile Devices (Smartphones & Tablets)**: Primary channel for YouTube Shorts, vertical scrolling, and instant click-to-lead interactions.
3. **Desktop & Laptop Computers**: High-conversion environment with prominent companion banners, sitelinks, and multitasking viewers.

\`\`\`
+-------------------------------------------------------------------------------+
|                       GOOGLE ADS AUCTION ENGINE (YOUTUBE)                     |
|                                                                               |
|  [ Advertiser Intent ] ---> [ Smart Bidding / Signals ] ---> [ Video Stream ] |
|  - Target CPA / CPV         - Google Search Queries          - Skippable 16:9 |
|  - Custom Segments          - App & Browsing Activity        - Shorts 9:16    |
|  - Video Creative Assets    - Device / Time / Geography      - CTV Bumper     |
+-------------------------------------------------------------------------------+
\`\`\`

#### Key Platform Statistics for Media Buyers:
- **Watch Time**: Over 1,000,000,000 hours of video viewed per day.
- **Search Intent**: Over 70% of YouTube viewers report making a purchase after seeing a brand on YouTube.
- **Auction Engine**: Powered by Google Ads, allowing advertisers to bridge Google Search queries directly into video ad targeting.`,
          codeSnippets: [
            {
              language: 'json',
              code: `// YouTube Media Buying Surface Matrix Configuration
{
  "platform": "YouTube via Google Ads",
  "auctionType": "Real-Time Bidding (RTB) Second-Price Modified",
  "supportedDevices": ["Mobile", "Tablet", "Desktop", "Connected TV"],
  "intentSignals": {
    "searchTerms": "Google.com and YouTube search history",
    "videoInteractions": "Channel subscribes, video views, likes",
    "inMarketData": "Active purchase research across Google properties"
  },
  "primaryBiddingModels": ["Target CPA", "Maximize Conversions", "Max CPV", "Target CPM"]
}`,
              explanation: 'This schema demonstrates the core data signals ingested by the Google Ads engine when pricing and serving YouTube video impressions.',
              lineByLineBreakdown: [
                'Line 2-3: Confirms the auction runs inside Google Ads on real-time bidding infrastructure.',
                'Line 4: Highlights multi-device distribution including Mobile and Connected TV.',
                'Line 5-9: Lists high-value Google intent signals that feed the auction algorithm.'
              ]
            }
          ],
          miniPractice: {
            question: 'What makes YouTube advertising fundamentally unique compared to Meta (Facebook/Instagram) feed advertising?',
            options: [
              'YouTube combines Google Search intent data with long-form and short-form video storytelling.',
              'YouTube ads are completely free if viewers click skip within 5 seconds.',
              'YouTube only permits 6-second video ads.',
              'YouTube does not support conversion tracking.'
            ],
            correctAnswer: 0,
            explanation: 'YouTube uniquely bridges Google Search query intent with immersive video creative, letting advertisers reach people based on what they actively searched on Google.'
          }
        },
        {
          id: 'yt-beg-01-s2',
          title: 'The Advertiser-Viewer-Creator Economic Triangle',
          content: `### Understanding the Value Exchange
Every YouTube ad impression involves three distinct stakeholders whose incentives must align:

| Stakeholder | Primary Incentive | Platform Value Exchange |
| :--- | :--- | :--- |
| **The Viewer** | Wants high-quality entertainment or educational solutions with minimal friction. | Receives free content in exchange for viewing relevant, engaging ads. |
| **The Creator** | Wants revenue share (AdSense / YPP 55% split) to fund production. | Monetizes their audience by hosting Google auction ad inventory. |
| **The Advertiser** | Wants profitable leads, customer acquisition, or brand lift at predictable CPA/ROAS. | Pays Google for targeted attention and direct-response clicks. |

\`\`\`
                [ GOOGLE ADS PLATFORM ]
                      /         \\
           Ad Spend  /           \\ 55% AdSense Split
                    v             v
            [ ADVERTISER ] <---> [ CREATOR ]
                    \\             /
          Engaging   \\           / High Quality
          Offers      v         v  Content
                      [ VIEWER ]
\`\`\`

#### Why Advertiser Creative Matters:
When an advertiser produces boring, irrelevant, or spammy ads, viewers immediately hit **Skip**, click away, or deploy ad blockers. When creative is compelling, empathetic, and problem-centric, the viewer willingly watches, learns, and converts.`,
          codeSnippets: [
            {
              language: 'yaml',
              code: `# Campaign Economic Alignment Audit
campaign_configuration:
  channel_alignment: "Direct Response E-Commerce"
  audience_relevance_score: "High"
  expected_skip_rate: "60-70%"
  target_view_rate: ">= 30%"
  revenue_split_model:
    creator_share: "55% (Standard YouTube Partner Program)"
    google_share: "45%"
  compliance_check:
    landing_page_ssl: true
    unsubstantiated_claims: false
    clear_brand_intro: true`,
              explanation: 'YAML specification outlining the benchmark alignment metrics for a healthy direct-response campaign.',
              lineByLineBreakdown: [
                'Line 4-6: Establishes baseline creative metrics (targeting >= 30% view rate).',
                'Line 7-9: Documents the standard 55/45 YouTube Partner revenue split.',
                'Line 10-13: Verifies essential policy and landing page compliance.'
              ]
            }
          ],
          miniPractice: {
            question: 'What percentage of ad revenue from long-form video ads does YouTube distribute to monetized creators in the YouTube Partner Program?',
            options: [
              '10%',
              '55%',
              '90%',
              '0%'
            ],
            correctAnswer: 1,
            explanation: 'Under the standard YouTube Partner Program (YPP) agreement, monetized channel creators receive 55% of the net ad revenue generated on their long-form video content.'
          }
        },
        {
          id: 'yt-beg-01-s3',
          title: 'Strategic Comparison: YouTube Ads vs Meta, TikTok & Google Search',
          content: `### Channel Decision Matrix for Media Buyers

Choosing the right channel depends on the stage of the funnel, product complexity, and user intent:

\`\`\`
+-------------------------------------------------------------------------------------+
| INTENT CAPTURE (High)                                                               |
|   [ Google Search ] -> Captures immediate keywords (High CPC, finite search volume) |
|                                                                                     |
| INTENT + STORYTELLING (Medium-High)                                                 |
|   [ YouTube Ads ]   -> Pre-conditions buyers with demonstration & search signals     |
|                                                                                     |
| DEMAND GENERATION (Medium-Low)                                                      |
|   [ Meta Ads ]      -> Visual scroll interruption on lifestyle feeds                |
|   [ TikTok Ads ]    -> Fast trend-driven organic-style entertainment                |
+-------------------------------------------------------------------------------------+
\`\`\`

#### Strategic Strengths of YouTube Ads:
1. **Complex Solution Demonstration**: 60 to 180 seconds of audio/visual video allows in-depth software demos, medical explanations, and physical product teardowns that fail in 5-second image feeds.
2. **Authority & Trust**: Long-form video builds immense perceived credibility compared to ephemeral social posts.
3. **Intent-Grounded Discovery**: Target people based on what they search on Google and what videos they consume.`,
          codeSnippets: [
            {
              language: 'typescript',
              code: `// Media Channel Allocator Helper Logic
interface ChannelStrategy {
  channel: 'Google Search' | 'YouTube Ads' | 'Meta Ads' | 'TikTok Ads';
  optimalFunnelStage: 'Top' | 'Middle' | 'Bottom' | 'Full-Funnel';
  avgWatchTimeSeconds: number;
  intentLevel: 'Very High' | 'High' | 'Medium' | 'Low';
}

export const YOUTUBE_CHANNEL_PROFILE: ChannelStrategy = {
  channel: 'YouTube Ads',
  optimalFunnelStage: 'Full-Funnel',
  avgWatchTimeSeconds: 45,
  intentLevel: 'High'
};`,
              explanation: 'TypeScript model defining channel positioning characteristics for multi-channel growth systems.',
              lineByLineBreakdown: [
                'Line 2-7: Defines the interface for marketing channel evaluation.',
                'Line 9-14: Explicitly defines YouTube Ads as a Full-Funnel high-intent video channel.'
              ]
            }
          ],
          miniPractice: {
            question: 'Which scenario is best suited for YouTube Ads over Google Search text ads?',
            options: [
              'An emergency plumber needed within 15 minutes',
              'A complex B2B SaaS software or innovative consumer product that requires visual demonstration and education',
              'A user searching for the exact website domain name of their bank',
              'A local gas station listing'
            ],
            correctAnswer: 1,
            explanation: 'Complex, high-value, or innovative products requiring visual demonstration, credibility building, and educational storytelling thrive on YouTube video ads.'
          }
        }
      ],
      practiceExercises: [
        {
          id: 'yt-beg-01-ex1',
          title: 'YouTube Channel Strategy Brief',
          description: 'Define the channel fit, target device surfaces, and competitive value proposition for a direct-response YouTube campaign.',
          starterCode: `// Define campaign strategic parameters
const strategyBrief = {
  businessName: "SaaS Workflow Optimizer",
  coreProblem: "Marketing teams waste 10 hours/week on manual reporting",
  primarySurfaces: ["Desktop", "Mobile"],
  channelJustification: ""
};`,
          instructions: [
            'Fill in the channelJustification field explaining why YouTube video ads are superior to static text ads for this SaaS product.',
            'Identify at least two Google search intent signals to leverage.'
          ],
          hints: ['Focus on visual UI demonstration and Google Search Custom Intent segments.'],
          validationChecklist: [
            'Justifies video demonstration for complex workflow software.',
            'Mentions Google intent signals.'
          ]
        }
      ],
      keyTakeaways: [
        'YouTube Ads run entirely through Google Ads, unlocking search-intent data and Smart Bidding algorithms.',
        'The platform supports diverse surfaces from mobile Shorts to living room Connected TVs.',
        'YouTube is ideal for complex products that require visual proof, storytelling, and high authority.'
      ]
    }
  },
  {
    id: 'yt-beg-02',
    title: '2. YouTube Ads Account and Channel Architecture',
    description: 'Configure a professional Google Ads account hierarchy, link official YouTube channels, establish conversion tracking foundations, and enforce naming conventions.',
    level: 'beginner',
    orderIndex: 2,
    duration: '30 min',
    isProject: false,
    isFinalAssessment: false,
    tags: ['Account Setup', 'Channel Linking', 'Google Ads MCC', 'Architecture'],
    lessonContent: {
      overview: 'A successful YouTube advertising system starts with robust administrative infrastructure. Navigating Google Ads Manager, Manager Accounts (MCC), billing profiles, YouTube Channel linking, and conversion action foundations prevents tracking drop-off, account suspensions, and organizational chaos as spend scales.',
      objectives: [
        'Set up and organize a Google Ads Manager Account (MCC) and link official YouTube channel assets.',
        'Establish proper administrative access permissions, 2FA security protocols, and payment profiles.',
        'Implement structured account naming conventions and tracking prerequisites.'
      ],
      sections: [
        {
          id: 'yt-beg-02-s1',
          title: 'Google Ads Account Structure & Manager (MCC) Setup',
          content: `### Hierarchical Infrastructure
Enterprise media buying requires separating client accounts, billing profiles, and user permissions using Google Ads Manager Accounts (formerly MCC - My Client Center).

\`\`\`
+-------------------------------------------------------------------------------+
|                      GOOGLE ADS MANAGER ACCOUNT (MCC)                         |
|                                                                               |
|   +--------------------------+           +--------------------------+         |
|   |  Ad Account: Brand Alpha |           |  Ad Account: Brand Beta  |         |
|   |  (ID: 123-456-7890)      |           |  (ID: 987-654-3210)      |         |
|   +--------------------------+           +--------------------------+         |
|               |                                       |                       |
|   Linked YouTube Channel:                 Linked YouTube Channel:             |
|   "Brand Alpha Official"                  "Brand Beta Media"                  |
+-------------------------------------------------------------------------------+
\`\`\`

#### Security Best Practices:
1. **Mandatory 2-Step Verification (2FA)**: Required for all administrators to prevent unauthorized account takeovers.
2. **Standard vs Administrative Access**: Grant external contractors or media buyers "Standard" access rather than "Administrative" access to protect billing ownership.
3. **Dedicated Billing Profiles**: Separate payment methods to prevent billing holds from pausing multiple client accounts simultaneously.`,
          codeSnippets: [
            {
              language: 'javascript',
              code: `// Account Hierarchy & Asset Manifest
const googleAdsInfrastructure = {
  mccId: "555-123-4444",
  organizationName: "Performance Growth Agency LLC",
  clientAccounts: [
    {
      accountId: "101-202-3030",
      accountName: "SaaS Growth - Direct US",
      currency: "USD",
      timeZone: "America/New_York",
      linkedChannel: {
        channelId: "UC_exampleChannel123",
        permissions: ["View Metrics", "Remarketing", "Engagement Data"]
      }
    }
  ]
};`,
              explanation: 'Structure documenting the relationship between parent MCCs, sub-accounts, currencies, and linked YouTube channels.',
              lineByLineBreakdown: [
                'Line 2-4: Identifies top-level MCC authority.',
                'Line 5-15: Encapsulates individual ad account configurations, billing currency, and linked channel permissions.'
              ]
            }
          ],
          miniPractice: {
            question: 'What access level should be assigned to an external freelance media buyer who needs to create and manage campaigns but should not manage account ownership or billing profiles?',
            options: [
              'Administrative Access',
              'Standard Access',
              'Email-Only Access',
              'Read-Only Access'
            ],
            correctAnswer: 1,
            explanation: 'Standard access allows users to view, edit, and manage campaigns, audiences, and reports without granting permissions to add/remove users or alter core administrative ownership.'
          }
        },
        {
          id: 'yt-beg-02-s2',
          title: 'Linking YouTube Channels to Google Ads & Permission Scopes',
          content: `### Step-by-Step Channel Linking Workflow
Linking your YouTube channel to Google Ads provides critical bi-directional telemetry:

1. In Google Ads, navigate to **Tools & Settings** > **Linked Accounts** > **YouTube**.
2. Click **+ Link YouTube Channel** and paste your public channel URL.
3. Select whether you own the channel or someone else owns it (triggers an authorization email to the channel owner).
4. In YouTube Studio (**Settings** > **Channel** > **Advanced Settings** > **Link Account**), approve the link request.

\`\`\`
[ Google Ads ] --( Link Request )--> [ YouTube Studio: Channel Settings ]
                                                    |
                                             ( Approve Link )
                                                    v
[ Unlocked: View Metrics + Earned Actions + Remarketing Audiences ]
\`\`\`

#### The 3 Permissions Unlocked:
- **View Counts**: Tracks organic vs paid views accurately.
- **Remarketing**: Build audiences of users who viewed, liked, commented, or shared your videos.
- **Engagement (Earned Actions)**: Measure free downstream actions (e.g. user saw an ad, then watched 3 organic videos and subscribed).`,
          codeSnippets: [
            {
              language: 'html',
              code: `<!-- Conceptual Channel Linking Verification Payload -->
<meta name="google-ads-linked-channel" content="UC_ABC123XYZ" />
<!--
  Channel Link Status: ACTIVE
  Enabled Capabilities:
    1. Video View Telemetry
    2. Earned Subscriber Tracking
    3. First-Party Video Remarketing Lists
-->`,
              explanation: 'Verification schema showing active bi-directional linking capabilities between Google Ads and YouTube.',
              lineByLineBreakdown: [
                'Line 2: Identifies the linked channel ID.',
                'Line 4-8: Confirms telemetry and remarketing capabilities are enabled.'
              ]
            }
          ],
          miniPractice: {
            question: 'What are "Earned Actions" in YouTube Ads reporting after a channel is linked?',
            options: [
              'Paid clicks that cost double the regular price',
              'Free downstream actions (like organic subscriptions, playlist adds, or extra video views) generated after a user viewed your paid ad',
              'Refunds issued by Google when an ad is skipped',
              'AdSense earnings sent directly to the advertiser'
            ],
            correctAnswer: 1,
            explanation: 'Earned actions measure the free ripple effect of your paid ads: when viewers watch your ad, visit your channel, and subsequently subscribe or watch other videos without additional ad spend.'
          }
        },
        {
          id: 'yt-beg-02-s3',
          title: 'Campaign Naming Conventions & Account Hygiene',
          content: `### Standardized Naming Convention Taxonomy
Disorganized naming creates costly reporting mistakes. Adopt a rigid delimiter-based naming convention across all campaigns:

\`\`\`
[Geo]_[FunnelStage]_[Objective]_[AudienceType]_[CreativeAngle]_[BidStrategy]
\`\`\`

#### Example Naming Conventions:
- **Campaign**: \`US_TOF_VAC_CustomSearch-Competitors_PainPointHook_tCPA$45\`
- **Ad Group**: \`CustomIntent_Top5SaaSCompetitors_BroadExcl\`
- **Ad Asset**: \`Vid01_ProblemAgitateSolve_1080x1920_V1\`

\`\`\`
+-------------------------------------------------------------------------------+
|                       SAMPLE CAMPAIGN HIERARCHY TREE                          |
|                                                                               |
|  Campaign: US_TOF_VAC_CustomIntent_tCPA$40                                    |
|    |                                                                          |
|    +-- Ad Group 1: CustomSearch_CompetitorKeywords                            |
|    |     +-- Ad A: HookA_FrustratedWithSpreadsheets (16:9)                    |
|    |     +-- Ad B: HookB_AutomateIn5Minutes (16:9)                            |
|    |                                                                          |
|    +-- Ad Group 2: InMarket_BusinessProductivitySoftware                      |
|          +-- Ad A: HookA_FrustratedWithSpreadsheets (16:9)                    |
|          +-- Ad C: HookC_CEOTestimonialProof (16:9)                           |
+-------------------------------------------------------------------------------+
\`\`\``,
          codeSnippets: [
            {
              language: 'typescript',
              code: `// Automated Campaign Naming Formatter
export function generateCampaignName(params: {
  geo: string;
  funnel: 'TOF' | 'MOF' | 'BOF';
  format: 'VAC' | 'InStream' | 'Shorts' | 'Bumper';
  audience: string;
  bidStrategy: string;
}): string {
  return \`\${params.geo}_\${params.funnel}_\${params.format}_\${params.audience}_\${params.bidStrategy}\`;
}

// Example usage:
const name = generateCampaignName({
  geo: 'US',
  funnel: 'TOF',
  format: 'VAC',
  audience: 'SearchIntent-MarketingSaaS',
  bidStrategy: 'tCPA$35'
});
console.log(name); // "US_TOF_VAC_SearchIntent-MarketingSaaS_tCPA$35"`,
              explanation: 'TypeScript helper function to standardize delimiter-separated campaign names across an entire marketing organization.',
              lineByLineBreakdown: [
                'Line 2-8: Type-safe interface ensuring all mandatory taxonomy elements are provided.',
                'Line 9-11: Joins elements with clean underscore delimiters.',
                'Line 14-20: Produces consistent, easily filterable campaign titles.'
              ]
            }
          ],
          miniPractice: {
            question: 'Why is a standardized campaign naming convention essential when scaling YouTube ad spend?',
            options: [
              'Because Google Ads rejects campaigns that do not use underscores',
              'To enable automated filtering, rapid Looker Studio dashboard reporting, and clear attribution analysis across multiple team members',
              'To prevent users from skipping video ads',
              'To reduce the Cost-Per-Click by 50%'
            ],
            correctAnswer: 1,
            explanation: 'Standardized naming conventions allow media buyers and data analytics teams to instantly filter, slice, and aggregate performance metrics in Looker Studio or Google Ads scripts.'
          }
        }
      ],
      practiceExercises: [
        {
          id: 'yt-beg-02-ex1',
          title: 'Account & Channel Architecture Setup',
          description: 'Construct a complete account naming taxonomy and verify channel linking steps for a new B2B client.',
          starterCode: `// Define client setup checklist
const clientSetup = {
  clientName: "Apex Logistics",
  mccLinked: true,
  youtubeChannelUrl: "https://www.youtube.com/@ApexLogisticsHQ",
  namingTaxonomy: {
    geo: "US",
    funnel: "TOF",
    format: "VAC",
    audience: "InMarket-SupplyChain",
    bid: "MaxConv"
  }
};`,
          instructions: [
            'Generate the standardized campaign name using the taxonomy provided.',
            'Confirm the 3 critical telemetry permissions unlocked by linking the channel.'
          ],
          hints: ['Format: [Geo]_[Funnel]_[Format]_[Audience]_[Bid]'],
          validationChecklist: [
            'Creates formatted campaign name.',
            'Identifies view telemetry, earned actions, and remarketing capabilities.'
          ]
        }
      ],
      keyTakeaways: [
        'Use Google Ads Manager Accounts (MCC) with 2FA to govern client accounts securely.',
        'Linking your YouTube Channel unlocks earned actions metrics and first-party remarketing audiences.',
        'Enforce structured naming conventions to enable clean reporting and attribution.'
      ]
    }
  },
  {
    id: 'yt-beg-03',
    title: '3. YouTube Ads Campaign Objectives & Marketing Goals',
    description: 'Evaluate Google Ads campaign objectives—Sales, Leads, Website Traffic, Brand Awareness, and Product Consideration—and align them with business KPIs.',
    level: 'beginner',
    orderIndex: 3,
    duration: '25 min',
    isProject: false,
    isFinalAssessment: false,
    tags: ['Objectives', 'Sales', 'Leads', 'Awareness', 'Smart Bidding'],
    lessonContent: {
      overview: 'Selecting the correct Campaign Objective in Google Ads tells the machine learning algorithm what conversion signals to optimize for. Choosing the wrong objective (e.g. picking Brand Awareness when you want e-commerce sales) causes the algorithm to prioritize cheap, passive impressions over high-intent buyers.',
      objectives: [
        'Compare the 5 primary Google Ads campaign objectives available for YouTube video ads.',
        'Analyze how objective selection influences ad format availability, bidding strategies, and delivery algorithms.',
        'Match specific business KPIs (CPA, ROAS, View Rate, CPM) to the appropriate objective.'
      ],
      sections: [
        {
          id: 'yt-beg-03-s1',
          title: 'The Spectrum of Google Ads Campaign Objectives',
          content: `### Objective Alignment Overview
When creating a new Video campaign, Google Ads presents several objective pathways:

\`\`\`
+-------------------------------------------------------------------------------+
|                      GOOGLE ADS OBJECTIVE SELECTOR                            |
|                                                                               |
|  [ Sales ]             [ Leads ]             [ Website Traffic ]              |
|  - Drive checkout      - Form fills          - High volume site visits        |
|  - Target CPA / ROAS   - tCPA / Max Conv     - Maximize Clicks / tCPA         |
|  - Video Action (VAC)  - Video Action (VAC)  - Video Action (VAC)             |
|                                                                               |
|  [ Product & Brand Consideration ]           [ Brand Awareness & Reach ]      |
|  - Influence consideration & intent          - Maximum impressions & reach    |
|  - Maximum CPV Bidding                       - Target CPM Bidding             |
|  - Skippable In-Stream / In-Feed             - Bumpers / Non-Skippable        |
+-------------------------------------------------------------------------------+
\`\`\`

#### Key Takeaways by Business Model:
1. **Direct-to-Consumer E-Commerce**: Select **Sales** with product feeds connected to drive bottom-line revenue.
2. **B2B / High-Ticket Services**: Select **Leads** to drive qualified form submissions and booked strategy calls.
3. **Enterprise Brand Launches**: Select **Brand awareness and reach** to saturate target market demographics with 6s Bumpers and 15s Non-Skippable formats.`,
          codeSnippets: [
            {
              language: 'json',
              code: `// Objective to Bidding Strategy Mapping
{
  "directResponse": {
    "recommendedObjectives": ["Sales", "Leads", "Website traffic"],
    "supportedCampaignType": "Video Action Campaign (VAC)",
    "biddingStrategies": ["Maximize Conversions", "Target CPA", "Target ROAS"],
    "primaryKPIs": ["CPA", "ROAS", "Conversion Rate", "Cost Per Lead"]
  },
  "brandBuilding": {
    "recommendedObjectives": ["Brand awareness and reach", "Product and brand consideration"],
    "supportedCampaignType": "Custom Video Campaign",
    "biddingStrategies": ["Target CPM", "Maximum CPV"],
    "primaryKPIs": ["Unique Reach", "Impressions", "View Rate", "Ad Recall Lift"]
  }
}`,
              explanation: 'JSON configuration demonstrating how campaign objectives dictate available bidding strategies and core KPIs.',
              lineByLineBreakdown: [
                'Line 2-7: Configures direct response parameters focused on CPA and ROAS.',
                'Line 8-13: Configures brand awareness parameters focused on CPM and Reach.'
              ]
            }
          ],
          miniPractice: {
            question: 'An e-commerce shoe company wants to generate purchases at a Target CPA of $30. Which objective should they select?',
            options: [
              'Brand awareness and reach',
              'Product and brand consideration',
              'Sales',
              'App promotion'
            ],
            correctAnswer: 2,
            explanation: 'The Sales objective activates Video Action Campaigns and enables Smart Bidding algorithms configured to acquire customers at or below the desired Target CPA.'
          }
        },
        {
          id: 'yt-beg-03-s2',
          title: 'Direct Response vs Brand Lift Objectives',
          content: `### Comparing Algorithmic Delivery Priorities

\`\`\`
+----------------------------------------------------------------------------------+
| DIRECT RESPONSE OBJECTIVES (Sales/Leads)                                         |
| -> Algorithm searches for users with high probability of clicking and converting |
| -> Higher CPMs, but generates measurable bottom-funnel transactions              |
|                                                                                  |
| BRAND AWARENESS OBJECTIVES (Reach/CPM)                                           |
| -> Algorithm searches for the cheapest available valid impressions               |
| -> Lower CPMs, high volume reach, but low direct click-through rate              |
+----------------------------------------------------------------------------------+
\`\`\`

#### The Danger of Objective Mismatch:
If a media buyer wants online sales but selects "Brand Awareness", the Google Ads algorithm will deliberately deliver ads to users who rarely click or purchase, because those users are the cheapest to show impressions to! Always align objective with true commercial goals.`,
          codeSnippets: [
            {
              language: 'typescript',
              code: `// Algorithm Optimization Predictor
export function validateObjectiveMatch(goal: 'Purchases' | 'Leads' | 'AdRecall', chosenObjective: string): boolean {
  if ((goal === 'Purchases' || goal === 'Leads') && (chosenObjective === 'Sales' || chosenObjective === 'Leads')) {
    return true; // Correct alignment
  }
  if (goal === 'AdRecall' && chosenObjective === 'Brand awareness and reach') {
    return true; // Correct alignment
  }
  return false; // Mismatched objective danger!
}`,
              explanation: 'Validation logic ensuring media buyers avoid algorithmic delivery mismatches.',
              lineByLineBreakdown: [
                'Line 2-6: Validates direct-response goals match Sales or Leads objectives.',
                'Line 7-9: Validates awareness goals match Brand Awareness.',
                'Line 10: Flags dangerous mismatches that waste budget.'
              ]
            }
          ],
          miniPractice: {
            question: 'What happens if you select "Brand awareness and reach" with Target CPM bidding when your real goal is to get newsletter signups?',
            options: [
              'Google will automatically change your bidding to Target CPA',
              'The algorithm will optimize for the cheapest impressions, delivering ads to viewers who rarely click or convert',
              'Your ad account will be banned',
              'Conversions will increase by 400%'
            ],
            correctAnswer: 1,
            explanation: 'Brand awareness algorithms seek maximum reach at lowest CPM, intentionally targeting passive viewers rather than high-converting clickers.'
          }
        },
        {
          id: 'yt-beg-03-s3',
          title: 'Mapping Funnel Stages to Campaign Objectives',
          content: `### Full-Funnel Objective Architecture
A mature YouTube advertising account runs a multi-tier objective structure to nurture prospects from stranger to repeat customer:

| Funnel Stage | Recommended Objective | Campaign Format | Target Metric |
| :--- | :--- | :--- | :--- |
| **Top of Funnel (TOF)** | Brand Awareness / Custom Intent | Skippable In-Stream / Shorts | View Rate > 30%, CPM < $15 |
| **Middle of Funnel (MOF)** | Website Traffic / Consideration | In-Feed & In-Stream | CTR > 1.5%, CPC < $1.20 |
| **Bottom of Funnel (BOF)** | Sales / Leads | Video Action (VAC) with Sitelinks | Target CPA, ROAS > 2.5x |

\`\`\`
       [ TOP OF FUNNEL: Awareness (CPM) ]
                     |
       [ MID FUNNEL: Consideration (CPV / CPC) ]
                     |
       [ BOTTOM FUNNEL: Sales & Leads (tCPA / ROAS) ]
\`\`\``,
          codeSnippets: [
            {
              language: 'yaml',
              code: `# Full-Funnel YouTube Campaign Distribution Plan
funnel_budget_allocation:
  total_monthly_budget: 10000
  tiers:
    top_of_funnel:
      objective: "Brand awareness and reach"
      allocation_pct: 20
      budget_usd: 2000
      bidding: "Target CPM"
    middle_of_funnel:
      objective: "Website traffic"
      allocation_pct: 30
      budget_usd: 3000
      bidding: "Maximize Conversions"
    bottom_of_funnel:
      objective: "Sales (VAC)"
      allocation_pct: 50
      budget_usd: 5000
      bidding: "Target CPA ($35)"`,
              explanation: 'YAML structure illustrating balanced budget allocation across a 3-tier full-funnel YouTube ads strategy.',
              lineByLineBreakdown: [
                'Line 2-3: Establishes total budget of $10,000/mo.',
                'Line 4-8: Allocates 20% to Top of Funnel discovery.',
                'Line 9-13: Allocates 30% to Mid-Funnel consideration.',
                'Line 14-18: Allocates 50% to Bottom of Funnel direct conversion.'
              ]
            }
          ],
          miniPractice: {
            question: 'In a balanced $10,000/month full-funnel budget, which funnel tier typically receives the largest budget allocation for a direct-to-consumer brand?',
            options: [
              'Top of Funnel Awareness (100%)',
              'Bottom of Funnel Direct Sales & Leads (50-70%)',
              'Offline billboards',
              'Zero budget allocated to bottom funnel'
            ],
            correctAnswer: 1,
            explanation: 'For direct-response and D2C brands, the majority of spend (50-70%) is focused on Bottom of Funnel Video Action Campaigns driving measurable sales and leads.'
          }
        }
      ],
      practiceExercises: [
        {
          id: 'yt-beg-03-ex1',
          title: 'Objective Selection & KPI Blueprint',
          description: 'Analyze a client business model and select the exact Google Ads objective and primary KPI.',
          starterCode: `// Configure campaign objective match
const clientBrief = {
  businessType: "Online Coding Bootcamp",
  pricePoint: 1500, // USD
  primaryAction: "Book a 15-minute admissions interview",
  selectedObjective: "",
  primaryKPI: ""
};`,
          instructions: [
            'Set selectedObjective to the appropriate Google Ads objective for booking calls.',
            'Set primaryKPI to the key performance metric to monitor.'
          ],
          hints: ['Think: Leads objective with Target CPA optimization.'],
          validationChecklist: [
            'Selects Leads objective.',
            'Identifies Target CPA / Cost Per Booked Call as primary KPI.'
          ]
        }
      ],
      keyTakeaways: [
        'Campaign objectives dictate what algorithmic user behaviors Google optimizes for.',
        'Use Sales and Leads for direct-response Video Action Campaigns with Target CPA/ROAS.',
        'Use Brand Awareness & Reach for CPM-driven scale and mass demographic penetration.'
      ]
    }
  },
  {
    id: 'yt-beg-04',
    title: '4. Core YouTube Ad Formats',
    description: 'Master Skippable In-Stream, Non-Skippable In-Stream, In-Feed Video Ads, Bumper Ads, YouTube Shorts, and Mastheads.',
    level: 'beginner',
    orderIndex: 4,
    duration: '35 min',
    isProject: false,
    isFinalAssessment: false,
    tags: ['Ad Formats', 'In-Stream', 'Bumpers', 'Shorts', 'In-Feed'],
    lessonContent: {
      overview: 'YouTube offers a versatile suite of ad formats tailored for different user experiences and campaign goals. Choosing the right format—from vertical 9:16 Shorts to 6-second non-skippable Bumpers and skippable long-form in-stream video—is decisive in maximizing ROAS and creative engagement.',
      objectives: [
        'Analyze the technical specs, billing rules, and use-cases for all 6 major YouTube ad formats.',
        'Understand how Skippable In-Stream ads allow advertisers to qualify buyers before the 5-second skip mark.',
        'Implement vertical YouTube Shorts ads optimized for mobile-first scrolling behavior.'
      ],
      sections: [
        {
          id: 'yt-beg-04-s1',
          title: 'Skippable vs Non-Skippable In-Stream Video Ads',
          content: `### In-Stream Format Comparison

\`\`\`
+--------------------------------------------------------------------------------+
| SKIPPABLE IN-STREAM ADS                                                        |
| - Plays before, during, or after videos                                        |
| - Viewer can skip after 5 seconds                                              |
| - Length: 12 seconds to 3+ minutes (Recommended: 45-90s for Direct Response)   |
| - Billed on: CPV (Cost Per 30s View/Click) or Target CPA (VAC)                 |
|                                                                                |
| NON-SKIPPABLE IN-STREAM ADS                                                    |
| - Plays before, during, or after videos                                        |
| - Viewer MUST watch entire ad (no skip button)                                 |
| - Length: 15 seconds max (20s in select regions)                               |
| - Billed on: Target CPM (Impressions)                                          |
+--------------------------------------------------------------------------------+
\`\`\`

#### The "Free 5 Seconds" Advantage in Skippable Ads:
In skippable in-stream ads billed on CPV, if a viewer skips at second 4 or 5, **the advertiser pays $0.00**! This makes skippable ads uniquely cost-effective for qualifying leads: you can call out your target audience immediately ("If you are a Shopify store owner..."), allowing non-qualifying viewers to skip for free.`,
          codeSnippets: [
            {
              language: 'json',
              code: `// Technical Specifications for In-Stream Formats
{
  "skippableInStream": {
    "minDuration": "12 seconds",
    "recommendedDuration": "45 - 120 seconds",
    "aspectRatios": ["16:9 (1920x1080)", "1:1 (1080x1080)", "9:16 (1080x1920)"],
    "skipButtonAppearsAt": "5 seconds",
    "billingTrigger": "30 seconds watched or user interaction (click)"
  },
  "nonSkippableInStream": {
    "maxDuration": "15 seconds (strict)",
    "aspectRatios": ["16:9 (1920x1080)"],
    "skipButton": "None (Forced View)",
    "billingTrigger": "Per 1,000 impressions (CPM)"
  }
}`,
              explanation: 'Comparison matrix of technical specifications and billing triggers for in-stream formats.',
              lineByLineBreakdown: [
                'Line 2-8: Details Skippable In-Stream specifications and 30s billing trigger.',
                'Line 9-14: Details Non-Skippable In-Stream 15s max constraint and CPM model.'
              ]
            }
          ],
          miniPractice: {
            question: 'If a viewer watches 4 seconds of a Skippable In-Stream ad on a CPV bidding campaign and clicks "Skip Ads", how much is the advertiser charged?',
            options: [
              'The full maximum CPV bid',
              'Exactly $0.00 (Free Impression)',
              'A penalty fee of $1.00',
              'Half of the daily budget'
            ],
            correctAnswer: 1,
            explanation: 'Under CPV billing, views skipped before 30 seconds (or before the end of the video if shorter than 30s) without user interaction incur zero charge.'
          }
        },
        {
          id: 'yt-beg-04-s2',
          title: 'In-Feed Video Ads & 6-Second Bumper Ads',
          content: `### Discovery & High-Frequency Formats

1. **In-Feed Video Ads (formerly Video Discovery)**:
   - Appear in YouTube search results, next to related videos, and on the YouTube mobile homepage.
   - Consist of a thumbnail image, headline, and description text.
   - User clicks the thumbnail to watch the video on the channel watch page.
   - Billed on CPV when the user clicks the thumbnail to initiate playback.

2. **Bumper Ads (6 Seconds Non-Skippable)**:
   - Ultra-short, forced-view ads playing before or during content.
   - Best used for single, unforgettable brand messages or frequency-capping reminders in remarketing.
   - Billed on Target CPM.

\`\`\`
+-------------------------------------------------------------------------------+
| IN-FEED AD PLACEMENT (Search Results)   | BUMPER AD PLACEMENT (Pre-Roll)      |
| [ Thumbnail ]  Headline text goes here  | [ Video Player: 6s Non-Skippable ]  |
|                Channel name & views     | "Ad will end in 4s..."              |
+-------------------------------------------------------------------------------+
\`\`\``,
          codeSnippets: [
            {
              language: 'yaml',
              code: `# Format Selection Matrix
use_case_scenarios:
  product_demo_direct_response:
    format: "Video Action Campaign (Skippable In-Stream)"
    recommended_length: "60 - 90s"
  brand_tagline_frequency_reinforcement:
    format: "Bumper Ads"
    recommended_length: "6s"
  long_form_educational_authority:
    format: "In-Feed Video Ads"
    recommended_length: "5 - 15 minutes"`,
              explanation: 'YAML decision tree matching business use cases to optimal YouTube ad formats.',
              lineByLineBreakdown: [
                'Line 2-4: Recommends 60-90s Skippable VAC for direct response.',
                'Line 5-7: Recommends 6s Bumpers for high-frequency brand recall.',
                'Line 8-10: Recommends In-Feed for long-form authority content.'
              ]
            }
          ],
          miniPractice: {
            question: 'What is the maximum allowed video length for a YouTube Bumper Ad?',
            options: [
              '6 seconds',
              '15 seconds',
              '30 seconds',
              '60 seconds'
            ],
            correctAnswer: 0,
            explanation: 'Bumper ads must be strictly 6 seconds or less and cannot be skipped by viewers.'
          }
        },
        {
          id: 'yt-beg-04-s3',
          title: 'YouTube Shorts Ads & Video Action Campaigns (VAC)',
          content: `### Modern Performance Formats

\`\`\`
+-------------------------------------------------------------------------------+
| YOUTUBE SHORTS ADS                                                            |
| - Vertical 9:16 aspect ratio (1080x1920)                                      |
| - Interspersed seamlessly in the Shorts vertical swipe feed                   |
| - High mobile CTR with sticky bottom CTA banner                               |
| - Requires immediate, fast-paced hook within 1.5 seconds                      |
|                                                                               |
| VIDEO ACTION CAMPAIGNS (VAC)                                                  |
| - Multi-format responsive ad unit: automatically scales across In-Stream,     |
|   Shorts, and Google Video Partners                                           |
| - Includes clickable Headline, Long Headline, CTA button, and Sitelinks       |
| - Can attach a Google Merchant Center product feed for direct checkout        |
+-------------------------------------------------------------------------------+
\`\`\`

#### Key Video Action Campaign Features:
- **Responsive Format Serving**: Google automatically renders your ad in 16:9 on desktop and 9:16 on Shorts depending on where the user is browsing.
- **Interactive Extension Overlays**: Sitelinks, lead forms, and product carousels appear over the video to reduce purchase friction.`,
          codeSnippets: [
            {
              language: 'typescript',
              code: `// Video Action Campaign (VAC) Asset Bundle Specification
export interface VideoActionCampaignAssets {
  videoUrls: string[]; // Minimum 1 landscape (16:9) + 1 vertical (9:16)
  headline: string;    // Max 32 characters
  longHeadline: string;// Max 90 characters
  description: string; // Max 70 characters
  callToAction: 'Shop now' | 'Learn more' | 'Sign up' | 'Get quote' | 'Book now';
  finalUrl: string;
  sitelinkIds?: string[];
  productFeedConnected?: boolean;
}`,
              explanation: 'TypeScript data structure representing complete asset requirements for modern Video Action Campaigns.',
              lineByLineBreakdown: [
                'Line 3: Requires both 16:9 landscape and 9:16 vertical video assets.',
                'Line 4-6: Enforces strict character limits for headlines and descriptions.',
                'Line 7-10: Configures direct-response CTA overlays and extension links.'
              ]
            }
          ],
          miniPractice: {
            question: 'Why should advertisers always provide both 16:9 landscape and 9:16 vertical video assets when creating a Video Action Campaign?',
            options: [
              'Because Google Ads will automatically cancel any campaign with only 1 video',
              'To allow Google machine learning to seamlessly serve your ad across both standard desktop/CTV watch pages (16:9) and mobile YouTube Shorts feeds (9:16)',
              'To make the video play in 3D',
              'Because vertical video is banned on desktop'
            ],
            correctAnswer: 1,
            explanation: 'Supplying both 16:9 and 9:16 assets allows the campaign to enter all available auctions—both horizontal watch pages and vertical Shorts feeds—maximizing reach and conversion volume.'
          }
        }
      ],
      practiceExercises: [
        {
          id: 'yt-beg-04-ex1',
          title: 'Format Selection & Spec Matrix',
          description: 'Design a multi-format ad delivery plan matching creative lengths and aspect ratios to campaign goals.',
          starterCode: `// Multi-format creative setup
const creativePlan = {
  directResponseOffer: {
    format: "Video Action Campaign",
    aspectRatios: ["16:9", "9:16"],
    targetDurationSeconds: 75,
    ctaButton: "Learn more"
  },
  brandRetargetingBumper: {
    format: "Bumper Ad",
    aspectRatios: ["16:9"],
    targetDurationSeconds: 6
  }
};`,
          instructions: [
            'Verify that the direct response offer includes both 16:9 and 9:16 aspect ratios.',
            'Confirm the Bumper ad duration does not exceed 6 seconds.'
          ],
          hints: ['VAC requires multi-orientation assets; Bumpers strictly 6s.'],
          validationChecklist: [
            'Configures landscape and vertical assets.',
            'Enforces 6s limit on Bumper ads.'
          ]
        }
      ],
      keyTakeaways: [
        'Skippable in-stream ads offer the "free 5-second filter" to qualify ideal buyers.',
        'Non-skippable in-stream (15s) and Bumpers (6s) excel at high-frequency brand saturation.',
        'Video Action Campaigns combine multi-ratio assets (16:9 and 9:16) with interactive CTAs to drive direct conversions.'
      ]
    }
  },
  {
    id: 'yt-beg-05',
    title: '5. YouTube Video Creative Fundamentals & Hook Engineering',
    description: 'Master the ABCD creative framework, first 3-5 second hook mechanics, pattern interrupts, direct-response script structures, and mobile-first video styling.',
    level: 'beginner',
    orderIndex: 5,
    duration: '35 min',
    isProject: false,
    isFinalAssessment: false,
    tags: ['Creative Strategy', 'Hooks', 'ABCD Framework', 'Scriptwriting'],
    lessonContent: {
      overview: 'In YouTube advertising, creative is the ultimate variable for ROAS. Even the most sophisticated audience targeting and Smart Bidding algorithms cannot save a boring, generic video ad. This module breaks down the anatomy of high-converting direct-response video creative, hook psychology, and scripting frameworks.',
      objectives: [
        'Implement Google official ABCD (Attract, Brand, Connect, Direct) creative framework.',
        'Engineer compelling 3-5 second visual and audio hooks that arrest attention and qualify the viewer.',
        'Write high-converting direct-response scripts using the Problem-Agitate-Solve (PAS) and Hook-Story-Offer structures.'
      ],
      sections: [
        {
          id: 'yt-beg-05-s1',
          title: 'The ABCD Creative Framework Decoded',
          content: `### Google Research-Backed Framework
Based on machine-learning analysis of over 10,000 top-performing YouTube ads, Google established the **ABCD Framework** for driving sales and brand lift:

\`\`\`
+-------------------------------------------------------------------------------+
|                       GOOGLE ABCD CREATIVE BLUEPRINT                          |
|                                                                               |
|  [ A: ATTRACT ]   -> Hook attention in first 5 seconds with vibrant visuals,  |
|                      surprising action, human faces, and audio energy.        |
|                                                                               |
|  [ B: BRAND ]     -> Introduce brand name, logo, or product naturally within  |
|                      the first 5-8 seconds (audio & visual integration).      |
|                                                                               |
|  [ C: CONNECT ]   -> Resonate emotionally through relatable pain points,      |
|                      authentic storytelling, or crisp product demonstration.  |
|                                                                               |
|  [ D: DIRECT ]    -> Explicitly tell the viewer what to do next with visual   |
|                      arrows, verbal CTAs, and on-screen discount codes.       |
+-------------------------------------------------------------------------------+
\`\`\`

#### Statistical Impact of ABCD:
- **+30% Lift in Short-Term Sales**: Ads adhering to all 4 principles drive significantly higher conversion rates.
- **+17% Lift in Brand Recall**: Early branding prevents viewers from remembering the entertaining premise while forgetting the company name.`,
          codeSnippets: [
            {
              language: 'yaml',
              code: `# ABCD Creative Scorecard
creative_audit:
  ad_title: "Automate Your E-Commerce Accounting in 60 Seconds"
  attract_score: 9 # Strong visual opening: person tearing up paper spreadsheets
  brand_score: 10  # Logo on screen at 0:03, spoken brand name at 0:05
  connect_score: 8 # Relatable tax season stress story with clear UI demo
  direct_score: 9  # Audible CTA: "Click the link below to claim your free 14-day trial"
  total_abcd_rating: "Pass (36/40)"`,
              explanation: 'Audit scorecard evaluating video creative against Google ABCD performance criteria.',
              lineByLineBreakdown: [
                'Line 3-6: Grades each letter of the ABCD framework on a 1-10 scale.',
                'Line 7: Computes overall creative viability score.'
              ]
            }
          ],
          miniPractice: {
            question: 'According to the ABCD framework, when should the brand or product name be introduced in a YouTube video ad?',
            options: [
              'Only in the final 3 seconds of a 2-minute video',
              'Never, to keep the ad mysterious',
              'Within the first 5 to 8 seconds using both audio and visual elements',
              'Only in the video description text'
            ],
            correctAnswer: 2,
            explanation: 'Early branding (within the first 5-8 seconds) ensures that even viewers who skip after 10-15 seconds retain brand recall and recognition.'
          }
        },
        {
          id: 'yt-beg-05-s2',
          title: 'The First 5 Seconds: Hook Engineering & Pattern Interrupts',
          content: `### Anatomy of a High-Impact Hook
The 5 seconds before the Skip button appears represent the highest stakes in digital advertising.

\`\`\`
+-------------------------------------------------------------------------------+
|                       5-SECOND HOOK TIMELINE ARCHITECTURE                     |
|                                                                               |
|  0:00 - 0:02: PATTERN INTERRUPT                                              |
|  -> Bizarre visual, shocking statement, or direct callout                    |
|     (e.g., "Stop wasting 4 hours every Monday on manual reports...")         |
|                                                                               |
|  0:02 - 0:04: AUDIENCE QUALIFICATION & PROBLEM STATEMENT                     |
|  -> Specifically filter for your target customer                             |
|     (e.g., "If you run an e-commerce brand doing over $50k/month...")         |
|                                                                               |
|  0:04 - 0:05: INTRIGUE / VALUE PROMISE                                       |
|  -> Tease the solution before they can click skip                            |
|     (e.g., "...here is the exact 3-step automation system we built.")        |
+-------------------------------------------------------------------------------+
\`\`\`

#### 4 Proven Hook Categories:
1. **The Call-Out Hook**: *"If you are a freelance graphic designer struggling to find clients..."*
2. **The Contrarian Hook**: *"Everything you have been told about Facebook Ads in 2026 is dead wrong."*
3. **The Demonstration Hook**: Camera immediately zooms in on physical product solving an impossible problem.
4. **The Question Hook**: *"Why do 90% of Shopify store owners lose money on their first product launch?"*`,
          codeSnippets: [
            {
              language: 'markdown',
              code: `### Script Hook Template: The Direct Pain-Point Callout

**Visual (0:00 - 0:03)**: Extreme close-up of a laptop screen displaying a terrifying red Excel error message. Actor slams hand on desk in frustration.
**Audio / Voiceover**: "If you're still manually copying Stripe invoices into QuickBooks every Friday afternoon..."
**On-Screen Text**: "Stop Manual Bookkeeping 🛑"
**Visual (0:03 - 0:05)**: Actor turns to camera holding up a smartphone showing 1-click automated reconciliation.
**Audio**: "...this single automation will save you 15 hours every month. Watch how."`,
              explanation: 'Script snippet illustrating synchronization between visual pattern interrupt, spoken audio callout, and on-screen text.',
              lineByLineBreakdown: [
                'Line 3: High-energy visual pattern interrupt.',
                'Line 4-5: Audio specifically calls out the pain point and target workflow.',
                'Line 6-7: Transitions into value proposition before skip button.'
              ]
            }
          ],
          miniPractice: {
            question: 'What is the primary benefit of qualifying your target audience directly in the first 5 seconds of a skippable YouTube ad?',
            options: [
              'It encourages irrelevant viewers to skip early for free while captivating genuine prospective buyers',
              'It forces the video to load faster on mobile networks',
              'It prevents YouTube from showing ads on television screens',
              'It makes the video automatically rank #1 on organic search'
            ],
            correctAnswer: 0,
            explanation: 'Calling out the exact audience ensures uninterested viewers skip before 30 seconds (costing the advertiser $0), while qualified buyers stay engaged.'
          }
        },
        {
          id: 'yt-beg-05-s3',
          title: 'Direct-Response Scriptwriting: PAS & Hook-Story-Offer',
          content: `### Proven Scripting Frameworks

#### 1. Problem - Agitate - Solve (PAS) Structure:
- **Problem (0:00 - 0:10)**: Identify the specific painful bottleneck.
- **Agitate (0:10 - 0:30)**: Highlight the compounding hidden costs, lost revenue, and daily stress of ignoring the problem.
- **Solve (0:30 - 0:60)**: Introduce your product/service as the definitive, friction-free solution with proof.
- **Call to Action (0:60 - 0:75)**: Direct them to click the link to claim a demo, discount, or trial.

#### 2. Hook - Story - Offer Structure:
- **Hook (0:00 - 0:05)**: Grab attention and establish relevance.
- **Story (0:05 - 0:45)**: Relatable case study or origin story overcoming the exact obstacle.
- **Offer (0:45 - 0:70)**: Clear breakdown of the offer, guarantee, bonuses, and risk-reversal.

\`\`\`
+-------------------------------------------------------------------------------+
|                    PAS SCRIPT TIMELINE (75 SECONDS TOTAL)                     |
|                                                                               |
| [ 0:00-0:10 ] Problem: Manual Inventory Errors Cause Lost Sales               |
| [ 0:10-0:30 ] Agitate: 22% of Customers Never Return After an Out-of-Stock    |
| [ 0:30-0:55 ] Solve: Real-time Multi-Warehouse Sync in 2 Clicks               |
| [ 0:55-1:15 ] CTA: Click Below for Free 30-Day Guided Onboarding             |
+-------------------------------------------------------------------------------+
\`\`\``,
          codeSnippets: [
            {
              language: 'typescript',
              code: `// Video Script Architecture Model
export interface VideoAdScript {
  structure: 'PAS' | 'Hook-Story-Offer';
  totalDurationSeconds: number;
  sections: {
    name: string;
    startSecond: number;
    endSecond: number;
    visualAction: string;
    audioVoiceover: string;
    onScreenGraphics: string;
  }[];
}`,
              explanation: 'TypeScript data model for organizing structured video ad production scripts.',
              lineByLineBreakdown: [
                'Line 2-4: Defines framework type and duration bounds.',
                'Line 5-12: Breaks script into timed blocks with synchronized visual, audio, and graphics.'
              ]
            }
          ],
          miniPractice: {
            question: 'In the Problem-Agitate-Solve (PAS) scripting formula, what is the role of the "Agitate" phase?',
            options: [
              'To ask the viewer for their credit card immediately',
              'To amplify the emotional and financial cost of leaving the problem unsolved, building urgency for the solution',
              'To play relaxing elevator music for 30 seconds',
              'To list legal terms and conditions'
            ],
            correctAnswer: 1,
            explanation: 'The Agitate phase heightens the viewer awareness of the consequences of inaction, making the subsequent product solution feel indispensable.'
          }
        }
      ],
      practiceExercises: [
        {
          id: 'yt-beg-05-ex1',
          title: 'Direct-Response Script Draft',
          description: 'Draft a 60-second direct-response script using the PAS framework and ABCD guidelines.',
          starterCode: `// 60-Second PAS Script Outline
const videoScript = {
  hook0to5s: "Still spending 10 hours a week creating manual client invoices?",
  earlyBranding5to8s: "With InvoiceGenius...",
  agitation8to25s: "One missed payment ruins your monthly cash flow...",
  solution25to45s: "Our AI auto-bills and follows up automatically...",
  callToAction45to60s: "Click the button below to get your first 3 months 50% off."
};`,
          instructions: [
            'Verify early branding appears within the first 8 seconds.',
            'Confirm the CTA gives clear directional instructions.'
          ],
          hints: ['Check that visual and audio instructions are synchronized.'],
          validationChecklist: [
            'Includes hook, early brand, agitation, solution, and CTA.',
            'Adheres to ABCD principles.'
          ]
        }
      ],
      keyTakeaways: [
        'Creative is the primary lever of performance in YouTube video advertising.',
        'Follow Google ABCD framework: Attract, Brand early, Connect emotionally, and Direct clearly.',
        'Qualify your ideal customer in the first 5 seconds to leverage free skips on unmotivated viewers.'
      ]
    }
  },
  {
    id: 'yt-beg-06',
    title: '6. Audience Targeting Basics',
    description: 'Master Demographic filters, Affinity audiences, In-Market purchase intent, Custom Segments, Your Data (First-Party) lists, and Life Events.',
    level: 'beginner',
    orderIndex: 6,
    duration: '30 min',
    isProject: false,
    isFinalAssessment: false,
    tags: ['Audience Targeting', 'In-Market', 'Affinity', 'Custom Segments', 'Demographics'],
    lessonContent: {
      overview: 'Google holds the world richest behavioral and intent data. On YouTube, advertisers can combine broad demographic filters with precise lifestyle affinities, real-time in-market purchase intent, search-term custom segments, and first-party customer lists to target prospects at every stage of the buying cycle.',
      objectives: [
        'Differentiate between Affinity, In-Market, Custom Segments, and First-Party data audiences.',
        'Configure Demographic targeting (Age, Gender, Parental Status, Household Income) accurately.',
        'Understand the difference between Audience "Targeting" vs "Observation" modes.'
      ],
      sections: [
        {
          id: 'yt-beg-06-s1',
          title: 'Google Audience Ecosystem & Segmentation Taxonomy',
          content: `### The 4 Core Audience Categories

\`\`\`
+-------------------------------------------------------------------------------+
|                       GOOGLE AUDIENCE SEGMENTATION TAXONOMY                   |
|                                                                               |
|  1. DEMOGRAPHICS                                                              |
|     - Age (18-24, 25-34, 35-44, 45-54, 55-64, 65+)                            |
|     - Gender (Male, Female, Unknown)                                          |
|     - Parental Status (Parent, Not a Parent, Unknown)                         |
|     - Household Income (Top 10%, 11-20%, 21-30%, 31-40%, 41-50%, Lower 50%)   |
|                                                                               |
|  2. AFFINITY SEGMENTS                                                         |
|     - Long-term lifestyle passions, habits & interests                        |
|     - Examples: "Technophiles", "Avid Investors", "Fitness Enthusiasts"       |
|                                                                               |
|  3. IN-MARKET SEGMENTS                                                        |
|     - Active research & immediate buying intent based on search/browse history|
|     - Examples: "In-Market for Business Software", "In-Market for SUVs"       |
|                                                                               |
|  4. CUSTOM SEGMENTS                                                           |
|     - High-intent custom lists built from Google search terms, URLs & Apps   |
+-------------------------------------------------------------------------------+
\`\`\`

#### Household Income (HHI) Nuance:
Household income targeting is primarily available in select countries (e.g., United States, Australia, New Zealand). For high-ticket luxury or B2B offers, excluding the "Lower 50%" can drastically reduce unqualified leads.`,
          codeSnippets: [
            {
              language: 'json',
              code: `// Demographic & In-Market Audience Configuration
{
  "targetAudience": {
    "demographics": {
      "ageRanges": ["AGE_RANGE_25_34", "AGE_RANGE_35_44", "AGE_RANGE_45_54"],
      "genders": ["GENDER_MALE", "GENDER_FEMALE"],
      "parentalStatus": ["PARENTAL_STATUS_ALL"],
      "householdIncome": ["INCOME_TOP_10", "INCOME_11_20", "INCOME_21_30"]
    },
    "inMarketSegments": [
      "Enterprise Resource Planning Software",
      "Accounting & Financial Software"
    ],
    "affinitySegments": [
      "Business Professionals",
      "Technophiles"
    ]
  }
}`,
              explanation: 'JSON representation of an enterprise B2B audience targeting configuration.',
              lineByLineBreakdown: [
                'Line 3-8: Constrains demographic ages to 25-54 and top 30% household income.',
                'Line 9-12: Attaches high-intent In-Market business software segments.'
              ]
            }
          ],
          miniPractice: {
            question: 'Which audience segment type represents users who are actively researching products and comparing prices with imminent intent to buy?',
            options: [
              'Affinity Audiences',
              'In-Market Audiences',
              'Demographic Age Group 18-24',
              'Topic: Entertainment'
            ],
            correctAnswer: 1,
            explanation: 'In-Market audiences group users whose recent Google searches, clicks, and page visits indicate they are actively shopping for a product or service category.'
          }
        },
        {
          id: 'yt-beg-06-s2',
          title: 'Custom Segments: Unlocking Google Search Intent on YouTube',
          content: `### The Most Powerful Audience in Paid Media
**Custom Segments** allow advertisers to create proprietary audience lists based on:

1. **Google Search Queries**: People who searched for any of these specific terms on Google.com (e.g., your competitor brand names, software category keywords).
2. **Competitor URLs**: People who browse websites similar to specific URLs (e.g. competitor landing pages).
3. **App Usage**: People who use specific mobile applications.

\`\`\`
+-------------------------------------------------------------------------------+
|                       CUSTOM SEARCH INTENT WORKFLOW                           |
|                                                                               |
|  User types into Google Search:                                               |
|  "best project management software for agencies"                              |
|                          |                                                    |
|  Google Ads Identifies Intent                                                 |
|                          |                                                    |
|  User opens YouTube 2 hours later to watch a tutorial                         |
|                          |                                                    |
|  YouTube Serves Your Video Ad:                                                |
|  "Managing an agency? Stop drowning in Trello boards. Meet TaskFlow."         |
+-------------------------------------------------------------------------------+
\`\`\`

#### Best Practice for Search-Term Custom Segments:
Input 15 to 30 high-intent search terms per segment. Group related keywords into isolated themes (e.g., Competitor Brands vs Solution Search Terms).`,
          codeSnippets: [
            {
              language: 'yaml',
              code: `# Custom Search-Intent Segment Configuration
custom_segment:
  segment_name: "YouTube_CustomIntent_CRM_Competitors"
  input_type: "Search terms on Google"
  search_terms:
    - "salesforce alternatives for small business"
    - "hubspot crm pricing too high"
    - "pipedrive vs hubspot comparison"
    - "best simple crm software 2026"
    - "cheap b2b sales pipeline tool"
  expansion_mode: "Google algorithms match search history across YouTube"`,
              explanation: 'YAML structure showing competitor search queries configured into a high-intent Custom Segment.',
              lineByLineBreakdown: [
                'Line 2-3: Names and sets segment type to Google Search Terms.',
                'Line 4-10: Ingests specific competitor comparison queries.'
              ]
            }
          ],
          miniPractice: {
            question: 'What is the primary advantage of building a Custom Segment based on Google search terms for a YouTube campaign?',
            options: [
              'It allows you to serve video ads to people who recently searched for your target keywords on Google Search',
              'It makes your YouTube channel rank organically on Google Search',
              'It forces competitor websites to display your banner ads',
              'It prevents users from using search engines'
            ],
            correctAnswer: 0,
            explanation: 'Search-term Custom Segments bridge Google Search intent into YouTube video ads, reaching prospects who recently typed high-intent queries.'
          }
        },
        {
          id: 'yt-beg-06-s3',
          title: 'Targeting vs Observation Mode & First-Party Data Lists',
          content: `### Targeting vs Observation Settings

\`\`\`
+-------------------------------------------------------------------------------+
| "TARGETING" SETTING                                                           |
| - Restricts campaign reach ONLY to people within the selected audience.       |
| - If a user is not in the audience list, they CANNOT see the ad.              |
| - Standard mode for YouTube prospecting and remarketing ad groups.            |
|                                                                               |
| "OBSERVATION" SETTING                                                         |
| - Does NOT narrow reach. Ads serve broadly, but Google reports performance   |
|   metrics for users who happen to match the observed list.                    |
| - Primarily used on Google Search; rarely used on dedicated YouTube campaigns.|
+-------------------------------------------------------------------------------+
\`\`\`

#### Your Data (First-Party Audiences):
- **Customer Match**: Secure CSV upload of hashed customer emails/phone numbers.
- **Website Visitors**: Built via Google Tag / GA4 tracking tags.
- **YouTube Users**: Viewers who interacted with your linked YouTube channel.`,
          codeSnippets: [
            {
              language: 'typescript',
              code: `// Audience Targeting Mode Definition
export type AudienceDeliveryMode = 'TARGETING' | 'OBSERVATION';

export interface AudienceAssignment {
  audienceId: string;
  audienceName: string;
  audienceType: 'FirstParty_CustomerMatch' | 'InMarket' | 'CustomIntent' | 'Affinity';
  mode: AudienceDeliveryMode; // Always use 'TARGETING' for isolated YouTube ad groups
}`,
              explanation: 'TypeScript model demonstrating audience delivery mode rules for YouTube media buying.',
              lineByLineBreakdown: [
                'Line 2: Defines strict union type for delivery mode.',
                'Line 4-9: Ensures prospecting ad groups utilize TARGETING mode to prevent broad audience leakage.'
              ]
            }
          ],
          miniPractice: {
            question: 'When creating an isolated prospecting ad group targeting a specific In-Market segment on YouTube, which setting must be selected to ensure ads only show to that audience?',
            options: [
              'Observation',
              'Targeting',
              'Broad Demographic Open',
              'Manual CPM'
            ],
            correctAnswer: 1,
            explanation: 'The "Targeting" setting restricts ad delivery exclusively to the selected audience segment, preventing budget leakage to unqualified broad audiences.'
          }
        }
      ],
      practiceExercises: [
        {
          id: 'yt-beg-06-ex1',
          title: 'Audience Architecture Matrix',
          description: 'Construct 3 distinct audience hypotheses for an enterprise CRM software product.',
          starterCode: `// Define 3 audience ad groups
const audienceGroups = [
  {
    name: "AG1_CustomSearch_CRMCompetitors",
    type: "Custom Segment (Search Terms)",
    terms: ["hubspot pricing", "pipedrive review", "best crm for sales"]
  },
  {
    name: "AG2_InMarket_BusinessSoftware",
    type: "In-Market Segment",
    segment: "Enterprise Resource Planning & CRM Software"
  },
  {
    name: "AG3_FirstParty_SiteVisitors",
    type: "Your Data (Website Visitors)",
    windowDays: 30
  }
];`,
          instructions: [
            'Review the 3 audience structures.',
            'Confirm how the custom search segment connects Google Search intent to YouTube video delivery.'
          ],
          hints: ['Isolate each audience type into its own dedicated ad group.'],
          validationChecklist: [
            'Differentiates Custom Search, In-Market, and First-Party data.',
            'Understands audience isolation.'
          ]
        }
      ],
      keyTakeaways: [
        'In-Market segments identify active buyers; Affinity segments identify broad lifestyle enthusiasts.',
        'Custom Search Intent segments are the highest ROI targeting mechanism on YouTube.',
        'Always set ad groups to "Targeting" mode rather than "Observation" to maintain strict audience isolation.'
      ]
    }
  },
  {
    id: 'yt-beg-07',
    title: '7. Contextual Targeting: Keywords, Topics and Placements',
    description: 'Master contextual YouTube targeting, including content keyword sets, curated topic taxonomies, channel & video placement selection, and exclusion lists.',
    level: 'beginner',
    orderIndex: 7,
    duration: '30 min',
    isProject: false,
    isFinalAssessment: false,
    tags: ['Contextual Targeting', 'Keywords', 'Topics', 'Placements', 'Exclusions'],
    lessonContent: {
      overview: 'While audience targeting focuses on WHO the viewer is, contextual targeting focuses on WHERE the video is playing and WHAT content is on screen. Aligning video ad creative with specific YouTube channels, relevant video topics, and contextual keywords creates hyper-relevant viewing experiences.',
      objectives: [
        'Understand how Content Keywords, Topics, and Specific Placements function on YouTube.',
        'Analyze the risks of overly narrow placement targeting and how to avoid delivery bottlenecks.',
        'Implement robust Account-Level and Campaign-Level negative placement exclusion lists.'
      ],
      sections: [
        {
          id: 'yt-beg-07-s1',
          title: 'Content Keywords vs Topics vs Placements',
          content: `### The 3 Contextual Targeting Mechanisms

\`\`\`
+-------------------------------------------------------------------------------+
|                      CONTEXTUAL TARGETING PILLARS                             |
|                                                                               |
|  1. CONTENT KEYWORDS                                                          |
|     - Matches words and phrases in video titles, descriptions, and metadata.  |
|     - Example: "how to invest in index funds", "Shopify tutorial 2026"        |
|                                                                               |
|  2. TOPIC TARGETING                                                           |
|     - Broad category taxonomy classified by Google machine learning.          |
|     - Example: "Finance > Investing", "Computers & Electronics > Software"    |
|                                                                               |
|  3. PLACEMENT TARGETING                                                       |
|     - Exact specific YouTube Channels or individual Video URLs.               |
|     - Example: Channel "Graham Stephan", Video "youtube.com/watch?v=123"      |
+-------------------------------------------------------------------------------+
\`\`\`

#### Contextual Targeting Dynamics:
Unlike search keywords (which target user queries), YouTube content keywords match the **context of the video being watched**. If a viewer is watching a video titled "How to fix a leaky faucet", a plumbing tool ad with relevant content keywords can trigger in the pre-roll auction.`,
          codeSnippets: [
            {
              language: 'json',
              code: `// Contextual Targeting Rule Set
{
  "contextualTargeting": {
    "topics": [
      "/Computers & Electronics/Enterprise Technology",
      "/Business & Industrial/Business Operations"
    ],
    "contentKeywords": [
      "project management tutorial",
      "asana vs monday workflow",
      "how to organize marketing team"
    ],
    "placements": {
      "channels": [
        "https://www.youtube.com/@ProjectManagementMastery",
        "https://www.youtube.com/@TechWorkflowSolutions"
      ],
      "videos": []
    }
  }
}`,
              explanation: 'JSON configuration defining contextual topics, content keywords, and specific channel placements.',
              lineByLineBreakdown: [
                'Line 3-6: Attaches machine-classified industry topics.',
                'Line 7-11: Specifies contextual keyword metadata triggers.',
                'Line 12-16: Targets curated YouTube channel URLs.'
              ]
            }
          ],
          miniPractice: {
            question: 'What is the primary difference between a "Google Search Keyword" and a "YouTube Content Keyword"?',
            options: [
              'Search keywords target what a user types into Google.com; YouTube content keywords match the title, description, and transcript of the video currently being watched.',
              'Search keywords are always free, while YouTube content keywords cost $10 per word.',
              'YouTube content keywords only work on weekends.',
              'There is no difference.'
            ],
            correctAnswer: 0,
            explanation: 'Search keywords match active user queries on search engines, while YouTube content keywords analyze the metadata, audio transcript, and title of the video playing.'
          }
        },
        {
          id: 'yt-beg-07-s2',
          title: 'The Over-Targeting Trap & Inventory Liquidity',
          content: `### Avoiding Auction Starvation
A frequent mistake made by beginner advertisers is **Targeting Stacking**: combining multiple restrictive targeting layers inside a single ad group.

\`\`\`
+-------------------------------------------------------------------------------+
|                       THE DANGEROUS TARGETING STACK TRAP                      |
|                                                                               |
|   [ Age 25-34 Only ]                                                          |
|         + [ Top 10% Household Income ]                                        |
|               + [ In-Market: Enterprise Software ]                            |
|                     + [ Keyword: "SaaS Workflow" ]                            |
|                           + [ 3 Specific YouTube Channels ]                   |
|                                                                               |
|   RESULT: INVENTORY = ZERO IMPRESSIONS / CAMPAIGN CANNOT SPEND                |
+-------------------------------------------------------------------------------+
\`\`\`

#### Best Practice for Liquidity:
Separate targeting dimensions across isolated ad groups. Test **Audience-First** ad groups separately from **Contextual-First** ad groups to isolate performance and maintain sufficient auction liquidity.`,
          codeSnippets: [
            {
              language: 'yaml',
              code: `# Campaign Liquidity Guidelines
targeting_hygiene:
  rule_1: "Never stack narrow Placements on top of narrow Custom Search Segments in a single ad group"
  rule_2: "Minimum placement pool size: >= 50-100 active channels if using placement targeting"
  rule_3: "If campaign delivers 0 impressions after 24 hours, broaden demographic filters or raise initial tCPA/CPV bid"`,
              explanation: 'Operational guidelines for maintaining auction liquidity and avoiding zero-impression stalls.',
              lineByLineBreakdown: [
                'Line 3: Explicitly forbids combining narrow placements with narrow search segments.',
                'Line 4: Mandates at least 50-100 active channels for placement targeting.',
                'Line 5: Provides rapid troubleshooting steps for 0-impression campaigns.'
              ]
            }
          ],
          miniPractice: {
            question: 'Why does stacking 5 narrow keywords, 2 small YouTube channels, and strict demographic filters into one ad group usually cause a campaign to stall with $0 spend?',
            options: [
              'Because Google algorithm crashes when reading more than 3 targeting criteria',
              'Because the intersecting pool of available ad auctions that meet all criteria simultaneously is too small for the bidding engine to deliver',
              'Because YouTube requires a special license for multi-layer targeting',
              'Because the advertiser channel has under 1,000 subscribers'
            ],
            correctAnswer: 1,
            explanation: 'Stacking multiple restrictive targeting layers creates a tiny mathematical intersection with virtually zero available daily auction impressions.'
          }
        },
        {
          id: 'yt-beg-07-s3',
          title: 'Negative Placements & Brand Safety Exclusions',
          content: `### Eliminating Wasteful Placements
To protect budget and maintain brand safety, media buyers must build and apply global **Negative Placement Lists**:

\`\`\`
+-------------------------------------------------------------------------------+
|                      STANDARD NEGATIVE EXCLUSION CATEGORIES                   |
|                                                                               |
|  1. KIDS CONTENT & NURSERY RHYMES (e.g. Cocomelon, Kids Diana Show)           |
|     -> Prevents toddlers clicking ads while watching cartoons on iPad         |
|                                                                               |
|  2. MOBILE GAMEPLAY CHANNELS (e.g. Roblox, Minecraft stream highlights)       |
|     -> Prevents accidental clicks from distracted gaming audiences            |
|                                                                               |
|  3. LOW-QUALITY CLICKBAIT & SENSATIONAL NEWS CHANNELS                         |
|     -> Protects brand safety and avoids association with controversial topics |
+-------------------------------------------------------------------------------+
\`\`\`

#### How to Exclude Kids Content Globally:
In Google Ads Content Suitability settings, exclude the digital content label **DL-G (General audiences suitable for families)** and exclude the topic **"Juvenile / Kids Content"** across the entire account.`,
          codeSnippets: [
            {
              language: 'json',
              code: `// Account-Level Negative Placement Exclusion List
{
  "negativePlacementList": {
    "listName": "Global_Kids_and_Gaming_Exclusions_2026",
    "excludedTopics": ["/People & Society/Kids & Teens", "/Games/Video Games"],
    "excludedContentLabels": ["DL-G (Family-friendly suitable for toddlers)"],
    "excludedPlacementUrls": [
      "youtube.com/channel/UC_kidsCartoonChannel1",
      "youtube.com/channel/UC_mobileRobloxStreams"
    ]
  }
}`,
              explanation: 'JSON definition of a standard negative placement exclusion list applied at account level.',
              lineByLineBreakdown: [
                'Line 4-5: Excludes kids and video game topics.',
                'Line 6: Excludes toddler content label.',
                'Line 7-10: Excludes specific known low-quality channels.'
              ]
            }
          ],
          miniPractice: {
            question: 'Why is excluding children and cartoon channels standard procedure for B2B and e-commerce YouTube advertisers?',
            options: [
              'Because children have unlimited credit cards',
              'To eliminate wasted ad spend caused by young children tapping screens on parents tablets without any intent or ability to purchase',
              'Because YouTube charges extra for showing ads to children',
              'Because Google bans ads on cartoons'
            ],
            correctAnswer: 1,
            explanation: 'Children viewing parents devices generate high volumes of accidental clicks with zero commercial intent, rapidly draining direct-response budgets.'
          }
        }
      ],
      practiceExercises: [
        {
          id: 'yt-beg-07-ex1',
          title: 'Contextual Strategy & Exclusion Protocol',
          description: 'Build a contextual targeting plan with content keywords, topic categories, and negative exclusion rules.',
          starterCode: `// Build contextual campaign structure
const contextualConfig = {
  niche: "Real Estate Investment Software",
  targetTopics: ["/Finance/Investing", "/Real Estate"],
  contentKeywords: ["how to analyze rental property", "real estate cap rate calculator"],
  negativeExclusions: ["kids cartoons", "roblox gaming", "nursery rhymes"]
};`,
          instructions: [
            'Review topic and keyword selections.',
            'Confirm the negative exclusion list contains standard waste-prevention categories.'
          ],
          hints: ['Ensure contextual alignment with real estate investors.'],
          validationChecklist: [
            'Defines finance/real estate topics.',
            'Applies negative exclusions.'
          ]
        }
      ],
      keyTakeaways: [
        'Contextual targeting places ads alongside relevant content keywords, topics, and channels.',
        'Avoid over-targeting stacks that choke auction liquidity and cause zero-spend stalls.',
        'Always maintain and apply global negative placement exclusion lists to filter out kids content.'
      ]
    }
  },
  {
    id: 'yt-beg-08',
    title: '8. Budgeting and Bidding Basics',
    description: 'Understand Daily budgets, CPM, CPV, Target CPA, Maximize Conversions, pacing rules, and auction clearing dynamics.',
    level: 'beginner',
    orderIndex: 8,
    duration: '30 min',
    isProject: false,
    isFinalAssessment: false,
    tags: ['Bidding Strategies', 'Target CPA', 'Maximize Conversions', 'CPV', 'CPM'],
    lessonContent: {
      overview: 'Bidding and budgeting are the financial levers that dictate how Google Ads enters and wins auctions on YouTube. Understanding the mathematical mechanics of CPV, Target CPM, Maximize Conversions, and Target CPA ensures media buyers do not overpay for impressions while scaling profitable spend.',
      objectives: [
        'Master the mechanics of Maximum CPV, Target CPM, Maximize Conversions, and Target CPA bidding.',
        'Understand Google Ads daily budget pacing and the 2x daily spend rule.',
        'Calculate break-even CPA and initial bid thresholds based on landing page conversion rates.'
      ],
      sections: [
        {
          id: 'yt-beg-08-s1',
          title: 'Core Bidding Strategies Explained (CPV, CPM, tCPA, Max Conv)',
          content: `### Bidding Strategy Breakdown

\`\`\`
+-------------------------------------------------------------------------------+
|                       YOUTUBE BIDDING STRATEGY MATRIX                         |
|                                                                               |
|  1. MAXIMUM CPV (Cost-Per-View)                                               |
|     - You set the highest dollar amount you will pay for a 30s view or click. |
|     - Example Bid: $0.08 CPV. Used for Consideration & In-Feed.              |
|                                                                               |
|  2. TARGET CPM (Cost-Per-Thousand Impressions)                                |
|     - You set average target price per 1,000 ad impressions.                  |
|     - Example Bid: $12.00 CPM. Used for Bumpers & Non-Skippable.              |
|                                                                               |
|  3. MAXIMIZE CONVERSIONS (Smart Bidding)                                      |
|     - Google automatically sets bids to get the most conversions within your  |
|       daily budget. Ideal for launching new Video Action Campaigns.           |
|                                                                               |
|  4. TARGET CPA (Cost-Per-Acquisition)                                         |
|     - Google automatically sets bids to acquire conversions at your target $. |
|     - Example: $40 Target CPA. Requires conversion history for stability.     |
+-------------------------------------------------------------------------------+
\`\`\`

#### When to Transition from Maximize Conversions to Target CPA:
When launching a brand new Video Action Campaign with zero conversion history, start with **Maximize Conversions** for the first 14-30 conversions. Once the algorithm establishes baseline conversion signals, switch to **Target CPA** set at 10-20% above your recent historical CPA to maintain delivery volume.`,
          codeSnippets: [
            {
              language: 'json',
              code: `// Bidding Strategy Setup Parameters
{
  "launchPhase": {
    "recommendedStrategy": "MAXIMIZE_CONVERSIONS",
    "dailyBudgetMultiplier": "10x expected CPA ($30 CPA -> $300/day)",
    "rationale": "Feeds conversion pixel rapidly with initial data"
  },
  "scalingPhase": {
    "recommendedStrategy": "TARGET_CPA",
    "targetCpaAmount": 35.00,
    "dailyBudgetMultiplier": "20x target CPA ($700/day)",
    "rationale": "Maintains predictable unit economics at scale"
  }
}`,
              explanation: 'JSON configuration documenting bidding strategy progression from launch to scaling phases.',
              lineByLineBreakdown: [
                'Line 2-6: Launch phase sets Maximize Conversions with 10x CPA budget.',
                'Line 7-12: Scaling phase locks in Target CPA with 20x CPA budget.'
              ]
            }
          ],
          miniPractice: {
            question: 'What is the recommended bidding strategy when launching a brand new YouTube Video Action Campaign with zero historical conversion data?',
            options: [
              'Maximize Conversions',
              'Target ROAS 1000%',
              'Manual CPC',
              'Target CPM $1.00'
            ],
            correctAnswer: 0,
            explanation: 'Maximize Conversions allows Google Smart Bidding algorithm to explore the auction space and collect initial conversion data without being artificially constrained by a strict CPA target.'
          }
        },
        {
          id: 'yt-beg-08-s2',
          title: 'Daily Budget Pacing & The 2x Rule',
          content: `### How Google Manages Daily Budgets
Google Ads uses an adaptive pacing algorithm:

\`\`\`
+-------------------------------------------------------------------------------+
|                       GOOGLE 2X DAILY SPEND MECHANICS                         |
|                                                                               |
|  Daily Budget Set by Advertiser: $100 / day                                   |
|                                                                               |
|  - Day 1 (High conversion traffic): Spends $175 (Up to 2x allowed)            |
|  - Day 2 (Low conversion traffic):  Spends $45                                |
|  - Day 3 (Moderate traffic):        Spends $95                                |
|                                                                               |
|  MONTHLY SPEND CAP: Never exceeds (Daily Budget * 30.4 days) = $3,040 / month |
+-------------------------------------------------------------------------------+
\`\`\`

#### Budget Sizing Rule of Thumb for Video Action Campaigns:
To give Google Smart Bidding algorithm enough statistical room to optimize, set your daily budget to **at least 5x to 10x your Target CPA**. If your target CPA is $30, your daily budget should be at least $150 - $300/day per campaign.`,
          codeSnippets: [
            {
              language: 'typescript',
              code: `// Target CPA Budget Sizing Calculator
export function calculateMinimumDailyBudget(targetCpa: number, tier: 'Conservative' | 'Aggressive'): number {
  const multiplier = tier === 'Conservative' ? 5 : 10;
  return targetCpa * multiplier;
}

// Example: Target CPA = $45
const minBudget = calculateMinimumDailyBudget(45, 'Conservative');
console.log(\`Minimum daily budget: $\${minBudget}/day\`); // $225/day`,
              explanation: 'TypeScript helper calculating the minimum daily budget required for algorithmic learning stability.',
              lineByLineBreakdown: [
                'Line 2-5: Applies 5x or 10x multiplier to Target CPA.',
                'Line 8-9: Demonstrates calculating a $225/day budget for a $45 CPA.'
              ]
            }
          ],
          miniPractice: {
            question: 'If you set a Daily Budget of $100/day, what is the absolute maximum amount Google Ads can spend on a single high-traffic day?',
            options: [
              '$100.00',
              '$200.00 (2x Daily Budget)',
              '$1,000.00',
              '$50.00'
            ],
            correctAnswer: 1,
            explanation: 'Google Ads can spend up to 2x (200%) of your daily budget on any given day, but will never exceed your monthly budget cap of 30.4 * daily budget.'
          }
        },
        {
          id: 'yt-beg-08-s3',
          title: 'Calculating Unit Economics & Break-Even Metrics',
          content: `### The Direct-Response Unit Economic Formula
Before setting bids, calculate your target metrics mathematically:

\`\`\`
+-------------------------------------------------------------------------------+
|                       UNIT ECONOMIC CALCULATION PIPELINE                      |
|                                                                               |
|  1. Average Order Value (AOV)              = $120                             |
|  2. Product Gross Margin (60%)             = $72 Gross Profit                 |
|  3. Target Net Margin (20%)                = $24 Target Profit                |
|  4. MAXIMUM BREAK-EVEN CPA                 = $72 (AOV * Gross Margin)         |
|  5. TARGET ACQUISITION CPA                 = $48 ($72 - $24 Net Profit)       |
+-------------------------------------------------------------------------------+
\`\`\`

#### Calculating Maximum CPV Bid (for Consideration Campaigns):
If your website converts 2% of video viewers into buyers, and your target CPA is $50:
\`\`\`
Max CPV = Target CPA * Conversion Rate = $50 * 0.02 = $1.00 Max CPV
\`\`\``,
          codeSnippets: [
            {
              language: 'typescript',
              code: `// Unit Economic & Bid Threshold Calculator
export function calculateTargetMetrics(params: {
  aov: number;
  grossMarginPct: number;
  targetProfitPct: number;
  landingPageConvRatePct: number;
}) {
  const grossProfit = params.aov * (params.grossMarginPct / 100);
  const targetProfit = params.aov * (params.targetProfitPct / 100);
  const targetCpa = grossProfit - targetProfit;
  const maxCpv = targetCpa * (params.landingPageConvRatePct / 100);

  return {
    grossProfit,
    targetCpa,
    maxCpv
  };
}`,
              explanation: 'TypeScript module computing exact mathematical CPA and CPV bid ceilings based on unit economics.',
              lineByLineBreakdown: [
                'Line 7-9: Calculates target CPA by subtracting desired net profit from gross profit.',
                'Line 10: Multiplies target CPA by conversion rate to establish Max CPV.'
              ]
            }
          ],
          miniPractice: {
            question: 'If a product sells for $100 with a $60 gross profit margin and the business requires $20 profit per sale, what is the Target CPA?',
            options: [
              '$60',
              '$40 ($60 Gross Profit - $20 Target Profit)',
              '$100',
              '$20'
            ],
            correctAnswer: 1,
            explanation: 'Target CPA = Gross Profit ($60) - Desired Profit ($20) = $40 maximum acquisition cost.'
          }
        }
      ],
      practiceExercises: [
        {
          id: 'yt-beg-08-ex1',
          title: 'Bidding Strategy & Budget Plan',
          description: 'Calculate unit economics and configure daily budget thresholds for a high-ticket e-commerce client.',
          starterCode: `// Configure bidding model
const clientEconomics = {
  aov: 250,
  grossMarginPct: 70, // $175 gross profit
  targetProfitPct: 20, // $50 target profit
  landingPageConvRate: 0.025 // 2.5%
};

// Target CPA = $175 - $50 = $125
// Daily Budget (5x CPA) = $625/day`,
          instructions: [
            'Verify Target CPA calculation.',
            'Compute the recommended minimum daily budget using the 5x rule.'
          ],
          hints: ['Target CPA = $125; Minimum daily budget = $625.'],
          validationChecklist: [
            'Calculates correct Target CPA ($125).',
            'Sets daily budget to at least 5x Target CPA ($625/day).'
          ]
        }
      ],
      keyTakeaways: [
        'Use Maximize Conversions at launch to build initial signal; switch to Target CPA for scaling.',
        'Google Ads can spend up to 2x your daily budget on high-traffic days within monthly caps.',
        'Set daily budgets to at least 5x to 10x your Target CPA to maintain Smart Bidding stability.'
      ]
    }
  },
  {
    id: 'yt-beg-09',
    title: '9. Core YouTube Ads Performance Metrics & KPIs',
    description: 'Master Impressions, Paid Views, View Rate %, Watch Time, CPV, CTR %, Conversions, Cost/Conv, and Reach & Frequency metrics.',
    level: 'beginner',
    orderIndex: 9,
    duration: '30 min',
    isProject: false,
    isFinalAssessment: false,
    tags: ['Analytics', 'KPIs', 'View Rate', 'CTR', 'Conversion Tracking'],
    lessonContent: {
      overview: 'Interpreting YouTube Ads reporting columns accurately separates elite media buyers from novices. Knowing how View Rate %, Click-Through Rate (CTR), Cost-Per-View (CPV), and Engaged-View Conversions interact enables rapid diagnostic troubleshooting and creative optimization.',
      objectives: [
        'Define and calculate all primary YouTube Ads metrics and industry benchmarks.',
        'Analyze the relationship between View Rate (creative hook) and CTR (offer relevance).',
        'Configure custom column reporting views in Google Ads for rapid daily analysis.'
      ],
      sections: [
        {
          id: 'yt-beg-09-s1',
          title: 'The Core Metric Diagnostic Tree',
          content: `### Metric Hierarchy & Benchmark Matrix

\`\`\`
+-------------------------------------------------------------------------------+
|                       YOUTUBE ADS METRIC BENCHMARK MATRIX                     |
|                                                                               |
|  Metric           Formula                        Healthy Benchmark            |
|  ---------------------------------------------------------------------------  |
|  Impressions      Total times ad was shown       Volume-dependent             |
|  Paid Views       Watched >= 30s or clicked      Volume-dependent             |
|  View Rate %      (Views / Impressions) * 100    25% - 40% (Skippables)       |
|  Avg. CPV         Total Cost / Paid Views        $0.02 - $0.08 (Tier 1 Geos)  |
|  Clicks           Total user interactions        Volume-dependent             |
|  CTR %            (Clicks / Impressions) * 100   0.8% - 2.5%+ (VAC)           |
|  Conv. Rate %     (Conversions / Clicks) * 100   2.0% - 5.0%+                 |
|  Cost / Conv      Total Cost / Conversions       Within Target CPA ceiling    |
+-------------------------------------------------------------------------------+
\`\`\`

#### The Diagnostic Relationship:
- **Low View Rate (< 20%) + Normal CTR**: Your 5-second Hook is failing. Viewers are skipping immediately.
- **High View Rate (> 35%) + Low CTR (< 0.5%)**: Your Hook is entertaining, but your Offer or Call-To-Action is weak or unclear.
- **High CTR (> 2%) + Low Conversion Rate (< 1%)**: Your video creative set high expectations that your Landing Page failed to deliver.`,
          codeSnippets: [
            {
              language: 'typescript',
              code: `// Creative & Campaign Performance Diagnostic Engine
export interface PerformanceMetrics {
  impressions: number;
  views: number;
  clicks: number;
  cost: number;
  conversions: number;
}

export function diagnoseCampaignHealth(metrics: PerformanceMetrics) {
  const viewRatePct = (metrics.views / metrics.impressions) * 100;
  const ctrPct = (metrics.clicks / metrics.impressions) * 100;
  const cpa = metrics.conversions > 0 ? metrics.cost / metrics.conversions : metrics.cost;

  const diagnoses: string[] = [];
  if (viewRatePct < 20) diagnoses.push("HOOK FAILURE: Test new pattern interrupts in first 5 seconds");
  if (ctrPct < 0.6) diagnoses.push("OFFER/CTA WEAKNESS: Clarify on-screen CTA and direct instructions");
  if (viewRatePct >= 30 && ctrPct >= 1.0) diagnoses.push("HEALTHY CREATIVE: Scale budget or duplicate into new audiences");

  return { viewRatePct, ctrPct, cpa, diagnoses };
}`,
              explanation: 'TypeScript diagnostic logic evaluating core video performance ratios against established benchmarks.',
              lineByLineBreakdown: [
                'Line 8-11: Computes View Rate %, CTR %, and CPA.',
                'Line 13-16: Automatically identifies whether hook, offer, or landing page is the primary bottleneck.'
              ]
            }
          ],
          miniPractice: {
            question: 'If a YouTube video ad has an exceptional 42% View Rate but an extremely low 0.2% CTR, what is the primary diagnosis?',
            options: [
              'The video hook is entertaining, but the offer is weak, uncompelling, or lacks a clear Call to Action',
              'The video is too short',
              'Google Ads has blocked all clicks',
              'The landing page has an SSL error'
            ],
            correctAnswer: 0,
            explanation: 'A high view rate proves people enjoy watching the video, but an ultra-low CTR reveals they have no incentive or instruction to click through to the website.'
          }
        },
        {
          id: 'yt-beg-09-s2',
          title: 'Video Quartiles & Retention Curve Analysis',
          content: `### Reading Video Retention Quartiles
Google Ads reports video completion across 4 quartiles:
- **Video played to 25%**
- **Video played to 50%**
- **Video played to 75%**
- **Video played to 100%**

\`\`\`
+-------------------------------------------------------------------------------+
|                       VIDEO RETENTION DROP-OFF CURVE                          |
|                                                                               |
|  100% | *                                                                     |
|   80% |   *                                                                   |
|   60% |     * (Drop-off after Skip button at 0:05)                            |
|   40% |        *-----------* (Quartile 25% to 50% Plateau: Core Audience)     |
|   20% |                     *-----------* (Quartile 75% to 100%: High Intent) |
|    0% +--------------------------------------------------------------> Time   |
|       0s   5s             25%          50%          75%          100%         |
+-------------------------------------------------------------------------------+
\`\`\`

#### How to Optimize Based on Quartiles:
1. **Steep Drop at 25%**: Your transition from Hook to Story is jarring or confusing. Smooth out the transition.
2. **Steady Plateau from 25% to 75%**: Excellent storytelling and value pacing.
3. **Drop before CTA (75% to 100%)**: Your video is too long. Move the primary CTA earlier (e.g. at second 45 instead of second 90).`,
          codeSnippets: [
            {
              language: 'yaml',
              code: `# Video Quartile Drop-Off Audit
quartile_analysis:
  video_id: "Vid_01_Demo_PAS"
  duration_seconds: 90
  retention_metrics:
    watched_to_25_pct: "42%"
    watched_to_50_pct: "35%"
    watched_to_75_pct: "28%"
    watched_to_100_pct: "22%"
  evaluation: "Strong retention plateau. Core buyers watch through to the end."`,
              explanation: 'YAML structure modeling video quartile retention metrics for creative auditing.',
              lineByLineBreakdown: [
                'Line 5-8: Measures percentage of viewers who reach each quarter of the video.',
                'Line 9: Concludes creative pacing is healthy.'
              ]
            }
          ],
          miniPractice: {
            question: 'If 40% of viewers reach the 50% mark of your video, but only 5% reach the 100% mark where your CTA is located, what creative adjustment should be made?',
            options: [
              'Move your primary CTA and offer pitch earlier in the video (e.g. around the 45-second mark) or trim the video length',
              'Delete the ad account',
              'Double your Target CPM bid',
              'Remove all voiceover audio'
            ],
            correctAnswer: 0,
            explanation: 'Introducing the call-to-action earlier captures the large pool of interested viewers who drop off during unnecessarily extended outro sequences.'
          }
        },
        {
          id: 'yt-beg-09-s3',
          title: 'Custom Column Presets for Daily Campaign Management',
          content: `### Setting Up Your Master Reporting View
Do not rely on Google Ads default columns. Configure a custom column preset containing:

1. **Performance**: Impressions, Paid Views, View Rate, Avg. CPV, Clicks, CTR.
2. **Conversions**: Conversions, Cost / Conv. (CPA), Conv. Rate, All Conv. Value (Revenue), Value / Cost (ROAS).
3. **Video Engagement**: Video played to: 25%, 50%, 75%, 100%, Earned Views, Earned Subscribers.
4. **Competitive Metrics**: Search Impression Share, Display/Video Impr. Share lost (budget/rank).

\`\`\`
+------------------------------------------------------------------------------------+
| GOOGLE ADS MASTER COLUMNS:                                                         |
| [Impr] [Views] [ViewRate] [AvgCPV] [Clicks] [CTR] [Conversions] [CPA] [ROAS] [25%] |
+------------------------------------------------------------------------------------+
\`\`\``,
          codeSnippets: [
            {
              language: 'json',
              code: `// Master Column Configuration Preset
{
  "presetName": "YouTube Performance Master View",
  "activeColumns": [
    "Campaign name",
    "Status",
    "Budget",
    "Impressions",
    "Views",
    "View rate",
    "Avg. CPV",
    "Clicks",
    "CTR",
    "Conversions",
    "Cost / conv.",
    "Conv. rate",
    "Conv. value / cost",
    "Video played to 25%",
    "Video played to 50%",
    "Video played to 75%",
    "Video played to 100%",
    "Earned subscribers"
  ]
}`,
              explanation: 'JSON preset defining the comprehensive reporting columns needed for professional YouTube media buying.',
              lineByLineBreakdown: [
                'Line 3-21: Enumerates all essential performance, conversion, quartile, and earned action columns.'
              ]
            }
          ],
          miniPractice: {
            question: 'Which column combination allows a media buyer to quickly see if a campaign is generating profitable revenue relative to ad spend?',
            options: [
              'Cost / conv. (CPA) and Conv. value / cost (ROAS)',
              'Channel Subscriber Count only',
              'Video resolution and file size',
              'Billing credit card expiration date'
            ],
            correctAnswer: 0,
            explanation: 'CPA (Cost per Acquisition) and ROAS (Conversion Value / Cost) provide the exact financial return metrics needed to verify profitability.'
          }
        }
      ],
      practiceExercises: [
        {
          id: 'yt-beg-09-ex1',
          title: 'KPI Audit & Performance Diagnostic',
          description: 'Analyze campaign metrics and determine whether the creative, targeting, or landing page needs optimization.',
          starterCode: `// Campaign performance snapshot
const campaignData = {
  impressions: 50000,
  views: 18500, // View Rate = 37% (Strong Hook)
  clicks: 120,   // CTR = 0.24% (Weak CTA/Offer)
  conversions: 3,
  spend: 740
};`,
          instructions: [
            'Compute the View Rate percentage and CTR percentage.',
            'Identify the primary bottleneck in the conversion funnel.'
          ],
          hints: ['View rate = 18500/50000 = 37%; CTR = 120/50000 = 0.24% (CTA is the issue).'],
          validationChecklist: [
            'Calculates 37% View Rate and 0.24% CTR.',
            'Diagnoses weak CTA / click incentive.'
          ]
        }
      ],
      keyTakeaways: [
        'View Rate measures Hook effectiveness; CTR measures Offer/CTA compellingness.',
        'Quartile retention metrics reveal exactly where viewers lose interest in your video.',
        'Always configure a customized reporting column preset with CPA, ROAS, and quartiles.'
      ]
    }
  },
  {
    id: 'yt-beg-10',
    title: '10. Launching a First YouTube Ads Campaign',
    description: 'Execute the complete campaign creation checklist, configure settings, upload video creative, link extensions, and pass policy QA.',
    level: 'beginner',
    orderIndex: 10,
    duration: '35 min',
    isProject: false,
    isFinalAssessment: false,
    tags: ['Campaign Launch', 'Step-by-Step', 'Checklist', 'QA Protocol'],
    lessonContent: {
      overview: 'Launching your first YouTube campaign requires methodical attention to detail. A single missed checkbox—such as leaving unvetted Display Network partner sites enabled on a narrow test, or forgetting to attach sitelink extensions—can inflate CPA and misdirect ad spend.',
      objectives: [
        'Execute the 10-step campaign creation workflow in Google Ads from scratch.',
        'Configure network placements, location geo-targeting, language settings, and device exclusions correctly.',
        'Conduct a pre-launch QA audit verifying landing page tracking, UTM tags, and policy compliance.'
      ],
      sections: [
        {
          id: 'yt-beg-10-s1',
          title: 'The 10-Step Campaign Launch Checklist',
          content: `### Step-by-Step Campaign Creation Protocol

\`\`\`
+-------------------------------------------------------------------------------+
|                      10-STEP YOUTUBE ADS LAUNCH WORKFLOW                      |
|                                                                               |
|  Step 1: Click "+ New Campaign" in Google Ads and select Sales/Leads objective|
|  Step 2: Choose "Video" campaign subtype (Video Action Campaign)              |
|  Step 3: Name campaign using standardized taxonomy ([Geo]_[Funnel]_[Bid])     |
|  Step 4: Set Bidding Strategy (Maximize Conversions at launch) & Daily Budget |
|  Step 5: Configure Location Geo-Targeting ("Presence" only, exclude others)   |
|  Step 6: Set Language Targeting (Target user languages explicitly)            |
|  Step 7: Content Suitability (Standard Inventory, Exclude Kids Labels)        |
|  Step 8: Attach Sitelinks, Lead Forms, and Companion Banners                  |
|  Step 9: Build Ad Group & attach Custom Search Intent / In-Market Audience    |
|  Step 10: Paste YouTube Video URL, write Headlines/CTAs, add UTMs & Launch   |
+-------------------------------------------------------------------------------+
\`\`\`

#### Critical Location Setting Warning:
Under **Locations** > **Location options**, always change the default setting from *"Presence or interest"* to **"Presence: People in or regularly in your targeted locations"**. This prevents your ads from serving to users outside your target country who merely showed interest in it.`,
          codeSnippets: [
            {
              language: 'yaml',
              code: `# Production Campaign Launch Blueprint
campaign_settings:
  type: "VIDEO"
  subtype: "VIDEO_ACTION"
  bidding_strategy: "MAXIMIZE_CONVERSIONS"
  daily_budget_usd: 150.00
  locations:
    target: ["United States", "Canada"]
    matching_mode: "PRESENCE_ONLY" # Prevents overseas traffic leakage
  languages: ["en"]
  content_suitability:
    inventory_type: "STANDARD_INVENTORY"
    excluded_types: ["EMBEDDED_YOUTUBE_VIDEOS", "LIVE_STREAMING_VIDEOS"]
  extensions:
    sitelinks_enabled: true
    lead_form_attached: false`,
              explanation: 'YAML specification outlining critical campaign settings for a clean, leak-free launch.',
              lineByLineBreakdown: [
                'Line 2-5: Defines Video Action Campaign with Maximize Conversions bidding.',
                'Line 6-8: Enforces PRESENCE_ONLY location matching.',
                'Line 10-12: Excludes live streams and embedded videos for quality control.'
              ]
            }
          ],
          miniPractice: {
            question: 'Why must location targeting be set to "Presence: People in or regularly in your targeted locations" instead of "Presence or interest"?',
            options: [
              'To prevent Google from spending your budget showing ads to people physically located outside your target country who only searched for that country',
              'Because Google charges higher fees for Presence targeting',
              'To restrict ads to desktop computers only',
              'To disable conversion tracking'
            ],
            correctAnswer: 0,
            explanation: '"Presence or interest" frequently wastes budget by serving ads in low-cost international countries to users who merely searched for US topics.'
          }
        },
        {
          id: 'yt-beg-10-s2',
          title: 'UTM Tracking Parameters & Landing Page Synchronization',
          content: `### Tracking Architecture
To accurately attribute sales and leads in Google Analytics 4 (GA4), Shopify, or third-party attribution platforms (Triple Whale, Northbeam, Hyros), configure dynamic URL tracking parameters:

\`\`\`
https://yourwebsite.com/offer?utm_source=youtube&utm_medium=paid_video&utm_campaign={_campaignname}&utm_content={_creativeid}&utm_term={_adgroupname}
\`\`\`

#### Essential Google Ads Dynamic ValueTrack Parameters:
- \`{campaignid}\`: Dynamic Google Ads Campaign ID.
- \`{adgroupid}\`: Dynamic Ad Group ID.
- \`{creative}\`: Unique ID of the video ad asset.
- \`{device}\`: \`m\` (mobile), \`t\` (tablet), or \`c\` (computer).
- \`{matchtype}\`: Targeting match type.`,
          codeSnippets: [
            {
              language: 'javascript',
              code: `// ValueTrack URL Builder Helper
function buildTrackingUrl(baseUrl, campaignName, adGroupName) {
  const url = new URL(baseUrl);
  url.searchParams.set('utm_source', 'youtube');
  url.searchParams.set('utm_medium', 'paid_video');
  url.searchParams.set('utm_campaign', campaignName);
  url.searchParams.set('utm_content', '{creative}');
  url.searchParams.set('utm_term', adGroupName);
  url.searchParams.set('device', '{device}');
  return url.toString();
}

// Example Output:
// https://myshop.com/offer?utm_source=youtube&utm_medium=paid_video&utm_campaign=US_TOF_VAC_SearchIntent&utm_content={creative}&utm_term=CompetitorKeywords&device={device}`,
              explanation: 'JavaScript utility for generating standardized ValueTrack tracking URLs for YouTube ad creatives.',
              lineByLineBreakdown: [
                'Line 2-9: Appends UTM parameters with dynamic Google ValueTrack macros.',
                'Line 12: Produces clean, tracking-ready destination URL.'
              ]
            }
          ],
          miniPractice: {
            question: 'What does the dynamic ValueTrack parameter "{device}" resolve to when an ad is viewed and clicked on a mobile smartphone?',
            options: [
              '"mobile_phone_user_2026"',
              '"m"',
              '"smartphone"',
              '"android"'
            ],
            correctAnswer: 1,
            explanation: 'Google Ads ValueTrack replaces "{device}" with "m" for mobile, "t" for tablet, and "c" for desktop computer.'
          }
        },
        {
          id: 'yt-beg-10-s3',
          title: 'Pre-Launch Quality Assurance (QA) Protocol',
          content: `### The Zero-Defect QA Audit Checklist
Before clicking "Publish Campaign", complete this 7-point audit:

| Audit Item | Verification Action | Pass Criteria |
| :--- | :--- | :--- |
| **1. Conversion Action** | Check Google Ads Conversion Tag status | Status = "Active" (Green dot) |
| **2. Video Privacy** | Verify YouTube video visibility status | "Unlisted" or "Public" (NOT "Private") |
| **3. Landing Page** | Click Final URL on both Mobile & Desktop | Loads < 2.5s, SSL secure, CTA functional |
| **4. UTM Parameters** | Inspect Tracking Template in URL builder | All dynamic macros properly formatted |
| **5. Sitelinks** | Verify sitelink headline length & URLs | At least 2-4 active sitelinks attached |
| **6. Exclusions** | Check Negative Placements & Content Labels | Kids content & gaming streams excluded |
| **7. Budget Cap** | Verify daily budget amount | Sized to >= 5x expected Target CPA |

\`\`\`
[ PRE-LAUNCH QA AUDIT ] ---> [ All 7 Items Verified ] ---> [ CLICK PUBLISH ]
\`\`\``,
          codeSnippets: [
            {
              language: 'typescript',
              code: `// Pre-Launch QA Verification System
export interface PreLaunchQAChecklist {
  conversionTagActive: boolean;
  videoNotPrivate: boolean;
  landingPageMobileResponsive: boolean;
  utmParametersValid: boolean;
  negativeExclusionsApplied: boolean;
  budgetAdequate: boolean;
}

export function verifyReadyForLaunch(checklist: PreLaunchQAChecklist): boolean {
  return Object.values(checklist).every(item => item === true);
}`,
              explanation: 'TypeScript validation system ensuring zero campaigns launch without passing all mandatory QA checks.',
              lineByLineBreakdown: [
                'Line 2-9: Defines boolean flags for all 6 mission-critical QA items.',
                'Line 11-13: Verifies all checks evaluate to true before granting launch approval.'
              ]
            }
          ],
          miniPractice: {
            question: 'What will happen if you set your YouTube ad video visibility to "Private" in YouTube Studio before launching your campaign?',
            options: [
              'The ad will deliver normally to premium subscribers',
              'Google Ads will disapprove the ad and cannot serve impressions because private videos are inaccessible to the ad server',
              'The cost per view will decrease by 50%',
              'The video will automatically be converted to a Shorts ad'
            ],
            correctAnswer: 1,
            explanation: 'Ad videos must be set to "Unlisted" (hidden from your public channel feed but accessible via URL) or "Public". "Private" videos cannot be accessed or served by Google Ads.'
          }
        }
      ],
      practiceExercises: [
        {
          id: 'yt-beg-10-ex1',
          title: 'Campaign Setup QA Audit',
          description: 'Conduct a pre-launch verification check on a direct-response video campaign configuration.',
          starterCode: `// Campaign QA state
const launchAudit = {
  campaignName: "US_TOF_VAC_SearchIntent-CRM_MaxConv",
  videoStatus: "Unlisted", // Valid (Unlisted or Public)
  locationMode: "Presence", // Valid
  dailyBudget: 250,
  conversionTagStatus: "Active",
  negativeExclusionsApplied: true,
  isApproved: false
};`,
          instructions: [
            'Review all fields in the launch audit.',
            'Confirm that videoStatus is not "Private" and locationMode is "Presence".'
          ],
          hints: ['All parameters meet pre-launch standards.'],
          validationChecklist: [
            'Verifies Unlisted video status.',
            'Verifies Presence location matching mode.'
          ]
        }
      ],
      keyTakeaways: [
        'Always configure Location targeting to "Presence" to prevent foreign traffic leakage.',
        'Ensure ad videos are uploaded as "Unlisted" or "Public" in YouTube Studio.',
        'Append dynamic ValueTrack UTM parameters to attribute conversions accurately in GA4.'
      ]
    }
  },
  {
    id: 'yt-beg-11',
    title: '11. Basic Optimization and Troubleshooting',
    description: 'Diagnose and resolve low impression delivery, high CPVs, weak View Rates, low CTRs, audience saturation, and ad policy disapprovals.',
    level: 'beginner',
    orderIndex: 11,
    duration: '30 min',
    isProject: false,
    isFinalAssessment: false,
    tags: ['Optimization', 'Troubleshooting', 'Diagnostics', 'Policy Disapproval'],
    lessonContent: {
      overview: 'Every media buyer encounters campaign issues: ads stalling with zero impressions, skyrocketing CPVs, fatigue, and policy disapprovals. Having a systematic diagnostic triage process allows you to isolate the root cause and execute corrective measures calmly and effectively.',
      objectives: [
        'Diagnose and fix zero-impression stalls and low delivery bottlenecks.',
        'Troubleshoot high CPVs, low View Rates (<20%), and weak CTRs (<0.5%).',
        'Handle Google Ads video ad policy disapprovals and appeal processes.'
      ],
      sections: [
        {
          id: 'yt-beg-11-s1',
          title: 'The Zero-Impression Diagnostic Triage Matrix',
          content: `### Systematic Delivery Troubleshooting
If your campaign delivers 0 impressions after 24 to 48 hours, follow this priority triage:

\`\`\`
+-------------------------------------------------------------------------------+
|                      ZERO IMPRESSION DIAGNOSTIC FLOWCHART                     |
|                                                                               |
|  [ 1. CHECK AD APPROVAL STATUS ]                                              |
|     -> Is the ad "Under Review", "Disapproved", or "Eligible (Limited)"?      |
|                                                                               |
|  [ 2. CHECK TARGETING BREADTH ]                                               |
|     -> Are you stacking narrow Placements + Keywords + Demographic filters?  |
|     -> Action: Pause narrow placements and test broad Custom Intent.          |
|                                                                               |
|  [ 3. CHECK BID CEILING ]                                                     |
|     -> Is Target CPA set unrealistically low (e.g. $5 CPA in a $50 market)?  |
|     -> Action: Switch to Maximize Conversions or raise Target CPA by 40%.     |
|                                                                               |
|  [ 4. CHECK BILLING & PAYMENT STATUS ]                                        |
|     -> Is there a billing verification hold on the Google Ads account?        |
+-------------------------------------------------------------------------------+
\`\`\``,
          codeSnippets: [
            {
              language: 'yaml',
              code: `# Diagnostic Triage Decision Tree
triage_steps:
  step_1_policy_check:
    status: "Eligible"
    action: "Proceed to bidding audit"
  step_2_bid_audit:
    current_bid_strategy: "Target CPA ($15.00)"
    market_average_cpa: "$45.00"
    diagnosis: "Bid is 66% below market auction clearing threshold"
    remedy: "Raise Target CPA to $50.00 or switch to Maximize Conversions"
  step_3_targeting_audit:
    stacked_layers: ["Keywords", "Placements", "Demographics"]
    remedy: "Unbundle into isolated single-variable ad groups"`,
              explanation: 'YAML decision tree resolving a zero-impression campaign stall.',
              lineByLineBreakdown: [
                'Line 2-4: Verifies policy eligibility.',
                'Line 5-9: Identifies bid set far below market auction clearing rate.',
                'Line 10-12: Unbundles over-targeted layers.'
              ]
            }
          ],
          miniPractice: {
            question: 'What is the fastest and most reliable way to jumpstart a newly created YouTube Video Action Campaign that is stuck with 0 impressions due to a tight Target CPA bid?',
            options: [
              'Switch the bidding strategy to "Maximize Conversions" for 7-14 days to let the algorithm find initial market auction clearing bids',
              'Delete the ad account and start over',
              'Lower the budget to $1.00 per day',
              'Upload a 4K 60fps video'
            ],
            correctAnswer: 0,
            explanation: 'Switching to Maximize Conversions removes the artificial bid ceiling, allowing Google Smart Bidding to win initial auctions and establish baseline conversion telemetry.'
          }
        },
        {
          id: 'yt-beg-11-s2',
          title: 'Optimizing Weak Creative: Low View Rates & Low CTRs',
          content: `### Creative Optimization Matrix

| Symptom | Primary Root Cause | Corrective Action |
| :--- | :--- | :--- |
| **View Rate < 20%** | Weak, boring, or unqualifying 5-second Hook | Re-edit opening 5 seconds with higher visual energy, text hook, and pattern interrupt |
| **CTR < 0.6%** | Vague Offer or Weak Call to Action | Add explicit on-screen visual arrows, audible CTA ("Click below"), and attach Sitelinks |
| **High CPA / Low CVR** | Landing page disconnect or slow load speed | Align landing page headline with video hook; compress images for < 2s load time |
| **Spike in CPV** | Creative fatigue or audience saturation | Rotate fresh creative variations (new hooks with same core body pitch) |

\`\`\`
[ VIEW RATE < 20% ] =====> FIX HOOK (First 0:00 - 0:05)
[ CTR < 0.6% ] =========> FIX CTA & OFFER (0:45 - 1:15)
[ HIGH CPA / LOW CVR ] => FIX LANDING PAGE & FRICTION
\`\`\``,
          codeSnippets: [
            {
              language: 'typescript',
              code: `// Creative Optimization Triage Function
export function getOptimizationPlan(viewRate: number, ctr: number, cpaVsTarget: number) {
  if (viewRate < 0.20) {
    return "PRIORITY 1: Re-engineer the 5-second hook. Test 3 new opening visual hooks.";
  }
  if (ctr < 0.007) {
    return "PRIORITY 2: Strengthen Call-to-Action. Introduce verbal CTA earlier and attach Sitelinks.";
  }
  if (cpaVsTarget > 1.30) {
    return "PRIORITY 3: Landing page audit. Improve mobile page speed and match headline to video hook.";
  }
  return "STABLE: Creative is performing within optimal benchmarks.";
}`,
              explanation: 'TypeScript helper encoding expert media buyer rules for creative optimization.',
              lineByLineBreakdown: [
                'Line 3-5: Identifies hook weakness when view rate is under 20%.',
                'Line 6-8: Identifies CTA weakness when CTR is under 0.7%.',
                'Line 9-11: Identifies landing page friction when CPA exceeds target by 30%.'
              ]
            }
          ],
          miniPractice: {
            question: 'When a high-performing YouTube ad begins experiencing creative fatigue after 6 weeks (View Rate dropping, CPA rising), what is the most efficient creative fix?',
            options: [
              'Completely rewrite and re-film a 10-minute documentary from scratch',
              'Keep the proven body and pitch, but film and splice 3 new 5-second opening hooks to test at the front of the video',
              'Switch from English to Spanish targeting',
              'Pause the campaign forever'
            ],
            correctAnswer: 1,
            explanation: 'Modular hook testing is the most cost-effective solution: filming 3-5 fresh opening hooks while reusing the proven body and CTA instantly revives fatigued campaigns.'
          }
        },
        {
          id: 'yt-beg-11-s3',
          title: 'Handling Policy Disapprovals & Compliance Appeals',
          content: `### Resolving Ad Disapprovals
Google Ads enforces strict automated policy screening:

1. **Common Disapproval Reasons**:
   - **Deceptive Representations**: Unrealistic income claims or sensational weight loss promises.
   - **Clickbait / Sensational Content**: Excessive capital letters, misleading thumbnail images.
   - **Destination Mismatch / 404**: Landing page URL broken or redirects to a different domain.
   - **Unclear Branding**: Missing brand logo or trade name in the first 10 seconds.

2. **The 3-Step Appeal Process**:
   - In Google Ads, hover over the "Disapproved" status to see the exact policy code.
   - If compliant, click **Appeal** and select "Dispute decision" (requesting human review).
   - If non-compliant, fix the video edit or landing page, re-upload, and resubmit for approval.`,
          codeSnippets: [
            {
              language: 'yaml',
              code: `# Policy Compliance Verification Checklist
compliance_guardrails:
  landing_page_health:
    https_active: true
    privacy_policy_linked: true
    terms_of_service_linked: true
  creative_claims:
    unrealistic_guarantees_removed: true # No "Earn $10,000/day while sleeping"
    substantiated_evidence: true
    clear_audio_and_lighting: true
    brand_name_visible: true`,
              explanation: 'Compliance checklist preventing policy flags before submitting video ads to the Google review queue.',
              lineByLineBreakdown: [
                'Line 3-6: Ensures privacy policy and HTTPS are live on landing page.',
                'Line 7-11: Removes sensationalized claims and verifies visible branding.'
              ]
            }
          ],
          miniPractice: {
            question: 'What is the correct first action if Google automated system incorrectly disapproves an ad for "Unsubstantiated claims" when all claims are backed by clinical studies?',
            options: [
              'Immediately sue Google in federal court',
              'Review the policy reason, click "Appeal" inside Google Ads, and select "Dispute decision" with supporting context for a manual human reviewer',
              'Create 10 duplicate ad accounts',
              'Delete the video from YouTube'
            ],
            correctAnswer: 1,
            explanation: 'Automated AI scanners occasionally trigger false positive policy flags; submitting an Appeal for manual review resolves the majority of legitimate disputes within 24-48 hours.'
          }
        }
      ],
      practiceExercises: [
        {
          id: 'yt-beg-11-ex1',
          title: 'Troubleshooting Triage Protocol',
          description: 'Diagnose two underperforming campaigns and write specific optimization recommendations.',
          starterCode: `// Campaign triage scenarios
const scenarios = [
  {
    campaign: "Camp_A_ZeroSpend",
    status: "Active",
    impressions: 0,
    bidStrategy: "Target CPA ($10.00)",
    targeting: "3 Niche Channels + 5 Narrow Keywords + Age 25-34",
    remedy: ""
  },
  {
    campaign: "Camp_B_LowCTR",
    status: "Active",
    impressions: 100000,
    viewRate: 0.38, // 38%
    ctr: 0.002,     // 0.2%
    remedy: ""
  }
];`,
          instructions: [
            'Set remedy for Camp_A_ZeroSpend to unbundle targeting and raise bid.',
            'Set remedy for Camp_B_LowCTR to strengthen on-screen CTA and add Sitelinks.'
          ],
          hints: ['Camp A has targeting/bid starvation; Camp B has CTA weakness.'],
          validationChecklist: [
            'Resolves Camp A bid and targeting constraints.',
            'Resolves Camp B CTA and offer weakness.'
          ]
        }
      ],
      keyTakeaways: [
        'Zero-impression stalls are almost always caused by overly tight targeting stacks or bids set below market clearing rates.',
        'View Rate measures the Hook; CTR measures the Offer/CTA; CPA measures the Landing Page.',
        'Hook rotation (swapping the first 5 seconds) is the most effective way to revive fatigued campaigns.'
      ]
    }
  },
  {
    id: 'yt-beg-12',
    title: '12. YouTube Analytics, Post-Launch Optimization & Scaling Protocols',
    description: 'Master YouTube Ads reporting analytics, attribution windows, creative fatigue diagnostics, and systematic scaling protocols for beginner campaigns.',
    level: 'beginner',
    orderIndex: 12,
    duration: '35 min',
    isProject: false,
    isFinalAssessment: false,
    tags: ['Analytics', 'Optimization', 'Scaling', 'Attribution', 'Reporting'],
    lessonContent: {
      overview: 'Launching a YouTube campaign is only the first step. Long-term performance marketing success requires disciplined post-launch analytics monitoring, interpreting conversion lag, diagnosing drop-off curves, and methodically scaling daily budgets without triggering machine learning instability.',
      objectives: [
        'Analyze essential YouTube performance metrics: View Rate, Earned Actions, CTC, and EVC.',
        'Diagnose video retention drop-off curves to identify exact second-by-second viewer abandonment.',
        'Execute the 20% Budget Scaling Protocol to ramp spend sustainably while protecting CPA.'
      ],
      sections: [
        {
          id: 'yt-beg-12-s1',
          title: 'Core Video Metrics & Earned Actions Telemetry',
          content: `### Decoding Video Performance Metrics
Beyond standard CPC and CPA, YouTube campaigns produce unique top-of-funnel engagement signals:
1. **Earned Actions**: Free downstream engagements generated by viewers after seeing an ad:
   - **Earned Views**: Additional organic video views from viewers exploring the channel.
   - **Earned Subscribers**: New channel subscribers gained within 7 days of an ad view.
   - **Earned Likes & Shares**: Social amplification with zero additional media cost.
2. **Engaged-View Conversions (EVC)**: Conversions occurring when a viewer watches at least 10 seconds of a skippable ad and converts within 3 days without clicking.`,
          codeSnippets: [
            {
              language: 'json',
              code: `// YouTube Earned Actions Telemetry Log
{
  "campaignName": "US_TOF_VAC_SearchIntent",
  "paidMetrics": {
    "impressions": 125000,
    "paidViews": 43750,
    "viewRatePct": 35.0,
    "spendUSD": 2187.50,
    "directConversions": 48
  },
  "earnedMetrics": {
    "earnedViews": 6200,
    "earnedSubscribers": 142,
    "earnedLikes": 310,
    "earnedShares": 85
  },
  "blendedCPAUSD": 38.37
}`,
              explanation: 'Performance log demonstrating how earned actions lower the effective blended acquisition cost.',
              lineByLineBreakdown: [
                'Line 3-9: Records 43,750 paid views generating 48 direct conversions.',
                'Line 10-15: Captures 6,200 organic earned views and 142 subscribers for free.',
                'Line 16: Blended CPA drops from $45.57 to $38.37 factoring in earned conversions.'
              ]
            }
          ],
          miniPractice: {
            question: 'What are "Earned Subscribers" in YouTube advertising analytics?',
            options: [
              'Subscribers that you purchased from a third-party bot provider',
              'Users who subscribed to your YouTube channel within 7 days of viewing your paid video ad at no additional charge',
              'Subscribers who pay a monthly fee to watch your ads',
              'Subscribers required to unlock Google Ads credits'
            ],
            correctAnswer: 1,
            explanation: 'Earned subscribers represent organic channel followers gained as a direct downstream result of your paid video impressions, provided at no extra cost by Google.'
          }
        },
        {
          id: 'yt-beg-12-s2',
          title: 'Retention Curve Drop-Off Diagnostics',
          content: `### Analyzing Second-by-Second Video Retention
The YouTube Studio Audience Retention Report graphs the percentage of viewers watching at every millisecond:
- **0s - 5s Steep Cliff (> 60% drop)**: Weak hook, poor audio quality, or irrelevant audience targeting.
- **5s - 15s Plateau (Drop < 15%)**: Strong engagement; viewers are invested in the problem.
- **Mid-Video Dip**: Confusing explanation, sudden pacing slowdown, or jarring tone shift.
- **End-Card Drop**: Natural drop when offer is presented; counter by using an interactive holding slide.`,
          codeSnippets: [
            {
              language: 'typescript',
              code: `// Retention Curve Drop-off Analyzer
export function evaluateRetentionHealth(sec3RetentionPct: number, sec30RetentionPct: number) {
  const hookHealth = sec3RetentionPct >= 70 ? "EXCELLENT" : sec3RetentionPct >= 50 ? "GOOD" : "NEEDS_REVISION";
  const bodyHealth = sec30RetentionPct >= 30 ? "STRONG_RETENTION" : "HIGH_MID_DROP";
  return {
    hookHealth,
    bodyHealth,
    action: hookHealth === "NEEDS_REVISION" ? "Reshoot 0-5s visual hook" : "Optimize CTA & Sitelinks"
  };
}`,
              explanation: 'TypeScript helper evaluating second-by-second retention thresholds.',
              lineByLineBreakdown: [
                'Line 3: Benchmarks 3-second retention (70%+ is excellent).',
                'Line 4: Benchmarks 30-second completion rate (30%+ is strong).',
                'Line 6-8: Recommends specific creative fixes based on retention drop.'
              ]
            }
          ],
          miniPractice: {
            question: 'If a 60-second video ad experiences a 75% viewer drop-off between second 0 and second 4, what is the root cause?',
            options: [
              'The background music volume is 1dB too loud',
              'The opening visual hook failed to stop the scroll, or the targeting audience is completely misaligned with the topic',
              'Google Ads billing failed',
              'The video resolution was 1080p instead of 4K'
            ],
            correctAnswer: 1,
            explanation: 'Immediate 0-4s drop-off indicates a weak opening hook, slow visual pacing, or wrong audience match before the 5-second skip mark.'
          }
        },
        {
          id: 'yt-beg-12-s3',
          title: 'The 20% Budget Scaling Protocol',
          content: `### Sustainable Vertical Scaling Rules
Google Ads Smart Bidding algorithms require stability to predict auction conversion probabilities:
1. **The 20% Rule**: Never increase or decrease daily campaign budgets by more than 20% in a 48-hour window.
2. **Learning Phase Protection**: Large budget shifts reset the machine learning model, causing erratic CPM spikes.
3. **Horizontal Scaling**: To scale faster than 20%/48h, duplicate the winning ad group into a new campaign targeting a complementary Custom Search Segment or lookalike audience.`,
          codeSnippets: [
            {
              language: 'yaml',
              code: `# Weekly Budget Scaling Roadmap ($100/day starting budget)
scaling_schedule:
  day_01: { budget_usd: 100.00, status: "LEARNING" }
  day_03: { budget_usd: 120.00, increase_pct: 20, status: "STABLE" }
  day_05: { budget_usd: 144.00, increase_pct: 20, status: "SCALING" }
  day_07: { budget_usd: 172.80, increase_pct: 20, status: "SCALING" }
  day_14: { budget_usd: 300.00, method: "HORIZONTAL_CAMPAIGN_EXPANSION" }`,
              explanation: 'YAML schedule illustrating progressive 20% budget steps combined with horizontal expansion.',
              lineByLineBreakdown: [
                'Line 3-6: Increases daily spend by exactly 20% every 48 hours.',
                'Line 7: Deploys horizontal expansion on day 14 to accelerate scale.'
              ]
            }
          ],
          miniPractice: {
            question: 'Why should daily budgets in Google Ads video campaigns be increased by no more than 20% at a time?',
            options: [
              'To prevent resetting the Smart Bidding machine learning model and causing volatile CPA spikes',
              'Because Google limits credit card charges to 20% increases',
              'Because YouTube servers cannot process higher traffic',
              'To avoid triggering manual copyright reviews'
            ],
            correctAnswer: 0,
            explanation: 'Sudden budget hikes force Google Smart Bidding to bid aggressively in higher-cost auctions, destabilizing the learning model and inflating CPA.'
          }
        }
      ],
      practiceExercises: [
        {
          id: 'yt-beg-12-ex1',
          title: 'Scaling Plan Calculator',
          description: 'Calculate the next 3 budget scaling steps from a $150/day base using the 20% rule.',
          starterCode: `// Calculate 20% scaling steps
const baseBudget = 150.00;
const step1 = baseBudget * 1.20;
const step2 = step1 * 1.20;
const step3 = step2 * 1.20;
console.log({ step1, step2, step3 });`,
          instructions: [
            'Verify step1 is $180.',
            'Verify step2 is $216.',
            'Verify step3 is $259.20.'
          ],
          hints: ['Multiply by 1.20 for each 20% increment.'],
          validationChecklist: [
            'Calculates step1 = 180.',
            'Calculates step2 = 216.',
            'Calculates step3 = 259.20.'
          ]
        }
      ],
      keyTakeaways: [
        'Earned actions (views, subscribers, likes) provide substantial organic value that reduces blended CPA.',
        '0-5s retention drops pinpoint weak hooks; 15-30s drops pinpoint offer or narrative friction.',
        'Scale budgets by maximum 20% every 48 hours to preserve Smart Bidding calibration.'
      ]
    }
  },
  {
    id: 'yt-beg-proj',
    title: '13. Beginner Capstone Project: End-to-End YouTube Launch Blueprint',
    description: 'Synthesize your foundational knowledge by building a comprehensive, production-ready YouTube Direct-Response Campaign Architecture across 12 substantial deliverables.',
    level: 'beginner',
    orderIndex: 13,
    duration: '60 min',
    isProject: true,
    isFinalAssessment: false,
    tags: ['Capstone Project', 'Launch Plan', 'Direct Response', 'Media Planning'],
    projectDetails: {
      overview: 'As the lead growth marketer for an emerging direct-to-consumer or B2B business, you must build a comprehensive, end-to-end YouTube Ads Launch Blueprint. This capstone project requires establishing campaign objectives, audience hypotheses, creative scripting, budgeting, tracking parameters, and optimization protocols.',
      realWorldScenario: 'You are hired by "NexTask"—an innovative workflow automation SaaS company priced at $49/month with an average customer lifetime value of $600. They have never advertised on YouTube and have allocated an initial test budget of $6,000 for Month 1. Your task is to design their complete launch architecture to achieve a Target CPA of under $50 per free trial signup.',
      learningObjectives: [
        'Synthesize campaign objective selection, Video Action Campaign settings, and location hygiene.',
        'Architect high-intent Custom Search Segments, In-Market categories, and negative exclusion lists.',
        'Write a complete 60-second direct-response script utilizing the PAS framework and Google ABCD guidelines.',
        'Establish mathematical unit economics, daily budget pacing, and tracking infrastructure.'
      ],
      requirements: [
        'Complete all 12 substantial deliverables outlined in the project specification.',
        'Ensure the video script follows the ABCD framework and includes pattern interrupts and visual hooks.',
        'Include at least 2 distinct audience ad groups isolating Search Intent from In-Market segments.',
        'Formulate mathematical daily budget calculations using the 5x-10x CPA rule.'
      ],
      deliverables: [
        {
          id: 'del-01',
          title: '1. Business Case & Executive Campaign Brief',
          description: 'Define the core value proposition, ideal customer persona (ICP), target market pain points, and unit economic goals.',
          expectedOutput: 'Comprehensive brief detailing product positioning, $49/mo pricing, $600 LTV, and $50 Target CPA objective.'
        },
        {
          id: 'del-02',
          title: '2. Campaign Objective & Format Selection Specification',
          description: 'Specify the Google Ads campaign objective, campaign subtype, and technical format configuration.',
          expectedOutput: 'Document selecting "Leads/Sales" objective, Video Action Campaign (VAC) responsive subtype with 16:9 and 9:16 assets.'
        },
        {
          id: 'del-03',
          title: '3. Custom Search-Intent Segment Architecture',
          description: 'Build a high-intent Custom Segment containing at least 15 Google Search queries targeting competitors and category solutions.',
          expectedOutput: 'Curated keyword list grouping competitor brand alternatives (e.g. Asana, Monday, ClickUp) and direct pain-point queries.'
        },
        {
          id: 'del-04',
          title: '4. In-Market & Demographic Targeting Definition',
          description: 'Configure demographic filters (Age, Gender, Household Income) and secondary In-Market category segments.',
          expectedOutput: 'Demographic configuration targeting Ages 25-54, Top 30% HHI, and In-Market for Business Operations Software.'
        },
        {
          id: 'del-05',
          title: '5. Negative Placement & Brand Safety Exclusion Matrix',
          description: 'Establish account-level and campaign-level negative placement exclusion lists to eliminate wasted spend.',
          expectedOutput: 'Exclusion rules for kids channels (DL-G), mobile gaming live streams, clickbait news, and non-target languages.'
        },
        {
          id: 'del-06',
          title: '6. 60-Second PAS Direct-Response Video Script',
          description: 'Write a full 60-second video script structured into Problem (0-10s), Agitation (10-25s), Solution (25-45s), and Call to Action (45-60s).',
          expectedOutput: 'Complete production script with synchronized visual scene descriptions, spoken audio voiceover, and on-screen graphics.'
        },
        {
          id: 'del-07',
          title: '7. ABCD Creative Compliance Scorecard',
          description: 'Audit the script against Google ABCD principles (Attract, Brand early, Connect, Direct).',
          expectedOutput: 'Detailed scorecard proving visual hook in 0-3s, brand introduced by 0:05, emotional resonance, and explicit directional CTA.'
        },
        {
          id: 'del-08',
          title: '8. Campaign Naming Taxonomy & Ad Group Structure',
          description: 'Establish standardized delimiter-separated naming conventions for campaigns, ad groups, and creative assets.',
          expectedOutput: 'Hierarchy tree: US_TOF_VAC_SearchIntent_MaxConv with 2 isolated ad groups and 2 creative asset variations.'
        },
        {
          id: 'del-09',
          title: '9. Budgeting, Bidding & Pacing Model',
          description: 'Calculate daily budget allocation across the $6,000 monthly test budget using the 5x-10x CPA rule.',
          expectedOutput: 'Financial plan setting $200/day ($6,000/mo) under Maximize Conversions transitioning to $50 Target CPA.'
        },
        {
          id: 'del-10',
          title: '10. ValueTrack UTM Parameter & Tracking Blueprint',
          description: 'Build the destination URL with dynamic Google Ads ValueTrack macros for GA4 and attribution platforms.',
          expectedOutput: 'Complete URL string with dynamic parameters: utm_source, utm_medium, utm_campaign, {_creativeid}, and {_adgroupname}.'
        },
        {
          id: 'del-11',
          title: '11. Pre-Launch Quality Assurance (QA) Checklist',
          description: 'Complete the 7-point pre-launch verification checklist verifying conversions, unlisted video status, and presence targeting.',
          expectedOutput: 'Signed-off QA audit confirming active conversion tag, unlisted video status, and PRESENCE_ONLY location setting.'
        },
        {
          id: 'del-12',
          title: '12. Post-Launch 14-Day Diagnostic & Optimization Decision Tree',
          description: 'Construct a decision tree outlining specific optimization triggers for View Rate, CTR, CPA, and hook rotation.',
          expectedOutput: 'Flowchart detailing actions if View Rate < 25%, CTR < 0.8%, or CPA exceeds target threshold.'
        }
      ],
      rubric: [
        {
          criteria: 'Strategic Rigor & Objective Alignment',
          points: 25,
          description: 'Properly aligns business goals with Video Action Campaigns, Maximize Conversions bidding, and search intent signals.'
        },
        {
          criteria: 'Audience Architecture & Segmentation',
          points: 25,
          description: 'Isolates Custom Search Intent keywords from In-Market categories with robust negative exclusions.'
        },
        {
          criteria: 'Creative Scripting & ABCD Adherence',
          points: 25,
          description: 'Delivers a high-converting 60s PAS script with early branding, powerful pattern interrupts, and directional CTAs.'
        },
        {
          criteria: 'Technical Architecture & QA Protocol',
          points: 25,
          description: 'Includes ValueTrack UTMs, location presence matching, budget sizing rules, and 14-day optimization logic.'
        }
      ],
      tips: [
        'Focus on search-intent keywords: people searching for competitor tools are your highest ROI audience.',
        'Never let ad videos sit in "Private" status in YouTube Studio—always use "Unlisted".',
        'Set daily budget to at least 5x your target CPA to give Google Smart Bidding statistical breathing room.'
      ]
    }
  }
];

// Final Assessment Task Definition
const BEGINNER_FINAL_ASSESSMENT_TASK = {
  id: 'yt-beg-exam',
  title: '14. Official Beginner Certification Assessment',
  description: 'Demonstrate mastery of YouTube Ads ecosystem fundamentals, account setup, campaign objectives, ad formats, creative hooks, audience targeting, bidding, and analytics.',
  level: 'beginner',
  orderIndex: 14,
  duration: '30 min',
  isProject: false,
  isFinalAssessment: true,
  passingScore: 15,
  totalQuestions: 20,
  tags: ['Certification', 'Exam', 'Beginner Assessment', 'MCQ']
};

// Combine all beginner tasks into one exportable array
const ALL_BEGINNER_TASKS = [
  ...BEGINNER_MODULES,
  BEGINNER_FINAL_ASSESSMENT_TASK
];

// Generate TypeScript Output
const tsOutput = `import { Task, QuizQuestion } from '../../types/roadmap.types';

export const YOUTUBE_ADS_BEGINNER_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(BEGINNER_ASSESSMENT, null, 2)};

export const YOUTUBE_ADS_BEGINNER_TASKS: Task[] = ${JSON.stringify(ALL_BEGINNER_TASKS, null, 2)};
`;

fs.writeFileSync(targetFile, tsOutput, 'utf-8');
console.log(`✅ Successfully generated: ${targetFile} (${ALL_BEGINNER_TASKS.length} tasks, ${BEGINNER_ASSESSMENT.length} MCQs)`);

