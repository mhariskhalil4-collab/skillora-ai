import { Task, QuizQuestion } from '../../types/roadmap.types';

export const ENGLISH_EMAIL_WRITING_ADVANCED_ASSESSMENT: QuizQuestion[] = [
  {
    "id": 1,
    "topic": "Advanced Grammar & Passive Diplomacy",
    "question": "Why is the passive voice strategically employed in high-stakes diplomatic business emails?",
    "options": [
      "To describe errors or delays objectively without pointing fingers or naming individual culprits (e.g., 'An oversight was made during data ingestion').",
      "Because passive voice is required by international law in all corporate contracts.",
      "To make sentences twice as long so the email looks more authoritative.",
      "Because active verbs are forbidden in senior executive writing."
    ],
    "correctAnswer": 0,
    "explanation": "Passive voice shifts the focus from the person who made the mistake to the objective problem itself, de-escalating interpersonal tension and preserving collaboration."
  },
  {
    "id": 2,
    "topic": "Delivering Bad News Diplomatically",
    "question": "When delivering disappointing news (such as declining a partnership proposal or cancelling a project), what is the most effective psychological structure?",
    "options": [
      "The 'Blunt Rejection' method: Start the email with 'NO' in all caps.",
      "The 'Diplomatic Buffer' framework: Genuine Appreciation / Context -> Objective Rationale -> Clear Decision -> Future Goodwill / Alternative.",
      "Ignore the sender completely and hope they never contact you again.",
      "Blame third-party competitors for forcing your decision."
    ],
    "correctAnswer": 1,
    "explanation": "Starting with appreciation, explaining the strategic rationale, stating the decision clearly, and offering future goodwill softens disappointment and preserves long-term alliances."
  },
  {
    "id": 3,
    "topic": "Executive Summaries (BLUF)",
    "question": "What does the executive communication principle BLUF stand for, and why is it essential for C-suite emails?",
    "options": [
      "Business Logistics Under Fire — a crisis management technique for military operations.",
      "Backwards Line Universal Formatting — writing paragraphs in reverse order.",
      "Bottom Line Up Front — stating the primary conclusion, recommendation, or decision requested in the first 2 sentences before supporting data.",
      "Broad Language Under Formatting — using generic terms to avoid commitments."
    ],
    "correctAnswer": 2,
    "explanation": "Bottom Line Up Front (BLUF) respects C-suite executive cognitive load by stating the core takeaway immediately, allowing leaders to make decisions rapidly."
  },
  {
    "id": 4,
    "topic": "Negotiation & Compromise Language",
    "question": "Which sentence demonstrates the most skilled use of conditional bargaining language in a commercial contract negotiation?",
    "options": [
      "If you cannot discount your price by 20%, we will immediately terminate all discussions.",
      "We love your product and will pay whatever price you ask.",
      "Give us a discount or we will tell your competitors.",
      "If you are able to adjust the annual licensing fee by 12%, we would be prepared to commit to a 3-year term and complete signature by Friday."
    ],
    "correctAnswer": 3,
    "explanation": "Conditional bargaining ('If you are able to... we would be prepared to...') exchanges a price concession for a high-value commitment (a 3-year multi-year contract)."
  },
  {
    "id": 5,
    "topic": "Proposal Value Framing",
    "question": "When pitching an enterprise partnership proposal to an external company, how should the value proposition be structured?",
    "options": [
      "Framing the initiative as a symbiotic, mutually beneficial alignment that solves specific strategic gaps for both organizations.",
      "Focusing 100% on how the partnership will help your own company achieve its quarterly revenue quota.",
      "Demanding that the partner company provide free marketing without any reciprocal benefits.",
      "Sending an unformatted 50-page legal contract with zero introductory email."
    ],
    "correctAnswer": 0,
    "explanation": "Successful partnerships articulate mutual economic and strategic synergy, showing how both organizations capture value."
  },
  {
    "id": 6,
    "topic": "Ethical Persuasion & Objection Handling",
    "question": "How should an enterprise sales executive address a client's budget objection in an email?",
    "options": [
      "Tell the client that their budget calculations are foolish.",
      "Acknowledge the budget constraint empathetically, then present a phased implementation option or demonstrate the quantifiable cost of inaction.",
      "Immediately cut your software price by 90% without justification.",
      "Threaten to cancel their account immediately."
    ],
    "correctAnswer": 1,
    "explanation": "Validating the constraint while offering flexible phasing or contrasting cost against ROI enables the prospect to justify the purchase internally."
  },
  {
    "id": 7,
    "topic": "Cross-Cultural Communication",
    "question": "When writing business emails to colleagues or clients from high-context cultures (such as Japan or Germany), what adjustments are vital?",
    "options": [
      "Using heavy American sports slang and sarcasm in every paragraph.",
      "Demanding that they reply within 5 minutes regardless of local time zones.",
      "Adopting formal titles, respectful greetings, unambiguous phrasing, and avoiding cultural idioms that do not translate cleanly across languages.",
      "Writing all text in emojis only."
    ],
    "correctAnswer": 2,
    "explanation": "Cross-cultural mastery requires respecting local formality standards, using unambiguous plain English, and avoiding colloquial idioms."
  },
  {
    "id": 8,
    "topic": "Crisis & Outage Communications",
    "question": "What is the primary requirement when issuing a major enterprise incident update email during an active platform outage?",
    "options": [
      "Deny that anything is broken and blame the end-users.",
      "Send a joke to lighten the mood while data is being lost.",
      "Shut down the support portal so customers cannot complain.",
      "Transparent accountability: Explicit description of impact, root cause mitigation in progress, current estimated time to recovery (ETR), and next update timestamp."
    ],
    "correctAnswer": 3,
    "explanation": "During crises, enterprise clients demand transparency, containment measures, realistic recovery estimates, and committed recurring update timestamps."
  },
  {
    "id": 9,
    "topic": "Thread Hygiene & Reply-All Discipline",
    "question": "When is using 'Reply All' considered a serious professional communication violation?",
    "options": [
      "When responding to a company-wide announcement of 5,000 employees with a simple 'Thanks!' or 'Congratulations!'.",
      "When keeping project stakeholders updated on an active sprint blocker.",
      "When confirming meeting attendance to the 3 members of your direct project committee.",
      "When communicating with the members of your small 4-person design team."
    ],
    "correctAnswer": 0,
    "explanation": "Replying all to broad organizational announcements inundates thousands of inboxes with useless notifications, draining collective productivity."
  },
  {
    "id": 10,
    "topic": "Email Productivity & Triage (4D Framework)",
    "question": "What are the 4 actions in the executive 4D email management framework?",
    "options": [
      "Delay, Deny, Destroy, Disappear",
      "Do (if < 2 mins), Defer (calendar/task), Delegate (assign owner), Delete/Archive",
      "Download, Duplicate, Discuss, Discard",
      "Draft, Display, Document, Direct"
    ],
    "correctAnswer": 1,
    "explanation": "The 4D framework (Do, Defer, Delegate, Delete/Archive) prevents inbox clutter and ensures rapid, systematic processing of high-volume messages."
  },
  {
    "id": 11,
    "topic": "Editing Weak Emails",
    "question": "Which transformation most effectively improves a rambling, unfocused 250-word status email into a high-impact executive update?",
    "options": [
      "Adding 10 more adjectives and making all text uppercase.",
      "Deleting the greeting and signature completely.",
      "Restructuring into a 3-part layout: Executive Summary, Metric Table / Bulleted Milestones, and Action Items with Explicit Deadlines.",
      "Converting the email into an uncompressed audio recording."
    ],
    "correctAnswer": 2,
    "explanation": "Structured layouts with summaries, data milestones, and clear action items maximize scannability and executive decision velocity."
  },
  {
    "id": 12,
    "topic": "Ethics, Privacy & BCC Traps",
    "question": "Why is secretly using BCC to copy a coworker's supervisor on a contentious email without the coworker's knowledge generally considered an ethical and cultural red flag?",
    "options": [
      "Because BCC emails take up too much cloud storage.",
      "Because email clients disable BCC on business accounts.",
      "Because supervisors never read BCC emails.",
      "Because it undermines trust, creates a toxic workplace culture, and can easily backfire if the supervisor replies all."
    ],
    "correctAnswer": 3,
    "explanation": "Surreptitious BCCs destroy psychological safety. If an issue requires managerial oversight, transparent CC or direct 1-on-1 escalation is professional and honest."
  },
  {
    "id": 13,
    "topic": "Parallel Structure in Professional Lists",
    "question": "Which bulleted list demonstrates flawless grammatical parallel structure?",
    "options": [
      "Our Q4 initiatives include: 1) Upgrading server clusters, 2) Launching the mobile app, 3) Redesigning the checkout flow.",
      "Our Q4 initiatives include: 1) Upgrading server clusters, 2) To launch the mobile app, 3) Redesign of checkout.",
      "Our Q4 initiatives include: 1) We will upgrade servers, 2) Mobile app launch, 3) To redesign checkout.",
      "Our Q4 initiatives include: 1) Servers, 2) Launching things, 3) We did checkout."
    ],
    "correctAnswer": 0,
    "explanation": "Parallel structure requires all list items to share the same grammatical form (here, gerund verb phrases: 'Upgrading...', 'Launching...', 'Redesigning...')."
  },
  {
    "id": 14,
    "topic": "International Business Plain English",
    "question": "Which idiom should be replaced with plain English when communicating with an international offshore development team?",
    "options": [
      "'Please ensure all tests pass before deployment.'",
      "'Let's touch base and hit a home run out of the ballpark by biting the bullet.'",
      "'Please review the attached database schema.'",
      "'We will deploy the update on Tuesday at 14:00 UTC.'"
    ],
    "correctAnswer": 1,
    "explanation": "Sports metaphors and localized idioms ('hit a home run', 'touch base', 'bite the bullet') cause confusion for international non-native English speakers."
  },
  {
    "id": 15,
    "topic": "Diplomatic Rejection of Scope Creep",
    "question": "How should a consultant decline out-of-scope client work without alienating the client?",
    "options": [
      "Tell the client they are greedy and breaking the rules.",
      "Do the extra work for free and resent the client secretly.",
      "Enthusiastically accept the idea, explain that it falls outside the Phase 1 Scope of Work, and provide a Change Order estimate for Phase 2 implementation.",
      "Refuse to answer any client emails for a week."
    ],
    "correctAnswer": 2,
    "explanation": "Validating the idea while framing it as an exciting Phase 2 expansion with an accompanying Change Order protects project margins and client goodwill."
  },
  {
    "id": 16,
    "topic": "Executive Decision Requests",
    "question": "What is the recommended format when requesting a complex decision from the CEO via email?",
    "options": [
      "Send a 4,000-word stream of consciousness detailing every minor problem.",
      "Ask the CEO to come to your desk and solve the problem for you.",
      "Tell the CEO to pick an option randomly.",
      "Decision Memo Format: Issue Context -> 3 Evaluated Options (Pros/Cons/Cost) -> Recommended Course of Action -> Explicit Decision Required by [Date]."
    ],
    "correctAnswer": 3,
    "explanation": "Presenting curated options with pros/cons and a clear recommendation empowers executives to review and decide in 30 seconds."
  },
  {
    "id": 17,
    "topic": "Price Increase Notifications",
    "question": "How should a subscription SaaS company announce an upcoming price adjustment to long-term enterprise clients?",
    "options": [
      "Provide 60 days advance notice, highlight specific platform enhancements and investments delivered, and offer legacy clients a transition discount window.",
      "Raise the price secretly and hope clients do not notice their credit card charges.",
      "Send an email blaming inflation and government taxes.",
      "Threaten to delete their accounts if they do not pay immediately."
    ],
    "correctAnswer": 0,
    "explanation": "Advance notice, value reinforcement (recent platform upgrades), and grandfathered discount options protect customer retention during price adjustments."
  },
  {
    "id": 18,
    "topic": "Legal Confidentiality Notices",
    "question": "What is the purpose of an email confidentiality disclaimer footer in corporate communications?",
    "options": [
      "It magically makes all illegal acts legal.",
      "It establishes formal notice that the message contents and attachments are privileged, proprietary, and intended solely for the designated recipient.",
      "It speeds up internet connection speeds.",
      "It prevents hackers from taking screenshots."
    ],
    "correctAnswer": 1,
    "explanation": "Confidentiality footers provide formal legal notice of proprietary privilege and instruct unintended recipients to notify the sender and delete the data."
  },
  {
    "id": 19,
    "topic": "Strategic Partnership Outreach",
    "question": "What is the most effective subject line for cold outreach to a potential enterprise integration partner?",
    "options": [
      "Hey let's talk about stuff",
      "URGENT COLLABORATION DEAL $$$",
      "Partnership Inquiry: Skillora AI & LMS Integration for Joint Enterprise Customers",
      "Do you want to make money together?"
    ],
    "correctAnswer": 2,
    "explanation": "Naming both companies ('Skillora AI & LMS') and identifying the mutual customer benefit ('Joint Enterprise Customers') establishes immediate strategic credibility."
  },
  {
    "id": 20,
    "topic": "Cross-Border Formality Nuance",
    "question": "In formal British and Commonwealth business correspondence, which complimentary close is traditionally paired with the salutation 'Dear Sir or Madam'?",
    "options": [
      "Yours sincerely,",
      "Warm regards,",
      "Best wishes,",
      "Yours faithfully,"
    ],
    "correctAnswer": 3,
    "explanation": "Traditional British etiquette pairs 'Dear Sir/Madam' (unknown name) with 'Yours faithfully', and 'Dear [Name]' with 'Yours sincerely'."
  },
  {
    "id": 21,
    "topic": "Defusing Public Social Complaints",
    "question": "When a frustrated enterprise client posts an angry complaint publicly on Twitter/LinkedIn, how should your initial email to them be framed?",
    "options": [
      "Acknowledge the public post, validate their frustration sincerely, summarize the immediate technical investigation underway, and provide a direct executive phone number.",
      "Demand that they delete the public post immediately or face legal action.",
      "Post an angry public reply calling the customer a liar.",
      "Block the client on all platforms."
    ],
    "correctAnswer": 0,
    "explanation": "Rapid private outreach acknowledging the public issue, taking accountability, and offering high-touch executive access defuses public PR crises."
  },
  {
    "id": 22,
    "topic": "Multi-Vendor RFP Management",
    "question": "When sending identical RFP clarifications to 5 competing vendors, which recipient field MUST you use to protect vendor confidentiality?",
    "options": [
      "Put all 5 vendor emails in 'To' so they can see who they are competing against.",
      "Place your own address in 'To' and all 5 vendor emails in 'BCC' so vendors cannot see each other's identities.",
      "Post the emails on a public Discord server.",
      "Send 5 completely different sets of rules to each vendor."
    ],
    "correctAnswer": 1,
    "explanation": "Using BCC prevents competitors from seeing other bidding participants, maintaining antitrust compliance and procurement confidentiality."
  },
  {
    "id": 23,
    "topic": "Project Post-Mortem Communications",
    "question": "What tone and focus should a project post-mortem or Root Cause Analysis (RCA) email maintain?",
    "options": [
      "A punitive tone that names and shames the individual engineer who made the typo.",
      "An overly celebratory tone that ignores the fact that the project failed.",
      "A blameless, analytical, systemic focus detailing what happened, contributing factors, and permanent architectural safeguards instituted.",
      "A passive tone that claims no one knows what happened."
    ],
    "correctAnswer": 2,
    "explanation": "Blameless post-mortems focus on systemic improvements and process safeguards rather than interpersonal blame, fostering engineering excellence."
  },
  {
    "id": 24,
    "topic": "High-Stakes Contract Termination",
    "question": "What must be included in a formal contract termination email to a non-performing vendor?",
    "options": [
      "Insults about their team's intelligence.",
      "A vague note saying 'We don't like working with you anymore'.",
      "A claim that your company has ceased operations.",
      "Explicit reference to the governing termination clause, effective termination date, offboarding/data return instructions, and final payment settlement terms."
    ],
    "correctAnswer": 3,
    "explanation": "Legal contract termination requires precise citation of contract clauses, explicit effective dates, and data asset repatriation instructions."
  },
  {
    "id": 25,
    "topic": "Executive Delegation with Guardrails",
    "question": "When a VP delegates a $100k procurement decision to a Senior Manager, what must the delegation email establish?",
    "options": [
      "Clear decision boundaries (budget limits, vendor criteria), escalation triggers, and regular reporting milestones.",
      "Zero instructions and complete abdication of responsibility.",
      "A threat that if anything goes wrong the manager will be fired instantly.",
      "Instructions to hide the purchase from the finance department."
    ],
    "correctAnswer": 0,
    "explanation": "Effective delegation empowers team members within clearly defined guardrails, spending limits, and transparent milestone checkpoints."
  },
  {
    "id": 26,
    "topic": "Softening Bad Performance Feedback",
    "question": "Which sentence demonstrates the most effective, growth-oriented way to address missed deadlines in a written review?",
    "options": [
      "You are extremely lazy and miss all your deadlines.",
      "Over the past three sprints, several deliverables missed their target dates; let's discuss how we can optimize your workload distribution and unblock dependencies.",
      "I don't think you belong at this company.",
      "Deadlines don't matter anyway."
    ],
    "correctAnswer": 1,
    "explanation": "Framing the issue around objective data and workload optimization turns a potential confrontation into a collaborative coaching opportunity."
  },
  {
    "id": 27,
    "topic": "Sensitive Personnel Communications",
    "question": "When communicating an internal organizational restructuring that affects team reporting lines, what is vital?",
    "options": [
      "A cryptic 1-sentence email that creates company-wide panic.",
      "Rumors leaked anonymously to press outlets.",
      "Clear strategic rationale, transparent new reporting structures, transition timelines, and dedicated 1-on-1 Q&A office hours for affected employees.",
      "Refusing to answer any employee questions."
    ],
    "correctAnswer": 2,
    "explanation": "Organizational changes require transparent rationale, explicit reporting clarity, and supportive office hours to maintain morale and retention."
  },
  {
    "id": 28,
    "topic": "International Email Signatures",
    "question": "For professionals working across global distributed teams, what information is uniquely helpful in email signatures?",
    "options": [
      "Your personal astrological sign.",
      "A 200-word favorite song lyric.",
      "Ten animated tracking pixels.",
      "Your primary working time zone (e.g., 'Working Hours: 09:00 - 17:00 UTC / GMT+1') and standard response expectations."
    ],
    "correctAnswer": 3,
    "explanation": "Stating working time zones and typical hours sets realistic communication expectations for international colleagues across opposite hemispheres."
  },
  {
    "id": 29,
    "topic": "Whistleblower & Compliance Inquiries",
    "question": "How should an employee frame a formal compliance or ethical concern to the internal auditing committee?",
    "options": [
      "Factual, timestamped documentation of observed policy deviations, citing relevant employee handbook sections without emotional conjecture.",
      "Anonymous wild rumors with zero evidence.",
      "Threatening social media leaks.",
      "Refusing to speak with compliance investigators."
    ],
    "correctAnswer": 0,
    "explanation": "Ethical concerns must be grounded in chronological evidence and specific compliance policies to enable rigorous, objective investigation."
  },
  {
    "id": 30,
    "topic": "Strategic Board of Directors Updates",
    "question": "What is the optimal cadence and structure for a quarterly Board of Directors investor update email?",
    "options": [
      "One email per year sent on December 31 with zero financial metrics.",
      "Executive Dashboard: Key Metrics vs Forecast (ARR, Burn, Runway, Churn), Strategic Wins, Top 3 Risks & Mitigations, and Specific Asks for Board Assistance.",
      "A 500-page unformatted text dump.",
      "A message asking board members to wire money without financial statements."
    ],
    "correctAnswer": 1,
    "explanation": "Board updates require high-level metric summaries, honest risk assessments, and targeted asks where investor expertise or networks can unlock growth."
  },
  {
    "id": 31,
    "topic": "Cross-Cultural Directness Calibration",
    "question": "In Dutch and Israeli business cultures, communication is typically very direct. How should a foreign manager interpret a blunt 'This proposal is unacceptable' email from these partners?",
    "options": [
      "As a personal declaration of war and permanent termination of the relationship.",
      "As a joke that should be ignored.",
      "As normal, transparent, direct professional feedback on the specific business terms, meant to start immediate practical negotiations.",
      "By filing a formal diplomatic protest."
    ],
    "correctAnswer": 2,
    "explanation": "In low-context, direct cultures, frank critique is viewed as honest efficiency rather than personal hostility, inviting straightforward counter-proposals."
  },
  {
    "id": 32,
    "topic": "B2B Contract Renewal Upselling",
    "question": "When emailing an enterprise customer 90 days before annual contract renewal, how should an expansion / upsell be introduced?",
    "options": [
      "Demand that they double their contract size or lose access.",
      "Send an invoice for an unapproved higher tier without discussion.",
      "Wait until the day after the contract expires to email them.",
      "Highlight quantifiable value achieved over the past 9 months (e.g. 99.9% uptime, 4,000 active learners) and propose tier expansion aligned with their upcoming growth goals."
    ],
    "correctAnswer": 3,
    "explanation": "Grounding expansion in historical ROI and alignment with future growth objectives makes contract upgrades a natural strategic investment."
  },
  {
    "id": 33,
    "topic": "Managing Hostile Email Inquiries",
    "question": "When a competitor or adversarial party sends a provocative, hostile email, what is the best executive response strategy?",
    "options": [
      "Take 24 hours to cool down, consult legal/communications counsel, stick strictly to verified facts in a calm neutral tone, and move conversation offline if appropriate.",
      "Reply within 30 seconds with furious personal insults.",
      "Forward the email to the entire company asking for attack strategies.",
      "Hack their email server."
    ],
    "correctAnswer": 0,
    "explanation": "Maintaining calm neutrality and consulting counsel denies the adversary emotional leverage and protects corporate reputation."
  },
  {
    "id": 34,
    "topic": "Multi-Lingual Plain English Verbs",
    "question": "Which verb choice is clearest for global teams whose first language is not English?",
    "options": [
      "'We need to spearhead the onboarding brainstorm.'",
      "'We will start the onboarding training on Monday.'",
      "'Let's greenlight the operational kick-off.'",
      "'We should inaugurate the pedagogical endeavor.'"
    ],
    "correctAnswer": 1,
    "explanation": "'Start the onboarding training' uses universally understood Plain English vocabulary rather than idioms or archaic Latinate verbs."
  },
  {
    "id": 35,
    "topic": "Executive Email Brevity Rule",
    "question": "What is the recommended maximum word count for an upward email to a Fortune 500 CEO requesting a decision?",
    "options": [
      "1,500 to 2,000 words.",
      "5,000 words with no paragraph breaks.",
      "Under 150 to 200 words, supported by bulleted takeaways and attached comprehensive documentation for deeper reading.",
      "Zero words."
    ],
    "correctAnswer": 2,
    "explanation": "Executive brevity (under 150-200 words) respects extreme executive schedule constraints while providing linked attachments for technical depth."
  },
  {
    "id": 36,
    "topic": "Sensitive Reference Check Responses",
    "question": "When providing a written employment reference check for a former employee whose performance was mixed, what is legally and professionally prudent?",
    "options": [
      "Fabricate a 100% glowing review full of falsehoods.",
      "Write 5 pages of personal gossip.",
      "Refuse to answer any questions ever.",
      "Stick strictly to verifiable employment dates, official job titles, and objective responsibilities, avoiding subjective emotional speculation."
    ],
    "correctAnswer": 3,
    "explanation": "Sticking to objective employment dates and titles protects against defamation or misrepresentation liabilities while remaining factual."
  },
  {
    "id": 37,
    "topic": "Advanced Conditionals for Diplomacy",
    "question": "Which advanced conditional structure expresses the most polite, formal hypothesis in executive correspondence?",
    "options": [
      "Should your committee require additional actuarial forecasts, we would be pleased to furnish them prior to the board convening.",
      "If you mess up, you pay.",
      "If you want stuff, tell me.",
      "You might need files, so here."
    ],
    "correctAnswer": 0,
    "explanation": "Inverted conditional structures ('Should your committee require...') represent the pinnacle of formal diplomatic courtesy in British and international business English."
  },
  {
    "id": 38,
    "topic": "Complex Thread Summarization",
    "question": "When jumping into a 45-message chaotic email thread to bring clarity, what should your email begin with?",
    "options": [
      "'Why did you all write so many emails?'",
      "'Executive Summary & Path Forward' summarizing the 3 key agreed points, 2 remaining open questions, and proposing next steps.",
      "Quoting all 45 previous emails in full without commentary.",
      "Telling everyone to delete their email accounts."
    ],
    "correctAnswer": 1,
    "explanation": "A structured synthesis that distills chaos into agreements, blockers, and next steps immediately positions you as a decisive organizational leader."
  },
  {
    "id": 39,
    "topic": "Data Privacy & Sensitive PII Transmission",
    "question": "What is mandatory when transmitting customer Personally Identifiable Information (PII) or financial data via email?",
    "options": [
      "Pasting credit card numbers and passwords directly in the plain text subject line.",
      "Sending PII to all company mailing lists.",
      "Using password-protected encrypted attachments or secure zero-knowledge cloud links, transmitting credentials via separate secure out-of-band channels.",
      "Writing PII in invisible white font."
    ],
    "correctAnswer": 2,
    "explanation": "GDPR, HIPAA, and SOC2 standards mandate encrypted transmission of PII with out-of-band credential sharing to prevent data breach liabilities."
  },
  {
    "id": 40,
    "topic": "Mastery of Strategic Email Leadership",
    "question": "What ultimately defines a Master-level business email communicator?",
    "options": [
      "Using the largest words in the dictionary to confuse readers.",
      "Sending 300 emails per hour.",
      "Never replying to any emails.",
      "The ability to achieve strategic business outcomes rapidly while building enduring trust, clarity, and psychological safety across diverse global stakeholders."
    ],
    "correctAnswer": 3,
    "explanation": "Mastery unites persuasive precision, psychological empathy, executive brevity, and strategic leadership across all digital communication contexts."
  }
];

export const ENGLISH_EMAIL_WRITING_ADVANCED_TASKS: Task[] = [
  {
    id: 'eew-adv-01',
    orderIndex: 1,
    title: '27. Advanced Grammar for Professional Emails',
    description: 'Master sophisticated syntactic structures: inverted conditionals (Should you require), subjunctive mood, passive diplomacy, parallel lists, and complex punctuation (semicolons, em-dashes).',
    duration: '50 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'in_progress',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Executive communication demands grammatical sophistication. Using advanced structures such as inverted conditionals, balanced parallel syntax, and diplomatic voice allows you to convey nuanced ideas with authority and elegance.',
      objectives: [
        'Master inverted conditionals: "Should you require...", "Were we to proceed...", "Had we known..."',
        'Use the subjunctive mood for formal recommendations ("We recommend that he submit...")',
        'Deploy passive diplomacy to de-escalate sensitive workplace errors',
        'Master semicolons and em-dashes for complex sentence architecture'
      ],
      sections: [
        {
          title: 'Advanced Inverted Conditionals & Diplomatic Voice',
          content: 'Inverted conditionals eliminate the word "if" to create formal, polished business prose. Instead of "If you need more information", write "Should you require further information". Instead of "If we expand", write "Were we to expand".',
          explanation: 'Inverted structures are standard in high-level legal, executive, and diplomatic correspondence worldwide.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Inverted Conditional Formulas',
              code: `Type 1 (Present / Future):\n- Standard: If you have any questions, please contact me.\n- Advanced Inversion: Should you have any questions, please do not hesitate to contact our office.\n\nType 2 (Hypothetical Present):\n- Standard: If we were to accept these terms, we would need...\n- Advanced Inversion: Were we to accept these revised terms, we would require a 15% volume discount.\n\nType 3 (Past Counterfactual):\n- Standard: If we had received the assets yesterday, we would have...\n- Advanced Inversion: Had we received the marketing assets yesterday, the campaign would have launched on schedule.`
            },
            {
              language: 'markdown',
              title: 'Example 2: Semicolons and Em-Dashes in Executive Writing',
              code: `Semicolon (Connecting closely related independent clauses):\n- The Q3 revenue targets were achieved ahead of schedule; consequently, we are expanding hiring in engineering.\n\nEm-Dash (Highlighting strategic emphasis or executive takeaway):\n- Our primary growth metric—enterprise annual contract value—grew by 44% in Q3.`
            },
            {
              language: 'markdown',
              title: 'Example 3: Subjunctive Mood for Formal Directives',
              code: `- Standard: I insist that he comes to the meeting.\n- Subjunctive: I insist that he attend the meeting. (Base verb 'attend')\n- Standard: We recommend that she signs the NDA.\n- Subjunctive: We recommend that she sign the NDA.`
            }
          ],
          commonMistakes: [
            'Overusing inverted conditionals in casual peer Slack messages (sounds pompous if overused with teammates).',
            'Using comma splices (joining two complete sentences with only a comma instead of a semicolon or period).',
            'Mixing active and passive verbs within the same parallel list.'
          ],
          proTip: 'Use inverted conditionals ("Should you require...") in closing lines to make an indelible impression of formal competence.'
        }
      ],
      keyTakeaways: [
        'Use "Should you require..." for formal external correspondence.',
        'Use semicolons to connect causally related independent thoughts.',
        'Maintain parallel grammatical structure across all bulleted lists.'
      ],
      practiceExercises: [
        {
          title: 'Advanced Inversion & Syntax Lab',
          instructions: 'Convert 6 basic conditional sentences into advanced inverted conditional structures with perfect subjunctive mood.'
        }
      ]
    },
    questions: [
      {
        id: 1,
        topic: "Advanced Grammar for Professional Emails",
        question: "Which sentence correctly demonstrates an inverted conditional structure?",
        options: [
          "If you might have questions please call me.",
          "Should you require any additional financial disclosures, our team would be pleased to provide them.",
          "You should have questions so call our team.",
          "Were you having questions we will answer them."
        ],
        correctAnswer: 1,
        explanation: "'Should you require any additional financial disclosures...' correctly uses inversion without 'if' to create high-level formal business syntax."
      }
    ]
  },
  {
    id: 'eew-adv-02',
    orderIndex: 2,
    title: '28. Diplomatic and Sensitive Communication',
    description: 'Master high-stakes interpersonal diplomacy: delivering bad news, saying "no" with grace, rejecting budget/feature requests, setting boundaries, and softening harsh feedback.',
    duration: '50 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Saying "no" without burning bridges is one of the highest arts of leadership. Learning how to deliver bad news with empathy, strategic rationale, and alternative paths forward preserves commercial and personal relationships.',
      objectives: [
        'Apply the "Diplomatic Buffer" framework when delivering adverse news',
        'Reject out-of-scope requests while offering strategic Phase 2 alternatives',
        'Decline executive or client demands diplomatically without sounding defiant',
        'Soften critical feedback using growth-oriented collaborative language'
      ],
      sections: [
        {
          title: 'The Diplomatic Buffer Framework',
          content: '1. Sincere Appreciation: Validate the request and effort.\n2. Strategic Rationale: Explain the objective business constraints (bandwidth, budget, security).\n3. Clear Decision: State the decision without ambiguity or false promises.\n4. Constructive Alternative: Offer an alternative timeline, partner, or scope.',
          explanation: 'People accept difficult decisions when the rationale is transparent and their relationship is valued.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Declining a Partnership Proposal Diplomatically',
              code: `Subject: Skillora AI & EdTech Global Partnership Inquiry\n\nDear Mr. Kensington,\n\nThank you for taking the time to present the EdTech Global co-marketing partnership proposal last Thursday. We were deeply impressed by your team's innovative student outreach campaigns.\n\nWhile we recognize the potential synergy between our platforms, our executive leadership has committed all Q4 marketing resources to our core enterprise platform launch. Consequently, we are unable to participate in co-sponsored symposiums during this fiscal quarter.\n\nWe would welcome the opportunity to revisit this initiative in Q2 2027 once our platform rollout is complete. I will keep your materials on file and reach out as we begin our 2027 partner planning.\n\nThank you once again for considering Skillora AI. We wish your symposium tremendous success.\n\nWarm regards,\nJordan Patel\nHead of Ecosystem Partnerships | Skillora AI`
            },
            {
              language: 'markdown',
              title: 'Example 2: Saying No to Client Scope Creep with a Change Order',
              code: `Subject: Feature Request Evaluation: Real-Time Audio Translation - Project Vantage\n\nDear Ms. Vance,\n\nThank you for sharing the proposal to add real-time audio translation to the mobile app. It is a fantastic feature that will certainly enhance the global learner experience.\n\nBecause audio streaming was not included in our initial Master Services Agreement, incorporating it into the current sprint would delay our October 30 production launch by approximately 4 weeks. To ensure we meet your holiday marketing deadline, we recommend maintaining our current scope for Phase 1.\n\nI have prepared a separate Change Order proposal outlining the cost and architecture for releasing audio translation in Phase 2 (Q1 2027). Please let me know if you would like to review this during our Friday call.\n\nBest regards,\nJulian Hayes\nSenior Project Manager`
            },
            {
              language: 'markdown',
              title: 'Example 3: Diplomatic Disagreement with Senior Management',
              code: `Subject: Risk Assessment: Accelerating Database Migration to Friday\n\nDear David,\n\nI understand the executive team's desire to accelerate the database migration to this Friday to meet the quarterly milestone.\n\nHowever, our staging load tests revealed intermittent latency spikes under simulated enterprise traffic that have not yet been resolved. Migrating this Friday presents an estimated 35% risk of production downtime during Monday morning peak hours.\n\nRecommendation: I strongly recommend taking an additional 72 hours to optimize index caching, targeting deployment for next Tuesday night. This guarantees a defect-free transition for our 85,000 enterprise users.\n\nI am available to walk through the latency logs whenever you are free.\n\nBest regards,\nMarcus Sterling`
            }
          ],
          commonMistakes: [
            'Giving a blunt "No" without explaining the strategic reason.',
            'Giving a false "maybe" when you really mean "no" (leads to worse frustration later).',
            'Apologizing excessively when upholding a legitimate business boundary.'
          ],
          proTip: 'Never say "We cannot do this." Instead say: "To ensure we deliver X on time, our team is focusing resources on Y, and we can explore this in Phase 2."'
        }
      ],
      keyTakeaways: [
        'Use the Diplomatic Buffer: Appreciation -> Rationale -> Decision -> Alternative.',
        'Convert scope creep into exciting Phase 2 opportunities with formal Change Orders.',
        'Ground disagreements in quantifiable business risks rather than subjective opinions.'
      ],
      practiceExercises: [
        {
          title: 'Diplomatic Refusal Workshop',
          instructions: 'Draft an email declining an urgent, out-of-scope client request to build a custom reporting engine in 48 hours.'
        }
      ]
    },
    questions: [
      {
        id: 2,
        topic: "Diplomatic and Sensitive Communication",
        question: "When declining an out-of-scope client feature request, what is the best leadership approach?",
        options: [
          "Insult the client for not reading the contract",
          "Validate the feature's value, explain that including it now would jeopardize the launch date, and present a formal Phase 2 Change Order",
          "Do the feature for free and work all night",
          "Ignore the client's email"
        ],
        correctAnswer: 1,
        explanation: "Framing the request as an exciting Phase 2 Change Order protects the current deadline while expanding commercial opportunities."
      }
    ]
  },
  {
    id: 'eew-adv-03',
    orderIndex: 3,
    title: '29. Executive and Management Emails',
    description: 'Learn executive-level writing standards: the BLUF principle (Bottom Line Up Front), 1-page decision briefing memos, risk reporting, and upward communication for CEOs and Boards.',
    duration: '50 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Executives and C-suite leaders operate under extreme time pressure and cognitive overload. Writing to leadership requires distilling complex technical or operational data into high-leverage insights, clear options, and explicit decision requests.',
      objectives: [
        'Master the BLUF (Bottom Line Up Front) executive communication standard',
        'Structure 1-page decision briefing memos with evaluated options and recommendations',
        'Communicate strategic risks with mitigation roadmaps',
        'Write concise investor and board update emails'
      ],
      sections: [
        {
          title: 'The BLUF Executive Decision Framework',
          content: 'Line 1: Bottom Line Up Front (The core decision needed & deadline).\nLine 2-4: Key Business Context (Why now, what is at stake).\nSection 2: Options Matrix (Option A vs Option B with cost/risk comparison).\nSection 3: Recommended Action (Clear, justified recommendation).\nSection 4: Next Step (What happens upon approval).',
          explanation: 'Executives should be able to read your email and reply with "Approved" in under 20 seconds.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Executive Decision Request Memo',
              code: `Subject: Decision Required: Cloud Hosting Provider Selection for 2027 (Approval by Oct 28)\n\nDear Executive Committee,\n\n**Bottom Line Up Front (BLUF):** We request approval to execute a 3-year enterprise agreement with CloudScale Systems ($180k/yr) by October 28 to capture a $45k early-renewal credit.\n\n**Context & Evaluation:**\nOur current hosting contract expires December 31. We evaluated three Tier-1 infrastructure providers against our 2027 global expansion roadmap:\n\n- **CloudScale Systems (Recommended):** $180,000/yr | 99.99% SLA | Dedicated 24/7 technical account manager | 35% latency reduction in EU region.\n- **DataCore Global:** $215,000/yr | 99.95% SLA | Standard support pool.\n- **Status Quo (Monthly Renewal):** $240,000/yr equivalent ($20k/mo) with zero SLA guarantees.\n\n**Recommendation:** CloudScale Systems delivers the highest reliability and generates $60,000 in net annual operational savings.\n\n**Action Requested:** Reply with "Approved" by Wednesday, Oct 28 at 5:00 PM EST to authorize contract execution.\n\nFull evaluation spreadsheet attached.\n\nRespectfully,\nDavid Zhao\nDirector of Infrastructure | Skillora AI`
            },
            {
              language: 'markdown',
              title: 'Example 2: Executive Quarterly Risk Briefing',
              code: `Subject: Executive Briefing: Q4 Infrastructure Risk Assessment & Mitigation\n\nDear Leadership Team,\n\n**Summary:** As our active learner base approaches 500,000 concurrent users, our primary database cluster faces throughput constraints during peak weekday morning hours (09:00 - 11:00 EST).\n\n**Identified Risks:**\n1. **Query Saturation:** API response times degrade from 120ms to 850ms at 400k+ concurrent connections.\n2. **Assessment Failover:** 2.1% risk of transient session timeouts during automated code grading.\n\n**Mitigation Roadmap:**\n- **Phase 1 (Complete):** Implemented Redis query caching across 80% of read traffic.\n- **Phase 2 (In Progress - Oct 25):** Deploying database read replicas to distribute query load across 3 regional availability zones.\n- **Phase 3 (Nov 5):** Automated connection pooling with sub-second failover.\n\n**Impact:** These measures ensure 99.99% availability throughout the upcoming holiday enrollment surge.\n\nSincerely,\nElena Rostova\nVP of Engineering`
            },
            {
              language: 'markdown',
              title: 'Example 3: Board of Directors Monthly Highlight Note',
              code: `Subject: Skillora AI: October 2026 Executive Performance Summary\n\nDear Board of Directors,\n\nHere is our executive summary for October 2026:\n\n**Key Metrics:**\n- **ARR:** $14.2M (18% YoY growth, on track for $15M Q4 target)\n- **Net Revenue Retention:** 122%\n- **Cash Runway:** 26 months ($18.4M cash in bank)\n\n**Key Strategic Milestones:**\n1. Closed 3 enterprise multi-year contracts ($450k total contract value).\n2. Launched Interactive Shopify Developer Masterclass track.\n3. Reduced infrastructure cost per active user by 22%.\n\n**Areas of Focus:** Enterprise sales cycle length increased from 45 to 58 days due to extended client security reviews; expanding compliance automation to streamline reviews.\n\nThank you for your ongoing guidance and support.\n\nWarm regards,\nMarcus Sterling\nChief Executive Officer | Skillora AI`
            }
          ],
          commonMistakes: [
            'Burying the decision request at the bottom of a 5-page narrative.',
            'Presenting problems to executives without proposing actionable solutions.',
            'Using dense engineering acronyms with non-technical board members.'
          ],
          proTip: 'Always include the required decision date in the subject line: `[Approval Needed by Oct 28] ...`'
        }
      ],
      keyTakeaways: [
        'Lead with the Bottom Line Up Front (BLUF).',
        'Structure decision memos with evaluated options, pros/cons, and explicit recommendations.',
        'State exact decision deadlines in the subject line and opening sentence.'
      ],
      practiceExercises: [
        {
          title: 'Executive Decision Memo Drafting',
          instructions: 'Draft a 150-word BLUF decision email to the CEO requesting authorization to hire 3 contract engineers for a high-priority product launch.'
        }
      ]
    },
    questions: [
      {
        id: 3,
        topic: "Executive and Management Emails",
        question: "What is the core principle of the BLUF (Bottom Line Up Front) communication model for executive emails?",
        options: [
          "Hiding the real question at the bottom of the email",
          "Stating the primary conclusion, recommendation, or decision requested in the very first 2 sentences",
          "Sending only bullet points with no context",
          "Using informal jokes in the opening line"
        ],
        correctAnswer: 1,
        explanation: "BLUF immediately states the bottom-line decision or recommendation upfront, respecting executive cognitive load and speeding up decision-making."
      }
    ]
  },
  {
    id: 'eew-adv-04',
    orderIndex: 4,
    title: '30. Negotiation Emails',
    description: 'Master commercial and contract negotiation: conditional bargaining language, negotiating software licenses, price concessions, scope adjustments, deadlines, and relationship preservation.',
    duration: '50 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Written negotiation is a high-stakes balance of firmness and diplomacy. A skilled negotiator protects company margins and timelines while ensuring counterparties feel respected and invested in long-term mutual success.',
      objectives: [
        'Master the "If-Then" conditional bargaining formula in commercial writing',
        'Negotiate price discounts in exchange for contract length, volume, or payment terms',
        'Negotiate delivery deadlines without sacrificing product quality',
        'Preserve collaborative relationships during tough commercial impasses'
      ],
      sections: [
        {
          title: 'The Conditional Bargaining Formula',
          content: 'Never give a concession for free. Always link concessions to counter-value using conditional syntax: "If you are able to adjust X to [amount], we would be prepared to commit to Y [longer term / upfront payment / case study rights]."',
          explanation: 'Conditional bargaining prevents one-sided price erosion and creates win-win business agreements.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Software Licensing Fee Negotiation',
              code: `Subject: Commercial Terms Review: Skillora AI & CloudScale Enterprise Agreement\n\nDear Mr. Montgomery,\n\nThank you for sharing the revised enterprise pricing proposal for 500 seats at $195,000 annually. We are very excited about deploying CloudScale across our engineering teams.\n\nOur procurement budget for this initiative is capped at $170,000 for the upcoming fiscal year. To bridge this gap while creating significant mutual value for CloudScale, we would like to propose the following structured terms:\n\n**Proposed Agreement Structure:**\n1. **Contract Term:** Skillora commits to a 3-year contract (total value: $510,000 USD) rather than an annual agreement.\n2. **Annual Licensing:** CloudScale adjusts the annual fee to $170,000 per year.\n3. **Payment Terms:** Skillora will pay Year 1 in full upfront within 10 days of signing.\n4. **Co-Marketing:** Skillora agrees to serve as a featured enterprise case study on CloudScale's website.\n\nIf these terms are acceptable, our legal team is prepared to execute the Master Services Agreement by Friday.\n\nThank you for your partnership in making this collaboration a success.\n\nBest regards,\nNathan Cole\nDirector of Technology Procurement | Skillora AI`
            },
            {
              language: 'markdown',
              title: 'Example 2: Consulting Scope & Deadline Negotiation',
              code: `Subject: Timeline & Deliverables Alignment - UX Redesign Sprint\n\nDear Clara,\n\nThank you for the detailed feedback on our preliminary wireframe concepts. Your team's vision for the multi-tier navigation is outstanding.\n\nTo incorporate the 4 newly requested custom reporting views without compromising the November 15 launch date, we propose the following adjustment:\n\n- **November 15 Release:** Launch the core 3 views (Overview, Engagement, Settings) on schedule.\n- **December 1 Release:** Launch the 4 custom reporting views in Sprint 2 for an additional $8,500 scope addition.\n\nThis phased delivery guarantees that your marketing launch proceeds without delay while providing adequate engineering runway for the reporting architecture.\n\nPlease let me know if this delivery schedule works for your stakeholders.\n\nWarm regards,\nCarlos Rivera`
            },
            {
              language: 'markdown',
              title: 'Example 3: Professional Salary / Compensation Negotiation',
              code: `Subject: Offer Consideration: Lead Product Designer - Maya Lin\n\nDear Ms. Albright,\n\nThank you so much for extending the offer for the Lead Product Designer role at Skillora AI. I am thrilled about the opportunity to lead your design systems team.\n\nBased on my seven years of design systems architecture and recent experience scaling enterprise SaaS platforms by 140%, I would like to discuss the base salary component. Given market benchmarks for lead design roles in educational technology, I would be delighted to immediately sign the offer at a base salary of $135,000 (an adjustment from the initial $125,000 offer).\n\nI am deeply enthusiastic about Skillora's mission and look forward to contributing to your upcoming product milestones.\n\nThank you again for your time and consideration.\n\nWarm regards,\nMaya Lin`
            }
          ],
          commonMistakes: [
            'Giving an ultimatum ("Take it or leave it") which forces counterparties into defensive corners.',
            'Accepting initial offers without exploring value-adding trade-offs (payment terms, case studies, volume).',
            'Negotiating piecemeal over 20 separate emails instead of packaging all terms in one cohesive proposal.'
          ],
          proTip: 'Package all your negotiation points together: "We have reviewed the contract and have 3 points of adjustment..." Never introduce new demands after agreeing to previous ones.'
        }
      ],
      keyTakeaways: [
        'Always link price concessions to trade-offs (longer terms, upfront cash, case study rights).',
        'Package all negotiation points in a single comprehensive proposal.',
        'Maintain a collaborative, problem-solving partnership tone throughout negotiations.'
      ],
      practiceExercises: [
        {
          title: 'Commercial Contract Negotiation Lab',
          instructions: 'Draft an email negotiating a 15% discount on an enterprise vendor contract in exchange for a 2-year commitment and upfront payment.'
        }
      ]
    },
    questions: [
      {
        id: 4,
        topic: "Negotiation Emails",
        question: "When negotiating a commercial discount with an enterprise software vendor, what is the most effective tactic?",
        options: [
          "Threaten to leave bad reviews on social media if they don't lower their price",
          "Offer high-value counter-commitments (such as a multi-year term, upfront payment, or marketing case study) in exchange for the fee adjustment",
          "Refuse to explain why you want a discount",
          "Insult their product features"
        ],
        correctAnswer: 1,
        explanation: "Exchanging price concessions for multi-year commitments or upfront cash creates mutual value and justifies the discount internally for the vendor."
      }
    ]
  },
  {
    id: 'eew-adv-05',
    orderIndex: 5,
    title: '31. Proposal and Partnership Emails',
    description: 'Learn how to write high-conversion B2B proposal and strategic partnership pitches: collaborative hooks, articulating mutual value, defining integration roadmaps, and scheduling exploration calls.',
    duration: '50 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Strategic partnerships unlock explosive distribution and product value. Pitching external corporate partners requires demonstrating deep market understanding, technical feasibility, and shared economic upside.',
      objectives: [
        'Craft collaborative partnership hooks that demonstrate mutual strategic alignment',
        'Articulate quantifiable value (audience reach, technical synergies, revenue sharing)',
        'Outline low-risk exploratory pilot frameworks',
        'Design compelling executive partnership decks and accompanying introductory emails'
      ],
      sections: [
        {
          title: 'The Strategic Partnership Pitch Anatomy',
          content: '1. The Common Ground: Acknowledge shared industry vision or joint customer demand.\n2. The Opportunity: Detail the integration or co-marketing initiative.\n3. Mutual Economic Value: Quantify benefits for both parties.\n4. Low-Risk Next Step: Propose a 20-minute exploratory discussion.',
          explanation: 'Corporate leaders respond when proposals clearly demonstrate how their organization captures revenue or distribution.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: High-Level EdTech Platform Integration Proposal',
              code: `Subject: Partnership Proposal: Skillora AI & CodeVerify LMS Integration\n\nDear Dr. Vance,\n\nI hope this email finds you well.\n\nOver 35 corporate enterprise clients—including NexaTech and Acme Corp—currently utilize CodeVerify as their primary learning management system alongside Skillora AI for real-time developer assessments.\n\nCurrently, mutual enterprise instructors must manually export assessment score CSVs between our platforms. We would love to explore developing an official, native LTI 1.3 integration that synchronizes grading rosters in real-time.\n\n**Mutual Strategic Value:**\n- **For CodeVerify:** Enhanced enterprise stickiness and access to Skillora's 100,000+ developer community.\n- **For Skillora AI:** Frictionless deployment for joint Fortune 500 enterprise accounts.\n- **Co-Marketing:** Joint press release and co-branded webinar on automated technical assessment standards.\n\nWe have prepared a preliminary 2-page API architecture briefing. Would you be open to a 20-minute exploratory conversation next Tuesday at 10:00 AM EST to discuss this collaboration?\n\nSincerely,\nJordan Patel\nHead of Ecosystem Partnerships | Skillora AI\njordan.p@skillora.ai | +1 (555) 789-0123`
            },
            {
              language: 'markdown',
              title: 'Example 2: Co-Branded Industry Research Report Partnership',
              code: `Subject: Co-Authorship Invitation: 2027 State of Developer Education Report\n\nDear Research Division,\n\nSkillora AI is compiling our annual *State of Global Developer Education Report*, analyzing anonymized performance data across 1.2M automated coding assessments in 2026.\n\nGiven DevMetrics Institute's pioneering research on developer productivity, we would love to invite your team to serve as our official co-author and research partner for the 2027 edition.\n\n**Partnership Scope:**\n- Joint data analysis and co-branded whitepaper publication.\n- Distribution to Skillora's 250k subscriber base and DevMetrics' enterprise executive network.\n- Joint keynote presentation at the Global Engineering Leadership Summit in February.\n\nPlease find the project prospectus attached. We would be delighted to schedule a brief sync next week to explore your team's interest.\n\nWarm regards,\nElena Rostova\nVP of Engineering & Research`
            },
            {
              language: 'markdown',
              title: 'Example 3: University Academic Alliance Proposal',
              code: `Subject: Academic Alliance Proposal: Skillora AI Laboratory Access for Stanford Computer Science\n\nDear Professor Higgins,\n\nI am writing to propose a formal academic partnership between Skillora AI and the Stanford Department of Computer Science for the upcoming academic year.\n\nWe would be honored to provide complimentary enterprise-tier access to Skillora's interactive AI laboratory environments for all undergraduate students enrolled in CS 106 and CS 224N.\n\n**Key Academic Benefits:**\n- Zero-configuration interactive coding sandboxes for 800+ students.\n- Automated grading telemetry for teaching assistants, reducing grading overhead by 65%.\n- Dedicated summer research internship grants funded by Skillora AI.\n\nCould we arrange a 15-minute briefing next week to demonstrate the platform to your faculty committee?\n\nRespectfully,\nMarcus Sterling\nCEO | Skillora AI`
            }
          ],
          commonMistakes: [
            'Proposing one-sided deals where your company gets all the benefits and the partner does all the work.',
            'Sending a generic mass email to info@company.com instead of identifying the Head of Partnerships or Business Development.',
            'Attaching a 100-page unformatted draft contract before establishing mutual interest.'
          ],
          proTip: 'Mention shared joint customers or mutual enterprise demands in paragraph one to establish immediate credibility.'
        }
      ],
      keyTakeaways: [
        'Articulate clear, symmetrical value for both organizations.',
        'Reference joint customer demand or industry data.',
        'Propose low-risk exploratory 20-minute conversations.'
      ],
      practiceExercises: [
        {
          title: 'Strategic Partnership Pitch Lab',
          instructions: 'Draft an email to the VP of Business Development at a major cloud company proposing a co-marketing and integration alliance.'
        }
      ]
    },
    questions: [
      {
        id: 5,
        topic: "Proposal and Partnership Emails",
        question: "What is the most compelling hook when proposing a technical integration partnership to an external SaaS company?",
        options: [
          "Telling them that your company needs more money",
          "Demonstrating that dozens of joint corporate customers are already requesting the integration to streamline their daily workflows",
          "Claiming that you will sue them if they do not partner with you",
          "Asking them to rebuild their entire product from scratch"
        ],
        correctAnswer: 1,
        explanation: "Citing existing joint customer demand proves immediate market validation and eliminates guesswork regarding adoption."
      }
    ]
  },
  {
    id: 'eew-adv-06',
    orderIndex: 6,
    title: '32. Persuasive Business Communication',
    description: 'Master advanced psychological persuasion frameworks: Cialdini’s principles of influence (Reciprocity, Scarcity, Authority, Consistency, Consensus), framing effects, and evidence presentation.',
    duration: '50 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'High-level business persuasion is grounded in cognitive psychology and ethical framing. By structuring arguments around established principles of human decision-making, you can achieve organizational consensus and motivate decisive action.',
      objectives: [
        'Apply Cialdini\'s 6 Principles of Ethical Influence to business correspondence',
        'Use cognitive framing (Loss Aversion vs Growth Opportunity) strategically',
        'Present empirical data and third-party validation to dismantle skepticism',
        'Overcome organizational inertia and decision paralysis'
      ],
      sections: [
        {
          title: 'Applying Cialdini\'s Principles in Executive Writing',
          content: '1. Authority: Cite empirical benchmarks, independent research, and industry certifications.\n2. Social Proof / Consensus: Show that peer organizations have successfully adopted the approach.\n3. Loss Aversion: Highlight the quantifiable cost of delayed action.\n4. Consistency: Align your proposal with previously stated leadership goals.',
          explanation: 'Persuasion succeeds when proposals align with the recipient’s existing cognitive identity and strategic targets.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Ethical Executive Persuasion Using Social Proof & Loss Aversion',
              code: `Subject: Business Case: Automated Code Assessment Tooling for Q1 Enterprise Hiring\n\nDear Executive Committee,\n\nDuring our annual strategic planning, leadership established a mandate to hire 120 senior software engineers in 2027 while maintaining our top-tier engineering talent bar.\n\n**The Cost of Inaction (Loss Aversion):**\nUnder our current manual interview process, senior engineers spend 14 hours per hire conducting live technical screenings. Hiring 120 engineers will consume 1,680 senior engineering hours ($185,000 in lost engineering productivity) and extend time-to-hire to 64 days, risking candidate drop-off to competitors.\n\n**The Proven Solution (Social Proof & Authority):**\nPeer technology leaders—including NexaTech and Finova Global—reduced engineering interview overhead by 68% by adopting Skillora's automated assessment engine.\n\n**Projected ROI for Our Engineering Organization:**\n- 1,100 senior engineering hours saved annually ($125,000 net value)\n- Time-to-hire reduced from 64 days to 28 days\n- 100% standardized, bias-free candidate evaluation\n\nI have attached the formal business case. I request approval to initiate deployment next week.\n\nRespectfully,\nElena Rostova\nVP of Engineering`
            },
            {
              language: 'markdown',
              title: 'Example 2: Framing Opportunity vs Risk',
              code: `Gain Framing: Adopting this automated pipeline will increase developer velocity by 30%.\nLoss Framing (Higher psychological impact): Failing to automate our build pipeline costs our team $4,500 weekly in idle developer latency.`
            },
            {
              language: 'markdown',
              title: 'Example 3: Leveraging Reciprocity & Consistency',
              code: `Dear Marcus,\n\nThank you for sharing your insightful feedback on our cloud scaling whitepaper last week—we have incorporated all your recommendations into the final release.\n\nIn our last roadmap review, you mentioned that expanding multi-region failover was your top technical priority for Q4. In alignment with that goal, our infrastructure squad has completed the prototype architecture 2 weeks ahead of schedule...\n\nCould we review the benchmark results tomorrow morning?`
            }
          ],
          commonMistakes: [
            'Relying on emotional hype rather than verifiable empirical data.',
            'Using manipulative scarcity ("Only 2 seats left in the entire world!") in B2B corporate settings (destroys credibility).',
            'Failing to link proposals to previously established organizational goals.'
          ],
          proTip: 'Align every proposal with a direct quote from the recipient\'s stated annual goals: "In alignment with your goal to reduce operational overhead by 15%..."'
        }
      ],
      keyTakeaways: [
        'Leverage ethical influence: Authority, Social Proof, and Loss Aversion.',
        'Ground arguments in empirical metrics and peer case studies.',
        'Anchor proposals to the recipient\'s previously stated strategic goals.'
      ],
      practiceExercises: [
        {
          title: 'Psychological Influence Drafting Lab',
          instructions: 'Draft a 150-word proposal to your Chief Financial Officer persuading them to approve a new cyber-security audit tool using Loss Aversion and Social Proof.'
        }
      ]
    },
    questions: [
      {
        id: 6,
        topic: "Persuasive Business Communication",
        question: "Why is framing a business proposal around 'Loss Aversion' (the cost of inaction) often more persuasive to C-suite executives than simply highlighting potential gains?",
        options: [
          "Because cognitive psychology demonstrates that humans are twice as motivated to prevent quantifiable losses as they are to seek equivalent gains",
          "Because executives only like negative news",
          "Because loss framing is required by corporate accounting rules",
          "Because numbers with minus signs look more dramatic"
        ],
        correctAnswer: 0,
        explanation: "Prospect Theory (Kahneman & Tversky) proves that decision-makers place significantly greater psychological weight on avoiding quantifiable risks and lost resources than on prospective gains."
      }
    ]
  },
  {
    id: 'eew-adv-07',
    orderIndex: 7,
    title: '33. Cross-Cultural Email Communication',
    description: 'Navigate global international business etiquette: high-context vs low-context cultures, directness vs indirectness, time zone etiquette, title protocols, and avoiding idiomatic misunderstandings.',
    duration: '50 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'In a globalized digital economy, your colleagues, clients, and partners span continents. Understanding cultural communication dimensions—direct vs indirect, hierarchical vs egalitarian—prevents costly misinterpretations and builds powerful global alliances.',
      objectives: [
        'Navigate the continuum between Low-Context (explicit, direct) and High-Context (implicit, relational) communication cultures',
        'Apply international title, salutation, and honorific standards across global markets',
        'Eliminate localized slang, sports metaphors, and cultural idioms',
        'Respect international holiday calendars, working weeks, and time-zone boundaries'
      ],
      sections: [
        {
          title: 'Low-Context vs High-Context Communication',
          content: 'Low-Context Cultures (USA, Germany, Netherlands): Direct, explicit, task-focused, literal. Meaning is in the words themselves.\nHigh-Context Cultures (Japan, South Korea, Middle East, Latin America): Nuanced, relationship-first, hierarchical, indirect. Meaning is embedded in context, hierarchy, and diplomatic phrasing.',
          explanation: 'Adapting to the recipient\'s cultural framework prevents unintentional offense and fosters mutual trust.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Cultural Calibration Guide',
              code: `Low-Context Email (Direct, task-driven - To German / US Client):\nDear Mr. Schmidt,\n\nPlease find attached the updated architectural schematics. We have completed the performance testing and require your approval on Section 3 by Thursday 5 PM.\n\nHigh-Context Email (Relationship-focused, courteous - To Japanese / East Asian Partner):\nDear Mr. Tanaka,\n\nI hope this email finds you and your team in good health and high spirits.\n\nThank you very much for your continuous guidance and valued partnership with Skillora AI. Following our fruitful discussion last Tuesday, we have carefully prepared the revised architectural proposal for your review.\n\nWe would be deeply grateful for your feedback when your schedule permits. Please let us know if any aspect requires further refinement.\n\nWith our highest respect and warm regards,\nDavid Zhao`
            },
            {
              language: 'markdown',
              title: 'Example 2: Eliminating Confusing Local Idioms',
              code: `Confusing Local Idioms (Avoid globally):\n- "Let's throw this against the wall and see what sticks."\n- "We need to knock this out of the park."\n- "Bite the bullet and touch base."\n\nGlobal Plain English Equivalents:\n- "Let us test this hypothesis in our staging environment."\n- "Our goal is to achieve an exceptional performance outcome."\n- "We must resolve this challenge and schedule a review."`
            },
            {
              language: 'markdown',
              title: 'Example 3: Working Week & Holiday Awareness',
              code: `Middle East Working Week: Sunday through Thursday (Friday/Saturday is the weekend).\nAlways check whether your recipient observes Ramadan, Lunar New Year, Golden Week, or national holidays before sending urgent requests.`
            }
          ],
          commonMistakes: [
            'Assuming everyone understands American football or baseball metaphors.',
            'Sending urgent Friday afternoon emails to partners in the Middle East where Friday is a sacred day of rest.',
            'Addressing senior Japanese or German executives by their first names without prior invitation.'
          ],
          proTip: 'When writing across international teams, use simple subject-verb-object sentence structures and avoid sarcasm, which never translates cleanly across digital text.'
        }
      ],
      keyTakeaways: [
        'Adapt formality to High-Context (relationship-first) and Low-Context (task-first) cultures.',
        'Eliminate localized idioms and sports slang in favor of Plain English.',
        'Respect international working weeks, calendars, and time zones.'
      ],
      practiceExercises: [
        {
          title: 'Cross-Cultural Calibration Workshop',
          instructions: 'Rewrite a direct, slang-heavy American status email into a respectful, Plain English communication suitable for an executive partner in Tokyo.'
        }
      ]
    },
    questions: [
      {
        id: 7,
        topic: "Cross-Cultural Email Communication",
        question: "When collaborating with international partners whose native language is not English, why should you avoid idioms like 'touch base', 'bite the bullet', or 'knock it out of the park'?",
        options: [
          "Because they are often misunderstood literally and obscure the actual operational meaning",
          "Because idioms use too many vowels",
          "Because international email filters block sports terms",
          "Because idioms are too formal"
        ],
        correctAnswer: 0,
        explanation: "Idiomatic expressions rely on localized cultural familiarity; in global business communication, Plain English ensures universal comprehension without ambiguity."
      }
    ]
  },
  {
    id: 'eew-adv-08',
    orderIndex: 8,
    title: '34. Difficult Customer and Crisis Emails',
    description: 'Master crisis communications: major platform outages, data security incidents, delivery failures, high-profile refund demands, and defusing public social escalations.',
    duration: '50 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'When production systems fail or data is compromised, enterprise communications are subjected to intense scrutiny by clients, regulators, and legal teams. Writing in a crisis requires rapid transparency, unflinching accountability, and solution-focused leadership.',
      objectives: [
        'Master the 5-part Enterprise Incident Communication protocol',
        'Communicate transparent root-cause investigations without increasing legal liability',
        'Handle executive escalation from high-value enterprise accounts',
        'Provide recurring, reliable status cadence during active operational emergencies'
      ],
      sections: [
        {
          title: 'The 5-Part Enterprise Incident Protocol',
          content: '1. Incident Acknowledgment: Clear description of the event with timestamp.\n2. Scope of Impact: Exactly which systems and user tiers are affected.\n3. Remediation Actions in Progress: What engineering is doing right now.\n4. Estimated Time to Recovery (ETR): Realistic, non-defensive timeline.\n5. Next Update Commitment: Explicit timestamp for the next briefing.',
          explanation: 'During crises, silence breeds panic. Frequent, structured updates reassure clients that the situation is actively contained.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Major Production Outage Alert (Critical Severity)',
              code: `Subject: [Urgent Incident Update #1] Skillora Assessment Engine Service Disruption\n\nDear Enterprise Administrator,\n\n**Incident Status:** Active Investigation (Severity 1)\n**Time of Incident:** October 14, 2026 - 14:15 UTC\n**Systems Affected:** Real-Time Interactive Code Execution & Assessment Engine\n\n**Incident Summary:**\nAt 14:15 UTC, our automated monitoring detected elevated error rates (502 Bad Gateway) affecting interactive coding workspace launches across our US-East region. Core web dashboard and billing services remain fully operational.\n\n**Remediation Steps in Progress:**\nOur Principal Infrastructure Engineers are actively isolating a database connection pool bottleneck. We are failing over active container workloads to our secondary standby cluster in US-Central.\n\n**Estimated Time to Resolution (ETR):** 45 minutes (15:30 UTC)\n**Next Incident Briefing:** 15:00 UTC (or immediately upon resolution)\n\nLive Telemetry Dashboard: https://status.skillora.ai\n\nWe sincerely apologize for the disruption to your ongoing training sessions and are dedicating full engineering resources to resolve this immediately.\n\nSincerely,\nElena Rostova\nVP of Engineering | Skillora AI`
            },
            {
              language: 'markdown',
              title: 'Example 2: Post-Incident Root Cause Analysis (RCA) Delivery',
              code: `Subject: [Incident Resolved & RCA Attached] Code Execution Engine Disruption - Oct 14\n\nDear Enterprise Administrator,\n\nFurther to our earlier alerts, we confirm that the interactive code execution engine was fully restored to 100% operational capacity at 15:22 UTC on October 14.\n\n**Summary of Incident:**\n- **Duration:** 1 hour, 7 minutes (14:15 - 15:22 UTC)\n- **Root Cause:** A transient memory leak in our WebSocket proxy gateway exhausted container connections during a traffic spike.\n- **Corrective Actions Taken:** Deployed an optimized memory limit configuration and doubled our automated container scaling thresholds.\n\n**SLA Downtime Credits:**\nIn accordance with Section 4.2 of our Master Services Agreement, our finance team has applied a 10% SLA credit to your upcoming monthly invoice.\n\nPlease find the complete technical Root Cause Analysis document attached (Skillora_RCA_2026-10-14.pdf).\n\nThank you for your patience and valued partnership.\n\nWarm regards,\nDavid Zhao\nDirector of Infrastructure`
            },
            {
              language: 'markdown',
              title: 'Example 3: Defusing a High-Value Client Cancellation Threat',
              code: `Subject: Personal Note from Skillora Executive Leadership - Account Review\n\nDear Mr. Henderson,\n\nI received your note regarding the recent onboarding delays on your enterprise portal. You are entirely justified in your frustration—this rollout has not met the standard of excellence we promised, and for that, I offer my sincere, personal apology.\n\nI have personally taken direct executive oversight of your account. I have assigned our Senior Solutions Architect, Marcus Sterling, to lead your custom SSO configuration full-time starting this morning.\n\nI would value the opportunity to speak with you directly for 15 minutes today at 2:00 PM EST to share our accelerated deployment plan and personally address any concerns. My direct cell number is +1 (555) 019-2834.\n\nThank you for holding us to high standards. We are committed to earning back your complete trust.\n\nSincerely,\nMarcus Sterling\nChief Executive Officer | Skillora AI`
            }
          ],
          commonMistakes: [
            'Remaining silent for hours during an outage while clients suffer in the dark.',
            'Promising that systems will be fixed "in 5 minutes" when you have not yet found the root cause.',
            'Making excuses or blaming cloud hosting providers publicly.'
          ],
          proTip: 'Always specify the exact time of your next update (e.g. "Next update at 15:00 UTC")—and deliver that update on time, even if the status has not changed.'
        }
      ],
      keyTakeaways: [
        'Communicate proactively using the 5-part Enterprise Incident protocol.',
        'Never make false promises on recovery times; state realistic ETRs with committed update cadences.',
        'Follow up every major outage with a comprehensive technical Root Cause Analysis (RCA).'
      ],
      practiceExercises: [
        {
          title: 'Crisis Communication Workshop',
          instructions: 'Draft a critical Severity 1 incident update email to 500 enterprise corporate clients notifying them of an active database outage.'
        }
      ]
    },
    questions: [
      {
        id: 8,
        topic: "Difficult Customer and Crisis Emails",
        question: "During an active severe platform outage, what is the single most important rule of communication?",
        options: [
          "Wait until the entire problem is 100% solved before sending any email at all",
          "Provide transparent, structured status updates with a realistic recovery estimate (ETR) and an explicit commitment for when the next update will arrive",
          "Blame your junior engineers publicly",
          "Send an email claiming the outage is the customer's fault"
        ],
        correctAnswer: 1,
        explanation: "Frequent, transparent, structured updates eliminate customer uncertainty and reassure enterprise stakeholders that the crisis is under active executive control."
      }
    ]
  },
  {
    id: 'eew-adv-09',
    orderIndex: 9,
    title: '35. Professional Email Thread Management',
    description: 'Master large, multi-party email threads: summarizing 40+ messages, selective quoting, subject line hygiene, managing CC/BCC expansion, avoiding reply-all storms, and closing unresolved threads.',
    duration: '45 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'As project teams scale, email threads easily balloon into 50-message unwieldy chains where critical decisions are lost. Learning how to synthesize chaotic threads, maintain subject hygiene, and manage participant lists establishes you as an indispensable operational anchor.',
      objectives: [
        'Synthesize complex multi-week email threads into 1-page executive decision summaries',
        'Apply selective inline quoting techniques without breaking readability',
        'Practice subject line hygiene when discussion topics naturally diverge',
        'Enforce strict Reply-All discipline across corporate mailing lists'
      ],
      sections: [
        {
          title: 'The Thread Synthesis Technique',
          content: 'When an email thread exceeds 15 replies and team members are talking in circles: 1) Step in with a clear Subject tag: `[Synthesis & Decision]`, 2) Summarize agreed items, 3) Highlight unresolved blockers, 4) Propose a concrete path forward.',
          explanation: 'Synthesizing threads eliminates communication fatigue and unblocks stalled organizational decisions.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Thread Synthesis & Consensus Email',
              code: `Subject: [Synthesis & Decision] Q4 Enterprise Pricing Strategy (was: Re: Re: Re: Pricing Thoughts)\n\nHi Everyone,\n\nTo bring clarity to our discussion across the past 28 messages, here is the synthesis of agreed-upon points and remaining decisions:\n\n**Agreed Points:**\n- Standard annual seat pricing remains at $299/user.\n- Dedicated enterprise SSO integration included for accounts with 250+ seats.\n\n**Open Decision Item:**\n- Whether to offer a 15% discount for 3-year upfront commitments (Finance approves; Sales recommends 20%).\n\n**Proposed Path Forward:**\nWe adopt a 15% standard discount for 3-year terms, granting VP approval discretion for 20% on deals exceeding 1,000 seats.\n\nIf no objections are raised by Thursday at 12:00 PM EST, we will update our standard rate card accordingly.\n\nBest regards,\nSarah Jenkins\nDirector of Product Operations`
            },
            {
              language: 'markdown',
              title: 'Example 2: Managing Recipient List Evolution (Adding/Removing CCs)',
              code: `Subject: Vendor Contract Execution - Acme Corp (Moving Legal to BCC)\n\nHi Team,\n\nThanks to our Legal department for finalizing the Master Services Agreement terms (moving Legal to BCC to spare your inboxes).\n\n**@Marcus (Procurement):** Please proceed with issuing Purchase Order #84910 by Friday noon.\n\nBest regards,\nNathan Cole`
            },
            {
              language: 'markdown',
              title: 'Example 3: Professional Inline Quoting',
              code: `Hi Liam,\n\nThanks for your questions on the API migration. My responses are below in blue:\n\n> Will the staging database be accessible during the Sunday migration window?\nYes, staging will remain fully operational; only production write-replicas will be paused for 30 minutes.\n\n> Who is leading the client smoke testing on Monday morning?\nLeila Chen will oversee client smoke testing starting at 08:30 EST.\n\nBest regards,\nMarcus`
            }
          ],
          commonMistakes: [
            'Keeping 30 people on CC when only 2 people are discussing a minor technical nuance.',
            'Continuing an email thread about a completely new topic under an old, unrelated subject line.',
            'Replying all to say "Thanks!" to a company-wide announcement.'
          ],
          proTip: 'When moving people off a thread to spare their inboxes, explicitly state it at the top: "(Moving John and Sarah to BCC to spare your inboxes)".'
        }
      ],
      keyTakeaways: [
        'Step in to synthesize chaotic threads into clear decisions and next steps.',
        'Update subject lines when topics evolve.',
        'Move completed stakeholders to BCC to prevent unnecessary notifications.'
      ],
      practiceExercises: [
        {
          title: 'Thread Synthesis Lab',
          instructions: 'Review a simulated 12-email contentious thread and write a 100-word synthesis email establishing consensus and assigned action items.'
        }
      ]
    },
    questions: [
      {
        id: 9,
        topic: "Professional Email Thread Management",
        question: "When a multi-person email thread becomes chaotic and exceeds 25 messages with no clear resolution, what is the best leadership action?",
        options: [
          "Delete your email account",
          "Send a synthesis email summarizing agreed items, defining open blockers, and proposing a concrete deadline-driven path forward",
          "Reply all with an angry complaint",
          "Send 25 more emails"
        ],
        correctAnswer: 1,
        explanation: "Stepping in with a clear, structured synthesis cuts through noise, establishes alignment, and drives consensus."
      }
    ]
  },
  {
    id: 'eew-adv-10',
    orderIndex: 10,
    title: '36. Email Productivity and Workflow',
    description: 'Master personal email productivity: Inbox Zero architecture, batch processing, response time SLAs, VIP filtering rules, follow-up tracking systems, and eliminating low-value messages.',
    duration: '45 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Unchecked email inboxes consume over 28% of a knowledge worker’s workweek. Mastering email productivity systems transforms email from an overwhelming distraction into an organized, high-efficiency execution tool.',
      objectives: [
        'Implement the 4D Inbox Zero methodology (Do, Defer, Delegate, Delete)',
        'Establish strategic batch-processing windows rather than checking email constantly',
        'Configure smart filters, labels, and automated triage rules',
        'Write reusable snippets and text expanders for recurring communication workflows'
      ],
      sections: [
        {
          title: 'The 4D Triage System & Batch Processing',
          content: '1. Do: If an email requires under 2 minutes, execute and archive immediately.\n2. Defer: If it requires deep work, block calendar time and label as `@ActionRequired`.\n3. Delegate: Forward with clear context and assigned owner, then archive.\n4. Delete / Archive: Clear informational updates, newsletters, and finished threads immediately.',
          explanation: 'Processing emails in 3 dedicated daily batches (e.g. 09:00, 13:00, 16:30) saves 10+ hours weekly compared to continuous interruption.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: High-Efficiency Text Expander Snippets',
              code: `Snippet: ;intro\nExpands to: "I hope this email finds you well. I am reaching out regarding..."\n\nSnippet: ;avail\nExpands to: "I would be delighted to meet. Here are three times that work for my schedule (EST):\\n- Option 1: \\n- Option 2: \\n- Option 3: "\n\nSnippet: ;ack\nExpands to: "Received with thanks. I am reviewing the materials and will provide an update by end of day tomorrow."`
            },
            {
              language: 'markdown',
              title: 'Example 2: Setting Clear Response Time Expectations (Out-of-Office)',
              code: `Subject: Out of Office: Developing Deep Focus (Returning Monday, Oct 26)\n\nHello,\n\nThank you for your message. I am currently out of the office on personal leave / deep project focus and will have limited access to email until Monday, October 26.\n\n**For Immediate Assistance:**\n- **Project Orion Questions:** Please contact Sarah Jenkins (sarah.j@skillora.ai)\n- **Infrastructure Emergencies:** Please page the On-Call DevOps Engineer at devops@skillora.ai\n\nI will respond to all other correspondence upon my return on October 26.\n\nWarm regards,\nDavid Zhao`
            },
            {
              language: 'markdown',
              title: 'Example 3: Eliminating Unnecessary Emails (The 2-Minute Rule)',
              code: `Before sending, ask yourself:\n1. Does this email add net new value?\n2. Can this be resolved with a quick Slack check?\n3. If I am replying with just "Thanks!", will it help or clutter the recipient's inbox?`
            }
          ],
          commonMistakes: [
            'Keeping 10,000 unread emails in your inbox, creating constant cognitive anxiety.',
            'Leaving email notifications on all day, shattering deep engineering and strategic focus.',
            'Using your email inbox as an unstructured to-do list.'
          ],
          proTip: 'Turn off desktop email pop-up notifications. Check email deliberately during scheduled batch intervals.'
        }
      ],
      keyTakeaways: [
        'Apply the 4D methodology: Do, Defer, Delegate, Delete/Archive.',
        'Batch-process emails 2-3 times daily to protect deep focus blocks.',
        'Use reusable snippets for high-frequency responses.'
      ],
      practiceExercises: [
        {
          title: 'Productivity Workflow Setup',
          instructions: 'Design 5 custom text expander templates for your most common workplace emails (Meeting scheduling, document receipt, delegation, polite deferral, thank you).'
        }
      ]
    },
    questions: [
      {
        id: 10,
        topic: "Email Productivity and Workflow",
        question: "In the 4D Inbox Zero methodology, what should you do with an incoming email that requires a 90-second response?",
        options: [
          "Leave it in your inbox for 3 weeks",
          "Do it immediately, send the response, and archive the message",
          "Forward it to the CEO",
          "Print it out on paper"
        ],
        correctAnswer: 1,
        explanation: "The 2-minute rule dictates that if an action takes under 2 minutes, executing and archiving it immediately prevents cognitive buildup and backlog bloat."
      }
    ]
  },
  {
    id: 'eew-adv-11',
    orderIndex: 11,
    title: '37. Editing Weak Emails into Strong Emails',
    description: 'Master deep before-and-after editing: diagnosing structural flaws, fixing passive-aggressive tone, eliminating redundancies, elevating grammar, and transforming mediocre drafts into executive masterpieces.',
    duration: '50 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Editing is the ultimate crucible of professional communication. Great writers are not born with perfect first drafts; they possess the analytical discipline to diagnose structural weaknesses, cut verbal fluff, and elevate tone into polished leadership assets.',
      objectives: [
        'Diagnose 5 common email failure modes: Rambling, Defensiveness, Ambiguity, Aggression, and Clutter',
        'Execute multi-pass editing: Pass 1 (Structure/BLUF), Pass 2 (Tone/Diplomacy), Pass 3 (Conciseness/Grammar)',
        'Transform real-world weak emails into high-impact executive models',
        'Build a personalized pre-send self-editing heuristic'
      ],
      sections: [
        {
          title: 'The 3-Pass Editing Framework',
          content: 'Pass 1 (Architecture): Is the bottom line up front? Are paragraphs chunked? Are action items distinct?\nPass 2 (Tone): Does the email sound confident and respectful? Are passive-aggressive words eliminated?\nPass 3 (Micro-Edit): Are redundant words cut? Are dates and attachments verified?',
          explanation: 'Surgical editing elevates standard workplace writing into executive-grade communication.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Complete Before-and-After Transformation (Client Delay)',
              code: `Weak Initial Draft (210 words - Defensive, Rambling, Blaming Others):\nSubj: delay on project\nhey arthur, i just wanted to write to you to let you know that unfortunately we are having some really bad issues with the backend server code because our third party database provider had a big crash yesterday and our developers couldn't get into the system. so because of that we are not going to be able to finish the staging deploy by today like we promised before. its really not our fault but we are trying our best. i think we can probably have it ready by next tuesday maybe wednesday if nothing else goes wrong. let me know if that works or if your boss is mad. sorry about this!!\n\nStrong Executive Revision (88 words - Accountable, Structured, Solution-Oriented):\nSubject: Milestone Update: Project Orion Staging Deployment (Scheduled for Tuesday, Oct 20)\n\nDear Mr. Pendleton,\n\nI am writing to provide an update regarding our Project Orion deployment schedule.\n\nDue to a 6-hour database outage during yesterday's testing cycle, we have adjusted our staging release date to **Tuesday, October 20 at 3:00 PM EST** to ensure all automated security tests pass without exception.\n\n**Next Steps:**\n- Staging release live: Tuesday, Oct 20 (3:00 PM EST)\n- Client walkthrough demo: Wednesday, Oct 21 (10:00 AM EST)\n\nThank you for your understanding as we maintain strict security standards.\n\nBest regards,\nJulian Hayes`
            },
            {
              language: 'markdown',
              title: 'Example 2: Before-and-After Transformation (Internal Escalation)',
              code: `Weak Draft (Aggressive & Vague):\nSubj: WHY IS THIS NOT DONE???\nMarcus you promised me the API spec 2 days ago and i still dont have it. you are blocking the whole team. send it right now.\n\nStrong Revision (Firm, Specific & Professional):\nSubject: Urgent: API Spec Required for Mobile Checkout Sprint (Due Today 4 PM)\n\nHi Marcus,\n\nI am checking in on the GraphQL API specification for the mobile checkout sprint, which was scheduled for completion on Tuesday.\n\nOur frontend team begins implementation tomorrow morning. To prevent sprint blockers, could you please share the draft spec by **4:00 PM today**?\n\nPlease let me know if you need any assistance to finalize the documentation.\n\nBest regards,\nElena`
            },
            {
              language: 'markdown',
              title: 'Example 3: Before-and-After Transformation (Executive Proposal)',
              code: `Weak Draft: 300 words of unstructured rambling about why the company needs new laptops.\n\nStrong Revision: 110-word BLUF decision memo with pricing table, ROI calculation, and Friday approval deadline.`
            }
          ],
          commonMistakes: [
            'Sending your first unedited stream-of-consciousness draft.',
            'Editing only for spelling while ignoring defensive tone or unorganized structure.',
            'Failing to remove passive-aggressive words like "obviously" or "per my previous email".'
          ],
          proTip: 'Read your draft from the recipient’s perspective: "If I received this email during a stressful day, would I feel respected, informed, and motivated to act?"'
        }
      ],
      keyTakeaways: [
        'Apply the 3-pass editing system: Architecture, Tone, and Micro-Editing.',
        'Replace defensiveness with accountability and clear next-step commitments.',
        'Transform emotional complaints into objective, deadline-driven requests.'
      ],
      practiceExercises: [
        {
          title: 'Deep Editing Masterclass',
          instructions: 'Take two provided poor email drafts (a defensive client response and a disorganized project update) and rewrite them into executive-grade models.'
        }
      ]
    },
    questions: [
      {
        id: 11,
        topic: "Editing Weak Emails into Strong Emails",
        question: "When editing a poor email draft containing defensive excuses ('It wasn't our fault, the server broke'), how should it be revised?",
        options: [
          "Add more exclamation marks to prove how sorry you are",
          "Remove defensive blame, take professional ownership, explain the revised timeline objectively, and present concrete next steps",
          "Blame the client instead",
          "Delete the email and never speak to the client again"
        ],
        correctAnswer: 1,
        explanation: "Executive communication eliminates defensive finger-pointing in favor of objective status updates, accountability, and clear forward-looking milestones."
      }
    ]
  },
  {
    id: 'eew-adv-12',
    orderIndex: 12,
    title: '38. Advanced Email Templates & Frameworks',
    description: 'Build a comprehensive master library of production-ready executive templates: contract disputes, crisis notifications, partnership proposals, sensitive personnel feedback, and board updates.',
    duration: '50 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'High-performing executives do not invent communications from scratch during high-stress situations. Maintaining a battle-tested library of advanced templates ensures speed, precision, and flawless diplomacy when the stakes are highest.',
      objectives: [
        'Master 8 enterprise-grade email frameworks for critical business milestones',
        'Customize modular templates with variable placeholders and tailored context',
        'Deploy standardized executive escalation, proposal, and negotiation frameworks',
        'Integrate templates into enterprise team playbooks'
      ],
      sections: [
        {
          title: 'The Master Executive Template Suite',
          content: 'This module provides full, production-ready templates covering 8 high-stakes executive scenarios: 1) Executive Decision Memo, 2) Formal Vendor Escalation, 3) Critical Outage Briefing, 4) Strategic Partnership Proposal, 5) Contract Scope Dispute, 6) Salary Negotiation, 7) Diplomatic Scope Creep Rejection, 8) Board Investor Highlight.',
          explanation: 'Using structured templates ensures consistency, legal precision, and rapid execution under pressure.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Template 1: Formal Vendor Contract Dispute & Rectification Notice',
              code: `Subject: [Formal Notice] Performance Deficiency & Rectification Plan - Contract #[CONTRACT_ID]\n\nDear [EXECUTIVE_NAME],\n\nI am writing to formally communicate our concerns regarding ongoing performance deficiencies under Master Services Agreement #[CONTRACT_ID], executed on [DATE].\n\n**Summary of Deficiencies:**\nOver the past [TIMEFRAME], [VENDOR_NAME] has failed to deliver the following agreed-upon contractual milestones:\n1. [DEFICIENCY_1]: [IMPACT_DESCRIPTION]\n2. [DEFICIENCY_2]: [IMPACT_DESCRIPTION]\n\n**Contractual Reference & Business Impact:**\nThese deficiencies represent a direct non-conformance with Section [SECTION_NUM] (Service Level Commitments) and have resulted in [QUANTIFIED_BUSINESS_IMPACT].\n\n**Required Rectification Plan:**\nWe require the submission of a formal Corrective Action Plan by [DEADLINE_DATE] at 5:00 PM EST, detailing:\n- Concrete engineering milestones to achieve full specification compliance\n- Assigned senior technical leadership oversight\n- Application of SLA penalty credits to Invoice #[INVOICE_ID]\n\nWe value our commercial partnership and expect immediate executive intervention to resolve these matters.\n\nSincerely,\n[YOUR_NAME]\n[YOUR_TITLE] | [COMPANY_NAME]`
            },
            {
              language: 'markdown',
              title: 'Template 2: Strategic Cross-Border Partnership Pitch',
              code: `Subject: Partnership Proposal: [YOUR_COMPANY] & [PARTNER_COMPANY] Collaboration\n\nDear [PARTNER_EXECUTIVE_NAME],\n\nI hope this email finds you well.\n\nFollowing [PARTNER_COMPANY]'s recent expansion into [MARKET/DOMAIN], I am reaching out to propose a high-value strategic partnership between our organizations.\n\n[YOUR_COMPANY] currently provides [CORE_VALUE] to over [USER_METRIC] globally. We have identified significant mutual synergy in establishing [SPECIFIC_INITIATIVE, e.g. a native API integration / co-marketing report].\n\n**Key Mutual Benefits:**\n- **For [PARTNER_COMPANY]:** [BENEFIT_1, e.g. Access to 100k active developers]\n- **For [YOUR_COMPANY]:** [BENEFIT_2, e.g. Seamless enterprise customer onboarding]\n- **Commercial Value:** Projected [ROI/REVENUE_POTENTIAL]\n\nWe have prepared a preliminary 2-page strategic prospectus. Would you be open to a 20-minute introductory call next [DAY, e.g. Tuesday at 10 AM EST] to discuss feasibility?\n\nWarm regards,\n[YOUR_NAME]\n[YOUR_TITLE]`
            },
            {
              language: 'markdown',
              title: 'Template 3: Executive Board of Directors Quarterly Memo',
              code: `Subject: [BOARD BRIEFING] [COMPANY_NAME] Q[QUARTER] Performance Summary\n\nDear Board of Directors,\n\nPlease find our executive briefing for Q[QUARTER] [YEAR]:\n\n**1. Financial Performance vs Plan:**\n- ARR: $[CURRENT_ARR] ([GROWTH_PERCENT]% YoY, vs $[TARGET_ARR] target)\n- Gross Margin: [MARGIN_PERCENT]%\n- Net Cash Burn: $[MONTHLY_BURN]/mo | Runway: [RUNWAY_MONTHS] months ($[CASH_BALANCE] in bank)\n\n**2. Core Strategic Wins:**\n- [WIN_1]\n- [WIN_2]\n\n**3. Key Risks & Mitigations:**\n- Risk: [RISK_DESCRIPTION] -> Mitigation: [MITIGATION_ACTION]\n\n**4. Key Board Asks:**\n- [SPECIFIC_ASK, e.g. Customer introductions in Healthcare sector]\n\nSincerely,\n[CEO_NAME]\nChief Executive Officer`
            }
          ],
          commonMistakes: [
            'Using templates without customizing brackets (`[COMPANY_NAME]`) resulting in embarrassing placeholder leaks.',
            'Using rigid formal templates for quick 1-on-1 team chats.',
            'Failing to update dates and financial numbers in boilerplate clauses.'
          ],
          proTip: 'Store templates in an organization-wide text snippet tool (e.g. TextExpander, Alfred, or Notion) so the entire leadership team uses consistent language.'
        }
      ],
      keyTakeaways: [
        'Maintain standardized templates for high-stress corporate scenarios.',
        'Always double-check that all placeholder tags are customized before sending.',
        'Standardize templates across your team to enforce brand quality.'
      ],
      practiceExercises: [
        {
          title: 'Template Customization Lab',
          instructions: 'Take the Vendor Dispute Template and customize it for a realistic scenario involving a 3-week delay on an enterprise mobile software build.'
        }
      ]
    },
    questions: [
      {
        id: 12,
        topic: "Advanced Email Templates & Frameworks",
        question: "Why should an executive team maintain standardized, battle-tested email templates for critical scenarios like vendor disputes or outage crises?",
        options: [
          "To avoid having to write anything original ever again",
          "To ensure speed, legal accuracy, emotional control, and consistent professional rigor under high-stress crisis conditions",
          "Because templates make email servers run faster",
          "Because typing emails manually is forbidden"
        ],
        correctAnswer: 1,
        explanation: "Standardized templates provide a disciplined structural and legal framework that prevents panicked mistakes and ensures consistent executive communication."
      }
    ]
  },
  {
    id: 'eew-adv-13',
    orderIndex: 13,
    title: '39. Email Ethics, Privacy, and Professional Responsibility',
    description: 'Master legal and ethical compliance: confidentiality policies, handling PII/GDPR data, avoiding subpoena traps, CC/BCC ethics, workplace harassment standards, and email records retention.',
    duration: '45 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Every email sent from a corporate account is a permanent, legally discoverable business record. Understanding data privacy, confidentiality obligations, anti-harassment standards, and ethical communication protects you and your company from legal liability.',
      objectives: [
        'Understand the legal discoverability of business emails in litigation (subpoenas and e-discovery)',
        'Ensure compliance with GDPR, HIPAA, and CCPA when transmitting sensitive data',
        'Avoid unethical BCC usage and toxic communication practices',
        'Apply corporate email retention and destruction policies responsibly'
      ],
      sections: [
        {
          title: 'Legal Discoverability & Email Hygiene (The "New York Times" Rule)',
          content: 'The "New York Times Rule": Never write anything in an email that you would not be comfortable seeing published on the front page of a major newspaper or read aloud in a public courtroom. Emails are permanent corporate records.',
          explanation: 'Deleting an email does not erase it from corporate server archives or litigation backups.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Safe vs Legally Dangerous Phrasing',
              code: `Legally Dangerous (Speculative, Inflammatory, Discoverable):\n- "Let's hide this bug from the client so they don't sue us."\n- "I think our server security is totally broken and we are definitely going to get hacked."\n- "Our competitor's product is garbage and they are stealing from us."\n\nLegally Safe & Professional (Factual, Objective, Remediative):\n- "We have identified an edge-case defect in module 4 and are deploying an immediate security patch."\n- "Our infrastructure audit identified 2 vulnerabilities; remediation tickets are assigned with a Friday completion target."\n- "We will focus on demonstrating our verified performance benchmarks to prospective clients."`
            },
            {
              language: 'markdown',
              title: 'Example 2: Transmitting Sensitive Customer Data (GDPR Compliant)',
              code: `Non-Compliant (Plain Text PII):\nHi team, here is the customer's credit card: 4111-2222-3333-4444 and password: Password123!\n\nCompliant (Encrypted Zero-Knowledge Transfer):\nHi Team,\n\nThe customer account configuration has been securely uploaded to our encrypted vault.\n\nSecure Vault Link: https://vault.skillora.ai/records/user-9842 (Password credentials sent via separate secure SMS channel).\n\nBest regards,\nNathan Cole`
            },
            {
              language: 'markdown',
              title: 'Example 3: Confidentiality Notice Standard Footer',
              code: `CONFIDENTIALITY NOTICE: This transmission, including any attachments, contains information that may be confidential, legally privileged, and protected from disclosure under applicable law. It is intended solely for the use of the designated recipient(s). If you are not the intended recipient, you are hereby notified that any dissemination, copying, distribution, or action taken in reliance upon the contents of this information is strictly prohibited. If you have received this transmission in error, please immediately notify the sender and permanently delete this email and all attached files.`
            }
          ],
          commonMistakes: [
            'Putting sensitive personal medical or credit card data directly into email bodies.',
            'Ventilating emotional anger about coworkers in written emails.',
            'Assuming that deleting an email from your Outlook trash removes it from enterprise legal discovery.'
          ],
          proTip: 'If a conversation involves sensitive personnel issues or potential legal disputes, pick up the phone or speak in person rather than creating an unvetted email trail.'
        }
      ],
      keyTakeaways: [
        'Remember the New York Times Rule: Every email is a permanent legal record.',
        'Never transmit plain-text passwords or PII over email; use encrypted vaults.',
        'Avoid speculative statements about liability or legal fault in written emails.'
      ],
      practiceExercises: [
        {
          title: 'Legal & Ethical Audit Lab',
          instructions: 'Audit 3 high-risk email drafts containing regulatory liabilities, toxic BCC usage, and plain-text PII, rewriting them into compliant corporate communications.'
        }
      ]
    },
    questions: [
      {
        id: 13,
        topic: "Email Ethics, Privacy, and Professional Responsibility",
        question: "What is the core principle of the 'New York Times Rule' in corporate email writing?",
        options: [
          "Always copy the New York Times on all company announcements",
          "Never write anything in an email that you would not be comfortable seeing published on the front page of a major newspaper or read in a courtroom",
          "Write all emails in journalistic AP style",
          "Never send emails on Sundays"
        ],
        correctAnswer: 1,
        explanation: "Because corporate emails are permanently archived and subject to legal e-discovery, every message should be written with the assumption that it could be publicly scrutinized."
      }
    ]
  },
  {
    id: 'eew-adv-14',
    orderIndex: 14,
    title: '40. Multilingual & International Business Email Nuances',
    description: 'Master global Plain English standards: avoiding false cognates, high-context title protocols, managing language barriers across international offices, and writing for non-native English speakers.',
    duration: '45 mins',
    xpReward: 150,
    isCompleted: false,
    status: 'locked',
    type: 'lesson',
    requiresQuiz: true,
    lessonContent: {
      overview: 'Over 80% of global business interactions in English occur between non-native speakers. Writing for an international audience requires avoiding confusing false cognates, eliminating localized slang, and embracing the International Plain English standard.',
      objectives: [
        'Apply International Plain English standards to global cross-border communications',
        'Identify false cognates and ambiguous phrasing that create international confusion',
        'Structure technical instructions for offshore engineering and support hubs',
        'Master global honorifics and cultural greeting etiquette'
      ],
      sections: [
        {
          title: 'International Plain English Standards',
          content: '1. Sentence Length: Keep sentences between 15 and 20 words.\n2. Word Choice: Use simple, universally recognized verbs ("build", "test", "send", "review") instead of regional metaphors ("take a crack at", "get our ducks in a row").\n3. Layout: Use numbered steps for instructions.',
          explanation: 'Clear, simple English is not dumbing down; it is the ultimate expression of international respect and operational efficiency.',
          codeSnippets: [
            {
              language: 'markdown',
              title: 'Example 1: Complex vs International Plain English',
              code: `Complex & Idiomatic (Confusing for global teams):\n"We need to spearhead this brainstorm and iron out the kinks before we greenlight the deliverable."\n\nInternational Plain English (Universal clarity):\n"We must discuss this project and resolve all technical defects before approving the release."`
            },
            {
              language: 'markdown',
              title: 'Example 2: Clear Step-by-Step Technical Instructions for Global Teams',
              code: `Subject: Deployment Instructions: Staging Server Update (Nov 3)\n\nHi Team,\n\nPlease follow these 4 steps to deploy the staging server update:\n\n1. Log in to the AWS Staging Console (https://aws.skillora.ai).\n2. Pull the latest Docker container tag: \`skillora-core:v2.4.1\`.\n3. Execute the database migration script: \`npm run db:migrate\`.\n4. Verify that all 12 health-check endpoints return HTTP 200 OK status.\n\nPlease reply to this email once step 4 is completed.\n\nThank you,\nDavid Zhao`
            },
            {
              language: 'markdown',
              title: 'Example 3: Avoiding False Cognates across Global Languages',
              code: `- "Eventually" means "in the end / ultimately" (not "possibly" like in Spanish/French 'éventuellement').\n- "Actual" means "real / existing" (not "current" like in German/Spanish 'aktuell / actual').\nAlways verify that your vocabulary conveys exact chronological and technical intent.`
            }
          ],
          commonMistakes: [
            'Using regional slang like "hit a home run" or "touch base" with international partners.',
            'Writing 50-word compound sentences with multiple embedded clauses that confuse translation engines.',
            'Assuming that silence in high-context cultures means agreement (often it means polite contemplation).'
          ],
          proTip: 'When writing to global teams, use numbered lists for all procedural workflows. Numbers transcend language barriers and create unambiguous accountability.'
        }
      ],
      keyTakeaways: [
        'Use International Plain English with simple 15-20 word sentences.',
        'Use numbered steps for multi-step technical instructions.',
        'Avoid confusing false cognates and localized cultural idioms.'
      ],
      practiceExercises: [
        {
          title: 'Global Plain English Translation Lab',
          instructions: 'Take an idiom-heavy, slang-filled 100-word American technical email and rewrite it into clean International Plain English suitable for an offshore engineering center.'
        }
      ]
    },
    questions: [
      {
        id: 14,
        topic: "Multilingual & International Business Email Nuances",
        question: "What is the most effective way to communicate complex multi-step technical instructions to a globally distributed international team?",
        options: [
          "Write one giant unbroken paragraph full of American idioms",
          "Use a structured, numbered list (1, 2, 3, 4) with concise Plain English sentences and explicit verification criteria",
          "Send an audio recording spoken as fast as possible",
          "Ask them to guess what steps to take"
        ],
        correctAnswer: 1,
        explanation: "Numbered lists with concise Plain English sentences provide universal visual clarity and eliminate cross-language ambiguity."
      }
    ]
  },
  {
    id: 'eew-adv-p1',
    orderIndex: 15,
    title: 'Advanced Project 1: Strategic Workplace & Executive Communications Portfolio',
    description: 'Complete an advanced 10-scenario executive communications portfolio: 1) BLUF Decision Memo, 2) High-Stakes Vendor SLA Dispute, 3) Severity 1 Outage Briefing, 4) Strategic B2B Partnership Pitch, 5) Contract Negotiation, 6) Diplomatic Scope Creep Rejection, 7) Cross-Cultural Partner Outreach, 8) Board of Directors Highlight, 9) Project Post-Mortem (RCA), and 10) Sensitive Performance Feedback.',
    duration: '4 hours',
    xpReward: 600,
    isCompleted: false,
    status: 'locked',
    isProject: true,
    type: 'project',
    requiresQuiz: false,
    projectDetails: {
      title: 'Advanced Project 1: Strategic Workplace & Executive Communications Portfolio',
      overview: 'As Vice President of Operations at Skillora Global, you are responsible for leading the organization through mission-critical executive decisions, major vendor disputes, crisis response, cross-border partnerships, and strategic board governance. You must author 10 comprehensive, professional email deliverables meeting the highest global executive standards.',
      deliverables: [
        {
          id: 'del-adv-01',
          title: 'Deliverable 1: BLUF Executive Decision Request Memo',
          description: 'Draft a 1-page executive decision memo to the CEO requesting $180,000 cloud infrastructure migration approval with options matrix and Friday deadline.',
          checklist: [
            'Clear [Decision Required] subject line with deadline date',
            'Bottom Line Up Front (BLUF) in first 2 sentences',
            'Structured 3-option comparative evaluation matrix',
            'Explicit ROI justification and recommended action'
          ]
        },
        {
          id: 'del-adv-02',
          title: 'Deliverable 2: High-Stakes Vendor SLA Breach & Rectification Notice',
          description: 'Author a formal legal-grounded escalation to an enterprise hosting vendor regarding 3 severe downtime incidents, citing contract clauses and demanding an RCA and SLA credits.',
          checklist: [
            'Objective chronological incident timeline',
            'Quantifiable business impact on enterprise users',
            'Specific Master Services Agreement clause citations',
            'Strict deadline for Corrective Action Plan and SLA credit application'
          ]
        },
        {
          id: 'del-adv-03',
          title: 'Deliverable 3: Critical Severity 1 Platform Outage Alert & Cadence',
          description: 'Compose an enterprise client crisis alert detailing an active database failover incident, including impact scope, remediation actions, ETR, and next update commitment.',
          checklist: [
            'Clear incident severity tag and timestamp',
            'Explicit scope of affected subsystems',
            'Engineering remediation steps in progress',
            'Realistic ETR and specific committed next briefing timestamp'
          ]
        },
        {
          id: 'del-adv-04',
          title: 'Deliverable 4: Strategic B2B Technology Partnership Pitch',
          description: 'Draft a strategic partnership proposal to an external LMS enterprise pitching a native API integration and co-marketing whitepaper based on joint customer demand.',
          checklist: [
            'Compelling opening hook referencing shared Fortune 500 customers',
            'Clear articulation of mutual technical and economic value',
            'Proposed co-marketing initiatives (press release, webinar)',
            'Low-friction 20-minute exploratory meeting request'
          ]
        },
        {
          id: 'del-adv-05',
          title: 'Deliverable 5: Conditional Commercial Contract Negotiation',
          description: 'Author a contract negotiation email proposing a 15% discount on software licensing in exchange for a 3-year commitment, upfront payment, and case study rights.',
          checklist: [
            'Professional, collaborative negotiation tone',
            'Clear conditional syntax (If-Then trade-offs)',
            'Packaging of all terms into one structured proposal',
            'Reiteration of eagerness to finalize agreement'
          ]
        },
        {
          id: 'del-adv-06',
          title: 'Deliverable 6: Diplomatic Scope Creep Rejection with Change Order',
          description: 'Draft an email declining an urgent, out-of-scope client feature request to preserve the Phase 1 launch deadline, presenting a structured Phase 2 Change Order option.',
          checklist: [
            'Appreciative, validating opening acknowledging the feature\'s merit',
            'Strategic explanation of launch timeline constraints',
            'Clear decision upholding Phase 1 scope boundary',
            'Structured Phase 2 Change Order proposal'
          ]
        },
        {
          id: 'del-adv-07',
          title: 'Deliverable 7: High-Context Cross-Cultural Partner Outreach',
          description: 'Compose a formal, respectful business email to a senior executive in Tokyo proposing an academic alliance, applying appropriate honorifics and Plain English.',
          checklist: [
            'Culturally calibrated formal salutation and opening courtesy',
            'Relationship-first, respectful tone without localized slang',
            'Clear Plain English explanation of proposed educational alliance',
            'Respectful closing and full international signature'
          ]
        },
        {
          id: 'del-adv-08',
          title: 'Deliverable 8: Quarterly Board of Directors Investor Highlight Memo',
          description: 'Author a quarterly executive highlight memo for the Board of Directors summarizing ARR growth, burn rate, runway, strategic wins, top risks, and specific board asks.',
          checklist: [
            'Clean executive dashboard table with key financial metrics vs plan',
            'Bulleted strategic product and distribution wins',
            'Honest risk assessment with proactive mitigation roadmaps',
            'Targeted asks for board assistance'
          ]
        },
        {
          id: 'del-adv-09',
          title: 'Deliverable 9: Blameless Post-Mortem & Root Cause Analysis (RCA)',
          description: 'Draft an internal engineering and executive post-mortem email analyzing a major system failover, detailing root cause, contributing factors, and permanent safeguards.',
          checklist: [
            'Blameless, systemic technical analysis',
            'Detailed incident timeline and root cause diagnosis',
            'Completed and scheduled architectural safeguards',
            'Reassurance of platform stability'
          ]
        },
        {
          id: 'del-adv-10',
          title: 'Deliverable 10: Growth-Oriented Constructive Performance Coaching',
          description: 'Write a private, supportive, growth-oriented performance feedback email to a senior team lead regarding missed delivery milestones, proposing workload optimization.',
          checklist: [
            'Private, respectful, supportive tone',
            'Objective data points regarding sprint delivery gaps',
            'Collaborative focus on unblocking dependencies and workload balance',
            'Invitation to a dedicated 1-on-1 coaching session'
          ]
        }
      ],
      submissionGuidelines: 'Submit all 10 deliverables in clean Markdown format with complete email metadata headers (To, CC/BCC, Subject, Salutation, Body, Sign-off, Signature).',
      evaluationRubric: [
        {
          criteria: 'Executive Leadership & Strategic Impact',
          advanced: 'All 10 deliverables demonstrate flawless executive presence, authoritative clarity, and strategic mastery.',
          proficient: 'All 10 deliverables complete with minor structural or context gaps.',
          needsWork: 'Incomplete deliverables or failure to adopt executive-grade communication standards.'
        },
        {
          criteria: 'Diplomacy, Tone & Ethical Precision',
          advanced: 'Masterful tone calibration across crises, negotiations, legal disputes, and cross-cultural outreach.',
          proficient: 'Consistently professional tone with occasional minor stiffness.',
          needsWork: 'Aggressive, defensive, or legally risky phrasing.'
        },
        {
          criteria: 'Grammar, Syntax & Visual Hierarchy',
          advanced: 'Flawless advanced grammar (inverted conditionals, parallel structure), visual scannability, and zero typos.',
          proficient: 'Clean formatting with 1-2 minor spacing or grammatical inconsistencies.',
          needsWork: 'Frequent grammatical errors or poor formatting.'
        }
      ]
    }
  },
  {
    id: 'eew-adv-p2',
    orderIndex: 16,
    title: 'Advanced Capstone Project: Production Email Master Portfolio',
    description: 'Execute the definitive Skillora AI Master Email Portfolio: author 10 comprehensive production email artifacts covering the complete professional communication spectrum, plus 2 advanced before-and-after email diagnostic transformations.',
    duration: '5 hours',
    xpReward: 750,
    isCompleted: false,
    status: 'locked',
    isProject: true,
    type: 'project',
    requiresQuiz: false,
    projectDetails: {
      title: 'Advanced Capstone Project: Production Email Master Portfolio',
      overview: 'As Chief Operating Officer (COO) of an enterprise technology organization, you are tasked with creating the company\'s official Executive Communication Playbook and Master Portfolio. You must author 10 production-grade communications spanning corporate governance, crisis response, enterprise sales, vendor disputes, and talent management, plus complete 2 surgical before-and-after editing transformations.',
      deliverables: [
        {
          id: 'del-cap-01',
          title: 'Capstone 1: Executive C-Suite BLUF Decision Briefing',
          description: 'A comprehensive 150-word decision memo to the Board/CEO requesting approval for a major strategic initiative with a 3-option financial evaluation matrix.',
          checklist: [
            'BLUF executive opening with explicit decision deadline',
            '3-option comparative matrix with cost/risk analysis',
            'Concrete ROI justification and risk mitigation plan',
            'Full executive signature block'
          ]
        },
        {
          id: 'del-cap-02',
          title: 'Capstone 2: High-Stakes Contract & SLA Breach Formal Notice',
          description: 'Formal legal escalation to a strategic infrastructure vendor documenting chronic outages, citing contract clauses, and demanding corrective action plans.',
          checklist: [
            'Objective chronological incident timeline with logs',
            'Quantifiable business disruption metrics',
            'Contract clause citations and SLA credit claims',
            'Strict deadline for executive Corrective Action Plan'
          ]
        },
        {
          id: 'del-cap-03',
          title: 'Capstone 3: Severity 1 Crisis & Outage Communications Suite',
          description: 'A 2-part enterprise customer crisis communication: 1) Active Incident Update with ETR and next briefing time, 2) Post-Incident RCA Delivery with SLA credits.',
          checklist: [
            'Active incident alert with clear impact scope and ETR',
            'Committed recurring briefing timestamp',
            'Detailed post-incident Root Cause Analysis (RCA)',
            'Formal SLA credit confirmation'
          ]
        },
        {
          id: 'del-cap-04',
          title: 'Capstone 4: Multi-Year B2B Enterprise Technology Partnership Pitch',
          description: 'Strategic B2B proposal to an enterprise platform pitching an API integration and co-branded distribution based on joint Fortune 500 customer demand.',
          checklist: [
            'Compelling opening hook citing mutual enterprise client demand',
            'Detailed mutual technical and economic value breakdown',
            'Proposed co-marketing roadmap (joint webinar, press release)',
            'Low-friction exploratory meeting request'
          ]
        },
        {
          id: 'del-cap-05',
          title: 'Capstone 5: Multi-Tier Commercial Contract Negotiation',
          description: 'Commercial contract negotiation proposing a 15% price concession in exchange for a 3-year term, upfront payment, and marketing case study rights.',
          checklist: [
            'Flawless conditional bargaining syntax (If-Then trade-offs)',
            'Packaged multi-term proposal (Price, Term, Payment, Marketing)',
            'Collaborative, win-win commercial framing',
            'Clear path to contract execution'
          ]
        },
        {
          id: 'del-cap-06',
          title: 'Capstone 6: Diplomatic Scope Creep Rejection & Change Order',
          description: 'Diplomatic client communication rejecting out-of-scope feature additions to protect the Phase 1 launch deadline, providing a formal Phase 2 Change Order.',
          checklist: [
            'Appreciative opening validating the client\'s feature vision',
            'Transparent explanation of Phase 1 schedule boundaries',
            'Firm decision maintaining current scope',
            'Detailed Phase 2 Change Order proposal with timeline and budget'
          ]
        },
        {
          id: 'del-cap-07',
          title: 'Capstone 7: Cross-Cultural Academic Alliance Proposal',
          description: 'High-context, formal academic partnership proposal to a university in Tokyo, applying honorific protocols, Plain English, and time-zone etiquette.',
          checklist: [
            'Culturally calibrated salutation and formal opening courtesy',
            'Relationship-first framing without localized idioms',
            'Unambiguous Plain English explanation of laboratory access grants',
            'Respectful closing and international signature'
          ]
        },
        {
          id: 'del-cap-08',
          title: 'Capstone 8: Quarterly Board of Directors Investor Highlight Memo',
          description: 'Quarterly executive briefing for the Board of Directors summarizing ARR growth, burn rate, runway, strategic wins, top risks, and specific board asks.',
          checklist: [
            'Executive financial metrics dashboard table vs quarterly plan',
            'Bulleted strategic wins across product and enterprise sales',
            'Proactive risk assessment with mitigation roadmap',
            'Targeted board asks for strategic customer introductions'
          ]
        },
        {
          id: 'del-cap-09',
          title: 'Capstone 9: Blameless Systemic Incident Post-Mortem (RCA)',
          description: 'Internal engineering post-mortem analyzing a major database failover, detailing root cause, timeline, contributing factors, and permanent safeguards.',
          checklist: [
            'Blameless, systemic technical analysis',
            'Chronological incident timeline and root cause diagnosis',
            'Completed and scheduled architectural safeguards',
            'Engineering reassurance and documentation link'
          ]
        },
        {
          id: 'del-cap-10',
          title: 'Capstone 10: Growth-Oriented Constructive Performance Coaching',
          description: 'Private, supportive performance coaching email to a senior team lead regarding delivery milestones, proposing workload balance and unblocking dependencies.',
          checklist: [
            'Private, supportive, growth-oriented framing',
            'Objective data points regarding sprint delivery gaps',
            'Collaborative focus on unblocking dependencies and workload balance',
            'Invitation to a dedicated 1-on-1 coaching session'
          ]
        },
        {
          id: 'del-cap-11',
          title: 'Capstone 11: Deep Before-and-After Editing Transformation (Defensive Client Email)',
          description: 'Complete diagnostic analysis and surgical rewrite of a 250-word defensive, rambling client delay email into an 85-word executive-grade model.',
          checklist: [
            'Line-by-line diagnostic breakdown of tone and structural flaws',
            'Elimination of all excuses, blaming, and passive-aggressive phrases',
            'Rewritten 85-word executive model with clear dates and next steps',
            'Summary of key editing principles applied'
          ]
        },
        {
          id: 'del-cap-12',
          title: 'Capstone 12: Deep Before-and-After Editing Transformation (Chaotic Project Thread)',
          description: 'Diagnostic analysis and synthesis rewrite of a chaotic 15-message internal project thread into a 100-word decision and consensus email with named task owners.',
          checklist: [
            'Synthesis of all agreed-upon decisions across previous messages',
            'Identification of open blockers and proposed executive path forward',
            'Named task ownership (**@Owner**) with explicit deadlines',
            'Updated subject line following thread hygiene standards'
          ]
        }
      ],
      submissionGuidelines: 'Submit all 12 master deliverables in clean Markdown format with complete email metadata headers (To, CC/BCC, Subject, Salutation, Body, Sign-off, Signature).',
      evaluationRubric: [
        {
          criteria: 'Mastery of Executive Presence & Strategy',
          advanced: 'Flawless leadership voice, authoritative clarity, and strategic alignment across all 12 master portfolio deliverables.',
          proficient: 'All 12 deliverables complete with minor structural or context gaps.',
          needsWork: 'Incomplete portfolio or failure to meet executive-grade standards.'
        },
        {
          criteria: 'Diplomacy, Crisis Management & Tone Calibration',
          advanced: 'Impeccable emotional calibration across high-stakes crises, multi-million dollar negotiations, and sensitive personnel feedback.',
          proficient: 'Consistently professional with minor tone stiffness.',
          needsWork: 'Aggressive, passive-aggressive, or defensive communication.'
        },
        {
          criteria: 'Grammar, Inversion & Advanced Syntax',
          advanced: 'Masterful deployment of inverted conditionals, subjunctive mood, parallel structure, and zero grammatical errors.',
          proficient: 'Clean grammar with 1-2 minor typographical errors.',
          needsWork: 'Multiple grammatical errors or poor formatting.'
        }
      ]
    }
  },
  {
    id: 'eew-adv-assessment',
    orderIndex: 17,
    title: 'Advanced Final Assessment (40 MCQs)',
    description: 'Formal 40-question multiple-choice assessment testing all Level 3 concepts. Passing score: 35/40 (87.5%).',
    duration: '60 mins',
    xpReward: 500,
    isCompleted: false,
    status: 'locked',
    isFinalAssessment: true,
    type: 'assessment',
    requiresQuiz: true,
    totalQuestions: 40,
    passingScore: 35,
    questions: ENGLISH_EMAIL_WRITING_ADVANCED_ASSESSMENT
  }
];
