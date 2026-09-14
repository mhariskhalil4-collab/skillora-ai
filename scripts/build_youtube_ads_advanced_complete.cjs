const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../src/features/roadmap/data/youtube-ads/youtubeAdsAdvanced.data.ts');

const advancedTheoryModules = [
  {
    id: "yt-adv-01",
    title: "1. Ads Data Hub (ADH) & BigQuery SQL for Video Measurement",
    summary: "Querying aggregated YouTube ad impression and conversion logs in Ads Data Hub with BigQuery SQL and differential privacy aggregation controls.",
    order: 1,
    duration: "45 min",
    tags: ["Ads Data Hub", "BigQuery SQL", "Differential Privacy", "Clean Room", "Attribution"],
    sections: [
      {
        id: "yt-adv-01-s1",
        title: "Ads Data Hub Architecture & Privacy Guardrails",
        content: `### Enterprise Clean Room Video Analytics with Ads Data Hub

With the deprecation of third-party cookies and strict mobile privacy frameworks (Apple ATT, Android Privacy Sandbox), raw device identifiers and user IDs are masked. **Ads Data Hub (ADH)**, built on Google Cloud Platform and BigQuery, allows enterprise advertisers to join first-party CRM data with Google's log-level YouTube impression, view, and engagement records in a secure privacy-safe environment.

\`\`\`
+----------------------------+       +----------------------------+
| Google Ads YouTube Event   |       | First-Party Data (BigQuery)|
| Impression Logs (Private)  |       | Hashed CRM / Offline Sales |
+--------------+-------------+       +--------------+-------------+
               \\                           /
                \\                         /
                 v                       v
               +---------------------------+
               | Ads Data Hub SQL Engine   |
               | Aggregation Filter (>=50) |
               +-------------+-------------+
                             |
                             v
               +---------------------------+
               | Privacy-Safe Cohort       |
               | Attribution & Reach Table |
               +---------------------------+
\`\`\`

#### Key Privacy Rules
1. **50-User Threshold**: Every output row must represent at least 50 distinct individual users. If fewer than 50 users meet the group criteria, the row is filtered out by the privacy check.
2. **Differential Privacy Noise**: Small mathematical noise additions prevent individual re-identification via subtraction across repeated queries.
3. **No Row-Level Export**: You cannot export individual \`user_id\` or \`device_id\` records.`,
        codeSnippets: [
          {
            language: "sql",
            code: `-- Ads Data Hub Query: Cross-Device Frequency & Conversion Cohort Analysis
SELECT
  campaign_id,
  creative_id,
  frequency_bucket,
  COUNT(DISTINCT user_id) AS total_users_reached,
  COUNT(DISTINCT conversion_id) AS total_conversions,
  ROUND(SAFE_DIVIDE(COUNT(DISTINCT conversion_id), COUNT(DISTINCT user_id)) * 100, 2) AS conversion_rate_pct,
  ROUND(SUM(conversion_revenue_micros) / 1000000, 2) AS total_revenue_usd
FROM (
  SELECT
    i.campaign_id,
    i.creative_id,
    i.user_id,
    CASE 
      WHEN COUNT(i.impression_id) = 1 THEN '1x (Single View)'
      WHEN COUNT(i.impression_id) BETWEEN 2 AND 3 THEN '2-3x (Optimal Reach)'
      WHEN COUNT(i.impression_id) BETWEEN 4 AND 6 THEN '4-6x (Reinforced)'
      ELSE '7x+ (High Saturation)'
    END AS frequency_bucket,
    c.conversion_id,
    c.conversion_revenue_micros
  FROM adh.google_ads_impressions i
  LEFT JOIN adh.google_ads_conversions c
    ON i.user_id = c.user_id
    AND c.conversion_timestamp >= i.impression_timestamp
    AND c.conversion_timestamp <= TIMESTAMP_ADD(i.impression_timestamp, INTERVAL 14 DAY)
  WHERE i.event_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
  GROUP BY i.campaign_id, i.creative_id, i.user_id, c.conversion_id, c.conversion_revenue_micros
)
GROUP BY campaign_id, creative_id, frequency_bucket
-- Privacy constraint compliance
HAVING COUNT(DISTINCT user_id) >= 50
ORDER BY total_users_reached DESC;`,
            explanation: "SQL query calculating conversion rate by frequency bucket while adhering to the 50-user differential privacy threshold in Ads Data Hub.",
            lineByLineBreakdown: [
              "Line 1-8: Aggregates distinct user reach, conversions, and total revenue.",
              "Line 14-20: Buckets ad impression frequency per user over 30 days.",
              "Line 22-26: Left-joins conversions occurring within a 14-day window.",
              "Line 31: Enforces the mandatory HAVING COUNT(DISTINCT user_id) >= 50 privacy requirement."
            ]
          }
        ],
        miniPractice: {
          question: "What happens if an Ads Data Hub query returns a row containing 35 distinct users?",
          options: [
            "The row is automatically dropped by ADH's differential privacy filter",
            "The row is exported with synthetic dummy data added",
            "The query succeeds but charges a double BigQuery fee",
            "The entire Google Ads account is paused"
          ],
          correctAnswer: 0,
          explanation: "Ads Data Hub enforces a strict minimum threshold of 50 distinct users per output row; groups below 50 are dropped to prevent re-identification."
        }
      },
      {
        id: "yt-adv-01-s2",
        title: "Joining Offline CRM Purchases with YouTube Ad Impressions",
        content: `### First-Party CRM Matching in ADH

By uploading SHA-256 hashed customer identifiers into a private BigQuery dataset in your own Google Cloud project, you can join offline store purchases, phone sales, and enterprise contracts with online YouTube video touchpoints.

\`\`\`
+------------------------------------+
|  Enterprise BigQuery CRM Dataset   |
|  (Hashed Email, Phone, Order USD)  |
+-----------------+------------------+
                  |
                  | (Joined on user_id)
                  v
+------------------------------------+
|  ADH YouTube Impression Logs       |
|  (Campaign ID, Creative, Placement)|
+------------------------------------+
\`\`\``,
        codeSnippets: [
          {
            language: "sql",
            code: `-- Joining First-Party CRM Sales with YouTube In-Stream Ads
SELECT
  crm.customer_tier,
  COUNT(DISTINCT yt.user_id) AS exposed_customers,
  SUM(yt.cost_micros) / 1000000 AS ad_spend_usd,
  COUNT(DISTINCT crm.transaction_id) AS offline_transactions,
  SUM(crm.transaction_value_usd) AS offline_revenue_usd
FROM \`my-gcp-project.crm_data.hashed_offline_sales\` crm
JOIN adh.google_ads_impressions yt
  ON crm.user_id = yt.user_id
WHERE yt.event_date BETWEEN '2026-08-01' AND '2026-08-31'
  AND yt.inventory_type = 'YOUTUBE_IN_STREAM'
GROUP BY crm.customer_tier
HAVING COUNT(DISTINCT yt.user_id) >= 50;`,
            explanation: "SQL query joining first-party BigQuery CRM transactions with YouTube impression logs.",
            lineByLineBreakdown: [
              "Line 1-6: Computes exposed reach, ad spend, offline transactions, and total revenue.",
              "Line 7-9: Joins private GCP BigQuery dataset with ADH impressions table.",
              "Line 13: Enforces privacy compliance filter."
            ]
          }
        ],
        miniPractice: {
          question: "Where is first-party CRM data stored prior to joining within Ads Data Hub?",
          options: [
            "In a private Google Cloud BigQuery dataset owned by the advertiser",
            "On a public GitHub repository",
            "Directly inside Google Tag Manager client container",
            "In the YouTube Studio Comments manager"
          ],
          correctAnswer: 0,
          explanation: "Advertisers store their hashed customer data in their private Google Cloud BigQuery project, which ADH accesses securely."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-01-ex1",
        title: "Writing an ADH Video Reach Query",
        description: "Write an ADH SQL query calculating unique user reach and conversion rate grouped by creative asset, ensuring the 50-user threshold is enforced.",
        starterCode: "-- Write your ADH SQL Query\nSELECT\n  creative_id,\n  COUNT(DISTINCT user_id) AS reached_users\nFROM adh.google_ads_impressions\nGROUP BY creative_id;",
        instructions: [
          "Add HAVING COUNT(DISTINCT user_id) >= 50 to the query.",
          "Include safe division for conversion rate calculation."
        ],
        hints: ["Always check the privacy threshold rule in ADH."],
        validationChecklist: [
          "Contains HAVING clause with >= 50.",
          "Groups by creative_id."
        ]
      }
    ],
    keyTakeaways: [
      "Ads Data Hub enables SQL joins on Google YouTube ad logs and CRM BigQuery tables without exposing user IDs.",
      "All output rows must satisfy the minimum 50-user distinct aggregation threshold.",
      "Allows accurate multi-touch attribution, reach overlap, and offline sales lift validation."
    ]
  },
  {
    id: "yt-adv-02",
    title: "2. Google Ads Scripts & Video Campaign Automation",
    summary: "Writing and scheduling JavaScript automation scripts to monitor video CPA anomalies, pause fatigued ad groups, and manage real-time alerts.",
    order: 2,
    duration: "45 min",
    tags: ["Google Ads Scripts", "JavaScript V8", "Campaign Automation", "Slack Webhooks", "Anomaly Detection"],
    sections: [
      {
        id: "yt-adv-02-s1",
        title: "Automated Governance with Google Ads JavaScript V8",
        content: `### Real-Time Video Automation & Alerting

Managing dozens of video campaigns across multiple regions requires programmatic anomaly detection. **Google Ads Scripts** execute modern JavaScript (V8 engine) directly inside your Google Ads account, querying performance reports and mutating campaigns automatically.

\`\`\`
+--------------------------------------------------------------------+
|               Google Ads Script Automation Architecture            |
|                                                                    |
|   +-----------------------+     +------------------------------+   |
|   | Hourly Script Trigger | --> | AdsApp.search(GAQL Query)    |   |
|   +-----------------------+     +---------------+--------------+   |
|                                                 |                  |
|                                                 v                  |
|                                 +------------------------------+   |
|                                 | CPA & Spend Anomaly Checker  |   |
|                                 +---------------+--------------+   |
|                                                 |                  |
|                                                 v                  |
|                                 +------------------------------+   |
|                                 | Trigger Slack Webhook Alert  |   |
|                                 +------------------------------+   |
+--------------------------------------------------------------------+
\`\`\``,
        codeSnippets: [
          {
            language: "javascript",
            code: `/**
 * Automated YouTube Video CPA Anomaly & Fatigue Monitor
 * Scans video ad groups and fires real-time Slack alerts for high CPA
 */
function main() {
  const CPA_THRESHOLD_USD = 45.00;
  const MIN_SPEND_FOR_EVAL_USD = 100.00;
  const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/T0000/B0000/XXXXX';

  const query = \`
    SELECT 
      campaign.id, 
      campaign.name, 
      ad_group.id, 
      ad_group.name, 
      metrics.cost_micros, 
      metrics.conversions, 
      metrics.cost_per_conversion
    FROM ad_group
    WHERE campaign.advertising_channel_type = 'VIDEO'
      AND campaign.status = 'ENABLED'
      AND ad_group.status = 'ENABLED'
      AND segments.date DURING LAST_7_DAYS
  \`;

  const report = AdsApp.search(query);
  const flagged = [];

  while (report.hasNext()) {
    const row = report.next();
    const cost = row.metrics.costMicros / 1000000;
    const conversions = parseFloat(row.metrics.conversions);
    const cpa = conversions > 0 ? cost / conversions : cost;

    if (cost >= MIN_SPEND_FOR_EVAL_USD && (conversions === 0 || cpa > CPA_THRESHOLD_USD)) {
      flagged.push({
        campaign: row.campaign.name,
        adGroup: row.adGroup.name,
        spend: cost.toFixed(2),
        conversions: conversions,
        cpa: cpa.toFixed(2)
      });
    }
  }

  if (flagged.length > 0) {
    sendSlackNotification(SLACK_WEBHOOK_URL, flagged);
  }
}

function sendSlackNotification(webhookUrl, alerts) {
  let text = '*🚨 YouTube Ads Anomaly Alert: High CPA Detected*\\n';
  alerts.forEach(a => {
    text += \`• *\${a.campaign}* > *\${a.adGroup}* | Spend: $\${a.spend} | Conv: \${a.conversions} | CPA: $\${a.cpa}\\n\`;
  });
  UrlFetchApp.fetch(webhookUrl, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ text: text })
  });
}`,
            explanation: "JavaScript Google Ads script that audits video campaigns and posts formatted alerts to Slack.",
            lineByLineBreakdown: [
              "Line 6-8: Configures CPA threshold ($45) and minimum evaluation spend ($100).",
              "Line 10-21: Queries active video ad group metrics over the last 7 days.",
              "Line 29-37: Identifies ad groups exceeding the target CPA threshold.",
              "Line 45-56: Dispatches an HTTP POST payload to the Slack webhook endpoint."
            ]
          }
        ],
        miniPractice: {
          question: "Which runtime engine powers modern Google Ads Scripts?",
          options: [
            "V8 JavaScript Engine",
            "Rhino Engine",
            "Python 2.7",
            "PHP 5.6"
          ],
          correctAnswer: 0,
          explanation: "Google Ads Scripts uses the high-performance V8 JavaScript engine, supporting modern ES6+ syntax and fast execution."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-02-ex1",
        title: "Deploying a Placement Exclusion Script",
        description: "Write a Google Ads script that retrieves all active video campaigns and attaches a master negative placement exclusion list.",
        starterCode: "function main() {\n  // Write shared placement attachment logic\n}",
        instructions: [
          "Iterate through AdsApp.videoCampaigns().",
          "Ensure only enabled campaigns are processed."
        ],
        hints: ["Use campaign.withCondition('status = ENABLED')."],
        validationChecklist: [
          "Includes campaign condition filter.",
          "Processes video campaigns."
        ]
      }
    ],
    keyTakeaways: [
      "Google Ads Scripts enable automated governance and real-time anomaly detection across video campaigns.",
      "V8 JavaScript engine supports modern async workflows and API webhooks to Slack or MS Teams.",
      "Shared negative placement sets prevent ad spend waste across newly launched video campaigns automatically."
    ]
  },
  {
    id: "yt-adv-03",
    title: "3. YouTube Live Stream Advertising & Sponsorship Integrations",
    summary: "Executing live stream ad insertions, co-stream sponsorships, automated live chat pinned promotions, and real-time bid boosts.",
    order: 3,
    duration: "40 min",
    tags: ["Live Stream Ads", "Mid-Roll Insertion", "Pinned Chat", "Sponsorships", "Real-Time Bidding"],
    sections: [
      {
        id: "yt-adv-03-s1",
        title: "Live Stream Ad Insertion Mechanics",
        content: `### Capturing Synchronous Attention on YouTube Live

Live streams generate 3x higher comment rates and 4x longer session durations than on-demand video. Monetizing and scaling YouTube Live campaigns involves direct mid-roll ad insertions during broadcasts, synchronized pinned chat CTAs, and automated bid boosting during peak concurrent viewership (CCV).

\`\`\`
+-------------------------------------------------------------+
|               Live Stream Broadcast (YouTube)               |
|                                                             |
|   +-----------------------------------------------------+   |
|   | Video Stream (1080p60 / 4K)                         |   |
|   | [Live Mid-Roll Ad Inserted Every 15-20 Mins]        |   |
|   +-----------------------------------------------------+   |
|                                                             |
|   +--------------------------+  +-----------------------+   |
|   | Live Chat Stream         |  | Pinned Banner / Offer |   |
|   | Dynamic Hyperlink Pins   |  | Tracked UTM Promo Code|   |
|   +--------------------------+  +-----------------------+   |
+-------------------------------------------------------------+
\`\`\``,
        codeSnippets: [
          {
            language: "json",
            code: `{
  "liveBroadcastConfig": {
    "broadcastTitle": "Summer Product Launch & Developer Keynote Live",
    "adInsertionMode": "HYBRID_MANUAL_FALLBACK",
    "targetAdFrequencyMinutes": 18,
    "maxMidrollDurationSeconds": 30,
    "chatModeration": {
      "pinnedMessage": {
        "text": "🎉 Special Launch Offer: Get 25% off with code LIVE25 at checkout!",
        "linkUrl": "https://brand.com/launch?utm_source=youtube_live&utm_medium=pinned_chat",
        "durationMinutes": 60
      }
    }
  }
}`,
            explanation: "Configuration schema for live stream ad insertions and pinned chat promotional links.",
            lineByLineBreakdown: [
              "Line 4: Sets hybrid manual/automated mid-roll insertion mode.",
              "Line 5: Targets 18-minute ad frequency spacing.",
              "Line 8-12: Configures pinned promotional message and tracked destination URL."
            ]
          }
        ],
        miniPractice: {
          question: "Why are pinned live chat links uniquely effective during a live stream?",
          options: [
            "They remain static at the top of the fast-scrolling chat, giving viewers continuous click access",
            "They automatically charge viewers' credit cards",
            "They disable all other live comments",
            "They double the video frame rate"
          ],
          correctAnswer: 0,
          explanation: "Pinned live chat messages stay anchored at the top of the chat window, driving click-through rates up to 4.5% during live demonstrations."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-03-ex1",
        title: "Live Stream Pinned Offer Setup",
        description: "Draft a JSON configuration for a live stream broadcast with a 20-minute mid-roll interval and a pinned chat CTA.",
        starterCode: "{\n  \"broadcast\": {\n    \"adFrequencyMinutes\": 20\n  }\n}",
        instructions: [
          "Include a pinnedMessage object with text and linkUrl.",
          "Add UTM tracking parameters to the destination link."
        ],
        hints: ["Include utm_source=youtube_live in the URL."],
        validationChecklist: [
          "Contains pinnedMessage text.",
          "Includes UTM tracking parameters."
        ]
      }
    ],
    keyTakeaways: [
      "YouTube Live mid-rolls can be triggered automatically by AI or manually timed to broadcast breaks.",
      "Pinned live chat messages drive direct-response CTRs exceeding 4.5% during live demonstrations.",
      "Programmatic bid multipliers during high-traffic stream moments capture instant branded search surge."
    ]
  },
  {
    id: "yt-adv-04",
    title: "4. Multi-Touch Attribution & Incrementality Testing for YouTube",
    summary: "Implementing geo-matched market testing, randomized user-level holdouts, and media mix modeling (MMM) with Google Meridian for true video incrementality.",
    order: 4,
    duration: "50 min",
    tags: ["Incrementality", "Geo-Lift", "iROAS", "Google Meridian", "MMM"],
    sections: [
      {
        id: "yt-adv-04-s1",
        title: "Randomized Geo-Lift & Incrementality Math",
        content: `### Measuring True Causal Impact Beyond Last-Click

Last-click attribution severely undervalues top-and-middle funnel YouTube video ads because viewers often watch a video on mobile or TV and convert later via direct URL or brand search. **Incrementality Testing** isolates causal lift from organic baseline sales.

\`\`\`
                     +---------------------------------------+
                     |    Total Matched Target Audience      |
                     +-------------------+-------------------+
                                         |
                       +-----------------+-----------------+
                       |                                   |
                       v                                   v
        +-----------------------------+     +-----------------------------+
        |   Treatment Group (85%)     |     |     Holdout Group (15%)     |
        |   Exposed to YouTube Ads    |     |   Ghost Ad / Unexposed      |
        +--------------+--------------+     +--------------+--------------+
                       |                                   |
                       v                                   v
             Treatment Conversions                 Baseline Conversions
                       \\                                   /
                        \\                                 /
                         v                               v
            +------------------------------------------------+
            |  Incremental Lift = Treatment - Baseline       |
            |  iROAS = Incremental Revenue / Ad Spend        |
            +------------------------------------------------+
\`\`\``,
        codeSnippets: [
          {
            language: "python",
            code: `import pandas as pd
import numpy as np

def calculate_geo_incrementality(spend, treatment_sales, control_sales, pre_treatment_ratio):
    """
    Calculates Incremental Lift, iCPA, and iROAS from a matched-market geo experiment.
    pre_treatment_ratio = baseline historical sales ratio (treatment / control)
    """
    expected_baseline = control_sales * pre_treatment_ratio
    incremental_sales = treatment_sales - expected_baseline
    
    iroas = incremental_sales / spend
    lift_percentage = (incremental_sales / expected_baseline) * 100
    
    return {
        "ad_spend": round(spend, 2),
        "actual_sales": round(treatment_sales, 2),
        "expected_baseline": round(expected_baseline, 2),
        "incremental_revenue": round(incremental_sales, 2),
        "iroas": round(iroas, 2),
        "lift_pct": round(lift_percentage, 2)
    }

# Example Experiment Run: $50,000 spend
res = calculate_geo_incrementality(
    spend=50000.00,
    treatment_sales=280000.00,
    control_sales=210000.00,
    pre_treatment_ratio=1.05
)
print(res)
# Output: {'ad_spend': 50000.0, 'actual_sales': 280000.0, 'expected_baseline': 220500.0, 'incremental_revenue': 59500.0, 'iroas': 1.19, 'lift_pct': 26.98}`,
            explanation: "Python calculation of Incremental Revenue, iROAS, and percentage lift from a matched-market experiment.",
            lineByLineBreakdown: [
              "Line 8: Projects baseline sales in the treatment market based on pre-test historical correlation.",
              "Line 9: Isolates incremental sales strictly caused by the ad campaign.",
              "Line 11-12: Calculates iROAS and percentage lift above baseline.",
              "Line 24-29: Executes calculation with $50k spend, yielding 1.19 iROAS."
            ]
          }
        ],
        miniPractice: {
          question: "What is the key advantage of iROAS over traditional platform ROAS?",
          options: [
            "iROAS measures only net-new revenue that would not have occurred without the ad",
            "iROAS is always 10x higher than standard ROAS",
            "iROAS eliminates all advertising costs",
            "iROAS is only calculated on weekends"
          ],
          correctAnswer: 0,
          explanation: "iROAS (Incremental Return on Ad Spend) evaluates true incremental revenue generated above the unexposed baseline, eliminating organic cannibalization credit."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-04-ex1",
        title: "Calculating iCPA in Python",
        description: "Write a function that calculates Incremental Cost Per Acquisition given total spend, treatment conversions, and control conversions.",
        starterCode: "def calculate_icpa(spend, treatment_conv, control_conv, ratio):\n    # Calculate incremental CPA\n    pass",
        instructions: [
          "Subtract (control_conv * ratio) from treatment_conv to find incremental conversions.",
          "Divide spend by incremental conversions."
        ],
        hints: ["iCPA = spend / incremental_conversions."],
        validationChecklist: [
          "Calculates incremental conversions.",
          "Returns iCPA."
        ]
      }
    ],
    keyTakeaways: [
      "Last-click attribution undervalues YouTube; randomized conversion lift and geo-lift isolate causal impact.",
      "iROAS (Incremental Return on Ad Spend) evaluates only revenue that would not have occurred without the ad.",
      "Google Meridian MMM uses experimental lift priors to prevent organic brand cannibalization misattribution."
    ]
  },
  {
    id: "yt-adv-05",
    title: "5. Clean Room Data Integration & First-Party CDPs",
    summary: "Connecting CDPs (Segment, Tealium, mParticle) and Snowflake / BigQuery clean rooms to Google Customer Match via automated API pipelines.",
    order: 5,
    duration: "40 min",
    tags: ["Customer Match", "CDP", "SHA-256", "Google Ads API", "Data Pipelines"],
    sections: [
      {
        id: "yt-adv-05-s1",
        title: "First-Party CDP Streaming Architecture",
        content: `### Enterprise Customer Match Pipelines

Manual CSV uploads create audience staleness and compliance risks. Enterprise systems stream first-party CRM cohorts from CDPs directly into Google Ads API using automated microservices with client-side SHA-256 normalization.

\`\`\`
+------------------+       +-------------------+       +-----------------------+
| Snowflake / CDP  | ----> | Cloud Function    | ----> | Google Ads API        |
| (Raw First-Party)|       | (SHA-256 Normal.) |       | (CustomerMatchService)|
+------------------+       +-------------------+       +-----------------------+
\`\`\``,
        codeSnippets: [
          {
            language: "python",
            code: `import hashlib
import re

def normalize_and_hash_email(email_str: str) -> str:
    """Normalizes and hashes email string per Google Customer Match specs."""
    if not email_str:
        return ""
    cleaned = email_str.strip().lower()
    parts = cleaned.split('@')
    if len(parts) == 2 and parts[1] in ['gmail.com', 'googlemail.com']:
        local_part = parts[0].replace('.', '')
        local_part = local_part.split('+')[0]
        cleaned = f"{local_part}@{parts[1]}"
    return hashlib.sha256(cleaned.encode('utf-8')).hexdigest()

def normalize_and_hash_phone(phone_str: str) -> str:
    """Normalizes phone to E.164 and hashes."""
    if not phone_str:
        return ""
    digits_only = re.sub(r'\\D', '', phone_str)
    if not digits_only.startswith('+'):
        digits_only = '+' + digits_only
    return hashlib.sha256(digits_only.encode('utf-8')).hexdigest()

print(normalize_and_hash_email(" John.Doe+testing@Gmail.com "))
# Output: SHA-256 hex string`,
            explanation: "Python normalization and SHA-256 hashing functions conforming to Google Customer Match API requirements.",
            lineByLineBreakdown: [
              "Line 7-13: Trims whitespace, converts to lowercase, and strips Gmail dots/aliases.",
              "Line 14: Encodes in UTF-8 and generates SHA-256 hash.",
              "Line 18-23: Normalizes phone numbers to E.164 format prior to hashing."
            ]
          }
        ],
        miniPractice: {
          question: "How should a phone number be formatted before SHA-256 hashing for Google Ads Customer Match?",
          options: [
            "E.164 international format with leading + sign (e.g. +14155552671)",
            "Local 7-digit format with hyphens",
            "Base64 encoded string",
            "Plain text without area code"
          ],
          correctAnswer: 0,
          explanation: "Google Customer Match requires phone numbers formatted in E.164 international format (+country code followed by subscriber number)."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-05-ex1",
        title: "Normalizing Customer Records",
        description: "Write a function that normalizes a list of customer records containing email and phone numbers.",
        starterCode: "def process_customer_records(records):\n    # Process and hash records\n    pass",
        instructions: [
          "Iterate through records.",
          "Apply email and phone SHA-256 hashing functions."
        ],
        hints: ["Strip whitespace before hashing."],
        validationChecklist: [
          "Iterates through records.",
          "Applies SHA-256 hashing."
        ]
      }
    ],
    keyTakeaways: [
      "Customer Match list streaming via API increases match rates and eliminates stale audience lag.",
      "Strict E.164 phone formatting and Gmail-normalized SHA-256 hashing protect user privacy.",
      "Segmenting CRM cohorts by customer lifetime value enables precision value-based Smart Bidding."
    ]
  },
  {
    id: "yt-adv-06",
    title: "6. Advanced YouTube SEO & Video Discovery Advertising",
    summary: "Synergizing organic video search optimization (titles, tags, structured chapters) with In-Feed discovery ads to dominate high-intent keywords.",
    order: 6,
    duration: "40 min",
    tags: ["YouTube SEO", "In-Feed Ads", "Schema JSON-LD", "Search Flywheel", "Keywords"],
    sections: [
      {
        id: "yt-adv-06-s1",
        title: "The Organic-Paid Flywheel & Schema.org VideoObject",
        content: `### Dominating YouTube & Google Video Search

YouTube is the world's second-largest search engine. Running paid In-Feed Video Ads on high-intent search queries accelerates initial watch time and completion signals, triggering organic recommendation distribution.

\`\`\`
       +-----------------------------------------------------+
       | High-Intent Search Query: "best enterprise crm 2026"|
       +--------------------------+--------------------------+
                                  |
               +------------------+------------------+
               |                                     |
               v                                     v
+-------------------------------+   +-------------------------------+
| Paid In-Feed Video Ad (Top)   |   | Organic Video Rank #1 (SEO)   |
| High-Converting Thumbnail/CTA |   | Keyword-Rich Title & Chapters |
+---------------+---------------+   +---------------+---------------+
\`\`\``,
        codeSnippets: [
          {
            language: "html",
            code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Complete Enterprise Cloud Migration Guide 2026",
  "description": "Learn how to migrate legacy on-premise infrastructure to Google Cloud Platform with zero downtime.",
  "thumbnailUrl": [
    "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  ],
  "uploadDate": "2026-08-15T08:00:00+08:00",
  "duration": "PT14M25S",
  "embedUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "hasPart": [
    {
      "@type": "Clip",
      "name": "Architecture Overview",
      "startOffset": 0,
      "endOffset": 180,
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=0s"
    },
    {
      "@type": "Clip",
      "name": "Database Replication Setup",
      "startOffset": 181,
      "endOffset": 450,
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=181s"
    }
  ]
}
</script>`,
            explanation: "Schema.org VideoObject JSON-LD markup enabling Google Search Key Moments indexing.",
            lineByLineBreakdown: [
              "Line 2-5: Defines VideoObject metadata, title, and description.",
              "Line 9-11: Specifies ISO 8601 upload date and video duration.",
              "Line 12-28: Declares structured clips/chapters for search engine timestamps."
            ]
          }
        ],
        miniPractice: {
          question: "What is the primary benefit of Schema.org VideoObject markup on landing pages?",
          options: [
            "It enables Google Search to display rich video snippets with indexed Key Moments",
            "It gives the video 10,000 free views on YouTube",
            "It disables all ads on the page",
            "It prevents viewers from pausing the video"
          ],
          correctAnswer: 0,
          explanation: "VideoObject JSON-LD structured data allows search engines to index video chapters and present interactive Key Moments directly in search results."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-06-ex1",
        title: "Building Schema JSON-LD Clips",
        description: "Construct a VideoObject JSON-LD script containing at least 2 distinct Clip objects with startOffset and endOffset.",
        starterCode: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"VideoObject\"\n}",
        instructions: [
          "Add name, description, and duration.",
          "Add hasPart array with two Clip objects."
        ],
        hints: ["Use ISO 8601 format for duration (e.g. PT10M)."],
        validationChecklist: [
          "Contains hasPart array.",
          "Includes startOffset and endOffset."
        ]
      }
    ],
    keyTakeaways: [
      "Running In-Feed ads on specific search queries builds initial watch time signals that trigger organic algorithmic distribution.",
      "VideoObject JSON-LD schema with structured clips enables Google SERP Key Moments indexing.",
      "Combining paid In-Feed ad placement with organic Rank #1 video yields over 60% click share on target keywords."
    ]
  },
  {
    id: "yt-adv-07",
    title: "7. Brand Safety Tiering & Suitability Verification",
    summary: "Navigating GARM framework brand suitability tiers, configuring third-party verification (IAS, DoubleVerify, Zefr), and custom topic exclusions.",
    order: 7,
    duration: "40 min",
    tags: ["Brand Safety", "GARM", "Zefr", "DoubleVerify", "Suitability"],
    sections: [
      {
        id: "yt-adv-07-s1",
        title: "GARM Framework Alignment & Verification Partners",
        content: `### Enterprise Brand Protection

Global brands operate under the **Global Alliance for Responsible Media (GARM)** framework, using inventory suitability tiers: Expanded, Standard, and Limited Inventory, complemented by AI verification partners (Zefr, IAS, DoubleVerify).

\`\`\`
+--------------------------------------------------------------------+
|                YouTube Content Suitability Tiers                   |
+--------------------+-----------------------+-----------------------+
| Expanded Inventory | Standard Inventory    | Limited Inventory     |
| (Maximum Reach)    | (Default Recommended) | (Strict Safety)       |
| Excludes extreme   | Excludes repeated     | Excludes all moderate |
| hate / profanity   | profanity, violence   | sensitivity / gaming  |
+--------------------+-----------------------+-----------------------+
\`\`\``,
        codeSnippets: [
          {
            language: "json",
            code: `{
  "brandSafetyProfileConfig": {
    "advertiserId": "ADV_99812",
    "inventoryTier": "STANDARD_INVENTORY",
    "excludedContentThemes": [
      "TRAGEDIES_AND_CONFLICTS",
      "SENSITIVE_SOCIAL_ISSUES",
      "PROFANITY_AND_ROUGH_LANGUAGE",
      "SEXUALLY_SUGGESTIVE_CONTENT"
    ],
    "excludedDigitalContentLabels": [
      "DL_MA",
      "DL_T_NOT_YET_RATED"
    ],
    "thirdPartyVerification": {
      "partner": "ZEFR_CONTEXTUAL_ENGINE",
      "garmRiskLevel": "LOW_RISK_ONLY",
      "autoExclusionSync": true
    }
  }
}`,
            explanation: "Brand safety profile configuration mapping GARM suitability tiers and third-party verification parameters.",
            lineByLineBreakdown: [
              "Line 3: Selects Standard Inventory tier.",
              "Line 4-9: Configures excluded sensitive content themes.",
              "Line 10-13: Excludes mature (DL_MA) and non-rated content labels.",
              "Line 14-18: Links Zefr AI contextual verification engine."
            ]
          }
        ],
        miniPractice: {
          question: "Which third-party verification partner specializes in frame-by-frame contextual video AI analysis mapped to GARM standards?",
          options: [
            "Zefr",
            "Google Analytics 4",
            "Zapier",
            "WordPress"
          ],
          correctAnswer: 0,
          explanation: "Zefr uses proprietary video AI to evaluate video imagery, audio transcripts, and metadata against GARM brand safety categories."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-07-ex1",
        title: "Configuring Brand Safety Exclusions",
        description: "Draft a brand safety profile in JSON excluding DL_MA and sensitive tragedy content themes.",
        starterCode: "{\n  \"inventoryTier\": \"STANDARD_INVENTORY\"\n}",
        instructions: [
          "Add excludedDigitalContentLabels with DL_MA.",
          "Add excludedContentThemes."
        ],
        hints: ["Include TRAGEDIES_AND_CONFLICTS in excluded themes."],
        validationChecklist: [
          "Excludes DL_MA.",
          "Specifies excluded themes."
        ]
      }
    ],
    keyTakeaways: [
      "The GARM framework standardizes 11 sensitive content categories across YouTube and partner networks.",
      "Third-party verification partners (Zefr, IAS, DoubleVerify) provide independent video-level suitability auditing.",
      "Excluding non-rated and mature content labels ensures brand protection without unnecessarily throttling reach."
    ]
  },
  {
    id: "yt-adv-08",
    title: "8. Video Ad Sequencing (VAS) Advanced Scripting & Paths",
    summary: "Architecting multi-step dynamic video ad sequences with conditional branch logic, frequency capping, and cross-device step transitions.",
    order: 8,
    duration: "45 min",
    tags: ["Video Ad Sequencing", "VAS", "Narrative Arcs", "Branch Logic", "Frequency"],
    sections: [
      {
        id: "yt-adv-08-s1",
        title: "Multi-Step Narrative Sequences & Branching Logic",
        content: `### Dynamic Video Ad Sequencing (VAS)

Linear ad repetitions cause rapid creative fatigue. **Video Ad Sequencing (VAS)** guides prospects along a multi-step story arc, showing subsequent videos based on whether a viewer saw, skipped, or fully watched the preceding ad.

\`\`\`
                                  +-----------------------+
                                  | Step 1: The Tease     |
                                  | 6-Second Bumper       |
                                  +-----------+-----------+
                                              |
                             +----------------+----------------+
                             | (Impression / Skip)             | (Completed View)
                             v                                 v
               +---------------------------+     +---------------------------+
               | Step 2A: The Explainer    |     | Step 2B: Deep Dive Case   |
               | 15s Non-Skippable Story   |     | 30s Skippable In-Stream   |
               +-------------+-------------+     +-------------+-------------+
                             |                                 |
                             +----------------+----------------+
                                              |
                                              v
                                +---------------------------+
                                | Step 3: Direct Action CTA |
                                | VAC with Promo Code & Sit.|
                                +---------------------------+
\`\`\``,
        codeSnippets: [
          {
            language: "json",
            code: `{
  "sequenceCampaignStructure": {
    "sequenceName": "Enterprise_SaaS_Q3_Sequencing_Funnel",
    "biddingStrategy": "TARGET_CPM",
    "steps": [
      {
        "stepIndex": 1,
        "stepName": "01_Tease_Bumper",
        "adFormat": "BUMPER_6S",
        "nextStepRules": {
          "onImpression": "02_Amplify_Longform",
          "onSkip": "02_Amplify_Longform"
        }
      },
      {
        "stepIndex": 2,
        "stepName": "02_Amplify_Longform",
        "adFormat": "SKIPPABLE_IN_STREAM_30S",
        "nextStepRules": {
          "onView": "03_Direct_Conversion_VAC",
          "onSkip": "03_Condensed_Reminder_15S"
        }
      },
      {
        "stepIndex": 3,
        "stepName": "03_Direct_Conversion_VAC",
        "adFormat": "VIDEO_ACTION_CAMPAIGN",
        "callToAction": "CLAIM TRIAL",
        "finalUrl": "https://brand.com/enterprise-trial"
      }
    ]
  }
}`,
            explanation: "Video ad sequence configuration defining conditional progression rules across 3 distinct steps.",
            lineByLineBreakdown: [
              "Line 3: Sets Target CPM bidding strategy.",
              "Line 5-13: Step 1 (6s Bumper) progresses to Step 2 on impression or skip.",
              "Line 14-22: Step 2 branches based on whether the viewer completed the view or skipped.",
              "Line 23-28: Step 3 delivers final direct conversion call to action."
            ]
          }
        ],
        miniPractice: {
          question: "What is the recommended minimum audience size when launching a Video Ad Sequence campaign?",
          options: [
            "At least 500,000 users to accommodate step-by-step audience attrition",
            "100 users",
            "5,000 users",
            "Exactly 10 users"
          ],
          correctAnswer: 0,
          explanation: "Sequences experience natural audience drop-off at each stage; starting with 500k+ users ensures sufficient volume reaches the conversion step."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-08-ex1",
        title: "Designing a 3-Step Sequence",
        description: "Draft a 3-step sequence configuration in JSON using the Tease, Amplify, Echo structure.",
        starterCode: "{\n  \"sequenceName\": \"Tease_Amplify_Echo\",\n  \"steps\": []\n}",
        instructions: [
          "Add Step 1 (6s bumper).",
          "Add Step 2 (30s skippable).",
          "Add Step 3 (6s reminder bumper)."
        ],
        hints: ["Use Target CPM bidding."],
        validationChecklist: [
          "Contains 3 distinct steps.",
          "Includes nextStepRules."
        ]
      }
    ],
    keyTakeaways: [
      "Video Ad Sequencing systematically walks prospects through a structured multi-stage narrative arc.",
      "Conditional branching serves tailored creative assets based on whether a viewer watched or skipped.",
      "Target CPM bidding ensures cost-effective step delivery across YouTube and Connected TV inventory."
    ]
  },
  {
    id: "yt-adv-09",
    title: "9. Global Localization, Multi-Lingual & Dynamic Creative Optimization",
    summary: "Scaling YouTube ad creative across 20+ languages using Google Ads dynamic text overlays, AI dubbing, automated subtitles, and geo-targeted assets.",
    order: 9,
    duration: "40 min",
    tags: ["DCO", "Localization", "Multi-Lingual", "Captions", "Global Scale"],
    sections: [
      {
        id: "yt-adv-09-s1",
        title: "Dynamic Creative Optimization (DCO) at Scale",
        content: `### Global Scale & Modular Video Assets

Expanding video ad campaigns internationally requires dynamic localization beyond simple subtitles: localized voiceovers, localized currency overlays, and regionally compliant legal copy.

\`\`\`
+-----------------------------------------------------------------+
|               Master Creative Template (After Effects)          |
|                                                                 |
|   +--------------------------+  +---------------------------+   |
|   | Dynamic Video Base       |  | Dynamic Text Overlay Box  |   |
|   | [Universal Visuals]      |  | {{ localized_headline }}   |   |
|   +--------------------------+  +---------------------------+   |
|                                                                 |
|   +--------------------------+  +---------------------------+   |
|   | Localized Audio Track    |  | Localized Currency Button |   |
|   | [EN / ES / DE / JA / FR] |  | {{ price_symbol }}{{amt}} |   |
|   +--------------------------+  +---------------------------+   |
+-----------------------------------------------------------------+
\`\`\``,
        codeSnippets: [
          {
            language: "json",
            code: `{
  "localizationFeed": [
    {
      "regionCode": "US",
      "languageCode": "en",
      "videoAssetId": "yt_video_en_master_01",
      "headline": "Scale Your AI Workflow Today",
      "currencySymbol": "$",
      "monthlyPrice": "49",
      "landingPageUrl": "https://brand.com/us/pricing"
    },
    {
      "regionCode": "DE",
      "languageCode": "de",
      "videoAssetId": "yt_video_de_dubbed_01",
      "headline": "Skalieren Sie Ihre KI-Workflows",
      "currencySymbol": "€",
      "monthlyPrice": "45",
      "landingPageUrl": "https://brand.com/de/preise"
    },
    {
      "regionCode": "JP",
      "languageCode": "ja",
      "videoAssetId": "yt_video_jp_dubbed_01",
      "headline": "AIワークフローを今すぐ拡張",
      "currencySymbol": "¥",
      "monthlyPrice": "6,800",
      "landingPageUrl": "https://brand.com/jp/pricing"
    }
  ]
}`,
            explanation: "Dynamic creative feed mapping region codes to localized video assets, headlines, currencies, and landing pages.",
            lineByLineBreakdown: [
              "Line 3-10: Configures US English asset mapping ($49 pricing).",
              "Line 11-18: Configures German localized asset mapping (€45 pricing).",
              "Line 19-26: Configures Japanese localized asset mapping (¥6,800 pricing)."
            ]
          }
        ],
        miniPractice: {
          question: "How does Dynamic Creative Optimization (DCO) benefit global campaigns?",
          options: [
            "It swaps text overlays, voiceovers, and currencies into a master video template without reshooting",
            "It eliminates all video advertising costs",
            "It forces all users to watch in English",
            "It translates videos into static images"
          ],
          correctAnswer: 0,
          explanation: "DCO allows global brands to scale video across dozens of countries by programmatically inserting localized assets into a master template."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-09-ex1",
        title: "Creating a Localization Schema",
        description: "Draft a JSON localization feed for UK and France with localized currency symbols and landing page URLs.",
        starterCode: "{\n  \"localizationFeed\": []\n}",
        instructions: [
          "Include GB record with £ symbol.",
          "Include FR record with € symbol."
        ],
        hints: ["Ensure landingPageUrl matches the regional domain."],
        validationChecklist: [
          "Contains GB and FR records.",
          "Includes correct currency symbols."
        ]
      }
    ],
    keyTakeaways: [
      "Dynamic creative localization enables rapid international expansion without reshooting raw video footage.",
      "Adding native-language subtitles (.srt) and localized audio tracks increases global viewer retention.",
      "Strict campaign naming conventions and country-specific URL routing prevent cross-region tracking contamination."
    ]
  },
  {
    id: "yt-adv-10",
    title: "10. YouTube Co-Viewing & Connected TV (CTV) Advanced Buying",
    summary: "Capitalizing on the living room screen shift: CTV co-viewing multipliers, QR code engagement mechanics, and TV-specific creative formats.",
    order: 10,
    duration: "40 min",
    tags: ["Connected TV", "CTV", "Co-Viewing", "QR Codes", "Living Room Screen"],
    sections: [
      {
        id: "yt-adv-10-s1",
        title: "CTV Co-Viewing Multipliers & QR Code Mechanics",
        content: `### The Connected TV (CTV) Revolution on YouTube

Over 52% of YouTube watch time in Tier-1 markets occurs on Connected TV screens (smart TVs, Apple TV, gaming consoles). CTV transforms YouTube into a shared living-room experience where multiple family members watch together (Co-Viewing Factor typically 1.3x to 1.6x).

\`\`\`
+--------------------------------------------------------------------+
|                   Connected TV (Living Room Screen)                |
|                                                                    |
|   +---------------------------------------+  +-----------------+   |
|   | 4K High-Production Storytelling Video |  | Dynamic QR Code |   |
|   | 16:9 Aspect Ratio / 5.1 Surround Sound|  | Scan with Phone |   |
|   | Clear 30-Second Narrative             |  | [Direct App/URL]|   |
|   +---------------------------------------+  +-----------------+   |
+--------------------------------------------------------------------+
\`\`\``,
        codeSnippets: [
          {
            language: "json",
            code: `{
  "ctvCampaignProfile": {
    "targetDeviceTypes": ["CONNECTED_TV"],
    "excludedDeviceTypes": ["MOBILE_PHONE", "TABLET", "DESKTOP"],
    "creativeSpecs": {
      "aspectRatio": "16:9",
      "resolution": "3840x2160 (4K)",
      "qrCodeOverlay": {
        "enabled": true,
        "position": "TOP_RIGHT",
        "displayDurationSeconds": 20,
        "destinationUrl": "https://brand.com/tv-offer?utm_source=youtube_ctv&utm_medium=qr"
      }
    },
    "biddingStrategy": "TARGET_CPM",
    "targetCPMUSD": 18.50
  }
}`,
            explanation: "Dedicated CTV campaign configuration with 4K specs and interactive QR code overlays.",
            lineByLineBreakdown: [
              "Line 3-4: Isolates Connected TV device inventory exclusively.",
              "Line 6-12: Specifies 4K resolution and 20-second top-right QR code overlay.",
              "Line 14-15: Sets Target CPM bidding strategy ($18.50)."
            ]
          }
        ],
        miniPractice: {
          question: "What does the Co-Viewing multiplier measure in Connected TV video advertising?",
          options: [
            "The average number of multiple individuals watching a single living-room TV screen simultaneously",
            "The number of times a video is shared on social media",
            "The percentage of users who watch on both mobile and TV",
            "The ratio of audio volume to screen brightness"
          ],
          correctAnswer: 0,
          explanation: "Co-viewing factors (typically 1.3x to 1.6x) account for multiple household members viewing the same living-room TV screen."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-10-ex1",
        title: "Configuring a CTV Profile",
        description: "Draft a JSON configuration isolating CONNECTED_TV devices with a 15-second QR code overlay.",
        starterCode: "{\n  \"targetDeviceTypes\": [\"CONNECTED_TV\"]\n}",
        instructions: [
          "Exclude MOBILE_PHONE and DESKTOP.",
          "Add qrCodeOverlay object with displayDurationSeconds >= 15."
        ],
        hints: ["Keep QR code on screen long enough for viewers to scan."],
        validationChecklist: [
          "Isolates CONNECTED_TV.",
          "Includes qrCodeOverlay."
        ]
      }
    ],
    keyTakeaways: [
      "Connected TV represents the fastest-growing and highest watch-time segment on YouTube.",
      "Co-viewing factors mean each CTV impression reaches an average of 1.3 to 1.6 active viewers.",
      "Interactive QR codes and 'Send to Phone' bridge the gap between living-room branding and direct-response conversions."
    ]
  },
  {
    id: "yt-adv-11",
    title: "11. YouTube Shorts Monetization & Vertical Ad Automation",
    summary: "Dominating vertical short-form video: Shorts algorithm signals, rapid 3-second hook variations, swipe-up mechanics, and asset repurposing.",
    order: 11,
    duration: "40 min",
    tags: ["YouTube Shorts", "Vertical Video", "9:16", "Safe Zones", "Fast-Cut Editing"],
    sections: [
      {
        id: "yt-adv-11-s1",
        title: "Shorts Algorithm Signals & Vertical Safe Zones",
        content: `### Dominating Vertical Short-Form Video

YouTube Shorts generates over 70 billion daily views. Viewers swipe rapidly, deciding whether to stay within 1.5 to 2.5 seconds. Successful Shorts ads feature disruptive visual hooks, 9:16 safe zone compliance, and fast cuts every 1.2 to 2.0 seconds.

\`\`\`
+-------------------------------------------------------------+
|                      YouTube Shorts (9:16)                  |
|                                                             |
|   +-----------------------------------------------------+   |
|   | 0.0s - 2.5s: The Disruptive Visual Hook             |   |
|   | (Sudden motion, question, high-contrast text)       |   |
|   +-----------------------------------------------------+   |
|   | 2.5s - 8.0s: Fast Problem Agitation & Product Reveal|   |
|   | (Paced fast cuts every 1.2s, trending audio feel)   |   |
|   +-----------------------------------------------------+   |
|   | 8.0s - 15.0s: Social Proof & Direct Swipe CTA       |   |
|   | [Prominent Sticky Conversion Button at Bottom]      |   |
|   +-----------------------------------------------------+   |
+-------------------------------------------------------------+
\`\`\``,
        codeSnippets: [
          {
            language: "json",
            code: `{
  "shortsCreativeMatrix": {
    "dimensions": "1080x1920 (9:16)",
    "frameRate": "60fps",
    "idealLengthSeconds": "15 to 22",
    "safeZone": {
      "topClearancePct": 15,
      "bottomClearancePct": 25,
      "rightClearancePct": 15
    },
    "audioRequirements": {
      "format": "Stereo AAC 320kbps",
      "nativeVoiceover": true,
      "subtitlesBurnedIn": true
    }
  }
}`,
            explanation: "Shorts creative specification detailing vertical aspect ratios, safe zones, and audio parameters.",
            lineByLineBreakdown: [
              "Line 3-5: Sets 1080x1920 (9:16) resolution and 15-22s duration.",
              "Line 6-10: Specifies safe zone clearances (25% bottom clearance for CTA button).",
              "Line 11-15: Mandates burned-in subtitles and native voiceovers."
            ]
          }
        ],
        miniPractice: {
          question: "Why must text overlays avoid the bottom 25% of a YouTube Shorts ad?",
          options: [
            "To prevent text from being obscured by the channel name, caption, and clickable CTA button",
            "Because YouTube compresses the bottom quarter to lower resolution",
            "Because Google Ads deletes the bottom quarter of vertical videos",
            "To comply with federal television regulations"
          ],
          correctAnswer: 0,
          explanation: "The bottom 25% of YouTube Shorts contains channel information and the interactive conversion CTA button."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-11-ex1",
        title: "Shorts Safe Zone Verification",
        description: "Draft a JSON spec defining safe zone clearances for a 9:16 Shorts creative ad.",
        starterCode: "{\n  \"dimensions\": \"1080x1920\",\n  \"safeZone\": {}\n}",
        instructions: [
          "Add topClearancePct (15).",
          "Add bottomClearancePct (25).",
          "Add rightClearancePct (15)."
        ],
        hints: ["Bottom clearance must be at least 25%."],
        validationChecklist: [
          "Includes 1080x1920 dimensions.",
          "Specifies safe zone percentages."
        ]
      }
    ],
    keyTakeaways: [
      "YouTube Shorts requires 9:16 vertical video assets with text contained strictly in the safe zone.",
      "Viewers decide to swipe within 2 seconds; hook testing is the single highest leverage creative lever.",
      "Campaigns combining both 16:9 landscape and 9:16 vertical video achieve 23% higher conversion rates."
    ]
  },
  {
    id: "yt-adv-12",
    title: "12. Machine Learning & Predictive Bidding Algorithms",
    summary: "Deconstructing Google's Smart Bidding neural networks: real-time auction signals, conversion lag modeling, and value-based bidding (tROAS).",
    order: 12,
    duration: "45 min",
    tags: ["Smart Bidding", "Machine Learning", "Conversion Lag", "Value-Based Bidding", "tROAS"],
    sections: [
      {
        id: "yt-adv-12-s1",
        title: "Smart Bidding Neural Networks & Conversion Lag Modeling",
        content: `### Inside Google Smart Bidding for Video

Google Ads Smart Bidding uses deep neural networks evaluating hundreds of real-time signals during each auction to estimate the probability of conversion:

$$\\text{Bid} = p(\\text{Conversion} \\mid \\text{Context}) \\times \\text{Target CPA}$$

$$\\text{Value Bid} = \\sum [p(\\text{Conversion}_i) \\times \\text{Predicted Value}_i] \\times \\frac{1}{\\text{Target ROAS}}$$

\`\`\`
+-----------------------------------------------------------------+
|                    Real-Time Auction Signals                    |
|                                                                 |
| • User Query / Video Context     • Operating System / Device    |
| • Physical Location / ISP        • Historical Conversion Rate   |
| • Time of Day / Day of Week      • First-Party Audience Match   |
| • YouTube App vs Web Browser     • In-Market Intent Recency     |
+--------------------------------+--------------------------------+
                                 |
                                 v
               +-----------------------------------+
               | Deep Neural Network Valuation     |
               | Estimates p(Conv) and p(Value)    |
               +-----------------+-----------------+
                                 |
                                 v
               +-----------------------------------+
               | Dynamic Real-Time Bid Generated   |
               +-----------------------------------+
\`\`\``,
        codeSnippets: [
          {
            language: "python",
            code: `import numpy as np

def estimate_mature_conversions(observed_conversions, days_elapsed, lag_curve):
    """
    Adjusts observed conversions based on historical conversion lag maturation curve.
    """
    maturity_pct = lag_curve.get(days_elapsed, 1.0)
    projected_final = observed_conversions / maturity_pct
    return projected_final

# Historical Lag Curve (Day: Cumulative % of conversions realized)
LAG_CURVE = {1: 0.35, 2: 0.55, 3: 0.70, 7: 0.85, 14: 0.95, 30: 1.00}

observed = 50
days_since_spend = 3
projected = estimate_mature_conversions(observed, days_since_spend, LAG_CURVE)
print(f"Observed: {observed} | Projected Mature Conversions: {projected:.1f}")
# Output: Observed: 50 | Projected Mature Conversions: 71.4`,
            explanation: "Python conversion lag model projecting final mature conversions from early campaign reporting.",
            lineByLineBreakdown: [
              "Line 7-9: Divides observed conversions by the historical maturity percentage.",
              "Line 12: Defines cumulative realization curve (e.g. 70% realized by day 3).",
              "Line 16-18: Adjusts 50 observed conversions on day 3 to a projected mature total of 71.4."
            ]
          }
        ],
        miniPractice: {
          question: "What is conversion lag in YouTube advertising?",
          options: [
            "The time delay between a user viewing an ad and eventually converting days or weeks later",
            "The buffering time when loading 4K video ads",
            "The latency between API requests",
            "The time it takes for video files to render in Premiere Pro"
          ],
          correctAnswer: 0,
          explanation: "Conversion lag refers to the natural elapsed time between initial ad impression and final purchase, which can cause early campaign reporting to look deceptively high-CPA."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-12-ex1",
        title: "Modeling Conversion Lag Decay",
        description: "Write a function that calculates the projected mature CPA given ad spend, observed conversions, and maturity percentage.",
        starterCode: "def calculate_mature_cpa(spend, observed_conv, maturity_pct):\n    # Calculate projected CPA\n    pass",
        instructions: [
          "Calculate mature conversions = observed_conv / maturity_pct.",
          "Calculate mature CPA = spend / mature conversions."
        ],
        hints: ["mature_conv = observed_conv / maturity_pct."],
        validationChecklist: [
          "Calculates mature conversions.",
          "Returns projected mature CPA."
        ]
      }
    ],
    keyTakeaways: [
      "Smart Bidding calculates dynamic auction-time bids by evaluating real-time context and user intent signals.",
      "Conversion lag must be factored into reporting to avoid premature campaign changes during the learning phase.",
      "Target ROAS and Value-Based Bidding steer algorithmic delivery toward high-LTV customers rather than cheap low-intent clicks."
    ]
  },
  {
    id: "yt-adv-13",
    title: "13. Enterprise YouTube Channel Architecture & Multi-Brand Governance",
    summary: "Managing enterprise YouTube networks: Manager Accounts (MCC), Brand Accounts, RBAC permission tiering, content ID claim policies, and API rate limits.",
    order: 13,
    duration: "40 min",
    tags: ["Channel Architecture", "MCC", "Brand Accounts", "Content ID", "RBAC"],
    sections: [
      {
        id: "yt-adv-13-s1",
        title: "Enterprise Multi-MCC Architecture & Content ID",
        content: `### Enterprise Channel Governance & Multi-MCC Architecture

Global corporations with multiple subsidiary brands require a scalable governance framework. Consolidating brand assets under an enterprise **Google Ads Manager Account (MCC)** and **YouTube Brand Account Network** guarantees administrative control, unified credit line billing, and Content ID copyright monetization.

\`\`\`
+-----------------------------------------------------------------+
|                 Enterprise Google Ads Root MCC                  |
+--------------------------------+--------------------------------+
                                 |
        +------------------------+------------------------+
        |                                                 |
        v                                                 v
+-------------------------------+ +-------------------------------+
| Region Americas MCC (Child)   | | Region EMEA / APAC MCC (Child)|
| Accounts: US, CA, BR, MX      | | Accounts: UK, DE, FR, JP, AU  |
+---------------+---------------+ +---------------+---------------+
\`\`\``,
        codeSnippets: [
          {
            language: "json",
            code: `{
  "contentIDMatchPolicy": {
    "assetId": "ASSET_V_881920",
    "assetType": "MUSIC_VIDEO_MASTER",
    "ownership": {
      "territories": ["GLOBAL"],
      "percentage": 100
    },
    "matchRules": [
      {
        "condition": "MATCH_PERCENTAGE > 80",
        "action": "MONETIZE",
        "monetizationAdFormats": ["SKIPPABLE_IN_STREAM", "NON_SKIPPABLE_15S"]
      },
      {
        "condition": "MATCH_PERCENTAGE < 20",
        "action": "TRACK"
      }
    ]
  }
}`,
            explanation: "Content ID match policy schema defining automated Monetize and Track actions based on match thresholds.",
            lineByLineBreakdown: [
              "Line 3-7: Defines asset ID, type, and 100% global ownership.",
              "Line 8-13: Applies Monetize action for matches over 80%.",
              "Line 14-16: Applies Track action for low-percentage matches."
            ]
          }
        ],
        miniPractice: {
          question: "In YouTube Content ID, what action allows a brand to place ads on user-uploaded videos containing their copyrighted material?",
          options: [
            "Monetize",
            "Block",
            "Track",
            "Takedown Notice"
          ],
          correctAnswer: 0,
          explanation: "The 'Monetize' policy allows rights holders to claim matched user uploads and collect 100% of the advertising revenue generated."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-13-ex1",
        title: "Content ID Policy Drafting",
        description: "Draft a JSON Content ID policy that specifies global ownership and sets action to MONETIZE.",
        starterCode: "{\n  \"ownership\": {\n    \"territories\": [\"GLOBAL\"]\n  }\n}",
        instructions: [
          "Add matchRules array.",
          "Set action to MONETIZE."
        ],
        hints: ["Include monetizationAdFormats in the rule."],
        validationChecklist: [
          "Specifies global territories.",
          "Includes MONETIZE action."
        ]
      }
    ],
    keyTakeaways: [
      "Hierarchical MCC structures allow unified credit line billing while isolating regional operational execution.",
      "Content ID policies turn unauthorized brand re-uploads into automated monetization streams.",
      "Strict RBAC permissions prevent accidental campaign deletion and enforce enterprise compliance."
    ]
  },
  {
    id: "yt-adv-14",
    title: "14. YouTube Ads 2026+ Trends, Generative Video AI & Horizon Scanning",
    summary: "The future of video advertising: Google Veo generative B-roll, real-time avatar personalization, immersive 3D spatial video, and ambient computing.",
    order: 14,
    duration: "40 min",
    tags: ["Google Veo", "Generative Video AI", "Spatial Video", "Future Trends", "Horizon Scanning"],
    sections: [
      {
        id: "yt-adv-14-s1",
        title: "Generative Video AI (Google Veo) & Contextual Dynamic Ads",
        content: `### The Next Frontier: Generative AI Video & Spatial Ads

Foundation generative video models (such as **Google Veo** and **Imagen 3 Video**) are transforming video advertising. Generative AI allows automated outpainting from 16:9 landscape to 9:16 vertical formats, dynamic B-roll synthesis, and real-time contextual adaptation (weather, location, viewer intent).

\`\`\`
+-----------------------------------------------------------------+
|              AI Generative Creative Engine (2026+)              |
|                                                                 |
|   +-----------------------+     +---------------------------+   |
|   | 16:9 Master Footage   | --> | Google Veo Outpainting    |   |
|   | (Original Studio Clip)|     | Generates 9:16 & 1:1 Bg   |   |
|   +-----------------------+     +-------------+-------------+   |
|                                               |                 |
|   +-----------------------+                   v                 |
|   | Real-Time Weather &   |     +---------------------------+   |
|   | Contextual API Data   | --> | Dynamic Scene Synthesis   |   |
|   +-----------------------+     | (Snow/Rain/Sunny tailored)|   |
|                                 +-------------+-------------+   |
|                                               |                 |
|                                               v                 |
|                                 +---------------------------+   |
|                                 | Personalized Video Ad     |   |
|                                 | Served to Exact Viewer    |   |
|                                 +---------------------------+   |
+-----------------------------------------------------------------+
\`\`\``,
        codeSnippets: [
          {
            language: "json",
            code: `{
  "generativeVideoGenerationPayload": {
    "model": "google-veo-enterprise-v2",
    "task": "OUTPAINTING_ASPECT_RATIO_EXPANSION",
    "sourceAssetId": "raw_footage_studio_car_commercial_1080p",
    "targetAspectRatios": ["9:16", "1:1"],
    "promptGuidance": "Maintain identical studio lighting, extend showroom floor reflections naturally downward, ultra-photorealistic 60fps",
    "outputFormat": "ProRes_422HQ"
  }
}`,
            explanation: "API payload for Google Veo outpainting transforming 16:9 footage into 9:16 vertical format.",
            lineByLineBreakdown: [
              "Line 3: Specifies google-veo-enterprise-v2 model.",
              "Line 4: Sets OUTPAINTING_ASPECT_RATIO_EXPANSION task.",
              "Line 6: Generates both 9:16 and 1:1 outputs.",
              "Line 7: Directs AI to preserve studio lighting and reflections."
            ]
          }
        ],
        miniPractice: {
          question: "What does AI generative outpainting (such as Google Veo) accomplish on a 16:9 video?",
          options: [
            "It synthesizes photorealistic vertical background content to adapt the asset into native 9:16 without cropping the subject",
            "It stretches the video horizontally",
            "It converts video into an animated GIF",
            "It deletes the audio track"
          ],
          correctAnswer: 0,
          explanation: "Generative outpainting creates surrounding background pixels, expanding landscape video into full 9:16 vertical format naturally."
        }
      }
    ],
    practiceExercises: [
      {
        id: "yt-adv-14-ex1",
        title: "Drafting a Veo Outpainting Prompt",
        description: "Write a JSON payload invoking Google Veo for aspect ratio expansion with prompt guidance.",
        starterCode: "{\n  \"model\": \"google-veo-enterprise-v2\",\n  \"task\": \"OUTPAINTING_ASPECT_RATIO_EXPANSION\"\n}",
        instructions: [
          "Include targetAspectRatios array with 9:16.",
          "Add promptGuidance string."
        ],
        hints: ["Specify lighting and background details."],
        validationChecklist: [
          "Includes targetAspectRatios.",
          "Contains promptGuidance."
        ]
      }
    ],
    keyTakeaways: [
      "Foundation video AI models (Google Veo) enable automated outpainting from 16:9 to vertical 9:16.",
      "Context-aware real-time dynamic rendering personalizes video ads to viewer location, weather, and name.",
      "Early preparation for spatial and immersive 3D video ensures leadership in next-generation ad channels."
    ]
  }
];

const advancedProjects = [
  {
    id: "yt-adv-proj-01",
    title: "15. Advanced Capstone 1: Enterprise YouTube Ad Operations, First-Party Data Clean Rooms & Advanced Scripting Engine",
    description: "Architect and deploy an enterprise-grade YouTube advertising automation infrastructure featuring Ads Data Hub (ADH) BigQuery SQL pipelines, Google Ads Scripts for automated anomaly detection, Customer Match API sync, and multi-tier GARM brand safety enforcement across 10 deliverables.",
    level: "advanced",
    orderIndex: 15,
    duration: "120 min",
    isProject: true,
    isFinalAssessment: false,
    tags: [
      "Advanced Capstone 1",
      "Ads Data Hub",
      "Google Ads Scripts",
      "Customer Match API",
      "Enterprise Governance"
    ],
    projectDetails: {
      overview: "As the Enterprise Director of Marketing Technology & Ad Operations for a global omni-channel retailer, you must engineer an airtight YouTube advertising infrastructure. You will write Ads Data Hub SQL queries joining log-level impressions with first-party BigQuery CRM tables, deploy Google Ads V8 JavaScript scripts for real-time anomaly alerts, build automated Customer Match hashing pipelines, enforce GARM brand safety matrices, configure dynamic localization feeds, and establish multi-brand MCC governance.",
      realWorldScenario: "You are leading ad operations for 'AuraGlobal'—a luxury omnichannel apparel brand spending $250,000/month on YouTube across 5 global markets (US, UK, DE, JP, BR). Your objectives are to eliminate manual reporting delays, enforce 100% brand safety across sensitive topics, automate high-CPA anomaly alerts to Slack within 60 minutes, and join offline store sales in BigQuery with YouTube video impression logs in Ads Data Hub.",
      learningObjectives: [
        "Write differential-privacy compliant Ads Data Hub SQL queries with 50-user threshold enforcement.",
        "Deploy Google Ads V8 JavaScript scripts for automated spend anomaly detection and Slack webhooks.",
        "Build a Python pipeline for Customer Match SHA-256 PII normalization and OfflineUserDataJob API streaming.",
        "Configure GARM brand safety profiles, CTV QR-code ad templates, and Content ID monetization policies."
      ],
      requirements: [
        "Complete all 10 deliverables with comprehensive code snippets, schemas, and architectural specifications.",
        "Ensure all SQL queries strictly satisfy the 50-user differential privacy requirement in Ads Data Hub.",
        "Provide production-ready Google Ads V8 JavaScript and Python Customer Match normalization code.",
        "Define an enterprise MCC hierarchy and RBAC permission matrix for cross-functional marketing teams."
      ],
      deliverables: [
        {
          id: "adv-del-01",
          title: "1. Ads Data Hub (ADH) SQL Query Architecture",
          description: "Write full SQL script joining Google YouTube impression logs with first-party BigQuery CRM tables with 50-user threshold compliance.",
          expectedOutput: "Complete ADH SQL script with frequency bucketing, conversion left join, and HAVING COUNT(DISTINCT user_id) >= 50."
        },
        {
          id: "adv-del-02",
          title: "2. Google Ads V8 JavaScript Automation Script",
          description: "Deploy an automated script that monitors hourly video campaign CPA anomalies and fires alerts to Slack/Teams.",
          expectedOutput: "Production V8 JavaScript script querying ad group metrics, evaluating against $45 CPA threshold, and dispatching webhook payloads."
        },
        {
          id: "adv-del-03",
          title: "3. Negative Placement Synchronization Engine",
          description: "Implement a master shared negative list script that automatically audits and excludes non-converting channels across all active video campaigns.",
          expectedOutput: "Automated script attaching shared negative placement sets across all enabled video campaigns."
        },
        {
          id: "adv-del-04",
          title: "4. First-Party Customer Match API Pipeline",
          description: "Python script normalizing customer emails/phones to SHA-256 and streaming OfflineUserDataJob records to Google Ads API.",
          expectedOutput: "Python module with E.164 phone formatting, Gmail alias stripping, SHA-256 hashing, and batch API upload logic."
        },
        {
          id: "adv-del-05",
          title: "5. GARM Brand Safety Matrix",
          description: "Configuration file defining content suitability tiers, digital content label exclusions, and third-party verification partner (Zefr/IAS) parameters.",
          expectedOutput: "JSON brand safety profile specifying Standard Inventory tier, DL_MA exclusions, and Zefr contextual AI integration."
        },
        {
          id: "adv-del-06",
          title: "6. Dynamic Localization Feed Schema",
          description: "Multi-lingual JSON creative feed mapping 5 global markets (US, UK, DE, JP, BR) with localized video assets, currency, and landing URLs.",
          expectedOutput: "Structured JSON feed with region codes, language codes, video IDs, localized headlines, and currency symbols."
        },
        {
          id: "adv-del-07",
          title: "7. Connected TV (CTV) Dedicated Campaign Setup",
          description: "Isolate CTV inventory with 4K resolution specs, interactive QR code overlay placement, and co-viewing reach modeling.",
          expectedOutput: "CTV campaign profile JSON specifying 16:9 4K resolution, 20-second QR overlay, and Target CPM bidding."
        },
        {
          id: "adv-del-08",
          title: "8. Video Ad Sequencing (VAS) Narrative Funnel",
          description: "3-step conditional narrative sequence (Tease 6s -> Amplify 30s -> Direct Action VAC) with skip/view branch logic.",
          expectedOutput: "VAS campaign configuration detailing step progression rules based on impression, skip, and completed view events."
        },
        {
          id: "adv-del-09",
          title: "9. Content ID Monetization & Ownership Policy",
          description: "Digital rights policy schema detailing automated Monetize, Track, and Block rules based on audio/video match percentages.",
          expectedOutput: "Content ID match policy schema with territory ownership and tiered action thresholds (>80% Monetize, <20% Track)."
        },
        {
          id: "adv-del-10",
          title: "10. Enterprise MCC & RBAC Governance Matrix",
          description: "Multi-tier Google Ads MCC architecture diagram and role-based access control permission table for cross-functional teams.",
          expectedOutput: "Governance hierarchy document defining Root MCC, regional child MCCs, and scoped RBAC user roles."
        }
      ],
      rubric: [
        {
          criteria: "ADH BigQuery SQL Accuracy & Privacy Threshold",
          points: 25,
          description: "Correctly constructs multi-table joins adhering to the mandatory 50-user differential privacy threshold."
        },
        {
          criteria: "Google Ads Script Anomaly Detection Engine",
          points: 25,
          description: "Deploys production-grade V8 JavaScript code with GAQL querying, CPA math, and robust webhook alerting."
        },
        {
          criteria: "Customer Match API & Hashing Architecture",
          points: 25,
          description: "Implements strict E.164 phone formatting and Gmail-normalized SHA-256 cryptographic hashing."
        },
        {
          criteria: "CTV, DCO & Brand Safety Verification Matrix",
          points: 25,
          description: "Configures complete schemas for GARM safety, dynamic localization feeds, CTV QR codes, and VAS sequences."
        }
      ],
      tips: [
        "Always verify that your ADH queries include the HAVING COUNT(DISTINCT user_id) >= 50 privacy filter.",
        "Test your Google Ads Script in Preview mode before scheduling live hourly executions.",
        "Ensure phone numbers include the international plus sign (e.g. +1) prior to hashing."
      ]
    }
  },
  {
    id: "yt-adv-proj-02",
    title: "16. Advanced Capstone 2: Omnichannel Video Attribution, Incrementality Testing & AI Bidding Infrastructure",
    description: "Design and execute an advanced measurement and optimization system: randomized geo-lift incrementality experiments, Google Meridian Media Mix Modeling (MMM) calibration, conversion lag correction, and generative video AI (Veo) asset expansion workflows across 10 deliverables.",
    level: "advanced",
    orderIndex: 16,
    duration: "120 min",
    isProject: true,
    isFinalAssessment: false,
    tags: [
      "Advanced Capstone 2",
      "Incrementality",
      "Google Meridian MMM",
      "Conversion Lag",
      "Generative Video AI"
    ],
    projectDetails: {
      overview: "As the Chief Analytics Officer & Principal Media Strategist, you are tasked with designing the scientific measurement and predictive bidding foundation for a high-growth scale-up. You will design randomized matched-market geo incrementality experiments, calibrate Google Meridian Bayesian Media Mix Models with experimental lift priors, model conversion lag maturation curves, configure Value-Based Smart Bidding (VBB) rules, and build generative AI outpainting pipelines with Google Veo.",
      realWorldScenario: "You are consulting for 'NovaTech Robotics'—a robotics SaaS company with a 21-day sales cycle spending $120,000/month on YouTube. Last-click attribution shows a low 0.6x ROAS, but executive leadership believes YouTube is driving massive uncredited brand search and direct conversions. You must design a randomized geo-lift test, calibrate Bayesian MMM priors, model conversion lag decay, and deploy Google Veo generative video pipelines.",
      learningObjectives: [
        "Design a 28-day randomized matched-market geo-lift experiment with a 15% holdout group.",
        "Calculate true causal iROAS, incremental revenue, and incremental CPA using Python.",
        "Calibrate Google Meridian Bayesian Media Mix Models with experimental lift priors.",
        "Model conversion lag maturation curves and configure Google Veo generative AI video outpainting."
      ],
      requirements: [
        "Complete all 10 deliverables with rigorous statistical models, Python code, and operational schemas.",
        "Demonstrate mathematical calculations for expected baseline sales, incremental lift, iROAS, and mature CPA.",
        "Provide Python configuration for Google Meridian log-normal Bayesian prior distributions.",
        "Document Google Veo API prompt guidance for converting 16:9 landscape video into 9:16 vertical format."
      ],
      deliverables: [
        {
          id: "adv2-del-01",
          title: "1. Geo-Lift Incrementality Experiment Design",
          description: "Matched-market geo testing framework with 15% holdout group, pre-test baseline modeling, and minimum 28-day duration.",
          expectedOutput: "Experimental plan detailing treatment vs control geo selection, historical correlation coefficients, and test flight schedule."
        },
        {
          id: "adv2-del-02",
          title: "2. Incrementality Ratio (iROAS) & iCPA Calculation Engine",
          description: "Python module computing true causal lift, expected baseline sales, incremental conversions, and iROAS.",
          expectedOutput: "Python script calculating iROAS, incremental revenue, and iCPA from spend and revenue inputs."
        },
        {
          id: "adv2-del-03",
          title: "3. Google Meridian Media Mix Model (MMM) Calibration",
          description: "Python script specifying Bayesian log-normal priors based on conversion lift experimental findings.",
          expectedOutput: "Meridian MMM model configuration with mean and sigma prior distributions derived from test data."
        },
        {
          id: "adv2-del-04",
          title: "4. Conversion Lag Maturation Decay Model",
          description: "Algorithmic model adjusting recent 1-14 day video conversion volumes against historical lag realization curves.",
          expectedOutput: "Python lag decay model projecting mature conversion volume and adjusted CPA over a 30-day window."
        },
        {
          id: "adv2-del-05",
          title: "5. Value-Based Smart Bidding (VBB) Rule Architecture",
          description: "Maximize Conversion Value and Target ROAS strategy configuration with dynamic lead/trial/customer valuation tiers.",
          expectedOutput: "JSON VBB specification assigning dynamic conversion values to lead, trial, and paid subscription events."
        },
        {
          id: "adv2-del-06",
          title: "6. YouTube Shorts 9:16 Creative Matrix & Safe Zone Guide",
          description: "Vertical video asset production guidelines, fast-cut retention benchmarks, and batch variation rendering workflows.",
          expectedOutput: "Creative specification matrix defining safe zone percentages, rapid visual cuts, and dynamic caption styles."
        },
        {
          id: "adv2-del-07",
          title: "7. YouTube Live Stream Sponsorship & Dynamic Ad Protocol",
          description: "Deployment blueprint for live mid-roll insertions, pinned live chat promotional URLs, and real-time bid boosting.",
          expectedOutput: "Live broadcast protocol specifying mid-roll pacing, pinned chat copy with UTMs, and CCV bid multipliers."
        },
        {
          id: "adv2-del-08",
          title: "8. Organic-Paid Flywheel SEO & In-Feed Strategy",
          description: "VideoObject Schema.org JSON-LD markup with structured clips and competitive search query In-Feed targeting plan.",
          expectedOutput: "Complete JSON-LD markup script with structured clips and search keyword intent targeting list."
        },
        {
          id: "adv2-del-09",
          title: "9. Generative Video Outpainting Workflow (Google Veo)",
          description: "Prompt guidance and rendering pipeline transforming 16:9 master footage into 9:16 vertical and 1:1 square assets.",
          expectedOutput: "Google Veo API payload specification detailing prompt guidance for aspect ratio expansion."
        },
        {
          id: "adv2-del-10",
          title: "10. Executive C-Suite Video Performance Dashboard",
          description: "Interactive BI dashboard specification tracking iROAS, incremental revenue lift, blended MER, and cross-device reach.",
          expectedOutput: "Dashboard layout schema reporting blended MER, iROAS, co-viewing multipliers, and assisted search conversions."
        }
      ],
      rubric: [
        {
          criteria: "Statistical Rigor & Incrementality Mathematics",
          points: 25,
          description: "Correctly models baseline sales, calculates incremental lift, iROAS, and iCPA with high mathematical accuracy."
        },
        {
          criteria: "Google Meridian MMM & Bayesian Prior Integration",
          points: 25,
          description: "Accurately configures Bayesian log-normal prior distributions calibrating MMM models with experiment results."
        },
        {
          criteria: "Conversion Lag & Value-Based Bidding Architecture",
          points: 25,
          description: "Models conversion maturation decay curves and structures value-based bidding tiers for high-LTV acquisition."
        },
        {
          criteria: "Generative AI Creative & Omnichannel Dashboards",
          points: 25,
          description: "Delivers complete Google Veo outpainting payloads, Shorts safe zone guides, and C-suite KPI dashboards."
        }
      ],
      tips: [
        "Always calculate baseline sales in the treatment group using pre-test historical ratios before computing incremental revenue.",
        "Conversion lag is especially pronounced in B2B and high-ticket sales; always allow at least 14 days for conversions to mature.",
        "Use informative Bayesian priors in Meridian MMM to bridge experimental tests with continuous econometric modeling."
      ]
    }
  }
];

// 40 MCQs: exactly 10 A, 10 B, 10 C, 10 D
const rawExamQuestions = [
  // 10 with answer 0 (A)
  {
    id: 1,
    topic: "Ads Data Hub Differential Privacy",
    question: "What is the minimum group size threshold required by Ads Data Hub (ADH) for any returned output row to satisfy differential privacy requirements?",
    options: [
      "50 distinct individual users",
      "10 distinct individual users",
      "500 distinct individual users",
      "1,000 distinct individual users"
    ],
    correctAnswer: 0,
    explanation: "Ads Data Hub enforces a strict minimum aggregation threshold of 50 distinct users per output row to prevent user re-identification."
  },
  {
    id: 2,
    topic: "Customer Match Hashing Specs",
    question: "How should an email address be prepared before generating a SHA-256 hash for Google Customer Match API upload?",
    options: [
      "Trim whitespace, convert all characters to lowercase, remove periods from Gmail addresses, and apply SHA-256",
      "Convert to uppercase and apply MD5 hashing with salt",
      "Base64 encode the plain text without removing whitespace",
      "Leave unchanged and send in plain text over TLS 1.3"
    ],
    correctAnswer: 0,
    explanation: "Google Customer Match requires trimming whitespace, converting to lowercase, stripping Gmail dots/aliases, and encoding in UTF-8 before applying SHA-256."
  },
  {
    id: 3,
    topic: "Incrementality Math (iROAS)",
    question: "What is the primary formula for calculating Incremental Return on Ad Spend (iROAS) in a video incrementality experiment?",
    options: [
      "Incremental Revenue (USD) divided by Total YouTube Ad Spend (USD)",
      "Total Revenue divided by Total YouTube Ad Spend",
      "Last-Click GA4 Revenue divided by Video Ad Spend",
      "Gross Margin divided by Cost Per Click (CPC)"
    ],
    correctAnswer: 0,
    explanation: "iROAS measures true causal lift by dividing only the incremental revenue generated above the unexposed baseline by total video ad spend."
  },
  {
    id: 4,
    topic: "CTV Co-Viewing Multiplier",
    question: "What does the Co-Viewing factor measure in Connected TV (CTV) YouTube advertising?",
    options: [
      "The average number of multiple individuals watching a single living-room TV screen simultaneously",
      "The percentage of users who watch YouTube on both mobile and desktop",
      "The number of times a viewer replays a video ad within 24 hours",
      "The ratio of skippable ad views to non-skippable ad impressions"
    ],
    correctAnswer: 0,
    explanation: "CTV co-viewing accounts for multiple household members (typically 1.3x to 1.6x multiplier) simultaneously watching a single TV screen."
  },
  {
    id: 5,
    topic: "Google Ads Scripts Capabilities",
    question: "What is the main function of Google Ads Scripts in enterprise YouTube campaign management?",
    options: [
      "Executing programmatic JavaScript to monitor performance anomalies, pause fatigued ad groups, and trigger external webhooks",
      "Directly editing the raw video MP4 file pixels on YouTube servers",
      "Bypassing Google Ads auction bidding rules without account authorization",
      "Providing real-time voiceover translation during live video broadcasts"
    ],
    correctAnswer: 0,
    explanation: "Google Ads Scripts run JavaScript directly within Google Ads to automate reporting, anomaly alerts, negative placement syncing, and bidding."
  },
  {
    id: 6,
    topic: "GARM Suitability Tiers",
    question: "Under the GARM brand safety framework, which inventory tier provides the strictest exclusion of moderately sensitive content?",
    options: [
      "Limited Inventory",
      "Expanded Inventory",
      "Standard Inventory",
      "Unrestricted Network Inventory"
    ],
    correctAnswer: 0,
    explanation: "Limited Inventory enforces the strictest brand suitability filters, excluding all moderately sensitive themes and non-rated content."
  },
  {
    id: 7,
    topic: "YouTube Shorts Safe Zones",
    question: "Why should vertical 9:16 video text overlays avoid the bottom 25% of the screen on YouTube Shorts?",
    options: [
      "To prevent text from being obscured by the channel name, caption, and clickable CTA button UI elements",
      "Because YouTube compresses the bottom quarter of vertical videos to lower resolution",
      "Because Google Ads automatically crops the bottom 25% of all vertical ads",
      "To comply with federal television closed-captioning placement regulations"
    ],
    correctAnswer: 0,
    explanation: "The bottom 25% of YouTube Shorts is occupied by the channel avatar, description, and conversion CTA button, forming part of the danger zone."
  },
  {
    id: 8,
    topic: "Video Ad Sequencing (VAS) Logic",
    question: "How does Video Ad Sequencing (VAS) conditional branching function?",
    options: [
      "It serves specific subsequent video creatives based on whether the viewer watched, skipped, or was impressed by the prior step",
      "It randomly rotates 5 different video creatives without tracking viewer history",
      "It forces the viewer's web browser to loop the same 6-second video continuously",
      "It displays three videos simultaneously in a split-screen layout"
    ],
    correctAnswer: 0,
    explanation: "VAS delivers structured narrative arcs by evaluating viewer interactions (impression, completed view, or skip) on each step."
  },
  {
    id: 9,
    topic: "Conversion Lag Mechanics",
    question: "What is conversion lag in YouTube advertising?",
    options: [
      "The time delay between a user viewing an ad and eventually completing a conversion days or weeks later",
      "The buffering delay when loading a 4K video ad on a mobile network",
      "The latency between Google Ads API mutate requests and database execution",
      "The processing time required to transcode MP4 files into WebM format"
    ],
    correctAnswer: 0,
    explanation: "Conversion lag refers to the natural elapsed time between ad impression and final purchase, which can cause early campaign reporting to seem deceptively poor."
  },
  {
    id: 10,
    topic: "Content ID Claim Policies",
    question: "In YouTube Content ID, what action allows a rights holder to place ads on user-uploaded videos containing their copyrighted material?",
    options: [
      "Monetize",
      "Block",
      "Track",
      "Takedown Notice via Subpoena"
    ],
    correctAnswer: 0,
    explanation: "The 'Monetize' policy allows rights holders to claim matched user-uploaded videos and collect 100% of the advertising revenue generated."
  },

  // 10 with answer 1 (B)
  {
    id: 11,
    topic: "Google Meridian MMM Calibration",
    question: "When calibrating Google Meridian Media Mix Model (MMM) with conversion lift test results, how are the experiment findings utilized?",
    options: [
      "As deterministic hard limits that overwrite all historical regression coefficients",
      "As informative Bayesian prior distributions that anchor the channel's media response curve",
      "As post-hoc adjustment factors applied only to offline television spend",
      "As exclusion filters that delete organic search touchpoints from the training dataset"
    ],
    correctAnswer: 1,
    explanation: "Experimental incrementality results are incorporated into Bayesian MMMs as informative priors, refining the model's causal accuracy."
  },
  {
    id: 12,
    topic: "Customer Match Phone Hashing",
    question: "What telephone number format is mandatory for Google Customer Match hashing?",
    options: [
      "National standard format with hyphens (e.g., 415-555-2671)",
      "E.164 international format with leading plus sign and country code (e.g., +14155552671)",
      "Local 7-digit format without area code",
      "Hexadecimal formatted ASCII characters"
    ],
    correctAnswer: 1,
    explanation: "Google Customer Match requires phone numbers formatted in E.164 notation (e.g., +14155552671) prior to SHA-256 hashing."
  },
  {
    id: 13,
    topic: "Value-Based Bidding (VBB)",
    question: "In Value-Based Bidding (VBB), what is the primary objective of the algorithm?",
    options: [
      "Maximizing the total number of clicks regardless of cost or intent",
      "Maximizing total conversion value or return on ad spend (ROAS) rather than raw conversion volume",
      "Ensuring lowest possible Cost Per Mille (CPM) on desktop devices",
      "Exclusively bidding on brand search keywords with 100% impression share"
    ],
    correctAnswer: 1,
    explanation: "Value-Based Bidding optimizes auction bids to maximize total revenue or ROAS by prioritizing high-value customer segments."
  },
  {
    id: 14,
    topic: "CTV QR Code Overlays",
    question: "What interactive element should be placed on Connected TV video creatives to drive immediate mobile conversions?",
    options: [
      "A clickable mouse cursor button",
      "A prominent high-contrast QR code on screen for at least 15 seconds",
      "A flashing strobe light overlay",
      "A 30-digit alphanumeric discount code displayed for 2 seconds"
    ],
    correctAnswer: 1,
    explanation: "Prominent QR codes displayed for 15+ seconds allow living-room CTV viewers to scan with smartphones and convert instantly."
  },
  {
    id: 15,
    topic: "Schema.org VideoObject SEO",
    question: "How does YouTube VideoObject Schema.org structured data benefit video SEO on Google Search?",
    options: [
      "It automatically gives the video 10,000 paid views in Google Ads",
      "It enables Google Search to index key video clips/moments and display rich video snippets in search results",
      "It prevents competitors from bidding on branded search queries",
      "It bypasses all copyright checks in YouTube Content ID"
    ],
    correctAnswer: 1,
    explanation: "Schema.org VideoObject JSON-LD allows search engines to understand video timestamps, descriptions, and key moments for rich SERP displays."
  },
  {
    id: 16,
    topic: "Geo-Lift Experiment Duration",
    question: "What is the recommended minimum duration for a randomized matched-market geo incrementality experiment?",
    options: [
      "3 to 5 days",
      "28 to 30 days (4 weeks)",
      "6 to 12 months",
      "48 hours"
    ],
    correctAnswer: 1,
    explanation: "A 4-week (28-day) testing window captures full consumer purchase cycles and overcomes conversion lag variance."
  },
  {
    id: 17,
    topic: "Third-Party Verification Partners",
    question: "Which third-party verification partner specializes in frame-by-frame contextual video AI analysis mapped to GARM categories?",
    options: [
      "Google Tag Manager",
      "Zefr",
      "Zapier",
      "Cloudflare"
    ],
    correctAnswer: 1,
    explanation: "Zefr uses proprietary AI to evaluate video content, transcripts, and metadata against GARM brand suitability standards."
  },
  {
    id: 18,
    topic: "Generative Video Outpainting",
    question: "What happens when you use generative AI outpainting (such as Google Veo) on a 16:9 landscape video ad?",
    options: [
      "It stretches the video horizontally, distorting the aspect ratio",
      "It synthesizes photorealistic vertical background content to adapt the asset into native 9:16 and 1:1 formats without cropping the subject",
      "It deletes the audio track and replaces it with synthetic white noise",
      "It converts the video into an animated GIF format"
    ],
    correctAnswer: 1,
    explanation: "Generative outpainting intelligently creates surrounding visual pixels, expanding landscape footage into 9:16 vertical video seamlessly."
  },
  {
    id: 19,
    topic: "Enterprise MCC Architecture",
    question: "In an enterprise Google Ads MCC hierarchy, what is the primary benefit of linking regional sub-accounts under a central root MCC?",
    options: [
      "It forces all regional accounts to use the exact same language and currency",
      "It provides centralized billing, unified audience sharing, and standardized administrative governance while keeping operational data segmented",
      "It allows regional accounts to share credit card billing with unauthorized external contractors",
      "It automatically bypasses all local country tax regulations"
    ],
    correctAnswer: 1,
    explanation: "Root MCCs enable unified credit lines, cross-account conversion tracking, and centralized governance across regional sub-accounts."
  },
  {
    id: 20,
    topic: "Live Stream Pinned Chat",
    question: "Why is a pinned live chat message highly effective during a YouTube Live Stream product launch?",
    options: [
      "It forces all viewers' browsers to automatically open the checkout page",
      "It keeps a direct hyperlink and promotional offer visible at the very top of the fast-scrolling live chat stream",
      "It permanently disables live chat comments from audience members",
      "It converts the live stream into an unlisted video format"
    ],
    correctAnswer: 1,
    explanation: "Pinned live chat messages remain static at the top of active chat feeds, delivering high click-through rates during live broadcasts."
  },

  // 10 with answer 2 (C)
  {
    id: 21,
    topic: "ADH Differential Privacy Threshold",
    question: "What occurs if an Ads Data Hub (ADH) SQL query attempts to return aggregated results representing only 32 unique users?",
    options: [
      "The query automatically adds synthetic bot users to reach 50",
      "The query completes and exports the user data normally",
      "The privacy filtering check fails and the output row is dropped from the exported dataset",
      "The user's Google Cloud project is immediately suspended"
    ],
    correctAnswer: 2,
    explanation: "Any row with fewer than 50 distinct users is systematically filtered out by ADH's differential privacy rules."
  },
  {
    id: 22,
    topic: "Last-Click Attribution Bias",
    question: "What is the primary risk of relying exclusively on last-click attribution models for YouTube video campaigns?",
    options: [
      "It overstates YouTube video return on investment by 500%",
      "It causes video ads to load in standard definition instead of 4K",
      "It undervalues upper- and mid-funnel video touchpoints that drive subsequent direct or search conversions",
      "It prevents Google Ads from spending the daily allocated budget"
    ],
    correctAnswer: 2,
    explanation: "Last-click models award 100% credit to the final touchpoint (like brand search), ignoring video's role in creating initial demand."
  },
  {
    id: 23,
    topic: "Shorts Visual Pacing",
    question: "What is the recommended pacing for visual cuts in a YouTube Shorts 9:16 creative ad?",
    options: [
      "A single continuous static shot for 60 seconds",
      "One cut every 15 to 20 seconds",
      "Fast-paced cuts every 1.2 to 2.5 seconds to maintain visual engagement and prevent swiping",
      "No cuts allowed under YouTube Shorts advertising policies"
    ],
    correctAnswer: 2,
    explanation: "Shorts viewers have high swipe velocity; rapid visual pacing every 1.2 to 2.5 seconds maximizes viewer retention."
  },
  {
    id: 24,
    topic: "Incremental CPA Math",
    question: "What is the core mathematical calculation for Incremental Cost Per Acquisition (iCPA)?",
    options: [
      "Total Spend divided by Total Last-Click Conversions",
      "Total Impressions divided by Total Clicks",
      "Total Video Ad Spend divided by (Treatment Conversions minus Expected Baseline Conversions)",
      "Target CPA multiplied by Quality Score"
    ],
    correctAnswer: 2,
    explanation: "iCPA calculates the true cost of acquiring an incremental customer who would not have converted organically."
  },
  {
    id: 25,
    topic: "Dynamic Creative Optimization (DCO)",
    question: "How does Dynamic Creative Optimization (DCO) benefit global multi-lingual video campaigns?",
    options: [
      "It eliminates the need for video editing software entirely",
      "It requires separate camera crews to film in every country simultaneously",
      "It dynamically swaps text overlays, voiceover audio tracks, and local currency pricing into a master video template",
      "It translates viewer browser language settings without advertiser configuration"
    ],
    correctAnswer: 2,
    explanation: "DCO allows global advertisers to scale localized video assets across 20+ countries by dynamically swapping modular creative elements."
  },
  {
    id: 26,
    topic: "Content ID 'Track' Policy",
    question: "What does the YouTube Content ID 'Track' policy execute when a match is identified?",
    options: [
      "It places non-skippable ads and sends the revenue to the creator",
      "It sends a formal DMCA copyright strike to the infringing channel",
      "It monitors viewership and engagement analytics on the matched video without placing ads or blocking playback",
      "It deletes the video file from the YouTube database within 24 hours"
    ],
    correctAnswer: 2,
    explanation: "The 'Track' policy gathers detailed performance metrics on user-uploaded videos containing matching assets without monetizing or blocking."
  },
  {
    id: 27,
    topic: "Google Ads Scripts V8 Engine",
    question: "In Google Ads Scripts, which modern JavaScript runtime engine provides support for ES6+ features and async operations?",
    options: [
      "Rhino Engine",
      "Node.js v0.10",
      "V8 JavaScript Engine",
      "Internet Explorer Chakra Engine"
    ],
    correctAnswer: 2,
    explanation: "Google Ads Scripts utilizes Google's modern V8 JavaScript engine, supporting modern syntax, arrow functions, and enhanced execution speeds."
  },
  {
    id: 28,
    topic: "Organic-Paid Search Flywheel",
    question: "When structuring an organic-paid search flywheel on YouTube, what ad format is placed directly on keyword search results pages?",
    options: [
      "6-second Bumper Ad",
      "Outstream Mobile Video Ad",
      "In-Feed Video Discovery Ad",
      "Masthead TV Ad"
    ],
    correctAnswer: 2,
    explanation: "In-Feed Video Ads appear directly within YouTube search results alongside organic videos, capturing high-intent searchers."
  },
  {
    id: 29,
    topic: "Matched Market Pre-Test Correlation",
    question: "What is an essential requirement when constructing a matched-market geo experiment for video attribution?",
    options: [
      "Both treatment and control markets must be in different hemispheres",
      "The holdout group must receive 95% of total media spend",
      "Control and treatment markets must exhibit strong historical sales correlation during the pre-test period",
      "The experiment must run on weekends only"
    ],
    correctAnswer: 2,
    explanation: "Matched markets must have strong historical pre-test sales correlation so baseline unexposed performance can be accurately projected."
  },
  {
    id: 30,
    topic: "Closed-Captioning (.SRT) Impact",
    question: "What role does closed-captioning (.SRT files) play in video ad performance?",
    options: [
      "It is required by law for all digital videos regardless of audience",
      "It increases video file size by over 400%",
      "It enables comprehension for sound-muted mobile viewers and provides structured text for search engine indexing",
      "It forces the video player into full-screen mode on mobile devices"
    ],
    correctAnswer: 2,
    explanation: "Over 70% of mobile users watch videos on mute; burned-in captions or .SRT files maintain message delivery and enhance SEO indexing."
  },

  // 10 with answer 3 (D)
  {
    id: 31,
    topic: "Tease, Amplify, Echo Sequencing",
    question: "What is the primary objective of a 3-step 'Tease, Amplify, Echo' video ad sequence?",
    options: [
      "Showing the exact same 30-second ad three times in a single hour",
      "Forcing the viewer to complete a 5-question survey before watching content",
      "Lowering video resolution on each subsequent impression to save bandwidth",
      "Guiding prospects from initial brand awareness (6s Tease) to deep product demonstration (30s Amplify) to final reminder (6s Echo)"
    ],
    correctAnswer: 3,
    explanation: "The Tease, Amplify, Echo framework moves prospects smoothly along a psychological narrative funnel with tailored creative assets."
  },
  {
    id: 32,
    topic: "Ads Data Hub & BigQuery Clean Rooms",
    question: "Which data platform allows advertisers to link first-party BigQuery CRM data with YouTube ad logs without exporting user IDs?",
    options: [
      "Google Search Console",
      "Meta Business Manager",
      "YouTube Studio Creator Dashboard",
      "Ads Data Hub (ADH)"
    ],
    correctAnswer: 3,
    explanation: "Ads Data Hub (built on GCP BigQuery) is Google's privacy-safe clean room for joining first-party CRM data with YouTube impression logs."
  },
  {
    id: 33,
    topic: "Conversion Lag Evaluation Risks",
    question: "What is the consequence of evaluating a high-consideration B2B video campaign after only 48 hours of run time?",
    options: [
      "The campaign will achieve an artificially low CPA due to bot traffic",
      "Google Ads will automatically refund 50% of the media spend",
      "All video assets will be permanently paused by YouTube AI",
      "Reported CPA will appear artificially inflated due to conversion lag, risking premature and incorrect campaign cancellation"
    ],
    correctAnswer: 3,
    explanation: "B2B and high-ticket conversion cycles take days or weeks; evaluating too early records 100% of costs against only early fast-converters."
  },
  {
    id: 34,
    topic: "OfflineUserDataJobService API",
    question: "What is the primary role of Google Ads OfflineUserDataJobService in customer match automation?",
    options: [
      "Downloading competitor customer databases directly into Google Sheets",
      "Translating English audio tracks into German using speech recognition",
      "Sending physical direct-mail postcards to YouTube subscribers",
      "Programmatically creating and uploading batches of hashed customer identifiers to Google user lists via API"
    ],
    correctAnswer: 3,
    explanation: "OfflineUserDataJobService is the Google Ads API service used to stream hashed customer identifiers into Customer Match user lists."
  },
  {
    id: 35,
    topic: "Brand Safety DL-MA Exclusions",
    question: "When configuring YouTube Brand Safety, why might an advertiser exclude the 'DL-MA' (Mature Audiences) digital content label?",
    options: [
      "To restrict the ad from appearing on smart televisions",
      "To increase the overall Cost Per Mille (CPM) of the campaign",
      "To ensure ads only run during daytime hours",
      "To prevent brand association with explicit, violent, or adult-themed content"
    ],
    correctAnswer: 3,
    explanation: "Excluding DL-MA ensures enterprise ads do not appear alongside content rated for mature audiences only."
  },
  {
    id: 36,
    topic: "Dedicated CTV Campaign Segmentation",
    question: "Why should Connected TV (CTV) video ad campaigns be isolated into separate dedicated campaigns rather than combined with mobile?",
    options: [
      "Because Google Ads prohibits CTV and mobile in the same Google Ads account",
      "Because CTV ads cannot use audio",
      "Because mobile ads require 4K resolution while CTV uses 480p",
      "Because CTV has distinct CPM dynamics, co-viewing multipliers, and requires 16:9 4K creative assets with QR codes"
    ],
    correctAnswer: 3,
    explanation: "Isolating CTV allows dedicated budget allocation, customized TV bidding strategies, and prevents mobile from consuming all budget."
  },
  {
    id: 37,
    topic: "Google Veo Generative Video AI",
    question: "In the context of generative video AI, what does Google Veo enable marketers to accomplish?",
    options: [
      "Generating automated tax filings for Google Ads spend",
      "Bypassing all auction bidding costs on YouTube",
      "Automatically purchasing YouTube creator channels without contracts",
      "Synthesizing high-fidelity video B-roll, outpainting aspect ratios, and creating contextually personalized video assets"
    ],
    correctAnswer: 3,
    explanation: "Google Veo provides state-of-the-art generative video capabilities including prompt-to-video, style extension, and aspect ratio outpainting."
  },
  {
    id: 38,
    topic: "Plain PII Regulatory Risks",
    question: "What is the primary risk of using raw unhashed email addresses in client-side network payloads?",
    options: [
      "It causes the Google Ads auction to reject the bid due to latency",
      "It lowers the YouTube video resolution to standard definition",
      "It increases the Cost Per Click (CPC) by 15%",
      "It violates global data privacy regulations (GDPR, CCPA) by exposing personally identifiable information (PII)"
    ],
    correctAnswer: 3,
    explanation: "Transmitting plain PII violates privacy laws and Google policies; data must be normalized and SHA-256 hashed prior to upload."
  },
  {
    id: 39,
    topic: "Algorithmic Retention Signals",
    question: "How does YouTube's algorithm evaluate early engagement signals generated by paid In-Feed Discovery ads?",
    options: [
      "It permanently penalizes the organic ranking of the video channel",
      "It deletes the comments section of the promoted video",
      "It ignores all watch time generated by paid promotions",
      "High watch time and completion rates signal video quality, triggering increased organic recommendations on search and suggested shelves"
    ],
    correctAnswer: 3,
    explanation: "Paid views that generate strong retention and subscriber actions provide positive algorithmic signals that boost organic distribution."
  },
  {
    id: 40,
    topic: "VAS Audience Sizing Thresholds",
    question: "What is the recommended minimum audience size when deploying a multi-step Video Ad Sequence (VAS) campaign?",
    options: [
      "500 to 1,000 users",
      "10,000 users",
      "50,000 users",
      "At least 500,000 users to ensure sufficient audience volume moves through each subsequent sequence step"
    ],
    correctAnswer: 3,
    explanation: "Video ad sequences experience step-by-step audience attrition; starting with at least 500,000 users ensures sufficient volume reaches final conversion steps."
  }
];

const examTask = {
  id: "yt-adv-exam",
  title: "Official Advanced Certification Assessment",
  description: "Demonstrate master-level expertise across Ads Data Hub SQL analytics, Google Ads scripts automation, incrementality testing, Google Meridian MMM, Connected TV co-viewing, and Generative Video AI.",
  level: "advanced",
  orderIndex: 17,
  status: "locked",
  duration: "60 min",
  requiresQuiz: true,
  xpReward: 300,
  isProject: false,
  isFinalAssessment: true,
  passingScore: 35,
  totalQuestions: 40,
  tags: [
    "Certification",
    "Exam",
    "Advanced Assessment",
    "MCQ",
    "Master Level"
  ]
};

const allAdvancedTasks = [
  ...advancedTheoryModules.map((m, idx) => ({
    id: m.id,
    orderIndex: m.order,
    title: m.title,
    description: m.summary,
    level: "advanced",
    status: "locked",
    duration: m.duration,
    requiresQuiz: false,
    xpReward: 100,
    isProject: false,
    isFinalAssessment: false,
    tags: m.tags,
    lessonContent: {
      overview: m.summary,
      objectives: [
        "Master enterprise video measurement and automation principles.",
        "Implement production-ready scripts and data schemas.",
        "Apply advanced optimization methodologies."
      ],
      estimatedTime: m.duration,
      sections: m.sections,
      keyTakeaways: m.keyTakeaways,
      summary: m.summary
    }
  })),
  ...advancedProjects.map(p => ({
    ...p,
    status: "locked",
    requiresQuiz: false,
    xpReward: 250
  })),
  examTask
];

const fileContent = `/**
 * YouTube Ads Masterclass - Advanced Level Data
 * Complete Production-Ready Dataset
 * 14 In-Depth Theory Modules, 2 Comprehensive Capstone Projects, and 40 Certification Exam MCQs.
 * Balanced Answer Distribution: Exactly 10 A, 10 B, 10 C, 10 D.
 */

import { Task, QuizQuestion } from '../../types/roadmap.types';

export const YOUTUBE_ADS_ADVANCED_FINAL_ASSESSMENT: QuizQuestion[] = ${JSON.stringify(rawExamQuestions, null, 2)};

export const YOUTUBE_ADS_ADVANCED_TASKS: Task[] = ${JSON.stringify(allAdvancedTasks, null, 2)};
`;

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log('✅ Successfully generated complete YouTube Ads Advanced data at: ' + targetPath + ` (${allAdvancedTasks.length} tasks, ${rawExamQuestions.length} MCQs)`);
