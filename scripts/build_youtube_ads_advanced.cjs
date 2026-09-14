const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../src/features/roadmap/data/youtube-ads/youtubeAdsAdvanced.data.ts');

const advancedModules = [
  {
    id: "yt-adv-01",
    title: "1. Ads Data Hub (ADH) & BigQuery SQL for Video Measurement",
    summary: "Querying aggregated YouTube ad impression and conversion logs in Ads Data Hub with BigQuery SQL and differential privacy aggregation controls.",
    objectives: [
      "Set up Ads Data Hub (ADH) environments linked to Google Ads and Campaign Manager 360",
      "Write multi-table SQL joins on impression, click, and custom floodlight conversion logs",
      "Comply with 50-user aggregation thresholds and differential privacy filtering requirements"
    ],
    markdown: `### Ads Data Hub Architecture & Privacy-Safe Video Analysis

With third-party cookie deprecation and tightened device privacy (Apple ATT, Privacy Sandbox), user-level device IDs are masked across Google's ad inventory. **Ads Data Hub (ADH)** provides an enterprise privacy-safe computing environment built on Google Cloud Platform and BigQuery. It allows advertisers to join first-party CRM data with Google's log-level YouTube impression, view, and engagement records without exporting raw user identifiers.

\`\`\`
+----------------------------+       +----------------------------+
| Google Ads YouTube Event   |       | First-Party Data (BigQuery)|
| Impression Logs (Private)  |       | Offline Orders / User CRM  |
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

#### Key Privacy Restrictions
1. **50-User Threshold**: Every output group row must represent at least 50 distinct individual users. If fewer than 50 users meet the group criteria, the row is filtered out by the privacy check.
2. **Differential Privacy Noise**: Small noise additions prevent individual re-identification via subtraction across repeated queries.
3. **No Row-Level Export**: You cannot export individual \`user_id\` or \`device_id\` records.

\`\`\`sql
-- Ads Data Hub Query: Cross-Device Frequency & Conversion Cohort Analysis
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
ORDER BY total_users_reached DESC;
\`\`\`

#### Custom Match First-Party CRM Joins in ADH
By storing SHA-256 hashed customer identifiers (\`email_hash\`, \`phone_hash\`) in a private Google Cloud BigQuery dataset, you can match CRM purchases with top-of-funnel YouTube touchpoints:

\`\`\`sql
-- Joining Offline CRM Cohorts with YouTube Video Engagements
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
HAVING COUNT(DISTINCT yt.user_id) >= 50;
\`\`\`

\`\`\`json
{
  "adhQueryConfiguration": {
    "queryName": "youtube_first_party_offline_attribution",
    "linkedGoogleAdsAccounts": ["123-456-7890", "987-654-3210"],
    "destinationDataset": "projects/my-gcp-project/datasets/adh_attribution_exports",
    "privacyThreshold": 50,
    "privacyCheckStatus": "PASSED"
  }
}
\`\`\``,
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
    objectives: [
      "Deploy Google Ads Scripts using the modern JavaScript V8 runtime",
      "Automate negative placement exclusion lists based on view rate and conversion thresholds",
      "Trigger Slack and email alerts for sudden spend velocity spikes or high-CPA anomalies"
    ],
    markdown: `### Automated Video Operations with Google Ads JavaScript API

Manual management of high-volume YouTube campaigns across hundreds of ad groups and creatives leads to delayed reactions during spend spikes or creative fatigue. **Google Ads Scripts** execute directly within the Google Ads environment, querying live reporting metrics and applying mutate actions programmatically.

\`\`\`javascript
/**
 * Automated YouTube Video Placement & Creative Fatigue Cleaner
 * Scans video campaigns for high CPA or low view-rate placements and alerts Slack
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
      metrics.cost_per_conversion,
      metrics.video_views,
      metrics.impressions
    FROM ad_group
    WHERE campaign.advertising_channel_type = 'VIDEO'
      AND campaign.status = 'ENABLED'
      AND ad_group.status = 'ENABLED'
      AND segments.date DURING LAST_7_DAYS
  \`;

  const report = AdsApp.search(query);
  const flaggedAdGroups = [];

  while (report.hasNext()) {
    const row = report.next();
    const cost = row.metrics.costMicros / 1000000;
    const conversions = parseFloat(row.metrics.conversions);
    const cpa = conversions > 0 ? cost / conversions : cost;

    if (cost >= MIN_SPEND_FOR_EVAL_USD && (conversions === 0 || cpa > CPA_THRESHOLD_USD)) {
      flaggedAdGroups.push({
        campaignName: row.campaign.name,
        adGroupName: row.adGroup.name,
        cost: cost.toFixed(2),
        conversions: conversions,
        cpa: cpa.toFixed(2)
      });
    }
  }

  if (flaggedAdGroups.length > 0) {
    sendSlackAlert(SLACK_WEBHOOK_URL, flaggedAdGroups);
  }
}

function sendSlackAlert(webhookUrl, alerts) {
  let messageText = '*[Alert] High CPA / Zero-Conversion Video Ad Groups Detected:*\\n';
  alerts.forEach(a => {
    messageText += \`• *Campaign:* \${a.campaignName} | *AdGroup:* \${a.adGroupName} | *Spend:* $\${a.cost} | *Conv:* \${a.conversions} | *CPA:* $\${a.cpa}\\n\`;
  });

  UrlFetchApp.fetch(webhookUrl, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ text: messageText })
  });
}
\`\`\`

#### Dynamic Negative Placement Synchronizer
Automatically apply non-converting or kids-channel domain exclusions across all active video campaigns:

\`\`\`javascript
/**
 * Synchronize Master Video Placement Exclusion List to All YouTube Campaigns
 */
function syncSharedVideoExclusions() {
  const EXCLUSION_LIST_NAME = 'Master YouTube Placements Exclusion List';
  const sharedSetIterator = AdsApp.negativeKeywordLists().withCondition(\`name = '\${EXCLUSION_LIST_NAME}'\`).get();

  if (!sharedSetIterator.hasNext()) {
    Logger.log('Exclusion list not found: ' + EXCLUSION_LIST_NAME);
    return;
  }
  
  const sharedList = sharedSetIterator.next();
  const campaignIterator = AdsApp.videoCampaigns().withCondition('status = ENABLED').get();
  
  while (campaignIterator.hasNext()) {
    const campaign = campaignIterator.next();
    Logger.log('Auditing campaign: ' + campaign.getName());
    // Attach shared set if not already linked
  }
}
\`\`\`

\`\`\`json
{
  "scriptSchedule": {
    "frequency": "HOURLY",
    "timezone": "America/New_York",
    "retryOnFailure": true,
    "maxRuntimeSeconds": 1800,
    "v8RuntimeEngine": true
  }
}
\`\`\``,
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
    objectives: [
      "Configure live stream video ad insertions and dynamic mid-rolls during broadcasts",
      "Deploy pinned chat CTA links and interactive community polls synchronized with product drops",
      "Manage real-time dayparting and bid multipliers during peak concurrent viewership (CCV)"
    ],
    markdown: `### Monetizing and Scaling YouTube Live Streams

Live video on YouTube generates massive synchronous attention. Viewers of live streams exhibit 3x higher comment rates and 4x longer session durations compared to on-demand videos. Capturing value requires a dual strategy: direct ad injection through YouTube Studio Live Control Room and synchronized paid YouTube Ad campaigns targeted at live inventory.

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
\`\`\`

#### Live Mid-Roll Insertion Strategy
YouTube Studio provides automated and manual live ad insertion options:
- **Automated Insertion**: Google AI detects natural pauses in speech and game pauses to trigger 15-30 second non-skippable mid-rolls.
- **Manual Insertion Button**: The producer hits "Insert Ad" right before planned stream intermissions or segment transitions.

\`\`\`json
{
  "liveBroadcastConfig": {
    "broadcastTitle": "Summer Product Launch & Developer Keynote Live",
    "adInsertionMode": "HYBRID_MANUAL_FALLBACK",
    "targetAdFrequencyMinutes": 18,
    "maxMidrollDurationSeconds": 30,
    "chatModeration": {
      "pinnedMessage": {
        "text": "🎉 Special Launch Offer: Get 25% off with code LIVE25 at checkout!",
        "linkUrl": "https://brand.com/launch?utm_source=youtube_live&utm_medium=pinned_chat&utm_campaign=summer_drop",
        "durationMinutes": 60
      }
    }
  }
}
\`\`\`

#### Real-Time Ad Campaign Boost via Google Ads API
During a live broadcast, advertisers can boost bidding on targeted search and discovery ad groups using scheduled API triggers:

\`\`\`python
# Python Script to Boost Live Stream Discovery Ad Bids during High Concurrent Viewership
import requests

def update_live_campaign_bid_modifier(client, customer_id, campaign_id, modifier_pct):
    campaign_service = client.get_service("CampaignService")
    campaign_operation = client.get_type("CampaignOperation")
    campaign = campaign_operation.update
    campaign.resource_name = campaign_service.campaign_path(customer_id, campaign_id)
    
    # Adjust Target CPA or Bid Multiplier
    campaign.target_cpa.target_cpa_micros = int(modifier_pct * 1000000)
    
    # Issue mutate request
    response = campaign_service.mutate_campaigns(
        customer_id=customer_id,
        operations=[campaign_operation]
    )
    print(f"Updated live campaign {campaign_id} bid modifier successfully.")
\`\`\`

\`\`\`json
{
  "liveSponsorshipBestPractices": [
    "Place pinned chat links 2 minutes before verbal host callouts",
    "Maintain a 60-second cooldown period after mid-roll ads before critical announcements",
    "Coordinate live YouTube creator sponsorships with synchronized brand takeover ads"
  ]
}
\`\`\``,
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
    objectives: [
      "Design randomized geo-experiment frameworks using Google Ads Conversion Lift and Geo-lift",
      "Calculate Incrementality Ratio (iROAS) and Incremental Cost Per Acquisition (iCPA)",
      "Calibrate Media Mix Models (Google Meridian / LightweightMMM) with experimental lift priors"
    ],
    markdown: `### Measuring True Causal Incrementality

Last-click attribution severely undervalues top-and-middle funnel YouTube video ads because viewers often watch a video on mobile or TV and convert later via direct URL or brand search. Relying strictly on GA4 last-click models results in premature budget cuts to high-performing video channels. **True Incrementality Testing** separates correlation from causation.

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
\`\`\`

#### Key Mathematical Formulations
$$\\text{Incremental Conversions} = \\text{Conversions}_{\\text{Treatment}} - \\left(\\text{Conversions}_{\\text{Holdout}} \\times \\frac{\\text{Users}_{\\text{Treatment}}}{\\text{Users}_{\\text{Holdout}}}\\right)$$

$$\\text{iCPA} = \\frac{\\text{Total YouTube Ad Spend}}{\\text{Incremental Conversions}}$$

$$\\text{iROAS} = \\frac{\\text{Incremental Revenue (USD)}}{\\text{Total YouTube Ad Spend (USD)}}$$

#### Geo-Lift Matched Market Design in Python
\`\`\`python
import pandas as pd
import numpy as np

def calculate_geo_incrementality(spend, treatment_sales, control_sales, pre_treatment_ratio):
    """
    Calculates Incremental Lift, iCPA, and iROAS from a matched-market geo experiment.
    pre_treatment_ratio = baseline historical sales ratio (treatment / control)
    """
    expected_baseline_sales = control_sales * pre_treatment_ratio
    incremental_sales = treatment_sales - expected_baseline_sales
    
    iroas = incremental_sales / spend
    lift_percentage = (incremental_sales / expected_baseline_sales) * 100
    
    return {
        "ad_spend": round(spend, 2),
        "actual_sales": round(treatment_sales, 2),
        "expected_baseline": round(expected_baseline_sales, 2),
        "incremental_revenue": round(incremental_sales, 2),
        "iroas": round(iroas, 2),
        "lift_pct": round(lift_percentage, 2)
    }

# Example Experiment Run
res = calculate_geo_incrementality(
    spend=50000.00,
    treatment_sales=280000.00,
    control_sales=210000.00,
    pre_treatment_ratio=1.05
)
print(res)
# Output: {'ad_spend': 50000.0, 'actual_sales': 280000.0, 'expected_baseline': 220500.0, 'incremental_revenue': 59500.0, 'iroas': 1.19, 'lift_pct': 26.98}
\`\`\`

#### Google Meridian Media Mix Model (MMM) Integration
Meridian is Google's open-source Bayesian MMM. Calibrate Meridian by feeding YouTube incrementality test results as Bayesian priors:

\`\`\`python
# Configuring YouTube Ad Prior in Google Meridian MMM
from meridian.model import prior_distribution

youtube_prior = prior_distribution.LogNormal(
    mean=1.20, # Prior iROAS from conversion lift experiment
    sigma=0.25 # Confidence interval variance
)
\`\`\`

\`\`\`json
{
  "liftStudyChecklist": {
    "minimumHoldoutSizePct": 15,
    "minimumTestDurationDays": 28,
    "confidenceLevelRequired": 0.95,
    "ghostAdMethodology": "USER_ID_LEVEL_RANDOMIZATION"
  }
}
\`\`\``,
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
    objectives: [
      "Automate Customer Match list synchronization using Google Ads API v17 CustomerMatchService",
      "Deploy privacy-preserving cryptographic hashing (SHA-256) on PII fields prior to network transit",
      "Structure multi-tier lifetime value (LTV) cohorts for automated value-based bidding"
    ],
    markdown: `### Enterprise Customer Match & Clean Room Pipelines

Relying on manual CSV uploads for Customer Match leads to stale audience segments, degraded match rates, and regulatory compliance risks under GDPR/CCPA. Enterprise architectures stream first-party CRM data directly from Customer Data Platforms (CDP) and Data Clean Rooms into Google Ads via automated API endpoints.

\`\`\`
+------------------+       +-------------------+       +-----------------------+
| Snowflake / CDP  | ----> | Cloud Function    | ----> | Google Ads API        |
| (Raw First-Party)|       | (SHA-256 Normal.) |       | (CustomerMatchService)|
+------------------+       +-------------------+       +-----------------------+
                                                                   |
                                                                   v
                                                       +-----------------------+
                                                       | YouTube VAC & PMax    |
                                                       | Smart Bidding Target  |
                                                       +-----------------------+
\`\`\`

#### PII Normalization & SHA-256 Hashing Rules
Before sending customer data to Google's servers, PII must be normalized and hashed:
- **Email**: Trim leading/trailing whitespace, convert all characters to lowercase, remove periods before \`@gmail.com\`, and apply SHA-256.
- **Phone**: Format in E.164 standard (e.g., \`+14155552671\`), remove all hyphens and parentheses, and hash.

\`\`\`python
import hashlib
import re

def normalize_and_hash_email(email_str: str) -> str:
    """Normalizes and hashes email string per Google Customer Match specs."""
    if not email_str:
        return ""
    cleaned = email_str.strip().lower()
    # Handle gmail domain dots
    parts = cleaned.split('@')
    if len(parts) == 2 and parts[1] in ['gmail.com', 'googlemail.com']:
        local_part = parts[0].replace('.', '')
        # Remove plus alias (e.g., user+promo@gmail.com -> user@gmail.com)
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

# Test Normalization
print(normalize_and_hash_email(" John.Doe+testing@Gmail.com "))
# Hashed SHA-256 output
\`\`\`

#### Google Ads API User List Upload Job
\`\`\`python
# Streaming User Hashed Records via Google Ads API OfflineUserDataJobService
def upload_customer_match_cohort(client, customer_id, user_list_id, hashed_users):
    user_data_service = client.get_service("OfflineUserDataJobService")
    job_operation = client.get_type("OfflineUserDataJob")
    job_operation.type_ = client.enums.OfflineUserDataJobTypeEnum.CUSTOMER_MATCH_USER_LIST
    job_operation.customer_match_user_list_metadata.user_list = f"customers/{customer_id}/userLists/{user_list_id}"
    
    # 1. Create Job
    job_response = user_data_service.create_offline_user_data_job(
        customer_id=customer_id, job=job_operation
    )
    job_resource = job_response.resource_name
    
    # 2. Add operations with hashed records
    operations = []
    for u in hashed_users:
        op = client.get_type("OfflineUserDataJobOperation")
        user_identifier = op.create.user_identifiers.add()
        user_identifier.hashed_email = u['email_hash']
        operations.append(op)
        
    user_data_service.add_offline_user_data_job_operations(
        resource_name=job_resource,
        enable_partial_failure=True,
        operations=operations
    )
    
    # 3. Run Job
    user_data_service.run_offline_user_data_job(resource_name=job_resource)
    print(f"Dispatched Customer Match sync job: {job_resource}")
\`\`\`

\`\`\`json
{
  "customerMatchTiers": [
    { "tier": "VIP_LTV_TOP_10_PCT", "targetBidMultiplier": 1.45, "refreshCadence": "DAILY" },
    { "tier": "CHURN_RISK_90_DAYS", "targetBidMultiplier": 0.85, "refreshCadence": "HOURLY" },
    { "tier": "RECENT_BUYERS_30_DAYS", "exclusionList": true, "refreshCadence": "REAL_TIME" }
  ]
}
\`\`\``,
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
    objectives: [
      "Engineer video metadata (titles, descriptions, schema JSON-LD, timestamps) for high organic search rank",
      "Deploy In-Feed video ads on competitive keyword search result pages (SERPs)",
      "Leverage the Organic-to-Paid Flywheel to boost long-term organic algorithmic recommendations"
    ],
    markdown: `### The Organic-Paid Flywheel for YouTube Search

YouTube is the world's second-largest search engine. When a brand runs paid In-Feed Video Ads targeted to specific high-intent search terms, it generates rapid initial watch time, high completion rates, and subscriber conversions. The YouTube organic recommendation algorithm interprets these positive engagement signals as quality indicators, catapulting the video into organic search and suggested video shelves.

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
                |                                   |
                +-----------------+-----------------+
                                  |
                                  v
              +---------------------------------------+
              | Total Search Real Estate Domination   |
              | 2x Brand Impression & Click Share     |
              +---------------------------------------+
\`\`\`

#### Schema.org VideoObject JSON-LD Implementation
Adding structured data to the hosting landing page ensures Google Search surfaces video rich snippets with key moments:

\`\`\`html
<script type="application/ld+json">
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
</script>
\`\`\`

#### In-Feed Discovery Ad Strategy
- **Thumbnail Optimization**: Use a bold, 3-word title overlay and high-contrast facial reaction image.
- **Search Term Query Sculpting**: Target exact and phrase match intent keywords (e.g., \`"how to use [Software]"\`, \`"[Competitor] alternative"\`).
- **First 30 Seconds Retention Hook**: Immediately answer the search query before introducing the core brand narrative.

\`\`\`json
{
  "organicPaidSynergyMetrics": {
    "targetWatchTimeHours": 4000,
    "paidSearchSpendUSD": 1500,
    "organicViewsGained": 18500,
    "paidToOrganicViewMultiplier": 3.8,
    "subscriberAcquisitionCost": 2.15
  }
}
\`\`\``,
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
    objectives: [
      "Implement Global Alliance for Responsible Media (GARM) 11-category brand suitability matrix",
      "Integrate third-party pre-bid and post-bid verification vendors (IAS, DoubleVerify, Zefr)",
      "Configure contextual AI placement filtering and negative topic exclusion hierarchies"
    ],
    markdown: `### Enterprise Brand Safety & GARM Framework Alignment

For global enterprise brands, ad placement next to harmful, violent, or politically extremist content carries severe reputational risk. YouTube operates under the **Global Alliance for Responsible Media (GARM)** framework, offering three standardized inventory tiers: Expanded, Standard, and Limited Inventory.

\`\`\`
+--------------------------------------------------------------------+
|                YouTube Content Suitability Tiers                   |
+--------------------+-----------------------+-----------------------+
| Expanded Inventory | Standard Inventory    | Limited Inventory     |
| (Maximum Reach)    | (Default Recommended) | (Strict Safety)       |
| Excludes extreme   | Excludes repeated     | Excludes all moderate |
| hate / profanity   | profanity, violence   | sensitivity / gaming  |
+--------------------+-----------------------+-----------------------+
\`\`\`

#### Third-Party Verification Integrations
Enterprise advertisers link measurement partners to Google Campaign Manager 360 and Google Ads:
1. **Zefr**: Contextual video-level analysis using AI to categorize every video frame and transcript against GARM standards.
2. **Integral Ad Science (IAS)**: Pre-bid suitability filtering and post-bid reporting on viewability and invalid traffic (IVT).
3. **DoubleVerify (DV)**: DV Authentic Attention metric integration and custom brand safety profile enforcement.

\`\`\`json
{
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
}
\`\`\`

#### Programmatic Channel & Category Exclusion Script
\`\`\`javascript
/**
 * Automated Verification of Brand Safety Placement Compliance
 */
function auditBrandSafetyPlacements() {
  const SENSITIVE_KEYWORDS = ['violence', 'prank', 'arrest', 'scandal', 'leak', 'tragedy'];
  const placements = AdsApp.videoTargeting().placements().get();
  
  let flaggedCount = 0;
  while (placements.hasNext()) {
    const p = placements.next();
    const url = p.getUrl().toLowerCase();
    
    if (SENSITIVE_KEYWORDS.some(k => url.includes(k))) {
      Logger.log('Flagged sensitive placement: ' + url);
      // Automatically exclude placement
      flaggedCount++;
    }
  }
  Logger.log('Total placements audited. Flagged for review: ' + flaggedCount);
}
\`\`\`

\`\`\`json
{
  "verificationBenchmarks": {
    "acceptableIVTRate": "< 1.0%",
    "targetBrandSuitabilityPassRate": "> 99.5%",
    "minimumViewabilityScore": "> 75.0%"
  }
}
\`\`\``,
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
    objectives: [
      "Construct multi-stage narrative sequences: Tease -> Amplify -> Echo -> Call-to-Action",
      "Configure conditional branching based on Impression vs. Full View vs. Skip interaction",
      "Optimize sequence progression duration and audience step decay windows"
    ],
    markdown: `### Narrative Video Ad Sequencing (VAS)

Linear repetitive ad delivery causes viewer annoyance and rapid frequency fatigue. **Video Ad Sequencing (VAS)** delivers a curated story arc across multiple video ads, showing subsequent creatives only after a viewer has either seen, skipped, or fully watched the preceding step.

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
\`\`\`

#### Sequence Architecture Frameworks
1. **Tease, Amplify, Echo**:
   - *Tease*: 6s Bumper introduces the brand problem.
   - *Amplify*: 30s Skippable ad reveals the solution and social proof.
   - *Echo*: 6s Bumper reminds them of the offer.
2. **The Direct Response Ladder**:
   - *Step 1*: Long-form problem demonstration (60s).
   - *Step 2 (If skipped)*: Short 15s condensed pitch.
   - *Step 3 (If watched)*: Product catalog grid with direct purchase discount.

\`\`\`json
{
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
}
\`\`\`

#### Sequence Step Transition Query
\`\`\`sql
-- BigQuery / Ads Data Hub: Auditing Video Ad Sequence Funnel Velocity
SELECT
  sequence_step_name,
  impressions,
  video_views,
  ROUND(video_views / impressions * 100, 2) AS completion_rate_pct,
  conversions,
  cost_usd
FROM \`ad_reporting.youtube_vas_performance\`
WHERE campaign_id = '10928374'
ORDER BY sequence_step_index ASC;
\`\`\`

\`\`\`json
{
  "sequenceExecutionRules": [
    "Ensure sequence audience size exceeds 500,000 users for smooth step progression",
    "Set sequence window to 30 days to allow natural cross-device viewing",
    "Cap individual step frequency to 1 impression per 24-hour cycle"
  ]
}
\`\`\``,
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
    objectives: [
      "Implement automated dynamic creative replacement workflows for global ad localization",
      "Deploy multi-lingual audio tracks, closed captions (.srt), and regional currency pricing",
      "Manage geo-segmented campaign hierarchies with localized URL parameters and CDNs"
    ],
    markdown: `### Global Scale: Dynamic Creative Optimization (DCO)

Expanding video ad campaigns across international markets (EMEA, APAC, LATAM) requires localization that extends beyond simple subtitle translation. Culturally resonant creative requires localized voiceovers, localized on-screen product currency, and regionally compliant disclaimer legal text.

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
\`\`\`

#### Localization Feed Schema
A dynamic creative feed pairs localized assets with target geography codes and language settings:

\`\`\`json
{
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
}
\`\`\`

#### SubRip (.SRT) Caption Automation Pipeline
Embedding accurate, synchronized captions improves video watch time by 28% for mobile users who watch with sound muted:

\`\`\`
1
00:00:01,000 --> 00:00:04,500
Stop wasting hours on manual campaign reporting.

2
00:00:04,600 --> 00:00:08,200
Our automated AI engine syncs your ad data in real time.

3
00:00:08,300 --> 00:00:12,000
Start your 14-day free trial today. Click the link below!
\`\`\`

#### Multi-Country Google Ads Campaign Naming Standard
\`\`\`json
{
  "namingStandard": "GEO_LANG_CHANNEL_OBJECTIVE_OFFER_BIDMODE",
  "examples": [
    "US_EN_YOUTUBE_VAC_TRIAL_TCPA",
    "DE_DE_YOUTUBE_VAC_TRIAL_TCPA",
    "JP_JA_YOUTUBE_VAC_TRIAL_TCPA"
  ]
}
\`\`\``,
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
    objectives: [
      "Analyze Connected TV (CTV) viewing metrics, co-viewing audience multipliers, and household reach",
      "Design interactive TV video ads featuring high-contrast scan-to-purchase QR codes",
      "Configure device bid modifiers and dedicated CTV campaign segmentations"
    ],
    markdown: `### The Connected TV (CTV) Revolution on YouTube

Over 52% of YouTube watch time in the United States and major tier-1 markets occurs on Connected TV screens (smart TVs, Roku, Apple TV, gaming consoles). CTV transforms YouTube from a solitary mobile viewing experience into a shared, living-room co-viewing environment where multiple family members watch together.

\`\`\`
+--------------------------------------------------------------------+
|                   Connected TV (Living Room Screen)                |
|                                                                    |
|   +---------------------------------------+  +-----------------+   |
|   | 4K High-Production Storytelling Video |  | Dynamic QR Code |   |
|   | 16:9 Aspect Ratio / 5.1 Surround Sound|  | Scan with Phone |   |
|   | Clear 30-Second Narrative             |  | [Direct App/URL]|   |
|   +---------------------------------------+  +-----------------+   |
|                                                                    |
|   +------------------------------------------------------------+   |
|   | Send to Phone Feature: "Press Select on remote to open URL"|   |
|   +------------------------------------------------------------+   |
+--------------------------------------------------------------------+
\`\`\`

#### Co-Viewing Metrics & Multipliers
When evaluating CTV impressions, Nielsen and Google apply a **Co-Viewing Factor** (typically 1.3x to 1.6x) to account for additional household viewers present in the room:

$$\\text{Total CTV Audience Reach} = \\text{CTV Device Impressions} \\times \\text{Co-Viewing Multiplier (e.g. 1.42)}$$

#### Interactive TV Features: Scan-to-Phone & Remote Clicks
1. **Interactive QR Codes**: Positioned on the right side of the screen for at least 15 seconds with a high-contrast white border and actionable caption.
2. **Send to Phone**: Viewers click the "Select" button on their TV remote, which sends a notification or SMS link directly to their signed-in smartphone.

\`\`\`json
{
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
}
\`\`\`

#### CTV Performance Comparison Query
\`\`\`sql
-- BigQuery / ADH: Performance Breakdown Across Mobile vs Desktop vs CTV
SELECT
  device_type,
  SUM(impressions) AS total_impressions,
  SUM(video_views) AS total_views,
  ROUND(SAFE_DIVIDE(SUM(video_views), SUM(impressions)) * 100, 2) AS view_rate_pct,
  ROUND(SUM(cost_usd), 2) AS total_spend_usd,
  ROUND(SAFE_DIVIDE(SUM(cost_usd), SUM(impressions)) * 1000, 2) AS effective_cpm,
  SUM(conversions) AS total_conversions
FROM \`ad_data.youtube_device_summary\`
WHERE event_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
GROUP BY device_type
ORDER BY total_impressions DESC;
\`\`\`

\`\`\`json
{
  "ctvOptimizationTactics": [
    "Isolate CTV inventory into dedicated campaigns to prevent mobile budget draining",
    "Keep QR code on screen for at least 15 seconds to give viewers time to grab their phones",
    "Use 5.1 surround sound mastering and large typography legible from 10 feet away"
  ]
}
\`\`\``,
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
    objectives: [
      "Configure vertical 9:16 video ad assets within Video Action and Demand Gen campaigns",
      "Optimize Shorts-specific retention curves and native sound-design cues",
      "Automate high-velocity variation testing across hooks, voiceovers, and dynamic stickers"
    ],
    markdown: `### Dominating YouTube Shorts Advertising

YouTube Shorts generates over 70 billion daily views. The Shorts feed operates on an ultra-fast, swipe-driven browsing mechanic. Unlike traditional 16:9 landscape ads where viewers decide to skip after 5 seconds, Shorts viewers make swipe decisions within the first 1.5 to 2.5 seconds.

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
\`\`\`

#### The 9:16 Safe Zone Guidelines
UI elements (like, comment, share buttons on the right; channel icon and headline at the bottom) cover portions of the vertical screen. Keep all text overlays and product focal points within the central **Safe Zone**:
- **Top Margin**: Keep 15% clear of text.
- **Bottom Margin**: Keep 25% clear of text to avoid CTA button overlap.
- **Right Margin**: Keep 15% clear of text to avoid engagement icons.

\`\`\`json
{
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
}
\`\`\`

#### Automated Shorts Variation Generator Script (FFmpeg)
\`\`\`bash
#!/bin/bash
# Batch Render 9:16 Shorts Hook Variations with FFmpeg
HOOKS=("Hook_Problem" "Hook_Curiosity" "Hook_SocialProof")

for HOOK in "\${HOOKS[@]}"; do
  ffmpeg -i "\${HOOK}.mp4" -i "Body_Core_Product.mp4" -i "CTA_EndCard.mp4" \\
    -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a]concat=n=3:v=1:a=1[v][a]" \\
    -map "[v]" -map "[a]" -c:v libx264 -preset fast -crf 18 \\
    -c:a aac -b:a 192k "Shorts_Render_\${HOOK}.mp4"
  echo "Rendered variation: Shorts_Render_\${HOOK}.mp4"
done
\`\`\`

\`\`\`json
{
  "shortsCampaignExecutionRules": [
    "Always include at least 3 distinct vertical 9:16 videos per Demand Gen / VAC ad group",
    "Use fast-cut editing with visual scene transitions every 1.5 seconds",
    "Include high-contrast dynamic captions in the upper-middle safe zone"
  ]
}
\`\`\``,
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
    objectives: [
      "Analyze the neural network architecture behind Google Target CPA and Target ROAS video bidding",
      "Model conversion lag and attribution delays to prevent premature bid dampening",
      "Deploy First-Party Value-Based Bidding (VBB) with dynamic customer margin optimization"
    ],
    markdown: `### Inside Google Smart Bidding for Video

Google Ads Smart Bidding uses machine learning neural networks trained on petabytes of cross-network conversion data. During every single live ad auction, the algorithm evaluates hundreds of real-time signals to calculate the exact probability of conversion:

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
\`\`\`

#### Conversion Lag & Attribution Window Adjustments
In high-ticket B2B or complex e-commerce, users may convert 7 to 21 days after watching an ad. Evaluating performance on day 2 creates an illusion of high CPA because ad spend is recorded immediately, while conversions arrive gradually:

\`\`\`python
# Modeling Conversion Lag Decay in Python
import numpy as np
import matplotlib.pyplot as plt

def estimate_mature_conversions(observed_conversions, days_elapsed, lag_curve):
    """
    Adjusts observed conversions based on historical conversion lag maturation curve.
    """
    maturity_pct = lag_curve.get(days_elapsed, 1.0)
    projected_final_conversions = observed_conversions / maturity_pct
    return projected_final_conversions

# Historical Lag Curve (Day: Cumulative % of conversions realized)
LAG_CURVE = {1: 0.35, 2: 0.55, 3: 0.70, 7: 0.85, 14: 0.95, 30: 1.00}

observed = 50
days_since_spend = 3
projected = estimate_mature_conversions(observed, days_since_spend, LAG_CURVE)
print(f"Observed: {observed} | Projected Mature Conversions: {projected:.1f}")
# Output: Observed: 50 | Projected Mature Conversions: 71.4
\`\`\`

#### Value-Based Bidding (VBB) Configuration
\`\`\`json
{
  "vbbStrategyConfig": {
    "biddingType": "MAXIMIZE_CONVERSION_VALUE",
    "targetRoas": 3.25,
    "conversionValues": {
      "leadSubmission": 25.00,
      "freeTrialSignup": 75.00,
      "paidSubscription": 450.00
    },
    "bidAdjustmentRule": "AUTOMATIC_SMART_BIDDING"
  }
}
\`\`\``,
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
    objectives: [
      "Structure multi-brand channel hierarchies linked to unified Google Ads Manager Accounts (MCC)",
      "Configure Content ID digital fingerprinting, asset ownership rules, and copyright monetization",
      "Enforce Role-Based Access Control (RBAC) and enterprise single sign-on (SSO) security"
    ],
    markdown: `### Enterprise Channel Governance & Multi-MCC Architecture

Global corporations with multiple subsidiary brands or regional divisions require a scalable governance framework. Consolidating brand assets under an enterprise **Google Ads Manager Account (MCC)** and **YouTube Brand Account Network** guarantees administrative control, unified billing, and uniform brand safety compliance.

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
                |                                 |
                +----------------+----------------+
                                 |
                                 v
+-----------------------------------------------------------------+
|             Linked YouTube Brand Channels & Content ID          |
| • Master Brand Channel         • Regional Localized Channels    |
| • Product Line Channels        • Verified Creator Partner Links |
+-----------------------------------------------------------------+
\`\`\`

#### Content ID Asset Ownership Policy
Enterprise brands protect original video, audio, and visual assets across YouTube using **Content ID**. When matching user-generated video is detected, automated rules execute:
- **Monetize**: Place ads on the user's video and claim all advertising revenue.
- **Track**: Collect viewership analytics without blocking the video.
- **Block**: Restrict the video from being viewed globally or in specific countries.

\`\`\`json
{
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
}
\`\`\`

#### RBAC Role Definitions in Google Ads & YouTube Studio
\`\`\`json
{
  "rbacPermissionMatrix": {
    "AdministrativeOwner": ["BILLING", "USER_MANAGEMENT", "MCC_LINKING", "API_DEV_TOKENS"],
    "MediaBuyerLead": ["CAMPAIGN_MUTATE", "BUDGET_ALLOCATION", "SCRIPTS_DEPLOY", "AUDIENCE_WRITE"],
    "CreativeSpecialist": ["VIDEO_UPLOAD", "PLAYLIST_ORG", "END_SCREEN_EDIT", "ASSET_VIEW"],
    "ExecutiveAuditor": ["READ_ONLY_REPORTING", "EXPORT_BIGQUERY"]
  }
}
\`\`\``,
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
    objectives: [
      "Incorporate generative video models (Google Veo) for automated B-roll synthesis and aspect ratio expansion",
      "Deploy AI voice cloning and real-time personalized avatar video ads",
      "Prepare campaign assets for Immersive Spatial Video and Augmented Reality ecosystems"
    ],
    markdown: `### The Next Frontier: Generative AI Video & Spatial Ads

The video advertising landscape is undergoing a monumental paradigm shift driven by foundation generative video models (such as **Google Veo** and **Imagen 3 Video**). Creative production cycles that previously required 6 weeks of live shoots and editing can now be generated, iterated, and tested algorithmically in hours.

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
\`\`\`

#### Generative Outpainting & Asset Synthesis with Google Veo
Google Ads AI automatically extends 16:9 landscape video assets into native vertical 9:16 formats by generating photorealistic extended backgrounds matching the camera's original focal lens and lighting.

\`\`\`json
{
  "generativeVideoGenerationPayload": {
    "model": "google-veo-enterprise-v2",
    "task": "OUTPAINTING_ASPECT_RATIO_EXPANSION",
    "sourceAssetId": "raw_footage_studio_car_commercial_1080p",
    "targetAspectRatios": ["9:16", "1:1"],
    "promptGuidance": "Maintain identical studio lighting, extend showroom floor reflections naturally downward, ultra-photorealistic 60fps",
    "outputFormat": "ProRes_422HQ"
  }
}
\`\`\`

#### Real-Time Contextual Video Assembly (Python Concept)
\`\`\`python
# Conceptual Architecture: Real-Time Dynamic Personalized Video Synthesizer
def assemble_contextual_ad(viewer_city, current_temp, user_first_name, discount_code):
    """
    Dynamically stitches AI-generated audio and personalized motion graphics.
    """
    selected_broll = "broll_sunny_city.mp4" if current_temp > 20 else "broll_cozy_indoor.mp4"
    personalized_voiceover = generate_elevenlabs_audio(
        f"Hey {user_first_name}, staying warm in {viewer_city}? Get 20% off with code {discount_code}!"
    )
    
    final_ad = render_video_pipeline(
        video_clip=selected_broll,
        audio_track=personalized_voiceover,
        overlay_text=f"SPECIAL OFFER FOR {viewer_city.upper()}: {discount_code}"
    )
    return final_ad
\`\`\`

\`\`\`json
{
  "horizonScanningKeyPrinciples": [
    "Generative AI shifts video production from static batch shooting to continuous algorithmic synthesis",
    "Real-time contextual adaptation increases viewer relevance and lowers creative production costs",
    "Spatial and immersive 3D formats on VisionOS and Android XR will redefine interactive product demos"
  ]
}
\`\`\``,
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
    title: "Capstone 1: Enterprise YouTube Ad Operations, First-Party Data Clean Rooms & Advanced Scripting Engine",
    description: "Architect and deploy an enterprise-grade YouTube advertising automation infrastructure featuring Ads Data Hub (ADH) BigQuery SQL pipelines, Google Ads Scripts for automated anomaly detection, Customer Match API sync, and multi-tier GARM brand safety enforcement.",
    deliverables: [
      "1. Ads Data Hub (ADH) SQL Query Architecture: Write full SQL script joining Google YouTube impression logs with first-party BigQuery CRM tables with 50-user threshold compliance",
      "2. Google Ads V8 JavaScript Automation Script: Deploy an automated script that monitors hourly video campaign CPA anomalies and fires alerts to Slack/Teams",
      "3. Negative Placement Synchronization Engine: Implement a master shared negative list script that automatically audits and excludes non-converting channels across all active video campaigns",
      "4. First-Party Customer Match API Pipeline: Python script normalizing customer emails/phones to SHA-256 and streaming OfflineUserDataJob records to Google Ads API",
      "5. GARM Brand Safety Matrix: Configuration file defining content suitability tiers, digital content label exclusions, and third-party verification partner (Zefr/IAS) parameters",
      "6. Dynamic Localization Feed Schema: Multi-lingual JSON creative feed mapping 5 global markets (US, UK, DE, JP, BR) with localized video assets, currency, and landing URLs",
      "7. Connected TV (CTV) Dedicated Campaign Setup: Isolate CTV inventory with 4K resolution specs, interactive QR code overlay placement, and co-viewing reach modeling",
      "8. Video Ad Sequencing (VAS) Narrative Funnel: 3-step conditional narrative sequence (Tease 6s -> Amplify 30s -> Direct Action VAC) with skip/view branch logic",
      "9. Content ID Monetization & Ownership Policy: Digital rights policy schema detailing automated Monetize, Track, and Block rules based on audio/video match percentages",
      "10. Enterprise MCC & RBAC Governance Matrix: Multi-tier Google Ads MCC architecture diagram and role-based access control permission table for cross-functional teams"
    ]
  },
  {
    id: "yt-adv-proj-02",
    title: "Capstone 2: Omnichannel Video Attribution, Incrementality Testing & AI Bidding Infrastructure",
    description: "Design and execute an advanced measurement and optimization system: randomized geo-lift incrementality experiments, Google Meridian Media Mix Modeling (MMM) calibration, conversion lag correction, and generative video AI (Veo) asset expansion workflows.",
    deliverables: [
      "1. Geo-Lift Incrementality Experiment Design: Matched-market geo testing framework with 15% holdout group, pre-test baseline modeling, and minimum 28-day duration",
      "2. Incrementality Ratio (iROAS) & iCPA Calculation Engine: Python module computing true causal lift, expected baseline sales, incremental conversions, and iROAS",
      "3. Google Meridian Media Mix Model (MMM) Calibration: Python script specifying Bayesian log-normal priors based on conversion lift experimental findings",
      "4. Conversion Lag Maturation Decay Model: Algorithmic model adjusting recent 1-14 day video conversion volumes against historical lag realization curves",
      "5. Value-Based Smart Bidding (VBB) Rule Architecture: Maximize Conversion Value and Target ROAS strategy configuration with dynamic lead/trial/customer valuation tiers",
      "6. YouTube Shorts 9:16 Creative Matrix & Safe Zone Guide: Vertical video asset production guidelines, fast-cut retention benchmarks, and batch variation rendering workflows",
      "7. YouTube Live Stream Sponsorship & Dynamic Ad Protocol: Deployment blueprint for live mid-roll insertions, pinned live chat promotional URLs, and real-time bid boosting",
      "8. Organic-Paid Flywheel SEO & In-Feed Strategy: VideoObject Schema.org JSON-LD markup with structured clips and competitive search query In-Feed targeting plan",
      "9. Generative Video Outpainting Workflow (Google Veo): Prompt guidance and rendering pipeline transforming 16:9 master footage into 9:16 vertical and 1:1 square assets",
      "10. Executive C-Suite Video Performance Dashboard: Interactive BI dashboard specification tracking iROAS, incremental revenue lift, blended MER, and cross-device reach"
    ]
  }
];

// Exactly 40 questions: exactly 10 A, 10 B, 10 C, 10 D
const rawExamQuestions = [
  // 10 with answer 0 (A)
  {
    id: "yt-adv-q1",
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
    id: "yt-adv-q2",
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
    id: "yt-adv-q3",
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
    id: "yt-adv-q4",
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
    id: "yt-adv-q5",
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
    id: "yt-adv-q6",
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
    id: "yt-adv-q7",
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
    id: "yt-adv-q8",
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
    id: "yt-adv-q9",
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
    id: "yt-adv-q10",
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
    id: "yt-adv-q11",
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
    id: "yt-adv-q12",
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
    id: "yt-adv-q13",
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
    id: "yt-adv-q14",
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
    id: "yt-adv-q15",
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
    id: "yt-adv-q16",
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
    id: "yt-adv-q17",
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
    id: "yt-adv-q18",
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
    id: "yt-adv-q19",
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
    id: "yt-adv-q20",
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
    id: "yt-adv-q21",
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
    id: "yt-adv-q22",
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
    id: "yt-adv-q23",
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
    id: "yt-adv-q24",
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
    id: "yt-adv-q25",
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
    id: "yt-adv-q26",
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
    id: "yt-adv-q27",
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
    id: "yt-adv-q28",
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
    id: "yt-adv-q29",
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
    id: "yt-adv-q30",
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
    id: "yt-adv-q31",
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
    id: "yt-adv-q32",
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
    id: "yt-adv-q33",
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
    id: "yt-adv-q34",
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
    id: "yt-adv-q35",
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
    id: "yt-adv-q36",
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
    id: "yt-adv-q37",
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
    id: "yt-adv-q38",
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
    id: "yt-adv-q39",
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
    id: "yt-adv-q40",
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

const fileContent = `/**
 * YouTube Ads Masterclass - Advanced Level Data
 * 14 In-Depth Theory Modules, 2 Comprehensive Capstone Projects, and 40 Certification Exam MCQs.
 * Balanced Answer Distribution: Exactly 10 A, 10 B, 10 C, 10 D.
 */

import { RoadmapLevel } from '../../types/roadmap.types';

export const YOUTUBE_ADS_ADVANCED_MODULES = ${JSON.stringify(advancedModules, null, 2)};

export const YOUTUBE_ADS_ADVANCED_PROJECTS = ${JSON.stringify(advancedProjects, null, 2)};

export const YOUTUBE_ADS_ADVANCED_EXAM = ${JSON.stringify(rawExamQuestions, null, 2)};

export const YOUTUBE_ADS_ADVANCED_LEVEL: RoadmapLevel = {
  id: "youtube-ads-advanced",
  title: "Advanced YouTube Ads: Enterprise Ops, Attribution & Clean Rooms",
  description: "Master Ads Data Hub SQL analytics, automated Google Ads scripts, multi-touch incrementality testing, Connected TV co-viewing, Clean Room CDPs, and generative video AI.",
  order: 3,
  modules: YOUTUBE_ADS_ADVANCED_MODULES.map((m, idx) => ({
    id: m.id,
    title: m.title,
    description: m.summary,
    duration: "40 min",
    order: idx + 1,
    learningObjectives: m.objectives,
    keyTakeaways: m.keyTakeaways,
    markdownContent: m.markdown
  })),
  project: {
    id: YOUTUBE_ADS_ADVANCED_PROJECTS[0].id,
    title: YOUTUBE_ADS_ADVANCED_PROJECTS[0].title,
    description: YOUTUBE_ADS_ADVANCED_PROJECTS[0].description,
    duration: "10 hours",
    deliverables: YOUTUBE_ADS_ADVANCED_PROJECTS[0].deliverables,
    gradingCriteria: [
      { name: "ADH BigQuery SQL Accuracy & Privacy Threshold", weight: 25 },
      { name: "Google Ads Script Anomaly Detection Engine", weight: 25 },
      { name: "Customer Match API & Hashing Architecture", weight: 25 },
      { name: "CTV, DCO & Brand Safety Verification Matrix", weight: 25 }
    ]
  },
  exam: {
    id: "yt-adv-exam",
    title: "YouTube Ads Master Certified Expert Exam",
    description: "40 comprehensive enterprise scenarios testing Ads Data Hub SQL, Google Ads automation scripts, incrementality testing, Meridian MMM, CTV co-viewing, and Generative Video AI.",
    timeLimitMinutes: 60,
    passingScore: 35, // 35/40 = 87.5%
    questions: YOUTUBE_ADS_ADVANCED_EXAM.map(q => ({
      id: q.id,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation
    }))
  }
};
`;

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log('Successfully generated YouTube Ads Advanced data at: ' + targetPath);
