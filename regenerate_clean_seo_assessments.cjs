const fs = require('fs');

const beginnerMcqs = [
  {
    id: 1,
    topic: 'Introduction to SEO',
    question: 'What is the fundamental difference between Organic Search (SEO) and Paid Search (PPC/SEM)?',
    options: [
      'Organic search listings earn traffic through relevance and authority without paying for clicks',
      'Organic search requires paying search engines for each click received',
      'Organic search guarantees immediate top rankings within 24 hours',
      'Paid search results appear below organic results on all devices'
    ],
    correctAnswer: 0,
    explanation: 'Organic search traffic is earned based on content relevance, technical health, and site authority without paying the search engine for clicks, whereas Paid Search (PPC) charges advertisers on a cost-per-click basis.'
  },
  {
    id: 2,
    topic: 'Search Engine Mechanics',
    question: 'What is the correct sequence of search engine operations from discovery to result presentation?',
    options: [
      'Ranking → Indexing → Crawling → Discovery',
      'Discovery → Crawling → Indexing → Ranking',
      'Indexing → Discovery → Ranking → Crawling',
      'Rendering → Ranking → Indexing → Discovery'
    ],
    correctAnswer: 1,
    explanation: 'Search engines discover URLs, crawl their content with automated bots, parse and store the information in an index, and rank eligible indexed documents in response to user queries.'
  },
  {
    id: 3,
    topic: 'Search Intent',
    question: 'A user searches for "how to fix a leaking kitchen faucet". What primary search intent does this query represent?',
    options: [
      'Navigational Intent',
      'Commercial Investigation Intent',
      'Informational Intent',
      'Transactional Intent'
    ],
    correctAnswer: 2,
    explanation: 'Queries starting with "how to", "what is", or seeking explanations have informational intent because the searcher is seeking knowledge or guidance rather than an immediate transaction.'
  },
  {
    id: 4,
    topic: 'Keyword Research',
    question: 'What is a key characteristic of long-tail keywords compared to short-tail "head" keywords?',
    options: [
      'Higher search volume and lower conversion rates',
      'Always limited to exactly one single word',
      'Ignored by modern search engine algorithms',
      'Lower search volume, higher specificity, and typically higher conversion intent'
    ],
    correctAnswer: 3,
    explanation: 'Long-tail keywords are multi-word, highly specific search queries that individually have lower search volume but collectively represent high-intent, targeted search traffic.'
  },
  {
    id: 5,
    topic: 'Keyword Priority Score',
    question: 'If a keyword has Business Relevance = 5, Search Intent Fit = 4, and Ranking Opportunity = 3 (all on a 1–5 scale), what is its Keyword Priority Score?',
    options: [
      '60',
      '12',
      '120',
      '30'
    ],
    correctAnswer: 0,
    explanation: 'Keyword Priority Score = Business Relevance × Search Intent Fit × Ranking Opportunity = 5 × 4 × 3 = 60 (out of 125 max).'
  },
  {
    id: 6,
    topic: 'On-Page SEO',
    question: 'Which HTML element serves as the primary clickable headline in search engine result pages and is a vital on-page ranking signal?',
    options: [
      '<meta name="description">',
      '<title>',
      '<blockquote>',
      '<figcaption>'
    ],
    correctAnswer: 1,
    explanation: 'The <title> tag defines the document title displayed on SERPs, browser tabs, and external shares, acting as one of the most important on-page relevance signals.'
  },
  {
    id: 7,
    topic: 'On-Page Structure',
    question: 'What is the recommended best practice for H1 heading tags on a standard content webpage?',
    options: [
      'Use 5 to 10 H1 tags per section to emphasize keywords',
      'Never include the primary keyword in the H1 tag',
      'Use exactly one clear, descriptive H1 tag representing the primary topic of the page',
      'Replace all H2 and H3 tags with H1 tags for maximum weight'
    ],
    correctAnswer: 2,
    explanation: 'Each page should have a single unique H1 tag that acts as the primary heading, establishing clear hierarchical structure followed by nested H2 and H3 subheadings.'
  },
  {
    id: 8,
    topic: 'Technical SEO Basics',
    question: 'What is the primary function of the "robots.txt" file on a website?',
    options: [
      'To style search engine results using CSS',
      'To speed up JavaScript execution in mobile browsers',
      'To purchase backlinks automatically',
      'To instruct web crawlers which URLs or directories they can or cannot request from the server'
    ],
    correctAnswer: 3,
    explanation: 'robots.txt provides crawl directives to web spiders (like Googlebot) telling them which paths they are allowed or disallowed from crawling.'
  },
  {
    id: 9,
    topic: 'Canonicalization',
    question: 'Why should an e-commerce product available via multiple parameter URLs (e.g., ?color=red, ?ref=social) include a canonical link element?',
    options: [
      'To specify the single authoritative URL to search engines and prevent duplicate content splitting',
      'To automatically translate the page into 12 languages',
      'To hide the product from customers',
      'To guarantee a number 1 position on Google'
    ],
    correctAnswer: 0,
    explanation: 'The rel="canonical" tag tells search engines which URL represents the master version, consolidating ranking signals and preventing duplicate content issues across URL parameters.'
  },
  {
    id: 10,
    topic: 'HTTP Redirects',
    question: 'Which HTTP redirect status code indicates a permanent URL relocation and passes the majority of accumulated link equity to the target URL?',
    options: [
      '302 Found',
      '301 Moved Permanently',
      '404 Not Found',
      '500 Internal Server Error'
    ],
    correctAnswer: 1,
    explanation: 'A 301 Moved Permanently response signals to search engines and browsers that the resource has permanently moved, safely transferring ranking signals and link equity to the destination URL.'
  },
  {
    id: 11,
    topic: 'Internal Linking & Architecture',
    question: 'What is an "orphan page" in website architecture and technical SEO?',
    options: [
      'A page located on an external competitor domain',
      'A page with more than 10,000 words',
      'A page on your website that has 0 internal links pointing to it from other pages',
      'A page written in a foreign language'
    ],
    correctAnswer: 2,
    explanation: 'An orphan page is a URL that exists on the server but has no internal links pointing to it, making it extremely difficult for crawlers to discover and users to navigate to.'
  },
  {
    id: 12,
    topic: 'Anchor Text Optimization',
    question: 'Which of the following internal link anchor texts provides the best contextual and semantic value to both users and search engines?',
    options: [
      '"click here"',
      '"read more"',
      '"link"',
      '"learn more in our complete running shoe size guide"'
    ],
    correctAnswer: 3,
    explanation: 'Descriptive, topic-rich anchor text clearly communicates the subject of the destination page, helping search engines understand topic relevance while improving user accessibility.'
  },
  {
    id: 13,
    topic: 'Image SEO',
    question: 'What is the primary purpose of the HTML image "alt" attribute in web design and SEO?',
    options: [
      'To provide descriptive alternative text for screen readers (accessibility) and explain image content to search engines',
      'To compress image files into WebP format',
      'To add a decorative drop shadow to the image',
      'To repeat the primary keyword 20 times secretly'
    ],
    correctAnswer: 0,
    explanation: 'Alt text describes the visual content of an image for visually impaired users using screen readers and assists search engine image indexing algorithms in understanding image context.'
  },
  {
    id: 14,
    topic: 'Local SEO Basics',
    question: 'What does "NAP consistency" represent in local search engine optimization?',
    options: [
      'Network Access Protocol speed',
      'Name, Address, and Phone number consistency across all online directories and citations',
      'Number of Advertised Products in store',
      'New Algorithm Performance metrics'
    ],
    correctAnswer: 1,
    explanation: 'NAP consistency refers to ensuring that a business\'s Name, Address, and Phone number are identical across its website, Google Business Profile, and all local directories.'
  },
  {
    id: 15,
    topic: 'SEO Analytics - CTR',
    question: 'If a webpage receives 500 organic clicks from 10,000 search impressions, what is its Click-Through Rate (CTR)?',
    options: [
      '0.5%',
      '20.0%',
      '5.0%',
      '50.0%'
    ],
    correctAnswer: 2,
    explanation: 'CTR = (Clicks / Impressions) × 100 = (500 / 10,000) × 100 = 5.0%.'
  },
  {
    id: 16,
    topic: 'SEO Analytics - Conversion Rate',
    question: 'If a blog article generated 2,000 organic sessions and resulted in 50 newsletter signups, what is the Conversion Rate?',
    options: [
      '0.25%',
      '10.0%',
      '4.0%',
      '2.5%'
    ],
    correctAnswer: 3,
    explanation: 'Conversion Rate = (Conversions / Sessions) × 100 = (50 / 2,000) × 100 = 2.5%.'
  },
  {
    id: 17,
    topic: 'SEO Analytics - Growth',
    question: 'If monthly organic search traffic increased from 8,000 sessions in January to 12,000 sessions in March, what was the Traffic Growth percentage?',
    options: [
      '+50.0%',
      '+33.3%',
      '+150.0%',
      '+66.7%'
    ],
    correctAnswer: 0,
    explanation: 'Traffic Growth % = ((New Traffic - Old Traffic) / Old Traffic) × 100 = ((12,000 - 8,000) / 8,000) × 100 = (4,000 / 8,000) × 100 = +50.0%.'
  },
  {
    id: 18,
    topic: 'SEO Auditing Prioritization',
    question: 'When prioritizing SEO audit issues using an Impact vs. Effort matrix, which tasks should be tackled first (Sprint 1)?',
    options: [
      'Low Impact, High Effort tasks',
      'High Impact, Low Effort "quick wins" (e.g., removing accidental robots.txt blocks, fixing high-volume 404s)',
      'Low Impact, Low Effort cosmetic adjustments',
      'Tasks that take 12 months with minimal business return'
    ],
    correctAnswer: 1,
    explanation: 'High-impact, low-effort recommendations (like unblocking critical sections in robots.txt or fixing broken top-revenue URLs) produce the fastest commercial recovery and ranking improvements.'
  },
  {
    id: 19,
    topic: 'Ethical SEO Practices',
    question: 'Which of the following tactics is explicitly categorized as a manipulative Black-Hat SEO practice that risks manual penalties from search engines?',
    options: [
      'Writing helpful, in-depth content that answers user questions thoroughly',
      'Adding structured data JSON-LD markup to recipe pages',
      'Creating hidden white text on a white background packed with keywords (keyword stuffing)',
      'Optimizing page load times by compressing images to WebP'
    ],
    correctAnswer: 2,
    explanation: 'Hidden text, cloaking, and keyword stuffing are deceptive black-hat techniques designed to manipulate search engines, violating search quality guidelines and risking algorithmic devaluation or manual actions.'
  },
  {
    id: 20,
    topic: 'SEO Strategy & Timelines',
    question: 'What is a realistic timeframe for a newly launched website to begin seeing compounding organic search traffic and rankings from sustainable SEO efforts?',
    options: [
      '2 to 4 hours',
      '7 to 10 days guaranteed',
      '30 to 45 minutes after clicking publish',
      '3 to 6+ months of consistent technical health, keyword-aligned content creation, and authority building'
    ],
    correctAnswer: 3,
    explanation: 'Organic SEO is a compounding long-term investment that typically requires 3 to 6+ months for search engines to crawl, index, establish trust, and test document authority against established competitors.'
  }
];

const intermediateMcqs = [
  {
    id: 1,
    topic: 'Advanced Keyword Research',
    question: 'When conducting topic clustering, what is the primary structural relationship between a pillar page and cluster articles?',
    options: [
      'The pillar page provides broad authority coverage, while cluster spoke articles target specific sub-topics and link bidirectionally to the pillar',
      'Cluster articles must rank for the exact same short-tail primary keyword as the pillar page',
      'Cluster pages should canonicalize back to the pillar page to avoid duplicate content flags',
      'Pillar pages must have no outgoing internal links to preserve link equity'
    ],
    correctAnswer: 0,
    explanation: 'Hub-and-spoke topic clustering establishes topical authority by using a broad pillar page connected via contextual bidirectional internal links to granular, long-tail cluster articles.'
  },
  {
    id: 2,
    topic: 'Keyword Cannibalization',
    question: 'How do you definitively diagnose keyword cannibalization between two competing URLs on your domain?',
    options: [
      'Both URLs share the same author and publication date',
      'Both URLs target the same search intent and fluctuate in Google Search Console rankings for the exact same query with split impressions and clicks',
      'One URL has higher word count than the other URL',
      'Both URLs appear in the same XML sitemap index'
    ],
    correctAnswer: 1,
    explanation: 'Keyword cannibalization occurs when multiple pages compete for the same query and search intent, causing the search engine algorithm to alternate or split ranking signals, impressions, and clicks between them.'
  },
  {
    id: 3,
    topic: 'Content Strategy & Decay',
    question: 'What is the most appropriate action when an audit identifies an older high-performing article undergoing content decay with dropping organic impressions?',
    options: [
      'Delete the article immediately and redirect to the home page',
      'Duplicate the article under a new URL with a fresh publication date',
      'Update and expand the content to match current search intent, refresh outdated data/screenshots, optimize on-page elements, and request re-indexing in GSC',
      'Add 50 keyword repetitions to the existing footer'
    ],
    correctAnswer: 2,
    explanation: 'Content decay is reversed by refreshing the existing URL with updated factual information, modern user intent coverage, enhanced media, and improved internal links while preserving accumulated URL equity.'
  },
  {
    id: 4,
    topic: 'Technical Auditing & Status Codes',
    question: 'What constitutes a "Soft 404" error in technical SEO auditing?',
    options: [
      'A server responding with an HTTP 404 status code for a missing page',
      'A 301 permanent redirect pointing to an external domain',
      'A page blocked by a robots.txt disallow directive',
      'A server returning an HTTP 200 OK status code for a page that visually displays "Page Not Found" or contains virtually no content'
    ],
    correctAnswer: 3,
    explanation: 'A Soft 404 occurs when a server serves an HTTP 200 OK response header for a page that communicates missing content or error messages to users, misleading crawlers and wasting crawl resources.'
  },
  {
    id: 5,
    topic: 'Core Web Vitals - LCP',
    question: 'What is the recommended threshold for Largest Contentful Paint (LCP) to pass Google Core Web Vitals assessment?',
    options: [
      'Less than or equal to 2.5 seconds at the 75th percentile of user page loads',
      'Less than or equal to 4.0 seconds at the 50th percentile',
      'Less than or equal to 100 milliseconds',
      'Less than or equal to 0.1 at the 90th percentile'
    ],
    correctAnswer: 0,
    explanation: 'To provide a good user experience, Google defines the "Good" threshold for LCP as 2.5 seconds or less for at least 75% of page visits across mobile and desktop devices.'
  },
  {
    id: 6,
    topic: 'Core Web Vitals - INP & CLS',
    question: 'Which metric replaced First Input Delay (FID) as the official Core Web Vital for measuring page responsiveness and interactivity?',
    options: [
      'Time to First Byte (TTFB)',
      'Interaction to Next Paint (INP)',
      'Cumulative Layout Shift (CLS)',
      'Total Blocking Time (TBT)'
    ],
    correctAnswer: 1,
    explanation: 'Interaction to Next Paint (INP) replaced FID in March 2024 as the official Core Web Vital assessing overall responsiveness throughout the entire page lifecycle (with a Good threshold of <= 200ms).'
  },
  {
    id: 7,
    topic: 'Structured Data & Schema',
    question: 'Which syntax format is officially recommended by Google for implementing structured data markup?',
    options: [
      'Microdata inline HTML attributes',
      'RDFa tags embedded within paragraph spans',
      'JSON-LD (JavaScript Object Notation for Linked Data) embedded in a `<script type="application/ld+json">` block',
      'XML RSS feeds linked in the document head'
    ],
    correctAnswer: 2,
    explanation: 'Google recommends JSON-LD because it separates schema markup cleanly from presentation HTML, is easy to inject dynamically or statically, and is less prone to parsing corruption during template changes.'
  },
  {
    id: 8,
    topic: 'Schema Eligibility',
    question: 'Does implementing valid structured data markup guarantee rich snippet appearance in Google SERPs?',
    options: [
      'Yes, Google guarantees rich snippets for any page with zero schema syntax errors',
      'Yes, provided the website subscribes to Google Search Console Premium',
      'No, rich snippets are only displayed for domains with DA over 80',
      'No, valid structured data makes the page eligible for rich results, but search engines dynamically determine display based on query intent and quality'
    ],
    correctAnswer: 3,
    explanation: 'Structured data confers technical eligibility for rich SERP enhancements; appearance is never guaranteed and remains subject to algorithmic quality and relevance evaluation.'
  },
  {
    id: 9,
    topic: 'E-Commerce SEO - Faceted Navigation',
    question: 'What is the standard SEO best practice for managing multi-filter faceted navigation URLs (e.g., color, size, sort order) to protect crawl budget and index cleanliness?',
    options: [
      'Allow crawling and indexing only for high-volume search attributes while using canonical tags, robots.txt disallows, or noindex on multi-select combinations',
      'Index every single filter combination to maximize organic entry points',
      'Delete all filter parameters and force users to browse manually',
      'Apply 302 temporary redirects on all category pages'
    ],
    correctAnswer: 0,
    explanation: 'Faceted navigation can generate millions of thin/duplicate filter permutations. Best practice selectively indexes high-demand categories while canonicalizing, noindexing, or blocking low-intent multi-parameter combinations.'
  },
  {
    id: 10,
    topic: 'E-Commerce SEO - Out of Stock',
    question: 'What is the recommended SEO treatment for a temporarily out-of-stock product expected to return within 3 weeks?',
    options: [
      'Delete the page and return a 404 Not Found error',
      'Keep the URL live with HTTP 200, clearly display out-of-stock status, offer email restock notifications, and maintain structured data availability as `OutOfStock`',
      '301 redirect the URL to the homepage immediately',
      'Add a `noindex, nofollow` robots meta tag'
    ],
    correctAnswer: 1,
    explanation: 'Temporarily out-of-stock pages should stay live (HTTP 200) to preserve accumulated backlinks and internal link equity, with accurate schema (`OutOfStock`) and helpful alternative recommendations.'
  },
  {
    id: 11,
    topic: 'International SEO - hreflang',
    question: 'What is a mandatory requirement for hreflang tag implementation across multilingual/multiregional pages?',
    options: [
      'hreflang tags only need to be placed on the English master version of the page',
      'hreflang tags must only use uppercase country codes without language codes',
      'hreflang annotations must be bidirectional (reciprocal); if Page A points to Page B, Page B must include an annotation pointing back to Page A',
      'Every localized URL must self-canonicalize to the English root URL'
    ],
    correctAnswer: 2,
    explanation: 'hreflang implementations require strict reciprocal confirmation. If page A references page B in hreflang, page B must also reference page A, otherwise search engines ignore the international annotation.'
  },
  {
    id: 12,
    topic: 'International SEO - Canonical & hreflang',
    question: 'What is the correct canonical relationship between distinct localized language versions of an international website (e.g., /en-us/ and /en-gb/)?',
    options: [
      'Both pages must canonicalize to the root /en-us/ page',
      'Localized pages must not use canonical tags at all',
      'The /en-gb/ page should use a 301 redirect to /en-us/',
      'Each localized page should contain a self-referential canonical tag pointing to its own distinct URL alongside comprehensive bidirectional hreflang tags'
    ],
    correctAnswer: 3,
    explanation: 'Each localized page should have a self-referential canonical tag pointing to itself, combined with bidirectional hreflang tags that cross-reference all regional alternatives.'
  },
  {
    id: 13,
    topic: 'Local SEO - Multi-Location',
    question: 'For a dental enterprise with 5 physical clinics across a metropolitan area, what is the best site architecture practice?',
    options: [
      'Create dedicated, unique location landing pages for each clinic with local NAP, location-specific schema, unique staff profiles, and Google Map embeds',
      'Create one single contact page listing all 5 addresses in a small paragraph',
      'Buy 5 separate domain names for each clinic and copy the exact same content across all of them',
      'Set canonical tags from all location pages to the corporate home page'
    ],
    correctAnswer: 0,
    explanation: 'Dedicated location landing pages with unique local content, localized schema, accurate NAP data, and customer reviews allow each clinic to rank for localized geography queries and connect to individual GBP listings.'
  },
  {
    id: 14,
    topic: 'Link Building & Digital PR',
    question: 'Which link-building strategy is considered ethical, sustainable, and compliant with Google Search Essentials?',
    options: [
      'Purchasing 500 dofollow blog comments from a private link network',
      'Creating proprietary original industry research and data studies that earn natural editorial citations and backlinks from journalists and industry publications',
      'Participating in automated reciprocal link exchange rings',
      'Injecting hidden backlinks into open-source WordPress themes'
    ],
    correctAnswer: 1,
    explanation: 'Digital PR and original research studies create genuine editorial value, attracting legitimate citations and authoritative backlinks without violating anti-manipulation guidelines.'
  },
  {
    id: 15,
    topic: 'JavaScript SEO - Rendering',
    question: 'What is the main technical SEO risk associated with purely client-side rendered (CSR) Single Page Applications (SPAs)?',
    options: [
      'Client-side applications cannot use CSS styles',
      'Client-side applications are prohibited by W3C standards',
      'Search engine crawlers may experience rendering delays (two-wave indexing), fail to execute complex asynchronous JS, or miss content not present in the initial HTML',
      'HTTPS cannot be enabled on client-side applications'
    ],
    correctAnswer: 2,
    explanation: 'In pure CSR, the initial HTML payload is an empty shell. Search engines must allocate rendering queue budget to execute JavaScript. If execution fails or times out, content and internal links are not indexed.'
  },
  {
    id: 16,
    topic: 'JavaScript SEO - Internal Links',
    question: 'How should internal links be coded in modern JavaScript frameworks (such as React or Next.js) to guarantee crawler discovery?',
    options: [
      'Using `<div onClick="goToPage()">Click Here</div>` without anchor tags',
      'Using URL hashes like `<a href="#section2">`',
      'Using JavaScript `window.location.assign()` inside button elements only',
      'Using standard HTML `<a href="/target-url">` anchor elements with crawlable href attributes'
    ],
    correctAnswer: 3,
    explanation: 'Search engine crawlers specifically parse `<a href="...">` elements to discover new URLs. Custom click handlers on `div`, `span`, or `button` elements without real href attributes are not followed as crawlable links.'
  },
  {
    id: 17,
    topic: 'Publishing & Editorial SEO',
    question: 'What is a critical structured data requirement for news and editorial articles seeking inclusion in Google News and Top Stories?',
    options: [
      '`NewsArticle` or `Article` schema with accurate `datePublished`, `dateModified`, `headline`, `image`, and `author` entities',
      'A minimum of 50 external affiliate links per article',
      'Complete removal of author bylines to protect privacy',
      'A `noarchive` robots meta tag on all editorial pages'
    ],
    correctAnswer: 0,
    explanation: 'Accurate `NewsArticle` schema with explicit ISO timestamps (`datePublished` and `dateModified`) and authentic author credentials establishes transparency, freshness, and eligibility for editorial SERP features.'
  },
  {
    id: 18,
    topic: 'SEO Analytics - CTR Formula',
    question: 'A high-intent commercial landing page generated 2,400 organic clicks from 48,000 search impressions in GSC. What is the Click-Through Rate (CTR)?',
    options: [
      '2.0%',
      '5.0%',
      '10.0%',
      '20.0%'
    ],
    correctAnswer: 1,
    explanation: 'CTR = (Clicks / Impressions) × 100 = (2,400 / 48,000) × 100 = 5.0%.'
  },
  {
    id: 19,
    topic: 'SEO Analytics - Conversion Rate',
    question: 'If an organic landing page recorded 15,000 organic sessions and generated 450 sales conversions, what is the Organic Conversion Rate?',
    options: [
      '1.5%',
      '4.5%',
      '3.0%',
      '30.0%'
    ],
    correctAnswer: 2,
    explanation: 'Conversion Rate = (Conversions / Sessions) × 100 = (450 / 15,000) × 100 = 3.0%.'
  },
  {
    id: 20,
    topic: 'SEO Analytics - SEO ROI Formula',
    question: 'An enterprise SEO campaign cost $15,000 in agency retainers and generated $75,000 in attributed organic e-commerce revenue. What is the SEO ROI?',
    options: [
      '200%',
      '500%',
      '300%',
      '400%'
    ],
    correctAnswer: 3,
    explanation: 'SEO ROI = ((Organic Revenue - SEO Cost) / SEO Cost) × 100 = (($75,000 - $15,000) / $15,000) × 100 = ($60,000 / $15,000) × 100 = 400%.'
  },
  {
    id: 21,
    topic: 'SEO Analytics - Revenue Per Organic Session',
    question: 'If an e-commerce website generated $120,000 in organic revenue from 30,000 organic sessions, what is the Revenue per Organic Session (RPOS)?',
    options: [
      '$4.00 per session',
      '$2.50 per session',
      '$0.25 per session',
      '$40.00 per session'
    ],
    correctAnswer: 0,
    explanation: 'RPOS = Organic Revenue / Organic Sessions = $120,000 / 30,000 = $4.00 per session.'
  },
  {
    id: 22,
    topic: 'SEO Analytics - Cost per Acquisition',
    question: 'If a brand invested $8,000 in technical SEO and content production, resulting in 320 new organic customer acquisitions, what is the Cost per Organic Acquisition (CPA)?',
    options: [
      '$40.00',
      '$25.00',
      '$15.00',
      '$250.00'
    ],
    correctAnswer: 1,
    explanation: 'CPA = SEO Cost / Organic Conversions = $8,000 / 320 = $25.00 per acquisition.'
  },
  {
    id: 23,
    topic: 'SEO Analytics - Brand/Non-Brand Ratio',
    question: 'A website receives 6,000 monthly branded organic sessions and 24,000 non-branded organic sessions. What is the Brand/Non-Brand Ratio?',
    options: [
      '4.00',
      '0.50',
      '0.25',
      '0.80'
    ],
    correctAnswer: 2,
    explanation: 'Brand/Non-Brand Ratio = Branded Organic Traffic / Non-Branded Organic Traffic = 6,000 / 24,000 = 0.25 (meaning 20% brand and 80% non-brand search discovery).'
  },
  {
    id: 24,
    topic: 'SEO Testing & Experimentation',
    question: 'When designing an SEO title tag split test across 500 category pages, how should the experiment and control groups be structured?',
    options: [
      'Apply changes to all pages simultaneously without a control group',
      'Change the homepage title every day for 2 weeks',
      'Delete 250 category pages to see if traffic increases on the remaining ones',
      'Split similar category pages into balanced test and control groups with comparable baseline traffic and measure performance over a 4–6 week window'
    ],
    correctAnswer: 3,
    explanation: 'SEO A/B testing on template pages requires matched test and control cohorts to isolate changes from macro seasonality, Google core algorithm updates, and external confounding variables.'
  },
  {
    id: 25,
    topic: 'SEO Operations & Client Retainers',
    question: 'What is the primary purpose of defining a clear Scope of Work (SOW) and monthly SEO deliverable roadmap for client management?',
    options: [
      'To align expectations on priorities, prevent scope creep, establish accountability, and tie technical/content deliverables directly to measurable business KPIs',
      'To guarantee page-1 rankings on Google within 14 days',
      'To eliminate the need for Google Search Console access',
      'To prevent the client from asking questions about search metrics'
    ],
    correctAnswer: 0,
    explanation: 'A structured SOW and roadmap establish transparent deliverables (audits, content briefs, technical fixes) and align client expectations with sustainable organic growth timelines.'
  },
  {
    id: 26,
    topic: 'Topic Authority & Semantic Entities',
    question: 'What role do named entities (Knowledge Graph entities) play in modern search engine relevance and topical authority?',
    options: [
      'Search engines only count exact keyword character strings and ignore entities',
      'Entities allow search engines to understand real-world concepts, people, places, and relationships independent of exact keyword phrasing',
      'Entities are only used in paid Google Ads auctions',
      'Entities require paying a monthly fee to the W3C registry'
    ],
    correctAnswer: 1,
    explanation: 'Search engines use entity graphs and natural language understanding to evaluate topical relationships and expertise, enabling pages to rank for queries without repetitive keyword stuffing.'
  },
  {
    id: 27,
    topic: 'Crawl Depth Optimization',
    question: 'In website architecture, what is the maximum recommended "click depth" (number of clicks from the homepage) for critical revenue-generating pages?',
    options: [
      'More than 10 clicks to keep the homepage clean',
      'Exactly 1 click for all 100,000 pages on a site',
      '3 clicks or fewer from the homepage to ensure efficient crawl discovery and link equity distribution',
      'Click depth is completely irrelevant to search crawlers'
    ],
    correctAnswer: 2,
    explanation: 'Pages buried deep in the site architecture (4+ clicks from home) receive minimal PageRank and internal link equity, often resulting in slower indexing and lower search rankings.'
  },
  {
    id: 28,
    topic: 'Image Formats & Performance',
    question: 'Which next-generation image format offers superior compression (25–35% smaller than JPEG/PNG) and is widely supported by modern browsers for Web Vitals optimization?',
    options: [
      'BMP (Bitmap)',
      'TIFF',
      'GIF',
      'WebP / AVIF'
    ],
    correctAnswer: 3,
    explanation: 'WebP and AVIF modern image compression formats dramatically reduce file payloads while maintaining visual quality, accelerating LCP and mobile performance.'
  },
  {
    id: 29,
    topic: 'Review Schema Guidelines',
    question: 'According to Google structured data guidelines, what is an unacceptable implementation of `Review` or `AggregateRating` schema?',
    options: [
      'Faking 5-star ratings on a page where no real user reviews exist or marking up third-party reviews as own local business reviews',
      'Displaying verified customer review text on a product page',
      'Including the author name and numerical rating value',
      'Linking review data to the corresponding Product entity'
    ],
    correctAnswer: 0,
    explanation: 'Self-serving or fabricated review markup violates Google spam policies, leading to manual action penalties and removal of rich snippet enhancements.'
  },
  {
    id: 30,
    topic: 'Pagination & Rel Canonical',
    question: 'How should canonical tags be configured across paginated category pages (e.g., /category?page=2, /category?page=3)?',
    options: [
      'Every paginated page (?page=2, ?page=3) must self-canonicalize to its own distinct URL (or use a view-all page if lightweight)',
      'Every paginated page should canonicalize to the root homepage',
      'All paginated pages (?page=2, ?page=3) should canonicalize to Page 1 (/category)',
      'Paginated pages should always be blocked in robots.txt'
    ],
    correctAnswer: 0,
    explanation: 'Canonicalizing Page 2 to Page 1 is a common mistake that causes search engines to ignore links and products on subsequent pages. Paginated pages should self-canonicalize to ensure deep products remain indexed.'
  }
];

const advancedMcqs = [
  {
    id: 1,
    topic: 'Enterprise SEO Architecture',
    question: 'In large enterprise sites (1M+ URLs), what is the primary risk of unrestricted faceted navigation filters?',
    options: [
      'Combinatorial URL explosion that exhausts search engine crawl budget and generates millions of thin, duplicate pages',
      'Immediate revocation of domain registration by ICANN',
      'Inability to use HTTPS encryption on filtered URLs',
      'Excessive database query caching in browser local storage'
    ],
    correctAnswer: 0,
    explanation: 'Multi-select filters (size, color, brand, sort) create exponential URL permutations ($N!$), wasting crawler capacity on low-value duplicate URLs and starving core canonical money pages.'
  },
  {
    id: 2,
    topic: 'Log File Analysis',
    question: 'What unique diagnostic insight does server log file analysis provide that cannot be obtained from Google Search Console or third-party crawlers?',
    options: [
      'The exact keywords users typed in Google search',
      'Every verified HTTP request made by real search engine bots (Googlebot IPs), revealing true crawl frequency, bot errors, and orphan URL visits in real-time',
      'The real-time conversion rate of paid Google Ads campaigns',
      'Competitor backlink acquisition velocity'
    ],
    correctAnswer: 1,
    explanation: 'Server access logs record every raw HTTP request made by Googlebot spiders, providing 100% truthful data on which URLs search engines actually crawl, how often, and what response codes they receive.'
  },
  {
    id: 3,
    topic: 'Website Migrations - Redirect Mapping',
    question: 'During a major domain or CMS migration with 50,000 legacy URLs, what is the fundamental requirement for redirect mapping?',
    options: [
      'Redirect all 50,000 legacy URLs to the new homepage with a single wildcard rule',
      'Delete old URLs with 404 errors to start with a fresh domain history',
      'Map every legacy URL 1-to-1 to its exact or most relevant equivalent URL on the new site using 301 permanent redirects',
      'Use 302 temporary redirects for the first 12 months'
    ],
    correctAnswer: 2,
    explanation: '1-to-1 redirect mapping preserves page-level search equity, backlinks, and user intent. Bulk redirecting everything to the homepage is treated by Google as Soft 404s, leading to catastrophic traffic loss.'
  },
  {
    id: 4,
    topic: 'Website Migrations - Post-Launch Triage',
    question: 'If organic search traffic drops by 60% immediately following a CMS migration, what should be your first technical diagnostic step?',
    options: [
      'Immediately purchase 1,000 new backlinks',
      'Rewrite all blog articles with AI',
      'Change domain names again',
      'Check robots.txt, noindex meta tags in staging code left on production, XML sitemaps, server status codes, and redirect loops'
    ],
    correctAnswer: 3,
    explanation: 'Post-migration traffic crashes are almost always caused by accidental robots.txt blocks, staging `<meta name="robots" content="noindex">` tags left in production templates, or broken redirect chains.'
  },
  {
    id: 5,
    topic: 'Advanced E-Commerce - Discontinued Products',
    question: 'How should a permanently discontinued e-commerce product URL with high historical backlinks be handled?',
    options: [
      '301 redirect the URL to the exact direct successor model or the immediate specific sub-category page',
      'Leave it returning 200 OK forever with no content',
      'Redirect to a competitor website',
      'Return a 500 Internal Server Error'
    ],
    correctAnswer: 0,
    explanation: 'If a direct replacement product exists, 301 redirect to it. If not, redirect to the direct parent category to preserve link equity and maintain a relevant user shopping journey.'
  },
  {
    id: 6,
    topic: 'Advanced International SEO - hreflang at Scale',
    question: 'On an enterprise site with 40 languages and 100 countries, why is XML sitemap hreflang implementation preferred over HTML `<head>` tags?',
    options: [
      'HTML `<head>` hreflang would inject thousands of lines of markup into every page payload, bloating HTML size and degrading Core Web Vitals (TTFB/LCP)',
      'XML sitemaps are the only method recognized by Bing',
      'HTML `<head>` tags are prohibited on international domains',
      'XML sitemaps eliminate the need for canonical tags'
    ],
    correctAnswer: 0,
    explanation: 'Declaring 40+ hreflang variations in HTML headers adds 10–20KB of redundant code to every single page load. Managing hreflang in XML sitemaps offloads international routing to sitemaps without impacting page weight.'
  },
  {
    id: 7,
    topic: 'International SEO - Forced IP Redirects',
    question: 'Why does Google officially advise against automatic IP-based redirection for international visitors?',
    options: [
      'Because users dislike fast redirects',
      'Because forced IP redirection prevents Googlebot (crawling primarily from US IPs) from discovering non-US localized regional pages (/fr/, /de/, /jp/)',
      'Because SSL certificates cannot support IP routing',
      'Because IP addresses are only used for DNS lookups'
    ],
    correctAnswer: 1,
    explanation: 'Forced IP redirection prevents Googlebot (crawling primarily from US IPs) from accessing international localized pages (e.g., /fr/, /de/, /jp/), resulting in de-indexation of non-US regional versions.'
  },
  {
    id: 8,
    topic: 'SEO Automation & Data Workflows',
    question: 'What is the primary benefit of automating weekly Search Console data extraction via the Google Search Console API rather than downloading manual CSV reports?',
    options: [
      'The API automatically writes blog posts',
      'The API guarantees page-one rankings',
      'The API allows pulling up to 25,000 rows per request, bypasses the standard 1,000-row UI limit, and enables automated anomaly detection and data warehousing',
      'The API bypasses all Google ranking penalties'
    ],
    correctAnswer: 2,
    explanation: 'The Search Console API allows data pipelines to extract full un-sampled search performance data (up to 25k rows/call), feeding automated SQL warehouses and anomaly-detection algorithms.'
  },
  {
    id: 9,
    topic: 'Python for SEO - Duplicate Title Detection',
    question: 'In Python, which data structure and method is most efficient for detecting duplicate title tags across a 100,000-row pandas DataFrame `df` of crawled URLs?',
    options: [
      'Using a nested for-loop over every row: `for i in df: for j in df:`',
      '`df.drop_duplicates()` without checking what was removed',
      '`df.to_csv()` and manually reading the file',
      '`df[df.duplicated(subset=[\'title\'], keep=False)].sort_values(by=\'title\')`'
    ],
    correctAnswer: 3,
    explanation: 'Pandas `df.duplicated(subset=[\'title\'], keep=False)` vectorizes duplicate detection across the entire column in milliseconds, isolating all instances of duplicate titles for audit reporting.'
  },
  {
    id: 10,
    topic: 'Python for SEO - Status Code Analysis',
    question: 'When analyzing a crawl dataset in Python, what does `df[\'status_code\'].value_counts(normalize=True) * 100` calculate?',
    options: [
      'The exact percentage breakdown of each HTTP status code (200, 301, 404, 500) across the entire crawled website',
      'The total number of words on each page',
      'The site loading speed in milliseconds',
      'The average position of all keywords'
    ],
    correctAnswer: 0,
    explanation: '`value_counts(normalize=True) * 100` returns the proportional distribution of response codes, allowing instant identification of crawl waste (e.g., 25% of crawled URLs returning redirects or 404s).'
  },
  {
    id: 11,
    topic: 'Forecasting - Traffic Projection Formula',
    question: 'If a category has 80,000 monthly search impressions and an SEO optimization strategy increases average CTR from 1.5% to 4.0%, what is the expected monthly organic traffic increase?',
    options: [
      '2,000 additional monthly sessions',
      '2,000 total sessions',
      '800 total sessions',
      '3,200 total sessions'
    ],
    correctAnswer: 0,
    explanation: 'Baseline Traffic = 80,000 × 0.015 = 1,200 sessions. New Traffic = 80,000 × 0.040 = 3,200 sessions. Increase = 3,200 - 1,200 = 2,000 additional monthly sessions.'
  },
  {
    id: 12,
    topic: 'Forecasting - Scenario Planning',
    question: 'In enterprise SEO forecasting, why should financial projections include Conservative, Expected, and Optimistic scenario bands?',
    options: [
      'To confuse executive stakeholders with multiple numbers',
      'To account for algorithm volatility, implementation velocity variations, and competitor reactions while providing realistic ROI boundaries',
      'Because Google guarantees only the optimistic forecast',
      'Scenario planning is required by GAAP accounting standards'
    ],
    correctAnswer: 1,
    explanation: 'Organic search depends on external factors (competitor moves, engineering deployment delays, algorithm shifts). Multi-scenario modeling provides defensible financial expectations.'
  },
  {
    id: 13,
    topic: 'Digital PR - Data-Led Campaigns',
    question: 'What makes proprietary data-led Digital PR campaigns significantly more successful at earning top-tier editorial backlinks than generic outreach?',
    options: [
      'Data campaigns pay journalists cash for links',
      'Data campaigns use automated spam software to email 50,000 bloggers',
      'Journalists require novel data, statistics, and verifiable trends to support news stories, creating natural authoritative citation opportunities',
      'Data campaigns guarantee instant indexing in Google News'
    ],
    correctAnswer: 2,
    explanation: 'Reputable news outlets cite original research, surveys, and unique industry datasets as credible source citations, generating high-authority editorial tier-1 backlinks.'
  },
  {
    id: 14,
    topic: 'Digital PR - Link Velocity',
    question: 'What does an abnormal, sudden spike of 20,000 exact-match low-quality directory backlinks in 48 hours signal to search engine algorithms?',
    options: [
      'High brand virality and immediate organic ranking increases',
      'A successful white-hat content marketing initiative',
      'A standard technical sitemap refresh',
      'Manipulative link spam or a negative SEO attack, triggering automated algorithmic filtering or link spam suppression'
    ],
    correctAnswer: 3,
    explanation: 'Unnatural link velocity with commercial anchor text from low-tier sites violates search engine spam policies, triggering Google link spam algorithms (SpamBrain) to neutralize or penalize the domain.'
  },
  {
    id: 15,
    topic: 'SERP Strategy - Featured Snippets',
    question: 'Which content structure is most effective for optimizing an informational paragraph for Featured Snippet extraction?',
    options: [
      'A concise 40–55 word direct definition immediately following a clear H2 question heading, using clean factual language',
      'A 500-word introductory story about personal childhood experiences',
      'An encrypted PDF document embedded in an iframe',
      'A video with no text or transcripts'
    ],
    correctAnswer: 0,
    explanation: 'Featured snippet algorithms favor clear, self-contained definitions (40–55 words) formatted directly beneath a heading that matches the targeted question query.'
  },
  {
    id: 16,
    topic: 'SERP Strategy - Zero-Click Searches',
    question: 'How should an SEO strategy adapt to the growing prevalence of "zero-click" searches (where Google answers queries directly on the SERP)?',
    options: [
      'Stop producing content entirely',
      'Focus content strategy on complex, deep, high-intent topics requiring nuanced analysis, tools, calculations, and personal expertise that cannot be answered in a 1-sentence SERP snippet',
      'Block Googlebot from crawling the website',
      'Submit legal lawsuits against search engines'
    ],
    correctAnswer: 1,
    explanation: 'Simple factual queries are easily answered on the SERP. Sustainable SEO pivots to in-depth research, interactive tools, decision frameworks, and transactional intent where users must click through.'
  },
  {
    id: 17,
    topic: 'SEO Security - Hacked Website & Spam Injections',
    question: 'If Search Console flags a "Security Issue: Japanese Keyword Hack" (thousands of auto-generated spam URLs indexed), what is the proper recovery sequence?',
    options: [
      'Delete the domain and start a new company',
      'Ignore the warning as search engines fix hacks automatically',
      'Clean infected files/database, patch CMS vulnerabilities, return HTTP 410 Gone on injected URLs, request a Security Review in GSC, and submit clean XML sitemaps',
      '301 redirect all hacked URLs to the homepage'
    ],
    correctAnswer: 2,
    explanation: 'Recovery requires eliminating malicious code, securing root vulnerabilities, returning HTTP 410 (Gone) to rapidly de-index spam URLs, and passing an official GSC security review.'
  },
  {
    id: 18,
    topic: 'SEO Security - Disavow Tool Caution',
    question: 'According to Google guidelines, when is the ONLY scenario where the Disavow Links tool should be utilized?',
    options: [
      'Whenever a low-authority scraper site copies your RSS feed',
      'Every week as part of routine technical maintenance',
      'On all internal links that point to blog categories',
      'When you have a considerable number of paid, manipulative, or toxic links that have caused a Manual Action or violate link spam guidelines'
    ],
    correctAnswer: 3,
    explanation: 'Google algorithms automatically ignore the vast majority of benign spam links. The disavow tool should be reserved for manual actions or severe manipulative link schemes.'
  },
  {
    id: 19,
    topic: 'AI & Search Quality - Human Review',
    question: 'What is the primary operational risk of publishing raw, unedited AI-generated content at scale without human editorial review?',
    options: [
      'Hallucinations, factual inaccuracies, lack of first-hand experience (E-E-A-T), and generic duplicate content patterns flagged by helpful content algorithms',
      'AI content is legally prohibited by internet service providers',
      'AI content automatically breaks HTML5 formatting',
      'AI content cannot be crawled by search engines'
    ],
    correctAnswer: 0,
    explanation: 'Automated mass-produced AI content lacks original research, practical experience, and verified accuracy, making it highly vulnerable to quality devaluation under search helpfulness systems.'
  },
  {
    id: 20,
    topic: 'AI & Search Quality - Helpful Content Principles',
    question: 'How does Google evaluate content created with AI assistance under its Search Essentials guidelines?',
    options: [
      'All AI-assisted content is automatically banned from indexation',
      'Google rewards helpful, high-quality content that demonstrates original value and expertise regardless of how it was produced, while penalizing content produced primarily to manipulate search rankings',
      'AI content is given preferential #1 rankings on all queries',
      'Websites must pay a license fee to Google to publish AI articles'
    ],
    correctAnswer: 1,
    explanation: 'Google evaluates the quality and utility of the content itself (focusing on originality, accuracy, and user satisfaction) rather than the tool used to draft it.'
  },
  {
    id: 21,
    topic: 'SEO Leadership - SOPs & Governance',
    question: 'Why must an enterprise SEO team establish written Standard Operating Procedures (SOPs) and QA gating for engineering release pipelines?',
    options: [
      'To prevent developers from pushing code to production that accidentally deletes canonical tags, breaks robots.txt, or degrades Core Web Vitals',
      'To prevent engineers from writing JavaScript',
      'To eliminate the need for server backups',
      'To replace product managers in agile sprints'
    ],
    correctAnswer: 0,
    explanation: 'Automated CI/CD SEO testing (checking canonicals, metadata, status codes, and CWV performance) prevents fatal technical regressions from reaching production.'
  },
  {
    id: 22,
    topic: 'SEO Leadership - Executive Reporting',
    question: 'When presenting SEO performance to executive leadership (C-Suite/Board), which metric hierarchy should be emphasized?',
    options: [
      'Technical crawl errors in log files only',
      'Business Revenue, Customer Acquisitions, Pipeline Value, and SEO ROI over vanity keyword counts and raw impressions',
      'Total number of H1 tags written this month',
      'Number of Google Search Console API calls executed'
    ],
    correctAnswer: 1,
    explanation: 'Executives evaluate commercial return. Reports should lead with pipeline revenue, conversions, customer acquisition cost, and ROI before discussing operational SEO tasks.'
  },
  {
    id: 23,
    topic: 'Crisis Management - Sudden Traffic Drops',
    question: 'When investigating a sudden 50% sitewide organic traffic drop, what is the critical difference between an algorithmic devaluation and a technical site failure?',
    options: [
      'Technical failures show immediate, sharp drop-offs across specific templates or status codes on a specific deployment date, while algorithm updates correlate with official core update rollout windows',
      'Algorithmic drops only affect mobile users',
      'Technical drops always result in domain expiration',
      'There is no difference between technical and algorithmic drops'
    ],
    correctAnswer: 0,
    explanation: 'Correlating drop timestamps with engineering deployment logs vs Google Search Central official update announcements allows rapid root-cause isolation.'
  },
  {
    id: 24,
    topic: 'Crisis Management - Manual Action Response',
    question: 'If a domain receives a Google Manual Action for "Unnatural Links to your site", what is the required remediation workflow before submitting a reconsideration request?',
    options: [
      'Submit the reconsideration request immediately without making changes',
      'Delete the entire website and change servers',
      'Ignore the message for 6 months',
      'Audit all backlinks, perform good-faith outreach to webmasters requesting link removal, disavow remaining unremovable manipulative links, document evidence, and submit a detailed reconsideration request'
    ],
    correctAnswer: 3,
    explanation: 'Google reviewers require concrete documentation of good-faith removal efforts, transparent admission of past manipulation, and proof of comprehensive cleanup before lifting a manual action.'
  },
  {
    id: 25,
    topic: 'Crawl Budget - Render Cost',
    question: 'Why does excessive client-side JavaScript execution increase crawl budget consumption on large websites?',
    options: [
      'JavaScript rendering requires substantial CPU compute and memory (WRS rendering queue) for search engines, causing bots to throttle crawl rate on slow, script-heavy sites',
      'Search engines do not possess headless browsers',
      'JavaScript files cannot be served over HTTP/2',
      'Crawl budget is only consumed by images'
    ],
    correctAnswer: 0,
    explanation: 'Headless Chromium rendering costs Google significantly more compute than plain HTML parsing. Heavy, unoptimized client-side JS forces crawlers to reduce crawl frequency.'
  },
  {
    id: 26,
    topic: 'Taxonomy Governance - URL Structure',
    question: 'What is the primary architectural advantage of a clean hierarchical subdirectory taxonomy (e.g., /category/sub-category/product) over a flat URL structure (/product-id)?',
    options: [
      'Enables granular breadcrumb navigation, clear topical siloing, intuitive URL regex filtering in Search Console, and automated internal link hierarchy',
      'Guarantees #1 search rankings for all products',
      'Allows bypassing robots.txt crawl restrictions',
      'Prevents all 404 errors permanently'
    ],
    correctAnswer: 0,
    explanation: 'Logical subdirectory paths communicate topical taxonomy to search engines, simplify directory-level analytics in GSC, and automate breadcrumb schema generation.'
  },
  {
    id: 27,
    topic: 'E-Commerce Feeds - Merchant Center & Organic SEO',
    question: 'How do Google Merchant Center product data feeds interact with organic search shopping experiences?',
    options: [
      'Merchant feeds are only used for paid Google Shopping Ads and have zero organic visibility',
      'Merchant Center feeds provide structured inventory, pricing, GTIN, and availability data that Google uses to power free Organic Shopping tabs, rich snippets, and Google Lens results',
      'Merchant feeds replace the need for an HTML website',
      'Merchant feeds prevent search engines from crawling the product pages'
    ],
    correctAnswer: 1,
    explanation: 'Google Merchant Center feeds power both paid ads and free organic shopping listings, providing canonical product identifiers (GTIN, MPN) and real-time inventory validation.'
  },
  {
    id: 28,
    topic: 'International SEO - Geolocation IP Detection',
    question: 'If an international brand wishes to guide users to their local store without using forced IP redirects, what is the recommended best practice?',
    options: [
      'Block all non-local visitors with HTTP 403 Forbidden',
      'Force redirect users based on browser language headers',
      'Display an unobtrusive, dismissible top banner or modal (e.g., "It looks like you\'re visiting from Germany. Would you like to switch to our German store? [Switch / Stay]") while serving the requested URL with HTTP 200',
      'Use 302 redirects on all foreign traffic'
    ],
    correctAnswer: 2,
    explanation: 'A non-blocking recommendation banner allows human users to choose their preferred localized experience while ensuring Googlebot can crawl and index all regional URLs without being redirected.'
  },
  {
    id: 29,
    topic: 'Advanced Structured Data - Nested Entities',
    question: 'How should a nested JSON-LD schema be structured to connect an `Organization` publisher, `Author` person, and `Product` review within an `Article`?',
    options: [
      'Put all properties into a single unstructured string',
      'Use separate isolated scripts with no entity cross-referencing',
      'Nest `@type: Person` inside the `author` property and `@type: Organization` inside the `publisher` property using clean `@id` URI entity references',
      'Google does not support nested JSON-LD schema'
    ],
    correctAnswer: 2,
    explanation: 'Nested schema graphs and `@id` entity identifiers establish clear semantic relationships between authors, organizations, and products for Google Knowledge Graph ingestion.'
  },
  {
    id: 30,
    topic: 'Data Analysis - Search Anomaly Detection',
    question: 'In Python, what statistical method is commonly applied to daily Google Search Console click timeseries to detect unexpected organic performance anomalies?',
    options: [
      'Calculating moving averages and standard deviation bands (Z-score / Bollinger Bands) to flag days where traffic drops below -2 standard deviations from expected baseline',
      'Counting the total characters in the CSV file',
      'Sorting URLs alphabetically by length',
      'Multiplying impressions by 100'
    ],
    correctAnswer: 0,
    explanation: 'Z-score and moving average statistical modeling on historical query clicks identify significant performance anomalies while filtering out normal day-of-week seasonality.'
  },
  {
    id: 31,
    topic: 'Core Web Vitals - CLS Optimization',
    question: 'What is the most frequent technical cause of high Cumulative Layout Shift (CLS > 0.1) on content and e-commerce websites?',
    options: [
      'Images and ad iframes rendered without explicit HTML `width` and `height` aspect-ratio attributes, causing content to jump as assets load',
      'Using HTTPS instead of HTTP',
      'Using semantic HTML5 elements like `<header>` and `<footer>`',
      'Having more than 500 words on a webpage'
    ],
    correctAnswer: 0,
    explanation: 'Specifying `width` and `height` dimensions allows the browser to reserve exact layout space before images/ads download, eliminating visual layout shifts.'
  },
  {
    id: 32,
    topic: 'Internal Link Equity - PageRank Sculpting Myths',
    question: 'Why is using `rel="nofollow"` on internal links (historically known as PageRank sculpting) no longer an effective strategy?',
    options: [
      '`nofollow` attributes are ignored on the internet',
      'Google evaporates the PageRank that would have flowed through the nofollowed link rather than redistributing it to other follow links on the page',
      'Using `nofollow` results in instant domain de-indexing',
      '`nofollow` is only supported on image tags'
    ],
    correctAnswer: 1,
    explanation: 'Since 2009, PageRank allocated to a nofollowed internal link is lost (evaporates) rather than flowing to remaining followed links, making internal nofollow sculpting counter-productive.'
  },
  {
    id: 33,
    topic: 'Sitemap Index Segmentation',
    question: 'Why should large enterprise websites divide their XML sitemaps into segmented category sitemaps (e.g., `sitemap-products-1.xml`, `sitemap-categories.xml`, `sitemap-blog.xml`) within a Sitemap Index?',
    options: [
      'Search Console reports index coverage per sitemap, allowing instant diagnosis of which specific site section or template is suffering from indexation issues',
      'Sitemaps can only hold a maximum of 10 URLs each',
      'Segmented sitemaps guarantee that Googlebot crawls every URL every 10 seconds',
      'Segmented sitemaps bypass server firewalls'
    ],
    correctAnswer: 0,
    explanation: 'Sitemap segmentation allows SEO teams to isolate indexation rates by template type in GSC (e.g., discovering that blog posts have 98% indexation but products have only 45%).'
  },
  {
    id: 34,
    topic: 'Enterprise Taxonomy - Cannibalization at Scale',
    question: 'When consolidating 20 overlapping, low-performing blog articles into 1 definitive comprehensive master guide, what is the mandatory SEO transition protocol?',
    options: [
      'Publish the master guide and delete the old 20 articles with 404 errors',
      'Synthesize the best insights into the master guide, publish it at a canonical URL, 301 redirect all 20 legacy URLs to the new master guide, and update all internal links',
      'Keep all 20 articles live and add canonical tags pointing to external competitor sites',
      'Change all 20 article URLs to end with .pdf'
    ],
    correctAnswer: 1,
    explanation: 'Content consolidation combines thin URL equity into one authoritative pillar, preserving legacy backlinks via 301 redirects and eliminating internal cannibalization.'
  },
  {
    id: 35,
    topic: 'Security - SSL/TLS & HTTPS Configuration',
    question: 'What is a critical technical requirement when migrating an entire domain from HTTP to HTTPS to avoid mixed content security warnings and ranking issues?',
    options: [
      'Ensure all internal resources (images, scripts, stylesheets, canonical tags, hreflang links) use HTTPS URLs and enforce server-side HTTP Strict Transport Security (HSTS) with 301 redirects',
      'Leave images on HTTP to save bandwidth',
      'Use 302 redirects for all HTTPS traffic',
      'Delete the robots.txt file'
    ],
    correctAnswer: 0,
    explanation: 'A flawless HTTPS migration requires 301 redirects from HTTP to HTTPS, updating all internal asset paths to HTTPS to avoid mixed content flags, and enabling HSTS headers.'
  },
  {
    id: 36,
    topic: 'Competitor Analysis - Content Gap Matrices',
    question: 'What does a quantitative Content Gap Matrix reveal during an enterprise SEO competitive analysis?',
    options: [
      'The exact server hosting costs of your competitors',
      'High-intent search queries and topical entities where multiple competitors rank on page 1 but your domain has no ranking or no published content',
      'The names of the competitor\'s private link-building contacts',
      'The competitor\'s Google Analytics password'
    ],
    correctAnswer: 1,
    explanation: 'A content gap matrix cross-references competitor keyword universes against your current site inventory, highlighting immediate topical expansion opportunities.'
  },
  {
    id: 37,
    topic: 'Algorithm Recovery - Quality Systems',
    question: 'Following a major Google Core Update that devalued site traffic, what is the fundamental recovery philosophy recommended by search quality guidelines?',
    options: [
      'Perform a comprehensive, objective self-assessment of the site\'s content quality, originality, and user value against Search Essentials rather than searching for quick technical tricks or superficial keyword fixes',
      'Disavow 100% of all backlinks on the domain',
      'Change all heading tags from H2 to H3',
      'Reduce page word counts to under 200 words'
    ],
    correctAnswer: 0,
    explanation: 'Core updates reflect broad algorithmic assessments of site helpfulness, authority, and content quality. Sustainable recovery requires improving real user value across the entire content library.'
  },
  {
    id: 38,
    topic: 'Python Automation - Automated Issue Reporting',
    question: 'In automated Python SEO auditing pipelines, how should issue severity be programmatically categorized for engineering ticketing?',
    options: [
      'Assign Critical priority to index-blocking issues (e.g., 5xx errors, accidental noindex on money pages), High priority to duplicate titles/broken internal links, and Medium/Low to minor metadata tweaks',
      'Mark every issue as Critical regardless of impact',
      'Sort all issues randomly',
      'Ignore all HTTP status code errors'
    ],
    correctAnswer: 0,
    explanation: 'Programmatic severity mapping ensures engineering sprint resources focus on critical revenue-impacting defects (crawl blocks, server failures) before cosmetic optimizations.'
  },
  {
    id: 39,
    topic: 'Brand SERP - Reputation & Knowledge Panel Management',
    question: 'How can an enterprise brand influence and optimize its own Brand Knowledge Panel and Google Search presence?',
    options: [
      'Claim the official Google Knowledge Panel, implement verified `Organization` schema with `sameAs` social links, maintain accurate Wikidata/Wikipedia entries, and optimize executive profiles',
      'Pay Google an annual Knowledge Panel subscription fee',
      'Block all search engine spiders from crawling the About Us page',
      'Submit 50 fake reviews on Google Maps'
    ],
    correctAnswer: 0,
    explanation: 'Knowledge Panels are synthesized from trusted entity sources across the web. Structured `Organization` schema, `sameAs` entity links, and verified profile claiming establish brand authority.'
  },
  {
    id: 40,
    topic: 'Production SEO Strategy - 12-Month Operating Roadmap',
    question: 'What is the hallmark of a world-class, production-ready enterprise SEO strategy?',
    options: [
      'A holistic, sustainable operating framework that aligns technical architecture, editorial content production, brand authority, data-driven measurement, and cross-functional engineering governance with measurable commercial revenue goals',
      'A collection of secret tricks to manipulate search engine algorithms for short-term traffic bursts',
      'A single 10-page Word document written once and never updated',
      'Buying 10,000 automated backlinks every month'
    ],
    correctAnswer: 0,
    explanation: 'World-class enterprise SEO integrates engineering hygiene, high-quality editorial workflows, data automation, and executive accountability to compound organic market share over time.'
  }
];

function updateFile(filePath, assessmentArrayName, mcqs) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace assessment array using replacer function to avoid $ dollar sign expansion
  const regex = new RegExp(`(export\\s+const\\s+${assessmentArrayName}\\s*:\\s*QuizQuestion\\[\\]\\s*=\\s*\\[)[\\s\\S]*?(\\n\\];)`);
  const formattedMcqs = mcqs.map(q => {
    return `  {
    id: ${q.id},
    topic: ${JSON.stringify(q.topic)},
    question: ${JSON.stringify(q.question)},
    options: [
${q.options.map(opt => `      ${JSON.stringify(opt)}`).join(',\n')}
    ],
    correctAnswer: ${q.correctAnswer},
    explanation: ${JSON.stringify(q.explanation)}
  }`;
  }).join(',\n');

  content = content.replace(regex, (match, p1, p2) => `${p1}\n${formattedMcqs}${p2}`);

  // Ensure explanation exists in all code snippets across sections
  content = content.replace(/(title:\s*(['"`])(.*?)\2,)(\s*code:)/g, (m, p1, quote, titleText, p4) => {
    return `${p1}\n              explanation: ${JSON.stringify(titleText)},${p4}`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath} with ${mcqs.length} clean MCQs!`);
}

updateFile('src/features/roadmap/data/seo/seoBeginner.data.ts', 'SEO_BEGINNER_FINAL_ASSESSMENT', beginnerMcqs);
updateFile('src/features/roadmap/data/seo/seoIntermediate.data.ts', 'SEO_INTERMEDIATE_FINAL_ASSESSMENT', intermediateMcqs);
updateFile('src/features/roadmap/data/seo/seoAdvanced.data.ts', 'SEO_ADVANCED_FINAL_ASSESSMENT', advancedMcqs);
